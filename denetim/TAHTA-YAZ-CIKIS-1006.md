# TAHTA-YAZ-CIKIS-1006 — `yaz()` çıkış kodu teslimi söylesin (UMIT-W50b)

Koordinatör onayı (W50 teslimi `26c4ffc7`, öneri ③): ULAŞMADI → 1, ÖLÇÜLEMEDİ → 2.
**Temel commit: `origin/main` `c779df9a`.** Zincir: ① `TAHTA-GIT-YARIM-1006.diff`
② `TAHTA-ULASTI-1006.diff` ③ **`TAHTA-YAZ-CIKIS-1006.diff`** (bu). UYGULANMADI.

## 0. Öngörü (koşmadan önce)
W50b öncesi sürüm (YARIM+ULASTI) Y2 ve Y3'te **0** döner (koşulsuz `return 0`), Y1'de 0.
Yeni sürüm Y1 0 · Y2 1 · Y3 2; "yazıldı" satırı üçünde de basılır. S1-S7 değişmez.

## 1. Ölçüm — öngörü tuttu
Sınav `denetim/ARAC-TAHTA-ULASTI-SINAV-1006.py`ye üç senaryo eklendi (fikstür 5): gerçek
bare uzak; `tahta.py` fikstür deposuna kopyalanır (`KOK` = fikstür) ve `yaz` **alt
süreçte** koşar — çıkış kodu tam olarak `duyur.py`nin gördüğü kod.

| senaryo | W50b ÖNCESİ | YENİ |
|---|---|---|
| Y1 push başarılı | 0 ✓ | 0 ✓ |
| Y2 push hook'la reddedildi | **0 ✗** | 1 ✓ |
| Y3 detached HEAD (ölçülemedi) | **0 ✗** | 2 ✓ |
| S1-S7 (W50) | 7/7 | 7/7 |

Önce: çıkış 1, 2 hata · Yeni: çıkış 0, 10/10. `ARAC-TAHTA-GIT-YARIM-SINAV-1006.py`: temiz.
Zincir temiz `c779df9a` ağacında sırayla `--check` + uygulandı; iki sınav temiz.

## 2. Değişiklik (`arac/tahta.py`, +21 −2)
- `_git()` artık hükmü DÖNDÜRÜR (`ULASTI`/`ULASMADI`/`OLCULEMEDI`). İstisna yolunda
  hüküm tahmin edilmez, `_ulasti_mi()` ile ölçülüp basılır.
- `yaz()`: `return {"ULASTI": 0, "ULASMADI": 1}.get(_hal, 2)`.
- `"%s yazıldı …"` satırı (`tahta.py:1040`, eskiden 955 civarı) **DEĞİŞMEDİ**.
- Kullanım belgesine (dosya başı) `yaz` ÇIKIŞ KODLARI bloğu.
- `oku`/`teyit`/`tamam`/`kapat` çıkış kodlarına dokunulmadı (kapsam `yaz`).

## 3. Çağıranlar — dikkat
- ⚠️ **2 artık İKİ anlam taşıyor:** eskiden "YAZILMADI" (yarım git, argüman, `--yanit`
  yok), şimdi ayrıca "yazıldı ama ÖLÇÜLEMEDİ". Ayırt etmek için "yazıldı" satırı okunur
  (`duyur.py` zaten okuyor). Ayrı kod (ör. 3) istenirse karar koordinatörün;
  `sys.exit(3)` tahta.py:243'te başka bir anlamda kullanılıyor, o yüzden önermedim.
- 🔴 **YENİ MÜKERRER RİSKİ — `arac/duyur.py:94-106`:** `returncode == 0 and "yazıldı"`
  dışını 🔴 sayıp "HATALI OLANLARI ELLE YAZ" diyor. Çıkış 1'de mesaj `tahta.json`da
  ZATEN VAR, yalnız gitmedi ⇒ elle yeniden yazmak **mükerrer** üretir (M-0242=M-0243
  sınıfı). Eskiden kod 0 olduğu için bu yol hiç açılmıyordu. Öneri (ayrı kalem,
  `duyur.py` sahibine): "yazıldı" var + kod 1/2 ⇒ "YAZILDI, GİTMEDİ — yeniden YAZMA,
  `git push`" ayrı kovası.
- `isal.py:301` kod okumuyor (etkilenmez) · `gemini/post_hazirim.py` `check=True`
  (çağrılmıyor; çağrılırsa 1/2'de istisna atar — doğru yönde).

## 4. Bulunamadı
- Gerçek bir makinede (HAVVA) ağ düşmesiyle ÖLÇÜLEMEDİ yolu sınanmadı; fikstür
  detached HEAD ile kuruldu (aynı dal: `_ulasti_mi` → OLCULEMEDI).
