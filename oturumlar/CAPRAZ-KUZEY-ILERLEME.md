# ÇAPRAZ KUZEY — ölçüm kayıtları

Bulgular ve öneriler: **`CAPRAZ-KUZEY.md`**. Bu dosya yalnız **ham ölçüm** tutar —
komut, çıktı, sayı. Amaç: her sayının yeniden üretilebilmesi (`OGRENILENLER §52`).

---

## Tur 1 — 2026-08-01, açılış turu

### Ö0 · Ölçüm tabanı doğrulandı (bunu yapmasaydım tur baştan yanlış olurdu)

İlk ölçümümü `data/yerlesimler*.js`'in **tamamı** üzerinde koştum ve `Y_AVRUPA`
noktalarını (Uppsala · Kalmar · Turku · Göteborg …) canlı sandım. **Değiller.**

`arac/girdi.py` `GIRDI_DOSYALARI` (tek doğru kaynak, CLAUDE.md §5):
```
CANLI     yerlesimler.js · yerlesimler_afrika.js                → 975 nokta
DIŞARIDA  yerlesimler_asya.js (344) · yerlesimler_avrupa.js (228)
          yerlesimler_ortaasya2.js
```
📌 CLAUDE.md §5'in uyardığı tuzağın aynısına düştüm ve **belgeyi okuyarak**
çıktım: *"ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI okuduğunu da
doğrulamak gerekiyor."* Aşağıdaki bütün sayılar **canlı iki dosya** üzerinden.

```bash
node -e "global.window={};const fs=require('fs');
for(const f of ['yerlesimler.js','yerlesimler_afrika.js'])eval(fs.readFileSync('data/'+f,'utf8'));
const Y=[];for(const k of Object.keys(window))if(/^YERLESIMLER/.test(k))Y.push(...window[k]);
console.log('CANLI nokta:',Y.length);"
```
→ `CANLI nokta: 975` (koordinatörün r430 sayısıyla uyuşuyor ✓)

---

### Ö1 · Kuzey kümesi kimlik kullanımı

| kimlik | pencere | nokta | `devletler.js` ömrü | not |
|---|---:|---:|---|---|
| `rusya` | **116** | **101** | 1547-01-16 → 1917-03-15 | koordinatörün 128/113'ü tüm dosyalardan; canlıda 116/101 |
| `lehistan` | **23** | **16** | 1569-07-01 → 1795-10-24 | en zayıf, doğrulandı |
| `altinorda` | 22 | 22 | 1242 → 1502 | |
| `kirim` | 14 | 13 | 1441 → 1783-04-08 | |
| `isvec` | 5 | 5 | 1523-06-06 → | Stokholm·Oslo·Helsinki·Riga·St.Petersburg |
| `kazan` | 2 | 2 | 1437 → 1552-10-02 | Kazan · Ufa |
| `litvanya` | 1 | 1 | 1918-02-16 → 1923 | yalnız Vilnius |
| **`zaporojye`** | **0** | **0** | 1552 → 1775-06-16 | 🔴 hiç boyanmıyor |
| **`astarhan`** | **0** | **0** | 1466 → 1556 | 🔴 hiç boyanmıyor |
| **`nogay`** | **0** | **0** | 1440 → 1783 | 🔴 hiç boyanmıyor |
| **`sibir`** | **0** | **0** | 1420 → 1598 | 🔴 hiç boyanmıyor |
| `moskova` · `novgorod` · `ukrayna` · `kazak` | 0 | 0 | **kayıt yok** | kimlik hiç tanımlı değil |

📌 **Dört devlet `devletler.js`'te kayıtlı ve haritada hiç görünmüyor.** Bu,
CLAUDE.md §3.5'in "hayalet devlet" sınıfının **ters yönü**: orada var olmayan
devlet boyanıyordu, burada var olan devlet **hiç** boyanmıyor. §3.5'teki
denetimlerin hiçbiri bu yönü sormuyor (kural ⑥).

---

### Ö2 · Kimlik ömrü ↔ yerleşim penceresi çelişkisi

Şu soruyu sordum: *bir `s:` penceresi, devletin `devletler.js`'teki doğuşundan
önce mi başlıyor?*

```bash
# tam komut CAPRAZ-KUZEY.md ölçümlerinde; özet sonuç:
rusya      devletler.js 1547-01-16  ↔  7 nokta 1281'den  (Moskova·Novgorod·
                                       St.Petersburg·Tula·Nijniy Novgorod·Vologda·Perm)
lehistan   devletler.js 1569-07-01  ↔  12 nokta 1281'den
isvec      devletler.js 1523-06-06  ↔  Stokholm·Helsinki 1281'den
```

⚠️ **Bunu hata olarak RAPOR ETMİYORUM.** `OTURUM-16-KUZEY-DOGU-AVRUPA.md §E.3`
bu konvansiyonu kasten kurmuş: `rusya` = Moskova Knezliği → Çarlık →
İmparatorluk tek siyasî gövde; `lehistan` Litvanya'yı da kapsıyor. Yani
**dizin ekseni ile harita ekseni farklı şey ölçüyor** — dizin *kurumu*, harita
*gövdeyi*. Kayda geçiyor çünkü ileride bir denetim bu ikisini eşitlemeye
kalkarsa 21 kaydı yanlış "düzeltir".

