# VERİ UFAK DÜZELTME — ilerleme

## KALEM 1 — Cezayir hayaleti — ÖLÇÜLDÜ, UYGULANMADI (görev gereği)

### Ölçülen 6 nokta (görevde tarif edilen küme — "Sahra vahalarının özerk idaresi" etiketi)

| ad | dosya:satır | v: son parça | s: (fransa) başlangıcı | fazla |
|---|---|---|---|---|
| Ağvât | data/yerlesimler_afrika.js:622-624 | 1830-07-05 → 1852-12-04 | 1852-12-04 | 22 yıl 5 ay |
| Gardâye | data/yerlesimler_afrika.js:626-628 | 1830-07-05 → 1852-12-04 | 1852-12-04 | 22 yıl 5 ay (⚠️ altta ayrı not) |
| Cilfe (Djelfa) | data/yerlesimler_h2_kuzeyafrika.js:216-221 | 1830-07-05 → 1852-12-04 | 1852-12-04 | 22 yıl 5 ay |
| Vargla (Ouargla) | data/yerlesimler_h2_kuzeyafrika.js:227-232 | 1830-07-05 → 1854-11-23 | 1854-11-23 | 24 yıl 4 ay |
| el-Vâdî (Sûf) | data/yerlesimler_h2_kuzeyafrika.js:236-241 | 1830-07-05 → 1854-12-02 | 1854-12-02 | 24 yıl 5 ay |
| Tuggurt | data/yerlesimler.js:1198 | 1830-07-05 → 1854-12-02 | 1854-12-02 | 24 yıl 5 ay |

Altısının altısı da `v:` dizisinde ikinci parça taşıyor:
`{f:"1830-07-05", t:"<fetih>", k:"Sahra vahalarının özerk idaresi"}`.
`v:` alanı haritada Osmanlı tâbi rengiyle boyanıyor.

### TEŞHİS

`devletler.js:1121` — `cezayir-ocagi` kaydının kendisi `t:"1830-07-05"` ile
bitiyor (Fransız işgaliyle son buluyor). Yani bu altı noktanın "tâbi
olduğu" Osmanlı siyasi varlığı 1830-07-05'te ortadan kalkmış durumda.

Buna rağmen altı nokta da 1830-07-05'ten fetih gününe kadar (22-24 yıl)
`v:` (Osmanlı tâbi) içinde kalmaya devam ediyor — ve etiketin kendisi
("**özerk** idaresi") zaten Osmanlı'ya tâbi olmadığını söylüyor. Yani
veri kendi içinde çelişiyor: metin "artık Osmanlı değil" diyor, alan
"Osmanlı tâbisi" diyor.

### İKİ UÇ ÖLÇÜLDÜ (CLAUDE.md §3.5.1)

- **Fransa tarafı temiz.** `s:` (fransa-cumhuriyet) dönemleri her nokta
  için gerçek fetih tarihinde başlıyor (Ağvât/Gardâye/Cilfe 1852-12-04,
  Vargla 1854-11-23, Sûf/Tuggurt 1854-12-02) — bunlar önceki bir oturum
  tarafından tek tek kaynaklanmış (dosya içi yorumlar mevcut). Fransa
  tarafında fazlalık YOK.
- **Osmanlı tarafı fazla.** Fazlalık yalnız `v:`'nin 1830-07-05'te
  bitmesi gerekirken uzatılmış olmasından geliyor.

### 🔴 UYGULANAMAZ TESPİTİ — düz kısaltma Değişmez 1b'yi bozar

`v:`'yi 1830-07-05'te kesip boş bırakmak (fetih gününe kadar hiçbir
d:/v:/s: yazmamak) her nokta için 22-24 yıllık bir İÇ BOŞLUK açar.
`arac/denetle.py`'yi okudum (satır 645-671): Değişmez 1/1b yalnız
`kur:` ve `bit:` alanlarını sınır kabul ediyor; `kasitli_bosluk:` alanı
kodda HİÇ okunmuyor — yalnız yorum satırlarında insan için açıklama.
(`kasitli_bosluk` ayrıca yalnız `kur:` ÖNCESİ boşluklar için tasarlanmış,
bir kaydın ortasındaki boşluk için değil.) ⇒ Düz kısaltma **Değişmez
1b'yi 6 yeni ihlalle bozar** — bugünkü tablo "iç boşluk: 0" diyor.

### ÖNERİ (uygulamadım, karar koordinatörün)

