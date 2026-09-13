# PAKET SINIFLAMASI 2 — açık kutu maddeleri, paralel iş planı

> PAKET-SINIF2 · 14 Eylül 2026 · 1.MURAT sevki · salt okuma. Yazılan dosyalar yalnız bu dosya ile `PAKET-SINIF2-0914.json`. Commit yok.
> Kaynaklar: `ClaudEmre/kutu/giden/parti-emrelic-*/CEVAP.json` + `PARTI.json` (00:40'taki hâl) · `KUTU.md` §AÇIK MADDELER · `oturumlar/KOSU10-SONRASI.md` · tahta M-3855…M-3904 · `git log` (13 Eylül 00:00'dan beri) · bugünkü veri ölçümleri (aşağıda).
> Emsal: `OLCUM-PAKET-SINIF-0913.md`. Sınıf harfleri bu sevkin tanımıdır, 13 Eylül'ün A–F harfleriyle **aynı anlamda değildir**.

## Emre'nin sorusunun cevabı

**"14 koldan çalışılıyor mu?" Bugün 7 kol çalışıyor:** VERI-KIRIM · PAKET-UI3 · PAKET-KRON4 · ARAS-BAGDAT · PAKET-EK-A · PAKET-EK-B · PAKET-TEMIZ. Bunlar 14 açık maddeyi taşıyor.
Kalan 182 madde için **16 iş paketi** önerildi:
- **12'si hemen başlayabilir.** Hiçbirinin dosyası kilitli değil ve iki paket aynı dosyaya yazmıyor.
- **4'ü kilit bekliyor:** P01 · P02 · P03 · P14.
- **Tek darboğaz `data/yerlesimler.js`.** Kaynağı bitmiş 53 maddenin (A) 50'si bu dosyaya ya da `arac/renkler.py`'ye iniyor. İkisi de şu an VERI-KIRIM'de. Bu yüzden A'nın 50'si paralel yürüyemez: VERI-KIRIM teslim edince önce P03 (künye/renk), sonra P01, sonra P02 **sırayla** iner.

## Sayılar

| sınıf | anlamı | madde |
|---|---|---:|
| **A** | hemen uygulanabilir, kaynak bitmiş | **53** (50'si kilit bekliyor, 3'ü hemen) |
| **B** | araştırma gerekiyor | **64** |
| **C** | motor / koşu 11 | **45** (16'sı yalnız ölçüm, 29'u motor kodu) |
| **D** | arayüz (`js/app.js`) | **1** (+ P11 ittifak çizimi · P10 boy adları · P13A çizim kusuru çıkarsa — arayüz kuyrukları) |
| **E** | zaten çözülmüş, CEVAP güncellenmemiş | **18** |
| **F** | Emre'nin kararı | **1** |
| **S** | işçide sürüyor, plana konmadı | **14** |
| | **toplam** | **196** |

**Neden 196, KUTU neden 173 diyor?** KUTU.md 🔁 TEKRAR (15) ve ⏱ BAYAT (7) hükümlerini kapanmış sayıp listeye koymuyor. Bu sevk ise ikisini de açık saydı. KUTU ayrıca eski `parti-0002/0004/0006` paketlerinden 5 madde listeliyor. Hesap: emrelic 191 (sirada 137 · olculecek 27 · tekrar 15 · bayat 7 · kosu-bekliyor 5) + eski 5 = 196. 196 − 22 = 174. KUTU'nun 173'üyle arasındaki **1 maddelik fark ölçülemedi**: KUTU.md'nin üretim anıyla CEVAP.json'ların bugünkü hâli farklı olabilir.

## Sürüyor — plana konmadı (14)

| madde | işçi | kanıt |
|---|---|---|
| `0043/H-0003` Kırım bozkırı | VERI-KIRIM (+ MOTOR-HIMAYE bitti 8ba093e) | M-3886, M-3902 |
| `0043/H-0009` Kırım katılım haritası | VERI-KIRIM | M-3886 |
| `0043/H-0019` aynı gün üç olay (B seçeneği) | PAKET-UI3 | M-3888 |
| `0035/H-0062` dış olay seçeneği arayüzü | PAKET-UI3 (veri 926d349 indi) | M-3896 |
| `0035/H-0013` Taganrog 1711-1739 🆕 | VERI-KIRIM (M-3903, hüküm b) | nokta VAR `yerlesimler_h2_rusya.js:440`; CEVAP notu "yerleşim kaydı yok" diyordu, bayat |
| `0049/H-0001` Çaldıran · Başkale | kapandı, üretim bekliyor (eb2e435) | — |
| `0050/H-0001…H-0008` (8) | ARAS-BAGDAT · PAKET-EK-A · PAKET-EK-B · PAKET-TEMIZ | M-3891…M-3895 |

`0048/H-0002` (Eflak) açık listede yok; hükmü kapalı.

## Bugün ölçülen ve CEVAP notlarını çürüten 7 bulgu

1. **`0019/H-0045` "çözüldü" kanıtı tutmuyor.** Bu yüzden tekrarı `0019/H-0047` E'ye alınmadı. `olaylar_ek5.js` Halep maddesinde hâlâ `yer:"Halep"` yazıyor; tarif edilen yama `data/olay_yama_ok104.js` diskte var ama `index.html`'de 0 kez geçiyor. Yani ne veriye indi ne yükleniyor. Tekrar maddesi A (P02).
2. **`0042/H-0034` ve `H-0042` (Şehirköy/Pirot) "koşu bekliyor" hükmü yanlış.** `yerlesimler_serhat.js:140`'ta `d:1386-01-01→1413-07-05` kesintisiz duruyor; Süleyman/Musa Çelebi dönemi yok. Koşunun çözeceği bir veri değişikliği yok, iş bir araştırma (B, P04).
3. **`0039/H-0005` Yunan işgali hâlâ yok.** Veride 27 `yunanistan` ve 13 `italya` `isg:` kaydı var, ama **hepsi 1912-1913 Balkan Savaşı ile Oniki Ada.** 1919-1922 Anadolu işgali: 0.
4. **`0035/H-0079` Dir'iye noktası VAR** (`yerlesimler.js:728`). Notun "bulunamadı" kısmı bayat. Açık kalan yalnız Hâil ve Nefud.
5. **`0017/H-0001` · `0030/H-0004` · `0030/H-0018` noktaları hâlâ yok.** Pınarbaşı · Sarız · Gürün · Mesudiye · Reşadiye · Koyulhisar · Andırın · Kadirli için 0 eşleşme (normalleştiricili arama, 183 dosya). Besni ve Darende var.
6. **Kaynağı biten yamaların hiçbiri koşu 10 yayınından sonra inmedi.** Kemah (akkoyunlu 1340) · Manisa · Yergöğü · Ahıska (1578-08-01) · Çehrin (1678-07-19) · Hotin (s:rusya 1769) · Tiflis (gurcistan) bugün de eski hâlinde. Nedeni kilit: bu kayıtların hepsi `data/yerlesimler.js`'te.
7. **Renk ve künye eksikleri ölçüldü.** `renkler.py`'de `polonya-erken` · `kazak-hetmanligi` · `avusturya-cumhuriyet` anahtarı yok. `devletler.js`'te `kartli` · `kaheti` · `cizre` · `bohtan` · `kurlandiya` · `kutsal-roma` · `kazak-hetmanligi` id'si 0.

## F — Emre'ye tek soru

**`0011/H-0001` Kutsal Roma mozaiği:** 1281-1806 arası Kutsal Roma tek blok mu kalsın, yoksa büyük seçici prenslikler (Bavyera · Saksonya · Brandenburg · Palatina · Hannover) ayrı mı gösterilsin?
- (a) Tek blok kalır. Mevcut OTURUM-3 kuralı "300 devletçik yazılmaz" budur. Yalnız zaman bölmesi yapılır: `kutsal-roma` 962-1806 → konfederasyon → imparatorluk → cumhuriyet (`0039/H-0007`).
- (b) Beş seçici prenslik ayrı künye ve renk alır.
- **Öneri (a).** Gerekçe: ONCELIK çöl seyyahı ilkesi, ayrıca (b) ~5 künye, ~5 renk ve Almanya'da nokta yoğunluğu ister. BAYAT damgası bu soruyu bir proje kuralıyla kapatmıştı; Emre'ye hiç sorulmadı.

## E — yeniden damgalanacak 18 madde (P15)

