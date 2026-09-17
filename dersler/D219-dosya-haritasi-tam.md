# Dosya haritası — tam metin ve bayatlama vakaları

> Kimlik `D219` · `CLAUDE.md §5` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 5. Dosya haritası

```
index.html              Tek sayfa uygulama. Tüm data/*.js buradan script ile yüklenir;
                        yeni bir veri dosyası eklersen BURAYA da satır eklemelisin.
js/app.js               Harita + gün bazlı zaman akışı + paneller + dizinler
css/style.css           Görünüm

data/yerlesimler.js     ⭐ ELLE YAZILAN TEK COĞRAFİ KAYNAK
data/olaylar*.js        Kronoloji ÇEKİRDEĞİ — `denetle.py`nin Değişmez 2 evreni
data/kronoloji*.js      Kronoloji KUYRUĞU — index.html'de bağlı (CANLI) ama
                        `Değişmez 2`nin evreninde DEĞİL. İki kova KASITLI:
                        `§11` *"bu gün zaten var yetmiyor — HANGİ KOVADA
                        olduğu da sorulmalı."*
data/devletler.js       Devletler dizini (künye + `harita:` boya anahtarı)
data/padisahlar.js      Padişah kartları (36 padişah + Fetret + ara dönemler)
data/kisiler.js         Kişi dizini
data/savaslar.js        Savaş · antlaşma · seri · sefer güzergâhı (`SEFERLER`)
data/sehirler.js        Şehir/kale kartları

🔴 **HANGİ DOSYA CANLI — tek doğru kaynak `arac/girdi.py` `GIRDI_DOSYALARI`.**
   Bu satırlar 31 Temmuz'a kadar `yerlesimler_afrika.js`'i "merge bekliyor"
   diye gösteriyordu; **o dosya merge edildi ve 186 nokta taşıyor.** Bayat satır
   bir araştırma oturumunu doğrudan yanılttı: kapsam ölçümünü yalnız
   `yerlesimler.js` üzerinde yaptı, 767 kayıt gördü, gerçek 951'di ve buna
   dayanan üç hüküm eksik çıktı.
   📌 Ders: **ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI okuduğunu da
   doğrulamak gerekiyor.** İki ayrıştırıcı aynı dosyada aynı sonucu verse bile,
   biri eksik dosya kümesi okuyorsa sayı yanlıştır.

🔴 **BU BÖLÜM ÜÇÜNCÜ KEZ BAYATLADI ve üçünde de aynı zararı verdi. Artık
BURADA DOSYA LİSTESİ YOK — tek otorite `arac/girdi.py`nin `GIRDI_DOSYALARI`
sabitidir.**

```bash
py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.GIRDI_DOSYALARI));[print(' ',f) for f in girdi.GIRDI_DOSYALARI]"
```

**7 Ağustos 2026 ölçümü: 29 dosya · 1800 nokta. HEPSİ CANLI.**

⚠️ **Buranın eski hâli `yerlesimler_avrupa.js` · `yerlesimler_asya.js` ·
`yerlesimler_ortaasya2.js` üçünü *"HENÜZ BAĞLANMAMIŞ, merge bekliyor"* diye
gösteriyordu ve *"toplam 951 nokta"* yazıyordu.** Üçü de `GIRDI_DOSYALARI`
içindeydi, yani **canlıydı**; gerçek sayı 1800'dü.

🔴 **Ve zararı ölçüldü — üç ayrı vaka, üçü de aynı kökten:**
```
① 31 Temmuz   yerlesimler_afrika.js "merge bekliyor" diye duruyordu, oysa
              bağlıydı. Bir ARAŞTIRMA oturumu kapsamı yalnız yerlesimler.js
              üzerinde ölçtü, 767 gördü, gerçek 951'di — üç hüküm eksik çıktı.
② 4 Ağustos   aynı bölüm altı sayıda birden bayatladı, üç oturum aynı anda
              o tablodan başladı.
③ 7 Ağustos   RENK 2, 238 pencerelik renk deliğini "kuyrukta, acil değil"
              diye sınıflandırmamı ÖLÇEREK ÇÜRÜTTÜ: 238'in 238'i
              `yerlesimler_asya.js`teydi ve o dosya CANLI —
              yani delik yayının KENDİSİNDEYDİ.
