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
