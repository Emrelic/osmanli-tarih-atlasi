# INIS-A-PARTI-1010 — A + UYGULANABİLİR kalemlerin birleşik diff'i

Sevk: YILDIRIM BAYEZIT, 10 Ekim 2026 · işçi: INIS-A-PARTI-1010 (EMRELIC, opus)
Taban: `origin/main` = `197455c8f110e3dbd229ae00f55b1f3fc9fd1968` (`HEAD..origin/main` = 0)
Otorite: `denetim/LAB-INIS-AB-1010.csv` (154 satır) + `denetim/INIS-SIRA-1010.md`
Ölçüm ağacı: ayrı worktree (scratchpad), ana checkout'ta çalışılmadı. UYGULAMA/PUSH YOK.

## 0. ÖNGÖRÜ — ölçümden ÖNCE (CSV okundu; hiçbir diff çözülmedi, hiçbir `--check` koşmadı)

Evren: CSV'de `kova=A` ∧ `main_durumu=UYGULANABILIR` → **39 kalem** (sayıldı). Birim: KALEM.
Önceden ayrılanlar (koordinatörün emri, ölçüm değil): MÖ 5 (NOKTA-SUMER ana · B10 · K2 ·
KUNYE-SUMER-7 · v2) · seçenek kümesi 11 (`LAB-KONUM-*` no 142-152) · düşük sürüm 1
(ZAMAN-Z5-KOORD-v2 ↔ v4) ⇒ aday **22**.

| soru | öngörü |
|---|---|
| diff yolu çözülemeyen | **0-1** |
| 22 adaydan tek başına `--check` TEMİZ | **20 ± 2** (CSV başka bir `main`e göre; `197455c8` ilerledi). En şüpheli: KOORD-DEVLETLER-1010 (INIS-SIRA: "V2'den SONRA" — V2 MÖ diye dışarıda) |
| ikili çatışan ÇİFT (yalnız aynı dosyaya dokunanlar) | **2 ± 2** — adaylar: TUR ↔ TUR2 (aynı kronoloji dosyaları) · ARAC-TAHTA-NUMARA ↔ TAHTA-ACIL-I (aynı tahta*.py) · KRONO-GORUNURLUK-SUZGEC ↔ NEGATIF-YIL-A2 (js/suzgec.js). Kötümser yanlılık uyarısı alındı ⇒ beklenenden AZ |
| batıya giren (birleşikte `--check` temiz) | **20 ± 2** |
| ZAMAN-Z5 v2'nin v4'te olmayan içeriği | **0** (v4 artımlı sanılıyor) |
| seçenek kümesinde nokta sayısı | **5-7** nokta (11 kalem; v1 ile v2 aynı blob `594f4ca848b8` ⇒ en az bir kalem kopya) |

---

## 1. ÖLÇÜM

### 1.0 Öngörü sınavı
```
soru                         öngörü     ölçüm                                  hüküm
çözülemeyen diff yolu        0-1        0 (39/39 çözüldü, 39/39 blob CSV ile   TUTTU
                                        BİREBİR — sözleşme denetim/<KALEM>.diff)
tek başına --check temiz     20 ± 2/22  22/22 (ve 39/39)                       TUTMADI — kötümser (uyarıldığı gibi)
ikili çatışan çift           2 ± 2      1 (KASA-FAZ2 ↔ NOKTA-ONCE1281-UCUZ)    TUTTU
batıya giren                 20 ± 2     22 (21 doğrudan + 1 elle birleştirilen) TUTTU (üst sınırda)
Z5 v2'nin v4'te olmayanı     0          0 KAYIT (bkz. 1.4)                     TUTTU
seçenek kümesi nokta sayısı  5-7        17 nokta / 11 kalem                    TUTMADI — küme ~3 kat büyük
```
📌 İkinci tutmayan öngörü ARAMA değil SAYIM yanılgısı: kalem sayısından nokta sayısı
çıkaramadım; v3 tek başına 9 nokta taşıyor.

