# UYGULA-BAGDAT — YAMA-BAGDAT-0914 uygulaması

> **Oturum:** UYGULA-BAGDAT · **Koordinatör:** 1.MURAT · **Tarih:** 14 Eylül 2026
> **Girdi:** `denetim/ARASTIRMA-BAGDAT-0914.md` · `denetim/YAMA-BAGDAT-0914.json`
> **Hükümler:** M-3946 (Kerkük (a), C/F onay, yer_yama dosyaları açık) · M-3952 (Şehrizor yama girdisi (a), sıra) · TEMIZ M-3951/M-3953 (olaylar.js serbest)
> **Motor koşulmadı. Commit atılmadı.**

---

## 0. ÖZET — sayıyla

| kalem | durum | kayıt |
|---|---|---|
| A · Bağdat eyaleti 12-25 → 12-24 | ✅ UYGULANDI | 15 yerleşim |
| B · Şehrizor Safevî bitişi → 1630-03-16 | ✅ UYGULANDI | 1 |
| C · Halepçe | ⛔ UYGULANMADI (onay M-3946) | 0 |
| D · Kerkük Safevî 1624 → 1625 | ✅ UYGULANDI — **kaynak çelişkisi bildirildi, hüküm 1.MURAT (a)** | 1 |
| E · Musul yeni Safevî dilimi 1624 → 1625 | ✅ UYGULANDI | 1 |
| F · Erbil | ⛔ UYGULANMADI (onay M-3946) | 0 |
| K1-K5 · kuyruk madde · slug · halka | ✅ UYGULANDI | 5 dosya |
| M1-M3 · yeni çekirdek madde | ✅ YENİ `data/olaylar_p0053.js` | 3 madde |
| H · halka | ✅ YENİ `data/kaynakli_halka_bagdat.js` | 9 kayıt |
| yer_yama emekliliği (M-3946 ⑤) | ✅ 16 + 16 girdi emekli · Şehrizor 2 girdi yerinde düzeltildi | 34 |
| Kotur | 📝 YAZILMADI — öneri §6 | 0 |

## 1. DOSYALAR (adıyla)

```
DEĞİŞTİ   data/yerlesimler.js                 18 satır (A 15 · B · D · E)
DEĞİŞTİ   data/kronoloji_iran.js               9 satır (K1 · K2 · K3 slug x2 + yorum satırı 33)
DEĞİŞTİ   data/olaylar.js                      1 madde (K3 slug + K4 sınır cümlesi + ic_not_d)
DEĞİŞTİ   data/yer_yama.js                     4 satır (619/626 t+b bağı · 545/548 slug)
DEĞİŞTİ   data/kaynakli_halka_kronoloji.js     1 satır (K5 — üretici kuru koşusunun BİREBİR kaydı)
DEĞİŞTİ   data/yer_yama_manda_0906.js          16 girdi EMEKLİ (yorum) + Şehrizor safevi t
DEĞİŞTİ   data/yer_yama_ok109_fetret.js        16 girdi EMEKLİ (yorum) + Şehrizor safevi t
YENİ      data/olaylar_p0053.js                window.OLAYLAR_P0053 — 3 madde
YENİ      data/kaynakli_halka_bagdat.js        window.KAYNAKLI_HALKA_BAGDAT — 9 kayıt
YENİ      denetim/UYGULA-BAGDAT-0914.md        bu rapor
```
Her dizgi değişikliği assert ile **dosyada/kayıt satırında tam 1 eşleşme** şartıyla yapıldı; yazımdan sonra her dosya `node --check` ✓.

### 🔴 BAĞLANMASI GEREKEN İKİ SATIR (koordinatör / PAKET-UI4)
```html
<!-- index.html — satır 1013 (olaylar_p0052.js) ALTINA -->
<script src="data/olaylar_p0053.js?v=r8232"></script>
```
```js
// js/app.js — _KAYNAKLI_HALKA_DOSYA_ADLARI dizisine (index.html'de <script> YOK, VERI-YAPISI halka şeması)
  "kaynakli_halka_bagdat",     // window.KAYNAKLI_HALKA_BAGDAT — UYGULA-BAGDAT: Bağdat 1623-1639 (YAMA-BAGDAT H)
```
⚠️ İkisi bağlanana kadar `denetle_yayin.py` ikisini **yetim** sayar (ölçüldü, §5).

