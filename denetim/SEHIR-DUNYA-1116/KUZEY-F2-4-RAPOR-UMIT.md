# KUZEY F2-4 (Britanya + İrlanda) — rapor (UMIT, 17 Kasım 2026)

Dosya: `data/sehir_tarihce_kuzey_avrupa_4.js` (`window.SEHIR_TARIHCE_KUZEY_AVRUPA_4`, `arac/sehir_tarihce.py yaz` ile).
Denetle: `py -I -X utf8 arac/sehir_tarihce.py denetle data/sehir_tarihce_kuzey_avrupa_4.js` → çıkış **0**, **ihlal 0**, uyarı 8.
Commit/push YOK. Ağaç: UMIT, worktree sehir-afrika-1116 (dal sehir-afrika-kuzey-dogu-1116). Kalan: `YAZILAMADI-KUZEY-4.md`.

## ① Ölçülen
- Evren: 63 BORC satırı (BK 49, İrlanda 14). tarihce_var iki yönlü (yerel + origin/main 81 dosya, 2927 kayıt; ad + ≤10 km):
  63'ünde gerçek eşleşme 0 (5 uzak ad çakışması elendi).
- **Yazılan: 12 şehir · 10 sahiplik dönemi · 79 olay.**
  - Zincirli (ilk < atlas başlangıcı): Glasgow 550→1281 (strathclyde→iskocya), Bristol 1051→1281, Newcastle 1080→1281,
    Plymouth 1086→1281 (ingiltere), Limerick 922→1000 (limerick-norse; dikiş olayı yüzyıl hassasiyetinde),
    Waterford 900→1000 (waterford-norse, atlasla aynı sahip), Cork 821→1000 ve Derry 546→1000 (beyanlı __BOSLUK__ +
    dikis_beyan), Kilkenny 600→1000 (kunye_yok 'osraige' + dikis_beyan) (9).
  - Zincir boş (şehir atlas başlangıcından sonra; atlas düzeltilmeli): York 71 (atlas 43), Galway 1124 (atlas 1000),
    Belfast ~1177 (atlas 1000) (3).
- Uyarılar (8): 3 'atlas başlangıcı düzeltilmeli', 3 dikiş beyanlı borç (Cork, Derry, Kilkenny), 1 künye bekliyor (osraige),
  1 hayalet (waterford-norse 900 < künye 914).
- `ilk`: Derry 546 (AU, gün yok) · Glasgow ~550 · Kilkenny 6. yy · York 71 · Cork 821 · Waterford 9. yy · Limerick 922 ·
  Bristol 1051 · Newcastle 1080 · Plymouth 1086 · Galway 1124 · Belfast ~1177. Gün hassasiyetinde ilk: 0.
- Takvim: bu partide 1582 sonrası GÜN yazılmadı (hepsi yıl) → Jülyen/Gregoryen çevirisi gerekmedi. 1707/1801/1922
  geçişleri hiçbir zincire düşmedi (zincirler ≤1281'de atlasa devrediyor) → bu günler aranmadı.

## Tek / çift kaynak (ilk)
- ÇİFT: Limerick (Britannica 922 + AU U922.3 'The fleet of Luimnech'), Derry (AU U546.1 + Britannica 'mid-6th century',
  yüzyıl düzeyinde) = **2**. York 867 olayı da ASC ile çift.
- TEK: York, Glasgow, Kilkenny, Cork, Waterford, Newcastle, Plymouth, Belfast (Britannica); Bristol (ASC); Galway (AFM) = **10**.
- İki AKADEMİK (hakemli) kaynakla teyit: **0**. Birincil kaynak neşri kullanılan: 4 (AU ×3 sayfa, AFM, ASC/Ingram).

## Zayıf tanık
- Özne zamir / ad cümlede yok: York ('the site'), Limerick ('they ... it'), Belfast ('there'), Kilkenny (katedral cümlesi) = **4**.
- Yaklaşık/yüzyıl: Glasgow 'about 550', Belfast 'probably ... about 1177', Waterford '9th century', Kilkenny '6th-century' = 4 not.
- Konvansiyonel sahiplik çıkarımı (beyanlı): Glasgow-Strathclyde (cümlede Glasgow yok), Plymouth (Domesday → İngiliz tacı).

## ② Bulunamayan / yazılmayan
- Denenip yazılmayan 5: Manchester, Lincoln, Exeter (tarihli Roma tanığı yok), Cardiff (yalnız yüzyıl), Nottingham (Danelaw
  geçişi çıkarım ister). Denenmeyen 46 (süre).
- Okunmadı: Open Domesday (arama URL'si 404), AU 668 Fertas, AU 800-921 taraması, AFM ilk cilt (çok sayfalı), Ptolemaios,
  Irish Historic Towns Atlas, Historic England, VCH (british-history.ac.uk) — süre.

## Siteler
Açıldı/okundu: britannica.com 17 sayfa (York, Manchester ×2, Lincoln, Cardiff, Glasgow, Bristol, Newcastle (+1 404 +arama),
Galway, Belfast (+1 404), Cork, Limerick, Londonderry (+2 404 +arama), Strathclyde (+1 404 +arama), Scotland/unification,
Exeter, Waterford, Kilkenny, Plymouth, David I) · celt.ucc.ie 8 (AU U500, U546, U821, U914, U922, U1123, U1124; AFM M1124 sayfası;
AFM gezinti) · avalon.law.yale.edu 2 (ASC 9. ve 11. yy) · opendomesday.org 1 (404).
Britannica'da tanıklar yalnız görünür gövdeden (innerText) alındı. Vikipedi kullanılmadı. Dosya/PDF indirilmedi.

## ③ Atlas önerileri
1. Atlas başlangıcını düzelt: York 43 → 71 (Roma işgali), Galway 1000 → 1124 (AFM), Belfast 1000 → ~1177 (önce AU 668 okunsun).
2. Künye: 'osraige' (Osraige/Ossory krallığı) açılsın ya da 'irlanda' künyesinin kapsamı beyan edilsin; waterford-norse f 914
   künyesi Britannica '9th century' kuruluşuyla birlikte gözden geçirilsin.
3. Strathclyde → İskoçya geçişi: 1018 ↔ 1034 çelişkisi bağımsız akademik kaynakla (ör. Broun / Woolf) hakemli karara bağlansın.
4. Cork / Derry 1000 öncesi sahip: Münster–Norse Cork ve Cenél nEógain için akademik kaynak (DIB, IHTA) — beyanlı boşluk ödensin.
5. Ayrı kayıt adayı: Newcastle Roma kalesi (Pons Aelius), Cardiff Roma kalesi (süreklilik kesik: Britannica 'continuous existence' 11. yy).
6. Leeds atlas noktasında s/d/v dönemi yok (ölçüldü) — atlas tarafında incelensin.
