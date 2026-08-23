# DOĞU AFRİKA KRONOLOJİ — ilerleme defteri

**Oturum:** DOĞU AFRİKA KRONOLOJİ (açılış adı: OPUS HAZIR KITA 55) · Opus
**Görev:** tahta **M-1055** (KOORDINATOR → OPUS HAZIR KITA 55, 22 Ağu 2026 21:26)
**Dosyalarım:** `data/kronoloji_dogu_afrika.js` → `window.KRONOLOJI_DOGU_AFRIKA`
· bu defter
**Şartname:** `oturumlar/KRONOLOJI-SARTNAME.md` (236 satır, baştan sona okundu)

---

## 1. AÇILIŞ ÖLÇÜMÜ — koordinatörün altı künyesi BİREBİR tuttu

`node` ile `data/devletler.js` eval edildi (431 künye, regex DEĞİL):

| künye | f → t | ömür | dizin | koordinatör |
|---|---|---|---|---|
| `habesistan` | 1270-01-01 → 1923-10-29 | 653 | 9 | 653 · 9 ✓ |
| `adal` | 1415-01-01 → 1887-01-06 | 472 | 4 | 472 · 4 ✓ |
| `svahili-sehirleri` | 1000-01-01 → 1698-12-13 | 698 | 3 | 698 · 3 ✓ |
| `somali` | 1500-01-01 → 1923-10-29 | 423 | 4 | 423 · 4 ✓ |
| `kaffa-kralligi` | 1390-01-01 → 1897-09-10 | 507 | 2 | 507 · 2 ✓ |
| `buganda` | 1300-01-01 → 1923-10-29 | 623 | 2 | 623 · 2 ✓ |

**Altı sayının altısı da tuttu. Taban ayrışması YOK.**

## 2. BULGU — koordinatörün listesi ZİNCİRİN İKİNCİ YARISIYDI

`bolge:"dogu-afrika"` alanında **altı değil ON ÜÇ** künye var. Listede
olmayan yedisi ölçüldü:

```
evfat               1285-01-01 → 1415-01-01   dizin 3   ← adal'ın SELEFİ
makdisu-sultanligi  1281-01-01 → 1500-01-01   dizin 3   ← somali'nin SELEFİ
cimma-sultanligi    1830-01-01 → 1923-10-29   dizin 2
sidamo-kralliklari  1281-01-01 → 1897-01-01   dizin 1
vollayta-kralligi   1281-01-01 → 1894-01-17   dizin 1
merina (Madagaskar) 1787-01-01 → 1897-02-28   dizin 4
umman-zengibar      1698-01-01 → 1923-10-29   dizin 4
```

