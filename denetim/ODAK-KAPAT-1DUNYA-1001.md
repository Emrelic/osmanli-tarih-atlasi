# ODAK-KAPAT-1DUNYA-1001 — `kronoloji_cok_1dunya_A.js` odaksız maddeleri

Koordinatör görevi (1 Ekim 2026). `data/`ya YAZILMADI; bu bir öneri listesidir.

## 0. Görev metniyle FARK (ölçüldü)
- 🔴 **Bu dosya `kapsam_genis` sınıfı DEĞİL.** 97 maddenin `kapsam_genis:true` olanı **0**,
  `yer_id` dolu olanı **0** (node ile dosya yüklenerek sayıldı). ⇒ Kamera Osmanlı sınırına
  UÇMUYOR; madde ODAKSIZ — kamera kıpırdamıyor, panel "yer işaretlenmemiş" diyor. Yani bu
  dosya odaksızlıktan kötü sınıfta değil, düz ODAKSIZ kovasında. Öncelik hükmü buna göre
  yeniden tartılabilir.
- 97/97 ODAKSIZ ve evren içi (yüklü) — doğru.

## 1. Yöntem
1. Maddenin `b`+`d` metni okunur; maddenin KENDİ `kaynak:` alanındaki kaynak indirilir
   (curl, ham HTML → düz metin) ve olayı tarihleyen cümle aranır.
2. Yer, cümlenin ANLAMINDAN çıkarılır (başlıktaki ilk ad değil).
3. Ad, `sehirler` havuzunda (d/v/s taşıyan yerleşim, `app.js:3101` süzgeci; `girdi.yukle()`
   4296 yerleşim) TAM adıyla aranır; o günkü sahibi `SUZGEC.sahipAnahtari` ile basılır.
4. Kova: **A** yer belli + havuzda · **B** yer belli + havuzda YOK (yakına itilmedi) ·
   **C** kaynakta belirsiz · **D** yere bağlı değil.

İndirilen kaynaklar (hepsi HTTP 200): TDV «Birinci Dünya Savaşı» · 1914-1918-online WW1
Timeline · 1914-1918-online makaleleri: Luxembourg · Belgium · Warfare 1914-1918 (South East
Europe) (+ dosyanın atıf yaptığı öteki 10 makale, sonraki partiler için).

## 2. Parti 1 — madde 1-25

