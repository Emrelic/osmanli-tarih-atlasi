# 01 · Roma İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (salt okuma; `top100_olc.py` + `degismez2` ölçütü + yerleşim `s:` zincirleri okundu)

## Özet
- Künye: ana 4 (`roma-kralligi`, `roma-cumhuriyeti`, `roma-imp`, `bati-roma`) + ilişkili 7 (`bizans` 330-05-11→, `galya-imp`, `britanya-imparatorlugu-carausius`, `palmira`, `herodes-krallik`, `likya-birligi`, `altava-mauro-roma`). Doğu Roma 395→ ayrı künye yok; `bizans` 330'dan başlıyor (330-395 örtüşmesi açık borç).
- Ölçer: roma-imp 16 kırılma / 2 AÇIK; roma-cumhuriyeti 15 / 1; bati-roma 7 / 2; roma-kralligi 2 / 0. Toplam 5 AÇIK. Yerleşim: krallık 1, cumhuriyet en çok 13 (MÖ 28), imparatorluk 36→49 (en geniş yıl 289: 48), Batı Roma 41→36.
- En ağır 3 bulgu: (1) Haritada Roma toprağının büyük kısmı noktasızdır (Galya, Kartaca, Antakya, Kudüs/Şam, Dacia, Balkan) ve `__BOSLUK__`/yok: Atina, Marsilya, Sirakuza `-0026-01-01`'de delik oluyor, Capua/Veii hiç devam etmiyor; (2) `roma-imp` künyesinin kronoloji maddelerinin 9'unun hepsi `odak_yer:["Petra"]`, `roma-cumhuriyeti`nin 9'unun hepsi `["Capua"]` — kamera yanlış yere gider; (3) Batı Roma sonu için üç ayrı gün: Roma yerleşimi `0476-08-23`, Cartagena/Utrecht `0476-08-28`, künye+Ravenna `0476-09-04`; künyedeki `ic_not_t` hâlâ eski 08-28'i anlatıyor.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| roma-kralligi | Roma Krallığı | -0752-01-01 | -0508-01-01 | var; 1 yerleşim (Roma) |
| roma-cumhuriyeti | Roma Cumhuriyeti | -0508-01-01 | -0026-01-16 | var; 13 yerleşim (en geniş MÖ 28) |
| roma-imp | Roma İmparatorluğu (Prinkipat-Dominat) | -0026-01-16 | 0395-01-17 | var; 49 yerleşim |
| bati-roma | Batı Roma İmparatorluğu | 0395-01-17 | 0476-09-04 | var; 41→36 yerleşim |
| bizans | Bizans (Doğu Roma) | 0330-05-11 | 1453-05-29 | ilişkili; Doğu Roma 395'e kadar `roma-imp` ile örtüşür (künye özetinde UYARI var) |
| galya-imp / palmira / britanya-imparatorlugu-carausius | ayrılıkçı devletler 260-274 / 260-272 / 286-296 | | | ilişkili (sınır) |
| odoakar, dogu-got | ardıl | 0476-08-23 / 0493-03-05 | | `Roma` yerleşimi odoakar'a 08-23'te geçiyor (bkz. d) |
EKSİK parça: Doğu Roma'nın 330-395 evresi için `roma-imp` mı `bizans` mı sahip sorusu D205 kuralıyla çözülmemiş; MÖ 31-26 geçiş evresi ("Actium–Augustus") ayrı künye gerektirmez (yıl-gün sınırı aşağıda).