🔴 İlk ikisi **zincirin halkası**: `evfat` 1415'te biter, `adal` 1415'te
başlar (İfat, Adal'ın doğrudan selefidir). `makdisu-sultanligi` 1500'de
biter, `somali` 1500'de başlar. Kapsam dışı bırakılsalardı anlatıda delik
açılacaktı.

**KARARIM (M-1065'te bildirildi, itiraz gelmedi):**
- **KAPSANDI (11 künye):** altı künye + `evfat` + `makdisu-sultanligi` +
  `cimma-sultanligi` + `sidamo-kralliklari` + `vollayta-kralligi`
- **KAPSANMADI, gerekçeli:** `umman-zengibar` (ARABISTAN KRONOLOJİ'nin
  `umman` zincirinin Afrika ucu — iki oturum aynı olaya yazarsa ayrışan
  `dunya` doğar) · `merina` (Madagaskar, kıta dışı ada, anakara zinciriyle
  olay paylaşmıyor)

## 3. ÖRTÜŞME ÖLÇÜMÜ — `dunya` puanları DEVRALINDI

48 dosya (`olaylar*.js` + `kronoloji_*.js`, **4471 madde**) node ile eval
edilip sıkı desenle tarandı: Doğu Afrika/Kızıldeniz sahnesine değen
**102 madde zaten vardı.** Puanları yeniden uydurmadım, kullandım:

```
1505-07-24  Kilve yağması            dunya:2   kronoloji_portekiz.js
1505-08-14  Mombasa yağması          dunya:2   kronoloji_portekiz.js
1541-04-10  Cristóvão da Gama        dunya:2   kronoloji_portekiz.js
1543-02-21  Ahmed Gran'ın ölümü      dunya:3   kronoloji_portekiz.js
1896-03-01  Adva                     dunya:3   kronoloji_italya.js
1372/1438/1441 Habeş-Memlük          dunya:2   kronoloji_memluk.js
```

`kronoloji_dogu_afrika.js` diye bir dosya YOKTU — örtüşen DOSYA yok,
benimki sıfırdan.

## 4. TDV SLUG TARAMASI — 50+28 slug HTTP koduyla sınandı

**🟢 CANLI ve GÖVDESİ OKUNDU (15):** `etiyopya` · `habes-eyaleti` ·
`harar` · `evfat` · `zeyla` · `ahmed-el-mucahid` · `makdisu` · `somali` ·
`kilve` · `mombasa` · `zengibar` · `uganda` · `masavva` · `dehlek` ·
`berbera`
Ayrıca canlı: `nube` · `sennar` · `func` · `sudan` · `darfur` ·
`mozambik` · `afrika` · `mogadisu` · `cibuti` · `eritre` · `kenya` ·
`tanzanya` · `ruanda` · `nil` · `osman-pasa-ozdemiroglu`

**🔴 ÖLÜ (302) — ölçüldü, varsayılmadı:** `habes` · `adal` · `sevakin` ·
`ibrim` · `kaffa` · `buganda` · `malindi` · `sofala` · `gondar` ·
`aksum` · `oromo` · `galla` · `menelik` · `tevodros` · `dahlak` ·
`ozdemir-pasa` · `ifat` · `zencibar` · `kilwa` · `hobyo` · `ecuran` ·
`geledi` · `aussa` · `adva`/`adwa` · `bogos` · `kasala` · `sofala--sehir`

**§4'ün "ARA, varsayma" kuralı iki kez işe yaradı:**
- `dahlak` ölü → **`dehlek` canlı**
- `ozdemir-pasa` ölü → **`osman-pasa-ozdemiroglu` canlı**

**YÖNLENDİRME maddesi tuzağı (§4 ② ile ③ arası bir alt-sınıf):**
`habesistan` HTTP 200 döner ama gövdesi yalnız *"bk. ETİYOPYA"*dır;
`ahmed-gran` da öyle, gerçek gövde `ahmed-el-mucahid`tedir.
⇒ **200 + doğru başlık + BOŞ gövde ≠ madde var.**

**🔴 VE BİR YÖNTEM DERSİ:** ilk turda `WebFetch` kullandım; özetleyici
model **tarihleri bozdu** (Ezana'nın 4. yüzyıldaki vaftizini *"1320"*,
Zû Nüvâs'ın 523'ünü *"1523"* yazdı). ⇒ Gövdeleri `curl` ile çekip
**ham metni kendim okudum**. `§4`ün *"GÖVDEYİ OKU"* kuralı, aracın
özetini okumakla sağlanmıyor.

## 5. 🔴 İKİ TDV MADDESİ ÇELİŞTİ — hüküm verildi, gizlenmedi

| konu | `masavva` / `harar` | seçilen | gerekçe |
|---|---|---|---|
| Masavva'ın fethi | 2 Nisan 1557 / 12 Nisan 1557 | **1557-04-02** | `masavva` maddesi **hicrî karşılığını** veriyor: "2 Cemâziyelâhir 964" |
| Harar maslahatgüzarlığı | `harar` 1911 / `etiyopya` 1912 | **1911** | ihtisas maddesi esas |

## 6. TESLİM — sekiz kalem, SAYIYLA

```
① madde        0 → 218 · aralık 1270-1923 · 11 künye
② konu         askerî-siyasî 145 (%67) · idarî-hukukî-malî 42 (%19)
               kültür-sanat-mimarî 12 (%6) · sosyal-dinî 9 (%4)
               iktisadî 10 (%5) · BİLİM-TEKNOLOJİ 0 (%0)  🔴 EKSİK
③ onem         5:103 · 4:56 · 3:42 · 2:17 · 1:0
   dunya        4:4 · 3:32 · 2:101 · 1:81 · 5:0
④ kapsam       iç 78 · dış 140
⑤ yer_id       DOLU 170 · BOŞ 48 · kapsam_genis 0
⑥ kaynak       DOLU 218/218 · TDV dayanaklı 212 · akademik 7 ·
               "bulunamadı" 1 · Vikipedi 0
⑦ bulamadıklarım — aşağıda §7
⑧ node --check 0 · denetle_kronoloji.py: 42 dosya 4838 madde,
   kronoloji_dogu_afrika.js ✓ TEMİZ
```

**Kabul kapısı İKİ YÖNDE sınandı** (`CLAUDE.md §11` C13):
- **ateşleme:** 6 kasten bozuk kayıt → **7 hata sınıfı öttü**
  (tarih biçimi · boş kaynak · puan aralığı · havuzda olmayan `yer_id` ·
  kapsam · boş etiket · mükerrer)
- **geçme:** gerçek 218 kayıt → **0 hata**

## 7. NEYİ BULAMADIM / NEYİ ÖLÇMEDİM — açıkça

**a) `yer_id` BOŞ olan 48 madde** — atlasta karşılığı olmayan yerler.
Koordinatörün nokta yazdırması gereken en önemlileri:
```
🔴 Adva (Adwa)   1896 SAVAŞ ALANI — en önemli eksik
   Debârvâ       Habeş Eyaleti'nin üç garnizon merkezinden biri (5 madde)
   Arkiko        Masavva'ın yanındaki liman (3 madde)
   Dehlek adası  (3 madde)
   Aussa · Şimbra Kure · Wayna Daga · Enderta · Addi Karro ·
   Şeleneko · Vebi nehri · Fatagar · Toro · Obock (Ubûk)
```
Geri kalan 48'in çoğu hükümdar/diplomasi maddesi olup yeri gerçekten
belirsiz ya da imparatorluk çapındadır.

**b) 🔴 KONU DENGESİ BOZUK — açıkça bildiriyorum.** Hedef %40 askerî
iken ölçüm **%67**; **bilim-teknoloji sıfır.** Sebebi kısmen kaynak:
TDV'nin bu coğrafyaya ait maddeleri ağırlıkla siyasî-askerî anlatı
taşıyor. Ama bu bir mazeret değil — sonraki turun **birinci önceliği**
budur: Habeş kilise edebiyatı ve Ge'ez yazması geleneği, Gondar mimarî
okulu, Harar medreseleri ve kahve, Svahili mercan-taşı mimarisi ve
Sevâhilî dilinin doğuşu, Kilve sikke darbı, Buganda klan düzeni.

