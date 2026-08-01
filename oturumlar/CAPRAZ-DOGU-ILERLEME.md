# ÇAPRAZ DOĞU — ölçüm kayıtları

> Bulgular ve öneriler `CAPRAZ-DOGU.md`'de. Burası **nasıl ölçüldüğü** — sayıların
> yeniden üretilebilmesi için. `ORGANIZASYON Karar 2`: durum dosyayla akar.

---

## 1 Ağustos · Tur 1 — `iran` torbasının anatomisi

**Oturum açılışı.** Görev tanımı depoda yoktu; koordinatörden istendi,
`oturumlar/CAPRAZ-GOREV.md` olarak yazıldı (`cb5e6c8`). Yetkim: bu iki dosya.
Girdi kilidi açık (üretim 11:55→13:14 bitmiş, `girdi.py` anlık görüntü alıyor).

### Ölçüm 1 — canlı dosya kümesi ve torbanın boyutu

Betik: `scratchpad/iran_torba.js` · girdi: `arac/girdi.py` `GIRDI_DOSYALARI`

```
CANLI (yerlesimler.js + yerlesimler_afrika.js)
  yerleşim 975 · s: penceresi 3212
  s:"iran"  317 pencere / 169 ayrık nokta

hanedan kimliklerinin bugünkü kullanımı (pencere / nokta)
  iran         317 / 169      safevi       197 / 162
  ilhanli      142 / 142      akkoyunlu    100 /  98
  timurlu      105 / 105      karakoyunlu   94 /  94
  hive          13 /   8      buhara         9 /   9
  afsar 0 · zend 0 · kacar 0 · celayirli 0 · muzafferi 0 · serbedari 0
  kartid 0 · ozbek 0 · sirvansah 0 · kutbsahi 0 · babur 0
```

### 🔴 Ölçüm 1b — koordinatörün 326/176 sayısı ile farkın kaynağı

Sayı tutmayınca **dosya kümesini** sınadım (`CLAUDE.md`'nin "hangi dosya canlı"
uyarısı):

```
yerlesimler.js            791 nokta   iran 317 pencere / 169 nokta   ← CANLI
yerlesimler_afrika.js     184           0 /   0                      ← CANLI
yerlesimler_asya.js       344           6 /   6                      ← merge dışı
yerlesimler_avrupa.js     237           0 /   0                      ← merge dışı
yerlesimler_ortaasya2.js    7           3 /   1                      ← merge dışı
                                    ----------
                        beş dosya:  326 / 176   ← koordinatörün sayısı
                        canlı:      317 / 169   ← haritada görünen
```

317+6+3 = 326 ve 169+6+1 = 176. **Fark tam olarak merge dışı üç dosya.**
⇒ Ölçüm yanlış değil, **paydası geniş**. Düzeltilecek pencere sayısı 317.

### Ölçüm 2 — "benekli parçalı" görüntünün mekanizması

Soru: *her `iran` noktasının en yakın **yabancı** komşusu hangi devlette?*
(Tek yönlü sormamak için — `CAPRAZ-GOREV §4⑥` — hem "torba kimi yutuyor" hem
"torbanın yanında kim var" soruldu; ikincisi mekanizmayı verdi.)

```
1300-06-15   47 nokta   ilhanli 44 · altinorda 2 · umman 1
1350-06-15  164 nokta   altinorda 43 · ilhanli 36 · umman 34 · memluk 26 · cagatay 11
1400-06-15   84 nokta   timurlu 75 · artuklu 3 · karakoyunlu 2
1450-06-15   56 nokta   karakoyunlu 27 · timurlu 26
1490-06-15   61 nokta   akkoyunlu 56 · timurlu 2
```

