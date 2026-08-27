# KRONOLOJİ İÇERİK — 38 madde · Emre'nin okumak istedikleri

```
AD        KRONOLOJİ İÇERİK
MODEL     Sonnet
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ŞARTNAME  bu dosya + oturumlar/ORTAK-PAKET-KURALLARI.md  ← ÖNCE ONU OKU
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

🔴 **Sen KOŞUYU BEKLETEN oturumlardan birisin.** Yazdığın madde bu koşuya
yetişir; yazmadığın bir tur bekler.

## 1. İŞİN

```
denetim/kume/icerik-talebi.md    38 madde
```

Bunların hepsi **kusur değil**. Emre bir kronoloji maddesini okumuş ve
*"bunu da anlat"* demiş: bir olayın arka planı, bir kişinin akıbeti, bir
antlaşmanın hükmü. Yani **eksik olan harita değil METİN.**

📌 Emre'nin kendi tarifiyle bu maddeler *"ek okuma / magazin yazısı"* —
öğretici, hikâyesi olan, okununca akılda kalan. Kuru bir künye değil.

## 2. NEREYE YAZILIR — 🔴 ÖNCE ÖLÇ

```
data/olaylar_ek17.js   →   window.OLAYLAR_EK17
```
⚠️ **`ls data/olaylar*.js` ile bak.** Bugün `olaylar_ek8.js` *"yeni"*
sanıldı, yeniden yazıldı ve **8 madde düştü**, `Değişmez 2` kırıldı.
`ek17` bugün itibariyle YOK — ama **yazmadan önce sen de ölç.**
Varsa: **EKLE, yeniden yazma.**

🔵 `index.html`e `<script>` satırını **koordinatör** ekler; sen dokunma.
Motor `index.html`i okumaz, o yüzden koşuyu geciktirmez.

## 3. BİÇİM — var olan bir dosyayı örnek al

`data/olaylar_ek16.js` aç, aynı biçimi kullan. Zorunlu alanlar:
```
t:       "YYYY-AA-GG"   🔴 GÜN YAZ. Ay hassasiyeti senkronu bozar.
                        Gün bilinmiyorsa YYYY-01-01 (kabul edilmiş yol)
b:       başlık
d:       2-4 cümle anlatım — asıl iş burada
tur:     fetih · savas · antlasma · vefat · culus · isyan …
onem:    1-5      dunya: 1-5      kapsam: "ic" | "dis"
etiket:  [...]
yer_id:  varsa yerleşim adı (yerlesimler.js'teki ADIYLA birebir)
kaynak:  🔴 TDV slug'ı ya da "bulunamadı"
```

## 4. 🔴 DEĞİŞMEZ 2'Yİ BOZMA

Bugün `Değişmez 2` **521 kırılma, 0 açık** — temiz. Senin eklediğin madde
bunu bozamaz (madde eklemek kırılma yaratmaz), **ama** yanlışlıkla var
olan bir maddeyi silersen bozar. Bitirince koştur:
```bash
py arac/denetle.py
```
`Değişmez 2` satırı **0 açık** demeye devam etmeli. Demiyorsa **dur ve
koordinatöre yaz.**

## 5. MÜKERRER YAZMA

38 maddenin bir kısmı zaten yazılmış olabilir — külliyat **1223 madde.**
Yazmadan önce ara:
```bash
grep -c "1683" data/olaylar*.js
```
Aynı gün + aynı konu varsa hüküm `zaten-dogru`, notuna **hangi dosyada
olduğunu** yaz.

## 6. KAYNAK — `ORTAK §5` bağlayıcı

TDV birincil. Slug tuzağı: **302 = ölü**, ama **200 de yetmez** —
`ordu` askerî ordu maddesini açar, şehir maddesi `ordu--sehir`. İçeriği OKU.
🔴 **Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01`. Kaynağı yoksa
`kaynak:"bulunamadı"` — bu bir **sonuçtur** ve uydurmaktan kat kat değerli.

## 7. TESLİM

```
denetim/HUKUM-KRONOLOJI-ICERIK.json
denetim/BULGU-KRONOLOJI-ICERIK.md
```
Rapor sayıyla: *"38 → N madde yazıldı, M'si şu sebeple yazılmadı."*
Kalem kalem bildir — 38'i bitirmeyi bekleme, onarlı gruplar hâlinde yaz.
