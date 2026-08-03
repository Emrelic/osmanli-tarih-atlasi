# PADİŞAH KARTVİZİTİ — "nasıl bilirdiniz"

> **Kullanıcının tarifi (3 Ağustos 2026):**
> *"Hükümdarın ölüm tarihinde kronolojide bu kart çıksın, madde başlığı ve
> madde içeriği olarak. Yani ölen kişi için imam soruyor ya, «nasıl
> bilirdiniz» diye. Ölen kişinin arkasından övgüleri, yergileri,
> sitemleri, suçlamaları, rahmetle anmaları bu kartvizitlerde
> anlatacağız."*

🔴 **Bu bir künye DEĞİL, bir CENAZE KARŞILAMASIDIR.** Fark önemli:
künye *"ne yaptı"* der, bu kart *"arkasından ne dendi"* der. İkincisi
tartışmayı da taşır — ve tartışmanın kendisi tarihtir.

---

## ÖLÇÜLDÜ — bugünkü durum

```
data/padisahlar.js   41 kayıt · 4.045 bayt
                     ALANLAR: id · ad · from · to   ← BİYOGRAFİ YOK
data/kisiler.js      193 kayıt · 63 KB
                     ALANLAR: id · tur · ad · donem · not · t · devlet · f
                     `not` alanı TEK CÜMLE — kartvizit değil, etiket
```
⇒ Padişah kartı **sıfırdan kurulacak.** Elde yalnız saltanat aralıkları var.

## 🔴 ÖNCE BİR ÖNCELİK NOTU (`YASALAR G8` gereği)

Bu iş **ANSİKLOPEDİ EKSENİ**ne girer ve `ONCELIK.md` şunu söylüyor:
*"Açık pencere bitmeden yeni pencere açılmaz."* 1900-1923 hâlâ ince,
kutuda 54 açık madde var.

**Ama itiraz etmiyorum, üç sebeple:**
```
① Padişah kartı YENİ PENCERE DEĞİL — mevcut pencerenin içini dolduruyor
② 36 padişah SONLU bir liste; "ne kadar aparırsak" belirsizliği yok
③ Ölüm tarihleri ZATEN kronolojide kırılma; kart oraya oturuyor,
   yeni bir eksen açmıyor
```
⇒ Sıra: **ANSİKLOPEDİ EKSENİ'nin BİRİNCİ kalemi.** (Önceki sıralamada
"kurumlar" birinciydi; padişah kartı onun önüne geçiyor, çünkü daha
sonlu ve kronolojiye zaten bağlı.)

---

## ŞEMA — `data/padisahlar.js` genişletilir

⚠️ Yeni dosya AÇILMAZ. `padisahlar.js` zaten padişahın tek otoritesi;
ikinci dosya iki otorite demektir.

```javascript
{ id:"bayezid2", ad:"II. Bayezid (Velî)", from:"1481-05", to:"1512-04",

  // ── KÜNYE — kısa, kesin, tartışmasız ────────────────────────────
  dogum:   "1447-12-03",  dogum_yer:"Dimetoka",
  olum:    "1512-05-26",  olum_yer:"Havsa yolu",   olum_sebep:"şüpheli",
  baba:    "II. Mehmed (Fatih)",
  anne:    "Gülbahar Hatun",
  yetisme: "Amasya sancağında lalası Mehmed Ağa gözetiminde",
  tahta:   "1481-05-22",  yas_tahta:33,  saltanat_yil:31,
  lakap:   ["Velî", "Sofu"],
  unvan:   ["Sultânü'l-Berreyn ve Hâkanü'l-Bahreyn"],

  // ── MAGAZİN — kullanıcının istediği yüz ─────────────────────────
  esler:   ["Gülbahar Hatun", "Şirin Hatun", "Nigâr Hatun", "Hüsnüşah Hatun"],
  cocuk:   { oglan:8, kiz:12 },
  skandal: "Kardeşi Cem'le 14 yıl süren taht kavgası; şehzadesi Selim'in
            silahlı isyanıyla tahttan indirildi ve yolda öldü.",

  // ── 🔴 NASIL BİLİRDİNİZ — kartın kalbi ──────────────────────────
  ovgu:    "Sofuluğu, âlimleri koruması, İstanbul depremi sonrası imarı;
            donanmayı Kemal Reis'le Akdeniz'de ilk kez Venedik'e denk hâle
            getirmesi.",
  yergi:   "Babasının fetih temposunu bırakıp otuz yıl savunmada kalmakla,
            Cem meselesinde Papalık'a yıllık ödeme yapmakla suçlandı.",
  tartisma:"Ölümü tabiî mi zehirlenme mi — kaynaklar ayrışır.
            'Velî' lakabı çağdaş mı sonradan mı verildi, ihtilaflıdır.",
  tarihciler:"Klasik Osmanlı tarihçiliği 'duraklama' başlığı altında
            değerlendirir; yeni araştırmalar mâlî ve denizcilik
            reformlarının Yavuz'un seferlerini finanse ettiğini savunur.",

  kaynak:  "TDV: bayezid-ii"
}
```