`0019/H-0034` · `0019/H-0062` · `0019/H-0067` · `0019/H-0078` · `0030/H-0008` · `0031/H-0008` · `0031/H-0020` · `0034/H-0001` · `0034/H-0017` · `0035/H-0034` · `0035/H-0066` · `0035/H-0078` · `0035/H-0083` · `0035/H-0084` · `0037/H-0009` · `0042/H-0001` · `0042/H-0033` · `0044/H-0012` — her birinin kanıtı aşağıdaki tabloda.
Ayrıca `0042/H-0014`'ün Mersin yarısı E (`yerlesimler_ek27.js:51`); renk rezervi yarısı açık kaldığı için madde A/P03'te.

## KOSU10-SONRASI kalemleri → kapattığı kutu maddeleri

| KOSU10-SONRASI kalemi | yama | kapattığı açık kutu maddesi | paket |
|---|---|---|---|
| §1.1 Van A/B | `YAMA-KITA13-VAN` | `0044/H-0012` (Çaldıran/Başkale kısmı eb2e435 ile İNDİ → E) · Şeyhrumi kısmı PAKET-KRON4'te | — |
| §1.2 Bitlis | `YAMA-KITA13-BITLIS` | açık kutu maddesi yok (0044 içinde kapanmış) | P01 (sıra şartı) |
| §1.3 + §3b + §5-2 Ferhat Paşa cephesi | `YAMA-KITA29-FERHATPASA` · `-BIRLESIK` · `-SEHIR-MATRISI` · `-GUNEY` · `-0047-BATI` · `-AHAR-SARAB-MIYANE` · `-NIHAVEND` · `-KIRMANSAH` · `-KOSE` | `0020/H-0012` · `0020/H-0014` · `0021/H-0027` · `0021/H-0028` · `0035/H-0021` · `0035/H-0057` · `0035/H-0088` · `0038/H-0005` · `0038/H-0006` · `0038/H-0007` · `0046/H-0007` · `0046/H-0010b` · `0046/H-0012` · `0047/H-0001` (14) | P01 |
| §1.4 Cizre/Bohtan | `YAMA-CIZRE-BOHTAN` | `0043/H-0015` | P03 |
| §1.5 Kartli/Kaheti | `YAMA-KARTLI-KAHETI` | `0043/H-0010` · `0025/H-0001` · `0034/H-0023` · `0033/H-0017` (künye kısmı) | P03 → P01 |
| §2.6 Budin 1529 | `YAMA-KITA19-BUDIN-1529-HIMAYE` | `0044/H-0004` · `0019/H-0061` | P02 |
| §2.7 Debrecen | `YAMA-KITA19-DEBRECEN-K-ETIKET` | `0044/H-0002` (önce TDV 1526-29 sorgusu, B) | P07 → P02 |
| §3.8 Sirenayka | `YAMA-SIRENAYKA-0912` | açık kutu maddesi yok; Derne zinciri ve Bingazi 1551/1578 kararları Emre'de | — |
| §3.9 Anapa | `YAMA-ANAPA` | `0043/H-0009` (VERI-KIRIM, sürüyor) | S |
| §3.10 KITA 14 · §3.10b 2S-RUSYA · KÜNYE-ALANI | — | açık kutu maddesi yok | — |
| §3.11 Fizan dolgu | `OLCUM-KITA16-FIZANBOSLUK` | `0045/H-0012` | P06 |
| §4.12 `kavalali` rengi | renkler.py | açık kutu maddesi yok (C katmanı) | P03 |
| §5-3 A6A | `YAMA-A6A` | `0019/H-0050` · `0035/H-0052` · `0042/H-0011` · `H-0025` · `H-0027` · `H-0028` · `H-0029` · `H-0043` · (`0021/H-0005` Y14 → P13B) | P02 |
| §5-3 A6B | `YAMA-A6B` | `0035/H-0035` · `0035/H-0077` · `0040/H-0009` · `0042/H-0006` · `0042/H-0007` | P02 (+P03 renk/künye) |
| §5-3 A6C | `YAMA-A6C` | `0035/H-0020` · `0035/H-0076` · `0035/H-0088` (birleşik) · `0035/H-0063` (P04, dosyası kilitsiz) | P01 |
| §5-3 A4 B kalemleri | `PAKET-A4-SEFER` | `0033/H-0018` (P05) · `0021/H-0030` (P11) | P05 · P11 |
| §5-3 RUS | `YAMA-RUS` | `0035/H-0035` · `0037/H-0010` · `0040/H-0009` (hetmanlık) · `0035/H-0097`/`H-0100` (kısmen) | P02 (+P03) |
| §5-3 A3 | `YAMA-A3` | `0032/H-0003` (kalem 1) · `0020/H-0013` (kalem 2) · `0035/H-0059` (kalem 3, ölçülemedi → B) · `0035/H-0065` (kalem 4 → B) · `0039/H-0004` (kalem 5) · `0042/H-0004` (app.js → P14) | P01 |
| §5-3 ARAS0048 | `YAMA-0048` | `0048/H-0011` (Y4, P06 kilitsiz) · `0048/H-0001` (Y2 · Y1 · Harizm) · `0048/H-0009` · `H-0010` (Y5-Y7 motor) | P06 · P10 · P13B |
| §5-3 KRON2 · KRON3 · İÇ NOT · YER-ID · §5-1 HALKA-ADAY · §5a Malaka · §5-0 Kilitbahir/Niğbolu | çeşitli | **açık kutu maddesi yok** — bunlar koordinatörün kendi borçları; kutuyu kapatmaz | P01/P02 sırasına eklenebilir |
| §6 koşu 11 motor gündemi | Ⓐ maliyet · Ⓑ enklav/koridor | C sınıfının 29'u | P13B |

## İş paketleri (16)

Aynı dosyaya iki paket yazmıyor. İstisna `data/yerlesimler.js`: P01 ile P02 bu dosyaya **sırayla** yazar. Yeni kronoloji dosyaları için ad alanı `§7` gereği `window.OLAYLAR_P00NN` biçimindedir; `index.html` satırları PAKET-UI3 teslim edince eklenir. Yeni yerleşim dosyaları `arac/girdi.py`'ye Oturum 0 tarafından bağlanır.

