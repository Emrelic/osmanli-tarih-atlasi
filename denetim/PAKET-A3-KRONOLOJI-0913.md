# PAKET-A3 · KRONOLOJİ (+ A5 ETİKET) — 13 Eylül 2026

```
OTURUM   PAKET-A3 (1.MURAT sevki, M-3825 açılış · M-3827 engel · M-3781 devri alındı)
SEVK     denetim/OLCUM-PAKET-SINIF-0913.md "A3 · KRONOLOJİ" (11) + "A5 · ETİKET" (2)
         + 1.MURAT eki ①: KITA 14 dosyaları serbest → 0046/H-0001 · 0045/H-0008 · 0042/H-0010 YAP
         + 1.MURAT eki ②: A1'den devir → Timur 1403 · 1594-95 voyvoda ayaklanması kaleleri
KAYNAK   TDV gövdeleri ARAC-A6A-TDV-0913.py ile çekilip OKUNDU (48 slug denendi: 36 canlı · 12 ölü)
COMMIT   YOK (şartname gereği)
```

## 0 · DENETİM ÖNCE → SONRA (`py arac/denetle.py --ayrinti`)

| ölçüt | önce | sonra | not |
|---|---|---|---|
| kronoloji maddesi (çekirdek) | 1357 | **1372** | +15 (data/olaylar_p0049.js) |
| Değişmez 2 | 528 kırılma · 0 açık | 528 · **0 açık** | değişmedi |
| Değişmez 2s | 1331 · 101 AÇIK · 357 KAPSAM DIŞI | 1331 · **101** · **357** | değişmedi; **2s ayrıntı listelerinde tek satır fark yok** ⇒ sahte kapanış (D147) doğmadı |
| Değişmez 2i | 62 · 3 açık | 62 · 3 | değişmedi |
| Değişmez 2t | 14 (tavan 42) | **15** | tek yeni: `1921-06-01 İtalyanlar Antalya'yı boşaltmaya başladı` — atlasta İtalyan işgal dönemi yok, **B kalemi** (§B) |
| mükerrer (şüpheli çift) | 0 | **0** (ilk yazımda 1 — §0.2) | Ahıska ↔ Çıldır Zaferi, başlık düzeltmesiyle kapandı |
| mükerrer ZAYIF (ihlal değil) | 50 | 52 | yeni: İznik'in fethi ↔ İznik medresesi (ertesi gün, Orhan — kasıtlı sıra) · Çıldır ↔ Ahıska (`mustaf`) |
| SONUÇ | temiz | **temiz** | |
| savaş senkronu | 163/171 | 166/175 | yeni 4 kayıt savaslar.js'ten (bu paketin değil); yeni açık `1594-01-01 Erdel'in Kutsal İttifak'a katılışı -184g` — **savaslar.js kaydı**, A4 sahibine |

