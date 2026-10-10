# SESSIZ-YUTMA-TARAMA-1010 — `arac/*.py` içinde hatayı sessizce yutan yerler

Görev: UMIT İRTİBAT, 10 Ekim 2026. YALNIZ ÖLÇÜM ve LİSTE — düzeltme yazılmadı.
**Taban:** `origin/main` `37770b31561d67b1593ddcd4c0a9a07e5b4d11eb` (detached worktree `C:\atlas-yutma`, iş bitince kaldırıldı).
Enjeksiyonlar **monkeypatch** ile yapıldı; hiçbir depo dosyasına yazılmadı (kaldırmadan önce `git status --porcelain` boş çıktı). `uret_petek.py` ne koşturuldu ne içe aktarıldı.
Ham + sınıflı liste: `denetim/SESSIZ-YUTMA-TARAMA-1010.json` (570 kalem, her biri dosya:satır · işlev · istisna · gövde · sınıf · gerekçe).

## 0. Yöntem ve evren
- AST taraması, 159 dosya: **463 `except`** · **107 `.get(…, 0)`** · `contextlib.suppress` **0**.
- Çağrı zinciri: beş giriş aracının (`denetle` · `denetle_yayin` · `durum_tablosu` · `odak_olc` · `renk_olc`) **içe aktarma kapanışı**:
  12 modül = beş araç + `girdi` · `girdi_listesi` · `paket_coz` · `_bagli_mi` · `kodla` · `paketle` · `renkler`.
  Ek olarak `durum_tablosu` → `denetle.py` alt süreci. ⚠️ `uret_petek`/`renkler` metni okunuyor (DOGAL_GOL), çalıştırılmıyor; `_sahiplik_uygula` vb. yalnız ADIYLA geçiyor.
- Zincirdeki **103 kalemin tamamı tek tek sınıflandı**: TEHLİKELİ **7** · BEYANLI **34** · ZARARSIZ **58** · YUTMAZ (yükseltir) **4**.
- Zincir dışı **467 kalem** (387 except, sessiz biçimli 188) sınıflanmadı: beş aracın hükmüne etkileri yok. JSON'da `ZINCIR_DISI` damgasıyla duruyorlar.

## 1. Önce: açık not ve 9 Ekim çaresi
| Soru | Ölçüm |
|---|---|
| 9 Ekim çaresi main'de mi? | **EVET.** `_bagli_mi.py:191-207`: `except: pass` kaldırılmış, `paketle` içe aktarımı yukarı çıkıyor. Paket yüklüyken boş `kaynaklar()` ⇒ `RuntimeError(ÖLÇÜLEMEDİ)`. `paketle.py:62`: `hasattr(reconfigure)` koruması var. Commit `7a613d9e`. |
| `denetle_yayin.py:1041` (bugün **1097-1102**) | **ZARARSIZ, ama teşhis yanlış.** `except Exception: _paket_ici = set()`. `paketle` düşerse paket içindeki ~156 dosya "yetim" sayılıyor ⇒ kapı ✗ veriyor. Yani sonuç "temiz" çıkmıyor, ama kapı "ölçülemedi" yerine "yetim" diyor. 9 Ekim çaresindeki RuntimeError koruması (paket yüklü + `kaynaklar()` boş) burada **YOK**: künye kayıpsa sessizce eski düzene geçiliyor ve gene yanlış alarm çıkıyor. |
| `denetle_yayin.py:1859` (bugün 1859 + paket **1918**) | **BEYANLI, yutmuyor.** İkisi de `_odak_ihlali` / `_paket_ihlali = True` + "ÖLÇEMEDİ" basıyor, ikisi de son hükme bağlı (1950-1953). |