## b) f/t ve evreler
| uç | atlas değeri | kaynak 1 | kaynak 2 | hüküm / öneri |
|---|---|---|---|---|
| roma-imp f / roma-cumhuriyeti t | -0026-01-16 (MÖ 27, 16 Ocak) | Livius.org (J. Lendering), «Augustus» https://www.livius.org/articles/person/augustus/ — «16 January 27: Imperator Caesar Divi filius Augustus» (bu turda okundu) | Cassius Dio 53.16.6-8 (penelope.uchicago.edu, okundu): ünvanı Senato verdi; **gün vermez**, yıl yalnız bağlamdan | Yıl iki kaynakla teyit; **gün tek kaynaklı** (Livius.org). Gün için Fasti Praenestini (CIL I² s.231, 16 Ocak girdisi; Ovid, Fasti 1.587-590) bu turda **okunmadı** → "çekilemedi". Mevcut değer korunur, `ic_not`a "gün tek kaynak" yazılır. Alternatif sınır Actium (2 Eylül MÖ 31 = -0030-09-02) / İskenderiye (1 Ağustos MÖ 30 = -0029-08-01, `ptolemai` t ile uyumlu) beyan edilir. |
| roma-imp t / bati-roma f | 0395-01-17 | Livius.org «Theodosius I» https://www.livius.org/articles/person/theodosius-i/ — «died 17 January 395», Milano, Arcadius doğu/Honorius batı (okundu) | Gran Enciclopedia Catalana 'Teodosi I' (künyedeki mevcut kaynak; alıntı künyede) | **Çift teyit.** Değişiklik yok. |
| bati-roma t | 0476-09-04 | Treccani, Enciclopedia Italiana 'Odoacre' (künyede): Oreste 28 Ağustos, Paolo Ravenna'da 4 Eylül öldürüldü, Romolo Augustolo sonra tahttan indirildi | Livius/Britannica «Romulus Augustulus» (28 Ağustos 476 Orestes infazı; Britannica 403 verdi, okunamadı) | Treccani'deki 4 Eylül **Romulus'un indirilişini değil Paulus'un öldürülüşünü** tarihler; künye `t` bir çıkarımdır. Önerilen: `t` değerini koru AMA `ic_not_t`'yi güncelle (şu an eski `0476-08-28`i savunan metin duruyor, `t` ile çelişiyor) ve tüm `bati-roma→odoakar` yerleşim geçişlerini TEK güne (aşağıdaki d) hizala. İkinci bağımsız akademik kaynak (Jordanes Romana 344-345, Cambridge Ancient History XIV, Oxford Classical Dictionary «Romulus Augustulus») **okunmadı**. 480 (Nepos'un ölümü, `olaylar_antik_akdeniz.js:198`) alternatif "son" olarak beyanlıdır. |
| roma-kralligi f/t | -0752-01-01 / -0508-01-01 | Varro 753 (Dion. Hal. 1.74) — gelenek | Livius 2.1; Cornell, *The Beginnings of Rome* (1995) | Gelenek tarihi; yüzyıl kesinliği. Polybios 3.22 ilk Kartaca antlaşmasını Xerxes'ten 28 yıl önce (=MÖ 508/7) tarihler → -0508 ile **bir yıl oynama** `ic_not`ta açık yazılmalı. Bu turda birincil metinler **okunmadı**. |
| roma-cumhuriyeti f | -0508-01-01 | roma-kralligi t ile aynı | | Aynı gelenek; tek zincir. |

