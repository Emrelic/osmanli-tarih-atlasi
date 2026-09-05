# ÖNERİ — `kur:` alanının `_sahiplik_uygula.py`ye eklenmesi (M-2896)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

🔴 **KOD DEĞİŞTİRİLMEDİ** — `arac/` koşu 5b sırasında donuk kabul edildi.
Bu belge yalnız TARİF + SINAV PLANI/SONUCUDUR. Aşağıdaki değişiklikler
merge sırasında `arac/_sahiplik_uygula.py`ye ELLE uygulanır.

## ① MEVCUT SÖZLEŞME (satır numarasıyla)

```
satır 254   CATISABILIR    = ("d", "s", "v", "isg", "m", "kaynak", "bos", "neden", "not")
satır 389   SKALER_ALANLAR = ("m", "kaynak", "bos", "neden", "not")
satır 392   SKALER_KORUNAN = ("kaynak", "bos", "neden", "not")
satır 397-399  assert set(CATISABILIR) == {"d","s","v","isg"} | set(SKALER_ALANLAR)
satır 400   SKALER_RX      = {a: re.compile(...) for a in SKALER_ALANLAR}   ← OTOMATİK türetilir
satır 403   SKALER_NULL_RX = {a: re.compile(...) for a in SKALER_ALANLAR}   ← OTOMATİK türetilir
satır 584-627  ana uygulama döngüsü — SKALER_ALANLAR'ı DÖNGÜYLE gezer, alan adına göre ÖZEL kod YOK
```

`m`: ÜZERİNE YAZILIR (SKALER_ALANLAR'da ama SKALER_KORUNAN'da DEĞİL).
`kaynak`/`bos`/`neden`/`not`: ÜZERİNE YAZILMAZ (ikisinde de VAR) — yalnız
BOŞSA doldurulur, DOLUYSA atlanır ve `atlanan` listesine sayılır.

## ② TARİF — `kur:` İÇİN GEREKEN DEĞİŞİKLİK

`kur:` bir yerleşimin KURULUŞ tarihini taşır — `m:`in aksine (bir kaydın
tek bağlı merkezi olur, yamanın amacı onu düzeltmektir) `kur:` bir
ARAŞTIRMA BULGUSUdur (Ndjamena'nın 1900'de kurulduğu gibi) ve mevcut bir
`kur:` değerini sessizce ezmek, `kaynak:`ı ezmekle AYNI RİSKİ taşır —
doğrulanmış bir tarihi silip yerine BAŞKA bir tarih koymak. ⇒ `kur:`
**`kaynak:` ile AYNI sözleşmeyi** izlemeli: SKALER + KORUNAN.

```diff
- CATISABILIR = ("d", "s", "v", "isg", "m", "kaynak", "bos", "neden", "not")
+ CATISABILIR = ("d", "s", "v", "isg", "m", "kaynak", "bos", "neden", "not", "kur")

- SKALER_ALANLAR = ("m", "kaynak", "bos", "neden", "not")
+ SKALER_ALANLAR = ("m", "kaynak", "bos", "neden", "not", "kur")

- SKALER_KORUNAN = ("kaynak", "bos", "neden", "not")
+ SKALER_KORUNAN = ("kaynak", "bos", "neden", "not", "kur")
```

Bu ÜÇÜ yeterli — `SKALER_RX`/`SKALER_NULL_RX` (satır 400/403) ve ana
döngü (584-627) `SKALER_ALANLAR`'dan OTOMATİK türetiliyor, `kur`a özel
kod GEREKMİYOR. `assert` (397-399) bu üç listenin ayrışmadığını zaten
kendiliğinden doğrular.

## ③ 🔴🔴 EK BULGU — DÖRDÜNCÜ BİR YER DE DEĞİŞMELİ (sınav sırasında bulundu)

Yukarıdaki üçü **Python tarafı**. Betiğin en başında (satır 62-97) bir
**Node.js süzgeci** VAR ve o, yamaları `data/yer_yama*.js`den okurken
`ad` + belirli alanlar taşımayan kayıtları SESSİZCE eler:

```js
// satır 88-91
if (r && r.ad !== undefined &&
    (r.d || r.s || r.v || r.isg || r.m !== undefined ||
     r.kaynak !== undefined || r.bos !== undefined ||
     r.neden !== undefined || r.not !== undefined)) {
  cik.push({ __dosya: kaynak[k] || '?', __alan: k, r: r });
}
```

