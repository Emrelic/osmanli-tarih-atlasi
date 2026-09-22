# HARITA-0076 — "bozuk harita" kümesi · 20 madde

| alan | değer |
|---|---|
| **AD** | `HARITA-0076` |
| **MODEL** | Opus 5 (efor high) — teşhis işi, kendi çıktısını sorgulaması gerekir (`M3`) |
| **DİZİN** | `C:\atlas` — 🔴 eski yol (`Desktop\TARİH COĞRAFYA SİTESİ`) **boş kabuktur**, oraya düşersen hata almazsın, sessizce boşlukta çalışırsın |
| **KOORDİNATÖR** | `YILDIRIM BAYEZIT` (tahta anahtarı — TAM böyle yaz) |
| **ClaudEmre** | HAYIR — sen işçisin, `/claudemre-basla` çağırma |

---

## 1. NİÇİN SEN VARSIN — ve niçin bu küme ÖNCE

Paket `parti-emrelic-0076` 164 madde getirdi. Senin kümen **20 madde** ve
tespihin **1. sırasında**, çünkü bir **darboğaz şüphesi** var:

🔴 **ÖNGÖRÜ (ölçümden ÖNCE yazıldı — `CLAUDE.md §11`):**
> Bu 20 maddenin çoğu **AYNI TEK KUSURUN** farklı tarihlerdeki yüzüdür.
> Dayanağım Emre'nin kendi cümlesi, H-0096: *"BU BOZUK HARİTA GÖSTERİMİ
> HATASI HALA BU SENE OLMUŞ DEVAMEDİYOR"* — yani o, aynı şeyi tekrar tekrar
> gördüğünü söylüyor.
> **Sınav:** kök sebep sayısı ≤ 5 ise öngörü DOĞRU, > 10 ise ÇÜRÜK.
> **Çürürse yaz** — çürüyen öngörü de bir ölçümdür, kimse seni suçlamaz.

Öngörü tutarsa 20 madde birkaç düzeltmeyle kapanır ve bu, %94 dolu bir
bütçede en yüksek getirili iştir. Tutmazsa da sınıflandırma kalır.

## 2. MADDELERİN
```
H-0022 H-0023 H-0038 H-0064 H-0065 H-0068 H-0069 H-0071 H-0072 H-0073
H-0075 H-0093 H-0095 H-0096 H-0121 H-0136 H-0139 H-0147 H-0148 H-0149
```
Kaynak: `C:\claudemre\kutu\giden\parti-emrelic-0076\PARTI.md`
(her maddenin gövdesi + varsa görsel atfı orada).

## 3. DOSYA SAHİPLİĞİ — neye yazabilirsin

```
✅ SENİN      denetim/HARITA-0076*.md · denetim/HARITA-0076*.py  (rapor + aletlerin)
✅ SENİN      C:\claudemre\kutu\giden\parti-emrelic-0076\CEVAP.json  ← YALNIZ kendi maddelerin
🔴 YASAK      arac/*  — HİÇBİR SATIR. Sebebi oturumlar/CEPHANE.md ④:
              artımlı motorun önbelleği arac/ dosyalarının özetiyle
              anahtarlanır; tek satır değişirse önbellek TAMAMEN çöp olur
              ve koşu 23 dakikadan tam inşaya döner. Alet yazacaksan
              denetim/ altına yaz.
🔴 YASAK      data/* · js/* · index.html — düzeltmeyi SEN uygulamazsın,
              yamayı denetim/ altına hazırlarsın, koordinatör uygular
              (bu gece data/ tek elden gidecek, çakışma bütçe yakar)
```

## 4. YÖNTEM — sırası bağlayıcı

**① ÖNCE SINIFLANDIR, SONRA DÜZELT.** (`CLAUDE.md §3.5`) İlk iş 20 maddeyi
kök sebebe göre kovalara ayırmak. Erken düzeltme, yanlış kovaya düşen
maddeyi iki kez yaptırır.

