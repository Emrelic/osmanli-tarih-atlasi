# KRONO-ORNEKLEM-2-1004 — 2. tur, TABAKALI (ek* × öteki)

Oturum: KRONO-DOGRULUK-ORNEKLEM-1004 · 4 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
1. tur: [`KRONO-ORNEKLEM-1004.md`](KRONO-ORNEKLEM-1004.md) (ek* 5/14 · öteki 0/11).
**Veriye yazılmadı, düzeltme yapılmadı.**

## 0. Seçim — ÖLÇÜMDEN ÖNCE DONDURULDU

- Evren: `data/olaylar*.js` 1761 madde (1. turla aynı döküm, node `vm`).
- 1. turun 25 indisi HARİÇ tutuldu ⇒ havuzlar: **A = `olaylar_ek\d*\.js` 1219** ·
  **B = öteki 517**.
- `random.seed(1005)`; önce A'dan `random.sample(A, 25)`, sonra aynı üreteçle
  `random.sample(B, 25)`; ikisi de sıralı. Betik: scratchpad `sec2.py`.
- A: `304 320 343 425 483 598 656 708 775 841 848 897 930 966 986 1052 1075 1225 1236 1240
  1340 1365 1413 1414 1430`
- B: `18 48 88 97 126 156 194 210 1509 1517 1526 1531 1539 1549 1578 1604 1608 1620 1642
  1647 1670 1696 1709 1718 1726`

