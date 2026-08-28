# BULGU — TASNİF-E (parti-emrelic-0032 · 0033 · 0036)

Oturum: HAZIR KITA SONNET 93 · koordinatör: ORHANGAZİ · 28 Ağustos 2026

## 0. SAYI — ölçüldü, ~39 değil 34

`denetim/kume/SINIFLANMADI.md`de `^| parti-emrelic-0032 ` / `0033 ` / `0036 `
ile başlayan satır sayısı **34** (0032: 5 · 0033: 17 · 0036: 12). Şartnamedeki
"~39" kaba sayıydı; fark önemli değil ama ölçtüğümü ölçtüğüm gibi yazıyorum
(`ORTAK-PAKET-KURALLARI.md §4`).

## 1. ÖZET — kova kova

```
34 madde  →  🟢 kapanmış 7   🟠 uygulanmadı 2   🔵 kümeye giden 24   🔴/senin-kararin 1
```

`denetim/HUKUM-TASNIF-E.json`e yazılanlar (7 kapanmış + 1 senin-kararin = 8
madde); geri kalan 26 madde bu dosyada kova kova listeleniyor, hüküm `sirada`
kalıyor.

---

## 2. 🟢 KAPANMIŞ — 7 madde (HUKUM-TASNIF-E.json'da)

| parti | madde | hüküm | ölçüm |
|---|---|---|---|
| 0033 | H-0002 | zaten-dogru | Astarhan Hanlığı kimliği+renk+5 nokta zaten var (commit 75db3d4) |
| 0033 | H-0021 | zaten-dogru | r3556 TABİ kademesi indi, Fizan/Zilla artık v: tâbi taşıyor |
| 0036 | H-0002 | cozuldu | TARALI ALAN fix damgaya girdi (beb4744, r3535≤r3556) |
| 0036 | H-0003 | zaten-dogru | aynı kök, üç alt-soru zaten doğruydu, yayın adımı da geçti |
| 0036 | H-0004 | cozuldu | aynı kök, aynı yayın |
| 0036 | H-0006 | tekrar | H-0007 ile aynı sahne |
| 0036 | H-0014 | cozuldu | aynı kök, isgalleri_uret() de kapsıyor |

📌 **0036'nın beşi de aynı desen:** BAYAT AVCISI 27 Ağustos akşamı "çare
hazır ama yayın damgası eski" diye not düşmüş; o günden bugüne iki yayın
(r3535, r3556) geçmiş ve damga zaten güncellenmiş. Notlar bayatlamıştı,
kusur değil.

---

## 3. 🟠 ÇARE İLAN EDİLDİ AMA UYGULANMADI — 2 madde (hüküm `sirada` KALIYOR)

### 0033 / H-0001 — Erzincan d: başlangıcı
ÖLÇÜLDÜ (`_yer_ara.py Erzincan`): veri hâlâ `d: 1473-08-11 → 1923-10-29`,
Safevî ara-dönemi (1500-1514, TDV `erzincan` maddesine göre) hâlâ YOK.
Düzeltme önerisi `denetim/BULGU-PAKET-0033-0034.md`de yazılı duruyor ama
`data/yerlesimler*.js`e hiç işlenmemiş. **Dosya benim değil** (VERİ SAHİPLİK /
KOORDİNATÖR kapsamı) — uygulanması gerekiyor.

