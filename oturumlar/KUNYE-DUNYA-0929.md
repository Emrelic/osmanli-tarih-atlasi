# KUNYE-DUNYA-0929 — şartname

> 🔴 ÖNCE OKU: `CLAUDE.md` + [`oturumlar/KRONO-DUNYA-0929-ORTAK.md`](KRONO-DUNYA-0929-ORTAK.md)
> Dalga 1 · model Opus · **DARBOĞAZ PAKETİ** — on bir paket senin çıktına bakacak

## Amaç

Emre: *"tüm dünya kronolojilerini devlet listesini gözden geçirsin, devletler
beylikler krallıklar emirlikler adına ne deniyor ise tüm devletlerin listesini
alsın tarihi olarak."*

Sen **kronoloji YAZMIYORSUN.** Sen on bir kardeş paketin üzerine inşa edeceği
**devlet listesini** çıkarıyorsun: kim var, kim yok, kimin ömrü yanlış.

## 🔴 Dosya sahipliği — BUNLARIN DIŞINA YAZMA

- `denetim/KUNYE-DUNYA-0929.md` — raporun
- `denetim/KUNYE-DUNYA-0929.json` — ham liste (kardeş paketler bunu okuyacak)
- `denetim/ARAC-KUNYE-DUNYA-0929.py` — ölçen betiğin

🔴 **`data/devletler.js`e DOKUNMA.** O paylaşılan dosyadır; 678 künye üzerinde
on bir paket çalışacak. Sen ÖLÇER ve ÖNERİRSİN, koordinatör uygular.

## Ölç — beş soru, hepsi sayıyla

**① ENVANTER.** `data/devletler.js` 678 künye taşıyor (29 Eylül ölçümü). Bunları
sınıflandır: kaçı devlet/imparatorluk · beylik · krallık · emirlik · hanlık ·
dukalık · cumhuriyet · şehir devleti · knezlik/voyvodalık. Adlandırma tutarlı mı?

**② KRONOLOJİSİZ KÜNYE.** Hangi künyenin hiç kronoloji maddesi yok? Ölçümüm:
`devlet:` alanı yalnız **723 kayıtta** var (5.437 kuyruk kaydının %13,3'ü) —
çünkü ülke kronolojilerinde devlet **dosyanın kendisidir**, alan değil.
🔴 Bu yüzden künye→madde eşlemesini `devlet:` alanıyla yapmak **yanlış sayı verir.**
Doğru eşlemeyi sen kur ve **yöntemini yaz** (dosya adı eşlemesi + `etiket:`
içindeki künye id'leri + `taraflar:`/`devletler:` alanları).

**③ EKSİK DEVLET.** 678 künyede olmayan ama olması gereken siyasi yapı hangileri?
Öncelik sırası: ① Osmanlı'nın komşuları ② Osmanlı'nın tâbileri ③ Anadolu ve
Balkan beylikleri ④ ötekiler. **Ölçülebilir bir ölçüt kur** (ör. "1281-1923
arasında Osmanlı sınırına 500 km'de hüküm sürmüş ve künyesi olmayan yapı").

**④ ÖMRÜ ŞÜPHELİ KÜNYE.** `f:`/`t:` alanları kaynağa uyuyor mu? 🔴 `CLAUDE.md §3.5`
**hayalet devlet** tuzağı: kardeş paketler senin listene bakıp madde yazacak;
künyenin ömrü yanlışsa onlar da yanlış yazar. Şüpheli olanı **adıyla** işaretle.
Ve `D205`: künye aşımının **üç sınıfı** var, çareleri TERS — ① devlet öldü→dönemi
KISALT ② aynı polity sürüyor→künyeyi GENİŞLET ③ ardıl yapı geçti→ARDIL KÜNYE.
**İlk iş düzeltme değil SINIFLANDIRMA.**

**⑤ SESSİZ BORÇ.** `CLAUDE.md §1.5` **14 renksiz künye**yi "gerçek sessiz borç"
sayıyor (hiçbir yerde kullanılmıyor). O 14'ü adıyla çıkar; ve tersini de sor:
haritada kullanılıyor ama künyesi yok mu?

## Çıktı biçimi — kardeş paketler OKUYABİLSİN

`denetim/KUNYE-DUNYA-0929.json` şu soruya tek bakışta cevap vermeli:
*"Ben Bosna-Hersek kronolojisi yazacağım; hangi künyeleri kullanabilirim,
ömürleri ne, hangisi şüpheli?"*

```json
{ "kunye": { "<id>": {"ad":"…","f":"…","t":"…","sinif":"beylik",
                      "madde_sayisi":12, "supheli":false, "not":"" } },
  "eksik": [ {"ad":"…","gerekce":"…","kaynak":"…","onerilen_id":"…"} ],
  "supheli_omur": [ {"id":"…","alan":"t","veri":"…","kaynak":"…","sinif":"①|②|③"} ],
  "renksiz_14": [ "…" ] }
```

## Teslim

Tek tahta mesajı, üçlü kural + `denetim/KUNYE-DUNYA-0929.md` yolu.
🔴 Teslim ettiğin an **tahtaya `HERKES`e DEĞİL, YILDIRIM BAYEZIT'e** yaz —
kardeş paketlere listeyi ben duyururum (`§7.2 ③` nokta atışı).
Sonuna: **"bekçimi öldüreyim mi?"**

⏱️ Bu paket kardeşlerini bekletiyor — **hız burada değer taşıyor.** Tam liste
çıkmadan önce ③ ve ④'ün ilk bulgularını ara mesajla göndermen serbesttir.
