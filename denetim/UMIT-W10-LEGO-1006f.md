# UMIT-W10-LEGO-1006f — kapı atlamasını KOŞU DAMGASINA geçirmek (koordinatör şartı ③)

Koordinatör hükmü: ENV kapısı ONAYLANDI. Çıplak atlama YOK, gerekçeli atlama VAR. Şartlar: ① gerekçe
zorunlu (1006e'de var) ② ekrana + JSON (1006e'de var) ③ **koşu damgasına geçsin** (bu iş).
Temel: `origin/main` **311296b7** + `MOTOR-ENV-KAPI-1006` + `KAYNAK-DURUM-ENV-KAPI-1006` (C:\atlas-w10).

## 1. Koşu damgası hangi dosya, kim yazıyor — ÖLÇÜLDÜ
- Koşu damgası **`window.URETIM_IZI`**. Yazan: **`arac/uret_petek.py`** (TUZDA), dört yerde:
  `:5768` (`_bj`) · `:7816` (`_dj`) · `:8014` (`_pg`) · `:8034` (`js`, donemler.js). İçerik her yerde yalnız
  `{"girdi": _GIRDI_IZI, "motor": _MOTOR_IZI}` (`:554`, `:560`). Ortam, bayrak, kapı alanı YOK.
- ⇒ `uret_petek.py:1175`ün "Bu koşunun damgasına yazılır" sözü **bugün de boş**: `MOTOR_YURUYUS` bütçesi
  damgaya yazılmıyor. Koordinatörün verdiği ders birebir sürüyor.
- Tüketiciler: `denetle_yayin.py:189` ve `:284`, `re.search(r'window\.URETIM_IZI\s*=\s*(\{.*?\})\s*;', …)` ·
  `denetle.py:4744` (`.get("motor")`). 🔴 Tuzak: regex `}` ardından `;` gördüğü İLK yerde durur. Damgaya
  serbest metin (atlama gerekçesi) girer ve içinde `};` geçerse ayrıştırma kırılır. Aşağıdaki metin öneri
  bunu kaçışla kapatıyor.
- `kaynak_durum.py` TUZDA DEĞİL ⇒ damganın tuz dışı yarısı oradan yazılabildi (§2). Motorun okuyup çıktıya
  geçirmesi tuzdadır ⇒ yalnız metin (§3).

## 2. `KAYNAK-DURUM-ATLAMA-DAMGA-1006.diff` — yazıldı
CR 0 · 319 satır · zincir: `origin/main 311296b7` → ENV-KAPI (0) → KAYNAK-DURUM-ENV-KAPI (0) → bu diff
**ileri ✓ (0) · -R ✗ (1)**. Dosyalar: `arac/kaynak_durum.py` · `denetim/ARAC-KAYNAK-DURUM-KAPI-SINAV-1006.py` ·
`denetim/KAYNAK-DURUM-KAPI-CIKTI-1006.txt` (tazelendi).
- KOSU ilanı GEÇER ya da ATLANIRSA iki iz yazılır, ikisi de tuz dışı:
  ① **`<kapi-kok>/oturumlar/KOSU-KAPI.json`** — koşunun KENDİ ağacında, son ilan. Motorun okuyacağı yer.
  ② **`<KOK>/oturumlar/KOSU-KAPI-DEFTERI.jsonl`** — ilan makinesinde, EKLEMELİ, her ilan bir satır.
  Satır: `ilan · ilan_eden · kod · kapi (GECTI|ATLANDI) · atlama_gerekce · kapi_kok · git_head · motor{uret_petek,
  renkler, girdi sha256} · ozet`. `motor` alanı `girdi.motor_izi()` ile AYNI üç dosya, ithal edilmeden hesaplanır
  (girdi tuzda). ⇒ **Bugün de ölçülebilir:** "hangi koşu atladı" = defterde `"kapi":"ATLANDI"` satırının
  `motor` izi ↔ çıktının `URETIM_IZI.motor`u (+ ilan zamanı ≤ koşu zamanı).
- **İz yazılamazsa ilan REDDEDİLİR: çıkış 6**, KAYNAK-DURUM.json YAZILMAZ. Gerekçe: izsiz atlama ③ şartının
  kendisini çiğner. GEÇEN ilanda da aynı kural (tek tip; yanlış `--kapi-kok` yolunu da yakalar).
