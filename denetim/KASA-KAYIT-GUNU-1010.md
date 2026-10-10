# KASA-KAYIT-GUNU-1010 — "(gün (kayıt))" etiketli 7 uç: bildirim günü mü, olay günü mü?

Görev: YILDIRIM BAYEZIT (UCSUZ-ISGAL-2 hükmü, SIRA ①: "işaret mekanik, yöntem kanıtlı") · Araştırmacı: KASA ·
`data/` DONUK ⇒ diff · salt okuma.
Model (Ji'an'da kanıtlandı): 清史稿 本紀 **bildirim** günü verir; kampanya tarihi / biyografi / yerel kayıt **olay** günü.
Ji'an 1856-58: −38 ve −23 gün.

## Evren (mekanik: `yerlesimler_nokta_asya_0917.js` içinde "(gün (kayıt…))" etiketi, Ji'an Taiping ×2 HARİÇ — o diff'te)
| # | kayıt | uç (veri) | geçiş | 本紀 maddesi | etiket |
|---|---|---|---|---|---|
| K1 | Hengyang | 1647-07-25 | güney-ming → qing | 清史稿 卷4 順治四年六月 '癸巳 … 湖廣官軍克衡州、常德' ("ay içindeki 壬申 ile sınandı") | kayıt |
| K2 | Hengyang | 1674-03-26 | qing → san-fan | 清史稿 卷6 康熙十三年二月 '甲寅，吳三桂陷長沙 … 旁陷衡州' | kayıt |
| K3 | Hengyang | 1679-03-24 | san-fan → qing | 清史稿 卷6 康熙十八年二月 '戊寅 … 希佛復衡州' | kayıt |
| K4 | Ji'an | 1676-04-05 | qing → san-fan | 清史稿 卷6 康熙十五年二月 '乙亥，吳三桂將高大傑陷吉安' | kayıt |
| K5 | Ganzhou | 1646-11-18 | güney-ming → qing | 清史稿 卷4 順治三年十月 '甲申 … 克贛州' (Ming Shi: '十月初 … 城遂破') | kayıt |
| K6 | Chenzhou | 1648-01-14 | güney-ming → qing | 清史稿 卷4 順治四年十二月 '丙戌 … 湖南平' — şehir adı YOK | kayıt, bölge |
| K7 | Xinyang | 1645-09-08 | (öncesi) → qing | 清史稿 卷4 順治二年七月 '戊辰 … 汝寧州縣悉平' — şehir adı YOK | kayıt, bölge |

## 0. ÖNGÖRÜ (kaynak okumadan ÖNCE — ayrı commit)
- **Olay günü ŞEHİR ADIYLA bulunur** (biyografi / 明史 / 南明 kroniği / 聖武記 / 平定三逆方略 / ECCP / yerel gazeteer):
  **4 ± 2 / 7**.
  - K1-K5 (şehir adlı 本紀): her biri %60.
  - K6-K7 (bölge maddesi): her biri %20 ⇒ büyük ihtimalle BEYAN (bölge hükmü kalır).
- **Yön:** bulunan her olay günü bildirimden **ÖNCE** (≤ 0 gün): **%90** (tersi 本紀'ın olaydan önce yazması olurdu,
  imkânsıza yakın; ancak "ay içindeki X ile sınandı" türü yanlış eşleme bunu yapabilir).
- **Kayma büyüklüğü (bulunanlarda):** medyan **−20 gün**, aralık −5 … −60. En az birinde **> 45 gün**: %35.
- **K5 Ganzhou:** Ming Shi '十月初' (1646-11-07'den sonra) ⇒ olay ≈ 11-07…11-10 ⇒ kayma **−8 … −11 gün**: %65.
- **Uygulanabilir diff'e dönüşen uç:** **3 ± 2**.
- **Değişmez 2 / 4 kapı sayısı:** diff(ler) ile tam `denetle` tabanla AYNI kalır: %80 (Ji'an'da aynıydı).

## 1. ÖLÇÜM
Okuyucu: `scratchpad/okuma_kayit7.md`. Okuyucu her günü Academia Sinica 兩千年中西曆轉換 ile çevirdi.
**KENDİM doğruladım:** 7 alıntının 7'si zh.wikisource ham metninden birebir (小腆紀年 卷13/14 · 明史 卷278 · 爝火錄 卷十六 ·
清實錄 聖祖 卷58/78 · 南明史稿 卷001) + bütün altmışlık döngü günleri ((JDN+49) mod 60).

