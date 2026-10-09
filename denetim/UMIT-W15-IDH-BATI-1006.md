# UMIT-W15-IDH-BATI-1006 — I. Dünya Harbi işgalleri: Belçika · K. Fransa · Sırbistan · Romanya · Karadağ

Görev: UMIT İRTİBAT · İşçi: UMIT-W15-IDH-BATI-1006 · YALNIZ ÖLÇÜM, veri yazılmadı ·
worktree `C:\atlas-w15` = origin/main `3e4b3a98` · motor tuzu / `data/` dokunulmadı.

## 0. ÖNGÖRÜ (ölçümden ÖNCE mühürlendi, 2026-10-05 21:58)

- Toplam kayıt (beş bölge, 1914-1918'de var olan): **~80-120**. Dağılım tahmini: Belçika
  10-20 · K. Fransa işgal kuşağı 10-20 · Sırbistan (1913 sınırı: Kosova + Vardar
  Makedonyası dahil) 25-40 · Romanya işgal edilen kısım (Eflak + Dobruca) 20-30 ·
  Karadağ 5-10.
- Hiçbirinde 1914-18 için `isg:` ya da işgalci `s:` yok (W5 §1.3 örneklemiyle tutarlı).
- Ölçek büyük ⇒ şehir başına kaynaklı gün çoğunlukta BULUNAMAYACAK; bölge satırı + temsilî
  şehirler (Brüksel, Liège, Anvers, Lille, Belgrad, Niş, Üsküp, Bükreş, Köstence, Cetinje).
- Günler (bilinen genel tarih, kaynakla DOĞRULANACAK): Liège 1914-08-16 (son kale) ·
  Brüksel 1914-08-20 · Anvers 1914-10-10 · Lille 1914-10-13 · Belgrad 1915-10-09 ·
  Niş 1915-11-05 (Bulgar) · Üsküp 1915-10-22 (Bulgar) · Cetinje 1916-01-13 · Bükreş
  1916-12-06 · Köstence 1916-10-22. Bitişler: Belçika/Fransa 1918-11 (ateşkes 11 Kasım,
  tahliye sonrası günler şehre göre değişir) · Belgrad 1918-11-01 · Bükreş 1918-12-01
  (kral dönüşü) / Alman çekilişi 1918-11 sonu.
- Ypres, Nieuport, Verdun gibi cephe hattı şehirleri TAM işgal görmedi — `işgal yok` satırı.
- TDV bu bölgeler için zayıf olacak (Belçika/Fransa hiç); Sırbistan/Karadağ/Romanya TDV
  maddeleri işgal gününü vermeyecek ⇒ akademik kaynak gerekecek, birçoğu `bulunamadı`.

## 1. SAYIM — veride ne var (İŞ 1)

Yöntem: `girdi.yukle()` (worktree, `GIRDI_DOSYALARI` 93 dosya, 4299 nokta), sekiz kesit günü
(1914-07-28 … 1918-11-10) `s:` sahibi ∈ {belcika, fransa-cumhuriyet, sirbistan-kralligi,
romanya-kralligi, karadag}; Fransa için K./KD. ön süzgeç (lat ≥ 48,6 · lon ≥ 1,8); ayrıca
üç bölge kutusunda başka kimlikli kayıt tarandı. Betikler: scratchpad `w15.py`, `w15b.py`.

| Bölge | Avrupa kaydı | 1914-18 işgal gören | işgal görmeyen | `isg:` 1914-18 |
|---|---|---|---|---|
| Belçika | 13 | 12 | 1 (Ypres) | 0 |
| K. Fransa | 7 | 1 uzun (Lille) + 3 kısa (Arras, Amiens, Reims · Eylül 1914) | 3 (Calais, Paris, Nancy) | 0 |
| Sırbistan (1913 sınırı) | 21 | 20 + ⚠️ Ustrumca (bkz. §4) | 0 (Manastır 1916-11-19'da İtilaf'a döner) | 0 |
| Karadağ | 2 | 2 | 0 | 0 |
| Romanya | 22 | 18 (Eflak 13 + Dobruca 5) | 4 (Yaş, Roman, Bârlad, Galați) | 0 |
| **Toplam** | **65** | **56** (+ Ustrumca) | **8** | **0** |

Kapsam dışı bırakılanlar (`s:` hedef kimlikte ama işgal sorusu değil): Belçika Kongosu +
Ruanda/Burundi 49 kayıt (Afrika) · Besarabya 9 kayıt (`rusya`→`romanya-kralligi` 1918 birleşme)
· Lugos, Orsova (`macaristan-habsburg`→`romanya-kralligi`). Karadağ'ın 1913 kazançları (İpek,
Yakova, Plevlje, Berane, Bijelo Polje) veride Karadağ kaydı olarak YOK — yalnız Cetinje + Podgorica.
**Beş bölgenin hiçbir kaydında 1914-18 için ne işgalci `s:` ne `isg:` var** (W5 §1.3 ✓).

## 2. TABLO (İŞ 2) — ortak biçim

