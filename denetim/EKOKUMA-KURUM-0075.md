# EKOKUMA-KURUM-0075 — teslim raporu (21 Eylül 2026)

**Kapsam:** Parti 0075 blok ① — 9 madde (H-0006 · H-0008 · H-0009 · H-0016 · H-0027 · H-0028 · H-0036 · H-0043 · H-0047).
**Ürün:** `denetim/EKOKUMA-KURUM-0075-ekokuma_p75a.js` — 12 kart, `window.EKOKUMA_P75A`, `node` ile sözdizimi/şema denendi.
**Kilit:** `data/` ve `arac/` donmuş olduğu için dosya `denetim/` altında; kilit kalkınca `data/ekokuma_p75a.js` olarak kopyalanacak (içerik birebir, yalnız ad).

## Kart ↔ madde ↔ kronoloji bağı
Her `olay:` bağı gerçek kronoloji maddesine karşı `app.js` `_ekNorm/_ekBagEslesir` mantığıyla sınandı: 12/12 bağ TAM 1 maddeye düşüyor.

| Madde | Kart id | `olay:` | Not |
|---|---|---|---|
| H-0006 | `teknik-ilk-nufus-sayimi-1830-31` | `1830-12-01\|nüfus` | TDV + akademik makale (Başaran) |
| H-0008 | `teknik-takvim-i-vekayi-resmi-gazete` | `1831-11-01\|Takvîm` | |
| H-0009 | `teknik-gazetecilik-dogusu-ilk-osmanli-gazeteleri` | `1831-11-01\|Takvîm`, `1862-06-27\|Tasvir` | |
| H-0016 | `teknik-osmanli-ilk-fabrikalar-atolyeler` | `1833-06-01\|Feshâne` | Feshâne'nin kendi kartı `ekokuma_toplum.js`te zaten var; bu kart genişlik |
| H-0027 | `teknik-klasik-burokrasi-nisanci-kalem-defterhane` · `teknik-divandan-nezaretlere-maliye-nezareti` | `1838-02-28\|Maliye` | iki kart; ikincisi `tartismali` |
| H-0028 | `teknik-meclis-i-vala-yi-ahkam-i-adliyye` | `1838-03-24\|Meclis-i` | |
| H-0036 | `teknik-kaime-kagit-para` | `1840-01-01\|kâime` | dünya örnekleri: Hoover (von Glahn), NBB Müzesi, Bank of England, NY Fed |
| H-0043 | `teknik-bogaz-ulasimi-sirket-i-hayriyye-oncesi` · `teknik-galata-koprusu-ne-zaman-acildi` · `teknik-tunel-karakoy-beyoglu-1875` | `1851-01-01\|Şirket-i Hayriyye` | kronolojide Galata Köprüsü / Tünel maddesi YOK (`grep` boş) |
| H-0047 | `teknik-klasik-donemde-dis-borc-var-miydi` | `1854-08-24\|dış borç` | |

## TDV'nin kendi içinde çelişen yerler (taraf seçilmedi, ikisi de kartta)
1. **Maliye Nezâreti:** `ceride-nezareti` "28 Şubat 1838'de kuruldu" ↔ `defterdar` "Şubat 1838 geçici, 1839'da hazineler yeniden ayrıldı, 1841'de kesin". Kronoloji maddesi (1838-02-28) birinciyle uyumlu; ikincisi kuruluş adının "kalıcı" sayılmasını 1841'e çeker.
2. **Galata Köprüsü:** `bezmialem-valide-sultan` "1844'te yaptırıldı" ↔ `halic` "1845'te kurulmuştur". Açılış günü ikisinde de yok.
3. **Tünel:** `beyoglu-mezarligi` "17 Ocak 1875" ↔ `galata` "1876'da açılırken". İTÜ makalesi 17 Ocak 1875'i veriyor.
4. **Şûrâ-yı Devlet'e bölünme:** `meclis-i-vala` 6 Mart 1868 ↔ `sura-yi-devlet` 5 Mart 1868.
5. **Nüfus tablosu** (`nufus`): satır/sütun toplamları birkaç yüz kişilik farkla tutmuyor; kart tablonun kendi "Toplam" satırını aktarıyor.

## `bulunamadı` (bir sonuçtur)
- Avrupa'daki ilk basılı gazetelerin adı/yeri/nedeni: TDV yalnız "17. yüzyıl başları" der; ayrıntıya güvenilir kaynaktan ulaşılamadı (ağ arızası + kırmızı çizgi) — kartta yok.
- Hereke Kumaş Fab. · Bakırköy Veliefendi Basma Fab. · Bursa İpek Fab. kuruluş yılları: TDV'de ayrı madde yok (HTTP 302).
- TDV'de TÜNEL maddesi (slug HTTP 302); Galata Köprüsü maddesi HALİÇ'e yönleniyor.
- Boğaz'da vapur öncesi hat/ücret/sefer ayrıntısı.
- 1836-1845 arası Haliç geçişinin kayıkla yapıldığına dair AÇIK cümle (kartta "sayfanın yorumlaması" diye etiketli).
- Avrupa sayımlarının kimleri ve nasıl saydığı; Osmanlı'nın onlardan esinlenip esinlemediği.

## Atlasın kendi verisine dair bulgu (iş değil, bildirim)
- `olaylar_ek2.js:34` Şirket-i Hayriyye `t:"1851-01-01"`, `gun:"1851"`: TDV lâyihanın onayını Takvîm-i Vekāyi nr. 436 (10 Muharrem 1267 ≈ Kasım 1850) ile, ilk seferleri 1852 ilkbaharı ile veriyor; Boğaziçi maddesi "1851" yazıyor. Yıl tartışmalı, atlas 1851'i taşıyor; kart üç tarihi de yazıyor.
- Kâime maddesinde (`olaylar_p0044.js:73`) ve H-0036 başlığında "muhtemelen Haziran 1840" diyor; TDV metniyle uyumlu.

## Kaynak deposu
TDV 33 madde okundu (gövde cümle numarasıyla notlandı); akademik/kurumsal: Başaran (AMÜ SBED 4/3), Kayaoğlu ve ark. (İTÜ, 2014), von Glahn (Hoover), NBB Müzesi, Bank of England, NY Fed (Liberty Street). Blog/forum/Vikipedi dayanak yapılmadı.

## Üslup
"Emre" kelimesi hiçbir kartta yok (`node` denetimi); kaynaksız yorumlar "sayfanın yorumlaması" diye damgalı.
