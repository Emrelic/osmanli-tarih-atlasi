# PAKET GEOMETRİ 0904 — H-0001 · H-0002 · H-0003 · H-0006 · H-0007

```
AD     : PAKET GEOMETRİ 0904
MODEL  : Opus
DİZİN  : C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
SAHİP  : denetim/BULGU-GEOMETRI-0904.md  (YALNIZ bu dosyaya yazarsın)
PAKET  : ClaudEmre/kutu/giden/parti-emrelic-0040/
         H-0001-1..9.png · H-0002-1.png · H-0003-1..3.png
         H-0006-1.png · H-0007-1.png
```

## 🔒 GEÇİLMEZ KISIT — VE BU PAKETİN ŞEKLİNİ BELİRLİYOR

```
PETEK ÜRETİMİ KOŞUYOR (10+ saat, PID 12656).
🔴 arac/uret_petek.py · renkler.py · girdi.py DONMUŞ — TEK KARAKTER
   yazmak KOŞUYU ÖLDÜRÜR (motor_izi() tam bu üçünü parmak izliyor)
🔴 data/* DONMUŞ — yazmak çıktıyı YAYINLANAMAZ kılar
🟢 SERBEST: denetim/* · oturumlar/* · arac/ altındaki ÖTEKİ dosyalar
```

🔴 **BU YÜZDEN İŞİN DÜZELTMEK DEĞİL, TEŞHİS ETMEK.** Beş maddenin beşi de
motorun geometrisine dair; motor donmuş. Senden istenen **ölçülmüş bir
teşhis raporu** ve **koşu bitince uygulanacak bir reçete**.
📌 Ve bu bir kayıp değil: bu projede en pahalı hatalar *"sebebi ölçmeden
düzeltmek"*ten çıktı. Motorun donmuş olması sana teşhis için zaman veriyor.

## EMRE'NİN SÖZLERİ — birebir

> **H-0001** (9 görsel): *"haritada böyle çizgiler oluşuyor… **8-9.
> resimlerde de birbiri ile örtüşmeyen ve arada açıklık kalan yapılar
> var. bazen harita örtüşmeyip üstüste biniyor bazen aralık kalıyor
> boşluk oluyor** bu neden oluyor bunu çözelim"*
>
> **H-0002:** *"acaba **talin şehrinin peteği denizi geçip karşı yakaya**
> mı vurmuş orayı mı boyamış — bir bu hataları çözmemiş miydik. buna ne
> sebep oluyor"*
>
> **H-0003:** *"boşluk kalan yerler bunun sebebi nedir"*
>
> **H-0006:** *"burada **canet** diye bir yerleşim var tam sınırın dibinde,
> neden **gat** şehri ile aralarındaki mesafeyi bölmemiş — djikstra
> sayesinde mi"*
>
> **H-0007:** *"**aral gölünün** kenarlarına renk örtüsünün haritanın
> oturmamasının sebebi nedir. djikstra bu kadar mı elveriyor"*

## SIRA — `FAYDA ÷ EMEK`

```
① H-0001 + H-0003   AYNI AİLE OLABİLİR (dikiş boşluğu / bindirme) — ama
                    ÖNCE ayrı mı aynı mı olduğunu ÖLÇ, varsayma
② H-0002            deniz aşırı petek — §2'nin adı konmuş vakası
③ H-0007            Aral kıyısı — göl maskesi ile petek kenarı uyuşmuyor
④ H-0006            tek nokta sorusu, en ucuzu, en son
```

## 🟢 ELİNDEKİ ÖLÇÜLMÜŞ BİLGİ — devraldığın taban, ama DOĞRULA

```
motor      çok kaynaklı Dijkstra · adım maliyeti km × sürtünme
           sürtünme DEM eğiminden (EGIM_CARPANI = 0.005)
           bu koşuda ölçülen: sürtünme ortancası 1.111 · azamî 11.75
tavan      A1 yarıçap tavanı — TAVAN_KM hepsi 200; hiçbir petek kendi
           noktasından ~200 km öteye uzanmıyor
maske      GİRDİ maskesi `veri-kaynak/ne_10m_land.geojson`
           🔴 `veri-kaynak/motor_kara.geojson` BİR GİRDİ DEĞİL ÇIKTIDIR —
              `uret_petek.py:2776` onu koşunun SONUNDA yazar
              (`unary_union(PETEK_D)` = motorun ÇİZDİĞİ kara).
              Adı yanıltıcı; bir koordinatörü zaten yanıltmış.
göl        705 göl çıkarılıyor (28 modern baraj gölü KASTEN bırakıldı)
yetim yüz  9 Ağustos ölçümü: tavan toprağı serbest bırakıyor, "yetim yüz"
           mantığı onu EN YAKIN KOMŞUYA GERİ VERİYOR — yani tavanın
           önlemek için var olduğu şeyi sonraki aşama yeniden yapıyor.
           118 yetim yüz sahipli komşulara katılmıştı.
           🔴 H-0001/H-0003 bu ailenin görünen yüzü OLABİLİR — ÖLÇ.
```

## 🔴 BU PAKETİN EN BÜYÜK TUZAĞI: ŞİKÂYET BAYATLAYABİLİR

`CLAUDE.md §11`: *"bir şikâyet, şikâyet edilen şeyden daha hızlı
bayatlar — ve ekran görüntüsü kendi tarihini taşır."*

