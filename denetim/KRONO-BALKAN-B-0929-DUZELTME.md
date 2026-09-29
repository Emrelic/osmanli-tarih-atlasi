# KRONO-BALKAN-B-0929 — MEVCUT MADDELERDEKİ KUSURLAR

29 Eylül 2026 · Hiçbir mevcut madde SİLİNMEDİ ya da DEĞİŞTİRİLMEDİ (ORTAK §5.3).
Karar koordinatörün. Öncelik sırasıyla.

---

## §1 🔴 Sırbistan özerklik fermanı — ÜÇ GÜN, TDV'ye göre doğrusu 17 Ekim 1830

| Kayıt | Gün | Kendi dayanağı |
|---|---|---|
| `data/savaslar.js:550` "Sırbistan özerklik fermanı" | 1830-08-30 | "standart Osmanlı diplomatik tarihi kronolojisi" (belirli eser yok) |
| `data/devletler.js` `sirbistan-prensligi.kronoloji` "Özerklik fermanla tanındı" | 1830-08-30 | yok |
| `data/kronoloji_sirbistan.js:244` "Özerklik fermanı (Hatt-ı Şerif) yayımlandı" | **1830-10-17** | TDV `sirbistan` |
| `data/olaylar_ek.js:73` "Sırbistan'a özerklik fermanı — irsî knezlik ve garnizon şartı" | 1830-11-08 | `kaynak:"sirbistan"` — **gösterdiği kaynak 17 Ekim diyor** |
| Harita: Kragujevac · Çaçak (`yerlesimler.js:2312-2313`) · Yagodina (`yerlesimler_ek29.js:469-470`) `d` biter / `v` başlar | 1830-11-08 | çekirdek maddeyle hizalı |

**TDV'nin cümlesi** (`sirbistan`, gövde `denetim/KRONO-BALKAN-B-0929-tdv-onbellek/sirbistan.txt`):
> "Nihayet 17 Ekim 1830'da verilen bir imtiyaz fermanıyla Sırplar muhtar bir idare elde etti."

Cümle ayrıştırıldı (CLAUDE.md §4 tuzak ⑥-⑧): tarih, fermanın **verildiği** günü söylüyor ve
fermanın içeriğini (Miloş başknez, meclis, kale muhafızları dışında Türk oturmaması) hemen
ardından sayıyor — yani `olaylar_ek.js`in anlattığı fermanla AYNI belge.
**30 Ağustos ve 8 Kasım için kaynak: bulunamadı.** (Hatt'ın Belgrad'da okunduğu gün
literatürde Kasım sonu/Aralık başı olarak geçer; 8 Kasım onunla da örtüşmüyor — bu bir
hüküm değil, arama notu.)

**ÖNERİ (CLAUDE.md §4: TDV çelişirse TDV esastır):**
1. `olaylar_ek.js:73` → `t:"1830-10-17"`, `gun:"17 Ekim 1830"` (çekirdek — Değişmez 2 evreni).
2. Haritadaki üç yerleşimin `d` bitişi / `v` başlangıcı → `1830-10-17` (YERLESIM-ONERI §1).
   ⚠️ 1 ve 2 **birlikte** uygulanmalı. Ayrı ayrı uygulansa bile 22 gün fark ±30 gün içinde
   kalır, Değişmez 2 kırılmaz — ama birlikte gitmeleri doğrusu.
3. `savaslar.js:550` ve `sirbistan-prensligi` künye maddesi → `1830-10-17`.
4. Böylece `kronoloji_sirbistan.js` zaten doğru olan maddesiyle üç kayıt tek güne iner; bağsız
   ek okuma kartı (koordinatörün sözü) bu güne bağlanabilir.

---

## §2 🔴 Semendire'nin ilk düşüşü — 1439-08-18 YANLIŞ, TDV 27 Ağustos 1439

| Kayıt | Gün |
|---|---|
| `data/devletler.js:884` `sirp-despotlugu.kronoloji` | 1439-08-18 |
| `data/kronoloji_sirbistan.js:150` (dayanağı: künye) | 1439-08-18 |
| `data/olaylar_ek.js` "Semendire'nin ilk alınışı" · harita (Kragujevac/Çaçak/Yagodina `d` 1439-08-27) | 1439-08-27 |

TDV `semendire`: *"Topların kullanıldığı üç aylık bir kuşatmanın ardından şehir Osmanlılar
tarafından alındı (16 Rebîülevvel 843 / 27 Ağustos 1439)."*
`kronoloji_sirbistan.js` kendi başlığında bu çelişkiyi fark edip künyeyi seçmiş —
CLAUDE.md §4 "künyenin f:/t: günü bir KAYNAK DEĞİLDİR" ve "Atlas referans değildir".
**ÖNERİ:** künye maddesi ve `kronoloji_sirbistan.js:150` → `1439-08-27`. Harita zaten doğru.

---

## §3 🟡 Kruya'nın (Akçahisar) teslimi — 1478-06-15 / TDV 16 Haziran 1478

