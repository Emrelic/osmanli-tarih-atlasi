# -*- coding: utf-8 -*-
"""TAHTA — oturumlar arası MESAJ PANOSU. Emre'nin tasarımı (13 Ağustos 2026).

    "Proje dosyasında bir mesaj levhası panosu yapıp tüm oturumların bu panoya
     yazmaları sağlanabilir. HANGİ OTURUM yazıyor, HANGİ OTURUMA gönderiyor,
     HANGİ SAATTE ve TARİHTE yazıyor, ve MESAJ olarak ne yazıyor. Bu panoya
     herkes yazar ve kendisini ilgilendiren kısmı gelir oradan okur."

🔴 NİÇİN GEREKTİ — `send_message` ÖLÇÜLDÜ ve ÇALIŞMIYOR:
    araç "Message sent" diyor · mesaj HEDEFE VARMIYOR
    altı oturum bunu BAĞIMSIZ olarak doğruladı (hazır kıta 2·3·6·7·9·10)
    en keskin kanıt: koordinatör KRONOLOJİ YER'e anahtarlı bir sevk gönderdi,
    araç "sent" dedi; oturum ONDAN SONRA ölçtü ve yazdı:
        "grep -ril 'KITA9|HAZIR KITA 9' -> TEK SONUÇ BU DOSYA."
📌 `CLAUDE.md §11`: *"araç kendi eyleminin SONUCUNU değil DENEMESİNİ
raporluyor."* `"sent"` bir TESLİM değil bir GİRİŞİM kaydıdır.

═══════════════════════════════════════════════════════════════════════════
ALANLAR — Emre'nin listesi + koordinatörün eklediği üçü, gerekçeleriyle
═══════════════════════════════════════════════════════════════════════════
Emre'nin saydıkları:
    gönderen · muhatap · tarih-saat · içerik · okundu mu · cevap bekleniyor mu
Ve sordu: "başka ne olabilir, şimdi aklıma gelmedi."

🔴 ① NO — EN KRİTİK EKSİK, ve Emre'nin kendi iki alanı ONSUZ ÇALIŞMAZ:
   "cevap bekleniyor mu" bir mesaja BAĞLANMALI; "okundu mu" bir mesaj için
   işaretlenmeli. Kimliksiz bir satıra ne cevap bağlanır ne okundu yazılır.
   ⇒ M-0001, M-0002 … Ve cevap yazılırken `--yanit M-0007` ile bağlanır:
     iplik doğar, "şu soruya cevap geldi mi" MAKİNEYE SORULABİLİR olur.
   📌 Bu projenin en pahalı dersi: "bir `if` ile sorulamıyorsa kayıt vardır,
      VERİ YOKTUR." Kimlik, o `if`i mümkün kılan alandır.

② HAL — "okundu mu" TEK BAŞINA yetmiyor, çünkü üç ayrı şey karışıyor:
   okundu ≠ cevaplandı ≠ kapandı. Bir mesaj okunmuş ama cevapsız olabilir
   (en tehlikeli hâl), cevaplanmış ama iş bitmemiş olabilir.
   ⇒ ACIK · CEVAPLANDI · KAPANDI

③ VADE — "cevap bekleniyor mu" EVET ise, NE ZAMANA KADAR?
   Vadesiz bekleyiş bu projede ölçülmüş bir zarar: bir oturum iki gün
   "cevap bekliyor" sanıldı, aslında işini bitirmişti. Vade, bekleyişi
   ÖLÇÜLEBİLİR yapar — `bekleyen --gecikmis` gecikeni tek komutla verir.

🟢 VE "OKUNDU" OTOMATİK — çünkü elle işaretlenen kutu işaretlenmez.
   `oku --kim X` çağıran, gördüğü mesajları OKUDU sayılır ve OKUYAN alanına
   adı+saati düşer. Bir alanın doldurulmasını insana bırakmak, o alanı
   boş bırakmakla aynıdır.
   ⚠️ Çok muhataplı mesajda "okundu" TEK BİR EVET/HAYIR olamaz — kim okudu,
      ne zaman okudu ayrı ayrı tutulur (KİME=HERKES ise bu şart).

Kullanım:
    py arac/tahta.py oku  --kim "RENK 3"              # sana gelenler (okundu işaretlenir)
    py arac/tahta.py yaz  --kim "RENK 3" --kime KOORDINATOR --mesaj "..."
                          [--cevap-bekle] [--vade "2026-08-14 12:00"]
                          [--yanit M-0007]            # bir mesaja cevap
    py arac/tahta.py bekleyen                          # cevap bekleyen AÇIK mesajlar
    py arac/tahta.py bekleyen --gecikmis               # vadesi GEÇMİŞ olanlar
    py arac/tahta.py kapat M-0007 --kim "RENK 3"       # iş bitti, ipliği kapat
"""
import datetime
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "oturumlar")
VERI = os.path.join(DIZIN, "tahta.json")     # 🔴 GERÇEK KAYIT — makine okur
GORUNUM = os.path.join(DIZIN, "TAHTA.md")    # ÜRETİLİR — insan okur

# 🔴 İKİ DOSYA, VE HANGİSİNİN OTORİTE OLDUĞU YAZILI:
# `tahta.json` otoritedir; `TAHTA.md` ondan ÜRETİLİR ve ELLE DÜZENLENMEZ.
# Sebebi ölçülmüş: bu proje "aynı bilgi iki yerde durursa biri güncellenince
# öteki bayatlar" dersini ÜÇ KEZ öğrendi (girdi.py tek tırnak · bagla.py CRLF ·
# renkler.py'nin yorum-ile-sözlük ayrışması). Markdown tabloyu hem yazıp hem
# ayrıştırmak dördüncüsü olurdu — bir boru işareti bütün satırı kaydırır.
# ⇒ Veri JSON'da (json.load ayrıştırır), görünüm üretilir.

