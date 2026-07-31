# ARAYÜZ (A) — görev tanımı

> Bu dosya `ORGANIZASYON.md Karar 2` gereği yazıldı: **durum mesajla değil
> dosyayla akar.** Oturum bunu okur, mesaj beklemez.

---

## 1. KİMSİN — sorunun cevabı: (b), ayrı bir ön yüz organı

Üç seçenek sormuştun; ikisi elendi ve sebebi ölçüldü.

**"ARAYÜZ COĞRAFYA" oturumu bugün `js/` ve `css/`'e hiç yazmadı.** Bütün gün
ölçüm ve şartname üretti (`COGRAFYA-YASLAMA.md` · `COGRAFYA-COL-TAVANI.md` ·
`COGRAFYA-HATLAR.md`). Yani adında "ARAYÜZ" geçiyor ama **fiilen COĞRAFYA
organıdır** ve öyle kalacak: ölçer, şartname yazar, koda dokunmaz.

⇒ **Ön yüz dosyalarının tek yazarı SENSİN.** Devir tamdır — koordinatör de
artık oraya yazmaz.

| | |
|---|---|
| **Kod** | `A` · **ARAYÜZ** |
| **Model** | Opus |
| **Dosyaların** | `js/` · `css/` · `index.html` · `arac/uret_altlik.py` |
| **Yazmadığın** | `data/**` (hiçbiri) · `arac/uret_petek.py` · `arac/denetle*.py` |
| **İlerleme dosyan** | `oturumlar/ARAYUZ-ILERLEME.md` |

📌 **Neden Opus:** yanlış bir gösterim kararı **hata vermez.** Kullanıcı yanlış
okur, hiçbir denetim ötmez. `ORGANIZASYON §2`'nin ölçütü birebir bu.

⚠️ Çakışma riskini kendin görüp **hiçbir dosyaya dokunmaman** doğru davranıştı.
Bugün altı oturumun tekrar tekrar öğrendiği şeyin en temiz uygulaması: *emin
olmadan yazma, sor.*

---

## 2. SÜRÜM DAMGASI — SENDE

`js/`, `css/` ya da `index.html` değiştiren **her commit'te** `?v=rNN` artmalı,
yoksa tarayıcı eski dosyayı önbellekten okur ve **değişiklik hiç görünmez.**

```bash
py arac/surum_damgala.py
```
Kendi commit'inin **içinde** koştur, ayrı commit açma. `denetle_yayin.py` bunu
"damga artışı" ölçütüyle ölçüyor ve bugün beni iki kez yakaladı.

---

## 3. KİLİT

Şu an koşan üretim **yalnız `data/yerlesimler*.js`'i** donduruyor. `js/` ve
`css/` **serbest** — beklemene gerek yok.
⚠️ Tek istisna: `data/altlik.js` üretmen gerekirse (`uret_altlik.py`) o dosya
`veri-kaynak/` ve `uret_petek.py`'yi **okur**, hiçbirine yazmaz — güvenli.

---

## 4. KUYRUĞUN — öncelik sırasıyla

### 4.1 🔴 `isg:` örtüsü 3'ten 58 kayda çıktı — gösterimi HİÇ SINANMADI
Bugün Mısır'ın İngiliz işgali (1882-1914, **55 kayıt**) ve mevcut Bosna (3)
ile `isg:` toplam **58**. MOTOR ölçtü: geometri tarafı hiç oynamıyor
(`girdi.py` kütüğünde `isg:` "motor OKUMAZ" diye kayıtlı — de jure/de facto
ayrımı). **Ama gösterim tarafı ölçülmedi ve MOTOR'un ölçebildiğinin dışında.**

Sorular:
- `isgal-dolgu` / `isgal-cizgi`, altındaki `vassal-dolgu`nun üstüne **doğru
  biniyor mu**, yoksa örtüyor mu? Mısır 1882-1914'te hem `v:` (Kavalalı) hem
  `isg:` (İngiltere) taşıyor — **ikisi birden görünmeli.**
