# BOZKIR-1 raporu (tur 3, kümesi: bozkir1)

Doğrulama: `node denetim/dogu/dogrula.js bozkir1` → çıkış 0, ihlal 0, uyarı 0 (63 kronoloji, 26 yama dilimi, 20 devir eşleşmesi, 0 eşleşmeyen).
Üretici betik repoda değil (scratchpad); çıktı dosyaları elle düzenlenmedi.

## ① Ölçülen
- Girdi polity: 22. Künye yazılan: 4 (`afrigoglu-harezm, xueyantuo, hazar, uygur`; her birinde kuruluş+son = 8 künye-içi madde).
- MS1 dalı künyeli (künye yazılmadı): `tohar-yabgu, semerkant-ihsid, basmil` — kronoloji yazıldı (6 + 4 + 1 `taraflar` geçişi).
- Anlatı maddesi 42 + sınır maddesi 21 = 63. `taraflar` geçiş dağılımı: gokturk-1 9, tang 20, emevi 10, hazar 7, tohar-yabgu 6, bati-gokturk 5, xueyantuo 5, rouran 4, gaochang 4, tuyuhun 4, afrigoglu-harezm 4, karluk 4, semerkant-ihsid 4, dogu-gokturk-2 4, eftalit 3, turges 3, uygur 3, buyuk-bulgaristan 3, kuzey-wei 2, sasani 2, dogu-gokturk 2, avar 1, basmil 1. Polity başına 6-8 hedefi yalnız tohar-yabgu, hazar, xueyantuo'da tutturuldu (kaynak sınırı).
- Gün hassasiyetli (Çin ganzhi → Jülyen, `cin2/_cal.py` işlevleriyle): 10 madde (630-05-02, 634-12-28, 635-07-07, 636-01-25, 640-01-07, 640-01-19, 640-09-19, 641-01-21, 642-01-23, 646-10-29); ay hassasiyetli 5 (520-09-27, 551-07-19, 552-02-10, 553-03-30, 646-07-18); kalan yıl hassasiyeti.
- Yerleşim: yeni 1 (`Gaochang (Koço, Karahoca)`, çift tanıklı koordinat: Wikidata Q877381 42.8528,89.5292 + OSM 42.8551,89.5285), yama 6 (Belh, Semerkant, Köhne Ürgenç, Karakurum, Balasagun/Suyab, Astrahan). Toplam 27 `s:` dilimi, `__BOSLUK__` 4 dilim (hepsi yama; yeni yerleşimde yok).
- Mevcutla çakışıp atlanan: 0 (tarama: `yer_ara`/yer_indeks; Gaochang, Kât, Sialkot, İtil, Pingcheng için ad+3 km boş).

