---
name: postit
description: Haritadaki post-it notlarından (GitHub Issues, etiket harita-notu) sahipsiz BİR notu bu oturuma alır; not arşive gidene kadar bu oturumun uhdesinde kalır. Önceki Claude yorumlarını okuyup devralır, araştırır, düzeltir, raporu ya da soruyu post-it'in altına yazar ve Emre'nin cevabını bekler. Emre "/postit", "/postit 12" ya da aynı oturumda "devam" yazınca çalışır. 1 not = 1 oturum; not arşivlenince oturum çöpe atılır.
---

# /postit — bir post-it, bir oturum

Bu oturum **tek bir notun sahibidir** ve not arşive gidene kadar sahibi kalır. Cevap yazmak notu
bırakmaz. Koordinatör yoktur, koordinasyonu etiketler yapar: `oturum:<id>` notun sahibini,
`son:claude|emre` sıranın kimde olduğunu gösterir.

## 1 · Notu al (ya da kendi notuna dön)

Kendi modelini bil (sistem isteminde yazar) ve `--model`e ver: `opus` ya da `sonnet`.
```bash
py arac/not.py al --model sonnet            # bu oturumun notu varsa onu, yoksa sıradaki sahipsiz not
py arac/not.py al 12 --model sonnet         # Emre numara verdiyse
py arac/not.py al 12 --zorla --model opus   # Emre "/postit 12 zorla" dediyse: başka oturumdan devral
```
- Bu oturumun zaten bir notu varsa `al` YENİ NOT ALMAZ, kendi notunu basar ("— devam"). Emre
  aynı oturumda "devam" ya da yeniden `/postit` yazdıysa yaptığın budur: notu oku, son yoruma bak.
- `--zorla` YALNIZ Emre "zorla" yazdıysa ve yalnız numaralı notta kullanılır.
- Sahipsiz not, son yazan kim olursa olsun alınır. Eski notlarda önceki Claude yorumları vardır;
  onları oku ve **kaldığı yerden devral**. Önceki yorum bir düzeltme önerdiyse yapıldı mı diye
  ölç; yapılmadıysa yap. Emre'nin son yorumu neyi soruyor ya da neyi onaylıyorsa iş odur.
- Önceki Claude yorumu YALNIZ Emre'nin verebileceği bir kararla bittiyse ve Emre cevap vermediyse:
  işe girişme, soruyu kısaltıp şıklı olarak yeniden sor (3. adım, `karar-bekliyor`) ve bekle.
