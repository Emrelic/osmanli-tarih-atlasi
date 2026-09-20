# EKO-YENICERI-0073 — BULGU · paket 0074 / H-0002 (21 Eylül 2026)

Oturum: EKO-YENICERI-0073 (Opus 5) · koordinatör 1.MURAT
Şartname: `oturumlar/DALGA-0074.md` (ortak kurallar `oturumlar/DALGA-0073.md`)
Madde: **H-0002** — "1826 — Bektaşî tarikatı kapatıldı" maddesine iki ek okuma:
① Bektaşîlik nedir ② Bektaşîliğin Yeniçeri Ocağı ile ilgisi ne idi. Görsel yok.
Önceki teslim: `denetim/EKO-YENICERI-0920.md` (H-0012 · H-0013 · H-0014).

⚠️ DÜRÜSTLÜK KAYDI: DALGA'nın "öngörünü ölçümden ÖNCE yaz" kuralı için bu
kalemde AYRI bir öngörü dosyası yazılmadı; ölçüt 20 Eylül'de yazılan
`denetim/EKO-YENICERI-ONGORU-0920.md`in 1. ve 2. maddeleridir (bulunamayan bağ
= 0, tanımsız tür = 0) ve aynen uygulandı. Yeni bir öngörü sonradan yazılıp
"önceden yazılmış" gibi sunulmadı.

---

## 1. Ne eklendi

`data/ekokuma_yeniceri.js` (mevcut dosya, ad alanı `window.EKOKUMA_YENICERI`) —
**2 yeni kart**, dosya toplamı 4 → **6**:

| id | tür | konu |
|---|---|---|
| `bektasi-bektasilik-nedir` | `sebep-sonuc` | Babaî İsyanı'ndan (1240) Rum abdallarına, Balım Sultan'a (1501) ve devletin tanıdığı tek gayri Sünnî tarikat oluşuna; doktrin (Hurûfî + Şiî tesirler), âyin-erkân (dört kapı kırk makam, âyîn-i Cem, ikrar âyini), teşkilât (dedebaba/baba/can/muhib/âşık, on iki post), vakıf ekonomisi, coğrafî yayılış, 1826 ve 1925 |
| `bektasi-yeniceri-baglantisi` | `sebep-sonuc` | kuruluş efsanesinin (ak börk) çürütülmesi ↔ kurumsal bağın tarihlenmesi; 94. Cemaat Ortası ve Hacı Bektaş vekili; Şah Kalender isyanı (1526-27); 1826'da uygulanan cezanın ölçüsü ve fermandaki tenzih; sonrası (Nakşibendî, mason locaları, Millî Mücadele, 1925) |

---

## 2. Ne ölçüldü

### 2.1 Bağ — **47/47 tuttu** (dosyanın tamamı, 6 kart)
```
kart: 6 · bağ: 47 · BULUNAMAYAN BAĞ: 0 · TANIMSIZ TÜR: 0
```
Yeni kartların 11 bağının 11'i tuttu. `node --check` temiz.

### 2.2 🔴 EKO-ILGI-0073'ün gün değişikliği — ESKİ BAĞLARIM KONTROL EDİLDİ
Koordinatörün uyarısı doğrulandı: `data/olaylar.js` Vak'a-i Hayriyye maddesi
`t:"1826-06"` → `t:"1826-06-15"` oldu ve **eski dört kartımın altı bağı aynı
işlemde güncellenmiş** (`1826-06|Hayriyye` → `1826-06-15|Hayriyye`,
`1826-07-31|Yeniçeri` → `1826-06-15|Rusya`). Yeniden ölçüldü: **36/36 hâlâ
tutuyor, 0 kayıp**. Yani devir temiz yapılmış.

### 2.3 🔴 DOĞRULAYICININ KENDİ SINAVI BAYATLADI — VE DÜZELTİLDİ
`ARAC-EKO-YENICERI-BAG-0920.py --sina` ilk sürümde beklenen değerleri ELLE
yazıyordu (`1826-06|Hayriyye` tutar / `1826-06-15|Hayriyye` tutmaz). Gün
değişince sınav **KALDI** — ama ölçen taraf doğru çalışıyordu; bayatlayan şey
ÖNGÖRÜYDÜ (`CLAUDE.md §11`, "bayatlayan sayı" ailesi).
Düzeltildi: sınav artık maddeyi veride BULUR, gününü oradan okur ve üç şeyi
sorar — ① doğru gün + doğru ayırt edici TUTMALI ② bir karakteri bozulmuş gün
TUTMAMALI ③ gövdede geçmeyen ayırt edici TUTMAMALI. Artık veri değişince
kendini günceller. SINAV: GEÇTİ.

