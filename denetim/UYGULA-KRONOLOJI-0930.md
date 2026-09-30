# UYGULA-KRONOLOJI-0930 — kronoloji / ek okuma kovası (30 Eylül 2026)

Koordinatör: YILDIRIM BAYEZIT · kaynak liste `denetim/PAKET-ACIK-0930.json` · dosya alanı `data/olaylar*.js · data/kronoloji*.js · data/ekokuma*.js`.
`denetle.py` KOŞTURULMADI (koordinatör tek sefer koşturacak). Her dosyadan sonra `node --check` ✓.

## Pay doğrulaması
Kaba eşlemeden 12 aday okundu. **2'si benim değil:** 0072 H-0002 (Tosun oku — `seferler_ok103.js` / `savaslar.js`) ·
0077 H-0054 (Samsun sefer oku — `seferler_*.js`). Uygulanmadı.

## Madde madde

| madde | sonuç | ne yapıldı / delil |
|---|---|---|
| 0073 H-0016 | ✅ | `camitarz-nusretiye-camii` bağı `1826-06-15\|Hayriyye` → `1826-04-08\|Nusretiye` (kendi maddesi, olaylar_kronoeksik_0921.js:49) — `data/ekokuma_camitarz.js` |
| 0073 H-0017 | 🟡 kısmî | Alet bugünkü veride yeniden koşturuldu: B 684 · C 57 çift. C'nin 57'si tek tek okundu: 48'i aynı olayın öbür kronolojilerdeki ikizi (meşru). **9 alakasız bağa ayırt edici eklendi** (Nedîm→Semipalatinsk · Abdülaziz ×3→Kanada Dominyonu · Hicaz şerifliği→Louisiana · Bağdat Kölemenleri→Kamçatka/Tunus/Çetine · Don-Volga→Harar/Kartli/Mwene Mutapa · Gazi Osman→Şıpka · tağşiş→Dadyan/Ahıska). Sonra: **A 2130→2130 (meşru kayıp 0) · B 684→678 · C 57→45 · öksüz 14→14.** B'nin 678 çifti elle OKUNMADI (mekanik daraltma meşru ikizleri de keserdi — ölçüldü). `ANTLASMALAR` kayıtlarında `olay:` alanı yok — dosya benim değil. |
| 0073 H-0018 | ⛔ | Güreş kartının türü `kultur-sanat` isteniyor; bu tür `js/app.js` `EKOKUMA_TUR`da YOK → yazılırsa kart görünmez. js/ benim değil. |
| 0073 H-0019 | 🟡 22/44 | TURPLAN'ın mevcut türlere giden 22 taşıması uygulandı (17 tartışma · 2 dış-yankılar · 3 şok-haberler) — `data/ekokuma_dunya.js`. 22 `kultur-sanat` taşıması H-0018 ile aynı sebeple bekliyor; ~13 idarî kart için Emre'nin sorusu açık. |
| 0077 H-0020 | ✅ | Derin pencere pilot verisi `data/olaylar.js`: **İstanbul'un Fethi 14 adım** (TDV istanbul · mehmed-ii · baltaoglu-suleyman-bey · zaganos-pasa · halic; FETIH-1453-0081 ölçümü, her cümle çıkarılmış metinden doğrulandı) · **Çanakkale Zaferi 15 adım** (TDV canakkale-muharebeleri). app.js süzgecinin kopyasıyla sınandı: **elenen 0.** 28/29 Mayıs gecesi ve 27 Nisan Türk taarruzu doğrulanamadı → yazılmadı. `yer_id` kadraj çapasıdır (Seddülbahir/Arıburnu atlasta yerleşim değil) — `ic_not_alt`ta yazılı. Tarayıcıda görülmedi (koşu). |
| 0077 H-0025 · H-0028 | ✅ kronoloji yüzü | Bugün yerleşim uygulaması §6-A kaymalarını indirdi (Rize · Bayburt · Kelkit · Aşkale · Hopa). Karşılık gelen **6 madde** NOKTA-KAFKAS taslağından kelimesi kelimesine `data/olaylar_p0917dunya.js`e taşındı (Rize 1916-03-08 / 1918-03-02 · Bayburt 1916-07-16 / 1918-02-19 · Hopa 1915-02-23 · Aşkale 1916-02-24). ⚠️ Rize/Hopa kurtuluş maddesinin kaynağı KURUMSAL (taslakta beyanlı). İnmemiş kaymaların (Kars · Batum · Artvin) maddeleri taşınmadı. H-0028'in "komşu tutarlılığı aleti" yüzü bu kovada değil. |
| 0077 H-0033 | 🟡 kısmî | **3 madde** `olaylar_p0917dunya.js`: Necef 1917-03-07 (TDV necef) · Kerkük İngiliz işgali 1918-05-07 · geri alınış 1918-05-27 (TDV kerkuk, gövde 30 Eylül'de çekildi). Tuz Hurmatu (TDV: "1918 Nisanında") ve Ammâre (yıl) — gün YOK, madde yazılmadı. |
| 0077 H-0041 | ⏸ bekliyor | Kars yerleşimi KAYMADI (d: hâlâ 1918-05-25 → 1920-04-23; KAF-2 şüphe kovasında). Madde günü 05-25 → 04-25 çevrilirse harita ile kronoloji ayrışır; değiştirilmedi. |
| 0077 H-0048 | ✅ | Yetim ek okuma yüzü yazıldı: `p77b-avusturya-macaristan-dagilisi-1918` (`sebep-sonuc`, `data/ekokuma_p77b.js`), bağ `1918-10-30\|Avusturya Cumhuriyeti` + `1918-11-11\|ardıl devletlere`. Her cümle TDV avusturya · macaristan · romanya/yugoslavya'dan. İtalya ve Polonya'ya giden topraklar okunan TDV metinlerinde YOK → kart anlatmaz, `not`ta söyler. |
| 0077 H-0075 ② | ✅ madde | Tiflis'in bugün inen GDC→Sovyet kırılması (KAF-1) için çekirdekte madde yoktu → taslak ⑩ taşındı (1921-02-25). |

## Değişmez 2 ölçümü (yalnız zaman penceresi, `denetle.py` değil)
Bugün inen kırılmaların hepsinin ±30 gününde zaten bir çekirdek madde vardı (açık doğmaz) — ama Hopa 1915-02-23'ün tek komşusu Çanakkale, Kerkük 1918-05-07/27'ninki Gürcistan/Azerbaycan maddeleriydi. Yazılan 10 madde bu kırılmaları ADIYLA anlatır.

## Başkasının dosyası — bildirilen
- **Paket bayat:** `data/olaylar.js` ve `data/olaylar_p0917dunya.js` paketli → `py arac/paketle.py yenile` gerekir (yayın kapısı `sina` ile öter).
- **Kerkük:** TDV İngiliz yönetimini 28 Ekim 1918 hücumlarına bağlar; atlas 1918-10-30 (Mondros) kullanıyor — tahliye günü TDV'de yok.
- **Zeyla 1875-06-01** (bugün inen d: kırılması): ±30 günde tek madde Hersek İsyanı — alakasız; `-06-01` ay hassasiyeti izlenimi veriyor. Kaynak okunmadı → madde yazılmadı.
- **Zadar 1920-11-12** (italya): Rapallo maddesi kuyrukta (`kronoloji_sinir_avrupa_bati.js:393`), çekirdekte yok.

## Değişen dosyalar (commit YOK)
```
data/ekokuma_camitarz.js   data/ekokuma_dunya.js     data/ekokuma_p77b.js
data/ekokuma_edebiyat.js   data/ekokuma_p76b.js      data/ekokuma_statu.js
data/ekokuma_vezir.js      data/ekokuma_ekonomi.js
data/olaylar.js            data/olaylar_p0917dunya.js
denetim/UYGULA-KRONOLOJI-0930.md
```
