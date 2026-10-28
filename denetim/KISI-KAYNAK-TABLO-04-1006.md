# KISI-KAYNAK-TABLO-04-1006 — kaynaksız kişi kayıtları, dosya sırasında 122–158. (UMIT-W21)

Ağaç: `C:\atlas-w21` · `origin/main` `7bb6b62c` · 5 Ekim 2026 · YALNIZ ARAŞTIRMA, veri yazılmadı.
Evren: `data/kisiler.js` → 288 kayıt, `kaynak` yok/boş **266**, dosya sırası (tohum yok).
**Dilim: 122. `victoria` … 158. `menelik2`** (37 kayıt).

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi
Dilim 36 `yabanci-hukumdar` + 1 `alim`; örneklem dışı 34 kayıt aranacak.
- İslâm dünyası hükümdarları (İran, Arabistan, Kuzey/Doğu Afrika — 19 kayıt): ① ≈ %75.
- Balkan/Avrupa hükümdarları (15 kayıt): ① ≈ %20, kalanı ② (devlet/yer maddesi).
- 34 kayıtta beklenen: **① %50 ± 15 (12–22) · ② %45 ± 15 · ③ 0–3.**
- ⚠️ Mühürden sonra düzeltme (ölçümü etkilemez): grup sayıları 19/15 yazılmıştı. Doğrusu, örneklem dışı 34'ün
  **20'si İslâm dünyası, 14'ü Balkan/Avrupa**. Öngörülen oranlar değiştirilmedi.

Örneklemler: dilimdeki 3 kayıt **tohum 1006** örnekleminde ölçülmüştü (`nasiruddin-sah`, `muhammed-ahmed`,
`menelik2`). Bunların satırları UMIT-W16-KISI-ORNEKLEM-1006 §4'ten aynen §B'ye alındı. **Tohum 1007**
(UMIT-W16-ORNEKLEM2-1006) yalnız 5 türden çekiliyor (yabanci-komutan/denizci/mimar/edebiyatci/hanedan);
dilimin hiçbir kaydı o türlerden değil, çakışma **0**.
⚠️ Ham `random.Random(1007).sample(kaynaksız, 20)` dilimde 5 kayıt "örneklemde" gösteriyordu, ama o
çekiliş hiç yapılmadı. Doğru evren rapordan okunup düzeltildi.
Sınıf ve f/t tanımları TABLO-01 ile aynı. Her slug HTTP 200 ile açıldı ve gövdesi okundu. `bk.` gönderme
sayfaları kendi maddesi sayılmadı, hedef maddeye gidildi. Rakamı taşıyan cümlenin neyi tarihlediğine
bakıldı. **Saltanat parantezi `(1386-1418)` ölüm yılı sayılmadı.**

