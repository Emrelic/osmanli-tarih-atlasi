# NOKTA EPİR — Parga'nın yuttuğu 3.700 km²

| alan | değer |
|---|---|
| **AD** | NOKTA EPİR |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **DOSYAN** | `data/yerlesimler_epir.js` → `window.YERLESIMLER_EPIR` · ve `oturumlar/NOKTA-EPIR-ILERLEME.md` |
| **YAZMAYACAĞIN** | başka hiçbir şey. `yerlesimler.js` · `devletler.js` · `index.html` · `girdi.py` **koordinatörde** |

---

## 0. EMRE'NİN ŞİKÂYETİ (22 Ağustos 2026, birebir)

> *"Bizim haritada Parga genellikle Venedik'te görünüyor ama Parga'nın
> kuzeyindeki topraklar yerleşim yeri olmadığı için büyük oranda Parga
> hâkimiyeti nedeniyle Parga bölgesine boyanıyor. Hâlbuki bu kadar büyük
> bir bölge sürekli Venedik bölgesi olmamıştır. Bu bölgeyi tarihî veriler
> ile birkaç bölgeye böl, en az iki bölgeye bölelim. Parga gibi tarihi
> olan başka ne yerleşimler var ise onları da ekleyip haritayı
> düzeltelim."*

Bu, `CLAUDE.md §2`nin ders kitabı vakası: *noktası olmayan bölge en yakın
peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.*

---

## 1. ÖLÇÜLDÜ (koordinatör, 22 Ağu 2026) — sen DOĞRULA

⚠️ `CLAUDE.md §11`: **devraldığın rakamı doğrulamadan aktarma.**

```
Parga'nın peteği     3.701 km²
kuzeye uzanım        96,9 km   (39,29 → 40,16 K · kutu 19,80-20,73 D)
Parga kaydı          yerlesimler.js:1227 · k:4 · m:"Yanya"
                     s: bizans 1281-1401 · venedik 1401-1797 ·
                        fransa 1797-1815 · ingiltere 1815-1819 ·
                        d: OSMANLI(antlasma) 1819-1913 · yunanistan 1913-
⇒ 1401-1797 arası ~400 yıl, 3.700 km² VENEDİK boyanıyor.
```

**Epir kutusunda (38,6-40,6K / 19,6-21,6D) TOPLAM 8 NOKTA:**
```
Yanya      39,665 20,852  k2   OSMANLI 1430-1913
Korfu      39,624 19,922  k3   venedik 1281-1797
Parga      39,292 20,405  k4   venedik 1401-1797
Paksos     39,197 20,187  k4   venedik 1281-1797
Arta       39,161 20,985  k4   OSMANLI 1449-1881
Preveze    38,961 20,747  k4   venedik 1684-1797
Vonitsa    38,917 20,888  k4   venedik 1684-1797
Ayamavra   38,716 20,643  k4   venedik (aralıklı)
```
🔴 **Parga'nın KUZEYİ tamamen boş.** En yakın kuzey komşuları Korfu
(55,6 km, **Venedik**) ve Yanya (56,6 km, Osmanlı). Boşluğu paylaşan iki
noktadan biri de Venedik olduğu için **tampon yok**.

---

## 2. SENİN İŞİN

Thesprotia ve güney Arnavutluk kıyısına **tarihî olarak savunulabilir**
noktalar ekle ki 3.700 km²'lik blok gerçek sahiplerine bölünsün.

### 🟡 ADAY LİSTESİ — ÖNERİ, ÖLÇÜM DEĞİL
Koordinatlar **yaklaşık**, tarihler **doğrulanmadı**. Hepsini kendin
araştır; yanlış çıkanı **çürüt ve bildir** — çürütmek de sonuçtur.

