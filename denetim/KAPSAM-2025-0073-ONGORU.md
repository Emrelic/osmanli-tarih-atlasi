# KAPSAM-2025-0073 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

**Sınav anı:** 21 Eylül 2026, 01:05 — hiçbir ölçüm koşturulmadan, yalnız
`CLAUDE.md §1.5` tablosundaki sayılar ve `ONCELIK.md` okunarak yazıldı.
Evren her maddede ayrıca belirtildi. Ölçüm bittiğinde bu dosya DEĞİŞTİRİLMEZ;
tutan/tutmayan `KAPSAM-2025-0073-MALIYET.md` §"Öngörü sınavı"nda karşılaştırılır.

Bilinen taban (§1.5, 21 Eylül 2026): 677 künye · 1688 kronoloji maddesi ·
3921 yerleşim · 87 girdi dosyası · 1.883 kesit tarihi · tam koşu ~40 dk ·
261 dosya / 157,6 MB ham (gzip ~40 MB).

---

## Ö1 — Künye (evren: `data/devletler.js`, 677 künye)
- Ö1a: `t:` alanı 1918–1923 aralığında biten künye sayısı **40–80**.
- Ö1b: `t:` alanı 1923'ten SONRA uzanan (yani kapsam genişlemesine hazır) künye
  sayısı **60'tan az** — atlas 1923'te kesildiği için künye dizini de kesilmiştir.
- Ö1c: 1918 kademesi için gereken YENİ künye **60–110** (mandalar, ardıl
  cumhuriyetler, kısa ömürlü devletler: Ermenistan, Gürcistan, Azerbaycan,
  Hicaz, Suriye Arap Krallığı, İrlanda, Baltık üçlüsü, Yugoslavya, Çekoslovakya…).
- Ö1d: 1991 kademesi için (1923→1991 toplamı) gereken YENİ künye **180–300**.
- Ö1e: 2025 kademesi için (1923→2025 toplamı) gereken YENİ künye **250–400**.
  Gerekçe: bugün BM'de 193 üye var; sömürgeden bağımsızlığa geçen her yapı
  ayrı künye, ayrıca ara rejimler (SSCB, Yugoslavya, BAC, DDR…) ayrı kayıt.

## Ö2 — Kronoloji maddesi (evren: `data/olaylar*.js`, 1688 madde)
- Ö2a: 1900–1923 penceresinin madde yoğunluğu **yılda 5–9 madde** (ONCELIK.md
  eski ölçümü 1057 maddeyken yılda 4,9 demişti; madde sayısı o günden %60 arttı).
- Ö2b: 1923–1945 (22 yıl) için gereken madde **250–450**.
- Ö2c: 1923–1991 (68 yıl) için gereken madde **700–1.200**.
- Ö2d: 1923–2025 (102 yıl) için gereken madde **1.000–1.800** — yani bugünkü
  bütün kronolojinin **60–105%'i kadar yeni madde**. Bu, "1923 sonrası atlasın
  yarısı kadar iş" demektir.

## Ö3 — Yerleşim penceresi (evren: 3921 nokta, `s:[]` dilimleri)
- Ö3a: Bugün 3921 noktanın **%80'inden fazlasının** son `s:` dilimi 1923'te
  (ya da daha önce) bitiyor; yani her biri en az bir yeni dilim ister.
- Ö3b: 1918 kademesi için yazılacak yeni `s:` dilimi **2.500–4.500**.
- Ö3c: 1991 kademesi için toplam yeni dilim **5.000–9.000**.
- Ö3d: 2025 kademesi için toplam yeni dilim **6.000–11.000**.
  Gerekçe: bir nokta 1923–2025 arasında ortalama 1,5–2,5 kez el değiştirir
  (sömürgesizleşme + SSCB/Yugoslavya dağılması yoğun bölgelerde 3–4).

## Ö4 — Motor koşusu (evren: 1.883 kesit, ~40 dk)
- Ö4a: Bugünkü kesit yoğunluğu 1281–1923 (642 yıl) için **yılda ~2,9 kesit**.
- Ö4b: 1945'e uzatmak **+120 ilâ +250 kesit** (%6–13 artış) ⇒ koşu **43–46 dk**.
- Ö4c: 1991'e uzatmak **+400 ilâ +800 kesit** (%21–42 artış) ⇒ koşu **48–57 dk**.
- Ö4d: 2025'e uzatmak **+600 ilâ +1.200 kesit** ⇒ koşu **53–66 dk**.
- Ö4e: Koşu süresi kesit sayısıyla **doğrusala yakın** artar (kesit başına
  ~1,3 sn); petek üretimi kesit başına bağımsız olduğu için süper-doğrusal
  bir patlama BEKLEMİYORUM.

## Ö5 — Çıktı boyutu (evren: 261 dosya / 157,6 MB ham)
- Ö5a: Ham boyutun **%85'inden fazlası** kesit sayısıyla doğru orantılı
  (`donemler.js` + `devletler_harita.js` + `bolgeler.js` gövdeleri).
- Ö5b: 1945 kademesi ham boyutu **170–185 MB** yapar.
- Ö5c: 1991 kademesi **190–225 MB**.
- Ö5d: 2025 kademesi **205–250 MB** (gzip ~52–64 MB).
- Ö5e: 🔴 Bu, YUKLEME-0072'nin çözmeye çalıştığı açılış süresi sorununu
  **ağırlaştırır**; kapsam genişlemesi yükleme mimarisi (kesit dilimleme /
  tembel yükleme) çözülmeden açılırsa site kullanılamaz hâle gelebilir.

## Ö6 — Oturum-gün / token
- Ö6a: 1918 kademesi **12–25 oturum-gün**.
- Ö6b: 1991 kademesi (1918 üstüne) **40–80 oturum-gün**.
- Ö6c: 2025 kademesi (1991 üstüne) **20–40 oturum-gün**.
- Ö6d: Toplam 1923→2025 **70–145 oturum-gün** — bugüne kadarki bütün
  atlas emeğinin mertebesinde.

## Ö7 — Hüküm öngörüsü (ONCELIK.md itirazı)
- Ö7a: `ONCELIK.md` ÖNCELİK 1 = "1281–1923 penceresini DOLDUR, özellikle
  1900–1923"; ÖNCELİK 2 = 1923 sonrası. Yani istenen iş **sırada ikincidir** ve
  ONCELIK.md açıkça *"Açık pencereyi bırakıp yenisini açmak, bu belgenin
  yasakladığı şeyin ta kendisidir"* diyor ⇒ **itiraz edeceğim** (veto değil).
- Ö7b: ONCELIK.md'nin ileri durakları **1945 · 1989 · bugün**; koordinatörün
  sevkinde **1918 · 1991 · 2025** yazıyor ⇒ belge ile sevk arasında
  **uyumsuzluk bulacağım** ve bunu bildireceğim.
- Ö7c: En ucuz kademe 1918 DEĞİL, **1923'ün kendisinin kapatılması** çıkacak:
  atlas zaten 1923-10-29'da bitiyor; 1918 durağı 1923'ün İÇİNDE kalır, yani
  "I. Dünya Savaşı sonu" ayrı bir kapsam genişlemesi değil, ÖNCELİK 1'in
  parçasıdır. Bunu ölçümle göstereceğim.
