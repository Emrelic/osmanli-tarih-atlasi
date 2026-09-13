# FERHAT PAŞA 1590 — EMRE KARARLARININ UYGULANMASI (13 Eylül 2026)

Oturum: **FERHATPASA-KARAR** · koordinatör 1.MURAT · brif: `oturumlar/FERHATPASA-SINIR-0913.md`
("Emre'nin kararları — ikinci tur") + koordinatör iletisi (üçüncü tur: Ahar · Kirmanşah).
Koşu aktif: `data/yerlesimler*.js` · `arac/*` · `data/devletler.js` DOKUNULMADI. Commit YOK.

## 0. Dosyalar

| dosya | ne değişti |
|---|---|
| `data/hukuki_sinirlar.js` | yalnız `ferhad-pasa-istanbul-1590` (Luristan · Nihâvend notları) ve `ferhad-pasa-1590-sinir-hatti` (t_uyari · köşe 3, 7-13 notları · `guney_1593_varyant` KALDIRILDI → `emre_kararlari_notu`) |
| `data/olaylar_p0048.js` 🆕 | `window.OLAYLAR_P0048` — 2 çekirdek madde (1592-01-01 isyan · 1603-01-01 kayıp) |
| `data/kaynakli_halka_ferhatpasa.js` | yalnız 3 `not` eki (fp-luristan-1591 · fp-nihavend-tdv · fp-ahar-eskandar-safevi-1592): "harita kararı ayrı, halka kaynağı gösterir". Halka verisi (yer/devlet/tarih/kaynak) DEĞİŞMEDİ |
| `denetim/YAMA-FERHATPASA-BIRLESIK-0913.json` 🆕 | altı yamanın birleşik KOŞU SONRASI önerisi (uygulanmadı) |

🔴 **index.html bağlantı satırı (koordinatörde, D099):** satır 1013'ün (`olaylar_p0047.js`) altına
```
<script src="data/olaylar_p0048.js?v=r7487"></script>
```

## 1. Karar karar

