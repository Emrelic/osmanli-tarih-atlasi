# BULGU — OPUS HAZIR KITA 128 · kırmızı satırların kökeni

> Sevk: `1.MURAT` · M-2201 · `oturumlar/DAGITIM-0902-AKSAM.md` bölüm ①
> Kapsam sevkte **daraltıldı**: `4` çözüldü (aşağıda), `2i` OK122'de,
> `4c` OK127'de. Bana kalan: **`1b`** ve **§1.5 tablo farkı**.
> Oturum cinsi: ÖLÇÜM — rapor yazar, **düzeltmez**. Hiçbir veri dosyasına
> yazılmadı; `arac/*.py` yalnız **okundu** (koşu PID 27596 canlı).

---

## ⓪ TABANIM — devralmadım, kendim koşturdum

`py arac/denetle.py` · çıkış kodu **1**
Taban: `girdi.GIRDI_DOSYALARI` **69 dosya / 2663 nokta** (kendim ölçtüm).

```
🟢 1  ✓ 2663 yerleşim, 219 sahipsiz     🟢 2   ✓ 534 kırılma, 0 açık
🟢 1c ✓ belgesiz 7 (tavan 7)            🟢 2s  ✓ 994 · 75 açık (tavan 121)
🟢 2t ✓ kırılmasız madde 18 (tavan 42)  🟢 konum ✓ 0
🔴 1b   BEYANSIZ boşluk 1 (beklenen 0)  ← BENDE
🔴 2i   26 kırılma / 4 açık (tavan 3)   ← OK122'de
🔴 4    12 hayalet (beklenen 8)         ← ÇÖZÜLDÜ (§②)
🔴 4c   286 (beklenen 280)              ← OK127'de
🔴 Ek   mükerrer madde: 2 şüpheli çift  ← sevkte YOK, ben ekledim
```

**PAKET-0035-0902'nin M-2162 ölçümünü bağımsız olarak DOĞRULADIM** —
sekiz sayının sekizi birebir aynı. İki ayrı oturum, iki ayrı koşu, aynı sonuç.
Ve sayılar 15:21'den beri oynamadı ⇒ arada o sayaçlara dokunan bir şey inmemiş.

---

## ① `1b` — BEYANSIZ pencere arası boşluk 1 · **NE · KİM · CİNS**

### NE — ölçüm

```
Timbuktu   1430-01-01 → 1468-01-01   13.879 gün sahipsiz
dosya      data/yerlesimler.js       (16,775 / -3,009 · k:1 · tur:sehir)
kayıt      s: mali-imparatorlugu 1281-01-01 → 1430-01-01
              songhay-imparatorlugu 1468-01-01 → 1591-04-13
              fas                   1591-04-13 → 1700-01-01
           kaynak:"tinbuktu"  ·  d:[]  ·  bos: YOK  ·  neden: YOK
```

🔴 **SEVKİN BİR ÖNCÜLÜ ÇÜRÜDÜ.** Şartname *"`denetle.py` beyanlı 3'ü
basıyor ama BEYANSIZ 1'i basmıyor, ONU BUL"* diyordu.
**`denetle.py` onu ADIYLA basıyor** — beyanlı üçü 🟢 ile işaretliyor,
dördüncüyü işaretsiz bırakıyor. `--ayrinti` gerekmedi.
⇒ Kalem "bulunamadı" değil, **zaten basılıydı**.

### KİM — ölçüm

Boşluk **kaza değil**; ölçülmüş, kaynaklandırılmış ve **bilerek** bırakılmış.
Kaydı `data/yer_yama_ok107.js` içinde, **H-0013** damgalı, sahibi
**OPUS HAZIR KITA 107**. Emre'nin *"haritanın güneybatısındaki küçük
boyamanın sebebi nedir"* sorusundan doğmuş (görsel 1513-09-01).

O kaydın kaynağı TDV `tinbuktu` maddesi, gövdesi okunmuş, alıntısı yazılı:

> "Tinbüktü 1430'da Tevârikler'in eline geçti ve 1468 yılına kadar
> onlarda kaldı."

⇒ Boşluk **tam olarak Tevârik (Tuareg) dönemidir** ve iki ucu da komşularıyla
hizalı (Valata `mali → 1430` · Gao `songhay → 1591-04-13 → fas`).

🔴 **VE ASIL BULGU — YAMANIN YARISI İNDİ, YARISI DÜŞTÜ.**
Yama kaydı **altı alan** taşıyor; `yerlesimler.js`teki canlı kayıtla
karşılaştırdım:

```
s:       ✓ İNDİ   üç dönem birebir aynı
kaynak:  ✓ İNDİ   "tinbuktu"
bos:     ✗ DÜŞTÜ  "veri-yok"
neden:   ✗ DÜŞTÜ  "kunye-yok — IKI ARALIK bilerek bos … Tuareg icin
                   devletler.js'te kunye YOK …"
not:     ✗ DÜŞTÜ  "H-0013 · …"
```

**Mekanizmayı koda bakarak ölçtüm** (`arac/_sahiplik_uygula.py`, salt okuma):

```
satır 318  ALAN_RX        = d · s · v · isg          ← dizi alanları
satır 342  SKALER_ALANLAR = m · kaynak               ← skaler alanlar
satır 347  assert CATISABILIR == {d,s,v,isg} | SKALER_ALANLAR
```

`bos:` ve `neden:` **hiçbir kümede yok** ⇒ uygulayıcı onları **yazamaz**.
Beyan yazıldı, kaynaklandırıldı, ve **araç tarafından sessizce düşürüldü**.

🟢 **VE OK107 BUNU ÖNCEDEN YAZMIŞ — öngörü TUTTU:**

> "🔴 UYARI: `_sahiplik_uygula.py` yalnız d·s·v·isg·m·kaynak yazıyor;
> aşağıdaki `bos:`/`neden:` alanları **İNMEZ**. Onları dosya sahibinin elle
> koyması gerekiyor — **yoksa Timbuktu yine "beyansız delik" sayılır**."

Bugün `denetle.py` aynen bunu diyor. Uyarı yazıldı, okunmadı, ve öngördüğü
kusur gerçekleşti.

### CİNS — **BİLİNEN BORÇ**, ihlal değil

```
ihlal DEĞİL     veri yanlış değil; iki uç doğru, kaynak okunmuş, gün hizalı
beyan DEĞİL     çünkü beyan VERİYE İNEMEDİ — makine ona soru soramıyor
BİLİNEN BORÇ    beyan yazılı ama YANLIŞ DOSYADA (yamada, veride değil)
```

**Bağımsız doğrulama** (devralmadım): `devletler.js` **438 künye**, Tuareg /
Tevârik / Berber / Sanhâca / Masûfa / Iwellemmedan için **0 eşleşme**.
⇒ OK107'nin *"künye yok"* beyanı **TUTTU**.

📌 Bu, `CLAUDE.md §11`in *"bir ders veriye SERBEST METİN olarak inerse inmiş
sayılmaz"* dersinin **bir kademe ötesi**: burada ders serbest metin değil,
**yapılandırılmış bir alana doğru biçimde yazılmıştı** — ve onu düşüren şey
kaydın kendisi değil **aracın alan kümesi** oldu. `grep` beyanı bulur
(yamada duruyor), `denetle.py` bulamaz (veride yok). *Sessiz atlama, yanlış
sonuçtan pahalıdır.*

---

## ② `4` — 12 hayalet dönem · ÇÖZÜLDÜ (M-2197)

Sevk *"Varşova adayım var ama DOĞRULANMADI, 8+4=12 aritmetik tesadüf
olabilir"* diyordu. **Ölçtüm: tesadüf değil, DOĞRULANDI.**

