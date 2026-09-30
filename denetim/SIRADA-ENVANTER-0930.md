# SIRADA-ENVANTER-0930 — açık kutu hükümlerinin iş-sınıfı envanteri

> 30 Eylül 2026 · üreten `py denetim/SIRADA-ENVANTER-0930.py` (bu dosyayı da o yazar, elle düzenleme) · kaynak `C:/claudemre/kutu/giden` (YALNIZ OKUNDU) · makine çıktısı `denetim/SIRADA-ENVANTER-0930.json`

## 0. Önce sayının kendisi — 525 nereden geliyor

| | madde |
|---|---|
| koordinatörün saydığı `sirada` (96 parti, bütün projeler) | **525** |
| − atlas DIŞI partiler (`PARTI.json` `proje` = EczAsist, 15 `parti-kasa-*`) | −29 |
| **= atlas `sirada`** | **496** |
| ayrıca: atlas `olculecek` · `kosu-bekliyor` · `tekrar` | 35 · 38 · 14 |

🔴 **Sayıma HİÇ girmeyen: 9 atlas partisinde `CEVAP.json` yok → 347 madde hükümsüz** (0072:15, 0073:20, 0074:17, 0077:88, 0078:6, 0079:16, 0080:30, 0081:53, 0082:102). Açık iş 636 değil, bunun üstündedir; bu maddelerin sınıfı ölçülemedi (hükmü/notu yok).

⚠️ EczAsist maddeleri hasta verisi taşır (TC, ad, reçete) — envantere ALINMADI, yalnız sayıldı.

## 1. Sınıf dağılımı

| sınıf | sirada | olculecek | kosu-bekliyor | tekrar | toplam |
|---|---:|---:|---:|---:|---:|
| KOSU-GEREKIR | 158 | 24 | 15 | 10 | 207 |
| VERI-DUZELTME | 216 | 2 | 21 | 1 | 240 |
| ARAYUZ | 49 | 1 | 0 | 1 | 51 |
| KAYNAK-ARASTIRMA | 24 | 1 | 2 | 0 | 27 |
| BELIRSIZ | 49 | 7 | 0 | 2 | 58 |
| **toplam** | 496 | 35 | 38 | 14 | 583 |

- `VERI-DUZELTME`in **196**'i EK OKUMA kartı yazımıdır (kaynak okumayı zaten içerir; hedef `data/ekokuma_*.js`) — tek satırlık düzeltme DEĞİL, içerik üretimi. Kalan veri düzeltmesi 20.
- `BELIRSIZ` 49: 7'i Emre'nin kendi TK Kırım oturumunda (dağıtılamaz); 13'i HARITA-VERI (çoğu RENK: `renkler.py` — motor tuzunda, §9.1) ; gerisi metinde sınıf sinyali yok ya da akım etiketiyle çelişiyor.

**Yöntem (uydurmamak için):** sınıf, notun `KALAN:` bölümünden; yoksa notun kendisinden (≥160 karakter); not kısaysa (çoğu yalnız "<AKIM> oturumunda · şartname …") madde metni + not. Dört sınıfın anahtar kelime sinyalleri sayılır; engelleyen önce gelir (araştırma ≥2 isabetle). Metinde sinyal yoksa notun ilk kelimesindeki AKIM etiketi (DALGA-00xx şartname tablosundaki oturum adı) sınıfa çevrilir — `sinif_tabani: akim etiketi` (41 madde). Akım raporunun satırı "KOD" diyorsa ARAYUZ'e döner. Metin ile akım zayıf sinyalle çelişirse BELIRSIZ. **Elle sınav:** rastgele 30 `sirada` maddesi (tohum 2026) okundu → 26 doğru · 2 yanlış (TK Kırım maddesi · başkent şeması) · 2 tartışmalı; iki yanlışın kuralı düzeltildi. Doğruluk ≈ %87 — **sınıf bir İLK ELEMEDİR, atama öncesi işçi kendi kümesini yeniden okur.**

## 2. 🔴 Bayat `sirada` — iş YAPILMIŞ, hüküm güncellenmemiş

`sirada` maddelerin çoğu 14-17 Eylül'de DALGA-0052…0071 akımlarına dağıtılmış (`akim` alanı dolu: 330/496). Akımın kendi raporu (`denetim/<AKIM>-*.md`) tablo satırında maddeyi anıyorsa okundu:

| akım raporunun o maddedeki satırı | madde |
|---|---:|
| akım etiketi yok | 166 |
| tabloda-yok | 158 |
| rapor-yok | 69 |
| TAMAM-diyor | 54 |
| karisik | 39 |
| ACIK-diyor | 10 |

- **32 madde: rapor ✅/TAM/YAZILDI diyor VE satırdaki kart kimliklerinin HEPSİ canlı `data/*.js`'te var** — en güçlü bayatlık delili. Bunlar `sirada` sayılmamalı; hüküm defterde güncellenmemiş.
- 22 madde daha: rapor TAMAM diyor ama satırda kimlik yok (ör. UI satırları) — kodda doğrulanmalı.
- 15 madde: notun kendisi commit + "İNDİ" yazıyor (kısmen uygulanmış, `KALAN` var).
- ⚠️ Rapor tablosunda H-numarası parti ayırt etmez (0052 raporu 0051/0053 maddelerini de anabilir); `tabloda-yok` / `rapor-yok` "yapılmadı" demek DEĞİLDİR — ölçülemedi demektir.

Bayat adaylar (rapor TAMAM + kimlik veride):

| parti | madde | akım | başlık |
|---|---|---|---|
| 0052 | H-0053 | EKO-TOPLUM | mehter bölüğü gibi ordu bandosu şeklinde iş yapan mehter mar |
| 0052 | H-0116 | EKO-TOPLUM | osmanlı hanedanı konusunda evlilik müessesesi ve nikah cariy |
| 0052 | H-0117 | EKO-TOPLUM | harem teşkilatını anlatan ek okumalar yapalım harem nasıl bi |
| 0052 | H-0118 | EKO-TOPLUM | osmanlı toplumunda kölelik ile ilgili ek okumalar yazalım. k |
| 0052 | H-0119 | EKO-TOPLUM | osmanlıda ticaret konusunda ek okuma yapalım |
| 0052 | H-0120 | EKO-TOPLUM | osmanlıda sanayi konusunda ek okuma yapalım |
| 0052 | H-0121 | EKO-TOPLUM | osmanlıda esnaf ve zanaatkarlar ile ilgili ek okuma yapalım |
| 0052 | H-0127 | EKO-TOPLUM | hat sanatı ebru sanatı çini sanatı ile ilgili ek okuma madde |
| 0052 | H-0035 | EKO-DUNYA | yemende osmanlı hakimiyeti yemenin coğrafi önemi buradaki de |
| 0052 | H-0036 | EKO-DUNYA | tarihi ipek yolu ve doğu batı arasındaki ticaret yolu hakkın |
| 0052 | H-0037 | EKO-DUNYA | yeni dünyanın keşifleri ve coğrafi keşifler konusunda ek oku |
| 0052 | H-0038 | EKO-DUNYA | çeşitli icat ve buluşlar konusunda ek okumalar yapalım |
| 0052 | H-0040 | EKO-DUNYA | iran toprakalrının nedne elde tutulamadığı ve osmanlı çekili |
| 0052 | H-0041 | EKO-DUNYA | karadenizin kuzeyinde kırım taraları haricinde hangi halklar |
| 0052 | H-0070 | EKO-DUNYA | girit seferi için ek okuma yapalım giritin alınamsı nedne bu |
| 0052 | H-0078 | EKO-DUNYA | 13 temmuz 1656 da çanakkale bozgunu deniz yenilgisi ile alak |
| 0052 | H-0079 | EKO-DUNYA | osmanlıda denizcilik ile ilgili osmanlı donanması ile ilgili |
| 0052 | H-0088 | EKO-DUNYA | osmanlının savaş stili ile avrupalı devletlerin savaş stiler |
| 0052 | H-0023 | EKO-VEZIR | evliya çelebi ile ilgili kişi kartı oluşturup ek okuma kartı |
| 0052 | H-0026 | EKO-VEZIR | evliya çelebi ile ilgili tartışma eleştiri ek okuması yapıp |
| 0052 | H-0030 | EKO-VEZIR | osmanlıda idam edilen devlet adamları sadrazamalr vezirler p |
| 0052 | H-0060 | EKO-VEZIR | gedik ahmet paşa hakkında devlete faydaları kişiliği ve idam |
| 0052 | H-0061 | EKO-VEZIR | sokullu mehmet paşa ek okuma yapalım devlete faydaları icraa |
| 0052 | H-0062 | EKO-VEZIR | pargalı ibrahim paşa hakkında idamı ve devlete faydaları kon |
| 0052 | H-0063 | EKO-VEZIR | rüstem paşa ve koca ragıp paşa hakkında devlete faydaları id |
| 0052 | H-0064 | EKO-VEZIR | çandarlı mehmet paşanın idamı sebeb sonuç ek okuması atrtışm |
| 0052 | H-0065 | EKO-VEZIR | nevşehirli damat ibrahim paşa hakkında faydaları icraatleri |
| 0052 | H-0066 | EKO-VEZIR | kuyucu murat paşa hakkında ek okumalar icraatleri yaşamı kon |
| 0052 | H-0067 | EKO-VEZIR | köprülüler |
| 0052 | H-0068 | EKO-VEZIR | mithatpaşa ali paşa msutafa reşit paşa hakkında ek okuma tar |
| 0052 | H-0073 | EKO-VEZIR | DEYYUSU EKBER İPŞİR MSUTAFA PAŞA İLE İLGİLİ EK OKUMA MAAGZİN |
| 0052 | H-0080 | EKO-VEZIR | osmanlının en başarılı 10 sadrazamı ek okuması yapalım. bu s |

