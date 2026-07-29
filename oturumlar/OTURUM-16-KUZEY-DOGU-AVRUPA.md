# Oturum 16 — Kuzey ve Doğu Avrupa yerleşimleri

**Model: Opus.** (Haiku bu projede kullanılmaz — §5'teki TDV tuzağını kaçırıyor.)
**Yazacağın tek dosya: `data/yerlesimler_kuzeydogu.js`.** Başka hiçbir dosyaya
dokunma, commit yapma; entegrasyon oturumunun işi.

## 0. İlk iş

`CLAUDE.md`'yi oku — özellikle §2 (petek motoru ve emilme davranışı), §3 (üç
değişmez), §4 (kaynak kuralı), §6 (kapsam sırası). Sonra `VERI-YAPISI.md`'deki
yerleşim şemasını ve `data/yerlesimler_avrupa.js`'in başındaki uyarı bloğunu
oku — senin çıktın onunla aynı biçimde olacak.

## 1. Bu oturum neden var — ölçülmüş bir seyreklik

Nokta yoğunluğu (bin km² / nokta; küçük = iyi), bugün:

```
Anadolu ....................  5     Irak-Mezopotamya .........  17
Balkanlar ..................  7     İran-Kafkas ötesi ........  19
İtalya-Orta Avrupa .........  21    Kırım-Kafkasya ...........  24
KUZEY-DOĞU AVRUPA ..........  99    ← bu oturum
```

