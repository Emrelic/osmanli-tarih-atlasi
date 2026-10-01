# ODAK-KAPAT-ALTINORDA-1001 — `kronoloji_altinorda.js` odaksız maddeleri

Koordinatör görevi (M-5724 sırası). `data/`ya YAZILMADI; öneri listesidir.

## 0. Ölçüm
- `odak_olc.py --dosya kronoloji_altinorda.js`: 44 madde · KONUMLU 31 · **ODAKSIZ 13**.
- TDV indirildi: `ozbek-han` 200 · `toktamis-han` 200.

## 1. 🔴 Üç bulgu (odak dışı, ama ölçüldü)
1. **#10 başlık OLGU HATASI:** madde *"Mısır Memlük hânedanından Tolun-Bige Hatun ile evlilik"* diyor.
   TDV `ozbek-han`: *"…Özbek Han bu şartlardan vazgeçerek hânedandan Tolun-Bige Hatun’u … kalabalık bir
   heyetle Mısır’a gönderdi ve nikâh merasimi 6 Rebîülâhir 720’de (16 Mayıs 1320) gerçekleştirildi"* —
   Tolun-Bige **Altın Orda hânedanından**dır, Mısır'a GÖNDERİLDİ (el-Melikü'n-Nâsır'la evlendi). Yön ters.
2. **#6 gün TDV'de VAR:** madde *"Gün bilinmediği için yıl başına yazıldı"* (`1314-01-01`). TDV
   `ozbek-han`: *"…16 Zilhicce 713’te (3 Nisan 1314) o zamana kadar görülmedik derecede muhteşem bir
   Altın Orda elçilik heyeti Kahire’ye gitti."* ⇒ önerilen `t`: **1314-04-03** (kaynak TDV, Nüveyrî ve
   Mufaddal rivayeti). ⚠️ "gitti" varış mı çıkış mı — cümle ayırt etmiyor; kaynak Mısır kronikleri
   olduğu için varış muhtemel ama yazılmadı.
3. **#5 günün YERİ:** maddenin günü (11 Mayıs 1314) TDV'de bir KARŞILAMANIN günüdür ve yeri bellidir:
   *"Altın Orda elçileri, 25 Muharrem 714’te (11 Mayıs 1314) Sultâniye şehrinde İlhanlı hükümdarı
   tarafından karşılandı…"*.

## 2. Tablo — 13 madde

| # | t | başlık (kısa) | kova | öneri | kaynak cümlesi (birebir, TDV) |
|---|---|---|---|---|---|
| 5 | 1314-05-11 | Olcaytu'ya elçi | **A** | `yer_id:"Sultâniye"` | `ozbek-han`: "Altın Orda elçileri, 25 Muharrem 714’te (11 Mayıs 1314) Sultâniye şehrinde İlhanlı hükümdarı tarafından karşılandı…" |
| 6 | 1314-01-01 | Kahire'ye 174 kişilik heyet | **A** | `yer_id:"Kahire"` + `t` önerisi 1314-04-03 | `ozbek-han`: "…16 Zilhicce 713’te (3 Nisan 1314) … Altın Orda elçilik heyeti Kahire’ye gitti." |
| 8 | 1319-01-01 | Trakya yağması | **B** | atlasta yok: **Trakya** (bölge) | `ozbek-han`: "…Altın Orda kuvvetleri bütün Trakya’yı altüst ederek Bizans’ı dehşet içinde bıraktı." · "Yağma kırk gün devam etti." |
| 10 | 1320-05-16 | Tolun-Bige evliliği | **C** | — | yukarıdaki cümle: "Mısır’a gönderdi ve nikâh … gerçekleştirildi" — ÜLKE; Kahire açıkça yok · 🔴 başlık hatası (bulgu 1) |
| 19 | 1380-09-08 | Kulikovo | **B** | atlasta yok: **Kulikovo sahası** | `toktamis-han`: "Toktamış, 8 Eylül 1380 tarihinde Kulikovskaya savaşında Ruslar’a yenilerek Kırım’a dönen … Mamay Mirza’yı…" |
| 20 | 1380-01-01 | Kalka boyunda Mamay yenildi | **B** | atlasta yok: **Kalka ırmağı** | `toktamis-han`: "…Mamay Mirza’yı Don nehrine dökülen Kalka ırmağı boyunda mağlûp etti." |
| 23 | 1391-06-01 | Kondurca Savaşı | **B** | atlasta yok: **Kondurca ırmağı** | `toktamis-han`: "Toktamış Han ile Timur arasındaki ilk karşılaşma Receb 793 (Haziran 1391) tarihinde Kondurca (Kunduzca) ırmağı boyunda vuku buldu." |
| 25 | 1393-01-01 | Jagiello'ya yarlık | D | — | belge; yer değil |
| 30 | 1399-01-01 | Edigü, Toktamış ve Litvanya'yı yendi | **C** | — (Poltava havuzda) | TDV `toktamis-han` muharebe yerini (Vorskla) VERMİYOR — madde `d`sinde var; itilmedi |
| 31 | 1405-01-01 | Toktamış öldürüldü | **B** | atlasta yok: **Karaton ırmağı** | `toktamis-han`: "…Karaton ırmağı boyunda atıyla birlikte uçuruma yuvarlanarak öldü." |
| 32 | 1419-01-01 | Edigü idaresi sona erdi | D | — | dönem sonu |
| 33 | 1420-01-01 | Edigü öldü | D | — | `nogaylar` ölüm yerini vermiyor (madde `d`si) |
| 42 | 1480-11-11 | Ugra karşılaşması | **B** | atlasta yok: **Ugra ırmağı** | madde kaynağı `kronoloji_rusya.js` (ATLAS, D207) |

## 3. TOPLAM — 13
```
A   2   Sultâniye · Kahire — TDV cümlesiyle, havuzda tam adla
B   6   Trakya · Kulikovo · Kalka · Kondurca · Karaton · Ugra (5'i ırmak/saha — nokta çözmez)
C   2   Tolun-Bige evliliği (ülke) · Vorskla (kaynakta yok)
D   3   yarlık · dönem sonu · ölüm (yer yok)
```
⇒ Uygulanırsa ODAKSIZ 13 → **11**. Ayrıca iki VERİ düzeltmesi önerisi (bulgu 1 ve 2).