## 3. En kalabalık 15 küme (`sirada`)

Küme anahtarı: akım etiketi › maddede yazan dosya › sınıf/bölge.

| # | küme | madde | sınıf | hedef dosya | rapor TAMAM |
|---|---|---:|---|---|---:|
| 1 | AKIM/EKO-RIVAYET | 33 | VERI-DUZELTME 31 · ARAYUZ 2 | `data/ekokuma_rivayet.js` · `data/olaylar_p0059.js` | 11 |
| 2 | AKIM/EKO-VEZIR | 32 | VERI-DUZELTME 32 | `data/ekokuma_vezir.js` | 15 |
| 3 | AKIM/EKO-DUNYA | 29 | VERI-DUZELTME 29 | `data/ekokuma_dunya.js` | 10 |
| 4 | AKIM/HARITA-VERI | 25 | BELIRSIZ 13 · KOSU-GEREKIR 10 · KAYNAK-ARASTIRMA 2 | ? | 2 |
| 5 | AKIM/EKO-PADISAH | 22 | VERI-DUZELTME 21 · BELIRSIZ 1 | `data/ekokuma_padisah.js` | 0 |
| 6 | KOSU-GEREKIR/bolgesiz | 19 | KOSU-GEREKIR 19 | ? | 0 |
| 7 | KOSU-GEREKIR/iran | 16 | KOSU-GEREKIR 16 | ? | 0 |
| 8 | KOSU-GEREKIR/rusya-lehistan | 14 | KOSU-GEREKIR 14 | ? | 0 |
| 9 | AKIM/EKO-KURUM | 13 | VERI-DUZELTME 13 | `data/ekokuma_kurum.js` | 0 |
| 10 | AKIM/EKO-TOPLUM | 13 | VERI-DUZELTME 13 | `data/ekokuma_toplum.js` | 8 |
| 11 | KOSU-GEREKIR/balkan-macar | 12 | KOSU-GEREKIR 12 | ? | 0 |
| 12 | AKIM/GEOMETRI | 12 | KOSU-GEREKIR 12 | ? | 0 |
| 13 | AKIM/UI-HARITA | 12 | ARAYUZ 12 | ? | 0 |
| 14 | AKIM/UI | 10 | ARAYUZ 10 | `css/style.css` · `index.html` | 8 |
| 15 | DOSYA/arac/uret_petek.py | 9 | KOSU-GEREKIR 8 · KAYNAK-ARASTIRMA 1 | `arac/uret_petek.py` | 0 |

Toplam 87 küme; tam liste JSON'da (`kume` alanı).

## 4. 🔴 14 `tekrar` maddesi — TAM LİSTE, ve anlamı DÜZELTİLMELİ

**Ölçüldü: `tekrar` hükmü "aynı şikâyet ikinci kez geldi = ilkinde çözülmemiş" DEMİYOR.** 14 notun hepsi başka bir kayda ya da aileye atıf yapıyor ("X ile AYNI kayıt / AYNI kök / AYNI sınıf"; 10'u H-numarasıyla, 4'ü `BULGU-BAYAT-TARAMA.md` ailesine) — yani **mükerrer işaret**: madde kendi başına iş değil, ikizinin kaderine bağlı. İlkinde çözülmemişliği ölçen şey İKİZİN hükmüdür:

| parti | madde | sınıf | ikiz(ler) → ikizin hükmü | başlık |
|---|---|---|---|---|
| 0003 | H-0008 | BELIRSIZ | 0002/H-0025 → **cozuldu** | timurun bağdadı ikinci kez ele geirişide haritada göste |
| 0003 | H-0022 | BELIRSIZ | 0003/H-0015 → **cozuldu** | kırımı şu saçma cetvelle bölünmüş yapısından kurtraraca |
| 0006 | H-0008 | KOSU-GEREKIR | 0006/H-0007 → **cozuldu** | bu enklav nedir kime aitti tarihi gerçekliği varmı hata |
| 0006 | H-0010 | KOSU-GEREKIR | 0006/H-0007 → **cozuldu** | şu macaristan ve habsburg görünen iki parça gerçekten b |
| 0019 | H-0047 | VERI-DUZELTME | 0019/H-0045 → **sirada** | trabkusşamın osmanlıya girmesi maddesinde hama ve humus |
| 0019 | H-0062 | ARAYUZ | 0019/H-0041 → **zaten-dogru** | VİYANA KUŞATMASINA YAPILAN SEFER İÇİN SİYAH KESİ KKESİK |
| 0035 | H-0001 | KOSU-GEREKIR | ikiz notta H-numarasıyla yok (BULGU dosyasına atıf) | bu yapının anlamı ne. boş bir alan yerleşim yeri yok ke |
| 0035 | H-0021 | KOSU-GEREKIR | 0021/H-0027 → **sirada** · 0035/H-0028 → **cozuldu** | bu nahcıvan alınmadan hemen önce aradaki topraklar alın |
| 0035 | H-0057 | KOSU-GEREKIR | ikiz notta H-numarasıyla yok (BULGU dosyasına atıf) | 1) kahirede abbasi halifeliğinin sona ermesi maddesi bu |
| 0035 | H-0064 | KOSU-GEREKIR | 0035/H-0001 → **tekrar** · 0035/H-0011 → **zaten-dogru** | burada kuzey afrikadaki gibi anlamsız bir boşluk boyanm |
| 0035 | H-0068 | KOSU-GEREKIR | ikiz notta H-numarasıyla yok (BULGU dosyasına atıf) | satu mare arada kalmış burası orta macar oalrak tökeli  |
| 0035 | H-0074 | KOSU-GEREKIR | ikiz notta H-numarasıyla yok (BULGU dosyasına atıf) | hemedan barışı sonrasında gene tıpkı ferhatpaşa anlaşma |
| 0035 | H-0084 | KOSU-GEREKIR | 0035/H-0038 → **zaten-dogru** | bu basra osmanlı tarafından geri alınmış ama basrayı al |
| 0037 | H-0010 | KOSU-GEREKIR | 0037/H-0008 → **cozuldu** | bu yeil yerler rusyaya dönmeden önce eğer rusya eflak v |

Okuma: ikizi `cozuldu`/`zaten-dogru` olan tekrar → hükmü ikizle eşitlenir (defter işi, iş değil). İkizi `sirada` olan → ikiziyle AYNI oturuma, tek iş olarak. İkizi bulunamayan 4'ü (0035/H-0001·H-0057·H-0068·H-0074) gerçekten açık aile kusurlarıdır (Sahra emilmesi · Osmanlı-Safevî cephesi · Satu Mare · Hemedan sonrası boşluk) — §10 gereği yeni maddelerden ÖNCE gelmesi gerekenler bunlardır.

## 5. DAĞITIM ÖNERİSİ — şıklarıyla (karar koordinatörün)

Ölçüt FAYDA ÷ EMEK. Sıra, darboğazı açana göre:

### Adım 0 — DEFTER MUTABAKATI (en yüksek oran: sıfır yeni iş, sayıyı küçültür)
Tek Sonnet oturumu, yalnız OKUR ve öneri yazar (hüküm yazmak koordinatörde): §2'deki 32 güçlü + 22 zayıf bayat aday + 15 kısmen-indi + 14 tekrar'ın ikiz eşitlemesi. Beklenen: `sirada` ~60-90 düşer, kalan liste GERÇEK iş olur. Ayrıca 9 cevapsız partinin (347 madde) hükümsüz olduğu raporlanır — onlar ayrı bir sevk işidir. **Bu adım olmadan dağıtılan her küme, yapılmış işi yeniden yaptırma riski taşır** (EKO-VEZIR'in 32 maddesinin 15'i raporda ✅).

