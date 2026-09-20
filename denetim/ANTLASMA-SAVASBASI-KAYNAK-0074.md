# `savas_basi` KAYNAK ÖRNEKLEMİ — ÖLÇÜM

**Oturum:** ANTLASMA-KADEME-0074 · 21 Eylül 2026 · görev 1.MURAT M-4903
**Öngörü (TDV'ye bakılmadan yazıldı):** `denetim/ANTLASMA-SAVASBASI-KAYNAK-0074-ONGORU.md`
**Niçin:** H-0013 ile `ANTLASMALAR[].savas_basi` **ekrana bağlandı** (üç kademenin ①'i).
41 künyenin hiçbirinde kaynak alanı yoktu; yani ekranı besleyen gün kaynaksızdı.
**Kaynak kuralı:** TDV birincil (CLAUDE.md §4) · atlas dayanak değildir (D207) ·
künyenin kendi günü KAYNAK DEĞİLDİR (D210).

---

## 1. Çıkış noktası (TDV'siz, yalnız veri sayımı)
| ölçüm | sayı |
|---|---|
| `ANTLASMALAR` künyesi | 41 |
| `savas_basi` dolu | 37 |
| `savas_basi_kaynak` (önce) | **0** |
| hassasiyet: `YYYY-01-01` (yıl, gün iddiası YOK) | 2 |
| hassasiyet: `YYYY-MM-01` (ay mı, ayın 1'i mi — D213 ayırt edemez) | 7 |
| hassasiyet: tam gün | 28 |

## 2. Örneklem — 11 antlaşma / 10 ayrı savaş
Örneklem, üç kademenin GERÇEKTEN göründüğü 23 maddeden yüzyıllara yayılarak seçildi
(XV–XX. yüzyıl). Ayastefanos ile Berlin aynı savaşı paylaşır, tek tanıklıkla ikisi de
doğrulanır — bu yüzden 11 kayıt / 10 savaş.

| # | antlaşma | `savas_basi` | TDV maddesi | TDV ne diyor | sonuç |
|---|---|---|---|---|---|
| 1 | Edirne 1829 | 1828-04-26 | `edirne-antlasmasi` | "Rusya … savaş açmıştı (26 Nisan 1828)" | ✅ **TAM** |
| 2 | Karlofça 1699 | 1683-07-14 | `viyana` | "14 Temmuz - 12 Eylül arasında devam etmişti" | ✅ **TAM** (kapsayıcı madde) |
| 3 | Kasr-ı Şirin 1639 | 1638-05-08 | `murad-iv` | "23 Zilhicce 1047'de (8 Mayıs 1638) … hareket" | ✅ **TAM** (kapsayıcı madde) |
| 4 | Ayastefanos 1878 | 1877-04-24 | `ayastefanos-antlasmasi` | "24 Nisan 1877 tarihinde … savaş ilân etti" | ✅ **TAM** |
| 5 | Berlin 1878 | 1877-04-24 | `ayastefanos-antlasmasi` | aynı savaş, aynı tanıklık | ✅ **TAM** |
| 6 | Uşi 1912 | 1911-09-29 | `trablusgarp-savasi` | "29 Eylül'de ilân edilen savaş" | ✅ **TAM** ⚠️ bkz. §4 |
| 7 | Lozan 1923 | 1919-05-15 | `izmir` | "15 Mayıs 1919'da başlayıp … süren Yunan işgali" | ✅ **TAM** (kapsayıcı madde) |
| 8 | Küçük Kaynarca 1774 | 1768-10-08 | `kucuk-kaynarca-antlasmasi` | "(Cemâziyelevvel 1182 / **Eylül 1768**)" | 🔴 **ÇELİŞKİ** |
| 9 | Amasya 1555 | 1548-07-27 | `suleyman-i` | 1548 seferi "**29 Mart 1548**" · Nahcıvan seferi "**28 Ağustos 1553**" | 🔴 **ÇELİŞKİ** |
| 10 | Belgrad 1739 | 1737-07-01 | `belgrad-antlasmasi` · `belgrad` | savaşın başlangıcı için tarih YOK | ⚪ **bulunamadı** |
| 11 | İstanbul (Venedik) 1479 | 1463-01-01 | `venedik` · `istanbul-antlasmasi` | 1463 savaşının başlangıcı için tarih YOK | ⚪ **bulunamadı** |

### Oran
| sonuç | kayıt | oran |
|---|---|---|
| ✅ TDV'de doğrulandı (tam gün) | **7 / 11** | **%64** |
| 🔴 TDV başka bir şey söylüyor | 2 / 11 | %18 |
| ⚪ TDV'de arandı, bulunamadı | 2 / 11 | %18 |

Ayrı savaş üzerinden: **6 / 10 savaş** doğrulandı.

---

## 3. 🔴 ASIL BULGU — sahte kesinlik `-01` biçiminde DEĞİL, TAM GÜN görünümlü kayıtlarda
Öngörüde riski `YYYY-MM-01` biçimli 7 kayda yazmıştım (Ö3). **Yanlış tahmin ettim.**
İki çelişkinin ikisi de **tam gün görünümlü** kayıtlarda çıktı:

- **Küçük Kaynarca `1768-10-08`.** TDV "Cemâziyelevvel 1182 / Eylül 1768" diyor.
  Cemâziyelevvel 1182 ≈ 13 Eylül – 11 Ekim 1768, yani 8 Ekim bu ayın İÇİNDE; ama
  TDV'nin MİLÂDÎ karşılığı **Eylül**tür ve TDV GÜN VERMEZ. Atlas burada kaynağın
  desteklediğinden daha ince bir hassasiyet taşıyor (D210: "kaynak yıl/ay diyorsa
  o yazılır ve fark bildirilir").
- **Amasya `1548-07-27`.** TDV'nin verdiği iki gün de bu değil: 1548 İran seferine
  çıkış **29 Mart 1548**, antlaşmayı doğuran Nahcıvan seferine çıkış **28 Ağustos
  1553**. `1548-07-27` ikisini de tutmuyor; büyük ihtimalle Tebriz'e giriş günüdür,
  yani **savaşın başı değil savaşın içindeki bir olay**. Kavram kayması.

⇒ `-01` biçimi en azından kabalığını İTİRAF EDİYOR. Asıl tehlike, kaynağı
olmadığı hâlde gün gibi duran kayıtlardadır — ve `savas_basi` artık EKRANI besliyor.

## 4. ⚠️ TDV kendiyle çelişti (D211 ⑥) — Uşi
- `trablusgarp-savasi` (dar, konuya özel): "**29 Eylül**'de ilân edilen savaş"
- `trablusgarp` (yer maddesi): "**1 Eylül 1911**'de savaş ilân edişi"
Dar ve konuya özel madde esas alındı; çelişki künyeye AÇIKÇA yazıldı, gizlenmedi.
İlk çıkarıcı `usi-antlasmasi` maddesinde "8 Ekim"i savaşın başı sandı — o cümle
Balkan Harbi'nin patlamasını tarihliyor (D211 ⑧: rakamı taşıyan cümlenin NEYİ
tarihlediği okunur). Kayda geçirilmedi.

## 5. TDV tuzakları — bu örneklemde görülenler
| tuzak | vaka |
|---|---|
| ① ölü slug | `kasr-i-sirin-antlasmasi` → arama sayfası döndü |
| ② canlı slug, aradığını vermiyor | `karlofca-antlasmasi`, `lozan-antlasmasi`, `belgrad-antlasmasi`, `amasya-antlasmasi` savaşın BAŞINI yazmıyor |
| ⑥ kaynak kendiyle çelişiyor | Uşi (§4) |
| ⑦ çıkarıcının "okuyamadım"ı | `murad-iv`de çıkarıcı "gün verilmemiş" dedi, oysa cümlede "8 Mayıs 1638" açıkça var |
| ⑧ rakam gövdede geçiyor ≠ o değeri destekliyor | `usi-antlasmasi`nda "8 Ekim" (§4) |

**D217 doğrulandı:** 7 doğrulamanın **4'ü** antlaşma maddesinden değil, kapsayıcı
YER/KİŞİ maddesinden geldi (`viyana` · `murad-iv` · `izmir` · `trablusgarp-savasi`).
TDV olay değil yer-kişi ansiklopedisidir.

---

## 6. YAPILAN — `data/savaslar.js` (paylaşılan dosya, COMMİTLENMEDİ)
- Şema yorumu tazelendi: `savas_basi` artık ekrana beslendiği yazılı; `savas_basi_kaynak`
  tanımlandı. 🔴 **Alan yoksa gün kaynaksızdır**; boş dizgi YAZILMADI, çünkü "aranmadı"
  ile "arandı, bulunamadı" ayrı şeylerdir ve ikincisi bu belgede kayıtlıdır.
- `savas_basi_kaynak` **7 künyeye** yazıldı (yalnız doğrulananlara, alıntısıyla).
- Doğrulanan 7 kayıtta `savas_basi` günü **DEĞİŞTİRİLMEDİ** — zaten tutuyordu.
- 🔴 Çelişen 2 kayıt (Küçük Kaynarca, Amasya) **DÜZELTİLMEDİ**: D207 gereği atlas
  çelişkide düzelir ama düzeltme yetkisi bende değil. Öneri §7'de.
- Doğrulama: `node --check` temiz · `ANTLASMALAR` 41 kayıt · `savas_basi` dolu 37
  (ikisi de değişmedi) · `savas_basi_kaynak` dolu 7 · boş dizgi taşıyan 0.

## 7. HÜKÜM BEKLEYEN — iki düzeltme önerisi
1. **Küçük Kaynarca:** `savas_basi:"1768-10-08"` → `"1768-09-01"` (TDV'nin verdiği ay,
   D210 biçimiyle) ve kaynağa "TDV ay veriyor, gün vermiyor" notu. **Karşı görüş:**
   1768-10-08 yaygın literatürde Osmanlı'nın savaş ilanı günüdür; TDV'nin hicrî ay
   çevirisi tek başına onu çürütmez. Bu yüzden **ikinci bir akademik kaynak** görmeden
   değiştirmeyi önermiyorum — ama ekranda gün gibi durduğunu bildiriyorum.
2. **Amasya:** `1548-07-27` üç seçenekten birine çekilmeli: (a) `1553-08-28` —
   antlaşmayı DOĞURAN Nahcıvan seferi (TDV `suleyman-i`, en savunulabilir olan),
   (b) `1548-03-29` — 1548 seferine çıkış, (c) yıl damgasına düşürmek. **Önerim (a).**
   Gerekçe: `savas_basi`nın tanımı "antlaşmaya götüren savaşın başlangıcı"dır ve
   Amasya'yı doğuran sefer 1553'tür. Bu bir SINIFLANDIRMA düzeltmesidir, tarih
   uydurma değil; ama yetki 1.MURAT'tadır.

## 8. ÖNGÖRÜ SINAVI
| öngörü | tahmin | ölçüm | sonuç |
|---|---|---|---|
| Ö1 canlı slug | 7–9 / 10 (merkez 8) | 8 / 10 canlı (`kasr-i-sirin-antlasmasi` ölü, `istanbul-antlasmasi` alâkasız döndü) | ✅ **tam isabet** |
| Ö2 gün doğrulanma | 4–6 / 10 (merkez 5) | **7 / 11** (6 / 10 savaş) | ✗ **az tahmin ettim** |
| Ö3 uyuşmazlık sayısı | 1–3 | **2** | ✅ bant içinde |
| Ö3 uyuşmazlığın YERİ | `-01` biçimli kayıtlar | **tam gün görünümlü kayıtlar** | ✗ **ters çıktı** — §3 |
| Ö4 boş alan yazılmasın | öneri | uygulandı (7 dolu, 34'te alan YOK) | ✅ |
| Ö5 ekran değişmez | öngörü | doğru — ① düğmesi zaten gün yazmıyor | ✅ |

Ö3'ün YERİ öngörüsünün ters çıkması bu raporun en değerli satırıdır: hassasiyet
biçimine bakarak risk sıralamak YANILTTI.
