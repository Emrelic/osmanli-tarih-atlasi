# 41 · Safevî Devleti — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (ölçer: top100_olc.py safevi memluk song)

## Özet
- Künye 1 (`safevi`, 1501-07-01 → 1736-03-08, harita `safevi`). Yerleşim: 229 kayıt, en geniş an 1512 (202). Kırılma 85, **AÇIK 37** (±30 günde alâkalı kronoloji maddesi yok).
- Eksik madde: 6 öneri (Gîlân 1592, Hürmüz 1622, Kandehar el değiştirmeleri, 1732 Tahmasb II'nin indirilişi, 1722 Hotakî öncesi Kandehar 1709, Hazar kıyısı 1722-23 Rus işgali bağlayıcı madde).
- **En ağır 3 bulgu:** (1) `f:1501-07-01` Hicrî 907 başından (≈1501-07-20) ÖNCE, Şerûr (17 Tem 1501, ikincil) öncesi — TDV iki maddesinde birbirine aykırı (safeviler 907/1501, şah-ismail "ilkbahar 907/1502"); (2) Kandehar 1649-02-22 kırılması TDV (`kandehar`: "1058'de (1648)") ile çelişiyor; (3) Amasya Antlaşması atlasta 1555-05-29, TDV `amasya-antlasmasi` 11 Receb 962 / **1 Haziran 1555** (kronoloji satırı ve künye ikisi de) — evren dışı değil, `olaylar.js:92`.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| safevi | Safevî Devleti (İran) | 1501-07-01 | 1736-03-08 | TAM; tek künye. Evre bölünmesi yok (Tebriz → Kazvin → İsfahan başkent tek künyede) |
| afsar | Afşar Devleti (Nadir Şah) | — | — | ardıl (başka ajan/denetim); Safevî ile ardışıklık: t=1736-03-08 → Afşar f kontrolü ayrı |
Eksik evre: yok. 1722-1736 "Safevî kalıntısı" (II. Tahmasb, III. Abbas, Nadir naipliği) künye içinde kalıyor — kabul edilebilir (TDV: dinastik süreklilik 1736'ya kadar).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm / öneri |
|---|---|---|---|---|
| f (kuruluş) | 1501-07-01 | TDV `safeviler`: "907'de (1501) … Elvend'in ordusu Şerûr yakınında ağır yenilgiye uğratıldı" ve "Tebriz'e girerek tahta oturdu" (gün yok) | TDV `sah-ismail`: Şerûr ve Tebriz "907 ilkbaharı (1502)" (gün yok) — **TDV içi çelişki**. Cambridge History of Iran 6, Peter Jackson özeti (cambridge.org/core …/safavid-period/3B34DE5032689105970B775CC2D32ABD): "summer of 906-7 AH (1501)" (yalnız arama özeti okundu). Hayâtî 1554 *Tarih*'ine dayanan ikincil anlatı: taç 1 Cemâziyelâhir 907 = 22 Aralık 1501 (kaynağı doğrudan okunmadı); Şerûr 17 Temmuz 1501 (ikincil, Vikipedi yansıması — DAYANAK DEĞİL) | 1 Muharrem 907 ≈ 1501-07-20 (hesap; doğrulanmadı ±1 gün). Atlas f=07-01 Hicrî 906'ya düşer ⇒ TDV'nin "907 (1501)"i ile çelişir. Hicrî kural: 907 ∩ 1501 kesişiminin ilk günü ≈ **1501-07-20**. ÖNERİ: `f:"1501-07-20"` + ic_not "TDV safeviler 907 (1501) ∩ miladî 1501; ilk gün; TDV şah-ismail 1502 der — çelişki beyan; Tebriz'in fiilî alınışı için İranica 'Esmāʿīl I' ve EI² 'Ṣafawids' gün teyidi bekliyor". Çift teyit YOK; ikinci akademik kaynak "Erişilemeyen"e yazıldı. |
| f için alternatif | — | Hayâtî taç günü 1501-12-22 (ikincil) | — | Taç ≠ devletin başlangıcı olarak seçilirse yerleşim `s:` dönemleri (1501:49) de kayar; önerilmiyor, beyan yeter. |
| Çaldıran | 1514-08-23 | TDV `safeviler`/`caldiran-savasi`: "2 Receb 920 / 23 Ağustos 1514" | — (Treccani yalnız yıl) | DOĞRU (TDV esas, gün). 2. kaynak aranacak. |
| Amasya | 1555-05-29 | TDV `amasya-antlasmasi`: "11 Receb 962 / 1 Haziran 1555" | (TDV `safeviler`: yalnız "1555'ten itibaren barış") | **ÇELİŞKİ.** TDV esas ⇒ 1555-06-01. Atlasın 05-29'u kaynaksız görünüyor (`olaylar.js:92` ve künye satırı). Düzelt: iki satır. |
| Kasr-ı Şîrîn | 1639-05-17 | TDV `safeviler`: "1049'da (1639)" (yıl) | `olaylar.js:109` gün 17 Mayıs — gün için TDV'de dayanak yok | Gün TDV'de yok; ikinci kaynak aranmalı (Hicrî 1049 ∩ 1639 kesişim ≈ 1639-05-17 içeriyor mu: 1049 başı ≈ 1639-05-?? — hesaplanmadı). `kesinlik` yıl düzeyine alınabilir ya da "[gün teyitsiz]" notu. Erişilemeyenlerde. |
| 1722 İsfahan | 1722-11-10 | TDV `safeviler`: "30 Muharrem 1135'te (10 Kasım 1722) … teslim" (künye satırı bunu zaten yazıyor) | Treccani `safavidi`: yalnız 1722 | DOĞRU, TDV gün. 2. kaynak (gün) erişilemeyen. |
| t (son) | 1736-03-08 | TDV `nadir-sah--iran`: "24 Şevval 1148 / 8 Mart 1736" Nâdir Şah unvanını aldı | TDV `safeviler`: "1736'da Nâdir Şah unvanı ile tahta geçti"; Treccani: 1736 | DOĞRU. NOT: III. Abbas'ın indirilişi için ayrı gün yok; TDV `nadir-sah--iran`: II. Tahmasb 17 Rebîülevvel 1145 / **7 Eylül 1732** indirildi. Künye ozet'i "1722'den beri fiilen sona ermişti" diyor — tek künye için tutarlı. |

## c) Kronoloji
Değişmez 2 evreninde VAR (dosya:satır):
- 1501 kuruluş: `olaylar_ek11.js:114` Erzurum/Van Safevî'ye geçti; `:121` Hemedan; `:130` Yezd; `:137` Diyarbekir seferi; `:144` Bağdat 1508; `:153` Merv 1510. (Tebriz'in alınışı/taç maddesi Değişmez 2 evreninde AYRI yok; yalnız künye `kronoloji:[]` içinde `1501-07-01` = evren dışı.)
- Çaldıran `olaylar.js:69` (1514-08 — gün alanı "23 Ağustos 1514" fakat `t:"1514-08"` AY hassasiyetli ⇒ kural "gün yaz" ihlali: `t:"1514-08-23"` yapılmalı; ölçer 'Çaldıran' ±30 g içinde alâkalı sayıyor ama t ay → ayın 1'ine genişler = 22 gün sapma, Değişmez 2'yi sınır olayı için zayıflatır).
- Irakeyn/Bağdat 1534-12-04 `olaylar.js:86`; Amasya `olaylar.js:92` (**tarih hatalı, bkz. b**); Kasr-ı Şirin `olaylar.js:109`; Kandehar 1556 `olaylar_2s_0919.js:511`; Şirvan 1538 `olaylar_ek17.js:279`; Bahreyn 1602 `olaylar_ek13.js:288`, 1700-ler Ummanlı `:299`; Nâdir öldürüldü `olaylar_ek11.js:212`.
- 1722 İsfahan'ın düşüşü: yalnız künye `kronoloji:[]` (evren dışı) — Değişmez 2 evreninde madde AYRI aranmalı: `grep "İsfahan" olaylar*` yalnızca Rus-İran 1723/1724 maddelerini veriyor (Petersburg, İstanbul Mukāsemenâmesi); **1722-11-10 İsfahan düştü maddesi evren içinde yok** (ölçülmedi: tam grep yalnız ana dosyalarda). 
EKSİK (önerilen satırlar — kaynak bulunan yıl düzeyinde; gün verilmedi):
```
{ t:"1592-01-01", kesinlik:"yil", b:"I. Abbas Gîlân'ı Safevî devletine kattı", tur:"toprak-kazanc", yer_id:"Lâhîcan", kaynak:"TDV `gilan`: Şah Abbas'ın Gîlân'ı 1592'de hâkimiyetine aldığı (yıl; gün yok) · 2. kaynak: erişilemeyen" }
{ t:"1622-05-01", kesinlik:"ay", b:"Safevîler İngiliz donanmasıyla Hürmüz'ü Portekiz'den aldı", tur:"toprak-kazanc", yer_id:"Hürmüz Adası", kaynak:"TDV `hurmuz`'da bulunamadı (madde adada/bölgede dayanak vermiyor); gün/ay için Iranica 'Hormuz' ve Boxer/Subrahmanyam — ERİŞİLEMEDİ, madde GÜN TEYİDİ BEKLİYOR" }
{ t:"1722-11-10", kesinlik:"gun", b:"İsfahan Gilzai Afganlarına teslim oldu — Şah Sultan Hüseyin tahttan indi", tur:"fetih", yer_id:"İsfahan", kaynak:"TDV `safeviler`: «Sultan Hüseyin Şah 30 Muharrem 1135’te (10 Kasım 1722) … teslim olmak zorunda kaldı.»" }
{ t:"1732-09-07", kesinlik:"gun", b:"Nâdir II. Tahmasb'ı tahttan indirdi, bebek III. Abbas'ı tahta çıkardı", tur:"hukumdar", yer_id:"İsfahan", kaynak:"TDV `nadir-sah--iran`: «17 Rebîülevvel 1145 (7 Eylül 1732)» " }
{ t:"1736-03-08", kesinlik:"gun", b:"Mûgân'da Nâdir 'Şah' unvanını aldı — Safevî hânedanı sona erdi", tur:"son", yer_id:"Mûgân", kaynak:"TDV `nadir-sah--iran`: «24 Şevval 1148 / 8 Mart 1736» · TDV `safeviler`: 1736" }
{ t:"1709-04-21", kesinlik:"gun", b:"Kandehar'da Gilzai (Mîr Veys) isyanı: şehir Safevî idaresinden çıktı", tur:"toprak-kayip", yer_id:"Eski Kandehar (Şehr-i Köhne)", kaynak:"TDV `kandehar`: «1121 (1709)'de Gilzailer ayaklandı» — gün yok (atlas 04-21 kaynaksız; ay/gün için Iranica 'Hotakī'); öneri t:1709-01-01 kesinlik yil" }
```
Not: 1722-11-10 maddesi künye içinde var; evren içine taşınması gerekir. Hicrî dönüşüm: 30 Muharrem 1135 = 10 Kasım 1722 (TDV); Jülyen kaynak tarih — Rus kaynak günü olmadığı için takvim hatası riski yok (1582 sonrası olay, TDV Gregoryen verdi).

## d) Harita uyumu
Ölçer: kırılma 85, AÇIK 37. Yerleşim sayısı 1501:49 → 1512:202 (en geniş) → 1600:128 → 1633:154 → 1732:126.
Sınıflama (37): ~22 tanesi bilinen bir madde ile aynı olay ama yer adı maddede yok (ölçerin alâkalı eşleşmesi `yer`/`yer_id` adıyla); ~15'i kaynaksız/şüpheli tarih. En kalabalık/önemli:
| gün | yerleşimler | öneri |
|---|---|---|
| 1507-01-01 kazanç | Babū, Hasankeyf, Qaţţīnah, Ḩīmū | `olaylar_ek11.js:137` (Diyarbekir seferi, t:1507-?) yer'e Hasankeyf ekle; ya da dönem t'yi madde gününe çek (31 g fark). Hasankeyf Akkoyunlu→Safevî 1507 TDV doğrulaması: çekilemedi. |
| 1510-12-02 kazanç | Bocnûrd, Bîrcend, Dihistan, Ebîverd | Merv Savaşı maddesi (`olaylar_ek11.js:153`, t:1510-12-02) ile aynı gün; ölçer yer eşleşmedi ⇒ madde `yer:`ine Horasan şehirlerini ekle (kaynak: TDV `sah-ismail` yalnız "916 (1510)" der, GÜN YOK; 1510-12-02 kaynakla DOĞRULANMADI → `kesinlik` yil olmalı). |
| 1514-08-23 kayıp | Belh | Belh Çaldıran günü Safevî'den "kayıp"? Belh 1514-08-23'te Çaldıran'la ilgisiz (Özbek/Safevî Horasan). **Yanlış dönem sınırı şüphesi**: Belh t ya Şeybânî sonrası 1510-1512 Özbek-Safevî çekişmesine bağlanmalı. Kaynak aranacak (EI², Iranica "Balkh"). |
| 1514-09-06 kayıp | Refahiye | Çaldıran sonrası Doğu Anadolu: Refahiye Safevî'den 1514'te mi? Refahiye Dulkadir/Osmanlı sınırı; atlas 09-06 kaynaksız → sil/yap `kesinlik` yıl. |
| 1515-09-19 kayıp | Babū, Ḩīmū | Âmid/Diyarbekir fethi maddesi (1515-09-15) +4 gün; ölçer alâkasız saydı → maddeye yer ekle (`olaylar_ek.js:64`). |
| 1524-01-01 kazanç | Cübeyl, Katîf, Lahsa, Ukayr | Safevî Körfez kıyısı 1524: kaynak yok; 1550 Osmanlı Lahsa/Katîf ilhakı ile eşleşiyor. Safevî'nin Lahsa'yı 1524'te alışı için ikinci kaynak çekilemedi ⇒ ya `kd:` (beyanlı yaklaşıklık) ya sil. |
| 1534-06-23 kayıp | Erciş, Eski Van | Irakeyn Seferi 1534-12-04 maddesi (Bağdat) + Van 1548; 1534 Haziran'da Van Safevî'den alınmadı (Van 1548'de fethedildi; Van 1534 yalnız geçici). **Yanlış sınır**: Erciş/Van 1534-06-23 → 1548-08-24 olmalı. Kaynak: TDV `van` (çekilemedi) + `olaylar` Van fethi. |
| 1534-12-04 kayıp | Kasr-ı Şîrîn, Kifri, Tuz Hurmatu | Bağdat maddesiyle aynı gün; ölçer yer eşleştiremedi ⇒ maddeye "Irâk-ı Arab şehirleri" ekle. |
| 1538-01-01 kazanç | Şeki (Nuha) | Şirvan 1538 (`olaylar_ek17.js:279`, 1538-10) ile uyumlu; t:1538-10 olmalı ya da yıl düzeyi. |
| 1548-08-24 kayıp | Bacirge, Balıklı, Eski Van, Gōrabī | Van maddesi var (31 g dışı); madde t'sini 1548-08-24'e hizala. |
| 1550-01-01 kayıp | Cübeyl, Ukayr | Lahsa/Katîf ilhakı (`olaylar`) ile aynı yıl; gün yok. |
| 1585-04-19 kayıp | Bâne | Bâne 1585-04-19: kaynaksız; Tebriz'in fethi 1585-09-25 (`olaylar_ek2.js:106`) daha geç. Tarih şüpheli. |
| 1592 / 1596 kazanç | Lâhîcan, Reşt, Enzeli / Âmül, Sârî, Bârfurûş | 1592 Gîlân (TDV `gilan` 1592) madde YOK ⇒ yukarıdaki satır; 1596 Mâzenderan için TDV'de dayanak bulunamadı (`gilan` maddesi Mâzenderan'ı anmıyor) ⇒ kaynak ara, yoksa `kd:` beyan. |
| 1622-05-01 kazanç | Hürmüz, Kişm, Bender Abbas | Madde eksik (yukarı). |
| 1622-06-22 kazanç | Eski Kandehar | TDV `kandehar` bu geçişi anmaz (1648'e atlar); atlas tarihi kaynaksız. |
| 1623-11-28 kazanç / 1638-12-24 kayıp | Kasr-ı Şîrîn, Halepçe, Kifri, Tuz Hurmatu | Bağdat'ın Safevîlere kaybı (1623) maddesi var; Kasr-ı Şîrîn bölgesi aynı olay ⇒ maddeye ekle. 1638-12-24 Bağdat'ın geri alınışı (IV. Murad) maddesi aynı. |
| 1649-02-22 kazanç | Eski Kandehar | TDV: "1058'de (1648)". **Atlas 1649-02-22, TDV'ye göre 1058 H sonrasında (1059)**. Düzelt: `t:1648-01-01` kesinlik yil ya da gün kaynağını ikinci akademik kaynakla bul (İranica 'Kandahar'). |
| 1722-08-08 … 1724 | Ağraham burnu, Astara, Lenkeran, Mahmudâbâd, Salyan, Şâbüran, Kasr-ı Şîrîn (1723-10-01) | Rus Derbend (1722-08-23) ve Petersburg (1723-09-23) maddeleri VAR ama yer adları farklı; 1722-08-08 Derbend'in alınışından ÖNCE (Rus kuvvetleri Derbend'e 23 Ağustos 1722) → tarih kaynaksız. Kasr-ı Şîrîn 1723-10-01: Osmanlı Kirmanşah'ı 1724'te alır; 1723-10-01 şüpheli. |
| 1724-05-06 / 1730-08-12 / 1731-11-15 / 1732-01-08 | Kotur | Osmanlı-Safevî Tebriz/Hekimoğlu maddeleri VAR ama Kotur anılmıyor; Kotur dönemleri Osmanlı-Safevî salınımı: maddelere yer ekle. |
| 1732-01-21 / 1735-03-21 / 1735-08-23 | Mahmudâbâd, Salyan, Şâbüran, Ağraham | Ahmed Paşa (1732-01-10?) ve Gence (1735-03-21) maddeleri VAR: yer adı eksik. 1735-08-23 Rus Terek sınırı maddesi VAR (`Kutsal Haç`). |
En geniş an 1512: büyük şehirler (Tebriz, Hemedan, İsfahan, Şiraz, Meşhed, Herat?, Bağdat 1508-1534) Safevî mi: Herat 1510 Safevî (TDV şah-ismail Merv/Herat) ✓ kaynak ölçülmedi; Belh/Buhara Özbek — Belh'in Safevî olması şüpheli. Yerleşim sayısı sıfır değil; haritada görünür.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `safevi`: `f` → "1501-07-20" (ic_not Hicrî 907∩1501, TDV çelişkisi beyanıyla) — Emre'ye sor: çelişki beyanı gerektirir.
2. `data/olaylar.js:92` Amasya `t:"1555-05-29"` → `"1555-06-01"`, `gun:"1 Haziran 1555 (11 Receb 962)"`, kaynak TDV `amasya-antlasmasi`; künye `kronoloji` satırı da (`devletler.js` safevi Amasya `1555-05-29` → 06-01); ilgili yerleşim `s:` dönemleri (Basra/Van/Bağdat sınır kırılmaları) ±30 g kontrol.
3. `data/olaylar.js:69` Çaldıran `t:"1514-08"` → `"1514-08-23"` (gün; TDV 2 Receb 920 / 23 Ağustos 1514).
4. `1649-02-22` Kandehar kırılması: TDV 1058 (1648) ⇒ kaynak teyidi gelene dek `kesinlik:yil` beyanı.
5. Yeni madde satırları (c bölümü): 1592 Gîlân, 1722-11-10 İsfahan (evren içine), 1732-09-07 Tahmasb II, 1736-03-08 Nâdir şah, 1709 Kandehar yıl.
6. 1534-06-23 Van/Erciş kırılması yanlış: 1548-08-24'e hizala (Van maddesi var).
7. Belh 1514-08-23 ve Refahiye 1514-09-06 kırılmaları kaynaksız — kaldır ya da kaynak bul.

## Erişilemeyen kaynaklar
- Encyclopaedia Iranica, «Esmāʿīl I Ṣafawī» (iranicaonline.org) — Tebriz'e giriş/taç günü (1501 Temmuz / Aralık?), Şerûr günü.
- Cambridge History of Iran vol.6 «The Safavid period» (H. R. Roemer) — f günü; Şerûr 17 Tem 1501? (cambridge.org/core/books/cambridge-history-of-iran/safavid-period/3B34DE5032689105970B775CC2D32ABD, sadece özet).
- Iranica «Kandahar» / «Hotakī» — Kandehar 1648/1649 ve 1709 günleri.
- Iranica «Hormuz» — Hürmüz 1622 günü; Iranica «Gīlān» — 1592.
- JSTOR: Floor/Herzig vb. «Iran and the World in the Safavid Age» — Kasr-ı Şîrîn (Zuhab) 1639 günü (stable URL aranacak; soru: "Zuhab antlaşması hangi gün imzalandı?").
- Takvim notu: 1582 öncesi günler Jülyen; hesap ≈1 Muharrem 907 ≈ 1501-07-20 "doğrulanmadı".