🟢 **VE BU PAKETTE TARİHİ OKUMANIN İKİ YOLU VAR:**
```
① görselin ALT ŞERİDİ  "1281-01-01 · 0.94S–8.19N · 52.46–69.02W · z4.9"
                       → tarih, kutu VE yakınlık birebir yazılı
② kronoloji paneli     "N / TOPLAM başlık" sayısı hangi yayın olduğunu söyler
```
🔴 **İLK SORU *"bu kusur var mı"* DEĞİL, *"bu şikâyet HÂLÂ GEÇERLİ mi"*.**
Ve görseller **yayındaki** sürümden; şu an koşan üretim henüz inmedi.
Bazı kusurlar koşu bitince kendiliğinden değişebilir — **hangilerinin
değişeceğini ÖNCEDEN yaz** (öngörü), sonra koşu bitince sına.

## HER MADDE İÇİN İSTENEN — üç satır, ve ÜÇÜ DE AYRI

```
① NE ÖLÇTÜM      sayıyla, ve HANGİ ÇIKTIDAN hangi BİRİMDE
② NE ÇIKARDIM    ölçümden ayrı bir satır olarak
③ REÇETE         koşu bitince ne yapılacak — ve reçete KENDİ TESTİNİ GEÇMELİ
```
🔴 ①-② ayrımı zorunlu: bu projede bir günde ALTI kez *"ölçüm doğru,
çıkarım yanlış"* oldu ve altısını da başka bir oturum yakaladı. Tek satırda
birleşince çıkarım, ölçümün güvenilirliğini **ödünç alıyor.**
🔴 ③ için: bir reçete uygulandığında kendi testini geçmiyorsa **teşhis
doğru ama reçete kullanılamaz**dır — bunu açıkça yaz.

## H-0002 İÇİN ÖZEL UYARI — bu hata ADIYLA kayıtlı

`CLAUDE.md §2`: *"Noktası olmayan bölge, en yakın peteğe emilir ve O
PETEĞİN SAHİBİYLE boyanır."* Gerçekleşmiş vakalar: Sardinya 1533 Osmanlı
göründü (Annaba'nın peteğinden) · Kefalonya 1684'e kadar Osmanlı kaldı
(Ayamavra'dan) · Brač/Hvar/Korčula 1483'ten Osmanlı oldu (Mostar'dan).
> **Bir "harita yanlış" raporunda ilk soru budur: o bölgede yerleşim
> noktası var mı? Cevap hayırsa hata orada, kodda değil.**
⇒ Tallinn/Estonya için Fin körfezinin KARŞI yakasında nokta var mı, ÖLÇ.
Ve `§3.5.1`: **iki uç da ölçülür** — bir tarafta fazlalık düzeltilirken
öbür tarafta fazlalık doğuyor mu?

## H-0006 İÇİN — Emre'nin kendi hipotezini SINA, ONAYLAMA

*"Djikstra sayesinde mi"* bir SORU, bir teşhis değil. Canet ve Gat'ın
gerçek konumlarını, aralarındaki sürtünme profilini ve ikisinin `k:`
kademesini ölç. Ağırlık farkı da sebep olabilir: **petek büyüklüğünü
belirleyen şey noktanın kendisi değil ÇEVRESİDİR** — aynı düşük ağırlık,
İstanbul'un yanında ihmal edilebilir bir hücre verir, boşlukta koca bir
bölge, ve ikisi de doğrudur.

## GÖRSEL AÇMA DİSİPLİNİ

Pakette **15 görsel** var ve bir görsel metnine göre kabaca **otuz kat**
pahalı. Önce `PARTI.md` metnini oku; görseli **yalnız metnin yetmediği**
maddede aç. Emre H-0001'de *"8-9. resimler"* diye **adres vermiş** — onlarla
başla, dokuzunu birden açma.

## TESLİM

`denetim/BULGU-GEOMETRI-0904.md` — madde başına üç satır (yukarıda), artı:
```
🔴 REÇETE KUYRUĞU   koşu bitince uygulanacak, dosya ve satır adresiyle
🟡 ÖLÇÜLEMEDİ       ayrı kova, ve asla "temiz" diye raporlanmaz
⚪ BAYATLAMIŞ        şikâyet artık geçerli değil — KANITIYLA
```

## HABERLEŞME — 🔴 CEVAP KENDİ PENCERENE YAZILMAZ

```
mcp__ccd_session_mgmt__send_message
    session_id : local_0de4b2d7-a2ce-4a61-934c-c4146f3f130b
```
```
AÇILINCA     "açıldım, brifingi okudum, dosyam bende"
KALEM KALEM  bir madde bitince — biriktirme
SORU GELİNCE iş sürerken bile HEMEN: "iş üstündeyim · şu aşamadayım · ~ne kadar kaldı"
BİTİNCE      SAYIYLA: "5 madde → N teşhis, M reçete, K ölçülemedi"
```
Her madde üç şey: **① ne ölçtüm** · **② neyi bulamadım** · **③ ne istiyorum**.
🔴 **AKSAKLIK BEKLEMEZ.** Ve devraldığın hiçbir rakamı doğrulamadan
aktarma — yukarıdaki taban benim ölçümüm, **sen de ölç.**
