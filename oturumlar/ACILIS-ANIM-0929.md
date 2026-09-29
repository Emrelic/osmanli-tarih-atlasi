# ACILIS-ANIM-0929 — şartname (açılış yükleme animasyonu · UYGULAMA)

> 🔴 OKU: `CLAUDE.md` → `denetim/ACILIS-ANIM-0081.md` (TASARIM HAZIR, yeniden yapma)
> → bu dosya. Model Opus · arayüz işi.

## Durum — bu iş SIFIRDAN DEĞİL

| Katman | Bugün |
|---|---|
| Açılış perdesi | ✅ VAR — `css/style.css:2918-2943`, saf CSS, JS beklemez |
| Dönen küre | ✅ VAR — `html::after`, `kureDon 9s linear infinite` |
| Fırlayan silüet | 🟡 VAR ama tek öğe: `body::before`, 10 silüet × 2 sn, `steps(1)` |
| Silüet üretici | ✅ VAR — `denetim/ARAYUZ-0077-yukleme-silueti.py` |
| **Ölçüm + tasarım** | ✅ VAR — `denetim/ACILIS-ANIM-0081.md` · **kod YAZILMADI** |

🔴 **ACILIS-ANIM-0081 ölçtü ama uygulamadı.** Senin işin o tasarımı KODA çevirmek
ve Emre'nin 29 Eylül'deki genişletmesini eklemek. O raporu **önce oku** — üç
ölçüm aleti de tekrar koşturulabilir durumda (`-zaman-olc.py` · `-govde-olc.py` ·
`-avmac-olc.py`).

## Emre'nin isteği (29 Eylül 2026, aynen)

> *"Dönen bir dünya olacaktı ve dönerken kürenin arkasından haritalar fırlayıp
> ekranda sağa sola serpilecekti. En bilindik en büyük haritalardan başlayarak ve
> tarihteki büyük imparatorlukların haritalarını da fırlatarak, site yüklenirken
> kullanıcının sıkılmaması için. Ayrıca bu haritalardan sonra da büyük devlet
> adamları, en büyükten başlayarak her milletin büyük adamlarından beşer tane —
> Rus Alman İtalyan Fransız Amerikan İngiliz Türk İranlı Mısırlı Çin Hintli — ve
> tarihî simgeler, devletlerin simgeleri armaları site yüklenirken hızlı bir
> şekilde kürenin arkasından etrafa serpilsin. En sona da Türkiye haritasını
> koyarız gerekirse."*

## 🔴 İKİ SERT KISIT — tasarıma başlamadan önce oku

### ① SÜRE ARTIK 4 SANİYE, 24 DEĞİL — ve bu her şeyi değiştirir
29 Eylül'de yükleme **24.539 ms → 4.249 ms**'ye indirildi (paketleme r10521 ·
dönemler kodlama r10522 · tembel yükleme r10525 · petek_govde r10529 ·
altlık gürültü r10531). Perde `atlas-hazir` sınıfıyla kalkıyor
(`app.js:2859` → `style.css:2966`).

🔴 ⇒ **Animasyon yüklemeyi UZATMAMALI.** "Kullanıcı sıkılmasın" diye yazılan bir
animasyon, bugün tam tersini yapar: bitmesini beklemek için siteyi geciktirmek
**4 saniyelik açılışı 15 saniyeye çıkarır** ve bu bir KUSUR olur.
**Kural:** perde `atlas-hazir` gelir gelmez kalkar; animasyon o ana kadar ne
gösterebildiyse onu gösterir, **kuyruğu kesilir, beklenmez.**
⇒ Tasarım "N öğe × M saniye" değil, **"saniyede K öğe, sıra önem sırasına göre"**
olmalı. Erken kesilirse en önemliler görünmüş olur.
📌 Emre'nin *"en bilindik en büyükten başlayarak"* demesi tam bunu mümkün kılıyor.
📌 Ölç ve raporuna yaz: 4,2 saniyede kaç öğe gösterilebiliyor? Sayı, tasarımı belirler.

