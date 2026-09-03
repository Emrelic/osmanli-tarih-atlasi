# DÜNYA YERLEŞİM PROGRAMI — 1281-1923, bütün dünya

> **Emre'nin kararı, 3 Eylül 2026:** *"Tüm dünyanın yerleşimlerini
> bitirelim artık. 1281 yılından itibaren başlayarak 1923 yılına kadar
> gelecek şekilde, bütün dünyada bu yıllarda nerede hangi yerleşim var
> ise hepsini yerleştir."*

---

## 🔴 ÖNCE ÖLÇÜT — yoksa "hepsi" bitmeyen bir listedir

O çağda dünyada **yüz binlerce köy** vardı ve atlas onları çizmiyor.
Atlasın ihtiyacı **tamlık değil KAPSAMA**dır, ve sebebi `CLAUDE.md §2`:

> *Noktası olmayan bölge, en yakın peteğe emilir ve **O PETEĞİN
> SAHİBİYLE** boyanır.*

⇒ Ölçüt **motorun kendi parametresinden** gelir:
```
TAVAN_KM = 200 (bütün kademeler)  ⇒  bir nokta en çok ~200 km'ye uzanır
BOŞLUK   = en yakın noktası 200 km'den UZAK kara hücresi
           ⇒ hiçbir peteğe girmez ⇒ HARİTADA BOYANMAZ
```
Bu ölçüt **bitirilebilir**: sayısı var, ve her yeni nokta onu düşürür.

**Alet:** `py arac/_dunya_bosluk.py 2.0`
🔴 `ne_10m_land.geojson` kullanır, `motor_kara.geojson` **DEĞİL** —
ikincisi motorun ÇIKTISIDIR ve zaten tavanla biçimlenmiştir; onunla
boşluk aramak *boşlukları eleyen maskeyle boşluk aramaktır.*
(OPUS HAZIR KITA 120 ölçtü: 5.456 ↔ 10.857 hücre.)

---

## 🔴 BUGÜNKÜ TABAN — 3 Eylül 2026 · 2731 nokta · ızgara 2°

```
BÖLGE                        kara     AÇIK        %   en uzak
Avrupa                        250        0     0,0%     167 km  🟢 BİTTİ
Anadolu+Levant+İran           146        3     2,1%     246 km  🟢 BİTTİ
Orta Asya                     136       17    12,5%     368 km  🟡
Güneydoğu Asya                107       14    13,1%     563 km  🟡
Arabistan                      96       18    18,8%     414 km  🟡
Güney Asya                    126       26    20,6%     526 km  🟡
Doğu Asya                     317       87    27,4%     579 km  🔴
Moğolistan+Tibet              298       93    31,2%     562 km  🔴
Orta Amerika+Karayip           54       17    31,5%     645 km  🔴
Kuzey Afrika                  160       54    33,8%    1125 km  🔴
Sibirya+Ural                  515      275    53,4%     553 km  🔴
Sahra altı Afrika             468      275    58,8%    1368 km  🔴
Uzak Doğu Sibirya              97       63    64,9%     435 km  🔴
Güney Amerika                 385      281    73,0%    1941 km  🔴
Yeni Gine+Okyanusya            75       56    74,7%    1241 km  🔴
Kuzey Amerika                 692      575    83,1%    2431 km  🔴
Avustralya                    177      151    85,3%    1071 km  🔴
─────────────────────────────────────────────────────────────
TOPLAM                       4099     2005    48,9%
```

**Dünya karasının yarısı boyanmıyor.** Ve Avrupa'nın %0'ı bunun
bitirilebilir olduğunu gösteriyor — orası da bir zamanlar %100'dü.

---

## 🔴🔴 EMRE'NİN BAĞLAYICI HÜKMÜ — bu programın ana kuralı

> **"EĞER YERLEŞİM VAR İSE NOKTA KONUR. YOK İSE UYDURACAK HALİMİZ YOK.
> DEVASA BOŞLUKLAR OLACAKSA OLSUN."**

⇒ Hedef **%0 değildir.** Bazı hücreler kapanmayacak ve **kapanmaması
doğru olacak**: Sahra'nın içi, Rub'ul Hâlî, Avustralya çölü, Grönland,
Sibirya tundrası, Amazon'un derinliği.

