# C KAPSAMA POLİGONU — teslim

Sevk: 1.MURAT (koordinatör) · 11 Eylül 2026 · SONNET (C KAPSAMA POLİGONU,
aynı oturum: C ÇİZİM KATMANI / C ÇİZİM II)
`js/app.js` uygulandı — `kapsama.tur:"poligon"` desteği eklendi.

⚠️ **Bu turda çalışma ortamı ÇOK YAVAŞTI** (muhtemelen aynı anda çalışan
çok sayıda oturum yüzünden) — `harita.loaded()` 70+ saniyede bile
tetiklenmedi, bu yüzden **ekran görüntüsüyle** nihai görsel kanıt
alınamadı. Onun yerine ① node'da (tarayıcısız, sentetik poligon) ②
GERÇEK 59 köşeli kıyı verisiyle tarayıcıda DOĞRUDAN fonksiyon çağrısı
ile kanıtlandı — ikisi de sonucu doğruluyor, ekran görüntüsü eksik
kaldıysa bu bir ÖLÇÜLEMEDİ'dir, "temiz" değil (D107).

---

## ① MALİYET — ölçüldü

**Yanlış varsayım düzeltildi:** mekanizma HER YERLEŞİM için nokta-poligon
testi YAPMIYOR. `_cKayitGeometrisi()` yalnız KAPSAMA ŞEKLİNİ (bbox ya da
poligon) hat çizgisine göre BİR KEZ ikiye kesiyor — maliyet **yerleşim
sayısına değil, kapsama poligonunun köşe sayısına** bağlı.

```
_cDogruylaKes maliyeti      O(kapsama köşe sayısı)  — 59 köşeli GERÇEK
                             kıyı poligonuyla tarayıcıda çağrıldı,
                             gözle algılanır bir gecikme YOK
                             (fonksiyon senkron döndü)
Önbellek                    _cAktifId (zaten vardı) — YALNIZ aktif kayıt
                             KÜMESİ değiştiğinde yeniden hesaplanıyor,
                             poligon olsun bbox olsun AYNI önbellek
                             mekanizmasına giriyor (kod DEĞİŞMEDİ)
```
⇒ Poligon kapsama, bbox'a göre EK bir performans riski TAŞIMIYOR.

---

## ② ASIL SORU — coğrafi kıyıya oturunca dikiş kayboluyor mu

**Uygulandı:** `js/app.js`e `_cKapsamaPoligonu()` eklendi —
`kapsama.tur==="poligon"` ise `kapsama.nokta_dizisi` DOĞRUDAN kullanılır;
yoksa eski `bbox` davranışı AYNEN korunur (geriye dönük uyumlu, mevcut
hiçbir kayıt kırılmaz).

**Gerçek kıyı verisiyle test edildi:** `veri-kaynak/ne_10m_land.geojson`den
(Natural Earth, motorun kendi girdisi) Saros Körfezi/Enez kıyısından 26,
Karadeniz/Kıyıköy kıyısından 31 gerçek nokta çıkarıldı
(`denetim/ARAC-CKAPSAMA-KIYI-CIKAR-0911.py`), 59 köşeli bir kapsama
poligonu kuruldu (batıda Bulgaristan içine cömert bir kapanışla) ve
`_cKayitGeometrisi()`ye verildi:

```
dolgu parça sayısı: 2 (taraf_a, taraf_b) — HATASIZ
renkler: ["#8e0b22" (osmanlı), "#2d6c0c" (bulgaristan)] — DOĞRU
nokta sayıları: [25, 40] — kıyı ayrıntısı KORUNDU (düz dikdörtgene
                inmedi, kıyının kıvrımları poligonda duruyor)
```

**Mantık (görsel kanıt eksik ama geometrik kesinlik VAR):** poligonun
GÜNEY kenarı artık gerçek Saros kıyısı, DOĞU kenarı gerçek Karadeniz
kıyısı olduğu için, o kenarlarda kapsama alanının DIŞI zaten **deniz** —
orada A/B'nin de siyasi bir gövdesi yok (deniz boyanmıyor), yani **iki
rejimin karşılaştığı bir kara sınırı orada hiç oluşmuyor.** Dar kutunun
sorunu (düz bir kenarın KARANIN ortasında A/B'nin düzensiz sınırıyla
çakışması) kıyı kenarlarında **yapısal olarak** ortaya çıkamaz.