- Öten (4), koşamayan (5), gerekçesiz (2) ilan ve KOSU dışı kodlar iz YAZMAZ.
- `oturumlar/KOSU-KAPI.json` ve `…-DEFTERI.jsonl` gitignore'da DEĞİL (ölçüldü). ⚠️ Defter de KAYNAK-DURUM.json
  gibi yerel: commit edilmezse başka makineden görünmez (`KOSU-DEVIR-CEVRIMI.md:264-275` "makineler arası
  yalan" kalemiyle aynı sınıf; bu iş onu ÇÖZMEZ).

Sınav 15/15 ✓ (`KAYNAK-DURUM-KAPI-CIKTI-1006.txt`):
```
RED    S1 sınıfsız → 4 · S2 atla+öten → 4 · S6 kapı yok → 5 · S8 gerekçesiz → 2 · S9 bozuk motor → 5
       D3 koşu damgası yazılamıyor (kapi-kok/oturumlar bir DOSYA) → 6, ilan yazılmadı, defter +0
GEÇER  S3 temiz yapay → 0 GECTI, defter +1 · S4 gerçek motor (KAPSAYICI) → 0 GECTI, defter +1
       S7 kapı yok + gerekçe → 0 ATLANDI, defter +1
       D1 S3 damgası: kapi GECTI · motor izi = yapay uret_petek.py sha256 (72ec2ee22201) · renkler "YOK"
       D2 S7 damgası: kapi ATLANDI · gerekçe aynen · defterin son satırı = damga
KAPSAM S5 RAM-DARBOGAZI: sahte kapı hiç koşmadı · `kapi` alanı yok · defter +0
GERÇEK KAYNAK-DURUM.json · KOSU-KAPI-DEFTERI.jsonl · KOSU-KAPI.json — üçü de dokunulmadı (önce = sonra)
```
Gerçek dosya koruması: `DOSYA`, `DEFTER` ve gerçek ağacın `kosu_damga_yolu` geçici yola çevrilir, her vakada
assert edilir, sonda üç dosyanın parmak izi karşılaştırılır. S4 gerçek ağaçla koşar, damgası geçici yola düşer.

## 3. B kuyruğu — `uret_petek.py` (TUZ) — METİN, diff YOK
```python
# :560'tan sonra (_MOTOR_IZI'nin yanına) — koşu BAŞINDA, girdi izi gibi:
# 🔴 KOŞU KAPI DAMGASI: kaynak_durum.py `kapat --kod KOSU` koşunun KENDİ ağacına yazar.
_KOSU_KAPI_YOL = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                              "oturumlar", "KOSU-KAPI.json")
try:
    _kk = json.load(io.open(_KOSU_KAPI_YOL, encoding="utf-8"))
    _KOSU_KAPI = {"durum": _kk.get("kapi"), "ilan": _kk.get("ilan"),
                  "atlama_gerekce": _kk.get("atlama_gerekce"),
                  # ilan BU motor için mi yapıldı? Bayat damga başka koşunun ilanıdır.
                  "motor_uyusuyor": _kk.get("motor") == _MOTOR_IZI}
except (OSError, ValueError):
    _KOSU_KAPI = {"durum": "YOK"}          # ilansız koşu — o da ölçülebilir olmalı
print(f"  🚪 KOŞU KAPISI: {_KOSU_KAPI}")

# :5768 · :7816 · :8014 · :8034 — DÖRDÜ DE (biri unutulursa o çıktı kapıyı taşımaz):
    + json.dumps({"girdi": _GIRDI_IZI, "motor": _MOTOR_IZI, "kapi": _KOSU_KAPI},
                 separators=(",", ":"), sort_keys=True).replace(";", "\\u003b") + ";\n")
```
- `.replace(";", "\\u003b")`: geçerli JSON kaçışıdır. `denetle_yayin.py`'nin `\{.*?\}\s*;` regex'i serbest metin
  içindeki `};`'de kırılmaz. `sort_keys` ile sıra `girdi · kapi · motor` olur; `denetle.py:4744`
  (`.get("motor")`) ve `denetle_yayin` (`girdi`/`motor` okur) etkilenmez. Bu iddia ÖLÇÜLMEDİ, koşuyla sınanmalı.
- `os.path.abspath(__file__)`: koşu worktree'sinin kendi ağacı = `--kapi-kok`. Anlık görüntü kopyası (`girdi.DATA`)
  `oturumlar/`ı içermez, bu yüzden kopyadan değil betiğin ağacından okunur.
- Öneri, motorun ilansız (`"YOK"`) koşuyu DURDURMAMASI: yalnız damgaya yazsın. Durdurmak, bir yazıcı
  oturumun elle sınama koşusunu da kilitler. Hüküm koordinatörde.
- `:1175` dersinin ikinci yarısı: aynı satıra `"ortam"` (tuzun MOTOR_* listesi, `:581`) de eklenirse
  "bu koşunun damgasına yazılır" sözü İLK KEZ doğru olur. Ayrı kalem, aynı yer.

## 4. `KOSU-DEVIR-KAPI-KOK-1006.diff` — `KOSU-DEVIR-CEVRIMI.md` önerisi (dosya koordinatörün)
CR 0 · 42 satır · `origin/main 311296b7` ileri ✓ (0) · -R ✗ (1). İki yer:
- §1 çevrimi ⑤: `worktree → kaynak_durum.py kapat --kod KOSU --kapi-kok <worktree> → uret_petek.py`.
- §4 KAYNAK KAPISI'nın altına yeni alt bölüm "KOŞU İLANI = MOTOR ORTAM KAPISI": komut, `--kapi-kok`un neden
  zorunlu sayıldığı, `--kapi-atla` sınırları, çıkış 4/5/6, iz dosyaları, "hangi koşu atladı" sorgusu, diff
  iniş SIRASI uyarısı.
- ⚠️ Gözüme çarpan, düzeltmediğim tutarsızlık: `KOSU-DEVIR-CEVRIMI.md:50` koşuyu **UMIT**'e veriyor;
  `CLAUDE.md §7` (4 Ekim makine rolleri) **HAVVA koşucu** diyor. Önerimde "UMIT" satırına dokunmadım.

## 5. Ağaçlar
- `C:\atlas-w10b`: BEKCI işi `main:denetim/KIMLIK-BEKCI-1006.diff` ile bayt bayt AYNI doğrulandı, sonra temizlendi.
  KOSU-DEVIR diff'i orada üretildi ve geri alındı. Temiz ⇒ **kaldırıldı**.
- `C:\atlas-w10`: bu işin temeli (iki kapı diff'i uygulanmış) + bu diff. Diff yerinde, içerik diff dosyasında.
  Temizlenip **kaldırıldı** (teslim mesajında durum).
