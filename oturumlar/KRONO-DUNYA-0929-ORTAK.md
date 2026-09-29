# KRONO-DÜNYA-0929 — ORTAK DOKTRİN (on iki paketin HEPSİ bunu okur)

> Emre, 29 Eylül 2026: *"tüm dünya kronolojilerini devlet listesini gözden geçirsin …
> hepsinin kronolojilerini araştırsın … eksik kronoloji maddelerini doldursun …
> harita ile senkronize olmasını sağlasın … özellikle Osmanlı ve etrafındaki önemli
> devletleri ayrı bir keskinlik ve kalitede kontrol edelim."*

Bu dosya ORTAK kısmı taşır. Kendi kapsamın `oturumlar/<ADIN>.md`de.
**İkisini oku, üçüncü belgeyi açma** (`CLAUDE.md` + kendi şartnamen + bu dosya).

---

## 0. ÖLÇÜLMÜŞ BAŞLANGIÇ NOKTASI — tahmin değil, 29 Eylül 2026 ölçümü

```
kronoloji maddesi      7.160   (128 dosya: olaylar* çekirdek + kronoloji* kuyruk)
devletler.js künye       678
yüzyıl dağılımı        19.yy 1377 · 16.yy 1233 · 15.yy 940 · 18.yy 883 · 14.yy 824 · 20.yy 795
Değişmez 2s           1.666 yabancı kırılma · 180 AÇIK (tavan 195)
                        786 KAPSAM DIŞI · 158 YIL-TEMSİLÎ BORÇ
```

🔴 **786 "KAPSAM DIŞI"ın ne olduğunu doğru anla — bu işin kalbi.**
`denetle.py`nin kendi tanımı: *"Osmanlı küresine 300 km'den uzak; maddesi bu
kronolojide OLAMAZ, yazılmamış DEĞİL."* Yani kapı onları **kusur saymıyor** ve
haklı: çekirdek kronoloji Osmanlı'nın kronolojisidir. Ama bunlar **haritada
toprak değiştiği hâlde hiçbir maddenin açıklamadığı** kırılmalardır. Çekirdeğin
işi değil — **senin dosyanın işi.** Emre'nin istediği tam olarak budur.

⚠️ Ve bunu bir "borç" gibi RAPORLAMA: kapı temiz, tavan aşılmadı. Sen boşluğu
DOLDURUYORSUN, bir ihlali kapatmıyorsun.

---

## 1. 🔴 EN ÖNEMLİ GERÇEK — KRONOLOJİ MADDESİ HARİTAYI OYNATMAZ

Bu cümleyi yanlış anlayan bir oturum bütün emeğini boşa harcar:

```
harita  =  data/yerlesimler*.js  (s:/d:/v:/isg: pencereleri)  +  petek KOŞUSU
kronoloji =  data/kronoloji_*.js                               →  anında yayında
```

Yeni bir kronoloji maddesi yazmak haritada **hiçbir şeyi değiştirmez.**
"Haritada senkronize görünsün" isteğinin İKİ yarısı var ve çareleri ayrı:

| Ne buldun | Çare | Ne zaman görünür |
|---|---|---|
| **(a)** Haritada kırılma VAR, maddesi yok | maddeyi YAZ (senin dosyan) | yayınla birlikte, hemen |
| **(b)** Tarihte değişim var, haritada YOK | `s:` penceresi ÖNERİSİ yaz | ancak petek koşusundan sonra |

🔴 **(b) için `data/yerlesimler*.js`e DOKUNMA — o Oturum 0'ın dosyası** (`CLAUDE.md §7`).
Önerini `denetim/<ADIN>-YERLESIM-ONERI.md` dosyasına, **uygulanabilir biçimde** yaz:
dosya adı · yerleşim adı · mevcut `s:` satırı · önerilen satır · kaynak · gerekçe.
Koordinatör bunları BİRİKTİRİP tek koşuda uygular (koşu ~6-9 saat, ve koşu 17 bir
kez segfault verdi — bu yüzden koşu ucuz değil, öneriler toplanır).

📌 Ve şu tuzağa düşme (`CLAUDE.md §3`): `kd:` alanı bu ölçümü değiştirir ama
**motor `kd:`yi OKUMAZ.** Gövde çakışmasını `kd:` ÇÖZMEZ.

---

## 2. Şema — VERİDEN ölçüldü, belgeden değil

