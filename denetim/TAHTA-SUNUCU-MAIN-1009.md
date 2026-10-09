# TAHTA-SUNUCU-MAIN-1009 — `tahta_sunucu.py` main'in kamusal API'sine bağlandı

Teslim: `denetim/TAHTA-SUNUCU-MAIN-1009.diff` (origin/main `5921a031` üstüne; LF, BOM yok, CR 0;
4 dosya, +1349). `git apply --check` temiz ağaçta (origin/main'e sıfırlanmış worktree) GEÇTİ,
sonra gerçekten uygulandı ve üç sınav UYGULANMIŞ ağaçta yeniden koştu. Commit/push YOK.

## ① Ne ölçtüm
- Dal `origin/makine/umit-tahtaweb` = `d5c99c0c`, main'in **970** commit gerisi (merge-base `6d8601f0`).
- AST: eski sunucu `tahta.py`den **13** ad kullanıyor, **5**'i main'de YOK:
  `_yaz_hazirla` · `_yaz_ekle` · `_teyit_uygula` · `_tamam_uygula` · `_kapat_uygula`.
  KÖK: bu beş işlev dalda `tahta.py`ye EKLENMİŞTİ (dal `tahta.py`yi +540 satır değiştirdi) ve
  hiç main'e inmedi. Yeni sunucu 14 ad kullanıyor (`_git`, `_tazele` eklendi, beşi çıktı), eksik **0**.
- Main'in kamusal API'si (satırlar ölçüldü): `yaz(a)` :866 · `teyit(a)` :1225 · `tamam(a)` :1250 ·
  `kapat(a)` :1313. `a` **argparse Namespace DEĞİL, düz dict** (`a["kim"]`, `a.get(...)`).
  Dönüş: **int çıkış kodu** (print ile metin; `sys.exit` yalnız `_yukle` bozuk tahta → 2 ve
  `_kaydet` yazılamadı → 3). `yaz` 0/1/2 (2 = yarım git · HERKES kapısı · olmayan --yanit),
  `teyit` 0/2, `tamam` 0/1(teyitsiz)/2, `kapat` 0/2.
- 🔴 **Kamusal API git TAŞIMASI yapar**: `yaz` önce `_tazele()` (`git pull --rebase`), dördü de
  sonunda `_git()` (add+commit+pull --rebase+push). Dalın özel işlevleri saftı (sunucu "git'e
  dokunulmadı" diyordu). ⇒ Düz bağlama, sunucunun deposundan **her HTTP yazımında commit+push**
  yapardı — sunucunun var olma sebebinin (tahtayı git'ten çıkarmak) tersi. Ölçüldü (T10b): taşıma
  açık bırakılınca aynı yazım kum havuzu deposunda **commit üretti** ve upstream olmadığı için
  `yaz` **2** döndü ⇒ HTTP **400** — mesaj YAZILMIŞ ama istemci "reddedildi" görüyor (tekrar ⇒ mükerrer).
- Çare (sunucu sürecinde): `T._git` → "ULASTI" (varış = sunucunun kaydı), `T._tazele` → no-op.
  `_git_yarim` kapısı KORUNDU. `yaz` `_Kilit`i KENDİ aldığı için sunucu onu `yaz`ın dışında
  TUTMUYOR (yeniden girilemez O_EXCL kilit → 30 sn + RuntimeError olurdu); teyit/tamam/kapat
  `_Kilit` almadığı için sunucu onları `KILIT + T._Kilit` altında çağırıyor. Numara `yaz`ın
  sözleşmeli "`M-xxxx yazıldı`" satırından alınıyor (`duyur.py` de okur); `sunucu` izi ve
  `yerel_kimlik` yazımdan sonra, kilit altında damgalanıyor. CGNAT yamasına dokunulmadı.

### Sınavlar
| Sınav | Sonuç |
|---|---|
| `ARAC-TAHTA-CGNAT-SINAV-1009.py` (main üstünde) | **15/15** |
| `ARAC-API-AD-SINAV-1009.py --sina` (eski FAIL 13 ad/5 eksik adlarıyla · yeni PASS · import'suz → 2 ÖLÇÜLEMEDİ) | **3/3** |
| `ARAC-TAHTA-SUNUCU-YAZMA-SINAV-1009.py` (gerçek HTTP, alt süreç sunucu, 127.0.0.1, rastgele port, `secrets` jeton) | **24/24** |

Yazma sınavı: Y1-Y8 ileri (yaz → dosyadan geri okundu · --yanit · teyit · tamam · kapat · oku ·
isaretle · yerel_kimlik mükerrersiz) · T1-T8 ters (jetonsuz/yanlış jeton 401 · eksik alan · ACİL HERKES
dayanaksız · olmayan --yanit · teyitsiz tamam kod 1 · olmayan no · tanımsız eylem) · **T9 yamasız
kol** (dal sürümü + main tahta.py): okur 200, `yaz` → **503 `AttributeError: … '_yaz_hazirla'`**,
`islem` → **503 `… '_teyit_uygula'`** · **T10** taşıma açık kol commit üretir (sensör öter) ·
**Y9** yamalı kol: havuz HEAD değişmedi, tahta.json yazıldı-commitlenmedi · **Y10** sınavın deposu
ve gerçek `oturumlar/tahta.json` değişmedi. Her kol `git init`li, **uzağı olmayan** geçici bir
kum havuzunda koşar — push edilecek yer yoktur.

## ② Ne bulamadım
- **Main'de sunucunun İSTEMCİSİ YOK.** Daldaki `tahta.py` önce sunucuya giden (`TAHTA_SUNUCU`,
  `_istek`, `_sunucu_denetle`, yerel düşüş kuyruğu) bir istemciydi; main'in `tahta.py`si yalnız
  git yolunu biliyor. ⇒ Bu diff'le sunucu main'de YAZILABİLİR hâle geldi ama main'deki hiçbir
  araç (`tahta.py`, `tahta_bekci.py`) ona KONUŞMUYOR; yalnız doğrudan HTTP (tarayıcı/curl) kullanır.
- Daldaki üç eski sınav (`ARAC-TAHTA-SUNUCU-SINAV-1004`, `-COKLU-`, `-MAKINELER-`) ve
  `arac/tahta_kesme.py` + `ARAC-TAHTA-KESME-SINAV-1004` **alınmadı**: hepsi o istemciyi
  (`TAHTA_SUNUCU` ortamıyla `tahta.py`) koşturuyor, main'de koşamazlar.
- Sunucunun yazdığı `oturumlar/tahta.json` main'de **git'te izli**; sunucu artık commitlemediği
  için çalışma ağacı kirli kalır (Y9'da ölçüldü). Dalda bunu `tahta_kesme.py` (rm --cached)
  çözüyordu — main'de yok. Üretimde sunucuyu `--tahta <izsiz yol>` ile koşturmak ya da kesmeyi
  ayrıca indirmek gerekir.
- Sunucu başlığındaki "cevap gövdesindeki `kod` → `tahta.py` bunu çıkış kodu olarak döner" cümlesi
  daldaki istemciyi anlatıyor; main'de karşılığı yok (dokunmadım — en küçük değişiklik).

## ③ Ne istiyorum
1. Diff'in `main`e alınması (koordinatör; tek yazıcı). Uygulama: `git apply denetim/TAHTA-SUNUCU-MAIN-1009.diff`.
2. KARAR (koordinatör/Emre): sunucu main'de kullanılacaksa ⓐ daldaki istemci (`tahta.py`
   sunucu-önce yolu) + `tahta_kesme.py` ayrı bir paketle main'in bugünkü `tahta.py`sine taşınsın
   (W50b çıkış kodları ve TAHTA-ORIGIN-OKU ile birleştirilerek) **ya da** ⓑ sunucu yalnız
   görüntü/doğrudan HTTP aracı olarak kalsın ve `--tahta` izsiz bir yola verilsin.
3. `ARAC-API-AD-SINAV-1009.py`nin daldan gelen her `arac/*.py` için birleştirme öncesi koşturulması
   (geride kalmış daldan gelen dosya, main'de olmayan ad çağırıyor mu).
