# Yapılacaklar

Belge seti: `CLAUDE.md` (nasıl çalışılır) · `YOL-HARITASI.md` (nereye gidiyoruz) ·
**bu belge** (sıradaki işler) · `MIMARI.md` (motor) · `VERI-YAPISI.md` (şemalar).

Öncelik yukarıdan aşağıya. Bir iş bitince kutusunu işaretle ve `CLAUDE.md` §1.5'teki
durum tablosunu güncelle.

---

## Şimdi

---

# 🔴 YENİ DENETİM GEREKİYOR — madde ile veri birbirini tutmuyor

**Doğuran vaka (`p4/H-0006`, 3 Ağustos):** Kullanıcı gördü ve haklıydı —
kronoloji maddesi *"1502: Erzurum ve Van havzası Safevî'ye geçti"* diyordu,
**harita Erzurum'u boyamıyordu.** Van, Erciş, Kemah'ta Safevî penceresi
vardı; Erzurum'da yoktu (`akkoyunlu 1348→1515` tek parça).

🔴 **Bu bir kusur SINIFI ve bugünkü denetimlerin hiçbiri göremiyor:**
```
kronoloji tarafı  ✓ sağlıklı — madde var, tarihi var, kaynağı var
veri tarafı       ✓ sağlıklı — dönemler kesintisiz, sahipsizlik yok
ama İKİSİ BİRBİRİNİ TUTMUYOR                    ← kimse bakmıyor
```
📌 Değişmez 2 tersini denetliyor (*kırılmanın maddesi var mı*). Eksik olan
yön: **maddenin kırılması var mı.**

## Şartname — `arac/denetle_iddia.py`

```
① kronoloji maddelerinde YER ADI + EL DEĞİŞTİRME fiili ara
   ("… Safevî'ye geçti", "… Osmanlı idaresine katıldı", "… ele geçirdi")
② maddenin `yer:` alanındaki yerleşimleri çöz
③ o yerleşimlerde, maddenin tarihinde ± tolerans, kırılma VAR MI
④ yoksa: İDDİA KARŞILIKSIZ → rapor
```
⚠️ **Tolerans şart:** madde "1502 (ay ve gün kaynakta yok)" diyorsa gün
eşleşmesi aranamaz. `hassasiyet:` kalemiyle akraba.
⚠️ Yanlış pozitif beklenir (madde bir savaşı anlatır, toprak değişmez).
İlk sürüm **rapor eder, ihlal saymaz** — tavan sonra konur.

## Aynı kökten dört nokta bulundu — üçü AÇIK

```
Erzurum      ✅ DÜZELTİLDİ  akkoyunlu→1502 · safevi 1502→1518 · OSM 1518→
             TDV/erzurum: 1502 Şah İsmâil aldı, 1518-19 Osmanlı'ya katıldı
Bitlis       🔵 akkoyunlu 1467→1515-09-15 · Safevî penceresi YOK
Diyarbakır   🔵 akkoyunlu 1378→1515-09-19 · Safevî penceresi YOK
Mardin       🔵 akkoyunlu 1467→1515-09-15 · Safevî penceresi YOK
```
🔴 Üçü de Şah İsmâil'in 1507-1508 Diyarbekir harekâtıyla Safevî'ye geçmiş
olmalı, 1515'te Osmanlı'ya. **Ama TDV ile doğrulanmadan yazılmayacak** —
Erzurum'da TDV yıl verdi, ötekiler için de vermeli.
📌 Akkoyunlu Devleti fiilen 1508'de bitti; dördünün de kimliği kendi
ömrünün ötesine uzanıyordu.

# 🆕 KARTVİZİT — "NASIL BİLİRDİNİZ" (kullanıcı isteği, 3 Ağustos 2026)

> Şartname: **`PADISAH-KARTVIZITI.md`** (tam şema, üç kural, kademeler)

Hükümdarın **ölüm tarihinde** kronolojide bir kart çıkar: künye +
magazin + 🔴 `ovgu` / `yergi` / `tartisma`. Kullanıcının çerçevesi:
*"imam soruyor ya, nasıl bilirdiniz diye."*

```
K1 padişahlar            36   liste hazır (padisahlar.js)
K2 kaybeden şehzadeler  ~18   🔴 dizinde YOK, önce toplanacak
K3 valide sultanlar     ~12   🔴 dizinde YOK (hanedan yalnız 3 kayıt)
K4 sadrazamlar           20   dizinde var, kart alanı yok
K5 komutan + denizci     25   dizinde var
                        ───
                        ≈111 kart
```

⚠️ **Tek ölçüt:** kart ölüm tarihine oturur; **ölüm tarihi bilinmeyene
kart yapılamaz.** Kısıt değil, doğal filtre.
🔴 **Üç kural:** ① kart 900 karakteri geçmez ② `ovgu`+`yergi`+`tartisma`
üçü birden yazılır, biri yoksa "bulunamadı" denir ③ taraf tutulmaz,
taraflar yazılır.

📌 **Öncelik notu (`YASALAR G8`):** bu iş yeni pencere AÇMIYOR — mevcut
pencerenin içini dolduruyor, listesi SONLU, ve ölüm tarihleri zaten
kronolojide kırılma. O yüzden itiraz edilmedi ve **ANSİKLOPEDİ
EKSENİ'nin BİRİNCİ kalemi** oldu (önceki sırada "kurumlar" birinciydi).

# 🆕 EK OKUMA — sebep-sonuç · magazin · skandal (3 Ağustos 2026)

> Şartname: **`EK-OKUMA.md`** · kardeşi: **`PADISAH-KARTVIZITI.md`**

Kronoloji maddesine tıkla → özet penceresi → **[📖 EK OKUMA]
[🔗 SEBEP-SONUÇ] [🎭 MAGAZİN]** → ek okuma penceresi.

🔴 **Bu eksenin belkemiği tek bir alan: `kesinlik:`**
```
kesin · tartismali · iddia · rivayet     ← BOŞ BIRAKILAMAZ
```
Kullanıcının kendi kuralı: *"söylenti olan magazinel şeyleri tarihî
gerçek olmasından ziyade rivayet ya da magazin haberi gibi vermeliyiz."*
📌 Bu eksenin bütün cazibesi rivayetlerde, bütün riski de. Etiket
olmadan atlas **dedikodu deposu** olur; etiketle **rivayetin kendisini
de tarih olarak** gösterir. Fark bu tek alanda.

🔴 **İkinci kural, yine kullanıcının:** *"«mıymıntı» yorumu benim
yorumum, sen onu maddeye yazma."* Taraf tutulmaz, taraflar yazılır.

Kullanıcı **28 sebep-sonuç halkası** verdi ve bunlar ayrı çift değil
**tek zincir**: Fetret → kardeş katli → III. Murad'ın 100+ çocuğu →
III. Mehmed'in 19 kardeşi → tepki: ekberiyet + KAFES → tecrübesiz
padişahlar → Genç Osman'ın sonu → IV. Murad'ın demir yumruğu.
⚠️ Zincir görünmezse kartlar anekdota düşer.

# 🆕 İDARÎ KATMAN — kullanıcı isteği, 3 Ağustos 2026

> *"Bölgeleri ülke, eyalet, sancak, vilâyet şeklinde bölelim… bir idarî
> bölümleme katmanı yapalım, o katmana basınca bunlar görünsün. Vassal
> devletler, özerk yapılar da var… zaman katmanı boyutu ile değişen yapıda."*
>
> Ve `p2/H-0002`'ye verdiği cevap bu işin **yerini** tanımlıyor:
> *"Normal haritada Söğüt bölgesi göstermeyiz. Ama Söğüt sancağı ya da
> beylerbeyliği varsa **idarî haritada ayrı bir katman olarak** gösteririz."*
> ⇒ Bugünkü bölge etiketleri **ana haritadan çıkar**, bu katmana taşınır.

## 🟢 ÖNCE İYİ HABER: YARISI ZATEN KURULU — ölçüldü

```
bolgeler.js       63 bölge · 328 KB · ÜRETİLİYOR
                  her k1/k2 merkezin ÜYE PETEKLERİNİN BİRLEŞİMİ = sınır
k:  alanı         idarî kademe 0-4 (0=kademesiz · 1-2=merkez · 3-4=alt)
m:  alanı         bağlı olduğu merkez; `k12_merkez()` zinciri takip ediyor
uret_petek.py     Kural 6 bu sınırları zaten hesaplıyor (satır 1523-1561)
```

**Yani sınır üretme sorunu ÇÖZÜLMÜŞ.** Yapılacak iş sınır çıkarmak değil,
o sınırlara **ad, kademe ve ZAMAN** vermek.

## 🔴 DÖRT EKSİK — hepsi ölçüldü

