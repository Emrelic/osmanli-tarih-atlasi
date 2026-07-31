# KATMAN SİSTEMİ — kullanıcı kararı (31 Temmuz)

Kullanıcının isteği: harita katmanları **birbiri üstüne giydirilebilsin**,
çoktan seçmeli olarak.

```
1) düz satıh        deniz · kara · büyük göller · büyük nehirler
2) coğrafya satıh   + dağ · çöl · ova · vadi · plato · küçük nehirler
3) şehirler         yalnız yerleşimler
4) devletler        siyasî renklendirme
5) olaylar          savaş · muharebe · isyan · çekilme · işgal
```

---

## 1. 🔴 KULLANICI KARARI — 1 ve 2 İÇ İÇE, bağımsız DEĞİL

Sorun: büyük nehir ve göller **iki katmanda birden** geçiyor; 2, 1'in üstüne
detay ekliyor. Bağımsız kutu yapılsaydı *"düz satıh kapalı, coğrafya açık"*
gibi anlamsız birleşimler mümkün olurdu — **dağlar boşlukta asılı kalırdı.**

⇒ **Zemin tek bir DETAY KADEMESİ olarak kurulur:**
```
sade      → deniz · kara · büyük göl · büyük nehir
coğrafya  → yukarıdakilerin ÜSTÜNE dağ · çöl · ova · vadi · plato · küçük nehir
```
`coğrafya` açılınca `sade` **kendiliğinden altında kalır**; kapanınca sade
hâle döner. Kullanıcı tutarsız bir duruma düşemez.

**3 · 4 · 5 bağımsız kutu olarak kalır** — onlar gerçekten ayrık kümeler.

## 2. 🔴 ESRİ ALTLIK — altıncı seçenek, VARSAYILAN KAPALI

⇒ **Kendi vektör katmanlarımız varsayılan oluyor.** `COGRAFYA-HATLAR.md`'deki
**Kademe 3 fiilen bugün karara bağlandı**: Esri artık zemin değil, isteğe
bağlı bir görsel zenginlik.
📌 Bugün ölçüldü: `🗺 Coğrafya` düğmesiyle Esri kapatıldığında harita
**eksiksiz görünüyor** — kara, deniz, Kıbrıs, Ege adaları, kıyı çizgisi.
Kaybedilen tek şey kabartma gölgesi ve kullanıcı bunu bilerek kabul etti.

---

## 3. NE VAR, NE YOK — tasarımdan önce

| katman | bugün | eksik |
|---|---|---|
| 1 sade | ✅ `altlik.js`: kara · gol · nehir | — |
| 2 coğrafya | 🟡 `dag_alan` var | **çöl · ova · vadi · plato · küçük nehir** |
| 3 şehirler | ✅ işaretler + etiketler | devletten **ayrılabilir mi**, ölçülmeli |
| 4 devletler | ✅ `devlet-dolgu` · `osmanli-dolgu` · `vassal-dolgu` · `isgal-dolgu` · `devir-dolgu` | — |
| 5 olaylar | ✅ `savasIsaretleri` · `seferler` | — |

### 🔴 Katman 2'nin eksik verisi — COĞRAFYA'nın envanterinde var
```
Desert 31 · Plateau 18 · Geoarea 12 · Pen/cape 7 · Island group 10 · Range 61
```
⚠️ **Ve bir ayrım şart:** COĞRAFYA bu sınıfları *yaslama* için ölçtü ve
`Plain`i **elemişti** — *"ova, sınırın keyfî olduğu yerdir."* O eleme
**yaslama içindi.** GÖSTERİM için ova tamamen meşru: kullanıcı ovayı görmek
istiyor, sınır ona yaslanmasın diye elenmişti.
📌 *Bir amaçta kusur olan şey başka bir amaçta sinyal olur* — bugün üçüncü kez.

---

## 4. UYGULAMA — ARAYÜZ (`js/` · `css/` · `index.html` · `uret_altlik.py`)

Bugünkü iki düğme (`🗺 Coğrafya` · `📐 Motor hatları`) bu sisteme **soğurulur**.
⚠️ `📐 Motor hatları` **kullanıcı katmanı değil, hata ayıklama katmanı** —
beş katmanın yanında değil, ayrı ve gizlenebilir kalmalı. Karıştırılırsa
kullanıcı *"bu bir devlet sınırı mı, motorun hattı mı"* diye sorar.

**Sıra (alttan üste):**
```
zemin rengi → kara → göl → çöl/ova/plato → dağ → nehir(büyük→küçük)
→ [Esri raster, isteğe bağlı] → devlet dolgu → sınırlar → şehir → olay → etiket
```

**Ölçülecek:** şehir katmanı devletten gerçekten ayrılabiliyor mu? Bugün
işaretler devletle birlikte güncelleniyor olabilir; ayrılamıyorsa 3 ve 4 tek
kutuya düşer ve bu **kullanıcının isteğine aykırı** olur.
