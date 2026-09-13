# MOTOR-HIMAYE — `d.h` himaye gövdeleri + gevşek açık ton (14 Eylül 2026)

Sevk: 1.MURAT · Emre kararı 13 Eylül, kutu 0043/H-0003, seçenek D (Kırım bozkırı üç ton).
Commit ATILMADI. Veri dosyalarına yazılmadı. `arac/renkler.py`ye dokunulmadı.

## ① ÖLÇÜLEN BAŞLANGIÇ
```
uret_petek.py  'himaye' grep → 0 üretim satırı (d.h üretilmiyordu)          ✓ doğrulandı
app.js         d.h şeması (183-193) · himaye kaynağı + 3 katman · parcaCoz(hb.g)  ✓ hazır
girdi.py       BILINEN_DONEM_ALANLARI: 'statu' VAR · 'himaye' YOKTU
               (VERI-YAPISI.md alanı 2 Eylül'de tanımlamış, sözlük geride kalmış)
app.js         STATU_YAZI: 'gevsek' YOKTU
GERÇEK VERİ    v:[himaye:true] 0 · statu:"gevsek" 0 · 3818 yerleşim (girdi.yukle)
motor koşusu   yok (süreç listesinde uret_petek.py yok)
```

## ② DEĞİŞEN SATIRLAR
```
arac/uret_petek.py  +143 −1
   4889-5004  HIMAYE_GEVSEK_RENK="#e8a2aa" · _HIMAYE_SAYAC · _HIMAYE_VAR
              himaye_gruplari() · himaye_imza() · himaye_govdeleri()
   5081-5085  anahtar = (dogrudan, tabi, himaye_imza(_him_grup))
   5236-5249  kayit["h"] — yalnız boş değilse
   5720-5726  bilanço satırı (SIFIR olsa da basılır)
js/app.js           +19 −1
   194-197    şema notu: motor artık üretiyor
   703-708    STATU_YAZI "gevsek": "gevşek tâbi"
   1956-1964  lejant: "Gevşek himaye (Nogay bozkırı gibi)" — açık dolgu + iki parçalı şerit örneği, tarama YOK
arac/girdi.py       +13 −1
   978-990    statu açıklamasına 'gevsek' · BILINEN_DONEM_ALANLARI'na 'himaye'
css/style.css       değişmedi (örnek inline stil)
```

## ③ MOTOR KURALI
```
grup   `a` gününde tâbi kümesinde (EKLEYİCİ KAPI indeksleri hariç — v: dönemi yok) himaye:true
       dönemi açık olanlar; anahtar (kid || k || "__adsiz__", renk)
renk   statu:"gevsek" → #e8a2aa
       yoksa BOYALAR[kid] → yoksa künyenin harita: anahtarı (s: düşüşüyle aynı, YOL A') → yoksa null
geom   ( delikleri kapalı ∪grup petekleri ∩ gt ) − ∪(gruba ait OLMAYAN tâbi petekler) − önceki gruplar
       · gt = motorun son tâbi gövdesi ⇒ d.h ⊂ d.v, doğrudan enklav girmez
       · gt'nin doldurduğu peteksiz delik himayeye katılır, içerideki himayesiz tâbi yutulmaz
       · gövdeler üst üste binmez
       · kodlama d.v ile AYNI havuz: havuza(mp_koord(hg), OSM_HALKA…OSM_PARCA_IX)
anahtar üçüncü öğe = frozenset(grup→üyeler); grup, üye ya da renk değişince YENİ DÖNEM
```
⚠️ Bilinen sınır: B2 köprüsü (`_kt`) grup peteğine değmiyorsa himaye gövdesine katılmaz; o kısa kenarda şerit köprünün iç tarafından geçer.
⚠️ `don_kose_kur` d.h halkalarını saymaz — Osmanlı havuzu seyreltilmediği için etkisi yok (`seyrelt` yalnız DEV havuzu).

## ④ SINAMA — tam koşu YAPILMADI
Motorda küçük koşu yolu YOK (argv yok; env değişkenleri yalnız EGIMSIZ · B23 · PUAN · DOLGU · PARALEL).
⇒ Yeni fonksiyonlar `uret_petek.py`nin KENDİSİNDEN AST ile çekildi (temiz · poligonal · havuza · mp_koord dahil),
sentetik girdiyle koşuldu: `scratchpad/sinav_himaye.py` → **30/30 geçti**.
```
① d.h yokken birebirlik
   himaye yok → grup {} · imza frozenset() · d.h []                          ✓
   2000 adımlık rastgele dizide uzat/yeni-dönem kararı eski (d,t) anahtarıyla   fark 0
   gerçek veride himaye:true 0 ⇒ _HIMAYE_VAR False ⇒ grup taraması hiç koşmaz,
   kayit'e "h" yazılmaz, OSM havuzuna halka eklenmez                       ✓
② gruplama/renk: gevsek → #e8a2aa · eflak → BOYALAR #4db34d · kid yok → harita: düşüşü ·
   kid yoksa k · adsız ve renksiz SAYILDI · pencere dışı gün → grup yok      ✓
③ imza: aynı pencerede eşit · himaye biterse değişir · yalnız statü değişse de değişir  ✓
④ şema: liste · öğe TAM {g,renk} · g = PARCA_HALKA'da geçerli int indeksleri · renk #rrggbb|None ·
   JSON gidiş-dönüş · 3×3 ızgarada gövde 8 hücre (merkezdeki himayesiz tâbi HARİÇ, 1 delik) ·
   d.h ⊂ d.v · üst üste binme 0 · peteksiz delik katıldı (9) · gt dışına taşmadı (7)   ✓
```
🔴 **"d.h yokken donemler.js birebir" gerçek koşuyla ÖLÇÜLMEDİ** (19 saat). Dayanağı yukarıdaki ①
(kod yolu: `_HIMAYE_VAR` False → anahtar üçüncü öğesi sabit `frozenset()`, `h` yazılmaz, havuz değişmez).
Koşu 11 bilanço satırında `Himaye gövdeli dönem (h): 0 … veride himaye:true YOK` görünmeli; veri yaması
koşudan önce inerse sayı >0 olur ve `donemler.js` o dönemlerde bilerek değişir.