### 1.1 Çıkış kodları — komutun KENDİSİNDEN (`subprocess.returncode`, boru yok)
```
ⓐ tek tek, 39 kalem, taban 197455c8     check=0 ×39 · -R check=1 ×39 (hiçbiri inmemiş)
ⓑ ikili, aynı dosyaya dokunan 10 çift,  9 çift iki yönde 0 · 1 çift iki yönde 1:
   İKİ YÖNDE                            KASA-FAZ2-1010 ↔ NOKTA-ONCE1281-UCUZ-1010
                                        data/yerlesimler_avrupa.js — AYNI SATIR (Kurtuba)
ⓒ kümülatif (aday sırasıyla)            21 girdi · 1 girmedi (UCUZ, aynı sebep)
BİRLEŞİK diff, taze origin/main ağacı   git apply --check rc=0 · -R --check rc=1
sözdizimi (birleşik ağaç, 53 dosya)     node --check 29/29 · py_compile 24/24 · hata 0
```

### 1.2 Tek çatışmanın çözümü — Kurtuba (Córdoba), `data/yerlesimler_avrupa.js`
İki diff **aynı satırı, çakışmayan iki alanda** değiştiriyor:
- **KASA-FAZ2:** satırın gövdesine dokunmuyor (ölçüldü: `-` ile `+` satırı yalnız sonda
  `}] },` → `}],` farklı), altına `isg:[{f:"1810-01-24",t:"1812-09-01",d:"fransa-cumhuriyet"…}]` ekliyor.