### 0.1 D147 — her yeni gün ÖNCEDEN ölçüldü
`denetim/ARAC-A3-KIRILMA-0913.py GÜN` ③ bölümü: *"bu güne madde yazılırsa hangi maddesiz kırılma günleri kapanır"*.
Yazılan 15 günün **15'inde 0**. Elenen iki aday:
```
1853-07-03  Rus ordusunun Prut'u geçişi   → 1853-07-28 Ak-Meçit (hokand→rusya) SAHTE kapanırdı; TDV gün de vermiyor ⇒ YAZILMADI
1336-01-01  İznik medresesi (TDV yılı)    → 1336-01-01 Varangal/Vijayanagara SAHTE kapanırdı ⇒ bu gün KULLANILMADI
```
**Mükerrer düzeltmesi:** ilk sonra-koşusu `[kişi!mustaf,zaferi,çildir]` ile Ahıska maddesini aynı günkü
`olaylar_ek2.js` "Çıldır Zaferi — doğu savaşı başladı" ile eşleştirdi (ortak "Çıldır zaferi" + Lala *Mustafa* Paşa ↔ Menûçihr'in sonraki adı *Mustafa* Paşa).
İki olay AYRI (meydan savaşı ↔ savaştan sonra atabeg ülkesinin itaati — TDV cildir-eyaleti). Sonuç: §0.2.

### 0.2 Mükerrer — SEÇİM (1.MURAT'ın c şıkkı) ve ikinci sonra-koşusu
**Neden eşleşti — `arac/denetle.py mukerrer_maddeler` okundu:** ölçüt başlık benzerliği (≥ MUKERRER_ESIK) DEĞİL, ikinci ölçüt:
aynı gün (fark 0) + ortak kişi kökü (`mustaf`: Lala *Mustafa* Paşa ↔ Menûçihr'in sonraki adı *Mustafa* Paşa) ve **kesin** sayılması için
başlık Jaccard'ı ≥ KESIN_JACCARD 0,10 — ilk başlıktaki "Çıldır zaferinin ardından" ortak kökleri (`zaferi`, `çildir`) eşiği aşırıyordu.
- (a) seçilmedi: Ahıska'nın kendi kaynaklı günü YOK (TDV ahiska yalnız yıl; cildir-eyaleti "hemen ardından").
- (b) seçilmedi: Emre ayrı madde istedi (0020/H-0013) ve olay kaynakta ayrı anlatılıyor.
- **(c) seçildi:** yalnız BAŞLIK konuya indirildi ("… — Altunkale, Hırtıs ve Ahılkelek"; "Çıldır zaferinin hemen ardından" `gun`da).
  Kişi alanı KORUNDU ⇒ çift artık ihlal değil, **ZAYIF (gözden geçirme) listesinde `[kişi:mustaf]`** — bilerek. İsterse `BILINEN_AYRI`ya
  eklemek arac/denetle.py sahibinin kararı.
```
                          önce (başlangıç)   sonra-1 (ilk yazım)   sonra-2 (düzeltme)
mükerrer şüpheli çift            0                 1 ✗                 0 ✓
ZAYIF çift                      50                51                  52   (+İznik fethi↔medresesi · +Çıldır↔Ahıska)
SONUÇ                          temiz          İHLAL VAR               temiz
```
Değişmez 2 / 2s / 2i / 2t sonra-2'de de §0 tablosuyla aynı (528·0 · 1331·101·357 · 62·3 · 15).

---

## A · KALEMLER

### 0035/H-0059 — 1425 "yeniden ilhak" başlığında Teke ✅
- Dosya: `data/olaylar_ek.js:45` (t:1425-06-01 — değişmedi).
- Ölçüm: 1425-06-01 kırılmasında 30 uç — aydin (Aydın · İzmir · Tire · Birgi · Ayasuluk · Kuşadası · Söke · Çeşme), mentese (Muğla · Milas · Balat · Datça · Marmaris · Fethiye) ve **Denizli germiyan→OSMANLI**. **Teke kaydı YOK** (Antalya · Elmalı · Finike · Kaş 1423-01-01'de, `olaylar_ek5.js` "Tekeoğulları'nın kesin tasfiyesi" maddesiyle).
- Yapılan: başlık "…Menteşe ve Aydın"; `yer` Teke'siz; metin TDV `menteseogullari` (827/1424) ve `aydinogullari` (829/1425-26 Cüneyd Bey'in idamı) ile yeniden yazıldı; "Teke bu maddenin konusu değildir: 1423'te tasfiye edildi" cümlesi eklendi. Eski metnin sonundaki **bayat liste** ("aynı tarihte katılanlar: Isparta, Manisa, Çeşme, Denizli" — Isparta ve Manisa kırılmada yok) kaldırılıp `ic_not_d`ye taşındı. `kaynak:"aydinogullari · menteseogullari"`.
- **B:** Emre'nin "Germiyan sanki ilhak edilmiş gibi" gözlemi = **Denizli'nin 1425'te germiyan→OSMANLI geçmesi**. TDV Germiyan'ın ilhakını 1428-1429 vasiyetine bağlıyor; Denizli'nin 1425 sahibi için kaynak TARANMADI ⇒ `YAMA-A3-0913.json` "ölçülemedi".

### 0032/H-0003 — Uzun Hasan / Karakoyunlu 🟡 YALNIZ ÖNERİ (1.MURAT kuralı)
- Madde `data/olaylar_ek7.js:206` t:1468-04-01 · yer_id Tebriz — **yazılmadı**.
- Ölçüm: aynı gün **30 yerleşim** s: karakoyunlu→akkoyunlu (Tebriz · Nahçıvan · Revan · Gence · Erdebil · Urmiye …). Madde tek başına taşınırsa 2s'de 1 gün / 60 uç açılır.
- Kaynak: TDV `karakoyunlular` — Hasan Ali'nin ordusu dağıldı **Zilhicce 872 / Temmuz 1468**; `uzun-hasan` — Merend bozgunu Safer 873 / Eylül 1468, Hasan Ali'nin ölümü Şevval 873 / Nisan-Mayıs 1469.
- Öneri `denetim/YAMA-A3-0913.json`: madde t→**1468-07-01** (gun "Zilhicce 872 / Temmuz 1468", ay hassasiyeti açık) + 30 yerleşimin s[i].t / s[j].f aynı güne (liste girdi.py'den tarandı, dosya ve dizin konumlu). Alternatif 1468-06-22 (Zilhicce 872 başı). yer_id Tebriz korunur — TDV bozgunun yerini vermiyor (**ölçülemedi**).
- Açık soru: Gence · Berde (Hasan Ali'nin çekildiği yön) Eylül 1468/1469'a kayabilir — kaynak gün vermiyor.
- **B / editoryal borç:** aynı olay üç maddede: `ek20` 1467-01-01 (Van gölü havzası; TDV'nin 10 Kasım 1467'sinden 10 ay önce, Van/Bitlis/Bargiri/Hoşap/Kotur kırılmasına bağlı) · `ek5` 1467-11-10 · `ek7` 1468-04-01.

### 0020/H-0013 — Ahıska ayrı madde ✅ madde · 🟡 yerleşim öneri
- Önceki not (`olaylar_ek20.js` ⑭) *"madde yazmak yanlış olur"* diyordu; Emre ayrı madde istiyor ve sevk de öyle. Yazıldı: `data/olaylar_p0049.js` **t:1578-08-09** "Ahıska atabegliğinin Osmanlı idaresine girmesi — Altunkale, Hırtıs ve Ahılkelek".
- Gün: TDV `ahiska` yalnız "Çıldır Savaşı (1578) sonunda"; `cildir-eyaleti` "savaşın hemen ardından". **Gün KOMŞUDAN** (§4 şartlı, dört şart yazılı): Çıldır 9 Ağustos 1578 — `lala-mustafa-pasa` (5 Cemâziyelâhir 986) + `cildir-eyaleti`.
- Yeni gün kırılma DEĞİŞTİRMİYOR (1578-08-09'da zaten Batum · Hulo · Sohum · Tiflis kırılmaları var) · D147 ③ = 0.
- **B (öneri):** Ahıska `d[0].f` ve `s[..].t` **1578-08-01 → 1578-08-09** — veri Ahıska'yı savaştan 8 gün önce Osmanlı yapıyor; Emre'nin değişimi FAS'taki Vâdisseyl maddesinde (1578-08-04) görmesinin sebebi bu.

### 0042/H-0004 — Katalan seferi başı ✅ madde · ⚠️ ok için kod kararı
- Yazıldı: `p0049` **t:1303-01-01** "Katalan Kumpanyası Bizans hizmetine girdi — Anadolu seferinin başlangıcı", yer_id Alaşehir. TDV `bizans`: birlik 1303'te geldi, 1304'te Germiyan kuşatmasındaki Alaşehir'i kurtardı, 1305'te Roger de Flor öldürüldü. Gün yok → yıl kodu.
- **§4⑥ TDV iç ayrışması:** `germiyanogullari` aynı Alaşehir kuşatmasını **1306**'ya koyuyor (bizans 1304) — `ic_not_d`de.
- 🔴 **ÖLÇÜLDÜ — madde tek başına oku öne çekmez.** `js/app.js:3685-3713`: `_fiKirpik = min(max(fi, çapa ti'den önceki son olay), fi + (ti−fi)/2)`, çapa = seferin **t'si** (1305-06-01). 1303 maddesi çapayı değiştirmez; ok yine ~1304-07-16'dan görünür. Kodun kendi yorumu ("madde olsaydı ok orada belirirdi") bugünkü formülde DOĞRU DEĞİL. Öneri app.js sahibine (YAMA-A3 son kalem).
- Mevcut `olaylar_ek.js:91` "Katalan birliklerinin Anadolu seferi" t:1305-06-01'e dokunulmadı (günü kaynaksız — not).

### 0035/H-0062 — "Bu maddenin Osmanlı açısından önemi" (Demak 1527) ✅ kısmen
- Görseldeki madde: `olaylar_ek16.js` t:1527-01-01 Demak/Majapahit.
- Yapılan: `gun` alanındaki süreç notu "(TDV yıl verir, gün vermez)" `ic_not_gun`e taşındı.
- Cevap (editoryal, karar Emre'nin): madde Osmanlı ile ilgili olduğu için değil, **haritada Cava'daki renk değişimini anlatmak için** (Değişmez 2s) orada. Bu sınıftaki "dünya" maddelerini gizlemenin yolu veride zaten var: `kapsam:"dis"` + `js/suzgec.js onemSuz` (dunya eşiği). Bu madde `kapsam` taşımıyor — işaretlemek görünürlüğü değiştireceği için **yapılmadı, soruldu**.

### 0035/H-0065 — "Haritada değişiklik olmayan madde" (İbrim 1555) ✅ editoryal · 🟡 B
- Madde `olaylar_ek5.js:468` t:1555-01-01. Harita kıpırdamıyor çünkü atlas İbrim'i **1517-04-13**'ten Osmanlı gösteriyor (CLAUDE.md §3.5.1 vakası).
- Kaynaklar ayrışıyor (§4⑥): TDV `nube` idarî teşkilâtı 1517 fethinin ardına koyar; `sudan` Aşağı Nûbe'nin katılışını "XVI. yüzyılın ortalarında" Özdemir Paşa'ya bağlar; `habes-eyaleti` İbrim sancağının **26 Temmuz 1573**'te Habeş eyaletine bağlandığını yazar. **1555 yılı hiçbir kaynakta yok.**
- Yapılan: `gun` "XVI. yüzyıl ortası"; iki anlatı madde metnine açıkça yazıldı; yıl borcu `ic_not_gun`e; `t` DEĞİŞTİRİLMEDİ (Değişmez 2 kovası oynamasın). `kaynak:"sudan · nube · habes-eyaleti"`.

### 0035/H-0090 — Savaş başlangıçları (sınıf) ✅ plan + ilk parti (2 yeni + 2 düzeltme)
**Mevcut başlangıç maddeleri (çekirdek) — ölçüldü:**
```
savaş            ilan / başlangıç maddesi                  savaşın adı başlıkta   Eflak-Boğdan'a giriş maddesi
1710-1711 Prut   YOK → 🆕 1711-04-09 ordunun hareketi       🆕 eklendi              —
1735-1739        YOK (1737 Özi, 1738 Özi geri)              —                      YOK (TDV günsüz)
1768-1774        ek5 1768-10-08 (Ekim 1768)                 VAR                    YOK — TDV mustafa-iii "Temmuz 1771" istila (günsüz)
1787-1792        ek5 1787-08-17 → ✏️ 1787-08-16             ✏️ eklendi             YOK — TDV hotin "1788 Eylülünde" (günsüz)
                 🆕 1787-07-27 ültimatom
1806-1812        ek5 1806-12-22 (günü ÖLÇÜLEMEDİ)           ✏️ eklendi             metinde var ("iki prensliği işgal etti")
1828-1829        ek5 1828-04-26                             VAR                    YOK — TDV edirne-antlasmasi günsüz
1853-1856        olaylar.js 1853-10-04                      VAR (Kırım Savaşı)     YOK — Prut geçişi D147 ile elendi
1877-1878        olaylar.js 1877-04 + ek10 1877-04-24       VAR (93 Harbi)         YOK — TDV doksanuc-harbi günsüz
```
**İlk partide yazılan/düzeltilen:**
- 🆕 `p0049` **1711-04-09** "Prut Seferi başladı — 1710-1711 Osmanlı-Rus Savaşı'nda ordu İstanbul'dan çıktı" — TDV `ahmed-iii`.
- 🆕 `p0049` **1787-07-27** "Rus elçisine ültimatom — 1787-1792 Osmanlı-Rus Savaşı'na giden son adım" — TDV `abdulhamid-i`.
- ✏️ `ek5` 1787-08-17 → **1787-08-16** (TDV `yas-antlasmasi`: "2 Zilkade 1201 (16 Ağustos 1787) ilân edilen"); başlığa savaşın adı. **§4⑥:** `abdulhamid-i` 19 Ağustos'u sadrazamın arzı olarak anıyor — `ic_not_gun`.
- ✏️ `ek5` 1806-12-22 başlığına "(1806-1812 Osmanlı-Rus Savaşı)"; günün kaynağı **ölçülemedi** (TDV selim-iii yalnız yıl) — `ic_not_b`.

**Plan (sonraki partiler):** her savaş için üç madde hedefi — ① ilan (adıyla) ② ordunun hareketi/yığınak ③ Memleketeyn'e giriş/işgal. Engel tek: **gün kaynağı**. TDV bu adımları çoğunlukla günsüz veriyor; sonraki parti akademik kaynak ister (Aksan *Ottoman Wars 1700-1870*; Badem *The Ottoman Crimean War*) ve her aday günü D147 ③ ile sınanmalı (1853 örneği gibi sahte kapanış riski gerçek). Oklar (Eflak-Boğdan'a giriş güzergâhı) savaslar.js — A4.

### 0039/H-0004 — 1918-1923 doğu/güney cephesi ✅ ilk parti 10 madde
Hepsi TDV günüyle, hepsi D147 ③ = 0, `p0049`:
```
1919-04-12  Kars'ın İngiliz işgali — Cenûb-ı Garbî Kafkas Hükûmeti dağıtıldı   kars (ahiska 13 Nisan der — 1 gün ayrışma, bildirildi)
1919-04-29  Antalya'nın İtalyan işgali                                        antalya
1920-02-11  Maraş'ın kurtuluşu — Fransızlar şehri boşalttı                    kahramanmaras   (isg kırılması AYNI GÜN ✓)
1920-04-11  Urfa'nın kurtuluşu — Fransız garnizonu şehri terk etti            sanliurfa       (isg kırılması 04-10, 1 gün)
1920-09-28  Doğu Cephesi harekâtı başladı                                     kazim-karabekir
1920-10-30  Kars'ın kurtuluşu                                                 kars · kazim-karabekir
1921-02-09  Antep savunmasının sonu                                           gaziantep
1921-02-23  Ardahan ve Artvin'in kurtuluşu                                    ardahan · kazim-karabekir
1921-03-16  Moskova Antlaşması                                                kars · ahiska
1921-06-01  İtalyanlar Antalya'yı boşaltmaya başladı                          antalya
```
Mevcutlara dokunulmadı (Brest-Litovsk · Batum 1918 · Elviye-i Selâse · Gümrü · Ankara İtilâfnâmesi · Kars Antl. · Çukurova dosyası). Moskova maddesinde Batum iddiası YAZILMADI — okunan TDV gövdelerinde yok.
**B:** atlas Kars · Ardahan · Artvin · Antalya için 1919-1921 işgal dönemini taşımıyor; Urfa isg bitişi 04-10 (kendi notu "TÜRETİLDİ"), TDV 04-11 — öneriler YAMA-A3.

### 0046/H-0001 — Fizan iç notu ✅
- `arac/ic_not_uygula.py` KURU KOŞU: 2 kaydın 2'si **ATLANDI — eşleşme 0**. Sebep ölçüldü: `olaylar_ek8.js` JSON biçimli anahtar kullanıyor (`"gun": "…"`), uygulayıcının deseni `gun\s*:` tırnaklı anahtarı tanımıyor (**aracın kör noktası — arac sahibine not**).
- Metin ek8'le yeniden eşlendi (iki eski metin dosyada birebir) ve **elle** uygulandı: `gun` "1577" + `ic_not_gun`; `d` "…geçecekti." cümlesinde bölündü, "⚠️ TDV BU SÜRECİ 1551'E BAĞLAR…" paragrafı `ic_not_d`ye taşındı (silinmedi). Süzülmüş yama: `denetim/YAMA-A3-ICNOT-FIZAN-0913.json`. Okur metninde "1551'E BAĞLAR" artık 0.

### 0045/H-0008 — Kasım Hanlığı yer_id + 36 öneri ✅ 20 uygulandı
`denetim/ARAC-A3-YERID-UYGULA-0913.py` (kuru → --uygula). Karar tablosu betikte; her satır doğrulandı:
```
uygulandı 20   yer_id Kasimov (1573 — yama kapsam_genis diyordu; H-0008 odağı Kasım Hanlığı olduğu için yer_id)
               yer_kon: Tilsit · Nukuʻalofa ×2 · Tuva(Kızıl) ×3 (yerleşim YOK, koordinat şehir merkeziyle karşılaştırıldı)
               kapsam_genis ×13 (yer alanı ≥2 ayrı yer sayıyor)
atlandı 16     14'ü ZATEN UYGULANMIŞ (Kasım 1468/1609 yer_kon · Hawaii ×3 · Wellington · Kirman · Buhara ×2 · Viyana ·
               Budapeşte · Kabil · Hive ×2) + Darfur ×2 zaten "Darfur" — başka bir oturum önce uygulamış
kararsız 0
```
Güvenlik: nesnede zaten yer_id/yer_kon/kapsam_genis varsa atlar (ilk sürüm yalnız `b`den sonrasına bakıyordu, `yer_id` `b`den ÖNCE durabildiği için pencere nesne başına genişletildi — Darfur vakası).

### 0042/H-0010 — İznik medresesi sırası ✅
- `olaylar_ek5.js` t:1331-01-01 → **1331-03-03** (fetih `olaylar.js` 1331-03-02; gün DEVRALINDI +1, 1.MURAT kuralı, `ic_not_gun`de yazılı).
- Kaynak eklendi: TDV `davud-i-kayseri` — medresenin inşaatı **1336**'da bitti, Dâvûd-i Kayserî müderris. 1336-01-01 kullanılmadı: D147 (bkz. §0.1).

### A1 devri ① — Timur'un Anadolu'dan çekilişi 🟡 YAZILMADI
- Madde **zaten var**: `olaylar_ek5.js:53` t:1403-03-15 "Timur'un Anadolu'dan çekilmesi" (A1 raporu "bulunamadı" diyordu — bu evrende var).
- Günü kaynaksız; savaslar.js sefer `f:1403-03-15 t:1403-08-01` de kaynaksız. TDV `timur`: Bayezid'in ölüm haberi Mart 1403 · "bir yıl kadar Anadolu'da kalıp" · Muharrem 807 / Temmuz 1404 Semerkant. Çıkış günü/ayı YOK ⇒ yeni madde mükerrer olurdu, yazılmadı. Ok penceresi kararı savaslar.js/app.js sahibinde.

### A1 devri ② — 1594-95 voyvoda ayaklanması ✅ 1 madde
- Başlangıç maddeleri **zaten var**: `olaylar_ek10.js` 1594-10-05 (üç voyvodalık Kutsal İttifak'a) · 1594-11-13 (Bükreş, Tuna kalelerine saldırı) · 1595-08-23 Kalûgerân.
- Eksik olan, kaynakta ADIYLA geçen kale olayları. Yazıldı: `p0049` **1595-01-01** "Cesur Mihail'in Tuna kalelerine akınları — Rusçuk yakıldı, İbrâil alındı, Silistre yağmalandı". TDV `ruscuk` Şubat 1595 · `ibrail` Mart 1595 (1601'e kadar Mihail'de) · `silistre` 1595 ilkbaharı · `murad-iii` İbrâil'in yakılması **Ocak 1595** (§4⑥ ayrışma, bildirildi). Gün yok → yıl kodu; D147 ③ = 0.
- **B:** İbrail'in 1595-1601 Mihail idaresi atlasta yok → YAMA-A3.

---

## A5 · ETİKET (`data/etiket_yama.js` — ÖNERİ, veri değil)

Evren: `ARAC-A3-MADDE-TOPLA-0913.js` — 84 dosya, **6210 madde** (çekirdek 1372 · kuyruk 4838).

### 0035/H-0066 — Emre'nin konu başlıkları → `konu26`
Emre'nin listesi **26** satır (mesajda "25" deniyor). Kural: `k ∪ tur ∪ etiket` değer kümesi VEYA başlıkta kelime deseni; gövde kullanılmaz; çok başlık serbest.
```
en az bir başlık   6200 / 6210  (%99,8)   · başlıksız 10 (çekirdek 6, kuyruk 4 — hepsi k/tur/etiket:"diger")
ortalama başlık/madde 1,90                · birden çok başlık 3884
Askerî 2730 · Siyasî 1815 · Diplomasi 1030 · Hânedan 898 · Kültür 561 · Kişiler 541 · İdarî 517 · Ekonomi 513 ·
Din ve felsefe 493 · İç ayaklanma 447 · Yenileşme ve ıslahat 429 · İmar ve mimari 365 · Bilim teknoloji 353 ·
Sosyal yaşam 274 · Hukuk düzeni 242 · Eğitim 98 · Doğal afetler 94 · Demografi 93 · Darbeler 84 · Ulaştırma 59 ·
Keşif 57 · Sanat 42 · Bürokrasi 36 · Sanayi 25 · Spor 9 · Magazin 6
```
Sınırlar (bölümde yazılı): başlık desenleri tek tek OKUNMADI (örneklem yok → **ölçülemedi**); Sanat/Kültür verideki `kultur` değerinde birleşik; 577 etiket değerinin çoğu özel ad ve bağlanmadı.

### 0035/H-0034 — Afet etiketleri → `afet`
Alt etiketler: `afet-deprem · afet-yangin · afet-sel · afet-salgin · afet-kitlik · afet-volkan-firtina`.
```
madde 94 (çekirdek 15)   salgın 56 · yangın 16 · kıtlık 15 · deprem 13 · volkan/fırtına 4 · sel 3
başlık deseni + mevcut salgin/veba/kitlik değerleri + OKUNARAK seçilen 24 gövde maddesi; 2 başlık eşleşmesi OKUNARAK elendi (kuşatma açlığı)
gövde adayı okundu: 125 → seçilen 24
```
🔴 İki alet kusuru koşudan önce yakalandı: `seli` sınırsızdı ve **"Selim"i** yakaladı (25 sahte sel → 3) · `çekirge` Boğdan voyvodası **"Çekirge Stefan"ı** yakalardı.
📌 Emre'nin örneği "sel" için **başlıkta 0 madde** — Osmanlı çekirdeğinde sel maddesi yok: içerik boşluğu, etiket boşluğu değil.

---

## B · KOŞU SONRASI / BAŞKA SAHİP (hepsi `denetim/YAMA-A3-0913.json`)
1. Uzun Hasan: ek7 madde + 30 yerleşim → 1468-07-01 (birlikte).
2. Ahıska d.f / s.t 1578-08-01 → 1578-08-09.
3. Denizli 1425 germiyan→OSMANLI — kaynak taranmadı (ölçülemedi).
4. İbrim d.f 1517-04-13 — kaynaklar ayrışıyor, öneri yok.
5. Kars · Ardahan · Artvin · Antalya 1919-1921 işgal dönemleri; Urfa isg.t 1920-04-10 → 04-11.
6. İbrail 1595-1601 Eflak/Mihail dönemi (isg mi s mi — karar).
7. ek20 1467-01-01 Van maddesi/yerleşimleri TDV 10 Kasım 1467 ile çelişiyor.
8. **arac/ic_not_uygula.py** JSON biçimli anahtarları (`"gun":`) tanımıyor.
9. **js/app.js** sefer kırpma çapası (Katalan).
10. **arac/denetle.py 2t** `toprak-kaybi` arıyor; veride 617 madde `toprak-kayip`, 5 madde `toprak-kaybi` ⇒ kayıp maddelerinin 2t'si fiilen SORULMUYOR (ölçüldü: envanter). D181 sınıfı.
11. savaslar.js yeni kayıt `1594-01-01 Erdel'in Kutsal İttifak'a katılışı` -184 gün açık (bu paketin değil).

## C · BAĞLANMASI GEREKEN
- `data/olaylar_p0049.js` → `window.OLAYLAR_P0049` — **index.html'e satır eklenmedi** (dosya başka işçide). Bağlanmadan canlı değil (D099); denetle.py glob'la zaten sayıyor.

## D · ALETLER
```
denetim/ARAC-A3-KIRILMA-0913.py        gün → kırılmalar (d/v/s/isg) · ±30 çekirdek madde · D147 ③ simülasyonu
denetim/ARAC-A3-ARA-0913.py            çekilmiş TDV gövdesinde bağlamlı arama
denetim/ARAC-A3-YERLESIM-OKU-0913.py   adlar / donem / sinir (girdi.py evreni)
denetim/ARAC-A3-YAMAOKU-0913.py        hazır iç-not ve yer_id yamalarını okur
denetim/ARAC-A3-YERID-UYGULA-0913.py   H-0008 doğrulanmış öneri uygulayıcısı (kuru varsayılan)
denetim/ARAC-A3-YAMA-YAZ-0913.py       YAMA-A3-0913.json üreticisi
denetim/ARAC-A3-MADDE-TOPLA-0913.js    çekirdek+kuyruk madde toplayıcı
denetim/ARAC-A5-ENVANTER-0913.py       k/tur/etiket envanteri + afet adayları
denetim/ARAC-A5-AFET-OKU-0913.py       afet adaylarını bağlamla okuma
denetim/ARAC-A5-ETIKET-0913.py         konu26 + afet sınıflandırıcı (--yaz → etiket_yama.js)
```

## E · SAYIM
```
yeni çekirdek madde           15  (p0049: A3 13 · A1 devri 1 · — Timur 0)
  0039/H-0004 10 · H-0090 2 · Ahıska 1 · Katalan 1 · 1595 kaleleri 1
düzeltilen madde               7  (Teke 1425 · Demak 1527 · İznik medresesi · 1787 ilanı · 1806 başlığı · İbrim 1555 · Fizan 1577)
                                  + p0049 Ahıska başlığı (mükerrer düzeltmesi)
yer_id/yer_kon/kapsam_genis   20
öneri (yama)                  11 kalem
TDV slug denendi              48 (36 canlı · 12 ölü: hasan-ali · katalanlar · roger-de-flor · mentesogullari · gumru-antlasmasi ·
                                  ankara-antlasmasi · moskova-antlasmasi · kurtulus-savasi · kilikya · ibrim · ozdemir-pasa · orhan-gazi …)
```
