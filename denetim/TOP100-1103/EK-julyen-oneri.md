# EK — Jülyen düzeltme önerileri (İngiltere · İsveç · Yunanistan, A sınıfı) — KASA uygulama listesi

Tarih: 4 Kasım 2026 · UMIT SALI · Ağaç: `umit-1104-ikinci` worktree (`origin/main` 09c1aa176), **salt okuma, `data/`ya yazılmadı.**
Girdi: `EK-julyen-diger.md` A sınıfı (İngiltere 45 olay + 5 yerleşim günü · İsveç 9 olay + 5 yerleşim günü · Yunanistan 5 yerleşim günü).
Kural (Emre onayı bekliyor): **1582-10-15 sonrası bütün atlas günleri Gregoryen.** Fark JDN'le: 1582-10-15..1700-02-28 **+10** · 1700-03-01..1800-02-28 **+11** · 1800-03-01..1900-02-28 **+12** · 1900-03-01.. **+13**.

## 0. Nasıl ölçüldü
- **Kaynağın günü:** her olay kaydının kendi `kaynak:` alıntısı + `gun:`/`ic_not*` alanı betikle döküldü (`jul_kayit.py`). İsveç ve Yunan kalemleri için ayrıca bir alt ajan (Sonnet) web'de kaynak aradı: snl.no, lex.dk, SBL, IEG-Mainz Friedensverträge, TDV, dziejesejmu.pl, Averof müzesi. Britannica 403 verdi.
- **Kırılma bağı:** `girdi.yukle()` ile birleşik (CANLI) yerleşim kümesinde her eski günün `s:`/`isg:` uçları sayıldı, kaynak dosya:satırıyla birlikte (`jul_canli.py`). Ayrıca `data/` içinde aynı gün dizgesini taşıyan öteki satırlar tarandı (`jul_bag.py`).
- **Değişmez 2 simülasyonu** (`jul_sim.py`, bellekte, `degismez2(…,("s",),yer_sarti=True)` ve `isg`). §1–§3'teki 82 canlı yerleşim ucu ile 5 evren maddesi birlikte kaydırıldı.
  - Sonuç: `s` açık **1871 → 1871**, `isg` **1 → 1**. Yeni açılan kırılma **0**.
  - Önceden açık olan 4 İngiliz günü (1607-05-13, 1650-09-03, 1660-05-29, 1673-05-05) yeni günlerinde de açık kalıyor. Bu günlerde evrende (`olaylar*`/`kronoloji_sinir*`) madde yok; `kronoloji_ingiltere.js` evren dışı. Bkz. §5.
- **Ölü/arşiv dosyalar:** şu dört dosya `arac/girdi_listesi.py`de yok, motor da site de okumuyor; yalnız `arac/_sahiplik_uygula.py` girdisi:
  - `yer_yama_1923_1945.js`
  - `yer_yama_avrupa_isvec_1923.js`
  - `yer_yama_egeadalari.js`
  - `yer_yama_isg_yunan_kaynak.js`

  Bunlardaki eski günler haritayı etkilemez. Ama `_sahiplik_uygula` yeniden koşarsa eski günü geri yazar, o yüzden §4'te ayrı listelendi.
- **`yer_yama_ing.js` / `yer_yama_isvec.js` / `yer_yama_almanya.js`:** bunlar olay-mahalli yamaları (`{dosya, t, b}` ile madde eşler). Madde `t:` değişirse yamanın `t:`'si de aynı commit'te değişmeli, yoksa eşleşme kopar ve madde yer kaybeder.

## 1. İNGİLTERE (45 olay satırı + 5 yerleşim günü = 50 kalem)

Her satırda kaynak alıntısı kaydın kendi `kaynak:` alanından gelir. İngiliz akademik başvuru eserleri 1752 öncesini **eski üslupla (O.S., Jülyen)** verir. Kayıtların `gun:` alanı bunu zaten "JÜLYEN (… Gregoryen X)" diye beyan ediyor. Yıl, yeni üslup yılıdır (1 Ocak yılbaşı). OSY'li satırlarda (Ocak–24 Mart) kaynağın çift yılı ("1648/9") doğru biçimde ikincisine bağlanmış; yıl değişmez.

