# FERHAT PAŞA 1590 — NET SINIR ÇALIŞMASI (13 Eylül 2026, 1.MURAT)

## Emre'nin tarifi (aynen)
> Erdebil–Kazvin–Tahran–İsfahan–Behbehan hattının batısında kalan,
> Bağdat–Basra–Van–Kars–Batum hattının doğusunda kalan,
> Kafkas dağlarının güneyinde kalan, Basra körfezinin kuzeyinde kalan
> bölgedeki tüm şehirler için araştırıp hangi şehir nerede kalmış hepsini
> tespit et ve net bir sınır çizelim. Osmanlı, İran, Rus, Gürcistan,
> Ermenistan, Azerbaycan, İngiliz, Fransız, Alman kaynaklarına başvur.
> Eğer bir yerleşimden bahsedilmiyorsa ama Osmanlı'da kalan toprak hattının
> batısında kalmış ise enklav olamayacağından dolayı orayı da örtülü bir
> şekilde Osmanlı kabul edeceğiz.

## Kurallar
- **Kaynak:** akademik (CLAUDE.md §4), dokuz tarih yazımı. Her yer için mümkünse
  iki farklı gelenekten kaynak; çelişki AÇIKÇA yazılır, taraf seçilmez.
- **Örtülü kural:** kaynakta adı geçmeyen ama kaynaklı Osmanlı hattının Osmanlı
  tarafında kalan yer = OSMANLI, damga **"örtülü (enklav olamaz)"**. Kaynaklı
  hükümle ASLA karışmaz, ayrı sütunda durur.
- **Kesitler:** 1590-03-21 (antlaşma) · 1603-10-21 (Safevî geri alışı) ·
  1612-11-20 (Nasuh Paşa).

## İş bölümü (üç araştırma kolu, yalnız rapor/öneri yazar)
| kol | kapsam | dosyalar |
|---|---|---|
| Kuzey | enlem ≥ 36°K — Kafkasya + Azerbaycan/KB İran | `denetim/*FERHATPASA-SEHIR-MATRISI*` |
| Güney | enlem < 36°K — Kürdistan güneyi, Kirmanşah, Hemedan, Nihavend, Luristan, Huzistan, Basra–Behbehan | `denetim/*FERHATPASA-GUNEY*` |
| 0047 | Kasr-ı Şirin · Zencan · Sultaniye · Bicar · Merivan · Sakız · Bane · Serdeşt · Mahabad | `denetim/*0047*` |
| (önceki) | Revan · Nahçıvan · Maku · Şerur · Eçmiyazin · Gümrü · Merend · Selmas · Çaldıran · Başkale | `denetim/*KITA29-FERHATPASA*` |

## Çıktı → uygulama sırası
1. Birleşik şehir matrisi: atlas ne gösteriyor · kaynak ne diyor · hüküm ·
   kaynaklı/örtülü · kaynak geleneği · önerilen dönem/gün/kaynak.
2. Sınır çizgisi: kuzey + güney yarı `sinir_hatti_*` → TEK C kaydı
   (`data/hukuki_sinirlar.js`, hat.tur "dogal-tanimsiz", `kapsama.negatif_taraf`).
   Mevcut `ferhad-pasa-istanbul-1590` ("bolge") kaydının yerine ya da yanına —
   karar birleştirmede. **C dosyası koşu sırasında da güncellenebilir.**
3. Yerleşim yaması: kusurlu şehirlerin dönemleri — **koşu 10 yayınından SONRA**,
   `KOSU10-SONRASI.md` §1 zincirine (KITA 13 Van A → Bitlis → KITA 29 Ferhat Paşa →
   bu matris) eklenir; haritada **koşu 11** ile görünür. Değişmez 2 için her
   kırılmanın maddesi yamayla BİRLİKTE iner.
