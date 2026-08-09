# BEKLEYENLER — Tarih Atlası · Emre'den ne bekleniyor

> Koordinatör: Oturum 0 · son tazeleme **9 Ağustos 2026, gün sonu**

---

# 🟢 BUGÜN KAPANDI — YAYIN r1105 CANLIDA

```
YAYIN            r1079 → r1105     A1 yarıçap tavanı haritada
tavan            305 petek bağlandı (%13,2) · kara alanının %23,0'ü kesildi
yabancı alan     -%10,1 … -%17,5   tavan gerçekten çöl siliyor
Osmanlı çekirdeği ±%0,1            1300·1400·1453·1500 — DOKUNULMADI
denetim          denetle.py temiz · denetle_yayin temiz · renk 0 çakışma
kutu             18 iplik cevaplandı · işlenmemiş paket 2 → 0
tespih           6 boncuk sayıldı (hepsi ölçümle)
```

Senin *"bir yerleşim uçsuz bucaksız çöle kaç kilometre hâkim olabilir"*
sorunun cevabı motora indi: `k1:700 · k2:420 · k3:280 · k4:140 km`,
ölçülerek kalibre edildi.

---

## 🟡 SENDEN BEKLENEN — dört şey

### ① Üç üreteç önerisi — onay ya da red *(red için sebep ZORUNLU)*

Tören kuralı gereği listeye bakmadan soruldu: *"atlas bittiğinde ne
yapabiliyor olacak, bugün o cümleye hizmet etmeyen ne var?"* Üç şey çıktı.
**Onaysız hiçbiri kuyruğa girmez.**

| # | öneri | niçin |
|---|---|---|
| **T-0103** | Atlas kendi **belirsizliğini** hesaplıyor ama çizmiyor | `kasitli_bosluk` · `devletsiz` vs `veri-yok` · `kesinlik:"belge"` · yuvarlak tarih · motorun ölçtüğü *"belirsizlik km — medyan 104,8"* — hepsi **var**, harita hepsini **aynı keskinlikte** boyuyor. Öğretim aracının en kötü yanılgısı: bilmediğini bildiği gibi göstermek. Veri hazır, eksik olan yalnız görselleştirme |
| **T-0104** | Haritaya **tıklayıp soru soramıyoruz** | Akış tek yönlü: kronoloji → harita. Van'a tıklayıp *"1514'te burası kimindi"* diye soramıyorsun. Oysa `CLAUDE.md` *"birbirini doğrulayan"* diyor — yani **iki yönlü** |
| **T-0105** | Hata bildiren tek insan **sensin** | 18 parti hatayı gözle sen buldun; denetimler hiçbirini yakalamadı (veri tutarlılığını sorarlar, tarihî doğruluğu soramazlar). Yayın açık — en iyi hata bulucular zaten sayfaya bakıyor ama kanalları yok |

```bash
py C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/tespih.py --onayla T-0103
py C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/tespih.py --reddet T-0103 --neden "..."
```

### ② PROJEKSİYON — küre/düz haritayı yayına alalım mı?

Kod **hazır** ve `projeksiyon` dalında bekliyor (MapLibre v5 + hibrit).
Yapmadım çünkü **canlı sayfayı değiştirir** ve senin işin.

⚠️ Ve bir ölçüm eksiği var, saklamıyorum: eşik sayıları
(`kureZoom 4 / mercatorZoom 6`) **TAHMİN**, ölçülmedi. Ayrıca dal `main`den
geride — birleştirirken **damgayı main'den, MapLibre sürümünü daldan** almak
gerekiyor.

**"Başla" dersen:** önce görsel sınav + eşik ölçümü, sonra birleştirme, sonra
yayın.

### ③ `oturumlar/durum/` — hangi oturumlar gerçekten kapalı?

Beş dosya hâlâ *"calisiyor"* diyor ama en yeni damga **6 Ağustos**:
`ARAYUZ 5 · CAPRAZ AKDENİZ · KOORDİNATÖR · PETEK_NOKTA · RENK 2`.

**Tahmin etmedim** — 7 Ağustos'ta koordinatör tam böyle bir tahminle RENK 2'yi
ölü ilan etmek üzereydi ve oturum çalışıyordu. Yanlış bir *"kapandı"*
damgası, bayat bir *"çalışıyor"*dan kötüdür. Hangileri kapalı, söyle,
temizleyeyim.

### ④ Halka tablosu — son bir göz *(dünden devam)*
`ONCELIK.md`de duruyor; Fas 4 · Hindistan 5 senin kararınla.

---

## YARIN İLK İŞ

**`serbedariler` 19 nokta takası — önündeki engel İRAN FETRETİ.**

```
veride serbedari adayı dönem   f:1335-12-01 → t:1381-01-01  (19 nokta)
künye (TDV, tam gün)           f:1337-09-09
⇒ arada 21 AY sahipsiz kalır — Değişmez 1b'nin menzilinde
```

Ve asıl bulgu: `1335-12-01` **hiçbir ardılın gerçek başlangıcı değil** —
Ebû Saîd o gün öldü, İlhanlı bitti, ama ardılların hiçbiri o gün başlamıyor
(serbedari 1337 · celayirli 1340 · muzafferi 1318 · kert 1245). **1335-1340
arası İran'da bir fetret var ve veri onu ifade etmiyor.** Osmanlı fetreti
(1402-1413) ayrı künyelerle çözülmüştü; İran'ınki çözülmemiş.

⇒ Yarın: İran fetretini modelle, sonra takası yap. Peşinden kalan ~43
`iran` dönemi (segment bölünmesi gerekiyor).

---

## ŞU AN NE BEKLİYOR

```
⏳ T-0059   GD Asya noktaları — 128'de kapatıldı, hedef 480'di
⏳ T-0087   Palu · Kendari kimlikleri — 3/5 yazıldı, ikisi açık
🔵 KALİTE 4 sırası: Hazar kıyısı → Kirman/Yezd → Avrupa Rusyası → Avusturya
🔵 RENK 2   `devirler.js` bayatlık denetimi
⚪ T-0032   BATTANİYE AD KARARI — sende, karar gelmeden hiçbir şey yazılmıyor
```
