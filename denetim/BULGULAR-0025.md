# parti-emrelic-0025 — yedi madde

**Oturum:** PAKET 0019 TASNIF · **kip:** yalnız ÖLÇÜM ve REÇETE.
Projeye hiçbir düzeltme uygulanmadı.
**Kapsam:** H-0001 · H-0004 · H-0005 · H-0006 · H-0007 · H-0008 · H-0009.
(H-0002 ve H-0003 başka oturumlarda.)

---

## 0 · HÜKÜM DAĞILIMI

```
sirada        4    H-0001 · H-0004 · H-0005 · H-0009   ← gerçek kusur
zaten-dogru   3    H-0006 · H-0007 · H-0008            ← bugünkü yayında ÜREMİYOR
```

---

## 1 · 🔴 ŞARTNAMENİN ÖNCÜLÜ ÇÜRÜDÜ

Şartname şöyle diyordu:

> *"ÇIKARIM: kusur VERİDE değil, HARİTA BOYAMASINDA. Asıl soru: ADA KURALI
> ve KARA-KISITLI SAHİPLİK boğazlarda NİÇİN çalışmıyor?"*

**Ölçtüm — o soru sorulmamalı, çünkü boyama kusuru YOK.**

`data/donemler.js` (21 Ağu 02:56 koşusu, `47a296a`) üzerinde nokta-poligon
testi:

```
Tartışmasız AVRUPA yakası: Gelibolu · Bolayır · Çimpe · Maydos ·
   Kilitbahir · Seddülbahir ucu · Şarköy · Tekirdağ · Rumeli Hisarı ·
   Rumeli Kavağı · Silivri · Vize · Edirne · Dimetoka      → 14 nokta
   tarihler 1329 · 1335 · 1340 · 1346 · 1351               →  5 kesit
   SONUÇ  70/70 "Osmanlı DEĞİL"                            🟢

ADALAR: Midilli · Molyvos · Kalloni · Eresos               →  4 nokta
   tarihler 1346 · 1400 · 1460                             →  3 kesit
   SONUÇ  12/12 "Osmanlı DEĞİL"                            🟢

DENETİM (doğru olması beklenen — aletin çalıştığının kanıtı):
   Üsküdar 1329 → OSMANLI ✓      Çanakkale 1346 → OSMANLI ✓
```

⇒ Motorun iki koruması **çalışıyor.** `uret_petek.py`ye dokunacak bir iş yok.

### 1.1 Kendi ölçümümü de çürüttüm

İlk taramamda kutuları geniş tutmuştum ve *"Gelibolu yarımadasında 319,
Midilli'de 23 Osmanlı hücresi"* çıkmıştı. Örnek koordinatlar
`40,05K 26,37D` ve `39,29K 26,63D` — **ikisi de Anadolu yakası.**
Kutum boğazın iki yakasını birden kapsıyordu.

📌 *"Doğru aleti yanlış evrenle koşturmak"* (`§11`). Kutu daraltıldı,
sonuç tersine döndü. **Bu satır kayda geçiyor çünkü yanlış sonuç bir
oturumu `uret_petek.py`ye yollayacaktı.**

### 1.2 Niçin görmüş olabilir — iki ihtimal, ikisi de ölçülmedi

```
a) TARAYICI ÖNBELLEĞİ   harita 02:56'da yenilendi, paket 03:41'de toplandı
b) ÖRNEKLEMEDİĞİM NOKTA  14 nokta seçtim, kıyının tamamını taramadım
```
⚠️ H-0006/07/08'de **görsel yok**, o yüzden bayatlık ölçütü
(panelin `N / TOPLAM başlık` sayısı) uygulanamadı.

---

## 2 · 🔴 H-0009 — GERÇEK KUSUR, VE KÖKÜ BULUNDU

Emre: *"Dimetoka Çirmen Uzunköprü Kırklareli Lüleburgaz alınmadan
Lalapaşa Edirne Kofçaz Dereköy Demirköy İğneada Rezve Vize Ahtapolu
alınmış gibi görünüyor."*

