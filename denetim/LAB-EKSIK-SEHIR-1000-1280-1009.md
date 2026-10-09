# LAB-EKSIK-SEHIR-1000-1280-1009 — 1000–1280 diliminde noktası olmayan şehirler (ÖLÇÜM)

**Tür:** YALNIZ ÖLÇÜM + LİSTE. Hüküm Emre'nin. `data/`'ya dokunulmadı (§7), commit/push yok.
**Ölçülen ağaç:** `origin/main` = **`212679f19`** ("CLAUDE.md — AGACIN GERIDEYSE DUR…"), ayrık ölçüm worktree'si `C:\atlas-sehir-olcum` (iş bitince kaldırıldı).
**Yükleyici:** `arac/girdi.py` → `yukle()` (GIRDI_DOSYALARI, 4300 nokta) ve `oku_devletler()` (897 künye). Yıllar astronomik (VERI-YAPISI: `-0099` = MÖ 100); bu dilimde negatif yok.
**Kesinti notu:** ilk ajan konteyner yeniden başlatmasıyla öldü; bu rapor onun ara dosyalarından (aday listesi, eşleme, TDV sayfaları) **yeniden koşturularak** üretildi — bkz. §5.

## 1. Dilim tablosu (yeniden ölçüldü)

Tanım: noktanın **ilk görünüşü** = `s`, `d`, `v` zincirlerindeki dönemlerin en küçük `f` yılı (`isg` ve `kur` hariç). Tarihsiz = hiç `f`'li dönemi olmayan (`bos`/`kasitli_bosluk` boşluk noktaları).

| Dilim | s/d/v ilk `f` (asıl ölçü) | + `kur` dahil edilirse | Koordinatör |
|---|---:|---:|---:|
| MÖ (≤0) | 0 | 0 | 0 |
| 1–999 | 0 | 0 | 0 |
| **1000–1280** | **1** | 2 | 1 |
| 1281–1923 | **4147** | 4150 | 4148 |
| 1924–1945 | 0 | 0 | 1 |
| tarihsiz | 152 | 148 | — |
| **toplam** | 4300 | 4300 | — |

- 1281–1923 içinde **2527** nokta ilk `f`'si tam `1281-01-01` (atlas epoku); 1620 nokta daha geç başlıyor.
- **1281 öncesi tek nokta:** `Lapaha (Muʻa)` (-21.1792, -175.1167, Tonga) — `s[0]` = `{f:1220-01-01, d:tui-tonga-imparatorlugu}`, `kur: 1220-01-01`.
- `kur` alanı 1281 öncesi: Lapaha (1220) ve **Rapa Nui (Paskalya Adası)** `kur: 1200` (zinciri 1281+'dan başlıyor). `bit` 1281 öncesi: Dvin 1236, Askalân 1270 (zincirlerinin önünde ölüm tarihi, ölçüldü, yorum yok).
- 1924+ `f`: yalnız **Şefşâven** (`s`: … 1924-11-15 rif-cumhuriyeti, 1926-05-27 fas) — ama ilk `f`'si 1471, ilk-görünüş ölçüsünde 1281–1923'e düşer. Koordinatörün "1924–45: 1"i büyük olasılıkla bu noktadır (dönem-başı sayımı); 4148 ile 4147 farkı da aynı tanım farkından olabilir — **ÖLÇÜLEMEDİ** (koordinatörün betiği elimde yok).
- Künye tarafı (`oku_devletler`): 897 künyenin **264**'ü 1000–1280 ile kesişiyor (258'i başkentli). Yani motor verisinde o dönemin devletleri var, noktaları yok.

### 1.1 Atlasın açık zaman penceresi (motor/arayüz)

- `js/app.js:89-90` → `BASLANGIC = gunIdx("1281-01-01")`, `BITIS = gunIdx("1923-10-29")`; `js/app.js:9997-9999` kaydırıcı `min=BASLANGIC, max=BITIS`; `tarihAyarla()` (`:10297`) her tarihi bu aralığa kıstırır; olay kırpması `:14675-14676` "önce/sonra" diye kırpar.
- Aynı sabitler `C:\atlas` (lab-1004), `makine/lab` (`C:\atlas-lab-denetim`), `lab-odak-1003`, `origin/kasa-once1281-1003`, `origin/kosu19` dallarında da **1281-01-01** — ölçülen hiçbir dalda 1000–1280 penceresi açık değil.
- Sonuç (ölçüm, hüküm değil): bugün arayüzde 1000–1280 **gösterilmiyor**; o dilimdeki tek nokta (Lapaha) ve 264 künye yalnız veride. §6 ("nokta yoğunluğu olmadan pencere açılmaz") pencere 1000'e indirilirse ihlal olur; ölçülen yoğunluk = 1 nokta.

## 2. Özet sayılar

| Kova | Sayı | Not |
|---|---:|---|
| (a) atlasta var, zinciri ≥1281, 1000–1280 varlığı **işaretli** | **534** / 4147 | 530 tanesi 1281-epok, 4 tanesi daha geç başlıyor; 235 satırda TDV cümlesi/önbelleği var |
| (a) işaretsiz (≥1281 başlıyor, 1000–1280 kanıtı aranmadı/çıkmadı) | 3613 | yalnız CSV'de; işaretsiz ≠ "o zaman yoktu" |
| (b) atlasta **hiç yok** (en yakın nokta >40 km, ad eşleşmesi yok) | **89** | 12 satırda TDV kaynağı |
| ÖLÇÜLEMEDİ (en yakın nokta 10–40 km / ayrı yer mi vekil mi belirsiz) | **68** | insan kararı |

Aday evreni: ilk ajanın 653 adlı 1000–1280 şehir listesi (`aday.py` + `aday2.py`; Selçuklu/Eyyûbî/Bizans/Haçlı/Kiev Rus/Hârizm/… ve Avrupa, Hint, Çin, Amerika, Afrika). Koordinatlar ve hükümdar sütunu bu listede **genel bilgiden** — TDV satırı yoksa "kaynak doğrulanmadı". Eşleme: ad (diakritiksiz, parantez varyantları) ≤80 km → VAR; ad yoksa ≤10 km → VAR-mesafe; 10–40 km → YAKIN (ÖLÇÜLEMEDİ); >40 km → YOK. Liste kapsayıcı değildir: (b) "bu 653 adaydan atlasta olmayanlar"dır, dünyadaki tüm eksikler değil.

## 3. (b) 1000–1280'in önemli şehri, atlasta HİÇ noktası yok (89)

