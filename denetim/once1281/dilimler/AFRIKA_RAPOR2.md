# AFRIKA tur 2 raporu

Web erişimi var: WebFetch yalnız Vikipedi ve TDV'yi açtı (EBSCO, Cambridge Core özet sayfası da açıldı); Brill/EI, JSTOR, archive.org tam metni açılmadı (denenmedi: curl yolu zamanında uygulanmadı; BRIF2'deki "Bash + curl" bölümü bu worktree'deki kopyada yoktu).

## 1. Sayılar (dilim dosyaları son durum)
| Dilim | Kayıt | okundu | kismen-okundu | taslak | bu turda eklenen | elenen |
|---|---|---|---|---|---|---|
| A | 0 | 0 | 0 | 0 | 0 | 0 |
| B | 2 | 0 | 0 | 2 | 0 | 0 |
| C | 4 | 0 | 0 | 4 | 0 | 2 (sao-sehir-devletleri, djenne-djenno) |
| D | 12 | 3 (wagadu-gane-erken, tekrur-erken, kevkev-erken: TDV) | 6 (eksarhlik, altava, nekor, ifraniler, sahra-sanhaca, sala-emirligi) | 3 (zawila, zagava, ibadi-imamlik) | 2 (sala-emirligi-benifren, ibadi-imamlik-trablus) | 3 (igbo-ukwu, tadmekka, toutswe-sefligi) |
| E | 7 | 3 (norman-ifrikiye, sfaks x2) | 2 (kabis, kafsa) | 2 (kangaba, ife) | 3 (sfaks-hammu, sfaks-firyani, kafsa-benirend) | 0 |

Doğrulama toplamı: okundu 6, kismen-okundu 8, taslak 11 (25 kayıt + 5 elenen ayrı). Elenenler `AFRIKA_ELENEN.json`'da (5 kayıt, gerekçeli).

## 2. Önemli bulgular
- **Mevcut künyeleri genişletme önerisi (TDV okundu):** `gane` f=1000 → VIII. yy (TDV Gâne: Soninke hanedanı VIII. yy, 1076'ya kadar); `tekrur-kralligi` f=1000 → IX. yy (TDV Tekrûr, Hatice Uğur, c. 40 s. 387-388); `kevkev` f=1000 → IX. yy (TDV Gao, Rıza Kurtuluş, c. 13 s. 357; 1009-10 Gao'ya taşınma, 1324 Mali). Erken kayıtlar ayrı polity değil, aynı polity'nin önceki evresidir.
- Norman Afrika 1148-1160 (Matt King, Haskins Society Journal 2017; TDV Mehdiye, Sefâkus) okundu; Sicilya Krallığı'ndan ayrı künye mi sorusu açık.
- Sfaks'ta iki ayrı bağımsızlık (1062-1099 Hammû; 1156-1159 Firyânî) TDV Sefâkus'tan okundu.
- Yıfrenîler: TDV İfren maddesi okundu (Ebû Kurre 765; İfkân emirliği 958; Şâle emirliği 1066). Yıfrenî zarfı ardışık emirliklerden oluşur, tek devlet gibi yönetilmemeli.
- Astronomik yıl hatası düzeltildi: kyrenaika-magas (MÖ 276 = -0275), massyli/masaesyli (MÖ 202/203).
- Nekor: Vikipedi EI2 'Nakūr' atfıyla 710-~1015 verir; TDV'de madde yok (aranıp bulunamadı); taslağın 1019'u desteklenmedi.

## 3. Ulaşılamayan / doğrulanamayan
- Encyclopaedia of Islam (Nakūr, Banū Ifran, Banū Khaṭṭāb), Encyclopédie berbère (Altava, Masaesyli), Levtzion-Hopkins Corpus, McDougall 1985, Baadj 2015, Blier 2015: Vikipedi atfıyla biliniyor, hiçbiri açılmadı.
- TDV'de Nekûr, Hattâbîler (Zavîle), Kâbis şehir maddesi bulunamadı.
- Taslak kalanlar: Utica, Barka, Masaesyli, Massyli, Kyrenaika-Magas, Aurès, Zavîle-Hattâbîler, Zağava, Trablus İbâdî İmamlığı (hafızadan), Kangaba, Ife.
- Eklenemeyen adaylar (araştırılmadı): Mağrâve Agmat emirliği, Gumâra/Hâmim (925), Hodna/Ortaias, Laguatan, Awraba/Kusayla (Altava içinde not), Mema/Dia, Sijilmasa dışı Zenâte emirlikleri, Kanem-Bornu/Hausa/Benin başlangıç tarihleri (mevcut künyeler, kontrol edilmedi).

## 4. İstekler
- Ana oturum curl ile EI/JSTOR/archive.org erişimi olan bir oturumda taslakları (özellikle Nakūr, Zavîle, Aurès, Masaesyli) yeniden doğrulatsın.
- Karar: Kangaba/Ife/Kotoko polity sayılır mı; 'eksarhlik', 'imamlik' tür adları sözlükte yoksa karar.
- Elenen 5 kayıt (Igbo-Ukwu, Tadmekka, Toutswe, Sao, Djenné-Djenno) Emre isterse 'seflik/heterarşi' türüyle geri alınır.