### Adım 1 — koşudan bağımsız, paralel yürüyebilen üç hat

| hat | ne | madde | model | not |
|---|---|---:|---|---|
| A · EK-OKUMA | EKO-* akımlarının kalanı (`data/ekokuma_*.js`) | 196 (mutabakattan sonra azalır) | Sonnet ×1-2 | akım dosyası başına tek sahip; RIVAYET+PADISAH / VEZIR+DUNYA+KURUM+TOPLUM |
| B · ARAYUZ | `js/app.js` · `css` · `index.html` | 49 | Sonnet ×1 | app.js TEK sahipli ⇒ bölünmez; UI 10'un 8'i raporda ✅ (önce doğrula) |
| C · KAYNAK | TDV/akademik okuma, hüküm + yama önerisi | 24 | Opus ×1 | çıktısı KOSU hattına yama JSON'u olarak düşer |

### Adım 2 — KOSU-GEREKIR (158 sirada + 24 olculecek + 15 kosu-bekliyor)
Koşu sürerken `data/` donuk ⇒ bu hat şimdi YAMA HAZIRLAR, uygulamaz; yamalar bir sonraki veri koşusunda tek seferde iner. İki alt hat, çareleri farklı:

- **2a · MOTOR/GEOMETRİ** (28: GEOMETRI · MOTOR · `uret_petek.py` kümesi) — §9.1: motor yamaları `denetim/*.diff` olarak bekletilir, TAM İNŞA koşusunda birlikte girer. Veri koşusuna karıştırılmaz.
- **2b · VERİ-KOŞU** (130) — yerleşim/dönem/nokta yamaları. Bölgeye göre: bolgesiz 29 · iran 22 · rusya-lehistan 22 · balkan-macar 17 · kuzey-afrika-misir 11 · korfez-arabistan 11 · kirim-kafkas 10 · akdeniz-adalar 6 · irak-suriye 2. Mevcut sıcak bölge oturumları varsa (§7.3 ölç) bölgesi ONA; yoksa 2 Opus (Doğu: iran+körfez+kırım-kafkas+irak · Batı: balkan+rusya+kuzey afrika).

### Adım 3 — BELIRSIZ
49 madde: 7'si Emre'nin TK Kırım oturumunda (dokunulmaz); HARITA-VERI RENK maddeleri `renkler.py` işidir (motor tuzu — §9.1, tam inşa koşusuna); kalanı için koordinatör ya da C hattı tek tek sınıf koyar.

### Şıklar

| şık | kurgu | oturum | artı | eksi |
|---|---|---:|---|---|
| **Ş1 (önerim)** | Adım 0 → sonra A·B·C paralel + 2b yama hazırlığı | 1 → 4-5 | yapılmış işi yeniden yaptırmaz; liste gerçek olur | ilk 1-2 saat yalnız mutabakat |
| Ş2 | Adım 0 ile A·B·C'yi AYNI ANDA başlat, mutabakat onlara süzgeç yollar | 4-5 | hızlı | A ve B ilk saatte bayat maddeye dokunabilir |
| Ş3 | Yalnız darboğaz: Adım 0 + 2b yama hazırlığı (koşu 18 bitince indirilecek paket) | 2 | RAM kısıtında en hafif (boş 1,32 GB) | ek okuma ve arayüz birikmeye devam eder |

Kaynak kısıtı: boş RAM 1,32 GB, koşu sürüyor ⇒ paralel oturum sayısı bu envanterden değil RAM'den sınırlanır; Ş3 o yüzden var.

## 6. Ölçülemeyenler

- 9 cevapsız parti (347 madde) — sınıflanamadı.
- `hedef_dosya` çoğu maddede `?`: madde dosya adı yazmıyor; akım şartnamesinin dosyası yazıldıysa `hedef_kaynagi: akim-sartnamesi`.
- Rapor-tablo eşleşmesi parti ayırt etmez; kimlik-veride sınavı yalnız ek okuma/olay/kişi/savaş/sefer/kronoloji dosyalarında yapıldı.
- Arayüz maddelerinin kodda yapılıp yapılmadığı ÖLÇÜLMEDİ (tarayıcı açılmadı).
