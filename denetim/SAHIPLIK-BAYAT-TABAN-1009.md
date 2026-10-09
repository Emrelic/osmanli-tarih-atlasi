# SAHIPLIK-BAYAT-TABAN-1009 — `_sahiplik_uygula.py`ye "YAMA TABANI BAYAT ⇒ DUR" kapısı

UMIT yazıcı · taban origin/main `36186769` · teslim DİFF (commit/push YOK).
Diff: `denetim/SAHIPLIK-BAYAT-TABAN-1009.diff` — temiz origin/main ağacında `git apply --check` ✓ (LF, BOM yok, CR 0).

YENİ DOSYALAR: denetim/ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py
DEĞİŞEN DOSYALAR: arac/_sahiplik_uygula.py · denetim/ARAC-SAHIPLIK-KAPI-SINAV-1006.py

## Tasarım — taban beyanı (git apply'ın üç-yollu sorusu)
- **Kayıt başına `taban:`** — yamanın ÜZERİNE YAZDIĞI her alan (d·s·v·isg·m) için, yamanın üretildiği andaki değer:
  `{ad:"Budin", s:[…hedef…], taban:{s:[…üretim anındaki s…]}}`. Alan tabanda yoksa `null`. `taban` YAZILMAZ, yalnız kapı okur.
  Geriye uyumlu: eski yamalar ayrıştırılır, yalnız kapı onlar için ÖLÇÜLEMEDİ der.
- **`--taban <rev>`** — beyansız yamanın taban değerleri o commit'teki yerleşim dosyalarından (`git show`, motorun okuyucusu
  `girdi._cevir`) okunur. Kayıt beyanı varsa beyan önceliklidir. `--taban-rapor <yol>` listeyi JSON yazar.
- Üç yol (alan başına, YALNIZ yazılacak kayıtlarda): hedef = bugün ⇒ soru yok · taban = bugün ⇒ TAZE · taban ≠ bugün ⇒ **BAYAT TABAN**.
  Taban yok ⇒ **ÖLÇÜLEMEDİ**. Aynı ada iki yama FARKLI taban beyan ederse ⇒ ÖLÇÜLEMEDİ. Rev'de kayıt yok/çift ⇒ ÖLÇÜLEMEDİ.
- `kaynak/bos/neden/kur` (yalnız boşsa dolar) ve `not` (eklenir) ezmediği için sorulmaz.
- Kuru koşuda da sorulur; liste ADIYLA (`TABAN-BAYAT  <ad>  [dosya · alan]  tabanda var/bugün YOK … | bugün var/tabanda YOK …`).
- Geri alma kapısının "ölçemedi"si artık TABAN KAPISI'nın bayatını gizlemez: hüküm en sonda birleşir (ihlal > ölçülemedi).

### ⚠️ Çıkış kodu — koordinatör hükmünden SAPMA, bilerek
Hüküm "ölçülemedi = çıkış 2" diyordu. Bu araçta 2 zaten **BAYAT YAMA (ihlal)**, 3 zaten **kapı ölçemedi**; tablo projenin
0/1/2 düzeninden önce kuruldu. 2'yi ölçülemediye vermek mevcut sınavı (KAPI-SINAV-1006 S1/S3) ve otomasyonu kırardı.
⇒ **BAYAT TABAN = 2 · ÖLÇÜLEMEDİ = 3** (ikisi de "hiçbir dosya yazılmadı"; 0 asla). Kodu 2'ye çevirmek istenirse tek satır,
ama önce aracın kod tablosu baştan değişmeli — karar koordinatörün.

## Ne ölçtüm (sayılarla)
**GERÇEK vaka — main'deki karantinalı Z5 gövdesi** (`data/yer_yama_1923_1945.js`, 3.982 kayıt; taban `67e9ec9d`, dosya başlığındaki
"temel 67e9ec9d"den), yalnız KURU koşu, geçici worktree:
| koşu | çıkış | sonuç |
|---|---|---|
| yeni araç `--taban 67e9ec9d` | **2** | değişim 3.975 · **BAYAT TABAN 76 kayıt (76 alan)** · ölçülemedi 0 · rev okunamayan dosya 0 |
| yeni araç, `--taban` yok | **3** | 3.975 kayıt ÖLÇÜLEMEDİ (4.068 alan) — "temiz" denmedi |
| ESKİ araç (origin/main) | **0** | kusurun ölçümü: GÖRMÜYORDU |
- Budin ADIYLA: `tabanda var/bugün YOK: {"d":"avusturya","f":"1527-09-23",…}` / bugün `macaristan-habsburg`. Ankara · Harput da listede.
- **76 ile 83'ün ilişkisi — tam açıklandı:** 76 + 7 = 83. Kalan 7'si (Arpaçay, Ayn el-Ğazâle, Beri, Digor, Iğdır, Küçükperveli,
  Tulmeyse) araçta zaten **KAPSAM DARALDI** ile ATLANIYOR — yazılmadıkları için taban kapısına gelmiyorlar. Yalnız araçta olup 83'te
  olmayan: **0**. Yani kapı, koordinatörün "83'ün 76'sı sessizce geri alınırdı" sayısını BİREBİR ve ADIYLA buluyor.