- Çıkış **3** → alınacak not yok. Emre'ye tek satırla söyle, 3 beep, bitir.
- Çıkış 0 → çıktı notun TAMAMIDIR (metin, bağlam JSON'u, bütün yorumlar). Bağlamı yeniden kurma.
- Başka oturumun notuna **dokunma**. Bu oturumda ikinci not alma.

### Model kapısı (Sonnet oturumu için)
Notu okuyunca türüne bak. **Motor/geometri notu** ise (zikzak, sivri çıkıntı, ince girinti/koridor,
üçgen/üçken toprak, katmanların üst üste binmesi, ızgara izi, ya da önceki Claude yorumu teşhisi
"motor" koymuşsa) işe GİRİŞME:
```bash
py arac/not.py opus <no>
```
Not `model:opus` etiketini alır ve bırakılır, yorum yazılmaz. Sitede 🧠 Opus rozeti çıkar. Emre'ye
tek satır: `#<no> motor notu — Opus oturumuyla aç: /postit <no>`. 3 beep, bitir.
Tarih/sahiplik/kaynak soruları, yerleşim eksikliğinden doğan boşluklar ve basit arayüz işleri
Sonnet'te kalır. Sonnet işin ortasında motora dayandığını görürse de aynısını yapar: o ana kadarki
bulguyu kısa bir dosyaya yazıp `py arac/not.py opus <no> --dosya <yol>`. Bulgu yoruma girer ama
sıra Claude'da kalır, Opus oradan devralır. `yanit` KULLANMA, çünkü sırayı Emre'ye geçirir.

### Oturumun adını göreve göre değiştir
Notu alıp görevi anlayınca (model kapısından geçtiysen) oturumu yeniden adlandır. Emre kenar
çubuğunda hangi oturumun hangi notta olduğunu adından görsün:
`mcp__ccd_session_mgmt__set_session_title` · `session_id: "self"` ·
`title: "#<no> <yer/konu> <yıl> — <iş>"` (≤ 50 karakter, Türkçe), örn.
`#3 Berat 1281 — sahibi kim` · `#16 Karesi–Saruhan arası boşluk 1334` · `#13 Harita yazıları büyük`.
Araç yüklü değilse önce `ToolSearch` (`select:mcp__ccd_session_mgmt__set_session_title`).
Uygulama onay isterse ya da reddederse ısrar etme, işe devam et. "Devam" turunda yeniden adlandırma.

## 2 · Araştır ve düzelt

CLAUDE.md kuralları aynen geçerlidir (kaynak kuralı, değişmezler, worktree, kilit, push kapısı).
- Dosya değiştireceksen önce `EnterWorktree` (ad: `postit-<no>`). Yalnız araştırıp cevap
  vereceksen worktree açma.
- "Harita yanlış" notunda ilk soru: *orada yerleşim noktası var mı?* (petek motoru)
- Veri değiştiyse: `denetle.py` → `renk_olc.py` → `paketle.py yenile` → `surum_damgala.py` →
  `push_kapisi.py --kim "oturum-<id>"`. Haritaya yansıması HAVVA koşusunu bekler, raporda söyle.
- Motor dosyalarına (`uret_petek.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`) dokunma;
  motor çaresi gerekiyorsa öner ve sor.
- Token tasarrufu: geniş tarama yok, alt ajan yok (gerçekten gerekmedikçe), dosyanın yalnız ilgili
  kısmını oku.

## 3 · Raporu / soruyu post-it'e yaz

Metni `Write` ile scratchpad'e yaz (heredoc yasak), sonra:
```bash
py arac/not.py yanit <no> --dosya <yol> --durum <durum>
```
`--durum`: `cozuldu` (düzelttim) · `dogru-bulundu` (harita doğruymuş) · `karar-bekliyor` (sana sorum var).
`son:claude` etiketi kendiliğinden konur, sıra Emre'ye geçer. **`--birak` KULLANMA**: not
arşive kadar bu oturumdadır.

Rapor kısa, okur dilinde:
1. **Ne buldum** — kaynakla (TDV bağlantısı), sayıyla.
2. **Ne yaptım** — dosya + commit kısa kimliği; haritada ne zaman görünür (koşu gerekiyorsa söyle).
   Hiçbir şey değiştirmediysen "değişiklik yok" yaz.
3. **Sorum** (varsa) — TEK soru, şıklı (a/b), önerin hangisi. Soru yoksa bu bölümü yazma.

## 4 · Turu bitir ve bekle

- `py arac/kilit.py birak-hepsi --kim "oturum-<id>"` · worktree açtıysan push kapısından geçtikten
  sonra `ExitWorktree` `remove` · arka planda süreç bırakma. (Bunlar her turun sonunda yapılır;
  notun sahipliği ise sürer.)
- 3 beep. Emre'ye tek satır:
  - soru sorduysan: `#<no> → sorum post-it'te. Cevabını sitede yaz, sonra bu oturuma "devam" de.`
  - çözdüysen: `#<no> → <durum>. Uygunsa sitede "Kaldır (arşivle)"e bas, sonra bu oturumu silebilirsin.`

Arşivi yalnız Emre yapar (`arsivle`'yi yalnız o isterse çağır). Oturum silinir ya da takılırsa Emre
sitede "🔓 Sahipsiz bırak"a basar; 7 gün hiç ses vermeyen oturumun notu da kendiliğinden düşer.
