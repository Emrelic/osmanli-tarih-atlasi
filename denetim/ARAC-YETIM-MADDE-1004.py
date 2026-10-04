# -*- coding: utf-8 -*-
"""YETİM MADDE ÖLÇÜSÜ (1004) — madde sahip değişikliği anlatıyor, o yerin kaydında KIRILMA yok.

CLAUDE.md §1: amaç kronoloji ile haritanın birbirini DOĞRULAMASI — "bir madde okunduğunda
haritada tam o değişim görünmeli." Değişmez 2 bunun bir yönünü ölçer (kırılma varsa madde olmalı).
Bu araç TERS YÖNÜ ölçer: madde var, haritada o gün o YERDE hiçbir şey değişmiyor ⇒ YETİM MADDE.

🔴 `denetle.py`nin 2t'sinden (`kirilmasiz_madde`) FARKI — YER KÖRLÜĞÜ:
   2t, maddenin ±30 gününde HERHANGİ bir kayıtta kırılma varsa maddeyi "kapanmış" sayar (d/v/s
   havuzu yersizdir; yalnız `isg:` yer şartı taşır). Sivas'ta "Timur Sivas'ı yerle bir etti"
   1400-08-01 maddesi, o ay başka bir yerde herhangi bir kırılma olsaydı 2t'den KURTULURDU.
   Bu araç maddenin `yer_id`'sini yerleşim kaydıyla eşler ve YALNIZ O KAYDIN zincirine bakar.
   (2t'yi değiştirmez, onun yerine geçmez; yan yana okunur.)

KIRILMA TANIMI — Değişmez 2'nin kendi tanımı: bir kaydın `s:`/`d:`/`v:`/`isg:` dönemlerinin
`f` ve `t` günleri; ufuk uçları (≤1281-01-01, ≥1923-10-29) kırılma DEĞİL, SINIR işaretidir (D210).
Aynı yerin herhangi bir kategorisindeki kırılma sayılır (yabancılar arası devir ve işgal dahil).

EVREN: `data/olaylar*.js` + `data/kronoloji*.js` (krono_ortak_1004.yukle — node ile) × `girdi.yukle()`.

MADDE SINIFI — biri ötekini gizlemez, YALNIZ E/B/D kapıya girer:
  E  etiketli      `etiket:` toprak-kazanc/kayip/kaybi (projenin KENDİ toprak iddiası)
  B  başlıkta fiil  etiketsiz; BAŞLIKTA dar sahiplik fiili (aldı·fethi·ele geçir·zapt·teslim·işgal·
                    ilhak·geri aldı·kaybı·bırakıldı·düştü·katıl…). Fiil kalıbı DAR tutulur.
  D  gövdede fiil   etiketsiz, başlıkta yok; yalnız `d` metninde aynı dar fiil (ayrı ve daha zayıf)
  W  anlatıyor olabilir  kuşatma/yağma/yıkım/akın/sefer anlatıyor ya da başlık BAŞARISIZLIK bildiriyor
                    (alamadı·başarısız·kaldırdı·sonuçsuz·püskürt…) ⇒ toprak değişmeden de doğru olabilir.
                    Sayılır, KAPIYA GİRMEZ.

KIRILMA UZAKLIĞI — E/B/D içinde:
  BAĞLI  ±30 gün içinde o yerde kırılma var        (yetim DEĞİL)
  KAYMA  31-365 gün                                 (tarih kayması adayı: Tobruk 1911 ↔ 1912-10-18 gibi)
  YETİM  kırılma yok ya da >365 gün                 (Sivas 1400 ↔ 1398/1402 gibi)

ÖLÇÜLEMEYEN/ATLANAN KOVALAR (gizlenmez, ayrıca sayılır): yer_id'si boş ya da hiçbir kayıtla
eşleşmeyen sahiplik maddeleri — bu araç onları HİÇ SORMAZ (kayıt bilinmiyor). `taraflar`/künye
kolu YOKTUR: bir künye zinciri "o yerin zinciri" değildir.

ÇIKIŞ KODU  0 KAYMA+YETİM (E/B/D) kümesinin her üyesi üyelik defterinde · 1 defterde olmayan üye
            girdi · 2 ÖLÇÜLEMEDİ. Kapı DEĞİL önce ölçümdür: defter bugünkü tavandır, ONAY değil.
🔴 TAVAN ÜYELİKTİR, SAYI DEĞİL (D259): satır `madde-anahtarı¦yer_id`; defter
   `ARAC-YETIM-MADDE-1004.defter.txt`. Yanlış pozitife yatkın araç: yetim ≠ hatalı.

KULLANIM
  py denetim/ARAC-YETIM-MADDE-1004.py                   ölç, kapıyı uygula
  py denetim/ARAC-YETIM-MADDE-1004.py --liste [E|B|D|W|hepsi]
  py denetim/ARAC-YETIM-MADDE-1004.py --defter-yaz      defteri bugünkü KAYMA+YETİM'e ayarla (ELLE ONAY işi)
  --kok DİZİN (sınav kopyası)    --defter YOL
"""
import collections, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import krono_ortak_1004 as ko

