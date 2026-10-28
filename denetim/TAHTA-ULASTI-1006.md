# TAHTA-ULASTI-1006 — `tahta.py`nin yanlış "ULAŞMIŞ" hükmü (UMIT-W50, KALEM C)

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (6 Ekim 2026, sınav koşmadan)

Kod okunarak (henüz hiçbir şey koşturulmadan) kurulan hipotez:

- Hükmü veren satır: `arac/tahta.py` `_git()` içindeki **push BAŞARISIZ dalı**
  (`origin/main ce885ec2`de satır 557-570; YARIM diff'inden sonra 645-658).
  `git log HEAD --oneline -40` çıktısında mesaj numarası geçiyorsa
  "🟢 AMA ÖLÇÜLDÜ: M-xxxx COMMIT EDİLDİ — mesaj ULAŞMIŞ" basar.
- Ölçtüğü şey: **yalnız YEREL commit'i.** Push çıkış kodunu okuyor (≠0 olduğunu
  biliyor), uzağı HİÇ okumuyor. Satırın kendi yorumu bunu söylüyor:
  *"Doğru soru ikisinde de AYNI: commit oldu mu?"* — bu, yalnız aynı depodan
  başka bir oturumun push'unun bu commit'i taşıyacağı varsayımında doğrudur.
- Yanlış pozitif koşulu: push reddedildi (non-fast-forward, hook, yetki, ağ,
  upstream yok) + commit yerelde oldu ⇒ araç "ULAŞMIŞ, TEKRAR YAZMA" der, mesaj
  kimseye gitmemiştir ve kullanıcıya elle push etmesi de SÖYLENMEZ. HAVVA'nın üç
  kez elle push etmesi bu sınıfa uyar (makineler arası topolojide aynı
  depodan "başka oturumun push'u" çoğu zaman YOKTUR).
- Öngörülen ikinci kusur (başarı dalı): push kod=0 dalı `origin/main`e bakar.
  Makine dalına (`makine/umit` vb.) push eden bir depoda mesaj `origin/main`de
  olmaz ⇒ YANLIŞ ALARM ("UZAKTA YOK"). Ölçülemezse `_var=True` ⇒ iyimser.
- Öngörülen üçüncü kusur: `TEYIT`/`KAPANIS` commit'leri aynı M-numarasını taşır;
  numara-araması o mesajların ulaşıp ulaşmadığını ayırt edemez (ilk mesajın
  izi yeter).
