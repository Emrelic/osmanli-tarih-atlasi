# BULGU — B2 · TOPOĞRAFYA (`BES-ALTYAPI.md` ① ve ③)

**Oturum:** OPUS HAZIR KITA 107 · **Görev:** `oturumlar/GECE-SIRASI-2EYLUL.md` · tahta M-2038
**Tarih:** 2 Eylül 2026 · **Koda DOKUNULMADI**, yalnız ölçüldü ve önerildi.
**Ölçüm tabanı:** koşan üretimin kendi logu (`kosu_1eylul.log`, 1 Eylül 22:51 başladı)
+ `data/bolgeler.js` · `data/petek_govde.js` · `veri-kaynak/*`.

---

## 0. ÖNCE BEŞ BAYAT SAYI — brifingimdekiler dâhil

Ölçmeden hiçbirini devralmadım; beşi de **bugünkü koşunun kendi logundan**.

| nerede yazıyor | yazan | ÖLÇÜLEN |
|---|---|---|
| brifingim (M-2038) | "motor **187** nehir parçası kullanıyor" | **293 parça · 211 adlı akarsu** |
| `CLAUDE.md:150` | "**89** göl çıkarılır" | **705 büyük göl** |
| `uret_petek.py:636` yorumu | "Range/mtn **127** · Plateau 34 · Gorge 2" | **275 dağ sırası** |
| `uret_petek.py:888` yorumu | çöl tavanı "**YAPISAL OLARAK hiçbir şey kesemez**" | **60 petek kısaldı · 1.297.338 km²** |
| brifingim | "**61** idarî bölge" | **77 bölge** |

📌 Beşi de dünya penceresi açıldıktan (`box(-180,-60,180,85)`) sonra bayatlamış.
Sayılar **kodda dinamik**, yalnız yorumlar/belgeler eski — yani kusur ölçümde
değil **anlatıda**. Ama `:888`in bayatlığı ayrı bir sınıf: orada *"bu mekanizma
hiçbir şey yapmıyor"* deniyor ve bugün **1,3 milyon km² kesiyor.**

---

## 1. `§①` — HANGİ TOPOĞRAFİK UNSUR MOTORA GİRİYOR

Emre'nin **1. derece (şart)** listesi: deniz · göl · dağ · tepe · nehir · çay.

| unsur | kaynak dosya | motorda nerede | bugünkü koşu |
|---|---|---|---|
| **deniz/kıyı** | `ne_10m_land.geojson` | `Kara maskesi` (:461) + `Kıyı kesimi` (:1849) | ✓ her hücre × KARA |
| **göl** | `ne_10m_lakes.geojson` | `Göller` (:489) — KARA'dan çıkarılıyor | ✓ **705** göl |
| **nehir/çay** | `ne_10m_rivers.geojson` | `Nehir yatakları` (:529) → yaslama hedefi ①, menzil **0,30°≈33 km** | ✓ **293** parça |
| **dağ/tepe (sırt)** | `ne_10m_geography_regions_polys` | `Dağ sırtları` (:624) → yaslama hedefi ②, menzil **0,35°≈39 km** | ✓ **275** sırt |
| **eğim (DEM)** | `yukseklik/etopo2022_30s_*.tif` (818 MB) | `eğim yüzeyi` (:2126) → sürtünme `1+0,005·∇z` | ✓ medyan **1,111** · en pahalı **11,75** |

⇒ **1. derecenin dördü de motorda ve dördü de bugün ÇALIŞIYOR.** `§①` bu
tanecikte **ödenmiş.**

**2. derece** (Emre: *"iyi olur, çok önemli değil"*):

| unsur | durum |
|---|---|
| plato · geçit · bataklık | ✓ 7 Ağustos'ta engel sınıfına eklendi (`ENGEL_SINIFI`) |
| çöl | ✓ AYRI mekanizma: `Çöl tavanı` (:2613), **58 poligon** |
| ova (`Plain` 30) · bozkır (`Geoarea` 43) | 🔴 **BİLEREK DIŞARIDA** — kodda gerekçeli: ova engel değil, bozkır **koridordur** |
| orman | 🔴 **KAYNAK YOK** — `veri-kaynak/`ta orman dosyası yok |
| tundra (4) · vadi (6) · havza (9) · alçak ova (5) | 🟡 kaynakta VAR, motorda kullanılmıyor |

### 🔴 VE BİR YANLIŞ ÇIKARIMDAN DÖNDÜM — logun kendisi durdurdu
Koşu logunda şu satırı gördüm:
```
eğimsiz erişilen 5,882,410 · eğimli erişilen 5,882,410 ✓ AYNI
```
*"DEM'in etkisi sıfır"* diye yazacaktım. **Bir sonraki satır:**
```
ızgarada sahibi değişen hücre: 492,164 (8.37% · ÖNGÖRÜ ~166.966 / %4,97)
① EĞİM ETKİSİ: 18 parçanın ızgara cevabını eğim değiştirdi, 108,197 km²
```
⇒ Eşit olan **erişilebilir hücre kümesi**, sahiplik DEĞİL. DEM sahipliği
**%8,37 hücrede** değiştiriyor ve 18 parça / 108.197 km² fiilen el değiştirdi.
📌 Ve motorun kendi öngörüsü (%4,97) **çürüdü**: gerçek etki 1,7 KAT büyük.
Bu, bu gecenin koşusunda yaşayan bir öngörü-çürümesi; kayda geçiriyorum.

