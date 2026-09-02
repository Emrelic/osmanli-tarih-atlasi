# KÜNYE ÖNERİSİ — `kabartay`

> Oturum **OPUS HAZIR KITA 106** · 2 Eylül 2026 · koordinatör 1.MURAT
> 🔴 **BU BİR ÖNERİDİR.** `data/devletler.js` ve `arac/renkler.py` koordinatörde;
> ikisine de TEK BAYT yazılmadı. Koşu sürüyor, `renkler.py` kilitli.

---

## 0. NİÇİN — ölçülmüş bir veri çelişkisi var, ve `__BOSLUK__` onun ARA ÇÖZÜMÜ

```
TDV `kabartaylar`: "Belgrad Antlaşması (1739) … Kabartayların yaşadığı bölgeyi
                    TARAFSIZ BİR ÜLKE hâline getirmiştir"
veri (düzeltilmeden önce): Kabartay (Nalçik) 1441 → 1774-07-21 kesintisiz `kirim`
```
Bu tur `data/yer_yama_ok106.js` ile 1739-1774 dilimini `__BOSLUK__`a çevirdi —
**dürüst ama eksik**: Kabardey beylikleri o 35 yılda yok olmadı, iki
imparatorluğun **dışında** kaldılar. `__BOSLUK__` *"kimsenin değildi"* der;
doğrusu *"kendilerinindi"*.

**Ölçüm:** `data/devletler.js`te Kafkasya bölgesinde **altı künye** var ve
altısı da güney/doğu Kafkasya:
```
gurcistan · imereti · gurcistan-demokratik-cumhuriyeti ·
ermenistan-demokratik-cumhuriyeti · azerbaycan-demokratik-cumhuriyeti · sirvansah
```
⇒ **Kuzey Kafkasya dağlık kuşağının TEK bir kimliği yok.** Kabartay · Çerkes ·
Kumuk · Oset · Çeçen · Şamhal — altı kalıp tarandı, sıfır sonuç.

---

## 1. ÖNERİLEN KAYIT

```js
{ id:"kabartay", ad:"Kabartay (Kabardey) Beylikleri", tur:"beylik", bolge:"kafkasya",
  f:"1281-01-01", t:"1774-07-21",
  baskent:"(beylikler hâlinde, sabit başkent yok)",
  ozet:"Kuzey Kafkasya'nın orta kesiminde, Terek ve Malka havzalarında yaşayan " +
       "Adige (Çerkes) kolunun kurduğu beylikler topluluğu; pşi denen beylerin " +
       "yönettiği, tek merkeze bağlanmayan bir düzendi. Kırım Hanlığı ile Rusya " +
       "arasında yüzyıllarca el değiştiren bölge, 1739 Belgrad Antlaşması'yla " +
       "iki devletin de dışında TARAFSIZ ilan edildi; 1774 Küçük Kaynarca'nın " +
       "21. maddesiyle Küçük ve Büyük Kabartaylar Rusya'ya bırakıldı. " +
       "⚠️ BAŞLANGIÇ TARİHİ ATLAS UFKUDUR (1281), kuruluş tarihi DEĞİLDİR: " +
       "TDV `kabartaylar` maddesi bir kuruluş tarihi vermiyor ve uydurulmadı. " +
       "⚠️ BİTİŞ 1774'tür çünkü kaynak siyasî bağlanmayı o tarihe veriyor; " +
       "Rus idaresinin fiilen yerleşmesi daha uzun sürdü, o süreç ÖLÇÜLMEDİ.",
  kaynak:"kabartaylar",
  kronoloji:[
    { t:"1739-09-18", tur:"antlasma",
      b:"Belgrad Antlaşması — Kabartay iki imparatorluğun dışında tarafsız ilan edildi" },
    { t:"1774-07-21", tur:"son",
      b:"Küçük Kaynarca'nın 21. maddesiyle Küçük ve Büyük Kabartaylar Rusya'ya bırakıldı" }
  ] }
```

### Alan alan gerekçe
| alan | değer | dayanak |
|---|---|---|
| `id` | `kabartay` | veride kullanılacak kimlik; `yer_yama_ok106.js`teki `__BOSLUK__` dilimi buna çevrilecek |
| `ad` | Kabartay (Kabardey) Beylikleri | TDV maddesinin adı "KABARTAYLAR"; parantezli modern karşılık `§`8'in kabul ettiği biçim |
| `tur` | `beylik` | şemada geçerli (28 kullanım); tek hükümdarlı bir krallık/hanlık değil |
| `bolge` | `kafkasya` | şemada geçerli |
| `f` | `1281-01-01` | 🔴 **ATLAS UFKU, KURULUŞ DEĞİL** — `ozet:`te açıkça yazılı |
| `t` | `1774-07-21` | TDV `kucuk-kaynarca-antlasmasi`: *"Küçük ve Büyük Kabartaylar (md. 21) Rusya'ya bırakılmaktaydı"*; külliyatta o gün ±0 |
| `baskent` | sabit yok | TDV merkez/başkent vermiyor; `nogay` künyesinin aynı biçimi ("bozkırda göçebe, sabit başkent yok") |
| `kaynak` | `kabartaylar` | TDV slug'ı **200**, gövdesi iki kez okundu |

