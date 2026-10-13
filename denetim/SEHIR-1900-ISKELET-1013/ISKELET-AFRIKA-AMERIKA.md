# 1900 İDARÎ İSKELET — SAHRA-ALTI AFRİKA + AMERİKALAR

Ölçüm: UMIT, scratchpad (depo dışı). Ham indirmeler: `scratchpad/indir_afram/`.

## Kaynak kısaltmaları
- **SYB1899** = *The Statesman's Year-Book 1899* (archive.org `statemansyearboo1899wrig`, djvu tam metin, `indir_afram/syb1899.txt`). 1900 baskısı archive.org'da yalnız kısıtlı "centenary collection" olarak var (401, okunamadı). 1899 baskısı **1 Ocak 1900'den ~1 yıl önceki** durumu verir; aradaki bilinen değişiklikler "not"ta yazıldı.
- **STAT** = statoids.com ülke sayfaları (`indir_afram/st_<kod>.txt`).
- **ABS1900** = *Abstract of the Twelfth Census of the US 1900* (archive.org `abstractoftwelft00unit`).
- **IBGE** = IBGE, *Evolução da divisão territorial do Brasil 1872-2010*, `numero_de_municipios_por_UF_1872_2010.xls` (geoftp.ibge.gov.br).
- **ARG-UTDT** = Universidad Torcuato Di Tella deposu, Arjantin sayım coğrafyası çalışması (repositorio.utdt.edu, bitstream 41472b31…) — 1869/1895/1914/1947/1960 departman sayıları.
- **CUBA1899** = *Report on the Census of Cuba, 1899* (archive.org `reportofcensusof00unit`).
- **PR1899** = *Report on the Census of Porto Rico, 1899* (archive.org `cu31924013754597`).
- Alan: km² = mi² × 2,59; SYB'nin abartılı/iddia alanları yerine modern yüzölçüm kullanıldıysa notta yazıldı. Ortalama alanlar kaba (± %20).
- Hatırlama ile yazılmış (kaynakla doğrulanmamış) bilgi **"bilgi — doğrulanmadı"** diye işaretli. Sayı yoksa **bulunamadı**; kestirim **tahmin (gerekçe)**.

---

# A. AMERİKALAR

