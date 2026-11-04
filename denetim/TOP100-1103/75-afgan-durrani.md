# 75 · Dürrânî İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb (ölçer çıktısı), 4 Kasım 2026 (oturum içi)

## Özet
- Künye: 1 ana (`afgan-durrani`, 1747-10-01 → 1819-01-01; TDV slug `ahmed-sah-durrani` künye değildir) + ardıl `afganistan` (1819-01-01 →). Eksik: Herat Sadozay kolu (1819-1863), Bârekzây Peşâver sardarlığı (1823-1834) için künye/zincir yok.
- Ölçer: 19 yerleşim, kırılma 16, **AÇIK 15** (yalnız otomatik maddeyle kapanan: 0). En geniş yıl 1755 (18 yerleşim). "Harita anahtarı" uyarısı yok.
- En ağır 3 bulgu: (1) **f 1747-10-01 için gün YOK**: TDV ve Cambridge History of India V yalnız 1747 yılı der; kaynaklar Temmuz–Ekim arasında çelişiyor; ayrıca yerleşimler 1747-06-20'de başlıyor → künye f yerleşimlerden 3,5 ay GEÇ (künye aşımı, beyanlı). (2) **Lahor/Multan/Sirhind/Amritsar 1765-04-16 ve 1752-04-01**: HCIP VIII Lahor'un Sihlerce **Şubat 1764**'te, nihai olarak 1767 sonrası alındığını söyler; TDV Afganistan «Lahor elden çıktı (1775)» der — üç kaynak üç tarih, atlas dördüncü. Kuruluş: Lahor'un Dürrânî'ye geçişi 1752-03-05 (teslim) / 1752-04-13 (sözleşme) iken atlas 04-01. (3) **Künye sonrası kalıntılar**: Peşâver `afgan-durrani` 1834-05-06'ya, Herat 1826-01-01'e dek yazılı; künye t=1819. Peşâver 1823'ten Sih haracgüzarı Bârekzây valisinde; Herat 1829-1863 Sadozay (Kâmrân) elinde — künye t'si ile uyuşmuyor.
- Eksik madde önerisi: 17 (c); Değişmez 2 evreninde Dürrânî'ye dair yalnız 4 madde var (Nâdir'in ölümü, Belh 1751, Belh 1826, Timur Şah ölümü).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| afgan-durrani | Dürrânî (Afgan) Devleti | 1747-10-01 | 1819-01-01 | ana künye; `kaynak:"ahmed-sah-durrani"` (TDV slug, URL değil) — `kaynak:` alanına URL/madde adı yazılmalı |
| afganistan | Afganistan (Bârekzâyî Emirliği) | 1819-01-01 | (açık, 1945 ufku) | ardıl; devletler.js:7878 |
| afsar | Afşar (önceki) | — | 1747-06-20 | Kâbil/Gazne/Peşâver yerleşimlerinde öncül (yerlesimler_asya.js:549) |
| sih-imparatorlugu | Sih İmparatorluğu | 1801 → 1849 | — | yerleşim zincirinde 1765'ten başlıyor (yerlesimler_asya.js:431 yorumu: misl konfederasyonu için ayrı kimlik açılmadı) = künye aşımı beyanlı |
| (yok) | Herat Sadozay kolu 1819/1829-1863 | — | — | EKSİK; künye ic_not_t'sinde "BOYALAR (tuz) gerektirir" diye beyanlı |
| (yok) | Peşâver Bârekzây sardarlığı 1823-1834 | — | — | EKSİK; Sih haracgüzarı |

