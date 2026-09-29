# ACILIS-ANIM-0929 — açılış yükleme animasyonu · UYGULAMA

**29 Eylül 2026 · işçi: ACILIS-ANIM-0929 (Opus) · koordinatör: YILDIRIM BAYEZIT**
Tasarım: `denetim/ACILIS-ANIM-0081.md` (yeniden yapılmadı). Görsel lisans defteri:
`denetim/ACILIS-ANIM-0929-GORSEL.md`.

## 0. Öngörü — ölçümden ÖNCE yazıldı (§11) ve sonucu
Sınav anı: 29 Eyl 2026, yayın damgası `r10534`, yerel `py -m http.server 8765`,
headless Chrome, önbellek kapalı, 1400×900.
| öngörü | ölçüm | tuttu mu |
|---|---|---|
| FCP 0,5-1,5 sn | yazılım GPU'su 2,4-4,2 sn · gerçek GPU 1,0-2,2 sn | ✗ yazılımda daha geç |
| `atlas-hazir` 4-8 sn | yazılım 13-17 sn (rAF) · gerçek GPU 9,5-10,8 sn (rAF), 4,6-6,0 sn (işaret) | ✗ daha geç |
| uzun görev perdenin %40-70'i | yazılımda %76-84 (9,6/12,6 · 10,1/12,0 sn) | ✗ daha kötü |
| en uzun tek görev 1-3 sn | 6,8 / 7,2 sn | ✗ |
| yön ters | ✓ doğrulandı (aşağıda) | ✓ |

⚠️ **İki "hazır" anı var, ikisini ayırmak ŞART:** `atlas-hazir` sınıfı JS'te
eklendiği an (yeni `performance.mark("atlas-hazir")`) ile ekranda perdenin kalktığı
ilk kare (rAF) arasında **4-6 sn** var: sınıf eklendikten sonra `aktifDonem` ilk
çizimi uzun bir görev yapıyor, perde o kare çizilene kadar görünür kalıyor.
Koordinatörün "4.249 ms"si büyük ihtimalle ilk ölçüye (işaret) denk düşüyor.
Bu makinede gerçek GPU ile işaret **4,6-6,0 sn**, ekrandan kalkış **9,5-10,8 sn**.
Yan bulgu (kapsam dışı): perde kalktığında siyasî katman henüz çizilmemiş olabiliyor
(sınav görüntüsü: altlık var, devlet renkleri yok).

## 1. Ölçüm — bugünkü perde (sınav öncesi)
`ACILIS-ANIM-0081-zaman-olc.py`, yazılım GPU'su, 2 koşu: FCP 4,2/2,7 sn · perde
12,6/12,0 sn · perde süresince ana iş parçacığı kilidi 9,6/10,1 sn (**%76-84**) ·
perde boyunca yalnız 31/12 rAF karesi. ⇒ Bugünkü `background-position`/
`background-image` canlandırması perdenin çoğunda fiilen DONUK.

