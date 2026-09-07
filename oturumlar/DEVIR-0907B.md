# DEVİR — 7 Eylül 2026, öğle · compact öncesi kayıt

> `*ct`: uçmaması gereken her şey. Bu dosya bir sonraki turun TABANIDIR.

## ⓪ KOŞU 8 — CANLI
```
başlangıç   7 Eylül 11:17:46 · fırlatıcı `arac/kos_ve_yayinla.py`
PID         ZİNCİR 9024 · ÜRETİM 10780
nöbetçi     arac/_bekci_kosu7b_cikis.py 9024 → denetim/BEKCI-KOSU8B.out
log         kosu8.log
```
🔴 **NÖBETÇİ BİR KEZ ÖLDÜ VE 43 DAKİKA FARK EDİLMEDİ** — saatlik canlılık
satırındaki `⏳` (U+23F3), Windows cp1254 konsolunda `UnicodeEncodeError`
attı. Düzeltildi (stdout `errors="replace"` + `yaz()` içinde iki yazım
ayrı `try`). ⇒ **Nöbetçinin sessizliği bir ölçüm değildir; `BEKCI-*.out`
dosyasına BAKILIR.**

🔒 DONUK (koşu bitene kadar): `data/*.js` · `arac/uret_petek.py` ·
`arac/renkler.py` · `arac/girdi.py`
🟢 SERBEST: `denetim/` · `oturumlar/` · `js/app.js` · `css/` · öteki `arac/*.py`

## ① KOŞU BİTİNCE — SIRAYLA, ve ilk üçü BENİM
```
① uret_petek.py: `vl` çapası `_dn.get("k") or _dn.get("kid")` YANLIŞ SIRA
   ⇒ `kid` varsa KÜNYENİN `ad`ı · `kid` yoksa ETİKET YOK
   (KIMLIK-KID-0907 buldu · ölçüm: 382 → 321 çapa)
② yamaları uygula (aşağıda ③) → denetle.py → denetle_yayin.py
③ sürüm damgası → yayın
④ Emre'nin açık isteği: ikinci geçiş süresi
   → denetim/ARAC-IKINCI-GECIS-SURE-0907.py (0906'lık aleti DEĞİL, o
     motoru import ediyor ve `uret_petek.py:39` reddediyor)
```

## ② BUGÜN İNENLER — yayına giren, ama HENÜZ ÜRETİLMEMİŞ
```
çakışma      91 → 23  (dört ayrı kusur düzeltilerek)
sahiplik     ~247 kayıt · künye 617 → 627
Çukurova     6 TDV maddesi yazıldı → Değişmez 2i 9→3 · Değişmez 7 663→661
mükerrer     12 kayıt ölçüldü · 6'sı tekilleştirildi (NO-OP doğrulandı)
motor        `vl` tâbi etiket çapası yazıldı (sıra kusuru ①'de)
```
🔴 **14+ commit PUSH EDİLMEDİ** ve yayın kapısı BAYAT diyor — bu doğru
davranış, koşu bitmeden push edilmemeli.

## ③ SAHADA DOKUZ İŞÇİ — hazır kıta 0
```
CAKISMA-0907        local_5f1ea168  23 çakışma · küme 1 (5 Mısır) TESLİM
KIMLIK-KID-0907     local_9927df76  kid 291→341 · yama denetim/'de · TESLİM
YUK-FETCH-0907      local_a7692d4b  fetch+JSON %51 · diff ONAYLANDI (aşağıda)
KAYNAK-DENETIM-0907 local_a6f8263a  alet YAZILDI+KOŞTU · 20 demet/87 uç 🔴
ENKLAV-0907         local_c3fd502b  661→652 · Değişmez 7 ✗→✓ · TESLİM
GORSEL-0907         local_e9ebc14b  şema ONAYLANDI · pilot listesi bekleniyor
EKOKUMA-0907        local_6967b6e7  tanımlar ONAY · 6 kayıt hazır (Opus'a çevrildi)
KADEME-MODEL-0907   local_315b3835  🆕 kademe C veri modeli · BLOKE EDİCİ
CIPA-1923-0907      HK-e6f214       🆕 1923 envanteri (kimlik: adın ilk 6 harfi)
```
Şartnameleri `oturumlar/<AD>.md`. Tahta: M-3100…M-3134.

