# ÖLÇÜM — himâye çaresinin maliyeti: **kimlik 20/20 · renk 20/20 · KAYNAK 6/20**

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2944` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM — *veri yazılmadı, KÜNYE YAZILMADI, HÜKÜM YOK.*

---

## 1. ⇒ MANŞET: **🔴 kovası BOŞ — çare "yeni künye" değil**

Sevkin üç kovası ölçüldü:

```
🟢 KİMLİK VAR, penceresi de yeter      0 / 20
🟡 KİMLİK VAR, penceresi DAR          20 / 20   ← hepsi burada
🔴 KİMLİK YOK (yeni künye + renk)      0 / 20
```
⚠️ 🟢'nın boş olması tanım gereği: yirmisinin de `t:`si **himâye
gününde** bitiyor (bu turun künyeleri zaten öyle seçildi).
⇒ **Çare hiçbirinde yeni künye gerektirmiyor.** Yirmisi de `devletler.js`te
mevcut, ve `id`ler tahmin edilmedi — taranarak alındı.

---

## 2. ③ RENK MALİYETİ — **0 ihlal, 2 sınırda**

Uzatılırsa her gövde metropolüyle **aynı sahnede** olur. `renkler.py`nin
**kendi metriğiyle** ölçüldü (`_bindirilmis_lab` + `_de3`, opaklık
`OPAKLIK['yabanci'] = 0,44`) — bu sabah öğrenildiği gibi 8 bite
yuvarlayan sürüm **ekrandaki** rengi ölçüyor.
Eşikler `renkler.py`den okundu: `DE_KOMSU 12,0` · `_GUVENLI_PAY 13,0`.

```
🔴 İHLAL   (<12)     0 / 20
🟡 SINIRDA (12-13)   2 / 20
🟢          (≥13)   18 / 20
```
```
🟡 eve-notse ↔ almanya      #72a224 / #78d028   ΔE 12,11
🟡 toro      ↔ ingiltere    #a82472 / #7e3d8f   ΔE 12,34
```
⇒ **Renk maliyeti neredeyse sıfır.** İkisi eşiği geçiyor ama
`renkler.py`nin kendi *"ucu ucuna değil RAHATÇA geç"* payının
(13,0) altında.
📌 Ve sevkin ③ sorusu (*"🔴 kovasındakiler eş zamanlı mı, değilse aynı
hex meşru"*) **konusuz kaldı** — 🔴 kovası boş.

---

## 3. 🔴 ASIL MALİYET: **KAYNAK** — 14/20'de yok

`t:`yi uzatmak bir tarih yazmaktır, ve `§4`: **tarih uydurulmaz.**

```
`kaynak:` alanı gerçek bir slug   6 / 20
  bagirmi(cad) · futa-callon(gine) · lozi(zambiya) ·
  sine-salum(senegal) · yatenga(burkina-faso) · ruanda(ruanda)
`kaynak:` "bulunamadı"           14 / 20
  bundu · eve-notse · gyaaman · ibadan · loango · matamba ·
  nijer-deltasi · nkore · tio · toro · tsvana · gambiya-mandinka ·
  gonja · laos-kralliklari
```

### 🟡 AMA BİR KADEME UCUZ YOL VAR — ve ölçüm onu ayırıyor
```
(a) "polity'nin GERÇEK sonunu yaz"     → 14 kaynak sorgusu ZORUNLU
(b) "atlas ufkuna kadar uzat"          → tarih = 1923-10-29, yani bir
                                          PENCERE İŞARETİ; yeni bir
                                          tarih İDDİASI değil
