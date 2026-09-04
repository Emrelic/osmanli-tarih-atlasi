# KRONOLOJİ ÖLÇÜTÜ — 4 Eylül 2026

> Bu dosya **kabul ölçütüdür**. Kronoloji dolduran her oturum önce bunu
> okur. Ölçüt yazılı olmazsa her oturum kendi anladığını yazar ve
> teslimler karşılaştırılamaz hâle gelir.

## EMRE'NİN CÜMLESİ — ölçütün kaynağı

> *"Kronolojilerde devletlerin **kuruluşu**, **toprak kayıp ve
> kazançları**, girdikleri **savaşlar**, **ittifaklar**, **anlaşmalar**,
> **isyanlar**, **iç savaşlar**, **hükümdar tahta çıkma ve inmeleri**
> gibi **siyasî olayları** belirtmeli."* — 4 Eylül 2026

## DOKUZ CİNS — ve `tur` alanındaki karşılıkları

Bu cins **serbest metne gömülmez**, `tur:` alanına yazılır. Sebebi
`§11`in tek soruluk sınavı: ***bu bilgiyi bir `if` ile sorabiliyor
muyum?*** Sorulabiliyor — 1980 maddenin 1980'inde `tur` alanı var.

| Emre'nin cinsi | `tur:` değeri | bugün |
|---|---|---|
| kuruluş | `kurulus` | 509 madde · 494 künye (%84) |
| yıkılış / son | `son` | 424 · 418 künye (%71) |
| toprak kayıp/kazanç | `toprak-kazanc` · `toprak-kayip` · `isgal` | 264 · 183 künye (%31) |
| savaşlar | `savas` | 213 · 152 künye (%26) |
| anlaşmalar | `antlasma` | 168 · 140 künye (%24) |
| hükümdar değişimi | `hukumdar` | 180 · 138 künye (%23) |
| iç savaş / bölünme | `bolunme` · `ic-savas` | 70 · 59 künye (%10) |
| isyanlar | `isyan` | 51 · 47 künye (%8) |
| ittifaklar | `ittifak` | 36 · 29 künye (%5) |

🔴 **DOKUZ CİNSİN DOKUZUNU taşıyan künye: 1 / 591.** İş budur.

### 🔴 SÖZLÜK KAYMASI — ölçüldü, düzeltilmedi, BİLİNMELİ
```
toprak-kayip 105 · kayip 7 · toprak 2   ⇒ ÜÇÜ DE aynı cins
```
**Yeni madde yazarken `kayip` ya da `toprak` KULLANMA** — `toprak-kayip`
ya da `toprak-kazanc` yaz. Var olan 9 kaymış maddeyi düzeltmek Oturum 0'ın
işidir, seninki değil.
🔴 `ic-savas` diye bir `tur` bugün **YOK**; en yakını `bolunme`. Yeni bir
iç savaş maddesi yazarken **`ic-savas`** kullan — ölçer onu tanıyor.

## PENCERE MUAFİYETİ — yanlış iş yazdırmasın

```
kurulus   künyenin `f`si 1281'den ÖNCEYSE ARANMAZ
son       künyenin `t`si 1923'ten SONRAYSA ARANMAZ
```
🔴 Bizans'ın `kurulus` maddesi yok ve **olmaması doğru** — 330'da kuruldu,
atlas penceresi 1281'de başlıyor. Muafiyeti bilmeyen bir oturum
*"Bizans'ın kuruluşunu yaz"* diye **yanlış bir iş** yapardı.
⚠️ Muafiyet yalnız bu iki cinstedir. Bir devlet pencere boyunca hiç
savaşmamış olabilir — ama bunu **ölçemeyiz**, o yüzden ötekiler muaf
değildir; yoksa "yok" sayılır.

## ÖLÇÜM ALETİ — ilerleme buradan okunur

```bash
py denetim/ARAC-KRONOLOJI-KAPSAM-0904.py            # genel tablo
py denetim/ARAC-KRONOLOJI-KAPSAM-0904.py --bolge    # bölge bölge
py denetim/ARAC-KRONOLOJI-KAPSAM-0904.py --eksik savas    # o cinsi taşımayanlar
py denetim/ARAC-KRONOLOJI-KAPSAM-0904.py --kunye <id>     # tek künyenin karnesi
```
⚠️ **Bu araç kapsamayı ölçer, DOĞRULUĞU ÖLÇMEZ.** *"%100 kapsama"* demek
*"kronoloji tam"* demek **değildir**; yalnız her cinsten en az bir madde
bulunduğunu söyler. İkisini karıştırmak `§11`in *"ölçüm doğru, çıkarım
yanlış"* ailesine düşmektir.