| paket | durum | madde | boyut | yazacağı dosyalar | kilit / bağımlılık |
|---|---|---:|:--:|---|---|
| **P01** INIS-DOGU — Ferhat Pasa ailesi · A6C · A3 kalem 1-2-5 yerlesim inisi | KILIT BEKLIYOR | 18 | L | data/yerlesimler.js<br>data/yerlesimler_kalite4.js<br>data/yerlesimler_ek26.js<br>data/olaylar_ek7.js<br>YENI data/olaylar_p0053.js (window.OLAYLAR_P0053) | kilit: data/yerlesimler.js (VERI-KIRIM) · A3 Sero/Seyh Salu kalemi yerlesimler_sinir_dogu.js (PAKET-KRON4)<br>bağımlılık: P03 kartli/kaheti kunye+renk ONCE (Tiflis/Zagem) · §5-0: komsudan devralinan gunler uygulanmadan once tek tek sinanir · KOSU10-SONRASI §1.3 69f110c surumu (C1 Revan ile B1 Ecmiyadzin ayrilmaz) |
| **P02** INIS-BATI/KUZEY — A6A · A6B · RUS isg · KITA19 Budin 1529 · Ozi · Hama/Humus yer alani | KILIT BEKLIYOR | 17 | L | data/yerlesimler.js<br>data/yerlesimler_ok107.js<br>data/yer_yama_vassal_kid_0906.js<br>data/yerlesimler_ok106.js<br>data/yerlesimler_h2_rusya.js<br>data/yerlesimler_ek17.js<br>data/olaylar_ek.js<br>data/olaylar_ek5.js<br>YENI data/olaylar_p0054.js (window.OLAYLAR_P0054) | kilit: yerlesimler.js · ok106 · h2_rusya · ek17 (VERI-KIRIM) · olaylar_* metin (PAKET-TEMIZ)<br>bağımlılık: P01 bittikten SONRA (data/yerlesimler.js tek yazar) · P03 kazak-hetmanligi kunyesi + polonya-erken rengi ONCE · Vodina maddesi ile yerlesim BIRLIKTE |
| **P03** KUNYE + RENK — kartli/kaheti · cizre-bohtan · kazak-hetmanligi · polonya-erken · avusturya-cumhuriyet · renk ayrismalari | KILIT BEKLIYOR | 15 | M | data/devletler.js<br>arac/renkler.py<br>(renk_olc.py kosusu) | kilit: arac/renkler.py (VERI-KIRIM)<br>bağımlılık: P01/P02 veri inisinden ONCE (renk -> kunye -> veri, §8) · her renk degisiminden sonra renk_olc.py (§9) |
| **P14** ARAYUZ SIRASI — Katalan sefer kirpma capasi (+ ittifak rozet/ip, boy adlari, magazin akordeonu, ayni gun B secenegi kuyrugu) | KILIT BEKLIYOR | 1 | M | js/app.js<br>css/style.css<br>index.html | kilit: js/ css index.html (PAKET-UI3)<br>bağımlılık: PAKET-UI3 teslimi · ittifak kismi P11 verisinden sonra |
| **P04** BALKAN — Trakya fetih sirasi · Fetret Sehirkoy · Herseknovi isgal bitisi | HEMEN | 8 | L | denetim/YAMA-TRAKYA-0914.json<br>data/yerlesimler_serhat.js (yalniz Sehirkoy)<br>data/yerlesimler_ek.js (yalniz Herseknovi)<br>YENI data/olaylar_p0055.js (window.OLAYLAR_P0055) | kilit: yok (Trakya yerlesimleri yerlesimler.js'te ise yalniz yama JSON; inis P02 sirasinda)<br>bağımlılık: index.html script satiri PAKET-UI3 sonrasi · madde ile yerlesim ayni turda (Degismez 2) |
| **P05** ANADOLU — beylik sinirlari ve noktasiz ucgenler (Germiyan · Dulkadir · Ordu · Ankara 1404 · Denizli 1425 · Bizans haraçguzar) | HEMEN | 10 | L | denetim/YAMA-ANADOLU-0914.json<br>YENI data/yerlesimler_anadolu_0914.js (girdi.py satiri Oturum 0)<br>YENI data/olaylar_p0058.js (window.OLAYLAR_P0058)<br>data/yer_yama_zaza.js (yalniz Kigi) | kilit: yok<br>bağımlılık: yeni nokta dosyasi girdi.py'ye Oturum 0 baglar · Bayburt noktasi da bu dosyaya (0033/H-0018) |
| **P06** IRAK · ARABISTAN · MISIR — Bagdat kuzeyi · Timurlu Bagdat · Basra dolgu · Suveys/Kusayr · Ibrim · Hail · Napolyon isgali · Hicaz yolu · Fizan · Katar | HEMEN | 14 | L | denetim/YAMA-ARAP-0914.json<br>data/yerlesimler_ek_korfez.js (yalniz Katar dolgusu, YAMA-0048 Y4) | kilit: yok<br>bağımlılık: 0021/H-0010 ve Bagdat kaydi ARAS-BAGDAT (0050/H-0002) ile ayni kayit: ARAS-BAGDAT teslim edince baslar ya da ona ek kapsam olarak verilir |
| **P07** KUZEY + ORTA AVRUPA — Ingriya · Prusya Dukaligi · Polesya · Kutsal Roma kunye bolme taslagi · Macaristan 1526-41 · Satu Mare | HEMEN | 7 | M | denetim/YAMA-KUZEY-0914.json<br>denetim/TASLAK-KUNYE-0914.json | kilit: yok<br>bağımlılık: kunye taslaklari P03'e, yerlesim yamalari P02 sonrasina devredilir |
| **P08** KARADENIZ · TUNA — Yedisan · Azak kaleleri · 1806-12 Tuna isgalleri · savas baslangiclari · bozkir kronolojisi · akademik Bulgar/Eflak siniri | HEMEN | 6 | L | denetim/YAMA-KARADENIZ-0914.json<br>YENI data/olaylar_p0056.js (window.OLAYLAR_P0056) | kilit: yok<br>bağımlılık: Kirim bozkiri kuzeyi VERI-KIRIM'de — cakismamasi icin VERI-KIRIM teslim raporu okunur |
| **P09** 1918-1923 — Yunan/Italyan isgali · Sakarya-Buyuk Taarruz gun be gun · dogu/guney cephesi · guney sinir noktalari | HEMEN | 4 | L | denetim/YAMA-ISGAL1919-0914.json<br>YENI data/olaylar_p0057.js (window.OLAYLAR_P0057)<br>data/yerlesimler_sinir_guney.js (girdi, bugun 0 nokta) | kilit: yok (isg yamasi yerlesimler.js'e P02 sonrasi iner)<br>bağımlılık: sefer oklari P11'e (savaslar.js) devredilir |
| **P10** UZAK NOKTA — Cagatay · Kazak · Sibir · Nogay-Buhara · Kandehar · Songhay · Kanem-Bornu · Ustyurt | HEMEN (oncelik dusuk — ONCELIK.md halkalari) | 8 | L | denetim/YAMA-UZAK-0914.json<br>YENI data/yerlesimler_uzak_0914.js (girdi.py satiri Oturum 0) | kilit: yok<br>bağımlılık: ONCELIK.md col seyyahi: 1. derece isler once; koordinator itiraz edebilir |
| **P11** SEFER + ITTIFAK VERISI — Kutsal Ittifak verisi · Eflak 1595 Kalugeran · 1737 Ozi oku (0035/H-0077 devir kalemi) | HEMEN | 3 | M | data/savaslar.js<br>YENI data/ittifaklar.js (window.ITTIFAKLAR) | kilit: yok<br>bağımlılık: ittifak cizimi P14 (js/app.js) bu veriden SONRA |
| **P12** EK OKUMA + GORSEL DALGALARI — savas · antlasma · mimari · merak · Sultani gorseli · magazin kalani | HEMEN (magazin kalemi KILIT BEKLIYOR: ekokuma_magazin EK-B) | 7 | L | YENI data/ekokuma_savas3.js<br>YENI data/ekokuma_antlasma3.js<br>YENI data/ekokuma_mimari2.js<br>data/gorsel_madde.js | kilit: ekokuma_magazin (PAKET-EK-B) yalniz 0045/H-0010 icin<br>bağımlılık: index.html/yukleyici satiri PAKET-UI3 sonrasi · telif + lisans + bag sinavlari (A2 araclari) |
| **P13A** MOTOR OLCUM — bosluk/binme/deniz asiri/Aral/Ege/is_valid (salt okuma, kosu gerektirmeyenler) | HEMEN | 16 | M | denetim/OLCUM-MOTOR-0914.md (+ ARAC-MTR-*-0914) | kilit: yok<br>bağımlılık: P13B'nin receteleri bu olcumden cikar |
| **P13B** MOTOR KOD — kosu 11 gundemi (bogaz kesigi · secici ince gol/kiyi · enklav doldurma · Gat kavisi + kopru rengi · Y14 · 0048 Y5/Y6/Y7 · sürtunme · T-kavsak · col boyama · B gorunumu tasarimi) | HEMEN (tasarim + kucuk kesit sinavi; kosu 11 Oturum 0) | 29 | L | arac/uret_petek.py | kilit: yok (MOTOR-HIMAYE teslim etti 8ba093e)<br>bağımlılık: P13A olcumleri · KOSU10-SONRASI §6 (Ⓐ maliyet · Ⓑ enklav/koridor) · kosu sirasinda data/ + arac/ DONUK |
| **P15** DAMGA — kaniti olan cozulmus maddelerin CEVAP.json yeniden damgasi | HEMEN | 18 | S | ClaudEmre/kutu/giden/parti-emrelic-*/CEVAP.json | kilit: yok<br>bağımlılık: yok |

**Hemen başlatılabilir (12):** P04 · P05 · P06 · P07 · P08 · P09 · P10 · P11 · P12 · P13A · P13B · P15. **Kilit bekliyor (4):** P01 · P02 · P03 · P14.

**Önerilen başlatma sırası:** P15 (S, hemen kapatır 18) → P13A (P13B'nin reçetesini üretir) → P04 · P05 · P06 · P08 · P09 (1. derece Osmanlı çevresi) → P07 · P11 · P12 → P10 (ONCELIK halkası dışı; koordinatör erteleyebilir). VERI-KIRIM teslim edince P03 → P01 → P02; PAKET-UI3 teslim edince P14.

⚠️ Ölçmediklerim: yamaların komşudan devralınmış günlerinin §5-0 şartlarını tek tek sağlayıp sağlamadığı (P01 ön sınavı) · A6A/A6B/A6C/A3 yamalarının bugünkü veriye karşı eski-dizgi eşleşmesi (yama yazıldıktan sonra VERI-KIRIM ve ARAS-CALDIRAN yerleşim dosyalarını değiştirdi — P01/P02 önce kuru koşu yapmalı) · tekrar maddelerinin ustaları için yalnız hüküm okundu; `0019/H-0045` dışındaki ustaların kanıtı veride tek tek sınanmadı · `0035/H-0066` konu etiketlerinin isabeti · görseller açılmadı (metin yetti).

## Madde madde döküm (paket sırasıyla)

### P01 · INIS-DOGU — Ferhat Pasa ailesi · A6C · A3 kalem 1-2-5 yerlesim inisi — 18 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0020/H-0012` | sirada | A | Ferhat Pasa sinirlarini dogrula ve duzelt | YAMA-FERHATPASA-BIRLESIK-0913 + GUNEY + SEHIR-MATRISI + 0047-BATI hazir; §5-0 yeniden kaynaklama sarti |
| `0020/H-0013` | sirada | A | Vadisseyl maddesindeki Ahiska degisimi kendi maddesiyle gelsin | madde indi 632a042; yerlesimler.js:925 Ahiska d:1578-08-01 hala (YAMA-A3 kalem 2 inmedi) |
| `0020/H-0014` | sirada | A | Dogu seferi ilerlemesi ve Ferhat Pasa kazanimlari dogru boyansin | ayni birlesik yama ailesi |
| `0021/H-0027` | sirada | A | Tebriz alinmisken Van dogusu neden alinmamis | Hoy/Merend/Culfa/Serur birlesik yamada |
| `0021/H-0028` | sirada | A | Ferhat Pasa ile verilen 21 sehir dogrulansin | birlesik yama ailesi; Yuksekova/Ozalp iran kimligi ayri olculecek |
| `0032/H-0003` | sirada | A | Uzun Hasan maddesinde harita olay yerine gitsin | YAMA-A3 kalem 1 (madde 1468-07-01 + 30 yerlesim ucu) inmedi |
| `0035/H-0020` | sirada | A | Istanbul Mukasemenamesi paylasimi ve Sirvan enklavi | YAMA-A6C C-0020 Samahi d->v 1722-11-01 + madde; yerlesimler.js:624 degismedi |
| `0035/H-0021` | tekrar | A | Nahcivan oncesi Maku, Serur, Hoy, Culfa ne oldu | tekrar: birlesik Ferhat Pasa yamasi (G-MAKU · G-SERUR) |
| `0035/H-0057` | tekrar | A | Abbasi hilafetinin sonundan Ferhat Pasa'ya dogu cephesi 30 soru | tekrar: cogu birlesik yamada; 30 alt sorunun tek tek eslesmesi yapilmadi (Dogubayazit 1514-1923 kalicilik supheli) |
| `0035/H-0076` | sirada | A | Ahmed Pasa antlasmasi tarali alan tutarsizligi | tarama kismi cozuldu (e53c86a, b6428e7); YAMA-A6C P-0076-a Nahcivan 1724-35 + Tebriz gunleri inmedi |
| `0035/H-0088` | sirada | A | Osmanli icinde Safevi yazan kamalar | Kasr-i Sirin/Gumru/Ecmiyadzin birlesik yamada; 1724-35 penceresi ayri olculmedi |
| `0038/H-0005` | sirada | A | Ecmiyadzin ve Gumru Safevi enklavi kalmasin | G-ECMIYADZIN · G-GUMRU ortulu Osmanli 1583-09-13 -> 1604-06-08 yamada |
| `0038/H-0006` | sirada | A | Aradaki koridor ve enklavlar Osmanli mi, son durum | birlesik yama; yer_yama_ferhatpasa.js hala inmemis |
| `0038/H-0007` | sirada | A | Kasr-i Sirin Osmanli'ya gecmis olmali | G-KASRISIRIN (TDV bagdat sancagi) yamada |
| `0046/H-0007` | sirada | A | Revan alinirken Gumru ve Ecmiyadzin | G-REVAN · G-ECMIYADZIN · G-GUMRU yamada |
| `0046/H-0010b` | sirada | A | Nahcivan/Ordubad ile Serur, Maku, Caldiran, Baskale | Caldiran/Baskale eb2e435 ile indi; Serur/Maku yamada; Nahcivan 1586 BEKLET |
| `0046/H-0012` | sirada | A | Ferhat Pasa ile sekiz yer kimde kaldi | 13 Eylul kararlari birlesik yamada; Caldiran/Baskale kismi indi |
| `0047/H-0001` | sirada | A | Ferhat Pasa sonrasi Kasr-i Sirin ... Mahabad kimde | dort karar turu bitti; YAMA-0047-BATI + BIRLESIK + KIRMANSAH |

### P02 · INIS-BATI/KUZEY — A6A · A6B · RUS isg · KITA19 Budin 1529 · Ozi · Hama/Humus yer alani — 17 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0019/H-0047` | tekrar | A | Trablussam maddesinde Hama ve Humus da anilsin | ustasi 0019/H-0045 'cozuldu' ama olaylar_ek5 yer:"Halep" DEGISMEMIS ve olay_yama_ok104.js index.html'de 0 kez (bugun olculdu) — kanit tutmadi |
| `0019/H-0050` | sirada | A | Canbirdi Gazali oncesi aradaki sehirlerin Osmanli gunu duzelsin | YAMA-A6A Y8 hazir (Nablus/Sayda/Yafa/Akka 1516-09-27 · Kudus 1516-10-01) |
| `0019/H-0061` | sirada | A | Mohac sonrasi Macaristan himaye ile gosterilsin | serit kodu 8e14a50 + motor d.h 8ba093e indi; YAMA-KITA19-BUDIN-1529 (yerlesimler.js:456 Budin · :1269 Peste) inmedi |
| `0035/H-0035` | sirada | A | Hotin 1769 Rus enklavi dogru mu | YAMA-A6B P-HOT/P-BOG + YAMA-RUS hazir; yerlesimler.js Hotin s:rusya 1769-09-19 hala |
| `0035/H-0052` | sirada | A | II. Kosova'da giren cikan bos toprak | YAMA-A6A Y7 Yergogu 1450-01-01 + iki madde; yerlesimler.js:2269 degismedi |
| `0035/H-0077` | sirada | A | Ruslar Ozi'ye nereden geldi | 1788 oku 42c6b6d indi; Ozi 1737 gunu TDV 11 Temmuz yamasi inmedi; 1737 oku taslak (P11) |
| `0037/H-0010` | tekrar | A | Rusya'nin Eflak-Bogdan isgalleri haritada gosterilsin | tekrar: ustasi 0037/H-0008 cozuldu ama istek YAMA-RUS 25 isg grubunda, inmedi |
| `0040/H-0009` | sirada | A | Cehrin bu tarihte Lehistan'a mi ait | P-CEH-2/3 1678-08-21 yamasi; yerlesimler.js:1325 hala 1678-07-19; kazak-hetmanligi kunyesi P03 once |
| `0042/H-0006` | sirada | A | Cehrin 1308'de Litvanya'ya mi ait | P-CEH-1 sartli yama (Kiev 1362 kaynagi) |
| `0042/H-0007` | sirada | A | Lehistan ve Litvanya iki ayri devlet mi | P-LEH-1..3 + K-LEH-1; polonya-erken rengi renkler.py'de YOK (olculdu) |
| `0042/H-0011` | sirada | A | Kemah Akkoyunlu'ya gecmis mi | YAMA-A6A Y1/Y1b; yerlesimler.js:1421 Kemah akkoyunlu 1340 hala |
| `0042/H-0025` | sirada | A | Selanik teslimi / Ceneviz ahidnamesinde Sirp enklavi | YAMA-A6A Y2 Vodina + madde BIRLIKTE; Vodina yerlesimler_ok107.js:463 |
| `0042/H-0027` | sirada | A | Vodina Uskup ile mi once mi katildi | Y2 + Y3 Uskup 1392-01-06 (takvim D110 sinanacak) |
| `0042/H-0028` | sirada | A | Dejanovic prensligi vassal miydi | Y4 Kostendil d->v · Y5 kunye kaynagi |
| `0042/H-0029` | sirada | A | Bu tarihlerde bu enklavlar var miydi | Y9 Zencan 1383 Timurlu |
| `0042/H-0043` | sirada | A | Saruhanogullari bu tarihte var miydi | YAMA-A6A Y6 Manisa 1415-01-01 + madde; yerlesimler.js:166 degismedi |
| `0044/H-0004` | sirada | A | Mohac sonrasi Macaristan himaye seridi | kod 8e14a50 indi; Budin 1529 yamasi inmedi |

### P03 · KUNYE + RENK — kartli/kaheti · cizre-bohtan · kazak-hetmanligi · polonya-erken · avusturya-cumhuriyet · renk ayrismalari — 15 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0019/H-0007` | sirada | A | Gurcistan ile Karakoyunlu renkleri ayrissin | renkler.py:534 #e018e0 · :567 #e020b0 bugun ayni |
| `0025/H-0001` | sirada | A | 1711 Gurcistan iki kopuk parca dogru mu | YAMA-KARTLI-KAHETI-0912 kunye+renk hazir; devletler.js kartli/kaheti 0 (olculdu), Tiflis hala gurcistan |
| `0032/H-0002` | sirada | A | Karakoyunlu cokusunde odak ve Gurcistan rengi ayrissin | renk ayrismasi 0019/H-0007 ile tek is |
| `0033/H-0017` | sirada | A | Tiflis bolgesi Kafkaslari asmasin | Emre karari 4 kunye; YAMA-KARTLI-KAHETI 2'sini tasiyor (Samtskhe yok); dag asma kismi P13B |
| `0034/H-0023` | olculecek | A | Tiflis/Gence kaybi sonrasi yerler Gurcistan mi Iran mi | gurcistan tek kimlik koku; kartli/kaheti kunyesiyle cozulur |
| `0039/H-0008` | sirada | A | 1923 Cekoslovakya/Avusturya/Macaristan dogru mu | renkler.py'de avusturya-cumhuriyet anahtari YOK, kunye f hala 1918-11-12 (olculdu) |
| `0040/H-0004` | sirada | A | Mavi tonlu devlet renkleri denizden ayrissin | deniz kismi kapandi; renkler.py |
| `0040/H-0005` | sirada | A | Ilhanli ve Novgorod renkleri denizden ayrissin | novgorod #1e333e · ilhanli #433be3 (renkler.py:681/1919) |
| `0042/H-0014` | kosu-bekliyor | A | Osmanli kirmizisi yalniz Osmanli'ya ayrilsin | Mersin kismi E (yerlesimler_ek27.js:51 ramazanoglu 1352-1516); renk rezervi acik |
| `0042/H-0038` | sirada | A | Karakoyunlu-Gurcistan ayni renk, Kars-Ardahan ayri bolge | renk kismi A; Kars-Ardahan veri kismi ayri (D024) |
| `0043/H-0010` | sirada | A | Gurcistan uce bolundu ama iki parca | YAMA-KARTLI-KAHETI-0912 hazir, inmedi |
| `0043/H-0015` | sirada | A | Cizre cevresi bosluk | YAMA-CIZRE-BOHTAN-0913 kunye taslagi; devletler.js cizre/bohtan 0 (olculdu) |
| `parti-0002/H-0005` | sirada | A | Bizans koyu ek alanlarinin anlami (renk) | koyu alan Bizans govdesi (Iznik/Izmit 1331); sorun renk ayrismasi |
| `parti-0002/H-0011` | sirada | A | Baskent yildizi zamana gore degissin | bk:[{f,t,ad}] semasi yazili; 437/438 kunye duz metin, veri yok |
| `parti-0004/H-0011` | sirada | A | Baskent olmayan sehirde yildiz | parti-0002/H-0011 ile tek is |

### P04 · BALKAN — Trakya fetih sirasi · Fetret Sehirkoy · Herseknovi isgal bitisi — 8 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0025/H-0009` | sirada | B | Dimetoka vb. alinmadan kuzey Trakya alinmis gorunmesi duzelsin | 1361 yuvarlak yigin (~12 yerlesim); fetih sirasi kaynak arastirmasi |
| `0030/H-0009` | sirada | B | Pencik maddesindeki Trakya atlamasi ve fetih sirasi duzelsin | 1361-01-01 yigini; ayri fetih maddeleri gerekiyor |
| `0035/H-0063` | sirada | A | Isgal gorunen bolgenin maddesi yok | YAMA-A6C P-0063 Herseknovi isg bitisi 1539-08-10 + madde M-0063-1 AYNI partide; yerlesimler_ek.js:237 kilitsiz |
| `0042/H-0018` | sirada | B | Trakya fetih sirasi kaynakla kurulsun (18 yerlesim) | Kume H; D147 sinifi |
| `0042/H-0019` | sirada | B | Gumulcine-Enez-Cirmen fetih sirasi | H-0018 ile tek is |
| `0042/H-0021` | olculecek | B | Cirmen sonrasi kirmizi toprak dogru mu | Degismez 2 kovasi sorulacak |
| `0042/H-0034` | kosu-bekliyor | B | Fetret'te Sehirkoy (Pirot) Osmanli kirmizisi | hukum kosu-bekliyor YANLIS: yerlesimler_serhat.js:140 d:1386-01-01->1413-07-05 kesintisiz, Suleyman/Musa Celebi donemi YOK (bugun olculdu) |
| `0042/H-0042` | kosu-bekliyor | B | Camurlu'da Pirot etrafi enklav | H-0034 ile tek is |

### P05 · ANADOLU — beylik sinirlari ve noktasiz ucgenler (Germiyan · Dulkadir · Ordu · Ankara 1404 · Denizli 1425 · Bizans haraçguzar) — 10 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0008/H-0001` | olculecek | B | Germiyan ile Sahibata sinirinin kademeli degisimini kaynakla dogrula | sahibata 1281-1341 tek donem; kademe gunleri TDV sahibataogullari/germiyanogullari okunmadi |
| `0016/H-0002` | sirada | B | Kayseri-Elbistan arasindaki tuhaf yapi hatasi giderilsin | 0017/H-0001 ile tek kalem; Pinarbasi/Sariz/Gurun bugun de YOK (olculdu) |
| `0017/H-0001` | sirada | B | Dulkadir Kayseri tarafindaki ucgeni nokta ile kapat | Pinarbasi · Sariz · Gurun YOK (bugun olculdu), Darende var (ok110) |
| `0030/H-0004` | sirada | B | Ordu peteginin sivri ucu duzelsin | Mesudiye · Resadiye · Koyulhisar YOK (bugun olculdu); fetih tarihleri taranmadi |
| `0030/H-0018` | sirada | B | Dulkadir teal ucgeni (1392) duzelsin | dulkadir 2 nokta; Goksun/Andirin/Kadirli YOK, Besni var (bugun olculdu) |
| `0031/H-0019` | sirada | B | Germiyanogullari egri planda gorunmesin | kume atamasi; nokta/bosluk beyani |
| `0033/H-0018` | sirada | A | Yavuz'un Tebriz guzergahi ve alinan kaleler sirasiyla | guzergah e3b4255 indi; kalan Bayburt noktasi YOK (Ekim 1514) · Kigi yer_yama_zaza.js:163 1515 · madde 1514-11-24 |
| `0035/H-0059` | sirada | B | 1422-1425 Bati Anadolu ilhaklari ve Germiyan gorunumu | baslik metni 632a042 indi; Denizli 1425 sahibi kaynak taranmadi (YAMA-A3 kalem 3 olculemedi) |
| `0042/H-0022` | sirada | B | Bizans'in yari-tabiligi acik tonla gosterilsin | Emre karari var; statu haraçguzar veride 0 (olculdu: vassal 851 · gevsek 18 · ozerk 3); pencereler kaynaktan; motor renk eslemesi P13B |
| `0042/H-0037` | olculecek | B | Ankara Emir Suleyman'a ne zaman gecti | yerlesimler.js:160 timurlu 1402-07-28->1404-03-01 (yuvarlak ay) |

### P06 · IRAK · ARABISTAN · MISIR — Bagdat kuzeyi · Timurlu Bagdat · Basra dolgu · Suveys/Kusayr · Ibrim · Hail · Napolyon isgali · Hicaz yolu · Fizan · Katar — 14 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0021/H-0010` | sirada | B | IV. Murad Bagdat'i alirken Erbil, Kerkuk, Samerra, Tikrit ne zaman dondu | 1638-12-24 kesitinde dordu safevi; ARAS-BAGDAT kapsami Kerkuk'u iceriyor, Erbil/Samerra/Tikrit'i icermiyor |
| `0024/H-0005` | sirada | B | Basra'yi caprazlayan Safevi dili duzelsin | Zubeyr/Ummu Kasr kaydi yok (Deym Zubeyr Sudan); dolgu noktasi + iki uc olcumu |
| `0035/H-0053` | olculecek | B | Suveys ve Kusayr Kahire'den once mi alindi | hepsi 1517-01-22; TDV suveys gun vermiyor, ikinci akademik kaynak |
| `0035/H-0054` | sirada | B | Hicaz yolunda durak yerlesimler gosterilsin | koridor agi (BES-ALTYAPI 5) + menzil noktalari kaynagi |
| `0035/H-0055` | sirada | B | Tebuk-Yenbu-Medine arasi yol ve duraklar | H-0054 ile tek is |
| `0035/H-0065` | sirada | B | Haritada degisiklik olmayan madde (Ibrim) | metin 632a042 duzeldi; Ibrim 1517-04-13 baslangici kaynaklar ayrisiyor, oneri yok |
| `0035/H-0074` | tekrar | B | Hemedan barisi sonrasi ortadaki alan kimin | tekrar (muhtemel); 1727 cografyasi ayrica olculmedi; A6C 1732 kalemleri kismen kapsiyor |
| `0035/H-0079` | olculecek | B | Hail ve Nefud Vehhabi boyanmasinin gerekcesi | Dir'iye noktasi VAR (yerlesimler.js:728, not guncel degil); Hail bos:devletsiz; Nefud emilmesi olculmedi |
| `0035/H-0092` | sirada | B | Napolyon'un Misir isgali tarali alanlari dogru mu | taranan 7 dogru; taranmayan Feyyum/Minye/.../El-Aris listesi cikarilmadi |
| `0042/H-0030` | olculecek | B | Timur Bagdat'i zaptetmeden once Timurlu enklavi | yerlesimler.js:701 timurlu 1393-01-01 (madde 1393-08-29) |
| `0042/H-0032` | olculecek | B | Timur Bagdat'i iki kez aldi, gosterim | H-0030 ile tek is |
| `0045/H-0012` | olculecek | B | Fizan ile kiyi arasindaki bosluk | kasitli bosluk dolgu beyani (KOSU10-SONRASI #11); mekanizma P13A |
| `0048/H-0011` | sirada | A | Doha 1602 Safevi mi | YAMA-0048 Y4 Katar dolgu 1559-1670 tabi; yerlesimler_ek_korfez.js:50 kilitsiz |
| `parti-0006/H-0001` | sirada | B | Katif guneybatisindaki Safevi topragi | Katif iran etiketi 47aa386 ile kismen; Iran cekirdegi + Portekiz donemleri olculmedi |

### P07 · KUZEY + ORTA AVRUPA — Ingriya · Prusya Dukaligi · Polesya · Kutsal Roma kunye bolme taslagi · Macaristan 1526-41 · Satu Mare — 7 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0014/H-0005` | sirada | B | Lehistan-Litvanya ucgeni ve Kutsal Roma rengi duzelsin | Polesya en buyuk bosluk 262 km, kaynakli nokta aranacak; renk kismi P03 |
| `0024/H-0008` | sirada | B | 1703 Ingriya tek petek gorunumu duzelsin | Nyen · Koporye · Ivangorod bugun de YOK (olculdu) |
| `0025/H-0004` | sirada | B | Vilnius 1561 cevresindeki hata duzelsin | Konigsberg yerlesimler.js:1039 almanya 1281-1701; prusya-dukaligi ve kurlandiya kunyesi YOK |
| `0025/H-0005` | sirada | B | Acik yesil Macaristan topraklari kimin | kume atamasi, tek tek olculmedi; kraliyet-macaristani kimligine bagli |
| `0035/H-0068` | tekrar | B | Satu Mare 1680'lerde kime bagli | tekrar: ustasi 0027/H-0004 cozuldu ama Szatmar avusturya enklavi notu acik; ek akademik kaynak |
| `0039/H-0007` | sirada | B | 1923'te Kutsal Roma kalmis gorunmesin | devletler.js almanya 962-1923 tek kunye; kutsal-roma id 0 (olculdu); bolme taslagi + renk |
| `0044/H-0002` | olculecek | B | Mohac sonrasi yerlesimsiz parca | Erdel/Varad/Debrecen 1526-29 TDV sorgusu (M-3678) acik |

### P08 · KARADENIZ · TUNA — Yedisan · Azak kaleleri · 1806-12 Tuna isgalleri · savas baslangiclari · bozkir kronolojisi · akademik Bulgar/Eflak siniri — 6 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0022/H-0005` | sirada | B | Yedi bozkirin 1678 sahipligi kronolojiyle belirlensin | sistem aciklandi; kuzey bozkir VERI-KIRIM'de; kalan Don/Kuban/Kabartay gun hassasiyeti |
| `0032/H-0016` | sirada | B | 1493 Bug-Dinyester boslugunun sebebi | kutuda 0 nokta, en yakin 143 km; kaynakli nokta |
| `0034/H-0036` | sirada | B | 1637 Azak cevresinde yalniz bu yerlesimler mi var | veri dogru; Temruk · Acu · Ace donem baslangici kaynakta yok (Temruk bugun de YOK) |
| `0035/H-0090` | sirada | B | Savas baslangiclarinda ilan, yiginak, Eflak-Bogdan'a giris maddeleri | ilk parti 632a042; kalan akademik kaynak (Aksan · Badem) |
| `0035/H-0097` | sirada | B | Ruscuk isgali tarali gosterilsin | Ruscuk isg 1810-09-26 var; Silistre/Bender/Ismail/Kili/Vidin 1806-12 isgal tarihleri kaynakla |
| `0035/H-0100` | sirada | B | Bukres sonrasi bos Rus enklavi | H-0097 ile ayni kok |

### P09 · 1918-1923 — Yunan/Italyan isgali · Sakarya-Buyuk Taarruz gun be gun · dogu/guney cephesi · guney sinir noktalari — 4 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0039/H-0002` | sirada | B | Suriye, Irak, Kafkas ve Iran sinirlari en ince kalitede | yerlesimler_sinir_guney.js 0 nokta (olculdu); sinir_dogu PAKET-KRON4'te |
| `0039/H-0003` | sirada | B | Sakarya ve Buyuk Taarruz gun be gun ilerleme | 1919-22 Anadolu isgal kaydi yok; H-0005'ten sonra |
| `0039/H-0004` | sirada | B | 1918-1923 dogu ve guney cephesi kronolojisi ayrintilansin | ilk 10 madde 632a042; Kars/Ardahan/Artvin/Antalya/Urfa isgal yamasi YAMA-A3 kalem 5 P01'de; Yunan/Ermeni ayrinti kaldi |
| `0039/H-0005` | sirada | B | Yunan ve Italyan isgalleri tarali gosterilsin | isg yunanistan 27 / italya 13 kaydin HEPSI 1912-1913 ve Oniki Ada (bugun olculdu); 1919-22 Anadolu: 0 |

### P10 · UZAK NOKTA — Cagatay · Kazak · Sibir · Nogay-Buhara · Kandehar · Songhay · Kanem-Bornu · Ustyurt — 8 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0033/H-0006` | sirada | B | Cagatay yuvarlak alanlari topografyaya dayansin | seyrek nokta; kayit yoksa dokunulmaz (Emre sarti) |
| `0033/H-0007` | sirada | B | Kazak Hanligi yuvarlak alanlari gercekci mi | yeni nokta |
| `0033/H-0008` | sirada | B | Sibir Hanligi alanlari dogal hatlara dayansin | yeni nokta |
| `0033/H-0009` | sirada | B | Nogay-Buhara arasi bos alanlarda siyasi yapi var mi | yeni nokta; kasitli bosluk degil |
| `0033/H-0010` | olculecek | B | Kandehar pergel gorunumu duzelsin | kume atamasi; kayit varsa nokta |
| `0033/H-0013` | olculecek | B | Songhay guneybatisindaki kucuk boyamanin sebebi | kume atamasi; once olcum |
| `0033/H-0014` | sirada | B | Kanem-Bornu kopuk parcalar birlessin | 2 nokta ~500 km |
| `0048/H-0001` | sirada | B | Ustyurt beyaz bolgede devlet ve yerlesim yok mu | Y2 Nogay dolgu (yama) · Harizm 1593-98 isgali kaynak · Y1 boy adlari P14 · motor P13B |

### P11 · SEFER + ITTIFAK VERISI — Kutsal Ittifak verisi · Eflak 1595 Kalugeran · 1737 Ozi oku (0035/H-0077 devir kalemi) — 3 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0021/H-0030` | sirada | B | Eflak seferi oku, ates simgeleri ve voyvoda saldirilari gosterilsin | ok e3b4255, isyan taramasi ef94ad8+e6ef087 indi; kalan Kalugeran gunu (Onal s.390-395) + Erdel katilis gunu |
| `0023/H-0003` | sirada | B | Kutsal Ittifak uyelerine rozet ve tek seferlik animasyon | plan fbbb2f9; data/ittifaklar.js YOK (olculdu), uyeler/katilis gunleri kaynaksiz |
| `0027/H-0006` | sirada | B | Kutsal Ittifak rozetleri Osmanli'yi dolanan iple baglansin | 0023/H-0003 ile tek is; once ittifaklar.js verisi, sonra P14 cizim |

### P12 · EK OKUMA + GORSEL DALGALARI — savas · antlasma · mimari · merak · Sultani gorseli · magazin kalani — 7 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0032/H-0010` | sirada | B | Sultani altini maddesine sikke gorseli | PD/CC0 bulunamadi; MET · Cleveland · Yale taranacak |
| `0032/H-0013` | sirada | B | Tum maddelere merak, sebep-sonuc, magazin, dis yanki kartlari | kartli cekirdek madde 256 (%18,9); kartsiz aday 411 |
| `0045/H-0007` | sirada | B | Tum savas maddelerine savas hikayesi | kartli 68/325; siradaki dalga listesi PAKET-A2 §5 |
| `0045/H-0009` | sirada | B | Antlasmalara hukum, onem, sebep-sonuc kartlari | 19 ikisi bagli · 111 kartsiz; kalan liste PAKET-EK2 §3 |
| `0045/H-0010` | sirada | B | Padisah magazin ve komplo kartlari | kalan I. Ahmed · III. Mustafa · II. Mahmud · II. Abdulhamid · V. Mehmed olumleri; ekokuma_magazin EK-B kilidi |
| `0045/H-0011` | sirada | B | Mimari yapilara uslup ve teknik kartlari | kartli 28/62; aday Sadabad |
| `0048/H-0015` | sirada | B | Her antlasmaya madde ve onem kartlari | ilk dalga d778798; kalan ~48 antlasma |

### P13A · MOTOR OLCUM — bosluk/binme/deniz asiri/Aral/Ege/is_valid (salt okuma, kosu gerektirmeyenler) — 16 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0028/H-0007` | sirada | C | Kuzey Afrika'daki bozuk gorunumlerin sebebi bulunsun | MOTOR EPOK sevki okunmamis; tek tek olculmedi |
| `0030/H-0002` | olculecek | C | Pelekanon sonrasi bogazi gecis ve kucuk hatalar duzelsin | kume atamasi; kok bogaz maskesi (BULGU-RUMELI-0030); koyu kirmizi kismi A1'de |
| `0031/H-0002` | olculecek | C | Kiyi renk ortusme kalitesi artsin | notun sinifi belirsiz (isgal ortusu mu sefer oku mu); once olcum |
| `0040/H-0001` | olculecek | C | Cizgiler, bosluklar, ust uste binmeler neden | Kume A; bosluk tavan mi kusur mu olculmedi |
| `0040/H-0002` | olculecek | C | Tallinn petegi denizi gecmis mi | Kume B deniz asiri; uc kapi olculecek (kosu gerektirmez) |
| `0040/H-0003` | olculecek | C | Bosluk kalan yerlerin sebebi | TAVAN_KM 200; B gorunumu karari |
| `0040/H-0007` | olculecek | C | Aral Golu kenari neden oturmuyor | modern (kurumus) Aral maskesi suphesi olculmedi |
| `0042/H-0002` | olculecek | C | Bosluk ve binme ornekleri (master, 10 gorsel) | iki ters kusur; olcum yapilmadi |
| `0042/H-0008` | olculecek | C | Ust uste binmenin sebebi | Kume A binme kolu |
| `0042/H-0009` | olculecek | C | Pelekanon sonrasi bogazi gecis | Kume B; Constantinopolis kaydi/parca olcumu kosu gerektirmez |
| `0042/H-0013` | olculecek | C | Binme/ortusmeme ornekleri | H-0002 ile tek is |
| `0042/H-0015` | olculecek | C | Cimpe etki alani Saroz'u dolanmadan tasmis | Enez/Kesan donemleri olculecek |
| `0042/H-0016` | olculecek | C | Ege adalari kiyi ortusmesi | ada govdesi - kara maskesi farki olculecek |
| `0042/H-0039` | olculecek | C | Mardin/Artuklu'da kivrilmis capraz renkler | is_valid olcumu; cizim kusuru cikarsa P14 |
| `0043/H-0017` | olculecek | C | Yildiz/kirpi deseni sebebi | Misir bati colu 6 nokta var; Libya ic bandi; Ⓑ isine bagli |
| `0044/H-0011` | olculecek | C | Basra kiyisinda isinsal bozulma | mekanizma olculmedi; dolgu noktasi onerisi |

### P13B · MOTOR KOD — kosu 11 gundemi (bogaz kesigi · secici ince gol/kiyi · enklav doldurma · Gat kavisi + kopru rengi · Y14 · 0048 Y5/Y6/Y7 · sürtunme · T-kavsak · col boyama · B gorunumu tasarimi) — 29 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0008/H-0005` | sirada | C | Cimpe peteginin karsi kiyiya tasmasini motorda engelle | kara maskesinde Canakkale kesigi yok (0016/H-0004 olcumu); kosu 11 |
| `0012/H-0001` | sirada | C | Col 200 km tavaninin urettigi girintileri yumusat | M-2104 (a) enklav doldurma onayli, uygulanmadi; uret_petek.py |
| `0012/H-0002` | sirada | C | Girintiler daha da yumusatilsin (cok yonlu takviye) | (b) onaylanmadi; once (a) kossun, etkisi olculsun |
| `0014/H-0004` | sirada | C | Ic gol kiyilari (Aral, Baykal) daha keskin otursun | Emre karari (c) secici ince; simplify 0.01 / SADE_TOL 0.012 degismedi |
| `0016/H-0003` | sirada | C | Tuz Golu kiyisi en ince kalitede otursun | secici ince gol karari; motor sadelestirmesi degismedi |
| `0016/H-0004` | sirada | C | Kilitbahir karsisindaki topragin gecisini (bogaz) duzelt | motor_kara.geojson bogaz kesigi yok; ADA KURALI bogazi gormuyor |
| `0016/H-0005` | sirada | C | Cimpe sonrasi Saroz kuzeyine tasmayi engelle | kume atamasi; Enez/Kesan olcumu P13A, kok bogaz/deniz asiri |
| `0019/H-0018` | sirada | C | Anadolu Hisari toprak gecisi bogazi asmasin | bogaz maskesi koku; tarih kismi maskeden sonra olculur |
| `0019/H-0019` | sirada | C | Avrupa yakasi Rumeli Hisari ile birlikte boyansin | H-0018'e bagli; maske + hisar tarihleri tek kalem |
| `0020/H-0005` | sirada | C | Malta kiyisina boyama tam otursun | KARA_TOL/SADE_TOL degismedi; Z-0015 cekirdek inceltme uygulanmadi |
| `0021/H-0005` | sirada | C | Tuna kuzeyindeki iki bosluk kapansin | ust bosluk Uman kurulmamis petegi (Y14 motor); alt bosluk olculemedi -> P13A |
| `0029/H-0007` | sirada | C | Osmanli cekirdeginde kiyi ortusmesi en ince kalitede | kiyi sadelestirme; kosu 11 |
| `0031/H-0022` | sirada | C | Bogazkesen oncesi Avrupa yakasi gecmis gorunmesin | Rumeli Hisari kaydi dogru; tasma bogaz maskesinden |
| `0034/H-0028` | sirada | C | Sahra'da gereksiz boyanan alanlar engellensin | Emre karari: maliyet-mesafe (Ⓐ) beklensin |
| `0035/H-0001` | tekrar | C | Cevresi kesikli, bos, kirmizi alanin anlami | tekrar: Sahra col emilmesi sinifi |
| `0035/H-0047` | sirada | C | Bos arazinin boyanmasini engelle, girintileri yumusat | motor emilme tasarimi; Ⓐ ile birlikte |
| `0035/H-0064` | tekrar | C | Kuzey Afrika gibi anlamsiz bosluk boyamasi | tekrar: Sahra/col emilme sinifi |
| `0035/H-0072` | sirada | C | Sinirlarda ortusmeme (Nystad) | T-kavsak dikisi; motor |
| `0035/H-0087` | sirada | C | Yerlesimler arasi yol agi katmani | BES-ALTYAPI 5. unsur; buyuk tasarim |
| `0035/H-0101` | sirada | C | Sinir ortusmemesiyle olusan ucgen | Chaikin/T-kavsak dikisi |
| `0035/H-0102` | sirada | C | Bos topraklardaki Osmanli kirmizisini engelle | H-0047 ile tek kapsam |
| `0038/H-0003` | sirada | C | Gat enklavi kavisli birlessin | _b2_enklav_birlestir kenar sekli; motor kuyrugu |
| `0038/H-0004` | sirada | C | Girinti dolgulari bagli katmanin renginde olsun | kopru rengi hep dogrudan yaziliyor |
| `0041/H-0001` | sirada | C | Iki gorunum: tavanli ve bosluklari paylastiran B gorunumu | kulliyatin en buyuk maddesi; tasarim + kosu 11 |
| `0042/H-0005` | sirada | C | Tuna'da surtunme ve akademik Bulgaristan/Eflak siniri | surtunme yalniz egim; akademik harita kismi P08 |
| `0042/H-0012` | sirada | C | Kafkaslarda surtunme ve Vladikafkas otesi | surtunme yok; Vladikafkas ustu veri kismi P08 |
| `0048/H-0009` | sirada | C | Katar dogusundaki tuhaf sekil | Y5 kasitli bosluk yabanci govdeye katilmasin + Y6 halka onarimi |
| `0048/H-0010` | sirada | C | Katar batisindaki goruntu bozulmasi | Y7 serbest hat sadelestirme (257 km segment) |
| `parti-0002/H-0014` | sirada | C | Gelibolu alinisinda karsi yakaya gecis | bogaz maskesi (0016/H-0004 ile ayni kok) |

### P14 · ARAYUZ SIRASI — Katalan sefer kirpma capasi (+ ittifak rozet/ip, boy adlari, magazin akordeonu, ayni gun B secenegi kuyrugu) — 1 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0042/H-0004` | sirada | D | Katalan seferi oku gorunsun | madde 632a042 indi; app.js kirpma capasi karari acik |

### P15 · DAMGA — kaniti olan cozulmus maddelerin CEVAP.json yeniden damgasi — 18 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0019/H-0034` | bayat | E | Azemmur alinisi haritada gorunsun | Azemmûr kaydi 1513 portekiz enklavi ile var (BAYAT taramasi 23 Agu) |
| `0019/H-0062` | tekrar | E | Planlanmis seferler koyu sari kesikli cizilsin | ustasi H-0041 zaten-dogru; js/app.js:3836 hal:"planlanan" -> #c98a00 |
| `0019/H-0067` | bayat | E | Fuzuli kasidesi Bagdat fethinden once gorunmesin | iki madde 1534-12-04 (OK104 olcumu); gorunme sirasi P14 kuyruguna not |
| `0019/H-0078` | tekrar | E | Van yanindaki pembe renk kimin | ustasi H-0077 zaten-dogru (safevi #a56cab) |
| `0030/H-0008` | bayat | E | Osmanli disi maddelerin kronolojide yeri sorgulansin | yer_id 6/7 vardi (BAYAT); kapsam:dis isaretleri ae251c0 + 926d349 indi; secici PAKET-UI3'te |
| `0031/H-0008` | tekrar | E | Timur'un Bagdat isgalleri haritada gorunsun | ustasi 0031/H-0003 cozuldu; yerlesimler.js:701 Bagdat timurlu 1393-1394 donemi var (kaynak dosyasi yer_yama_uyg1.js artik yok — kanit dogrudan veri) |
| `0031/H-0020` | tekrar | E | Ayni gundeki uc madde harita aksiyonunu sirayla gostersin | ustasi 0031/H-0018 cozuldu (82aa96e) |
| `0034/H-0001` | bayat | E | Uc Iran benegi gercek mi | kutuda iran kimlikli nokta 0 (BULGU-0034-SON-UC.md); yan bulgu 7 iran donemi ayri |
| `0034/H-0017` | bayat | E | 1599'da mustakil Gurcistan var mi | kutuda gurcistan donemi 0; Kutaisi imereti tabi (BULGU-GURCISTAN-0034.md) |
| `0035/H-0034` | sirada | E | Kronolojiye afet etiketleri eklensin | 9a72af1: afet + 6 alt etiket veride ve Konu suzgecinde (M-3858) |
| `0035/H-0066` | sirada | E | 26 konu basligi etiketi maddelere | 9a72af1: konu26 veride + suzgec (M-3858: 6200/6210); isabet orneklemi olculmedi (not) |
| `0035/H-0078` | tekrar | E | Ozi geri alinisinda Belgrad enklavi dogru mu | ustasi 0035/H-0028 cozuldu (Semendire maddesi olaylar_ek17) |
| `0035/H-0083` | tekrar | E | Basra'yi alan Fav'i da almis sayilir mi | ustasi 0035/H-0037 gerek-yok (b7ab563) |
| `0035/H-0084` | tekrar | E | Abadan Basra ile birlikte mi el degistirdi | ustasi 0035/H-0038 zaten-dogru |
| `0037/H-0009` | bayat | E | Kars'in dususu haritada gorunsun | 3cf33e9: Kars s:rusya 1877-11-18; gorsel eski yayindan |
| `0042/H-0001` | kosu-bekliyor | E | Sogut-Domanic baglantisi guclensin | 7c7e80d Bozuyuk/Pazaryeri (yerlesimler.js:148/150) kosu 10 yayininda (92d9349); goz teyidi istenir |
| `0042/H-0033` | kosu-bekliyor | E | Fetret'te Mersin'deki anlamsiz kirmizi | yerlesimler_ek27.js:51 ramazanoglu 1352->1516-08-24 + kosu 10 yayini 92d9349 |
| `0044/H-0012` | sirada | E | Van fethi oncesi/sonrasi; Caldiran ve Baskale | eb2e435: ek26 d:1548-08-24->1920-04-23 (Caldiran+Baskale); haritaya sonraki uretimde |

### KARAR · EMRE KARARI — koordinator sorar — 1 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0011/H-0001` | bayat | F | Kutsal Roma 1281 tek blok mu, alt prenslikler gosterilsin mi | BAYAT damgasi OTURUM-3 kuralina dayaniyor (300 devletcik yazilmaz); 0039/H-0007 zaman bolmesiyle catismasi Emre'ye sorulmadi |

### SURUYOR · ISCIDE SURUYOR — plana konmadi — 14 madde

| madde | hukum | sinif | Emre'nin istegi | durum (olculen) |
|---|---|---|---|---|
| `0035/H-0013` | sirada | S | Prut sonrasi Azak ve Taygan haritasi dogru mu | Taganrog noktasi VAR (yerlesimler_h2_rusya.js:440); 1711-1739 dilimi VERI-KIRIM'de (M-3903 hukum b, isleniyor) |
| `0035/H-0062` | sirada | S | Maddenin Osmanli acisindan onemi | veri 926d349 indi; arayuz PAKET-UI3 |
| `0043/H-0003` | sirada | S | Kirim bozkirlari ve Azak kuzeyi | VERI-KIRIM + MOTOR-HIMAYE (8ba093e) |
| `0043/H-0009` | sirada | S | Kirim Hanligi katilim haritasi | VERI-KIRIM |
| `0043/H-0019` | sirada | S | Ayni gun uc olay sirali oynatilsin | Emre B secti; PAKET-UI3 |
| `0049/H-0001` | sirada | S | Caldiran ve Baskale kimde | veride indi eb2e435; uretim bekliyor |
| `0050/H-0001` | sirada | S | Rus kaynaklarinda Kirim Hanligi yorumlari ek okuma | PAKET-EK-A |
| `0050/H-0002` | sirada | S | Bagdat'in yeniden fethinde Irak bolgesi dogru mu | ARAS-BAGDAT |
| `0050/H-0003` | sirada | S | I. Mustafa maddesindeki gelistirici ibare ve kizlaragasi karti | PAKET-EK-B + PAKET-TEMIZ |
| `0050/H-0004` | sirada | S | Okura gorunen yapay zeka notlari ayiklansin | PAKET-TEMIZ |
| `0050/H-0005` | sirada | S | Kasr-i Sirin ek okumalari | PAKET-EK-A |
| `0050/H-0006` | sirada | S | Kasr-i Sirin antlasmasina gore Halepce ve Sehrizor | ARAS-BAGDAT |
| `0050/H-0007` | sirada | S | Magazin kartlari akordeon ve icerik duzeni | PAKET-EK-B (arayuz kismi PAKET-UI3 sonrasi) |
| `0050/H-0008` | sirada | S | I. Ibrahim skandal olaylari ek okuma | PAKET-EK-B |
