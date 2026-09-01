# OPUS HAZIR KITA 110 — ilerleme

**Görev:** 1.MURAT sevki `M-1903` (toplu paket triyajı)
**Paket:** `parti-emrelic-0031` (8 açık) + `parti-emrelic-0010` (1 açık) = **9**
**Teslim:** 9 → 0 · rapor `M-1983`

---

## Taban — kendim ölçtüm, üreteçle

```
py arac/_paket_dokum.py
parti-emrelic-0031   8/22 açık   sirada 5 · olculecek 3
parti-emrelic-0010   1/1  açık   sirada 1
⇒ 9 · koordinatörün tablosuyla UYUŞUYOR
```

## Kalem kalem

| madde | hüküm | kök |
|---|---|---|
| `0031/H-0010` | **bayat** | 1405'te Anadolu'da "OSMANLI" kalan nokta **1** — o da H-0007'nin kendisi |
| `0031/H-0007` | **cozuldu** | Mersin `d:` 1352'den başlıyordu — **164 yıl hayalet Osmanlı**. Kök: **MÜKERRER ALAN** |
| `0031/H-0014` | **cozuldu** | 18 nokta akkoyunlu hayalet dönemi · üç bölgesel ankraja hizalandı |
| `0031/H-0005` | cozuldu* | Sırbistan gövdesi ile Osmanlı gövdesi **aynı toprağı kaplıyor**, Osmanlı ÜSTTE |
| `0031/H-0019` | cozuldu* | H-0005'in **aynısı** · örtüşme 1425-1429 penceresinde |
| `0031/H-0022` | cozuldu* | Rumeli Hisarı `kur:1452` ⇒ öncesi **Anadolu Hisarı'na (1,42 km) emiliyor** |
| `0031/H-0002` | cozuldu* | `SEYRELT_TOL = 0.03` (3,3 km) **yalnız YABANCI gövdeye** uygulanıyor |
| `0031/H-0004` | **bayat+** | "İRAN" lekeleri gitmiş (kutuda 0) · kalıntı: **3 şüpheli `kur:`** |
| `0010/H-0001` | senin-kararin | `ClaudEmre/kutu/kutu.py:1311` — **atlas deposunun dışında** |

`*` = kök bulundu, düzeltme benim dosyam değil (`js/app.js` · `arac/uret_petek.py`) → **sevk bekliyor**

---

## 🔴 Paketin dışına taşan asıl bulgu — MÜKERRER ALAN

`data/yerlesimler_ek27.js:51` Mersin kaydında `s:` ve `d:` **iki kez** yazılı.
JS'te **son anahtar kazanır** ⇒ düzeltme dosyada görünüyor, motora hiç girmiyor.

```
2739 kayıt tarandı · MÜKERRER ALAN TAŞIYAN: 3
  yerlesimler_ek27.js      :51    Mersin                {s:2, d:2}   düzeltme ÖLÜ, 164 yıl hayalet CANLI
  yerlesimler_ek29.js      :424   Yagodina (Jagodina)   {s:2, d:2}   kazanan DAHA İYİ — KAZA ESERİ
  yerlesimler_ek_bozkir.js :109   Yedisan bozkırı       {s:2}        9 YIL çift sahiplik CANLI
```

Üçünde de aynı imza: düzeltilmiş hâl kaydın **başına tek satır** eklenmiş, eski çok satırlı hâl **aşağıda bırakılmış**.

> Projenin cümlesi: *"denetimler 'yama UYGULANDI mı' diye sorar, 'yama OKUNDU mu' diye sormaz."*
> **Burada yama okundu bile — ve yine etkisiz kaldı. Sorulmayan soru: "yama ETKİ ETTİ Mİ?"**

