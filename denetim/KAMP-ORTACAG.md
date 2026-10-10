# KAMP-ORTACAG — K7 · MS 476–1281 · BİRİNCİ TUR

Şartname: `oturumlar/KAMPANYA-DUNYA-1010.md` (K7). Oturum: KAMP-ORTACAG (EMRELIC, Opus).
Hiçbir `data/*.js` dosyasına dokunulmadı. Taban: `main` (`git rev-list HEAD..origin/main` = 0, 10 Ekim).

## 0. Önce ölçülen — dilimin bugünkü hâli
- `devletler.js`te dilimle kesişen künye (`f < 1281` ve `t > 0476`): **278**.
  Bunların **29**'u K0'ın "kronolojisi sıfır" listesinde (o iş K0'ın, burada yapılmadı).
- Koordinatörün saydığı ana aile **zaten künyeli ve kronolojili**: almanya (Kutsal Roma) · papalik ·
  emevi · abbasi · fatimi · buyuk-selcuklu · selcuklu · gazneli · kiev-rusu · birinci-bulgar ·
  bulgar-carligi · gurcistan · ani-bagratli-kralligi · kilikya-ermeni · sirbistan-nemanjic · bizans ·
  hazar-kaganligi · endulus-emevi. Bunların **hiçbiri** K0 listesinde değil.
- ⇒ Dilimin gerçek açığı **476–~900 Avrupası** (Germen krallıkları, Frank parçaları, Lombard
  İtalya'sı, Slav/bozkır yapıları) ve **bir avuç İslâm emirliği** (Girit, Bari, Dülefî,
  Me'mûnî, Hindûşâhî, Ya'furî). Bu tur ona yöneldi.

## 1. Ne üretildi (sayıyla)
| Dosya | Satır | Not |
|---|---|---|
| `KAMP-ORTACAG-POLITY.csv` | **41** polity | 41'inin de `kimlik_onerisi`si `devletler.js`te **YOK** (tarandı, çakışma 0) |
| `KAMP-ORTACAG-KRONOLOJI.csv` | **94** madde | `harita_degisimi` EVET 80 · HAYIR 14 · 41 polity'ye dağılmış |
| `KAMP-ORTACAG-SEHIR.csv` | **29** şehir | **27**'sinde `ILK_KAYIT_TARIHI` yazılı · 2'si `bulunamadı` (gerekçeli) |

- Polity uçları: 41 polity'de yazılı her `f`/`t` ucu için aynı günde bir kronoloji maddesi var —
  **istisna 2**: `gassani.f=0200` ve `himyeri.f=-0115` (ikisi de dilimin ÖNCESİ, madde yazılmadı).
- Biçim sınavı (scratchpad `sina.js`, node): sütun sayısı · tarih biçimi · ters/sıfır pencere ·
  kimlik çakışması · kronolojideki polity'nin tanımlı olması — **TEMİZ, çıkış 0**.
  ⚠️ Sınav TEK YÖNDE koştu (bozuk girdiyle ötüp ötmediği denenmedi).

## 2. Kaynak seti
| Kaynak | Kullanım | Erişim |
|---|---|---|
| **TDV İslâm Ansiklopedisi** (birincil) | İslâm dünyası + Bizans komşuları + Macar · Peçenek · Karluk · Bulgar | `islamansiklopedisi.org.tr/<slug>`, yönlendirme kapalı (302 = ölü) |
| **Hrvatska enciklopedija** (Leksikografski zavod Miroslav Krleža) — kısaltma **HE** | Germen/Frank/Lombard/İtalya/Slav/İngiliz/Pikt + Avrupa şehirleri | `enciklopedija.hr/clanak/<slug>` |
- Denendi, KULLANILAMADI: Britannica (403) · Encyclopaedia Iranica (403) · lex.dk / snl.no
  (slug 404) · Gran Enciclopèdia Catalana (404) · HLS (302). Larousse ve Encyclopedia of
  Ukraine 200 döndü ama bu turda kullanılmadı.
- Vikipedi hiçbir hücrede dayanak değil. Atlas kaydı/koordinatı dayanak değil.
- 🔴 **Koordinatlar** (`SEHIR.csv`) modern şehir merkezinin genel coğrafî değeridir — kaynaklı
  DEĞİL, atlas koordinatı da KULLANILMADI. Vâsıt (harabe) özellikle doğrulanmalı.

## 3. Kronoloji sistemi
- **476–1281 arası bütün günler JÜLYEN takvimindedir** (proleptik Gregoryen DEĞİL). Kaynakların
  verdiği günler (ör. 6 Mart 961, 29 Nisan 1091) Jülyen'dir. ⚠️ Atlasın bu dilimde hangi
  takvimi beklediği bu turda SORULMADI — Gregoryen'e çevrilirse +3/+7 gün kayar. Koordinatör kararı.
- **Hicrî kaynak** → `CLAUDE.md §4` sözleşmesi: hicrî aralık ∩ kaynağın mîlâdî yılı (∩ ay), kesişimin
  İLK günü. Dönüşüm **aritmetik (tabular) hicrî takvim**, epok 1 Muharrem 1 = 622-07-16 (Jülyen),
  sınandı. Uygulanan 10 yer: Girit f (H.212) · Kahire (Şâban 358 ∩ Temmuz 969) · Kayrevan (H.50) ·
  Kûfe (H.17) · Vâsıt (H.86) · Ya'furî (H.232) · Peçenek (H.276) · Dülefî t (H.284) · Merakeş (H.454) ·
  Rabat (H.545). `kesinlik` sütununda `hicri-sozlesme` diye beyanlı.
- Gün yoksa `YYYY-01-01`; aralık veren kaynakta seçilen uç ve NİÇİN o uç, `kesinlik`/`not`ta yazılı.
- Yıl yoksa yıl YAZILMADI → `bulunamadı`.

## 4. Koordinatöre — ölçülen ÇELİŞKİLER (atlas düzelir mi, karar sende)
1. 🔴 **dogu-frank (–911) → almanya (f=962-02-02): 51 yıllık BOŞLUK.** 911–962 (Konrad I, Sakson
   hanedanı) okunmadı. §3.5'in ② sınıfı (aynı polity sürüyor → GENİŞLET) adayı.
2. 🔴 **abhazya-kralligi t=985 (HE) → gurcistan f=1008: 23 yıl.** Ya boşluk ya iki uçtan biri yanlış.
3. 🔴 **sirbistan-nemanjic f=1166 ↔ HE 'Srbija': Nemanja ve kardeşleri Manuel I tarafından 1168'de
   getirildi, Nemanja 1168–96.** TDV 'sirbistan' bu cümle için okunmadı (TDV esastır — önce o).
4. 🟡 **ani-bagratli-kralligi 884–1045 ↔ HE 'Armenija': krallık 885'te kuruldu, 1071'e dek sürdü.**
   1045 (Ani'nin Bizans'a geçişi) ile 1071 (Selçuklu) farklı OLAYLAR — evrenleri farklı olabilir
   (§4 kural 4); çelişki sayılmadan önce TDV ile sınanmalı.
5. 🟡 **avar-kaganligi t=802 (HE)** — yaygın anlatı 796/803. **buyuk-moravya f=839 (HE)** — yaygın 833.
   İkisi de tek kaynaklı; ikinci akademik kaynakla sınanmalı.
6. 🟡 **Rabat**: atlasta `s: f=1150-01-01`; TDV hicrî 545'ten sözleşmeyle **1150-04-30** çıkıyor.
7. 🟡 Avrupa şehirlerinin çoğu atlasta **`f=1281-01-01` (pencere ucu)** ile başlıyor; bu dosyadaki
   `ILK_KAYIT_TARIHI`leri 1281 öncesidir (Hamburg 810 · Novgorod 859 · Smolensk 863 · Pskov 903 ·
   Poznań 968 · Krakov/Wrocław 985 · Gdańsk 997 · Leipzig 1015 · Kopenhag 1043 …). Pencere
   açılırsa bunlar sahneye o tarihte çıkar — **§6 sırası** (dizin → yoğunluk → pencere) senin.

## 5. Ölçülen TUZAKLAR (yeni vaka adayı)
- **TDV 'avarlar' = Dağıstan Avarları**, Avar Kağanlığı DEĞİL (canlı slug, yanlış madde — tuzak ②).
  Kağanlık HE'den alındı.
- **HE 'riga' = roka bitkisi (Eruca sativa)**, şehir DEĞİL — aynı tuzağın başka ansiklopedideki eşi.
  Riga bu turda YOK.
- **TDV 'franklar' bir terim maddesidir** ("Avrupalılara verilen ad") — devlet tarihi vermez.
- **TDV toplu çekimde 503 verir** (8 eşzamanlı istek). 2 eşzamanlı + geri çekilme (4/10/20 sn) ile
  hepsi döndü. 503 ölü slug DEĞİLDİR (tuzak ⑤'in kardeşi).
- **Bağdat Emre kuralını sınıyor:** TDV "Hammurabi kanunlarında Bagdadu şehrinden bahsedilir" der ⇒
  ilk kayıt MÖ 18. yy, Mansûr'un 762 şehri bir YENİDEN kuruluş. Tek yıl yok ⇒ `bulunamadı`, K1'e devir.
- **Zagreb kuralın tam örneği:** piskoposluk ~1091/1094 KURULDU, ilk KAYDI 1134 ⇒ `ILK_KAYIT` 1134.

## 6. `bulunamadı` — ADIYLA
**Polity olarak ya da bir ucu yazılamayanlar (CSV'de satırı var):**
burgund-kralligi (f,t) · orta-frank (t: 855 HE'de yok) · kapua-prensligi (t) · wessex-kralligi (f,t) ·
pikt-kralligi (f) · sirp-knezligi (f) · abhazya-kralligi (f) · karluk-yabguluk (t) · buyuk-bulgar
(t: "665'ten sonra") · yufiri (t) · lahmi (f) · bretanya-kralligi (t: 909–939 süreç) · akitanya-dukaligi
(t: 732–768 aralık).

**Hiç satır açılamayanlar (kaynak tarih vermedi ya da erişilemedi):**
- Spoleto Dükalığı — HE: "VI. yy ikinci yarısı" / "VIII. yy sonu" (yılsız).
- Çaka Beyliği (İzmir) — TDV 'caka-bey': başlangıç yılı YOK, ölüm "488/1095 [?]" (önceki oturum da ölçtü).
- Oğuz Yabguluğu — TDV 'oguzlar' kuruluş/son yılı vermiyor (önceki oturum da ölçtü).
- Bergavâta · Nekûr Emirliği — TDV 'berberiler' yalnız adlarını anıyor; 'bergavata', 'nekur' slug 302.
- Habbârîler (Sind) — TDV 'sind' / 'mansure--sind' hânedan tarihi vermiyor; 'habbariler' 302.
- Hasanveyhîler — TDV 'hemedan'da geçmiyor; slug 302.
- Yemen Eyyûbîleri · Sincar/Cezîre Zengîleri — TDV 'eyyubiler'/'zengiler'de var ama uç cümleleri bu
  turda bulunamadı (ana künyeler mevcut: eyyubi, zengi-musul).
- Vaspurakan · Siunik · Tao-Klarceti · Kilikya Rubenid Baronluğu (1080–1198) — HE 'Armenija'/'Gruzija'
  ve TDV slug'ları tarih vermedi. ⚠️ Vaspurakan için `ONCE1281-ANADOLU-KUNYE.json`da (908–1021) önceki
  bir öneri VAR ve `devletler.js`e İNMEMİŞ — yeniden araştırmadan önce o dosyaya bak.
- Mercia · Northumbria · Kent · Doğu Anglia · Dál Riata — HE slug'ları 302.
- Bohemya Dükalığı (1198 öncesi) — HE 'Češka' yılsız.
- Göktürk / Türgiş — K6 (KAMP-DOGU) dilimi; önceki oturumun ölçümü: TDV'de ayrı madde YOK.
- İtalya Krallığı (888–962) · Odoakr İtalyası (476–493) · Türkşâhîler · Afrîgî Hârizmşahları ·
  Moskova (1147) · Riga — bu turda okunmadı.

## 7. YARIM BIRAKILAN YER — adıyla
Bu tur **476–~900 Avrupası + İslâm emirlikleri** üzerinde durdu. Sınır:
1. **Doğu Frank 911–962** ve **İtalya Krallığı 888–962** — en acil boşluk (bir künye zincirini kırıyor).
2. **Kafkasya 476–1008** (Gürcü/Ermeni prenslikleri) — TDV 'gurcistan'ın tarih bölümleri (2/3, 3/3)
   çekilmedi; yalnız coğrafya bölümü okundu.
3. **Anglosakson heptarşisi** — Wessex dışında hiçbiri.
4. **Kuzey Afrika Berberî emirlikleri** — TDV ayrı maddeleri slug olarak bulunamadı; `ara` (ajax)
   denenmeli.
5. **Kronoloji derinliği**: bu tur doğuş + yıkılış + birkaç büyük olay; başkent değişimleri yalnız
   kaynak yılı verdiğinde yazıldı (Aachen 794 · Pavia 572 · Kartaca 439 · Toledo ~555 yazılmadı: yaklaşık).

## 8. Kaynak önbelleği
Çekilen 120+ sayfa oturum scratchpad'inde (`KAMP-ORTACAG/onbellek`, `tdv-*` / `he-*`); depoya
GİRMEDİ. İkinci tur isterse yeniden çekilir (araç: aynı dizinde `k.py`; TDV için 2 eşzamanlı +
geri çekilme şart).
