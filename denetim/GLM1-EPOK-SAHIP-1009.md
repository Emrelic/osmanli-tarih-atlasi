# GLM1-EPOK-SAHIP-1009 — 1281 epok damgasındaki ilk sahibin TDV ile çelişmesi

Görev: `glm/GLM-EPOK-SAHIP-GOREV.txt` · Soru: *noktanın 1281-01-01 tarihindeki
sahibi olarak atlasa yazılan kimlik, TDV'nin o yer hakkında söylediğiyle ÇELİŞİYOR mu?*

## ÖNGÖRÜ — ölçümden önce yazıldı (2026-10-09, evren çıkarımından hemen sonra; bu
noktaya kadar hiçbir TDV gövdesi okunmadı; yalnız göreve eklenen 11 örnek görüldü)

Ölçülen evren: **2.443** nokta (görev metni 2.527 demişti; fark 84 — nedeni
raporda). AŞAMA 1 **1.295** · AŞAMA 2 1.148 · kutasız 24.

**① 2.443 noktanın kaçı ① (ÇELİŞİYOR) kovasına düşecek? → %6–8, yani 150–195.**
AŞAMA 1 içinde oran daha yüksek (%8–11, 100–140); AŞAMA 2'de düşük (<%2).
Kova dağılımı öngörüm (AŞAMA 1, 1.295):
```
④ MADDE YOK     %25–30   (küçük yerleşimlerin çoğunun TDV maddesi yok)
③ SESSİZ        %35–40   (madde var ama 1281 dolayında sahip cümlesi yok)
② DOĞRULUYOR    %20–25   (büyer: büyük şehir maddeleri sahibi açıkça söyler)
① ÇELİŞİYOR     %8–11
⑤ ÖLÇÜLEMEDİ    %1–2     (000 taşıma arızası, boilerplate)
```

**② Mekanizma — hangi coğrafya/sınıf en çok çelişir, NİÇİN? (sıralı):**

1. **"Son sahibin geriye yazılması" — Haçlı/Latin Doğu Akdeniz.** Görevdeki
   11 vakanın 8'i bu sınıf. Mekanizma: 1281 damgası atılırken sahibi "o yerde
   kalıcı iz bırakan sonraki devlet" (Memlük, Bizans, Venedik) diye yazılmış;
   oysa 1281'de Haçlı kalıntıları (Trablus Kontluğu →1289, Kudüs Krallığı
   kalıntıları →1291, Ahaya Prensliği, Napoli'nin Korfu'su, Latin/Bizans
   karışımı Ege) hâlâ ayakta. Bunlar BENZER çünkü hepsi "13. yy sonu
   desiderata"sı: dönemi bilinen ama yerleşime yazılmamış küçük Hıristiyan
   devletleri. Beklenen yoğunlaşma: Levant kıyısı (Sayda–Beyrut–Tortosa
   kuşağı), Mora–Ege adaları–Korfu– Draç hattı.
2. **İlhanlı yazılan Anadolu/Cezîre (208 nokta — en kalabalık sahip).** Mekanizma:
   1243 Kösedağ sonrası fiilî yönetim yerel Selçuklu/beylik elinde, İlhanlı
   hâkimiyeti salgın/veliaht savaşlarıyla dalgalı; TDV şehir maddeleri bu
   karmaşığı yerel aktörle anlatır. "ilhanli" ya da "selcuklu" damgası tek
   renk yazılmışsa çelişki üretir. Diyarbakır (Artuklu→1259 Selçuklu) bu
   sınıfın ölçülmüş örneği; benzerlerinin Doğu ve Güneydoğu'da yığıldığını,
   oran sınıf 1'in ALTINDA ama sayı olarak ona yakın olduğunu öngörüyorum.