DEFTER = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-YETIM-MADDE-1004.defter.txt")
UFUK = ("1281-01-01", "1923-10-29")
BAGLI_GUN, KAYMA_GUN = 30, 365

# DAR sahiplik fiilleri — Türkçe kök eşleşmesi; kaçıran fiil olabilir (beyan).
GUCLU = re.compile(
    r"\bald[ıi]\w*|\bfet[ıih]\w*|\bfethedil\w*|ele geç\w*|eline geç\w*|\bzapt\w*|\bteslim\b|teslim (?:ol|al|et)\w*|"
    r"i[şs]gal\w*|ilhak\w*|geri ald\w*|\bkayb[ıi]\w*|b[ıi]rak[ıi]l\w*|\bdüş(?:tü|üş)\w*|düşüşü|"
    r"hâkimiyetine gir\w*|hakimiyetine gir\w*|idaresine gir\w*|\bkatıl\w*|\bkatılış\w*|"
    r"sat[ıi]n al\w*|\bsat[ıi]l\w*|devred\w*|\bdevri\b|el değiştir\w*|\bterk\b|terkedil\w*", re.I)
ZAYIF = re.compile(r"ku[şs]at\w*|muhasara\w*|ya[ğg]ma\w*|y[ıi]k[ıi]\w*|ak[ıi]n\w*|baskın\w*|sefer\w*|çarpış\w*|"
                   r"harap\w*|tahrip\w*|savaş\w*|muharebe\w*", re.I)
BASARISIZ = re.compile(r"alamad[ıi]\w*|ba[şs]ar[ıi]s[ıi]z\w*|kald[ıi]rd[ıi]\w*|sonuçsuz\w*|püskürt\w*|"
                       r"geri çekil\w*|kuşatmay[ıi] kald\w*|boşuna|başarıs", re.I)
KOVALAR = (("E", "etiketli (etiket: toprak-*)"),
           ("B", "başlıkta dar sahiplik fiili"),
           ("D", "yalnız gövdede (d) dar sahiplik fiili"),
           ("W", "anlatıyor olabilir (kapıya girmez)"))


def _kirilmalar(kayit):
    """{gün: [kategori,...]} — ufuk uçları SINIR işaretidir, kırılma değil."""
    out = collections.defaultdict(list)
    for kat in ("s", "d", "v", "isg"):
        for p in kayit.get(kat) or []:
            for g in (p.get("f"), p.get("t")):
                if g and UFUK[0] < g < UFUK[1]:
                    out[g].append(kat)
    return out


def _gun(t):
    p = ko.pad_tarih(t)
    if not p:
        return None
    y, m, d = p
    return _gun_no(y, m or 1, d or 1)


def _gun_no(y, m, d):
    y2 = y - (m <= 2)
    era = (y2 if y2 >= 0 else y2 - 399) // 400
    yoe = y2 - era * 400
    doy = (153 * (m + (-3 if m > 2 else 9)) + 2) // 5 + d - 1
    return era * 146097 + yoe * 365 + yoe // 4 - yoe // 100 + doy


def kova(m):
    """Maddeyi E/B/D/W/None'a ayır. None = sahiplik iddiası yok (araç ilgilenmez)."""
    b, d = m["b"] or "", m["d"] or ""
    etiketli = any(e in ("toprak-kazanc", "toprak-kayip", "toprak-kaybi") for e in m["etiket"])
    if BASARISIZ.search(b):
        return "W"                                  # başlık başarısızlık bildiriyor
    if etiketli:
        return "E"
    if GUCLU.search(b):
        return "B"
    if GUCLU.search(d):
        return "D"
    if ZAYIF.search(b) or ZAYIF.search(d):
        return "W"
    return None


def olc(kok):
    y = ko.yukle(kok)
    Y = ko.yerlesimleri_oku(kok)
    kayit = {}
    for r in Y:
        kayit[r["ad"]] = r
    kir_onbellek = {}
    sonuc = {"BAGLI": collections.Counter(), "KAYMA": collections.Counter(), "YETIM": collections.Counter(),
             "yeridsiz": collections.Counter(), "eslesmeyen": collections.Counter(), "toplam": 0}
    uyeler = []                                   # (anahtar, kova, sinif, madde, kayit_adi, fark)
    w_liste = []
    for m in y["maddeler"]:
        c = kova(m)
        if c is None:
            continue
        sonuc["toplam"] += 1
        yid = m["yer_id"]
        if not yid:
            sonuc["yeridsiz"][c] += 1
            continue
        r = kayit.get(yid)
        if r is None:
            sonuc["eslesmeyen"][c] += 1
            continue
        g = _gun(m["t"])
        if g is None:
            raise ko.Olculemedi("maddenin tarihi okunamadı: %s %r" % (m["dosya"], m["t"]))
        if yid not in kir_onbellek:
            kir_onbellek[yid] = sorted(_gun(x) for x in _kirilmalar(r))
        gunler = kir_onbellek[yid]
        fark = min((abs(x - g) for x in gunler), default=None)
        if fark is not None and fark <= BAGLI_GUN:
            sinif = "BAGLI"
        elif fark is not None and fark <= KAYMA_GUN:
            sinif = "KAYMA"
        else:
            sinif = "YETIM"
        sonuc[sinif][c] += 1
        if c == "W":
            if sinif != "BAGLI":
                w_liste.append((m, yid, sinif, fark))
            continue
        if sinif != "BAGLI":
            uyeler.append((ko.madde_anahtari(m) + "¦" + yid, c, sinif, m, yid, fark))
    return y, sonuc, uyeler, w_liste


