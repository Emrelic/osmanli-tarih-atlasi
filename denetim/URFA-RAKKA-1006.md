# URFA-RAKKA-1006 — SAHIPLIK-OLCULEMEDI'nin TERS YÖN bulguları: Urfa · Rakka · Halep/Adana günleri

Temel: `origin/makine/umit` @ `3ec79a5f`, ağaç `C:\atlas-p84-urfa` (`--detach`). YALNIZ ÖLÇÜM. **Diff YOK** (aşağıda niçin).
Görevi veren: UMIT İRTİBAT (6 Ekim 2026). Motor tuzu dosyalarına dokunulmadı.

## 🔴 ÖNCE: MÜKERRER KAPISI (GOREV-ORTAK §2) — dört kalemden ÜÇÜ ZATEN ÖLÇÜLMÜŞ VE HÜKÜMLÜ
`SAHIPLIK-OLCULEMEDI-1006`da bunları "ters yön bulgusu" diye verdim. **Yeni değillerdi.** O turda `denetim/`i yalnız
W46 adlarıyla taramıştım, kalemleri **hükümleriyle** taramamıştım (`OLCUM-KITA-SARTLARI §9`un tarif ettiği hata).

| kalem | önceki ölçüm (dosya:satır) | hüküm | durum |
|---|---|---|---|
| **Urfa** | `data/yer_yama_acik.js:78-83` (H-0008, parti-0036: aynı TDV cümlesi) · `denetim/MISIR-SEFER-0075.json` H-0014 · `denetim/AKDENIZ-ARAP-0082-CEVAP.md:305-308` | *"Atlas Urfa'yı 1832-08-15→1841 Mısır gösteriyor: KAYNAKSIZ"* (H-0014) · Kutluoğlu: Urfa Kütahya kapsamı dışında (H-0025) · 0082: *"kayıt kaldırılsın (1839 kısa işgali kaynak günüyle ayrıca)"* | `denetim/KAPAT-0075-76-0930.md:42`: **senin-kararin** (Emre, Karar ①) — veri değişmedi |
| **Halep** | `denetim/AKDENIZ-ARAP-0082-CEVAP.md:292-295` (H-0092) · `denetim/ACIK-BIRLESIK-0930.json:1540` | TDV `ibrahim-pasa-kavalali` *"Halep’i ele geçirdikten sonra (15 Temmuz)"* ⇒ `v` başı ve `olaylar_ek4.js:183` maddesi 1832-06-25 → **1832-07-15** | **sirada** — veri değişmedi |
| **Adana** | `denetim/MISIR-SEFER-0075.json` H-0013 | *"Adana + Tarsus: ALINDI (Belen'den sonra, Ağustos 1832 başı; gün kaynakta yok)"* | açık; atlas 1832-07-29 (Belen günü) |
| **Rakka** | `denetim/MISIR-SEFER-0075.json` (ters_yon gerekçesi) Rakka'yı *"hep Osmanlı"* sayıyor | — hüküm yok | **YENİ** — aşağıda |

⇒ Urfa ve Halep için **yeni bir diff yazmadım**: hüküm zaten var ve karar/sıra bekliyor; ikinci bir diff aynı kalemi iki
kez açar. Benim katkım yalnız şu: aynı TDV cümlesini 6 Ekim 2026'da **yeniden okudum, gövde değişmemiş** (Urfa:
*"1839’da Kavalalı Mehmed Ali Paşa’nın oğlu İbrâhim Paşa’nın kısa süre kontrolü altına giren Urfa"*; Halep: *"Halep’i ele
geçirdikten sonra (15 Temmuz)"*).

### ⚠️ Urfa'nın "çözüldü" görünen yaması CANLI DEĞİL
`data/yer_yama_uyg2.js:168-181` Urfa'yı `{f:"1839-01-01",t:"1840-01-01"}` yapıyor ve `hukum:"cozuldu-yazildi"` diyor. Ama:
- `girdi.GIRDI_DOSYALARI` içinde adında `yama` geçen **hiçbir dosya yok** (ölçüldü: `[]`); `girdi.yukle()` Urfa'yı hâlâ
  `v 1832-08-15 → 1841-02-25` döndürüyor (`data/yerlesimler.js:255`).
- Yamanın `t:"1840-01-01"`i **kendi beyanıyla tahmindir** (*"BİR TAHMİNDİR … KESİN DEĞİL"*) — `CLAUDE.md §4` "tarih uydurma"
  kapsamında. Uygulanırsa bu uç **kaynaksız** iner.
⇒ "cozuldu-yazildi" damgası yanıltıcı: veri değişmedi. Karar ① için öneri aynı kalır: 1832 dönemi kaldırılsın; 1839
kısa dönemi ancak kaynak YIL'ıyla (`1839-01-01`) ve bitişi kaynak bulunana dek YAZILMADAN — ya da hiç yazılmadan.