⇒ Beş kesitin beşinde de torba, **dönemin gerçek hanedanının tam yanında**.
1300'de 47 noktanın 44'ü `ilhanli` ile komşu — aynı devlet, iki ad, **iki renk**
(`iran` #b5885b ten · `ilhanli` #7a5ba0 mor). Benek buradan.

### Ölçüm 3 — 317 pencere yalnız 24 ayrık `(f,t)` çifti kullanıyor

Betik: `scratchpad/iran_gruplar.js`. Karar sayısı 317 değil **24**.
Grup tablosu ve hanedan ataması `CAPRAZ-DOGU.md §3`'te.

En büyük üç grup:
```
1736-03-08 → 1923-10-29   101 nokta   187 yıl   bütün İran, üç hanedan tek renk
1335-12-01 → 1411-01-01    28 nokta   Irak      (Celâyirli)
1335-12-01 → 1393-01-01    28 nokta   Fars/Kirman (Muzafferî)
```

### Ölçüm 4 — TDV slug turu (13 adres, `<title>` kontrolüyle)

🟢 canlı (10): `ilhanlilar` · `celayirliler` · `muzafferiler` · `serbedariler` ·
`sirvansahlar` · `zendler` · `kacarlar` · `seybaniler` · `iran` · `nadir-sah--iran`
🔴 ölü (3): `kertler` → **`kert`** · `afsarlar` → **`avsarlilar`** ·
`cobanlilar` → **müstakil madde yok**, bilgi `iran` maddesinde

⇒ İkisi `CAPRAZ-GOREV §4③`'ün birebir tekrarı: kaynak vardı, **adres yanlıştı.**
Bu üçü `CLAUDE.md`'deki ölü slug listesine eklenmeli (koordinatörün dosyası).

### Ölçüm 5 — özetleyici artefaktı yakalandı

`ilhanlilar` çekişi 1335 için **"Hicrî 717 H"** üretti. 1335 milâdî = 735-736
hicrî; 717 hicrî = 1317-18 milâdî. Sayı maddeden değil özetleyiciden geldi.
⇒ Bu turda **hiçbir hicrî karşılık tek başına kullanılmadı**; her biri milâdî ile
çarpıştırıldı (`§4②`). Aynı sebeple Ç5 (Isfahan `787/1385`) *"doğrulanamadı"*
diye kapatıldı, *"çelişiyor"* diye değil.

### Ölçüm 6 — Kural ④ ikinci kez kâr etti

Nâdir Şah'ın ölümü: `avsarlilar` **21 Mayıs 1747**, `nadir-sah--iran`
**11 Cemâziyelâhir 1160 / 20 Haziran 1747**. Kişinin kendi maddesi esas →
`1747-06-20`. **Bizim verimiz zaten `1747-06-20`** (Hîve penceresinin bitişi).
⇒ Ridâniye vakasının (`memlukler` 23 Ocak ↔ `ridaniye-savasi` 22 Ocak) tekrarı.

---

## 📌 Bu turdan çıkan ve OGRENILENLER'e önerilen iki ders

Yazma yetkim yok, koordinatöre öneri olarak bırakıyorum:

**① Bir sayı tutmuyorsa önce PAYDAYI sor, ölçüyü değil.**
326 ↔ 317 farkı ayrıştırıcıdan değil dosya kümesinden geldi. İki ölçüm de
doğruydu; **kapsamları** farklıydı. `CLAUDE.md` bunu bir kez yazmış
(*"ayrıştırıcıyı doğrulamak yetmiyor"*), bu ikinci vakası — ve bu kez sayı
**bir görev tanımının içine** girmişti.

**② Verinin doğru bildiği ama YANLIŞ ADLANDIRDIĞI şey, denetimden kaçar.**
`1740→1747-06-20` (Nâdir'in Hârizm seferi) ve `1776→1779` (Sâdık Han'ın Basra
işgali) pencereleri **hanedan sınırına gün gün oturmuş** ama `d:"iran"` yazıyor.
Üç değişmezin hiçbiri bunu göremez: sahip var, maddesi var, merkeziyle uyuyor.
Yalnız *"bu adın altında kaç ayrı devlet var"* sorusu görüyor — ve o soru
denetimde yok. (`§3.5` hayalet devlet denetiminin **ayna görüntüsü**: orada
devlet ömrünü aşıyordu, burada ad devletten geniş.)

---

## Sıradaki tur

1. Grup A'nın gün hassasiyetli Afşar→Zend→Kaçar bölünmesi (fetret 1747-1751 dahil)
2. B4/B5 coğrafî bölme · Ç2, Ç5 ikinci çekiş · `marasi` slug araması
3. 🟡 İkinci iş: **Memlük** — Kızıldeniz 39,7 yıl fazlalık, Suriye-Filistin-Hicaz
