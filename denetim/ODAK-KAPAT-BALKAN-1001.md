# ODAK-KAPAT-BALKAN-1001 — `kronoloji_balkan.js` odaksız maddeleri

Koordinatör görevi (M-5724 sırası). `data/`ya YAZILMADI; öneri listesidir.

## 0. Ölçüm
- `py arac/odak_olc.py --dosya kronoloji_balkan.js`: 177 madde · KONUMLU 81 · BEYANLI 81 · **ODAKSIZ 15**.
  (BEYANLI 81 bu görevin kovası değil; 0930 listesinde öneriler duruyor.)
- 🔴 15 maddenin **7'sinin** `kaynak:` alanı `data/savaslar.js` — ATLAS kaydı, kaynak değil (D207).
- TDV indirildi: `navarin` · `edirne-antlasmasi` · `anabolu` · `yunanistan` · `kosova-savaslari` 200.
  302 (ölü slug): `bileka` · `anavarin` · `misolonghi` · `mesolongi` · `domeke` · `domeke-savasi` ·
  `korint` · `buyuk-taarruz` · `dumlupinar` · `dumlupinar-meydan-muharebesi` · `kocatepe` · `ipsilantis`.
  TDV arama sayfası sonuçları JS ile yüklüyor — curl ile okunamadı (ölçülemedi ≠ yok).

## 1. Tablo — 15 madde

| # | t | başlık (kısa) | kova | öneri | kaynak cümlesi (birebir) |
|---|---|---|---|---|---|
| 104 | 1388-08-27 | Bileća Meydan Savaşı | **B** | atlasta yok: **Bileća** | kaynak `savaslar.js` (atlas) + Fine (basılı); TDV `bileka` 302 |
| 105 | 1389-06-15 | I. Kosova'ya katılım | **B** | atlasta yok: **Kosova Ovası** | TDV `kosova-savaslari`: "…ilki 791 (1389), diğeri 852’de (1448) yapılan iki savaş." |
| 123 | 1821-02-22 | İpsilantis'in Eflak-Boğdan'a girişi | **C** | — (Yaş havuzda) | TDV `yunanistan` (madde kaynağı): "…1821'de Fenerli beyler tarafından yönetilen Eflak-Boğdan'da … Yunan isyanı başladı." — kaynak BÖLGE veriyor, şehir değil |
| 127 | 1825-06-22 | Tripoliçe'nin geri alınması | **A⏳** | `yer_id:"Mora (Tripoliçe)"` | olayın öznesi şehrin kendisi; ama kaynak `savaslar.js` (atlas). TDV `yunanistan` Tripoliçe'yi yalnız "eyalet merkezi" olarak anıyor, 1825'i değil ⇒ Hüküm 3 gereği bekler |
| 128 | 1826-04-22 | Missolonghi'nin düşüşü | **B** | atlasta yok: **Missolonghi** | kaynak `savaslar.js` (atlas); TDV slug 302 |
| 130 | 1827-10-20 | Navarin Deniz Savaşı | **B** | atlasta yok: **Navarin** | TDV `navarin`: "Navarin’i asıl öne çıkaran olay, 29 Rebîülevvel 1243’te (20 Ekim 1827) … müttefiklerin limanda bulunan Osmanlı-Mısır donanmasına karşı düzenledikleri âni baskındır." |
| 131 | 1829-09-14 | Edirne Antlaşması | **A** (imza) | `yer_id:"Edirne"` | TDV `edirne-antlasmasi`: "Osmanlı delegeleri … 28 Ağustos’ta Edirne’ye gittiler." · "Asıl görüşmelere 3 Eylül’de Orta Saray’daki Bostancı dairesinde başlandı." · "Böylece son şeklini alan metinler 15 Rebîülevvel 1245 (14 Eylül 1829) Pazartesi günü imza edildi." (aynı madde, ardışık anlatı) |
| 133 | 1831-10-09 | Kapodistrias'ın suikastı | **C** | — (Anabolu havuzda) | TDV `yunanistan`: "…Kapodistrias 1831'de bir suikasta kurban gitti." — yer yok; `anabolu` maddesi suikastı anmıyor |
| 136 | 1833-02-06 | Otto'nun gelişi | **C** | — | TDV `yunanistan`: "1833'te Otto ve beraberindeki heyet Yunanistan'a geldi…" — ülke; Nafplion kaynakta yok |
| 146 | 1864-05-21 | İyon adalarının katılması | **B** | atlasta yok: **İyon adaları** (takımada; Korfu · Kefalonya · Zaklise havuzda, İTİLMEDİ) | TDV `yunanistan`: "İyon adalarının başlıcalarını Korfu, Paksos, Lefkas (Levkas, Ayamavra), Kefalonya ve Zanta teşkil eder." |
| 147 | 1823-01-01 | Solomos'un şiiri | D | — | yazım olayı; kaynak `bulunamadı` |
| 148 | 1865-01-01 | Millî marş kabulü | D | — | karar |
| 150 | 1893-08-06 | Korint Kanalı açıldı | **B** | atlasta yok: **Korint Kanalı** | TDV `yunanistan`: "…Korint körfezi Korint Kanalı ile Ege denizine bağlanmıştır." (açılış günü yok) |
| 154 | 1897-05-17 | Dömeke Savaşı | **B** | atlasta yok: **Dömeke** | kaynak `savaslar.js` (atlas); TDV `domeke` 302 |
| 173 | 1922-08-26 | Büyük Taarruz | **C** | — (Karahisâr-ı Sâhib (Afyon) havuzda) | kaynak `savaslar.js` (atlas); `d` "Afyon-Dumlupınar HATTINDA" — hat; TDV `buyuk-taarruz`/`dumlupinar`/`kocatepe` 302 |

## 2. TOPLAM — 15
```
A    1   Edirne (imza, TDV)
A⏳  1   Mora (Tripoliçe) — kaynak atlas (savaslar.js)
B    7   Bileća · Kosova Ovası · Missolonghi · Navarin · İyon adaları · Korint Kanalı · Dömeke
C    4   İpsilantis (bölge) · Kapodistrias · Otto (yer yok) · Büyük Taarruz (hat)
D    2   şiir · marş
```
⇒ Uygulanırsa ODAKSIZ 15 → **14** (A⏳ kabul edilirse 13). Edirne havuzda birebir.

## 3. Tutarlılık düzeltmesi (kendi raporum)
`ODAK-KAPAT-AVRUPABATI-1001.md` #5 Melilla'yı "özne" gerekçesiyle **A** yazmıştım; kaynak
cümlesi orada da alınmamıştı. Hüküm 3 ile tutarlı olması için **A⏳**'ya çekildi (aynı commit).
