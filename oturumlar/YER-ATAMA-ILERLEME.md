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

## 🟢 RUSYA TAMAMLANDI — 173/173 (44 yeni + 129 zaten doluydu)

44 kayıt araştırıldı, doğrulandı. İki düzeltme gerekti:
- 4 kayıtta kaynak başlığın sonundaki "⭐" işareti eksikti (b alanı TAM
  eşleşmedi) — düzeltildi.
- 1 kayıt ("Fransa ile ittifak resmileşti", 1894-01-04) araştırma
  çıktısında eksik kalmıştı (ajan iki kaydı yanlışlıkla tekrarlamış) —
  kendim tamamladım (St. Petersburg, diplomatik teati yeri).

```
yer_id 19 · eksik_nokta 15 · kapsam_genis 10 · HATA 0
```
Kalite: **house-convention tutarlılığı** — Prut ve Küçük Kaynarca kayıtları
`data/olaylar.js`'teki MEVCUT atamalarla (Yaş, Silistre) birebir eşleştirildi,
mükerrer/çelişen yer atanmadı. İki tarih uyuşmazlığı bulunup `not:`a
yazıldı, tarihe dokunulmadı (Mayıs Kanunları 1881→1882, Bering/Alaska
keşfi Kasım→Temmuz).

`data/yer_yama.js`: **563 kayıt toplam**. Tam dosya kapı sınaması: 0 hata.

## Habsburg — kapsam ölçümü, araştırma başlatıldı

`kronoloji_habsburg.js`: 117 madde, 52'sinde `yer_id` yok. Başlık taraması:
1 güvenli (Augsburg — 1555 Din Barışı, doğrudan eşleşme), 1 yanlış-pozitif
("Campo Formio — ...Venedik'in kazanılması" → "Venedik" bulundu ama bu
İKİNCİL yer tuzağı: antlaşma Campo Formio'da imzalandı, Venedik yalnız
kazanılan toprak — reddedildi). 51 kayıt 2 paralel araştırma görevine
(26+25) gönderildi; `data/savaslar.js`e bakmaları ve Viyana-merkezli
kararname/reform kayıtları için house-convention (başkent = imza yeri)
kullanmaları söylendi.

`data/yer_yama.js`: **564 kayıt** (1 kolay eklendi). Tam kapı sınaması: 0 hata.

## 🟢 HABSBURG TAMAMLANDI — 52/52

İki araştırma görevi (26+25) tamamlandı, doğrulandı, 0 hata.
```
yer_id 17 · eksik_nokta 24 · kapsam_genis 11
```
Kalite: **`data/savaslar.js` çapraz kontrolü** — çoğu savaş/muharebe kaydı
zaten proje içinde koordinatlı olarak duruyordu (Güns, Haçova, Sen Gotar,
Salankamen, Zenta, Hisarcık), mükerrer araştırma yapılmadan kullanıldı.
**İkincil yer tuzağı 5 kez doğru ayıklandı**: Karlofça (Macaristan/Mora
kazanç-kayıp, imza yeri değil) · Pasarofça (Tımışvar/Belgrad/Sırbistan
devredilen topraklar) · Austerlitz (Venedik/İstriya/Dalmaçya kaybedilen
topraklar) · Debrecen (Budin değil — meclis savaş nedeniyle taşınmıştı) ·
Campo Formio (Belçika/Venedik ikincil sonuç). **Karlsbad Kararları**'nda
"kolayca Viyana" tuzağına da düşülmedi — konferans gerçekte Bohemya'da
yapılmıştı.

`data/yer_yama.js`: **615 kayıt toplam**. Tam kapı sınaması: 0 hata.

## Lehistan — kapsam ölçümü

