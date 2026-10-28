# KUTU ÇÖZÜM GÖREVİ

Osmanlı Tarih Atlası. Emre'nin kutu paketlerindeki açık maddeleri ÇÖZÜYORSUN. Maddeler
önceden tasnif edildi (sınıf, kanıt, öneri hazır). Sen kendi worktree'nde (izole açıldın)
düzeltmeyi yapar, ölçer, `main`e push kapısından geçirirsin.

## Önce oku
1. Worktree'ndeki `CLAUDE.md` — **bütün kuralları geçerli** (kaynak kuralı, tarih uydurma
   yasağı, hicrî yıl, gün yazma, BOYALAR, dönem çakışmaz, `__BOSLUK__` beyanı, Türkçe metinde
   sed/replace yasağı, commit'te dosyaları adıyla ekleme, heredoc/backtick yasağı).
2. `VERI-YAPISI.md` (veri yazmadan önce).
3. Girdin: `SCRATCH\is-<GRUP>.json` — her maddede `anahtar`, `sinif`, `ozet`, `kanit`,
   `dosyalar`, `oneri`, `cevap`, `kaynak`, `guven`. Tasnifçinin önerisi bir başlangıçtır,
   doğru olduğunu kabul etme — ölç ve kaynakla doğrula.

## Kurulum
- Worktree'de üretilmiş ham dosyalar yok; `denetle` için önce
  `py arac/kodla.py coz-c data data/devletler_harita.js` ve
  `py arac/kodla.py coz-c data data/donemler.js donem` (ayrı ayrı, zincirleme değil).
- `py arac/denetle.py` taban ölçümünü al (çıkış kodunu oku).

## Her madde
- **VERI / KRONO:** kaynakla (TDV birincil: `https://islamansiklopedisi.org.tr/arama/?q=...`,
  WebFetch; Vikipedi tek dayanak olamaz) düzeltmeyi yaz. Yeni yerleşimden önce mükerrer tara
  (normalleştirilmiş ad + 3 km). Her `d:`/`v:` kırılmasının ±30 gün içinde kronoloji maddesi
  olmalı (Değişmez 2). Koordinatı uydurma; bilinen şehir koordinatı yaz ve kaynağını not et.
- **ARASTIRMA:** soruyu kaynakla cevapla. Cevap bir veri düzeltmesi gerektiriyorsa yap.
  Kaynak bulunamazsa `cozulemedi` + "bulunamadı: neye baktın" yaz; tahminle veri değiştirme.
- **ARAYUZ:** `js/app.js` vb. düzelt; mümkünse `mcp__Claude_Browser__*` ile yerel önizlemede
  doğrula (doğrulayamadıysan söyle).
- **Dokunma:** `arac/uret_petek.py`, `arac/renkler.py`, `arac/girdi.py`,
  `arac/motor_onbellek.py` (TUZ — tam yeniden inşa ister). Bir madde bunlardan birini
  gerektiriyorsa (ör. yeni devlete BOYALAR rengi) değişikliği **yapma**; maddeye
  `sirada` + "TUZ gerekir: <somut diff önerisi>" yaz. Üretilen `data/*parca*.js`, `donemler.js`,
  `devletler_harita.js`, `*_ust.js` dosyalarını commit etme.
- Çok büyük "bütün X'ler için" programlarında (yüzlerce kart/künye) makul bir ilk parti yap
  (ör. 10-20 kayıt), kalanı sayıyla beyan et — hepsini yaptım deme.
- Emre'nin karar vermesi gereken tasarım seçimi çıkarsa `senin-kararin` + seçenekler
  (önerinle) yaz; o madde için veri değiştirme.

## Ölçüm ve push
- Her mantıklı grup sonrası: `py arac/denetle.py` → çıkış **0** olmalı (2 temiz değildir).
- Veri değiştiyse: `py arac/renk_olc.py`, `py arac/odak_olc.py` (kronoloji eklediysen),
  `py arac/paketle.py yenile`, `py arac/surum_damgala.py`.
- Commit: `git add -- <adlar>` + mesajı Write ile dosyaya yaz + `git commit -F <dosya> -- <adlar>`.
  Mesaj başlığı: `KUTU-<GRUP>-1014: ...`. Mesaj sonu:
  `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`
- Push: `py arac/push_kapisi.py --kim "KUTU-<GRUP>-1014"` (önce `--kuru` ile sına). Kapı
  çatışmada durursa çatışmayı çöz (başka oturumların işini ezme), yeniden dene. İhlal (1)
  hiç geçmez; düzeltmeden geçmeye çalışma. Birkaç commit'i parti parti push etmek iyidir
  (iş kaybolmasın).
- `git stash` YASAK. Geçici dosyalar SCRATCH'e. Yalnız kendi başlattığın süreci öldür.
- Bitince: `py arac/kilit.py birak-hepsi --kim "<kancanın sana verdiği ad>"` (kanca çıktısında görünür).

## Çıktı
`SCRATCH\cozum-<GRUP>.json` — her girdi maddesi için (sırayla, hiçbirini atlama):
```
{"anahtar": "...", "hukum": "cozuldu|kosu-bekliyor|senin-kararin|cozulemedi|sirada|zaten-dogru|tekrar",
 "not": "Emre'nin okuyacağı 1-3 cümle Türkçe: ne buldun, ne yaptın, kaynak",
 "commit": "kısa sha + başlık (push edildiyse)", "kaynak": "URL"}
```
Hüküm anlamları: `cozuldu` = düzeltme main'e push edildi ve haritaya yansıması koşu
gerektirmiyor (kronoloji, ek okuma, arayüz) · `kosu-bekliyor` = veri main'de, harita HAVVA tam
koşusundan sonra yansır (yerleşim `s:` değişiklikleri hep budur) · `zaten-dogru` = harita/veri
doğru, şikâyetin cevabı not'ta · `cozulemedi` = kaynak yok · `sirada` = TUZ/motor gerekir.
Dosyayı her ~10 maddede bir güncelle. Son mesajında: hüküm sayıları, push edilen commit'ler,
denetle çıkış kodu, ve yapamadıkların (kısa).
