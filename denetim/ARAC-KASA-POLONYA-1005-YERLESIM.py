# -*- coding: utf-8 -*-
"""KASA-POLONYA-1005 — yerleşim s:/isg: ÖNERİSİ (koordinatörün dosyası; yalnız ölçüm
worktree'sinde uygulanır, diff'i denetim/KASA-POLONYA-1005-YERLESIM.diff olarak teslim edilir).

Her şehirde `kongre-polonyasi → rusya-gecici-hukumet → sovyet-rusya` kuyruğu
(künyeden devralınmış uç, D207) kaynaklı çıkış günüyle değiştirilir.
Kullanım:  py denetim/ARAC-KASA-POLONYA-1005-YERLESIM.py <depo-kökü>
"""
import io, sys, os, re

KOK = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KUYRUK = ('{f:"1815-06-09",t:"1917-03-15",d:"kongre-polonyasi"},{f:"1917-03-15",t:"1917-11-07",'
          'd:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-11-11",d:"sovyet-rusya"}')

KP = ('kaynak:"KASA-POLONYA-1005 — Rus idaresinden çıkış: ')

YENI = {
    # dosya, ad → (yeni kuyruk, isg veya None, kaynak notu)
    ("yerlesimler.js", "Varşova"): (
        '{f:"1815-06-09",t:"1915-08-05",d:"kongre-polonyasi"},{f:"1915-08-05",t:"1918-11-11",d:"almanya"}',
        None, "Jarosławski, Officina Historiae 5 (2022) · IPN Przystanek Historia — Almanlar 5 Ağustos 1915"),
    ("yerlesimler.js", "Łódź"): (
        '{f:"1815-06-09",t:"1914-12-06",d:"kongre-polonyasi"},{f:"1914-12-06",t:"1918-11-11",d:"almanya"}',
        None, "Jarosławski 2022 · Mikietyński (UJ) — Almanlar 6 Aralık 1914 (IPN: 5 Aralık)"),
    ("yerlesimler.js", "Częstochowa"): (
        '{f:"1815-06-09",t:"1914-08-03",d:"kongre-polonyasi"},{f:"1914-08-03",t:"1918-11-11",d:"almanya"}',
        None, "IPN Przystanek Historia (Frączkiewicz) — Almanlar 3 Ağustos 1914"),
    ("yerlesimler.js", "Kielce"): (
        '{f:"1815-06-09",t:"1915-05-13",d:"kongre-polonyasi"},{f:"1915-05-13",t:"1915-10-01",d:"almanya"},'
        '{f:"1915-10-01",t:"1918-11-11",d:"avusturya"}',
        'isg:[{f:"1914-08-12",t:"1914-08-13",d:"avusturya",kaynak:"Kosińska/Kosiński, Rocznik MNK 15 — strzelcy 12 Ağu girdi, 13 Ağu çekildi"},'
        '{f:"1914-08-19",t:"1914-09-11",d:"avusturya",kaynak:"Kosińska/Kosiński — 19 Ağu yeniden giriş; 10 Eyl çekiliş, 11 Eyl Kazaklar"},'
        '{f:"1914-09-30",t:"1914-11-02",d:"almanya",kaynak:"Kosińska/Kosiński — Almanlar 30 Eyl; 2 Kas Almanlar+Avusturyalılar çekildi (Rus valisi 9 Kas)"}]',
        "Kosińska/Kosiński, Rocznik MNK 15 — Almanlar 13 Mayıs 1915; Avusturya Genel Valiliği 1 Ekim 1915"),
    ("yerlesimler.js", "Radom (Polonya)"): (
        '{f:"1815-06-09",t:"1915-07-01",d:"kongre-polonyasi"},{f:"1915-07-01",t:"1918-11-11",d:"avusturya"}',
        None, "AY DÜZEYİ (Temmuz 1915; gün kaynaklanmadı) — Radom belediyesi + Malczewski Müzesi"),
    ("yerlesimler_p0037.js", "Chełm (Kholm)"): (
        '{f:"1815-06-09",t:"1915-08-01",d:"kongre-polonyasi"},{f:"1915-08-01",t:"1918-11-11",d:"avusturya"}',
        None, "AY DÜZEYİ (Ağustos 1915; gün kaynaklanmadı) — Chełmska Biblioteka Publiczna monografisi"),
    ("yerlesimler_p0037.js", "Zamość"): (
        '{f:"1815-06-09",t:"1915-07-01",d:"kongre-polonyasi"},{f:"1915-07-01",t:"1915-09-01",d:"almanya"},'
        '{f:"1915-09-01",t:"1918-11-11",d:"avusturya"}',
        None, "Stankiewicz, Archiwariusz Zamojski XIX (2021) — Almanlar 1 Temmuz 1915; Avusturya Eylül 1915 (AY DÜZEYİ)"),
}

def kaynakli(kuyruk, not_):
    # her YENİ dönemin (kongre-polonyasi kapanışı + işgalci) içine kaynak: yazılır
    q = not_.replace('"', "'")
    return re.sub(r'(\{f:"[0-9-]+",t:"[0-9-]+",d:"[a-z-]+")\}',
                  lambda m: m.group(1) + ',kaynak:"%s"}' % (KP2 + q), kuyruk)


KP2 = "KASA-POLONYA-1005 · "
degisen = 0
for (dosya, ad), (kuyruk, isg, not_) in YENI.items():
    yol = os.path.join(KOK, "data", dosya)
    t = io.open(yol, encoding="utf-8", newline="").read()
    bas = t.index('{ ad:"%s"' % ad)
    son = t.find("\n{ ad:", bas + 5)
    son = len(t) if son < 0 else son
    kayit = t[bas:son]
    assert kayit.count(KUYRUK) == 1, f"{ad}: kuyruk {kayit.count(KUYRUK)} kez"
    yeni = kayit.replace(KUYRUK, kaynakli(kuyruk, not_))
    if isg:
        assert yeni.count('d:"polonya"}]') == 1
        yeni = yeni.replace('d:"polonya"}]', 'd:"polonya"}], ' + isg, 1)
    t = t[:bas] + yeni + t[son:]
    io.open(yol, "w", encoding="utf-8", newline="").write(t)
    degisen += 1
    print("OK", dosya, ad)
print(degisen, "kayit")