---

## 2. YERLEŞİM YAMALARI

### A — 15 nokta (Tikrit · Âne · Hânekîn · Sâmerrâ · Hît · Fellûce · Kerbelâ · Kût el-Amâre · Hille · Vâsıt · Kûfe · Necef · Dîvâniye · Tuz Hurmatu · Kifri)
`s safevi 1623-11-28→1638-12-25` → `→1638-12-24` · `d 1638-12-25→1917-03-11` → `1638-12-24→`.
d dönemine `kaynak:` yazıldı: *gün komşudan: Bağdat · TDV murad-iv «Ertesi gün (17 Şâban 1048 / 24 Aralık 1638 Cuma) kale kumandanı Bektaş Han, Bağdat'ı teslime karar verip»* — cümle bu oturumda gövdeden (HTTP 200) yeniden okundu. Dönemin kendisinin (1623-1638) kaynaksız olduğu da yazıldı.
⚠️ Kayıtların yarısı `d:` dizisini boşluklu (`{f:"…", t:"…"}`) yazıyor; ilk betik bunu görmeyip **yazmadan** durdu, ikinci betik iki yazımı da kabul edip toplam eşleşmeyi 1'e bağladı.

### B — Şehrizor
`s safevi 1623-11-28→1630-03-16` · `d 1630-03-16→1918-10-30` (önceki `d.f 1638-12-24` ile `s.t 1638-12-25` **1 gün örtüşüyordu, kapandı**).
Kaynak: TDV `sehrizor` «Gülanber Kalesi, Hüsrev Paşa zamanında yeniden inşa edildi (1630)» (**okundu**) · TDV `murad-iv` «Şehrizol Kalesi'ni (Gülanber) tamir ettirdi» (**okundu**) · gün Kılıç 2001 «16 Mart 1630» — 🟡 **makaleyi ARAS-BAGDAT okudu; bu oturumda erişilemedi** (remzikilic.com HTTP 000). 1630 sonrası tarihsiz yeniden kayıp (Koç/Evliya) **modellenmedi, kayda NOT olarak yazıldı.**

### C — Halepçe: UYGULANMADI
TDV `sehrizor` gövdesinde **«Halepçe» 0 geçiş**; TDV `kerkuk` 0 geçiş. Kaynak Halepçe'yi Şehrizor'un kazası/nahiyesi olarak yazmıyor ⇒ brief hükmü gereği bugünkü gün kaldı. Halepçe zaten `1638-12-24`'teydi (A hizası yapılacak bir şey yok); Şehrizor örtüşmesi B ile kapandı.

### D — Kerkük: UYGULANDI, ama önce ÇELİŞKİ BİLDİRİLDİ (M-3942)
🔴 Araştırma raporu *"TDV-kerkuk 1623-26 dönemini ANMIYOR"* diyordu. **Gövde okundu, ANIYOR:**
> TDV `kerkuk`: *«1033'te (1624) Bağdat'ı alan Safevîler Kerkük'ü ele geçirdilerse de Hüsrev Paşa tarafından 1039'da (1630) geri alındı.»*

TDV `musul--irak` ise *«1035'te (1625) … Kerkük de dahil bölgeyi kontrol altına aldı»* diyor ⇒ **iki TDV maddesi bitişte 1625 / 1630.** Uygulama durduruldu, taraf seçilmedi. Koordinatör hükmü (a): **1624→1625, güven orta** (musul--irak + Kılıç 2001'in 1627 «Kerkük Beylerbeyisi Bostan Paşa» idare kaydı). Kayda iki TDV cümlesi yan yana ve **«KAYNAKLAR AYRIŞIR: TDV kerkuk maddesi 1630 der»** yazıldı.
Yazılan: `d 1534-12-04→1624-01-01 {kesinlik f:gun t:yil}` · `s safevi 1624-01-01→1625-01-01 kesinlik:"yil"` · `d 1625-01-01→1918-10-30 {kesinlik f:yil t:gun}`.
⚠️ Ayrıştırma notu: `kerkuk` cümlesindeki «1033'te (1624)» **Bağdat'ın alınışını** tarihliyor, Kerkük'ün Safevî'ye geçişini değil (§4 ⑧ / D073) ⇒ Kerkük için Safevî halkası yazılmadı.

