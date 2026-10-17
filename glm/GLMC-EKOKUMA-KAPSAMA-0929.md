# GLM-C · EK OKUMA KAPSAMA ENVANTERİ

*Ölçüm: `glm/glmc_kapsama.py` (+ `glm/_glmc_yukle.js` · `glm/_glmb_yukle.js`) · 2026-09-29 13:57:07 · ham: `glm/GLMC-EKOKUMA-KAPSAMA-0929.json`.*

## ① Evren — koordinatör sayısının sınaması (M-5386)

| kova | dosya | madde (yapısal) | t:li | t:siz | derin t: sayısı | regex naif `t:"` | regex çapalı `t:"` |
|---|---|---|---|---|---|---|---|
| olaylar | 74 | **1736** | 1736 | 0 | 1736 | 1709 | 1699 |
| kronoloji | 54 | **5429** | 5429 | 0 | 5429 | 5220 | 4957 |

- Koordinatör: 1715 + 4964 = 6679 `t:` alanı · durum_tablosu.py resmî 1713 (çekirdek).
- Koordinatörün sayısına en yakın yeniden üretim: **anahtar konumlu `t:` (boşluk hoşgörülü) → 1719 / 4957** (Δ4 / Δ7; iki ölçüm arasında veri canlı değişti).
- Yapısal madde sayısı **7165** · naif `t:"` toplamı **6929** · çapalı **6656**. Fark kaynakları: (a) t:siz maddeler regex'e girmez · (b) naif yöntem `etiket:"` gibi sözcük içi eşleşmeleri de sayar · (c) çapalı da `t: "` boşluklusunu kaçırır.
- U2 (index.html yükleme zinciri, 59 etiket): **7165 madde** — kaynak dosyalarla (U1) AYNI
- durum_tablosu.py'nin resmî 1713'ü ÇEKİRDEK (olaylar*) evrenidir; bu ölçümün olaylar kovası **1736** — fark ölçüm anı veri farkıdır. Ayrıca durum_tablosu `kronoloji_sinir_guney_g8.js`yi (81 madde) dışarıda bırakır; bu ölçüm İÇERİYOR — index.html zinciri de onu yüklüyor (U2 = U1).

## ② Kart

