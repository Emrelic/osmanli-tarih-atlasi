# MÖ 2. tur kaynak doğrulama — PARÇA 1 (Roma ve İtalya/Sicilya)

Yöntem: her hüküm için sayfa gerçekten WebFetch ile okundu (araç küçük bir model ile özetliyor; alıntılar onun döndürdüğü cümlelerdir). WebSearch yalnız aday bulmak için kullanıldı. MÖ yıl astronomik: MÖ n = -(n-1). Veri: veri.json / yer.json (bu oturumda yeniden okundu).

Not: roma künyesinin gerçek id'si `roma-kralligi` (roma-krallik değil).

## 0. Okunan sayfa listesi (sayfa-ID: URL)
- P1 LacusCurtius Cass. Dio 51 — penelope.uchicago.edu/Thayer/E/Roman/Texts/Cassius_Dio/51*.html
- P2 Dio 53 — .../Cassius_Dio/53*.html
- P3 Plutarkhos Marcellus (Thayer) — .../Plutarch/Lives/Marcellus*.html
- P4 Livius.org Syracuse — livius.org/articles/place/syracuse/
- P5 Thukydides 6 (MIT, Crawley) — classics.mit.edu/Thucydides/pelopwar.6.sixth.html
- P6 Thukydides 5 (MIT) — .../pelopwar.5.fifth.html
- P7 Polybios 3 — .../Polybius/3*.html
- P8 Polybios 1 — .../Polybius/1*.html
- P9 Treccani «Tarquinia» — treccani.it/enciclopedia/tarquinia/
- P10 Treccani «Lentini» — treccani.it/enciclopedia/lentini/
- P11 Enciclopedia Italiana «Messina» — treccani.it/enciclopedia/messina_(Enciclopedia-Italiana)/
- P12 Diodoros 13 (13D) — .../Diodorus_Siculus/13D*.html
- P13 Diodoros 11 (11B) ve P14 (11A)
- P15 Dionysios Hal. 1.44-71 (1C), P16 Dionysios (5A sayfası: ilk paragraf), P17 Dionysios 1A
- P18 attalus.org/docs/ej_fasti.html (Fasti Praenestini/Cumanum)
- P19 Suetonius Vespasianus (Thayer)
- P20 TDV «İstanbul» md.; P21 TDV «Atina» md.
- P22 Treccani «Milano»; P23 Treccani «Marsiglia»
- P24 Polybios 2 — .../Polybius/2*.html
- P25 Livius.org Livy Periochae 21-25
- P26 Livy 8 (thelatinlibrary.com/livy/liv.8.shtml); P27 Livy 26; P28 Livy 23
- P29 Caesar BC 2 (Latin Library); P30 Strabon 4A (Thayer); P31 Plutarkhos Sulla (Thayer); P32 Diodoros 16D
- P33 Treccani «Roma» (iki bölüm); P34 Livius.org Theodosius I
Toplam başarıyla okunan: 36 sayfa/parça. Başarısız (404/timeout/yönlendirme): Perseus Livy 25.31, Thukydides Perseus (içerik yok), Livy 25 Thayer, Ovid Fasti Thayer, Caesar BC Thayer, Dionysios 1.74-75/5 Thayer ilk deneme, Livius.org Byzantium (timeout), Livius roman-calendar, Wikisource Herodotos.

## 1. Künye f/t sınaması