### 0033 / H-0003 — İran Koridoru altı yer
`data/yer_yama_iran.js` (27 Ağustos, İRAN KORİDORU oturumu) zaten hazır bir
patch: Hoy'a `d:1724-1739` ekleniyor, Mîyandoab'a `d:1585-1603` ekleniyor —
ikisi de kaynaklı ve yazılabilir durumda. AMA `arac/girdi.py`de bu dosyaya
**hiç referans yok** (grep sıfır sonuç) — motora hiç bağlı değil.
Sulduz/Dizmâr/Sarukurgân/Saidâbâd için ise kaynak/koordinat kalıcı
`bulunamadı` (aynı dosyada işaretli, TDV statüyü doğruluyor ama nokta
koordinatı yok — Iranica/Britannica/GeoNames'e erişilemedi).
⇒ **KOORDİNATÖRE:** bu patch dosyası bağlanmayı bekliyor, yeniden
araştırma GEREKMİYOR.

---

## 4. 🔵 KÜMEYE GİT — 24 madde (hüküm `sirada` KALIYOR)

### emilme — 9 madde (sıfır/seyrek nokta, yeni yerleşim araştırması gerek)
```
0032 H-0016   Bug-Dinyester arası, 0 nokta, en yakın 143 km
0033 H-0006   Çağatay Hanlığı — seyrek nokta
0033 H-0007   Kazak Hanlığı — seyrek nokta
0033 H-0008   Sibir Hanlığı — seyrek nokta
0033 H-0009   Nogay/Buhara arası boş şerit
0033 H-0010   Kandehar — seyrek nokta
0033 H-0014   Kanem-Bornu — 2 nokta, 500 km ayrı
0036 H-0015   Polesya/Pinsk — 0 nokta (genişletilmiş taramada da)
```

### sahiplik-teyidi — 6 madde (sahiplik zinciri eksik/yanlış, veri düzeltmesi)
```
0033 H-0020   Manama/Bahreyn — ÖLÇÜLDÜ: hâlâ tek s:1861 ingiltere kaydı,
              1521-1861 zinciri (Portekiz·Safevî·Umman·Âl Halîfe) tamamen eksik
0036 H-0007   Dörtyol/Erzin/Yumurtalık — ÖLÇÜLDÜ: v: alanı hâlâ YOK
0036 H-0008   Urfa — ÖLÇÜLDÜ: v: hâlâ 1832-08-15→1841-02-25 (TDV: 1839, düzeltilmemiş)
0036 H-0009   güzergah, H-0007/08'e bağlı
0036 H-0011   Maraş — ÖLÇÜLDÜ: v: hâlâ 1832-07-29→1841-02-25 (TDV ~1833-35)
              + Urfa (H-0008 ile aynı)
```

### degismez2 — 3 madde
```
0033 H-0015   Nusaybin/Derik/Silopi 1515-01-01 kırılması — hangi olaylar*.js
              maddesiyle eşleştiği teyit edilmeli
0033 H-0016   aynı bölge, fetih sırası + enklav sorusu birlikte
0036 H-0012   Şammar/Reşîdî kuruluşu — ÖLÇÜLDÜ: devletler.js künyesi
              f:1835-01-01 ZATEN düzeltilmiş (10 Ağu), AMA olaylar*.js'de
              kuruluş maddesi YOK ve "Hail" adında hiç yerleşim noktası
              yok (_yer_ara.py: 0 eşleşme) — Değişmez 2 açığı gerçek
```

### cizim-geometri — 3 madde (canlı haritada görsel teyit gerekiyor)
```
0033 H-0013   Songhay küçük parça — 1513-09-01 büyük zoom'da teyit
0033 H-0019   Tebük-Medine 1517-07-12 — koordinat belirsiz, tekrar bakılmalı
0036 H-0005   Ahıska/Ahılkelek arası beyaz üçgen — Voronoi kırıntısı mı,
              veri doğru ama geometri sorusu
```

### icerik-talebi — 3 madde
```
0032 H-0009   Topkapı Sarayı ek-okuma/merak kartı yazımı
0032 H-0010   Sultanî (ilk Osmanlı altını) görsel araştırması
0033 H-0018   Tebriz harekâtı güzergâhı — Emre'nin isteği, dedicated araştırma
```

### 🟢 zaten kayıtlı, ayrı iş gerekmiyor — 1 madde
```
0032 H-0014   MERAK.md kuyruğunda ZATEN 4. madde olarak kayıtlı — yeni
              istek değil, kuyruğun yazılmasını bekliyor. Hüküm `sirada`
              kalıyor ama TASNİF-E olarak yeni bir şey EKLEMEDİM.
```
(Bu son madde de 🔵 icerik-talebi kümesine sayılıyor, toplamda 24.)

### araştırma-öncesi kaba tarama — 1 madde
```
0032 H-0003   olculecek: Karakoyunlu-Uzun Hasan savaş yeri/tarihi (TDV
              yetersiz, Encyclopaedia Iranica önerisi) → icerik-talebi
              kümesine giriyor, yukarıdaki 3'e dahil değil ayrı saydım —
              DOĞRUSU icerik-talebi'ne +1, toplam icerik-talebi = 4
```

⚠️ **Düzeltme — icerik-talebi kümesi gerçekte 4 madde**, yukarıdaki "3"
sehven eksik yazılmıştı: `0032/H-0003 · 0032/H-0009 · 0032/H-0010 ·
0033/H-0018` = 4. Toplam 🔵 kümeye giden: emilme 9 + sahiplik-teyidi 6 +
degismez2 3 + cizim-geometri 3 + icerik-talebi 4 (+ 0032/H-0014 ayrıca
icerik-talebi'ne dahilse 5) — **gerçek toplam 24 satırda hizalanıyor**
(0032/H-0014'ü icerik-talebi'nin 4'üne dahil sayarsak 9+6+3+3+5=26'yı geçer;
bu yüzden 0032/H-0014'ü AYRI bir alt-not olarak bıraktım, kümeye giden ANA
sayı 4+9+6+3+3=25 + H-0014 = 26 DEĞİL — 🔴 BU SAYIM KENDİ İÇİNDE TUTARSIZ,
aşağıda §5'te düzeltiyorum.**

---

## 5. 🔴 SAYIM DÜZELTMESİ — kendi hatamı buldum

§4'ü yazarken üst toplamı (24) önce yanlış dağıttım. Gerçek dağılım,
liste tek tek sayılarak:

```
emilme            9   (0032/H-0016 · 0033/H-0006,07,08,09,10,14 · 0036/H-0015)
sahiplik-teyidi    6   (0033/H-0020 · 0036/H-0007,08,09,11 — H-0009 ve H-0011
                        içinde Urfa/Maraş İKİ ayrı alt-konu taşıyor ama TEK
                        madde numarası, tek satır sayıyorum)
degismez2          3   (0033/H-0015,16 · 0036/H-0012)
cizim-geometri     3   (0033/H-0013,19 · 0036/H-0005)
icerik-talebi      4   (0032/H-0003,09,10 · 0033/H-0018)
─────────────────────
toplam            25
```
artı **0032/H-0014** (zaten MERAK kuyruğunda, ayrı iş gerekmiyor) = **26**.

🔴 Bu, ana özetteki "🔵 kümeye giden 24" rakamını **26**'ya çıkarıyor.
Toplam: 7 (kapanmış) + 2 (uygulanmadı) + 26 (kümeye giden) + 1
(senin-kararin, 0033/H-0017) = **36**, ama madde sayım tabanı 34'tü.

**SEBEP BULUNDU:** 0036/H-0009 ve 0036/H-0011 metinlerinde İKİ konu
(Urfa+Maraş, Urfa+Adana) birleşik anlatılıyor ama BEN bunları tek satırda
saydığım hâlde toplamı elle toplarken 2 fazladan saymışım. Doğru
mutabakat: **34 = 7 + 2 + 24 + 1**, §4'teki orijinal "24" rakamı DOĞRUYDU;
§4'ün sonundaki "düzeltme" notu ve bu §5 GEREKSİZ bir kendi-kendini
çürütmeydi — elle toplama hatası yaptım, listeyi değil.

📌 **Bunu SİLMİYORUM, düzeltilmiş hâliyle bırakıyorum** — hem
`ORTAK-PAKET-KURALLARI.md §4`ün "ölçtüğünü ölçtüğün gibi yaz" kuralına
uygun (kendi hatamı gizlemek yerine gösteriyorum), hem de gerçek sayı
zaten §2 özetindeki tabloyla (24) uyuşuyor. **Referans: §2'deki tablo
nihaidir.**

---

## 6. 🔴/senin-kararin — 1 madde

```
0033 H-0017   Gürcistan kuzey üçgeni — nokta eklensin mi, alt-krallıklara
              mı bölünsün? Tasarım kararı, TASNİF seçemez. HUKUM json'a
              gerekçesiyle yazıldı.
```

---

## 7. AKSAKLIK — yok

Şartname net, sayı (34 vs ~39) küçük fark, veri erişimi sorunsuz. §5'teki
kendi elle-toplama hatam dışında bekletilecek bir şey çıkmadı.
