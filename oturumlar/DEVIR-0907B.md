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

---

## ⑨q — MERGE KİLİTLERİ · KOŞU SONRASI SIRA GÜNCELLENDİ *(7 Eylül, 17:0x)*

🔴 **`SINAV-KOSU8-0907` üç merge kilidi ölçtü; ikisi AÇILDI (`a5d6f1f`).**
```
_kunye_uygula.py:44      "…YAMA-KUNYE-*0905*.json" → "…YAMA-KUNYE-*.json"
                         13 yamanın 11'i kaçıyordu · biri `rus-amerika`
                         yani BUGÜNKÜ MERGE KUYRUĞU
_kronoloji_uygula.py:49  "…KRONOLOJI-*0905*.json"  → "…KRONOLOJI-*.json"
                         bekleyen 22 yamanın 11'i, TAM YARISI
```
🟢 **Genişletmenin bedeli UYGULAMADAN ÖNCE ölçüldü (kuru koşu):**
```
künye      37 istek · KABUL 1 (`rus-amerika`) · RED 36 (zaten var)
kronoloji  418 istek · KABUL 0 · RED 418 (hepsi zaten inmiş)
```
⇒ Genişletme bir **sel** değil bir **kilit açma.**

🟡 **KİLİT 3 REDDEDİLDİ, ve açık kaldı:** `_kademe_uygula.py:29` sabit
listesi **kasten** duruyor — kör bir `yer_yama_kademe*` glob'u
`yer_yama_kademe_zincir.js`i yutar ve o dosya `CLAUDE.md`de ölçülmüş
biçimde bir **`m:` yamasıdır**, kademe yaması değil. Adı doğru, cinsi
yanlış. Çare: eksikleri **adıyla** listeye eklemek, ya da aletin diskte
bulup listede olmayanları **gürültüyle** bildirmesi.

🔴🔴 **VE KURU KOŞU DÖRDÜNCÜ BİR ŞEY GÖSTERDİ — SESSİZ SIFIR, 12 DOSYA:**
```
1917-TASIMA-0906 · AFRIKA-0906 · AGADEZ-1906-0906 · ARNAVUTLUK-0905 ·
AVRUPA-0906 · BALKAN-0906 · MANDA-0906 · ORTADOGU-URDUN-0907 ·
SISAM-0905 · SOHUM-0907 · YUNANANAKARA-0905 · ZEND-1794-0905
```
Glob'un **tuttuğu** ve aletin `0 madde` bastığı dosyalar. `CLAUDE.md`
bu sınıfı **TEK vaka** olarak kaydediyordu (`ZEND-1794`); gerçek **12**.
```
Ⓐ dosya kronoloji yaması DEĞİL  → glob yanlış sahiplenmiş (zararsız)
Ⓑ yama AMA alan biçimi farklı   → GERÇEK KAYIP, sessiz
```
⇒ **Ⓑ çıkarsa bir merge kilidinden büyüktür**: kilit yamayı *bekletir*,
bu onu **yok sayar** ve `0 madde` diye temiz bir sayı basar.
📌 SEVK EDİLDİ → `SINAV-KOSU8-0907` (Ⓑ daraltmasının ilk kalemi).

### KOŞU SONRASI SIRA — DEĞİŞTİ
```
① `uret_petek.py` `vl` önceliği (`kid or k`)
② `rus-amerika` ATOMİK BİRİMİ — üçü BİRLİKTE, ayrılamaz:
     ⓐ künye (`_kunye_uygula --yaz`, artık glob görüyor)
     ⓑ renk  (`renkler.py` — koşu sürerken DONUK, ancak şimdi)
     ⓒ Alaska yaması (`yer_yama_alaska_devir_0907.js`, 5 kayıt)
   🔴 ⓐ+ⓒ ⓑ'siz inerse `§8` HARİTA DELİĞİ — KIMLIK-1923 ölçtü
③ bekleyen öteki yamalar   ④ `denetle.py`   ⑤ `denetle_yayin.py`
⑥ sürüm damgası            ⑦ yayın
```

