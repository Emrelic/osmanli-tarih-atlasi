# VERİ KİMLİK 2 — İLERLEME

Görev tanımı: [VERI-KIMLIK-2.md](VERI-KIMLIK-2.md) (`880c382`)
Claim kuralı: `ORGANIZASYON Karar 2` — durum mesajla değil dosyayla akar.

---

## 1 Ağustos 2026

✅ **`sirbistan-nemanjic` — 17:44 → 17:52**
`harita:"sirbistan"` bağlandı (`data/devletler.js:497`). **Yeni renk yazılmadı.**
Gerekçe: `sirbistan` anahtarı (`#6a8fa0`) zaten vardı ve üç Sırp kaydı onu
kullanıyor — `sirp-despotlugu` (1402-1459), `sirbistan-prensligi` (1804-1882),
`sirbistan-kralligi` (1882-1918). Nemanjić 1217-1402, despotlukla **tam
bitişik**. Güç etiketi: **KESİN** (§73).
⚠️ Yeni renk açmak Sırbistan'ı dönemlere göre iki farklı ülke gibi gösterirdi.
Ölçüm: `denetle.py` temel çizgiyle **birebir aynı** (2s 115/114 · 2t 56/49,
ikisi de önceden var olan borç) — sıfır yeni ihlal. `node --check` temiz.
Ayrıca özetteki *"Henüz renk/harita karşılığı yok"* ifadesi artık yanlış
olduğu için çıkarıldı, TDV kaynak künyesi korundu.

✅ **`merini` — 17:52 → 17:51**
`harita:"fas"` bağlandı (`data/devletler.js:1728`). **Yeni renk yazılmadı.**
Gerekçe: `fas` anahtarı (`#9e6b5b`) zaten vardı; `fas` kaydı (Sâdî/Alevî
Şerifleri) **1549-1923**, `merini` (Merînî/Vattâsî) **1196-1549** — bitiş ve
başlangıç **aynı gün**, örtüşme yok. `merini`'nin kendi özeti zaten
*"sonra Sâdîlere devretti (bkz. [[fas]])"* diyor. İkisi de `tur:"krallik"`,
`bolge:"kuzey-afrika"`. Güç etiketi: **KESİN** (§73).
⚠️ Yeni renk açmak Fas'ı 1549'da renk değiştiren iki ayrı ülke gibi
gösterirdi; oysa hanedan değişimi, ülke değişimi değil.
Ölçüm: `denetle.py` temel çizgiyle **birebir aynı** (2s 115/114 · 2t 56/49)
— sıfır yeni ihlal. `node --check` temiz. `harita:"fas"` kullanıcı 1 → 2.

---

### 🔴 `dehlek` — sınıfı yanlış, araştırma kalemi

Görev tanımı satır 21/34 `dehlek`i *"kayıt var, yalnız renk yok"* sınıfına
koyuyor. Ölçtüm, **değil**:
```
grep 'id:"dehlek"' data/devletler.js  → yok
grep '"dehlek"'    arac/renkler.py    → yok
```
Sıfırdan kayıt gerekiyor (`f` · `t` · `bolge` · `baskent` · `ozet` ·
`kronoloji`) **artı** yeni renk — ve burada Kısıt 1 (13,6 eşiği) gerçekten
uygulanacak. Bugünkü ilk üçün diğer ikisi tek satırdı; bu değil.

**Tarih verisi ÇAPRAZ DOĞU'da var** (`9078760` · `b620dc1`), iki bağımsız TDV
maddesi, güç etiketi KESİN:
```
TDV dehlek   "VI. (XII.) yy'dan itibaren kendi meliklerince BAĞIMSIZ"
             Memlük yönetimi belgelenmiyor
TDV masavva  XII-XIV. yy "Dehlek emîrlerinin hâkimiyetinde"
önerilen pencere:  1281-01-01 → 1557-04-02   (sonrası OSMANLI)
```

🔴 **AMA İKİ ŞEY ÇÖZÜLMEDEN YAZILAMAZ:**