⚠️ **Yagodina'nın dersi ötekilerden değerli:** orada kusur zarar vermedi, **ama kaza eseri.**
Baştaki (ölü) sürüm 1689-90 Avusturya işgalini ekliyordu ama `v:` 1830-1878'i taşımıyordu —
kazansaydı **48 yıllık sahipsizlik** açacaktı. `§11`'in *emilme2 ↔ p19* dersi: **kısmî bir dizi
taşıyan yama, taşımadığını sessizce siler.**

---

## Üretilenler

```
data/yer_yama_ok110.js   window.YER_YAMA_OK110 · 21 kayıt
                         (3 mükerrer-alan kurbanı + 18 akkoyunlu)
_mukerrer110.py          mükerrer alan nöbetçisi     · bugün 3 yakalıyor
_kur_supheli110.py       şüpheli kur: nöbetçisi      · bugün 4 yakalıyor
_yama_sina110.py         yama kapısı — CANLI kayıtla BİRLEŞTİREREK sınar
_ortusme110.js           gövde örtüşme sınavı (devletler_harita × donemler)
_q110.py                 yerleşim sorgu yardımcısı
```

🔴 **`data/yer_yama_ok110.js` UYGULANIRKEN:** üç mükerrer-alan kaydında **eski satırlar
silinmezse bu yama da aynı şekilde ölür.** Uyguladıktan sonra `py _mukerrer110.py` → **0** vermeli.

---

## Kendi çürüklerim — ölçümle yakalandı, saklamıyorum

1. **Gövde örtüşme sınavımın ilk sürümü YANLIŞTI.** `d.g`'nin doğrudan `DEVLET_PARCALAR`'a
   indeks olduğunu sandım; `js/app.js:109 parcaCoz()` **iki kademeli** (`d.g → PARCA_HALKA →
   PARCALAR`). Tek kademeli okuyunca Sırbistan'ın gövdesi `lon −9,5`'e, yani **Portekiz'e**
   taşındı ve sınav *"ÖRTÜŞME YOK"* diye **temiz rapor verdi.**
   📌 ***Bir dosyanın biçimini, dosyanın kendi yorumu değil ONU OKUYAN KOD söyler.***
   (`devletler_harita.js` başlığı bugün hâlâ tek kademeli tarif ediyor — **bayat yorum.**)

2. **Yama kapımın ilk sürümü YANLIŞ SORUYU soruyordu.** Yamanın dilimlerini tek başına
   sınıyordu; oysa `_sahiplik_uygula.py` **alan bazlı** çalışır. Doğru soru *"yama sağlam mı"*
   değil ***"yama UYGULANDIKTAN SONRAKİ kayıt sağlam mı"***.
   📌 `§11`'in *"reçete kendi testini geçmeli"* kuralının bir kademe ötesi:
   **testin kendisi, reçetenin UYGULANMA BİÇİMİNİ taklit etmeli.**

3. **`_kur_supheli110.py`'nin ilk sürümü kullanılamazdı: 109 vurgu.** Yuvarlak yıllar
   (`1281-01-01` · `1300-01-01`) hem yüzlerce `kur:` hem onlarca künye `f:`i oluyor.
   İmza **gün hassasiyetine** sıkıştırıldı: **109 → 4**, dördün üçü gerçek.
   📌 Alet ilk hâlinde **doğruydu ama kullanılamazdı** — 109 satırlık uyarı, 0 satırlıkla aynı iş.

4. **1689-09-24'ün maddesi YOK sandım — vardı.** Çıktıyı üç satıra kırpmıştım, dördüncü satır
   tam eşleşmeydi (*"Niş ve Vidin'in kaybı"*). **Kendi kırpmam beni yanılttı.**

---

## Açık kalan üç soru (koordinatörde)

1. H-0005/H-0019 — `js/app.js` katman sırası: ARAYÜZ sevki mi, motor kuyruğu mu?
2. H-0022 — Rumeli Hisarı: `kur:`ı kaldır (a) mı, yeni Bizans alan noktası (b) mi?
3. `0010/H-0001` — atlas kuyruğundan düşsün mü?
