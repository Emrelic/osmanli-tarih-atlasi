# UMIT-W10-LEGO-1006d — dolgu.py tuzu · MOTOR_DOLGU_*/KILIT sınıfı · ③3'ün ortam kapısı

Ağaç `C:\atlas-w10`, HEAD ae2e6bbd (detached; `origin/main` artık ef172a97). Okunan dosyalar `arac/dolgu.py`,
`arac/kosu_kilit.py` ve `arac/uret_petek.py`; üçüne de DOKUNULMADI. Motor tuzu dosyalarına ve sqlite'a da dokunulmadı.

## ① dolgu.py'nin kendi önbellek tuzu (`dolgu.py:155-168`)
```python
_ONB_TUZ = json.dumps({
    "surum": KURAL_SURUM,                                   # "dolgu-kural-1" (:155)
    "modul": sha256(dolgu.py),                              # :158
    "kural": {"yaricap_km": YARICAP_KM, "esik_km2": ESIK_KM2, "kaba_tol": KABA_TOL,
              "sade_tol": SADE_TOL, "temas": TEMAS,          # TEMAS sabit 0.02 (:82), ortamdan değil
              "paylasim_adim_km": PAYLASIM_ADIM_KM, "paylasim_nokta_tavan": PAYLASIM_NOKTA_TAVAN},
})
```
- **İÇERİYOR, ama değişken ADIYLA değil, ayrıştırılmış DEĞERİYLE:** 10 değişkenden 6'sı (YARICAP_KM :66 ·
  ESIK_KM2 :68 · KABA :73 · SADE :75 · PAYLASIM_ADIM_KM :77 · NOKTA_TAVAN :79) değer olarak tuzda.
  Sonucu değiştirmeyen bir yazım farkı (`120` ↔ `120.0`) önbelleği öldürmez. Bu, uret_petek'in
  ad=değer dizgisi tuzundan daha doğru bir tasarım.
- `MOTOR_BDOLGU_YOL` (:92) tuzda değil, ama **anahtarda**: `dolgu2_kesit` anahtarı `YOL`u taşır (:669-671).
  Kodun gerekçesi doğru: "yol anahtarda olmasaydı aynılık sınavı kendi kendini doğrulardı" (:664-668).
- `dolgu2_talep` (:735) anahtarı `YOL`u taşımaz. Talep yalnız `devlet` yolunda okunuyor gibi görünüyor; ÖLÇÜLMEDİ (bkz. §5).

## ② Değişken × önbellek tablosu
"uret_petek tuzu": `uret_petek.py:581` her `MOTOR_*`'ı alır (`_ONB_ISLETIM` hariç). `dolgu.py` uret_petek
sürecinde Ⓑ bloğunda (:7962-7964) ithal edildiği için ortam aynıdır ⇒ **10 dolgu değişkeni de bugün
uret_petek'in İKİ tuzunda** (genel + geo).

