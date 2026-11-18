# Aşiret ve devletsiz noktalar — derleme (18 Kasım 2026)

**Ölçüm:** EMRELİC · worktree `asiret-devletsiz-1118-8ad0af` · taban `origin/main` 2c47a1d22 · `arac/girdi.py yukle()` (5.649 nokta).
**Görev:** atlastaki bütün `bos` noktalarını derlemek, sınıflandırmak, Emre'nin 18 Kasım kuralına göre tarihlemek. Kural: aşiret/devletsiz kaydı yalnız kaynak yılının −25 … +50 penceresinde geçerlidir.
**Dal:** `asiret-devletsiz-1118` (origin'e itildi, `main`e itilmedi).

## 0. Kısa sonuç

- `bos` alanı dolu **630** nokta var: veri-yok 391 · devletsiz 153 · kabile 66 · insansız 13 · hata 6 · çöl 1.
- **Engel sayılan ve pencere yazılabilen** küme (hiç sahibi olmayan aşiret yurdu ya da devletsiz şehir): **44** nokta.
  - Akademik kaynağı **okunarak** tarihlenen ve veriye yazılan: **3** (Yakut toprakları, Pecos Pueblo, Gran Sabana/Pemon).
  - Kaynağı bulunamayan ya da kaynağı akademik/okunmuş olmayan: **41**. Bunlar kurala göre engel olmaktan çıkar ve iş listesine düşer (§4).
- **Mükerrer:** 1 gerçek mükerrer birleştirildi (Port Vila). 1 ad-mükerrerine dokunulmadı (Washington, kamera odağı kaydı). 9 "≤3 km komşu" çifti ölçüldü; hepsi bölge vekili ile şehir çifti, mükerrer değil (§3).
- **Sahipli şehirlerin boş dilimleri (145 nokta, B sınıfı):** pencere **yazılamaz**. `kur:`/`bit:` yazılırsa şehrin kendisi haritadan silinir. Motor tarafında dilim başına pencere gerekiyor (§1 karar 2).
- **veri-yok (391):** aşiret değil, ayrı listede (§8). Boşluk doldurma merdiveni bu oturumda **işlenmedi**.

## 1. Yöntem ve kararlar

1. **Sınıflandırma ölçütü veriden okundu.** Yeni alan yazılmadı. Ölçüt üç şeye bakar: `bos` değeri, kaydın sahipli dönemi (`s:`/`d:`/`v:`/`isg:`) olup olmadığı ve `tur:`.
   - Motor (`uret_petek.py` dolgu kapısı) `bos:"devletsiz"` + `tur:"bolge"` kaydını zaten "boş çöl" sayıp doldurur. Bunlar C1 sınıfıdır, engel değildir.
   - Aynı ayrımı işaret katmanı da yapar (`uret_bosluk.py`, `devletsiz-yerlesim`).
2. **Pencere yalnız sahipsiz noktalara yazıldı (A sınıfı).** Sebep: motor bir noktanın var olduğu dönemi yalnız `kur:`/`bit:`dan okur. Bu alanlar bütün kayda uygulanır.
   - A sınıfında kaydın tek işlevi aşiret/devletsiz tanıklığıdır, bu yüzden pencere = görünme aralığı olur. Doğrudur.
   - B sınıfında (Riyad, Vladivostok, Fâşoda…) kayıt bir şehirdir; `bos` yalnız sahipsiz dilimini anlatır. `kur:`/`bit:` şehrin sahipli dönemlerini de keser.
   - ⇒ **B için motor kararı gerekiyor (KASA):** ya dilim başına pencere taşıyan bir alan (öneri: `bos_pencere:[{f,t,kaynak}]`, `uret_bosluk._bos_pencereler` zaten dilim hesaplıyor) ya da dolgunun boş dilimdeki şehri engel saymaması.
3. **"Tarihlendi" çıtası:** kaynak akademik olmalı (CLAUDE.md kaynak sırası) **ve** bu oturumda gövdesi okunmuş olmalı. Ajanın "okunmadı" dediği ya da yalnız ikincil/eyalet yayını olan yıllar yazılmadı; iş listesine "aday" olarak geçti.
   - Bu çıta sert. Tarih uydurmamak ve "çekilemedi ≠ yok" kuralı bunu gerektiriyor.
4. **Birden çok yıl:** pencereler birleştirildi.
   - Pemon'da 1817 ile 1900 arası 83 yıl (>75) ⇒ iki ayrı dönem çıkar. `kur:`/`bit:` tek pencere taşıdığı için yalnız ilk dönem (1745-1867) yazıldı. İkinci dönem (1875-1950) borç olarak beyan edildi.
5. **`kur:` anlamı:** VERI-YAPISI "ilk anılıştan `kur:` türetilmez" der. Bu kayıtlarda `kur:`/`bit:` kuruluş/yok oluş değil, **tanıklık penceresidir**. Her kaydın `ic_not`unda "aşiret penceresi / devletsiz penceresi: kaynak yılı Y, −25/+50" diye beyan edildi. Bu kullanım yama tasarımının 6. maddesidir (Emre'ye soruldu, cevap bu oturuma gelmedi).
6. **Araştırma:** iki sonnet alt ajanı (22+22 nokta), web araması + sayfa okuma. Ajanlar repoya yazmadı.
   - Arama aracı çoğunlukla Vikipedi türevi döndürdü. Akademik PDF'lerin bir kısmı açılmadı (qdl.qa, Britannica, tDAR 403).
   - ⇒ "bulunamadı"ların önemli kısmı **"okunamadı"**dır, "yok" değil. Her satırda aday kaynak yazılı.

## 1b. Eski denetim ve dersler taraması

- `denetim/` + `dersler/` içinde "aşiret|asiret|kabile|devletsiz|konfederasyon" geçen **1.964** dosya var. Çoğu TDV önbelleği ve kronoloji çıktısıdır.
- Adı konuyla ilgili olanlar:
  - `denetim/EVREN4-1105/D1-KABILE-OLCUM.md`: kabile/kasıtlı boşluk noktaları Değişmez 1 sayımına girer. 5 Kasım ölçümü: kabile 149 · devletsiz 108. Bugün kabile **66**'ya düşmüş, aradaki kayıtlar sahipli zincire geçmiş.
  - `denetim/KABILE-KAMERIKA-0903.json`
  - `denetim/BULGU-BOSLUK-CINSI.md`
  - `denetim/PAKET-0083-A-BOS-BOLGE.md`
  - `denetim/OLCUM-KITA16-FIZANBOSLUK-0913.md`
  - `denetim/KRONO-BOSLUK-0930.*`
- `data/kaynakli_halka_*.js`: 5 dosyanın yalnız birinde (`ferhatpasa`) "kabile" geçiyor: Mâkû 1574, Mahmûdî Kürt kabilesi reisi İvaz Bey. Bu bir Osmanlı tâbiliği tanığıdır, devletsiz aşiret yurdu değildir. Envantere nokta olarak girmez.

## 1c. Konfederasyon listesi (A sınıfında, kaynakla)

| konfederasyon | bileşenler (ajan çıktısı; okunmadıysa beyanlı) | bölge | atlas noktaları | tarih durumu |
|---|---|---|---|---|
| Kel Ahaggar (Tuareg) | asil Kel Ghela + haraçgüzar İmghad boyları (okunmadı) | Hoggar yaylası | Hoggar, Tamanrasset | bulunamadı. "1750" yalnız Vikipedi türevi; 1902 Fransız fethi üst sınır |
| Anaze | Ruvale, Veld Ali, Beşir… (okunmadı) | Suriye Çölü, Vâdî Sirhân, Hamâd | Vâdî Sirhân, Hamâd, Widyân, Nuhayb | yalnız 19. yy + 1910 (okunmadı) |
| Türkmen boyları (gevşek birlik) | Teke, Yomut, Salur, Ersarı, Çavdur | Karakum, Uzboy, Üstyurt | Karakum, Uzboy, Üstyurt (batı/doğu) | Karakum kaydında EIr Bregel 1511 + LoC; bu oturumda yeniden okunmadı |
| Fiji konfederasyonları | Kubuna (Bau), Burebasaga (Rewa), Tovata | Viti Levu doğusu | Bau | 1843, 1871 okundu (MAA Cambridge). 1867-71 Cakobau krallığı ⇒ devletsiz sayılması tartışmalı, YAZILMADI |
| Haudenosaunee (İrokua) | Onondaga, Mohawk, Seneca, Cayuga, Oneida | New York iç kesimi | 5 nokta | B1 sınıfı (sahipli şehir dilimi), pencere yazılamaz |
| Toubou (Tubu) | Teda, Daza; Derde | Tibesti | Tibesti | bulunamadı. Uyarı: Osmanlı 1907-1912 garnizonu bildiriliyor (ikincil), kayıttaki "devlet ulaşmadı" gerekçesiyle çelişebilir |

## 2. Sınıf sayıları

| sınıf | sayı | engel mi (5 gün + B dolgusu) |
|---|---:|---|
| A1 aşiret yurdu / konfederasyon (sahipsiz nokta) | 40 | evet |
| A2 devletsiz şehir (hiç sahibi yok) | 4 | evet |
| B1 aşiret aralığı (sahipli şehrin boş dilimi) | 26 | evet, boş diliminde |
| B2 devletsiz şehir aralığı (sahipli şehrin boş dilimi) | 119 | evet, boş diliminde (`tur:bolge` 8 kayıt hariç) |
| C1 boş çöl (devletsiz + tur:bolge — motor zaten doldurur) | 30 | hayır (motor doldurur) |
| C2 gerçek boş toprak (insansız/çöl) | 14 | evet (DOLDURULABILIR_BOS dışında) |
| D1 veri-yok (sahipsiz nokta) | 322 | evet (DOLDURULABILIR_BOS dışında) |
| D2 veri-yok (sahipli şehrin boş dilimi) | 69 | evet, boş diliminde |
| E hata kaydı | 6 | hayır (doldurulabilir) |
| **toplam** | **630** | |

## 3. Mükerrer ve yakınlık taraması (normalleştirilmiş ad + 3 km)

| nokta | bos | aynı ad ≤3 km | herhangi nokta ≤3 km | karar |
|---|---|---|---|---|
| Filistin | veri-yok | — | Remle (Ramla) | ölçüldü, aşağıda |
| Cibâl | veri-yok | — | Hemedan | ölçüldü, aşağıda |
| Kamboçya | veri-yok | — | Kompong Thom | ölçüldü, aşağıda |
| Washington (D.C.) | veri-yok | — | Washington D.C. | ölçüldü, aşağıda |
| Lusitania | veri-yok | — | Baetica | ölçüldü, aşağıda |
| Baetica | veri-yok | — | Lusitania | ölçüldü, aşağıda |
| Aigion | veri-yok | — | Vostitsa (Aigion) | ölçüldü, aşağıda |
| İfrîkıye | veri-yok | — | Kayrevan | ölçüldü, aşağıda |
| Endülüs | veri-yok | — | Kurtuba (Córdoba) | ölçüldü, aşağıda |
| Adiabene | veri-yok | — | Erbil | ölçüldü, aşağıda |
| Mısır | veri-yok | — | Eski Kahire (Babilon Kalesi) | ölçüldü, aşağıda |
| Port Vila (Efate) | veri-yok | Port Vila | Port Vila | ölçüldü, aşağıda |

## 4. A sınıfı (sahipsiz aşiret / devletsiz noktalar) — nokta başına kaynak ve karar

| nokta | dosya | sınıf | topluluk / konfederasyon | kaynak yılları (okunan) | pencere | karar |
|---|---|---|---|---|---|---|
| Hoggar | y.js | asiret-yurdu | Kel Ahaggar (Ahaggar Tuareg konfederasyonu) [KONF: bulunamadı (okunmadı)] | — · okunmadı: 1902 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Karakum | y.js | asiret-yurdu | Türkmen boyları (Teke, Yomut, Salur, Ersarı, Çavdur) | — · okunmadı: 1511, 1860, 1884 | — | yalnız yüzyıl ⇒ BULUNAMADI, iş listesi |
| Ogaden | y.js | asiret-yurdu | Ogaden klanı (Darod) ve Somali klanları | — · okunmadı: 1887 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Somali çölü | y.js | asiret-yurdu | Somali klanları (Darod, Hawiye vb.) | — | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Tamanrasset | y.js | asiret-yurdu | Kel Ahaggar (Ahaggar Tuareg konfederasyonu) [KONF: bulunamadı (kaynakta okunmadı; asil Kel Ghela + haraçgüzar İ] | — · okunmadı: 1902 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Tibesti | y.js | asiret-yurdu | Tubu (Teda) / Derde yönetimi | — · okunmadı: 1907 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Uzboy | y.js | asiret-yurdu | Türkmen boyları (Yomut, Ersarı, Teke vb.) | — | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Üstyurt platosu (batı) | y.js | asiret-yurdu | Türkmen boyları (ve 19. yy'da Kazak/Karakalpak göçerleri) | — · okunmadı: 1511 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Üstyurt platosu (doğu) | y.js | asiret-yurdu | Türkmen boyları | — | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Kufra (el-Cûf) | y_afrika.js | asiret-yurdu | Sünûsî tarikatı; Zuvaye ve Tubu aşiretleri | — · okunmadı: 1895, 1856 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Bau (Fiji Konfederasyonları) | y_ek30.js | asiret-yurdu | Kubuna (Bau) / Burebasaga (Rewa) / Tovata konfederasyonları [KONF: Kubuna=Bau çevresi; Burebasaga=Rewa çevresi (Tanoa Visawaqa'] | 1843 (Museum of Archaeology and Anthropology Cambridge, 'Fiji Chiefdoms' htt), 1871 (MAA Cambridge (okundu) + Fiji Times) · okunmadı: 1865, 1867, 1874 | — | yıl var ama akademik/okunmuş değil ⇒ YAZILMADI, iş listesi |
| Yap | y_ek30.js | asiret-yurdu | Yapese (Gagil-Tamil-Rull köy ittifakları, sawei haraç ağı) | — · okunmadı: 1100 | — | yalnız yüzyıl ⇒ BULUNAMADI, iş listesi |
| Hamâd (Bâdiyetü'ş-Şâm içi) | y_ek4.js | asiret-yurdu | Anaze (Ruvale), Şammar [KONF: Anaze alt kolları (yukarıya bakın)] | — | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Nuhayb (Nukhayb) | y_ek4.js | asiret-yurdu | Şammar / Anaze | — | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Widyân (el-Widyân) | y_ek4.js | asiret-yurdu | Anaze/Şammar (kayıtta)  | — | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine İç Kesimi (Güney — Fly Nehri Bataklıkları) | y_emilme.js | asiret-yurdu | Fly nehri halkları (Kiwai, Marind-anim, Kiwai vb.) | — · okunmadı: 1936 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine İç Kesimi (Kuzey — Sepik Havzası) | y_emilme.js | asiret-yurdu | Sepik halkları (Iatmul, Abelam vb.) | — | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine İç Yaylaları (Batı — Baliem Vadisi) | y_emilme.js | asiret-yurdu | Dani (Lani) | — · okunmadı: 1938 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine İç Yaylaları (Merkez — Mount Hagen) | y_emilme.js | asiret-yurdu | Hagen çevresi yayla halkları (Melpa, Kuman vb.) | — | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Beyan K4.5 B62.5 | y_gamerika.js | asiret-yurdu | Pemon (Arekuna, Kamarakoto, Taurepan); Gran Sabana | 1770 (Encyclopedia of World Cultures 'Pemon' (Encyclopedia.com) https://www.), 1817 (aynı), 1900 (aynı) | 1745-01-01…1867-01-01 | TARİHLENDİ, veri yazıldı |
| Beyan K7.5 B60.5 | y_gamerika.js | asiret-yurdu | Akawaio (Kapon) ve Arekuna-Pemon; Cuyuní/Mazaruni | — · okunmadı: 1750 | — | yalnız yüzyıl ⇒ BULUNAMADI, iş listesi |
| Beyan K7.5 B62.5 | y_gamerika.js | asiret-yurdu | Ye'kuana (Yekwana, Maquiritare) ve Panare; Caura-Aro | — · okunmadı: 1744 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Mushuau-nipi (Indian House Lake) | y_kamerika.js | asiret-yurdu | Mushuau Innu / Naskapi (George River karibu sürüsünü izleyen | — · okunmadı: 1916 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Tocobaga (Safety Harbor) | y_kamerika.js | asiret-yurdu | Tocobaga (Safety Harbor kültürü) reisliği | 1567 (Trail of Florida's Indian Heritage https://www.trailoffloridasindianhe), 1549 (aynı (Burnett, Florida's Past c.1 atfıyla)), 1763 (aynı) · okunmadı: 1528 | — | yıl var ama akademik/okunmuş değil ⇒ YAZILMADI, iş listesi |
| Wintu (Yukarı Sacramento) | y_kamerika.js | asiret-yurdu | Wintu (Wintun) bantları | — · okunmadı: 1833, 1832, 1850 | — | yıl var ama akademik/okunmuş değil ⇒ YAZILMADI, iş listesi |
| Vâdi'd-Devâsir | y_nokta_ortadogu_0917.js | asiret-yurdu | Devâsir (Dawasir) kabilesi; Dam emirliği | — · okunmadı: 1908, 1871 | — | yıl var ama akademik/okunmuş değil ⇒ YAZILMADI, iş listesi |
| Aru-Tanimbar adaları | y_okyanusya.js | asiret-yurdu | Tanimbar (Yamdena) toplulukları: köy/klan; Tanimbar-Kei kült | — · okunmadı: 1629, 1639, 1900 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Aru-Tanimbar adaları 2 | y_okyanusya.js | asiret-yurdu | Aru adaları halkları (Dobo ticaret limanı çevresi) | — · okunmadı: 1905 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Louisiade-Milne takımadası | y_okyanusya.js | asiret-yurdu | Misima, Sudest (Tagula), Rossel adaları Austronezyen toplulu | — · okunmadı: 1888 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Britanya iç kesimi | y_okyanusya.js | asiret-yurdu | Baining, Nakanai, Tolai (kıyı), iç dağ toplulukları | — · okunmadı: 1700, 1884 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine Batı (Kuş Başı / Vogelkop) | y_okyanusya.js | asiret-yurdu | Arfak, Maybrat, Meyah, Moi, Mpur, Hatam toplulukları | — · okunmadı: 1716, 1898 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine Batı (Kuş Başı / Vogelkop) 2 | y_okyanusya.js | asiret-yurdu | Raja Ampat/Sorong kıyısı Maya, Moi toplulukları (Tidore etki | — · okunmadı: 1667, 1780 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine Merkezî Yaylaları | y_okyanusya.js | asiret-yurdu | Ekari (Mee) / Paniai-Wissel Gölleri halkları; Kapauku | — · okunmadı: 1936, 1938, 1930 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine Merkezî Yaylaları 2 | y_okyanusya.js | asiret-yurdu | Yukarı Fly / Star Dağları çevresi Ok-Min halkları (olasılık; | — · okunmadı: 1938 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine Merkezî Yaylaları 3 | y_okyanusya.js | asiret-yurdu | Papua güneydoğu yaylaları / Kikori-Purari havzası toplulukla | — · okunmadı: 1930 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine Merkezî Yaylaları 4 | y_okyanusya.js | asiret-yurdu | Star Dağları/Sibil çevresi Ok halkları (olasılık) | — | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Gine Merkezî Yaylaları 5 | y_okyanusya.js | asiret-yurdu | Paniai-Wissel Gölleri çevresi Ekari (Mee) / Kapauku | — · okunmadı: 1936 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Yeni Kaledonya iç kesimi | y_okyanusya.js | asiret-yurdu | Kanak şefliği toplulukları (grande chefferie / petite cheffe | — · okunmadı: 1774, 1853, 1878 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |
| Vâdî Sirhân | y_seyrek.js | asiret-yurdu | Anaze konfederasyonu (Ruvale, Veld Ali); Sirhan aşireti [KONF: Anaze: Veld Ali (kuzey), Ruvale (Suriye çölü), Beşir (yarıma] | — · okunmadı: 1850, 1910 | — | yalnız yüzyıl ⇒ BULUNAMADI, iş listesi |
| Yakut toprakları (Orta Lena) | y_sibirya.js | asiret-yurdu | Yakutlar (Saha), uruglar; en kuvvetlisi Namaslar | 1632 (TDV İslâm Ansiklopedisi 'Yakutlar' (islamansiklopedisi.org.tr/yakutlar) | 1607-01-01…1682-01-01 | TARİHLENDİ, veri yazıldı |
| Oraibi (Hopi, Üçüncü Mesa) | y_amerika.js | devletsiz-se | Hopi (Hopisinom) | — · okunmadı: 1680, 1700 | — | yıl var ama akademik/okunmuş değil ⇒ YAZILMADI, iş listesi |
| Paquimé (Casas Grandes) | y_kamerika.js | devletsiz-se | Paquimé / Casas Grandes (Medio dönemi) toplumu | — · okunmadı: 1450, 1300 | — | yıl var ama akademik/okunmuş değil ⇒ YAZILMADI, iş listesi |
| Pecos Pueblo (Cicuye) | y_kamerika.js | devletsiz-se | Pecos (Cicuye) Pueblo — Towa konuşan, bağımsız şehir-devlet | 1540 (J. L. Kessell, Kiva, Cross, and Crown: The Pecos Indians and New Mexic), 1541 (Kessell, aynı) | 1515-01-01…1591-01-01 | TARİHLENDİ, veri yazıldı |
| Anadır (Anadyrsk) | y_sibirya.js | devletsiz-se | Çukçiler (Luoravetlan), Koryaklar | — · okunmadı: 1649, 1764 | — | BULUNAMADI ⇒ engel olmaktan çıkar, iş listesi |

## 5. B1 — sahipli şehirlerin aşiret dilimleri

Bu noktalar birer şehirdir; `bos` yalnız sahipsiz dilimlerini anlatır. `kur:`/`bit:` yazmak şehrin kendisini haritadan siler, bu yüzden pencere **yazılmadı** (bkz. §1 karar 2).

| nokta | dosya | tür | boş dilim(ler) | mevcut gerekçe / kaynak (kısaltılmış) |
|---|---|---|---|---|
| Timbuktu | y.js | sehir | 1893–1894 | 1430-1468 arası: Mali İmparatorluğu'nun zayıflamasıyla bölge Tuareg (Tevârik) boy konfederasyonunun eline geçti, 1468'de Songhay tarafından fethedilen |
| Vladikavkaz | y.js | kale | 1281–1784 | TDV vladikafkas/osetler: 1784 öncesi bölge Oset vadileri çevresi, bölgenin hangi devletin idaresinde olduğu kaynakta yok; şehir 1784'te kuruldu (TDV i |
| Whangārei | y_a78_okyanusya.js | sehir | 1281–1840 | 1839 kereste yerleşimi ile 1840-02-06 Waitangi arası: Māori iwi yönetimi — emsal ve kaynak atlasın 'Aotearoa Māori Yerleşimi' kaydı (yerlesimler_ek30. |
| Cayuga | y_amerika.js | koy | 1281–1450 | 1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle cat |
| Mohawk (Kayenlaha'ke) | y_amerika.js | koy | 1281–1450 | 1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle cat |
| Oneida | y_amerika.js | koy | 1281–1450 | 1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle cat |
| Onondaga (İrokua Konfederasyon Merkezi) | y_amerika.js | sehir | 1281–1450 | 1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle cat |
| Seneca (Ganondagan) | y_amerika.js | koy | 1281–1450 | 1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle cat |
| Suva | y_ek30.js | liman | 1281–1874 | ANU Press, 'The Making of a Capital: A Social History of Suva, 1870–1882' (press-files.anu.edu.au/downloads/press/n10434/pdf/ch03.pdf) — Suva köyü 184 |
| Krasnoyarsk | y_ek9.js | kale | 1281–1628 | 1628 öncesi Yenisey Kırgızları'nın otlağı; atlasta karşılığı olan bir kimlik yok ve UYDURULMADI. 🔴 TDV'ye basmıyor. |
| Scarborough (Tobago) | y_ek_karayip_adalar.js | liman | — | Tobago 1814'e dek Kalinago/Hollanda/Kurland/Fransız/İngiliz arasında defalarca el değiştirdi; modellenmedi. Kalıcı İngiliz yönetimi 1814-05-30. |
| Asosa | y_h2_afrika.js | sehir | 1281–1897 | Beni Şengûl şeyhlikleri — kimlik yok; sınır 1902'de çizildi, 1897 YER TUTUCU |
| Bedele | y_h2_afrika.js | sehir | 1281–1897 | İllûbâbor Oromo krallıkları — kimlik yok |
| Dembîdollo | y_h2_afrika.js | sehir | 1281–1897 | Sayo/Vollega Oromo krallığı — kimlik yok |
| Er-Renk | y_h2_afrika.js | sehir | 1281–1885 | Şilluk Krallığı — `silluk` kimliği yok; Mısır Ekvatorya dönemi Değişmez 2 borcu doğuracağı için yazılamadı |
| Fâşoda | y_h2_afrika.js | sehir | 1281–1885 | Şilluk Krallığı'nın başkenti — `silluk` kimliği yok |
| Gimbî | y_h2_afrika.js | sehir | 1281–1897 | Vollega Oromo krallıkları — kimlik yok |
| Gore | y_h2_afrika.js | sehir | 1281–1897 | İllûbâbor Oromo krallıkları — kimlik yok |
| Malakal | y_h2_afrika.js | sehir | 1281–1885 | Şilluk kuşağı — `silluk` kimliği yok |
| Maridi | y_h2_afrika.js | sehir | 1281–1899 | Azande/Moru kuşağı — `zende` kimliği yok |
| Meşra er-Rek | y_h2_afrika.js | liman | 1281–1899 | Bahrülgazâl iskelesi — Nuer/Dinka ülkesi, devlet teşkilâtı yok. ⚠️ Mısır ilhakı (1873) Değişmez 2 borcu doğuracağı için DÖNEM YAZILAMADI — bu not koru |
| Nekemte | y_h2_afrika.js | sehir | 1281–1897 | Leka Nekemte Oromo krallığı — kimliği yok; habesistan yazmak §3.5.1 ters yönü olurdu |
| Tembura | y_h2_afrika.js | sehir | 1281–1899 | Azande Krallığı — `zende` kimliği yok |
| Yambio | y_h2_afrika.js | sehir | 1281–1899 | Azande Krallığı — `zende` kimliği yok; en yakın komşuyla boyamak §3.5.1 ihlali olurdu |
| Şeşemene | y_h2_afrika.js | sehir | 1281–1897 | Arsi/Sidamo kuşağı — Oromo krallıklarının kimliği yok |
| Teymâ | y_seyrek.js | sehir | 1281–1836 | TDV `teyma`: 1830'dan itibaren yarı bağımsız Rummân emîrleri; son bağımsız emîr 1950'de öldü — yerel emîrlik, devlet idaresi yok; 1836-1921 beyanlı bo |

## 6. B2 — sahipli şehirlerin devletsiz dilimleri

Bu noktalar birer şehirdir; `bos` yalnız sahipsiz dilimlerini anlatır. `kur:`/`bit:` yazmak şehrin kendisini haritadan siler, bu yüzden pencere **yazılmadı** (bkz. §1 karar 2).

| nokta | dosya | tür | boş dilim(ler) | mevcut gerekçe / kaynak (kısaltılmış) |
|---|---|---|---|---|
| Bingazi | y.js | liman | 1281–1551 | 1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor — kaynak SUSUYOR (D020). Osmanlı günü 1551-08-15 (Trablusgarp seferi); TDV Bingazi'nin KESİN ka |
| Buraydâ (Kasîm) | y.js | sehir | 1281–1744 | 1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje k |
| Dir'iye (Necid) | y.js | kale | 1281–1744 | 1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje k |
| Doha (Katar) | y.js | liman | 1281–1825 | TDV, madde: katar — "3 Kasım 1916'da Katar Emîri Abdullah ile ... himaye antlaşması" (ilhak değil himaye, tarih BİREBİR eşleşti). Mevcut sahiplik (kat |
| Hâil | y.js | sehir | 1281–1779 | 1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje k |
| Manama (Bahreyn) | y.js | liman | — | Körfez şeyhliklerinde 19. yy'daki İngiliz himaye antlaşmalarına kadar merkezî devlet denetimi kaydı yok; yerleşim VARDI. Kaynak: CLAUDE.md §3'te belge |
| Mukalla | y.js | liman | 1281–1888 | Körfez şeyhliklerinde 19. yy'daki İngiliz himaye antlaşmalarına kadar merkezî devlet denetimi kaydı yok; yerleşim VARDI. Kaynak: CLAUDE.md §3'te belge |
| Necid içi | y.js | bolge | 1281–1744 | 1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje k |
| Nefud çölü | y.js | bolge | 1281–1779 | 1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje k |
| Riyad | y.js | sehir | 1281–1744 | 1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje k |
| Uneyze | y.js | sehir | 1281–1744 | 1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje k |
| Şakrâ | y.js | sehir | 1281–1744 | 1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje k |
| Beyzâ (Kirene) | y_afrika.js | sehir | 1281–1551 | 1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor; kaynak susuyor. |
| Ecdâbiye | y_afrika.js | sehir | 1281–1551 | 1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor; kaynak susuyor. |
| Merc | y_afrika.js | sehir | 1281–1551 | 1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor; kaynak susuyor. |
| Tobruk | y_afrika.js | liman | 1281–1556 | 1281-1556 arası TDV `derne`/`berka` Tobruk için ayrı bir egemen adı vermiyor; kaynak susuyor. |
| Acoma Pueblo (Sky City) | y_amerika.js | koy | 1281–1610 | 1281-1610 arasi Pueblo koyleri siyaseten OZERKTI: Ispanyol somurgeciliginden once var olan 70ten fazla koyun her biri, dini topluluklarin baskanlarind |
| Camagüey bölgesi (Taino) | y_amerika.js | bolge | 1281–1514 | Küba'nın orta kesimindeki Taino/Ciboney toprağı; Diego Velázquez'in 1513-1515 fetih seferleri bölgeyi İspanyol idaresine soktu. |
| Higüey (Taino cacicazgosu) | y_amerika.js | bolge | 1281–1504 | Beş büyük Taino cacicazgosundan biri (Cayacoa, sonra Cotubanamá); Higüey Savaşı (1503-1504) ile yıkıldı. |
| Jaragua (Taino cacicazgosu) | y_amerika.js | bolge | 1281–1503 | Beş büyük Taino cacicazgosundan biri (Behechio, sonra Anacaona); kaynak siyasi birleşik otoriteyi AÇIKÇA tanımlıyor. 1503'te Vali Ovando'nun Yaguana k |
| Taos Pueblo | y_amerika.js | koy | 1281–1610 | 1281-1610 arasi Pueblo koyleri siyaseten OZERKTI: Ispanyol somurgeciliginden once var olan 70ten fazla koyun her biri, dini topluluklarin baskanlarind |
| Chichijima (Ogasawara) | y_asya.js | liman | — | 1876 öncesi ıssız/karışık yerleşim (1830'dan Batılı-Hawaii topluluğu); Britanya ve ABD iddiaları, Tokugawa 1861-62 girişimi kalıcı idare kurmadı (Chap |
| Etorofu (Shana / Kurilsk) | y_asya.js | liman | — | 1799 öncesi Ainu toprağı (Walker 2001). 🟡 BEYANLI. |
| Hakodate | y_asya.js | liman | 1281–1550 | Hokkaido/Ezo 1281-1550 arasinda hicbir devletin idari topragi degildi; anakara sogunluklari (Kamakura-Kenmu-Muromachi) Honsu'yla sinirliydi ve Matsuma |
| Hualien | y_asya.js | liman | — | 1875 öncesi Qing doğu kıyısını 'huawai' (idare dışı) tuttu; Amis/Sakizaya/Kavalan/Taroko toprağı (Shepherd 1993; Teng 2004). 🟡 BEYANLI. |
| Iwo Jima (Volkan Adaları) | y_asya.js | liman | — | 1891 öncesi ıssız ada; Japonya Volkan (Kazan) Adaları'nı 1891'de ilhak etti, iskân 1889'dan (nippon.com Ogasawara dosyası özeti — akademik kaynak aran |
| Kaohsiung (Takao / Dagou) | y_asya.js | liman | — | 1281-1636 arası Makatao/Siraya yerli köy toplulukları; Yuan/Ming idaresi Penghu'da biter, Tayvan ana adası hiçbir devletin idarî toprağı değildi (Andr |
| Kunashiri (Furukamappu / Yuzhno-Kurilsk) | y_asya.js | liman | — | 1799 öncesi Ainu toprağı; Matsumae ticaret tekeli devlet idaresi değildir (Walker 2001). 🟡 BEYANLI. |
| Matsumae | y_asya.js | kale | 1281–1550 | Hokkaido/Ezo 1281-1550 arasinda hicbir devletin idari topragi degildi; anakara sogunluklari (Kamakura-Kenmu-Muromachi) Honsu'yla sinirliydi ve Matsuma |
| Nikolskoye (Bering Adası, Komandor) | y_asya.js | liman | — | 1741 öncesi ıssız ada (yerleşik halk yok); Bering seferi Kasım 1741'de keşfetti (Frost 1992). 🟡 BEYANLI. |
| Paramushir (Severo-Kurilsk) | y_asya.js | liman | — | 1711 öncesi Kuril Ainu toprağı; Rus Kazak keşfi (Antsiferov-Kozyrevsky) 1711 (Stephan 1974). 🟡 BEYANLI. |
| Taichung (Dadun) | y_asya.js | sehir | — | 1723 öncesi Pazeh/Papora/Babuza yerli toplulukları; Hollanda ve Tungning etkisi kıyı ve güney ovasında kaldı, iç ova idarî toprak değildi (Shepherd 19 |
| Taitung (Beinan / Pi-lam) | y_asya.js | sehir | — | 1875 öncesi Puyuma (Beinan krallığı)/Amis toprağı; Qing idare dışı (Shepherd 1993; Teng 2004). 🟡 BEYANLI. |
| Yilan (Kavalan / Gamalan) | y_asya.js | sehir | — | 1812 öncesi Kavalan yerli toplulukları; Spanyol/Hollanda temasları (1630'lar) kalıcı idare kurmadı, Qing 1812'ye dek adayı bu kıyıda idare etmedi (She |
| Ayan | y_ek13.js | liman | 1281–1679 | 1679 öncesi Even/Lamut kıyısı, devletsiz. Liman 1844'te kuruldu ama kıyı Uda (1679) ve Ohotsk (1647) ostroglarının yasak çevresindeydi; 1844 yazılsayd |
| Blagoveşçensk | y_ek13.js | sehir | 1281–1651 | 1651 öncesi Daur toprağı, devletsiz. Zincir Albazin'den birebir: aynı Amur voyvodalığı, aynı üç gün. 🔴 TDV'ye basmıyor. 🟡 kur:1856-06-02 (Blagoveşçens |
| Essey | y_ek13.js | bolge | 1281–1630 | 1630 öncesi Evenk/Saha toprağı, devletsiz. Aşağı Tunguska platosu ile aynı sınıf: yasak zimovyesi, kasaba değil. 🔴 TDV'ye basmıyor. |
| Habarovka | y_ek13.js | kale | 1281–1653 | 1653 öncesi Nanay/Daur toprağı; 1653 Ningguta kaydının Qing başlangıcı, aynı idarî çevre. 🔴 TDV'ye basmıyor. 🟡 kur:1858-01-01 (Büyük Sovyet Ansikloped |
| Kirensk | y_ek13.js | kale | 1281–1630 | 1630 öncesi Evenk toprağı, devletsiz. 🔴 TDV'ye basmıyor. |
| Nikolayevsk (Amur ağzı) | y_ek13.js | liman | 1281–1689 | 1689-09-06 öncesi Nivh (Gilyak) toprağı; Qing idaresi Amur ağzına inmedi, Rusya da Nerçinsk'e kadar iddia etmedi. 🔴 TDV'ye basmıyor. 🟡 kur:1850-08-13  |
| Udskoy ostrogu | y_ek13.js | kale | 1281–1679 | 1679 öncesi Evenk/Negidal toprağı, devletsiz. 🔴 TDV'ye basmıyor. |
| Vilyuysk | y_ek13.js | kale | 1281–1634 | 1634 öncesi Yakut (Saha) toprağı, devletsiz. 🔴 TDV'ye basmıyor. |
| Vladivostok | y_ek13.js | liman | 1281–1653 | 1653 öncesi Udege/Jurchen toprağı; Ningguta ile aynı idarî çevre ve aynı başlangıç günü. 🔴 TDV'ye basmıyor. |
| Yerbogaçen | y_ek13.js | kale | 1281–1786 | 1786 öncesi Evenk toprağı, devletsiz. 🔴 TDV'ye basmıyor. 🔴 DÜZELTİLDİ (M-4443 döngüsü, 17 Eylül 2026): dönem başı 1668→1786'ya çekildi. Kaynak RAS Dil |
| İmperator limanı | y_ek13.js | liman | 1281–1653 | 1653 öncesi Orok/Udege kıyısı, devletsiz. ⚠️ Kasaba noktası maskede 0,5 km denizde kaldığı için 8,4 km kuzeybatıya kaydırıldı. 🔴 TDV'ye basmıyor. 🟡 ku |
| Barnaul | y_ek18.js | sehir | 1281–1635 | 1635 öncesi Teleüt toprağı, devletsiz. 🔴 1730 TDV'ye basmıyor. |
| Biysk | y_ek18.js | kale | 1281–1635 | 1635 öncesi Teleüt toprağı, devletsiz. 🔴 1709 TDV'ye basmıyor. |
| Kainsk (Baraba) | y_ek18.js | kale | 1281–1722 | 1722 öncesi Baraba bozkırı. ⚠️ `cungar` YAZILMADI: Baraba Cungar'ın değil Sibir Hanlığı'nın çevresiydi (`_ek9` gerekçesi) ve Cungar'ı buraya yazmak on |
| Kuznetsk | y_ek18.js | kale | 1281–1618 | 1618 öncesi Şor/Teleüt toprağı, devletsiz. 🔴 TDV'ye basmıyor. |
| Omsk | y_ek18.js | kale | 1281–1716 | 1716 öncesi Baraba/İrtiş bozkırı, devletsiz. 🔴 TDV'ye basmıyor. |
| Pavlodar (Koryakov) | y_ek18.js | kale | 1281–1635 | 1635 öncesi yukarı İrtiş bozkırı. 🔴 1720 TDV'ye basmıyor. |
| Semipalatinsk | y_ek18.js | kale | 1281–1635 | 1635 öncesi yukarı İrtiş bozkırı. 🔴 1718 TDV'ye basmıyor. |
| Tara | y_ek18.js | kale | 1281–1594 | 1594 öncesi Sibir Hanlığı'nın çevresi; hanlığın çekirdeği Tura-Tobol-İşim'di ve Tara İrtiş'in aşağısında, sınırın dışında. 🔴 1594 TDV'ye basmıyor. |
| Ust-Kamenogorsk | y_ek18.js | kale | 1281–1635 | 1635 öncesi Altay eteği, devletsiz. 🔴 1720 TDV'ye basmıyor. |
| Zmeinogorsk | y_ek18.js | sehir | 1281–1635 | 1635 öncesi Altay eteği, devletsiz. 🔴 1736 TDV'ye basmıyor. |
| Bulun | y_ek8.js | sehir | 1281–1632 | Lena deltası; 1632 öncesi devletsiz. Tarih Jigansk'la aynı çünkü ikisi de Lena havzasının aynı yılki Rus ilerlemesiyle bağlandı. |
| Dudinka | y_ek8.js | sehir | 1281–1667 | 1667 öncesi Nganasan/Enets toprağı, devletsiz. |
| Hatanga | y_ek8.js | kale | 1281–1626 | 1626 öncesi Nganasan toprağı, devletsiz. |
| Jigansk | y_ek8.js | kale | 1281–1632 | 1632 öncesi Evenk/Yakut toprağı, devletsiz. |
| Mangazeya | y_ek8.js | kale | 1281–1601 | 1601 öncesi Nenets/Selkup toprağı, devletsiz. |
| Obdorsk (Salehard) | y_ek8.js | kale | 1281–1595 | 1595 öncesi Yugra/Nenets toprağı — TDV sibir-hanligi hanlığın sınırını Tura-Tobol-İşim ve İrtiş civarı diye veriyor, Ob' ağzı bu sınırın DIŞINDA. Devl |
| Turuhansk | y_ek8.js | kale | 1281–1607 | 1607 öncesi Evenk/Ket toprağı, devletsiz. |
| Ust-Yansk | y_ek8.js | sehir | 1281–1638 | Yana ağzı; Verhoyansk ile aynı 1638 ilerlemesi. |
| Verhoyansk | y_ek8.js | kale | 1281–1638 | 1638 öncesi Yakut/Even toprağı, devletsiz. |
| Yamal ucu | y_ek8.js | bolge | 1281–1595 | Obdorsk ile aynı gerekçe; yarımadanın kuzey ucu için dolgu noktası — noktasız kalırsa Perm'in peteği 2.100 km uzaktan buraya uzanır. |
| Zaşiversk | y_ek8.js | kale | 1281–1639 | İndigirka; 1639 öncesi Yukagir/Even toprağı, devletsiz. |
| Albazin | y_ek9.js | kale | 1281–1651 | 1651 öncesi Daur toprağı, devletsiz. 🔴 1651 · 1689-09-06 · 1858-05-28 TDV'ye basmıyor. |
| Berezov | y_ek9.js | kale | 1281–1592 | 1592 öncesi Hantı (Yugra) toprağı; TDV sibir-hanligi hanlığın sınırını Tura-Tobol-İşim ve İrtiş civarı diye veriyor, aşağı Ob' bu sınırın dışında. |
| Nerçinsk | y_ek9.js | kale | 1281–1653 | 1653 öncesi Evenk/Daur toprağı. 🔴 TDV'ye basmıyor. |
| Ohotsk | y_ek9.js | liman | 1281–1647 | 1647 öncesi Even/Lamut toprağı, devletsiz. 🔴 TDV'ye basmıyor. |
| Olyokminsk | y_ek9.js | kale | 1281–1635 | 1635 öncesi Evenk toprağı, devletsiz. 🔴 TDV'ye basmıyor. |
| Surgut | y_ek9.js | kale | 1281–1592 | 1592 öncesi Hantı (Yugra) toprağı, Berezov ile aynı gerekçe (TDV kucum-han). 🟡 kur:1594-01-01 (BRE 'Сургут', old.bigenc.ru/geography/text/4174172 — AY |
| Tomsk | y_ek9.js | kale | 1281–1604 | 1604 öncesi Teleüt/Selkup toprağı, devletsiz. 🔴 1604 TDV'ye basmıyor. |
| Yakutsk | y_ek9.js | kale | 1281–1632 | 1632 öncesi Yakut (Saha) toprağı, devletsiz. 🔴 TDV'ye basmıyor. |
| Yeniseysk | y_ek9.js | kale | 1281–1619 | 1619 öncesi Ket/Evenk toprağı, devletsiz. 🔴 TDV'ye basmıyor. |
| Katar Yarımadası (iç, dolgu) | y_ek_korfez.js | bolge | 1281–1559, 1795–1868 | Katar yarımadasının bu iç kesiminde nokta yoktu ve komşu Ukayr (Uceyr) peteğine emiliyordu (H-0021, py arac/nicin_bos.py --lat 25.3 --lon 51.2 --gun 1 |
| Boma | y_emilme.js | liman | 1281–1885 | kolonyal dönem öncesi bu spesifik nehir ağzı noktasında merkezi bir devlet kaydı yok |
| Finschhafen | y_emilme.js | liman | 1281–1884 | 1884 Alman ilhakından önce bu kıyı şeridinde yerli köyler dışında merkezi bir devlet yoktu — boşluk veri eksikliği değil, gerçek siyasi boşluk |
| Kisangani (Stanleyville) | y_emilme.js | sehir | 1281–1885 | kolonyal dönem öncesi bu spesifik iç-nehir noktasında merkezi bir devlet kaydı yok |
| Madang | y_emilme.js | liman | 1281–1884 | 1884 Alman ilhakından önce bu kıyı şeridinde yerli köyler dışında merkezi bir devlet yoktu — boşluk veri eksikliği değil, gerçek siyasi boşluk |
| Matadi | y_emilme.js | liman | 1281–1390 | kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok |
| Mbanza-Kongo (São Salvador) | y_emilme.js | sehir | 1281–1390 | kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok |
| Musumba | y_emilme.js | sehir | 1281–1665 | lunda-imparatorlugu künyesi 1665'te başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok |
| Port Moresby | y_emilme.js | liman | 1281–1884 | yerli Motu köyleri çok daha önce vardı (balıkçı/çömlekçi köyleri, Hiri ticaret ağının bir ucu) ama merkezi/kayıtlı bir DEVLET hiç olmadı; 1884'te İngi |
| Soyo | y_emilme.js | liman | 1281–1390 | kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok |
| Akobo | y_h2_afrika.js | sehir | 1281–1899 | Anuak/Nuer ülkesi — devlet teşkilâtı ve kimlik yok |
| Asella | y_h2_afrika.js | sehir | 1281–1897 | Arsi Oromo — devlet teşkilâtı ve kimlik yok |
| Aveyl | y_h2_afrika.js | sehir | 1281–1899 | Dinka ülkesi — devlet teşkilâtı ve kimlik yok |
| Ağere Maryam | y_h2_afrika.js | sehir | 1281–1897 | Guci/Sidamo kuşağı — kimlik yok |
| Bentiu | y_h2_afrika.js | sehir | 1281–1899 | Nuer ülkesi — devlet teşkilâtı ve kimlik yok |
| Bor | y_h2_afrika.js | sehir | 1281–1899 | Dinka ülkesi — devlet teşkilâtı ve kimlik yok |
| Dilla | y_h2_afrika.js | sehir | 1281–1897 | Guci/Sidamo kuşağı — kimlik yok |
| Fangak | y_h2_afrika.js | sehir | 1281–1899 | Nuer ülkesi — devlet teşkilâtı ve kimlik yok |
| Ginir | y_h2_afrika.js | sehir | 1281–1897 | Bâle — Adal sonrası devletsiz kuşak, kimlik yok |
| Goba | y_h2_afrika.js | sehir | 1281–1897 | Bâle — Adal sonrası devletsiz kuşak, kimlik yok |
| Kapoeta | y_h2_afrika.js | sehir | 1281–1899 | Toposa ülkesi — devlet teşkilâtı ve kimlik yok |
| Ler | y_h2_afrika.js | sehir | 1281–1899 | Nuer ülkesi — devlet teşkilâtı ve kimlik yok |
| Mega | y_h2_afrika.js | sehir | 1281–1897 | Borana Oromo — kimlik yok |
| Mizan Teferi | y_h2_afrika.js | sehir | 1281–1897 | Bench/Kaffa güneybatısı — kimlik yok |
| Moyale | y_h2_afrika.js | sehir | 1281–1897 | Borana Oromo — kimlik yok; güneyi HALKA 6-7 (Kenya), kasten noktasız |
| Negele Borana | y_h2_afrika.js | sehir | 1281–1897 | Borana Oromo — devlet teşkilâtı ve kimlik yok |
| Nimule | y_h2_afrika.js | sehir | 1281–1899 | Ekvatorya güney ucu — kimlik yok; güneyi HALKA 6-7 (Uganda), kasten noktasız |
| Nâsir | y_h2_afrika.js | sehir | 1281–1899 | Nuer ülkesi — devlet teşkilâtı yok; Mısır ve Mehdî idaresi buraya ulaşmadı |
| Pibor | y_h2_afrika.js | sehir | 1281–1899 | Murle ülkesi — devlet teşkilâtı ve kimlik yok |
| Rağa | y_h2_afrika.js | sehir | 1281–1899 | Feroge/Kresh kuşağı — kimlik yok |
| Rumbek | y_h2_afrika.js | sehir | 1281–1899 | Dinka ülkesi — devlet teşkilâtı ve kimlik yok |
| Tonc | y_h2_afrika.js | sehir | 1281–1899 | Dinka ülkesi — devlet teşkilâtı ve kimlik yok |
| Torit | y_h2_afrika.js | sehir | 1281–1899 | Latuka ülkesi — devlet teşkilâtı ve kimlik yok |
| Vav | y_h2_afrika.js | sehir | 1281–1899 | Bahrülgazâl merkezi — Dinka/Cur ülkesi, kimlik yok |
| Yabelo | y_h2_afrika.js | sehir | 1281–1897 | Borana Oromo — devlet teşkilâtı ve kimlik yok |
| Yei | y_h2_afrika.js | sehir | 1281–1899 | Ekvatorya batı ucu — kimlik yok; batısı Lado kordonu |
| Şembe | y_h2_afrika.js | liman | 1281–1899 | Nil iskelesi — Dinka ülkesi, kimlik yok |
| Dilem (Harc) | y_nokta_ortadogu_0917.js | kasaba | 1281–1792 | 1281-1792 ve 1819-08-13→1824-06-01 boş: Harc'ta merkezî devlet yok (TDV necid); 1819'da Mısır garnizonu Harc'tan çekildi, bölge kabile temsilcilerine  |
| Havta (Havtat Benî Temîm) | y_nokta_ortadogu_0917.js | kasaba | 1281–1795 | 1281-1795 ve 1819-08-13→1824-06-01 boş (TDV necid; Lorimer I/1091). 1795-01-01 EN GEÇ, GEREKÇELİ: orta Arabistan seferleri Ahsâ seferinden (TDV vehhab |
| Hurma (Tâif doğusu) | y_nokta_ortadogu_0917.js | vaha | — | 🟡 1801→1815 zinciri Türabe'den (82 km, aynı Vehhâbî-Mısır savaşı; gün komşudan: Türabe · Lorimer I/1055, 1080-86). Lorimer'in garnizon listesinde (Bîş |
| Leylâ (Eflâc) | y_nokta_ortadogu_0917.js | kasaba | 1281–1795 | Zincir ve gerekçe Havta ile aynı (TDV necid: Eflâc Necd-i Ârızî'nin bölgesi; Turki Eflâc'a hâkim oldu — Al-Rasheed). 1795 EN GEÇ, GEREKÇELİ. 1819-08-1 |
| Türabe | y_nokta_ortadogu_0917.js | kasaba | — | Boş dilim 1816-01-01→1818-09-09: Mısır garnizonları Türabe'den çekildi (Lorimer I/1086), yerine kimin geçtiği bulunamadı. Lorimer Türabe'yi güney Hica |
| Dûmetülcendel (Cevf) | y_seyrek.js | sehir | 1281–1836 | TDV `necid`: bölgede merkezî devlet yok, aşiret idaresi; 1836 öncesi sahipsizlik KASITLI |
| Menfûha | y_zincir64.js | sehir | 1281–1744 | 1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi — ABİ MERKEZ Riyad kaydındaki proje kararı a |

## 7. C — gerçek boş toprak ve boş çöl; E — hata

| nokta | dosya | bos | tür | gerekçe (kısaltılmış) |
|---|---|---|---|---|
| Gilf el-Kebîr | y.js | devletsiz | bolge | Gilf el-Kebîr platosu, Sahra'nın en izole ve susuz kesimlerinden biri; tarihte hiçbir yerleşim ya da devlet denetimi kaydı yok. |
| Nûbe çölü | y.js | devletsiz | bolge | Nûbe Çölü'nün iç kesimi; Nil vadisi dışındaki bu alan tarih boyunca yerleşik nüfustan ve devlet denetiminden yoksundur. |
| Rub'ul Hâlî doğusu | y.js | devletsiz | bolge | Aynı Boş Çeyrek çölünün doğu ucu; kaynaklar bu iç kesimde tarih boyunca yerleşik siyasi denetim olmadığını belirtiyor. |
| Selîme (Nûbe çölü batısı) | y.js | devletsiz | bolge | Selîme kum yaylası, Nûbe Çölü'nün batısında insansız bir kesim; kervan yolu üzerinde olsa da yerleşik/siyasi denetim kaydı yok. |
| Ma'tan es-Sarra | y_afrika.js | devletsiz | bolge | Ma'tan es-Sarra, Libya'nın en güney ucunda ıssız bir kuyu/vaha noktası; devlet denetimi kaydı yok. |
| Ramletü Murzuk | y_afrika.js | devletsiz | bolge | Ramletü Murzuk, Murzuk vahası çevresindeki ıssız kumul alanı; kervan durağı dışında devlet denetimi kaydı yok. |
| Ramletü Zellâf | y_afrika.js | devletsiz | bolge | Ramletü Zellâf kumulları, Fizan iç çölünde yerleşimsiz bir alan; devlet denetimi dışında. |
| Rebyâne | y_afrika.js | devletsiz | bolge | Rebyâne kum deryası, Libya'nın en izole kesimlerinden biri; tarih boyunca yerleşimsiz ve devlet denetimi dışında. |
| Serîr | y_afrika.js | devletsiz | bolge | Serîr çölü, Libya'nın güneydoğusunda insansız çakıllı çöl kesimi; tarih boyunca yerleşim ve devlet denetimi kaydı yok. |
| Serîr Kalanşû | y_afrika.js | devletsiz | bolge | Serîr Kalanşû, Libya'nın en ıssız çakıllı çöl kesimlerinden biri; devlet denetimi kaydı yok. |
| Tâsîlî n'Accer | y_afrika.js | devletsiz | bolge | Tâsîlî n'Accer platosu, Cezayir-Libya sınırında ıssız bir kayalık yayla; devlet denetimi kaydı yok. |
| Tâzirbû | y_afrika.js | devletsiz | bolge | Tâzirbû vaha grubu çevresindeki geniş çöl, Kufra-Fizan güzergahı üzerinde olsa da fiilen devlet denetimi dışındaydı. |
| Vâdî Tanezzûft | y_afrika.js | devletsiz | bolge | Vâdî Tanezzûft, Fizan'ın güneybatı ucunda ıssız bir vadi; tarih boyunca yerleşik devlet denetimi kaydı yok. |
| Vâv el-Kebîr | y_afrika.js | devletsiz | bolge | Vâv el-Kebîr, Fizan'ın derin güneyinde ıssız bir çöl kesimi; Osmanlı Trablusgarp idaresinin ulaşamadığı bir alan. |
| İdehân Murzuk | y_afrika.js | devletsiz | bolge | İdehân Murzuk kum denizi, Fizan'ın güneyinde yerleşimsiz bir alan; vaha kasabaları dışında devlet denetimi yok. |
| İdehân Ubârî | y_afrika.js | devletsiz | bolge | İdehân Ubârî kum denizi, Fizan'ın vaha zincirinin kenarında yerleşimsiz bir çöl kesimi, devlet denetimi dışında. |
| Büyük Ovalar (orta kesim) | y_amerika.js | devletsiz | bolge | Standart akademik Büyük Ovalar tarihyazımı XIX. yüzyıla kadar bölgede birleşik, toprak iddiası taşıyan bir siyasi otorite tanımlamıyor — göç |
| Atbay çölü | y_h2_afrika.js | devletsiz | bolge | Nil ile Kızıldeniz arası Beca çölü — fiilî idare yok |
| Bayûda çölü | y_h2_afrika.js | devletsiz | bolge | Nil kavisleri arası iç çöl — fiilî idare yok |
| Bîr Natrûn | y_h2_afrika.js | devletsiz | bolge | Libya çölü — hiçbir devletin fiilî idaresi yoktu; kervan kuyusu |
| Cebel Ûveynât | y_h2_afrika.js | devletsiz | bolge | Mısır-Libya-Sudan üçgeni; fiilî idare yok |
| Kordofan kuzeybatı çölü | y_h2_afrika.js | devletsiz | bolge | Dârfûr ile Kordofan arası kum kuşağı — fiilî idare yok |
| Lakiye Arbaîn | y_h2_afrika.js | devletsiz | bolge | Darb el-Erbaîn kuyusu — fiilî idare yok |
| Merga vahası | y_h2_afrika.js | devletsiz | bolge | Libya çölü — fiilî idare yok |
| Rub'ul Hâlî güneybatısı | y_h2_afrika.js | devletsiz | bolge | Rub'ul Hâlî — hiçbir devletin fiilî idaresi yoktu; mevcut çöl dolgularıyla aynı sınıf |
| Umman iç çölü | y_h2_afrika.js | devletsiz | bolge | Rub'ul Hâlî'nin Umman yakası — hiçbir devletin fiilî idaresi yoktu |
| Vâdî Hovâr | y_h2_afrika.js | devletsiz | bolge | kurumuş vadi — fiilî idare yok |
| Vâdî el-Milk | y_h2_afrika.js | devletsiz | bolge | Dongola-Kordofan arası kurumuş vadi yolu — fiilî idare yok |
| Zolat el-Hammâd | y_h2_afrika.js | devletsiz | bolge | Bayûda-Libya çölü geçişi — fiilî idare yok |
| Çukotka merkezi | y_sibirya.js | devletsiz | bolge | devletsiz — Anadır'la aynı gerekçe (Çukçiler hiç fethedilmedi, haraç hiç ödenmedi); yarımadanın doğu ucunu Anadır'ın peteğinin taşmasına kar |
| Hamâde-i Hamrâ (Hamada al-Hamra) | y_afrika.js | col | bolge | BEYANLI ÇÖL BOŞLUĞU (EMRE KARARI 14 Ekim 2026, KARARLAR-1014 m.13, 0045/H-0012): Trablusgarp'ın iç kesimindeki Hamâde taşlık platosu noktası |
| Doğu Grönland | y_ek12.js | insansiz | bolge | Norse yerleşimleri güneybatı kıyısındaydı ve XV. yy'da söndü; Danimarka-Norveç'in yeniden sömürgeleştirmesi 1721'de BATI kıyısında başladı,  |
| Kuzeydoğu Grönland | y_ek12.js | insansiz | bolge | Doğu Grönland ile aynı hüküm; 700 km'lik kıyı tek noktayla temsil edilemezdi. |
| Franz Josef Toprağı | y_ek8.js | insansiz | bolge | 1873'te keşfedildi; 1281-1923 penceresinde hiçbir devletin idaresi altında değil. |
| Novaya Zemlya güneyi | y_ek8.js | insansiz | bolge | Novaya Zemlya kuzeyi ile aynı hüküm; 900 km'lik ada tek noktayla temsil edilemezdi. |
| Novaya Zemlya kuzeyi | y_ek8.js | insansiz | bolge | 1877 öncesi kalıcı yerleşim ve fiilî idare yok (Pomor avcılığı idare değildir). 🔴 1877-01-01 TDV'ye BASMIYOR. |
| Severnaya Zemlya | y_ek8.js | insansiz | bolge | 1913'te keşfedildi, 1926'da adlandırıldı. Pencerenin tamamında varlığı BİLİNMİYORDU — dosyadaki en sağlam kasıtlı boşluk. |
| Svalbard | y_ek8.js | insansiz | bolge | Terra nullius. Svalbard antlaşması 1920-02-09'da imzalandı ama 1925-08-14'te yürürlüğe girdi — Norveç hükümranlığı atlasın penceresi bittikt |
| Vaygaç | y_ek8.js | insansiz | bolge | Novaya Zemlya ile aynı hüküm. ⚠️ maske: ada merkezi 10m maskesinde deniz görünüyordu, 11 km kuzeye çekildi — dosyadaki EN BÜYÜK kaydırma. |
| Yeni Sibirya Adaları | y_ek8.js | insansiz | bolge | XVIII. yy'da keşfedildi, mamut dişi için Rus ruhsatıyla işletildi ama idarî kademesi olmadı. ⚠️ Bu dosyadaki dört boşluğun EN ZAYIFI — kayna |
| George Town (Cayman) | y_ek_karayip_adalar.js | insansiz | sehir | Cayman Adaları 1670'e dek kalıcı iskânsızdı; ada, anakara/Jamaika peteğine emilmesin diye nokta tutulur. Atlas noktası adayı temsil eder (Ge |
| Puerto Baquerizo Moreno (San Cristóbal, Galápagos) | y_ek_karayip_adalar.js | insansiz | liman | Galápagos 1832'e dek insansız/korsan uğrağıydı; Ekvador ilhakından önce sahibi yoktu. Atlas noktası adaları temsil eder (kapsam beyanı). |
| San Juan Bautista (Juan Fernández) | y_ek_karayip_adalar.js | insansiz | liman | Juan Fernández Adaları 1750'ye dek insansızdı (1574 keşfi, kalıcı iskân yok). Anakara Şili peteğine emilmesin diye nokta tutulur. |
| Güney Georgia (Grytviken) | y_gamerika.js | insansiz | sehir | 1281-1904 arasi YERLESIM YOK. Ada kesif oncesi hic iskan edilmemis; HSAI c.1'de 'Falkland' gibi 'South Georgia' da HIC GECMIYOR (olculdu: 0  |
| Cetinje | y.js | hata | sehir |  |
| Kuveyt | y.js | hata | liman | TDV, madde: kuveyt — "İngiltere ... (22 Kasım 1914) Küveyt'in kendi himayesinde olduğunu ilân etti" (ilhak değil himaye, tarih BİREBİR eşleş |
| Aleksandrovsk (Kuzey Sahalin) | y_ek13.js | hata | sehir | 1875-05-07 öncesi Nivh/Ainu toprağı. Shimoda antlaşması (1855-02-07) adayı BÖLMEDİ, 'ortak mülkiyet, sınır yok' dedi ve `s:` bir dönemde iki |
| Korsakov (Güney Sahalin) | y_ek13.js | hata | liman | Aleksandrovsk ile aynı gerekçe ve aynı Shimoda sınırı. 1905-09-05 Portsmouth 50. paraleli sınır yaptı. 🔴 TDV'ye basmıyor. |
| Deym Zübeyr | y_h2_afrika.js | hata | kale | Zübeyr Paşa'nın Bahrülgazâl karargâhı — Mısır dönemi yazılamadı (bkz. bölüm notu) |
| Gondokoro | y_h2_afrika.js | hata | sehir | Ekvatorya karargâhı — Mısır dönemi (1870-1885) Değişmez 2 borcu doğuracağı için yazılamadı |

## 8. D — veri-yok (aşiret DEĞİL, ayrı liste)

Dosyaya göre dağılım:

| dosya | sahipsiz nokta | sahipli şehrin boş dilimi |
|---|---:|---:|
| yerlesimler_once1281_yt_avrupa.js | 87 | 27 |
| yerlesimler_odak_yedek_1023.js | 66 | 1 |
| yerlesimler_once1281_yt_yer3.js | 41 | 7 |
| yerlesimler_once1281_yt_ortadogu.js | 44 | 1 |
| yerlesimler_once1281_yt_anadolu_kafkas.js | 29 | 2 |
| yerlesimler_e9353f.js | 5 | 13 |
| yerlesimler_once1281_yt_iran_orta_asya.js | 13 | 0 |
| yerlesimler_once1281_yt_dogu_gd_asya.js | 13 | 0 |
| yerlesimler_once1281_yt_hint.js | 10 | 1 |
| yerlesimler_a78_okyanusya.js | 0 | 7 |
| yerlesimler_once1281_yt_afrika.js | 5 | 0 |
| yerlesimler_ek31.js | 4 | 0 |
| yerlesimler_once1281_yt_afrika_levant.js | 3 | 0 |
| yerlesimler_amerika.js | 0 | 3 |
| yerlesimler_ek_pasifik_adalar.js | 0 | 2 |
| yerlesimler_ek13.js | 0 | 2 |
| yerlesimler_once1281_yt_amerika.js | 0 | 1 |
| yerlesimler_sibirya.js | 1 | 0 |
| yerlesimler_ek9.js | 0 | 1 |
| yerlesimler_emilme.js | 0 | 1 |
| yerlesimler_nokta_ortadogu_0917.js | 1 | 0 |

Tam liste (merdiven basamağı: hepsi ① TDV'den önce, işlenmedi):

| nokta | dosya | tür | konum | boş dilim | mevcut gerekçe (kısaltılmış) |
|---|---|---|---|---|---|
| Apia | y_a78_okyanusya.js | liman | -13.83,-171.76 | 1281–1889 | 1889 öncesi Apia için atlasta künye YOK (Berlin Senedi'nden önceki Samoa tek devlet değildi; yıl-yıl kaynaklı  |
| Banaba (Ocean Island) | y_a78_okyanusya.js | liman | -0.86,169.54 | 1281–1900 | 1900 öncesi için künye yok; kaynak susuyor. |
| Daru | y_a78_okyanusya.js | liman | -9.08,143.21 | 1281–1884 | İstasyonun kuruluş yılı BULUNAMADI (Australian Historical Studies 56(4), 2024 makalesinin '1890'da Daru istasy |
| Funafuti | y_a78_okyanusya.js | liman | -8.52,179.20 | 1281–1892 | 1892 öncesi Ellice Adaları için künye yok; kaynak susuyor. |
| Pago Pago | y_a78_okyanusya.js | liman | -14.28,-170.70 | 1281–1889 | 1889 öncesi Tutuila için atlasta künye YOK. 1889-1900 arası `samoa-kralligi` künyesiyle DOLDURULDU (AVUSTRALYA |
| Tarawa (Bairiki) | y_a78_okyanusya.js | liman | 1.34,173.01 | 1281–1892 | 1892 öncesi Gilbert Adaları için künye yok; kaynak susuyor. |
| Vanimo | y_a78_okyanusya.js | liman | -2.68,141.30 | 1281–1884 | Kuruluş yılı BULUNAMADI. S.S. Mackenzie, The Australians at Rabaul (AWM Resmî Tarih c. X), bl. XVIII yerin 191 |
| Cajamarca | y_amerika.js | sehir | -7.16,-78.51 | 1281–1465 | 1281-1465 arası bölgesel Cajamarca kültürünün siyasi örgütlenmesi standart kaynaklarda yalnız arkeolojik düzey |
| Quito | y_amerika.js | sehir | -0.23,-78.52 | 1281–1487 | 1281-1487 arası Quitu-Cara/Caranqui konfederasyonunun siyasi yapısı hakkında akademik kaynak bu taneciklikte k |
| Tumbes | y_amerika.js | liman | -3.57,-80.45 | 1281–1470 | İnka öncesi Tumbes'in siyasi bağlılığı (Chimú/bağımsız yerel kasikalık) kaynaklarda net ayrılmıyor. |
| Benin Şehri (Edo) | y_e9353f.js | sehir | 6.33,5.60 | — | veri-yok — donem sinirlari KAYNAKTAN DEGIL devletler.js kunyesinden (benin-kralligi f:1180 t:1897-02-18) alind |
| Büyük Zimbabve | y_e9353f.js | sehir | -20.27,30.93 | — | D1-COZ-1113: 1834/1840 sonrasi zincir Bulavayo'dan devralindi (matabele 1840 → ingiliz-guney-rodezya 1893-11-0 |
| Cenne (Djenné) | y_e9353f.js | sehir | 13.91,-4.55 | 1281–1473, 1591–1596, 1700–1818 | veri-yok — UC AYRI ARALIK, ucu de BILEREK bos ve ucunun de gerekcesi AYRI. ① 1281-1473: sehir IX. yuzyildan be |
| Elmina (São Jorge da Mina) | y_e9353f.js | kale | 5.08,-1.35 | 1281–1482 | veri-yok — sahipsiz araligi YOK; bayrak KAYNAK ALANININ YETERSIZLIGINI isaretliyor. 1637 Hollanda ve 1872 Ingi |
| Gao | y_e9353f.js | sehir | 16.27,-0.04 | — | kur: 0700-01-01 (ATLAS-GEC-B-1118) — TDV «Gao» (islamansiklopedisi.org.tr/gao): «Muhtemelen VII. yüzyılın son  |
| Mengo (Buganda) | y_e9353f.js | sehir | 0.35,32.58 | 1281–1300 | kunye-yok — sahipsiz araligi YOK, bu bayrak bir KUNYE CELISKISINI isaretliyor: TDV uganda maddesi Buganda'nin  |
| Niani | y_e9353f.js | sehir | 11.38,-8.67 | 1670– | veri-yok — 1670 sonrasi sahipsiz: mali-imparatorlugu kunyesi 1670'te bitiyor, ardili (Bambara Segu / Kaarta /  |
| Ogooué havzası | y_e9353f.js | bolge | -0.70,12.00 | 1281–1837 | veri-yok — 1281-1837 arasi sahipsiz ve gerekcesi OLCULDU: TDV gabon maddesinin govdesi okundu ve somurge onces |
| Oranj (Bur cumhuriyeti) | y_e9353f.js | bolge | -29.12,26.21 | 1281–1846 | kunye-yok — oranj kunyesi devletler.js'te YOK. Transvaal kaydiyla ayni gerekce: kur:1830 Buyuk Goc'un yili ve  |
| Oyo-İle (Eski Oyo) | y_e9353f.js | sehir | 8.98,4.38 | 1281–1400, 1836– | veri-yok — kur:1400 ve donem sinirlari KAYNAKTAN DEGIL oyo-imparatorlugu kunyesinden alindi; TDV'de `oyo` ve ` |
| Transvaal (Bur cumhuriyeti) | y_e9353f.js | bolge | -25.75,28.19 | 1281–1855 | kunye-yok — transvaal kunyesi devletler.js'te YOK (koordinator M-0218'de yazacagini soyledi). Sahipsiz araligi |
| Ulundi (Zululand) | y_e9353f.js | sehir | -28.31,31.42 | 1281–1816 | veri-yok — sahipsiz araligi YOK; bayrak KAYNAK eksigini isaretliyor. TDV guney-afrika-cumhuriyeti maddesi Zulu |
| Valata (Oualata) | y_e9353f.js | sehir | 17.30,-7.03 | 1430– | kunye-yok — 1430 sonrasi sahipsiz. TDV mali maddesi sehri 1430'da Tevarikler'in (Tuareg) aldigini ACIKCA soylu |
| Bratsk ostrogu | y_ek13.js | kale | 56.28,101.79 | 1281–1631 | 1631 öncesi Buryat toprağı. ⚠️ İrkutsk kaydındaki Halha/Altan Han nüfuzu çekincesi burada da geçerli; `kuzey-y |
| Selenginsk | y_ek13.js | kale | 51.10,106.60 | 1281–1665 | 1665 öncesi Buryat/Halha sınır bozkırı; hangi tarafta olduğu tanımsızdı ve tanımsızlık uydurulmadı. Sınır 1727 |
| İrkutsk | y_ek9.js | kale | 52.29,104.28 | 1281–1661 | 1661 öncesi Buryat toprağı. ⚠️ Halha/Altan Han nüfuzu tartışılabilir; `kuzey-yuan` YAZILMADI çünkü kaynakla ay |
| Koror | y_ek_pasifik_adalar.js | liman | 7.35,134.48 | — | 1899 öncesi Palau için atlasta künye yok (Palau şeflikleri; İspanyol hâkimiyeti fiilî değildi); kaynak gün ver |
| Port Vila (Efate) | y_ek_pasifik_adalar.js | liman | -17.73,168.33 | — | Yeni Hebridler (Anglo-Fransız Kondominyumu, 1906-1980) ve Vanuatu (1980-) için atlasta künye ve BOYALAR anahta |
| Kabasa | y_emilme.js | sehir | -9.30,15.15 | 1281–1500 | ndongo künyesi 1500'de başlıyor (ÖLÇÜLDÜ: 1500/1518 muhtemelen Portekiz'in ilk BELGELENMİŞ teması, krallığın k |
| Chichester | y_odak_yedek_1023.js | sehir | 50.84,-0.78 | 1281– | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: sussex-kralligi. G |
| Caracol | y_once1281_yt_amerika.js | harabe | 16.76,-89.10 | 1281– | YER-TANIMA: kronolojide Caracol adıyla geçer; eski adlar: -; modern: Caracol (Belize). ÖNEMLİ BAŞKENT (YER-2,  |
| Mısyâf (Maşyāf) | y_once1281_yt_anadolu_kafkas.js | sehir | 35.07,36.34 | 1281– | YER-TANIMA: kronolojide Mısyâf adıyla geçer; eski adlar: Kehf, Masyaf, Misyaf, Masyaf Castle; modern: Maşyāf ( |
| Samosata (Samsat) | y_once1281_yt_anadolu_kafkas.js | harabe | 37.53,38.53 | 1281– | YER-TANIMA: kronolojide Samosata adıyla geçer; eski adlar: -; modern: Samsat (Turkey). ÖNEMLİ BAŞKENT (YER-2,  |
| Aigai (Vergina) | y_once1281_yt_avrupa.js | sehir | 40.48,22.32 | 1281– | YER-TANIMA: kronolojide Aigai (Vergina) adıyla geçer; eski adlar: -; modern: Vergína (GR). KRON-ANTIK TSV ipuc |
| Aigion | y_once1281_yt_avrupa.js | sehir | 38.25,22.08 | 1281– | YER-TANIMA: kronolojide Aigion adıyla geçer; eski adlar: -; modern: Aígio (GR). KRON-ANTIK TSV ipucuna 0.0 km; |
| Alalia (Aléria) | y_once1281_yt_avrupa.js | sehir | 42.10,9.51 | 1281– | YER-TANIMA: kronolojide Alalia adıyla geçer; eski adlar: -; modern: Aléria (FR). KRON-ANTIK TSV ipucuna 0.8 km |
| Albarrasin (Albarracín) | y_once1281_yt_avrupa.js | sehir | 40.41,-1.44 | 1281– | YER-TANIMA: kronolojide Albarrasin adıyla geçer; eski adlar: Albarracín, Albarracin; modern: Albarracín (ES).  |
| Alessandria | y_once1281_yt_avrupa.js | sehir | 44.90,8.62 | 1281– | YER-TANIMA: kronolojide Alessandria adıyla geçer; eski adlar: -; modern: Alessandria (IT). ÖNEMLİ BAŞKENT (YER |
| Aversa | y_once1281_yt_avrupa.js | sehir | 40.97,14.21 | 1281– | YER-TANIMA: kronolojide Aversa adıyla geçer; eski adlar: -; modern: Aversa (IT). KRON-ANTIK TSV ipucuna 0.0 km |
| Brandenburg an der Havel | y_once1281_yt_avrupa.js | sehir | 52.42,12.55 | 1281– | YER-TANIMA: kronolojide Brandenburg an der Havel adıyla geçer; eski adlar: -; modern: Brandenburg an der Havel |
| Braunschweig | y_once1281_yt_avrupa.js | sehir | 52.29,10.54 | 1281– | YER-TANIMA: kronolojide Braunschweig adıyla geçer; eski adlar: -; modern: Braunschweig (DE). ÖNEMLİ BAŞKENT (Y |
| Himera | y_once1281_yt_avrupa.js | harabe | 37.97,13.82 | 1281– | YER-TANIMA: kronolojide Himera adıyla geçer; eski adlar: -; modern: Imera (Italy). ÖNEMLİ BAŞKENT (YER-2, 23 E |
| Karpat havzası | y_once1281_yt_avrupa.js | bolge | 47.45,22.98 | 1281– | YER-TANIMA: kronolojide Karpat havzası adıyla geçer; eski adlar: -; modern: - (CARPATHIAN MOUNTAINS). BÖLGE TE |
| Kroton (Crotone) | y_once1281_yt_avrupa.js | sehir | 39.08,17.13 | 1281– | YER-TANIMA: kronolojide Kroton adıyla geçer; eski adlar: -; modern: Crotone (IT). KRON-ANTIK TSV ipucuna 0.0 k |
| Kyme (Cuma) | y_once1281_yt_avrupa.js | harabe | 40.85,14.06 | 1281– | YER-TANIMA: kronolojide Kyme adıyla geçer; eski adlar: -; modern: Cuma (Italy). ÖNEMLİ BAŞKENT (YER-2, 23 Ekim |
| Leontinoi (Lentini) | y_once1281_yt_avrupa.js | harabe | 37.29,15.00 | 1281– | YER-TANIMA: kronolojide Leontinoi adıyla geçer; eski adlar: -; modern: Lentini (Italy). ÖNEMLİ BAŞKENT (YER-2, |
| Macaristan | y_once1281_yt_avrupa.js | bolge | 47.16,19.40 | 1281– | YER-TANIMA: kronolojide Macaristan adıyla geçer; eski adlar: -; modern: - (Hungary). BÖLGE TEMSİLCİSİ: yer bil |
| Mecklenburg | y_once1281_yt_avrupa.js | sehir | 53.85,11.47 | 1281– | YER-TANIMA: kronolojide Mecklenburg adıyla geçer; eski adlar: -; modern: Dorf Mecklenburg (DE). ÖNEMLİ BAŞKENT |
| Megara Hyblaia (Megara Hyblaea) | y_once1281_yt_avrupa.js | harabe | 37.20,15.18 | 1281– | YER-TANIMA: kronolojide Megara Hyblaia adıyla geçer; eski adlar: -; modern: Megara Hyblaea (Italy). ÖNEMLİ BAŞ |
| Mikulcice | y_once1281_yt_avrupa.js | sehir | 48.81,17.09 | 1281– | YER-TANIMA: kronolojide Mikulcice? adıyla geçer; eski adlar: -; modern: Mikulčice (CZ). KRON-ANTIK TSV ipucuna |
| Mozia | y_once1281_yt_avrupa.js | harabe | 37.87,12.47 | 1281– | YER-TANIMA: kronolojide Mozia adıyla geçer; eski adlar: -; modern: Mozia (Italy). ÖNEMLİ BAŞKENT (YER-2, 23 Ek |
| Niebla | y_once1281_yt_avrupa.js | sehir | 37.36,-6.68 | 1281– | YER-TANIMA: kronolojide Niebla adıyla geçer; eski adlar: -; modern: Niebla (ES). KRON-ANTIK TSV ipucuna 0.0 km |
| Pannonia | y_once1281_yt_avrupa.js | bolge | 47.50,17.50 | 1281– | YER-TANIMA: kronolojide Pannonia adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası ( |
| Pella | y_once1281_yt_avrupa.js | harabe | 40.75,22.52 | 1281– | YER-TANIMA: kronolojide Pella adıyla geçer; eski adlar: -; modern: Pélla (GR). KRON-ANTIK TSV ipucuna 0.6 km;  |
| Selinous (Selinunte) | y_once1281_yt_avrupa.js | harabe | 37.59,12.82 | 1281– | YER-TANIMA: kronolojide Selinous adıyla geçer; eski adlar: Selinunte, Selinus; modern: Selinunte (Italy). ÖNEM |
| Soissons | y_once1281_yt_avrupa.js | sehir | 49.38,3.33 | 1281– | YER-TANIMA: kronolojide Soissons adıyla geçer; eski adlar: -; modern: Soissons (FR). Çevrimdışı eşleme: Pleiad |
| Sparta | y_once1281_yt_avrupa.js | harabe | 37.08,22.42 | 1281– | YER-TANIMA: kronolojide Sparta adıyla geçer; eski adlar: -; modern: Sparta (GR). KRON-ANTIK TSV ipucuna 1.4 km |
| Sybaris (Thurii) | y_once1281_yt_avrupa.js | harabe | 39.72,16.49 | 1281– | YER-TANIMA: kronolojide Sybaris adıyla geçer; eski adlar: -; modern: Thurii (Italy). ÖNEMLİ BAŞKENT (YER-2, 23 |
| Tirol Kalesi (Tirolo) | y_once1281_yt_avrupa.js | harabe | 46.70,11.17 | 1281– | YER-TANIMA: kronolojide Tirol Kalesi adıyla geçer; eski adlar: Schloss Tirol, Tirolo, Castel Tirolo; modern: T |
| Wartburg | y_once1281_yt_avrupa.js | sehir | 50.95,10.28 | 1281– | YER-TANIMA: kronolojide Wartburg adıyla geçer; eski adlar: -; modern: Wartburg (Germany). ÖNEMLİ BAŞKENT (YER- |
| Valabhi | y_once1281_yt_hint.js | sehir | 21.88,71.90 | 1281– | YER-TANIMA: kronolojide Valabhi adıyla geçer; eski adlar: Vallabhi, Vala, Valabhipur; modern: Valabhīpur (IN). |
| Hîre | y_once1281_yt_ortadogu.js | sehir | 32.00,44.41 | 1281– | YER-TANIMA: kronolojide Hîre adıyla geçer; eski adlar: -; modern: Hîre (Kûfe'nin 5 km güneyi) (Irak (Necef)).  |
| Anakena | y_once1281_yt_yer3.js | kasaba | -27.08,-109.33 | 1281– | YER-3-BATI: önemli başkent listesinde «Anakena» (okyanusya; devlet: -) bileşeni; eski adlar: -; modern: - (Şil |
| Bobastro | y_once1281_yt_yer3.js | kale | 36.90,-4.78 | 1281– | YER-3-BATI: önemli başkent listesinde «Bobastro» (iberya; devlet: -) bileşeni; eski adlar: Bübeşter, Bubashtar |
| Canossa | y_once1281_yt_yer3.js | kale | 44.58,10.45 | 1281– | YER-3-BATI: önemli başkent listesinde «Canossa → Mantova» (italya; devlet: -) bileşeni; eski adlar: -; modern: |
| Lüneburg | y_once1281_yt_yer3.js | sehir | 53.25,10.41 | 1281– | YER-3-BATI: önemli başkent listesinde «belirsiz Lüneburg» (orta-avrupa; devlet: -) bileşeni; eski adlar: -; mo |
| Nagahrada | y_once1281_yt_yer3.js | kasaba | 24.74,73.72 | 1281– | YER-3-BATI: önemli başkent listesinde «Nagahrada Nagda» (guney-asya; devlet: -) bileşeni; eski adlar: Nagahrad |
| Nan Madol | y_once1281_yt_yer3.js | sehir | 6.83,158.31 | 1281– | YER-3-BATI: önemli başkent listesinde «Nan Madol» (okyanusya; devlet: -) bileşeni; eski adlar: Nanmadol; moder |
| Pliska | y_once1281_yt_yer3.js | sehir | 43.37,27.12 | 1281– | YER-3-BATI: önemli başkent listesinde «Pliska → Preslav» (balkanlar; devlet: -) bileşeni; eski adlar: Aboba, A |
| Kasai havzası | y_e9353f.js | bolge | -5.00,22.50 | hep (sahipli dönemi yok) | veri-yok — kaynak SUSUYOR. Bolgenin bilinen iki devleti kuba (kunye f:1625) ve lunda (f:1665); ikisi de 1281'd |
| Malebo Havuzu (Teke) | y_e9353f.js | bolge | -4.27,15.35 | hep (sahipli dönemi yok) | veri-yok — kaynak SUSUYOR. TDV kongo-demokratik-cumhuriyeti maddesi 13.-14. yuzyil siyasi yapisini tartismiyor |
| Ubangi-Uele havzası | y_e9353f.js | bolge | 3.50,22.00 | hep (sahipli dönemi yok) | veri-yok — kaynak SUSUYOR. TDV kongo-demokratik-cumhuriyeti maddesinin bu kusakta verdigi tek sey Mangbetu Kra |
| Upemba (Kisale) havzası | y_e9353f.js | bolge | -8.45,26.55 | hep (sahipli dönemi yok) | veri-yok — TDV'nin okuyabildigim maddeleri (kongo-demokratik-cumhuriyeti, zaire) bu havzanin 1281 civarindaki  |
| İfe (Ile-Ife) | y_e9353f.js | sehir | 7.47,4.57 | hep (sahipli dönemi yok) | kunye-yok — Ife 1281'de mevcut ve Yoruba dunyasinin merkezi bir kralligiydi; kaynak SUSMUYOR. Ama devletler.js |
| Doğu Sibirya kıyısı (Çuvan-Yukagir) | y_ek31.js | bolge | 69.65,160.91 | hep (sahipli dönemi yok) | veri-yok — 68-72°K / 152-168°D hücreleri 507-709 km uzakta; kuzey kıyı şeridi 1281'de noktasızdı. Çuvan/Yukagi |
| Kamçatka (İtelmen toprakları) | y_ek31.js | bolge | 55.00,158.50 | hep (sahipli dönemi yok) | veri-yok — 1281'de yarımadada sahnede nokta YOK (Petropavlovsk kur:1740) ve §2 gereği 642-751 km öteden emiliy |
| Kolıma havzası (Yukagir toprakları) | y_ek31.js | bolge | 66.00,152.00 | hep (sahipli dönemi yok) | veri-yok — 64°K/152°D hücresi en yakın 1281 noktasına 555 km. Yukagir için TDV ARANDI (16 Ağu): madde YOK. Aka |
| Penjina havzası (kuzey Koryak) | y_ek31.js | bolge | 61.17,156.44 | hep (sahipli dönemi yok) | veri-yok — 60°K/156°D hücresi en yakın 1281 noktasına 576 km. Kamçatka boynu ile Koryak yaylası arasındaki şer |
| Bîşe | y_nokta_ortadogu_0917.js | bolge | 20.00,42.61 | hep (sahipli dönemi yok) | BEYANLI BOŞLUK (KARAR-UYG-1015): Lorimer Bîşe vadisi için 'but little has as yet been ascertained' der; vadide |
| Ainsa | y_odak_yedek_1023.js | sehir | 42.42,0.14 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: sobrarbe-ribagorza |
| Al-Kharj (Yemâme) | y_odak_yedek_1023.js | sehir | 24.15,47.30 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: ukaydir. Güven: TE |
| Angkor Borei | y_odak_yedek_1023.js | sehir | 11.00,104.98 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: funan. Güven: BÖLG |
| Arsamosata | y_odak_yedek_1023.js | sehir | 38.66,39.51 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: sofene. Güven: BÖL |
| Asuka | y_odak_yedek_1023.js | sehir | 34.48,135.82 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: yamato. Güven: iki |
| Bac Ninh (Vu Ninh / Long Bien bolgesi) | y_odak_yedek_1023.js | sehir | 21.08,106.17 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: triyu-viet-vuong.  |
| Bad Cannstatt (Stuttgart) | y_odak_yedek_1023.js | sehir | 48.81,9.21 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: alamanlar. Güven:  |
| Banapur | y_odak_yedek_1023.js | sehir | 19.78,85.17 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: sailodbhava. Güven |
| Bando (Ishii/Iwai bolgesi) | y_odak_yedek_1023.js | sehir | 36.07,139.87 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: masakado-shinno. G |
| Bağaberd (Baghaberd) | y_odak_yedek_1023.js | kale | 39.21,46.28 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Bağaberd kales |
| Bağuz (Baghuz Fawqani) | y_odak_yedek_1023.js | sehir | 34.46,40.95 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Bağuz Fevkanî, |
| Birüssebi (Beersheba) | y_odak_yedek_1023.js | sehir | 31.25,34.79 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Birüssebi (Bee |
| Borobudur (Kedu ovası) | y_odak_yedek_1023.js | sehir | -7.61,110.20 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: sailendra. Güven:  |
| Buir Gölü (Buyur Nur) | y_odak_yedek_1023.js | sehir | 47.72,117.74 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: tatar. Güven: BÖLG |
| Burkhan Khaldun (Hentey, vekil) | y_odak_yedek_1023.js | sehir | 48.76,109.01 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: kamag-mogol. Güven |
| Chengdu | y_odak_yedek_1023.js | sehir | 30.66,104.06 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: sonraki-shu, oncek |
| Cheorwon | y_odak_yedek_1023.js | sehir | 38.21,127.22 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: taebong. Güven: ik |
| Ciaruteun yazıtı (Bogor çevresi) | y_odak_yedek_1023.js | sehir | -6.53,106.69 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: tarumanagara. Güve |
| Dali Eski Kenti | y_odak_yedek_1023.js | sehir | 25.69,100.16 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: da-changhe. Güven: |
| Denduluru | y_odak_yedek_1023.js | sehir | 16.76,81.16 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: vishnukundina. Güv |
| Haseke (Hasakah) | y_odak_yedek_1023.js | sehir | 36.50,40.75 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Haseke, kuzeyd |
| Hohhot (İç Moğolistan) | y_odak_yedek_1023.js | sehir | 40.82,111.66 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: xianbei. Güven: BÖ |
| Hortitsa Adası (Dinyeper akıntıları) | y_odak_yedek_1023.js | sehir | 47.82,35.10 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: pecenek. Güven: BÖ |
| Jajpur | y_odak_yedek_1023.js | sehir | 20.85,86.33 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: bhauma-kara. Güven |
| Kaleybar (Bezz/Badhdh) | y_odak_yedek_1023.js | sehir | 38.87,47.04 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: babek-hurremi. Güv |
| Karnasuvarna (Rajbadidanga) | y_odak_yedek_1023.js | sehir | 24.03,88.19 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: gauda-shashanka. G |
| Khovd (Altay bölge merkezi) | y_odak_yedek_1023.js | sehir | 48.00,91.60 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: naiman. Güven: BÖL |
| Kirina (Mali) | y_odak_yedek_1023.js | sehir | 12.31,-8.15 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: susu-kralligi. Güv |
| Köysancak (Koya) | y_odak_yedek_1023.js | sehir | 36.08,44.63 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Köysancak (Koy |
| Lamreh (Aceh Besar) | y_odak_yedek_1023.js | sehir | 5.60,95.53 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: lamuri. Güven: yer |
| Lazkiye (Latakia) | y_odak_yedek_1023.js | liman | 35.52,35.78 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Lazkiye (Latak |
| Mainamati (Cumilla) | y_odak_yedek_1023.js | sehir | 23.43,91.14 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: khadga, pattikera. |
| Mansura (Brahmanabad) | y_odak_yedek_1023.js | sehir | 25.88,68.78 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: habbari. Güven: TE |
| Marklohe (Marklo adayi) | y_odak_yedek_1023.js | sehir | 52.67,9.17 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: saksonya-eski. Güv |
| Nizhny Arkhyz | y_odak_yedek_1023.js | sehir | 43.68,41.46 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: alania-krallik. Gü |
| Olon Süme | y_odak_yedek_1023.js | sehir | 41.96,110.49 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: ongut. Güven: BÖLG |
| Orhun Vadisi (Ötüken bölgesi) | y_odak_yedek_1023.js | sehir | 47.56,102.83 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: dogu-gokturk. Güve |
| Pedavegi | y_odak_yedek_1023.js | sehir | 16.81,81.09 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: dogu-calukya. Güve |
| Peiligang yerleşimi (Xinzheng) | y_odak_yedek_1023.js | sehir | 34.44,113.65 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: peiligang. Güven:  |
| Pungnaptoseong (Wiryeseong/Hanseong, Seul) | y_odak_yedek_1023.js | sehir | 37.53,127.12 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: baekje. Güven: iki |
| Ramallah | y_odak_yedek_1023.js | sehir | 31.90,35.20 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Filistin Ulusa |
| Riyad (Hajr al-Yamama yeri) | y_odak_yedek_1023.js | sehir | 24.69,46.72 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: yemame-museylime.  |
| Rohtasgarh | y_odak_yedek_1023.js | sehir | 24.62,83.92 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: khayaravala-japila |
| Salhad (Salkhad) | y_odak_yedek_1023.js | kale | 32.49,36.71 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Salhad (Salkha |
| Sambor (Kratie) | y_odak_yedek_1023.js | sehir | 12.78,105.97 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: chenla-su. Güven:  |
| Samkir (Gardman bolgesi) | y_odak_yedek_1023.js | sehir | 40.83,46.02 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: mihranid-gardman.  |
| Shangshan yerleşimi (Pujiang) | y_odak_yedek_1023.js | sehir | 29.46,119.97 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: shangshan. Güven:  |
| Sonepur (Subarnapur) | y_odak_yedek_1023.js | sehir | 20.83,83.92 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: somavamsi. Güven:  |
| Sort | y_odak_yedek_1023.js | sehir | 42.41,1.13 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: pallars. Güven: TE |
| Sri Ksetra (Hmawza, Pyay) | y_odak_yedek_1023.js | sehir | 18.80,95.29 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: sri-ksetra, pyu-se |
| Suyab (Ak-Beshim) | y_odak_yedek_1023.js | sehir | 42.81,75.20 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: turges. Güven: iki |
| Sûkuşşüyûh (Suq al-Shuyukh) | y_odak_yedek_1023.js | sehir | 30.89,46.46 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Sûkuşşüyûh, Zi |
| Süveyde (es-Suwayda) | y_odak_yedek_1023.js | sehir | 32.71,36.57 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). es-Süveyde, Ce |
| Takht-e Soleymān | y_odak_yedek_1023.js | sehir | 36.60,47.23 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: atropatene. Güven: |
| Tanais (Don ağzı) | y_odak_yedek_1023.js | sehir | 47.27,39.34 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: utigur. Güven: BÖL |
| Tartus | y_odak_yedek_1023.js | liman | 34.89,35.89 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Tartus, Suriye |
| Thetford | y_odak_yedek_1023.js | sehir | 52.41,0.74 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: danelaw. Güven: BÖ |
| Vikramapura (Bikrampur) | y_odak_yedek_1023.js | sehir | 23.55,90.55 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: varman-vanga, deva |
| Washington (D.C.) | y_odak_yedek_1023.js | sehir | 38.91,-77.04 | hep (sahipli dönemi yok) | ODAK-DUZELT (29 Ekim 2026): yalnız KAMERA ODAĞI için (devletler.js kronoloji maddesi odak_yer). Washington D.C |
| Wat Phu (Vat Phou) | y_odak_yedek_1023.js | sehir | 14.85,105.82 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: chenla-toprak. Güv |
| Xianyang | y_odak_yedek_1023.js | sehir | 34.34,108.70 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: qin-devleti. Güven |
| Xianyang (Qin başkenti kalıntıları) | y_odak_yedek_1023.js | sehir | 34.41,108.86 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: qin-hanedani. Güve |
| Xihe (Qiuchi Dagi bolgesi) | y_odak_yedek_1023.js | sehir | 33.91,105.36 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: qiuchi. Güven: BÖL |
| Yarang (Pattani) | y_odak_yedek_1023.js | sehir | 6.76,101.29 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: langkasuka. Güven: |
| Yashima (Takamatsu) | y_odak_yedek_1023.js | sehir | 34.36,134.10 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: taira-rejimi. Güve |
| Zaporizhzhia (Dinyeper şelaleleri) | y_odak_yedek_1023.js | sehir | 47.85,35.12 | hep (sahipli dönemi yok) | ODAK-YEDEK (23 Ekim 2026): yalnız KAMERA ODAĞI için (kronoloji maddesi odak_yer). Künyeler: pecenek-konfederas |
| Awdaghust (Aoudaghost) | y_once1281_yt_afrika.js | harabe | 17.42,-10.42 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Awdaghust adıyla geçer; eski adlar: Aoudaghost, Tegdaoust; modern: Aoudaghost (Maurita |
| Garama (Jarmah) | y_once1281_yt_afrika.js | harabe | 26.53,13.07 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Garama adıyla geçer; eski adlar: Germa; modern: Jarmah (Libya). ÖNEMLİ BAŞKENT (YER-2, |
| Libya | y_once1281_yt_afrika.js | bolge | 27.03,18.01 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Libya adıyla geçer; eski adlar: -; modern: - (Libya). BÖLGE TEMSİLCİSİ: yer bilinmiyor |
| Masvingo (Great Zimbabwe) | y_once1281_yt_afrika.js | harabe | -20.27,30.90 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Masvingo adıyla geçer; eski adlar: -; modern: Great Zimbabwe (Masvingo yakini) (Zimbab |
| Tinmel (Tin Mal) | y_once1281_yt_afrika.js | sehir | 30.98,-8.23 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Tinmel adıyla geçer; eski adlar: Tinmal, Tin Mal; modern: Tin Mal (Morocco). ÖNEMLİ BA |
| Giza | y_once1281_yt_afrika_levant.js | sehir | 29.97,31.13 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Giza adıyla geçer; eski adlar: -; modern: Giza (EG). KRON-ANTIK TSV ipucuna 0.0 km; Pl |
| Itj-tawy | y_once1281_yt_afrika_levant.js | harabe | 29.57,31.23 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Itj-tawy adıyla geçer; eski adlar: Itjtawy, Lisht, el-Lisht; modern: Itjtawy (Egypt).  |
| Mısır | y_once1281_yt_afrika_levant.js | bolge | 30.00,31.23 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Mısır adıyla geçer; eski adlar: -; modern: - (Mısır).  |
| Adiabene | y_once1281_yt_anadolu_kafkas.js | bolge | 36.19,44.01 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Adiabene adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası ( |
| Amorion (Amorium) | y_once1281_yt_anadolu_kafkas.js | harabe | 39.02,31.30 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Amorion adıyla geçer; eski adlar: -; modern: Amorium / Hisarköy (Türkiye (Afyonkarahis |
| Apameia (Kibotos) (Dinar) | y_once1281_yt_anadolu_kafkas.js | sehir | 38.07,30.17 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Apameia (Kibotos) adıyla geçer; eski adlar: -; modern: Dinar (TR). KRON-ANTIK TSV ipuc |
| Armavir | y_once1281_yt_anadolu_kafkas.js | harabe | 40.08,44.03 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Armavir adıyla geçer; eski adlar: Argishtikhinili; modern: Armavir (AM). ÖNEMLİ BAŞKEN |
| Arpad (Tall Rif‘at) | y_once1281_yt_anadolu_kafkas.js | sehir | 36.47,37.09 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Arpad adıyla geçer; eski adlar: Tell Rifaat, Tell Rif'at; modern: Tall Rif‘at (SY). ÖN |
| Bâlis (Maskanah) | y_once1281_yt_anadolu_kafkas.js | sehir | 35.99,38.11 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Bâlis adıyla geçer; eski adlar: -; modern: Maskanah (SY). Çevrimdışı eşleme: Pleiades  |
| Ergani | y_once1281_yt_anadolu_kafkas.js | kasaba | 38.27,39.75 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Ergani adıyla geçer; eski adlar: -; modern: Ergani (Diyarbakir) (Türkiye). Bagimsizlik |
| Ermenistan | y_once1281_yt_anadolu_kafkas.js | bolge | 40.29,44.93 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Ermenistan adıyla geçer; eski adlar: -; modern: - (Armenia). BÖLGE TEMSİLCİSİ: yer bil |
| Gaugamela (Tell Gomel) | y_once1281_yt_anadolu_kafkas.js | harabe | 36.59,43.48 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Gaugamela adıyla geçer; eski adlar: -; modern: Tell Gomel (Gaugamela koyu) (Irak). TSV |
| Hatra (Al Ḩaḑar) | y_once1281_yt_anadolu_kafkas.js | sehir | 35.59,42.72 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Hatra adıyla geçer; eski adlar: -; modern: Al Ḩaḑar (IQ). Çevrimdışı eşleme: Pleiades  |
| Issos (Kinet Hoyuk) | y_once1281_yt_anadolu_kafkas.js | harabe | 36.85,36.16 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Issos adıyla geçer; eski adlar: -; modern: Kinet Hoyuk / Yesil Hoyuk (Issos kenti) (Tu |
| Itanos (Erimoúpolis) | y_once1281_yt_anadolu_kafkas.js | harabe | 35.26,26.26 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Itanos adıyla geçer; eski adlar: -; modern: Erimoúpolis (Greece). ÖNEMLİ BAŞKENT (YER- |
| Kapadokya | y_once1281_yt_anadolu_kafkas.js | bolge | 38.65,35.65 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Kapadokya adıyla geçer; eski adlar: -; modern: - (Türkiye).  |
| Karkar (Qarqar) (Tell Qarqur) | y_once1281_yt_anadolu_kafkas.js | harabe | 35.74,36.32 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Karkar (Qarqar) adıyla geçer; eski adlar: -; modern: Tell Qarqur (Cisr es-Sugur guneyi |
| Kilikya | y_once1281_yt_anadolu_kafkas.js | bolge | 37.05,35.15 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Kilikya adıyla geçer; eski adlar: -; modern: - (Türkiye).  |
| Kinalua (Kıyıbucak) | y_once1281_yt_anadolu_kafkas.js | harabe | 36.25,36.38 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Kinalua adıyla geçer; eski adlar: Tell Tayinat; modern: Kıyıbucak (Turkey). ÖNEMLİ BAŞ |
| Kınnesrin | y_once1281_yt_anadolu_kafkas.js | sehir | 36.01,37.01 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Kınnesrin adıyla geçer; eski adlar: -; modern: - (Suriye).  |
| Malazgirt (Manzikert) | y_once1281_yt_anadolu_kafkas.js | sehir | 39.15,42.54 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Malazgirt (Manzikert) adıyla geçer; eski adlar: -; modern: Malazgirt (TR). KRON-ANTIK  |
| Margat (Marqab) | y_once1281_yt_anadolu_kafkas.js | sehir | 35.15,35.95 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Margat adıyla geçer; eski adlar: Markab; modern: Marqab (Syria). ÖNEMLİ BAŞKENT (YER-2 |
| Mezopotamya | y_once1281_yt_anadolu_kafkas.js | bolge | 37.50,40.70 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Mezopotamya adıyla geçer; eski adlar: -; modern: - (Türkiye).  |
| Nagar | y_once1281_yt_anadolu_kafkas.js | harabe | 36.67,41.06 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Nagar adıyla geçer; eski adlar: Tell Brak; modern: - (-). ÖNEMLİ BAŞKENT (YER-2, 23 Ek |
| Osrhoene | y_once1281_yt_anadolu_kafkas.js | bolge | 37.25,38.25 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Osrhoene adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası ( |
| Pozantı | y_once1281_yt_anadolu_kafkas.js | kasaba | 37.43,34.89 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Pozantı adıyla geçer; eski adlar: -; modern: Pozantı (Podandos/Bedendûn) (Türkiye). Me |
| Praisos | y_once1281_yt_anadolu_kafkas.js | harabe | 35.12,26.09 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Praisos adıyla geçer; eski adlar: -; modern: Praisos (Greece). ÖNEMLİ BAŞKENT (YER-2,  |
| Selevkeia (Samandağ) | y_once1281_yt_anadolu_kafkas.js | harabe | 36.12,35.93 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Selevkeia adıyla geçer; eski adlar: Seleucia Pieria, Seleukeia Pieria, Seleucia; moder |
| Subat-Enlil | y_once1281_yt_anadolu_kafkas.js | harabe | 36.96,41.51 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Subat-Enlil adıyla geçer; eski adlar: -; modern: - (-). ÖNEMLİ BAŞKENT (YER-2, 23 Ekim |
| Suriye | y_once1281_yt_anadolu_kafkas.js | bolge | 35.02,38.51 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Suriye adıyla geçer; eski adlar: -; modern: - (Syria). BÖLGE TEMSİLCİSİ: yer bilinmiyo |
| Til Barsip | y_once1281_yt_anadolu_kafkas.js | harabe | 36.67,38.12 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Til Barsip adıyla geçer; eski adlar: Tell Ahmar, Kar-Shalmaneser; modern: - (-). ÖNEML |
| Zela (Zile) | y_once1281_yt_anadolu_kafkas.js | harabe | 40.30,35.89 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Zela adıyla geçer; eski adlar: -; modern: Zile (TR). KRON-ANTIK TSV ipucuna 0.4 km; Pl |
| Agri Decumates | y_once1281_yt_avrupa.js | bolge | 48.50,8.50 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Agri Decumates adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci nok |
| Almanya | y_once1281_yt_avrupa.js | bolge | 51.09,10.37 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Almanya adıyla geçer; eski adlar: -; modern: - (Germany). BÖLGE TEMSİLCİSİ: yer bilinm |
| Amphipolis (Amfípolis) | y_once1281_yt_avrupa.js | harabe | 40.83,23.84 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Amphipolis adıyla geçer; eski adlar: -; modern: Amfípolis (Greece). ÖNEMLİ BAŞKENT (YE |
| Andravida | y_once1281_yt_avrupa.js | sehir | 37.91,21.27 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Andravida adıyla geçer; eski adlar: -; modern: Andravída (GR). ÖNEMLİ BAŞKENT (YER-2,  |
| Apulia | y_once1281_yt_avrupa.js | bolge | 41.12,16.17 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Apulia adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (Ap |
| Arkadia (Kyparissía) | y_once1281_yt_avrupa.js | harabe | 37.25,21.68 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Arkadia adıyla geçer; eski adlar: Kyparissia, Kyparissía; modern: Kyparissía (GR). ÖNE |
| Baetica | y_once1281_yt_avrupa.js | bolge | 37.50,-7.50 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Baetica adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (B |
| Balkanlar | y_once1281_yt_avrupa.js | bolge | 42.36,22.00 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Balkanlar adıyla geçer; eski adlar: -; modern: - (BALKAN PEN.). BÖLGE TEMSİLCİSİ: yer  |
| Bautzen | y_once1281_yt_avrupa.js | sehir | 51.18,14.43 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Bautzen adıyla geçer; eski adlar: -; modern: Bautzen (Almanya (Saksonya)). Pleiades 'c |
| Bensington (Benson) | y_once1281_yt_avrupa.js | kasaba | 51.63,-1.11 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Bensington adıyla geçer; eski adlar: -; modern: Benson, Oxfordshire (Birlesik Krallik) |
| Biograd | y_once1281_yt_avrupa.js | sehir | 43.93,15.48 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Biograd adıyla geçer; eski adlar: -; modern: Biograd na Moru (HR). ÖNEMLİ BAŞKENT (YER |
| Bodonitsa (Mendhenítsa) | y_once1281_yt_avrupa.js | sehir | 38.75,22.63 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Bodonitsa adıyla geçer; eski adlar: Mendenitsa; modern: Mendhenítsa (Greece). ÖNEMLİ B |
| Bretanya | y_once1281_yt_avrupa.js | bolge | 48.03,-2.60 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Bretanya adıyla geçer; eski adlar: -; modern: - (Bretagne). BÖLGE TEMSİLCİSİ: yer bili |
| Britannia | y_once1281_yt_avrupa.js | bolge | 53.83,-2.42 | hep (sahipli dönemi yok) | UYARI (29 Ekim 2026 denetim A12/B12): BÖLGE NOKTASI, tek bir yer değil — Britannia ve Britanya aynı adanın iki |
| Britanya | y_once1281_yt_avrupa.js | bolge | 53.93,-2.49 | hep (sahipli dönemi yok) | UYARI (29 Ekim 2026 denetim A12/B12): BÖLGE NOKTASI, tek bir yer değil — Britannia ve Britanya aynı adanın iki |
| Bulgaristan | y_once1281_yt_avrupa.js | bolge | 42.77,25.22 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Bulgaristan adıyla geçer; eski adlar: -; modern: - (Bulgaria). BÖLGE TEMSİLCİSİ: yer b |
| Caere (Cerveteri) | y_once1281_yt_avrupa.js | harabe | 42.01,12.10 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Caere adıyla geçer; eski adlar: Cerveteri; modern: Cerveteri (IT). ÖNEMLİ BAŞKENT (YER |
| Cangas | y_once1281_yt_avrupa.js | harabe | 43.35,-5.12 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Cangas adıyla geçer; eski adlar: Cangas de Onís, Cangas de Onis; modern: Cangas de Oní |
| Cerami | y_once1281_yt_avrupa.js | sehir | 37.81,14.51 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Cerami adıyla geçer; eski adlar: -; modern: Cerami (IT). Çevrimdışı eşleme: Pleiades C |
| Chiusi | y_once1281_yt_avrupa.js | sehir | 43.02,11.95 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Chiusi adıyla geçer; eski adlar: -; modern: Chiusi (IT). KRON-ANTIK TSV ipucuna 0.0 km |
| Dacia | y_once1281_yt_avrupa.js | bolge | 47.50,22.50 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Dacia adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (Dac |
| Dalmaçya | y_once1281_yt_avrupa.js | bolge | 43.80,16.29 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Dalmaçya adıyla geçer; eski adlar: -; modern: - (Dalmatia). BÖLGE TEMSİLCİSİ: yer bili |
| Danimarka | y_once1281_yt_avrupa.js | bolge | 56.23,9.38 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Danimarka adıyla geçer; eski adlar: -; modern: - (Denmark). BÖLGE TEMSİLCİSİ: yer bili |
| Dinefwr (Llandeilo) | y_once1281_yt_avrupa.js | sehir | 51.88,-4.00 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Dinefwr adıyla geçer; eski adlar: Dinefwr Castle, Llandeilo; modern: Llandeilo (GB). Ö |
| Dole | y_once1281_yt_avrupa.js | sehir | 47.09,5.49 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Dole adıyla geçer; eski adlar: -; modern: Dole (FR). KRON-ANTIK TSV ipucuna 0.0 km; Pl |
| Eleutherna | y_once1281_yt_avrupa.js | harabe | 35.33,24.67 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Eleutherna adıyla geçer; eski adlar: -; modern: Eleutherna (Greece). ÖNEMLİ BAŞKENT (Y |
| Endülüs | y_once1281_yt_avrupa.js | bolge | 37.89,-4.78 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Endülüs adıyla geçer; eski adlar: -; modern: - (İspanya).  |
| Enns | y_once1281_yt_avrupa.js | sehir | 48.22,14.47 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Enns adıyla geçer; eski adlar: -; modern: Enns (AT). Çevrimdışı eşleme: Pleiades CSV + |
| Falerii Veteres (Civita Castellana) | y_once1281_yt_avrupa.js | harabe | 42.30,12.42 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Falerii Veteres adıyla geçer; eski adlar: -; modern: Civita Castellana (Italy). ÖNEMLİ |
| Gallaecia | y_once1281_yt_avrupa.js | bolge | 42.13,-8.25 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Gallaecia adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası  |
| Gela | y_once1281_yt_avrupa.js | sehir | 37.06,14.26 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Gela adıyla geçer; eski adlar: -; modern: Gela (IT). KRON-ANTIK TSV ipucuna 0.0 km; Pl |
| Gnezno (Gniezno) | y_once1281_yt_avrupa.js | sehir | 52.53,17.55 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Gnezno adıyla geçer; eski adlar: -; modern: Gniezno (Polonya). Fark ~3 km (TGN'nin kab |
| Gortyn (Górtys) | y_once1281_yt_avrupa.js | harabe | 35.06,24.95 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Gortyn adıyla geçer; eski adlar: Gortys, Gortyna; modern: Górtys (Greece). ÖNEMLİ BAŞK |
| Gürcistan | y_once1281_yt_avrupa.js | bolge | 42.17,43.51 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Gürcistan adıyla geçer; eski adlar: -; modern: - (Georgia). BÖLGE TEMSİLCİSİ: yer bili |
| Hedeby | y_once1281_yt_avrupa.js | harabe | 54.49,9.56 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Hedeby adıyla geçer; eski adlar: -; modern: Hedeby (Germany). ÖNEMLİ BAŞKENT (YER-2, 2 |
| Hollanda | y_once1281_yt_avrupa.js | bolge | 52.28,5.64 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Hollanda adıyla geçer; eski adlar: -; modern: - (Netherlands). BÖLGE TEMSİLCİSİ: yer b |
| Hırvatistan | y_once1281_yt_avrupa.js | bolge | 45.16,16.42 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Hırvatistan adıyla geçer; eski adlar: -; modern: - (Croatia). BÖLGE TEMSİLCİSİ: yer bi |
| Kafkasya | y_once1281_yt_avrupa.js | bolge | 43.01,43.75 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Kafkasya adıyla geçer; eski adlar: -; modern: - (CAUCASUS MTS.). BÖLGE TEMSİLCİSİ: yer |
| Karytaina (Karítaina) | y_once1281_yt_avrupa.js | sehir | 37.48,22.03 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Karytaina adıyla geçer; eski adlar: -; modern: Karítaina (Greece). ÖNEMLİ BAŞKENT (YER |
| Klosterneuburg | y_once1281_yt_avrupa.js | sehir | 48.31,16.33 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Klosterneuburg adıyla geçer; eski adlar: -; modern: Klosterneuburg (AT). ÖNEMLİ BAŞKEN |
| Krannon | y_once1281_yt_avrupa.js | harabe | 39.50,22.30 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Krannon adıyla geçer; eski adlar: -; modern: Krannon (Kastro/Douraki, Tesalya) (Yunani |
| Kulm (Chełmno) | y_once1281_yt_avrupa.js | sehir | 53.33,18.42 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Kulm adıyla geçer; eski adlar: Chełmno, Chelmno, Culm; modern: Chełmno (PL). ÖNEMLİ BA |
| Kırım | y_once1281_yt_avrupa.js | bolge | 45.40,35.82 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Kırım adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (Tau |
| Leeds | y_once1281_yt_avrupa.js | sehir | 53.80,-1.55 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Leeds adıyla geçer; eski adlar: -; modern: Leeds (Loidis bölgesi, Winwaed) (Birleşik K |
| Litvanya | y_once1281_yt_avrupa.js | bolge | 55.33,23.89 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Litvanya adıyla geçer; eski adlar: -; modern: - (Lithuania). BÖLGE TEMSİLCİSİ: yer bil |
| Lusitania | y_once1281_yt_avrupa.js | bolge | 37.50,-7.50 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Lusitania adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası  |
| Lyttos (Lyktos) | y_once1281_yt_avrupa.js | harabe | 35.21,25.37 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Lyttos adıyla geçer; eski adlar: -; modern: Lyktos (Greece). ÖNEMLİ BAŞKENT (YER-2, 23 |
| Makedonya | y_once1281_yt_avrupa.js | bolge | 41.50,21.70 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Makedonya adıyla geçer; eski adlar: -; modern: - (Kuzey Makedonya / Yunanistan / Bulga |
| Marathon | y_once1281_yt_avrupa.js | sehir | 38.15,23.97 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Marathon adıyla geçer; eski adlar: -; modern: Marathónas (GR). KRON-ANTIK TSV ipucuna  |
| Marienburg (Malbork) | y_once1281_yt_avrupa.js | sehir | 54.03,19.05 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Marienburg adıyla geçer; eski adlar: Malbork; modern: Malbork (PL). ÖNEMLİ BAŞKENT (YE |
| Metapontion (Metaponto) | y_once1281_yt_avrupa.js | harabe | 40.38,16.82 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Metapontion adıyla geçer; eski adlar: -; modern: Metaponto (Italy). ÖNEMLİ BAŞKENT (YE |
| Mikene (Mycenae) (Mikínai) | y_once1281_yt_avrupa.js | sehir | 37.73,22.76 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Mikene (Mycenae) adıyla geçer; eski adlar: -; modern: Mikínai (GR). KRON-ANTIK TSV ipu |
| Millau | y_once1281_yt_avrupa.js | sehir | 44.09,3.11 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Millau adıyla geçer; eski adlar: -; modern: Millau (FR). Çevrimdışı eşleme: Pleiades C |
| Monemvasia | y_once1281_yt_avrupa.js | kale | 36.69,23.05 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Monemvasia adıyla geçer; eski adlar: -; modern: Monemvasia (Yunanistan). Mora (Pelopon |
| Normandiya | y_once1281_yt_avrupa.js | bolge | 49.16,-0.12 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Normandiya adıyla geçer; eski adlar: -; modern: - (Normandie). BÖLGE TEMSİLCİSİ: yer b |
| Norveç | y_once1281_yt_avrupa.js | bolge | 64.24,14.02 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Norveç adıyla geçer; eski adlar: -; modern: - (Norway). BÖLGE TEMSİLCİSİ: yer bilinmiy |
| Nymphaion | y_once1281_yt_avrupa.js | harabe | 45.24,36.42 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Nymphaion adıyla geçer; eski adlar: -; modern: - (-). ÖNEMLİ BAŞKENT (YER-2, 23 Ekim 2 |
| Olynthos | y_once1281_yt_avrupa.js | sehir | 40.30,23.35 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Olynthos adıyla geçer; eski adlar: -; modern: Ólynthos (GR). KRON-ANTIK TSV ipucuna 0. |
| Palike | y_once1281_yt_avrupa.js | harabe | 37.33,14.70 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Palike adıyla geçer; eski adlar: Menai; modern: - (-). ÖNEMLİ BAŞKENT (YER-2, 23 Ekim  |
| Phaistos (Faistós) | y_once1281_yt_avrupa.js | harabe | 35.05,24.81 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Phaistos adıyla geçer; eski adlar: -; modern: Faistós (Greece). ÖNEMLİ BAŞKENT (YER-2, |
| Phalasarna | y_once1281_yt_avrupa.js | harabe | 35.51,23.57 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Phalasarna adıyla geçer; eski adlar: -; modern: Phalasarna (Greece). ÖNEMLİ BAŞKENT (Y |
| Populonia | y_once1281_yt_avrupa.js | harabe | 42.99,10.49 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Populonia adıyla geçer; eski adlar: -; modern: Populonia (Italy). ÖNEMLİ BAŞKENT (YER- |
| Poseidonia (Paestum) | y_once1281_yt_avrupa.js | harabe | 40.42,15.01 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Poseidonia adıyla geçer; eski adlar: -; modern: Paestum (Italy). ÖNEMLİ BAŞKENT (YER-2 |
| Pydna (Kítros) | y_once1281_yt_avrupa.js | harabe | 40.40,22.61 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Pydna adıyla geçer; eski adlar: -; modern: Kítros (GR). KRON-ANTIK TSV ipucuna 1.3 km; |
| Pylos (Ano Englianos) (Chóra) | y_once1281_yt_avrupa.js | harabe | 37.03,21.69 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Pylos (Ano Englianos) adıyla geçer; eski adlar: -; modern: Chóra (GR). KRON-ANTIK TSV  |
| Płock | y_once1281_yt_avrupa.js | sehir | 52.53,19.67 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Płock adıyla geçer; eski adlar: -; modern: Płock (PL). ÖNEMLİ BAŞKENT (YER-2, 23 Ekim  |
| Saint-Maurice d'Agaune | y_once1281_yt_avrupa.js | kasaba | 46.21,7.00 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Saint-Maurice d'Agaune adıyla geçer; eski adlar: -; modern: Saint-Maurice (Agaunum) (I |
| Salamis (boğaz) (Salamína) | y_once1281_yt_avrupa.js | sehir | 37.95,23.53 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Salamis (boğaz) adıyla geçer; eski adlar: -; modern: Salamína (GR). KRON-ANTIK TSV ipu |
| Salona (Ámfissa) | y_once1281_yt_avrupa.js | harabe | 38.52,22.37 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Salona adıyla geçer; eski adlar: Amfissa, Amphissa, Ámfissa; modern: Ámfissa (GR). ÖNE |
| Salzwedel | y_once1281_yt_avrupa.js | sehir | 52.85,11.15 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Salzwedel adıyla geçer; eski adlar: -; modern: Hansestadt Salzwedel (DE). ÖNEMLİ BAŞKE |
| Sason | y_once1281_yt_avrupa.js | bolge | 40.50,19.28 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Sason adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (Sas |
| Sellasia (Palaiogoulas) | y_once1281_yt_avrupa.js | harabe | 37.17,22.44 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Sellasia adıyla geçer; eski adlar: -; modern: Palaiogoulas / Kastro Sellasias (Yunanis |
| Seuthopolis | y_once1281_yt_avrupa.js | harabe | 42.61,25.36 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Seuthopolis adıyla geçer; eski adlar: -; modern: Seuthopolis (Bulgaria). ÖNEMLİ BAŞKEN |
| Sicilya | y_once1281_yt_avrupa.js | bolge | 37.65,14.10 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Sicilya adıyla geçer; eski adlar: -; modern: - (İtalya).  |
| Steyr | y_once1281_yt_avrupa.js | sehir | 48.07,14.42 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Steyr adıyla geçer; eski adlar: -; modern: Steyr (AT). ÖNEMLİ BAŞKENT (YER-2, 23 Ekim  |
| Stratos | y_once1281_yt_avrupa.js | harabe | 38.67,21.32 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Stratos adıyla geçer; eski adlar: -; modern: Strátos (GR). ÖNEMLİ BAŞKENT (YER-2, 23 E |
| Thasos | y_once1281_yt_avrupa.js | sehir | 40.78,24.72 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Thasos adıyla geçer; eski adlar: -; modern: Thásos (GR). KRON-ANTIK TSV ipucuna 1.5 km |
| Thermon | y_once1281_yt_avrupa.js | harabe | 38.56,21.67 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Thermon adıyla geçer; eski adlar: -; modern: Thérmo (GR). KRON-ANTIK TSV ipucuna 0.0 k |
| Tinchebrai (Tinchebray) | y_once1281_yt_avrupa.js | kasaba | 48.76,-0.73 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Tinchebrai adıyla geçer; eski adlar: -; modern: Tinchebray (Tinchebray-Bocage) (Fransa |
| Toskana | y_once1281_yt_avrupa.js | bolge | 43.50,11.10 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Toskana adıyla geçer; eski adlar: -; modern: - (İtalya).  |
| Trakya | y_once1281_yt_avrupa.js | bolge | 41.60,26.80 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Trakya adıyla geçer; eski adlar: -; modern: - (Türkiye / Bulgaristan / Yunanistan).  |
| Volsinii (Orvieto) | y_once1281_yt_avrupa.js | sehir | 42.72,12.11 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Volsinii adıyla geçer; eski adlar: -; modern: Orvieto (IT). KRON-ANTIK TSV ipucuna 0.4 |
| Volterra | y_once1281_yt_avrupa.js | sehir | 43.40,10.86 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Volterra adıyla geçer; eski adlar: -; modern: Volterra (IT). KRON-ANTIK TSV ipucuna 0. |
| Worms | y_once1281_yt_avrupa.js | sehir | 49.66,8.34 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Worms adıyla geçer; eski adlar: -; modern: Worms (DE). ÖNEMLİ BAŞKENT (YER-2, 23 Ekim  |
| İfrîkıye | y_once1281_yt_avrupa.js | bolge | 35.68,10.10 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide İfrîkıye adıyla geçer; eski adlar: -; modern: - (Tunus).  |
| İspanya | y_once1281_yt_avrupa.js | bolge | 40.39,-3.56 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide İspanya adıyla geçer; eski adlar: -; modern: - (Spain). BÖLGE TEMSİLCİSİ: yer bilinmiy |
| İtalya | y_once1281_yt_avrupa.js | bolge | 42.80,12.50 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide İtalya adıyla geçer; eski adlar: -; modern: - (İtalya).  |
| Daha (Kediri) | y_once1281_yt_dogu_gd_asya.js | sehir | -7.75,112.02 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Daha adıyla geçer; eski adlar: Kediri; modern: Kediri (ID). ÖNEMLİ BAŞKENT (YER-2, 23  |
| Dazaifu | y_once1281_yt_dogu_gd_asya.js | sehir | 33.51,130.52 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Dazaifu adıyla geçer; eski adlar: -; modern: Dazaifu (Japonya (Fukuoka)).  |
| Ishanapura (Sambor Prei Kuk) | y_once1281_yt_dogu_gd_asya.js | harabe | 12.87,105.04 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Ishanapura adıyla geçer; eski adlar: Sambor Prei Kuk, Isanapura; modern: Sambor Prei K |
| Japonya | y_once1281_yt_dogu_gd_asya.js | bolge | 36.65,137.97 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Japonya adıyla geçer; eski adlar: -; modern: - (Japan). BÖLGE TEMSİLCİSİ: yer bilinmiy |
| Jolbon (Huanren) | y_once1281_yt_dogu_gd_asya.js | sehir | 41.26,125.41 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Jolbon adıyla geçer; eski adlar: Huanren, Wunü Mountain, Wunu Shan; modern: Huanren (C |
| Kamboçya | y_once1281_yt_dogu_gd_asya.js | bolge | 12.72,104.91 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Kamboçya adıyla geçer; eski adlar: -; modern: - (Cambodia). BÖLGE TEMSİLCİSİ: yer bili |
| Kore yarımadası | y_once1281_yt_dogu_gd_asya.js | bolge | 37.96,127.15 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Kore yarımadası adıyla geçer; eski adlar: -; modern: - (KOREA). BÖLGE TEMSİLCİSİ: yer  |
| Moğolistan | y_once1281_yt_dogu_gd_asya.js | bolge | 46.83,103.06 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Moğolistan adıyla geçer; eski adlar: -; modern: - (Mongolia). BÖLGE TEMSİLCİSİ: yer bi |
| Ordu-Balık (Ordu-Baliq) | y_once1281_yt_dogu_gd_asya.js | harabe | 47.41,102.63 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Ordu-Balık adıyla geçer; eski adlar: Ötüken, Karabalgasun, Ordu-Baliq, Khar Balgas, Kh |
| Pakuan Pajajaran (Bogor) | y_once1281_yt_dogu_gd_asya.js | sehir | -6.57,106.75 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Pakuan Pajajaran adıyla geçer; eski adlar: Bogor; modern: Bogor (ID). ÖNEMLİ BAŞKENT ( |
| Sumatra | y_once1281_yt_dogu_gd_asya.js | bolge | -0.45,101.51 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Sumatra adıyla geçer; eski adlar: -; modern: - (SUMATRA). BÖLGE TEMSİLCİSİ: yer bilinm |
| Tayland | y_once1281_yt_dogu_gd_asya.js | bolge | 15.14,101.01 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Tayland adıyla geçer; eski adlar: -; modern: - (Thailand). BÖLGE TEMSİLCİSİ: yer bilin |
| Vietnam | y_once1281_yt_dogu_gd_asya.js | bolge | 16.66,106.30 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Vietnam adıyla geçer; eski adlar: -; modern: - (Vietnam). BÖLGE TEMSİLCİSİ: yer bilinm |
| Badami | y_once1281_yt_hint.js | sehir | 15.92,75.68 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Badami adıyla geçer; eski adlar: -; modern: Badami (Vatapi) (Hindistan). Badami Çaluky |
| Belur | y_once1281_yt_hint.js | sehir | 13.16,75.86 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Belur adıyla geçer; eski adlar: -; modern: Belūr (IN). ÖNEMLİ BAŞKENT (YER-2, 23 Ekim  |
| Beşbalık | y_once1281_yt_hint.js | harabe | 44.07,89.19 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Beşbalık adıyla geçer; eski adlar: -; modern: - (Çin (Sincan)). Önerilen koordinat Jim |
| Gampola | y_once1281_yt_hint.js | sehir | 7.17,80.57 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Gampola adıyla geçer; eski adlar: -; modern: Gampola (LK). ÖNEMLİ BAŞKENT (YER-2, 23 E |
| Hindistan | y_once1281_yt_hint.js | bolge | 20.60,79.50 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Hindistan adıyla geçer; eski adlar: -; modern: - (Hindistan).  |
| Mahoba | y_once1281_yt_hint.js | sehir | 25.29,79.87 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Mahoba adıyla geçer; eski adlar: -; modern: Mahoba (Hindistan). Çandela şehri; iki kay |
| Tholing (Toding) | y_once1281_yt_hint.js | sehir | 31.48,79.80 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Tholing adıyla geçer; eski adlar: Toling, Thöling, Zanda, Tuolin; modern: Toding (CN). |
| Tibet | y_once1281_yt_hint.js | bolge | 33.36,90.31 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Tibet adıyla geçer; eski adlar: -; modern: - (PLATEAU OF TIBET). BÖLGE TEMSİLCİSİ: yer |
| Tokmok | y_once1281_yt_hint.js | kasaba | 42.85,75.30 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Tokmok adıyla geçer; eski adlar: -; modern: Tokmok (Suyab/Ak-Besim yakini) (Kırgızista |
| Şakambhari (Sāmbhar) | y_once1281_yt_hint.js | sehir | 26.91,75.18 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Şakambhari adıyla geçer; eski adlar: Sambhar, Shakambhari; modern: Sāmbhar (IN). ÖNEML |
| Azerbaycan | y_once1281_yt_iran_orta_asya.js | bolge | 38.00,46.30 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Azerbaycan adıyla geçer; eski adlar: -; modern: - (İran).  |
| Bactria | y_once1281_yt_iran_orta_asya.js | bolge | 37.41,67.15 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Bactria adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (B |
| Bagram | y_once1281_yt_iran_orta_asya.js | sehir | 34.99,69.31 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Bagram adıyla geçer; eski adlar: Begram, Kapisa; modern: Bagrām (AF). ÖNEMLİ BAŞKENT ( |
| Cürcân | y_once1281_yt_iran_orta_asya.js | bolge | 37.10,56.30 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Cürcân adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (Va |
| Deylem | y_once1281_yt_iran_orta_asya.js | bolge | 37.23,48.84 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Deylem adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (De |
| Fergana | y_once1281_yt_iran_orta_asya.js | bolge | 40.64,71.64 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Fergana adıyla geçer; eski adlar: -; modern: - (Fergana Valley). BÖLGE TEMSİLCİSİ: yer |
| Pakistan | y_once1281_yt_iran_orta_asya.js | bolge | 29.95,69.34 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Pakistan adıyla geçer; eski adlar: -; modern: - (Pakistan). BÖLGE TEMSİLCİSİ: yer bili |
| Semender | y_once1281_yt_iran_orta_asya.js | kasaba | 42.94,47.40 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Semender adıyla geçer; eski adlar: -; modern: Semender (Hazar sehri, Dagistan) (Rusya) |
| Soğd | y_once1281_yt_iran_orta_asya.js | bolge | 38.96,66.81 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Soğd adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (Sogd |
| Tirmiz | y_once1281_yt_iran_orta_asya.js | sehir | 37.26,67.19 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Tirmiz adıyla geçer; eski adlar: -; modern: Tirmiz (UZ). Çevrimdışı eşleme: Pleiades C |
| Tohâristân | y_once1281_yt_iran_orta_asya.js | bolge | 36.75,67.00 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Tohâristân adıyla geçer; eski adlar: -; modern: - (Afganistan).  |
| Yahudiyye (Maymana) | y_once1281_yt_iran_orta_asya.js | sehir | 35.92,64.78 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Yahudiyye adıyla geçer; eski adlar: Meymene, Maymana, Meymaneh, Maimana; modern: Mayma |
| Özkent (Uzgen) | y_once1281_yt_iran_orta_asya.js | sehir | 40.80,73.23 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Özkent adıyla geçer; eski adlar: Uzgen, Özgön, Uzgend, Ozgon; modern: Uzgen (KG). ÖNEM |
| Akrabâ (‘Aqrabā) | y_once1281_yt_ortadogu.js | sehir | 33.11,36.01 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Akrabâ adıyla geçer; eski adlar: -; modern: ‘Aqrabā (SY). Çevrimdışı eşleme: Pleiades  |
| Anşan | y_once1281_yt_ortadogu.js | harabe | 30.00,52.41 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Anşan adıyla geçer; eski adlar: Tal-i Malyan, Anshan, Tal-e Malyan, Tall-i Malyan, Mal |
| Banyas | y_once1281_yt_ortadogu.js | kale | 33.25,35.69 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Banyas adıyla geçer; eski adlar: -; modern: Banyas / Paneas (Caesarea Philippi), Golan |
| Bisütun (Bisotun) | y_once1281_yt_ortadogu.js | harabe | 34.39,47.43 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Bisütun adıyla geçer; eski adlar: -; modern: Bisotun (İran).  |
| Bostra (Buşrá ash Shām) | y_once1281_yt_ortadogu.js | sehir | 32.52,36.48 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Bostra adıyla geçer; eski adlar: -; modern: Buşrá ash Shām (SY). Çevrimdışı eşleme: Pl |
| Celûlâ (Jalula) | y_once1281_yt_ortadogu.js | kasaba | 34.27,45.17 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Celûlâ adıyla geçer; eski adlar: -; modern: Jalula (Celûlâ, Diyala) (Irak). Pleiades-T |
| Cibâl | y_once1281_yt_ortadogu.js | bolge | 34.80,48.50 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Cibâl adıyla geçer; eski adlar: -; modern: - (İran).  |
| Dibon (Dhībān) | y_once1281_yt_ortadogu.js | sehir | 31.50,35.78 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Dibon adıyla geçer; eski adlar: -; modern: Dhībān (Jordan). ÖNEMLİ BAŞKENT (YER-2, 23  |
| Dur-Untaş (Çoğa Zanbil) | y_once1281_yt_ortadogu.js | harabe | 32.01,48.52 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Dur-Untaş (Çoğa Zanbil) adıyla geçer; eski adlar: -; modern: Çoğa Zanbil (İran). UNESC |
| Ebher (Abhar) | y_once1281_yt_ortadogu.js | sehir | 36.15,49.22 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Ebher adıyla geçer; eski adlar: -; modern: Abhar (İran (Zencan)). TGN ~10 km; GeoNames |
| Elam | y_once1281_yt_ortadogu.js | bolge | 31.70,49.62 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Elam adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (Elam |
| Elymais | y_once1281_yt_ortadogu.js | bolge | 32.33,48.50 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Elymais adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (E |
| Fars | y_once1281_yt_ortadogu.js | bolge | 29.62,52.53 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Fars adıyla geçer; eski adlar: -; modern: - (İran).  |
| Fihl (Pella) | y_once1281_yt_ortadogu.js | harabe | 32.45,35.61 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Fihl adıyla geçer; eski adlar: -; modern: Pella / Tabaqat Fahl (Urdun).  |
| Filistin | y_once1281_yt_ortadogu.js | bolge | 31.93,34.87 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Filistin adıyla geçer; eski adlar: -; modern: - (İsrail/Filistin).  |
| Fîrûzkûh | y_once1281_yt_ortadogu.js | sehir | 35.76,52.77 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Fîrûzkûh adıyla geçer; eski adlar: -; modern: Fīrūzkūh (IR). ÖNEMLİ BAŞKENT (YER-2, 23 |
| Gubla (Byblos) | y_once1281_yt_ortadogu.js | harabe | 34.12,35.65 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Gubla adıyla geçer; eski adlar: Cubeyl; modern: Byblos (LB). ÖNEMLİ BAŞKENT (YER-2, 23 |
| Havran | y_once1281_yt_ortadogu.js | bolge | 32.73,36.53 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Havran adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (Au |
| Hebron | y_once1281_yt_ortadogu.js | harabe | 31.52,35.10 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Hebron adıyla geçer; eski adlar: -; modern: Hebron (PS). ÖNEMLİ BAŞKENT (YER-2, 23 Eki |
| Hekatompylos (Şehr-i Kumis) | y_once1281_yt_ortadogu.js | sehir | 35.96,54.04 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Hekatompylos adıyla geçer; eski adlar: -; modern: Şehr-i Kumis (Damgan ~30 km batısı)  |
| Hicaz | y_once1281_yt_ortadogu.js | bolge | 26.00,37.74 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Hicaz adıyla geçer; eski adlar: -; modern: - (HEJAZ MTS.). BÖLGE TEMSİLCİSİ: yer bilin |
| Hulvân (Hulwan) | y_once1281_yt_ortadogu.js | sehir | 34.47,45.86 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Hulvân adıyla geçer; eski adlar: -; modern: Hulwan / Sarpol-e Zahab civarı (İran (Kirm |
| Hûzistan | y_once1281_yt_ortadogu.js | bolge | 32.27,48.50 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Hûzistan adıyla geçer; eski adlar: -; modern: - (İran).  |
| Irak | y_once1281_yt_ortadogu.js | bolge | 33.04,43.74 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Irak adıyla geçer; eski adlar: -; modern: - (Iraq). BÖLGE TEMSİLCİSİ: yer bilinmiyor,  |
| Istahr (Istakhr) | y_once1281_yt_ortadogu.js | harabe | 29.98,52.91 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Istahr adıyla geçer; eski adlar: Istakhr, Stakhr, Estakhr; modern: Istakhr (Iran). ÖNE |
| Kala'at al-Bahrain (Qal'at al-Bahrain) | y_once1281_yt_ortadogu.js | harabe | 26.23,50.52 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Kala'at al-Bahrain adıyla geçer; eski adlar: Qal'at al-Bahrain, Bahrain Fort, Qalat al |
| Katna (Al-Mashrafah) | y_once1281_yt_ortadogu.js | harabe | 34.83,36.87 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Katna adıyla geçer; eski adlar: Tell Mishrife, Qatna, al-Mishrifeh, Mishrifeh; modern: |
| Krak des Chevaliers | y_once1281_yt_ortadogu.js | sehir | 34.76,36.29 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Krak des Chevaliers adıyla geçer; eski adlar: Hısnü'l-Ekrâd; modern: Krak des Chevalie |
| Lübnan | y_once1281_yt_ortadogu.js | bolge | 33.92,35.88 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Lübnan adıyla geçer; eski adlar: -; modern: - (Lebanon). BÖLGE TEMSİLCİSİ: yer bilinmi |
| Marib | y_once1281_yt_ortadogu.js | harabe | 15.43,45.34 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Marib adıyla geçer; eski adlar: Ma'rib, Mariaba; modern: Ma'rib (YE). ÖNEMLİ BAŞKENT ( |
| Masada | y_once1281_yt_ortadogu.js | kale | 31.32,35.35 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Masada adıyla geçer; eski adlar: -; modern: Masada (İsrail).  |
| Media | y_once1281_yt_ortadogu.js | bolge | 35.05,48.92 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Media adıyla geçer; eski adlar: -; modern: - (-). Pleiades bölge/temsilci noktası (Med |
| Necran | y_once1281_yt_ortadogu.js | sehir | 17.48,44.15 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Necran adıyla geçer; eski adlar: -; modern: - (Suudi Arabistan). Antik yerleşim (Ukhdû |
| Rey | y_once1281_yt_ortadogu.js | sehir | 35.59,51.45 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Rey adıyla geçer; eski adlar: -; modern: Rey (IR). Çevrimdışı eşleme: Pleiades CSV + G |
| Sabva (Shabwah) | y_once1281_yt_ortadogu.js | harabe | 15.37,47.03 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Sabva adıyla geçer; eski adlar: Shabwa, Shabwah, Sabota; modern: Shabwah (Yemen). ÖNEM |
| Sumur | y_once1281_yt_ortadogu.js | harabe | 34.71,35.99 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Sumur adıyla geçer; eski adlar: Tell Kazel, Simyra; modern: - (-). ÖNEMLİ BAŞKENT (YER |
| Terqa | y_once1281_yt_ortadogu.js | harabe | 34.92,40.57 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Terqa adıyla geçer; eski adlar: -; modern: - (-). ÖNEMLİ BAŞKENT (YER-2, 23 Ekim 2026) |
| Tihâme | y_once1281_yt_ortadogu.js | bolge | 18.38,41.75 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Tihâme adıyla geçer; eski adlar: -; modern: - (Tihāmah). BÖLGE TEMSİLCİSİ: yer bilinmi |
| Yeha | y_once1281_yt_ortadogu.js | sehir | 14.29,39.02 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Yeha adıyla geçer; eski adlar: -; modern: - (-). ÖNEMLİ BAŞKENT (YER-2, 23 Ekim 2026): |
| Yemen | y_once1281_yt_ortadogu.js | bolge | 15.94,47.54 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Yemen adıyla geçer; eski adlar: -; modern: - (Yemen). BÖLGE TEMSİLCİSİ: yer bilinmiyor |
| Zafâr | y_once1281_yt_ortadogu.js | harabe | 14.21,44.40 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Zafâr adıyla geçer; eski adlar: -; modern: - (Yemen). Zafâr (Himyer, Yarim yakını) doğ |
| Ürdün | y_once1281_yt_ortadogu.js | bolge | 31.25,36.77 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide Ürdün adıyla geçer; eski adlar: -; modern: - (Jordan). BÖLGE TEMSİLCİSİ: yer bilinmiyo |
| İran | y_once1281_yt_ortadogu.js | bolge | 32.58,54.28 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide İran adıyla geçer; eski adlar: -; modern: - (Iran). BÖLGE TEMSİLCİSİ: yer bilinmiyor,  |
| İzeh | y_once1281_yt_ortadogu.js | harabe | 31.84,49.87 | hep (sahipli dönemi yok) | YER-TANIMA: kronolojide İzeh adıyla geçer; eski adlar: Mâlemîr; modern: Īz̄eh (IR). ÖNEMLİ BAŞKENT (YER-2, 23  |
| Abila | y_once1281_yt_yer3.js | sehir | 33.63,36.11 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Abila» (suriye-filistin; devlet: -) bileşeni; eski adlar: Abila Lysanio |
| Adab | y_once1281_yt_yer3.js | sehir | 31.95,45.62 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Adab Bismaya» (mezopotamya; devlet: -) bileşeni; eski adlar: Adab, Udnu |
| Arkheopolis | y_once1281_yt_yer3.js | kale | 42.36,42.19 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Arkheopolis» (kafkasya; devlet: -) bileşeni; eski adlar: Archaeopolis,  |
| Ağmât | y_once1281_yt_yer3.js | sehir | 31.42,-7.80 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Ağmât → Merakeş» (kuzey-afrika; devlet: -) bileşeni; eski adlar: Aghmat |
| Bozra | y_once1281_yt_yer3.js | sehir | 30.73,35.61 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Bozra Busayra» (suriye-filistin; devlet: -) bileşeni; eski adlar: Bozra |
| Brahmapura | y_once1281_yt_yer3.js | kasaba | 32.44,76.54 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Brahmapura → Chamba» (guney-asya; devlet: -) bileşeni; eski adlar: Brah |
| Câbiye | y_once1281_yt_yer3.js | sehir | 32.92,36.00 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «belirsiz Cabiye» (suriye-filistin; devlet: -) bileşeni; eski adlar: el- |
| Dehlek-i Kebîr | y_once1281_yt_yer3.js | kasaba | 15.62,40.02 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Dahlak Kebir» (dogu-afrika; devlet: -) bileşeni; eski adlar: Dahlak Keb |
| Erzen | y_once1281_yt_yer3.js | sehir | 37.98,41.38 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Bitlis → Erzen» (anadolu; devlet: -) bileşeni; eski adlar: Arzan, Arzen |
| Fûmen | y_once1281_yt_yer3.js | sehir | 37.22,49.31 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Fûmen Fuman» (iran; devlet: -) bileşeni; eski adlar: Fuman, Fumen, Fowm |
| Gibea | y_once1281_yt_yer3.js | kale | 31.82,35.23 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Gibea → Hebron → Urusalim» (suriye-filistin; devlet: -) bileşeni; eski  |
| Halebidu | y_once1281_yt_yer3.js | sehir | 13.22,75.99 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Belur → Halebidu» (guney-asya; devlet: -) bileşeni; eski adlar: Dorasam |
| Izirtu | y_once1281_yt_yer3.js | kale | 36.57,46.27 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Izirtu Zirta» (iran; devlet: -) bileşeni; eski adlar: Zirta, Izirta, Zi |
| Kalinganagara | y_once1281_yt_yer3.js | sehir | 18.60,83.96 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Kalinganagara Mukhalingam» (guney-asya; devlet: -) bileşeni; eski adlar |
| Kal‘atü Benî Hammâd | y_once1281_yt_yer3.js | sehir | 35.82,4.79 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Kal‘atü Benî Hammâd → Bicâye» (kuzey-afrika; devlet: -) bileşeni; eski  |
| Kaveripattinam | y_once1281_yt_yer3.js | sehir | 11.15,79.85 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Kaveripattinam Puhar» (guney-asya; devlet: -) bileşeni; eski adlar: Puh |
| Kukiya | y_once1281_yt_yer3.js | sehir | 15.35,0.76 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Kukia → Gao 1009-10» (bati-afrika; devlet: -) bileşeni; eski adlar: Kūk |
| Kâlincar | y_once1281_yt_yer3.js | kale | 25.00,80.49 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Khajuraho → Mahoba · Kâlincar» (guney-asya; devlet: -) bileşeni; eski a |
| Leontopolis | y_once1281_yt_yer3.js | sehir | 30.68,31.36 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Leontopolis» (misir-sudan; devlet: -) bileşeni; eski adlar: Taremu, Tel |
| Levý Hradec | y_once1281_yt_yer3.js | kale | 50.17,14.37 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Levý Hradec → Prag Pražský hrad» (orta-avrupa; devlet: -) bileşeni; esk |
| Manyakheta | y_once1281_yt_yer3.js | sehir | 17.19,77.16 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Manyakheta» (guney-asya; devlet: -) bileşeni; eski adlar: Manyakheta; m |
| Montfort | y_once1281_yt_yer3.js | kale | 33.04,35.23 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Montfort Starkenberg» (suriye-filistin; devlet: -) bileşeni; eski adlar |
| Nîl | y_once1281_yt_yer3.js | sehir | 32.46,44.86 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Nîl» (mezopotamya; devlet: -) bileşeni; eski adlar: en-Nîl, Niliyah; mo |
| Pattikera | y_once1281_yt_yer3.js | sehir | 23.50,91.13 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Pattikera Mainamati» (guney-asya; devlet: -) bileşeni; eski adlar: Patt |
| Polyrrhenia | y_once1281_yt_yer3.js | sehir | 35.46,23.66 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Polyrrhenia» (balkanlar; devlet: -) bileşeni; eski adlar: Polyrrenia, P |
| Pontida | y_once1281_yt_yer3.js | kasaba | 45.73,9.51 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «yok Pontida» (italya; devlet: -) bileşeni; eski adlar: -; modern: Ponti |
| Potentia | y_once1281_yt_yer3.js | sehir | 40.64,15.80 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Potentia» (italya; devlet: -) bileşeni; eski adlar: -; modern: Potenza  |
| Rakkāde | y_once1281_yt_yer3.js | sehir | 35.60,10.06 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Kayrevan → Rakkāde» (kuzey-afrika; devlet: -) bileşeni; eski adlar: Raq |
| Talmis | y_once1281_yt_yer3.js | sehir | 23.57,32.84 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Talmis Kalabsha» (misir-sudan; devlet: -) bileşeni; eski adlar: Kalabsh |
| Tirsa | y_once1281_yt_yer3.js | sehir | 32.29,35.34 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Sekem → Tirsa → Samiriye» (suriye-filistin; devlet: -) bileşeni; eski a |
| Tummana | y_once1281_yt_yer3.js | sehir | 22.57,82.42 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Tummana → Ratnapura Ratanpur» (guney-asya; devlet: -) bileşeni; eski ad |
| Udabhandapura | y_once1281_yt_yer3.js | sehir | 34.02,72.43 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Kâbil → Udabhandapura → Nandana → Lahor» (guney-asya; devlet: -) bileşe |
| Uç | y_once1281_yt_yer3.js | sehir | 29.24,71.06 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Mültan · Uç» (guney-asya; devlet: -) bileşeni; eski adlar: Uchchh, Uch- |
| Vahga | y_once1281_yt_yer3.js | kale | 37.85,35.95 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Vahga» (anadolu; devlet: -) bileşeni; eski adlar: Vahka, Baka, Feke Kal |
| Vikramapura | y_once1281_yt_yer3.js | sehir | 23.54,90.49 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Vikramapura» (guney-asya; devlet: -) bileşeni; eski adlar: Bikrampur; m |
| Vulci | y_once1281_yt_yer3.js | sehir | 42.42,11.63 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Vulci» (italya; devlet: -) bileşeni; eski adlar: Velch, Velx; modern: V |
| Wittenberg | y_once1281_yt_yer3.js | sehir | 51.87,12.64 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Meissen → Wittenberg → Dresden» (orta-avrupa; devlet: -) bileşeni; eski |
| Yervandaşat | y_once1281_yt_yer3.js | sehir | 40.12,43.65 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Armavir -> Yervandaşat» (kafkasya; devlet: -) bileşeni; eski adlar: Eru |
| Zûcible | y_once1281_yt_yer3.js | sehir | 13.92,44.15 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «San‘a → Zûcible» (arabistan; devlet: -) bileşeni; eski adlar: Zû Cible, |
| Îc | y_once1281_yt_yer3.js | sehir | 29.02,54.25 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Îc Îg» (iran; devlet: -) bileşeni; eski adlar: Îg, Īj, Ig, Irej; modern |
| Şemîrân Kalesi | y_once1281_yt_yer3.js | kale | 36.70,49.20 | hep (sahipli dönemi yok) | YER-3-BATI: önemli başkent listesinde «Şemîrân Kalesi Târum» (iran; devlet: -) bileşeni; eski adlar: Semîrân,  |
| Koryak toprakları | y_sibirya.js | bolge | 62.00,166.00 | hep (sahipli dönemi yok) | veri-yok — kaynak Koryakların Rusya'ya tâbilik/haraç ilişkisini netleştirmiyor; yalnız 1769-70 kıtlık/çatışma  |

## 9. Veri değişiklikleri (bu dal)

| dosya | kayıt | değişiklik |
|---|---|---|
| `yerlesimler_sibirya.js` | Yakut toprakları (Orta Lena) | `kur:"1607-01-01"`, `bit:"1682-01-01"`, `ic_not` (TDV yakutlar 1632) |
| `yerlesimler_kamerika.js` | Pecos Pueblo (Cicuye) | `kaynak` (Kessell 1979), `kur:"1515-01-01"`, `bit:"1591-01-01"`, `ic_not` (1540, 1541) |
| `yerlesimler_gamerika.js` | Beyan K4.5 B62.5 (Gran Sabana / Pemon) | `kaynak` (Encyclopedia of World Cultures), `kur:"1745-01-01"`, `bit:"1867-01-01"`, `ic_not` (1770, 1817). İkinci dönem 1875-1950 YAZILAMADI |
| `yerlesimler_ek_pasifik_adalar.js` | Port Vila (Efate) | KALDIRILDI: `a78` "Port Vila" ile mükerrer (0 km) ve çelişkili |
| `yerlesimler_a78_okyanusya.js` | Port Vila | `ic_not`: birleştirme beyanı + 1906 Sözleşmesi kaynağı taşındı |

- Washington (D.C.) (`odak_yedek_1023`, `bit:"1281-01-01"`) ile Washington D.C. (`kamerika`, `kur:1791`) ad bakımından mükerrer, 2 km mesafede. Dokunulmadı. Gerekçe: odak kaydı kronoloji kamera odağı için tutuluyor ve 1281 sonrası sahnede değil. Birleştirmek için kronoloji `odak_yer` başvurularını taşımak gerekir; bu ayrı iş.
- Öteki "≤3 km" çiftleri (Filistin–Remle, Cibâl–Hemedan, Lusitania–Baetica, İfrîkıye–Kayrevan, Endülüs–Kurtuba, Adiabene–Erbil, Mısır–Eski Kahire, Kamboçya–Kompong Thom, Aigion–Vostitsa) bölge vekili ile şehir çiftidir. Ad farklıdır, mükerrer değildir. Ama bölge vekilinin bir şehrin üstüne konması petek bölüşmesini bozar; `odak_yedek` borcu olarak not edildi.
- Motor dosyalarına dokunulmadı. Koşu başlatılmadı. `main`e itilmedi.

## 10. Rapor sonu

**① Ne ölçtüm**
- 630 `bos` noktası, 9 sınıf:
  - A1 aşiret yurdu 40 · A2 devletsiz şehir 4
  - B1 aşiret dilimi 26 · B2 devletsiz şehir dilimi 119
  - C1 boş çöl 30 · C2 insansız/çöl 14
  - D1 veri-yok sahipsiz 322 · D2 veri-yok dilim 69
  - E hata 6
- A sınıfının 44 noktası iki alt ajanla araştırıldı:
  - ajan sonucu: 9 "tarihlendi", 4 "yalnız yüzyıl", 31 "bulunamadı";
  - akademik + okunmuş çıtasını geçen: **3**, veriye yazıldı;
  - 41 nokta iş listesinde.
- Mükerrer: 1 birleştirildi (Port Vila), 1 bırakıldı (Washington), 9 yakınlık çifti mükerrer değil.
- `denetle.py` çıkış kodu: §11'e bakın.

**② Ne bulamadım**
- 41 A noktasının akademik tarihli tanıklığını bulamadım. Bunların çoğu "okunamadı"dır: Encyclopaedia of Islam/Iranica, Lorimer, HNAI ciltleri, Evans-Pritchard, Lewis, Keenan, Pospisil, Saussol gibi adaylar tabloda yazılı ama gövdeleri açılmadı.
- B sınıfının 145 dilimi için pencere yazacak bir şema yok.
- 391 veri-yok noktaya boşluk doldurma merdiveni uygulanmadı. Liste hazır (§8), ilk basamak (TDV) bile yürünmedi.
- Bu kurala göre tarih yoksa nokta engel olmaz. Motor bunu uygularsa A sınıfının 41 noktası bütün çağlarda dolguya açılır. Türkmen boyları, Anaze, Tuareg ve Yeni Gine yaylaları dahil.

**③ Ne istiyorum (önerim)**
1. **Emre kararı:** "tarihsiz aşiret = engel değil" kuralı 41 noktada uygulansın mı, yoksa araştırma bitene kadar eski hâl mi korunsun? Önerim: korunsun. Motor kuralı yalnız `kur:`/`bit:`ı dolu aşiret noktalarına uygulasın. Tarihsizler "beyanlı, tarihlenmeyi bekliyor" sayılsın, ama bu da süreli olsun.
2. **KASA (motor):** B sınıfı için dilim başına pencere. Öneri: `bos_pencere:[{f,t,kaynak}]` alanı ya da dolgunun boş dilimdeki şehri pencere dışında engel saymaması. Pemon'un ikinci dönemi de aynı alanı bekliyor.
3. **Araştırma partisi (ayrı oturum, kütüphane erişimli kaynakla):**
   - A sınıfı 41 nokta, öncelik Türkmen boyları, Anaze, Kel Ahaggar;
   - sonra veri-yok 391 nokta, merdivenin ① TDV basamağından.
   - Arama aracı akademik PDF açamıyorsa insan eliyle kaynak girişi (Emre/UMIT) gerekir.
4. Fiji/Bau ve Tibesti çelişkileri kaynakla çözülsün: Bau 1867-71 Cakobau krallığı; Tibesti'de Osmanlı 1907-12 garnizonu.

## 11. Değişmez ölçümü

`py arac/denetle.py` · EMRELİC · bu worktree · `coz-c` ile açılmış üretilmiş dosyalarla · **çıkış 0, "SONUÇ: temiz"**.
- Değişmez 1: 5.648 yerleşim, 210 sahipsiz (beklenen 210).
- 1c belgesiz: 1 (tavan 2).
- Uyarı (ihlal değil): YIL-TEMSİLÎ BORÇ 441 > 436. Bu oturum yeni `YYYY-01-01` kırılması yazmadı. Kaynağı bu daldan değil, tabandan gelir. Ayrıca ölçülmedi.

Ajanların ham çıktısı (aday kaynaklar, okunmadı/okundu damgalı): `denetim/ASIRET-DEVLETSIZ-1118-kaynak-adaylari.json`.