## A. Tablo — 34 kayıt (örneklem dışı)
| id | ad | tür | sınıf | slug | kapsayıcı slug | alıntı cümlesi | f desteği | t desteği | not |
|---|---|---|---|---|---|---|---|---|---|
| victoria | Kraliçe Victoria | yabanci-hukumdar | ② | — | `ingiltere` | "Kraliçe Victoria dönemi olarak adlandırılan bu dönemde (1837-1901)"; "1901'de Kraliçe Victoria'nın ölümüyle kapanan bu dönem" | yok | var | saltanat ✓. Kayıttaki 1878 Kıbrıs/1877 unvan kaynakta okunmadı. `abdulaziz` 1867 daveti anar |
| george5 | V. George | yabanci-hukumdar | ② | — | `cihan-begum` (+`cinnah-muhammed-ali`, `yusuf-izzeddin-efendi`) | "İngiltere Kralı V. George'un taç giyme törenine katılmak için Londra'ya giden Cihan Begüm" (1911) | yok | yok | `ingiltere` maddesi V. George'u anmıyor. `kibrisli-kamil-pasa` "V. Georges" yazar |
| pius5 | Papa V. Pius | yabanci-hukumdar | ② | — | `nigbolu` (+`tesbih--tespih`) | "Papa V. Pius'nun 1569'daki emri üzerine İtalya'dan sürgün edilenler" | yok | yok | `inebahti-deniz-savasi` yalnız "papalık" der, Pius adı geçmez. Kayıttaki "Kutsal İttifak'ı kuran" kaynakta kişiye bağlanmadı |
| stefan-lazarevic | Stefan Lazarević | yabanci-hukumdar | ② | — | `semendire` (+`sirbistan`, `bayezid-i`) | "Temmuz 1427'de Sırp Despotu ve Osmanlı Vasalı Stefan Lazareviç başşehir Belgrad'da öldü" | — | var | TDV yazımı *Lazareviç*. Ankara/Bayezid bağı `sirbistan`da ✓ |
| djuradj-brankovic | Đurađ Branković | yabanci-hukumdar | ② | — | `semendire` (+`sirbistan`) | "Aralık 1456'da Đurađ'ın … ölümü üzerine"; `sirbistan`: "Curac Brankoviç'in (1427-1456) idaresi" | — | var | TDV yazımı *Curac Brankoviç / Vılkoğlu* |
| kara-yorgi | Kara Yorgi | yabanci-hukumdar | ② | — | `sirbistan` (+`hursid-ahmed-pasa`) | "1804'te Karadjordje (Djordje Petkovic, Karacorce / Kara Yorgi) liderliğinde Sırp isyanı patlak verdi" | yok | yok | `not` 1804 ✓. 1813'te Avusturya'ya kaçış var, 1817 ölüm yok |
| ivan-sisman | İvan Şişman | yabanci-hukumdar | ② | — | `bayezid-i` (+`nigbolu`, `bulgaristan`) | "Niğbolu'ya ulaştı ve Kral Şişman'ı yakalatıp öldürttü (3 Haziran 1395)" | — | var | `nigbolu`: "İvan Şişman (1371-1395)" |
| tvrtko1 | Tvrtko I | yabanci-hukumdar | ② | — | `bosna-hersek` (+`kosova-savaslari`) | "Bosna tahtında Kral I. Tvrtko bulunuyordu (1353-1391)" | — | yok (yalnız saltanat ucu) | TDV hükümdarlığı 1353'ten başlatır, kayıt "krallık 1377" der. Bu bir ban/kral farkıdır, çelişki sayılmadı |
| basarab1 | Basarab I | yabanci-hukumdar | ② | — | `eflak` | "Ülkesini Prut nehrinin ötesine kadar genişletip … (Besarabya) verdikten sonra 1352'de öldü" | — | var | TDV 1330 Posada zaferini anar. Kayıt `donem` "yak." diyor, TDV kesin yıl veriyor |
| mircea | Mircea (cel Bătrân) | yabanci-hukumdar | ② | — | `eflak` (+`bayezid-i`) | "Eflak'ın başına Mircea (1386-1418) geçti"; "Rovine'deki çetin savaşta (1394)" | — | yok (yalnız saltanat ucu) | ⚠️ Rovine yılı TDV'de kendiyle çelişiyor: `eflak` 1394 der, `bayezid-i` "Argeş … 17 Mayıs 1395" der. Kayıt 1395 diyor |
| vlad3 | III. Vlad (Kazıklı Voyvoda) | yabanci-hukumdar | ② | — | `eflak` | "Kazıklı Voyvoda veya Drakul olarak bilinen Voyvoda Vlad Tepeş (1456-1462)"; "1462'de Fâtih … harekât üzerine Transilvanya'ya çekildi" | — | — | `not` 1462 ✓. `donem` "1431–1476/77" okunmadı. Tahmin slug'ları `kazikli-voyvoda`/`vlad-tepes`/`drakula` 302 |
| bogdan1 | Bogdan I | yabanci-hukumdar | ② | — | `moldova` (§2 Tarih) | "Bu ad devlete bağımsızlığını kazandıran I. Boğdan'a (1359-yaklaşık 1365) dayanır" | — | yok | ⚠️ Kayıt `t:1367` diyor. TDV yalnız saltanatı verir, ucu "yaklaşık 1365". Ölüm 1367 TDV'de yok. Adla aramada `I. Bogdan` bir Romen tarihçisine çıkıyor, yakalayan yazım *Boğdan* (ğ) |
| stefan-cel-mare | Ştefan cel Mare | yabanci-hukumdar | ② | — | `bogdan` (+`eflak`) | "Boğdan voyvodalarının en büyüğü olan Stefan cel Mare … 1475'te … Hadım Süleyman Paşa kumandasındaki Osmanlı kuvvetlerini yendi" | yok | yok | `not` 1475 Vaslui + Akdere (Valea Albă) ✓ |
| othon1 | I. Othon (Otto) | yabanci-hukumdar | ② | — | `yunanistan` | "1832'de … Bavyera kralının henüz reşid olmayan oğlu Otto'yu 'Helenler'in kralı' sıfatıyla … davet etti"; "Kral Otto, 1862'de bir isyanla tahttan indirildi" | yok | yok | saltanat 1832–1862 ✓ |
| nadir-sah | Nadir Şah | yabanci-hukumdar | ① | `nadir-sah--iran` | — | "Muharrem 1100'de (Kasım 1688) Horasan'ın Destgird köyünde doğdu"; "Fethâbâd'da çadırında öldürüldü (11 Cemâziyelâhir 1160 / 20 Haziran 1747)" | var | var | ⚠️ Adaş: `nadir-sah--afgan` (1929-1933) başka kişi |
| aga-muhammed-han-kacar | Ağa Muhammed Han Kaçar | yabanci-hukumdar | ① | `aga-muhammed-sah` | — | "15 Şâban 1154 (26 Ekim 1741) tarihinde doğdu"; "şahsî hizmetindeki üç kişi tarafından öldürüldü (21 Zilhicce 1211 / 17 Haziran 1797)" | — (TDV verir: 1741) | var | TDV başlığı *Ağa Muhammed Şah*, "Kaçar Devleti'nin kurucusu (1786-1797)". Kayıt "saltanat 1789" der |
| feth-ali-sah | Feth Ali Şah | yabanci-hukumdar | ① | `feth-ali-sah` | — | "1771'de doğdu"; künye "(ö. 1250/1834)"; "Ekim 1834'te ölen … Feth Ali Şah" | **çelişki** (kayıt 1772, TDV 1771) | var | |
| muhammed-sah-kacar | Muhammed Şah Kaçar | yabanci-hukumdar | ① | `muhammed-sah` | — | "7 Zilkade 1222'de (6 Ocak 1808) doğdu"; "6 Şevval 1264'te (5 Eylül 1848) … vefat etti" | var | var | `muhammed-ali-sah` başka kişi |
| muhammed-bin-suud | Muhammed bin Suûd | yabanci-hukumdar | ① | `muhammed-b-suud` | — | "Muhtemelen 1100'de (1689) Dir'iye'de doğdu"; "30 Rebîülevvel 1179'da (16 Eylül 1765) Dir'iye'de öldü" | — (TDV: "muhtemelen" 1689, kesin değil) | var | TDV başlığı "(1745-1765)", kayıt `not` 1744 ittifakı der. Ayrıca okunmadı |
| muhammed-bin-abdulvehhab | Muhammed bin Abdülvehhâb | alim | ① | `muhammed-b-abdulvehhab` | — | "1115'te (1703) … Uyeyne'de doğdu"; "Abdülvehhâb'ın 1792'de ölümünün ardından" | var | var | Hicrî 1115 için iki miladi aday 1703/1704. TDV 1703 yazar |
| suud-bin-abdulaziz | Suûd bin Abdülazîz | yabanci-hukumdar | ① | `suud-b-abdulaziz` | — | "1163 (1750) yılında doğdu"; "11 Cemâziyelevvel 1229'da (1 Mayıs 1814) Suûd b. Abdülazîz öldü" | — (TDV verir: 1750) | var | emirlik 1803 ✓ ("1218/1803 liderliği eline alan") |
| turki-bin-abdullah | Türkî bin Abdullah | yabanci-hukumdar | ② | — (`turki-b-abdullah` yalnız `bk. SUÛDÎLER`) | `suudiler` | "1824'te Türkî b. Abdullah … Suûd Emirliği'ni yeniden tesis etti … 1834 yılına kadar … aynı yıl öldürüldü" | — | var | |
| abdulaziz-bin-suud | Abdülazîz bin Suûd (İbn Suûd) | yabanci-hukumdar | ① | `abdulaziz-b-suud` | — | "2 Aralık 1880'de … Riyad'da doğdu"; "9 Kasım 1953'te ölümünden sonra" | **çelişki** (kayıt 1876, TDV 1880) | var | ⚠️ Adaş: `abdulaziz-b-muhammed-b-suud` başka kişi |
| muhammed-bin-resid | Muhammed bin Reşid | yabanci-hukumdar | ② | — | `suudiler` (+`residiler`) | "İbnü'r-Reşîd ailesinden Muhammed b. Reşîd ile çekişmelere başladı"; "Suûd emîrleri Muhammed b. Reşîd'in idare merkezi Hâil'e … iltica ettiler" | — | yok | `residiler` "1891'de … Riyad'ı ele geçirerek" der, kişi adını vermez. Müleyde kaynakta okunmadı. `ibnur-resid` kurucu Abdullah'tır, bu kişi değil |
| yahya-hamiduddin | İmam Yahyâ Hamîdüddin | yabanci-hukumdar | ① | `mutevekkil-alellah-yahya-hamiduddin` | — | "Muhtemelen 1286 (1869) yılında San'a'da doğdu"; "suikastla öldürülmesine yol açtı (17 Şubat 1948)" | **tartışmalı** (TDV "muhtemelen") | var | Hicrî 1286 için iki aday 1869/1870 |
| ahmed-bin-said | Ahmed bin Said (Âl Bû Saîd) | yabanci-hukumdar | ② | — | `bu-said-hanedani` (+`maskat`) | "Ahmed b. Saîd'in ölüm tarihi kesin olarak bilinmemekte, ancak bazı araştırmalar bu tarihi 1783 olarak göstermektedir" | — | **tartışmalı** | ⚠️ Kayıt `not`u "Portekizlileri Maskat'tan kesin olarak atan" diyor. TDV: "Maskat'ı İranlılar'ın işgalinden kurtardı" (`maskat`), Nâdir Şah kumandanına karşı (`bu-said-hanedani`) |
| said-bin-sultan | Said bin Sultan | yabanci-hukumdar | ① | `said-b-sultan` | — | "1791'de Maskat'ta doğdu"; "1856 yılında Maskat'tan Zengibar'a gitmek için çıktığı deniz yolculuğu sırasında vefat etti" | var | var | |
| huseyin-bin-ali | Hüseyin bin Ali | yabanci-hukumdar | ① | `huseyin-pasa-tunus-beyi` | — | "Tunus'un idaresini tek başına ele geçirdi (1117/1705)"; "16 Safer 1152'de (25 Mayıs 1739) … Yûnus tarafından öldürüldü" | — | **çelişki** (kayıt 1740, TDV 1739) | TDV başlığı *Hüseyin Paşa, Tunus Beyi*, "babası … Ali et-Türkî". Adla aramada 0 isabet, `huseyniler` ilişkili maddeler listesinden bulundu |
| ahmed-karamanli | Ahmed Karamanlı | yabanci-hukumdar | ② | — | `karamanli` | "Trablusgarp eyaletinin idaresini ele geçirdi (29 Temmuz 1711)"; "Ahmed Paşa altmış yaşlarında iken 6 Şevval 1158'de (1 Kasım 1745) öldü" | — | var | beylik 1711 ✓ |
| ahmed-el-mansur | Ahmed el-Mansûr | yabanci-hukumdar | ① | `ahmed-el-mansur` | — | "956 (1549) yılında Fas'ta doğdu"; "orada öldü (11 Rebîülevvel 1012 / 19 Ağustos 1603)" | var | var | Hicrî 956 için iki aday 1549/1550 |
| abdullah-et-teayisi | Halife Abdullah et-Teâyişî | yabanci-hukumdar | ① | `abdullah-b-muhammed-et-teayisi` | — | "22 Kasım 1899'da bir çarpışma sırasında orada öldürüldü" | — | var | |
| amara-dunkas | Amara Dunkas | yabanci-hukumdar | ② | — | `func` | "Funclar'ın reisi olan Amâre (Dûnkas) b. Adlân 1504 yılında … bağımsızlığını ilân edip" | — | — | `donem` "16. yy başı" ✓. TDV yazımı *Amâre Dûnkas* |
| ahmed-gran | Ahmed Gran (Ahmed b. İbrâhim el-Gâzî) | yabanci-hukumdar | ① | `ahmed-el-mucahid` | — | "1506'da doğduğu rivayet edilmektedir"; "21 Şubat 1543'te yaptığı ikinci savaşta yenildi ve öldürüldü" | — (TDV: 1506 "rivayet") | var | `ahmed-gran` yalnız `bk. AHMED el-MÜCÂHİD` göndermesi |
| gelawdewos | Gelawdewos | yabanci-hukumdar | ② | — (`habesistan` yalnız `bk. ETİYOPYA`) | `etiyopya` | "Negus Claude da (Galâwdewos) 1559 yılında Nûr b. Mücâhid'e karşı savaşırken öldürülmüştü"; "yerine oğlu Galawdeos (Claudius) geçmişti" | — | var | TDV iki yazım kullanır: *Galawdeos* / *Galâwdewos*. Ahmed Gran'ın yenilgisi `etiyopya`da ✓ |

