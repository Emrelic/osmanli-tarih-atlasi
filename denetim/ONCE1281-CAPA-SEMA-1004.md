# ONCE1281-CAPA-SEMA-1004 — çapa modeli (F1): köyün kuruluşu ile halkın varlığı AYRI

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (Emre F1 kararı)
Emre: *"Köyün kuruluşu ile halkın varlığı AYRI iki olgu sayılsın."* · **Veriye yazılmadı; 41 noktanın hiçbirine
dokunulmadı.** Bu bir ŞEMA önerisidir (`VERI-YAPISI.md`ye koordinatör yazar).
Ölçüm: `girdi.yukle()` + `girdi.oku_devletler()` + `denetle.degismez1` (bellekte), HEAD baş = son `109735f3`.
Betik: scratchpad `capa1.py`.

## ① Çapa mevcut şemada nasıl ifade ediliyor — ÖLÇÜLDÜ, icat edilmedi

Veride "devletsiz halk toprağı" için **iki yazım biçimi ZATEN var**:

| biçim | nasıl | veride | motor | Değişmez 1 |
|---|---|---|---|---|
| **P1** — halk künyesi | `s:` dönemi halkın kimliğiyle (`inuit`, `dene`, `xhosa` …) | 41 "sonra kurulmuş" noktanın **41'i** | boyar (halkın rengi) | sahipli |
| **P2** — kasıtlı boşluk | `kasitli_bosluk:true` + `bos:"kabile"` (+ `tur:"bolge"`) | **147** kayıt (`bos` dağılımı: kabile 149 · devletsiz 142 · veri-yok 46 · insansiz 10 · hata 7); Taino üçlüsü bu biçimde (`bos:"devletsiz"`) | boyamaz; `_kusatilmis` kasıtlı boşluğu DEVRETMEZ (`uret_petek.py:4845`) | **sahipsiz** sayılır (`degismez1` `kasitli_bosluk`'u okumuyor) |

- 41 noktanın ilk sahibi **26 ayrı kimlik**: `inuit` 10 · `nama-orlam` 3 · `dan-guro`, `benin-kralligi`, `merina-oncesi`,
  `herero` 2'şer · `dene`, `tlingit`, `kri`, `hidatsa`, `mandan`, `vendat`, `miami`, `wicita`, `ponka`, `occaneechi`,
  `kanem-tubu`, `zerma`, `mossi-vagadugu`, `dagbon`, `jukun-kvararafa`, `tiv`, `nijer-deltasi`, `nyamvezi`, `manica`,
  `xhosa` 1'er. **Künyesi YOK: 0.** Künye türü: `devlet` 32 · `krallik` 9 (halk künyeleri "devlet" türünde yazılmış).
- **Taino:** `devletler.js`'te künye **YOK** (`taino` / `arawak` taraması: yalnız `sarawak-brooke`). Taino üçlüsü
  zaten P2 (sahipsiz, kasıtlı) — P1'e geçerse künye gerekir (Emre kalemi, F6 emsali).
- ⇒ **Çapa yeni bir TÜR değil:** P1 kaydın kendisi zaten çapadır (halkın toprağı, 1281'den). Eksik olan çapa
  değil, **köyün kuruluşunu motoru tetiklemeden yazacak bir yer.**

## ② Tek kayıt mı, iki kayıt mı — ölçüt: motor hangisini SESSİZCE yutmaz

**Kodun söylediği:**
- Motor `kur:`u okur: `kur > g` VE `_sahipli` ⇒ petek komşuya DEVREDİLİR (`uret_petek.py:4937-4940`); `_kusatilmis`
  `kur > g` ve sahipsiz peteği yutar (`:4847`). ⇒ Köy kuruluşu `kur:`a yazılırsa çapa (aynı kayıt) o güne kadar
  KAYBOLUR — F1'in önlemek istediği tam bu.
- `go:` emsali VAR: *"önemin söndüğü gün — YALNIZ app.js (etiket kalabalığı); motor okumaz"* (`girdi.py:176`).
  Arayüz `kur:`u yalnız dizin metni olarak kullanıyor (`app.js:9187` "kur. YYYY", `:9249` "kuruluş YYYY").
- İki kayıt: motorda aynı/çok yakın koordinat için **özel bir yol yok** (`uret_petek.py`, `girdi.py`, `denetle.py`
  taraması). Köy ile çapa aynı koordinatta olursa iki Voronoi tohumu üst üste biner; farklı koordinat ise çapa için
  **uydurma bir konum** demektir (çapanın kendi koordinatı yok). Ayrıca 3 km kuralı (`YAKINLIK_ESIK_KM`) karşılıklı ve
  kaynaklı `ikiz:` beyanı ister. ⚠️ Üst üste tohumun motordaki sonucunu ÖLÇMEDİM (koşu ister); risk kod okumasıdır.

**ÖNERİ: TEK KAYIT, İKİ ALAN.**
```
{ ad:"Uqsuqtuuq (Gjoa Haven)", …,
  s:[{f:"1281-01-01", t:"1880-09-01", d:"inuit"}, …],   ← ÇAPA: halkın toprağı (mevcut P1, DOKUNULMAZ)
  koy_kur:"1927-01-01",                                  ← YENİ: köyün kaynaklı kuruluşu — motor OKUMAZ (go: emsali)
  capa_ad:"Netsilik İnuitleri",                          ← YENİ (isteğe bağlı): koy_kur'dan önceki etiket
  kaynak:"… The Canadian Encyclopedia 'Gjoa Haven': 'Permanent settlement began in 1927 …'" }
```
Kurallar (denetle'ye eklenecek küçük kontroller):
1. `koy_kur` ile `kur` AYNI kayıtta OLAMAZ (biri motoru tetikler, öteki tetiklemez — ikisi birlikte çelişki).
2. `koy_kur` kaynaksız yazılamaz; kaynak cümlesi `kaynak:`'ta (§4). Kaba köy tarihi (F2) → `koy_kur` YAZILMAZ,
   kaba ifade `not:`'a.
3. Arayüz: `koy_kur`'dan önce `capa_ad` (yoksa halk künyesinin adı), sonra `ad`; dizinde "köy kuruluşu YYYY".
   Motor değişmez ⇒ **§9.1 motor dondurmasına dokunmaz**; yalnız `girdi.py BILINEN_ALANLAR`'a iki satır +
   `app.js` etiket mantığı.
⚠️ `girdi.py`'ye alan eklemek dört tuz dosyasından birine dokunmak demek (`§9.1`): tam inşa koşusunu bekler ya da
   alan eklenene kadar yükleyici "bilinmeyen alan" UYARISI basar (hata değil).

## ③ Değişmez 1 etkisi — ÖLÇÜLDÜ (`denetle.degismez1`, bellekte)

| seçenek | sahipsiz |
|---|---|
| BUGÜN | **309** |
| **(i) tek kayıt + `koy_kur`** (öneri) | **309** (değişmez) |
| (ii-a) köy günü aynı kaydın `kur:`'una yazılırsa | 309 (Değişmez 1 değişmez — ama motor çapayı devreder, harita değişir) |
| (iii) çapayı P2'ye çevirmek (`s:` halk silinir, `kasitli_bosluk`+`bos:"kabile"`) | **350** (+41) — beklenen 309 aşılır, kapı ÖTER; halk rengi kaybolur |

## ④ F2 ile birlikte: 45 KABA kaydın kaçı çapa olarak kurtarılır?

| alt grup | sayı | çapa modelinde |
|---|---|---|
| KABA, köy tarihi 1281'den SONRA (`SONRA_KABA`) | **30** | çapa ZATEN P1 olarak 1281'den duruyor; F2 gereği `koy_kur` YAZILMAZ, kaba ifade `not:`'a. **Kayıp yok** — ama "kurtarılan" bir tarih de yok |
| KABA, 1281'den ÖNCE (`ONCE_KABA`) | **15** | 1281 öncesine uzatmak çapanın da bir BAŞLANGIÇ tarihi ister; F2 kaba tarihi yasaklıyor ⇒ **0 kurtarılır** |

⇒ **45'in 0'ı 1281 öncesi kampanyaya kazandırılır.** Çapa modeli kaba tarihi meşrulaştırmaz; yalnız köy yazılırken
halkın toprağının kaybolmasını önler.

## ⑤ 🔴 Düzeltme — "kampanya 58'den 13'e iner" sayısı yanlış birleştirilmiş

13 KAYNAKLI kaydın **yalnız 2'si 1281'den ÖNCE**: Spiro (0800) · Moundville (1120). Öteki **11'i 1281'den SONRA**
kuruluş (Gjoa Haven 1927, Lokoja 1860 …) — onlar 1281 öncesi kampanyasının değil BUGÜNKÜ haritanın kalemi (F1'in
`koy_kur`'u). ⇒ Bu 194 noktalık setten 1281 öncesine HEMEN açılabilen nokta **2**'dir (13 değil); MÖ olan yok.
(194'ün kovaları: KAPSAM DIŞI 136 · ÖNCE_KABA 15 · SONRA_KABA 30 · SONRA_KAYNAKLI 11 · ÖNCE_KAYNAKLI 2.)

## Özet

- Çapa **yeni tür değil** — P1 kaydın kendisi. Eksik olan: köy kuruluşunu motoru tetiklemeden yazacak alan.
- Öneri: **tek kayıt + `koy_kur` (motor okumaz, `go:` emsali) + isteğe bağlı `capa_ad`**; `kur:` KULLANILMAZ.
- Değişmez 1: **309 → 309** (P2 seçeneği 350).
- Künye: 41'in 26 kimliğinin **hepsi var**; Taino künyesi YOK.
- F2 + çapa: 45 KABA'dan 1281 öncesine **0**; bu setten 1281 öncesine açılan **2** (13 değil).
