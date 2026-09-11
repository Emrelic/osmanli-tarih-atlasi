# BULGU — YABANCI SENKRON — Değişmez 2s'nin 104 AÇIK kırılması

Oturum: **YABANCI SENKRON** · Tarih: 2026-09-11 · Koordinatör: 1.MURAT
Koşu 9 canlı — `data/*.js` ve `arac/*.py` **hiç yazılmadı**, yalnız okundu/import edildi.

## ① ÖLÇÜM — tabloya güvenmedim, kendim saydım

```bash
py arac/denetle.py          # ✓ 1327 YABANCI kırılması · 104 AÇIK (tavan 121) · 364 KAPSAM DIŞI
py arac/denetle.py --ayrinti   # tam liste (104 satır) çıktıyı `denetim/`e KAYDETMEDİM, geçici dosyaya aldım
```

Ayrıca `arac/denetle.py`nin **kendi fonksiyonlarını import ederek** (`yerlesimleri_yukle`,
`olaylari_yukle`, `degismez2`, `kapsam_disi`) bağımsız bir öz-doğrulama yaptım — **kendi
ayrıştırıcımı YAZMADIM** (D023: "kendi yazdığın ayrıştırıcı var olandan her zaman kötüdür").

**Sonuç:** `acik_s = 104`, `disi_s = 364` — CLI çıktısıyla **birebir eşleşiyor.**

| | §1.5 tablosu | bugünkü ölçüm |
|---|---|---|
| YABANCI kırılma | 1319 | **1327** |
| AÇIK (tavan 121) | **104** | **104** ✓ birebir |
| KAPSAM DIŞI | 363 | **364** |

⇒ **AÇIK sayısında (104) tablo BAYAT DEĞİL.** Toplam/kapsam-dışı sayılarındaki küçük
fark (1319→1327, 363→364) veri büyümesinden geliyor — 8 yeni `s:` kırılması eklenmiş
ve bunlardan 1 tanesi kapsam dışına düşmüş, 104'ü etkilememiş. Bu bir **bilgi** notu,
ihlal değil.

## ② SINIFLANDIRMA

### Devlet dağılımı (104 kayıt — bir kayıtta birden fazla devlet olabilir, aynı-gün
kovası farklı kıtaları karıştırdığı için, bkz. aşağıdaki bulgu)

```
rusya 14 · ingiltere 10 · bizans 5 · sokoto 5 · fransa-cumhuriyet 5 · ilhanli 4 ·
altinorda 3 · safevi 3 · hive 3 · yeni-ispanya 3 · (kalan ~30 devlet 1-2'şer kayıtta)
```

### Yüzyıl dağılımı

```
13. yy  1   14. yy 19   15. yy  5   16. yy 18   17. yy  7
18. yy 13   19. yy 28   20. yy 13
```

19. yüzyıl en yoğun (sömürge Afrika'sı + Rusya'nın Orta Asya/Kafkasya ilerleyişi),
14. yüzyıl ikinci (erken Anadolu beylikleri/Bizans — Osmanlı çekirdeğine EN YAKIN).

### Kaba bölge dağılımı (lat/lon'dan türetilmiş yardımcı kova, `m:` KULLANILMADI —
§3'ün "m: siyasi, coğrafi değil" uyarısı gereği)

```
Afrika 41 (%39,4) · diğer 12 · Anadolu 11 · Balkanlar 8 · Arabistan/Körfez 8 ·
Kafkasya/Karadeniz-kuzeyi 7 · Rusya/Sibirya/Orta Asya 6 · Orta/Kuzey Avrupa 5 ·
Amerika 5 · Güney/Doğu Asya+Okyanusya 1
```

**D153 kontrolü** (evrenin yarısından çoğu tek üyede mi?): **HAYIR.** En büyük tek
devlet kümesi `rusya` 14/104 = %13,5 — çoğunluk bir tek kayıtta toplanmıyor. Ama
**bölge** bazında `Afrika` kovası %39,4 ile baskın; bu TEK bir şişkin kayıttan değil,
onlarca FARKLI küçük Afrika devletinin (`sokoto`, `darul-kuti`, `massina`,
`benihalid`, `kaffa`, `nogay-adjacent`…) dağınık birikmesinden geliyor — **gerçek
bir coğrafi yoğunluk, ölçüm artefaktı değil** (kontrol ettim).

## 🔴 ÖNEMLİ BULGU 1 — AYNI-GÜN KOVASI FARKLI KITALARI KARIŞTIRIYOR

`degismez2()` kırılmaları **takvim gününe** göre gruplayıp `kir[d]["ad"]` setine
topluyor. Birçok `s:` dönemi yıl-hassasiyetli (`YYYY-01-01` dolgu günü) olduğundan,
**aynı takvim gününe denk gelen tamamen alakasız, farklı kıtalardaki devir olayları
TEK kırılma kaydında birleşiyor.** Örnek — `1631-01-01`:

```
Bratsk ostrogu (Sibirya/Rusya) · Saint John (NB, Kanada) ·
San José del Parral (Meksika/İspanya) · … — DÖRDÜ DE AYNI KAYITTA
```

