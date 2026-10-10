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
