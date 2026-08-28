# ALTI BARDAK — projenin altı boyutu, her birinin doluluk ölçümü

```
AD        ALTI BARDAK
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ŞARTNAME  bu dosya + oturumlar/ORTAK-PAKET-KURALLARI.md
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

## 0. NİÇİN VARSIN — Emre'nin kendi cümlesiyle

> *"Hangi bardaklarımız boş, hangi bardaklarımız %20 dolu, hangi
> bardaklarımız %80'de, hangisi %90'da? Önceliklendirme ile hangi işlere
> öncelik sağlamamız lazım?"*

Ve altı bardağı da kendisi saydı:
```
① 1281-1923 arası TÜM DÜNYANIN kronolojik tarihi
② TÜM DÜNYANIN coğrafî/topoğrafik verisi
③ TÜM DÜNYANIN yerleşim yerleri — zaman çizelgesiyle dinamik gösterim
④ ŞEHİRLERİN BÖLGELERİ, ve bölgelerin topoğrafyaya yaslanmış hâli
⑤ DEVLET kronolojik tarihleri + haritada siyasî yayılımları
⑥ KRONOLOJİ MADDELERİ ve madde içerikleri
```

🔴 **Bu bir rapor işi değil, bir ÖLÇÜM işi.** Projede "şu kadar var" diyen
belgeler zaten var ve **bayatlıyorlar** — `CLAUDE.md §1.5` bir tabloyu
elle yazmaktan çıkarmak zorunda kalmış, çünkü altı sayı birden bayatlamış
ve üç oturum yanlış zeminden başlamış. Senin işin **bugün ölçmek.**

---

## 1. HER BARDAK İÇİN ÜÇ SAYI — ve üçü de ÖLÇÜLECEK

```
DOLULUK   bugün yüzde kaç?     ← ÖLÇ, tahmin etme
HEDEF     kaç olmalı?          ← projenin amacına göre; yakınlığa duyarlı
FAYDA     dolunca NE AÇILIR?   ← kaç işi bloke ediyor
```

⚠️ **Yüzdenin PAYDASI ne — bunu her bardak için AÇIKÇA yaz.** *"%40 dolu"*
demek, *"neyin %40'ı"* sorusu cevaplanmadan hiçbir şey söylemez. Örnek:
```
KÖTÜ   "yerleşim bardağı %60 dolu"
İYİ    "2609 nokta / hedef ~6000 (dünya kapsamı, MIMARI.md §5 yoğunluk
        ölçütüyle) = %43 · ama OSMANLI ÇEKİRDEĞİNDE %92, DÜNYADA %18"
```
🔴 **Tek sayı yerine KIRILIM ver.** Bir bardağın ortalaması, içindeki en boş
ve en dolu bölgeyi birden gizler — ve karar o kırılımdan çıkar.

---

## 2. NEREDEN ÖLÇÜLÜR — her bardak için başlangıç noktaları

Bunlar **başlangıç**, tam liste değil. Kendi ölçüm yolunu kur.

```
① KRONOLOJİ (dünya)
   py arac/durum_tablosu.py            §1.5'i ÜRETİR, elle yazılmaz
   grep -c 't:"' data/olaylar*.js      madde sayısı (⚠️ ek8/ek17/ek18 JSON
                                        biçiminde: "t": ile ara)
   🔴 ASIL SORU: maddelerin kaçı OSMANLI DIŞI? Emre "tüm dünya" diyor.
      `kapsam:"dis"` alanını say, coğrafyaya göre dök.

② TOPOĞRAFYA
   veri-kaynak/ altındaki dosyalar · kosu2_28agu.log içinde
   "nehir parçası" · "dağ sırtı" · "eğim DEM" satırları
   🔴 7 Ağustos'ta nehir 43 → 157 oldu, sebep pencere değil BEYAZ LİSTEYDİ.
      Bugün 780. Sırtlarda benzer bir süzgeç var mı — ÖLÇ.
   ⚠️ Ve bugün ölçülmüş bir kusur: "sırt" aslında dağın DIŞ HATTININ 13 km
      içeri çekilmiş hâli (`uret_petek.py` `cekirdek = g.buffer(-0.12)`),
      ZİRVE HATTI değil. Kafkasya gibi geniş sıradağda iki etek çizgisi
      veriyor. Bu bardağın kalitesi sayıyla değil BUNUNLA ölçülür.

③ YERLEŞİM
   py arac/_yer_ara.py --kutu <G> <B> <K> <D>     bölge bölge yoğunluk
   py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.GIRDI_DOSYALARI))"
   🔴 Kıta kıta ölç: Avrupa · Anadolu · İran · Hindistan · Çin · Afrika ·
      Amerika · Okyanusya. Emre "tüm dünya" diyor ve bugünkü dağılım
      ÇOK dengesiz olmalı.
   📌 Bugün ölçülmüş bir vaka: Prizren'in kutusunda SIFIR nokta vardı —
      Kosova'nın ikinci şehri, 457 yıl sancak merkezi. Bu cinsten kaç
      delik var, onu arıyoruz.

④ BÖLGE + TOPOĞRAFYAYA YASLANMA
   data/bolgeler.js (üretilmiş) · `k:` ve `m:` alanları
   🔴 `Değişmez 3` bu bardağın ta kendisi ve SAĞLANMIYOR: `m:` yanlış
      eksende (idarî/siyasî bir bağı coğrafî gruplama için kullanıyor) ve
      ZAMAN BOYUTU YOK. Zamanlı hâli `kd:[{f,t,k,m}]` TASARLANMIŞ ama
      kısmen uygulanmış.
   ⚠️ Koşu logunda: "kademe: 65 yerleşimin m: zinciri açık (beklenen 0)".
      Bu bardağın doluluğu o 65'ten çok daha derin bir soru.

