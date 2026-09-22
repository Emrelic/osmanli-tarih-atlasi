# -*- coding: utf-8 -*-
"""KRONO-0076-C — yamalari UYGULAR. Bayraksiz kosarsan HICBIR SEYE DOKUNMAZ,
yalnizca her capanin dosyada kac kez bulundugunu basar (onizleme).

  py denetim/KRONO-0076-C-YAMA-uygula.py            # onizleme
  py denetim/KRONO-0076-C-YAMA-uygula.py --uygula   # yaz
  py denetim/KRONO-0076-C-YAMA-uygula.py --uygula --gun-11   # H-0160 icin 1914-11-11

Kural: her capa dosyada TAM 1 kez bulunmali. 0 ya da >1 ise O YAMA ATLANIR
(sessiz yanlis degistirme yok). Uygulandiktan sonra tekrar kosturulursa capa
0 bulunur ve "zaten uygulanmis" der — idempotent.

🔴 UYGULAMADAN SONRA: py arac/denetle.py   (ve Sisam yamasi icin petek kosusu)
"""
import io, os, sys

KOK = r"C:\atlas"
UYGULA = "--uygula" in sys.argv
GUN11 = "--gun-11" in sys.argv

# (dosya, aciklama, eski, yeni)
YAMALAR = [
 ("data/olaylar.js",
  "§8 · Trablusgarp Savasi: ay hassasiyetli t -> TDV'nin gunu (29 Eylul 1911)",
  '{ t:"1911-09", k:"savas", etiket:["savas","antlasma"',
  '{ t:"1911-09-29", k:"savas", etiket:["savas","antlasma"'),

 ("data/olaylar.js",
  "§8 · I. Dunya Savasina giris: ay hassasiyetli t -> acik gun (siralama DEGISMEZ)",
  '{ t:"1914-11", k:"savas", etiket:["savas","ekonomi"',
  '{ t:"1914-11-11", k:"savas", etiket:["savas","ekonomi"' if GUN11
  else '{ t:"1914-11-01", k:"savas", etiket:["savas","ekonomi"'),

 ("data/kronoloji_italya.js",
  "§4 · Trablusgarp Savasi'nin ilani: atlas kendini kaynak gostermis + SAHTE celiski",
  'kaynak:"data/devletler.js `italya` embedded kronoloji: \\"Trablusgarp Savaşı\'nı başlattı\\" (t:\\"1911-09-29\\"); TDV `trablusgarp` (gövdesi okundu) farklı bir tarih (\\"1 Eylül 1911\\") veriyor — bu oturumda İKİ KAYNAK ÇELİŞTİ, data/devletler.js\'in tarihi (uluslararası akademik konsensüsle de örtüşen 29 Eylül) esas alındı, çelişki KOORDİNATÖRE bildirilecek"',
  'kaynak:"TDV `trablusgarp-savasi`, gövde AYNEN: \\"29 Eylül\'de ilân edilen savaş\\" · hassasiyet: GÜN. Daha önce kaydedilen \\"1 Eylül 1911\\" çelişkisi YANLIŞ SLUG\'dan doğmuştu (`trablusgarp` = yer maddesi, savaşın maddesi değil); doğru maddenin gövdesi atlasla ÇELİŞMİYOR, çelişki KAPANDI"'),

 ("data/yerlesimler.js",
  "Sisam · vassal doneminin SONU: atlasin kendi gunu -> TDV'nin gunu (11 Kasim 1912)",
  'v:[{f:"1832-12-10",t:"1912-03-13",statu:"vassal"}]',
  'v:[{f:"1832-12-10",t:"1912-11-11",statu:"vassal"}]'),

 ("data/yerlesimler.js",
  "Sisam · Yunanistan doneminin BASI (ayni gune tasinir, bosluk/ortusme yok)",
  '{f:"1912-03-13",t:"1923-10-29",d:"yunanistan"}',
  '{f:"1912-11-11",t:"1923-10-29",d:"yunanistan"}'),

 ("data/olaylar_ek6.js",
  "Sisam · kronoloji maddesi ayni gune tasinir (Degismez 2 icin ZORUNLU)",
  '{ t:"1912-03-13", k:"kayip", etiket:["toprak-kayip","isyan","konu-askeri","konu-isyan"], b:"Sisam\'ın Osmanlı idaresinden çıkışı", gun:"1912",',
  '{ t:"1912-11-11", k:"kayip", etiket:["toprak-kayip","isyan","konu-askeri","konu-isyan"], b:"Sisam\'ın Osmanlı idaresinden çıkışı", gun:"11 Kasım 1912",'),

 ("data/olaylar_ek6.js",
  "Sisam · kaynak alani: TDV `sisam` maddesine baglanir",
  'kaynak:"yunanistan", duygu:["😔"], yer_id:"Sisam" }',
  'kaynak:"sisam", duygu:["😔"], yer_id:"Sisam" }'),
]

print("MOD:", "UYGULA" if UYGULA else "ONIZLEME (hicbir sey yazilmiyor)")
print("H-0160 secimi:", "1914-11-11" if GUN11 else "1914-11-01 (varsayilan)")
print()
ic = {}
yazildi = set()
uygulanan = atlanan = 0
for dosya, aciklama, eski, yeni in YAMALAR:
    yol = os.path.join(KOK, dosya.replace("/", os.sep))
    if yol not in ic:
        with io.open(yol, encoding="utf-8") as f:
            ic[yol] = f.read()
    n = ic[yol].count(eski)
    m = ic[yol].count(yeni)
    if n == 1:
        durum = "UYGULANIR"
        if UYGULA:
            ic[yol] = ic[yol].replace(eski, yeni, 1)
            yazildi.add(yol)
        uygulanan += 1
    elif n == 0 and m >= 1:
        durum = "ZATEN UYGULANMIS — atlandi"
        atlanan += 1
    else:
        durum = "🔴 CAPA %d KEZ BULUNDU — ATLANDI (1 olmali)" % n
        atlanan += 1
    print("[%s] %s" % (durum, dosya))
    print("      %s" % aciklama)

if UYGULA:
    for yol in sorted(yazildi):
        with io.open(yol, "w", encoding="utf-8", newline="") as f:
            f.write(ic[yol])
        print("YAZILDI:", yol)

print("\nOZET: uygulanabilir %d · atlanan %d" % (uygulanan, atlanan))
if UYGULA and yazildi:
    print("🔴 SIRADA: py arac/denetle.py   (Sisam degistiyse ayrica petek kosusu)")
