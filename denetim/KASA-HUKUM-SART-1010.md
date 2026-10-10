# KASA-HUKUM-SART-1010 — koordinatör hükümlerinin ölçüm şartları (Kostajnica · Töton) + bir öz-düzeltme

Görev: YILDIRIM BAYEZIT (KAYNAK-SAHIP kararı ②) · Ölçen: KASA · `data/` DONUK · salt okuma · **main d50ddbedd**
(ÖZ-İLAN öngörüsü 891645569 mühürlenmeden önce de sonra da `main` güncellenmedi; bu dosya d50ddbedd'yi okur).

## ① Kostajnica → Seçenek A şartı: `fransa-cumhuriyet` penceresi 1809-1813'ü KAPSIYOR mu (§3.5)
- `devletler.js:797` `id:"fransa-cumhuriyet"` · **f `1792-09-22`** · **t `1945-09-02`** (`ic_not_t`: "pencere ucu,
  ölçüm değil (D210)").
- Künyenin kendi özeti: *"I. Cumhuriyet'in ilanından III. Cumhuriyet'e uzanan, rejim rejim değişen ama devlet kimliği
  süren dönem … **Napolyon'un İmparatorluğu**, Restorasyon, Temmuz Monarşisi, II. Cumhuriyet ve II. İmparatorluk hepsi
  TEK kayıtta."*
- ⇒ **KAPSIYOR.** 1809-10-14 (Schönbrunn) → 1813 künye ömrünün içinde; ad "cumhuriyet" ama kayıt İmparatorluğu
  ADIYLA içeriyor. **Hüküm A geçerli**, ardıl künye gerekmez.
- Uç: fiilî çekiliş 1813 güzü ↔ resmî 1815 (HE); şehir adlı fiilî gün bulunamadı ⇒ uç aynen, fark `ic_not`ta.

## ② Töton çift künyesi: `teuton-sovalyeleri` BOYALAR'da VAR MI (§9.1 motor tuzu)
- `arac/renkler.py`: `teuton-devleti` **YOK**, `teuton-sovalyeleri` **YOK** (grep `teuton|toton|tarikat` ⇒ 0
  satır). İki künyenin de `harita:` alanı YOK.
- ⇒ `teuton-sovalyeleri`'ni çekmek **motor tuzuna dokunmaz** ⇒ **FAZ 2** (TAM İNŞA kuyruğu değil).
- ⚠️ **Ama çekmenin iki tüketicisi var, `s:` değil KRONOLOJİ:**
  - `kronoloji_almanya.js:158` `{t:"1525-04-10", devlet:"teuton-sovalyeleri", b:"Töton Şövalyeleri Tarikatı'nın
    sekülerleşmesi — Prusya Dükalığı" …}`
  - `kronoloji_almanya.js:708` `{t:"1410-07-15", devlet:"teuton-sovalyeleri", b:"Grunwald (Tannenberg) Muharebesi" …}`
  - (+ `paket_08.js:3086` ve `:3636` aynı iki maddenin paket kopyası).
  ⇒ çekilirse bu iki madde `devlet:"teuton-devleti"`ye çevrilmeli; yoksa kronoloji künyesiz devlete işaret eder.
- ⚠️ **Königsberg `almanya 1281-1525` → `teuton-devleti` düzeltmesi BOYA ister:** `teuton-devleti` BOYALAR'da YOK ⇒
  dilim yazılırsa "UYARI boya: bilinmeyen devlet kimliği" yolundan **renksiz** çizilir (BOSLUK-CIZIM §1). Yani
  Königsberg düzeltmesi `renkler.py`'ye bir BOYA ekler ⇒ **o kalem motor tuzuna dokunur ⇒ TAM İNŞA kuyruğu.** (Ya da
  `teuton-devleti`'ne mevcut bir boya anahtarını `harita:` olarak vermek — o da `devletler.js`, senin dosyan.)
- Yan: kronolojinin 1525-04-10 sekülerleşme günü künyenin t'si 1525-04-08'in 2 gün DIŞINDA (künyenin kendi
  `ic_not_t`'si bunu zaten not ediyor: *"kronoloji_almanya.js sahibine bildirilecek"*).

## ③ ÖZ-DÜZELTME — KAYNAK-SAHIP §1.5-1'de yanlış sayı
İlk teslimde *"ikisi de 2'şer `s:` diliminde kullanılıyor"* yazdım. **Yanlış:** `grep 'd:"teuton…"'` deseni
`id:"teuton…"` künye tanımlarını da yakaladı (devletler.js + paket_05 kopyası = 2). `girdi.yukle` ile `s:`/`v:`/`isg:`
taraması: **hiçbir dilim iki kimliği de kullanmıyor.** KAYNAK-SAHIP md'de satır içinde düzeltildi.
Aynı desenle aynı gece aldığım öteki sayılar: `ceneviz` 72 · `atinadukaligi` 18 — bu iki kimliğin künye `id`'si
YOK (yalnız `harita:`), dolayısıyla `id:` eşleşmesi olamaz ⇒ o sayılar gerçek kullanım. `cenova` 2 · `atina-dukaligi` 2
ise künye tanımıydı; bu iki sayıyı hiçbir teslimde kullanmadım.

## ④ `_kaynak_tanikli` diff v2 — `KASA-GORUNURLUK-SAYAC-1010.diff` (aynı dosya, v2) · açıklaması GORUNURLUK md'de