| değişken | okunduğu yer | sonucu değiştirir mi | uret_petek tuzu (bugün) | dolgu tuzu | dolgu anahtarı | hüküm |
|---|---|---|---|---|---|---|
| `MOTOR_DOLGU_YARICAP_KM` | dolgu:66 | EVET (yalnız dolgu.js) | **öldürür** (gereksiz) | ✔ değer | — | önbellek-dışı (uret_petek için) |
| `MOTOR_DOLGU_ESIK_KM2` | dolgu:68 | EVET (dolgu.js) | **öldürür** (gereksiz) | ✔ | — | önbellek-dışı |
| `MOTOR_DOLGU_KABA` | dolgu:73 | EVET (dolgu.js) | **öldürür** (gereksiz) | ✔ | — | önbellek-dışı |
| `MOTOR_DOLGU_SADE` | dolgu:75 | EVET (dolgu.js) | **öldürür** (gereksiz) | ✔ | — | önbellek-dışı |
| `MOTOR_DOLGU_PAYLASIM_ADIM_KM` | dolgu:77 | EVET (dolgu.js) | **öldürür** (gereksiz) | ✔ | — | önbellek-dışı |
| `MOTOR_DOLGU_NOKTA_TAVAN` | dolgu:79 | EVET (dolgu.js) | **öldürür** (gereksiz) | ✔ | — | önbellek-dışı |
| `MOTOR_BDOLGU_YOL` | dolgu:92 | iddia HAYIR (bit denkliği sınanıyor) | **öldürür** (gereksiz) | ✘ | ✔ `dolgu2_kesit` :670 | önbellek-dışı |
| `MOTOR_DOLGU_ONBELLEK` | dolgu:113 | HAYIR (bellek içi LRU tavanı :751, :1137) | **öldürür** (gereksiz) | ✘ | ✘ | İŞLETİM |
| `MOTOR_DOLGU_SINA_KAYDIR` | dolgu:121 → :1147 | EVET ama yalnız `_ana()` (bağımsız koşu) sınav yolunda; geometri anahtardan ÖNCE kaydırılır ⇒ içerik adresli | **öldürür** (gereksiz) | ✘ | ✔ (gövde WKB) | önbellek-dışı (üretimde boş) |
| `MOTOR_DOLGU_CIKTI` | dolgu:1087 | HAYIR (çıktı YOLU, yalnız `_ana()`) | **öldürür** (gereksiz) | ✘ | ✘ | İŞLETİM |
| `MOTOR_DOLGU_KESIT` | dolgu:1086 · uret_petek:7979 | kesit sayısını kısar (kısmi koşu) | **öldürür** (gereksiz) | ✘ | ✘ (kesit anahtarı kesit başına) | önbellek-dışı |
| `MOTOR_KILIT_KAPALI` | kosu_kilit:96 | HAYIR (çift koşu kilidini atlar) | **öldürür** (gereksiz) | ✘ | ✘ | İŞLETİM |

⇒ **Hiçbiri uret_petek'in önbellekli katmanlarının (k1/col/kusat/dolgu/govde/osm/sb) sonucunu
değiştirmiyor; on ikisi de bugün o katmanları öldürüyor.** Dolgu önbelleğini haklı olarak geçersizleştiren
yedi değişken var: tuzdaki altı kural + anahtardaki `BDOLGU_YOL`. Değişkeni dolgu tuzunda olmayan ama
sonucu değiştiren yok: `SINA_KAYDIR` anahtar içeriğinden geçiyor.
- 1006c §4'teki öneride `MOTOR_DOLGU_ONBELLEK`, `MOTOR_DOLGU_CIKTI` ve `MOTOR_KILIT_KAPALI` "önbellek-dışı"
  kümesindeydi; doğru sınıfları İŞLETİM. Tuz açısından fark yok (ikisi de tuza girmez), ama ad yanıltmasın.
  B kuyruğuna giderken bu üçü `_ONB_ISLETIM`e yazılsın.

## ③ ③3'ün AST kapısı — YAZILDI: `denetim/ARAC-MOTOR-ENV-KAPI-1006.py`
**Diff:** `C:\atlas-umit\denetim\MOTOR-ENV-KAPI-1006.diff` — 3 yeni dosya (kapı + sınav + çıktı) · CR 0 ·
365 satır · `origin/main` ef172a97 ve ae2e6bbd karşısında **ileri ✓ (0) · -R ✗ (1)**. Motor tuzunun dışında.

Tasarım:
- **Evren:** `arac/uret_petek.py` + ithal ettiği yerel modüllerin geçişli kapanışı (fonksiyon içi importlar
  dahil). Bugün **8 modül**: dolgu · girdi · girdi_listesi · kosu_kilit · motor_onbellek · renkler · uret_petek · yukseklik.
- **Okuma desenleri** (yalnız `MOTOR_` önekli sabit dizgi): `os.environ.get/pop/setdefault("X")` ·
  `environ.get("X")` (`from os import environ`) · `os.getenv("X")` / `getenv` · `os.environ["X"]` (Load) ·
  `"X" in os.environ`. Sabit olmayan anahtar ⇒ DİNAMİK. **Yazma okuma sayılmaz:** `os.environ["X"]=…`,
  `dict(os.environ, X=…)`. **Tarama** (`os.environ.items()`, `for k in os.environ`) ayrı listelenir (bugün yalnız
  tuz satırı :581).
- **Kümeler** `uret_petek.py`nin modül düzeyi `_ONB_SONUC` · `_ONB_ISLETIM` · `_ONB_CIKTI_DISI` sabitlerinden
  `literal_eval` ile okunur; sabit değilse çıkış 2. `--kumeler oneri.json`, yama inmeden öneriyi sınar.