Sütunlar W14 ile BİREBİR; `egemenlik_devri` istendiği gibi AYRI sütun, en sona eklendi (ilk 10
sütun ortak biçimle aynı sırada). Tarihler Gregoryen; Jülyen olan kaynak `not`ta çevrildi.
Hassasiyet: gün / ay / yıl / bulunamadı / aranmadı (bulunamadı = arandı, yok; aranmadı = bakılmadı).
Kaynak URL'leri §5'te. TDV maddeleri (Belgrad, Niş, Üsküp, Priştine, Prizren, Karadağ, Sırbistan,
İştip, Köprülü, Ohri, Debre, Semendire, Böğürdelen, Şehirköy, Kosova, Ustrumca, Manastır
(Makedonya), Dobruca, Bükreş, Romanya, Köstence, Silistre, İbrâil, Yergöğü, Babadağı, İsakça,
Hacıoğlupazarcığı) tek tek açıldı; **TDV yalnız Üsküp kurtuluşunda gün verdi** (Jülyen).

### 2.1 Belçika

| kayıt | dosya:satır | işgalci | f | f_hassasiyet | t | t_hassasiyet | kaynak (kısa) | alıntı | not | egemenlik_devri |
|---|---|---|---|---|---|---|---|---|---|---|
| BÖLGE Belçika | — | Almanya | 1914-08 | ay | 1918-11-11 | gün (ateşkes — şehir günü DEĞİL) | 1914-1918-online "Generalgouvernement Belgien" (Roolf), "Belgium" (De Schaepdrijver), "Occupation… Belgium and France" (Wegner) | "only the area around the Yser River remained free" | GG: Liège, Lüksemburg, Namur, doğu Hainaut, Brabant, Anvers, Limburg; Doğu/Batı Flandre Etappengebiet, kıyı Marinegebiet. GG valisi von der Goltz 1914-08-23 (Roolf) | yok |
| Anvers (Antwerpen) | yerlesimler_avrupa.js:353 | Almanya | 1914-10-09 | gün | bulunamadı | bulunamadı | Britannica "Siege of Antwerp (1914)" | "Two days later, German troops entered the city, ending the siege." | ⚠️ ÇELİŞKİ: teslim 10 Ekim (Britannica, Marne böl.) · De Schaepdrijver "fell on 6 October". Bölge t: ateşkes | yok |
| Brüj (Brugge) | yerlesimler_avrupa.js:350 | Almanya (Marinegebiet) | 1914-10-14 | gün | 1918-10-19 | gün | f: De Schaepdrijver, Cahiers Bruxellois 2014/1E · t: VRT 19-10-2018 | "Bruges was occupied by reserve troops from the German Fourth Army" | f yalnız ARAMA ÖZETİNDEN (cairn 403) — tam metinde doğrulanmalı. t kaynağı kamu yayıncısı (ara bölge, akademik değil) | yok |
| Gent | yerlesimler_avrupa.js:351 | Almanya (Etappengebiet) | 1914-10-12 | gün | bulunamadı | bulunamadı | STAM Gent şehir müzesi | "Op 12 oktober 1914 arriveerden de Duitse troepen in de stad" | t üst sınırı: kral 13 Kasım'da Gent'te (De Schaepdrijver) — kral girişi ≠ kurtuluş | yok |
| Ypres | yerlesimler_avrupa.js:352 | — işgal yok | — | — | — | — | Britannica "Ypres"; 1914-1918-online "Ypres, Battles of" | "the principal town within an important salient… in the British lines" | İtilaf cephe şehri. 7-8 Ekim 1914 bir günlük Alman geçişi yalnız yerel rehber dergisinde (alınmadı) | yok |
| Brüksel | yerlesimler_avrupa.js:354 | Almanya (GG merkezi) | 1914-08-20 | gün | 1918-11-16 | gün | 1914-1918-online "Brussels" (Kesteloot) | "On 20 August 1914, German troops crossed the city" | t = son Alman askerinin çıkışı; resmî kurtuluş 17 Kasım (Devlet Arşivi AGR); kral girişi 22 Kasım | yok |
| Liège | yerlesimler_avrupa.js:360 | Almanya | 1914-08-07 | gün | bulunamadı | bulunamadı | Province de Liège "Liège 14-18" | "5.000 hommes prennent possession de Liège" | Son kaleler 16 Ağustos (Britannica) — şehir ≠ kale. Britannica kasabayı 5-6 Ağustos gecesi veriyor (küçük çelişki) | yok |
| Tournai | yerlesimler_avrupa.js:358 | Almanya | 1914-08 | ay | 1918-11-08 | gün | f: Tournai Askerî Tarih Müz. · t: AGR "1918" sergi kataloğu | "Le 8 novembre 1918, les premiers soldats anglais entrent dans la ville" | f alıntısı 24 Ağustos ÇATIŞMASINI tarihliyor, işgali değil ⇒ ay. Almanlar 9 Kasım'da ayrılır (aynı katalog) | yok |
| Namur | yerlesimler_avrupa.js:355 | Almanya | 1914-08 | ay | bulunamadı | bulunamadı | Britannica WWI; Simoens (1914-1918-online) | "on August 23 news of the fall of Namur" | Alıntı HABERİ tarihliyor ⇒ ay. Son kale 25 Ağustos | yok |
| Mons | yerlesimler_avrupa.js:356 | Almanya | 1914-08 | ay | 1918-11-11 | gün | t: Canadian War Museum | "The Canadians captured the Belgian city of Mons on the last day of the war, 11 November 1918." | f günü bulunamadı (Britannica yalnız İngiliz çekilişini tarihliyor). Burada kurtuluş = ateşkes günü | yok |
| Bastogne | yerlesimler_a78_avrupa.js:144 | Almanya | bulunamadı | bulunamadı | bulunamadı | bulunamadı | — | — | Bölge satırında kal (GG Lüksemburg ili) | yok |
| Neufchâteau (Belçika) | yerlesimler_a78_avrupa.js:147 | Almanya | bulunamadı | bulunamadı | bulunamadı | bulunamadı | — | — | 22 Ağustos muharebesi yalnız akademik olmayan sitede; muharebe ≠ işgal | yok |
| Arlon | yerlesimler_a78_avrupa.js:141 | Almanya | bulunamadı | bulunamadı | 1918-11 | ay | AGR "1918" kataloğu | "Arlon, novembre 1918" (fotoğraf altyazısı) | Almanlar Kasım 1918'de hâlâ Arlon'da; çıkış günü yok | yok |
| Virton | yerlesimler_a78_avrupa.js:150 | Almanya | bulunamadı | bulunamadı | bulunamadı | bulunamadı | — | — | Bölge satırında kal | yok |

