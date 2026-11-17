# KUZEY F2-5 (Britanya) — rapor (UMIT, 17 Kasım 2026)

Dosya: `data/sehir_tarihce_kuzey_avrupa_5.js` (`window.SEHIR_TARIHCE_KUZEY_AVRUPA_5`, `arac/sehir_tarihce.py yaz` ile).
Denetle: `py -I -X utf8 arac/sehir_tarihce.py denetle data/sehir_tarihce_kuzey_avrupa_5.js` → çıkış **0**, **ihlal 0**, uyarı 1.
Commit/push YOK. Ağaç: UMIT, worktree sehir-afrika-1116 (dal sehir-afrika-kuzey-dogu-1116; origin/main 281 commit önde —
yalnız tarihce_var kontrolü origin/main'den okundu). Kalan: `YAZILAMADI-KUZEY-5.md`.

## ① Ölçülen
- Evren 51 (46 denenmeyen + 5 yazılamayan). tarihce_var iki yönlü (yerel + origin/main 81 dosya, 2942 kayıt; ad + ≤10 km):
  27 adayda gerçek eşleşme 0 (2 uzak ad çakışması elendi).
- **Yazılan: 12 şehir · 19 sahiplik dönemi · 63 olay.**
  - Atlas noktalı (zincir atlas başlangıcına): Oxford 912→1000 (wessex→ingiltere), Shrewsbury 924→1281 (wessex→ingiltere),
    Perth 1106→1281 (iskocya) (3).
  - Atlas noktasız (≤5 km ölçüldü; zincir 1900'e): Warwick 915 (mercia→wessex→ingiltere), Northampton 917
    (danelaw→wessex→ingiltere), Durham 995, Hastings 1049, Windsor 1086, Portsmouth 1194, Pembroke 1090, Conwy 1283 (ingiltere),
    Hereford 676 (beyanlı __BOSLUK__ → 1055 ingiltere) (9).
- Uyarı (1): northampton danelaw 921 > künye t 918 (hayalet; ASC Ingram yıl numarası).
- `ilk`: kuruluş 4 (Warwick 915, Durham 995, Portsmouth 1194, Conwy 1283), ilk anılış 8. Gün hassasiyetinde ilk: 0.
- Takvim: 1 Jülyen→Gregoryen çeviri (Oxford teslimi 24 Haziran 1646 J → 4 Temmuz 1646 G, `ic_not_takvim`). 1582 öncesi günler
  (Hastings 28 Eyl / 14 Eki 1066, 2 Şub 1094; Durham 4 Eyl 998) Jülyen bırakıldı. 1707 Birliği künye değiştirmez (ingiltere).

## Tek / çift kaynak (ilk)
- ÇİFT: Oxford (ASC 912 + Britannica 'first written mention ... (912)'), Warwick (ASC 915 + Britannica 'fortified about 915') = **2**.
  Olayda çift: Windsor 1095 (ASC + VCH), Durham 1093 (Britannica + VCH).
- TEK: Northampton, Hastings (ASC); Durham, Windsor (VCH/BHO); Hereford, Shrewsbury, Portsmouth, Perth, Pembroke, Conwy (Britannica) = **10**.
- Akademik referans eseri (VCH, BHO): 2 şehir. Birincil neşir (ASC/Ingram, Avalon): 5 şehirde.

## Zayıf tanık — 3
Hereford (cümlede ad yok: 'The see'), Shrewsbury (zamir 'It' + aralık 899–924 → güvenli uç 924), Portsmouth ('the site').
Ayrıca kuşkulu: Pembroke 1090 (Norman girişi genelde 1093; teyitsiz); konvansiyonel sahiplik beyanı: Durham, Pembroke.

## ② Bulunamayan / yazılmayan
- Açılıp yazılmayan 3: Carlisle (Roma tarihsiz), Drogheda (yüzyıl aralığı, sahip belirsiz), Kirkwall (12. yy > atlas 1137).
- Ertelenen 4: Tamworth, Whitby, Derby, Stirling. Denenmeyen 27. F2-4 kalanı 5 yeniden denenmedi.
- Okunmadı: Open Domesday (ana sayfa arama JS'li; API yolu 404), Shrewsbury 901 tüzüğü, Bede HE (Hereford), Simeon of Durham
  (VCH aracılığıyla), Historic England / Cadw.

## Siteler (açılan)
britannica.com 18 (Durham, Hastings [madde yok, YZ özeti — kullanılmadı], Oxford, Athelstan, Shrewsbury, Hereford, Warwick,
Windsor, Portsmouth, Perth, Drogheda, Kirkwall, Pembroke, Conwy, Saint Cuthbert, Northampton, Carlisle, Durham-county [404]) ·
avalon.law.yale.edu 3 sayfa (ASC 9./10./11. yy) · british-history.ac.uk 4 (VCH Durham vol3 dizin + pp1-15; VCH Berks vol3 dizin +
pp5-29) · whc.unesco.org 1 · opendomesday.org 2 (ana sayfa, API 404). Tanıklar yalnız görünür gövdeden (innerText).
Vikipedi kullanılmadı. Dosya/PDF indirilmedi. Ajanlara talimat veren metin görülmedi.

## ③ Atlas önerileri
1. Atlas başlangıcı geri çekilebilir: Oxford 1000 → 912 (wessex), Shrewsbury 1281 → 924 (wessex), Perth 1281 → 1106 (iskocya).
2. Perth: atlas 1281–1652 kesintisiz iskocya; Britannica İngiliz işgallerini veriyor (≤1298–1313, 1335–1339) — gün aranıp dönem açılmalı.
3. Carlisle: İskoç dönemi (1136–1157) atlasta yok; kaynak aranmalı.
4. Künye: danelaw t 918 → Northampton 921 teslimi (ASC Ingram); modern kronolojiyle (917) karara bağlanmalı.
5. Yeni nokta adayları (atlasta yok): Warwick, Northampton, Durham, Hastings, Windsor, Portsmouth, Pembroke, Conwy, Hereford.