---

## 2. `§③` — BÖLGELER NEYE YASLANIYOR? **ÖLÇÜLDÜ**

Emre'nin şartı: *"arada nehir, dağ gibi yapılar varsa ya da göl, deniz varsa
sınırlar bu engellere dayanır."*

**Yöntem:** motorun KENDİ süzgeçleriyle nehir/sırt hatlarını kurdum, sonra
yayındaki sınırları örnekleyip her örnek noktanın doğal hatta uzaklığını
ölçtüm. *"Hat üzerinde"* eşiği **0,02° ≈ 2 km**.

```
PETEK sınırı   66.823 örnek · 604 halka   NEHİR %1,1 · SIRT %4,3 · TOPLAM %5,4
BÖLGE sınırı   22.727 örnek · 77 bölge    NEHİR %0,4 · SIRT %2,2 · TOPLAM %2,6
```

### 🔴 BULGU: BÖLGE, PETEĞİN YASLANMASININ YARISINI KAYBEDİYOR (%5,4 → %2,6)

Sebep kodda görünüyor — `bolgeler.js` üretimi (`uret_petek.py:3727`):
```python
bg = unary_union([PETEK_D[j] for j in _uyeler[ad]])
bg = poligonal(delikleri_doldur(kapat(bg)).intersection(KARA))
```
⇒ Bölge sınırı **topoğrafyadan DOĞRUDAN gelmiyor**: peteklerden **miras
alıyor**, sonra `kapat(yaricap=0,15°≈17 km)` morfolojik kapaması ve
`delikleri_doldur()` uygulanıyor. İkisi de **içbükey ayrıntıyı doldurur** —
ve nehir/vadi kıvrımı tam olarak içbükey ayrıntıdır.

**HÜKÜM:** `§③` bugün **dolaylı olarak** karşılanıyor (petek yaslanıyor,
bölge miras alıyor) ama **hiçbir yerde bölge katmanı için AYRICA
uygulanmıyor** — ve mirasın yarısı kapama sırasında siliniyor.

---

## 3. `§③`ÜN ASIL SORUSU: **VERİ Mİ, KOD MU?**

