# SEFER-OKU-0087 — haritadaki sefer okları (paket 0087 · H-0001 · H-0002 · H-0005 · H-0006 · H-0013 · H-0020 · H-0021)

Oturum: SEFER-OKU-0087 (UMIT) · görevi veren UMIT İRTİBAT · ağaç `C:\atlas-sefer` =
`origin/makine/umit` `d16c2b0f` · commit/push yok · veri değişikliği yalnız DIFF (UYGULANMADI).

## 0. ÖNGÖRÜ — tarayıcı ölçümünden ÖNCE (kod + veri okunmuşken, sayfa açılmadan)

Mükerrer kapısı (§2): `denetim/` altında SEFER-OK-0070 · 0075 · 0077 · UC-0080 · OLCUM-SEFER-KIRPMA-0912
var. Bu yedi maddeden hiçbiri orada ölçülmemiş: 0075 deniz oklarını `tur:"deniz"` evreninde
yönlendirdi, Rodos kaydı `tur:"kusatma"` olduğu için **evrenin dışında kaldı**; 0075'in kademe
altyapısı (`kademe:`) İbrahim Paşa için kuruldu, Yavuz'un Mısır seferine hiç uygulanmadı.

| madde | öngörülen kusur sınıfı | mekanizma (koddan) |
|---|---|---|
| H-0001 Şahkulu | **arayüz + veri** | ok `SEFERLER`de değil: `app.js isyanYayilmaUret()` iki SAVASLAR isyan işaretini (Teke 1511-03-01 · Sivas 1511-07-02) birleştirip **Sivas gününde** çiziyor ve `sure:400` gün tutuyor ⇒ isyan liderinin öldüğü gün belirip **13 ay** haritada kalıyor |
| H-0002 Çaldıran | **kusur YOK** | `a4-caldiran-gidis-1514` güzergâhı TDV'den: `selim-i` "İzmit'ten hareket edip Konya'ya, oradan Kayseri üzerinden Sivas'a" · `caldiran-savasi` "Yenişehir, Seyitgazi ve Konya üzerinden Sivas'a". Konya geçişi KAYNAKLI |
| H-0005 / H-0006 Mısır | **veri** (altyapı var) | kayıtta `kademe` yok ⇒ ilk görünür günden tam boy (İstanbul→Kahire). Ayrıca güzergâh kaynaksız: İstanbul→**Sivas**→Kayseri (geri dönüş zikzağı) → Elbistan; TDV Akşehir · Konya ovası · Malatya ovası diyor |
| H-0013 / H-0020 Rodos deniz oku | **veri** | `tur:"kusatma"` ⇒ kavisli çizilir, `rota` yok, 0075 yönlendirmesinin dışında. Düz `yol` ne_10m_land üstünde ~230 km |
| H-0021 Bodrum 1523-01-05 | **veri** | Rodos kaydı `t:"1523-01-05"`; `_tiKirpik` = `t`den SONRAKİ ilk madde ⇒ ok TAM o maddenin gününde hâlâ görünür |

Sayısal öngörüler (tarayıcıda ölçülecek): ① 1523-01-05'te Rodos oku çizili (EVET) · ② 1516-06-05'te
Mısır okunun nokta sayısı 11 (tam boy) · ③ 1511-07-02'de Şahkulu oku çizili, 1512-07-01'de HÂLÂ çizili ·
④ Rodos önerisinde `t:"1523-01-02"` ⇒ 1523-01-05'te gizli, 1523-01-01'de görünür.

---

## 1. HÜKÜM

