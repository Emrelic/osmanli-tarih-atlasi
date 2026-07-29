# Oturum 4 — İran, Irak ve Doğu Kafkasya yerleşim katmanı

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-4-IRAN-YERLESIM.md dosyasını oku ve içindeki görevi yap

Model: **Opus**. Gerekçe aşağıda, "neden Opus" başlığında.

---

## Önce oku
`CLAUDE.md` — kurallar, üç değişmez, **§4 TDV ölü slug tuzağı** ·
`VERI-YAPISI.md` — `yerlesimler.js` şeması, alan alan ·
`MIMARI.md` §2 (petek motoru ve tek zayıf noktası) ve §5 (yoğunluk ölçütü).

## Senin işin

**İran, Irak, Doğu Kafkasya ve Körfez'in yerleşim katmanını 1288 temel alınarak
kurmak** — ve tarih ilerledikçe sahneye çıkan şehirleri kuruluş tarihleriyle
işaretlemek.

Bugün bu coğrafyada **66 nokta** var ve çoğu Osmanlı sınır hattında. İç İran
seyrek: Nişabur, Merv, Sultaniye, Save, Kâşan, Tûs, Sebzevar, Sîstan, Şuşter,
Ahvaz, Hille, Necef, Sâmerrâ, Tikrit, Erbil, Süleymaniye gibi tarihî merkezler
yok. Hedef: bu kutuda **150-200 nokta**.

## ⚠️ Coğrafi sınır: 62° doğu boylamı

`arac/uret_petek.py` haritayı `box(-12, 1.5, 62, 62)` kutusunda çiziyor.
**Doğu sınırı 62°D.** Bunun dışına nokta ekleme:

| Yer | Boylam | Durum |
|---|---|---|
| Tebriz, İsfahan, Şiraz, Bağdat, Kirman | 44-57°D | ✅ ekle |
| Meşhed, Herat | 59-62°D | 🟡 sınırda, ekle |
| **Merv, Buhara, Semerkant, Hîve** | 62-67°D | ❌ **EKLEME** |

Orta Asya ayrı bir faz. Kutu ancak yoğunluk sağlandıktan sonra doğuya açılacak;
şimdi açılırsa mevcut peteklerin kenardakileri Türkistan'a yayılır
(`MIMARI.md` §2'deki emilme davranışı). Semerkant'ı şimdi eklemek işe yaramaz —
çizilmez.

## Yazabileceğin tek dosya

**`data/yerlesimler_iran.js`** — sen oluşturacaksın, biçim:

```js
// Aynı şema, aynı alanlar. Entegrasyon oturumu bunu yerlesimler.js ile
// birleştirecek; ayrı dosya yalnız çakışmayı önlemek için.
window.YERLESIMLER_IRAN = [
{ ad:"Nîşâbur", tur:"sehir", lat:36.213, lon:58.796, g:0, k:3, m:"Meşhed",
    s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"}, …], d:[], kur:"…" },
];
```

**Dokunma:** `data/yerlesimler.js` (oku, örnek al, **yazma**) ·
`arac/` altındaki her şey · `data/devletler.js`, `data/kisiler.js`,
`data/olaylar*.js` · `index.html`, `js/app.js` · kök `*.md`.

**Commit atma. `arac/uret_petek.py`'yi çalıştırma** — üretim şu an ~2,5 saat
sürüyor ve başka bir oturum motoru değiştiriyor.

## Kullanabileceğin devlet kimlikleri

Yalnız `arac/renkler.py`'de tanımlı kimlikler haritada boyanır. Bu coğrafya için
mevcut olanlar:

```
ilhanli   İlhanlı Devleti          iran        İran (genel)
timurlu   Timurlu idaresi          safevi      Safevî İran
karakoyunlu  Karakoyunlular        akkoyunlu   Akkoyunlular
memluk    Memlûk                   artuklu     Artukoğulları
gurcistan Gürcistan                umman       Umman
suud      Suûdî / Vehhâbî          sammar      Şammar (Hâil)
benihalid Benî Hâlid (Lahsa)       selcuklu    Anadolu Selçukluları
```

**Eksik gördüğün devlet varsa EKLEME — bildir.** Renk tablosu entegrasyon
oturumunun; yeni devlet gerekiyorsa (Muzafferîler, Celâyirliler, İnciû,
Kertler, Serbedârîler, Zend, Afşar…) listeyi bana ver, ben eklerim.
Tanımlı olmayan kimlik yazarsan o bölge haritada **boyanmaz**.

## 1288 zemini

O tarihte bu coğrafyanın neredeyse tamamı **İlhanlı Devleti**'dir (1256-1335).
Sonraki katmanlar kabaca: İlhanlı dağılınca Celâyirliler / Muzafferîler /
Kertler → Timurlu (1370-1507) → Karakoyunlu ve Akkoyunlu → Safevî (1501-1736)
→ Afşar → Zend → Kaçar. Osmanlı-Safevî sınırı 1514 Çaldıran'dan 1639 Kasr-ı
Şîrîn'e kadar oynar, sonra sabitlenir.

Bu zinciri her yerleşim için **kendi tarihiyle** kur; toptan kopyalama.

## Tarih sahnesine çıkan ve silinen yerleşimler

Kullanıcının özellikle istediği şey bu. İki alan kullan:

```js
kur:"1305-01-01",   // yerleşim bu tarihte kuruldu; öncesinde yoktur
bit:"1221-02-25",   // yerleşim yok oldu / terk edildi
```

Bu coğrafyada çok işleyecek: Sultaniye 1305'te kuruldu; Moğol istilası
Nîşâbur'u (1221) ve Rey'i yerle bir etti; bazıları yeniden kuruldu, bazıları
kurulmadı.

> ⚠️ **Dürüst uyarı:** motor bugün `kur:` alanını **okumuyor** — bu bilinen bir
> borç (`MIMARI.md` §3.1, denetim raporunda B-5). Yani yazdığın kuruluş
> tarihleri haritada **henüz** karşılık bulmayacak; kurulmamış şehrin peteği
> erken tarihlerde de yer kaplayacak. Yine de **yaz**: zaman dilimli Voronoi
> yapıldığında veri hazır olacak. Yazmazsan sonradan tek tek araştırmak gerekir.

## Bölge ataması — `k` ve `m`

`k` idari kademe (0-4), `m` bağlı olduğu k1/k2 merkezinin **adı**.
`m` bir yerleşim adına **birebir** eşleşmeli, yoksa bölge katmanı kırılır.

Bölge sınırı topografyayı zaten takip ediyor — motor petek sınırlarını nehir
yataklarına, dağ sırtlarına ve kıyıya yaslıyor. **Senin işin sınır çizmek
değil, doğru yere doğru nokta koymak.** Zagros'un iki yakasına ayrı nokta
koyarsan sınır zaten sırttan geçer.

> ⚠️ `m` alanının **zaman boyutu yok** (bilinen borç, `MIMARI.md` §3.4). Bir
> yerleşim bütün tarih boyunca tek merkeze bağlı. Bu yüzden `m`'yi seçerken
> **en uzun süre bağlı olduğu** merkezi yaz, kısa süreli olanı değil.

## Kaynak kuralı
**TDV birincil** — bu coğrafya TDV'nin en güçlü olduğu alan (Nîşâbur, Merv,
Rey, Sultaniye, Şîraz, İsfahan, Erdebil… hepsinin maddesi var).