**Yön — kendim ölçtüm:** `denetim/ARAYUZ-0077-yukleme-silueti.py` kara şeridini
`x + 180` ile çiziyor (batı solda). `0 → -360px` resmi sola kaydırır ⇒ yakın yüzey
sağdan sola ⇒ doğudan batıya = TERS. Rapor doğru. Düzeltildi (yedek CSS'te de).

## 2. Ne yapıldı
| Dosya | Değişiklik |
|---|---|
| `data/acilis_siluet.js` (YENİ, 66,6 KB · gzip 26,2 KB) | `window.ACILIS_SILUET` verisi (ÜRETİLİR) + kurucu IIFE (elle): `#acilis` kabı, dönen küre, 28 silüet, Türkiye finali, `window.acilisBitir()` |
| `denetim/ARAC-ACILIS-ANIM-0929-URET.py` (YENİ) | silüet üretici: 14 Natural Earth + Osmanlı 1600 + 13 atlas imparatorluğu; 177 MB'lık `devletler_harita.js`i öğe öğe tarar (8 sn, RAM dostu) |
| `css/style.css` | `kureDon` yönü düzeltildi (yedek perde) · `#acilis` stilleri · `html.acilis-js` yedeği söndürür · `atlas-hazir` emniyet solması |
| `js/app.js` (yalnız açılış kancası, +4 satır) | `performance.mark("atlas-hazir")` + `window.acilisBitir()` çağrısı |
| `denetim/ACILIS-ANIM-0929-sina.py` · `-sinav-kur.py` | A/B sınav aleti · index.html'e DOKUNMADAN sınav sayfası kurar |

**Tasarım kararları (hepsi ölçüme dayanıyor):**
- Canlandırma YALNIZ `transform`/`opacity` (Web Animations) → bileşik katman; ana iş
  parçacığı kilitliyken de akar.
- **Önem sırası = gösterim sırası, kuyruk KESİLİR:** Osmanlı (1600) · Rusya ·
  Britanya (1900, dünya zemininde) · Çin · ABD · Rus Çarlığı · Hindistan · Safevîler ·
  Kanada · Babür · Brezilya · Timurlular · Avustralya · Av-Mac · Almanya · Qing ·
  Fransa · İspanya (dünya) · İran · Memlükler · Mısır · Altın Orda · Birleşik Krallık ·
  İlhanlılar · İtalya · Alman İmp. (dünya) · Lehistan-Litvanya · Ming. **Türkiye EN SONA:**
  perde kalkarken 520 ms'lik finalde (tıklama engellenmez, `pointer-events:none`).
- 230 ms'de bir öğe, 900 ms uçuş. Silüet kürenin ARKASINDAN (z 1 < küre z 2) çıkar,
  **kendi hedefinde KALIR** (serpilme). Hedef: aday ızgarasında açgözlü en-uzak-nokta
  (küre ve alt yazı dışlanır).
- `prefers-reduced-motion`: uçuş/dönüş yok, silüetler YERİNDE sırayla belirir (opaklık).

**4,2 sn'de kaç öğe?** — kurucu ~0,3 sn'de iş başı yapıyor (`acilis-kuruldu`),
öğe 230 ms'de bir ⇒ **(4,2 − 0,3) / 0,23 ≈ 17 öğe fırlamış, ~13'ü yere inmiş olur.**
Bu HESAPTIR; perdenin gerçekten ekrandan kalktığı an (rAF) bu makinede gerçek GPU ile
9,5-10,8 sn ⇒ orada 28'in tamamı görünüyor.

## 3. Yüklemeyi UZATIYOR mu — A/B (A = bugünkü index · B = + `acilis_siluet.js` satırı)
🔴 **Tuzak, bir kez düşüldü:** bu makinede Windows animasyonları KAPALI
(`MinAnimate 0`), Chrome `prefers-reduced-motion: reduce` bildiriyor. İlk A/B
turlarım farkında olmadan HAREKETSİZ kipi ölçtü. Sınav aleti artık kipi
`Emulation.setEmulatedMedia` ile AÇIKÇA seçiyor (varsayılan tam hareket, `--az`).

**Gerçek GPU (Intel UHD 620, D3D11), tam hareket, 5 çift** — yükleme hatası olan
çift (yerel sunucu bağlantı reddi) atıldı, 4 geçerli:
| | FCP (perde görünür) | işaret `atlas-hazir` | perde ekrandan kalkar (rAF) |
|---|---|---|---|
| A | 2,0 · 1,8 · 1,8 · 1,2 sn | 6,0 · 5,2 · 5,6 · 4,6 | 10,8 · 10,2 · 9,9 · 9,5 |
| B | 0,8 · 0,5 · 0,6 · 0,5 sn | 5,6 · 4,9 · 5,2 · 4,6 | 9,5 · 10,7 · 9,3 · 9,9 |
⇒ **Uzatmıyor** (ortanca rAF A 10,0 · B 9,7 sn; fark gürültü içinde). **Perde ~1,2 sn
DAHA ERKEN görünüyor** (FCP ortanca 1,8 → 0,6 sn).

**Yazılım GPU'su (SwiftShader) — en kötü durum: hüküm VERİLEMEDİ.** Tam hareketli
tek geçerli çift A 50,5 · B 27,5 sn (makine o sırada ağır yük altında; öteki turlar
zaman aşımı/bağlantı reddi). Önceki 5 çiftlik tur (farkında olmadan HAREKETSİZ kip,
gölge kaldırılmış): A ortanca 14,4 · B 15,4 sn ⇒ **+~0,9 sn**. GPU'suz makinede küçük
bir bedel OLABİLİR; gerçek GPU'da ölçüldü, gürültü üstünde bir bedel görülmedi.
Hareketsiz kip (`--az`) işlevsel sınandı: 5,5 sn'de 17 silüet .85'te, 18-19 beliriyor,
20+ bekliyor; `atlas-hazir` sonrası `#acilis` DOM'dan kalkmış (0 öğe).

**Maliyeti bulunan ve giderilen iki şey (varyant ölçümü, yazılım GPU'su):**
- CSS `filter: drop-shadow` uçan katmanlarda: **+2,8 sn** (A 14,0/14,1 → B 16,7/17,0).
  Kaldırıldı; gölge SVG'nin içine gömülü (bir kez taranır).
- 60 kare/sn küre dönüşü: `steps(135)` ile saniyede 15 kareye indi.
- Betiğin kendisi (öğesiz, durgun küre): ölçülebilir fark yok (14,5/13,2 vs A 14,0/14,1).

## 4. Açık kalanlar — koordinatör/Emre
1. 🔴 **index.html satırı (koordinatörde):** `<body>`nin HEMEN ardından
   `<script src="data/acilis_siluet.js?v=rNNNN"></script>`. Satır gelene kadar sitede
   görünen tek değişiklik yedek kürenin yön düzeltmesi.
2. 🔴 **Emre'nin makinesinde animasyon HİÇ görünmüyor:** Windows animasyonları kapalı ⇒
   eski perde de yeni perde de "hareketi azalt" kipinde (eski: küre DURUYORDU). Emre'nin
   "dönen bir dünya olacaktı" şikâyetinin büyük olasılıkla sebebi bu. Seçenek:
   (a) tercihe saygı (bugünkü, erişilebilirlik) — Emre yalnız sırayla belirmeyi görür ·
   (b) açılış perdesinde tercihi YOK SAY (tek satır: `AZ = false`) · (c) Windows'ta
   "Animasyon efektleri" açılır.
3. Devlet adamı / arma: tahta M-5470 soruldu (öneri: tipografik kart); cevap yok,
   perdede yok.
4. Şartname düzeltmesi: "Roma · Abbâsî · Emevî" atlasta YOK (en erken gövde 1281).
