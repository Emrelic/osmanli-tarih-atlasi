# KIRILMASIZ-9 — Değişmez 2t kalan maddeler (19 Eylül 2026, Opus)

## UYGULAMA (M-4632 kararlarıyla) — SONUÇ
Üç ölçüm aynı oturumda, başka oturumlar da yazarken (taban kayar; farklar yalnız benim satırlarımın):

| an | 2 açık | 2s açık | 2t | not |
|---|---|---|---|---|
| taban (kararlar gelince) | 0 | 11 | 6 | Lugoş·Eski Hırsova arada başkasınca kapanmış |
| denetle.py değişince | 0 | 13 | 3 | Safi·Niş·Antalya kapandı; İsmâil KAPANMADI (yer şartı çalışıyor) |
| veri düzeltmeleri sonrası | 0 | 13 | **1** | Azemmûr·Rusçuk kapandı; kalan: İsmâil 1789 (dokunma talimatı) |

Başlık satırlarının öbürleri (1·1b·2·2i·3·7·sayaçlar) veri adımında DEĞİŞMEDİ. 2s kırılma 1415→1416
(Azemmûr'un yeni günü 1513-09-03 ayrı gün). Kod adımında Değişmez 7 670→667 ✓ oldu — o fark başka
oturumun eşzamanlı verisinden (2t kodu enklav saymaz).

- `arac/denetle.py`: `_isg_yeri_mi()` + `kirilmasiz_madde(…, kir_isg)` — isg kırılması maddeyi
  yalnız `yer_id` ya da başlık/yer metninde adı geçen yerleşimse kapatır; çağrı `degismez2(Y_cekirdek,O,("isg",))`.
  `KUYRUK_DOSYALARI`ndan `yerlesimler_ek3.js` silindi (girdi.py:152 ve index.html:984'te zaten bağlıydı —
  bağlama değişikliği gerekmedi).
- `data/yerlesimler_ek3.js` Azemmûr merini t / portekiz f → 1513-09-03 (+kaynak).
- `data/olaylar_ek13.js` Azemmûr maddesi t/gun/d → 3 Eylül 1513, ic_not_gun kaynak.
- `data/yerlesimler.js` YALNIZ Rusçuk: isg t 1811-06-01 → 1811-07-04 (ALT SINIR notu `kaynak:` içinde).
- `data/olaylar_ek21.js` 1811-06-01 Rusçuk maddesi kaldırıldı (yerine yorum satırı).
- `data/olaylar_p0056.js` 1811-07-04 maddesine ek21'in özgün içeriği (1810 teslimi, dokuz ay, cami yıkımı — TDV ruscuk) ve yeni ic_not_gun.
- `data/olaylar_p0049.js` Antalya ic_not_gun güncellendi.
- Açık bırakılan: Safi/Azemmûr `s:portekiz t:1541-01-01` ↔ tahliye 1541-10-01 (karar istenmedi, uygulanmadı) ·
  2t defteri `--defter-yaz` koşturulmadı (49 kaydın 49'u KAPANAN görünüyor — temel yazımı koordinatörün).

---
## İLK RAPOR (karar öncesi)

Görev M-4611. **Veriye YAZILMADI** — beş kalemin beşi de ya denetle.py kararına ya kaynak
çelişkisi hükmüne bağlı çıktı (şartname: "çelişki varsa uygulamadan seçenekli sor").

## Ölçüm (bu tur, `denetle.kirilmasiz_madde()` + simülasyon)
- 2t bugün **8** (görev "9" diyordu; §1.5 tablosu "12" — ikisi de bayat). 2 açık 0 · 2s açık 11.
- Dokunulmayan 3 (M-4611): Lugoş 1695 · Eski Hırsova 1790 (=Orşova) → SENUSI-NOKTA · İsmâil 1789 → kaynaksız.
- Benim 5: Safi 1488 · Azemmûr 1513 · Niş 1737 · Rusçuk 1811 · Antalya 1921.

Denetim varyantları (veriye dokunmadan, `scratchpad/sim.py` ile ölçüldü):

| varyant | 2 açık | 2s açık | 2t | kapanan |
|---|---|---|---|---|
| bugün | 0 | 11 | 8 | — |
| ① 2t havuzuna `isg` kırılmaları | 0 | 11 | 5 | Antalya · Niş · **İsmâil (SAHTE)** |
| ② `yerlesimler_ek3.js` KUYRUK'tan çekirdeğe | 0 | 14 | 7 | Safi |
| ①+② | 0 | 14 | 4 | Safi · Antalya · Niş · İsmâil (sahte) |

⚠️ **① SAHTE KAPANIŞ ÜRETİR:** İsmâil 1789-10-11 maddesini Semendire/Belgrad isg başlangıcı
(1789-10-13, Avusturya — alakasız cephe) kapatıyor. ① uygulanacaksa isg havuzu ya maddenin
`yer_id`'sine bağlanmalı ya da İsmâil defterde elle tutulmalı. ("Yakınlık alaka değildir".)

## Kalem kalem

### Niş 1737-10-16 — veri DOĞRU, denetim görmüyor
Niş `isg:avusturya {1737-07-27→1737-10-16}`, bitiş madde gününde (Hambly; TDV `nis` "ekim ayında").
Yama yok. Kapanması yalnız ① ile.

### Antalya 1921-06-01 — veri DOĞRU (GEMINI-DOGRULA isg'yi zaten ekledi), denetim görmüyor
`isg:italya {1919-04-29→1921-06-01}` TDV `antalya` birebir. Madde `ic_not_gun`
"Atlasta İtalyan işgal dönemi olmadığı için harita kıpırdamaz" diyor → **artık yanlış, not
güncellenmeli** (kronoloji dosyası olaylar_p0049.js — sahibi?). Kapanması yalnız ① ile.

### Safi 1488-01-01 — veri madde ile aynı gün, ama dosya KUYRUKTA
`yerlesimler_ek3.js` s:portekiz f:1488-01-01. ek3 kuyruğa "Portekiz Fas'ının kronolojisi yok"
diye alınmıştı (denetle.py:354-363: "Kronoloji yazılınca satır SİLİNİR = külliyata kabul").
Kronoloji olaylar_ek13.js A-3…A-10'da yazıldı → gerekçe düşmüş. ② uygulanırsa 2s açık 11→14
(ek3'ün 3 maddesiz kırılması; tavan 121 içinde).
Yan bilgi: Correia & Lopes (UMinho/CHAM) "Safi in 1508 and Azemmour in 1513" askerî fethi 1508
veriyor — madde iki aşamayı zaten metinde tutuyor, değişiklik önermiyorum.

### Azemmûr 1513-09-01 — 🔴 KAYNAK ÇELİŞKİSİ + veri 243 gün erken
Veri `s:portekiz f:1513-01-01` (yıl kodu); madde 1 Eylül 1513 (kaynak alanı YOK).
- Jorge Correia & Ana Lopes, *Azemmour, Morocco: Early Sixteenth-century Portuguese Defences*
  (EAUM Univ. of Minho / CHAM), repositorium.uminho.pt: "…only to succeed five years later in 1513,
  on September 3rd." · "The evacuation was concluded between September and October of 1541."
- 1 Eylül: yalnız Vikipedi (Battle of Azemmour) — tek dayanak olamaz.
- HPIP Azemmour: yalnız "1513" · "October of the same year" (1541).
- TDV: müstakil madde yok (ek13 notu, `azemmur` 302).
Seçenek: **A (önerim)** veri f ve madde t/gun → 1513-09-03, kaynak Correia & Lopes; madde metnindeki
"1 Eylül" düzeltilir. B: 1 Eylül kalır, veri 1513-09-01 (akademik dayanak yok). İkisi de ② ile 2t'yi kapatır.
Ayrıca Safi/Azemmûr `s:portekiz t:1541-01-01` ↔ tahliye maddesi 1541-10-01 (Correia: Eylül-Ekim) —
veri yıl kodu, 9 ay erken; A-9 maddesiyle aynı güne (1541-10-01, ay kodu) çekilmesi önerilir.

### Rusçuk 1811-07-04 — 🔴 veri ve bir MÜKERRER madde muharebeden ÖNCE bitiyor
- Veri `isg:rusya {1810-09-26→1811-06-01}` — 06-01 TDV `ruscuk` "1811 Haziranında…" ay kodu.
- Muharebe 22 Haziran J = **4 Temmuz 1811 G** (ESBE); Ruslar muharebeyi Rusçuk'u elde tutarak
  yaptı → işgal 1 Haziran'da bitmiş OLAMAZ. Tahliye muharebeden SONRA.
- Tahliye günü: arama özetlerinde iki okuma — "27 июня" (J → 9 Temmuz G) ve BRE "Рущукское
  сражение 1811"e atfedilen "28 июня (10 июля)". **İkisini de birincil metinden doğrulayamadım**
  (old.bigenc.ru → ana sayfaya 301; Wayback 429). Shishov (borodino.ru PDF) gün vermiyor.
  → gün: `bulunamadı` (doğrulanmış olarak).
- olaylar_ek21.js'te **1811-06-01 "Kutuzov Rusçuk'u boşalttı" maddesi** (etiket toprak-kazanc) aynı
  tahliyeyi muharebeden 33 gün ÖNCEYE koyuyor → 07-04 maddesiyle mükerrer, günü yanlış.
Seçenek: **A (önerim)** isg t → 1811-07-10 ancak BRE metni birincilden okunduktan sonra; 06-01 maddesi
07-04'e birleştirilir. B: gün doğrulanamazsa isg t → 1811-07-04 (muharebe günü, "tahliye günü kaynakta
yok, muharebeden sonra" notuyla — alt sınır, uydurma değil) ve aynı birleştirme. Her iki yol da
2t'yi yalnız ① ile kapatır (isg).

## İstenen kararlar (1.MURAT)
1. ① isg'yi 2t havuzuna almak (denetle.py — sahibi kim?) + İsmâil sahte kapanışının çaresi.
2. ② ek3'ü KUYRUK_DOSYALARI'ndan çıkarmak (denetle.py).
3. Azemmûr A/B · Rusçuk A/B.
4. Dosya yetkisi: data/yerlesimler_ek3.js (Azemmûr/Safi), data/yerlesimler.js (Rusçuk),
   data/olaylar_ek13.js · olaylar_ek21.js · olaylar_p0049.js (madde düzeltmeleri) — kararla birlikte
   hangilerine ben yazayım?