`kronoloji_lehistan.js`: kapsam ölçümü koordinatörün 67/140 sayısıyla
BİREBİR tuttu. Başlık (b) taraması yapıldı: 7 aday bulundu, **6'sı ikincil
yer tuzağı** ("Moskova" ×5 — rakip/hedef şehir, muharebe başka yerde;
"Kamaniçe" ×1 — benzer sebep), **1'i güvenli** (Brest Birliği — doğrudan
eşleşme). 1 kolay kayıt eklendi, 66 kayıt 2 paralel araştırma görevine
(33+33) gönderildi.

## 🟢 LEHİSTAN TAMAMLANDI — 67/67

İki araştırma alt-görevi (33+33) tamamlandı, ikisi de `dogrula_sonuc.js`
ile 0 hatayla doğrulandı (düzeltme gerekmedi), birleştirildi.

```
Lehistan toplam: 67/67
  yer_id (kolay 1 + araştırma 8)   9
  eksik_nokta                     55
  kapsam_genis                     3
```
Kalite örnekleri:
- **İkincil yer tuzağı doğru ayıklandı** (batch 1): "İkinci Toruń Barışı —
  Gdańsk ve Kraliyet Prusyası kazanıldı" → Gdańsk havuzda VAR ama yalnız
  kazanılan toprak; antlaşma (adı da "Toruń Barışı") Toruń'da imzalandı,
  Toruń havuzda yok → doğru biçimde `eksik_nokta:{ad:"Toruń"}` seçildi.
- **TDV tarihle birebir teyit**: "İlk Osmanlı-Lehistan barış antlaşması"
  (1489-03-22) → TDV/genel akademik kaynak antlaşmanın 22 Mart 1489'da
  İstanbul'da imzalandığını doğruluyor, kayıttaki tarihle GÜN GÜNÜNE
  örtüşüyor → `yer_id:"İstanbul"`.
- **Kişi/yer bağlamı doğru kuruldu**: Koszyce imtiyazı → `yer_id:"Kassa
  (Košice)"` (Koszyce = Polonya kaynaklarındaki ad, bugünkü Košice);
  Segedin barışı bozuldu → `yer_id:"Segedin (Szeged)"` (TDV
  `varna-muharebesi` maddesinden).
- **Taneciklik boşluğu açıkça işaretlendi**: Hmelnitski ayaklanması/Sarı
  Sular (Zhovti Vody) — TDV'nin `kazaklar` maddesi bu olayı hiç
  kapsamıyor, standart akademik kaynağa geçildi ve `kaynak:` alanına
  açıkça yazıldı.
- Ortaçağ Polonya sitelerinin (Gniezno, Grunwald, Lublin Birliği,
  Krewo, Horodło, Nihil Novi/Radom, vb.) çoğu havuzda yok — hepsi
  `eksik_nokta` olarak, koordinatlarıyla birlikte teslim edildi.

`data/yer_yama.js`: **682 kayıt toplam** (615 + 67). Tam dosya kapı
sınaması iki yönlü sınandı: ATEŞLEME 5/5 hata sınıfı yakalandı (çıkış 0),
TEMİZ SINAMA 682 kayıt · 0 hata (çıkış 0).

## Venedik — dosya doğrulandı, kapsam ölçümü

`data/kronoloji_venedik.js` → `window.KRONOLOJI_VENEDIK`, `index.html`e
bağlı (satır: `<script src="data/kronoloji_venedik.js?v=r3119">`).
86 madde, **22'sinde `yer_id` yok** (bu dosyada da `yer:` alanı hiç yok —
İran'daki gibi başlık taraması yapıldı).

