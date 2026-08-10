# KUTU DENETİM — ilerleme notu

> ÇAPRAZ oturum · Opus · salt okur.
> Şartname: `oturumlar/KUTU-DENETIM.md` · Rapor: `denetim/KUTU-BULGULAR.md`

## Durum: **71/71 BİTTİ** — rapor teslim edildi

```
parti-0002   8/8   ✓      parti-0006  19/19  ✓
parti-0003  10/10  ✓      parti-0007   7/7   ✓
parti-0004  12/12  ✓      emrelic-0008 12/12 ✓
parti-0005   2/2   ✓      emrelic-0010  1/1  ✓
```

```
71  →  gercek 65 (46 harita/veri + 19 içerik) · zaten-dogru 3 · anlasilmadi 3
```

## Ölçüm tabanı

| | başlangıç | bitiş |
|---|---|---|
| yerleşim | 2308 | 2308 |
| kronoloji | 1158 | **1161** |
| künye | 390 | 390 |
| git | `a08f98a` | `46cfedd` |

🔴 **Taban koşu sırasında kaydı** (üç yeni commit, başka oturumlar `data/`ya
yazıyor). Koordinatöre bildirdim (`§7.1 ⑥`) ve **üç başlıca bulgumu yeniden
ölçtüm** — üçü de ayakta: İlhanlı 1366 · Bağdat tek parça · Erzincan
1473-08-11. `YASALAR B18`: alet değişmedi, **evreni** değişti.

## Kurduğum aletler (scratchpad — geçici, depoya girmedi)

| alet | ne yapar | niçin değerli |
|---|---|---|
| `q.py` | `girdi.yukle()` + `sahip(y, gün)` | herhangi bir günde herhangi bir noktanın sahibi |
| `petek.py` | `petek_govde.js` + `PETEKLER` → `kim(lon, lat, gün)` | **"ekranda bu koordinatı KİM boyuyor"** — enklav, kıymık, taşma sorularının tek ucuz cevabı |
| `kron.py` | `olaylar*.js`i **node ile** ayrıştırır | `§11`: veri zaten bir dilde yazılıysa o dilin yorumlayıcısını çağır |
| `hayalet.py` | `s:` dönemi künye ömrünün dışına taşanlar | `§3.5`'in soramadığı soru: *"bu devlet o tarihte yaşıyor mu"* |
| `kisi.js` | `kisiBul()`u app.js'ten aynen kopyalayıp gerçek `kisiler.js` üzerinde koşturur | eşleştirici kusurunu **canlı** gösterdi |

📌 **`petek.py` bu partinin en verimli aleti oldu** — sekiz maddeyi tek
sorguyla kapattı. Kalıcı bir alete dönüştürülmeye değer; şartı `PETEK_GOVDE`
uyarısının taşınması: **zamansız taban geometri**, geometri yayından
sahiplik veriden gelir, arada bir tur gecikme olabilir.

## Kendi düştüğüm tuzaklar (kayda geçiyorum)

1. **`sibir` diye aradım, 0 buldum** — doğru anahtar **`sibir-hanligi`**.
   `§4`'ün *"kendi transliterasyonunu değil gerçek `id:`yi kullan"* dersi,
   bende gerçekleşmiş hâli. Kendi ölçümümü raporda düzelttim.
2. **`hayalet.py`nin ilk sürümü 972 satır verdi ve çoğu SAHTEYDİ** — yalnız
   `id:`ye bakıyordu, `harita:` ile aynı anahtara bakan ardıl künyeleri
   görmüyordu ("Macaristan Krallığı 1526'da bitti" deyip 1918'in modern
   Macaristan'ını hayalet saydı). Evreni düzeltince 972 → 903, ve **ham
   listeyi koordinatöre HİÇ vermedim** — yalnız 71 maddeye değen kalemleri.
3. **`git commit`/heredoc'a metin geçirmeye kalktım** ve `§11` beni
   yakaladı (kabuk `unexpected EOF`). Çareyi kurala uydurdum: bölümler
   `Write` ile scratchpad'e yazılıyor, `py ekle.py` ile ekleniyor —
   **kaçış içeren hiçbir metin kabuktan geçmedi.**
4. **Çanakkale'de bir teşhis kurdum ve ÖLÇÜM ÇÜRÜTTÜ.** *"Kilitbahir'in
   koordinatı 1,6 km batıda, orta dikme karaya düşüyor"* dedim; kıyı
   çizgisini taradım, orta dikme **suda** çıktı. Hüküm (`ihlal üremiyor`)
   doğruydu, **ilk teşhis yanlıştı** — `YASALAR B10`.

## Emre'de bekleyen üç soru

```
p2/H-0014   künye çubuğu görünen yeni bir Saroz karesi
p4/H-0014   "Katılım: Sin (Sinj)" şeridi mi, tarih biçimi mi?
p6/H-0009   metinsiz madde — neyi işaretlemek istediniz?
```

## Sonraki oturuma devir

- **TDV'ye hiç bakmadım.** Raporda "şu tarih şüpheli" diyen her hüküm
  ölçüme dayanıyor, kaynağa değil. **Doğru günler bilerek BOŞ.**
- Rapordaki her kalemde `⚠️ ÖLÇMEDİM` etiketi var; ölçülmüş ile
  hatırlanmış **yan yana durmuyor** (`§11`).
- `denetle_iddia.py` için **dört ateşleme vakası hazır**: p2/H-0025 (Bağdat) ·
  p3/H-0010 (Aydın) · p4/H-0006 (Erzurum-Van) · p6/H-0005 (Kalender Şah).
  Dördü de aynı sınıf: **madde var, kırılma yanlış yerde ya da yok.**
