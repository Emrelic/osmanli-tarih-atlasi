# UMIT-W10-SINAMA-1006 — `kaynak_durum.py kapi` (SINAMA ilanı) + yayın kapısında SINAMA reddi

Koordinatör hükmü: "kapi" alt emri EVET. Kilitler: `arac/kaynak_durum.py` · `arac/denetle_yayin.py`.
Ağaç `C:\atlas-w10e` = `origin/main 847408ea` + `MOTOR-ENV-KAPI` + `KAYNAK-DURUM-ENV-KAPI` + `KAYNAK-DURUM-ATLAMA-DAMGA`.
Motor tuzuna DOKUNULMADI. Ortam kaçışı YOK.

## 1. Diff — `C:\atlas-umit\denetim\KAYNAK-DURUM-SINAMA-1006.diff`
CR 0 · 515 satır · zincir: `origin/main 9a2772bd` → ENV-KAPI (0) → KAYNAK-DURUM-ENV-KAPI (0) → ATLAMA-DAMGA (0) →
bu diff **ileri ✓ (0) · -R ✗ (1)**.
| dosya | ne |
|---|---|
| `arac/kaynak_durum.py` | `kapi` emri · `SINAMA_KODU` · kapı mantığı ortak `_kapidan_gecir()`e taşındı (KOSU ile SINAMA AYNI yoldan; iki kopya kural bir gün ayrışırdı) · belge |
| `arac/denetle_yayin.py` | `kapi_damgasi()` + `kapi_hukmu()` + `KAPI_ALANI_ZORUNLU` · `main()`in son kararına `_kapi_ihlali` · odak tavanı yorumu (§5) |
| `denetim/ARAC-KAYNAK-DURUM-SINAMA-SINAV-1006.py` (yeni) | iki yönlü sınav, 16 kontrol |
| `denetim/KAYNAK-DURUM-SINAMA-CIKTI-1006.txt` (yeni) | kanıt |

## 2. `kapi` emri
```
py arac/kaynak_durum.py kapi --kapi-kok <ağaç> [--kim AD] [--gerekce "..."] [--kapi-atla "<gerekçe>"]
```
- `kapat --kod KOSU` ile AYNI kapı (ortam kapısı) ve AYNI çıkış kodları (2 · 4 · 5 · 6). AYNI koşu kapı damgası
  (`<ağaç>/oturumlar/KOSU-KAPI.json`) ve defter satırı yazılır, tek fark `"kod":"SINAMA"`.
- **Bekçi yasağı KOYMAZ, `KAYNAK-DURUM.json`a DOKUNMAZ.**
- `--kod` verilirse çıkış 2: kod seçilemez. `SINAMA`, `KODLAR`da YOK. Bilerek: `kapat --kod SINAMA` bekçi yasağı
  koyardı.
- Şart ① **defter:** her SINAMA ilanı `KOSU-KAPI-DEFTERI.jsonl`e satır düşer; "kaç sınama koşusu" =
  `"kod":"SINAMA"` satır sayısı (S6). Öten kapı satır YAZMAZ (S4).
- Yeniden düzenlemenin davranışı koruduğu ölçüldü: önceki `ARAC-KAYNAK-DURUM-KAPI-SINAV-1006.py` (15 kontrol)
  değişmeden geçti.

## 3. Yayın kapısı — şart ②
- `kapi_damgasi()`: **`data/*.js` içindeki HER `URETIM_IZI`**, motor ürünü olanlar (iz'in `motor`unda
  `uret_petek.py` var). `kapi.kod == "SINAMA"` ⇒ **İHLAL**, yayın durur.
- 🔴 **Evren neden `URETILENLER` değil — ölçüldü:** motorun kaynak çıktıları (`donemler.js` · `devletler_harita.js` ·
  `petek_govde.js`) `.gitignore`da; bu ağaçta YOKLAR. Yayına `kodla.py`nin `*_ust.js` + `*_parca.js` eserleri
  gidiyor ve damga satırı `*_ust.js`e AYNEN taşınıyor (dört dosyada aynı `URETIM_IZI` başlangıcı ölçüldü).
  Kaynağa bakan kapı yayın makinesinde KÖR kalırdı. Paketler kaynakları uç uca eklediği için bir dosyada birden
  çok iz olabilir ⇒ `finditer` (Y4).
