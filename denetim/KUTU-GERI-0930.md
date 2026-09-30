# KUTU-GERI-0930: denetim raporlarındaki hükümler kutuya taşındı

**30 Eylül 2026 · işçi: KUTU-GERI-0930 · koordinatör: YILDIRIM BAYEZIT.** Hüküm DEĞİŞTİRİLMEDİ,
yalnız taşındı. Eşleme koordinatörün 30 Eylül hükmüdür (A-H, cross-session mesajı).
Betik: scratchpad `kutu_geri.py` (kuru varsayılan · `--yaz` · madde kümesi PARTI.json ile
birebir sınanır · sözlük dışı kelime ve gerekçesiz olumsuz hüküm `assert` ile durdurur ·
var olan CEVAP.json EZİLMEZ).

## ① Sonuç
```
ozet.py atlas   ÖNCE: 81 paket · 9 işlenmemiş · 677 açık · 17 karar bekliyor
                SONRA: 81 paket · 6 işlenmemiş · 785 açık · 39 karar bekliyor
```
Beklenti 9 → 6 idi, tuttu. Açık +108 ve karar +22 (= 3+7+12 `senin-kararin`), yani
108 + 22 = 130 = üç partinin KAPALI olmayan maddeleri. Bunlar yeni iş değil, **daha önce
sayıma girmeyen** işlerdir.

| parti | madde | dağılım |
|---|---|---|
| 0080 | 30 | cozuldu 9 · sirada 5 · kosu-bekliyor 5 · zaten-dogru 3 · senin-kararin 3 · olculecek 3 · cozulemedi 2 |
| 0081 | 53 | kosu-bekliyor 21 · zaten-dogru 12 · senin-kararin 7 · cozulemedi 5 · olculecek 5 · sirada 3 |
| 0082 | 102 | kosu-bekliyor 56 · zaten-dogru 14 · senin-kararin 12 · sirada 10 · cozulemedi 5 · cozuldu 4 · bayat 1 |

Her maddeye şema dışı üç alan eklendi: `kaynak_rapor` (hangi rapor), `rapor_isareti`
(raporun kendi işareti), `tasiyan`. Böylece eşleme geri izlenebilir. Dosya başında
`hukum_dagilimi` · `madde_sayisi` · `paket` · `cevaplayan` · `not` alanları var.

## ② Ad ile kapsam AYRIŞIYOR: ölçüldü
"-0081" adını taşıyan dokuz raporun yalnız dördü parti-0081'e aittir: SAFEVI-DOGU ·
BALKAN-MACAR · KAFKAS-KORFEZ · DUNYA-KRONO (48 madde). Öteki beşi (**KORIDOR · BOGAZ-OLCUM
· KUNYE-ANADOLU · FETIH-1453 · ACILIS-ANIM**) **parti-0080**'in maddelerini tarar.
Kanıt: madde metinleri PARTI.json'la karşılaştırıldı. Örneğin KORIDOR H-0011 "Gümülcine"
0080 H-0011'dir, 0081 H-0011 ise Siirt'tir. ACILIS ve FETIH bunu kendi başlığında yazıyor.
"-0081" eki paketin değil işçinin adıdır. `ls | grep 0081` ile kapsam kurmak yanlış
partiye hüküm yazdırır.

## ③ Kaynağı olmayan maddeler (`olculecek`, not'ta sebebi)
- 0081 H-0008 · 0009 · 0022 · 0028 · 0032: hiçbir raporda yok. GECE-0928-DURUM ④ bunları
  koordinatörde duran kalem olarak sayıyor.
