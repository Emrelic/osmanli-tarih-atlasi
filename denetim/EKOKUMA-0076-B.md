# EKOKUMA-0076-B — ek okuma kartları, 1896–1914 · 14 madde

> Şartname: `oturumlar/SEVK-0076.md` (EKOKUMA-0076-B bölümü) + `oturumlar/ORTAK-0076.md`
> Ad alanı tahsisi (tahta M-5024): sonek `p76c` · dosya
> `denetim/EKOKUMA-0076-B-YAMA-ekokuma_p76c.js` · değişken **`window.EKOKUMA_P76C`**

---

## 0. Öngörü — ÖLÇÜMDEN ÖNCE yazıldı (ORTAK-0076 §4 ⑤)

| # | öngörü | sınav anı | evren | sonuç |
|---|---|---|---|---|
| ① | 14 kart üretilir, hepsinde `id·tur·ad·kisa·metin·kesinlik·olay·kaynak` dolu | dosya yazıldıktan hemen sonra | yama dosyası | ✓ 14/14 |
| ② | `tur` değerleri arayüzün tanıdığı 14 anahtardan | aynı an | `js/app.js` `EKOKUMA_TUR` | ✓ 5 ayrı tür, hepsi tanımlı |
| ③ | Geliştirici sesi ihlali **0** | aynı an | kart gövdeleri (yorum başlığı hariç) | ✓ 0 |
| ④ | `olay:` çapalarının **hepsi** canlı kronolojide var | aynı an | `data/olaylar*.js` + `kronoloji*.js` | ✓ 14/14 |
| ⑤ | id'ler tekil, mevcut havuzla çakışmıyor | aynı an | `data/ekokuma*.js` (561 id) | ✓ 0 çakışma |
| ⑥ | `H-0098` bir **veri kusuru**dur (koordinatörün tahmini) | TDV okunduktan sonra | `data/yerlesimler*.js` + TDV | 🟡 **YARIM DOĞRU** — §3'e bak |

Sınav aleti: `py denetim/EKOKUMA-0076-B-sina.py` → **TEMİZ ✓**

---

## 1. Ne ölçtüm — sayıyla