- Bedel: 569 dosya, 149 MB; soğuk ~14 sn, sıcak 0,7 sn.
- **Bugün `kapi` alanı yoksa (beyan):** HİÇBİR çıktıda yok, çünkü B kuyruğu motor yaması inmedi. Gerçek ağaçta 4
  motor ürünü (`bolgeler.js` · `devlet_harita_ust.js` · `donemler_ust.js` · `petek_govde_ust.js`) "⚪ kapı alanı
  YOK — SINAMA mı ÖLÇÜLEMEDİ" basılır ve **BLOKE ETMEZ**. Bloke etseydi bugünkü her yayın dururdu.
  - 🔴 Bunun anlamı: **B yaması inene kadar SINAMA çıktısı yayın kapısında AYIRT EDİLEMEZ.** Damga motor
    tarafında, motor da tuzda. `kapi` emri bugünden kullanılırsa çıktısı `kapi` alanı taşımaz ve geçer.
    ⇒ Öneri: `kapi` emri B yaması inene kadar KULLANILMASIN, ya da sınama koşusunun çıktısı ayrı worktree'den
    yayına hiç taşınmasın. Hüküm koordinatörde.
  - Yama inince açık kapanmalı: `KAPI_ALANI_ZORUNLU = True` (tek satır) ⇒ alanı olmayan motor ürünü de DURUR
    (Y3 iki yönü de sınar).
- Ayrıştırılamayan iz de İHLAL ("ölçülemedi ≠ temiz").

## 4. B kuyruğu metnine ek (UMIT-W10-KAPI-HUKUM-1006 §2-§3 üstüne)
`_KOSU_KAPI` sözlüğüne **`"kod": _kk.get("kod")`** eklenmeli; yoksa damga SINAMA'yı taşımaz ve yayın kapısı onu
göremez:
```python
_KOSU_KAPI = {"kod": _kk.get("kod"), "durum": _kk["kapi"], "ilan": _kk.get("ilan"),
              "atlama_gerekce": _kk.get("atlama_gerekce"), "git_head": _kk.get("git_head")}
```
- Koşu BAŞI kontrolü kodu sorgulamaz: KOSU da SINAMA da geçerli ilandır (kapı geçti/atlandı). Fark yalnız
  çıktıda doğar.
- Çıktı anındaki `_kapi_damga()` (`"sonda"` alanı) `kod`u da karşılaştırmalı: koşu sürerken SINAMA ilanı KOSU ile
  değiştirilirse (ya da tersi) `"sonda":"DEGISTI"`. Damgada BAŞTAKİ kod kalır, yani yayın kapısı baştaki
  SINAMA'yı görür ve reddeder. Sonradan KOSU ilan ederek sınama çıktısını aklamak mümkün olmaz.

