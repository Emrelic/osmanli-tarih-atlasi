# KARAYİP + ORTA AMERİKA — F2 RAPORU (UMIT, 17 Kasım 2026)

Ağaç: `C:\atlas\.claude\worktrees\sehir-afrika-1116` (dal `sehir-afrika-kuzey-dogu-1116`, origin/main'in 202 commit gerisinde;
atlas ölçümü bu yerel ağaçtan). Commit/push YAPILMADI.

Çıktılar:
- `data/sehir_tarihce_karayip_1.js` (`window.SEHIR_TARIHCE_KARAYIP_1`, `arac/sehir_tarihce.py yaz` ile üretildi)
- `denetim/SEHIR-DUNYA-1116/karayip-orta-amerika/YAZILAMADI-KARAYIP.md`
- Girdi JSON + üretici betik scratchpad'de (`kur_karayip.py`, `karayip_1.json`)

## ① Ölçülenler
- `py -I arac/sehir_tarihce.py denetle data/sehir_tarihce_karayip_1.js` → **10 şehir · 17 sahiplik dönemi · 93 olay · ihlal 0 · uyarı 11**.
- Yazılanlar (10/12): Santo Domingo, La Habana, Kingston, Port-au-Prince, Ciudad de Guatemala, Antigua Guatemala,
  San Juan (PR), San José (CR), Tegucigalpa, San Salvador.
- `tarihce_var` iki yönlü kontrol: 12 hedeften hiçbiri yerel 32 dosyada ya da origin/main'deki 49 `sehir_tarihce_*` dosyasında ≤3 km / aynı adla yok.
- Atlas eşleşmesi (≤3 km): 9 şehir atlasta var; Santo Domingo atlasta YOK (zincir 1900'e kadar).
- Uyarı dağılımı: 4 tanesi "şehir başlangıcı = atlas başlangıcı" (Kingston 1692, Port-au-Prince 1749, Guatemala City 1776,
  San Juan 1521: zincir bilerek boş). 7 tanesi hayalet: yıl hassasiyetli sınırlar künye günüyle örtüşmüyor (San José 2, San Salvador 3,
  Santo Domingo 2).

## ② Bulunamayanlar / zayıf kalanlar
- **Yazılamadı (2):** Panama City (≤3 km kuralı: Panamá Viejo ≈3,7 km, Casco Viejo ölçülmedi); Managua (Britannica kuruluş/ilk anılış yılı vermiyor).
- **Tanık kuralı karşılanmadı, kesinlik düşürüldü (4):** yıl kaynakta açık, ama şehir adı aynı cümlede değil →
  Port-au-Prince 1749, San Juan 1521, San Salvador 1528: yil→onyil; Antigua Guatemala Mart 1543: ay→yil.
- **Tek kaynak (Britannica):** Kingston, Port-au-Prince, Guatemala City, San Juan (1521 için), San José, Tegucigalpa, San Salvador ve
  Santo Domingo'nun bütün el değiştirmeleri. **Çift kaynak:** Santo Domingo kuruluşu (Britannica + UNESCO 526), La Habana 1519
  (Britannica + UNESCO 204), Antigua kuruluş zinciri (UNESCO 65 + Britannica; 1542/1543 çelişkisi beyanlı).
- El değiştirme günleri: Havana 1899/1902 dışında hepsi **yalnız yıl**.

## Siteler
| Site | Sonuç |
|---|---|
| Britannica | AÇILDI: Santo-Domingo, Dominican-Republic (tarih bölümü), Havana + Havana/History, Kingston-Jamaica, Port-au-Prince, Guatemala-City, Antigua-Guatemala, San-Juan-Puerto-Rico, Panama-City, San-Jose-Costa-Rica, Costa-Rica/Independence, Tegucigalpa, Managua, San-Salvador. 404: `/topic/history-of-the-Dominican-Republic`, `/place/San-Salvador-El-Salvador` (yanlış slug). "When did Haiti occupy…" sayfası YZ üretimi, KULLANILMADI. |
| UNESCO WHC | AÇILDI: 526 (Santo Domingo), 204 (Old Havana), 65 (Antigua), 266 (San Juan; tarih yok), 1582 (Panamá; kuruluş tarihi yok). 404: 790. |
| NPS (nps.gov/saju) | AÇILDI (1508 ve 1634 teyidi; 1521 yok) |
| GeoNames | AÇILDI (Old Panama koordinatı) |
| Cambridge Core / Persée / JSTOR / ulusal akademik kaynaklar | DENENMEDİ (zaman; bir sonraki tur için ikinci kaynak buradan) |

## ③ Atlas düzeltme önerileri (karar Emre'nin)
1. **Santo Domingo**: atlasta 3 km içinde nokta yok → nokta eklenmeli (1496'dan başlayan zincir bu dosyada hazır).
2. **San José (CR)**: atlas 1838-01-01'de başlıyor; Britannica 1736 kuruluş + 1823 başkentlik → başlangıç 1736'ya çekilebilir.
3. **San Salvador**: atlas 1841-01-01; Britannica 1528'de bugünkü yerinde → geri çekilebilir. `el-salvador-cumhuriyeti` künyesi 1841'de
   başlıyor, Britannica 1839'dan beri Salvador başkenti diyor; `orta-amerika-federasyonu` künyesi 1838-05-30'da bitiyor, Britannica
   San Salvador'u 1834–39 federasyon başkenti sayıyor → künye uçları teyit edilmeli.
4. **Managua**: atlas 1933-01-01'de başlıyor; Britannica 1857'de kalıcı başkent der → başlangıç en az 1857'ye çekilebilir (cümle tanık kuralını karşılamadığı için bu dosyaya yazılmadı).
5. **Guatemala City**: atlas 1821-09-15→1823-07-01 `__BOSLUK__`; Britannica 1822–23'te Iturbide'nin Meksika İmparatorluğu altında olduğunu söylüyor → `meksika` künyesiyle doldurulabilir (gün ikinci kaynakla).
6. **Kingston**: atlas `ingiltere` kullanıyor; `jamaika-ingiliz` (1655–1962) künyesi var.
7. Atlasın kuruluş günleri (Havana 1519-11-16, Antigua 1543-03-10, Tegucigalpa 1578-09-29) okunan kaynaklarda yok → teyit edilmeli.

## Önerim
Bir sonraki turda ikinci kaynak olarak Cambridge History of Latin America özetleri ve ulusal akademik kaynaklar okunsun (önce
Santo Domingo'daki yalnız yılı bilinen el değiştirmeler ile San José ve San Salvador'daki 1821–1841 sınırları). Panama'da da önce
Casco Viejo'nun koordinatı ölçülmeli.