### 2.2 Kuzey Fransa

| kayıt | dosya:satır | işgalci | f | f_hassasiyet | t | t_hassasiyet | kaynak (kısa) | alıntı | not | egemenlik_devri |
|---|---|---|---|---|---|---|---|---|---|---|
| BÖLGE Fransa işgal kuşağı | — | Almanya | 1914-08 | ay | 1918-11-11 | gün (ateşkes) | 1914-1918-online "France" (Beaupré); Wegner | "the population in the ten departments that had been invaded" | Kasım 1914: Fransa topraklarının %3,7'si (Wegner). 10 département'ın adlı listesi bulunamadı | yok |
| Lille | yerlesimler_avrupa.js:149 | Almanya (Etappengebiet) | 1914-10-13 | gün | 1918-10-17 | gün | Univ. de Lille IRHiS; 1914-1918-online "Delesalle" (Connolly) | "le 13 octobre 1914, les troupes de l'Empereur défilent dans la ville" | Kuşatma 10-12 Ekim | yok |
| Arras | yerlesimler_avrupa.js:147 | Almanya — KISA | 1914-09-06 | gün | 1914-09-09 | gün | Archives du Pas-de-Calais, valinin 9.9.1914 raporu | "Dimanche, 6 courant, à 14 h ½, un régiment de la Landwehr entrait en ville" | t = aynı raporda "ce matin" ayrılış. 31 Ağustos devriyesi yalnız özette | yok |
| Amiens | yerlesimler_avrupa.js:145 | Almanya — KISA | 1914-08-31 | gün | 1914-09-11 | gün | Ph. Nivet, Revue du Nord 2014 n°404-405 | "L'occupation d'Amiens (31 août-11 septembre 1914)" (makale başlığı) | Tam metin 403; günler başlıktan. 2-8 Eylül şehirde ne Alman ne Fransız (doğrulanmadı) | yok |
| Reims | yerlesimler_avrupa.js:154 | Almanya — KISA | 1914-09-04 | gün | 1914-09-12 | gün | Y. Harlaut, doktora tezi, Univ. Reims 2006 | "les Allemands présents à Reims du 4 au 12 septembre" | Fransız girişi 13 Eylül şafak | yok |
| Calais | yerlesimler_avrupa.js:143 | — işgal yok | — | — | — | — | 1914-1918-online "Ypres, Battles of" | "push forward to the Channel ports of Dunkirk and Calais" | Hedefti, alınamadı | yok |
| Paris | yerlesimler.js:1039 | — işgal yok | — | — | — | — | Britannica "First Battle of the Marne" | "saved the capital city of Paris from capture" | | yok |
| Nancy | yerlesimler_avrupa.js:181 | — işgal yok | — | — | — | — | 1914-1918-online "France" (Beaupré) | "staved off the capturing of Nancy" | | yok |

### 2.3 Sırbistan — 1915 sonbaharı bölüşümü

