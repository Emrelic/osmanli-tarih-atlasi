# KASA-DIKIS-KAPI-1010 — `denetle.py` DİKİŞ KAPISI (VERI_UFKU[0] günündeki sahte geçiş)

Görev: YILDIRIM BAYEZIT (1281-ILK-HALKA kararı (d): "kural değil KAPI") · Araştırmacı: KASA.
`arac/` donuk ⇒ çıktı yalnız **`denetim/KASA-DIKIS-KAPI-1010.diff`** (FAZ 1'e eklenecek). Zemin: main 5ba57827.
`git apply --check` temiz.

## 1. Kapı
**Ölçüt:** bir `s:` dönemi için hepsi doğruysa İHLAL:
- `f` == `VERI_UFKU[0]` (bugün 1281-01-01; dosyanın kendi kuralı gereği sabit düz yazılmadı, `girdi`den okunur).
- Aynı kayıtta `f`si ondan KÜÇÜK başka bir dönem var. Sıraya değil TARİHE bakılır; `s:` dizisi sıralı varsayılmaz.
- Dönemin kendi `kaynak:`'ı boş. Kayıt düzeyindeki `kaynak:` SAYILMAZ: o kaynak geçiş gününü tarihlemiyor.
  `bulunamadı` DOLU sayılır (§4).
**Dokunulmayan:** önünde dönem olmayan halka = KIRPMA (Ⓚ) — yalnız BİLGİ olarak sayılır.
**Defter:** bugünkü 13 kaynaksız dikiş `DIKIS_DEFTER`'de BORÇ.
- Yeni üye = GERİLEME (çıkış 1).
- Düşen üye = iyileşme ("DEFTER GEVŞEK", elle küçültülür; defter yalnız İNER).
**Eklenen:** `DIKIS_DEFTER` · `dikis_olc(Y)` · `dikis_rapor(Y)` (kaynak-tavan kapısının hemen arkasında) ·
`main()` içinde bir çağrı. Gerekçe, mekanizma ve beyanlı sınır blok yorumunda.

## 2. Sınav (iki yön + gerçek veri)
**Gerçek veri** (main 5ba57827, `girdi.yukle`, 4.300 kayıt):
```
kaynaksız dikiş   13   = DIKIS_DEFTER (birebir küme eşitliği ✓) ⇒ ✓ ihlal YOK
kaynaklı dikiş     1   Elbistan (aşağıda beyanlı sınır)
kırpma (s[0])   2442   dokunulmadı
```
**Sentetik 7 vaka — 7/7 GEÇTİ:**
```
1 kaynaksız geçiş (önünde halka var, kaynak yok)   → İHLAL ✓
2 kaynaklı geçiş                                  → 0 ✓
3 s[0] kırpma                                     → 0 ✓ (kirpma kovası)
4 sırasız dizi (1281 halkası önce yazılmış)        → İHLAL ✓ (tarih esaslı)
5 defterde olan kaynaksız geçiş                   → 0 ✓
6 kaynak:"bulunamadı"                             → 0 ✓ (dolu sayılır)
7 yalnız kayıt düzeyinde kaynak                   → İHLAL ✓ (sayılmaz)
```
**Benzetimler (gerçek veri üstünde):**
- **MÖ paketi benzetimi:** bir kırpma noktasının (İnegöl) önüne kaynaklı 1258 halkası eklendi ⇒ `✗ … kaynaksız geçiş 14
  (defter 13)` + "DİKİŞ YENİ yerlesimler.js|İnegöl|1281-01-01|bizans" ⇒ **İHLAL** ✓. Kapının yakalaması gereken şey tam bu.
- **FAZ 2 benzetimi:** Erzurum düzeltildi (ilhanli f 1308, kaynaklı) ⇒ `✓ … 12 (defter 13)` + "DEFTER GEVŞEK 13→12
  (iyileşme)" ⇒ ihlal YOK ✓.
### 2.1 Tam koşu — eski ↔ yeni `arac/denetle.py`
- Eski: worktree'de `py arac/denetle.py` ⇒ **çıkış 2**, tek ölçülemeyen soru Değişmez 8 ("devletler_harita.js YOK
  (üretilmiş + gitignore'lu çıktı)", taze ağaçta beklenir).
- Yeni: diff uygulanmış kopya ⇒ **çıkış 2**. Kapı satırı: `Ek denetim ✓ 1281-01-01 DİKİŞİ: kaynaksız geçiş 13 (defter 13) ·
  kaynaklı geçiş 1 · kırpma (s[0]) 2442`.
- İki çıktı arasındaki öteki farkların HEPSİ ortam kaynaklı. Kopya `arac/` dışındaki dosyaları taşımıyordu:
  `KAYNAK-TAVAN` json · `js/rotus.js` · `veri-kaynak/` · 2t defteri ⇒ o kapılar kopyada "ÖLÇÜLEMEDİ".
- Bu satırlar süzülünce iki çıktı birebir aynı.
⇒ **Kapı yeni bir ihlal ya da ölçülemeyen soru EKLEMİYOR**; çıkış kodu değişmiyor. Gerçek ağaçta uygulanınca ölçüm
FAZ 1 koşusunda doğrulanmalı.

## 3. Beyanlı sınır ve öz-düzeltmeler
- 🔴 **Elbistan:** 1281 halkasında `kaynak:` VAR ("TDV elbistan: 1337'ye kadar Moğol/İlhanlı · …") ama kaynak halkanın
  SONUNU (1337) tarihliyor, 1281 başlangıcını değil ⇒ kapıdan GEÇER. Kapı `kaynak:` DOLU mu diye sorar, NEYİ
  tarihlediğini bilemez (D267). EPOK'un 14'ü = 13 kaynaksız + Elbistan. Elbistan düzeltmesi okuma ile yapılır (FAZ 2,
  1308 devri).
- **Öz-düzeltme 1 (KASA-1281-ILK-HALKA §1.1):** "kırpma 765" sayımı benim ayrıştırıcımın `yerlesimler*.js` üzerindeki dar
  okumasıydı. Yetkili yükleyici (`girdi.yukle`, 4.300 kayıt, bütün nokta dosyaları) **2.442** kırpma sayıyor. Ⓚ/Ⓖ ayrımı
  ve hüküm değişmez; Ⓚ'nin büyüklüğü 3 kat.
- **Öz-düzeltme 2:** Bayburt (`yerlesimler_anadolu_0914.js`) benim 13'ümde yoktu; yetkili yükleyiciyle VAR ⇒ EPOK'un
  14'ü TAMAM, fark kapandı.

## 3b. v2 — ÇAPA HAREKETLİ düzeltmesi (koordinatör) + ölçerken bulunan ikinci kusur
**Kusur 1 (koordinatör):** ölçüt yalnız `VERI_UFKU[0]`a bakıyordu. MÖ paketi ufku taşıyınca kapı 1281 dikişlerine
KÖR olurdu. `1281-01-01` burada bir ayar değil tarihsel bir artefakt.
⇒ **Çare:** `ESKI_UFUKLAR = ("1281-01-01",)` (dayanağıyla). Ölçüt `f ∈ ESKI_UFUKLAR ∪ {VERI_UFKU[0]}`. Ölü girdi
"ESKİ UFUK ÖLÜ" diye basılır.
**Kusur 2 (v2 sınavında ÖLÇÜLDÜ, vaka 8):** "önünde halka var mı" kıyası DİZGİYLE yapılıyordu.
- `"-3100-01-01" > "-2999-01-01"` (dizgi) ⇒ MÖ paketinin eklediği halka "önce" görünmüyordu.
- Ufuk taşındığında yeni ufkun dikişleri de kaçardı.
- ⇒ **Çare:** kıyas `arac/gun.py` `gun()` ile yapılıyor; projenin tarih sayacında TEK otorite, tam bu tuzak için
  yazılmış ("negatif yıl: '-0499' < '-2999' TERS sıra").
**v2 sınavı — 10/10 GEÇTİ:**
- Eski 1-7 (5 numara defter vakası, ayrıca §2'de).
- **8** yeni ufuk dikişi (-3100 → -2999) İHLAL · **9** eski ufuk (1281) ufuk -2999'a taşınmışken İHLAL ·
  **10** MÖ halkası (-0538) 1281'in önünde İHLAL · **11** -2999 s[0] kırpması 0.
**Gerçek veri:**
```
BUGÜN                         ✓ UFUK DİKİŞİ (1281-01-01): 13 (defter 13) · kaynaklı 1 · kırpma 2442
UFUK -2999'A TAŞINMIŞ         ✓ UFUK DİKİŞİ (-2999-01-01 · 1281-01-01): 13 (defter 13)   ← kapı GÖRMEYE devam ediyor
TAŞINMIŞ, ESKI_UFUKLAR YOK    ✓ … 0 (defter 13)                                          ← eski kusurun KÖRLÜĞÜ (negatif kontrol)
TAŞINMIŞ + İnegöl'e MÖ halkası ✗ İHLAL                                                    ← paket benzetimi
ölü girdi ("1500-02-03")      ⚠️ ESKİ UFUK ÖLÜ                                             ← liste kendini temizletir
```
Diff v2: 131 satır, `git apply --check` temiz.

## 4. Uygulama notu
- Diff yalnız `arac/denetle.py`'ye dokunuyor (+79 satır). Veri değişmez.
- FAZ 2'de 13 dikiş 1308 devriyle düzeltildikçe `DIKIS_DEFTER` elle küçültülür; kapı "GEVŞEK" uyarısıyla hatırlatır.
- MÖ / Sümer paketi inmeden ÖNCE uygulanmalı. Paket `s[0]`'ın önüne halka eklerse kapı her eski kırpmayı ADIYLA yakalar.
