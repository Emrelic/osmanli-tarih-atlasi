# RENK — GÖREV TANIMI (2 Ağustos, Opus 5)

> B5. Bugün açılan tek oturum. Üç parti, tek oturum — çünkü **bitişik
> devletler tek tek çözülemez.**

---

## 0. YAZMA YETKİN — kesin sınırlar

```
✅ arac/renkler.py               BOYALAR sözlüğü — SENİN dosyan bugün
✅ data/devletler.js             YALNIZ `harita:` alanı, başka alan YOK
✅ oturumlar/RENK-ILERLEME.md    kendi defterin
❌ data/kimlikler.js             EMEKLİ (0408bca) — açma bile
❌ data/yerlesimler*.js          veri oturumlarının
❌ arac/*.py (renkler.py hariç)  MOTOR 2 çalışıyor, çakışma olur
❌ kök *.md                      koordinatörün
```

🔴 **`py arac/uret_petek.py` ÇALIŞTIRMA** — 43 dakika, üretimi koordinatör
tetikler. Girdi dosyaları **KİLİTLİ DEĞİL**, koşan üretim yok; yazabilirsin.

**Teslim:** doğrudan yaz, sonra **parti parti** haber ver. Rapor bekleme.
📌 1 Ağustos'un darboğazı tek büyük teslim beklenmesiydi: on iki kalem
biriktirildi ve **hiçbiri gelmedi.**

---

## 1. ARAÇLARIN — ikisi de BUGÜN yenilendi

```
arac/renk_olc.py     MOTOR 2 iki iş yaptı:
  · İş D: "AYNI ANAHTAR + TARİH ÖRTÜŞMESİ" denetimi eklendi (027064f)
          bugün 1 vaka yakalıyor (afsar×kacar), 18 çiftte susuyor
  · İş E: devletler.js için ORTAK OKUYUCU'ya bağlandı (9a1a423)
          yerel ayrıştırıcı silindi, iki otorite kalmadı
```

⚠️ **`renkler.py`'de İKİ ÇÜRÜK var, ikisi de senin dosyanda — düzelt:**
```
satır 352   "yerlesimler_ortaasya2.js hâlâ d:'kazak' yazıyor"
            → ÖLÇÜLDÜ, ÇÜRÜK. Dosyanın 9 kimliğinin 9'u da tanımlı,
              kazak kaydı zaten `kazak-hanligi`. Uyarı geçmişte doğruydu.
satır 355+  bayat ΔE bloğu — "dolgu %30" diyor, satır 41 gerçeğin 0,44
            olduğunu ve bunun bütün ölçümleri bozduğunu söylüyor
```

🔴 **VE BİR SAYIYI SANA VERMİYORUM:** eski notlarda *"paletteki en dar aralık
13,6"* diye bir rakam dolaşıyor. **Doğrulamadım, sana aktarmıyorum.** Bugün
üç kez doğrulanmamış sayı aktarıldı ve üçü de yanlıştı. **Eşiği kendin ölç**
(`renk_olc.py`), ve raporunda **ölçtüğün rakamı** yaz.

---

## 2. PARTİ 1 — İRAN ZİNCİRİ 🔴 ÖNCE BU, canlı bir ihlal var

### Kullanıcı kararı (bugün teyit edildi, bağlayıcı)

> *"`afsar`/`zend`/`kacar`, `safevî` ile **aynı renk AİLESİ, farklı
> PARLAKLIK**."* — gerekçesi: *"ayrı renkler İran'ı üç ayrı devlet gibi
> gösterir."*
> `kacar` için ek teyit: *"Kaçar hanedanı İran tarihine dair olacak, **o renk
> grubundan olsun**."*

### Bugünkü hâl — ölçüldü

```
safevi   1501-07-01 → 1736-03-08   harita:"safevi"   #6b4a7d   MOR   ← TABAN, DEĞİŞMEZ
afsar    1736-03-08 → 1796-01-01   harita:"iran"     #b5885b   KAHVE ← karara AYKIRI
zend     1751-01-01 → 1794-01-01   harita: BOŞ                       ← kayıt VAR (satır 1477)
kacar    1789-03-21 → 1923-10-29   harita:"iran"     #b5885b   KAHVE ← karara AYKIRI
```

🔴 **CANLI İHLAL:** `afsar` ile `kacar` **aynı rengi** paylaşıyor ve
**1789-03-21 → 1796-01-01 arası (7 yıl) eşzamanlılar** ⇒ o pencerede haritada
**ayırt edilemiyorlar.** ΔE **0** — mümkün olan en kötü hâl. `renk_olc.py`
bunu bugüne kadar göremiyordu (İş D ile kapandı).

### Örtüşme haritası — üç ton BİRLİKTE ayırt edilebilmeli

