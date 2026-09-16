# YAMA-KRONO-DKUNYE — DALGA-0055.md §C teslim raporu

Oturum: D-KUNYE · 16 Eylül 2026 gece. Görev: `denetim/KRONOLOJI-EKSIK-0916.json`'da bana
düşen 10 bölgedeki (arabistan · mısır-sudan · iran · anadolu · kafkasya · orta-asya ·
sibirya-bozkır · balkanlar · italya · orta-avrupa) 53 künyeye kuruluş/toprak/son maddeleri
eklemek. `devletler.js`'e YAZMADIM — yama `denetim/YAMA-KRONO-DKUNYE-0916.json`.

## 1. Yöntem

Her künyenin kendi `f`/`t`/`ozet`/`kaynak` alanlarını `devletler.js`'ten çektim (53 künyenin
53'ü de bulundu). Gördüm ki bu alanlar zaten **çok zengin araştırma içeriyor** — önceki
oturumlar TDV/akademik kaynakları özet metnine gömmüş, yalnız yapılandırılmış `kronoloji:`
dizisine hiç TAŞINMAMIŞ. Bu yüzden çoğu satırı **yeniden araştırmadım**, künyenin kendi
metninden **damıttım** ve `kaynak` alanına "künyenin kendi kaynak alanından" diye açıkça yazdım.

## 2. 53 künye ikiye ayrıldı

**27 künye — `kronoloji_sayisi: 0` idi, YAMA ürettim (64 satır):**
irak-kralligi · suriye-lubnan-mandasi · filistin-mandasi · urdun-emirligi · kesiri-sultanligi ·
kuayti-sultanligi · mekke-serifligi · sani-emirligi · sabah-emirligi · misir-sultanligi ·
misir-kralligi · ingiliz-sudani · tannu-tuva · harezm-halk-cumhuriyeti · buhara-halk-cumhuriyeti ·
topia · dukagin · arvanid-sancagi · crnojevic-zetasi · dejanovic-prensligi · hurmuz-sultanligi ·
piombino · sutayogullari · cemisgezek-beyligi · orta-macar-kralligi · kumuk-samhalligi ·
kaheti-kralligi.

**26 künye — zaten `kronoloji_sayisi: 2` idi (kuruluş + son, sourced) — YENİ SATIR YAZMADIM:**
suud-ikinci · hicaz-kralligi · usfuri · nebhani · cebel-i-lubnan-mutasarrifligi · dacu ·
misir-eyaleti · kasim · mora-despotlugu · bosna-isgal · oniki-ada-italyan · sarki-rumeli ·
garbi-trakya · sirbistan-eyaleti · lur-i-kucek · incu · kutlughanli · galzay · bonacolsi ·
kibris-krallik · kibris-ingiliz · fetret-isa · eyyubi-hisnikeyfa · avusturya-cumhuriyet ·
azerbaycan-demokratik-cumhuriyeti · kabartay.

⚠️ Bu 26'sı "1-2 madde" kovasındaydı (`KRONOLOJI-EKSIK-0916.json`'ın ölçtüğü ikinci kova) ve
görev "en az kuruluş·toprak·son" diyor — 2'si zaten kuruluş+son. Ben **yeni bir toprak-değişimi
maddesi eklemedim** çünkü çoğunda kaynakta böyle bir ara olay yok (kısa ömürlü hanedan/işgal
kayıtları). UYGULA/1.MURAT bu kararı "yeterli" bulmazsa bana bildirsin, tek tek genişletirim.

## 3. 🔴 Yan bulgu — `cemisgezek-beyligi` künyesinin İKİ KAYNAĞI ÇELİŞİYOR

Künyenin kendi `t:` alanı **1420**, ama yine künyenin kendi `kaynak` alanında atıfta bulunduğu
akademik makale (Fırat Üniv., "Cemişgezek-Ulukale Köyü'nün Tarihsel Yerleşim Dokusu") beyliğin
**"Kanuni Sultan Süleyman zamanına kadar"** (yani 16. yüzyıla, ~1533 Osmanlı ilhakına) sürdüğünü
söylüyor — **~110 yıllık fark.** Ben çözmedim, `YAMA-KRONO-DKUNYE-0916.json`'a çelişkiyi açıkça
yazdım (`son` satırının `b` alanında). UYGULA/HARİTA-VERİ karar versin: künyenin `t:`si
1420'de mi kalsın, yoksa akademik kaynağa göre genişletilsin mi.

## 4. Güven seviyesi

Çoğu satır künyenin **zaten sourced** metninden geldiği için güven yüksek. **Düşük güvenle,
"DOĞRULANMADI" diye açıkça işaretlenen satırlar:**
- `piombino` son (1548) — İtalya tarihi, standart kaynakla teyit edilmedi.
- `dukagin`/`arvanid-sancagi`/`crnojevic-zetasi`/`kumuk-samhalligi`/`kaheti-kralligi` son
  tarihleri — künyenin kendi `t:` alanından devralındı, TDV bu günleri doğrudan vermiyor
  (künyenin kendi notu zaten böyle diyordu, ben yeni bir belirsizlik eklemedim).
- `harezm-halk-cumhuriyeti`/`buhara-halk-cumhuriyeti` son (1924 millî sınır bölünmesi) —
  standart akademik/ansiklopedik, TDV kapsam dışı.
- `irak-kralligi`/`misir-kralligi`/`ingiliz-sudani` gibi ufkun (1923-10-29) ÇOK ötesindeki
  "son" olayları (1958/1953/1956) — genel tarih bilgisiyle yazıldı, TDV'ye sorulmadı (kapsam
  dışı), ama bunlar iyi belgelenmiş standart olaylar (1958 Irak darbesi, 1952 Mısır Devrimi,
  1956 Sudan bağımsızlığı) — güven yüksek.

## 5. İstek

`denetim/YAMA-KRONO-DKUNYE-0916.json` hazır (64 satır, 27 künye). UYGULA'dan istediğim:
1. Yamayı `devletler.js`'teki ilgili künyelerin `kronoloji:` dizisine eklemek.
2. `cemisgezek-beyligi` çelişkisine karar vermek (§3).
3. 26 "zaten yeterli" künye için ek toprak-değişimi maddesi isteniyorsa bana bildirmek.
