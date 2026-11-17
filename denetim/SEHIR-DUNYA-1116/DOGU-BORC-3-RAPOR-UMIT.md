# DOĞU BORÇ 3 — tarihçe raporu (UMIT, 17 Kasım 2026)

Dosya: `data/sehir_tarihce_dogu_borc_3.js` (`window.SEHIR_TARIHCE_DOGU_BORC_3`, `arac/sehir_tarihce.py yaz`).
Ölçüm: worktree `sehir-afrika-1116`, `py -I -X utf8 arac/sehir_tarihce.py denetle` → **5 şehir · 14 sahiplik dönemi ·
27 olay · ihlal 0 · uyarı 3**. Commit/push yapılmadı. Üretici: scratchpad `uret_borc3.py` → JSON → `yaz`.

## ① Ne ölçtüm

**İki yönlü `tarihce_var`:** 9 aday; yerel `data/sehir_tarihce_*.js` + origin/main `sehir_tarihce_*` (git show), 86 dosya,
ad / atlas_ad / adlar[] / ≤10 km. Eşleşme yok; yalnız Persepolis–İstahr 5,4 km (ayrı antik yerler, beyanlı).
Atlas noktaları (`data/yerlesimler*.js`, ≤15 km) ayrıca tarandı.

**Yazılan 5 kayıt** (dönem · olay · ilk):
| Kayıt | atlas_ad | dönem | olay | ilk | kaynak |
|---|---|---|---|---|---|
| Persepolis | Persepolis (0,1 km) | 0 (atlasın) | 4 | MÖ 518, ilk anılış, onyıl | Iranica + UNESCO 114 — **ilk çift teyit** |
| Pasargad | Pasargad (0,7 km) | 0 (atlasın) | 2 | MÖ 6. yy kuruluş (en geç MÖ 530) | UNESCO 1106 + Iranica (birleşik); ark MÖ 546 |
| Gûr / Ardaşîr-Hurre (antik Fîrûzâbâd) | — (modern Firûzâbâd 3,9 km) | 4 | 4 | 224 kuruluş, belirsiz | Iranica ×2 (Bosworth, Huff) + UNESCO 1568 koordinat |
| Bîşâpûr | — (atlasta yok) | 5 | 6 | ~266 ilk anılış (yerinde kitabe), belirsiz | Iranica + TDV ŞÂPÛR |
| Büst (Kal'a-i Büst) | Büst (0,6 km) | 5 | 11 | 531-579 → 579, belirsiz | TDV BÜST + Iranica BOST i/ii; bit 1738 çift |

- **Tek/çift:** ilk tanık çift teyitli 1 (Persepolis); kayıt düzeyinde 5/5 iki kaynaklı, ama Gûr'un iki tanığı aynı
  ansiklopediden (ayrı yazarlar). Büst 1149 ve 1738 yıl düzeyinde çift (TDV + Iranica).
- **Zayıf tanık: 2** — Büst (özne 'Şehir'), Bîşâpûr (yıl cümlesinin öznesi ziyaret, şehir adı önceki cümlede → `belirsiz`).
  `ilk.kesinlik: belirsiz` 3: Gûr ('probably'), Bîşâpûr, Büst (saltanat aralığı).
- **Hicrî:** 7 tarih tablo takvimiyle (civil epok, Jülyen) kesişimin ilk günü: 29→649-09-14, 23→644-01-01 (TDV '23 veya 24',
  ilk seçenek beyanlı), 26→646-10-17, 41∩Muâviye biatı→661-07-29 (türetilmiş, beyanlı), 375→985-05-24.
- **Künye geçişleri:** TDV MUÂVİYE (29 Temmuz 661) ve TDV ABBÂSÎLER (28 Kasım 749) bu partide yeniden açılıp okundu.
- **Zincir:** 14 dönemin 3'ü `__BOSLUK__` (Gûr 661-1401, Bîşâpûr 749-985, Büst 749-977), 2'si `__YOK__` (Gûr 1401-1900
  arkeolojik 'suggest', Bîşâpûr 985-1900 Makdisî 'harabe'); hepsi beyanlı. Dikiş borcu yok. Yer tutucu olay yok.
- **Uyarılar (3):** Gûr `sasani` 224-01-01 < künye 224-04-28 (hayalet; Erdeşîr'in isyan devri, beyanlı) · Pasargad ve
  Persepolis 'atlas başlangıcı düzeltilmeli' (aşağıda ③-1/2).
- **Britannica YZ kontrolü:** açılan Britannica sayfası 'Borujerd' — 'using AI' bloğu YOK; gövde tarih vermediği için
  dayanak yapılmadı. Debre Markos 404.

**Açılan siteler** (istekler ≥5 sn aralıklı; 429 gelmedi; indirme yok; kendi sekmem tab-10):
iranicaonline.org — PERSEPOLIS, PASARGADAE, FĪRŪZĀBĀD, ARDAŠĪR-ḴORRA, BĪŠĀPŪR, BOST (başlık, i, ii), BORŪJERD + arama
'borujerd' · whc.unesco.org — 114, 1106, 1568, 1568/maps (bileşen koordinatları); 1568/multiple boş · islamansiklopedisi.org.tr —
BÜST, ŞÂPÛR, LURİSTAN, MUÂVİYE b. EBÛ SÜFYÂN, ABBÂSÎLER + arama 'firuzabad', 'bişapur', 'cûr' · geonames.org — 'qala bost' (AF),
'bust' (AF), 'ganja' (AZ, S), 'shahar' (AZ) · britannica.com — Borujerd, Debre-Markos (404), arama 'Debre Markos'.

## ② Ne bulamadım

Ayrıntı `YAZILAMADI-DOGU-BORC-3.md`: **Burûcird** (Iranica yalnız 'Saljuq times', yıl yok) · **Eski Gence** (koordinat
okunamadı, yazılmadı) · **Adwa** (yalnız 1896) · **Debre Markos** (Britannica maddesi yok, Aethiopica kapalı) ·
**modern Fîrûzâbâd** (kendi kuruluş tarihi yok) · **Leşkergâh** (BORC 'Bust' noktası; 1946 kuruluş, ayrı kayıt bekler).

## ③ Ne istiyorum — atlas önerileri

1. **Pasargad:** atlas -0545-01-01 'ahamenis' arkeolojik inşaat başına (Iranica 546-530) dayanır; yazılı kuruluş tanığı
   (UNESCO 'Founded in the 6th century BC', Kiros) en geç MÖ 530. Denetçi 'atlas başlangıcı düzeltilmeli' der; öneri:
   **değiştirme**, atlas `kaynak`ına "arkeolojik başlangıç (ark), yazılı tanık en geç MÖ 530" beyanı ekle — karar Emre'nin.
2. **Persepolis:** ilk.t = atlas başlangıcı (-0517); uyarı eşit gün içindir, düzeltme gerekmez.
3. **Büst / BORC eşleştirmesi:** LISTE 'Bust' satırı (31.59382, 64.37161) aslında **Leşkergâh**'tır (GeoNames PPLA 0,1 km;
   1946 kuruluş). Atlas 'Büst' noktası doğru yerde (Kal'a-i Büst harabesi 0,6 km). LISTE satırı Leşkergâh olarak düzeltilmeli.
   Atlas 'Büst' 1215-1738 `__BOSLUK__` — bu tarihçe de o aralık için yeni sahip bulamadı (Iranica: Gurlu ve Hârizmşah
   ikametgâhı, yılsız; Babürlü/Safevî kullanımı XVI-XVIII. yy yılsız).
4. **Fîrûzâbâd:** atlas noktası modern kasabada (1281 'ilhanli', DEVRALMA); Iranica'ya göre yuvarlak şehir XIV. yy'dan sonra
   terk edildi, modern kasaba sonra büyüdü — 1281'de iskân edilen yer antik şehirdir (3,9 km batı). Antik nokta
   (UNESCO 1568-004) ayrı yerleşim olarak eklenmeli (zincir hazır: 224 sasani → 649 Râşidîn → BOŞLUK → 1401 YOK).
5. **Bîşâpûr:** atlasta nokta yok (Kâzerûn ~18 km); 266-985 kaynaklı zincir hazır, 985'ten sonra harabe.
6. **Eski Gence / Burûcird:** kaynak/koordinat borcu sürüyor; Burûcird atlas noktası (1281 ilhanli) da kaynaksız devralma.
