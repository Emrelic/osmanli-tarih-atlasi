# YER ATAMA — ilerleme defteri

## Kimlik
- **Ad (tahtada):** `YER ATAMA` (eski ad: `SONNET HAZIR KITA 60`)
- **Dinlenen adlar (bekçi):** `YER ATAMA`
- **Model:** Sonnet 5
- **Koordinatör:** OSMANGAZİ
- **Dosyam:** `data/yer_yama.js` → `window.YER_YAMA` · bu defter
- **Yazmayacağım:** `olaylar*.js`, `kronoloji_*.js` — sahipleri var (`CLAUDE.md §7`)

## 2026-08-22 — açılış ve zemin doğrulama

1. `git pull` — güncel, `oturumlar/YER-ATAMA.md` zaten yerdeydi.
2. Şartname baştan sona okundu.
3. Bekçi değiştirildi: eski `SONNET HAZIR KITA 60,HAZIR KITA 60,KITA 60`
   nöbetçisi durduruldu, yeni ad `YER ATAMA` ile Monitor üstünden kuruldu.
4. **§1 sayıları bağımsız ölçüldü** — `arac/girdi.py` ile 2603 yerleşim adı
   çekildi, ardından `data/olaylar*.js` + `data/kronoloji_*.js` diskte
   `eval` ile yüklenip `yer_id` alanı bu havuza karşı sınandı (regex değil,
   projenin kendi diliyle — `CLAUDE.md §11`).

   ```
   MOD B (diskteki 45 dosyanın TAMAMI, sirbistan DAHİL):
     toplam 4262 · yer_id YOK 1488 · eşleşmiyor 8 · (eşleşiyor+kapsam_genis) 2766
   ```
   **Koordinatörün 4262 / 1488 / 8 sayıları BİREBİR TUTTU.**
   `eşleşiyor` (2585) ile `kapsam_genis` (181) arasındaki 10 kayıtlık fark
   sıralama önceliğinden geliyor: 10 kayıtta **hem `yer_id` hem
   `kapsam_genis:true` birlikte** duruyor (örn. Frankfurt Paulskirche →
   `yer_id:"Frankfurt", kapsam_genis:true`). Ben `kapsam_genis`i önce
   sayınca 191 çıktı; koordinatör muhtemelen `yer_id`yi önce saymış (2585).
   Toplam ve iş kapsamımı (1488) etkilemiyor, bilgi amaçlı not.

5. 🔴 **BULGU — tahtaya bildirildi, cevap bekleniyor:**
   `data/kronoloji_sirbistan.js` (318 satır, KRONOLOJI_SIRBISTAN) diskte
   var ama **`index.html`e bağlı DEĞİL** — kullanıcı bugün onu hiç görmüyor.
   Koordinatörün 4262 sayısı bu dosyayı İÇERİYOR (bağlı 44 dosyaya göre
   toplam 4227, +35 sirbistan = 4262). Ve şartnamenin §5 sıra listesinde
   (① olaylar* · ② iran/kirim/macaristan/... · ③ ingiltere/isvec/...)
   **sirbistan hiç anılmıyor.**
   ⇒ Sordum: sirbistan'ı işleyeyim mi, yoksa bağlanmayı bekleyen ayrı bir
   parça mı (başka bir SIRBİSTAN KRONOLOJİ oturumunun elinde olabilir)?
   Cevap gelene kadar sirbistan'a DOKUNMUYORUM — hem yamada hem kapı
   betiğinde §5 sırasındaki dosyalarla sınırlı kalıyorum.

## ① olaylar*.js — kapsam ölçümü

18 dosya (olaylar.js, olaylar_7a4170.js, olaylar_ek.js, olaylar_ek2…16.js) —
toplam **1223 madde**, `yer_id` eksik **412** (şartnamenin "~336" tahmininden
farklı — kaba tahmindi, kendi ölçümüm taban).