⚠️ `VERI-YAPISI.md §264` yalnız **çekirdek** şemayı (`olaylar*.js`, `k:` alanı)
yazar. Senin yazacağın **kuyruk** dosyaları farklı şema kullanır. Aşağıdaki
tablo 5.437 canlı kuyruk kaydından ölçüldü (29 Eylül 2026):

```js
{ t:"1830-10-17", b:"Özerklik fermanı (Hatt-ı Şerif) yayımlandı", tur:"idari",
  onem:4, dunya:2, kapsam:"dis",
  etiket:["idari","ozerklik","konu-siyasi"],
  yer_id:"Belgrad",
  d:"2-4 cümle. Ne oldu, niçin önemli, sonucu ne.",
  kaynak:"TDV `sirbistan`" }
```

**ZORUNLU on alan** (canlı veride hepsi ~%100): `t · b · tur · onem · dunya ·
kapsam · etiket · yer_id · d · kaynak`. Biri eksikse kayıt yarımdır.

| Alan | Kural |
|---|---|
| `t` | `YYYY-MM-DD`. **GÜN YAZ.** Gün bilinmiyorsa `YYYY-01-01` ve `gun:` alanında açıkla. Ay hassasiyetli yazım ayın 1'ine genişler ve yerleşim kırılmalarından ÖNCE sıralanır — senkron bozulur |
| `tur` | Veride **54 değer var** — YENİSİNİ UYDURMA, mevcuttan seç: `savas 917 · antlasma 516 · hukumdar 418 · toprak-kazanc 296 · kultur 292 · kurulus 273 · idari 210 · toprak-kayip 206 · isyan 204 · siyaset 190 · bilim 171 · son 164 · diplomasi 158 · ekonomi 153 · din 151 · reform 131 · isgal 103 · mimari 90 · olum 71 · kriz 67 · ittifak 66 · sosyal 66 · bolunme 65 · kanun 41 · hanedan 38 · anayasa 28 · fetih 25 · birlesme 25` |
| `onem` | 1-5. Dağılım: 4→1848 · 3→1574 · 5→1475 · 2→502 · 1→29. **5'i har vurmayın** — 5 "bu devletin tarihinde dönüm noktası" demektir |
| `dunya` | 1-5, dünya ölçeğinde önem. 2→2034 · 1→1538 · 3→1141 · 4→555 · 5→162 |
| `kapsam` | `"ic"` (o devletin iç meselesi) \| `"dis"` (Osmanlı/başka devletle ilişki). Veride dis 2944 · ic 2484 |
| `etiket` | Dizi. `konu-*` etiketi (`konu-siyasi`, `konu-askeri`, `konu-ekonomi`, `konu-idari`, `konu-kultur`…) ekle; süzgeç bunu kullanır |
| `yer_id` | 🔴 **DİKKAT — KAPIYA BAĞLI.** Aşağı bak |
| `d` | 2-4 cümle. Süreç notu, kaynak şüphesi, "atlasta şu yok" gibi editoryal söz **buraya DEĞİL** `ic_not_d:` alanına |
| `kaynak` | Açıkça yaz. TDV ise slug; akademik ise yazar+eser+sayfa |
| `gun` | İnsan okunur: `"17 Ekim 1830"`, `"1830 sonbaharı (TDV gün vermez)"` |
| `kapsam_genis` | Yalnız gerçekten dünya ölçekli maddede `true`. 🔴 Aşağı bak |

### 🔴 `yer_id` ve `kapsam_genis` — yayın kapısını kilitleyen iki alan

`CLAUDE.md §9` **odak nöbetçisi**: kronoloji maddesinin kamera odağı
`denetle_yayin.py`ye BAĞLIDIR ve **kırık atıfa YENİSİNE 0 tolerans** vardır.

```
yer_id yazdın ama ÇÖZÜLMÜYOR        → yayın kapısı KAPANIR (0 tolerans)
kapsam_genis:true + odak YOK        → kamera O GÜNÜN OSMANLI SINIRINA uçar
                                      (app.js:11835) — yabancı kronolojide bu
                                      ODAKSIZLIKTAN KÖTÜDÜR
```
⇒ Kural: `yer_id`yi **var olan bir yere** yaz, ya da **boş bırak** (`yer_id:""`).
Uydurma bir yer adı yazmak, hiç yazmamaktan kötüdür. Yazdıktan sonra ÖLÇ:

```bash
py arac/odak_olc.py
```

---

## 3. Kaynak disiplini — `CLAUDE.md §4`, kısaltılmadan