Bu, `§CLAUDE.md`'nin kendi kuralının (gün yoksa `YYYY-01-01`) beklenen bir yan
etkisi — kusur değil. Ama **madde yazarken önemli**: bir kırılma kaydının içindeki
yerler AYRI olaylar olabilir; tek bir kronoloji maddesi dört kıtayı birden
"açıklayamaz". Aday hazırlarken her yer kendi devletine göre AYRIŞTIRILDI (bkz.
`HAZIRLIK-2S-0911.json`).

## 🔴🔴 ÖNEMLİ BULGU 2 — `1378-01-01 Diyarbakır (artuklu, kayıp)` muhtemelen VERİ
HATASI, yazılacak GERÇEK OLAY değil

Bu kayıt zaten **CLAUDE.md §3.5.-1**'de doğrulanmış bir vaka olarak duruyor: TDV
`diyarbakir` maddesi Amid'in Artuklulardan çıkışını 1303 (Gazan Han → Mardin
Artuklu), ardından 1343 Sutayoğulları → 1353 Celâyirli → 1394 Timur → 1401
Karayülük → 1507 Safevî → 1515-09-10 Osmanlı sırasıyla veriyor.
`yerlesimler.js`'teki `artuklu 1281→1378` **"YANLIŞ TARİH + EKSİK ZİNCİR"** olarak
zaten kayıtlı (üç kimliği yutuyor).

⇒ **Bu kırılma için kronoloji maddesi YAZMAK yanlış olur** — asıl gereken
`yerlesimler.js`'teki `s:` zincirinin düzeltilmesi. Düzeltme benim yetkimde değil
(§7: veri sahibi Oturum 0 / Yerleşim araştırma; koşu 9 canlı, `data/` donuk).
**Bunu düzeltme olarak YAZMADIM, yalnız işaretledim.**

📌 Genel ders: 104'ün TAMAMI "eksik madde" değil — bir kısmı muhtemelen **zaten
bilinen veri hatası**. Madde yazımına geçmeden önce her kayıt CLAUDE.md'nin bilinen
vaka listesiyle (§3.5, §3.5.-1) çapraz kontrol edilmeli. Ben yalnız bu BİR vakayı
buldum; sistematik bir tarama yapmadım (zaman kalmadı) — bu bir **borç** olarak
kalıyor, "ölçülemedi" diye açıkça yazıyorum.

## ③ EN BÜYÜK KÜME İÇİN MADDE ADAYLARI — kısmi teslim, sayıyla

**104 kaydın tamamı için kaynaklı madde yazımı bu oturumun kapsamını aştı** — her
kayıt ayrı TDV/akademik araştırma gerektiriyor ve bu, çok oturumlu bir iş.
**1 aday** tam kaynaklı hazırlandı (aşağıda + JSON'da), **103'ü** sınıflandırıldı
ama araştırılmadı ("arastirma-bekliyor" damgalı).

### Öncelik önerim: 14. yüzyıl Anadolu/Balkan kümesi (19 kayıt) — "en büyük" değil
ama EN DEĞERLİ

`rusya` (14) sayıca en büyük tek devlet kümesi, ama TDV bu alanda **zayıf**
(doğrulandı: TDV `rusya` maddesi Sibirya'nın 1582'de başladığını, 1639'da Pasifik'e
ulaştığını veriyor ama Ufa/Tsaritsyn/Saratov/Perm/Yekaterinburg gibi kale-şehir
kuruluşlarından HİÇ bahsetmiyor) — akademik kaynağa gitmek gerekiyor ve bu oturumda
**erişim sorunu çıktı**: Britannica `WebFetch` ile `403 Forbidden` verdi, `WebSearch`
yalnız SENTEZ (yapay zekâ üretimi) özet döndürüyor — **alıntılanabilir birincil metin
değil**, `§4`'ün "yapay zekâ üretimi metin KULLANILMAZ" kırmızı çizgisine takılıyor.
Bu bir **AKSAKLIK** — bekletmeden bildiriyorum (§7.1⑥).

14. yüzyıl Anadolu/Balkan kümesi tercih edilmeli çünkü: (a) Osmanlı çekirdeğine
coğrafi/zamansal olarak EN YAKIN, (b) TDV kapsaması bu bölgede ölçülmüş olarak
%100'e yakın (§4 tablosu), (c) kullanıcının şikâyet ettiği hata sınıfı (harita/
kronoloji senkronsuzluğu, §2) en çok BURADA görünür oluyor.

### Hazır aday — Sinop, 1322 (Pervâneoğulları → Candaroğulları)

```
gün (öneri):    1322-01-01  (TDV yalnız hicri/miladi yıl veriyor, gün yok)
tip:            kayıp (pervane) — kazanç tarafı yerlesimler.js'te ayrı yazılmalı
yer:            Sinop
kişiler:        Gazi Çelebi · (kızı, "Hatunili" ara-dönemi 1322-1324) · Süleyman Paşa (Candaroğlu)
kaynak slug:    sinop  (TDV, https://islamansiklopedisi.org.tr/sinop)
```