**Her açık hücre iki yoldan biriyle kapanır:**
```
① KAYNAKLI NOKTA   o hücrede 1281-1923 arası bir yerleşim VARDI
② BEYAN            yoktu — `kasitli_bosluk:true` + `bos:` + `neden:`
```

### 🔴 BU BÖLÜM 3 EYLÜL'DE DÜZELTİLDİ — ilk hâlinde ÜÇ YANLIŞ vardı
`DUNYA-OKYANUSYA-0903` ölçtü ve **altı oturumu birden** bağlayan bir
kusuru daha ilk saatte yakaladı. İlk hâli şöyleydi ve **üçü de yanlıştı**:
> ~~*"CİNSİ yazılır: `neden:"devletsiz"` · `neden:"veri-yok"`"*~~
> ~~*"Bugün 97 noktanın cinsi yazılı değil; o borcu büyütmeyin."*~~

```
① YANLIŞ ALAN   cins `neden:`e değil `bos:`a yazılır
   girdi.py:831  "bos": "boşluğun CİNSİ: devletsiz | veri-yok | kabile |
                         insansiz | hata"
   girdi.py:840  "neden": "kasitli_bosluk'un gerekçesi — niçin kasten boş"
   ÖLÇÜM: 201 kaydın 201'i `bos:` kullanıyor · `neden:`e cins yazan 0
② EKSİK KOVA    İKİ değil BEŞ kova var
   devletsiz 120 · kabile 51 · veri-yok 14 · insansiz 9 · hata 7
③ BAYAT BORÇ    "97 noktanın cinsi yazılmamış" — ÖLÇÜM: 0. BORÇ ÖDENMİŞ.
   O sayı 10 Ağustos kaydından; `bos:` alanı 12 Ağustos'ta doğmuş.
   ⇒ 3 Eylül şartnamesine İKİ GÜN ÖNCESİNİN sayısı kopyalanmış.
```

🔴 **VE KÖKÜ BENİM ŞARTNAMEMDE DEĞİL:** `arac/denetle.py:262-268`
yorumu hâlâ eski anlatıyı (`neden:"devletsiz"`) yazıyor, ve
`CLAUDE.md §11`in Sibirya dersi de öyle. Ders **doğru**, alan adı
**yanlış** — ve o yanlış yorumdan belgeye, belgeden şartnameye,
şartnameden altı oturuma yayıldı.
📌 `§11`in *"bir ders veriye SERBEST METİN olarak inerse inmiş
sayılmaz"* dersinin **ters yüzü**: burada ders veriye doğru inmişti
(`bos:` alanı var ve 201 kayıt kullanıyor), **anlatı** geride kalmıştı.

### DOĞRU BİÇİM
```javascript
kasitli_bosluk:true,
bos:"devletsiz",          // BEŞ kovadan biri — cins BURAYA
neden:"TDV `x` maddesi: '...' — merkezî devlet tarif etmiyor",  // GEREKÇE
```
```
devletsiz   kaynak AÇIKÇA konuşuyor: "burada merkezî devlet yoktu"
            🔴 Bu bir İDDİADIR ve kaynak ister
veri-yok    kaynak SUSUYOR — fetih öncesini hiç tartışmıyor
kabile      kaynak SUSMUYOR ama merkezî devlet de TARİF ETMİYOR —
            klan/iwi/hapu/boy örgütlenmesi anlatıyor
            ⚠️ Aborijin · Māori · Kuzey Amerika yerli toplumları
            çoğunlukla BURAYA girer; `devletsiz` demek onları YANLIŞ
            işler, `veri-yok` demek ARAŞTIRILMAMIŞ gösterir
insansiz    yerleşim yok (buzul · iç çöl · yüksek plato)
hata        veri kusuru — düzeltilecek, kalıcı beyan DEĞİL
```
⚠️ Beşi de haritada aynı görünür; fark **bir sonraki oturum içindir.**
🔴 **Cinsi yazılmamış boşluk kabul edilmez** — ve `neden:`e cins
yazarsan `denetle.py` onu **cinsi yazılmamış sayar**: beyan yazılır,
makine görmez. (Timbuktu vakasının aynısı, `§11`.)

---

## DALGALAR — sıra tesadüf değil

Sıra **en boş** olana göre değil, **en çok YALAN ÜRETENE** göre:
`§2` gereği bir boşluk, kalabalık bir komşusu varsa onun sahibiyle
boyanır. Issız boşluk yalnız boş kalır; **komşulu boşluk yanlış boyanır.**