```
① ZAMAN YOK        kd:[{f,t,k,m}] şeması VERI-YAPISI.md:70'te TASARLANDI
                   ama veride 0 (SIFIR) noktada kullanılıyor.
                   m: tek değer → bir sancak asırlar boyunca hep aynı
                   eyalete bağlıymış gibi görünüyor. YANLIŞ.
② KADEME ADSIZ     k:1 = 4 nokta · k:2 = 58 nokta. İkisi de "merkez"
                   diye tek torbada; hangisi EYALET hangisi SANCAK belli
                   değil. 4 tane k:1 gerçek eyalet sayısı olamaz.
③ KAPSAM YARIM     Osmanlı dönemi olan 614 noktanın 540'ında m: dolu,
                   ama k1/k2 merkez yalnız 55 tane.
④ TÂBİİYET SERBEST v: alanı 263 noktada, 305 dönem — ve etiketi
   METİN            33 AYRI SERBEST METİN. Sözlük yok, sayılamıyor.
```

## 🔴 VE BİR TARİH DÜZELTMESİ — istekteki sıralama yanlış

**Eyalet ve vilâyet ayrı kademe DEĞİL; aynı kademenin iki devri.**
TDV *EYALET*: 1864 Vilâyet Nizamnâmesi eyaletin yerine vilâyeti getirdi.

```
1864 ÖNCESİ   eyalet (beylerbeyilik) → sancak (livâ) → kaza → nahiye
1864 SONRASI  vilâyet                → sancak (mutasarrıflık) → kaza
                                     → nahiye → karye
```
📌 Bu tam da **zaman boyutunun neden şart olduğunun** kanıtı: aynı toprak
1600'de "Anadolu **eyaleti**", 1870'te "Ankara **vilâyeti**". Tek değerli
bir alan bunu yazamaz.

⚠️ Ayrıca TDV bir ayrım daha veriyor ve kullanıcının *"özerk yapılar"*
isteğine doğrudan bağlanıyor: **1609'da 32 eyaletin 23'ü timarlı, 9'u
salyaneli.** Salyaneli eyaletler (Mısır, Cezayir, Habeş, Basra, Bağdat,
Yemen…) tımar sisteminin DIŞINDAYDI — yani özerklik ayrı bir katman
değil, **eyalet türünün kendisi.**

## ŞEMA ÖNERİSİ — iki alan

```javascript
// ① zamanlı idarî bağlılık (VERI-YAPISI.md:70'teki kd: canlandırılıyor)
kd:[{ f:"1362-01-01", t:"1864-11-08", kad:"sancak", m:"Kütahya",
      tur:"timarli" },
    { f:"1864-11-08", t:"1923-10-29", kad:"sancak", m:"Konya" }]

kad:  ulke · eyalet · vilayet · sancak · kaza · nahiye
tur:  timarli · salyaneli        (yalnız eyalet/vilâyet kademesinde)

// ② tâbiiyet — 33 serbest metnin yerine KAPALI sözlük
v:[{ f:.., t:.., tabi:"ocaklik", ad:"Cezayir Ocaklığı (dayı idaresi)" }]

tabi: ocaklik · voyvodalik · prenslik · seriflik · hidiviyet
      imtiyazli-sancak · muhtar-vilayet · himaye · vassal-krallik
```
📌 `ad:` serbest kalır (okunacak metin), `tabi:` kapalı kalır (sayılacak
şey). Bugünkü 33 metin **sayılamıyor**; bu ikili yapı ikisini de verir.

## 🔴 KAPSAM STRATEJİSİ — sürekli kapsama DEĞİL, İKİ KESİT

Kullanıcının kendi sözü: *"veri eksiği olan yerler olursa onlar da
tamamlanmadan kalır, ne kadar aparırsak o kadar gösteririz."* Kabul —
ve doğru yol da bu:

```
KESİT 1  1609   32 eyalet (23 timarlı + 9 salyaneli) — Ayn Ali Efendi
                risâlesi standart kaynak, TDV EYALET maddesi sayıyor
KESİT 2  1867   Vilâyet Nizamnâmesi sonrası — salnâmeler tam liste verir
ARASI    interpolasyon YOK; iki kesit arası "veri yok" diye gösterilir
```
⚠️ **Sürekli kapsama istemek bu işi öldürür.** Sancak sınırları her on
yılda oynuyor ve kaynak ancak kesitlerde toplu. İki sağlam kesit, üç yüz
yıllık bulanık bir sürekliliğe yeğdir — ve dürüsttür.

## SIRA

```
- [ ] ① `kd:` ve `tabi:` şemasını VERI-YAPISI.md'ye YAZ (karar belgesi)
- [ ] ② k:1/k:2 ayrımını netleştir — 4 k:1 gerçek olamaz, ölç
- [ ] ③ v: alanındaki 33 serbest metni kapalı sözlüğe eşle (mekanik)
- [ ] ④ 1609 kesiti: 32 eyalet + merkezleri (TDV + Ayn Ali)
- [ ] ⑤ motor: bolgeler.js'i kd: penceresine göre üret
- [ ] ⑥ ARAYÜZ: idarî katman düğmesi; bölge etiketleri ana haritadan ÇIK
- [ ] ⑦ 1867 kesiti: vilâyetler (salnâme)
```
📌 ①-③ **ucuz ve bugünkü veriyle yapılabilir**; ④ ve ⑦ araştırma.
🔵 `S-006` (bölge adları bugünün adını taşıyor) bu işin İÇİNDE çözülür —
ayrı kalem olmaktan çıkar.

---

# 🆕 ANSİKLOPEDİ EKSENİ — kullanıcı isteği, 2 Ağustos 2026

> 🔴 **BU BİR SINIF DEĞİŞİKLİĞİDİR, ve adını koymak gerekiyor.** Atlas bugüne
> kadar bir **HARİTA**: "1453'te burası kimindi" sorusunu cevaplıyor. Aşağıdaki
> yedi kalem onu bir **ANSİKLOPEDİ**ye çeviriyor: "bu devlet neydi, kim yönetti,
> parası neye benziyordu, hangi eserleri bıraktı".
> İkisi de meşru ama **ayrı ürünler** — ve ikincisi birincinin üstüne kurulur.
> ⚠️ Sıra karışırsa harita yarım kalır, ansiklopedi de dayanaksız olur.

## 🔴 HEPSİNİ BAĞLAYAN ÜÇ KURAL — kullanıcının kendi koyduğu

**⓪ KISA OLACAK.** Kullanıcının sözü: *"basit birer metin ile okuyucuyu
sıkmadan; bu uzun uzun maddeler olmayacak."*
🔴 **Bu bir üslup tercihi değil, KAPSAM KARARIDIR** ve üç şeyi birden
değiştirir:
```
· künye bir ANSİKLOPEDİ MADDESİ değil, bir KARTVİZİT
· galeri metni görselin ALTINDAKİ İKİ SATIR — makale değil
· savaş şeması GÖRSEL anlatır; yanındaki metin yalnız okutur
```
📌 Ve ölçüm bunu destekliyor: `ozet` alanının **ortancası 175 karakter**,
%68'i 200'ün altında. Yani **doğru uzunluk zaten kurulu** — yeni alanlar da
o ölçüde kalmalı.
> *"Mohaç sonrası Macar tacını alan Habsburg hanedanı; üç asır boyunca
> Osmanlı'nın Orta Avrupa'daki ana rakibi, sonunda Avusturya-Macaristan
> olarak I. Dünya Savaşı'nda dağıldı."* — 172 karakter. **Hedef bu.**

⚠️ Ve bu kural işi **ucuzlatıyor**: kısa metin daha az kaynak taraması, daha
az çeviri, daha az bakım demek. Uzun madde yazmak yalnız pahalı değil, aynı
zamanda **eskiyen** bir şeydir.

## 🔴 ÖTEKİ İKİ KURAL

**① İSTENİNCE YÜKLENİR.** Kullanıcının sözü: *"bu tip veriler her harita
yüklendiğinde browsere yüklenmeyecektir, ilgili galeriye kullanıcının girmesi
hâlinde gösterilecektir."*
Bu **doğru ve bağlayıcı.** Bugün sayfa zaten 11,9 MB (gzip) indiriyor ve
kademeli yükleme tam bu yüzden kuruluyor. Galeriler **ana yüke asla katılmaz.**

**② LİSANS — ve bu proje bu konuda zaten titiz.** OSM ve OpenTopoMap altlık
olarak **lisans yüzünden** elendi (`ODbL`/`CC-BY-SA` bulaşıcı). Aynı ölçü
görsellere de uygulanmalı:
```
eserin kendisi kamu malı  ≠  o eserin FOTOĞRAFI kamu malı
```
XVI. yüzyıl minyatürü kamu malıdır; müzenin çektiği fotoğraf olmayabilir.
⇒ Her görsel için **kaynak + lisans** alanı zorunlu; künyesiz görsel girmez.

---

