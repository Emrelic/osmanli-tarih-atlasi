# ODAK-VEKIL-1003 — kapının baskısıyla yazılmış VEKİL yer kayıtları

Koordinatör görevi (VEKİL-DUZELT-1003). `data/`ya YAZILMADI; ölçüm ve liste.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (D254)
Yazılış: 3 Ekim 2026, aracı koşturmadan önce. Evren: `data/kronoloji_cok_once1281_*.js` (7 dosya).
- KASA: ~97 vekil.
- Benim öngörüm: **toplam VEKİL 80–100**, ama İKİ alt kovada ayrışacak:
  `yer_id` vekili (olay yeri YALAN — veri kusuru) **~25–40** · `odak_yer` vekili (kamera vekili —
  app.js tanımı gereği "kamera buraya bakacak" alanı; kusur değil ama "atlasta yok" durumunu
  GİZLİYOR) **~50–65**. Gerekçe: örneklemde (iran/avrupa ilk 12'şer) `odak_yer` dolu maddelerin
  çoğu `yer` metninden farklı bir şehir gösteriyor (Gnezno→Poznan, Prespa→Ohri), `yer_id`
  doluların çoğu ise `yer` ile aynı (Buhara, Musul, Halep).
- Ayrışırsa fark bilgidir; aşağıda ölçüm.

## 1. ÖLÇÜM — ve öngörüyle FARK
Alet: `denetim/ARAC-ODAK-VEKIL-1003.py` (yalnız okur) + el okuması (sınırlar §5'te).
Evren: 7 dosya · 849 alan değeri (`yer_id` 485 · `odak_yer` 364) · 773 madde.

```
                     yer_id   odak_yer   madde
TUTUYOR                 447         82
EŞANLAM (aynı yer)       26          6     (Şam↔Dımaşk · Urfa↔Şanlıurfa · Valensiya↔Belensiye …)
MEŞRU (bölge/ırmak)       4        139
VEKİL                     3        134      128 madde
YANLIŞ-ÇÖZÜM              2          —      (havuzda ÇÖZÜLÜYOR ama başka kıtaya/ülkeye)
ÖLÇÜLEMEDİ (`yer` boş)    3          3
```
🔴 **Öngörü ile FARK (bilgi):**
- `yer_id` VEKİL öngörüm 25–40'tı, ölçüm **3** — öngörü YANLIŞ. `yer_id` yazarları kapıyı
  vekil yer_id ile değil, **`odak_yer`e kaçarak** susturmuş. Ham alet `yer_id`de 30 "VEKİL-YOK"
  verdi; 26'sı **eşanlam** çıktı (Derbend/Derbent, Sana/San‘a, Şam/Dımaşk …) — alet tam kelime
  arıyor, eşanlam sözlüğü yok (`D215`). Yani ham sayı ~10 kat şişikti.
- `odak_yer` VEKİL öngörüm 50–65'ti, ölçüm **134 değer / 128 madde** — öngörünün iki katı.
- KASA ~97 dedi, ben **128 madde / 137 değer** (3 + 134). Fark büyük olasılıkla tanım farkı:
  ben `odak_yer` dizisindeki HER değeri ve muharebe sahası → komşu şehir vakalarını
  (Hastings→Londra) VEKİL saydım; ırmak/ova/bölge yazan metni MEŞRU saydım (görev tanımı).
  KASA'nın listesi elimde değil; kesişimi çıkarmak için onun kümesi gerekir.

## 2. 🔴 `yer_id` VEKİL — 3 kayıt (olay yeri YANLIŞ — veri kusuru)
Hepsi `kronoloji_cok_once1281_anadolu.js`. Kaynak cümleleri maddenin KENDİ `alinti` alanından:

| # | t | yazılı | olması gereken | kaynak cümlesi (madde `alinti`) | not |
|---|---|---|---|---|---|
| 55 | 1108-01-01 | `Antakya` | **boş** (yemin yeri kaynakta yok) — ya da kuşatma yeri `"Draç"` (havuzda ✓) | TDV `haclilar`: "1108’de imparatora Antakya için vasallık yemini etmeye mecbur kaldı" | Antakya yeminin KONUSU, yeri değil. `yer` "Durrës" kuşatmayı söylüyor; havuzda **"Draç"** adıyla VAR. Yemin yeri (Devol) kaynakta yok ⇒ 🟡 ŞÜPHELİ |
| 90 | 1151-01-01 | `Urfa` | `yer_id` boş + `odak_yer` = alıntıdaki havuz şehirleri | TDV `haclilar`: "1151’de Râvendân ve Tel Bâşir Nûreddin, Ayıntab ve Dülûk Mesud, Samsat ve Birecik Artuklu Beyi Timurtaş tarafından zaptedildi" | çok yerli olay; `yer` "Tilbaşar" ama alıntı 6 yer sayıyor. Urfa kontluğun ADI, olayın yeri değil |
| 152 | 1254-11-03 | `İznik` | **Nymphaion (Kemalpaşa, İzmir)** — atlasta YOK | Britannica: "died November 3, 1254, Nymphaion [modern Kemalpaşa, Turkey]" | 🔴 TUZAK: havuzda `"Kirmasti (M.Kemalpaşa)"` var — Bursa'nın **Mustafakemalpaşa**sı, İzmir Kemalpaşa'sı DEĞİL. Alt dizgi "Kemalpaşa" onu verir |

## 3. 🔴 YANLIŞ-ÇÖZÜM — 2 kayıt (D256 ailesi; kapı "çözüldü ✓" diyor)
| dosya | # | yazılı | `adKonumBul` nereye çözüyor | olması gereken |
|---|---|---|---|---|
| avrupa | 200 | `yer_id:"Cáceres"` (1229, IX. Alfonso) | **"Cáceres (São Luís de Cáceres)" −16.08/−57.68 — BREZİLYA** (`" ("` çekirdeği; havuzdaki ilk ve İSPANYOL olmayan tek eş — öteki eş "Barinas (Altamira de Cáceres)" Venezuela) | İspanya Cáceres atlasta YOK ⇒ `yer_id` boş + nokta açma listesi. **KASA'nın aday bulgusu DOĞRULANDI.** |
| ortadogu | 86 | `yer_id:"Trablus"` | **"Trablus" 32.90/13.19 — LİBYA (Trablusgarp)** | `yer` "Trablus Kontluğu toprakları" = Lübnan Trablus'u ⇒ havuzda **"Trablusşam"** VAR (ucuz düzeltme) |
⚠️ Karşı örnek (doğru çözüm, YANLIŞ ALARM olmasın): avrupa #116 `Trablus` · `yer` "Trablusgarp" — Libya'ya çözülmesi DOĞRU.
📌 Aynı aileden ölçülen ama zararsız: `Roma` (havuzda Roma + "Roma (Queensland)") ve `York`
(York + "New Amsterdam (New York)") — ilk eşleşme Avrupa'daki doğru nokta (sıra varsayımı §5).

## 4. `odak_yer` VEKİL — 134 değer / 128 madde
`odak_yer` app.js'te "kamera buraya bakacak" alanıdır (olay yeri iddiası DEĞİL); yine de
"atlasta yok" durumunu GİZLİYOR ve kamerayı saha yerine komşu şehre götürüyor (Hastings→Londra
~90 km · Rey→Tahran · Malazgirt→Erciş/Bitlis · Gnezno→Poznan · Alamut→Kazvin ×5).
**Ucuz düzeltme — doğru yer HAVUZDA VAR (2):**
- avrupa #38, #192 `Budin` → **"İstolni Belgrad"** (= Székesfehérvár; havuzda bu adla, 47.19/18.41)

🔴 **Aletin "havuzda var" dediği iki aday ELLE ÇÜRÜTÜLDÜ — ikisi de yanlış-çözüm tuzağı:**
- avrupa #42 `Kotor` · `yer` "Bar" (Karadağ) → havuzdaki tek "Bar" **"Bar (Podolya)" — UKRAYNA**
  (49.07/27.67). `odak_yer:"Bar"` yazılsa kamera Adriyatik'ten Ukrayna'ya gider.
- avrupa #61 `Ypres` · `yer` "Cassel (Kassel, Flandre)" → havuzda "Cassel" YOK; aletin eşlediği parça
  "Kassel" — **ALMANYA** (51.31/9.49). Flandre'deki Cassel atlasta yok.
⇒ Bu iki kayıt VEKİL kalır (doğru yer atlasta yok). Ders: alt parça eşleşmesi "havuzda var"ı
kanıtlamaz; `D256`nın ÜÇÜNCÜ ve DÖRDÜNCÜ örneği bu raporun kendi aletinden çıktı.

Kalan 132: doğru yer atlasta YOK ⇒ ya nokta açılır ya alan "atlasta yok" diye beyan edilir
(M-5724'teki `ic_not_yer` deseni) — hüküm koordinatörün.

dosya dağılımı: avrupa 74 · iran 40 · doğu asya 19 · afrika 1.

## 5. Yöntem sınırları (ölçülemeyen/varsayılan)
- **Sıra varsayımı:** `adKonumBul` İLK eşleşmeyi döndürür; havuz sırası `girdi.yukle()` sırasıyla
  taklit edildi (önce d/v/s taşıyanlar, sonra kalanlar). `index.html` yükleme sırası farklıysa
  çok eşli adlarda (Roma, York, Cáceres) sonuç değişebilir — Cáceres'in iki eşinin İKİSİ de
  Amerika'da olduğu için o hüküm sıradan bağımsız.
- **Eşanlam ve MEŞRU sınırı el okumasıdır** (aletin `BOLGE_KELIME` ve betik içi listeler);
  MEŞRU'ya giden ırmak/ova/çok-yerli metinler görev tanımına göre kabul edildi. Tartışmalı
  sınır: muharebe sahası bir dağ/ada/geçit adıyla anılıyorsa (Belasitsa, Lyø, Rhydwhyman)
  VEKİL saydım — saha belirli bir noktadır.
- **Kaynak cümlesi:** `yer_id` VEKİL'lerinde maddenin kendi `alinti`/`kaynak` alanından alındı
  (indirme yapılmadı). `odak_yer` tablosunda maddenin `kaynak` alanı verildi.
- **"Senin bitirdiğin dosyalar":** o dosyalarda serbest `yer` metni yok ⇒ bu alet orada
  ÖLÇEMEZ (evren 0 ≠ temiz). Oralarda yazdığım her öneri kaynak cümlesiyle verildiği için
  vekil üretmedi; koordinatörün uyguladığı 39 kalem o raporlarda tek tek listeli.

## 6. Ek tablo — `odak_yer` VEKİL listesi (134)
| dosya | # | t | yazılı (`odak_yer`) | `yer` metni (olması gereken) | havuzda mı | maddenin kaynağı |
|---|---|---|---|---|---|---|
| afrika | 34 | 1052-04-14 | Gabes | Hayderan (Kābis ile Kayrevan arası) | yok | TDV: ziriler — '11 Zilhicce 443’te (14 Nisan 1052) Kābis ile Kayrevan  |
| avrupa | 2 | 1000-01-01 | Poznan | Gnezno | yok | Store norske leksikon — 'Polens historie' — https://snl.no/Polens_hist |
| avrupa | 11 | 1014-01-01 | Serez | Belasitsa dağı, Strumitsa yakını | yok | TDV — 'BULGARİSTAN' — https://islamansiklopedisi.org.tr/bulgaristan —  |
| avrupa | 13 | 1014-10-06 | Ohri | Prespa | yok | Hrvatska enciklopedija — 'Samuilo' — https://www.enciklopedija.hr/clan |
| avrupa | 15 | 1016-01-01 | Newcastle | Carham (Tweed kıyısı) | yok | Encyclopaedia Britannica — 'Malcolm II' — https://www.britannica.com/b |
| avrupa | 18 | 1016-10-18 | Londra | Ashingdon (Essex) | yok | Encyclopaedia Britannica — 'Canute (I)' — https://www.britannica.com/b |
| avrupa | 22 | 1019-01-01 | Kiev | Alta ırmağı (Pereyaslav yakını) | yok | Encyclopedia of Ukraine — 'Yaroslav the Wise' — https://www.encycloped |
| avrupa | 24 | 1024-09-04 | Mainz | Kamba (Oppenheim karşısı, Ren) | yok | Deutsche Biographie (NDB) — 'Konrad II. (Salier)' — https://www.deutsc |
| avrupa | 25 | 1025-01-01 | Poznan | Gnezno | yok | Store norske leksikon — 'Polens historie' — https://snl.no/Polens_hist |
| avrupa | 28 | 1030-07-29 | Trondheim | Stiklestad (Verdal, Trøndelag) | yok | Store norske leksikon — 'Slaget på Stiklestad' — https://snl.no/Slaget |
| avrupa | 30 | 1031-07-20 | Paris | Melun | yok | Encyclopaedia Britannica — 'Robert II (king of France)' — https://www. |
| avrupa | 31 | 1032-09-06 | Lyon | Arles / Vienne | yok | Encyclopaedia Britannica — 'Conrad II' — https://www.britannica.com/bi |
| avrupa | 37 | 1037-01-01 | Burgos | Tamarón vadisi | yok | Gran Enciclopèdia Catalana — 'Ferran I de Castella' — https://www.enci |
| avrupa | 38 | 1038-01-01 | Budin | Székesfehérvár | ✓ `İstolni Belgrad` | TDV İslâm Ansiklopedisi — 'MACARİSTAN' — https://islamansiklopedisi.or |
| avrupa | 42 | 1042-01-01 | Kotor | Bar | yok — 🔴 havuzdaki "Bar" = Podolya/Ukrayna | Hrvatska enciklopedija — 'Vojislav, Stefan' — https://www.enciklopedij |
| avrupa | 50 | 1060-08-04 | Orléans | Vitry-aux-Loges | yok | Encyclopaedia Britannica — 'Henry I (king of France)' — https://www.br |
| avrupa | 52 | 1063-01-01 | Palermo | Cerami | yok | Treccani Enciclopedia on line — 'Ruggero I conte di Sicilia' — https:/ |
| avrupa | 56 | 1066-10-14 | Londra | Hastings (Sussex) | yok | Encyclopaedia Britannica — 'Battle of Hastings' — https://www.britanni |
| avrupa | 58 | 1068-01-01 | Palermo | Misilmeri | yok | Treccani Enciclopedia on line — 'Ruggero I conte di Sicilia' — https:/ |
| avrupa | 61 | 1071-02-22 | Ypres | Cassel (Kassel, Flandre) | yok — 🔴 havuzdaki "Kassel" = Almanya | Encyclopaedia Britannica — 'Robert I (count of Flanders)' — https://ww |
| avrupa | 65 | 1075-01-01 | Split | Solin | yok | Hrvatska enciklopedija — 'Zvonimir' — https://www.enciklopedija.hr/cla |
| avrupa | 74 | 1086-06-30 | Cebelitarık | Cezîretülhadrâ (Algeciras) | yok | TDV İslâm Ansiklopedisi — 'ZELLÂKA SAVAŞI' — https://islamansiklopedis |
| avrupa | 76 | 1086-10-23 | Badajoz | Zellâka (Sagrajas), Batalyevs yakını | yok | TDV İslâm Ansiklopedisi — 'ZELLÂKA SAVAŞI' — https://islamansiklopedis |
| avrupa | 84 | 1097-01-01 | Zagreb | Gvozd dağı (Petrova gora) | yok | Hrvatska enciklopedija — 'Koloman' — https://www.enciklopedija.hr/clan |
| avrupa | 85 | 1097-01-01 | Çernigov | Lyubeç | yok | Encyclopedia of Ukraine — 'Liubech congress of princes' — https://www. |
| avrupa | 88 | 1101-01-01 | Göteborg | Konghelle (Kungälv) | yok | Store norske leksikon — 'Konghelle' — https://snl.no/Konghelle — alınt |
| avrupa | 89 | 1102-01-01 | Zadar | Biograd na Moru | yok | Hrvatska enciklopedija — 'Koloman' — https://www.enciklopedija.hr/clan |
| avrupa | 92 | 1106-09-28 | Caen | Tinchebrai (Normandiya) | yok | Encyclopaedia Britannica — 'Robert II (duke of Normandy)' — https://ww |
| avrupa | 93 | 1108-01-01 | Cuenca | Uklîş (Uclés) | yok | TDV İslâm Ansiklopedisi — 'MURÂBITLAR' — https://islamansiklopedisi.or |
| avrupa | 94 | 1108-07-30 | Paris | Melun | yok | Encyclopaedia Britannica — 'Philip I (king of France)' — https://www.b |
| avrupa | 96 | 1111-01-01 | Girona | Besalú | yok | Gran Enciclopèdia Catalana — 'comtat de Barcelona' — https://www.encic |
| avrupa | 101 | 1122-09-23 | Mainz | Worms | yok | Deutsche Biographie (NDB) — 'Heinrich V.' — https://www.deutsche-biogr |
| avrupa | 103 | 1127-01-01 | Milano | Como | yok | Treccani Enciclopedia on line — 'Milano' (Storia) — https://www.trecca |
| avrupa | 108 | 1137-01-01 | Lleida | Barbastro | yok | Gran Enciclopèdia Catalana — 'Ramir II d’Aragó' — https://www.enciclop |
| avrupa | 111 | 1138-03-07 | Mainz | Koblenz | yok | Deutsche Biographie (NDB) — 'Konrad III.' — https://www.deutsche-biogr |
| avrupa | 112 | 1139-01-01 | Napoli | Galluccio (Garigliano yakını) | yok | Treccani Enciclopedia on line — 'Ruggero II re di Sicilia' — https://w |
| avrupa | 114 | 1143-01-01 | León | Zamora | yok | TDV İslâm Ansiklopedisi — 'PORTEKİZ' — https://islamansiklopedisi.org. |
| avrupa | 127 | 1157-01-01 | Viborg | Grathe Hede (Jutland) | yok | Den Store Danske (lex.dk) — 'Valdemar den Store' — https://lex.dk/Vald |
| avrupa | 133 | 1167-01-01 | Bergamo | Pontida | yok | Treccani Enciclopedia on line — 'Federico I imperatore, detto il Barba |
| avrupa | 134 | 1168-06-15 | Stralsund | Arkona, Rügen adası | yok | Den Store Danske (lex.dk) — 'Arkona' — https://lex.dk/Arkona — alıntı: |
| avrupa | 141 | 1174-01-01 | Newcastle | Alnwick (Northumberland) / Falaise | yok | Encyclopaedia Britannica — 'William I (king of Scotland)' — https://ww |
| avrupa | 143 | 1175-01-01 | Londra | Windsor | yok | Dictionary of Irish Biography — 'Henry II' — https://www.dib.ie/biogra |
| avrupa | 144 | 1176-05-29 | Milano | Legnano | yok | Treccani Enciclopedia on line — 'Legnano' (Battaglia di L.) — https:// |
| avrupa | 151 | 1184-06-15 | Bergen | Fimreite (Sognefjord) | yok | Store norske leksikon — 'Sverre – norsk konge' — https://snl.no/Sverre |
| avrupa | 152 | 1186-01-01 | Linz | Georgenberg (Enns) | yok | Deutsche Biographie (NDB) — 'Leopold V.' — https://www.deutsche-biogra |
| avrupa | 157 | 1189-01-01 | Londra | Canterbury | yok | Encyclopaedia Britannica — 'Quitclaim of Canterbury' — https://www.bri |
| avrupa | 163 | 1195-01-01 | Bastia | Bonifacio (Korsika) | yok | Treccani Enciclopedia on line — 'Corsica' — https://www.treccani.it/en |
| avrupa | 164 | 1195-01-01 | Toledo | Erek (Alarcos), Kurtuba'nın kuzeyi | yok | TDV İslâm Ansiklopedisi — 'MUVAHHİDLER' — https://islamansiklopedisi.o |
| avrupa | 166 | 1196-01-01 | Yenipazar | Ras | yok | Hrvatska enciklopedija — 'Stefan Nemanja' — https://www.enciklopedija. |
| avrupa | 176 | 1209-07-22 | Narbonne | Béziers | yok | Encyclopaedia Britannica — 'Albigensian Crusade' — https://www.britann |
| avrupa | 184 | 1215-06-15 | Londra | Runnymede (Thames kıyısı) | yok | Encyclopaedia Britannica — 'Magna Carta' — https://www.britannica.com/ |
| avrupa | 186 | 1217-01-01 | Tartu | Viljandi (Fellin) | yok | Store norske leksikon — 'Estlands historie' — https://snl.no/Estlands_ |
| avrupa | 192 | 1222-01-01 | Budin | Székesfehérvár | ✓ `İstolni Belgrad` | TDV İslâm Ansiklopedisi — 'MACARİSTAN' — https://islamansiklopedisi.or |
| avrupa | 193 | 1223-01-01 | Odense | Lyø adası | yok | Den Store Danske (lex.dk) — 'Valdemar Sejr' — https://lex.dk/Valdemar_ |
| avrupa | 194 | 1223-07-14 | Paris | Mantes | yok | Encyclopaedia Britannica — 'Louis VIII' — https://www.britannica.com/b |
| avrupa | 195 | 1226-01-01 | Mantova | Mosio | yok | Treccani Enciclopedia on line — 'Lega lombarda' — https://www.treccani |
| avrupa | 198 | 1227-07-22 | Lübeck | Bornhöved (Holstein) | yok | Den Store Danske (lex.dk) — 'Bornhøved' — https://lex.dk/Bornh%C3%B8ve |
| avrupa | 210 | 1237-11-27 | Bergamo | Cortenuova | yok | Treccani Enciclopedia on line — 'Federico II imperatore' — https://www |
| avrupa | 218 | 1241-01-01 | Budin | Muhi, Şayó (Sajó) ırmağı | yok | TDV İslâm Ansiklopedisi — 'MACARİSTAN' — https://islamansiklopedisi.or |
| avrupa | 221 | 1241-09-23 | Reykjavík | Reykholt | yok | Store norske leksikon — 'Islands historie' — https://snl.no/Islands_hi |
| avrupa | 223 | 1244-01-01 | Valensiya | Almizra | yok | Gran Enciclopèdia Catalana — 'Jaume I de Catalunya-Aragó' — https://ww |
| avrupa | 229 | 1249-01-01 | Modena | Fossalta | yok | Treccani Enciclopedia on line — 'Federico II imperatore' — https://www |
| avrupa | 231 | 1249-09-27 | Montpellier | Millau | yok | Encyclopaedia Britannica — 'Raymond VII' — https://www.britannica.com/ |
| avrupa | 234 | 1250-12-13 | Foggia | Castel Fiorentino (Lucera yakını, Apulia) | yok | Deutsche Biographie (NDB) — 'Friedrich II. (Kaiser)' — https://www.deu |
| avrupa | 236 | 1252-01-01 | Uppsala | Stockholm | yok | Store norske leksikon — 'Stockholm' — https://snl.no/Stockholm — alınt |
| avrupa | 240 | 1254-05-21 | Foggia | Lavello (Potenza) | yok | Deutsche Biographie (NDB) — 'Konrad IV.' — https://www.deutsche-biogra |
| avrupa | 244 | 1260-01-01 | Viyana | Groißenbrunn/Kressenbrunn (Marchfeld) | yok | Deutsche Biographie (NDB) — 'Přemysl Otakar II.' — https://www.deutsch |
| avrupa | 245 | 1260-07-13 | Klaipėda | Durbe gölü (Kurland, bugün Liepāja ili) | yok | Visuotinė lietuvių enciklopedija — 'Durbės mūšis' — https://www.vle.lt |
| avrupa | 254 | 1266-02-26 | Napoli | Benevento | yok | Treccani Enciclopedia on line — 'Carlo I d'Angiò re di Sicilia' — http |
| avrupa | 256 | 1267-09-29 | Shrewsbury | Rhydwhyman geçidi (Montgomery) | yok | Royal Commission on the Ancient and Historical Monuments of Wales (RCA |
| avrupa | 257 | 1268-08-23 | Roma | Scurcola Marsicana (Tagliacozzo), Fucino havzası | yok | Treccani Enciclopedia on line — 'Corradino di Svevia' — https://www.tr |
| avrupa | 259 | 1270-02-16 | Pärnu | Karuse (Batı Estonya, donmuş Muhu boğazı) | yok | Visuotinė lietuvių enciklopedija — 'Karusės mūšis' — https://www.vle.l |
| avrupa | 264 | 1276-01-01 | Yenipazar | Ras | yok | Hrvatska enciklopedija — 'Nemanjići' — https://www.enciklopedija.hr/cl |
| avrupa | 269 | 1278-08-26 | Viyana | Dürnkrut ve Jedenspeigen (Marchfeld, Aşağı Avusturya) | yok | Deutsche Biographie (NDB) — 'Rudolf I. (Habsburg)' — https://www.deuts |
| avrupa | 270 | 1279-03-05 | Riga | Aizkraukle (Ascheraden), Letonya | yok | Visuotinė lietuvių enciklopedija — 'Aizkrauklės mūšis' — https://www.v |
| dogu_asya | 1 | 1005-01-01 | Anyang | Chanyuan (Puyang, Hebei) | yok | bulunamadı |
| dogu_asya | 2 | 1041-01-01 | Yinchuan | Haoshuichuan (Guyuan yöresi, Ningxia) | yok | bulunamadı |
| dogu_asya | 5 | 1077-01-01 | Hanoi | Như Nguyệt (Cầu nehri, Bắc Ninh) | yok | bulunamadı |
| dogu_asya | 6 | 1081-01-01 | Yinchuan | Lingzhou (Lingwu, Ningxia) | yok | bulunamadı |
| dogu_asya | 7 | 1114-01-01 | Cilin | Ningjiang (Songhua ırmağı, Jilin) | yok | bulunamadı |
| dogu_asya | 13 | 1161-01-01 | Nanking | Caishi (Ma'anshan, Anhui) | yok | bulunamadı |
| dogu_asya | 15 | 1211-01-01 | Kalgan | Yehuling (Zhangjiakou kuzeyi) | yok | bulunamadı |
| dogu_asya | 24 | 1259-01-01 | Çongqing | Diaoyu kalesi (Hezhou, Chongqing) | yok | TDV: kubilay-kagan (KUBİLAY KAĞAN) — '1259’da Mengü Kağan’ın vefatı üz |
| dogu_asya | 28 | 1019-01-01 | Ûicu | Gwiju (Kusong, Kuzey Pyongan) | yok | bulunamadı |
| dogu_asya | 44 | 1187-01-01 | Morioka | Hiraizumi | yok | Britannica, «Minamoto Yoshitsune» (britannica.com/biography/Minamoto-Y |
| dogu_asya | 44 | 1187-01-01 | Sendai | Hiraizumi | yok | Britannica, «Minamoto Yoshitsune» (britannica.com/biography/Minamoto-Y |
| dogu_asya | 49 | 1268-01-01 | Hakata | Dazaifu · Kamakura | yok | Britannica, «Hōjō Tokimune» (britannica.com/biography/Hojo-Tokimune):  |
| dogu_asya | 51 | 1005-01-01 | Ninh Binh | Hoa Lư | yok | bulunamadı |
| dogu_asya | 67 | 1030-01-01 | Batavia | Cibadak (Sukabumi, Batı Cava) | yok | bulunamadı |
| dogu_asya | 68 | 1037-01-01 | Surabaya | Kahuripan (Doğu Cava) | yok | Britannica, «Erlangga» (britannica.com/biography/Erlangga): «Military  |
| dogu_asya | 69 | 1268-01-01 | Malang | Singhasari (Tumapel) | yok | Britannica, «Kertanagara» (britannica.com/biography/Kertanagara): «Ker |
| dogu_asya | 70 | 1076-01-01 | Leh | Tholing (Ngari) | yok | bulunamadı |
| dogu_asya | 71 | 1247-01-01 | Lanzhou | Liangzhou (Wuwei, Gansu) | yok | bulunamadı |
| dogu_asya | 73 | 1280-01-01 | Lhasa | Sakya | yok | Britannica, «’Phags-pa» (britannica.com/biography/Phags-pa): «’Phags-p |
| iran | 7 | 1010-01-01 | Herat | Âhengerân (Gur) | yok | TDV: gurlular (GURLULAR) |
| iran | 7 | 1010-01-01 | Kâbil | Âhengerân (Gur) | yok | TDV: gurlular (GURLULAR) |
| iran | 8 | 1010-01-01 | Kasr-ı Şîrîn | Hulvân | yok | TDV: annaziler (ANNÂZÎLER) |
| iran | 9 | 1012-01-01 | Andican | Özkent | yok | TDV: karahanlilar (KARAHANLILAR) |
| iran | 13 | 1018-12-20 | Kanpûr | Kannevc (Kanauj) | yok | TDV: mahmud-i-gaznevi (MAHMÛD-ı GAZNEVÎ) |
| iran | 16 | 1029-01-01 | Tahran | Rey | yok | TDV: buveyhiler (BÜVEYHÎLER) |
| iran | 24 | 1035-01-01 | Nîşâbur | Hisâr-ı Tâk (Horasan) | yok | TDV: gazneliler (GAZNELİLER) |
| iran | 27 | 1038-01-01 | Tahran | Rey | yok | TDV: kakuyiler (KÂKÛYÎLER) |
| iran | 31 | 1042-01-01 | Zencan | Târum | yok | TDV: musafiriler (MÜSÂFİRÎLER) |
| iran | 32 | 1046-01-01 | Kirmanşah | Sîrvân Kalesi | yok | TDV: annaziler (ANNÂZÎLER) |
| iran | 34 | 1047-01-01 | Kasr-ı Şîrîn | Bendenîcîn / Diz-i Mâhkî | yok | TDV: annaziler (ANNÂZÎLER) |
| iran | 34 | 1047-01-01 | Kirmanşah | Bendenîcîn / Diz-i Mâhkî | yok | TDV: annaziler (ANNÂZÎLER) |
| iran | 42 | 1059-01-01 | Balasagun | Barsgan | yok | TDV: karahanlilar (KARAHANLILAR) |
| iran | 45 | 1063-09-04 | Tahran | Rey | yok | TDV: selcuklular (SELÇUKLULAR) |
| iran | 48 | 1071-08-26 | Erciş | Malazgirt | yok | TDV: selcuklular (SELÇUKLULAR) |
| iran | 48 | 1071-08-26 | Bitlis | Malazgirt | yok | TDV: selcuklular (SELÇUKLULAR) |
| iran | 55 | 1091-01-01 | Kazvin | Alamut | yok | TDV: hasan-sabbah (HASAN SABBÂH) |
| iran | 58 | 1094-01-01 | Kazvin | Alamut | yok | TDV: hasan-sabbah (HASAN SABBÂH) |
| iran | 59 | 1095-02-25 | Tahran | Rey yakını | yok | TDV: selcuklular (SELÇUKLULAR) |
| iran | 62 | 1101-01-01 | Kirmanşah | Huftîzgān | yok | TDV: annaziler (ANNÂZÎLER) |
| iran | 62 | 1101-01-01 | Şehrizor | Huftîzgān | yok | TDV: annaziler (ANNÂZÎLER) |
| iran | 68 | 1117-07-13 | Kazvin | Alamut | yok | TDV: hasan-sabbah (HASAN SABBÂH) |
| iran | 75 | 1132-01-01 | Kirmanşah | Dînever | yok | TDV: bavendiler (BÂVENDÎLER) |
| iran | 75 | 1132-01-01 | Hemedan | Dînever | yok | TDV: bavendiler (BÂVENDÎLER) |
| iran | 77 | 1132-05-25 | Kirmanşah | Dînever | yok | TDV: selcuklular (SELÇUKLULAR) |
| iran | 77 | 1132-05-25 | Hemedan | Dînever | yok | TDV: selcuklular (SELÇUKLULAR) |
| iran | 78 | 1133-01-01 | Merâga | Karategin çayırı | yok | TDV: ahmedililer (AHMEDÎLÎLER) |
| iran | 93 | 1164-08-08 | Kazvin | Alamut | yok | TDV: nizariyye (NİZÂRİYYE) |
| iran | 108 | 1191-01-01 | Delhi | Tarain ovası | yok | TDV: gurlular (GURLULAR) |
| iran | 110 | 1192-01-01 | Delhi | Tarain ovası | yok | TDV: gurlular (GURLULAR) |
| iran | 112 | 1198-01-01 | Kazvin | Alamut | yok | TDV: alamut (ALAMUT) |
| iran | 114 | 1204-01-01 | Belh | Endhûd (Endhûy) Kalesi | yok | TDV: gurlular (GURLULAR) |
| iran | 125 | 1217-01-01 | Tahran | Rey civarı | yok | TDV: salgurlular (SALGURLULAR) |
| iran | 127 | 1219-01-01 | Türkistan | Otrar | yok | TDV: muhammed-b-tekis (MUHAMMED b. TEKİŞ) |
| iran | 127 | 1219-01-01 | Sığnak | Otrar | yok | TDV: muhammed-b-tekis (MUHAMMED b. TEKİŞ) |
| iran | 137 | 1224-01-01 | Luristan | Hürremâbâd | yok | TDV: lur-i-kucek (LUR-ı KÜÇEK) |
| iran | 141 | 1229-01-01 | Şüşter | Îzec | yok | TDV: lur-i-buzurg (LUR-ı BÜZÜRG) |
| iran | 161 | 1260-01-01 | Diyarbakır | Meyyâfârikîn (Silvan) | yok | TDV: hulagu (HÜLÂGÛ) |
| iran | 161 | 1260-01-01 | Bitlis | Meyyâfârikîn (Silvan) | yok | TDV: hulagu (HÜLÂGÛ) |
| iran | 169 | 1278-01-01 | Luristan | Hürremâbâd | yok | TDV: lur-i-kucek (LUR-ı KÜÇEK) |

dosya dağılımı: {'afrika': 1, 'avrupa': 74, 'dogu_asya': 19, 'iran': 40}

## 7. UYGULAMA — M-5737 sonrası koordinatör onayı (5 kalem)
### Öngörü — yazmadan ÖNCE (D254)
Ölçüm öncesi (`odak_olc.py --dosya`): anadolu ODAKSIZ 71 · KONUMLU 104 · avrupa ODAKSIZ 16 · KONUMLU 100 ·
ortadogu ODAKSIZ 52 · KONUMLU 119 · üçünde de çözülmeyen atıf 0.
Beklenen (4 SİL + 1 değiştir; dört kaydın hiçbirinde `odak_yer`/`kapsam_genis` YOK ⇒ SİL odaksız yapar):
```
anadolu   ODAKSIZ 71 → 74  · KONUMLU 104 → 101   (#55 Antakya · #90 Urfa · #152 İznik SİL)
avrupa    ODAKSIZ 16 → 17  · KONUMLU 100 →  99   (Cáceres SİL)
ortadogu  ODAKSIZ 52 → 52  · KONUMLU 119 → 119   (Trablus → Trablusşam: sınıf DEĞİŞMEZ)
toplam    ODAKSIZ +4  (koordinatörün "+5" beklentisinden FARK: #86 silme değil değiştirme)
kırık atıf 0 → 0
```

### Ölçüm — yazdıktan SONRA (`odak_olc.py --dosya`)
```
anadolu   ODAKSIZ 71 → 74  · KONUMLU 104 → 101   ✓ öngörü
avrupa    ODAKSIZ 16 → 17  · KONUMLU 100 →  99   ✓ öngörü
ortadogu  ODAKSIZ 52 → 52  · KONUMLU 119 → 119   ✓ öngörü (Trablusşam: sınıf aynı, nokta Lübnan'a geçti)
kırık atıf 0 → 0 (üç dosyada)  ·  `node --check` üçü de temiz  ·  git diff: 5 satır
```
Yazıcı kayıt içinde `yer_id` anahtarının TAM BİR KEZ geçtiğini zorladı (M-5734 mükerrer anahtar vakası).

## 8. ② Budin → İstolni Belgrad — kaynak YER VERMİYOR ⇒ SİL (uygulandı)
| # | olay | kaynak cümlesi | hüküm |
|---|---|---|---|
| avrupa 38 | I. István öldü (1038) | TDV `macaristan`: "…István’ın ölümünden (1038) sonra yirmi üç kral değişti." · TDV `istolni-belgrad`: "Burada gömülen István’ın halefleri bütün Ortaçağ boyunca çoğunlukla bu şehirde taç giydi … ve toprağa verildi." | **SİL** — kaynak İstolni Belgrad'ı DEFİN yeri olarak veriyor, ÖLÜM yeri olarak değil; madde ölümü anlatıyor (D206) |
| avrupa 192 | Altın Bulla (1222) | TDV `macaristan`: "Küçük soyluların haklarını korumak için II. András “altın mühürlü ferman”ını çıkardı (1222)." · `istolni-belgrad` 1222'yi ANMIYOR | **SİL** — yer yok |
⚠️ **D254 ihlali (kendi):** bu iki silmenin öngörüsünü yazmadan uyguladım. Ölçüm: avrupa ODAKSIZ
17 → **19** · KUTULU 156 → 154 · kırık atıf 0. (Öngörü yazılsaydı aynısı olurdu — ama SONRADAN
söylenen öngörü öngörü değildir; kayda böyle geçsin.)
Not: madde #38 "defin" olarak yeniden yazılırsa İstolni Belgrad kaynaklı olur — o başka bir kalem.

## 9. ③ 132 `odak_yer` vekili — (a)/(b)/(c) (UYGULANMADI, yalnız ölçüldü)
Yöntem: gerçek yer (`yer` metninin parçaları) d/v/s TAŞIYAN havuz noktasına ① birebir/çekirdek ad,
② normalleştirilmiş yazım varyantı (ad + parantez içi eşler) ile arandı; her aday koordinatıyla
elle onaylandı.
```
(a) havuzda VAR, d/v/s taşıyor     1   dogu_asya #49 Hakata ← "Dazaifu · Kamakura": "Kamakura" ✓ (35.32/139.55)
                                       — KISMİ: Dazaifu yok; öneri odak_yer ["Kamakura"]
(b) havuzda YOK                   126
(c) kaynakta belirsiz (iki yer)     5   "Arles / Vienne" · "Alnwick / Falaise" · "Groißenbrunn/Kressenbrunn"
                                       · "Bendenîcîn / Diz-i Mâhkî" ×2
(b)+(c) = 131 değer · 122 madde
```
Adaydan ELENENLER (havuzda eşleşiyor ama YANLIŞ yer): Bar → Bar (Podolya) Ukrayna · Kassel → Almanya ·
Jutland/Korsika/Ningxia/Jilin/Chongqing parçaları → bölge niteleyicisi, bunlar zaten mevcut `odak_yer`
(Viborg, Bastia, Yinchuan, Cilin, Çongqing) — gerçek saha (Grathe Hede, Bonifacio, Haoshuichuan …) yok.

### (b)+(c) silinirse — ÖLÇÜLDÜ (gerçek odak_cozum.js yamalı kopyası, data/ DEĞİŞMEDİ)
```
7 once1281 dosyası   ODAKSIZ 190 → 311  (+121)   · KUTULU 287 → 166 · kırık atıf 0 → 0
```
+121 / 122 madde — fark ÖLÇÜLDÜ: tek madde (afrika #34 Hayderan Savaşı) vekil `Gabes`i kaybedince
elinde ikinci `odak_yer` **"Kayrevan"** kalıyor (yer metni "Kābis ile Kayrevan arası" — MEŞRU) ⇒ KUTULU
kalır, ODAKSIZ'a düşmez. 121 + 1 = 122 ✓.
🔴 Tavan beyanı bu +121 ile AYNI commit'te yapılmalı (M-5737 ③, D253). `--tavan-yaz` KULLANILMADI (D255).

### (b)+(c) TAM LİSTE (dosya · # · yazılı ← gerçek yer)
#### (c)
- **avrupa** (3): #31 Lyon←Arles / Vienne · #141 Newcastle←Alnwick (Northumberland) / Falaise · #244 Viyana←Groißenbrunn/Kressenbrunn (Marchfe
- **iran** (2): #34 Kasr-ı Şîrîn←Bendenîcîn / Diz-i Mâhkî · #34 Kirmanşah←Bendenîcîn / Diz-i Mâhkî

#### (b)
- **afrika** (1): #34 Gabes←Hayderan (Kābis ile Kayrevan arası
- **avrupa** (69): #2 Poznan←Gnezno · #11 Serez←Belasitsa dağı, Strumitsa yakını · #13 Ohri←Prespa · #15 Newcastle←Carham (Tweed kıyısı) · #18 Londra←Ashingdon (Essex) · #22 Kiev←Alta ırmağı (Pereyaslav yakını) · #24 Mainz←Kamba (Oppenheim karşısı, Ren) · #25 Poznan←Gnezno · #28 Trondheim←Stiklestad (Verdal, Trøndelag) · #30 Paris←Melun · #37 Burgos←Tamarón vadisi · #42 Kotor←Bar · #50 Orléans←Vitry-aux-Loges · #52 Palermo←Cerami · #56 Londra←Hastings (Sussex) · #58 Palermo←Misilmeri · #61 Ypres←Cassel (Kassel, Flandre) · #65 Split←Solin · #74 Cebelitarık←Cezîretülhadrâ (Algeciras) · #76 Badajoz←Zellâka (Sagrajas), Batalyevs yakı · #84 Zagreb←Gvozd dağı (Petrova gora) · #85 Çernigov←Lyubeç · #88 Göteborg←Konghelle (Kungälv) · #89 Zadar←Biograd na Moru · #92 Caen←Tinchebrai (Normandiya) · #93 Cuenca←Uklîş (Uclés) · #94 Paris←Melun · #96 Girona←Besalú · #101 Mainz←Worms · #103 Milano←Como · #108 Lleida←Barbastro · #111 Mainz←Koblenz · #112 Napoli←Galluccio (Garigliano yakını) · #114 León←Zamora · #127 Viborg←Grathe Hede (Jutland) · #133 Bergamo←Pontida · #134 Stralsund←Arkona, Rügen adası · #143 Londra←Windsor · #144 Milano←Legnano · #151 Bergen←Fimreite (Sognefjord) · #152 Linz←Georgenberg (Enns) · #157 Londra←Canterbury · #163 Bastia←Bonifacio (Korsika) · #164 Toledo←Erek (Alarcos), Kurtuba'nın kuzeyi · #166 Yenipazar←Ras · #176 Narbonne←Béziers · #184 Londra←Runnymede (Thames kıyısı) · #186 Tartu←Viljandi (Fellin) · #193 Odense←Lyø adası · #194 Paris←Mantes · #195 Mantova←Mosio · #198 Lübeck←Bornhöved (Holstein) · #210 Bergamo←Cortenuova · #218 Budin←Muhi, Şayó (Sajó) ırmağı · #221 Reykjavík←Reykholt · #223 Valensiya←Almizra · #229 Modena←Fossalta · #231 Montpellier←Millau · #234 Foggia←Castel Fiorentino (Lucera yakını,  · #236 Uppsala←Stockholm · #240 Foggia←Lavello (Potenza) · #245 Klaipėda←Durbe gölü (Kurland, bugün Liepāja · #254 Napoli←Benevento · #256 Shrewsbury←Rhydwhyman geçidi (Montgomery) · #257 Roma←Scurcola Marsicana (Tagliacozzo),  · #259 Pärnu←Karuse (Batı Estonya, donmuş Muhu  · #264 Yenipazar←Ras · #269 Viyana←Dürnkrut ve Jedenspeigen (Marchfel · #270 Riga←Aizkraukle (Ascheraden), Letonya
- **dogu_asya** (18): #1 Anyang←Chanyuan (Puyang, Hebei) · #2 Yinchuan←Haoshuichuan (Guyuan yöresi, Ningx · #5 Hanoi←Như Nguyệt (Cầu nehri, Bắc Ninh) · #6 Yinchuan←Lingzhou (Lingwu, Ningxia) · #7 Cilin←Ningjiang (Songhua ırmağı, Jilin) · #13 Nanking←Caishi (Ma'anshan, Anhui) · #15 Kalgan←Yehuling (Zhangjiakou kuzeyi) · #24 Çongqing←Diaoyu kalesi (Hezhou, Chongqing) · #28 Ûicu←Gwiju (Kusong, Kuzey Pyongan) · #44 Morioka←Hiraizumi · #44 Sendai←Hiraizumi · #51 Ninh Binh←Hoa Lư · #67 Batavia←Cibadak (Sukabumi, Batı Cava) · #68 Surabaya←Kahuripan (Doğu Cava) · #69 Malang←Singhasari (Tumapel) · #70 Leh←Tholing (Ngari) · #71 Lanzhou←Liangzhou (Wuwei, Gansu) · #73 Lhasa←Sakya
- **iran** (38): #7 Herat←Âhengerân (Gur) · #7 Kâbil←Âhengerân (Gur) · #8 Kasr-ı Şîrîn←Hulvân · #9 Andican←Özkent · #13 Kanpûr←Kannevc (Kanauj) · #16 Tahran←Rey · #24 Nîşâbur←Hisâr-ı Tâk (Horasan) · #27 Tahran←Rey · #31 Zencan←Târum · #32 Kirmanşah←Sîrvân Kalesi · #42 Balasagun←Barsgan · #45 Tahran←Rey · #48 Erciş←Malazgirt · #48 Bitlis←Malazgirt · #55 Kazvin←Alamut · #58 Kazvin←Alamut · #59 Tahran←Rey yakını · #62 Kirmanşah←Huftîzgān · #62 Şehrizor←Huftîzgān · #68 Kazvin←Alamut · #75 Kirmanşah←Dînever · #75 Hemedan←Dînever · #77 Kirmanşah←Dînever · #77 Hemedan←Dînever · #78 Merâga←Karategin çayırı · #93 Kazvin←Alamut · #108 Delhi←Tarain ovası · #110 Delhi←Tarain ovası · #112 Kazvin←Alamut · #114 Belh←Endhûd (Endhûy) Kalesi · #125 Tahran←Rey civarı · #127 Türkistan←Otrar · #127 Sığnak←Otrar · #137 Luristan←Hürremâbâd · #141 Şüşter←Îzec · #161 Diyarbakır←Meyyâfârikîn (Silvan) · #161 Bitlis←Meyyâfârikîn (Silvan) · #169 Luristan←Hürremâbâd

(b)+(c) madde sayısı: 122

## 10. ④ Kapı sorusu yazıldı — `py denetim/ARAC-ODAK-VEKIL-1003.py --kapi --sina`
"Çözülüyor ama dosyanın KITASI dışına" — dosya başına kaba kutu (`KUTU`), beyanlı istisnalar
LİSTE (`ISTISNA`, 13 kayıt, her biri gerekçeli; hepsi yer metniyle TUTUYOR — olay gerçekten orada,
dosyanın kutusu Moğol/Haçlı kapsamına dar). Kapanan istisna "listeden düşür" diye basılır.
Bugünkü ölçüm: **beyansız kıta-dışı 0** (Cáceres silindi, Trablus düzeltildi) · çıkış 0.
**İki yönlü sınav (sentetik kayıt, data/ dokunulmadı):**
```
✓ avrupa   Cáceres     → ÖTTÜ  (Brezilya)
✓ ortadogu Trablus     → ÖTTÜ  (Libya)
✓ avrupa   Paris       → sustu · ✓ ortadogu Trablusşam → sustu · ✓ iran Tebriz → sustu
✓ avrupa   Bar         → sustu  (Bar (Podolya) Ukrayna — Avrupa kutusunun İÇİ)
✓ avrupa   Kassel      → sustu  (Almanya — Avrupa kutusunun İÇİ)
```
🔴 **SINIR, ölçüldü:** ilk koşuda Bar'ın ÖTMESİNİ bekledim, kapı SUSTU. Beklenti yanlıştı: kıta
sorusu kıta İÇİ sapmayı görmez. Bulduğum dört vakanın yalnız İKİSİNİ (Cáceres, Trablus) yakalar;
Bar→Ukrayna ve Cassel→Almanya için ÜLKE düzeyi soru gerekir ("o gün o noktanın sahibi maddenin
taraflarından biri mi?" — `suzgec.js` ile ölçülebilir, yazılmadı). ölçülemedi ≠ temiz.
⚠️ Kapsam: alet yalnız 7 once1281 dosyasını tarar (kutular onlar için tanımlı). Kapıya (`denetle_yayin.py`)
BAĞLANMADI — o dosya koordinatörün.

## 11. ② UYGULAMA — 132 vekil `odak_yer` değeri / 123 madde SİL (M-5740 sonrası hüküm)
Kapsam: (b) 126 + (c) 5 + (a) 1 (dogu_asya #49 Hakata — kısmi eşleşme de SİL, koordinatör hükmü).
### Öngörü — yazmadan ÖNCE (D254), gerçek `odak_cozum.js` yamalı kopyasıyla ölçülmüş
```
dosya          ODAKSIZ önce → sonra
afrika                0 → 0     (#34 Hayderan: ikinci odak "Kayrevan" kalıyor)
anadolu              74 → 74
avrupa               19 → 91    (+72)
dogu_asya             0 → 18    (+18)
hint_amerika         45 → 45
iran                  0 → 32    (+32)
ortadogu             52 → 52
TOPLAM              190 → 312   (+122) · KUTULU 287 → 165 · kırık atıf 0 → 0
```
⇒ `denetle_yayin.py` beklentisi: tavan 438 DEĞİŞMEZ (bu 7 dosya tavanın evreninde değil);
YENİ KAPSAM 209 → **331** (+122; koordinatörün "330" hesabına #49 eklendi).
**Beyan:** hedef nokta havuzda YOK (d/v/s taşımıyor) ya da kaynak iki yer sayıyor; odaksızlık
BEYANLI borç, yanlış odak SESSİZ kusur — `D257`. `ODAK-TAVAN.json`a dokunulmadı, `--tavan-yaz` yok.

### Ölçüm — yazdıktan SONRA (`odak_olc.py --dosya` + `denetle_yayin.py`)
```
dosya          ODAKSIZ önce → sonra   öngörü
afrika                0 → 0           0   ✓
anadolu              74 → 74          74  ✓
avrupa               19 → 91          91  ✓
dogu_asya             0 → 18          18  ✓
hint_amerika         45 → 45          45  ✓
iran                  0 → 32          32  ✓
ortadogu             52 → 52          52  ✓
TOPLAM              190 → 312         312 ✓   · kırık atıf 0 (yeni 0; beyanlı bilinen borç 1 = Ogaden)
denetle_yayin.py:  ✓ ODAKSIZ 438 (tavan 438) — DEĞİŞMEDİ
                   ⓘ YENİ KAPSAM: tavanın evreninde OLMAYAN 8 dosyada 331 odaksız   ← öngörü 331 ✓
```
Yazılan değer 132 (afrika 1 · avrupa 72 · dogu_asya 19 · iran 40) · 123 kayıt · `node --check` 4/4 temiz.
Yazıcı: kayıt `b` ALANIYLA bulunur (aynı metin `d`'de geçebildiği için ilk denemede avrupa #89'da DURDU —
"tekil değil" — ve o dosyaya HİÇ yazmadı; afrika o koşuda tamamlanmıştı, ikinci koşuda atlandı).
`ODAK-TAVAN.json`a dokunulmadı.

## 12. ③ Ülke düzeyi kapı ölçütü — YAZILMADAN ÖNCE SAYIM (M-5740 ③)
Ölçüt: alan değerinin `adKonumBul` ile çözüldüğü noktanın O GÜNKÜ sahibi (`SUZGEC.sahipAnahtari` +
`sahipKimlikte`) maddenin taraflarından (`devlet` ∪ `taraflar` ∪ `devletler` ∪ dosya künyesi) biri mi?
Evren: `index.html`in yüklediği 183 kronoloji/olay dosyası · 7.827 alan değeri.
```
ölçülemez — taraf alanı yok          1.989
ölçülemez — nokta o gün SAHİPSİZ     1.233
çözülmüyor                               0
TUTUYOR (sahip taraflardan biri)     3.109
🔴 ÖTERDİ                            1.496   (ölçülebilenin %32'si)
```
Örneklerin hepsi MEŞRU: Akkoyunlu'nun Trabzon/Erzincan/Mardin seferleri (saldırılan yer düşmanın
toprağıdır) · Prusya elçiliği İstanbul'da · künye kimliği farkı (`brandenburg-prusya` taraf, Berlin'in
sahibi `prusya` — aynı polity'nin ardıl künyesi). En çok öten: fransa 83 · iran 76 · doğu afrika 75 ·
macaristan 58 · mısır 55.
⇒ **HÜKÜM: bu ölçüt bir GÜRÜLTÜ kaynağıdır, kapı olarak YAZILMAMALI** — koordinatörün öngörüsü
(M-5740 ③) ölçümle doğrulandı. Fetih/sefer/elçilik maddesinde olay yeri tanım gereği karşı tarafın
toprağıdır; ölçüt bunu ayırt edemez. Bar/Kassel sınıfı (kıta içi yanlış çözüm) için doğru soru
"sahip taraf mı" değil, "aynı adı taşıyan BAŞKA bir nokta var mı ve yer metni hangisini anlatıyor"dur —
yani `D256`nın ad-belirsizliği sorusu (çok eşli ad listesi), bu raporun §3'ündeki gibi.
