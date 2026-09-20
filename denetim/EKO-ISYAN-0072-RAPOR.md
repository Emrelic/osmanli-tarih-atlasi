# EKO-ISYAN-0072 — teslim raporu (paket 0072 · H-0006 · H-0013)

Oturum: EKO-ISYAN-0072 · 20 Eylül 2026 · koordinatör 1.MURAT
Şartname: `oturumlar/DALGA-0072.md` · parti metni `ClaudEmre/kutu/giden/parti-emrelic-0072/PARTI.md`
Öngörü dosyası (ölçümden ÖNCE yazıldı): `denetim/EKO-ISYAN-0072-ONGORU.md`
Yazılan dosya: **`data/ekokuma_isyan1821.js`** → `window.EKOKUMA_ISYAN1821`, **3 kart**

---

## 1. Ne ölçtüm

### 1.1 TDV slug taraması (evren: 18 slug, `denetim/ARAC-A6C-TDV-0913.py`)
| CANLI (200) | ÖLÜ (302) |
|---|---|
| `eflak` · `bogdan` · `fener` · `handjeri-alexandre` · `sirbistan` · `yunanistan` · `mora` · `balkanlar` · `belgrad` · `bukres` · `mahmud-ii--osmanli` · `fener-rum-ortodoks-patrikhanesi` · `sakiz-adasi` | `fenerliler` · `ipsilanti-ailesi` · `fener-rum-patrikhanesi` · `filiki-eterya` · `mora-isyani` · `yunan-isyani` · `bukres-antlasmalari` |

**Öngörü sınavı:**
- **Ö1a ✓** `fenerliler` gerçekten 302.
- **Ö1b ✓** `eflak` gövdesinde "Fenerli" 9 cümlede geçiyor (öngörü ≥ 3); `bogdan` 3, `fener` 6.
- **Ö1c ✗ ÇÜRÜDÜ** `fener-rum-patrikhanesi` 200 değil **302**. Doğru slug arama
  sayfasından alındı: `fener-rum-ortodoks-patrikhanesi` (200).
- **Ö2 ✗ ÇÜRÜDÜ** `ipsilanti-ailesi` CANLI değil, **302**. Arama sayfası da İpsilanti
  için müstakil madde vermedi; TDV'de en yakın Fenerli kişi maddesi
  `handjeri-alexandre`dir. (D217 bir kez daha tuttu: TDV olay değil yer-kişi
  ansiklopedisi; "Fenerliler" sorusunun adresi `fener` semti + iki ülke maddesi.)
- **Ö3 ✓** `sirbistan` 200 ve iki isyanı da anlatıyor; Sırp millî anlatısını (Takovo,
  "Sırp İhtilâli" adlandırması, Obrenović-Karadjordjević husumeti) VERMİYOR —
  o taraf tamamen akademik dış kaynaktan geldi.

### 1.2 Bağ ölçümü (evren: 3 kartın 11 `olay:` dizgisi × 7152 kronoloji maddesi)
Alet: **`denetim/ARAC-ISYAN-BAG-0072.js`** (`node denetim/ARAC-ISYAN-BAG-0072.js`).
Aletin özelliği: eşleştiriciyi YENİDEN YAZMAZ — `js/app.js`in kendi `_ekNorm` ve
`_ekBagEslesir` fonksiyonlarını dosyadan ayıklayıp çalıştırır (D045: aynı iş için
ikinci mekanizma açmak, birini bayatlatmanın kesin yoludur).

```
YUKLENEN kronoloji dosyasi : 125 / 125
KRONOLOJI MADDESI (t+b)    : 7152
TOPLAM BAG : 11   TUTMAYAN : 0
```

| kart | bağ | tutan madde |
|---|---|---|
| `isyan-sirp-milli-anlati` | `1804-02-14\|Birinci Sırp` | 2 (OLAYLAR_EK5 + KRONOLOJI_SIRBISTAN) |
| | `1813-10-05\|Birinci Sırp` | 1 |
| | `1815-04-23\|İkinci Sırp` | 2 (OLAYLAR_EK5 + KRONOLOJI_SIRBISTAN) |
| | `1830-11-08\|özerklik fermanı` | 1 |
| `isyan-fenerli-voyvodalar` | `1711-07-19\|Prut Zaferi` | 1 |
| | `1713-06-24\|Hotin` | 1 |
| | `1821-02-22\|Eflak İsyanı` | 1 |
| | `1821-02-22\|girişi` | 1 |
| `isyan-ypsilanti` | `1821-02-22\|Eflak İsyanı` | 1 |
| | `1821-02-22\|girişi` | 1 |
| | `1821-03-25\|Yunan İsyanı` | 1 |

