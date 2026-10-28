# UMIT-W11-OLCUT-1006b — mükerrer ölçütü düzeltmesi + ölü istisna sayacı (diff, UYGULANMADI)

Oturum: UMIT-W11-EDIGU-MUKERRER-1006 · 5 Ekim 2026 · kilit: `arac/denetle.py` (şimdi BIRAKILDI)
Taban: `origin/main` `78c74b80` + **D7-ISG-1006 → ZINCIR-KAYNAGI-KAPI-1006 → KAYNAKSIZLIK-ISG-1006**
(bu sırayla uygulanmış hâl). Diff: `denetim/MUKERRER-OLCUT-1006.diff` (2 dosya, 355 satır).

## 0. 🔴 ÖNCEKİ RAPORUN DÜZELTMESİ: "7 ölü" YANLIŞTI, eski ölçütte 5'ti
`UMIT-W11-OLCUT-1006.md` ölü girdiyi yalnız `mukerrer_maddeler` ile saymıştı. Oysa
`BILINEN_AYRI`yı **iki işlev** okuyor: `mukerrer_maddeler` ve `onek_olcutu` (`denetle.py:4003`).
İkisiyle birlikte ölçüldü (eski ölçüt, evren 2187):
```
ölü 5 · yalnız ÖNEK ölçütünde bastıran (canlı) 2:
  Şûrâ-yı Devlet kuruldu ↔ Şûrâ-yı Devlet'in açılışı   (kodda bilerek: "ÖNEK ölçütü 0,500 ile mükerrer sandı")
  Tomanbay'ın Kahire'de … ↔ Tomanbay'ın Terrûce'de …
```
Koordinatörün "7 ölü kural SİLİNİR" hükmü bu iki girdi için yanlış veriye dayanıyor. **İkisi silinmedi**;
silinseler önek listesine iki yanlış pozitif dönerdi. Sayaç bu yüzden iki işlevde de iz tutuyor.

## 1. C sorusu: yapısal çare 52 kelimeyi gereksiz kılar mı? (ölçüldü)
| varyant | kesin | çıkan | giren | sahici antlaşma mükerrerleri |
|---|---|---|---|---|
| taban | 112 | — | — | yakalanıyor |
| **koordinatörün yapısal önerisi** (`kisiler` boşsa başlıktan HİÇ kelime alma) = önceki A | **45** | 67 | 0 | ❌ **düşüyor**: Lozan ×2 · Bükreş ×5 · Versay ×5 · Trianon ×3 · Londra ×3 · Berlin · Kars · Ankara · Uşi · Petersburg · İstanbul Protokolü ×2 · Sugauli · Krakov · Mısır Krallığı ×2 · Bagirmi … |
| C · 52 genel kelime | 95 | 17 | 0 | kalıyor |
| **D · başlıktan YALNIZ ÖZEL AD** (büyük harfle başlayan kelime; `kisiler` alanı tam) | **95** | **17** | **0** | kalıyor |

- Önerilen yapısal varyant **A/B kusurunu AYNEN tekrar ediyor** (A ile özdeş, 67 çıkan).
  Sahici mükerrerleri yakalayan şey başlıktaki **özel ad** (`lozan`, `versay`, `bukres`); başlığı
  tamamen kapatmak onları da kapatıyor.
- **D**, C ile **özdeş** sonucu veriyor (17 çıkan kümesi birebir aynı, `D ⊆ A`, giren 0) ve **liste
  gerektirmiyor**. ⇒ 52 kelime GEREKSİZ; **C yerine D iner.** D265 (adlandırılmış sabit + sayı)
  gerekmiyor çünkü sabit yok. Çıkan 17'nin 17'si yanlış pozitif: 16 yıl damgalı "krallık
  kuruldu / terk edildi" (1438, 1450, 1500, 1550, 1600) + 1895 Pamir `siniri`.
- Gerçek `denetle.py` koşusuyla üyelik doğrulandı: yeni kesin küme 95, ölçümdeki 17 çıkanın
  0'ı içinde.

## 2. Diff içeriği
**`arac/denetle.py`**
1. `_kisiler_kumesi`: `kisiler` alanı eskisi gibi tamamen, başlıktan yalnız büyük harfli kelime.
   Muafiyet/sıra sayısı/6 harf kırpma aynen. Docstring'de ölçüm ve A'nın reddi gerekçesi var.
