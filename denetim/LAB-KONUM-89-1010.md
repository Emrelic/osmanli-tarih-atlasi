# LAB-KONUM-89-1010: konum kusuru denetimi, eksik-şehir B-YOK listesi (89)

> **Yalnız ölçüm.** `data/` dokunulmadı. Commit ve push yapılmadı. Tam tablo: `LAB-KONUM-89-1010.csv` (89 satır).
> **Liste:** `LAB-EKSIK-SEHIR-1000-1280-1009-B.csv`, `kova=B-YOK` (89 şehir: atlasta noktası yok, en yakın nokta >40 km).
> **Tanıklar:** al-Ṯurayyā (2.521) ve Pleiades (34.878) dökümleri. TGN değerleri KASA'nın okumasından alındı (Korint). Eşleştirme LAB-KONUM-KUSURU-1010 ile aynı: 80 km yarıçap, ad normalleştirme ve ek klasik/Arapça adlar, difflib eşiği ≥0,84. Her eşleşme elle okundu.
> **Kural:** HUKUM-KASA-1010 §6 ve tanık-hata kuralı. Ṯ tek başına yalnız ≥10 km'de sinyal sayılır; 5–10 km = GÜRÜLTÜ. Pleiades yalnız `precise` kayıtta ve ≥5 km'de sinyal sayılır. KESİN = iki bağımsız tanık ≥5 km ve birbiriyle uyumlu. Wikipedia kullanılmadı.

## 1 · Hangi koordinat ölçüldü?

89 şehrin **tamamı için tek önerilmiş koordinat kümesi var: LAB B.csv'nin `lat/lon` sütunu.** Bu değerler LAB'in "genel bilgiden" yazdığı yaklaşık değerler; KASA'nın ifadesiyle "dayanak değil". KASA teslimlerinde ayrı koordinat bulunan alt kümeler:

| KASA teslimi (origin/main) | şehir | koordinat kaynağı | LAB değerine uzaklık |
|---|---|---|---|
| `KASA-EKSIK-SEHIR-B2-1010.md` | 20 (18 koordinat, 2 bulunamadı: Sîrâf, Uç) | GeoNames web (modern idari merkez; 3'ü vekil) | 0,1–2,0 km (hepsi). LAB değerleri pratikte GeoNames modern noktası |
| `KAYNAK-EKSIK-SEHIR-1010.md` (①) | 20 (16 koordinat; Alamut bulunamadı) | al-Ṯurayyā / Pleiades / TGN | aşağıda §3 |
| `KAYNAK-SAHIPSIZ-7-1010.md` (makine/kasa) | 7 (koordinat önerisi 2: Korint, Beylekan) | Pleiades / al-Ṯurayyā | 7,35 / 17,36 km |
| `KASA-EKSIK-SEHIR-41-89-1010.md` | 49 | koordinat yok (yalnız LAB değeri; Halyç için "modern Halych 14. yy'da kuruldu, ortaçağ şehri Krylos'ta" uyarısı var, ölçülmedi) | — |

⇒ Ölçülen nesne her 89 şehirde **LAB koordinatıdır.** KASA'nın gazetteer'den aldığı koordinatlar ayrıca §3'te sınandı.

## 2 · Kovalar (LAB koordinatı)

| kova | sayı | şehirler |
|---|---|---|
| **KESİN** (iki tanık ≥5 km ve uyumlu) | **0** | — |
| **ADAY** (tek geçerli sinyal) | **3** | **Korint** (Pleiades 570059 Akrokorinthos 7,35 · 570182 Corinthus 5,91 (aynı gazetteer) · TGN 7010734 **4,85**; Pl–TGN 2,96 km) — TGN eşiğin 0,15 km altında kaldığı için **KESİN sınırında ADAY** · **Beylekan** (yalnız Ṯ BAYLAQAN 17,36 ≥10) · **Kâs (Kath)** (yalnız Ṯ KATH 22,5 ≥10; LAB noktası tarihî Kâs'ın ~22 km kuzeyinde) — **yeni bulgu, KASA'da yoktu** |
| **ÇELİŞKİLİ** | **1** | **Bust (Leşker-i Bâzâr)**: LAB satırı iki yeri birleştiriyor, nokta Leşker-i Bâzâr'da. Pleiades 310634609 Qala Bost 8,63 km (precise) · Ṯ BUST 21,2 km · **Ṯ–Pl 12,8 km** (Ṯ'nın p90 değerinin dışında) |
| **GÜRÜLTÜ** (yalnız Ṯ, 5–10 km) | **4** | Özkent (8,85) · Mansûre (9,84) · Âmul/Çarcuy (5,97) · Kâsân (7,79) |
| **TEMİZ-ÖLÇÜLDÜ** (geçerli tanık ≤5 km) | **41** | Ahlat, Silvan, Sis, Mistra, Misivri, Lazkiye, Kayseriye, Taberiye, Busra, Tartus, Ayla, Sîrâf, Bâmiyân, Kumbi Salih, Mârida, Chartres, Carcassonne, Worms, Speyer, Salzburg, Salerno, Melfi, Benevento, Gaeta, Cremona, Kançipuram, Polonnaruva, Malazgirt, Adilcevaz, Kalatü Caber, Rahbe, Afâmiye, Maarretünnümân, Cebele, Bâniyâs, Dînever, İzeh, Ebher, Ahyolu, Süzebolu, Anavarza (çoğu ≤1,3 km) |
| **ÖLÇÜLEMEDİ** | **40** | Andravida, Şevbek, Fîrûzkûh, Uç, Alamut, Otrar (Ṯ'da yalnız Fârâb *bölge* kaydı, 11,7 km ⇒ kapsam dışı), Tinmel, Evdağust, Brattahlíð, Bamberg, Goslar, Braunschweig, Gniezno, Płock, Pereyaslavl, Turov, **Halyç** (Krylos sorusu — öncelikli), Biler, Somnat, Khajuraho, Kâlincar, Gangaikondaçolapuram, Kalyani, Halebidu, Navadvipa, Bihar Şerif, Dambadeniya, Liao Shangjing, Hiraizumi, Tsaparang/Tholing, Sakya, Chaco, Mesa Verde, Tula, Tiwanaku, Nan Madol, Merkab, Aclûn, Kayalık, Lori |

## 3 · Oran: 89'luk liste ile 4300'lük evren

| | ölçülen | sinyal | oran (Wilson %95) |
|---|---|---|---|
| **89 listesi** (ADAY + ÇELİŞKİLİ) | 49 | 4 | **%8,2** (3,2–19,2) |
| 89 listesi, yalnız ADAY | 49 | 3 | %6,1 (2,1–16,5) |
| 4300 evren, KESİN + ADAY | 623 | 15 | %2,4 (1,5–3,9) |
| 4300 evren, KESİN + YAN-KESİN + ADAY + İKAME + ADAY-YAN | 623 | 23 | %3,7 (2,5–5,5) |

89'luk listedeki oran evrenin **~2–3 katı**. Güven aralıkları ise üst üste biniyor (n=49 küçük). Yön beklendiği gibi: LAB'in değerleri GeoNames modern noktasına 0–2 km uyuyor (B2 tablosu). Tarihî site modern yerleşimden ayrı olduğunda kayma kaçınılmaz. KASA'nın kendi elle sınamasında oran 2/7 idi; buradaki 3–4/49 ile uyumlu ama daha düşük, çünkü KASA ayrı siteleri bilerek seçmişti.

## 4 · KASA'nın gazetteer koordinatları sınandı (kendi tanığının hatası)

| şehir | KASA'nın seçtiği | daha iyi tanık | aralarındaki fark | not |
|---|---|---|---|---|
| **Bust** | Ṯ 31.39108, 64.39078 (①) | **Pleiades 310634609 Qala Bost 31.5025, 64.35662 (precise)** | **12,8 km** | Ṯ p90 dışında ⇒ KASA koordinatı muhtemelen Ṯ hatası. **Pleiades önerilir** |
| **Özkent** | Ṯ 40.81074, 73.39026 (①) | yok (LAB 40.77, 73.30 = modern Özgön) | 8,85 km | Ṯ gürültü bandında. Tek başına taşıma gerekçesi değil ⇒ LAB değeri ile Ṯ arasında karar ikinci tanık ister |
| Busra | Ṯ 32.51503, 36.43071 (①) | Pleiades 678073 Bostra 32.52045, 36.4813 | 4,79 km | ikisi de eşik altı, ama Pleiades precise ve LAB'e 0,13 km ⇒ **Pleiades tercih edilmeli** |
| Cebele | Ṯ (①) | Pleiades 668250 Gabala | 3,11 km | eşik altı |
| Lazkiye | Ṯ (①) | Pleiades 668290 Laodicea | 2,81 km | eşik altı |
| Tartus | Ṯ (①) | Pleiades 668190 Antarados | 1,83 km | — |
| Sis | TGN 7708961 (①) | Pleiades 34546779 Sissû | 0,71 km | uyumlu |
| Korint | Pleiades 570059 Akrokorinthos | TGN 7010734 | 2,96 km | iki tanık uyumlu ⇒ KASA önerisi sağlam |
| Beylekan | Ṯ 39.86701, 47.46081 | — | — | **tek tanık.** 17,36 km ≥10 olduğu için sinyal geçerli, ama koordinatın kendisi Ṯ'nın ±2,9/8,7 km hatasını taşıyor. İkinci tanık (TGN/Pleiades) aranmalı |

**Genel öneri (KASA'ya):** Ṯ ile Pleiades `precise` ikisi de varsa Pleiades alınsın. Ṯ'nın konum hatası Pleiades'inkinden büyük; median 2,9 km ölçüldü.

## 5 · KASA için başvuru tablosu: tarihî site koordinatları (Ṯ / Pleiades)

Sinyal veren ya da sınırda kalan şehirler için:

| şehir | LAB (şu an) | önerilen tarihî site | tanık(lar) | LAB'e km |
|---|---|---|---|---|
| Korint | 37.94, 22.93 | **37.89123, 22.87351** | Pleiades 570059 + TGN 7010734 (2,96 km) | 7,35 |
| Beylekan | 39.77, 47.62 | **39.86701, 47.46081** | Ṯ BAYLAQAN (tek) | 17,36 |
| Kâs (Kath) | 41.92, 60.75 | **41.72062, 60.70385** | Ṯ KATH (tek; ikinci tanık aranmalı) | 22,5 |
| Bust | 31.58, 64.36 (= Leşker-i Bâzâr) | **31.5025, 64.35662** | Pleiades 310634609 Qala Bost (precise). Ṯ 12,8 km ayrışıyor | 8,63 |
| Özkent | 40.77, 73.30 | (karar yok) | Ṯ UZJAND 40.81074, 73.39026 | 8,85 |
| Mansûre | 25.88, 68.78 | (karar yok) | Ṯ 25.8651, 68.87697 | 9,84 |
| Âmul (Çarcuy) | 39.08, 63.58 | (karar yok) | Ṯ 39.06795, 63.51255 | 5,97 |
| Kâsân | 41.25, 71.55 | (karar yok) | Ṯ 41.24406, 71.64288 | 7,79 |

TEMİZ 41 şehrin en yakın tanık koordinatları CSV'nin `thurayya` ve `pleiades` sütunlarında.

## 6 · ÖLÇÜLEMEDİ 40: öncelik

Tarihî sitenin modern yerleşimden ayrı olduğu bilinen ya da şüphelenilen şehirler: **Halyç** (Krylos; KASA 41-89'un kendi uyarısı) · **Andravida** (KASA: ikinci tanık yok) · **Şevbek** (kale ≠ kasaba; KASA vekil) · **Tinmel** (cami vekil) · **Alamut** (kale) · **Fîrûzkûh** (Câm minaresi) · **Liao Shangjing** · **Tula** · **Biler** · **Somnat** · **Kâlincar** (kale) · **Merkab** (kale) · **Aclûn** (kale). Bunlar için TGN taraması (deserted/ruins türü) bir sonraki adım olmalı. Bu turda 89 için TGN taraması yapılmadı; yalnız KASA'nın Korint okuması kullanıldı.
