# ASYA — HİNDİSTAN HAYALETLERİ (`meysur` · `maratha`)

**Oturum:** ASYA · 1.MURAT sevki · 6 Eylül 2026
**Cins:** ÖLÇÜM + künye önerisi — **veri yazılmadı**, `data/` ve `arac/`
koşu 7b boyunca donuk. Yama taslağı künye kararından SONRA üretilecek.

---

## ⓪ TABAN — yetkili aletle doğrulandı, ve bir +4 AÇIK KALDI
```
node denetim/ARAC-BOLGE-KUTU-0906.js
   DOGU-GD-ASYA 332 + GUNEY-ORTA-ASYA 250 = 582        🟢 şartname birebir
node denetim/ARAC-OTURUM-KIMLIK-0906.js
   ASYA benzersiz kimlik 35                            🟢 (tablodaki 42 şişikti)
```
🔵 **Kendi taramam 586 nokta / 35 kimlik dedi — 4 fazla.** Kimlik sayısı
tutuyor, nokta sayısı 4 ayrışıyor. `sahip()` önceliğini ve girdi
listesini aletle aynı kurdum; farkın nereden geldiğini **ÖLÇMEDİM.**
Kalem açık — bu belgenin bulgularını etkilemiyor (ikisi de aynı 8
noktayı kapsıyor) ama kapatılmalı.

## ① `meysur` — ŞARTNAMENİN BİLMEDİĞİ: İKİ UÇTAN DA TAŞIYOR

Şartname *"künye `t:1799-05-04` · 124,5 yıl FAZLA"* diyor. Doğru, **ama
eksik** — veri künyenin BAŞINDAN da taşıyor:

| nokta | veride `meysur` | künye | baş taşması |
|---|---|---|---|
| Seringapatam | **1565-01-26** → 1923-10-29 | 1761-01-01 → 1799-05-04 | **196 yıl** |
| Meysûr (Mysore) | **1565-01-26** → 1923-10-29 | ” | **196 yıl** |
| Bangalor | **1687-01-01** → 1923-10-29 | ” | **74 yıl** |

⇒ Toplam sapma bir kuyruk değil bir **kuşatma**: künye 38 yıllık bir
pencere, veri 358 yıllık bir zincir. Sebebi ad: künye
*"Meysûr Sultanlığı (Haydar Ali / Tîpû Sultan)"*, veri ise **Meysûr
Krallığı**nı (Voduyar racalığı) kastediyor. `§3.5.0` sınıf ③ ARDİL —
ama iki yönlü.

### 🟢 TDV BİRİNCİ ELDEN DOĞRULADI (`meysur`, 9.327 kar., kesilmeden)
> *"Böylece İngilizler … **Meysûr Sultanlığı'nın topraklarını ele
> geçirdiler ve beş yaşında bir Hindu hânedan üyesini tahta oturtup
> ESKİ RACALIĞI TEKRAR İHDAS ETTİLER**; gerçek yönetici ise kendilerinin
> Hindistan genel valisi idi."*
> *"1760 yılında Hindu racalığının müslüman kumandanlarından Haydar Ali
> Han Bahadır … Raca Rama hânedanını kontrolü altına aldı."*

⇒ `CLAUDE.md §3.5.0`ın teşhisi **kaynakla doğrulandı**: polity sürdü,
kimlik değişti. Ve TDV *"eski racalığı"* diyor — yani 1799 sonrası
1760 öncesinin **devamı**, yeni bir şey değil.

### 🟢 BİTİŞ GÜNÜ TDV-DESTEKLİ
> `tipu-sultan`: *"Srirangapatam savaşında yenilerek hayatını kaybetti
> (**29 Zilkade 1213/4 Mayıs 1799**)."*

⇒ Künyenin `t:1799-05-04`ü **kaynaklı**. Dokunulmayacak.

### 🔴 VE KENDİ BULGUMU GERİ ALIYORUM — `f:1761` YANLIŞ DEĞİL
İlk turda *"TDV 1760 diyor, künye 1761 — künye yanlış"* diye
yazacaktım. Kapsayıcı maddeyi okuyunca **TDV kendi içinde çelişti**:
```
TDV `meysur`       "1760 yılında … kontrolü altına aldı"
TDV `tipu-sultan`  "bir sultanlık (1760-1799)"
TDV `hindistan`    "Meysûr Sultanlığı (1761-1799)"      ← KÜNYE BUNUNLA UYUŞUYOR
```
⇒ `§4⑥`: **çelişkiyi BİLDİRİYORUM, taraf seçmiyorum.** Künyenin `f:`i
TDV'nin bir maddesiyle birebir; değiştirilmesi için gerekçe YOK.
📌 Ve ders: dar maddeyi okuyup durmuş olsaydım künyeyi **yanlış yere**
düzelttirecektim.

## ② `maratha` — kuyruk 105 yıl, VE Kolhapûr'da 15 yıllık BAŞ taşması

| nokta | veride `maratha` | baş |
|---|---|---|
| Kolhapûr | **1659-01-01** → 1923-10-29 | 🔴 künye 1674-06-06 — **15 yıl önce** |
| Mandu · Uccayn | 1732-01-01 → 1923-10-29 | ✓ içinde |
| İndor | 1732-01-01 → 1923-10-29 | ✓ |
| Gvalyar | 1784-01-01 → 1923-10-29 | ✓ |