| id | atlas f / t | hüküm | kaynak ve okunan cümle | somut değişiklik |
|---|---|---|---|---|
| roma-kralligi f | -0752 (MÖ 753) | KESİN-DOĞRU (gelenek, 753 Varro). Künyede kaynak olarak Dionysios gösterilmiş ama Dionysios 753 vermez | P33 Treccani: «fondazione di Roma da parte di Romolo al 754 o 753 a.C.» · P15 Dionysios 1.71.5: «first year of the seventh Olympiad» (Loeb notu: 751 BC) | f -0752 kalsın; `kaynak:`tan "Dionysios 1.74-75" kaldır ya da "Dionysios MÖ 752/1 verir; Varro 753 esas" yaz. ic_not: gelenek tarihi |
| roma-kralligi t / roma-cumhuriyeti f | -0508 (MÖ 509) | KESİN-DOĞRU (Varro/gelenek). ÇELİŞKİLİ-KAYNAKLAR: Dionysios Ol. 68 başı, Isagoras arkhon = MÖ 508/7 (-0507) | P33: «la cacciata di Tarquinio il Superbo nel 509» · P16 Dionysios: monarşi «at the beginning of the sixty-eighth Olympiad», Isagoras arkhon, Loeb notu 507 BC · P7 Polybios 3.22: antlaşma «consulship of Lucius Junius Brutus», Xerxes'ten 28 yıl önce (MÖ 509 sonucu 480+28) | Künye -0508 kalsın (gelenek, Treccani). YER Roma s: `-0507` ucu Dionysios'a dayanıyor; künyeyle uyumsuz: s ucunu -0508'e çek |
| roma-cumhuriyeti t / roma-imp f | -0026-01-16 (16 Oca 27) | KESİN-DOĞRU (gün dahil) | P18 Fasti Praenestini: 16 Ocak'ta «Caesar was called Augustus … consul for the seventh time, Agrippa for the third» · P2 Dio 53.16: «the name Augustus was at length bestowed upon him by the senate». Not: Ovid Fasti 1.589 13 Ocak verir (OKUNAMADI: Ovid sayfası alınamadı, dolaylı WebSearch özeti) | Değişiklik yok. 13 Oca (cumhuriyetin iadesi, Fasti Praen. «chaplet of oak») ayrı olay; künye sınırı 16 Oca |
| roma-imp t | 0395-01-17 | KESİN-DOĞRU | P34 Livius: «Theodosius I died on 17 January 395», halefler Arcadius (doğu) / Honorius (batı) | Değişiklik yok. (Not: bizans f 0330 ile 330-395 örtüşmesi mevcut tasarımdır) |
| ptolemai t / İskenderiye | -0029-08-01 (1 Ağu 30) | KISMEN: 1 Ağu gün hükmü bu turda OKUNAMADI (Dio 51.19 sayfası gün vermedi) ; yıl 30 BC okundu | P1 Dio 51.19: «The day on which Alexandria had been captured they declared a lucky day»; konsül tablosu 30 ve 29 listesi; 51.17: «he made Egypt tributary and gave it in charge of Cornelius Gallus» | t'yi koru, gün için Plutarkhos Ant. 76 / Fasti ile ayrı okuma gerek (OKUNAMADI) |

## 2. Roma / ana şehirlerde BOSLUK doldurma (hangi yıl hangi devlet)

Mevcut künye zinciri: roma-kralligi (-0752..-0508), roma-cumhuriyeti (-0508..-0026-01-16), roma-imp (-0026-01-16..0395-01-17), bati-roma (0395-01-17..0476-08-28), bizans (0330..1461).