---

## 2. 🔴 BULUNAMAYANLAR — yazılmadı, uydurulmadı

TDV `kabartaylar` gövdesi **künye sorularıyla yeniden okundu** ve şunları
**vermiyor**:
```
kuruluş tarihi / siyasî yapı olarak ortaya çıkış      YOK
Büyük ↔ Küçük Kabartay ayrımının doğuş tarihi         YOK
                                                      (ayrımın KENDİSİ
                                                       `kucuk-kaynarca-antlasmasi`
                                                       maddesinde geçiyor)
pşi düzeninin idarî ayrıntısı, merkez/başkent          YOK
Kırım ve Osmanlı ile ilişkilerin TARİHLERİ             YOK
1774 sonrası (Yermolov dönemi, 1822) süreç             YOK
```
VERDİĞİ üç somut tarih: `1563` ve `1567` (Rusların Terek kıyısındaki iki
kalesi) · `1739` Belgrad · `1774` Küçük Kaynarca.
🟡 `1563`/`1567` **kronolojiye yazılmadı**: bunlar Rus kalelerinin inşasıdır,
Kabartay beyliklerinin kendi olayı değil. Koordinatör isterse eklenir —
ama künyenin kendi kronolojisi mi yoksa Rusya'nınki mi olduğu bir karar.

Denenen öteki sluglar: `cerkesler` · `cerkes` · `adigeler` · `kabardey` ·
`besleney` **302** (beşi de ölü). `abazalar` **200** ama başka bir halk.

---

## 3. ⚠️ ÖTEKİ DÖRT KİMLİĞİ ÖNERMİYORUM — talimatına uydum, ama bir ÖLÇÜM bıraktım

Koordinatör: *"Hepsini birden önerme — önce Kabartay, çünkü elimizde ona bağlı
somut bir veri çelişkisi var."* Uydum. Ama sıradaki turun tabanı olsun diye
**veriyi ölçtüm** (kaynak aramadım, o yüzden hüküm de vermiyorum):

```
Maykop (Çerkezya)   kirim 1441→1783-04-19 · OSMANLI d: 1783-04-19→1829-09-14
Soçi (Sâşe)         aynı desen
Tuapse              aynı desen
Anapa               kirim 1441→1781 · OSMANLI d: 1781→1829-09-14
Kuban (Yekaterinodar) kirim 1441→1783-04-19 · rusya 1783→
```
🟡 **ŞÜPHE (ölçülmedi, kaynak aranmadı, hüküm DEĞİL):** bu beş nokta Çerkes
dağlık kuşağında ve 1783-1829 arası **doğrudan Osmanlı** boyanıyor. Kabartay
vakasıyla aynı sınıf olabilir — Osmanlı kıyıda kale tutarken iç kesim yerel
beyliklerde kalmış olabilir. **Ama bunu ÖLÇMEDİM ve "ölçtüm" demiyorum.**
⇒ Bir `cerkes` künyesi ancak bu ölçüm yapıldıktan sonra önerilmeli; yoksa
kullanılmayan künye yazmış oluruz (koordinatörün uyarısı).

---

## 4. KÜNYE İNERSE NE OLUR — sırayı yazıyorum

```
① künye devletler.js'e iner (koordinatör)
② renkler.py'ye renk yazılır (koordinatör, KOŞUDAN SONRA — kilitli)
   🔴 renksiz kimlik `§8` gereği BOYANMAZ ⇒ harita DELİĞİ açar.
     Künye inip renk inmezse `__BOSLUK__`tan ÇEVİRMEYİN.
③ ancak ondan sonra `yer_yama_ok106.js`teki `__BOSLUK__` dilimi
   `d:"kabartay"`a çevrilir — bunu ben yaparım, tek satır
④ ve o zaman Değişmez 4 kontrol edilir: dönem 1739-1774, künye 1281-1774
   ⇒ içeride, hayalet doğurmaz
```
📌 Sıra bozulursa kusur **sessiz** olur: renksiz künye ne denetimde ne ekranda
kendini gösterir, yalnız o bölge **boş** kalır.