## 🔴 ÜÇ KURAL

**① UZUNLUK — `ANSİKLOPEDİ EKSENİ Kural ⓪`ya tâbi.**
```
her alan  2-4 cümle · ÖLÇÜ: `ozet` ortancası 175 karakter
kart toplamı 900 karakteri geçmez — kartvizit, makale değil
```

**② `ovgu` / `yergi` / `tartisma` ÜÇÜ BİRDEN yazılır.**
⚠️ Yalnız övgü yazmak propaganda, yalnız yergi yazmak polemiktir.
Bir padişah için yergi bulunamıyorsa **"bulunamadı" yazılır** — boş
bırakılmaz. Negatif sonuç da sonuçtur.

**③ TARAF TUTULMAZ, TARAFLAR YAZILIR.**
*"II. Bayezid pasifti"* değil → *"pasiflikle suçlandı; savunanlar hazineyi
ve donanmayı Yavuz'un seferlerine hazırladığını söyler."*
📌 Kullanıcının kendi çerçevesi bunu zaten dayatıyor: cenazede hem
rahmetle ananlar hem sitem edenler konuşur.

---

## KRONOLOJİYE BAĞLANMA

```
padişahın ÖLÜM TARİHİNDE kronolojide bir madde belirir:

  başlık   "II. Bayezid'in ölümü — nasıl bilinirdi"
  tür      "vefat"                         ← yeni tür, lejanta eklenecek
  içerik   ovgu + yergi + tartisma, kısa   ← kartın kalbi
  görsel   padişahın portresi              ← ⚠️ p4/H-0015 kuralı: burada
                                             portre DOĞRU, çünkü madde
                                             padişahın KENDİSİ hakkında
```
⚠️ Tahttan indirilip sonra ölenlerde **iki ayrı olay** vardır (hal' ve
vefat). Kart **vefata** bağlanır; hal' kendi maddesinde kalır.
⚠️ `padisahlar.js`te II. Murad ve II. Mehmed **ikişer kez** geçiyor (çift
saltanat). Kart **bir kez** çıkar — `id` başına tek vefat.

---

# KAPSAM — yalnız padişahlar değil

> **Kullanıcının genişletmesi (3 Ağustos):** *"36 padişahı ve ondan
> gayrı saltanat mücadelesine girmiş ama kaybetmiş olan şehzadeleri,
> valide sultanları ve önemli sadrazamları, komutanları bu kartvizitlerle
> «nasıl bilirdiniz» sorusuna muhatap tutarak anlatalım."*

**Doğru genişletme** — ve aslında kartın mantığını güçlendiriyor: kaybeden
şehzadenin arkasından söylenenler, kazananınkinden daha çok tartışılır.

## ÖLÇÜLDÜ — aday havuzu

```
padisahlar.js         41 kayıt (çift saltanatlar dahil) →  36 kişi
kisiler.js           281 kayıt · ölüm tarihi (t:) olan 197
   yabanci-hukumdar  166   ⬜ kapsam DIŞI (bu atlas Osmanlı anlatıyor)
   alim               24
   sadrazam           20
   komutan            20
   yabanci-komutan    13   ⬜ dışı
   siyasi             13
   vezir-pasa          9
   denizci             5
   mimar               4 · edebiyatci 4 · hanedan 3
```
⚠️ `hanedan` yalnız **3 kayıt** — yani kaybeden şehzadeler ve valide
sultanlar **dizinde neredeyse yok.** Bu bir eksiklik ve kart işinden
önce kapanması gerekiyor.