```
DALGA 1 (şimdi)   Kuzey Amerika · Güney Amerika · Sahra altı Afrika ·
                  Sibirya+Ural · Avustralya+Okyanusya · Moğolistan+Tibet
DALGA 2           Doğu Asya · Kuzey Afrika · Uzak Doğu Sibirya ·
                  Orta Amerika+Karayip
DALGA 3           Güney Asya · Arabistan · Güneydoğu Asya · Orta Asya
                  (dördü de 🟡 — tamamlama işi)
```

---

## HER OTURUMUN İŞİ — beş adım, sırayla

```
① KUTUNU İLAN ET      py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT"
                      --mesaj "KUTU: <bölge> · <G>-<K>K / <B>-<D>D"
   🔴 KUTUSU YAZILMAMIŞ NOKTA KOLU AÇILMAZ. Bugün üç mükerrer koşu
      öldürücüsü çıktı (`el-Ulâ` üç ayrı çift).

② BOŞLUĞU ÖLÇ        py arac/_dunya_bosluk.py 2.0   → kendi bölgen
   Sonra 1° ızgarayla daralt: hangi hücreler, nerede?

③ HER AÇIK HÜCRE İÇİN — kaynağa sor
   🟢 KABUL   Cambridge History · üniversite yayını · hakemli makale ·
              alanın standart el kitabı · birincil kaynak neşri
   🔴 ASLA    forum · blog · içerik çiftliği · kaynaksız derleme ·
              yapay zekâ üretimi metin · popüler "tarih sayfası"
   🟡 Vikipedi TEK DAYANAK DEĞİL — yalnız "hangi maddeye bakayım"
   TDV kapsıyorsa ÖNCE TDV (`§4`). Kapsamıyorsa ya da o TANECİKTE
   susuyorsa akademik kaynak MEŞRU — şartı `kaynak:`a AÇIKÇA yazmak.

④ ARARKEN ALTI EKSEN — altısı da bugün gerçek kayıp üretti
   ① YIL BİÇİMİ   düz `1395`, kaynağın "1394-95"inde YOKTUR
   ② TAKVİM       kaynak hicrî verebilir (797 · 982 · 998)
   ③ SLUG YAZIMI  `anadolu-hisari` boilerplate; canlısı TİRESİZ
   ④ CÜMLE KALIBI "İstanbul antlaşması" ≠ "İstanbul'DA YAPILAN antlaşma"
   ⑤ NOKTALAMA    TDV tipografik kesme (U+2019 ’) kullanır
   ⑥ OLMAYAN ALAN  aradığın alan yoksa sonuç `0` çıkar ve SESSİZDİR
   + TÜRKÇE YAZIM  `usku` ≠ `Üsküp` · `Buda` ≠ `Budin`

⑤ YAZMADAN ÖNCE ÜÇ SINAV
   py arac/_baglama_onsinav.py <dosyan.js>
   ① 3 KM  bağlı evrende VE kuyrukta bekleyenlerde
   ② AD    🔴 `girdi.yukle` ValueError ATAR — MOTOR HİÇ BAŞLAMAZ
   ③ KUTU  senin kutun başkasınınkiyle örtüşüyor mu
```

## YAZMA YETKİSİ
```
🟢 SENİN   data/<sana verilen dosya>.js   ← ad alanı da SENİN:
           window.<AD_ALANI>  (dosya adındaki ayırt edici parça
           değişken adında da olacak — "ayrı dosya vermek ayrı ad
           alanı vermek DEĞİLDİR", beş dosya tek ad kullanıp %74
           kayıp riski üretmişti)
           denetim/<kendi raporun>.md
🔴 DEĞİL   başka her şey. `girdi.py`ye BAĞLAMA — koordinatör bağlar.
```
🔴 **KOŞU SÜRERKEN `data/` VE `arac/` İKİSİ DE DONMUŞTUR.** Motor
*"girdi dosyaları SERBEST"* diye bir satır basar; o **yarım doğrudur** —
yazmak koşuyu öldürmez ama **çıktıyı yayınlanamaz hâle getirir.** Dünkü
10,5 saatlik koşu tam bu yüzden yayınlanamadı. Koşu durumunu bana sor.