---

### Ö3 · `altinorda` bitiş tarihleri — dağılım

```
1441-01-01  Bahçesaray · Hacıbey (Odessa) · Harkov · Voronej · Rostov (Don)
1502-01-01  Çeleken · Garabogaz (Bekdaş) · Mangışlak
1502-03-01  Bozkır (Deşt-i Kıpçak)          ← bugün düzeltilen tek kayıt
1438-01-01  Kazan · Ufa                     (→ kazan)
1379-01-01  Köhne Ürgenç · Yeni Ürgenç · Küngrat
1362-01-01  Kiev · Poltava                  (→ lehistan)
1556-01-01  Terek deltası · Astrahan · Saratov · Tsaritsyn · Kalmuk bozkırı ·
            Ural eteği                      (→ rusya)
```
📌 Aynı devletin sonu için **yedi ayrı tarih** — çoğu meşru (bölgesel devir),
ama 1441 ile 1502-03-01 ayrımı bugünkü düzeltmeden sonra **yarım** kaldı
(`CAPRAZ-KUZEY.md` B5).

---

### Ö4 · Kronoloji taraması — Rusya/Kazak/Leh maddeleri

`data/olaylar*.js`, **1009 madde**. Rusya ile ilgili ilk madde:
```
1637-06-18  Azak Kalesi'nin Don Kazaklarına kaybı
```
1670-1700 penceresinin tamamı tarandı (53 madde). Bulunmayanlar:
```
1552 Kazan · 1556 Astarhan · 1569 Ejderhan seferi
1648 Hmelnitski · 1654 Pereyaslav · 1667 Andrusova · 1676 Zuravno
```
Bulunanlar (Leh-Osmanlı ekseni tam):
```
1672-08-27 Kamaniçe   1672-10-18 Bucaş   1678-07-19 Çehrin
1681-01-11 Bahçesaray 1699-01-26 Karlofça
```

---

### Ö5 · TDV slug ölçümü — `<title>` ile sınandı

| slug | `<title>` | hüküm |
|---|---|---|
| `azak` | "AZAK - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `ukrayna` | "UKRAYNA - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `polonya` | "POLONYA - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `astarhan-hanligi` | "ASTARHAN HANLIĞI - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `lehistan` | "LEHİSTAN - TDV İslâm Ansiklopedisi" | 🟡 **kabuk** — gövde `bk. POLONYA` |
| `ejderhan` | **"Arama - TDV İslâm Ansiklopedisi"** | 🔴 **ÖLÜ** → `astarhan-hanligi` |

📌 Kural ③ iki kez işledi: ikisinde de **kaynak vardı, adres yanlıştı.**
📌 Ve `ejderhan` ölü sayfasının **arama sonucu** gerçek maddenin adını verdi
("ASTARHAN HANLIĞI") — ölü slug'ın kendisi doğru adresi buldurdu.

---

### Ö6 · Takvim ölçümü — ilk iki vaka

| olay | bizdeki kayıt | Jülyen | Gregoryen | TDV | sapma |
|---|---|---|---|---|---|
| Pereyaslav → Poltava | `1654-01-18` | 8 Oca | **18 Oca** | 1654 | 🟢 dönüştürülmüş |
| Andrusova → Kiev | `1667-01-30` | **30 Oca** | 9 Şub | 1667 | 🔴 **ham Jülyen, 10 gün** |
| Azak'ın Petro'ya kaybı | `1696-07-19` | **19 Tem** | 29 Tem | **6 Ağu** | 🔴 üç tarih, 18 gün |

Andrusova çift gösterimli künyeyle doğrulandı: *"signed on 9 February
[O.S. 30 January] 1667"*.

⚠️ **Desen henüz kararlaşmadı** — iki vaka var, üçüncüsü hangi ucun kaydığını
söyleyecek. `CAPRAZ-GOREV.md §3`: *çelişki çözülmeden önce kaydedilir.*

---

## Bu turda ÖLÇMEDİĞİM, iddia da etmediğim şeyler

Kural ⑥'ya uyarak açık bırakıyorum — "doğrulanamadı" tam bir hükümdür (§8):

- **1648 Hmelnitski ayaklanmasının günü** — TDV yalnız yıl veriyor. Gün
  bulunmadan B3'ün önerisi tarihlenemez.
- **Harkov · Voronej · Rostov'un 1441-1502 arası sahibi** — "Vahşi Bozkır"
  sınıfına mı giriyor, ölçülmedi.
- **`kazan-hanligi` slug'ı** — sınanmadı; Kazan 1552 maddesi önerilirken gerekecek.
- **Bahçesaray 1681-01-11** — bizdeki gün ile 3/13 Ocak arasındaki ilişki
  ölçülmedi (üçüncü takvim vakası adayı).
- **`rusya` 116 vs koordinatörün 128'i** — fark merge dışı dosyalardan geliyor
  olmalı ama **doğrulamadım**; koordinatörün sayısını çürütmüyorum, tabanının
  farklı olduğunu söylüyorum.
