# 21 · Sovyetler Birliği (Sovyet Rusya / SSCB) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 03.11.2026

## Özet
- Ana künye `sovyet-rusya` (1917-11-07 → 1991-12-26), tek künye hem RSFSR hem SSCB'yi taşıyor; yardımcı 5 künye (zakafkasya-sfsc, turkistan-ossc, harezm/buhara halk, gilan-sovyet). Yerleşim 540; en geniş yıl 1947 = 523. Kırılma 139; **açık 20**.
- Karar: SSCB kuruluşu (1922-12-30) AYRI künye gerektirmez — o gün hiçbir yerleşimin sahibi değişmiyor (RSFSR→SSCB aynı künye). Ama evren maddesi YOK.
- En ağır 3 bulgu: (1) **Ekim Devrimi (1917-11-07), SSCB kuruluşu (1922-12-30) ve Moskova'nın başkent oluşu evrende yok** — yalnız künye `kronoloji:[]` içinde (devletler.js:366-380; evren dışı). Künyenin f ucu ve ana kuruluş olayı haritada okunamıyor. (2) **Taraz (Evliya-Ata) ve Sayram (İsficâb) kayıtlarında çoklu `s:` anahtarı**: sonuncusu kazanır → Sovyet dönemi 1923-10-29'da biter, Kazakistan'a hiç geçmez (data/yerlesimler_ok107.js:~215-230). Astara ve Culfa da 1923-10-29'da "kacar"a geçiyor (SSCB'den İran'a — pencere ucu artefaktı). (3) Künyenin t = 1991-12-26 ile künyenin kendi `ic_not_t` (25 Aralık) ve kendi kronoloji maddesi (1991-12-25) tutarsız; kaynaklar üç farklı gün veriyor (25/26/31 Aralık).
- Açık kırılmaların çoğu (≈14/20) yer-adı eşleşmemesi: karşılayan madde evrende var ama o şehir adı maddenin `yer`/`odak_yer`/`b` alanında geçmiyor (aşağıda tablo). 4-5 tanesi gerçek eksik/tarih farkı.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| sovyet-rusya | Sovyet Rusya / SSCB | 1917-11-07 | 1991-12-26 | ANA künye. 540 yerleşim. `kaynak:"bulunamadı — TDV'de müstakil maddesi yok"` — künye düzeyinde kaynak alanı boş, ic_not'larda TDV `rusya` kullanılıyor |
| zakafkasya-sfsc | Zakafkasya SFSC | 1922-03-12 | 1936-12-05 | 2 yerleşim (Sarp + 1). Kafkasya'nın geri kalanı bu dönemde doğrudan `sovyet-rusya` altında |
| turkistan-ossc | Türkistan ÖSSC | 1918-04-30 | 1924-09-16 | 1 yerleşim |
| harezm-halk-cumhuriyeti | Harezm Halk SC | 1920-04-26 | 1924-01-01 | alt devlet |
| buhara-halk-cumhuriyeti | Buhara Halk SC | 1920-10-08 | 1924-10-27 | alt devlet |
| gilan-sovyet-cumhuriyeti | Gîlân SC | 1920-06-05 | 1921-11-01 | alt devlet |
| cin-sovyet-cumhuriyeti, kuzey-kore-sovyet-idaresi, macar-sovyet-cumhuriyeti, bavyera-konsey-cumhuriyeti | | | | SSCB'nin parçası değil, kapsam dışı |
| rusya-gecici-hukumet (öncül) / rusya-federasyonu (ardıl) | | 1917-03-15 → 1917-11-07 / 1991-12-26 → | | s: zincirinde var; ölçülmedi |