### 2.4 🔴 TÜR TUZAĞI — "merak" EKOKUMA HAVUZUNDAN OKUNMUYOR
"Bektaşîlik nedir" tam bir merak sorusudur ve `EKOKUMA_TUR`da `"merak"` türü
KAYITLIDIR — ama kaynağı `_merakHavuz()`tur ve o fonksiyon yalnız
`window.MERAK` ile `/^MERAK_[A-Z0-9]+$/` eşleşen dosyaları okur (`js/app.js`).
⇒ `data/ekokuma_*.js` içine yazılan bir `tur:"merak"` kartı kaydı sağlam olsa
da **HİÇ GÖRÜNMEZ**. app.js'in kendi yorumu da bunu söylüyor: *"Havuzdaki
(EKOKUMA*) tur:'merak' kartlar bugün de görünmez."*
Bu yüzden iki kart da `sebep-sonuc` yazıldı (ikisi de bir oluşum zincirinin
sonucudur — gerekçesi dosyada). **Tanımlı ama ulaşılamaz tür = sessiz tuzak;
öneri teslimde.**

### 2.5 🔴 KAPATILMA GÜNÜ — KAYNAKTA GÜN YOK, ATLAS DA BUNU BEYAN EDİYOR
Koordinatör "ocak 15 Haziran, tarikatın kapatılması sonraki hafta(lar)" dedi.
Ölçüm bunu **desteklemiyor da çürütmüyor da** — çünkü ortada gün yok:

| kaynak | ne diyor |
|---|---|
| TDV `bektasilik` (A. Y. Ocak) | "II. Mahmud tarafından **1826'da** Yeniçeri Ocağı'yla birlikte ilga edilinceye kadar…" — yalnız YIL |
| TDV `vaka-i-hayriyye` (Beydilli) | gün vermez; tarikatın "tashîh-i i'tikād"a mecbur bırakıldığını söyler |
| Atlas `data/olaylar_ek7.js:145` | `t:"1826-06-19"` **ama** `gun:"1826"` |

⇒ Atlasın `t` değeri bir SIRALAMA yeridir, bir ölçüm değil — ve `gun` alanı
bunu zaten dürüstçe beyan ediyor. İki kart da **gün İDDİA ETMEDİ**, "1826"
dedi (D210) ve bağı `t`ye tam eşitlikle tutturdu. İki olayın günü
KARIŞTIRILMADI: ocak için 15 Haziran (atlas kaydı, TDV çelişkisi beyanlı),
tarikat için yalnız yıl.

### 2.6 🔵 MÜKERRER — `1826-06-19` gününde ÖNCEDEN HİÇ KART YOKTU
Tarama (`data/ekokuma*.js` + `data/merak*.js`): o güne bağlı kart sayısı
**0** idi, şimdi 3 (bu dosyanın üç kartı). Yani madde ek okuması olmayan bir
maddeydi. `1826-06-15`e bağlı kart dosyaları bugün: `ekokuma.js` (1),
`ekokuma_camitarz.js` (1), `ekokuma_kurum.js` (1), `ekokuma_toplum.js` (2),
`ekokuma_yeniceri.js` (6).

### 2.7 TDV slug ölçümü
| slug | sonuç |
|---|---|
| `bektasilik` | 🟢 52.263 kar. — Ahmet Yaşar Ocak, 1992, DİA V |
| `haci-bektas-i-veli` | 🟢 33.495 kar. — Ahmet Yaşar Ocak, 1996 |
| `kalenderiyye` | 🟢 29.933 kar. |
| `bektasiyye` | 🔴 ARAMA SAYFASI (ölü) — koordinatörün uyarısı doğruydu |

Arama sayfası (`arama/?q=bektaş&p=m`) 34 madde döndürdü; doğru başlık
"BEKTAŞÎLİK" oradan okunup adresi denendi (D217). "TDV'de yok" DENMEDİ.

### 2.8 İKİ TDV MADDESİ AYNI KONUDA FARKLI SÖYLÜYOR — AMA ÇELİŞKİ DEĞİL
Bu kalemin en önemli içerik bulgusu:

- **TDV `yeniceri` (Kemal Beydilli):** ak börk / Hacı Bektaş irtibatı
  *"tamamen geçersizdir"* — velî Osmanlı Beyliği'nin kuruluşundan çok önce
  ölmüştür. Delilleri: 1438-58'de Bursa'da esir kalan Macaristanlı György
  Hacı Bektaş'ı anlatır ama yeniçeri bağından hiç söz etmez; 1455-63'te
  bizzat yeniçerilik yapan Konstantin de etmez; XV. yüzyıl sonunda
  Âşıkpaşazâde'nin bu irtibatı REDDETMEK ZORUNDA KALMASI ise iddianın o
  sırada dolaştığının delilidir. Börk aslında AHÎ başlığıdır.
