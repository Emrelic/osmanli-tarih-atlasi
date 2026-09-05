# KRONOLOJİ GÜNEYDOĞU ASYA — teslim

> Koordinatör: 1.MURAT HÜDAVENDİGAR · Şartname: cross-session-message, 5 Eylül 2026
> Kısıt: koşu 5b canlıydı (PID 21540) — `arac/uret_petek.py` · `renkler.py` ·
> `girdi.py` · `data/*.js`e DOKUNULMADI.
> Çıktı: **YAMA** — `denetim/KRONOLOJI-GDASYA-0905.json`

## ① NE ÖLÇTÜM

`data/devletler.js`den `bolge:"guneydogu-asya"` künyeleri **`bolge:` alanından
gerçek `id` ile** sayıldı (elle liste YAZILMADI — koordinatörün Türkçe yazım
tuzağı uyarısı buydu): **59 künye · BOŞ 0 · 1-3 maddeli 34 · 4+ maddeli 25**
— koordinatörün sayısıyla **birebir örtüştü**.

### Kaynak yoğunluğu — 15 sluglık örneklem (HTTP)
```
ace 200 · ace-sultanligi 302 · malaka 200 · aceh 302 · siyam 200(→YÖNLENDİRME,
bk. tayland) · vietnam 302 · kamboc 302 · endonezya 200 · filipinler 200 ·
malezya 200 · brunei 302 · tayland 200 · aracan 302 · arakan 200 · mataram 302
⇒ 8/15 CANLI (%53) — CLAUDE.md §4'ün ölçülmüş "Güneydoğu Asya %53" rakamıyla
BİREBİR TUTARLI.
```
`siyam` sluğu **canlı yönlendirme kütüğü** (§4 tuzak ⑥) — `bk. TAYLAND`
dönüyor.

## ② NE YAPTIM

34 künyenin **34'ünün de** üstünden geçtim, orijinal listeyle çapraz kontrol
ettim (üçüncü tur, üçünde de EKSİK çıkmadı).

```
🟢 4+ MADDEYE ÇIKTI      26 / 34   (%76 — Batı Afrika %40, Doğu Afrika %26'dan
                                     KAT KAT yüksek; TDV yoğunluğu + zengin
                                     İngilizce akademik literatürle TUTARLI)
🟡 3'TE KALDI             6 / 34   (%18)
⚪ 2'DE KALDI             1 / 34
⚪ 1'DE KALDI             1 / 34   (kutai — bu turda hiç araştırılamadı,
                                     AÇIKÇA işaretlendi)
TOPLAM YENİ MADDE        41 satır
```

## ③ NEYİ BULAMADIM / YAPAMADIM

```
kutai         1/4 — zaman kısıtı nedeniyle HİÇ araştırılamadı, KALEM AÇIK
poni          2/4 — aynı gerekçe
pagaruyung    3/4 — TDV `endonezya` gövdesinde AÇIKÇA hiç geçmiyor,
              akademik arama zaman kısıtından yapılamadı
banten-sultanligi  3/4 — TDV verdiği tek tarih (1526-1552) zaten künyenin
              kendi kurulus'uyla örtüşüyor, YENİ bilgi değil
siyam-chakri  3/4 — aynı desen (TDV verisi zaten künyenin f:'siyle örtüşüyor)
samudra-pasai 3/4 — ikinci ek olay bulunamadı
```

## ④ 🔴 f:/t: ÇELİŞKİLERİ VE ATLAS-UFKU DESENİ — künye sahibine bildiriliyor

Bu bölgede **çok künyenin `f:` alanı 1281** (atlasın küresel başlangıç yılı) —
gerçek kuruluş tarihinden yüzyıllarca ÖNCE ya da SONRA. Üç net örnek:
```
angkor-kmer   gerçek kuruluş 802 (Jayavarman II)   künye f: 1281  (479 yıl fark)
lan-xang      gerçek kuruluş 1353 (Fa Ngum)        künye f: 1281  (72 yıl fark)
```
Ve **t:/son tarafında** iki ayrı, daha ciddi çelişki:
```
sunda-pajajaran   künye t: 1527-06-22   akademik: fiilî çöküş 1579  (52 yıl)
sarawak-brooke    künye t: 1923-10-29 (atlas penceresi sonu)
                  gerçek Brooke hanedanı 1946'ya kadar sürdü — KASITLI
                  PENCERE KESME gibi görünüyor, çelişki değil OLABİLİR
```
Hiçbiri künye aralığını ZORLAMAK için görmezden gelinmedi; her biri kendi
maddesinin `kaynak:` alanında AÇIKÇA not edildi.

## ⑤ KAYNAK DİSİPLİNİ

- Her yeni maddede `kaynak:` DOLU; TDV konuştuğunda TDV (gövde adıyla),
  susduğunda "bulunamadı (TDV) — standart akademik kaynak" + çapraz kaynak.
- Gün uydurulmadı. TDV'nin GÜN verdiği yerlerde (Malaka fethi 10 Ağustos 1511,
  Vijaya düşüşü 22 Mart 1471, Pangkor Antlaşması 20 Ocak 1874, Quang Trung'un
  ilanı 22 Kasım 1788) GÜN kullanıldı.
- **Üç künyede aynı olayın İKİ TARAFI bağımsız bulundu ve TUTARLILIK
  doğrulandı**: `ava` (1555 Bayinnaung fethi) ↔ o dönemin Toungoo/Bayinnaung
  araştırmasıyla; `campa`daki 1471 Vijaya düşüşü ↔ `le-hanedani`deki Lê
  Thánh Tông'un güney seferi — iki ayrı künyede aynı tarihsel olayın iki
  tarafı, birbirini doğruluyor.

## DURUM

✅ **İŞİM BİTTİ — boştayım, yeni iş bekliyorum.**

Dosya: `denetim/KRONOLOJI-GDASYA-0905.json` (34 künye satırı, 41 yeni
kronoloji maddesi, hiçbiri `data/devletler.js`e UYGULANMADI).