## MADDE BİÇİMİ

```js
{ t:"1526-08-29", tur:"savas", b:"Mohaç Meydan Muharebesi — Macar ordusu yenildi" }
```
```
t     🔴 GÜN yaz. Gün bilinmiyorsa `YYYY-01-01` (§4). AY hassasiyeti YOK.
tur   yukarıdaki sözlükten, TEK değer
b     tek cümle · olayın KENDİSİ · yorum değil
```

## 🔴🔴 KAYNAK — bu projenin kırmızı çizgisi

```
🟢 ÖNCE TDV   islamansiklopedisi.org.tr — İslâm dünyası, Osmanlı ve komşuları
🟢 DIŞARISI   Encyclopaedia Iranica · Cambridge History serileri · üniversite
              yayınları · hakemli dergi · alanın standart el kitabı ·
              birincil kaynak neşri
🔴 ASLA       forum · blog · içerik çiftliği · kaynaksız derleme · yapay zekâ
              üretimi metin · "tarih sayfası" tipi popüler site
🟡 Vikipedi   TEK DAYANAK DEĞİL — yalnız "hangi maddeye bakayım" sorusunu
              cevaplar
```

### TDV tuzakları — dördü de ölçülmüş, dördüne de düşüldü
```
① ÖLÜ SLUG            302 döner (arama sayfasına yönlenir) ⇒ madde YOK
                      test: curl -s -o /dev/null -w "%{http_code}" <url>
② CANLI SLUG, YANLIŞ MADDE   `ordu`→askerî ordu (şehir: `ordu--sehir`)
                      `saray`→mimarî · `cin`→fıkıh terimi (`cin--ulke`)
③ CANLI SLUG, BOŞ GÖVDE      200 + doğru başlık ama içerik YOK (`mogadisu`)
④ BOİLERPLATE GÖVDE          200 + doğru başlık, gövde HİÇ GELMEZ
                      ⇒ "TDV'de yok" DEME, "çekilemedi" de
```
🟢 **Dar slug tutmazsa KAPSAYICI maddeyi dene** — ve yön ölçülmüş:
TDV bir **olay** ansiklopedisi değil, **YER-KİŞİ** ansiklopedisidir.
```
OLAY slug'ları      %100 ölü      YER · KİŞİ · YAPI      %2 ölü
kasr-i-sirin-antlasmasi  302  →  murad-iv  200, ve olayı GÜNÜYLE veriyor
```
⇒ Bir savaşın maddesi yoksa **geçtiği yere** ya da **başındaki kişiye** bak.

🔴 **`kaynak:` alanı ZORUNLU ve GİZLENMEZ.** Bulunamadıysa `bulunamadı`
diye **yaz**. *Kaynağı yazılmayan bilgi, kaynağı olmayan bilgiden ayırt
edilemez.*

## 🔴 HÜKÜM — TESLİM BİÇİMİ (4 Eylül 2026, koordinatör)

**Üç oturum da açılır açılmaz aynı çelişkiyi bağımsız bildirdi:** şartname
`DİZİ` diyordu, bu ölçüt `NESNE`; alan adları da ayrışıyordu
(`kunye`/`id` · `ekle`/`eklenen`). **Sapma şartnamedeydi ve benim
hatamdı.**

```
① OTORİTE   BU DOSYA. Şartname per-oturumdur, ölçüt ORTAK KABUL
            ÖLÇÜTÜDÜR — üç oturum TEK biçim üretmek zorunda.
② `d`       İSTEĞE BAĞLI. Yamada KALIR, `devletler.js`e İNMEZ.
            🔴 Atılmıyor: ileride bir `olaylar_ek*` pasının ham maddesi.
               Bu bir sessiz düşürme DEĞİL, yazılı bir karardır.
③ `kesinlik` KALDIRILDI — o bir DÖNEM UCU alanı (`VERI-YAPISI.md`),
            madde alanı değil.
④ `kaynak`  MADDEYE İNER. Şema genişliyor ve `VERI-YAPISI.md`ye yazıldı.
⑤ Mevcut 1980 madde kaynaksız KALIR — iki katmanlı külliyat, ve bu bir
   kusur değil KAYIT: `kaynak` taşıyan madde *"4 Eylül 2026 sonrası,
   kaynağı ölçülmüş"* demektir.
```

