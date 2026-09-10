# İZ-YOK DENETİM A — DİLİM 1 BULGU RAPORU

```
OTURUM   İZ-YOK DENETİM A  ·  local_144c89d6-c3d6-4c9c-930f-3b4328a539df
SEVK     1.MURAT (koordinatör) · oturumlar/IZ-YOK-DENETIM-A.md
TARİH    10 Eylül 2026
GİRDİ    89 madde / 14 paket · `delil_atlas:"iz-yok"` · hüküm `cozuldu`
```

## ⓪ SAYIM

```
🟢 YAPILMIŞ     79
🔴 YAPILMAMIŞ    2
⚪ ÖLÇÜLEMEDİ    0
➖ İDDİA YOK     8
                89 ✓
```

### 🔴 ÖLÇÜT — hangisi olduğunu YAZIYORUM, çünkü iki okuma farklı sayı verir

Şartname `②`nin ③. adımı ölçütü **açıkça** koyuyor: *"İDDİANIN KARŞILIĞI
BUGÜN VERİDE VAR MI"*. Kova bu **dar** okumaya göre dolduruldu:

```
🟢  hüküm notunun İDDİA ETTİĞİ ŞEY bugün atlasta VAR      (yol:satır ile)
🔴  aranmasına rağmen YOK
➖  not zaten iş iddia etmiyor (saf ölçüm · karar kaydı · repo dışı sevk)
```

⚠️ **İKİNCİ BİR OKUMA VAR ve farklı sayı verir:** *"Emre'nin isteği bugün
KARŞILANIYOR mu."* İkisinin ayrıştığı **beş** madde aşağıda `§③`te ADIYLA
duruyor — koordinatör isterse onları kendi ölçütüyle yeniden kovalayabilir.
`D081`: bir ölçüt iki seçeneği ayırt etmiyorsa soru yanlış sorulmuştur; bu
yüzden ölçüt yazıldı, gizlenmedi.

## ① TABANI KENDİM ÖLÇTÜM — devredilen üç sayı da TUTTU

`CLAUDE.md §1.5` uyarısı gereği hiçbir rakam devralınmadı:

```
toplam paket maddesi   681   ✓   46 CEVAP.json'dan doğrudan sayıldı
`delil_atlas:"iz-yok"` 207   ✓
DİLİM 1                 89   ✓   4+6+6+16+6+11+1+1+1+3+3+3+2+26
girdi tabanı          3808 nokta / 77 dosya  (`girdi.GIRDI_DOSYALARI`)
```

🟢 **Yapısal bir bilgi:** `('iz-yok','cozuldu')` çifti **207'nin 207'si** —
kova tamamen tek hüküm cinsinden, karışık değil.

🔴 **SEVKTE OLMAYAN BİR AD TUZAĞI:** kutuda `parti-emrelic-00XX` ile
**paralel bir `parti-kasa-00XX` serisi** var ve numaraları çakışıyor
(`emrelic-0008` 11 iz-yok ↔ `kasa-0008` 0 · `emrelic-0010` 1 ↔ `kasa-0010` 1).
`emrelic` okuması **sayılar 89 ettiği için** seçildi — tahmin edilmedi.
⚠️ `parti-kasa-0009`un **4 iz-yok maddesi** hiçbir dilimde adı anılmıyor;
sahipsiz mi, DİLİM 2'de mi — **ölçmedim, koordinatöre sordum.**

## ② ALETLER — beşi de SALT OKUR

| dosya | ne yapar |
|---|---|
| `ARAC-IZYOK-A-DOKUM-0910.py` | madde + Emre'nin sözü + hüküm notu dökümü |
| `ARAC-IZYOK-A-SORGU-0910.py` | yerleşim/dönem sorgusu — `girdi.yukle()` üzerinden |
| `ARAC-IZYOK-A-KRONO-0910.py` | kronoloji · ÇEKİRDEK/KUYRUK kovalarını AYRI sayar |
| `ARAC-IZYOK-A-KUME-0910.py` | `SAVASLAR`/`ANTLASMALAR` küme sayımı |
| `ARAC-IZYOK-A-FETRET16-0910.py` | 0018/H-0004'ün 16 noktası |
| `ARAC-IZYOK-A-AVUSTURYA1281-0910.py` | Mohaç öncesi `avusturya` dönemleri |
| `ARAC-IZYOK-A-KUTU-0910.py` · `-KART-ICERIK-0910.py` | bölge sayımı · kart içeriği |