| madde | sınıf | çare | durum |
|---|---|---|---|
| H-0001 Şahkulu | **arayüz** (üretilmiş ok) | `yayilma_oku:false` (veri) + 1 satır `app.js` | diff · ölçüldü: ok ÜRETİLMİYOR, 🔥 işaretleri yerinde |
| H-0002 Çaldıran | **kusur YOK** — güzergâh TDV'li | yok | cevap: evet, belli; Konya üzerinden gidildi (TDV iki maddede) |
| H-0005 / H-0006 Mısır | **veri** (altyapı 0075'ten beri VAR, kullanılmamış) + **güzergâh kaynaksızdı** | yeni `yol` (TDV istasyonları) + `kademe` (9 basamak, hepsi madde günü) | diff · ölçüldü: 9 basamakta ok ordu ile ilerliyor |
| H-0013 / H-0020 Rodos deniz oku | **veri** | kayıt ikiye ayrıldı: donanma (`tur:"deniz"` + `rota`) · padişah kara kolu | diff · ölçüldü: kara üstü 231 km → **2,1 km** (katı ölçü) |
| H-0021 Bodrum 1523-01-05 | **veri** (`t` kaynaksız) | `t` 1523-01-05 → **1523-01-02** (TDV `suleyman-i`) | diff · ölçüldü: 1523-01-05'te GİZLİ, 01-01 ve 01-02'de görünür |

`app.js` değişikliği **3 satır** (`isyanYayilmaUret`, yorum dahil) ve ZAMAN-Z2 APPJS diff'iyle (sürüm 4)
**çakışmıyor**: Z2'nin bu bölgeye en yakın hunk'ları `_isyanTarihYazi` ve `vurus` başlığı; ikisi de
dokunulan satırlarda değil. Ölçüldü: diff hem tabana hem taban+Z2'ye `git apply --check` TEMİZ.

## 2. NEREDE ÇİZİLİYOR (görev ①) — ölçüldü

- **Veri:** `window.SEFERLER` + `window.SEFERLER_*` (app.js `seferKayitlariniTopla`, ad alanı süzgeci);
  Yavuz/Kanunî kayıtları `data/savaslar.js` içindeki `window.SEFERLER`de (satır 594-). Şahkulu oku
  SEFERLER'de **yok**: `isyanYayilmaUret()` (app.js ~5398) SAVASLAR'daki aynı ad kökünü taşıyan
  `tur:"isyan"` işaretlerini ardışık oka çeviriyor.
- 🔴 **Yayın paketlenmiş veriyi okur:** `index.html` `savaslar.js`i doğrudan değil `data/paket_12.js`
  üzerinden yükler (`arac/paketle.py`). Kaynağı değiştirip paketi yenilemeyen ölçüm ESKİ veriyi
  ölçer — bu oturumun ilk "sonra" ölçümü tam buna düştü (aynı eski sonuç geldi). Diff uygulanınca
  **`py arac/paketle.py yenile` ŞART** (paket koordinatörün dosyası; diff'e konmadı).
  ⚠️ Yan bulgu: `paketle.py yenile` `origin/makine/umit` `d16c2b0f`de **`paket_13.js`in de bayat**
  olduğunu söyledi (`data/yerlesimler.js` değişmiş, paket yenilenmemiş) — bu oturumun değişikliği değil.
- **Görünürlük:** `seferGuncelle(t)` — ok `_fiKirpik <= t < _tiKirpik`. `_tiKirpik` = `t`den SONRAKİ ilk
  kronoloji maddesi (H-0021'in mekanizması). `_fiKirpik` = çapadan önceki madde, ama okun kendi
  süresinin yarısını aşamaz — kademeli okta `_fiKirpik = fi`.
- **Hat:** `seferHat(m,t)` — kademeli kayıtta `yol[0..i]`, `i` = günü ≤ t olan en büyük kademe;
  deniz/`rota`lı kayıt kıvrılmaz. ⚠️ `m.yol` burada ÇİZİM hattıdır: `rota` varsa kademe indisi
  `rota`ya göre verilir (Rodos donanmasında 3 = Gelibolu, 29 = Rodos) — bu sözleşme 0075'te
  yazılmamıştı, kayda yorum olarak eklendi.

## 3. ÖLÇÜM — önce / sonra (headless Chrome, gerçek `index.html`, app.js'in KENDİ işlevleri)

Alet: `node denetim/ARAC-SEFER-OKU-0087.js <port>` (`seferGuncelle` + `seferHat` çağırır, kopya hesap yok).
Görüntüler: `denetim/SINAV-SEFER-OKU-0087-sonra-*.png` (`ARAC-SEFER-OKU-GORSEL-0087.js`;
⚠️ ortadaki "tam ekran" penceresi kapatılamadı, haritanın ortasını örtüyor — sayısal ölçüm esastır).

**Mısır (H-0005/H-0006)**
```
gün          ÖNCE (uç)                 SONRA (uç = ordunun o maddedeki en ileri noktası)
1516-06-05   Kahire (tam boy, 11 nokta)  Üsküdar   (hareket günü — yalnız çıkış)
1516-07-30   Kahire                      Konya ovası
1516-08-24   Kahire                      Mercidâbık
1516-08-28   Kahire                      Halep
1516-09-27   Kahire                      Şam
1516-12-21   Kahire                      Şam  (Hanyunus'ta olan Sinan Paşa'nın öncüsü; padişah Şam'dan 15 Ara'da çıktı, konumu TDV'de yok)
1516-12-29   Kahire                      Celcûliye konağı (26 Ara)
1517-01-02   Kahire                      Gazze
1517-01-22   Kahire                      Ridâniye
1517-01-24   Kahire                      Kahire
```
**Rodos (H-0013/H-0020/H-0021)**
```
                 ÖNCE (tek kayıt, kusatma)        SONRA: donanma (deniz)        SONRA: padişah kara kolu
1522-06-04       gizli                            Gelibolu'ya kadar             —
1522-06-18/26    gizli (ok 09-18'e kadar yok!)    06-26: Rodos'a kadar          görünür → Marmaris
1522-12-21       görünür                          görünür                        gizli (fetih maddesinde düşer)
1523-01-01/02    görünür                          görünür                        —
1523-01-05       GÖRÜNÜR  ← H-0021                GİZLİ                          —
kara üstü (ne_10m_land, liman muafiyetsiz katı ölçü):  ÖNCE düz yol 231,2 km · SONRA rota 2,1 km (en büyük bacak 0,95)
```
Ek bulgu: eski Rodos oku Haziran-Eylül arasında HİÇ görünmüyordu (`_fiKirpik` yarıçap kuralı ⇒
1522-09-18); "adaya varış" (06-26) maddesinde ok yoktu. Kademe bunu da kapatıyor.

**Şahkulu (H-0001):** ÖNCE 1511-07-02 → 1512-08-06 arası (Sin Kalesi maddesine kadar, **~13 ay**)
görünür · SONRA ok üretilmiyor (ölçüm listesi boş), 🔥 işaretleri dokunulmadı.

**Çaldıran (H-0002):** ölçüm yalnız teşhis için: tek parça, kademesiz, 1514-03-20'den tam boy görünür.
Emre'nin sorusu güzergâh; TDV'ye uygun. (İsterse aynı kademe çaresi buraya da uygulanabilir — istenmedi,
yapılmadı.)

## 4. KAYNAK — TDV (HTTP 200, gövde okundu; alıntılar birebir)

- `selim-i`: Mısır istasyonlarının tamamı (yukarıdaki diff'in `kaynak:` alanında birebir). Çaldıran:
  *"İzmit'ten hareket edip Konya'ya, oradan Kayseri üzerinden Sivas'a ulaştı"*.
- `ridaniye-savasi`: Ridâniye konumu, Gazze → Arîş → Sâlihiye → Hankin/Birketülhac menzilleri.
- `suleyman-i`: Rodos — donanma 4 Haziran, padişah 18 Haziran kara yoluyla; *"İznik, Kütahya, Denizli,
  Çine, Muğla yolundan Marmaris'e ulaştı (2 Ramazan / 26 Temmuz)"*; 2 Ocak 1523 adadan ayrılış.
- `rodos`: 16 Haziran 1522 sefere çıkış · 20 Aralık 1522 fetih · 1 Ocak 1523 L'Isle Adam'ın ayrılışı.
- `sahkulu-baba-tekeli`: Keçiborlu-Sandıklı-Altıntaş → Kütahya → Alaşehir → Antalya'ya dönüş → Sivas
  yakınında Çubuk (Gökçay).
- `mercidabik-savasi`: **HTTP 302 — ÖLÜ slug** (tuzak ①). Mercidâbık konumu SAVASLAR'daki işaretten.

## 5. BULUNAMADI

- Mısır seferinde **Konya ovası ile Malatya ovası arası** yol (Kayseri? Elbistan?) TDV'de YOK — bacak düz.
- 30 Temmuz 1516'da ordunun nerede olduğu TDV'de yok (ok o maddede Konya ovasında, kaynaklı en ileri nokta).
- Rodos donanmasının Ege'deki ara durakları — kaynakta yok; `rota` türetilmiş çizimdir.
- Celcûliye, Arîş, Sâlihiye, Çine atlas noktası değil — koordinatlar ŞEMATİK, kayıtlarda `kesinlik` alanında yazılı.
- 1522-06-26 "adaya varış" maddesinin kaynağı bu oturumda doğrulanmadı (kademe günü olarak kullanıldı).

## 6. KRONOLOJİ BULGULARI (H-0006 "kronolojiyi kontrol edelim") — DÜZELTİLMEDİ, öneri

1. 🔴 `data/olaylar.js:71` **Mercidabık Zaferi** `t:"1516-08"` (ay) ama `gun:"24 Ağustos 1516"` ⇒ madde
   1 Ağustos'a sıralanıyor, yani Malatya'dan çıkıştan (6 Ağu) ve Antep'ten (20 Ağu) ÖNCE. Bu `CLAUDE.md §8`'in
   tarif ettiği kusur. Öneri: `t:"1516-08-24"`. (Değişmez 2 evreni dosyası; tek satır, `denetle.py` ile sınanmalı.)
2. `olaylar_ek5.js:155` (1516-07-30) `yer:"Anadolu ordugâhı (Sivas–Elbistan hattı)"` — TDV o günün yerini
   vermiyor; "Sivas" eski kaynaksız güzergâhla aynı varsayım. Öneri: yer alanından Sivas kaldırılsın.
3. Kudüs'e giriş: madde 29 Aralık (`kudus`), TDV `selim-i` *"30 Aralık'ta şehre girerek"* — iki TDV maddesi
   çelişiyor (tuzak ⑥), bildirildi.
4. Rodos'un teslimi: kronoloji 21 Aralık (`olaylar.js:79`, `kronoloji_rodos_sovalyeleri.js:248`); TDV `rodos` ve
   `suleyman-i` **20 Aralık** (1 Safer 929). TDV esas.
5. SAVASLAR'da **iki Mercidâbık işareti** (36.553/37.152 ve 36.60/37.00) ve **iki Ridâniye** (30.089/31.283 ve
   30.06/31.28) — mükerrer; haritada iki ⚔ çıkıyor olabilir (ölçülmedi).

## 7. DOSYALAR

- `denetim/SEFER-OKU-0087.diff` — `data/savaslar.js` (+58/−6) + `js/app.js` (+3). Temel `origin/makine/umit`
  `d16c2b0f`; `git apply --check` taban ✓ · taban+ZAMAN-Z2-1008-APPJS ✓ · CR 0.
  Sahiplik: `savaslar.js` ve `app.js` GOREV-ORTAK §2'nin koordinatör listesinde değil ⇒ KOORD diff'i yok.
  Uygulandıktan sonra: **`py arac/paketle.py yenile`** (paket_12 — koordinatör) + `py arac/denetle.py`.
- Aletler: `ARAC-SEFER-OKU-0087.js` (görünürlük/hat) · `ARAC-SEFER-OKU-GORSEL-0087.js` (görüntü).
- Görüntüler: `SINAV-SEFER-OKU-0087-sonra-{rodos-0626,rodos-0105,misir-0605,misir-0824,misir-0102,sahkulu-0702}.png`.
- Rota üretimi: `ARAC-SEFER-OK-DENIZ-ROTA-0075.py` (mevcut alet) + Çanakkale Boğazı orta hattı ne_10m_land'in
  iki kıyısının ortasından (alet 0,01° hücrede boğazı kesip 10,8 km kara bırakıyordu; orta hat 0,33 km).
