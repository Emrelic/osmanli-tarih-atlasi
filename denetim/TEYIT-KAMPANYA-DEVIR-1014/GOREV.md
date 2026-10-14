# TEYİT KAMPANYASI — görev tanımı (14 Ekim 2026, pilot dalga)

## Neden
Emre'nin kuralı: güvensiz kaynaklı (Vikipedi, zayıf site, eser adı vermeyen "standart akademik
kaynak" beyanı) kronoloji bilgisi GÜVENİLİR kaynakla teyit edilir ve o kaynağın damgasıyla
damgalanır; teyit edilemezse sitede GÖSTERİLMEZ. Şu an bu maddeler sitede gizli. Teyit edilen
madde, `kaynak` alanına güvenilir kaynak eklenince kendiliğinden geri gelir.

## Girdi
Sana verilen TSV (bu dizinde): sütunlar `evren, dosya, anahtar, alt_neden, t, b, kaynak, kodlar, bolge`.
- `evren=kunye-kronoloji` → `anahtar` = `<künye id>#<kronoloji indeksi>` (data/devletler.js).
- `evren=dosya` → `anahtar` = `<DİZİ>[<indeks>]` (o dosyadaki window dizisi).
Maddenin bağlamı (künye adı, ömrü, öteki maddeleri) gerekirse depodan okunur — ÇALIŞMA KOPYASI
GERİDE OLABİLİR, bu yüzden yalnız şöyle oku: `git -C C:/atlas show origin/main:data/devletler.js`
(önce `git -C C:/atlas fetch origin --quiet`). Depoya HİÇBİR ŞEY YAZMA.

## Ne yapacaksın — her madde için
1. Maddenin iddiasını (olay + TARİH, gün düzeyinde) güvenilir kaynakta ara. AYNI KÜNYENİN
   maddelerini BİRLİKTE ele al: çoğu zaman tek bir akademik eser (ör. bir Cambridge History
   bölümü, bir ansiklopedi maddesi) künyenin bütün maddelerini kapsar — zaman böyle kazanılır.
2. Güvenilir kaynak = `data/kaynak_guven.js` tablosunda **A** ya da **B** kademeli bir kaynak
   (oku: `git -C C:/atlas show origin/main:data/kaynak_guven.js`). Bölgeye göre birincil:
   İslâm dünyası/Osmanlı/komşular → TDV İslâm Ansiklopedisi (https://islamansiklopedisi.org.tr/arama/?q=…;
   arama aday üretir, maddeyi GET ile aç; ham metin için `git -C C:/atlas show origin/main:denetim/SEHIR-ILK-ANILIS-PILOT-1013/tdv_ham.py`).
   Bizans → Oxford Dictionary of Byzantium, PLRE/PmbZ, TDV (Bizans maddesi), Cambridge History of the Byzantine Empire.
   İngiltere → ODNB, British History Online, Handbook of British Chronology, Britannica (B).
   Doğu Asya → Cambridge History of China/Japan/Korea, Encyclopedia of Korean Culture (encykorea.aks.ac.kr),
   Kokushi Daijiten / Nihon Daihyakka (kotobank), Britannica (B). Kuzey Avrupa → ulusal ansiklopediler (Store norske leksikon,
   Den Store Danske, Nationalencyklopedin, Uppslagsverket Finland), Britannica (B). İberya → DBE (dbe.rah.es),
   Gran Enciclopèdia Catalana. Rusya/Sibirya → BRE (bigenc.ru). Vikipedi YALNIZ asıl kaynağı bulmak için;
   dayanak OLAMAZ. Forum/blog/içerik çiftliği/popüler tarih/YZ metni kullanılmaz.
3. Kaynağın kendisini AÇ ve tarihi taşıyan cümleyi oku (arama sonucu özeti yetmez). WebFetch özetleyicisi
   rakamları bozabilir — tarih taşıyan cümleyi mümkünse ham sayfadan (curl/py) doğrula.