Eksik evre/parça: yok (Rus İç Savaşı'ndaki Beyaz devletler başka devletlerin işi). **SSCB 1922 ayrı evre mi?** — Hayır: sahip kimliği aynı, yalnız ad/federal yapı değişiyor; künye adı zaten "Sovyet Rusya / SSCB". Ayrı künye açılırsa 540 yerleşimde `s:` kırılması yaratır ve Değişmez 2 yüzlerce madde ister. Öneri: tek künye + evren maddesi.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f | 1917-11-07 (Gregoryen; Jülyen 25 Ekim) | TDV «Rusya» (islamansiklopedisi.org.tr/rusya, okundu 03.11.2026): Bolşevikler «1917 Ekim İhtilâli akabinde iktidarı ele geçirdiler» — YIL, gün vermiyor | ikinci akademik kaynak OKUNAMADI (Fitzpatrick / Cambridge History of Russia c.3 ERİŞİLEMEDİ) | 7 Kasım 1917 standart Gregoryen karşılık; künye ozet'i bunu zaten beyan ediyor. Önerilen: f KALSIN; `kaynak:`a TDV rusya + ikinci kaynak yazılsın ("bulunamadı" ifadesi yanlış — TDV `rusya` maddesi var). |
| SSCB kuruluşu | künye kronoloji 1922-12-30 | TDV «Rusya»: «Sovyet Sosyalist Cumhuriyetleri Birliği oluştu» (30 Aralık 1922) | Michigan State Univ. Soviet History Archive (soviethistory.msu.edu/1921/transcaucasia/…, yalnız arama özeti okundu) ve LoC Law Blog 2013 (blogs.loc.gov/law/2013/01/…): Antlaşma/Bildiri 30 Aralık 1922 Birinci Sovyetler Kongresi'nde onaylandı (bazı kaynaklar 29 Aralık imza) | Gün teyitli. Evrende madde yok → c). |
| Moskova başkent | künye `baskent: "Petrograd → Moskova"` (tarihsiz) | TDV «Rusya»: «Başşehrin Petersburg'dan Moskova'ya nakli (Şubat 1918)» | ikinci kaynak okunamadı; yaygın karşılık 10-12 Mart 1918 | TDV ay=Şubat 1918, yaygın bilgi Mart 1918: çelişki — madde yazılırsa YIL/AY hassasiyeti (`1918-02-01`? hayır: TDV esas → "1918" yıl + beyan). Öneri: `kesinlik:"yil"`, gun:"Şubat 1918 (TDV); 10-12 Mart 1918 (diğer kaynaklar) — çelişki". |
| t | 1991-12-26 | OH (history.state.gov/milestones/1989-1992/collapse-soviet-union, okundu): «Gorbachev resigned his post» 25 Aralık, bayrak indi | Soviet of the Republics Beyannamesi № 142-N 26 Aralık 1991 (ru.wikisource listesi; web arama özeti — dolaylı); TDV «Rusya»: «sona erdiğini açıkladı (31 Aralık 1991)» | **ÜÇ KAYNAK ÜÇ GÜN: 25 / 26 / 31 Aralık.** Hukukî bitiş 26 Aralık (Yüksek Sovyet Cumhuriyetler Konseyi bildirisi). TDV esas ilkesi: TDV 31 Aralık'ı Rusya/Ukrayna/Belarus temsilcilerinin açıklaması olarak veriyor — bu yıl sonu (CIS/Alma-Ata 21 Aralık, 31 Aralık resmî devir) tarihidir. Öneri: t=1991-12-26 KALSIN; künyenin `ic_not_t`'si ("25 Aralık…") ve künye içi kronoloji maddesi (1991-12-25 `son`) düzeltilsin: t=26 ile madde tarihi tutarlı olsun veya ic_not üç kaynağı beyan etsin. Evrende: 1991-12-25 (RSFSR ad değişikliği, halef_1923_2000:318) ve 1991-12-26 (3 madde, :319-321) mevcut. Taraz/Sayram'ın kendi `s:`'inde Sovyet bitişi 1991-12-25 (künye t'sinden 1 gün farklı) — Değişmez 1 sınırında. |

## c) Kronoloji (Değişmez 2 evreni)
Var (SSCB'nin kuruluşu/yıkılışı ve sınır maddeleri, evrende):
- 1918-01-04 Finlandiya'nın bağımsızlığı tanındı — kronoloji_sinir_avrupa_orta.js:50
- 1918-03-03 Brest-Litovsk — olaylar_ek5.js:462 ; 1918-03-29 yürürlük — kronoloji_sinir_avrupa_orta.js:51 ; 1918-11-13 iptal — :53
- 1920-03-30 Tartu — avrupa_orta.js:63 ; 1920-08-11 Riga Barışı — :68 ; 1921-04-30 Riga — :76
- 1921-10-13 Kars Antlaşması — olaylar_ek.js:100 ; 1921-02-25 Tiflis — olaylar_p0917dunya.js:99
- 1922-11-14 Uzak Doğu Cumhuriyeti sona erdi — asya_zincir_1024.js:139
- 1936-12-05 Zakafkasya SFSC kaldırıldı — halef_1923_2000.js:12
- 1939-09-17 Doğu Polonya — halef:23 ; 1940-03-12 Moskova Barışı — :25 ; 1940-06-28 Besarabya — :26 ; 1940-08-03/05/06 Baltık — :27-29
- 1944-03-29/08-24/09-19 (Çernovitz, Kişinev, Petsamo) — :42-44 ; 1945-06-29 Karpat Ukraynası — :53 ; 1945-08-02 Königsberg — :55 ; 1945-08-18 Kuril — adalar_dogu_asya.js:23 ; 1946-02-02 — :24
- 1990-03-11 Litvanya … 1991-12-25/26 — halef:286-321 (Baltık, Ukrayna, Moldova, Kırgızistan, Özbekistan, Tacikistan, Ermenistan, Gürcistan; 3 madde 26 Aralık)

**Evrende OLMAYAN** (doğrulandı: tarih regex'i tüm olaylar*.js + kronoloji_sinir*.js'te arandı; 1917-11-07 yalnız Gazze maddesinde, 1922-12-3x hiç, 1918-03-1x yalnız Erzurum/Filistin):
```
{ t:"1917-11-07", kesinlik:"gun", b:"Ekim Devrimi: Bolşevikler Petrograd'da iktidarı ele geçirdi; Sovyet Rusya dönemi başladı", gun:"7 Kasım 1917 (Jülyen 25 Ekim)", yer_id:"Petrograd/Sankt-Peterburg", tur:"kurulus", devlet:"sovyet-rusya", kaynak:"TDV rusya (yalnız yıl); ikinci kaynak ERİŞİLEMEDİ" }
{ t:"1918-01-01", kesinlik:"yil", b:"Sovyet hükûmeti başkenti Petrograd'dan Moskova'ya taşıdı", gun:"TDV 'Şubat 1918' (islamansiklopedisi.org.tr/rusya); yaygın 10-12 Mart 1918 — ÇELİŞKİ", yer_id:"Moskova", tur:"baskent", devlet:"sovyet-rusya", kaynak:"TDV rusya" }
{ t:"1922-12-30", kesinlik:"gun", b:"RSFSR, Ukrayna, Belarus ve Zakafkasya SFSC birleşerek SSCB'yi kurdu", gun:"30 Aralık 1922", yer_id:"Moskova", tur:"kurulus", devlet:"sovyet-rusya", kaynak:"TDV rusya; LoC Law Blog 2013 (blogs.loc.gov/law/2013/01/treaty-on-the-creation-of-the-soviet-union-signed-sealed-and-delivered/)" }
```
Diğer eksikler (önem sırasıyla, kaynaksız öneri — başka makinede teyit): 1941-06-22 Almanya SSCB'ye saldırdı (evrende 06-23 Grodno/Brest var, genel saldırı maddesi yok); 1945-05-09 Almanya'nın teslimi/İkinci Dünya Savaşı Avrupa'da sona erdi (Sovyet tarafı); 1924-01-21 Lenin ölümü ve 1924 anayasasının onayı; 1989-12 / 1990-03-15 Gorbaçov'un SSCB başkanlığı. Bunlar harita sınırı değiştirmez; kronoloji tamamlayıcı. Not: 1924-01-01 maddesi (olaylar_ek8.js:339) Harezm ve Buhara'nın sonunu TEK günde (1924-01-01) birleştiriyor, ama Buhara'nın künye t'si 1924-10-27 (açık kırılma #5) — madde ikiye bölünmeli (Harezm 1924-01-01 künye; Buhara 1924-10-27).

## d) Harita uyumu
Açık kırılma: **20** (139 kırılma içinde). En geniş yıl 1947: 523 yerleşim; 1917'de 0 (f gününde s: dönemi 1917-11-07 başlıyor, ölçer 1920'den örnekliyor — 1917-1919 örneği yok, ölçülmedi).

Ölçer çıktısındaki "en yakın" sütunu çoğunda gerçek eşleşme DEĞİL; benim sınıflamam (madde varlığını dosyada tek tek doğruladım):
| gün | yerleşimler (kırılma) | durum / öneri |
|---|---|---|
| 1920-02-02 kayıp | Petseri (Peçori) | Tartu Barışı İMZA günü 2 Şubat 1920'ye s: bağlı; evrende yalnız yürürlük 1920-03-30 (avrupa_orta.js:63). Öneri: ya yerleşim 1920-03-30'a çekilsin ya "Tartu Barış Antlaşması imzalandı 1920-02-02" maddesi eklensin (imza günü kaynak teyidi: TTK/Baltık akademik kaynağı gerekli). |
| 1920-12-02 kazanç | Eçmiyadzin, Revan | **GERÇEK EKSİK**: evrende yalnız Gümrü Antlaşması (olaylar_ek5.js:469); Ermenistan'ın Sovyetleşmesi maddesi yok. Öneri madde: "Sovyet Ermenistan'ı ilan edildi / Revan Kızıl Ordu denetimine girdi (29 Kas–2 Ara 1920)" — gün kaynakla teyit edilmeli. |
| 1921-10-13 kayıp | Sarp | Kars Antlaşması 13 Ekim 1921 (olaylar_ek.js:100) var; "Sarp" yer adı eksik → odak_yer'e Sarp ekle. |
| 1923-10-29 kayıp | Astara, Culfa, Sayram (İsficâb), Taraz (Evliya-Ata) | **VERİ HATASI, madde değil.** Taraz ve Sayram: aynı kayıtta birden çok `s:` (Taraz 3, Sayram 6 adet; yerlesimler_ok107.js ~215-230); sonuncusu `{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}]` ile bitiyor, Kazakistan ve 1923 sonrası YOK → sahipsiz. Astara (yerlesimler.js:2247, Gilan/İran tarafı koordinatı) ve Culfa (yerlesimler.js:2048, lat 38.955 lon 45.63 = Nahçıvan Culfa) 1923-10-29→1925-10-31 "kacar", sonra "iran": Nahçıvan Culfa 1923-1991 Azerbaycan SSC/SSCB'dir; Astara'nın Azerbaycan tarafı da. Pencere ucu (1923-10-29) kalıntısı. Düzeltme: Taraz/Sayram tek `s:` + sovyet-rusya 1917-11-07→1991-12-25 + kazakistan; Culfa sovyet-rusya→1991-12-25; Astara yeniden değerlendirilmeli (İran tarafı mı Azerbaycan tarafı mı; 1917-1920 İran, 1920-21 Gilan SC, 1921+ İran). |
| 1924-10-27 kazanç | Kal'a-i Hum (Darvaz) | Buhara Halk SC künye t = 1924-10-27; evren maddesi 1924-01-01 (olaylar_ek8.js:339) — Buhara'nın sonunu 1924-01-01'e koyuyor. Öneri: ikiye böl, 1924-10-27 Buhara maddesi + Darvaz. (Darvaz s:'i 1873'e dek `__BOSLUK__` — başka iş.) |
| 1936-12-05 kazanç | Zugdidi | Madde var (halef:12) ama yalnız "(Sarp)" yazıyor; odak_yer'e Zugdidi ekle (Megrelya). |
| 1940-03-12 kazanç | Terijoki | Madde var (halef:25: Viipuri + Karelya Berzahı); Terijoki ekle. |
| 1940-06-28 kazanç | Bolgrad, Bălți, Kahul, Kili | Madde var (halef:26) ama Akkirman/Çernovitz/Hotin/Bender/İsmail yazıyor; dört adı ekle. |
| 1940-08-06 kazanç | Jelgava, Liepāja, Ventspils | Bunlar LETONYA şehirleri; Letonya'nın ilhakı 5 Ağustos (halef:28), Estonya 6 Ağustos (:29). s: 08-06'ya bağlı → 08-05'e çekilsin veya Letonya maddesine eklensin. Tarih: künye kaynağı USHMM-KD «3–6 Ağustos» (3 Ağ Litvanya, 5 Ağ Letonya, 6 Ağ Estonya). |
| 1941-07-01 kayıp | Hotin | Madde var (1941-07-01 Çernovitz yeniden işgal, lehistan_ukrayna_1028.js:77; ayrıca 07-05 halef:34 — ÇİFT madde, 4 gün fark); "Hotin" adı eksik. İki maddeyi birleştir, Hotin ekle. |
| 1941-07-28 kayıp | Cēsis, Daugavpils, Jelgava, Kaunas, … | Reichskommissariat Ostland maddesi (ek16.js:572) var, günü 28 Temmuz — ama Alman işgali Haziran-Temmuz başında oldu (Kaunas 24 Haz). BEYANLI YAKLAŞIKLIK: s: Ostland kuruluş gününe bağlı. Şehir adları maddede yok; madde `kapsam_genis:true` + odak_yer ekle. |
| 1945-06-29 kazanç | Munkács (Mukacheve) | Madde var (halef:53) ama "Munkac" (aksansız); yazımı yerleşim adıyla eşle. |
| 1991-04-09 kayıp | Ahılkelek, Duşeti, Gori, Hulo (Acara) | Madde var (halef:293) Batum/Kutaisi/Ahıska/Sohum/Acara; Gori/Duşeti/Ahılkelek/Hulo ekle. |
| 1991-08-20 kayıp | Narva | Estonya maddesi (halef:300) Tallinn/Tartu/Pärnu; Narva ekle (Narva s:'i Estonya'ya geçiyor — Narva Rusya sınırında, 1991'de Estonya'ya; kaynak teyit). |
| 1991-08-21 kayıp | Jelgava, Liepāja, Ventspils | Letonya maddesi (halef:301) Riga/Daugavpils/Cēsis/Rēzekne; ekle. |
| 1991-08-24 kayıp | Aşağı Dinyeper bozkırı, Bahmut, Balta, Bar (Podolya), … | Ukrayna maddesi (halef:302) Kiev/Harkov/Odessa/Poltava/Akkirman; ekle (çoklu şehir). |
| 1991-08-25 kayıp | Bobruysk, Gomel, Mogilev, Mozır | Belarus egemenlik maddesi var; Bobruysk/Gomel/Mogilev/Mozır adları ekle. |
| 1991-08-27 kayıp | Bălți, Kişinev, Soroka | Moldova maddesi (halef:304) Bender/Soroca/Orhei/Cahul; Kişinev ve Bălți ekle; "Soroka" ↔ "Soroca" yazımı. |
| 1991-08-31 kayıp | Andican, Balasagun, Buhara, Cizzah, … | Hem Kırgızistan (halef:305) hem Özbekistan (:306, Taşkent/Semerkant/Yeni Ürgenç) aynı gün; Andican/Buhara/Cizzah için Özbekistan'a, Balasagun için Kırgızistan'a ekle. |
| 1991-09-09 kayıp | Gunt vadisi, Hisar, Kal'a-i Hum, Kala-i Vamar | Tacikistan maddesi (halef:309) Hucend/Horog/Pamir; dört adı ekle. |

Yerleşim sahipliği örneklemesi (en geniş yıl 1947, 523): Balt (3 devlet 1940-08-0x), Besarabya (1940-06-28/1944-08-24), Doğu Polonya (1939-09-17), Karelya (1940-03-12), Königsberg (1945), Karpat Ukraynası (1945-06-29), Kuril/Güney Sahalin (1945-46) maddeleriyle UYUMLU. Sayılan fark: (a) Taraz/Sayram/Astara/Culfa veri hatası (yukarıda); (b) Sovyet bitişi yerleşimlerde 1991-12-25 (Taraz/Sayram) vs künye t 12-26.
Ölçülmedi: 1917-1919 dönemi (ölçer 1920'den örnekliyor), Taraz/Sayram dışındaki çoklu-`s:` kayıtları (tam tarama yapılmadı — veri-genel risk: tüm yerlesimler*.js'te tekrarlı `s:` anahtarı taranmalı).

## Önerilen düzeltmeler (KASA için)
1. `data/yerlesimler_ok107.js` Taraz (Evliya-Ata) ve Sayram (İsficâb): tek `s:` bırak (3/6 anahtar var); 1917-11-07→1991-12-25 sovyet-rusya + 1991-12-25→ kazakistan.
2. `data/yerlesimler.js:2048` Culfa: 1923-10-29 "kacar" dilimlerini kaldır; sovyet-rusya 1917-11-07→1991-12-25 (+ azerbaycan). `:2247` Astara: İran/Azerbaycan tarafı ayrımı ve 1917-1923 "sovyet-rusya" sahipliği yeniden kaynaklandırılsın.
3. `data/olaylar_*.js` yeni 3 madde (c) — Ekim Devrimi, Moskova başkent, SSCB 30 Aralık 1922; ikinci kaynak okunana kadar `[ozet; teyit bekler]`.
4. `data/devletler.js:366` sovyet-rusya: `kaynak:` "bulunamadı" ifadesini TDV `rusya` ile değiştir; `ic_not_t` ve künye kronolojisindeki 1991-12-25 maddesini t=1991-12-26 ile hizala (25/26/31 Aralık çelişkisi üç kaynağıyla).
5. Odak_yer/yer eksiklikleri: kronoloji_sinir_halef_1923_2000.js satırları 12, 25, 26, 28, 293, 300-309 (tablodaki adlar); olaylar_ek.js:100 (Sarp); lehistan_ukrayna_1028.js:77 + halef:34 birleştir.
6. `olaylar_ek8.js:339` 1924-01-01 maddesi: Harezm/Buhara ayrı, Buhara 1924-10-27.
7. 1920-12-02 Ermenistan Sovyetleşmesi maddesi (kaynak oku).
8. 1920-02-02 Petseri: imza vs yürürlük kararı.

## Erişilemeyen kaynaklar
- Fitzpatrick, *The Russian Revolution* (OUP) veya Suny (ed.), *Cambridge History of Russia* c.3 — soru: Bolşevik iktidarı ele geçirme günü (25 Ekim Jülyen / 7 Kasım Gregoryen) ve Moskova'ya taşınma tarihi (Mart 1918'in hangi günü; TDV 'Şubat 1918' der)?
- Taubman/Kotkin veya Plokhy, *The Last Empire* (2014) — soru: SSCB'nin hukukî sonu 25, 26 mı 31 Aralık 1991?
- Tartu Barışı (Estonya–Sovyet Rusya) imza günü ve yürürlük günü — Baltık akademik yayını veya TTK/uluslararası hakemli kaynak: 2 Şubat 1920 imza mı?
- Ermenistan SSC'nin ilanı (29 Kasım / 2 Aralık 1920) — Hovannisian, *The Republic of Armenia* c.4 (UC Press): Revan'ın Kızıl Ordu/Sovyet denetimine girdiği gün?
- Ostland ve Baltık işgal geçişleri (Haziran-Temmuz 1941) için USHMM «Reichskommissariat Ostland» maddesi (elle doğrulama bekliyor).

## DÜZELTME (UMIT SALI, koordinatör ölçümü)
- "Taraz (Evliya-Ata) ve Sayram kayıtlarında çoklu `s:` anahtarı" bulgusu **YANLIŞ — geri çekildi.**
  Ölçüldü: `data/yerlesimler_ok107.js:224` (Taraz) satırında tek `s:[` var; zincir
  … `rusya` 1864-09-22→1917-03-15 · `rusya-gecici-hukumet` →1917-11-07 · `sovyet-rusya` →1991-12-25 ·
  `kazakistan` →2000-12-31. Sovyet dönemi 1923-10-29'da bitmiyor, Kazakistan'a geçiyor. Sayram (satır 233)
  da tek `s:` taşıyor. Ajanın bulgusu "son anahtar kazanır" varsayımına dayanıyordu, veri bunu doğrulamadı.
- Taraz/Sayram için kalan tek gerçek not: Sovyet t 1991-12-25 ↔ künye t 1991-12-26 (bir gün fark) —
  künye ile yerleşim uçları aynı güne hizalanmalı (öneri: 1991-12-26, SSCB'nin Cumhuriyetler Sovyeti
  kararıyla feshi; 25 Aralık Gorbaçov'un istifası).

## DÜZELTMENİN DÜZELTMESİ (UMIT SALI, 4 Kasım 2026 sabahı) — ajanın bulgusu DOĞRUYDU
Yukarıdaki "geri çekildi" hükmüm **yanlıştı**. Ölçümüm yalnız `yerlesimler_ok107.js:224` satırına bakıyordu; kayıt çok
satırlı olduğundan ikinci `s:` anahtarı başka satırdaydı ve yükleyici (JS nesnesinde son anahtar kazanır) yalnız birini
okuyordu — tam da ajanın söylediği mekanizma. KASA PAZAR doğruladı ve birleştirdi: eski 1281-1923 yaması DOGU-500-1281
dizisini eziyordu; 1923-10-29 ardılsızlığının (EK-1923-ufuk.md, `sovyet-rusya → —` 2 satır) sebebi buydu. Başka çift
anahtar bulunmadı (KASA ölçümü).
**Ders:** çok satırlı kayıtta "anahtar kaç kez var" sorusu satırla değil kayıt sınırıyla ölçülür.
