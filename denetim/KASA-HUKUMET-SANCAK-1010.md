# KASA-HUKUMET-SANCAK-1010 — "hükümet sancak" sınıfı: `d:` mı `v:` mı? (Cizre dışındaki atlas kayıtları)

Görev: YILDIRIM BAYEZIT (Cizre hükmü ⑦: "hükümet sancak sınıfı turu EVET, ⓐ kovasından ÖNCE") · KASA · salt okuma ·
`yerlesimler*` koordinatörün ⇒ ölç + öner.
Sınıf tanımı (TDV KÜRTLER, Özcoşar; KENDİM): *"Hükümet sancaklarda tahrir yapılmaz … merkezden tayin edilen idareci ve
memurlar bulunmaz"* ⇒ irsî Kürt hükûmeti = Osmanlı'ya TÂBİ (`v:`), doğrudan (`d:`) değil. Cizre emsali: `d:`→`v:` ONAY.

## Evren (ölçüldü — `girdi`, SINIFLANDIRMADAN ÖNCE)
TDV KÜRTLER'in iki listesi:
- Kanûnî dönemi: Diyarbekir — Cizre, Eğil, Genç, Palu, Hazzo · Bağdat — İmâdiye · Van — Bitlis, Hakkâri, Mahmudî,
  Pünyanişi.
- 1673-1740 ekleri: Tercil, Hizan.

⇒ **12 SANCAK.** Atlasta kaydı olan **6 KAYIT**:
- Cizre (ok107) — HÜKMEDİLDİ, kapsam dışı;
- **Palu** (yerlesimler.js) · **İmâdiye (Amêdî)** (ok109) · **Bitlis** (yerlesimler.js) · **Çölemerik (Hakkâri)**
  (ek_ferhadpasa) · **Hoşap (Mahmudi)** (ek_ferhadpasa).

Kaydı YOK: Eğil · Genç ("Gence" = Gence/Azerbaycan, yanlış eşleşme) · Hazzo · Tercil · Pünyanişi · Hizan.
⇒ **Bakılacak: 5 KAYIT.**

## 0. ÖNGÖRÜ (dilimlere bakmadan ÖNCE — ayrı commit)
- Bugün `d:` (doğrudan) taşıyan ve kaynakla `v:` olması gereken: **3 ± 1 KAYIT**. Zaten `v:` ya da tâbilik beyanlı:
  **2 ± 1** (en olası Bitlis — Şerefhan'ın emirliği iyi bilinir).
- Her kaydın TDV şehir/emirlik maddesi statüyü ADIYLA söyler ("hükûmet", "yurtluk-ocaklık", "emirlik"): **%75** her biri.
- Hükûmetin SONU (Tanzimat merkezîleşmesi, 1830-1850): ≥ 3/5 kayıtta YIL düzeyinde bulunur **%70**; gün **%25**.
- Statü **kesintili** (Cizre gibi: emirlik kaldırılıp sonra yeniden) en az bir kayıtta: **%50**.
- TDV'nin iki maddesi arasında "hükûmet ↔ yurtluk-ocaklık" terim çelişkisi (Cizre'deki gibi) en az bir kayıtta:
  **%40**.

## 1. ÖLÇÜM (5 KAYIT; dilimler `girdi` ile, TDV KENDİM curl birebir)
**Statü tanığı (beşi için ortak):** TDV KÜRTLER (Özcoşar) iki tevcih listesi.
- Kanûnî: *"Diyarbekir eyaletine bağlı hükümet sancaklar Cizre, Eğil, Genç, Palu ve Hazzo idi … Bağdat'a bağlı olan
  İmâdiye ile Van'a bağlı Bitlis, Hakkâri, Mahmudî ve Pünyanişi hükümet statüsünde sancaklardı"*.
- 1673-1740: *"Diyarbekir eyaletinde Hazzo, Cizre, Eğil, Tercil, Palu, Genç; Bağdat'ta İmâdiye; Van'da Bitlis, Hizan,
  Hakkâri, Hoşap (Mahmudî) hükümet statüsündeki sancaklardır"*.
- ⇒ Beşi de İKİ dönemde de hükümet.

