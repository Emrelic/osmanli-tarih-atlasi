# DOĞU BORÇ 5 — F2 tarihçe raporu (UMIT, 17 Kasım 2026)

Dosya: `data/sehir_tarihce_dogu_borc_5.js` (`window.SEHIR_TARIHCE_DOGU_BORC_5`, `arac/sehir_tarihce.py yaz`).
Ölçüm: worktree `sehir-afrika-1116` (origin/main'in 281 commit gerisinde; yalnız yeni dosya yazıldı),
`py -I -X utf8 arac/sehir_tarihce.py denetle` → **13 şehir · 38 sahiplik dönemi · 83 olay · ihlal 0 · uyarı 8 · çıkış 0**.
Commit/push yapılmadı. Üretici: scratchpad `uret_borc5.py` → JSON → `yaz`.

## ① Ne ölçtüm / yazdım

**İki yönlü `tarihce_var`:** BORC'un üç bloktaki eklenen-boş, durum=BORC 79 satırı; yerel `data/sehir_tarihce_*.js` +
origin/main 81 `sehir_tarihce_*` (git ls-tree + git show), 2942 kayıt; ad / atlas_ad / adlar[] / ≤10 km; atlas noktaları
(`girdi.yukle`, ≤10 km) ayrıca. Parti 1-4'te yazılanlar (Rey, Buşehr, Persepolis, Pasargad, İstahr, Bîşâpûr, Nihâvend,
Alamut, Abadan, Bâmiyan, Sohum, Ahıska, Kuba, Dizfûl, Cündişâpûr, Celâlâbâd, Kısmâyû, Leşkergâh) dışarıda.

**Yazılan 13 kayıt** (dönem · olay · ilk):

