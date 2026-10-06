# HANAK — D8a'nın +1'i bugünün verisinden GELMİYOR (ölçüm, 6 Ekim 2026)

**Soru:** UMIT'in ağacında kapı `8a ✗ 1509 (tavan 1508)` verdi ve ihlali adıyla bastı:
`8a YENİ d1829-osm-rus-1|1829-09-14|sol|Hanak`. Bu +1'i bugünün hangi değişikliği
üretti?

> ⚠️ **Benim ilk hipotezim (Saarbrücken) ÇÜRÜTÜLDÜ** — kapının kendi çıktısı Hanak
> diyordu. Bu belge o çürütmenin devamıdır, teyidi değil.

## Ölçüm — üç mekanizma, üçü de ELENDİ

| # | mekanizma | ölçüm | sonuç |
|---|---|---|---|
| ① | Hanak'ın **kendi kaydı** değişti mi | `yerlesimler_ek26.js`, `e634fdad~1` ↔ HEAD, kaydın TAMAMI | **BİREBİR AYNI** |
| ② | Hanak'a **yama** var mı | `grep -l Hanak data/yer_yama*.js` | **YOK** (0 dosya) |
| ③ | `d1829-osm-rus-1` **hattı** değişti mi | `data/d_sinirlar.js`e bugün dokunan commit | **SIFIR commit** |
| ④ | Hanak'ın **peteğini oynatacak komşu** | bugünün 9 yerleşim dosyasındaki lat/lon taşıyan 79 +/- satırı, Hanak'a (41.230/42.855) mesafe | **60 km içinde SIFIR** |

④'ün evreni ADIYLA yazılı: bugün yerleşim dosyalarında `lat:`+`lon:` taşıyan **79**
eklenen/silinen satır tarandı, en yakını 60 km'den uzak. Boş küme her öngörüyü
doğrular — bu yüzden evreni yazıyorum: küme boş değildi, **79 adaydan hiçbiri yakın
değildi.**

Hanak'ın `s:` zinciri (bugünkü hâli, değişmemiş):
`1281→1551 gurcistan` · `1551→1878 osmanli` · `1878→1917 rusya` ·
`1917-03→1917-11 rusya-gecici-hukumet` · `1917-11→1921-10 sovyet-rusya` ·
`1921-10→1923-10 tbmm-turkiye`. 1829'da Osmanlı — hattın doğu yakası.

## Hüküm: **+1'in bugünkü veride SEBEBİ YOK** — ama bu "sebep yok" demek değildir

🔴 **Ve şunu ölçemediğimi açıkça yazıyorum:** EMRELIC ağacında `devletler_harita.js`
diskte olmadığı için Değişmez 8 **ÖLÇÜLEMEDİ** (kapı çıkış 2). Yani "+1 bugünden
gelmiyor" ölçülmüştür; "+1 bayat gövde eseridir" **HİPOTEZDİR**, ölçülmedi.
İkisini aynı cümleye koymak, ölçülmemiş olanı ölçülmüş göstermek olurdu.

Geriye iki açıklama kalıyor ve ikisi de KOŞU 21'i bekler:
1. **Bayat gövde eseri** — D8 motorun ÇIKTISINI ölçer; eldeki gövde KOŞU 20'nin.
   Taze gövdede ihlal KAYBOLURSA sebep buydu.
2. **Önceden var olan, tavandan sonra görünür hâle gelmiş veri kusuru** — taze
   gövdede ihlal KALIRSA sebep budur ve Hanak'ın 1551-1878 Osmanlı kolu ile 1829
   hattının ilişkisi veri olarak incelenir.

## KOŞU 21 SONRASI SINAV — tek ölçüm iki sebebi ayırır

```
taze gövdede 8a ihlali:
   KAYBOLDU  ⇒ bayat gövde eseriydi · tavan 1508'de kalır, kalem kapanır
   KALDI     ⇒ VERİ kusuru · Hanak adıyla parti maddesi olur, tavan OLÇÜMLE oynar
```
⚠️ Hangisi çıkarsa çıksın tavan **ölçümü izler** (§3.4(0)): 1509 görünce "tavanı 1509
yap" denmez; önce hangi sebep olduğu ölçülür.

---
Ölçen: YILDIRIM BAYEZIT (koordinatör, EMRELIC) · dayanak: UMIT'in kapı çıktısı