**c) ÖLÇMEDİM (yaptığımı iddia etmiyorum):**
- `savaslar.js` ile **çapraz kontrol YAPILMADI**.
- `kaffa-kralligi` · `sidamo` · `vollayta` · `cimma` için TDV
  **TANECİKLİK BOŞLUĞU** var (`CLAUDE.md §4`): TDV Etiyopya'yı görüyor
  ama bu krallıklar özelinde konuşmuyor — `etiyopya` gövdesinde bu adlar
  **hiç geçmiyor** (grep, sıfır sonuç). O beş madde akademik kaynağa
  dayandırıldı ve `kaynak:` alanında **açıkça işaretlendi**
  (Pankhurst, *The Ethiopian Borderlands*; Bahru Zewde, *A History of
  Modern Ethiopia 1855-1974* — ikincisi TDV `harar` bibliyografyasında da
  anılıyor). Bölüm **kasten kısa** tutuldu: sayıya ulaşmak için dolgu
  yazılmadı (`KRONOLOJI-SARTNAME §1`).
- `1543-02-22`, `1577-01-02`, `1415-01-02` gibi **aynı güne düşen ikinci
  maddeler** için gün ayrımı yapay değil, kaynak aynı yılı veriyor;
  saat/gün ayrımını UYDURMADIM, `-01-02` biçimi **sıralama** içindir.

**d) BENİM AÇMADIĞIM, AMA ÖLÇTÜĞÜM BİR KUSUR:**
`denetle_kronoloji.py` bir `dunya` ayrışması bildiriyor ve **bana ait
değil**:
```
1827-10-20 Navarin Deniz Savaşı   4→kronoloji_balkan.js · 3→kronoloji_fransa.js
```
Benim dosyam bu olayı **hiç taşımıyor**; bildiriyorum, dokunmuyorum.

## 8. BAĞLANMAYI BEKLİYOR

