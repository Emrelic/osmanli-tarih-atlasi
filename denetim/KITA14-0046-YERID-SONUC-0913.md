# KITA 14 · YAMA-YER-ID-0913.json (KITA 25) 36 öneri · SONUÇ

```
ÖNGÖRÜ   denetim/KITA14-0046-YERID-ONGORU-0913.md (ölçümden ÖNCE)
SINAV    denetim/ARAC-KITA14-YERID-0913.js  — öneri ↔ yerlesimler*.js aynı adlı nokta (3821 nokta)
UYGULAMA denetim/ARAC-KITA14-YERID-UYGULA-0913.js — hedef dizgi TAM 1 kez · yalnız değişen dosya yazılır
SONUÇ    16 uygulandı · 20 reddedildi
```

## 🔴 Ana bulgu — `kapsam_genis` önerilerinin 14'ü de reddedildi
`js/app.js` `haritayiOlayaGotur` konumsuz dalı: `kapsam_genis:true` ise kamera
`donemler[donemBul(o.gi)].b` kutusuna uçar. `data/donemler.js` → `DONEMLER[].b` =
**OSMANLI dönem gövdesinin** sınır kutusu (ilk dönem `[29.32,39.58,30.54,40.22]` — Söğüt-Bilecik).
⇒ `kapsam_genis` "olay geniş alanda" demek değil, **"Osmanlı imparatorluk görünümüne geç"** demektir.
14 önerinin **hiçbiri Osmanlı olayı değil** (Hawaii · Cook/Niue · Kasım Hanlığı · Orta Asya 1924 ·
Vestfalya · 1918-20 Habsburg ardılları ve Paris antlaşmaları). Uygulansaydı Hawaii maddesi
kamerayı Anadolu'ya uçururdu. 1.MURAT'ın Vestfalya uyarısı doğru yöndeydi; kusur yakın/uzak
şehir değil, **gövdenin kendisi**.

| # | dosya · madde | yerler (atlasta) | karar |
|---|---|---|---|
| 2 | ek20 Vestfalya 1648 | Münster ✓ · Osnabrück ✗ | red — orta nokta hesaplanamaz (Osnabrück noktası yok) |
| 4 | ek8 ʻAi Noa 1819 | Kailua-Kona ✗ | red |
| 11 | ek8 Cook/Niue 1901 | üçü de ✗ | red |
| 13 | ek8 Kasım Hanlığı 1573 | Kasimov · Moskova, 255 km | red — yakın değil |
| 23 | ek8 Orta Asya 1924 | Hîve · Buhara · Taşkent, 744 km | red (ayrıca 1923-10-29 sonrası dönem kutusu yok) |
| 24 | ok109 Çekoslovakya 1918 | 518 km | red |
| 25 | ok109 Avusturya C. 1918 | Viyana · Graz, 144 km | red — orta nokta keyfî |
| 27 | ok109 Villa Giusti | 210 km | red |
| 28 | ok109 ardıl devletler | 825 km | red |
| 30 | ok109 SHS + Romanya | 808 km | red |
| 31 | ok109 Saint-Germain | Viyana ✓ · Saint-Germain ✗ | red |
| 32 | ok109 Trianon | ikisi ✗ | red |
| 33 | ok109 Versailles | Alsas 4 şehir, 175 km · Versailles ✗ | red — aday: Alsas orta noktası [48.38, 7.157] (koordinatör kararı) |
| 34 | ok109 Neuilly | Batı Trakya 3 kasaba + Sofya, 295 km | red — aday: Batı Trakya üçlüsünün orta noktası (koordinatör kararı) |

## Tek-yer 20 — 14 uygulandı · 6 reddedildi
`yer_kon` değeri **öneriden değil, aynı adlı yerleşim noktasından** alındı.
| nokta (dosya) | madde sayısı | öneri sapması |
|---|---|---|
| Kirman (yerlesimler.js) | 1 (ek22) | 0,4 km |
| Honolulu (yerlesimler_4ff22b.js) | 3 (ek8) | 0,0 |
| Wellington (yerlesimler_ek30.js) | 1 (ek8) | 0,0 |
| Kasimov (yerlesimler_h2_rusya.js) | 2 (ek8) | 0,0 |
| Kâbil (yerlesimler_asya.js) | 1 (ek8) | 4,4 km — nokta değeri yazıldı |
| Hîve (yerlesimler.js) | 2 (ek8) | 0,2 |
| Buhara (yerlesimler_ek14.js) | 2 (ek8) | 1,0 |
| Budin (yerlesimler.js) — "Budapeşte" | 1 (ok109) | 0,0 · ad eşleşmesi elle (Budapeşte ↔ Budin) |
| Viyana (yerlesimler.js) | 1 (ok109) | 0,1 |

Reddedilen 6 — atlasta nokta YOK, akademik gazetteer **sınanmadı** (ölçülemedi):
Tilsit (ek20) · Nukuʻalofa ×2 (ek8) · Tuva ×3 (ek8; ayrıca bölge adı, öneri Kızıl şehri).

## Yazım 2 — uygulandı
`olaylar_ek15.js` `yer_id:"Dârfûr"` → `"Darfur"` ×2 (yerlesimler.js'te `ad:"Darfur"` birebir).

## Değişmezler (uygulama sonrası)
```
D1 324/324 · 1c 4 · D2 528/0 · 2s 101 · 2i 3 · 2t 14 · mükerrer 0 · kronoloji 1355  — YER-ID öncesiyle AYNI
```

## Öngörü
```
1 Darfur ikisi de uygulanır                 ✓ tuttu
2 20 tek-yerin ≥14'ünde aynı adlı nokta     ✗ ÇÜRÜDÜ — ad aramasıyla 13; 14. (Budin) elle eşanlam
3 bulunanlarda sapma ≤5 km ≥%80             ✓ tuttu (13/13 + Budin)
4 Tuva 3 önerisi reddedilir                  ✓ tuttu
5 kapsam_genis'in ≥3'ü orta noktaya çevrilir ✗ ÇÜRÜDÜ — 0; kapsam_genis'in Osmanlı gövdesi olduğu ölçüldü
6 ok109 çoğunlukla kapsam_genis kalır        ✗ ÇÜRÜDÜ — hiçbiri
```

## Dosyalar
```
yazıldı   olaylar_ek8.js (11 yer_kon) · olaylar_ek22.js (1) · olaylar_ok109.js (2) · olaylar_ek15.js (Darfur ×2)
dokunulmadı olaylar_ek20.js (iki önerisi de red) · olaylar_ek7.js (2 kaydı zaten-doğru kovasında)
⚠️ olaylar_ek11.js'e bu kalemde HİÇ yazılmadı (1.MURAT M-3778 "ek11 seninle aynı dosyada" diyor — değil)
```
