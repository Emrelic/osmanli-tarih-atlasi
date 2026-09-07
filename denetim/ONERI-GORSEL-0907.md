# ÖNERİ — kronoloji maddelerine `gorsel:` alanı

**GORSEL-0907 · 7 Eylül 2026** · oturum `local_e9ebc14b-a780-4a6f-9172-79af0ef7de8a`
🔴 **ŞEMA ÖNERİSİDİR — içerik yazılmadı, `data/*.js`e ve `js/app.js`e
dokunulmadı.** (Koşu 8 sürüyor · arayüz YUK-FETCH-0907'de.)

---

## ① TABAN — "alan icat etmeden önce ARA" uygulandı

```
kronoloji külliyatı   6161 madde · 77 dosya · 25 alan
görsel/resim/img/foto benzeri alan            0
```
⇒ Alan gerçekten yok; icat **gerekli**, ve bunu tahmin ederek değil
**sayarak** söylüyorum. (`§11`: bu proje `sinif:` icat edip sonra `k:`nin
var olduğunu bulmuştu.)

### 🟢 AMA ARAMA İKİ ŞEY BULDURDU

**① `boyut: 8` ZATEN VAR — bir kayıtta, ve tam bu boyut için**
```
olaylar_ek19.js · 1789-07-14 · «Bastille'in düşüşü»
   tur:"isyan" · onem:5 · dunya:5 · kapsam:"konu" · boyut:8
```
⇒ 8. boyutun **işareti kullanımda.** `gorsel:` onu **tekrarlamamalı** —
ikisi ayrı sorular:
```
boyut:   bu madde HANGİ BOYUTA ait
gorsel:  bu maddenin GÖRSELİ var mı
```
Bir madde görselli olabilir ve 8. boyut olmayabilir (İstanbul'un fethi
1. boyuttur ve görseli olmalıdır). **Bağlamak yanlış olur.**

**② PORTRE EMSALİ — yarısı kopyalanmalı, yarısı KOPYALANMAMALI**
```
assets/portreler/   38 dosya · 36'sı padişah `id`siyle BİREBİR
app.js:4075         img.src = "assets/portreler/" + aktif.id + ".jpg"
app.js:4076-4079    yüklenemezse → adın ilk harfi (kırık ikon YOK)
```
🟢 **KOPYALANACAK:** yerel `assets/` altında durması · yüklenemediğinde
**zarifçe düşmesi.**
🔴 **KOPYALANAMAZ — konvansiyonla yol türetme:** kronoloji maddelerinin
**`id` alanı YOK** (25 alanın hiçbiri). Padişahta yol `id`den türetiliyor;
kronolojide türetilecek bir anahtar **yok** ⇒ yol **açıkça saklanmalı.**
🔴 **KOPYALANMAMALI — lisans sessizliği:** portrelerin **lisans alanı da
yok**; *"kamu malı, Wikimedia"* bilgisi yalnız `CLAUDE.md` düzyazısında
duruyor. Yani bugünkü emsal, senin kırmızı çizgini **karşılamıyor.**
⇒ `gorsel_kaynak:` **zorunlu** alan olmalı, opsiyonel değil.

---

## ② ŞEMA ÖNERİSİ — üç alan

```js
{
  t: "1453-05-29",
  b: "İstanbul'un fethi",
  ...
  gorsel:        "assets/gorseller/1453-05-29-istanbul-fethi.jpg",
  gorsel_kaynak: "Wikimedia Commons · PD-old-100 · https://commons.wikimedia.org/wiki/File:...",
  gorsel_alt:    "Fatih'in İstanbul'a girişi — Fausto Zonaro'nun tablosu"
}
```

| Alan | Zorunlu | Ne söyler |
|---|---|---|
| `gorsel:` | — | **yerel** yol. Uzak URL **DEĞİL** (gerekçe ③) |
| `gorsel_kaynak:` | 🔴 **EVET** | kaynak · **lisans jetonu** · bağlantı |
| `gorsel_alt:` | 🔴 **EVET** | görseli tarif eder — **olayı değil** |

### 🔴 `gorsel_alt` niçin `b`den TÜRETİLEMEZ
`b` **olayı** anlatır (*"İstanbul'un fethi"*), alt metin **görseli**
anlatmalı (*"Fatih'in şehre girişini gösteren 1908 tarihli tablo"*).
İkisi **ayrı sorular**; `b`yi alt metin olarak kullanmak, ekran okuyucuya
görseli değil başlığı ikinci kez okutur.

---

## ③ YEREL mi UZAK mı — ÖLÇÜLDÜ, yerel

Şartname ikisinin bedelini soruyordu (*"yerel depo şişirir, uzak KOPAR"*).
**Ölçtüm:**
```
assets/portreler   36 dosya · 2,3 MB · ortalama 66 KB
data/              115 MB
veri-kaynak/       902 MB
```
⇒ **20 görsellik pilot ≈ 1,3 MB** — `data/`nin **%1,1**'i, deponun binde
biri. *"Depo şişer"* endişesi **ölçülünce çöküyor.**

Buna karşılık **uzak URL'in bedeli ölçülemez ve tek yönlüdür**: atlas
**derleme adımı olmayan statik** bir site; bir Wikimedia dosyası yeniden
adlandırılırsa görsel **sessizce kaybolur** ve hiçbir denetim ötmez.
⇒ **YEREL.** Ve bu, portre emsaliyle de tutarlı.

### Ad konvansiyonu
```
assets/gorseller/<YYYY-MM-DD>-<kisa-slug>.jpg
```
Gün önekli, çünkü **aynı günde birden çok madde olabilir** ve slug onları
ayırır. Türkçe harf **yok** (`§4`ün `İ`.lower() dersi — dosya adında
normalleştirme tuzağı doğmasın).

---

## ④ 🔴 LİSANS — BİR `if` İLE SORULABİLİR OLMALI

Kırmızı çizgi ancak **makine sorabiliyorsa** yaşar. `§11`: *"bu bilgiyi bir
`if` ile sorabiliyor muyum? Sorulamıyorsa kayıt vardır, VERİ yoktur."*

**Öneri: `gorsel_kaynak` KAPALI BİR JETON kümesinden biri + URL taşır.**
```
🟢 KABUL   PD · PD-old-70 · PD-old-100 · PD-US · PD-art · CC0
🔴 RED     her şey — CC-BY-NC · "muhtemelen serbest" · "kaynağı
           bulamadım" · telifi belirsiz · YZ üretimi · jeton YOK
```
Böylece bir nöbetçi tek satırla sorar:
```python
jeton = any(j in kaynak.split("·")[1].strip() for j in KABUL)
url   = "http" in kaynak
if not (jeton and url):  # ⇒ REDDET
```
⚠️ **Ve bu, ölçülebilir olduğu için `assets/portreler/`den ileridir:**
bugün 36 portrenin lisansı **hiçbir yerde makine okunur değil.**
📌 Bunu bir **borç** olarak kaydediyorum, ama **bu kalemin işi değil** —
portreleri geriye dönük etiketlemek ayrı bir sevk.

---

## ⑤ ARAYÜZ — ÖNERİ, kod değil (`js/app.js` YUK-FETCH-0907'de)

```
① Görsel, detay kartında ANLATININ ÜSTÜNDE dursun (portre kartındaki gibi)
② `img.onerror` → görseli KALDIR, kırık ikon GÖSTERME
   (app.js:4076-4079 portrelerde bunu ZATEN yapıyor — aynı desen)
③ `loading="lazy"` — 6161 maddelik bir listede şart
④ `alt` = `gorsel_alt`; alan boşsa görsel `alt=""` ile DEKORATİF sayılsın,
   `b` ALT METİN OLARAK KULLANILMASIN (gerekçe ②)
⑤ `gorsel_kaynak` görselin altında KÜÇÜK PUNTO ile görünsün — lisans
   şartı çoğu kamu malı etiketinde atıf istemez ama GÖSTERMEK, kaynağı
   denetlenebilir kılar
```

---

## ⑥ PİLOT — ŞEMA ONAYLANDIKTAN SONRA

Şartname 10-20 madde diyor. **Aday listesi hazır ama YAZILMADI** — şema
onayı gelmeden içerik üretmek, `§11`in *"bir veri şeması yanlış kurulursa
sonraki her kayıt onu tekrar eder"* uyarısına girer.

Aday ölçütü: **en görünür olaylar** + **kamu malı görselin gerçekten
bulunabildiği** olaylar. İkincisi kısıt: bir olay ne kadar ünlü olursa
olsun, PD görseli yoksa **kayıt açılmaz** (`bulunamadı` yazılır).

---

## ⑦ KARAR İSTEDİKLERİM

```
① Üç alan adı onaylanıyor mu — `gorsel` · `gorsel_kaynak` · `gorsel_alt`?
② Lisans JETONU kapalı küme olsun mu (⑤'teki altı jeton)?
③ Yerel karar onaylanıyor mu (ölçüm: pilot ≈ 1,3 MB)?
④ `gorsel_alt` ZORUNLU mu OPSİYONEL mi? — önerim ZORUNLU
⑤ Pilot listesini getireyim mi, yoksa sen mi seçeceksin?
```

### 🔴 ÖLÇMEDİKLERİM
- **Hangi olayların gerçekten PD görseli var** — pilot listesi bu ölçümü
  gerektiriyor ve **henüz yapmadım.**
- **`index.html`e satır gerekip gerekmediği** — görseller `<script>` ile
  yüklenmediği için **gerekmemeli**, ama `§5`in *"yeni veri dosyası
  eklersen BURAYA da satır eklemelisin"* kuralını görsel için **teyit
  etmedim.**
- Portrelerin geriye dönük lisans etiketlenmesi — **borç olarak kaydettim,
  ölçmedim.**