**NİÇİN ④ böyle:** `kaynak` yalnız yamada kalsaydı `grep` onu bulurdu ama
**makine bulamazdı** — `§4`ün kırmızı çizgisi ancak veriye inerse bir `if`
ile sorulabilir. Timbuktu'nun `bos:`/`neden:` alanlarının *aracın alan
kümesinde olmadığı için* düştüğü vakanın aynısı: doğru biçimde yazılmış
bir beyan, onu yazacak alan yoksa **sessizce düşer**.

**NİÇİN ② böyle:** `VERI-YAPISI.md`:
> *"`kronoloji[].b` — Kısa başlık, tek satır. **Burası bir DİZİNDİR,
> `olaylar*.js` değil**"*

Künye kronolojisi bir **dizin**dir; 2-4 cümlelik anlatının evi
`olaylar*.js`tir. Şartnameye `d` yazmakla iki ayrı yapıyı karıştırmıştım.

## 🔒 NEREYE YAZILIR — ve niçin oraya değil

🔴 **`data/devletler.js`ye DOKUNMA.** Üç oturum aynı dosyaya yazarsa
`§7`nin *sessiz veri kaybı* vakası olur — ve o dosya tek satırlık
kayıtlardan oluşuyor, tam da en kırılgan biçim.

⇒ Sen **yama dosyası** yazarsın:
```
denetim/KRONOLOJI-<SENİN-ADIN>-0904.json
```
```json
{ "oturum": "<AD>", "damga": "<tarih saat>",
  "kunyeler": [
    { "id": "azteklerin", "eklenen": [
        { "t":"1519-11-08", "tur":"savas",
          "b":"Cortés Tenochtitlan'a girdi",
          "kaynak":"amerika — TDV, gövdede AYNEN: «…»" }
    ] }
  ] }
```
Birleştirmeyi **Oturum 0 (1.MURAT)** yapar.

⚠️ **KOŞU 4 SÜRÜYOR** (~09:15'e kadar): `data/` ve üç motor dosyası
(`uret_petek.py` · `renkler.py` · `girdi.py`) **DONMUŞ**. `denetim/` ve
`oturumlar/` donmuş **değil** — sen orada serbestçe çalışırsın.

## HABERLEŞME — `§7.1`

```
py arac/tahta.py yaz --kim "<SENİN ADIN>" --kime "1.MURAT" --mesaj "..."
```
🔴 **Kendi pencerene yazmak = hiç cevap vermemek.** Koordinatör senin
ekranını GÖRMEZ.
```
AÇILINCA     "açıldım, ölçütü okudum, şu künyeler bende"
KALEM KALEM  bir bölge bitince HEMEN — biriktirme
SORU GELİNCE iş sürerken bile: "iş üstündeyim · şu aşamadayım · ~ne kadar kaldı"
BİTİNCE      SAYIYLA: "33 künyenin 28'i, kalan 5'i şu sebeple"
AKSAKLIK     BEKLETME — kaynak çelişkisi, şartname hatası, beklenmedik sayı
```

### ÜÇ ŞEY TAŞI (`E7`)
```
① NE ÖLÇTÜM        sayıyla
② NEYİ BULAMADIM   açıkça — "bulunamadı" diye YAZ, boş bırakma
③ NE İSTİYORUM     tek cümle
```

## KABUL ÖLÇÜTÜ — teslimin sınanacağı şey

```
🟢 her künye için EN AZ: kuruluş(muaf değilse) · son(muaf değilse) ·
   ve mümkün olan her cinsten birer madde
🟢 her maddede `t` GÜN hassasiyetinde · `tur` sözlükten · `kaynak` DOLU
🔴 uydurulmuş tarih YOK — bilinmiyorsa YYYY-01-01
🔴 kaynağı olmayan madde YOK — bulunamadıysa `bulunamadı` yaz
```
📌 Ve **çürüyen bir öngörü, tutan bir öngörüden değerlidir.** Beklediğinden
farklı bir sayı ölçersen onu **yaz** — düzeltilmesi gereken bir şey
bulmuşsun demektir.
