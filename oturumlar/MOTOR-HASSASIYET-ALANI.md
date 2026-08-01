# `hassasiyet:` — tarih belirsizliği alanı (tasarım)

**Yazan:** MOTOR (Oturum 16) · 1 Ağustos 2026
**Uygulayacak:** MOTOR — `arac/girdi.py`, `arac/uret_petek.py` (+ denetim)
**Durum:** tasarım. Kod yazılmadı.

Üçlemenin üçüncüsü. Ortak ilke: **belirsizlik veriyle taşınmalı, gösterimde
tahmin edilmemeli.**

| alan | belirsizlik ekseni | soru |
|---|---|---|
| `bos:` | **değer** | kimin? — cevap: *hiç kimsenin* |
| `nufuz:` | **mekân** | nerede? — cevap: *sınır çizilemez* |
| **`hassasiyet:`** | **zaman** | ne zaman? — cevap: *gün bilinmiyor* |

---

## 1. Ölçüm — sorun ne kadar büyük

```
SINIR TARİHİ DAMGALARI (8.908)
  gün hassasiyetli   5.135   %57,6
  yıl (-01-01)       2.516   %28,2
  ay?  (gün=01)      1.257   %14,1

EN KALABALIK -01-01 DAMGALARI
  1281-01-01   917 kayıt   7.648 km yayılım   ← atlasın kuruluş sınırı
  1469-01-01   142 kayıt   4.501 km
  1508-01-01    92 kayıt   1.593 km
  1452-01-01    82 kayıt   1.780 km
```

Harita, 917 yerin 7.648 km'ye yayılmış hâlde **aynı gün** el değiştirdiğini
çiziyor. Sınır tarihlerinin **%28'i gün iddiası değil.**

### 🔴 Konvansiyonun geri dönüşsüz kaybı

`CLAUDE.md §4`: *"Gün bilinmiyorsa `YYYY-01-01` yaz."* Kural doğru, ama
`-01-01` **iki farklı şey** demek:

- "yıl biliniyor, gün bilinmiyor"
- "gerçekten 1 Ocak"

`app.js:43 kesinlikliYazi()` biçimden çıkarım yapıyor ve `-01-01` görünce
*"yalnız yıl"* gösteriyor. ⇒ **Gerçekten 1 Ocak'ta olmuş bir sınır
değişimini yazacak yol yok.** Biçimden çıkarım yapan bir sistem, biçimin
taşıyamadığı ayrımı hiçbir zaman geri kazanamaz. Açık alan şart.

### Kavram bugün ÜÇ yerde, üç biçimde, hiçbiri makinece okunmaz

```
1. app.js:43           tarihin BİÇİMİNDEN çıkarım  — yalnız METİN için
2. olaylar verisi      kısa string (YYYY-MM)
3. yerlesimler verisi  YALNIZ YORUM SATIRI:
     "Nisan'ın GÜNÜ kaynaklarda yok — 04-01 ay hassasiyetidir, gün iddiası değil"
```
Bilgi **kayıp değil** — biri oturup üç ayrı yere yazmış. **Makinenin
okuyamayacağı yere** yazmış.

---

## 2. Şema

```js
s: [{ f: "1469-01-01", t: "1473-08-11", d: "akkoyunlu", hf: "yil" }]
```

