# BULGU — KITA 30: kıyas ölçümü (belgeli hat vs atlasın bugünkü tahmini)

> 1.MURAT'ın yeniden tanımlanan görevi ②: "belgeli hat ile atlasın
> hesapladığı sınır arasındaki en büyük sapma, kayıt başına km."

## 🔴 YÖNTEM — bu bir YAKLAŞIKLIK, motor koşmadı

`arac/uret_petek.py` (koşu 10) donuk, gerçek Voronoi+yaslama+maliyet
yüzeyi bu turda ÇALIŞTIRILAMADI. Onun yerine **ucuz bir vekil ölçüt**
kullanıldı: kapsama kutusu içinde ince bir ızgara (0,1°) örneklenip her
noktanın **en yakın AKTİF yerleşimi** (Değişmez 3 önceliğiyle — d>v>s)
bulundu, o yerleşimin sahibi ile belgenin öngördüğü taraf KARŞILAŞTIRILDI.
**Bu, GERÇEK petek sınırının BİREBİR AYNISI DEĞİL** — Voronoi ağırlıklı
maliyet yüzeyi (eğim/nehir/deniz) ve yaslama (`dogal_hatta_yasla`) hesaba
katılmıyor. Sonuçlar bu yüzden **büyüklük mertebesi** için güvenilir,
**kesin km** için değil — D107 gereği açıkça böyle raporlanıyor.

## SONUÇLAR (4 kayıt — yalnız "cetvel"/"paralel" türü, "hat" taşıyanlar;
## nokta-kumesi/yer kayıtları için "sapma km" kavramı ANLAMSIZ, ayrıca not)

```
kayıt                          tarih        örnek  uyuşmayan  EN BÜYÜK SAPMA
midye-enez-1913                1913-06-10   1000   249 (25%)   149,8 km
ii-erzurum-sattularap-1847     1850-01-01    750   421 (56%)   253,1 km
misir-sudan-22-paralel-1899    1905-01-01   5200  1883 (36%)   222,4 km
karlofca-bosna-sava-1699       1750-01-01    180    32 (18%)    40,4 km
```

### 🔴🔴 İKİ ÖLÇÜM HATASI BULUNDU VE DÜZELTİLDİ (kayıtta duruyorlar)

**① İşaret hatası — karlofca-bosna-sava-1699.** İlk ölçüm **%94,4**
uyuşmazlık verdi (150+ örnek), aşırı yüksek göründüğü için sınandı: sebep
gerçek bir sapma değil, `nokta_dizisi`nin yanlış SIRADA yazılmasıydı.
app.js'in `_cKayitGeometrisi`si SABİT bir kural kullanıyor (negatif
cross → taraflar[0], pozitif → taraflar[1], `yon_kurali` STRINGİ hiç
okunmuyor) — bu kural nokta_dizisi'nin A→B YÖNÜNE bağlı, ve ilk yazımda
(Bosut→Brod sırası) güney/Bosna tarafı YANLIŞLIKLA taraflar[1]
(habsburg) çıkıyordu. Sıra `data/hukuki_sinirlar.js`te DÜZELTİLDİ
(Brod→Bosut), oran %94,4 → %57,2'ye düştü.
📌 **Ders (yeni, D-aday):** *"C kaydı yazarken nokta sırası tarafsız bir
detay değildir — sabit işaret kuralıyla birlikte test edilmeden
yazılmamalı."* Her yeni hat kaydı, en az iki bilinen noktayla (§8.5
sınav deseni) DOĞRULANMALI, yoksa render SESSİZCE ters taraf boyar.

**② Kimlik takma adı hatası — kıyas scriptinin kendi kusuru.**
`data/yerlesimler*.js` ailesi Habsburg Avusturya'yı **169 kayıtta**
`d:"avusturya"` diye yazıyor, **0 kayıtta** `d:"habsburg"` — oysa
`devletler.js`nin künye id'si `"habsburg"` (`harita:"avusturya"`). C
kaydının `taraflar:["osmanli","habsburg"]` alanı DOĞRU (devletler.js id
konvansiyonu, öteki kayıtlarla tutarlı) — YANLIŞ olan kıyas scriptinin
karşılaştırmasıydı (`"habsburg" != "avusturya"` hep TRUE çıkıyordu).
Script `devletler.js`nin `harita:` alanına göre normalize edecek
şekilde düzeltildi, oran %57,2 → **%17,8**'e düştü (gerçek sayı budur).
📌 Bu, `_cTarafRengi`nin RENK için zaten düştüğü aynı tuzağın (§②
"mevcut katman ölçümü" raporu) bir de ÖLÇÜM tarafındaki yüzü — id/harita
ikiliği yalnız görseli değil, her türlü karşılaştırmayı bozabiliyor.