2. `_BILINEN_AYRI_KULLANILAN` izi + `_bilinen_ayri(cift)` yardımcısı. `mukerrer_maddeler` ve
   `onek_olcutu` istisnalı çifti artık hemen atlamıyor: **çift gerçekten ötüyorsa** girdiyi
   "kullanıldı" diye işaretleyip öyle atlıyor. Bulunan listeleri değişmedi (önek 20 = 20).
3. **Ölü istisna sayacı** (`main`, önek bloğundan sonra): `BEKLENEN_OLU_ISTISNA = 0`, ölüleri
   ADIYLA basar, aşılırsa ihlal.
4. **10 girdi silindi** (yerinde `# 🗑 SİLİNDİ … ÖLÜ İSTİSNA` yorumu, neden ve başlıklarla):
   - eski ölçütte de ölü (5): Halep↔Şam (Halep başlığı evrende yok) · Erzurum↔Sivas Kongresi
     (iki başlık da yok) · Şah Abbas/Tebriz↔Revan · Barbaros Kuzey Ege↔Ege · Kadızadeliler↔Köprülü.
   - D ile ölen (5), **C sonrası ③'ün cevabı**: **Zamość↔Radom ÖLDÜ** (yalnız `birlik`) ·
     Cahokia↔Batı Yerleşimi (`terk`/`edildi`) · Fort Halkett↔Springfield · Fort Pitt↔Springfield
     (`kuruld`) · Semendire↔Özi (genel kelime).
   BILINEN_AYRI 60 → **50**, ölü **0 / 50**.

**`denetim/ARAC-MUKERRER-OLU-SINAV-1006.py`**: iki yönlü sınav, gerçek işlevlerle, 13 kontrol:
① temiz: bastıran istisna canlı, ölü 0 (+ istisnasız aynı çift ötüyor) · ② öter: karşılıksız
girdi ÖLÜ, ters yönde yazılan girdi canlı · ③ önek: yalnız önekte bastıran girdi canlı ·
④ eski davranışta kişi! öten Karagve↔Zimbabve artık ötmüyor · ⑤ aynı gün Lozan ×2 hâlâ KESİN.
**13 geçti · 0 kaldı.**

## 3. Sınav (ÖNCE = zincir uygulanmış taban · SONRA = + bu diff)
| ölçüm | ÖNCE | SONRA |
|---|---|---|
| mükerrer madde (kesin) | 112 (≤113) | **95** (≤113) |
| ölü istisna | — (sayaç yok) | **0 / 50** ✓ |
| zayıf (kişi:) liste, ihlal değil | 109 | 73 |
| önek listesi, ihlal değil | 20 | 20 |
| öteki özet satırları (`Değişmez*` / `Ek denetim` / `SONUÇ`) | — | **birebir aynı** (`diff` yalnız iki satırı gösterdi) |
| çıkış | 2 (yalnız Değişmez 8 `devletler_harita.js YOK`, taze ağaç) | 2 (aynı sebep) |
| UYARI | 1 (`dogrulanmadi`, önceden var) | 1 · **yeni UYARI 0** |

Diff: LF, **CR 0** · temiz `origin/main` + D7 → ZINCIR-KAPI → KAYNAKSIZLIK zincirinde
`--check` **ileri ✓** · **-R ✗** (reddedildi) · uygulanmış ağaçta sınav 13/13.

## 4. ÖNERİ (yazılmadı, tavan koordinatörün)
- **`BEKLENEN_MUKERRER` 113 → 95** (tek sayı; ölü silme kesin sayıyı etkilemiyor, ölçüldü).
- `BEKLENEN_OLU_ISTISNA = 0` diff'te yazılı, çünkü sayaç bir değer olmadan çalışmıyor;
  koordinatör farklı bir tavan isterse tek satır.
- Zayıf liste 109 → 73: 36 çift yalnız genel başlık kelimesiyle "aynı kişi" sayılıyordu. İhlal değil;
  tek tek okunmadı.

## 5. Bulunamadı / ölçülmedi
- D'nin büyük harf ölçütü cümle başındaki genel kelimeyi ("Tören merkezi…") özel ad sanabilir;
  bugünkü evrende bu bir çift doğurmadı (giren 0), ama ileride doğurabilir.
- Kalan 95 tek tek sınıflanmadı (çoğu `olaylar*` ↔ `kronoloji_sinir*` antlaşma mükerreri, veri borcu).
