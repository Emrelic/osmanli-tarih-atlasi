# NOKTA-AMERIKA — noktasız Amerika kümeleri · 17 Eylül 2026

Oturum: NOKTA-AMERIKA (eski KOSU10-KALAN) · şartname `oturumlar/KOSU13-OTOBUS.md` · sevk 1.MURAT
Çıktı: **`data/yerlesimler_nokta_amerika_0917.js`** → `window.YERLESIMLER_NOKTA_AMERIKA_0917` — **25 nokta**.
`girdi.py` GIRDI_DOSYALARI kaydı 1.MURAT'ta; `girdi.oku_dosya` dosyayı ayrıştırıyor (25/25, ölçüldü).

## Soru: o dönemde orada DEVLET var mıydı?
- Aday: `denetim/NOKTASIZLIK-ADAY-0917.json` içindeki `NOKTASIZ-ADAY` kümeleri, boylam < −30 → **88 küme · 2.572.474 km²**.
- "Noktasız", tarihten bağımsız bir ölçümdür: bütün tohumlardan 40 saatlik yürüyüşle erişilemeyen kara.
- Bir nokta ancak şu şartla yazıldı: kasaba bir devlet idaresinde kuruldu ya da idareye alındı. Misyon, özel çiftlik, geçici kamp ve salt keşif **kur sayılmadı**.

```
sınıf           küme       km²
NOKTA            20     738.752   ≤250 km'de bu partinin yeni noktası
BOSLUK-DOGRU     51   1.318.675   kutup/subarktik · tropikal orman içi · Kuzey Chaco
KARAR             9     267.856   ≤250 km'de karar bekleyen aday
ACIK              8     247.191   kaynaklı nokta bu turda bulunamadı
```
- Tam liste: `denetim/NOKTA-AMERIKA-SINIF-0917.txt`. Sınıflayıcı: `denetim/ARAC-NOKTA-AMERIKA-SINIF-0917.py`.
- ⚠️ BOSLUK-DOGRU bir **kaba coğrafî süzgeç**, kaynak hükmü değildir.
  - **Kutup/subarktik:** İnuit, Dene ve Innu yurdu. İngiliz, Danimarka ve Rus-ABD iddiası nominaldir; fiilî idare mevcut karakol noktalarındadır.
  - **Amazon, Orinoko ve Guyana içi:** Sömürge idaresi nehir karakollarındadır (mevcut noktalar).
  - **Kuzey Chaco:** Fiilî idare 20. yüzyılda gelir.
- ⚠️ NOKTA sınıfı "250 km içinde nokta var" demektir. Kümenin kapanıp kapanmadığını ancak motor yürüyüşü (koşu) ölçer.

## 25 nokta (hepsi beş sınavı geçti: künye · renk · 3 km · dönem · kaynak)
| nokta | kur | zincir başı | kaynak (özet) |
|---|---|---|---|
| Serro (Vila do Príncipe) | 1714-01-29 | portekiz-brezilyasi | IBGE resmî tarihçe — vila |
| Rio de Contas | 1723-11-27 | portekiz-brezilyasi | IBGE — vila |
| Diamantina (Arraial do Tijuco) | 1734-01-01 (yıl) | portekiz-brezilyasi | IBGE — Real Intendência |
| Caetité | 1754-01-01 (yıl) | portekiz-brezilyasi | IBGE — freguesia |
| Pirenópolis (Meia Ponte) | 1754-08-10 | portekiz-brezilyasi | IBGE — distrito |
| Viana (Maranhão) | 1757-07-08 | portekiz-brezilyasi | IBGE — vila (1709 Cizvit misyonu sayılmadı) |
| Chaves (Marajó) | 1758-01-01 (yıl) | portekiz-brezilyasi | IBGE — vila |
| Casa Branca | 1814-10-25 | portekiz-brezilyasi | IBGE — alvará |
| Caxias do Sul | 1875-01-01 (yıl) | brezilya-imparatorlugu | IBGE — devlet kolonisi |
| Cochabamba (Villa de Oropesa) | 1571-08-15 | ispanyol-peru | Bolivya Meclisi arşivi *Fuentes* (2011) |
| Oruro | 1606-01-01 (yıl) | ispanyol-peru | eScholarship Oruro kent tarihi (tutanak 29 Ekim 1606) |
| Barinas | 1577-06-30 | ispanyol-peru | Diccionario de Historia de Venezuela (F. Polar) |
| Guanare | 1591-11-03 | ispanyol-peru | Diccionario de Historia de Venezuela |
| Calabozo | 1724-02-01 | ispanyol-peru | Diccionario de Historia de Venezuela — villa |
| San Ignacio Guazú | 1609-01-01 (yıl) | ispanya | belediye resmî tarihçe |
| Encarnación (Itapúa) | 1615-03-25 | ispanya | belediye resmî tarihçe |
| Río Cuarto | 1786-11-11 | ispanya | üniversite sayfası (UNRC) |
| San Rafael (Fuerte S. R. del Diamante) | 1805-04-02 | ispanya | Mendoza üniversite sayfası |
| Junín (Fuerte Federación) | 1827-12-27 | arjantin-cumhuriyeti | Buenos Aires eyalet arşivi (gün aktarım) |
| Minas | 1783-01-01 (yıl) | ispanya | Lavalleja resmî sitesi |
| Treinta y Tres | 1853-03-10 | uruguay-cumhuriyeti | belediye resmî sitesi |
| Columbia (Missouri) | 1821-04-07 | abd | Missouri Üniversitesi kütüphanesi |
| Morganton | 1784-01-01 (yıl) | abd | NCpedia (State Library of NC) |
| Rawlins | 1868-01-01 (yıl) | abd | WyoHistory (Wyoming State Historical Society) |
| Traverse City | 1847-06-13 | abd | Traverse Area Historical Society |
Tam kaynak metni ve kısa alıntılar her kaydın `kaynak:` alanında.

