# KASA-ZINCIR-1004 — devralma ve zincirleme ölçümü (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatör YILDIRIM BAYEZIT'in talebi · önceki iş: `KASA-KAYNAKSIZ-1004`
Okuyucu `girdi.yukle()` · araç `denetim/ARAC-KASA-ZINCIR-1004.py` · ham çıktı `denetim/KASA-ZINCIR-1004.json`
**100 kaydın `kaynak:` metni tek tek ELLE okundu.** Komşu adları ve devralınan alan elle yazıldı; regex yalnız ad eşleştirmede kullanıldı. **Düzeltme YAZILMADI.**

## GÜNCELLEME — keskin ölçüt (koordinatörün 4 Ekim düzeltmesinden sonra)
Soru her satırda: **"Komşunun devralınan bilgisi, komşunun KENDİ kaynağına dayanıyor mu?"** Derinlik yazılı ama hükmü bu soru veriyor.
📌 69 gerçek devralmanın **69'u da BEYANLI**: hepsi neyi, kimden aldığını kendi `kaynak:` alanında yazıyor. "Karanlık" (beyansız) devralma bu kümede yok. O sınıf `KASA-KAYNAKSIZ-1004`'teki 1969'da duruyor ve bu 69 onun içinde değil.

| kova | sayı | anlamı |
|---|--:|---|
| **A · BEYANLI-ŞARTLI (izinli)** | **9** | GÜN devralması. Komşunun günü kendi kaynağına dayanıyor (5: Braslav, Chenzhou, Garapan, Kragujevac, Çaçak), ya da gün kaynağı kaydın kendisinde doğrudan yazılı (4: Başkale, Çaldıran, Şeyhrumi ←TDV `van`; Gümülcine ←Londra) |
| **B · BEYANLI ama 1. ŞART DÜŞÜYOR** | **2** | GÜN devralması, komşunun günü kaynaksız: Dimetoka, Ferecik (←Sofulu/Dedeağaç, ikisi de boş) |
| **C · BEYANLI ama DEVLET/YIL** | **52** | Komşudan gün değil dönem zinciri (devlet ve/veya yıl) alınmış. §4/`D210` gereği izinsiz sınıf. Komşunun bilgisi kendi kaynağına: **HAYIR 31** · BELİRSİZ 16 · EVET 5 |
| **D · ŞÜPHELİ** | **6** | Ba'lebek, Sûr (←Şam, kaynağı yalnız 1920) · Drama (komşuların kaynağı yalnız slug) · Niş (komşu adı yok) · Filorina (karışık) · Vanimo (600 km) |

🔴 **`sinir_*` sınır şeridi kayıtları için ayrım (koordinatörün ③ maddesi):** Bunlar beyanlı ve titiz kayıtlar: GeoNames konumu, akademik sınır kaynağı, beyanlı komşu, "ARAŞTIRILMADI" itirafı. Ama devralınan şey yalnız 1918/1921 kırılma GÜNÜ değil. Metin "dönemler en yakın kayıttan BİREBİR" diyor; yani 1281'den itibaren **devlet zinciri** de komşudan geliyor (Jadlā': 1281 `memluk` ←Akçakale). Bu yüzden C kovasına yazdım, A'ya değil.
- Yalnız kırılma günü ölçülseydi bir kısmı A'ya düşerdi: Mercihamis ←Birecik ve Tirwānīsh ←İmâdiye'nin komşu kaynağı var.
- Jadlā''nın 1918-10-30 günü için komşu Akçakale'nin kaynağı "bulunamadı … KAYNAKSIZ" ⇒ koordinatörün tespit ettiği gibi 1. şart düşüyor. 1281 zinciri için de Akçakale'nin kaynak alanı hiç yok.
- **İstiyorum:** C içindeki 28 `sinir_*` kaydı için hüküm. "Dönem zinciri de §4 kapsamında beyanlı devralınabilir" (proje kararı) mı, yoksa "yalnız gün" (`D210`) mi? Kova sayıları bu karara göre değişir. A'ya en çok 2 kayıt geçer; ötekilerin komşusu kaynaksız ya da zayıf.

