# KASA-TERS-MADDE-1004 — ±30 gün içindeki madde kırılmanın TERSİNİ mi söylüyor? (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatörün ② talebi · önceki iş: `KASA-IC-CELISKI-1004` (yetim madde yönü)

## ÖNGÖRÜ — ölçümden ÖNCE (sayı ve mekanizma ayrı)
- **Koordinatör:** SAYI 5–15 (17 yetim maddeden az). MEKANİZMA: çoğunluk "kuşatma başlangıcı ↔ sonuç günü" kayması.
- **KASA:** SAYI 5–20. MEKANİZMA: çoğunluk kuşatma kayması **değil**, **ardıl/fail karışması** olacak. Madde fiilî alışı bir devletle anlatıyor, kırılma ise hukukî devri (antlaşma) ya da başka bir ardılı yazıyor (işgal ↔ ilhak, Rusya ↔ ardıl künye, Mısır ↔ Osmanlı gibi). Kuşatma kayması ±30 gün penceresinde zaten çoğu zaman aynı olayı anlattığı için "uyumlu" görünür, çelişki üretmez.
  (öngörü commit'i `7412fc89`, ölçümden önce)

## ÖNGÖRÜ DEĞERLENDİRMESİ
| | sayı | mekanizma |
|---|---|---|
| Koordinatör | ✓ tuttu (7 çelişki + 5 şüpheli; 5–15 aralığında) | ✗ **tutmadı**: kuşatma kayması 7 çelişkinin **hiçbiri** değil; yalnız 1 şüpheli (Tripoliçe) bu sınıfta |
| KASA | ✓ tuttu (5–20) | ✓ tuttu: **7 çelişkinin 7'si** "kim aldı" sorusu (ardıl/fail), "ne zaman aldı" değil |

## YÖNTEM
- Evren: her kayıtta sahibin değiştiği her kırılma (`isg:` dahil) × aynı `yer_id`'li ve **±30 gün içindeki** madde ⇒ **890 çift** (`denetle.olaylari_yukle()` × `girdi.yukle()`).
- Bu, Değişmez 2'nin `yer_id` (a) koluyla kapattığı çiftlerin kendisi. Ad/metin eşleşmesi kolu ile taraf (b) kolu bu taramaya **girmedi**.
- Süzgeç (`denetim/ARAC-KASA-TERS-MADDE-1004.py`):
  - **F1**: madde (başlık + gövde + kişiler) kırılmanın **yeni sahibini** anmıyor. Denetimin kendi `_2s_norm` / `_2s_taraf_adaylari` / `_2s_gecer` işlevleri kullanıldı.
  - **F2**: madde yalnız kuşatma/yağma/yıkım anlatıyor, sahiplik fiili yok.
- ⇒ **330 işaretli çift** (F1 321 · F2 16; çakışmalı). **330'un hepsi elle okundu.** İşaretsiz 560 çift okunmadı.
- ⚠️ F1 çok gürültülü: maddelerin çoğu öznesiz yazılmış ("Serez'in fethi", "Belgrad'ın kaybı") ve Osmanlı'yı adıyla anmıyor, ama doğru. Gerçek çelişkiler maddenin **başka bir faili adıyla** andığı ya da kaydın **tersini** söylediği satırlardan çıktı.

## HÜKÜM (ölçtüm)
**890 çiftten 7 çelişki · 5 şüpheli · 1 alakasız kapatıcı.** Kalan işaretliler uyumlu (öznesiz anlatım).

### Çelişkiler (7) — madde ±30 gün içinde, aynı yerde, kaydın yazdığından BAŞKA bir sahip/durum söylüyor
| # | kırılma (kayıt) | madde | madde ne diyor | kayıt ne diyor | sınıf |
|--:|---|---|---|---|---|
| 1 | **İzmir** 1402-12-01 `sovalye → aydin` | 1402-12-14 "Timur İzmir'i Saint Jean şövalyelerinden aldı" | Timur aldı | Aydınoğulları | ardıl: aracı fatih (Timur) atlanmış |
| 2 | **Bihaç** 1527-01-01 `macaristan → avusturya` | "Bihaç'ın kısa süreli Osmanlı idaresi — Mohaç ve Yayça'nın düşüşünün ardından" | Osmanlı | Avusturya (1527→1592) | **ters yön**: madde Osmanlı diyor, kayıt Habsburg |
| 3 | **Lugos** 1554-04-07 `d:Osmanlı → __BOSLUK__` | "Petrovics Péter'in Lugos ve Karánsebes sancakbeyi atanması" | Osmanlı'nın sancakbeyi ataması | sahipsiz (1554→1596) | madde Osmanlı hâkimiyetini **teyit ediyor**, kayıt boşluk açıyor |
| 4 | **Lahsa** 1841-10-01 `benihalid → suud-ikinci` | "Mısır kuvvetleri Ahsâ (Lahsa) bölgesinden çekildi" (1836'dan beri) | 1836/38–1841 Mısır | `benihalid` 1818→1841 | Mısır dönemi yok |
| 5 | **İşkodra** 1913-04-23 `d:Osmanlı → arnavutluk-bagimsiz` | "İşkodra'nın Karadağlılar tarafından işgali" | Karadağ | Arnavutluk | ardıl: Karadağ işgali atlanmış |
| 6 | **Halep** 1918-10-27 `d:Osmanlı → fransa-cumhuriyet` | "Halep'in Arap ve İngiliz kuvvetlerince işgali … şehir önce Ar[ap]…" | Arap + İngiliz | Fransa | ardıl |
| 7 | **İstanbul** 1920-04-23 `d:Osmanlı → tbmm-turkiye` | 1920-04-11 "Son Osmanlı Meclis-i Mebusanı'nın dağıtılması … İstanbul'un İtilaf kuvvetlerince resmen işgal edilmesi…" | İtilaf işgali (Mart 1920) | TBMM Türkiyesi | statü: madde işgali anlatıyor, kayıt şehri Ankara hükümetine veriyor, `isg:` yok |

### Şüpheli (5)
- **Tunus** 1535-07-21 `d:Osmanlı → hafsi`. Madde: "Tunus'un Şarlken'e kaybı". Kayıt, Şarlken'in tahta geri oturttuğu Hafsîleri yazıyor. Bu savunulabilir bir ardıl yorumu; çelişki sayılması hükme bağlı.
- **Sevâkin** 1884-02-01 `v:misir → ingiltere`. Madde: "Mehdî'ye düşmeyen tek liman". Mısır mı İngiltere mi, madde söylemiyor.
- **Mora (Tripoliçe)** 1821-03-25 `d:Osmanlı → yunanistan`. Madde: "Yunan İsyanı başladı". Kırılma isyanın **başladığı** gün, şehrin alındığı gün değil. **Koordinatörün mekanizmasının tek örneği.**
- **Adranos** 1323-09-01 `bizans → Osmanlı`. Madde: "Adranos seferi — Osman Bey'in son seferi". Sefer var, alış yok.
- **Şam** 1918-10-01 `d:Osmanlı → fransa-cumhuriyet`. Madde: "Şam boşaltıldı". Fail adı yok. Halep'teki desenle (Arap/İngiliz ↔ Fransa) aynı olabilir.

### Alakasız kapatıcı (1) — Değişmez 2 kör noktasının koordinatörün ilk tarif ettiği hâli
- **Bağdat** 1534-12-04 `safevi → Osmanlı` kırılmasını ±30 gün içinde kapatan tek `yer_id`'li madde: "Fuzûlî'nin Leylâ vü Mecnûn mesnevisini tamamlaması" (1535-01-01). Bağdat'ın fethiyle ilgisi yok. Fethin kendi maddesi bu çiftlerde yok (ya `yer_id`'si farklı ya ±30 gün dışında; ölçülmedi).

### Yan gözlem — gün kaymaları (sahip uyumlu, gün farklı)
Priştine 1912: madde 10-02, kırılma 10-22 (20 gün) · Eğri 1596: kırılma 10-12, madde (Haçova) 10-26 · Hotin 1806: 7 gün. Sahip çelişkisi değil; Değişmez 2 bunları zaten kapatıyor.

## BULAMADIM / beyan
- Yalnız `yer_id` eşleşen çiftler sorgulandı. Değişmez 2'nin ad geçişi ve taraf kolları bu taramada yok; o kollarda ters madde olup olmadığı **ölçülmedi.**
- F1 süzgeci "yeni sahip anılıyor" ise çifti eledi. Madde yeni sahibi **ve** başka bir faili birlikte anıyorsa kaçmış olabilir.
- 560 işaretsiz çift okunmadı.
- 7 çelişkinin hiçbiri için TDV'ye bakılmadı; hüküm yalnız "madde ile kayıt birbirini tutmuyor".

---

# EK · `yer_id` = ANTLAŞMANIN İMZA YERİ sayımı (koordinatörün (3) hükmü için; düzeltme yazılmadı)
Araç `denetim/ARAC-KASA-IMZA-YERI-1004.py`, ham liste `denetim/KASA-IMZA-YERI-1004.json`.
- **Evren:** `k:"antlasma"` ya da başlığında Antlaşma/Barış/Mütareke/Sözleşme/Protokol/Konvansiyon… geçen **320 madde**.
  - 133'ünün `yer_id`'si **YOK**. Bunların **93'ünde** `kapsam_genis` de yok. Örnekler: Zitvatorok, Bucaş, Karlofça, Vasvar, Prut, Kerden, Ziştovi, Saint-Germain. ⇒ Koordinatörün §9 notuna göre bunlar kamerasız ya da Osmanlı sınırına uçan maddeler.
  - `kapsam_genis`: 42 · `odak_kutu_kaynak`: **1**.
- **Dedektör:** antlaşmanın adında `yer_id`'nin adı geçiyor ("Berlin Antlaşması" + `yer_id:"Berlin"`) ⇒ 91 aday. Elle sınıflandı:

| sınıf | sayı | not |
|---|--:|---|
| **SAF İMZA YERİ** (`yer_id`'nin toprağı antlaşmadan etkilenmiyor) | **52** | İstanbul ×13 · Paris ×4 · Lozan ×3 · Londra ×2 · Erzurum ×2 · İskenderiye ×2 · Sofya ×2 · Yaş ×2 · Gelibolu · Amasya · Stettin · Aachen · Nijmegen · Bahçesaray · Edirne 1713 · Niş 1739 · Torino · Bükreş 1812 · Münih · Akkirman 1826 · Kütahya · Fort Laramie · Fort Bridger · Berlin · Trablus 1910 · Bükreş 1913 · Atina · Moskova 1921 · Ankara 1921 · Mudanya |
| **İMZA = ETKİLENEN** (yer hem imza yeri hem değişen toprak) | 13 | Belgrad 1739 · Hotin 1621 · Edirne 1829 · Edirne 1878 · Hemedan 1727 · Reşt 1732 · Kars 1921 ×2 · Riga 1920 · Tartu 1920 · Brest-Litovsk 1918 · Tunus 1883 · Gümrü 1920 |
| **Toprak değiştirmeyen olay** (ittifak, kongre, ateşkes, meşveret) | 12 | Yergöğü ×2 · Kalas ×2 · İstanbul 1790/1854/1914 · Londra 1827/1840 · Erzurum/Sivas/Amasya 1919 |
| **Dedektörün yanlış pozitifi** (`yer_id` zaten etkilenen toprak; doğru uygulama) | 14 | Dubrovnik (Zadar) · Riga 1561 (Vilnius) · Çernigov (Deulino) · Milano (Rastatt) · Menorka (Amiens) · Ayamavra · Revan (Türkmençay) · Fort Portal · Doha ×2 · Kavala (Bükreş) · Kars 1918 (Brest-Litovsk) · Ustrumca (Neuilly) · Petsamo (Tartu) |

- **Dedektörün kaçırdıkları** (antlaşma adı `yer_id`'den farklı ama `yer_id` imza yeri ya da yakını): Uşi → **Lozan** · Ayastefanos → **İstanbul** · Sevr → **Paris** · Küçük Kaynarca → **Silistre** · Pasarofça → **Semendire**. ⇒ Saf imza yeri sınıfı **en az 52 + 5 = 57.**
- 📌 Mükerrer madde (aynı `t:` + aynı başlık): İstanbul 1909-04-19 ×2 · İstanbul 1913-11-17 ×2 · Sofya 1915-09-06 ×2. Ayrı kalem.

## İSTİYORUM
- Ters madde taramasının ad/taraf kollarına genişletilmesi (bu tarama yalnız `yer_id` kolu).
- 7 çelişkinin TDV ile ölçülmesi mi, yoksa önce proje kararları mı? (İstanbul 1920'deki `tbmm-turkiye` sözleşmesi, ardıl künye politikası.)