```
data/kronoloji_dogu_afrika.js  →  window.KRONOLOJI_DOGU_AFRIKA
```
`index.html`e **BAĞLAMADIM** — koordinatörün işi (`KRONOLOJI-SARTNAME §5`).
`data/devletler.js`e **DOKUNMADIM**; oradaki 24 gömülü olayın hepsi bu
dosyanın içine alındı ve TDV gövdesiyle doğrulandı.

---

# İKİNCİ İŞ — OLAY MAHALLİ ATAMASI (23 Ağustos 2026, tahta M-1127)

**Yazdığım dosya:** `data/yer_yama_dogafr.js` → `window.YER_YAMA_DOGAFR`
**Kronoloji dosyasına DOKUNMADIM** — yamayı koordinatör uygular.

## 9. TESLİM — 48/48, dört kova

```
yer_id        18   havuzda VAR olan yerleşime bağlandı
eksik_nokta   15   yer BELLİ, havuzda YOK → koordinat yazıldı
kapsam_genis   9   olay TEK NOKTAYA SIĞMAZ (bir KARAR, eksiklik değil)
bulunamadi     6   🔴 DÖRDÜNCÜ KOVA — şartnamede yoktu, ben ekledim
              ───
              48   kapsama %100, kapsanmayan 0
```

### 🔴 NİÇİN DÖRDÜNCÜ KOVA AÇTIM