```
8 hayalet   iran      1281-1510 arası · künye 1925-12-12'de KURULUYOR
                      → bilinen sınıf (§3.5), beklenen 8 BUNLAR
4 hayalet   lehistan  künye 1795-10-24'te BİTİYOR → YENİ dördü
     data/yerlesimler.js        Varşova              1806-11-28 → 1815-06-09
     data/yerlesimler_p0037.js  Lublin               1809-10-14 → 1815-06-09
     data/yerlesimler_p0037.js  Chełm (Kholm)        1809-10-14 → 1815-06-09
     data/yerlesimler_p0037.js  Zamość               1809-10-14 → 1815-06-09
```

Künye tarafı: `lehistan` (1569→**1795-10-24**) ile `polonya` (**1918**→1923)
arasında **123 yıllık dizin deliği**; `varsova-dukaligi` künyesi **YOK**.

**Ölçtüğüm:** dönemlerin veride ne dediği, künye sınırları, dosya konumları.
**Çıkardığım (ölçüm değil):** kırılma günleri doğru seçilmiş görünüyor
(1806-11-28 · 1809-10-14 Schönbrunn · 1815-06-09 Viyana), yanlış olan
**kimlik**.
⚠️ Bu üç tarihi TDV/akademik kaynağa **sormadım**. `ÖLÇÜLEMEDİ`.

📌 `§3.5.1` birebir: *hayalet yok olmadı, TARAF DEĞİŞTİRDİ.* Kanıt
`denetle.py`nin kendi `1b` uyarı metninde: *"Varşova (Varşova Dükalığı
1806-1815 hiç yazılmamış)"* — boşluk biliniyordu, kapatıldı, hayalet doğdu.

---

## ③ ÖLÇEMEDİKLERİM — ayrı kova, "temiz" DEĞİL

```
ÖLÇÜLEMEDİ  Varşova üç tarihinin kaynak doğrulaması (TDV/akademik)
ÖLÇÜLEMEDİ  4c'nin 280 → 286 artışındaki altı kayıt        → OK127'de
ÖLÇÜLEMEDİ  2i'nin dört açığının kökeni                     → OK122'de
ÖLÇÜLEMEDİ  Timbuktu'nun 1700 sonrası ikinci boşluğu (arma/Tevârik);
            OK107 onu da "künye yok" diye bırakmış, ben SINAMADIM
ÖLÇÜLEMEDİ  iki mükerrer maddenin gerçekten ayrı olay olup olmadığı
ÖLÇMEDİM    `1b` boşluğunun git kökeni: `git log -S` 12 MB'lık
            yerlesimler.js üzerinde 2 dakikada bitmedi (zaman aşımı).
            Kökeni git yerine YAMA KAYDINDAN buldum — daha kesin çıktı.
```

---

## ④ SİSTEM BULGUSU — bekçinin adres-tuzağı uyarısı YANLIŞ POZİTİF verdi

`arac/tahta_bekci.py` M-2209 için bana `[ADRES-TUZAGI] KIME='OPUS HAZIR
KITA 12' — benim tam anahtarım 'OPUS HAZIR KITA 128'. Mesaj bana ULAŞMADI`
diye bağırdı. **Ölçtüm: mesaj yerine ULAŞTI** — `OPUS HAZIR KITA 12` gerçek
ve canlı bir oturum (`list_sessions`), sevki `DAGITIM-0902-AKSAM.md` bölüm ⑧.

⇒ Uyarı, kendi adı başka bir oturumun adının **öneki** olan her oturumda
öter. Zararı teorik değil: bir işçi o uyarıya güvenip **başkasının
şartnamesini** üstlenebilir.
**Önerim (uygulamıyorum — `arac/` benim dosyam değil ve koşu canlı):**
uyarı basılmadan önce `KIME` değerinin tahtada **kendi başına geçerli bir ad
olup olmadığına** bakılsın; geçerliyse `[ADRES-TUZAGI]` değil `[KOMŞU AD]`
diye bassın.