- **NOKTA-ONCE1281-UCUZ:** `s:` başını `1281-01-01` → **`1236-01-01`** (kastilya, TDV kurtuba) yapıyor; tek hunk, tek satır.
⇒ Birleşik satır = UCUZ'un yeni satırı (sonu `}],`) + KASA'nın `isg:` satırı. Betik:
`scratchpad/INIS-A-PARTI/birlestir.py` (KASA'nın gövdeye dokunmadığını `assert` ile sınıyor).
**Hiçbir alanın değeri seçilmedi, ikisi de korundu** ⇒ hüküm gerektirmiyor.

### 1.3 BATI — 22 kalem (`denetim/INIS-A-PARTI-1010.diff`, 53 dosya, 13 yeni)
APPJS-TARIH-1010 · ARAC-TAHTA-NUMARA-1010 · ARGV-GIT-DENETIM-1010-v2 · **KOORD-DEVLETLER-1010 ⚠️** ·
KOSU-YAYIN-KAPI-1010 · KRONO-GORUNURLUK-1008-SUZGEC · -TUR · -TUR2 · KRONO-NEG-1010 ·
**KRONO-ONCE1281-1010-C ⚠️** · KRONO-SONRA1923-EKSIK-1008 · NEGATIF-YIL-1010-A2 ·
NEGATIF-YIL-B-SINAV-DUZELT-1010 · RENK-ARDIL-1009-v3-PAKETUSTU · SAHIPLIK-DOSYA-DOKUMU-1009-v2 ·
SINAV-ISIRMA-1010 · TAHTA-ACIL-I-1010 · YER-YAMA-SESSIZ-7-1010-KOORD-v2 · **ZAMAN-Z5-1009-KOORD-v4 ⚠️** ·
KASA-FAZ2-1010 · NOKTA-ONCE1281-UCUZ-1010 (Kurtuba birleştirilmiş) · **NOKTA-ONCE1281-ZINCIR-1010 ⚠️**

⚠️ Metin olarak temiz ama HÜKÜM bekleyen dört kalem (çıkarmadım — sen çıkarırsın):
| kalem | niçin |
|---|---|
| KOORD-DEVLETLER-1010 | Diff veriye `// TASLAK — koordinatör onayı bekliyor` yorumu yazıyor (`teuton-sovalyeleri` → `harita:"teuton-devleti"`). INIS-SIRA: "V2'den SONRA" — V2 MÖ diye dışarıda, ama diff `main`e V2'siz de temiz uygulanıyor (bağımlılık METİN değil SIRA beyanıymış). INIS-SIRA: KASA-FAZ2 bunu + `paketle.py yenile`yi AYNI inişte ister |
| ZAMAN-Z5-1009-KOORD-v4 | `data/yer_yama_1923_1945.js` KARANTİNA dosyası; v4 karantina başlığını SİLİYOR (yeniden üretilmiş gövde). Dosya `girdi_listesi.py`de YOK ⇒ inişi motoru ETKİLEMEZ. ⚠️ LAB-v3-ikame ⓑ şerhi: bu dosya Kandehar (`:1575`) ve Angkor (`:7729`) için 1281'den tam `s:` taşıyor — etkinleşirse İKAME'yi geri alır |
| KRONO-ONCE1281-1010-C | Yeni `data/olaylar_once1281_c.js`; `index.html`de satırı YOK (rg 0) ⇒ uygulama YÜKLEMEZ; `olaylar*.js` olduğu için `denetle.py` Değişmez 2 evrenine GİRER. INIS-SIRA: A/B kardeşleri `index.html`de ÇAKIŞIYOR |
| NOKTA-ONCE1281-ZINCIR-1010 | Aynı desen: yeni `data/olaylar_once1281_zincir_1010.js`, `index.html`de YOK. INIS-SIRA bu ikisini "KAPSAM DIŞI, karar bilgisi YOK" sınıfına koymuştu |

### 1.4 Sürüm çatışmaları
- **ZAMAN-Z5 v2 ↔ v4:** iki diff de tek dosyanın (`yer_yama_1923_1945.js`) tamamını yeniden yazıyor
  (taban 8007 · v2 7997 · v4 8002 satır). v2'ye özgü 81 satır, v4'e özgü 84 satır; ikisi de AYNI
  77 kaydı (Dimetoka · Kavala · Atina · Halep · Bağdat …) farklı yazıyor. **v2'de değişip v4'te
  HİÇ değişmeyen kayıt: 0** ⇒ v4 v2'nin üst kümesi; v2 düştü. (Betik `z5.py`.)
- **KUNYE-SUMER-7 v1 ↔ v2:** MÖ diye beşlinin içinde çıkarıldı; bu işte ölçülmedi.
- **LAB-KONUM-ONERI-1010 ↔ -v2:** blob AYNI (`594f4ca848b8`) — sürüm değil KOPYA.

### 1.5 BATIDAN ÇIKANLAR — 17 kalem
- **MÖ (5):** NOKTA-SUMER-1010 · -B10 · -K2 · KUNYE-SUMER-7-1010 · -v2 — hepsi tek başına `--check` 0.
- **Düşük sürüm (1):** ZAMAN-Z5-1009-KOORD-v2.
- **Seçenek (11):** §2.

## 2. SEÇENEK TABLOSU — 11 kalem · 17 nokta · HÜKÜM SENİN
LAB'in önerisi `makine/lab:denetim/LAB-KONUM-ONERI-1010-v3.md` (revizyon v3b) satır 165-171:
**v3 → v3-ikame → v3-balasagun-not**, BEKLER uygulanmaz, Kusayr karar bekliyor.

| nokta | seçenekler (kalem → işlem) | LAB önerisi |
|---|---|---|
| Hürmüz Adası · Maskat · Merv (Mari) · Silifke · Tâif · Turfan · Tırgan | ONERI-1010 = -v2 = -v3 → aynı TAŞIMA (üçü birebir aynı değer) | **v3** (fark yok; v1/v2 v3'ün alt kümesi) |
| Pantelerya | ADAY-pantelerya = v3 → TAŞIMA 36.792/11.990 → 36.8315/11.945 (aynı değer) | **v3** (ADAY ayrıca uygulanırsa ÇAKIŞIR) |
| **Van** | v2-ikame → YENİ NOKTA "Van (Kale ve Eski Şehir)" 38.5019/43.3401 + mevcut kayıtta alan değişimi · v2-tasima = v3 → TAŞIMA 38.502/43.393 → 38.5019/43.3401 (+`sehirler.js`) | **v3 = TAŞIMA** ⚠️ HUKUM-KASA §6.3 VAN'ı tam İKAME vakası diye anıyor ("eski şehir 1915-18'de TERK EDİLDİ, yenisi kuruldu") — LAB'in önerisi kendi hükmünle ÇELİŞİYOR olabilir |
| Angkor | v2-ikame = v3-ikame → İKAME: yeni "Angkor Thom (Yaşodharapura)" 13.4413/103.859 `bit:1431` + mevcut kayda `kur:1431` · v2-tasima → TAŞIMA 13.4120/103.867 → 13.4413/103.859 | **v3-ikame** (ⓐ: `kademe_f5c9a5.js:81` `kd` geri yazabilir — AYNI commit'te bakılmalı) |
| Kandehar | v2-ikame = v3-ikame → İKAME: yeni "Kandehar (Eski Şehir)" 31.6026/65.6589 `bit:1738-03-24` + modern kayda `kur` | **v3-ikame** (bölme günü kaydın kendi sınırı, kaynakla TEYİT EDİLMEDİ — LAB beyanı) |
| Balasagun (Ak-Beşim) | v3-balasagun-not → YALNIZ `not:` (koordinat aynı) · v3-balasagun-tasima-BEKLER → 42.76/75.24 → 42.805/75.199 + `not:` | **not** (BEKLER: ikinci tanık yok; ikisi aynı satır, birbirini dışlar) |
| Tahran · Şibînülkûm (Menûfiye) | ikame-tasi-secenegi → iki TAŞIMA (35.69/51.39 → 35.5943/51.4472 · 30.552/31.011 → 30.466/30.932) | v3'e GİRMEDİ. LAB v1.md §C1/C2 ÜÇ seçenek sayıyor — (a) taşı (diff YALNIZ bu) · (b) ayrı tarihî nokta (Rey · Menûf, kendi dönemiyle) · (c) dokunma — tavsiye YAZMIYOR ("karar koordinatörde"). (a)'nın eksisi LAB'in kendi cümlesi: Tahran'da "1789–1923 Kacar başkenti yanlış yerde kalır (12 km)" ⇒ HUKUM §6.3'e göre bu (b) İKAME sınıfı |
| Kusayr | kusayr-secenekA → TAŞIMA 26.104/34.283 → 26.15/34.25 | LAB v1.md:69 **"bu commit'e KOYMAYIN"** (taşımanın doğru olduğu dönem — Memlük limanı mı, Osmanlı kalesi mi — tarih kaynağı istiyor); v3.md:165 "karar bekliyor" |

## 3. ZORUNLU SIRA
- **Metin sırası YOK:** ölçülen 10 çiftin 9'u iki yönde temiz; tek çatışma birleşik diff'in
  İÇİNDE çözüldü ⇒ birleşik diff TEK `git apply` ile iner.
- **Anlam sırası (INIS-SIRA'dan, metne yansımıyor):** NEGATIF-YIL-A2 → APPJS-TARIH (J1→J2) —
  ikisi de batıda ⇒ tek inişte sorun yok. KASA-FAZ2 ⇒ KOORD-DEVLETLER + `paketle.py yenile`
  AYNI iniş. js/ değişti (suzgec · app · d_katman) ⇒ `surum_damgala` ŞART.

## 4. DENETİM — taban `197455c8` ↔ birleşik ağaç (`denetle.py`, iki ayrı worktree)
İkisi de **çıkış 2** — yalnız Değişmez 8 ÖLÇÜLEMEDİ (`devletler_harita.js` taze ağaçta yok, beklenen).
İhlal (çıkış 1) YOK. Değişen satırlar:
```
Değişmez 1c   belgesiz sahipsiz  4 → 3   (tavan 4)        İYİLEŞME ⇒ tavan inmeli (§3.4③)
Değişmez 1b   beyanlı boşluk     7/7 → 8/8
Değişmez 2s   AÇIK               193 → 189 (tavan 193)    İYİLEŞME ⇒ tavan inmeli
              kırılma 1802→1832 · KAPSAM DIŞI 791→788 · YIL-TEMSİLÎ 227→242
Değişmez 2sk  yalnız-taraf       2265 → 2271 (tavan 2265) ⚠️ TAVAN AŞILDI (+6) — uyarı (çıkış 1 değil)
Değişmez 2i   İŞGAL kırılması    171 → 185 · açık 1 (tavan 1)
Değişmez 7    sorgusuz enklav    799 → 813 (beklenen 731, zaten aşıktı) 🧊
kaynaksız s:  1841 → 1837 (tavan 1930)                     İYİLEŞME
m:/egemen     505 → 506
```
⚠️ **2sk +6'nın hangi kalemden geldiğini AYIRMADIM** (her `denetle.py` koşusu ~5 dk; ikiye bölme
~5 koşu ister). Adaylar yalnız veri kalemleri: KASA-FAZ2 (isg + kronoloji) · KRONO-GORUNURLUK-TUR/TUR2 ·
KRONO-SONRA1923 · NOKTA-ONCE1281-UCUZ/ZINCIR · KOORD-DEVLETLER · YER-YAMA-SESSIZ.
`§4.2` beyanı: **2sk sayacına bu partide en az 2 veri diff'i dokunuyor** (kırılma +30, İŞGAL +14).
