# ODAK-KAPAT-0930 — kapsam_genis + odaksız YABANCI maddeler

Makine okunur liste: `denetim/ODAK-KAPAT-0930.json` (`oneriler[]`: dosya · t · b · eski · yeni · guven · gerekce · delil).

## Evren
- `index.html`in YÜKLEDİĞİ 165 `kronoloji_*`/`olaylar*` dosyası · **8200 madde**.
- `odak_olc.py` ise `data/`daki BÜTÜN dosyaları tarar (178 dosya, 9781 madde) → 13 YÜKLENMEMİŞ,
  untracked dosya (`kronoloji_cok_once1281_*` 7 · `cok_ince_*` 5 · `cok_1923_1945`) **1051 odaksız**
  getiriyor ⇒ alet bugün `ODAKSIZ 1531 > tavan 480` der ve kapı ÖTER. Yüklü evrende ODAKSIZ 480 =
  tavan. Bu dosyalar index.html'e bağlanmadan önce odak almalı (tahta M-5651).

## Ölçüm (gerçek `arac/odak_cozum.js`, yamalı kopya)
| | önce | yama sonrası |
|---|---|---|
| BEYANLI→yabancı | 655 | **156** |
| ODAKSIZ | 480 | **68** |
| KUTULU | 263 | 1174 |
| kırık atıf | 1 (Ogaden, `bilinen_kusur`) | 1 — **yeni 0** |

Birleşik yama 911/911 madde eşleşti (anahtar dosya+t+b, mükerrer 0): kova ① 499 · kova ② 412.
Kova ② (ODAKSIZ 480): YUKSEK 316 · ORTA 76 · GOZDEN-GECIR 20 · COZUMSUZ 68
(sirbistan 16 · orta_asya 13 · olaylar_p0068b 10 …). Her öneride `kova` alanı var.

## İki yönlü sınav
- **Düz:** yukarıdaki tablo — yeni kırık atıf 0.
- **Ters:** yamaya 1 sahte `odak_yer` + 1 sahte `odak_kimlik` sokuldu → kusur 1 → 3, ikisi de adıyla yakalandı.
- `denetim/ODAK-KAPI-SINAV.py` **KOŞMADI**: `data/` kirli, betik kendini reddediyor (çıkış 2). Yerine yukarıdaki iki yön.

## Güven kovaları (655)
| kova | sayı | ne demek |
|---|---|---|
| YUKSEK | 349 | `odak_yer`: ad BAŞLIKTA + o gün taraf devletin yerleşimi · ya da `odak_kimlik`: maddenin KENDİ `devlet`/`taraflar` alanı, o gün ≥2 yerleşim |
| ORTA | 120 | ad yalnız AÇIKLAMADA (`d`) + taraf devletin · ya da madde devlet taşımıyor → dosyanın devleti (`app.js:14224` eşlemesi) |
| GOZDEN-GECIR | 30 | ad başlıkta ama o gün taraf devletin değil — sahibi okusun |
| COZUMSUZ | 156 | taraf yok ve dosyanın künyesi yok (`kronoloji_balkan` 47 · `sinir_guney_g8` 27 · `anadolu` 26 · `iran` 16 · `almanya` 12 …) ya da taraf o gün <2 yerleşim |

## Uygulanan eleme kuralları
- `kapsam_genis:true` YERİNDE KALIR (`app.js maddeOdakKutusu` yorumu: beyan doğru, kamera odağa gider).
- `yer_id` önerilmedi — olay yeri iddiası YAZILMADI, yalnız kamera alanı (`odak_yer`/`odak_kimlik`).
- İmza/toplantı yeri (`… Antlaşması/Sözleşmesi/Protokolü/Kongresi/Konferansı`) elendi — "Londra Sözleşmesi — Borneo sınırı" kamerayı Londra'ya göndermez.
- Yönelme/çıkma ekli adlar (`Venedik'e`, `Londra'dan`) başlık-dışı kovada elendi.
- Kişi/kavim/unvan kelimesi olan yerleşim adları (`Bulgar`, `Şeyh`, `Konstantin` …) elendi.
- `odak_kimlik`e OSMANLI konmadı (amaç tam da Osmanlı kutusundan kaçmak); karışık taraflı maddede yalnız yabancı taraf.

## Bilinen borç — Ogaden
`kronoloji_dogu_afrika.js` 1897-01-01 `yer_id:"Ogaden"`: `yerlesimler.js:1329`daki Ogaden bir
`tur:"bolge"`, `d:[]` KASITLI SAHİPSİZ dolgu noktası ⇒ `sehirler` havuzunda yok. Çare veride
(yer_id kaldırılır ya da gerçek bir yerleşim) — sahibi karar verir. Liste dışı kırık atıf: **0**.

## Tavan
İndirilmedi. Tavan yama İNDİKTEN sonra `py arac/odak_olc.py --tavan-yaz` ile indirilir — ama o
koşu 13 yüklenmemiş dosyayı da sayar ve tavanı 1531'e YÜKSELTİR. ⇒ `--tavan-yaz` bu dosyalar
bağlanmadan / odak almadan önce KOŞTURULMAMALI; ya da alet `index.html` evreniyle sınırlanmalı.