MÜKERRER yok. Not: `harita:"afgan-durrani"` kendi anahtarı; BOYALAR'da (ölçer anahtar uyarısı vermedi).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen satır |
|---|---|---|---|---|---|
| f | 1747-10-01 | TDV «Ahmed Şah Dürrânî» (islamansiklopedisi.org.tr/ahmed-sah-durrani): «1747’de Nâdir Şah’ın öldürülmesinden sonra… Kandehar’da hükümdarlığını ilân etti» — YIL, gün yok, loya jirga anılmıyor | Cambridge History of India V (1929) s.483: «assassinated in 1747 Ahmad Khan … was chosen king … crowned at Kandahar» — YIL | İki akademik kaynak yalnız yılı teyit eder. Gün: arama sonuçlarında (akademik OLMAYAN: Khaisor, Grokipedia, Bharatpedia) «Temmuz 1747'de en geç» ile «Ekim 1747 Loya Jirga (Nash)» çelişir; **1 Ekim hiçbir kaynakta yok**. Kural: gün yoksa YYYY-01-01 / yıl bilinmiyorsa yazılmaz. Ama künye f aynı zamanda yerleşim kırılmasına bağlı | `ic_not_f` zaten "gün yok" der; öneri: `f:"1747-06-20"` (Nâdir'in öldürüldüğü gün, yerleşimler zaten buradan başlıyor) + `ic_not_f`: "Kandehar'da hükümdarlık ilânı 1747 (TDV, CHI V; gün yok, Temmuz–Ekim ihtilaflı)". Dera Gazi Han/Dera İsmail Han `1747-10-01` başlangıçları da 06-20'ye veya `1747-01-01 yıl` beyanına çekilmeli |
| Nâdir'in ölümü (yerleşim başı) | 1747-06-20 | olaylar_ek11.js:211 «20 Haziran 1747», yer Fethâbâd | Arama özeti (akademik değil): «19 Haziran 1747, Fethabad»; Iranica «Nāder Shah» **403 — okunamadı**; HCIP VIII yalnız «assassination» der | Gün 19/20 Haziran belirsiz (geceyarısı); akademik ikinci kaynak okunamadı | `gun:"19-20 Haziran 1747 gecesi (Iranica ile doğrulanacak)"`; t aynı kalabilir |
| Lahor/Multan geçişi | 1752-04-01 | HCIP VIII (Maratha Supremacy, IX Punjab bölümü): «Muin-ul-Mulk … had to surrender to Abdali at Lahore on 5 March, 1752 … confirmed by the emperor on 13 April, 1752» | aynı kitabın başka bölümü: Abdali «third time in December 1751, defeated Mir Mannu, conquered Kashmir» | Atlas 04-01 iki ucun da dışında; **iki ucu ölç**: askerî teslim 5 Mart, hukukî devir 13 Nisan 1752 | `1752-03-05` (de facto) ya da `1752-04-13` (de jure); kendi kuralımız "yer fiilî el değiştirdiği gün" → 1752-03-05; tek kaynak (HCIP VIII) → ikinci kaynak aranacak |
| Keşmir | 1752-01-01 | HCIP VIII: «Abdali then conquered Kashmir» (1752); «Afghan rule lasted for 67 years up to 1819» | CHI V s.? «1819 saw him (Ranjit) master of Kashmir» | Yıl 1752 teyitli, gün yok; 1819-07-05 (Shopian) atlasta: iki kaynak yalnız 1819 yılı, gün 5 Temmuz doğrulanmadı | `1752-01-01` kalsın + `[yalnız yıl teyitli]` |
| Sirhind kaybı | 1764-01-14 | HCIP VIII: Sihler Lahor/Sirhind çevresinde 1764 Şubat'ta «occupied the city in February 1764» | — | Sirhind günü 14 Ocak 1764 doğrulanmadı (Vikipedi bilgisi) | madde gerek (c-9) |
| Lahor nihaî kayıp | 1765-04-16 | HCIP VIII: Sihler Lahor'u **Şubat 1764**'te işgal etti; Abdali Mart 1764 döndü, 1767 son sefer başarısız; «Between 1767 and 1773 the Sikhs extended … to Attock» | TDV «Afganistan»: «Lahor elden çıktı (1775)» | **ÜÇ KAYNAK ÜÇ TARİH** (1764-02 / 1767 sonrası / 1775); TDV'nin 1775'i Timur Şah dönemi Multan/Lahor kayıplarıyla karışık olabilir. Atlas 1765-04-16 hiçbirinde yok | `ic_not` ile çelişki beyanı; öneri: `1764-02-?? ` değil, "1767 sonu" için ikinci akademik okuma (Ganda Singh, *Ahmad Shah Durrani*, 1959 — erişilemedi). Kısa vadede 1765-04-16 KALSIN beyanlı |
| Ahmed Şah'ın ölümü / Timur Şah | 1773-01-01 (künye kronoloji) | TDV: «ö. 1187/1773» | CHI V s.483: «when he died in 1773» | İki kaynak 1773 yılında hemfikir | `1773-01-01` + `[yalnız yıl]` |
| Başkentin Kâbil'e taşınması | 1775-01-01 (künye kronoloji) | TDV «Afganistan»: «Devletin başşehri Kâbil’e taşındı (1775)» | CHI V s.484: Timur «decided to move the seat of government from Kandahar … to Kabul» (yıl yok) | Yıl TDV'de; ikinci kaynak yıl vermiyor | `1775-01-01` [yalnız yıl; TDV tek] |
| t | 1819-01-01 | TDV «Afganistan»: «Kâbil’de hükümdarlığını ilân etti (1819)» | CHI V s.485-488: Fath Han'ın 1818'de kör edilip öldürülmesinden sonra Dost Muhammed Kâbil'i aldı, «Soon all the country was in Barakzai hands»; «He drove his brother … in 1826 … secured Kabul» | **ÇELİŞKİ:** TDV 1819, CHI V 1818-19 (Bârekzây ele geçirişi) ve 1826 (Dost Muhammed'in tek hâkimliği). TDV kapsamda → **TDV esas: 1819**; çelişki iki kaynağıyla `ic_not_t`'ye yazılmalı. Gün yok → 1819-01-01 yıl temsili (kural uyumlu) | `ic_not_t`: "TDV 1819; CHI V 1818-19 ve 1826" |
| Peşâver | afgan-durrani → 1834-05-06 | CHI V s.489: «Peshawar was lost for ever to the Afghan state in 1834»; 1823'te Ranjit Singh Peşâver'i aldı, Yâr Muhammed'i haracgüzar bıraktı (CHI V s.452: «In 1823 again took Peshawar, … left Yar Muhammad Khan to rule in his name») | TDV Afganistan: Sihler Peşâver'i aldı (yıl yok) | Peşâver 1823'ten (Nevşehra/Naushera) Sih haracgüzarı Bârekzây sardarında; 1834-05-06 Sih ilhakı. Künye t=1819 + `afgan-durrani` 1834'e dek = künye aşımı (15 yıl) ve yanlış sahip | `1747-06-20→1818-?? afgan-durrani`, `→1823 afganistan (Bârekzây)`, `1823→1834-05-06 sih-imparatorlugu (haracgüzar beyanı)` ya da tek parça `afganistan`; 2. kaynak gün için gerekli |
| Atak (Attock) | 1747-06-20 → 1813-07-13 | CHI V s.? «Sikhs … secured Attock, defeating the Afghans at Haidaru in 1813» | HCIP VIII «Sikhs extended … to Attock» (1767-1773 misl genişlemesi) | Yıl 1813 CHI V'te; gün 13 Temmuz doğrulanmadı; HCIP VIII Sihler'in 1767-73'te Attock'a ulaştığını söyler (nominal) | `1813-01-01 [yalnız yıl]` ya da gün için ikinci kaynak |
| Multan | → 1818-06-02 | CHI V: «capture of Multan … effected in 1818» | — | Yıl teyitli; 2 Haziran 1818 günü kaynak okunmadı | madde c-14 |
| Herat | → 1826-01-01 | CHI V: Şah Mahmud Herat'ta 1829'a dek yaşadı, ardından Kâmrân; İran hâkimiyeti tanıdı | TDV Afganistan: Herat «Sadozaylar’ın kontrolünde» (1819) | Herat 1826'da el değiştirmez; `1826-01-01` Belh'in Buhara işgali tarihiyle (olaylar_2s_0919.js:301) karışmış görünüyor; Herat'ın 1863'e dek Sadozay/Yâr Muhammed Alikozay zinciri var | künye ek: `herat-sadozay` (BOYALAR tuz) ya da Herat `afgan-durrani` 1819→1863 beyanlı künye aşımı |