**① SLUG ÇELİŞKİSİ — `dahlak` mı `dehlek` mi?** ÇAPRAZ DOĞU kendi içinde
tutarsız:
```
CAPRAZ-DOGU.md            `dahlak` 6 kez  ← somut önerilerin HEPSİ burada
                          `dehlek` 1 kez
CAPRAZ-DOGU-ILERLEME:488  "canlı slug: func · nube · bece · dehlek"
b620dc1 commit mesajı     "Yeni canli slug: bece, dehlek, func, nube"
KOORDİNATÖR kuyruğu       dehlek
VERİ KİMLİK'in rengi      "dehlek": ("Dehlek Melikleri", "#a838a8")
```
`yerlesimler*.js`'te ikisinin de izi **yok** (0 eşleşme), yani veriden
çözülemiyor. Yanlış olanı seçersem `renkler.py` anahtarı ile `harita:` değeri
tutmaz → kayıt **"dizinde var, kullanım 0"** olur; §4'ün uyardığı sessiz
başarısızlığın **tam kendisi**.

**② `f:` GERÇEK KURULUŞ DEĞİL.** 1281 bir kuruluş tarihi değil, yanlış
atfın *başladığı* yıl. TDV "XII. yüzyıldan beri bağımsız" diyor, kesin gün
vermiyor. `f:"1281-01-01"` yazmak uydurma kuruluş tarihi olur.

⇒ **Yazmıyorum.** *"Yanlış renk boşluktan kötüdür"* kuralı tarihe de geçerli:
236 yıllık yanlış atfı düzeltirken uydurma tarihle yeni bir yanlış yazmam.

📌 Not: noktaların memluk → yeni kimliğe geçirilmesi **bende değil** —
`yerlesimler*.js` bana kapalı (koordinatör talimatı). Benim payıma kimlik
kaydı + renk düşüyor; ikisi de yukarıdaki iki cevabı bekliyor.

---

### 🔴 `cezayir-fransiz` — YAZILMADI, kategori kararı gerekiyor

Bu kalem `sirbistan`/`merini` sınıfında **değil.** Ölçtüm:

**① `tur:"gecici-isgal"` kayıtlarının 15'inin 15'inde `harita:` YOK.**
```
bosna-isgal · girit-devleti · fransiz-misir-seferi · kibris-ingiliz
oniki-ada-italyan · cezayir-fransiz · sarki-rumeli · ingiliz-hindistani
hollanda-dogu-hint · ingiliz-malaya · yeni-ispanya · ispanyol-peru
portekiz-brezilyasi · ingiliz-kuzey-amerika · yeni-zelanda
```
Dizinde `harita:` dolu **123** kayıt var; işgallerden **hiçbiri** onlarda değil.
⇒ Bu bir unutma değil, **örüntü.** `§78.1`: *"şema şunu taşıyabilir" ≠ "şema
bunu BÖYLE KULLANIYOR."* Şema `harita:`yı işgalde taşıyabilir; **hiç
kullanmamış.**
⇒ `cezayir-fransiz`e renk vermek **tek kalem değil, 15 kayıtlık kategori
politikası** kurar: İngiliz Hindistanı, Hollanda Doğu Hint, Yeni İspanya,
Brezilya, Kanada, Yeni Zelanda… hepsi aynı kuralla boyanır. Bu benim tek
başıma vereceğim karar değil.

**② Ve boyarsam `abdulkadir`i eziyorum.** Kaydın kendi özeti:
> *"Batı'da Emîr Abdülkādir'in direniş devletiyle (bkz. [[abdulkadir]])
> **1847'ye dek fiilen paylaşıldı**."*
```
cezayir-fransiz  1830-07-05 → 1923-10-29   harita YOK
abdulkadir       satır 885                 harita YOK
cezayir-ocagi    satır 706                 harita YOK
```
Cezayir'in **üçü de** boyasız. Yalnız `cezayir-fransiz`e `harita:"fransa"`
yazarsam harita 1830'dan itibaren **bütün Cezayir'i Fransa** gösterir ve
Abdülkādir'in 17 yıllık direniş devleti **hiç var olmamış** gibi görünür.
Bu, *"yanlış renk boşluktan kötüdür"*ün ders kitabı örneği — ve bugün
koordinatörün `abd`/`abdulkadir` vakasında uyardığı şeyin aynısı.

⇒ **Yazmıyorum.** Koordinatörden kategori kararı bekliyor.