### E — Musul
`d 1516-08-24→1624-01-01 (y:kusatma, kesinlik f:gun t:yil)` · `s safevi 1624-01-01→1625-01-01 kesinlik:"yil"` · `d 1625-01-01→1918-11-08 (y:antlasma, kesinlik f:yil t:gun)`.
`y:` dönemi **bitiren** biçimdir (VERI-YAPISI örneği: 1912 `y:"savas"`) ⇒ 1624 bitişine `kusatma` (Çerkez Ahmed Paşa «birkaç gün şehri savunduysa da»), 1918 bitişi yamadaki `antlasma` korundu.
Yan etki (yamanın kendi `yan_etki` satırı): Musul'a `m:` ile bağlı Zaho · Duhok · Akra · Rewândiz · Telafer · Sincar · İmâdiye 1624 boyunca Değişmez 3 çiftleri üretir — bilinçli bırakıldı.

### F — Erbil: UYGULANMADI
TDV `musul--irak` Erbil'i yalnız 1587 sancak listesinde ve 1743 Nâdir Şah olayında anıyor; **1624-25 olaylarında adıyla yok** («havalisi» Kılıç'ta). ⇒ Erbil `1623-11-28→1638-12-25` safevi olarak kaldı. ⚠️ Sonuç: H-0002'nin **bir günlük ayrışması Erbil için sürüyor** (12-25).

### Gün taraması
18 kayıtta 1620-01-01 → 1640-01-01 her gün: **sahipsiz gün 0 · çift sahip gün 0.**

---

## 3. KRONOLOJİ, SLUG, HALKA

