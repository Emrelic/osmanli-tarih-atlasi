# EKO-KOLEMEN-0072 — paket 0072, H-0001 + H-0002 ek okuma raporu
Oturum: EKO-KOLEMEN-0072 (Opus 5) · 20 Eylül 2026 · koordinatör 1.MURAT
Şartname: `oturumlar/DALGA-0072.md` · parti: `parti-emrelic-0072/PARTI.md` (yalnız H-0001, H-0002)
Dosyam: `data/ekokuma_kolemen.js` (ad alanı `window.EKOKUMA_KOLEMEN`) — 3 kart
Görsel AÇILMADI (şartname: H-0001 ve H-0002'nin görseli yok).

## §0 ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE YAZILDI (sınav anı: TDV/akademik kaynak taramasından ÖNCE)
Evren: TDV İslâm Ansiklopedisi (islamansiklopedisi.org.tr) + akademik dergi/tez literatürü.

- **Ö1** — TDV'de "Kölemen" ya da "Memlükler" başlığında CANLI madde vardır ve Mısır'da
  Osmanlı fethinden sonra Kölemen beyliğinin nasıl sürdüğünü anlatır. (bekleyiş: ≥1 canlı slug)
- **Ö2** — TDV'de MÜSTAKİL `tosun-pasa` maddesi YOKTUR; Tosun Paşa bilgisi
  `kavalali-mehmed-ali-pasa` · `vehhabilik` · `suudiler`/`mekke`/`medine` gövdelerine
  dağılmıştır. (D217/D218: TDV yer-kişi ansiklopedisidir ama her ikincil kişiye madde açmaz)
- **Ö3** — Kemal Sunal'ın "Tosun Paşa" (1976) filmindeki Tosun Paşa ile TARİHÎ Ahmed Tosun
  Paşa AYNI KİŞİ DEĞİLDİR; film bir kurgudur, tarihî olayı anlatmaz. Akademik sinema/kültür
  kaynağı (tez, hakemli makale) BULUNUR.
- **Ö4** — Atlasın `1811-09-03` kaydında hassasiyet çelişkisi vardır: `gun:"Eylül 1811"`
  (ay) ama `t:"1811-09-03"` (gün). Kaynak gün vermiyorsa bu sahte kesinliktir (D210/D213).

## §1 ÖNGÖRÜLERİN SINAVI — dördü de bir yönden tuttu, ikisi KISMEN çürüdü

| # | sonuç | ölçüm |
|---|---|---|
| Ö1 | 🟡 **YARIM TUTTU** | `kolemenler` slug'ı CANLI ama kendi gövdesi YOK — `memlukler`e yönlendiriyor; `memlukler` (İsmail Yiğit, 2004) 1517 SONRASINI anlatmıyor. Post-1517 süreklilik `misir` maddesinden (Seyyid Muhammed es-Seyyid, 2004) çıktı — yani öngörünün "anlatır" kısmı YANLIŞ SLUG'A bağlıydı. |
| Ö2 | ✅ **TUTTU** | `arama?q=Tosun Paşa` → **Maddeler: 0** · madde içeriklerinde **63 geçiş**. `/tosun-pasa` slug'ı maddeye değil arama sayfasına düşüyor (ölü slug). Künye **5 ayrı maddeden** derlendi. Ama tahminimin listesi YANLIŞTI: `vehhabilik` maddesi Tosun'u HİÇ ANMIYOR; bilgi `abbas-hilmi-i` · `kavalali-mehmed-ali-pasa` · `diriye` · `abdullah-b-suud` · `yenbu` maddelerinde. |
| Ö3 | ✅ **TUTTU** (ama dayanağı beklediğimden zayıf) | Akademik kaynak BULUNDU (4 hakemli makale) ve filmin olay örgüsünü veriyor. Fakat "aynı kişi değil"i SÖYLEYEN bir kaynak yok — hüküm iki tarifin uyuşmazlığına + bağ kuran kaynağın YOKLUĞUNA dayanıyor. Kart bunu gizlemiyor. |
| Ö4 | ✅ **TUTTU** | `1811-09-03` günü açılan **hiçbir** kaynakta geçmiyor. TDV `yenbu` yalnız "(1811)" der; Şimşek 2021 "Eylül 1811'de başlayan bu sefer" der ve Yenbu'nun **EKİM**'de ele geçirildiğini yazar. Ayrıca kaydın `kaynak:"vehhabilik"` alanı ve içindeki "on altı yaşındaki oğlu Tosun" ifadesi o maddeyle DESTEKLENMİYOR. |

## §2 NE ÖLÇTÜM — sayılar

**Kart üretimi**
- 3 kart · `kimdir` × 2, `karsi-anlati` × 1 · metin uzunlukları 5713 / 6070 / 4883 karakter.
- Zorunlu alan (`id, tur, olay, baslik, metin, kesinlik, kaynak`): 3/3 kartta TAM.
- `tur` değerleri `js/app.js` `EKOKUMA_TUR` anahtar kümesinde: 3/3 GEÇERLİ
  (tanımsız `tur` sessizce görünmez olurdu — D099).
- Ad alanı `window.EKOKUMA_KOLEMEN`, `_ekHavuz()` süzgeci (`/^EKOKUMA_[A-Z0-9]+$/`): TANIYOR.

**Bağ ölçümü** (aletin mantığı `app.js`in `_ekBagEslesir` + `_ekNorm`u birebir taklit eder;
evren `data/olaylar*.js` + `data/kronoloji*.js` = **125 dosya, 6657 kayıt**)

| bağ | tutan madde | hangileri |
|---|---|---|
| `1811-03-01\|Kölemen` | 2 | olaylar_ek4 «Kal'a Vakası: Kölemen beylerinin tasfiyesi» · kronoloji_misir «Kal'a Vakası — Kölemen beylerinin tasfiyesi» |
| `1821-01-04\|Dongola` | 2 | olaylar_ek4 «Dongola alındı — Kölemen bakiyesi dağıtıldı» · kronoloji_misir «Dongola'nın alınması» |
| `1811-09-03\|Tosun Paşa` | 2 (iki kart kullanıyor) | olaylar_ek4 «Hicaz seferi başladı…» · kronoloji_misir «Hicaz seferinin başlaması…» |
| `1812-12-03\|Medine` | 2 | olaylar_ek4 «Medine geri alındı» · kronoloji_misir «Medine'nin geri alınması» |
| `1813-05-02\|Tâif` | 2 | olaylar_ek4 + kronoloji_misir «Tâif'in geri alınması — Hicaz seferinin tamamlanışı» |

⇒ **toplam 12 bağ eşleşmesi · KARŞILIKSIZ BAĞ 0 · hata 0.**
(`1821-01-04` ayırt edicisi ilk denemede `|Kölemen`di ve kronoloji_misir kaydını KAÇIRIYORDU —
başlığında "Kölemen" yok. `|Dongola`ya çevrildi, ikisi de tuttu. Ölçüm olmasa bir kart
sessizce tek maddede kalırdı.)

**Kaynak ölçümü** — gövdesi AÇILAN belge sayısı: **10 TDV maddesi + 6 hakemli akademik metin**
(4'ü tam metin PDF olarak indirilip okundu). Kullanılamayan/atılan: Vikipedi, IMDb (§4 kırmızı çizgi).

**denetle.py** — 20 Eylül 2026, 18:5x'te bir kez **ÇÖKTÜ**
(`shapely.errors.GEOSException: bad allocation`, `konum_denetimi` aşamasında); 1.MURAT'ın
M-4789 hükmü uyarınca bu veri bozulması SAYILMADI. ~5 dakika sonra yeniden koşturuldu:
**SONUÇ: temiz.** (Değişmez 2s'de 192 açık / tavan 201, 2i'de 1 / tavan 3 — hepsi bilinen borç.)

## §3 NE BULAMADIM — `bulunamadı` bir sonuçtur

1. **TDV'de müstakil "Tosun Paşa" maddesi YOK** (0 madde / 63 madde-içi geçiş). Künye beş
   maddeden derlendi.
2. **Tosun Paşa'nın doğum yılı ve sefere çıktığı yaş** — açılan hiçbir kaynakta yok
   (4 TDV maddesi + Şimşek 2021 + Değirmenci 2016 + Çevik 2022). Kaynaklar yalnız
   "genç yaşta olması" ve "kumandanların Tosun Paşa'ya **çocuk gözü ile** bakarak" der.
3. **TDV'de müstakil "Kal'a Vakası" maddesi YOK**; olay `kavalali-mehmed-ali-pasa` ve
   `ibrahim-bey` gövdelerinden okundu (D217 doğrulandı: TDV olay değil yer-kişi ansiklopedisi).
4. **Filmi tarihî Tosun Paşa'ya bağlayan (ya da bağlamadığını söyleyen) akademik kaynak YOK.**
   Filmin bir uyarlama olup olmadığı da akademik kaynakla tespit edilemedi. Senaryo yazarı,
   gişe ve gösterim tarihi için akademik kaynak bulunamadı → kartta YER ALMIYOR.

### 🔴 İKİ ÇIKARICI TUZAĞI — ikisi de yakalandı, ikisi de kullanılmadı
- **Tuzak A (D211 ⑦, sayı uydurması):** bir arama motoru özeti Tosun Paşa için
  *"only nineteen years old"* dedi. Kaynağı arandığında bunun bir **dergi adının**
  ("**Ondokuz** Mayıs Üniversitesi İnsan Bilimleri Dergisi") yanlış ayrıştırılmasından
  doğduğu görüldü — makalede yaş HİÇ geçmiyor. Sayı ATILDI.
- **Tuzak B:** aynı sınıf bir özet, 1976 filmini **1930'larda Muhsin Ertuğrul'a** atfetti.
  İlgili PDF indirilip tarandı: "Tosun" kelimesi o belgede **0 kez** geçiyor. İddia ATILDI.
- **Tuzak C (D211 ⑦ pozitif vaka):** bir dergi PDF'i çıkarıcı tarafından "okunamadı/bozuk"
  denerek reddedildi; `pypdf` ile aynı dosya sorunsuz açıldı. **Çıkarıcının "okuyamadım"ı
  belge hakkında bir şey söylemiyor** — ikinci çıkarıcı kuralı dört PDF'de işe yaradı.

## §4 ATLASA DAİR ÖLÇÜMLER — veri DÜZELTİLMEDİ (benim dosyam değil), hüküm 1.MURAT'ta

| # | kayıt | ölçüm | sınıf |
|---|---|---|---|
| A1 | `olaylar_ek4.js` `1811-09-03` | `d:` alanı "Mehmed Ali **on altı yaşındaki** oğlu Tosun'u … gönderdi" diyor, `kaynak:"vehhabilik"` gösteriyor. TDV `vehhabilik` gövdesi (Mehmet Ali Büyükkara, 2012) açıldı: **Tosun'u HİÇ ANMIYOR**; maddenin ilgili tek cümlesi "1811'de harekete geçen Mısır kuvvetleri 1813 yılı itibariyle Mekke ve Medine'yi tekrar Osmanlı yönetimi altına aldılar"dır. | **kaynak kaydı desteklemiyor** + yaş için hiçbir kaynak yok |
| A2 | aynı kayıt, `t:"1811-09-03"` | `gun:"Eylül 1811"` ayı beyan ediyor, `t:` günü veriyor. Gün hiçbir kaynakta YOK. Ayrıca başlık "Yenbu'ya çıktı" derken Şimşek 2021 Yenbu'nun **EKİM 1811**'de ele geçirildiğini yazıyor. | **sahte kesinlik** (D210/D213) |
| A3 | `olaylar_ek4.js` `1811-03-01` | `kaynak:"memluk"`. Açılan `memlukler` gövdesi 1811'den ve Kal'a Vakası'ndan söz etmiyor. Doğru künye: `kavalali-mehmed-ali-pasa` + `ibrahim-bey` (ikincisi hicrî günü de veriyor: 5 Safer 1226). | **kaynak kaydı desteklemiyor** |
| A4 | aynı kayıt, `d:` | "Beş yüzyıllık Kölemen nüfuzu böylece son buldu" — kaynak daha temkinli: beylerin başı İbrâhim Bey davete gitmediği için sağ kaldı, **Şubat 1816**'da Dongola'da öldü, bakiye **4 Ocak 1821**'e kadar orada durdu (atlasın kendi maddesi). | **hüküm kaynaktan geniş** |
| A5 | `1813-05-02` Tâif | ÇELİŞKİ **KAPATILMADI**: TDV `taif` (Küçükaşçı, 2010) "2 Mayıs 1813" der ve **atlas bunu doğru yazıyor** (`kaynak:"taif"` tutarlı). Şimşek 2021 ise Mekke ile Tâif'i **Ocak 1813**'e koyar ve Tâif haberinin, Mekke haberinin Mısır'a ulaştığı 19 Şubat 1813'ten **beş gün sonra** geldiğini yazar. §4 gereği TDV esas alındı; fark kartın `ic_not`una ve buraya kaydedildi. | **kaynak-kaynak çelişkisi, TDV esas** |

## §5 YATAY BULGU — SEFER-OK-0070'e (H-0002'nin OK ayağı onun kalemi)
Emre'nin sorusu: *"tosun paşa yenbuya nereden çıktı ok ile gösterelim denizden mi geçti karadan mı gitti"*.
Kaynaktaki cevap **İKİSİ BİRDEN** ve tek cümlede duruyor —
Kamuran Şimşek, ÇTTAD XXI/42 (2021-Bahar), 19-46:

> "Eylül 1811'de başlayan bu seferde **piyade askerleri gemiler aracılığıyla denizden,
> süvari birliği ise karadan** yol almıştır."

Yardımcı ölçümler: kuvvet **3.500 kişi** (Değirmenci 2016) · Yenbu **"Medine'nin limanı"**
ve Vehhâbîler Medine'nin Yenbu bağlantısını kesmişti (TDV `yenbu`) · Yenbu **Ekim 1811**'de
ele geçirilip üs yapıldı (Şimşek) · ilk saldırı **23 Kasım 1811**, bozgunla bitti.
⇒ Tek ok yetmez: **iki ok** (deniz kolu + kara kolu) tarihen doğru gösterim olur.

## §6 DEĞİŞEN DOSYALAR
- `data/ekokuma_kolemen.js` — **YENİ**, 3 kart. Paylaşılan dizin olduğu için
  **commit 1.MURAT'ta** (DALGA-0072 ortak kuralı). Yükleyici satırı
  (`js/app.js` → `_EKOKUMA_DOSYA_ADLARI` içine `"ekokuma_kolemen"`) da koordinatörde;
  **app.js'e DOKUNULMADI.**
- `denetim/EKO-KOLEMEN-0072.md` — bu rapor, kendi adımla commitlendi.
