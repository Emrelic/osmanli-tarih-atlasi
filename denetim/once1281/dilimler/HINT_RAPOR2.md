# HINT (Güney Asya) — Tur 2 raporu (web doğrulama + tamamlama)

Yöntem: `curl -sL -A "Mozilla/5.0"` ile archive.org tam metinleri indirilip yerelde `grep`lendi (alıntı metinden sınandı). Okunan tam metinler: R. C. Majumdar (ed.) *History and Culture of the Indian People* cilt I, II, III, IV, V, VI (Bharatiya Vidya Bhavan 1951-1960); H. C. Raychaudhuri *Political History of Ancient India* (Calcutta 1923); T. W. Haig (ed.) *Cambridge History of India* III; TDV İslâm Ansiklopedisi (Gazneliler, Gurlular, Sind, Mültan, Delhi Sultanlığı, Maldivler, Mütevekkil-Alellah). Sıra: önce D ve E (MS 500-1281), sonra C ve B. `-ref` eşleme kayıtları **ayrı dosyaya** alındı: `HINT_REF.json` (31 kayıt; brif 23 demişti, dosyada `-ref` ile biten 31 vardı). Dilim dosyalarında yalnız gerçek polity adayları kaldı.

## 1. Sayılar

| Dosya | Kayıt | okundu | kismen-okundu | taslak | eksik | var / var-kisa / ardil-var |
|---|---|---|---|---|---|---|
| HINT_A | 0 | 0 | 0 | 0 | 0 | — |
| HINT_B (MÖ 3000–501) | 19 | 1 | 17 | 1 | 18 | ardil-var 1 |
| HINT_C (MÖ 500–MS 499) | 21 | 3 | 14 | 4 | 16 | var-kisa 4, var 1 |
| HINT_D (MS 500–999) | 22 | 2 | 19 | 1 | 21 | var-kisa 1 |
| HINT_E (MS 1000–1280) | 19 | 4 | 13 | 2 | 10 | var-kisa 7, var 1, ardil-var 1 |
| **Polity toplamı** | **81** | **10** | **63** | **8** | | |
| HINT_REF (künye düzeltme adayları) | 31 | 14 | 15 | 2 | | |

Eklenen yeni polity: 8 — D: `saindhava`, `chapa-vardhamana`, `kachchhapaghata-gwalior`, `kalacuri-ratnapura`; E: `varman-vanga`, `pattikera`, `deva-samatata`, `khayaravala-japila`. Elenen: 1 — `arap-sind` (halifelik valiliği; bağımsız birim değil) → `HINT_ELENEN.json`.
`okundu` = f ve t'nin ikisi de bu oturumda okunan kaynakta var. `kismen-okundu` = polity'nin varlığı ve en az bir uç kaynakla destekli, öteki uç taslak kaldı (neyin desteklenmediği `ic_not`ta). Taslak değerler `ic_not`ta «Taslak değer:» diye saklı.

## 2. Beş künye sorusu (kaynakla; karar ana oturumun)