`olaylar_ek5.js:131` ve harita (Akçahisar `yerlesimler.js:437`, Mat ve Leş
`yerlesimler_ok104.js:121/155`) `1478-06-15`. TDV `kruya`: *"15 Rebîülevvel 883'te
(16 Haziran 1478) fethedildi."* Yeni `kronoloji_cok_arnavut.js` maddesi TDV'yi izledi (06-16).
**ÖNERİ (düşük öncelik, 1 gün):** çekirdek madde ve Akçahisar → 06-16. Leş ve Mat'ın
06-15'i ayrı bir TDV cümlesine (Leş'in Venedik'ten alınışı) dayanıyor — onlara dokunulmamalı.

---

## §4 🟡 Hersek'in ilhakı — çekirdek 1483, TDV "1482 başları"

`olaylar_ek5.js` "Hersek'in ilhakı" `1483-01-01`. TDV `bosna-hersek`: *"Hersek sancağı
1470'te teşkil edilmiş, buranın diğer bir kısım toprakları ise 1482 başlarında fethedilerek
sancağa katılmıştı."* `hersek` künyesi (`t:1482-01-01`) ve harita (Herseknovi `1482-01-01`)
TDV ile hizalı; çekirdek madde bir yıl kayık.
**ÖNERİ:** çekirdek madde → `1482-01-01`, `gun:"1482 başları (TDV)"`. Haritadaki
Herseknovi 1482 kırılması bugün AÇIK görünüyor (SENKRON-DEFTER) — düzeltme onu da kapatır.

---

## §5 🟡 Wied'in ayrılışı — künye "Ekim", TDV 3 Eylül 1914

`devletler.js` `arnavutluk-bagimsiz.kronoloji` 1914-03-07 maddesi: "(Ekim'de I. Dünya Savaşı
kargaşasında ülkeyi terk etti)". TDV `arnavutluk`: *"Prens Wilhelm von Wied 3 Eylül 1914'te
ülkeyi terketmek zorunda kaldı."* Yeni `kronoloji_cok_arnavut.js` 1914-09-03 maddesi yazıldı.
**ÖNERİ:** künye metnindeki "Ekim'de" → "Eylül'de".

---

## §6 🟢 TDV kendi içinde çelişiyor — bildirim (CLAUDE.md §4 tuzak ⑥)

| Olay | TDV maddesi A | TDV maddesi B | Seçilen |
|---|---|---|---|
| Prizren Arnavut Cemiyeti'nin kuruluşu | `prizren`: 10 Haziran 1878 | `arnavutluk` (1991 baskısı): 13 Haziran 1878 | 10 Haziran — daha özel ve daha yeni madde; akademik literatürde de 10 Haziran yaygın. İkisi de `gun:` alanında yazılı. |
| Leş toplantısı | `iskender-bey`: 1 Mart 1444 | (`dukagin` künyesi 2 Mart diyor; TDV değil) | TDV 1 Mart. Künye kaynağı belirsiz; 2 Mart literatürde yaygın. Hüküm koordinatörde. |
| Kara Mahmud Paşa'nın ölümü | `karadag`: "1795'te Kruse savaşında" | `arnavutluk`: babası Mehmed Paşa'nın ölümünü 1796'ya koyuyor | Hiçbiri yazılmadı. `kronoloji_balkan.js` 1795'i kullanıyor; akademik literatür (Krusi) 1796 der. Ayrı araştırma ister. |
| Bosna-Hersek'in ilhakı | `bosna-hersek`: "7 Ekim 1908'de … resmen … ilân edildi" | — | Veride 1908-10-05 (`olaylar_ek.js`) ve 1908-10-06 (4 dosya + `bosna-isgal t:`). İlhak bildirisi 5 Ekim tarihli, 6-7 Ekim'de ilan edildi; üç gün de savunulabilir — tek güne indirilmesi önerilir, gün seçimi koordinatörde. |

---

## §7 🟢 Mükerrer — `kronoloji_balkan.js` kendi içinde

`kronoloji_balkan.js` `1912-10-08`de **üç** Karadağ maddesi taşıyor: "Osmanlı'ya savaş ilan
eden ilk Balkan devleti oldu — I. Balkan Savaşı başladı" · "Birinci Balkan Savaşı'na giriş" ·
"Balkan Savaşları'na giriş". Dosya bugün bağsız (KRONO-BAGLAMA-0929); bağlanırken üçü tek
maddeye indirilmeli, yoksa `karadag` panelinde üç kez görünür.

---

## §8 🟢 `kronoloji_sirbistan.js` başlığı bayat

Başlık "⚠️ HENÜZ CANLI DEĞİL. `index.html`e … bağlanmadı" diyor; dosya `index.html`de
(paket_12) yüklü ama `KRONOLOJI_SIRBISTAN` → `sirbistan` künyesi olmadığı için hiçbir
panele bağlı değil (M-5390/M-5396). Onarım KRONO-BAGLAMA-0929'da; başlık da o sırada
güncellenmeli.

---

## §9 🟢 Küçük gün önerileri (doğrulanmalı — bu turda TDV'de gün bulunamadı)

- `kronoloji_sirbistan.js` `1867-01-01` "Osmanlı garnizonları Sırp kalelerinden çekildi":
  Belgrad Kalesi'nin teslimi literatürde Nisan 1867 (18 Nisan) olarak geçer. TDV yalnız yıl
  veriyor; gün bu turda bir akademik eserde satır olarak doğrulanmadı ⇒ **öneri değil, not.**
