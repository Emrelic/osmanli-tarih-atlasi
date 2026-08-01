# BOŞLUK ENVANTERİ — TAM TARAMA SONUCU (2026-08-01)

Kullanıcının sorusu: *"Haritanın belli bir tarih anında bulunan boş yerler
tespit edilip **sebebi** ortaya çıkarılmalı… eğer boş kalması gerekiyorsa boş
bıraksın **ve sebebini kaydetsin**."*

**481 dönemin tamamı tarandı. Örnekleme yok.** Defter: `denetim/BOSLUK-DEFTERI.json`

---

## Cevap: üç sebep, üç büyüklük

| sebep | kimlik | toplam alan | payı |
|---|---|---|---|
| **KASITLI SAHİPSİZ** — çöl, sebebi zaten kayıtlı | 10 | 17.410.253 km² | **%97,2** |
| **NOKTA YOK** — yerleşim noktası konmamış | 119 | 309.226 km² | %1,7 |
| **ARAŞTIRMA** — sebebi bilinmiyor | 5 | ~185.000 km² | %1,0 |

**Boşluğun %97'si kasıtlı ve gerekçesi zaten yazılı**: Sahra (Ndjamena çevresi,
10,7 milyon km²), Rub'ul Hâlî, Karakum, Somali çölü, Nûbe çölü. Bunlar
"doldurulacak delik" değil, **çölün emilip Osmanlı boyanmasını engellemek için
konmuş dolgu noktalarının peteği** — CLAUDE.md §3'ün anlattığı tasarım.

## 🟢 Asıl bulgu: iş 481 dönem değil, ~124 YER

`NOKTA YOK` sınıfının 119 kimliği **medyan 319 km²** — küçük, dağınık, ve hepsi
tek bir sebepten: *o bölgede yerleşim noktası yok.* Bunlar dönemden döneme
yeniden doğmuyor; aynı yerler bütün zaman boyunca boş.

⇒ **Boşluk sorunu bir zaman sorunu değil, bir kapsama sorunu.** 481 dönemi tek
tek incelemek yerine ~124 yere nokta koymak yeterli. Bu, işin şeklini değiştirir.

## 🔴 ARAŞTIRMA — sebebi bilinmeyen 5 boşluk

| kimlik | aralık | km² | yakınındaki nokta |
|---|---|---|---|
| 42.0,27.5 | 1769-09-19 → 1837-10-13 | 81.631 | Hâil |
| 25.0,61.0 | 1566-04-14 → 1623-11-28 | 70.637 | Helsinki |
| 45.0,43.5 | 1281-01-01 → 1788-04-24 | 28.597 | Vladikavkaz |
| 18.5,42.5 | 1281-01-01 → 1482-01-01 | 3.901 | Cetinje |
| 50.5,26.0 | 1281-01-01 → 1865-01-01 | 587 | Manama (Bahreyn) |

⚠️ **"ARAŞTIRMA" kabul edilmiş demek DEĞİL** — sebebi henüz bilinmiyor demek.
Defterin `_NOT` alanına da yazıldı. Beşi de bir oturumun bakması gereken iş.

---

## Ölçüm hakkında bilinmesi gerekenler

### Kimlik ızgarası orta vadede kararlı, 642 yıl boyunca DEĞİL
Erken sınamada 1500↔1600 kesitleri arasında on üç boşluğun on üçünün de kimliği
değişmemişti ve "kararlı" demiştim. **Tam tarama bunu sınırladı**: Rub'ul Hâlî
**beş ayrı kimliğe** bölünüyor (`47.0,23.0` → `47.0,22.5` → `49.5,20.0` →
`49.5,19.5` → `49.0,19.5`), Karakum ikiye. Sebep: Osmanlı sınırı kaydıkça dev
bloğun ağırlık merkezi de kayıyor.

⇒ **134 kimlik, ~124 ayrı YER.** Fark küçük ama sayının ne olduğu önemli:
kimlik bir konum etiketi, yer sayısı değil.

### Eşik ölçüldü, ödünç alınmadı
`ASGARI_KM2 = 10`. Önceki değer 500'dü ve başka bir araçtan **ödünç alınmış
tahmindi**; ölçüm onu yanlış çıkardı. Ayıraç alan değil **tıkızlık** (4πA/P²):
10 km² altında medyan 0,003–0,035 (kıyı şeridi artefaktı), 10–100 km² bandında
**hiçbiri 0,15'in altında değil**. Eski eşik 66 tıkız ve gerçek boşluğu atardı.
Taze geometride bağımsız olarak doğrulandı.

### Bu koşu hangi geometriden
`donemler.js` 13:14:53 üretimi. Tazelik `URETIM_IZI` sha256 ile doğrulandı
(BAYAT: False). Koordinatörün 15:05 üretimi bittiğinde sayılar değişebilir;
`--kesit` ile fark ölçülecek.

---

## Sıradaki
1. **~124 yere nokta** — `NOKTA YOK` sınıfı, ucuz ve toplu iş.
2. **5 ARAŞTIRMA vakası** — tek tek bakılmalı.
3. Taze üretimden sonra `--kesit` ile fark ölçümü.
