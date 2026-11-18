# D1 künye partisi — salt-okur doğrulama (18 Kasım 2026)

Doğrulanan dal: `origin/d1-kunye-1118` (de2d11cee; origin/main'e göre +2 commit: 74ab5fe01, de2d11cee).
Karşılaştırma ucu: `origin/main` d1ee15f2a (ayrı worktree). Hiçbir veri/kod değiştirilmedi.
Her iki ağaçta önce `coz-c` (devletler_harita.js, donemler.js; ikisi de çıkış 0) koşuldu.

## 1. denetle / renk_olc çıkış kodları

| Komut | d1 dalı | origin/main |
|---|---|---|
| `py arac/denetle.py` | **1 (İHLAL VAR)** | 0 (temiz) |
| `py arac/renk_olc.py` | 0 | 0 |

### denetle d1 = 1 — tek sebep
`Ek denetim ✗ kaynaksız s: kaydı: 58 (tavan 1930) · kayıt-kaynaksız 2349 (tavan 2301)` — main 2291 (tavanın altı).
**+58 "DÖNEM-YALNIZ YENİ" kayıt**: yerlesimler_ek30.js 8 kayıt (Aotearoa Māori Kuzey Ada içi, Te Waipounamu, Avustralya İç Kesimi x5 Güney/Kuzey/Kuzeybatı/Kuzeydoğu/Orta, Tazmanya) + yerlesimler_gamerika.js 7 görünen "Beyan G..B.." kaydı (listede ilk 15 gösterilir, toplam 58). Dönemlere `d:` bağlandı ama kayıt düzeyi `kaynak:` yok. Çare (denetle'nin kendi hükmü): tavan yükseltilmez, kayda kaynak yazılır.

### Uyarılar (tavan / ⚠) — d1 ile main KIYASI
- **YIL-TEMSİLÎ BORÇ tavanı aşıldı (441 > 436): main'de DE VAR, aynı sayı (441).** d1 getirmedi, önceden mevcut; ihlal değil.
- Değişmez 2sk TAVAN AŞILDI (5961 > 5938): main'de de aynı (5961). Önceden mevcut.
- Değişmez 1 sahipsiz: d1 **210** (main 296; tavan 296) = **−86** iyileşme -> `⚠ TAVAN GEVŞEK — BEKLENEN_SAHIPSIZ = 210 yapılmalı`. (86 = d1'in bağladığı 86 s:/d: dönemiyle uyumlu.) Aynı commit'te tavan 296 -> 210 inmeli.
- Değişmez 1c belgesiz: 1 (tavan 2) -> `BEKLENEN_BELGESIZ = 1` yapılabilir (main'de de 1; gevşeklik önceden de vardı).
- Değişmez 5b 141 -> 113, 5c 2896 -> 2942, Değişmez 7 2568 -> 2570 (bilgi satırı, beklenen 731 zaten aşık; +2 sorgusuz enklav d1 kaynaklı, ihlal değil).
- Diğer bütün Değişmez/Ek denetim satırları main ile aynı (diff'te başka fark yok). Hayalet devlet (4d) sayıları değişmedi.
- Değişmez 2/2s: d1'de ek ihlal yok (23 künyenin 18'inde `kronoloji:[]`, t = ufuk 2000-12-31, kırılma doğurmuyor).

### renk_olc (çıkış 0 her ikisinde) — d1 vs main
- Komşusuyla çakışan çift (ΔE<12): **5 -> 8** (+3). Yakın-ama-değmeyen ihlal: **61 -> 65** (+4). Aynı-hex çakışması 0 -> 0. Altlıktan ayrışmayan 0. Aynı-anahtar örtüşmesi 27 -> 27. Denizle karışan 74 -> 74. "BEYAN EDİLMEMİŞ PAYLAŞIM" uyarısı 60 -> 60 (yeni künyelerin hiçbiri paylaşıma girmedi).
- Yeni +3 çakışma: ge-kayapo-halklari ↔ brezilya-imparatorlugu **4.3** · orta-avustralya-aborijin ↔ bati-avustralya **9.9** · yolngu-aborijin ↔ meiji-japonya **11.7**.
- Yeni +4 yakın-ama-değmeyen: guney-konu-kanal-halklari ↔ ranquel **4.60** (586 km, 1281-1879) · macushi-wapishana-halklari ↔ hollanda-guyanasi **8.30** (500 km) · purus-madeira-halklari ↔ portekiz-brezilyasi **9.30** (473 km) · pampa-patagonya-halklari ↔ portekiz **11.51** (401 km, 1281-1883).
- Çıkış kodu etkilenmedi (tavanlar renk_olc'de çıkış kodunu bloklamıyor) ama 7 yeni çift gözle düzeltilebilir: yeniden `py arac/renk_olc.py --oner` (özellikle ge-kayapo, ranquel/guney-konu, macushi, purus).

## 2. Künye ömürleri (23 yeni id)
Kimlikler: maori-iwi, nauru-kabileleri, marshall-irojlari, vanuatu-topluluklari, pampa-patagonya-halklari (parti 1, f=1281-01-01, t gerçek bitiş: 1840-02-06 / 1888-10-01 / 1885-10-15 / 1906-10-20 / 1885-01-01); parti 2: 18 künye f=1281-01-01 t=2000-12-31 (ufuk).
- Hepsinde **f < t** (sıfır uzunluk / ters yok). Mükerrer **id yok** (devletler.js'te tüm id'ler tekil). 23 yeni künyenin adlarında mükerrer yok (dosyada 4 eski mükerrer ad var: Romanya, Tanca Uluslararası Bölgesi, Lihtenştayn Prensliği, Tiwanaku Devleti — d1'den DEĞİL, önceden mevcut).
- Atlas dönemleri: yerlesimler*.js içinde yeni id'ye bağlı **86 s:/d: dönemi** tarandı; **0 tanesi künye ömrü dışında** (hayalet devlet yok). Denetle 4d/hayalet sayıları main ile aynı.
- Not (ömür, hakkaniyet): f=1281-01-01 hepsinde "atlas ufku" olarak beyanlı (ic_not_f); t=2000-12-31 18 künyede "ufuk sonu" beyanlı. Vanuatu t=1906-10-20 tek kaynak, metin okunmamış (künye kendi ic_not_t'sinde beyan ediyor). Nauru gün çelişkili (14 Nis/16 Nis/Ekim 1888), t=1888-10-01 beyanlı.

## 3. BOYALAR renkleri
- 23 yeni anahtar da `arac/renkler.py` BOYALAR'da var (eksik yok). **Aynı-hex çakışması yok** (23 yeni hex benzersiz; renk_olc "0 aynı-hex").
- Yeni-yeni en yakın çiftler ΔE: nauru ↔ yolngu 4.3 (#24ccd8 ↔ #24d2d8, ikisi de Okyanusya — fakat 1888/2000 dönemleri farklı yerlerde; iki yerleşim komşu mu bakılmalı) · maori-iwi ↔ mundurucu 2.5 (#2442d8 ↔ #2448de; Yeni Zelanda ↔ Brezilya, birbirine değmez) · marshall ↔ macushi 7.0 · cape-york ↔ vanuatu 9.1 (okyanusya-okyanusya, değmez).
- Eski BOYALAR'la ham ΔE (tüm palet, mesafe gözetmeden) 0.3-2.5 (ör. nauru ↔ sardinya-aragon 0.3, yolngu ↔ aglebi 0.5) — palet 2274 kimlikte zaten bu yoğunlukta; ölçüt coğrafî yakınlık + eşzamanlılıktır (renk_olc). Gerçek çakışmalar §1'deki 7 çift.

## 4. Çeviri eşitliği (7 dil: ar de en es fr pt ru)
- `data/ceviri_<dil>_devlet.js`: **23 yeni id'nin hiçbiri hiçbir dilde yok** (7 dil x 23 = 161 eksik girdi). Dil kümeleri birbirine eşit (hepsi aynı 23 eksik).
- Kapı `arac/ceviri.py denetim` (BEKLENEN_CEVIRI_EKSIK, devlet: 27 her dilde; denetle_yayin satır 2146 bunu yayın kapısında çalıştırır). Ölçüm kaynağı `arac/ceviri_cikar.js` = `window.DEVLETLER`; bu, **index.html'in yüklediği paket_*.js'ten** gelir. d1 dalında `paketle yenile` koşulmadığı için çıkarıcı yeni künyeleri görmüyor: **d1 ve main'de `ceviri.py denetim` aynı 27/27 "aşılmadı"** gösteriyor (yanıltıcı temiz; node çıktısında maori-iwi/yanomami-halklari YOK, 2292 devlet).
- Hesap: `paketle.py yenile`den sonra devlet eksik = 27 + 23 = **50** her dilde, tavan 27 -> **aşım +23 x 7 dil**; yayın kapısında (denetle_yayin) bloke. Öneri: ya çeviri tavanı 27 -> 50 açılır (Emre kuralı: önce ölç, aç, sonra raporla), ya 23 adın 7 dile çevirisi (`py arac/ceviri.py kuyruk; uygula`) yapılır.
- (KASA tavan açışı 24 -> 27 / önceki "28" notu da bu hat; yeni künyeler 27'yi aşırtır.)

## Özet / eksikler
1. denetle d1 = 1: 58 dönem-yalnız kayıt için `kaynak:` yaz (ek30 + gamerika) **ya da** (tavan yükseltilmez) kaynakları ekle; ardından `BEKLENEN_SAHIPSIZ` 296 -> 210 (iyileşme, aynı commit).
2. YIL-TEMSİLÎ 441>436 ve 2sk 5961>5938 uyarıları main'de de aynen var -> d1 kaynaklı değil.
3. `paketle yenile` + `surum_damgala` koşulmamış (çeviri kapısı yanıltıcı temiz) — koşulunca çeviri devlet tavanı +23 aşar.
4. renk: 7 yeni yakın çift (ge-kayapo/brezilya-imp 4.3 en kötü) -> `renk_olc --oner` ile yeniden seç.