- **Kendi ayrıştırıcımı yazmadım** (`D023`): yerleşim verisi `arac/girdi.py`
  ile okundu, normalleştirici `denetim/ARAC-NORMAL-0903.py::norm` — yerel
  kopya DEĞİL.
- `data/**` ve `arac/**`e **hiç yazılmadı** (koşu 9 sürüyor, `§7`).

## ③ 🔴 İKİ «YAPILMAMIŞ» — ve ikisi de KOORDİNATÖR KARARI bekliyor

### 🔴 H-0008 (parti-emrelic-0019) — MERSİN · Emre'nin kendi kararı inmemiş

```
hüküm notu  "EMRE'NİN KARARI (2 Eylül, soru ⑰): '(a) 1671 — Evliya Çelebi.'
             Mersin'in kuruluşu 1671 alınacak."          hüküm: cozuldu
BUGÜN       Mersin'de `kur:` alanı YOK · d:[{f:"1352-01-01",t:"1918-10-30"}]
            data/yerlesimler_ek27.js:51
```

🔴🔴 **VE AYNI KAYITTA DAHA AĞIR BİR ŞEY VAR.** Mersin'in kendi `neden:`
alanı şunu yazıyor:

> *"d: 1352-01-01'de başlıyordu — **164 yıllık hayalet Osmanlı**. ramazanoglu
> dönemi (1352 → 1516-08-24) **eklendi**, d: Mercidâbık'a **çekildi**."*

**Kayıt bunların hiçbirini taşımıyor.** Ölçüldü:

```
`ramazanoglu` kimliği veride 2 dönemde:  Adana ✓ · Tarsus ✓ · MERSİN YOK
Mersin d:                                hâlâ 1352-01-01 → 1918-10-30
Mersin kaydı sayısı                      1 (mükerrer DEĞİL — ayrıca ölçüldü)
```

⇒ Alanın metni **yapılmış bir işi** anlatıyor, kayıt onu **içermiyor**;
komşuları doğru zinciri taşırken Mersin 164 yıl hayalet Osmanlı duruyor.
📌 `D144`ün veri-içi yüzü, ve `grep neden:` yapan bir denetim bunu
**"uygulanmış"** diye okur (`D046`).

### 🔴 H-0043 (parti-emrelic-0019) — MALATYA · not, yamanın kendisiyle çelişiyor

```
hüküm notu  "MALATYA … YAMA yazildi (donem_yama_p19.js, d: 1516-07-28'e cekiliyor)"
BUGÜN       Malatya d: 1516-08-24  (DEĞİŞMEMİŞ)
YAMANIN KENDİSİ  denetim/uygulanmis-0905/yer_yama_p19.js:21 —
            "⚠️ ASKIDA OLAN IKI KAYIT BU DIZIYE KONMADI (kazara
             uygulanmasin): Mersin (H-0008) · Malatya (H-0043)"
```

Yama **üç kayıt** taşıyor (İğneada · Rezve · Ahtapolu) ve ikisi **bilerek
dışarıda**. 🟢 Yama dosyası doğru davranmış — çelişkiyi kendisi damgalamış;
kusur **notun kendini yanlış özetlemesinde**.