| kayıt | dosya | veri (Osmanlı kısmı) | hükümet sonu (kaynak) | hüküm |
|---|---|---|---|---|
| **İmâdiye (Amêdî)** | yerlesimler_ok109.js | `d 1516-08-24 → 1918-11-08` | **1839** — TDV MUSUL: *"1834'te Revândiz'deki Soran, 1839'da İmâdiye'deki Behdiyan hâkimliklerine son verildi"* (YIL) | `d`→**`v` 1516-08-24 → 1839** + `d` 1839 → 1918 |
| **Çölemerik (Hakkâri)** | yerlesimler_ek_ferhadpasa.js | `d 1548-08-24 → 1920-04-23` | TDV HAKKÂRİ: *"XIX. yüzyılın ilk yarısına kadar Van eyaleti içinde bir sancak durumunda kalan Hakkâri genellikle bu eyalete bağlı bir 'hükümet' statüsünde sayılmıştır (Baykara, s. 118)"* — YIL YOK (yarım yüzyıl) | `v` adayı; t BULUNAMADI |
| **Bitlis** | yerlesimler.js | `d 1515-09-15 → 1532` · (safevi 1532-34) · `d 1534 → 1916` | TDV BİTLİS statüyü ANMIYOR; son yılı YOK | `v` adayı; t BULUNAMADI |
| **Hoşap (Mahmudi)** | yerlesimler_ek_ferhadpasa.js | `d 1548-08-24 → 1920-04-23` | TDV HOŞAP KALESİ statü/son YOK | `v` adayı; t BULUNAMADI |
| **Palu** | yerlesimler.js | `d 1516-05-01 → 1920-04-23` | TDV'de Palu maddesi yok; kaydın kendi notu Ünal 1990 *"XVI. Yüzyılda Palu Hükümeti"* (adında hükümet) | `v` adayı; t BULUNAMADI |
- **Terim çelişkisi (2. vaka):** TDV HAKKÂRİ aynı cümle öbeğinde *"sahiplerine ait olarak kabul edilen sancaklardan
  (ocaklık) biri"* der, sonra "hükümet". KÜRTLER ikisini ayırıyor. Cizre'deki "yurtluk-ocaklık ↔ hükümet" ile aynı desen
  ⇒ TDV şehir maddeleri terimi gevşek, KÜRTLER sıkı kullanıyor.
- **t için bölge üst sınırı (beyan, şehir adlı değil):** TDV KÜRTLER *"Kürt emirlikleri III. Selim ve II. Mahmud
  devirlerindeki merkezîleşme sürecinde otoritelerini büyük ölçüde kaybettiler"* + 1847 Kürdistan eyaleti (Cizre
  ölçümü). ⇒ t'si bulunamayan dördünde ya `t` beyanlı `kesinlik:"onyil"`/`"belirsiz"` (≤1847) ya `v` YAZILMAZ +
  `d`'nin yanına statü beyanı. ⑥ hüküm senin.
- **Kesintili statü:** Bitlis'te veri zaten 1532-34 Safevî arasını taşıyor (dilim). Statü kesintisi Cizre'deki gibi
  (1627 → 1821) bu dördünde ölçülmedi.

## 2. Öngörü ↔ ölçüm
```
d→v gereken 3 ± 1          ✗ 5/5 — hiçbiri v değil
zaten v 2 ± 1              ✗ 0
TDV şehir maddesi statüyü ADIYLA %75   ✗ 1/5 (Hakkâri); statü tanığı yalnız KÜRTLER listesi
son YIL ≥3/5 %70           ✗ 1/5 (İmâdiye 1839)
kesintili ≥1 %50           ~ Bitlis (veride Safevî arası) — statü kesintisi ölçülmedi
terim çelişkisi ≥1 %40     ✓ Hakkâri (ocaklık ↔ hükümet)
```
**Ders:** sınıfın atlasta HİÇ uygulanmadığını öngörmedim. `v:` alanı Osmanlı'ya tâbi Kürt hükûmetleri için var, ama
beş kayıttan beşi `d:`. ⇒ Sınıf tek tek değil, BÜTÜN OLARAK eksik.
