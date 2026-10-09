# DEVLETLER-SLUG-IZ-1006 / 1006b — W30 ALINTI-DUZELT ÜSTÜNE yeniden üretim (UMIT-W51c)

Temel: **origin/makine/umit `7859a3a1`** (data/devletler.js `b0829580` ile birebir) + `UMIT-W30-ALINTI-DUZELT-1006-umit.diff` (2df6b782).
Teslim (UYGULANMADI, commit YOK): `DEVLETLER-SLUG-IZ-1006-W30USTU.diff` (284/284 satır) · `DEVLETLER-SLUG-IZ-1006b-W30USTU.diff` (5/5 satır).
Yöntem: eski diff'lerin her (eski satır → yeni satır) çifti W30'lu ağaçta BİREBİR satır eşlemesiyle arandı; bulunamayan
satır = W30'un değiştirdiği satır = çakışma (B0'da birebir var olduğu doğrulandı).

## Zincir --check (temiz ağaçta, sırayla UYGULANARAK)
`makine/umit 7859a3a1` → W30-umit ✓ → 1006-W30USTU ✓ → 1006b-W30USTU ✓ → son hâl, üretilen dosyayla `cmp` BİREBİR.
(Eski `DEVLETLER-SLUG-IZ-1006.diff` makine/umit'te satır 549'da hâlâ reddediliyor — beklenen; yerine W30USTU kullanılmalı.)

## W30 ile çakışma — 11 satır (hepsi 1006 ⑤ "TDV "→"TDV: "; ④ 63 ve 1006b'de çakışma 0)
| madde (künye, B0 satırı, t) | W30 ne yaptı | benim | kazanan |
|---|---|---|---|
| bosna-isgal 1303 · 1899-01-01 | özet alıntıyı TDV'nin BİREBİR cümlesiyle değiştirdi | önek | **ikisi**: W30 metni + `TDV:` öneki |
| vasulu 2630 · 1883 | «1883: Bamako…» → «Bununla birlikte 1883’te Bamako’nun işgali önlenemedi.» | önek | ikisi |
| vasulu 2631 · 1886 | «Mart 1886: …» → «Mart 1886’daki ilk anlaşmayla … bırakmayı kabul etti.» | önek | ikisi |
| vasulu 2635 · 1891 | «1891: …» → «Samori 1891’de … yeniden savaşa tutuştu.» | önek | ikisi |
| bambara 2659 · 1861-03-10 | el-hac-omer alıntısı birebirleştirildi | önek | ikisi |
| asanti 4987 · 1874 | gana alıntısı birebirleştirildi | önek | ikisi |
| dahomey 5001 · 1851 | benin alıntısı birebirleştirildi | önek | ikisi |
| dahomey 5003 · 1868 | benin alıntısı birebirleştirildi | önek | ikisi |
| dahomey 5004 · 1882 | benin alıntısı birebirleştirildi | önek | ikisi |
| tekrur 7468 · 1861-03-10 | el-hac-omer alıntısı birebirleştirildi | önek | ikisi |
| sabah-emirligi 7717 · 1896 | kuveyt alıntısı birebirleştirildi | önek | ikisi |
**Gerekçe:** iki değişiklik ayrı katmanda. W30 alıntının İÇERİĞİNİ düzeltir (paraphrase → TDV'nin birebir cümlesi —
§4 ⑧ açısından doğru olan budur); benim değişikliğim yalnız biçim öneki. ⇒ W30'un metni AYNEN alındı, üstüne yalnız
`kaynak:"TDV ` → `kaynak:"TDV: ` bindi. Betik, benim değişikliğimin bu 11 satırda gerçekten "yalnız önek" olduğunu ve W30
satırının kaynak dışı bir alana dokunmadığını sınadı. Benim eski alıntılarımın (paraphrase) hiçbiri korunmadı.
Bilgi: W30'un devletler.js'teki öteki 4 satırı (imereti ozet 1055 · ngonde künye kaynağı 3236 · bahavelpur ozet 6735 ·
sirbistan-eyaleti künye kaynağı 7799) künye düzeyinde, benim kronoloji satırlarımla çakışmıyor.

## ② ingiliz-kuzey-amerika#2 ve nahua-sehir-devletleri#2 → "başka" kovası
Kaynak metni GÜN kaynağıyla BAŞLAR (kova `başka`, kaynaksız DEĞİL); günü taşıyan cümle alıntılı:
- ingiliz: Office of the Historian, 'Treaty of Paris, 1763' — «the treaty went into effect on February 10, 1763» (sayfadan okundu).
- nahua: Encyclopaedia Britannica, 'Hernán Cortés' — «After subduing the neighbouring territories he laid siege to the city
  itself, conquering it street by street until its capture was completed on August 13, 1521.» (sayfadan okundu; 1006b'de
  yalnız cümle parçası vardı, TAM cümleye genişletildi).
- TDV `amerika` yalnız YIL dayanağı olarak ikinci sırada; "TDV gün vermiyor" açıkça yazılı.

## ③ 63 taşınan alıntı — CANLI TDV gövdesinde (önbelleksiz yeni çekim, 24 slug) BİREBİR
**63/63 BİREBİR**, 0 eksik. (Alıntılar zaten betikle gövdeden kesilmişti; W30'un yöntemi bunu bağımsız yeniden doğruladı.)

## Kapı
`py arac/denetle.py` — W30'lu ağaç: **2** · W30 + 1006-W30USTU + 1006b-W30USTU: **2** · çıktı dosyaları BİREBİR aynı
(`diff` boş). Kod 2 = Değişmez 8 ÖLÇÜLEMEDİ (taze ağaçta `devletler_harita.js` yok).

## Kova (bu temelde, künye içi 3.184 madde — KRONO 19 maddeyi kaldırmış)
son hâl: tdv 390 · başka 678 · beyan 139 · kaynaksız 1.977.