Dönem nesnesinin **kendi içinde**, sınır başına: `hf` (f'in hassasiyeti),
`ht` (t'nin hassasiyeti). Değerler: `"gun"` (varsayılan, yazılmaz) ·
`"ay"` · `"yil"`.

**Neden sınır başına, dönem başına değil:** bir dönemin başlangıcı gün
hassasiyetli, bitişi yıl hassasiyetli olabilir — Yanova'da tam bu var
(`1658-08-27` fetih gün, `1693-01-01` kayıp yıl). Dönem düzeyinde tek alan
bu ayrımı yutar.

### 🔴 `olaylar` tarafında DA gerekli

ÇAPRAZ BATI'nın Yanova bulgusu: yer tutucu **kronolojiye de kopyalanmış**
(`olaylar_ek6.js` aynı `1693-01-01`i taşıyor). Alan yalnız `yerlesimler`e
konursa dairesellik görünmez olmaz, **yeri değişir**.

---

## 3. İlk müşteri: `Değişmez 2` toleransı — arayüz değil

### Ölçüm: bugünkü denetim ne kadarını gerçekten doğruluyor

```
DEĞİŞMEZ 2'NİN SAYDIĞI KIRILMALAR (2.276)
  gün hassasiyetli   1.633   %71,7
  ay?                  353   %15,5
  yıl                  290   %12,7

YIL HASSASİYETLİ 290 KIRILMAYI "KURTARAN" MADDE NE TAŞIYOR?
  madde de -01-01  → DAİRESEL     280   %96,6   ← fark 0 gün
  madde GERÇEK gün taşıyor         10    %3,4
```

Örnekler, hepsi **0 gün fark**: `1301-01-01 ↔ 1301-01-01` Yenişehir ·
`1304-01-01 ↔ 1304-01-01` Geyve · `1300-01-01 ↔ 1300-01-01` Köprühisar.

**O 280 eşleşme hiçbir bilgiyi doğrulamıyor.** Sınır *"gün bilinmiyor"*
dediği için 1 Ocak'a çakılmış, madde de aynı sebeple 1 Ocak'a çakılmış,
fark sıfır çıkmış, denetim yeşil yanmış.

> **Ölçüt ile ölçülen şey aynı kaynaktan besleniyorsa, ölçüt sıfır bilgi
> taşır.**

⚠️ **Bu bir hata raporu değil.** O 280 kırılmanın maddesi gerçekten var ve
muhtemelen doğru. İddia dar ve ciddi: **`Değişmez 2` onları doğrulamadı,
doğruladığını sandı.** Gerçek doğrulama oranı 2.276'da 2.276 değil,
**2.276'da 1.643 (%72).**

### Tolerans hassasiyete bağlanır

```
hf/ht = "gun"  →  ±30 gün
        "ay"   →  ±45 gün
        "yil"  → ±400 gün
```

🔴 **VE DAİRESEL EŞLEŞMELER AYRI SAYILIR:**
```
eşleşti (gerçek gün)              N
eşleşti (ikisi de yıl damgası)    M   ← doğrulama DEĞİL
AÇIK                              K
```
Bu şart olmadan tolerans gevşetilir, sayı yine 0 çıkar ve **daha da az şey
ölçmüş oluruz.** Aynı hafta üçüncü kez aynı biçim: `Değişmez 1`
kaynaklı/kaynaksız · `bos:` sayacı · şimdi `Değişmez 2` dairesel.
**Bir sayacın iki farklı şeyi tek sayıda toplaması, bu projenin en sık
kusuru.**

---

## 4. Motorda ne DEĞİŞMEZ — ve bu kasten

Motor bir güne çakmak zorunda. `hf:"yil"` olan sınır **yine 1 Ocak'a
çakılır.** Geometri değişmez.

Alternatif — değişimi belirsizlik penceresine yaymak, sınırı bulanıklaştırmak
— **uydurma bir kademelilik** üretir. *"Belirsizliği gösteriyoruz"* gibi
görünür ama **belirsizliğin ŞEKLİNİ uydurur**: bilmediğimiz bir şeyi bilir
gibi çizmek olur. `bos:` tartışmasında reddedilen şeyin aynısı.

⇒ Dürüstlük **gösterimde ve denetimde**: çıktı `hassasiyet`i taşır, arayüz
*"1469 (gün bilinmiyor)"* der, `Değişmez 2` toleransını ona göre seçer.

---

## 5. Uygulama sırası

1. `girdi.py` alan sözlüğüne `hf`/`ht` + ayrıştırıcıya taşıma
2. `Değişmez 2` toleransı hassasiyete bağlanır **+ dairesel sayaç ayrı**
3. Çıktıya taşınır (`DONEMLER` sınırlarıyla birlikte)
4. `olaylar` tarafına aynı alan
5. Arayüz (ARAYÜZ'ün işi): *"1469 (gün bilinmiyor)"*
6. Göç: `-01-01` damgalı 2.516 sınıra `hf/ht:"yil"` — **elle değil,
   kaynak kontrolüyle**; `-01-01` olan her sınır otomatik `"yil"` sayılamaz,
   çünkü gerçekten 1 Ocak olanlar da var (§1'in kaybı).

---

## 6. Sınav

1. `Değişmez 2` çıktısı **üç sayı** verir: gerçek eşleşme · dairesel
   eşleşme · açık. Tek sayı veriyorsa §3 uygulanmamıştır.
2. Dairesel sayı **280 civarında** çıkmalı — bugün ölçülen değer. Çok daha
   düşükse göç eksik, çok daha yüksekse `hf` fazla yazılmış.
3. **Geometri bayt-aynı kalır.** `PARCALAR` değişiyorsa §4 ihlal edilmiş,
   yani hassasiyet geometriye sızmış demektir.
4. Gerçekten 1 Ocak olan bir sınır (varsa) `hf:"gun"` taşır ve arayüzde
   **"1 Ocak"** görünür — bugün imkânsız olan şey.