## 2. TEHLİKELİ — 7 kalem (6'sı sentetik kanıtlı)
| # | dosya:satır · işlev · istisna | Etkilediği | Sentetik kanıt |
|---|---|---|---|
| T1 | `denetle_yayin.py:189/200/233` · `bayat_mi` · `Exception` + erken dönüşler | **yayın tazeliği hükmü** | `bayat_mi` "ölçülemedi"yi `None` döndürüyor. `main` `bool(None)=False` ⇒ `bayat_durdurucu=False` hesaplıyor. Sonuç: yalnız `!` satırı basılıyor, hüküm etkilenmiyor. Satır 1584'teki yorum *"Ölçülemediyse EVET"* diyor ama yalnız `bayat_gun` için geçerli. **GERÇEK koşulda ölçüldü:** temiz `origin/main` ağacında `donemler.js` yok (gitignore) ⇒ `bayat_mi=(None,None,"donemler.js YOK",None)`, `bayat_durdurucu=False`. Tam kapı koşusu: `! yayın tazeliği ÖLÇÜLEMEDİ` basıldı, ama ✗ listesine girmedi. |
| T2 | `denetle_yayin.py:1027` · `git_izlenen` · `CalledProcessError, FileNotFoundError` | **izlenmeyen varlık ⇒ SONUÇ** | Tam kapı, üç kol. **Kontrol** (js/app.js izlenmiyor): `✗ GIT'TE İZLENMİYOR: 1`, `git'te izlenen: 82`. **git düşüyor**, aynı durum: ✗ satırı **KAYBOLDU**, ve `diskte VAR ve git'te izlenen: 83` yazıldı. Bu satır yanlış: izlenip izlenmediği hiç ölçülmedi. Basılan tek iz `UYARI:` satırı. |
| T3 | `durum_tablosu.py:665` · `olc` · `Exception` | **§1.5 "Renksiz künye" satırı** (9 Ekim vakasıyla aynı aile) | `girdi.oku_devletler` yalnız bu çağrıda OSError veriyor: `renksiz_gercek 11→16`, `renksiz_beyanli 5→0`. Hiçbir uyarı yok: 5 beyanlı borç sessizce "gerçek borç"a karışıyor. |
| T4 | `denetle.py:4703` · `konum_denetimi` · `Exception` | **konum denetimi** | Göller okunamazsa `⚠️` basılıyor, ama `olculemedi()` çağrılmıyor. Aral'a (59.93, 45.15) sentetik nokta konuldu. Göller okununca `disarida=1`, patlayınca `disarida=0`, `OLCULEMEDI_KOVA=[]` ⇒ konum "temiz". |
| T5 | `denetle.py:4500` · `savas_senkronu` · `Exception: continue` | **savaş senkronu sayısı** (bilgi satırı, hükme bağlı değil) | Tarihi ayrıştırılamayan kayıt atlanıyor, ama `toplam=len(S)` ⇒ "maddesi var" sayılıyor. En uzak aykırı (Sırpsındığı 1364) bozuldu: `165/174 → 166/174`. MÖ tarihli tek kayıt `(1, [])` = **1/1 temiz**. `pad()` docstring'i *"gun_no ÇÖKER (yanlış cevaptan iyidir)"* diyor; bu `except` tam o çöküşü yutuyor. Bugün gerçek atlanan 0. |
| T6 | `denetle.py:2727` · `_gun_farki.ay` · `Exception: None` | **Değişmez 4 / 4c / 4d** | `_gun_farki('-0331-10-01','1200-01-01') = None` (`'-0331'.split('-')` → `int('')`). Çağıranlar `is not None and > tol` ⇒ MÖ dönem hayalet taramasından **sessizce geçer**. Bugün veride negatif yıl 0, yani **ileriye dönük**. Ama NEGATIF-YIL-1010-A/B işi açık: ilk MÖ kaydı girdiği gün çalışır. Yan not: `gun_no('-0331-10-01')` yılı **-33** okuyup ValueError veriyor (`s[0:4]`). |
| T7 | `denetle.py:5537` · `degismez8` (8b) · `Exception: pass` | **Değişmez 8b** | **SENTETİK KANIT YOK.** Bölge poligonu kurulamazsa atlanıyor, hepsi düşerse `continue` ⇒ taşma sessizce azalıyor. D8 gövdesi ağır ve `devletler_harita` çözümü istiyor; koşturulmadı. Kod okuması, PLAUSIBLE. |