```
Delvine        ~39,95K 20,10D   Osmanlı SANCAK MERKEZİ — en büyük eksik
Margariti      ~39,55K 20,42D   Osmanlı kazası, Çam Arnavut merkezi
Aydonat        ~39,47K 20,52D   (Paramythia) Osmanlı kazası
Filat          ~39,60K 20,29D   (Filiates) Osmanlı kazası
Souli          ~39,42K 20,60D   🔴 ÖZERK Suliot birliği ~1550-1803
```

### 🔴 EK ADAYLAR — KAYNAĞI YAPAY ZEKÂ, YANİ **KAYNAK DEĞİL** (`§4`)
Emre 22 Ağustos'ta bir ChatGPT çıktısı paylaştı. **`CLAUDE.md §4` yapay
zekâ üretimi metni `🔴 KULLANILMAZ` kümesine koyuyor** — bu liste bir
DAYANAK değil, **Vikipedi gibi bir İZ**: *"hangi maddeye bakayım"*
sorusunu cevaplar, *"tarih neydi"* sorusunu **cevaplamaz.**
**Her satırı TDV ya da akademik kaynakla doğrula; doğrulanmayanı YAZMA.**

```
Borsh (Sopot kalesi)  ~40,05K 19,85D  iddia: OSMANLI 1431→ · 1570-71 kısa Venedik
Sarandë (Ayasaranda)  ~39,87K 20,01D  iddia: Osmanlı · 1867 Delvine kazasına bağlı müdürlük
Butrint / Ksamil      ~39,75K 20,02D  iddia: VENEDİK 1386→1797 (Korfu ile satın alındı)
                                             1655 ve 1715-18 kısa Osmanlı işgali
                                             1718 Pasarofça Venedik'i teyit
                                             1797 Fransa · 1798 Ali Paşa → Osmanlı
İgumenitsa            ~39,50K 20,27D  iddia: Venedik (Porto delle Gomenizze) → 1479 Osmanlı
                                             → çekişme → 1537-40'tan sonra kesin Osmanlı
                                             1910 Reşadiye Sancağı merkezi
```

🟢 **KISMEN TEYİTLİ — ve bu önemli:** aynı metin Parga için
`venedik 1401→1797` ve `1819→1913 Osmanlı (İngilizler Ali Paşa'ya
bıraktı)` diyor. **Bizim `yerlesimler.js:1227` kaydımız birebir aynı.**
⇒ Metnin Parga kısmı bağımsız olarak doğrulanmış oluyor. Bu, öteki
satırların da doğru olduğunu **göstermez** — ama listeyi ciddiye almak
için sebeptir.

### 🔴 VE ASIL YAPISAL BULGU — bölge ŞERİT ŞERİT
Bu adaylar doğrulanırsa Epir kıyısı **tek blok değil, alternatif bir
Osmanlı-Venedik serhat kuşağı**:
```
Borsh       ~40,05K   OSMANLI 1431→
Sarandë     ~39,87K   OSMANLI
Butrint     ~39,75K   VENEDİK 1386→1797      ← İKİNCİ enklav
İgumenitsa  ~39,50K   OSMANLI ~1540→
Parga       ~39,29K   VENEDİK 1401→1797      ← BİRİNCİ enklav
```
⇒ Emre'nin *"en az iki bölgeye bölelim"* isteği veriye göre **beş
şeride** dönüşüyor. Venedik'in amacı anakara fethetmek değil **Korfu'yu
ve Adriyatik yolunu koruyan kıyı noktalarını tutmaktı** — akademik
literatürde Butrint için *"Venetian enclave"* denmesinin sebebi bu.
🔴 Bu tez de **doğrulanacak**, kabul edilmiş sayılmaz.

### 🔴 SOULI AYRI BİR SINIF — ve en öğretici olanı
Suliot birliği ne Venedik ne Osmanlı'ydı: dağlarda ~250 yıl fiilen özerk
bir konfederasyon, 1803'te Tepedelenli Ali Paşa tarafından yıkıldı.
`CLAUDE.md §11`in *"sahipsizin iki cinsi"* sınavını uygula:
```
kaynak AÇIKÇA konuşuyorsa   →  bos:"devletsiz"  (özerklik KAYITLI)
kaynak SUSUYORSA            →  bos:"veri-yok"
```
Souli'de kaynak **konuşuyor** — o hâlde `devletsiz` olmalı, ama **kararı
kaynağı okuduktan sonra ver.**