🔴 **AD ÇAKIŞMASI — `SARTNAME.md`de BOŞLUK, ölçüldü (CIPA-1923-0907):**
Dört hazır kıta aynı iki dakikada açıldı ve **dördünün adı tahtada ayırt
edilemez**; `--kim "OPUS HAZIR KITA"` yazan iki oturum koordinatör için
TEK oturum görünür. `SARTNAME.md` `-GGAA` damgasını şart koşuyor ama
**hazır kıtalar o kuralın dışında** — onları koordinatör değil Emre
açıyor. Çare: kıta kendi kimliğinin ilk 6 harfini kullanır (`HK-e6f214`),
koordinatör kalıcı adı verince ona geçer.

## ④ BEKLEYEN YAMALAR — `denetim/` altında, UYGULANMADI
```
yer_yama_kid_kimlik_0907.js     44 yerleşim · 50 dönem (KIMLIK-KID)
yer_yama_misir5_0907.js         5 Mısır noktası (CAKISMA)
+ HUKUM-CAKISMA-MISIR5-0907.md
yer_yama_enklav_c_0907.js       8 kayıt · Değişmez 7 661→652 (ENKLAV)
EKOKUMA-YENI-0907.json          6 ek okuma kaydı (EKOKUMA)
```

## ④b `index.html` GEOMETRİ YÜKLEYİCİ — ONAYLANDI, SIRASI BAĞLAYICI
`YUK-FETCH-0907` ölçtü: `<script>` 14,1 sn ↔ `fetch`+JSON 6,9 sn (**%51**),
kontrol gruplu, iki koşu.
🔴 Bir SESSİZ kusur yakalandı ve kapatıldı: yükleyici sürümü sabitliyordu
(`V = "?v=r6711"`) ve `surum_damgala.py:25` yalnız `src="…"` **ve yalnız
`.js`** yeniden yazıyor ⇒ `.json` istekleri damganın menzilinde HİÇ
olmayacaktı. Yayın r6800 olur, yükleyici r6711 ister, tarayıcı
önbellekten **bayat geometri** verir; hata YOK, konsol TEMİZ.
🟢 Çare: sürüm damgalanmış bir etiketten TÜRETİLİYOR. Ateşleme sınavı
koşuldu (`?v=r9999` zorlandı, istenen URL de `r9999` çıktı).
```
SIRA (değiştirilemez):
   koşu 8 BİTER → `.json` üretilir (1.MURAT'ın işaretiyle)
   → DİFF İNER → geri düşüş sınavı İKİ YÖNDE + damga sınavı → yayın
```
⚪ ÖLÇÜLMEDİ: `.json` GitHub Pages'te gzip'leniyor mu? Gzip yoksa telde
94,9 MB ham gider ve indirme, ayrıştırma kazancını yiyebilir.

## ⑤ 🆕 ÜÇ KADEME — Emre'nin 7 Eylül kararı
Tam hüküm: **`denetim/HUKUM-UC-KADEME-0907.md`**
```
A  şehir etki alanları toplamı — benekli/enklavlı/koridorlu HAM hâl
B  A'nın rötuşlanmışı — boşluk/enklav/koridor/sahipsiz arazi PAYLAŞTIRILMIŞ
C  🆕 modern uluslararası antlaşmalarla çizilmiş HUKUKÎ sınır
```
🟢 ÖLÇÜLDÜ: `veri-kaynak/ne_10m_admin_0_countries.geojson` **ZATEN DEPODA**
(13 MB · 258 ülke · Sahra dokuzunun dokuzu). C'nin geometrisi var, bağlı değil.
🔴 AMA o dosya **BUGÜNÜN** sınırları: Hatay 1939 · Aouzou 1994 · Cezayir-Fas
1963 ⇒ 1923'e olduğu gibi kopyalanamaz.
🔴 HÜKÜM: C bir **görünüm anahtarı değil ÖRTÜ** — geçiş tarihi HARİTA
başına değil **SINIR başına** farklı.
🔜 SIRA: ① model ② çizim ③ 1923 çıpası ④ 14 kol fan-out.
**④ ①'den önce açılırsa 14 oturum 14 biçim üretir** (`KADEME_YAMA` vakası).