### ② TELİF — portre ve arma en büyük risk
`CLAUDE.md §1.6`: 8. boyutta görsel **YALNIZ kamu malı / CC0** ve `gorsel_kaynak:`
açıkça yazılır. `§4` kırmızı çizgi: YZ üretimi görsel de kullanılmaz.
```
✅ GÜVENLİ — KENDİ verimizden üretilen SİLÜET
   `devletler_harita.js` · `donemler.js` gövdeleri zaten bizim çıktımız.
   `ARAYUZ-0077-yukleme-silueti.py` bunu yapan aleti ZATEN içeriyor.
   ⇒ Hem bugünkü ülkeler hem TARİHÎ İMPARATORLUKLAR böyle üretilir:
     Roma · Abbâsî · Moğol · Osmanlı · Bizans · Emevî · Timur · Britanya …
     (o günün `donemler.js` gövdesini çek, silüete çevir — telif YOK, ve
      atlasın kendi verisi olduğu için TUTARLI)
🔴 RİSKLİ — portre ve arma
   Devlet adamı fotoğrafı: 20. yy fotoğraflarının çoğu TELİFLİ.
   Devlet arması/bayrağı: birçoğunun kullanımı kısıtlı.
   ⇒ Bunları ARAŞTIRMADAN KOYMA. Her görsel için kaynak + lisans satırı
     `denetim/ACILIS-ANIM-0929-GORSEL.md`ye yazılır; lisansı belirsizse
     KULLANILMAZ ve listeye "bulunamadı" diye geçer.
   📌 Elde hazır olan: `assets/portreler/` 36 padişah portresi (projede
     zaten kullanılıyor) — lisans durumlarını ÖLÇ ve bildir.
   📌 Telifsiz çare: portre yerine SİLÜET/çizgi (kamu malı tablolardan
     türetilmiş) ya da tipografik kart (ad + yıl + millet).
```
🔴 **Devlet adamları kısmı için ÖNCE ÖLÇÜM, SONRA KOD.** Kaç isim için kamu malı
görsel bulunabiliyor? Bulunamıyorsa Emre'ye alternatifi (silüet / tipografik)
tahtadan sor — kendi başına telifli görsel koyma.

## 🔴 Dosya sahipliği

| Dosya | Durum |
|---|---|
| `css/style.css` | **SENİN** (perde bölümü :2893-2971) |
| `js/app.js` | **SENİN — yalnız açılış perdesi kancası** (`:2859` civarı). Başka yerine dokunma; `KRONO-BAGLAMA-0929` app.js'in kronoloji bindirme IIFE'lerinde çalışıyor |
| `index.html` | 🔴 **DOKUNMA** — koordinatörde. Satır gerekirse tahtadan iste |
| `data/acilis_siluet*.js` (YENİ) | **SENİN** — üretilen silüet verisi |
| `denetim/ACILIS-ANIM-0929.md` · `-GORSEL.md` · `ARAC-ACILIS-ANIM-0929-URET.py` | **SENİN** |

## Bilinen kusur — tek satırlık düzeltme, ölçülmüş

`ACILIS-ANIM-0081.md §0`: küre **TERS yönde** dönüyor.
```css
/* bugün */  @keyframes kureDon { to { background-position: -360px 50%, 0 0; } }
/* doğru */  @keyframes kureDon { to { background-position:  360px 50%, 0 0; } }
```
Gerekçe raporda: eşdikdörtgen şeritte batı solda; `0 → -360px` görüntüyü sola
kaydırır ⇒ yüzey sağdan sola akar ⇒ küre doğudan batıya döner. Doğrusu
batıdan doğuya. 🔴 **Ama önce kendin ölç** (`-yon.diff` dosyası hazır duruyor) —
raporu kabul etmeden doğrula (`CLAUDE.md §11`).

## Öteki ölçülmüş eksikler (`ACILIS-ANIM-0081.md` tablosu)
- Silüet **kürenin ÖNÜNDEN** çıkıyor (z-index 9002 > küre 9001) — arkasından çıkmalı.
- Hepsi **aynı noktaya** gelip sönüyor (`translate(150px,-70px)`); "etrafa
  serpilsin, birikmesin" isteği karşılanmıyor.
- 21 künye istenmişti, **10 silüet** var.

## Sıra
```
① ÖLÇ    4,2 sn'de kaç öğe gösterilebilir? Bugünkü perde ne yapıyor? (aletler hazır)
② ÖNGÖRÜ ölçümden ÖNCE yaz (CLAUDE.md §11)
③ SİLÜET üret — bugünkü ülkeler + tarihî imparatorluklar, KENDİ verimizden
④ KOD    yön · z-index · saçılma · sıra (önem sırasına göre, kesilebilir kuyruk)
⑤ GÖRSEL devlet adamı/arma için LİSANS ÖLÇÜMÜ — telifsiz bulunamazsa SOR
⑥ SINA   tarayıcıda: perde 4,2 sn'de kalkıyor mu, animasyon yüklemeyi UZATIYOR mu?
         🔴 Ölçmeden "güzel oldu" deme — `read_console_messages` + süre ölçümü.
```

## Teslim
TEK tahta mesajı, üçlü kural + rapor yolu + commit. Sonuna **"bekçiyi öldürdüm, duruyorum"**
(§7.2 ⑧ 29 Eylül'de değişti; `tahta_bekci.py` yasağı kendisi uygular, çıkış 3).
⚠️ `denetle.py`yi yalnız teslimden önce BİR KEZ koştur (M-5457: tepe 2,4 GB).