| kayıt | dosya:satır | işgalci | f | f_hassasiyet | t | t_hassasiyet | kaynak (kısa) | alıntı | not | egemenlik_devri |
|---|---|---|---|---|---|---|---|---|---|---|
| BÖLGE A-M Militärgeneralgouvernement Serbien | — | Avusturya-Macaristan | 1916-01 | ay (idare kuruluşu) | 1918-11-01 | gün (Belgrad) | Ristović, 1914-1918-online "Occupation… SE Europe" | "took office in early January 1916" | Belgrad şehri + 12 il ("Serbia" md.). 1 Ocak 1916 yalnız Vikipedi'de. İl listesi yalnız Vikipedi'de ⇒ şehir→bölge ataması ÇIKARIM | yok |
| BÖLGE Bulgar Morava askerî müfettişliği | — | Bulgaristan | 1915 | yıl | 1918-10 | ay | Ristović | "Eastern Serbia with its command in Niš (Military Inspectorate of Morava)" | "six districts and the Pirot area"; kuruluş günü bulunamadı. Aralık 1915'ten demiryolu/maden Alman denetiminde | yok |
| BÖLGE Bulgar Makedonya askerî müfettişliği | — | Bulgaristan | 1915 | yıl | 1918-09/10 | ay | Ristović; Hall "Bulgaria" | "incorporated Macedonia directly into the state" | Merkez Üsküp; Güney Morava + Vardar Makedonyası | fiilî ilhak (Bulgar iç hukuku); uluslararası antlaşma yok |
| BÖLGE Kosova bölüşümü | — | A-M → Bulgaristan | 1916-04-01 | gün | — | — | Ristović | "On 1 April 1916 … evacuation of its troops, including from Prizren and Priština" | ⚠️ ÇELİŞKİ: "Serbia" md. TERSİNİ söyler ("leaving Kosovo to the Austro-Hungarians"). Hüküm koordinatörde | yok |
| Belgrad | yerlesimler.js:444 | A-M + Almanya | 1915-10 | ay | 1918-11-01 | gün | TDV Belgrad (yıl) · Ristović (t) | "Belgrade was liberated on 1 November" | 9 Ekim 1915 yalnız Vikipedi/popüler sitede ⇒ ay. Hall: Sırp ordusu 31 Ekim'de Belgrad'a ulaştı | yok |
| Böğürdelen (Šabac) | yerlesimler.js:2307 | A-M (bölge çıkarımı) | aranmadı | aranmadı | aranmadı | aranmadı | — | — | Bölge satırında kal; TDV'de BD1 yok | yok |
| Semendire | yerlesimler.js:443 | A-M (çıkarım) | aranmadı | aranmadı | aranmadı | aranmadı | — | — | TDV'de BD1 yok | yok |
| Kragujevac | yerlesimler.js:2292 | A-M (çıkarım) | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Yagodina (Jagodina) | yerlesimler_ek29.js:488 | A-M (çıkarım) | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Çaçak | yerlesimler.js:2293 | A-M (çıkarım) | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Alacahisar (Kruševac) | yerlesimler_serhat.js:152 | A-M (çıkarım) | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Yenipazar (Novi Pazar) | yerlesimler.js:1423 | A-M (çıkarım) | aranmadı | aranmadı | aranmadı | aranmadı | — | — | TDV `yenipazar` slug 302 | yok |
| Niş | yerlesimler.js:336 | Bulgaristan (Morava) | 1915-11-05 | gün (üst sınır: "by") | 1918-10 | ay | Hall "Bulgaria" · Ristović | "By 5 November, the Bulgarian First Army seized Niš" | t için üç makale üç gün: Hall 10 · Ristović 11 · "Warfare SE Europe" 12 Ekim ⇒ ay | yok |
| Şehirköy (Pirot) | yerlesimler_serhat.js:140 | Bulgaristan (Morava) | aranmadı | aranmadı | aranmadı | aranmadı | Ristović (bölge) | "six districts and the Pirot area" | | yok |
| Priştine | yerlesimler.js:442 | A-M, 1916-04-01'den Bulgaristan (Ristović'e göre) | 1915-11 | ay | bulunamadı | bulunamadı | DOAJ makale özeti · Ristović | — | Kral Petar 15-22 Kasım 1915 Priştine'de ⇒ düşüş sonra. 23 Kasım yalnız popüler kaynakta | yok |
| Prizren | yerlesimler_ek_bosluk.js:60 | A-M → Bulgaristan | 1915 | yıl | bulunamadı | bulunamadı | Ristović | "In February 1916 they set up a civil administration in Prizren" | Bulgar sivil idaresi Şubat 1916 | yok |
| Üsküp | yerlesimler.js:369 | Bulgaristan (Makedonya) | 1915-10-22 | gün | 1918-09-24 | gün | "Serbia" md. · Ristović · TDV Üsküp | "taking Skopje on 22 October" · "Serbian troops entered Skopje on 24 September" | TDV "11 Eylül 1918" = Jülyen (+13 = 24 Eylül) ✓. "Warfare" md.: Fransız süvarisi 29 Eylül | yok |
| İştip (Štip) | yerlesimler_ok107.js:409 | Bulgaristan | bulunamadı | bulunamadı | 1918-09-26 | gün | "Warfare SE Europe" · TDV İştip | "Serbian troops entered Veles and Štip on 26 September" | TDV'de gün yok | yok |
| Köprülü (Veles) | yerlesimler_ok107.js:396 | Bulgaristan | bulunamadı | bulunamadı | 1918-09-26 | gün | "Warfare SE Europe" | aynı alıntı | | yok |
| Debre (Dibra) | yerlesimler_ok104.js:175 | Bulgaristan (çıkarım) | aranmadı | aranmadı | aranmadı | aranmadı | — | — | TDV'de gün yok | yok |
| Ustrumca (Strumica) | yerlesimler_ok107.js:422 | — İŞGAL DEĞİL | — | — | — | — | TDV Ustrumca | "1913'ten 1919 yılına kadar Ustrumca kasabası ve bölgesi Bulgaristan Devleti'ne katıldı" | ⚠️ VERİ KUSURU — §4 | 1913 Bükreş → Bulgaristan; 1919 Neuilly → SHS (günler doğrulanmadı) |
| Doyran | yerlesimler_ok107.js:435 | Bulgaristan (çıkarım) | aranmadı | aranmadı | aranmadı | aranmadı | — | — | Doyran 1916-18 cephe hattıdır — şehir başına bakılmalı | yok |
| Gevgili (Gevgelija) | yerlesimler_ok107.js:448 | Bulgaristan (çıkarım) | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Ohri | yerlesimler.js:371 | Bulgaristan | 1915 | yıl | 1918 | yıl | TDV Ohri | "1915-1918 yıllarında Bulgaristan işgaline uğradı." | | yok |
| Manastır | yerlesimler.js:370 | Bulgaristan + Alman süvarisi | 1915 | yıl (üst sınır 1915-12-09) | 1916-11-19 | gün | TDV Manastır (Makedonya) · FRUS 1915 Supp. d122 · Chabanier, Rev. Hist. des Armées 1966 | "La Victoire de Monastir. 19 novembre 1916" (makale başlığı) | 1916-11-19 sonrası İtilaf elinde, cephe hattında. TDV `manastir` slug'ı YANLIŞ MADDE (tuzak ②) | yok |

