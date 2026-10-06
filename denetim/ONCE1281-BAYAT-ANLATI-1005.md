# ONCE1281-BAYAT-ANLATI-1005 — taç yarısı + Eisenstadt indikten sonra bayatlayan anlatı (M-5835 hükmü ③)

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · HEAD `7c52a182` · **Veriye yazılmadı.**
Betikler (scratchpad): `bayat_tara.py` (durum kelimesi + bölge adı, 184 dosya) · `bayat_tara2.py` (1918-10 → 1920-06 devir fiili
+ `odak_yer`/`yer_id` karşı veri) · `bayat_oku.py` (tam metin).
⚠️ Tarama sözcük tabanlı: "çoktan/zaten/hâlâ/haritada/rengin/görünür" + bölge adı, ve odak noktasının o gün gerçekten değişip
değişmediği. Sözcüğü taşımayan bayat iddia KAÇABİLİR — sınırı bu.

## Sonuç — 7 bulgu (önem sırasıyla)
| # | dosya · gün · madde | iddia | veri bugün | hüküm |
|---|---|---|---|---|
| 1 | `olaylar_ok109.js` · 1918-10-28 · Çekoslovakya'nın bağımsızlık ilânı | *"Haritada Çekoslovakya 11 Kasım 1918'de belirir"* · `odak_yer` Prag, **Bratislava, Kassa** | Bohemya-Moravya 1918-11-11 ✓ · **Slovakya (Bratislava, Kassa) 1920-06-04 Trianon** | 🔴 YARI BAYAT + odak bayat — Slovakya için cümle yanlış, kamera değişmeyen yere uçuyor |
| 2 | `olaylar_ok109.js` · 1919-09-10 · Saint-Germain | *"Haritadaki devir bir yıl önce olmuştu; bu antlaşma onu tescil etti"* | **Ungvár, Munkács (Kárpátalja) TAM BU GÜN** `macaristan-naiplik` → `cekoslovakya` | 🔴 BAYAT — bu gün haritada bir devir VAR |
| 3 | `olaylar_ok109.js` · 1918-10-29 · SHS Devleti'nin ilânı | `odak_yer` **Zagreb**, Ljubljana, Saraybosna (metinde harita iddiası yok) | Zagreb 1918'de değişmiyor (Trianon'a dek `macaristan-naiplik`) | 🟡 odak bayat — Zagreb çıkmalı (Ljubljana/Saraybosna 1918-11-11'de değişiyor) |
| 4 | `olaylar_ok109.js` · 1918-12-01 · SHS Krallığı + Büyük Romanya | *"Haritada Sırbistan Krallığı toprakları Yugoslavya'ya geçer"* ✓ · `odak_yer` **Zagreb** · "Transilvanya … katılmasıyla Büyük Romanya oluştu" | Zagreb ve Erdel o gün değişmiyor (Trianon) | 🟡 odak bayat (Zagreb); Transilvanya cümlesi tarihî olgu, harita iddiası değil — ama okuyucu haritada Erdel'in Romanya'ya geçtiğini bekler: "haritada Trianon'da" notu önerilir |
| 5 | `kronoloji_cok_sirbistan.js` · 1919-08-12 | başlık *"Mura ötesi Yugoslavya'ya **katıldı**"* (gövde doğru: "işgal etti … 1920 Trianon'la bırakıldı") | `isg: yugoslavya` 1919-08-12'den, renk Trianon'da | 🟡 başlık bayat — "işgal etti" olmalı |
| 6 | `kronoloji_sinir_avrupa_orta.js` · 1919-07-25 · Çekoslovak ordusu Paris hattına ulaştı | *"… fiilî sınır oldu"* · `yer_id` Bratislava | Bratislava 1920-06-04'e dek Macar rengi, `isg:` YOK (fiilî gün avus109'da yalnız AY: 1919-01) | 🟡 madde-harita boşluğu — madde fiilî Çekoslovak denetimini anlatıyor, harita göstermiyor; çare `isg:` (kaynaklı tam gün gerek) |
| 7 | `data/yerlesimler_p77_avrupa.js` başlık yorumu (satır 10-11) | *"Eisenstadt → … olması gereken avusturya-cumhuriyet 1921-11-13'ten"* | Eisenstadt artık 1920-06-04'ten (`52d72247`) | ⚪ yorum bayat (madde değil) |

**Doğru kalanlar (tarandı, değişmedi):** Villa Giusti 1918-11-03 (*"Trento ve Trieste bu gün … İtalya'ya geçer"* — veri ✓) ·
Trianon 1920-06-04 (iki cümle de ✓, biri bu gece düzeltildi) · `kronoloji_sinir_komsu` 1918-12-01 (tarihî olgu) ·
`kronoloji_cok_1dunya_A` "künyelerinde bu olay zaten var" (veri iddiası değil).

## Öneri (metinler sende)
1 → *"Haritada Bohemya ve Moravya 11 Kasım 1918'de Çekoslovakya rengine geçer; Slovakya Trianon (4 Haziran 1920) ile katılır."* + `odak_yer`'den Bratislava, Kassa çıkar.
2 → *"Haritada Bohemya-Moravya'nın devri bir yıl önce olmuştu; Kárpátalja (Ungvár, Munkács) bu antlaşmayla Çekoslovakya'ya geçer."* + `odak_yer: ["Ungvár (Uzhhorod)","Munkács (Mukacheve)"]`.
3, 4 → `odak_yer`'den Zagreb çıkar; 4'e *"Transilvanya haritada Trianon'da (1920) Romanya rengine geçer"* eklenebilir.
5 → başlık *"SHS ordusu Prekmurje'yi işgal etti — Mura ötesi"*.
6 → ayrı kalem (Slovakya `isg:` borcu; tam gün kaynak araştırması).
⚠️ Ders (senin cümlen): veri değişince anlatı bayatlıyor ve hiçbir kapı bunu sormuyor. Bu taramanın `odak_yer` kolu
mekanikleştirilebilir: "odak noktası maddenin ±30 gününde sahip değiştirmiyor" — kapı adayı.