## c) Kronoloji
Var olanlar (Değişmez 2 evreni): `data/olaylar_ek11.js:211-216` (Nâdir 1747-06-20, yer Fethâbâd — Kâbil/Gazne/Herat/Atak/Peşâver anılmıyor → ölçer AÇIK); `data/olaylar_2s_0919.js:275-278` (Ahmed Şah Belh'i kattı, 1751-01-01, TDV `belh`); `:301` (Belh 1826 Buhara); `data/olaylar_ek8.js:327` (1793-01-01 Timur Şah/Zaman Şah; **d metni "20 Mayıs 1793" der, t 1793-01-01 — gün/yıl uyumsuzluğu**; kaynak TDV Afganistan yalnız yıl). Evren DIŞI (künye `kronoloji:[]`, devletler.js:7859-7877): 1747-10-01, 1748, 1750, 1756, 1761-01-14, 1763, 1770, 1773, 1775, 1793, 1818, 1819 — ayrıca `data/kronoloji_guney_asya.js:153`.

Kısıt: künye içi 1756 «Lahor Babür'ce geri alınınca Ahmed Şah yeniden girdi» TDV'ye atıf; HCIP VIII bu 4. seferi Kasım 1756 / Delhi 23 Ocak 1757 olarak verir.

Önerilen yeni maddeler (Değişmez 2 evreni):
1. `{ t:"1747-06-20", b:"Nâdir Şah öldürüldü; Ahmed Han'ın Abdâlî birlikleri Kandehar'a çekildi; Kâbil, Gazne, Herat, Atak, Peşâver Afşar'dan Dürrânî'ye geçti", yer_id:"Kâbil", kaynak:"TDV Ahmed Şah Dürrânî, CHI V s.483; gün olaylar_ek11.js:211 [Iranica ile doğrulanacak]" }` — mevcut maddenin `d` metnine Kâbil/Gazne/Herat/Atak/Peşâver adlarını ekleyin (ölçer yer adı arıyor).
2. `{ t:"1747-01-01", b:"Ahmed Şah Kandehar'da hükümdar ilân edildi", yer_id:"Eski Kandehar (Şehr-i Köhne)", kaynak:"TDV Ahmed Şah Dürrânî (1747); CHI V s.483 «crowned at Kandahar»", ic_not:"[yalnız yıl teyitli; gün teyitsiz; Temmuz–Ekim ihtilaflı]" }`.
3. `{ t:"1748-01-11", b:"Abdali Lahor'u ilk kez aldı; 11 Mart 1748'de Sirhind'de bozguna uğradı, geri çekildi", yer_id:"Lahor", kaynak:"HCIP VIII (IX. Punjab Politics): «11 January, 1748 … Lahore was captured … defeated by the imperialists on 11 March, 1748»" }` — kalıcı sahiplik değişmez, ama atlas Lahor'u 1752'ye dek Bâbürlü gösteriyor: uyumlu; bilgi maddesi.
4. `{ t:"1752-03-05", b:"Lahor valisi Muînülmülk Abdali'ye teslim oldu; Lahor ve Multan subeleri Dürrânî'ye geçti (13 Nisan 1752'de Bâbürlü hükümdar tasdik etti)", yer_id:"Lahor", kaynak:"HCIP VIII: «surrender to Abdali at Lahore on 5 March, 1752 … confirmed by the emperor on 13 April, 1752»" }` — d'ye Multan, Amritsar, Jalandhar, Ludhiana, Sirhind, Siyalkot adları.
5. `{ t:"1752-01-01", b:"Abdali Keşmir'i fethetti", yer_id:"Srinagar (Keşmir)", kaynak:"HCIP VIII «Ahmad Shah Abdali conquered Kashmir in 1752» [yalnız yıl]" }`.
6. `{ t:"1757-01-23", b:"Abdali Delhi'yi aldı; Bâbürlü hükümdar Pencap, Keşmir, Thatta ve Sirhind'i resmen devretti", yer_id:"Sirhind", kaynak:"HCIP VIII: «Ahmad Shah reached Delhi on 23 January, 1757 … forced the Mughul emperor to formally cede to him the Punjab, Kashmir and Thatta as also the Sirhind district»" }` — Sirhind'in Dürrânî'ye geçişi atlasta 1752-04-01; HCIP VIII Sirhind'i 1757'de devredilmiş sayar (CHI/başka kaynaklarda 1752 «up to Sirhind»): **çelişki**, iki ucu ölç.
7. `{ t:"1761-01-14", b:"Üçüncü Pânîpat: Ahmed Şah Dürrânî Maratha ordusunu yendi", yer_id:"Pânipat", kaynak:"HCIP VIII «The Battle of Pānipat (14 January, 1761)»" }` — künye içinde var, olaylara taşı; TDV Ahmed Şah maddesi Panipat'ı anmaz.
8. `{ t:"1773-01-01", b:"Ahmed Şah öldü; Timur Şah tahta çıktı", yer_id:"Kandehar", kaynak:"TDV Ahmed Şah Dürrânî ö. 1187/1773; CHI V s.483 «died in 1773»" }` + Kandehar yer kuruluşu belirsizliği (Ahmedşâhî 1747-73, yıl bulunamadı — TDV kandehar).
9. `{ t:"1764-01-14", b:"Sihler Sirhind'i aldı; Dürrânî Pencap'ın doğu ucunu yitirdi", yer_id:"Sirhind", kaynak:"HCIP VIII Sihler Şubat 1764'te Lahor'u da işgal etti [gün 14 Ocak doğrulanmadı]" }`.
10. `{ t:"1775-01-01", b:"Dürrânî başkenti Kandehar'dan Kâbil'e taşındı", yer_id:"Kâbil", kaynak:"TDV Afganistan «(1775)»; CHI V s.484 yılsız" }`.
11. `{ t:"1799-01-01", b:"Zaman Şah Lahor'u Ranjit Singh'e verdi", yer_id:"Lahor", kaynak:"CHI V s.485 «placed Lahore under Ranjit Singh, formally, in 1799»" }` — atlas Lahor'u 1765'te Sihlere veriyor; çelişkiyi ortaya çıkarır.
12. `{ t:"1813-01-01", b:"Sihler Haydru'da Afganları yenip Atak'ı aldı", yer_id:"Attock", kaynak:"CHI V s.? «defeating the Afghans at Haidaru in 1813» [yalnız yıl teyitli; atlas 13 Temmuz doğrulanmadı]" }`.
13. `{ t:"1818-01-01", b:"Vezir Fetih Han Kâmrân ve Mahmud Şah tarafından kör edilip öldürüldü; Bârekzây ayaklanması başladı", yer_id:"Kâbil", kaynak:"TDV Afganistan (1818); CHI V s.488 «This was in 1818»" }` — künyede var.
14. `{ t:"1818-01-01", b:"Ranjit Singh Multan'ı aldı", yer_id:"Multan", kaynak:"CHI V «effected in 1818» [atlas 2 Haziran doğrulanmadı]" }`.
15. `{ t:"1819-01-01", b:"Ranjit Singh Keşmir'i aldı; 67 yıllık Afgan idaresi bitti", yer_id:"Cammû (Jammu)", kaynak:"HCIP VIII «Afghan rule lasted for 67 years up to 1819»; CHI V «1819 saw him master of Kashmir»" }` (atlas 1808-01-01 Câmmu kaybı: kaynak yok; 1819-07-05 Srinagar).
16. `{ t:"1819-01-01", b:"Dost Muhammed Kâbil'de hükümdarlığını ilân etti; Mahmud Şah Herat'a sürüldü; Sadozay Dürrânîler sona erdi", yer_id:"Kâbil", kaynak:"TDV Afganistan (1819); CHI V s.488 (1818-19) ve 1826" }`.
17. `{ t:"1834-05-06", b:"Sihler Peşâver'i ilhak etti", yer_id:"Peşâver", kaynak:"CHI V s.489 «lost for ever to the Afghan state in 1834» [gün 6 Mayıs doğrulanmadı]" }`.

## d) Harita uyumu
Açık: 15 (otomatik maddeyle kapanan 0). En geniş yıl 1755: 18 yerleşim (Attock, Gazne, Herat, Kâbil, Peşâver, Râvalpindi, Dera Gazi Han, Dera İsmail Han, Amritsar, Jalandhar, Lahor, Ludhiana, Multan, Sirhind, Siyalkot, Jammu, Srinagar, + Kandehar yok). Kaynakla uyum: HCIP VIII/CHI V'e göre 1755'te Dürrânî: Pencap-Keşmir-Sindh-Horasan (Herat, Meşhed, Nişabur 1750-51), Belh 1751, Kâbil, Gazne, Kandehar (burada nokta yok), Peşâver, Atak. Atlas Meşhed/Nişabur/Belh'i kısmen taşıyor (Belh 1751-1826 ayrı yerleşim). Kandehar noktası YOK 1738-1773: Eski Kandehar `bit:1738-03-24` (Nâdir yıktı), bugünkü Kandehar `kur:1773-01-01` (ilk yazılı tanık; Ahmedşâhî 1747-73 yıl bulunamadı, beyanlı) — Dürrânî'nin başkenti 1747-1775 haritada çıplak petek (komşu emilimi); beyanı var, ödenmedi.

| gün | yerleşimler | öneri |
|---|---|---|
| 1747-06-20 | Attock, Gazne, Herat, Kâbil | c-1 (Nâdir maddesinin d'sine yer adları) |
| 1747-10-01 | Dera Gazi Han, Dera İsmail Han | künye f ile birlikte 1747-06-20'ye çek (b) |
| 1752-01-01 | Cammû, Srinagar | c-5 (`1752-01-01` yıl) |
| 1752-04-01 | Amritsar, Jalandhar, Lahor, Ludhiana (+ Multan, Sirhind, Siyalkot) | c-4: 1752-03-05 veya 04-13 |
| 1764-01-14 / 1765-04-16 | Sirhind / Amritsar, Jalandhar, Lahor, Ludhiana | c-9; Lahor için çelişki beyanı (1764-02 / 1767 / 1775) |
| 1773-01-01 | Kandehar (kur) | c-8; kuruluş yılı bulunamadı beyanı |
| 1808-01-01 | Cammû kayıp | kaynak okunmadı: 1808'de Cammû'nun Dürrânî'den çıkışı HCIP/CHI'da yok; Jammu 1819-1820'ye kadar Dürrânî sonrası Sih/Dogra; **yıl temsili şüpheli** |
| 1813-07-13 | Attock kayıp | c-12 |
| 1818-06-02 | Multan kayıp | c-14 |
| 1819-01-01 | Dera Gazi Han, Gazne, Kandehar, Kâbil kayıp | c-16 |
| 1819-07-05 | Srinagar kayıp | c-15 (HCIP VIII 1819 yılı; Shopian 5 Temmuz doğrulanmadı) |
| 1821-01-01 | Dera İsmail Han kayıp | Sih'e geçiş 1821 (Ranjit Singh Dera İsmail Han'ı 1821'de ilhak etti — doğrulanmadı; künye t 1819 ile 2 yıl aşım) |
| 1826-01-01 | Herat kayıp | Herat 1826'da el değiştirmez (CHI V: Mahmud 1829'a dek); satır Belh'in Buhara işgalinden kopya olabilir — düzeltilmeli |
| 1834-05-06 | Peşâver kayıp | c-17 + 1823 evre |

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:7859-7863` `afgan-durrani`: `f:"1747-06-20"`, `ic_not_f` güncelle (Kandehar ilânı 1747, gün yok, Temmuz–Ekim ihtilaflı; TDV + CHI V s.483); `kaynak:` alanına TDV madde adı ve URL yazılsın ("ahmed-sah-durrani" tek başına kaynak değildir).
2. `ic_not_t`: "TDV 1819; CHI V 1818-19 / 1826; Herat Sadozay 1829-1863; Peşâver 1823'ten Sih haracgüzarı".
3. `data/yerlesimler_asya.js` Peşâver (satır 530): `afgan-durrani 1747-06-20→1834-05-06` → `→1823-?? ` Bârekzây/`afganistan` (künye f 1819 öncesi Dürrânî), `1823→1834-05-06 sih-imparatorlugu` (haracgüzar beyanı).
4. `yerlesimler_ek16.js` Herat (satır 79 son `d:"afganistan" f 1826-01-01`): 1826 kaynaksız; Herat `afgan-durrani` 1819'a dek, 1819-1863 `herat-sadozay` (künye) ya da beyanlı `afgan-durrani` aşımı.
5. Lahor (satır 440-446 grubu): 1752-04-01 → 1752-03-05; 1765-04-16 için çelişki (1764-02, 1767+, 1775 TDV) `ic_not`'a.
6. `olaylar_ek8.js:327` Timur Şah/Zaman Şah: t `1793-05-20` mi `1793-01-01` mi — d metni ile t uyuşmuyor; TDV yalnız yıl veriyor → d'deki "20 Mayıs 1793" kaynaksız ise silin.
7. c) listesindeki 17 madde; öncelik 1, 4, 7, 9, 14, 16, 17.
8. Künye aşımı borcu: Dera Gazi Han ve Dera İsmail Han `1747-10-01` kökenli; Kâbil 1819, Dera İsmail Han 1821, Herat 1826, Peşâver 1834 künye t'yi aşar (ic_not_t beyanı var, kaynak alanı genişletilmeli).

## Erişilemeyen kaynaklar
- Encyclopaedia Iranica «NĀDER SHAH» (https://www.iranicaonline.org/articles/nader-shah/) ve «AHMAD SHAH DURRĀNI» (/articles/ahmad-shah-doorrani) — HTTP 403. Soru: Nâdir Şah'ın öldürülme günü (19 mı 20 Haziran 1747) ve Ahmed Han'ın Kandehar'da şah seçildiği ay/gün.
- Ganda Singh, *Ahmad Shah Durrani: Father of Modern Afghanistan* (Asia Publishing House, 1959): Lahor'un 1764-65-67 el değişimi ve Kandehar'da seçim tarihi.
- Cambridge History of Iran, vol. 7 (1991), «The Afsharid dynasty» ve «The Durrani»: Nâdir'in ölümü ve Dürrânî doğuşu günü.
- Louis Dupree, *Afghanistan* (Princeton 1973) ve Jonathan Lee, *Afghanistan: A History* (Reaktion 2018): Herat Sadozay kolu 1819-1863 ve Dost Muhammed'in 1826 evresi.
- Cunningham, *History of the Sikhs* (1849/1918): Atak 1813, Multan 1818 günleri, Peşâver 1823/1834 günleri.
- HCIP VIII'in ikinci baskısı (aynı kitap, ikinci kaynak değil): Sirhind/Lahor 1752-1757 ayrımı için H. R. Gupta'nın bölümünde (s.123 «Invasions of Ahmad Shah Abdali») dipnot 33-36 okunmalı (bu oturumda yalnız ana metin okundu).
