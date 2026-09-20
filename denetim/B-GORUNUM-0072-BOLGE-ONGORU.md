# B-GORUNUM-0072 · BÖLGE BİRİMİ — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

Yazılma anı: 20 Eylül 2026, `denetim/ARAC-B-GORUNUM-BOLGE-0072.py` HİÇ
KOŞMADAN ÖNCE. Sınav evreni: ilk 12 kesit (1281-01-01 … 1301-01-01),
kesit başına 234–244 canlı gövde.

## Bölge tanımı — sezgiyle değil, KODUN BAĞIMLILIĞINDAN türetildi

1.MURAT'ın ①. şartı: *"Bölge biriminin TANIMINI ölçüyle seç, coğrafî
sezgiyle değil… bir boşluk bileşeni İKİ bölgeye birden değiyorsa anahtarı
hangi bölgeye ait?"*

Seçtiğim tanım o soruyu **yapısal olarak ortadan kaldırıyor**, cevaplamıyor:

> **Bölge = "zarf komşuluğu" grafiğinin bağlı bileşenidir.**
> Düğüm: kesitteki bir gövde. Kenar i~j, şu üç halden biri varsa:
> zarf(talep ᵢ) ∩ zarf(gövde ⱼ) ≠ ∅ · zarf(talep ᵢ) ∩ zarf(talep ⱼ) ≠ ∅ ·
> (simetrik hâli).

**Niçin ZARF (bounding box), niçin gerçek kesişim değil:** `kesit_dolgu`
komşuyu her yerde STRtree ile, yani ZARFLA arıyor (`_yakin`, `_t_agac`).
Bir parça `p ⊆ talepᵢ` olduğu için `zarf(p) ⊆ zarf(talepᵢ)`; dolayısıyla
`_yakin(p)`in döndürebileceği her gövdenin zarfı `zarf(talepᵢ)` ile
kesişir ⇒ **o gövde zaten aynı bileşendedir.** Bileşen dışından hiçbir
gövde hesaba giremez. ⇒ "İki bölgeye birden değen bileşen" diye bir şey
OLUŞAMAZ: iki gövdenin talepleri değiyorsa ikisi AYNI bölgededir.
⇒ Bölge anahtarı = o bileşendeki HER gövdenin (kim + WKB özeti), sıralı.
Kapsam dar değil, TAM — bugün kesit anahtarını niçin geniş tuttuysam
aynı disiplin.

## ÖNGÖRÜ — ve bu tanımın ÇALIŞMAMA İHTİMALİ

**Ö-B1 · Bileşen sayısı ve en büyüğün payı.** Tahminim: kesitte
**8–25 bileşen**, ama **en büyüğü gövdelerin %60'ından fazlasını**
yutuyor. Gerekçe: 120 km'lik kapanış halkaları komşu devletlerde
üst üste biner; Avrasya + Afrika kesintisiz bir kara kütlesi ve
1281'de o kütlede 150+ gövde canlı. Zincirleme komşuluk hepsini tek
bileşene bağlar.
🔴 **BU ÖNGÖRÜ TUTARSA TANIM İŞE YARAMAZ** ve bunu şimdiden yazıyorum:
tek dev bileşen, bugünkü kesit anahtarının neredeyse aynısıdır —
tek devlet değişince yine hemen her şey ıskalar. O hâlde çare
bileşen DEĞİL, **örtüşme paylı döşeme** (tile) olur ve maliyeti
ayrıca ölçülür.

**Ö-B2 · Ayrık bileşenler.** Amerika kıtası · Avustralya/Okyanusya ·
Japonya · Madagaskar · büyük ada kümeleri ayrı bileşenler çıkar.
Tahmin: bunların toplamı gövdelerin **%25–40'ı**.

**Ö-B3 · Tek devlet değişince ıskalayan bölge.** `bizans` oynatılırsa
tahminim: **1 bölge** ıskalar (Avrasya dev bileşeni) ve o bölge
gövdelerin %60+'ını taşıdığı için kazanç **%40'tan az** olur.

**Ö-B4 · Bit-bit aynılık.** Bölge bölge hesaplanan çıktı tek parça
hesaplananla AYNI çıkar — ve bu tahmin değil, yukarıdaki kapalılık
argümanının SONUCU. Çıkmazsa argüman yanlıştır, ayar değil.
🔴 Sınav iki yönde koşulacak: ① aynı mı ② bileşen kapalılığı gerçekten
tutuyor mu (bileşen dışı bir gövde hesaba karışıyor mu).

**Ö-B5 · Süre.** Tek çekirdekte bölgelere ayırmak süreyi
**düşürmez, hafifçe ARTIRIR** (grafik kurma maliyeti). Kazanç yalnız
② yeniden hesapta ve ③ paralelleştirmede.