### Amerika Birleşik Devletleri — bağımsız
- baskent_1900: Washington, D.C. · kat 1
- katman1: eyalet (45) + D.C. + territory (Arizona, New Mexico, Oklahoma, Indian Territory) + Alaska (district) + Hawaii (1898 ilhak; territory örgütü 1900-06-14) · **52 birim** · ortalama alan ≈ 180.000 km² (9,37 M km² / 52; yalnız kıta içi 50 birim: 7,84 M / 50 ≈ 157.000)
  - merkezler (eyalet): Montgomery, Little Rock, Sacramento, Denver, Hartford, Dover, Tallahassee, Atlanta, Boise, Springfield, Indianapolis, Des Moines, Topeka, Frankfort, Baton Rouge, Augusta, Annapolis, Boston, Lansing, St. Paul, Jackson, Jefferson City, Helena, Lincoln, Carson City, Concord, Trenton, Albany, Raleigh, Bismarck, Columbus, Salem, Harrisburg, Providence (+Newport, 1900-01'e kadar ortak başkent), Columbia, Pierre, Nashville, Austin, Salt Lake City, Montpelier, Richmond, Olympia, Charleston (WV), Madison, Cheyenne
  - merkezler (territory/district): Phoenix (AZ), Santa Fe (NM), Guthrie (OK), Indian Territory — başkent yok (federal ajans Muskogee; beş kabile başkenti Tahlequah, Okmulgee, Tishomingo, Tuskahoma, Wewoka), Sitka (Alaska; Juneau'ya taşınma 1900 kararı, fiilen 1906), Honolulu (Hawaii)
- katman2: county (+ Louisiana parish, Virginia bağımsız şehirleri) · **≈ 2.862 birim** · ortalama alan ≈ 2.740 km² (kıta içi 7,84 M km² / 2.862)
- katman3: township / minor civil division — sayı bulunamadı (ABS1900 tablo var, toplam verilmiyor)
- kaynak: eyalet/territory statüsü ve başkent değişiklikleri STAT `uus` (Hawaii 1900-06-14, Alaska başkenti 1900, Providence 1900-01); county tablosu ABS1900 Table 93 ("Area and population of counties: 1900 and 1890") mevcut ama OCR sayımı yapılamadı; **2.862 sayısı** W. Dollarhide *The Census Book* s.26 tablosundan (soy kütüğü başvuru kitabı — **ikincil, doğrulanmadı**).
- not: Ayrı sömürge/bağımlılıklar aşağıda (Porto Riko, Guam). Alaska'da county yok. Indian Territory'de 1900'de county yok (recording district).

### Porto Riko (ABD) — sömürge (askerî yönetim → 1900-05-01 Foraker sivil yönetimi)
- baskent_1900: San Juan · kat 2
- katman1: departamento · **7** · ort ≈ 1.300 km² · merkezler: Aguadilla, Arecibo, Bayamón, Guayama, Humacao, Mayagüez, Ponce (San Juan, Bayamón departmanı içinde)
- katman2: municipio (municipal district) · **69** · ort ≈ 132 km²
- katman3: barrio — sayı tabloda var, sayılmadı
- kaynak: PR1899 ("divided into seven departments… and into 69 municipal districts")

### Guam (ABD) — sömürge (donanma yönetimi)
- baskent_1900: Agaña (Hagåtña) · kat 2 · katman yok

### Kanada — dominyon
- baskent_1900: Ottawa · kat 2 (dominyon; bağımsız sayılırsa kat 1'e yükseltilebilir)
- katman1: eyalet (7) + Kuzeybatı Toprakları + Yukon Territory (1898) · **9** · ort ≈ 1.050.000 km² (≈ 9,46 M km² / 9)
  - merkezler: Toronto, Québec, Halifax, Fredericton, Winnipeg, Victoria, Charlottetown, Regina (NWT), Dawson (Yukon)
- katman1-b (NWT içi, ara katman): 1882/1895 "provisional district" — Assiniboia, Saskatchewan, Alberta, Athabasca + Keewatin (Manitoba vali yardımcısı altında) + Ungava, Franklin, Mackenzie (1895) · 8 — merkez: Regina, Prince Albert, Calgary/Edmonton (resmî merkez yok), diğerleri merkezsiz
- katman2: 1901 nüfus sayımı "census district" (≈ seçim bölgesi/county) · **206** (+ 3.204 sub-district) · ort ≈ 45.900 km² (iskân edilmiş güneyde çok daha küçük; Ontario/Québec'te county ölçeği)
- kaynak: SYB1899 (7 eyalet, NWT bölgeleri ve alanları, Yukon 1898); STAT `uca` (Yukon 1898-06-13); 206 census district: Findmypast 1901 Canada census tanıtımı (**ikincil, doğrulanmadı**; LAC 1901 district listesi mevcut, açılmadı)
- not: county'ler (Ontario ~40, Québec ~70, NS 18, NB 15, PEI 3) — **bilgi, doğrulanmadı**; census district ile county çoğunlukla örtüşür.

### Newfoundland (ve Labrador) — dominyon/öz-yönetimli sömürge
- baskent_1900: St. John's · kat 2
- katman1: seçim bölgesi (electoral district) · **18** · ort ≈ 6.150 km² (yalnız ada 110.700 km²; Labrador sınırsız, dahil edilmedi)
- katman2: yok
- kaynak: SYB1899 ("divided into 18 districts or constituencies")

### Meksika — bağımsız
- baskent_1900: Ciudad de México · kat 1
- katman1: estado (27) + territorio (Tepic; Baja California — Norte/Sur iki distrito) + Distrito Federal · **30** · ort ≈ 66.000 km² (1,97 M km² / 30)
  - merkezler: Aguascalientes, Campeche, Tuxtla Gutiérrez (Chiapas; 1892'den beri), Chihuahua, Saltillo, Colima, Durango, Guanajuato, Chilpancingo, Pachuca, Guadalajara, Toluca, Morelia, Cuernavaca, Monterrey, Oaxaca, Puebla, Querétaro, San Luis Potosí, Culiacán, Hermosillo, San Juan Bautista (Villahermosa), Ciudad Victoria, Tlaxcala, Xalapa, Mérida, Zacatecas · Tepic · La Paz (BC Sur) + Ensenada (BC Norte) · México (DF)
- katman2: distrito / partido / cantón / jefatura política (eyalete göre adı değişir) · **bulunamadı** — tahmin ≈ 300 (gerekçe: Sonora 9 distrito, Michoacán 15 distrito (1899) → eyalet başına ~10-12) · ort ≈ 6.600 km² (tahmin)
- katman3: municipio · bulunamadı (Sonora: 9 distritoda 88 municipio — 1900 Peñafiel *División territorial*)
- kaynak: SYB1899 ("27 states, 2 territories and the Federal District"); STAT `umx` (Tepic 1884, BC distritoları 1887, Quintana Roo 1902 — 1900'de yok)
- not: Quintana Roo 1902'de ayrıldı; 1900'de Yucatán'ın parçası.

### Guatemala — bağımsız
- baskent_1900: Guatemala (Ciudad de Guatemala) · kat 1
- katman1: departamento · **22** · ort ≈ 4.950 km² (108.900 km² modern; SYB 63.400 mi² abartılı/Belize iddiası dahil)
  - merkezler: Cobán (Alta Verapaz), Amatitlán, Salamá (Baja Verapaz), Chimaltenango, Chiquimula, Escuintla, Guatemala, Huehuetenango, Livingston/Puerto Barrios (Izabal — belirsiz), Jalapa, Jutiapa, Flores (Petén), Quetzaltenango, Santa Cruz del Quiché, Retalhuleu, Antigua (Sacatepéquez), San Marcos, Cuilapa (Santa Rosa), Sololá, Mazatenango (Suchitepéquez), Totonicapán, Zacapa
- katman2: municipio · bulunamadı
- kaynak: SYB1899 ("administratively divided into 22 departments"); STAT `ugt` 1898 tablo (departman adları)

### Honduras — bağımsız
- baskent_1900: Tegucigalpa · kat 1
- katman1: departamento · **15** · ort ≈ 7.500 km² (112.500 km²)
  - merkezler: Choluteca, Trujillo (Colón), Comayagua, Santa Rosa de Copán, San Pedro Sula (Cortés), Yuscarán (El Paraíso), Tegucigalpa, Gracias, La Esperanza (Intibucá), Roatán (Islas de la Bahía), La Paz, Juticalpa (Olancho), Santa Bárbara, Nacaome (Valle), Yoro
- katman2: municipio · bulunamadı
- kaynak: SYB1899 ("divided into 15 departments"); STAT `uhn` (1895 sayımı departmanları; Atlántida 1902, Ocotepeque 1906 — 1900'de yok)
- not: merkez adları bilgi — doğrulanmadı (STAT tablosunda merkez yok).

### El Salvador — bağımsız
- baskent_1900: San Salvador · kat 1
- katman1: departamento · **14** · ort ≈ 1.500 km² (21.000 km²)
  - merkezler: Ahuachapán, Santa Ana, Sonsonate, Nueva San Salvador (La Libertad), San Salvador, Chalatenango, Cojutepeque (Cuscatlán), Zacatecoluca (La Paz), Sensuntepeque (Cabañas), San Vicente, Usulután, San Miguel, San Francisco Gotera (Morazán), La Unión
- katman2: municipio · bulunamadı
- kaynak: SYB1899 ("divided into 14 departments"); merkezler bilgi — doğrulanmadı

### Nikaragua — bağımsız
- baskent_1900: Managua · kat 1
- katman1: departamento · **10** (STAT 1900 listesi) — SYB1899 "13 provinces" der (comarca/distritoları sayıyor olmalı) · ort ≈ 12.700 km² (127.400 km²)
  - merkezler: Chinandega, Juigalpa (Chontales), Granada, León, Managua, Masaya, Matagalpa, Ocotal (Segovia), Rivas, Bluefields (Zelaya)
- katman2: municipio · bulunamadı
- kaynak: STAT `uni` ("1900: Nicaragua consisted of the departments of …"); SYB1899
- not: 10 / 13 çelişkisi çözülmedi.

### Kosta Rika — bağımsız
- baskent_1900: San José · kat 1
- katman1: provincia (5) + comarca (Puntarenas, Limón) · **7** · ort ≈ 7.300 km² (51.100 km²)
  - merkezler: San José, Alajuela, Heredia, Cartago, Liberia (Guanacaste), Puntarenas, Limón
- katman2: cantón · bulunamadı
- kaynak: SYB1899 ("five provinces … and two comarcas"); STAT `ucr`

### Küba — ABD askerî işgali altında (tâbi)
- baskent_1900: La Habana · kat 2
- katman1: provincia · **6** · ort ≈ 19.000 km² (114.500 km²) · merkezler: Pinar del Río, La Habana, Matanzas, Santa Clara, Puerto Príncipe (1899'da adı Camagüey oldu), Santiago de Cuba
- katman2: municipal district (término municipal) · **132** · ort ≈ 870 km²
- katman3: barrio — sayılmadı; 31 judicial district
- kaynak: CUBA1899 ("6 provinces, 31 judicial districts, and 132 municipal districts"; il bazında 20/36/2?/28/5/19)

### Haiti — bağımsız
- baskent_1900: Port-au-Prince · kat 1
- katman1: département · **5** · ort ≈ 5.550 km² (27.750 km²) · merkezler: Cap-Haïtien (Nord), Port-de-Paix (Nord-Ouest), Gonaïves (Artibonite), Port-au-Prince (Ouest), Les Cayes (Sud)
- katman2: arrondissement · bulunamadı (tahmin ≈ 25)
- katman3: commune
- kaynak: STAT `uht` (5 departman 1962'ye kadar); SYB1899 (eğitim için 14 müfettişlik bölgesi); merkezler bilgi — doğrulanmadı

### Dominik Cumhuriyeti (Santo Domingo) — bağımsız
- baskent_1900: Santo Domingo · kat 1
- katman1: provincia (6) + distrito marítimo (SYB1899: 5; 1896'da Pacificador eklendi → 6?) · **11-12** · ort ≈ 4.000 km² (48.400 km² / 12)
  - merkezler: Santo Domingo, Azua, Santiago, La Vega, El Seibo, Moca (Espaillat) · Puerto Plata, Samaná, San Pedro de Macorís, Monte Cristi, Barahona (?), San Francisco de Macorís (Pacificador)
- katman2: común · bulunamadı
- kaynak: SYB1899 ("six provinces and five maritime districts"); STAT `udo` (Espaillat 1885, Pacificador 1896, 1907 yeniden düzenleme)
- not: distrito listesi kısmen tahmin (Monte Cristi/Barahona statüsü doğrulanmadı).

### Britanya Batı Hint Adaları (toplu) — sömürge
| birim | merkez (kat 2) | katman1 |
|---|---|---|
| Jamaika (+Turks-Caicos, Cayman bağımlı) | Kingston | 14 parish (ort ≈ 790 km²) — STAT `ujm` 1867 birleşmeleri |
| Trinidad ve Tobago | Port of Spain | 8 county (Trinidad) + Tobago ward — bilgi, doğrulanmadı |
| Barbados | Bridgetown | 11 parish — bilgi, doğrulanmadı |
| Bahamalar | Nassau | ada bölgeleri — bulunamadı |
| Leeward Adaları federasyonu | St. John's (Antigua) | 5 presidency: Antigua, St Kitts-Nevis (Basseterre), Dominica (Roseau), Montserrat (Plymouth), Virgin Is. (Road Town) — SYB1899 |
| Windward Adaları | St. George's (Grenada) | 3 koloni: Grenada, St Vincent (Kingstown), St Lucia (Castries) — SYB1899 |
| Bermuda | Hamilton | 9 parish — bilgi, doğrulanmadı |
- kaynak: SYB1899 Britanya bağımlılıkları "West Indies"

### Diğer Karayip sömürgeleri (toplu)
- Fransız: Guadeloupe (Basse-Terre; 3 arrondissement), Martinique (Fort-de-France; 2 arrondissement) — SYB1899 "arrondissements, cantons, communes" (sayı bulunamadı; arrondissement sayısı bilgi — doğrulanmadı)
- Hollanda: Curaçao ve bağımlıları (Willemstad; 6 ada)
- Danimarka Batı Hint Adaları (Charlotte Amalie; 3 ada)
- Saint-Pierre-et-Miquelon (Saint-Pierre)

### Britanya Hondurası — sömürge
- baskent_1900: Belize · kat 2
- katman1: district · tahmin 6 (Belize, Corozal, Orange Walk, Stann Creek, Toledo, Cayo — Cayo'nun 1900'de ayrı district olduğu doğrulanmadı) · ort ≈ 3.800 km²
- kaynak: SYB1899 (alan 7.562 mi²); district listesi bilgi — doğrulanmadı

### Brezilya (Estados Unidos do Brasil) — bağımsız
- baskent_1900: Rio de Janeiro (Distrito Federal) · kat 1
- katman1: estado (20) + Distrito Federal · **21** · ort ≈ 398.000 km² (≈ 8,35 M km², Acre hariç)
  - merkezler: Manaus, Belém, São Luís, Teresina, Fortaleza, Natal, Parahyba (João Pessoa), Recife, Maceió, Aracaju, Salvador, Vitória, **Petrópolis** (Rio de Janeiro eyaleti 1894-1903), São Paulo, Curitiba, Florianópolis, Porto Alegre, **Belo Horizonte** (Minas, 1897'den), Goiás (Vila Boa), Cuiabá · Rio de Janeiro (DF)
- katman2: município · **1.121** · ort ≈ 7.450 km² (çok çarpık: SP 173, Amazonas 24)
- katman3: distrito de paz — bulunamadı
- kaynak: SYB1899 (eski vilayetler = eyalet; DF); **IBGE xls** (1900 il bazında belediye sayısı, toplam 1.121; 1872: 642)
- not: Acre Bolivya'nın (1899-1903 çatışmalı). Petrópolis ve Belo Horizonte başkentlikleri bilgi — doğrulanmadı.

### Arjantin — bağımsız
- baskent_1900: Buenos Aires (Capital Federal) · kat 1
- katman1: provincia (14) + territorio nacional (10) + Capital Federal · **25** · ort ≈ 111.000 km² (2,78 M km²)
  - merkezler: La Plata (Buenos Aires), Santa Fe, Paraná (Entre Ríos), Corrientes, Córdoba, San Luis, Santiago del Estero, Tucumán, Salta, Jujuy, Catamarca, La Rioja, San Juan, Mendoza · Posadas (Misiones), Formosa, Resistencia (Chaco), General Acha (La Pampa), Chos Malal (Neuquén), Viedma (Río Negro), Rawson (Chubut), Río Gallegos (Santa Cruz), Ushuaia (Tierra del Fuego), Los Andes (1899-03-10 kuruldu; merkez Pastos Grandes — doğrulanmadı) · Buenos Aires
- katman2: departamento / partido (Buenos Aires eyaletinde) · **395** (1895 sayımı) · ort ≈ 7.000 km²
- kaynak: SYB1899 (14 eyalet + 9 territory tablosu, 1895 sayımı); STAT `uar` (Los Andes 1899-03-10 → 1900'de 10 territory); **ARG-UTDT** ("en 1895 con catorce provincias, un distrito federal, nueve territorios nacionales y trescientos noventa y cinco departamentos")

### Şili — bağımsız
- baskent_1900: Santiago · kat 1
- katman1: provincia (23) + territorio (Magallanes) · **24** · ort ≈ 32.000 km² (≈ 770.000 km², Tacna işgal bölgesi dahil)
  - merkezler: Tacna, Iquique (Tarapacá), Antofagasta, Copiapó (Atacama), La Serena (Coquimbo), San Felipe (Aconcagua), Valparaíso, Santiago, Rancagua (O'Higgins), San Fernando (Colchagua), Curicó, Talca, Linares, Cauquenes (Maule), Chillán (Ñuble), Concepción, Los Ángeles (Bío-Bío), Lebu (Arauco), Angol (Malleco), Temuco (Cautín), Valdivia, Puerto Montt (Llanquihue), Ancud (Chiloé), Punta Arenas (Magallanes)
- katman2: departamento · **74** · ort ≈ 10.400 km²
- katman3: subdelegación **865**, distrito **3.068**
- kaynak: SYB1899 ("divided … into 2[3] provinces, subdivided into 74 departments and 1 territory … 865 sub-delegations and 3,068 districts" — OCR "28" okuyor, tablo 23 il + Magallanes sayıyor); il başkentleri SYB1899 tablosundan
- not: Tacna 1883'ten beri Şili işgalinde (Peru talebi).

### Peru — bağımsız
- baskent_1900: Lima · kat 1
- katman1: departamento (18, Tacna Şili işgalinde) + provincia litoral (Callao, Moquegua) · **20** · ort ≈ 64.000 km² (≈ 1,285 M km²)
  - merkezler: Chachapoyas (Amazonas), Huaraz (Áncash), Abancay (Apurímac), Arequipa, Ayacucho, Cajamarca, Cusco, Huancavelica, Huánuco, Ica, Cerro de Pasco (Junín — doğrulanmadı), Trujillo (La Libertad), Chiclayo (Lambayeque), Lima, Iquitos (Loreto, 1897'den), Piura, Puno, (Tacna) · Callao, Moquegua
- katman2: provincia · **bulunamadı** — tahmin ≈ 90-100 (gerekçe: 19 departman × ~5) · ort ≈ 13.500 km² (tahmin)
- katman3: distrito — bulunamadı
- kaynak: SYB1899 ("nineteen departments", 1876 tablosu); STAT `upe` (Loreto başkenti 1897, Tumbes 1901 — 1900'de yok)

### Bolivya — bağımsız
- baskent_1900: Sucre (resmî) · hükümet merkezi 1899 Federal Savaş'tan sonra La Paz · kat 1 (ikisi de)
- katman1: departamento (8) + Territorio Nacional de Colonias (Noroeste) · **9** · ort ≈ 144.000 km² (≈ 1,3 M km², Acre dahil — tahmin)
  - merkezler: La Paz, Potosí, Oruro, Sucre (Chuquisaca), Cochabamba, Trinidad (Beni), Santa Cruz de la Sierra, Tarija · Riberalta? (Colonias — doğrulanmadı)
- katman2: provincia · **52** · ort ≈ 25.000 km²
- katman3: cantón **374**
- kaynak: SYB1899 ("divided into nine departments, 52 provinces, and 374 cantons"; dokuzuncu Litoral, Şili'ye ipotekli); STAT `ubo` 1900 nüfus tablosu (Pando = Colonias)

### Ekvador — bağımsız
- baskent_1900: Quito · kat 1
- katman1: provincia (16, Oriente dahil) + territorio (Galápagos) · **17** · ort ≈ 18.300 km² (SYB 120.000 mi² ≈ 311.000 km²)
  - merkezler: Tulcán (Carchi), Ibarra (Imbabura), Quito (Pichincha), Latacunga (León), Ambato (Tungurahua), Riobamba (Chimborazo), Guaranda (Bolívar), Azogues (Cañar), Cuenca (Azuay), Loja, Machala (El Oro), Guayaquil (Guayas), Babahoyo (Los Ríos), Portoviejo (Manabí), Esmeraldas, Oriente (merkez belirsiz — Archidona/Macas, doğrulanmadı) · Galápagos (merkezsiz)
- katman2: cantón · bulunamadı · katman3: parroquia
- kaynak: SYB1899 ("divided into sixteen provinces and one territory"; il nüfus tablosu)

### Kolombiya — bağımsız
- baskent_1900: Bogotá · kat 1
- katman1: departamento · **9** · ort ≈ 148.000 km² (SYB 513.938 mi² ≈ 1,33 M km², Panama dahil)
  - merkezler: Medellín (Antioquia), Cartagena (Bolívar), Tunja (Boyacá), Popayán (Cauca), Bogotá (Cundinamarca), Santa Marta (Magdalena), Panamá, Bucaramanga (Santander), Ibagué (Tolima)
- katman2: provincia · **bulunamadı** (tahmin 60-80, gerekçe yok denecek kadar zayıf)
- katman3: distrito municipal — bulunamadı
- kaynak: SYB1899 (9 departman ve merkez tablosu); STAT `uco` ("In 1900, Colombia had nine departments")
- not: 1899-1902 Bin Gün Savaşı sürüyor; Panama 1903'te ayrıldı.

### Venezuela — bağımsız
- baskent_1900: Caracas · kat 1
- katman1: 1899-04-22 Kongre kararıyla 1864'ün **20 estado**'suna dönüş (1901 anayasası onayladı) + Distrito Federal + territorios (1901 adları: Amazonas, Colón, Delta Amacuro, Yuruary) · **≈ 25** · ort (20 eyalet+DF) ≈ 43.600 km² (≈ 916.000 km²)
  - merkezler (20 eyalet): San Fernando de Apure, La Victoria (Aragua — doğrulanmadı), Barcelona, Barinas, Barquisimeto, Valencia (Carabobo), Caracas/Petare (Caracas eyaleti — belirsiz), San Carlos (Cojedes), Coro, Cumaná, Calabozo (Guárico), Ciudad Bolívar (Guayana), Maracaibo, La Asunción (Margarita), Maturín, Mérida, Guanare (Portuguesa), San Cristóbal (Táchira), Trujillo, San Felipe (Yaracuy) · Caracas (DF) · San Fernando de Atabapo (Amazonas), Tucupita (Delta Amacuro), diğerleri belirsiz
- katman2: distrito · bulunamadı · katman3: municipio
- kaynak: STAT `uve` (1881: 9 büyük eyalet; **1899-04-22** 20 eyalete dönüş kararı; 1901-04-13 anayasa); SYB1899 (1881 düzeni: 8 eyalet + DF + 8 territory)
- not: **1 Ocak 1900'de hangi düzenin fiilen yürürlükte olduğu belirsiz** (karar 1899, anayasa 1901; Castro Ekim 1899'da iktidara geldi). İki seçenek: 9 büyük eyalet ya da 20 eyalet. Merkezler bilgi — doğrulanmadı.

### Paraguay — bağımsız
- baskent_1900: Asunción · kat 1
- katman1: partido · **23** (SYB1899) · ort ≈ 11.000 km² (SYB 98.000 mi² ≈ 253.800 km², Chaco iddiası hariç)
- katman2: yok
- kaynak: SYB1899 ("divided into 23 counties (partidos)"); STAT `upy` (ilk toprak bölünmesi yasası 1906)
- not: başka kaynaklarda partido sayısı çok daha yüksek geçer (bilgi, doğrulanmadı) — **güvenilirliği düşük**.

### Uruguay — bağımsız
- baskent_1900: Montevideo · kat 1
- katman1: departamento · **19** · ort ≈ 9.800 km² (186.900 km²)
  - merkezler: Montevideo, Canelones, San José, Florida, Durazno, Colonia, Mercedes (Soriano), Paysandú, Salto, San Eugenio (Artigas), Rivera, Tacuarembó, Melo (Cerro Largo), Treinta y Tres, Minas, Maldonado, Rocha, Fray Bentos (Río Negro), Trinidad (Flores)
- katman2: sección judicial/policial — bulunamadı
- kaynak: SYB1899 ("divided into 19 departments"); STAT `uuy` (1828-1885 kuruluş tarihleri); merkezler bilgi — doğrulanmadı

### Guyanalar (toplu) — sömürge
- Britanya Guyanası: Georgetown · kat 2 · katman1: county 3 (Demerara, Essequibo, Berbice — bilgi, doğrulanmadı) · ort ≈ 71.700 km² (215.000) · kaynak SYB1899 (alan; Venezuela iddiası 1899 tahkimle çözüldü)
- Hollanda Guyanası (Surinam): Paramaribo · kat 2 · katman1: district **16** · ort ≈ 10.200 km² · kaynak SYB1899 ("divided into sixteen districts")
- Fransız Guyanası: Cayenne · kat 2 · katman1: commune — bulunamadı

### Falkland Adaları — sömürge
- baskent_1900: Stanley · kat 2 · katman yok

---

# B. SAHRA-ALTI AFRİKA

## B1. Bağımsız devletler

### Habeşistan — bağımsız
- baskent_1900: Addis Ababa · kat 1
- katman1: krallık/vilayet (Tigray, Amhara/Begemder, Gojjam, Shewa, Lasta/Wollo, Harar, Wellega, Kaffa, Jimma (tâbi), Sidamo, Arsi, Illubabor …) · **tahmin ≈ 12** (gerekçe: SYB1899 Tigre, Amhara, Gojam, Shoa, Lasta + "outlying territories … Kafa … Harar"; Menelik fetihleri 1880-1898) · ort ≈ 92.000 km² (≈ 1,1 M km²)
  - merkezler (SYB1899): Adua (Tigre), Gondar (Amhara), Debre Markos (Gojjam — bilgi), Addis Ababa (Shoa), Harar; diğerleri bulunamadı
- katman2: bulunamadı
- kaynak: SYB1899 ("includes the Kingdoms of Tigre, with Lasta …; Amhara, with Gojam …; Shoa …; … as far as Kafa … and Harar")
- not: Bürokratik vilayet sistemi yok; sayı yapısal olarak belirsiz.

### Liberya — bağımsız
- baskent_1900: Monrovia · kat 1
- katman1: county · **4** · ort ≈ 27.800 km² (111.000 km² modern; SYB 14.360 mi² yalnız kıyı) · merkezler: Monrovia (Montserrado), Buchanan (Grand Bassa), Greenville (Sinoe), Harper (Maryland)
- katman2: (River Cess district, 1887, Grand Bassa içinde) — 1
- kaynak: STAT `ulr` (1839, ~1843, 1857, 1887 değişiklikleri); merkezler bilgi — doğrulanmadı
- not: Grand Cape Mount 1847 anayasasında county diye geçer, fiilî statüsü belirsiz.

### Orange Free State — bağımsız (1899-10'dan beri İngiltere ile savaşta)
- baskent_1900: Bloemfontein · kat 1
- katman1: district (landdrost) · **18** · ort ≈ 6.950 km² (48.326 mi² ≈ 125.200 km²)
- katman2: wyk / field-cornetcy · bulunamadı
- kaynak: SYB1899 ("divided into 18 districts"; landdrost her district'e)
- not: Bloemfontein 1900-03-13 İngiliz işgali; 1900-05-28 ilhak (Orange River Colony).

### Güney Afrika Cumhuriyeti (Transvaal) — bağımsız (savaşta)
- baskent_1900: Pretoria · kat 1
- katman1: district · **20** (+ Svaziland Transvaal yönetiminde) · ort ≈ 15.400 km² (119.139 mi² ≈ 308.600 km²)
- katman2: wyk / field-cornetcy · bulunamadı
- kaynak: SYB1899 ("divided into 20 districts"; Svaziland 1890/1894 Transvaal yönetimine)
- not: Pretoria 1900-06-05 düştü; 1900-09-01 ilhak ilanı.

### Kongo Serbest Devleti — bağımsız (II. Leopold'ün kişisel devleti)
- baskent_1900: Boma · kat 1
- katman1: district (commissaire) · **15** · ort ≈ 156.000 km² (2,345 M km²; SYB 900.000 mi²)
  - adlar (SYB1899, OCR bozuk): Banana, Boma, Matadi, Cataractes, Stanley Pool, Kwango Oriental, Kasai, Lac Léopold II, Équateur, Bangala, Ubangi, Uele, Aruwimi, Stanley Falls, Lualaba
  - merkezler: bulunamadı (çoğu adını taşıyan istasyon)
- katman2: zone / poste · bulunamadı
- kaynak: SYB1899 ("divided into fifteen administrative districts"); STAT `ucd` (1912'de 22 district)
- not: Katanga ayrı Comité Spécial (1900-06-19) altında.

## B2. Britanya

### Ümit Burnu Kolonisi (Cape Colony) — öz-yönetimli sömürge
- baskent_1900: Cape Town · kat 2
- katman1: division (77; Griqualand West 4 divisionu dahil) + bağımlılık district'i (Transkei/Tembuland/Griqualand East/Pondoland; 29) · **106** · ort ≈ 6.800 km² (276.995 mi² ≈ 717.400 km², Britanya Bechuanalandı 1895 ve Pondoland 1894 dahil)
  - merkez listesi: bulunamadı (division merkezleri adını taşıyan kasabalar; 81 magisterial district)
- katman2: field-cornetcy / ward — bulunamadı
- katman (yatay): 7 "electoral province" (Yasama Konseyi için)
- kaynak: SYB1899 ("divided into 77 divisions, and its dependencies into 29 districts … 81 magisterial districts and 77 fiscal divisions")
- not: Osmanlı sancağıyla kıyaslanacak katman doğrudan division'dır (ara katman yok).

### Natal (+ Zululand eyaleti) — öz-yönetimli sömürge
- baskent_1900: Pietermaritzburg · kat 2
- katman1: county (8: Durban, Victoria, Pietermaritzburg, Umvoti, Weenen, Klip River, Alexandra, Alfred — bilgi, doğrulanmadı) + Zululand eyaleti (merkez Eshowe) · **9**
- katman2: magisterial district · **38** (Zululand dahil; Zululand'in 12'si bu sayının içinde mi belirsiz) · ort ≈ 2.400 km² (≈ 90.650 km²)
- kaynak: SYB1899 ("colony (including the Province of Zululand) … divided into 38 Magisterial Districts"; "province of Zululand is divided into twelve Magisterial Districts")

### Basutoland — sömürge (Crown)
- baskent_1900: Maseru · kat 2
- katman1: district · **7** · ort ≈ 4.300 km² (30.355 km²) · merkezler: Maseru, Leribe, Cornet Spruit (Mohale's Hoek), Berea, Mafeteng, Quthing, Qacha's Nek
- katman2: ward (kalıtsal şef) · bulunamadı
- kaynak: SYB1899 ("divided into seven districts")

### Bechuanaland Protectorate — protektora
- baskent_1900: Mafeking (protektora dışında, Cape Colony'de) · kat 2
- katman1: kabile rezervi/şeflik (Bamangwato–Palapye, Bakwena, Bangwaketse, Bakhatla, Batawana …) · tahmin ≈ 5-8 · ort ≈ 80.000 km²
- kaynak: SYB1899 (alan 213.000 mi², kabileler); sayı tahmin

### Rodezya (British South Africa Company) — şirket yönetimi
- Güney Rodezya: merkez Salisbury · kat 2 · katman1: province **2** (Mashonaland–Salisbury, Matabeleland–Bulawayo) · ort ≈ 226.000 km² (174.728 mi²) · katman2: native/magisterial district — bulunamadı (tahmin ≈ 15-20)
- Kuzeydoğu Rodezya: merkez Fort Jameson (1899-1900; SYB: Blantyre'dan Tanganyika platosuna taşınıyor) · katman1: district **5** (Chambezi, Tanganyika, Mweru, Luapula, Loangwa) · ort bulunamadı
- Kuzeybatı Rodezya (Barotseland): merkez Kalomo (1899-1900 — bilgi, doğrulanmadı) · bulunamadı
- kaynak: SYB1899 (Southern Rhodesia alanları; NE beş district)

### British Central Africa Protectorate (Nyasaland) — protektora
- baskent_1900: Zomba · kat 2
- katman1: district · **12** · ort ≈ 9.100 km² (42.217 mi²)
- kaynak: SYB1899 ("42,217 square miles, divided into twelve districts")

### East Africa Protectorate — protektora
- baskent_1900: Mombasa · kat 2
- katman1: province · **4** (Seyidie–Mombasa, Ukamba–Machakos, Tanaland–Lamu, Jubaland–Kismayu) · ort tahmin ≈ 70.000 km² (gerekçe: 1902 öncesi EAP ≈ 280.000 km², Uganda'nın Doğu Eyaleti hariç)
- katman2: district — bulunamadı
- kaynak: SYB1899 ("divided … into four provinces, each under a sub-commissioner"; merkezler SYB)

### Uganda Protectorate — protektora
- baskent_1900: Kampala/Mengo (Buganda); Komiser merkezi Port Alice (Entebbe) · kat 2
- katman1: krallık/district (Buganda, Unyoro, Toro, Ankole, Busoga, Eastern Province …) · tahmin ≈ 6-8 (1900 Uganda Anlaşması öncesi)
- kaynak: SYB1899 (merkez); sayı tahmin

### Zanzibar Sultanlığı — protektora
- baskent_1900: Zanzibar · kat 2 (tâbi sultanlık)
- katman1: ada **2** (Zanzibar, Pemba) · ort ≈ 1.300 km²
- kaynak: SYB1899

### Britanya Somalilandı — protektora
- baskent_1900: Berbera · kat 2 · katman1: bulunamadı

### Britanya Batı Afrikası (toplu)
| birim | merkez (kat 2) | katman1 | kaynak/not |
|---|---|---|---|
| Gambiya (koloni+protektora) | Bathurst | bulunamadı | SYB1899 |
| Sierra Leone (koloni+protektora) | Freetown | protektora district **5** (Bandajuma, Karene, Koinadugu–Falaba, Panguma, Ronietta–Kwelu) + koloni; ort ≈ 14.000 km² | STAT `usl` 1900 kaydı |
| Altın Kıyısı (koloni) + Ashanti + Kuzey Toprakları | Accra (Ashanti: Kumasi; NT: Gambaga) | 3 bölge (resmî statü 1901-1902); koloni district'leri bulunamadı | SYB1899; STAT `ugh` |
| Lagos (koloni+protektora) | Lagos | bulunamadı | SYB1899 |
| Güney Nijerya Protektorası (1900-01-01 kuruldu, eski Niger Coast Prot.) | Old Calabar | bulunamadı (Niger Coast 1898: 11 district — SYB1899) | SYB1899 |
| Kuzey Nijerya Protektorası (1900-01-01, RNC şirket yönetiminden) | Jebba (1902'den Zungeru) | province — tahmin ≈ 9-10 (1900 Lugard ilk illeri) | SYB1899: RNC başkenti Asaba; sayı tahmin |

### Diğer Britanya (toplu)
- Mauritius: Port Louis · district **9** (Port Louis, Pamplemousses, Rivière du Rempart, Flacq, Grand Port, Savanne, Black River, Plaines Wilhems, Moka) · ort ≈ 207 km² — SYB1899 (seçim bölgeleri listesi)
- Seyşeller (Mauritius'a bağlı, 1903'e kadar): Victoria
- St Helena: Jamestown · Ascension · Tristan da Cunha

## B3. Fransa
### Fransız Batı Afrikası (1895 genel valilik; Fransız Sudanı 1899-10-17'de dağıtıldı) — sömürge
- baskent_1900: Saint-Louis (genel vali) · kat 2
- katman1: koloni/askerî bölge · **6** — Senegal (Saint-Louis), Fransız Ginesi (Conakry), Fildişi Kıyısı (Grand-Bassam; 1900'de Bingerville'e taşınma başladı), Dahomey (Porto-Novo), 1. Askerî Bölge (Timbuktu), 2. Askerî Bölge (Bobo-Dioulasso — doğrulanmadı) · ort ≈ 600.000 km² (tahmin)
- katman2: cercle · bulunamadı (tahmin ≈ 100)
- kaynak: SYB1899 ("divided into Senegal, French Sudan, French Guinea …, the Ivory Coast, and Dahomey"); 1899 dağıtma bilgi — doğrulanmadı

### Fransız Kongosu (Gabon) — sömürge
- baskent_1900: Libreville · kat 2
- katman1: bulunamadı (SYB1899: 27 istasyon, iki vali yardımcısı) · Çad askerî bölgesi 1900-09 (1 Ocak'tan sonra)
- kaynak: SYB1899

### Madagaskar (+ Mayotte, Komorlar, Diego Suarez, Nosy Be, Sainte-Marie) — sömürge
- baskent_1900: Antananarivo · kat 2
- katman1: province (sivil) + cercle militaire · bulunamadı — tahmin ≈ 25-30 (gerekçe: Gallieni 1896-1900 "pacification" düzeni)
- kaynak: SYB1899 (başkent, bağımlılıklar 1896-01-28 kararnamesiyle Madagaskar'a bağlı)

### Diğer Fransız (toplu)
- Fransız Somali Kıyısı: Djibouti (1896'dan; önce Obock)
- Réunion: Saint-Denis · 2 arrondissement (bilgi, doğrulanmadı), communes bulunamadı
- Mayotte ve Komorlar: Dzaoudzi

## B4. Almanya
| birim | merkez (kat 2) | katman1 | kaynak/not |
|---|---|---|---|
| Alman Doğu Afrikası | Dar es Salaam | Bezirksamt + Militärstation — tahmin ≈ 20 · ort ≈ 50.000 km² (384.000 mi²) | SYB1899 alan; sayı tahmin |
| Alman Güneybatı Afrikası | Windhoek | Bezirk — tahmin ≈ 6 · ort ≈ 140.000 km² (322.450 mi²) | SYB1899 istasyon listesi: Windhoek, Gobabis, Otjimbingwe, Swakopmund, Keetmanshoop |
| Kamerun | Kamerun (Duala); 1901'den Buea | bulunamadı (tahmin ≈ 6-8) | SYB1899 |
| Togo | Lomé | istasyon: kıyı + 7 iç istasyon (Misahöhe, Kete-Kratschi, Sansanne-Mangu, Bassari, Bismarckburg, Atakpame, Kpando) · ort ≈ 10.700 km² (33.000 mi² / 8) | SYB1899 |

## B5. Portekiz
| birim | merkez (kat 2) | katman1 | kaynak/not |
|---|---|---|---|
| Angola | Luanda | distrito **5** (Congo–Cabinda?, Luanda, Benguela, Moçâmedes, Lunda) · ort ≈ 250.000 km² (484.800 mi²) | SYB1899; STAT `uao` 1900 |
| Mozambik | Lourenço Marques (1898'den; önce Moçambique adası — doğrulanmadı) | distrito Moçambique, Zambézia, Lourenço Marques, Inhambane, Gaza (askerî) **5** + şirket bölgeleri Manica e Sofala (Beira), Niassa (Ibo) **2** = **7** · ort ≈ 111.000 km² (301.000 mi²) | SYB1899 |
| Portekiz Ginesi | Bolama | — | SYB1899 |
| Yeşil Burun Adaları | Praia | 14 ada | SYB1899 |
| São Tomé ve Príncipe | São Tomé | — | SYB1899 |
- katman2 (concelho/circunscrição): bulunamadı

## B6. İspanya, İtalya
- İspanyol Gine (Fernando Po + Río Muni iddiası): Santa Isabel · kat 2 · SYB1899
- Río de Oro: Villa Cisneros · kat 2 · SYB1899
- Eritre (İtalyan sömürgesi): Asmara (1897'den fiilî; SYB1899 hâlâ Massawa der) · kat 2 · katman1 commissariato — bulunamadı · alan 88.500 mi² ≈ 229.000 km²
- İtalyan Somalilandı (Benadir şirketi + Obbia/Mijertein protektoraları): Mogadişu · kat 2 · katman1 bulunamadı · SYB1899

---

## Özet

Sütunlar: **kat1** = bağımsız devlet başkenti (0/1) · **k1** = katman1 birim sayısı (her birinin merkezi kat 2) · **k2** = katman2 birim sayısı · **k2 ort** = katman2 ortalama alanı (km²). "?" = bulunamadı; "~" = tahmin.

| birim | kat1 | katman1 | katman2 | katman2 ort. alan km² |
|---|---|---|---|---|
| ABD | 1 | 52 | 2.862 (doğrulanmadı) | 2.740 |
| Porto Riko | 0 | 7 | 69 | 132 |
| Guam | 0 | 0 | — | — |
| Kanada | 0 | 9 | 206 | 45.900 |
| Newfoundland | 0 | 18 | — | — |
| Meksika | 1 | 30 | ~300 | ~6.600 |
| Guatemala | 1 | 22 | ? | ? |
| Honduras | 1 | 15 | ? | ? |
| El Salvador | 1 | 14 | ? | ? |
| Nikaragua | 1 | 10 | ? | ? |
| Kosta Rika | 1 | 7 | ? | ? |
| Küba | 0 | 6 | 132 | 870 |
| Haiti | 1 | 5 | ~25 | ~1.100 |
| Dominik C. | 1 | 12 | ? | ? |
| Britanya Batı Hint (toplu) | 0 | 51 (Jam 14, Trin 8, Barb 11, Leew 5, Wind 3, Berm 9, Bah 1) | — | — |
| Fransız/Hol./Dan. Karayip | 0 | 5 | ? | ? |
| Britanya Hondurası | 0 | ~6 | — | — |
| Brezilya | 1 | 21 | 1.121 | 7.450 |
| Arjantin | 1 | 25 | 395 | 7.000 |
| Şili | 1 | 24 | 74 | 10.400 |
| Peru | 1 | 20 | ~95 | ~13.500 |
| Bolivya | 1 | 9 | 52 | 25.000 |
| Ekvador | 1 | 17 | ? | ? |
| Kolombiya | 1 | 9 | ? | ? |
| Venezuela | 1 | ~25 | ? | ? |
| Paraguay | 1 | 23 | — | — |
| Uruguay | 1 | 19 | ? | ? |
| Guyanalar (3) | 0 | 19 (BG 3, Surinam 16) | — | — |
| Falkland | 0 | 0 | — | — |
| Habeşistan | 1 | ~12 | ? | ? |
| Liberya | 1 | 4 | 1 | — |
| Orange Free State | 1 | 18 | ? | ? |
| Transvaal (ZAR) | 1 | 20 | ? | ? |
| Kongo Serbest Devleti | 1 | 15 | ? | ? |
| Cape Colony | 0 | 106 | ? | ? |
| Natal + Zululand | 0 | 9 | 38 | 2.400 |
| Basutoland | 0 | 7 | ? | ? |
| Bechuanaland Prot. | 0 | ~6 | — | — |
| Rodezya (G+KD+KB) | 0 | 7 (G 2, KD 5) | ~15 | ~30.000 |
| Br. Orta Afrika (Nyasaland) | 0 | 12 | — | — |
| East Africa Prot. | 0 | 4 | ? | ? |
| Uganda Prot. | 0 | ~7 | ? | ? |
| Zanzibar | 0 | 2 | — | — |
| Br. Somaliland | 0 | ? | — | — |
| Br. Batı Afrika (6 birim) | 0 | ~19 (SL 5, GC 3, KNij ~10, + 1 Gambiya) | ? | ? |
| Mauritius (+Seyşel, St Helena) | 0 | 9 | — | — |
| Fransız Batı Afrikası | 0 | 6 | ~100 | ~45.000 |
| Fransız Kongosu | 0 | ? | ? | ? |
| Madagaskar (+bağ.) | 0 | ~27 | ? | ? |
| Fr. Somali, Réunion | 0 | 2 (Réunion arr.) | ? | ? |
| Alman Doğu Afrikası | 0 | ~20 | ? | ? |
| Alman GB Afrika | 0 | ~6 | ? | ? |
| Kamerun | 0 | ~7 | ? | ? |
| Togo | 0 | 8 | ? | ? |
| Angola | 0 | 5 | ? | ? |
| Mozambik | 0 | 7 | ? | ? |
| Port. Gine/YBA/STP | 0 | 0 | — | — |
| İspanyol (2) | 0 | 0 | — | — |
| Eritre + İt. Somali | 0 | ? | ? | ? |

### Toplamlar (kaba; "~" tahminler dahil, "?" hariç → alt sınır)
- **Kat 1 (bağımsız başkent):** **24** — Amerika 19 (ABD, Meksika, 5 Orta Amerika, Haiti, Dominik C., Brezilya, Arjantin, Şili, Peru, Bolivya, Ekvador, Kolombiya, Venezuela, Paraguay, Uruguay) + Afrika 5 (Habeşistan, Liberya, OFS, ZAR, Kongo SD). Bolivya'nın fiilî hükümet merkezi La Paz da sayılırsa 25. (Küba, Kanada, Newfoundland kat 2'de.)
- **Kat 2 (katman1 merkezleri + sömürge yönetim merkezleri):** Amerika katman1 = **480** (Kuzey/Orta/Karayip 269: ABD 52, PR 7, Kanada 9, NF 18, Meksika 30, Orta Amerika 68, Küba 6, Haiti 5, DC 12, BWI 51, diğ. Karayip 5, BHon 6 · Güney Amerika 211: Brezilya 21, Arj 25, Şili 24, Peru 20, Bol 9, Ekv 17, Kol 9, Ven 25, Par 23, Uru 19, Guyana 19) + Afrika katman1 = **345** (Hab 12, Lib 4, OFS 18, ZAR 20, KSD 15, Cape 106, Natal 9, Bas 7, Bech 6, Rod 7, Nyasa 12, EAP 4, Ug 7, Znz 2, BBA 19, Maur 9, FBA 6, Mad 27, Réunion 2, ADA 20, AGBA 6, Kam 7, Togo 8, Ang 5, Moz 7) = **825**; buna katman1'i olmayan/bulunamayan ~25 sömürge merkezi (Guam, Falkland, Fr. Kongo, Somaliler, Eritre, Port./İsp. adaları, Gambiya, Lagos, G. Nijerya, Seyşel, St Helena, Fr. Guyana, Curaçao, DWI, Guadeloupe, Martinik, SPM …) eklenince **≈ 850 kat-2 merkezi** (birçoğu başkentle/birbiriyle çakışır; tekil şehir sayısı biraz daha az). Bunun **≈ 125'i tahmin** (BHon 6, Ven 25, Hab 12, Bech 6, Ug 7, KNij 10, Mad 27, ADA 20, AGBA 6, Kam 7).
- **Katman2 merkezi (bilinen):** ABD 2.862 + PR 69 + Kanada 206 + Küba 132 + Brezilya 1.121 + Arjantin 395 + Şili 74 + Bolivya 52 + Natal 38 + Liberya 1 = **4.950** (ölçülü/kaynaklı) · tahminler (Meksika ~300, Peru ~95, Haiti ~25, Rodezya ~15, FBA ~100) eklenince **≈ 5.485** · ? olan ~30 birim için katman2 **ölçülemedi**.
- Katman2 ortalama alanları (ölçülü olanlar): 132 km² (PR) – 25.000 km² (Bolivya); büyük devletlerde **2.700-10.000 km²** bandı (ABD 2.740, Arjantin 7.000, Brezilya 7.450, Şili 10.400).

### Ne bulunamadı (açık borç)
1. Orta Amerika, Kolombiya, Ekvador, Venezuela, Uruguay, Haiti, Dominik C. ikinci katman (municipio/cantón/provincia/distrito) sayıları.
2. Meksika distrito/partido toplamı (1900 Peñafiel *División territorial* ciltleri gerekir).
3. Peru provincia sayısı 1900.
4. Afrika sömürgelerinde district/cercle/Bezirk sayıları (FBA, Fransız Kongosu, Madagaskar, Alman kolonileri, Nijeryalar, Altın Kıyısı, Uganda) — SYB1899 bu ayrıntıyı vermiyor; *Deutsches Kolonial-Lexikon* (1920), *Annuaire du Gouvernement général de l'AOF* (1900-1903), *Colonial Office List 1900* gerekir.
5. ABD county sayısının birincil doğrulaması (ABS1900 Table 93 OCR'dan sayılamadı; 2.862 ikincil).
6. SYB 1900 baskısı erişilemedi (archive.org kısıtlı) — bütün SYB sayıları 1899 baskısından.