- Bağımsız kâhin (node ile JS'in kendi okuyuşu, araçtan bağımsız): bayat **83**, belirsiz 0; araç kümesi = kâhin − ATLANAN, fark 0.
- (83 listesi md'de kısaltılmış adlarla; "Bihaç" ↔ "Bihaç (Bihać)" gibi 27 ad önek eşleştirmesiyle eşlendi.)

**Sınav** `denetim/ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py` — **28/29** (tek KALDI aşağıda, dışarıdan):
- Sentetik (geçici `git init`): T1 taze taban → 0 + yazıldı · T2 bayat taban → 2, ADIYLA, dosya bayt bayt aynı (kuru+`--yaz`) ·
  T3 beyansız → 3, ADIYLA · T4 beyansız+`--taban <eski c1>` → 2 / `--taban HEAD` → 0 / ESKİ araç → 0 (Z5'in sentetik eşi) ·
  T5 hedef=bugün beyansız → 0 · T6 bayat+beyansız → 2, iki liste de basılı · T7 çözülemeyen rev → 3 · T8 iki FARKLI taban beyanı → 3.
- Gerçek: R1a-e · R2 kâhin · R3 · R4 · R5 (76∪7=83) · R6 data/ yazılmadı — hepsi GEÇTİ.
- Gerileme: `ARAC-SAHIPLIK-KAPI-SINAV-1006.py` **17/17** (öncesi de 17/17).

## Ne bulamadım / dikkat
- **SON `C:\atlas git status` KALDI — sınavdan değil.** Koşu sırasında (21:04-21:05) `C:\atlas\.claude\commands\kita.md` ve
  `oturumlar/HAZIR-KITA.md` başka bir oturumca değiştirildi (o dakikada `kita` beceri tanımı da değişti). Sınav C:\atlas'a yalnız
  `git status` sorar; o iki dosyaya DOKUNULMADI, geri de alınmadı. `C:\atlas-umit` önce/sonra AYNI (`?? denetim/ZAMAN-Z6-tdv/`).
- **Davranış değişikliği (bilinçli):** taban beyansız HER yama artık çıkış 3. Mevcut 120 `yer_yama*.js`nin hiçbiri `taban:` taşımıyor.
  Eski KAPI-SINAV-1006 değişmeden koşulsa S2 "taze --yaz → 0" **3** alıyor (ölçüldü: 15/17) — bu yüzden S2'nin yamasına `taban:` eklendi.
- `ARAC-SAHIPLIK-UYGULA-SINAV-1008.py` main'de KOŞULAMIYOR (çıkış 2): `denetim/ZAMAN-Z5-1008-yer_yama_1923_1945.js` main'de yok
  (yalnız makine/umit'te). Ayrıca KOL B'si "Z5 → çıkış 0" bekliyor; o beklenti tam bu kusurdu ⇒ dosya geldiğinde B1 bilerek kalır.
- **Üretici main'de DEĞİL:** `denetim/ARAC-ZAMAN-Z5-OLC-1008.py` yalnız makine/umit'te ⇒ diff'e konmadı. Gereken değişiklik
  (yeniden üretimde): yazım satırında `{k: x[k] for k in ("ad","s","isg","v","not")}`e `"taban": {a: r["_"+a] for a in ("s","isg","v")
  if a in x}` eklenmeli (`r["_s"]` vb. üretim anındaki diziler; HS kayıtları için de aynı). Üretici diziyi çalışma ağacından okuyorsa
  ve ağaç kirliyse taban rev'den farklı olur — kayıt beyanı bu yüzden rev'den güvenilirdir.
- **Çakışma uyarısı:** makine/umit'teki `denetim/SAHIPLIK-DOSYA-DOKUMU-1009.diff` bu diff'in ÜSTÜNE düz uygulanmıyor; `git apply -3` ile
  TEK çakışma (geri alma kapısının `except` bloğu: o `dosya_dokumu(...)` ekliyor, bu `_kapi_olcmedi` bayrağına çeviriyor). Elle 5 satır.
- Süre: Z5 kuru koşusu ~15-17 dk (geri alma kapısının 3.975 `git log -L`'i); sınavın gerçek bölümü ~50 dk. `--gercek-yok` ile ~1 dk.

## Ne istiyorum
1. Diff'in main'e alınması (koordinatör). 2. Çıkış kodu hükmü: 2/3 (bu araçta) mı kalsın, yoksa aracın kod tablosu baştan 0/1/2'ye mi
   çevrilsin? 3. Z5 gövdesi yeniden üretilirken üreticiye `taban:` yazdırılsın (yukarıdaki satır) — kapı o zaman `--taban`sız ölçer.
4. Beyansız eski yamalar için politika: hepsi artık çıkış 3; inmiş olanlar zaten glob dışına taşınacaktı (koordinatör işi).

## Temizlik
Worktree'ler `C:\atlas-umit-kapi` ve `C:\atlas-umit-kapi-chk` kaldırıldı; sınavın geçici worktree'leri kendini kaldırdı. git stash kullanılmadı.
`--yaz` gerçek veride KOŞTURULMADI (yalnız sınavın geçici `git init` depolarında).
