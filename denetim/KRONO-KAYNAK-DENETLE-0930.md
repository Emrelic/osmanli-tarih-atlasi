# KRONO-KAYNAK-DENETLE — 30 Eylül 2026 gecesi yazılan kronolojinin KAYNAK denetimi

Denetçi: KRONO-KAYNAK-DENETLE · koordinatör: YILDIRIM BAYEZIT · sınav anı ~23:50.
**Düzeltme YAPILMADI**; `data/`ya dokunulmadı, `git` ve `denetle.py` koşturulmadı.
Ayrıntılı delil: `denetim/KRONO-KAYNAK-DENETLE-0930.json` · öngörü (ölçümden önce):
`denetim/KRONO-KAYNAK-DENETLE-0930-ONGORU.md`.
Araçlar: `denetim/ARAC-KRONO-KAYNAK-DENETLE-yukle.js` (node `vm`) ·
`ARAC-KRONO-KAYNAK-DENETLE-0930.py` (kipler: statik · cek · baslik · alinti · gun_tdv · disi) ·
`ARAC-KRONO-KAYNAK-DENETLE-birlestir.py`.

## 0 · EVREN — node `vm` ile değerlendirilerek sayıldı

| dosya | madde |
|---|---|
| kronoloji_cok_1923_1945 | 500 |
| once1281_avrupa · iran · anadolu · ortadogu | 281 · **169** · 175 · 171 |
| once1281_dogu_asya · afrika · hint_amerika | 73 · 52 · 51 |
| ince_ (8 dosya: anadolu_iran 20 · avrupa_amerika 25 · bati_afrika 14 · dg_afrika 25 · gd_asya 44 · guney_asya 56 · kuzey_amerika 12 · misir_orta_asya 35) | 231 |
| **TOPLAM** | **1703** (ilk ölçüm 1574; ince dosyaları büyürken yeniden ölçüldü) |

⚠️ Şartnamedeki **"1984" tutmuyor**: listelenen sekiz sayının toplamı 500+281+181+175+171+73+52+51 = **1484**.
⚠️ `once1281_iran` ölçüm sırasında **181 → 169** düştü (sahibi 12 madde çıkardı).
Değerlendirme hatası: 0/16 dosya. Değişken adları hepsi `KRONOLOJI_COK_*`.

## ① TDV ATIFLARI — HAM KOD, yönlendirme izlenmedi

```
benzersiz slug 221 · atıf 876 · TDV atıflı madde 812
200  : 220   ✓ SAĞLAM
302  :   1   → 've' — slug DEĞİL: "TDV ve erişilebilir akademik kaynak: bulunamadı" cümlesinden araç çıkarımı
000/503: 0
başlık ↔ slug: 220/220 doğru madde (12 çift-tireli ayrım slug'ı — cin--ulke, sam--suriye, mehdiler--yemen,
         mehdiler--sudan, bopal--devlet … — hepsinin başlığı doğru madde)
boilerplate: en kısa gövde 892 kelime (bicapur) · medyan ~2.400 → boş/boilerplate gövde 0
```
**ÖLÜ SLUG 0 · YANLIŞ MADDE 0.** "Ad ≠ başlık" diye 9 satır çıktı; hepsi aynı kaynak
dizgisinde bir sonraki eserin adı (ör. `lubnan` ardından `'SURİYE'`) — araç artefaktı, elle bakıldı.
Slug çıkarımı dört biçimi okur: URL · `TDV: slug` · `TDV slug ("…")` · `` TDV `slug` `` · URL'siz
`TDV İA 'Ad'` (5 slug addan türetildi; hepsi 200).

## ② ALINTI — 🔴 en önemli soru