HALLER = ["ACIK", "CEVAPLANDI", "KAPANDI"]


def _yukle():
    if not os.path.exists(VERI):
        return []
    try:
        with io.open(VERI, encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        # 🔴 SESSİZ GEÇİLMEZ: bozuk tahta, boş tahtadan KÖTÜDÜR — boş tahta
        # "kimse yazmadı" der, bozuk tahta "mesajın yok" der ve YALAN söyler.
        print("🔴 tahta.json OKUNAMADI: %s" % e)
        print("   Mesajlar kaybolmuş OLABİLİR. Devam etme, KULLANICIYA söyle.")
        sys.exit(2)


def _kaydet(kayit):
    """🔴 ATOMİK YAZIM — 16 Ağustos 2026'da TAHTA BOZULDU ve sebebi buydu.

    VAKA: sekiz oturum aynı anda yazdı. Eski hâl `io.open(VERI, "w")` ile
    dosyayı YERİNDE açıyordu: birinci süreç dosyayı kısaltıp yazarken
    ikincisi araya girdi ve dosyanın sonunda YARIM BİR KALINTI kaldı.
        `json.decoder.JSONDecodeError: Extra data: line 7243 column 3`
    ⇒ 324 mesajın tamamı okunamaz oldu. Kanalın kendisi kırıldı.

    📌 Ve `_yukle()` bunu ZATEN öngörmüştü: *"bozuk tahta, boş tahtadan
    KÖTÜDÜR — boş tahta 'kimse yazmadı' der, bozuk tahta 'mesajın yok'
    der ve YALAN söyler."* Doğru teşhis vardı, **önlem yoktu.**

    ⇒ ÇARE: geçici dosyaya yaz, sonra `os.replace` ile TAKAS ET.
    `os.replace` tek bir dosya sistemi işlemidir — okuyan ya ESKİ tam
    dosyayı görür ya YENİ tam dosyayı, **yarısını asla görmez.**
    ⚠️ Yarış hâlâ var (iki yazım birbirinin üstüne binebilir ve biri
    kaybolabilir) ama dosya **hiçbir zaman bozulmaz.** Kaybolan mesaj
    yeniden yazılabilir; bozulan dosya bütün kanalı öldürür.
    """
    os.makedirs(DIZIN, exist_ok=True)
    gecici = VERI + ".yeni.%d" % os.getpid()
    with io.open(gecici, "w", encoding="utf-8", newline="\n") as f:
        json.dump(kayit, f, ensure_ascii=False, indent=1)
    os.replace(gecici, VERI)          # atomik takas
    _gorunum_yaz(kayit)


def _t(s):
    return re.sub(r"\s+", " ", (s or "").replace("|", "¦")).strip()


def _simdi():
    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M")


def _gorunum_yaz(kayit):
    sat = ["# 📋 TAHTA — oturumlar arası mesaj panosu",
           "",
           "> 🤖 **ÜRETİLMİŞ DOSYA — ELLE DÜZENLEME.** Otorite `tahta.json`.",
           "> Yazmak için: `py arac/tahta.py yaz --kim <AD> --kime <AD> --mesaj <metin>`",
           "> Okumak için: `py arac/tahta.py oku --kim \"<KENDİ ADIN>\"`",
           "",
           "🔴 **EL SIKIŞMA ÜÇ ADIMDIR** (Emre, 14 Ağu): ① gönder → "
           "② alıcı `teyit` (\"okudum, gereğini yapıyorum\") → ③ gönderen "
           "`tamam` (\"bekliyorum, tamam\").",
           "> Teyit dönmeyen mesaj, o alıcı için kanalın KAPALI olduğunun "
           "kanıtıdır — `py arac/tahta.py teyitsiz` tek satırda ölçer.",
           "",
           "| NO | TARİH SAAT | KİMDEN | KİMLİK | KİME | CİNS | ACİL | HAL "
           "| TEYİT | KAPANIŞ | CEVAP | VADE | OKUYAN | DAYANAK | MESAJ |",
           "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|"]
    for m in kayit:
        okuyan = ", ".join("%s@%s" % (k, v[-5:]) for k, v in
                           sorted((m.get("okuyan") or {}).items())) or "—"
        cevap = m.get("cevap") or "—"
        if m.get("yanit_no"):
            cevap = "↩ %s" % m["yanit_no"]
        ty = m.get("teyit") or {}
        teyit_s = ", ".join("%s@%s" % (k, v["zaman"][-5:])
                            for k, v in sorted(ty.items())) if ty else (
            "🔴 YOK" if m["kime"] != "HERKES" else "—")
        sat.append(
            "| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |" % (
                m["no"], m["zaman"], m["kimden"], m.get("kimden_kimlik") or "—",
                m["kime"], m.get("cins") or "BILGI", m.get("aciliyet") or "NORMAL",
                m["hal"], teyit_s, m.get("kapanis") or "—", cevap,
                m.get("vade") or "—", okuyan, m.get("dayanak") or "—", m["mesaj"]))
    io.open(GORUNUM, "w", encoding="utf-8", newline="\n").write(
        "\n".join(sat) + "\n")


def _git(kayit, baslik, govde):
    ileti = os.path.join(KOK, ".tahta_ileti")
    io.open(ileti, "w", encoding="utf-8", newline="\n").write(
        "%s\n\n%s\n" % (baslik, govde))
    # 🔴 encoding="utf-8", errors="replace" — YAPI DENETİM 3 BULDU (M-0031).
    # VAKA: `subprocess.run(..., text=True)` çıktıyı SİSTEM KOD SAYFASIYLA
    # (Windows'ta cp1254) çözmeye kalkıyor. Git'in Türkçe karakterli çıktısı
    # `UnicodeDecodeError: 'charmap' codec can't decode byte 0x9e` ile
    # PATLIYOR — ve patlama `try` bloğunun İÇİNDE olduğu için commit hiç
    # çalışmıyor, ama `finally`den sonra akış sürüyor ve ekrana "push ✓"
    # basılıyordu.
    # ⇒ Mesaj SENDE KALIYOR, araç GÖNDERİLDİ diyordu.
    #
    # 🔴 VE BU, TAM OLARAK BU ALETİN ÖNLEMEK İÇİN VAR OLDUĞU HATA:
    #   "araç kendi eyleminin SONUCUNU değil DENEMESİNİ raporluyor."
    #   `send_message`ın "sent"i neyse, buradaki "push ✓" da oydu.
    #   Aleti yazan, aletin hastalığını alete bulaştırmış.
    # 📌 Ve bulan yine bir İŞÇİ oldu — kusuru gören, kusurun bedelini
    #   ödeyen taraf. Bugünün ikinci vakası.
    _kod = {"capture_output": True, "text": True,
            "encoding": "utf-8", "errors": "replace"}
    try:
        # pathspec ZORUNLU: git index PAYLAŞILIYOR (§7)
        yol = ["oturumlar/tahta.json", "oturumlar/TAHTA.md"]
        subprocess.run(["git", "-C", KOK, "add", "--"] + yol,
                       check=False, **_kod)
        r = subprocess.run(["git", "-C", KOK, "commit", "-F", ileti, "--"] + yol,
                           **_kod)
        if r.returncode != 0 and "nothing to commit" not in (r.stdout or ""):
            print("commit: 🔴 kod=%d" % r.returncode)
            print("   " + (r.stderr or r.stdout or "").strip()[:200])
        subprocess.run(["git", "-C", KOK, "pull", "--rebase"], **_kod)
        p = subprocess.run(["git", "-C", KOK, "push"], **_kod)
        if p.returncode == 0:
            # 🔴🔴 "push kod=0" TESLİM DEMEK DEĞİL — 16 Ağustos'ta ÖLÇÜLDÜ.
            # VAKA (`VERI-ZAMAN` bildirdi): commit bir EDİTÖR açtı ve
            # tamamlanmadı; mesaj yerelde kaldı. Ama `git push` ÖNCEKİ
            # commit'leri gönderdiği için kod=0 döndü ve araç
            #     "push ✓ — mesaj artık HERKESTE"
            # yazdı. **Mesaj hiçbir yere gitmedi ve araç BAŞARI bildirdi.**
            #
            # 📌 Bu, `send_message`ın öldürücü yönünün ta kendisi:
            # İYİMSER yalan kaybı GİZLER. Kötümser yalanı (yanlış alarm)
            # bu sabah düzelttim ve **tehlikeli yönü açık bıraktım** —
            # yani düzeltilecek iki yönden yanlış olanını seçmişim.
            #
            # ⇒ Artık kod'a değil KAYDA bakıyor: mesaj numarası uzaktaki
            # dalda GERÇEKTEN var mı?
            _m = re.search(r"M-\d{4}", baslik or "")
            _no = _m.group(0) if _m else ""
            # 🔴 İLK YAZIMIM `origin/main`e BAKIYORDU ve YANLIŞ ALARM
            # üretti — iki oturum ölçüp bildirdi (M-0347). Sebep:
            # `git log origin/main` **yereldeki uzak-dal kopyasını** okur
            # ve o kopya `fetch` yapılmadan BAYATTIR. Push başarılı olsa
            # bile yerel kopya güncellenmemiş olabiliyor.
            #
            # ⇒ YANLIŞ ŞEYİ ÖLÇMÜŞÜM. Doğrusu şu: kaybın gerçek sebebi
            # "push gitmedi" DEĞİL, **"commit hiç olmadı"**dı (editör
            # açıldı ve tamamlanmadı). Push zaten kod=0 verdi.
            # ⇒ O hâlde COMMIT'i sınamak yeterli ve KESİN: mesaj yerel
            #   HEAD geçmişinde varsa ve push kod=0 döndüyse, TESLİM
            #   EDİLMİŞTİR. `fetch` gerekmez, bayat kopya sorunu yoktur.
            # 📌 Ders: bir yanılmayı düzeltirken ÖLÇÜLECEK ŞEYİ de
            #   yeniden seç. Ben eski soruyu (uzakta var mı) koruyup
            #   yalnız yönünü değiştirdim; asıl kusur SORUDAYDI.
            _var = True                       # numara yoksa eski davranış
            if _no:
                try:
                    _g = subprocess.run(
                        ["git", "-C", KOK, "log", "HEAD", "--oneline", "-40"],
                        capture_output=True, text=True, timeout=60)
                    _var = _no in (_g.stdout or "")
                except Exception:
                    pass
            if _var:
                print("push  : ✓ — mesaj artık HERKESTE")
            else:
                print("push  : 🔴 kod=0 AMA MESAJ UZAKTA YOK — %s" % _no)
                print("   ⚠️ commit tamamlanmamış olabilir (editör açıldıysa"
                      " ya da hook kestiyse). MESAJ SENDE KALDI.")
                print("   ⇒ `git status` bak, commit'i tamamla, TEKRAR YAZMA"
                      " — mesaj tahta.json'da ZATEN var, yalnız gitmedi.")
                print("   Bunu KULLANICIYA da söyle — arıza ÜÇ YERE (§7.1).")
        else:
            # 🔴 Bu aletin bütün varlık sebebi: "gönderdim sandım" hatası.
            # AMA 16 Ağustos 2026'da TERSİ ölçüldü: push `cannot lock ref`
            # ile düştü, araç "ULAŞMADI" dedi, ve mesaj ASLINDA GİT'TEYDİ —
            # eşzamanlı başka bir push onu taşımıştı. İki oturum uyarıya
            # uyup mesajı TEKRAR yazdı: M-0242 = M-0243, birebir 3374
            # karakter. Zarar mükerrer mesaj, ama sebebi TAHMİNDİ.
            #
            # ⇒ Artık TAHMİN ETMİYOR, ÖLÇÜYOR: uzaktaki dalda mesaj
            # numarası gerçekten var mı diye bakıyor.
            # 📌 `send_message` İYİMSER yanılıyordu ("gönderdim", göndermedi)
            # ve kaybı GİZLİYORDU. Bu araç KÖTÜMSER yanılıyordu ("ulaşmadı",
            # ulaşmıştı) ve fazladan İŞ yaptırıyordu. İkincisi güvenli ama
            # bedava değil — bir kanal yanılacaksa **teslim ettiğini inkâr
            # etsin, etmediğini iddia etmesin**; en iyisi ise YANILMAMAK.
            # ⚠️ `no` bu fonksiyonun kapsamında YOK (çağıranda yerel) —
            # ilk yazımımda doğrudan `no` yazdım ve NameError verecekti.
            # Mesaj numarası commit BAŞLIĞINDA duruyor, oradan alınıyor.
            _m = re.search(r"M-\d{4}", baslik or "")
            _no = _m.group(0) if _m else ""
            _ulasti = False
            if _no:
                try:
                    _g = subprocess.run(
                        ["git", "-C", KOK, "log", "origin/main", "--oneline",
                         "-40"], capture_output=True, text=True, timeout=60)
                    _ulasti = _no in (_g.stdout or "")
                except Exception:
                    pass
            print("push  : 🔴 kod=%d" % p.returncode)
            print("   " + (p.stderr or "").strip()[:200])
            if _ulasti:
                print("   🟢 AMA ÖLÇÜLDÜ: %s uzaktaki dalda VAR — mesaj "
                      "ULAŞMIŞ." % _no)
                print("      Başka bir oturumun push'u onu taşımış. "
                      "TEKRAR YAZMA — mükerrer olur.")
            else:
                print("   ⚠️ ÖLÇÜLDÜ: %s uzaktaki dalda YOK — MESAJ HENÜZ "
                      "KİMSEYE ULAŞMADI." % _no)
                print("      Bunu KULLANICIYA da söyle — arıza ÜÇ YERE "
                      "bildirilir (§7.1).")
    except Exception as e:
        # 🔴 SESSİZ GEÇİLMEZ. Önceki hâlde bir istisna `finally`ye düşüyor,
        # temizlik yapılıyor ve akış "push ✓" basmış gibi sürüyordu. Artık
        # istisna GÖRÜNÜR ve mesajın SENDE KALDIĞI açıkça söyleniyor.
        print("push  : 🔴 İSTİSNA — %s: %s" % (type(e).__name__, e))
        print("   ⚠️ MESAJ HENÜZ KİMSEYE ULAŞMADI. Elle koştur:")
        print("      git add -- oturumlar/tahta.json oturumlar/TAHTA.md")
        print("      git commit -m \"TAHTA\" -- oturumlar/tahta.json oturumlar/TAHTA.md")
        print("      git pull --rebase && git push")
        print("   Ve bunu KULLANICIYA da söyle — arıza ÜÇ YERE bildirilir.")
    finally:
        if os.path.exists(ileti):
            os.remove(ileti)


def _sade_ad(s):
    """Ad karşılaştırması için normalleştirir — Türkçe İ/I tuzağı dâhil.

    🔴 VAKA (14 Ağustos 2026): aynı UUID (`local_3fc67368`) tahtada İKİ
    yazımla göründü — `YAPI DENETİM 3` ve `YAPI DENETIM 3`. Tek harf farkı
    (İ / I) iki ayrı oturum gibi okundu.
    """
    for a2, b in (("İ", "I"), ("ı", "i"), ("Ş", "S"), ("ş", "s"),
                  ("Ğ", "G"), ("ğ", "g"), ("Ü", "U"), ("ü", "u"),
                  ("Ö", "O"), ("ö", "o"), ("Ç", "C"), ("ç", "c")):
        s = s.replace(a2, b)
    return " ".join(s.upper().split())


def _takma_adlar(kayit, kim, kimlik=None):
    """Bir oturumun BÜTÜN adlarını döker — UUID üzerinden bağlayarak.

    🔴 NİÇİN VAR — ölçülmüş kusur, bedeli 6,5 SAAT. Bir oturum yazdı:
        "M-0017'yi (00:30'da verdiğin iş) SAAT 07:17'DE gördüm — altı buçuk
         saat geç. Sebep: BU OTURUM TAHTADA İKİ ADLA VAR. Sen bana yazarken
         --kime 'OPUS HAZIR KITA 2' (pencere adım), ben okurken --kim
         'VERİ FETRET' (şartname adım). Mesaj KAYBOLMADI, YANLIŞ KUTUYA
         düştü."
    Ve çareyi de o önerdi: *"kimliği ADA değil UUID'ye bağla, ya da bir
    oturumun bütün adlarını tek kutuda topla."*

    ⚠️ VE İKİNCİ, DAHA SİNSİ VAKA: İKİ AYRI OTURUM aynı adı taşıyordu
    (`local_d1249b27` ve `local_f4d2e275`, ikisi de "OPUS HAZIR KITA 2").
    Koordinatör bir işi YANLIŞ OTURUMA atfetti; kusuru işçi bildirdi:
    *"M-0045'i BEN YAZMADIM."*
    ⇒ **Ad ne TEKİLDİR ne KARARLI. UUID ikisi de.**
    📌 `B10`un kimlik yüzü: devraldığın hiçbir rakamı — ve hiçbir ADI —
    doğrulamadan aktarma.
    """
    adlar = {_sade_ad(kim)} if kim else set()
    kimlikler = {kimlik} if kimlik else set()
    for m in kayit:                       # ① addan kimliğe
        k = m.get("kimden_kimlik")
        if k and _sade_ad(m["kimden"]) in adlar:
            kimlikler.add(k)
    for m in kayit:                       # ② kimlikten bütün adlara
        if m.get("kimden_kimlik") in kimlikler:
            adlar.add(_sade_ad(m["kimden"]))
    return adlar


def kimler(a):
    """Tahtadan türetilmiş OTURUM DEFTERİ — kim, hangi kimlikle, ne zaman."""
    kayit = _yukle()
    defter = {}
    for m in kayit:
        ad = m["kimden"]
        d = defter.setdefault(ad, {"kimlik": "", "son": "", "yazdi": 0})
        d["yazdi"] += 1
        if m["zaman"] > d["son"]:
            d["son"] = m["zaman"]
        if m.get("kimden_kimlik"):
            d["kimlik"] = m["kimden_kimlik"]
            d["kimlik_zaman"] = m["zaman"]
    if not defter:
        print("oturum defteri BOŞ — kimse tahtaya yazmadı.")
        return 0
    print("=" * 76)
    print("OTURUM DEFTERİ — %d oturum (tahtaya yazanlar)" % len(defter))
    print("=" * 76)
    for ad, d in sorted(defter.items(), key=lambda x: -len(x[1]["son"] or "")):
        k = d["kimlik"] or "🔴 KİMLİK BİLDİRMEMİŞ"
        print("%-24s %s" % (ad[:24], k))
        print("   son yazışı %s · %d mesaj" % (d["son"], d["yazdi"]))
    eksik = [a for a, d in defter.items() if not d["kimlik"]]
    if eksik:
        print("\n⚠️ KİMLİĞİNİ BİLDİRMEYEN %d oturum: %s" % (len(eksik), ", ".join(eksik)))
        print("   Bir daha yazarken: --kimlik <kendi session id'in>")
    return 0


def yaz(a):
    kayit = _yukle()
    no = "M-%04d" % (len(kayit) + 1)
    m = {
        "no": no, "zaman": _simdi(),
        "kimden": _t(a["kim"]), "kime": _t(a["kime"]).upper(),
        # 🔴 KİMLİK — Emre'nin eklettiği alan (13 Ağustos 2026):
        #   "oturumun adı, adresi, id'si nesi var ise bu verileri de ilgili
        #    yerlere doldurmak gerekebilir."
        # ⚠️ VE BU, BUGÜN BEŞ KEZ ISIRAN HATANIN TAM TERSİ YÖNÜDÜR — fark
        # hayatî: koordinatör bir adresi TAHMİN edip şartnameye yazdığında
        # bayat çıktı (kendi kimliğini `list_sessions`ta göremiyor, çünkü o
        # araç mevcut oturumu hariç tutuyor). Burada adres, SAHİBİNİN KENDİSİ
        # tarafından ve YAZDIĞI ANIN damgasıyla bildiriliyor.
        # ⇒ Tahmin edilen adres bayatlar; BEYAN EDİLEN adres tarihlidir,
        #   yani bayatlığı GÖRÜNÜR. Görünen bayatlık, sessiz bayatlıktan
        #   kat kat ucuzdur.
        # 📌 Bunu bir işçi de önermişti (HAZIR KITA 6): "adres, koordinatörün
        #   HATIRLAMASI gereken bir şey değil, işçinin BİLDİREBİLECEĞİ bir
        #   şey — eksik kalan, adresin TERS YÖNDEN akıtılması."
        "kimden_kimlik": _t(a.get("kimlik")) or "",
        "mesaj": _t(a["mesaj"]), "hal": "ACIK",
        "cevap": "BEKLIYOR" if a.get("cevap_bekle") else "GEREKMEZ",
        "vade": _t(a.get("vade")) or "", "okuyan": {},
        "yanit_no": _t(a.get("yanit")) or "",
        # ── Emre sordu: "önemli olan ve benim aklıma gelmeyen bir alan var
        #    ise onu da ekle." Üç tane var ve üçü de ÖLÇÜLMÜŞ bir zarardan
        #    doğuyor; hiçbiri "olsa iyi olur" değil.
        #
        # ⑨ CİNS — çünkü bir mesajın NE OLDUĞU, ne dediğinden önce gelir.
        #    Bu projede bir "bilgi" satırı "iş emri" sanıldı ve bir oturum
        #    mükerrer iş yaptı; bir "soru" da bilgi sanılıp cevapsız kaldı.
        #    Süzgeç olmadan pano gürültüye boğulur, ve okunmayan pano YOKTUR.
        "cins": (_t(a.get("cins")) or "BILGI").upper(),   # EMIR·SORU·RAPOR·ARIZA·BILGI
        # ⑫ TEYİT — Emre'nin tasarımı (14 Ağustos 2026):
        #   "Gönderilen mesajları TEYİTLİ yapmak gerek. Mesaj gönderen,
        #    mesajına 'mesajımı okuyunca ANLADIM, TAMAM, GEREĞİNİ YAPIYORUM'
        #    şeklinde bir teyit istemeli. Bir mesaj gönderilince karşı taraf
        #    'okudum, gereğini yapıyorum' yazmalı. Diğer tarafta 'bekliyorum,
        #    tamam' demeli. Dolayısıyla MESAJ KANALININ AÇIK OLDUĞU TEYİT
        #    EDİLMELİ."
        #
        # 🔴 VE BU, `okuyan` ALANINDAN BAŞKA BİR ŞEYDİR — ikisi de gerekli:
        #   okuyan  OTOMATİK · "gözüne ilişti" · elle işaretlenen kutu
        #           işaretlenmez diye otomatik yapıldı
        #   teyit   KASITLI  · "OKUDUM ve GEREĞİNİ YAPIYORUM" · bir EYLEM
        #           taahhüdü. Otomatikleştirilemez, çünkü taahhüt insanın
        #           (ya da oturumun) kendi beyanıdır.
        # 📌 Fark ölçülebilir: bir mesaj `okuyan` dolu ama `teyit` boşsa,
        #   "gördü ama üstlenmedi" demektir — sessizlikten BAŞKA bir hâl.
        #
        # 🟢 VE ASIL FAYDASI KANALIN KENDİSİNİ ÖLÇMEK: teyit dönmeyen mesaj,
        #   o alıcı için kanalın KAPALI olduğunun kanıtıdır. `teyitsiz`
        #   komutu bunu tek satırda verir — "mesajım vardı mı" sorusu artık
        #   tahminle değil SAYIYLA cevaplanır.
        "teyit": {},          # {ad: {"zaman": …, "soz": "…"}}
        "kapanis": "",        # gönderenin "bekliyorum, tamam"ı
        #
        # ⑩ DAYANAK — "şunu ölçtüm" diyen her satır NEREDE olduğunu söylemeli:
        #    commit · dosya:satır · rapor yolu. Bu projenin en pahalı ders
        #    ailesi "ölçüm doğru, çıkarım yanlış" — ve çıkarımı denetlemenin
        #    tek yolu ÖLÇÜME GİDEBİLMEK. Dayanaksız bir iddia, doğru olsa
        #    bile SINANAMAZ; sınanamayan iddia bir sonraki turda yeniden
        #    ölçülür ve emek iki kez harcanır.
        "dayanak": _t(a.get("dayanak")) or "",
        #
        # ⑪ ACİLİYET — vade "ne zamana kadar" der, aciliyet "şimdi mi
        #    bakılmalı" der. İkisi ayrı: vadesi yarın olan bir DURDURUCU
        #    şimdi okunmalıdır. Bu projede bir durdurucu (ayrıştırıcı kilidi)
        #    saatlerce fark edilmedi ve BÜTÜN denetim/üretim hattı durdu.
        "aciliyet": (_t(a.get("aciliyet")) or "NORMAL").upper(),  # DURDURUCU·ACIL·NORMAL·DUSUK
    }
    if m["yanit_no"]:
        hedef = next((x for x in kayit if x["no"] == m["yanit_no"]), None)
        if hedef is None:
            print("🔴 --yanit %s: BÖYLE BİR MESAJ YOK. Yazılmadı." % m["yanit_no"])
            return 2
        hedef["hal"] = "CEVAPLANDI"
        hedef["cevap"] = "→ %s" % no
    kayit.append(m)
    _kaydet(kayit)
    print("%s yazıldı  %s → %s%s" % (
        no, m["kimden"], m["kime"],
        ("  (cevap BEKLENİYOR%s)" % (", vade " + m["vade"] if m["vade"] else ""))
        if m["cevap"] == "BEKLIYOR" else ""))
    _git(kayit, "TAHTA %s — %s -> %s" % (no, m["kimden"], m["kime"]), m["mesaj"])
    return 0


def oku(a):
    kayit = _yukle()
    if not kayit:
        print("tahta BOŞ — henüz kimse yazmadı.")
        return 0
    kim = (a.get("kim") or "").strip()
    if kim and not a.get("hepsi"):
        # 🔴 TAKMA AD ÇÖZÜMLEMESİ — bir oturumun BÜTÜN adlarını topla.
        # Eskiden `m["kime"] == kim.upper()` diye bakılıyordu ve bir oturum
        # iki adla göründüğünde mesaj YANLIŞ KUTUDA kalıyordu (ölçüldü:
        # 6,5 saat). Artık UUID üzerinden bağlanan her ad aynı kutuya düşer.
        adlar = _takma_adlar(kayit, kim, a.get("kimlik"))
        secili = [m for m in kayit
                  if _sade_ad(m["kime"]) in adlar or m["kime"] == "HERKES"]
        baslik = "SANA GELENLER (%s) + HERKES" % kim
        if len(adlar) > 1:
            print("ℹ️ takma adların: %s" % " · ".join(sorted(adlar)))
    else:
        secili, baslik = kayit, "TAHTANIN TAMAMI"
    if a.get("acik"):
        secili = [m for m in secili if m["hal"] == "ACIK"]
        baslik += " · yalnız AÇIK"

    print("=" * 76)
    print("%s — %d mesaj (tahtada toplam %d)" % (baslik, len(secili), len(kayit)))
    print("=" * 76)
    for m in secili:
        bayrak = ""
        if m["cevap"] == "BEKLIYOR":
            bayrak = "  🔴 CEVAP BEKLİYOR" + (" · vade %s" % m["vade"] if m["vade"] else "")
        elif m["cevap"].startswith("→"):
            bayrak = "  ✅ cevaplandı %s" % m["cevap"]
        acil = m.get("aciliyet") or "NORMAL"
        acil_im = {"DURDURUCU": "🔴🔴 DURDURUCU", "ACIL": "🔴 ACİL"}.get(acil, "")
        print("%s  %s  %s → %s  [%s · %s]%s %s" % (
            m["no"], m["zaman"], m["kimden"], m["kime"],
            m.get("cins") or "BILGI", m["hal"], bayrak, acil_im))
        print("   %s" % m["mesaj"])
        if m.get("dayanak"):
            print("   dayanak: %s" % m["dayanak"])
        # 🔴 EL SIKIŞMANIN ÜÇ ADIMI — hangisinde durduğu HER OKUMADA görünür
        if m.get("teyit"):
            for k2, v2 in sorted(m["teyit"].items()):
                print("   ✓ TEYİT  %s @%s — \"%s\"" % (k2, v2["zaman"][-5:], v2["soz"]))
        elif m["kime"] != "HERKES":
            print("   🔴 TEYİT BEKLİYOR — alıcı 'okudum, gereğini yapıyorum' demedi")
            print("      cevap: py arac/tahta.py teyit %s --kim \"%s\"" % (m["no"], m["kime"]))
        if m.get("kapanis"):
            print("   ✓ KAPANIŞ %s" % m["kapanis"])
        if m.get("okuyan"):
            print("   okuyan: %s" % ", ".join(
                "%s@%s" % (k, v[-5:]) for k, v in sorted(m["okuyan"].items())))
        print()

    # 🟢 OKUNDU OTOMATİK — elle işaretlenen kutu işaretlenmez.
    if kim:
        yeni = 0
        for m in secili:
            if kim not in (m.get("okuyan") or {}):
                m.setdefault("okuyan", {})[kim] = _simdi()
                yeni += 1
        if yeni:
            _kaydet(kayit)
            print("→ %d mesaj '%s tarafından OKUNDU' diye işaretlendi." % (yeni, kim))
            _git(kayit, "TAHTA — %s okudu (%d mesaj)" % (kim, yeni),
                 "Okundu damgasi otomatik; elle isaretlenen kutu isaretlenmez.")
    if kim and not a.get("hepsi") and not secili:
        print("(sana hitap eden mesaj yok — kendi ilerleme dosyana 'boştayım'")
        print(" yaz ve KENDİ İŞ SEÇME)")
    return 0


def bekleyen(a):
    kayit = _yukle()
    acik = [m for m in kayit if m["hal"] == "ACIK" and m["cevap"] == "BEKLIYOR"]
    simdi = _simdi()
    if a.get("gecikmis"):
        acik = [m for m in acik if m.get("vade") and m["vade"] < simdi]
        print("VADESİ GEÇMİŞ — %d" % len(acik))
    else:
        print("CEVAP BEKLEYEN AÇIK MESAJ — %d" % len(acik))
    for m in acik:
        gec = " 🔴 GECİKTİ" if (m.get("vade") and m["vade"] < simdi) else ""
        print("  %s  %s → %s  (vade %s)%s" % (
            m["no"], m["kimden"], m["kime"], m.get("vade") or "—", gec))
        print("     %s" % m["mesaj"][:70])
    return 0


def teyit(a):
    """② ADIM — alıcı: 'OKUDUM, GEREĞİNİ YAPIYORUM'."""
    kayit = _yukle()
    no = (a.get("no") or "").upper()
    m = next((x for x in kayit if x["no"] == no), None)
    if m is None:
        print("🔴 %s diye bir mesaj YOK. Teyit yazılmadı." % no)
        return 2
    kim = _t(a.get("kim"))
    if not kim:
        print("🔴 --kim ZORUNLU: teyidi KİM veriyor?")
        return 2
    m.setdefault("teyit", {})[kim] = {
        "zaman": _simdi(),
        "soz": _t(a.get("soz")) or "okudum, gereğini yapıyorum",
    }
    if a.get("kimlik"):
        m.setdefault("teyit_kimlik", {})[kim] = _t(a["kimlik"])
    _kaydet(kayit)
    print("✓ %s TEYİT EDİLDİ — %s: %s" % (no, kim, m["teyit"][kim]["soz"]))
    print("  ⇒ kanal bu yönde AÇIK olduğu artık KANITLI.")
    _git(kayit, "TAHTA %s TEYIT — %s" % (no, kim), m["teyit"][kim]["soz"])
    return 0


def tamam(a):
    """③ ADIM — gönderen: 'bekliyorum, tamam'. El sıkışma KAPANIR."""
    kayit = _yukle()
    no = (a.get("no") or "").upper()
    m = next((x for x in kayit if x["no"] == no), None)
    if m is None:
        print("🔴 %s diye bir mesaj YOK." % no)
        return 2
    if not m.get("teyit"):
        # 🔴 SESSİZ GEÇİLMEZ: teyit gelmeden kapanış yazmak, el sıkışmayı
        # TEK TARAFLI kapatır ve kanalın açık olduğu YALANINI kaydeder.
        print("🔴 %s'e HENÜZ TEYİT GELMEDİ — kapanış yazılmaz." % no)
        print("   El sıkışma üç adımdır: gönder → TEYİT → tamam.")
        print("   Teyit yoksa kanal o yönde AÇIK DEĞİLDİR; kapanış yazmak")
        print("   bunu gizler.")
        return 1
    m["kapanis"] = "%s · %s" % (
        _simdi(), _t(a.get("soz")) or "bekliyorum, tamam")
    _kaydet(kayit)
    print("✓ %s el sıkışma KAPANDI: %s" % (no, m["kapanis"]))
    _git(kayit, "TAHTA %s KAPANIS" % no, m["kapanis"])
    return 0


def teyitsiz(a):
    """🔴 KANAL ÖLÇÜMÜ — teyit dönmemiş mesajlar. Sessizliğin SAYISI."""
    kayit = _yukle()
    kim = (a.get("kim") or "").strip().upper()
    hedef = [m for m in kayit if m["hal"] != "KAPANDI"]
    if kim:
        hedef = [m for m in hedef if m["kimden"].upper() == kim]
    acik = [m for m in hedef if not m.get("teyit")]
    teyitli = [m for m in hedef if m.get("teyit")]

    print("=" * 74)
    print("TEYİT ÖLÇÜMÜ — gönderilen %d · TEYİTLİ %d · TEYİTSİZ %d"
          % (len(hedef), len(teyitli), len(acik)))
    print("=" * 74)
    if not hedef:
        print("(ölçülecek mesaj yok)")
        return 0
    print("🔴 TEYİT GELMEYENLER — bu alıcılar için kanal KAPALI sayılır:")
    for m in acik:
        okudu = ", ".join(sorted(m.get("okuyan") or {})) or "—"
        print("  %s → %-22s  okuyan: %s" % (m["no"], m["kime"][:22], okudu))
        print("     %s" % m["mesaj"][:64])
    if teyitli:
        print("\n🟢 TEYİTLİ — kanal bu yönde KANITLI AÇIK:")
        for m in teyitli:
            for k, v in sorted(m["teyit"].items()):
                print("  %s ← %-20s %s  \"%s\"" % (
                    m["no"], k[:20], v["zaman"], v["soz"][:40]))
    # 🔴 En değerli satır: GÖRDÜ AMA ÜSTLENMEDİ
    ara = [m for m in acik if m.get("okuyan")]
    if ara:
        print("\n⚠️ GÖRDÜ AMA ÜSTLENMEDİ — %d mesaj okundu, teyit gelmedi." % len(ara))
        print("   Bu SESSİZLİKTEN BAŞKA bir hâldir: kanal AÇIK, taahhüt YOK.")
        for m in ara:
            print("   %s → %s (okuyan: %s)" % (
                m["no"], m["kime"][:20], ", ".join(sorted(m["okuyan"]))))
    return 0


def kapat(a):
    kayit = _yukle()
    no = (a.get("no") or "").upper()
    m = next((x for x in kayit if x["no"] == no), None)
    if m is None:
        print("🔴 %s diye bir mesaj YOK." % no)
        return 2
    m["hal"] = "KAPANDI"
    _kaydet(kayit)
    print("%s KAPANDI (kapatan: %s)" % (no, a.get("kim") or "?"))
    _git(kayit, "TAHTA %s KAPANDI" % no, "kapatan: %s" % (a.get("kim") or "?"))
    return 0


def main(argv):
    if not argv:
        return oku({"hepsi": True})

    def al(ad):
        return argv[argv.index(ad) + 1] if (ad in argv and argv.index(ad) + 1 < len(argv)) else None

    k = argv[0]
    ortak = {"kim": al("--kim"), "hepsi": "--hepsi" in argv,
             "acik": "--acik" in argv, "gecikmis": "--gecikmis" in argv}
    if k == "yaz":
        # 🔴 --mesaj-dosya: METİN KABUKTAN GEÇMEZ (§11).
        # Vaka (14 Ağustos 2026, M-0018): koordinatör bir tahta mesajında
        # `erdel` yazdı, backtick bash'te ÇALIŞTI ("erdel: command not found"),
        # kelime mesajdan SİLİNDİ ve mesaj eksik gitti — üstelik araç "yazıldı"
        # dedi. Bu, `§11`in "kural yetmiyor, ARACI DEĞİŞTİR" dersinin bu
        # aletteki karşılığı: `git commit -F <dosya>` neyse bu da odur.
        # ⇒ Kaçış/backtick/Türkçe içeren her mesaj `Write` ile dosyaya yazılır,
        #   bash o dosyaya HİÇ dokunmaz, sonra --mesaj-dosya ile verilir.
        if al("--mesaj-dosya"):
            argv = list(argv)
            try:
                _m = io.open(al("--mesaj-dosya"), encoding="utf-8").read().strip()
            except Exception as e:
                print("🔴 --mesaj-dosya OKUNAMADI: %s" % e)
                return 2
            if not _m:
                print("🔴 --mesaj-dosya BOŞ. Sessizce boş mesaj yazmam.")
                return 2
            argv += ["--mesaj", _m]

            def al(ad, _a=argv):                      # noqa: F811 — yeni argv
                return _a[_a.index(ad) + 1] if (ad in _a and _a.index(ad) + 1 < len(_a)) else None
        if not (al("--kim") and al("--kime") and al("--mesaj")):
            print("kullanim: tahta.py yaz --kim <AD> --kime <AD|KOORDINATOR|HERKES>")
            print("          --mesaj <metin> [--cevap-bekle] [--vade 'YYYY-AA-GG SS:DD']")
            print("          [--yanit M-0007]")
            return 2
        return yaz({"kim": al("--kim"), "kime": al("--kime"), "mesaj": al("--mesaj"),
                    "cevap_bekle": "--cevap-bekle" in argv,
                    "vade": al("--vade"), "yanit": al("--yanit"),
                    "kimlik": al("--kimlik"), "cins": al("--cins"),
                    "dayanak": al("--dayanak"), "aciliyet": al("--aciliyet")})
    if k == "oku":
        return oku(ortak)
    if k == "kimler":
        return kimler(ortak)
    if k == "bekleyen":
        return bekleyen(ortak)
    if k == "teyitsiz":
        return teyitsiz(ortak)
    if k in ("teyit", "tamam", "kapat"):
        ortak["no"] = argv[1] if len(argv) > 1 else None
        ortak["soz"] = al("--soz")
        ortak["kimlik"] = al("--kimlik")
        if not ortak["no"]:
            print("kullanim: tahta.py %s M-0007 --kim <AD> [--soz \"...\"]" % k)
            return 2
        return {"teyit": teyit, "tamam": tamam, "kapat": kapat}[k](ortak)
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