## BİTİŞ ÖLÇÜTÜ
```
① bölgenin AÇIK hücre sayısı ölçüldü (önce/sonra)
② her açık hücre için: KAYNAKLI NOKTA ya da CİNSİ YAZILI BEYAN
③ her kaydın `kaynak:` alanı DOLU (ya da açıkça `bulunamadı`)
④ her `s:` kimliği `devletler.js`te VAR ve ömrü TUTUYOR (hayalet yok)
⑤ `_baglama_onsinav.py` KIRMIZI 0
```
**Teslim SAYIYLA:** *"575 → 210, kalan 365'in 300'ü `devletsiz` diye
kapandı, 65'i için kaynak bulunamadı"* — *"bitirdim"* değil.

## HABERLEŞME
```bash
py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT" --mesaj "..."
```
Tam anahtar **1.MURAT** (uzun ad ötmüyor). Yatay mesaj serbest, şartı
tahtadan geçmesi. ⚠️ Tahta mesaj kaybedebiliyor — kritik bir şey
yazdıysan `tahta.json`dan **geri okuyup kendi kaydını ara.**

**AKSAKLIK BEKLEMEZ:** kaynaklar çelişiyorsa · şartname yanlış çıktıysa ·
beklenenden çok farklı bir sayı ölçtüysen → **bekletmeden** yaz.
**Ölçmediğini `ölçmedim`, bulamadığını `bulunamadı` diye YAZ.**

## DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım, yeni iş bekliyorum."
⏳ "BEKLİYORUM: <ne> · <kimden> · <ne zaman tekrar bakacağım>"
```

---

# 🔴 3 EYLÜL — BEŞ KURAL DAHA, hepsi ÖLÇÜLEREK doğdu

> ⚠️ **BRİFİNGİNİZ BU DOSYA DEĞİL, BU DOSYANIN AÇILIŞ ANINDAKİ
> FOTOĞRAFIDIR.** Bir sayıyı ya da kuralı işe dönüştürmeden önce
> **buraya bakın**; çeliştiğinde **dosya kazanır.**
> *(Doğuran vaka: `DUNYA-AFRIKA-0903` şartnamedeki "97 nokta" borcunu
> ölçüp çürüttü — oysa dosya aynı gün düzeltilmişti. Kusur işçide
> değil KANALDA: dosyayı düzeltmek, o dosyayla açılmış oturumun
> elindeki kopyayı düzeltmiyor.)*

## ① KİMLİK KAPISI — bir nokta ÜÇ kapıdan geçmeden hücre kapatmaz
```
① künye VAR MI       data/devletler.js   yoksa → §3.5 HAYALET
② rengi VAR MI       arac/renkler.py     yoksa → §8 BOYANMAZ
③ ömür KAPSIYOR MU   künye f/t dönemi içeriyor mu
```
🔴 **Kimliği boyanamayan bir nokta petek ÜRETİR ama HİÇBİR ŞEY
BOYAMAZ** — boşluk kapanmış *görünür*, harita **aynı kalır**, ve
kapanma sayısı **yalan** olur. Bu sessiz bir yanlıştır: denetim temiz
raporlar. *(DUNYA-KAMERIKA-0903 ölçtü.)*
🟢 Sınavı siz koşturmayın, **koordinatöre gönderin** — üç oturumun üç
ayrı doğrulayıcı yazması, üç ayrı kör nokta demektir.

⚠️ **KÜNYE VAR AMA RENGİ YOK olan 26 kimlik ölçüldü** ve bugün hiçbiri
veride kullanılmıyor — yani kusur değil, **sessiz borç.** Ama sizin
zincirleriniz kullanacak:
```
avusturya-cumhuriyet · bohemya · bosna-isgal · cezayir-fransiz ·
cezayir-ocagi · dubrovnik · erdel · fransiz-misir-seferi · garbi-trakya ·
girit-devleti · hersek · jin-hanedani · kasim · kibris-ingiliz · kuveyt ·
mogol-imparatorlugu · mora-despotlugu · naksa-dukaligi · oniki-ada-italyan ·
polonya-erken · sarki-rumeli · song · tbmm-turkiye · trablusgarp-ocagi ·
tunus-ocagi · zeta
```
Zincirinizde biri geçerse **ayrı bildirin.** Kimliği değiştirmeyin.

## ② ÜÇ HANELİ YIL — dört haneye doldurmadan tarih kıyası YAPMA
```
fransa f="987-01-01"  ·  almanya f="962-02-02"  ·  bizans f="330-05-11"
sözlüksel:  "1659-01-01" < "987-01-01"  →  TRUE   ('1' < '9')
```
**Evren 17 künye:** bizans 330 · nube 543 · sunda-pajajaran 669 ·
venedik 697 · dubrovnik 700 · papalik 756 · kanem-bornu 800 ·
navarra 824 · iskocya 843 · pagan 849 · sirvansah 861 · yemen-zeydi 897 ·
goryeo 918 · bretanya 939 · song 960 · almanya 962 · poni 977 · fransa 987

🔴 **Üç oturum aynı gün bağımsız olarak bu tuzağa düştü** (AFRIKA 42
sahte ihlal · OKYANUSYA 2 · koordinatör 1). Üçü de **gürültülü**
bozuldu, o yüzden farkedildi. `>` yerine `>=` gibi **sessiz** bir
bozulmada hiçbir şey ötmez ve hayalet dönemler veriye iner.
⇒ Kıyası `(yıl, ay, gün)` demetiyle yap, dizgiyle değil.

## ③ KAPANMA ÖLÇÜLÜR, ÇIKARILMAZ
```
🔴 "N aday yazdım ⇒ N hücre kapandı"        YANLIŞ
🟢 adayları koy, IZGARAYI YENİDEN TARA, kapananı SAY
```
`TAVAN_KM = 200`: bir nokta 200 km yarıçapa ulaşır ve 1° ızgarada
**birden çok** hücreye değer. `DUNYA-GAMERIKA-0903` ölçtü —
koordinatörün `1138 − 45 = 1093` çıkarması yanlıştı, gerçek
`1138 − 207 = 931`, **aday başına 4,6 hücre.**
⚠️ Oran **sabit değil**: seyrek bölgede yüksek, doygun bölgede ~1'e
iner. **Kendi kutunuzda ölçün**, başkasının oranını devralmayın.
⇒ Teslim raporunda kapanmanın **hangi yoldan** bulunduğu yazılır.

## ④ `bos:` BEŞ KOVA — beş ayrı SINAV
```
insansiz    orada KİMSE YAŞAMADI                    fizikî olgu
kabile      yaşadı, örgütlüydü, ama boyanabilir bir toprak tasarrufu YOK
            (adlı bir konfederasyon varsa BU kova)
