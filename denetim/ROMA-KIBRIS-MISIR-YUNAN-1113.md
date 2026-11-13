# ROMA-KIBRIS-MISIR-YUNAN-1113 — eyalet bazlı Roma zincirleri (Kıbrıs · Mısır · Girit · Makedonya)

Tarih: 13 Kasım 2026 · Dal: `emrelic-1113-roma-kibris-misir-yunan` (Roma Doğu Akdeniz dalının tepesinden) · Ağır araç (denetle, renk_olc, denetle_yayin, ceviri) ve `paketle yenile`/`surum_damgala` KOŞTURULMADI (paket/damga çatışmasını push kapısı çözer). Yeni yerleşim noktası/dosyası yok; motor tuzu dosyalarına dokunulmadı.

## 1. Ölçüm (arac/girdi.yukle, bu worktree; MS 150-01-01'de `s:` kapsamı olmayan ya da `__BOSLUK__` yerleşim)
| bbox | önce | sonra | doldurulan |
|---|---|---|---|
| Kıbrıs 34–36/32–35 | 10 | 7 | 3 (Lefkoşa, Girne, Tuzla/Larnaka) |
| Mısır 22–32/25–36 | 96 | 72 | 24 |
| Girit+Kirenayka 31–36/20–27 | 22 | 20 | 2 (Kandiye, Resmo) |
| Yunanistan-Makedonya-Trakya-Moesia 36–44/19–30 | 363 | 357 | 6 (Serez, Kavala, Manastır, Ohri, Karaferye, Vodina) |

Toplam 35 yerlesim, 16 yeni kronoloji maddesi (`data/kronoloji_sinir_antik_roma.js`; yalnız Türkçe). Her eyalet ayrı commit. Yeni dönemlerde çakışma/sıfır uzunluk/künye aşımı/tanımsız kimlik: 0 (kendi doğrulama betiğiyle; kalan uyarılar eski kayıtlara ait). Bbox'ların geri kalanı çoğunlukla Anadolu batısı (başka ajan), Levant, MÖ harabe/höyük ve ortaçağ yerleşimidir.

## 2. Eyaletler, kaynaklar, yıllar
- **Cyprus**: MÖ 58 (-0057) roma-cumhuriyeti — E. Badian, JRS 55 (1965) 110-121 (özet okundu: MÖ 58 Cato'nun Kıbrıs görevi) + Cassius Dio 39.22 (Loeb III). MÖ 22 senatus eyaleti: Dio 54.4.1 (Loeb VI, Cary); künye değiştirmez. → roma-imp -0026-01-16 → bizans 395 (TDV Kıbrıs: «doğu yarısı», 1191'e dek Bizans eyaleti) → 649-01-01 beyanlı `__BOSLUK__` (TDV: 28/649 çıkarma, 685 vergi bölüşümü = ortak yönetim) → mevcut ilk dilim (Lefkoşa 961, Girne/Tuzla 1281). Badian eyaletleşmenin niteliğini tartışır; MÖ 47-30 Ptolemaios dönüşü gösterilmedi (beyanlı).
- **Aegyptus** (24): MÖ 30 (-0029) — Bagnall (ed.), *Roman Egypt: A History*, CUP 2021, böl. 2 (özet) + TDV Mısır; → roma-imp → bizans 395 (TDV Mısır) → **642-09-22** (TDV: İskenderiye teslimi 21 Şevval 21/Eylül 642; tabular hicrî çevirisi Jülyen, ±1-2 gün; eyalet geneli bitiş İskenderiye'ye bağlı, BEYANLI) → beyanlı boşluk → mevcut ilk dilim (969/1250/1281) ya da `bit` 1281. Yerleşimler: Asyut, Asvan, Süveyş, Reşîd, Demenhûr, Kafrüşşeyh, Benhâ, Bilbîs, Fâkûs, Ebûkîr, Atfîh, Feyyûm, Behnesâ, Ahmîm, Kına, Uksur, Esna, Edfû, Kûm Ombo, Dâhile + 4 `s:`siz kayıt (Eski Kahire/Babilon, Feremâ/Pelusium, Bubastis, Abydos; `bos:"veri-yok"` kaldırıldı). Sâsânî işgali 619-629 kaynakta okunmadı, gösterilmedi.
- **Creta et Cyrenaica**: TDV Girit «MÖ 67-66 tamamıyla Roma» (ada geneli; -0065) → imp → bizans 395 → Kandiye mevcut 827'ye; Resmo 827 girit-emirligi, 961 bizans, 1204 mevcut (Hanya kalıbı; zincir Kandiye'den devralındı). Kirenayka şehirleri (Bingazi, Derne, Tobruk, Beyzâ/Kirene, Merc, Tulmeyse) için eyalet/ilhak kaynağı bulunamadı ⇒ yazılmadı.
- **Macedonia**: TDV Yunanistan «MÖ 148'de Makedonya Roma vilâyeti» + TDV Makedonya (MÖ 150-148 isyanları, tek eyalet; -0147) → imp → 395'te beyanlı `__BOSLUK__` (TDV Makedonya 395 sonrası Bizans der; Slav/Avar/Bulgar evreleri yılsız) → mevcut ilk dilim.
- Varlık tanığı: Pleiades (toplu JSON 20261110, Roma dönemi tanıklı, ≤3 km; her dilimin `kaynak:`ında id). Sahiplik tanığı yalnız eyalet düzeyi akademik/TDV kaynak.

