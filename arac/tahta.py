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
import time

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
    # 🔴 WINDOWS'TA `os.replace` ERİŞİM ENGELİ ALIYOR — 16 Ağustos, ölçüldü:
    #     PermissionError: [WinError 5] ... tahta.json.yeni.19472 -> tahta.json
    # Sebep: Windows'ta bir dosya BAŞKA BİR SÜREÇ TARAFINDAN AÇIKKEN
    # üzerine takas edilemez. On sekiz oturum 45 saniyede bir okuyor,
    # üstüne OneDrive senkronu var ⇒ çakışma kaçınılmaz.
    # 📌 Atomik yazım DOĞRU çözümdü ama TAŞINABİLİR değildi: POSIX'te
    # replace her zaman çalışır, Windows'ta çalışmayabilir. Aynı satır
    # iki işletim sisteminde iki farklı şey yapıyor.
    #
    # ⇒ ÇARE: birkaç kez DENE, aralarında kısa bekle. Okuyucular 45
    # saniyede bir açıp KAPATIYOR; pencere milisaniyelik ve tekrar
    # denemek onu yakalıyor.
    # 🔴 VE SESSİZCE DÜZ YAZIMA DÜŞMEZ: düz yazım bozulma riskini geri
    # getirir ve tahtayı bir kez ölü etti. Başaramazsa PATLAR ve söyler.
    import time as _t
    os.makedirs(DIZIN, exist_ok=True)
    gecici = VERI + ".yeni.%d" % os.getpid()
    with io.open(gecici, "w", encoding="utf-8", newline="\n") as f:
        json.dump(kayit, f, ensure_ascii=False, indent=1)
    _son = None
    for _d in (0.0, 0.15, 0.4, 0.8, 1.5, 2.5):
        if _d:
            _t.sleep(_d)
        try:
            os.replace(gecici, VERI)          # atomik takas
            _son = None
            break
        except PermissionError as e:
            _son = e
    if _son is not None:
        try:
            os.remove(gecici)
        except Exception:
            pass
        print("🔴 tahta.json YAZILAMADI (6 deneme): %s" % _son)
        print("   Dosya başka bir süreçte AÇIK. MESAJ KAYDEDİLMEDİ —")
        print("   birkaç saniye sonra AYNI komutu tekrar koştur.")
        print("   ⚠️ Düz yazıma DÜŞMEDİM: bozuk tahta, yazılmamış")
        print("      mesajdan kötüdür (16 Ağustos, 324 mesaj okunamaz oldu).")
        sys.exit(3)
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
    _gorunum_dosyaya("\n".join(sat) + "\n")


