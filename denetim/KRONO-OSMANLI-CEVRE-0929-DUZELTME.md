# KRONO-OSMANLI-CEVRE-0929 — MEVCUT MADDELERDEKİ KUSURLAR ve BAŞLIK ÖNERİLERİ

> 29 Eylül 2026 · hiçbir mevcut dosyaya dokunulmadı. Sahipler: `olaylar*.js` →
> çekirdek (koordinatör) · `kronoloji_anadolu.js` / `kronoloji_arabistan.js` →
> KRONO-BAGLAMA-0929.

## 0. Niçin bu dosya bu paketin ASIL çıktısı

Defterin `PAKETSIZ:anadolu/arabistan` açıklarının **yarıdan fazlası maddesiz değil**:
olay AYNI GÜNDE çekirdekte ya da kuyrukta YAZILI, ama başlık kırılan yerleşimi
ya da tarafın künye adını anmadığı için `denetle.py` 2s ALÂKA ŞARTI
(`_2s_yeri_aniyor` / `_2s_tarafi_aniyor`, satır 1565-1603) onu eşleştirmiyor.
Taraf kolu künye ADININ tamamını ya da ≥4 harfli İLK KELİMESİNİ kelime sınırıyla
arar: "Germiyan'ın" ≠ "Germiyanoğulları", "Reşîdîler" ≠ "Şammar".
⇒ Yeni madde yazmak MÜKERRER olurdu (ORTAK §5.1). Doğru çare **başlığı
düzeltmek** — ve çekirdekteki (Değişmez 2 evrenindeki) maddeler için bu, 2s
AÇIK sayısını gerçekten düşürür; benim `kronoloji_cok_*` maddelerim düşürmez
(o evrende değiller).

## A. OLGU HATASI

**O1 · `data/olaylar_ek.js` 1381-06-01 "Hamîd ilinin satın alınışı: Isparta'nın katılışı"**
- TDV `hamidogullari`: *"783'te (1381-82) … Akşehir, Beyşehir, Seydişehir, Yalvaç ve Karaağaç beldeleri 80.000 altın karşılığında Osmanlılar'a satıldı"*. Isparta listede YOK; Isparta, Eğirdir, Burdur ve Uluborlu 1390-1391 Yıldırım seferiyle geçti (harita da Isparta'yı 1391'de çeviriyor — harita doğru, başlık yanlış).
- Öneri: b → "Hamîdoğulları'ndan Akşehir, Beyşehir, Seydişehir, Yalvaç ve Karaağaç'ın satın alınışı". Bu aynı zamanda İshaklı'yı (Akşehir yakını) değil ama tarafı (Hamîdoğulları) anarak kırılmayı kapatır. Kesinlik: yüksek.

**O2 · `data/kronoloji_arabistan.js` 1818-01-01 "İbrâhim Paşa'nın Vehhâbî seferinin ardından emirlik geçici olarak yeniden kuruldu" (Benî Hâlid)**
- Madde, anlattığı seferin sonucu olan Dir'iye'nin düşüşünden (1818-09-09, `olaylar_ek4.js`) ÖNCE sıralanıyor. TDV `katif`: *"İbrâhim Paşa, 1818'de Hicaz'da emniyeti sağladıktan sonra bütün Bahreyn bölgesine hâkim oldu ve idaresini Benî Hâlid emîrlerine bıraktı"* — YIL. Harita 1818-09-09.
- Öneri: t:"1818-09-09" + gun:"1818 (TDV katif yıl verir); gün komşudan: Dir'iye'nin düşüşü — EN ERKEN sınır". Kesinlik: orta.

**O3 · Lahsâ'nın Suûdîlere geçişi — üç tarih**
- `kronoloji_arabistan.js` 1795-01-01 "Abdülazîz b. Suûd, Lahsa'yı alıp emirliği ilk kez tasfiye etti" · harita 1795-04-01 (Katîf, Cübeyl, Ukayr) · TDV `necid`: *"1792'de Lahsâ'yı alan Vehhâbîler'in"* · TDV `katif`: *"1792 yılında Suûdî ailesinden Suûd b. …"* (cümle kesik). ⇒ TDV iki maddede 1792; atlas 1795. 1792 ilk giriş, 1795 kesin tasfiye olabilir — ölçülemedi. Hüküm istiyorum.

**O4 · `yemen-zeydi` künyesi f:"897-01-01" (4 haneye doldurulmamış)** — KUNYE.md §2. Dizgi karşılaştırmasında bağlanan her madde "pencere dışı" görünür (ölçüldü).

## B. BAŞLIK ÖNERİSİ — olay yazılı, kırılmayı anmıyor (mükerrer yazılmadı)