| # | karar | yapılan |
|---|---|---|
| 1 | Hemedan · Burûcird SAFEVÎ | hat köşe 9 · 11 notu; yama G-HEMEDAN · G-BURUCIRD (1590-1603 d: SİL) |
| 2 | Bîcâr "o dönemde yokmuş gibi" | araştırma (§2); köşe 7-8 notu; yama G-BICAR kur:1801-01-01 + s: kırpma (ÖNERİ) |
| 3 | Luristan 1590 Osmanlı, renk 1603 | 2 madde yazıldı (§3); istanbul kaydı Luristan notu; köşe 12-13 notu; yama G-LURISTAN d→v 1589-01-01→1603-01-01 |
| 4 | Nihâvend BAĞLI (enklav değil) | `t_uyari`'deki 1592/93 bölme planı ve `guney_1593_varyant` KALDIRILDI; köşe 10-11'e karar + ayrışma notu (Monshi s.824 · Kütükoğlu s.198). ⚠️ `gecici` Nihâvend köşelerinde YOKTU (ölçüldü) — temizlenecek bir şey çıkmadı. Yama G-NIHAVEND f 1589-01-01, t şık A 1603-01-01 (Luristan'la aynı) |
| 5 | Kürt beylikleri tâbi, künye yok | hat tarafı ÖLÇÜLDÜ (en yakın segment çapraz çarpımı): Bâne · Merîvan · Mahabad · Sakkız · Serdeşt · Senendec OSMANLI tarafında, Bîcâr SAFEVÎ tarafında (~55 km) ⇒ hat değişmedi. Yama: 0047'nin d: önerileri v: (k: yok) |
| 3.tur | **Ahar şık B** — tâbi 1588→1603 (TR Kütükoğlu s.195 · RU Petrushevsky) | köşe 3 `gecici` KALDIRILDI + Eskandar s.615/619-620 ayrışma notu; yama G-AHAR (d 1585-1603 sil, v 1588-01-01→1603-10-21); madde isteği M7 |
| 3.tur | **Kirmanşah OSMANLI KALIR** | köşe 8-9 korundu, not; yama G-KIRMANSAH "Osmanlı kalır (Emre kararı) · kaynak doğrulaması bekliyor: KIRMANSAH-DOGRULA" — dönem SİLİNMEDİ |
| — | Sarâb kararsız · Miyâne Safevî | köşe 4-6 `gecici` KALDI; yama G-MIYANE (d sil — ASM şık A, uygulayan teyit etsin), Sarâb karar_bekleyen |

## 2. Bîcâr — ortaya çıkış tarihi

```
BULUNAN   Encyclopaedia Iranica «BĪJĀR» (Eckart Ehlers, Vol. IV Fasc. 3 s.254, 1989) — curl ile okundu:
          "Mentioned in the 9th/15th century as a village belonging to the property of Shah
           Esmāʿīl, the first Safavid ruler, Bījār developed to the size of a town only in the
           13th/19th century."
          "The district of Bījār (former Garrūs) … traversed by the rivers Safīdrūd and Talvār"
          Iranica «ČAHĀRBĀḠ-E GARRŪS» (M. Dabirsiyaqi, Vol. IV Fasc. 6 s.625, 1990): 1104/1692'de
          Garrūs valisi Lotf-ʿAlī Khan bugünkü Bîcâr'ın güneyindeki bahçede köşk yaptırdı —
          metin Bîcâr'ın O TARİHTE kasaba olduğunu SÖYLEMİYOR.
BULUNAMADI kasabalaşma YILI · Garrūs merkezinin Bîcâr'a geçiş tarihi · Iranica AMĪR NEẒĀM GARRŪSĪ (404)
ÖNERİ     kur:"1801-01-01" (13./19. yüzyılın iki takvimde ortak başlangıcı, kesinlik yüzyıl)
NEHİR     Talvār — GeoNames'te bu adla İran akarsu kaydı YOK (en yakın ad "Rūdkhāneh-ye Tālūrā"
          35.9986/48.0571, eşdeğerliği doğrulanmadı). ne_10m_rivers: Bîcâr'a 150 km içinde tek adlı
          akarsu Qezel Owzan (scalerank 9), 15,8 km (36.01/47.558). Safīdrūd ↔ Qezel Owzan eşlemesi
          kaynakla YAPILMADI ⇒ hat köşesi TAŞINMADI.
```
⚠️ WebFetch Iranica'da 403 döndü; `curl` (tarayıcı UA) 200 verdi — "ölçülemedi ≠ yok" (§4⑤⑦).

## 3. Yazılan maddeler (`data/olaylar_p0048.js`)

| t | k | başlık | kaynak |
|---|---|---|---|
| 1592-01-01 | isyan (✊) | Luristan hâkimi Şâhverdi'nin Şah Abbas'a bağlılık bildirmesi | Monshi/Savory s.642-644 (D104) · Kütükoğlu s.183 · TDV luristan (okundu) — metin TDV'nin 1603'ünü açıkça söylüyor |
| 1603-01-01 | kayip (😔) | Luristan'ın Safevîlere kesin olarak geçmesi | TDV luristan "(1603)" · TDV nihavend--iran "Şah I. Abbas 1603'te şehri ele geçirdi" (okundu) · Monshi s.644 Hürremâbâd 1593-94 · Iranica NEHĀVAND |

🔴 **D147 YAKALADI — (a) maddesi 1591-01-01'den 1592-01-01'e taşındı.** Brifteki `t:"1591-01-01"`
ile ilk koşuda `denetle.py --ayrinti` farkı: `yerlesimler_asya.js` kuyruğu **320 → 319 MADDESİZ**,
2s KAPSAM DIŞI **357 → 356**. Sebep aynı gündeki iki yabancı kırılma: **Haydarâbâd (Dekken)**
golkonda s.f 1591-01-01 · **Chilpancingo** yeni-ispanya s.f 1591-01-01 — Luristan maddesi onları
sahte kapatıyordu. Ayrıca 1591-01-01 kaynağın penceresinin ÖNÜNE düşüyordu (hicrî 1000 =
19 Eki 1591–7 Eki 1592). 1592-01-01'deki yabancı kırılmalar (Lâhîcan · Tatta · Hanoi …) zaten
aynı günkü `olaylar_ek14.js` Dâvud Ağa maddesince sayılıyor. (b) 1603-01-01: ±30 günde hiçbir
kategoride kırılma yok.

## 4. Denetim

`py arac/denetle.py --ayrinti` önce / sonra (scratchpad; `data/olaylar*.js` glob'u yeni dosyayı index.html'den bağımsız okur):
```
                     ÖNCE            SONRA-1 (t:1591-01-01)     SONRA-2 (t:1592-01-01, SON HÂL)
kronoloji maddesi    1355            1357                       1357
Değişmez 2           528 · 0 açık    528 · 0 açık               528 · 0 açık
Değişmez 2s          101 AÇIK · 357  101 AÇIK · 356 🔴          101 AÇIK · 357 ✓
                     KAPSAM DIŞI     (Chilpancingo sahte)        
kuyruk asya MADDESİZ 320             319 🔴 (Haydarâbâd sahte)   320 ✓
Değişmez 2i          62 · 3 açık     62 · 3 açık                62 · 3 açık
Değişmez 2t          14 (tavan 42)   14                         14
mükerrer madde       0               0                          0
```
⇒ SON HÂLDE madde sayısı dışında FARK YOK (sonra-2 farkı: yalnız madde sayısı + bir sıralama gürültüsü `katalan 1 dönem`).
📌 2t 14'te kaldı — kırılmasız madde sayacı iki yeni maddeyi saymadı (ölçütü okunmadı; beklentim +2'ydi, ÇÜRÜDÜ).
KITA 15 C-katmanı (`denetim/ARAC-KITA15-CKATMAN-DOGRULA-0913.js`) önce/sonra çıktısı **birebir aynı**: `ferhad-pasa-istanbul-1590` ✓ çiziliyor · `ferhad-pasa-1590-sinir-hatti` ✓ çiziliyor, negatif_taraf korunuyor · SONUC 8/9 (eksik olan `misir-sudan-22-paralel-1899` gri — önceden de öyleydi).
Node eval: `hukuki_sinirlar.js` 9 kayıt · hat 19 köşe · `guney_1593_varyant` yok · `gecici` köşeler 4,5,6 · `olaylar_p0048.js` 2 madde · `kaynakli_halka_ferhatpasa.js` 50 kayıt · birleşik JSON geçerli.