## ⑨r — `hal` KOVASI KAPANDI *(M-3243, altı kolu birden bağlar)*
```
hukuki      antlaşma dayanağı BULUNDU              kaynak ZORUNLU
tanimsiz 🆕 belge sınırın BELİRLENMEDİĞİNİ söylüyor kaynak ZORUNLU
ayni-kimlik iki ucun 1923 kimliği AYNI ⇒ C'de sınır değil
bulunamadi  arandı, dayanak yok
olculemedi  aranamadı / alet cevap veremedi
```
🔴 `ic-idari` **REDDEDİLDİ** — tanımı `ayni-kimlik`in birebir aynısı;
altı kol altı ayrı ad icat etmişti (`§7` ad alanı dersinin kova yüzü).
🟢 `tanimsiz` **KABUL** — `bulunamadi`nın TERSİ: dayanak VAR ve
*"sınır belirlenmemiştir"* diyor (Lozan md. 3/2).
🔴 Çevrim ONAYLI ama **MEKANİK DEĞİL**: GAFRIKA'nın 35'i toplu
çevrilmez — atlas İngiliz sömürgelerini ayrı tutmadığı için altı
GERÇEK sınır *"aynı kimlik"* gibi görünüyor (**model artefaktı**).
⇒ Uygulayan **her kol kendi dosyası**; `BIRLESTIRICI` sonra doğrular.

## ⑨s — SESSİZ HATA: DEFTER YANLIŞ SESSION ID VERDİ
```
py arac/defter.py coz "KIMLIK-1923-0907" → local_5b69886b-…  🔴 YOK
list_sessions (GERÇEK)                   → local_0865656a-…  🟢
```
`§3.0` zaten yazıyor: *"ÖNCE CANLIYA BAK, SONRA DEFTERE — defter
kaydeder, ÖLÇMEZ."* Kuralı yazan taraf (ben) onu çiğnedi ve bir mesaj
`Session not found` ile döndü. ⚠️ Defter bugün **en az bir** bayat
kimlik taşıyor; adla mesaj göndermeden önce `list_sessions`.

---

## ⑨t — `denetle.py` BUGÜN ÇIKIŞ 1 VERİYOR · İKİ SEBEP, İKİ SAHİP
*(7 Eylül, koşu 8 sürerken · tam koşu ölçüldü: 218.202 ms)*

```
Değişmez 7  ✗ 661 sorgusuz enklav (beklenen 660)     → 1.MURAT
Ek denetim  ✗ mükerrer madde: 3 şüpheli çift (0)     → DEGISMEZ3-0907
```
🟢 **İkisi de bugünkü `oku_pencere` düzenlememden DEĞİL** — o yalnız
stderr'e uyarı ekliyor, sayıya dokunmuyor. C13 ile doğrulandı: dört
kümenin sayısı değişmedi (31 · 171 · 61 · 16).

### 🔴 ENKLAV 661 — EŞİK **ŞİMDİ KAYDIRILMIYOR**, ve gerekçesi ölçüldü
```
BEKLENEN_ENKLAV_SORGU = 660   (d041a08 · 5 Eylül merge)
22cced2 (bugün) : "Değişmez 7 663 -> 661"  ← bir oturum ZATEN ölçmüş
                  ve 6 TDV maddesi yazarak İKİ AZALTMIŞ
⇒ gerçek 661 · fotoğraf 660 · fark +1
```
**Ve dosyanın kendi kuralı bu sayacı tarif ediyor** (`denetle.py:2174`):
> *"bu sabit bir HEDEF değil bir FOTOĞRAF… büyüme KUSUR DEĞİL — kusur,
> bir enklavın koridoru SORULDUĞU HÂLDE cevapsız kalmasıdır, ki onu bu
> sayaç ÖLÇMEZ. Tavanı yükseltmek o borcu KAPATMAZ."*