| Künye | Mevcut | Taslak önerisi | Bulgu | Önerim |
|---|---|---|---|---|
| `pala` t | 1120 | 1161 | Majumdar V (Ganguly): Madanapala Anga'da «c. 1161'e kadar»; Govindapala'nın gücü 1162'de çöktü (Vallalasena); kolofon yılları Govindapala'nın yıkımından sayılır. | **t → 1162** (f=750 doğrulandı: Majumdar IV, Gopala c.750-770) |
| `gurjara-pratihara` f | 783 | 730 | Majumdar IV (R. C. Majumdar): Nagabhata I «c. 730'dan ≈756'ya», Araplara direniş, Gurjara konfederasyonunun liderliği. 783 Vatsaraja/Kannauj sürecine denk; Kannauj'un kalıcı başkent oluşu Nagabhata II (öl. c.834) ile. | Polity f=730; «Kannauj başkentli evre» istenirse ≈810'lar. t 1027 vs 1036 (Yasahpala) ±9: uyumlu |
| `paramara` f | 1000 | 800 | Majumdar IV: en eski kral Upendra/Krishnaraja «9. yy ilk çeyreğinde» (vasal; Rashtrakuta Govinda III Malava'yı ≈812'de verdi); Vakpati-Munja 972; Majumdar V: Bhoja c.1000 imparatorluk evresi; son Mahlakadeva 1305. | f 1000 → **801** (çeyrek yüzyıl başı) ya da bağımsız evre ≈945; 1000 yalnız Bhoja evresi. t 1305 onaylandı |
| `satavahana` f | -0029 | -0229 | Majumdar II (s. 195-196): Puranik hesapla Simuka ≈30 MÖ (Majumdar'ın tercihi); alternatifler 225 MÖ (450 yıl geri sayımı, Majumdar bunu reddeder) ve ana kol c.75 MÖ–MS 225. | **Künye değişmesin** (-0029); -0229 alternatif okul olarak ic_nota; t 225 ≈ künye 220 |
| `pallava` f | 350 | 275 | Majumdar III genealojisi: Prakrit plakalı Simha-varman «3. yy sonu», Sivaskanda-varman 4. yy başı; Kanchi Pallavaları Vishnugopa (≈350-75, Samudra-gupta çağdaşı) ile sağlam; soy bağı Prakrit kolu ↔ Kanchi kolu «belirsiz». | 350 sağlam; 3. yy sonu (≈290, **yüzyıl hassasiyeti**) ancak soy bağı kanıtlanırsa. 275 desteklenmedi |

## 3. Öteki künye genişletme/düzeltme bulguları (`HINT_REF.json` ve dilim dosyalarında)

- `caulukya` f 1000 → **942** (Majumdar IV: Mularaja'nın 941-42'de yükselişi yazıtla teyitli; Majumdar V: Chaulukya+Vaghela 940-1299). `vaghela` ayrı künye gerekmez (ardıl-var).
- `candela` f 1000 → **801** (Nannuka 9. yy ilk çeyreği); t: 1203 (Kalinjar) vs 1315 (Majumdar V «9. yy–1315»).
- `cahamana` f 1000 → **601** (Sakambhari kolu 7. yy ilk yılları, Vasudeva); Ranthambhor kolu 1192-1301 (okundu) ayrı polity eksik.
- `racput`/Guhila: Majumdar III Atpur yazıtından Guhadatta 6. yy ikinci yarısı → f≈551 (yüzyıl).
- `orissa` f 1000 → **496** (Ganga era 496; Majumdar III) — 750-1000 Doğu Ganga hattı Majumdar IV.
- `hoysala` f=1026: Majumdar V'e göre Vinayaditya (1047-1101) Chalukya vasalı; ilk bağımsız kral Ballala II (1173 sonrası); giriş «c.1106-1343». Künye f için karar gerekir (1026/1106/1173).
- `kakatiya`: Majumdar giriş «c.1050-1322» (vasal) vs künye 1163; t Majumdar 1322, künye 1323.
- `yadava`: f 1185 (Majumdar V), t 1317 — künye 1187-1318 uyumlu.
- `kesmir` Lohara: f 1003 (Didda 980-1003), Lohara çizgisi t 1320 (Suhadeva), Şah Mir 1338-39 (Majumdar V-VI).
- `delhi-sultanligi`: TDV 1206 – **21 Nisan 1526** (künye ile aynı).
- `seylan-sinhala` (1070-1518) Anuradhapura evresini (≈-0376…1017; t 1017 Majumdar IV okundu) ve Çola işgalini kapsamıyor → Anuradhapura eksik. Polonnaruwa f=1070, Magha 1214 (Majumdar V).
- `cola` f 850 (Majumdar IV: Vijayalaya c.850-871), `rastrakuta` 752/753–974, `karkota` t 855-56, `utpala` f 855/6, `hindu-sahiler` t≈1026: künyelerle uyumlu.
- `gazneli` Lahor evresi: TDV Hüsrev Melik 555-582 (1160-1186); Lahor'a çekilişin yılı TDV'de yok (1157-1160). `gurlu` Hint toprakları: 571/1175-76 (TDV) ve 1175 (Majumdar V) çift teyit; Muizzüddin 602/1206.

### Sind / Pencap (yeni): TDV + Majumdar
- `cac-sind` t = **712-06-20** (TDV Sind: 10 Ramazan 93 / 20 Haziran 712, gün ile); f=640 (Majumdar: Çaç'ın cülusu 640 sonrası; Çaç-nama 602 «palpably wrong», Arap kroniği 622).
- `habbari` f=861 (TDV: Mütevekkil'in öldürülmesi 247/861 sonrası bağımsızlık; gün TDV'de yok), t=1010 (TDV: Gazneli Mahmud 1010'da Sind'i tamamen aldı; taslak 1026 desteklenmedi).
- `multan-emirligi` f=903 (Majumdar IV: Saffârîlerin 872-903 düşüşünden sonra Multan ve Mansûra iki bağımsız devlet), t=1010 (TDV: 396/1006 ve 400/1010; çift teyit).
- `sumra`: f≈1030 (Majumdar VI: Sumra isyanı I. Mesud döneminde — «ilk kesin anılış»), t=1351 (TDV Sind + Majumdar VI «14. yy ortası»).

## 4. Bulamadıklarım / zayıf noktalar
- **Taslak kalanlar:** `kuru-vedik` (Bharata Savaşı için 1500–1000 MÖ / c.1400 MÖ / 3102 MÖ: kaynaklı kesin tarih yok), `ikshvaku-andhra`, `abhira`, `hint-iskit` (yalnız Azes I c.5 MÖ–MS 30), `hint-part`, `nepal-thakuri` (Majumdar IV: Jayadeva II sonrası iki yüzyıl «çok belirsiz»; «Thakuri» adı o bölümde yok), `jaffna` (varlık doğrulandı, yıl yok), `yapahuwa`, `anuradhapura` f.
- **Kısmen:** Mahajanapada f değerleri hiçbir devletin kuruluş yılı değildir (Anguttara listesi çağı); t'ler yalnız göreli sıra + kaynak aralıklarıyla (Bimbisara 544-493, Ajatasatru 493-462, Sisunaga ≈430, Nanda 364-324 MÖ — Majumdar II/Mookerji). `anga` t -0542 → -0492 (en geç), `kamboja` t -0329 → -0257 (Asoka XIII. Ferman'da hâlâ özerk: Raychaudhuri), `gandhara-mahajanapada` t -0517 → -0515 (Behistun ≈516 MÖ).
- **Erişilemeyen/yetersiz kaynak:** Bosworth *New Islamic Dynasties* (archive.org ödünç, tam metin yok); Imperial Gazetteer ciltleri ve Cambridge History I (archive.org'da yalnız ~70-230 KB önizleme); Encyclopaedia Iranica/Britannica (denenmedi); Treccani bilerek kullanılmadı; İSAM/DergiPark makale taraması yapılmadı.
- **Sığ kalan alanlar (hiç kayıt açılmadı):** Rajput alt devletleri (Rathor-Marwar, Bhati, Nadol/Jalor Chauhan, Mt. Abu/Vagada/Bhinmal Paramara kolları), Nolamba-Pallava, Bana, Vaidumba, Alupa, Telugu Choda, Chhindaka Naga (Bastar), Sinda, Santara, Ratta (Saundatti), Kangra-Katoch/Kulu/Garhwal, Sikkim-Butan, Rohana (Sri Lanka güneyi, 1017-1070), Zabul/Zunbil, Yaduvamsi-Bayana, Gupta-Jayapura, Sena-Pithi, Sakya/Koliya cumhuriyetleri (B), Videha/Mithila (B), Nanda öncesi Magadha hanedanları (Haryanka/Sisunaga: atlasta `magadha` içinde), Tripura, Kachari. Majumdar IV-V içindekiler tablosu bu listeyi veriyor; her birinin yılı için ayrı okuma gerekiyor.
- A dilimi boş (Harappa şehir merkezleri siyasî birim iddiası kaynaklı değil).
- Majumdar kronoloji tablosundaki (cilt III, s. 706-710) sütunlar metin çıkarımında kaydığı için tek tek yıllar (özellikle Kadamba, Gupta son iki imparator) yalnız «aralık» düzeyinde kullanıldı.
- Sayfa numaraları: tam metin dosyasında sayfa çerçevesi bozuk olduğundan kaynak künyelerinde bölüm adı verildi; sayfa yalnız metinde geçtiği yerde (ör. Ahom s. 44-45, Silahara eki s. 184).

## 5. İstekler (ana oturumdan)
1. `HINT_REF.json` kararları: `pala` t 1162; `gurjara-pratihara` f 730 mu 783 mü; `paramara` f 801; `caulukya` f 942; `candela` f 801 + t kararı; `cahamana` f 601; `orissa` f 496; `hoysala` f için 1026/1106/1173; `satavahana` değişmesin; `pallava` f 350 kalsın (3. yy sonu notla).
2. Tarih kuralı: «kaynak aralık veriyorsa aralığın ilk günü, aralık ic_not'ta» (Paramara 801, Candela 801, Saindhava 726, Chapa 801…) bu raporda hicrî kuralın paraleli olarak uygulandı; onaylıyor musunuz?
3. Mahajanapada çağı için f=null + haritada çağ başı varsayımı (önceki rapordaki önerim) hâlâ geçerli; f'ler `kesinlik: belirsiz`.
4. Eksik alt devlet listesi (yukarıdaki «sığ kalan alanlar») için ayrı okuma turu: önceliği Majumdar IV-V içindekiler tablosunda adı geçen 25-30 küçük hanedan; dilerseniz bir sonraki turda Rajput alt devletleri + Dekan vasal hanedanları (Nolamba, Sinda, Ratta, Santara) birlikte.