## Bildirimler
- **Üç Brezilya noktasının bağımsızlık ucu:** Maranhão bağımsızlığa 1823-07-28'de, Pará 1823-08-15'te katıldı (IBGE). Viana ve Chaves'in zincir ucu atlas konvansiyonu gereği 1822-09-07'de. Konvansiyon değişirse bu iki nokta birlikte değişir.
- **4c künye aşımı (bilinen):** Oruro ve Cochabamba'da `ispanyol-peru` dönemi 1825-08-06'da bitiyor, künye 1824-12-09'da. Atlasın Sucre, Potosí ve La Paz kayıtları (3 kayıt) aynı ucu taşıyor; tutarlılık için korundu, yeni kusur doğmadı.
- **Misyon kasabaları:** San Ignacio Guazú ve Encarnación Cizvit reducción'ları. İspanyol tacına bağlı olduklarından zincir `ispanya` ile yazıldı. `guarani-misyonlari` künyesi var ama **rengi yok** (arac/renkler.py); renk eklenirse 1609/1615-1767 dilimi o kimliğe geçebilir.
- **Kopya konum:** San Rafael'in 1805 kalesi bugünkü Villa 25 de Mayo'dadır, koordinatın ~20 km batısında. Barinas 1628 ve 1759'da taşındı; koordinat bugünkü yer.
- **St. Louis kaydı (yan bulgu):** `s:` içinde `yeni-ispanya 1764→1821` + `meksika 1821→1923` + `abd 1848→1923` var. Meksika dönemi ABD dönemiyle 75 yıl örtüşüyor ve Meksika hiç Missouri'de değildi → "devlet var, yeri yanlış" (§3.5.-1). Bu turun işi değil, bildirildi.

## KARAR bekleyen 8 aday
| aday | seçenekler | öneri |
|---|---|---|
| Tucuruí (Alcobaça) | 1781 karakol (yerliler yıktı) · 1870 freguesia (başka yer) | ELE — süreksiz |
| Bauru | 1856 tasarruf tescili · 1887 vila yasası · 1896 vila kurulumu | 1887-04-02 |
| Diamantino | 1728-09-18 keşif bildirimi · 1811-08-09 distrito | 1811-08-09 |
| Tupiza | 1574-06-04 gelenek (tutanak yok) | kaynak aransın |
| Maturín | 1760-12-07 misyon (Academia Nacional de la Historia) · 1735-07-31 ferman | 1760 misyon devlet idaresi değil → Cumaná valisinin yerleşimi günsüz; kaynak aransın |
| Franklin (Venango) | A: abd 1787 (Fort Franklin) · B: fransa 1756-59 / ingiltere 1760-63 + boşluk + abd | A |
| Lewistown (Montana) | 1879 özel Métis yerleşimi; 1874-75 geçici ordu kampı | bölgenin Crow toprağı durumu okunsun |
| Aberdeen (SD) | 1880 (ACHP) · 1881-07-06 (ilk tren) | 1881-07-06 |

## Açık (8 küme)
- Mato Grosso do Sul / Pantanal (-21.3, -55.4) · Tocantins (-9.3, -47.2) · Entre Ríos kuzeyi (-31.0, -59.0) · Bahia Recôncavo iç (-12.5, -39.6) · Nevada (41.3, -117.0) · Rio Grande do Sul batı (-30.3, -55.5) · Santiago del Estero doğusu (-29.2, -62.5) · Sergipe-Alagoas iç (-9.5, -37.9).
- Aday kasabalar (ör. Miranda 1778, Carolina, Esquina 1806, Cachoeira 1698, Elko 1869, Palmeira dos Índios) bu turda kaynaklanmadı. Cachoeira ile Elko mevcut noktalara 100 km'den yakın, kümeyi kapatmayabilir.

## Ölçülemeyenler
- Encyclopaedia Britannica bütün sayfalarda 403 verdi (13 + 7 sayfa); yerine resmî ve üniversite kaynakları kullanıldı.
- `denetle.py` ve koşu çalıştırılmadı: kümelerin gerçekten kapandığını motor yürüyüşü ölçer.
- Bu noktaların doğurduğu kırılmalar `s:` kırılmalarıdır ve Osmanlı küresine uzaktır; 2s'de büyük olasılıkla KAPSAM DIŞI, ölçülmedi.

## Aletler
`denetim/ARAC-NOKTA-AMERIKA-UZAK-0917.py` (aday uzaklıkları) · `…-URET-0917.py` (dosyayı üretir + beş sınav) · `…-SINIF-0917.py` (88 küme sınıflaması).