### 🟢 DAR SLUG ÖLÜ, KAPSAYICI MADDE ALTIN VERDİ
`maratha` · `marathalar` → **302**. `hindistan` → **200**, ve içinde
hânedan listesi var:
> *"Haydarâbâd Nizamlığı (1724-1948) · Meysûr Sultanlığı (1761-1799) ·
> **Marata Pîşveleri (1714-1818)** · **Holkar hânedanı (1728-1858)** ·
> Gaikwar hânedanı (1721-1858) · **Sindiya hânedanı (1761-1858)**"*

⇒ Ardılların adı ve başlangıcı **TDV'den**: Gvalyar = **Sindiya**,
İndor = **Holkar**. Kolhapûr bu listede **YOK**.
⚠️ Ve listenin `1858` bitişleri **hânedanın sonu değil**: aynı liste
Haydarâbâd'ı **1948**'e kadar götürüyor, ve o da bir prensliktir.
1858 = Bâbürlü'nün sonu / Taç yönetiminin başı. ⇒ 1858'i künye `t:`si
olarak **kullanmıyorum**; atlasın konvansiyonu (`haydarabad-nizam`
1724→1923) prensliği ufka kadar sürdürüyor.

## ③ ÖNERİLEN KÜNYELER — `denetim/ONERI-KUNYE-ASYA-0906.json`
```
meysur-racaligi   1565-01-26 → 1923-10-29   TDV `meysur` (ihdas cümlesi)
gvalyar-sindiya   1761-01-01 → 1923-10-29   TDV `hindistan` (Sindiya 1761)
indor-holkar      1728-01-01 → 1923-10-29   TDV `hindistan` (Holkar 1728)
kolhapur          1659-01-01 → 1923-10-29   🔴 kaynak BULUNAMADI — açık
```
🔵 `meysur-racaligi` **tek künye, iki dönem**: 1565→1760 ve 1799→1923.
TDV *"eski racalığı tekrar ihdas ettiler"* diyor ⇒ aynı hânedanın
kesintiye uğramış hâli, iki ayrı polity değil. Künye penceresi ikisini
de kapsıyor; kesintiyi `s:` zinciri taşıyor.

## ④ YAMANIN BİÇİMİ — günlere DOKUNMUYOR
Öneri yalnız **kimlik** değiştiriyor; mevcut kırılma günleri korunuyor,
yalnız iki gün EKLENİYOR (`1760-01-01` · `1799-05-04`):
```
Seringapatam / Meysûr   1565-01-26 → 1760-01-01  meysur-racaligi
                        1760-01-01 → 1799-05-04  meysur          ← DEĞİŞMEZ
                        1799-05-04 → 1923-10-29  meysur-racaligi
Bangalor                1687-01-01 → 1760-01-01  meysur-racaligi  …
Gvalyar                 1784-01-01 → 1818-06-03  maratha         ← DEĞİŞMEZ
                        1818-06-03 → 1923-10-29  gvalyar-sindiya
İndor                   1732-01-01 → 1818-06-03  maratha
                        1818-06-03 → 1923-10-29  indor-holkar
Kolhapûr                1659-01-01 → 1818-06-03  maratha  🔴 baş taşması AÇIK
                        1818-06-03 → 1923-10-29  kolhapur
Mandu · Uccayn          1732-01-01 → 1818-06-03  maratha
                        1818-06-03 → 1923-10-29  ??? 🔴 AÇIK (aşağıya bak)
```
🔴 **Mandu ve Uccayn'ın 1818 sonrası sahibi ÖLÇÜLMEDİ.** İkisi de Malva'da
ve Holkar/Sindiya arasında bölünmüş olabilir; TDV bunu tanecikte
söylemiyor. `okumadım` DEĞİL — **aradım, TDV bu tanecikte susuyor** ⇒
`bulunamadı`. Akademik kaynak gerekiyor.

## ⑤ 🔴 2s KAPISI — HENÜZ AÇILMADI
Önerilen iki yeni kırılma günü (`1760-01-01` · `1818-06-03` zaten var mı)
çekirdekte madde arıyor. **Bu adımı bu turda KOŞMADIM** — künye kararı
gelmeden yama üretilmeyeceği için sıra ona gelmedi. `ölçmedim`.

## ÖLÇMEDİM / BULUNAMADI
```
⚪ ölçmedim   586 ↔ 582 farkının kaynağını
⚪ ölçmedim   2s kapısını (yeni kırılma günlerinin çekirdek maddesi)
⚪ ölçmedim   renk çakışmasını (yeni 4 kimlik sahneye çıkınca) — `renkler.py`
              donuk, ve koordinatör koşu sonrasına aldı
🔴 bulunamadı Kolhapûr'un künye tarihi — TDV `hindistan` listesinde YOK,
              `maratha` slug'ı ÖLÜ. Akademik kaynak ARANACAK.
🔴 bulunamadı Mandu ve Uccayn'ın 1818 sonrası sahibi — TDV bu tanecikte
              susuyor (§4 TANECİKLİK boşluğu)
⚠️ çelişki    Meysûr'un başlangıcı: TDV `hindistan` 1761 · TDV `meysur`
              ve `tipu-sultan` 1760. Taraf SEÇİLMEDİ, bildirildi.
```