Bu satır **iki kez** genişletilmiş (1 Eylül: `m`/`kaynak` · 2 Eylül:
`bos`/`neden`/`not`) ve **her ikisinde de aynı sebep**: yeni bir skaler
alan buraya eklenmezse, o alanı TEK BAŞINA taşıyan bir kayıt (`d`/`s`/`v`/
`isg`/`m`/`kaynak`/`bos`/`neden`/`not` HİÇBİRİ yoksa) Node tarafında
SESSİZCE elenir ve **Python'a hiç ulaşmaz** — `§11`'in *"ölçemediğini
eleyen bir süzgeç onu TEMİZ sayar"* dersinin (dosyanın kendi tarihçesinde
zaten İKİ KEZ yaşanmış) **üçüncü tekrarı**.

**BU GECE yazılan üç örnek (Ndjamena · Şibâm · Şihr) bu süzgeçten
GEÇERDİ** çünkü üçü de AYRICA `s:` (ve Şibâm/Şihr `bos:`/`neden:`) taşıyor
— yani bugünkü üç vaka için bu eksiklik ZARARSIZ. Ama **gelecekte yalnızca
`kur:` ekleyen bir yama** (örn. zaten doğru sahiplenmiş bir kayda sadece
kuruluş tarihi eklemek) YAZILDIĞINI SANIP hiçbir şey yapmaz — sessizce.

```diff
  if (r && r.ad !== undefined &&
      (r.d || r.s || r.v || r.isg || r.m !== undefined ||
       r.kaynak !== undefined || r.bos !== undefined ||
-      r.neden !== undefined || r.not !== undefined)) {
+      r.neden !== undefined || r.not !== undefined || r.kur !== undefined)) {
```

⇒ **Değişiklik dört yerde, üç değil.**

## ④ SINAV — `C13`'ün üç ayağı + bu betiğin kendi süzgeç geçmişi

Sandbox: `_sahiplik_uygula.py`nin SKALER mekanizması (AD_RX, SKALER_RX,
js_metin, korunan-alan kontrolü) BİREBİR KOPYALANDI, "kur" eklenmiş
hâliyle koşturuldu. `arac/`nin kendisine dokunulmadı.

```
① GEÇME    normal bir kaynak: yaması (kur: hiç yok) → davranış AYNI,
           kur: alanına dokunulmadı                              ✓ GEÇTİ

② ATEŞLEME kur:"1500-01-01" DOLU bir kayda kur:"1900-01-01" yazılmaya
           çalışıldı → REDDEDİLDİ, "ATLANDI: kur ZATEN DOLU, ezilmedi"  ✓ GEÇTİ

③ GİRDİ    GERÇEK Ndjamena satırı (data/yerlesimler.js:863) bir dosyaya
           yazılıp GERİ OKUNARAK (enjekte Python nesnesi DEĞİL) işlendi
           → kur:"1900-01-01" eklendi, d:[] BOZULMADI                ✓ GEÇTİ

④ EK BULGU Node süzgeci (satır 88-91) "kur"u tanımıyor — yukarıda ③'te
           açıklandı, DÖRDÜNCÜ bir değişiklik gerekiyor              🔴 BULUNDU
```

Tam çıktı: `denetim/_SINAV-KUR-ALANI-CIKTI-0905.txt`

## ⑤ SONUÇ

`kur:` alanı `kaynak:`la AYNI korumayla (SKALER + KORUNAN) eklenirse:
- Var olan bir `kur:` değeri SİLİNMEZ/EZİLMEZ.
- Boş bir kayda YENİ `kur:` eklenir, diğer alanlar (`d`/`s`/`v`/`isg`)
  bozulmaz.
- **ŞART:** Node süzgecine (satır 88-91) `r.kur !== undefined` de
  eklenmezse, yalnız-`kur:` taşıyan gelecekteki bir yama sessizce düşer.

Bu geceki üç `kur:` vakası (Ndjamena · Şibâm · Şihr) hepsi `s:`/`bos:`
de taşıdığı için ④'ün eksikliğinden ETKİLENMEZ — merge güvenle yapılabilir
ama ④ de aynı pakette düzeltilmeli, yoksa borç kayıtsız kalır ve bir
sonraki oturum aynı süzgeç sınıfını üçüncü kez keşfeder.

`⏳ BEKLİYORUM: onaylanırsa merge sırasında dört değişiklik birlikte mi uygulanacak, yoksa ④ ayrı bir kaleme mi yazılsın?`
