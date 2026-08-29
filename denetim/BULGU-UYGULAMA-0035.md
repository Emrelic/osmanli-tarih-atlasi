# BULGU — UYGULAMA-0035 (28-29 Ağustos 2026)

## 🔴 EK TUR (29 Ağustos) — 15 yeni madde, SINIFLANMADI.md dışındaki küme
dosyalarında (`sahiplik-teyidi.md` 32 · `koridor-agi.md` 3 · `icerik-talebi.md` 1,
toplam 36 satır, 20'si SINIFLANMADI'daki 38'le mükerrer CEVAP.json kaydı,
15'i yeni). **Toplam artık 53/53.**

**✅ İkinci gerçek veri düzeltmesi — H-0060 MERSİN (üç bağımsız ölçümle
doğrulandı, güven yüksek):** Mersin'in `d:` dizisi 1352-01-01'de
başlıyordu — 164 yıl erken (Orhan Gazi döneminde Osmanlı Mersin'e hiç
ulaşmamıştı). Komşuları Tarsus/Adana'nın deseninde olması gereken
`ramazanoglu` ara dönemi (1352→1516-08-24 Mercidabık) eksikti, muhtemelen
kopyala-yapıştır hatası. `data/yer_yama_p35.js`'e GERÇEK KAYIT olarak
yazıldı; `py arac/_yer_ara.py "Mersin"` ile önce/sonra doğrulandı.
Bu, pkg 0031/H-0007'nin bağımsız bulduğu AYNI kusur — üç ayrı oturumdan
üç ayrı doğrulama.

**Diğer 13'ün özeti:** çoğu `zaten-dogru` (veri zaten tutarlı, kullanıcının
şikâyeti başka bir katmana — görsel/render/kamera artefaktı/kronoloji
metni — işaret ediyordu) ya da `sirada`/`tekrar` (başka dosyaya/oturuma
bağlı). Öne çıkanlar:
- **H-0048** — Doğubayazıt'ın `d:1514-1923` "kalıcılık" iddiası şüpheli,
  47 km yakınındaki Çaldıran aynı gün Safevî'ye dönüp 1639'a kadar öyle
  kalıyor; iki komşu nokta çelişiyor (H-0057/madde-1 ile çapraz doğrulandı).
- **H-0051** — `gerek-yok`: iki şikâyet de "Pasif kip" kamera artefaktı,
  veri/motor hatası değil.
- **H-0067** — `senin-kararin`: Taiz'in verisi doğru, soru saf gösterim
  tercihi (küçük toprak kayıplarına görsel vurgu eklensin mi).

---

# ASIL RAPOR — 28 Ağustos, ilk 38 madde