## İLK HÜKÜM (ölçtüm — kovalar yukarıda keskinleştirildi)
1. **100 "devralma ibaresi"nin 31'i komşudan devralma DEĞİL:**
   - 21 KADEME: `yer_yama_kademe.js`'ten `k:`/`m:` devralması, `s:` ile ilgisiz.
   - 5 KÜNYE: Agadez, Bayburt, Dera Gazi Han, Dera İsmail Han, Whanganui. Pencere ya da gün `devletler.js` künyesinden alınmış; kayıtta beyanlı konvansiyon.
   - 2 OLAY GÜNÜ: Derne, Yedisan. Gün külliyatın `olaylar.js` maddesinden.
   - 3 YANLIŞ POZİTİF: Kirmanşah ("komşu Hemedan dayanağı DÜŞTÜ"), Oodnadatta ("Commonwealth devralana kadar"), Meekatharra (komşu yalnız bağlam).
2. **Gerçek komşu devralması: 69** (önceki raporda regex'in çözemediği 65 adın hepsi elle çözüldü).
   - **DEVLET/YIL ya da YIL devralan: 52** ⇒ §4/`D210`'a göre **İZİNSİZ**.
     - 🔴 **27'si boşluktan besleniyor:** zincirin ucu ne kayıt ne dönem düzeyinde kaynak taşıyor.
     - 🟠 20'sinin ucu zayıf: kaynak alanı dolu ama devralınan 1281–1918 zincirini kapsamıyor. Ya yalnız slug yazılı (`cizre`, `nusaybin`, `revan`, `kavala`, `vodina`, `polonya`), ya yalnız 1920 Meysalun günü kaynaklı (Şam, İskenderun, Rakka, Ayn el-Arab), ya da kaynağı GeoNames konumu (Şemdinli).
     - 🟢 5'inin ucu kaynaklı: Berdiçev (←Jitomir), Jasenovaç ve Bosna Brod'u (←Bosna Dubiçası, ⚠️ bkz. BULAMADIM), Mercihamis (←Birecik), Tirwānīsh (←İmâdiye).
   - **GÜN devralan: 17** ⇒ §4 şartlı izin sınıfı.
     - 🔴 8'inde komşu kayıt BOŞ: Başkale, Çaldıran, Şeyhrumi (←Van) · Dimetoka, Ferecik, Gümülcine (←Sofulu/Dedeağaç) · Filorina, Vanimo (karışık uç: komşulardan biri boş, biri kaynaklı).
       - ⚠️ Ama Başkale, Çaldıran ve Şeyhrumi kendi `kaynak:` alanlarında TDV `van`'ın '24 Ağustos 1548' cümlesini **doğrudan** anıyor. Yani gün kaynağa dayanıyor, boş olan yalnız Van'ın kaydı ⇒ bu üçü fiilen şartı karşılıyor olabilir. Gümülcine de günü (1913-05-30) Londra Antlaşması'na dayandırıyor.
       - Fiilen şartı tutmayanlar: Dimetoka ve Ferecik (gün yalnız Sofulu'dan; Sofulu boş).
     - 🟠 4 şüpheli: Ba'lebek ve Sûr (←Şam; Şam'ın kaynağı yalnız 1920) · Drama (←Kavala/Serez slug, Praviște boş) · Niş (komşu adı yok).
     - 🟢 5 uygun görünüyor: Braslav, Chenzhou, Garapan, Kragujevac, Çaçak.
3. **Zincirleme (komşunun kendisi de devralmış): 8** (önceki alt sınır 6 idi, iki yeni: Arapkir ve Darende).
   - Hepsi **derinlik 2**. Derinlik 3 bulunmadı.
   - Arapkir ← Divriği ← Sivas/Kayseri 🔴 · Arapkir ← Malatya ← Sivas/Kayseri 🔴
   - Darende ← Malatya ← Sivas/Kayseri 🔴
   - Qaţţīnah ← Ceylanpınar ← Mardin 🔴
   - Távri ← Ferecik ← Sofulu/Dedeağaç 🔴
   - Norapat/Beri/Kliçatak/Küçükperveli ← Eçmiyadzin/Iğdır/Gümrü/Arpaçay ← Revan 🟠 (Revan'ın kaynağı yalnız `revan` slug'ı).
4. 📌 **Sınır şeridi dosyaları (`sinir_guney` 12 + `sinir_kuzey` 16 = 28) etiketiyle içeriği UYUŞMUYOR.** Etiket "§4 şartlı komşu GÜNÜ", ama metin "dönemler en yakın kayıttan BİREBİR" diyor. Yani devralınan gün değil **bütün devlet/yıl zinciri.** Bu 28'in tamamı DEVLET/YIL sınıfına yazıldı.
5. 📌 **Komşu olarak kullanılıp kendisi BOŞ olan uç kayıt: 29** (parantezde beslediği yol sayısı): Sivas (6) · Van (5) · Kayseri (5) · Sofulu (4) · Dedeağaç (3) · Mardin (2) · Çölemerik (2) · Elhova (2) · Ahıska (2) · ve birer kez: Mâku · Kotur · Akçakale · Uzunköprü · Orestiada · Havsa · İpsala · Batum · Şavşat · Hulo · Dâhile · Hârice · Ferâfire · Bahriye · Novgorod · Staraya Russa · Kanije · Varasd · Manastır · Madang. Beyan borcunun ilk dilimi için öncelik listesi bunlar; ilk dokuzu birden çok kaydı besliyor.

## BULAMADIM / beyan
- "🟢 kaynaklı" yalnız kaynak alanının **dolu ve konuyla ilgili göründüğü** anlamına geliyor. Devralınan dönemin o kaynakta gerçekten yazılı olup olmadığını uç kayıtların kaynağını açarak **ölçmedim.**
- "Zayıf: yalnız slug" otomatik işaretlendi (kaynak alanı yalnız `a-z-` karakterlerinden oluşuyorsa). Zayıf olarak işaretlenen 1920/GeoNames kayıtları elle seçildi; liste aracın içinde.
- Niş: gün "komşu kayıtlardan" deniyor, komşunun adı yazılmamış ⇒ uç ölçülemedi.
- GÜN satırlarında "yakın konum" ve "aynı süreç" şartları ölçülmedi. Yalnız ucun kaynağı ölçüldü. (Vanimo 600 km kendi beyanında zayıf diyor.)
- Bosna Dubiçası'nın kaynağı Karlofça metni. Bu sınırı tarihliyor, fetih yılını (1538) değil ⇒ Jasenovaç/Brod'un 🟢'si şüpheli.

## İSTİYORUM
- Hüküm: 27 "boşluktan beslenen" DEVLET/YIL kaydına toplu `bulunamadı` beyanı mı, yoksa önce 29 BOŞ uç kaydın (en çok besleyen Sivas/Van/Kayseri/Sofulu) beyan borcu mu?
- `sinir_*` dosyalarındaki etiket–içerik uyuşmazlığı için hüküm (etiket mi düzelir, iddia mı kalkar).

## TABLO — 69 gerçek devralma, kovaya göre (A izinli · B 1. şart düşüyor · C devlet/yıl · D şüpheli)
| kova | ad | dosya | derinlik | devralınan | zincir (← dayandığı) | komşunun bilgisi kendi kaynağına dayanıyor mu | not |
|---|---|---|:-:|---|---|---|---|
| A | Braslav (Bratslav) | ukrayna_0916.js | 1 | GÜN | Braslav (Bratslav) ← Vinnitsa (Vinnytsia) | EVET (görünüşte) |  |
| A | Chenzhou (Hunan) | nokta_asya_0917.js | 1 | GÜN | Chenzhou (Hunan) ← Hengyang (Hengzhou) | EVET (görünüşte) |  |
| A | Garapan (Saipan) | a78_okyanusya.js | 1 | GÜN | Garapan (Saipan) ← Hagåtña (Agaña) | EVET (görünüşte) |  |
| A | Kragujevac | yerlesimler.js | 1 | GÜN | Kragujevac ← Niş<br>Kragujevac ← Vidin | EVET (görünüşte)<br>EVET (görünüşte) |  |
| A | Çaçak | yerlesimler.js | 1 | GÜN | Çaçak ← Niş<br>Çaçak ← Vidin | EVET (görünüşte)<br>EVET (görünüşte) |  |
| A | Başkale | ek26.js | 1 | GÜN | Başkale ← Van | HAYIR — komşu kaynaksız | TDV `van` '24 Ağustos 1548' kayıtta doğrudan |
| A | Gümülcine | yerlesimler.js | 1 | GÜN | Gümülcine ← Sofulu (Soufli)<br>Gümülcine ← Dedeağaç (Alexandroupoli) | HAYIR — komşu kaynaksız<br>HAYIR — komşu kaynaksız | 1913-05-30 Londra Antlaşması kayıtta doğrudan (TDV `gumulcine` olayı veriyor) |
| A | Çaldıran | ek26.js | 1 | GÜN | Çaldıran ← Van | HAYIR — komşu kaynaksız | TDV `van` '24 Ağustos 1548' kayıtta doğrudan |
| A | Şeyhrumi (Yücelen) | sinir_dogu.js | 1 | GÜN | Şeyhrumi (Yücelen) ← Van | HAYIR — komşu kaynaksız | TDV `van` '24 Ağustos 1548' kayıtta doğrudan; Çaldıran'dan almadığını beyan ediyor |
| B | Dimetoka | yerlesimler.js | 1 | GÜN | Dimetoka ← Sofulu (Soufli) | HAYIR — komşu kaynaksız |  |
| B | Ferecik (Feres) | yerlesimler.js | 1 | GÜN | Ferecik (Feres) ← Sofulu (Soufli)<br>Ferecik (Feres) ← Dedeağaç (Alexandroupoli) | HAYIR — komşu kaynaksız<br>HAYIR — komşu kaynaksız |  |
| C | Arapkir | yerlesimler.js | 2 | DEVLET/YIL | Arapkir ← Divriği ← Sivas<br>Arapkir ← Divriği ← Kayseri<br>Arapkir ← Sivas<br>Arapkir ← Malatya ← Sivas<br>Arapkir ← Malatya ← Kayseri | HAYIR — komşu da devralmış<br>HAYIR — komşu da devralmış<br>HAYIR — komşu kaynaksız<br>HAYIR — komşu da devralmış<br>HAYIR — komşu da devralmış |  |
| C | Beri | sinir_kuzey.js | 2 | DEVLET/YIL | Beri ← Iğdır ← Revan | HAYIR — komşu da devralmış |  |
| C | Darende | ok110.js | 2 | DEVLET/YIL | Darende ← Malatya ← Sivas<br>Darende ← Malatya ← Kayseri | HAYIR — komşu da devralmış<br>HAYIR — komşu da devralmış |  |
| C | Kliçatak (Suser) | sinir_kuzey.js | 2 | DEVLET/YIL | Kliçatak (Suser) ← Gümrü (Aleksandropol) ← Revan | HAYIR — komşu da devralmış |  |
| C | Küçükperveli | sinir_kuzey.js | 2 | DEVLET/YIL | Küçükperveli ← Arpaçay (Akyaka) ← Revan | HAYIR — komşu da devralmış |  |
| C | Norapat | sinir_kuzey.js | 2 | DEVLET/YIL | Norapat ← Eçmiyadzin ← Revan | HAYIR — komşu da devralmış |  |
| C | Qaţţīnah | sinir_guney.js | 2 | DEVLET/YIL | Qaţţīnah ← Ceylanpınar ← Mardin<br>Qaţţīnah ← Rakka | HAYIR — komşu da devralmış<br>BELİRSİZ — yalnız 1920 Meysalun günü |  |
| C | Távri | sinir_kuzey.js | 2 | DEVLET/YIL | Távri ← Ferecik (Feres) ← Sofulu (Soufli)<br>Távri ← Ferecik (Feres) ← Dedeağaç (Alexandroupoli) | HAYIR — komşu da devralmış<br>HAYIR — komşu da devralmış |  |
| C | Arpaçay (Akyaka) | ek26.js | 1 | DEVLET/YIL | Arpaçay (Akyaka) ← Revan | BELİRSİZ — yalnız slug |  |
| C | Babū | sinir_guney.js | 1 | DEVLET/YIL | Babū ← Nusaybin<br>Babū ← Malikiye (Derik) | BELİRSİZ — yalnız slug<br>BELİRSİZ — yalnız slug |  |
| C | Balıklı | sinir_guney.js | 1 | DEVLET/YIL | Balıklı ← Şemdinli (Şemdinni) | BELİRSİZ — GeoNames konum, tarih kaynağı değil |  |
| C | Berdiçev (Berdychiv) | ukrayna_0916.js | 1 | YIL | Berdiçev (Berdychiv) ← Jitomir (Zhytomyr) | EVET (görünüşte) |  |
| C | Bitlis | yerlesimler.js | 1 | DEVLET/YIL | Bitlis ← Van | HAYIR — komşu kaynaksız |  |
| C | Bosna Brod'u (Bosanski Brod) | ek29.js | 1 | YIL | Bosna Brod'u (Bosanski Brod) ← Bosna Dubiçası (Bosanska Dubica) | EVET (görünüşte) |  |
| C | Ceylanpınar | ek25.js | 1 | DEVLET/YIL | Ceylanpınar ← Mardin | HAYIR — komşu kaynaksız |  |
| C | Cibri (Güçlü) | sinir_guney.js | 1 | DEVLET/YIL | Cibri (Güçlü) ← Cizre | BELİRSİZ — yalnız slug |  |
| C | Cumai (Birlikköy) | sinir_guney.js | 1 | DEVLET/YIL | Cumai (Birlikköy) ← Silopi | BELİRSİZ — yalnız slug |  |
| C | Digor | ek26.js | 1 | DEVLET/YIL | Digor ← Revan | BELİRSİZ — yalnız slug |  |
| C | Divriği | yerlesimler.js | 1 | YIL | Divriği ← Sivas<br>Divriği ← Kayseri | HAYIR — komşu kaynaksız<br>HAYIR — komşu kaynaksız |  |
| C | Eçmiyadzin | ek26.js | 1 | DEVLET/YIL | Eçmiyadzin ← Revan | BELİRSİZ — yalnız slug |  |
| C | Gümrü (Aleksandropol) | ek26.js | 1 | DEVLET/YIL | Gümrü (Aleksandropol) ← Revan | BELİRSİZ — yalnız slug |  |
| C | Gōrabī | sinir_guney.js | 1 | DEVLET/YIL | Gōrabī ← Şemdinli (Şemdinni)<br>Gōrabī ← Rewândiz | BELİRSİZ — GeoNames konum, tarih kaynağı değil<br>EVET (görünüşte) |  |
| C | Iğdır | ek26.js | 1 | DEVLET/YIL | Iğdır ← Revan | BELİRSİZ — yalnız slug |  |
| C | Jadlā’ | sinir_guney.js | 1 | DEVLET/YIL | Jadlā’ ← Akçakale<br>Jadlā’ ← Ayn el-Arab (Kobani) | HAYIR — komşu kaynaksız<br>BELİRSİZ — yalnız 1920 Meysalun günü |  |
| C | Jasenovaç (Jasenovac) | ek29.js | 1 | YIL | Jasenovaç (Jasenovac) ← Bosna Dubiçası (Bosanska Dubica) | EVET (görünüşte) |  |
| C | Karpuzlu (Yenikarpuzlu) | sinir_kuzey.js | 1 | DEVLET/YIL | Karpuzlu (Yenikarpuzlu) ← İpsala | HAYIR — komşu kaynaksız |  |
| C | Kilise | sinir_guney.js | 1 | DEVLET/YIL | Kilise ← Çölemerik (Hakkâri) | HAYIR — komşu kaynaksız |  |
| C | Küfkaynapınarı (Azatlı) | sinir_kuzey.js | 1 | DEVLET/YIL | Küfkaynapınarı (Azatlı) ← Havsa | HAYIR — komşu kaynaksız |  |
| C | Lubnı | ok106.js | 1 | DEVLET/YIL | Lubnı ← Poltava | BELİRSİZ — yalnız slug |  |
| C | Makhalak’auri | sinir_kuzey.js | 1 | DEVLET/YIL | Makhalak’auri ← Hulo (Acara) | HAYIR — komşu kaynaksız |  |
| C | Malak Dervent (Lalkovo) | sinir_kuzey.js | 1 | DEVLET/YIL | Malak Dervent (Lalkovo) ← Elhova (Elhovo) | HAYIR — komşu kaynaksız |  |
| C | Malatya | yerlesimler.js | 1 | YIL | Malatya ← Sivas<br>Malatya ← Kayseri | HAYIR — komşu kaynaksız<br>HAYIR — komşu kaynaksız |  |
| C | Maykop (Çerkezya) | yerlesimler.js | 1 | DEVLET/YIL | Maykop (Çerkezya) ← Anapa | BELİRSİZ — yalnız dönem içi kaynak |  |
| C | Mercihamis (Yurtbağı) | sinir_guney.js | 1 | DEVLET/YIL | Mercihamis (Yurtbağı) ← Birecik | EVET (görünüşte) |  |
| C | Murska Sobota | a78_avrupa.js | 1 | DEVLET/YIL | Murska Sobota ← Kanije<br>Murska Sobota ← Varasd (Varaždin) | HAYIR — komşu kaynaksız<br>HAYIR — komşu kaynaksız |  |
| C | Murvaneti | sinir_kuzey.js | 1 | DEVLET/YIL | Murvaneti ← Batum | HAYIR — komşu kaynaksız |  |
| C | Saylıca | sinir_kuzey.js | 1 | DEVLET/YIL | Saylıca ← Şavşat | HAYIR — komşu kaynaksız |  |
| C | Sincan | sinir_guney.js | 1 | DEVLET/YIL | Sincan ← İskenderun | BELİRSİZ — yalnız 1920 Meysalun günü |  |
| C | Soçi (Sâşe) | yerlesimler.js | 1 | DEVLET/YIL | Soçi (Sâşe) ← Anapa | BELİRSİZ — yalnız dönem içi kaynak |  |
| C | Stérna | sinir_kuzey.js | 1 | DEVLET/YIL | Stérna ← Orestiada (Kumçiftliği) | HAYIR — komşu kaynaksız |  |
| C | Sîva (Siwa) | p0043libya.js | 1 | DEVLET/YIL | Sîva (Siwa) ← Dâhile<br>Sîva (Siwa) ← Hârice (Vâhât)<br>Sîva (Siwa) ← Ferâfire<br>Sîva (Siwa) ← Bahriye (Bâvîtî) | HAYIR — komşu kaynaksız<br>HAYIR — komşu kaynaksız<br>HAYIR — komşu kaynaksız<br>HAYIR — komşu kaynaksız |  |
| C | Tirwānīsh | sinir_guney.js | 1 | DEVLET/YIL | Tirwānīsh ← İmâdiye (Amêdî) | EVET (görünüşte) |  |
| C | Ts’q’altbila | sinir_kuzey.js | 1 | DEVLET/YIL | Ts’q’altbila ← Ahıska | HAYIR — komşu kaynaksız |  |
| C | Tuapse | yerlesimler.js | 1 | DEVLET/YIL | Tuapse ← Anapa | BELİRSİZ — yalnız dönem içi kaynak |  |
| C | Uluköy (Akçadam) | sinir_kuzey.js | 1 | DEVLET/YIL | Uluköy (Akçadam) ← Uzunköprü | HAYIR — komşu kaynaksız |  |
| C | Umur Fakih (Fakia) | sinir_kuzey.js | 1 | DEVLET/YIL | Umur Fakih (Fakia) ← Elhova (Elhovo) | HAYIR — komşu kaynaksız |  |
| C | Yüksekova (Gever) | ek26.js | 1 | DEVLET/YIL | Yüksekova (Gever) ← Çölemerik (Hakkâri) | HAYIR — komşu kaynaksız |  |
| C | Zazalo | sinir_kuzey.js | 1 | DEVLET/YIL | Zazalo ← Ahıska | HAYIR — komşu kaynaksız |  |
| C | Özalp (Saray) | ek26.js | 1 | DEVLET/YIL | Özalp (Saray) ← Van | HAYIR — komşu kaynaksız |  |
| C | Şelon havzası (Soltsı) | a78_avrupa.js | 1 | DEVLET/YIL | Şelon havzası (Soltsı) ← Novgorod<br>Şelon havzası (Soltsı) ← Staraya Russa | HAYIR — komşu kaynaksız<br>HAYIR — komşu kaynaksız |  |
| C | Şeyh Salû-yi Ulyâ | sinir_dogu.js | 1 | DEVLET/YIL | Şeyh Salû-yi Ulyâ ← Mâku<br>Şeyh Salû-yi Ulyâ ← Kotur | HAYIR — komşu kaynaksız<br>HAYIR — komşu kaynaksız |  |
| C | Ḩīmū | sinir_guney.js | 1 | DEVLET/YIL | Ḩīmū ← Nusaybin<br>Ḩīmū ← Malikiye (Derik) | BELİRSİZ — yalnız slug<br>BELİRSİZ — yalnız slug |  |
| D | Ba'lebek (Baalbek) | ek29.js | 1 | GÜN | Ba'lebek (Baalbek) ← Şam | BELİRSİZ — yalnız 1920 Meysalun günü |  |
| D | Drama | yerlesimler.js | 1 | GÜN | Drama ← Kavala<br>Drama ← Praviște (Eleftheroupoli)<br>Drama ← Serez | BELİRSİZ — yalnız slug<br>BELİRSİZ — yalnız slug<br>BELİRSİZ — yalnız slug |  |
| D | Filorina (Florina) | a78_avrupa.js | 1 | GÜN | Filorina (Florina) ← Kesriye (Kastoria)<br>Filorina (Florina) ← Manastır<br>Filorina (Florina) ← Vodina (Edessa) | EVET (görünüşte)<br>HAYIR — komşu kaynaksız<br>BELİRSİZ — yalnız slug | karışık: Kesriye kaynaklı, Manastır boş, Vodina yalnız slug |
| D | Niş | yerlesimler.js | 1 | GÜN | Niş ← (adsız 'komşu kayıtlar') | BELİRSİZ — komşu adı yok |  |
| D | Sûr (Tyre) — Lübnan | ek29.js | 1 | GÜN | Sûr (Tyre) — Lübnan ← Şam | BELİRSİZ — yalnız 1920 Meysalun günü |  |
| D | Vanimo | a78_okyanusya.js | 1 | GÜN | Vanimo ← Herbertshöhe (Kokopo) — Rabaul<br>Vanimo ← Madang | EVET (görünüşte)<br>HAYIR — komşu kaynaksız | komşu Herbertshöhe kaynaklı (NLA) ama 600 km — yakınlık şartı kendi beyanında zayıf |

