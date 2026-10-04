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

(aşağıda)