## 3. Yazılmayanlar ve nedeni
- **Kıbrıs**: Magosa (Pleiades «Arsinoe?/Ammochostos?» belirsiz), Baf/Paphos (Nea Paphos Pleiades eşleşmesi doğrulanamadı), Limasol (Neapolis/Theodosias ≠ Amathous belirsiz), Akrotiri/Episkopi/Güzelyurt/Dikelya (nokta-bölge, Kourion/Dhekelia eşleşmesi zayıf).
- **Mısır**: Kahire (969 kuruluş; Roma çağı = Eski Kahire yazıldı), Dimyat, Tanta, Mahalle, Mansûre, Menzile, Portsaid, İsmâiliye, Katye (Pleiades eşleşmesi >1,5 km/ad sürekliliği yok), İbrim/Qasr Ibrim (MS 150'de Roma dışı), Sîva, El-Arîş, Mersâ Matruh, Sellûm (eyalet aidiyeti belirsiz: Libya Inferior/Marmarica), Cirge, Tahtâ, Kûs, Deyrût, Ferşût, Mellevî, Minye, Kusayr/Sefâce (Pleiades >5 km), Memphis/Giza/Tanis/Sais/Leontopolis (mevcut MÖ dilimi/kapsam, Ptolemaios arası kaynak yok), Gazze/Askalân/Hebron/Amman/Kerak/Maan/Masada (Levant eyaletleri: Judaea/Arabia).
- **Girit**: Gortyn, Eleutherna, Lyttos, Phaistos, Itanos, Praisos, Polyrrhenia, Phalasarna, Knossos (`s:[]`/MÖ dilimi harabeler; `bit:` ve ada-sonrası zincir kaynaksız), İsfakiye, Sitiye, Kaşot (Pleiades eşleşmesi belirsiz). Kandiye'nin Roma çağı = Herakleion limanı (Pleiades 589802) kabulü beyanlı.
- **Achaea (MÖ 146/27), Epirus, Thracia (MS 46), Moesia Inferior (MS 86)**: eyalet düzeyi akademik/TDV kaynak ELDE EDİLEMEDİ — Britannica 403 verdi, Kolb 2018 (UZH) PDF metni okunamadı, TDV Trakya arama sayfası döndü, Livius.org tek kaynak (45/46) ve «popüler tarih sitesi» sayılabileceğinden yazılmadı. Pleiades'te Roma tanıklı adaylar hazır: Edirne (Hadrianoupolis), Filibe (Philippopolis), Sofya (Serdica), Eski Zağra (Beroe/Augusta Traiana), Köstendil (Pautalia), Enez (Ainos), Varna (Odessus), Rusçuk (Sexaginta Prista), Patras, Korint, Arta, Draç, Üsküp, İnebahtı, Eğriboz, Livadya, Larissa.
- Diocletianus eyalet bölünmesi (293/297): künye değişmediği için ayrı s: dilimi/madde yazılmadı (maddelerde beyanlı).
- Makedonya şehirleri için 395 sonrası Bizans dilimi yazılmadı (yılsız Slav/Avar/Bulgar evreleri) — beyanlı boşluk.

## 4. Ölçülemedi / uyarı
- Tam `denetle.py` (Değişmez 2/2s/3/8), `renk_olc`, çeviri eşitliği, `paketle yenile`+`surum_damgala` ölçülmedi/koşturulmadı ⇒ yeni 16 madde yalnız Türkçe, `ceviri.py` tavanı kapıda yükselebilir (Emre kararı: çeviri yok).
- Değişmez 2s eşleşmesi: kırılmaların ±30 günü içinde, yer metni yerleşim adlarını anan madde ayrı betikle doğrulandı (yeni dilimlerin kırılma tarihleri; mevcut 961/1204/1281 vb. uçlar yalnız mevcut maddelerine bırakıldı).
- Mısır 642-09-22 tabular hesabı; TDV'de gün yok.

## 5. Karar soruları
1. Livius.org (Lendering) Thracia 45/46 için tek kaynak olarak kabul edilsin mi, yoksa Kolb/Brill's New Pauly/CAH metni mi beklensin?
2. 395 sonrası Makedonya/Trakya için «Slav/Avar öncesi» yaklaşık Bizans ucu (örn. 600) beyanlı yazılsın mı, yoksa boşluk mu kalsın?
3. Mısır'da Arap fethi sonrası (642→969/1281) Râşidîn/Emevî/Abbâsî/Tolunoğulları/İhşîdî zincirleri şehir bazında ayrı bir turda mı yazılsın?