## ⑥ AÇIK KALEMLER — bende
```
Zapolya künyesi (1541-1570 Doğu Macar) YOK ⇒ açılmalı
Boğdan 1856-03-30→1878-07-13 dönemi 1859-01-24'te BÖLÜNMELİ
1921-08-23 Faysal'ın taç giymesi — kronoloji maddesi YOK
36 portrenin lisansı makine okunur DEĞİL — ayrı sevk
Değişmez 7 tavanı 660 · gerçek 661 · 5 Eylül'den bayat
`Mısır ordusu (işgal)` ×3 — `v:`de mi `isg:`de mi? ayrı kalem
```

## ⑦ BUGÜN ÇÜRÜYEN ÖNCÜLLER — brifing üç kez bayat çıktı
```
"OTURUMLAR hepsi ÖLÜ"        → 19 canlı, 5 hazır kıta vardı
"VASSAL bloke: girdi.py"     → kütükte `kid` ve `statu` ZATEN vardı
"petek_govde.js hedef"       → o dosya tarayıcıya HİÇ inmiyor
"send_message ÇALIŞMIYOR"    → 7/7 oturum onunla uyandı (tahta.py başlığı)
```
📌 Ortak ders: **brifing bir ölçüm değil, ölçümün fotoğrafı.**

## ⑧ `*SETI` — yeni kısaltma
`ClaudEmre/KISALTMALAR.md`e eklendi (commit `53ce88b`).
S soru · E eylem · T tavsiye · I itiraz — **dördü de cevaplanır, boş olan
`YOK` yazılır.**

---

# 🟢🟢 EMRE'NİN KARARI — BUDAMA ONAYLANDI (7 Eylül, akşam)

> *"Okunmayacak olan ve bize **doğruluk, hız ve tasarruf** manasında
> bir şey katmayacak olan her şeyi **buda ve sil**. Akılcı bir şekilde
> azalt. **Okunacak ve uygulanacak bir taban kalsın**, lazım olanlar
> kalsın, **kuru gürültü** yaratanları silelim."*

```
ÖLÇÜM     taban 145.947 token · §11 = %73
🟢 ÇARE   KURAL ile VAKAYI ayır → 73.900-85.600 token (%41-49)
YAPI      `§11`in KENDİSİ dizin olur (ayrı `dersler/DIZIN.md` YOK —
          ikinci otorite doğurur) · vaka `dersler/<slug>.md`ye iner
```
🔴 **UYGULAMA ZAMANI: koşu 8 BİTTİKTEN ve bu dalga TESLİM ETTİKTEN
sonra.** Şu an on üç oturum `CLAUDE.md`yi okuyarak çalışıyor.
🟢 **Ve «sil» burada geri alınamaz DEĞİL** — git her şeyi tutuyor;
`git show <commit>:CLAUDE.md` tam hâli geri verir. Uyarı **belge içi**
bir uyarıydı.

