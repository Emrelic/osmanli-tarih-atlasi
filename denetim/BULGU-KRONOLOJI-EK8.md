# BULGU — KRONOLOJİ EK8 (27 Ağustos 2026)

Kapsam: 284 açık madde (`hukum` ∈ {sirada, olculecek}, 40 `CEVAP.json`
dosyasının tamamı — sayı ORHANGAZİ'nin ölçtüğüyle birebir doğrulandı).
4 paralel ajanla 71'er maddelik dört parçaya bölünüp taranmıştır. Yöntem:
her madde önce dört kovadan birine sınıflandı (KRONOLOJİ / İÇERİK / DİĞER),
KRONOLOJİ adayları "hâlâ geçerli mi" (git log + `data/olaylar*.js` tam
tarama) filtresinden geçirildi, hayatta kalanlar TDV İslâm Ansiklopedisi
(içerik okunarak, CLAUDE.md §4) veya standart akademik kaynakla araştırılıp
taslak yazıldı.

## 🔴🔴 ÖLÇÜM, KOORDİNATÖRÜN TAHMİNİNİ ÇÜRÜTTÜ

Görevlendirme "68 KRONOLOJİ maddesi" diyordu (284'ün kaba bir bölüştürmesi).
Gerçek tarama sonucu:

```
KRONOLOJİ (gerçekten YENİ madde gerektiren)      8   ← yazıldı, olaylar_ek8.js
KRONOLOJİ adayı ama ZATEN YAZILMIŞ ("tekrar")     7   ← aşağıda listeli
İÇERİK (ek okuma/merak/magazin — benim işim değil) 41
DİĞER (VERİ/MOTOR/ARAYÜZ — benim işim değil)      228
─────────────────────────────────────────────────────
TOPLAM                                            284
```

**68 değil 8.** Fark, CLAUDE.md'nin kendi kayıtlı dersiyle birebir örtüşüyor
(*"koordinatörün 'hızlı bir bakış' ölçümü, iş dağıtımının tabanı olunca
artık hızlı bir bakış değildir"*) — 284 maddenin "not" metnini okumadan
büyük bir kısmı "madde yazılmalı" gibi göründü, ama gerçekte bu maddelerin
çoğu ya VERİ/MOTOR/ARAYÜZ düzeltmesi istiyordu ya da zaten yazılmış bir
olayın senkron/format sorunuydu (7 "tekrar" vakası). Bu, sayının küçük
çıkmasının nedeni — atlanan/eksik iş değil, **yanlış kovaya önceden
atanmış** iş.

---

## ✅ YAZILAN 8 MADDE — `data/olaylar_ek8.js`

| # | tarih | başlık | kaynak paket | not |
|---|---|---|---|---|
| 1 | 1460-01-01 | İzvornik (Zvornik) fethi | p0003/H-0017 | TDV `izvornik`, yıl bilgisi |
| 2 | 1509-02-03 | Diu Deniz Savaşı | p0006/H-0005 | TDV `diu` |
| 3 | 1515-01-01 | Nusaybin'in Osmanlı'ya katılması | 0033/H-0015 | TDV `nusaybin`, yıl bilgisi |
| 4 | 1526-01-01 | Kalender Şah isyanı | p0006/H-0005 | TDV `kalender-sah` |
| 5 | 1603-01-01 | Deli Hasan Paşa isyanı | p0006/H-0005 + 0034/H-0020 (BİRLEŞTİRİLDİ — aynı olay, iki ayrı pakette bağımsız tekrar bulunmuş) | TDV `celali-isyanlari` |
| 6 | 1688-09-11 | Knin'in Venedik'e kaybı | 0023/H-0010 | TDV `suleyman-ii` (bağlam) + Ive Mažuran 1998 (kesin gün — TDV taneciği kapsamıyor) |
| 7 | 1835-01-01 | Şammar (Reşîdî) Emirliği kuruluşu | 0036/H-0012 | TDV `residiler`; ⚠️ veri notu: yerlesimler.js'te Hâil 1836 yazıyor, 1 yıl fark — Yerleşim oturumuna devredildi |

Hepsi `onem`/`dunya`/`kapsam` alanları dolu (`data/olaylar_serhat.js`
modeline sadık). `index.html`e bağlama ORHANGAZİ'ye ait (ARAYÜZ oturumu).

## 🟡 OLCULECEK — 1 madde, tarih belirsizliği yüzünden YAZILMADI

**Cem Sultan'ın Rodos şövalyelerine yıllık 40.000 altın ödeme anlaşması**
(p0004/H-0003). TDV `cem-sultan` maddesi konuyu anlatıyor ama anlaşmanın
kesin ay/gününü vermiyor, yalnız Cem'in Rodos'a varışından (29 Temmuz 1482)
SONRA olduğunu söylüyor. Uydurma bir tarih (`YYYY-01-01` bile) burada
**yanlış** olurdu çünkü olay zaten var olan 1482-07-29 tarihli bir maddeden
hemen sonraya düşüyor ve kesinleşmemiş bir gün eklemek Değişmez 2 senkronunu
riske atar. NE ÖLÇÜLECEK: TDV'nin ay/gün vermediği doğrulandıysa (veya
standart akademik kaynaktan kesin tarih bulunursa) madde yazılabilir;
alternatif olarak mevcut 1482-07-29 "Cem Sultan Rodos'a sığındı" maddesinin
`d:` metnine bu ödeme anlaşması bir cümle olarak eklenebilir (yeni tarihli
madde açmadan). Ayrıca not: `MERAK.md`'nin kendi örnek kartı (①, Cem Sultan)
zaten bu konuyu tartışmalı-görüşler biçiminde ele alıyor — İÇERİK
kovasındaki bir kart bu boşluğu farklı bir açıdan zaten kapatıyor olabilir.

## 🔁 TEKRAR — 7 madde, ZATEN YAZILMIŞ (yeni madde açılmadı)

| paket/no | konu | zaten nerede |
|---|---|---|
| 0035/H-0056 | Piri Reis, Kitâb-ı Bahriye | `olaylar_ek14.js` (1521-01-01 + 1526-01-01) |
| 0035/H-0057 | Kahire'de Abbâsî hilâfetinin sonu | `olaylar_ek5.js` (1517-09-11) |
| 0035/H-0059 | Haziran-Eylül 1422 dönemi | `olaylar_ek.js:113` (1422-06-10, `gun:"Haziran-Eylül 1422"`) |
| 0035/H-0060 | Orhan Gazi–Teodora evliliği | `olaylar_ek.js` (1346-06-01) |
| 0035/H-0067 | Taiz'in kaybı | `olaylar_ek6.js` (1629-01-01) — yerleşim kaydıyla zaten senkron |
| 0035/H-0074 | Hemedan barışı sonrası | üç maddeyle zaten kayıtlı (1727→1730→1732 zinciri) |
| p0035 grubu 6 madde (yukarıdaki 6'sı) | — | tamamı `denetim/BULGU-PAKET-0035.md`'de önceden not edilmiş, bu turda git ile bağımsız doğrulandı |

---

## İÇERİK KOVASI — 41 madde, benim işim DEĞİL, yalnız liste

Bunların hepsi "ek okuma / merak / magazin / sebeb-sonuç" butonu istiyor —
`data/ekokuma.js`/`data/merak.js` sahibinin işi (bu paket bana yalnız
`olaylar_ek8.js` + bu rapor dosyasını verdi). Liste:

**pkg32:** H-0009, H-0011, H-0012, H-0013, H-0014, H-0015 (6 — bunlar zaten
önceki PAKET 0031-0032 turumda da raporlanmıştı)
**0033:** H-0011 (Piri Reis haritası ek okuma)
**0034 (21):** H-0010, H-0013, H-0014, H-0018, H-0021, H-0024, H-0026,
H-0027, H-0029, H-0030, H-0031, H-0032, H-0033, H-0034, H-0035, H-0038,
H-0039, H-0041, H-0042, H-0043, H-0044
**0035 (12):** H-0003, H-0012, H-0016, H-0023, H-0024, H-0025, H-0030,
H-0032, H-0033, H-0040, H-0041, H-0046
**p0003:** H-0018 (Eflak seferi anlatım zenginleştirme, düşük öncelikli
işaretli)

⇒ **ÖNERİ:** bu 41 madde tek bir "İÇERİK — ek okuma/merak partisi" olarak
toplanıp ekokuma.js/merak.js sahibine devredilebilir; MERAK.md zaten kendi
kuyruğunu tutuyor, iki kuyruk birleştirilmeli (aksi hâlde aynı istek iki
ayrı listede yaşar ve biri bayatlar — CLAUDE.md'nin "iki otorite doğar"
dersi).

## DİĞER KOVASI — 228 madde, benim işim DEĞİL, yalnız sayıldı

```
VERİ    137   (yerlesimler.js/devletler.js düzeltmesi, tasarım kararı)
MOTOR    46   (uret_petek.py — ADA KURALI, §2 emilme kümeleri, tâbi kademesi)
ARAYÜZ   24   (js/app.js — render/animasyon/panel/etiketleme)
BELİRSİZ/KAPSAM DIŞI  21   (görsel yok, hangi madde net değil, ya da
                             ClaudEmre-sistem kapsamı — Tarih Atlası değil)
```
Öne çıkan desenler (ajanların ayrıca not ettiği, tek kökten çoğullaşan
kümeler): "Boğaz kara maskesi kesilmemiş" (MOTOR, 6 madde tek kök),
"§2 emilme kümesi" (MOTOR, 0035'te 7 madde tek kök), "1281 boşlukları"
(VERİ, 5 madde — **zaten 8 Ağustos'ta kapatılmış**, bugün açık değil,
raporda yanlış "açık" görünüyor olabilir), "Gürcistan alt-krallık tasarımı"
(VERİ, 3 madde tek kök).

---

## Ölçülmedi / açıkça işaretlendi

- Cem Sultan maddesinin kesin ay/günü (yukarıda, `olculecek`).
- 0035 paketindeki 6 madde (H-0002,04,05,13,14,28) hangi kırılma gününe
  ait olduğu bu turun kaynak belgelerinde yazılı değildi — kırılma tarihi
  bilinmeden Değişmez-2 denetimi yapılamaz, uydurulmadı.
- Knin'in kesin günü TDV'de yok; ikincil literatür zinciriyle (Mažuran'ın
  kendi eseri taranmadı) doğrulandı — veride bağımsızca zaten kayıtlı olan
  `1688-09-11` ile birebir örtüşmesi güven verdi ama birincil kaynağın
  kendisi okunmadı.

## CEVAP.json'a DOKUNULMADI — hükümleri koordinatör işler.
