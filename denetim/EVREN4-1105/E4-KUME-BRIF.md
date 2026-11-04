# EVREN 4 — KÜME YÖNTEMİ (HAVVA, 5 Kasım 2026)

Önce kuralları oku: `...\scratchpad\e4\DA-BRIEF.md` (TAHRİR ölçütü, TEK KURAL, TEK ÖLÇÜ, künye f–t,
JSON satır biçimi, KAYNAKLI/ONERI/BULUNAMADI/BAKILMADI). Ardından `...\scratchpad\e4\E4-HAVVA-BRIF.md`
(HAVVA farkları). Bu dosya onların önündedir.
scratchpad = C:\Users\user\AppData\Local\Temp\claude\61bcdfa88cf2fd72\05d6722f-8c1a-4f81-939f-c03e49711dd1\scratchpad

## Yöntem
Girdi: `<scratchpad>\e4\kumeler.json` — her küme aynı (sahip, alan, f) dönemlerini toplar
(ör. küme 1: 108 yerleşimde `s: rusya-gecici-hukumet` f 1917-03-15). Sana verilen küme numaralarını işle.
1. Küme başına ÜLKE DÜZEYİNDE tek akademik kaynakla hükmü kur: `f` (ve en sık `t`) günü o devletin
   kuruluş/devir günü mü? Kaynakta tarihi taşıyan cümleyi oku.
1b. HANGİ UÇ (EMRELİC 01:25): her satıra `"uc": "f" | "t" | "f+t"` ekle; kuralın tamamı E4-HAVVA-BRIF.md madde 6c.
2. Kümedeki her yerleşim için o hükmü uygula: KAYNAKLI (not: "ÜLKE DÜZEYİ — küme N").
3. İSTİSNALARI ayıkla: yerleşimin koordinatına/bölgesine göre o gün devlet orayı fiilen yönetmiyorsa
   (işgal, iç savaş, geç teslim, ör. Sovyet Rusya 1917-11-07'de Kafkasya/Orta Asya/Sibirya'yı yönetmiyordu;
   Çin Halk Cumhuriyeti 1949-10-01'de Tibet/Hainan/Güney Çin'i henüz almamıştı) → ONERI + `not`ta gerekçe
   ve kaynak. Şüpheli ama kaynaksız istisnayı ONERI yapma, `not`a "İSTİSNA ADAYI" yaz.
4. Kümedeki `t` ucu farklı yerleşimlerde farklıysa ayrı ayrı bak (ör. 1991-08-24 vs 1991-12-26).
5. Kaynak: TDV (arama sayfası `https://islamansiklopedisi.org.tr/arama/?q=<kelime>` → madde GET), ulusal
   akademik ansiklopediler, resmî belge neşirleri (antlaşma metni, resmî gazete, BM belgesi), hakemli dergi,
   akademik monografi. SAYFA ÇEKİCİ `scratchpad\arac\sayfa.py` VAR (kullanımı E4-HAVVA-BRIF.md madde 2) —
   WebFetch'ten önce onu kullan; archive.org tam metinleri (`ia-ara`, `ia-oku`) akademik monografilere ulaşır.
   **Britannica KAPALI (403), deneme. Iranica yalnız `iranicaonline.org/articles/<slug>` biçimiyle.** Vikipedi, Imperial Gazetteer,
   EB1911 yalnız İPUCU, KAYNAKLI hükmü vermez. Ganzhi/Japon günlerini çevirme.
6. Çıktı: `<scratchpad>\e4\e4_HAVVA_kume_<ilk>-<son>.json`, biçim: `{"<yerleşim adı>": [satır, ...]}`;
   satırda ana brifteki alanlar + `"sira"` + `"kume"`. Her 3 kümede bir Write ile baştan yaz; bitince Read ile
   geçerliliği ve yerleşim sayısını kontrol et.
7. Bitince özet: küme başına hüküm (kaynak + gün), yerleşim sayıları (KAYNAKLI/ONERI/BULUNAMADI/BAKILMADI),
   istisna listesi.