### ⚠️ VE İKİ UÇ DA ÖLÇÜLÜR (`§3.5.1`)
*"Venedik fazla görünüyor"* diye başlayıp **Osmanlı'yı fazla göstermek**
bu projede yaşanmış bir hata. Nokta eklerken sor: *bu nokta Venedik
fazlalığını kapatırken Osmanlı fazlalığı doğuruyor mu?* Parga'nın kendi
dar şeridi **Venedik kalmalı** — 1401-1797 doğrudur, yanlış olan
YAYILIMIDIR.

---

## 3. KURALLAR

```
3 KM KURALI      yeni nokta eklerken 3 km içinde başka nokta var mı — 2593'e karşı ÖLÇ
DEVLET ÖMRÜ      d:/s: yazarken devletin devletler.js'teki f/t aralığını KONTROL ET (§3.5)
KİMLİK           d:"..." değeri devletler.js'te GERÇEKTEN VAR OLAN id olmalı,
                 kendi transliterasyonun DEĞİL (§4 "Türkçe yazım ekseni")
TARİH UYDURMA    gün bilinmiyorsa YYYY-01-01
k KADEMESİ       sancak merkezi k2 · kaza merkezi k3 · kale/kasaba k4
                 (tavan: k1=700 k2=420 k3=280 k4=140 km)
```

## 4. KAYNAK — `CLAUDE.md §4`

🔴 **TDV'de `parga` diye madde YOKTUR** (CLAUDE.md'de kayıtlı ölü slug).
Bu bölgede slug avı gerekecek. Denenecekler: `yanya` · `delvine` ·
`arnavutluk` · `epir` · `tepedelenli-ali-pasa` · `preveze` (⚠️ bu da ölü
diye kayıtlı) · `narda`.
```
curl -s -o /dev/null -w "%{http_code}" https://islamansiklopedisi.org.tr/<slug>
302 → ÖLÜ    200 → VAR (ama İÇERİĞİ OKU — doğru madde mi?)
```
Dar slug tutmazsa **kapsayıcı maddeyi** dene (`arnavutluk` · `yanya`).
TDV kapsamıyorsa akademik kaynak meşru — **`kaynak:` alanına açıkça yaz**.
**Vikipedi tek dayanak OLAMAZ.**

## 5. TESLİM RAPORU — sayıyla

```
① kaç nokta yazdın · her birinin k kademesi ve gerekçesi
② Parga'nın peteği ölçümde 3.701 km² idi — kaç km²'ye düştü (ölç, tahmin etme)
③ hangi adayı ÇÜRÜTTÜN — ve niçin
④ Souli hangi kovaya girdi, kaynak ne dedi
⑤ iki uç: Osmanlı fazlalığı doğdu mu — ölç
⑥ kaynak dağılımı: kaç TDV · kaç akademik · kaç "bulunamadı"
⑦ NE BULAMADIN
⑧ BAĞLANMAYI BEKLİYOR: data/yerlesimler_epir.js → window.YERLESIMLER_EPIR
```

⚠️ ② ölçülemeyebilir: petek yeniden üretilmeden yeni alan bilinmez ve
üretim ~3,5 saat, YALNIZ koordinatör koşturur. Ölçemezsen **"koşu
bekliyor"** diye yaz — tahmin etme.

## 6. HABERLEŞME

```bash
py arac/tahta.py yaz --kim "NOKTA EPİR" --kime "KOORDINATOR" --mesaj "..."
```
Açılınca haber ver · kalem kalem bildir · **aksaklığı bekletme** · sorulunca
*"iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"*. Kendi pencerene yazmak
**cevap vermemekle aynı şey**.
