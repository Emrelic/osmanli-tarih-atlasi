# Kaynak doğrulama — Fransa/İber/Britanya-İrlanda dilimi (13 Kasım 2026, HAVVA)

Girdi: UMIT listesi (`origin/umit-1113-kaynak-celiski-liste`, doğrulanmamış). Dilimde kalan maddeler:
**Athlone/İrlanda (P1)**, **Savoya 1860 (P2, Fransa tarafı)**, **irlanda t 1603-03-30 (Jülyen/Gregoryen, P2)**.
(Pau, Brest, La Rochelle, Perpignan, Gibraltar, Nantes, Besançon, Limoges, Burgonya, Sion/Martigny kapsam dışı.)
Veri dosyalarına DOKUNULMADI: hiçbir madde için bağımsız ≥2 kaynakla kesin yıl/gün çıkmadı (UYDURMA YOK).

## 1. Athlone `1281-01-01..1603-03-30 irlanda` — DEĞİŞMEDİ, BORÇ
Bulgu (kaynaklı): Athlone Kalesi 1210'da Kral John adına justiciar John de Grey (Norwich piskoposu) tarafından
KRALİYET kalesi olarak yapıldı → 1281'de "Gal İrlanda'sı" (`irlanda`) etiketi tutmuyor; kale İngiliz lordluğunun.
Ancak sonraki yüzyıllarda el değiştirdi: 1315'te Ruaidri Ó Conchobair yaktı, kale alınmadı (Annals of St Mary's Dublin);
"sık sık İrlanda elinde, 1537'de Kraliyetçe geri alındı" (Carew Mss. 1537: «usurped by the Irish»); 1569'da Connacht
Başkanlığı merkezi.
Kaynaklar: Heritage Ireland (OPW) https://heritageireland.ie/unguided-sites/athlone-castle/ ·
Athlone Castle (Carew 1537 atfı, 1569) https://www.athlonecastle.ie/?p=7089 ·
Britannica 11. basım "Athlone" (1210) https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Athlone ·
Murtagh (ed.), Athlone: history and settlement to 1800 (2000) — okunmadı.
Neden değişmedi: İngiliz→İrlanda el değiştirme TARİHİ (14.-15. yy) hiçbir okunan kaynakta yok; 1537 yalnız yıl,
günü yok (Değişmez 2 için kronoloji maddesi + ±30 gün gerekir). Bu iki dilimi uydurma yıllarla bölmek yasak.
Beklenen düzeltme (borç): `1281..<kayıp yılı> ingiltere` · `<kayıp>..1537 irlanda` · `1537..1603-03-30 ingiltere`
(1541 `ingiltere-irlanda-krallik` künyesiyle ilişki ayrıca sınıflanmalı). Gerekli kaynak: Murtagh 2000 / Irish Historic
Towns Atlas "Athlone" / Down Survey öncesi Connacht tarihleri. Aynı kalıp: Sligo, Donegal, Tralee, Belfast
(`INGILTERE-DENETIM-1111.md` F bölümü) — toplu iş olarak ele alınmalı.
Not: `yer_yama_1923_1945.js` Athlone satırı (f/t) bu turda değiştirilmedi → LAB eşlemesi etkilenmez.

## 2. Savoya 1860 — DEĞİŞMEDİ (atlas zaten ayrıştırmış)
Atlas: Chambéry/Nice `sardinya-piyemonte → fransa-cumhuriyet` 1860-06-14; Torino Antlaşması 24 Mart ayrı madde
(`kronoloji_italya.js:888`), plebisitler (Nice 15-16, Savoya 22-23 Nisan) gün notunda, 14 Haziran resmî teslim
(`kronoloji_cok_fransa.js:39`). Kaynak teyidi: Treaty of Turin 24.03.1860, plebisit Nisan, katılma/teslim 14.06.1860
(Wikipedia + emersonkent.com antlaşma metni; bağımsız akademik ikinci kaynak bu turda açılmadı → mevcut değer kalır,
liste farkı "24 Mart ↔ 14 Haziran" bir ÇELİŞKİ DEĞİL, antlaşma ↔ fiilî devir ayrımıdır).

## 3. irlanda t 1603-03-30 (Mellifont) — BORÇ (Jülyen/Gregoryen)
Kaynaklar 30 Mart 1603 (29-31 arası oynar) verir; İngiliz idaresindeki İrlanda'da takvim Jülyen → CLAUDE.md /
VERI-YAPISI Gregoryen kuralıyla karşılığı 1603-04-09. Etkilenen yer: devletler.js (2), kimlikler.js, ufuk_bantlari_ust.js,
yerlesimler_avrupa.js (16 satır), yer_yama_1923_1945.js (6) + üretilmiş paketler. ±30 gün içinde olduğundan Değişmez 2
bozulmaz; ama toplu, üretilmiş dosyaları da etkileyen bir değişiklik olduğundan bu turda uygulanmadı. Öneri: tek elden,
`paketle` ile birlikte; kaynak: DIB «O'Neill, Hugh» (okunmadı).