Derleme: `py -m py_compile arac/uret_petek.py` 0 · `arac/girdi.py` 0 · `node --check js/app.js` 0.

## ⑤ RENK — dört ton
🔴 Brif CIEDE2000 diyor; `arac/renk_olc.py`de CIEDE2000 YOK. Oradaki iki fonksiyon kullanıldı:
`dE` (CIE76, projenin DE_KOMSU=12 eşiğiyle çağrılan) ve `dE94`. Kendi formül yazılmadı.
```
dıştan içe            Lab L*    komşu çift                  dE76   dE94
#b2384a vassal         42,4
#8e0b22 şerit dış      29,7     vassal ↔ şerit dış          14,9   13,3
#d4707d şerit iç       59,0     şerit dış ↔ şerit iç        34,3   30,1
#e8a2aa gevşek dolgu   73,5     şerit iç ↔ açık dolgu       20,2   15,3
                                vassal ↔ açık dolgu         40,5   32,0
                                osmanlı ↔ açık dolgu        53,3
                                altlık #e8dfc8 ↔ açık       32,4   27,3  (DE_ALTLIK 15)
```
Seçim: L* merdiveni 29,7 → 42,4 → 59,0 → 73,5, aynı kırmızı ailesi (a* 50→27, b* 25→6).
Elenen adaylar: #dd8a95 (şerit içe 10,9 — eşik altı) · #e493a0 (14,1/11,0 — dE94 eşik altı) ·
#e59aa3 (17,0/12,8 — sınırda). Daha açıklar (#eeb6bc+) altlığa yaklaşıyor.

### Ekran ölçümü (yerel sunucu, gerçek app.js, 1600-06-15, z6, SERT kip, dpr 1)
Önce sayfa gizli bölmede HİÇ yüklenmedi (stil yükü requestAnimationFrame'e bağlı, gizli sekmede kare
yok — D118). Çare: rAF → setTimeout, satır içi stil nesnesiyle `harita.style._load`. Sonra gerçek tâbi
gövdenin (Kırım) içine sentetik `d.h` karesi (renk #e8a2aa) kondu, satır `readPixels` ile okundu:
```
d.h VAR  #b2384a×15 | #8e0c22×1 #8e0b22×2 | #bb4c5d×1 (kenar) | #d4707d×2 | #da7f8b×1 (kenar) | #e8a2aa×19
d.h YOK  #b2384a×41            · himaye kaynağı 0 feature (VAR iken 2)
queryRenderedFeatures himaye-dolgu → renk "#e8a2aa"
katman sırası vassal 12 < şerit-dış 13 < himaye-dolgu 14 < osmanli 15 < osmanli-cizgi 16 < şerit-iç 17
```
⇒ Dört ton ekranda ayrık. ⚠️ Sayfa ilk açıldığında YUMUŞAK kip seçiliydi (0,60 opaklık, kesit harmanlı:
dolgu #da9395). Ölçüm için SERT'e alındı, sonra kutu geri çevrildi. YUMUŞAK kipte tonlar harmanlanır —
kipin bilinen bedeli (app.js SIYASI_KIP notu).

## ⑥ denetle.py
```
önce   (00:10:55)  SONUÇ temiz · 249 satır
sonra  (00:15:28)  SONUÇ temiz · 249 satır · FARK 6 satır:
       Değişmez 2   529 → 528 kırılma (0 açık)   ·   2s  1332 → 1331 YABANCI (101 AÇIK)
```
Arada başka işçi `data/olaylar*.js` yazdı (00:13:29) ve `yerlesimler*` 00:07:17'de değişmişti.
A/B (aynı veri, eşzamanlı, 00:17-00:24: bugünkü girdi.py ↔ iki eklemem bellekte geri alınmış):
**248/248 satır, FARK 0.** ⇒ 529→528 / 1332→1331 benim değişikliğim DEĞİL, arada inen veri.
📌 `denetle.py` `uret_petek.py`yi yalnız maske sabitleri için regex'le okur (:3100); o sabitlere
dokunulmadı ve `konum` satırı iki koşuda da aynı ("0 nokta kara maskesinin dışında").

## ⑦ VERİ YAMASI İÇİN NOT (ayrı işçi)
Motor şunu okur: `v:[{f, t, k:"Kırım Hanlığı", kid:"kirim", statu:"gevsek", himaye:true}]`.
`kid` yazılmazsa grup `k` metniyle kurulur; renk yine açık ton (statü belirler). `himaye:true` olmadan
`statu:"gevsek"` yalnız etiket yazısını değiştirir, şerit çizilmez.