Boşluğu kapatacak üçüncü bir kimlik gerekiyor — CLAUDE.md'nin kendi
emsali `abdulkadir` kaydı (Osmanlı da değil, henüz Fransa da değil bir
ara dönem için AYRI devlet kaydı açılmıştı). Bu altı nokta için de
benzer bir "Sahra vahaları özerk idaresi" devlet kaydı (devletler.js'e)
+ altı noktanın `s:` dizisine 1830-07-05→fetih parçası eklenmesi en
temiz çözüm. Bunu ben açmadım çünkü (a) TDV/akademik kaynakla
doğrulanmış yeni bir künye gerektiriyor — bu KALEM 1'in "ölç, uygulama"
sınırının ötesinde, (b) `yerlesimler*.js` benim yazamayacağım dosyalar.

### 🔴 EK BULGU — AYNI KÖK HATA, GÖREVDEKİ 6'DAN FAZLA (bekletmeden bildiriyorum)

Aynı taramada `v:`'nin 1830-07-05'ten sonra devam ettiği başka etiketler
de bulundu — ikisi de kendi metninde Osmanlı'ya tâbi OLMADIĞINI söylüyor
ama yine `v:` (Osmanlı tâbi) içinde kodlanmış:

```
"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"   11 nokta   1830-07-05 → 1832-11-22
"Kabiliye'nin fiilî özerkliği"                        2 nokta   1830-07-05 → 1857-07-11
```
İlkinin metni zaten "ocaklık lağvedildi" (ocaklık kaldırıldı) diyor —
yani yazan kişi de bunun gerçek değil bir İDDİA olduğunu biliyordu.
İkincisi "fiilî özerklik" (gerçekte özerk) diyor. İkisi de görevdeki
"Sahra vahaları" grubuyla BİREBİR aynı mantık hatasını taşıyor.

⇒ **Toplam etkilenen nokta 6 değil, 6+11+2 = 19.**

Ayrıca "Ahmed Bey'in Konstantin beyliği (Osmanlı adına)" etiketli 16
nokta VAR ama bunlar muhtemelen FARKLI/savunulabilir — "Osmanlı adına"
ifadesi gerçek bir nominal bağlılığı işaret ediyor (CLAUDE.md'nin kabul
ettiği voyvodalık/tâbi tipi istisnalarla aynı sınıf olabilir). Bunu
derinlemesine araştırmadım, yalnız gözlemledim; ayrı bir soru.

**Karar koordinatörün:** KALEM 1'i görevde tarif edilen 6 noktayla mı
sınırlı tutayım, yoksa 19 noktalık tam kümeyi mi ölçüp raporlayayım?
Şu ana kadarki ölçüm 19'un tamamını kapsıyor (etiket + tarih), yalnız
"öneri" bölümünü 6'ya yazdım.

### 🟢 KOORDİNATÖR KARARI — 19'un tamamı için öneri, 16'ya dokunma, hiçbiri uygulanmaz

Karar: 19'luk küme (6 Sahra + 11 "hükümranlık iddiası" + 2 Kabiliye) için
öneri genişletildi; 16'lık "Ahmed Bey" grubu için **ölçmedim** —
savunulabilir olabilir, ayrı kalem, bugünün cephanesi buna yetmiyor.

**GÜNCEL ÖNERİ — 19 nokta için, iki alt gruba ayrılarak:**

```
GRUP A — 6 nokta, "Sahra vahalarının özerk idaresi"
  Ağvât, Gardâye, Cilfe, Vargla, el-Vâdî, Tuggurt
  Koordinatörün uyarısı doğru: `abdulkadir` buraya UYMAZ — Abdülkādir'in
  hâkimiyeti iç Cezayir'dir, Sahra vahaları (Vargla/Tuggurt/Gardâye) onun
  toprağı değildi. ⇒ Doğru çözüm muhtemelen (a) YENİ bir kimlik değil,
  (b) "devletsiz" olarak işaretlenmeleri — yani `kasitli_bosluk`/`bos:`
  mekanizmasının MAKİNE OKUNUR hâle getirilmesini bekleyen bir YAPI işi.
  Bu 6 nokta için üçüncü bir devlet kaydı YAZILMAMALI.

GRUP B — 11 nokta, "Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"
  (Mesîle, Bû Sa'âde ve 9 diğeri — 1830-07-05 → 1832-11-22)
  Etiketin kendisi "iddia" diyor — bu da GRUP A ile aynı mantık: gerçek
  bir Osmanlı otoritesi yok, (b) devletsiz işaretlemesi bekliyor.
  ⚠️ Farkla: bu 11 noktanın çoğu 1832-11-22'de `abdulkadir`e GEÇİYOR
  (Mesîle, Bû Sa'âde örnekleri gibi) — yani buradaki boşluk yalnızca
  1830-07-05→1832-11-22 arası (2 yıl 4 ay), Sahra grubundan kısa.

GRUP C — 2 nokta, "Kabiliye'nin fiilî özerkliği" (1830-07-05 → 1857-07-11)
  En uzun boşluk (27 yıl). Kabiliye (Kabylia) tarihsel olarak Osmanlı
  döneminde bile gevşek/nominal bağlıydı; TDV `cezayir` maddesi "Kabiliye
  ... 1853, 1854 ve 1857'deki seferler" diyor — yani gerçekten Fransa'nın
  ANCAK 1857'de tam denetime aldığı, arada bağımsız kalmış bir bölge.
  (b) devletsiz işaretlemesi burada da en dürüst seçenek.

⇒ Üçü de aynı yapısal ihtiyaca çıkıyor: **(b) `kasitli_bosluk`u makine
okunur yapmak**, tek tek yeni devlet kaydı açmak değil. Bu, KALEM 1'in
sınırını fazlasıyla aşan bir motor/veri-modeli işi — MOTOR ENKLAV veya
Emre'nin kendisi karar vermeli.

GRUP D — 16 nokta, "Ahmed Bey'in Konstantin beyliği (Osmanlı adına)"
  ÖLÇMEDİM. "Osmanlı adına" ifadesi CLAUDE.md'nin kabul ettiği nominal
  tâbilik istisnalarına benziyor ama doğrulanmadı. Ayrı kalem, ayrı
  kaynak turu gerektirir.
```

---

## KALEM 2 — Yuvarlak tarihler — ÖLÇÜLDÜ (3/3 sonuçlandı)

Kaynak kuralı: önce TDV, yoksa akademik/güvenilir kaynak; forum/blog/tabloid
KULLANILMADI (birkaçı denendi, elendi — aşağıda not edildi).

### ① 1556 — Astarhan Hanlığı → Rusya — 🔴 BULUNAMADI, 1556-01-01 KALIR

`devletler.js:2132` (`astarhan`) ve düzinelerce `yerlesimler*.js` noktası
`t:"1556-01-01"` kullanıyor (Rusya'nın ilhakı).
- TDV `astarhan-hanligi` ve `ejderhan-hanligi` madde gövdeleri okundu:
  yalnız "IV. İvan, Kazan'ı 1552'de yıktıktan sonra ... sonra da hanlığı
  işgal etmiştir" diyor — gün YOK, hatta ay bile yok.
  (kaynak: TDV, madde: astarhan-hanligi)
- Akademik/standart kaynak (Wikipedia "Russian conquest of the Astrakhan
  Khanate", "Astrakhan Khanate") da gün vermiyor — yalnız "1556 baharı"
  diyor.
- Tek "kesin gün" iddiası (25 Eylül 1556) bir haber-tipi siteden
  (`news-pravda.com`) geldi — Emre'nin kırmızı çizgisine göre
  KULLANILAMAZ (kaynaksız/güvenilmez, akademik değil), üstelik başka bir
  düşük kaliteli sitede "2 Temmuz 1556" diye ÇELİŞEN bir iddia da var —
  ikisi birbirini doğrulamıyor.
⇒ **Sonuç: bulunamadı.** `1556-01-01` doğru kalmalı, uydurma gün yazılmaz.

### ② 1897 — Kaffa Krallığı → Habeşistan — 🟢 BULUNDU VE UYGULANDI (koordinatör)

`data/yerlesimler_afrika.js:992` (Bonga/Kaffa noktası) `t:"1897-01-01"`
kullanıyor, AMA aynı olayın devlet kaydı zaten proje içinde tam günle
duruyor: `devletler.js:1613,1618` (`kaffa-kralligi`) —
`t:"1897-09-10", b:"Ras Wolde Giyorgis komutasındaki Habeş ordusu son
kral Gaki Şeroço'yu esir aldı"` (kaynak: standart akademik, künyede
zaten kayıtlı). Yani gerçek gün ARANMADI, proje kendi içinde zaten
BULUNMUŞTU — yalnız yerleşim noktasına hiç işlenmemiş.
⇒ **Öneri (uygulanmadı, `yerlesimler_afrika.js` benim değil):**
`{f:"1281-01-01",t:"1897-01-01",d:"kaffa"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}`
→ iki `"1897-01-01"`nin ikisi de `"1897-09-10"` olmalı.

⚠️ **Karıştırılmamalı:** `sidamo-kralliklari` (devletler.js:1631, aynı
1897-01-01) VE bazı Somali/Ogaden noktaları da 1897 kullanıyor ama bunlar
AYRI kayıtlar, kendi `kaynak:` alanı zaten "kesinlik düşük" diyor — bunlar
için gerçek gün ARAMADIM, Kaffa'dan farklı bir araştırma gerektirir.

🟢 **Koordinatör uyguladı** (`yerlesimler_afrika.js` kendi dosyası):
Bonga `1897-01-01 → 1897-09-10`. Denetim sonucu (koordinatör koştu):
`Değişmez 2s: 715 kırılma · 60 AÇIK (tavan 121) — yeni ihlal YOK`,
`Değişmez 1: 2308 · 180 sahipsiz (beklenen 180)`, `iç boşluk: 0`. Temiz.

### ③ 1889 — Habeşistan → İtalya (Eritre sınırı) — 🔴 BEKLET, UYGULANMIYOR (koordinatör kararı)

`data/yerlesimler_afrika.js:695`, `yerlesimler.js:937`,
`yerlesimler_h2_afrika.js` (10 nokta) `t:"1889-01-01"` kullanıyor
(Habeşistan'dan İtalya'ya geçiş — Eritre kıyı/yayla noktaları).

Uçiali (Wuchale) Antlaşması, **2 Mayıs 1889**, İtalya'ya tam bu bölgeleri
(Bogos, Hamasien, Akkele Guzay — bugünkü Eritre'nin çekirdeği) devretti.
(kaynak: Britannica, "Treaty of Wichale" maddesi — TDV'de müstakil madde
bulunamadı). Önerim `t:"1889-01-01"` → `"1889-05-02"` idi, **orta güven**
diyordum çünkü her noktanın antlaşmanın kapsadığı üç bölgede olup
olmadığını tek tek doğrulamamıştım.

🔴 **Koordinatör BEKLET dedi, üç sebep + benim görmediğim dördüncü bir
şüphe ekledi:**
```
① orta güven — antlaşma bölgesi doğrulanmadı
② 10-11 noktayı birden etkiliyor — yanlışsa on bir hayalet
③ devletler.js:1581 aynı olayı BAŞKA tarihle taşıyordu (1889-03-02)
④ 🔴 YENİ: Uçiali antlaşması 2 Mayıs 1889'dur AMA İtalyan Eritre
   sömürgesinin RESMÎ İLANI 1 Ocak 1890'dır. Veride duran "1889-01-01"
   bir yuvarlama değil, 1890-01-01'i işaret eden bir KAYMA olabilir.
   Üç aday var — antlaşma günü (1889-05-02) · fiilî işgal günü ·
   sömürgenin resmî ilanı (1890-01-01) — ve hangisinin gerçek "toprak
   el değiştirdi" günü sayılması gerektiği HİÇ ÖLÇÜLMEDİ.
```
⇒ **Sonuç: `1889-01-01` DEĞİŞTİRİLMEDİ.** Üç aday tarih arasından hangisi
doğru olduğu ayrı bir araştırma kalemi — bugünün cephanesi (%92 dolu)
buna yetmiyor, koordinatör bilerek ertelendi.

🟢 **`devletler.js:1581` — koordinatör "yetkin var, düzelt ama YAZIM
HATASI gibi sessizce düzeltme" dedi, UYGULADIM:**
`t:"1889-03-02"` → `"1889-05-02"` (antlaşmanın kendi imza günü — bu
alt-gerçek ④'teki geniş belirsizlikten BAĞIMSIZ, iyi kaynaklı ve kesin).
Metin de değiştirildi: "Menelik tahta çıktı" iddiası çıkarıldı (ayrı,
kendi başına ölçülmemiş bir olay — IV. Yohannes'in 9 Mart 1889'daki
ölümüyle başlayan süreç) ve ④'teki üç-aday belirsizliği açıkça not
düşüldü, sessiz bırakılmadı. `node -e eval` ile syntax doğrulandı
(392 devlet kaydı, temiz parse). **Bu satır benim yazma yetkim
dahilindeydi (KALEM 1 değil ama koordinatör bu görev için özellikle
izin verdi) ve commit BEKLİYOR** — `oturumlar/` dışına yazdığım için
kendim commit edemem.

⚠️ **Ayrıca not:** `1889-01-01` iki BAŞKA, tamamen alakasız olayda da
kullanılıyor — `luba` (devletler.js:3262, Kongo/Katanga, "iç bölünme ile
dağıldı" — muhtemelen GERÇEKTEN kademeli bir süreç, tek gün olmayabilir,
araştırmadım) ve `yerlesimler_gdasya.js:104` (Malay Sultanlıkları →
İngiliz Malaya — coğrafi olarak alakasız, araştırmadım). Bunlara
dokunmadım.

---

## KALEM 3 — Anlatım boşluğu (5 madde metni) — TAMAMLANDI, 3/5 DÜZENLENDİ

Beş maddenin ikisi zaten mükemmel yazılmıştı, üçüne netleştirici cümle
eklendi. Yalnız `d:` (anlatım) alanına dokunuldu; `t:`, `gun:`,
`statu_dogrudan:`, `kaynak:` hiçbiri değişmedi. Syntax `node -e eval`
ile doğrulandı (`data/olaylar_ek5.js` temiz parse ediyor, 420 madde).

| madde | dosya | durum |
|---|---|---|
| Hotin 1713-06-24 | `data/olaylar_ek10.js:297-303` | ✅ zaten mükemmeldi, DOKUNULMADI — kendi metni zaten "bir çizim hatası değildir" diyor ve Bucak/Akkirman'a çapraz referans veriyor |
| Akkirman 1484-08-04 | `data/olaylar_ek10.js:147-154` | ✅ zaten mükemmeldi, DOKUNULMADI — "Haritada arada boş bir bölge yoktur" cümlesi zaten var |
| Bucak-Bender 1538-09-01 | `data/olaylar_ek5.js` | 🟢 DÜZENLENDİ — netleştirici cümle eklendi |
| Yanova 1658-08-27 | `data/olaylar_ek5.js` | 🟢 DÜZENLENDİ — netleştirici cümle eklendi |
| Varad 1660-08-27 | `data/olaylar_ek5.js` | 🟢 DÜZENLENDİ — netleştirici cümle eklendi |

Eklenen cümlelerin ortak deseni: "toprak yabancı bir devletten alınmadı,
zaten tâbi [Boğdan/Erdel] toprağıydı ve harita bunu tâbi renkte
gösteriyordu — bu olay yalnızca [bu yerin] idaresini tâbi
voyvodalık/prenslikten alıp doğrudan padişaha bağladı." Hotin'in kendi
metnindeki desenle birebir aynı dile getirildi (üç madde birbirine
çapraz referans veriyor artık: Bucak→Kili/Akkirman/Hotin, Varad→Yanova).

⚠️ **`data/olaylar_ek5.js` HENÜZ COMMIT EDİLMEDİ.** `CLAUDE.md §7`
gereği yalnız `oturumlar/` altındaki kendi dosyamı commit edebiliyorum;
veri dosyası çalışma kopyasında bekliyor, Oturum 0'ın gözden geçirip
commit etmesi gerekiyor (`git diff -- data/olaylar_ek5.js`, 3 satır
değişti).

---

## ÖZET — üçü de sonuçlandı, koordinatör geri bildirimi işlendi

```
KALEM 1   19 nokta ölçüldü + öneri (koordinatör kararıyla 6'dan 19'a
          genişletildi), 16'ya (Ahmed Bey grubu) DOKUNULMADI/ölçülmedi.
          Öneri: GRUP A/B/C (19 nokta) için YENİ DEVLET KAYDI DEĞİL,
          `kasitli_bosluk` mekanizmasının makine-okunur hâle getirilmesi
          gerekiyor — MOTOR ENKLAV/Emre kararı. UYGULANMADI.
KALEM 2   3/3 sonuçlandı: 1897→1897-09-10 BULUNDU VE UYGULANDI
          (koordinatör, denetim temiz), 1889 BEKLET (koordinatör —
          antlaşma/işgal/sömürge-ilanı üç aday, ölçülmedi),
          1556 bulunamadı (kalır). devletler.js:1581 yazım hatası +
          yanlış olay birleşimi düzeltildi (koordinatör izniyle),
          commit BEKLİYOR.
KALEM 3   5/5 — 2 zaten temizdi, 3'ü düzenlendi (olaylar_ek5.js),
          commit BEKLİYOR.
```

**Commit bekleyen dosyalar (benim yetkim dışında, Oturum 0 uygulamalı):**
```
data/olaylar_ek5.js   3 satır (Bucak-Bender, Yanova, Varad metinleri)
data/devletler.js     1 satır (1581, Uçiali tarihi + not)
```