| Kayıt | atlas_ad | dön. | olay | ilk | kaynak |
|---|---|---|---|---|---|
| Ahar | Ahar (Karadağ) | 3 | 7 | 222/836-37, ilk anılış, belirsiz | Iranica AHAR |
| Kengaver | — | 3 | 3 | 1. yy (Isidoros 'Congobar') | Iranica KANGAVAR |
| Hürmüz (ada şehri) | — | 6 | 11 | ~1320 (Odoric), belirsiz | Iranica HORMUZ ii |
| Dvin (Debîl) | — (atlas noktası `s:`siz) | 7 | 9 | 4. yy ilk yarısı (Faustos), belirsiz; ark MÖ 3. binyıl | Iranica DVIN |
| Ferah | — | 2 | 5 | 10. yy sonu | Iranica FARĀH |
| Gerdiz | — | 3 | 5 | 213/828 öncesi, belirsiz | Iranica GARDĪZ i |
| Kâzerûn | Kâzerûn | 5 | 12 | 459-484 kuruluş (Pîrûz), belirsiz | Iranica KAZERUN ii |
| Bîrcend | Bîrcend | 1 | 5 | 626/1228 (Yâkūt), belirsiz | Iranica BĪRJAND i |
| Astara (İran) | Astara | 1 | 4 | 10. yy sonu (Hudûdü'l-âlem) | Iranica ĀSTĀRĀ i |
| Eçmiyazin (Vağarşapat) | Eçmiyadzin | 5 | 11 | MÖ 645 (Urartu yazıtı 'Kuarlini'), belirsiz | UNESCO 1011 + Britannica + Iranica EJMIATSIN |
| Bender Enzeli | Bender Enzeli | 0 | 5 | 15. yy sonu | Iranica ANZALĪ i (+ Britannica) |
| Erâk (Sultânâbâd) | Erâk (Sultânâbâd) | 0 | 2 | 1223/1808 kuruluş | Iranica ARĀK + Britannica — **çift (yıl)** |
| Çârîkâr | — | 2 | 4 | Ekber devri (≤1605), belirsiz | Iranica ČĀRĪKĀR (+ Britannica 1841) |

- **Tek/çift:** ilk tanık çift 2 (Erâk yıl düzeyinde akademik+genel ansiklopedi; Eçmiyazin UNESCO+Britannica yüzyıl
  düzeyinde, ikisi de hakemli değil). Kayıt düzeyinde ikinci kaynak 5 (Eçmiyazin, Erâk, Enzeli, Çârîkâr; Dvin/Kâzerûn/
  Kengaver/Eçmiyazin'de künye geçişleri TDV MUÂVİYE ve ABBÂSÎLER — bu partide açılıp günleri okundu). Kalan 8 kayıt
  tek kaynak (Iranica). TDV'de 13'ünün de şehir maddesi yok (arama: ahar → 'ÂHAR' kâğıt cilâsı, yanlış madde;
  bircend, astara, debil, üçkilise, gerdiz, ferah, enzeli, sultanabad, çarikar → şehir başlığı yok).
- **Zayıf tanık: 6** (özne zamir / madde konusu): Ahar ('it'), Kengaver ('it'), Dvin ('there'), Ferah ('It'),
  Kâzerûn ('They' = üç köy), Çârîkâr ('it'). `ilk.kesinlik: belirsiz` 8.
- **Hicrî:** ≈30 tarih tablo takvimiyle (civil epok; 1582 öncesi Jülyen, sonrası Gregoryen) hicrî ∩ mîlâdî → kesişimin
  ilk günü, her biri `ic_not`ta. Şemsî 3 tarih (1312, 1323, 1344 Ş.) Nevruz başı. Kaynağın günü verdiği 3 tarihte kaynak
  günü yazıldı, tablo farkı beyan edildi (Dvin 17 Şevval 19 = 6 Ekim 640, tablo ≈12 Ekim; Ahar 4 Şâban 683 = 17 Ekim 1284,
  tablo 16 Ekim; Ferah 8 Muharrem 1279 = 6 Temmuz 1862, tablo tutar).
- **Abi merkez (beyanlı yaklaşıklık) 2:** Kâzerûn → Bîşâpûr (Iranica KAZERUN ii bağı; 644 gün komşudan `bisapur-ir`,
  TDV ŞÂPÛR bu partide yeniden okunmadı); Eçmiyazin → Dvin (640-10-06, Iranica DVIN/EJMIATSIN bağı). Kengaver'in 642'si
  Nihâvend Savaşı'ndan türetildi (`nihavend-ir`, beyanlı).
- **Zincir:** 38 dönemin 16'sı `__BOSLUK__`, 1'i `__BILINMIYOR__` (Dvin 1236-1900), 1 `kunye_yok`
  (`ahar-pistekinlileri` 1191-1226). Yer tutucu olay yok. 4 dikiş `dikis_beyan` (Ahar, Astara, Bîrcend, Eçmiyazin →
  1281 'ilhanli').
- **Uyarılar (8):** 4 dikiş borcu · 1 künye bekliyor (ahar-pistekinlileri) · 2 'atlas başlangıcı düzeltilmeli' (Enzeli,
  Erâk) · 1 hayalet (Hürmüz `hurmuz-sultanligi` 1515-03'e kadar, künye 1514'te bitiyor; beyanlı).
- **İç çelişkiler (beyanlı):** Iranica GARDĪZ '570/1162' (hicrî 570 = 1174-75; dizgi hatası sayıldı, hicrî yıl alındı) ·
  Iranica HORMUZ ii ↔ QESHM ISLAND (Ayâz'ın göçü Cerûn mu Kişm mi, 1301) · Erâk kurucusu (Yûsuf Han Gürcî ↔ Feth Ali Şah) ·
  Enzeli (Iranica XV. yy anılış ↔ Britannica 'XIX. yy başı kuruldu') · Eçmiyazin (Britannica 344 başşehirlikten çıkış).

**Açılan siteler** (istekler ≥5-7 sn aralıklı; 429 gelmedi; Iranica iç aramasında 1 kez 520 — döngü durduruldu; indirme
yok; kendi sekmelerim tab-19, tab-20): iranicaonline.org — AHAR, KANGAVAR, HORMUZ ii, DVIN, FARĀH, GARDĪZ i, JIROFT
(başlık) + JIROFT ii, BAYLAQĀN, KAZERUN ii, BĪRJAND i, ĀSTĀRĀ i, KHALKHAL i, EJMIATSIN, QESHM ISLAND, ANZALĪ i, ARĀK,
ČĀRĪKĀR; marand (404), maku (→ MĀKŪLĀ), iç arama marand/salmas/sava/kazerun · html.duckduckgo.com — ≈30
`site:iranicaonline.org` araması · islamansiklopedisi.org.tr — MUÂVİYE b. EBÛ SÜFYÂN, ABBÂSÎLER, ÂHAR (yanlış madde) +
11 arama · whc.unesco.org/en/list/1011 · britannica.com — Arak-Iran, Ejmiatsin, Kazerun, Birjand, Charikar, Kangavar,
Bandar-e-Anzali; 404: Vagharshapat, Dvin, Hormuz-Iran, Farah-Afghanistan, Gardez, Astara-Iran, Ahar. Britannica YZ
kontrolü: Arak ve Ejmiatsin sayfalarında `textContent`te 'using AI' YOK; fetch edilen öteki sayfaların HTML'inde de yok.
Sayfalarda ajanlara yönelik talimat metni görülmedi.

## ② Ne bulamadım

Ayrıntı `YAZILAMADI-DOGU-BORC-5.md`. Kaynak açılıp yazılamayan 4: **Cîruft** ve **Halhâl** (BORC noktası modern kasaba,
ortaçağ şehri başka yerde; modern kasabanın yıllı tanığı yok), **Beylekan** (ortaçağ şehri harabe, koordinat yok),
**Kişm** (Iranica ada maddesi, kasaba tanığı yok). Iranica'da şehir maddesi bulunamayan 11: Selmâs, Merend, Sâve,
Lenkeran, Kunduz, Meymene, Zâbil, Tâlekan, Sîrâf, Eski Culfa, Mâku. Çift akademik teyit hiçbir ilk tanıkta yok.

## ③ Ne istiyorum — atlas önerileri

1. **Bender Enzeli:** atlas 1281 'ilhanli' → ilk anılış XV. yy sonu (Iranica); başlangıç ≈1495'e çekilmeli.
2. **Erâk:** atlas 1808-01-01 → 1808-02-28 (hicrî 1223 ∩ 1808; iki kaynak 1808).
3. **Ahar, Astara, Bîrcend, Eçmiyazin:** atlasın 1281 'ilhanli' başlangıcı kaynaksız (dikiş borcu). Kâzerûn'da 663/1264
   İlhanlı tanığı var, atlasla tutarlı.
4. **Yeni nokta adayları** (atlasta yok, zincir hazır): Dvin (atlas noktası `s:`siz; 350-1236 kaynaklı), Hürmüz ada şehri
   (1320-1900; Portekiz 1515-1622, Safevî 1622, Maskat 1798-1854), Ferah (1862 Afgan), Gerdiz (870-974 Saffârî tâbiiyeti),
   Çârîkâr (1880 Afgan), Kengaver.
5. **Künye:** `ahar-pistekinlileri` (Molûk-i Ahar, en geç 1191 – 1226; Iranica AHAR).
6. **Eçmiyazin ilk tanığı İNCELEME:** UNESCO 'Kuarlini' (II. Rusa) eşitlemesi akademik kaynakla teyit edilmeli
   (Armenian Academy / Urartu yazıt neşirleri — Salvini *CTU*); teyit çıkmazsa ilk.t 0163-01-01'e (Iranica) çekilmeli.
7. **LISTE düzeltmesi:** Cîruft, Halhâl, Beylekan satırları modern kasabalardır; ortaçağ şehirleri (Şehr-i Dakyânûs,
   eski Halhal, Örenkale) ayrı satır olmalı.