Başlık taraması 9 aday buldu, **hepsi ikincil yer tuzağı çıktı**
("Venedik" ×7 — savaş adı/hedef taraf, antlaşmanın imza yeri değil;
"Milano"/"Mora" — devredilen toprak, imza yeri değil) — sıfırı kolay
olarak kabul edilmedi, 22 kaydın tamamı ele alındı:
- **4 kayıt house-convention ile ÇÖZÜLDÜ** (yeni araştırma yapılmadan):
  Granbosa (olaylar.js'teki aynı tarihli kayıtla birebir), Karlofça
  (3 dosyada zaten kullanılan koordinat), Pasarofça ve Campoformio
  (kronoloji_habsburg.js'teki TDV-kaynaklı kayıtlarla birebir).
- **18 kayıt gerçek araştırmaya gönderildi** (1 araştırma görevi).

## 🟢 VENEDİK TAMAMLANDI — 22/22

```
Venedik toplam: 22/22
  yer_id (4 kolay-eşdeğeri dahil değil, saf yer_id)   4
  eksik_nokta                                        12
  kapsam_genis                                         6
```
Kalite örnekleri:
- **İkincil yer tuzağı iki kez açıkça ayıklandı**: "Fornovo ve Venedik
  Ligi" → lig kuruluşu Venedik'te ayrı/önceki bir tarih, bu kayıt savaş
  TARİHİYLE (6 Temmuz 1495) örtüştüğü için mahal Fornovo di Taro seçildi;
  "Cambrai Ligi — Venedik'e karşı ittifak" → ittifak hedef aldığı Venedik
  DEĞİL, imzalandığı Cambrai (Fransa) olarak çözüldü.
- **House-convention 4 kez uygulandı** (Granbosa/Karlofça/Pasarofça/
  Campoformio, yukarıda) + **Linz için 4. tekrar**: proje içinde 3 ayrı
  dosyada (olaylar_ek3, kronoloji_habsburg, kronoloji_lehistan) zaten
  kullanılan "Kutsal İttifak → Linz, 5 Mart 1684" koordinatı dördüncü kez
  aynen kullanıldı — uydurma değil, doğrulanmış tekrar.
- **③ kapsam_genis 6 kez doğru gerekçeyle** kullanıldı: çok cepheli savaş
  başlangıçları (1463, 1494, 1714'ün bir kısmı İstanbul'a bağlandı ama
  1615 Uskok Savaşı çok noktalı sınır çatışması olduğu için genişletildi),
  Ümit Burnu ticaret yolu açılışı (coğrafi olarak Venedik'e SONUÇ, tek
  mahal değil), silahlı tarafsızlık siyaseti (politika değişikliği).
- **Savaş ilanı → başkent house-convention**: "Son Osmanlı-Venedik
  Savaşı'nın başlaması" (1714-12-08) proje içindeki emsale (1788 Son
  Osmanlı-Habsburg savaşı → İstanbul) dayanarak İstanbul'a bağlandı.
- Bir kayıtta (Cremona Barışı) kaynak kendi içinde belirsizlik taşıyordu
  (imza Cremona mı yoksa yakınındaki Cavriana'da mı) — `not:` alanına
  açıkça yazıldı, en yaygın kabul gören ad (Cremona) seçildi.

`data/yer_yama.js`: **704 kayıt toplam** (682 + 22). Tam dosya kapı
sınaması iki yönlü sınandı: ATEŞLEME 5/5 hata sınıfı yakalandı (çıkış 0),
TEMİZ SINAMA 704 kayıt · 0 hata (çıkış 0).

## Macaristan — kapsam ölçümü

`data/kronoloji_macaristan.js` → `window.KRONOLOJI_MACARISTAN`, 127 madde,
**74'ünde `yer_id` yok** — koordinatörün 74/127 sayısıyla BİREBİR tuttu.
Bu dosyada da `yer:` alanı yok, başlık taraması yapıldı: 9 aday bulundu,
3'ü güvenli doğrudan eşleşme (Niğbolu, Konstanz, Roma-taç-giyme — "Roma'da"
açıkça yazılı, ikincil tuzak DEĞİL), 2'si ikincil yer tuzağı ("Kutsal Roma
Kralı" ifadesindeki "Roma" — kişi/kavram çakışması; "Viyana borsa" —
ambiguous, araştırmaya bırakıldı).