⚠️ **Ölü slug tuzağı:** olmayan slug için de HTTP 200 döner; `<title>`
"Arama - TDV İslâm Ansiklopedisi" ise madde **YOKTUR**. Arama:
`https://islamansiklopedisi.org.tr/arama/?q=<kelime>`

**Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01`.
**Ad yazımı:** Türkçe tarih yazımına uy — "Nîşâbur", "Sultâniye", "Şîraz".
Parantezle modern karşılığı verilebilir: `"Rey (Tahran)"`.

## Kendi kendini denetle — her partiden sonra koştur

```bash
# 1) Yeni noktalar karada mı? (denizde duran nokta haritada işaret bırakır)
#    Kendi betiğini yaz: nokta veri-kaynak/ne_10m_land.geojson içinde mi.

# 2) 3 km içinde mükerrer var mı? Yaşanmış hata: Varat/Varad 1 km arayla iki
#    kayıt; Afyon ve Karahisâr-ı Sâhib 100 m arayla ÇELİŞEN zaman çizgileriyle.

# 3) Sahipsizlik: her yerleşim, var olduğu her tarihte s/d/v'den birine sahip mi?

# 4) Kapsama — hedef 120 km (İran içi normal), çöllerde 300 km:
py arac/denetle_kapsama.py --esik 120
```

## Neden Opus

Bu işin mekanik yarısı denetlenebilir: koordinat karada mı, mükerrer var mı,
kapsama tutuyor mu — araçları var. **Denetlenemeyen yarısı asıl iş**: bir şehrin
1288'deki sahibi, kuruluş yılı, hangi eski adla anıldığı. Bu hatalar sessiz
geçer; harita geçerli görünür, üç değişmez temiz çıkar, hiçbir test ötmez.

Bu projede tam olarak bunun iki örneği yaşandı ve aylarca fark edilmedi:
**Kilitbahir 19 km yanlış yerdeydi** ve **18 beyliğin hepsi yanlış tarihte
başlıyordu**.

## Çalışma düzeni
Partiler hâlinde, her partiden sonra dosyayı kaydet:
1. **Batı İran ve Azerbaycan** — Tebriz çevresi, Sultâniye, Zencan, Erdebil, Merâga, Urmiye
2. **Irak** — Bağdat çevresi, Sâmerrâ, Tikrit, Hille, Necef, Kûfe, Vâsıt, Erbil, Süleymaniye
3. **Orta İran** — Rey, Kum, Kâşan, Save, İsfahan çevresi, Yezd
4. **Güney İran** — Şîraz, Kirman, Hürmüz hattı, Bender Abbas, Sîstan
5. **Kuzeydoğu İran** — Nîşâbur, Tûs, Meşhed, Sebzevar, Damgan, Bistâm, Herat (62°D sınırı!)
6. **Hazar kıyısı ve Doğu Kafkasya** — Gîlan, Mâzenderan, Şirvan, Derbend, Kuba
7. **Körfez ve Doğu Arabistan** — mevcut noktalar seyrek; Katîf, Uyûn, Buraydâ

Her parti sonunda `oturumlar/OTURUM-4-ILERLEME.md`'ye yaz: hangi bölge, kaç
nokta, hangi devlet kimlikleri kullanıldı, eksik gördüğün devletler.

## Bitirdiğinde
Kaç nokta eklediğini, kapsama ölçümünün önce-sonra değerini ve **eklenmesini
istediğin devlet kimliklerinin listesini** entegrasyon oturumuna bildir.
**Commit etme.**