3. **Balkan miras parçalanması (İznik/Epir/Sırp/Bulgar/Anjou).** 1204 sonrası
   paylaşımın sınırları kazı değil pazarlık; Veles tipi ("Sırp" yazılmış,
   1246'da İznik almış) çelişkileri Makedonya–Teselya hattında beklerim.
4. **Mağrip üçlüsü (Hafsî/Zeyyânî/Merînî).** TDV Mağrip maddeleri güçlü;
   sınır vilayetlerinde (Bicâye, Konstantinâye, Tilimsan hinterlandı) el
   değiştirme sık; orta oran.
5. **Kırım/Black Sea limanları (Altın Orda vs Ceneviz/Venedik).** 37 nokta;
   oranı düşük ama "Kefe 1266 Ceneviz" tipi kesin çelişkiler içerir.

AŞAMA 2 mekanizma öngörüsü: TDV orada zayıf (③/④ ağırlıklı); ① yalnız ünlü
yerlerden gelir (Kiev, Novgorod, Delhi, Kefe dışında pek az).

Sayı ile mekanizma AYRI değerlendirilecek; ölçümden sonra ikisi de bu
dosyada kendi bölümünde karşılanacak.

---

## ÖLÇÜM — AŞAMA 1 tamamlandı (16-17 Ekim 2026, GLM-I devam ölçümü)

Ortam: UMIT · worktree `glm-epok-1016` · **HEAD 8ecbd56e** (origin/main) · önbellek
898 gövde yeniden kullanıldı (yeniden çekilmedi), 18 flip gövdesi eklendi · TDV'ye
nezaket aralığı ≥1,05 sn. ÖNGÖRÜ bölümüne dokunulmadı; bu bölüm onun altına eklendi.

### 0. Evren yeniden türetildi (§2)

| | 9 Ekim | 16 Ekim |
|---|---|---|
| toplam nokta | 2.443 | 2.406 |
| AŞAMA 1 | 1.295 | 1.240 |

Ad düzeyinde karşılaştırma: **giren 86** · **çıkan 123** · **sahibi değişen 55** ·
aynı sahipli 2.265. Sahibi değişen 55 noktada 9 Ekim hükmü KULLANILMADI; hepsi yeniden
hükme bağlandı (24'ü `epok_karar1016.jsonl`da `DEĞİŞTİ` etiketiyle). Çıkanların
çoğu (Ankara, Konya, İstanbul, İznik…) 1281 damgasını tarihli kayda bırakan veri
değişiklikleri; girenler yeni eklenen yerleşimler.

### 1. SAYILAR — öngörü × ölçüm (AŞAMA 1, 1.240 nokta)

| kova | öngörü (%) | ölçülen | ölçülen % |
|---|---|---|---|
| ① ÇELİŞİYOR | 8–11 (100–140) | **33** | **2,7** |
| ② DOĞRULUYOR | 20–25 | 120 | 9,7 |
| ③ SESSİZ | 35–40 | 176 | 14,2 |
| ④ MADDE YOK | 25–30 | **911** | **73,5** |
| ⑤ ÖLÇÜLEMEDİ | 1–2 | 0 | 0 |

**① sayısı öngörünün üçte birinden az; ④ üç katından fazla.** Öngörünün temel
varsayımı —"madde çoğunlukla vardır, sahipliği söylemeyebilir"— ters döndü: A1'deki
küçük yerleşimlerin dörtte üçünden fazlasının TDV'de **yerleşim maddesi hiç yok**.
③→④ yönlü kayma ② ve ③ oranlarını da düşürdü. AŞAMA 2 kapısı (① > A1'in %5'i = 62)
aşılmadı: **33 < 62 → AŞAMA 2 yok.**

Bölge dağılımı (①/②/③/④): Anadolu 15/29/40/210 (=294) · Balkan 13/42/43/190 (=288) ·
Arabistan-Hint 1/10/27/218 (=256) · Kuzey Afrika 1/15/23/168 (=207) · İran-Kafkas
1/7/19/66 (=93) · Ortadoğu 0/14/15/31 (=60) · Kırım-Karadeniz 2/3/9/28 (=42).

**Ayrı kova — "öngörü doğruydu ama ölçümden önce düzeltildi" (② DEĞİLDİR, 19 nokta):**
Aden · Akkâ · Alanya · Alaşehir · Balyabadra (Patras) · Beyrut · Diyarbakır · Draç ·
Hama · Korfu · Köprülü (Veles) · Malta · Ohri · Sayda · Trablusşam · Zebîd · Üsküp ·
İnebahtı · İştip (Štip). 9 Ekim evreninde bunlar ① görünecekti; künye düzeltmeleri
(son sahibin geriye yazılması sınıfı) ölçümden önce girdi. Beş DEĞİŞTİ daha ② dışında
kaldı (Babadağı, Köstence, Ustrumca, İşkodra, Derne — ③/④).

### 2. MEKANİZMALAR — öngörüdeki sıra bozuldu

1. **İlhanlı yazılan Anadolu/Cezîre kenarı — beklenenden BÜYÜK değil ama birinci sınıf.**
   Öngörü sınıf 2 demişti; ölçülen ①'nin en yoğun kümesi bu (Sivrihisar, Nusaybin,
   Tosya, Ahıska, Tiflis, Lâhîcan, Bartın, Safranbolu). Öngörünün sayı tahmini bu
   sınıfta tuttu, sırası tutmadı.
2. **"Son sahibin geriye yazılması" (Haçlı/Latin + Ceneviz/Venedik) — öngörünün 1 numarası,
   gerçekten ikinci.** 9 kalem: Midilli, Semadirek, Sisam, Taşoz, Azak, Kerç, Anabolu,
   İzdin, Aydonat. Yoğunlaşma öngörüldüğü gibi Ege adaları + Mora + Karadeniz kıyısı.
   Bu sınıfın büyük kısmı zaten 9-13 Ekim künye düzeltmelerinde yendi (19'luk ayrı kova).
3. **Balkan mirası — öngörüyle uyumlu** (13 kalem; Debre, Livno, Trebinye, Alacahisar,
   Belgrad, Akçahisar, Plevne, Yanya…).
4. **Varoluş çelişkisi — öngörüde YOK olan yeni sınıf.** 1281'de henüz kurulmamış
   yerleşime sahip yazılması: Karapınar (1514), Uyvar (1545), Alacahisar (1371),
   Harar (Evfât 1285'te). "İlk zikir ≠ kuruluş" kuralıyla ayıklandı; ölçüt: kaynakta
   açık kuruluş yılı.
5. Mağrip üçlüsü öngörüldüğü kadar çıkmadı (yalnız Tenes ①); Kırım "düşük ama kesin"
   öngörüsü tuttu (Azak, Kerç).

### 3. Alet düzeltmeleri ve tuzaklar (ölçümün izini taşıyan beyanlar)

- **D240 düzeltmesi — autosuggest keşfi.** 9 Ekim ölçümünde 302 = "ölü slug" kabulü
  eksikti: başlık dizini uç noktası (`ajax_search_auto.php`; PHPSESSID + Referer +
  X-Requested-With başlığı ister) gerçek `ad--nitelik` slug'larını da listeler
  (musul--irak, sam--suriye, bari--italya…). 25 sınır vakası elle tarandı: **18'i gerçek
  madde çıktı (④→②/③ flip), 7'si kavram başlığı (④ kaldı)**. 31 yanlış eşleşme
  `epok_yanlis1016.jsonl`ye kayıtlı. Düzeltmemiş olsam ① değmezdi ama ④ %6 puan
  şişmiş ölçülürdü.
- **Önbellek ≠ canlı site:** ereğli gövdesi önbellekte 200 dolu, yeni başlık dizininde
  yok. Önbellek 898 gövde göreve sadık yeniden kullanıldı; beyan edilir.
- **Yeni site yapısı:** gövde `class="makale"`de değil; `article_title…footer-content`
  dilimi + etiket ayıklama kullanıldı; bölüm URL'leri (`/slug/3-bölüm`) 404 veriyor.
  İlk iki ayıklama denemesi gövdeyi budayı sessiz yanılttı (Şam 524 B, Musul 550 B) —
  yakalandı, silinip yeniden çekildi.
- **Hicrî-mîlâdî pencere tuzağı:** yıl regex'i hicrî yılları da yakalar: İsmail
  1205→1790, Ziştovi 1286→1869-70, Mehdiye 1289→1872, Bâce 1297→1880, Berat
  1243→1827. Gün eşlemesi olmayan satırlar elle ayıklandı. "XIII-XV. yüzyıllar"
  kalıbı da regex'i aşardı (Nihâvend) — elle alındı.
- **3 BOZUK önbellek kaydı** (kohne-urgenc 5 B vb.) işaretli; Köhne Ürgenç gövdesi
  başka önbellekten (14,5 KB) okundu.
- **Ad uzlaştırma:** karar adları ↔ evren adları arasında 17 parentez farkı
  (`epok_uzlastir1016.py`, çift anlamlıda durur) giderildi; TSV sıfırdan yeniden
  üretildi — girdiler dosya olduğundan sonuç deterministiktir.
- A1 HTTP: 200=433 · 302=917; 302'lerin büyük kısmı kavram eşleşmesi. Arama
  kampanyası: yok 770 · kısmi 111 · bulundu 39.

### 4. Teslim

- `denetim/GLM1-EPOK-SAHIP-1016.tsv` — **1.240/1.240 satır, bekleyen 0**, yarım satır yok
  (biçim: id · ad · 1281_sahibi_atlas · tdv_slug · kova · tdv_cumle · not).
- `denetim/GLM1-EPOK-SAHIP-1016-oneri.diff` — **①'nin 33 kalemi için düzeltme ÖNERİLERİ**
  (KISALT/GENİŞLET/ardıl etiketli; `data/`ya YAZILMADI).
- `glm/epok_karar1016*.jsonl` (214 insan hükmü; p1-p7 parça dosyalarıyla),
  `epok_yanlis1016.jsonl`, `epok_*1016.py` aletleri, evren/fark/tarama JSON'ları.
- Yeni çekilen 18 flip gövdesi `denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/` içinde.

**Bulamadıklarım:** A1 dışı 1.166 noktanın hükmü (AŞAMA 2 kapısı açılmadı); öngörünün
① sayısını açıklayan ikinci bir mekanizma yok — sapmanın tek nedeni ④ tabanı.
**İsteklerim:** ① önerilerinin 33 kalemini işleme (ben değil, Emre); "öngörü doğruydu
ama düzeltildi" kovasının yöntem sayılması; D240 dersinin `dersler/`e yazılması.
