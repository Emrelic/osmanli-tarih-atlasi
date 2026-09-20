# -*- coding: utf-8 -*-
"""KD-ZAMAN-0920 — TDV ARAMASINDAN MADDE SLUGU ÇIKARAN ARAÇ (SALT OKUR)

🔴 NİÇİN VAR: `CLAUDE.md §4` "TDV'de yok demeden ARA" diyor ve dar slug tutmazsa
kapsayıcı maddeyi denemeyi emrediyor. Ama ARAMA SONUCUNDAN MADDENİN SLUGUNU ÇIKARAN
bir alet yoktu. 20 Eylül 2026'da bu yüzden iki kayıt (Derbend, Kuba) "ölçülemedi"
kovasına düştü: `derbend`, `derbend--sehir`, `derbent`, `kuba`, `kuba--sehir`
sluglarının hepsi 302 verdi — oysa gerçek slug `/derbend--dagistan` idi ve arama
sayfasının HTML'inde AÇIKÇA duruyordu.

⚠️ Tuzak: arama sayfasında `?q=...&p=b` gibi süzgeç bağlantıları ve `/duyuru/...`
gibi site bağlantıları da var; yalnız tek parçalı `/slug` biçimindekiler madde olur.
TDV eşadlı maddeleri `--` ekiyle ayırıyor (`derbend--dagistan`, `ordu--sehir`) —
`CLAUDE.md §4` TDV tuzağı ②'nin ("canlı slug, YANLIŞ madde") çaresi budur.

Kullanım:
    py denetim/ARAC-KD-ZAMAN-SLUG-0920.py <arama kelimesi> [...]
"""
import sys, re, io, urllib.request, urllib.parse

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

ELE = ("duyuru", "duyurular", "arama", "iletisim", "hakkimizda", "dosyalar",
       "sergi-arsivi", "gecen-ayin-ilk-20-si", "iletisim-formu", "kullanim-sartlari")

for q in sys.argv[1:]:
    url = "https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(q)
    try:
        h = urllib.request.urlopen(
            urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}),
            timeout=40).read().decode("utf-8", "replace")
    except Exception as e:
        print("%-22s HATA %s" % (q, e))
        continue

    duz = re.sub(r"<[^>]+>", " ", re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I))
    duz = re.sub(r"\s+", " ", duz)
    bas = re.search(r"Madde Başlıkları \((\d+)\)", duz)
    ice = re.search(r"Madde İçerikleri \((\d+)\)", duz)
    # 🔴 TDV sonuç bağlantıları TIRNAKSIZ yazılıyor: `<a href=/artvin>`. İlk sürüm
    # yalnız `href="/..."` arıyordu ve Artvin/Odesa gibi VAR OLAN maddeleri "slug
    # ayrıştırılamadı" diye kaydetti. Ölçülemedi ≠ yok — alet kusuruydu.
    sluglar = [s for s in dict.fromkeys(re.findall(r'href=["\']?/([a-z0-9\-]{3,})["\'\s>]', h))
               if s.split("-")[0] not in ELE and s not in ELE]
    print("=== %-18s madde başlığı: %s · içerik: %s" % (
        q, bas.group(1) if bas else "?", ice.group(1) if ice else "?"))
    if not sluglar:
        print("    slug YOK — 'madde başlığı 0' ise madde gerçekten yok; içerik>0 ise")
        print("    kelime BAŞKA maddelerin gövdesinde geçiyor (kapsayıcı madde adayı).")
    for s in sluglar:
        print("    /%s" % s)
