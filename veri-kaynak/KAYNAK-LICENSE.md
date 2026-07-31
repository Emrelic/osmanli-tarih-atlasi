# Kaynak lisansları

⚠️ **Bu dosya 31 Temmuz'a kadar tek satırdan ibaretti: `404: Not Found`.**
Lisans metni indirilirken sunucu hata sayfası döndürmüş, hata sayfası da dosya
diye kaydedilmiş. Yani depoda "lisans dosyası var" görünüyordu ve **içinde
lisans yoktu** — indirme başarısız olduğunu söylemedi, başarısızlığın kendisini
dosyaladı. (COĞRAFYA oturumu buldu.)

---

## Natural Earth — `ne_10m_*.geojson` (4 dosya, 28 MB)

`ne_10m_land` · `ne_10m_rivers` · `ne_10m_lakes` · `ne_10m_geography_regions_polys`

**Kamu malı.** Natural Earth veriyi kısıtlama olmadan kullanıma açar: izin
gerekmez, atıf zorunlu değildir, türev çalışmalar serbesttir ve farklı bir
lisansla dağıtılabilir.

📌 **Bu projede önemli olan tarafı:** kullanıcının şartı *"harita bizim olsun,
kontrolümüzde kalsın."* Kamu malı kaynak bu şartı bozmaz. Buna karşılık
**OSM (ODbL)** ve **OpenTopoMap (CC-BY-SA)** *bulaşıcıdır* — türevi aynı
şartlarla paylaşmaya zorlar. Altlık alternatifi ararken bu ikisi **eleme
sebebidir**; kalite sebebiyle değil, lisans sebebiyle.

⚠️ Yukarıdaki özet **resmî metnin yerine geçmez.** Şartların birebir metni
Natural Earth'ün kendi "Terms of Use" sayfasındadır; bu dosyaya **indirilip
kopyalanmadı**, çünkü bir kez indirme hatası sessizce dosyalandı ve aynı hatayı
tekrarlamak istemiyorum. İndiren kişi, kaydetmeden önce dosyanın gerçekten
lisans metni olduğunu **açıp doğrulasın.**

---

## Esri — altlık karo servisi

`js/app.js` içindeki `World_Physical_Map` karoları **Esri'nin servisinden**
çekiliyor ve **kamu malı değildir.** Esri'nin kullanım şartlarına tâbidir.

🔴 Bu, kullanıcının "kontrol bizde olsun" şartıyla **çelişen tek bileşen.**
Vektörlerimiz bizim ve kamu malı; gördüğümüz zemin başkasının sunucusundan
geliyor. Değiştirilecekse kamu malı bir kabartma rasterine geçilmeli
(Natural Earth'ün kendi raster ürünleri kamu malıdır).

---

## Bu projenin kendi verisi

`data/yerlesimler*.js` · `olaylar*.js` · `devletler.js` · `kimlikler.js` ve
bunlardan üretilen her şey **bu projede yazıldı**. Tarihî içeriğin kaynağı
TDV İslâm Ansiklopedisi maddeleridir ve her kaydın `kaynak:` alanında slug'ı
yazılıdır — alıntı değil, **atıf**.
