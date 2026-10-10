# KASA-ZAYIF42-1010 — ÖZ-İLAN zayıf 42 ("yalnız bulunamadı / doğrulanamadı") — sıranın sonu

Görev: YILDIRIM BAYEZIT (ÖZ-İLAN sırası ④) · Araştırmacı: KASA · salt okuma.
Evren: `origin/makine/umit` 63a904d8 `CELISKI-ICKAYNAK-1010.json`, `yuksek:true`, `sinif:OZ-ILAN-ISABET`, `guc` ≠ `guclu`
(42 kalem). Kural (§9.8 ② şerhi, koordinatör): cümle BAŞINDAKİ `bulunamadı` kaydın TAMAMI hakkındadır, içindeki değil.

## 0. ÖNGÖRÜ (okumadan ÖNCE — ayrı commit)
Sınıflar (güçlü 87'deki sekiz türün zayıf kovaya uyarlanmışı):
- **BEYAN** — not yalnız "kaynak bulunamadı / doğrulanamadı" diyor; dilimin YANLIŞ olduğunu söylemiyor ⇒ hata adayı DEĞİL
  (dürüst belirsizlik; gövde-tanık sınıfının notlardaki izi).
- **ÇELİŞKİ-İMASI** — "bulunamadı"nın yanında başka bir kaynak/tarih anılıyor ve dilimle çelişiyor ⇒ gerçek aday.
- **BAŞKA-KAYIT** — not başka bir kayıt/dilim hakkında.
- **ÖLÇÜLEMEDİ** — metin kısa/kesik, ne dediği anlaşılmıyor.
Öngörü (güçlü 87'de "Malta tipi" çekirdek ~19/87 = %22 idi; zayıf kovada daha az bekliyorum):
- BEYAN **30 ± 6** · ÇELİŞKİ-İMASI **5 ± 3** · BAŞKA-KAYIT **4 ± 3** · ÖLÇÜLEMEDİ **3 ± 3**.
- Cümle BAŞINDA `bulunamadı` olanlar (§9.8 ② sınıfı) **≥ %50**.
- ÇELİŞKİ-İMASI olanların en az biri kaynakla teyit edilebilir bir yanlış dilim (≥ 1, %60).
- Bölge: Afrika partisi (`yerlesimler_e9353f.js`) ağırlıklı (≥ %30) — GÖRÜNÜRLÜK'teki 7 `bulunamadı` defterinin 5'i oradan.

## 1. ÖLÇÜM (42 kalem okundu; gövde kontrolü `data/` 63eb206f üstünde, salt okuma)
Ön gözlem: 42 kalem **29 ayrı not** — Moldova ÇIKARIM notu 10 kayıtta birebir (Z1-3, 9-14, 41), Kuban/Stavropol 1441
notları 3+3 kopya (Z5/27/29 · Z6/28/30), Bosna ek29 5 kayıtta iki varyant (Z22-26). Kopya-yapıştır kütlesi öngörüde YOKTU.

| sınıf | kalemler | n (ayrı not) |
|---|---|---|
| **BEYAN** | Moldova ×10 · Kirmanşah Z4 · Kuban/Stavropol ×7 (Z5,6,27-31) · Luristan Z7 · **Mljet Z8 (⚠️ aşağı)** · Sarmiento Z15 · Tocopilla Z16 · Başkale Z19 · Gümrü Z20 · Çaldıran Z21 · Bosna ek29 ×5 (Z22-26) · Katar ×2 (Z32-33) · Barkol Z34 · Chenzhou Z35 · Ganzhou Z36 · Ji'an 1648 Z37 · Sambalpur Z39 · Seyûn Z40 · Şeyhrumi Z42 | **39** (26) |
| **ÇELİŞKİ-İMASI** | **Feyzâbâd Z17** · **Ji'an 1861 Z38** | **2** (2) |
| **BAŞKA-KAYIT** | Mbande Z18 (not Karonga hakkında) | **1** (1) |
| **ÖLÇÜLEMEDİ** | — | **0** |

### 1.1 ÇELİŞKİ-İMASI ikisi — aynı tip: "başı kaynaklı, künyesi VAR, bitişi bulunamadı ⇒ yazılmadı"
- **Feyzâbâd Z17:** veri `__BOSLUK__ 1657 → 1859`. Not: Dürrânî fethi 1182/1768 (Iranica) — `afgan-durrani` künyesi
  **VAR** (devletler.js). Bâbürlü istilâsı 1645-47 (TDV) `buhara 1584-1657` diliminin içinde — `babur-imparatorlugu`
  künyesi **VAR**. İkisi de bitiş günü yok diye yazılmamış.
- **Ji'an Z38:** 清史稿 卷21 '辛亥，粵匪陷吉安' ≈1861-08-30 — `taiping` künyesi **VAR**; Qing geri alışı bulunamadı ⇒ `isg:` yok.
⇒ İkisi de **KASA-UCSUZ-ISGAL-1010 sınıfı** (uçsuz işgal) — yeni bir tür değil, o kovanın öz-ilandaki izi.
Kaynakla teyit (öngörünün ③'ü) bu turda **YAPILMADI**: Ji'an geri alış günü ve Dürrânî bitişi aranmadı ⇒ ÖLÇÜLEMEDİ.

### 1.2 SÜRPRİZ (bulgu): tek GERÇEK gövde hatası BEYAN notunun altında
**Mljet Z8** — not yalnız "1358-1410 sahibini ADIYLA veren kaynak BULUNAMADI" diyor (BEYAN). Ama gövde
`s: macaristan 1358-02-18 → 1459-03-07`, oysa kaydın KENDİ `v:` kaynağı LZMK `mljet`: *"God. 1410. Mljet je konačno
potpao pod vlast Dubrovačke Republike"* ⇒ Dubrovnik ~1410'da, veri 1459'da başlatıyor (~49 yıl). Bu, KASA-GOVDE-TANIK-
TARAMA-1010 satır 113'te zaten ölçülmüştü. ⇒ **Öz-ilanın zayıflığı gövde hatasını öngörmüyor**: not "1358-1410
belirsiz" diyor, hata ise 1410-1459'da — notun SUSTUĞU aralıkta. §9.10 ① bir kez daha: işaret, teşhis değil.

### 1.3 Diğer yan bulgular (hüküm değil, kuyruk adayı)
- **Bosna ek29 ×5 (Z22-26):** metin "bulunamadı" değil, **"bu paket kapsamında ARAŞTIRILMADI"** — 1281-1538/1556
  dilimleri tanıksız; BEYAN'ın en zayıf alt türü ⇒ araştırma kuyruğu adayı (Hırvat/Macar sınırı, LZMK/HE).
- **Kuban / Stavropol (Z31):** not *"1502-03-01 … hassasiyet şişmiş"* diyor ama `ek_bozkir.js` `altinorda … t:1502-03-01`
  diliminde `kesinlik:"yil"` **YOK** ⇒ öz-ilan alana yansımamış (küçük düzeltme adayı; `data/` DONUK, öneri). 1502-1557
  açık sorusu Emre kararı D (gevşek himaye) ile kapsanıyor — çelişki saymadım.
- **Ganzhou Z36 / Chenzhou Z35:** Chen Han / Tianwan 1352-1368 kaynaklı ama **künye yok** (`eksik_kimlik`) — beyanlı
  `__BOSLUK__`, hata değil; künye borcu listesine aday.
- **Tocopilla Z16:** çelişen tek tanık es.wikipedia (22 Mart) — Wikipedia ipucu, tanık değil ⇒ BEYAN.
- **Seyûn Z40:** "YARIM YÜZYIL KABALIĞI" öz-ilanı — kesinlik alanı ölçülmedi.

### 1.4 Öngörü ↔ ölçüm
```
BEYAN 30 ± 6                         ✗ 39   (kopya kütlesi: ayrı notta 26 — o zaman ✓)
ÇELİŞKİ-İMASI 5 ± 3                  ✓ 2    (alt sınırda)
BAŞKA-KAYIT 4 ± 3                    ✓ 1
ÖLÇÜLEMEDİ 3 ± 3                     ✓ 0
cümle BAŞINDA bulunamadı ≥ %50       ✗ 1/42 = %2 (yalnız Mbande) — kaba ıskalama
ÇELİŞKİ'den ≥1 kaynakla teyit %60    ÖLÇÜLEMEDİ (aranmadı) — ama Mljet (BEYAN) zaten teyitli yanlış
Afrika (e9353f) ≥ %30                ✗ 0/42 (Afrika'nın tamamı: 1/42, afrika2.js)
```
**Iskalamanın sebebi (ölçülü):** öngörüyü GÖRÜNÜRLÜK'ün `BULUNAMADI_DEFTER`'inden kurdum — o defter `kaynak:` alanı
`bulunamadı` ile BAŞLAYAN kayıtlar. Bu 42 ise CELISKI-ICKAYNAK'ın notun HERHANGİ yerinde kelimeyi yakalayan süzgecinden.
İki evren farklı; birinin bölge/konum dağılımını ötekine taşıdım. Ders: **öngörü evreninin süzgecini, başka bir
süzgecin çıktısından kurma.**