Brifingin `§7 KADEME 1` desenini aramamı istedi (*"veri duruyordu, süzgeç
geçirmiyordu"*). Ölçtüm — **desen KISMEN var, ve sınırı sayıyla belli.**

Aynı 26.968 petek sınır noktası, iki nehir kümesiyle:

| küme | nedir | hat ÜZERİNDE (<0,02°) | MENZİLDE (<0,30°) |
|---|---|---|---|
| **DAR** | motorun kullandığı, `scalerank ≤ 5` → **293** parça | %1,1 | **%7,0** |
| **TAM** | dosyanın tamamı → **1454** parça | %3,2 | **%25,5** |

```
SÜZGECİ AÇMAKLA KAZANILACAK MENZİL TAVANI :  %7,0 → %25,5   (+18,5 puan, 3,6 KAT)
HİÇBİR NEHRE 33 km KADAR YAKIN OLMAYAN    :  %74,5          ← COĞRAFÎ TAVAN
```

### 🟢 VE MOTOR BUNU ZATEN BİR KEZ YAPMIŞ — başka bir amaçla
`Çöl tavanı` aşaması (:2641) su muafiyeti için **dosyanın TAMAMINI** okuyor
(**1454 akarsu parçası + kıyı**) ve kodun kendi yorumu gerekçesini yazıyor:
> *"SU KÜMESİ, MOTORUN YASLAMA KÜMESİ DEĞİLDİR — ölçülerek ayrıldı… muafiyet
> 'burada su var mı' diye soruyor, 'motor buraya yaslanıyor mu' diye değil."*

⇒ Aynı dosya, aynı koşuda, **iki farklı eşikle** okunuyor: yaslama için 293,
su muafiyeti için 1454. **Veri zaten orada ve zaten yükleniyor.**

---

## 4. ÖNERİ — üç kalem, ikisi KOD biri VERİ

### 🟢 ÖNERİ 1 (KOD · ucuz · ölçülü) — yaslama nehir eşiğini kademelendir
`NEHIR_ONEM_ESIGI = 5.0` tek sayı. Ölçüm diyor ki 6'ya çıkmak pencerede
267'ye fırlatıyor (kodun kendi notu: *"gürültü başlıyor"*). Ama **eşik ile
MENZİL birlikte ayarlanabilir**: küçük akarsu için daha DAR yaslama menzili.
```
öneri:  scalerank ≤5 → menzil 0,30°   (bugünkü davranış, aynen)
        scalerank 6-7 → menzil 0,08° (≈9 km) — yalnız ÇOK yakınsa yaslan
kazanç: menzil tavanı %7,0 → en çok %25,5 · gürültü riski dar menzille sınırlı
sınav : `_YASLAMA_IPTAL` sayısı (bugün 164) patlarsa eşik yanlıştır
```
⚠️ **ÖLÇMEDİM:** kademeli menzilin gerçek kazancını; yalnız TAVANI ölçtüm.

### 🟢 ÖNERİ 2 (KOD · `§③`ün asıl açığı) — bölge katmanı yaslamayı KORUSUN
Bugün `kapat(0,15°)` peteğin yaslanmış içbükey ayrıntısını dolduruyor
(%5,4 → %2,6). İki seçenek:
```
(a) bölge için kapama yarıçapını KÜÇÜLT (0,15° → 0,05°) — ayrıntı korunur,
    ama "kopuk ada" derdi (İnegöl vakası) geri gelebilir
(b) kapamayı yalnız GEÇEKTEN KOPUK parçalara uygula, bitişik gövdede
    kapama yapma
```
⚠️ ÖNERİ, KARAR DEĞİL: (a) kodun kendi gerekçesini (1299 İnegöl adası)
zayıflatabilir. **Sınavı önceden yazıyorum:** değişiklikten sonra
*"bölge yaslanması %2,6 → ?"* VE *"kopuk bölge parçası sayısı"* birlikte
ölçülmeli; ikincisi artıyorsa (a) yanlıştır.

### 🟡 ÖNERİ 3 (VERİ) — orman ve ayrıntılı sırt
```
ORMAN     kaynak YOK. Emre 2. derece saydı ("çok önemli değil").
          Öneri: ŞİMDİLİK AÇMA — 1. derece bitmeden 2. dereceye geçmek
          `ONCELIK.md` çöl seyyahı ilkesine aykırı.
DAĞ SIRTI bugünkü sırt hattı, Natural Earth'ün ELLE ÇİZİLMİŞ adlandırılmış
          bölge poligonunun 0,12° içeri aşındırılmış SINIRI — gerçek bir
          su bölümü çizgisi DEĞİL. Oysa depoda 30 ark-saniyelik DEM VAR
          ve şu an yalnız EĞİM ÇARPANI için kullanılıyor.
          ⇒ Gerçek sırt/su-bölümü hattı DEM'den TÜRETİLEBİLİR. Bu bir
            VERİ eksiği değil, KULLANILMAYAN VERİ.
```
🔴 **Ve `§③` için en büyük kazanç muhtemelen burada:** sırt bugün yaslamanın
%4,3'ünü taşıyor (nehrin dört katı). DEM'den türetilmiş gerçek sırt hattı
hem daha çok hem daha DOĞRU yerde olurdu.
⚠️ **ÖLÇMEDİM:** DEM'den sırt türetmenin maliyetini (818 MB raster üzerinde
akış-birikim hesabı) — bu ayrı bir ölçüm işidir, önermiyorum, **işaret
ediyorum.**

---

## 5. ÖLÇMEDİKLERİM — açıkça

- **Yaslamanın NİYETİ ile SONUCU arasındaki fark.** Motor 0,30° menzille
  ÇEKİYOR; ben 0,02° ile *"hat üzerinde mi"* diye sordum. Çekilmiş ama tam
  oturmamış kenar bende **yaslanmamış** sayıldı. Gerçek "etkilenmiş" oran
  daha yüksektir; ölçmedim.
- **Ad listesinin katkısı.** Benim DAR kümem yalnız `scalerank ≤ 5` (263
  parça, pencerede); motorunki ad listesini de katıyor (**293**). Yani
  DAR ölçümüm motorunkinden bir tık dar.
- **Petek örneklemi** ilk 600 parça (6392'den). Coğrafî yanlılık ölçmedim.
- **`kapat()` hipotezini deneyle sınamadım** — kodu okuyup çıkarım yaptım.
  Kesin kanıt, yarıçapı düşürüp yeniden ölçmektir; koda dokunmadım.

## 6. KENDİ HATAM — kayda geçiyor
Petek ölçümünü ilk turda **eksen sırası ters** yaptım (`[lat,lon]` sandım,
veri `[lon,lat]`) ve **%1,3** diye yanlış bir sayı ürettim. Örnek koordinat
`[29.567, 40.408]`in Bursa'ya (29,5°D / 40,4°K) denk geldiğini görünce
yakaladım; düzeltince **%5,4**. Bölge ölçümünde aynı hatayı yapıp yapmadığımı
ayrıca doğruladım (Adana bölgesi halkası `[33.9, 37.0]` → lon 33,9 / lat 37,0,
merkeziyle tutarlı) — **orada hata yoktu.**
📌 Ders: aynı depoda iki dosya aynı eksen sırasını kullanıyor olabilir ama
bunu **varsaymak** bir ölçümü sessizce dörtte bire indirdi.
