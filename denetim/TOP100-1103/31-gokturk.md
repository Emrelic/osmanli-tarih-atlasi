# 31 · Göktürk Kağanlığı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 ~23:30

## Özet
- Künye 4: `gokturk-1` (552-582), `dogu-gokturk` (582-630), `bati-gokturk` (582-659), `dogu-gokturk-2` (682-745). Kırılma 3+2+4+2; ±30 günde alâkalı maddesi olmayan: 0 (ölçer).
- Haritada fiilen görünmüyor denecek kadar az: yerleşim sayısı 2, 1, 3, 1 (en geniş an 562: 2; 651: 3). Kağanlık petek boyası bu yüzden Orhun'da bir nokta ve Batı kol için 3 nokta.
- En ağır 3 bulgu: (1) Yerleşim sayısı 1-3: Birinci Göktürk'ün Orta Asya/Sogdiana/Çin sınırı yerleşimleri yok; harita Göktürkler'i temsil edemiyor. (2) 630 sonrası 52 yıllık (630-682) boşluk ve Doğu Göktürk künyesi t=630-01-01 iken Jieli esiri 630-05-02 (atlas kronoloji_sinir_dogu_500_1281.js:5440) → künye 4 ay erken bitiyor. (3) TDV'de "Göktürkler" ayrı madde yok (slug 404); tüm künyeler tek TDV `turk` maddesine dayanıyor (ikinci bağımsız akademik kaynak yok); Batı Göktürk t=659 TDV `turk` maddesinde yok, `talas-savasi`ne dayanıyor.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| gokturk-1 | Birinci Göktürk Kağanlığı | 0552-01-01 | 0582-01-01 | 2 yerleşim |
| dogu-gokturk | Doğu Göktürk Kağanlığı (I) | 0582-01-01 | 0630-01-01 | 1 yerleşim |
| bati-gokturk | Batı Göktürk Kağanlığı | 0582-01-01 | 0659-01-01 | 3 yerleşim |
| dogu-gokturk-2 | Doğu Göktürk Kağanlığı (II) | 0682-01-01 | 0745-01-01 | 1 yerleşim |
İlgili ama bu devlete sayılmayan: `tohar-yabgu` (630-759 Batı Göktürk vasalı), `kirgiz-erken`, `turges` (717-766), `uygur-kaganligi` (745-), `xueyantuo-kaganligi`.
Eksik evre: 630-682 (Tang hâkimiyeti / "Fetret"): künye yok. TDV `turk`: 630'da Doğu Göktürk Devleti Çinliler tarafından ortadan kaldırıldı, 682'de İlteriş kağan oldu — iki künye arası 52 yıl "boşluk" TDV ile tutarlı; beyansız. Öneri: bu dilimde Ötüken'in sahibi için `ic_not`/beyan (ör. Tang vesayeti: Dingxiang/Chanyu protektoratı — kaynak okunmadı) ya da bilinçli `__BOSLUK__`.

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm |
|---|---|---|---|---|
| gokturk-1 f | 0552-01-01 | TDV `turk` (2026-11-03 okundu): «yerine bağımsız Göktürk Devleti kuruldu (552)» | Zhou shu 50 (Wikisource, okundu): «魏廢帝元年正月» Tumen Rouran'ı yendi, Yili Kağan oldu (= Wei Feidi yıl 1, 1. ay; Feidi 552'de başlar → Şubat 552) | Atlas kronoloji_sinir_dogu_500_1281.js:5364-5376 `0552-02-10` gününü zaten yazıyor (Zhou shu); künye f `0552-01-01` yıl hassasiyeti. İki kaynak (TDV yıl; Zhou shu 552 yılı + 1. ay) uyumlu. Kabul. Gün 02-10 ay takvimi çevirisi bu oturumda doğrulanmadı ("doğrulanmadı"). |
| gokturk-1 t / dogu f / bati f | 0582-01-01 | TDV `turk`: «582’de Batı Göktürk Devleti’nin bağımsızlığını ilân etti» (Tardu) | Zhou shu 50: bölünmeden söz etmiyor (okundu); Sui shu (ctext: erişim engelli, çekilemedi). Web özetleri 581 (Taspar ölümü) / 583 (Sui shu) / 603 (resmî bölünme) veriyor ama bunlar Vikipedi yansımasıdır, dayanak değil. | TDV-esas 582. Çelişki (581/583/603) için ikinci akademik kaynak bulunamadı → `ic_not`: "TDV 582; Sui shu 583 ve 603 doğrulanamadı". Künye değişikliği önerilmiyor. |
| dogu-gokturk t | 0630-01-01 | TDV `turk`: «630’da Doğu Göktürk Devleti Çinliler tarafından ortadan kaldırıldı» | atlas kronoloji_sinir_dogu_500_1281.js: `0630-05-02` Jieli Kağan esir düştü (kaynak kendi `kaynak:` alanında Tang kaynaklı; ben okumadım); Yinshan savaşı 27 Mart 630 (web özeti, dayanak değil) | Yıl TDV ile teyit. Künye t `0630-01-01` ile Jieli'nin esiri 630-05-02 arasında 4 ay: künye 630'un başında bitiyor, Göktürk idaresi bahar 630'a kadar sürdü. Öneri: `t:"0630-05-02"` (kaynak: Jiu Tangshu/Zizhi tongjian — çekilemedi) YA DA `ic_not_t` ile "yıl hassasiyeti" beyanı. Atlas yaklaşıklık kuralı (tarih uydurma yok) gereği şimdilik YIL (TDV) kalır; ek kaynak bekliyor. |
| bati-gokturk t | 0659-01-01 | TDV `talas-savasi`: «T’ang hânedanı, 659 yılında Batı Göktürkleri’ni kendisine bağlayıp» (atlas künyesinden alıntı) | TDV `idil-bulgar-hanligi`/`hazarlar` 630 (parçalanma); `turk` md. Batı için 659 vermiyor (yalnız 630 civarı: T'ung Yabgu'nun öldürülmesi, beyliklere ayrılma) | İki TDV ucu çelişik 630↔659 (atlas `ic_not_t` ile beyan etmiş). 657 (Ashina Helu'nun yakalanması, Çin kaynakları; web özeti) doğrulanamadı. Hüküm: değişiklik yok; ikinci akademik kaynak (Cambridge History of Early Inner Asia, Sinor 1990; Golden 1992) gerekli. |
| dogu-gokturk-2 f | 0682-01-01 | TDV `turk`: «İlteriş unvanıyla Kağan ilân edilerek» (682) | Kül Tigin/Bilge Kağan yazıtları (birincil): kuruluş yılı tarihsiz; ikinci bağımsız akademik kaynak OKUNAMADI | Kabul (TDV). |
| dogu-gokturk-2 t | 0745-01-01 | TDV `turk`: «745 yılında tamamen yıkıldılar» | TDV `dokuz-oguzlar` 744 (atlas künye notu) | Çelişki 744↔745 atlas `ic_not`ta; 745 Uygur Kutlug Bilge Kül Kağan'ın Basmıl yenişi (kronoloji_sinir_asya3_1024.js:32 t:0745 Uygur) ile bitişik; kabul. |

## c) Kronoloji
Var (evren İÇİ): olaylar_ortacag_bozkir.js:9 (567 İstemi–Bizans elçiliği); kronoloji_sinir_asya3_1024.js:38-41 (553 Bumin ölümü, 572 Mukan ölümü, 582 Tardu); kronoloji_sinir_dogu_500_1281.js:5364 (552-02-10 Tumen, İlig Kağan; Zhou shu), 5415 (582 bölünme), 5440 (630-05-02 Jieli esiri); olaylar_ortacag_cin.js:19 (626-09-25 Wei Nehri antlaşması); kronoloji_sinir_asya_zincir_1024.js:77-78 (630 Tohâristan yabgusu Tardu; Xueyantuo).
Var, EVREN DIŞI: dört künyenin kendi `kronoloji:[...]` listeleri (devletler.js:20200-20220, 22185-22190): 0552, 0553, 0557 (Akhun yıkıldı), 0567, 0572, 0581, 0585 (Işbara Sui'ye bağlandı), 0603, 0630 ×2, 0659, 0682, 0692 (Kapgan), 0716 (Kapgan öldü), 0723, 0742 (Basmıl/Uygur isyanı), 0745.
EKSİK (evren içine alınması önerilir, hepsi yalnız `kesinlik:"yil"` ve TDV `turk` kaynaklı; okunduğu cümle künye listelerinde):
```
{ t:"0557-01-01", kesinlik:"yil", b:"Göktürkler Akhun (Eftalit) devletini yıkıp Batı Türkistan'ı aldı", taraflar:["gokturk-1","eftalit"], kaynak:"TDV `turk` (künye kronolojisinde 'Akhun Devleti yıkıldı')" }
{ t:"0585-01-01", kesinlik:"yil", b:"Işbara Kağan Sui hanedanının üstünlüğünü kabul etti", taraflar:["dogu-gokturk"], kaynak:"TDV `turk`" }
{ t:"0682-01-01", kesinlik:"yil", b:"Kutluğ İlteriş unvanıyla kağan ilan edildi; II. Göktürk Devleti kuruldu", taraflar:["dogu-gokturk-2"], kaynak:"TDV `turk` «İlteriş unvanıyla Kağan ilân edilerek»" }
{ t:"0745-01-01", kesinlik:"yil", b:"II. Göktürk Devleti tamamen yıkıldı (Basmıl-Uygur-Karluk)", taraflar:["dogu-gokturk-2","uygur-kaganligi"], kaynak:"TDV `turk` «745 yılında tamamen yıkıldılar»; `dokuz-oguzlar` 744" }
```
Birincil: Kül Tigin (732) ve Bilge Kağan (735) yazıtlarında «Bumin Kağan, İstemi Kağan» (kitabe başı; okunmadı, belgesiz tarihsiz); Tonyukuk yazıtı ~720; Bilge/Kül Tigin tarihleri 732/735 madde olarak yazılabilir ama kaynak okunmadı.

## d) Harita uyumu
Açık kırılma: 0 (ölçer ±30 g). Ama bu "temiz" değil: yerleşim 1-3 olduğundan kırılmaların kendisi nokta başına tek (Orhun/Karakurum, Suyab, vb.). Haritada 552-582 arasında en fazla 2 yerleşim Göktürk: Birinci Göktürk Kağanlığı Moğolistan'dan Aral/Hazar'a uzandı (TDV `turk`: Akhun yıkıldı, Batı Türkistan alındı; İstemi Bizans'a elçi 567) — bu bölge yerleşimsiz kalıp komşu peteklere (Sasani, Tuyuhun, Çin) emilir. Dolayısıyla Göktürk haritada fiilen yok; kronoloji-harita doğrulaması (Değişmez 2) madde-yerleşim eşleşmesinden ibaret kalıyor.
`s:` dönemi gereken yerleşim adayları (kaynak doğrulaması öncesi, yalnız yön): Ötüken/Orhun (var), Suyab (Batı kol başkenti; künye kronolojisinde `odak_yer:["Suyab"]` var), Talas, Taşkent (Çaç), Semerkant/Sogdiana (Batı Göktürk nominal; atlas TDV `Semerkant` md. alıntısı sinir_dogu:5427 civarı), Balh/Toharistan (Tohar-yabgu ayrı künye), Kuça/Karaşehr (Tang 640-658), Hami/Turfan, Gazne (Akhun sonrası; atlas BOŞLUK beyanı), Üstyurt platosu (582 Batı bağımsızlığı, künye `odak_yer`). Her biri için "o devirde var mıydı → kimin" zinciri (merdiven) yürütülmeli; bu oturumda sahiplik kaynakları çekilmedi ("ölçülmedi").

## Önerilen düzeltmeler (KASA için)
1. `dogu-gokturk` `t` 0630-01-01 → ya `0630-05-02` (Tang kaynağı okunduktan sonra) ya da `ic_not_t`'ye Jieli esiri 630-05-02'yi yaz (şimdilik hüküm: yıl hassasiyeti, TDV).
2. `bati-gokturk` t: iki TDV ucu (630/659) zaten beyanlı; ikinci akademik kaynak gelene dek dokunma.
3. 630-682 arası beyan (Tang vesayeti) — künye eklenmeden önce Ötüken için `__BOSLUK__` beyanı.
4. Evren içine yukarıdaki 4 madde (kesinlik yıl).
5. Göktürk yerleşimlerini artır (d bölümü); öncelik Suyab, Talas, Çaç.

## Erişilemeyen kaynaklar
- Sui shu 84 «Tujue zhuan», Jiu Tangshu 194, Zizhi tongjian (ctext.org: otomatik erişim engelli): Soru: Tardu'nun bağımsızlığı 582 mi 583 mü; Doğu Göktürk'ün sonu (Jieli esiri 630-05-02, Yinshan 630-03-27).
- Sinor ed., *Cambridge History of Early Inner Asia* (1990) ch. 11 (Sinor & Klyashtorny, "The Türk Empire"); Golden 1992 *Introduction to the History of the Turkic Peoples* (archive.org dosya adı bulunamadı; `golden_202303_djvu.txt` 404): 552/582/630/657-659/682/744-745 tarihleri.
- Kül Tigin (732) / Bilge Kağan (735) yazıtları neşri (Tekin, *Orhon Yazıtları*, TDK 1988): kuruluş/ulus anlatısı ve tarih sorusu.
- TDV `gokturkler` (404, madde yok); TDV `turk` md. 100.000. karakter sonrası (yalnız ilk %18 okundu; Doğu/Batı kol ayrıntısı olabilir).

## JSTOR teyidi (HAVVA SALI, tarayıcıdan, 4 Kasım 2026 gecesi; aktarım)
- Jieli'nin esareti 630 ve Batı Göktürk sonu 657/659: JSTOR'da gün/ay bulunamadı. Aday: J. K. Skaff, *Journal of World History* 15/2 (2004) s. 117-153 — okunmadı.