📌 İkisi de aynı kökten: Mersin `kur:` 1671 mi 1836 mı · Malatya iki TDV
maddesi çelişiyor (`malatya` 28 Tem 1516 askerî zapt ↔ `idris-i-bitlisi`
Halep'ten sonra kesin ilhak). Gerekçeler `denetim/BULGU-UYGULAMA-0019.md` +
`HUKUM-UYGULAMA-0019.json`. **Karar koordinatörün, ben yazamam** (`D098`).

## ④ 🟡 «İDDİA ≠ VERİ» — 🔴 DEĞİL, ama koordinatörün bilmesi gereken BEŞ madde

Bunların hepsi `🟢` kovasında: iddia edilen artefakt VAR. Ama **iddia edilen
BİÇİMDE değil**, ve naif bir "eksiği tamamla" hamlesi doğru veriyi bozar.

| madde | iddia | bugün | niçin dokunulmamalı |
|---|---|---|---|
| 0019/H-0069 Halepçe | *"ilk `d:` 1554-08-22'de başlar"* | `d: 1534-12-04→1550-01-01` duruyor | **Şehrizor da aynı deseni taşıyor** (`d:1535-01-01→1550`) ⇒ 1535-1550 ikisi de Osmanlı, Emre'nin şikâyet ettiği enklav o pencerede YOK. İddia edilen yama şimdi uygulanırsa bu modelleme bozulur (`D024`). ⚠️ Kalan: **28 günlük** enklav penceresi (1534-12-04→1535-01-01). |
| 0004/H-0006 Erzincan | *"Tarih TDV'den TAM GÜN: 23 EKİM 1514"* | `d: 1514-09-06` (Çaldıran günü) | İki asıl kusur (1473 Osmanlı devri · 1502-1514 Safevî boşluğu) İNMİŞ. Ama kayıt `yer_yama_erken.js`in 9 kaydı arasında **yok** ve **kaynaklı gün, toplu Çaldıran gününe** düşmüş (`D157`). |
| 0007/H-0008 Yedisan | *"Yedisan 1792-01-09'dan 1783-04-19'a"* | `s: kirim … → 1792-01-09` | Kardeşleri (Soçi·Tuapse·Maykop) İNMİŞ, **4'ün 3'ü**. Yedisan'da `d:` üstte olduğu için harita doğru görünüyor; hayalet `kirim` dönemi kayıtta duruyor. |
| 0019/H-0075 himaye | *"Şema yazıldı, ARAYÜZ kuyruğuna 12. kalem"* | Şema VAR (`VERI-YAPISI.md:370` · `js/app.js:182` katman sözleşmesi) | Ama veride **`himaye:true` 0 kayıt**, motorda `d.h` 0/462 ⇒ **hiçbir şey çizilmiyor.** Notun kendisi "kuyruğa girdi" diyor; hüküm `cozuldu` bununla çelişiyor. |
| 0006/H-0011·H-0012 Tebriz | *"MERAK.md ÖRNEK KART ②'ye yazdım"* | `MERAK.md:83` ✓ | Ama **`data/merak.js`te YOK** — 14 kartın hiçbiri Tebriz değil. Kardeş maddelerin **10'u** canlı veriye inmiş, bu inmemiş. |

## ⑤ 🟢 NOTLARIN AÇIK BIRAKTIĞI SEKİZ KALEM BUGÜN KAPANMIŞ

`delil_atlas:"iz-yok"` damgası burada **hem doğru hem yanıltıcı**: commit izi
yok, ama iş var — ve **başka birinin commit'inde**.

```
0019/H-0033  "1513 kronoloji maddesi var mı ÖLÇMEDİM"  → VAR   olaylar_ek5.js:179
0019/H-0036  "ÇARE: uygulamadım, ölçtüm"               → UYGULANMIŞ:
             Nusaybin d: 1515-01-01 (yuvarlak) → 1515-09-19 (gerçek gün)
             VE kendi maddesi açılmış: olaylar_ok107.js:46
0019/H-0059  "düzeltme çalışma ağacında, COMMIT EDİLMEMİŞ" → COMMIT'Lİ:
             git status temiz · index.html + js/app.js son commit eb20ca5 (BUGÜN)
             id ayrışması yerinde: js/app.js:6928 `ayar-imparatorluk-pay`
0003/H-0007  "«Ordu» adında yerleşim kaydı YOK (0 eşleşme)" → VAR:
             "Ordu (Bayramlı)" 40.976/37.848 · haciemir 1350 → 1427-06-01
0017/H-0002  "`kilikya-ermeni` künyesi devletler.js'te 🔴 YOK" → VAR (1 künye)
0017/H-0004  "Drama düzeltmesini bu turda YAPMADIM — Z-0020" → İNMİŞ:
             Drama bugün 1913-08-10'dan `yunanistan`
0015/H-0004  "EKSİK KALAN: Arhavi · Borçka · Sarıkamış · Ahılkelek yok" →
             DÖRDÜ DE VAR
0018/H-0002  "Elhova kırılması 1371-01-01, en yakın madde Gîlân'da Kârkiyâ" →
             kırılma 1371-09-26'ya çekilmiş, madde artık **Çirmen Savaşı**
             (olaylar_ek.js:23) — alakasızlık ÇÖZÜLMÜŞ
```

## ⑥ 🔴 HÂLÂ AÇIK OLAN, ÖLÇÜLMÜŞ KUSURLAR (dilimimin dışına taşanlar dâhil)

### ⓐ Nitra ve Uyvar — Mohaç öncesi `avusturya` · 245 yıllık anakronizm

0006/H-0007'nin yaması Yanıkkale'yi (Győr) düzeltti: `macaristan 1281→1594`
tek bloğu Mohaç gününde bölündü. 0006/H-0009 notu **aynı kusurun Uyvar ve
Nitra'da sürdüğünü** söylüyordu. **Sürüyor.** Ölçtüm (`ARAC-IZYOK-A-AVUSTURYA1281-0910.py`):

```
ÖNGÖRÜ (ölçümden ÖNCE yazıldı): 2-12 arası; >12 ise kusur BÖLGESEL demektir
ÖLÇÜM: `avusturya` dönemi f < 1526-08-29 olan 6 dönem
  🔴 Nitra (Nyitra)  1281-01-01 → 1663-09-24    Yukarı Macaristan
  🔴 Uyvar           1281-01-01 → 1663-09-24    Yukarı Macaristan
  🟢 Graz            1281-01-01   Habsburg irsî toprağı — DOĞRU
  🟢 Viyana          1281-01-01   DOĞRU
  🟢 Ljubljana       1335-05-02   Krain 1335'te Habsburg'a geçti — DOĞRU
  🟢 Trieste         1382-09-30   Trieste 1382'de Habsburg'a bağlandı — DOĞRU
```

⇒ Kusur **tam 2 nokta**, ikisi de notun kendi adlandırdıkları.
📌 Ve ders: **6 sayısı bir kusur sayısı DEĞİL** — sınıflandırılmadan
"6 anakronizm" diye raporlansaydı dördü haksız yere yamalanırdı.

### ⓑ ANTLASMALAR — 31 kaydın 1'i koordinatlı (0019/H-0044'ün açık kalemi)

```
SAVASLAR      171 kayıt · 171 lat ✓
ANTLASMALAR    31 kayıt ·   1 lat 🔴
SERILER        16 kayıt ·   0 lat
SEFERLER       61 kayıt ·   0 lat
```
⚠️ 31/16/61 sayıları **basit dilimleyiciyle** — iç içe süslü parantez taşıyan
kaydı kaçırabilir; notun yazdığı 41 ile farkı **ÖLÇMEDİM**. *"1 koordinatlı"*
kısmı sağlam.

### ⓒ Ridâniye — savaslar.js'te MÜKERRER kayıt

```
savaslar.js:202  ad:"Ridâniye"  1517-01-22  lat 30.089 / lon 31.283
savaslar.js:205  ad:"Ridaniye"  1517-01-22  lat 30.06  / lon 31.28
```
Aynı gün, aynı savaş, iki yazım, iki koordinat ⇒ haritada çift işaret.
(Dilimimin dışı; 0019/H-0053'ü ölçerken çıktı.)

### ⓓ 0017/H-0003'ün doğurduğu iki iş — ikisi de yapılmamış

```
(a) `1361-01-01` kümesi gerçek günlerine çekilsin
    → Demirköy · Kofçaz · Lalapaşa · Havsa … BUGÜN DE 1361-01-01
(b) `denetle_iddia.py` — "madde ile kırılma AYNI ŞEYİ mi söylüyor"
    → arac/denetle_iddia.py ARANDI, YOK
```
⚠️ Madde `➖` kovasında (notu iş iddia etmiyor, ölçüm yapıyor) — ama doğan
işler açık.

### ⓔ `bos:` görsel karşılığı (0019/H-0056)

`bos:` alanı **361 yerde** var ve cinsi **348'inde yazılı**
(kabile 149 · devletsiz 147 · veri-yok 35 · insansiz 10 · hata 7; cinsiz
sayılan 13'ün 12'si **yorum metni**, 1'i tek tırnaklı yazım — yani gerçek
cinsiz **0**). Ama `js/app.js`te `.bos` **hiç okunmuyor** ⇒ Emre'nin üç
kademeli boşluk gösterimi (② aşiret · ③ boş) **çizilmiyor**. Notun kendi
damgası doğru.

## ⑦ ⚠️ KENDİ ALETİMİN İKİ KUSURU — kaydediyorum

```
① "Meriç" araması "Limerick"i getirdi (l-i-m-e-r-i-c-k) — D159'un canlı
   vakası, ve BENİM aletimde. Tek-eşleşme şartı olmasa yanlış kayda
   hüküm verirdim.
② `bos:` sayımım 13 "cinsiz" gösterdi; üçü hariç hepsi YORUM METNİYDİ
   (`bos:` KALDIRILDI · `bos:` SÖZLÜĞÜNÜN…). Gerçek cinsiz 0.
   ⇒ D043: aletin gösterdiği ≠ dosyada yazan. Kendi sayımı düzelttim.
```

## ⑧ ➖ İDDİA YOK — sekiz madde, tek tek gerekçesiyle

| madde | niçin ➖ |
|---|---|
| 0019/H-0002 | *"Ankara savaş günü sahipliği doğru ölçüldü, açık kusur yok"* — saf ölçüm beyanı. **Özü doğrulandı:** Ankara `s: 1402-07-28 → 1404-03-01 timurlu` ✓ |
| 0019/H-0070 | *"ÖLÇTÜM — koridor var, Halepçe ona bağlı değil"* — hüküm H-0069'a devrediyor |
| 0006/H-0009 | Mavi gövdenin **palet** açıklaması (madde bayat, veri değişmedi) — iş iddia etmiyor |
| 0002/H-0003 | Göl maskesi ölçümü (9/10 çıkarılmış · İznik açık). ⚠️ İznik alt-kalemi **ölçülemedi** — `motor_kara.geojson` geometri işi, dilimimin dışı |
| 0004/H-0002 | Bucak bozkırı **cevabı** + *"nokta eklenebilir, sıraya alındı"* |
| 0010/H-0001 | *"KOORDİNATÖR ONAYI: DÜŞSÜN"* + takip **repo dışı** (ClaudEmre/kutu) — notun kendisi *"benim işlem alanım dışında"* diyor |
| 0017/H-0003 | Yuvarlak tarih ölçümü; iki iş **doğdu**, yapılmadı (bkz. `§⑥ⓓ`) |
| 0018/H-0002 | Elhova ölçümü; belgelediği kusur **başka yoldan çözülmüş** (bkz. `§⑤`), iş ② (`denetle_iddia.py`) yapılmamış |

## ⑨ D021 — «FAZLA KOLAY TEMİZ»E KARŞI NE YAPTIM

%89 `🟢` oranı yüksek. Ölçütü **iki kez sıkılaştırdım**:

1. **Kart maddeleri (11 adet) `id:` VARLIĞIYLA bırakılmadı.** `MERAK.md`in
   kendi şartı *"her kartta EN AZ İKİ GÖRÜŞ"* diyor; kartlar açıldı —
   `karaman-nicin-zor` **üç** tez/dayanak çifti, `baglanti`, `kesinlik`,
   `kaynak` taşıyor (1100-1400 karakter). İskelet değil.
2. **Kronoloji iddiaları ÇEKİRDEK/KUYRUK ayrımıyla** sorgulandı (`D124`);
   *"var"* hükmü hangi kovada olduğunu da söylüyor.
3. **`grep -i` ile Türkçe ada hüküm verilmedi** — `ARAC-NORMAL-0903.py::norm`.

⚠️ Yine de: bu 89 madde **bir dilim**, 207'nin %43'ü. Oran DİLİM 2'ye
**taşınmaz** (`D021`).