devletsiz   yaşadı, kaynak AÇIKÇA "devlet otoritesi yoktu" diyor
veri-yok    kaynak SUSUYOR
hata        bilinen veri kusuru
```
⚠️ Cins **`bos:` alanına** yazılır, `neden:`e değil. `neden:` gerekçenin
serbest metnidir.
⚠️ Ve bir beyanı kapatmadan önce **komşu beyanlara bak**: 200 km'den
yakın bir nokta yazarsan beyan **bayatlar** ve nöbetçi öter.

## ⑤ SÖMÜRGE KİMLİĞİ — metropolün kimliği, ta ki ANAYASAL BELGEYE kadar
```
İLKE: SÖMÜRGE = metropolün kimliği. Kendi kimliği, o toprağın
      DOMİNYON STATÜSÜNÜ kazandığı belge ya da proklamasyonla başlar.
Kanada     British North America Act      1867-07-01
Avustralya Commonwealth Constitution Act  1901-01-01
Y. Zelanda Dominyon proklamasyonu         1907-09-26
```

> 🔴 **BU İLKENİN İLK YAZIMI YANLIŞTI ve `DUNYA-OKYANUSYA-0903` onu
> ölçerek çürüttü — aynı gün, yazılmasından yarım saat sonra.**
> İlk hâli *"TEK ve KENDİ KENDİNİ YÖNETEN bir siyasî bütün hâline
> geldiği ANAYASAL BELGE"* diyordu. İki bileşen Kanada ve
> Avustralya'da **aynı belgede çakışıyor**, Yeni Zelanda'da
> **üç ayrı tarihe dağılıyor:**
> ```
> (a) TEK bütün olmak        1841-05-03  (zaten tek koloni, federasyon YOK)
> (b) kendi kendini yönetmek 1856-05-07  (ilk sorumlu hükûmet, Sewell)
> dominyon statüsü           1907-09-26
> NZ'nin ANAYASAL BELGESİ 1852'dir; 1907 bir PROKLAMASYONDUR ve
> "there was no tangible political or legal shift" (NZ History, resmî)
> ```
> ⇒ Eski yazım NZ için **1856'yı** üretirdi, yani savunduğu kararı
> **üretmiyordu.** Karar (1907-09-26) doğrulandı ve KALDI; değişen
> **gerekçenin yazımı.**
>
> 📌 ***Bir ilke, savunduğu kararı ÜRETMİYORSA ilke değil, sonradan
> yazılmış bir gerekçedir.*** Ve tehlikesi şu: karar doğru olduğu için
> kimse ilkeyi sınamaz — ta ki bir sonraki oturum onu **başka bir
> vakaya uygulayana** kadar.
> ⚠️ Kaynak da tartışmayı kapatmıyor: NZ Parlamentosu'nun kendi
> araştırma raporunun **başlığı** *"New Zealand sovereignty: 1857,
> 1907, 1947, or 1987?"* — dört aday var. Seçimimiz **üç dominyonu
> aynı ölçütle tutmaktır**, mutlak doğruluk iddiası değil.
⇒ Ayrı koloni künyesi **açılmaz** (NSW · Victoria · Cape · Van Diemen…);
hepsi `ingiltere`. Şirket toprağı da öyle: **HBC bir şirkettir, atlas
TASARRUFU boyar ve tasarruf tacındı** ⇒ `ingiliz-kuzey-amerika`.

## ⑥ YERLİ KİMLİK TANECİĞİ — HALK ya da KONFEDERASYON
Atlasın kendi emsali karar veriyor: `haudenosaunee · powhatan · cherokee ·
choctaw · natchez · komanci · apaci-ovalar · creek-konfederasyonu ·
pueblo-bagimsizligi`.
```
🟢 Lakota · Navaho · Kri · Ojibwe · Tlingit · İnuit · Dene · tsvana …
🔴 "Subarktik halkları" · "Ova kabileleri"   kültür alanı — FAZLA KABA
🔴 Hunkpapa · Oglala                          klan          — FAZLA İNCE
```
⚠️ **Künye ile `bos:"kabile"` farklı şeylerdir.** Kaynak o halkın
belirli bir toprağı **denetlediğini** söylüyorsa künye; *"şu bölgede
yaşarlardı"* diyorsa `bos:"kabile"`.

## ⑦ VE BİR ZİNCİRİN DENETİMİ GEÇMESİ, DOĞRU OLDUĞU ANLAMINA GELMEZ
`DUNYA-AFRIKA-0903` son anda durdurdu: Monrovia ve Harper'a `ingiltere`
yazılmıştı. Liberya **1847'den beri bağımsız**, hiç İngiliz kolonisi
olmadı.
```
künye canlı ✓ · ömür kapsıyor ✓ · renk var ✓  ⇒  DENETİM TEMİZ DER
harita ise Liberya'yı bir asır Britanya boyardı
```
📌 Üç kapı da **biçimseldir**; **tarihî doğruluğu hiçbiri ölçmez.**
Onu yalnız kaynağı okumak verir.

---

# 🔴🔴 BİTİŞ ÖLÇÜTÜ 3 EYLÜL ÖĞLEDEN SONRA İKİ KEZ DEĞİŞTİ
*(ikisini de işçi oturumlar ölçerek buldurdu — `DUNYA-AFRIKA-0903`,
`DUNYA-OKYANUSYA-0903`, `DUNYA-SIBIRYA-0903`)*

## ⑧ ÖLÇÜT ZAMAN KÖRÜ — `hücre` değil `hücre·yıl`

`arac/_dunya_bosluk.py` `kur:` alanına **bakmaz**, noktayı 1281'den
1923'e var sayar. **Motor bakar:** `petek_epok()` `kur:`dan önce
peteği komşuya devreder.
⇒ Sömürge dönemi kasabalarıyla dolan bir kutu *"zamansız"* ölçütte
**bitmiş** görünür ve kullanıcı zaman çubuğunu 1400'e çektiğinde
**boş** olur.

**Ölçüldü — ve şiddeti bölgeye değil ADAYIN CİNSİNE bağlı:**
```
                      zamansız   erken kesit    fark