Kutu: **boylam 15-45°D, enlem 44-62°K.** İçinde şu an **30 nokta** var. Bekleyen
merge partilerinden (Oturum 12'nin 228 noktası) bu kutuya yalnız **10'u** düşüyor
— yani birleştirme yapıldıktan sonra bile 74'te kalıyor ve **pencere içindeki en
zayıf bölge olarak öne çıkıyor.**

Neden önemli: bu kutu Osmanlı'nın **kuzey sınırının tam karşı yakası**. Kamaniçe,
Hotin, Azak, Özi, Bender bu hattın üstünde ve haritada "LEHİSTAN", "BOĞDAN
VOYVODALIĞI" etiketlerinin oturduğu yer burası. Nokta olmadığı için Lehistan'ın
peteği Baltık'a, Moskova'nınki Urallar'a doğru şişiyor (MIMARI.md §2 — "noktası
olmayan bölge en yakın peteğe emilir"). Kullanıcı sınır bölgelerindeki bu tür
şişmeleri ekran görüntüsüyle tek tek yakalıyor.

## 2. Kapsam

Boylam **15-45°D**, enlem **44-62°K**.

> ⚠️ **ALT SINIR 48'DEN 44'E İNDİRİLDİ — 2026-07-30, hatalar 7.docx madde 1.**
> İlk yazımda "altı Balkanlar ve Kırım-Kafkasya kutularında zaten doygun"
> demiştim. **Yanlıştı.** O iki kutunun ortalaması doygun görünüyor ama
> aralarındaki **Pontik bozkır** (Kırım'ın kuzeyi, Kuban, aşağı Volga, Don
> havzası) neredeyse boş. Kullanıcı bunu ekranda gördü:
>
> *"Kırım hanlığı bozkırı filan gibi ve Kafkasya kuzeyindeki topraklarda tam
> olarak 1650'li yıllarda hangi yapılar vardı acaba. Bu haritadaki bozuk
> gösterimleri düzeltmemiz gerekir."*
>
> Ekran görüntüsünde "KIRIM HANLIĞI BOZKIRI" **düz kenarlı ince bir dikey
> şerit** hâlinde kuzeye uzanıyor — tek noktanın komşusuz peteğinin şişmesi.
> Aynı seyreklik Azak'ın 1696 kaybını da **53 bin km²** gösteriyor, çünkü Don
> bozkırında Azak'tan başka nokta yok. 48°K sınırı bu şeridi hiçbir oturumun
> kapsamına sokmuyordu.
>
> Üst sınır 62 çünkü motorun penceresi `box(-12, 1.5, 62, 62)` orada bitiyor —
> daha kuzeye nokta koymak boşa gider.

### 2.1 Pontik bozkır — 1650'lerde orada ne vardı

Bu şeridin doldurulması yalnız nokta eklemek değil, **kimin olduğuna karar
vermek** demek. 1650'ler kesitinde sahnedeki yapılar:

| Yapı | Konum | Not |
|---|---|---|
| Kırım Hanlığı'nın bozkır orduları | Kırım kuzeyi | Yedisan, Yedişkul, Cambuyluk — Osmanlı tâbii, `v:` olmalı |
| Küçük Nogay (Kazi-Ulus) | Kuban havzası | Kırım'a bağlı |
| Büyük Nogay Ordası | Volga'nın doğusu | 1630'larda Kalmuklarca dağıtıldı |
| Kalmuklar | Aşağı Volga | 1630'lardan itibaren |
| Don Kazakları | Don havzası | Moskova'ya tâbi |
| Zaporijya Hetmanlığı | Dinyeper orta havzası | 1648'den; 1669-1676 Osmanlı himayesi (Doroşenko) |
| Kabardey ve Çerkezya | Kuzey Kafkasya | Aşiret yapısı, Kırım/Osmanlı nüfuzu |
| Tarki Şamhallığı | Dağıstan | Osmanlı-Safevî arasında |
| Astarhan | Volga ağzı | Hanlık 1556'da bitti, Moskova'nın |

⚠️ Bunların çoğu **yerleşik şehir değil, hareketli orda.** Petek motoru noktaya
dayandığı için her biri için bir "merkez" seçmek gerekiyor (Bahçesaray, Kızılyar,
Çerkassk, Tarki, Astarhan, Azak, Çigirin gibi). Uydurma şehir icat etme — kaynağı
olan kışlak, kale ve panayır yerlerini kullan ve gerekçesini kayıt yorumuna yaz.

| Bölge | Beklenen nokta | Not |
|---|---|---|
| Lehistan-Litvanya Birliği | Krakov, Varşova, Poznan, Lublin, Lvov (Lemberg), Vilnius, Kaunas, Grodno, Brest, Kiev, Podolya kaleleri | En kalabalık küme. Kamaniçe ve Hotin ZATEN VAR — tekrar yazma |
| Prusya / Töton | Königsberg (Krolewiec), Danzig (Gdansk), Marienburg, Thorn, Elbing | 1525'te Dukalık, 1701'de Krallık |
| Livonya / Baltık | Riga, Reval (Tallinn), Dorpat (Tartu), Narva, Pernau, Mitau | 1561 Livonya'nın bölünmesi kilit kırılma |
| Moskova Knezliği → Rusya | Moskova, Novgorod, Pskov, Tver, Smolensk, Kazan, Astarhan, Nijni Novgorod, Voronej, Tula, Ryazan | Kazan 1552, Astarhan 1556 — Osmanlı-Rus teması buradan başlar |
| Ukrayna / Kazak bozkırı | Çigirin, Poltava, Harkov, Zaporijya (Sıç), Perevolok | Hetmanlık 1648-1764; Osmanlı tâbiiyeti 1669-1676 (Doroşenko) |
| İsveç | Stokholm, Uppsala, Göteborg, Kalmar, Vyborg | |
| Danimarka-Norveç | Kopenhag, Aarhus, Oslo (Christiania), Bergen | Oturum 12'de VARSA yeniden yazma — kontrol et |
| Finlandiya / Karelya | Turku (Åbo), Helsinki, Viipuri | 1809'a kadar İsveç, sonra Rusya |
| Beyaz Rusya / Smolensk hattı | Minsk, Polotsk, Vitebsk, Mogilev | Lehistan ↔ Rusya arasında çok el değiştirir |

**Hedef: 110-150 nokta** (Pontik bozkır dahil). Bu kutuyu 74'ten ~20'ye indirir, yani Balkanlar-İtalya
kademesine yaklaştırır.

⚠️ **Önce mevcudu oku.** `data/yerlesimler.js` ve `data/yerlesimler_avrupa.js`
içinde bu kutuya düşen 40 nokta var; hangileri olduğunu ÖLÇ ve tekrar yazma:

```bash
node -e "global.window={};const fs=require('fs');for(const f of ['yerlesimler.js','yerlesimler_avrupa.js'])eval(fs.readFileSync('data/'+f,'utf8'));for(const k of Object.keys(window))if(/^YERLESIMLER/.test(k))window[k].filter(y=>y.lon>=15&&y.lon<45&&y.lat>=44&&y.lat<62).forEach(y=>console.log(k,y.ad,y.lat,y.lon));"
```

## 3. En kritik kısıt — Değişmez 2

Her `d:` ve `v:` dönem sınırı haritada bir **kırılma**dır ve ±30 gün içinde bir
kronoloji maddesi ister. **Sen `data/olaylar*.js`'e yazamazsın.**

Bu kutunun tamamı Osmanlı dışıdır, yani kayıtların **neredeyse hepsi `s:`
olacak** — ve `s:` → `s:` geçişleri kırılma SAYILMAZ. Yani tarih seçmekte
serbestsin ve bu oturumun işi tam bu yüzden kolaydır: Lehistan'ın Rusya'ya,
Livonya'nın İsveç'e geçişi gibi yüzlerce el değiştirmeyi gerçek tarihleriyle
yazabilirsin.

**Tek istisna: Osmanlı tâbiiyeti taşıyan yerler.** Ukrayna sağ yakası
1669-1676 arası Osmanlı himayesindeydi (Doroşenko) ve Podolya 1672-1699 arası
doğrudan Osmanlı eyaletiydi (Kamaniçe). Bunlar `d:`/`v:` gerektirir → kırılma
gerektirir → **mevcut kırılma tarihlerine oturtmak zorundasın.** Kullanılabilir
tarihleri şöyle bul:

```bash
node -e "global.window={};const fs=require('fs');for(const f of fs.readdirSync('data').filter(x=>/^yerlesimler/.test(x)))eval(fs.readFileSync('data/'+f,'utf8'));const t=new Set();for(const k of Object.keys(window))if(/^YERLESIMLER/.test(k))for(const y of window[k])for(const kat of ['d','s','v'])(y[kat]||[]).forEach(p=>{t.add(p.f);t.add(p.t);});console.log([...t].filter(x=>x>'1660'&&x<'1710').sort().join('\n'));"
```

## 4. `kur:` alanı — bu kutuda gerçekten gerekli

Atlas ufku 1281'de başlıyor ve bu bölgede **1281'de var olmayan yerleşim çok**:
Petersburg (1703), Odessa (1794), Helsinki (1550), Göteborg (1621), Harkov
(1654), Zaporijya Sıçı (1552). Bunlara mutlaka `kur:"YYYY-MM-DD"` yaz — yoksa
Değişmez 1 denetimi onları "1300'de sahipsiz" diye delik sayar ve sahipsiz
sayısı 34'ün üstüne çıkar.

Aynı şekilde ortadan kalkanlar `bit:` alır (ör. Zaporijya Sıçı 1775'te yıkıldı).

## 5. Kaynak kuralı — buradaki tuzak

**TDV İslâm Ansiklopedisi birincildir** ve bu bölgede sanılandan çok maddesi
var: LEHİSTAN · LİTVANYA · RUSYA · MOSKOVA · KAZAN HANLIĞI · ASTARHAN HANLIĞI ·
KIRIM HANLIĞI · UKRAYNA · KAZAKLAR · KAMANİÇE · İSVEÇ · DANİMARKA · FİNLANDİYA ·
ESTONYA · LETONYA · LİTVANYA · BALTIK ÜLKELERİ · PRUSYA.

> ⚠️ **`islamansiklopedisi.org.tr/<slug>` var olmayan slug için de HTTP 200
> döner** ve sessizce arama sayfasına yönlendirir. Ölü linki **yalnız `<title>`
> gösterir**: "Arama - TDV İslâm Ansiklopedisi". Her slug'ı böyle doğrula.
> Doğrulanmamış slug yazma.

TDV maddesi olmayan yerler (Stokholm, Riga, Novgorod gibi) için akademik
referans kullan; **Vikipedi asla tek kaynak olmaz.** Koordinatlar GeoNames'ten
alınabilir; tarihî ad ile modern ad farklıysa ikisini birlikte yaz
(`ad:"Königsberg (Kaliningrad)"` kalıbı dosyada zaten var).

## 6. Devlet kimlikleri

`arac/renkler.py`'ye **DOKUNMA.** Kullandığın kimliklerden hangileri orada var,
hangileri `data/devletler.js`'te (213 kayıt) var, hangileri hiç yok — **ölç** ve
ilerleme notuna yaz. Renk ataması entegrasyon oturumunun işidir; renkler DSATUR
ile komşuluk çizgesine göre dağıtılıyor ve rastgele eklenen renk dengeyi bozar.

`renkler.py`'de VAR olanlar: `rusya`, `lehistan`, `isvec`, `danimarka`,
`avusturya`, `prusya`(kontrol et), `kirim`, `bogdan`, `macaristan`.
Muhtemelen YOK: `litvanya`, `novgorod`, `moskova`, `kazan`, `astarhan`,
`teuton`, `livonya`, `kurlandiya`, `kazak-hetmanligi`, `norvec`, `finlandiya`.

Kimlik granülerliği: **bir kimlik = haritada ayrı boyanması anlamlı olan bir
siyasî gövde.** Lehistan-Litvanya Birliği (1569-1795) tek kimlik olmalı; ama
1569 ÖNCESİ `lehistan` ve `litvanya` ayrı, çünkü ikisi aynı anda sahnede ve
birbirine sınırdaş. Moskova Knezliği → Rus Çarlığı → İmparatorluk aynı gövdedir,
tek kimlik (`rusya`); Novgorod ve Kazan ayrıdır çünkü Moskova'yla eş zamanlı ve
bağımsızdır.

## 7. Çıktı biçimi

`data/yerlesimler.js` şemasıyla **birebir aynı**; dosya `window.YERLESIMLER_KUZEYDOGU`
dizisini yazar. Başına şu blokları koy (`yerlesimler_afrika.js`'i örnek al):

1. Kaç noktanın harita penceresi içinde olduğu — **ölç**, tahmin etme
2. Kimlik dökümü: renkler.py'de var / devletler.js'te var / hiç yok
3. `kur:` ve `bit:` verilen noktaların listesi ve gerekçesi
4. Osmanlı tâbiiyeti/eyaleti taşıyan kayıtlar ve kullandıkları kırılma tarihleri
5. Kimlik granülerliği kararları

---

# EK — Entegrasyon oturumunun devrettiği ölçümler (2026-07-30)

Bu partiye 2026-07-29 gecesi başlandı, hazırlık ölçümleri yapıldı, sonra oturum
`hatalar 4/5/6.docx` turlarına kaydırıldı. **Aşağıdakiler ÖLÇÜLDÜ — yeniden
ölçme, doğrudan kullan.** §2 ve §6'daki tahminlerin yerine bunlar geçerlidir.

## E.1 ⛔ ÖNCE OKU: iki nokta artık YAZILMAYACAK, üçü ZATEN EKLENDİ

Podolya eyaletinin sancak merkezleri `hatalar 6.docx` madde 10 üzerinden
**`yerlesimler.js`'e eklendi** ve üçü de bu kutunun içinde. Tekrar yazma:

| Nokta | enlem, boylam | Pencere |
|---|---|---|
| Bar (Podolya) | 49.078, 28.260 | d: 1672-08-27 → 1699-01-26, sonra lehistan → 1793-01-23 → rusya |
| Meciboj (Mejibuji) | 49.431, 27.415 | aynı |
| Yazlofça (Yazlovets) | 48.951, 25.435 | d: aynı; 1772-08-05'te **avusturya** (Galiçya) |

Kaynak: TDV **`kamanice`** — eyalet dört sancaktı: Kamaniçe, Bar, Mejibuji,
Yazlofça + 19 nahiye, 500'den fazla timar, ~6000 asker.

Ayrıca **Çehrin (Çigirin)** düzeltildi: Bahçesaray (1681) kaleyi Rusya'ya
vermedi — sınır Dinyeper'di, sağ yaka Osmanlı'da kaldı ve Bug-Dinyeper arası
iskânsız şerit ilân edildi. Zincir artık Kamaniçe'nin aynısı (1699 Karlofça'da
Lehistan, 1793'te Rusya). Sağ yaka Ukrayna için tarih seçerken bunu esas al.

## E.2 Kutudaki mevcut 40 nokta — ölçüldü, tekrar yazma

`yerlesimler.js`: Çernovitz · Kamaniçe · Viyana · Bratislava · Krakov · Lvov ·
Kiev · Harkov · Voronej · Stokholm · Helsinki · Riga · Königsberg · Gdansk ·
Poznan · Varşova · Vilnius · Minsk · Moskova · Novgorod · St. Petersburg ·
Smolensk · Tula · Nijniy Novgorod · Vologda · Tsaritsyn · Poltava ·
Bozkır (Deşt-i Kıpçak) · Hotin · Çehrin (Çigirin)

`yerlesimler_avrupa.js` (merge bekliyor, 10'u bu kutuda): Uppsala · Örebro ·
Linköping · Kalmar · Gävle · Falun · Visby · Turku (Åbo) · Hämeenlinna ·
Viipuri (Vyborg)

## E.3 ⚠️ MEVCUT VERİNİN KONVANSİYONLARI — §6'daki tahminler bunlarla değişti

Bunlara uymayan parti mevcut kayıtlarla **yama gibi** görünür:

- **`lehistan` kimliği Litvanya'yı da kapsıyor.** `renkler.py`'deki etiketi
  birebir **"Lehistan-Litvanya"**. Vilnius ve Minsk **1281'den** `lehistan`;
  Kiev 1362'den `lehistan`; Smolensk 1281-1514 `lehistan`.
  → Görev tanımı §6 "1569 öncesi `litvanya` ayrı olmalı" diyor ve tarihsel
  olarak haklı, AMA bunu yaparsan Vilnius/Minsk/Kiev/Smolensk kayıtlarının da
  bölünmesi gerekir; yoksa 1281-1569 arası Litvanya kahverengi, Vilnius mor
  görünür. **Bu dört kaydı bölmeye yetkin yok** (`yerlesimler.js` Oturum 0'da).
  Karar: partiyi `lehistan` ile yaz VE bölme önerisini ilerleme notuna yaz;
  ya da `litvanya` ile yaz ve dört kayıt için hazır değiştirme satırlarını
  ilerleme notuna koy — entegrasyon tek hamlede uygular.
- **`almanya` Töton Şövalyeleri ve Prusya'yı da kapsıyor.** `prusya` ve `teuton`
  kimliği YOK; Königsberg 1281-1923 kesintisiz `almanya`, Gdansk 1281-1466
  `almanya`, Riga 1281-1561 `almanya` (Livonya Nizamı). Yeni kimlik istemeyin.
- **Taksim günleri** (mevcut kayıtlardan): 1. taksim **1772-08-05**,
  2. taksim **1793-01-23**, 3. taksim **1795-10-24**.
- **Sabit el değiştirme günleri**: Kiev → Rusya **1667-01-30** (Andrusovo) ·
  Poltava → Rusya **1654-01-18** (Pereyaslav) · Smolensk 1514-08-01 / 1611-06-13
  / 1654-10-03 · Riga 1561-11-28 → lehistan, 1621-09-15 → isvec, 1721-08-30 →
  rusya (Nystad) · Finlandiya 1809-09-17 (Fredrikshamn) → rusya, 1917-12-06 →
  finlandiya · Litvanya cumhuriyeti 1918-02-16 · Letonya/Polonya 1918-11-11 ·
  Poznan 1918-12-27.
- **Ukrayna 1918'de bölünmez**: mevcut Kiev kaydı 1667'den 1923'e `rusya`.
  `ukrayna` kimliği açma.

## E.4 Kimlik envanteri — ölçüldü

**`renkler.py`'de VAR** (kullanabilirsin): `rusya` `lehistan` `litvanya`
`isvec` `danimarka` `norvec` `finlandiya` `letonya` `polonya` `kazan` `kirim`
`altinorda` `almanya` `avusturya` `macaristan` `bogdan` `cekoslovakya`

**Yalnız `devletler.js`'te var, renk YOK** (kullanırsan bölge boyanmaz):
`astarhan` `estonya` `nogay` `sibir` `zaporojye`

**Hiçbir yerde yok**: `novgorod` `livonya` `kurlandiya` `teuton` `prusya`
`moskova` `tver`

→ Estonya noktaları (Reval, Narva, Dorpat, Pernau) 1918-1923 penceresinde
`estonya` isteyecek ve o renk yok. Ya `rusya`yı 1923'e uzat (Kiev deseni), ya
`estonya` yaz ve ilerleme notunda renk talep et. Kurlandiya için `lehistan`
kullan (dükalık Lehistan'ın vasalıydı) — yeni kimlik istemez.

## E.5 Osmanlı tâbiiyeti — TDV ile doğrulanmış pencereler

TDV **`ukrayna`**: Zaporojye Sıçı 1552'de kuruldu · Doroşenko 1665-1672 hetman,
1672'den sonra Osmanlı hâkimiyetini kabul etti · Andrusova 1667 · Bahçesaray
1681 "Kiyev dahil Sol Yaka Ukraynası Moskova'ya bırakıldı" · Karlofça 1699 sağ
yaka Lehistan'a döndü.

→ Sağ yaka Ukrayna için kullanılacak pencere: **v: 1672-08-27 → 1699-01-26**.
İki gün de mevcut kırılma günü, yani madde yazmaya gerek yok. 1681'i sınır
olarak KULLANMA (bkz. E.1 Çehrin).

## E.6 ⛔ BLOKAJ: motor `kur:`/`bit:` okumuyor

`arac/uret_petek.py` `kur:` alanını **görmüyor**; henüz kurulmamış şehrin
peteği 1281'den beri var ve komşularından toprak koparıyor. Canlı iki vaka:
Kuveyt (`kur:1716`) ve Senendec (`kur:1636`, Batı İran sınırını çarpıtıyor).

Bu partide `kur:` gerektiren en az altı nokta var: **Petersburg 1703 · Odessa
1794 · Helsinki 1550 · Göteborg 1621 · Harkov 1654 · Zaporijya Sıçı 1552**
(+ `bit:` 1775). `YAPILACAKLAR.md`: *"o merge'den ÖNCE yapılmalı."*

→ **Motor işi entegrasyon oturumunda (Oturum 0).** Sen partiyi yazabilirsin;
`kur:`/`bit:` alanlarını doğru yaz, ama **merge motor düzelene kadar
yapılmayacak.** İlerleme notunda `kur:` taşıyan noktaların listesini ayrıca ver.

## E.7 Bu turda doğrulanmış TDV slugları

**Canlı**: `kamanice` `ukrayna` `limni` `azak` `sirvan` `nahcivan` `sehrizor`
`fizan` `kirmansah` `dagistan` `luristan` `hemedan` `cildir-eyaleti`
`karayazici-abdulhalim` `murad-iii` `ferhad-pasa`

**Ölü** (HTTP 200 döner, arama sayfasına atar): `cildir` · `nihavend` ·
`burucird` · `ferhad-pasa-antlasmasi` · `selimiye-camii-ve-kulliyesi`

## 8. Bitirince

`oturumlar/OTURUM-16-ILERLEME.md` yaz. **Ölçülmüş** sayılar olsun: nokta sayısı,
kutu içi/dışı dağılım, yeni yoğunluk (bin km²/nokta), kimlik dağılımı, `kur:`
verilen nokta sayısı. Entegrasyona devrettiğin işleri madde madde yaz.

**Commit ETME.** `git status` bırakıp çık.