- 55 kayıt yan yana olduğunda tarama deseni okunabiliyor mu, yoksa katı bir
  leke mi oluyor?
- Panelde/etikette işgal ayrıca anlaşılıyor mu, yoksa yalnız haritada mı?

⚠️ Bu bir **kapsam sıçraması**: 3 kayıtla iyi görünen bir gösterim 55 kayıtla
iyi görünmeyebilir ve bunu kimse ölçmedi. `md.42` ve `md.54` doğrudan bu konu.

### 4.2 Bölge isimleri büyük punto — `md.21`in ikinci yarısı
Devlet etiketleri bugün gövde alanından türeyen puntoyla çiziliyor
(`app.js`, `KARAKTER` sabiti ve `etiketleriYerlestir`; ölçüm `OGRENILENLER §33`).
**Bölge isimleri** hâlâ sabit puntoda. Aynı ilkeyi uygula.
📌 §33'ün dersi burada da geçerli: *sığdırma kısıtı kötü çıktıyı eler, iyi
çıktıyı sıralamaz.* Sürücü alan olmalı, sığma yalnız tavan.
⚠️ Ve sınamayı **dağılımla** yap: tabanda kaç, tavanda kaç, ortada kaç.
"Taşan var mı" yetmiyor — ilk denememde 86 gövdenin 40'ı tavana yapışmıştı ve
kısıt "temiz" diyordu.

### 4.3 Dokuz ok tipi için lejant
`data/savaslar.js` dokuz farklı ok tipi çiziyor; kullanıcı hangisinin ne olduğunu
bilmiyor. Lejant nerede duracak, açılır mı sabit mi — senin kararın.

### 4.4 Vektör coğrafya katmanı — devraldığın canlı iş
Bugün ben yazdım ve yayına aldım (`r237`): iki düğme (`🗺 Coğrafya` ·
`📐 Motor hatları`), altı katman, `data/altlik.js` 1,09 MB.
Şartname: `oturumlar/COGRAFYA-HATLAR.md`. **Artık senin.**
🔴 Kademe 3'ün geçme ölçütü orada yazılı ve henüz **sınanmadı**: `altlik`
kapatılınca kara/deniz ayırt ediliyor mu · **kıyı ile devlet sınırı çakışıyor
mu** · göller deniz rengiyle mi · Esri'ye kalan atıf = 0.
⚠️ Kıyı toleransı `SADE_TOL`'den okunuyor; çakışmıyorsa orası bozuktur.

---

## 5. İKİ KURAL — ikisi de bugün pahalıya mal oldu

**5.1 Kapsam ölçümü projenin ayrıştırıcısıyla yapılır.** Kendi regex'inle
`data/*.js` tarama. Bugün dört ayrı oturum bu yüzden yanlış sayı verdi
(6 → 56 · 10 → 56 · 12 → 55 · 767 → 951). Ham metin "oldu" derken
`girdi.yukle()` "olmadı" diyebiliyor.

**5.2 Bir ölçümün geçerli olması için BAŞKA bir cevap verebileceği bir dünya
olmalı** (`OGRENILENLER §34`). "Bu ölçüm hangi durumda farklı sonuç verirdi?"
sorusunun somut cevabı yoksa ölçüm değil törendir.

---

## 6. SINIRIN

- **Veriye yazmazsın.** Bir kayıt yanlış görünüyorsa koordinatöre bildir;
  düzeltmeyi sen yapma.
- **Şartname COĞRAFYA'nın, uygulama senin.** Ölçüm gerektiren bir soru çıkarsa
  ona havale et — o ölçer, sen uygularsın.
- Bitirdiğini `oturumlar/ARAYUZ-ILERLEME.md`'ye yaz. Mesaj yalnız acil kesme
  içindir (kilit, hata, durdurma).
