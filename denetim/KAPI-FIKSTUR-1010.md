# KAPI-FIKSTUR-1010 — KOSU-YAYIN-KAPI sınavının fikstürü, LISTE + ADD dünyasına yeniden temellendi

Taban `origin/main` `95967da3` (üç yamalı koşu) · `d2fd8a5d` (yamasız / yalnız-KAPI koşuları; arada
`arac/` değişmedi, ölçüldü). Yamalar ve sınav `origin/makine/umit` @ `6dbcc51f`:
`denetim/KOSU-YAYIN-KAPI-1010.diff` · `KOSU-YAYIN-LISTE-1010.diff` · `KOS-VE-YAYINLA-ADD-1010.diff`
(bu SIRAYLA uygulanır; LISTE ve ADD tek başına `main`e uygulanmaz) ·
sınav `denetim/ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py` (sha256 `8ec05a58975176b2…`).

## Ölçüm
| ağaç | ESKİ fikstür | YENİ fikstür |
|---|---|---|
| yamasız | 7/23 | **7/23 — 23 sorunun 23'ü aynı hüküm** |
| yalnız KAPI | 23/23 | 23/23 |
| KAPI + LISTE + ADD | **8/23** | **23/23** |

**K0 — 8/23 ↔ LAB 18/23: ÇÖZÜLDÜ** (koordinatör + LAB ölçtü): iki ölçüm FARKLI YAMA KÜMESİNİ
ölçtü, ikisi de doğru. LAB KAPI+LISTE (import yalnız `kosu_yayin.py`de ⇒ yalnız K düşer, 18/23);
bu ölçüm KAPI+LISTE+ADD (ADD aynı importu `kos_ve_yayinla.py`ye de ekler ⇒ Z ve L de düşer, 8/23).
Sızıntı YOK. Ve iki sayı da fikstürün geçerli ölçümü değildi: LAB'ın 18'inde 4, buradaki 8'de 5
**SAHTE TEMİZ** vardı (K1·K3·K6·Z1·Z3 import'ta çöktüğü için geçiyordu — çökme = rc 1, commit 0,
sorunun beklediği tam o). Geçerli ölçüm tek cümle: *fikstür `yayin_listesi.py` + `kodla.py`yi
kopyalamıyor.*

## 🆕 İki koruma eklendi (koordinatör kararı) — bir SONRAKİ kırılma da gizlenmesin
- **ⓑ ÇÖKÜŞ KAPISI** (`sina`): koşunun çıktısında `ModuleNotFoundError` / `ImportError` /
  `Traceback` varsa soru **ÖLÇÜLEMEDİ** (⚠) — GEÇTİ de KALDI da değil. Sınavın çıkış kodu üçlü oldu:
  **0** temiz · **1** en az biri KALDI · **2** kalan yok ama ÖLÇÜLEMEYEN var (`§3`). K0/K0b muaf
  (kendi koruma soruları, betik koşmaz).
