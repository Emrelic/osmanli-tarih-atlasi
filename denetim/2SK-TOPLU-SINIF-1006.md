# 2SK-TOPLU-SINIF-1006 — bekleyen 5 kalemin 2sk "yalnız TARAF" birimleri, BİRİM BİRİM

Görev: UMIT İRTİBAT, 6 Ekim 2026. YALNIZ ÖLÇÜM VE ÖNERİ (veri yazılmadı, diff yazılmadı).
Ağaç: `C:\atlas-p84-2sk` = `origin/makine/umit` @ **3ec79a5f** (detached). Her kalem ayrı uygulandı,
ölçüldü, `git checkout -- data/` ile geri alındı; sonra beşi birlikte uygulandı.
Araç: `denetim/ARAC-2SK-TOPLU-SINIF-1006.py` (salt okur). `denetle.py`nin KENDİ `_2s_yeri_aniyor` /
`_2s_tarafi_aniyor` / `gun_no` / yükleyicileri çağrılır; `degismez2`nin `yer_sarti` dalı birim birim
taklit edilir ve **her koşuda `KAPANIS_2S` ile çapraz sınanır** (6 sayaç birebir; 11 koşunun 11'inde ✓).
Birim satırları: `denetim/2SK-TOPLU-SINIF-1006.tsv` (89 satır: 57 giren, 32 çıkan).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (aynen korunuyor)
Sayı: toplam **+25**, bu temelde **±2 içinde**. Kova: ① ≈ **8** · ② ≈ **15** · ③ ≈ **2**.
Mekanizma: ADAY'da bir kısmı ① (Gelibolu Antlaşması maddesi yoksa) · TRAKYA Čakovec 1918/1920 ①,
1526 ② · MAZENDERAN ② (temsil noktası) · TEBRIZ +1 = Aras maddesi Tebriz'i artık anmıyor ⇒ ② ·
LUGOS 1920 ①, 1918 ① ya da ②.

## 1. ÖLÇÜM — sayılar (3ec79a5f)
| koşu | görünür+maskeli TARAF | fark |
|---|---|---|
| taban | **2247** (gün 1584 · ocak1 489 · maskeli 174) | — |
| ADAY UMIT+KOORD | 2261 | **+14** |
| ADAY yalnız UMIT / yalnız KOORD | 2247 / 2247 | 0 / 0 — +14 ancak İKİSİ BİRLİKTE doğar |
| TRAKYA H0015-KOORD | 2251 | **+4** |
| MAZENDERAN KOORD | 2251 | **+4** |
| TEBRIZ UMIT+KOORD-40 | 2248 | **+1** (= +33 −32) |
| TEBRIZ yalnız UMIT / yalnız KOORD-40 | 2252 / 2215 | +5 / −32 — ikisi tek başına anlamsız (KOORD tek başına 32 birimi 2s AÇIK'a atar) |
| LUGOS UMIT+KOORD | 2249 | **+2** |
| LUGOS yalnız UMIT / yalnız KOORD | 2247 / 2249 | 0 / +2 |
| **BEŞİ BİRLİKTE** | **2272** | **+25** (+57 −32) — toplanabilir, kalemler arasında etkileşim YOK |

Öngörünün SAYISI tuttu (+25, fark 0). Raporlardaki tekil sayıların beşi de bu temelde aynen çıktı.

## 2. BİRİMLER ve KOVALARI (net +25)
### ADAY +14 — hepsi ② (14)
`1410-01-01 suleyman-celebi → mehmed-celebi`, OCAK-1 sütunu: **Akyazı · Anadolu Hisarı · Bergama · Beykoz ·
Eskişehir · Gebze · Hereke · Kandıra · Karabiga · Karacahisar · Pelekanon (Eskihisar) · Samandıra · Üsküdar ·
İzmit**. Kapatan: `olaylar_ek3.js:15` *Mehmed Çelebi Bursa ve Ankara'yı yeniden aldı — Anadolu payı Süleyman
Çelebi'den çıktı* (başlıkta taraf).
Hüküm ②: madde DOĞRU olaydır ("Anadolu payı" çıktı); TDV kasaba adı vermiyor, madde "Bursa yöresi" diyor
⇒ D208 bölge cümlesi. Eksik ayrı bir olay bulunmadı.
⚠️ Kova dışı not (ölçülmedi): Eskişehir · Karacahisar · Bergama · Karabiga "Bursa yöresi"nin dışındadır;
1410'da gerçekten Süleyman'dan Mehmed'e geçip geçmedikleri bir **veri** sorusudur (`§3.5` "devlet var,
yeri yanlış"), 2sk sorusu değil. Öngörüdeki "Gelibolu Antlaşması ⇒ ①" **ÇÜRÜDÜ**: o antlaşma 1403'tür,
1410 kırılmasının ±30 gününe düşmez.
Oynatan hunk: KOORD `yerlesimler.js` @@-144 (Eskişehir · İzmit · Bergama) · @@-1514 (Karacahisar · Pelekanon ·
Gebze · Hereke · Samandıra · Anadolu Hisarı) · @@-98 (Akyazı · Kandıra) · `yerlesimler_ek23.js` @@-135 (Beykoz) ·
`yerlesimler_ek29.js` @@-343 (Üsküdar) · `yerlesimler_seyrek.js` @@-308 (Karabiga) **+** UMIT `olaylar_ek3.js:15`.
2sk-SİZ kısım: KOORD'un öteki bütün hunk'ları (İnegöl … Gemlik `d:` satırları, @@-67/-98; Söğüt · Bozüyük · Bursa ·
İznik … @@-144; Domaniç … Gölyazı @@-1514; Biga @@-1484; Edremit · Erdek @@-1773; Ayvalık @@-1807; Behramkale
ek23 @@-124) — bunlar YER kolundan kapanıyor ya da 2s'i kapatıyor, 2sk'yı oynatmıyor. ⚠️ Ama +14 KOORD'dan
ayrılamaz: madde olmadan bu 14 kırılma 2s AÇIK olur (2s'in tavanına yüklenir); +14 o kapanışın bedelidir.

### TRAKYA +4 — ② 2 · ① 2
| birim | kapatan | kova |
|---|---|---|
| 1526-08-29 Čakovec macaristan→macaristan-habsburg (MASKELİ) | `olaylar.js:81` Mohaç | ② taht değişimi, konu Čakovec değil; aynı gün 12 kardeş birim aynı kolda |
| 1918-11-11 Čakovec habsburg→naiplik | `olaylar_ok109.js:121` Villa Giusti | ② rejim değişimi; 45 kardeş birim (öngörüdeki ① ÇÜRÜDÜ) |
| 1918-11-11 Ptuj avusturya→yugoslavya | `olaylar_sessiz_borc_0919.js:27` Avusturya Cumhuriyeti | **①** Aşağı Steiermark'ın SHS'ye geçişi (Maister, 1 Kasım 1918) maddesi YOK — YER kapanışı ③ |
| 1920-06-04 Čakovec naiplik→yugoslavya | `olaylar_ok109.js:151` Trianon | **①** Trianon maddesi Muraköz'ü anmıyor — YER kapanışı ③ |
Oynatan hunk: KOORD `yerlesimler_p77_avrupa.js` @@-24,9 +24,18 (iki YENİ nokta; Maribor `s:` satırı 2sk-SİZ).

### MAZENDERAN +4 — hepsi ② (4)
1392-10-26 Bârfurûş · Eşref (`mazenderan-marasi → timurlu`, kapatan `olaylar_senkron_0930.js:53` *Mâzenderan
Timurlu idaresine geçti*) · 1413-01-01 Bârfurûş · Eşref (`__BOSLUK__ → mazenderan-marasi`, OCAK-1, kapatan
`:69`). Madde doğru olay, bölge cümlesi; iki nokta bölgeyi temsil ediyor, Eşref 1612'de kurulmuş ⇒ anmak
anakronizm. Öngörü mekanizması TUTTU, ama kalemin raporu "1405 kırılması" diyordu — 2sk'yı oynatan
1405 değil **1392 ve 1413** kırılmalarıdır (1405'te iki nokta 2s AÇIK'ta, 2sk'da değil).
Oynatan hunk: KOORD `yerlesimler.js` @@-2017 (Bârfurûş · Eşref satırları) + `olaylar_senkron_0930.js` @@-47
(yeni 1392 / 1413 maddeleri). Sârî · Âmül satırları 2sk-SİZ (YER kolundan kapanıyor).

### TEBRIZ +1 — ⚠️ yeni borç DEĞİL, SAHTE bir YER kapanışının düzelmesi
- 32 birim (Ardahan … Urmiye) 1406-10-21'den (**GÜN-MASKELİ**, yalnız TARAF) 1408-04-13'e (**GÜN-KAPALI**,
  yalnız TARAF) taşındı: sınıf değişmedi, toplam değişmedi. Kapatan `olaylar_ek7.js:206` Serdrûd — maddenin
  kendi `ic_not`u "36 nokta için BÖLGE CÜMLESİ (D208)" diyor ⇒ **②**.
- **+1 = Beri**. Tabanda Beri 1406-10-21 **YER** kolundan kapanıyordu — çünkü eski Aras maddesinin gövdesinde
  *"…1351'den **beri** Doğu Anadolu-Azerbaycan hattında…"* geçiyor ve `_2s_gecer` "beri" kelimesini Beri köyü
  sandı. UMIT diff'i metni yeniden yazınca kelime gitti, birim doğru sınıfına (TARAF) düştü. ⇒ **②, ve bu +1 bir
  iyileşmedir** (sahte "yer anılıyor" kaybolur). Öngörünün mekanizması ("Tebriz artık anılmıyor") ÇÜRÜDÜ:
  Tebriz YER'de kaldı (Serdrûd `yer_id:"Tebriz"`).
- Oynatan hunk: KOORD-40 `yerlesimler_sinir_kuzey.js` @@-26,8 (Beri satırı, diff satırı 240) + UMIT
  `olaylar_ek7.js:205` (Aras maddesinin gövdesi). 32'lik taşıma: KOORD-40'ın öteki zincir satırları + UMIT :206.

### LUGOS +2 — ② 1 · ① 1
| birim | kapatan | kova |
|---|---|---|
| 1918-11-11 Lugos habsburg→naiplik | `olaylar_ok109.js:121` Villa Giusti | ② rejim değişimi, 45 kardeş birim |
| 1920-06-04 Lugos naiplik→romanya | `olaylar_ok109.js:151` Trianon | **①** Banat'ın Romanya'ya geçişi adıyla yok — YER kapanışı ③ |
Oynatan hunk: KOORD `yerlesimler.js` @@-499,8 +499,10 (Lugos zinciri). UMIT diff'i 2sk'ya **0** (2s'i kapatıyor).

### TOPLAM: ① **3** · ② **22** · ③ **0** (saf) — öngörü 8/15/2 **ÇÜRÜDÜ**
Ve ①'in üçünde de YER kapanışı ③'tür: olay gerçek ve maddesi yok, ama bugün elimdeki kaynak o yeri O OLAYDA
**adıyla** anmıyor. ⇒ Madde yazılırsa bu üç birimin tavanı **otomatik DÜŞMEZ**.

## 3. KOVA ① — YAZILACAK MADDE LİSTESİ (öneri; UMIT yazar, kaynak tırnağı yazımda yeniden GET ile)
| # | olay | gün | kaynak adayı | bugün KAPATIR | KAPATMAZ |
|---|---|---|---|---|---|
| 1 | Rudolf Maister Maribor'u ele geçirdi, Aşağı Steiermark'ın komutasını aldı | **1918-11-01** (gün kaynakta) | Slovenska biografija (ZRC SAZU) `oseba/sbi340526` — **GET 200, birebir**: *"Tako se je 1. nov. 1918 s pooblastilom Nar. sveta s 15 častniki in 87 vojaki polastil Maribora in postal komandant vse spodnje Štajer…"* | **Maribor** 1918-11-11 (bugün tavanda, YER'e geçer ⇒ −1) | Ptuj (kaynak adıyla anmıyor) |
| 2 | Trianon'la Banat'ın bölüşülmesi — doğu Banat Romanya'ya | 1920-06-04 | TDV `timisvar` (LUGOS KOORD diff'inde alıntılı: *"Barış antlaşmalarına göre Banat bölgesi Romanya ve Sırbistan arasında bölüşüldü"*) + TDV `birinci-dunya-savasi` (gün) | **Temeşvar** — ancak TDV `timisvar` gövdesi şehrin kendisini bu cümleye bağlıyorsa (GET ile OKUNMALI; bu turda okunmadı) | Lugos (kaynak adıyla anmıyor) |
| 3 | Muraköz'ün SHS'ye bağlanması — Trianon'la tanındı | 1920-06-04 | Hrvatska enciklopedija `medjimurje` (TRAKYA diff'inde alıntılı: *"Nakon I. svjetskog rata Međimurje je bilo pripojeno Državi SHS, što je bilo priznato mirovnim ugovorom u Trianonu (1920)"*) | — (Čakovec adı yok, `m:` yok) | Čakovec |

⚠️ **#2'nin TUZAĞI — ölçüldü:** `Yanova (Ineu)` kaydında `m:"Temeşvar"` var. Başlığında/`yer`inde "Temeşvar"
geçen bir 1920 maddesi Yanova'yı **merkez kolundan** kapatır. Oysa Ineu Banat'ta değil (Arad, Körös
yöresi) ve `m:` Osmanlı eyalet merkezidir ⇒ bu **tesadüfî kapanma** olur. Yazarken Yanova'nın kapanmasını
kabul etmeyin ya da sayıdan düşün.
📌 **Čakovec için doğru olay başka bir GÜNDEDİR:** Hrvatska enciklopedija `cakovec` — **GET 200, birebir**:
*"U prosincu 1918. vojska Narodnoga vijeća SHS ponovno je oslobodila Čakovec i Međimurje te ih uključila u
novonastalu južnoslavensku državu."* Bu cümle Čakovec'i ADIYLA anıyor, ama **Aralık 1918** (ay): bugünkü
1918-11-11 ve 1920-06-04 kırılmalarının ±30 gününe düşmez. Bu maddeyi yazmak 2sk'yı kapatmaz; Čakovec'in
verisine Aralık 1918 fiilî SHS girişi (`isg:` ya da `s:`) yazılırsa ayrı bir kırılma doğar ve o
kırılma YER'den kapanır. ⇒ bu bir **veri** kalemidir (KOORD), 2sk kalemi değil. TRAKYA raporunun
"1918 fiilî Yugoslav girişi günü: bulunamadı" satırı **artık ay düzeyinde bulundu** (gün yok).
Aynı yapı Ptuj için: HE `ptuj` *"God. 1918–41. bio je u sastavu Kraljevine SHS"* — yıl, gün yok.

## 4. ÜÇ SORUYA CEVAP
- **+25 bir EKSİK MADDE SAYACI mı?** Ölçüm: **HAYIR, büyük kısmı değil.** 22/25 birimin maddesi VAR ve doğru
  olaydır; yer, kaynağın bölge cümlesinin içindedir (D208). Yalnız 3 birim için eksik madde var ve o üçünün
  hiçbiri bugünkü kaynaklarla YER'den kapanmıyor.
- **Tavan ne olmalı (öneri, yazan koordinatör):** 5 kalem birlikte inerse **2247 → 2272**, sabit ve beş diff
  **aynı commit'te** (`§3.4 ②`). ⓪ gereği yazmadan önce yeniden koşturun: bu sayı 3ec79a5f'te.
  ① listesindeki #1 yazılırsa −1 (Maribor), #2 Temeşvar'ı adıyla kapatırsa −1 daha (Yanova HARİÇ).
- **Kalemlerin birbirine etkisi:** yok (beşinin toplamı = tekillerin toplamı, +25).

## 5. YAN BULGU — kova dışı, adıyla
- **Kelime çakışması YER kolunu sahte kapatıyor:** `_2s_gecer` Türkçe gövdede yerleşim adını kelime olarak
  arıyor; "beri" (Beri köyü) bunun ölçülmüş ilk vakası. Bugün başka kaç birim bu yoldan kapanıyor
  **ÖLÇÜLMEDİ** (aday sözcükler: yaygın Türkçe kelimeyle aynı yazılan yer adları). Ayrı kalem önerilir;
  bulunanlar 2sk'da YER→TARAF geçeceği için tavanı YÜKSELTİR — iyileşme olarak okunmalı.
- **Yanova `m:"Temeşvar"`** merkez kolunun 20. yy maddelerinde Osmanlı merkezini kullanması — aynı aileden.

## 6. BULAMADIM / ÖLÇEMEDİM (6 Ekim 2026)
- Lugos'u Trianon/Banat devrinde adıyla anan kurumsal kaynak: aranmadı bu turda (LUGOS raporu MNIR'de yalnız
  bölge buldu).
- TDV `timisvar` gövdesi bu turda GET ile okunmadı (alıntı LUGOS KOORD diff'inden).
- Ptuj'u 1918 Kasım'ında adıyla anan kaynak: bulunamadı (Slovenska biografija Maister maddesinde yok;
  HE `ptuj` yalnız yıl).
- Slovenska biografija'da ilk denenen `oseba/sbi338453/` → **404**; doğru giriş `sbi340526` (site araması
  `/iskanje/?q=Maister`).
- ADAY'daki 4 iç/Ege noktasının 1410 aidiyeti ölçülmedi (veri sorusu).