def _gorunum_dosyaya(metin):
    """TAHTA.md'yi yaz — ÇÖKMEDEN. Otorite `tahta.json`, bu ÜRETİLMİŞ görünüm.

    🔴 VAKA (16 Ağustos 2026, VERİ ZAMAN 2 bildirdi — M-0783). Beşinci koşunun
    kilit duyurusu 14 oturuma birden gitti, on dördü aynı anda teyit yazdı ve
    hepsi bu dosyayı `w` ile yeniden üretti. Biri `OSError: [Errno 22]` aldı:
    **mesajı tahta.json'a yazmıştı ama commit'e gelemeden çöktü.**

    ⇒ Kusur ne yolda ne kodlamadaydı — ilk teşhis oydu ve YANLIŞTI (Türkçe yol
    sanıldı; koordinatör aynı komutu koşturdu, çökmedi). Kusur **YARIŞTA**:
    üretilmiş bir görünüm, otoritesini yazmış bir işlemi öldürüyordu.

    📌 Kural: ÜRETİLMİŞ bir çıktının başarısızlığı, KAYNAĞI yazmış bir işlemi
    asla öldürmez. Görünüm bir sonraki yazımda kendini zaten toparlar; mesaj
    ise kaybolursa geri gelmez. Aynı gerekçeyle `index.lock` de tekrarlanıyor.
    """
    for i, bekle in enumerate((0, 0.25, 0.6, 1.1, 1.7)):
        if bekle:
            time.sleep(bekle)
        try:
            io.open(GORUNUM, "w", encoding="utf-8", newline="\n").write(metin)
            return True
        except OSError as e:
            son = e
    print("⚠️ TAHTA.md üretilemedi (%s) — mesaj tahta.json'a YAZILDI, "
          "kayıp yok. Görünüm bir sonraki yazımda tazelenir." % son)
    return False


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
        # 🔴 `index.lock` YARIŞI — 16 Ağustos 2026, ölçülmüş vaka.
        # ~18 oturum aynı git index'ini paylaşıyor. İki `git add`/`commit`
        # aynı saniyeye denk gelirse ikincisi şunu alır:
        #     fatal: Unable to create '.git/index.lock': File exists
        # ve `commit` kod=128 döner. Mesaj `tahta.json`a YAZILMIŞTIR ama
        # commit'lenmemiştir ⇒ teslim doğrulaması haklı olarak "uzakta
        # yok" der. Sonra BAŞKA bir oturumun push'u onu taşır ve uyarı
        # **bayatlar** — yani alet doğru anda doğru şeyi söyler, ama
        # okuyan onu birkaç saniye sonra yanlış sanır.
        # ⇒ Çare uyarıyı susturmak DEĞİL, yarışı BEKLEMEK.
        # 📌 Kilit birkaç yüz milisaniye sürüyor; altı deneme ~5 saniye.
        _son = None
        for _d in (0.0, 0.3, 0.7, 1.2, 1.8, 2.5):
            if _d:
                time.sleep(_d)
            subprocess.run(["git", "-C", KOK, "add", "--"] + yol,
                           check=False, **_kod)
            r = subprocess.run(
                ["git", "-C", KOK, "commit", "-F", ileti, "--"] + yol, **_kod)
            _cik = (r.stderr or "") + (r.stdout or "")
            if r.returncode == 0 or "nothing to commit" in _cik:
                _son = None
                break
            if "index.lock" not in _cik:
                _son = r                      # başka bir kusur — bekleme
                break
            _son = r
        if _son is not None:
            print("commit: 🔴 kod=%d" % _son.returncode)
            print("   " + ((_son.stderr or _son.stdout or "").strip()[:200]))
            if "index.lock" in ((_son.stderr or "") + (_son.stdout or "")):
                print("   ⚠️ index.lock ALTI DENEMEDE de açılmadı — başka bir"
                      " oturum uzun bir git işlemi yapıyor olabilir.")
                print("   ⇒ Mesaj tahta.json'da VAR. TEKRAR YAZMA;"
                      " birkaç saniye sonra `py arac/tahta.py oku` yeter —"
                      " başka bir oturumun push'u onu taşır.")
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
            # 🔴 ÜÇÜNCÜ DÜZELTME — VE YİNE SORU YANLIŞTI (16 Ağustos 2026).
            #   Test *"HEAD geçmişinde numaramı taşıyan bir COMMIT var mı"*
            #   diye soruyordu. Ama tahta paylaşılan bir dosya: mesajı
            #   BAŞKA BİR OTURUMUN PUSH'U taşımış olabilir — o zaman
            #   benim numaramla bir commit BAŞLIĞI hiç doğmaz, mesaj ise
            #   uzakta VARDIR. Ölçüldü (M-0588): araç *"MESAJ UZAKTA YOK"*
            #   dedi, `git show origin/main:oturumlar/tahta.json` mesajı
            #   GÖSTERDİ. Yanlış alarm, ve alarmın bedeli güven.
            # 📌 Aynı dersin ÜÇÜNCÜ turu: önce yön yanlıştı (origin/main),
            #   sonra bir dal düzeltilip öteki unutuldu, şimdi de SORUNUN
            #   KENDİSİ. Doğru soru tek: *"mesaj uzaktaki DOSYADA var mı?"*
            #   — kimin commit'iyle gittiği ALAKASIZ.
            _var = True                       # numara yoksa eski davranış
            if _no:
                def _uzakta(ref):
                    try:
                        g = subprocess.run(
                            ["git", "-C", KOK, "show",
                             "%s:oturumlar/tahta.json" % ref],
                            timeout=60, **_kod)
                        return ('"%s"' % _no) in (g.stdout or "")
                    except Exception:
                        return None
                _var = _uzakta("origin/main")
                if _var is False:
                    # origin/main YEREL bir kopyadır ve başkasının push'u
                    # onu bayatlatmış olabilir. Alarm çalmadan ÖNCE bir
                    # kez tazele — yanlış alarm, alarmsızlıktan ucuz
                    # değildir: ikisi de kanala olan güveni bozar.
                    try:
                        subprocess.run(["git", "-C", KOK, "fetch", "-q",
                                        "origin", "main"],
                                       timeout=90, **_kod)
                    except Exception:
                        pass
                    _var = _uzakta("FETCH_HEAD")
                if _var is None:
                    _var = True               # ölçemedik ⇒ alarm ÇALMAZ
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
            # 🔴 BU DAL DA `origin/main`E BAKIYORDU — ve yanlış negatif
            # verdi (M-0454). Başarı yolunu HEAD'e çevirdim ama BU YOLU
            # ÖYLE BIRAKTIM: yarım düzeltme.
            # 📌 `origin/main` yereldeki uzak-dal KOPYASIDIR ve `fetch`
            # yapılmadan bayattır. Eşzamanlı bir push ref'i oynatınca
            # bizim push'umuz düşer ama COMMIT durur ve bir sonraki
            # push onu taşır.
            # ⇒ Doğru soru ikisinde de AYNI: **commit oldu mu?**
            #   Olduysa mesaj güvende — gitmesi zaman meselesi.
            #   Olmadıysa mesaj SENDE kaldı ve elle kurtarılmalı.
            _ulasti = False
            if _no:
                try:
                    _g = subprocess.run(
                        ["git", "-C", KOK, "log", "HEAD", "--oneline",
                         "-40"], timeout=60, **_kod)
                    _ulasti = _no in (_g.stdout or "")
                except Exception:
                    pass
            print("push  : 🔴 kod=%d" % p.returncode)
            print("   " + (p.stderr or "").strip()[:200])
            if _ulasti:
                print("   🟢 AMA ÖLÇÜLDÜ: %s COMMIT EDİLDİ — mesaj "
                      "ULAŞMIŞ." % _no)
                print("      Başka bir oturumun push'u onu taşımış. "
                      "TEKRAR YAZMA — mükerrer olur.")
            else:
                print("   ⚠️ ÖLÇÜLDÜ: %s COMMIT EDİLMEDİ — MESAJ HENÜZ "
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


def _duzle(s):
    """Türkçe harfleri ve büyük/küçük farkını DÜZLER — yalnız EŞLEŞTİRME için.

    ⚠️ Python'un `.upper()`i Türkçe'de yanıltıcıdır: `"i".upper()` → `"I"`
    ama Türkçe'de `"i"`nin büyüğü `"İ"`dir. Bu yüzden `OSMANGAZI` ile
    `OSMANGAZİ` iki AYRI ad gibi görünüyordu. Burada iki yönü de aynı
    havuza indiriyoruz; YAZILAN ad hep kanonik hâlidir, bu düzleme
    yalnız karşılaştırmada kullanılır.
    """
    t = (s or "")
    for a, b in (("İ", "I"), ("ı", "i"), ("Ş", "S"), ("ş", "s"),
                 ("Ğ", "G"), ("ğ", "g"), ("Ü", "U"), ("ü", "u"),
                 ("Ö", "O"), ("ö", "o"), ("Ç", "C"), ("ç", "c")):
        t = t.replace(a, b)
    return " ".join(t.upper().split())


def _adres_denetle(kayit, kime):
    """🔴 ADRES DENETİMİ — `--sadece-bana` bekçisinin ÖN ŞARTI.

    Dönüş: kanonik ad (düzeltildiyse) ya da None (dokunma).

    Emre'nin emri (16 Ağustos gece): bekçi yalnız *"sana atılmış mesaj
    varsa"* uyandıracak. O kural ancak `kime` alanı GERÇEK BİR ADA tam
    eşitse çalışır.

    🔴 ÖLÇÜLDÜ: 749 mesajın 57'sinde `kime` ne bir ad ne `HERKES` —
    dosya yolu, tarif, ya da virgülle ayrılmış dört ad. Ve o mesajların
    hepsi SESSİZCE düştü; yazan "yazıldı" cevabı aldı.
    ⇒ Bu denetim yazmayı ENGELLEMEZ (mesaj kaybolmasın), ama YAZANI
    UYARIR — çünkü sessiz düşme, reddedilmekten kötüdür.

    📌 Ve bilinen adlar tahtanın KENDİSİNDEN türetiliyor: bir oturum
    yazdıysa adı bilinir. Elle liste tutmak, bu projede üç kez bayatladı.
    """
    if not kime or kime == "HERKES":
        return None
    bilinen = {(m.get("kimden") or "").strip() for m in kayit}
    bilinen.discard("")
    if kime in {b.upper() for b in bilinen}:
        return None

    # 🔴 KANONİKLEŞTİRME — 22 Ağustos 2026, ÖLÇÜLMÜŞ bir düzensizlik.
    # Emre: *"nehir geçit oturumu isim düzensizliğini düzeltelim."*
    # Ölçüm (999 mesaj): AYNI oturum birden çok yazımla görünüyordu —
    #     'Opus hazır kıta 23'  41 mesaj  ↔  'OPUS HAZIR KITA 23'
    #     'OSMANGAZI'            5 mesaj  ↔  'OSMANGAZİ'
    #     'YAPI DENETIM 3'                ↔  'YAPI DENETİM 3'
    # Sebep: Türkçe `İ/I` · `Ş/S` · `Ğ/G` çifti ve büyük/küçük harf. Bir
    # bekçi `--sadece-bana` koşuyorsa öteki yazımı KAÇIRIR.
    #
    # ⇒ Düzlenmiş biçim TEK bir bilinen ada eşleşiyorsa, mesaj o adın
    #   KANONİK hâliyle yazılır. Uyarı basmak yetmiyordu: uyarı bir
    #   DENETİM DEĞİL (`CLAUDE.md §11` — "uyarının basılması okunduğu
    #   anlamına gelmez"); bugün 25+ mesaj o uyarıya rağmen yanlış adrese
    #   gitti.
    aday = {b for b in bilinen if _duzle(b) == _duzle(kime)}
    if len(aday) == 1:
        dogru = aday.pop()
        print("ℹ️ ADRES DÜZELTİLDİ — aynı oturumun başka yazımı:")
        print("   verilen : %s" % kime)
        print("   yazılan : %s   (tahtadaki kanonik ad)" % dogru)
        return dogru
    if len(aday) > 1:
        print("⚠️ ADRES BELİRSİZ — düzlenince %d ada birden uyuyor: %s"
              % (len(aday), " · ".join(sorted(aday))))
        print("   ⇒ TAM ADI yaz; kanonikleştirme YAPILMADI.")
        return None

    print("⚠️ ADRES UYARISI — `kime` bilinen bir oturum adına TAM EŞİT değil:")
    print("   verilen : %s" % kime)
    # en yakın adları öner (kaba: ortak kelime sayısı)
    _kel = set(kime.replace("-", " ").split())
    _puan = sorted(((len(_kel & set(b.upper().replace("-", " ").split())), b)
                    for b in bilinen), reverse=True)[:3]
    _oner = [b for p, b in _puan if p > 0]
    if _oner:
        print("   bunu mu demek istedin: %s" % " · ".join(_oner))
    print("   🔴 `--sadece-bana` ile koşan bir bekçi bu mesajı GÖRMEZ.")
    print("   ⇒ Ya oturumun TAM ADINI yaz, ya `HERKES` kullan.")
    print("   ⚠️ Dosya yolu, tarif ya da virgüllü çoklu adres ADRES DEĞİLDİR.")


def yaz(a):
    kayit = _yukle()
    no = "M-%04d" % (len(kayit) + 1)
    # 🔴 Kanonik ad dönerse ONU yaz — düzensiz yazımlar tahtaya GİRMESİN.
    # (Denetim artık yalnız uyarmıyor, DÜZELTİYOR; gerekçe `_adres_denetle`de.)
    _kanon = _adres_denetle(kayit, _t(a["kime"]).upper())
    _kime = _kanon if _kanon else _t(a["kime"]).upper()
    # 🔴 GÖNDEREN TARAFI — aynı oturum kendini İKİ YAZIMLA imzalarsa tahtada
    # İKİ OTURUM gibi görünür ve `--sadece-bana` bekçisi birini kaçırır.
    # Ölçüldü (999 mesaj): `OPUS HAZIR KITA 6` (3 mesaj) ↔ `Opus hazır kıta 6`
    # (43) · `YAPI DENETIM 3` (3) ↔ `YAPI DENETİM 3` (1).
    # ⚠️ BURADA DÜZELTMİYORUZ, yalnız UYARIYORUZ: `kimden` bir KİMLİKTİR,
    # onu sessizce değiştirmek oturumun kendi beyanını ezmek olur. Alıcı
    # adresi düzeltilebilir (mesaj yerine ulaşsın diye), kimlik EDİLEMEZ.
    _ben = _t(a["kim"])
    _oteki = {b for b in {(m.get("kimden") or "").strip() for m in kayit}
              if b and b != _ben and _duzle(b) == _duzle(_ben)}
    if _oteki:
        print("⚠️ İMZA DÜZENSİZLİĞİ — bu tahtada kendini BAŞKA yazımla da imzalamışsın:")
        print("   şimdi   : %s" % _ben)
        print("   önceden : %s" % " · ".join(sorted(_oteki)))
        print("   🔴 `--sadece-bana` bekçisi iki adı AYRI sayabilir ⇒ mesaj kaçar.")
        print("   ⇒ TEK bir yazımda karar kıl ve hep onu kullan.")
    m = {
        "no": no, "zaman": _simdi(),
        "kimden": _t(a["kim"]), "kime": _kime,
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