**ŞARTLAR (BUDAMA-0907'ye verildi):**
```
① hazırlık paketi `denetim/BUDAMA-PLAN-0907/` altına — UYGULAMADAN ÖNCE
② KADEME KADEME commit — tek dev commit, gerilemeyi ölçülemez kılar
③ GERİ ALMA yolu yazılır VE sınanır
④ SINAV: budanmış §11 + dersler/ toplamı ESKİ manşetlerin tamamını
   taşıyor mu — kayıp manşet 0 · C13 ateşleme: bir manşeti KASTEN düşür
🔴 MANŞET ve DAMITILMIŞ HÜKÜM CLAUDE.md'de KALIR, VAKA iner
🔴 §1-§10 bu turda DIŞARIDA (§3.5 ve §4'teki vakalar ÖLÇÜLÜP bildirilir)
🔴 Hazırlık paketi EMRE'YE önce/sonra olarak sunulur — o "evet" dedi
   ama HANGİ METNİN GİDECEĞİNİ görmedi
```

---

# ⑨ ÖĞLEDEN SONRA — 13:00-13:45 · dört teslim, ALTI çürüyen öncül

## ⑨a KOŞU 8 — merdiven ilerledi
```
152 dk · CPU %92 · bellek 185 → 1844 MB (aşama geçişleri)
🟢 İLK GÖZLENEBİLİR BASAMAK: `bolgeler.js` 13:06'da YAZILDI
   (nöbetçi satırında `15:38` → `13:06` diye göründü)
```

## ⑨b EMRE'NİN AÇIK İSTEĞİ **KAPANDI** — ve brifing iki yönden bayattı
```
brifing "0906 aletini koştur"  → 0907 aleti ZATEN yazılmıştı (187b36e)
brifing "KOŞU BİTİNCE"         → 0907 motoru İÇE AKTARMIYOR ⇒ beklemedi
```
```
çift sayısı   85.977 … 99.704      (`harita:` ile 93.582)
çift maliyeti 0,0363 … 0,1344 ms
TOPLAM        ~3,1 … 13,4 sn       (harita: ile ~3,4 … 14,6)
⇒ koşunun ON BİNDE BİRİ. "Süresi engel değil" ÖLÇÜMÜ — "yapılsın"
  ÖNERİSİ DEĞİL.
```
🔴 Alet ilk koşusunda **cp1254 `⇒` ile çöktü** (bugün aynı kök 3. kez).
Ve asıl bulgu: bir iç ölçüm `ÖLÇÜLEMEDİ` damgalanmıştı — **ölçüm
başarılıydı, BASILAMAMIŞTI.** Bir çıktı hatası, ölçüm hatası sanıldı.

## ⑨c DÖRT KALEM — ikisi kapandı, ikisinde ÇERÇEVEM yanlıştı
```
🟢 Faysal 1921-08-23   KAPANDI · 31 yerleşim · çekirdekte madde YOK ·
                       TDV `faysal-i` günü ADIYLA · yama yazıldı
🟢 Mısır ordusu        KAPANDI · `isg:` (şema + kaynağın YÜKLEMİ)
                       ⚫ `.js` yaması YAZILMADI: aletin `v:`→`isg:`
                          TAŞIMA yeteneği ÖLÇÜLMEDİ
🔴 Zapolya             ÇERÇEVE ÇÜRÜDÜ — Mohaç'tan sonra Macaristan yok
                       olmadı, İKİYE BÖLÜNDÜ. Estergon (Habsburg) ile
                       Temeşvar (doğu) AYNI künyeye yazılamaz.
                       ⇒ 60 dönemi İKİYE AYIR, sonra künye
🔴 Boğdan              TARİFİM VERİDE YOK. Gerçek: `v:` katmanı
                       1456→1878 (422 yıl). Ve atlas KENDİ İÇİNDE
                       tutarsız: `1859-01-24` eflak/romanya'ya İNMİŞ,
                       Yaş ve Bükreş'e İNMEMİŞ (iki BAŞKENT)
```

## ⑨d 🔴 KENDİ TAŞIDIĞIM BİR ÖNCÜL ŞÜPHELİ — ölçümde
Bugün **üç yere** yazdım: *"`v:` kimlik alanı YOK, 423 dönem yalnız
`f`/`t`/`k`/`enklav` (5 Eylül)."* Bugünkü şema ölçümü uyuşmuyor:
```
v:  f 429 · t 429 · k 373 · statu 421 · kid 291   ← `kid` BİR KİMLİK ALANI
```
```
Ⓐ 5 Eylül BAYAT (kid sonra geldi) · Ⓑ 5 Eylül YANLIŞTI ·
Ⓒ `kid` var ama İŞLEMİYOR (okunmuyor) ⇒ cümle yanlış değil EKSİK
```
⇒ `GECIS-SURE-0907` ölçüyor (M-3151). **Hüküm bende.**

## ⑨e `harita:` 22 KİMLİK — kalem AÇIK, ve kilit ARAÇTA
```
ÖLÇÜLDÜ  A ∩ B = 0 ama A'nın 22/22'si B'deki bir künyece GÖSTERİLİYOR
         ⇒ çürümüş `id ∪ harita` vakası bunu KAPSAMIYOR (ters yön)
ÖLÇÜLDÜ  düzeltmenin etkisi +7.605 çift (+%8,8), mertebe değişmiyor
🔴 ÖLÇÜLEMEDİ  kaç YENİ hayalet doğacağı — `arac/` DONUK
⇒ KOŞU SONRASI: hayalet sayımı → SONRA karar. Bugün UYGULANMADI.
```

## ⑨f2 🆕 C KOLU AÇILDI — 15:00 · ALTI BÖLGE + BEŞ HİZMET KOLU
```
SINIR-ANADOLU · BALKAN · ARAP · KAFRIKA · GAFRIKA · ASYA   (bölge)
KIMLIK-1923 · ANTLASMA · BIRLESTIRICI · SINAV-KOSU8 ·
DEGISMEZ3 · BUDAMA · VASSAL-GORUNUM                        (hizmet)
ortak şartname: oturumlar/SINIR-HUKUKI-ORTAK-0907.md
```
🟢 **KİMLİK TABLOSU HAZIR:** `denetim/KIMLIK-1923-0907.json`
(`kisa_tablo.tablo`, anahtar NE `ADM0_A3`) — **176/258 eşleşme**,
coğrafî içindelikle. Ad eşlemesi 6 (EN) / 52 (TR) idi ⇒ **3,4 kat.**
🟢 Ve BAĞIMSIZ DOĞRULANDI: `SINIR-KAFRIKA` farklı gün (`1923-10-01`) ve
farklı aletle ölçtü, **17/17 ayrışma 0.**

### 🔴 KOŞU SONRASI KUYRUĞA GİREN VERİ KUSURLARI
```
① SUDAN İKİ KİMLİKLE BOYANIYOR — ve ayrım COĞRAFÎ DEĞİL
   ingiltere 61 (9,95–20,83°K) · ingiliz-sudani 11 (10,63–20,80°K)
   aralıklar İÇ İÇE · iki yaka da Anglo-Mısır Kondominyumu
   ⇒ §3.5 ailesi · bulan: SINIR-KAFRIKA-0907
② KUZEY AMERİKA — 37 nokta modern ABD içinde ama `meksika`/`kanada`
   → 1923-10-29. Albuquerque `meksika 1821→1923`. Devir dönemi HİÇ YOK.
   ⇒ KIMLIK-1923-0907'ye sevk edildi (iki uç ölçülmesi şartıyla)
③ ŞEFŞÂVEN `t=9999-01-01` — ufku aşan tek kayıt
④ TUNUS 36 nokta: `kid:` YOK **ve `k:` de None** ⇒ ne makine ne insan
   okuyabiliyor · künye bugün 1923'e genişletildi · KIMLIK-KID'de akıyor
⑤ `denetle.py:1487` `if not m: continue` SESSİZ — 4 kayıt hiç bakılmadan
   atlanıyor (`Üsküb`→`Üsküp` · `Lutsk`→`Lutsk (Łuck)`)
   ⇒ yama DEGISMEZ3'te · şart: sayaç SIFIR OLSA BİLE basılmalı
⑥ `Üsküp` grep'te İKİ KEZ — mükerrer nokta olabilir, ölçülmedi
```

## ⑨g2 🔴 SÜPÜRÜCÜ COMMIT — KOORDİNATÖRÜN İHLALİ, ve iki kez dar ölçüldü
```
BENİM ÖLÇÜMÜM   2 commit (140 + 23 dosya)
GERÇEK          bir tek oturumun 12 dosyası DÖRT commit'te
                depo geneli bugün: 22 commit · 582 dosya girişi
                ⇒ 22 ÜST SINIR · 4 ALT SINIR (ayrım makineyle sorulamaz)
```
`git add -- denetim/` **dizin pathspec'i**, `git add -A` kadar süpürücü.
🟢 **`§7` istisnası GENİŞLETİLDİ** (`25e3250`): her oturum kendi
`oturumlar/<AD>.md` **ve** `denetim/<kendi öneki>` dosyalarını commit
eder — **her dosya ADIYLA**, dizin pathspec'i YASAK.

## ⑨h 🔴 «ALAN VAR, OKUYAN YOK» — bugün DÖRT vaka, artık bir SINIF
```
kid       291 dönemde DOLU · uret_petek yalnız AD YEDEĞİ · app.js/denetle HİÇ
statu     421 dönemde dolu ama TEK DEĞERLİ · app.js `v:` statüsünü HİÇ okumuyor
kd:       192 kayıt ama `turetildi:True` damgalı 0/175 ⇒ elle yazılan
          TÜRETİLENDEN ayırt edilemiyor (borcu 48 KAT büyük gösteriyor)
kd: (2)   uret_petek.py:770 `ad = y["m"]` — `girdi.kd_gun()` DEĞİL
          ⇒ `kd:` motorun BÖLGE katmanına GÖRÜNMEZ
```
📌 Dördü de farklı alanda, dördü de aynı desen: **alan doğuyor, okuyucu
doğmuyor.** Sınavı tek soru: *bu bilgiyi bir `if` ile sorabiliyor muyum?*

## ⑨i Ö3 KİLİDİ AÇILDI — `m:` SİLİNMEZ
```
🔴 S1  m: TAMAMEN null      üye 874 → 496  (-378, %43 kayıp)
🟢 S2  kd: EKLENİR, m: KALIR    DEĞİŞİKLİK YOK
```
⇒ **372 kayda `kd:` yazılabilir, ŞART: `m:` korunur.**
🟡 Koordinatörün hipotezi (*anakronik dönemde bölge çizgisi zaten yok*)
**yarım tuttu**: ÇİZİM penceresi merkezin Osmanlı aralığı ✓ ama ÜYELİK
şartı yerleşimin `d:`/`v:` **varlığı** ✗ — ikisi aynı şey değil, ve
`-378` oradan geliyor.
📌 ***Bir hipotez bir MEKANİZMA hakkında doğru olup SONUÇ hakkında
yanlış olabilir.***
🟢 Ve `m:` boş 46 kayıt **bugün zaten tolere ediliyor**; motorun kendi
yorumu: *"kozmetik — bölge sınırı çizilmiyor, TOPRAK BOYAMASI
ETKİLENMİYOR."*

## ⑨j C KATMANI ŞEMA KARARLARI — `BIRLESTIRICI-0907` ölçtü, hüküm verildi
```
a / b               = NE ADI      (geometrinin kaynağı, DEĞİŞMEZ)
kimlik_1923_a / _b  = atlas slug  (bir HÜKÜM, değişebilir)
```
📌 Gerekçe: *anahtarı hükme bağlamak, hüküm düzelince anahtarı kaydırır.*
```
317 kayıt · 10 ortak alan 317/317 · mükerrer 10 çapraz · çelişen geometri 0
kapsama 276/296 kanonik kenar (%93,2) · eksik 20 (ağırlıklı Batı Avrupa)
🔴 hal:"bulunamadi" 93'ün 71'i (%76) aslında "ayni-kimlik" demek
🔴 hal:"ayni-kimlik" 317 kaydın 0'ında — YAYIN İNMEDİ (M-3183)
```
🔴 **Ve dersi: altı bağımsız kolun aynı boşluğa yakınsaması, kovanın
GEREKLİ olduğunu kanıtlar — TESLİM EDİLDİĞİNİ değil.**

## ⑨k KOŞU SONRASI — `olculemedi` damgalı, log tamponda
`uret_petek.py:781` her koşuda *"kademe: N yerleşimin m: zinciri açık
(BEKLENEN 0)"* basıyor ve **bugün 46.** `kosu8.log` **9 satır** —
`TextIOWrapper` çıktıyı ancak çıkışta boşaltıyor ⇒ **koşu bitene kadar
ÖLÇÜLEMEZ.**

## ⑨l 🔴🔴 GLOB TARİHE KİLİTLİ — 10 KÜNYE SESSİZCE İNMİYOR
```
_kunye_uygula.py:44   VARSAYILAN = "denetim/YAMA-KUNYE-*0905*.json"
bugün 0907 · 13 dosyanın 2'si KAÇIYOR:
   YAMA-KUNYE-RUS-AMERIKA-0907.json
   YAMA-KUNYE-VASSAL-0906.json   🔴 10 KÜNYE · biçimi SAĞLAM
```
🔴 **İkincisi kuyrukta haftalardır duruyor** ve her brifingde anılıyordu.
Uygulasaydım alet **temiz bir çıktı** basacak, 10 künye inmemiş olacaktı.
🟢 Ucuz çare: `--yama "denetim/YAMA-KUNYE-*.json"`
🔜 Kalıcı: `VARSAYILAN`dan tarihi çıkar (`arac/` koşuda donuk)
📌 Bugün ÜÇÜNCÜ glob vakası: **dosya adı** (`KUZEY-AMERIKA-DEVIR.js`
`^yer_yama` globuna girmiyordu) · **dizin pathspec'i** (süpürücü commit)
· ve **tarih damgası.**

## ⑨m 🔴 «BAYAT ÖLÇÜT» AVI — 6 bulundu, 4 çürütüldü
```
Ö9   peteksiz — YANLIŞ SEBEPTEN GEÇİYOR      → SAHTE GÜVEN
B6   R1 kabul testi — YANLIŞ SEBEPTEN KALIYOR → SAHTE ALARM
     (`89cd681` 4 Eyl indi; 7B onu ZATEN içeriyor. Alet hâlâ
      "R1'den sonra <10" basıyor ⇒ 637 görülüp YANLIŞ İŞ açılırdı)
B2 belge başlığı/PID · B3 VASSAL "bloke" (değil) · B4 18→23 çakışma
B5 km²·dönem borcu (ödenmiş, `2192eab` 3 Eyl — borcu YAZAN belgeden
   ÜÇ GÜN ÖNCE)
🟢 ÇÜRÜTÜLEN 4: renk çiftleri · yama dosyaları · FETCH · "5b tabanı kaydı"
```
📌 ***Bir belgenin BAŞLIĞININ bayat olması, MADDELERİNİN de bayat
olduğunu göstermez.***

## ⑨n R1 TABANI — ÖLÇÜLDÜ, ve R1'in etkisi `olculemedi`
```
                 5 Eylül (4b)          BUGÜN (7B)
yabancı gövde         232                  232    ✓ BİREBİR
DİKİŞ       640 / 34.318 km²      637 / 34.792 km²
KIYI KENARI      42.233 parça          42.233    ✓ BİREBİR
```
🔴 `640 → 637` **R1'in etkisi DEĞİL**: arada R1 **ve** `data/` birlikte
değişti (iki değişken), ve R1'siz bir 7B çıktısı **yok** ⇒ kontrol grubu
YOK. Damga `olculemedi` — *"çürüdü"* deseydik R1'i ölçmek bir daha
denenmezdi.
⚠️ İki gövde sayacı: node **232** (yabancı) ↔ `olc.py` **233** (Osmanlı
dâhil). Karıştırılmamalı.

## ⑨o 🟢 ÜÇÜNCÜ KOVA: **PROVENANS** — koordinatörün ikili ayrımı EKSİKTİ
*(7 Eylül · `SINAV-KOSU8-0907` ölçtü)*
Koordinatör *"başlıkta mı, geçmiş anlatıda mı"* diye **ikili** bir
ayrım vermişti. Ölçüm üçüncüsünü gerektirdi:
```
tarama: «koşu 7b» ya da «PID 3880» — DEPO GENELİ
   51 dosya · 91 satır      (koordinatörün listesi 17'ydi — `denetim/` +34)
🔴 GERÇEKTEN BAYAT   2 satır · 1 DOSYA  (zaten bilinen · YENİ ÇIKMADI)
🟢 PROVENANS        46 satır
🟡 AYIRT EDİLEMEDİ  36 satır — okunmadı, «temiz» DEĞİL
```
> ***PROVENANS: bir belgenin "koşu 7b sürüyor" demesi ölçümün ANINI
> kaydeder, ve o kayıt ZAMANLA YANLIŞ OLMAZ.***

🔴 51'i bayat saymak **50 dosyalık hayalet borç** üretirdi — ve bir
sonraki oturum onu **iş** diye kuyruğa alırdı.
📌 İkili ayrımla bu kova **birinciye** düşer ve her ölçüm kaydı
*"bayat"* işaretlenirdi.
🔜 Yeni doktrin yapısına **aday**; `CLAUDE.md`ye bugün EKLENMEDİ —
`BUDAMA` onu 145.947 token ölçtü, her yeni satır budamayı ağırlaştırır.

## ⑨p BUDAMA — Emre'nin sorusu ÖLÇÜLDÜ, üç aday elendi
```
ÖLÇÜM       taban 145.947 token  (koordinatörün kaba tahmini 104.000, %40 dar)
🔴 ÇÜRÜDÜ   "compact yanlış zamanda" — compact DEĞİŞKENİ siler,
            CLAUDE.md her oturumda YENİDEN yüklenir
🔴 ÇÜRÜDÜ   "kullanılmayan dersin vakası ayrı dosyaya insin"
            (koordinatörün «asıl ölçüm» dediği) → 178 dersin 163'ünün
            korpusta açık izi var ⇒ kazanç %1,8
🟡 ELENDİ   "Türkçe kötü tokenlaşıyor" → +%2,4
🟢 KALAN    KURAL ile VAKAYI ayırmak → 73.900-85.600 token (%41-49)
```
🟢 Ve önerdikleri yapı koordinatörünkini **reddediyor**: ayrı bir
`dersler/DIZIN.md` **ikinci bir otorite** yaratır (`§11`: *bir bilgi
iki yerde duruyorsa biri güncellenince öteki bayatlar*). Çözüm:
**`§11`in kendisi dizin olur**, vaka `dersler/<slug>.md`ye iner.
🔴 **UYGULAMA KARARI EMRE'NİN** ve koşu + dalga bitiminden sonra —
şu an on üç oturum `CLAUDE.md`yi okuyarak çalışıyor.

## ⑨f KOŞU SONRASI KUYRUĞA EKLENENLER
```
① uret_petek.py `vl` sıra kusuru            (öncekinden)
② denetim/YAMA-DORTKALEM-KRONOLOJI-0907.json → data/olaylar_ek*.js
③ denetim/YAMA-DORTKALEM-ISG-0907.json       (v:→isg: taşıma ÖNCE ölçülmeli)
④ `harita:` 22 — hayalet sayımı, sonra karar
⑤ index.html fetch+JSON — `--yaz` işareti BENDEN
```

## ⑨g YENİ DERSLER — `CLAUDE.md §11`e indi (`db0ddcf`)
```
① aletin cevabı DOĞRU, sorduğu soru YETERSİZ  (ortak tepe ≠ birebir kenar)
② listede olmayan şey, elenmiş olandan ayırt edilemez  (`koridor.js`)
③ ayrı REALM'de `instanceof` sessizce FALSE  (ve gerçek veri gösteremez)
④ `§7` ad alanı dersi ilk kez ÖNLEYİCİ işledi  (`KADEME` zaten dolu)
```
🔜 HENÜZ İNMEDİ: *"bir alet DOĞRU ölçüp YANLIŞ HÜKÜM basabilir — sayılar
denetlenebilir, ÖZET SATIRI denetlenmez"* (`GECIS-SURE`, bugün iki kez).