## B. Örneklemden alınan 3 kayıt (UMIT-W16-KISI-ORNEKLEM-1006 §4, tohum 1006). Satırlar aynen, sütunlar TABLO-01 biçiminde
| id | ad | tür | sınıf | slug | kapsayıcı slug | alıntı cümlesi | f desteği | t desteği | not |
|---|---|---|---|---|---|---|---|---|---|
| nasiruddin-sah | Nâsırüddin Şah | yabanci-hukumdar | ① | `nasiruddin-sah` | — | "17 Temmuz 1831'de … doğdu"; "1 Mayıs 1896 … suikast" | var | var | örneklemden (#18) |
| muhammed-ahmed | Muhammed Ahmed (Mehdî) | yabanci-hukumdar | ① | `muhammed-ahmed-el-mehdi` | — | "1258 (1842) veya 1260 yılında … doğdu"; "22 Haziran 1885 … öldü" | **tartışmalı** (1844 = TDV'nin iki seçeneğinden 1260) | var | örneklemden (#20) |
| menelik2 | II. Menelik | yabanci-hukumdar | ② | — | `etiyopya` | "Menelik de … 2 Mayıs 1889'da … Wichale (Uccialli) Antlaşması" | yok | yok | örneklemden (#16): saltanat başı 1889 ✓ · f 1844 / t 1913 ✗ |

## C. Sayım
| | A (34) | A+B (37 = dilimin tamamı) | öngörü (A) | tuttu mu |
|---|---|---|---|---|
| ① kendi maddesi | **14** (%41) | **16** (%43) | %50 ± 15 (12–22) | ✓ |
| ② kapsayıcı maddede | **20** (%59) | **21** (%57) | %45 ± 15 | ✓ (üst sınırda) |
| ③ bulunamadı | **0** | **0** | 0–3 | ✓ |

Gruba göre ①: İslâm dünyası **14/20 = %70** (öngörü %75 ✓). Balkan/Avrupa **0/14 = %0** (öngörü
%20 ✗, düşük çıktı). Balkan ve Avrupa hükümdarlarının hiçbirinin müstakil maddesi yok, hepsi devlet, şehir
ya da padişah maddesinde geçiyor.

f/t desteği (A, 34 kayıt). Yalnız kayıtta DOLU alanlar sayıldı:
| | f (dolu 14) | t (dolu 32) |
|---|---|---|
| var | 5 | 21 |
| tartışmalı | 1 (yahya-hamiduddin) | 1 (ahmed-bin-said) |
| çelişki | **2** (feth-ali-sah 1772→1771 · abdulaziz-bin-suud 1876→1880) | **1** (huseyin-bin-ali 1740→1739) |
| yok | 6 (victoria, george5, pius5, kara-yorgi, stefan-cel-mare, othon1) | 9 (george5, pius5, kara-yorgi, tvrtko1, mircea, bogdan1, stefan-cel-mare, othon1, muhammed-bin-resid) |

**Boş alanı TDV dolduruyor (zenginleştirme):** f → aga-muhammed-han-kacar 1741 (kesin) · suud-bin-abdulaziz
1750 (kesin) · muhammed-bin-suud 1689 ("muhtemelen", kesin yazılamaz) · ahmed-gran 1506 ("rivayet", kesin
yazılamaz).

## D. Yan bulgular
1. **Çelişen tarihler:** `abdulaziz-bin-suud` f 1876 → TDV 2 Aralık 1880 · `feth-ali-sah` f 1772 → TDV 1771 ·
   `huseyin-bin-ali` t 1740 → TDV 25 Mayıs 1739.
2. **Yanlış `not`:** `ahmed-bin-said` "Portekizlileri Maskat'tan kesin olarak atan" diyor. TDV'ye göre Maskat'ı
   İran işgalinden kurtaran odur. Ayrıca `t:1783` TDV'de yalnız "bazı araştırmalar"a dayanıyor.
3. **Desteksiz `t`:** `bogdan1` 1367. TDV yalnız saltanatı verir: 1359 – "yaklaşık 1365".
4. **Sahte kesinlik riski:** `yahya-hamiduddin` f 1869 (TDV "muhtemelen").
5. **TDV kendi içinde çelişiyor (§4 tuzak ⑥):** Rovine Savaşı `eflak` maddesinde "Rovine'deki çetin savaşta (1394)" diye geçiyor, `bayezid-i` ise aynı savaşı
   "Argeş nehri civarında 17 Mayıs 1395'te" diye veriyor. Kayıttaki 1395 bu ikincisiyle uyuşuyor.
6. **`bk.` gönderme slug'ları:** `turki-b-abdullah`→`suudiler` · `ahmed-gran`→`ahmed-el-mucahid` ·
   `habesistan`→`etiyopya` · `umman`→`uman`.
7. **Adaş slug'lar:** `nadir-sah--afgan` (≠ Nâdir Şah) · `muhammed-ali-sah` (≠ Muhammed Şah Kaçar) ·
   `abdulaziz-b-muhammed-b-suud` (≠ İbn Suûd) · `ibnur-resid` (kurucu Abdullah ≠ Muhammed b. Reşîd) ·
   `huseyin-b-ali-sahibufah` (≠ Tunus beyi) · `eliade-mircea` (≠ voyvoda).
8. **Ad varyantı tuzakları:** *Boğdan* (ğ ile tutuyor, `I. Bogdan` aranınca bir Romen tarihçisi çıkıyor) ·
   *Lazareviç* · *Curac Brankoviç / Vılkoğlu* · *Karacorce / Karadjordje* · *Otto* · *Amâre Dûnkas* ·
   *Galawdeos / Galâwdewos* · *Hüseyin Paşa, Tunus Beyi*.
9. **Tırnaklı içerik araması güvenilmez:** `"Kraliçe Victoria"` 0 sonuç döndü, oysa `ingiltere` gövdesinde iki
   kez geçiyor. Aramada "0" sonucu "yok" demek değildir.
10. **Ölü (302) tahmin slug'ları:** hiçbiri "yok" sayılmadı. `kazikli-voyvoda`, `vlad-tepes`, `drakula`, `mircea`,
    `basarab`, `tvrtko`, `stefan-cel-mare`, `kara-yorgi`, `karacorce`, `othon`, `oton`, `ahmed-b-said`,
    `bu-said`, `huseyin-b-ali--tunus`, `adal`.

Vikipedi kullanılmadı. Boilerplate/000 vakası yok. Kullanılan araçlar scratchpad'deydi; repoya alet yazılmadı.