- **İslâm dünyası, Osmanlı ve komşuları: TDV birincil.** Çelişirse TDV esastır.
  Arama: `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`
  🔴 *"TDV'de yok"* demeden **ARA**. TDV **olay değil yer-kişi ansiklopedisidir**:
  olay slug'ı ölüyse olayın geçtiği **YERE** ya da başındaki **KİŞİYE** bak.
- TDV'nin kapsamadığı coğrafya için **akademik kaynak meşrudur** ve `kaynak:`
  alanına AÇIKÇA yazılır. Balkanlar/Mağrib/Kafkasya'da bu çok olacak — normaldir.
- **KULLANILMAZ:** forum · blog · içerik çiftliği · kaynaksız derleme ·
  YZ üretimi metin · popüler tarih sitesi. **Vikipedi tek dayanak değildir.**
- 🔴 **TARİH UYDURMA.** Gün bilinmiyorsa `YYYY-01-01`. **Yıl bilinmiyorsa yıl
  yazılmaz.** Sahte kesinlik de yasak: künyenin `f:`/`t:` günü **bir kaynak
  değildir**; kaynak yıl diyorsa yıl yazılır ve fark bildirilir.
- **Atlas referans değildir, mamul üründür.** Atlas koordinatı, komşu kaydın günü,
  künye günü DAYANAK OLAMAZ; çelişkide ATLAS düzelir.
- Bulunamadıysa `kaynak:"bulunamadı"` yaz — **gizleme.** `bulunamadı` bir sonuçtur.

📌 **Alıntı sınırı:** kaynaktan uzun pasaj kopyalamayın. `d:` alanı SİZİN
cümlelerinizle yazılır; kaynak künyeyle anılır.

---

## 4. Dosya sahipliği ve ad alanı

- Şartnamende yazan dosyaların DIŞINA yazma. Emin değilsen **tahtadan sor**.

### 🔴 4.1 ADLANDIRMA — ŞARTNAMELERDEKİ ESKİ AD YANLIŞTI, BU GEÇERLİ
*(29 Eylül 15:30 · KRONO-BALKAN-B-0929'un aksaklık raporu + canlı doğrulama.
Şartnamelerdeki `KRONOLOJI_<ÜLKE>` adları BU BÖLÜMLE DEĞİŞTİ. Hata bendeydi.)*

`js/app.js:13519 derinKronolojiBindir` bir `KRONOLOJI_<X>` globalini **`X.toLowerCase()`
adlı KÜNYEYE** bağlar (`_`→`-` geri düşüşü var). Künye yoksa **dosya yüklenir ama
hiçbir yere bağlanmaz — sitede ERİŞİLEMEZ.** Ve bağlanırsa `=` ile künyenin kendi
maddelerini **EZER.**

🔴 **Canlı yayında ölçüldü (tarayıcı konsolu, kodun kendi uyarısı):**
```
15 dosya / ~2.092 madde  → "KRONOLOJI_* eşlenemedi"  (anadolu 281 · dogu_afrika 218 ·
   orta_asya 205 · balkan 186 · italya_sehir 186 · … · sirbistan 35)   GÖRÜNMÜYOR
27 künye / 222 madde     → "🔴 KRONOLOJİ EZİLDİ"                        SİLİNİYOR
```
⇒ `sirbistan` · `bosna` · `arnavut` · `balkan` · `misir` · `cin` · `japonya` …
**bunlar künye id'si DEĞİL.** Gerçek id'ler ayrıntılı: `sirbistan-prensligi`,
`bosna-kralligi`, `hersek`, `arnavutluk-iskenderbey`, `karadag`, `zeta` …

### ⇒ KURAL: ÇOK KÜNYELİ YOLU KULLAN (`KRONOLOJI_COK_*`)

```
dosya   : data/kronoloji_cok_<kisaltma>.js
global  : window.KRONOLOJI_COK_<KISALTMA>
her madde: devlet:"<gerçek künye id>"          (tek künye)
           devletler:["id1","id2"]  ya da  taraflar:["id1","id2"]   (birden fazla)
```
`app.js:13573 cokTarafliKronolojiEkle` bu yolu işler ve üç şeyi **doğru** yapar:
**EZMEZ, EKLER** · mükerreri `t`+`b` ile atar · künyesiz id'yi sessizce düşürmez,
sayıp konsola basar. Örnek zaten var: `kronoloji_cok_1dunya_A.js`.