### 2.4 Karadağ

| kayıt | dosya:satır | işgalci | f | f_hassasiyet | t | t_hassasiyet | kaynak (kısa) | alıntı | not | egemenlik_devri |
|---|---|---|---|---|---|---|---|---|---|---|
| BÖLGE Karadağ (A-M MGG Montenegro) | — | Avusturya-Macaristan | 1916-03-01 | gün (idare kuruluşu) | 1918-10/11 | ay | Ristović | "on 1 March, the Military General Government of Montenegro was established" | Teslim günü için 3 değer: 16 ("Warfare") · 17 (Hall, resmî) · 25 Ocak (Montenegro md., itirazlı) — işgal ≠ teslim | yok |
| Cetinje | yerlesimler.js:1219 | Avusturya-Macaristan | 1916-01-11 | gün | 1918-11-06 | gün | Hall "War in the Balkans" · "Montenegro" md. | "Cetinje fell on 11 January 1916" · "They finally left Cetinje on 6 November" | TDV `cetine` slug 302 | yok |
| Podgorica | yerlesimler.js:2306 | Avusturya-Macaristan | 1916-01-22 | gün | 1918-10/11 | ay | "Montenegro" md. · Ristović | "occupied Podgorica on 22 and 23 January" | Şehre özgü kurtuluş günü bulunamadı | yok |

### 2.5 Romanya — Bükreş 1916-12-06 (işgal) ≠ Buftea/Bükreş antlaşmaları (egemenlik)