🔴 **HÜKÜM: KOŞU 8 BİTMEDEN KAYDIRILMAZ.** `Değişmez 7` **geometriden**
okuyor ve bugünkü geometri **önceki koşunun çıktısı**. Koşu 8 inince
sayı yeniden değişecek ⇒ şimdi kaydırmak, **birazdan değişecek bir
durumun fotoğrafını** çekmek olur.
⇒ Sıra: koşu 8 → yamalar → `denetle.py` → **o zaman** ölç, sebebini
ADIYLA yaz, fotoğrafı kaydır.

⚪ **VE DÜRÜST DAMGA:** +1'in **hangi kayıt** olduğu **İZOLE EDİLMEDİ**
— 660 dönemi bir anlık görüntüm yok ve `data/` donuk. Bloğun kendi
emsali bunu kabul ediyor (5 Eylül girdisi: *"+18, ve dağılımı
ÖLÇÜLMEDİ"*). Koşu sonrası tur ayırsın.

## ⑨u — BUGÜN KAPANAN MERGE KİLİTLERİ (özet)
```
🟢 _kunye_uygula glob        `*0905*` → `*`      (a5d6f1f)
🟢 _kronoloji_uygula glob    `*0905*` → `*`      (a5d6f1f)
🟡 _kademe_uygula liste      KASTEN sabit kaldı — kör glob
                             `yer_yama_kademe_zincir.js`i (bir `m:`
                             yaması) yutardı
🟢 dördüncü kova `SAHİPLENMEDİM`  (7260b83 · d4913af)
🟢 `oku_pencere` push uyarısı     (1469f7e) — 31↔41 TEŞHİS EDİLDİ:
   dizi `.push()` ile besleniyor, metin ayrıştırıcı çalışma zamanı
   mutasyonunu YAPISAL OLARAK göremez
🟢 YAMA-KUNYE-SOMURGE-AMERIKA  git mv → glob görüyor · KABUL 1 → 4
🔴 OLCUM-ANTLASMA-SLUG         ADLANDIRILMADI — `kunyeler` anahtarı VAR
   ama ŞEMA TAM 0/31 (f·t·bolge yok) ⇒ TDV slug ÖLÇÜMÜ, yama değil
```

## ⑨v — ŞEMA SÖZLEŞMESİ (karar verildi, geriye dönük yazılmaz)
```
_HEDEF  nereye     dosya yolu ya da glob
_CINS   hangi alet kunye · kunye-kronoloji · sahiplik ·
                   cekirdek-kronoloji · kenar · olcum
```
🔴 `_CINS` **gerekli** ve gerekçesi ölçüldü: `_kunye_uygula` ve
`_kronoloji_uygula` **ikisi de** `data/devletler.js`e yazıyor ⇒
hedef→alet bir **fonksiyon değil**.
🔴 `olcum` kasten kümede: bir dosya *"ben uygulanacak değilim"*
diyebilmeli (`OLCUM-ANTLASMA-SLUG` vakası tam bunun eksikliğiydi).
🔴 Geriye dönük YAZILMAZ (`§7`) — sahibi dokununca normalleşir.

---

## ⑨w — 7 EYLÜL 22:20-22:55 · COMPACT SONRASI TUR

### 🟢 SAHİPSİZ SÜREÇLER KAPANDI (M-3253 → M-3254)
49 dakika beklendi, sahiplenen çıkmadı. Sonlandırmadan hemen önceki
ölçüm hükmü kesinleştirdi: üçü de **5 saniyede 5,1+ sn CPU** (tam bir
çekirdekten fazla, çok iş parçacıklı) ve **bellek değişimi 0 KB** —
hesap değil, boş döngü.
```
16628 (00:08 · 75.623 sn) · 21708 (16:25 · 18.469 sn) · 11464 (16:53 · 16.857 sn)
```
⚠️ *"Ne yaptıkları"* kalemi **`ölçülemedi`** — stdin'den beslenmişlerdi,
kodları geri okunamıyor. Ölçülen şey davranıştı, niyet değil.
🔴 **VE KOŞU 8'İN BİTİŞ TAHMİNİ ARTIK İKİ YÖNDEN KİRLİ:** on bir saatini
DOLU makinede geçirdi, kalanını BOŞ makinede geçirecek ⇒ bugüne kadarki
hızından çıkan tahmin bir **alt sınır.** Kimse bugünkü sayıdan saat
türetmesin.

### 🟢 NÖBETÇİ SINANDI — VE SINAV KENDİ KUSURUMU BULDU (`a707553`)
`1469f7e` push-mutasyon uyarısını koymuştu ve ben onu *"doğrulandı"*
diye kaydetmiştim — `C13`in ATEŞLEME ayağını **koşturmadan.**
Koşturunca uyarı öttü ve **satırın ortasına yapıştı**
(`…1622-01-01⚠️ savaslar.js:`), ilgisiz bir kaydın (Butuan) parçası gibi
okunuyordu. Sebep: uyarı `stderr`e, rapor `stdout`a gidiyor, satır başı yoktu.
📌 ***Bir nöbetçinin ÖTMESİ yetmiyor; ÖTTÜĞÜNÜN ANLAŞILMASI da gerekiyor.***
🟢 İki ayak da **gerçek veride** sınandı (enjekte değil): ateşleme
(kendi satırında) · geçme (aynı koşuda tam 1 kez, yanlış pozitif 0).

### 🔴 BİR YIKICI EYLEMDEN BİR ARAÇ ÇAĞRISI KALA DÖNÜLDÜ (`4e6da48`)
Brifing *"koşu 4"* diyordu ⇒ apaçık bayat ⇒ `§11`in reçetesi
`CronDelete + CronCreate`. **`CronList` önce okundu:** canlı iş
`f4781de9 · 17 dk · "ÖLÇ, KARAR VER, YAP"` — **koşudan bağımsız, bayat
değil.** Bayat metin bağlamdaki **donmuş bir skill çağrı kaydıydı.**
⇒ Reçete körlemesine uygulansaydı kullanıcının kurduğu tekrarlı görev
sebepsiz silinip **aynısıyla** yeniden kurulacaktı: kazanç sıfır, risk tam.
Muhafaza `CLAUDE.md`ye yazıldı: *`CronDelete` öncesi `CronList` ile canlı
metni oku.*

### ⚠️ EZBERDEN YAZILAN YOL — SESSİZ PARALEL DİZİN, BUGÜN 4 KEZ
Scratchpad UUID'sini iki kez yanlış yazdım; ölçünce **dört** tortu dizin
çıktı (biri Arapça harf taşıyor). Gerçek dizinde 1517 dosya, ötekilerde
birer tane. Dosyalar okunmadığı için **silinmedi.**
⇒ Yol ezberden yazılmaz, **ölçülür** (`ls` ya da `__file__`).

### 📮 SEVKLER — ÜÇ CANLI KOL (G12 tavanı)
```
SINAV-KOSU8-0907   Ⓐ KAPATILDI (164→17; artım azalıyor, 12 yolu OKUMA)
                   YENİ: arac/denetle_yayin.py TABANINI ÖLÇ
                   soru "kapı geçiyor mu" DEĞİL — geçmeyecek, çıktı bayat
                   ① kapı koşuyor mu ② kaç ret şartı, hangileri ötüyor
                   ③ her ötüş: BAYAT ÇIKTI yüzünden mi (koşudan sonra
                     susar) KAPININ KUSURU mu (bu gece düzelir)
                   ⚠️ "11 ret şartı" öncülüm DEVRALDIM-DOĞRULANMADI
SINIR-KAFRIKA-0907 YENİ: RENK HAZIRLIĞI — merge blokajı
                   ⚠️ "17 renksiz kimlik" öncülüm DOĞRULANMADI, ⓪ adım
                   🔴 liste KÜNYE ÖNERİLERİNDEN değil, YAMALARIN
                     KULLANDIĞI kimliklerden türetilecek (o boşluktan
                     6 kimlik kaçmıştı) · renk `harita:`ya bakar, `id`ye değil
                   🟡 12,0-13,0 SINIRDA bandını işaretle, EŞİĞE DOKUNMA
                     (8 bit yuvarlama ΔE'yi ~0,3 kaydırıyor)
CAKISMA-0907       zaten canlı
```
`KIMLIK-1923-0907` M-3250 teyit edildi (5 saat açık kalmıştı, kusur bende),
yeni iş verilmedi — tavan üç.

### 🔜 MERGE GECESİ — SIRA DEĞİŞMEDİ
① künye → ② `rus-amerika` atomik (künye · Alaska yaması `denetim/`→`data/`
· renk) → ③ öteki yamalar → ④ `denetle.py` → ⑤ `denetle_yayin.py`
→ ⑥ sürüm damgası → ⑦ yayın.
🔴 ② ile ③ ARASINDA YAYIN YOK — `§8` harita deliği açar.
🔴 `denetle.py` bugün çıkış 1: mükerrer 3 yaması HAZIR
(`denetim/YAMA-DEGISMEZ3-MUKERRER-0907.md`), enklav 661/660 koşu sonrasına
ERTELENDİ (`Değişmez 7` geometri okur, bugünkü geometri ÖNCEKİ koşunun çıktısı).

---

## ⑨x — 7 EYLÜL 23:00 · 🟢 KİLİTLENME ÇÖZÜLDÜ · MERGE GECESİ RUNBOOK

### 🔴 ÖNCE KİLİDİN GERÇEK ADRESİ (SINAV-KOSU8 ölçtü)
```
denetle_yayin.py → `denetle.py`yi HİÇ çağırmıyor (import 0 · subprocess 0)
   ve bu KASITLI: kapının kendi yorumu (:1311) "kapıyı DAKİKALARA çıkarırdı"
kos_ve_yayinla.py:219 → denetle.py'yi `olumcul=True` (VARSAYILAN) ile koşuyor
   ⇒ çıkış 1 ⇒ ZİNCİR DURUR ⇒ kapıya HİÇ SIRA GELMEZ
_yayin_zinciri.py → RAPOR zinciri, yayın yapmaz · `uret_altlik` ADIMI YOK
```
⇒ Kilit **kapıda değil ZİNCİRDE.** Benim *"kapı denetle'yi şart koşuyor
mu"* sorum yanlış yeri gösteriyordu.

### 🟢 VE İKİLEMİN İKİNCİ YARISI ÇÜRÜDÜ — ÖLÇÜLDÜ
```
girdi.py:1353  motor_izi()  → uret_petek.py · renkler.py · girdi.py
girdi.py:1332  parmak_izi() → GIRDI_DOSYALARI + GOL_DOSYASI
⇒ `arac/denetle.py` İKİ İZDE DE YOK
```
Ve `denetle.py`nin bugünkü iki ihlalinin **ikisi de orada** çözülüyor:
```
mükerrer 3  → `BILINEN_AYRI`ya üç çift (Antep 1921-12-25 · Tarsus 12-27 ·
              Adana 1922-01-05 — ÜÇ AYRI ŞEHİR, ÜÇ AYRI GÜN; ölçüt
              uyumsuzluğu, mükerrer DEĞİL)
enklav      → `BEKLENEN_ENKLAV_SORGU` sabiti (denetle.py:2189)
```
🟢 ***İkisi de VERİYE DOKUNMUYOR ⇒ iz bozulmuyor ⇒ KOŞU 8 YAYINLANABİLİR.***
🟢 `olumcul=False` GEREKMİYOR — `kos()`un bilerek kurduğu koruma duruyor.
⚠️ Enklav sabiti **körlemesine yükseltilmeyecek**: 661 ÖNCEKİ koşunun
geometrisinden; koşu 8 yeni geometri üretiyor ⇒ **önce yeniden ölç.**
Bir tavanı ihlali susturmak için yükseltmek, `Sarıkamış`ı ada bırakan hata.
⚪ Ve bir öncül damgalı: *"çıkış 1'in sebebi TAM OLARAK bu iki ihlal"* —
**eski notumdan DEVRALDIM, bugün koşturarak doğrulamadım.**

### 🔴 KOŞUNUN ÇÖZMEYECEĞİ TEK ŞART: `damga_ihlali`
```
js/app.js +185 · css/style.css +37  (222 ekleme · 0 silme)
`statuYazi` · `vassalEtiketleri`  ⇒ VASSAL ETİKET KATMANI işi
damga hâlâ r6711 · sahibi VASSAL-GORUNUM-0907 · SORULDU, cevap bekleniyor
🟢 geçmiş temiz: son 30 commit'te js/css değiştirip damgayı yükseltmeyen 0
```
⇒ Cevap gelmezse `git stash` (iş KAYBOLMADAN kenara), ve **adıyla kayıt.**
`§7`: yarım bir dosyayı sahibinin onayı olmadan commit etmem.

### 🟢 MERGE GECESİ RUNBOOK — SIRA BU
```
① koşu 8 iner        → nöbetçi 9 bip (ARAC-BEKCI-KOSU8C-0907.py, ömür 30 sa,
                        tetik donemler.js, yazım bitişi boyut kararlılığıyla)
② denetle.py         → çıkış 1 ise: BILINEN_AYRI + enklav (denetle.py'de,
                        iz BOZULMAZ) · enklavı YENİ geometriye karşı ÖLÇ
③ js/css             → sahibinin kararı: commit + damga · ya da stash
④ surum_damgala.py
⑤ kos_ve_yayinla.py  → 🔴 ZİNCİR BU. `_yayin_zinciri.py` DEĞİL
                        (onda `uret_altlik` yok ⇒ altlik.js bayat kalır ve
                         kapı TEK BAŞINA onun yüzünden reddeder)
⑥ YAYIN
──────────── ANCAK BUNDAN SONRA ────────────
⑦ künye → ⑧ TAŞIMA → ⑨ RENK → koşu 9
```
🔴 ⑥'dan önce `data/` DONUK KALIR. Bir yerleşim yamasına dokunmak koşu
8'in on iki saatini `YAYIN BAYAT` yapar (M-3258).
🟢 ⑧ ile ⑨'un sırası SINIR-KAFRIKA'nın ölçümüyle DEĞİŞTİ: `renk_olc --oner`
engel kümesini `girdi.py`nin okuduğu dosyalardan kuruyor ⇒ yamalar
inmeden renk **kör evrende** çözülüyor (15 kimliğin 15'i 2-3 engelle;
gerçek ~30, üçünde 0 km).

### 📮 KOLLAR
```
SINAV-KOSU8    kapı tabanı TESLİM (`5b0a4bf`) → şimdi ÜÇ ZİNCİR KIYASI
CAKISMA        küme 2 teslim · birleştirme biçimi KABUL (ön koşullu:
               `kaynak:`ı slug sanan bir alet var mı, ÖLÇ)
SINIR-KAFRIKA  renk teslim (kör evren uyarısıyla) → şimdi ÜÇ EKSİK KÜNYE
               (gvalyar-sindiya · indor-holkar · meysur-racaligi)
VASSAL-GORUNUM js/css sorusu soruldu, cevap bekleniyor
```

---

## ⑨y — 7 EYLÜL 23:20 · RUNBOOK DÜZELTİLDİ — ZİNCİR BU GECE **KENDİ KENDİNE DURACAK**

### 🔴 ZİNCİRDE SIRA KUSURU BULUNDU VE DÜZELTİLDİ (`2f1bc20`)
```
ESKİ  :219 denetle → :222 KAPI → … → :242 damga
      kapının `damga_ihlali` reçetesi: "COMMIT ETMEDEN ÖNCE surum_damgala.py"
      ⇒ kapı `return 1` verince DAMGA ADIMINA HİÇ SIRA GELMİYOR
      ⇒ KAPI, BİR SONRAKİ ADIMIN ÇÖZECEĞİ ŞEYE TAKILIYOR
YENİ  :219 denetle → :245 DAMGA (`if yayinla` korumalı) → :248 kapı
```
🟢 İki ucu da ölçüldü (SINAV-KOSU8, 11 şartın 11'i): yeni ötüş üretmesi
için yol yok. Kapı **gevşetilmedi** — kendi reçetesi kapıdan önce uygulanıyor.
🔒 `if yayinla` korumasını taşıdım: `surum_damgala.py` `index.html`i YAZAR,
korumasız öne alınsa kuru koşu depoyu kirletirdi.

### 🔴🔴 AMA BU GECE ESKİ SIRA KOŞACAK — VE ZİNCİR ZATEN DURACAK
```
fırlatıcı ŞU AN çalışıyor · Python ana modülü BAŞLANGIÇTA derler
⇒ kaynağı düzenlemek ÇALIŞAN süreci DEĞİŞTİRMEZ
```
Ve daha önemlisi: **`denetle.py` bugün çıkış 1 veriyor ve zincirde
ÖLÜMCÜL (`:219`)** ⇒ koşu 8 bitince zincir **kendiliğinden duracak**,
kapıya sıra gelmeyecek, **yayın otomatik YAPILMAYACAK.**
⇒ ***Bu gece müdahale ELLE olacak.*** Bu bir arıza değil, beklenen davranış.

### 🟢 GECENİN GERÇEK AKIŞI
```
① nöbetçi 9 bip           (ARAC-BEKCI-KOSU8C-0907.py · tetik donemler.js)
② zincir kendi kendine:   uret_devirler ✓ · renk_olc ✓ (ölümcül değil)
                          → denetle.py ✗ ÇIKIŞ 1 → ZİNCİR DURUR
③ ELLE: denetle.py'nin ihlallerini KAPAT
        mükerrer 3 → `BILINEN_AYRI`ya üç çift
        enklav     → 🔴 YENİ geometriye karşı YENİDEN ÖLÇ, körlemesine
                     yükseltme (Sarıkamış dersi)
        ⚪ "sebep tam olarak bu iki ihlal" öncülü DEVRALMA — koşturarak doğrula
④ ELLE: js/css kararı (VASSAL-GORUNUM'un cevabı) → commit ya da stash
⑤ ELLE: surum_damgala.py
⑥ ELLE: denetle_yayin.py — 11 şart
⑦ ELLE: git add -- data index.html · commit · push
──────────── ANCAK BUNDAN SONRA ────────────
⑧ künye → ⑨ TAŞIMA → ⑩ RENK → koşu 9
```
⚠️ ②'de `uret_devirler` ve `renk_olc` ZATEN KOŞACAK — elle tekrarlama.
⚠️ Ve `data/` ⑦'ye kadar DONUK: bir yerleşim yamasına dokunmak koşu 8'i
`YAYIN BAYAT` yapar (iz = `GIRDI_DOSYALARI`).

### ⚫ AÇIK — ikinci kilitlenme yolu, SINAV-KOSU8'e verildi
`denetle.py` 40 dk sınırının altında mı? Aşarsa `kos()` onu zaman
aşımıyla öldürür ve sonuç aynı: zincir durur. Hiç ölçülmedi.