🔴 **Künye id'sini `data/devletler.js`ten OKU, UYDURMA** (`CLAUDE.md §3.5`:
"kimlik yok" demeden `devletler.js` TARANIR). Bir olay hangi siyasi yapıya
aitse onun id'si yazılır — 1463 Bosna'nın düşüşü `bosna-kralligi`, 1878 işgali
`bosna-isgal` + `habsburg`. **Bu yalnız teknik bir zorunluluk değil, daha
doğru tarihtir:** madde hangi polity'ye ait olduğunu söyler.
⚠️ İhtiyacın olan künye YOKSA madde yazmadan önce tahtadan bildir —
`devletler.js`e DOKUNMA, `KUNYE-DUNYA-0929` o listeyi çıkarıyor.

📌 Mevcut 15 eşlenmeyen dosyanın onarımı **senin işin değil** —
`KRONO-BAGLAMA-0929` paketine verildi. Sen yalnız YENİ dosyanı doğru ada yaz.
- `index.html`e satır eklemek **KOORDİNATÖRÜN** işidir — sen ekleme, teslimde söyle.
  (Site 29 Eylül'de paketlendi: 279 etiket → 57. Yeni dosya `arac/paketle.py`den
  de geçmeli; o da koordinatörde.)
- ⚠️ Dosyan `index.html`e bağlanana kadar **sitede görünmez.** Bu normaldir,
  arıza değil; teslim mesajında "bağlanmayı bekliyor" de.

---

## 5. Ne YAZMA — dört yasak

1. **Aynı olayı ikinci kez yazma.** Yazmadan önce o günü ve o olayı tara: 7.160
   madde var, senin ülkenin olayı başka bir dosyada duruyor olabilir (ör. Sırbistan
   özerkliği üç ayrı dosyada üç ayrı günde duruyor — aşağı bak).
2. **Osmanlı'nın kendi olayını yazma.** O çekirdeğin (`olaylar*.js`) işi. Sen o
   devletin gözünden yazarsın; Osmanlı ile ilişki maddesi `kapsam:"dis"` olur.
3. **Hüküm verme, veri silme.** Mevcut bir maddeyi YANLIŞ buluyorsan silme —
   `denetim/<ADIN>-DUZELTME.md`ye yaz, gerekçe ve kaynakla. Silme/değiştirme
   kararı koordinatörün.
4. **Tarih ve alıntı uydurma.** (§3)

### 🔴 Bilinen tuzak — aynı olay, üç ayrı gün
29 Eylül'de ölçüldü: "Sırbistan özerklik fermanı" veride **üç yerde üç günde**:
```
savaslar.js            1830-08-30
kronoloji_sirbistan.js 1830-10-17  "Özerklik fermanı (Hatt-ı Şerif) yayımlandı"
olaylar_ek.js          1830-11-08  "irsî knezlik ve garnizon şartı"
```
Bu sınıf **senin coğrafyanda da vardır.** Bulursan: hangisinin doğru olduğunu
kaynakla söyle, ötekileri **silme**, `denetim/<ADIN>-DUZELTME.md`ye yaz.

---

## 6. Sıra — ölç, sonra yaz

```
① ENVANTER   Senin devletlerinde bugün kaç madde var, hangi yüzyıllar boş?
             Sayıyı yaz. (Ölçmeden yazmaya başlamak = mükerrer madde üretmek)
② İSKELET    Devletin ömrü: devletler.js künyesi `f:`/`t:` ne diyor? Künye YOK
             ya da ömrü yanlışsa → `denetim/<ADIN>-KUNYE.md`ye yaz, devletler.js'e
             DOKUNMA. (🔴 Hayalet devlet tuzağı: `CLAUDE.md §3.5`)
③ OMURGA     Kuruluş · hanedan değişimleri · Osmanlı ile ilk temas · tâbilik/
             özerklik/bağımsızlık · büyük savaş ve antlaşmalar · son
④ DOLGU      Yüzyıl yüzyıl, boş kalan dönemleri kapat
⑤ SENKRON    Haritadaki kırılmaları maddelerinle eşleştir (§1'deki (a) ve (b))
⑥ DENETİM    py arac/denetle.py   → SONUÇ temiz olmalı
             py arac/odak_olc.py  → yeni kırık atıf 0 olmalı
             node --check ile dosyanı sına
```

**Hedef sayı yerine hedef KALİTE:** 30 iyi kaynaklı madde, 100 kaynaksız
maddeden değerlidir. Emre'nin sözü: *"ayrı bir keskinlik ve kalitede."*

---

