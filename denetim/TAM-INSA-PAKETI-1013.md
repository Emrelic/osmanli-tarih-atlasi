# TAM-INSA-PAKETI-1013 — "sonraki tam inşa" için motor/renk yamaları

13 Ekim 2026 · GRUP=MOTOR-PAKETI · taban: origin/main 1daef2a98 · ölçüm ağacı: bu worktree (HAVVA değil).
**KOŞU BAŞLATILMADI. Motor dosyalarına (uret_petek.py, renkler.py, girdi.py, motor_onbellek.py) yazılmadı; yamalar yalnız `denetim/*.diff`.**

## 1. Uygulama sırası ve bağımlılık

Hepsi `arac/uret_petek.py` (A-C) ve `arac/renkler.py` (D). Sıra ZORUNLU (B, C bir öncekinin bağlamını kullanır):

| # | Dosya | Hedef | Bağımlılık | `git apply --check` (taze origin/main) |
|---|---|---|---|---|
| A | `denetim/H0016-BINME-MOTOR-1006.diff` (mevcut) | Pindus/Tırhala Osmanlı∩Bizans binmesi: Osmanlı g/gt'den `_komsu_toprak_cikar("OSMANLI",…)` | yok | temiz (ofset 6) |
| B | `denetim/MOTOR-EKLENTI-BOLUSTUR-1013.diff` (YENİ) | "kapama-dışı" gövde çakışması: eklenti en yakın sahipli noktaya bölüştürülür | yok (A'dan bağımsız, ama A ile birlikte anlamlı: Osmanlı çağrısı B'yi de çalıştırır) | temiz |
| C | `denetim/MOTOR-COL-GIRINTI-1013.diff` (YENİ) | çöl dolgusu girinti yumuşatma (dolgu ve 200 km tavan KALIR) | **B'den sonra** (B'nin eklediği satırlara dayanır) | B uygulanmadan REDDEDİLİR (beklenen); A→B→C zinciri ayrı sahte depoda temiz uygulandı, çıktı sha256 eşit |
| D | `denetim/MOTOR-RENK-PAKETI-1013.diff` (YENİ) | `renkler.py`: 5 yeni BOYALAR kimliği + karakoyunlu rengi | yok | temiz |

Zincir kanıtı: A, B, C sırayla boş bir depoya uygulandı (3x rc=0). B ve C için motor çıktısı DEĞİL, yalnız sözdizimi (`ast.parse`) ve B için sentetik birim sınaması yapıldı (aşağıda). Gerçek etki ancak koşuda görünür.

Eski diff'ler (envanter, 25 diff tarandı): `MOTOR-BANT-TAM-1005`, `MOTOR-BILINEN-ALAN-1004`, `MOTOR-BOZUK-KIYI-1001`, `MOTOR-V-KID-1004`, `P84-UFUK-BANT-KOD-1006-MOTOR`, `PAKET-0083-B-KATMAN-BINME`, `YAMA-MOTOR-0930-*`, `UMIT-W54b-RENK-TAMINSA-1006` = ZATEN UYGULANMIŞ (ters `--check` temiz). `ONCE1281-CISLEITHANIA-RENK-1005` (itilaf-emaneti) çatışır çünkü kimlik zaten `renkler.py`de var. `NEGATIF-YIL-1010-B-v2`, `TUZ-DORT-DOSYA-1010-v3`, `PAKET-0076-DOBROTIC-1004` çatışır (bayat); bu pakete ALINMADI — kendi sahipleri yeniden üretmeli. Tek canlı eski motor yaması: H0016.

## 2. Madde madde

