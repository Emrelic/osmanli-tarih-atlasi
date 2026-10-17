# Yol üstü durakları — şartname (post-it #56, Emre, 17 Ekim 2026)

**Kural (Emre):** Kara yoluyla ulaşılan bir yer (örn. Erzincan–Kemah) için arada yerleşim kaydı olmasa bile, o
yolun üstündeki yerler eksklavı engellemek için haritaya katılır; hedefi alan devlet aradaki yolu da kontrol etmiş
sayılır. Bu noktaların petekleri **geçici** hesaplanır ve hedefi anakarayla koridor biçiminde birleştirir.
Bunlar **yerleşim sayılmaz.**

## Statü
- Ad: **yol üstü durağı.** Yerleşim listesinde, aramada, kronolojide, "alandaki yerleşimler" bağlamında YOK.
- Değişmez 1 (sahipsizlik), yerleşim mükerrer taraması, yerleşim sayıları bunları saymaz.
- Konum coğrafî yaklaşıklıktır, **sahiplik tanıklığı değildir** (Kaynak kuralı). Her kayıtta `ic_not` bunu beyan eder.
- Sahiplik hedefin kaynaklı alımından türer (`kaynak_hedef`); hedefin dönemiyle (`f`/`t`) birebir aynı olmak zorundadır.

## Veri
`data/yol_ustu_duraklari.js` → `window.YOL_USTU_DURAKLARI`. Alanlar: `yol, ad, lat, lon, f, t, d, gerekce,
kaynak_hedef, ic_not`. İlk üç kayıt: Zara, İmranlı, Refahiye (Sivas–Kemah hattı). **Bugün hiçbir şey okumaz.**

## Motor işi (HAVVA'ya ayrı iş — motor dondurma kalkmadan yazılmaz)
1. `girdi.py`: dosyayı oku; durakları yerleşimlerden ayrı bir listede taşı (yerleşim sayımına girmesin).
2. `uret_petek.py`: durak günü `[f,t)` içindeyken noktaya `d` sahipli geçici petek ver; komşu Osmanlı peteklerle
   birleştir; yerleşim değil, sahibi `d` olan koridor olarak boya.
3. `denetle.py`: yeni değişmez adayı — "durak, hedefi anakarayla bağlamıyorsa gereksizdir" ve "durak `f`/`t` hedefin
   künyesi dışında olamaz". Tavan gerekirse Emre onaylar.
4. Doğrulama: #56 sahnesi (1401-02-01, Erzincan–Kemah) koşudan sonra eksklavsız olmalı; 1402-07-28'de koridor kalkmalı.
5. Aç: bu ikisi (`girdi.py`, `uret_petek.py`) motor önbelleği tuzu → 7-8 saatlik tam inşa.

## Açık
- Konumlar hafızadan/yaklaşık; HAVVA işinden önce ölçülecek.
- Sivas'ın 1398–1408 sahipliği (TDV `sivas` 1407-08 ifadesi) ayrı not konusu; koridorun batı ucu Sivas'a bağlıdır.