- **TDV `bektasilik` (Ahmet Yaşar Ocak):** *"XIV. yüzyılın ikinci yarısında
  yeniçeri teşkilâtının kendisini Hacı Bektaş an'anelerine bağlaması, XV.
  yüzyılda da ocağın resmen tarikatla birleşmesi…"* ve ocakta Hacı Bektaş
  Zâviyesi'ni temsil eden bir babanın bulunması.

⇒ İkisi **farklı sorulara** cevap veriyor: biri KURULUŞ EFSANESİNİ çürütüyor,
öteki KURUMSAL BAĞI tarihliyor. Kart ikisini de adıyla verdi ve ayrımı açıkça
yazdı. Üçüncü ses olarak Kafadar (IJTS 2007) eklendi: *"otomatik bağ"*
varsayımının bırakılması gerektiğini söyler.

### 2.9 Fermanda tenzih — kartın çekirdek bulgusu
TDV `bektasilik`: tarikatın ilga edildiğini belirten fermanda Hacı Bektâş-ı
Velî'nin ve Bektaşî tarikatının olup bitenlerden *"özenle tenzih edilmesine
dikkat olunması"* kaydedilir; ceza da ocağınkiyle kıyaslanamaz — *"birkaç
küçük tekke şeyhinin idamından başka bir yola gidilmemiş"*, Hacı Bektaş
Zâviyesi şeyhi Hamîdullah Amasya'ya sürülmüştür. ⇒ 1826'da kapatılan bir
inanç değil, bir İTTİFAKTIR.

---

## 3. Ne bulunamadı
- **Kapatılmanın GÜNÜ** hiçbir kaynakta yok (yukarıda §2.5). `bulunamadı`.
- **Balım Sultan**, **Şah Kalender isyanı (1526-27)** ve **1925 tekke
  kapatması** için atlasın kronolojisinde madde BULUNAMADI — üçü de kart
  metninde anıldı ama bağ listesine konmadı (olmayan güne bağ yazılamaz).
  Koordinatör isterse bunlar kronoloji kalemine sevk edilebilir.
- TDV `bektasilik` maddesi Balım Sultan'ın hem ölüm yılını (922/1516) hem
  göreve gelişini (*"muhtemelen 907 (1501)"*) ihtiyat kaydıyla verir; kart bu
  ihtiyatı korudu, kesinleştirmedi.

---

## 4. Ne öneriyorum
1. **BAĞLA** (hâlâ açık): `js/app.js` `_EKOKUMA_DOSYA_ADLARI` dizisine
   `"ekokuma_yeniceri",` — satır eklenmeden **altı kart da** görünmez.
2. **`"merak"` türü sessiz tuzaktır** (§2.4): `EKOKUMA_TUR`da tanımlı ama
   `data/ekokuma*.js`ten OKUNMUYOR. İki çare var — ya `_merakHavuz()`
   `_ekHavuz()`un `tur:"merak"` kartlarını da toplasın, ya da tür tanımından
   düşürülsün. Bugünkü hâli, gelecekteki her ek okuma oturumunu aynı tuzağa
   davet ediyor. Kalem `js/app.js` sahibinde.
3. **`data/olaylar_ek7.js:145`** (Bektaşî maddesi) `gun:"1826"` diyor ama
   `t:"1826-06-19"`. Bu DÜRÜST bir beyan, kusur değil — ama §1.5/denetim
   tarafında "gün hassasiyetli sanılan ay/yıl kayıtları" diye bir sınıf
   sayılacaksa burası o sınıftandır. Karar sahibinde.
4. **Doğrulayıcı artık kendini güncelliyor** (§2.3) — `--sina` beklenen
   değerleri veriden türetiyor. Ek okuma yazan her oturuma verilebilir.

---

## 5. Değişen dosyalar
| dosya | sahip | commit |
|---|---|---|
| `data/ekokuma_yeniceri.js` | **paylaşılan** — 2 kart eklendi, başlık notu güncellendi | 1.MURAT |
| `denetim/ARAC-EKO-YENICERI-BAG-0920.py` | EKO-YENICERI-0073 | bu oturum (sınav düzeltmesi) |
| `denetim/EKO-YENICERI-BEKTASI-0921.md` | EKO-YENICERI-0073 | bu oturum |

`js/app.js` ve `index.html`e **DOKUNULMADI**.
`arac/denetle.py` KOŞTURULMADI ve sebebi ölçüldü: içinde "ekokuma" geçen satır
sayısı **0** — altı değişmez bu dosyayı okumuyor, dolayısıyla bu değişiklik
onları etkileyemez (20 Eylül'de aynı dosya için koşturulmuştu: SONUÇ temiz).
"Ölçülemedi" ile "temiz" karıştırılmadı: burada iddia **kapsam dışı**dır.