```
⚠️ **(b) tarihi ucuzlatır, İDDİAYI ucuzlatmaz:** *"bu polity 1923'te
hâlâ ayrı bir gövdeydi"* yine tarihsel bir iddiadır ve dayanak ister.
Ucuzlayan şey **gün araması**, kaybolan şey değil.
🔵 **Hangi künyenin (a)'ya hangisinin (b)'ye uyduğunu ÖLÇMEDİM** — o,
yirmi ayrı kaynak sorusudur ve bu turun işi değildi.

---

## 4. VERİ İŞİ — 52 dönem

```
20 künye · toplam 52 dönem (`s:`/`isg:`)
en büyükleri: tsvana 13 · lozi 7 · laos-kralliklari 7 · bagirmi 3 · gonja 3
```
Çare uygulanırsa bu 52 dönemin **bitiş tarihi** ve ardılları yeniden
yazılır. `data/*.js` işi, tek elden.

---

## 5. TAM TABLO

| künye | `t:` | dönem | renk | ΔE metropol | kaynak |
|---|---|---:|---|---:|---|
| `bagirmi` | 1897-01-01 | 3 | ✓ | 68,0 | cad |
| `bundu` | 1858-01-01 | 1 | ✓ | 28,3 | 🔴 bulunamadı |
| `eve-notse` | 1884-07-05 | 1 | ✓ | **12,1** 🟡 | 🔴 bulunamadı |
| `futa-callon` | 1896-01-01 | 2 | ✓ | 45,2 | gine |
| `gyaaman` | 1895-01-01 | 1 | ✓ | 41,2 | 🔴 bulunamadı |
| `ibadan` | 1893-08-15 | 1 | ✓ | 50,6 | 🔴 bulunamadı |
| `loango` | 1883-01-01 | 1 | ✓ | 77,5 | 🔴 bulunamadı |
| `lozi` | 1890-06-27 | 7 | ✓ | 51,0 | zambiya |
| `matamba` | 1744-01-01 | 1 | ✓ | 61,3 | 🔴 bulunamadı |
| `nijer-deltasi` | 1884-09-10 | 2 | ✓ | 26,9 | 🔴 bulunamadı |
| `nkore` | 1901-10-25 | 1 | ✓ | 52,8 | 🔴 bulunamadı |
| `sine-salum` | 1887-01-01 | 2 | ✓ | 55,4 | senegal |
| `tio` | 1880-10-03 | 2 | ✓ | 34,0 | 🔴 bulunamadı |
| `toro` | 1900-06-26 | 1 | ✓ | **12,3** 🟡 | 🔴 bulunamadı |
| `tsvana` | 1885-03-31 | **13** | ✓ | 18,6 | 🔴 bulunamadı |
| `yatenga` | 1895-01-01 | 1 | ✓ | 54,5 | burkina-faso |
| `gambiya-mandinka` | 1894-01-01 | 1 | ✓ | 65,9 | 🔴 bulunamadı |
| `gonja` | 1899-01-01 | 3 | ✓ | 14,3 | 🔴 bulunamadı |
| `ruanda` | 1916-05-06 | 1 | ✓ | 64,9 | ruanda |
| `laos-kralliklari` | 1893-10-03 | **7** | ✓ | 23,7 | 🔴 bulunamadı |

---

## 6. ⇒ ÇARENİN MALİYETİ — tek tabloda

```
yeni KÜNYE          0        (20/20 zaten var)
yeni RENK           0        (20/20 zaten var · 0 ihlal · 2 sınırda)
`t:` düzeltmesi    20 satır
VERİ dönemi        52 dönem  (`data/*.js`, tek elden)
🔴 KAYNAK ARAMASI  14 künye  ← ve maliyetin AĞIRLIĞI BURADA
```
> **Yani çare "pahalı" değil, ama pahalı olan yeri BEKLENDİĞİ YERDE
> DEĞİL:** kimlik ve renk hazır, iş **tarih ve dayanak** işidir.

⚠️ Ve bir uyarı: bu 20'nin uzatılması **yeni komşuluklar** doğurur ve
`§9` *"palet verinin fonksiyonudur; renge dokunmadan yeni çakışma
doğabilir"* diyor. Yukarıdaki ΔE ölçümü yalnız **künye ↔ metropol**
çiftini kapsar; **künye ↔ komşu künye** çiftleri **ÖLÇÜLMEDİ** —
onu `renk_olc.py` koşu sonrası söyler.

---

## 7. DAMGALAR

```
🟢 ÖLÇTÜM      20 künye · kimlik 20/20 VAR · renk 20/20 VAR · dönem 52
🟢 ÖLÇTÜM      ΔE metropol: 0 ihlal · 2 sınırda (eve-notse 12,11 ·
               toro 12,34) · renkler.py'nin KENDİ metriğiyle
🔴 KOVA BOŞ    🔴 "kimlik yok" = 0 ⇒ sevkin ③ renk sorusu konusuz kaldı
🔴 BULDUM      asıl maliyet KAYNAKTA: 14/20 künyenin `kaynak:`ı
               "bulunamadı" — `t:` uzatmak tarih yazmaktır (§4)
🟡 AYIRDIM     (a) gerçek son = 14 kaynak sorgusu · (b) atlas ufkuna
               uzatma = pencere işareti, ama İDDİA yine dayanak ister
🔴 ARAMADIM    hiçbir kaynak — bu tur kaynak turu DEĞİLDİ
⚪ ÖLÇMEDİM    hangi künyenin (a)'ya hangisinin (b)'ye uyduğunu
⚪ ÖLÇMEDİM    künye ↔ KOMŞU KÜNYE ΔE çiftlerini — yalnız künye ↔
               metropol ölçüldü; §9 gereği yenileri doğabilir
⚪ ÖLÇMEDİM    52 dönemin gövde ALANINI (km²)
🔴 YAZMADIM    hiçbir künye, hiçbir tarih. HÜKÜM YOK.
```

---

## 8. TESLİM — sayıyla

```
🟢 kimlik var, pencere yeter    0 / 20
🟡 kimlik var, pencere DAR     20 / 20
🔴 kimlik YOK                   0 / 20     ⇒ yeni künye GEREKMİYOR
RENK    20/20 mevcut · 0 ihlal · 2 sınırda (eve-notse · toro)
VERİ    52 dönem yeniden yazılır
KAYNAK  14/20 "bulunamadı"  ← maliyetin ağırlığı BURADA
```