**Uygulama biçimi:** `t:` ← Gregoryen sütunu. `gun:` ← "D Ay YYYY GREGORYEN (İngiliz eski takvimiyle D' Ay')". Aynı satırın eş yaması (`yer_yama_ing.js:N` `t:`) da aynı commit'te değişir.

| # | dosya:satır | olay | atlas (= kaynak O.S.) | kaynak alıntısı (kayıttan) | **Gregoryen** | eş/bağ (aynı commit) |
|---|---|---|---|---|---|---|
| 1 | kronoloji_ingiltere.js:514 | İskoç Kraliçesi Mary idam | 1587-02-08 | Oxford Companion Brit. Hist. «execution at Fotheringhay on 8 February 1587» | **1587-02-18** | yer_yama_ing.js:97 |
| 2 | kronoloji_ingiltere.js:528 | Doğu Hindistan Şirketi fermanı | 1600-12-31 | OUP Dict. of Economics «Royal Charter on 31 December 1600» | **1601-01-10** | kronoloji_hindistan.js:272 (eş kayıt, aynı gün → 1601-01-10) · yollar_ipek_yolu.js:119 |
| 3 | kronoloji_ingiltere.js:537 | VI. James İngiltere tahtında (Taçlar Birliği) | 1603-03-24 | OUP Kings & Queens «England 24 Mar. 1603» | **1603-04-03** | ⚠ aynı günde 58 yerleşim ucu var ama hepsi **Edo Bakufu** (Kyoto, Edo… `azuchi-momoyama→edo-bakufu`), İngiltere ile **ilgisiz — KAYDIRMA** |
| 4 | kronoloji_ingiltere.js:544 | Barut Komplosu | 1605-11-05 | OUP World Enc. «arrested on November 5» | **1605-11-15** | — |
| 5 | kronoloji_ingiltere.js:551 | Jamestown kuruldu | 1607-05-13 | Oxford Companion US Hist. «founding Jamestown on 13 May» (O.S.; Emre kararı TEYIT-KARAR-1014) | **1607-05-23** | `gun:` metni hâlâ "14 Mayıs … Gregoryen 24 Mayıs" diyor; `t:` ile çelişir, **gun da düzeltilir** (13 Mayıs O.S. = 23 Mayıs). yer_yama_ing.js:103 · CANLI yerleşim: yerlesimler_amerika.js:930 Jamestown `s.f` 1607-05-13 → 1607-05-23 |
| 6 | kronoloji_ingiltere.js:563 | Mayflower Cape Cod'a ulaştı | 1620-11-11 | Oxford Ref. «arrived at Cape Cod on 21 November 1620» (kaynak **Gregoryen** veriyor) | **1620-11-21** | kronoloji_cok_kuzey_amerika_k2.js:15 zaten 1620-11-21 (Mayflower Sözleşmesi). Düzeltme sonrası iki madde aynı gün, **mükerrer adayı** |
| 7 | kronoloji_ingiltere.js:584 | İç Savaş — Nottingham sancağı | 1642-08-22 | Europe 1450-1789 «on 22 August 1642» | **1642-09-01** | — |
| 8 | kronoloji_ingiltere.js:591 | Naseby | 1645-06-14 | OUP Dict. World Hist. «Naseby, Battle of (14 June 1645)» | **1645-06-24** | yer_yama_ing.js:106 |
| 9 | kronoloji_ingiltere.js:598 | Krallık makamı kaldırıldı | 1649-03-17 | BHO Firth & Rait «17 March 1648/9» (OSY → 1649 doğru) | **1649-03-27** | — |
| 10 | kronoloji_ingiltere.js:605 | Commonwealth ilanı | 1649-05-19 | ⚠ kaynak **The Property Chronicle** (akademik değil) | **1649-05-29** | Gün doğru (Act of 19 May 1649), ama kaynak değişmeli: BHO Firth & Rait, «May 1649: An Act declaring and constituting the People of England to be a Commonwealth» |
| 11 | kronoloji_ingiltere.js:612 | I. Charles idam | 1649-01-30 | Oxford Companion «beheaded … on 30 January 1649» (OSY → 1649) | **1649-02-09** | — |
| 12 | kronoloji_ingiltere.js:619 | Cromwell Lord Protektör | 1653-12-16 | UK Parliament Living Heritage (ic_not_t) | **1653-12-26** | — |
| 13 | kronoloji_ingiltere.js:626 | Cromwell öldü | 1658-09-03 | Europe 1450-1789 «died (3 September 1658)» | **1658-09-13** | — |
| 14 | kronoloji_ingiltere.js:633 | Restorasyon — II. Charles Londra'da | 1660-05-29 | Europe 1450-1789 «29 May 1660, when he entered London» | **1660-06-08** | CANLI 12 yerleşim ucu (İskoçya `ingiltere→iskocya`): yerlesimler.js:1217 Edinburg · yerlesimler_avrupa.js:122 Glasgow, :123 Aberdeen, :124 Inverness, :125 Perth, :126 Dumfries (her birinde t+f) → 1660-06-08 |
| 15 | kronoloji_ingiltere.js:640 | Royal Society | 1660-11-28 | royalsociety.org «first meeting, on 28 November 1660» | **1660-12-08** | — |
| 16 | kronoloji_ingiltere.js:656 | Büyük Londra Yangını | 1666-09-02 | Oxford Companion «Sunday, 2 September» | **1666-09-12** | — |
| 17 | kronoloji_ingiltere.js:663 | Greenwich Rasathanesi | 1675-06-22 | RMG «22 June 1675 – Charles II establishes» | **1675-07-02** | yer_yama_ing.js:109 |
| 18 | kronoloji_ingiltere.js:670 | II. James kral | 1685-02-06 | New Catholic Enc. «(Feb. 6, 1685)» (OSY → 1685) | **1685-02-16** | — |
| 19 | kronoloji_ingiltere.js:677 | Principia yayımlandı | 1687-07-05 | Cambridge UL «Footprints of the Lion» | **1687-07-15** | — |
| 20 | kronoloji_ingiltere.js:684 | Orange'lı William Torbay'a çıktı | 1688-11-05 | Europe 1450-1789 «landing at Torbay on 5 November 1688» | **1688-11-15** | yer_yama_ing.js:112 · **kronoloji_hollanda.js:224** aynı olay, aynı Jülyen gün (gun: "= 15 Kasım Gregoryen") → 1688-11-15 |
| 21 | kronoloji_ingiltere.js:697 | Bill of Rights | 1689-12-16 | legislation.gov.uk «Royal Assent on 16th December 1689» | **1689-12-26** | — |
| 22 | kronoloji_ingiltere.js:704 | İngiltere Bankası | 1694-07-27 | bankofengland.co.uk «27 July 1694 Bank of England founded» | **1694-08-06** | — |
| 23 | kronoloji_ingiltere.js:727 | Kraliçe Anne tahtta | 1702-03-08 | Women in World Hist. «died … on March 8, 1702» (OSY → 1702) | **1702-03-19** | — |
| 24 | kronoloji_ingiltere.js:741 | Birlik Yasaları — Büyük Britanya | 1707-05-01 | legislation.gov.uk Union with Scotland Act, Art. I «upon the First day of May» | **1707-05-12** | kronoloji_sinir_nokta2.js:42 (**evren maddesi**) → 1707-05-12 · CANLI 26 uç (13 yerleşim, `iskocya→ingiltere`): yerlesimler.js:1217 Edinburg · yerlesimler_avrupa.js:122–127, 129, 131, 132 (Glasgow, Aberdeen, Inverness, Perth, Dumfries, Wick, Stornoway, Kirkwall, Lerwick) · yerlesimler_nokta2.js Iona (Hebridler) · yerlesimler_ms1_1281_yeni.js:248 Dumbarton |
| 25 | kronoloji_ingiltere.js:748 | I. George kral | 1714-08-01 | Oxford Companion «succeeded peacefully on 1 August» | **1714-08-12** | **kronoloji_almanya.js:728** aynı olay (Hannover Elektörü I. George) 1714-08-01 → 1714-08-12 · yer_yama_almanya.js:147 |
| 26 | kronoloji_ingiltere.js:775 | 1745 Jakobit Ayaklanması | 1745-08-19 | ⚠ kaynak yalnız `el-kitabi` | **1745-08-30** | 19 Ağustos O.S. **Glenfinnan sancak dikme** günüdür. Başlıktaki "karaya çıktı" yanlış: Eriskay çıkarması 23 Temmuz O.S. Başlık ya da gün düzeltilmeli, kaynak eklenmeli. yer_yama_ing.js:127 |
| 27 | kronoloji_ingiltere.js:782 | Culloden | 1746-04-16 | OUP Dict. World Hist. «Culloden, Battle of (16 April 1746)» | **1746-04-27** | yer_yama_ing.js:130 |
| 28 | kronoloji_ingiltere.js:1473 | Mesih Dublin'de | 1742-04-13 | OUP Dict. Brit. Hist. «first performed in Dublin on 13 April 1742» | **1742-04-24** | — |
| 29 | kronoloji_ingiltere.js:1708 | Ulusal Ahid | 1638-02-28 | New Catholic Enc. «Greyfriars Kirkyard … Feb. 28, 1638» (OSY → 1638) | **1638-03-10** | yer_yama_ing.js:304 |
| 30 | kronoloji_ingiltere.js:1714 | Solemn League and Covenant | 1643-09-25 | Oxford Companion «sworn … on 25 September» | **1643-10-05** | yer_yama_ing.js:307 |
| 31 | kronoloji_ingiltere.js:1720 | Dunbar | 1650-09-03 | Oxford Companion «Dunbar, battle of» (muharebe 3 Eylül O.S.) | **1650-09-13** | yer_yama_ing.js:310 · CANLI yerlesimler.js:1217 Edinburg `s.t/s.f` 1650-09-03 → 1650-09-13 |
| 32 | kronoloji_ingiltere.js:1727 | Killiecrankie | 1689-07-27 | OUP Dict. Brit. Hist. «On 27 July» | **1689-08-06** | yer_yama_ing.js:313 |
| 33 | kronoloji_ingiltere.js:1734 | Glencoe | 1692-02-13 | Oxford Companion «on 13 February 1692» (OSY → 1692) | **1692-02-23** | yer_yama_ing.js:316 |
| 34 | kronoloji_ingiltere.js:1782 | Kinsale Savaşı | 1601-12-24 | Enc. Irish Hist. «(24 December 1601)» | **1602-01-03** | yer_yama_ing.js:328 · kronoloji_cok_ince_avrupa_amerika.js:122 (eş kayıt) |
| 35 | kronoloji_ingiltere.js:1789 | Kontların Kaçışı | 1607-09-14 | Enc. Irish Hist. «the 14th of this present September» | **1607-09-24** | yer_yama_ing.js:331 |
| 36 | kronoloji_ingiltere.js:1803 | 1641 İrlanda İsyanı | 1641-10-23 | ⚠ kaynak yalnız `el-kitabi` | **1641-11-02** | Kaynak eklenmeli (ör. Enc. Irish Hist. «Rising of 1641»). yer_yama_ing.js:337 |
| 37 | kronoloji_ingiltere.js:1811 | Drogheda | 1649-09-11 | Enc. Irish Hist. «Drogheda (11 September 1649)» | **1649-09-21** | yer_yama_ing.js:340 |
| 38 | kronoloji_ingiltere.js:1818 | İrlanda Yerleşim Yasası | 1652-08-12 | BHO Firth & Rait «[12 August, 1652.]» | **1652-08-22** | yer_yama_ing.js:343 |
| 39 | kronoloji_ingiltere.js:1824 | Boyne | 1690-07-01 | Enc. Irish Hist. «1 July 1690 (old style; 12 July, new style)» | **1690-07-11** | ⚠ Kaynağın «12 July» ifadesi **anma günüdür** (Orange geleneği). Takvim karşılığı 11 Temmuz; `ic_not_takvim`'e yazılmalı. yer_yama_ing.js:346 |
| 40 | kronoloji_ingiltere.js:1831 | Limerick Antlaşması | 1691-10-03 | Oxford Companion «signed on 3 October» | **1691-10-13** | — |
| 41 | kronoloji_cok_ince_avrupa_amerika.js:115 | İspanyollar Kinsale'e çıktı | 1601-09-23 | Bagwell (1890) «on September 23 Don Juan disembarked» (O.S.) | **1601-10-03** | — |
| 42 | kronoloji_cok_ince_avrupa_amerika.js:122 | Kinsale Savaşı | 1601-12-24 | Bagwell «at daybreak on December 24» (O.S.) | **1602-01-03** | #34 ile eş |
| 43 | kronoloji_cok_ince_avrupa_amerika.js:129 | Kinsale teslimi | 1602-01-02 | Bagwell «capitulation (Jan. 2, 1602)» (yıl yeni üslup; 24 Aralık'tan sonra olduğu için 1602 doğru) | **1602-01-12** | — |
| 44 | kronoloji_sinir_nokta2.js:42 | Birleşme Yasaları (evren) | 1707-05-01 | #24 ile aynı | **1707-05-12** | #24 bağları |
| 45 | kronoloji_hindistan.js:272 | DHŞ fermanı (eş) | 1600-12-31 | #2 ile aynı | **1601-01-10** | #2 |

**Yerleşim günleri (5):** canlı uçlar yukarıdaki satırlara bağlı.
- 1607-05-13 → 1607-05-23: Jamestown, #5.
- 1650-09-03 → 1650-09-13: Edinburg, #31.
- 1660-05-29 → 1660-06-08: 12 uç, #14.
- 1707-05-01 → 1707-05-12: 26 uç, #24/#44.
- **1673-05-05 → 1673-05-15:** `yerlesimler_ek_atlantik_adalar.js:117` Jamestown (Saint Helena), `s.t` hollanda + `s.f` ingiltere. Kaynak "5 Mayıs 1673 teslim, Eski Takvim" (satır 121–122). Bu günde madde yok, açık D2 (§5).

## 2. İSVEÇ (9 olay satırı + 5 yerleşim günü = 14 kalem)

İskandinav ansiklopedileri (snl.no, lex.dk, SBL, NE) günü **takvim belirtmeden yerel (Jülyen/İsveç) gününde** verir. Danimarka ve İsveç bu tarihlerde Jülyen'deydi (Danimarka 1700'e, İsveç 1753'e dek). İki istisna var: snl «Lützen» Gregoryen veriyor; Polonya kaynakları Gregoryen veriyor.

| # | dosya:satır | olay | atlas | kaynak(lar) ve takvimi | **Gregoryen** | hüküm · bağ |
|---|---|---|---|---|---|---|
| 1 | kronoloji_isvec.js:175 | Lützen | 1632-11-06 | snl.no «Lützen»: «16. november 1632» (G). SBL/NE 6 Kasım (yerel J). kronoloji_almanya.js:231 1632-11-16 (G etiketli) | **1632-11-16** | A-TEYİT (iki bağımsız kaynak: snl G + SBL J). yer_yama_isvec.js:31 |
| 2 | kronoloji_isvec.js:182 | Oxenstierna naipliği | 1632-11-06 | gün = Lützen (Gustav Adolf'un ölümü) | **1632-11-16** | Lützen'le birlikte. yer_yama_isvec.js:32 |
| 3 | kronoloji_isvec.js:210 | Roskilde | 1658-02-26 | lex.dk «fredsslutning den 26. februar 1658» · snl «underteikna 26. februar 1658» · IEG-Mainz «1658 II 26» (üçü de yerel J, takvim notu yok) | **1658-03-08** | A (yerel Jülyen, üç kaynak aynı gün). Bağlar: olaylar_2s_0919.js:199 (**evren**) → 03-08 · antlasma_haritalari.js:1579 · CANLI 12 uç, `danimarka→isvec`: yerlesimler_avrupa.js:334 Rønne (Bornholm; f ucu yalnız), :362 Malmö, :363 Helsingborg, :366 Uddevalla · yerlesimler_ek7.js:96 Kristianstad, :98 Karlskrona |
| 4 | olaylar_2s_0919.js:199 | Roskilde (evren) | 1658-02-26 | #3 | **1658-03-08** | #3 |
| 5 | kronoloji_isvec.js:218 | Kopenhag Antlaşması | 1660-05-27 | lex.dk «den 27.5.1660» (yerel J) | **1660-06-06** | A. Kaydın ic_not_t zaten "Gregoryen 6 Haziran" diyor. Bağ yok |
| 6 | kronoloji_isvec.js:266 | Leszczyński seçimi | 1704-07-02 | dziejesejmu.pl «Elekcja … 12 lipca 1704» (Polonya G). 2 Temmuz = İsveç takvimi günü (İsveç+10). kronoloji_lehistan.js:407 1704-07-12 | **1704-07-12** | A-TEYİT (atlas içi çift + Polonya kaynağı). Düzeltme sonrası lehistan:407 ile mükerrer adayı |
| 7 | kronoloji_sinir_avrupa_bati.js:122 | Brömsebro (evren) | 1645-08-13 | snl, lex.dk 13 Ağustos (yerel J, takvim notu yok) | **1645-08-23** | A. Bağlar: antlasma_haritalari.js:1567 · CANLI 6 uç, `danimarka→isvec`: yerlesimler_avrupa.js:360 Visby, :364 Halmstad · yerlesimler_ek7.js:101 Östersund |
| 8 | kronoloji_isvec.js:375 | Åbo | 1743-08-07 | ic_not_t: 7 Ağu O.S. = 18 Ağu N.S. histdoc.net «final Peace Treaty of Aug. 17» (takvimsiz) **çelişiyor** | **1743-08-18** | A, **zayıf**: ikinci bağımsız kaynak bulunamadı, histdoc 17 Ağustos diyor. Öneri: uygula + `ic_not_takvim` beyanı, IEG-Mainz Åbo 1743 sayfası okununca teyit. Bağlar: yer_yama_isvec.js:64 |
| 9 | kronoloji_sinir_iskandinavya.js:31 | Åbo (evren) | 1743-08-07 | #8 | **1743-08-18** | #8 · CANLI yerlesimler_ek7.js:132 Lappeenranta `s.t` isvec + `s.f` rusya |

**Yerleşim günleri (5):**
- 1645-08-13: Brömsebro #7.
- 1658-02-26: Roskilde #3.
- 1743-08-07: Åbo #9.
- **1703-05-14 → Yam 1703-05-25, Koporye ayrı:**
  - **Yam** (`yerlesimler_ek29.js:1004`, `s.t` isvec + `s.f` rusya): Rus askerî-tarih kaynağı «14 (25) мая 1703» → **1703-05-25** (A-TEYİT).
  - **Koporye** (`yerlesimler_ek29.js:1009`): aynı kaynakta kuşatma 23 Mayıs–28 Mayıs O.S., teslim 27/28 Mayıs O.S. Atlasın 14 Mayıs'ı **Yam'ın günü**, Koporye'ye yanlış kopyalanmış. Hedef **1703-06-07 ya da 06-08**. ⚠ Tek kaynak (arama özeti), sayfa GET edilmedi. **BEKLET:** ikinci kaynak (Rus akademik: «Северная война» kronolojisi, Tarle) gerekli.
  - Bu günde evren maddesi yok; simülasyonda açık değil, ±30 günde başka madde kapatıyor.
- **1721-08-30 (Nystad):** CANLI kümede **0 uç**; canlı uçlar zaten 1721-09-10 (G). Eski gün yalnız ölü yamalarda duruyor: `yer_yama_1923_1945.js` 7 satır (2183, 7187, 7447, 7489, 7491, 7493…) ve `yer_yama_avrupa_isvec_1923.js:331-332` (Lappeenranta; üstelik 1721 yanlış, Lappeenranta 1743'e dek İsveç'te). §4'e bkz.

## 3. YUNANİSTAN (5 yerleşim günü; olay satırları zaten Gregoryen)

| # | eski gün | canlı uçlar (dosya:satır) | kaynak | **Gregoryen** | hüküm |
|---|---|---|---|---|---|
| 1 | 1864-05-21 | 14 uç, `birlesik-iyon-adalari→yunanistan`: yerlesimler.js:709 Çuha, :1610 Korfu, :1611 Ayamavra, :1838 Kefalonya, :1839 İthaki, :1840 Zaklise · yerlesimler_ek_adalar.js:102 Paksos | kronoloji_balkan.js:898 ic_not_t "21 Mayıs Jülyen → 2 Haziran" (madde zaten 06-02) | **1864-06-02** | A — madde doğru, harita eski günde. Değişmez 2 yakalamaz (12 gün < ±30) |
| 2 | 1912-10-08 | yerlesimler.js:1827 Bozbaba (Ay Strati) `isg.f` | TDV «limni»: «21 Ekim 1912'de Yunanlılar tarafından işgal edildi». Averof Yunan donanma kaydı: 8 Ekim (O.S.) | **1912-10-21** | A-TEYİT (iki bağımsız kaynak). Canlı Limni zaten 10-21; Bozbaba geride kalmış |
| 3 | 1912-10-18 | Canlı Taşoz **1912-10-30** (yerlesimler.js:697, TDV) — **zaten düzeltilmiş** | TDV «taşoz» 30 Ekim; Averof 18 Ekim O.S. = 31 Ekim | (30 Ekim kalır) | Canlıda iş yok. TDV esas, 1 günlük fark ic_not'ta. Eski gün yalnız ölü yamada (§4) |
| 4 | 1912-10-19 | Canlı Semadirek **1912-11-01** (yerlesimler.js:696, TDV semadirek) — **zaten düzeltilmiş** | TDV semadirek 1 Kasım = Averof 19 Ekim O.S. | (1 Kasım kalır) | Canlıda iş yok. Not: TDV «taşoz» maddesi Semadirek'i 30 Ekim'de anıyor; TDV kendi içinde çelişik, `ic_not`a yazılmalı |
| 5 | 1912-11-11 | yerlesimler.js:700 **Sisam** `s.f` · yerlesimler.js:1826 **İpsara** `isg.f` | Sisam: TDV «sisam» «(11 Kasım 1912)» takvimsiz; ikincil kaynaklar 11 Kasım O.S. = 24 Kasım N.S. İpsara: Averof «Psara on 21 October» (O.S.) = **3 Kasım** | Sisam **1912-11-24** · İpsara **1912-11-03** | **Sisam: KARAR GEREK.** TDV günü takvim belirtmiyor, Yunan O.S. gününün kopyası olduğu kuvvetle muhtemel. Öneri 24 Kasım + `ic_not_takvim` "TDV 11 Kasım = Yunan eski takvimi". Bağlar: olaylar_ek6.js:132 (**evren**) · devletler.js:17415 samos-prensligi `tabi t` · :17420. Hepsi birlikte. **İpsara: BEKLET**, tek kaynak; atlas Sakız'ın gününü kopyalamış |

**KOORDİNATÖR KARARI (EMRELİC 1 KASIM, 4 Kasım 2026):** Sisam **ÇEKİLMEZ**, 1912-11-11 kalır. TDV miladî günleri genellikle Gregoryen verir; takvimsiz bir TDV gününü Jülyen saymak varsayım olur. `ic_not`a "takvim belirsiz" yazılır. Takvimi açıkça veren bir Yunan akademik ya da Oxford kaynağı bulunursa o kaynağa göre değiştirilir (ikinci kaynak kampanyasında aranacak). Koporye, İpsara ve Åbo bekletmesi onaylandı.

## 4. Ölü/arşiv yamalardaki eski günler (haritayı etkilemez; `_sahiplik_uygula.py` yeniden koşarsa geri yazar)
- `yer_yama_1923_1945.js`: 1658-02-26 (1403, 1405, 1409, 2155, 2157) · 1645-08-13 (1401, 1407, 2159) · 1721-08-30 (7 satır) · 1707-05-01 (1147 ×9…) · 1607-05-13 (2651) · 1912-11-11 (259).
- `yer_yama_avrupa_isvec_1923.js:331-332` (1721-08-30, Lappeenranta).
- `yer_yama_egeadalari.js:34, 48, 62, 78, 94, 108`.
- `yer_yama_isg_yunan_kaynak.js:70, 72, 73, 74, 80, 81`.
- Öneri: canlı düzeltmeyle aynı commit'te bu satırlar da yeni güne çekilsin (ucuz, `sed` değil elle/betikle). Ya da dosya başına "ARŞİV — canlı değil" damgası. Hangisi olacağı KASA'nın kararı.

## 5. Açık kalan ve önerilenler
1. **4 İngiliz kırılması bugün de açık D2**, düzeltmeden sonra da açık kalır:
   - Jamestown 1607 (1 uç);
   - Edinburg 1650 (2 uç);
   - İskoçya Restorasyon 1660 (12 uç);
   - St Helena 1673 (2 uç).

   Madde `kronoloji_ingiltere.js`'te var ama o dosya evren dışı. Öneri: `kronoloji_sinir_*`'e dört sınır maddesi (Gregoryen günle), ya da evren genişletme kararı (OZET §5d).
2. **Mükerrer madde adayları** (düzeltme sonrası aynı gün):
   - ingiltere:563 ↔ cok_kuzey_amerika_k2:15 (Mayflower; biri ulaşma, biri sözleşme — ayrı olaylar, kalabilir);
   - isvec:266 ↔ lehistan:407 (Leszczyński — tek olay, biri silinmeli ya da bağlanmalı);
   - ingiltere:741 ↔ sinir_nokta2:42 (Birlik Yasaları — evren eşi, kalır);
   - ingiltere:1782 ↔ cok_ince:122 (Kinsale).
3. **Kaynak zayıf:**
   - #10 Commonwealth (Property Chronicle → BHO);
   - #26 1745 (el-kitabi; başlık-gün uyumsuz);
   - #36 1641 (el-kitabi).
4. **BEKLET (ikinci kaynak):** Koporye 1703 · İpsara 1912 · Åbo 1743 (zayıf çelişki).
5. **Uygulama sayısı (kesin, hemen):**
   - İngiltere 45 madde + 5 yerleşim günü, 43 canlı uç: Jamestown 1, Edinburg 1650 2, 1660 12, 1673 2, 1707 26 (Edinburg her iki tarihte ortak);
   - İsveç 9 madde + 22 canlı uç (Roskilde 12, Brömsebro 6, Åbo 2, Yam 2);
   - Yunanistan 16 canlı uç (İyon 14, Bozbaba 1, Sisam 1 — Sisam karar sonrası);
   - eş yamalar: yer_yama_ing.js 18 satır, yer_yama_isvec.js 3, yer_yama_almanya.js 1;
   - eş maddeler: kronoloji_hindistan.js:272, kronoloji_hollanda.js:224, kronoloji_almanya.js:728.
6. **Sıra önerisi:**
   1. İsveç + Yunan (küçük, kanıt atlasın içinde).
   2. İngiltere dosyası tek geçiş (`kronoloji_ingiltere.js` + `yer_yama_ing.js` aynı commit).
   3. 1707 / 1660 İskoçya yerleşimleri.
   4. `py arac/denetle.py` çıkış kodu.

   Simülasyon: yeni açık **0**.

## 6. Bulamadıklarım
- Britannica (403), IEG-Mainz Brömsebro/Kopenhag/Åbo sayfaları, SBL Karl X/XII makaleleri açılmadı. Brömsebro ve Kopenhag için kaynakta açık "a.st./n.st." cümlesi yok; Jülyen kabulü tarihsel takvim kuralına dayanıyor.
- İngiliz satırlarının kaynak alıntıları kayıtlardan okundu, sayfalar bu oturumda yeniden GET edilmedi.
- Alt ajanın web alıntıları WebFetch özetinden gelir; 15 kelime sınırına tam sadık olmayabilir.
- Okunacaklar (koordinatöre iletilecek): IEG-Mainz Åbo 1743 + Nystad 1721; JSTOR Michael Roberts, *The Swedish Imperial Experience* (Roskilde/Brömsebro o.s. notu); Samos 1912 hakemli makale (Sofulis birlik ilanı / Yunan çıkarması); Rus akademik Koporye 1703 kronolojisi.
