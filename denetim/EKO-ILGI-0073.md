# EKO-ILGI-0073 — ek okuma ↔ kronoloji maddesi İLGİ denetimi
**20 Eylül 2026 · paket 0073, maddeler H-0016 · H-0017 · H-0018 · H-0019 · H-0005**
Öngörü (ölçümden ÖNCE yazıldı): [`EKO-ILGI-0073-ONGORU.md`](EKO-ILGI-0073-ONGORU.md) — değiştirilmedi.

---

## 1. EVREN — kaç dosya, kaç kart, kaç bağ

Ölçüm aleti bütün `data/*.js` yükünü tarayıcının yaptığı sırayla Node'da kurar
(`ARAC-EKO-ILGI-0073-YUKLE.js`): `index.html`in 254 `data/*.js` satırı +
`js/app.js:_EKOKUMA_DOSYA_ADLARI`ın 57 geç yüklenen dosyası.

| ölçü | sayı | evren |
|---|---|---|
| `_EKOKUMA_DOSYA_ADLARI` dizisinde dosya | **57** | `js/app.js` |
| bunlardan diskte VAR olan | **56** | eksik: `data/ekokuma_antlasma6.js` (dizide, diskte yok — `onerror` sessizce atlıyor) |
| ek okuma ad alanı (`EKOKUMA*`) | 51 | `_ekHavuz()` regex'i |
| ek okuma kartı | **571** | |
| `MERAK*` kartı | 15 | `_merakHavuz()` |
| `ANTLASMALAR` kaydı (tür alanı yok, güne bağlanır) | 41 | |
| **TOPLAM KART** | **627** | |
| kartların `olay:`/`baglanti:` bağ değeri | **1 270** | `EKOBAG_ONERI` ezmesi dahil |
| bağ → madde çifti (bir bağ birden çok maddeye düşebilir) | **2 163** | |
| kronoloji maddesi — çekirdek `OLAYLAR*` | 1 622 (67 ad alanı) | |
| kronoloji maddesi — kuyruk `KRONOLOJI_*` | 5 429 (54 ad alanı) | |

📌 Öngörüm 900–1400 karttı, **627 çıktı** (yanlış, %55 fazla tahmin); bağ/kart oranı
öngörülen 1,5–2,5 yerine **2,0** (tuttu).

---

## 2. ÖLÇÜT ALETE ÇEVRİLDİ — ve iki yönde sınandı

Emre'nin ölçütü (H-0017): *"kişiler, olaylar, mekânlar, zamanlar ile ilinti olmalıdır"*
— doğrudan ya da dolaylı. Ama Emre'nin GAYRİMEŞRU örneği de açık: *"sadece içinde
yeniçeri ocağı geçiyor, başka ne alaka."* ⇒ **salt kelime teması yetmez.**

Alet (`ARAC-EKO-ILGI-0073.js`) her kart×madde çifti için dört ekseni İKİ KADEMEDE ölçer
(0 = temas yok · 1 = yalnız gövdede · 2 = kartın başlık bölgesinde):

| eksen | nasıl ölçülür | güçlü | zayıf |
|---|---|---|---|
| ① kişi | maddenin `kisiler:` alanındaki adlar kartın metninde | 171 | 507 |
| ② yer | maddenin `yer:` alanındaki yer adları kartın metninde | 302 | 451 |
| ③ zaman | maddenin yılı (±1) kartın metninde gerçekten geçiyor mu | 416 | 1 142 |
| ④ olay | madde BAŞLIĞININ içerik kelimeleri kartta | 879 | 954 |
| ④t olay (ters) | kartın başlığının içerik kelimeleri maddede | 700 | 272 |

