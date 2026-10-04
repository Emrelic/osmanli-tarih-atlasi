# KASA-ZINCIR-1004 — devralma ve zincirleme ölçümü (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatör YILDIRIM BAYEZIT'in talebi · önceki iş: `KASA-KAYNAKSIZ-1004`
Okuyucu `girdi.yukle()` · araç `denetim/ARAC-KASA-ZINCIR-1004.py` · ham çıktı `denetim/KASA-ZINCIR-1004.json`
**100 kaydın `kaynak:` metni tek tek ELLE okundu.** Komşu adları ve devralınan alan elle yazıldı; regex yalnız ad eşleştirmede kullanıldı. **Düzeltme YAZILMADI.**

## HÜKÜM (ölçtüm)
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

## TABLO — 69 gerçek devralma (önce DEVLET/YIL, sonra GÜN; içinde ağırlık sırası)
| ad | dosya | derinlik | devralınan | zincir (← dayandığı) | uç | öneri |
|---|---|:-:|---|---|---|---|
| Arapkir | yerlesimler.js | 2 | DEVLET/YIL | Arapkir ← Divriği ← Sivas<br>Arapkir ← Divriği ← Kayseri<br>Arapkir ← Sivas<br>Arapkir ← Malatya ← Sivas<br>Arapkir ← Malatya ← Kayseri | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Darende | ok110.js | 2 | DEVLET/YIL | Darende ← Malatya ← Sivas<br>Darende ← Malatya ← Kayseri | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Qaţţīnah | sinir_guney.js | 2 | DEVLET/YIL | Qaţţīnah ← Ceylanpınar ← Mardin<br>Qaţţīnah ← Rakka | 🔴 BOŞ, 🟠 zayıf — yalnız 1920 Meysalun günü | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Távri | sinir_kuzey.js | 2 | DEVLET/YIL | Távri ← Ferecik (Feres) ← Sofulu (Soufli)<br>Távri ← Ferecik (Feres) ← Dedeağaç (Alexandroupoli) | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Bitlis | yerlesimler.js | 1 | DEVLET/YIL | Bitlis ← Van | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Ceylanpınar | ek25.js | 1 | DEVLET/YIL | Ceylanpınar ← Mardin | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Divriği | yerlesimler.js | 1 | YIL | Divriği ← Sivas<br>Divriği ← Kayseri | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Jadlā’ | sinir_guney.js | 1 | DEVLET/YIL | Jadlā’ ← Akçakale<br>Jadlā’ ← Ayn el-Arab (Kobani) | 🔴 BOŞ, 🟠 zayıf — yalnız 1920 Meysalun günü | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Karpuzlu (Yenikarpuzlu) | sinir_kuzey.js | 1 | DEVLET/YIL | Karpuzlu (Yenikarpuzlu) ← İpsala | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Kilise | sinir_guney.js | 1 | DEVLET/YIL | Kilise ← Çölemerik (Hakkâri) | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Küfkaynapınarı (Azatlı) | sinir_kuzey.js | 1 | DEVLET/YIL | Küfkaynapınarı (Azatlı) ← Havsa | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Makhalak’auri | sinir_kuzey.js | 1 | DEVLET/YIL | Makhalak’auri ← Hulo (Acara) | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Malak Dervent (Lalkovo) | sinir_kuzey.js | 1 | DEVLET/YIL | Malak Dervent (Lalkovo) ← Elhova (Elhovo) | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Malatya | yerlesimler.js | 1 | YIL | Malatya ← Sivas<br>Malatya ← Kayseri | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Murska Sobota | a78_avrupa.js | 1 | DEVLET/YIL | Murska Sobota ← Kanije<br>Murska Sobota ← Varasd (Varaždin) | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Murvaneti | sinir_kuzey.js | 1 | DEVLET/YIL | Murvaneti ← Batum | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Saylıca | sinir_kuzey.js | 1 | DEVLET/YIL | Saylıca ← Şavşat | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Stérna | sinir_kuzey.js | 1 | DEVLET/YIL | Stérna ← Orestiada (Kumçiftliği) | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Sîva (Siwa) | p0043libya.js | 1 | DEVLET/YIL | Sîva (Siwa) ← Dâhile<br>Sîva (Siwa) ← Hârice (Vâhât)<br>Sîva (Siwa) ← Ferâfire<br>Sîva (Siwa) ← Bahriye (Bâvîtî) | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Ts’q’altbila | sinir_kuzey.js | 1 | DEVLET/YIL | Ts’q’altbila ← Ahıska | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Uluköy (Akçadam) | sinir_kuzey.js | 1 | DEVLET/YIL | Uluköy (Akçadam) ← Uzunköprü | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Umur Fakih (Fakia) | sinir_kuzey.js | 1 | DEVLET/YIL | Umur Fakih (Fakia) ← Elhova (Elhovo) | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Yüksekova (Gever) | ek26.js | 1 | DEVLET/YIL | Yüksekova (Gever) ← Çölemerik (Hakkâri) | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Zazalo | sinir_kuzey.js | 1 | DEVLET/YIL | Zazalo ← Ahıska | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Özalp (Saray) | ek26.js | 1 | DEVLET/YIL | Özalp (Saray) ← Van | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Şelon havzası (Soltsı) | a78_avrupa.js | 1 | DEVLET/YIL | Şelon havzası (Soltsı) ← Novgorod<br>Şelon havzası (Soltsı) ← Staraya Russa | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Şeyh Salû-yi Ulyâ | sinir_dogu.js | 1 | DEVLET/YIL | Şeyh Salû-yi Ulyâ ← Mâku<br>Şeyh Salû-yi Ulyâ ← Kotur | 🔴 BOŞ | İZİNSİZ + BOŞLUKTAN besleniyor → `bulunamadı` beyanı, zincir iddiası kalkar |
| Beri | sinir_kuzey.js | 2 | DEVLET/YIL | Beri ← Iğdır ← Revan | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Kliçatak (Suser) | sinir_kuzey.js | 2 | DEVLET/YIL | Kliçatak (Suser) ← Gümrü (Aleksandropol) ← Revan | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Küçükperveli | sinir_kuzey.js | 2 | DEVLET/YIL | Küçükperveli ← Arpaçay (Akyaka) ← Revan | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Norapat | sinir_kuzey.js | 2 | DEVLET/YIL | Norapat ← Eçmiyadzin ← Revan | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Arpaçay (Akyaka) | ek26.js | 1 | DEVLET/YIL | Arpaçay (Akyaka) ← Revan | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Babū | sinir_guney.js | 1 | DEVLET/YIL | Babū ← Nusaybin<br>Babū ← Malikiye (Derik) | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Balıklı | sinir_guney.js | 1 | DEVLET/YIL | Balıklı ← Şemdinli (Şemdinni) | 🟠 zayıf — GeoNames konum, tarih kaynağı değil | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Cibri (Güçlü) | sinir_guney.js | 1 | DEVLET/YIL | Cibri (Güçlü) ← Cizre | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Cumai (Birlikköy) | sinir_guney.js | 1 | DEVLET/YIL | Cumai (Birlikköy) ← Silopi | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Digor | ek26.js | 1 | DEVLET/YIL | Digor ← Revan | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Eçmiyadzin | ek26.js | 1 | DEVLET/YIL | Eçmiyadzin ← Revan | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Gümrü (Aleksandropol) | ek26.js | 1 | DEVLET/YIL | Gümrü (Aleksandropol) ← Revan | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Gōrabī | sinir_guney.js | 1 | DEVLET/YIL | Gōrabī ← Şemdinli (Şemdinni)<br>Gōrabī ← Rewândiz | 🟢 kaynaklı, 🟠 zayıf — GeoNames konum, tarih kaynağı değil | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Iğdır | ek26.js | 1 | DEVLET/YIL | Iğdır ← Revan | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Lubnı | ok106.js | 1 | DEVLET/YIL | Lubnı ← Poltava | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Maykop (Çerkezya) | yerlesimler.js | 1 | DEVLET/YIL | Maykop (Çerkezya) ← Anapa | 🟡 yalnız dönem içi | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Sincan | sinir_guney.js | 1 | DEVLET/YIL | Sincan ← İskenderun | 🟠 zayıf — yalnız 1920 Meysalun günü | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Soçi (Sâşe) | yerlesimler.js | 1 | DEVLET/YIL | Soçi (Sâşe) ← Anapa | 🟡 yalnız dönem içi | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Tuapse | yerlesimler.js | 1 | DEVLET/YIL | Tuapse ← Anapa | 🟡 yalnız dönem içi | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Ḩīmū | sinir_guney.js | 1 | DEVLET/YIL | Ḩīmū ← Nusaybin<br>Ḩīmū ← Malikiye (Derik) | 🟠 zayıf — yalnız slug | İZİNSİZ, uç zayıf → beyan; ucun o dönemi kapsayan kaynağı ölçülmeli |
| Berdiçev (Berdychiv) | ukrayna_0916.js | 1 | YIL | Berdiçev (Berdychiv) ← Jitomir (Zhytomyr) | 🟢 kaynaklı | İZİNSİZ ama uç kaynaklı → kendi kaynağı aranır ya da beyanlı borç |
| Bosna Brod'u (Bosanski Brod) | ek29.js | 1 | YIL | Bosna Brod'u (Bosanski Brod) ← Bosna Dubiçası (Bosanska Dubica) | 🟢 kaynaklı | İZİNSİZ ama uç kaynaklı → kendi kaynağı aranır ya da beyanlı borç |
| Jasenovaç (Jasenovac) | ek29.js | 1 | YIL | Jasenovaç (Jasenovac) ← Bosna Dubiçası (Bosanska Dubica) | 🟢 kaynaklı | İZİNSİZ ama uç kaynaklı → kendi kaynağı aranır ya da beyanlı borç |
| Mercihamis (Yurtbağı) | sinir_guney.js | 1 | DEVLET/YIL | Mercihamis (Yurtbağı) ← Birecik | 🟢 kaynaklı | İZİNSİZ ama uç kaynaklı → kendi kaynağı aranır ya da beyanlı borç |
| Tirwānīsh | sinir_guney.js | 1 | DEVLET/YIL | Tirwānīsh ← İmâdiye (Amêdî) | 🟢 kaynaklı | İZİNSİZ ama uç kaynaklı → kendi kaynağı aranır ya da beyanlı borç |
| Başkale | ek26.js | 1 | GÜN | Başkale ← Van | 🔴 BOŞ | GÜN şartı TUTMUYOR (komşunun günü kaynaksız) |
| Dimetoka | yerlesimler.js | 1 | GÜN | Dimetoka ← Sofulu (Soufli) | 🔴 BOŞ | GÜN şartı TUTMUYOR (komşunun günü kaynaksız) |
| Ferecik (Feres) | yerlesimler.js | 1 | GÜN | Ferecik (Feres) ← Sofulu (Soufli)<br>Ferecik (Feres) ← Dedeağaç (Alexandroupoli) | 🔴 BOŞ | GÜN şartı TUTMUYOR (komşunun günü kaynaksız) |
| Filorina (Florina) | a78_avrupa.js | 1 | GÜN | Filorina (Florina) ← Kesriye (Kastoria)<br>Filorina (Florina) ← Manastır<br>Filorina (Florina) ← Vodina (Edessa) | 🔴 BOŞ, 🟢 kaynaklı, 🟠 zayıf — yalnız slug | GÜN şartı TUTMUYOR (komşunun günü kaynaksız) |
| Gümülcine | yerlesimler.js | 1 | GÜN | Gümülcine ← Sofulu (Soufli)<br>Gümülcine ← Dedeağaç (Alexandroupoli) | 🔴 BOŞ | GÜN şartı TUTMUYOR (komşunun günü kaynaksız) |
| Vanimo | a78_okyanusya.js | 1 | GÜN | Vanimo ← Herbertshöhe (Kokopo) — Rabaul<br>Vanimo ← Madang | 🔴 BOŞ, 🟢 kaynaklı | GÜN şartı TUTMUYOR (komşunun günü kaynaksız) |
| Çaldıran | ek26.js | 1 | GÜN | Çaldıran ← Van | 🔴 BOŞ | GÜN şartı TUTMUYOR (komşunun günü kaynaksız) |
| Şeyhrumi (Yücelen) | sinir_dogu.js | 1 | GÜN | Şeyhrumi (Yücelen) ← Van | 🔴 BOŞ | GÜN şartı TUTMUYOR (komşunun günü kaynaksız) |
| Ba'lebek (Baalbek) | ek29.js | 1 | GÜN | Ba'lebek (Baalbek) ← Şam | 🟠 zayıf — yalnız 1920 Meysalun günü | GÜN şartı ŞÜPHELİ (komşu kaynağı o günü kapsıyor mu ölçülmedi) |
| Drama | yerlesimler.js | 1 | GÜN | Drama ← Kavala<br>Drama ← Praviște (Eleftheroupoli)<br>Drama ← Serez | 🟠 zayıf — yalnız slug | GÜN şartı ŞÜPHELİ (komşu kaynağı o günü kapsıyor mu ölçülmedi) |
| Niş | yerlesimler.js | 1 | GÜN | Niş ← (adsız 'komşu kayıtlar') | ⚪ komşu adı yazılmamış | GÜN şartı ŞÜPHELİ (komşu kaynağı o günü kapsıyor mu ölçülmedi) |
| Sûr (Tyre) — Lübnan | ek29.js | 1 | GÜN | Sûr (Tyre) — Lübnan ← Şam | 🟠 zayıf — yalnız 1920 Meysalun günü | GÜN şartı ŞÜPHELİ (komşu kaynağı o günü kapsıyor mu ölçülmedi) |
| Braslav (Bratslav) | ukrayna_0916.js | 1 | GÜN | Braslav (Bratslav) ← Vinnitsa (Vinnytsia) | 🟢 kaynaklı | GÜN şartlı izne UYGUN görünüyor (yakınlık/aynı süreç ayrıca) |
| Chenzhou (Hunan) | nokta_asya_0917.js | 1 | GÜN | Chenzhou (Hunan) ← Hengyang (Hengzhou) | 🟢 kaynaklı | GÜN şartlı izne UYGUN görünüyor (yakınlık/aynı süreç ayrıca) |
| Garapan (Saipan) | a78_okyanusya.js | 1 | GÜN | Garapan (Saipan) ← Hagåtña (Agaña) | 🟢 kaynaklı | GÜN şartlı izne UYGUN görünüyor (yakınlık/aynı süreç ayrıca) |
| Kragujevac | yerlesimler.js | 1 | GÜN | Kragujevac ← Niş<br>Kragujevac ← Vidin | 🟢 kaynaklı | GÜN şartlı izne UYGUN görünüyor (yakınlık/aynı süreç ayrıca) |
| Çaçak | yerlesimler.js | 1 | GÜN | Çaçak ← Niş<br>Çaçak ← Vidin | 🟢 kaynaklı | GÜN şartlı izne UYGUN görünüyor (yakınlık/aynı süreç ayrıca) |