### ⚠️ Adana — kendi önceki bulgumu GERİ ALIYORUM (tuzak ⑧)
`SAHIPLIK-OLCULEMEDI-1006.md`de Adana'nın atlas günü 1832-07-29'u TDV'nin 3 Mayıs 1833 mutabakatıyla karşılaştırdım. **Yanlış karşılaştırma:**
TDV `kavalali-mehmed-ali-pasa`daki *"3 Mayıs 1833 tarihinde Adana’nın İbrâhim Paşa’ya muhassıllık olarak verilmesine razı
oldu"* cümlesi **resmî tevcihi** tarihliyor, fiilî işgali değil. Fiilî işgal için H-0013 hükmü (Ağustos 1832 başı, gün yok)
geçerli. Atlasın 07-29'u Belen savaşının günüdür (*"Belen’de mağlûp etti (29 Temmuz 1832)"*), Adana'nın değil — fark
**birkaç gün**, yön doğru. Yeni öneri yok; H-0013 yeterli.

## Rakka — YENİ
**Zincir:** `data/yerlesimler.js:982` — `ad:"Rakka"`; `girdi.yukle()`: `d` **1516-08-28 → 1918-10-26 kesintisiz**, `v` YOK.
**Kaynak — TDV `rakka`** (6 Ekim 2026, 200, gövde okundu), birebir:
> *"1832’de İbrâhim Paşa’nın Suriye’yi işgal ettiği yıllarda Mısır’ın idaresine geçen Rakka, Mısır ordusunun Suriye’yi
> tahliyesinin ardından tekrar Osmanlı hâkimiyetine girdi."*

**Rakamı taşıyan cümle neyi tarihliyor:** "1832’de" **İbrâhim Paşa'nın Suriye'yi işgalini** tarihliyor; Rakka'nın geçişi
*"işgal ettiği yıllarda"* — yani **Rakka için yıl yok.** Bitiş "tahliyenin ardından" — tarihsiz.
- ✔ **YÖN DOĞRULANDI:** Rakka (şehir) Mısır idaresine geçmiş ve tahliyeden sonra dönmüş. Atlasın kesintisiz `d`'si TDV ile
  uyumsuz. `MISIR-SEFER-0075.json`'un *"Rakka … hep Osmanlı"* öncülü bu cümleyle çürüyor (o öncül Urfa hükmünün
  **gerekçesiydi**, Urfa hükmü TDV `sanliurfa`ya ayrıca dayandığı için ayakta kalır).
- ✘ **UÇLAR ÖLÇÜLEMEDİ.** Başlangıç yılı Rakka için yazılmamış; bitiş yok.
- ⚠️ **Ad tuzağı:** XIX. yüzyılda "Rakka eyaleti"nin merkezi Urfa'dır; akademik metinlerde "Rakka" çoğu zaman **eyaleti**
  (yani Urfa'yı) anlatır. Bir arama özetinde *"Babıâli Diyarbekir ve Rakka eyaletlerini kaybetmek istemediği için 19 Mart
  1834'te Reşid Paşa'ya verdi"* iddiası çıktı — bu, **eyalet** Osmanlı'daydı der, şehir hakkında değil; ve iddiayı taşıyan
  gövdeyi BULAMADIM (Kocaoğlu, DergiPark 114321: Rakka geçmiyor) ⇒ kullanılmadı. Şehir ile eyalet ayrı sorulmalı.

**Niçin diff YOK:** `v` dönemi yazmak için iki uç gerekir; ikisi de kaynakta yok. `§4`: yıl bilinmiyorsa yıl yazılmaz.
Komşu günü şartı (`D207`) da tutmuyor: en yakın `v` taşıyan Halep'in günü **kendisi yanlış** (06-25 ⇄ TDV 07-15), Rakka
~160 km uzakta ve aynı gün düştüğüne dair tanık yok. ⇒ `denetle.py` önce/sonra da koşturulmadı (değişiklik yok).

**ÖNERİ (koordinatöre):** Rakka bir `v gerekli · uçlar ölçülemedi` kalemi olarak açık listeye girsin. Gün için aday
kaynak: Kutluoğlu, *The Egyptian Question (1831-1841)* (TDV `kavalali-mehmed-ali-pasa` bibliyografyasında); Altundağ,
*Kavalalı Mehmet Ali Paşa İsyanı* (Ankara 1945). İkisi de okunmadı (çevrimiçi gövde yok).

## Bulunamadı
- Rakka'nın Mısır'a geçiş ve iade günü/yılı.
- "19 Mart 1834 Reşid Paşa" iddiasının gövdesi (arama özetinde var, okunan makalede yok).
- Urfa 1839 kısa döneminin bitişi (H-0008'den beri açık).