Kapsam: `denetim/kume/SINIFLANMADI.md` içindeki `parti-emrelic-0035` satırları.
🔴 ÖLÇÜM: 52 değil **38** satır bulundu (koordinatörün tahmini kaba çıktı,
diğer 14 muhtemelen `sahiplik-teyidi.md`/`koridor-agi.md` gibi başka küme
dosyalarında ve VERİ SAHİPLİK'in aktif kapsamında — çakışmamak için
dokunulmadı). Tam not metinleri `kutu/giden/parti-emrelic-0035/CEVAP.json`
doğrudan okunarak alındı (SINIFLANMADI.md'deki özetler kısaltılmıştı).

## SAYIYLA: 38 madde işlendi

```
3    cozuldu — zaten yazılı/düzeltilmiş (çapraz doğrulandı, iş yok)
1    cozuldu — bu turda yazıldı (data/yer_yama_p35.js)
9    tekrar — başka bir kayıtta/dosyada zaten kapanmış
12   olculecek — NE ölçülecek açık, bu tur içinde tamamlanamadı
13   sirada — başka dosyaya/oturuma bağlı, NİÇİN açık
```

---

## ✅ ÇAPRAZ DOĞRULAMA İLE "COZULDU" ÇIKAN 3 MADDE

Bu üçü de bu oturumun **önceki** hâlinde (KRONOLOJİ İÇERİK) araştırılıp
taslak yazılmıştı; `py arac/_yer_ara.py` ile bugün tekrar sorgulanınca
zaten diskte olduğu doğrulandı — DENETİM AÇIK'ın `olaylar_ek17.js`
birleştirmesinden sağlam çıkmışlar:

- **H-0002** — Anabolu (Nauplion) 1686-08-30 kaybı → `data/olaylar_ek17.js`
- **H-0028** — Semendire 1738-08-01 geri alınışı → `data/olaylar_ek17.js`
- **H-0071** — Munkács (Mukacheve) — hem veri (`s:1688-01-17→avusturya`)
  hem madde (`t:"1688-01-17"`) zaten düzeltilmiş; not'un şüphelendiği
  1687-12-17→1688-01-17 tarih düzeltmesi ÇOKTAN uygulanmış.

## ✅ BU TURDA YAZILAN 1 VERİ DÜZELTMESİ — `data/yer_yama_p35.js`

**H-0005** — Çaçak, Kragujevac, Yagodina'nın üçü de 1459-1717 arasını
kesintisiz Osmanlı gösteriyordu; `py arac/_yer_ara.py` ile doğrulandı,
1689-1690 Avusturya dönemi (Habsburg'un Belgrad sonrası ilerleyişi, Fazıl
Mustafa Köprülü'nün 1690 geri alınışı) hiç yoktu. Üçüne de eklendi.
⚠️ Kesin gün TDV'de şehre özel bulunamadı — tarih, veride ZATEN kayıtlı
komşu "Niş ve Vidin'in kaybı" (1689-09-24) / "geri alındı" (1690-09-09)
maddeleriyle hizalandı (aynı sefer/aynı taarruz). Bu bir **çıkarımdır**,
`kaynak:` alanına açıkça öyle yazıldı, gizlenmedi.

## 🔁 TEKRAR — 9 madde, başka yerde zaten kapanmış

H-0001/H-0064 (Sahra nokta yoğunluğu ailesi) · H-0021 (`yer_yama_iran.js`)
· H-0057 (kısmen, 5 alt-madde `BULGU-BAYAT-TARAMA.md`+`yer_yama_iran.js`'de)
· H-0068 (`BULGU-BAYAT-TARAMA.md` grup-H) · H-0074 (muhtemel, Ferhad Paşa
ailesi) · H-0078 (→H-0028'de kapanıyor) · H-0083 (→H-0037) · H-0084
(→H-0038, zaten-doğru).

## 🟡 OLCULECEK — 12 madde, açıkça NE ölçülecek yazılı

H-0020 (Şirvan enklav geometrisi, Oturum 2) · H-0035 (Hotin, Değişmez 7
enklav sınıfı) · H-0037 (Fâv, akademik kaynak) · H-0052 (görsel açılmadı)
· H-0053 (Kusayr/Süveyş, ikinci kaynak) · H-0069 (Amâre yazımı + tarih)
· H-0070 (Solnok, TARALI ALAN KÖK düzeltmesinin etkisi test edilmeli)
· H-0077 (1737/1788 Rus güzergâhı) · H-0079 (**Diriyye — YENİ NOKTA
önerisi**, aşağıda ayrıntılı) · H-0080 (→H-0035 ile birleşti + güzergâh)
· H-0076 (Derbend'in TARALI ALAN'a yanlış dahli, + Gümrü/Çaldıran/Başkale
kontrolü Bash kesintisi yüzünden yarım kaldı).

### 🔴 H-0079 — Diriyye, gerçek nokta eksikliği (koordinatöre devredildi)
İlk Suûdî Devleti'nin GERÇEK başkenti (1744-1818, İbrâhim Paşa'nın 1818'de
yıktığı) Diriyye, ayrı bir yerleşim kaydı olarak **hiç yok** — Riyad
kendisi ancak 1824'ten sonra (İkinci Suûdî Devleti) başkent oluyor. Kaba
koordinat önerisi: **~24.7343K/46.5721D** (bugünkü Ed-Dir'iye, Riyad'ın
~20 km kuzeybatısı — 3 km kuralına göre güvenli mesafe), dönem tahmini
`s:1744-01-01→1818-09-09 (suud)`. **Yazılmadı** — kayıt hiç yoktu, iki
sınavın birincisi (`py arac/_yer_ara.py "Diriyye"` → 0 eşleşme) "yeni
nokta" dedi, `yer_yama`ya girmez. Kesin gün için TDV/akademik kaynak
(örn. Encyclopaedia of Islam² "al-Dir'iyya") gerekiyor, tarih uydurulmadı.

## 🔵 SIRADA — 13 madde, başka dosyaya/oturuma bağlı

**MOTOR (benim kapsamım dışı):** H-0047, H-0072, H-0101, H-0102 (emilme
mekanizması + T-junction/Chaikin dikişi — hepsi `arac/uret_petek.py`).
**Dosya benim değil:** H-0013 (Taygan, yeni nokta) · H-0015 (`olaylar_ek13.js`
editoryal not) · H-0059 (`olaylar_ek.js:45` metin) · H-0081/H-0094/H-0095/H-0098
(`data/savaslar.js` kayıtları — dördü **AYNI ÇARE**, tek partide kapatılabilir).
**Konum belirsiz:** H-0062, H-0065 (hangi madde kastediliyor netleşmedi,
bu turda bulunamadı). **Kapsamı çok geniş:** H-0090 (tüm savaş başlangıçları
— ayrı faz, `0031-0032/H-0013` "TÜM MADDELERE" ile aynı sınıf).

---

## Ölçmedim / açıkça işaretlendi

- H-0062/H-0065'in hangi kronoloji maddesine ait olduğu bulunamadı.
- H-0069/H-0076'da Bash altyapı kesintisi yüzünden Gümrü/Çaldıran/Başkale
  ve Amâre kontrolü tamamlanamadı.
- H-0079'un kesin kuruluş/yıkım günleri TDV/akademik kaynaktan doğrulanmadı.

## `yer_yama_p35.js` ve `olaylar_ek19.js` (henüz boş — bu turda yeni madde
gerektiren, veri kaydı hazır olan bir kalem çıkmadı; üç aday zaten
`olaylar_ek17.js`'te çözülmüş çıktı).

Koşu 2 sürüyor — bu iki dosyaya yazmak güvenli ama bu koşuya girmiyor,
bir sonraki tura kalıyor.