`yer_id` eksik 412 madde ikiye ayrıldı:
- **140 "kolay"** — maddenin KENDİ `yer:` alanı (yazarı zaten TDV'den
  doğrulamış, `kaynak:` slug'ı da orada) yerleşim havuzuyla (2603 kayıt)
  BİREBİR ya da ilk virgül-öncesi parçasıyla eşleşiyor. Yeni araştırma
  YAPILMADI — var olan beyanı koordinat bağlantısına çevirdim.
- **272 "araştırma gerektiren"** — `yer:` alanı yok ya da havuzda karşılığı
  yok. TDV'den tek tek doğrulanacak, sıradaki iş.

## PARTİ 1 TESLİM — 140 kayıt

`data/yer_yama.js` yazıldı (**COMMIT EDİLMEDİ** — NOKTA EPİR emsali: veri
dosyası çalışma ağacında bırakılıyor, koordinatör uygulayınca commit'lenecek).

Kapı betiği iki yönde sınandı:
```
ATEŞLEME (5 kasıtlı bozuk kayıt) → 5/5 hata sınıfı yakalandı, çıkış 0
TEMİZ (gerçek 140 kayıt)         → 0 hata, çıkış 0
  · dosya·t·b·kaynak dolu ✓ · yer_id∨eksik_nokta∨kapsam_genis tek seçenek ✓
  · yer_id'lerin HEPSİ 2603 havuzunda VAR ✓ · mükerrer anahtar yok ✓
  · b alanı kaynak dosyadaki (dosya+t+b) kayıtla BİREBİR eşleşti ✓
```

## PARTİ 2 TESLİM — 53 kayıt (sıkı fuzzy)

272 "araştırma gerektiren" kaydın `yer:` alanı incelendi: **hepsinde `yer:`
metni VAR** (hiçbiri boş değil), sorun ilk-virgül-parçasının havuzla tam
eşleşmemesi (parantez alt-ad, "Kalesi/Boğazı/Ovası" gibi ekler, `/` ile
ayrılmış format). **SIKI kural** ile ikinci geçiş yapıldı: yalnız `yer:`
alanının **BİRİNCİL/baştaki** parçası (virgül ya da `/`'den önceki) —
parantez alt-adı ya da yaygın ek (Kalesi/Boğazı/Ovası/limanı/Sarayı…)
çıkarılarak — denendi. **İkincil/bağlamsal parçalar (İzmir, Mora, Kordofan
gibi büyük bölge/il adları) KASTEN denenmedi** — ilk turda (gevşek kural)
"Çeşme limanı, İzmir"→İzmir, "Navarin limanı, Mora"→Mora gibi **coarse/
yanlış-hassasiyet** eşleşmeler çıktığı görüldü ve o tur TAMAMEN iptal
edildi.

Sonuç: 53 ek kayıt güvenle çözüldü, 219 kayıt gerçek araştırma gerektiriyor.

`data/yer_yama.js` güncellendi: **140 + 53 = 193 kayıt**, hâlâ commit
edilmedi (çalışma ağacında). Kapı betiği tekrar çalıştırıldı: 193 kayıt,
0 hata.

## PARTİ 3 — 219 kayıt, GERÇEK TDV ARAŞTIRMASI (Emre'nin talimatıyla
devam ediliyor, `İlk partiyi bitirince DUR` beklemesi AŞILDI)

Emre doğrudan sordu: *"tüm kronoloji maddelerini teker teker olay mahali
koordinat damgalarını atayarak devam etmiyor musun."* ⇒ Şartnamenin
"ilk parti bitince dur" talimatı, kullanıcının doğrudan "devam et"
talimatıyla aşıldı (kullanıcı > peer koordinatör talimatı).

219 kaydın tamamı **5 paralel araştırma alt-görevine** (44/44/44/44/43)
bölündü; her biri TDV'yi gerçekten sorguluyor (WebFetch), slug tuzaklarına
karşı uyarıldı, "coarse yer" tuzağına karşı uyarıldı, yer_id/eksik_nokta/
kapsam_genis üçlü seçimini kullanıyor. Sonuçlar geldikçe `data/yer_yama.js`e
eklenip kapı betiğinden geçirilecek, parti parti tahtaya raporlanacak.

## PARTİ 3 — alt-parti 1/5 teslim (44 kayıt)

⚠️ Bu turda **platform genelinde geçici bir bağlantı kesintisi** yaşandı —
5 araştırma görevinin dördü ECONNRESET/bağlantı hatasıyla erken durdu.
Hiçbiri veri kaybetmedi; `SendMessage` ile "kaldığın yerden devam et"
denilerek yeniden başlatıldı (bu, kusur değil altyapı arızasıydı).

Alt-parti 1/5 (44 kayıt) tamamlandı ve doğrulandı:
```
node scratchpad/dogrula_sonuc.js arastir_sonuc_1.json
→ 44 kayıt — yer_id 28 · eksik_nokta 9 · kapsam_genis 7 · bulunamadı 0
→ HATA SAYISI: 0
```
`data/yer_yama.js` yeniden üretildi (kolay+fuzzy+araştırma tek kaynaktan
birleştiriliyor): **140+53+44 = 237 kayıt**, syntax temiz.

Not: kapsam_genis kararlarının bir kısmı (Kırım Savaşı, Balkan Savaşları,
93 Harbi, I. Dünya Savaşı'na giriş) **doğru gerekçeyle** verildi — bunlar
gerçekten çok cepheli/tek noktasız olaylar, `③ ile ① karıştırma` tuzağına
düşülmedi. `eksik_nokta` kararları da (Zitvatorok, Karlofça, Bucaş,
Granbosa, Bileća, Sakarya/Polatlı) TDV'nin kesin ama havuzda karşılığı
olmayan yerleri için doğru kullanılmış.

## PARTİ 3 — alt-parti 4/5 ve 5/5 teslim (44 + 43 = 87 kayıt)

İkisi de `scratchpad/dogrula_sonuc.js` ile sıfır hatayla doğrulandı:
```
arastir_sonuc_4.json: 44 kayıt — yer_id 30 · eksik_nokta 5 · kapsam_genis 9 · HATA 0
arastir_sonuc_5.json: 43 kayıt — yer_id 29 · eksik_nokta 6 · kapsam_genis 8 · HATA 0
```
Dikkat çeken bulgular (araştırmanın kalitesini gösteren örnekler):
- **Ziştovi vs Tırnova** (5/5): madde tarihi 27 Haziran, ama havuzda TAM
  eşleşen "Tırnova" o tarihte henüz düşmemişti (~10 gün sonra düştü).
  Kolay/tembel eşleşme "Tırnova"yı seçerdi — araştırma tarihi kontrol edip
  doğru yer için (Ziştovi, havuzda yok) `eksik_nokta` seçti.
- **Yenipazar vs "Arnavutluk"** (5/5): kaynak madde "Arnavutluk ve Yenipazar
  sancağı" diyordu; "Arnavutluk" bölge adı kaba kalırdı, Yenipazar havuzda
  TAM var ve somut cephe merkezi — doğru seçildi.
- **Fethâbâd/Nadir Şah** (5/5): TDV maddesi "canlı slug + boilerplate gövde"
  tuzağına düştü (gövde gelmedi); standart akademik kaynağa (Encyclopaedia
  Iranica) geçildi, kaynak alanına açıkça yazıldı.
- **"Taneciklik boşluğu" 8 kez doğru kullanıldı** (5/5, Fas/Cezayir kıyı
  kaleleri): TDV genel maddeyi kapsıyor ama bu kadar ince taneciği
  (Beşşâr, Aynı Sâlih, el-Hüseyme vb.) içermiyor — `CLAUDE.md §4`nin
  "coğrafî boşluk ≠ taneciklik boşluğu, ikisi de aynı muameleyi görür"
  kuralı doğru uygulandı, kaynak alanına açıkça yazıldı.

`data/yer_yama.js` yeniden üretildi: **140+53+131 = 324/412 kayıt tamam**.

## PARTİ 3 — alt-parti 3/5 teslim (44 kayıt)

```
arastir_sonuc_3.json: 44 kayıt — yer_id 25 · eksik_nokta 11 · kapsam_genis 8 · HATA 0
```
`data/yer_yama.js`: **140+53+175 = 368/412 kayıt**.

## 🟢 ① TAMAMLANDI — olaylar*.js, 412/412 kayıt

Son alt-parti (2/5, 44 kayıt) geldi, doğrulandı (0 hata), birleştirildi.
`data/yer_yama.js`: **412 kayıt — TAMAMI**.

Bütün dosya üzerinde son kapı sınaması (`kapi_yer_yama.js`, iki yönlü):
```
ATEŞLEME (5 kasıtlı bozuk kayıt) → 5/5 hata sınıfı yakalandı, çıkış 0
TEMİZ SINAMA (gerçek 412 kayıt)  → 0 hata, çıkış 0
```

### TESLİM RAPORU — ① olaylar*.js (şartname §7 sırasıyla)

```
① İŞLENEN: 412/412 (18 dosyanın tamamı) — yer_id 322 · eksik_nokta 55 · kapsam_genis 35
② "bulunamadı": 0 — hiçbir madde atlanmadı; her biri yer_id/eksik_nokta/
   kapsam_genis üçünden birine net biçimde yerleşti
③ eksik_nokta — 54 benzersiz aday (55 kayıttan, 2 kayıt aynı savaşın iki
   ayrı olayı olduğu için aynı koordinata düştü): tam liste aşağıda
④ §1'deki 1488 sayısı bağımsız ölçüldü ve TUTTU (4262/1488/8 — açılış
   raporunda bildirilmişti); bu partinin kendi alt-kümesi (olaylar*.js
   412) da baştan sona kendi ölçümümle üretildi, sapma yok
⑤ kapı betiği iki yönlü sınandı — yukarıda, 0 hata
⑥ NE BULAMADIM:
   - Birkaç TDV↔kayıt TARİH uyuşmazlığı görüldü (İsa Çelebi 1403 vs
     kayıttaki 1406, Karakoyunlu 1467-11 TDV vs 1468-04 kayıt, Mekteb-i
     Harbiye 1834 kayıt vs TDV 1835, vb.) — GÖREVİM YALNIZ YER olduğu
     için tarihlere DOKUNULMADI, `not:` alanına açıkça yazıldı.
   - Birkaç düşük-kesinlik koordinat (Kerden/Kazvin, Fethâbâd/Kuçan,
     Rovine) — kaynakta "kesin yeri tartışmalı" diye işaretli, `not:`ta
     açık.
⑦ BAĞLANMAYI BEKLİYOR: data/yer_yama.js → window.YER_YAMA (412 kayıt,
   ÇALIŞMA AĞACINDA, commit edilmedi — NOKTA EPİR emsali)
```

### eksik_nokta — 54 benzersiz aday (koordinatör nokta oturumuna paslayabilir)

```
Zitvatorok (Zsitva-Tuna kavşağı) 47.77,18.20 · Granbosa (Gramvousa) 35.61,23.58
Suda Kalesi (Girit) 35.49,24.19 · Bucaş (Podolya) 49.07,25.40
Karlofça 45.20,19.93 · Polatlı (Sakarya cephesi) 39.58,32.15
Ključ Kalesi (Bosna) 44.53,16.77 · Bileća (Hersek) 42.87,18.43
Rovine (Eflak/Oltenya) 44.33,23.80 · Linz 48.31,14.29
Salankamen 45.12,20.25 · Lugoş 45.68,21.95
Ulaş/Olash (Bega) 45.75,21.30 · Zenta (Senta) 45.93,20.09
Ebûkır (Aboukir) 31.32,30.07 · Reşid (Rosetta) 31.40,30.42
Safra (Hicaz) 24.20,39.05 · Bisel (Necid) 26.00,43.50
Missolonghi 38.37,21.42 · Belen (Hatay) 36.20,36.19
es-Süveydâ (Cebel-i Dürûz) 32.70,36.57 · Birecik 37.02,37.98
Nizip 37.01,37.79 · Yanbolu 42.48,26.50
İnceğiz (Çatalca) 41.22,28.42 · Sancak mevkii (Bingöl-Kiğı) 39.10,40.40
Savra (Viyosa) 40.65,19.75 · Leş (Lezhë) 41.78,19.65
Vaslui/Racova 46.64,27.73 · Terrûce (Aşağı Mısır) 30.70,30.50
Güns (Köszeg) 47.39,16.54 · Sisak 45.49,16.38
Alaçayır (Göksun) 38.02,36.50 · Serav/Serâb 37.94,47.53
Sen Gotar 46.96,16.28 · Vasvár 46.93,16.80
Prut kıyısı (Stănilești) 46.75,28.05 · Hisarcık/Grocka 44.67,20.73
Kerden (Kazvin yakını) 36.28,50.00 · Kartal/Kagul (Cahul) 45.80,28.18
Kozluca/Kozludzha 43.28,27.60 · Ziştovi/Svishtov 43.62,25.35
Oltenitsa 44.09,26.64 · Sîdî Ferruc 36.77,2.85
Baden-Baden 48.76,8.24 · Sancak (Bingöl yakını) 38.89,40.50
Mugan Sahrası 39.50,48.70 · Tellülkebîr 30.56,31.99
Kalûgerân/Călugăreni 44.20,25.99 · Şıpka Geçidi 42.75,25.33
Tomar 39.60,-8.42 · Fethâbâd (Kuçan yakını) 37.10,58.50
Büyükçekmece 41.02,28.59
```
⚠️ "Ziştovi/Svishtov" iki alt-partiden ayrı ayrı geldi (43.617,25.35 ve
43.62,25.35) — aynı yer, ~1000m fark, önemsiz; nokta oturumu tek kayıt
açacaksa ikisi de kullanılabilir.

## PARTİ ① KOORDİNATÖR UYGULADI (M-1099) — 321/322 indi, 1 uyuşmazlık

Koordinatör 412 kaydı işledi: yer_id 322 hedeften 321'i uydu, `olaylar_ek7.js`de
1 tanesi eşleşmedi. **Kendi tarafımda araştırdım** (güncel 2605'lik havuza
karşı `olaylar_ek7.js`'in TAMAMINI taradım) — **mismatch BULAMADIM**, 128
maddenin hiçbirinde havuzda olmayan bir `yer_id` yok. Muhtemelen koordinatör
tarafında geçici bir durum (belki iki kayıt çakışması, belki başka bir
oturumun eşzamanlı düzenlemesi) — kendiliğinden çözülmüş görünüyor.
Koordinatöre bu ölçümü bildirdim.

## PARTİ ② BAŞLADI — sıra (Emre'nin kendi sırası): Rusya · Habsburg
(Avusturya) · Lehistan · İran · Venedik · Macaristan · Kırım
**İran'dan başlanıyor** (koordinatörün talimatı: en kötüsü, 107/107 boş).

### İran — kapsam ölçümü
`kronoloji_iran.js`: 107 madde, **107'sinde de `yer_id` YOK** (doğrulandı).
🔴 Bu dosyada `yer:` alanı HİÇ YOK (şema farklı — yalnız `t,b,tur,onem,dunya,
kapsam,etiket,d,kaynak`), yani `olaylar*.js`teki "kolay/fuzzy" kısayolu
uygulanamıyor. Bunun yerine **başlık (b) taraması** yapıldı: 2605 havuz adı,
madde başlığında (iyelik eki ayıklanarak) aranıyor mu diye kontrol edildi.
```
b başlığında havuz adı bulundu   23
  └─ 2'si KİŞİ ADI yanlış-pozitif ("Şah İsmail" → "İsmail" yer adıyla
     çakıştı, Tuna'daki İsmail/Izmail kalesiyle karışıyordu) — ELENDİ,
     araştırmaya geri döndü
  └─ 21 GÜVENLİ kolay eşleşme kaldı
b başlığında bulunamayan (araştırma gerekiyor)   86
```
21 kolay kayıt `dogrula_sonuc.js` ile 0 hatayla doğrulandı, `data/yer_yama.js`e
eklendi: **433 kayıt** (412 + 21), tam dosya kapı sınaması yine 0 hata.

⚠️ **DOSYA HAVUZU GENİŞLETİLDİ** — `dogrula_sonuc.js` ve `kapi_yer_yama.js`
artık `kronoloji_iran/kirim/macaristan/lehistan/venedik/habsburg/memluk/
misir/rusya.js` dosyalarını da (varsa) kaynak listesine alıyor.

Kalan 86 kayıt için 2 paralel araştırma görevi başlatıldı (43+43, TDV +
Encyclopaedia Iranica, WebFetch) — kişi-adı tuzağına özellikle karşı uyarıldı.

## 🟢 İRAN TAMAMLANDI — 107/107

İki araştırma alt-görevi (43+43) tamamlandı, doğrulandı (1 küçük "b"
yazım farkı — "Nâdir Şah" vs kaynaktaki "Nadir Şah" — düzeltildi, ondan
sonra 0 hata), birleştirildi.

```
İran toplam: 107/107
  yer_id        76
  eksik_nokta   14 (benzersiz — bazı kayıtlar aynı yere düştü)
  kapsam_genis  17
```
Kalite örnekleri (araştırmanın derinliğini gösteren):
- **Karakoyunlu kuruluş yeri düzeltmesi:** kaydın kendi metni "merkezi
  Tebriz" diyordu, TDV 'karakoyunlular' maddesi kuruluşu Van-Erciş
  bölgesine bağlıyor (Tebriz ancak ~30 yıl sonra başkent oldu) — kayıt
  metniyle ÇELİŞEN ama TDV'ye dayanan doğru yer seçildi, tarihe dokunulmadı.
- **Kişi adı tuzağı iki kez doğru ayıklandı:** "Şah İsmail" (kişi) ile
  havuzdaki "İsmail" (Tuna'da bir kale) çakışması — ikisi de gerçek ölüm/
  taç giyme yerine (Tebriz, Kazvin) doğru atandı.
- **data/olaylar*.js ile çapraz kontrol:** birkaç kayıt (Otlukbeli, Merv,
  Kasr-ı Şirin, Fethâbâd, Tahran/Kaçar kuruluşu) ana kronolojide ZATEN
  doğrulanmış olarak bulundu, mükerrer araştırma yapılmadan aynı atama
  kullanıldı — tutarlılık sağlandı.
- Bazı TDV↔kayıt tarih farkları (bir-iki gün, bazen ~1 yıl — örn. Kerden/
  Kazvin, Türkmençay 10 Şubat vs TDV 22 Şubat) görüldü, **hepsi not alanına
  yazıldı, hiçbiri tarihe dokunmadan bırakıldı** (görev yalnız yer).
- İkinci araştırma görevi TDV/Iranica'ya doğrudan erişemedi (403 bot
  koruması) — WebSearch üzerinden çoklu bağımsız kaynakla (Britannica,
  DOAJ, akademik özetler) çapraz doğrulama yaptı, şeffaf biçimde belirtti.

`data/yer_yama.js`: **519 kayıt toplam** (412 olaylar* + 107 İran). Tam
dosya kapı sınaması: 0 hata.

## Rusya — kapsam ölçümü

`kronoloji_rusya.js`: 173 madde, **44'ünde `yer_id` YOK** (129'u zaten
RUSYA KRONOLOJİ oturumu tarafından doldurulmuş — dosyaya hiç dokunmadım,
yalnız yamayı hazırlıyorum).

Başlık taraması yapıldı ama **iki eşleşme de yanlış-pozitif çıktı**:
```
"Prut'ta Osmanlı'ya yenildi, Azak geri verildi" → "Azak" bulundu
  ama muharebe PRUT'ta oldu, Azak yalnız barış şartıyla geri verilen
  bir kale — İKİNCİL yer tuzağı, reddedildi.
"93 Harbi — Ayastefanos ve Berlin antlaşmalarına..." → "Berlin" bulundu
  ama bu savaşın GENEL başlığı, Berlin yalnız antlaşma adında geçiyor —
  reddedildi.
```
⇒ Bu dosyada başlık taraması GÜVENİLMEZ (İran'dakinden farklı olarak
çoğu başlık ikincil/sonuç yerleri de içeriyor). **44 kaydın tamamı**
gerçek araştırmaya gönderildi — 1 araştırma görevi (44 kayıt) başlatıldı,
İKİNCİL YER TUZAĞINA karşı özellikle uyarıldı.

## Durum
**Devam ediyor** — Rusya araştırma görevi arka planda (44 kayıt).
`kronoloji_sirbistan.js` sorusu hâlâ cevapsız — dokunmuyorum.