### K1 · `kronoloji_iran.js` «Bağdat Osmanlı'ya kesin olarak kaybedildi»
`t 1638-12-25 → 1638-12-24` · `d` yeniden yazıldı («1623'te kısa süreliğine geri alınmasının» yanlışı kalktı) · `kaynak` → `murad-iv` + okunan cümle.
### K2 · aynı dosya «Bağdat'ın geçici olarak geri alınması»
`t 1623-01-14 → 1623-11-28` · `b` → «Bağdat'ın Safevîlerce ele geçirilmesi» · `d` yeniden · `kaynak` → `bagdat` + okunan cümle («iç kaleyi Safevîler'e teslim etti (28 Kasım 1623)»).
### K3 · ölü slug
Sınandı: `kasrisirin-antlasmasi` **HTTP 200**, `<title>` **«KASRIŞÎRİN ANTLAŞMASI - TDV İslâm Ansiklopedisi»**, gövdede «Bağdat, Basra ve Şehrizor bölgesi Osmanlılar'da kalmış, Revan ise Safevîler'e bırakılmıştır». `kasr-i-sirin-antlasmasi` **302**.
Değişen yerler: `olaylar.js` (1639 maddesi) · `kronoloji_iran.js` 185 · 199 (K1 ile `murad-iv` oldu) · 203 · yorum 33 · `yer_yama.js` 545 · 548 · 619 (K1 ile `murad-iv`) · `kaynakli_halka_kronoloji.js` 55 (K5).
**Kalan geçiş (`data/`):** `ekokuma_kasrisirin.js:17` (ölü slug listesi — DOĞRU, EK-A dosyası) · `kronoloji_iran.js` 33/185/203'teki «eski … 302 ÖLÜ» notları (kasıtlı) · 🟡 `kronoloji_safevi.js:46` **yorum satırı** hâlâ ölü slugu «doğrulanmış» listesinde sayıyor — kilit istenmediği için DOKUNULMADI, borç.
### K4 · `olaylar.js` Kasr-ı Şirin maddesi
Sınır cümlesi eklendi (Bedre · Cessân · Mendelî · Derteng · Derne Osmanlı'ya; Zencir yıkılacak; Zalim çevresi ve Kızılca Osmanlı'da, Avroman ve Mihriban İran'da; Kotur · Mâkû · Mağazberd iki tarafça yıkılacak). `kaynak` → `kasrisirin-antlasmasi + Kılıç 2001 + BFSP 105`; `ic_not_d`: metni ARAS-BAGDAT okudu, **Hânekîn metinde yok, bilerek yazılmadı.**
⚠️ İlk yazım **`OSError: [Errno 22] Invalid argument`** verdi (OneDrive kilidi olası). Dosya **bozulmadı** — ölçüldü: 67.102 bayt, `node --check` ✓, TEMIZ'in 6 cümlesi yerinde. İkinci deneme önce scratchpad'e yazıp sözdizimini sınadı, sonra node ile yazdı: ölü slug 0 · yeni kaynak 1 · TEMIZ cümlesi 6.
### `yer_yama.js` t+b bağları
619: `t 1638-12-25 → 12-24` · 626: `t 1623-01-14 → 1623-11-28` + yeni başlık (hem `b` hem `not` içindeki alıntı). A2-BAG: HATA 0 (§5).
### K5 · `kaynakli_halka_kronoloji.js:55`
Dosya **🤖 ÜRETİLMİŞ — ELLE DÜZENLEME**. Üretici (`denetim/ARAC-HALKA-KRONOLOJI-TURET-0913.js`) `--yaz` ile koşulmadı: kuru koşu **6 başka kaydı değiştiriyordu** (3 fark + 3 yeni). Bunun yerine K1 sonrası kuru koşunun ürettiği `kr-bagdat-osmanli-1638` kaydı **birebir** yazıldı (1638-12-24 · `murad-iv`) ⇒ yeniden üretimde değişmez.
🟡 **MÜKERRER KALDI:** `kaynakli_halka_fetih.js:44 hf-bagdat-1638` aynı tanıklığı (1638-12-24 · murad-iv) taşıyor. Silmek üretilmiş dosyayı elle düzenlemek olurdu ve bir sonraki `--yaz` geri getirir ⇒ çare üreticide (fetih dosyasıyla tekilleştirme). Borç.

### M1-M3 · YENİ `data/olaylar_p0053.js` (kapsam:"ic")
| no | t | b | kaynak | not |
|---|---|---|---|---|
| M1 | 1624-01-01 · yil | Musul ve Kerkük'ün Safevî eline geçmesi | musul--irak · hafiz-ahmed-pasa · kerkuk + Kılıç 2001 | abbas-i karşı cümlesi `ic_not_d`'de |
| M2 | 1625-01-01 · yil | Musul'un Safevîlerden kurtarılması — Hâfız Ahmed Paşa'nın Bağdat seferi | musul--irak · hafiz-ahmed-pasa · kerkuk + Kılıç 2001 | **Kerkük 1625/1630 çelişkisi metinde ve `ic_not_d`'de açık**; yer_id Musul |
| M3 | 1630-03-16 | Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden kurması | sehrizor · murad-iv + Kılıç 2001 | gün Kılıç (ARAS-BAGDAT okuması) |
Bütün TDV cümleleri bu oturumda gövdeden yeniden okundu (`musul--irak` · `hafiz-ahmed-pasa` · `kerkuk` · `sehrizor` · `murad-iv` · `bagdat` · `abbas-i`, hepsi 200).

### H · YENİ `data/kaynakli_halka_bagdat.js` — 9 kayıt
```
bg-sehrizor-osmanli-1630-kilic   Şehrizor osmanli 1630-03-16 gun   Kılıç 2001 (ARAS-BAGDAT okuması)      H1
bg-sehrizor-osmanli-1630-tdv     Şehrizor osmanli 1630 yil          TDV sehrizor (okundu)                 H1 ek
bg-mendeli-osmanli-1639          yer_kon Mendelî  1639-05-17 gun    Kılıç 2001 Osmanlıca metin            H2
bg-bedre-osmanli-1639            yer_kon Bedre    1639-05-17 gun    aynı                                  H3
bg-cessan-osmanli-1639           yer_kon Cessân   1639-05-17 gun    aynı                                  H4
bg-musul-safevi-1624             Musul safevi 1624 yil              TDV musul--irak (okundu)              H5a
bg-kerkuk-osmanli-1625           Kerkük osmanli 1625 yil            TDV musul--irak (okundu)              H5b
bg-kerkuk-osmanli-1630           Kerkük osmanli 1630 yil            TDV kerkuk (okundu)                   hüküm (1)
bg-hille-osmanli-1629            Hille osmanli  kesinlik BELİRSİZ   TDV murad-iv (okundu)                 H6 ⚠️
```
Şemadan sapmalar ve sebepleri:
- **`tur` hiçbir kayda yazılmadı** — şema: *"kaynak ayırmıyorsa YAZILMAZ"*; öneriler `dogrudan` diyordu, kaynaklar doğrudan/tâbi ayırmıyor.
- **H6 Hille:** öneri `1630-01-01 yil`. Cümledeki tarih (10 Haziran 1629) **seferin başlangıcını** tarihliyor, zaptı değil; zapt 1629 Haziran ile 5 Mayıs 1630 arasında anlatılıyor ⇒ yıl kaynakta YOK ⇒ `kesinlik:"belirsiz"` (şema gereği ÇİZİLMEZ). Hassasiyet kaynağı aşamaz (§4).
- **Kerkük iki nokta** (1625 · 1630), ikisi de osmanli, kural ⑦ gereği ikisi de duruyor.
- Kılıç 2001 alıntıları: `not` alanında *"ARAS-BAGDAT okudu"* açıkça yazılı.

---

## 4. YER_YAMA EMEKLİLİĞİ (M-3946 ⑤ · M-3952)

**Sebep:** `arac/_sahiplik_uygula.py` `data/yer_yama*.js` glob'uyla okuyor; `yer_yama_manda_0906.js` (58 girdi) ve `yer_yama_ok109_fetret.js` (31 girdi) Irak noktalarını **`safevi 1623-11-28→1638-12-25`** taşıyan tam `s:` dizileriyle tutuyordu ⇒ uygulansalar A/B/D'yi geri alırlardı (D017).

**Kayıp sınavı (emeklilikten ÖNCE):** emekli adayının her s/d/v dönemi, 1623-1638 dilimi dışında, canlı `yerlesimler.js`'te var mı?
```
16 aday (A 15 + Kerkük)   her iki dosyada   KAYIP 0   ⇒ EMEKLİ (yorum satırı + not, silme yok)
Şehrizor                  her iki dosyada   🔴 KAYIP RİSKİ: 1918-10-30→1921-08-23 ingiltere ·
                                            1921-08-23→1923-10-29 irak-kralligi — canlı veride YOK
```
⇒ Şehrizor emekli EDİLMEDİ; sorun M-3949'la soruldu, hüküm (a): iki girdide **yalnız** safevi `t 1638-12-25 → 1630-03-16`, yanına yorum notu. Manda bölünmesi olduğu gibi.
🟡 **BORÇ:** Şehrizor'un 1918/1921 manda bölünmesi veriye **inmemiş** — bu uygulamanın konusu değil, uygulanmadı.

**Sonuç:** her iki dosyada `// EMEKLİ 14 Eylül 2026, UYGULA-BAGDAT …` başlığı **16** kez · kalan canlı girdi 42 / 15 · `1638-12-25` taşıyan canlı girdi yalnız **Erbil** (F uygulanmadı ⇒ doğru) · `node --check` ✓ ✓.

**Uygulayıcı kuru koşusu (`py arac/_sahiplik_uygula.py`, yazmadan):** İNEN 15 adın **hiçbiri** Irak kümesi değil. Şehrizor → `ÇAKIŞMA: manda_0906 vs ok109_fetret vs uyg3 — KARAR GEREK` (uygulanmaz). Musul → `KAPSAM DARALDI — 1624-01-01→1625-01-01` (atlanır, E korunur). ⇒ **A · B · D · E'yi geri alan yol yok.**

---

## 5. KABUL ÖLÇÜMLERİ — önce / sonra

| denetim | ÖNCE | SONRA | not |
|---|---|---|---|
| Değişmez 1 sahipsiz | 324 (beklenen 324) | **324** ✓ | artmadı |
| Değişmez 1c belgesiz | 4 (tavan 4) | **4** ✓ | |
| Değişmez 1b beyansız boşluk | 0 | **0** ✓ | |
| Değişmez 2 | 531 kırılma · 0 açık | **534 · 0 açık** ✓ | +3 = 1624-01-01 · 1625-01-01 · 1630-03-16, üçü de p0053 maddeli. 1638-12-25 kırılması **Erbil yüzünden** sürüyor (F), madde 12-24'e ±1 |
| Değişmez 2s | 1329 · 100 açık (tavan 121) · 355 kapsam dışı | **1330 · 100 açık** · 353 ✓ | |
| Değişmez 2i | 65 · 3 açık (tavan 3) | **65 · 3** ✓ | |
| Değişmez 2t kırılmasız madde | 15 (tavan 42) | **15** ✓ | |
| Değişmez 3z | m: 481 · kd: 475 · 192 | **481 · 475 · 192** | |
| Değişmez 4 | 6 | **6** ✓ | |
| Değişmez 4c | 129 | **129** ✓ | kötüleşmedi |
| Değişmez 4d | 356 | **356** ✓ | kötüleşmedi |
| Değişmez 4s | 5 | **5** ✓ | |
| Değişmez 5 | 0 | **0** ✓ | |
| Değişmez 7 | 658 (beklenen 658) | **658** ✓ | **değişmedi** — kalem yazmaya gerek yok |
| Ek · dönem sağlığı | 0 / 0 / 0 | ⚪ **ÖLÇÜLEMEDİ** | aşağıdaki not |
| Ek · mükerrer madde | ✗ 1 (1711 Baltacı — PAKET-TEMIZ M-3950, benden önce) | ⚪ **ÖLÇÜLEMEDİ** | aşağıdaki not |
| Ek · konum | 0 | ⚪ **ÖLÇÜLEMEDİ** | aşağıdaki not |

⚪ **"Sonra" koşusunun çıktısı KIRPIK:** dosya 195 satırda, Değişmez 5c'nin ortasında bitiyor; Ek denetim satırları ve `SONUÇ` satırı **yok**. Değişmez 7 = 658 satırı koşu sürerken (197. satırda) okundu, son dosyada yok. Koordinatörün TOPARLA emri (limit %95, yeni kalem açma) nedeniyle **yeniden koşulmadı** ⇒ üç Ek denetim satırı ve çıkış kodu bu rapor için **ölçülmedi**. Bir sonraki oturum `py arac/denetle.py` ile kapatmalı. Dönem sağlığı için bu paketin kendi kanıtı: 18 kayıtta 1620-1640 gün taraması boşluk 0 · çift 0 (§2).
| `node denetim/ARAC-A2-BAG-0913.js --hepsi` | 602/602 · HATA 0 · UYARI 146 | **603/603 · HATA 0 · UYARI 150** ✓ | +4 uyarı BENDEN, aşağıda |
| `py arac/denetle_yayin.py` yetim | — | **2 / 339** | `olaylar_p0053.js` · `kaynakli_halka_bagdat.js` — BEKLENEN, §1 satırları |

**A2-BAG'in +4 uyarısı (K1/K2'nin doğrudan sonucu, HATA değil):** kuyruk maddeleri artık çekirdek maddeyle **aynı gün + aynı yer** taşıyor, `tarih|yer` bağları iki maddeye düşüyor:
```
antlasma-kasrisirin-1639-muzakere   "1638-12-24|Bağdat"  → olaylar_ek5 «Bağdat'ın geri fethi» ‖ kronoloji_iran «Bağdat Osmanlı'ya kesin olarak kaybedildi»
sebep-sonuc-kasr-i-sirin-1639       "1638-12-24|Bağdat"  → aynı
sebep-sonuc-kasrisirin-arka-plan    "1623-11-28|Bağdat"  → olaylar_ek5 «Bağdat'ın Safevîlere kaybı» ‖ kronoloji_iran «Bağdat'ın Safevîlerce ele geçirilmesi»
sebep-sonuc-kasrisirin-arka-plan    "1638-12-24|Bağdat"  → aynı iki madde
```
Bağlar ek okuma dosyalarında (EK-A / TEMIZ) — dokunulmadı; çare bağı `tarih|başlık` önekiyle daraltmak.