## 3. BEYANLI — 34 kalem (özet)
`denetle.py` bu açıdan iyi durumda: `olculemedi(` metni 17 kez geçiyor (tanım dahil) (D4 · D8 · D8k · R · R6 · kaynaksızlık tavanı · savaş · konum). `denetle_yayin` son hükme bağlı 8 nöbetçi `except`inin 8'inde de "ÖLÇEMEDİ ⇒ ihlal True". `durum_tablosu` ölçülemeyeni `{"hata"}` ya da `"ölçülemedi"` olarak döndürüyor. Liste JSON'da.

## 4. ZARARSIZ — 58 kalem; dikkat isteyen alt sınıf: YANLIŞ ALARM YÖNÜ (11)
Bu kalemler sonucu temiz yapmıyor, **yanlış ihlal** üretiyor: `_bagli_mi:165` · `denetle_yayin:661/667/1101/1119/1121/1380/1412/1437` · `denetle:1686/2468`. Hepsi ✗ verdiriyor, ama teşhisleri yanlış (ör. "yetim", "AÇIK"). Bu sınıfın bedeli: gürültü üreten denetime kimse bakmaz.
- `denetle_yayin:389` (`iz_kapsami` parmak izi `pass`) **ölçüldü, hükme etkisi yok**: dal yalnız `uret_petek` ürünlerinde koşuyor ve onlar D229 koşu bayatı kovasında. Enjeksiyonla (yeni girdi / parmak izi patlıyor) altı kova da birebir aynı kaldı.
- `.get(…,0)`: zincirdeki 27 kalemin 27'si sayaç deyimi ya da basım. `odak_olc:320` `SEKME_OLCULEMEDI`: `odak_cozum.js:516` anahtarı her zaman 0 ile kuruyor, varsayılan hiç devreye girmiyor.

## 5. Bulunamayan / ölçülemeyen
- **T7 sentetik kanıtı yok** (yukarıda).
- Zincir dışı 467 kalem tek tek sınıflanmadı. Göze çarpan: `denetle_bitisiklik.py:171/229/272/280` (geometri hatası ⇒ `continue`/`pass`, sıçrama sayısı sessizce azalıyor). Beş aracın zincirinde değil, ayrı kalem.
- `denetle_yayin.py`nin **çıkış 2'si YOK**: `denetle.py` §3'te üç kodlu (0/1/2), yayın kapısı yalnız 0/1. T1 ve T2 bu yüzden "ölçülemedi" diyemiyor. Önerilen çare bu.

## 6. Yan bulgu (görev dışı, yalnız kayıt)
Taban `37770b31` üzerinde **gerçek** `denetle_yayin` çıkış **1** verdi (550 sn). ✗ satırları:
- `PAKET BAYAT — 13 kaynak değişmiş, paket yenilenmemiş`
- `PAKET İÇERİĞİ KAYNAKLA UYUŞMUYOR`: paket_05/12/13/14/22/23
- `SEKME SESSİZ GERİLEDİ 1` · `SEKME OKUNMAYAN GERİLEDİ 1`
- `üretim izi 4/7 · bayat 2`

Temiz ağaçta gitignore'lu dosyalar yok, ama paket satırları izlenen dosyalardan geliyor.

## 7. Önerilen çare (yazılmadı)
1. `denetle_yayin`a `OLCULEMEDI_KOVA` + **çıkış 2** (`denetle.py` deseni). T1 `_bayat is None` ve T2 `izlenen is None` bu kovaya düşsün.
2. T3: `except` kaldırılsın ya da `o["renksiz_beyanli"]="ölçülemedi"` olsun. T4: `olculemedi("konum göller", e)`.
3. T5 / T6: MÖ yıl tarih yardımcısı gelene kadar ayrıştırılamayan tarih **sayılsın ve kovaya** düşsün. `toplam`a "maddesi var" olarak girmesin, `_gun_farki` None'ı çağıranda ölçülemedi sayılsın.
4. 1101: 9 Ekim'deki RuntimeError korumasının aynısı (paket yükleniyor + içerik boş ⇒ ÖLÇÜLEMEDİ).
5. Sınav iki yönde: bu dosyadaki enjeksiyonlar (`scratchpad` betikleri) sınav sorusu olarak taşınabilir.

YENİ DOSYALAR: denetim/SESSIZ-YUTMA-TARAMA-1010.md · denetim/SESSIZ-YUTMA-TARAMA-1010.json (C:\atlas-umit, commit EDİLMEDİ)