- Öngörülen dördüncü kusur (yan): `_git()` içindeki `pull --rebase` (satır 446 /
  534) çıkış kodu OKUNMUYOR ve çakışırsa rebase `--abort` EDİLMİYOR ⇒ depo rebase
  ortasında kalır. `C:\atlas` 6 Ekim 08:04'te tam bu hâldeydi
  (`pick 11e3dd92 TAHTA M-5755`, çakışan `TAHTA.md`+`tahta.json`, 01:28'den beri).

Sınav öngörüsü (gerçek bare uzak + iki klon):
| senaryo | ESKİ beklenen | YENİ beklenen |
|---|---|---|
| S1 push başarılı, upstream=main | ULAŞTI | ULAŞTI |
| S2 push hook'la REDDEDİLDİ | **ULAŞMIŞ (yanlış pozitif)** | ULAŞMADI |
| S3 push reddedildi ama commit başka push'la uzağa gitmiş | ULAŞMIŞ | ULAŞTI |
| S4 push başarılı, upstream=makine dalı | **UZAKTA YOK (yanlış alarm)** | ULAŞTI |
| S5 TEYIT commit'i reddedildi (numara uzakta eski mesajdan var) | **ULAŞMIŞ** | ULAŞMADI |
| S6 pull --rebase çakışır | **depo rebase ortasında kalır** | rebase geri alınır, ULAŞMADI |

## 1. ÖLÇÜM — öngörü TUTTU (6/6 sınıf)

**Temel commit: `origin/main` `ce885ec2`** + `denetim/TAHTA-GIT-YARIM-1006.diff` (W36c,
`1eb00ea0`) uygulanmış hâl. Ağaç: `C:\atlas-w50` (detached). `C:\atlas`a dokunulmadı.

- **Hükmü veren satır:** `arac/tahta.py:568-570` (`ce885ec2`; YARIM sonrası `656-658`),
  push BAŞARISIZ dalı. Kararı `:557-563` veriyor: `git log HEAD --oneline -40` içinde
  `M-xxxx` geçiyor mu.
- **Neyi ölçüyor:** push çıkış kodunu okuyor (≠0 olduğunu biliyor) ama hükmü **yalnız
  YEREL commit**ten veriyor; uzağı hiç okumuyor. Varsayım: "aynı depodan başka bir
  oturumun push'u taşır". Makine dallı topolojide bu varsayım çoğu zaman yanlış.
- **Yanlış pozitif koşulu:** push düştü (hook/non-ff/yetki/ağ/detached/upstream yok)
  + yerel commit oldu ⇒ "ULAŞMIŞ · TEKRAR YAZMA". Elle push önerisi de basılmıyor
  ⇒ mesaj sessizce yerelde kalıyor. (HAVVA'nın 3 vakasının hangi alt koşul olduğu
  ÖLÇÜLEMEDİ — HAVVA'nın git çıktısı elimde yok; sınıf bu.)

Sınav `denetim/ARAC-TAHTA-ULASTI-SINAV-1006.py` (diff'in İÇİNDE, yeni dosya) — gerçek bare uzak + klonlar, "doğru"
araçtan bağımsız (`git --git-dir <bare> log --all -p`):

| senaryo | ESKİ | YENİ |
|---|---|---|
| S1 push başarılı | ✓ ULAŞTI | ✓ ULAŞTI |
| S2 push hook'la reddedildi | ✗ **ULAŞMIŞ** (uzakta YOK) | ✓ ULAŞMADI |
| S3 ret, ama commit başka push'la gitmiş | ✓ ULAŞTI | ✓ ULAŞTI |
| S4 makine dalına başarılı push | ✗ **"kod=0 AMA UZAKTA YOK"** (yanlış alarm) | ✓ ULAŞTI |
| S5 TEYIT reddedildi | ✗ **ULAŞMIŞ** | ✓ ULAŞMADI |
| S6 pull --rebase çakışır | ✗ **depo REBASE ORTASINDA kaldı** | ✓ geri alındı, ULAŞMADI |
| S7 detached HEAD | ✗ **ULAŞMIŞ** | ✓ ÖLÇÜLEMEDİ (ULAŞTI demez) |

ESKİ: çıkış 1, 5 hata · YENİ: çıkış 0, 7/7. Gerileme: `ARAC-TAHTA-GIT-YARIM-SINAV-1006.py`
YENİ sürümde `SONUC: temiz`.

## 2. DÜZELTME — `denetim/TAHTA-ULASTI-1006.diff` (UYGULANMADI)

- Yeni `_ulasti_mi(yol, _kod)`: ① tahta dosyaları kirliyse ⇒ ULASMADI ② değilse
  onlara dokunan son commit ③ push hedefi = dalın upstream'i (`branch.<dal>.remote/
  .merge`), `origin/main` değil ④ `fetch` + `merge-base --is-ancestor`. fetch düşerse
  bayat kopya yalnız olumlu yönde kullanılır; aksi ÖLÇÜLEMEDİ. **ULAŞTI'ya varsayımla
  düşen yol yok** (eski `_var=True` gitti).
- `_git()`: iki dal da aynı ölçüme bağlandı; çıkış kodu yalnız bilgi.
  "push  : ✓ — mesaj artık HERKESTE" dizgisi korundu (okuyan araç varsa kırılmasın).
- `pull --rebase` çıkışı okunuyor; pull'dan ÖNCE depo temizken yarım işlem doğduysa
  (=bizim) `rebase --abort`. Önceden yarımsa dokunulmaz.

**SIRA:** ① `TAHTA-GIT-YARIM-1006.diff` ② `TAHTA-ULASTI-1006.diff`. Zincir temiz
ağaçta (`ce885ec2`) sınandı: ikisi sırayla uygulanır, iki sınav da temiz.
ULASTI diff'i tek başına da `apply --check` geçiyor (hunk'lar çakışmıyor) ama YARIM
diff'inin `git_durum()`/worktree düzeltmesi `_git_yarim()`i sağlamlaştırdığı için sıra
YARIM → ULASTI.

## 3. Yan bulgu — `C:\atlas` kilidinin OLASI kaynağı (hâl ölçüldü; sebep ÇIKARIM)
`C:\atlas` 6 Ekim 01:28'den beri `pick 11e3dd92 TAHTA M-5755 — HAZIR KITA 0610 0100`
rebase'inin ortasında; çakışan tam `TAHTA.md`+`tahta.json`. `_git()`teki denetimsiz
`pull --rebase` (S6) bu hâli üretir; sınavda ESKİ sürüm aynısını yeniden üretti.
(`_tazele()` kendi rebase'ini geri aldığı için tek aday `_git()`teki pull — ama o
anın ham çıktısı yok, kesin değil.)
Bugün 08:04'te açılan hazır kıtaların `yaz`ı bu yüzden çıkış 2 aldı. Kurtarma
(`rebase --abort` veya `--skip`) koordinatörün/Emre'nin kararı — dokunulmadı.

## 4. Bulunamadı / açık
- HAVVA'nın üç vakasının ham çıktısı yok ⇒ hangi alt koşul (hook/non-ff/upstream)
  olduğu ÖLÇÜLEMEDİ.
- `yaz()`ın çıkış kodu ULASMADI'da hâlâ 0 (yalnız metin basıyor). Otomasyon çıkış
  kodunu okur (§3) — ayrı kalem önerisi: ULASMADI ⇒ 1, ÖLÇÜLEMEDİ ⇒ 2.