4. Hüküm ver:
   - `teyit` — kaynak olayı VE günü (ya da maddenin hassasiyetindeki tarihi) doğruluyor.
   - `teyit-yil` — kaynak olayı doğruluyor ama yalnız YIL (ya da ay) veriyor; maddedeki gün teyitsiz.
   - `tarih-celiski` — kaynak farklı tarih veriyor (kaynağın tarihini `kaynak_tarihi`ne yaz). Madde DEĞİŞMEZ; Emre karar verir.
   - `teyit-edilemedi` — en az 2 güvenilir kaynakta aradın, bulamadın (aradığın yerleri `not`a yaz).
   Tarih UYDURMA. Hicrî/Jülyen/ay-güneş takvimi çevirisi yaptıysan `not`ta beyan et.
   **TAKVİM KURALI (Emre onayı, 14 Ekim 2026):** kaynak Batı takvimi (Jülyen/Gregoryen) karşılığını
   veriyorsa o gün esastır. Vermiyorsa (ay-güneş: Çin/Kore/Japon; hicrî) çeviriyi bir tabloyla yap ve
   `not`ta "çeviri: <tablo/yöntem>" diye beyan et; çeviremiyorsan `teyit-yil` ver. Atlasın gününün
   Jülyen mi Gregoryen mi olduğunu kaynağın günüyle karşılaştırırken dikkat et (1582 sonrası Batı
   Avrupa Gregoryen; İngiltere 1752'ye kadar Jülyen) — farkı yalnız takvimden geliyorsa `teyit` ver ve not düş.
   **TARİH ÇELİŞKİSİ (Emre onayı):** Osmanlı ve komşularında TDV esastır; öteki bölgelerde güvenilir
   kaynağın günü alınır. Sen yine `tarih-celiski` + `kaynak_tarihi` yaz; düzeltmeyi ayrı iş yapar.
   **TDV ile öteki güvenilir kaynaklar ÇELİŞİRSE (Emre, 14 Ekim akşam):** kuralı otomatik işletme —
   ÜÇÜNCÜ, yurtdışı bir HAKEM kaynağa bak: o devletin kendi kaynakları (resmî arşiv, ulusal ansiklopedi)
   ya da o bölge için en güvenilir kayıtlar (ör. İngiliz kayıtları: TNA, Hansard, London Gazette).
   Hakemi ve onun gününü `not`a yaz. **Antik Mısır:** Oxford kronolojisi (Shaw ed., The Oxford History
   of Ancient Egypt, 2000) esastır — `kaynak_tarihi`ni ona göre ver.
   `kaynak_tarihi`ni MUTLAKA `YYYY-AA-GG` (gün yoksa `YYYY-AA` ya da `YYYY`) biçiminde ver.

## Çıktı — TSV, UTF-8, başlık satırı aynen
`anahtar	dosya	t	b	hukum	yeni_kaynak	kaynak_kodu	kaynak_tarihi	not`
- `yeni_kaynak`: maddenin `kaynak` alanının BAŞINA eklenecek metin — tam künye + doğrudan madde URL'si
  (varsa) + tarihi taşıyan ≤15 kelimelik alıntı (tırnak içinde). Ör.:
  `ODNB, "Edward I (1239–1307)", doi:10.1093/ref:odnb/8517 — «died at Burgh by Sands on 7 July 1307»`
  TDV için: `TDV İslâm Ansiklopedisi, «<madde adı>» https://islamansiklopedisi.org.tr/<slug> — «…»`.
  Bu metin `data/kaynak_guven.js` tablosunda A/B olarak TANINMALI — tablodaki `desen`lerden biriyle eşleştiğini kontrol et.
  Tanınmayan saygın bir kaynak kullandıysan `kaynak_kodu`na `TABLODA-YOK:<önerilen kod>` yaz.
- `kaynak_kodu`: tablodaki kod (TDV, ODNB, BRITANNICA, …).
- `teyit-edilemedi` satırında `yeni_kaynak` boş.
- `t`, `b`, `anahtar`, `dosya` girdidekiyle BİREBİR aynı (uygulayıcı bunlarla eşler).
Dosya adı: `<sana verilen girdi adı>.cikti.tsv`, bu dizinde (teyit_girdi/). Ayrıca kısa `<ad>.rapor.md`:
hüküm sayıları, kullandığın kaynaklar, süre, zorluklar.

## Arama kotası (14 Ekim, birinci dalgada ölçüldü)
WebSearch OTURUM başına 200 sorguyla sınırlı ve BÜTÜN ajanlar paylaşıyor — dolabilir. WebSearch'e
güvenme; adayı doğrudan kaynağın kendi arama sayfasından curl/py ile bul:
- TDV: `https://islamansiklopedisi.org.tr/arama/?q=<terim>` (madde adresleri döner)
- Larousse: `https://www.larousse.fr/encyclopedie/rechercher?q=<terim>`; arşiv: larousse.fr/archives/grande-encyclopedie, /archives/histoire_de_france
- Oxford Reference: arama sayfasının ham HTML'i madde özetini verir (A) — ~50 sorgudan sonra hız sınırı (405); seyrek kullan
- encyclopedia.com arama; Store norske leksikon / lex.dk JSON API; EKC (encykorea.aks.ac.kr) arama
Bot duvarlı (zaman harcama): Britannica (curl 403), Universalis, Légifrance, Cairn, OpenEdition, Dictionary of Irish Biography, 1914-1918-online, PMC.

## Yasaklar
- Depoya (C:\atlas ve worktree'ler) YAZMA. Yalnız bu dizine yaz.
- Tarayıcı bölmesini (mcp__Claude_Browser__*, claude-in-chrome) KULLANMA — kullanıcının ekranını değiştiriyor.
  WebSearch / WebFetch / curl kullan.
- Bot korumasını (Cloudflare vb.) aşmaya çalışma; o kaynağı atla.