| kayıt | dosya:satır | işgalci | f | f_hassasiyet | t | t_hassasiyet | kaynak (kısa) | alıntı | not | egemenlik_devri |
|---|---|---|---|---|---|---|---|---|---|---|
| BÖLGE Eflak + Bükreş (Militärverwaltung) | — | Almanya (OKM, Mackensen); küçük A-M payı | 1916-12 | ay | 1918-11 | ay | Heppner & Gräf, 1914-1918-online "Romania" | "officially started work at the end of December and continued until early November 1918" | Bükreş bölgesi yalnız Alman. Brăila-Buzău-R. Sărat 9. Ordu Etappengebiet | Eflak'ta toprak devri yok; 7.5.1918 Karpat geçitleri şeridi A-M'ye |
| BÖLGE Güney Dobruca (Kadrilater) | — | Bulgaristan (3. Ordu; Alman + Osmanlı birlikleriyle) | 1916-09 | ay | bulunamadı | bulunamadı | Ristović; Hall | "Bulgaria annexed the area of Southern Dobruja, which remained outside the OKM occupation system" | OKM dışında | Bulgar ilhakı → 7.5.1918 Bükreş Ant. teyit → 27.11.1919 Neuilly ile Romanya'ya |
| BÖLGE Kuzey Dobruca | — | Alman Etappenverwaltung (+ Bulgar 3. Ordu, Osmanlı birlikleri) | 1916-10 | ay | 1918-11 | ay | Ristović; Ciorbea, Annals AOSR 9/2 (2017) | "established in late October 1916 and was in operation until 7 May 1918" | Kuruluş emri 24 Ekim 1916 (Ciorbea). Tuna Deltası Romen elinde | 7.5.1918: güney şeridi Bulgaristan'a, kalan Merkezî Devletler kondominyumuna |
| BÖLGE Moldova | — | — işgal yok | — | — | — | — | Heppner & Gräf | "not occupied … the former principality of Moldavia west of the river Prut" | Hükümet ve saray Yaş'ta | yok |
| Bükreş | yerlesimler.js:449 | Almanya + A-M (Bulgar, Osmanlı birlikleri de girdi — ONCE) | 1916-12-06 | gün | 1918-11-12 | gün | Muzeul Bucureștiului | "On November 23rd/December 6th 1916, German-Austrian-Hungarian troops occupied Bucharest." | t = "evacuation of occupational forces comes to an end" (30 Ekim/12 Kasım). ⚠️ Heppner "9 December" der; Hall + ONCE 6 Aralık. Kral Ferdinand girişi 1918-12-01 (ayrı olay; mvu.ro, sayfa açılmadı) | yok — Buftea/Bükreş antlaşmaları Bükreş'in egemenliğini DEVRETMEDİ |
| Krayova (Craiova) | yerlesimler.js:2299 | Almanya | 1916-11-21 | gün | bulunamadı | bulunamadı | ONCE (MApN) takvimi | "Oraşul Craiova este ocupat de trupele germane (1916)" (21 noiembrie) | Romen çift tarih 8/21 Kasım ⇒ 21 Gregoryen. ONCE takvim türünü tutarlı beyan etmiyor | yok |
| Turnu Severin | yerlesimler.js:2302 | A-M/Almanya | aranmadı | aranmadı | aranmadı | aranmadı | — | — | Ristović: A-M tersaneyi devraldı. Bölge satırında kal | yok |
| Tırgu Jiu | yerlesimler.js:2300 | Almanya | aranmadı | aranmadı | aranmadı | aranmadı | — | — | Gün yalnız Vikipedi'de (alınmadı) | yok |
| Rimnik (Râmnicu Vâlcea) | yerlesimler.js:2301 | Almanya | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Slatina | yerlesimler.js:2296 | Almanya | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Piteşti | yerlesimler.js:2295 | Almanya | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Kımpulung (Câmpulung) | yerlesimler.js:2303 | Almanya | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Tırgovişte | yerlesimler.js:2294 | Almanya | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Yergöğü (Giurgiu) | yerlesimler.js:2317 | bulunamadı | bulunamadı | bulunamadı | 1918-11-10 | gün (DOLAYLI) | ONCE | "Trupele franceze forţează Dunărea pe la Giurgiu" (10-11 noiembrie) | Fransız Tuna geçişi — Alman tahliyesinin bitişi DEĞİL | yok |
| Buzău | yerlesimler.js:2297 | Almanya | aranmadı | aranmadı | aranmadı | aranmadı | — | — | | yok |
| Rimnik-i Sârat | yerlesimler.js:2298 | Almanya/A-M | bulunamadı | bulunamadı | bulunamadı | bulunamadı | ONCE | "Se încheie Bătălia de la Râmnicu Sărat" (27 decembrie) | Muharebe bitişi ≠ şehrin düşüşü | yok |
| İbrail | yerlesimler.js:462 | Almanya | 1917-01 | ay | 1918-11-11 | gün | Bădără (ISJ Brăila); Muzeul Brăilei | "în ziua de 23 decembrie 1916 … au pătruns în oraș primele elemente ale armatei germane" | 23.12.1916 Jülyen varsayımı ⇒ 1917-01-05 — ÇIKARIM, kaynak takvimi beyan etmiyor; ONCE "9 ianuarie 1917" ⇒ ay. t: "trupele germane au părăsit Brăila" 11 noiembrie (kaynak zayıf: okul müfettişliği) | yok |
| Köstence | yerlesimler.js:1547 | Almanya (Bulgar idaresi 5.1.1917 Pless'e dek) | 1916-10-22 | gün | 1918-11 | ay | ONCE; Ciorbea | "Trupele germane ocupă municipiul Constanţa (1916)" (22 octombrie) | Ciorbea "9 octombrie 1916" = Jülyen ⇒ 22 Ekim ✓ tutarlı | Kuzey Dobruca satırı |
| Silistre | yerlesimler.js:363 | Bulgaristan (3. Ordu) | 1916-09-09 | gün | bulunamadı | bulunamadı | Bulgaristan Devlet Arşivleri Ajansı | "частите на 3-та армия без бой да освободят Силистра на 9 септември" | Çatışmasız. Turtucaya 6 Eylül. ⚠️ TDV Silistre 1916-18 Bulgar işgalini HİÇ anmıyor | Güney Dobruca satırı |
| Hacıoğlupazarcığı (Dobrich) | yerlesimler_ek29.js:469 | Bulgaristan ("Varna Kuvvetleri"; Alman + Osmanlı birlikleri — ONCE) | 1916-09-04 | gün | bulunamadı | bulunamadı | aba.government.bg | "Градът е освободен на 4.09.1916 г." | ⚠️ ONCE "8 septembrie" — takvim belirsiz | Güney Dobruca satırı |
| Babadağı (Babadag) | yerlesimler_ek29.js:461 | Bulgar/Alman/Osmanlı (Dobruca geneli) | 1916-12-18 | gün (ROMEN ÇEKİLİŞİ — işgalci girişi DEĞİL) | bulunamadı | bulunamadı | T. Giurgiu, Muzeul Național al Marinei | "părăsind orașul Babadag (5/18 decembrie)" | Kayda "Romen çekilişi" olarak yazılmalı | Kuzey Dobruca satırı |
| İshakçı (Isaccea) | yerlesimler_ek29.js:479 | Merkezî Devletler | bulunamadı | bulunamadı | bulunamadı | bulunamadı | Giurgiu (aynı yayın) | "bateriilor de la Isaccea" | 8 Ocak 1917 (Jülyen) düşman topçusu İsakça'da — dolaylı, gün çıkarılmadı | Kuzey Dobruca satırı |
| Yaş | yerlesimler.js:450 | — işgal yok | — | — | — | — | Heppner & Gräf | "government fled in 1916 to Jassy (Moldavia)" | | yok |
| Roman | yerlesimler.js:459 | — işgal yok | — | — | — | — | Heppner & Gräf (bölge) | "Moldavia, a region which remained free" | Şehre özgü aranmadı | yok |
| Birlad (Bârlad) | yerlesimler.js:460 | — işgal yok | — | — | — | — | Heppner & Gräf; Giurgiu | "Bârlad, 5 ianuarie 1917" (Romen Genel Karargâh bülteni başlığı) | | yok |
| Kalas (Galatz) | yerlesimler.js:461 | — işgal yok (cephe şehri) | — | — | — | — | Giurgiu (Ocak 1917 bültenleri) | "Galați: bombardament de artilerie toată ziua" | Siret-Tuna hattı, Romen garnizonu; bombalandı, alınmadı | yok |

**Romanya — antlaşma ≠ işgal (egemenlik_devri ayrıntısı):**
- Focşani ateşkesi: Heppner 1917-12-07 · ONCE "26 noiembrie" (Jülyen ise 12-09) — ÇELİŞKİ.
- Buftea ön barışı: Heppner 1918-03-05 · ONCE 18 Mart'ı ön barış, 5 Mart'ı ateşkes uzatma
  protokolü sayar — ÇELİŞKİ, kayda "çelişkili" düşülmeli.
- Bükreş Antlaşması 1918-05-07 (Heppner; Hall; Britannica): G. Dobruca + K. Dobruca'nın güney
  şeridi → Bulgaristan; kalan Dobruca → Merkezî Devletler kondominyumu (Tuna Deltası Romanya'da);
  Karpat geçitleri 2-10 km şerit → A-M. **Kral Ferdinand imzalamadı** (üç kaynak hemfikir);
  meclis onayı ÇELİŞKİLİ (Heppner "not ratified" · Ristović Marghiloman meclisi "ratified").
  Romanya 1918-11-10'da savaşa yeniden girdi; antlaşma Kasım 1918'de hükümsüz.
- ⇒ Bu antlaşmalar Eflak/Bükreş için egemenlik devretmedi; yalnız Dobruca + Karpat şeridi için
  (onaylanmamış) bir devir iddiası. Bükreş'in 1916-12-06 işgaliyle karıştırılmamalı.

## 3. ÖNGÖRÜ ↔ ÖLÇÜM

| Öngörü | Ölçüm | Hüküm |
|---|---|---|
| 80-120 kayıt | **65** Avrupa kaydı (56 işgal gören) | ✗ fazla tahmin — Fransa kuşağında yalnız Lille var (Sedan, Charleville, Valenciennes, Cambrai, St-Quentin, Laon, Maubeuge YOK), Karadağ 2 |
| `isg:`/işgalci `s:` yok | 0 | ✓ |
| Şehir günü çoğunlukta bulunamayacak | işgal gören 56 kayıttan f günü 19 (Babadağı = Romen çekilişi dahil), t günü 17 (Yergöğü dolaylı dahil) | ✓ (bölge satırları kuruldu) |
| Liège 08-16 | şehir 08-07 · 08-16 son kale | ✗ öngörü kaleyi şehre taşımıştı — tam tuzak 3 sınıfı |
| Brüksel 08-20 · Lille 10-13 · Niş 11-05 · Üsküp 10-22 · Bükreş 12-06 · Köstence 10-22 · Belgrad t 11-01 | aynı | ✓ |
| Anvers 10-10 | giriş 10-09 · teslim 10-10 · (6 Ekim çelişkisi) | ~ |
| Belgrad 1915-10-09 | yalnız ay (gün yalnız Vikipedi'de) | ✗ kaynaklı gün yok |
| Cetinje 1916-01-13 | 1916-01-11 | ✗ |
| Bükreş t "Kasım sonu" | tahliye bitişi 1918-11-12 | ✗ |
| Ypres işgal yok | ✓ (+ Calais, Paris, Nancy) — Reims/Amiens/Arras KISA işgali öngörülmemişti | ✓/eksik |
| TDV gün vermez | 27 madde, yalnız Üsküp t (Jülyen) | ✓ |

## 4. YAN BULGULAR (veri kusuru adayları — düzeltme yapılmadı)
1. **Ustrumca (yerlesimler_ok107.js:422):** `s:` 1912-10-26 → 1918-12-01 `sirbistan-kralligi`.
   TDV Ustrumca: 1913-1919 Bulgaristan. ⇒ 1913 Bükreş → 1919 Neuilly arası `bulgaristan-kralligi`
   olmalı (antlaşma günleri doğrulanmadı). Bu bir İŞGAL değil egemenlik meselesidir.
2. **Orsova (yerlesimler.js:510):** 1918-10-01'de `romanya-kralligi` — 1918'de Macar olması
   beklenir. ÖLÇÜLMEDİ, yalnız dikkat çekici.
3. **TDV Silistre** 1916-18 Bulgar işgalini anmıyor (kaynak eksik — atlas düzeltmesinde
   yalnız TDV'ye dayanılırsa sessiz hata doğar).
4. **Kosova bölüşüm yönü** iki 1914-1918-online maddesinde TERS — hüküm koordinatörde.

## 5. KAYNAK URL'LERİ
⚠️ encyclopedia.1914-1918-online.net Anubis bot duvarının arkasında; duvar AŞILMADI. Makaleler
tarayıcıyla ya da web.archive.org kopyalarından (2021-23) okundu.
- 1914-1918-online: occupation_during_the_war_belgium_and_france (Wegner) · brussels (Kesteloot) ·
  belgium (De Schaepdrijver) · warfare_1914-1918_belgium (Simoens) · generalgouvernement_belgien
  (Roolf) · delesalle_charles (Connolly) · france (Beaupré) · ypres_battles_of (Jones) ·
  occupation-during-and-after-the-war-south-east-europe (Ristović) · serbia · bulgaria (Hall) ·
  montenegro · warfare-1914-1918-south-east-europe · war-in-the-balkans-1-1 (Hall) · romania-1-1
  (Heppner & Gräf)
- TDV (§2 başı listesi, hepsi 200; `manastir` yanlış madde, `yenipazar` + `cetine` 302)
- Britannica: Siege-of-Antwerp-1914 · World-War-I (war in the west 1914; Marne) · place/Reims ·
  Amiens · Ypres · Calais-France · Treaty-of-Bucharest-1918
- https://www.provincedeliege.be/fr/liege1418/histoire · https://stamgent.be/nl_be/evenementen/gent-bezette-stad
  · https://mhm.tournai.be/collections-musee-dhistoire-militaire/les-deux-guerres-mondiales ·
  https://www.arch.be/docs/catalogues/catalogue_expo1918_fr.pdf ·
  https://irhis-recherche.univ-lille.fr/IRHiS_New/00-SiteUniversite/htdocs/premiere-guerre.html ·
  Archives du Pas-de-Calais (valinin 9.9.1914 raporu) · https://bu-documents.univ-reims.fr/theses/exl-doc/GED00000349.pdf
  · https://www.warmuseum.ca/firstworldwar/history/battles-and-fighting/land-battles/mons/ ·
  cairn revue-du-nord-2014-1-page-51 (403, başlık) · cairn cahiers-bruxellois-2014-1E-page-93 (403, özet)
  · VRT 19-10-2018 (arama sonucu)
- https://history.state.gov/historicaldocuments/frus1915Supp/d122 · persee.fr rharm_0035-3299_1966_num_22_3_6039 (başlık)
  · doaj.org (bot doğrulaması, aşılmadı)
- https://muzeulbucurestiului.ro/en/bucharest-under-occupation-1916-1918/ · https://once.mapn.ro/pages/calendar-istoric-comemorativ
  (takvim türü tutarsız) · https://aos.ro/wp-content/anale/IVol9Nr2Art.3.pdf (Ciorbea) · muzeulmarinei.ro
  Giurgiu PDF · https://www.aba.government.bg/list-events-item/105-godini-ot-osvobozhdenieto-na-yuzhna-dobrudzha-1916-g/46/show
  · isjbraila.ro Bădără PDF (zayıf) · https://www.muzeulbrailei.ro/braila/braila-de-altadata/ ·
  placesofpeace.eu Bucharest PDF (orta güvenilirlik)

## 6. BULUNAMADI / ARANMADI / ÇÖZÜLECEK
- **Bulunamadı:** Anvers, Gent, Liège, Namur, Bastogne, Neufchâteau, Virton t · Namur, Mons,
  Tournai f günü (ay) · Bastogne, Neufchâteau, Arlon, Virton f · Fransa 10 département listesi ·
  Belgrad 1915 günü · Bulgar müfettişlik kuruluş günleri · Priştine/Prizren 1915 günü + 1918 kurtuluşu
  · Podgorica t · Veles/İştip f · A-M MGG il listesi (yalnız Vikipedi) · G. Dobruca Bulgar tahliyesi
  (Silistre, Dobriç t) · Krayova t · İsakça, Yergöğü f · K. Dobruca dönüş günü.
- **Aranmadı (19 kayıt, bölge satırında):** Böğürdelen, Semendire, Kragujevac, Yagodina, Çaçak,
  Alacahisar, Yenipazar, Şehirköy, Debre, Doyran, Gevgili · Turnu Severin, Tırgu Jiu, Rimnik
  (Vâlcea), Slatina, Piteşti, Kımpulung, Tırgovişte, Buzău.
- **Koordinatör hükmü gereken çelişkiler:** Anvers 6/9/10 Ekim · Brüksel 16 (son asker) / 17
  (resmî) · Bükreş 6/9 Aralık · Dobriç 4/8 Eylül · İbrail 5/9 Ocak 1917 · Niş t 10/11/12 Ekim 1918 ·
  Karadağ teslimi 16/17/25 Ocak 1916 · Kosova bölüşüm yönü · Buftea 5/18 Mart · Focşani 7/9 Aralık ·
  Bükreş Ant. meclis onayı.
- **Arama özetine dayanan (tam metinde doğrulanmalı):** Brüj f (De Schaepdrijver).
