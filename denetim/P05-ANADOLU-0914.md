# P05 · ANADOLU — teslim raporu (14 Eylül 2026)

Oturum: P05-ANADOLU · sevk: 1.MURAT (DALGA SINIF2) · koordinatör **TOPARLA** dedi (limit %95) — kalan kalemler "yapılmadı" diye yazıldı.
Motor koşulmadı. Commit atılmadı.

## Dosyalar (adıyla)
| dosya | ne |
|---|---|
| `data/yerlesimler_anadolu_0914.js` (YENİ · `window.YERLESIMLER_ANADOLU_0914`) | 4 nokta: Bayburt · Zamantı (Pınarbaşı) · Mesudiye (Milas) · Gölköy (Habsamana) |
| `data/olaylar_p0058.js` (YENİ · `window.OLAYLAR_P0058`) | 6 madde: 1339 · 1360 · 1394 · 1424-02-22 · 1514-10-23 · 1514-11-24 |
| `data/yer_yama_zaza.js` | yalnız Kiğı: Osmanlı'ya geçiş 1515-09-10 → 1514-10-23 |
| `denetim/YAMA-ANADOLU-0914.json` | kilitli dosya önerileri: Denizli · Ankara · Bizans haraçgüzâr pencereleri · bağlama satırları |

**Bağlama (Oturum 0):** `arac/girdi.py` GIRDI_DOSYALARI → `"yerlesimler_anadolu_0914.js",` · `index.html` → `data/olaylar_p0058.js`.
⚠️ `yer_yama_zaza.js` canlı girdi değil (ölçüldü: Kiğı hiçbir canlı dosyada yok) — Kiğı düzeltmesi yama merge edilene kadar haritaya inmez.

## Madde madde
| madde | ne yapıldı | kaynak | durum |
|---|---|---|---|
| 0008/H-0001 | Ölçüldü: Afyon `sahibata→germiyan` 1327 kademesi **d041a08'de zaten inmiş**; paket durum satırı bayat. İkiye bölünmüş görünümün kalan kaynağı Sivrihisar `germiyan 1300-1354` — TDV `sivrihisar` bunu desteklemiyor (Karaman → 1356 Osmanlı). | TDV sahib-ataogullari · sivrihisar | kısmen çözüldü · Sivrihisar **yapılmadı** |
| 0016/H-0002 · 0017/H-0001 · 0030/H-0018 | Kayseri–Elbistan üçgeni: kutuda 0 nokta (ölçüldü). **Zamantı (Pınarbaşı)** noktası yazıldı: ilhanli →1339 · eretna →1360 · dulkadir →1515-06-13 · Osmanlı. | TDV dulkadirogullari · Kaya 2014 (MKÜ SBE Derg. 11/25, pypdf ile okundu) · konum Kültür Envanteri | çözüldü (merge bekliyor) · Göksun/Gürün/Sarız **yapılmadı** |
| 0030/H-0004 | Ordu sivri ucu: iç kesimde 0 nokta. **Mesudiye (Milas)** ve **Gölköy (Habsamana)** yazıldı, zincir komşu Ordu'dan (§4 şartlı; Ordu'nun 06-01 günleri ay kodu, bildirildi). 1281-1350 `trabzon-rum` bir ÇIKARIM. | TDV ordu--sehir | çözüldü (merge bekliyor) · Reşadiye (İskefsir)/Koyulhisar **yapılmadı** |
| 0031/H-0019 | Veri kökü = Denizli'nin Germiyan'dan 4 yıl önce (1425) geçmesi → YAMA kalem 1. Arka plandaki "hayalet" Germiyan çiziminin arayüz tarafı **ölçülmedi**. | TDV denizli | yama önerildi · arayüz yapılmadı |
| 0033/H-0018 | **Bayburt** noktası yazıldı (Osmanlı 1514-10-23; üst sınır). **Kiğı** 1514-10-23'e çekildi. 1514-10-23 ve 1514-11-24 maddeleri yazıldı. | TDV bayburt · erzincan · selim-i · akkoyunlular | çözüldü (merge bekliyor) · 24 Kasım günü yalnız Remzi Kılıç (ara bölge) |
| 0035/H-0059 | Denizli germiyan →1429-02-01 önerildi (TDV: "1429'da Osmanlı idaresine geçti"). | TDV denizli · murad-ii · kutahya | yama önerildi |
| 0042/H-0022 | Bizans haraçgüzâr pencereleri kaynaktan: A 1371-09-26→1394 (51 nokta) · B 1424-02-22→1453-05-29 (34 nokta). Açılış/kapanış maddeleri yazıldı. Epir kayıtlarının dahil edilmesi sorusu ve renk P13B. | TDV bizans · bayezid-i · murad-ii | yama önerildi · uygulama yapılmadı |
| 0042/H-0037 | Ankara'yı Süleyman 806'da (1403-04) **Çelebi Mehmed'den** aldı; kayıttaki `timurlu 1402→1404` Mehmed'i yutuyor. Öneri: timurlu →1403-09-01 · mehmed-celebi →1404-03-01. | TDV fetret-devri · mehmed-i · isa-celebi | Emre'ye soru (gün seçimi) |