**TDV'ye bağlı Türkçe alıntılar, TDV gövdesinde birebir arandı** (normalleştirme: Türkçe harf,
noktalama, kesme işareti; `…` atlamaları parça parça):
```
BİREBİR 573 · atlamalı (…) birebir 7 · YAKIN 4 · KISMI 2 (+1 ayrıştırma artefaktı) · UYDURMA 0
```
Birebir olmayan 6 gerçek alıntı — **işaretsiz küçük oynama** (uydurma değil, ama "kelimesi
kelimesine" kuralını çiğniyor):

| dosya | t | b | fark |
|---|---|---|---|
| 1923_1945 | 1939-01-01 | Katar'da petrol bulundu | TDV "anlaşmazlıkların **dışında**" → alıntıda "anlaşmazlıklar dışında" |
| ince_bati_afrika | 1808-01-01 | Damonzon Diarra Segu Bambara tahtına çıktı | TDV "Fûlânî **(Pöl, Fulbe)** Devleti" → parantez `…` konmadan atılmış |
| ince_bati_afrika | 1769-01-01 | Naaba Dulugu Mossi tahtına çıktı | TDV "**İslâm dini** Mosi Kralı … döneminde sarayda" → alıntıda "İslâm dini" cümlenin ORTASINA taşınmış (sözdizimi değişmiş) |
| once1281_anadolu | 1092-01-01 | I. Kılıcarslan İznik'e dönerek … | TDV "1092 **sonları**" → "1092 sonu" |
| once1281_afrika | 1089-01-01 | Nâsır b. Alennâs öldü … | `…` ile atlama — MEŞRU |
| once1281_anadolu | 1204-04-13 | Epir (KISMI) | alıntı TDV'nin değil Britannica başlığı — artefakt |

Aracın "TDV'de YOK" dediği 13 alıntının **13'ü de TDV'ye ait değil**: aynı `kaynak:` dizgisinde
geçen İngilizce/Katalanca/Hırvatça eserin cümlesi ya da başlığı (LoC, USHMM, Avalon, Iranica,
Britannica, enciclopedia.cat, enciklopedija.hr). Bağlama artefaktı.

**TDV-DIŞI alıntı** 922 (URL'li 568, 55 alan adı; URL'siz 361). **Örneklem**: alan başına ≤4, tohum
930 → **152 alıntı çekildi**:
```
BİREBİR 119 · atlamalı 1 · ÖLÇÜLEMEDİ 19 (PDF 10 · 403 4 · 307 4 · bağlantı 1)
YOK/KISMI 13 → 13'ü de BAĞLAMA ARTEFAKTI: alıntı, URL'den sonra gelen İKİNCİ eserin adı/cümlesi
              (ör. "Bolivia — The Rise of New Political Groups" = LoC başlığı, FRUS URL'sine bağlanmış)
   elle doğrulandı: Hırvat 1097 "Poginuo je u borbi … (Gvozd)" → enciklopedija.hr 'Petar' maddesinde BİREBİR
   doğrulanamadı: 1926-08-22 Pangalos — Columbia Encyclopedia cümlesi (URL yok) — ölçülemedi
```
⇒ Örneklemde **uydurma alıntı 0**. Evrenin geri kalanı (770 TDV-dışı alıntı) ölçülmedi.
`d:` paragrafında tırnak: 11 — hepsi terim/unvan çevirisi ("rex Bulgarorum et Blachorum",
"Arnavutların Kralı I. Zog"), kaynak alıntısı değil.

## ③ HASSASİYET

```
YYYY-MM   : 0   ✓ İHLAL YOK         YYYY (çıplak yıl): 0 · başka biçim: 0
gün       : 695 · YYYY-01-01: 1008 (hepsinde gun: beyanı ya da ic_not_t; beyansız 0 · "1 Ocak" iddiası 0)
YYYY-MM-01 (MM≠01): 17 — hepsi gun:"1 <Ay> YYYY (<kaynak>)" — gerçek gün iddiası, ayın-1'ine-kodlama DEĞİL
pencere ucu günü: 5 — 1945-09-02 Missouri teslimi (gerçek gün) · 1000-01-01 ×4 (yıl beyanlı) → kötüye kullanım 0
```
**Gün iddiası kaynakta görünüyor mu** (günün sayısı + ayın 12 dildeki adı ya da sayısal tarih,
`kaynak`+`alinti` içinde): 695 günlü maddenin **152'sinde görünmüyor**. Bunların:
- **28**'inde gün atıf yapılan TDV gövdesinde VAR (TDV'yi açıp doğruladım) ·
- 4'ünde TDV'de yok ama açıklaması yazılı (ertesi gün · OH · Bezer/Belleten · komşu gün) ·
- **133**'ü TDV-dışı: çoğu "(özet)" beyanlı resmî kaynak (Hansard, FRUS, LoC, Encyclopedia.com) — ölçülemedi.

🔴 **İHLAL 1 — sahte kesinlik / komşu gün şartı tutmuyor:**
`once1281_anadolu` · `t:"1204-04-13"` · *Mikail Angelos Arta merkezli Epir Despotluğu'nu kurdu* ·
gun: *"1204 (TDV yıl verir) — gün komşudan: İstanbul'un düşüşü 13 Nisan 1204 (alt sınır)"*.
§4 komşu gün şartı "aynı olay/süreç ve yakın konum" ister: İstanbul'un düşüşü ≠ Epir'in kuruluşu,
İstanbul ↔ Arta. Alt sınır olay günü olarak yazılmış (D210). Doğrusu `t:"1204-01-01"`.
(Öteki komşu gün — `once1281_afrika` 1086-10-23 Zellâka/Tekrûr — AYNI savaş; TDV `murabitlar`da
"12 Receb 479 / 23 Ekim 1086" birebir var ✓.)