**Ö4 ✓ tuttu, iki yönüyle de:** tutmayan bağ 0; ve 1821-02-22'deki İKİ ayrı maddeye
(`data/olaylar_ek5.js` "Eflak İsyanı…" ve `data/kronoloji_balkan.js` "İpsilantis'in
Eflak-Boğdan'a girişi") ayrı ayırt ediciyle ayrı ayrı tutuldu.

### 1.3 Mükerrer taraması (evren: `data/ekokuma*.js` + `data/merak*.js`)
- **Ö5 ✗ KISMEN ÇÜRÜDÜ.** "Sırp isyanları için hiç kart yok" öngörüm yanlıştı:
  `ekokuma_bakis.js` kartı **`bakis-sirp`** (tür `karsi-anlati`) zaten var ve
  `1804-02-14|Sırp`a bağlı. Ama konusu FARKLI: Sırp DERS KİTAPLARI ve "beş yüz
  yıllık boyunduruk" kalıbı. Benim kartım isyanların KENDİSİNİN Sırp tarih
  yazımındaki yeri. Çakışan tek cümle yazılmadı, kart metninden `bakis-sirp`e
  ve `karsi-kosova-1389`e atıf verildi.
- 1815-04-23 ve 1821-02-22 günlerine bağlı başka ek okuma kartı **YOKTU** (0).

### 1.4 Değişmezler
`py arac/denetle.py` → **SONUÇ: temiz**. (Beklenen: yeni dosya henüz hiçbir
yükleyicide olmadığı için değişmez evrenine girmiyor; yine de koşuldu.)

---

## 2. Ne bulamadım (`bulunamadı` bir sonuçtur)

1. **İpsilanti'nin Avusturya'daki gözaltısı ve ölüm günü — ÖLÇÜLEMEDİ.**
   Brill'in *"Those Infidel Greeks"* cildi **HTTP 403** döndü; açılabilen başka
   akademik kaynak bulunamadı. Kart yalnız okunabileni yazdı: "Avusturya
   İmparatorluğu'na kaçtı" (Balcanica LIII, 2022) ve "1828'de öldü"
   (Markovich'in verdiği 1792-1828 künyesi). **Gözaltı yılları ve ölüm günü
   KARTTA YAZILMADI.**
2. **TDV'de İpsilanti maddesi yok** (`ipsilanti-ailesi` 302, arama da vermedi).
3. **Brâncoveanu'nun idam yılı** TDV `eflak` gövdesinde AÇIKÇA yok; genel kabul
   gören 1714 metinde parantez içinde bırakıldı, **gün yazılmadı**.
4. Vikipedi, GreekReporter, Greek City Times arama sonuçlarında çıktı —
   **kullanılmadı** (§4 kırmızı çizgi).

---

## 3. Bildirmem gereken üç şey (§7.1 ⑥)

### 3.1 🔶 KAYNAK ÇELİŞKİSİ — TDV kendiyle ve akademiyle çelişiyor (§4 tuzak ⑥)
TDV `eflak`: İpsilanti **"1821'de Rus çarının desteğiyle Kırım'da harekete geçen"**.
- "Kırım" ↔ TDV'nin KENDİ `yunanistan` maddesi Filiki Eteria'yı **Odesa**'da
  (1814) kurulmuş gösteriyor.
- "Rus çarının desteğiyle" ↔ Heraclides–Dialla (Manchester UP, 2015): Çar I.
  Aleksandr ona **silâhları bıraktırdı ve Rus ordusundan attı**; Laibach Kongresi
  ayaklanmayı kınadı.
**Kart ikisini de adıyla yazdı, birini susturmadı** ve `kesinlik:"tartismali"` verdi.

### 3.2 🔶 GÜN — 1821 Prut geçişi için üç ayrı değer dolaşıyor
| kaynak | gün |
|---|---|
| atlasın kendi kaydı (`data/olaylar_ek5.js`, `data/kronoloji_balkan.js`) | **1821-02-22** |
| Heraclides–Dialla 2015 | **21 Şubat 1821** |
| akademik literatürde yaygın Gregoryen karşılık | **6 Mart 1821** (= eski takvim 22 Şubat) |

Üçü de aynı olayı anlatıyor; 22 Şubat/6 Mart farkı eski-yeni takvim farkıdır,
21 Şubat ise ayrıca açıklanmadı. **Kart GÜN İDDİA ETMEDİ, yalnız "Şubat 1821"
yazdı** (D210/D213: hassasiyet kaynağı aşamaz). Kronoloji maddesi bu oturumun
dosyası değil — **gün kararı 1.MURAT'ta**; benim önerim atlasın 1821-02-22'sini
DEĞİŞTİRMEMEK, yalnız `ic_not_b`ye "eski takvim; Gregoryen karşılığı 6 Mart 1821"
notunu düşürmek.

### 3.3 🔶 BENİM İŞİMİN DIŞINDA AMA ÖLÇTÜM — 50 tutmayan ek okuma bağı
Aynı aleti bütün ek okuma dosyalarına koşturdum (scratchpad'de, repoya
yazılmadı). **Evren:** `data/ekokuma*.js` + `data/merak*.js`in `olay:` alanları
(1169 bağ) × `data/olaylar*.js` + `data/kronoloji*.js` (7152 madde).
**Sonuç: 50 bağ hiçbir maddeye tutmuyor** — yani o kartlar sessizce hiç
görünmüyor olabilir. Yoğunlaştığı dosyalar: `ekokuma_kurum.js` (13),
`ekokuma_kurum2.js` (9), `ekokuma_ihtilal.js` (5), `ekokuma_rusiran.js` (4).
Örnek: `teknik-eflak-bogdan-erdel-haklari` → `1716-01-01|Fenerli idare`;
`savas-hacova-1596` → `1596-10` (ay hassasiyetli, `_ekBagEslesir` TAM EŞİTLİK arar).

⚠️ **Bu bir hüküm değil ölçümdür** (D "ölçüm doğru, çıkarım yanlış"): evrenime
yalnız `olaylar*`/`kronoloji*` dosyalarını aldım; kartların bir kısmı başka
katmanlara bağlanıyor olabilir. Sayıyı ham veriyorum, sınıflandırmayı yapmadım —
ayrı bir iş olarak sevk edilirse aleti (`ARAC-ISYAN-BAG-0072.js`) devralabilir.

---

## 4. Kartlar

| id | tür | bağlı günler | konu |
|---|---|---|---|
| `isyan-sirp-milli-anlati` | `karsi-anlati` | 1804-02-14 · 1813-10-05 · 1815-04-23 · 1830-11-08 | H-0006 — "isyan" mı "Sırp İhtilâli" mi; Takovo meclisi, 6 Kasım 1815 sözlü anlaşması ve çift yönetim; Karadjordje'nin öldürülmesi; TDV'nin "bastırıldı / başknez tayin edildi" çerçevesiyle karşılaştırma |
| `isyan-fenerli-voyvodalar` | `sebep-sonuc` | 1711-07-19 · 1713-06-24 · 1821-02-22 (×2) | H-0013 — 1711 Prut'ta iki voyvodanın kaybı → Fenerli Rum beylerinin tayini → 1821'de düzenin kendi kadrosunca bitirilmesi; Handjéri'nin ömrü örnek künye |
| `isyan-ypsilanti` | `kimdir` | 1821-02-22 (×2) · 1821-03-25 | H-0013 — üç Aleksandr İpsilanti'nin ayrımı; Rus ordusundaki rütbesi; Eterya'nın başına geçişi; Karadjordje'nin 1817'de Konstantin İpsilanti'nin evinde Eterya'ya yemin etmesi; Prut; Vladimirescu; sonu |

**Kullanılan türlerin üçü de `app.js` `EKOKUMA_TUR`da KAYITLI** (ölçüldü):
`karsi-anlati` (satır 9408) · `sebep-sonuc` (9335) · `kimdir` (9390).
**Yeni tür açılmadı.** Görsel yok (şartname: "Görsel YOK").

### Kaynak seti (hepsinin gövdesi bu oturumda açıldı)
TDV: `sirbistan` (Mehmet Hacısalihoğlu) · `eflak` (Kemal Karpat) · `bogdan`
(Abdülkadir Özcan) · `fener` (Tülay Artan, 1995) · `handjeri-alexandre`
(Hasan Eren) · `yunanistan` (Mehmet Hacısalihoğlu).
Akademik: Dušan T. Bataković, *Balcanica* XXXVI (2006), 113-128 · Aleksandar M.
Savić, *Glasnik Etnografskog instituta SANU* LXVIII/3 (2020), 683-704, DOI
10.2298/GEI2003683S · Slobodan G. Markovich, *Balcanica* LI (2020), 143 vd.,
DOI 10.2298/BALC2051143M · Alexis Heraclides – Ada Dialla, *Humanitarian
Intervention in the Long Nineteenth Century* (Manchester UP, 2015) · *Balcanica*
LIII (2022) kitap tanıtımı. **Aktarım (D073) olanlar `ic_not`ta işaretlendi**
(Ranke 1848, Vuk Karadžić 1828, Ljušić'in dönemlendirmesi).

---

## 5. Ne istiyorum

1. **Yükleyici satırı** (app.js sahibi 1.MURAT): `js/app.js` `_EKOKUMA_DOSYA_ADLARI`
   dizisine
   ```
   "ekokuma_isyan1821",   // window.EKOKUMA_ISYAN1821 — EKO-ISYAN-0072 teslimi
   ```
   Bu satır eklenmeden **kartlar hiç görünmez** (D045 ailesi).
2. **`data/ekokuma_isyan1821.js` commit'i sende** (DALGA-0072: paylaşılan dosyayı
   işçi commitlemez). Ben yalnız `denetim/EKO-ISYAN-0072-*` ve
   `denetim/ARAC-ISYAN-BAG-0072.js` dosyalarımı adımla commitledim.
3. **§3.2'deki gün kararı** ve **§3.3'teki 50 tutmayan bağ** senin hükmünde.
