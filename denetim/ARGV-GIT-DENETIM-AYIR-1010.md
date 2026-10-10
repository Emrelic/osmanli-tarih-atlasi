# ARGV-GIT-DENETIM-AYIR-1010 — denetim/ altındaki 29 git kaleminin hedef deposu

**Diff:** `ARGV-GIT-DENETIM-1010-v2.diff` (sha256 `ffddc7ed…edbb`). v1'in yerine geçiyor: aynı iki yeni dosyayı, araç ve sınavı tam hâliyle ekliyor. `origin/main` `792bf4a4` üzerinde `apply --check` temiz.
**Yeni seçenek:** `--cwd-sinifla`. Her ihlalin hedef deposunu ölçüyor:
- Hedef sırası: argv'deki `-C <x>`; yoksa çağrının `cwd=` değeri; yoksa süreç cwd'si.
- İfade geriye doğru izleniyor:
  - atama ve `with … as x`;
  - kapsayan işlevin kapanışı;
  - sarmalayıcı parametresi (çağıranın argümanı);
  - işlev parametresi (aynı dosyadaki BÜTÜN çağıranlar);
  - aynı dosyadaki işlevin `return` değeri;
  - `join` / `abspath` / `dirname` / `str` / `Path` / `.replace` / `/` / `+`.

Sınıflama:
- **GEÇİCİ:** `tempfile.mkdtemp`, `TemporaryDirectory` ya da `gettempdir`; veya Temp/tmp/scratchpad içeren sabit yol.
- **GERÇEK:** `__file__`'dan türeyen yol, `os.getcwd()`, cwd/-C hiç verilmemiş (süreç cwd'si), ya da başka bir sabit yol. Çağıranlardan biri bile gerçekse sonuç GERÇEK.
- **ÖLÇÜLEMEDİ:** izlenemeyen her ifade. Riskli listesine **GERÇEK gibi** girer (güvenli yön).

Çıkış: 0 bütün ihlaller GEÇİCİ · 1 GERÇEK ya da ÖLÇÜLEMEDİ hedefli ihlal var · 2 yalnız argv çözülemedi.

## Sonuç — `py denetim/ARAC-ARGV-GIT-DENETIM-1010.py --dizin denetim --cwd-sinifla` (origin/main `792bf4a4`)
**29 kalemin 29'u GEÇİCİ · GERÇEK 0 · ÖLÇÜLEMEDİ 0.** Bugün koşturulsa gerçek depoya commit atan sınav yok.

| dosya:satır | sınıf | hedef | çözüm (kısaltılmış) |
|---|---|---|---|
| ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py:215 | ADD-HEPSI | GEÇİCİ | cwd= d ← :208 tempfile.mkdtemp |
| …-1009.py:216 | COMMIT-PATHSPECSIZ | GEÇİCİ | aynı |
| …-1009.py:219 | COMMIT-HEPSI + PATHSPECSIZ | GEÇİCİ | aynı |
| …-1009.py:239 · 251 · 265 · 275 · 292 · 298 · 306 · 312 | COMMIT-PATHSPECSIZ | GEÇİCİ | yardımcı (:226) → d ← :208 mkdtemp |
| …-1009.py:314 | ADD-HEPSI + PATHSPECSIZ | GEÇİCİ | d ← :208 mkdtemp |
| ARAC-SAHIPLIK-KAPI-SINAV-1006.py:64 · 65 · 67 (×2) | ADD / PATHSPECSIZ / COMMIT-HEPSI | GEÇİCİ | d ← :56 mkdtemp |
| …-1006.py:102 · 119 · 130 · 140 | COMMIT-PATHSPECSIZ | GEÇİCİ | d ← kur() dönüşü ← :68 d ← :56 mkdtemp |
| ARAC-TAHTA-GIT-YARIM-SINAV-1006.py:98 | COMMIT-PATHSPECSIZ | GEÇİCİ | -C DUZ ← join(TMP ← :91 mkdtemp) |
| ARAC-TAHTA-SUNUCU-YAZMA-SINAV-1009.py:145 | COMMIT-PATHSPECSIZ | GEÇİCİ | -C kok ← join(havuz() parametresi gec ← 3 çağıranın hepsi :153 mkdtemp) |
| ARAC-TAHTA-TEMIZ-AGAC-SINAV-1010.py:76 | COMMIT-PATHSPECSIZ | GEÇİCİ | cwd= A ← join(kur() parametresi kok ← :140 mkdtemp) |
| ARAC-TAHTA-ULASTI-SINAV-1006.py:101 · 198 · 222 (×2) | PATHSPECSIZ / COMMIT-HEPSI | GEÇİCİ | A ← klon_kur() (dönüş/parametre) ← 7 çağıranın hepsi :175 mkdtemp |

Bu satırlar 26 tablo satırında 29 kalemi kapsıyor; her kalemin tam zinciri aracın çıktısında. Karşılaştırma için `arac/` aynı kipte, origin/main'de: `kos_ve_yayinla.py:350` ADD-HEPSI ve `:352` COMMIT-PATHSPECSIZ **GERÇEK** (`KOK ← dirname(dirname(abspath(__file__)))`). Çıkış 1. ADD diff'i inince 0.

Bilgi: `denetim/` taramasında ayrıca **17 argv ÖLÇÜLEMEDİ** kalemi var. Hepsi "program çözülemedi" sınıfında: argv[0] bir değişken (`PY`, `node` yolu). Bunlar git olduğu bilinen çağrılar değil, tabloya girmiyor. Kip bu yüzden çıkış 2 veriyor.

## Sınav — `ARAC-ARGV-GIT-DENETIM-SINAV-1010.py` (v2): 28/28
- Eski 18 soru (v1) yerinde.
- Yeni sorular, iki yönde:
  - **GEÇİCİ çıkması gerekenler:** H1 mkdtemp · H2 TemporaryDirectory · H3 sarmalayıcı + `kur()` dönüşü · H4 parametre, bütün çağıranlar geçici.
  - **GERÇEK çıkması gerekenler:** H5 `__file__` kökü · H6 cwd yok · H7 bir çağıran gerçek.
  - **ÖLÇÜLEMEDİ:** H8 (`sys.argv`) riskli listesine giriyor, çıkış 1 (H8b).
  - H9: yalnız geçici ihlaller ⇒ çıkış 0.
- **Isırma:** aynı sınav v1 araçla koşunca 18 ✓ · H1–H9 + H8b 10 ✗. Gerileme yok; yeni soruların hepsi yalnız v2'de geçiyor.

## Sınırlar
- Çapraz dosya izleme yok.
- Tuple dönüş değerinde ilk öğe alınıyor (`return (kok, …)`). Bugünkü 29 kalemde bu yol kullanılmadı.
- Denetim akışına duyarlı değil; son atama alınıyor.

## § KAPI DEĞİL (koordinatör şerhi, 10 Ekim)
--cwd-sinifla bir ÖLÇÜM kipidir, KAPI DEĞİL; `--dizin denetim` ile çıkışı 17 bilinmeyen argv (argv[0] değişken: PY, node yolu) yüzünden kalıcı 2dir ve bu BEKLENENDİR. Bir kapı zincirine BAĞLANMAZ — sürekli 2 veren adım zinciri durdurur. Kapı olarak kullanılabilecek tek biçim: varsayılan `arac/` evreni (bugün ADD sonrası 0).