def main(argv):
    try:
        kok = ko.kok_al(argv)
        defter_yolu = argv[argv.index("--defter") + 1] if "--defter" in argv else DEFTER
        y, s, uyeler, w_liste = olc(kok)
        print("YETİM MADDE — %d madde · %d sahiplik-iddiali (E/B/D/W) · %d yerleşim kaydı" %
              (len(y["maddeler"]), s["toplam"], len(ko.yerlesimleri_oku(kok))))
        print("  %-3s %-40s %7s %7s %7s | %8s %9s" % ("", "kova", "BAĞLI", "KAYMA", "YETİM", "yer_id'siz", "eşleşmeyen"))
        for k, ad in KOVALAR:
            print("  %-3s %-40s %7d %7d %7d | %8d %9d" % (
                k, ad, s["BAGLI"][k], s["KAYMA"][k], s["YETIM"][k], s["yeridsiz"][k], s["eslesmeyen"][k]))
        n_kapi = len(uyeler)
        print("  KAPI KÜMESİ (E+B+D, KAYMA+YETİM): %d  · W (kapı dışı, aday): %d" % (n_kapi, len(w_liste)))
        print("  i yer_id'siz / eşleşmeyen sahiplik maddeleri SORULMADI (kayıt bilinmiyor): %d / %d" %
              (sum(s["yeridsiz"].values()), sum(s["eslesmeyen"].values())))
        if "--liste" in argv:
            i = argv.index("--liste")
            h = argv[i + 1] if i + 1 < len(argv) and not argv[i + 1].startswith("--") else "hepsi"
            for k, ad in KOVALAR:
                if h not in ("hepsi", k):
                    continue
                print("  --- %s %s ---" % (k, ad))
                kaynak = w_liste if k == "W" else [(x[3], x[4], x[2], x[5]) for x in uyeler if x[1] == k]
                for m, yid, sinif, fark in sorted(kaynak, key=lambda r: (r[0]["t"] or "", r[1])):
                    print("    %s %-6s %-22s fark=%s | %s | %s" % (
                        m["t"], sinif, yid[:22], ("%dg" % fark) if fark is not None else "kırılma yok",
                        m["dosya"], (m["b"] or "")[:70]))
        if "--defter-yaz" in argv:
            ko.defter_yaz(defter_yolu, {u[0] for u in uyeler},
                          "YETİM MADDE — KAYMA+YETİM (E/B/D) ÜYELİK DEFTERİ (tavan = üyelik, sayı değil)\n"
                          "Satır: dosya¦t¦başlık-özeti¦yer_id. Yetim ≠ hatalı: araç yanlış pozitife yatkındır.\n"
                          "ELLE ONAYLAMADAN yazma — 'defterde var' ≠ 'incelendi ve kabul edildi'.")
            print("  defter yazıldı: %s (%d üye)" % (defter_yolu, n_kapi))
            return 0
        tavan = ko.defter_oku(defter_yolu)
        bugun = {u[0] for u in uyeler}
        yeni = sorted(bugun - tavan)
        dusen = len(tavan - bugun)
        if dusen:
            print("  i defterde olup artık yetim olmayan %d üye (iyi haber — defteri daralt)" % dusen)
        if yeni:
            print("🔴 YENİ YETİM MADDE — defterde olmayan %d:" % len(yeni))
            for u in yeni[:40]:
                print("     " + u)
            print("SONUÇ: yeni yetim madde, çıkış kodu 1")
            return 1
        print("SONUÇ: temiz — kapı kümesi %d, hepsi defterde. Çıkış kodu 0" % len(bugun))
        return 0
    except ko.Olculemedi as e:
        print("🔴 ÖLÇÜLEMEDİ — %s" % e)
        print("   'ölçülemedi' ≠ 'yok' ≠ 'temiz' (CLAUDE.md §11). Çıkış kodu 2")
        return 2


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:                                   # noqa
        pass
    sys.exit(main(sys.argv[1:]))