| # | t | başlık (kısa) | kova | öneri | kaynak cümlesi (birebir) |
|---|---|---|---|---|---|
| 1 | 1914-06-28 | Saraybosna suikastı | **A** | `yer_id:"Saraybosna"` | TDV: "…eşinin Saraybosna’da bir Sırp milliyetçisi tarafından öldürülmesi…" |
| 2 | 1914-07-23 | A-M'nin Sırbistan'a ültimatomu | D | — | Timeline: "Austria-Hungary gives Serbia ultimatum" — yer yok |
| 3 | 1914-07-28 | A-M Sırbistan'a savaş ilanı | D | — | Timeline: "Austria-Hungary declares war on Serbia" |
| 4 | 1914-08-01 | Almanya Rusya'ya savaş ilanı | D | — | Timeline: "Germany declares war on the Russian Empire" |
| 5 | 1914-08-02 | Lüksemburg'un işgali | **A?** | `odak_yer:["Lüksemburg"]` (yer_id DEĞİL) | Luxembourg: "Luxembourg was occupied on the morning of 2 August 1914…" — özne ÜLKE; şehir adı ülkeyi temsil eder, olay yeri iddiası yazılmamalı |
| 6 | 1914-08-02 | Belçika'ya ültimatom | **A** | `yer_id:"Brüksel"` | Belgium: "On 2 August, the German envoy in Brussels delivered the ultimatum…" |
| 7 | 1914-08-03 | Almanya Fransa'ya savaş ilanı | D | — | Timeline: "Germany declares war on France" |
| 8 | 1914-08-04 | Belçika işgali + İngiltere'nin savaş ilanı | **A** (işgal yarısı) | `yer_id:"Liège"` | Belgium: "…Army of the Meuse crossed into Belgian territory near Liège." — ilan yarısı D; madde Fransa tarafı için yazılmış, sahibi okusun |
| 9 | 1914-08-07 | Karadağ'ın savaş ilanı | D | — | Timeline: "Montenegro declares war on Austria-Hungary" |
| 10 | 1914-08-17 | Cer Muharebesi | **B** | atlasta yok: **Cer Dağı** | SE Europe: "…on the slopes of Cer Mountain in west Serbia…" — Böğürdelen (Šabac) havuzda ama İTİLMEDİ |
| 11 | 1914-08-20 | Almanlar Brüksel'e girdi | **A** | `yer_id:"Brüksel"` | Belgium: "…20 August, the day when Brussels, an open city, fell without a fight." |
| 12 | 1914-08-21 | Charleroi Muharebesi | **B** | atlasta yok: **Charleroi** | Timeline: "Battle of Charleroi" |
| 13 | 1914-08-28 | Helgoland Körfezi | **B** | atlasta yok: **Helgoland** (deniz muharebesi) | Timeline: "Sea Battle of Heligoland Bight" |
| 14 | 1914-09-05 | Birinci Marne | **B** | atlasta yok: **Marne nehri** (nehir, yerleşim değil) | TDV: "…Marne nehrine çekilen Fransız kuvvetleri 5-10 Eylül 1914’te Marne Meydan Muharebesi’nde Almanlar’ı yendi." |
| 15 | 1914-09-07 | Mazurya Gölleri | **B** | atlasta yok: **Mazurya Gölleri** (göl bölgesi) | Timeline: "Battle of the Masurian Lakes" |
| 16 | 1914-09-12 | Birinci Aisne / Denize Koşu | **B** | atlasta yok: **Aisne nehri** | Timeline: "First Battle of the Aisne: “Race to the Sea”" |
| 17 | 1914-11-06 | A-M'nin üçüncü Sırbistan taarruzu | **C** | — | SE Europe: "The third and final Austro-Hungarian offensive began on 6 November 1914." — taarruzun yeri cümlede yok; Belgrad yalnız tahliye edilen şehir (TARAF değil SONUÇ), itilmedi |
| 18 | 1914-12-03 | Kolubara Muharebesi | **B** | atlasta yok: **Kolubara nehri** | SE Europe: "…known as the Battle of the River Kolubara…" |
| 19 | 1914-12-08 | Birinci Şampanya | **B** | atlasta yok: **Şampanya** (bölge) | Timeline: "First Battle of Champagne" — Reims havuzda ama bölge≠şehir, itilmedi |
| 20 | 1914-12-14 | Sırplar Belgrad'ı geri aldı | **A** | `yer_id:"Belgrad"` | TDV: "Avusturyalılar 29 Kasım’da ele geçirmiş oldukları Belgrad’ı da Sırplar’ın taarruzları sonunda 14 Aralık 1914’te geri verdiler." |
| 21 | 1914-12-24 | Noel Ateşkesi | **C** | — | Timeline: "Christmas Truce on the Western Front" — "bazı kesimler", yer belirsiz |
| 22 | 1915-01-24 | Dogger Bank | **B** | atlasta yok: **Dogger Bank** (açık deniz) | Timeline: "Sea Battle of Dogger Bank" |
| 23 | 1915-02-04 | Sınırsız denizaltı savaşı ilanı | D | — | Timeline: "Announcement of unrestricted submarine warfare by Germany" |
| 24 | 1915-05-02 | Gorlice-Tarnów yarması | **B** | atlasta yok: **Gorlice**, **Tarnów** | Timeline: "Battle of Gorlice-Tarnów" — Krakov/Lvov havuzda, itilmedi |
| 25 | 1915-05-07 | Lusitania batırıldı | **B** | atlasta yok: deniz (İrlanda güney açığı) | Timeline: "Sinking of British passenger liner „Lusitania“ by a German submarine" — batış noktası bu kaynakta yok; Cork havuzda, itilmedi |