**Alıntı (TDV 'Sinop' maddesi):**
> "Gazi Çelebi ölünce kızı bir ara yöreyi yönettiyse de (724/1324; bu yüzden
> Sinop'a Hatunili denilmiştir) Sinop, Kastamonu Candaroğlu beyi Süleyman Paşa
> tarafından ele geçirildi."

**Önerilen gövde (2-4 cümle):**
> Pervâneoğulları Beyliği'nin son hükümdarı Gazi Çelebi'nin 722'de (1322) ölümüyle
> Sinop'ta kısa bir süre kızı hüküm sürdü (724/1324; bu yüzden şehre bir ara
> "Hatunili" de denildi). Ardından Kastamonu Candaroğlu beyi Süleyman Paşa şehri ele
> geçirdi ve Sinop'u Candaroğulları (İsfendiyaroğulları) hakimiyetine kattı;
> Pervâneoğulları'nın 1277'den beri süren Sinop hakimiyeti böylece sona erdi.

⚠️ **Not — bu bir tam çözüm değil, bir ARA-DÖNEM sorunu doğuruyor:** TDV, Gazi
Çelebi'nin ölümü (1322) ile Candaroğlu fethinin (1324) arasına 2 yıllık bir
"Hatunili" ara-dönemi koyuyor. `yerlesimler.js`'teki mevcut tek dönem sınırı
(`pervane` → doğrudan bir sonraki devlet, 1322'de) bu ara-dönemi YOK sayıyor. İçerik
oturumu ya (a) 1322'yi "Gazi Çelebi'nin ölümü" olarak yazıp gerçek Candaroğlu
devrini (1324) ayrı bir `s:` dönemi olarak EKLEMELİ, ya da (b) tek dönemi koruyup
maddeyi 1324 fiilî devrine göre YAZMALI — ikisi de veri değişikliği gerektiriyor,
**karar içerik/veri sahibi oturuma ait**, ben yalnız adayı hazırladım.

Kalan 18 kayıt (14. yüzyıl) + diğer 85 kayıt: `denetim/HAZIRLIK-2S-0911.json`
içinde `devlet`/`yüzyıl`/`bölge`/`en_yakın_mevcut_madde` alanlarıyla sınıflandırılmış
durumda, `durum:"arastirma-bekliyor"` damgalı.

## ④ 364 KAPSAM DIŞI — muafiyet meşru mu?

`kapsam_disi()` fonksiyonunu okudum ve sınır-durumu testi yaptım (esiğe en yakın 15
kayıt, 2067-2199 km aralığı — hepsi kontrol edildi).

**🟢 Muafiyetin YÖNÜ doğru:** ölçülemeyen kayıtlar (Fetret dönemi vb., `kure` boş
dönerse) kod `ici.append(kayit)  # olculemedi ⇒ borc sayilir (muhafazakar)` diyerek
**AÇIK tarafına** düşüyor, TEMİZ sayılmıyor. Bu, `D015`'in uyardığı "ölçemediğini
temiz sayan süzgeç" hatasına DÜŞMÜYOR — doğru yönde tasarlanmış.

**🟢 Sınır-durumu örneklemi (15 kayıt) makul:** en yakın kayıtlar bile (İbadan,
Mbarara/Nkore, Taşkent, Pelım ostrogu…) gerçekten uzak yerler — yanlış "kapsam dışı"
verdiği somut bir vaka BULAMADIM.

**🟡 Ama bir kod-yolu riski tespit ettim, somut vaka ÖLÇMEDİM:** `degismez2()`
`kir[d]["ad"]`'ı `sorted(...)[:4]`'e kırpıyor, `kapsam_disi()` mesafeyi bu KIRPILMIŞ
4 isim üzerinden hesaplıyor. Bir kırılma gününde 4'ten fazla yer varsa, kırpılıp
ATILAN isimlerden biri Osmanlı küresine daha yakın olabilir ve o durumda kayıt
YANLIŞLIKLA "kapsam dışı" sayılabilir. Bu bir **hipotez** (D149 türünden: "süzgeç
görünür eler, izdüşüm sessiz kırpar") — **"ölçülemedi" diye açıkça yazıyorum**,
somut bir yanlış sınıflama kanıtlamadım, yalnız riski işaretliyorum.

## Öz-değerlendirme — üç ayrı damga (D107)

- **ÖLÇÜLDÜ:** 104 AÇIK (tablo ile birebir), devlet/yüzyıl/bölge dağılımı, 364
  KAPSAM DIŞI'nin sınır-durumu (15 kayıt), aynı-gün kovası mekanizması.
- **BULUNAMADI:** Rusya kümesi için alıntılanabilir birincil akademik kaynak (bu
  oturumda, mevcut araçlarla) — AKSAKLIK olarak bildirildi.
- **ÖLÇÜLEMEDİ:** 104'ün tamamının CLAUDE.md'nin bilinen vaka listesiyle çapraz
  taranması (yalnız Diyarbakır 1378 örneği bulundu, sistematik tarama yapılmadı);
  kapsam-dışı 4-isim-kırpma riskinin somut bir vakada gerçekleşip gerçekleşmediği.

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