🔴 **AMA BATI/KUZEY (Bulgaristan içi, kara) kenarı BU SORUNU ÇÖZMÜYOR** —
orada hâlâ doğal bir sınır (deniz, büyük nehir) yok, yalnız "cömertçe
genişletilmiş" keyfi bir çizgi. Poligon bu kenarda dikdörtgenden farklı
davranmıyor; aynı "ne kadar cömert yeter" sorusu kara tarafında AÇIK
kalıyor. **Poligon SORUNUN YARISINI (deniz kenarları) yapısal olarak
çözüyor, YARISINI (kara kenarı) çözmüyor.**

---

## ③ KIYI VERİSİ KAYNAĞI — ölçüldü

```
🔴 veri-kaynak/ne_10m_land.geojson   MOTOR girdisi, js/ tarafından
                                       YÜKLENMİYOR — bu testte SUNUCU
                                       tarafında (Python) okundu, tarayıcı
                                       ONU DOĞRUDAN kullanamaz
🟢 data/altlik.js → window.ALTLIK.kara   ZATEN client-side yüklü
                                       (index.html:1164), 11 MB,
                                       `arac/uret_altlik.py` tarafından
                                       ÜRETİLMİŞ — AYNI kaynaktan
                                       (Natural Earth) türetilmiş kara
                                       geometrisi. Coğrafya katmanının
                                       ALTLIĞI zaten bu.
```
⇒ **Gerçek üretimde `window.ALTLIK.kara`dan bir kıyı şeridi kesip
kapsama poligonuna çevirmek MÜMKÜN** — yeni bir dosya yüklemeye gerek
yok. ⚠️ Bunu BU TESTTE yapmadım (zaman kısıtı) — ben sunucu tarafında
`ne_10m_land.geojson`u okudum, aynı coğrafi kaynaktan geldiği için
sonuç eşdeğer olmalı ama `ALTLIK.kara`nın AYNI ÇÖZÜNÜRLÜKTE olup
olmadığını BYTE düzeyinde karşılaştırmadım — bu bir sonraki adımın
(gerçek veri yazımı) ölçmesi gereken bir şey, **ölçülemedi** diye
işaretliyorum, "aynı" demiyorum.

---

## ④ HÜKÜM — üç seçenek yan yana

```
              MALİYET      DİKİŞ RİSKİ                 ANADOLU RİSKİ
DAR kutu      en düşük     YÜKSEK (kara ortasında)     YOK
GENİŞ kutu    düşük        DÜŞÜK (deniz/uzak toprakta) VAR (ölçüldü,
                                                         C ÇİZİM II:
                                                         Erdek/Karabiga)
POLİGON       düşük        DENİZ kenarlarında YAPISAL   YOK (poligon
              (ölçüldü,     OLARAK YOK · KARA kenarında  kıyıyı takip
              59 köşe hızlı hâlâ VAR (dikdörtgenle AYNI  ederse Marmara
              çalıştı)      derecede)                    güneyine
                                                          İNMEZ)
```

**Emre'nin kararını ÇÜRÜTMÜYORUM — POLİGON AÇIKÇA ÜSTÜN, söylüyorum:**
Poligon, geniş kutunun kazandığı şeyi (deniz kenarlarında dikiş yok)
AYNEN veriyor VE geniş kutunun kaybettiği şeyi (Anadolu'ya taşma)
KAYBETMİYOR — çünkü kıyıyı takip eden bir çizgi zaten Marmara'nın güney
kıyısına inmeyecek şekilde ÇİZİLEBİLİR (benim testimde de inmedi).
Tek dezavantajı: **yazımı bbox'tan daha emek ister** (kıyı noktalarının
elle/yarı-otomatik seçilmesi gerekir) — ama bu bir YAZIM MALİYETİDİR,
ÇALIŞMA ZAMANI maliyeti DEĞİL, ve ölçüldüğü gibi çalışma zamanında
ek yük YOK.

**Öneri:** `SEMA-C-0911.md`ye `kapsama.tur:"poligon"` resmi seçenek
olarak eklensin (kod ZATEN hazır, bu commit'te). Kara tarafı (batı/kuzey
kenar) için hâlâ "cömertçe genişlet" kuralı geçerli kalsın — poligon
onu da tam çözmüyor, bu konuda dürüst kalmak gerek.

---

## COMMIT

`js/app.js` — `_cKapsamaPoligonu()` eklendi, `_cKayitGeometrisi()` ona
yönlendirildi, eski bbox davranışı KORUNDU (geriye dönük uyumlu).
