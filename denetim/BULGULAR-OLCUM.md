# `olculecek` KOLU — 59 → 0

**Oturum:** PAKET 0019 TASNIF · **kip:** yalnız ÖLÇÜM ve HÜKÜM.
Projeye hiçbir düzeltme uygulanmadı. Yazılan dosyalar: bu dosya ve
kutu paketlerinin `CEVAP.json`ları.

---

## 0 · SONUÇ

```
BAŞLANGIÇ   59 madde  `olculecek`   (koordinatörün sayısı 51'di — aşağıya bak)
BİTİŞ        0
```

| hüküm | adet | ne demek |
|---|---|---|
| `sirada` | **35** | ölçüldü, **gerçek kusur**, çare yazıldı |
| `zaten-dogru` | **13** | ölçüldü, **kusur yok** — harita/veri doğru |
| `cozuldu` | **9** | **bayat** — iş sonradan yapılmış |
| `senin-kararin` | **2** | tasarım/kaynak kararı Emre'nin |

**Paket dağılımı:** 0019 (26) · 0002 (5) · 0003 (5) · 0016 (5) · 0006 (4) ·
0004 (3) · 0014 (3) · 0008 (2) · 0007 · 0011 · 0015 · 0017 · 0018 · 0023 (birer)

---

## 1 · 🔴 İLK BULGU BİR SAYI DÜZELTMESİ: 51 DEĞİL 59

Şartname *"kutu genelinde 51 madde"* diyordu ve listesi şuydu:
0019 (36) · 0016 (5) · 0014 (3) · 0008 (2) · 0011 · 0015 · 0017 · 0018 · 0023.

**Ölçtüm — listede `parti-000X` (eski, "emrelic"siz) paketler YOKTU:**

```
parti-0002  5 · parti-0003  5 · parti-0004  3 · parti-0006  4 · parti-0007  1
                                                          ⇒ 18 madde EKSİK
```

⇒ Ölçüm doğruydu, **evren dardı.** O 18 madde *"kapandı"* sanılıyordu; hiç
sayılmamışlardı. (`CLAUDE.md §11` — *"ölçüm doğru, evren dar"* ailesi.)

---

## 2 · EN DEĞERLİ ÜÇ BULGU

### 2.1 🔴 ADA KURALI BOĞAZLARI GÖRMÜYOR — dört maddenin tek kökü

Motorda peteğin denizi geçmesini önleyen **iki** koruma var
(`ADA KURALI` :1400 · `KARA-KISITLI SAHİPLİK` :1488) ve ikisi de çalışıyor.
Ama kara maskesini ölçtüm:

```
motor_kara.geojson · 3456 kara bileşeni
Kilitbahir · Maydos · Çimpe   (Avrupa)   → bileşen #1762
Çanakkale · Biga              (Anadolu)  → bileşen #1762   ← AYNI
İstanbul   (Avrupa) · Üsküdar (Anadolu)  → bileşen #1762   ← BOĞAZİÇİ DE
```

⇒ **Maskede ne Çanakkale ne İstanbul Boğazı kesilmiş.** ADA KURALI
*"aynı parçadalar"* deyip peteğin karşı yakaya geçmesine izin veriyor.
Kural doğru, **evreni** yanlış — Boğaz 1,2-6 km, Natural Earth 1:10m'de
kapanıyor.

**Kapsadığı maddeler:** `0019/H-0018` · `0019/H-0019` · `p0002/H-0014` ·
`p0016/H-0004` · `p0016/H-0005`

**Çare (uygulanmadı):** maskeye elle boğaz kesiği — kural değişmez, veri değişir.

### 2.2 🔴 MACARİSTAN ENKLAVININ KÖKÜ İKİ ANAKRONİK KAYITTA

Yazdığım **enklav bulucu** (bir nokta, en yakın 4 komşusunun hiçbiriyle aynı
sahipte değilse aday) Macaristan kutusunda 1533-07-22'de tek aday buldu:

```
🔴 Yanıkkale (Győr) macaristan — Komárom · Uyvar · Bratislava · Nitra HEPSİ avusturya
```

Kusurlu olan Győr değil:

```
Uyvar   s:[{f:"1281-01-01" … d:"avusturya"}]   ← 1281'DEN BERİ AVUSTURYA
Nitra   s:[{f:"1281-01-01" … d:"avusturya"}]   ← AYNI
```

Habsburglar Macaristan tahtına **1526 Mohaç'tan sonra** geldi.
⇒ Győr enklav değil; **etrafı anakronik boyandığı için enklav görünüyor.**

**Yan ürün:** `macaristan` künyesinin `t:`si 1526-08-29 ama veride 37 kayıt
sonrasında da `macaristan` — **ve veri doğru** (model Kraliyet Macaristanı'nı
böyle tutuyor). Kusur künyede.

### 2.3 🔴 "NOKTASI OLMAYAN DEVLET HARİTADA YOKTUR" — üç vaka