## 7. Haberleşme — `CLAUDE.md §7.1/§7.2`, kısaltılmadan

- **Kanal TAHTADIR.** Ekrana rapor yazmak koordinatöre ULAŞMAZ.
  ```bash
  py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj "..."
  ```
  ⚠️ Çok satırlı mesajda PowerShell `--mesaj`ı keser → **Bash** kullan.
  ⚠️ `py` yerine **`py -X utf8`** kullan; emoji/Türkçe çıktıda UnicodeEncodeError
  veriyor ve mesaj okunmaz görünüyor.
- **Bekçi:** Bash `run_in_background: true` ile
  `py arac/tahta_bekci.py --kim "<ADIN>" --cik` — **Monitor KULLANMA.**
  Boş uyandıysan **ekrana hiçbir şey yazma**, sessizce yeniden kur ve dur.
- **Aksaklık BEKLEMEZ** (§7.1 ⑥): kaynaklar çelişiyor · başka oturumun dosyası
  gerekiyor · şartname yanlış · sayı beklenenden çok farklı · iş çok uzayacak
  → hemen tek mesaj, sonra işe devam.
- **Teslim TEK mesaj, üçlü kural:** ① ne ölçtüm (sayıyla) ② ne bulamadım
  (`bulunamadı` bir sonuçtur) ③ ne istiyorum/öneriyorum + değişen dosyalar +
  commit künyesi. Uzun rapor `denetim/<ADIN>-0929.md`ye, mesajda yalnız yolu.
- Teslim mesajının SONUNA: **"bekçimi öldüreyim mi?"** (§7.2 ⑧)
- **Commit:** kendi dosyalarını adıyla commit et —
  `git add -- <adlar>` + `git commit -F <mesaj-dosyası> -- <aynı adlar>`.
  🔴 Dizin pathspec'i ve `git add -A` **YASAK.** `git push` **koordinatörde.**
  Commit teslim DEĞİLDİR; teslim mesajdır.

---

## 8. Paket haritası — kim ne yapıyor (çakışmayı sen de görebilsin)

| Paket | Kapsam | Dalga |
|---|---|---|
| `KUNYE-DUNYA-0929` | 678 künyeyi gözden geçir: eksik devlet/beylik/krallık/emirlik listesi | 1 |
| `SENKRON-DEFTER-0929` | 180 AÇIK + 786 KAPSAM DIŞI + 158 YIL-TEMSİLÎ kırılmanın devlet bazında dökümü | 1 |
| `KRONO-BALKAN-B-0929` | Bosna-Hersek · Karadağ · Arnavutluk · Sırbistan | 1 |
| `KRONO-BALKAN-D-0929` | Yunanistan · Bulgaristan | 1 |
| `KRONO-TUNA-0929` | Romanya (Eflak/Boğdan/Transilvanya) · Ukrayna | 1 |
| `KRONO-KAFKAS-0929` | Gürcistan · Ermenistan | 1 |
| `KRONO-MAGRIB-0929` | Libya/Trablusgarp · Tunus · Cezayir · Fas | 1 |
| `KRONO-KUZEY-0929` | Rusya · Lehistan | 2 |
| `KRONO-ORTA-AVRUPA-0929` | Habsburg/Avusturya · Macaristan · Almanya | 2 |
| `KRONO-ITALYA-0929` | Venedik · Ceneviz · Papalık | 2 |
| `KRONO-ATLANTIK-0929` | Fransa · İspanya · İngiltere · Portekiz · Hollanda | 2 |
| `KRONO-DOGU-ISLAM-0929` | İran · Safevi · Akkoyunlu · Karakoyunlu · Memlük · Mısır | 2 |

**Sınır senin değil komşunun da işi:** bir olay iki paketi ilgilendiriyorsa
(ör. 1699 Karlofça: Habsburg + Venedik + Lehistan) **yatay mesaj serbesttir**
(`--kime "<ÖTEKİ PAKET>"`), ama atama/öncelik hükmü koordinatöre.

---

## 9. Faydalı olabilecek önceki iş (okumak ZORUNLU DEĞİL)

- `denetim/DUNYA-KRONO-0081-kapsam.txt` — 40 dönüm noktası dünya olayının
  kapsama denetimi; `YOK` damgalı satırlar gerçek boşluklardır. Yöntem örneği.
- `denetim/DUNYA-KRONO-0081.md` — TDV tuzakları ve akademik kaynak beyanının
  nasıl yazıldığına iyi bir örnek (Bánlaky vakası).
