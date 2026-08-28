# BULGU — VERİ SAHİPLİK

> Görev: `oturumlar/VERI-SAHIPLIK.md` — 48 madde (32 sahiplik-teyidi + 16
> emilme), tek paket: `parti-emrelic-0035`. + ORHANGAZİ'nin ek işi (3 madde:
> Çaçak/Kragujevac/Yagodina, sonradan Yagodina/Taganrog düzeltildi + Kythira).
> Yamalarım: `data/yer_yama_sahiplik.js` (35 kalem) + `data/yer_yama_emilme.js`
> (16 kalem). Hükümler: `denetim/HUKUM-VERI-SAHIPLIK.json` (49 madde).

## ⚠️ Alt-oturum altyapısı arızalıydı — bunu bilmeden okunmasın

6 paralel alt-oturum başlattım (S1-S4 sahiplik, E1-E2 emilme); ilk turda
4'ü stall/ECONNRESET ile düştü, ikinci turda da çoğu düştü. **48 maddenin
BÜYÜK ÇOĞUNLUĞUNU kendim, doğrudan node sorgularıyla işledim.** Yalnız
S2 grubu (8 madde) ~3 saat gecikmeyle kendiliğinden tamamlandı ve
bulgularını kendi taramamla birleştirdim (bkz. aşağıda).

## 🔴 KRİTİK ÖZ-DÜZELTME — kendi metodoloji hatamı buldum

Node sorgularımın İLK turu yalnız `window.YERLESIMLER` (data/yerlesimler.js'in
kendi değişkeni) okuyordu. Proje **61 AYRI pencere değişkeni** kullanıyor
(`window.YERLESIMLER_EK27`, `_H2_RUSYA` vb., toplam 2632 nokta) ve bunlar
birbirine push edilmiyor — yalnız `arac/girdi.py` (Python) onları birleştirir.
Bu yüzden **Taganrog ve Yagodina için "kayıt yok" diye yeni nokta
önerdim, İKİSİ DE YANLIŞTI** — ikisinin de kaydı zaten vardı, başka
dosyalarda. Düzeltilmiş sorguyla (tüm `window.YERLESIMLER*` birleştirilmiş)
yeniden taradım, hatalı önerileri geri çektim ve tahtaya (M-1383) bildirdim
— bu, "kayıt yok" hükmü veren HERHANGİ bir oturum için genel bir risktir.

## Özet sayılar (49 madde — 48 orijinal + 1 ek-iş Kythira)

```
zaten-dogru:    14
tekrar:         11
olculecek:      12
sirada:          9
cozuldu:         1
gerek-yok:       1
senin-kararin:   1
```

## En değerli bulgular

**① Çapraz doğrulama örüntüsü — aynı kusurlar birden çok pakette:**
H-0048/H-0056/H-0057/H-0060/H-0068/H-0074/H-0075/H-0083/H-0084 gibi
maddelerin BÜYÜK KISMI, bugünkü **BAYAT AVCISI** turumun (156 madde) ve
**PAKET-0036**'nın bulgularıyla BİREBİR örtüştü: Uyvar/Nitra, Culfa/Merend/
Ferhad Paşa borcu (+ bugün başka bir oturumun yazdığı `data/yer_yama_iran.js`),
Kutaisi/imereti (bağlanmamış dosya), Mersin/Ramazanoğulları, Şammar/Hail,
Fâv/Abâdân. Bu, kusurların gerçekliğini güçlendiriyor ve tekrar araştırma
gereksinimini ortadan kaldırıyor (11 madde `tekrar` olarak kapandı).

**② Diriyye — gerçek ve somut bir yeni nokta ihtiyacı:**
İlk Suudi Devleti'nin gerçek başkenti (1744-1818, İbrahim Paşa tarafından
yıkıldı) ayrı bir kayıt olarak yok — yalnız Riyad var (ki o da zaten çok iyi
modellenmiş, `bos:'devletsiz'` + suud/Mısır/sammar zinciriyle). Diriyye
için nokta önerisi `data/yer_yama_emilme.js`'de (H-0031/H-0079).

**③ Mersin — kesin veri hatası, üç bağımsız ölçümle doğrulandı:**
`data/yerlesimler_ek27.js` Mersin kaydı 1352'de (Orhan Gazi dönemi)
DOĞRUDAN Osmanlı gösteriyor — 164 yıl erken (gerçek ilhak Mercidabık 1516).
BAYAT AVCISI turum + benim bu turki sorgum + alt-oturumun bağımsız taraması
AYNI SONUCA vardı. `cozuldu-oneri` ile tam yama yazıldı (H-0060).

**④ "TEK KÖK" hükmü kısmen çürüdü — büyük merkezler zaten kayıtlı:**
Koordinatörün emilme kümesi için verdiği "18 ayrı iş DEĞİL, TEK iş" hükmü
DOĞRU YÖNDEYDİ ama biraz karamsardı: Ereş, Kabala, Şeki, Gence, Bakü,
Şamahı, Derbend, Revan, Tiflis, Semendire, Bender, Çehrin gibi "koridor"
şüphesi taşınan büyük merkezlerin HEPSİNİN kendi kaydı zaten var ve
antlaşma tarihleriyle (1590 Ferhad Paşa, 1724 İstanbul Mukasemenamesi,
1774 Küçük Kaynarca) tutarlı. Gerçek boşluk büyük ölçüde ARA
köylerde/küçük kasabalarda ve Sahra/Nefud çölü genelinde (H-0001/H-0011/
H-0064/H-0079 — ayrı, bilinen bir "nokta yoğunluğu" projesi).

**⑤ İki madde tam MOTOR kapsamına düşüyor, benim işim değil:**
H-0047 ve H-0102, motorun emilme mekanizmasının KENDİSİNİN değiştirilmesini
(boş arazi boyamayı kısıtlama + girinti yumuşatma) istiyor — `arac/*.py`
bana kapalı, MOTOR ÜÇ KALEM oturumuna devredildi.

**⑥ Doğubayazıt — H-0048 ve H-0057'de bağımsız/çapraz doğrulanan yeni bulgu:**
Çaldıran sonrası (1514-09-06) kalıcı ve kesintisiz Osmanlı gösteriliyor,
ama 47 km yakınındaki Çaldıran'ın kendisi aynı gün Safevî'ye dönüp
1639'a kadar öyle kalıyor — tutarsızlık, araştırılması öneriliyor.

## Kilit durumu

Koşu bugün 13:23'te başlayıp bu akşam bitti (yayın r3556, M-1341/M-1354'e
göre); ORHANGAZİ'nin ikinci "Emre uzakta, sıra bende" turunda (M-1354) yeni
bir kilit penceresi açıldı — bu yamadaki kayıtlar BİR SONRAKİ koşuya girecek.

## Teslim

```
32/32 sahiplik-teyidi işlendi
16/16 emilme işlendi
+ 3 ek-iş (Çaçak/Kragujevac/Kythira, ORHANGAZİ M-1364)
= 49 madde, denetim/HUKUM-VERI-SAHIPLIK.json'da hüküm
```

Bekçim açık, sıradaki işi bekliyorum.