| # | kayıt | veri (本紀) | olay günü (şehir adlı) | tanık | kayma | hüküm |
|---|---|---|---|---|---|---|
| K1 | Hengyang 1647 güney-ming → qing | 1647-07-25 | **1647-05-16** | 小腆紀年 卷14 '癸未（十二日），我大清兵取衡州，殺黃朝宣' + 南明史稿 卷3 '癸未，衡州陷' (四月壬申朔 = 05-05) | **−70** | **DİFF** |
| K2 | Hengyang 1674 qing → san-fan | 1674-03-26 | yalnız ay: 清史稿 卷474 '十三年正月 … 張國柱陷衡州' (僭稱'ye bağlı, zayıf) | — | ≤ −20 (?) | BEYAN: 1674-03-26 = ÜST SINIR (not diff'te) |
| K3 | Hengyang 1679 san-fan → qing | 1679-03-24 | **1679-03-24** | 清實錄 聖祖 卷78 '是月十三日夜半 … 奪門入城 … 恢復府城' (二月丙寅朔 ⇒ 十三 = 戊寅) | **0** | VERİ DOĞRU; "(kayıt)" etiketi YANLIŞ (not diff'te). Bildirim 甲午 = 04-09 |
| K4 | Ji'an 1676 qing → san-fan | 1676-04-05 | bulunamadı | 清實錄 卷58: 甲戌 (04-04) '圍吉安' kuşatma haberi, 乙亥 (04-05) '吉安被陷' bildirim | ? | BEYAN: 04-05 ÜST SINIR. ⚠️ not diff'e ALINMADI: aynı satır inmemiş Ji'an diff'inde (iki yamayı bağlamamak için) |
| K5 | Ganzhou 1646 güney-ming → qing | 1646-11-18 | **1646-11-10** | 明史 卷278 楊廷麟傳 '十月四日，大兵登城' + 小腆紀年 卷13 '冬十月丙子（初四日）' + 爝火錄 '初四日（丙子）赣州破' (十月癸酉朔 = 11-07) | **−8** | **DİFF** |
| K6 | Chenzhou 1647/48 | 1648-01-14 (bölge) | bulunamadı (古今圖書集成 '順治四年入版圖' yalnız yıl) | — | — | BEYAN |
| K7 | Xinyang 1645 → qing | 1645-09-08 (bölge; 西平 olayı) | **1645-06-21** | 南明史稿 卷001 弘光元年五月 '己酉 … 清兵陷信陽，知州萬以忠死之' (五月壬午朔 = 05-25 ⇒ 己酉 = 廿八) | −79 (ama bildirim gecikmesi DEĞİL: 本紀 maddesi BAŞKA olay) | ⑥ ÖNERİ, diff'e ALINMADI: tek tanık, 錢海岳'nun 20. yy derlemesi; 世祖實錄 · 小腆紀年 · 爝火錄 anmıyor |

### 1.1 Diff — `KASA-KAYIT-GUNU-1010.diff` (1 dosya, 6+/6−; Hengyang + Ganzhou)
- **K1:** güney-ming `t` / qing `f` 1647-07-25 → **1647-05-16**. **K5:** 1646-11-18 → **1646-11-10**. Zincir şartı:
  iki uç birlikte kaydı.
- `kaynak:` dönem etiketleri "(gün (kayıt))" → "(gün)". Eski 本紀 alıntıları SİLİNMEDİ; yanına "= BİLDİRİM günü ⇒ OLAY
  GÜNÜ BULUNDU" + tanık + döngü hesabı (§9.10 ②).
- **K2:** "bildirim günü = ÜST SINIR" notu. **K3:** "OLAY GÜNÜ; '(kayıt)' etiketi bu uç için YANLIŞ" notu.
- **Sınav:**
  - temiz worktree `git apply` ✓; `girdi` yeni günleri okuyor; çıplak LF 0;
  - tam `denetle.py` tabanla **satır satır AYNI** (−70 günlük kayma Değişmez 2 ±30 eşleşmesini açmadı);
  - `KASA-JIAN-TAIPING-1010.diff` ile **birlikte uygulanabilir** (`git apply --check` ✓, farklı satırlar);
  - `paketle.py yenile` gerekir (`paket_23.js`).

### 1.2 Bulgu: model İNCELDİ — "本紀 = bildirim günü" her zaman doğru DEĞİL
- K3'te 本紀 günü olay gününün TA KENDİSİ (清實錄 muhtırası '是月十三日' diyor, muhtıra 16 gün sonra geldi). Ji'an
  1856/58'de, K1'de, K5'te ise bildirim günüydü.
- ⇒ "(kayıt)" etiketi bir **ŞÜPHE işaretidir, teşhis değil**. Her uç ikinci bir tanıkla sınanmadan kaydırılamaz. Mekanik
  bir "−20 gün düzeltmesi" K3'ü YANLIŞA çevirirdi.
- **Kayma dağılımı (bildirim gecikmesi olanlar):** −8 · −23 · −38 · −70. Medyan ≈ −30. Uzaklıkla artıyor (Hunan seferi
  70 gün, Jiangxi 8-38 gün).
- **Kaynak türü (dördüncü teyit):** 南明 kronikleri (小腆紀年, 爝火錄) ve biyografiler (明史 列傳) **gün** verir. 實錄
  muhtıra metni olay gününü İÇİNDE taşır ('是月十三日'). 本紀 muhtıranın varış gününü yazar.

## 2. Öngörü ↔ ölçüm
```
olay günü şehir adıyla 4 ± 2 / 7          ✓ 4 (K1 K3 K5 K7)
  K1-K5 %60 her biri                       K1 ✓ · K2 ✗ (yalnız ay) · K3 ✓ · K4 ✗ · K5 ✓
  K6-K7 bölge %20 her biri                 K6 ✗ · K7 ✓ (sürpriz — ama tek tanık, 20. yy derlemesi)
yön: hepsi ≤ 0 %90                         ✓ (0 · −8 · −70; K7 −79 bildirim değil)
medyan −20, aralık −5 … −60                ✗ K1 −70 aralığın DIŞINDA; medyan ≈ −8 (bu turun üçü)
≥1'inde > 45 gün %35                       ✓ (K1 −70)
K5 −8 … −11 %65                            ✓ −8
uygulanabilir diff'e dönüşen 3 ± 2         ✓ 2 (K1, K5) + 2 not (K2, K3)
tam denetle tabanla AYNI %80               ✓
```
**Öngörülmeyen:** K3 — 本紀 olay gününü yazmış (kayma 0). Öngörüye "imkânsıza yakın" diye yazdığım yön değil, ama
"her (kayıt) ucu kayar" varsayımını yanlışladı.
