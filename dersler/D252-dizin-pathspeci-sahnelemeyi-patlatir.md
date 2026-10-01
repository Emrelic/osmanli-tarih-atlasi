# D252 — Dizin pathspec'i sahnelemeyi patlatır; `git status --porcelain` bir DOSYA LİSTESİ DEĞİLDİR

**Tarih:** 30 Eylül / 1 Ekim 2026 · **Ölçen:** koordinatör (YILDIRIM BAYEZIT), hatayı da o yaptı
**Bağlı kural:** `CLAUDE.md §7` commit · `D223` (pathspec commit'te de tekrarlanır)

## NE OLDU

Koordinatör commit edilecek dosyaları toplamak için `git status --porcelain`
çıktısını kullandı ve onu `git add`e verdi.

🔴 **`git status --porcelain` izlenmeyen bir DİZİNİ tek satır olarak verir.**

```
?? agy/
?? denetim/DEVLET-500-1000-tdv-onbellek/
?? ClaudEmre-kutu/
```

Bu üç satır "üç dosya" değil **binlerce dosyadır.** Sahnelenmesi beklenen
**327** dosya yerine **3530** dosya sahnelendi. Üstüne git şunu bastı:

```
adding embedded git repository: ClaudEmre-kutu
```

— yani kendi `.git`ini taşıyan bir depo, içeriğiyle değil bir **gitlink**
olarak alınıyordu; klonlarda **boş** görünecekti.

Commit `git reset` ile geri alındı, pathspec dosya dosya yeniden kuruldu,
üç kaçak sınavı eklendi.

## NİÇİN KURAL ZATEN VARDI VE YİNE OLDU

`D223` *"dizin pathspec'i ve `git add -A` YASAK"* diyor ve bu YAZILIYDI.
İhlal bilgisizlikten değil **acele**den oldu: `--porcelain` çıktısı bir liste
GİBİ görünür, satır satırdır, makine okunabilir. Gözle bakan onu dosya listesi
sanır. Yani tuzak aracın çıktısının **biçimindedir**, kuralın eksikliğinde değil.

📌 Ve ikinci bir yüzü var: `--porcelain` dizini tek satır verdiği için
**büyüklüğü de saklar.** 890 dosyalık bir ağaç ile 3 dosyalık bir klasör
ekranda aynı genişlikte görünür.

## KURAL

1. **Sahnelenecek dosyalar ASLA `git status` çıktısından türetilmez.**
   Adlar elle yazılır: `git add -- <ad1> <ad2>` · commit'te AYNI pathspec
   tekrarlanır · `git show --name-only` ile doğrulanır.
2. **Şüphe varsa ÖNCE KURU KOŞU:** `git add -An -- <yol>` hiçbir şey
   sahnelemez, yalnız ne sahnelenecekti onu basar. Bedeli sıfır.
3. İzlenmeyen bir ağacı gerçekten dışarıda tutmak gerekiyorsa çare `.gitignore`dur
   — **kural insanın hafızası, ignore makinenin hafızası.**

## İKİ YÖNLÜ SINAV — 1 Ekim 2026 gecesi, `agy/` üzerinde koşuldu

`agy/` ignore edilirken aynı sınav kuruldu ve bu DERSİN kendi kuralını sınadı:

```
YON 1  hassas dosya ignore EDILMELI
       git check-ignore -v "agy/chrome_profile_cold/Default/Login Data"
       → .gitignore:245:/agy/*                              ✓
YON 2  .py olcum betikleri ignore EDILMEMELI
       git check-ignore -v agy/olcum_agy1.py → !/agy/*.py    ✓
EN SERT  git add -An -- agy/
       ONCE  890 dosya
       SIMDI 3 dosya (olcum_agy1.py · test_cdp.py · test_prof_parse.py)
```

🔴 Ve o 890 dosyanın içinde **33 adet `Login Data` · `History` · `Web Data` ·
`Local State`** vardı — üç Chrome profili, 229 MB. Depo HERKESE AÇIK
(GitHub Pages kaynağı). Yani bu dersin bedeli "gereksiz 3530 dosya" değil,
**tarayıcı kimlik deposunun yayınlanması** olabilirdi.
✓ Ölçüldü: geçmişe hiç girmemiş (`git log --all -- agy/` → 0 commit).
Sızıntı değil, **ramak kala**.

## BAĞLI

`D223` (pathspec) · `D241` (commitlenmemiş kayıt uzak makinede yalan söyler) ·
`D250` (kör ölçümün kaydı) · `.gitignore:200-246` (gömülü depo + `agy/` gerekçeleri)
