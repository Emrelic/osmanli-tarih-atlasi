# BORÇ — Hint grubu F2 parti 1: yazılamayan 28 şehir (16 Kasım 2026, LAB)

Parti 1'de 40 şehirden 12'si yazıldı (`data/sehir_tarihce_hint.js`: Delhi, Lahor, Multan, Ecmîr, Kalküta, Murşidâbâd, Bahâvelpûr,
Amritsar, Agra, Dakka, Haydarâbâd-Dekken, Ahmedâbâd). Kalan 28 KAYNAKSIZ YAZILMADI. Ortak sınır: Britannica/Iranica 403, Gutenberg 503,
akademik makaleler web aramasıyla çıkmıyor; TDV maddeleri WebFetch özetinden okundu (tam gövde değil; `kaynak` alanlarında "özet okuma" işaretli).
⚠️ "Çözüm yolu" sütunu ARAŞTIRMA ÖNERİSİdir (aranacak kaynak adı); bu oturumda bu eserler OKUNMADI, dayanak değildir.

| şehir | neden | çözüm yolu |
|---|---|---|
| Kannauc | TDV slug'ı madde döndürmedi | Majumdar *History and Culture of the Indian People* IV-V; Tripathi *History of Kanauj* |
| Gvalyar (Gwalior) | zaman/kaynak yetmedi | Cambridge History of India III; Sewell/Hooja; TDV Gvalyar gövdesi |
| Tatta (Thatta) | yalnız ARGUNLULAR/SİND parçalarında geçiyor | Pathan *Sindh*; TDV Sind gövdesi; Elliot & Dowson |
| Gaur (Lakhnautî) | zaman/kaynak yetmedi | Eaton *Rise of Islam and the Bengal Frontier*; Banglapedia Gaur |
| Katmandu | Nepal TDV parçasında tarih yok; gorev.tsv kronoloji yılı sorunlu | Regmi *Ancient Nepal*; Slusser *Nepal Mandala* |
| Srinagar | zaman/kaynak yetmedi; gorev.tsv yılı doğrulanmadı | Stein *Kalhana's Rajatarangini*; Hasan *Kashmir under the Sultans* |
| Leknev (Lucknow) | TDV "XIII. yüzyıl başı" belirsiz | Llewellyn-Jones *A Fatal Friendship*; Imperial Gazetteer |
| Patna | gorev.tsv kronoloji yılları (-002..-036) şüpheli; kaynak yetmedi | Jayaswal; Majumdar II-III (Pataliputra) |
| Siyâlkot | zaman/kaynak yetmedi | Cambridge History of India; Punjab District Gazetteer |
| Bhopâl | TDV "Bopal" yalnız "XVIII. yy başları" | Imperial Gazetteer Bhopal; Hooja/Ali |
| Bîcâpur (Bijapur) | TDV'deki en eski olgu 1294 (atlas başlangıcı 1281'den sonra); ilk anılış epigrafik | Epigraphia Carnatica; ASI; Kalyani Çalukya kitabeleri; Eaton *Social History of the Deccan* |
| Bîdar | TDV en eski 1322; Muhammedâbâd 1424 olgusu var | Epigraphia Indo-Moslemica; Sherwani *Bahmanis* |
| Golkonda | TDV en eski 1363 (Kanhayya) | Sherwani *Qutb Shahis*; Kakatiya kitabeleri |
| Vijayanagara (Hampi) | TDV'de ayrı madde yok; Sewell metnine 503 | Sewell *A Forgotten Empire*; Stein *Vijayanagara*; Sastri |
| Evrengâbâd (Aurangabad) | Britannica 403; Iranica kuruluş yılı vermiyor | Sarkar; Iranica Khuldābād; Imperial Gazetteer of India (Aurangabad) |
| Çitor (Chittorgarh) | yalnız Vikipedi/turizm yansıları | Hooja *A History of Rajasthan*; Tod *Annals* |
| Udeypûr (Udaipur) | aynı; 1553 ↔ 1559 çelişkisi | Hooja; Sharma *Mewar and the Mughal Emperors* |
| Codhpûr (Jodhpur) | aynı | Hooja; Marwar kronikleri neşri |
| Caypûr (Jaipur) | aynı; 18 ↔ 29 Kasım 1727 çelişkisi | Tillotson *Jaipur Nama*; Sarkar *History of Jaipur* |
| Seringapatam | TDV Meysûr yalnız 1799 | Wilks; Kirmani; Hasan *History of Tipu Sultan* |
| Malé | TDV Maldivler 1153 İslâm'ı verir, Malé'yi tarihlemez | Maloney *People of the Maldive Islands*; Bell *Maldive Islands* |
| Kandy | TDV Sri Lanka kuruluş vermiyor | de Silva *History of Sri Lanka*; Hollanda/Portekiz neşirleri |
| Kotte | TDV'de geçmiyor | de Silva; Paranavitana |
| Madurai, Trivandrum, Kolam (Quilon), Pûne, Baroda | hiçbir kaynağa ulaşılamadı; atlas başlangıcı ilk anılıştan çok sonra | Pandya/Çera/Ay tarihli kitabeleri; Pûne: 758 Rashtrakuta bakır levhası; Baroda: Vadapadraka tanığı |

## Atlas düzeltme/çelişki önerileri (KASA'ya iletilecek)
Delhi 736 ↔ TDV 1911 (Delhi madde) ↔ TDV Kalküta 1912 (iki TDV maddesi çelişir) · Agra: TDV Sikender Lûdî 1495, atlas 1504 · Dakka: TDV başkent 1608, Banglapedia 1610 ·
Ahmedâbâd Marata: TDV 1758, atlas 1753-04-01 · Atlas başlangıcı kaynaklı ilk tanıktan ÖNCE ya da aynı gün (`sahip:[]`): Delhi, Lahor, Ecmîr, Kalküta, Bahâvelpûr, Amritsar, Dakka ·
Multan 712→903 ve Agra 1081→1504 `__BOSLUK__` dikiş beyanı · gorev.tsv'deki Haydarâbâd (Sind) eşleşmesi yanlış yerleşimdi (düzeltildi).