`denetle_yayin.py`'nin öteki ✗ satırları (damga r8232 · çalışma ağacında 2 kod dosyası · YAYIN BAYAT) **bu paketten değil**: kod dosyaları PAKET-UI4'ün, bayatlık motor koşulmadığı için bekleniyor.

---

## 6. KOTUR — YAZILMADI, ÖNERİ

`data/yerlesimler_ek_ferhadpasa.js` Kotur `OSM → safevi` devrini 1639-05-17'de yapıyor. Antlaşma metni (Kılıç 2001 Osmanlıca aktarımı · BFSP 105) Kotur ile Mâkû'yu **devretmiyor**, «iki taraftan yıktırıla» diyor; kaydın kendi yorumu 1639 sonrası Osmanlı dayanağının bulunamadığını beyan ediyor ⇒ 1639 sonrası Safevî dolgusu **kaynaksız ama beyanlı**.
**Öneri:** (1) araştırma sevki — 1639 sonrası Kotur için kaynak: Kütükoğlu, *Osmanlı-İran Siyâsî Münâsebetleri* (ARAS-BAGDAT'ta erişilmedi) ve 1640'ların Van eyaleti kayıtları; (2) kaynak çıkana kadar kayıt olduğu gibi kalsın ama kayda **«antlaşma yıkım şartı koydu, devretmedi»** notu düşülsün; `Değişmez 1` «yıkılmış/tarafsız» ifade edemediği için dönem kısaltılamaz. (3) Kotur için halka YAZILMAZ (yıkım şartı bir sahiplik tanıklığı değil).

---

## 7. AÇIK KALANLAR / BORÇLAR (sayıyla: 9)

```
① Erbil 1638-12-25 ayrışması sürüyor (F uygulanmadı) — H-0002'nin tek kalan noktası
② Şehrizor 1918/1921 manda bölünmesi veriye inmemiş (iki yama dosyasında duruyor) + uyg3 ile ÇAKIŞMA kararı
③ kr-bagdat-osmanli-1638 ↔ hf-bagdat-1638 halka MÜKERRERİ — üretici tekilleştirmesi
④ kronoloji_safevi.js:46 yorum satırında ölü slug «doğrulanmış» listesinde
⑤ data/sehirler.js:205 Bağdat şehir kartı k: [1534-12-04→1624-01-01] · [1638-12-25→1917-03-11] — bayat (1623-11-28 / 1638-12-24 olmalı); dosya bu paketin değil
⑥ A2-BAG +4 uyarı (ek okuma tarih|yer bağları) — §5
⑦ Musul'a m: bağlı 7 kasaba ve m:"Şehrizor" taşıyan Tuz Hurmatu · Kifri · Kerkük · Erbil · Halepçe için Değişmez 3 çiftleri 1624 ve 1630-1638'de artabilir (3z sayıları değişmedi; tam tarama koşulmadı — ölçülmedi)
⑧ Kılıç 2001 bu oturumda yeniden okunamadı (HTTP 000) — Şehrizor günü, M3 günü, H1-H4 alıntıları ARAS-BAGDAT okumasına dayanıyor
⑨ index.html + app.js bağlama satırları (§1)
```

## 8. ARIZA VE İTİRAF KAYDI

- **`git pull` koşuldu** (tahta okumadan önce, yanlışlıkla): fast-forward `497e78a → b57a81c`, gelen yalnız tahta/denetim dosyaları; yerel değişiklik etkilenmedi. Koordinatöre bildirildi (M-3942), kayda geçti (M-3946 ⑦). Tekrarlanmadı.
- **Tahta M-3942:** araç *"commit tamamlanmamış olabilir … TEKRAR YAZMA"* dedi; `tahta.json` geri okumasında mesaj **VARDI** (§7.1⑤b — bu seferki arıza yalnız commit tarafında).
- **olaylar.js OSError 22** — §3 K4; veri kaybı yok, ölçüldü.
- İki hook engeli (backtick · heredoc) — betikler dosyaya yazılıp çalıştırıldı.