dünya (2°, canlı)         2005    1300: 2257    +252
Kuzey Afrika (kadîm vaha)   87    1400:   90    FARK YOK
Sahra altı (sömürge)        66    1400:  750    +684
Sibirya (ostrog)           205    1300:  351    +146
Okyanusya (1788 sonrası)   294    1400:  856    +562
```
🔴 **Okyanusya en keskin vaka:** atlasın 642 yılının **570'inde**
%87,5 açık, ve 69 kasaba kaydı yalnız **son 73 yıla** hizmet ediyor.

⇒ **YENİ BİRİM:**
```
ESKİ  "bu kayıt kaç hücre kapatıyor"
YENİ  "kaç hücre × KAÇ YIL"  = hücre·yıl   (kur:'dan 1923'e)
Karakurum  ~5 hücre × 642 yıl = 3210        ← 1281-1923 boyunca VARDI
Camooweal   18 hücre ×  40 yıl =  720
```
⚠️ Ve bu **sıralamayı tersine çevirebilir**: hücre sayısıyla Camooweal
önde, hücre·yıl ile Karakurum.
🟢 **Kapanma raporunuzda İKİ SAYI olsun:** kaç hücre · ve kaç yıl.

## ⑨ BİR KESİTİN «AÇIK» SAYISI ÜÇE BÖLÜNMEDEN BORÇ DEĞİLDİR

`DUNYA-SIBIRYA-0903` 1300 kesitini böldü:
```
351 açık = 253 BEYANLI (%72,1)
         +  41 ÖLÇÜLEMEDİ (Altay-Sayan 27 · Vasyugan 14)
         +  57 ARAŞTIRILMAMIŞ (%16,2)