| ölçü | değer |
|---|---|
| teslim edilen kart | **14** (SEVK listesiyle birebir; `PARTI.md`de 164 `## H-` başlığı sayıldı, 14'ü bende, eksik 0) |
| kart gövdesi toplam | **53.604** karakter (en kısa 2.263 · ortanca ~3.700 · en uzun 6.285) |
| `kesinlik:"tartışmalı"` | **4** (31 Mart rolü · itibar · Selânik · gemilerin bedeli) |
| tür dağılımı | `tartisma` 10 · `karsi-anlati` 1 · `kahramanlik` 1 · `sok-haberler` 1 · `dis-yankilar` 1 |
| TDV maddesi okundu (gövde, doğrudan sayfa HTML'inden) | **33** slug (önbellekte) · ayrıca **15** slug **302** verdi (ölü/yönlendirme), arama ile doğru başlığa gidildi |
| TDV dışı kaynak | **5** hakemli makale/değerlendirme + **1** resmî sınır etüdü (künyeler kartların `kaynak:` alanında) |
| taranan kronoloji maddesi (çapa evreni) | **6.651** kayıt / **116** dosya |
| `bulunamadı` yazılan nokta | **6** (§4'te listeli) |

### Madde → kart eşleşmesi

| madde | kart `id` | tür |
|---|---|---|
| H-0098 | `berlin-1878-kotur-irana-verildi` | tartisma |
| H-0111 | `osmanlicilik-islamcilik-turkculuk-uc-tarz` | tartisma |
| H-0113 | `abdulhamid-31-mart-rolu-tartismasi` | tartisma |
| H-0114 | `hamid-devri-sansur-ve-jurnal-teskilati` | tartisma |
| H-0115 | `abdulhamid-halk-nezdinde-itibari` | karsi-anlati |
| H-0129 | `selanik-etnik-tarihsel-aidiyet-tartismasi` | tartisma |
| H-0130 | `kuzey-ege-adalari-averof-hamidiye` | kahramanlik |
| H-0131 | `balkan-bozgununda-ordunun-zaafiyeti` | tartisma |
| H-0133 | `babiali-baskini-1913-enver-yakup-cemil` | sok-haberler |
| H-0141 | `balkan-savaslarinin-sonuclari` | tartisma |
| H-0150 | `ikinci-balkan-savasi-1913` | tartisma |
| H-0154 | `bozcaada-imroz-bogazlar-icin-onemi` | tartisma |
| H-0159 | `sultan-osman-resadiye-el-konulan-gemiler` | tartisma |
| H-0164 | `osmanli-halifesini-taniyan-tanimayan-cografyalar` | dis-yankilar |

Hüküm: **on dördü de `yapildi`.**

---

## 2. Tartışmalı üç konu — nasıl ele alındı

Şartname "tek anlatı dayatma, kaynakların **ayrıldığı** yeri göster" diyordu. Üçünde de
kart bir hüküm vermiyor, ayrışmayı adlandırıyor:

- **H-0113 (31 Mart'taki rolü):** dört ayrı görüş ayrı ayrı, kendi kaynağıyla verildi
  (İttihatçıların o günkü hükmü · padişahın fiilî davranışı · dönemin İslâmcı
  aydınlarının tavrı · "İngiliz parmağı" iddiası ve onu desteklemeyen elçilik raporları).
  Üzerinde anlaşılan tek cümle de yazıldı: *"planlayanların kim olduğu henüz tam olarak
  açıklığa kavuşmamıştır."*
  🔴 **Ölçülen ayrışma TDV'nin İÇİNDEDİR:** `otuzbir-mart-vakasi` ile `abdulhamid-ii`
  maddeleri ayrı müelliflerin kalemindendir ve padişahın rolünü farklı ağırlıkla tartar.
  Bu, kartta açıkça yazıldı.
- **H-0115 (itibarı):** "Kızıl Sultan" ile "Ulu Hakan"ın ikisinin de **üretilmiş** imgeler
  olduğu, birinin bir Fransız tabirinin tercümesi, ötekinin ona cevap olduğu gösterildi;
  dönemin kendi tanıklıkları ayrı bir bölümde verildi. Kartın `not:` alanı, dayandığı
  ansiklopedi maddesinin **kendisinin de tartışmanın bir tarafı** olduğunu söylüyor.
- **H-0129 (Selânik):** üç iddia (Yunan · Bulgar · Makedon) adlandırıldı, 1900 sayımının
  rakamları verildi (%47 Mûsevî · %22 Türk · %14 Rum · %8 Bulgar) ve şehir ile kırsalın
  farklı cevap verdiği gösterildi. Sayımın **Bulgar bir istatistikçinin derlemesi** olduğu
  ve taraflılık eleştirisi taşıdığı `not:`ta yazılı; daha tarafsız bir sayım bulunamadı.

---

## 3. 🔴 H-0098 — ÖNGÖRÜ YARIM ÇIKTI · `SINIR-BERLIN-0076`a devir

Koordinatörün tahmini: *"Kotor'un İran'a verilmesi büyük ihtimalle bir VERİ KUSURU."*

**Ölçüm — iki ayrı yer var ve ikisi de tarandı:**

| kayıt | dosya | 1878'deki `d:` | hüküm |
|---|---|---|---|
| **Kotor (Cattaro)**, 42.421 K / 18.768 D | `data/yerlesimler_ek.js:175` | `avusturya` (`1814-01-01 → 1918-11-11`) | ✅ **KUSUR DEĞİL** — Adriyatik'teki Kotor Berlin'de el değiştirmedi, veri doğru |
| **Kotur**, 38.4750 K / 44.3958 D | `data/yerlesimler_ek_ferhadpasa.js:94` | `kacar` (`1794-01-01 → 1923-10-29`, kesintisiz) | 🟡 **MUHTEMEL KUSUR** — aşağıya bak |

⇒ **Soru bir veri kusurundan değil, iki adın karışmasından doğmuş görünüyor.** Berlin
Antlaşması'nda İran'a verilen, Adriyatik'teki Kotor değil, Van'ın doğusundaki **Kotur**
geçidi/kalesidir. Kart bu ayrımın üzerine kuruldu.

**Ama ikinci sırada gerçek bir borç duruyor** (hüküm SINIR-BERLIN-0076'nın):

- **KAYNAK:** TDV `berlin-antlasmasi`, AYNEN: *"Kotur ise İran'a verilecekti."*
  Bir devlet elinde olmayan yeri devredemez ⇒ kaynak, 1878'de Kotur'un Osmanlı'da
  olduğunu **ima eder**. TDV `van` Kotur'u Mahmûdî ile birlikte "Van eyaleti bünyesinde
  devamlılığı olan sancaklar" arasında sayar.
- **VERİ:** Kotur'un `s:` zinciri 1794'ten 1923'e **kesintisiz `kacar`**. Yani ①
  1849–1878 arası muhtemel Osmanlı dönemi YOK, ② Berlin devri haritada **hiç kırılma
  üretmiyor**.
- **KAYDIN KENDİ BEYANI** (dosyadaki yorum): *"1639 SONRASI için ayrı bir Osmanlı
  dayanağı BULUNAMADI — o yüzden uzatılmadı."* Yani kusur bilinerek bırakılmış; yeni olan
  şey, TDV'nin Berlin maddesinin şimdi bir dayanak sunmasıdır.
- 🔴 **SINIFLANDIRMA (düzeltme DEĞİL):** bu, `CLAUDE.md §3.5`in "devlet var, yeri yanlış"
  ailesinden — *ölçülemedi ≠ yok*. **Ben veriye dokunmadım** (ORTAK-0076 §3).
- **ÖLÇÜLEMEDİ:** Kotur'un 1849–1878 arasında fiilen kimin idaresinde olduğu ve devrin
  hangi gün tamamlandığı taranan kaynaklarda **bulunamadı**. Bu ölçülmeden dönem yazılırsa
  tarih uydurulmuş olur (`CLAUDE.md §4`).
- **TERS YÖN SINAVI (D206):** Kotur'a 1849–1878 Osmanlı dönemi eklenirse hata öbür tarafa
  taşınabilir — komşusu Mâkû (39.2942 K / 44.5142 D) aynı pencerede Kaçar'dır ve aradaki
  boşluk peteğe emilir. İki uç birlikte ölçülmeli.

**Yatay mesaj `SINIR-BERLIN-0076`ya tahtadan gönderildi.**

---

## 4. Ne bulamadım — `bulunamadı` bir sonuçtur

1. **Kotur'un 1849–1878 arası idaresi ve Berlin devrinin günü** — TDV `berlin-antlasmasi`,
   `maku`, `van`, `aras` ve tam metin araması (7 eşleşme) tarandı; hüküm veren gün yok.
2. **TDV'de "sansür" ve "jurnal" müstakil maddesi YOK** (ikisi de 302). Kart
   `hafiye` · `abdulaziz` · `dahiliye-nezareti` · `abdulhamid-ii` maddelerinden kuruldu.
   TDV `matbuat` maddesi **Osmanlı basınını değil Arap dünyasını** anlatıyor — okundu,
   kapsam dışı çıktı.
3. **"Sultan Rouge" tabirinin ilk geçtiği Albert Vandal metninin künyesi** —
   tabirin Vandal'a aidiyeti ve Jön Türkler eliyle tercümesi tartışma literatüründe
   kayıtlı, ama birincil metnin künyesi bulunamadı; kartta bu AÇIKÇA yazıldı.
4. **Reşadiye'nin bedeli hakkındaki arşiv temelli makalenin tam metni** —
   `eprints.soton.ac.uk` ve `tandfonline.com` bot doğrulaması/403 verdi; doğrulamayı
   aşmaya teşebbüs edilmedi. Hüküm, makalenin **yayımlanmış özetinden** okundu;
   ayrıntılı rakamlar (kredi tutarları, Donanma Cemiyeti'nin topladığı meblağ)
   **ölçülemedi** ve kartın `not:` alanında öyle yazıldı.
5. **1913 adalar kararının müzakere zabıtları** — büyük devletlerin 16 Aralık 1913
   kararının gerekçesi tutanaklardan değil **sonucundan** okundu; kartta böyle beyan edildi.
6. **Averof'un satın alma bedeli** — kaynağın verdiği rakam (24.000 drahmi fiyat,
   8.000 drahmi bağış) bir zırhlı için mertebe olarak düşük görünüyor, büyük ihtimalle
   birim atlanmış bir aktarım. Doğrulayan ikinci kaynak bulunamadı; kartta hüküm olarak
   değil **kaynağın verdiği değer** olarak anıldı.

---

## 5. Görsel — `gorsel:` alanı AÇILMADI, sebebi ölçüldü

`H-0150`in pakette bir görseli var (`H-0150-1.png`). Açıldı ve bakıldı: **bu bir tarihî
resim değil, atlasın kendi ekran görüntüsüdür** — 1913-08-10 Bükreş Antlaşması maddesinin
harita üzerindeki hâli, altında "Batı Trakya ve Kavala havzası Bulgaristan'dan
Yunanistan'a geçti" satırıyla. Yani bir **işaret**tir, bir illüstrasyon değil.

⇒ `gorsel:` yalnız kamu malı / CC0 tarihî görsel için açılır (`CLAUDE.md §1.6`).
Ekran görüntüsünün lisans jetonu yoktur ve zaten okura yeni bir şey göstermez.
**Kart görselsiz kuruldu**; görselin gösterdiği çapa (`1913-08-10` Bükreş) `olay:`
alanına yazıldı — yani işaretin taşıdığı bilgi kaybolmadı.

---

## 6. Ne istiyorum

1. **BAĞLAMA:** `denetim/EKOKUMA-0076-B-YAMA-ekokuma_p76c.js` → `data/ekokuma_p76c.js`
   olarak kopyalansın ve `js/app.js` `_EKOKUMA_DOSYA_ADLARI` dizisine tek satır eklensin:
   `"ekokuma_p76c",   // window.EKOKUMA_P76C — 1896-1914 ek okuma, 14 kart`
   ⚠️ `index.html`e satır GEREKMEZ (ek okuma dosyaları ana yüke katılmaz, tembel yüklenir).
2. **H-0098 borcu** `SINIR-BERLIN-0076`ya devredildi; hüküm onun ve senindir. Veriye
   dokunmadım.
3. **Aletler bende kalsın:** `denetim/EKOKUMA-0076-B-tdv.py` (TDV gövde çıkarıcı,
   önbellekli) · `denetim/EKOKUMA-0076-B-capa.py` (kronoloji çapa tarayıcısı, Türkçe
   normalleştirici + kendi süzgeç sınavı) · `denetim/EKOKUMA-0076-B-pdf.py` ·
   `denetim/EKOKUMA-0076-B-sina.py`. Başka oturumların da işine yarayabilir;
   `arac/` donuk olduğu için hepsi `denetim/` altında.
   ⚠️ **Önbellek ne commit edildi ne diskte bırakıldı.** `EKOKUMA-0076-B-tdv.py`
   indirdiği gövdeleri `denetim/EKOKUMA-0076-B-tdv-onbellek/` altına yazar; iş bitince
   o dizin (33 dosya) SİLİNDİ. Sebep: TDV gövdeleri telif taşır ve paylaşılan bir
   çalışma ağacında durmalarının hiçbir faydası yok — alet yeniden koşturulursa
   kendini doldurur. Sayılar bu rapordan okunur, önbellekten değil.

---

## 7. Yol boyunca ölçülen iki şey (kayda geçsin)

- 🔴 **Çapa tarayıcısının ilk sürümü YALAN SÖYLEDİ ve sınavı yine "geçti".** İlk regex
  `t:"..." , b:"..."` **bitişikliği** arıyordu. `kronoloji_*.js` bitişik yazıyor,
  `olaylar*.js` araya `k:` ve `etiket:` koyuyor. Sonuç: çekirdek kronolojinin TAMAMI
  sessizce evren dışında kaldı (**4.845** madde sayıldı, gerçek **6.651**) — ve dört
  Türkçe harf sınavı da geçti, çünkü eksik evrende de eşleşme vardı.
  **Ders:** Türkçe normalleştirici sınavı süzgeci sınar, **evreni sınamaz.** Sınava
  "zorunlu dosya HİÇ madde veriyor mu" satırı eklendi; ikisi ayrı sorudur.
- **TDV tuzağı ②'nin yeni bir yüzü:** `matbuat` slug'ı CANLI ve gövdesi DOLU — ama madde
  Osmanlı basınını değil **Arap dünyasındaki gazeteciliği** anlatıyor. Slug tutması,
  aradığın maddeyi bulduğun anlamına gelmiyor.