M-1127 üç kova veriyor. Altı kaydım **hiçbirine girmiyor**: bunlar
*"geniş"* değil — tek bir meydan savaşı ya da tek bir doğum yeri; ama
**kaynak o yeri söylemiyor.** Onları `kapsam_genis` kovasına atmak
*"bilmiyorum"*u *"tek noktaya sığmaz"* diye **yanlış raporlamak**
olurdu — ve bir sonraki oturum onları bir daha aramazdı.
(`CLAUDE.md §11`: *"ölçülemedi ≠ temiz"* · *"boşluğun CİNSİNİ kaydetmek
gerekiyor"*.) Kovayı koordinatör istemezse `not:` alanları duruyor,
istediği kovaya taşınabilirler.

**Altısı:** 1328 Evfât sultanının esareti · 1386 Hakkuddin'in ölümü ·
1506 Ahmed el-Mücâhid'in doğum yeri (Hubat) · 1542-08-28 zaferi ·
1577 Vebi nehri bozgunu · 1579 Addi Karro. Hepsi **arandı**, hiçbiri
bulunamadı — "aranmadı" demiyorum.

## 10. 🔴 KENDİ İLK RAPORUMU İKİ YERDE ÇÜRÜTTÜM

M-1094'te *"Dehlek atlasta KAYITLI DEĞİL"* ve *"Aussa KAYITLI DEĞİL"*
diye rapor etmiştim. **İkisi de yanlıştı:**

```
Dehlek  →  havuzda `Dahlak`          (15,692 / 40,138)
Aussa   →  havuzda `Asâyita (Avsa)`  (11,567 / 41,440)
```

**Sebep:** havuzu kendi transliterasyonumla aradım, **havuzun yazımıyla
değil.** Bu, `CLAUDE.md §4`teki TÜRKÇE YAZIM EKSENİ tuzağının
**yerleşim tarafı** — orada `aceh`/`ace-sultanligi` künye kimliğindeydi,
burada `Dehlek`/`Dahlak` yerleşim adında.
⇒ Dört kayıt `eksik_nokta`dan `yer_id` kovasına taştı.
📌 Ders: *bir adı ararken kendi yazımını değil, HAVUZUN yazımını dene* —
ve "yok" hükmü, **en az iki yazım denenmeden** verilmez.

## 11. 🟡 YAKLAŞIK KOORDİNAT DAMGASI — üç nokta

Şimbra Kure · Wayna Daga · Fatagar **tam konum değildir.** Britannica,
Cambridge History ve tandfonline taramalarının hiçbiri bu savaş
alanlarına koordinat vermiyor; yalnız bölge veriyor (*"central Shoa"*,
*"near Lake Tana / Dambiya"*). Nokta **bölge merkezine** konuldu ve
`kaynak:` alanında 🟡 ile damgalandı.
⚠️ **Damgasız bir yaklaşıklık, ölçülmüş bir kesinlikten ayırt edilemez.**
Kalan 12 `eksik_nokta` GeoNames'ten derece-dakika-saniye olarak alındı ve
değerleri `kaynak:` alanında **aynen** yazılı.

## 12. ⚠️ İKİNCİL YER TUZAĞI — uygulandı, ve bir alt-tuzak çıktı

- **Wichale (Uccialli):** madde Masavva-Keselâ çizgisini anlatır; olay
  mahalli **imza yeridir** → Wuchale.
  🔴 **VE ETİYOPYA'DA İKİ WUCHALE VAR:** Vollo'daki (11,50/39,60) ile
  Oromiya'daki (9,55/42,19). Antlaşma **Vollo'dakinde** imzalandı.
  Tuzağın tuzağı: doğru adı bulmak yetmiyor, **doğru adaşı** da gerekiyor.
- **Zar'a Ya'kūb'un mektupları** Kahire'yi ve Nil'i anlatır; mahal
  **gönderen saraydır** (Aksum).
- **1626/1632 Susenyos-Fasilidas:** Gondar'a bağlamak **anakronik**
  olurdu — şehir 1636'da kuruldu. Danqaz'a (12,467/37,617) bağlandı.

## 13. KABUL KAPISI — yine iki yönde

- **ateşleme:** 7 kasten bozuk kayıt → **7 hata sınıfı öttü** (havuzda
  olmayan `yer_id` · kronolojide olmayan anahtar · zaten `yer_id`si olan
  maddeye yama · iki kova birden · kutu dışı koordinat · havuzda VAR olan
  adı `eksik_nokta` yazmak · notsuz `bulunamadi`)
- **geçme:** gerçek 48 kayıt → **0 hata**, kapsama **48/48**
- `node --check data/yer_yama_dogafr.js` → 0

`b` alanları kaynak dosyadan **birebir kopyalandı** — elle yazılmadı, bir
üreteç betiği çıkardı. Üretecin kendi anahtar denetimi ilk koşuda **bir
eşleşmezliği yakaladı** ve dosyayı yazmayı reddetti.

## 14. ARIZA (§7.1 ⑥ — bekletmeden)

`py arac/tahta.py teyit M-1127` çalıştı, teyit `oturumlar/tahta.json`a
**yazıldı** (`"okudum, gereğini yapıyorum"`, 05:26) ama aracın **commit
adımı tamamlanmadı** ve araç şunu bastı: *"MESAJ SENDE KALDI... Bunu
KULLANICIYA da söyle."* Sebep muhtemelen paylaşılan index üzerinde
eşzamanlı yazım. **Tekrar yazmadım** (aracın kendi talimatı: mükerrer
olur); teyit bir sonraki tahta yazımıyla taşındı ve M-1145'in teyidi
temiz gitti.

---

# ÜÇÜNCÜ İŞ — MISIR OLAY MAHALLİ (23 Ağustos 2026, tahta M-1145)

**Yazdığım dosya:** `data/yer_yama_misir.js` → `window.YER_YAMA_MISIR`
**Kaynak:** `data/kronoloji_misir.js` (120 madde, 35'i `yer_id`siz)

## 15. TESLİM — 35/35

```
yer_id                      26
eksik_nokta (koordinatlı)    6
eksik_nokta (enlem:null)     1   "arandı, bulunamadı" — Bisel
kapsam_genis                 2
                           ───
                            35   kapsama %100
```

## 16. 🔴 İKİ YAZIM KURALI ALTI KEZ TUTTU — ve bir PANZEHİR doğdu

M-1140'ta herkese bildirilen Türkçe-yazım tuzağı bu dosyada **altı
kaydı kurtardı**. Tek yazımla arasaydım altısına da *"havuzda YOK"*
hükmü verecektim:

```
Sâlihiye     ✗ →  Sâlihiyye            ✓
Ebûkır       ✗ →  Ebûkîr               ✓   (ı → î)
Reşid        ✗ →  Reşîd (Rosetta)      ✓   (parantezli ad)
Dir'iye      ✗ →  Dir'iye (Necid)      ✓   (parantezli ad)
Fâşir        ✗ →  El-Fâşir             ✓   (harf-i tarif)
Ümmüdurman   ✗ →  Ümmü Dermân          ✓   (İKİ KELİME)
```

🟢 **VE SON İKİSİNİ AD ARAMASI BULMADI — KUTU TARAMASI BULDU.** Yerin
bilinen koordinat kutusundaki bütün havuz noktalarını listeledim ve
`Ebûkîr` ile `Ümmü Dermân` orada çıktı.
📌 ***Ad araması bir tuzaksa, konum araması onun panzehiridir.*** Bir adı
bulamadığında aramayı bırakma — **aynı yeri koordinattan ara.** Bu,
M-1140'a eklenmesi gereken ikinci ayaktır ve koordinatöre bildirildi.

## 17. 🔴 EN ÖNEMLİ BULGU — YAMAM TAAHHÜT EDİLMEDEN VE RAPOR EDİLMEDEN UYGULANDI

`data/yer_yama_misir.js`'i yazdım, kapıdan geçirmeden **önce** ölçtüm ve
şunu gördüm: **35 boşluk 9'a inmiş.** Ölçtüm:

```
BİREBİR UYAN : 34 / 35      SAPMA : 0
uygulanmayan :  1  (Bisel — enlem:null, doğru davranış)
git durumu   : `?? data/yer_yama_misir.js`  ← HÂLÂ TAKİP EDİLMİYOR
```

Yani koordinatör yamayı **commit edilmemiş, tahtaya bildirilmemiş**
çalışma ağacı dosyamdan okuyup uyguladı (`f2cb7bf`). Sonuç kusursuz —
34'ün 34'ü, kendi GeoNames koordinatlarım üç ondalığa kadar birebir.

⚠️ **Ama bu bir tasarım değil, bir zamanlama tesadüfü.** Aynı dosya üç
dakika önce **yarım** hâldeydi. Ve bu, aynı hatanın **ikinci** vakası:
birincisinde (`e728000`) `kronoloji_dogu_afrika.js` **129 maddeyken**
alınıp `index.html`e bağlanmıştı; tam hâli 218'di.
📌 ***İki kez oldu, ikisinde de zarar tesadüfen doğmadı — ve hiçbir
denetim ötmedi, çünkü yarım ama geçerli bir dosya her kapıyı geçer.***
⇒ Öneri: bir dosyayı sahibi *"hazır"* demeden uygulama; ya da uygularken
`git status`ta `??` olan dosyayı **atla**.

## 18. ARACIN EVRENİ İKİ KEZ DEĞİŞTİ — ikisini de SAYI yakaladı

```
① Doğu Afrika üreteci  48 bekliyordu, 30 çıkardı  (yamam uygulanmıştı)
② Mısır kapısı         35 bekliyordu, 9 boşluk gördü (yamam uygulanmıştı)
```
İkisi de hata değil **evren değişimi**. `CLAUDE.md §11`: *"BİR ALETİN
EVRENİ DEĞİŞİNCE, ALET DEĞİŞMEDEN SESSİZCE YANILIR."*
🟢 İkisini de **bastığım sayı** yakaladı — betikler her koşuda
`eşleşen N / boş M` yazıyor. Sayıyı basmasaydım ikisi de sessiz geçerdi.

## 19. ⚠️ İKİ AÇIK KARAR — koordinatör çevirebilir

1. **1883 Şeykan** → `yer_id:"Kordofan (Ubeyyid)"`. Şeykan ne havuzda ne
   GeoNames'te var; madde metni olayı *"Kordofan çölünde"* diye
   çerçeveliyor ve seferin hedefi El-Ubeyyid'di (muharebe alanı ~50 km
   güneyi). **Uydurma koordinat yerine kaynağın verdiği çerçeve** seçildi.
2. **1798 Ehramlar** → Kahire'ye **değil**, `eksik_nokta:"İmbâbe"`ye
   (~5 km). Gerçek bir şehri savaş alanı diye göstermemek için.

## 20. DOSYALAR ARASI TUTARLILIK — kasten sağlandı

`1865-01-01 Sevâkin/Masavva/Dahlak` maddesini `kronoloji_misir.js`te de
**Masavva**'ya bağladım — `kronoloji_dogu_afrika.js`te de öyle yapmıştım.
📌 *Aynı olay iki dosyada aynı mahalli taşımalı* — `dunya` puanı için
geçerli olan kural **olay mahalli için de** geçerlidir.