```
⇒ Gerçek borç **351 değil 57.**
```
🟢 BEYANLI        cinsi yazılmış · cevap VERİLMİŞ   → borç DEĞİL
🟡 ÖLÇÜLEMEDİ     alet o zonu cevaplamıyor          → kalem AÇIK
🔴 ARAŞTIRILMAMIŞ hiç bakılmadı                     → GERÇEK BORÇ
```
📌 `§11`in *"ölçülemedi ≠ temiz"* kuralının boşluk yüzü — **ve tersi
de doğru: beyanlı ≠ borç.** İkisini tek sayıda toplamak, Emre'nin
*"devasa boşluklar olacaksa olsun"* hükmünü bir **kusur listesine**
çevirir.

## 🔴 VE EN ÖNEMLİSİ: AYNI SAYI İKİ BÖLGEDE İKİ AYRI ŞEY
```
Sibirya'da   1300'ün boşluğu büyük ölçüde GERÇEK — sabit yerleşim ağı
             Rus ostroglarıyla kuruldu, öncesinde kalıcı kasaba YOKTU
             ⇒ oraya nokta aramak, OLMAYAN ŞEYİ aramaktır
Afrika'da    1400'ün boşluğu KADÎM YERLEŞİM EKSİKLİĞİ olabilir —
             Timbuktu · Cenne · Kano · Gao çağında şehir VARDI
Okyanusya'da 1788 öncesi kasaba yok ⇒ kapanma NOKTAYLA değil
             BEYANLA olur; 43 beyan, 69 kasabadan DAHA ÇOK yıla hizmet eder
```
⇒ **Bu ölçüm hangi boşluğun DOĞRU, hangisinin EKSİK olduğunu
SÖYLEMEZ.** Onu ancak kaynak söyler.

## ⑩ VE BİR KAYDIN SINIFI DA ÖLÇÜLÜR, YALNIZ TARİHİ DEĞİL

`DUNYA-OKYANUSYA-0903`un en yüksek katkılı dört adayından biri
(**Tanami**, 18 hücre) ölçülünce **kasaba değilmiş** çıktı: NT
Geological Survey — altın 1900, kısa altına hücum **1932**, modern
madencilik 1986. **1281-1923 ufkunda kalıcı yerleşim YOK.**
⇒ Nokta yazılsaydı **var olmayan bir kasaba** haritaya girecekti.
14 hücresi `bos:"kabile"` (Warlpiri toprağı) ile kapanır.
📌 `M-2452`nin (*"`kur:` geriye çekilmez"*) kardeşi: orada **tarih**
uydurmaktan, burada **varlık** uydurmaktan kurtardı.

**Taban ve araç:** `denetim/BULGU-BOSLUK-EGRISI-0903.md` ·
`denetim/ARAC-BOSLUK-EGRISI-0903.py`