- **Hüküm (çıkış 1):** SINIFSIZ (okunuyor, kümede yok) · ÇAKIŞMA (iki kümede) · BAYAT (kümede, okunmuyor) · DİNAMİK.
- **KAPSAYICI MOD:** `_ONB_SONUC` yoksa (bugün) kapı ötmez, çıkış 0. Bugünkü tuz zaten her şeyi alıyor;
  kapı yalnız sınıflanacak adları listeler. ③3 indiği an kapı kendiliğinden SERT moda geçer.

Bugünkü main ölçümü (`MOTOR-ENV-KAPI-CIKTI-1006.txt`):
- **44 okunan `MOTOR_*`** (1006b yalnız uret_petek.py'yi saymıştı; farkın çoğu dolgu.py'nin 10 adı ve
  kosu_kilit.py). `_ONB_ISLETIM` 14 · kapsayıcı tuzda **30 ad**.
- **1006c önerisi (`--kumeler`): ✓ TEMİZ — 44 = 16 SONUÇ + 14 İŞLETİM + 14 ÖNBELLEK-DIŞI.** Öneride
  eksik ya da fazla ad yok.

İki yönlü sınav `denetim/ARAC-MOTOR-ENV-KAPI-SINAV-1006.py` — **10/10 ✓**:
```
ÖTER  Y1 ithal yardımcı modülde os.getenv sınıfsız   Y2 from-os-environ[...] + "in" deseni
      Y3 BAYAT   Y4 ÇAKIŞMA   Y5 DİNAMİK
SUSAR Y0 hepsi sınıflı   Y6 yalnız yazma + tarama (okuma sayılmaz)
HATA  Y7 küme sabit değil → 2
GERÇEK M1 bugünkü motor → KAPSAYICI 0   M2 bugünkü motor + 1006c önerisi → TEMİZ 0
```
📌 Kendi ölçüm hatam (rapora girmeden yakalandı): diff'in geri yön kontrolünde `$?`'yi `echo` içindeki
`$(git rev-parse)`'tan sonra okudum, "geri=0" çıktı. Doğru ölçümde geri=1.

## 4. B kuyruğuna — ③3 ile birlikte inmesi gerekenler (metin)
1. `uret_petek.py:571` `_ONB_ISLETIM`e ekle: `MOTOR_DOLGU_ONBELLEK` · `MOTOR_DOLGU_CIKTI` · `MOTOR_KILIT_KAPALI`.
2. `_ONB_CIKTI_DISI` = `MOTOR_UFUK_BANT` · `MOTOR_B_DOLGU` · `MOTOR_DOLGU_KESIT` · `MOTOR_DOLGU_YARICAP_KM` ·
   `MOTOR_DOLGU_ESIK_KM2` · `MOTOR_DOLGU_KABA` · `MOTOR_DOLGU_SADE` · `MOTOR_DOLGU_PAYLASIM_ADIM_KM` ·
   `MOTOR_DOLGU_NOKTA_TAVAN` · `MOTOR_BDOLGU_YOL` · `MOTOR_DOLGU_SINA_KAYDIR` (11).
3. `_ONB_SONUC` = 1006c'deki 16 ad. Kümeler 17 + 11 + 16 = 44.
4. Kapı, yayın kapısına ya da koşu başına bağlanmalı (`denetle_yayin.py` ya da `uret_petek.py` başı). Bağlanmamış
   kapı, yazılmamış kuraldır. Bağlama yeri koordinatör kararı.
Kapı sınavında M2 bu sınıflamayla da tutar (kümelerin birleşimi aynı); yalnız ad dağılımı değişir.

## 5. Bulunamadı / ölçülmedi
- `dolgu2_talep` (:735) ve `dolgu2_devlet` (:511) anahtarlarının `YOL`u taşımaması doğru mu: talep yalnız
  `devlet` yolunda mı okunuyor? İzlenmedi.
- Kapı, `girdi_listesi.py` gibi ithal edilen ama motor sürecinde gerçekten yüklenip yüklenmediği koşula
  bağlı modülleri de evrene katar; fazla katar, eksik katmaz. Yanlış pozitif SINIFSIZ verebilir, sessiz düşüş vermez.
- Alt süreçlerin (`subprocess`) kendi environ okumaları evrende yok. Bugün motorun çocuğu kendi betiği
  (`MOTOR_ISCI_BETIK`), yani evren aynı.