| madde | ölçüm | sonuç |
|---|---|---|
| `0019/H-0076` Yemen İmamlığı | `yemen` kimliğinin 1570'te **2 noktası** var: Hudeyde (kıyı) · Ebha (Asîr, 400 km kuzey). Sa'da · Amrân · Kevkebân · Şehâre **yok** | imamlık dağlarda değil kıyıda görünüyor — tarihin tersi |
| `0019/H-0026` Arnavutluk | 1467'de `arnavutluk` = **1 nokta** (Kruja). İskender Bey'in Lezhe Birliği yok | etiket basacak gövde yok |
| `0019/H-0016` İran | **Rey ve İsfahan'ın kaydı HİÇ YOK** | Safevî başkenti atlasta yok |

---

## 3 · BAYAT ÇIKAN 9 MADDE — ve kapatan commit

| madde | ne | kapatan |
|---|---|---|
| `0019/H-0049` · `0019/H-0054` | çölde üçgen/ok ucu hâlesi | **3a36b65** (20 Ağu) → yayına **47a296a** (21 Ağu 02:56) |
| `0019/H-0059` | uçuş ayarları etki etmiyor | 🔴 **iki sürgü aynı `id`** — düzeltildi ama **commit'siz** (çalışma ağacında) |
| `p0006/H-0009` | Macaristan'da mavi gövde | **palet değişti**: `macaristan` 3 Ağu'da `#1e88e5` (mavi), bugün `#20d880` (yeşil) |
| `p0004/H-0014` | metinsiz görsel | panelde `259 / 1017 başlık` — bugün 1223 ⇒ **206 madde geride** |
| `p0004/H-0001` | Çandarlı Halil yanlış eşleşmesi | `kisiBul` paydası `min` → `max` |
| `p0003/H-0006` | Anadolu Selçuklu'nun bitişi | madde yazılmış (1308) |
| `p0003/H-0007` | Hacıemîroğulları etiketsiz | künye + renk + 2 nokta var |
| `p0002/H-0003` | göllerin üstü boyalı | 10 büyük gölün 9'u maskeden çıkarılmış |

📌 **Bayatlama ölçütü işe yaradı:** görselin kronoloji panelindeki
`N / TOPLAM başlık` sayısı. **Bugün TOPLAM = 1223.**

---

## 4 · ÖLÇÜLEN AMA DÜZELTİLMEYEN — en ağır 10 kusur

| # | madde | kusur |
|---|---|---|
| 1 | `0019/H-0018/19` + 3 | maske boğazları kesmiyor ⇒ petek karşı yakayı boyuyor |
| 2 | `p0006/H-0007` | Uyvar · Nitra 1281'den beri `avusturya` (anakronik) |
| 3 | `0019/H-0008` | **Mersin 1352'den beri Osmanlı** — 164 yıl erken, Karaman/Ramazan dönemi yok (komşu Adana doğru) |
| 4 | `0019/H-0004` | Fetret boyunca **4 nokta hâlâ `OSMANLI`**: Ahtapolu · Rezve · İğneada (+Mersin) |
| 5 | `0019/H-0001` | Ankara sonrası **Saruhan ve Karesi diriltilmemiş** (Aydın · Menteşe · Germiyan ✓) |
| 6 | `0019/H-0016` | İsfahan ve Rey kaydı yok |
| 7 | `0019/H-0076` | Yemen dağlarında nokta yok — imamlık gösterilemiyor |
| 8 | `0019/H-0026` | Arnavutluk 1 nokta |
| 9 | `p0007/H-0008` | `kirim` 1783 sonrası 4 kayıtta sürüyor (Soçi · Tuapse · Maykop · Yedisan) |
| 10 | `0019/H-0022/25` | Suceava · Yaş · Târgovişte · Akkerman kaydı yok; tâbi gövde **adıyla etiketlenmiyor** |

---

## 5 · YAN ÜRÜN: ÜÇ ÖLÇÜM ALETİ

```
enklav bulucu     gün + kutu → "bu enklav gerçek mi" (görsel açmadan)
kutu sayımı       gün + kutu → hangi nokta kimin + rengi
maske sınayıcı    iki nokta aynı kara bileşeninde mi
```
Üçü de scratchpad'te; `arac/`a alınmaya değer. Emre'nin kutularında
*"bu enklav gerçek mi"* sorusu **en az 12 maddede** geçiyor.

---

## 6 · ÖLÇMEDİKLERİM

1. **Hiçbir şeyin geometrisi.** Aletlerim sahiplik ölçüyor, şekil değil.
   *"Kopuk görünüyor mu"* soruları açık kaldı; *"veride kopuk mu"* kapandı.
2. **Kaynak doğrulaması yapılmadı** (`§4`): Saruhan/Karesi'nin iadesi,
   Mersin'in Ramazanoğlu dönemi, Kırcaali'nin kuruluşu, Yemen imamlığının
   merkezleri — hepsi TDV'den sınanmalı.
3. **Tarayıcıda hiçbir şey ölçmedim** — arayüz hükümleri (H-0051 · H-0059)
   koddan çıkarıldı.
4. **`0019/H-0077/78`** (Van'ın yanındaki pembe): görselin tarihi ve tam
   koordinatı olmadan iki aday (safevi `#a56cab` ↔ gurcistan `#e020b0`)
   ayrılamadı. Tahtadaki **M-0001** aynı soruyu RENK 3'e sormuş ve hâlâ
   cevapsız.

---

*Ölçen: PAKET 0019 TASNIF · 21 Ağustos 2026 · projeye hiçbir düzeltme
uygulanmadı.*
