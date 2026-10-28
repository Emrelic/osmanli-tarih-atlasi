# ELLE-VERI-OLCUM-1006 — UMIT-W7-OLCUM-1006

Temel: worktree `C:\atlas-w7` = `origin/main` **85c7e2dd00d486a89d4674bbdd36c2484dae5efd**.
Yalnız ölçüm; hüküm ve düzeltme YOK. Hiçbir veri/araç dosyasına dokunulmadı, commit yok.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- Mükerrer madde bugün: **112** (KASA 115'ti; koordinatör 3 çifti BILINEN_AYRI'ya yazdıysa 115−3=112, araya yeni madde girdiyse +; tahminim 112–115 aralığı, nokta 112).
- KASA'nın 4 çiftinden hâlâ ötüyor: **1** (yazılmayan 4'üncü).
- O7 kasıtlı mı: **EVET, kasıtlı** (Değişmez 2 destek maddeleri, ekranda Osmanlı listesine girmesin diye ayrı sonek) — ama yazılı beyan bulunacağını sanmıyorum (%40).

**Öngörü ↔ ölçüm:** mükerrer 112 ✓ · KASA çiftleri **✗** (ölçüm: 0 ihlal; "1 ötüyor" yanlıştı, 4'üncü çift hiç ihlal kademesine çıkmıyor) · O7 **✗** (ölçüm: kasıtlı DEĞİL, tersine "görünsün" niyeti yazılı).

---

## 1. PL-7 — mükerrer madde (bugün, main 85c7e2dd)

`py arac/denetle.py` (worktree `C:\atlas-w7`):
```
Ek denetim  ✓  mükerrer madde: 112 şüpheli çift (beklenen ≤113 — BORÇ, hedef 0)
SONUÇ: TEMİZ DEĞİL — eksik ölçüm, çıkış kodu 2
```
- **Mükerrer: 112 · tavan `BEKLENEN_MUKERRER = 113` (`denetle.py:6134`) · kapı ✓.**
- **Çıkış 2'nin sebebi mükerrer DEĞİL:** tek ölçülemeyen soru Değişmez 8 —
  `RuntimeError: devletler_harita.js YOK (üretilmiş + gitignore'lu çıktı)`. Taze worktree'de
  beklenen durum. Değişmez 8 bu ağaçta ÖLÇÜLMEDİ. Başka ✗ satırı yok.

### `BILINEN_AYRI` — bugün yazılı çiftler (60 çift, `denetle.py:3442`)
Tamamı (sıralı, betik çıktısı):
```
Alemdar Mustafa Paşa'nın ölümü || Alemdar Mustafa Paşa ordusuyla İstanbul'a girdi
Alman ordusu Kielce'yi aldı || Alman ordusu Łódź'u aldı                                   ← KASA
Antalya'nın İtalyan işgali || Muğla'nın İtalyan işgali
Antep'in kurtuluşu — Fransızların şehri boşaltması || Adana'nın kurtuluşu — Fransızların şehri terketmesi
Antep'in kurtuluşu — Fransızların şehri boşaltması || Tarsus'un kurtuluşu — Fransızların şehri boşaltması
Ayamavra'nın (Lefkada) Venedik'e kaybı || Koron'un Venedik'e kaybı
Azak'ın Ruslara düşüşü || Özi (Ochakov) Kalesi'nin Ruslara düşüşü
Babadağı ve çevresinin Osmanlı'ya geçişi — Mircea ile oğlu Mihail yenildi || Torlak Kemal'in idamı — Saruhan kesin olarak Osmanlı'nın
Barbaros'un Kuzey Ege seferi: İskiros ve Kuzey Sporadlar'ın alınması || Barbaros'un Ege seferi: Venedik'in doğrudan yönettiği adaların alınması
Batum'un geri alınışı || Kerkük'ün geri alınışı
Bağdat'ın fethi — Irakeyn Seferi || Fuzûlî'nin Bağdat'ın fethi sonrası Kanuni'ye kaside sunması
Bitlis'in Rus işgali || Bitlis'in Rus işgalinden kurtarılması
Buhara Halk Sovyet Cumhuriyeti ilan edildi || Buhara Halk Sovyet Cumhuriyeti yeni anayasası kabul edildi
Bursa'nın Yunan işgali || Uşak'ın Yunan işgali
Bursa'nın Yunan işgali || İnegöl ve Yenişehir'in Yunan işgali
Büyük Taarruz başladı || Büyük Taarruz ve İzmir'in kurtuluşu
Cahokia terk edildi || Batı Yerleşimi gizemli biçimde terk edildi (radyokarbon … ~1342).
Drina (Sokullu Mehmed Paşa) Köprüsü'nün tamamlanması || Azapkapı (Sokullu Mehmed Paşa) Camii'nin yaptırılması
Erzurum Kongresi'nin toplanması || Sivas Kongresi'nin toplanması
Eskişehir'in İngilizlerce işgali || Maraş'ın İngilizler tarafından işgali
Fort Dearborn kuruldu — … || Fort George (Chisasibi) kuruldu — …
Fort Dearborn kuruldu — … || Fort William kuruldu — …
Fort George (Chisasibi) kuruldu — … || Fort William kuruldu — …
Fort Halkett kuruldu — … || Fort Pitt kuruldu — …
Fort Halkett kuruldu — … || Springfield kuruldu — …
Fort Pitt kuruldu — … || Springfield kuruldu — …
Halep'in Osmanlı hâkimiyetine girişi || Şam'ın (Dımaşk) Osmanlı hâkimiyetine girişi
Hotin Kalesi'nin Ruslara kaybı || Bender'in Ruslara kaybı
Hârizm Halk Cumhuriyeti ilan edildi || Buhara Halk Sovyet Cumhuriyeti ilan edildi
I. Ahmed'in ölümü ve I. Mustafa'nın cülûsu — ekberiyet usulü || Yeni padişah I. Mustafa: solgun çehreli, …
Kadızadeliler hareketinin Köprülü Mehmed Paşa tarafından bastırılması || Köprülü Mehmed Paşa'nın şartlı kabulle sadrazamlığa atanması
Kahire'nin Fransızlardan teslim alınması — Belliard'ın kapitülasyonu || İskenderiye'nin Fransızlardan teslim alınması — Menou'nun kapitülasyonu
Kerkük'ün İngiliz işgali || Eskişehir'in İngilizlerce işgali
Kerkük'ün İngiliz işgali || Maraş'ın İngilizler tarafından işgali
Koron'un Venedik'e kaybı || Modon'un Venedik'e kaybı
Kudüs'ün kaybı || Şam'ın kaybı
Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık || Yenişehir'in kuruluşu
Mackensen'in birlikleri Zamość'u aldı || Radom Avusturya birliklerince işgal edildi (Temmuz 1915)   ← KASA
Mostar Köprüsü'nün tamamlanması || Büyükçekmece Köprüsü'nün tamamlanması
Mostar Köprüsü'nün tamamlanması || Edirnekapı (Mihrimah Sultan) Camii'nin tamamlanması
Mudanya limanının abluka altına alınışı || Mudanya'nın alınışı
Niş'in Avusturya'dan geri alınışı || Adakale'nin Avusturya'dan alınışı
Niş'in Avusturya'dan geri alınışı || Semendire'nin Avusturya'dan geri alınışı — 1737-39 Savaşı
Nyiginya hânedanı krallığı kurdu || Kintu hanedanı Buganda Krallığı'nı kurdu
Oruç Ovası zaferi ve Canbolatoğlu isyanının bastırılması || Alaçayır zaferi ve Kalenderoğlu isyanının bastırılması
Patrona Halil İsyanı || Sâdâbâd'ın Patrona Halil isyanında tahrip edilmesi
Piłsudski'nin strzelcy birlikleri Kielce'ye girdi || Polonya birlikleri Kielce'ye yeniden girdi            ← KASA
Prut Antlaşması — Azak ve Taygan'ın geri alınması || Baltacı Mehmed Paşa ve Çariçe Katerina rivayeti
Rodos'un İtalyan işgali || Onikiada'nın İtalyan işgali
Semendire'nin Avusturya'dan geri alınışı — 1737-39 Savaşı || Özi'nin geri alınışı ve Kırım'ın Rus istilâsından kurtarılması
Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümünden sonra || Orta Anadolu'nun geri alınışı: Kayseri ve Kırşehir
Sofya'nın fethi || Niş'in fethi
Tarsus'un kurtuluşu — Fransızların şehri boşaltması || Adana'nın kurtuluşu — Fransızların şehri terketmesi
Tomanbay'ın Kahire'de Memlük sultanı ilân edilmesi || Son Memlük sultanı Tomanbay'ın Terrûce'de yakalanması
Uşak'ın Yunan işgali || İnegöl ve Yenişehir'in Yunan işgali
Vehhâbîlerin Tâif'i ele geçirmesi || Vehhâbîlerin Mekke'yi ilk kez ele geçirmesi
Yenbu'nun Şerif Hüseyin kuvvetlerine kaybı || Tâif'in Şerif Hüseyin kuvvetlerine geçmesi
Âmid'in (Diyarbekir) fethi ve Diyarbekir beylerbeyiliğinin kuruluşu || Nusaybin, Derik ve Silopi'nin … güney kolu
Şah Abbas'ın karşı taarruzu — Tebriz'in kaybı || Revan'ın Şah Abbas'a kaybı
Şûrâ-yı Devlet kuruldu || Şûrâ-yı Devlet'in açılışı: Osmanlı Danıştayı'nın kuruluşu
```
(Fort/Springfield başlıklarının kuyruğu kısaltıldı; tam metin `denetle.py:3442–`.)

### KASA §5'in 4 çifti — ÜYELİKLE (bugün `mukerrer_maddeler` doğrudan çağrıldı)
Yöntem: `mukerrer_maddeler(O)` iki kez koşturuldu — ① `BILINEN_AYRI` olduğu gibi ② geçici olarak
boş (yalnız bellekte; dosyaya dokunulmadı). İhlal = kademe `başlık` ya da `kişi!`; `kişi:` =
yalnız gözden geçirme listesi, sayılmaz.

| # | Çift | BILINEN_AYRI'de | BILINEN_AYRI boşken kademe | BUGÜN |
|---|---|---|---|---|
| 1 | 1914-08-12 strzelcy Kielce'ye girdi ↔ **1914-08-13 Ruslar Kielce'yi geri aldı** | **YOK** | `kişi:kielce` (J 0,125) — ZAYIF, ihlal değil | **ötmüyor** (yalnız gözden geçirme listesinde) |
| 2 | 1914-08-12 strzelcy Kielce'ye girdi ↔ 1914-08-19 Polonya birlikleri yeniden girdi | VAR | `başlık` (J 0,429) — ihlal | **ötmüyor** (bastırıldı) |
| 3 | 1914-09-30 Alman ordusu Kielce'yi aldı ↔ 1914-12-06 Alman ordusu Łódź'u aldı | VAR | `başlık` (J 0,600) — ihlal | **ötmüyor** (bastırıldı) |
| 4 | 1915-07-01 Zamość'u aldı ↔ 1915-07-01 Radom işgal edildi | VAR | `kişi!birlik` — ihlal | **ötmüyor** (bastırıldı) |

⇒ **İhlal kademesinde öten KASA çifti: HİÇBİRİ (∅).** Koordinatörün "4'üncü ölçülmeden
yazılmaz" kararı ölçümle doğrulanıyor: 4'üncü (#1) **hiçbir zaman ihlal üretmedi** — BILINEN_AYRI
boşken bile `kişi:` kademesinde kalıyor (fark 1 gün ≠ 0, başlık J 0,125 < 0,34). Yazılsaydı mükerrer
sayacını değiştirmeyen kural olurdu; tek etkisi `kişi:` gözden geçirme listesinden bir satır
silmek olurdu. KASA'nın "+3 · dört çift" sayımı: ihlale çıkan 3, dördüncüsü zayıf kademe.
Corpus'ta 1914–15 Kielce/Łódź/Zamość/Radom maddesi 12; başka çift üretmiyorlar.

---

## 2. P1 — `osman1`: `to:"1326-04"` · `olum:"1324-08-01"`

Veri (`data/padisahlar.js:4`): `from:"1299-01", to:"1326-04"` · `olum:"1324-08-01"` ·
`tahta:"1299 (dolayı)"` · `saltanat_yil:27` · `kaynak:"TDV: osman-i"`. `orhan` (`:31`): `from:"1326-04"`.

**TDV slug durumu:** `osman-gazi` → **HTTP 302** (`location: /arama/osman-gazi`) = ölü slug (§4 ①).
Kapsayıcı madde **`osman-i`** (200, Halil İnalcık, 2007) — kaydın kendi `kaynak:` alanı da bu.
`orhan` → 200.

**AYNEN alıntılar:**
- `osman-i` künye satırı: "OSMAN I … (ö. 724/1324) Osmanlı Devleti'nin ve hânedanının kurucusu (1302-1324)."
- `osman-i` gövde: "Osman'ın ölüm tarihi Asporça Hatun ile Mekece vakfiyelerine göre belirlenebilir.
  Birincisinde Osman hayatta, ikincisinde vefat etmiş görünmektedir. Dolayısıyla Osman 724'te (1324) ölmüştür."
- `osman-i` gövde: "Osmanlı rivayetine göre vefatında hicrî yıl hesabıyla altmış dokuz yaşındaydı ve
  yirmi yedi yıl hükümdarlık yapmıştı." · "Osmanlı rivayetine göre vefatında Orhan Bey Bursa'yı kuşatmakla meşguldü."
- `osman-i` gövde: "Orhan, 1305'ten beri seferlerde kumandan olarak ordunun başında olduğundan babasının
  ölümünde olaysız beylik tahtına oturmuştur."
- `orhan` künye: "Osmanlı padişahı (1324-1362)."
- `orhan` gövde: "723 Ramazan ayı başlarında (Eylül 1323) düzenlenmiş Asporça Hatun vakfiyesine göre o tarihte
  Osman hayatta idi. Orhan'ın beyliğe geliş tarihi Rebîülevvel 724'tür (Mart 1324). Osman'ın ölümü de bu iki tarih arasında olmalıdır."
- `orhan` gövde (Bursa): "… (2 Cemâziyelevvel 726 / 6 Nisan 1326)." — Bursa'nın teslimi.

**Hangi uç kaynağa dayanıyor — ölçüm (hüküm değil):**
| Alan | Veri | TDV ne diyor | Uyum |
|---|---|---|---|
| `olum` | 1324-08-01 | ölüm **Eylül 1323 – Mart 1324 arası** (`orhan`); "724'te (1324)" (`osman-i`; 724 H ≈ Ara 1323–Ara 1324) | Yıl `osman-i` ile uyuşur; **ay/gün (08-01) hiçbir TDV cümlesinde YOK** ve `orhan`ın "Mart 1324'ten önce" penceresinin DIŞINDA |
| `to` (osman1) / `from` (orhan) | 1326-04 | Orhan'ın beyliğe gelişi **Rebîülevvel 724 / Mart 1324**; saltanat 1302-1324 | **TDV'ye dayanmıyor.** 1326-04 = Bursa'nın teslimi (6 Nisan 1326) ile örtüşüyor — kaynak saltanat devri için bu tarihi VERMİYOR |
| `from` (osman1) | 1299-01 | künye "(1302-1324)" | TDV'den farklı (görev dışı, yalnız not) |
| `saltanat_yil:27` | — | "Osmanlı rivayetine göre … yirmi yedi yıl" | rivayet olarak aynen var |

⇒ İki uç da tam TDV'ye dayanmıyor: `olum` yılı dayanıyor, ay/gün dayanmıyor; `to:"1326-04"` TDV'nin
saltanat devri tarihiyle (Mart 1324) çelişiyor. Hangi alanın düzeleceği HÜKÜM — yazılmadı.
`08-01`in nereden geldiği **bulunamadı** (git kökeni ölçülmedi).

---

## 3. S3 — `p0071-edirne-vakasi-1703`

Kayıt (`data/seferler_p0071.js:64`): `tur:"isyan", sonuc:"belirsiz"`, **`devlet` · `taraf` · `renk`
üçü de YOK.** Kaynak TDV `edirne-vakasi`.

`js/app.js:5437-5443` yorumu: devlet/taraf/renk yoksa "OSMANLI SAYILIR — bu bir VARSAYIMDIR";
"51 kaydın 47'si gerçekten Osmanlı/Mısır harekâtı; dördü DEĞİL — … Edirne Vak'ası âsileri (1703).
Bu dördüne `devlet:`/`taraf:` yazmak VERİ işidir". Çözücü `_seferRengiCoz` (`app.js:5444`) bu kayda
`#8e0b22` (Osmanlı) verir.

**`devletler.js` taraması** (896 `id:` satırı; künye id+ad+tur alanları tarandı, tahmin edilen id
aranmadı): anahtarlar `isyan · âsi · asiler · yeniçeri · cebeci · celali · ocak · eşkıya · patrona ·
kabakçı · edirne · 1703 · rebel`.
- Edirne Vak'ası / 1703 isyancıları / yeniçeri-cebeci tarafı için künye: **bulunamadı.**
- `tur:"isyan"` künye cinsi VAR (emsal): `san-fan` (Üç Vasal İsyanı) · `dashun` (Li Zicheng) ·
  `taiping` — üçü de Doğu Asya. Osmanlı iç isyanı için `tur:"isyan"` künye: **0.**
- `ocak` eşleşmeleri (`cezayir-ocagi` · `tunus-ocagi` · `trablusgarp-ocagi`) Garp ocaklarıdır, ilgisiz.

**Şemada `taraf` ne alabilir** (`VERI-YAPISI.md` §SEFERLER + kod + veri):
- `VERI-YAPISI.md` `taraf`ı yalnız örnekle gösterir (`taraf:"osmanli"`, :580); kapalı sözlük YOK.
  `tur:"isyan"` hareket cinsi tabloda tanımlı ("iç isyan — yön yok, yerinde").
- Veride kullanılan değerler (`seferler*.js` + `savaslar.js`): **`dusman` 52 · `osmanli` 14** — başka değer yok.
- Kodun tanıdığı: `taraf==="dusman"` (`app.js:5321` → `#1b7a3f` yeşil; `:5449` → `m.renk`e düşer —
  bu kayıtta `renk` yok ⇒ `undefined`). `devlet:` alanı herhangi bir künye id'si alır
  (`_cTarafRengi`: `osmanli` · `_DEVLET_RENK` · künye `harita:`; çözülemezse `#9a9a9a` → eski davranış).
- Seferlerde kullanılan `devlet:` değerleri: rusya 13 · osmanli 10 · fransa-cumhuriyet 6 · misir-kavalali 2 · ingiltere 1 · afsar 1.

---

## 4. O7 — iki parçalı `OLAYLAR_*` soneki (112 madde)

**Mekanizma (ölçüldü):** `js/app.js:7035` süzgeci `/^OLAYLAR(_[A-Za-z0-9]+)?$/` — TEK altçizgili sonek.
Node ile her ad desene karşı sınandı:
| Değişken | Madde | Desen | `kapsam:"konu"` |
|---|---|---|---|
| OLAYLAR_2S_0919 | 71 | ✗ | 0 |
| OLAYLAR_2S_0918 | 20 | ✗ | 0 |
| OLAYLAR_CUKUROVA_0907 | 6 | ✗ | 0 |
| OLAYLAR_0073_IRAN_YANYA | 5 | ✗ | 0 |
| OLAYLAR_SENUSI_0919 | 5 | ✗ | 0 |
| OLAYLAR_ORTADOGU_0919 | 3 | ✗ | 0 |
| OLAYLAR_SENKRON_0930 | 2 | ✗ | 0 |
| **Toplam** | **112** | | |

Yedisi de `index.html`de yükleniyor (her dosya 1 satır) ve paketlere girmiş
(`paket_04/12/25/26/30.js`, `paket_kunye.json`).

**Kasıtlı mı — başlık yorumu + ilk commit (AYNEN, kısaltılmış):**
| Dosya | Başlıktaki niyet | İlk commit |
|---|---|---|
| 2s_0919 | "Değişmez 2s borcu … ⚠️ HENÜZ CANLI DEĞİL — index.html'e bağlamayı 1.MURAT yapacak." | `edf46ab5` 2026-09-19 "olaylar_2s_0919 (KRONO-2S-3, 57 kaynakli madde, 2s 75->20) baglandi" |
| 2s_0918 | "⚠️ HENÜZ CANLI DEĞİL. index.html'e bağlanmadı (1.MURAT yapacak)." | `324ede1b` 2026-09-18 "KRONO-2S — 20 madde · Degismez 2s acik 97 -> 75 (dosya cekirdek kovasina tasindi)" |
| cukurova_0907 | geometri borcu: "`Değişmez 2i` … Bu dosya o altısını yazar." | `22cced20` 2026-09-07 "CUKUROVA ACILDI — 6 TDV maddesi yazildi" |
| 0073_iran_yanya | "**app.js `/^OLAYLAR(_[A-Za-z0-9]+)?$/` desenini tarar — ad TEK altçizgiyle başlar ve gerisi harf+rakam, desen TUTAR.** … Satır eklenmeden maddeler görünmez." | `949206aa` 2026-09-22 "İki yazılmış ama BAĞLANMAMIŞ veri dosyası **canlıya alındı**" |
| senusi_0919 | "index.html BAĞLAMASI 1.MURAT'ta … `denetle.py` dosyayı olaylar* globuyla ZATEN görür." | `c2dd9ec1` 2026-09-19 "… SENUSI-NOKTA (Lugos, Orsova + 2 madde) …" |
| ortadogu_0919 | "⚠️ HENÜZ CANLI DEĞİL: index.html/app.js bağlaması 1.MURAT'ta." | `9a272ab3` 2026-09-19 "NOKTA-ORTADOGU — … kaynakli madde" |
| senkron_0930 | "eksik olan iki madde YAZILDI … `data/olaylar*.js` kalıbına girdiği için Değişmez 2 evrenindedir" | `17cd2f98` 2026-09-30 "125 yerlesim duzeltmesi indi · 419 madde pakete girdi" |

- **"Ekranda olmasın" beyanı: bulunamadı** — 7 başlıkta da yok. Tersine: dördü "henüz canlı değil,
  bağlanacak" der (görünmesi niyet), biri "canlıya alındı" commit'i taşır, `0073_iran_yanya` başlığı
  desenin TUTTUĞUNU sanıyor (**yanlış inanç, ölçüldü: tutmuyor**).
- `app.js:7012-7017` yorumu süzgecin niyetini "**`OLAYLAR` ile başlayan her global kabul edilir**"
  diye yazıyor; uygulanan desen bunu yapmıyor (iki parçalı soneki eliyor). Yorum ↔ kod çelişkisi.
- Yayın kapısı bunu ZATEN görüyor: `denetle_yayin.cizilmiyor_mu()` doğrudan çağrıldı — yedi değişken
  de (hem kendi dosyasında hem paketinde) `app.js OKUMUYOR` olarak listede; **hiçbiri `CIZILMEYEN_MUAF`ta
  değil** (gerekçeli muafiyet = kasıt beyanı yok).
- Not: `app.js:5192` ve `:5217` (SEFERLER süzgeci yorumu) aynı tuzağı kendi tarafında görüp desenini
  `[A-Za-z0-9_]`ye genişletmiş; OLAYLAR deseni o düzeltmeyi almamış.

**Değişmez 2 bu maddeleri sayıyor mu: EVET.** `denetle.py:1110` `glob("olaylar*.js")` + `:1114`
`window\.(OLAYLAR\w*|…)` — `\w*` iki parçalı soneki kapsar. Yedi dosyanın yedisi de glob listesinde
(ölçüldü). ⇒ Bu 112 madde Değişmez 2/2s/2i kırılmalarını **kapatıyor ama kullanıcı onları görmüyor** —
§1'in "kronoloji ile harita birbirini doğrulamalı" ilkesinde kapı TEMİZ, ekran eksik. Aynı evrenden
mükerrer denetimine de giriyorlar (`olaylari_yukle` → O = 2187 madde).

---

## 4b. EK KALEM — `vefat_id` (genel koordinatör)
`py arac/durum_tablosu.py` (yazmadan, `--yaz` YOK; çıkış 0), çıktı AYNEN:
```
| Kronoloji | **1774** madde · 1398 duygu etiketli · 1641 `yer_id` · 28 `vefat_id` |
```
⇒ **Araç 28 diyor.** Evren (`durum_tablosu.py:417`): `data/olaylar*.js` içinde `vefat_id:`
**metin** geçişi — yorum satırlarını da sayar.
`grep` 28 geçiş; node ile gerçek nesne alanı sayıldı: **27**. Fark = **1 yorum satırı:**
`data/olaylar_ek17.js:39` → `// eski kayıt \`vefat_id:"osman2"\` ve \`kisiler:\` taşıyor — …`
(veri değil; gerçek `osman2` alanı `olaylar_ek7.js:70`te, ayrıca sayılıyor).
⇒ W1'in 27'si doğru veri sayısı; §1.5'teki 28 aracın yorum geçişini sayan regex'inden.
27 alanın üyeliği:
```
OLAYLAR: murad1 mehmed2 suleyman1 · EK13: orhan · EK17: abdulhamid1 · EK2: ibrahim · EK3: bayezid1 ·
EK4: mahmud2 · EK5: osman1 murad2 selim1 selim2 murad3 mehmed3 ahmed1 murad4 mahmud1 osman3 mustafa3
abdulmecid abdulhamid2 mehmed5 mehmed6 · EK7: bayezid2 barbaros-hayreddin-pasa osman2 selim3
```
📌 P1 ile bağlantı: `olaylar_ek5.js:103` maddesi `t:"1324-08-01"` + `vefat_id:"osman1"` taşıyor —
`padisahlar.js` `olum:"1324-08-01"` ile aynı gün. 08-01'in kaynağı bu maddeden de okunmadı (ölçülmedi).

## 5. Bulunamayanlar
- `osman1.olum` ay/günü (08-01) için kaynak: bulunamadı (TDV'de yok; git kökeni ölçülmedi).
- Edirne Vak'ası isyancı tarafı için künye: bulunamadı.
- O7 için "ekranda olmasın" beyanı: bulunamadı.
- Değişmez 8: bu ağaçta ölçülemedi (`devletler_harita.js` yok).