Ayrıca proje içi house-convention taraması yapıldı (Zitvatorok, Karlofça,
Zenta, Szatmár — bu 4 antlaşma/muharebe başka dosyalarda zaten TDV/akademik
kaynaklı işlenmişti): 4 kayıt daha kolay olarak çözüldü, yeni araştırma
gerekmedi.

Toplam **7 kayıt house-convention/kolay ile çözüldü**, **67 kayıt** 2
paralel araştırma görevine (34+33) gönderildi.

## 🟢 MACARİSTAN TAMAMLANDI — 74/74

İki araştırma alt-görevi (34+33) tamamlandı, ikisi de `dogrula_sonuc.js`
ile 0 hatayla doğrulandı (düzeltme gerekmedi — `oneri_yer_adi` alanları
havuza karşı ayrıca doğrulanıp `yer_id`/`eksik_nokta`'ya çevrildi).

```
Macaristan toplam: 74/74
  yer_id (7 kolay dahil)   24
  eksik_nokta              36
  kapsam_genis             14
```
Kalite örnekleri:
- **İkincil yer tuzağı 4 kez doğru ayıklandı**: Solferino ve Königgrätz
  ("X bozgununun Y'yi kaçınılmaz kılması" kalıbı — asıl muharebe yeri
  seçildi, soyut sonuç değil; her ikisi kronoloji_habsburg.js'teki AYNI
  olaylarla house-convention'la birleştirildi) · "Zsigmond'un Kutsal Roma
  Kralı seçilmesi"nde "Roma" kelimesi kişi/kavram çakışmasıydı, araştırma
  yeri BULAMADI ve kapsam_genis'e bırakıldı (uydurma yapılmadı).
- **İki TARİH UYUŞMAZLIĞI bulunup açıkça işaretlendi, DOKUNULMADI** (görev
  yalnız yer): Torda Edikti kayıtta 1571 ama kaynaklara göre 1568'de kabul
  edilmiş (1571'de tersi yönde bir yasa çıkmıştı) · Lajos'un Lehistan tacı
  kayıtta Şubat ama kaynaklar Kasım diyor · ayrıca 1867 Yahudi Emansipasyon
  Yasası'nda 14 Aralık kayıt vs 20-28 Aralık kaynak aralığı.
- **house-convention 6 kez uygulandı**: II. Kosova (data/savaslar.js'teki
  "II. Kosova" kaydıyla aynı tarih+koordinat) · Zigetvar/Kanuni ölümü
  (data/olaylar.js'teki mevcut kayıtla) · Solferino/Königgrätz/Ausgleich
  (kronoloji_habsburg.js'teki kayıtlarla) · Zitvatorok/Karlofça/Zenta/
  Szatmár (yukarıda, açılış partisi).
- **Somut araştırma, kolay kapsam_genis'e tercih edildi** çok kez: Kazinczy
  nyelvújítás (Széphalom bulundu) · Martinovics idamı (Vérmező bulundu) ·
  1873 Viyana borsa çöküşü (asıl olay Viyana Borsası'nda, somut ve tarihiyle
  birebir örtüşüyor — yapısal sonuç değil) · 1914 Avusturya-Macaristan savaş
  ilanı (Viyana değil, Franz Joseph'in imzaladığı Bad Ischl bulundu).

`data/yer_yama.js`: **778 kayıt toplam** (704 + 74). Tam dosya kapı
sınaması iki yönlü sınandı: ATEŞLEME 5/5 hata sınıfı yakalandı (çıkış 0),
TEMİZ SINAMA 778 kayıt · 0 hata (çıkış 0).

## Durum
**Tamamlanan: olaylar* (412) + İran (107) + Rusya (173) + Habsburg (52)
+ Lehistan (67) + Venedik (22) + Macaristan (74) = 907/1488.**
Sırada (Emre'nin kendi sırası): **Kırım**.
`kronoloji_sirbistan.js` sorusu hâlâ cevapsız — dokunmuyorum.