**Kovayı belirleyen ise ÖZNE ÇAPRAZI:** kartın ÖZNESİ (`id` slug'ı + `baslik`/`ad` —
571 kartın ~200'ünde `baslik` yok, slug o kartların tek konu beyanı) maddenin metninde
mi geçiyor, ya da maddenin öznesi kartın öznesinde mi? Kartın GÖVDESİ özne sayılmaz —
Emre'nin ayrımı tam budur.

| kova | anlamı | çift | % |
|---|---|---|---|
| **A** | özne çaprazı tuttu — kart o konu hakkında ya da madde kartın konusundan bahsediyor | 1 581 | 73,1 |
| **B** | yalnız GEÇERKEN anılmış (kişi/yer/olay teması gövdede) — **insan okur** | 498 | 23,0 |
| **C** | hiçbir eksende temas yok — **insan okur** | 84 | 3,9 |

### İki yönlü sınav (yeni denetim sınanmadan çalışıyor sayılmaz)
Sınav kümesi Emre'nin H-0018'de ADIYLA saydığı 7 kart (Vak'a-i Hayriyye maddesi):

| kart | Emre | alet (ilk hâli) | alet (son hâli) |
|---|---|---|---|
| Nusretiye Camii | ✗ alakasız | A ❌ | **B ✓** |
| Feshâne | ✗ alakasız | B ✓ | **B ✓** |
| "Bir devlet üç asır…" (idarî yapı) | ✗ alakasız | B ✓ | **B ✓** |
| Müteferrika sonrası matbaa | ✗ alakasız | A ❌ | **B ✓** |
| GÜREŞÇİ TEKKELERİ | ✗ alakasız | B ✓ | **B ✓** |
| Yeniçeri Ocağı'nın kuruluşu | ✓ meşru (sayılmadı) | A ✓ | **A ✓** |
| Mehter ocakla birlikte lağvedildi | ✓ meşru (sayılmadı) | B | **A ✓** |

İlk kurguda eşik "başlık bölgesinde kelime teması"ydı ve **5 şikâyetten 2'sini
kaçırıyordu** (kartların `kisa:` teaser satırı bağlandığı olayın yılını/kelimesini
kasten anıyor). Özne çaprazına geçilince 5/5 yakalandı, meşru 2 kart A'da kaldı.
Ters yön ayrıca sınandı: `ANTLASMALAR`ın 41 kaydı (124 çift) ilk kurguda toptan C'ye
düşüyordu — sebebi kart adının tek kelime ("Prut", "Sevr") ve kelime eşiğinin 5 harf
olmasıydı; kısa-ad dalı eklendi, 124 A / 1 B / **1 gerçek C** kaldı.

🔴 **Alet HÜKÜM VERMEZ, AYIKLAR.** B ve C kovasında gerçek yanlış bağlar da var, haksız
şüpheli de: ör. `bakis-polonya` ↔ *II. Viyana Kuşatması* çifti C'ye düşüyor (kart
"Lehlerin gözünden Osmanlı" anlatısı, kelime örtüşmesi yok) ama ilgi apaçık meşrudur.
Bu yüzden **C kovasının 84 çiftinin tamamı ve B'nin şikâyete konu olanları elle okundu.**

---

## 3. KÖK SEBEP — kusur tek tek kartlarda değil, BAĞ ÇÖZÜNÜRLÜĞÜNDE

| bağ biçimi | çift | A | B | C | B+C % |
|---|---|---|---|---|---|
| `YYYY-01-01` (gün bilinmiyor damgası, ayırt edici YOK) | 76 | 19 | 15 | **42** | **75,0** |
| `YYYY-AA` (ay hassasiyeti, ayırt edici yok) | 16 | 10 | 6 | 0 | 37,5 |
| tam gün (`YYYY-AA-GG`, 01-01 değil) | 977 | 706 | 237 | 34 | 27,7 |
| ayırt edicili (`…\|anahtar`) | 1 062 | 809 | 236 | 17 | 23,8 |
| madde **çekirdek** `OLAYLAR*` | 1 181 | 927 | 230 | 24 | 21,5 |
| madde **kuyruk** `KRONOLOJI_*` | 950 | 617 | 264 | **69** | **35,1** |

İki kalıp:
1. **`YYYY-01-01` damgası bir MIKNATIS.** CLAUDE.md §4 "gün bilinmiyorsa `YYYY-01-01`"
   diyor; sonuç olarak yüzlerce madde aynı günü paylaşıyor ve o güne yazılan bir kart
   hepsine birden düşüyor. `hanedan-evlilik-cariyelik-nikahi` (Hürrem'in nikâhı) kartı
   `"1534-01-01"` bağıyla **Brezilya'nın on beş kaptanlığa bölünmesi** maddesinde
   çıkıyor. `hat-sanati-…` kartı `"1520-01-01"` ile Sind'deki Ergun hânedanında.
   ⇒ **Çare kartı silmek değil, bağa ayırt edici eklemek** — mekanizma ZATEN VAR
   (`"1534-01-01|Hürrem"`), yalnız kullanılmamış.
2. **Kuyruk sessizce büyüdü.** Kartlar çekirdek kronolojiye bakılarak yazıldı;
   `KRONOLOJI_*` dosyaları sonradan eklendikçe aynı bağ yeni maddelere de düşmeye
   başladı. Kuyrukta B+C oranı çekirdeğin 1,6 katı.

---

## 4. ÖKSÜZ BAĞ — kart HİÇ çıkmıyor (sessiz kayıp)

Denetimden önce **36 bağ değeri hiçbir maddeye düşmüyordu.** Sınıflandırma (D205: önce
sınıflandır, sonra düzelt):

| sınıf | adet | ne yapıldı |
|---|---|---|
| (a) ayırt edici maddenin BAŞLIĞINDA geçmiyor (`_ekBagEslesir` yalnız `o.b`ye bakar) | 12 | **düzeltildi** — ör. `"1789-07-14\|Paris"` → `"1789-07-14\|Bastille"` |
| (b) kronoloji günü keskinleştirilmiş, bağ bayatlamış | 4 | **düzeltildi** — `"1810-07-01\|Sohum"` → `"1810-07-11\|Sohum"`, `"1737-07-13\|Özi"` → `"1737-07-11\|Özi"` |
| (c) gün büsbütün yanlış / kaba | 6 | **düzeltildi** — `"1596-10"` → `"1596-10-26\|Haçova"`, `"1856-01-01\|Islahat Fermanı"` → `"1856-02-18\|Islahat Fermanı"` |
| (d) **kasıtlı sigorta çifti** (kayıt hem eski hem yeni günü taşıyor) | 4 | **DOKUNULMADI** — kayıtların kendi `ic_not`ları bunu açıkça yazıyor (rusiran 1722-08-23+09-03 Jülyen/Gregoryen, deniz 1798-09-03+09-09, antlasma3 1912-10-15+10-18) |
| (e) karşılığı olan madde HİÇ YOK — yeni kronoloji maddesi ister | 10 | **DOKUNULMADI** — bu oturumun dosyası değil, §7'de açık kalem |

**Sonuç: 36 → 14.** Kalan 14'ün 4'ü kasıtlı, 10'u madde yokluğundan.

---

## 5. H-0016 / H-0018 — Vak'a-i Hayriyye maddesi

Emre'nin şikâyeti doğru çıktı ve sebebi tek tek ölçüldü:

| kart | teşhis | yapılan |
|---|---|---|
| `matbaa-kesintili-tarihi-1747-1826` | kartın konusu matbaa; 1826 metnin SON paragrafında bir sonuç cümlesi | `"1826-06\|Hayriyye"` bağı **kaldırıldı** — kart öksüz kalmadı (1727 kuruluş + 1808 yakılma bağları duruyor) |
| `feshane-osmanli-sanayilesme-girisimi` | kart Feshâne'nin KURULUŞUNU anlatıyor (1833) | `"1826-06"` **kaldırıldı**, `"1833-06-01"` kaldı |
| `teknik-osmanli-idari-yapi-degisimi` | iki kusur: (i) `"1826-06-15"` diye bir gün YOK — kartın kendi bağı ÖKSÜZDÜ; (ii) `EKOBAG_ONERI` onu `"1826-06\|Yeniçeri Ocağı"`ya ezerek maddeye sokuyordu | **kendi konusuna taşındı**: `"1451-06-01\|Divan-ı Hümayun"` (hem kartta hem `ekokuma_bag_oneri.js`de) |
| `teknik-osmanli-spor-gelenekleri` (GÜREŞÇİ TEKKELERİ) | iki bağı da ocağın kaldırılışıydı (ikincisi `KRONOLOJI_RUSYA`'daki 1826-07-31 ikizi) | **kendi konusuna taşındı**: `"1357-06-01\|Kırkpınar"` + `"1504-01-01\|Kırkpınar"` — **bu iki madde kronolojide zaten vardı** (`OLAYLAR_EK14`), kart silinmedi |
| `camitarz-nusretiye-camii` | 🟡 **ÇÖZÜLEMEDİ** — kartın tek bağı bu; ailenin kuralı "yapının kendi maddesi" (`camitarz-bursa-ulucami` → `1399-06-01`) ama Nusretiye için kronolojide madde YOK | §7 açık kalem: `1826-04-08` Nusretiye Camii maddesi istenir |
| `kimdir-ahmed-cevdet-pasa` | bağı öksüzdü (`1826-06-15`), yani kart bu maddede HİÇ çıkmıyordu; oysa Târîh-i Cevdet tam 1774-1826 arasını anlatır — ilgi MEŞRU | gün düzeltildi, kart artık çıkıyor |

Madde bugün 4 kart gösteriyor (önce 7): 2'si A, 1'i yeni kazanılmış meşru kart,
1'i açık kalem.

---

## 5b. ZİNCİRLEME DÜZELTME — Vak'a-i Hayriyye maddesinin GÜNÜ (M-4832)

Koordinatörün ek kalemi: madde AY hassasiyetindeydi (`t:"1826-06"`) ama `gun:` alanı
zaten *"15 Haziran 1826"* diyordu. CLAUDE.md §8: ay hassasiyetli kayıt ayın 1'ine
genişler ve gün hassasiyetli maddelerden ÖNCE sıralanır — senkron bozulur.

**Tek işlemde yapıldı** (`denetim/ARAC-EKO-ILGI-0073-YAMA2-HAYRIYYE-GUN.py`), çünkü bağ eşleştiricisi
gün dizgisinde TAM EŞİTLİK arar; madde tek başına düzeltilseydi sekiz kart birden
sessizce görünmez olurdu.

| | |
|---|---|
| sınav ÖNCESİ bağlı kart | **8** |
| değişen | `data/olaylar.js` `t:"1826-06"` → `t:"1826-06-15"` · 5 dosyada 8 bağ dizgisi `…\|Hayriyye` ile birlikte |
| sınav SONRASI bağlı kart | **8** ✓ (aynı sekiz kart, aynı kovalarda) |
| `py arac/denetle.py` | **SONUÇ: temiz** (değişiklikten önce de sonra da koşturuldu) |

🔴 **YENİ GÜN İDDİA EDİLMEDİ.** Atlasın 15 Haziran'ı korundu; üç kaynağın ayrışması
maddenin `ic_not_gun` alanına BEYAN olarak yazıldı: TDV `vaka-i-hayriyye` **17
Haziran** · TDV `yeniceri` (aynı müellif, Beydilli) **14 Haziran** · atlas **15
Haziran**. (Koordinatör "kaynak alanına yaz" dedi; şemanın bu iş için açılmış alanı
`ic_not_gun` — 202 maddede kullanılıyor — o seçildi, `kaynak:"vaka-i-hayriyye"`
dokunulmadan duruyor.)

📌 **Yan etki, beyan:** iki ÖNERİ dosyası artık bu maddeyi eski günüyle anıyor —
`data/etiket_yama.js` (satır 5248) ve `data/yer_yama.js` (satır 16). İkisi de
motorun okumadığı öneri listeleri (`etiket_yama.js`in kendi başlığı: *"ÖNERİDİR,
VERİ DEĞİL. Motor okumaz, index.html'e EKLENMEZ"*), bu yüzden canlı bir kırık
oluşmadı — ama uygulanacakları gün `t` eşleşmesi tutmayacak.

📌 `data/ekokuma_toplum.js`teki iki `sebep:{… t:"1826-06"}` alanı **dokunulmadı**:
onlar bağ değil, kartın kendi sebep-sonuç kutusunda gösterilen tarih.

---

## 6. H-0019 — KATEGORİ DENETİMİ

`EKOKUMA_TUR` (js/app.js) **14 tür** tanımlar. Kartlarda geçen tür değerlerinin hepsi
tanımlı (kodda TANIMSIZ tür: **0** — eski `karsi-anlati` kusuru kapanmış). `sok-haberler`
türünde **0 kart**, `kahramanlik` 1, `menkibeler` 2.

### Kök sebep: Emre'nin kendi listesindeki bir kategori KODDA YOK
H-0002'de Emre kategorileri sayıyor: *"ek okuma · sebeb sonuç · kişi kartları · nasıl
bilirdiniz · magazin · tartışma · teknik bilimsel · **kültür sanat**"*.
`EKOKUMA_TUR`da **`kultur-sanat` anahtarı YOKTUR.** Mimari, sanat, spor, kıyafet
kartlarının gidecek bir kovası olmadığı için hepsi `teknik-bilimsel`e yazılmış.
Güreşçi tekkeleri kartının yanlış kategorisi tek tek bir hata değil, bu boşluğun sonucu.

### `teknik-bilimsel` (72 kart) içerik tasnifi
Ölçüt, 20 Eylül'de EKOKUMA-SIMGE-0070'in `ekokuma_ihtilal.js` başlığında zaten
yazdığı ölçüt: *"teknik-bilimsel = tekniğin/bilimin KENDİSİ"*.

| gerçek içerik | kart | öneri |
|---|---|---|
| **mimari / sanat** | **20** (`mimari-*` 16, `camitarz-*` 3, `lale-devri-mimari-ve-sehir`) | `kultur-sanat` (yeni tür) |
| **dünya siyaseti / coğrafyası** | **24** (`dunya*`) | `dis-yankilar` ya da `tartisma` — ikisi de tanımlı |
| **kültür (spor · kıyafet)** | **2** (`teknik-osmanli-spor-gelenekleri` ← Emre'nin saydığı kart, `teknik-osmanli-kiyafet-statu`) | `kultur-sanat` (yeni tür) |
| **idarî / kurumsal** | ~13 (devlet kademeleri, hukuk, vergi, iltizam, eflak-boğdan, dayılık, tâbi statü, tarihçilik, doğu afrika…) | tür yok — `tartisma`ya mı, yeni `kurum` türüne mi, Emre'nin kararı |
| **gerçekten teknik / bilimsel** | ~13 (tahrir, narh, matbaa, mühendishâne ×2, takvim farkı, Cihannümâ, Keşfüzzunûn, icatlar ×2, menzil-mesafe, tophane-tersane, Lâle Devri yenilikleri) | kalır |

⇒ **72 kartın en çok 13'ü ölçütü karşılıyor; 46'sı açıkça başka bir kovaya ait.**

🔴 **YAPMADIM, ÖNERİYORUM:** yeni tür eklemek `js/app.js:EKOKUMA_TUR`a dokunmak demek
ve H-0002'yi **EKO-UI-0073** aynı bölgede işliyor (kart satırına kategori etiketi
basacak) — iki oturum aynı yere yazarsa biri ötekini ezer. Sıra: önce EKO-UI-0073
etiketi bassın, sonra tür eklensin, sonra 46 kartın `tur:` alanı toplu düzeltilsin.
Toplu düzeltme ucuz: hepsi `data/ekokuma_*.js`, id desenleri temiz (`mimari-*`,
`camitarz-*`, `dunya*`).

---

## 7. H-0005 — "önem sırası / başlangıç ayarı" BUGÜN VAR MI?

**ÖNGÖRÜM YANLIŞ ÇIKTI: VAR.** Ne şema değişikliği ne yeni UI gerekiyor.

- **Alan var:** `onem` ve `dunya` sayısal alanları. `KRONOLOJI_*`ın **5429/5429**
  kaydında ikisi de dolu; çekirdek `OLAYLAR*`da 154 `onem` · 114 `dunya` (seyrek).
- **Ayar var:** ⚙ Ayarlar → **"Dış olaylar" eşiği** (`#dis-esik`, `localStorage.disEsik`,
  adres `?dis=`). Değerler `"0"` (hiç gösterme) · `"5"` · `"4"` · `"hepsi"`;
  **varsayılan `"4"`** (js/app.js:`DIS_ESIK_VARSAYILAN`). Mantık `SUZGEC.disOnemGizli`.
  Ayrıca seçilen devletin panelinde ayrı bir iç/bölge/dünya eşiği var — ama kodun kendi
  uyarı satırı açıkça yazıyor: *"Bu panel SEÇİLEN DEVLETİN kronolojisini süzer, Osmanlı
  zaman çizgisine UYGULANMIYOR."*
- **Ölçüm:** çekirdekte 227 madde `kapsam:"dis"`. Varsayılan eşikte (4) **38'i görünür**;
  eşik "5" olsa 3'ü görünür, "hepsi"de 227.
- **H-0005'in maddesi** (`data/olaylar_amerika_0920.js`):
  `t:"1821-09-15", kapsam:"dis", onem:4, dunya:4`. Yani **madde ayarın içinde**, yalnız
  puanı varsayılan eşiği tam geçiyor. Amerika kıtasından varsayılan eşikte görünen
  yalnız **2 madde** var: bu ve `1535-01-18 Lima kuruldu` (o da `dunya:4`).

**İki çare, ikisi de Emre'nin kararı** (ben yazmadım):
- **(a) VERİ — ucuz, dar, tavsiyem:** bu iki kaydın `dunya`/`onem` puanını 4 → **3**
  yap. Maliyet: iki satır, kod değişmez, öteki 36 dış madde etkilenmez. Gerekçe
  savunulabilir: bölgesel Amerika olayı, Osmanlı zaman çizgisinde dünya-ölçekli
  değil. Emre'nin cümlesiyle birebir uyuşuyor ("bölgesel önemi olan bir olay da değil").
- **(b) AYAR — geniş:** `DIS_ESIK_VARSAYILAN`ı `"5"` yap. Maliyet: tek satır, ama
  varsayılan görünen dış madde 38 → 3'e düşer; 35 maddeyi de beraberinde gizler.
  Emre "ayarlardan işaretlenirse gelsin" dediği için bu da meşru bir okuma, ama
  yan etkisi (a)'nın 18 katı.
- (c) yeni alan/UI: **GEREKMİYOR** — mekanizma zaten var, ölçüldü.

---

## 8. AÇIK KALEMLER — benim dosyam değil, koordinatöre

1. **Nusretiye Camii maddesi yok.** `camitarz-nusretiye-camii` kartı sahiplenemiyor.
   İstenen: `1826-04-08` (yapının tamamlanışı) kronoloji maddesi. `data/olaylar*.js`.
2. **`KRONOLOJI_RUSYA` 1826-07-31** — "Osmanlı, Yeniçeri Ocağı'nı kaldırdı" maddesi,
   olay 15 Haziran 1826. Çekirdekle **46 gün** ayrışık; aynı olayın iki ayrı günde
   duran ikizi. `data/kronoloji_rusya.js`.
3. **`data/ekokuma_antlasma6.js` dizide var, diskte yok** (EKO-ANTLASMA-2 teslimi).
   Kart sayısı bu yüzden eksik ölçülmüş olabilir.
4. **`ANTLASMALAR` kayıtlarının `olay:` alanı yok** — yalnız `t:` ile bağlanıyorlar, bu
   yüzden ayırt edici eklenemiyor. Ölçülen sonuç: *Mondros Mütarekesi* kartı
   `1918-10-30` gününü paylaşan **"Polonyalılar Krakov'da yönetimi ele geçirdi"**
   maddesinde çıkıyor. Ayrıca `ANTLASMALAR#Sırbistan özerklik fermanı` bağı
   (`1830-08-30`) öksüz — madde `1830-11-08`de. Dosya benim değil.
5. **Madde bekleyen 10 öksüz bağ:** Şehzade Mahmud'un idamı (1603-06-07) · Boğaz'ın
   donması (1621-01-24) · Mühendishâne-i Berrî'nin ayrılışı (1795) · Hendese-i
   Mülkiyye (1883) · İTÜ (1944 — atlasın kapsamı dışı, bağ kartta kalmalı mı?) ·
   Kilitbahir (1452) · Uşi'nin ikinci günü · vb.
6. **Kategori işi EKO-UI-0073 ile çakışır** — §6 sonundaki sıra.

---

## 9. DEĞİŞEN DOSYALAR (yazıldı, COMMİTLENMEDİ — koordinatörün)

```
data/olaylar.js             Vak'a-i Hayriyye t:"1826-06" → "1826-06-15" + ic_not_gun beyanı (M-4832)
data/ekokuma.js             yeniçeri ocağı kuruluşu: bağ "1826-06-15|Hayriyye"
data/ekokuma_camitarz.js    Nusretiye: bağ "1826-06-15|Hayriyye"
data/ekokuma_yeniceri.js    4 kartın bağı "1826-06-15|Hayriyye"
data/ekokuma_yenilesme.js   matbaa: 1826-06 bağı kaldırıldı (+ ic_not gerekçesi)
data/ekokuma_toplum.js      feshâne: 1826-06 bağı kaldırıldı
data/ekokuma_kurum.js       idarî yapı → 1451-06-01|Divan-ı Hümayun · Cevdet Paşa günü düzeltildi
                            · devlet kademeleri 1453-05-29 → 1453-06-01|Çandarlı Halil
data/ekokuma_bag_oneri.js   idarî yapı önerisi → 1451-06-01|Divan-ı Hümayun
data/ekokuma_tamamla.js     güreş → 1357-06-01|Kırkpınar + 1504-01-01|Kırkpınar
data/ekokuma_ihtilal.js     7 öksüz ayırt edici düzeltildi
data/ekokuma_kurum2.js      3 öksüz bağ düzeltildi
data/ekokuma_alemdar.js     Sohum 1810-07-01 → 1810-07-11
data/ekokuma_avusturya.js   Özi 1737-07-13 → 1737-07-11
data/ekokuma_savas.js       Haçova 1596-10 → 1596-10-26
data/ekokuma_statu.js       1711-03-01 → 1711-07-29|Karamanlı
data/ekokuma_vezir.js       Kuyucu 1607-10-23 → 1607-10-24|Canbolatoğlu
```
Kendi dosyalarım (adıyla commitlenir):
`denetim/EKO-ILGI-0073.md` · `-ONGORU.md` · `-HAM.json` ·
`ARAC-EKO-ILGI-0073.js` · `-YUKLE.js` · `-EVREN.js` · `-LISTE.js` · `-KOK.js` ·
`-TUR.js` · `-SEMA.js` · `-H0005.js` · `-YAMA1-OKSUZ.py` · `-YAMA2-HAYRIYYE-GUN.py`

Bütün dosyalar yükleme sınavından geçti (yüklenemeyen: 0).

## 10. NE BULAMADIM
- **B kovasının 498 çiftinin tamamı okunmadı** — yalnız Emre'nin adıyla saydığı
  kartlar ve C kovasının 84 çiftinin hepsi okundu. B, ayıklanmış bir OKUMA LİSTESİDİR;
  içinde hem gerçek yanlış bağ hem meşru ilgi var, hüküm tek tek okumayı ister.
  Sıradaki turun işi: `node denetim/ARAC-EKO-ILGI-0073-LISTE.js B`.
- **`kultur-sanat` türünün eklenmesi yapılmadı** (EKO-UI-0073 çakışması, §6).
- **H-0005'in kararı verilmedi** — (a)/(b) Emre'nin.
