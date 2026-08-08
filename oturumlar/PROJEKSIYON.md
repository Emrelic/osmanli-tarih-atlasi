# PROJEKSİYON — MapLibre v5 + küre (globe), hibrit

> **Doğuran şikâyet (Emre, 8 Ağustos 2026):** *"Mercator projeksiyonu ve
> bunun handikapı olan ölçek bozulması gözü çok kanatıyor. Rusya mesela dev
> gibi görünüyor olduğunun aksine, kutuplara gidildikçe bozulma artıyor."*
>
> **Karar:** hibrit — *"yakından Balkanlara bakarken Mercator, uzaklaşınca
> küre."*

---

## ⓪ KİMLİK — HADDİN

```
SEN            PROJEKSİYON — arayüz/görünüm oturumu
DEĞİLSİN       koordinatör DEĞİLSİN · veri oturumu DEĞİLSİN
ÜSTÜN          KOORDİNATÖR (Oturum 0)
ALTIN          kimse
YASAKLARIN     🔴 `data/` ALTINA HİÇ DOKUNMA · `arac/` ALTINA HİÇ DOKUNMA
               üretim koşusu BAŞLATMA · künye/renk/nokta YAZMA
```

🔴 **Bu oturum saf bir GÖRÜNÜM işidir.** Atlasın verisine tek bir karakter
dokunmayacak. Sebebi ölçülmüş: 8 Ağustos'ta bir koşu, `arac/renkler.py`
koşu sırasında değiştiği için **83 dakika sonra öldü.** Görünüm işi veri
işiyle karışırsa hangi kusurun nereden geldiği ayırt edilemez.

## ① NİÇİN VARSIN — ölçülmüş

```
bugünkü sürüm   maplibre-gl@4.7.1   (index.html:7 ve :276)
                → yalnız Mercator, küre YOK
v5              projection: { type: 'globe' }
                → küre, VE yakınlaşınca kendiliğinden Mercator'a geçiyor
```
Mercator 60-70°K'de alanı **4-8 kat** şişirir. Atlasın penceresi **82°K**'ye
kadar çıkıyor ve bugün Sibirya'ya nokta yazılmaya başlandı — yani bozulma
büyüyen bir sorun, küçülen değil.

## ② İŞİN — sırayla

```
① ÖNCE ÖLÇ: v4 → v5 arasında BİZİ ilgilendiren kırıcı değişiklikler neler
   kullandığımız yüzey: Map · Marker · NavigationControl · addSource ·
   addLayer · setPaintProperty · fitBounds · flyTo · GeoJSON kaynakları
   ⚠️ Ölçmeden yükseltme YAPMA — listeyi çıkar, sonra başla

② AYRI DALDA yükselt: `git switch -c projeksiyon`
   index.html:7 (css) ve :276 (js) → maplibre-gl@5.x

③ HİBRİT DAVRANIŞI KUR
   varsayılan: küre · yaklaşınca Mercator (v5 bunu kendiliğinden yapıyor)
   ⚠️ Eşiği ÖLÇ: hangi zoom'da geçiyor, Balkanlar'a bakarken Mercator mı
   VE bir DÜĞME koy: ☰ Butonlar içine "🌐 Küre / 🗺 Düz" — kullanıcı
   zorlayabilsin. Tercih `localStorage`da kalsın.

④ HER KATMANI GÖZDEN GEÇİR — liste §③'te
```

## ③ 🔴 SINANACAK KATMANLAR — hepsi tek tek, gözle

Bu atlasın haritası sade değil; **küre üzerinde bozulabilecek yedi şey var:**

| ne | nerede | niçin riskli |
|---|---|---|
| devlet gövdeleri | `donemler.js` · `devletler_harita.js` | 20 MB poligon; küre kenarında kırpılma |
| **veri sınırı dikdörtgeni** | `btn-verisiniri` | 🔴 **DÜZ BİR KUTU** — kürede EĞRİ olmalı, yoksa yalan söyler |
| motor hatları | `btn-motorhat` — nehir/sırt | çizgi katmanı, küre kenarında bozulabilir |
| coğrafya katmanı | `btn-cografya` | kendi altlığımız |
| devlet etiketleri | `maplibregl.Marker` × N | 🔴 marker'lar kürenin ARKASINDA kalabilir |
| bölge etiketleri | aynı | aynı |
| bölge seçici | `#bolge` → `fitBounds` | kürede fitBounds başka davranır |

⚠️ **En riskli ikisi işaretli.** Veri sınırı dikdörtgeni kürede düz çizilirse
kullanıcıya **yanlış bir sınır** gösterir — ve o düğme zaten *"burası neden
boş"* sorusunu cevaplamak için kondu; yanlış çizilirse işlevini kaybeder.
Marker'lar da kürenin arka yüzünde görünürse etiketler **birbirine geçer.**

## ④ BİTİŞ ÖLÇÜTÜ — gözle DEĞİL, ekran görüntüsüyle

```
① dünya görünümü: Rusya ve Afrika'nın oranı — Mercator'la YAN YANA ekran görüntüsü
② Balkanlar zoom: Mercator'a geçti mi, hangi zoom'da
③ yedi katmanın yedisi de çalışıyor — HER BİRİ İÇİN ayrı ekran görüntüsü
④ veri sınırı dikdörtgeni kürede EĞRİ mi
⑤ konsol hatası: 0
⑥ ilk yükleme süresi: v4 ile v5 KARŞILAŞTIRMALI (küre daha pahalı olabilir)
```

🔴 **Ve bir şeyi ölçmeden bitirme:** Chaikin ile yumuşatılmış sınırlarımız
kutup yakınında küre üzerinde **farklı** görünebilir. Sibirya kıyısını
(70-80°K) özellikle kontrol et ve ekran görüntüsü al.

## ⑤ HABERLEŞME

`mcp__ccd_session_mgmt__send_message` ile koordinatöre. Kendi pencerene
yazmak **hiç cevap vermemekle aynıdır.**
```
AÇILINCA     "açıldım, dal açtım, şu dosyalar bende"
AKSAKLIK     BEKLETME — v5 bir şeyi kırıyorsa HEMEN söyle, kendi başına çözme
BİTİNCE      ekran görüntüleriyle
```

⚠️ **Dal birleştirilmeden yayına girmez.** `main`e sen değil koordinatör alır.

## ⑥ VE BİR ÖNERİ: ÜCRETSİZ BİR KAZANÇ

Yükseltme yaparken lejanttaki **≈km² yüzölçümü** rakamını daha görünür yap.
Motor onu zaten hesaplıyor. Küre gelse de gelmese de, **rakam yanlış
okumayı kesin olarak keser** — Rusya dev görünse bile kullanıcı gerçek
sayıyı okur. Maliyeti sıfır, faydası projeksiyondan bağımsız.