## 5. Birleşik yama özeti (`YAMA-FERHATPASA-BIRLESIK-0913.json`)

```
kalem 23 · kalemdeki yerleşim 24 · sahipliği değişen 22 · karar bekleyen 2 (Sarâb · Gümrü O-GUMRU)
komşudan gün ucu 25 → KORU 9 · YENİDEN KAYNAKLANACAK 16
   net (Nihâvend şık B + Kirmanşah devri hariç): 23 → KORU 9 · YENİDEN 14
kaynağın kendi günü / yıl-yüzyıl kodu 10 uç · yeniden_kaynaklanacak kalem 8
```
**KORU (şartların dördü tuttu):** Mahabad f/t (Tebriz — Iranica MOKRI süreci açıkça bağlıyor) ·
Merend t · Selmâs t (Tebriz — Eskandar s.831-832, zincir Hoy'dan KIRILDI) · Mâku t (Kasr-ı Şirin
Antlaşması günü — Kotur zinciri yerine olayın kendi günü) · Berde f (Gence — TDV karabag) ·
Eçmiyadzin f/t (Revan) · Ahar t (Tebriz — Petrushevsky 1603 Azerbaycan fethi).
**YENİDEN KAYNAKLANACAK:** Merîvan f/t (kendi 1582 belgesi var, Erdelan süreci) · Bâne f/t (kendi
19 Nisan 1585 belgesi Tebriz'den ÖNCE) · Sakkız f/t · Serdeşt f/t (örtülü, süreç kaynaksız; Bâne'nin
günü de düştüğü için zincir yasak) · Kasr-ı Şîrîn f/t (Hânekîn zinciri; Kalhor kuşağı 1603-04'te
düştü) · Merend f (Gence ayrı cephe, ~330 km) · Selmâs f (Hoy'un başı kaynaksız) · Şerur f/t
(Nahçıvan B2 BEKLET, zincir) · [Nihâvend şık B · Kirmanşah t → KIRMANSAH-DOGRULA].

**Değişmez 2 madde istekleri (yeni kırılma başına):**
```
M1  1589-01-01  Luristan v.f + Nihâvend d.f   🔴 AÇIK (122 g) — Nihâvend kalesi + Şâhverdi'nin Eyvân itaati
M2  1603-01-01  Luristan v.t + Nihâvend t(A)   ✓ YAZILDI (p0048, metin Nihâvend'i adıyla anıyor)
M3  1578-08-24  Tiflis d.f                    teknik kapalı (Çıldır 15 g) — D147, madde istenir
M7  1588-01-01  Ahar v.f                      teknik kapalı (Hünernâme II, İLGİSİZ) — D147, madde + Eskandar ayrışması
M4  1585-09-25 · 1603-10-21  Mahabad · Ahar t (+Kürt kuşağı)  Tebriz maddelerine metin eki (D147)
M5  1603-10-21  olaylar_ek2.js Tebriz maddesinin "diğer yerleşimler: Nahçıvan, Luristan" listesinden Luristan çıkmalı
M6  yeniden kaynaklanan 14 uç — yeni günler kendi maddelerini ister
```

## 6. Açık kalemler

1. **index.html satırı** (§0) — bağlanmadan maddeler canlı değil.
2. **Nihâvend bitişi şık A/B** — A (1603-01-01, Luristan'la aynı, karar 4'ü korur) önerim; B mevcut Tebriz günü, şart ③ tutmuyor.
3. **Luristan/Nihâvend başı 1589-01-01** — 997 içinde itaat ayı yok, yıl kodu itaatten önce düşebilir; alternatif 1590-03-21 Nihâvend'i 14 ay enklav yapar.
4. **Bîcâr kur:1801** — yıl bulunamadı; Değişmez 2s / 5 etkisi koşu sonrası DELTA ile ölçülecek.
5. **Kirmanşah** — KIRMANSAH-DOGRULA bekleniyor; t 1603-10-21'in komşu testi tutmuyor (Kalhor 1603-04).
6. **Sarâb** kararsız · **Miyâne** G-MIYANE uygulayan teyidi · **Gümrü** O-GUMRU ↔ C2 çatışması.
7. **olaylar_ek2.js Tebriz maddesi** (M4 · M5) — dosya bende değil.
8. Monshi/Savory alıntıları bu oturumda YENİDEN OKUNMADI (raporlar üzerinden, D104); TDV luristan · nihavend--iran · Iranica BĪJĀR · ČAHĀRBĀḠ-E GARRŪS bu oturumda okundu.
9. Petek düzeyinde Nihâvend–Luristan bitişikliği ÖLÇÜLMEDİ (§2 emilme) — benzetim koşu sonrası.
