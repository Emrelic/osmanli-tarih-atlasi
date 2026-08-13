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
    os.makedirs(DIZIN, exist_ok=True)
    with io.open(VERI, "w", encoding="utf-8", newline="\n") as f:
        json.dump(kayit, f, ensure_ascii=False, indent=1)
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
           "| NO | TARİH SAAT | KİMDEN | KİMLİK | KİME | CİNS | ACİL | HAL "
           "| CEVAP | VADE | OKUYAN | DAYANAK | MESAJ |",
           "|---|---|---|---|---|---|---|---|---|---|---|---|---|"]
    for m in kayit:
        okuyan = ", ".join("%s@%s" % (k, v[-5:]) for k, v in
                           sorted((m.get("okuyan") or {}).items())) or "—"
        cevap = m.get("cevap") or "—"
        if m.get("yanit_no"):
            cevap = "↩ %s" % m["yanit_no"]
        sat.append("| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |" % (
            m["no"], m["zaman"], m["kimden"], m.get("kimden_kimlik") or "—",
            m["kime"], m.get("cins") or "BILGI", m.get("aciliyet") or "NORMAL",
            m["hal"], cevap, m.get("vade") or "—", okuyan,
            m.get("dayanak") or "—", m["mesaj"]))
    io.open(GORUNUM, "w", encoding="utf-8", newline="\n").write(
        "\n".join(sat) + "\n")


def _git(kayit, baslik, govde):
    ileti = os.path.join(KOK, ".tahta_ileti")
    io.open(ileti, "w", encoding="utf-8", newline="\n").write(
        "%s\n\n%s\n" % (baslik, govde))
    try:
        # pathspec ZORUNLU: git index PAYLAŞILIYOR (§7)
        yol = ["oturumlar/tahta.json", "oturumlar/TAHTA.md"]
        subprocess.run(["git", "-C", KOK, "add", "--"] + yol,
                       check=False, capture_output=True)
        r = subprocess.run(["git", "-C", KOK, "commit", "-F", ileti, "--"] + yol,
                           capture_output=True, text=True)
        if r.returncode != 0 and "nothing to commit" not in (r.stdout or ""):
            print("commit: 🔴 kod=%d" % r.returncode)
        subprocess.run(["git", "-C", KOK, "pull", "--rebase"],
                       capture_output=True, text=True)
        p = subprocess.run(["git", "-C", KOK, "push"], capture_output=True, text=True)
        if p.returncode == 0:
            print("push  : ✓ — mesaj artık HERKESTE")
        else:
            # 🔴 Bu aletin bütün varlık sebebi: "gönderdim sandım" hatası
            print("push  : 🔴 kod=%d" % p.returncode)
            print("   " + (p.stderr or "").strip()[:200])
            print("   ⚠️ MESAJ HENÜZ KİMSEYE ULAŞMADI. Bunu KULLANICIYA da")
            print("      söyle — arıza ÜÇ YERE bildirilir (§7.1).")
    finally:
        if os.path.exists(ileti):
            os.remove(ileti)


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
    K = kim.upper()
    if kim and not a.get("hepsi"):
        secili = [m for m in kayit if m["kime"] in (K, "HERKES")]
        baslik = "SANA GELENLER (%s) + HERKES" % kim
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
    if k == "kapat":
        ortak["no"] = argv[1] if len(argv) > 1 else None
        return kapat(ortak)
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