**② Kök sebep adaylarını ÖLÇEREK ele.** Bilinen sınıflar:
```
a) NOKTASIZLIK   o bölgede yerleşim yok → en yakın peteğe emiliyor
                 (CLAUDE.md §2 — "harita yanlış" raporunda İLK soru budur)
b) GÖVDE ÇAKIŞMASI  donemler.js + devletler_harita.js gövdeleri üst üste
                 🔴 kd: BUNU DÜZELTMEZ, motor kd:'yi OKUMAZ (§3)
c) RENK/OPAKLIK  "deniz rengi görünüyor" · "çok silik" — kusur veride değil
                 okunabilirlikte olabilir (21 Eylül'de bir kez tam bu çıktı:
                 "açık yeşil boş arazi" sahipsiz değil RUSYA'ydı)
d) KÜNYE PENCERESİ  devlet ölmüş/doğmamış → §3.5 üç sınıf, çareleri TERS
e) GERÇEK GEOMETRİ KUSURU  karesel/sivri artık — maskeden ya da kesimden
```
**③ Her hüküm bir SAYI taşır.** "Bozuk görünüyor" bir ölçüm değildir.
Piksel rengi, sahipsiz hücre sayısı, km², nokta sayısı — biri.

**④ `bulunamadı` bir sonuçtur.** Ölçemediğini `ölçülemedi` yaz, "temiz" yazma.

**⑤ Ters yön sınavı** (`§3.5` · `D206`): bir sınır kayması önerirsen **iki
ucu da** ölç — düzeltme hatayı öbür tarafa taşıyabilir.

## 5. TESLİM BİÇİMİ

```
denetim/HARITA-0076.md          teşhis raporu: madde → kök sebep kovası → sayı
denetim/HARITA-0076-YAMA-*.js   uygulanmaya hazır yamalar (koordinatör uygular)
CEVAP.json                      her maddeye hüküm — sözlük CLAUDE.md'de değil,
                                C:\claudemre\kutu\asama.py HUKUMLER tablosunda
```
🔴 Hüküm gerekçesizse `tahta.py` değil **ben** reddederim: `gerek-yok` ·
`senin-kararin` · `vazgecildi` · `yapilamaz` · `cozulemedi` · `kapsam-disi`
**gerekçesiz yazılamaz.**

## 6. BÜTÇE — bu gece olağan değil

**Haftalık limit %94 DOLU, reset Perşembe 00:00 (22 saat).** Emre'nin emri
*"maksimum tasarruf"*. Bu sana üç şey söyler:
```
① GEREKSİZ TUR YAKMA   ekrana durum yazma, "bakıyorum" deme, ara rapor verme
② TEK TESLİM           bitince TEK tahta mesajı (satır satır mesaj YASAK)
③ ÖNCE UCUZ OLANI      aynı kovaya düşen maddeleri BİRLİKTE kapat
```

## 7. HABERLEŞME PROTOKOLÜ — aynen uy

- **① Kanal = TAHTA.** `py arac/tahta.py yaz --kim "HARITA-0076" --kime "YILDIRIM BAYEZIT" --mesaj "…"`
  Koordinatörün ekranına `send_message` YAZILMAZ. Ekrana yazılan rapor bana ulaşmaz.
  🔴 Mesajda backtick/Türkçe/kaçış varsa: metni `Write` ile dosyaya yaz, bash
  o dosyaya HİÇ dokunmasın, `--mesaj-dosya <yol>` ile ver.
- **② Ne zaman:** soru gelince HEMEN · **aksaklık BEKLEMEZ** · bitince teslim.
- **③ Yatay mesaj serbest**, tahtadan (`--kime "<ÖTEKİ>"`); atama/öncelik/kaynak
  hükmü ve yetki gerektiren her şey bana.
- **④ Üçlü kural:** ① ne ölçtüm (sayıyla) ② ne bulamadım (`bulunamadı` bir
  sonuçtur) ③ ne istiyorum (seçenekliyse önerinle).
- **⑤ Commit teslim değildir; teslim mesajdır.** Kritik mesajı
  `oturumlar/tahta.json`dan GERİ OKU.
- **⑥ Aksaklık beklemez:** başka oturumun dosyası gerekiyor · kaynaklar
  çelişiyor · şartname yanlış · sayı beklenenden çok farklı · kalem yetkini
  aşıyor · iş çok uzayacak → **hemen yaz.**
- **⑦ Bekçi:** Bash `run_in_background` ile
  `py arac/tahta_bekci.py --kim "HARITA-0076" --cik`
  Çıkınca mesajı işle, aynı komutla **SESSİZCE** yeniden kur. "Bekliyorum"
  YAZILMAZ. Boş uyandıysan **ekrana hiçbir şey yazma.**
- **⑧ Commit:** kendi ürettiklerini adıyla, **pathspec ile**
  (`git add -- <adlar>` · `git commit -F <mesaj-dosyası> -- <aynı adlar>`);
  `git add -A` ve dizin pathspec'i **YASAK**. Push bende.
- **⑨ İş bitince** teslim mesajını yaz, **bekçini kendin öldür** (TaskStop), dur.
