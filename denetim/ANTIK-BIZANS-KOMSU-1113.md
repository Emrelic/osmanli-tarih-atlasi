# ANTIK-BIZANS-KOMSU-1113 — Bizans komşuları (330-1281): kronoloji × harita × kaynak (13 Kasım 2026)

Dal: `emrelic-1113-antik-bizans-komsu`. Ağır araç (denetle/renk_olc/denetle_yayin/ceviri) KOŞMADI; yalnız `girdi.yukle`/`oku_devletler` ölçümü, `denetle.olaylari_yukle` ile ±30 gün yakınlık sorgusu, `node --check`, `paketle ekle|yenile`, `surum_damgala`. Haritayı HAVVA koşusu üretir: aşağıdaki "sonra" haritada koşudan sonra görünür.
Ölçüm betikleri (geçici): scratchpad `olc.py`, `tara.py`, `dok.py`, `snap.py`, `d2.py`.

## 1. Ölçüm (önce)

| Soru | Ölçüm |
|---|---|
| (a) Künyesi var mı? | Bulgar (birinci-bulgar 681-1018, bulgar-carligi 1185-1396), Sırp (raska-buyuk-prensligi 1091-1166, sirbistan-nemanjic 1166-1402, duklja 1036-1186), Hazar, Avar, Peçenek, Kıpçak, Macar, Ermeni (ani-bagratli 885-1045, kilikya-ermeni 1199-1375, rupeniler), Gürcü (gurcistan 1008-), Sâsânî, Emevî/Abbâsî, Danişmendli/Selçuklu, Haçlı (kudus/antakya/urfa/trablus), Venedik, İznik/Trabzon/Epir/Selanik/Latin: HEPSİ künyeli (Roma-komşu raporu ile aynı künye denetimi geçerli). **Eksik künye yok**; tekrarlı künye var (aşağıda). |
| (b) Künyesi olup `s:` taşımayan ("görünmeyen") | **n=0:** `hazar` (650-965), `pecenek` (895-1091), `pecenek-konfederasyonu`, `utigur`, `vaspurakan-kralligi` (908-1021), `tiflis-emirligi` (650-1122), `alania-krallik` (850-1090), `orta-gurcistan-bagrati` (888-1008), `hirvat-dukalik` (818-925), `arsakuni-ermenistan`, `kusan-sasani`, `urfa-toros-beyligi`, Haçlı yan devletler (`kefalonya-palatin`, `girit-venedik`, `galata-pera`, `kefe-gazaria` yalnız 1281 sonrası olduğundan kapsam dışı). **Yetersiz:** `sasani` (224-651) yalnız Horasan'da 6 nokta (Merv, Nîşâbur, Serahs, Herat, Belh, İskenderiye) ⇒ İran/Irak çekirdeği Sâsânî olarak noktasız; `birinci-bulgar` yalnız Pliska, Preslav, Sofya (1 yıl), Üsküp; `ani-bagratli` yalnız 1000-1045. |
| (c) s: kırılması ±30 gün madde (yalnız en yakın madde, alâka ayrı) | Hedef 32 devletin ~230 kırılma günü: **6 kırılma günü ±30 gün maddesiz**: sasani 0500-01-01 (+849 g) ve 0619, buyuk-bulgaristan 0635, birinci-bulgar 0681, ani-bagratli 1045 (+199 g), kilikya-ermeni 1266-08-24. Kalan günlerin çoğu "en yakın madde" olarak alâkasız (ör. 1000-01-01 Dalmaçya maddesi ile Ani/Üsküp/Sofya) — gerçek Değişmez 2 `s:` borcu bu sayıdan büyük olabilir; `denetle_eslesme` koşulmadı. |
| (d) `__BOSLUK__` / sahipsiz komşu delikleri | Bizans komşu boşlukları: Hemedan 0224-1257 (**1033 yıl**, Sâsânî/İslâm İran'ı), Pliska 0971-1281, Tırnova 1000-1185, Sofya 1187-1281, Edirne 1204-1246, Vidin 1272-1281, Ani 1045-1046 ve 1175-1319, Kars 1064-1239, Astrahan 0965-1054, Kudüs/Şam (-585…1253/-608…969: Roma-Bizans devri, bu işin dışı, başka kapsam). |
| Nokta yoğunluğu | 34-47,5 K / 13-45 D kutusunda 1038 nokta; 900'de 37 noktanın sahibi var (bizans 17, boşluk 9), 1000'de 131. Balkan 330-1000 arası Bizans yalnız İstanbul + birkaç noktadır ⇒ komşu "görünürlüğü" öncelikle nokta eksikliğidir (yeni nokta mükerrer + koordinat tanığı ister, yazılmadı). |

## 2. Bulgular

1. **Hemedan 224→1257 BOŞLUK**: Sâsânî'den İlhanlı'ya 1033 yıl delik; TDV Hemedan yılları (642, 645, 810, 931, 1194, 1221) ve künye zincirleriyle (Râşidîn, Emevî, Abbâsî, Irak Selçuklu) büyük kısmı kaynaklı doldurulabiliyor.
2. **Pliska 971-1281 BOŞLUK**: Treccani "972'de yıkıldı" ⇒ Boşluk merdiveni ④ (yoksa kırp), `bit` 0971.
3. **Tırnova 1000-1185 BOŞLUK**: 1018 sonrası TDV bulgaristan "Bulgar toprakları tamamıyla Bizans'a girmiş, 1187'ye kadar sürmüş"; aynı bölgede Plevne zaten `bizans 1018-1187`.
4. **Ani 962-1000 eksik**: künye `kur=0962`, başkent taşıma 961/962; s: 1000'de başlıyordu.
5. **Peçenek/Kıpçak Karadeniz kuzeyi 895-1239 noktasız**: `pecenek` künyesi hiç s: taşımıyor; bozkır pseudo-noktaları 1281'de başlıyor. TDV: Peçenekler Don-Tuna bozkırı 895, Levunion 29 Nisan 1091, Kıpçak sahası Dinyeper→Tuna.
6. **Tekrarlı künyeler** (karar): `hazar` (650-965) ↔ `hazar-kaganligi` (630-965; Astrahan s: bunu kullanır); `pecenek` (0895-03-02/1091-04-29, TDV hicrî) ↔ `pecenek-konfederasyonu` (889/1122). İkisi de BOYALAR'da, çeviri/olay_taraf/kronoloji referanslı; birleştirme ÇEVİRİ ve kronoloji kaydırması gerektirdiğinden yapılmadı.
7. Sâsânî sınır kırılmaları 0500/0619 için Sâsânî-özel madde yok (Horasan noktaları 0500 ufuk işaretidir, Eftalit ikinci kol 557).
8. Kilikya t=1266-08-24 kırılması için ±30 gün madde yok (en yakın alâkasız 1266-07-02); Kilikya Ermeni f 1198/1199 çelişkisi Roma-komşu raporunda zaten beyanlı (Emre kararı).
9. Künye aşımı (benim dışımda, ölçüldü): 11 bozkır noktasında `altinorda` s: 1281-1502-03-01, künye t=1502-01-01 (2 ay aşım) ve f=1242 öncesi dönem yok.

## 3. Yapılan düzeltmeler

| Dosya | Düzeltme |
|---|---|
| `data/yerlesimler.js` Hemedan | BOŞLUK 0224-1257 → sasani 0224-04-28→0642 · hulefa-yi-rasidin →0661-07-29 · emevi →0750-08-05 · abbasi →0931 · BEYANLI BOŞLUK 0931→1118-05-06 (Ziyârî/Büveyhî/Kâkûyî yılsız, TDV) · irak-selcuklu →1194 · harizmsah →1221 · mogol-imparatorlugu →1257-03-27 (mevcut ilhanli f). Her dönemde kaynak + BEYANLI YAKLAŞIKLIK. |
| `data/yerlesimler.js` Tırnova | 1000-1185 BOŞLUK → 1000-1018 BOŞLUK (beyan korunur) + bizans 1018-1185 (TDV bulgaristan; Plevne zincirine hizalı) |
| `data/yerlesimler_once1281_yt_yer3.js` Pliska | 0971-1281 BOŞLUK dönemi kırpıldı; `bit` 0971-01-01 |
| `data/yerlesimler_ms1_1281_yeni.js` Ani | + ani-bagratli 0962-01-01→1000-01-01 (künye kur=0962; 961/962 çelişkisi beyanlı) |
| `data/yerlesimler_ek3.js` (Yediçkul, Camboyluk), `_ek6.js` (Zaporojye, Donets), `_ek_bozkir.js` (Yedisan) | s: başına pecenek 0895-03-02→1091-04-29 · kipcak →1239 · mogol-imparatorlugu →1242 · altinorda →1281 (TDV Peçenekler/Kıpçaklar; BEYANLI YAKLAŞIKLIK pseudo-nokta) |
| `data/kronoloji_sinir_antik_bizans_komsu.js` (YENİ, paket_09) | 8 madde: 0895-03-02 Peçenek, 1091-04-29 Levunion, 1239 Köten/Moğol, 0642 Hemedan teslimi, 0931 Hemedan/Ziyârî, 1194 Harezmşah, 1221 Moğol fethi, 0962 Ani başkent |
| `data/paket_09/13/18/24.js`, `paket_kunye.json`, `index.html` | `paketle ekle|yenile` + `surum_damgala` |

Önce→sonra (hedef kümesinde): Bizans-komşu boşluk-yıl (Hemedan+Pliska+Tırnova): 1033+310+185=1528 yıl → 0931→1118 (187) + 1000-1018 (18) = 205 yıl (−1323). Peçenek s:'li nokta 0→5, Kıpçak (1091-1239) 2→7; Sâsânî çekirdek noktası 0→1 (Hemedan); Ani Bagratlı dönemi 45→83 yıl. Doğrulama: 4 yeni/yeniden yazılan zincirde çakışma yok, künye aşımı yok (betikle), `node --check` 0.

## 3b. KASA turu (aynı gün, ikinci commit)

- Maddesiz kırılma (hedef küme): 6 → 1. Kapanan: Sâsânî 0619 (+0629), Büyük Bulgaristan 0635, Birinci Bulgar 0681, Ani 1045, Kilikya 1266-08-24 — sinir dosyasına kaynaklı madde (İskenderiye/Phanagoria/Pliska/Ani/Misis yer adlı). AÇIK: Sâsânî 0500 (Merv/Nîşâbur/Serahs): kayıt zaten «UFUK SINIR İŞARETİ» beyanlı, 500 için kaynaklı olay bulunamadı, uydurulmadı.
- Hemedan 931-1118 boşluğu kapandı (187 → 0 yıl; Hemedan'da toplam boşluk 1033 → 0 yıl, 224-1257): ziyari 931-935 · buveyhi 935-1023 (TDV Büveyhîler/Kâkûyîler) · kakuyi 1023-1043 · buyuk-selcuklu 1043-1118 (TDV Kâkûyîler 434/1042-43; Iranica Bosworth 437/1045-46 çelişkisi beyanlı). Hicrî yıl ilk günleri hesaplanmadı (YYYY-01-01 + yıl hassasiyeti, beyanlı).
- Sâsânî çekirdek noktaları: Ktesiphon (mevcut `yerlesimler_mo_zincir.js`; sasani 224-04-28→637, bit 0637) ve İsfahan (sasani →644 · râşidîn · emevi · abbasi → 935 · buveyhi →1007, ardından mevcut kakuyi; TDV İsfahan/Medâin). Yeni nokta/dosya AÇILMADI. Sâsânî s:'li nokta: 1 → 3 (Hemedan, Ktesiphon, İsfahan; Horasan'dakilerle toplam 9).
- Rey: TDV'de madde yok (rey = fıkıh terimi; Adududdevle/Abbâsîler maddelerinde yılsız geçer) → yazılmadı. Şiraz (693 Arap kuruluşu), Bağdat (762), Tebriz: Sâsânî dönemi için TDV tanığı bulunamadı → yazılmadı. Sırada: Iranica «Rayy», «Tabriz», «Shiraz» + TDV Rey şehri.
- Ani 962 dönemi kaynağı Iranica yerine TDV «Kars» (künye 962 maddesi) olarak düzeltildi. +11 sınır maddesi (toplam 19).

## 4. Yapılmayanlar / ölçülemeyenler

- Harita sonucu (koşu yok), tam `denetle`/Değişmez 3/8, `renk_olc`, `ceviri.py`: koşulmadı. Yeni 8 madde diğer dillerde YOK (çeviri tavan borcu).
- Kars 1064-1239 ve Ani 1175-1319 BOŞLUK (Gürcü Zakarid 1199-/Moğol); Edirne 1204-1246, Sofya 1187-1281, Vidin 1272-1281: kaynak aranmadı/önceki beyanlı; sıradaki.
- İran/Irak çekirdeği: İsfahan, Şiraz, Rey, Tebriz, Ahvaz, Bağdat, Kirman noktalarında s: yok (330-1281); yeni Sâsânî noktası yazılmadı (her biri için TDV/Iranica yıl zinciri gerekir). Ktesifon noktası hiç yok.
- Sırp (Raşka 1091 öncesi, Vlastimirović), Hırvat dükalığı, Vaspurakan, Alania, Tiflis emirliği, Orta Gürcistan Bagratlı, Utigur, Kuman Balkan sınırı: s: yok, sırada.
- Ermeni Kilikya, Haçlı, İznik/Epir, Danişmendli/Selçuklu zincirleri bu turda yalnız ölçüldü (Roma-komşu raporu künyeleri kapsıyor).
- Sâsânî 0500/0619 maddesizliği: bir madde yazılmadı (ufuk işaretleri).
- Ani 961/962 için ikincil kaynak (Britannica) kullanıldı, Iranica metni yeniden okunmadı.

## 5. Emre'ye sorular

1. `hazar`/`hazar-kaganligi` ve `pecenek`/`pecenek-konfederasyonu` tekrarlı künyeleri tek kimlikte birleştirilsin mi (çeviri + olay_taraf + kronoloji kaydırması gerekir)?
2. Hemedan 0931-1118 boşluğu için Büveyhî/Kâkûyî yılları TDV'de yok: Iranica "Hamadan" ile doldurma işi açılsın mı?
3. İran/Irak/Ermenistan Sâsânî noktaları (Ktesifon, İsfahan, Şiraz, Rey, Tebriz) için yeni nokta işi açılsın mı (mükerrer+koordinat tanığı)?