- **Roma (41.903,12.496)**: bugünkü s: `-0752..-0751 roma-kralligi | -0751..1144 BOSLUK`. Öneri: tek s: `-0752..-0508 roma-kralligi` (P33, gelenek 753/509); `-0508..-0026-01-16 roma-cumhuriyeti`; `-0026-01-16..0395-01-17 roma-imp` (P2, P18, P34); `0395-01-17..0476-08-28 bati-roma` (künye zaten Mediolanum→Ravenna başkent; Roma için P33 yalnız 476 Odoacre ve Visigoth/Vandal zararını verdi; 476-08-28 günü bu turda OKUNAMADI). 476 sonrası: P33 «Odoacre … acclamato re» (476; Ostrogot yılları OKUNAMADI); 536-537 Belisarios Vitige kuşatmasını göğüsledi (P33) -> bizans yıl-hassasiyeti (gün OKUNAMADI); 726 Leo III kopuşu, Roma özerk yönetim ve dukalık (P33) — künyesi yok. 536/726-1144 aralığı künyesiz kalır; BOŞLUK BEYANI korunmalı (Odoacer/Ostrogot/Dukalık künyesi eklenmedikçe).
- **Capua**: s `-0337..-0026 roma-cumhuriyeti`. P26 Livy 8.14: «civitas sine suffragio data» (338 BC konsülleri Camillus-Maenius -> -0337 ✓). AMA: 216-211 Hannibal'e geçiş (P28 Livy 23.7: «Legati ad Hannibalem venerunt pacemque cum eo condicionibus fecerunt») ve 211'de Roma'nın geri alışı (P27 Livy 26.16: «habitari tantum tamquam urbem Capuam frequentarique placuit»; senato/magistra yok). Öneri: `-0215..-0210` dilimi kartaca (216 BC = -0215; 211 BC = -0210; kesin ay-gün OKUNAMADI), kartaca künyesi f -0813..t -0145 uygun. -0026 sonrası s yok: roma-imp ekle (-0026-01-16..0395-01-17).
- **Mediolanum/Milano**: s yalnız 1097'den. Öncül: insubres-kabile-devleti (-0399..-0221). P24 Polybios 2.34: konsüller «Marcus Claudius and Gnaeus Cornelius» (=222 BC) ve «took Mediolanum itself by assault» -> -0221 ✓ (künye t doğru). Öneri: `-0221..-0026-01-16 roma-cumhuriyeti` (P24, P23-benzeri P22 Treccani «Nel 222 a.C. iniziò la conquista romana»), `-0026-01-16..0395-01-17 roma-imp`, `0395-01-17..0476-08-28 bati-roma` (P22: 286 imparatorluk ikametgâhı, 402'de başkent Ravenna'ya taşındı — "başkent Milano" ifadesi Treccani'de YOK; künyenin baskent alanı "Mediolanum -> Ravenna" 402'de kırılmalı). 476-569: P22 «Occupata dagli Ostrogoti e invasa dai Burgundi (489-94)», «Conquistata dai Longobardi (569)» -> künyesiz; 569-1097 Lombard/Frank dönemi için künye yok, BOŞLUK BEYANI.
- **Marsilya (Massalia)**: s `-0599..-0048 massalia | -0048..-0026 roma-cumhuriyeti | -0026..1281 BOSLUK`. -0048 = 49 BC: P29 Caesar BC 2.22 «pro nomine et vetustate, quam pro meritis in se civitatis conservans», iki lejyon garnizon; P23 Treccani «Distrutta da Cesare nel 49 a.C., fu ricostruita durante l'Impero». ÇELİŞKİLİ: Strabon 4.1.5 (P30) «preserved to the city the autonomy which it had from the beginning» (Roma valilerine tâbi değil). Treccani: şehir imparatorlukta «free and federated» (özet). Öneri: `-0048` ucu doğru ama özerklik beyanı ekle (ic_not: Strabon, civitas libera); `-0026-01-16..0395-01-17 roma-imp` (özerk/federe beyanla). P23: «Burgundian, Visigoth (480-510), Ostrogoth (510-536)» özerklik; Frank yılları sayfada tarihsiz; Provence krallığı 879/933 sayfada YOK (OKUNAMADI). 395-480 bati-roma; 480-536 künye yok (Vizigot künyesi vizigot 0418-0711 var -> 480-510 vizigot adayı, Treccani özet — Treccani'de dahi "kept autonomy" olduğundan beyanlı yaklaşıklık).
- **Konstantinopolis/Byzantion 73-330**: P20 TDV İstanbul: «milâttan sonra 73 yılında İmparator Vespasianus tarafından Roma topraklarına katıldı»; P19 Suetonius Vesp. 8: «made provinces of Achaia, Lycia, Rhodes, Byzantium and Samos, taking away their freedom» (yıl vermez). 330: P20 «11 Mayıs 330'da … şehrin resmî açılış töreni yapıldı». Öneri: s `0073-01-01..0330-05-11 roma-imp` (künye roma-imp f -0026 ≤ 73 ✓). Yıl 73 TDV'ye dayalı, gün yok: YYYY-01-01 + ic_not; byzantion-polis t 0073 ile uyumlu.
- **İskenderiye -0029..-0026**: P1 Dio 51.17 Mısır Roma'ya katıldı (Cornelius Gallus'a verildi). Öneri: `-0029-08-01..-0026-01-16 roma-cumhuriyeti` ("Sirakuza modeli"). Not: Octavianus resmî hukuk statüsü (kişisel mülk) Dio'da yok -> beyan.
- **Atina klasik çağ**: yer.json'da Atina s ilk dilimi -0085 (Roma). Sulla: P31 Plutarkhos Sulla 14: Sulla Atina'yı aldı «on the Calends of March» (yıl sayfada yok); P21 TDV Atina: «Milâttan önce 86'da Romalılar'ın eline geçen şehir» -> -0085 ✓; öneri f -0085-03-01 (Sulla Anılar, Plutarkhos). Daha öncesi: atina-demokrasisi künyesi -0507..-0337: P16 Dionysios (Isagoras arkhon MÖ 508/7) ve P32 Diodoros 16.84: «When Charondes was archon at Athens» (Loeb notu: Temmuz 338-Haziran 337) -> -0337 sınırı doğru (Khaironeia 338; gün OKUNAMADI). Atina s: `-0507..-0337 atina-demokrasisi` EKLE (künye var, s yok). -0337..-0085 (Makedonya/Antigonid/Roma) için bu turda kaynak OKUNAMADI -> önceki turda atlas'taki künyeler makedonya-krallik/antigonid-makedonya; geçişler OKUNAMADI. -0026..0395 `roma-imp` (Atina = Achaea eyaleti; P21 Atina eyalet adını vermedi), 0395..1000: P21 TDV «Bizans devrinin ilk dönemlerinden itibaren» -> `0395-01-17..1000 bizans` (896 Müslüman denizciler geçici işgal, P21) ; bizans künyesi 330'dan başladığı için uyumlu.