🟡 **Açılmamış kitaptan gün:** `ince_gd_asya` 15 günlü madde (Kanagawa 31 Mart 1854, Yandabo
24 Şubat 1826, Hawaii 17 Ocak 1893 …) kaynağı yalnız kitap künyesi + **"Sayfa verilmedi"**.
Günler literatürde yaygın doğru günler, ama dayanakları açılmamış — atlas kuralıyla ölçülemez.

## ④ KIRMIZI ÇİZGİ

```
kaynak: alanında wikipedia/vikipedi: 0   · blog/forum/içerik çiftliği/YZ: 0
TEK DAYANAK Vikipedi: 0
```
Ara bölge (kurumsal, ihlal SAYMADIM — hüküm koordinatörde):
- Wien Geschichte Wiki (Viyana belediyesi/Stadtarchiv) 3 madde — 1927-07-15'te **tek** kaynak.
- URL yolunda "blog": The Gurkha Museum 1923-12-21 · Australian War Memorial 1942-01-23.
- Britannica tek kaynak: `once1281_hint_amerika` 5 madde (988, 1001, 1014, 1018, 1023) — kırmızı
  listede değil, ama akademik değil üçüncül ansiklopedi.
- Vikipedi yalnız `ic_not_d`'de 8 kez geçiyor, hepsi **"Vikipedi'de görüldü, KULLANILMADI → yıl yazıldı"**
  — kuralın doğru uygulanması.

## ⑤ KAYNAK BOŞ

```
kaynak alanı yok/boş: 0 / 1703     'bulunamadı' beyanlı: 5 (ihlal değil)
```

## 🔴 EK BULGU — kaynağı AÇILMAMIŞ maddeler (sorulmadı, ama ②'nin özüdür)

```
once1281_dogu_asya    73 / 73  "Sayfa verilmedi (bu oturumda açılmadı)"
ince_gd_asya          44 / 44  "Sayfa verilmedi"
ince_bati_afrika       6 / 14  "WebSearch özetiyle doğrulandı; gövde AÇILAMADI"
ince_kuzey_amerika     2 / 12  "arama özetinden okundu"
TOPLAM               125 / 1703
```
Beyan DÜRÜST (kaynak gizlenmemiş) ve kitaplar akademik (Cambridge History of Japan, Tarling,
Chandler, Andaya, Kuykendall …). Ama **iki dosyanın tamamı** (117 madde) hiçbir kaynağı açmadan,
modelin belleğinden yazılmış; atıf yalnız künye. §4 "YZ üretimi metin kullanılmaz" kuralının
sınırındadır: denetim bu maddelerde hiçbir şeyi doğrulayamaz. **Uydurma denmez — ölçülemez.**

## ÖNGÖRÜ ↔ ÖLÇÜM

| soru | öngörü | ölçüm | |
|---|---|---|---|
| evren | 1700-1900 | 1703 | ✓ |
| ① ölü slug | %3-8 | 0/221 | ✗ TUTMADI (daha iyi) |
| ① yanlış madde | %1-3 | 0 | ✗ TUTMADI (daha iyi) |
| ② alıntı bulunamaz | %20-50 | TDV 0/586 uydurma · TDV-dışı örneklem 0/152 | ✗ TUTMADI — vakadaki "dış model" hatası burada YOK |
| ③ YYYY-MM | 0-5 | 0 | ✓ |
| ③ pencere ucu kötüye | 0-10 | 0 | ✓ |
| ④ vikipedi | 5-30 · tek 0-5 | 0 · 0 | ✗ (daha iyi) |
| ⑤ boş | 0-10 | 0 | ✓ |

Öngörmediğim: **125 maddenin kaynağı hiç açılmamış** — asıl risk alıntı uydurmada değil,
alıntısız "künye atıfı"ndadır.

## Kör noktalar — ölçülmedi

- TDV-dışı 770 alıntı (örneklem dışı) · 19 ölçülemeyen (PDF/403/307).
- URL'siz 361 TDV-dışı alıntı (kitap, Columbia, Iranica künyesi).
- "(özet)" beyanlı 183 madde (`1923_1945`) — özetin kaynağa sadakati.
- Olgu doğruluğu (tarih/yer kaynağın dediği mi) yalnız TDV günlerinde ölçüldü (28 ✓).