## E-1 · DEVLET KÜNYESİ — genişletildi
Yukarıdaki künye maddesine kullanıcı ekledi: **büyük şehirler · ekonomi ·
askerî güç · nüfus · yönetim biçimi.**
⚠️ *"Eğer bu verileri bulabiliyor isek"* — kullanıcının kendi kaydı, ve
doğru kayıt. Nüfus ve ekonomi rakamları XIV-XVIII. yüzyıl için **çoğu zaman
tahmin**; kaynaksız yazılırsa `§D8` (uydurulmuş kesinlik) ihlali olur.
⇒ Bu alanlar **künyeli ve aralıklı** olmalı ("~1520: 400-500 bin, kaynak X").

## E-2 · 🔴 SAVAŞ ŞEMATİĞİ — en büyük kalem, ayrı uygulama
Kullanıcı: iki tarafın ordularını **muharebe alanına** yerleştiren, sağ/sol
kanat · süvari · piyade · topçu · okçu ayrımıyla, arazi (dağ/tepe/vadi/ova,
kale içi-dışı) üstünde, savaşın **ilerleyişini** gösteren şematik anlatım.
Kumandanlar · sayılar · teçhizat · sonuç.

**Bugün elimizde:** `data/savaslar.js` 83 KB · ~77 kayıt ·
alanlar `ad·t·tur·sonuc·taraf_metin·seri·galip·topraklar·savas_basi`
⇒ **İskelet VAR** — seri, taraf, sonuç, galip zaten kayıtlı. Eksik olan
**muharebe alanı geometrisi ve birlik yerleşimi.**

🔴 **Dürüst uyarı:** bu kalem tek başına ötekilerin toplamından büyük.
Her muharebe için ayrı bir **sahne** demek — konum, birlik, hareket, zaman.
⇒ Önce **tek bir muharebede prototip** (ör. Çaldıran ya da Mohaç), sonra karar.
Ve kaynak: birlik yerleşimi çoğu savaşta **tartışmalıdır**; şema
"böyleydi" değil "şu kaynağa göre böyle" demeli.

## E-3 · BAYRAK · SANCAK · ARMA
Devlet künyesine eklenir; ayrıca **haritada belli şartla** gösterilebilir.
⚠️ Anakronizm tuzağı büyük: bugünkü bayraklar çoğu tarihî devlet için
**sonradan üretilmiş**. Osmanlı'nın "ay-yıldızlı kırmızı bayrağı" 1844
sonrasıdır; XIV. yüzyıla konması `§D8` ihlali olur.
⇒ Alan **pencereli** olmalı ve kaynaksız sembol girmemeli.

## E-4 · SİKKELER
Devletlerin bastığı paralar + görselleri. Künyeye bağlı galeri.
📌 Bu, `E-3`'ten **daha sağlam** bir eksen: sikke fiziksel bir nesnedir,
üstünde tarih ve darphane yazar — yani **kendi künyesini taşır.**

## E-5 · PORTRE GALERİSİ
Hükümdar · şehzade · vâlide sultan · kumandan tarihî resimleri.
Kullanıcının şartı: *"bu resmi kim yapmış, ne zaman yapmış"* — **doğru şart**,
ve `E-3`'ün anakronizm tuzağının çaresi de bu.
**Bugün elimizde:** `data/kisiler.js` 281 kayıt (`tur·ad·donem·devlet·not`)
`data/padisahlar.js` 41 kayıt. ⇒ **Kişi omurgası VAR**, eksik olan görsel.