**Yayında ÜRÜYOR** (1361-06-15): Dimetoka · Lalapaşa · Edirne · Kofçaz ·
Vize · Ahtapolu Osmanlı; Çirmen · Uzunköprü · Kırklareli · Lüleburgaz değil.

**Sebep — on iki kayıt tek yuvarlak güne yazılı:**

```
1361-01-01   ← 12 YERLEŞİM BİRDEN
   Lalapaşa · Kofçaz · Dereköy · Demirköy · İğneada · Rezve ·
   Vize · Ahtapolu · Mustafapaşa · Orestiada · Havsa · Malko Tırnova
1361-02-01   Dimetoka
1361-03-01   Edirne        ← 🔴 ONLARDAN İKİ AY SONRA
1362-06-01   Kırklareli · Lüleburgaz · Çorlu
1371-09-26   Çirmen · Uzunköprü          ← Çirmen Savaşı
```

İğneada · Rezve · Ahtapolu **Karadeniz kıyısında**, Edirne'nin 150 km
kuzeydoğusunda — ve veri onları Edirne'den **önce** Osmanlı yapıyor.
Tarihen sıra tersidir: Edirne 1361, Istranca-Karadeniz kuşağı 1370'ler.

**Reçete:** `data/yerlesimler.js` — Edirne çevresi → `1361-03-01` sonrası;
Istranca + Karadeniz → `1371-09-26` sonrası. Kaynak sınanmalı (`§4`).

**Ek bulgu:** Babaeski · Pınarhisar · Saray (Tekirdağ) **kaydı yok.**

---

## 3 · ÖTEKİ ÜÇ MADDE

| madde | ölçüm | hüküm |
|---|---|---|
| **H-0001** Gürcistan 1711 | `gurcistan` = **3 nokta** (Kutaisi batıda; Tiflis · Zagem doğuda), aralarında Osmanlı koridoru | kopukluk **tarihen doğru** — 1711'de İmereti · Kartli · Kaheti ayrı krallıklar. Yanlış olan üçünü tek kimlikte toplamak. **`imereti` künyesi VAR ama kullanılmıyor**; `kartli`/`kaheti` yok |
| **H-0004** Livonya 1561 | Emre'nin kutusunda **1 nokta**: Klaipėda, `almanya` | Königsberg ve Memel 1561'de **Prusya Dukalığı** (Lehistan vasalı, HRE dışı). `prusya` · `kurlandiya` · `livonya` künyeleri **YOK**. ⚠️ Tartu'nun `lehistan` olması şüpheli (Rusya 1558-1582) — ölçmedim |
| **H-0005** Macaristan 1566 | açık yeşil = `macaristan` #20d880 → **Eğri · Kanije** | Kraliyet Macaristanı, ve tarihen doğru (Eğri 1596'ya, Kanije 1600'e kadar Macar). 🔴 **Ama aynı devletin başkenti Bratislava `avusturya` yazılı** — tek siyasî varlık iki renkte |

---

## 4 · ÖLÇMEDİKLERİM

1. **Kıyının tamamı taranmadı** — 14 nokta + 4 ada noktası; ızgara taraması
   kutu kirliliği yüzünden terk edildi.
2. **Hiçbir kaynak doğrulaması yapılmadı** (`§4`): Trakya fetih sırası,
   Prusya Dukalığı, Tartu'nun 1561 sahibi, Gürcü krallıkları.
3. **H-0004'ün görselini açmadım** — künye şeridinden tarih/kutu aldım,
   tam görsele bakmadım. *"Buradaki hatayı düzeltelim"* metni tek başına
   neyin kastedildiğini söylemiyor; ölçümüm kutudaki tek noktaya dayanıyor.
4. **Tarayıcıda hiçbir ölçüm yapılmadı.**

---

*Ölçen: PAKET 0019 TASNIF · 21 Ağustos 2026 · projeye hiçbir düzeltme
uygulanmadı.*