```
safevi × afsar    ÖRTÜŞME YOK   (safevi 1736-03-08'de biter, afsar o gün başlar)
afsar  × zend     43 yıl
afsar  × kacar     7 yıl
zend   × kacar     5 yıl
ÜÇÜ BİRDEN       1789-03-21 → 1794-01-01   (~4,8 yıl)
```

⚠️ **`safevi` o pencerede sahnede DEĞİL.** Yani `safevi` taban olarak kalır,
fiilen ayrışması gereken üçlü **`afsar` · `zend` · `kacar`.**

### İstenen

`safevi`nin `#6b4a7d` moru **aile rengi**; üçüne **aynı tondan farklı
parlaklıkta** üç değer. Kısıt: 1789-1794 penceresinde **üçü de birbirinden**
ayırt edilebilmeli — yani parlaklık farkı, ölçtüğün eşiğin üstünde olmalı.

📌 `zend` için tek eksik `harita:`. Kayıt tam (`f`·`t`·`bolge`·`baskent`·
`ozet`+künye, `devletler.js:1477`). **Araştırma yok.**

---

## 3. PARTİ 2 — 15 AVRUPA KİMLİĞİ 🟢 EN YÜKSEK GETİRİ

```
235 nokta ZATEN BOLGE kutusunun içinde. BOLGE'ye dokunmadan çizilir.
Önündeki tek engel bu 15 kimliğin rengi:

aragon · belcika · bretanya · burgonya · ferrara · irlanda · iskocya
isvicre · kastilya · luksemburg · mantua · navarra · parma · piza · siena
```

Kimlik başına **15,7 nokta** (Asya'da bu oran 2,5 — yani **6 kat** getiri).

🔴 **TEK TEK ÇÖZÜLEMEZ, ÇÜNKÜ BİTİŞİKLER:**
```
İber      kastilya · aragon · navarra          üçü bitişik
İtalya    parma · mantua · ferrara · piza · siena   BEŞİ bitişik
Kuzeybatı belcika · luksemburg · isvicre       birbirine ve komşularına
Adalar    irlanda · iskocya                    bitişik değil ama İngiltere'ye komşu
```
⚠️ **Beşi birden yakın tonda çıkarsa İtalya tek renk olur** ve kimse fark
etmez. `renk_olc.py --oner` tam bunun için yazıldı: **N kimliği BİRLİKTE
çözer.**

📌 `aragon` ve `kastilya` VERİ KİMLİK 2'nin kuyruğundaydı; **oturum kapandı**,
ikisi de sende. Çakışma yok.

---

## 4. PARTİ 3 — ASYA'NIN 135'İ 🔴 EN BÜYÜK, EN SONA

```
data/yerlesimler_asya.js   344 nokta · 147 kimlik · rengi OLMAYAN 135
```

⚠️ **Bu partinin haritada BUGÜN görünür karşılığı YOK** — `BOLGE` kutusu
kapalı (`lon 62`'de biter, Asya `65,7`'den başlar). Yani boyadığın hiçbir şey
çizilmeyecek.

🔴 **Ve bu bir sorun değil, SIRA:** kutunun açılmasının önündeki iki engelden
biri tam olarak bu 135 renk (öteki adacık kuralı). Karar dosyası:
`oturumlar/KARAR-BOLGE-KUTUSU.md`.
⇒ Sen bunu bitirmeden kutu açılamaz. **Ama Parti 1 ve 2'den sonra.**

---

## 5. BUGÜN SENİ BAĞLAYAN KURALLAR

```
🔴 "Yanlış renk boşluktan KÖTÜDÜR: boşluk 'bilmiyoruz' der, yanlış renk
   'biliyoruz' der."                              (uret_petek.py:1243)
§B3   Dokümandaki sayı ölçüm değil, ölçümün FOTOĞRAFIDIR — ve eskir
§B10  Başkasının ölçümünü doğrulamadan aktarma (benimki dahil)
§B11  Veri dosyaları regex ile SAYILMAZ — ortak okuyucuyu kullan
§C5   Kuralı, ATEŞLEMEMESİ gereken vakalara karşı da sına
§D3   Mevcut bir kayda benzemek doğru olmanın delili değildir
§16   Paylaşılan ağaçta `git stash` YASAK — kopya + `git checkout HEAD -- <yol>`
§13   commit'te YOL ADI yaz: git commit -F - -- arac/renkler.py
```

⚠️ Ve **"her kaleme yeni renk" varsayımı YANLIŞ** — ölçüldü: dizin 125
kayıtta 112 anahtar kullanıyor, 8 anahtar paylaşımlı ve 7'si ardışık.
**Paylaşım kural, istisna değil.** Halef aynı anahtarı alabilir; ölçüt
**eşzamanlılık**, kayıt sayısı değil.

📌 Ve bugün bir oturum `abd`yi `abdulkadir`e bağlayacaktı — ABD'nin
Filipinler'i Cezayirli bir emirliğin turkuazıyla boyanacaktı. **Emin
değilsen yazma.**