| # | Dosya · t | Mevcut b | Açık kalan | Önerilen b (kaynaklı) |
|---|---|---|---|---|
| B1 | `olaylar_ek.js` 1392-11-01 | "Kastamonu'nun ilhakı" | candar→OSMANLI: Akçakoca, Devrek, Eflani, Karadeniz Ereğli | "Candaroğulları'nın Kastamonu şubesinin ilhakı" (TDV `candarogullari`: *"Candaroğulları Beyliği'nin Kastamonu şubesi Osmanlı Devleti topraklarına katılmış oldu (1392)"*) — ⚠️ o dört kıyı yerleşiminin Kastamonu şubesine ait olduğu ÖLÇÜLEMEDİ |
| B2 | `olaylar_ek5.js` 1393-06-01 | "Amasya'nın Osmanlı topraklarına katılması" | burhaneddin→OSMANLI: Ladik, Merzifon, Osmancık, Tokat, Çorum | başlığa "Kadı Burhâneddin" eklenmeli (künye adı "Kadı Burhâneddin Devleti (Sivas)") — kaynak cümlesi bu turda çekilmedi, ölçülemedi |
| B3 | `olaylar_ek.js` 1429-01-01 | "Germiyan'ın vasiyetle ilhakı" | germiyan→OSMANLI: Denizli | "Germiyanoğulları'nın vasiyetle ilhakı" — yalnız ek; kaynak mevcut maddeninki |
| B4 | `olaylar_ek.js` 1461-06-01 | "Amasra ve Sinop'un katılışı" | candar→OSMANLI (8 yer) | "… Candaroğulları'nın sonu" eki. ⚠️ Ama Bolu için kırılmanın kendisi yanlış (YERLESIM-ONERI Ö4) |
| B5 | `kronoloji_anadolu.js` 1402-07-28 (iki madde: Karaman ve Aydın) | "Ankara Savaşı sonrası Timur, Alâeddin'in oğullarına toprakları geri verdi" · "Ankara Savaşı sonrası Timur'un toprakları iadesi, yeniden kuruluş" | Osmanlı→karaman (Akşehir, Seydişehir, İshaklı) · Osmanlı→aydin (Ayasuluk, Birgi, Tire) | "Karamanoğulları'nın …" / "Aydınoğulları'nın …" — BAGLAMA `devlet:` eklerken başlıklara künye adı da girmeli |
| B6 | `olaylar_ek4.js` 1815-01-20 | "Bisel Muharebesi: Suûdî kuvvetleri bozguna uğradı" | suud-birinci→__BOSLUK__ Hurma, harita günü 1815-01-13 | harita günü ile madde günü 7 gün farklı; hangisi kaynaklı — ölçülemedi. Hurma'nın adı başlıkta yok |
| B7 | `olaylar_ek5.js` 1824-06-01 | "İkinci Suûdî Devleti'nin Riyad'da kurulması" | →suud-ikinci: Harc, Havta, Leylâ | "II. Suûdî Devleti" (künye adının ilk kelimesi "ii." 3 harf — taraf kolu SAYMIYOR; tam ad "II. Suûdî Devleti (Necid Emirliği)" geçmeli) |
| B8 | `olaylar_ek7.js` 1902-01-15 | "Abdülazîz b. Suûd'un Riyad'ı Reşîdîler'den geri alması" | sammar→suud-ucuncu (8 yer) | "… Riyad'ı Şammar (Reşîdî) Emirliği'nden geri alması" — ⚠️ Kasîm yerleşimleri için kırılmanın günü şüpheli (Ö9) |
| B9 | `olaylar_ek6.js` 1916-07-27 | "Yenbu'nun Şerif Hüseyin kuvvetlerine kaybı" | OSMANLI→hicaz: Bedir | Bedir'in aynı gün düştüğü TDV `yenbu`/`bedir`de YOK — ölçülemedi |
| B10 | `kronoloji_arabistan.js` 1918-10-30 | "Mondros sonrası Osmanlı çekildi — imamet tam bağımsızlığını kazandı" | OSMANLI→yemen (8) | "… Yemen imameti …" — künye adı "Yemen Zeydî İmamlığı", ilk kelime "yemen" başlıkta yok |
| B11 | `kronoloji_arabistan.js` 1635-10-22 | "Osmanlı çekilişi tamamlandı — imamet bağımsızlığını kazandı" | tâbi→kesiri-sultanligi: Seyûn | "Kesîrî" adı yok; ekleme ya da ayrı madde hükmü koordinatörün |

## C. ÇEKİRDEK / TDV ÇELİŞKİSİ — hüküm gerekir
- **Maan** — TDV `maan` Arap kuvvetlerinin Maan'ı *"1916 yazında"* ele geçirdiğini yazıyor; harita 1918-09-27. TDV cümlesi şüpheli; ikinci kaynak gerekli (YERLESIM-ONERI Ö10).
- **Mekke/Medine'nin Vehhâbî işgali** — TDV `suudiler`: *"1806'da Mekke ve Medine'yi ele geçirmelerine engel olunamadı"*; harita Bedir ve Yenbu'yu 1805-07-20'de `suud`a çeviriyor. Gün ölçülemedi, yıl bir fark.