```
📌 **Ve bu bölümün kendi metni zaten şunu söylüyor:** *"ayrıştırıcıyı
doğrulamak yetmiyor, hangi DOSYALARI okuduğunu da doğrulamak gerekiyor."*
Ders yazılıydı; **bayatlayan şey dersin kendisi değil, yanındaki listeydi.**
⇒ Çare yeni bir uyarı satırı değil, **listeyi buradan KALDIRMAK.** Yapıldı.

data/donemler.js        🤖 ÜRETİLMİŞ — ELLE DÜZENLEME.
data/devletler_harita.js 🤖 ÜRETİLMİŞ — ELLE DÜZENLEME.
data/bolgeler.js        🤖 ÜRETİLMİŞ — idarî bölgeler. ELLE DÜZENLEME.

arac/uret_petek.py      ⭐ TEK ÜRETİM BETİĞİ.
arac/renkler.py         Devlet renkleri (BOYALAR) — DSATUR ölçümü
                        ve "kompozit ΔE" uyarısı dosya başında
arac/denetle.py         ⭐ BEŞ DENETİM — üç değişmez + dönem sağlığı + mükerrer madde
arac/surum_damgala.py   index.html'deki ?v=rNN damgasını günceller
arac/uret_donemler.py   ☠️ ESKİ MOTOR — kullanılmıyor, referans için duruyor

🔴 `veri-kaynak/motor_kara.geojson` BİR GİRDİ DEĞİL, ÇIKTIDIR — ve adı
   yanıltıcıdır. ~~`uret_petek.py:2776` onu KOŞUNUN SONUNDA yazar:~~

   > 🔴🔴 **«KOŞUNUN SONUNDA» YANLIŞ — ölçüldü, 7 Eylül 2026
   > (`SINAV-KOSU8-0907`).**
   > ```
   > yazılı     "uret_petek.py:2776 · KOŞUNUN SONUNDA"
   > ÖLÇÜM      satır 2811 · koşunun 70. DAKİKASINDA yazılıyor
   >            (koşu 8: 11:17:46 başladı → dosya 12:27:30)
   > ```
   > ⚠️ **Ve bedeli somut: bir bekçi buna tetik olarak bağlanırsa ON
   > ALTI SAAT ERKEN öter** — ve `§10`un *"bitti sanıp erken haber
   > vermek, hiç haber vermemekten kötüdür"* kuralını tam olarak
   > çiğnetir. Tetik `data/donemler.js` olmaya devam ediyor.
   > 📌 Ve satır numarası da kaymış (2776 → 2811): ***bir dosya
   > numarası, kod değişmese bile komşusu değişince kayar*** — bu belge
   > bugün üç kez satır numarası devretti ve üçünde de ölçüm istendi.

   `unary_union(PETEK_D)` = **motorun ÇİZDİĞİ kara**, Natural Earth'ün
   `unary_union(PETEK_D)` = **motorun ÇİZDİĞİ kara**, Natural Earth'ün
   kara maskesi DEĞİL. Girdi maskesi `ne_10m_land.geojson`dur.
   ⚠️ İkisi AYRIŞIR ve ayrışma KUSUR DEĞİL: ölçüldü (2 Eylül 2026),
   `motor_kara` **A1 yarıçap tavanıyla** biçimlenmiş — kaplama 0-150 km
   bandında %89-100, 200 km'de kırılıyor, 400 km ötesinde **1.694
   hücrenin sıfırı** boyalı. Yani hiçbir petek noktasından ~200 km
   öteye uzanmıyor (`TAVAN_KM` hepsi 200).
   ⇒ Bu dosyayı "kara maskesi" sanmak bir koordinatörü yanılttı:
   `ne_10m_land`in yarısı kadar kara görünce *"maske bayat/dar"* diye
   düşündü, ve *"sadeleştirme"* diye tahmin etti. Bir işçi oturum
   ölçtü, **ikisi de çürüdü** — geçiş tam 200 km'de ve omuzlu, ve
   sadeleştirme düzgün bir mesafe gradyanı üretmez.
   📌 Ve doğru okuma Emre'nin hükmünün kendisi: motor Çang Tang'ı
   **yanlış boyamıyor, HİÇ boyamıyor** — *"devasa boşluklar olacaksa
   olsun."* Dosyanın adı yanlış, davranışı doğru.
   🔜 BORÇ: adı `motor_cizdigi_kara.geojson` olmalı; yeniden adlandırma
   dört aracı (`maliyet.py` · `olc_ekleyici.py` · `uret_altlik.py` ·
   `_enklav_kara.py`) ve `kosu_yayin.py`i bağlar.

veri-kaynak/            ⭐ MOTORUN GİRDİ VERİSİ — Natural Earth kara maskesi, göller,
                        nehirler, dağ sırtları (27 MB). Bunlar olmadan harita
                        ÜRETİLEMEZ. Bir dönem geçici klasördeydi; depoya alındı.
denetim/                Oturum 2 ve 6 bulgu raporları
oturumlar/              Ayrı oturumlara verilen görev tanımları ve ilerleme notları
assets/portreler/       36 padişah portresi (kamu malı, Wikimedia)

CLAUDE.md               Bu dosya — nasıl çalışılır
YOL-HARITASI.md         Beş eksen, fazlar, bağımlılıklar
YAPILACAKLAR.md         Öncelikli iş listesi
MIMARI.md               Petek motoru, çözülmemiş dört yapısal sorun, teknoloji kararları
VERI-YAPISI.md          Şemalar, alan sözlüğü, kaynak seti
```

Alan alan şema açıklaması **`VERI-YAPISI.md`**'dedir; veri yazmadan önce oku.

---
