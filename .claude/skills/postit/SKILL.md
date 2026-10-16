---
name: postit
description: Haritadaki post-it notlarından (GitHub Issues, etiket harita-notu) kimsenin almadığı BİR notu bu oturuma alır, araştırır, düzeltir, raporu ya da soruyu post-it'in altına yazar, notu bırakır ve biter. Emre "/postit" ya da "/postit 12" yazınca çalışır. 1 not = 1 oturum; oturum iş bitince çöpe atılır.
---

# /postit — bir post-it, bir oturum

Bu oturum **tek bir notu** çözer ve kapanır. Hafıza oturumda değil post-it'in yazışmasındadır:
Emre cevap yazınca not yeniden boşa düşer, bir sonraki `/postit` oturumu yazışmayı okuyup devam eder.
Koordinatör yoktur; koordinasyonu etiketler yapar (`oturum:<id>` = alındı, `son:claude|emre` = sıra kimde).

## 1 · Notu al

Kendi modelini bil (sistem isteminde yazar) ve `--model`e ver: `opus` · `sonnet`.
```bash
py arac/not.py al --model sonnet            # sıradaki boş not (Sonnet `model:opus` notlarını atlar)
py arac/not.py al 12 --model sonnet         # Emre numara verdiyse
py arac/not.py al 12 --zorla --model opus   # Emre "/postit 12 zorla" dediyse: son söz Claude'da olsa da al
```
`--zorla` YALNIZ Emre "zorla" yazdıysa ve yalnız numaralı notta kullanılır.
- Çıkış **3** → alınacak not yok. Emre'ye tek satırla söyle, 3 beep, bitir.
- Çıkış 0 → çıktı notun TAMAMIDIR (metin, bağlam JSON'u, bütün yorumlar). Bağlamı yeniden kurma,
  `oku` ile bir daha çekme. Önceki Claude yorumları varsa **kaldığı yerden devam et**; Emre'nin son
  yorumu neyi soruyor ya da neyi onaylıyorsa iş odur.
- Başka oturumun notuna (`oturum:` etiketi senin değil) **dokunma** — `al` bunu zaten yapmaz.
- Bu oturumda ikinci not alma. Bitince bitir.

### Model kapısı (Sonnet oturumu için)
Notu okuyunca türüne bak. **Motor/geometri notu** ise — zikzak, sivri çıkıntı, ince girinti/koridor,
üçgen/üçken toprak, katmanların üst üste binmesi, ızgara izi, ya da önceki Claude yorumu teşhisi
"motor" koymuşsa — işe GİRİŞME:
```bash
py arac/not.py opus <no>
```
(not `model:opus` alır, bırakılır, yorum yazılmaz; sitede 🧠 Opus rozeti çıkar). Emre'ye tek satır:
`#<no> motor notu — Opus oturumuyla aç: /postit <no>`. 3 beep, bitir.
Tarih/sahiplik/kaynak soruları, yerleşim eksikliğinden doğan boşluklar ve basit arayüz işleri
Sonnet işin ortasında motora dayandığını görürse de aynısını yapar; o ana kadarki bulguyu
boşa atmamak için kısa bir dosyaya yazıp `py arac/not.py opus <no> --dosya <yol>` (bulgu yoruma
girer ama sıra Claude'da kalır, Opus oradan devralır). `yanit` KULLANMA — sırayı Emre'ye geçirir.

## 2 · Araştır ve düzelt

CLAUDE.md kuralları aynen geçerlidir (kaynak kuralı, değişmezler, worktree, kilit, push kapısı).
- Dosya değiştireceksen önce `EnterWorktree` (ad: `postit-<no>`). Yalnız araştırıp cevap
  vereceksen worktree açma.
- "Harita yanlış" notunda ilk soru: *orada yerleşim noktası var mı?* (petek motoru)
- Veri değiştiyse: `denetle.py` → `renk_olc.py` → `paketle.py yenile` → `surum_damgala.py` →
  `push_kapisi.py --kim "oturum-<id>"`. Haritaya yansıması HAVVA koşusunu bekler — raporda söyle.
- Motor dosyalarına (`uret_petek.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`) dokunma;
  motor çaresi gerekiyorsa öner ve sor.
- Token tasarrufu: geniş tarama yok, alt ajan yok (gerçekten gerekmedikçe), dosyanın yalnız ilgili
  kısmını oku.

## 3 · Raporu / soruyu post-it'e yaz ve bırak

Metni `Write` ile scratchpad'e yaz (heredoc yasak), sonra:
```bash
py arac/not.py yanit <no> --dosya <yol> --durum <durum> --birak
```
`--durum`: `cozuldu` (düzelttim) · `dogru-bulundu` (harita doğruymuş) · `karar-bekliyor` (sana sorum var).
`--birak` notu serbest bırakır; `son:claude` etiketi kendiliğinden konur → sıra Emre'ye geçer.

Rapor kısa, okur dilinde:
1. **Ne buldum** — kaynakla (TDV bağlantısı), sayıyla.
2. **Ne yaptım** — dosya + commit kısa kimliği; haritada ne zaman görünür (koşu gerekiyorsa söyle).
   Hiçbir şey değiştirmediysen "değişiklik yok" yaz.
3. **Sorum** (varsa) — TEK soru, şıklı (a/b), önerin hangisi. Soru yoksa bu bölümü yazma.

## 4 · Kapan

- `py arac/kilit.py birak-hepsi --kim "oturum-<id>"` · worktree açtıysan `ExitWorktree` `remove`
  (önce push kapısından geçmiş olmalı) · arka planda süreç bırakma.
- 3 beep. Emre'ye tek satır: `#<no> → <durum>. Bu oturumu silebilirsin.`

Oturum yarıda kalırsa not kendiliğinden düşer (etiket 3 saat sonra bayat sayılır), elle bir şey yapmak gerekmez.