## E-6 · MİMARÎ ESERLER
Eserlerin resimleri ve hikâyeleri, galeri hâlinde. *(Kullanıcı: "ilerleyen
safhalarda.")*
📌 Bunun haritayla doğal bağı var: her eserin bir **konumu** var ⇒ yerleşim
noktalarına bağlanabilir. Diğer galerilerden farklı olarak **haritaya geri
besleme** yapar.

## E-7 · KURUMLAR
Tımar sistemi · yeniçeri ocağı · devşirme usulü vb. galeri.
📌 Bu kalem **görselsiz de çalışır** — metin ağırlıklı, lisans sorunu yok,
ve TDV bu konuları **kapsıyor.** ⇒ En ucuz ve en hızlı teslim edilebilir olanı.

---

## 📌 SIRALAMA ÖNERİSİ — maliyet/kaynak sağlamlığına göre

```
1. E-7 KURUMLAR      metin · TDV kapsıyor · lisans sorunu YOK · en ucuz
2. E-1 KÜNYE         alan işi · yarısı zaten var
3. E-5 PORTRE        kişi omurgası VAR · görsel + künye eklenir
4. E-4 SİKKE         nesne kendi künyesini taşır
5. E-6 MİMARÎ        haritaya geri besleme yapar
6. E-3 BAYRAK        anakronizm riski yüksek, pencereli şema gerek
7. E-2 SAVAŞ ŞEMASI  🔴 ayrı uygulama · önce TEK prototip
```
⚠️ **Hiçbiri harita eksenini beklemeye almaz.** Bunlar üstüne kurulur;
altındaki veri (kimlik, tarih, konum) sağlam olmadan ansiklopedi de yanlış olur.


## Şimdi (harita ekseni)

- [ ] 🆕 **KRONOLOJİ ARAMA KUTUSU** *(kullanıcı isteği, 2 Ağustos)*
      Kronoloji sütununun **tepesine** bir metin kutusu. Yazılan kelime
      kronolojide aranır; *"5 tane Belgrad bulursa"* **ileri tuşuyla** bulunanlar
      arasında sırayla gezilir.

      **ÖLÇÜLDÜ — altyapı hazır, iş küçük:**
      ```
      index.html:60   <section id="olay-akisi"> · <h2> · #olay-sayac · #olay-listesi
      app.js:1908     olaylar.forEach → her satır için div, olayDom[] dizisinde
      app.js:1937     🟢 SÜZGEÇ ALTYAPISI ZATEN VAR — ve doğru kurulmuş:
                      "SÜZME = GİZLEME, SİLME DEĞİL. olaylar dizisine
                       dokunulmuyor; yalnız satıra .suzuldu sınıfı biniyor."
      ```
      ⇒ Arama **aynı deseni** kullanmalı: dizi süzülmez, satıra sınıf binerdi.
      🔴 Sebep dosyanın kendi yorumunda yazılı: *"zaman göstergesi, ikili arama,
      'şimdiki' vurgusu ve harita senkronu hepsi İNDEKS üzerinden çalışıyor.
      Diziyi süzseydik bütün indeksler kayardı."*

      **İstenen davranış:**
      ```
      · kutuya yazılınca eşleşen satırlar VURGULANIR (gizlenmez — bağlam kalsın)
      · sayaç:  "Belgrad — 5 sonuç, 2/5"
      · ileri ⏭ / geri ⏮  sonuçlar arasında gezer
      · gezilen sonuca gidince tarihAyarla(o.gi) çağrılır ⇒ HARİTA DA GİDER
        (app.js:1921'de satır tıklamasının yaptığı şeyin aynısı)
      · Enter = ileri · Esc = aramayı temizle
      ```
      ⚠️ **Türkçe arama tuzağı:** `toLowerCase()` Türkçede `I/ı` ve `İ/i`'yi
      yanlış eşler. *"Istanbul"* yazan *"İstanbul"*u bulamaz.
      ⇒ Karşılaştırma `localeCompare`/`toLocaleLowerCase("tr")` ile, ve
      aksan/şapka normalleştirmesi (`â→a`, `î→i`) düşünülmeli.
      📌 Bu, sitede **arama olmadığı için bugüne kadar hiç çıkmamış** bir
      sınıf — ilk arama kutusu onu getirecek.

      ⚠️ `js/app.js` ve `index.html` **ARAYÜZ'ün dosyaları** (`CLAUDE.md §7`).
      Şartname hazır; bir ARAYÜZ oturumu açıldığında tek turda biter.

- [ ] 🆕 **DEVLET KÜNYESİ — her devletin kimlik kartı** *(kullanıcı isteği, 2 Ağustos)*
      Her devlet kaydı; **ne zaman kuruldu · başkenti · kurucusu · kaç hükümdarı
      oldu · hangi millet · hangi din · hangi mezhep** gibi temel bilgileri
      taşısın ve arayüzde künye olarak görünsün.

      **ÖNCE ÖLÇÜLDÜ — yarısı zaten var, yarısı yok:**
      ```
      242 kayıt · alan doluluğu
        ✅ id · ad · tur · bolge · f · t · ozet   %100
        ✅ baskent                                 %99,6
        ✅ kronoloji (madde madde olay)            %100
        🟡 harita                                  %52   (yalnız çizilenlerde)
        ❌ kurucu · hukumdar_sayisi · millet · din · mezhep   %0 — ALAN YOK
      ```
      Ve `tur` alanı **zaten ayrıntılı**: krallık 48 · devlet 44 · imparatorluk 22 ·
      beylik 22 · cumhuriyet 21 · sultanlık 17 · geçici-işgal 15 · dukalık 12 ·
      hanedanlık 12 · hanlık 11 · prenslik 11 · şehzadelik 4 · ocaklık 3.
      ⇒ Kullanıcının istediği *"imparatorluk/krallık/sultanlık/beylik"* ayrımı
      **KURULU.** Eksik olan biyografik/kültürel eksen.

      🔴 **BEŞ YENİ ALAN — ve üçü tuzaklı, ölçülerek yazılmalı:**
      ```
      kurucu            metin. Tuzak: "kurucu" hanedanın mı devletin mi?
                        (Osman Bey ↔ Osmanlı; Selçuklu'da Tuğrul mu Selçuk mu)
      hukumdar_sayisi   SAYI DEĞİL TÜRETİLMİŞ OLMALI — data/padisahlar.js zaten
                        var; elle yazılırsa iki otorite doğar (§bugünün dersi).
                        ⇒ Alan değil, ÜRETİCİ: kişiler dosyasından sayılsın.
      millet            🔴 EN TUZAKLISI. Anakronizm riski: "Türk", "Arap" gibi
                        modern ulus kategorileri XIV. yüzyıla taşınamaz.
                        Hanedanın kökeni ile tebaanın bileşimi AYRI şeyler.
                        ⇒ `hanedan_kokeni` daha dürüst bir ad olabilir.
      din               görece güvenli (İslam · Hıristiyan · Budist …)
      mezhep            Sünnî/Şiî/Ortodoks/Katolik — ama DEĞİŞEBİLİR
                        (Safevî 1501'de Şiîliği devlet mezhebi yaptı;
                        İlhanlılar Budist→Müslüman). ⇒ tek değer YETMEZ,
                        `f:`/`t:` pencereli olmalı — `tabi:` gibi.
      ```
      ⚠️ **`mezhep` ve `millet` tek değerle yazılırsa YANLIŞ olur.** İkisi de
      zaman içinde değişiyor; şema `tabi:` deseninde pencereli tutmalı.

      📌 Ve `ozet` alanı bugün bu bilgilerin bir kısmını **düzyazı** olarak
      taşıyor (%100 dolu). Yani iş "sıfırdan toplamak" değil, **düzyazıyı
      alana çevirmek** — çok daha ucuz. Önce bir ölçüm: 242 özetin kaçında
      kurucu adı geçiyor?

      Sıra: ① şema kararı (pencereli alanlar) → ② `hukumdar_sayisi` üreticisi
      → ③ özetlerden çıkarım + kaynak doğrulaması → ④ ARAYÜZ künye paneli

- [x] ✅ **ISPARTA — YAPILDI (`47aa386`, 3 Ağustos 2026)**
      ```
      data/yerlesimler.js  ·  Isparta
      hamid dönemi:  t:"1381-06-01"  →  t:"1391-01-01"   ✅ yazıldı
      ```
      Komşuları (Burdur · Eğirdir · Uluborlu) zaten `1391-01-01`; Isparta on yıl
      erken bittiği için **enklav görünüyor.**
      **Kaynak:** TDV `hamidogullari` satılan beldeleri adıyla sayıyor —
      *"Akşehir, Beyşehir, Seydişehir, Yalvaç ve Karaağaç"* — **Isparta YOK.**
      TDV `isparta`: *"muhtemelen 1391'de kesin olarak Osmanlı idaresi altına
      girdi."*
      ⚠️ `Değişmez 2` riski YOK: `1391-01-01` kırılmasını üç komşu zaten taşıyor.
      🔴 **ŞİMDİ YAZILMIYOR** — üretim koşuyor, girdi kilitli (`CLAUDE.md §7`).
      Beş üretim bu kuralın çiğnenmesiyle kaybedildi.

      📌 **Ve bu maddenin kendisi bir ders:** karar **1 Ağustos'ta verildi**,
      gerekçesi TDV'den alındı, `OTURUM-13-HAMID-ANKARA.md`ye yazıldı —
      **ve veriye hiç işlenmedi.** Kullanıcı bugün haritaya bakıp yine gördü.
      ⇒ "Karar verildi" ile "uygulandı" ayrı olaylar; ikincisi yazılmazsa
      birincisi buhar oluyor. Sicil (`kutu/SICIL.md`) bunun için kuruldu ve
      `✅ ÇÖZÜLDÜ` hükmü artık **commit numarası** olmadan yazılamıyor.
      ✅ **Ve bu kez uygulandı** — sicil `S-011` commit numarasıyla kapandı.

- [x] ✅ **IRAK / ARABİSTAN `iran` TEMİZLİĞİ — YAPILDI (`47aa386`)**
      Kullanıcının kendi gözlemi (`parti-0001/H-0001`): *"Arabistan
      yarımadasında da iran diye bölgeler var."* Doğruydu.
      ```
      Irak       33 nokta · 38 dönem   iran → ilhanli · celayirli
                                              karakoyunlu · akkoyunlu · safevi
      D. Arabistan 4 nokta             iran → usfuri (1281-1417)
                                              cebri  (1417-1524)
      Umman kıyısı 2 nokta             iran → nebhani (1281-1515)
      ```
      Zincirin duvarları zaten projenin **kendi** Tikrit kaydında duruyordu;
      eksik olan yalnız kutunun adıydı. Yeni kimlik 4, hiçbir borç artmadı
      (`2s` 119, `2t` 52, sahipsiz 50, çakışma 56 — hepsi r690 ile aynı).
      `iran` dönemi **326 → 282.**

- [ ] 🔵 **İRAN ÇEKİRDEĞİ — hânedan bölünmesi (kullanıcının asıl sorusu)**
      Kullanıcının sözü: *"Safevî, Afşar, Kaçar, Zend… hepsi birbirini takip
      ediyor, aralarının hiç kesişim kümesi olmaması gerekiyor."* **Haklı.**
      ```
      kalan `iran` dönemi     282  (176 → 138 nokta)
      1281-1393  ilhanli sonrası: muzafferi · celayirli · timurlu
      1736-1923  afsar · zend · kacar   ← ŞU AN HEPSİ TEK `iran` KUTUSUNDA
      ```
      ⚠️ **Renk engeli var ve adı konmalı:** `afsar` · `zend` · `kacar`
      devletler.js'te VAR ama `harita:"iran"` paylaşıyorlar — `BOYALAR`'da
      kendi anahtarları YOK. Yani veriyi bölmek **tek başına yetmez**, üç
      yeni boya da gerekir; yoksa motor boyayamaz.
      📌 Ölçüm bunu zaten söylüyor: `renk_olc.py` aynı-anahtar denetimi
      `afsar ↔ kacar` çiftini ateşliyor ve **bu veri bölünmeden sönmeyecek.**
      🔴 Basra'nın `1776-1779 iran` dönemi (Kerim Han Zend işgali) bu işin
      parçası — bilerek bırakıldı, `zend` boyası gelince onunla düzelir.

- [ ] **Değişmez 2s borcu 119 → 121 — KABUL EDİLDİ, defteri burası.**
      `ortaasya2` canlıya alınınca (`27e234c`) iki kırılma maddesiz kaldı:
      ```
      1500-01-01  Nogay Ordası + Kazak Hanlığı'nın sahneye çıkışı
      1640-01-01  Guryev'in (Atyrau) kuruluşu
      ```
      🔴 **Karar gerekçesi:** kabul ölçütü sahipsizlikti ve sağlandı
      (50 → 50, yerleşim 991 → 998). `2s` zaten adlı ve defterli bir borç
      (tavan 114); +2 sınıfını değiştirmiyor. Geri almak **7 noktayı ve
      gerçek kapsamı** *madde eksikliği* için feda etmek olurdu.
      ⇒ Kapanışı **madde yazmak**, geri almak değil. *VERİ KRONOLOJİ sınıfı.*

- [ ] 🟡 **`hassasiyet:` için ÜÇÜNCÜ ölçülmüş vaka çıktı.**
      `yerlesimler_ortaasya2.js` belirsizliğini **yorumda** dürüstçe yazmış
      (satır 103: *"TDV ikisi…"*, satır 114: *"yıl hassasiyetinde, gün
      yazılmadı"*) — ama **motor yorumu okumuyor**, haritaya `1500-01-01`
      *bilinen bir gün* gibi çiziliyor.
      ```
      dosyadaki 62 tarih damgasının 37'si (%60) YYYY-01-01
      ```
      📌 Yani `§76`'nın çaresi artık "iyi olurdu" değil: **veri dürüst,
      şema taşıyamıyor.** Belirsizlik yorumdan alana taşınmalı.

- [ ] 🔴 **ARAYÜZ — `js/app.js:2241` yeni bölümü çizmiyor.** `BEKLEYENLER.md`'ye
      **`SENDEN BEKLENEN`** diye açık iş bölümü eklendi ve `uret_bekleyenler.py`
      artık `B.bolum.bekleyen` üretiyor (bugün **4 satır**). `app.js` yalnız
      `gorsel` ve `karar`ı çiziyor ⇒ **dört iş sitede görünmüyor.** Tek satır:
      ```js
      h += bekleyenTablo("🔴 Şu an senden beklenenler", B.bolum.bekleyen);
      ```
      `bolum.istege_bagli` da eklenebilir (rozete girmiyor, acele değil).
      ⚠️ `js/app.js` **ARAYÜZ'ün dosyası** (`CLAUDE.md §7`) — koordinatör yazmadı.
      📌 Ve bu tam `§40`'ın vakası: **veri üretiliyor, çizilmiyor.**

- [x] **Görsel doğrulama turu** — kullanıcı yürütüyor: ekran görüntülerini
      "hatalar N.docx" dosyalarına madde madde yazıyor, oturum okuyup düzeltiyor.
      Üç tur yapıldı. Bu yol veri denetiminin göremediği bütün bir hata sınıfını
      açığa çıkardı: hayalet devlet etiketleri (1453'te bitmiş Bizans 1537'ye,
      1517'de bitmiş Memlük 1557'ye kadar sürüyordu), 235 yıl boyunca yanlış
      kimlikle boyanan Safevî coğrafyası, tam kırmızı boyanan voyvodalıklar,
      yüz yıl ekranda kalan kale simgeleri. **Denetim betiği bunların HİÇBİRİNİ
      göremiyordu** çünkü üç değişmez de "sahip var mı / maddesi var mı / merkezle
      uyuyor mu" diye soruyor, "bu devlet o tarihte YAŞIYOR MU" diye sormuyor.

- [ ] **Dördüncü değişmez: hayalet devlet denetimi** — bir yerleşim, ömrü bitmiş
      bir devlete ait olamaz. `data/devletler.js` her devletin `f`/`t` aralığını
      zaten tutuyor; `arac/denetle.py` yerleşim dönemlerini bu aralıkla
      karşılaştırmıyor. İki hayalet etiket ailesi (Patmos → `bizans`, ve
      İbrim-Sevâkin-Masavva-Dahlak → `memluk`) elle bulundu; araç bulmalıydı.
      ⚠️ Tolerans gerekir: Mekke'nin memlûk dönemi 1517-07-06'da bitiyor ama
      devlet 04-13'te yıkıldı — bölgesel teslim gecikmeleri meşrudur. Eşik
      birkaç ay olmalı, sıfır değil.

- [ ] **Devletler dizininin dünya kapsamına çıkarılması** — Eksen 3, aşama D-1 ve
      D-2. Görev tanımı hazır: `oturumlar/OTURUM-3-DEVLETLER.md`. *Oturum 3*

- [ ] 🔴 **ALTLIK: KADEMELİ GEÇİŞ — kullanıcı kararı, 31 Temmuz.**
      Bugün ekranda görünen kabartmalı harita **Esri'nin sunucusundan** geliyor
      (`js/app.js:359`, `World_Physical_Map`) ve kamu malı değil. Kullanıcının
      şartı: *"harita bizim olsun, açık kaynak olsun ama uhdemizde ve
      kontrolümüzde kalsın."* Esri bu şartı bozan **tek** bileşen — vektörlerin
      tamamı (Natural Earth) kamu malı ve bizde.
      ```
      1. Esri altlığı ŞİMDİLİK KALIR
      2. Üstüne bizim vektör katmanımız AÇILIR-KAPANIR olarak eklenir
      3. Katman yeterince iyi görününce Esri KALDIRILIR
      ```
      Neden bu yol: vektör katman önce **hata ayıklama aracı** olarak işe yarar
      (motorun gerçekten kullandığı nehir/sırt gözle görünür), sonra altlığın
      kendisi olur. Tek iş, iki teslim, risk yok.
      ⚠️ **İki bütçe ayrı:** depoda `ne_10m_*` zaten var (26,8 MB, yeni indirme
      yok) ama `index.html` onlardan **hiçbir şey çekmiyor** (ölçüldü: 0 atıf) —
      yani vektör altlık **sayfaya yeni yük**. Sayfa bugün 37 MB taşıyor.
      Pencereye kırpılmış + zoom'a göre sadeleştirilmiş hedef boyut şartnamede
      ölçülecek.
      ⚠️ Kabul edilen bedel: **kabartma gölgesi gider** — dağlar 3B değil, alan
      olarak görünür. Kullanıcı bunu bilerek seçti.
      🔴 **OSM (ODbL) ve OpenTopoMap (CC-BY-SA) ELEME SEBEBİ** — kalite değil,
      lisans: bulaşıcıdırlar, türevi aynı şartlarla paylaşmaya zorlarlar. Harita
      "açık" kalır ama **kontrol bizde olmaz.** Kamu malı kaynakta kalınacak.
      📌 İkinci kazanç: bugün kullanıcı fotoğrafta Toroslar'ı görüyor, motor
      `Taurus Mts.` poligonunun `buffer(-0.12)` konturunu kullanıyor — **aynı yer
      değil.** Kademe 2'den sonra görünen hat ile motorun hattı aynı olur.
      Şartname: `oturumlar/COGRAFYA-HATLAR.md` *(COĞRAFYA yazar, K uygular)*

- [ ] 🔴🔴 **BİRİM TUTARLILIĞI: `cos(enlem)` — AVRUPA MERGE'ÜNDEN ÖNCE KAPANMALI.**
      Motor bütün mesafeleri **derece** cinsinden tutuyor ama yorumlarında **km**
      yazıyor. `denetle_olcek.py` ölçtü (31 Temmuz):
      ```
      KORUMA_PAYI 0.060°   ekvator 6,7 km · Boğdan 4,5 · Riga 3,6   yorumu "~6.7 km"
      nehir_mes   0.300°   33,4 → 22,3 km                            yorumu "33 km"
      sirt_mes    0.350°   39,0 → 26,1 km
      KV_ADIM     0.050°   yorumu "≈5,5 km ENLEMDE" ← bu DOĞRU yazılmış
      ```
      Aynı dosyada hem doğru hem yanlış yazım yan yana; doğru yazımı bilen el
      üç satır ötede yanlışını bırakmış.
      🔴 **BAĞIMLILIK — sırası kayarsa bedeli KATLANARAK büyür.** Bugün zararsız
      görünmesinin tek sebebi haritanın dar olması: pencere `box(-12,1.5,62,62)`
      ve verinin ağırlığı 35-42°'de, orada hata %18-25.
      ```
      40°   cos 0,77   0.30° = 25,7 km
      55°   cos 0,57   0.30° = 19,1 km   ← Baltık; Oturum 12'nin 228 Avrupa noktası
      62°   cos 0,47   0.30° = 15,7 km   ← pencerenin kuzey sınırı
      ```
      Avrupa merge'ü yapıldığı gün Baltık ve İskandinavya'da yaslama yarıçapı
      **sessizce yarıya iner** ve o günün A/B'sinde *"yeni noktalar eklendi"*
      gürültüsünün altında görünmez. Bugün ucuz, o gün adlî inceleme.
      ⚠️ Gerekçesi **"ölçülen bozukluk" DEĞİL, "birim tutarlılığı"** — enlem
      hipotezi (kuzeyde çöküş daha ağır) ölçüldü ve **çürütüldü**; belirleyici
      değişken komşu mesafesi. Zayıf değil, dürüst gerekçe.
      🔴🔴 **`cos(enlem)` TEK BAŞINA UYGULANIRSA HARİTAYI BOZAR.** Ölçüldü
      (COĞRAFYA, 31 Temmuz): `nehir_mes` gerçek 33 km'ye çıkınca **daha çok köşe
      nehre çekilir** ve nehir üstündeki yerleşimler daha da aşınır:
      ```
      Mihaliç %65 → %26  (−39p) · Kûfe %52 → %20 (−32p) · Simav −30p · Aydın −28p
      16 vakanın 8'i kötüleşiyor, dördü 30 puandan fazla
      ```
      ⚠️ Ve **kimse aramaz**, çünkü düzeltmenin kendisi "birim tutarlılığı" diye
      meşru görünür. Fark enlem sıralı da değil (Kûfe 32°'de −32p, Budin
      47,5°'de 0p) — etki **kalan paya** bağlı.
      ⇒ **Aşağıdaki nehir kuralı ÖNCE devrede olacak şekilde, aynı koşuda.**
      Ayrı adım DEĞİL. *(MOTOR)*

- [ ] **Yedinci denetime İKİNCİ BANT** — `%10 altı` ile `%10-60` iki ayrı soru.
      Bugünkü eşik "hücre YOK EDİLDİ" için kalibre (Estergon 8/4.819 = %0,2).
      Ama Budin **%41** ve denetim onu görmüyor — doğru davranıyor, yanlış soru
      soruyor. Kullanıcı ise %59'luk kaybı **görüyor**.
      ```
      %10 altı   ✗ HATA    hücre yok edildi, fetih maddesi haritada görünmez
      %10-60     ⚠️ AŞINMA  hücre aşındı, gövde küçülmüş görünür   ← ölçütü YOK
      ```
      Eşiği oynatmak ÇÖZÜM DEĞİL: gerçek "yok edildi" vakaları 56 yanlış alarmın
      içinde kaybolur. İkinci bant ayrı bassın, üretimi durdurmasın. *(MOTOR)*
      ✅ Yan kazanç ölçüldü: **Estergon artık %93** — `KORUMA_PAYI` o vakayı
      gerçekten çözmüş, 8 km²'lik çöküş yama öncesine ait. Yamanın işe yaradığı
      ilk ölçüm. Yeni ölçüt: **Estergon %93'ün altına inmemeli.**

- [ ] 🔴 **Nehrin üstündeki yerleşimin peteği aşınıyor — 16 kayıt.**
      ⚠️ İlk ölçüm **7** demişti ve YANLIŞTI: kesit *mesafeyle* (nehre <2 km)
      seçilmişti. Etkiyle seçilince **en kötü üç vaka kesitin DIŞINDA** çıktı —
      Geyve %21 · Adapazarı %25 · Balat %34, üçü de Budin'den beter.
      📌 Mesafe ölçüt olamaz: **Mihaliç nehrin 10 METRESİNDE ve %65 koruyor**,
      Geyve 3 km uzakta ve %21'e düşüyor. Belirleyici olan mesafe değil, nehrin
      hücreyi **ortadan mı kesip kenarından mı geçtiği.**
      Eşik **%80**, ölçülmüş bir boşluğa oturuyor (Aydın %74 ↕ 7 puan ↕
      Niksar %81; altta ardışık farklar 0-5 puan). ⚠️ Keskin uçurum değil —
      %75/%85 seçilse sınıf 14/18 olur; A/B sınırdakileri ayrıca raporlasın.
      ```
      Geyve %21 · Adapazarı %25 · Balat %34 · Budin %41 · Kûfe %52 ·
      Dimetoka %53 · Akhisar %57 · Hotin %58 · Mekece %58 · Ordubad %63 ·
      Çarşamba %64 · Simav %64 · Mihaliç %65 · Lefke %70 · Yarhisar %74 · Aydın %74
      ```
      🔴 **Bu kural GENİŞLETİYOR** — çöl tavanının tersi. Bir hücre büyürse
      komşusu küçülür ⇒ sıfır alanlı petek denetimi **komşular için de**
      koşulmalı, `KORUMA_PAYI` yeniden sınanmalı.
      ⚠️ **Uygulama tuzağı:** yaslama birleştirilmiş ortak kenar ağında yapılıyor
      (`uret_petek.py:439-465`), kenar hangi hücreye ait bilmiyor. Muafiyet için
      köşeye **en yakın İKİ tohuma** bakılmalı — tek tohum YETMEZ: Voronoi
      kenarında iki tohum eşit uzaklıktadır, `nearest` hangisini döndüreceği
      belirsizdir ve muafiyet kenarların **yarısında rastgele** kaçırılır.
      Sessiz hata: A/B'de "kısmen düzeldi" diye görünür.

- [ ] ~~**Nehrin üstündeki yerleşimin peteği aşınıyor — 7 kayıt.**~~ *(yukarıdaki
      madde bunun düzeltilmiş hâli; aşağıdaki gerekçeler geçerli)*
      Kural: *bir yerleşimin ÜZERİNDE DURDUĞU nehir, o yerleşimin kendi hücresi
      için yaslama hedefi değildir.* (Aynı nehir, BAŞKA yerleşimin sınırı için
      hedef olmaya devam eder — Kamaniçe/Hotin'de Dinyester hudut kalmalı.)
      ```
      Budin %41 · Kûfe %52 · Akhisar %57 · Hotin %58 · Ordubad %63 ·
      Çarşamba %64 · Mihaliç %65        (nehre 2 km'deki 63 kaydın 56'sı %80+)
      ```
      📌 Kullanıcının sorusu *"Buda/Peşte gibi iki yakalı şehirlerde bölge karşıya
      geçmeli mi"* idi. Ölçüm başka yeri gösterdi: 24 çiftin **22'si yılların
      ≥%95'inde aynı sahip**, yani aralarındaki sınır çizilmiyor bile. Bozuk olan
      çift değil, **tek şehir**: Tuna, Budin'in kendi hücresini içeriden yiyor.
      Peşte %90 sağlam.
      ⚠️ Kullanıcının çözüm önerisi (*"nehrin ötesindeki dağ sırtına dayansın"*)
      63 vakanın yalnız **4'ünde** mümkün; kendi örneğinde imkânsız — Budin sırta
      96 km, en yakın komşusuna 2 km. Macar ovasında sırt yok.
      Şartname: `oturumlar/COGRAFYA-*.md` *(COĞRAFYA yazar, MOTOR uygular)*

- [ ] 🔴 **ÇÖL TAVANI 300 km — kullanıcı kararı, 31 Temmuz.**
      Bugün tavan YOK: Batı Sahra'nın ortası **1.000 km öteden** Timbuktu'ya ve
      Agadir'e bağlı. Kullanıcının itirazı: *"bir yerleşim çöl kıyısında diye
      Sahra'nın diğer yakasındaki şehirle koca çöl alanını ikiye bölmemeli…
      ülke sınırlarında suni bir büyüklük yaratır."*
      Ölçüm (COĞRAFYA): çöl içi en yakın yerleşime medyan 201 km · %90 481 km ·
      azami 1.077 km. Bölge bölge: Anadolu 47 · Rumeli 57 · Mısır 81 ·
      Libya 124 · Arabistan 176 · **Batı Sahra 417** ← tek bozuk bölge.
      300 km yerleşik toprağa **hiç dokunmuyor** (Anadolu azami 125 · Rumeli 199
      · Mısır 225 · Libya %90'ı 206), Sahra'nın %32,4'ü sahipsiz kalır.
      ⚠️ **İKİ MUAFİYET ŞART:**
      1. **Su koridoru muaf** — NE'nin çöl lekesi Nil vadisinin ÜSTÜNDEN geçiyor,
         vadiyi oymuyor. Çöl poligonunun içinde ve Nil'e 55 km'den yakın **35
         yerleşim** var (Esna 0 km · Asyut 1 · Uksur 1 · Asvan 3 · Hartum 8).
         Ham tavan Mısır'ı keserdi.
      2. Kıyı ve göl boyunca uzanma sınırlanmayacak.
      ✅ Motor bunu kaldırabiliyor: `uret_petek.py:911` SERBEST KENAR +
      `js/app.js:435` + `SERBEST_U` belirsizlik dizisi zaten var. Görsel sonuç
      **sönen kenar** olmalı, keskin çizgi değil — çöldeki hâkimiyet keskin
      çizgiyle bitmez.
      🔴 **Yarısı VERİ işi:** 391 km'lik Batı Sahra medyanı kuralın değil
      noktasızlığın sonucu. Tindûf · Şinkît · Vâdân · Tîşît · Vâlâta · Smara
      eklenmeli. *(A3 ARAP-AFRİKA)*
      Şartname: `oturumlar/COGRAFYA-COL-TAVANI.md` *(COĞRAFYA yazar, MOTOR uygular)*

- [ ] **`ayaklanma` / `isyan` — aynı kavram, iki yazım.** Veride `ayaklanma` 32,
      `isyan` 12; şemanın resmî değeri `ayaklanma`. CSS bugün ikisine de aynı rengi
      veriyor, yani **görünürde sorun yok** — ama panelde kategori metni ham `k:`
      değeri olarak yazıldığı için kullanıcı aynı şeyi iki adla okuyor.
      `isyan` → `ayaklanma`, 12 kayıt, `data/olaylar*.js`. *U1 KRONOLOJİ*
      📌 Bu çift, veriyle arayüzün ayrı sözlüklerle büyüdüğünün delili olarak
      bulundu: CSS **yalnız azınlıkta olan `isyan`ı** tanıyordu.

- [ ] 🔴 **`kazak` kimlik zinciri üç yerde uyuşmuyor — merge'den ÖNCE.** Ölçüldü
      (31 Temmuz): `renkler.py` rengi **`kazak-hanligi`** anahtarıyla tanımlıyor,
      ama `yerlesimler_ortaasya2.js:193,207,215` hâlâ `d:"kazak"` yazıyor ve
      `kimlikler.js:199` `harita:"kazak"` diyor. `uret_petek.py:231` `d:` değerini
      **doğrudan** BOYALAR'da arıyor → üçü eşitlenmeden Kazak Hanlığı renksiz kalır.
      ⚠️ Bugün canlı bir kusur DEĞİL: `yerlesimler_ortaasya2.js` ne `girdi.py`
      listesinde ne `index.html`'de — dosya merge bekliyor. Kusur **merge anında**
      doğar, o yüzden bu satır merge'in ön şartıdır.
      Kısa ad `kazak` bilerek reddedildi: Türkçede hem Kazak Hanlığı'nı hem Ukrayna
      kazaklarını karşılıyor, atlas ikisini de kapsıyor, karışma sessiz olurdu.
      Üç dosya tek commit'te. *K + Oturum 9*

- [ ] **Eşleşme A tavanı 67 → 97** (`arac/denetle_eslesme.py`). Sayı arttı ama
      **veri kötüleşmedi**: `§26` (denetimin kendi ürettiği "Aynı tarihte…" eki
      eşleştirmeye giriyordu — 28 kırılma sessizce geçmiş) ve `§19` (sağ kelime
      sınırı yoktu: `Kavala ⊂ Kavalalı`) düzeltilince araç körlüğünü kaybetti.
      🔴 Gerekçe tavanın yanına yazılmalı, yoksa sonraki oturum "denetim bozuldu"
      sanıp geri alır. *DENETÇİ (dosya onun)*

      ⚠️ **`BEKLENEN_KIRILMASIZ` (Değişmez 2t) 67'de KALIYOR — dokunmayın.**
      Bu satır bir kez yanlış yazıldı (31 Temmuz, `81c4ac5`): iki ayrı metrik tek
      metrik sanıldı, çünkü **eşleşme A'nın eski değeri de 67'ydi.** İkisi ayrı
      soru soruyor — 2t: *"maddenin kırılması var mı"*; eşleşme A: *"kırılmanın
      DOĞRU maddesi var mı"*. Aynı sayıyla başlamaları tesadüf.
      📌 Ders: tavan **indirmek** kadar **yanlış tavanı** oynatmak da denetimi kör
      eder, üstelik sessizce — sayı "güncellendi" göründüğü için kimse geri bakmaz.

---

## Coğrafi genişlemeden önce bitmesi şart — motor işleri

Dördü de Faz C-B'den önce. Nokta kümesi büyüdükçe bu dönüşümler kat kat pahalılaşır.
Gerekçeler: `MIMARI.md` §3.

- [ ] **Çok dosyalı girdi** — motor `data/yerlesimler_*.js` desenindeki bütün
      dosyaları okusun. Paralel oturumların yerleşim ekleyebilmesinin ön koşulu.
      *(MIMARI §3.3)*

- [ ] **YEDİNCİ DENETİM: sıfır alanlı petek** — *(MIMARI.md §3.5, en yeni sessiz
      hata sınıfı)*. Kenar yaslama bir peteğin sınırını kendi tohum noktasının
      ötesine itebiliyor; yüz "yetim" kalıp komşuya katılıyor ve yerleşim hiç
      toprak almıyor. Ölçüldü: **Estergon'un peteği 8 km², Solnok'un 0 km²** —
      ikisinin de kaybı haritada görünmüyor, oysa veri, kronoloji ve motor
      mantığı üçü de doğru. Kullanıcı bunları hatalar 7.docx'te bildirdi.
      İki adım:
      1. Üretimde **32 yetim yüzün hangi yerleşimlere ait olduğu loglansın** —
         o liste sınıfın tam envanteri olur.
      2. `denetle.py`'ye her peteğin alanı, `BEKLENEN_SIFIR_PETEK = 0`.
         ⚠️ Ölçüm `o + v + z` katmanlarının TOPLAMI üzerinden yapılmalı; yalnız
         `o` sayılırsa tâbi/şehzade katmanına geçen petekler yanlış sıfır verir
         (ilk denemede Bursa bile 0 km² çıktı).

- [ ] **Mükerrer denetimine İKİNCİ ölçüt** — Jaccard kelime benzerliği taht
      değişimi maddelerinde kör. Ölçüldü: "IV. Mehmed'in tahttan indirilmesi"
      ile "II. Süleyman'ın cülusu" **tek kelime paylaşmıyor** (aynı olayın iki
      yüzü zıt özneyle yazılınca benzerlik sıfır); "II. Mustafa'nın cülusu" ile
      "II. Mustafa tahta çıktı — sefere bizzat katılma kararı" 0.125 veriyor,
      eşik 0.45. İkisini de araç kaçırdı, kullanıcı ekranda gördü.
      Hal'/cülûs, ölüm/cülûs, azil/tayin çiftleri bu kör noktada kalmaya devam
      edecek. Önerilen ölçüt: **aynı gün ±3 + `kisiler` alanında ortak ad**
      varsa şüpheli say.

- [x] ~~**Motor `kur:` ve `bit:` alanlarını okumuyor**~~ — **30 Temmuz'da
      ÇÖZÜLDÜ** (`b781c2c`, 1,7 milyon km²'lik hayalet toprak düzeltmesi).
      Bu satır bir gün fazla açık kaldı ve **üç kaynağın çelişmesine** yol açtı:
      commit "okuyor", bu satır "okumuyor", A5 raporu "hiç okumuyor".
      31 Temmuz'da motorun kendi ölçütüyle hakem ölçümü yapıldı
      (`devir_kumesi` + `_sahipli`, 1600-06-15 kesiti):
      ```
      Nâsıriye  kur 1869  d:osmanli  → DEVREDİLİR   (hayalet OLUŞMUYOR)
      Muhammere kur 1812  s:safevi   → DEVREDİLİR
      Buşehr    kur 1734  s:safevi   → DEVREDİLİR
      Kuveyt    kur 1716  sahipsiz   → BOŞ KALIR — kasıtlı
      1600 kesitinde: devredilen 17 · kasıtlı boş 7
      ```
      🔴 **Kuveyt deliği KUSUR DEĞİL, kuralın kendisi.** Motorun ölçütü
      "kurulmamış" değil, **"kurulmamış VE o tarihte sahibi yazılı"** — çünkü bu
      projede sahipsizlik bazen kasıtlıdır (çöl dolgu noktaları, körfez
      şeyhlikleri). Kuveyt 1716 öncesi hem kurulmamış hem sahipsiz; peteğini
      Basra'ya bağışlamak **`CLAUDE.md §3`'ün bilerek bıraktığı boşluğu yok
      ederdi.**
      ⇒ `hatalar 3 md.8` / `hatalar 15 md.6` (Lahsa-Katîf ada gibi görünüyor)
      **motor borcu değil, GÖSTERİM sorusu**: kasıtlı boş bir hücre iki Osmanlı
      bölgesinin arasına düştüğünde kopukluk okunuyor. Ayrı kalem olarak aşağıda.
      📌 Ders: kapatılmamış bir yapılacak maddesi, yanlış bilgiden **daha
      tehlikeli** — çünkü ikisi de doğru görünür ve hangisinin bayat olduğu
      belli olmaz. Üç oturum bugün bu satıra dayanarak yanlış teşhis koydu.

- [ ] **Kasıtlı boş hücre, kopukluk gibi okunuyor** — `hatalar 3 md.8` ·
      `hatalar 15 md.6`. Kuveyt'in 1716 öncesi boş peteği, Basra ile Lahsa-Katîf
      arasına düşünce körfez zinciri ada gibi görünüyor (Basra yönünde 63,7 km,
      Katîf yönünde 185,4 km — A5 ölçtü). Veri doğru, motor doğru, **görüntü
      yanıltıcı.**
      Çözüm motoru değil gösterimi ilgilendiriyor ve seçenekler ölçülmedi:
      (a) sahipsiz hücreye zeminden ayırt edilir ama "başka devlet" demeyen bir
      doku, (b) yakınlaştırmaya bağlı olarak sahipsiz hücreleri gizlemek,
      (c) olduğu gibi bırakıp panelde açıklamak.
      ⚠️ (a) ve (b) bütün çölü de etkiler — 34 dolgu noktası aynı sınıf.
      **Seçilmeden önce ölçülmeli.** *K + COĞRAFYA*

- [ ] **Zaman dilimli Voronoi** — diyagram bütün tarih için bir kez hesaplanıyor;
      farklı dönemlerde farklı komşuluk üretmiyor. *(MIMARI §3.1)*
      ⚠️ `kur:`/`bit:` kısmı ARTIK GEÇERSİZ — yukarıdaki maddede çözüldü. Kalan
      iş yalnız diyagramın kendisinin zamana bağlı olması.
      → Yan kazanç: "tarih ilerledikçe bölgeler bölünsün" davranışı bundan doğar.

- [ ] **`k`/`m` alanlarının zamanlı hâle gelmesi** — Değişmez 3. Bugün 311
      yerleşim-tarih çiftinde yerleşim ile bağlı olduğu merkez farklı devletlerin
      elinde. *(MIMARI §3.4, VERI-YAPISI'nda `kd:` şeması)*

- [ ] **Çıktı mimarisi** — petek geometrisi epok başına bir kez yazılsın, sahiplik
      ayrı küçük tabloda tutulsun. Bugün 567 nokta 27 MB üretiyor; dünya ölçeğinde
      yüzlerce MB olur. *(MIMARI §3.2)* — `js/app.js` boyama mantığı da değişir,
      Oturum 1 ile ortak iş.

- [ ] **Çağ dilimlemesi ve beş index** — tarih çizgisi değişken uzunlukta çağlara
      bölünsün (seyrek dönemde binyıl, yoğun dönemde çeyrek yüzyıl), diğer index'ler
      bu çağlara göre dilimlensin. Yerleşim index'i zamanlı olsun: bir yerleşim
      sahneye çıktığı andan itibaren index'e girsin ve bölgesi o andan itibaren
      atansın — Port Said 1600 çağının index'inde bulunmasın. *(MIMARI §6.7)*
      → Zaman dilimli Voronoi'nin veri tarafındaki karşılığı; onunla birlikte yapılır.

- [ ] **Devlet merkezli yükleme** — veri bölge × çağ parçalarına bölünsün, her devlet
      için manifest üretilsin, tarayıcı odak devletine göre yalnız gereken parçaları
      çeksin. İlgi bağları elle yazılmaz, sahiplik ayak izi + Voronoi komşuluğu +
      savaş/antlaşma birlikteliğinden **türetilir**. *(MIMARI §6.5)*
      → Ön koşul: yukarıdaki çıktı mimarisi. Arayüz tarafı Oturum 1 ile ortak.

---

## Yazılacak araçlar

- [ ] **`arac/denetle_kapsama.py`** — kara maskesini ızgaraya böler, her hücrenin en
      yakın yerleşime uzaklığını ölçer, eşiği aşan bölgeleri liste ve görüntü olarak
      verir. Bu araç olmadan bir coğrafya fazının "yoğunluk kabulü" adımı ölçülemez.
      *(MIMARI §5)*

- [ ] **`arac/sorgu.py`** — verilen tarih ve bölge için yerleşim, sahip, idari kademe
      ve petek alanını tablo hâlinde döker; çelişkili satırları uyarır. Değişmez 3'ün
      denetim aracı. *(MIMARI §4)*

- [ ] **`arac/denetle.py`** — üç değişmezi tek komutta koşturan toplu denetim.
      Bugün komutlar `CLAUDE.md` §3'te tek satırlık node ifadeleri olarak duruyor.

---

## Veri işleri

- [ ] **Dizin ↔ harita kimlik eşleşmesi** — `devletler.js` kayıtlarına
      `harita:"<BOYALAR id>"` alanı eklenecek. Haritada olup dizinde hiç karşılığı
      olmayan 53 devlet var. Mevcut `id`'ler değiştirilmez. *Oturum 3*

- [ ] **Faz C-B yerleşim katmanı** — Avrupa, Kuzey ve Doğu Afrika, Ortadoğu, İran,
      Kafkasya, Doğu Avrupa. Ön koşul: çok dosyalı girdi + kapsama denetim aracı.
      *Oturum 4*

- [ ] **Faz C-B kutu açılışı ve doğrulama** — `BOLGE` genişletilir, üretim koşulur,
      üç değişmez denetlenir. Ön koşul: yerleşim katmanı ve yoğunluk kabulü.
      *Oturum 0*

- [ ] **Kronoloji yoğunlaştırma** — 1453-1923 arası ay ay detay. Yalnız içerik,
      harita etkisi yok. *Oturum 7, yeni `data/olaylar_ek7.js`*

- [ ] **Sınırların Pitcher atlasıyla nokta doğrulaması.**

---

## Zaman ekseni genişlemeden önce

- [ ] **`kesinlik` alanı** — `gun`/`ay`/`yil`/`onyil`/`yuzyil`/`belirsiz`. Bugün gün
      bilinmediğinde `YYYY-01-01` yazılıyor ve kullanıcı gerçekten 1 Ocak sanıyor.
      Geriye gidildikçe çoğu tarih yıl ya da on yıl hassasiyetinde olacak.
      *(VERI-YAPISI'nda şema, YOL-HARITASI Boyut 1)*

- [ ] **Çağ bölmeli zaman çubuğu** — bugünkü çubuk gün indeksli ve doğrusal.
      MÖ 12000'e uzanırsa ~5.1 milyon gün olur, son 200 yıl çubuğun %1.6'sına
      sıkışır. Yoğun dönemde genişleyen, seyrek dönemde daralan bir çubuk gerekir.
      *Oturum 1 ile ortak iş.*

---

## Sonraki fazlar (şimdi kapsamda değil)

- [ ] Tarih çizgisi Z-B: 1923-2026 *(tartışmalı sınır kuralı: YOL-HARITASI Boyut 1)*
- [ ] Tarih çizgisi Z-C: 1000-1288 — Selçuklu, Haçlı devletleri, İlhanlı, Song
- [ ] Tarih çizgisi Z-D, Z-E: MS 0-1000 ve MÖ 600 – MS 0
- [ ] Tarih çizgisi Z-F: MÖ 12000 – MÖ 600 — **ayrı bir katman**, devlet/sınır modeli
      burada uygulanamaz; karar verilmedi
- [ ] Coğrafya fazları C-C … C-F — Orta Asya, Hindistan, Doğu Asya, Sahra altı
      Afrika, Amerika, Okyanusya
- [ ] Devlet kronolojilerinde madde sayısının artırılması (K-2)
- [ ] Kronoloji başlıklarının içinin doldurulması (K-3)
- [ ] Dünya olayları — Osmanlı dışı savaş, antlaşma, olay (O-4)
- [ ] Dünya hükümdarları (P-2)
- [ ] Sanatçılar, filozoflar, bilim insanları (P-3) *(açıkça ertelendi)*
- [ ] Boyut 8 — askerî yapı, siyaset-idare, sosyal-iktisadi yapı, bilim-teknoloji,
      kültür-sanat, din-felsefe 🔒 **kapalı**
- [ ] Görsel detaylar — ordu/donanma sembolleri, isyan işaretleri, savaş detay gösterimi
- [ ] Alan adı kararı *(~10 dk: depo ayarları > Pages > Custom domain)*

---

## Biten işler

- [x] Petek motoruna geçiş — historical-basemaps terk edildi
- [x] 567 yerleşim, 424 dönem, 97 devlet gövdesi
- [x] Kronoloji: 799 madde, tamamı doğrulanmış TDV bağlantılı
- [x] **Değişmez 1** — sahipsiz yerleşim 80'den 29'a; kalan 29 kasten boş
- [x] **Değişmez 2** — 424 harita kırılmasının 424'ü maddeli
- [x] Ada katmanı — 74 nokta; Sardinya, Kefalonya, Girit, Kıbrıs sahte sahiplenmeleri bitti
- [x] Fetret Devri — şehzade payları ayrı ayrı, kırmızı tonlarında
- [x] Sefer güzergâhları menzil yollarına oturtuldu (36 sefer)
- [x] 36/36 padişah portresi (kamu malı, Wikimedia)
- [x] GitHub Pages yayını — https://emrelic.github.io/osmanli-tarih-atlasi/

---

## 🎨 PALET STRATEJİSİ — Asya merge'inden ÖNCE çözülmeli

MOTOR ölçtü (`OTURUM-16-ILERLEME.md §23`): bekleyen dört dosya tarandığında
**24 renklik aday palet 30 kimliğe yetmedi** — `ADAY KALMADI`. Çoğu
`yerlesimler_asya.js`'ten: Majapahit, Edo, Qing, Delhi, Ming, Ainu…

Bugün acil değil çünkü harita penceresi `box(-12, 1.5, 62, 62)` ve Asya dosyası
zaten çizilmiyor. **Ama merge sırası ona geldiğinde iş "birkaç hex daha ekle"
olmayacak.**

Ölçülmüş dayanaklar:
- DSATUR: 261 kimliğin **hepsi** eklense **8 renk** yetiyor (maks derece 72) —
  yani sorun renk SAYISI değil, **ayırt edilebilir hex** sayısı
- Doğru kaldıraç **renk paylaşımı**: hiç aynı anda var olmamış kimlikler aynı
  hex'i kullanabilir. Bugün 5 çift paylaşıyor, hiçbiri komşu değil
- 🔴 Kimlik **birleştirme** yanlış kaldıraç: ölçüldü, DSATUR 4→5'e çıkıyor ve
  "hayalet birleşik devlet" üretiyor (`OGRENILENLER §12`)

Yani çözüm üç yoldan biri: (a) paylaşım havuzunu sistematik büyütmek,
(b) bölgeye göre ayrı palet, (c) doygunluk/parlaklık ekseninde açılım.
**Hangisinin kaç kimlik kazandırdığı ÖLÇÜLMEDEN seçilmemeli.**