### (1) Gövde çakışması kapama-dışı sınıfı → B
Kök neden: GOVDE-CAKISMA-0079 gövdeden komşunun PETEĞİNİ çıkarır; kalan çakışma hiçbir petekte değil, iki devletin kendi ekleme adımlarında (kapat/B2/B3/dolgu). Ölçüler (KUTU-HUKUM-SIRADA-B-1012, 12 Eki, koşu 23 gövdesi): Hadramut kesiri×kuayti %2,76 (249 hücre kapama-dışı + 46 sahipsiz); Karadağ×Osmanlı 1830/1850 %1,48 (577/611 kapama-dışı); Bulgaristan 1884 %1,31 (361 hücre, sirbistan×vassal 348); Silistre-Eflak macaristan×vassal 97; dünya 0,25° 1850 %2,11 (dene×ingiliz-kuzey-amerika 626 …).
Yöntem: eklenti E = gövde − kendi `aktif` petek birleşimi; E yalnız o gün SAHİPLİ noktaların Voronoi'sinde kendi hücrelerine düşen kısım kadar korunur ⇒ iki devletin eklentisi ayrık hücrelerde, çakışma yapısal 0; petek içi alan değişmez.
Sentetik sınama (bu worktree dışı, `scratchpad/mp_test_eklenti.py`): iki devlet + sahipsiz nokta + ortak ek disk: çakışma 21,08 → 0,0; petek içi kayıp 0; Voronoi hatası 0.
**Beklenen etki:** her kesitte kapama-dışı çakışma ≥%90 düşer (öngörü, ölçülmedi); sıfır olması gereken yerler: ayrık hücre. **Bedel (sayaç basılır):** komşunun doldurmadığı eklenti kenarı geri çekilir ⇒ boyasız toprak artabilir; `🧱 EKLENTI-BOLUSTUR-1013` satırı (öngörü: hata 0). Kapatma: `MOTOR_EKLENTI_BOLUSTUR_KAPALI=1` (bit-bit eski).
Kapsam dışı: `himaye_govdeleri`; kuzey Amerika küçük devletler yabancı gövde yolundan geçtiği için KAPSANIR; Bulgaristan/Sırbistan "vassal" = Osmanlı tâbi gövdesi ⇒ A+B ile kapsanır. Noktasızlık kaynaklı kalıntı (Niğbolu Romen kıyısı) nokta ister, motor değil.

### (2) Pindus Osmanlı∩Bizans binmesi (0084/H-0016) → A
Mevcut `H0016-BINME-MOTOR-1006.diff` 0084/H-0016 sorusunun cevabı (petek bazlı çıkarma, `kapat` ölçütünü nokta yerine petek alanına genişletmekle eşdeğer: o gün başka sahibi olan yerleşimlerin peteği Osmanlı doğrudan ve tâbi gövdesinden çıkar; sahipsiz petek çıkmaz, 1299 İnegöl köprüsü korunur). Hedef: 1396-1428 Tırhala batısı 1.245-1.343 km² binmenin ≥%84-95'i. Koşu sonrası ölçüm: `__sahip(21.71,39.06,'1414-06-01')` yalnız Y:bizans. Bedel: yabancı sahipli ama yabancı gövdenin boyamadığı petek Osmanlı'ca da boyanmaz (kasıtlı; sayaç `🧱 H0016`). Kapatma `MOTOR_OSM_KOMSU_CIKAR_KAPALI=1`.

### (3) Çöl dolgusu girinti yumuşatma (0034/H-0028, 0035/H-0047) → C
Emre: dolgu KALIR. C yalnız gövdeye 0,5° (~55 km) morfolojik kapama uygular, eklenen kısmı `COL ∩ KARA` ile kısıtlar (çöl dışı hiç oynamaz), eklenen alan gövdenin %20'sini aşarsa o gövdeye dokunmaz (sigorta), komşu çıkarma/B bölüşümü yeni kenarı tekrar keser. Yarıçap ÖLÇÜLMEDEN seçildi — tunable `COL_GIRINTI_DERECE`. Ölçüm referansı: 1611-03-25 Osmanlı Libya kutusu 1.275.338 km², 200 km üstü 27.896 km² (%2,2); 1821-01-04 Dongola tâbi 37.305 km². Kapatma `MOTOR_COL_GIRINTI_KAPALI=1`. Koşu sonrası: aynı iki kutu görsel + `🏜 COL-GIRINTI-1013` satırı (sigorta sayısı >0 ise yarıçap küçült).

