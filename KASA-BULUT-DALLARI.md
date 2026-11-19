# Bulut dalları — KASA'nın rutini (Emre, 19 Kasım 2026)

Bulutta (claude.ai/code) geliştirilen iş `main`e doğrudan girmez. Bulut oturumu **yazma makinesi**
gibidir (UMIT kipi): dalda commit'ler, `origin`e iter, KASA birleştirip push kapısından geçirir.

## Bulut oturumunun yaptığı / yapmadığı
- Yapar: araştırma, yazma, tek konulu veri/kod işi; yalnız `claude/<ad>` dalına commit + push.
- Yapmaz: `main`e push, `push_kapisi.py`, tam `denetle`, `paketle yenile`, `surum_damgala`, koşu
  (`uret_petek.py`), üretilmiş dosyalar (`devletler_harita.js`, `donemler.js`, `paket_*.js`,
  `*_parca*.js`), PR açma.
- Dosya kilitleri (`kilit.py`) yalnız bir makineyi görür; bulut diğer makinelerin kilidini görmez.
  Bu yüzden bulut oturumu başka makinelerin üstünde çalıştığı dosyalara yazmaz (konu/dosya
  paylaşımı Emre'yle yapılır).
- Oturum bitmeden commit + push zorunlu (konteyner geçicidir). Push 403 verirse GitHub bağlantısı
  kopmuştur: Emre claude.ai/connect-github'dan yeniden bağlar.
- İş sonunda dal adını ve bir satır özeti Emre'ye yazar; Emre KASA'ya iletir. Bekleyen karar
  `BORC-DEFTERI.md` A bölümüne yazılır.

## KASA rutini (her bulut dalı için)
1. `git fetch origin "refs/heads/claude/*:refs/remotes/origin/claude/*"` ve
   `git branch -r --list "origin/claude/*"` — bekleyen dalları listele.
2. Her dal için **ayrı worktree**: `EnterWorktree` (ad: dalın kısa adı), sonra
   `git merge --ff-only` yerine dalın commit'lerini `git cherry-pick`/`git reset --hard origin/claude/<ad>`
   ile o worktree'ye getir. Ana checkout'a dokunma.
3. İçeriği oku: `git diff origin/main...origin/claude/<ad> --stat`. Üretilmiş dosya, `tuz` dosyası
   (`uret_petek.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`) ya da `main`i bozacak değişiklik
   varsa **birleştirme**, Emre'ye bildir.
4. Veri/site değiştiyse: `py arac/paketle.py yenile` + `py arac/surum_damgala.py`.
5. `py arac/push_kapisi.py --kim "KASA"` (önce `--kuru`). Çıkış 4 = gerçek çatışma: çöz ya da dalı
   sahibine geri gönder. Çıkış 1 hiç geçmez.
6. Geri okuma temizse `ExitWorktree` `remove`; birleşen `origin/claude/<ad>` dalını sil
   (bir günden uzun yaşamaz).
7. Sonucu Emre'ye bildir: hangi dal, hangi commit'ler, ölçüm sayıları, kapıdan geçti mi.

## Günlük kontrol
KASA'nın günlük koordinasyon oturumu başında `origin/claude/*` dallarını listeler; bir günden
eski dal varsa Emre'ye "bekleyen bulut dalı" diye söyler.