| # | Şehir | ~lat, lon (aday listesi, yaklaşık) | Bölge | Hâkim(ler) ~1000–1280 | En yakın atlas noktası (km, ilk yıl) | Kaynak |
|---|---|---|---|---|---|---|
| 1 | **Ahlat** | 38.75, 42.49 | Anadolu | Mervânî/Ahlatşahlar 1100-1207 → Eyyûbî → Selçuklu/Moğol | Bitlis (51 km, 1281) | TDV: ahlat (önbellek denetim/GLM1-TDV-ONBELLEK/ahlat.txt; gövdede 1000-1280 yılı 23 kez) |
| 2 | **Silvan (Meyyâfârikîn)** | 38.14, 41.01 | Anadolu | Mervânî başkenti → Artuklu → Eyyûbî | Hasankeyf (59 km, 1281) | TDV makale sayfası çekildi (SİLVAN, islamansiklopedisi.org.tr/silvan) ama 1000-1280 yıllı cümle çıkmadı — dönem için ÖLÇÜLEMEDİ |
| 3 | **Sis (Kozan)** | 37.45, 35.82 | Anadolu | Kilikya Ermeni başkenti | Erzin (65 km, 1281) | kaynak doğrulanmadı (çekilen TDV sayfası başka madde: "ŞÎS", kesik sayfa — şehir maddesi değil, kaynak sayılmadı) |
| 4 | **Korint** | 37.94, 22.93 | Balkan | Bizans → Ahaya | Anabolu (Nauplion) (43 km, 1281) | kaynak doğrulanmadı |
| 5 | **Andravida** | 37.90, 21.27 | Balkan | Ahaya Prinkepsliği başkenti 1205 | Zaklise (Zakynthos) (45 km, 1281) | kaynak doğrulanmadı |
| 6 | **Mistra** | 37.07, 22.37 | Balkan | Ahaya (1249) → Bizans 1262 | Koron (48 km, 1281) | kaynak doğrulanmadı |
| 7 | **Misivri** | 42.66, 27.73 | Balkan | Bizans / Bulgar | Prevadi (Provadia) (63 km, 1281) | kaynak doğrulanmadı |
| 8 | **Beylekan** | 39.77, 47.62 | Kafkas | Selçuklu/İldenizli; Moğol 1221 | Şuşa (74 km, 1752) | kaynak doğrulanmadı |
| 9 | **Lazkiye** | 35.52, 35.78 | Suriye | Bizans/Antakya Prk. → Eyyûbî 1188 | Antakya (83 km, 1281) | TDV "LAZKİYE" (islamansiklopedisi.org.tr/lazkiye, çekildi 2026-10-09): "1086’da Selçuklu Sultanı Melikşah şehir ve çevresine hâkim oldu." |
| 10 | **Şevbek** | 30.53, 35.56 | Suriye | Kudüs Kr. 1115 → Eyyûbî 1189 | Maan (41 km, 1281) | kaynak doğrulanmadı |
| 11 | **Kayseriye (Filistin)** | 32.50, 34.89 | Suriye | Kudüs Kr. 1101-1265 | Nablus (46 km, 1281) | kaynak doğrulanmadı |
| 12 | **Taberiye** | 32.79, 35.53 | Suriye | Celile Prk. → Eyyûbî 1187 | Akkâ (45 km, 1281) | TDV "TABERİYE" (islamansiklopedisi.org.tr/taberiye, çekildi 2026-10-09): "Nâvekiyye Türkmenleri 462 (1070) yılı civarında Kurlu Bey kumandasında Taberiye’ye yerleştiler." |
| 13 | **Busra** | 32.52, 36.48 | Suriye | Selçuklu/Börî/Eyyûbî | Amman (82 km, 1281) | TDV "BUSRÂ" (islamansiklopedisi.org.tr/busra, çekildi 2026-10-09): "Uvak tarafından 1071 yılında Selçuklu Devleti’ne bağlanmıştır." |
| 14 | **Tartus** | 34.89, 35.88 | Suriye | Trablus Kontluğu/Templar 1102-1291 | Trablusşam (51 km, 1281) | TDV "TARTÛS" (islamansiklopedisi.org.tr/tartus, çekildi 2026-10-09): "Tartûs 475 (1082-83) yılında Suriye Selçuklu Meliki Tâcüddevle Tutuş tarafından zaptedildi." |
| 15 | **Ayla (Akabe)** | 29.53, 35.00 | Suriye | Fâtımî → Kudüs Kr. 1116 → Eyyûbî 1170 | Maan (102 km, 1281) | kaynak doğrulanmadı (çekilen TDV sayfası başka madde: "AKABE" Kur'an terimi — şehir maddesi değil, kaynak sayılmadı) |
| 16 | **Sîrâf** | 27.67, 52.34 | İran | Büveyhî/Kîş | Firûzâbâd (132 km, 1281) | kaynak doğrulanmadı |
| 17 | **Bust (Leşker-i Bâzâr)** | 31.58, 64.36 | Horasan | Gazneli kışlık merkezi | Kandehar (128 km, 1281) | TDV "BÜST" (islamansiklopedisi.org.tr/bust, çekildi 2026-10-09): "Selçuklular 1045’te şehri yağmaladılar, fakat ele geçiremediler." |
| 18 | **Fîrûzkûh (Câm)** | 34.40, 64.52 | Horasan | Gurlu başkenti ~1146-1215 | Herat (213 km, 1281) | TDV: gurlular (önbellek denetim/GLM1-TDV-ONBELLEK/gurlular.txt; gövdede 1000-1280 yılı 61 kez) |
| 19 | **Bâmiyân** | 34.82, 67.83 | Horasan | Gurlu Bâmiyân kolu → Moğol 1221 | Kâbil (127 km, 1281) | kaynak doğrulanmadı |
| 20 | **Uç** | 29.24, 71.06 | Hind | Kabâce → Delhi | Bahâvelpûr (63 km, 1748) | kaynak doğrulanmadı |
| 21 | **Alamut** | 36.44, 50.59 | İran | Nizârî İsmâilî 1090-1256 | Kazvin (56 km, 1281) | TDV: alamut (önbellek denetim/GLM1-TDV-ONBELLEK/alamut.txt; gövdede 1000-1280 yılı 17 kez) |
| 22 | **Otrar (Fârâb)** | 42.85, 68.30 | Mâverâünnehir | Karahanlı/Karahitay → Hârizmşah; 1219 Otrar olayı | Türkistan (Yesi) (50 km, 1281) | kaynak doğrulanmadı |
| 23 | **Özkent** | 40.77, 73.30 | Mâverâünnehir | Batı Karahanlı ilk merkezi | Oş (51 km, 1281) | TDV "ÖZKENT" (islamansiklopedisi.org.tr/ozkent, çekildi 2026-10-09): "Ancak kendisi Merv’de 395 (1005) yılında öldürüldüğü gibi kardeşleriyle taraftarları esir edilerek tekrar Özkent’e götürüldü." |
| 24 | **Tinmel** | 30.98, -8.23 | Mağrib | Muvahhid çıkış merkezi | Merakeş (76 km, 1281) | kaynak doğrulanmadı |
| 25 | **Kumbi Salih** | 15.77, -7.97 | Batı Afrika | Gana İmparatorluğu başkenti (1076 Murâbıt) | Nema (Néma) (121 km, 1640) | TDV: gana (önbellek denetim/DEVLET-500-1000-tdv-onbellek/gana.txt; gövdede 1000-1280 yılı 7 kez) |
| 26 | **Evdağust** | 17.43, -10.42 | Batı Afrika | Gana/Murâbıt 1054 | Kiffa (138 km, 1640) | kaynak doğrulanmadı |
| 27 | **Mârida (Mérida)** | 38.92, -6.34 | Endülüs | Batalyevs/Muvahhid → Leon 1230 | Badajoz (55 km, 1281) | kaynak doğrulanmadı |
| 28 | **Chartres** | 48.45, 1.49 | Batı Avrupa | Blois-Chartres | Orléans (68 km, 1281) | kaynak doğrulanmadı |
| 29 | **Carcassonne** | 43.21, 2.35 | Batı Avrupa | Trencavel → Fransa 1209 | Narbonne (53 km, 1281) | kaynak doğrulanmadı |
| 30 | **Brattahlíð (Grönland)** | 61.15, -45.51 | Kuzey Avrupa | İskandinav Grönland | Sisimiut (Holsteinsborg) (754 km, 1756) | kaynak doğrulanmadı |
| 31 | **Worms** | 49.63, 8.36 | Orta Avrupa | Kutsal Roma | Mainz (42 km, 1281) | kaynak doğrulanmadı |
| 32 | **Speyer** | 49.32, 8.43 | Orta Avrupa | Kutsal Roma (Salier) | Mainz (76 km, 1281) | kaynak doğrulanmadı |
| 33 | **Bamberg** | 49.89, 10.89 | Orta Avrupa | Bamberg Piskoposluğu 1007 | Nürnberg (50 km, 1281) | kaynak doğrulanmadı |
| 34 | **Goslar** | 51.91, 10.43 | Orta Avrupa | Kutsal Roma (Salier sarayı) | Hannover (70 km, 1281) | kaynak doğrulanmadı |
| 35 | **Braunschweig** | 52.27, 10.52 | Orta Avrupa | Saksonya/Welf | Hannover (55 km, 1281) | kaynak doğrulanmadı |
| 36 | **Salzburg** | 47.80, 13.04 | Orta Avrupa | Salzburg Başpiskoposluğu | Linz (108 km, 1281) | kaynak doğrulanmadı |
| 37 | **Gniezno** | 52.53, 17.60 | Orta Avrupa | Polonya (Piast) ilk merkezi | Poznan (47 km, 1281) | kaynak doğrulanmadı |
| 38 | **Płock** | 52.55, 19.70 | Orta Avrupa | Mazovya | Łódź (90 km, 1281) | kaynak doğrulanmadı |
| 39 | **Salerno** | 40.68, 14.77 | İtalya | Lombard → Apulya Dk. merkezi | Napoli (46 km, 1281) | kaynak doğrulanmadı |
| 40 | **Melfi** | 40.99, 15.65 | İtalya | Apulya Dk. ilk merkezi | Foggia (53 km, 1281) | kaynak doğrulanmadı |
| 41 | **Benevento** | 41.13, 14.78 | İtalya | Benevento Prk. → Papalık 1077 | Napoli (53 km, 1281) | kaynak doğrulanmadı |
| 42 | **Gaeta** | 41.21, 13.57 | İtalya | Gaeta Dk. → Norman | Napoli (71 km, 1281) | kaynak doğrulanmadı |
| 43 | **Cremona** | 45.13, 10.03 | İtalya | Cremona Komünü | Parma (44 km, 1281) | kaynak doğrulanmadı |
| 44 | **Pereyaslavl** | 50.07, 31.46 | Rus | Pereyaslavl Knezliği | Kiev (79 km, 1281) | kaynak doğrulanmadı |
| 45 | **Turov** | 52.07, 27.74 | Rus | Turov Knezliği | Pinsk (112 km, 1281) | kaynak doğrulanmadı |
| 46 | **Halyç** | 49.12, 24.73 | Rus | Galiçya-Volhinya | Yazlofça (Yazlovets) (55 km, 1281) | kaynak doğrulanmadı |
| 47 | **Biler** | 54.97, 50.38 | Volga | İdil Bulgar başkenti (12.-13. yy) | Çistopol (46 km, 1281) | kaynak doğrulanmadı |
| 48 | **Somnat** | 20.89, 70.40 | Hind | Çalukya (Gazneli baskını 1026) | Diu (64 km, 1281) | kaynak doğrulanmadı |
| 49 | **Khajuraho** | 24.85, 79.92 | Hind | Çandela başkenti | Kanpûr (183 km, 1281) | kaynak doğrulanmadı |
| 50 | **Kâlincar** | 25.00, 80.48 | Hind | Çandela kalesi | Ilâhâbâd (Allahabad) (146 km, 1281) | kaynak doğrulanmadı |
| 51 | **Gangaikondaçolapuram** | 11.21, 79.45 | Hind | Çola başkenti (1025 sonrası) | Tranquebar (Tharangambadi) (48 km, 1281) | kaynak doğrulanmadı |
| 52 | **Kalyani (Basavakalyan)** | 17.87, 76.95 | Hind | Batı Çalukya başkenti | Bîdar (60 km, 1281) | kaynak doğrulanmadı |
| 53 | **Halebidu (Dvarasamudra)** | 13.21, 75.99 | Hind | Hoysala başkenti | Seringapatam (Şrirangapatnam) (117 km, 1281) | kaynak doğrulanmadı |
| 54 | **Kançipuram** | 12.83, 79.70 | Hind | Çola | Arkot (Arcot) (42 km, 1281) | kaynak doğrulanmadı |
| 55 | **Navadvipa (Nadia)** | 23.41, 88.37 | Hind | Sena başkenti → Bahtiyar Halacî 1204 | Hûglî (Hooghly) (57 km, 1281) | kaynak doğrulanmadı |
| 56 | **Bihar Şerif** | 25.20, 85.52 | Hind | Pala → Halacî 1193 | Patna (Azîmâbâd) (58 km, 1281) | kaynak doğrulanmadı |
| 57 | **Polonnaruva** | 7.94, 81.00 | Hind | Sinhala başkenti 1070-1232 | Kandy (83 km, 1281) | kaynak doğrulanmadı |
| 58 | **Dambadeniya** | 7.37, 80.15 | Hind | Sinhala başkenti 1220-1272 | Kandy (54 km, 1281) | kaynak doğrulanmadı |
| 59 | **Mansûre (Sind)** | 25.88, 68.78 | Hind | Sind Arap emirliği → Sumra | Haydarâbâd (Sind) (67 km, 1768) | kaynak doğrulanmadı |
| 60 | **Liao Shangjing** | 43.96, 119.38 | Çin | Liao üst başkenti | Chifeng (Ulanhad) (191 km, 1738) | kaynak doğrulanmadı |
| 61 | **Hiraizumi** | 38.99, 141.11 | Japonya | Ōshū Fujiwara 1087-1189 | Morioka (79 km, 1597) | kaynak doğrulanmadı |
| 62 | **Tsaparang/Tholing (Guge)** | 31.48, 79.80 | Tibet | Guge Krallığı | Sirhind (339 km, 1281) | kaynak doğrulanmadı |
| 63 | **Sakya** | 28.90, 88.02 | Tibet | Sakya rejimi 1264 | Şigatse (93 km, 1281) | kaynak doğrulanmadı |
| 64 | **Chaco Kanyonu (Pueblo Bonito)** | 36.06, -107.96 | Amerika | Ata Pueblo merkezi | Acoma Pueblo (Sky City) (124 km, 1610) | kaynak doğrulanmadı |
| 65 | **Mesa Verde** | 37.18, -108.49 | Amerika | Ata Pueblo | Tsegi (Canyon de Chelly) (144 km, 1281) | kaynak doğrulanmadı |
| 66 | **Tula (Tollan)** | 20.06, -99.34 | Amerika | Tolték başkenti (~1150 çöküş) | Tlacopan (Tacuba) (69 km, 1400) | kaynak doğrulanmadı |
| 67 | **Tiwanaku** | -16.55, -68.67 | Amerika | Tiwanaku (~1000-1100 çöküş) | La Paz (56 km, 1548) | kaynak doğrulanmadı |
| 68 | **Nan Madol** | 6.84, 158.33 | Okyanusya | Saudeleur hanedanı | Kolonia (Pohnpei) (19 km, 1887) | kaynak doğrulanmadı — en yakın Kolonia (Pohnpei) 19 km, ilk 1887 — Nan Madol için nokta yok |
| 69 | **Malazgirt** | 39.14, 42.54 | Anadolu | Bizans → Selçuklu 1071 → Ahlatşahlar/Eyyûbî | Erciş (72 km, 1281) | kaynak doğrulanmadı |
| 70 | **Adilcevaz** | 38.80, 42.73 | Anadolu | Ahlatşahlar/Eyyûbî | Erciş (60 km, 1281) | kaynak doğrulanmadı |
| 71 | **Kalatü Caber** | 35.90, 38.48 | Suriye | Ukaylî → Zengî/Eyyûbî | Rakka (48 km, 1281) | kaynak doğrulanmadı |
| 72 | **Rahbe** | 35.02, 40.45 | Suriye | Ukaylî/Selçuklu/Eyyûbî | Deyrizor (45 km, 1281) | kaynak doğrulanmadı |
| 73 | **Afâmiye (Apamea)** | 35.42, 36.40 | Suriye | Antakya Prk./Zengî | Hama (45 km, 1281) | kaynak doğrulanmadı |
| 74 | **Maarretünnümân** | 35.65, 36.67 | Suriye | Haçlı 1098 → Zengî | Hama (58 km, 1281) | TDV "MAARRETÜNNU‘MÂN" (islamansiklopedisi.org.tr/maarretunnuman, çekildi 2026-10-09): "Lü’lü’ 392’de (1002) Fâtımîler’le anlaşarak Maarretünnu‘mân’ı ele geçirdi." |
| 75 | **Merkab** | 35.15, 35.95 | Suriye | Hospitalier 1186-1285 | Hama (73 km, 1281) | kaynak doğrulanmadı |
| 76 | **Cebele** | 35.36, 35.93 | Suriye | Antakya Prk. → Eyyûbî 1188 | Hama (79 km, 1281) | TDV "CEBELE" (islamansiklopedisi.org.tr/cebele, çekildi 2026-10-09): "Mansûr) 1080’de Rumlar’ı kovarak şehre hâkim oldu ve Trablusşam’da hüküm süren Ammâroğulları’nı metbû tanıyarak hâkimiyetini sürdürdü." |
| 77 | **Bâniyâs** | 33.25, 35.69 | Suriye | Kudüs Kr./Börî/Zengî | Sûr (Tyre) — Lübnan (45 km, 1281) | kaynak doğrulanmadı |
| 78 | **Aclûn** | 32.33, 35.75 | Suriye | Eyyûbî kalesi 1184 | Amman (46 km, 1281) | kaynak doğrulanmadı |
| 79 | **Dînever** | 34.59, 47.44 | İran | Hasaneveyhî → Selçuklu | Kirmanşah (46 km, 1281) | TDV makale sayfası çekildi (DÎNEVER, islamansiklopedisi.org.tr/dinever) ama 1000-1280 yıllı cümle çıkmadı — dönem için ÖLÇÜLEMEDİ |
| 80 | **İzeh (Mâlemîr)** | 31.83, 49.87 | İran | Lur-i Büzürg merkezi | Râmhürmüz (66 km, 1281) | kaynak doğrulanmadı |
| 81 | **Ebher** | 36.15, 49.22 | İran | Selçuklu | Sultâniye (49 km, 1305) | kaynak doğrulanmadı |
| 82 | **Kâs (Kath)** | 41.92, 60.75 | Mâverâünnehir | Hârizm (eski başkent) | Yeni Ürgenç (42 km, 1646) | kaynak doğrulanmadı |
| 83 | **Âmul (Çarcuy)** | 39.08, 63.58 | Mâverâünnehir | Selçuklu/Hârizmşah Ceyhun geçidi | Buhara (105 km, 1281) | kaynak doğrulanmadı |
| 84 | **Kâsân** | 41.25, 71.55 | Mâverâünnehir | Karahanlı | Andican (85 km, 1281) | kaynak doğrulanmadı |
| 85 | **Kayalık** | 45.10, 79.80 | Doğu Türkistan | Karluk (Rubruk 1254; yeri yaklaşık) | Kopal (Kapal) (59 km, 1281) | kaynak doğrulanmadı |
| 86 | **Lori** | 41.00, 44.52 | Kafkas | Lori Kr. → Gürcü | Gümrü (Aleksandropol) (61 km, 1281) | kaynak doğrulanmadı |
| 87 | **Ahyolu (Anchialos)** | 42.56, 27.64 | Balkan | Bizans | Ahtapolu (Ahtopol) (57 km, 1281) | kaynak doğrulanmadı |
| 88 | **Süzebolu** | 42.42, 27.70 | Balkan | Bizans | Ahtapolu (Ahtopol) (41 km, 1281) | kaynak doğrulanmadı |
| 89 | **Anavarza** | 37.25, 35.90 | Anadolu | Kilikya Ermeni (Rubenî) merkezi | Erzin (42 km, 1281) | kaynak doğrulanmadı |

## 4. ÖLÇÜLEMEDİ — vekil mi, ayrı nokta mı (68)

Ad eşleşmesi yok ama 10–40 km içinde bir atlas noktası var (ya da elle işaretlendi). Örn. Harran↔Akçakale, Ani↔Kliçatak, Rey↔Tahran. Atlas noktası o şehrin "vekili" sayılır mı — insan kararı.

| # | Şehir | ~lat, lon | Hâkim(ler) ~1000–1280 | En yakın atlas noktası (km, ilk yıl) | Not / kaynak |
|---|---|---|---|---|---|
| 1 | Harran | 36.86, 39.03 | Numeyrî → Selçuklu → Zengî/Eyyûbî | Akçakale (18.2 km, 1281) | en yakın atlas noktası 18.2 km — vekil mi, ayrı nokta mı: insan kararı; TDV: harran (önbellek denetim/GLM1-TDV-ONBELLEK/harran.txt; gövdede 1000-1280 yılı 29 kez) |
| 2 | Ani | 40.51, 43.57 | Bagratlı başkenti → Bizans 1045 → Selçuklu 1064 → Şeddâdî → Gürcü 1199 | Kliçatak (Suser) (14.7 km, 1281) | en yakın atlas noktası 14.7 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 3 | Misis | 36.96, 35.62 | Bizans/Haçlı → Kilikya Ermeni | Yumurtalık (25.6 km, 1281) | en yakın atlas noktası 25.6 km — vekil mi, ayrı nokta mı: insan kararı; TDV: misis (önbellek denetim/GLM1-TDV-ONBELLEK/misis.txt; gövdede 1000-1280 yılı 46 kez) |
| 4 | Samsat | 37.58, 38.48 | Haçlı/Artuklu/Selçuklu | Kâhta (25.8 km, 1281) | en yakın atlas noktası 25.8 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 5 | Ereğli (Konya) | 37.51, 34.05 | Bizans → Selçuklu | Ulukışla (38.7 km, 1281) | en yakın atlas noktası 38.7 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 6 | Menekşe (Monemvasia) | 36.69, 23.06 | Bizans → Ahaya 1248 → Bizans 1262 | Elafonisos (Cervi) (23.1 km, 1281) | en yakın atlas noktası 23.1 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 7 | Preslav | 43.16, 26.81 | I. Bulgar başkenti → Bizans | Şumnu (16.0 km, 1281) | en yakın atlas noktası 16.0 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 8 | Şeyzer | 35.27, 36.57 | Münkızoğulları 1081-1157 | Hama (22.4 km, 1281) | en yakın atlas noktası 22.4 km — vekil mi, ayrı nokta mı: insan kararı; TDV: seyzer (önbellek denetim/GLM1-TDV-ONBELLEK/seyzer.txt; gövdede 1000-1280 yılı 26 kez) |
| 9 | Safed | 32.96, 35.50 | Tapınak Şövalyeleri → Memlük 1266 | Akkâ (39.2 km, 1281) | en yakın atlas noktası 39.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 10 | Hısnülekrâd | 34.76, 36.29 | Hospitalier 1142-1271 → Memlük | Humus (38.5 km, 1281) | en yakın atlas noktası 38.5 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 11 | Cübeyl | 34.12, 35.65 | Trablus Kontluğu | Beyrut (29.5 km, 1281) | en yakın atlas noktası 29.5 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 12 | Rey | 35.59, 51.44 | Büveyhî → Selçuklu 1042 → Hârizmşah → Moğol yıkımı 1220 | Tahran (12.0 km, 1281) | en yakın atlas noktası 12.0 km — vekil mi, ayrı nokta mı: insan kararı; TDV: rey (önbellek denetim/GLM1-TDV-ONBELLEK/rey.txt; gövdede 1000-1280 yılı 6 kez) |
| 13 | Cürcân (Gürgân) | 37.25, 55.17 | Ziyârî → Selçuklu → Hârizmşah | Esterâbâd (Gürgân) (79.8 km, 1281) | ad eşleşmesi Esterâbâd (Gürgân) 79,8 km — ortaçağ Cürcân (Gonbad-ı Kâvus) ayrı yer; Esterâbâd vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 14 | Beşbalık | 44.10, 89.18 | Koço Uygur kışlık merkezi | Qitai (Gucheng) (32.0 km, 1771) | en yakın atlas noktası 32.0 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 15 | Kara-Hoto | 41.75, 101.07 | Batı Xia | Ejin (Hara-Hoto) (22.2 km, 1281) | en yakın atlas noktası 22.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 16 | Ayzâb | 22.33, 36.49 | Fâtımî/Eyyûbî Kızıldeniz limanı | Halâib (20.3 km, 1281) | en yakın atlas noktası 20.3 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 17 | Eski Dongola | 18.22, 30.75 | Makurya Krallığı başkenti | Debbe (28.0 km, 1281) | en yakın atlas noktası 28.0 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 18 | Soba | 15.52, 32.68 | Alva Krallığı başkenti | Hartum (13.2 km, 1281) | en yakın atlas noktası 13.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 19 | Kal'atü Benî Hammâd | 35.81, 4.79 | Hammâdî başkenti 1007-1090 | Mesîle (25.2 km, 1281) | en yakın atlas noktası 25.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 20 | Ağmât | 31.42, -7.80 | Murâbıt ilk merkezi | Merakeş (29.0 km, 1281) | en yakın atlas noktası 29.0 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 21 | Kalhât | 22.69, 59.37 | Hürmüz'e bağlı | Sûr (21.5 km, 1281) | en yakın atlas noktası 21.5 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 22 | Silves | 37.19, -8.44 | Muvahhid → Portekiz 1189/1249 | Lagos (Algarve) (22.9 km, 1281) | en yakın atlas noktası 22.9 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 23 | Arles | 43.68, 4.63 | Arles Kr./Provence | Avignon (33.1 km, 1281) | en yakın atlas noktası 33.1 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 24 | Winchester | 51.06, -1.31 | İngiltere (eski başkent) | Southampton (17.9 km, 1281) | en yakın atlas noktası 17.9 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 25 | Canterbury | 51.28, 1.08 | İngiltere (başpiskoposluk) | Dover (23.4 km, 1281) | en yakın atlas noktası 23.4 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 26 | Roskilde | 55.64, 12.08 | Danimarka başkenti | Kopenhag (30.8 km, 1281) | en yakın atlas noktası 30.8 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 27 | Lund | 55.70, 13.19 | Danimarka (başpiskoposluk 1104) | Malmö (15.9 km, 1281) | en yakın atlas noktası 15.9 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 28 | Schleswig | 54.52, 9.56 | Danimarka | Flensburg (30.3 km, 1281) | en yakın atlas noktası 30.3 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 29 | Pavia | 45.19, 9.16 | İtalya Kr. eski başkenti | Milano (30.6 km, 1281) | en yakın atlas noktası 30.6 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 30 | Amalfi | 40.63, 14.60 | Amalfi Dk. → Norman 1073 | Napoli (37.3 km, 1281) | en yakın atlas noktası 37.3 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 31 | Capua | 41.11, 14.21 | Capua Prk. → Norman | Napoli (29.1 km, 1281) | en yakın atlas noktası 29.1 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 32 | Lucca | 43.84, 10.50 | Toskana/Lucca Komünü | Pisa (16.1 km, 1281) | en yakın atlas noktası 16.1 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 33 | Aquileia | 45.77, 13.37 | Aquileia Patrikliği | Trieste (33.8 km, 1281) | en yakın atlas noktası 33.8 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 34 | Eski Ryazan | 54.39, 40.58 | Ryazan Knezliği başkenti → Moğol 1237 | Ryazan (60.4 km, 1281) | ad eşleşmesi Ryazan 60 km — Eski Ryazan (1237 yıkımı) ayrı yer; modern Ryazan = Pereyaslavl-Ryazanski; kaynak doğrulanmadı |
| 35 | Dhâr | 22.60, 75.30 | Paramâra başkenti | Mandu (Mândû) (31.2 km, 1281) | en yakın atlas noktası 31.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 36 | Lamphun (Hariphunchai) | 18.58, 99.01 | Hariphunchai | Chiang Mai (23.3 km, 1296) | en yakın atlas noktası 23.3 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 37 | Kediri (Daha) | -7.82, 112.01 | Kediri Krallığı başkenti | Blitar (35.8 km, 1281) | en yakın atlas noktası 35.8 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 38 | Singhasari | -7.89, 112.66 | Singhasari 1222 | Malang (10.5 km, 1281) | en yakın atlas noktası 10.5 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 39 | Şimşat (Arsamosata) | 38.86, 39.71 | Bizans → Artuklu | Palu (27.0 km, 1281) | en yakın atlas noktası 27.0 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 40 | Tell Bâşir | 36.83, 37.68 | Urfa Kontluğu ikinci merkezi 1144-1150 | Mercihamis (Yurtbağı) (29.0 km, 1281) | en yakın atlas noktası 29.0 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 41 | Karkîsiyâ | 35.16, 40.43 | Selçuklu/Eyyûbî | Deyrizor (32.7 km, 1281) | en yakın atlas noktası 32.7 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 42 | Dunaysir (Kızıltepe) | 37.19, 40.59 | Artuklu (Mardin kolu) | Mardin (18.7 km, 1281) | en yakın atlas noktası 18.7 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 43 | Hârim | 36.21, 36.52 | Antakya Prk. → Zengî 1164 | Antakya (32.2 km, 1281) | en yakın atlas noktası 32.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 44 | Masyaf | 35.07, 36.34 | Suriye Nizârîleri merkezi → Memlük 1270 | Hama (37.9 km, 1281) | en yakın atlas noktası 37.9 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 45 | Atlit (Château Pèlerin) | 32.70, 34.93 | Tapınak Şövalyeleri 1218-1291 | Akkâ (29.1 km, 1281) | en yakın atlas noktası 29.1 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 46 | Arsûf | 32.20, 34.81 | Kudüs Kr. → Memlük 1265 | Yafa (17.0 km, 1281) | en yakın atlas noktası 17.0 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 47 | Remle | 31.93, 34.87 | Fâtımî → Kudüs Kr. | Yafa (17.5 km, 1281) | en yakın atlas noktası 17.5 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 48 | Halîl (Hebron) | 31.53, 35.10 | Kudüs Kr. → Eyyûbî | Kudüs (30.3 km, 1281) | en yakın atlas noktası 30.3 km — vekil mi, ayrı nokta mı: insan kararı; TDV: halil (önbellek denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/halil.txt; gövdede 1000-1280 yılı 11 kez) |
| 49 | Nâsıra | 32.70, 35.30 | Kudüs Kr. (Celile) | Akkâ (32.5 km, 1281) | en yakın atlas noktası 32.5 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 50 | Beysân | 32.50, 35.50 | Kudüs Kr. → Eyyûbî | Nablus (38.7 km, 1281) | en yakın atlas noktası 38.7 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 51 | Salt | 32.04, 35.73 | Eyyûbî | Amman (21.7 km, 1281) | en yakın atlas noktası 21.7 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 52 | Hulvân | 34.46, 45.86 | Annâzî → Selçuklu | Kasr-ı Şîrîn (26.6 km, 1281) | en yakın atlas noktası 26.6 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 53 | Paykend | 39.68, 64.12 | Karahanlı | Buhara (27.5 km, 1281) | en yakın atlas noktası 27.5 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 54 | Ahsîkes | 40.87, 71.00 | Karahanlı Fergana merkezi | Hokand (38.2 km, 1281) | en yakın atlas noktası 38.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 55 | Cend | 44.70, 65.30 | Oğuz/Hârizmşah Sirderya şehri (yeri tartışmalı) | Ak-Meçit (Perovsk) (23.5 km, 1281) | en yakın atlas noktası 23.5 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 56 | Şamkor | 40.83, 46.02 | Şeddâdî/Selçuklu/Gürcü | Gence (33.0 km, 1281) | en yakın atlas noktası 33.0 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 57 | Pliska | 43.38, 27.12 | I. Bulgar eski başkenti | Şumnu (19.2 km, 1281) | en yakın atlas noktası 19.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 58 | Pirlepe | 41.35, 21.55 | Bizans/Epir/Bulgar | Manastır (39.8 km, 1281) | en yakın atlas noktası 39.8 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 59 | Melnik | 41.52, 23.39 | Bulgar despotluğu | Petriç (20.2 km, 1281) | en yakın atlas noktası 20.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 60 | Kalamata | 37.04, 22.11 | Ahaya (Villehardouin) | Koron (30.4 km, 1281) | en yakın atlas noktası 30.4 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 61 | Glarentza | 37.94, 21.15 | Ahaya limanı | Zaklise (Zakynthos) (37.0 km, 1281) | en yakın atlas noktası 37.0 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 62 | Honaz | 37.76, 29.26 | Bizans → Selçuklu | Denizli (14.8 km, 1281) | en yakın atlas noktası 14.8 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 63 | Kemalpaşa (Nymphaion) | 38.43, 27.42 | İznik İmparatorluğu sarayı | Manisa (20.5 km, 1281) | en yakın atlas noktası 20.5 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 64 | Korikos | 36.46, 34.15 | Kilikya Ermeni | Silifke (25.3 km, 1281) | en yakın atlas noktası 25.3 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 65 | Lampron (Çamlıyayla) | 37.17, 34.60 | Hetumî Ermeni | Tarsus (38.4 km, 1281) | en yakın atlas noktası 38.4 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 66 | Zibatra | 38.30, 38.10 | Bizans/Selçuklu (yeri yaklaşık) | Malatya (21.2 km, 1281) | en yakın atlas noktası 21.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 67 | Erzen | 38.03, 41.37 | Dilmaçoğulları/Artuklu | Hasankeyf (35.3 km, 1281) | en yakın atlas noktası 35.3 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |
| 68 | Hîzân | 38.23, 42.42 | Ahlatşah | Bitlis (33.2 km, 1281) | en yakın atlas noktası 33.2 km — vekil mi, ayrı nokta mı: insan kararı; kaynak doğrulanmadı |

## 5. (a) Atlasta VAR, zinciri ≥1281 başlıyor, 1000–1280'de var olduğu işaretli (534)

Mekanik liste: ilk `f` ≥1281 olan **4147** noktanın tamamı `LAB-EKSIK-SEHIR-1000-1280-1009-A.csv`'de (sütun `bilinen_1000_1280`). Aşağıda yalnız işaretliler. `kanit` kodları: `aday-listesi` = 653 adlık listeyle ad eşleşmesi (genel bilgi); `0930-var-aday(yıl)` = `denetim/ONCE1281-YERLESIM-0930.json` TDV cümlesi (D-red olanlar çıkarıldı); `ONERI-A/B1/B2/C` = `denetim/YERLESIM-1281-ONCE-ONERI.json` sınıfı; `0930-eksen` = 0930 raporunun eksen şehirleri.

**1281'den sonra başlayan 4 işaretli nokta** (epok emilimi değil, gerçek geç başlangıç): Merc (ilk 1551, Fâtımî/yerel Arap); Gao (ilk 1324, Kevkev (Songay) başkenti 1009-10); Cenne (Djenné) (ilk 1473, Cenne şehir devleti (~1200 İslâmlaşma)); Feyzâbâd (Bedahşan) (ilk 1479, hâkim yazılmadı).

| # | Şehir | lat, lon | tür | atlas ilk | ilk sahip (atlas) | Hâkim(ler) ~1000–1280 | kanıt | Kaynak |
|---|---|---|---|---|---|---|---|---|
| 1 | Akkâ | 32.928, 35.082 | kale | 1281 | kudus-kralligi | Kudüs Kr. 1104-1187, 1191-1291 | 0930-eksen;0930-var-aday(1074);ONERI-B1;aday-listesi | TDV: akka (önbellek denetim/GLM1-TDV-ONBELLEK/akka.txt; gövdede 1000-1280 yılı 13 kez) |
| 2 | Antakya | 36.202, 36.161 | sehir | 1281 | memluk | Bizans → Selçuklu 1084 → Antakya Prk. 1098-1268 → Memlük | 0930-eksen;0930-var-aday(1084);ONERI-A;aday-listesi | TDV: antakya (önbellek denetim/GLM1-TDV-ONBELLEK/antakya.txt; gövdede 1000-1280 yılı 19 kez) |
| 3 | Balasagun (Ak-Beşim) | 42.76, 75.24 | sehir | 1281 | cagatay | Doğu Karahanlı başkenti → Karahitay 1130-1211 | 0930-eksen;0930-var-aday(1130);ONERI-C;aday-listesi | TDV: balasagun (önbellek denetim/GLM1-TDV-ONBELLEK/balasagun.txt; gövdede 1000-1280 yılı 6 kez) |
| 4 | Bağdat | 33.34, 44.361 | sehir | 1281 | ilhanli | Abbâsî (Büveyhî/Selçuklu vesâyeti) → İlhanlı 1258 | 0930-eksen;0930-var-aday(1258);ONERI-A;aday-listesi | TDV: bagdat (önbellek denetim/GLM1-TDV-ONBELLEK/bagdat.txt; gövdede 1000-1280 yılı 79 kez) |
| 5 | Belh | 36.758, 66.897 | sehir | 1281 | cagatay | Gazneli → Selçuklu → Karahitay/Gurlu → Hârizmşah | 0930-eksen;0930-var-aday(1040);ONERI-C;aday-listesi | TDV: belh (önbellek denetim/GLM1-TDV-ONBELLEK/belh.txt; gövdede 1000-1280 yılı 17 kez) |
| 6 | Buhara | 39.7681, 64.421 | sehir | 1281 | cagatay | Karahanlı → Karahitay tâbi → Hârizmşah → Moğol 1220 | 0930-eksen;0930-var-aday(1044);ONERI-C;aday-listesi | TDV: buhara (önbellek denetim/GLM1-TDV-ONBELLEK/buhara.txt; gövdede 1000-1280 yılı 18 kez) |
| 7 | Dimyat | 31.418, 31.814 | liman | 1281 | memluk | Fâtımî/Eyyûbî (Haçlı 1219-21, 1249) | 0930-eksen;0930-var-aday(1155);ONERI-C;aday-listesi | TDV: dimyat (önbellek denetim/GLM1-TDV-ONBELLEK/dimyat.txt; gövdede 1000-1280 yılı 10 kez) |
| 8 | Erzurum | 39.905, 41.266 | sehir | 1281 | ilhanli | Bizans → Saltuklu 1071-1202 → Anadolu Selçuklu | 0930-eksen;0930-var-aday(1048);ONERI-B2;aday-listesi | TDV: erzurum (önbellek denetim/EKOKUMA-0077-C-tdv-onbellek/erzurum.txt; gövdede 1000-1280 yılı 61 kez) |
| 9 | Halep | 36.202, 37.161 | sehir | 1281 | memluk | Mirdâsî → Selçuklu → Zengî → Eyyûbî → Moğol/Memlük 1260 | 0930-eksen;0930-var-aday(1014);ONERI-C;aday-listesi | TDV: halep (önbellek denetim/GLM1-TDV-ONBELLEK/halep.txt; gövdede 1000-1280 yılı 51 kez) |
| 10 | Hemedan | 34.799, 48.515 | sehir | 1281 | ilhanli | Kâkûyî → Selçuklu (Irak Selçuklu başkenti) | 0930-eksen;0930-var-aday(1029);ONERI-C;aday-listesi | TDV: hemedan (önbellek denetim/GLM1-TDV-ONBELLEK/hemedan.txt; gövdede 1000-1280 yılı 14 kez) |
| 11 | Herat | 34.342, 62.203 | sehir | 1281 | ilhanli | Gazneli → Selçuklu → Gurlu → Hârizmşah → Kert 1245 | 0930-eksen;0930-var-aday(1001);ONERI-B1;aday-listesi | TDV: herat (önbellek denetim/GLM1-TDV-ONBELLEK/herat.txt; gövdede 1000-1280 yılı 21 kez) |
| 12 | Isfahan | 32.654, 51.668 | sehir | 1281 | ilhanli | Kâkûyî → Büyük Selçuklu başkenti 1051 → Irak Selçuklu → Hârizmşah/Moğol | 0930-eksen;0930-var-aday(1030);ONERI-B2;aday-listesi | TDV: isfahan (önbellek denetim/GLM1-TDV-ONBELLEK/isfahan.txt; gövdede 1000-1280 yılı 37 kez) |
| 13 | Kahire | 30.047, 31.243 | sehir | 1281 | memluk | Fâtımî → Eyyûbî 1171 → Memlük 1250 | 0930-eksen;0930-var-aday(1125);ONERI-C;aday-listesi | TDV: kahire (önbellek denetim/GLM1-TDV-ONBELLEK/kahire.txt; gövdede 1000-1280 yılı 98 kez) |
| 14 | Kayseri | 38.734, 35.48 | sehir | 1281 | ilhanli | Bizans → Danişmendli (~1082) → Anadolu Selçuklu (1178) | 0930-eksen;0930-var-aday(1067);ONERI-B2;aday-listesi | TDV: kayseri (önbellek denetim/GLM1-TDV-ONBELLEK/kayseri.txt; gövdede 1000-1280 yılı 57 kez) |
| 15 | Kaşgar | 39.47, 75.99 | sehir | 1281 | cagatay | Doğu Karahanlı başkenti → Karahitay → Moğol | 0930-eksen;0930-var-aday(1014);ONERI-B2;aday-listesi | TDV: kasgar (önbellek denetim/GLM1-TDV-ONBELLEK/kasgar.txt; gövdede 1000-1280 yılı 5 kez) |
| 16 | Kirman | 30.28, 57.08 | sehir | 1281 | ilhanli | Kirman Selçuklu 1048-1187 → Kutluğhanlı 1222 | 0930-eksen;0930-var-aday(1032);ONERI-B1;aday-listesi | TDV: kirman (önbellek denetim/GLM1-TDV-ONBELLEK/kirman.txt; gövdede 1000-1280 yılı 13 kez) |
| 17 | Konya | 37.872, 32.492 | sehir | 1281 | selcuklu | Bizans → Anadolu Selçuklu (~1080/1097 sonrası başkent) 1097-1308 | 0930-eksen;0930-var-aday(1069);ONERI-C;aday-listesi | TDV: konya (önbellek denetim/GLM1-TDV-ONBELLEK/konya.txt; gövdede 1000-1280 yılı 38 kez) |
| 18 | Kudüs | 31.777, 35.234 | sehir | 1281 | memluk | Fâtımî/Selçuklu → Kudüs Kr. 1099-1187 → Eyyûbî | 0930-eksen;0930-var-aday(1009);ONERI-C;aday-listesi | TDV: kudus (önbellek denetim/GLM1-TDV-ONBELLEK/kudus.txt; gövdede 1000-1280 yılı 90 kez) |
| 19 | Kûfe | 32.03, 44.4009 | sehir | 1281 | ilhanli | Abbâsî/Mezyedî | 0930-eksen;0930-var-aday(1101);ONERI-C;aday-listesi | TDV: kufe (önbellek denetim/GLM1-TDV-ONBELLEK/kufe.txt; gövdede 1000-1280 yılı 4 kez) |
| 20 | Malatya | 38.353, 38.334 | sehir | 1281 | ilhanli | Bizans → Danişmendli (1102) → Anadolu Selçuklu (1178) | 0930-eksen;0930-var-aday(1057);ONERI-B2;aday-listesi | TDV: malatya (önbellek denetim/GLM1-TDV-ONBELLEK/malatya.txt; gövdede 1000-1280 yılı 50 kez) |
| 21 | Merv (Mari) | 37.5936, 61.8333 | sehir | 1281 | ilhanli | Selçuklu (Sencer başkenti) → Hârizmşah → Moğol 1221 | 0930-eksen;0930-var-aday(1040);ONERI-C;aday-listesi | TDV: merv (önbellek denetim/GLM1-TDV-ONBELLEK/merv.txt; gövdede 1000-1280 yılı 21 kez) |
| 22 | Merâga | 37.3894, 46.2381 | sehir | 1281 | ilhanli | Ahmedîlî → İlhanlı başkenti 1256 | 0930-eksen;0930-var-aday(1054);ONERI-B2;aday-listesi | TDV: meraga (önbellek denetim/GLM1-TDV-ONBELLEK/meraga.txt; gövdede 1000-1280 yılı 21 kez) |
| 23 | Semerkant | 39.6542, 66.9758 | sehir | 1281 | cagatay | Batı Karahanlı başkenti → Hârizmşah 1212 → Moğol | 0930-eksen;0930-var-aday(1220);ONERI-B2;aday-listesi | TDV: semerkant (önbellek denetim/GLM1-TDV-ONBELLEK/semerkant.txt; gövdede 1000-1280 yılı 14 kez) |
| 24 | Sivas | 39.75, 37.015 | sehir | 1281 | ilhanli | Bizans → Danişmendli (~1075) → Anadolu Selçuklu (1175) | 0930-eksen;0930-var-aday(1021);ONERI-B2;aday-listesi | TDV: sivas (önbellek denetim/EKOKUMA-0077-C-tdv-onbellek/sivas.txt; gövdede 1000-1280 yılı 35 kez) |
| 25 | Tebriz | 38.08, 46.292 | sehir | 1281 | ilhanli | Revvâdî → Selçuklu → Ahmedîlî/İldenizli → İlhanlı | 0930-eksen;0930-var-aday(1054);ONERI-C;aday-listesi | TDV: tebriz (önbellek denetim/GLM1-TDV-ONBELLEK/tebriz.txt; gövdede 1000-1280 yılı 24 kez) |
| 26 | Tiflis | 41.716, 44.783 | sehir | 1281 | gurcistan | Tiflis Emirliği → Gürcü Kr. 1122 | 0930-eksen;0930-var-aday(1032);ONERI-C;aday-listesi | TDV: tiflis (önbellek denetim/GLM1-TDV-ONBELLEK/tiflis.txt; gövdede 1000-1280 yılı 12 kez) |
| 27 | Trablusşam | 34.436, 35.844 | liman | 1281 | trablus-kontlugu | Benî Ammâr → Trablus Kontluğu 1109-1289 | 0930-eksen;0930-var-aday(1032);ONERI-B1;aday-listesi | TDV: trablussam (önbellek denetim/GLM1-TDV-ONBELLEK/trablussam.txt; gövdede 1000-1280 yılı 23 kez) |
| 28 | Trabzon | 41.005, 39.723 | liman | 1281 | trabzon-rum | Bizans → Trabzon Rum İmp. 1204 | 0930-eksen;0930-var-aday(1021);ONERI-A;aday-listesi | TDV: trabzon (önbellek denetim/GLM1-TDV-ONBELLEK/trabzon.txt; gövdede 1000-1280 yılı 25 kez) |
| 29 | Vâsıt | 32.19, 46.295 | sehir | 1281 | ilhanli | Abbâsî/Selçuklu → İlhanlı | 0930-eksen;0930-var-aday(1009);ONERI-A;aday-listesi | TDV: vasit (önbellek denetim/GLM1-TDV-ONBELLEK/vasit.txt; gövdede 1000-1280 yılı 9 kez) |
| 30 | İskenderiye | 31.2, 29.919 | liman | 1281 | memluk | Fâtımî/Eyyûbî/Memlük | 0930-eksen;0930-var-aday(1138);ONERI-C;aday-listesi | TDV: iskenderiye (önbellek denetim/GLM1-TDV-ONBELLEK/iskenderiye.txt; gövdede 1000-1280 yılı 19 kez) |
| 31 | İstanbul | 41.008, 28.98 | sehir | 1281 | bizans | Bizans → Latin 1204 → Bizans 1261 | 0930-eksen;0930-var-aday(1261);ONERI-A;aday-listesi | TDV: istanbul (önbellek denetim/FETIH-1453-0081-tdv-onbellek/istanbul.html; gövdede 1000-1280 yılı 372 kez) |
| 32 | İznik | 40.429, 29.721 | sehir | 1281 | bizans | Bizans → Selçuklu 1081-1097 → Bizans → İznik İmp. 1204-61 | 0930-eksen;0930-var-aday(1065);ONERI-A;aday-listesi | TDV: iznik (önbellek denetim/GLM1-TDV-ONBELLEK/iznik.txt; gövdede 1000-1280 yılı 30 kez) |
| 33 | Şiraz | 29.591, 52.584 | sehir | 1281 | ilhanli | Büveyhî → Selçuklu → Salgurlu 1148 | 0930-eksen;0930-var-aday(1056);ONERI-C;aday-listesi | TDV: siraz (önbellek denetim/GLM1-TDV-ONBELLEK/siraz.txt; gövdede 1000-1280 yılı 9 kez) |
| 34 | Adana | 37.0, 35.321 | sehir | 1281 | kilikya-ermeni | Bizans → Kilikya Ermeni | 0930-var-aday(1071);ONERI-C;aday-listesi | TDV: adana (önbellek denetim/EKOKUMA-0077-C-tdv-onbellek/adana.txt; gövdede 1000-1280 yılı 3 kez) |
| 35 | Aksaray | 38.3687, 34.037 | sehir | 1281 | selcuklu | Anadolu Selçuklu (II. Kılıcarslan imarı) | 0930-var-aday(1155);ONERI-C;aday-listesi | TDV: aksaray (önbellek denetim/GLM1-TDV-ONBELLEK/aksaray.txt; gövdede 1000-1280 yılı 2 kez) |
| 36 | Alanya | 36.5502, 31.9997 | liman | 1281 | selcuklu | Ermeni/Bizans → Anadolu Selçuklu 1221 | 0930-var-aday(1221);ONERI-B1;aday-listesi | TDV: alanya (önbellek denetim/GLM1-TDV-ONBELLEK/alanya.txt; gövdede 1000-1280 yılı 3 kez) |
| 37 | Amasya | 40.65, 35.833 | sehir | 1281 | ilhanli | Danişmendli → Anadolu Selçuklu | 0930-var-aday(1155);ONERI-B2;aday-listesi | TDV: amasya (önbellek denetim/GLM1-TDV-ONBELLEK/amasya.txt; gövdede 1000-1280 yılı 12 kez) |
| 38 | Ankara | 39.933, 32.86 | sehir | 1281 | ahiler | Bizans → Danişmendli/Selçuklu (1127 sonrası kesin) | 0930-var-aday(1073);ONERI-B1;aday-listesi | TDV: ankara (önbellek denetim/GLM1-TDV-ONBELLEK/ankara.txt; gövdede 1000-1280 yılı 30 kez) |
| 39 | Antalya | 36.887, 30.703 | liman | 1281 | selcuklu | Bizans → Anadolu Selçuklu 1207/1216 | 0930-var-aday(1103);ONERI-A;aday-listesi | TDV: antalya (önbellek denetim/GLM1-TDV-ONBELLEK/antalya.txt; gövdede 1000-1280 yılı 17 kez) |
| 40 | Asvan | 24.089, 32.899 | sehir | 1281 | memluk | Fâtımî/Eyyûbî | 0930-var-aday(1170);ONERI-C;aday-listesi | TDV: asvan (önbellek denetim/GLM1-TDV-ONBELLEK/asvan.txt; gövdede 1000-1280 yılı 2 kez) |
| 41 | Ayasuluk (Selçuk) | 37.951, 27.368 | sehir | 1281 | bizans | Bizans / İznik | 0930-var-aday(1071);ONERI-C;aday-listesi | TDV: ayasuluk (önbellek denetim/GLM1-TDV-ONBELLEK/ayasuluk.txt; gövdede 1000-1280 yılı 2 kez) |
| 42 | Ba'lebek (Baalbek) | 34.0059, 36.2181 | kasaba | 1281 | memluk | Börî/Zengî/Eyyûbî → Memlük 1260 | 0930-var-aday(1025);ONERI-A;aday-listesi | TDV: balebek — "Ioannis Tzimiskes’in, 1025’te Halep Emîri Sâlih b." |
| 43 | Bayburt | 40.2552, 40.2249 | kale | 1281 | ilhanli | Saltuklu → Selçuklu | 0930-var-aday(1054);ONERI-B2;aday-listesi | TDV: bayburt (önbellek denetim/GLM1-TDV-ONBELLEK/bayburt.txt; gövdede 1000-1280 yılı 13 kez) |
| 44 | Bergama | 39.121, 27.18 | sehir | 1281 | bizans | Bizans / İznik | 0930-var-aday(1113);ONERI-C;aday-listesi | TDV: bergama (önbellek denetim/GLM1-TDV-ONBELLEK/bergama.txt; gövdede 1000-1280 yılı 4 kez) |
| 45 | Beyrut | 33.888, 35.495 | liman | 1281 | kudus-kralligi | Kudüs Kr. 1110-1187, 1197-1291 | 0930-var-aday(1110);ONERI-B1;aday-listesi | TDV: beyrut (önbellek denetim/GLM1-TDV-ONBELLEK/beyrut.txt; gövdede 1000-1280 yılı 4 kez) |
| 46 | Beyşehir | 37.677, 31.724 | sehir | 1281 | esrefogullari | Selçuklu → Eşrefoğulları 1277 | 0930-var-aday(1240);ONERI-C;aday-listesi | TDV: beysehir (önbellek denetim/GLM1-TDV-ONBELLEK/beysehir.txt; gövdede 1000-1280 yılı 4 kez) |
| 47 | Bitlis | 38.401, 42.108 | sehir | 1281 | ilhanli | Dilmaçoğulları | 0930-var-aday(1047);ONERI-B2;aday-listesi | TDV: bitlis (önbellek denetim/EKOKUMA-0077-C-tdv-onbellek/bitlis.txt; gövdede 1000-1280 yılı 21 kez) |
| 48 | Bursa | 40.188, 29.061 | sehir | 1281 | bizans | Bizans / İznik İmparatorluğu | 0930-var-aday(1080);ONERI-C;aday-listesi | TDV: bursa (önbellek denetim/GLM1-TDV-ONBELLEK/bursa.txt; gövdede 1000-1280 yılı 11 kez) |
| 49 | Cizre | 37.33, 42.19 | sehir | 1281 | ilhanli | Ukaylî → Zengî Cezîre kolu 1180-1251 | 0930-var-aday(1030);ONERI-B2;aday-listesi | TDV: cizre (önbellek denetim/GLM1-TDV-ONBELLEK/cizre.txt; gövdede 1000-1280 yılı 22 kez) |
| 50 | Denizli | 37.783, 29.094 | sehir | 1281 | inancogullari | Bizans → Selçuklu | 0930-var-aday(1261);ONERI-C;aday-listesi | TDV: denizli (önbellek denetim/GLM1-TDV-ONBELLEK/denizli.txt; gövdede 1000-1280 yılı 23 kez) |
| 51 | Dimetoka | 41.348, 26.497 | kale | 1281 | bizans | Bizans / İznik 1246 | 0930-var-aday(1189);ONERI-A;aday-listesi | TDV: dimetoka (önbellek denetim/GLM1-TDV-ONBELLEK/dimetoka.txt; gövdede 1000-1280 yılı 7 kez) |
| 52 | Divriği | 39.371, 38.117 | kale | 1281 | ilhanli | Mengücüklü Divriği kolu → Selçuklu | 0930-var-aday(1066);ONERI-C;aday-listesi | TDV: divrigi (önbellek denetim/GLM1-TDV-ONBELLEK/divrigi.txt; gövdede 1000-1280 yılı 13 kez) |
| 53 | Diyarbakır | 37.911, 40.237 | sehir | 1281 | selcuklu | Mervânî → İnaloğulları → Artuklu/Eyyûbî 1232 | 0930-var-aday(1021);ONERI-B1;aday-listesi | TDV: diyarbakir (önbellek denetim/GLM1-TDV-ONBELLEK/diyarbakir.txt; gövdede 1000-1280 yılı 39 kez) |
| 54 | Edirne | 41.677, 26.556 | sehir | 1281 | bizans | Bizans / Latin / Bulgar | 0930-var-aday(1205);ONERI-C;aday-listesi | TDV: edirne (önbellek denetim/GLM1-TDV-ONBELLEK/edirne.txt; gövdede 1000-1280 yılı 56 kez) |
| 55 | Erbil | 36.1911, 44.0092 | sehir | 1281 | ilhanli | Begteginli 1144-1232 → Abbâsî → İlhanlı | 0930-var-aday(1132);ONERI-B2;aday-listesi | TDV: erbil (önbellek denetim/GLM1-TDV-ONBELLEK/erbil.txt; gövdede 1000-1280 yılı 6 kez) |
| 56 | Erdebil | 38.249, 48.294 | sehir | 1281 | ilhanli | Selçuklu/İldenizli → Moğol | 0930-var-aday(1210);ONERI-C;aday-listesi | TDV: erdebil (önbellek denetim/GLM1-TDV-ONBELLEK/erdebil.txt; gövdede 1000-1280 yılı 4 kez) |
| 57 | Erzincan | 39.75, 39.492 | sehir | 1281 | ilhanli | Mengücüklü 1118-1228 → Anadolu Selçuklu | 0930-var-aday(1048);ONERI-B2;aday-listesi | TDV: erzincan (önbellek denetim/GLM1-TDV-ONBELLEK/erzincan.txt; gövdede 1000-1280 yılı 9 kez) |
| 58 | Eskişehir | 39.776, 30.52 | sehir | 1281 | bizans | Bizans → Selçuklu | 0930-var-aday(1175);ONERI-B1;aday-listesi | TDV: eskisehir (önbellek denetim/GLM1-TDV-ONBELLEK/eskisehir.txt; gövdede 1000-1280 yılı 14 kez) |
| 59 | Esterâbâd (Gürgân) | 36.8381, 54.4342 | sehir | 1281 | ilhanli | Ziyârî/Selçuklu | 0930-var-aday(1140);ONERI-C;aday-listesi | TDV: esterabad (önbellek denetim/GLM1-TDV-ONBELLEK/esterabad.txt; gövdede 1000-1280 yılı 3 kez) |
| 60 | Gazze | 31.502, 34.466 | sehir | 1281 | memluk | Fâtımî → Kudüs Kr. → Eyyûbî | 0930-var-aday(1149);ONERI-C;aday-listesi | TDV: gazze (önbellek denetim/GLM1-TDV-ONBELLEK/gazze.txt; gövdede 1000-1280 yılı 6 kez) |
| 61 | Gelibolu | 40.4156, 26.6636 | liman | 1281 | bizans | Bizans / Venedik / İznik | 0930-var-aday(1204);ONERI-A;aday-listesi | TDV: gelibolu (önbellek denetim/GLM1-TDV-ONBELLEK/gelibolu.txt; gövdede 1000-1280 yılı 9 kez) |
| 62 | Giresun | 40.918, 38.389 | liman | 1281 | trabzon-rum | Trabzon Rum | 0930-var-aday(1204);ONERI-A;aday-listesi | TDV: giresun (önbellek denetim/GLM1-TDV-ONBELLEK/giresun.txt; gövdede 1000-1280 yılı 7 kez) |
| 63 | Hama | 35.132, 36.75 | sehir | 1281 | eyyubi-hama | Selçuklu/Zengî → Eyyûbî Hama kolu | 0930-var-aday(1110);ONERI-B1;aday-listesi | TDV: hama (önbellek denetim/GLM1-TDV-ONBELLEK/hama.txt; gövdede 1000-1280 yılı 11 kez) |
| 64 | Harput (Elazığ) | 38.714, 39.245 | kale | 1281 | ilhanli | Çubukoğulları → Artuklu → Selçuklu 1234 | 0930-var-aday(1071);ONERI-B1;aday-listesi | TDV: harput (önbellek denetim/GLM1-TDV-ONBELLEK/harput.txt; gövdede 1000-1280 yılı 11 kez) |
| 65 | Hasankeyf | 37.714, 41.412 | kale | 1281 | eyyubi-hisnikeyfa | Artuklu → Eyyûbî Hısnıkeyfâ kolu | 0930-var-aday(1043);ONERI-B2;aday-listesi | TDV: hasankeyf (önbellek denetim/GLM1-TDV-ONBELLEK/hasankeyf.txt; gövdede 1000-1280 yılı 19 kez) |
| 66 | Hucend | 40.284, 69.622 | sehir | 1281 | cagatay | Karahanlı/Hârizmşah | 0930-var-aday(1015);ONERI-B2;aday-listesi | TDV: hucend (önbellek denetim/GLM1-TDV-ONBELLEK/hucend.txt; gövdede 1000-1280 yılı 4 kez) |
| 67 | Humus | 34.73, 36.71 | sehir | 1281 | memluk | Selçuklu/Zengî → Eyyûbî | 0930-var-aday(1090);ONERI-C;aday-listesi | TDV: humus--suriye — "(XI.) yüzyılın ortasına kadar Mirdâsîler’in, ardından da bütün Suriye’yi ele geçiren Fâtımîler’in yönetiminde kalan Humus 483 (1090) yılında Selçuklu Sultanı Me" |
| 68 | Isparta | 37.765, 30.554 | sehir | 1281 | selcuklu | Bizans → Selçuklu 1204 | 0930-var-aday(1038);ONERI-A;aday-listesi | TDV: isparta (önbellek denetim/GLM1-TDV-ONBELLEK/isparta.txt; gövdede 1000-1280 yılı 27 kez) |
| 69 | Karaman | 37.181, 33.215 | sehir | 1281 | karaman | Selçuklu → Karamanoğulları | 0930-var-aday(1165);ONERI-A;aday-listesi | TDV: karaman (önbellek denetim/GLM1-TDV-ONBELLEK/karaman.txt; gövdede 1000-1280 yılı 9 kez) |
| 70 | Kars | 40.602, 43.095 | kale | 1281 | ilhanli | Kars-Vanand Kr. → Bizans → Selçuklu/Gürcü | 0930-var-aday(1053);ONERI-C;aday-listesi | TDV: kars (önbellek denetim/GLM1-TDV-ONBELLEK/kars.txt; gövdede 1000-1280 yılı 19 kez) |
| 71 | Kastamonu | 41.377, 33.777 | sehir | 1281 | cobanogullari | Bizans (Komnenos) → Selçuklu/Çobanoğulları | 0930-var-aday(1084);ONERI-C;aday-listesi | TDV: kastamonu (önbellek denetim/GLM1-TDV-ONBELLEK/kastamonu.txt; gövdede 1000-1280 yılı 7 kez) |
| 72 | Katîf | 26.557, 49.9873 | liman | 1281 | usfuri | Uyûnî → Usfûrî | 0930-var-aday(1201);ONERI-C;aday-listesi | TDV: katif (önbellek denetim/GLM1-TDV-ONBELLEK/katif.txt; gövdede 1000-1280 yılı 2 kez) |
| 73 | Kazvin | 36.269, 50.004 | sehir | 1281 | ilhanli | Selçuklu/Hârizmşah | 0930-var-aday(1029);ONERI-C;aday-listesi | TDV: kazvin (önbellek denetim/GLM1-TDV-ONBELLEK/kazvin.txt; gövdede 1000-1280 yılı 3 kez) |
| 74 | Kemah | 39.6, 39.03 | kale | 1281 | ilhanli | Mengücüklü (merkez) → Anadolu Selçuklu 1228 | 0930-var-aday(1142);ONERI-B2;aday-listesi | TDV: kemah (önbellek denetim/GLM1-TDV-ONBELLEK/kemah.txt; gövdede 1000-1280 yılı 7 kez) |
| 75 | Kerbelâ | 32.616, 44.025 | sehir | 1281 | ilhanli | Abbâsî | 0930-var-aday(1022);ONERI-C;aday-listesi | TDV: kerbela (önbellek denetim/GLM1-TDV-ONBELLEK/kerbela.txt; gövdede 1000-1280 yılı 3 kez) |
| 76 | Kâşân | 33.9831, 51.41 | sehir | 1281 | ilhanli | Selçuklu | 0930-var-aday(1074);ONERI-C;aday-listesi | TDV: kasan (önbellek denetim/GLM1-TDV-ONBELLEK/kasan.txt; gövdede 1000-1280 yılı 5 kez) |
| 77 | Kütahya | 39.424, 29.983 | sehir | 1281 | selcuklu | Bizans → Selçuklu 1233 | 0930-var-aday(1080);ONERI-A;aday-listesi | TDV: kutahya (önbellek denetim/GLM1-TDV-ONBELLEK/kutahya.txt; gövdede 1000-1280 yılı 40 kez) |
| 78 | Kırşehir | 39.146, 34.164 | sehir | 1281 | ilhanli | Danişmendli → Selçuklu | 0930-var-aday(1173);ONERI-C;aday-listesi | TDV: kirsehir (önbellek denetim/GLM1-TDV-ONBELLEK/kirsehir.txt; gövdede 1000-1280 yılı 14 kez) |
| 79 | Manisa | 38.614, 27.429 | sehir | 1281 | bizans | Bizans / İznik | 0930-var-aday(1204);ONERI-A;aday-listesi | TDV: manisa (önbellek denetim/GLM1-TDV-ONBELLEK/manisa.txt; gövdede 1000-1280 yılı 37 kez) |
| 80 | Mardin | 37.312, 40.735 | kale | 1281 | artuklu | Artuklu (Mardin kolu) 1104-1409 | 0930-var-aday(1085);ONERI-C;aday-listesi | TDV: mardin (önbellek denetim/GLM1-TDV-ONBELLEK/mardin.txt; gövdede 1000-1280 yılı 39 kez) |
| 81 | Nablus | 32.221, 35.254 | sehir | 1281 | memluk | Kudüs Kr. → Eyyûbî | 0930-var-aday(1098);ONERI-C;aday-listesi | TDV: nablus (önbellek denetim/GLM1-TDV-ONBELLEK/nablus.txt; gövdede 1000-1280 yılı 6 kez) |
| 82 | Nahçıvan | 39.209, 45.412 | sehir | 1281 | ilhanli | Selçuklu → İldenizli | 0930-var-aday(1064);ONERI-B2;aday-listesi | TDV: nahcivan (önbellek denetim/GLM1-TDV-ONBELLEK/nahcivan.txt; gövdede 1000-1280 yılı 10 kez) |
| 83 | Necef | 31.9956, 44.3153 | sehir | 1281 | ilhanli | Abbâsî | 0930-var-aday(1051);ONERI-C;aday-listesi | TDV: necef (önbellek denetim/GLM1-TDV-ONBELLEK/necef.txt; gövdede 1000-1280 yılı 2 kez) |
| 84 | Niksar | 40.593, 36.951 | kale | 1281 | ilhanli | Danişmendli merkezi → Selçuklu | 0930-var-aday(1068);ONERI-C;aday-listesi | TDV: niksar (önbellek denetim/GLM1-TDV-ONBELLEK/niksar.txt; gövdede 1000-1280 yılı 21 kez) |
| 85 | Niğde | 37.966, 34.679 | sehir | 1281 | selcuklu | Danişmendli/Selçuklu | 0930-var-aday(1155);ONERI-C;aday-listesi | TDV: nigde (önbellek denetim/GLM1-TDV-ONBELLEK/nigde.txt; gövdede 1000-1280 yılı 41 kez) |
| 86 | Nusaybin | 37.077, 41.215 | kasaba | 1281 | artuklu | Ukaylî → Artuklu/Zengî/Eyyûbî | 0930-var-aday(1043);ONERI-B2;aday-listesi | TDV: nusaybin (önbellek denetim/GLM1-TDV-ONBELLEK/nusaybin.txt; gövdede 1000-1280 yılı 8 kez) |
| 87 | Rakka | 35.953, 39.008 | sehir | 1281 | memluk | Ukaylî/Numeyrî → Zengî → Eyyûbî | 0930-var-aday(1234);ONERI-A;aday-listesi | TDV: rakka (önbellek denetim/GLM1-TDV-ONBELLEK/rakka.txt; gövdede 1000-1280 yılı 4 kez) |
| 88 | Samsun | 41.286, 36.331 | liman | 1281 | ilhanli | Bizans/Trabzon → Selçuklu | 0930-var-aday(1155);ONERI-B2;aday-listesi | TDV: samsun (önbellek denetim/GLM1-TDV-ONBELLEK/samsun.txt; gövdede 1000-1280 yılı 11 kez) |
| 89 | Sayda | 33.563, 35.369 | liman | 1281 | kudus-kralligi | Kudüs Kr. 1110-1187, 1197-1291 | 0930-var-aday(1079);ONERI-B1;aday-listesi | TDV: sayda (önbellek denetim/GLM1-TDV-ONBELLEK/sayda.txt; gövdede 1000-1280 yılı 25 kez) |
| 90 | Serahs | 36.5386, 61.1611 | sehir | 1281 | ilhanli | Selçuklu/Hârizmşah | 0930-var-aday(1221);ONERI-B2;aday-listesi | TDV: serahs (önbellek denetim/GLM1-TDV-ONBELLEK/serahs.txt; gövdede 1000-1280 yılı 20 kez) |
| 91 | Siirt | 37.93, 41.94 | sehir | 1281 | ilhanli | Mervânî → Artuklu/Eyyûbî | 0930-var-aday(1042);ONERI-C;aday-listesi | TDV: siirt (önbellek denetim/GLM1-TDV-ONBELLEK/siirt.txt; gövdede 1000-1280 yılı 13 kez) |
| 92 | Sinop | 42.027, 35.151 | liman | 1281 | pervane | Bizans/Trabzon → Anadolu Selçuklu 1214 | 0930-var-aday(1215);ONERI-B2;aday-listesi | TDV: sinop (önbellek denetim/GLM1-TDV-ONBELLEK/sinop.txt; gövdede 1000-1280 yılı 16 kez) |
| 93 | Tarsus | 36.917, 34.895 | sehir | 1281 | kilikya-ermeni | Bizans → Kilikya Ermeni | 0930-var-aday(1082);ONERI-C;aday-listesi | TDV: tarsus (önbellek denetim/GLM1-TDV-ONBELLEK/tarsus.txt; gövdede 1000-1280 yılı 4 kez) |
| 94 | Taşkent | 41.311, 69.28 | sehir | 1281 | cagatay | Karahanlı → Hârizmşah | 0930-var-aday(1220);ONERI-B2;aday-listesi | TDV: taskent (önbellek denetim/GLM1-TDV-ONBELLEK/taskent.txt; gövdede 1000-1280 yılı 2 kez) |
| 95 | Tikrit | 34.6072, 43.6786 | sehir | 1281 | ilhanli | Selçuklu/Abbâsî | 0930-var-aday(1036);ONERI-C;aday-listesi | TDV: tikrit (önbellek denetim/GLM1-TDV-ONBELLEK/tikrit.txt; gövdede 1000-1280 yılı 20 kez) |
| 96 | Van | 38.502, 43.393 | kale | 1281 | ilhanli | Vaspurakan/Bizans → Ahlatşahlar → Selçuklu/Moğol | 0930-var-aday(1021);ONERI-B2;aday-listesi | TDV: van (önbellek denetim/EKOKUMA-0077-C-tdv-onbellek/van.txt; gövdede 1000-1280 yılı 19 kez) |
| 97 | Yafa | 32.054, 34.755 | liman | 1281 | memluk | Kudüs Kr. (Yafa Kontluğu) → Memlük 1268 | 0930-var-aday(1040);ONERI-C;aday-listesi | TDV: yafa (önbellek denetim/GLM1-TDV-ONBELLEK/yafa.txt; gövdede 1000-1280 yılı 34 kez) |
| 98 | Yezd | 31.9, 54.37 | sehir | 1281 | ilhanli | Kâkûyî → Yezd Atabegliği 1141 | 0930-var-aday(1030);ONERI-B1;aday-listesi | TDV: yezd (önbellek denetim/GLM1-TDV-ONBELLEK/yezd.txt; gövdede 1000-1280 yılı 13 kez) |
| 99 | Zencan | 36.673, 48.478 | sehir | 1281 | ilhanli | Selçuklu | 0930-var-aday(1040);ONERI-C;aday-listesi | TDV: zencan (önbellek denetim/GLM1-TDV-ONBELLEK/zencan.txt; gövdede 1000-1280 yılı 24 kez) |
| 100 | Zerenc (Sîstan) | 30.9583, 61.8611 | sehir | 1281 | ilhanli | Saffârî/Nasrî Sîstan melikleri | 0930-var-aday(1003);ONERI-C;aday-listesi | TDV: zerenc (önbellek denetim/GLM1-TDV-ONBELLEK/zerenc.txt; gövdede 1000-1280 yılı 6 kez) |
| 101 | Çankırı | 40.601, 33.616 | sehir | 1281 | cobanogullari | Bizans → Danişmendli → Selçuklu | 0930-var-aday(1071);ONERI-C;aday-listesi | TDV: cankiri (önbellek denetim/GLM1-TDV-ONBELLEK/cankiri.txt; gövdede 1000-1280 yılı 7 kez) |
| 102 | İzmir | 38.419, 27.129 | liman | 1281 | bizans | Çaka Bey ~1081 → Bizans/İznik | 0930-var-aday(1025);ONERI-C;aday-listesi | TDV: izmir (önbellek denetim/GLM1-TDV-ONBELLEK/izmir.txt; gövdede 1000-1280 yılı 32 kez) |
| 103 | Şüşter | 32.045, 48.8564 | sehir | 1281 | ilhanli | Selçuklu/Abbâsî | 0930-var-aday(1053);ONERI-C;aday-listesi | TDV: suster — "Bu eserler arasında en meşhur olanları, Abbâsîler zamanında yapılan ve birçok restorasyon geçirerek günümüze kadar gelen 445 (1053) tarihli Mescid-i Cum‘a, kuze" |
| 104 | Aachen | 50.776, 6.084 | sehir | 1281 | almanya | Kutsal Roma (taç giyme) | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 105 | Aden | 12.786, 45.019 | liman | 1281 | resuli | Zurey'î → Eyyûbî → Resûlî | 0930-eksen;aday-listesi | TDV: aden (önbellek denetim/GLM1-TDV-ONBELLEK/aden.txt; gövdede 1000-1280 yılı 6 kez) |
| 106 | Ahıska | 41.643, 42.986 | kale | 1281 | gurcistan | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1068);ONERI-B1 | TDV: ahiska — "Selçuklular zamanında Alparslan tarafından ele geçirilen (1068) Ahıska, 1267-1268 yıllarında Moğollar’ın hâkimiyeti altına girdi." |
| 107 | Alaşehir | 38.351, 28.518 | sehir | 1281 | bizans | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1076);ONERI-B1 | TDV: alasehir — "Ancak 1075 veya 1076’da, Anadolu’ya giren Kutalmışoğlu Süleyman Şah tarafından bölgedeki diğer şehirlerle birlikte fethedildi ve birkaç defa el değiştirdikten s" |
| 108 | Angkor (Siem Reap) | 13.412, 103.867 | sehir | 1281 | angkor-kmer | Kmer İmparatorluğu başkenti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 109 | Ardahan | 41.111, 42.702 | kale | 1281 | ilhanli | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1053);ONERI-C | TDV: ardahan — "Bununla beraber yöreye ilk Türk akınları 1053 yılından itibaren Kutalmış idaresinde başlamıştır." |
| 110 | Artvin | 41.183, 41.822 | sehir | 1281 | gurcistan | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1068);ONERI-C | TDV: artvin — "Artvin ve civarında Selçuklu hâkimiyeti 1068 yılından itibaren kurulmaya başladı." |
| 111 | Aydın | 37.845, 27.84 | sehir | 1281 | bizans | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1177);ONERI-C | TDV: aydin — "1177’ye doğru II." |
| 112 | Balat (Palatia) | 37.51, 27.278 | liman | 1281 | mentese | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1273);ONERI-B2 | TDV: balat — "Bir süre sonra elden çıktığı anlaşılan şehir 1273’e doğru tekrar Türk hâkimiyetine girdi." |
| 113 | Balıkesir | 39.649, 27.886 | sehir | 1281 | bizans | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1096);ONERI-C | TDV: balikesir — "Haçlı Seferi’nden (1096-1099) sonra tekrar Bizans tarafından alındı." |
| 114 | Basra | 30.508, 47.783 | liman | 1281 | zend | Abbâsî/Selçuklu → İlhanlı | 0930-eksen;aday-listesi | TDV: basra (önbellek denetim/GLM1-TDV-ONBELLEK/basra.txt; gövdede 1000-1280 yılı 16 kez) |
| 115 | Behisni (Besni) | 37.693, 37.86 | kale | 1281 | memluk | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1084);ONERI-B1 | TDV: besni — "1084’te Anadolu Selçuklu Devleti’nin kurucusu Kutalmışoğlu Süleyman Şah’ın kumandanlarından Buldacı tarafından fethedildi." |
| 116 | Birecik | 37.025, 37.977 | sehir | 1281 | memluk | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1096);ONERI-C | TDV: birecik — "yüzyılın ikinci yarısında Büyük Selçuklu Devleti’nin sınırları içine giren bölge 1096’da Bizanslılar tarafından alındıysa da sonraları sırasıyla Artuklu, Eyyûbî" |
| 117 | Birgi | 38.256, 28.07 | sehir | 1281 | bizans | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1193);ONERI-C | TDV: birgi — "1193-1199 yılları arasında metropolitlik derecesini kazanan Pyrgion, XIII." |
| 118 | Bolu | 40.736, 31.606 | sehir | 1281 | bizans | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1196);ONERI-C | TDV: bolu — "Tahminen 1196’da, Anadolu Selçuklu Sultanı II." |
| 119 | Bulgar (Bolgar) | 54.976, 49.03 | sehir | 1281 | altinorda | İdil Bulgar → Moğol 1236 | 0930-eksen;aday-listesi | TDV: bulgar (önbellek denetim/GLM1-TDV-ONBELLEK/bulgar.txt; gövdede 1000-1280 yılı 5 kez) |
| 120 | Burdur | 37.72, 30.29 | sehir | 1281 | selcuklu | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1071);ONERI-C | TDV: burdur — "Malazgirt Savaşı’ndan (1071) sonra Türkmen akınları Burdur çevresine de ulaştı ve Türk dönemi Burdur’unun temelleri bugünkü şehre göre daha alçakta olan, fakat " |
| 121 | Büyük Zimbabve | -20.267, 30.933 | sehir | 1281 | zimbabve-kralligi | Zimbabve Krallığı | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 122 | Cahokia | 38.6553, -90.0614 | sehir | 1281 | cahokia | Mississippi kültürü merkezi | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 123 | Cenova | 44.4087, 8.9347 | liman | 1281 | ceneviz | Cenova Cumhuriyeti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 124 | Chan Chan | -8.0989, -79.0742 | sehir | 1281 | chimu-krallik | Chimú başkenti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 125 | Chichén Itzá | 20.6843, -88.5678 | sehir | 1281 | maya-sehir-devletleri | Maya (Itzá) | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 126 | Cusco (Qosqo) | -13.532, -71.9675 | sehir | 1281 | inka-imparatorlugu | Kilke/erken İnka (~1200) | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 127 | Delhi | 28.644, 77.216 | sehir | 1281 | delhi-sultanligi | Tomara/Çahamana → Delhi Sultanlığı 1206 | 0930-eksen;aday-listesi | TDV: delhi (önbellek denetim/GLM1-TDV-ONBELLEK/delhi.txt; gövdede 1000-1280 yılı 8 kez) |
| 128 | Doğubayazıt | 39.548, 44.084 | kale | 1281 | ilhanli | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1064);ONERI-C | TDV: dogubayazit — "yüzyılın ilk yarısında Selçuklular’ın yöreye akınları başladı ve Malazgirt Zaferi’nden önce Kars’ın fethiyle (1064) sonuçlanan Türkmen akınlarında Doğubayazıt ç" |
| 129 | Elbistan | 38.207, 37.194 | sehir | 1281 | ilhanli | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1238);ONERI-C | TDV: elbistan — "Meşhur tarihçi İbnü’l-Adîm de Halep Eyyûbî melikinin elçisi sıfatıyla, 1237 ve 1238 yıllarında iki defa Anadolu Selçuklu Sultanı II." |
| 130 | Estergon | 47.795, 18.74 | kale | 1281 | macaristan | Macar Krallığı başkenti | 0930-eksen;aday-listesi | TDV: estergon (önbellek denetim/BALKAN-MACAR-0081-tdv-onbellek/estergon.html; gövdede 1000-1280 yılı 9 kez) |
| 131 | Fas (Fez) | 34.034, -5.0 | sehir | 1281 | merini | Murâbıt/Muvahhid → Merînî 1248 | 0930-eksen;aday-listesi | TDV: fas (önbellek denetim/GLM1-TDV-ONBELLEK/fas.txt; gövdede 1000-1280 yılı 32 kez) |
| 132 | Ferecik (Feres) | 40.897, 26.172 | sehir | 1281 | bizans | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1152);ONERI-C | TDV: ferecik — "1152 yılında Bizans İmparatoru II." |
| 133 | Feyyûm | 29.309, 30.842 | sehir | 1281 | memluk | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1193);ONERI-C | TDV: feyyum — "Bu döneme kadar iltizam usulüyle idare edilen toprakları 589’dan (1193) itibaren iktâ olarak büyük emîrlere verilmeye başlandı." |
| 134 | Feyzâbâd (Bedahşan) | 37.117, 70.58 | sehir | 1479 | __BOSLUK__ | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1073);ONERI-C | TDV: bedahsan — "465/1073’ten sonra) bölgeye İsmâilî mezhebini yaymıştır." |
| 135 | Gao | 16.272, -0.04 | sehir | 1324 | mali-imparatorlugu | Kevkev (Songay) başkenti 1009-10 | 0930-eksen;aday-listesi | TDV: gao (önbellek denetim/GLM1-TDV-ONBELLEK/gao.txt; gövdede 1000-1280 yılı 1 kez) |
| 136 | Gazne | 33.551, 68.423 | sehir | 1281 | cagatay | Gazneli başkenti → Gurlu 1173 | 0930-eksen;aday-listesi | TDV: gazne (önbellek denetim/GLM1-TDV-ONBELLEK/gazne.txt; gövdede 1000-1280 yılı 15 kez) |
| 137 | Granada | 37.177, -3.599 | sehir | 1281 | granada | Zîrî Gırnata → Murâbıt/Muvahhid → Nasrî 1238 | 0930-eksen;aday-listesi | TDV: girnata (önbellek denetim/GLM1-TDV-ONBELLEK/girnata.txt; gövdede 1000-1280 yılı 39 kez) |
| 138 | Hangzhou | 30.274, 120.155 | sehir | 1281 | yuan-hanedani | Güney Song başkenti 1138-1276 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 139 | Hanoi (Thăng Long) | 21.028, 105.834 | sehir | 1281 | tran-hanedani | Lý 1010 → Trần 1225 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 140 | Hulo (Acara) | 41.645, 42.31 | kasaba | 1281 | gurcistan | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1080);ONERI-C | TDV: acara — "1080’de Selçuklular’ın birleşik Bizans-Bagratlı kuvvetlerine karşı Posof/Kol zaferini kazanmasından sonra Batum ve Acara, Selçuklu topraklarına dahil oldu (1081" |
| 141 | Hısn-ı Mansûr (Adıyaman) | 37.764, 38.278 | sehir | 1281 | memluk | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1066);ONERI-C | TDV: adiyaman — "yüzyılda yeniden Bizanslılar’a geçti ve Türkler’ce ilk defa 1066’da Selçuklu kumandanı Gümüştegin tarafından alındı." |
| 142 | Kaesong | 37.972, 126.554 | sehir | 1281 | goryeo | Goryeo başkenti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 143 | Kaifeng | 34.797, 114.307 | sehir | 1281 | yuan-hanedani | Kuzey Song başkenti → Jin 1127 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 144 | Kamakura | 35.319, 139.55 | sehir | 1281 | kamakura | Kamakura Şogunluğu 1185 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 145 | Kannauc | 27.055, 79.916 | sehir | 1281 | delhi-sultanligi | Gurjara-Pratihâra → Gahadavala | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 146 | Karahisâr-ı Şarkî (Şebinkarahisar) | 40.2886, 38.4247 | kale | 1281 | ilhanli | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1068);ONERI-C | TDV: sebinkarahisar — "1068’de Bizans İmparatoru Romanos Diogenes bölgeden geçti ve yöredeki Ermeni varlığı bu sıralarda doğudan gelen göçmenlerle daha da arttı." |
| 147 | Karakurum | 47.198, 102.833 | sehir | 1281 | yuan-hanedani | Moğol İmparatorluğu başkenti 1235-1260 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 148 | Kayrevan | 35.678, 10.096 | sehir | 1281 | hafsi | Zîrî başkenti → Hilâlî yağması 1057 | 0930-eksen;aday-listesi | TDV: kayrevan (önbellek denetim/GLM1-TDV-ONBELLEK/kayrevan.txt; gövdede 1000-1280 yılı 6 kez) |
| 149 | Kiev | 50.451, 30.524 | sehir | 1281 | altinorda | Kiev Rusu başkenti → Moğol 1240 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 150 | Kilis | 36.716, 37.115 | kasaba | 1281 | memluk | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1124);ONERI-C | TDV: kilis — "Haçlılar’a karşı savaşlarıyla tanınan Artukoğulları’ndan Belek Gazi 1124 yılında Azaz ve çevresini, bu arada Kilis’i de Franklar’ın elinden alarak yeniden İslâm" |
| 151 | Kilwa Kisiwani (Kilve) | -8.9795, 39.4862 | sehir | 1281 | svahili-sehirleri | Kilva sultanlığı (Şîrâzî) | 0930-eksen;aday-listesi | TDV: kilve (önbellek denetim/GLM1-TDV-ONBELLEK/kilve.txt; gövdede 1000-1280 yılı 2 kez) |
| 152 | Kirmanşah | 34.314, 47.065 | sehir | 1281 | ilhanli | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1045);ONERI-C | TDV: kirmansah — "Sırasıyla Emevîler, Abbâsîler, Büveyhîler, Hasaneveyhîler ve Annâzîler’in idaresinde kalan şehri 437’de (1045) Tuğrul Bey’in gönderdiği İbrâhim Yinal Annâzî Ebü" |
| 153 | Krakov | 50.065, 19.945 | sehir | 1281 | polonya-erken | Polonya (Piast) başkenti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 154 | Kurtuba (Córdoba) | 37.888, -4.779 | sehir | 1281 | kastilya | Emevî → Tavâif → Murâbıt/Muvahhid → Kastilya 1236 | 0930-eksen;aday-listesi | TDV: kurtuba (önbellek denetim/GLM1-TDV-ONBELLEK/kurtuba.txt; gövdede 1000-1280 yılı 14 kez) |
| 155 | Kyoto | 35.011, 135.768 | sehir | 1281 | kamakura | Heian Japonya / imparatorluk başkenti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 156 | Köhne Ürgenç (Gürgenç) | 42.3417, 59.15 | sehir | 1281 | altinorda | Me'mûnî → Hârizmşah başkenti → Moğol 1221 | 0930-eksen;aday-listesi | TDV: gurgenc (önbellek denetim/GLM1-TDV-ONBELLEK/gurgenc.txt; gövdede 1000-1280 yılı 23 kez) |
| 157 | Lahor | 31.549, 74.343 | sehir | 1281 | delhi-sultanligi | Gazneli (son başkent) → Gurlu → Delhi | 0930-eksen;aday-listesi | TDV: lahor (önbellek denetim/GLM1-TDV-ONBELLEK/lahor.txt; gövdede 1000-1280 yılı 11 kez) |
| 158 | Lalibela | 12.032, 39.047 | sehir | 1281 | habesistan | Zagve başkenti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 159 | Londra | 51.507, -0.128 | sehir | 1281 | ingiltere | İngiltere Krallığı | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 160 | Mayapán | 20.6244, -89.4611 | sehir | 1281 | maya-sehir-devletleri | Maya Mayapán birliği ~1220 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 161 | Medine | 24.47, 39.612 | sehir | 1281 | memluk | Medine Emirliği | 0930-eksen;aday-listesi | TDV: medine (önbellek denetim/GLM1-TDV-ONBELLEK/medine.txt; gövdede 1000-1280 yılı 14 kez) |
| 162 | Mehdiye | 35.505, 11.062 | liman | 1281 | hafsi | Zîrî → Sicilya Normanları 1148-60 → Muvahhid | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 163 | Mekke | 21.423, 39.826 | sehir | 1281 | memluk | Mekke Şerifliği (Fâtımî/Eyyûbî/Resûlî nüfuzu) | 0930-eksen;aday-listesi | TDV: mekke (önbellek denetim/GLM1-TDV-ONBELLEK/mekke.txt; gövdede 1000-1280 yılı 47 kez) |
| 164 | Merakeş | 31.63, -7.981 | sehir | 1281 | merini | Murâbıt (kuruluş ~1070) → Muvahhid başkenti | 0930-eksen;aday-listesi | TDV: merakes (önbellek denetim/GLM1-TDV-ONBELLEK/merakes.txt; gövdede 1000-1280 yılı 14 kez) |
| 165 | Merzifon | 40.876, 35.463 | sehir | 1281 | ilhanli | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1071);ONERI-C | TDV: merzifon — "Roma ve Bizans hâkimiyeti devirlerinde Amasya’ya bağlı olan ve 395-396 yıllarında Kafkasya’dan Bizans topraklarına giren Hunlar tarafından yağmalanan şehir, Mal" |
| 166 | Midilli | 39.106, 26.554 | kale | 1281 | ceneviz | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1055);ONERI-B1 | TDV: midilli — "Midilli adası 821, 881 ve 1055 yıllarında Arap korsanlarının sürekli saldırılarına mâruz kaldı." |
| 167 | Mogadişu | 2.037, 45.342 | liman | 1281 | makdisu-sultanligi | Mogadişu sultanlığı | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 168 | Multan | 30.198, 71.475 | sehir | 1281 | delhi-sultanligi | Gazneli → Gurlu → Kabâce | 0930-eksen;aday-listesi | TDV: multan (önbellek denetim/GLM1-TDV-ONBELLEK/multan.txt; gövdede 1000-1280 yılı 5 kez) |
| 169 | Musul | 36.34, 43.13 | sehir | 1281 | ilhanli | Ukaylî → Selçuklu → Zengî 1127 → Lü'lü' → İlhanlı | 0930-eksen;aday-listesi | TDV: musul (önbellek denetim/NOKTA-ORTADOGU-0077-tdv-onbellek/musul.html; gövdede 1000-1280 yılı 19 kez) |
| 170 | Muğla | 37.215, 28.363 | sehir | 1281 | mentese | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1079);ONERI-B2 | TDV: mugla — "1079’da Türk kuvvetleri Muğla ve civarına kadar geldiler." |
| 171 | Novgorod | 58.521, 31.271 | sehir | 1281 | novgorod | Novgorod Cumhuriyeti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 172 | Nîşâbur | 36.2133, 58.7958 | sehir | 1281 | ilhanli | Gazneli → Büyük Selçuklu başkenti 1038 → Hârizmşah → Moğol 1221 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 173 | Pagan | 21.171, 94.86 | sehir | 1281 | pagan | Pagan Krallığı başkenti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 174 | Palembang | -2.976, 104.775 | liman | 1281 | palembang-sultanligi | Srivijaya | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 175 | Palermo | 38.116, 13.361 | liman | 1281 | napoli | Sicilya Emirliği → Norman 1072 → Sicilya Kr. başkenti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 176 | Paris | 48.857, 2.352 | sehir | 1281 | fransa | Fransa Krallığı (Capet) | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 177 | Pekin (Hanbalık) | 39.904, 116.407 | sehir | 1281 | yuan-hanedani | Liao Nanjing → Jin Zhongdu → Moğol/Yuan Hanbalık | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 178 | Rize | 41.02, 40.523 | liman | 1281 | trabzon-rum | trabzon-rum 1204 (ONERI-A önerisi) | 0930-var-aday(1071);ONERI-A | TDV: rize — "Malazgirt zaferinin (1071) ardından bir süre için Dânişmendliler’in kontrolü altına giren Rize (1098) Anadolu Selçukluları zamanında Erzurum valileri tarafından" |
| 179 | Roma | 41.903, 12.496 | sehir | 1281 | papalik | Papalık | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 180 | Safranbolu | 41.253, 32.694 | sehir | 1281 | selcuklu | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1196);ONERI-C | TDV: safranbolu — "Dadibra, 592’de (1196) II." |
| 181 | Sana | 15.369, 44.191 | sehir | 1281 | yemen | Sulayhî → Hamdânî → Eyyûbî 1174 → Resûlî | 0930-eksen;aday-listesi | TDV: sana (önbellek denetim/GLM1-TDV-ONBELLEK/sana.txt; gövdede 1000-1280 yılı 11 kez) |
| 182 | Selanik | 40.64, 22.944 | liman | 1281 | bizans | Bizans → Selanik Kr. 1204 → Epir 1224 → İznik 1246 | 0930-eksen;aday-listesi | TDV: selanik (önbellek denetim/GLM1-TDV-ONBELLEK/selanik.txt; gövdede 1000-1280 yılı 12 kez) |
| 183 | Sevilla | 37.389, -5.984 | sehir | 1281 | kastilya | Abbâdî → Murâbıt → Muvahhid başkenti → Kastilya 1248 | 0930-eksen;aday-listesi | TDV: isbiliye (önbellek denetim/GLM1-TDV-ONBELLEK/isbiliye.txt; gövdede 1000-1280 yılı 15 kez) |
| 184 | Silifke | 36.309, 33.938 | sehir | 1281 | karaman | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1175);ONERI-B1 | TDV: silifke — "Rupen zamanında (1175-1187) Silifke’yi ellerine geçirdi." |
| 185 | Simnân | 35.5769, 53.3972 | sehir | 1281 | ilhanli | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1029);ONERI-C | TDV: simnan — "Her ne kadar 420’de (1029) Irak Oğuzları tarafından yağmalandıysa da ( a.g.e." |
| 186 | Sisam | 37.755, 26.977 | kale | 1281 | ceneviz | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1027);ONERI-B1 | TDV: sisam — "yüzyıllar arasında, 665-666, 892-893, 911-912 ve 1027 yıllarında dört defa Arap saldırısına uğradığına dair bilgiler vardır." |
| 187 | Sivrihisar | 39.45, 31.535 | sehir | 1281 | selcuklu | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1074);ONERI-C | TDV: sivrihisar — "Sivrihisar, Malazgirt Muharebesi’nden sonra 1074’te Anadolu içlerine doğru ilerleyen Selçuklular’ın hâkimiyetine girdi." |
| 188 | Sukhothai | 17.02, 99.703 | sehir | 1281 | sukhothai | Sukhothai Krallığı 1238 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 189 | Tancûr (Thanjavur) | 10.787, 79.138 | sehir | 1281 | pandya | Çola başkenti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 190 | Tedmür (Palmyra) | 34.55, 38.27 | sehir | 1281 | memluk | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1157);ONERI-C | TDV: tedmur — "552’de (1157) meydana gelen depremden büyük zarar gören Tedmür’ü bundan kısa bir süre sonra ziyaret eden Tudelalı Benjamin burada 2000 yahudinin yaşadığını söyl" |
| 191 | Tekirdağ | 40.9838, 27.5084 | liman | 1281 | bizans | bizans 1275 (ONERI-A önerisi) | 0930-var-aday(1204);ONERI-A | TDV: tekirdag — "Şehir daha sonra yine Hun, Avar, Bulgar ve Peçenekler’in saldırılarının hedefi oldu ve 1204 yılında Latin işgaline uğradı." |
| 192 | Tilimsan | 34.882, -1.315 | sehir | 1281 | zeyyani | Murâbıt/Muvahhid → Zeyyânî 1236 | 0930-eksen;aday-listesi | TDV: tilimsan (önbellek denetim/GLM1-TDV-ONBELLEK/tilimsan.txt; gövdede 1000-1280 yılı 9 kez) |
| 193 | Timbuktu | 16.775, -3.009 | sehir | 1281 | mali-imparatorlugu | Tuareg kuruluşu ~1100 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 194 | Tire | 38.089, 27.735 | sehir | 1281 | bizans | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1072);ONERI-B1 | TDV: tire — "Malazgirt Savaşı’nın ardından Selçuklu akınları buraya kadar uzandı ve 1072’de Büyük Selçuklular’ın hâkimiyetine girdi." |
| 195 | Toledo | 39.863, -4.028 | sehir | 1281 | kastilya | Zünnûnî → Kastilya 1085 | 0930-eksen;aday-listesi | TDV: tuleytula (önbellek denetim/GLM1-TDV-ONBELLEK/tuleytula.txt; gövdede 1000-1280 yılı 26 kez) |
| 196 | Tosya | 41.0161, 34.0397 | kasaba | 1281 | cobanogullari | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1082);ONERI-C | TDV: tosya — "Tosya yöresinde ilk Türk idaresi, Emîr Dânişmend’e bağlı kumandanlardan Emîr Kara Tegin’in (Kara Tigin) 475’teki (1082-83) fetihleriyle başlar." |
| 197 | Tunus | 36.8, 10.18 | liman | 1281 | hafsi | Zîrî/Horasânî → Muvahhid → Hafsî 1229 | 0930-eksen;aday-listesi | TDV: tunus (önbellek denetim/GLM1-TDV-ONBELLEK/tunus.txt; gövdede 1000-1280 yılı 46 kez) |
| 198 | Tûs | 36.4869, 59.5222 | sehir | 1281 | ilhanli | Selçuklu/Hârizmşah | 0930-eksen;aday-listesi | TDV: tus (önbellek denetim/GLM1-TDV-ONBELLEK/tus.txt; gövdede 1000-1280 yılı 9 kez) |
| 199 | Tırnova | 43.081, 25.629 | sehir | 1281 | bulgaristan | II. Bulgar başkenti 1185-1393 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 200 | Urmiye | 37.553, 45.076 | sehir | 1281 | ilhanli | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1040);ONERI-C | TDV: urmiye — "Ebü’l-Heycâ’nın Tebriz hâkimi olan dayısı Vehsûdân er-Revvâdî’nin 432 (1040-41) yılında Oğuzlar’dan birçok kişiyi öldürmesi üzerine Urmiye’deki Oğuzlar şehirden" |
| 201 | Uşak | 38.673, 29.406 | sehir | 1281 | selcuklu | selcuklu 1182 (ONERI-A önerisi) | 0930-var-aday(1075);ONERI-A | TDV: usak — "Malazgirt zaferinin ardından 1075’te İznik’in alınışının ertesi yılı Uşak ve çevresi Selçuklular’ın hâkimiyetine girdi." |
| 202 | Venedik | 45.4409, 12.3188 | liman | 1281 | venedik | Venedik Cumhuriyeti | 0930-eksen;aday-listesi | TDV: venedik (önbellek denetim/GLM1-TDV-ONBELLEK/venedik.txt; gövdede 1000-1280 yılı 3 kez) |
| 203 | Vladimir | 56.129, 40.407 | sehir | 1281 | altinorda | Vladimir-Suzdal başkenti | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 204 | Xi'an (Chang'an) | 34.342, 108.94 | sehir | 1281 | yuan-hanedani | Song → Jin | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 205 | Yinchuan (Ningxia) | 38.487, 106.231 | kale | 1281 | yuan-hanedani | Batı Xia başkenti 1038-1227 | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 206 | Zeyla | 11.355, 43.473 | liman | 1281 | adal | Zeylâ/Adal kıyı şehri | 0930-eksen;aday-listesi | TDV: zeyla (önbellek denetim/GLM1-TDV-ONBELLEK/zeyla.txt; gövdede 1000-1280 yılı 3 kez) |
| 207 | Çorum | 40.55, 34.955 | sehir | 1281 | ilhanli | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1155);ONERI-C | TDV: corum — "Kılıcarslan (1155-1192) tarafından ilhakına kadar sürdü." |
| 208 | Üsküdar | 41.0227, 29.0153 | sehir | 1281 | bizans | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1080);ONERI-C | TDV: uskudar — "Malazgirt zaferinin ardından Selçuklular, Kutalmışoğlu Süleyman Şah’ın kumandasında 1078 ve 1080 yıllarında Üsküdar’a ulaştılar." |
| 209 | İmroz | 40.163, 25.905 | kale | 1281 | bizans | — (kanıt dosyasında hâkim yok) | 0930-var-aday(1204);ONERI-C | TDV: imroz — "Latin istilâsı (1204) sırasında Latin İmparatorluğu’na dahil oldu." |
| 210 | İskenderun | 36.587, 36.173 | liman | 1281 | memluk | memluk 1268 (ONERI-A önerisi) | 0930-var-aday(1097);ONERI-A | TDV: iskenderun — "Haçlı seferleri sırasında 1097’de Tankred tarafından zaptedilmiştir." |
| 211 | İstanköy | 36.893, 27.288 | kale | 1281 | bizans | iznik-imparatorlugu 1258 → bizans 1261 (ONERI-A önerisi) | 0930-var-aday(1258);ONERI-A | TDV: istankoy — "yüzyılda Arap akınlarına hedef olmasının ardından Latin hâkimiyetine girmiş, 1258’de yeniden Bizans’ın eline geçmiştir." |
| 212 | İzmit | 40.766, 29.917 | sehir | 1281 | bizans | iznik-imparatorlugu 1228 → bizans 1261 (ONERI-A önerisi) | 0930-var-aday(1078);ONERI-A | TDV: izmit — "1078’de Bizans İmparatorluğu’na isyan eden Nikephoros Botaneiates, kendi ordusu olmadığı için Türkler’den sağladığı ücretli askerlerden oluşan ordusu ile İzmit’" |
| 213 | Şam | 33.513, 36.292 | sehir | 1281 | memluk | Fâtımî → Selçuklu → Börîler → Zengî 1154 → Eyyûbî | 0930-eksen;aday-listesi | kaynak doğrulanmadı |
| 214 | Şehrizor | 35.56, 45.43 | sehir | 1281 | ilhanli | ilhanli 1258 (ONERI-A önerisi) | 0930-var-aday(1100);ONERI-A | TDV: sehrizor — "Nitekim İbnü’l-Esîr, Selçuklu Sultanı Berkyaruk’un Şehrizor’a gelerek (493/1100) burada topladığı Türkmenler’den büyük bir ordu oluşturduğunu ve kardeşi Muhamme" |
| 215 | Ahvaz | 31.32, 48.6692 | sehir | 1281 | ilhanli | Büveyhî/Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 216 | Akra | 36.7408, 43.8919 | sehir | 1281 | ilhanli | Zengî/Musul | aday-listesi | kaynak doğrulanmadı |
| 217 | Aksum | 14.128, 38.723 | sehir | 1281 | habesistan | Zagve/Habeş dinî merkez | aday-listesi | kaynak doğrulanmadı |
| 218 | Akşehir | 38.357, 31.416 | sehir | 1281 | selcuklu | Bizans → Selçuklu | aday-listesi | TDV: aksehir (önbellek denetim/GLM1-TDV-ONBELLEK/aksehir.txt; gövdede 1000-1280 yılı 1 kez) |
| 219 | Almalık (Almalığ) | 44.05, 80.85 | sehir | 1281 | cagatay | Karluk → Çağatay merkezi | aday-listesi | kaynak doğrulanmadı |
| 220 | Almería | 36.834, -2.464 | liman | 1281 | granada | Tavâif → Murâbıt/Muvahhid → Nasrî | aday-listesi | kaynak doğrulanmadı |
| 221 | Amasra | 41.748, 32.386 | kale | 1281 | ceneviz | Bizans/Trabzon/Ceneviz | aday-listesi | kaynak doğrulanmadı |
| 222 | Anabolu (Nauplion) | 37.567, 22.8 | kale | 1281 | venedik | Bizans → Ahaya/Atina | aday-listesi | kaynak doğrulanmadı |
| 223 | Anamur | 36.078, 32.837 | kale | 1281 | karaman | Ermeni/Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 224 | Ancona | 43.617, 13.517 | liman | 1281 | papalik | Ancona | aday-listesi | kaynak doğrulanmadı |
| 225 | Antep | 37.066, 37.383 | sehir | 1281 | memluk | Urfa Kontluğu → Selçuklu/Zengî/Eyyûbî | aday-listesi | kaynak doğrulanmadı |
| 226 | Arras | 50.291, 2.777 | sehir | 1281 | fransa | Flandre/Artois | aday-listesi | kaynak doğrulanmadı |
| 227 | Arta | 39.161, 20.985 | sehir | 1281 | bizans | Epir Despotluğu başkenti 1205 | aday-listesi | TDV: narda (önbellek denetim/GLM1-TDV-ONBELLEK/narda.txt; gövdede 1000-1280 yılı 18 kez) |
| 228 | Atina | 37.976, 23.734 | sehir | 1281 | atinadukaligi | Bizans → Atina Dk. 1205 | aday-listesi | TDV: atina (önbellek denetim/GLM1-TDV-ONBELLEK/atina.txt; gövdede 1000-1280 yılı 12 kez) |
| 229 | Augsburg | 48.371, 10.898 | sehir | 1281 | almanya | Kutsal Roma | aday-listesi | kaynak doğrulanmadı |
| 230 | Avignon | 43.949, 4.806 | sehir | 1281 | fransa | Provence/Toulouse | aday-listesi | kaynak doğrulanmadı |
| 231 | Azak | 47.113, 39.423 | kale | 1281 | ceneviz | Kıpçak/Altın Orda | aday-listesi | TDV: azak (önbellek denetim/GLM1-TDV-ONBELLEK/azak.txt; gövdede 1000-1280 yılı 4 kez) |
| 232 | Azez (A'zâz) | 36.586, 37.045 | kasaba | 1281 | memluk | Antakya/Urfa → Zengî/Eyyûbî | aday-listesi | kaynak doğrulanmadı |
| 233 | Badajoz | 38.879, -6.97 | sehir | 1281 | kastilya | Eftasî → Murâbıt/Muvahhid → Leon 1230 | aday-listesi | kaynak doğrulanmadı |
| 234 | Bakü | 40.372, 49.867 | liman | 1281 | ilhanli | Şirvanşah | aday-listesi | TDV: baku (önbellek denetim/GLM1-TDV-ONBELLEK/baku.txt; gövdede 1000-1280 yılı 9 kez) |
| 235 | Balyabadra (Patras) | 38.246, 21.735 | liman | 1281 | ahaya-prinkepsligi | Bizans → Ahaya | aday-listesi | kaynak doğrulanmadı |
| 236 | Bari | 41.117, 16.871 | liman | 1281 | napoli | Bizans Katepanlığı → Norman 1071 | aday-listesi | kaynak doğrulanmadı |
| 237 | Barselona | 41.387, 2.17 | liman | 1281 | aragon | Barselona Kontluğu → Aragon Tacı 1137 | aday-listesi | kaynak doğrulanmadı |
| 238 | Basel | 47.559, 7.588 | sehir | 1281 | almanya | Basel Piskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 239 | Belgrad | 44.818, 20.457 | kale | 1281 | sirbistan | Bizans / Macar | aday-listesi | TDV: belgrad (önbellek denetim/GLM1-TDV-ONBELLEK/belgrad.txt; gövdede 1000-1280 yılı 1 kez) |
| 240 | Bem | 29.1061, 58.3572 | kale | 1281 | ilhanli | Kirman Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 241 | Benin Şehri (Edo) | 6.335, 5.604 | sehir | 1281 | benin-kralligi | Benin Krallığı | aday-listesi | kaynak doğrulanmadı |
| 242 | Benâres (Vârânasî) | 25.317, 83.006 | sehir | 1281 | delhi-sultanligi | Gahadavala → Delhi | aday-listesi | kaynak doğrulanmadı |
| 243 | Berde (Karabağ) | 40.3747, 47.1281 | sehir | 1281 | ilhanli | Sâlârî/Şeddâdî → Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 244 | Bergen | 60.393, 5.324 | liman | 1281 | norvec-kralligi | Norveç Krallığı başkenti | aday-listesi | kaynak doğrulanmadı |
| 245 | Bicâye | 36.751, 5.056 | liman | 1281 | zeyyani | Hammâdî başkenti 1090 → Muvahhid → Hafsî | aday-listesi | TDV: bicaye (önbellek denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/bicaye.txt; gövdede 1000-1280 yılı 7 kez) |
| 246 | Bistâm | 36.4831, 55.01 | sehir | 1281 | ilhanli | Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 247 | Bolonya | 44.494, 11.343 | sehir | 1281 | papalik | Bologna Komünü | aday-listesi | kaynak doğrulanmadı |
| 248 | Bordo | 44.838, -0.579 | liman | 1281 | ingiltere | Aquitaine → İngiliz Plantagenet 1154 | aday-listesi | kaynak doğrulanmadı |
| 249 | Bratislava | 48.146, 17.107 | sehir | 1281 | macaristan | Macar | aday-listesi | kaynak doğrulanmadı |
| 250 | Bremen | 53.076, 8.807 | liman | 1281 | almanya | Bremen Başpiskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 251 | Brescia | 45.539, 10.221 | sehir | 1281 | __BOSLUK__ | Brescia Komünü | aday-listesi | kaynak doğrulanmadı |
| 252 | Breslau (Wrocław) | 51.11, 17.032 | sehir | 1281 | almanya | Silezya Piast | aday-listesi | kaynak doğrulanmadı |
| 253 | Brindisi | 40.639, 17.945 | liman | 1281 | napoli | Bizans → Norman | aday-listesi | kaynak doğrulanmadı |
| 254 | Brno | 49.195, 16.608 | sehir | 1281 | almanya | Moravya | aday-listesi | kaynak doğrulanmadı |
| 255 | Brüj (Brugge) | 51.209, 3.225 | liman | 1281 | fransa | Flandre Kontluğu | aday-listesi | kaynak doğrulanmadı |
| 256 | Budin | 47.498, 19.04 | sehir | 1281 | macaristan | Macar Krallığı | aday-listesi | TDV: budin (önbellek denetim/GLM1-TDV-ONBELLEK/budin.txt; gövdede 1000-1280 yılı 9 kez) |
| 257 | Burgos | 42.344, -3.697 | sehir | 1281 | kastilya | Kastilya | aday-listesi | kaynak doğrulanmadı |
| 258 | Burûcird | 33.8972, 48.7514 | sehir | 1281 | ilhanli | Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 259 | Caen | 49.183, -0.37 | sehir | 1281 | fransa | Normandiya | aday-listesi | kaynak doğrulanmadı |
| 260 | Cenne (Djenné) | 13.906, -4.555 | sehir | 1473 | songhay-imparatorlugu | Cenne şehir devleti (~1200 İslâmlaşma) | aday-listesi | kaynak doğrulanmadı |
| 261 | Ceylanpınar | 36.845, 40.043 | kasaba | 1281 | artuklu | Artuklu/Zengî/Eyyûbî | aday-listesi | kaynak doğrulanmadı |
| 262 | Chełm (Kholm) | 51.1431, 23.4716 | sehir | 1281 | polonya-erken | Galiçya-Volhinya | aday-listesi | kaynak doğrulanmadı |
| 263 | Cidde | 21.543, 39.173 | liman | 1281 | memluk | Mekke Şerifliği | aday-listesi | TDV: cidde (önbellek denetim/GLM1-TDV-ONBELLEK/cidde.txt; gövdede 1000-1280 yılı 1 kez) |
| 264 | Coimbra | 40.203, -8.41 | sehir | 1281 | portekiz | Leon 1064 → Portekiz başkenti | aday-listesi | kaynak doğrulanmadı |
| 265 | Cádiz | 36.527, -6.289 | liman | 1281 | kastilya | Muvahhid → Kastilya 1262 | aday-listesi | kaynak doğrulanmadı |
| 266 | Cîruft | 28.675, 57.7372 | sehir | 1281 | ilhanli | Kirman Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 267 | Dali | 25.606, 100.267 | sehir | 1281 | yuan-hanedani | Dali Krallığı başkenti → Moğol 1253 | aday-listesi | kaynak doğrulanmadı |
| 268 | Darende | 38.55, 37.5 | sehir | 1281 | ilhanli | Danişmendli/Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 269 | Datong | 40.076, 113.3 | kale | 1281 | yuan-hanedani | Liao/Jin batı başkenti | aday-listesi | kaynak doğrulanmadı |
| 270 | Derbend | 42.058, 48.29 | kale | 1281 | altinorda | Derbent Hâşimî Emirliği → Şirvanşah | aday-listesi | kaynak doğrulanmadı |
| 271 | Devagiri (Devletâbâd) | 19.943, 75.22 | kale | 1281 | yadava | Yâdava başkenti 1187 | aday-listesi | kaynak doğrulanmadı |
| 272 | Dijon | 47.322, 5.041 | sehir | 1281 | burgonya | Burgonya Dk. | aday-listesi | kaynak doğrulanmadı |
| 273 | Dizfûl | 32.3831, 48.4014 | sehir | 1281 | ilhanli | Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 274 | Draç | 41.323, 19.455 | liman | 1281 | sicilya-kralligi | Bizans → Venedik/Epir/Sicilya | aday-listesi | kaynak doğrulanmadı |
| 275 | Dublin | 53.35, -6.26 | sehir | 1281 | ingiltere | Norse-Gael → İngiliz 1171 | aday-listesi | kaynak doğrulanmadı |
| 276 | Dubrovnik | 42.65, 18.094 | sehir | 1281 | venedik | Bizans → Venedik 1205 | aday-listesi | TDV: dubrovnik (önbellek denetim/GLM1-TDV-ONBELLEK/dubrovnik.txt; gövdede 1000-1280 yılı 9 kez) |
| 277 | Dunhuang | 40.142, 94.662 | sehir | 1281 | yuan-hanedani | Batı Xia 1036-1227 | aday-listesi | kaynak doğrulanmadı |
| 278 | Dâmgan | 36.1683, 54.3481 | sehir | 1281 | ilhanli | Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 279 | Dârâb | 28.7519, 54.5444 | sehir | 1281 | ilhanli | Büveyhî/Salgurlu | aday-listesi | kaynak doğrulanmadı |
| 280 | Ecmîr (Ajmer) | 26.45, 74.639 | sehir | 1281 | delhi-sultanligi | Çahamana başkenti → Gurlu 1192 | aday-listesi | TDV: ecmir (önbellek denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/ecmir.txt; gövdede 1000-1280 yılı 7 kez) |
| 281 | Edinburg | 55.953, -3.189 | sehir | 1281 | ingiltere | İskoçya Krallığı | aday-listesi | kaynak doğrulanmadı |
| 282 | Elbing (Elbląg) | 54.1522, 19.4088 | sehir | 1281 | almanya | Töton 1237 | aday-listesi | kaynak doğrulanmadı |
| 283 | Erciş | 39.026, 43.36 | kale | 1281 | ilhanli | Mervânî/Ahlatşahlar/Eyyûbî | aday-listesi | kaynak doğrulanmadı |
| 284 | Erfurt | 50.978, 11.029 | sehir | 1281 | almanya | Mainz | aday-listesi | kaynak doğrulanmadı |
| 285 | Ermenek | 36.64, 32.891 | kale | 1281 | karaman | Kilikya Ermeni/Selçuklu → Karaman | aday-listesi | kaynak doğrulanmadı |
| 286 | Esferâyin | 37.0769, 57.51 | sehir | 1281 | ilhanli | Selçuklu/Hârizmşah | aday-listesi | kaynak doğrulanmadı |
| 287 | Eski Kırım (Solhat) | 45.0281, 35.1078 | sehir | 1281 | altinorda | Altın Orda Kırım merkezi | aday-listesi | kaynak doğrulanmadı |
| 288 | Eski Ladoga | 59.997, 32.298 | kale | 1281 | novgorod | Novgorod | aday-listesi | kaynak doğrulanmadı |
| 289 | Eski Zağra (Stara Zagora) | 42.425, 25.633 | sehir | 1281 | bulgaristan | Bizans/Bulgar | aday-listesi | kaynak doğrulanmadı |
| 290 | Eğriboz | 38.4631, 23.6023 | kale | 1281 | venedik | Bizans → Lombard/Venedik | aday-listesi | TDV: egriboz (önbellek denetim/GLM1-TDV-ONBELLEK/egriboz.txt; gövdede 1000-1280 yılı 12 kez) |
| 291 | Ferrara | 44.836, 11.619 | sehir | 1281 | ferrara | Ferrara/Este 1240 | aday-listesi | kaynak doğrulanmadı |
| 292 | Fesâ | 28.9383, 53.6483 | sehir | 1281 | ilhanli | Salgurlu | aday-listesi | kaynak doğrulanmadı |
| 293 | Filibe | 42.144, 24.75 | sehir | 1281 | bulgaristan | Bizans / Bulgar / Latin | aday-listesi | TDV: filibe (önbellek denetim/GLM1-TDV-ONBELLEK/filibe.txt; gövdede 1000-1280 yılı 11 kez) |
| 294 | Floransa | 43.769, 11.256 | sehir | 1281 | floransa | Floransa Komünü | aday-listesi | kaynak doğrulanmadı |
| 295 | Frankfurt | 50.11, 8.682 | sehir | 1281 | almanya | Kutsal Roma | aday-listesi | kaynak doğrulanmadı |
| 296 | Gaur (Lakhnautî) | 24.868, 88.133 | sehir | 1281 | delhi-sultanligi | Sena → Halacî/Delhi Bengal 1204 | aday-listesi | kaynak doğrulanmadı |
| 297 | Gdansk | 54.352, 18.646 | liman | 1281 | almanya | Pomeranya | aday-listesi | kaynak doğrulanmadı |
| 298 | Gence | 40.683, 46.36 | kale | 1281 | ilhanli | Şeddâdî → Selçuklu → İldenizli → Gürcü/Moğol | aday-listesi | TDV: gence (önbellek denetim/GLM1-TDV-ONBELLEK/gence.txt; gövdede 1000-1280 yılı 25 kez) |
| 299 | Gent | 51.054, 3.717 | sehir | 1281 | fransa | Flandre Kontluğu | aday-listesi | kaynak doğrulanmadı |
| 300 | Graz | 47.071, 15.439 | sehir | 1281 | avusturya | Steiermark | aday-listesi | kaynak doğrulanmadı |
| 301 | Gvalyar (Gwalior) | 26.218, 78.183 | kale | 1281 | delhi-sultanligi | Kaçapaghata/Pratihâra → Delhi | aday-listesi | kaynak doğrulanmadı |
| 302 | Hakata (Fukuoka) | 33.59, 130.402 | liman | 1281 | kamakura | Japonya Kyushu merkezi | aday-listesi | kaynak doğrulanmadı |
| 303 | Hamburg | 53.551, 9.994 | liman | 1281 | almanya | Hamburg-Bremen | aday-listesi | kaynak doğrulanmadı |
| 304 | Hanya | 35.512, 24.019 | kale | 1281 | venedik | Bizans → Venedik 1252 | aday-listesi | kaynak doğrulanmadı |
| 305 | Hille | 32.4828, 44.4353 | sehir | 1281 | ilhanli | Mezyedî (kuruluş 1102) → Abbâsî → İlhanlı | aday-listesi | TDV: hille (önbellek denetim/NOKTA-ORTADOGU-0077-tdv-onbellek/hille.html; gövdede 1000-1280 yılı 4 kez) |
| 306 | Hotan | 37.117, 79.928 | sehir | 1281 | cagatay | Karahanlı 1006 sonrası | aday-listesi | kaynak doğrulanmadı |
| 307 | Hâmi (Kumul) | 42.828, 93.515 | sehir | 1281 | yuan-hanedani | Uygur/Batı Xia | aday-listesi | kaynak doğrulanmadı |
| 308 | Hît | 33.6414, 42.8253 | sehir | 1281 | ilhanli | Abbâsî | aday-listesi | TDV: hit (önbellek denetim/NOKTA-ORTADOGU-0077-tdv-onbellek/hit.html; gövdede 1000-1280 yılı 4 kez) |
| 309 | Hîve | 41.3783, 60.3639 | sehir | 1281 | cagatay | Hârizmşah | aday-listesi | kaynak doğrulanmadı |
| 310 | Jambi | -1.61, 103.61 | liman | 1281 | malay-sultanliklari | Srivijaya-Melayu | aday-listesi | kaynak doğrulanmadı |
| 311 | Jaén | 37.779, -3.79 | sehir | 1281 | kastilya | Muvahhid → Kastilya 1246 | aday-listesi | kaynak doğrulanmadı |
| 312 | Kabala | 40.984, 47.845 | sehir | 1281 | ilhanli | Şirvanşah | aday-listesi | kaynak doğrulanmadı |
| 313 | Kalikut (Kozhikode) | 11.259, 75.78 | liman | 1281 | kalikut | Zamorin | aday-listesi | kaynak doğrulanmadı |
| 314 | Kalocsa | 46.527, 18.985 | sehir | 1281 | macaristan | Macar başpiskoposluk | aday-listesi | kaynak doğrulanmadı |
| 315 | Kalyari (Cagliari) | 39.22, 9.12 | liman | 1281 | piza | Cagliari Hâkimliği/Piza | aday-listesi | kaynak doğrulanmadı |
| 316 | Kanbâyet (Khambhat) | 22.317, 72.62 | liman | 1281 | racput | Çalukya limanı | aday-listesi | kaynak doğrulanmadı |
| 317 | Kandiye (Girit) | 35.339, 25.133 | liman | 1281 | venedik | Bizans → Venedik 1211 | aday-listesi | TDV: kandiye (önbellek denetim/GLM1-TDV-ONBELLEK/kandiye.txt; gövdede 1000-1280 yılı 5 kez) |
| 318 | Kano | 12.0, 8.517 | sehir | 1281 | hausa-sehir-devletleri | Hausa Kano devleti | aday-listesi | kaynak doğrulanmadı |
| 319 | Kanton (Guangzhou) | 23.129, 113.264 | liman | 1281 | yuan-hanedani | Song | aday-listesi | kaynak doğrulanmadı |
| 320 | Karadeniz Ereğli | 41.2846, 31.418 | liman | 1281 | bizans | Bizans/İznik | aday-listesi | kaynak doğrulanmadı |
| 321 | Karaferye (Veria) | 40.524, 22.203 | sehir | 1281 | bizans | Bizans/Selanik | aday-listesi | kaynak doğrulanmadı |
| 322 | Karahisâr-ı Sâhib (Afyon) | 38.757, 30.538 | kale | 1281 | sahibata | Bizans → Selçuklu → Sâhib Ata 1275 | aday-listesi | TDV: afyonkarahisar (önbellek denetim/GLM1-TDV-ONBELLEK/afyonkarahisar.txt; gövdede 1000-1280 yılı 7 kez) |
| 323 | Karşi (Nahşeb) | 38.86, 65.795 | sehir | 1281 | cagatay | Karahanlı/Hârizmşah | aday-listesi | kaynak doğrulanmadı |
| 324 | Katanya (Catania) | 37.502, 15.087 | liman | 1281 | napoli | Norman | aday-listesi | kaynak doğrulanmadı |
| 325 | Katmandu | 27.717, 85.324 | sehir | 1281 | nepal | Nepal (Malla 1200) | aday-listesi | kaynak doğrulanmadı |
| 326 | Kattak (Cuttack) | 20.463, 85.883 | sehir | 1281 | orissa | Doğu Ganga (Orissa) başkenti | aday-listesi | kaynak doğrulanmadı |
| 327 | Kavala | 40.9451, 24.4101 | liman | 1281 | bizans | Bizans/Latin | aday-listesi | kaynak doğrulanmadı |
| 328 | Kefe | 45.032, 35.382 | liman | 1281 | ceneviz | Cenova kolonisi ~1266 | aday-listesi | TDV: kefe (önbellek denetim/GLM1-TDV-ONBELLEK/kefe.txt; gövdede 1000-1280 yılı 3 kez) |
| 329 | Kelkit | 40.1281, 39.4381 | kasaba | 1281 | ilhanli | Saltuklu/Mengücük | aday-listesi | kaynak doğrulanmadı |
| 330 | Kerak | 31.181, 35.703 | kale | 1281 | memluk | Kudüs Kr. (Oultrejordain) 1142-1188 → Eyyûbî | aday-listesi | TDV: kerek (önbellek denetim/GLM1-TDV-ONBELLEK/kerek.txt; gövdede 1000-1280 yılı 5 kez) |
| 331 | Kerkük | 35.468, 44.392 | sehir | 1281 | ilhanli | Selçuklu/Begteginli | aday-listesi | TDV: kerkuk (önbellek denetim/GLM1-TDV-ONBELLEK/kerkuk.txt; gövdede 1000-1280 yılı 9 kez) |
| 332 | Kesriye (Kastoria) | 40.519, 21.269 | sehir | 1281 | bizans | Bizans/Epir | aday-listesi | kaynak doğrulanmadı |
| 333 | Kiş (Kish) | 26.526, 53.979 | kale | 1281 | hurmuz-sultanligi | Kîş melikliği | aday-listesi | kaynak doğrulanmadı |
| 334 | Knin | 44.041, 16.197 | kale | 1281 | macaristan | Hırvat Kr. → Macar | aday-listesi | kaynak doğrulanmadı |
| 335 | Kolam (Quilon) | 8.893, 76.614 | liman | 1281 | travankur | Venad | aday-listesi | kaynak doğrulanmadı |
| 336 | Korfu | 39.624, 19.922 | kale | 1281 | sicilya-kralligi | Bizans / Sicilya / Epir | aday-listesi | TDV: korfu (önbellek denetim/GLM1-TDV-ONBELLEK/korfu.txt; gövdede 1000-1280 yılı 6 kez) |
| 337 | Kotor (Cattaro) | 42.421, 18.768 | liman | 1281 | sirbistan | Bizans / Duklja / Sırp | aday-listesi | kaynak doğrulanmadı |
| 338 | Kum | 34.64, 50.876 | sehir | 1281 | ilhanli | Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 339 | Kutaisi | 42.268, 42.695 | sehir | 1281 | gurcistan | Gürcü Kr. başkenti (1122'ye dek) | aday-listesi | kaynak doğrulanmadı |
| 340 | Kuça (Kuqa) | 41.717, 82.962 | sehir | 1281 | cagatay | Uygur/Karahanlı | aday-listesi | kaynak doğrulanmadı |
| 341 | Kyongcu (Gyeongju) | 35.856, 129.225 | sehir | 1281 | goryeo | Goryeo (eski Silla başkenti) | aday-listesi | kaynak doğrulanmadı |
| 342 | Kâbil | 34.528, 69.172 | sehir | 1281 | cagatay | Gazneli/Gurlu | aday-listesi | kaynak doğrulanmadı |
| 343 | Kâin | 33.7272, 59.1831 | sehir | 1281 | ilhanli | Nizârî Kuhistan | aday-listesi | kaynak doğrulanmadı |
| 344 | Kâzerûn | 29.6186, 51.6542 | sehir | 1281 | ilhanli | Büveyhî/Salgurlu | aday-listesi | kaynak doğrulanmadı |
| 345 | Köln | 50.938, 6.96 | sehir | 1281 | almanya | Köln Başpiskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 346 | Königsberg | 54.71, 20.512 | liman | 1281 | almanya | Töton 1255 | aday-listesi | kaynak doğrulanmadı |
| 347 | Kûs | 25.915, 32.76 | sehir | 1281 | memluk | Fâtımî/Eyyûbî Saîd merkezi | aday-listesi | kaynak doğrulanmadı |
| 348 | Lahsa | 25.383, 49.588 | bolge | 1281 | usfuri | Karmatî → Uyûnî 1076 | aday-listesi | TDV: lahsa (önbellek denetim/GLM1-TDV-ONBELLEK/lahsa.txt; gövdede 1000-1280 yılı 2 kez) |
| 349 | Lefkoşa | 35.17, 33.36 | sehir | 1281 | lusignan | Bizans → Komnenos → Lusignan Kıbrıs Kr. 1192 | aday-listesi | kaynak doğrulanmadı |
| 350 | León | 42.599, -5.567 | sehir | 1281 | kastilya | Leon Krallığı başkenti | aday-listesi | kaynak doğrulanmadı |
| 351 | Lhasa | 29.652, 91.172 | sehir | 1281 | yuan-hanedani | Tibet (dinî merkez) | aday-listesi | kaynak doğrulanmadı |
| 352 | Lizbon | 38.722, -9.139 | liman | 1281 | portekiz | Murâbıt/Muvahhid → Portekiz 1147 | aday-listesi | kaynak doğrulanmadı |
| 353 | Liège | 50.633, 5.567 | sehir | 1281 | almanya | Liège Prens-Piskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 354 | Lleida | 41.617, 0.62 | sehir | 1281 | aragon | Tavâif → Barselona 1149 | aday-listesi | kaynak doğrulanmadı |
| 355 | Lopburi | 14.8, 100.62 | sehir | 1281 | sukhothai | Lavo/Kmer | aday-listesi | kaynak doğrulanmadı |
| 356 | Luoyang | 34.663, 112.434 | sehir | 1281 | yuan-hanedani | Song → Jin | aday-listesi | kaynak doğrulanmadı |
| 357 | Luristan | 33.487, 48.356 | bolge | 1281 | ilhanli | Lur-i Küçük | aday-listesi | kaynak doğrulanmadı |
| 358 | Lvov | 49.84, 24.03 | sehir | 1281 | polonya-erken | Galiçya-Volhinya (kuruluş ~1256) | aday-listesi | kaynak doğrulanmadı |
| 359 | Lyon | 45.76, 4.836 | sehir | 1281 | fransa | Kutsal Roma / başpiskoposluk | aday-listesi | kaynak doğrulanmadı |
| 360 | Lâhîcan | 37.2072, 50.0044 | sehir | 1281 | ilhanli | Gîlân beyleri | aday-listesi | kaynak doğrulanmadı |
| 361 | Lübeck | 53.866, 10.687 | liman | 1281 | almanya | Saksonya → serbest şehir 1226 | aday-listesi | kaynak doğrulanmadı |
| 362 | Madurai | 9.925, 78.119 | sehir | 1281 | pandya | Pandya başkenti | aday-listesi | kaynak doğrulanmadı |
| 363 | Magdeburg | 52.131, 11.64 | sehir | 1281 | almanya | Magdeburg Başpiskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 364 | Magosa | 35.125, 33.94 | kale | 1281 | lusignan | Bizans → Kıbrıs Kr. | aday-listesi | TDV: magosa (önbellek denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/magosa.txt; gövdede 1000-1280 yılı 7 kez) |
| 365 | Mainz | 49.999, 8.273 | sehir | 1281 | almanya | Mainz Başpiskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 366 | Malindi | -3.2192, 40.1169 | liman | 1281 | svahili-sehirleri | Svahili şehri | aday-listesi | kaynak doğrulanmadı |
| 367 | Manastır | 41.031, 21.335 | sehir | 1281 | sirbistan | Bizans/Bulgar | aday-listesi | kaynak doğrulanmadı |
| 368 | Mantova | 45.156, 10.791 | sehir | 1281 | mantua | Mantova Komünü/Bonacolsi | aday-listesi | kaynak doğrulanmadı |
| 369 | Maraş | 37.575, 36.937 | sehir | 1281 | memluk | Bizans/Filaretos → Haçlı → Selçuklu 1149 | aday-listesi | kaynak doğrulanmadı |
| 370 | Marsilya | 43.297, 5.37 | liman | 1281 | fransa | Provence | aday-listesi | kaynak doğrulanmadı |
| 371 | Mayorka (Palma) | 39.57, 2.65 | liman | 1281 | aragon | Tavâif/Benî Gâniye/Muvahhid → Aragon 1229 | aday-listesi | kaynak doğrulanmadı |
| 372 | Merc | 32.492, 20.833 | sehir | 1551 | italya | Fâtımî/yerel Arap | aday-listesi | TDV: berka (önbellek denetim/GLM1-TDV-ONBELLEK/berka.txt; gövdede 1000-1280 yılı 3 kez) |
| 373 | Messina | 38.194, 15.554 | liman | 1281 | napoli | Sicilya Emirliği → Norman 1061 | aday-listesi | kaynak doğrulanmadı |
| 374 | Midyat | 37.418, 41.372 | kasaba | 1281 | artuklu | Artuklu | aday-listesi | kaynak doğrulanmadı |
| 375 | Milano | 45.464, 9.19 | sehir | 1281 | milanoduka | Milano Komünü | aday-listesi | kaynak doğrulanmadı |
| 376 | Milas | 37.316, 27.783 | sehir | 1281 | mentese | Bizans → Menteşe 1280 | aday-listesi | TDV: milas (önbellek denetim/GLM1-TDV-ONBELLEK/milas.txt; gövdede 1000-1280 yılı 6 kez) |
| 377 | Minsk | 53.904, 27.561 | sehir | 1281 | litvanya-buyuk-dukalik | Polotsk | aday-listesi | kaynak doğrulanmadı |
| 378 | Mombasa | -4.0402, 39.6794 | liman | 1281 | svahili-sehirleri | Svahili şehri | aday-listesi | kaynak doğrulanmadı |
| 379 | Montpellier | 43.611, 3.877 | sehir | 1281 | aragon | Montpellier lordluğu / Aragon | aday-listesi | kaynak doğrulanmadı |
| 380 | Moskova | 55.756, 37.617 | sehir | 1281 | altinorda | Vladimir-Suzdal (ilk anılış 1147) | aday-listesi | kaynak doğrulanmadı |
| 381 | Moundville | 32.998, -87.63 | sehir | 1281 | moundville | Mississippi kültürü | aday-listesi | kaynak doğrulanmadı |
| 382 | Murcia | 37.984, -1.129 | sehir | 1281 | kastilya | Tavâif/İbn Merdeniş → Kastilya 1243/66 | aday-listesi | TDV: mursiye (önbellek denetim/GLM1-TDV-ONBELLEK/mursiye.txt; gövdede 1000-1280 yılı 25 kez) |
| 383 | Murom | 55.575, 42.052 | sehir | 1281 | altinorda | Murom-Ryazan | aday-listesi | kaynak doğrulanmadı |
| 384 | Málaga | 36.721, -4.421 | liman | 1281 | granada | Hammûdî → Nasrî | aday-listesi | TDV: maleka (önbellek denetim/GLM1-TDV-ONBELLEK/maleka.txt; gövdede 1000-1280 yılı 7 kez) |
| 385 | Mînâb | 27.1467, 57.08 | sehir | 1281 | ilhanli | Hürmüz melikliği (kıta Hürmüz'ü) | aday-listesi | kaynak doğrulanmadı |
| 386 | Münbiç | 36.528, 37.955 | kasaba | 1281 | memluk | Selçuklu/Zengî/Eyyûbî | aday-listesi | kaynak doğrulanmadı |
| 387 | Nakhon Si Thammarat | 8.432, 99.964 | sehir | 1281 | sukhothai | Tambralinga | aday-listesi | kaynak doğrulanmadı |
| 388 | Nanking (Nanjing) | 32.06, 118.797 | sehir | 1281 | yuan-hanedani | Song | aday-listesi | kaynak doğrulanmadı |
| 389 | Nantes | 47.218, -1.554 | liman | 1281 | bretanya | Bretanya Dk. | aday-listesi | kaynak doğrulanmadı |
| 390 | Napoli | 40.852, 14.268 | liman | 1281 | napoli | Napoli Dk. → Sicilya Kr. 1139 | aday-listesi | kaynak doğrulanmadı |
| 391 | Nara | 34.685, 135.805 | sehir | 1281 | kamakura | Japonya (dinî merkez) | aday-listesi | kaynak doğrulanmadı |
| 392 | Narbonne | 43.184, 3.003 | sehir | 1281 | fransa | Narbonne Vikontluğu | aday-listesi | kaynak doğrulanmadı |
| 393 | Nesâ | 37.9667, 58.1833 | sehir | 1281 | ilhanli | Selçuklu/Hârizmşah | aday-listesi | kaynak doğrulanmadı |
| 394 | Niani | 11.383, -8.667 | sehir | 1281 | mali-imparatorlugu | Mali İmparatorluğu başkenti (1235 sonrası; yeri tartışmalı) | aday-listesi | TDV: mali (önbellek denetim/GLM1-TDV-ONBELLEK/mali.txt; gövdede 1000-1280 yılı 16 kez) |
| 395 | Nihâvend | 34.1911, 48.3767 | sehir | 1281 | ilhanli | Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 396 | Nijniy Novgorod | 56.296, 43.936 | sehir | 1281 | altinorda | Vladimir-Suzdal (kuruluş 1221) | aday-listesi | kaynak doğrulanmadı |
| 397 | Ningbo | 29.868, 121.544 | liman | 1281 | yuan-hanedani | Song limanı | aday-listesi | kaynak doğrulanmadı |
| 398 | Nitra (Nyitra) | 48.3069, 18.0864 | kale | 1281 | macaristan | Macar | aday-listesi | kaynak doğrulanmadı |
| 399 | Niş | 43.321, 21.896 | sehir | 1281 | sirbistan | Bizans / Macar / Sırp | aday-listesi | TDV: nis (önbellek denetim/GLM1-TDV-ONBELLEK/nis.txt; gövdede 1000-1280 yılı 10 kez) |
| 400 | Nürnberg | 49.454, 11.077 | sehir | 1281 | almanya | Kutsal Roma | aday-listesi | kaynak doğrulanmadı |
| 401 | Ohri | 41.1194, 20.8028 | sehir | 1281 | sirbistan | I. Bulgar 1018'e dek → Bizans → Epir | aday-listesi | TDV: ohri (önbellek denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/ohri.txt; gövdede 1000-1280 yılı 8 kez) |
| 402 | Olomouc | 49.594, 17.251 | sehir | 1281 | almanya | Moravya | aday-listesi | kaynak doğrulanmadı |
| 403 | Orléans | 47.902, 1.909 | sehir | 1281 | fransa | Fransa | aday-listesi | kaynak doğrulanmadı |
| 404 | Oslo | 59.913, 10.752 | liman | 1281 | danimarka | Norveç | aday-listesi | kaynak doğrulanmadı |
| 405 | Otranto | 40.146, 18.489 | kale | 1281 | napoli | Bizans → Norman | aday-listesi | kaynak doğrulanmadı |
| 406 | Oxford | 51.752, -1.258 | sehir | 1281 | ingiltere | İngiltere | aday-listesi | kaynak doğrulanmadı |
| 407 | Padova | 45.407, 11.876 | sehir | 1281 | __BOSLUK__ | Padova Komünü | aday-listesi | kaynak doğrulanmadı |
| 408 | Pamplona | 42.813, -1.646 | sehir | 1281 | navarra | Navarra başkenti | aday-listesi | kaynak doğrulanmadı |
| 409 | Parma | 44.801, 10.328 | sehir | 1281 | __BOSLUK__ | Parma Komünü | aday-listesi | kaynak doğrulanmadı |
| 410 | Patan (Anhilvâda) | 23.85, 72.126 | sehir | 1281 | racput | Çalukya (Solanki) başkenti | aday-listesi | kaynak doğrulanmadı |
| 411 | Perth (İskoçya) | 56.396, -3.437 | sehir | 1281 | iskocya | İskoçya taç giyme | aday-listesi | kaynak doğrulanmadı |
| 412 | Peçuy | 46.073, 18.233 | sehir | 1281 | macaristan | Macar Krallığı (piskoposluk 1009) | aday-listesi | TDV: pecuy (önbellek denetim/BALKAN-MACAR-0081-tdv-onbellek/pecuy.html; gövdede 1000-1280 yılı 10 kez) |
| 413 | Peşâver | 34.008, 71.578 | sehir | 1281 | delhi-sultanligi | Hindû Şahî → Gazneli 1001 | aday-listesi | kaynak doğrulanmadı |
| 414 | Pisa | 43.716, 10.397 | sehir | 1281 | piza | Piza Cumhuriyeti | aday-listesi | kaynak doğrulanmadı |
| 415 | Poitiers | 46.58, 0.34 | sehir | 1281 | fransa | Aquitaine | aday-listesi | kaynak doğrulanmadı |
| 416 | Polotsk | 55.485, 28.786 | sehir | 1281 | litvanya-buyuk-dukalik | Polotsk Knezliği | aday-listesi | kaynak doğrulanmadı |
| 417 | Porto | 41.15, -8.611 | liman | 1281 | portekiz | Portekiz Kontluğu/Krallığı | aday-listesi | kaynak doğrulanmadı |
| 418 | Poznan | 52.409, 16.932 | sehir | 1281 | polonya-erken | Polonya | aday-listesi | kaynak doğrulanmadı |
| 419 | Prag | 50.088, 14.421 | sehir | 1281 | almanya | Bohemya | aday-listesi | kaynak doğrulanmadı |
| 420 | Prizren | 42.214, 20.741 | sehir | 1281 | sirbistan | Bizans → Sırp ~1208 | aday-listesi | kaynak doğrulanmadı |
| 421 | Pskov | 57.813, 28.335 | sehir | 1281 | novgorod | Novgorod/Pskov | aday-listesi | kaynak doğrulanmadı |
| 422 | Rabat | 34.021, -6.841 | liman | 1281 | merini | Muvahhid (kuruluş ~1150) | aday-listesi | TDV: rabat (önbellek denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/rabat.txt; gövdede 1000-1280 yılı 9 kez) |
| 423 | Ravenna | 44.418, 12.203 | sehir | 1281 | papalik | Ravenna | aday-listesi | kaynak doğrulanmadı |
| 424 | Regensburg | 49.019, 12.097 | sehir | 1281 | almanya | Bavyera | aday-listesi | kaynak doğrulanmadı |
| 425 | Reims | 49.258, 4.031 | sehir | 1281 | fransa | Fransa (taç giyme) | aday-listesi | kaynak doğrulanmadı |
| 426 | Rennes | 48.114, -1.68 | sehir | 1281 | bretanya | Bretanya Dk. | aday-listesi | kaynak doğrulanmadı |
| 427 | Reşt | 37.281, 49.583 | sehir | 1281 | ilhanli | Gîlân beyleri | aday-listesi | kaynak doğrulanmadı |
| 428 | Ribe | 55.328, 8.766 | sehir | 1281 | danimarka | Danimarka | aday-listesi | kaynak doğrulanmadı |
| 429 | Riga | 56.949, 24.105 | liman | 1281 | almanya | Riga Başpiskoposluğu/Livonya 1201 | aday-listesi | kaynak doğrulanmadı |
| 430 | Rodos | 36.443, 28.226 | kale | 1281 | bizans | Bizans / Gabalas | aday-listesi | TDV: rodos (önbellek denetim/GLM1-TDV-ONBELLEK/rodos.txt; gövdede 1000-1280 yılı 13 kez) |
| 431 | Rostov Veliki | 57.185, 39.414 | sehir | 1281 | altinorda | Rostov-Suzdal | aday-listesi | kaynak doğrulanmadı |
| 432 | Rouen | 49.443, 1.099 | sehir | 1281 | fransa | Normandiya Dk. → Fransa 1204 | aday-listesi | kaynak doğrulanmadı |
| 433 | Râmhürmüz | 31.2803, 49.6039 | sehir | 1281 | ilhanli | Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 434 | Sa'de | 16.94, 43.764 | sehir | 1281 | yemen | Zeydî imamlar | aday-listesi | kaynak doğrulanmadı |
| 435 | Salamanca | 40.965, -5.664 | sehir | 1281 | kastilya | Leon | aday-listesi | kaynak doğrulanmadı |
| 436 | Santiago de Compostela | 42.878, -8.545 | sehir | 1281 | kastilya | Leon/Galiçya | aday-listesi | kaynak doğrulanmadı |
| 437 | Saray (Selitrennoye) | 47.183, 47.7 | sehir | 1281 | altinorda | Altın Orda başkenti ~1250 | aday-listesi | TDV: saray (önbellek denetim/GLM1-TDV-ONBELLEK/saray.txt; gövdede 1000-1280 yılı 9 kez) |
| 438 | Sayram (İsficâb) | 42.303, 69.786 | kasaba | 1281 | cagatay | Karahanlı | aday-listesi | kaynak doğrulanmadı |
| 439 | Sebte (Ceuta) | 35.889, -5.318 | liman | 1281 | merini | Murâbıt/Muvahhid | aday-listesi | TDV: sebte (önbellek denetim/GLM1-TDV-ONBELLEK/sebte.txt; gövdede 1000-1280 yılı 12 kez) |
| 440 | Sebzevâr | 36.2133, 57.6792 | sehir | 1281 | ilhanli | Selçuklu/Hârizmşah | aday-listesi | kaynak doğrulanmadı |
| 441 | Serez | 41.089, 23.545 | sehir | 1281 | bizans | Bizans / Latin / Bulgar | aday-listesi | TDV: serez (önbellek denetim/GLM1-TDV-ONBELLEK/serez.txt; gövdede 1000-1280 yılı 5 kez) |
| 442 | Sicilmâse (Tâfilelt) | 31.281, -4.283 | sehir | 1281 | merini | Mağrâve → Murâbıt → Muvahhid | aday-listesi | TDV: sicilmase (önbellek denetim/DEVLET-500-1000-tdv-onbellek/sicilmase.txt; gövdede 1000-1280 yılı 10 kez) |
| 443 | Siena | 43.319, 11.331 | sehir | 1281 | siena | Siena Komünü | aday-listesi | kaynak doğrulanmadı |
| 444 | Silistre | 44.117, 27.26 | kale | 1281 | bulgaristan | Bizans → II. Bulgar | aday-listesi | TDV: silistre (önbellek denetim/GLM1-TDV-ONBELLEK/silistre.txt; gövdede 1000-1280 yılı 20 kez) |
| 445 | Sincar | 36.3222, 41.8689 | sehir | 1281 | ilhanli | Zengî Sincar kolu 1171-1220 → Eyyûbî | aday-listesi | kaynak doğrulanmadı |
| 446 | Sirakuza | 37.075, 15.287 | liman | 1281 | napoli | Sicilya Emirliği → Norman 1086 | aday-listesi | kaynak doğrulanmadı |
| 447 | Smolensk | 54.783, 32.045 | sehir | 1281 | litvanya-buyuk-dukalik | Smolensk Knezliği | aday-listesi | kaynak doğrulanmadı |
| 448 | Sofala | -20.1667, 34.75 | liman | 1281 | svahili-sehirleri | Kilva'ya bağlı altın limanı | aday-listesi | kaynak doğrulanmadı |
| 449 | Sofya | 42.698, 23.322 | sehir | 1281 | bulgaristan | Bizans 1018 → II. Bulgar | aday-listesi | TDV: sofya (önbellek denetim/GLM1-TDV-ONBELLEK/sofya.txt; gövdede 1000-1280 yılı 6 kez) |
| 450 | Split (Spalato) | 43.511, 16.439 | liman | 1281 | macaristan | Hırvat → Macar 1102 | aday-listesi | kaynak doğrulanmadı |
| 451 | Srinagar (Keşmir) | 34.084, 74.797 | sehir | 1281 | kesmir | Keşmir Krallığı (Lohara) | aday-listesi | TDV: kesmir (önbellek denetim/GLM1-TDV-ONBELLEK/kesmir.txt; gövdede 1000-1280 yılı 10 kez) |
| 452 | Stettin (Szczecin) | 53.428, 14.553 | liman | 1281 | almanya | Pomeranya | aday-listesi | kaynak doğrulanmadı |
| 453 | Strazburg | 48.573, 7.752 | sehir | 1281 | almanya | Kutsal Roma | aday-listesi | kaynak doğrulanmadı |
| 454 | Sudak (Suğdak) | 44.8494, 34.9747 | liman | 1281 | ceneviz | Bizans/Kıpçak/Selçuklu 1222/Moğol | aday-listesi | kaynak doğrulanmadı |
| 455 | Suhâr | 24.3472, 56.7092 | liman | 1281 | nebhani | Umman (Büveyhî/Selçuklu nüfuzu) | aday-listesi | kaynak doğrulanmadı |
| 456 | Suzdal | 56.419, 40.449 | sehir | 1281 | altinorda | Rostov-Suzdal | aday-listesi | kaynak doğrulanmadı |
| 457 | Sâmerrâ | 34.1983, 43.8742 | sehir | 1281 | ilhanli | Abbâsî | aday-listesi | TDV: samerra (önbellek denetim/GLM1-TDV-ONBELLEK/samerra.txt; gövdede 1000-1280 yılı 3 kez) |
| 458 | Sârî | 36.5633, 53.0601 | sehir | 1281 | ilhanli | Bâvendî | aday-listesi | kaynak doğrulanmadı |
| 459 | Sâve | 35.0213, 50.3566 | sehir | 1281 | ilhanli | Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 460 | Sûr (Tyre) — Lübnan | 33.2704, 35.2038 | liman | 1281 | memluk | Fâtımî → Kudüs Kr. 1124-1291 | aday-listesi | kaynak doğrulanmadı |
| 461 | Sığnak (Sunak Kurgan) | 44.05, 67.05 | sehir | 1281 | altinorda | Kıpçak/Karahitay → Moğol | aday-listesi | kaynak doğrulanmadı |
| 462 | Taiz | 13.579, 44.022 | sehir | 1281 | yemen | Eyyûbî → Resûlî | aday-listesi | TDV: taiz (önbellek denetim/GLM1-TDV-ONBELLEK/taiz.txt; gövdede 1000-1280 yılı 11 kez) |
| 463 | Tallinn (Reval) | 59.437, 24.754 | liman | 1281 | almanya | Danimarka 1219 | aday-listesi | kaynak doğrulanmadı |
| 464 | Taman | 45.2029, 36.7172 | kale | 1281 | ceneviz | Kiev Rusu Tmutarakan Knezliği | aday-listesi | kaynak doğrulanmadı |
| 465 | Tanca | 35.777, -5.804 | liman | 1281 | merini | Murâbıt/Muvahhid | aday-listesi | TDV: tanca (önbellek denetim/GLM1-TDV-ONBELLEK/tanca.txt; gövdede 1000-1280 yılı 4 kez) |
| 466 | Taranto | 40.472, 17.243 | liman | 1281 | napoli | Bizans → Norman | aday-listesi | kaynak doğrulanmadı |
| 467 | Taraz (Evliya-Ata) | 42.9, 71.367 | sehir | 1281 | cagatay | Karahanlı | aday-listesi | kaynak doğrulanmadı |
| 468 | Tartu (Dorpat) | 58.378, 26.729 | sehir | 1281 | almanya | Dorpat Piskoposluğu 1224 | aday-listesi | kaynak doğrulanmadı |
| 469 | Tatta (Thatta) | 24.747, 67.924 | sehir | 1281 | sind | Sumra/Sind | aday-listesi | kaynak doğrulanmadı |
| 470 | Tebbes | 33.6, 56.9 | bolge | 1281 | ilhanli | Nizârî Kuhistan | aday-listesi | kaynak doğrulanmadı |
| 471 | Termez | 37.224, 67.278 | sehir | 1281 | cagatay | Gazneli/Selçuklu/Karahanlı | aday-listesi | kaynak doğrulanmadı |
| 472 | Thaton | 16.92, 97.37 | sehir | 1281 | pagan | Mon → Pagan 1057 | aday-listesi | kaynak doğrulanmadı |
| 473 | Tokat | 40.314, 36.554 | sehir | 1281 | ilhanli | Danişmendli → Anadolu Selçuklu | aday-listesi | TDV: tokat (önbellek denetim/GLM1-TDV-ONBELLEK/tokat.txt; gövdede 1000-1280 yılı 17 kez) |
| 474 | Torino | 45.07, 7.687 | sehir | 1281 | sardinya | Savoya/Torino | aday-listesi | kaynak doğrulanmadı |
| 475 | Tortosa | 40.812, 0.521 | sehir | 1281 | aragon | Tavâif → Barselona 1148 | aday-listesi | kaynak doğrulanmadı |
| 476 | Torun (Toruń) | 53.0103, 18.6047 | sehir | 1281 | almanya | Töton 1233 | aday-listesi | kaynak doğrulanmadı |
| 477 | Toulouse | 43.604, 1.444 | sehir | 1281 | fransa | Toulouse Kontluğu → Fransa 1271 | aday-listesi | kaynak doğrulanmadı |
| 478 | Tours | 47.394, 0.685 | sehir | 1281 | fransa | Blois/Anjou | aday-listesi | kaynak doğrulanmadı |
| 479 | Trablus | 32.897, 13.191 | liman | 1281 | hafsi | Zîrî/Benî Hazrûn → Normandiya 1146-58 → Muvahhid/Hafsî | aday-listesi | TDV: trablusgarp (önbellek denetim/GLM1-TDV-ONBELLEK/trablusgarp.txt; gövdede 1000-1280 yılı 6 kez) |
| 480 | Trento | 46.067, 11.121 | sehir | 1281 | almanya | Trento Prens-Piskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 481 | Trier | 49.75, 6.637 | sehir | 1281 | almanya | Trier Başpiskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 482 | Trieste | 45.65, 13.77 | liman | 1281 | almanya | Trieste Piskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 483 | Trondheim | 63.431, 10.395 | liman | 1281 | norvec-kralligi | Norveç | aday-listesi | kaynak doğrulanmadı |
| 484 | Troyes | 48.297, 4.074 | sehir | 1281 | fransa | Champagne Kontluğu | aday-listesi | kaynak doğrulanmadı |
| 485 | Turfan | 42.951, 89.19 | sehir | 1281 | cagatay | Koço Uygur başkenti 911-1209 → Moğol tâbi | aday-listesi | kaynak doğrulanmadı |
| 486 | Tver | 56.859, 35.912 | sehir | 1281 | tver | Tver Knezliği 1246 | aday-listesi | kaynak doğrulanmadı |
| 487 | Tâka (Zufâr) | 17.057, 54.404 | liman | 1281 | nebhani | Zafâr melikleri | aday-listesi | kaynak doğrulanmadı |
| 488 | Uccayn (Ujjain) | 23.179, 75.785 | sehir | 1281 | racput | Paramâra | aday-listesi | kaynak doğrulanmadı |
| 489 | Uluborlu | 38.086, 30.457 | sehir | 1281 | selcuklu | Bizans → Selçuklu | aday-listesi | kaynak doğrulanmadı |
| 490 | Uppsala | 59.858, 17.639 | sehir | 1281 | isvec-birlik-oncesi | İsveç | aday-listesi | kaynak doğrulanmadı |
| 491 | Urfa | 37.159, 38.796 | sehir | 1281 | memluk | Bizans → Urfa Kontluğu 1098-1144 → Zengî → Eyyûbî | aday-listesi | kaynak doğrulanmadı |
| 492 | Ustrumca (Strumica) | 41.437, 22.643 | sehir | 1281 | sirbistan | Bizans/Bulgar | aday-listesi | kaynak doğrulanmadı |
| 493 | Utrecht | 52.091, 5.121 | sehir | 1281 | almanya | Utrecht Piskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 494 | Valata (Oualata) | 17.3, -7.033 | sehir | 1281 | mali-imparatorlugu | Gana/Susu/Mali ticaret durağı | aday-listesi | kaynak doğrulanmadı |
| 495 | Valensiya | 39.47, -0.377 | liman | 1281 | aragon | Tavâif/El Cid → Murâbıt/Muvahhid → Aragon 1238 | aday-listesi | TDV: belensiye (önbellek denetim/GLM1-TDV-ONBELLEK/belensiye.txt; gövdede 1000-1280 yılı 14 kez) |
| 496 | Valladolid | 41.652, -4.724 | sehir | 1281 | kastilya | Kastilya | aday-listesi | kaynak doğrulanmadı |
| 497 | Varangal (Warangal) | 17.978, 79.594 | kale | 1281 | kakatiya | Kâkatiya başkenti | aday-listesi | kaynak doğrulanmadı |
| 498 | Vargla (Ouargla) | 31.949, 5.325 | sehir | 1281 | zeyyani | İbâdî/Hammâdî | aday-listesi | kaynak doğrulanmadı |
| 499 | Varna | 43.214, 27.915 | liman | 1281 | bulgaristan | Bizans → II. Bulgar | aday-listesi | TDV: varna (önbellek denetim/GLM1-TDV-ONBELLEK/varna.txt; gövdede 1000-1280 yılı 15 kez) |
| 500 | Verona | 45.438, 10.992 | sehir | 1281 | __BOSLUK__ | Verona Komünü | aday-listesi | kaynak doğrulanmadı |
| 501 | Vidin | 43.992, 22.873 | kale | 1281 | bulgaristan | Bizans → II. Bulgar | aday-listesi | TDV: vidin (önbellek denetim/GLM1-TDV-ONBELLEK/vidin.txt; gövdede 1000-1280 yılı 16 kez) |
| 502 | Vijaya (Quy Nhơn) | 13.9, 109.1 | kale | 1281 | campa | Çampa başkenti | aday-listesi | kaynak doğrulanmadı |
| 503 | Visby (Gotland) | 57.635, 18.294 | liman | 1281 | isvec-birlik-oncesi | Gotland / Hansa | aday-listesi | kaynak doğrulanmadı |
| 504 | Vitebsk | 55.191, 30.206 | sehir | 1281 | litvanya-buyuk-dukalik | Polotsk | aday-listesi | kaynak doğrulanmadı |
| 505 | Viyana | 48.208, 16.373 | sehir | 1281 | avusturya | Babenberg Avusturya → Bohemya 1251 → Habsburg 1276 | aday-listesi | TDV: viyana (önbellek denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/viyana.txt; gövdede 1000-1280 yılı 7 kez) |
| 506 | Volodymyr-Volynskyi (Włodzimierz) | 50.848, 24.3226 | sehir | 1281 | litvanya-buyuk-dukalik | Volhinya Knezliği | aday-listesi | kaynak doğrulanmadı |
| 507 | Würzburg | 49.791, 9.953 | sehir | 1281 | almanya | Würzburg Piskoposluğu | aday-listesi | kaynak doğrulanmadı |
| 508 | Yanya | 39.665, 20.852 | sehir | 1281 | bizans | Bizans → Epir Despotluğu | aday-listesi | TDV: yanya (önbellek denetim/GLM1-TDV-ONBELLEK/yanya.txt; gövdede 1000-1280 yılı 15 kez) |
| 509 | Yarkent (Şaçe) | 38.416, 77.243 | sehir | 1281 | cagatay | Karahanlı/Karahitay | aday-listesi | kaynak doğrulanmadı |
| 510 | Yaroslavl | 57.626, 39.894 | sehir | 1281 | altinorda | Rostov/Yaroslavl Knezliği | aday-listesi | kaynak doğrulanmadı |
| 511 | Yenipazar (Novi Pazar) | 43.14, 20.517 | sehir | 1281 | sirbistan | Sırp Raşka merkezi | aday-listesi | kaynak doğrulanmadı |
| 512 | Yenişehir (Larissa) | 39.639, 22.418 | sehir | 1281 | bizans | Bizans / Epir / Tesalya | aday-listesi | TDV: yenisehir (önbellek denetim/GLM1-TDV-ONBELLEK/yenisehir.txt; gövdede 1000-1280 yılı 3 kez) |
| 513 | York | 53.959, -1.081 | sehir | 1281 | ingiltere | İngiltere | aday-listesi | kaynak doğrulanmadı |
| 514 | Yumurtalık | 36.7721, 35.787 | liman | 1281 | memluk | Kilikya Ermeni limanı | aday-listesi | kaynak doğrulanmadı |
| 515 | Zadar (Zara) | 44.124, 15.232 | liman | 1281 | venedik | Hırvat/Macar ↔ Venedik (1202) | aday-listesi | kaynak doğrulanmadı |
| 516 | Zagreb | 45.815, 15.982 | sehir | 1281 | macaristan | Macar (piskoposluk 1094) | aday-listesi | kaynak doğrulanmadı |
| 517 | Zanzibar (Zengibar) | -6.1659, 39.1917 | sehir | 1281 | svahili-sehirleri | Svahili | aday-listesi | TDV: zengibar (önbellek denetim/GLM1-TDV-ONBELLEK/zengibar.txt; gövdede 1000-1280 yılı 5 kez) |
| 518 | Zaragoza | 41.649, -0.888 | sehir | 1281 | aragon | Hûdî → Aragon 1118 | aday-listesi | TDV: sarakusta (önbellek denetim/GLM1-TDV-ONBELLEK/sarakusta.txt; gövdede 1000-1280 yılı 10 kez) |
| 519 | Zebîd | 14.195, 43.317 | sehir | 1281 | resuli | Necâhî → Benî Mehdî → Eyyûbî → Resûlî | aday-listesi | TDV: zebid (önbellek denetim/GLM1-TDV-ONBELLEK/zebid.txt; gövdede 1000-1280 yılı 14 kez) |
| 520 | Zeytun (Quanzhou) | 24.876, 118.6653 | liman | 1281 | yuan-hanedani | Song ana limanı | aday-listesi | kaynak doğrulanmadı |
| 521 | Zürih | 47.377, 8.541 | sehir | 1281 | almanya | Kutsal Roma | aday-listesi | kaynak doğrulanmadı |
| 522 | Âmül | 36.4697, 52.3508 | sehir | 1281 | ilhanli | Bâvendî/Taberistan | aday-listesi | kaynak doğrulanmadı |
| 523 | Âne | 34.4681, 41.9364 | sehir | 1281 | ilhanli | Ukaylî/Abbâsî | aday-listesi | TDV: ane (önbellek denetim/NOKTA-ORTADOGU-0077-tdv-onbellek/ane.html; gövdede 1000-1280 yılı 6 kez) |
| 524 | Çengdu (Chengdu) | 30.572, 104.066 | sehir | 1281 | yuan-hanedani | Song | aday-listesi | kaynak doğrulanmadı |
| 525 | Çernigov | 51.4982, 31.2893 | sehir | 1281 | altinorda | Çernigov Knezliği | aday-listesi | kaynak doğrulanmadı |
| 526 | Ünye | 41.128, 37.283 | liman | 1281 | trabzon-rum | Bizans/Trabzon | aday-listesi | kaynak doğrulanmadı |
| 527 | Üsküp | 41.997, 21.428 | sehir | 1281 | sirbistan | Bizans / Bulgar / Sırp 1282 | aday-listesi | TDV: uskup (önbellek denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/uskup.txt; gövdede 1000-1280 yılı 5 kez) |
| 528 | İmâdiye (Amêdî) | 37.0921, 43.4877 | sehir | 1281 | ilhanli | Zengî kuruluşu ~1142 | aday-listesi | kaynak doğrulanmadı |
| 529 | İnkirman (Kalamita) | 44.6072, 33.6061 | kale | 1281 | bizans | Bizans Kherson → Trabzon/Moğol | aday-listesi | kaynak doğrulanmadı |
| 530 | İstefe (Tebai) | 38.322, 23.319 | sehir | 1281 | atinadukaligi | Bizans → Atina Dk. | aday-listesi | TDV: istefe (önbellek denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek/istefe.txt; gövdede 1000-1280 yılı 15 kez) |
| 531 | İstolni Belgrad | 47.19, 18.411 | kale | 1281 | macaristan | Macar Krallığı taç giyme şehri | aday-listesi | TDV: istolni-belgrad (önbellek denetim/BALKAN-MACAR-0081-tdv-onbellek/istolni-belgrad.html; gövdede 1000-1280 yılı 18 kez) |
| 532 | İşkodra | 42.069, 19.513 | kale | 1281 | venedik | Duklja / Sırp | aday-listesi | TDV: iskodra (önbellek denetim/GLM1-TDV-ONBELLEK/iskodra.txt; gövdede 1000-1280 yılı 4 kez) |
| 533 | Şamahı | 40.632, 48.641 | sehir | 1281 | ilhanli | Şirvanşah | aday-listesi | kaynak doğrulanmadı |
| 534 | Şehrisebz (Kiş) | 39.058, 66.833 | sehir | 1281 | cagatay | Karahanlı | aday-listesi | kaynak doğrulanmadı |

## 6. Yöntem, yeniden kullanılan / yeniden yapılan

- **Yeniden koşturuldu (bu oturumda, 212679f19 üstünde):** `olc.py` (dilim tablosu → `rows.json`), `olc2.py` (1281 öncesi/1924 sonrası tüm `f/kur/bit`), `dilim.py` (tanım varyantları), `dev.py` (künye kesişimi → 264), `esle.py` (653 aday ↔ 4300 nokta), `kur.py` (A/B/OL kovaları), `rapor1000.py` (bu dosya). Hepsi exit 0, çıktılar boru ile alındı.
- **Yeniden kullanıldı (ilk ajanın ürünü, tekrar üretilmedi):** 653 adlık aday listesi (`aday.py`, `aday2.py`) ve elle yazılmış hükümdar sütunu; `tdv/*.html` — 33 TDV sayfası (13'ü makale, 20'si "Arama" sonuç sayfası; arama sayfaları kaynak SAYILMADI); `kur.py` içindeki 4 elle düzeltme (Cürcân, Eski Ryazan → ÖLÇÜLEMEDİ; Nan Madol → YOK; Merv → VAR).
- **Repo kanıt dosyaları (salt okundu):** `denetim/ONCE1281-YERLESIM-0930.json`, `denetim/YERLESIM-1281-ONCE-ONERI.json`, `denetim/*onbellek/` TDV önbellekleri.
- **Sınırlar:** hükümdar sütunu kaynaklı değilse genel bilgidir ("kaynak doğrulanmadı"); koordinatlar aday listesinde yaklaşık; silvan/sis/dinever TDV sayfaları çekildi ama gövde kısa/kesik, dönem cümlesi yok. Hiçbir satır hüküm değildir.
- Ekler: `LAB-EKSIK-SEHIR-1000-1280-1009-A.csv` (4147 satır, ≥1281 başlayan tüm noktalar + işaret), `LAB-EKSIK-SEHIR-1000-1280-1009-B.csv` (157 satır: B-YOK + ÖLÇÜLEMEDİ).
