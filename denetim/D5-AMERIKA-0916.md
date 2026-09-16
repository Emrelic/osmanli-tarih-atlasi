# D5-AMERIKA — 29 Ekim 1923 sınırları · aşama ① KAYNAK ENVANTERİ · 16 Eylül 2026

Şartname: `oturumlar/D-1923-0916.md` (DÜNYA KADROSU, D5-AMERIKA satırı) · tanım `oturumlar/GORUNUM-ABCD-0916.md` §D ·
şema `denetim/SEMA-D-0916.md` (kategori: `D | C | fiili | D-YOK`, `degisti.deger:null` = bilmiyorum).
Veri (`data/d_sinirlar_amerika.js` → `window.D_SINIRLAR_AMERIKA`) **yazılmadı** — SEMA-D tahtada HERKES'e ilan edilmedi.

## 0. ÖZET — sayıyla

```
parça                 78   (42 sınır grubu; Kanal Bölgesi, Guantánamo ve Saint-Martin dahil) — tablodan SAYILDI
  D                   22   hukuken yürürlükte VE 1923'ten önce işaretlenmiş/kesin tanımlı
  C                   34   yürürlükte ama kaba ya da işaretsiz
  fiili                4   hukukî hat YOK, fiilî idare hattı kaynakta var
  D-YOK               17   hukukî hat YOK ve fiilî hat da kaynakta yok (kutu olarak)
  ölçülemedi           1   Honduras–El Salvador (kaynak OKUNMADI)
değişti (1923→bugün)  true 36 · false 24 · null 18
```
⇒ **Amerika 1923'te büyük ölçüde "C" ve "tartışmalı" bir kıta.** Yalnız 22 parça D. Arjantin–Brezilya dışında
hiçbir uzun sınır baştan sona D değil.
⇒ **"Bugünkü sınır = 1923" vekili 24 parçada kullanılabilir (degisti:false)**; 36 parça ayrı çizim ister,
18'inde önce ölçüm gerekir.

## 1. KAYNAKLAR (hepsi okundu; alıntılar ≤15 kelime)

| kısa ad | kaynak | erişim |
|---|---|---|
| IBS N | ABD Dışişleri, Office of the Geographer, *International Boundary Study* No. N | `https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibsNNN.pdf` — pypdf ile tam metin; sayfa = PDF sayfası |
| IRELAND-SA | Gordon Ireland, *Boundaries, Possessions, and Conflicts in South America*, Harvard UP 1938 | archive.org `McGillLibrary-law_boundaries-possessions-conflicts_F2236I741938-22073` (OCR) |
| LNTS 74 | League of Nations Treaty Series c.74 no.1726 (Salomón–Lozano) | treaties.un.org `LON/Volume 74/v74.pdf` s.9–17 |
| RIAA | UN *Reports of International Arbitral Awards*: I 223–298 (Kol–Venez 1922) · XI 11–23 (Brez–İng. Guyanası 1904) · XI 309–347 (Chamizal 1911) · XV 481–540 (Alaska 1903) · XXVIII 249–254 (Fr–Hol 1891) · XXVIII 349–378 (Brez–Fr. Guyanası 1900) | legal.un.org/riaa |
| PERU-B3285 | Perú Cancillería antlaşma arşivi, Brezilya–Peru karma komisyonu kapanış tutanağı B-3285 (2006) | apps.rree.gob.pe |
| CPDOC | FGV/CPDOC, Á. da Costa Franco, "Tratados de fixação de limites territoriais" | cpdoc.fgv.br |
| AFDI 1956 | *Annuaire français de droit international* 2 (1956) s.255–256 | persee.fr |
| KOL-CANC | Colombia Cancillería, "Frontera terrestre Colombia–Ecuador" | cancilleria.gov.co |
| 44 STAT | ABD–Britanya antlaşması 24 Şub 1925, 44 Stat. 2102 | govinfo.gov |
| IBC | International Boundary Commission, History | internationalboundarycommission.org |
| JCPC 1927 | Privy Council, Labrador Boundary, 1 Mart 1927, [1927] UKPC 25 | solon.org (BAILII kopyası) |
| IBWC | International Boundary and Water Commission, Treaties + History | ibwc.gov |
| FRUS | Foreign Relations of the United States: 1912 d421 · 1915 d1732 · 1923 v.II d575 · 1928 v.I d499 · 1929 v.I d783 | history.state.gov |
| AVALON | ABD–Küba 1903 anlaşması + kira + 1934 antlaşması | avalon.law.yale.edu |
| NL-WGK015054 | Hollanda onay yasası gerekçesi, Saint-Martin sınır antlaşması 2023 | wetgevingskalender.overheid.nl |

🔴 Ulaşılamayan: Itamaraty/PCDL sayfaları (gov.br CAPTCHA — **aşılmadı**) · SUIN Colombia (sertifika hatası) ·
CRS R44137 (403). Bu yüzden 1941 Kol–Venez antlaşması ve Brezilya işaretleme bitiş tarihleri **bulunamadı**.

## 2. TARAF KİMLİKLERİ — `devletler.js` tarandı (tahmin edilmedi)