- **72 dosya · 777 kart** (koordinatör ön ölçümü 728 idi; GLM-B'den beri veri büyüdü).

## ③ Bağ — kart maddelere nasıl bağlanıyor

| bağ | ölçüm |
|---|---|
`olay:[...]` tarih öneki, `|`'Lİ girdi | **540 ayrı gün** · güne tamamlanınca 539 |
`olay:[...]` tarih öneki, BÜTÜN girdiler | **751 ayrı önek** · tam dizgi 954 |
kart `t:` alanı | 42 kart |
`bag:` dolu | 267 kart |
`zincir:` dolu | 55 kart |
`olay:` dolu | 777 kart |
madde `id` alanı | 0 maddede var |
`zincir` ↔ madde id eşleşmesi | 0 |

- 🔴 Koordinatörün **897** ayrı tarih ölçümü yeniden üretilemedi: `|`'li ayrı gün 540 · bütün önekler 751 · tam dizgi 954 — üçüne de eşit değil (en yakını 954); ölçüm anı kart seti farkı olabilir.
- `bag:` serbest metin, `zincir:` madde id'si olmayan anahtarlar taşıyor (eşleşme 0) — **çalışan bağ `olay:` tarihidir**; `bag`/`zincir` eşleştirilemiyor.
- App'te `|`'sız bağ girdisi de EŞLENİR (`_ekBagEslesir`: `|` yoksa birebir `t`) — ⑥ bu semantikle ölçüldü. Naif ④ ise yalnız `|`'li + GÜN tamamlamasıyla sayar.

## ④ Kapsama

| ölçüm | değer |
|---|---|
| madde (U1, iki kova) | **7165** |
| kartlı madde | **1180 (%16.5)** |
| kartsız madde | **5985** |
| ham dizgi birebir eşleşen (GÜN'e tamamlama YOK) | 1177 |
| ↳ kartsız · kronoloji | 4772 / 5429 |
| ↳ kartsız · olaylar | 1213 / 1736 |

**Yüzyıla göre kartsız madde** (koordinatör kaba ölçümü: 19.yy 1191 · 16.yy 1050 · 15.yy 855 · 18.yy 813 · 14.yy 769 — sınanır):

| yüzyıl | kartsız | toplam |
|---|---|---|
| 10.yy | 1 | 1 |
| 11.yy | 14 | 14 |
| 12.yy | 51 | 51 |
| 13.yy | 282 | 285 |
| 14.yy | 778 | 824 |
| 15.yy | 809 | 942 |
| 16.yy | 1051 | 1241 |
| 17.yy | 600 | 761 |
| 18.yy | 689 | 874 |
| 19.yy | 1117 | 1388 |
| 20.yy | 591 | 782 |
| 7.yy | 1 | 1 |
| 9.yy | 1 | 1 |

- Koordinatör kaba ölçümüne karşı: **16.yy birebir** (1050↔1051) · 19.yy 1117 (onunki 1191) · 15.yy 809 (855) · 18.yy 689 (813) · 14.yy 778 (769). Onunki 'kaba' idi ve yöntemi bilinmiyor; bu ölçüm GÜN tamamlamalı + tüm kartlarla sayar — farkın kaynağı ayrıştırılamadı, beyan.

**Kaynak dosyaya göre** — tamamı kartsız dosyalar ve en boş dosyalar:

- Tamamen kartsız dosya sayısı: **29 / 126**

| dosya | kartsız / toplam |
|---|---|
| `data/olaylar_ek5.js` | 270 / 419 |
| `data/kronoloji_anadolu.js` | 269 / 281 |
| `data/kronoloji_ingiltere.js` | 236 / 270 |
| `data/kronoloji_dogu_afrika.js` | 197 / 218 |
| `data/kronoloji_orta_asya.js` | 187 / 205 |
| `data/kronoloji_italya.js` | 179 / 192 |
| `data/kronoloji_italya_sehir.js` | 174 / 186 |
| `data/kronoloji_fransa.js` | 157 / 184 |
| `data/kronoloji_iran_ardillari.js` | 149 / 155 |
| `data/kronoloji_ispanya.js` | 149 / 158 |
| `data/kronoloji_rusya.js` | 149 / 173 |
| `data/kronoloji_memluk.js` | 148 / 155 |
| `data/kronoloji_guney_asya.js` | 135 / 153 |
| `data/kronoloji_balkan.js` | 131 / 177 |
| `data/kronoloji_cin.js` | 128 / 136 |

## ⑤ Yoğunluk

- Kartlı madde sayısı: 1180 · bu maddelere düşen kart eşleşmesi dağılımı: 1 kart: 699 madde, 2 kart: 225 madde, 3 kart: 103 madde, 4 kart: 44 madde, 5 kart: 35 madde, 6+ kart: 74 madde
- En çok kartlı 12 madde:

| tarih | madde | kart eşleşmesi | dosya |
|---|---|---|---|
| `1821-03-25` | Mora İsyanı başladı | 13 | `data/kronoloji_balkan.js` |
| `1821-03-25` | Yunan İsyanı başladı | 13 | `data/olaylar.js` |
| `1699-01-26` | Karlofça Antlaşması — Macaristan'ın Habsburg'a geçişi | 12 | `data/kronoloji_habsburg.js` |
| `1699-01-26` | Karlofça Antlaşması — Lord Paget ara buluculuk yaptı | 12 | `data/kronoloji_ingiltere.js` |
| `1699-01-26` | KARLOFÇA — Podolya ve Kamaniçe geri alındı | 12 | `data/kronoloji_lehistan.js` |
| `1699-01-26` | Karlofça Antlaşması — Macaristan'ın Habsburg tacında bütünle | 12 | `data/kronoloji_macaristan.js` |
| `1699-01-26` | Karlofça Antlaşması — Mora'nın Venedik'e bırakılması | 12 | `data/kronoloji_venedik.js` |
| `1699-01-26` | Karlofça Antlaşması — ilk büyük toprak kaybı | 12 | `data/olaylar.js` |
| `1774-07-21` | Küçük Kaynarca Antlaşması imzalandı — Kırım Hanlığı Osmanlı' | 11 | `data/kronoloji_kirim.js` |
| `1774-07-21` | Küçük Kaynarca — Kırım bağımsız, Karadeniz'de donanma hakkı  | 11 | `data/kronoloji_rusya.js` |
| `1826-06-15` | Osmanlı, Yeniçeri Ocağı'nı kaldırdı — Rusya için stratejik f | 11 | `data/kronoloji_rusya.js` |
| `1774-07-21` | Küçük Kaynarca Antlaşması | 11 | `data/olaylar.js` |

## ⑥ App gerçeği — uygulamanın BAĞLAMA mantığıyla kapsama

*`js/app.js` mantığının birebir portu: `_ekNorm` · `_ekBagEslesir` (birebir t dizgisi, padding YOK, `|ayırt edici` başlıkta aranır) · `ekKartBagliMi` (EKOBAG_ONERI → `olay` → `baglanti` → magazin/t düşer) · tür döngüsü `:10798`.*

| ölçüm | değer |
|---|---|
| tembel yükleme listesi (`_EKOKUMA_DOSYA_ADLARI`) | 75 dosya · sorun 0 |
| havuz — ekokuma / merak / antlaşma / görsel kayıt | 777 · 792 · 67 · 30 (+EKOBAG_ONERI 13) |
| EKOKUMA_TUR tür sayısı | 15 |
| **ek okuma satırı ÇIKAN madde (app gerçeği)** | **1156 / 7165 (%16.1)** |
| görsel satırı çıkan madde | 67 |
| HİÇBİR maddeye bağlanamayan kart | **14** (bag_yok 11 · madde_yok 2 · gun_var_ayirt_etmedi 1) |

**Tür bazında satırı olan madde** (antlaşma türü `turAlaniYoz` — kayıt tür taşımaz):

| tür | madde |
|---|---|
| `sebep-sonuc` | 541 |
| `tartisma` | 453 |
| `savas-hikayesi` | 197 |
| `teknik-bilimsel` | 163 |
| `antlasma` | 134 |
| `kimdir` | 133 |
| `merak` | 109 |
| `karsi-anlati` | 101 |
| `dis-yankilar` | 70 |
| `magazin` | 60 |
| `bu-ulke-neden-var` | 18 |
| `edebiyat` | 14 |
| `menkibeler` | 4 |
| `kahramanlik` | 3 |
| `sok-haberler` | 1 |

- Naif yöntem (④: 1180 madde) ile app gerçeği farkı: app BİREBİR dizgi eşleşir ve `|ayırt edici` uygular; bu yüzden app sayısı naifin ALTIDIR.
- Kartvizit (`kv-kunye`/`kv-nasil`/`kisi` satırları) bu ölçümün DIŞINDA — onlar padişah/kisiler verisinden gelir, ek okuma kapsamasına girmez.

## Yöntem ve sınırlar

- 🔴 HÜKÜM YOK: hangi boşluğun doldurulacağına Emre karar verir; bu rapor yalnız sayar.
- Kart↔madde eşleşmesi TARİH bazlıdır: aynı tarihte birden çok madde varsa hepsi 'kartlı' sayılır ve kart sayısı dağılımı şişer — kimlik bazlı bağ (madde `id`) 0 maddede bile var olsa evrensel değil.
- U2 yükleme zinciri tek sandbox'ta koşar; aynı globali tanımlayan dosyalar orada birbirini ezer (kaynak zincirinde sorun değil — paket birleşik).