## ② Bulunamayan / doğrulanamayan
- `alkhon`: künye ve Siyâlkot yerleşimi `hint1`de ZATEN yazılmış (hint1/kunye_yeni.js, RAPOR m.44). Burada yazılmadı — mükerrer birleştirmede hint1 esas. Vikipedi dışında akademik Alkhon kaynağı açılamadı (Iranica 403).
- Kât (Afrigoğulları başkenti): TDV Hârizm «Kâs»ı anar ama Beruniy ile özdeşlik TDV'de yok; ikinci bağımsız tanık yok → YAZILMADI (tek tanık). Afrigoğulları Hârizm'i Köhne Ürgenç yamasında BEYANLI yaklaşıklıkla (ABİ MERKEZ Kât) temsil edildi.
- Hazar: İtil ve Belencer için koordinat/tarih tanığı yok (TDV İtil'in konumunu vermiyor) → Astrahan yamasıyla beyanlı yaklaşıklık. Tuyuhun (Fuqi/Qinghai), Kuzey Wei (Pingcheng/Datong), Rouran (Mumo), Avar (Ring), Büyük Bulgaristan (Phanagoria), Eftalit, Gokturk-1/Dogu-Gokturk(Ötüken) için yeni yerleşim yazılmadı: çift tanıklı koordinat bulunamadı ya da zincir (→2000) kaynaklanamadı.
- Açılmayan: Iranica, Cambridge History of Early Inner Asia, Golden/Grousset/Barthold tam metinleri (bu oturumda), TDV'de bulunmayan maddeler (Göktürkler, Hunlar, Eftalitler, Rouranlar, Sogdlar için slug 404/arama sayfası). Göktürk/Avar/Eftalit için yeni madde yok: ms1 maddeleri mevcut (63 madde mevcut).
- Xueyantuo f: girdi 627, Jiu Tang 199 xia 貞觀二年 (628) sonrası → 628 yazıldı (627 doğrulanamadı).
- Hicrî çevrimler aritmetik tabloyla (±1-2 gün); 5 madde `ic_not_takvim`/`ic_not`'ta hicrî iz taşıyor.
- `cal2.py` Çin yılı 641 için hata verdi; 642-01-23 maddesi ganzhi sayacıyla (640-12-19 甲子朔 çıpası) elle hesaplandı, `ic_not`ta beyan edildi.

## ③ Kararlar / öneriler
**Künye düzeltme önerileri (dosyaya yazılmadı):**
1. `bati-gokturk` t=0630-01-01: TDV Karluklar (656), TDV Tohâristan (657-658), TDV Semerkant (659) Batı Göktürk'ün 657-659'a kadar sürdüğünü söylüyor → t = 0659-01-01 (yıl). Semerkant yaması 582→659 `bati-gokturk` dilimini ona göre yazdı; künye düzelmezse "hayalet devlet" riski.
2. `dogu-gokturk` t=0630-01-01 → 0630-05-02 (Jiu Tang 3, gün).
3. `rouran` t=0552-01-01 → ≥ 0552-02-10 (Zhou shu 50: kağanlık Deng Shuzi ile sürdü).
4. `kuzey-wei` t=0534-01-01 → 0534-11-08 (cin1 Ye/Luoyang zincirleri aynı günü kullanıyor).
5. `gaochang`: Jiu Tang 198 «134 yıl» → f≈0506 (atlas 0501); t=0640-01-01 → 0640-09-19 (gün).
6. `tuyuhun` t=0663: Jiu Tang 198 «龍朔三年» ile uyumlu (yıl). `avar`, `eftalit`, `turges`, `buyuk-bulgaristan`, `kuzey-wei` f/t'sine bu oturumda dokunulmadı.
7. `kirgiz-yenisey` / `yenisey-kirgiz` mükerrer (BOZKIR_RAPOR2): Karakurum 840 sonrası dilim bu belirsizlik yüzünden yazılmadı (`devam_gerekli`).

**YAMA GEREKLİ (yama_bozkir1.js):** Belh (0500→0750; devam 0750→1198), Semerkant (0500→0750; devam 0750→1000), Köhne Ürgenç (0921→1017-05-30; tam), Karakurum (0500→0840; devam 0840→1281), Balasagun/Suyab (0500→1000; tam), Astrahan (0500→0965; devam 0965→1281). `kuyruk_gerekli`: Gaochang 0640-09-19→2000-12-31.
**Karakurum/Balasagun/Astrahan** beyanlı yaklaşıklık taşır (Ötüken≈Orhun vadisi, Ak-Beşim=Suyab, İtil≈Astrahan) — `kaynak:`ta yazılı.

**Boya ihtiyacı** (`arac/renkler.py BOYALAR`'da kontrol edilecek; bu oturumda dosya okunmadı, yalnız `devletler.js`/ms1 kimlikleri kontrol edildi): yeni künyeler `afrigoglu-harezm, xueyantuo, hazar, uygur` BOYALAR'a eklenmeli; MS1 kimlikleri `tohar-yabgu, semerkant-ihsid, basmil` için de BOYALAR denetlenmeli; yamalarda kullanılan `eftalit, gokturk-1, dogu-gokturk, dogu-gokturk-2, bati-gokturk, turges, karluk, karahanli, memuni-harezm, sasani, emevi, tang` var olanlardan sayıldı (doğrulanmadı).
**Yeni tür/bölge:** yok. `hazar` için `bolge:"dogu-avrupa"` seçildi (girdi `sibirya-bozkir`); `tur` sözlüğü: `hanedanlik, kaganlik` (mevcut).
**Sorulara cevap (Emre kararı):** (a) `xueyantuo` f=628 mi 627 mi, (b) Hazar f=650 (yaklaşık) kabul mü, (c) Uygur f=745 (TDV Uygurlar) mı 744 (Dokuz Oğuzlar) mı, (d) yarım kalan Karahanlı 840-1000 Balasagun başkentliği TDV Karahanlılar'dan teyit.