### ⚠️ ÖNEMLİ OKUMA NOTU — en büyük sapmalar KUTU KÖŞELERİNDE

Üçünün de "en büyük sapma" örneği **kapsama kutusunun bir köşesinde**
çıktı (ör. midye-enez'de lat 42,00/lon 25,50 — kutunun tam kuzeybatı
ucu). Bu köşelerde "en yakın aktif yerleşim" 12-380 km öteden geliyor —
yani **vekil ölçütün kendisi o bölgede zayıf** (nokta seyrek), gerçek
motorun oraya ne çizeceğini GÜVENİLİR TAHMİN ETMİYOR. Bu, C'nin M-3480
kararıyla "doğal sınıra kadar cömertçe" genişletilen kutularının **bir
maliyetini** somutlaştırıyor: geniş kutu = köşelerde daha seyrek veri =
vekil ölçütün güveni düşüyor tam orada.

⇒ **Daha güvenilir sinyal `%uyuşmayan` oranı**, tek bir köşe sapması
değil: Şattülarap **%56** ile en yüksek — bu, SEMA-C-0911.md §2.4'ün
kendi öngörüsünü (C'nin işi "nokta seyrekliğinin bıraktığı sahiplik
boşluğu") DOĞRULUYOR: bu bölgede (Basra Körfezi/Kuveyt sınırı) nokta o
kadar seyrek ki basit en-yakın-nokta yöntemi bile yarıdan fazla
uyuşmazlık üretiyor.

## NOKTA-KÜMESİ / YER KAYITLARI — kıyas ÖLÇÜLEMEDİ, sebebiyle

`karlofca-lehistan-1699` ve `karlofca-venedik-1699` bir HAT değil,
ayrık nokta ataması taşıyor — "belgeli hat ile hesaplanan sınır arasında
km sapma" sorusu bu ikisi için TANIMSIZ (bölen bir çizgi yok). Bunun
yerine anlamlı soru "bu noktanın BUGÜNKÜ atlas ataması belgeyle uyuşuyor
mu" — HIZLI bir kontrol:
```
Suçava (osmanli atanmış, C) @ 1750  → atlasta zaten "osmanli" (d: dönemi
  var, TDV'nin kendi anlatımıyla tutarlı) — UYUŞUYOR, C'ye ihtiyaç YOK
Bar/Podolya (lehistan, C) @ 1750    → atlasta "lehistan" — UYUŞUYOR
Ayamavra (venedik, C) @ 1750        → atlasta "venedik" (s: dönemi
  1715-1718 arası) — UYUŞUYOR
Trebinye (venedik, C) @ 1750        → atlasta VENEDIK MI kontrol
  edilmedi (ÖLÇÜLEMEDİ — zaman sınırı, bir sonraki tur)
```
Yani ölçülen 3/4 nokta zaten TUTARLI — bu iki C kaydının asıl değeri
sayısal düzeltme değil **belge referansı/gösterim** (kullanıcı "bu
noktanın hangi antlaşmayla bu tarafa geçtiğini" görsün).

## NE İSTİYORUM
Bu dört sayı (149,8 · 253,1 · 222,4 · 40,4 km + %25/%56/%36/%18
uyuşmazlık — ikisi düzeltilerek) koşu 11'in önceliğine girdi olsun
istiyorsan **Şattülarap en yüksek öncelik** (en yüksek uyuşmazlık oranı,
gerçek nokta seyrekliği); **karlofca-bosna-sava en düşük öncelik**
(%18, nispeten yoğun nokta). Kesin sayı için motor gerekiyor — bu
yalnız bir SIRALAMA sinyali, KARAR SENDE.