## 3. Etrüsk / Sicilya künyeleri

| id | atlas | hüküm | kaynak ve okunan cümle | değişiklik |
|---|---|---|---|---|
| etrusk-tarquinia f | -0699 (MÖ 700) | ÇELİŞKİLİ-KAYNAKLAR: Treccani kuruluş yılı vermiyor; «Dalla metà dell'8° sec. a.C. si registra una decisa crescita demografica e culturale» ve Protovillanova'dan beri iskân. -0749 "kuruluş" değil "büyüme başlangıcı" | P9 Treccani Tarquinia | f -0699 -> -0749 yalnızca "yüzyıl ortası" hassasiyetiyle kabul edilebilir; kesinlik:{f:'yuzyil'} ve ic_not "Treccani: 8. yy ortasından belirgin büyüme; devlet kuruluş yılı kaynaksız". Öneri: -0749 (Treccani'ye en yakın) |
| etrusk-tarquinia t | -0280 (MÖ 281) | KESİN-DOĞRU | P9 «una definitiva sconfitta nel 281 a.C.» (ayrıca «358-51» savaşları) | yok. Not: -0279 (etrusk-sehir t) ile 1 yıl farkı: -0280'e hizala |
| sirakuza f | -0733 (MÖ 734) | ÇELİŞKİLİ: Livius.org «Naxos was founded in 734»; «In the following year, Syracuse was founded by the Corinthian Archias» (=733 BC=-0732). Thukydides 6.3: Syracuse Naxos'tan «the year afterwards» | P4, P5 | f -0733 -> -0732 (Thukydides'in "ertesi yıl"u + Naxos 734). Atlas -0733 = Naxos yılı |
| sirakuza t | -0210 (MÖ 211) | DÜZELT: -0210 -> -0211 (MÖ 212). Britannica 211 verir ama bu turda OKUNAMADI | P3 Plutarkhos Marcellus 19 Thayer notu: «In 212 B.C., the siege having lasted nearly three years» · P25 Livy Periochae: Tarentum 25.2 MÖ 212 işaretli, Syracuse 25.10 sonrası «third year» | t -0210 -> -0211; künye ozet "MÖ 211" -> "MÖ 212 (Livy/Plutarkhos; Britannica 211)"; "Marcellus" maddesi -0210 -> -0211; yer s -0211 ve roma-cumhuriyeti s f=-0211 zaten tutarlı |
| sirakuza Gelon -0490 | maddesi "Sirakuza'da tiran (~MÖ 491)" | DÜZELT: Sirakuza için -0484 (MÖ 485). 491/490: Gela'da (Hippokrates'in ölümü) | P4 Livius: «succeeded as tyrant of Gela by his adjutant Gelon, who added Syracuse» (Hippokrates ölümü 491/490) · P13 Diodoros 11.38: «Now Gelon reigned for seven years», Loeb dipnotu 485-478 | madde -0490 -> -0484 ve metin "Gelon Gela tiranı (491/490) iken Sirakuza'yı ele geçirir (485/4)"; ayrı madde Gela için -0490 |
| leontinoi f | -0728 (MÖ 729) | KESİN-DOĞRU | P10 Treccani Lentini: «Fu fondata dai Calcidesi di Nasso nel 729 a.C.»; P5 Thuk.: «fifth year after the foundation of Syracuse» | yok |
| leontinoi t | -0422 (MÖ 423) | ÇELİŞKİLİ / OKUNAMADI kesin yıl: Treccani yıl vermiyor; Thukydides 5.4 olayı "10. yıl yazı"na (MÖ 422) bağlıyor | P10: «fu assoggettata da Siracusa» (yıl yok); P6 Thukydides: Leontinoi «upon the departure of the Athenians … after the pacification»; Cleon seferi ile eş zamanlı (10. yıl yazı) | Kanıt -0421 (MÖ 422) lehine, ama kesin değil: ic_not ile -0421 (kesinlik yıl) önerilir; madde ve künye aynı yıla bağlansın |
| zankle-messana f | -0729 | DÜZELT -> -0723 (yer s ve madde -0723 ile hizala) | P11 Enc. Italiana: «La fondazione di Zancle precedette di poco quella di Reggio» (Reggio ~724); Thuk. 6.4.5 yıl vermiyor (P5) | künye f -0729 -> -0723, ic_not "~724 civarı" |
| zankle-messana t | -0288 (MÖ 289) | KESİN-DOĞRU | P11: «Nel 289 alla morte di Agatocle se ne impadronivano i Mamertini» · P8 Polybios 1.7.2 (Mamertinler, Agathokles'in paralı askerleri, yıl yok) | yok. Mamertin devleti künyesi eklenirse Messina -0288 bosluğu kapanır; Messana "Anaxilas ile ad" yıl Treccani'de yok (OKUNAMADI) |
| akragas f | -0579 (MÖ 580) | KESİN-DOĞRU | P5 Thuk.: «Near one hundred and eight years after the foundation of Gela» (Gela 688 -> 580) | yok |
| akragas t | -0209 (MÖ 210) | KISMEN okundu: P27 Livy 26.40: Laevinus «portam ad mare ferentem» kapı Numidyalılarca açılır (konsül yılı sayfada yok; Laevinus konsül 210 ana kaynak bilgisi — bu turda yıl OKUNAMADI) | Livy 26.40 | yok / yıl için ayrı kaynak gerekir |
| akragas 406 yıkımı | maddesi YOK | EKLE | P12 Diodoros 13.80.1 arkhon Kallias (=406/5), 13.90.1: Himilkon «put to death practically all who had been left behind» | Yeni madde: -0405-?? "Kartaca Akragas'ı yıktı (MÖ 406/5)" gün OKUNAMADI -> `-0405-01-01` + yıl hassasiyeti, ic_not "Diod. 13.80-90; Kallias yılı" |

## 4. 1. tur "yanlış" denen maddeler
1. "Marcellus Sirakuza'yı alır (-0210)": DÜZELT -0211 (bkz. üstte).
2. Gelon -0490: DÜZELT (Sirakuza -0484; -0490 Gela).
3. Zankle -0723 madde ≠ künye -0729: iç çelişki doğru; -0723 öneri.
4. Leontinoi -0422/-0421: KISMEN doğrulandı; kesin değil.
5. "Tarquinia -0699 kuruluş": Treccani kuruluş değil büyüme diyor.
6. "Roma Bosluk": doğru tespit; Roma künyeleri 395'e kadar boşlukları doldurur.
7. Korint/Khaironeia, Allia 389: bu turda bakılmadı (OKUNAMADI).

## 5. OKUNAMADI listesi
Ovid Fasti 1.589 (13 Oca) metni; 1 Ağustos 30 gün hükmü; Britannica 211; Syracuse'un Livy 25.31 metni; Thukydides 5.4 kesin yıl; Leontinoi 422/421; Roma 476-08-28 gün; Ostrogot Roma yılları; Belisarios Roma giriş günü; Messana'nın Anaxilas ile adlanma yılı; Capua 216/211 ay-gün; Livy 26.40 konsül yılı; Provence krallığı 879/933; Massalia Frank devri yılları; Atina -0337..-0085 Makedonya geçişleri; Khaironeia günü; Livius.org Byzantium sayfası (timeout); Dionysios 1.74-75 doğrudan (1C'de 1.71.5 okundu).