| tabaka | # | dosya | t | başlık | kaynak (ilk 60) |
|---|---|---|---|---|---|
| A | 304 | olaylar_ek.js | 1918-10-01 | Şam'ın kaybı | dimask |
| A | 320 | olaylar_ek.js | 1395-05-17 | Rovine Savaşı — Eflak seferi | bulgaristan |
| A | 343 | olaylar_ek10.js | 1595-08-23 | Kalûgerân Muharebesi — Koca Sinan Paşa'nın Eflak seferi | eflak |
| A | 425 | olaylar_ek14.js | 1566-01-01 | Edirnekapı (Mihrimah Sultan) Camii'nin tamamlanması | edirnekapi-camii-ve-kulliyesi |
| A | 483 | olaylar_ek14.js | 1548-06-01 | Venedik'in Halep'te konsolosluk açması | halep |
| A | 598 | olaylar_ek17.js | 1557-01-01 | Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının Osmanlı idaresine gi | habes-eyaleti |
| A | 656 | olaylar_ek2.js | 1876-05-30 | Abdülaziz'in hal'i | abdulaziz |
| A | 708 | olaylar_ek3.js | 1684-03-05 | Kutsal İttifak kuruldu | ölçülemedi — TDV gövdesi ALINAMADI (§4④ boilerplate): lehist |
| A | 775 | olaylar_ek4.js | 1838-05-25 | Mehmed Ali bağımsızlık niyetini bildirdi | kavalali-mehmed-ali-pasa |
| A | 841 | olaylar_ek5.js | 1381-10-01 | Eretna Beyliği'nin sona ermesi ve Kadı Burhâneddin Devleti'nin kuruluş | eretnaogullari |
| A | 848 | olaylar_ek5.js | 1352-01-01 | Orhan Gazi'nin Cenevizlilerle ilk kapitülasyonu | orhan |
| A | 897 | olaylar_ek5.js | 1516-09-27 | Şam'ın (Dımaşk) Osmanlı hâkimiyetine girişi | selim-i |
| A | 930 | olaylar_ek5.js | 1537-08-25 | Korfu kuşatması ve Venedik'le savaş | korfu |
| A | 966 | olaylar_ek5.js | 1628-09-22 | Abaza Mehmed Paşa'nın Erzurum merkezli isyanının bastırılması | murad-iv |
| A | 986 | olaylar_ek5.js | 1674-01-01 | Kara Mustafa Paşa Uman'ı Lehistan'dan teslim aldı | merzifonlu-kara-mustafa-pasa |
| A | 1052 | olaylar_ek5.js | 1807-02-20 | İngiliz donanmasının İstanbul önlerine gelmesi (Duckworth harekâtı) | selim-iii |
| A | 1075 | olaylar_ek5.js | 1855-08-16 | İstanbul Şehremaneti'nin kurulması: ilk modern belediye teşkilatı | sehremaneti |
| A | 1225 | olaylar_ek6.js | 1684-09-29 | Preveze ve Vonitsa'nın Venedik'e kaybı — Epir kıyısının açılışı | venedik |
| A | 1236 | olaylar_ek6.js | 1697-01-01 | Karadağ'da vladika idaresinin kurulması — Cetinje'nin fiilî kopuşu | iskodra |
| A | 1240 | olaylar_ek6.js | 1806-05-27 | Dubrovnik Cumhuriyeti'nin sonu — Fransız işgali | dubrovnik |
| A | 1340 | olaylar_ek7.js | 1734-06-01 | Hendesehâne'nin (mühendislik okulunun ilk örneği) kuruluşu | mahmud-i--osmanli |
| A | 1365 | olaylar_ek7.js | 1828-06-23 | İbrâil'in ikinci düşüşü — Çar Nikola kalenin önünde | ibrail |
| A | 1413 | olaylar_ek8.js | 1887-07-06 | Süngü Anayasası — Kral Kalākaua'nın yetkileri budandı | 1887 Constitution of the Kingdom of Hawaii (Wikisource, belg |
| A | 1414 | olaylar_ek8.js | 1894-07-04 | Hawaii Cumhuriyeti ilan edildi | bulunamadı — akademik/kurumsal kaynak: US State Dept FRUS 18 |
| A | 1430 | olaylar_ek8.js | 1924-01-01 | Hârizm SSC ve Buhara Halk Sovyet Cumhuriyeti'nin millî sınırlandırmayl | harizm (TDV — CANLI, yalnız yıl) + soviethistory.msu.edu (Mi |
| B | 18 | olaylar.js | 1475-06-06 | Kırım'ın Osmanlı himayesine girişi | kirim |
| B | 48 | olaylar.js | 1770-07-06 | Çeşme baskını | cesme-vakasi |
| B | 88 | olaylar_2s_0918.js | 1841-10-01 | Mısır kuvvetleri Ahsâ (Lahsa) bölgesinden çekildi | standart akademik/ansiklopedik (Egyptian withdrawal from Naj |
| B | 97 | olaylar_2s_0918.js | 1899-04-09 | Bunyoro Kralı Kabalega esir alındı, krallık İngiliz Uganda Protektoras | standart akademik/ansiklopedik (Kabalega's capture, 9 Nisan  |
| B | 126 | olaylar_2s_0919.js | 1589-07-02 | Tsaritsyn kalesi ilk kez belgede anıldı | Volgograd Bölge Tarih Müzesi (ВОКМ), https://vokm134.ru/muze |
| B | 156 | olaylar_2s_0919.js | 1894-01-01 | Gweru askerî karakol olarak kuruldu | Britannica, 'Gweru', https://www.britannica.com/place/Gweru  |
| B | 194 | olaylar_7a4170.js | 1859-04-25 | Süveyş Kanalı kazısının başlaması ve Portsaid'in kuruluşu | suveys |
| B | 210 | olaylar_amerika_0920.js | 1535-01-18 | Lima kuruldu — İspanyol Peru'sunun başkenti Rimac vadisine taşındı | John Hemming, The Conquest of the Incas (Macmillan, 1970) ·  |
| B | 1509 | olaylar_p0036.js | 1868-01-01 | Katar'da Âl-i Sânî öne çıktı — İngiliz müdahalesi ve Bahreyn'e vergi | katar |
| B | 1517 | olaylar_p0043kirim.js | 1828-06-24 | Anapa'nın Osman Paşa tarafından Ruslara teslimi | TDV `anapa` (200, gövdesi okundu): "Osman Paşa 24 Haziran 18 |
| B | 1526 | olaylar_p0049.js | 1303-01-01 | Katalan Kumpanyası Bizans hizmetine girdi — Anadolu seferinin başlangı | bizans · alasehir |
| B | 1531 | olaylar_p0049.js | 1919-04-12 | Kars'ın İngiliz işgali — Cenûb-ı Garbî Kafkas Hükûmeti dağıtıldı | kars · ahiska |
| B | 1539 | olaylar_p0049.js | 1921-03-16 | Moskova Antlaşması — TBMM ile Sovyet Rusya doğu sınırını belirledi | kars · ahiska |
| B | 1549 | olaylar_p0051.js | 1596-01-01 | Moskova'nın Belgorod, Oskol ve Kursk'u bozkırda ileri garnizon olarak  | Internet Encyclopedia of Ukraine (CIUS), maddeler 'Slobidska |
| B | 1578 | olaylar_p0057.js | 1919-07-23 | Muğla'nın İtalyan işgali | mugla |
| B | 1604 | olaylar_p0057b.js | 1648-01-01 | Evliya Çelebi İznik'te çini imalathanesi sayısının dokuza düştüğünü ka | iznik |
| B | 1608 | olaylar_p0058.js | 1339-01-01 | Eretna, Tokat, Kayseri ve Samsun yörelerini kendisine bağladı | Abdullah Kaya, 'Dulkadirli Beyliği'nin Eratnalılar ile Münas |
| B | 1620 | olaylar_p0063.js | 1724-09-11 | Salyan'da Rus taburunun yok edilmesi — Tahmasb'ın birlikleri Kura ağzı | Kurukin, Персидский поход Петра Великого (2010) · Özdamirova |
| B | 1642 | olaylar_p0068.js | 1861-06-13 | Çerkezlerin Soçi'de toplanıp Osmanlı, İngiltere ve Fransa'dan yardım i | cerkezler |
| B | 1647 | olaylar_p0068b.js | 1789-05-01 | Kalas bozgunu | yusuf-pasa-koca |
| B | 1670 | olaylar_p0068b.js | 1791-08-12 | Ziştovi Antlaşması'nın padişah tarafından onaylanması | zistovi-antlasmasi |
| B | 1696 | olaylar_p0917dunya.js | 1918-02-24 | Trabzon'un Rus işgalinden kurtuluşu | trabzon |
| B | 1709 | olaylar_p0917dunya.js | 1921-02-25 | Kızıl Ordu'nun Tiflis'e girişi: Gürcistan Demokratik Cumhuriyeti'nin d | gurcistan · acara |
| B | 1718 | olaylar_p0917kosu13.js | 1450-01-01 | Yergöğü'nün yeniden Osmanlı kontrolüne girişi (853/1449-50) | yergogu |
| B | 1726 | olaylar_p0917kosu13.js | 1731-11-15 | Hekimoğlu Ali Paşa'nın Tebriz'i geri alması | tebriz · mahmud-i--osmanli |

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

Kova kuralı 1. turla AYNI (en kötü soru kovayı belirler; ③ açıkça desteklemiyorsa 🔴;
beyanlı boş kaynak ⚪; "kısmen" ✅'yi bozmaz).

- **A (ek\*): 🔴 7 / 25 (aralık 4–11) · ⚪ 4 · ✅ 14.** 1. turun %36'sı biraz
  düşer bekliyorum (1. tur küçük örneklem, üst uçta olabilir).
  Mekanizma sırası: ① kaynak (çıplak slug) tarihi taşımıyor — ör. 320 Rovine/`bulgaristan`,
  1236 Karadağ/`iskodra`, 1225 Preveze/`venedik` · ② sahte ay/gün — `-06-01`, `-10-01`
  kodları (304, 483, 841, 1340) · ③ süsleme cümlesi (uzun anlatı metinleri, ek5-ek7).
- **B (öteki): 🔴 2 / 25 (aralık 0–4) · ⚪ 4 · ✅ 19.**
  Mekanizma: "standart akademik/ansiklopedik" diye adı verilmeyen kaynak (88, 97) ③ ya da
  ⚪ düşer; açılamayan basılı kitap (210 Hemming, 1620 Kurukin) ⚪ düşer.
- İki oran AYRI bildirilecek, birleştirilmeyecek.

## 2. Ölçüm

Yöntem 1. turla aynı: TDV ham metni bu oturumda çekildi (WebFetch/küçük model YOK),
tarihi taşıyan cümle okundu. ⚠️ **Gövdesi çekilemeyen TDV maddeleri** (boilerplate, ~2,4
bin karakter, `§4 ④` — "çekilemedi ≠ yok"): `dimask` · `sehremaneti` · `lehistan` ·
`sinan-pasa-koca`. Bunlara dayanan sorular ⚪ sayıldı ya da kapsayıcı TDV maddesinden
(`suriye`, `belediye`, `sehremini`) ölçüldü.

### 2.1 A — `olaylar_ek*.js` (25)

| # | ① tarih | ② içerik | ③ kaynak | KOVA | not |
|---|---|---|---|---|---|
| 304 | ✅ | ⚪ | ⚪ (çekilemedi) | ⚪ | Hama/Humus "aynı tarihte" — aşağıda |
| 320 | ✅ | ✅ | 🔴 | 🔴 | `bulgaristan` Rovine'yi HİÇ anmıyor |
| 343 | ⚪ | ✅ | kısmen | ⚪ | `eflak` olayı anıyor, günü vermiyor |
| 425 | ✅ | ✅ | ✅ | ✅ | |
| 483 | 🔴 | ✅ | ✅ (yıl) | 🔴 | sahte ay `1548-06-01` |
| 598 | 🔴 | ✅ | ✅ | 🔴 | `t` iki günlü olayın hiçbirine uymuyor |
| 656 | ✅ | ✅ | ✅ | ✅ | |
| 708 | ⚪ | ✅ | ⚪ (beyanlı) | ⚪ | |
| 775 | ✅ | ✅ | ✅ | ✅ | |
| 841 | ✅ | ✅ | ✅ | ✅ | "1381 sonbaharı" → `10-01`, `gun` alanı açıklıyor |
| 848 | ✅ | ✅ | kısmen | ✅ | |
| 897 | ✅ | ✅ | ✅ | ✅ | |
| 930 | ✅ | ✅ | ✅ | ✅ | |
| 966 | 🔴 | ✅ | 🔴 | 🔴 | gün uydurma + kaynak tarih vermiyor |
| 986 | ✅ | ✅ | ✅ | ✅ | |
| 1052 | ⚪ (gün) | ✅ | kısmen (ay) | ⚪ | |
| 1075 | ⚪ | 🔴 | ⚪ (çekilemedi) | 🔴 | yan cümle TDV'ye aykırı |
| 1225 | ⚪ | ✅ | 🔴 | 🔴 | `venedik` Preveze'yi anmıyor |
| 1236 | ⚪ | ✅ | 🔴 | 🔴 | `iskodra` vladikalığı anmıyor |
| 1240 | ✅ | 🔴 | ✅ (gün) | 🔴 | yan cümle kendi kaynağına aykırı |
| 1340 | 🔴 | ✅ | 🔴 | 🔴 | sahte ay + TDV'ye uydurma atıf |
| 1365 | ✅ | ✅ | ✅ | ✅ | |
| 1413 | ✅ | ✅ | ✅ | ✅ | |
| 1414 | ⚪ | ⚪ | ⚪ | ⚪ | kaynak adlandırılmış, alıntı yok |
| 1430 | ✅ | ✅ | kısmen | ✅ | |

**A: 🔴 9 · ⚪ 5 · ✅ 11.**

### 2.2 B — öteki 53 dosya (25)

| # | ① tarih | ② içerik | ③ kaynak | KOVA | not |
|---|---|---|---|---|---|
| 18 | ⚪ (gün) | ✅ | kısmen (ay) | ⚪ | TDV `kefe`: "Haziran 1475" — 6'sı yok |
| 48 | ✅ | ✅ | ✅ | ✅ | |
| 88 | 🔴 | ✅ | ⚪ | 🔴 | "veri kaydının kendi günü devralındı" — `§4` |
| 97 | ⚪ | ⚪ | ⚪ | ⚪ | "standart akademik", alıntı yok |
| 126 | ✅ | ✅ | ✅ | ✅ | |
| 156 | ⚪ | ⚪ | ⚪ | ⚪ | Britannica 403 — açılamadı |
| 194 | ✅ | ✅ | ✅ | ✅ | |
| 210 | ⚪ | ⚪ | ⚪ | ⚪ | Hemming/Lockhart, alıntı yok (kaydın kendi notu) |
| 1509 | ✅ | ✅ | ✅ | ✅ | |
| 1517 | ✅ | ✅ | ✅ | ✅ | |
| 1526 | ✅ | ✅ | ✅ | ✅ | |
| 1531 | ✅ | ✅ | ✅ | ✅ | |
| 1539 | ✅ | ✅ | ✅ | ✅ | |
| 1549 | ✅ | ✅ | ✅ | ✅ | |
| 1578 | ✅ | ✅ | ✅ | ✅ | |
| 1604 | ✅ | ✅ | ✅ | ✅ | |
| 1608 | ⚪ | ⚪ | ⚪ | ⚪ | Kaya 2014 açılamadı |
| 1620 | ⚪ | ⚪ | ⚪ | ⚪ | Kurukin (Rusça basılı) açılamadı |
| 1642 | ✅ | ✅ | ✅ | ✅ | |
| 1647 | ✅ | ✅ | ✅ | ✅ | |
| 1670 | ✅ | 🔴 | ✅ (gün) | 🔴 | yan cümle kendi kaynağına aykırı |
| 1696 | ✅ | ✅ | ✅ | ✅ | |
| 1709 | ✅ | ✅ | ✅ | ✅ | |
| 1718 | ✅ | ✅ | ✅ | ✅ | |
| 1726 | ✅ | ✅ | ✅ | ✅ | |

**B: 🔴 2 · ⚪ 6 · ✅ 17.**

### 2.3 🔴'ler — kaynak cümlesiyle

**A tabakası**
- **320 Rovine — ③.** `kaynak: bulgaristan` gövdesinde "Rovine", "Mircea", "1395" HİÇ
  geçmiyor. Tarih başka TDV maddesinden doğrulanıyor — `bayezid-i`: "Eflak'ta Argeş nehri
  civarında 17 Mayıs 1395'te meydana gelen savaşta yenilgiye uğrattığı Mircea'nın yerine
  Vlad'ı tahta geçirdi." ⚠️ TDV kendiyle çelişiyor (`D211 ⑥`): `eflak` "Rovine'deki çetin
  savaşta (1394)" diyor.
- **483 Halep konsolosluğu — ① sahte ay.** TDV `halep`: "Nitekim 1548'de burada bir
  Venedik konsolosluğu kuruldu" — yalnız yıl; `t:"1548-06-01"`, `gun:"1548"`.
- **598 Habeş Eyaleti — ① `t` hiçbir güne uymuyor.** TDV `habes-eyaleti`: "15 Şâban 962
  (5 Temmuz 1555) tarihinde resmen kurulan Habeş beylerbeyiliği" · "2 Nisan 1557'de Masavva'
  şehri alındıktan sonra". Madde iki günü de metinde veriyor, `t` ise `1557-01-01` — ne
  kuruluş (1555-07-05) ne Masavva (1557-04-02). Başlık "kuruluş" dediği için `t` iki yıl
  ve üç ay erken/geç.
- **966 Abaza isyanının bastırılması — ① gün uydurma + ③.** TDV `murad-iv` teslimi
  tarihlemiyor ("Diğer taraftan Abaza Paşa uzun uğraşılar sonucu teslim oldu ve
  padişahtan aman diledi"; çevresindeki tarihler 1035/1626 ve 1038/1629). Kaydın `gun`
  alanı "1628" diyor, `t` ise `1628-09-22` — günün dayanağı yok.
- **1075 Şehremaneti — ② yan cümle TDV'ye aykırı.** Madde: "ertesi yıl Beyoğlu-Galata'da
  Altıncı Daire-i Belediye pilot bölge olarak teşkil edildi" (= 1856). TDV `belediye`:
  "Altıncı Dâire-i Belediyye kuruldu (Altıncı Dâire-i Belediyye Nizamnâmesi, 11
  Cemâziyelevvel 1274 / 28 Aralık 1857 ve … Nizamnâme-i Umûmî, 24 Şevval 1274 / 7 Haziran
  1858 tarihlidir)." Kuruluş günü de iki TDV maddesinde farklı, hiçbiri 16 Ağustos değil:
  `belediye` "13 Haziran 1854'te … İstanbul Şehremaneti kuruldu"; `sehremini` "25 Temmuz
  1855 tarihli bir iradeyle … şehremanetinin kurulması kararlaştırılmıştır." Gösterilen
  `sehremaneti` maddesinin gövdesi çekilemedi ⇒ 16 Ağustos ⚪ kaldı.
- **1225 Preveze — ③.** `kaynak: venedik` Preveze/Vonitsa/Ayamavra'yı hiç anmıyor (yalnız
  "1684-1699" savaş aralığı). TDV `preveze` slug'ı ÖLÜ (302).
- **1236 Karadağ vladikalığı — ③.** `kaynak: iskodra` "vladika", "Petroviç", "Cetinje",
  "1697" — hiçbiri yok. TDV `karadag` vladikalığı anıyor ama tarihlemiyor ("Cetinje Ortodoks
  piskoposu (Çetine vladikası) tedrîcen en yüksek otorite haline geldi").
- **1240 Dubrovnik — ② yan cümle kendi kaynağına aykırı.** Gün doğru — TDV `dubrovnik`:
  "Fransızlar, 27 Mayıs 1806'da Dubrovnik'i zaptederek bu küçük devlete son verdiler."
  Ama madde "1458'den beri Osmanlı'ya haraç ödeyerek … üç buçuk asırlık tâbi statüsü"
  diyor; aynı madde: "Dubrovnik kaynaklarına göre 1365 tarihli olan bu ahidnâme ile
  Dubrovnik Osmanlılar'ın haraçgüzârı oluyor"; vergi artışları 1445, 1452, 1459'da. 1458
  maddede hiç geçmiyor.
- **1340 Hendesehâne — ① sahte ay + ③ uydurma atıf.** TDV `mahmud-i--osmanli`: "1146 (1734)
  yılında Üsküdar'da Hendesehâne (Humbarahâne) adıyla bir kışla ve okul açmış" — yıl;
  `t:"1734-06-01"`. Madde "TDV'nin 'Mahmud I' maddesine göre … saray hizmetlileri ve
  bostancılar arasından seçtiği öğrencilere matematik ve geometri temelli askerî eğitim
  verdi" diyor: maddede "bostancı", "öğrenci", "matematik", "geometri" kelimelerinden HİÇBİRİ
  yok. 1. turdaki 1305 (Genç Osman) ile aynı sınıf.

**B tabakası**
- **88 Ahsâ'dan çekilme — ① sahte ay, BEYANLI.** Kaydın kendi `kaynak:` cümlesi: "kaynak
  yalnız YIL veriyor (1841), AY/GÜN kaynaksız — veri kaydının kendi günü (1841-10-01)
  devralındı". Bu `§4`ün iki kuralını birden çiğniyor: "Atlas referans değildir … komşu
  kaydın günü DAYANAK OLAMAZ" ve "gün bilinmiyorsa `YYYY-01-01`". Kaynak da adıyla
  alıntılanmıyor ("standart akademik/ansiklopedik … J.B. Kelly").
- **1670 Ziştovi onayı — ② yan cümle kendi kaynağına aykırı.** Gün doğru — TDV
  `zistovi-antlasmasi`: "12 Zilhicce'de (12 Ağustos) onaylandı". Ama madde "Onay, Rusya ile
  mütarekenin imzalandığı günün hemen ertesine denk geldi" diyor; aynı TDV maddesi: "12
  Ağustos 1791'de Ruslar'la Kalas'ta yapılan mütareke" — yani AYNI gün. (TDV
  `yusuf-pasa-koca` mutabakatı 8 Ağustos'a koyuyor; ikisi de "ertesi gün" demiyor.)

### 2.4 Ölçüm sırasında görülen, kovaya girmeyen bulgular

- **304 Şam — Hama/Humus.** Tarih TDV `suriye` ile tutuyor ("Şam, İngiliz-Arap kuvvetleri
  tarafından Ekim 1918 başında işgal edildi"). Ama madde "Aynı tarihte elden çıkan diğer
  yerleşimler: Hama, Humus" diyor; bunu destekleyen bir cümle bulamadım (`hama` maddesinde
  1918 yok, `humus` slug'ı ölü). Bu kalıp ("Aynı tarihte … katılan/elden çıkan öteki
  yerler") haritadan türetilmiş bir cümleye benziyor: Hama ve Humus'un yerleşim kırılması
  Şam'ın gününe bağlanmış olabilir. Ölçmedim, ⚪ bıraktım. Aynı kalıp B'de de var (18 Kırım:
  "Bahçesaray, Kerç, Azak"; 897 Şam 1516: "Beyrut") — **kalıp makinece aranabilir.**
- **TDV iç çelişkileri** (madde suçu değil, bilgi): Rovine 1394 (`eflak`) / 1395
  (`bayezid-i`) · Şehremaneti 1854 (`belediye`) / 1855 (`sehremini`) · Tebriz'in İran'a
  bırakılışı 1736 (`tebriz`) / 10 Ocak 1732 (`mahmud-i--osmanli`; madde 1726 bunu
  kullanmış, doğru) · Kars'ın İngiliz işgali 12 Nisan (`kars`) / 13 Nisan (`ahiska`).

## 3. Sonuç — iki oran AYRI

| tabaka | 🔴 | ⚪ | ✅ | 🔴 oran | Wilson %95 |
|---|---|---|---|---|---|
| **A `ek*`** (havuz 1219) | **9** | 5 | 11 | **%36** | %20 – %56 |
| **B öteki** (havuz 517) | **2** | 6 | 17 | **%8** | %2 – %25 |

İki tur, aynı tabaka içinde (tabakalar arası BİRLEŞTİRİLMEDİ; iki tur bağımsız çünkü
1. turun 25'i havuzdan çıkarıldı):

| tabaka | 1. tur | 2. tur | iki tur | Wilson %95 |
|---|---|---|---|---|
| A `ek*` | 5/14 | 9/25 | **14/39 = %36** | %23 – %52 |
| B öteki | 0/11 | 2/25 | **2/36 = %6** | %1,5 – %18 |

⚠️ ⚪ ✅'ye katılmadı. B'de ⚪ yüksek (6/25): B'nin kaynakları çoğunlukla TDV dışı basılı
kitap (Hemming, Kurukin, Kaya) ya da Britannica (403); ölçememek benim ölçüm sınırım,
temizlik kanıtı değil. B'nin "doğrulanan" oranı %68 (17/25), A'nınki %44 (11/25).

### 3.1 Ne değişti

- **A'nın oranı TUTTU:** 1. turun %36'sı (aralık %16-61) 2. turda yine %36 çıktı; aralık
  %23-52'ye daraldı. `ek*`'de beklenen hatalı madde ≈ **280 – 640** (1233 × aralık).
- **B artık "0" değil:** 2/25. İki turda 2/36, üst sınır %26'dan **%18'e** indi. B'nin
  iki hatası da A'daki sınıflarla AYNI (sahte ay, yan cümle) — yani mekanizma dosya
  kuşağına özel değil, kuşakta YOĞUN.
- **İki tabaka arasındaki fark artık istatistiksel olarak ayrışıyor:** A'nın alt sınırı
  (%23) B'nin üst sınırına (%18) değmiyor.

### 3.2 Mekanizma — A'nın 9 hatası

| sınıf | A | B | makinece süzülebilir mi |
|---|---|---|---|
| ③ çıplak slug olayı anmıyor (320, 1225, 1236) | 3 | 0 | ⚠️ kısmen — slug gövdesinde olay adı/yıl aranabilir |
| ① sahte ay/gün — `t` ay/gün taşıyor, `gun` yıl diyor (483, 966, 1340) + beyanlı (88) | 3 | 1 | ✅ EVET — `t` hassasiyeti × `gun` alanı |
| ② yan cümle kendi kaynağıyla çelişiyor (1075, 1240) + (1670) | 2 | 1 | ❌ hayır — okuma ister |
| ① `t` metindeki günlerin hiçbirine uymuyor (598) | 1 | 0 | ✅ EVET — `d` içindeki tarihler × `t` |
| ③ TDV'ye uydurma atıf (1340; 1. turda 1305) | (1) | 0 | ⚠️ kısmen — "TDV'ye göre/maddesine göre" geçen `d`'ler |

### 3.3 Öngörü × ölçüm

| öngörü | ölçüm | |
|---|---|---|
| A 🔴 7 (4–11) | 9 | ✅ aralıkta |
| B 🔴 2 (0–4) | 2 | ✅ tam |
| A ⚪ 4 · B ⚪ 4 | 5 · 6 | yakın; B'yi az tahmin ettim |
| slug tarihi taşımıyor: 320, 1236, 1225 | üçü de 🔴 ③ | ✅ tam |
| sahte ay: 304, 483, 841, 1340 | 483 ✓ · 1340 ✓ · 304 ⚪ · 841 ✅ | yarım |
| B: 88, 97 "standart akademik" | 88 🔴 · 97 ⚪ | ✅ |
| B: basılı kitap ⚪ (210, 1620) | ikisi de ⚪ | ✅ |
| **ÖNGÖRÜLMEYEN** | 598 (`t` metindeki günlere uymuyor) · 1670 ve 1240 (yan cümle kaynakla çelişiyor) | ❌ |

## 4. Öneri (karar koordinatörün)

1. **Kampanya hedefi değişmedi: `ek*` 1233.** İki tur birbirini doğruladı.
2. **Makinece süzgeç — UMIT'e (iki tanesi kesin, biri kısmen):**
   - ① `t` ay/gün taşıyor (`-MM-DD` ≠ `-01-01`) ama `gun` alanı yalnız yıl/hicrî yıl
     diyor → sahte hassasiyet adayı (483, 966, 1340, 88, 1. tur 309).
   - ② `d` metninde gün-ay-yıl geçiyor ve hiçbiri `t`'ye eşit değil → `t` yanlış olay
     adayı (598).
   - ③ `d` içinde "TDV'ye göre / maddesine göre" geçiyor → atıf doğrulama kuyruğu
     (1340, 1. tur 1305). Bu yalnız aday üretir, hükmü okuma verir.
   - ④ `d` içinde "Aynı tarihte … (katılan|elden çıkan) (öteki|diğer) yer" kalıbı →
     haritadan türetilmiş iddia adayı (304, 18, 897).
3. **Okuma isteyen sınıf** (yan cümle çelişkisi, slug olayı anmıyor) süzgeçle bulunamaz;
   kampanyanın el işi bu kısımdır.
4. **B'yi kampanyaya katmaya gerek yok** ama süzgeç ①/②'yi B'de de koşturmak ucuz
   (88 ve 1670 B'den çıktı).
