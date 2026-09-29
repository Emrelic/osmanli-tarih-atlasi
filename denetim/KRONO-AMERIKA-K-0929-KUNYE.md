# KRONO-AMERIKA-K-0929 — KÜNYE ÖNERİLERİ (M-5416 ③ uyarınca; `devletler.js`e DOKUNULMADI)

Kuzey Amerika, Orta Amerika ve Karayipler için `KUNYE-DUNYA-0929.json` içinde **hiçbir eksik künye önerisi yok**
(`eksik` listesindeki 46 kayıt Balkan/Kafkasya/Kürdistan/Yemen ağırlıklı). Bu paket iki id önerdi; ikisi de madde
KAYBOLMASIN diye kondu (madde `devletler[]` içinde adıyla duruyor, künye inince kendiliğinden bağlanır).

## 1. `yeni-ispanya-ilk-donem` — ⚠️ yeni künye YERİNE **künye GENİŞLETME** öneriyorum (`CLAUDE.md §3.5 D205 ②`)

| | |
|---|---|
| **kullanan maddeler** | 1528-03-31 Villa Real de Chiapa (San Cristóbal) · 1531-04-16 Puebla de los Ángeles |
| **sorun** | `yeni-ispanya` künyesi **1535-04-17**'de başlıyor (genel valiliğin kuruluşu). Atlas ise Yeni İspanya sahipliğini noktalarda **1535'ten ÖNCE** başlatıyor: San Cristóbal 1528-03-31, Antequera (Oaxaca) 1529, Compostela 1531, Puebla 1531 (defter satırları). M-5416 ② geriye dönük bağlamayı yasaklıyor; bu yüzden iki maddeyi geçici id'yle yazdım. |
| **sınıf** | ② — "aynı polity sürüyor": 1521 (Tenochtitlan'ın düşüşü, `aztek-imparatorlugu` künyesinin bitişi 1521-08-13) ile 1535 arasında İspanyol Yeni İspanya yönetimi (Cortés kaptanlığı, 1527 Birinci Audiencia) zaten vardı; genel valilik onun kurumsallaşmasıdır. |
| **öneri** | `yeni-ispanya` künyesinin `f` alanını **1521-08-13**'e çek (aztek künyesinin bitişiyle bitişik). O zaman iki madde `yeni-ispanya`ya bağlanır ve `yeni-ispanya-ilk-donem` id'sine ihtiyaç kalmaz (üretici `denetim/ARAC-KRONO-AMERIKA-K-0929-URET.py`de tek satır). |
| **kaynak** | Gerhard, P., *A Guide to the Historical Geography of New Spain* (Univ. of Oklahoma Press, rev. ed. 1993) — 1521-35 dönemi valilik öncesi idare; **kaynak sayfası açılmadı**. TDV arandı (`arama/?q=meksika`, `?q=amerika`): «AMERİKA» ve «AMERİKA BİRLEŞİK DEVLETLERİ» maddeleri var, «Meksika» başlıklı madde **çıkmadı**; 1521-35 Yeni İspanya idaresi için TDV'den dayanak **bulunamadı** (ABD maddesinin okunan cümleleri yalnız 1803/1819/1846/1848/1867 tarihlerini içeriyor). |
| **kuşku** | orta: `f=1521-08-13` bir kaynak günü DEĞİL, künye bitişik olsun diye seçilmiş işarettir (`D210`: künye günü kaynak değildir). |

## 2. `orta-amerika-federasyonu` — **AÇMA ÖNERMİYORUM**, madde `guatemala`ya da bağlı

| | |
|---|---|
| **kullanan madde** | 1823-07-01 Orta Amerika Birleşik Eyaletleri bağımsızlığını ilan etti (`devletler: ["guatemala","orta-amerika-federasyonu"]`) |
| **durum** | `guatemala` künyesi 1821-09-15'ten 1923'e kadar uzanıyor ve kendi kronolojisinde 1823-01-01'de federasyonu zaten taşıyor (yıl işareti). Madde `guatemala` üzerinden **şimdiden görünür**; ayrı künye açılırsa Guatemala'nın penceresi bölünmez, yalnız federasyon adı ek etiket olur. |
| **açılırsa** | `f=1823-07-01` (Britannica «United Provinces of Central America»); `t`: federasyonun çözülüşü 1838-41 arası — **kesin gün ölçülemedi**. |
| **öneri** | Açma. `guatemala`nın 1823-01-01 maddesi yıl işaretidir, benim madde 1 Temmuz 1823'ü verir; ikisi yan yana durur. |

## 3. Bu pakette künye ihtiyacı DOĞURMAYAN ama gözlemlenen tutarsızlıklar (bilgi)

- Atlas `Quebec` ve `Montreal (Ville-Marie)` noktalarını `fransa` künyesiyle (1608-07-03 / 1642-05-17 → 1763-02-10)
  çiziyor; **"Yeni Fransa" künyesi açmaya gerek yok**, `fransa` (987-1792) pencerelerini içeriyor. (İlk taslakta
  `yeni-fransa` önermiştim; ölçünce gereksiz çıktı, Montréal maddesi `fransa`ya bağlandı.)
- Yerli künyelerin `t:` alanı **antlaşma günlerini egemenlik devri günü** gibi taşıyor (Fort Laramie 1851, Treaty 6/8,
  Robinson-Superior 1850, Fort Bridger 1868…): yanlış bağlama sınıfları `-DUZELTME.md` D5-D9'da.
