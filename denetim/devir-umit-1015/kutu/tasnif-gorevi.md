# KUTU TASNİF GÖREVİ (salt okunur)

Osmanlı Tarih Atlası deposu. Kullanıcı Emre'nin kutu uygulamasındaki hata paketlerinin
AÇIK maddelerini tasnif ediyorsun. **Hiçbir depo dosyasını değiştirme, commit atma, push yapma,
kutu klasörüne yazma.** Yalnız çıktı dosyana (hukum-XX.json) yazarsın.

## Ağaç
Güncel `origin/main` kopyası: `C:\atlas\.claude\worktrees\kutu-cozum` — ölçümü BURADAN yap
(ana checkout `C:\atlas` 73 commit geride, oradan okuma). Önce
`C:\atlas\.claude\worktrees\kutu-cozum\CLAUDE.md`, sonra gerekiyorsa `VERI-YAPISI.md`'yi oku.
Ortamda `python` değil `py`. Bash'te heredoc/backtick kullanma; betik gerekiyorsa
scratchpad'e (SCRATCH) `Write` ile yaz, `py <yol>` ile koştur.

## Girdi
`parca-XX.json`: her madde `anahtar`, `damga` (şikâyet zamanı), `metin` (Emre'nin yazdığı),
`gorseller` (ekran görüntüsü yolları — Read aracıyla bakabilirsin; alt şeritte tarih/koordinat
olur), `onceki_hukum`, `onceki_not` (daha önce bir oturumun yazdığı hüküm).

## Her madde için yap
1. Şikâyeti anla (görsel gerekiyorsa bak — ama her görsele bakma zorunluluğu yok; metin
   yetiyorsa yetsin).
2. Güncel ağaçta ölç: ilgili `data/*.js` kaydı, kronoloji maddesi (`data/olaylar*.js`,
   `data/kronoloji_sinir*.js`), `js/app.js` davranışı, `git log --oneline -S"<ifade>"` ile
   sonradan yapılmış düzeltme. `denetim/` altında bu paketin/maddenin adıyla geçen hüküm
   dosyalarına da bak (`grep -rl "parti-emrelic-00NN" denetim` ya da "0NN" + "H-00MM").
3. Sınıf ver (tek):
   - `BAYAT` — şikâyet edilen şey güncel ağaçta zaten düzelmiş. KANIT şart (dosya:satır ya da commit).
   - `VERI` — `data/` altında elle yazılan dosyada düzeltme gerekli (yerleşim `s:` dönemi,
     künye f/t, yeni yerleşim noktası, vb.). Hangi dosya, hangi kayıt, önerilen değişiklik.
   - `KRONO` — haritada görünen kırılmanın kronoloji maddesi yok / tarih yanlış / odak yanlış
     (Değişmez 2). Dosya + önerilen madde.
   - `ARAYUZ` — `js/app.js`, `css/`, `index.html`, odak/kamera, kategori, sefer oku, gösterim.
   - `MOTOR` — `arac/uret_petek.py`/`renkler.py`/`girdi.py` mantığı (sürtünmeli yürüyüş
     5/7/10 gün, katman üstüste binme, enklav rötuşu vb.). Bunlar dondurulmuş dosyalar.
   - `KOSU` — gereken veri zaten main'de; yalnız HAVVA'daki tam koşudan sonra haritaya yansır.
   - `ARASTIRMA` — "doğru mu, teyit edelim" sorusu; kaynak (TDV birincil) gerekli. Eğer
     cevabı güvenle bulabildiysen `cevap` alanına yaz (kaynak URL'siyle); sonra gereken
     düzeltme varsa onu da `oneri`ye yaz.
   - `EMRE` — gerçekten Emre'nin kararı gereken tercih (tasarım/kapsam). Soruyu tek cümle yaz.
   - `TEKRAR` — başka bir maddenin aynısı (`tekrar_of` alanına anahtar).
4. Emin değilsen `guven: "dusuk"` yaz; uydurma. "Ölçülemedi" ≠ "bayat".

## Çıktı
`SCRATCH\hukum-XX.json` — liste, girdi sırasıyla, her madde:
```
{"anahtar": "...", "sinif": "VERI", "ozet": "tek cümle ne istendiği",
 "kanit": "ne ölçtün, dosya:satır / commit", "dosyalar": ["data/yerlesimler_x.js"],
 "oneri": "somut değişiklik (yoksa boş)", "cevap": "ARASTIRMA cevabı (yoksa boş)",
 "kaynak": "URL (yoksa boş)", "guven": "yuksek|orta|dusuk", "tekrar_of": ""}
```
Çıktıyı her ~20 maddede bir dosyaya yaz (iş yarıda kesilse de kalsın). Bitince son mesajında
yalnız sınıf sayılarını ve en önemli 5 bulguyu ver (kısa).