- 0080 H-0014 · H-0017: rapor bulunamadı (D sınıfı ARAYUZ-0077'ye atanmıştı, ARAYUZ-0077.md'de 0080 izi 0).
- 0080 H-0019: KORIDOR bilerek açmadı (725'lik kova).

## ④ Yorumla eşlenenler: koordinatör bakmalı
Kural uygulandı, ama işaret sözlüğe tam oturmadı:
- **0081 H-0005 · H-0053:** "karma → ilk alt vaka" ⇒ `zaten-dogru`. Oysa ikisinde de açık
  alt vaka var (H-0005: Kars ve Kasr-ı Şîrîn uygulayıcıda · H-0053: Erbil ve Semâve bulunamadı).
  Tek madde düzeyinde "hata değildi" okunabilir.
- **0081 H-0013:** "VERİ DOĞRU, arayüz adayı, tarayıcıda ölçülemedi" ⇒ `zaten-dogru`.
  `olculecek` de savunulur.
- **0081 H-0021** (Ⓝ + bulunamadı · K) ⇒ `senin-kararin`, çünkü raporun ⑤ listesi onu K
  kalemi sayıyor. **H-0046** ("bölge kaynaklı, şehir bulunamadı", iki yol + öneri) ⇒
  `senin-kararin`. **H-0044** (istek ölçüldü, A/B seçeneği) ⇒ `senin-kararin`.
- **0081 H-0036 · H-0052:** "İKİSİ DE DEĞİLDİ / bulunamadı" ve "yeniden üretilemedi" ⇒ `cozulemedi`.
- **0080 KORIDOR sınıfları** (①②⑤⑥Ⓑ) F'nin kıyasıyla eşlendi: ① doğru → `zaten-dogru` ·
  bulunamadı → `cozulemedi` · "koordinatör hükmü" → `senin-kararin` · uygulanmış (d3e5d650)
  → `cozuldu`.
- **0080 H-0022:** rapor `sirada` diyor. Sonradan 3147afce "ekokuma_p80b yükleyiciye
  bağlandı" (GECE-0928). Rapor hükmü taşındı; `cozuldu`ya çevirmek koordinatörün işi.
- **0080 cozuldu'lar** (E ilkesi, son durum): H-0001 5e77ff10 · H-0003/H-0004 464f91fd ·
  H-0005 0db86f2a · H-0012 ac1a3c9b · H-0015 ARAYUZ-0077-B §1e · H-0025/28/30 d3e5d650.
  Veri commit'leri koşu 17 tabanında (`merge-base --is-ancestor` ile ölçüldü), ama harita
  çıktısında görünüp görünmedikleri ÖLÇÜLMEDİ.

## ⑤ 0082 ✗ ayrımı: koşu cümlesi yoktu, ölçümle karar verildi
- **H-0031 · H-0076** (yeni sefer kaydı) ve **H-0071** (başlık + mükerrer ok + güzergâh):
  sefer/kronoloji dosyaları motor girdisi değil (`girdi.GIRDI_DOSYALARI` yalnız yerleşim)
  ⇒ `sirada`.
- **H-0069:** raporun kendi cümlesi "petek koşusu gereken madde 0". Düzeltme
  `uret_devirler.py` ve onun koşusu ⇒ `sirada`. `kosu-bekliyor` sözlükte "petek koşusu" diyor.
- **ARAYUZ H-0080 · 86 · 87 · 88** ⇒ `cozuldu` "a261ae94 · r10670 · DOM'da ölçüldü"
  (koordinatör E). H-0086'nın OWTRAD sorusu not'ta açık.

## ⑥ Yan bulgular (dokunulmadı)
- `ozet.py` her koşuda `C:/claudemre/kutu/KUTU.md`yi yeniden yazıyor. İki koşu = iki yazım (beklenen davranış, kayda).
- IRAN-KAFKAS-0082 H-0093 ⚠️: SAFEVI-DOGU-0081-uygula.py Iğdır/Beri'nin yanlış 1878 bitişini
  yeniden yazıyor. İki uygulayıcı SIRALI inmeli (not'ta da yazılı).
- Kalan 6 işlenmemiş parti (0072 · 0073 · 0074 · 0077 · 0078 · 0079): talimat gereği dokunulmadı.

---

# İKİNCİ TUR — parti 0072 · 0073 · 0074 · 0077 · 0078 · 0079 (30 Eylül 2026, akşam)

Kaynak: `denetim/PAKET-{0072-73,0074-78,0077A,0077B,0079}-0930.json`. Toplayıcı ağaçta gezip `hukum`
taşıyan her sözlüğü madde saydı ⇒ **162/162** (iki dosya `partiler[…].madde`, üçü kökte `madde`).
Betik: scratchpad `kutu_geri2.py` (madde kümesi PARTI.json'la birebir · sözlük · gerekçe · **delil
zorunluluğu** `assert` · var olan CEVAP.json ezilmez).

## Sonuç
```
ozet.py atlas  ÖNCE: 6 işlenmemiş · 785 açık · 39 karar bekliyor
               SONRA: 0 işlenmemiş · 839 açık · 56 karar bekliyor   (1 yarım — önceden de vardı)
```
Beklenti 6 → 0 idi, tuttu. Açık +54 (= sirada 41 + kosu 1 + olculecek 12) · karar +17 (= senin-kararin 17).

| parti | madde | dağılım |
|---|---|---|
| 0072 | 15 | cozuldu 9 · senin-kararin 2 · zaten-dogru 2 · olculecek 1 · sirada 1 |
| 0073 | 20 | cozuldu 12 · sirada 5 · senin-kararin 2 · once-cozuldu 1 |
| 0074 | 17 | cozuldu 10 · sirada 2 · bayat 1 · cozulemedi 1 · olculecek 1 · senin-kararin 1 · zaten-dogru 1 |
| 0077 | 88 | cozuldu 36 · sirada 30 · senin-kararin 8 · olculecek 4 · tekrar 3 · bayat 2 · cozulemedi 2 · zaten-dogru 2 · kosu 1 |
| 0078 | 6 | olculecek 3 · sirada 2 · cozuldu 1 |
| 0079 | 16 | cozuldu 7 · senin-kararin 4 · olculecek 3 · sirada 1 · zaten-dogru 1 |

Toplam 162: cozuldu 75 · sirada 41 · senin-kararin 17 · olculecek 12 · zaten-dogru 6 · bayat 3 · cozulemedi 3 ·
tekrar 3 · once-cozuldu 1 · kosu-bekliyor 1. PAKET'teki ölçümden fark: **+3 cozuldu / −3 sirada** (aşağıda).

## Sonradan değişenler — üstüne yazma kuralı
UYGULA raporları kutu kelimesi YAZMIYOR ("✅ · 🟡 kısmî · ⛔ · ⏸ · UYGULANDI"). Kural: rapor maddenin
**TAMAMININ** bittiğini söylüyorsa `cozuldu` (+delil, eski hâli `onceki_hukum`da). Kısmen uygulandıysa
PAKET hükmü KALIR, uygulanan yüz `not`a `‖ SONRADAN:` ile eklenir, üst rapor `ust_rapor` alanında.
- **cozuldu'ya çevrilen 3:** 0073 H-0016 (Nusretiye bağı) · 0077 H-0020 (alt_kronoloji 14+15 adım,
  tarayıcıda görülmedi) · 0077 H-0048 (A-M dağılış kartı). Üçü de UYGULA-KRONOLOJI ✅, **commit YOK**.
- **Kısmen uygulanan, hüküm kalan 22:** 0073 H-0009 · 17 · 18 (⛔) · 19 · 0077 H-0002 · 04 · 05 · 17 · 25 ·
  28 · 31 · 33 · 41 (⏸) · 49 · 57 · 58 · 74 · 75 · 76 · 80 · 0078 H-0001 · 04.
- 🔴 **`UYGULA-YERLESIM-0930.md` diskte YOK.** Yerleşim kovasının sonucu yalnız tahtada: **M-5529**. Oradan
  okundu, `not`larda kaynak "tahta M-5529" diye geçiyor.
- `OLCULECEK-0930` bu altı partiye dokunmuyor (19 parti, 47 madde, hiçbiri 007x değil).
- `UYGULA-KUNYE-HARITA-0930`: uygulanan 0 ⇒ üstüne yazılacak bir şey yok.

## 🔴 Yeni bulgu — aynı kusur OLCULECEK-0930'da
`OLCULECEK-0930.json` 47 `olculecek` maddeyi yeniden hükme bağladı (cozuldu 7 · bayat 4 · once-cozuldu 1 ·
zaten-dogru 5 · sirada 5 · kosu 6 · senin-kararin 1 · olculecek 18). Ama **hiçbir CEVAP.json'a yazmadı.**
Ölçüldü: ilk turda benim yazdığım 0080 H-0014/17/19 ve 0081 H-0008/09/22/28/32 hâlâ `olculecek`
(damga 16:59). Öteki atlas partileri (14): 0008 · 0030 · 0031 · 0033 · 0034 · 0035 · 0040 · 0042 · 0043 · 0044 ·
0045 · 0070 · 0071 · 0076 (+ kasa projesinin 3 partisi, dördü de `olculecek` kaldı). ⇒ `ozet.py`nin "karar/açık" sayıları bu 29 çözülmüş maddeyi hâlâ açık sayıyor.