- **SEBEP İDDİASI** (`durdu`) K1·K3·K6·Z1·Z3'e: çökme yok · reddeden kapı (`denetle.py` /
  `denetle_yayin.py`) GERÇEKTEN çağrıldı · sonraki kapıya geçilmedi · `git commit` çağrılmadı ·
  günlük "ZİNCİR DURDU" diyor. (K9'a konmadı: yalnız-KAPI dünyasında red commit ADIMINDA olur.)
- **ⓑ ÇİFT YÖNDE SINANDI:** 3 yamalı ağaçta `arac/yayin_listesi.py` kasten kaldırıldı ⇒ yeni sınav
  **21 ÖLÇÜLEMEDİ · 0 kaldı · 2 geçti (K0, K0b) · çıkış 2.** Sahte ✓ **0** (eski fikstür aynı
  kırılmada 5 sahte ✓ veriyordu).
- Korumalarla yeniden: yamasız **7/23** (eski fikstürle 23/23 soru aynı hüküm) · yalnız-KAPI
  **23/23** · 3 yama **23/23** · `apply --check` temiz, ağaç içinden koşu 23/23.

## Düşen sorular ve sınıfları — hepsi (a), ayrı ayrı gerekçe
**Kök sebep (14 soru): `ModuleNotFoundError: No module named 'yayin_listesi'`.** LISTE yaması
`kosu_yayin.py` ve `kos_ve_yayinla.py`ye `import yayin_listesi` ekliyor; fikstür ağaçtan YALNIZ iki
betiği kopyalıyordu. `yayin_listesi` de `kodla.py`nin AST'sini okuyor.
| soru | eski (3 yama) | sebep | sınıf |
|---|---|---|---|
| K2 K5 Z2 Z4 | ✗ | import çökmesi ⇒ "ÖLÇÜLEMEDİ" günlüğü hiç yazılmıyor | (a) |
| K4 K7 Z5 L2 L7 | ✗ | import çökmesi ⇒ commit yok | (a) |
| K8 | ✗ | import çökmesi ⇒ push denemesi yok | (a) |
| L1 L3 L4 L5 L6 | ✗ | `kos_ve_yayinla` import'ta çöküyor ⇒ kilit kararı (rc 2/3) hiç verilmiyor | (a) |
| **K9** | ✓ (sahte: çökme) → kopya düzeltilince **✗** (rc 0, commit +1) | aşağıda | **(a)** |

**K9 ayrı gerekçe — yeni fikstürle BİLE düştü, bu yüzden ürün açısından ölçüldü:**
Soru: *"`.gitignore`'lu bir çıktı diskte ⇒ commit düşmeli, çıkış 1, push yok."* Eski dünyada yayın
listesi SABİTTİ ve `data/devletler_harita.js` hep içindeydi. LISTE ile liste TÜRETİLİR (Y: index.html
yükleyicileri ∩ Ü: üreteç AST'si); fikstürde o dosyayı ne site yüklüyor ne üreteç yazıyor ⇒ listeye
girmemesi **DOĞRU davranış**, commit'in geçmesi gerileme DEĞİL. Sorunun ANLAMINI kurmak için K9'da
dosya iki kümeye de sokuldu (sahte üreteç yazar + sahte site yükler). Sonuç, gerekçesiyle:
- 3 yama: `🔴 DURDURUCU data/devletler_harita.js .gitignore'da — site yükler, git taşımaz` ⇒
  **commit ÖNCESİ** durur, rc 1, commit 0, push yok ✓ (koruma eskisinden ERKEN)
- yalnız KAPI: `⑦ commit → çıkış 1` ⇒ eski mekanizmayla durur ✓
⇒ Koruma iki dünyada da VAR; değişen yalnız fikstürün dünyası. **(b) — ürün gerilemesi — 0.**

## Fikstür değişikliği (`KAPI-FIKSTUR-1010.diff`, yalnız sınav dosyası, 4 yer)
1. `depo_kur`: `arac/yayin_listesi.py` ve `arac/kodla.py` **VARSA** kopyalanır (yamasızda yoklar,
   betikler de istemez ⇒ aynı fikstür iki dünyada koşar).
2. `index.html` tek yükleyici taşır: `<script src="data/devirler.js">` (sahte üreteç onu yazar ⇒
   Y∩Ü boş değil; boş kesişim ÖLÇÜLEMEDİ verirdi).
3. Sahte `surum_damgala` yalnız damga satırını değiştirir, yükleyicileri KORUR (eskisi dosyayı
   tek satırla eziyordu; liste damgadan SONRA türetilir).
4. K9 `hazir`: sahte üreteç `devletler_harita.js` yazar + sahte site yükler (yukarıdaki gerekçe).

## Çift yön (`§11`)
- **Yamasız ağaçta** yeni fikstür eski fikstürle **23/23 soru aynı hükmü** veriyor (7/23; kalanlar
  K2 K3 K4 K5 K6 K8 K9 Z2 Z4 L1-L7 — KAPI'nın kapattığı hatalar). ⇒ Yeni fikstür hiçbir hatayı ÖRTMÜYOR.
- **Yalnız KAPI**: iki fikstür de 23/23. **Üç yama**: yeni 23/23.
- `git apply --check`: üç yama + bu diff, `umit`teki sınav dosyası yerindeyken TEMİZ; sınav ağaç
  içinden (`--kok`suz) koştu, 23/23.

## Koordinatöre
⚠️ Diff, sınav dosyasının `origin/makine/umit`teki hâline göredir ve dosya `main`de YOK —
önce sınavı (`denetim/ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py`, blob `fd24fdf`) umit'ten al, sonra bu
diffi uygula. KAPI + LISTE + ADD + fikstür AYNI commit'te (`§3.4 ②`). Diff 7 yer: yukarıdaki 4 +
`cokus`/`sina` çöküş kapısı + `durdu` sebep iddiası (5 soru) + üçlü çıkış kodu.