## Yeni noktaların komşuları (ölçüldü, girdi 80 dosya / 3818 nokta)
| nokta | ad eşleşmesi (norm) | en yakın 3 | 3 km |
|---|---|---|---|
| Bayburt | yok | Aşkale 54,5 · Kelkit 68,3 · Erzincan 84,0 | 0 |
| Zamantı (Pınarbaşı) | yok | Kayseri ~74 · Elbistan ~88 · Darende ~102 (kale koordinatıyla) | 0 |
| Mesudiye (Milas) | "milas" → Muğla Milas 932 km (ad bu yüzden parantezli) | Ordu 57,4 · Şebinkarahisar 58,5 · Niksar 70,9 | 0 |
| Gölköy (Habsamana) | yok | Ordu 37,4 · Ünye 56,5 · Niksar 57,2 | 0 |

Emilme etkisi (§2): Bayburt bugün Aşkale (akkoyunlu/safevi) ve Kelkit (1500'de OSM) peteklerine emilen alanı alır; Zamantı Kayseri–Elbistan kamasını keser; Mesudiye/Gölköy Ordu'nun güneye uzayan ucunu Niksar/Şebinkarahisar'a karşı sınırlar. **Petek geometrisi ölçülmedi** (motor koşulmadı).

## Denetim önce / sonra
Sonra koşusu: `denetle.py` bellekte `yerlesimler_anadolu_0914.js` eklenerek (girdi.py'ye yazılmadı).

| ölçü | önce | sonra |
|---|---|---|
| Değişmez 1 sahipsiz | 324 (3818) | 324 (3818) ⚠️ yerleşim sayısı değişmedi — ekin sayıma girip girmediği **ölçülemedi** (Bayburt D7 listesinde görünüyor) |
| 1b | 0 | 0 |
| 2 açık | 531 / 0 | 534 / 0 |
| 2s | 100 | 98 |
| 2i | 3 | 3 |
| 2t | 15 | 18 (tavan 42) |
| 4c / 4d | 129 / 356 | 129 / 356 |
| 7 | 658 | **664 ✗** |
| mükerrer madde | ✓ | **6 çift ✗** — hepsi 1919-1922 işgal başlıkları, benim maddelerim DEĞİL |
| A2-BAG | 603/603 · hata 0 | 612/612 · hata 0 |

🔴 İki kırmızı satır için kaynak ayrıştırması **yapılmadı**: arada başka işçiler `data/`ya yazdı (git status: olaylar.js · yerlesimler.js · yer_yama*.js değişmiş; olaylar_p0053/55/56 yeni). D7'nin +6'sından hangisinin Bayburt/Zamantı/Mesudiye/Gölköy'den geldiği ölçülmedi — görünen tek bağ `1502-01-01 Kemah → safevi · ada: Aşkale+Bayburt+Erzincan+Erzurum+Kemah`.
`node --check` üç dosyada temiz.

## Yapılmadı (TOPARLA)
Sivrihisar zinciri + 1356/1362 maddeleri · Göksun/Gürün/Sarız · Reşadiye (İskefsir)/Koyulhisar · Bizans pencere iç kırılmalarının Değişmez 2 ölçümü · Epir kayıtları · D7 +6 ayrıştırması · petek geometrisi · 0031/H-0019 arayüz tarafı.