**Parti 1 sayısı (25):** A 5 (+1 A? odak_yer) · B 11 · C 2 · D 6 (#8 karma: A yarısı sayıldı).
⚠️ Ara teslim M-5715'te "B 12 · D 7" yazdım — yeniden sayınca B 11 · D 6; doğrusu bu.
Havuz adları ölçüldü: Saraybosna · Brüksel · Liège · Belgrad · Lüksemburg HAVUZDA (birebir ad).

## 2b. Parti 2 — madde 26-50

Ek indirilen kaynaklar: 1914-1918-online «Poland» · «Montenegro» · «Greece» · «Romania» · «Portugal».

| # | t | başlık (kısa) | kova | öneri | kaynak cümlesi (birebir) |
|---|---|---|---|---|---|
| 26 | 1915-05-23 | İtalya'nın A-M'ye savaş ilanı | D | — | Timeline: "Italy declares war on Austria-Hungary" |
| 27 | 1915-06-23 | Birinci Isonzo | **B** | atlasta yok: **Isonzo nehri** | Timeline: "First Battle of Isonzo" |
| 28 | 1915-08-05 | Almanlar Varşova'ya girdi | **A** | `yer_id:"Varşova"` | Poland: "German cavalry entering Warsaw on 5 August 1915." (görsel altyazısı) · "After the fall of Warsaw in August 1915…" |
| 29 | 1915-09-06 | Bulgar-Alman gizli anlaşması | D | — | TDV: "Bulgarlar Almanya ve müttefikleriyle 6 Eylül 1915’te gizli bir anlaşma yapmışlar…" — imza yeri yok |
| 30 | 1915-09-22 | İkinci Şampanya | **B** | atlasta yok: **Şampanya** (bölge) | Timeline: "Beginning of the Second Battle of Champagne" |
| 31 | 1915-10-06 | Alman-A-M Sırbistan taarruzu | **C** | — | TDV/madde: taarruz cephe boyunca; başlama noktası kaynakta yok |
| 32 | 1915-10-14 | Bulgaristan'ın Sırbistan'a savaş ilanı | D | — | Timeline: "Bulgaria declares war on Serbia" |
| 33 | 1915-11-26 | Sırbistan seferi sona erdi | **C** | — | TDV: taarruzun "Sırplar’ın 26 Kasım’da yenilmesiyle" sona erdiği — yenilginin yeri yok |
| 34 | 1916-01-11 | Lovćen düştü | **B** | atlasta yok: **Lovćen dağı** | Montenegro: "Cetinje was taken earlier, after the fall of Lovćen on 11 January 1916." — Cetinje havuzda ama SONRAKİ olay, itilmedi |
| 35 | 1916-02-21 | Verdun Muharebesi | **B** | 🔴 atlasta yok: **Verdun** | TDV: "Almanlar’ın 21 Şubat 1916’da başlattıkları taarruzlara karşı Verdun’ü savunan General Pétain…" |
| 36 | 1916-03-09 | Almanya'nın Portekiz'e savaş ilanı | D | — | Portugal: "…responded with a declaration of war on 9 March 1916." |
| 37 | 1916-05-04 | Sussex Taahhüdü | D | — | Timeline: "Germany issues Sussex Pledge" |
| 38 | 1916-06-04 | Brusilov Taarruzu | **C** | — | TDV: "4 Haziran 1916’da Rus güney orduları grubu General Brusilov kumandasında Avusturyalılar’a karşı büyük bir taarruza girişti." — cephe geniş, yer yok |
| 39 | 1916-07-01 | Somme | **B** | atlasta yok: **Somme nehri** | Timeline: "Battle of the Somme" |
| 40 | 1916-08-04 | Gorizia Muharebesi | **B** | 🔴 atlasta yok: **Gorizia** (şehir) | Timeline: "Battle of Gorizia" |
| 41 | 1916-08-17 | Romanya-İtilâf sözleşmesi | D | — | Romania: "…finalised with the Political and Military Convention from 17 August 1916…" — imza yeri yok |
| 42 | 1916-08-17 | Makedonya cephesi taarruzu | **B** | atlasta yok: **Gorniçevo · Kaymakçalan · Çerna vadisi** | madde `d` (Selanik cephesi) — Filorina/Manastır havuzda, itilmedi |
| 43 | 1916-08-27 | Romanya'nın A-M'ye savaş ilanı | D | — | Timeline: "Romania declares war on Austria-Hungary" |
| 44 | 1916-08-30 | Selanik'te Venizelos hareketi | **A** | `yer_id:"Selanik"` | Greece: "On 30 August 1916 they tried to gain control over the Greek garrison in the city…" — "the city" önceki cümlede Thessaloniki |
| 45 | 1916-09-11 | Kavala'daki Yunan kolordusu teslim oldu | **A** | `yer_id:"Kavala"` | Greece: "…the Greek Fourth Army Corps based at Kavala surrendered without a fight to the Bulgarian army on 11 September 1916…" |
| 46 | 1916-09-15 | Somme'de ilk tank | **B** | atlasta yok: **Somme** | Timeline: "First use of British tanks on the Somme front" |
| 47 | 1916-11-05 | «Polonya Krallığı» ilanı | D | — | Poland: "…the so-called “Two Emperors’ Proclamation” was issued on 5 November 1916." — yer yok |
| 48 | 1916-12-01 | İtilâf Pire'ye çıktı | **B** | atlasta yok: **Pire** | Greece: "…landing 3,000 Anglo-French marines in Piraeus on 1 December 1916…" — Atina havuzda, itilmedi |
| 49 | 1917-01-22 | Wilson'ın konuşması | D | — | Timeline: "Woodrow Wilson gives "Peace without victory" speech" |
| 50 | 1917-03-16 | Hindenburg Hattı'na çekilme | **B** | atlasta yok: **Hindenburg Hattı** (savunma hattı) | Timeline: "German troops withdraw to the Hindenburg Line" |

**Parti 2 sayısı (25):** A 3 · B 10 · C 3 · D 9.
**Birikimli (50):** A 8 (+1 A?) · B 21 · C 5 · D 15 (#8 karma).

## 2c. Parti 3 — madde 51-75

🆕 **A-İMZA alt kovası:** imza yeri kaynakta AÇIKÇA yazan antlaşma/mütareke/bildiri. Görev
metni antlaşmayı D'ye koyuyor; ama imza bir OLAYDIR ve yeri bellidir — `yer_id` "olay burada
oldu" der ve bu doğrudur. Toprağın yeri DEĞİLDİR (kamera antlaşmanın konusu olan toprağa
gitmez). Hüküm koordinatörün: A'ya mı, D'ye mi.

| # | t | başlık (kısa) | kova | öneri | kaynak cümlesi (birebir) |
|---|---|---|---|---|---|
| 51 | 1917-04-17 | Üçüncü Şampanya | **B** | atlasta yok: **Şampanya** | Timeline: "Third Battle of Champagne" |
| 52 | 1917-06-11 | Fransa'nın Yunanistan'a ültimatomu | **C** | — | Greece: "…France proceeded to capture various strategic points in southern Greece and to deliver an ultimatum to the Greek government…" — Atina ima, yazılı değil |
| 53 | 1917-07-01 | Kerenski Taarruzu | **C** | — | Timeline: "Beginning of Kerenskii-Offensive" — cephe kesimi yok |
| 54 | 1917-07-20 | Korfu Bildirisi | **A-İMZA** | `yer_id:"Korfu"` | Timeline: "Signing of Corfu Declaration" |
| 55 | 1917-07-24 | Mărăşti / Mărăşeşti | **B** | atlasta yok: **Mărăşti · Mărăşeşti** | Romania: "…managed to stop the German offensive (Mărăşti, Mărăşeşti)…" |
| 56 | 1917-07-31 | Üçüncü Ypres | **A** | `yer_id:"Ypres"` | Timeline: "Third Battle of Ypres" — muharebe Ypres çıkıntısında; Passchendaele (26 Ekim) ayrı ve atlasta yok |
| 57 | 1917-09-03 | Almanlar Riga'yı aldı | **A** | `yer_id:"Riga"` | Eastern Front: "General Oskar von Hutier’s (1857-1934) Eighth Army took the city two days later…" ("that city" = Riga, önceki cümle) |
| 58 | 1917-10-24 | Caporetto | **B** | atlasta yok: **Caporetto** | Timeline: "Battle of Caporetto" |
| 59 | 1917-11-08 | Barış Kararnamesi | D | — | Timeline: "Lenin’s "Decree On Peace" passed by the Second Congress…" — yer yok (St. Petersburg havuzda ama kaynak söylemiyor) |
| 60 | 1917-12-07 | Focşani Mütarekesi | **B** (imza) | atlasta yok: **Focşani** | Romania: "Brătianu chose to sign the armistice with the Central Powers in Focşani…" |
| 61 | 1917-12-15 | Brest-Litovsk Mütarekesi | **A-İMZA** | `yer_id:"Brest-Litovsk"` | Eastern Front: "Signing of the armistice of Brest-Litovsk, 1917" (görsel altyazısı) · "…an armistice, which took effect on 17 December…" |
| 62 | 1918-01-08 | On Dört Madde | D | — | Timeline: "Woodrow Wilson presents his Fourteen-Point program" |
| 63 | 1918-02-09 | «Ekmek Barışı» | **A-İMZA** | `yer_id:"Brest-Litovsk"` | Timeline: "“Bread Peace” between Ukraine and the Central Powers concluded at Brest-Litovsk" |
| 64 | 1918-03-03 | Brest-Litovsk Antlaşması | **A-İMZA** | `yer_id:"Brest-Litovsk"` | Timeline: "Peace Treaty of Brest-Litovsk signed" |
| 65 | 1918-03-05 | Buftea Ön Barışı | **B** (imza) | atlasta yok: **Buftea** | Romania: "…the Treaty of Buftea, near Bucharest was signed on 5 March 1918…" — Bükreş havuzda, itilmedi |
| 66 | 1918-03-21 | Alman Bahar Taarruzu | **C** | — | Timeline: "Beginning of the German spring offensives on the Western Front" — tek yer yok |
| 67 | 1918-04-09 | La Lys | **B** | atlasta yok: **Lys nehri** | Portugal: "The Battle of La Lys and Beyond: 9 April 1918…" ⚠️ Timeline Lys'i 1918/04/07 veriyor (Fourth Battle of Ypres) — gün farkı, bildiriyorum |
| 68 | 1918-04-17 | Foch başkomutan | D | — | TDV/madde: karar; yer yok |
| 69 | 1918-05-07 | Bükreş Antlaşması | **A-İMZA** | `yer_id:"Bükreş"` | Romania: "After the conclusion of the peace treaty in Bucharest on 7 May 1918…" |
| 70 | 1918-06-15 | Piave | **B** | atlasta yok: **Piave nehri** | Timeline: "Battle of the Piave" |
| 71 | 1918-07-15 | İkinci Marne | **B** | atlasta yok: **Marne** | Timeline: "Second Battle of the Marne" |
| 72 | 1918-08-08 | Amiens Taarruzu | **A** | `yer_id:"Amiens"` | Timeline: "British-French offensive at Amiens" |
| 73 | 1918-09-29 | Üsküp'ün düşüşü | **A** | `yer_id:"Üsküp"` | SE Europe: "…the French cavalry took Skopje in a surprise attack on 29 September 1916." 🔴 KAYNAK KENDİYLE ÇELİŞİYOR: cümle "1916" diyor, bağlam (Selanik cephesinin yarılması) 1918 — dizgi hatası; madde 1918'de doğru |
| 74 | 1918-10-03 | Ferdinand tahttan çekildi | D | — | yer kaynakta yok |
| 75 | 1918-10-12 | Sırplar Niş'i aldı | **A** | `yer_id:"Niş"` | SE Europe: "When Serbian troops took the town of Niš on 12 October, all land communications with the Ottoman Empire were cut off." |

**Parti 3 sayısı (25):** A 5 · A-İMZA 5 · B 8 (2'si imza yeri atlasta yok) · C 3 · D 4.
**Birikimli (75):** A 13 (+1 A?) · A-İMZA 5 · B 29 · C 8 · D 19.

## 2d. Parti 4 — madde 76-97

| # | t | başlık (kısa) | kova | öneri | kaynak cümlesi (birebir) |
|---|---|---|---|---|---|
| 76 | 1918-10-24 | Vittorio Veneto | **B** | atlasta yok: **Vittorio Veneto** | Timeline: "Battle of Vittorio Veneto" |
| 77 | 1918-10-30 | Polonyalılar Krakov'da yönetimi aldı | **A** | `yer_id:"Krakov"` | Poland: "Finally, on 30 October 1918, Poles took control of power in Cracow." |
| 78 | 1918-11-03 | Kiel denizci ayaklanması | **A** | `yer_id:"Kiel"` | Timeline: "Beginning of Kiel Mutiny" |
| 79 | 1918-11-10 | Romanya yeniden savaşa girdi | D | — | ilan; yer yok |
| 80 | 1918-11-11 | Compiègne Mütarekesi | **B** (imza) | atlasta yok: **Compiègne ormanı** | Timeline: "Cease-fire treaty signed in the Forest of Compiègne" |
| 81 | 1918-11-13 | Belgrad Mütarekesi | **A-İMZA** | `yer_id:"Belgrad"` | SE Europe: "Finally, the last armistice of the Great War was signed with Hungary in Belgrade on 13 November 1918." |
| 82 | 1918-11-20 | Almanlar Lüksemburg'dan çekildi | **A?** | `odak_yer:["Lüksemburg"]` | Luxembourg: "The German occupying army leaves Luxembourg on 20 November 1918." — özne ülke (#5 ile aynı hüküm) |
| 83 | 1918-11-21 | Belçika'da yeni hükümet | D | — | Timeline: "Belgium forms new government" — yer yok |
| 84 | 1919-01-18 | Paris Barış Konferansı toplandı | **C** | — | 🔴 KAYNAKLAR ÇELİŞİYOR: TDV "Barış Konferansı 18 Ocak 1919’da Paris’te toplandı." · Timeline "Paris Peace Conference opens in Versailles". Paris havuzda, Versay YOK. TDV birincilse `yer_id:"Paris"` — hüküm koordinatörün |
| 85 | 1919-04-28 | Milletler Cemiyeti Misakı kabul | **C** | — | Timeline: "Paris Peace Conference approves the League of Nations covenant" — yer yalnız konferansın ADINDA; #84 çelişkisine bağlı |
| 86 | 1919-05-11 | Vorarlberg referandumu | **B** | atlasta yok: **Vorarlberg** (eyalet) | Timeline: "Referendum in Vorarlberg to join the Swiss Federation" — Bregenz havuzda, itilmedi |
| 87 | 1919-06-19 | Cēsis Muharebesi | **A** | `yer_id:"Cēsis (Wenden)"` | Timeline: "Battle of Cesis" |
| 88 | 1919-06-28 | Versay Antlaşması | **B** (imza) | atlasta yok: **Versay** | Timeline: "German foreign minister Hermann Müller signs Treaty of Versailles" |
| 89 | 1919-07-12 | Abluka kaldırıldı | D | — | Timeline: "Allied blockade against Germany lifted" |
| 90 | 1919-09-10 | Saint-Germain Antlaşması | **B** (imza) | atlasta yok: **Saint-Germain** | TDV: "…10 Eylül’de Avusturya ile Saint-Germain, … antlaşmaları imzalandı." |
| 91 | 1919-11-27 | Neuilly Antlaşması | **B** (imza) | atlasta yok: **Neuilly** | TDV: "…27 Kasım’da Bulgaristan ile Neuilly, … antlaşmaları imzalandı." |
| 92 | 1920-01-10 | Versay yürürlüğe girdi | D | — | Timeline: "Inception of the Treaty of Versailles" |
| 93 | 1920-04-25 | Polonya-Sovyet Savaşı | **C** | — | Timeline: "Polish-Soviet War" — savaşın tamamı, tek yer yok |
| 94 | 1920-06-04 | Trianon Antlaşması | **B** (imza) | atlasta yok: **Trianon** | TDV: "…4 Haziran 1920’de Macaristan ile Trianon … antlaşmaları imzalandı." |
| 95 | 1920-11-15 | Milletler Cemiyeti Cenevre'de toplandı | **A** | `yer_id:"Cenevre"` | Timeline: "First League of Nations meeting held in Geneva" |
| 96 | 1921-03-18 | Riga Antlaşması | **A-İMZA** | `yer_id:"Riga"` | Timeline: "Treaty of Riga" — imza yeri antlaşmanın ADINDA |
| 97 | 1921-05-23 | Leipzig davaları | **A** | `yer_id:"Leipzig"` | Timeline: "Leipzig War Crime Trials" |

**Parti 4 sayısı (22):** A 5 · A? 1 · A-İMZA 2 · B 7 (5'i imza yeri atlasta yok) · C 3 · D 4.

## 2d+. Koordinatör hükmü sonrası (M-5718)
- **A-İMZA → A**: imza yeri kaynakta AÇIKÇA yazan 7 madde `yer_id` alır (Korfu · Brest-Litovsk ×3 · Bükreş · Belgrad · Riga).
- **#84** `b`: "Paris Barış Konferansı toplandı" → konferansın TOPLANMASI ⇒ TDV birincil: **A `yer_id:"Paris"`** (TDV: "Barış Konferansı 18 Ocak 1919’da Paris’te toplandı.").
- **#85** `b`: "Paris Barış Konferansı Milletler Cemiyeti Misakı'nı kabul etti" → konferansın OTURUMU, imza değil ⇒ **A `yer_id:"Paris"`** (aynı TDV cümlesi konferansın yerini veriyor; timeline "Paris Peace Conference approves the League of Nations covenant").
- **#67** TDV «Birinci Dünya Savaşı» maddesinde La Lys GEÇMİYOR (aranıp bulunamadı) ⇒ iki gün de yazılır: Portugal 9 Nisan · Timeline 7 Nisan — "kaynaklar çelişiyor". Madde B kovasında kalır (Lys atlasta yok); gün düzeltmesi önerilmez.
- **Güncel toplam:** A 27 · A? 2 · B 36 · C 9 · D 23 = 97. Uygulanırsa dosya ODAKSIZ 97 → **68** (önceki sınav 70 + #84/#85 iki madde; Paris havuzda).

## 2e. TOPLAM — 97 madde (hüküm ÖNCESİ)
```
A        18   yer belli + havuzda, yer_id önerisi
A?        2   Lüksemburg (#5, #82) — özne ÜLKE, odak_yer önerildi, yer_id değil
A-İMZA    7   imza yeri kaynakta açık + havuzda (Korfu · Brest-Litovsk ×3 · Bükreş · Belgrad · Riga)
B        36   yer belli, atlasta YOK — 7'si imza yeri (Focşani · Buftea · Compiègne · Versay ·
              Saint-Germain · Neuilly · Trianon); yakına İTİLMEDİ
C        11   kaynakta belirsiz ya da KAYNAKLAR ÇELİŞİYOR (#84-85 Paris/Versay)
D        23   yere bağlı değil (ilan · karar · konuşma · imza yeri kaynakta olmayan anlaşma)
```
⇒ Uygulanırsa ODAKSIZ 480 → **453** (A 18 + A-İMZA 7 + A? 2 = 27; A-İMZA ve A? kabul edilmezse **462**).
Hesap: yalnız `yer_id`/`odak_yer` havuzda çözülen maddeler KONUMLU/KUTULU'ya geçer.

🔴 **B kovasının en çok kazandıracak tek hamlesi:** atlasa nokta. Bu dosyada en çok geçen
atlasta-yok adlar: Şampanya ×3 · Marne ×2 · Somme ×2 · Isonzo/Caporetto · Verdun · Gorizia ·
Versay. Verdun, Gorizia, Versay, Compiègne, Charleroi **gerçek şehir/kasaba** — nokta eklenebilir
(`yerlesimler*` sahibinin işi). Nehir/bölge/deniz adları (Marne, Somme, Şampanya, Dogger Bank)
nokta ile çözülmez; onlar için `odak_kutu_kaynak` ya da açıkça beyanlı `odak_yer` gerekir.

### Sınav — gerçek `arac/odak_cozum.js` yamalı kopyası (index.html evreni, 1 Ekim)
```
yalnız A (18 yer_id)            dosya ODAKSIZ 97 → 79 · kırık atıf yeni 0
A + A-İMZA + A? (27)            dosya ODAKSIZ 97 → 70 · KUTULU 0 → 2 · kırık atıf yeni 0
```
27/27 yama eşleşti (anahtar t+b). Önerilen 21 farklı adın hepsi havuzda ÇÖZÜLDÜ.
⚠️ Evren notu: bugün `index.html` 183 kronoloji/olay dosyası yüklüyor ve `odak_olc.py`
ODAKSIZ **684** diyor (dün 165 dosya / 480). Tavan dosyası 480'i kendi evreniyle tutuyor
(commit `18c40244` "ODAK TAVANINA EVREN EKLENDI"); bu dosya o evrenin içinde ⇒ düşüş tavana yansır.

## 2f. Kaynakta bulunan iki tutarsızlık
- **#73 Üsküp:** 1914-1918-online «Warfare 1914-1918 (South East Europe)» cümlesi "…took Skopje
  in a surprise attack on 29 September **1916**" diyor; bağlam (Selanik cephesinin yarılması,
  26 Eylül Veles/Štip) 1918'dir. Kaynakta dizgi hatası; madde 1918'de DOĞRU.
- **#67 La Lys:** Portugal makalesi 9 Nisan 1918, WW1 Timeline 7 Nisan 1918 ("Fourth Battle of
  Ypres … Lys"). Madde 9 Nisan; Portekiz tümeninin çöktüğü gün 9 Nisan'dır, timeline muharebe
  dizisinin başlangıcını veriyor olabilir — ölçülemedi, bildiriyorum.
- **#84 Paris/Versay** yukarıda (C).

## 3. Gözlem — B kovası baskın
1. Dünya Savaşı muharebeleri NEHİR/BÖLGE/DENİZ adıyla anılıyor (Marne, Aisne, Kolubara,
Şampanya, Mazurya, Dogger Bank). B'nin çaresi veride iki yoldan biridir: ① atlasa nokta
eklemek (`yerlesimler*` sahibinin işi) ② `odak_yer` ile kameraya YAKIN bir şehir göstermek —
ama bu "yakına itmek" olduğu için görev metni yasaklıyor. Karar koordinatörün.
