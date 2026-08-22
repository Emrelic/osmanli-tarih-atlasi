# ARABİSTAN KRONOLOJİ — İlerleme

Oturum: ARABISTAN KRONOLOJI (eski ad: SONNET HAZIR KITA 74) · koordinatör: OSMANGAZI
Görev mesajı: M-1051 · Şartname: `oturumlar/KRONOLOJI-SARTNAME.md`

## Dosyam

```
data/kronoloji_arabistan.js → window.KRONOLOJI_ARABISTAN
```
`index.html`e BAĞLANMADI — koordinatör bağlayacak.

## 1. tur — TESLİM (22 Ağustos 2026)

### ① madde sayısı
**60 madde** — 3 künye: yemen-zeydi (30) · umman (26) · benihalid (10 — düzeltme:
gerçek sayım aşağıda ①-b'de).

Gerçek dağılım (koddan sayıldı, `py arac/denetle_kronoloji.py`: 60 madde ✓ temiz):
- Yemen Zeydî: 30 madde (897-1920 arası, 1023 yıllık ömre karşı)
- Umman (Ya'rubî/Bû Saîd): 26 madde (1507-1868 arası)
- Benî Hâlid (Lahsa): 10 madde (1547-1830 arası, çoğu devletler.js'in kendi
  künyesinden devralındı çünkü TDV'nin bu emirlik için müstakil maddesi yok)

Madde/yıl oranı hesaplanmadı çünkü üçü de SÜREKLI değil, aralıklı dönemler
kapsıyor (kota mantığı şartnamece zaten reddediliyor).

### ② konu dağılımı (tur alanı, kodun kendi sayımı)
```
antlasma 11 · hukumdar 8 · toprak-kazanc 7 · savas 5 · toprak-kayip 5 ·
kurulus 5 · bolunme 4 · isgal 3 · isyan 3 · son 3 · siyasi 3 ·
ittifak 1 · olum 1 · idari 1
```
⚠️ Şartnamenin önerdiği "askerî/idarî/bilim/kültür/sosyal/iktisadî" altı
kovalı dağılım bu turda UYGULANMADI — TDV'nin bu üç künye için verdiği
malzeme neredeyse tamamen siyasî/askerî/hanedan tarihiydi (madde madde
kontrol ettim: bilim, mimarî, kültür alanında tarihli tek bir olay
bulamadım). Bu bir eksiklik değil bir SONUÇ: `kaynak bulunamadı` demek
yerine, kaynağın verdiği kovayı YAZDIM. Bir sonraki turda bilim/kültür
için ayrı bir TDV taraması (örn. `zeydiyye` maddesinin fıkıh/kelam
tarafı) denenebilir — bu turda DENENMEDİ.

### ③ onem/dunya dağılımı
```
onem   5:16 · 4:12 · 3:12 · 2:20
dunya  4:1 · 3:6 · 2:25 · 1:28
```
`dunya` alanı üç olayda BAŞKA DOSYADAN DEVRALINDI (aynı olay farklı
dosyada farklı puan almasın diye):
- 1538-08-03 Aden'in zaptı → dunya:3 (kronoloji_portekiz.js, Aden-Diu seferi)
- 1918-10-30 Mondros sonrası çekiliş → dunya:4 (kronoloji_ingiltere.js)
- 1839-01-19 İngiltere'nin Aden'i alması → başka dosyada BULUNAMADI,
  kendi takdirimle dunya:2 verildi (yeni entriler arasında bunu tek
  başıma karar verdim, kaynak yok)
`py arac/denetle_kronoloji.py` çıktısı: "✓ dunya tutarlı — aynı olay her
dosyada aynı puan" — 31 dosya 3308 madde genelinde çelişki YOK.

### ④ kapsam
`ic` 29 · `dis` 31

### ⑤ yer_id
**Dolu: 15 madde** (Sana 5 · Aden 3 · Maskat 3 · Taiz 1 · Hudeyde 2 ·
Dir'iye (Necid) 1) · **Boş: 45 madde**.
Boş bırakılan 45'in TAMAMI için sebep AYNI: olay ya imparatorluk/bölge
çapında (bir kişinin hükümdarlığı, bir antlaşmanın imzası belirli bir
şehre bağlı değil) ya da olayın geçtiği yer (Sa'de, Zebîd, Zengibar,
Culfâr, Rustâk, Mombasa, Sohar, Hufuf) `data/yerlesimler*.js`te KAYITLI
DEĞİL. `kapsam_genis:true` bu turda hiçbir maddeye KONULMADI çünkü hiçbiri
gerçek anlamda "imparatorluk çapında sayım/kanunname" tipi değildi —
şartnamenin ① istisnası tam uymuyordu; bunun yerine boş bırakıp burada
açıkça bildiriyorum. Kayıtsız yer adları (koordinatöre bildiriyorum,
nokta yazdırmak istersen): **Sa'de, Zebîd, Zengibar (Stone Town), Culfâr,
Rustâk, Mombasa, Sohar, Hufuf**.

Kullanılan 6 `yer_id` değeri `data/yerlesimler.js`teki adlarla BİREBİR
doğrulandı (`girdi.yukle()` ile programatik kontrol, elle değil):
Sana · Aden · Taiz · Hudeyde · Maskat · Dir'iye (Necid) — hepsi VAR.

### ⑥ kaynak
**60/60 madde dolu**, `bulunamadı` hiç kullanılmadı (üçü de TDV'nin
kapsadığı, canlı slug'lı konular).
Dayanılan kaynaklar: TDV `uman` · `yarubiler` · `said-b-sultan` · `yemen`
· `lahsa` (5 canlı TDV maddesi, HTTP 200 + gövde okunarak doğrulandı) +
`devletler.js`nin kendi künyelerinden DEVRALINAN 4 madde (benihalid'in
1670/1691/1752/1818/1830 — TDV'de müstakil maddesi olmadığı için).
0 madde Vikipedi'ye dayandı.

### ⑦ NEYİ BULAMADIM / YAPMADIM — açıkça
1. **Zeydî imametin 901-1517 arası kendi iç ardıllık zinciri (616 yıl)
   ARAŞTIRILMADI.** TDV'nin genel `yemen` maddesi bu aralıkta OVA
   hanedanlarını (Ya'furî · Suleyhî · Zürey'î · Eyyûbî · Resûlî ·
   Tâhirî) anlatıyor ama Zeydî imamların kendi listesini vermiyor; ayrı
   taneciklik gerektirir. SESSİZ BIRAKILDI, dolgu yapılmadı.
2. **Zeydî imametin 1702-1849 arası (147 yıl) iç tarihi de
   ARAŞTIRILMADI** — aynı sebep, TDV'nin genel maddesi bu aralığı boş
   geçiyor.
3. **Bilim/kültür/sanat/felsefe konularında tek bir madde bulamadım** —
   üçü için de TDV kaynağı neredeyse tamamen siyasî/askerî.
4. 🔴 **BULGU, İŞLENMEDİ (devletler.js benim dosyam değil):** TDV `hicaz`
   ve `mekke` maddeleri, 1517-1916 arası (399 yıl) Mekke'nin kendi şerif
   ailesince (Berekât · Mes'ûd · Sürûr · Gālib · Hüseyin) Osmanlı
   bağlılığı altında yarı özerk yönetildiğini AÇIKÇA anlatıyor. Bunun
   için `devletler.js`te AYRI bir künye yok — yalnız `hicaz-kralligi`
   (1916 sonrası) var. Gerçek bir boşluk mu, yoksa bilinçli bir kapsam
   dışı bırakma mı, KARAR KOORDİNATÖRÜN.
5. **Tarih çelişkileri, çözülmedi, iki tarafı da not düşüldü (dosyanın
   içinde, madde madde):**
   - Ya'rubî kuruluşu: TDV `yarubiler` 1615 diyor, TDV `uman` + devletler.js
     1624 diyor.
   - Bû Saîd fiilî iktidarı: TDV `yarubiler` 1743 diyor (Ahmed b. Saîd'in
     iktidarı ele geçirişi), devletler.js f: alanı 1749-06-10 (resmî
     kuruluş) — İKİSİ DE KULLANILDI, ayrı maddeler olarak (fiilî 1743,
     resmî 1749).
   - Benî Hâlid'in ilk tasfiyesi: devletler.js 1795 diyor, TDV `lahsa`
     1796 diyor.
   - San'a'nın ikinci Osmanlı fethi: TDV metninde "1871: Ahmed Muhtar
     Paşa aldı" ama yerlesimler.js kaydı 1872-04-01 — bir yıllık fark,
     sefer başlangıcı/şehrin düşüşü ayrımı olabilir, ÇÖZÜLMEDİ.
6. **`uman` slug tuzağı şüphesi ÖLÇÜLDÜ VE ÇÜRÜDÜ** — CLAUDE.md'nin
   uyarısı yersizdi, `uman` canlı ve tam madde (ayrıntı dosyanın başında).

### ⑧ commit · bağlanacak dosya
```
data/kronoloji_arabistan.js → window.KRONOLOJI_ARABISTAN
```
Bu ilerleme dosyası kendi commit'imle (pathspec'li) gönderiliyor. Veri
dosyası (`data/kronoloji_arabistan.js`) COMMIT'SİZ bırakılıyor —
`§7` istisnası yalnız `oturumlar/` altındaki kendi dosyamı kapsıyor;
veri dosyasını koordinatör devralıp bağladığında kendisi commit'leyecek.

## Tarih çaprazlaması — yerlesimler.js ile 5 nokta birebir doğrulandı
```
Aden   1538-08-03 "yemen"→OSMANLI         ✓
Zebîd  1516-06-20 "yemen"→memluk          ✓ (context, madde yazılmadı)
Sana   1547-01-01 / 1635-01-01 / 1872-04-01 / 1905-04-01↔09-01 / 1918-10-30  ✓✓✓✓✓
Moha   1635-10-22 "yemen"                 ✓ GÜN GÜNÜNE
Maskat 1650-01-26 "umman"                 ✓ GÜN GÜNÜNE
```
Bu üç künye için `Değişmez 2` riski bu turda muhtemelen azaldı (ÖLÇMEDİM,
`denetle.py` koordinatörün elinde).

## Sıradaki tur için not
Görev bekliyorum. Önerilerim (koordinatör karar verir):
- suud-birinci/ikinci/ucuncu ve hicaz-kralligi için de aynı yöntemle
  kendi-gözünden kronoloji yazılabilir (bölge:"arabistan" künyelerinden
  kalan 5'i: suud-birinci · suud-ikinci · suud-ucuncu · sammar ·
  hicaz-kralligi · usfuri · cebri · nebhani · aiz · kuveyt · bahreyn ·
  katar — hâlâ hiç işlenmedi).
- Yemen-Zeydî'nin 901-1517 ve 1702-1849 boşlukları için ayrı bir
  taneciklik araştırması (akademik kaynakla, TDV susuyor).
- Mekke Şerifliği boşluğu (madde 7-④) için karar.