### (4) Mısır isyan rengi ve ton (0075/H-0010, H-0029) → YAMA YAZILMADI, karar gerekiyor
Veride `statu:"asi"` = 0; Mısır eyaleti Osmanlı tâbi katmanı (`TABI_RENK = acikTon("#8e0b22")` = #a53c4e, `js/app.js`, motor DIŞI) ile boyanıyor; `kavalali` (#20d820, yalnız 1832-33) ayrı kimlik. "Bir tık açık" Mısır tonu (#bb6d7a, kat 0,40) tâbi #a53c4e'ye dE94 7,5, `renk_olc` eşiği 12'nin ALTINDA ⇒ ölçütü çiğnemeden "bir tık açık" mümkün değil. Seçenekler: (a) H-0010 önerisi: yeni statü açma, isyan taramasının hattıyla yetin; (b) Mısır'a ayrı kimlik/yerleşim-dönemi `s:` (`misir-kavalali` zaten 1805-1914 künyeli, `harita:"kavalali"`) + ayrı hex (veri işi + `renkler.py` tuzu). Önerim (a). Seçilirse bu pakette yama yok.

### (5) Kalmuk künye + Zaporojye/Hetmanlık + Don bozkırı (Sal) → D (renk kısmı)
`YAMA-BOZKIR-KAZAK-0915.json` renk önerisi kimlikleri `kalmuk`/`kazak-hetmanligi`; gerçek künye kimliği `kalmuk-hanligi`. D: `kalmuk-hanligi #a4eb3b`, `kazak-hetmanligi #c73beb` (`zaporojye` zaten #2048c8 BOYALAR'da). `renk_olc --dogrula`: eşik altı komşu YOK. Veri kısmı (Sal bozkırı 1502-1557 `__BOSLUK__` · 1557-1632 Kırım gevşek · 1632-1771 Kalmuk; `s:` yazımı, "Kırım gevşek" kaynak notu) bu pakette değil: `ARASTIRMA-BOZKIR-KAZAK-0915.md` satır 40/145 ve `ARAC-BOZKIR-KAZAK-UYGULA-0915.py`; Emre 13 Eki kararıyla 1502-1570 bozkır `__BOSLUK__`/don-kazak uygulanmış. **Kalmuk `s:` verisi yazılmadan renk işe yaramaz** (bugün hiçbir yerleşim bu kimlikle `s:` yazmıyor).

### (6) Klaipėda/Riga, Kartli/Kaheti/Samtshe, Karakoyunlu/Gürcistan → D
- `teuton-devleti #6c24d8`, `livonya-tarikati #6cd824` (künyede `boya_gerekli:true`), `kartli-kralligi #7224d8` (`renk_olc --oner` önerisi, en yakın engel dE 13,9-67,6). `kaheti-kralligi` ve `samtshe-atabegligi` ZATEN BOYALAR'da (#5ad224, #2430d8); asıl eksik `s:` verisi (Kartli/Kaheti/Samtshe noktalarında `s:` kimliği) — veri işi. Not: `kaheti-kralligi` ile `dobruca-despotlugu` hex paylaşımı `renk_olc` uyarısı (beyansız paylaşım, ayrı konu).
- Karakoyunlu #e018e0 → #a000e0: gürcistan #e020b0 ile dE76 12,9→21,3, dE94 6,3→12,5; `renk_olc --dogrula` karakoyunlu için eşik altı komşu YOK (denenen #9a10e8, #8a2be2, #7a1ae0 eşik altı komşu çıkardı; #c612ea/#b010f0 temiz ama dE94 <12).
- Doğrulama (taze sahte ağaçta D uygulanmış `renkler.py` ile): `--dogrula` "0 fark · eşik altı komşu yok"; tam `renk_olc` düz zemin 0 ihlal, YAKIN AMA DEĞMEYEN 15 (D öncesi taban ayrıca ölçülmedi — HAVVA D öncesi/sonrası karşılaştırsın). Yeni 5 kimliğin gerçek komşuluğu `s:` verisi inince `py arac/renk_olc.py --dogrula` ile YENİDEN ölçülmeli.

### (7) Argunlu künyesi
Atlas konusu Zünnûn Argun hanedanı (Kandehar–Sind) — İlhanlı Argun Han DEĞİL. Künye taslağı `ARASTIRMA-MOGUL-KANEM-IRAN1913-1013.md` "Ek: Argunlu künyesi" (id `argunlular`, f 1479-01-01, t 1555-01-01, kaynak TDV `argun--sind`, `zunnun-argun`, Iranica). `devletler.js`'e KÜNYE girmeden BOYALAR'a girmez (id kuralı) ⇒ D'ye alınmadı. Sıra: önce künye (veri, motor değil), sonra bir `renk_olc --oner argunlular` + D'ye satır. Kaynak çelişkileri (1554/1555/1556 bitiş, Multan 1526-28, 1479 yeri) ek bölümde.

### (8) Dardanel Asya yakası 1346-1352 Bizans boyama hatası (0016/H-0004)
Bulgu (kod+veri okuma, KOŞTURULMADI): `data/yerlesimler.js:162` Çanakkale `kur:"1452-01-01"` + `d:[{f:"1345-01-01",t:"1402-07-28",y:"ilhak"}]`; `devir_beyani`: "1281-1452 dönemleri BÖLGE vekilidir". Motor `kur > g` olan yerleşimin peteğini o günden önce VERMEZ (uret_petek.py:4933,4951,4987,5025,6407) — Osmanlı `aktif` kümesine 1345'te girer ama 1346-1352'de petek yok ⇒ Dardanel Asya kıyısı en yakın mevcut peteğe (Bizans Gelibolu/Karesi sonrası) emilir. Lapseki'ye yerleşim noktası da yok (grep boş). **Kök neden hipotezi: `kur` kapısı ile `d:` 1345 tutarsızlığı + Asya kıyısında Osmanlı noktasının yokluğu** (CLAUDE.md: "noktası olmayan bölge en yakın peteğe emilir"). Motor yaması gerekmez; çare VERİ: Çanakkale `kur`unu devir_beyani'ndaki bölge-vekili mantığıyla kaldırmak (ya da 1345'e çekmek) + Lapseki/Çardak için kaynaklı nokta. Denetle Değişmez etkisi koşudan önce ölçülmeli. HAVVA'da doğrulama: 1346-06-01 ve 1352-06-01'de (25.9-26.37E, 39.95-40.35N) Osmanlı alanı; 1354-04-01'de Osmanlı Asya 445,9 km² düzeliyor.
Bu hipotez motor kodunu okuyarak çıkarıldı, harita üzerinde sınanmadı. Ayrı iş olarak veri yaması önerilir; bu pakette diff YOK.

### (9) Almanya 962-1945 tek künye, boya adı 'Kutsal Roma / Almanya'
ZATEN YAPILMIŞ: `devletler.js:1487` `almanya` f 0962-02-02 · t 1945-06-05, "Nazi Almanyası ayrı künye açılmadı"; `renkler.py:617` `"almanya": ("Kutsal Roma / Almanya", "#78d028")`. Yama gerekmez (zaten-dogru).

## 3. HAVVA için komut listesi (KOŞU BAŞLATMA — Emre onayıyla, sırayla)

```
# 0. önkoşul: main güncel, motor dondurma bildirimi (KOSU-YAYIN.md), başka koşu yok
git fetch origin --quiet ; git rev-list --count HEAD..origin/main      # 0 olmalı
# 1. yamalar (motor dosyaları — yalnız HAVVA'nın yetkili oturumu)
git apply --check denetim/H0016-BINME-MOTOR-1006.diff       && git apply denetim/H0016-BINME-MOTOR-1006.diff
git apply --check denetim/MOTOR-EKLENTI-BOLUSTUR-1013.diff  && git apply denetim/MOTOR-EKLENTI-BOLUSTUR-1013.diff
git apply --check denetim/MOTOR-COL-GIRINTI-1013.diff       && git apply denetim/MOTOR-COL-GIRINTI-1013.diff
git apply --check denetim/MOTOR-RENK-PAKETI-1013.diff       && git apply denetim/MOTOR-RENK-PAKETI-1013.diff
# 2. derleme/sözdizimi ve renk
py -c "import ast;[ast.parse(open(f,encoding='utf-8').read()) for f in ('arac/uret_petek.py','arac/renkler.py')]"
py arac/renk_olc.py ; py arac/renk_olc.py --dogrula <(kalmuk-hanligi #a4eb3b, kazak-hetmanligi #c73beb, teuton-devleti #6c24d8, livonya-tarikati #6cd824, kartli-kralligi #7224d8, karakoyunlu #a000e0)
# 3. tam inşa (7-8 saat) — KOSU-YAYIN.md'ye göre
py arac/uret_petek.py
# 4. koşu logunda aranacak satırlar (öngörüler)
#    "🧱 H0016 ..."            dönem > 0 ; Tırhala batısı 1396-1428 Osmanlı∩Bizans ≥%95 düşmeli
#    "🧱 EKLENTI-BOLUSTUR-1013" voronoi hatası 0 ; boşalan 0
#    "🏜 COL-GIRINTI-1013"     hata 0 ; sigorta >0 ise COL_GIRINTI_DERECE'yi küçült
# 5. ölçüm (koşu çıktısına): GOVDE-CAKISMA-0079-olc.py ile Hadramut 1884 (41-60E,8-24N, 0,1°), Karadağ 1830/1850
#    (17,5-20,5E,41,5-43,5N, 0,01°), Bulgaristan 1884, dünya 0,25° 7 kesit; Libya 1611-03-25 ve Dongola 1821-01-04 görsel
py arac/denetle.py ; py arac/odak_olc.py ; py arac/paketle.py yenile ; py arac/surum_damgala.py
```
Önce-sonra tablosu (taban = bugünkü koşu 23): dünya 0,25° çakışan hücre/boyalı: 1281 %0,00 · 1453 %0,18 · 1600 %1,08 · 1800 %1,10 · 1850 %2,11 · 1884 %1,14 · 1921 %0,10. Öngörü (ölçülmeden): her kesitte ≥%80 düşüş; boyasız alan artışı ayrıca ölçülmeli (B'nin bedeli).
Geri alma: `MOTOR_EKLENTI_BOLUSTUR_KAPALI=1`, `MOTOR_COL_GIRINTI_KAPALI=1`, `MOTOR_OSM_KOMSU_CIKAR_KAPALI=1` ortam değişkenleriyle ilgili yama bit-bit kapanır (tuz yine değişmiştir, önbellek yeniden kurulur).

## 4. Emre'ye açık sorular
1. (4) Mısır: seçenek (a) mı (b) mi? (b) renk eşiğini çiğnemeden "bir tık açık" vermiyor.
2. B yaması bedel taşıyor (boyasız alan artabilir) ve ÖLÇÜLMEDEN yazıldı; tam inşadan önce küçük pencerede deneme koşusu mu (örn. yalnız devletler fazı tek devlet) yoksa doğrudan mı?
3. (8) Dardanel için Çanakkale `kur` kaldırma veri yaması yazılsın mı (ayrı iş)?
4. (7) Argunlu `bolge`: `guney-asya` mı `orta-asya` mı; künye ve nokta ayrı veri işi.
5. Kalmuk/Kartli/Kaheti/Samtshe `s:` verisi yazılmadan D'deki yeni renkler haritada görünmez.

## 5. Yan ürünler
- `denetim/ENKLAV-TARAMA-1013.md` + `.json` (0080/H-0019): 17 gün, 250 km bağ eşiği, 5.452 gün-aday / 1.774 tekil: u 1.028 · b 422 · c 302 (veri hatası şüphesi) · a 22. Canlı D7 kovası bu ağaçta 800 (725 değil).
- `denetim/ARASTIRMA-MOGUL-KANEM-IRAN1913-1013.md`: 3 koşullu nokta önerisi (Bay, Kumul/Hami 1513 sonrası, Sauran), Kanem-Bornu için 0; Birni N'gazargamu koordinat tutarsızlığı (~210 km) bağımsız ikinci kaynak bekliyor; İran 1913 hattı `d_sinirlar*.js`te, Kotur/Küçük Ağrı/Bacirge 1913-1920 `hat:null`.
