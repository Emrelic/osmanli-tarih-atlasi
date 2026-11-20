# Envanter varyant eşleştirmesi — nasıl okunur (UMIT19, 20.11.2026)

Girdi: `envanter_girdi.tsv` = `origin/borc-defteri-1119:denetim/ENVANTER-BOSLUK-1119/envanter.tsv` (ölçüm ağacı HEAD 59ce255cf).
Korpus: `origin/main` 79a93492b işleme ağacı (316 kronoloji dosyası, 24.267 madde satırı). Girdiden sonra main'e giren
LAB dosyaları (örn. `olaylar_lab19_bos_1119_d.js`) korpusta; yani bazı "maddesiz" yerler envanterden BERİ maddelenmiştir.

## Sayılar (ölçüldü: `py -X utf8 -I denetim/ENVANTER-VARYANT-1120/varyant.py`)

- Envanterde bağlı madde sayısı 0 olan 1233 satır = 702 ayrı ad. c1 (devlet künyesi) ve e2 (liste satırı) yer değildir, çıkınca **648 ayrı yer adı** (EMRELİC'in andığı 860 sayısı bu girdiden ÇIKMADI: sayım tanımı farklı olabilir, çözülmedi).
- **Kademe 1 — varyant madde'nin YER alanında (yer_id/yer/odak_yer): 106 yer, 167 satır.** Bunların 102 yeri LAB19 dışı eski dosyalarda, 4 yeri LAB19 dosyalarında (envanterden sonra yazılan maddeler).
- **Kademe 2 — yalnız b:/d: metninde, kelime sınırıyla: 45 yer** (olası; elle bakılmalı). Ayrıca 4 ad (Gore, Nâsir, Yendi, Şeyh) kademe 2'de >25 satır eşleştiği için YAYGIN SÖZCÜK şüphesiyle sayıma katılmadı.
- Atlanan (aday < 4 harf): 14 yer. Eşleşmeyen: 483 yer (bunlar gerçekten maddesiz görünüyor — yalnız bu varyant kuralları için).
- 55 kademe-1 satırı (32 yer) `HOMONIM-RISKI` taşır: atlas adı parantezli nitelikli (Akhisar (Manisa), Sion (Sitten)…); madde yer değeri başka yerleşime BİREBİR bağlı olanlar (örn. «Granada» İspanya) otomatik elendi, kalanlar için konum elle doğrulanmalı.

## Kural

Ad varyantı: TR küçük harf, aksan/uzatma işareti atılır (â î û ş ç ğ ü ö ı), kesme işaretleri atılır, tire/boşluk farkı yok sayılır, `el-/al-/ed-` ön eki opsiyonel, `/` ile ayrılmış alternatif adlar ayrı aday. **Parantez içi nitelik ad adayı sayılmaz** (ilk koşuda Granada (Nikaragua) → 'Nikaragua'/'Manisa' sahte eşleşmesi çıktı, düzeltildi).

## ÖLÇÜLEMEDİ / yapılmadı (BORÇ)

- **Arap harfli yazım** (الرياض vb.): atlasın Latin adından türetilemez, bu betikte eşleştirilmedi.
- Kademe 2 ve homonim-riskli satırların **elle konum doğrulaması** (madde koordinatı ↔ yerleşim) yapılmadı.
- Kısa adlar (14) ve yaygın sözcük adları (4) eşleştirilmedi.
- Ağaç farkı: girdi 59ce255cf, korpus 79a93492b — `main` ilerledikçe sayılar kayar; envanteri yeniden üretmek için `envanter.py` (node.json gerekir) koşturulmadı.

Dosyalar: `varyant_sonuc.tsv` (yer, sınıf, kademe, dosya:satır, t, eşleşen_alan, aranan_varyant) → LAB 'bağlama' partisinin girdisi.