## 5. Ek iş — `denetle_yayin.py` odak tavanı yorumu (W13'ün isteği, koordinatör eki)
Eski yorum (`:1608`, bu ağaçta `:1685`) kovaları elle sayıyordu: "ODAKSIZ / BEYANLI→yabancı". Sekme kovaları
(`ODAK-SEKME-1006b`, main'de bekleyen yama, `odak_olc.py`ye `SEKME_TAVANLARI` ekliyor) gelince bayatladı.
**Seçim: yorum KAYNAĞI gösterir, liste tutmaz.** Yeni metin: kovalar burada sayılmaz; tek otorite `odak_olc.py`
(`kapi_olcumu()` neyi ölçüyorsa o), değerleri `denetim/ODAK-TAVAN.json` anahtarları; çıktı her kovayı kendi
satırında basar.
Gerekçe:
- (b) "çıktı tavan anahtarlarını kendisi basar" **zaten doğru:** `odak_olc.kapi_olcumu()` her kovayı satır olarak
  döndürüyor ve `denetle_yayin` onları basıyor (ölçüldü: "✓ ODAKSIZ 438 (tavan 438)" · "✓ BEYANLI→yabancı 653
  (tavan 655 …)"). Sekme yaması kendi kovalarını aynı kanaldan ekliyor.
- `denetle_yayin.py`ye ayrıca bir "kova listesi" basımı eklemek İKİNCİ bir liste olurdu, yani yeni bir bayatlama
  kaynağı. ⇒ (a): yorum bir ad listesi değil, bir YÖNLENDİRME. Bayatlayacak ad içermiyor. (`SEKME_TAVANLARI` adını
  bile yazmadım; o ad henüz main'de değil.)
- Değişiklik yalnız yorumda; davranış aynı.

## 6. Sınav — 16/16 ✓ (`KAYNAK-DURUM-SINAMA-CIKTI-1006.txt`)
```
İLAN   S1 kapi → 0 · KAYNAK-DURUM.json YAZILMADI · damga kod=SINAMA · defter +1
       S2 SINAMA sonrası bekci_yasak_mi → yasak YOK
       S3 TERS: kapat --kod KOSU → KAYNAK-DURUM.json yazıldı · bekçi YASAK · damga kod=KOSU
       S4 kirli motor → 4 · defter +0 · S5 kapi --kod → 2
       S6 defter: SINAMA 1 · KOSU 1 (sayılabilir)
YAYIN  Y1 S1'in GERÇEK damgasından kurulan donemler_ust.js → İHLAL
       Y2 S3'ün (KOSU) damgasından                          → TEMİZ
       Y3 kapı alanı yok → bugün TEMİZ (⚪) · KAPI_ALANI_ZORUNLU=True → İHLAL
       Y4 paket: motor dışı iz + motor SINAMA izi            → İHLAL
       Y5 motor DIŞI ürün kod=SINAMA taşısa bile             → yok sayılır
       Y6 main()'in "return 1" koşulunda `_kapi_ihlali` var (AST)
       Y7 GERÇEK ağaç → SINAMA 0 · ihlal YOK · kapısız 4
GERÇEK KAYNAK-DURUM.json · DEFTER · KOSU-KAPI.json dokunulmadı (önce = sonra)
```
Yayın kapısı geçici bir KÖK'te sınandı. Y1/Y2'nin çıktı damgası, B metnindeki biçimle (`kapi_bloku`) **ilanın
kendi damgasından** kuruldu; yani zincir ilan → damga → çıktı → yayın kapısı uçtan uca, motor taklit edilerek sınandı.

**Tam `denetle_yayin.py` koşusu (gerçek ağaç):** yeni bölüm "✓ SINAMA damgalı çıktı yok" + "⚪ kapı alanı YOK …"
bastı. Sonuç çıkış 1, ama sebebi bu iş DEĞİL. Değişmemiş `denetle_yayin.py` aynı ağaçta da çıkış 1 veriyor ve tek
✗ satırı ikisinde de aynı: "✗ üretim izi: … bayat 2 … diskte yok 3". Bu, worktree'nin veri tazeliği. İki çıktının
farkı yalnız yeni iki satır.

## 7. Bulunamadı / dikkat
- `denetim/ARAYUZ-MADDE-0930-kapi-dom-sozlesmesi.diff` da `denetle_yayin.py`ye dokunuyor ve **main'e iki yönde de
  uymuyor** (ileri 1 · geri 1, `:1546`). Benden BAĞIMSIZ, önceden bayat bir yama; bu diff ile hunk bölgeleri
  örtüşmüyor (benimkiler `:264` ve `:1750` civarı). Kuyrukta bekliyorsa yeniden üretilmeli.
- B yaması inmeden SINAMA çıktısı ayırt edilemez (§3). Bu, kapının bugünkü sınırı.