```
abd · kanada · meksika · guatemala · panama-cumhuriyeti · kuba-cumhuriyeti · haiti · dominik-cumhuriyeti ·
kolombiya-cumhuriyeti · venezuela-cumhuriyeti · ekvador-cumhuriyeti · peru-cumhuriyeti · bolivya-cumhuriyeti ·
sili-cumhuriyeti · arjantin-cumhuriyeti · paraguay-cumhuriyeti · uruguay-cumhuriyeti · brezilya-cumhuriyeti ·
ingiliz-guyanasi · hollanda-guyanasi · fransiz-guyanasi · fransa-cumhuriyet · hollanda
```
🔴 **KÜNYESİZ (1923'te var, `devletler.js`te YOK)** → D-KUNYE'ye:
`HONDURAS` · `EL SALVADOR` · `NİKARAGUA` · `KOSTA RİKA` · `İNGİLİZ HONDURASI (Belize)` · `NEWFOUNDLAND DOMİNYONU`.
Bunlara dokunan **12 parça** taraf kimliği olmadan yazılamaz.
🟡 `kanada` (1867→) ile `ingiliz-kuzey-amerika` (1763→) **ikisi de 29 Ekim 1923'te canlı** — aynı toprak için iki kimlik.
Bu envanter `kanada`yı kullanıyor; hangisinin doğru olduğu D-KUNYE'nin hükmü.
⚪ Kanal Bölgesi ve Guantánamo için ayrı künye yok → taraf `abd`.

## 3. PARÇA TABLOSU

Sütunlar: **kat** = önerilen `kategori` · **tahdit** = yerinde işaretleme · **değ.** = `degisti.deger` (1923 → bugün).

### 3.1 KUZEY AMERİKA

| id | taraflar | kat | dayanak | tahdit | değ. | kaynak · not |
|---|---|---|---|---|---|---|
| d1923-ca-us-1 | kanada · abd — 49. paralel, göller, St. Croix | **D** | 1783 · 1818 Md.II · 1842 · 1846 · 1908 Md.V–VI | 1872–76 anıtları; 1908 sonrası yeniden | true (küçük) | 44 STAT: 1925 Md.II paralel hattını anıtlar arası DÜZ çizgi yaptı · IBC |
| d1923-ca-us-2 | kanada · abd — Lake of the Woods | C | 1783 · 1818 · 1842 | yok (hat 5 noktada kendini kesiyordu) | true | 44 STAT Md.I (1925) · "two small areas of United States waters" |
| d1923-ca-us-3 | kanada · abd — Alaska, 141. meridyen | **D** | 1825 · 1867 | saha işi 1913'te bitti | null | IBC · değişiklik bulunmadı, "değişmedi" diyen kaynak okunmadı |
| d1923-ca-us-4 | kanada · abd — Alaska güneydoğu (panhandle) | C | 1903 Tahkim Mahkemesi kararı + 25 Mar 1905 notaları | işaretleme yılı **bulunamadı** | null | RIAA XV 492–493 |
| d1923-ca-nf-1 | kanada · NEWFOUNDLAND (künyesiz) — Labrador | **D-YOK** | yok (Privy Council'e sevk) | yok | true | JCPC 1927: Kanada kıyıdan 1 millik şerit, Newfoundland su ayrımı iddia ediyordu |
| d1923-us-mx-1 | abd · meksika — kara kesimi (El Paso batısı) | **D** | 1848 · 1853 · 1882 · 1889 | 1891–94 (52→258 anıt) | null | IBWC · 1970 antlaşması nehir kesimine ait; karanın değişmediğini açıkça söyleyen metin okunmadı |
| d1923-us-mx-2 | abd · meksika — Rio Grande + Colorado | C | 1848 · 1884 · 1905 (banco kuralları) | hareketli nehir hattı | true | IBWC: 1933 düzeltme · 1970 antlaşması |
| d1923-us-mx-3 | abd · meksika — Chamizal | **D-YOK** | 1911 tahkim kararı — ABD reddetti | yok | true | RIAA XI 342 · 1963 sözleşmesi · 1923 fiilî idare **bulunamadı** |
| d1923-us-pa-1 | abd (Kanal Bölgesi) · panama-cumhuriyeti | **D** | 1903 Md.II–III · 1904 teslim · 2 Eyl 1914 Sınır Sözleşmesi (onay 11 Şub 1915) | 1904 hatları "located upon the ground and monumented"; şehir sınırları koordinatlı | true | FRUS 1915 d1732 · 1 Eki 1979'da bölge sona erdi ⇒ **bugünkü geometri YOK, kendi çizim** · Gatun 100 ft eşyükselti hattının 1923'te işaretli olup olmadığı **bulunamadı** |

### 3.2 ORTA AMERİKA

| id | taraflar | kat | dayanak | tahdit | değ. | kaynak · not |
|---|---|---|---|---|---|---|
| d1923-mx-gt-1 | meksika · guatemala | **D** | 27 Eyl 1882 Md.1, Md.3 · 1883 protokolü · 1 Nis 1895 | Mayıs 1899'da tamam | false | IBS 159 s.3–5 · "By May 1899, the demarcation … was completed" · 1961 sonrası Suchiate kanalı ⚪ ölçülmedi |
| d1923-mx-bh-1 | meksika · İNG. HONDURAS (künyesiz) | C | 8 Tem 1893 Md.I (onay 21 Tem 1897) · 7 Nis 1897 | metinde yok | false | IBS 161 · IBS 161'in içinde 1859 tarihi iki farklı biçimde geçiyor |
| d1923-gt-bh-1 | guatemala · İNG. HONDURAS — Sarstún | **D** | 30 Nis 1859 Md.1, Md.6 | nehir; 1861 komisyonu | false | IBS 8 s.5 |
| d1923-gt-bh-2 | aynı — Gracias a Dios–Garbutt düz hattı | C | 1859 Md.1 | 1861'de dikilen 29 piramit sonradan kayboldu; 1929'da yeniden kuruldu | false | IBS 8 s.4–5 · 1923'te yerinde miydi **bulunamadı** |
| d1923-gt-bh-3 | aynı — Garbutt'tan kuzeye, Meksika'ya | C | 1859 Md.1 | yok | false | IBS 8 s.5 · Guatemala'nın antlaşmayı geçersiz sayma tezi hangi yıldan: **bulunamadı** |
| d1923-gt-sv-1 | guatemala · EL SALVADOR | **fiili** | 1923'te belge yok; 1938 Md.I(a) "mevcut sınır"dan söz eder | 1940 | true | IBS 82 · fiilî hat vekili = 1938 hattı (küçük teknik değişikliklerle) |
| d1923-gt-hn-1 | guatemala · HONDURAS | **D-YOK** | yok — 1845/1895/1914 antlaşmaları çözemedi | 1933–36 | true | IBS 157 s.3 · 1933 kararı güney kesimde fiilî tasarrufu esas aldı |
| d1923-hn-sv-1 | HONDURAS · EL SALVADOR | **ölçülemedi** | — | — | null | IBS yok · **kaynak okunmadı** (bkz. §5) |
| d1923-hn-ni-1 | HONDURAS · NİKARAGUA — batı (Fonseca → Teotecacinte) | **D** | 1888 · 1894 (onay 24 Ara 1896) | 1900–1904 (IBS'te bir yerde 1900–01 yazıyor) | null | IBS 36 s.5, s.8 · körfez içindeki hat **bulunamadı** |
| d1923-hn-ni-2 | aynı — doğu (Poteca–Coco) | **D-YOK** | 1906 İspanya Kralı kararı — Nikaragua reddetti | yok | true | IBS 36 · Uluslararası Adalet Divanı kararı 1960 + 1961 |
| d1923-ni-cr-1 | NİKARAGUA · KOSTA RİKA | **D** | 1858 Md.2 · 1888 Cleveland kararı · Alexander kararları (1897–1900) | 2–20 numaralı dikmeler; **yılı bulunamadı** | false | IBS 158 s.4–5 |
| d1923-cr-pa-1 | KOSTA RİKA · panama-cumhuriyeti | **D-YOK** | 1900 Loubet (Kosta Rika protesto etti) · 1914 White (Panama reddetti) | 1944 | true | IBS 156 s.3 · 1941 antlaşması |
| d1923-pa-co-1 | panama-cumhuriyeti · kolombiya-cumhuriyeti | C | Thomson–Urrutia 6 Nis 1914 (onay 1 Mar 1922) → 1855 Kolombiya kanunu | yok (1936–38) | null | IBS 62 s.4, s.7 · Panama antlaşmanın tarafı değil; ikili antlaşma 1924/25 |

### 3.3 KARAYİPLER

| id | taraflar | kat | dayanak | tahdit | değ. | kaynak · not |
|---|---|---|---|---|---|---|
| d1923-ht-do-1 | haiti · dominik-cumhuriyeti | **D-YOK** | etkili belge yok (1777 antlaşması belirsiz) | 1930 (%80) | true | IBS 5 s.4 · FRUS 1929 d783 · 1929 · 1935 · 1936 |
| d1923-us-cu-1 | abd (Guantánamo) · kuba-cumhuriyeti | C | 1903 Md.I · 2 Tem 1903 kira Md.II · 1934 Md.III limitleri dondurdu | kira "permanent fences" diyor; yapım yılı **bulunamadı** | false | AVALON · limitler kerteriz+mesafe ⇒ koordinata ÇEVRİLEBİLİR, D'ye yükseltilebilir · Bahía Honda 1923 durumu **bulunamadı** |
| d1923-fr-nl-1 | fransa-cumhuriyet · hollanda — Saint-Martin | **D-YOK** | 23 Mar 1648 Concordia (hat tanımsız) | yok | true | NL-WGK015054 s.1 · 26 May 2023 antlaşması |

### 3.4 GÜNEY AMERİKA — KUZEY (Guyanalar · Venezuela · Kolombiya · Ekvador)

| id | taraflar | kat | dayanak | tahdit | değ. | kaynak · not |
|---|---|---|---|---|---|---|
| d1923-gy-ve-1 | ingiliz-guyanasi · venezuela — Punta Playa–Barima | **D** | 1897 Md.13 · 3 Eki 1899 Paris kararı | 1900–05 açma + dikme | false | IBS 21 s.5 · Venezuela'nın 1962 itirazı hattı değiştirmedi |
| d1923-gy-ve-2 | aynı — Barima–Roraima | C | aynı | 1900–05 arası baştan sona yüründü, 25 beton direk | false | IBS 21 s.5 · Roraima noktası 1932 |
| d1923-ve-br-1 | venezuela · brezilya — Cucuy–Hua | **D** | 1859 Md.2 · 1905 · 1912 | 1880; 1912–15 | true (küçük) | IBS 175 s.7–8 · 1928 sonrası koordinat düzeltmesi |
| d1923-ve-br-2 | aynı — Parima–Pacaraima su ayrımı | C | 1859 Md.2 | 1923'te yok; 1970'lerde tamam | null | IBS 175 s.8 |
| d1923-co-ve-1 | kolombiya · venezuela — tartışmasız kesimler (Goajira, Táchira dahil) | **D** | 1891 İspanya kararı · 1898 · 1916 (onay 20 Tem 1917) · 24 Mar 1922 İsviçre Federal Konseyi kararı | 1900–01 karma komisyon | null | RIAA I 225, 288–289 · IRELAND-SA 217–219 |
| d1923-co-ve-2 | aynı — Oro–Catatumbo/Grita · China–Don Pedro · Arauca–Meta · Yavita–Pimichín | **D-YOK** | 1922 kararı uygulamada; uzman kararı 30 Tem 1924 | uzmanlar 1923 sonuna kadar sahada | true | IRELAND-SA · "They returned to Switzerland at the end of 1923" |
| d1923-co-br-1 | kolombiya · brezilya — Rio Negro–Apaporis | C | 24 Nis 1907 Md.I | komisyon **hiç toplanmadı**; 1930–36 | true | IBS 174 s.8–9 · Taraira meridyeni değişti |
| d1923-br-pe-1 | brezilya · peru — Tabatinga–Apaporis | **D** | 23 Eki 1851 (onay 18 Eki 1852) | 1866–74 | true (**TARAF** değişti) | IRELAND-SA 125–130 · 1923'te Brezilya–Peru hattı, Kolombiya haklarını saklı tutmuştu; 1928 antlaşması + 1930 teslim sonrası Brezilya–Kolombiya |
| d1923-co-pe-1 | kolombiya · peru | **fiili** | Salomón–Lozano 24 Mar 1922 — **yürürlükte değil** (onay 19 Mar 1928); geçerli olan 19 Tem 1911 statüko sözleşmesi | 1929–30 | true | LNTS 74 · IRELAND-SA 194–198 · fiilî: Kolombiya La Pedrera'da, Peru Putumayo'da · **fiilî hattın çizimi bulunamadı** ⇒ çizim için ek ölçüm şart |
| d1923-co-ec-1 | kolombiya · ekvador — Mataje–San Miguel–Putumayo | **D** | Muñoz Vernaza–Suárez 15 Tem 1916 (onay 26 Oca 1917) | 1917–19 | null | IRELAND-SA 183–185 · KOL-CANC |
| d1923-co-ec-2 | aynı — Putumayo–Napo–Ambiyacu (doğu) | C | aynı | **bulunamadı** | true | Salomón–Lozano (yürürlük 1928) San Miguel'in doğusunu Peru'ya bıraktı · bölge 1923'te Peru'nun iddiasındaydı |
| d1923-ec-pe-1 | ekvador · peru | **D-YOK** | yok — İspanya Kralı karar vermeden çekildi | 1942 sonrası | true | IBS 172 s.6 · Peru'nun İquitos'tan yayılışı, somut hat yok |
| d1923-br-gy-1 | brezilya · ingiliz-guyanasi | C | 1901 (onay 28 Oca 1902) · 6 Haz 1904 İtalya Kralı kararı | 1923'te yok | true (küçük) | RIAA XI 11–23 · 22 Nis 1926 (Tacutu kaynağı düzeltmesi) |
| d1923-br-sr-1 | brezilya · hollanda-guyanasi | C | 5 May 1906 (onay 15 Eyl 1908) — su ayrımı | 1923'te yok | false | IRELAND-SA 158–159 · iki ucu komşu anlaşmazlıklara bağlı |
| d1923-br-gf-1 | brezilya · fransiz-guyanasi | C | 1897 (onay 6 Ağu 1898) · 1 Ara 1900 İsviçre kararı (Oyapock + Tumuc-Humac) | yok | null | RIAA XXVIII 349 · AFDI 1956 "hâlâ yapılmadı" ↔ IRELAND-SA "partly marked" — **ÇELİŞKİ**, taraf seçilmedi |
| d1923-gy-sr-1 | ingiliz-guyanasi · hollanda-guyanasi — Corentyne ağzı → Cutari/New River ayrımı | **fiili** | antlaşma yok; 1831'den beri zımni mutabakat | yok | null | IRELAND-SA 245 |
| d1923-gy-sr-2 | aynı — üst kesim (Cutari ↔ New River) | **D-YOK** | yok | yok | null | IRELAND-SA 245 |
| d1923-sr-gf-1 | hollanda-guyanasi · fransiz-guyanasi — Maroni + Awa (Lawa) | C | 1888/1890 · 13/25 May 1891 Çar kararı | yok | null | RIAA XXVIII 249 |
| d1923-sr-gf-2 | aynı — Stoelman–Portal adaları | **D** | 30 Eyl 1915 (onay 16 Eyl 1916) | ada paylaşımı | null | IRELAND-SA 243–245 |
| d1923-sr-gf-3 | aynı — Awa'nın yukarısı (Itany mı Marouini mi) | **D-YOK** | 1905 Lahey projesi kabul görmedi | yok | null | IRELAND-SA 244 |

### 3.5 GÜNEY AMERİKA — MERKEZ ve AND

| id | taraflar | kat | dayanak | tahdit | değ. | kaynak · not |
|---|---|---|---|---|---|---|
| d1923-br-pe-2 | brezilya · peru — Javari | **D** | 1851 · 1897 protokolü | 1874; 1897 düzeltme | false | IRELAND-SA 126 · PERU-B3285 |
| d1923-br-pe-3 | brezilya · peru — Javari kaynağı–Acre (1909 hattı) | C | 8 Eyl 1909 (onay 30 Nis 1910) | 1913'ten sonra; bir kesim 1925–27 | false | PERU-B3285 s.3, s.7 · "los trabajos realizados en los años 1925, 1926 y 1927" |
| d1923-bo-br-1 | bolivya · brezilya — 1914 haritalarında işaretli kesimler | **D** | 1867 (onay 1868) · Petrópolis 17 Kas 1903 (onay 10 Mar 1904) | 1914 karma komisyon haritaları | null | IRELAND-SA 40–53 · CPDOC |
| d1923-bo-br-2 | aynı — Rapirran–Bahia · Cuatro Hermanos–Verde · Madeira adaları | C | aynı | açık | true | IRELAND-SA 48, 52 · 1925 protokolleri + 25 Ara 1928 Natal (onay 27 Haz 1929) · **kesim listesi tam değil** |
| d1923-bo-pe-1 | bolivya · peru — Amazon kesimi (Suches kuzeyi) | **D** | 1902 · 9 Tem 1909 Arjantin kararı · Polo–Bustamante 1909 (onay 9 Kas 1909) | 1911–13 | false | IRELAND-SA 95–109 |
| d1923-bo-pe-2 | aynı — Manuripi–Acre | C | aynı + 19 Ara 1916 protokolü | 1917 yeniden çalışma, sonucu **bulunamadı** | false | IRELAND-SA |
| d1923-bo-pe-3 | aynı — Suches–Titicaca–Tacna | C | aynı | ilk işaretleme 2 Haz 1925 protokolünden sonra | false | IRELAND-SA · 1932 protokolü **doğrulanmadı** |
| d1923-bo-cl-1 | bolivya · şili — 1904 hattı (değişmeyen kesimler) | C | 20 Eki 1904 (onay 10 Mar 1905) | direkler "shortly thereafter"; **yıl yok** | false | IBS 67 s.3–4 |
| d1923-bo-cl-2 | aynı — Chipapa–Olca | C | 1904 | aynı | true | IBS 67 s.4: 1907 protokolü "ratifications … not exchanged until 31 years later" ⇒ 1938 |
| d1923-bo-cl-3 | aynı — Patalani–Panantalla | C | 1904 | aynı | true | IBS 67 · 1938 |
| d1923-bo-cl-4 | bolivya · şili (Şili idaresindeki Tacna-Arica) — Visviri–Santuario–Chipe | C | 1904 | aynı | true | IBS 65 s.4 · 1929 sonrası Bolivya–Peru sınırı oldu |
| d1923-cl-pe-1 | şili · peru — Tacna-Arica kuzey idare hattı | **fiili** | Ancón 20 Eki 1883 (onay 28 Mar 1884) — halkoylaması yapılmadı · 20 Tem 1922 Washington protokolü | yok | true | IBS 65 s.4 · fiilî hat Sama nehri, **Tarata dahil** (Şili yorumu Chaspaya kolu) · Tarata 1 Eyl 1925'te Peru'ya · Lima 1929 Md.2 |
| d1923-bo-py-1 | bolivya · paraguay — Chaco Boreal | **D-YOK** | yok — Pinilla–Soler 1907 onaylanmadı, 1913 protokolü 1918'de ertelendi | 1939 | true | IBS 165 s.8 · 1923 fiilî mevzi (kaleler) **bulunamadı** |
| d1923-br-py-1 | brezilya · paraguay — Iguazú ağzı–Apa ağzı | **D** | Loizaga–Cotegipe 9 Oca 1872 (onay 26 Mar 1872) | 14 Kas 1874'te tamam | false | IRELAND-SA 121–123 |
| d1923-br-py-2 | aynı — Paraguay nehri, Apa–Bahía Negra | **D-YOK** | antlaşmayla tanımsız; batı kıyısını Bolivya da istiyordu | 1938 sonrası | true | 21 May 1927 (onay 25 Kas 1929) |

### 3.6 GÜNEY KONİSİ (Río de la Plata havzası · Patagonya)

| id | taraflar | kat | dayanak | tahdit | değ. | kaynak · not |
|---|---|---|---|---|---|---|
| d1923-ar-cl-1 | arjantin · şili — genel hat (Palena dışı, Ateş Toprakları meridyeni dahil) | C | 1855 · 1881 · 1893 · 1896 · 1902 Genel Tahkim · 20 Kas 1902 İngiliz kararı | direkler "spaced, however, rather far apart"; **yıl yok** | null | IBS 101 s.4 · IBS yalnız Palena'yı anlatıyor · Beagle (1984) / Laguna del Desierto (1994) / Buzul sahası ⚪ kaynaksız |
| d1923-ar-cl-2 | aynı — Palena–California (16–17 numaralı direkler) | C | 1902 raporu §22 | yalnız iki direk, arası ~24 mil | true | IBS 101 · 9 Ara 1966 II. Elizabeth kararı |
| d1923-ar-bo-1 | arjantin · bolivya — Zapaleri–La Quiaca–Bermejo (dağ) | C | 10 May 1889 + 1891 (onay 10 Mar 1893) Md.I | 1894–1939 arası; 1923'teki durumu **bulunamadı** | true | IBS 162 s.5 · 9 Tem 1925 (onay 11 Eki 1938) |
| d1923-ar-bo-2 | aynı — Bermejo, Tarija ve Itau nehirleri | C | 1889/1891 Md.I "by the waters of" | yok | null | IBS 162 · talveg mi, orta hat mı, kıyı mı: **bulunamadı** |
| d1923-ar-bo-3 | aynı — 22. paralel (Yacuiba) | C | 1888 · 1889/1891 Md.I | yok | true | IBS 162 s.6 · 1925/38'de Yacuiba üçgeni Bolivya'ya |
| d1923-ar-bo-4 | aynı — Pilcomayo, D'Orbigny–Esmeralda | **D-YOK** | yok | 1940 | true | IBS 162 · 1941 protokolü (onay 1956) |
| d1923-ar-py-1 | arjantin · paraguay — Paraná + Paraguay nehirleri | **D** | 3 Şub 1876 Md.1–3 (onay 13 Eyl 1876) — ana akımın orta kanalı; adalar sayılı | nehir hattı, antlaşmayla tanımlı | false | IBS 166 s.5 · "affords the present delimitation" |
| d1923-ar-py-2 | aynı — Pilcomayo: ağız–Salto Palmar ve Horqueta–Esmeralda | C | 1876 Md.2 · 12 Kas 1878 Hayes kararı · 1905 · 1907 | 1939'a kadar işlem yok | true | IBS 166 s.4 · 5 Tem 1939 · IBS'te onay tarihi imzadan önce görünüyor (metin hatası) |
| d1923-ar-py-3 | aynı — Salto Palmar–Horqueta bataklığı | **D-YOK** | Hayes 1878 — sabit akarsu yok | 1945 sonrası | true | IBS 166 · 1 Haz 1945 |
| d1923-ar-uy-1 | arjantin · uruguay — Uruguay nehri + Río de la Plata | **D-YOK** | yürürlükte antlaşma yok (1916 ada antlaşması onaylanmadı) | yok | true | IBS 68 s.3 · 1961 (yürürlük 1966) · 1973 · Martín García 1923 durumu **bulunamadı** |
| d1923-ar-br-1 | arjantin · brezilya — Pepirí-Guazú · Iguazú · Uruguay | **D** | 5 Şub 1895 Cleveland kararı · 6 Eki 1898 (onay 26 May 1900) · 4 Eki 1910 | 1900–04 | false | IBS 168 s.7 |
| d1923-ar-br-2 | aynı — Quaraí ağzı / Brasilera Adası kesimi | **D** | 1898 Md.I · 4 Nis 1901 işaretleri | 1901 | true | IBS 168 · 27 Ara 1927 (onay 9 Tem 1941): hat ada ile sağ kıyı arasına alındı |
| d1923-br-uy-1 | brezilya · uruguay — Chuy–San Miguel | **D** | 15 May 1852 · 22 Nis 1853 protokolü | 1853 | true (küçük) | IBS 170 s.4 · 1972 notaları ağzı sabitledi |
| d1923-br-uy-2 | aynı — Arroio São Miguel | C | 7 May 1913 Md.I (orta hat) | yok | false | IBS 170 · onay tarihi **bulunamadı** ⇒ 1923 yürürlüğü ⚪ |
| d1923-br-uy-3 | aynı — Merín Gölü · Yaguarón · Mina | C | 30 Eki 1909 Md.III–IV | 1853 işaretleri; kara kesimleri 1920–35 | false | IBS 170 s.5 |
| d1923-br-uy-4 | aynı — Mina–Río Negro–Santa Ana–Haedo | C | 12 Eki 1851 | 1920–35 ⇒ 1923'te **yarım** | false | IBS 170 s.4 |
| d1923-br-uy-5 | aynı — Arroyo de la Invernada (Rincón de Artigas) | **D-YOK** | 1851 — iki taraf farklı okuyor; 1856 kararı onaylanmadı | yok | false | IBS 170 s.6 · 1979'da da çözülmemişti |
| d1923-br-uy-6 | aynı — Cuareim ağzı / Brasilera Adası | C | 1851: ağızdaki adalar Brezilya'nın | yok | false | IBS 170 s.7 · Uruguay itirazı 1940 tarihli ⇒ 1923'te tartışma var mıydı **bulunamadı** |

## 4. AŞAMA ② İÇİN PLAN (SEMA-D ilanından SONRA)

```
① degisti:false  (24)   → D-GEOARAC'ın veri-kaynak/d_bugunku_sinirlar.geojson çift çizgisi (ISO3-ISO3)
                          İSTİSNA: ing. honduras (BLZ), guyanalar (GUY/SUR/GUF) 1923 kimlikleriyle eşlenir
② degisti:true   (36)   → kendi çizim: kaynaktaki nokta listesinden (IBS'lerin "boundary description"
                          bölümleri çoğu parçada nokta/koordinat veriyor) — öncelik:
                          Kanal Bölgesi (1914 koordinatlı) · Şili–Peru Sama hattı · Bolivya–Şili 1904 kesimleri ·
                          Kolombiya–Brezilya 1907 · Arjantin–Bolivya 1889
③ degisti:null   (18)   → ölç: 1923 hattı ile bugünkü hat arasında bir antlaşma var mı; yoksa false'a çek
④ D-YOK          (17)   → yalnız kutu (hat:null)
⑤ fiili           (4)   → kolombiya–peru ve guyanalar alt kesiminin ÇİZİMİ kaynakta yok ⇒ çizilemezse D-YOK'a düşer
⑥ künyesiz 12 parça     → D-KUNYE künyeleri gelmeden yazılmaz
```

## 5. BULUNAMADI / AÇIK

1. **Honduras–El Salvador** — IBS yok, bu turda kaynak okunmadı. Bilinen (kaynaksız): 1980 barış antlaşması ve 1992 Uluslararası Adalet Divanı kararı ⇒ 1923'te büyük olasılıkla D-YOK. **Ölçülmedi.**
2. Guatemala'nın Belize iddiası (1859 antlaşmasını geçersiz sayma) 1923'te var mıydı — IBS 8 söylemiyor.
3. Kosta Rika–Panama'da Pasifik kesimi: 1921 Coto çatışması kaynaksız hatıra; D-YOK tüm hat için yazıldı.
4. Brezilya'nın işaretleme bitiş tarihleri (Itamaraty sayfaları CAPTCHA'lı, açılmadı).
5. Kolombiya–Peru 1911 statüko hattının çizimi · Bolivya–Paraguay 1923 kale hattı · Chamizal fiilî idaresi.
6. Kolombiya–Venezuela 1941 antlaşması yalnız arama özetinde (SUIN açılmadı).
7. Brezilya–Fransız Guyanası işaretlemesinde kaynaklar ÇELİŞİYOR (AFDI 1956 ↔ Ireland 1938) — bildirildi, taraf seçilmedi.

📌 Atlasın 1923 çıktısı hiçbir satırda dayanak olarak kullanılmadı (CLAUDE.md §4).

## 6. VERİ — ADIM 0 · ADIM 1 · ADIM 2 G1 · ADIM 3 (16 Eylül akşamı, `GERIYE-SARMA-0916.md`)

Üretici `denetim/ARAC-D5AM-URET-0916.py` → `data/d_sinirlar_amerika.js` (`window.D_SINIRLAR_AMERIKA`).
```
kayıt 68   sinif: E 16 · C 15 · YOK 37 · D 0 · F 0      hat toplamı ~20.944 km
degisti    true 34 · false 24 · null 10
```
**78 envanter parçası → 68 kayıt; niçin fark var:**
- Bir çiftin alt kesimleri farklı sınıftaysa ve kesim noktasının koordinatı elimde yoksa çift TEK kayıt olarak yazıldı, sınıfı alt kesimlerin EN DÜŞÜĞÜ. Not alanı daha yüksek sınıflı kesimi söylüyor. Bu çiftler: Guatemala–İng. Honduras · Guyana–Venezuela · Venezuela–Brezilya · Brezilya–Peru · Bolivya–Peru · Brezilya–Uruguay.
- Kesim noktası gerektiğinde, antlaşmanın adını verdiği yerin **GeoNames** konumu kullanıldı: Portillo de Teotecacinte · Apaporis ağzı · Apa ağzı · Pilcomayo ağzı · Olca/Paroma/Chipapa · Patalani/Irpa/Sillajhuay · Tolacollo (1904 hattının 96. noktası) · Masoller. Brasilera kutusunun merkezi NE üçlü noktası. Bu konumlar sınırın dayanağı değil, yalnız yer göstergesi.
- Bugünkü çizgi yalnız `degisti:false` olan parçalarda ya da not alanına yazılmış **ölçek altı** değişiklikte kullanıldı. Bu ikinci durum üç kayıtta var: Kanada–ABD 1925 düz paralel · Venezuela–Brezilya 1928 koordinat düzeltmeleri · Brezilya–İng. Guyanası 1926 Tacutu düzeltmesi. `degisti:null` olan parçalar kutu olarak yazıldı; tek istisna 141. meridyen, çünkü geometrisi antlaşma metninin kendisinden geliyor.
- `d1923-br-pe-tabatinga-apaporis` kaydında hattın yeri değişmedi, değişen **taraf**: 1928'den sonra bu hat Brezilya–Kolombiya sınırı oldu. Bu yüzden sol taraf testinde Peru yerine bugünkü Kolombiya poligonuna bakıldı.
- Sol taraf iki küçük parçada bulunamadı (`null`): Kanada–ABD 4 km · Guantánamo parça 2.
- **D (fiilî kesin) 0:** envanterdeki dört fiilî hattın hiçbirinin 1923 koordinatı kaynakta yok (Guatemala–El Salvador · Kolombiya–Peru 1911 statükosu · Şili–Peru Sama hattı · Guyanalar alt kesimi). Bunlar YOK olarak yazıldı ve `sinif_not` alanına "FİİLİ (D adayı)" dendi.
- **F 0:** `denetim/TANINMA-1923-0916.json` henüz yok, bu yüzden E yazıldı (`sinif_not`).
- **Borç — Kanal Bölgesi:** 1914 sözleşmesi koordinat veriyor (FRUS 1915 d1732), ama hat bu turda çizilmedi; kayıt YOK, `sinif_not` "hukuken E".

**ADIM 2 G1 (1918-11-11 → 1923-10-29): yeni hat kaydı 0.** Bu pencerede Amerika'da hiçbir E/F/D hattı değişmedi. Yalnız iki belge var ve ikisi de C düzeyinde: Thomson–Urrutia onayı (1 Mar 1922) ve İsviçre Federal Konseyi kararı (24 Mar 1922). Her kaydın `f`'i hattın gerçek başlangıcıdır: kaynak günü ile iki tarafın künye `f`'inden BÜYÜĞÜ. Künye günü devralınan kayıtlar not alanında belirtildi.
**ADIM 3: kronoloji maddesi 0**, bu yüzden `data/kronoloji_sinir_amerika.js` yazılmadı. G1 penceresinde E/F/D değişikliği yok; şartname C değişikliğine madde istemiyor.
**G2 (1914-07-28 → 1918-11-11): yeni hat kaydı 0 · kronoloji maddesi 1.**
Kayıtların arasında bu pencerede başlayan tek E hattı `d1923-co-ec` (Muñoz Vernaza–Suárez; onaylar 26 Oca 1917'de değiş tokuş edildi, Ireland s.184). Öncesinde hukukî hat yok; kural gereği öncül kayıt yazılmadı, harita orada A/B'ye düşer. Pencereden madde almayanlar:
- Kanal Bölgesi 1914 sözleşmesi (yürürlük 11 Şub 1915): hukuken E ama hattı çizilmedi, kayıt YOK.
- Hollanda–Fransız Guyanası 1915 sözleşmesi: YOK kutusunun içinde.
- 1914 White kararı (Kosta Rika–Panama): Panama reddetti, hat değişmedi.

G1 maddeleri: G1'de madde **0**, bu yüzden dosya o turda yazılmamıştı (M-4111). `data/kronoloji_sinir_amerika.js` G2 ile birlikte yazıldı (1 madde) → `window.KRONOLOJI_SINIR_AMERIKA`.
**G3 (1878-07-13 → 1914-07-28): yeni hat kaydı 4 (E 3 · C 1) · kronoloji maddesi 5.**
- Pencerede başlayan E hatları: `mx-gt` 27 Eyl 1882 (IBS 159) · `br-py` ve `br-pe-tabatinga` 15 Kas 1889 · `hn-ni-bati` 24 Ara 1896 (IBS 36, onayların değiş tokuşu) · `ar-br` 26 May 1900 (IBS 168, onayların değiş tokuşu).
- **Öncül kayıtlar:** yalnız 1889 hatlarının öncülü var, çünkü hat değişmedi, taraf değişti (Brezilya İmparatorluğu). `g3-br-imp-py` (1872-03-26 → 1889-11-15, E, 2 parça) · `g3-br-imp-pe-tabatinga-apaporis` (1852-10-18 → 1889-11-15, E) · `g3-ve-br-imp` (1859-01-01 → 1889-11-15, C; IBS yalnız yıl veriyor). 1889 günü: Library of Congress, *Brazil–U.S. Relations: First Republic*. TDV `brezilya` slug'ı ölü (302); `amerika` maddesi 1889'u anmıyor.
- mx-gt · hn-ni · ar-br öncesinde hukuken kesin hat yok; kural gereği öncül yazılmadı. Nedenleri: Chiapas iddiası · 1888 geçici sözleşmesi · Misiones anlaşmazlığı. 1895 Cleveland kararı yalnız Misiones kesimini karara bağladı ve o kesimin koordinatı elde yok.
- `d1923-ve-br` dayanağındaki kaynaksız "1859-05-05" günü **1859-01-01**'e çekildi.
- Veri: 72 kayıt (E 19 · C 16 · YOK 37), degisti true 36 · false 26 · null 10.

**G4 (1815-06-09 → 1878-07-13): yeni hat kaydı 7 (hepsi E) · kronoloji maddesi 16.**
- **Kanada 1867'de sınırın tamamına komşu değildi.** Canadian Encyclopedia'ya göre Rupert's Land ile Kuzey-Batı Toprakları 15 Tem 1870'te, Britanya Kolumbiyası 20 Tem 1871'de Kanada'ya katıldı. Bu yüzden eski `d1923-ca-us-ana` kaydı üç kuşağa bölündü:
  - `-dogu` (1867-07-01),
  - `-prairie` (1870-07-15),
  - `-bati` (1871-07-20).
  Kuşak sınırları LoW NW açısı (−95,153) ile Kıta Su Ayrımı'dır (−114,07, TAHMİNİ). `d1923-ca-us-141` kaydının f'i de 1867-07-01'den **1870-07-15**'e düzeltildi.
- **Öncüller (taraf `ingiliz-kuzey-amerika`):**
  - `g4-bna-us-dogu` 1842→1867 (Webster–Ashburton),
  - `g4-bna-us-prairie` 1818→1870 (1818 Sözleşmesi),
  - `g4-bna-us-bati` 1846→1871 (Oregon),
  - `g4-bna-rus-141` 1825-02-28→1867-10-18 (Rus Alaskası),
  - `g4-bna-us-141` 1867-10-18→1870-07-15.
  Kaynak: IBC, ABD Dışişleri Office of the Historian, RIAA XV. 1818, 1842 ve 1846 için IBC yalnız YIL veriyor, bu yüzden f alanları `YYYY-01-01` biçiminde.
- **ABD–Meksika kara hattı iki kayda ayrıldı:**
  - `-kaliforniya`: 1848-05-30 (Guadalupe Hidalgo onay teatisi, Avalon). Gadsden md. I bu hattı "aynen" korudu.
  - `-gadsden`: 1854-06-30 (onay teatisi, Avalon). Önceki kayıttaki kaynaksız "1853-12-30 yürürlük" varsayımı düzeltildi.
  - 1848–1854 arasındaki Gila hattının geometrisi elde yok, bu yüzden öncül yazılmadı.
- **Öncül yazılmayanlar:** 1842 öncesi Maine (tartışmalıydı) · 1846 öncesi Oregon (ortak kullanım) · 1819 Adams–Onís hattı (geometri yok) · Bolivya–Şili 1866/1874 24°G hattı (doğu ucu belirsiz, kaynak okunmadı).
- Veri: 79 kayıt (E 26 · C 16 · YOK 37). Kronoloji toplamı 21 madde; hepsi var olan bir kayda bağlı.

**G5 (1815-06-09 → 1774-07-21) · G6 (→ 1699-01-26) · G7 (→ 1606-11-11): yeni hat 0 · kronoloji maddesi 0.**
Bu pencerelerde Amerika'da, geometrisi kaynakla kurulabilen bir E/F/D hat başlangıcı YOK:
- **1783 Paris Antlaşması (İng. Kuzey Amerikası–ABD).** IBC hattı ad ad tarif ediyor (St. Croix → Lake of the Woods → Mississippi). Ama hangi kesimin 1842'ye kadar kesin olduğunu kesim kesim vermiyor. Maine kesimi 1842'ye kadar tartışmalıydı. Göller kesimini kesinleştiren 1822 komisyon kararı okunan kaynakta yok ⇒ kesim noktası ve tarih uydurulmadan yazılamaz.
- **1795 Pinckney (ABD–İspanya, 31°K) · 1763 Paris (Mississippi hattı) · 1819 Adams–Onís.** Bugünkü ülke sınırı değiller, NE 10m'de karşılıkları yok ⇒ geometri yok.
- **1777 San Ildefonso (İspanya–Portekiz, Güney Amerika).** Kaba (C) ve geometrisi yok. 1750 Madrid Antlaşması 1761'de iptal edildi.
- **1648 Concordia (Saint-Martin).** Hat tanımsız (kayıt zaten YOK).
- **Haiti bağımsızlığı (1804).** Adada çizilmiş bir hat yok (Haiti–Dominik için ilk etkili belge 1929, IBS 5).
⇒ Kural gereği ("kesin değilse kayıt YAZILMAZ; harita orada A/B'ye düşer") üç dalgada da kayıt ve madde çıkmadı.

**Taslak künye:** 6 kimlik `devletler.js`te yok, `denetim/TASLAK-KUNYE-D-0916.json`dan alındı. 11 kayıt bu kimliklere bağlı (sayıldı).
