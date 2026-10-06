# UYGULAMA KUYRUĞU — 1006 · koşu sonrası inecek yamalar, SIRALI

🔴 **NİÇİN BU DOSYA VAR:** 6 Ekim gecesi bu kuyruk saatlerce **yalnız mesajlarda** yaşadı.
Bu, bütün gece eleştirdiğim kırılganlığın aynısıydı (*"kural yazılı olmayan kural değil,
UNUTULAN kuraldır"* — `§9.1`). Oturum kapanırsa kuyruk kaybolurdu.
**Sahibi:** YILDIRIM BAYEZIT (koordinatör). Uygulayan da odur; işçiler yalnız diff üretir.

---

## 0. 🔴 UYGULAMADAN ÖNCE — her seferinde
```
① git fetch + makine dallarını main'e BİRLEŞTİR  (projeksiyon ve makine/tahta-web HARİÇ)
② KOŞU bitmiş mi? Bitmemişse data/ ve arac/ DONUK — hiçbir şey inmez (§7)
③ her zincir için `git apply --check` SIRALI yapılır; tek tek temiz olmak YETMEZ (D264)
④ her diff kendi ağacında sınanır — bir ağaçta temiz, ötekinde kirli olabilir (D264)
```
🔴 **TAVAN KURALI (`§3.4`):** her tavan **yazıldığı anda ölçülür** ve **kendi diff'iyle
AYNI commit'te** iner. Aşağıdaki sayılar 6 Ekim gecesinin ölçümüdür — **yazarken yeniden
ölçülecek**, çünkü bir sayı bir günde 5 kayıt oynadı.

---

## 1. VERİ VE ARAÇ ZİNCİRLERİ — koşu sonrası, bu sırayla
Her satır bir zincir; zincir İÇİNDE sıra değiştirilemez (ölçüldü, sıra bozulunca reddediyor).

| # | zincir | not |
|---|---|---|
| 1 | `EDIGU-1006` → `KISI-KAYNAK-01` → `02` → `03` | 🔴 sonra **`py arac/paketle.py yenile`** ŞART |
| 2 | `ELLE-VERI-DUZELT-1006` → `OSMAN1-YIL-1006` → `OSMAN-ORHAN-DEVIR-1006b` | `OSMAN1` sona alınırsa RED |
| 3 | `VERI-YAPISI-SAYI-1006b` | eski `1006`nın YERİNE geçer |
| 4 | `DURUM-TABLOSU-SAYIM-1006b` → `SAGLAM` → `SAGLAM-1006b` → `1006c` → `DURUM-TABLOSU-KISI-KAYNAK-1006` | `--yaz` EN SONDA, bir kez |
| 5 | `OLAYLAR-SONEK-1006` (O7) | + `surum_damgala.py` |
| 6 | `D7-ISG` → `ZINCIR-KAYNAGI-KAPI` → `KAYNAKSIZLIK-ISG` → `MUKERRER-OLCUT-1006b` | hepsi `denetle.py` |
| 7 | `ZINCIR-1006c` → `CRES-NOT` → `POLONYA-ISG` → `POLONYA-BITIS` → `MGGP-NOT` → `KRAKOV-DEVIR` | `CRES-NOT`ta "dogrulanmadi" → **`kaynak_zayif`** |
| 8 | `ODAK-SEKME` → `METIN` → `1006b` → `1006c` → `1006d` | 🔴 `ODAK-TAVAN.json` **AYNI commit**, `--tavan-yaz` **YASAK** |
| 9 | `KIMLIK-BEKCI-1006` → `1006b` → `1006c` | `D266`; iner inmez 3 hayalet alarm susar |
| 10 | `MOTOR-ENV-KAPI` → `KAYNAK-DURUM-ENV-KAPI` → `ATLAMA-DAMGA` → `SINAMA` | 🔴 kısıt: aşağıda §3 |
| 11 | `KRONO-EZILDI-1006b` + `KAPI-0929` ölçütü | ikisi tek teslim (W26) |
| 12 | `ARPACAY-AD-1006` | Emre izin verdi; alan `not:`e döndü |
| 13 | `VIKIPEDI-KAYNAK-ZAYIF-1006` · `kaynak_zayif` paketi · `BOS-YERID-*` | `dogrulanmadi` ADI DEĞİŞTİ |
| 14 | `JASENOVAC/BROD` | 🔴 D2 maddesi **AYNI diff'te** + `paketle.py yenile` |
| 15 | `TR1923-ELEK` + `ZINCIR-KAYNAGI-VERI-1006c` | 🔴 betik `data/`ya **koordinatör kararı olmadan koşturulmaz** |
| 16 | `LEGO-ZINCIR-1006` + çıktı `.txt` | kanıt diskte kalacak |
| 17 | `YERID-IMZA-1006` (37 imza yeri) | 🔴 tavan: aşağıda |
| 18 | `ARAYUZ-MADDE-0930-kapi-dom-sozlesmesi-**1006**.diff` | sıra bağımsız; 🔴 kapsam beyanı ŞART (§3 ⑦) |

⚠️ **Eski `ARAYUZ-MADDE-0930-kapi-dom-sozlesmesi.diff` KUYRUKTAN ÇIKARILDI** — yerine
`-1006` girdi. Eskinin uymama sebebi anlamsal değildi: `6dbc954c`te `bayat` →
`bayat_durdurucu` adlandırması son `if` koşulunun bağlamını kaydırmıştı (hunk 1-2 uyuyordu).
🟢 Ve kalem **BAYAT DEĞİL**: kusur bugün de duruyor (`git log -S dom_sozlesmesi` → 0 commit,
yani yama hiç inmemiş; `denetle_yayin`de `getElementById` → 0 eşleşme). Kapının kusuru
**yakalayabildiği** gerçek tarihçeyle gösterildi: `2ddede3d` ve `9a956026` 2'şer uyumsuz,
`17cd2f98` 0.

⚠️ `POLONYA-DUZELT-1006` **KUYRUKTA DEĞİL** — `isg:` kararı yüzünden bütünüyle çıkarıldı;
`isg:` olarak yeniden üretilecek.

---

## 2. 🔴 TAVANLAR — hepsi BENİM, her biri KENDİ diff'iyle AYNI commit'te
```
BEKLENEN_MUKERRER           113 → 95      (zincir 6, MUKERRER-OLCUT)
BEKLENEN_OLU_ISTISNA          — → 0       (zincir 6, aynı diff)
BEKLENEN_2S_YALNIZ_TARAF   1665 → 1648    (zincir 17, YERID-IMZA)
BEKLENEN_BAYAT_KOPYA          — → 7       (zincir 6, ZINCIR-KAYNAGI-KAPI)
ODAK-TAVAN.json   odaksiz 325 · beyanli_yabanci 355 · sekme_okunmayan 1103
                  · bilinen_kusur []
                  🔴 sekme_sessiz: 53 YAZILMAYACAK — uygulamadan SONRA ÖLÇÜLECEK
kişi katmanı      kaynaksız 0 · beyan 29  🔴 SAYI DEĞİL LİSTE (§3.4 ⑤)
kaynaksızlık      hicbiri 1968 → ~1930 · donem_ici 333 → ~371 · kayıt-kaynaksız 2301 aynı
                  🔴 "~" işareti kasıtlı: YAZDIĞIM ANDA yeniden ölçülecek
                  (ölçüm bir günde 5 kayıt oynadı; geçiş dosyası KAYNAK-TAVAN-S1-GECIS-1006.json)
```

---

## 3. 🔴 KISITLAR — ihlali geri alınması pahalı
```
① `py arac/paketle.py yenile` ŞART (zincir 1 ve 14 sonrası)
   SEBEP: site `kisiler.js`i DEĞİL `data/paket_12.js`i yüklüyor (index.html:1277-1309).
   Koşturulmazsa değişiklikler YAYINDA GÖRÜNMEZ ve `paketle.py sina` ✗ BAYAT verir.
② `--tavan-yaz` KULLANILMAZ (odak): evreni genişletip 3306 kalemi affediyor (ölçüldü).
③ `ARAC-TR1923-YAZ-0914.py` `data/`ya koordinatör kararı OLMADAN koşturulmaz.
④ `kapi` alt emri, B yaması (`URETIM_IZI.kapi`) inene kadar YAYINA ADAY ağaçta KULLANILMAZ.
   `KAPI_ALANI_ZORUNLU=True` B ile AYNI yamada iner.
⑤ `origin/projeksiyon` BİRLEŞTİRİLMEZ — `uret_petek.py`ye dokunuyor (MOTOR TUZU) ve kendi
   commit'i "görsel sınav YOK" diyor.
⑨ 🔴 `KRONO-MUKERRER-SIL` (D3) **BEKLİYOR**: silmesi üç KAYNAKSIZ günü götürüyor
   (`kirim 1571-05-24` · `macaristan 1308-06-15` · `isveç 1714-02-01`) ve birincisi
   *"dokunulmaz 9"* listemdeydi. ⇒ İkizin günü **kaynaklı mı, silinenden FARKLI mı**
   ölçülmeden uygulanmaz. Fark çıkarsa o **silme değil TARİH DEĞİŞİKLİĞİdir** ve
   `KRONO-TARIH` diff'ine taşınır, beyanlı.
   📌 Ve silinen kaynaksız değer **nota geçer**: birisi onu bir sebeple yazdı, akademik
   tur için bir İZDİR. İz silinirse arama sıfırdan başlar.
⑩ `KRONO-TARIH` (D2) ile `KRONO-TARIH-1006b` (D2b) **AYNI SATIRA** dokunuyor ⇒
   `--check` **sırayla tek tek**, tek çağrıda DEĞİL.
⑧ `KRONO-TARIH` diff'i **autocrlf DÖNÜŞÜMÜ YAPILMADAN** uygulanacak. 65 CR satırı taşıyor
   ve bu **meşru**: hepsi `data/devletler.js`te, o dosya index'te `-text` (karışık satır
   sonu, main'de de böyle). ⇒ `CR 0` beklentisi burada YANLIŞ ölçüt (`D264`).
⑦ DOM sözleşmesi kapısı (zincir 18) çıktısında **KAPSAMINI BEYAN EDECEK**:
   *"yalnız `getElementById` sorulur · `querySelector` ve DİNAMİK id ÖLÇÜLMEZ."*
   SEBEP: kısmî körlük beyan edilmezse "0 uyumsuz" tam bir güvence sanılır. Bugün 9 js /
   11 beklenti ölçülüyor; `querySelector` yolu **hiç sorulmuyor** (W29 beyan etti).
⑥ `origin/makine/tahta-web` BİRLEŞTİRİLMEZ — kesme Emre'nin üç kalemine bağlı.
   🔴 Ve kesme günü **K3 ölçülmeden seçilmez**: makineler arası ulaşılabilirlik (EMRELIC
   LAN adresi · güvenlik duvarı · her makinenin `ag.json`u) ÖLÇÜLMEDİ.
```

---

## 4. B KUYRUĞU — MOTOR TUZU, ancak TAM İNŞA koşusunda
Tuz: `uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py`. Biri değişirse
**bütün genel önbellek** ölür (`govde` geo tuzunda, o korunur).
```
MOTOR-BANT-TAM-1005.diff            5/7/10 bant kusuru (uret_petek)
su koridoru KIRPMASI                COL'un 30 km zarfına kırp; çıktı BİREBİR aynı kalmalı
                                    🔴 A kuyruğunun ÖN ŞARTI (aşağıda)
alt-aşama log satırı                Çöl tavanı içinde ara satır yok, teşhis edilemiyor
MOTOR_* sınıflandırması ③2          ③3 (AST kapısı) OLMADAN ALINMAZ — eksik geçersizleşme
                                    SESSİZCE yanlıştır
DOLGU_ONBELLEK · DOLGU_CIKTI
  · KILIT_KAPALI → İŞLETİM          ölçüldü: bir kilit bayrağı geo önbelleğini öldürüyor
URETIM_IZI.kapi + KAPI_ALANI_ZORUNLU  AYNI yamada (§3 ④)
```
### 🔴 A KUYRUĞU — tek başına İNMEZ
```
CGK boyası (renkler.py)              cenub-i-garbi-kafkas — boyasız künye HARİTA DELİĞİ
BILINEN_ALANLAR eki (girdi.py)       kaynak_zayif + zincir_kaynagi
```
⇒ **Bunlar su koridoru KIRPMASIYLA AYNI koşuda iner.** Sebebi ölçüldü: `k1` genel tuzdadır
(`:4285`), yani bu iki yama `k1`i öldürür — ve `k1`in fiyatı 6 Ekim'de ölçüldü: **47 dakika
+ bellek duvarı** (süreç başına 14,7 GB, commit 65,8/67,0 GB). Kırpma inerse o yeniden kurma
ucuz ve güvenli olur.

### 🔴 BİR SONRAKİ KOŞUNUN BAYRAKLARI
```
MOTOR_YURUYUS=1 · MOTOR_YURUYUS_SAAT=40 · MOTOR_UFUK_BANT=40,56,80 · MOTOR_COL_UFUK_SAAT=56
   ⇒ BİREBİR AYNI KALACAK. Biri değişirse govde DAHİL her katman ölür (iki tuzda da var).
MOTOR_SUREC_ISCI=2   (4 DEĞİL — bellek işçi sayısıyla DOĞRUSAL, çünkü her işçi
                      :542-:6908 arasını KENDİSİ yeniden hesaplıyor)
MOTOR_PARALEL_ISCI   şimdilik DOKUNULMAZ. GEOS segfault'u yineler ise 1'e inilir —
                     ama İKİ bayrak AYNI koşuda değiştirilmez, yoksa hangisi işe yaradı
                     ÖLÇÜLEMEZ. (İkisi de tuzda DEĞİL, serbest.)
```

---

## 5. ÖLÇÜM BEKLEYENLER — hüküm bunlara bağlı
```
GLM          2.682 TDV gövdesinden kaçı KESİK (GLM-GOREV-1006.md)
             ⇒ bu olmadan D218'in %81'i YENİDEN ÖLÇÜLMEZ
W27          256 sınavın envanteri (GECTI/OTTU/HATA/ZAMAN-AŞIMI/ATLANDI;
             OTTU → gerileme adayı ↔ bayat sabit adayı)
W28          25 tarih çelişkisi + 3 ayrı olay (kaynak işi)
W29          ARAYUZ-MADDE-0930 bayat mı — kusur bugün VAR MI (önce bu)
HAVVA        KOŞU 20 bitişi: süre · 8a/8b/8k · 8k ÜYELİK karşılaştırması · bellek.tsv
```

---

## 6. EMRE'NİN KARARLARI — `SABAH-1004`te, kuyruk onlara bağlı
Kafkasya zincir boşluğu (yanlış kimlik / delik / `__BOSLUK__`) · I. DH işgal katmanı ·
Akyaka'ya yeni nokta · varsayılan dış eşik (87 madde) · 321 kronoloji maddesinin ataması ·
atanamayan 13 için yeni künye · 2.084 eşlenmeyen madde · 256 sınav için toplu koşucu ·
kişi katmanının kapıya bağlanması · künyesiz geçiş idareleri (Naiplik · PKL · Aras-Türk) ·
`C:\atlas-umit\.git` sahipliği (yönetici) · UMIT'teki 15 push edilmemiş commit.


---

## 7. 🔴 GECE 1006 (01:30-03:00) İNEN HÜKÜMLER — yukarıdaki bölümlere ZEYİL
Bu bölüm yeni bir kuyruk değil, §0-§6'ya yapılan EKLERİN tek yerde toplanmasıdır. Her
madde hangi bölümü değiştirdiğini söyler. Sebebi §0'ın kendi gerekçesi: hüküm yalnız
mesajda yaşarsa oturum kapanınca kaybolur.

### §0'A EK — D264 ŞARTI KARŞILANDI, kuyruk bu yönden açık
`SINAV ALTYAPISI` paketinin 10 diff'i **İKİ YÖNDE** sınandı ve ikisinde de temiz:
```
indeks (LF)            git apply --check --cached   10/10 çıkış 0
çalışma ağacı (CRLF)   git apply (--cached DEĞİL)   10/10 çıkış 0 · 60 dosya değişti
```
Ölçüm UMIT'te, `origin/main` 95c1f3f4'ten atılabilir bir worktree'de yapıldı; worktree
kaldırıldı. **Kapsam beyanı ve kapanışı:** sınav yalnız `core.autocrlf=true` ağacında
koştu — ve `EMRELIC`in ayarı da ÖLÇÜLDÜ, **`true`** ⇒ kapsam, yamayı UYGULAYACAK makineyi
içeriyor. ⇒ Bu paket tek paket olarak inebilir.
📌 D264'ün kendisi hâlâ geçerli: `--check` ile `--check --cached` AYRI SORULARDIR. Burada
kapanan şey kural değil, BU PAKET için ikisinin de sorulmuş olmasıdır.

### §2'YE EK — 🔴 7 TAVANIN HİÇBİRİ GEÇERSİZ DEĞİL (ölçüldü, kesişim 0)
W32 ölçtü ki paketlemeden bu yana **20 betik 4299 yerine 10 yerleşim**, **4 betik 1768
yerine 25 madde** görüyordu. Tavanların o betiklerden gelip gelmediğini sordum; cevap:
```
BEKLENEN_MUKERRER 95 · OLU_ISTISNA 0 · BAYAT_KOPYA 7 · 2S_YALNIZ_TARAF 1648
                                   üretici arac/denetle.py        · evren girdi.yukle() 4299
ODAK-TAVAN.json (odaksiz · beyanli · sekme_*)
                                   üretici odak_olc.py + odak_cozum.js
                                   · evren odak_olc.py:100-107 canli_dosyalar()
kişi kaynaksız 0 · beyan 29        üretici durum_tablosu kisi_kaynak_say · evren kisiler.js
kaynaksızlık (hicbiri/donem_ici/kayıt)
                                   üretici denetle.kaynaksizlik_olc(girdi.yukle()) · 4299
20 BETİKLE KESİŞİM                 0        ⇒ GEÇERSİZ TAVAN YOK
ek kontrol                         odak_olc ve odak_cozum'da "paket_" / "index.html" grep 0
```
🔴 **AMA KALAN RİSK AYNEN DURUYOR ve tavan dışıdır:** o 20 betiğin ÜRETTİĞİ RAPOR
SAYILARI (ör. `ANTLASMA-KADEME` "238 isg", `ODAK-ASYA-0080-ara/-dok` çıktıları)
paketlemeden bu yana **10 yerleşimlik evrene** aittir. **O raporlara dayanan her HÜKÜM
geçersizdir.** Taraması `SESSIZ-SIFIR-1006`nın alt sorusudur: *"20 betiğin hangi raporu,
hangi kararın dayanağı oldu?"*
🔴 **VE ODAK KAPISINDA İKİNCİ BİR AYRIŞMA ÖLÇÜLDÜ:** `odak_olc.canli_dosyalar()`
**KAYNAK** dosyaları okuyor (`os.listdir(data)`), tarayıcı ise **PAKETİ** yüklüyor. Paket
bayatlarsa odak kapısı tarayıcının HİÇ GÖRMEDİĞİ bir evreni ölçer. Bugün `paketle sina`
TAZE dediği için risk yok — ve §3(1) (`paketle.py yenile` ŞART) bu yüzden de kritiktir,
yalnız `paket_12.js` yüzünden değil.

### §1'E EK — paket sırası (zincir İÇİNDE sıra değiştirilemez)
```
SINAV ALTYAPISI (10 diff, tek paket)
   MUTLAK-YOL · YANETKI 1006/b · HATA-ONARIM 1006/b · BAYAT-SABIT · PAKET-YUKLEYICI
   · TOPLU-SINAV 1006/b · KUNYE-SINA-CIKIS
KRONO zinciri   SAHTE-ALINTI → TARIH → 1006b → 1006c → MUKERRER-SIL-1006b
                🔴 eski KRONO-MUKERRER-SIL-1006 GEÇERSİZ (W28)
app.js zinciri  224 odak diff'i → KRONOLOJI-COK → APP-KISI-BAŞLIK → KIRIM-A
                🔴 üçü de app.js; sıra bozulursa birbirinin üstüne yazar
veri            OK107 (ölü ilk s: — kaybeden diff'te YAZILI) → Brod 1536-01-01 →
                Dubiça→Brod 1718 (AYRI diff) — 🔴 DÜZELTME (W45, 6 Ekim): ihlal edilen
                D207 maddesi "zincirleme devralma" DEĞİL, **① şartı: komşunun günü KENDİ
                kaynağına dayanmıyor** (Dubiça'nın 1718-07-21'i Pasarofça maddesinden
                geliyor, kaynaksız). Koordinatörün ilk hükmü maddeyi yanlış adlandırdı;
                ikisi de D207 ihlali ama ÇARELERİ AYRI: zincirleme için zinciri kesmek
                yeterdi, ① için KAYNAK BULMAK gerekiyor. W45 önce TDV Pasarofça'ya bakıyor;
                bulunmazsa yıl hassasiyetine (`1718-01-01`) düşer.
BAYAT-SABIT-SAGLAM → PAKET-YUKLEYICI → OK107   (W32'nin ölçtüğü sıra)
```

### §3'E EK — DÖRT YENİ KISIT
**(11) DÜŞÜRME / FALL-THROUGH SESSİZ OLMAZ — yakaladığını SAYAR ve ADIYLA BASAR.**
Üç yerde aynı şart: W37-B (`derinKronolojiBindir` eşleşmeyeni ÇOK'a düşürüyor) · Kırım-A
(`devletiYay` dönem bulamazsa `odak_kimlik`e düşüyor) · W42 ("tanınmayan türü de göster").
Gerekçe: düşürme, eşlemenin İYİ bir sebeple mi (çok devletli dosya) KÖTÜ bir sebeple mi
(adda yazım hatası) başarısız olduğunu AYIRT ETMEZ. Basmazsa sessiz bir KAYBI sessiz bir
ONARIMLA değişmiş oluruz ve bir sonraki yazım hatası hiç görünmez. (D225'in aynı ailesi.)

**(12) 🔴 `denetim/ARAC-TUZ-SINAV-0924` KOŞU SÜRERKEN KOŞTURULMAZ.**
Betik `arac/girdi.py` ve `arac/girdi_listesi.py`yi (İKİSİ DE MOTOR TUZU) metin kipinde
okuyup `newline=""` ile geri yazıyor ⇒ CRLF→LF, **içerik aynı, sha DEĞİŞİYOR, `git diff`
GÖSTERMİYOR.** Tuz değişirse bütün önbellek anahtarları değişir VE `uret_petek.py` koşuyu
her aşamada sınayıp REDDEDER (8 Ağustos: 83 dk koşup en sonda red) ⇒ zarar koşunun
SONUNDA görünür.
Koşu 20 için ölçüldü ve TEMİZ: beş tuz dosyasında CRLF == LF (`uret_petek` 8305/8305 ·
`renkler` 3823/3823 · `girdi` 872/872 · `motor_onbellek` 174/174 · `girdi_listesi`
720/720), son değişiklik 17:40:22 < koşu 21:20:57.
⚠️ Çare (`rb`/`wb` ile yedekle-geri yükle, W35) **koşu bitene kadar İNMEZ** — çarenin
kendisi de tuza dokunuyor (§9.1(3)). W35 yalnız diff üretir, hiçbir ağaca uygulamaz.
📌 Sınıfı: tuzu ÖLÇEN sınavın kendisi tuzu BOZUYORDU. W27 bu betiği tuz kovasında
atlamıştı.

**(13) 🔴 BEYANLI BORÇ, ancak ONU ÖLÇEBİLEN BİR ŞEY VARSA BEYANLIDIR.**
Kapı göremiyorsa "beyanlı borç" dediğimiz şey, üstüne etiket yapıştırılmış SESSİZ borçtur:
kimse çağıramaz, kapanışı görünmez, ve bir sonraki tavan yazımında "zaten öyleydi" diye
tavana girer. Uygulandığı yer: KRONOLOJI-COK'un 224 BEYANLI→yabancı maddesi, odak kapısı
DOSYA BAZLI ölçtüğü için görünmüyordu ⇒ COK tek başına inmiyor, odak işiyle AYNI PAKETTE.

**(14) YAKLAŞIK KOORDİNAT, YAKLAŞIK OLDUĞU BELLİ OLACAK ŞEKİLDE YAZILIR — yoksa YAZILMAZ.**
ODAK-ASYA'nın 10 AK kararı YAKLAŞIK `yer_kon` yazıyor. İşaretleyen bir alan varsa
(`yaklasik:true` vb.) 189'un tamamı iner; YOKSA o 10 hariç tutulur ve işaretleme alanı
eklenene kadar bekler. Çıplak yaklaşık koordinat SAHTE KESİNLİKTİR (D210) ve bir sonraki
okuyucu onu kaynaklı sanar.

### §5'E EK — BU GECE AÇILAN DÖRT KALEM (hepsi ÖLÇÜM, yazma yok)
```
ZINCIR-GOC-1006          kosu_yayin.py → kos_ve_yayinla.py geçişinde DÜŞEN adımlar.
                         Ölçüldü: ⑥b (kronoloji şeması) düşmüş; ⑥c (arayüz) şüpheli.
                         Çıktı: eski adım · yeni zincirde var/yok · düştüğü commit.
                         📌 Kapı YANLIŞ CEVAP vermiyor; HİÇ SORU SORMUYOR — daha sessiz.
SESSIZ-SIFIR-1006        üretilmiş çıktı/girdi yokken SAYI BASAN sınıf. Bilinen dördü:
                         ODAK-ASYA (Tebriz n=0) · ANTLASMA-KADEME (10 yerleşim) ·
                         ANTLASMA-KAPSAM (×NaN) · UI2-FARK (PETEKLER 0).
                         + ALT SORU: 20 betiğin hangi raporu hangi kararın dayanağı oldu?
                         Ölçüt adayı: W32'nin dört tetiği (paket işaretsiz · src yok ·
                         süzgeç sıfır · <%90 girdi) — dördüncüsü "AZ okudum"u yakalıyor.
ODAK-KAPI-KORLUK-1006    kapı DOSYA BAZLI ölçüyor ⇒ maddeleri DOSYALAR ARASI taşıyan
                         değişikliği göremiyor + canli_dosyalar() KAYNAK okuyor, tarayıcı
                         PAKET yüklüyor. İki yönde göster, madde-kimliği ölçütünü ÖNER.
KESINTISIZ-SAHIPLIK-1006 atlasın KESİNTİSİZ gösterdiği dönemde kaynak KESİNTİ diyor mu?
                         Dubiça 1687-1701 Avusturya (HE) ~14 yıl · Dimetoka 1913-15
                         Osmanlı olabilir (TDV meriç, 1915 Sofya) ~2 yıl · Yunan'a geçiş
                         atlas 1920-05-27 / TDV 1922. §3.5'in ZAMAN ekseni; 4c/4d sormuyor.
                         🔴 Dimetoka ve Ferecik METİN düzeltmeleri BU İŞ BİTENE KADAR
                         BEKLER — kaynaksız ucu düzeltmek kaydı kaynaklıymış gibi gösterir
                         ve hatayı DÜZELTMEYE KARŞI KORUR.
```

### KOŞU 20 — ölçülmüş durum (02:00)
```
başlangıç 2026-10-05 21:20:57 · taban fc380975 · yama yok · yayın yok
govde     2 sa 50 dk · sıra 89/608 · ana süreç 6.697 MB · boş 14.118 MB · önbellek ~720 MB
işçi 1 ve 2  paylarını bitirip NORMAL çıktı
işçi 3       23:07'de GEOS segfault (0xc0000005) — BELLEK DEĞİL, kütüphane arızası
             ⇒ ana süreç işçi 3'ün kalan ~132 devletini TEK BAŞINA, SIRAYLA hesaplıyor
🔴 BİTİŞ TAHMİNİ ÖLÇÜLMEDİ: "04:00" bir yorumdur. 2sa50dk'da 89/608 düz oranı ~16 saat
   verir; ikisi arasında 8 KAT fark var. Üç sayı istendi: ① sayaç neyi sayıyor (global mi
   ana süreç mi) ② SON 30 DAKİKADAKİ devlet sayısı (düz oran değil GÜNCEL oran)
   ③ işçi 3'ün bitirdikleri önbellekte duruyor mu (yoksa 3 saatlik iş iki kez yapılıyor).
   Karar: kalan < ~3 sa → BEKLE · > ~6 sa VE önbellek DURUYOR → yeniden başlatma tartışılır
   (`MOTOR_DEVAM` tuzda DEĞİL, `_ONB_ISLETIM`de) · > ~6 sa VE önbellek YOK → mecburen bekle.
⚠️ Koşucu kendi başına durdurmaz/başlatmaz/bayrak değiştirmez; bir koşuda iki bayrak
   birden değiştirilmez.
```


---

## 8. 🔴 KOŞU 20 BİTTİ — ÖLÇÜLMÜŞ SONUÇ ve BİR SONRAKİ KOŞUNUN BAYRAĞI
`2026-10-05 21:20:57 → 10-06 05:35:34` = **8 sa 14 dk 37 sn** · taban `fc380975` · yama yok
· stderr 0 bayt · *"Doğrulama: tüm yerleşimlerin peteği geçerli ✓"* · önbellek 835 MB.

### Aşama süreleri
```
Çöl tavanı              47 dk 02 sn
Yabancı gövdeler      3 sa 32 dk 33 sn   (işçi 3 GEOS segfault 0xc0000005, 23:07)
Dönemler (delta)      2 sa 28 dk
Uzak coğrafya seyreltme + osm + sb      (05:06:57'den sonra)
Ⓑ ufuk bantları         21 dk 58 sn      (ufuk_bantlari.js 264 MB)
çıktı yazımı                   4 sn
çapraz sayaç: yabancı gövde 4273 çağrı / 11 sa 07 dk (iplik toplamı) · varlık devri
2 sa 56 dk · serbest kenar 1 sa 14 dk · Osmanlı gövde 1 sa 12 dk
```

### 🔴 BELLEK — koşu DUVARA 0,9 GB KALA geçti, ve yalnız PAGEFILE BÜYÜDÜĞÜ İÇİN sağ kaldı
`denetim/HAVVA-KOSU20-BELLEK.tsv` (512 kayıt, 22:08:57 → 05:35:03) ölçümü:
```
TEPE TOPLAM BELLEK   60.261 MB  (4 süreç)   22:32:23  · Çöl tavanı
TEPE TEK SÜREÇ       16.440 MB              05:08:32  · Uzak coğrafya seyreltme
EN AZ BOŞ RAM             2 MB              22:22:54  · Çöl tavanı
TEPE COMMIT        67,1 / 68,0 GB  (%99)    22:27:24  · Çöl tavanı
```
🔴 **COMMIT TOPLAMI SABİT DEĞİL — koşu sırasında BÜYÜDÜ:**
`46,9 → 53,9 → 65,0 → 66,3 → 66,7 → 67,0 → 68,0 GB` (+21 GB). ⇒ Koşu 22:27'de
**%99**'a dayandı ve ölmedi ÇÜNKÜ Windows pagefile'ı büyüttü. Disk dolu olsaydı ya da
pagefile sabitlenmiş olsaydı koşu **1 saatte** ölürdü.
**Süreç sayısına göre tepe toplam:**
```
4 süreç  60.261 MB  (süreç başı 15.065)  ← Çöl tavanı · DUVAR BURADA
3 süreç  14.147 MB  (süreç başı  4.715)
2 süreç  10.989 MB  (süreç başı  5.494)
1 süreç  16.440 MB                        ← seyreltme; süreç sayısıyla ilgisi YOK
```

### 🔴 BİR SONRAKİ KOŞUNUN BAYRAĞI — artık TAHMİN DEĞİL, ÖLÇÜM
```
MOTOR_SUREC_ISCI=2        ✅ ÖLÇÜMLE DOĞRULANDI. Çöl tavanında 2 süreç ≈ 30 GB
                             (4 süreç 60 GB idi) ⇒ rahat pay. =4 TEKRARLANAMAZ:
                             sağ kalması pagefile'ın +21 GB büyümesine bağlıydı.
MOTOR_PARALEL_ISCI        DOKUNULMAZ (varsayılan 4). İki bayrak AYNI koşuda değişmez.
öteki bayraklar           BİREBİR AYNI: MOTOR_YURUYUS=1 · MOTOR_YURUYUS_SAAT=40 ·
                          MOTOR_UFUK_BANT=40,56,80 · MOTOR_COL_UFUK_SAAT=56
```
📌 Tek süreç tepesi (16,4 GB) işçi sayısından BAĞIMSIZ — `Uzak coğrafya seyreltme`
aşamasının kendi maliyeti. `=2` onu düşürmez; düşüren tek şey o aşamanın kendi yamasıdır.

### 🔴 EŞİK DERSİ — bu gece ÜÇ KEZ aynı aile
Koşuyu izlemek için üç eşik yazdım, **ÜÇÜ DE YANLIŞ KALİBREYDİ** ve üçünde de aynı kusur:
*sayıyı kaynağından koparıp başka bir evrene taşımak.*
```
① "osm+sb < 45 dk"        → var OLMAYAN bir aşamaya verildi (koşu hâlâ Dönemler'deydi)
② "ana süreç > 15.000 MB" → DÖRT süreçli duvardan alınan SÜREÇ BAŞINA sayı, TEK sürece
                             uygulandı. Öttüğünde boş RAM 6,6 GB ve commit %36'ydı.
③ "commit > 50 / 66 GB"   → PAYDA SABİT SANILDI. Gerçek payda 46,9'dan 68,0'a BÜYÜDÜ;
                             46,9 toplamda "50 GB" ERİŞİLEMEZ bir eşiktir.
```
⇒ **KURAL: hareketli paydaya karşı MUTLAK eşik, eşik değildir.** Doğrusu YÜZDEdir:
`commit > %85` · `boş RAM < toplam fiziğin %10'u`. Ve bir eşik yazılırken **hangi
evrende ölçüldüğü** eşikle AYNI satıra yazılır (kaç süreç · hangi aşama · payda ne).

### Denetim sonucu — çıkış 2, TEK sebep D8
```
D1 309/309 ✓ · 1c 4 · 1b 0 · D2 623 kırılma 0 açık ✓ · 2s 187 açık (tavan 189) ·
2i 1 · 2t 13 · D4 0 hayalet · 4c 127 · 4d 324 · 4s 5 · D5 0 · 5a-muaf 1 ·
konum 0 ✓ · dönem sağlığı 0 · kaynaksız s: 1930 (tavan 1968) · mükerrer 112 (≤113) ·
🧊 D7 734 sorgusuz enklav (beklenen 731, +3) · D2sk 🧊 1665/1665
🔴 ÇIKIŞ 2 · OLCULEMEDI_KOVA: "Değişmez 8 — GÖVDE UYUŞMUYOR: devletler_harita.js
   yereldeki koşudan, site ise KODLANMIŞ sürümü yüklüyor (yerel ea4fef043e5a ↔
   site 0ef2d3e23c4e). Değişmez 8 YAYINDA OLMAYAN bir haritayı ölçerdi; soru SORULMADI."
```
⇒ Çare `py arac/kodla.py kodla` (169 MB → 10 MB KAYIPSIZ), sonra `denetle.py` TEKRAR.
**Yayın kararı D8'in cevabına BAĞLI** — ölçülemeyen soru temiz değildir (`§3`).

### 🔴 İKİ GERİLEME — kimlik istendi, sayı yetmez
```
1 renksiz künye HARİTADA kullanılıyor   §1.5 bu satırda ✓ 0 diyor ⇒ YENİ HARİTA DELİĞİ
D7 +3 enklav                            YENİ KAPSAM mı GERÇEK BORÇ mu — çareleri ters
'dogrulanmadi' BILINEN_ALANLAR'da yok   yerlesimler_ek29.js: Deyrülkamer. O alanı
                                        hiçbir kod OKUMUYOR (ölçüldü) ve veride göründü.
```

### 🔴 KOŞU ÇIKTISI git'e GİREMEZ — mimarî, kusur değil
`.gitignore` TAM YOL olarak dışlıyor: `data/donemler.js` · `data/devletler_harita.js` ·
`data/petek_govde.js` · `data/ufuk_bantlari.js`. ⇒ Siteye ulaşan tek yol KODLANMIŞ sürüm
(`devlet_harita_ust.js` · `devlet_parcalar.js` · `petek_govde_parca.js` …).
⚠️ **Dolayısıyla 8 sa 14 dk'lık işin TEK NÜSHASI `C:\atlas-kosu` worktree'sinde.**
Kodlanmış sürüm commitlenene kadar o worktree SİLİNMEZ/TEMİZLENMEZ.
📌 `6831b5da`in commitlediği 4 dosyadan yalnız `denetim/HAVVA-KOSU20-BELLEK.tsv` main'e
alındı. `data/bolgeler.js` · `data/devirler.js` · `veri-kaynak/motor_kara.geojson`
**BEKLETİLİYOR**: kodlanmış geometri kardeşleri gelmeden alınırsa main yeni bölge/devir
ile ESKİ kodlanmış geometriyi birlikte taşır — yarım, tutarsız bir durum. Geometri ailesi
TEK SETTE iner.