## c) Kronoloji
Var olanlar (Değişmez 2 evreni): `data/olaylar_antik_akdeniz.js` (43 madde, ör. :6 Augustus 16 Ocak, :12 Caesar -0043-03-15, :171 Augustus ölümü, :175 Dacia 106, :177 Severus Mezopotamya 198, :179-182 Galya/Palmira 260-274, :180 Dacia'nın boşaltılışı 271, :184-188 Hun-Got-Vandal 375-409, :198 Nepos 480); `olaylar_once1000_1019.js:10` Konstantinopolis 0330-05-11; `olaylar_antik_misir_nubya.js:89` 0395-01-17; `olaylar_dunya_avrupa2.js:6` Adrianopolis (yalnız `0378-01-01`; gün 9 Ağustos 378 — Livius.org «Adrianople» ile bilinir); `kronoloji_sinir_once1281_zincir_bati.js:6` Odoakar 0476-09-04; `kronoloji_sinir_benelux.js:12` 0476-08-28 (Batı Roma sonu, Maastricht/Nijmegen/Utrecht).
`devletler.js` içi künye kronolojileri (roma-imp :19839 civarı, roma-cumhuriyeti :19828, bati-roma :19850) **Değişmez 2 evreninde değildir** (`arac/denetle.py` `olaylari_yukle`).

Sorunlar:
1. `devletler.js` roma-imp kronolojisinin 9 maddesi `odak_yer:["Petra"]` (Augustus, Hadrianus, Caracalla, Diocletianus…); `roma-cumhuriyeti` 9 maddesi `["Capua"]`. Doğrusu `Roma` (395 için `Milano`, 330 için `İstanbul`, 378 için `Edirne`). Kamera odağı Ürdün'e/Kampanya'ya gidiyor.
2. roma-cumhuriyeti kronoloji `kaynak:` alanları `worldhistory.org` (DUNYA-1102 notunda yasak) ve "Britannica (sayfa çekilemedi, 403)" — değiştirilmeli.
3. `bati-roma` kronoloji maddeleri günlü olayları `-01-01`'e yazıyor: Stilicho'nun ölümü (22 Ağustos 408; Zosimos 5.34) `0408-01-01`; Roma'nın yağması (24 Ağustos 410; Hieronymus Ep.127, Procopius BV 3.2.27) `0410-01-01`. Kaynaklar bu turda okunmadı; "gün yaz" kuralı gereği doğrulanıp güncellenmeli.
4. `olaylar_antik_akdeniz.js:187` "Hispania paylaşıldı" `0409-01-01`: Hydatius 41-49 Vandal/Alan/Süev'in 409'da girdiğini, **kura ile paylaşımı 411**'de verir (okunmadı; doğrulanmalı). Haritada Braga/A Coruña `suev`e 0409-01-01'de geçiyor — paylaşım 411 ise erken.

Önerilen eksik maddeler (hepsi **bu turda okunmadı** → `kaynak` ikinci kaynakla doğrulanmadan yazılmasın; birinci kaynak kitap/bölüm gösterilmiştir):
- { t:"-0030-09-02", b:"Actium Savaşı: Octavianus Antonius ve Kleopatra'yı yendi", yer_id:"Roma", kaynak:"Cassius Dio 50.31-35; Plutarkhos, Antonius 66-68; CAH X (1996) — gün: Dio/Fasti (2 Eylül)" } *(künyede var ama evrende yok)*
- { t:"-0029-08-01", b:"Octavianus İskenderiye'yi aldı, Mısır Roma'ya katıldı", yer_id:"İskenderiye", kaynak:"Livius.org «Alexandria»/Cassius Dio 51.10-11; Fasti Amiternini 1 Ağustos" } *(ptolemai t ile eşleşir)*
- { t:"0017-01-01", b:"Kapadokya Krallığı Roma eyaleti oldu (Archelaos Roma'ya çağrılıp öldü)", yer_id:"Kayseri", kaynak:"Tacitus, Ann. 2.42; Cassius Dio 57.17.3-7; Strabon 12.1.4" } → **ölçerin AÇIK 0017-01-01 Kayseri**'sini kapatır.
- { t:"0043-01-01", b:"Claudius'un Britannia seferi: Camulodunum alındı, Roma Britannia'sı başladı", yer_id:"Camulodunum (Colchester)", kaynak:"Cassius Dio 60.19-23; Suetonius, Claud. 17" } — mevcut "Claudius Britannia'yı işgal etti" maddesine `yer_id` olarak Camulodunum/Verulamium eklenirse **AÇIK 0043-01-01 Verulamium** kapanır (madde 31 gün uzakta; yer şartı sağlanmıyor).
- { t:"0106-03-22", b:"Nabatî Krallığı ilhak edildi: Arabia Petraea eyaleti", yer_id:"Petra", kaynak:"Cassius Dio 68.14.5; Bowersock, *Roman Arabia* (1983) — Bostra çağı 22 Mart 106" } (atlas Petra `0106-01-01`; madde yok)
- { t:"0117-08-08", b:"Trajanus öldü (Cilicia, Selinus); Hadrianus Part fetihlerini bıraktı — imparatorluk en geniş sınırında", yer_id:"Roma", kaynak:"Cassius Dio 68.33; SHA Hadr. 5" } (`0117-08-11` Hadrianus ilanı devlet kaydında var, evrende yok)
- { t:"0212-01-01", b:"Constitutio Antoniniana: bütün özgür sakinlere Roma yurttaşlığı", yer_id:"Roma", kaynak:"P.Giss. 40; Cassius Dio 78.9.5" }
- { t:"0284-11-20", b:"Diocletianus imparator ilan edildi; Dominat/Tetrarşi dönemi", yer_id:"İzmit", kaynak:"Livius.org «Diocletian»; Lactantius, De mort. pers. 17" } (İzmit = Nikomedeia, başkent)
- { t:"0313-02-01", b:"Milano Mutabakatı (Constantinus–Licinius): hristiyanlığa serbestlik", yer_id:"Milano", kaynak:"Lactantius, De mort. pers. 48; Eusebios HE 10.5 — ay/gün tartışmalı: yıl/ay hassasiyeti" }
- { t:"0324-09-18", b:"Chrysopolis: Constantinus Licinius'u yendi, imparatorluğu tek elde birleştirdi", yer_id:"İstanbul", kaynak:"Zosimos 2.26-28; Origo Constantini 5.28" }
- { t:"0378-08-09", b:"Edirne (Adrianopolis) Savaşı — mevcut `0378-01-01` gün hassasiyetiyle güncellenir", yer_id:"Edirne", kaynak:"Livius.org «Adrianople»; Ammianus 31.12-13" }
- { t:"0394-09-06", b:"Frigidus Savaşı: Theodosius Eugenius'u yendi, imparatorluk son kez tek elde", yer_id:"Milano", kaynak:"Socrates HE 5.25; Philostorgios 11.2" } (künyede var, evrende yok)
- { t:"0410-01-01", b:"Honorius Britannia şehirlerine 'kendinizi savunun' dedi; Roma idaresi adadan fiilen çekildi", yer_id:"Camulodunum (Colchester)", kaynak:"Zosimos 6.5.2-3, 6.10.2; CAH XIII (1998)" } → **AÇIK 0410-01-01 Camulodunum/Verulamium** kapanır.
- { t:"0476-08-23", b:"Odoakar askerlerce kral ilan edildi (Batı Roma'nın fiilî sonu başlar)", yer_id:"Roma", kaynak:"Treccani 'Odoacre' (künyede); Anonymus Valesianus 10.46" }

## d) Harita uyumu
AÇIK toplam 5:
| gün | yerleşimler | öneri |
|---|---|---|
| 0017-01-01 kazanç | Kayseri | Kapadokya maddesi (yukarıda) |
| 0043-01-01 kazanç | Verulamium | mevcut Claudius maddesine `yer_id` ekle |
| -0208-01-01 kazanç (cumhuriyet) | Cartagena | Scipio'nun Cartago Nova'yı alışı MÖ 209 (Polybios 10.8-20; Livius 26.42-51) — mevcut en yakın madde (Tarent) başka yer; yeni madde `-0208-01-01` kesinlik yıl |
| 0409-01-01 kayıp | A Coruña, Braga | madde `olaylar_antik_akdeniz.js:187` yer listesinde A Coruña yok; yer ekle ya da tarihi 411 (Hydatius) ile doğrula |
| 0410-01-01 kayıp | Camulodunum, Verulamium | Britannia 410 maddesi (yukarıda) |

Yerleşim sahipliği ölçümleri (ad_sahip, ilgili `s:` zincirleri):
- **Delik/yarım zincir:** Atina `-0085-01-01→-0026-01-01 roma-cumhuriyeti`, sonra `__BOSLUK__` → 1000; Marsilya (`-0048→-0026-01-01`) ve Sirakuza (`-0211→-0026-01-01`) aynı: **-0026-01-01'de bitip roma-imp'e geçmiyor** (künye f -0026-01-16; ayrıca 15 günlük sahipsizlik). Capua (`-0337→-0026-01-01`) ve Veii (`-0395→-0026-01-01`) bitiyor, devamı yok. Şam ve Kudüs MÖ 28'den 395'e `__BOSLUK__`; İstanbul 117-289 `__BOSLUK__`. Palmira `0272→0395-01-01 roma-imp` (künye 0395-01-17; 16 gün). Öneri: Atina, Marsilya, Sirakuza, Capua `s:` dilimini `roma-imp`e uzat (`-0026-01-16`'dan 395'e; Atina Achaea eyaleti MÖ 27'de; Marsilya Narbonensis; kaynaklar yukarıdaki devletin kendi künyesinden okunmalı); Kudüs (Iudaea, Pompeius MÖ 63) ve Şam (Syria eyaleti MÖ 64/63, bkz. `selevkos` t -0062) için `roma-cumhuriyeti`/`roma-imp` dilimi — Boşluk merdiveni: TDV Şam/Kudüs maddeleri + Cassius Dio 37.
- **Noktası olmayan büyük şehirler:** Kartaca, Antakya, Korint, Selanik, Paris/Lutetia, Lyon, Trier, Köln, Aquileia, Sarmizegetusa, Tarsus yerleşim listesinde Roma çağında sahipli `s:` taşımıyor (ölçüm: `-28,-20,117,289,395` yıllarında "-"); harita bu bölgeleri en yakın peteğe emdiriyor → "orada yerleşim noktası var mı?" sorusuna cevap **yok**. Yeni yerleşim önerileri (mükerrer taraması + 3 km kuralıyla): Kartaca (MÖ 146 yıkım / MÖ 29 Colonia Iulia Concordia kuruluşu), Antakya (Selevkos t -0062 sonrası), Lugdunum/Lyon, Trier (Augusta Treverorum MÖ 17), Köln (CCAA, MS 50), Selanik, Korint (MÖ 44 koloni, `olaylar_antik_akdeniz.js:10`).
- **Batı Roma sonu çelişkisi (Değişmez 3 türü):** Roma `bati-roma→odoakar 0476-08-23`; Cartagena/Utrecht `bati-roma→boşluk 0476-08-28`; Ravenna `bati-roma→odoakar 0476-09-04`; künye t `0476-09-04`. Tek günde birleşmeli.
- Ölçer en geniş yıl 289 (48 yerleşim); bilinen en geniş sınır Trajanus 117 (Dacia, Mezopotamya, Arabia). 117'de Petra var (106'dan), Mezopotamya/Dacia noktası yok.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` roma-imp ve roma-cumhuriyeti künye kronolojileri: `odak_yer` Petra/Capua → Roma (+ Milano 395, İstanbul 330, Edirne 378); `roma-cumhuriyeti` kaynak alanlarında worldhistory.org/Britannica kaldır.
2. `data/devletler.js` bati-roma: `ic_not_t` metnini 0476-09-04'e göre yeniden yaz (Treccani'de 4 Eylül = Paulus'un ölümü).
3. Yerleşim `s:` (data/yerlesimler*.js): Atina, Marsilya, Sirakuza, Capua, Palmira — `roma-cumhuriyeti` t `-0026-01-01` → `-0026-01-16` ve `roma-imp` devamı; Roma/Cartagena/Utrecht/Ravenna Batı Roma sonu tek güne.
4. `data/olaylar_antik_akdeniz.js`: yukarıdaki eksik madde satırları (kaynaklar doğrulandıktan sonra); 0378 ve 0408/0410 maddelerinin gün hassasiyeti.
5. `bizans` f=330-05-11 vs `roma-imp` t=395-01-17 örtüşmesi için D205 kararı (Emre).

## Erişilemeyen kaynaklar
Britannica (403), parliament.uk (403) açılmadı. Okunamadı: Fasti Praenestini/CIL I² (16 Ocak), Cassius Dio 50-51, 57, 60, 68; Cornell 1995; Polybios 3.22; Treccani 'Odoacre' (künyede alıntısı var, tekrar çekilmedi); Hydatius; Zosimos; Jordanes; Cambridge Ancient History X, XIII, XIV; Oxford Classical Dictionary; Bowersock 1983. Yukarıdaki yeni maddelerin kaynak sütunu **doğrulanmamış aday**tır.