⑤ DEVLETLER
   data/devletler.js künye sayısı · arac/renkler.py BOYALAR sayısı
   py arac/renk_olc.py                çakışma/yakınlık
   🔴 ÜÇ AYRI SAYI VAR ve ayrışıyorlar: künyesi olan · rengi olan ·
      VERİDE DÖNEMİ OLAN. Üçünü de say ve FARKI göster — fark, bu bardağın
      gerçek boşluğudur.

⑥ MADDE İÇERİĞİ
   Maddelerin kaçında `d:` (anlatım) var, kaçı 2-4 cümle, kaçı tek satır?
   Kaçında `kaynak:` var? Kaçında `yer_id:` var? Kaçında `kisiler:`?
   🔴 Bu bardak ①'den FARKLI: ① "kaç madde var" der, ⑥ "maddeler DOLU MU"
      der. Bir madde var olabilir ve içi boş olabilir.
```

---

## 3. ÖNCELİK — ve ölçütü Emre'nin kendisi verdi

`ONCELIK.md` okunacak (çöl seyyahı ilkesi · altı bütçe kuralı · coğrafî
halkalar · zaman sırası). **Sıralama ölçütü `HEDEF − DOLULUK` DEĞİL,
`FAYDA ÷ EMEK`.**

Hiç dokunulmamış bir bardağı %50'ye getiren emek, %90'daki bir bardağı
%92'ye getirenden **yüz kat** değerli. Ve bir darboğazı açan küçük iş,
hepsinden değerli.

Üç öncelik kuralı, sırayla:
```
① DARBOĞAZ ÖNCE      küçük ama çok şeyi açan iş, büyük ama yalnız kendini
                     bitiren işten önce gelir
② TEKRAR EDEN ŞİKÂYET  Emre'nin ikinci kez söylediği şey, ilk seferinde
                     ÇÖZÜLMEMİŞ demektir — yeni işlerden ÖNCE gelir
③ YAKINLIK           çekirdeğe yakın olan keskinliği hak eder; uzak olan
                     %80'de bırakılır
```

⚠️ **Ve kapsam disiplinini çiğneme:** `CLAUDE.md §1.6` — *"şu anda konumuz
DEVLETLER ve SINIRLARIDIR."* 8. boyut (askerî yapı · sosyal yapı · bilim ·
kültür · felsefe · din) **kasten kapalı.** Bir bardağı "boş" diye
işaretlerken o boyuta girmediğinden emin ol.

---

## 4. 🔴 ÜÇ TUZAK — üçü de bu projede ölçülmüş

```
① BAYAT BELGE      "şu kadar var" diyen her satırı ÖLÇEREK doğrula.
                   §1.5 iki kez bayatladı, ikisinde de oturumları yanılttı.
② KABA SAYIM       `grep -c` bir şartnameye girecekse YETMEZ. Veriyi kendi
                   dilinde ayrıştır (JS → node · Python → import) ya da var
                   olan üreteci çağır. Dün koordinatörün DÖRT sayısı çürüdü.
③ ÖLÇÜM ≠ ÇIKARIM  Rapora "ölçtüğüm şu" ve "bundan çıkardığım şu" diye İKİ
                   AYRI SATIR yaz. Dün altı vakada sayı doğruydu, ÇIKARIM
                   yanlıştı — ve beşini denetim değil başka oturum yakaladı.
```

---

## 5. TESLİM

```
denetim/BULGU-ALTI-BARDAK.md
```
İçinde **tek bir tablo** olacak ve o tablo Emre'nin sorusunu doğrudan
cevaplayacak:

| # | bardak | doluluk | paydası ne | hedef | darboğaz mı | sıradaki iş |
|---|---|---|---|---|---|---|
| ① | dünya kronolojisi | %N | … | … | … | … |

Ve altında **her bardak için bir paragraf**: neyi ölçtün, neyi
bulamadın, en boş yeri neresi.

🔴 **BİR ŞEY ÖLÇEMEDİYSEN `ölçemedim` DİYE YAZ.** *"Ölçülemedi"* asla
*"temiz"* ya da *"dolu"* diye raporlanmaz — bu projede ayrı bir kova
gerektirdiği ölçülmüş bir kusur sınıfı.

## 6. DOSYA SAHİPLİĞİ

```
🟢 SENİN   denetim/BULGU-ALTI-BARDAK.md
🔴 DEĞİL   HİÇBİR ŞEY. Sen ÖLÇERSİN, yazmazsın.
           data/* · arac/* · js/* · index.html · kök *.md — hepsi başkasında.
```

🔒 **KOŞU KOŞUYOR** (`kosu2_28agu.log`, 17:52 başladı). `arac/*.py`ye
DOKUNMA — koşuyu öldürür. Zaten yazma işin yok.

## 7. HABERLEŞME

```bash
py arac/tahta_bekci.py --kim "ALTI BARDAK" --ara 60      # İLK İŞ
py arac/tahta.py yaz --kim "ALTI BARDAK" --kime "KOORDINATOR" --mesaj-dosya <yol>
```
Bardak bardak bildir — altısını bitirmeyi bekleme. Her bardak bittiğinde
tek mesaj: **ölçtüğüm · bulamadığım · çıkardığım.**