## 🔴 KART KİME YAPILIR — tek ölçüt

```
Kartın yeri ÖLÜM TARİHİDİR. Ölüm tarihi bilinmeyen kişiye kart YAPILAMAZ.
```
📌 Bu kural bir kısıt değil, **doğal filtredir**: kart kronolojide bir
maddeye oturur; oturacak yeri olmayan kart, olmayan karttır.
⚠️ Yaklaşık tarihli olanlar (`ö. 1515` gibi) kabul edilir ama
**yıl hassasiyeti** kartta AÇIKÇA yazılır — uydurma gün konmaz.

## KADEMELER — sonlu ve sayılı

| kademe | kim | kaç | durum |
|---|---|---|---|
| **K1** | **Padişahlar** | 36 | liste hazır (`padisahlar.js`) |
| **K2** | **Taht mücadelesini kaybedenler** | ~18 | 🔴 dizinde YOK, önce toplanacak |
| **K3** | **Valide sultanlar ve hanedan kadınları** | ~12 | 🔴 dizinde YOK (`hanedan` 3 kayıt) |
| **K4** | **Sadrazamlar** | 20 | dizinde var, kart alanı yok |
| **K5** | **Komutanlar + denizciler** | 25 | dizinde var |
| **K6** | **Âlim · mimar · edebiyatçı** | 32 | ⚪ sonra — ölümleri kronolojide kırılma değil |
```
K1-K5 toplamı ≈ 111 kart. K6 ile 143.
```

### K2 — kaybedenler, örnekleriyle
```
Süleyman Çelebi · Musa Çelebi · İsa Çelebi   (Fetret)
Düzmece Mustafa · Küçük Mustafa
Cem Sultan                                    ← p4/H-0003'te zaten istendi
Şehzade Mustafa (Muhteşem Süleyman'ın oğlu) · Şehzade Bayezid
Şehzade Selim (III. Mehmed'in) · Genç Osman   ← tahta çıkmıştı, ama K1'de
```
🔴 **K2 kartın en güçlü olduğu yerdir.** Şehzade Mustafa'nın ardından
söylenenler (Taşlıcalı Yahyâ'nın mersiyesi, ordunun tepkisi, Rüstem
Paşa'nın azli) tam olarak *"nasıl bilirdiniz"*in cevabıdır.

### K3 — valide sultanlar
```
Nurbanu · Safiye · Handan · Halime · Kösem · Turhan · Gülnuş ·
Mihrişah · Nakşidil · Bezmiâlem · Pertevniyal
```
⚠️ Bunlar için `ovgu`/`yergi` dengesi **özellikle zordur**: kaynaklar ya
"kadınlar saltanatı" diye yerer ya hayır işleriyle över. **Üçünü birden
yaz** kuralı burada en çok işe yarar.

## SIRA — 36 padişah, üç partide

```
PARTİ 1  kuruluş → Fatih          Osman · Orhan · I. Murad · Yıldırım ·
                                  Çelebi Mehmed · II. Murad · Fatih   (7)
PARTİ 2  Bayezid → Köprülüler     II. Bayezid'den IV. Mehmed'e       (12)
PARTİ 3  Lâle Devri → 1922        II. Mustafa'dan VI. Mehmed'e       (17)
```
📌 Parti 1 önce: en çok bilinen, kaynağı en zengin, kartın üslubunu
oturtur. **Üslup Parti 1'de kabul edilmeden Parti 2'ye geçilmez.**

## KAYNAK

TDV asıldır (`osman-i`, `orhan-bey`, `murad-i`, `bayezid-i`…). Her
padişahın maddesi vardır. ⚠️ `ovgu`/`yergi` için TDV'nin "değerlendirme"
bölümü doğrudan kullanılabilir — orada tartışma zaten özetlenir.
Wikipedia **tek başına kaynak değildir.**
