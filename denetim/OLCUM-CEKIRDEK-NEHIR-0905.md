# Osmanlı çekirdeğinin nehirleri — 16/19 var, ve **kayıp sanılan biri KAYNAK KUSURU**

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2950 · 5 Eylül 2026
> 🔴 KOD YAZILMADI (motor donuk). Bu bir **ölçüm**.

---

## ⇒ MANŞET
```
19 çekirdek nehir · ad aramasıyla bulunan 15 · bulunamayan 4
🔴 ve dördünden BİRİ veride VAR: `Kızılırmak` → **`Kiz?lirmak`**
   (düz ASCII soru işareti, U+003F — Natural Earth'ün KENDİ kusuru)
⇒ GERÇEK durum: **16 var · 3 yok**
```

## ① TABLO
| nehir | scalerank | featurecla | bulunan ad | alan |
|---|---|---|---|---|
| Tuna | **2** | River | Danube | name |
| Fırat | **3** | River + Lake Ctr. | Euphrates | name |
| Dicle | **4** | River | Dicle | name |
| Dinyeper | **4** | River + Lake Ctr. | Dnipro | name |
| Drava | 6-7 | River | Drava | **name_alt** |
| Dinyester | 6 | River + Lake Ctr. | Dniester | name |
| Sava | 7 | River | Sava | name |
| Meriç | 7 | River | **Evros** | name |
| Prut | 7 | River | Prut | name |
| Morava | 7-8 | River | Morava | name |
| **Kızılırmak** | **7** | River | **`Kiz?lirmak`** 🔴 | name |
| Sakarya | 8 | River | Sakarya | name |
| Aras | 8 | River | Aras | name |
| Kura | 8 | River + Lake Ctr. | Kura | name |
| Ceyhan | 9 | River | Ceyhan | name |
| Nil | 1-3 | River + Lake Ctr. | Mountain Nile | **name_en** |
| **Vardar** | — | — | 🔴 **YOK** | — |
| **Yeşilırmak** | — | — | 🔴 **YOK** | — |
| **Seyhan** | — | — | 🔴 **YOK** | — |

## ② 🔴 `Kızılırmak` — AD VARYANTI DEĞİL, **KAYNAK VERİSİNİN KUSURU**
```
repr    'Kiz?lirmak'
kod     U+004B U+0069 U+007A **U+003F** U+006C U+0069 U+0072 U+006D U+0061 U+006B
                              └─ düz ASCII SORU İŞARETİ
```
Yani `ı` bir kodlama dönüşümünde kaybolmuş ve yerine `?` konmuş.
⚠️ **Bir mojibake ya da değiştirme karakteri (U+FFFD) DEĞİL** —
dosyada şüpheli kontrol karakteri sayısı **0**. Düz bir soru işareti,
yani hata bizim okumamızda değil **kaynağın kendisinde.**
📌 Ve dosya zaten Türkçe harf taşımıyor: 1455 parçanın tamamında
düzgün Türkçe harfli nehir adı **yalnız 2** (`Künes`, `Zayü`).
⇒ **Normalleştirici bunu ÇÖZEMEZ** — `?` bir harf varyantı değil.
Bunu ancak bir **eşanlam kaydı** çözer: `Kızılırmak → "Kiz?lirmak"`.
`§4`ün Türkçe yazım ekseninin **kaynak verisi** yüzü.

## ③ 🔴 VARDAR · YEŞİLIRMAK · SEYHAN — GERÇEKTEN YOK
Ad araması tükendikten sonra **coğrafî kutuyla** arandı (havzada hangi
nehir kayıtlı?):
```
Vardar havzası (40,5-42,3°K · 20,8-22,6°D)  → yalnız Haliacmon · Morava
Yeşilırmak havzası (39,5-41,5 · 35,0-37,5)  → yalnız Kelkit · Kiz?lirmak
Seyhan/Çukurova (36,5-39,0 · 34,5-37,5)     → yalnız Ceyhan · Kiz?lirmak
```
⇒ Üçü de veride **yok**, ad varyantı değil.
🟡 **Ama Yeşilırmak'ın kolu `Kelkit` VAR** (scalerank 9) — yani havza
tamamen boş değil, ana kol eksik.
⇒ Bu üçü tablonun **dışında kalır** ve cezaları atanamaz. Çözümü ad
işi değil **veri işi**: ya daha ince bir nehir katmanı (`ne_10m` yerine
başka kaynak), ya elle çizim.

## ④ 🟢 FEATURECLA SORUNU — SANILDIĞI GİBİ DEĞİL
Sevk *"Nil ikinci kovada, kıyaslanabilir mi?"* diye sordu. Ölçüldü:
```
`featurecla` bir NEHİR sınıflaması DEĞİL, bir PARÇA özniteliği:
   yirmi nehrin BEŞİ hem `River` hem `Lake Centerline` parçası taşıyor
   (Fırat · Dinyeper · Dinyester · Kura · Nil)
```
⇒ Kovalar ayrık değil, **iç içe**. Ve ölçek sorusu:
```
Nil    scalerank 1-3   (parçaları Tuna'nın 2'sini KUŞATIYOR)
Tuna   scalerank 2
```
🟢 Nil'in parçaları Tuna'nın derecesinin **iki yanına** düşüyor ⇒ iki
kova **aynı ölçekte** görünüyor; `Lake Centerline` ayrı bir skala
kullanmıyor. **Kıyaslanabilir.**
⚠️ Bu bir gözlem, tam bir kanıt değil: yalnız Nil ↔ Tuna çifti üzerinden
bakıldı, kovalar arası sistematik bir kıyas **yapılmadı.**

## ⑤ SONUÇ — çapa çekirdekte ÇALIŞIR, ama üç delikle
```
🟢 16 nehre scalerank atanabiliyor, ve sıralama makul:
   Tuna 2 · Fırat 3 · Dicle/Dinyeper 4 · Sava/Meriç/Prut/Kızılırmak 7 ·
   Sakarya/Aras/Kura 8 · Ceyhan 9
🔴 3 nehir (Vardar · Yeşilırmak · Seyhan) tablonun DIŞINDA
🔴 1 nehir (Kızılırmak) yalnız bir eşanlam kaydıyla erişilebilir
```
⇒ Çapa çekirdek coğrafyada **çalışır**, ama önce iki kayıt gerekir:
① `Kızılırmak → "Kiz?lirmak"` eşanlamı ② üç eksik nehrin kaydı.

## ⑥ NE ÖLÇMEDİM
```
🔴 Eşanlam haritam ELLE kuruldu (Tuna→Danube · Meriç→Evros · Aras→Araks…)
   — bir alet üretmedi. Bulunamayan üçü için denenen anahtarlar
   tükendi ama daha fazla varyant OLABİLİR.
🔴 Havza kutuları KABA — kutu bu gece üç kez yanlış bulgu üretti
🔴 İki `featurecla` kovasının sistematik kıyası — yalnız Nil↔Tuna
🔴 Ceza eşleme tablosu — bu bir KARAR, ölçüm değil (M-2950 ③)
```

---

# EK — M-2951: daha ince katman var mı, ve `?` kaç vaka?

## ⑦ 🔴 `Kiz?lirmak` **TEK VAKA** — eşanlam listesi bir satır
```
ne_10m_rivers.geojson   `?` içeren ad: **2** — ve ikisi AYNI nehir
   name    'Kiz?lirmak'  scalerank 7
   name_en 'Kiz?lirmak'  scalerank 7
ne_10m_lakes.geojson    `?` içeren ad: **0**
```
⇒ Kusur yaygın değil, **tekil.** Eşanlam kaydı tek satır:
`Kızılırmak → "Kiz?lirmak"`.

🟢 **VE YAPISAL SEBEBİ ÖLÇÜLDÜ — iki katmanın ad şeması FARKLI:**
```
ne_10m_lakes    name · name_en · name_alt · **name_tr** · name_ar ·
                name_de · name_el · name_fa … (20+ dil alanı)
ne_10m_rivers   name · name_en · name_alt   ← YEREL DİL ALANI HİÇ YOK
```
⇒ Göller katmanının **Türkçe ad kanalı var**, nehirler katmanının
**yok.** `Kiz?lirmak` bir tesadüf değil: nehir adları tek bir
transliterasyon kanalından geçiyor ve `ı` orada kayboluyor.
📌 Ve göllerde `?` sayısının **0** olması bunu doğruluyor — orada
Türkçe adın gideceği bir alan var.

## ⑧ DAHA İNCE KATMAN — YOK
`veri-kaynak/` tarandı. Su/nehir içeren **iki** katman var, üçüncüsü yok:
```
ne_10m_rivers.geojson   1455 parça
ne_10m_lakes.geojson    1355 parça
```
Ve üç eksik nehir **ikisinde de yok**:
```
                ne_10m_rivers   ne_10m_lakes
Vardar               🔴 YOK        🔴 YOK
Yeşilırmak           🔴 YOK        🔴 YOK
Seyhan               🔴 YOK        🔴 YOK
```
⇒ **SONUÇ:** bu üç nehir mevcut kaynaklarla giremez. Ya yeni bir veri
kaynağı (HydroRIVERS gibi) ya **elle çizim** gerekir — ve ikisi de bir
kapsam kararıdır, bu turun işi değil.

## ⑨ 🟡 VE BİR YAN BULGU: aradığım veri VAR — ama YANLIŞ COĞRAFYADA
`veri-kaynak/viabundus/` içinde **Viabundus 1.3** duruyor (19.283 kenar)
ve tam olarak `ONERI-NEHIR-CAPA`da elediğim ③. adayın verisi:
```
Type dağılımı:  land 18.017 · **water 1.116** · **ferry 149** · lsnd 1
```
⇒ Tarihî **su yolu ve GEÇİT/FERİBOT** ağı — yani "geçit noktaları"
adayının tam veri karşılığı. **Ama kapsamı:**
```
enlem  48,72 → 60,71     boylam  3,22 → 37,62
Vardar 🔴 · Yeşilırmak 🔴 · Seyhan 🔴 · **Tuna (Budin) bile 🔴 KAPSAM DIŞI**
```
🔴 Kuzey Avrupa (Hansa havzası) verisi; Budin'e bile ulaşmıyor.
📌 **Ve bu, ③. adayı elemekteki gerekçemi güçlendiriyor:** geçit
verisinin var olduğu tek yer, atlasın **en az** çalıştığı coğrafya.
Geçit sayısı nehri değil **kaynağın kapsamını** ölçerdi — ve burada
o kapsam ölçülebilir hâlde önümde duruyor.

## ⑩ NE ÖLÇMEDİM (ek)
```
🔴 Viabundus'un `water`/`ferry` kenarlarının içeriğini — yalnız
   SAYISINA ve KAPSAM KUTUSUNA baktım
⚪ HydroRIVERS gibi dış bir kaynağın erişilebilir olup olmadığını —
   bu bir kapsam/indirme kararı, ölçüm değil
🔴 `ne_10m_lakes`in `name_tr` alanının nehirler için kullanılabilir
   olup olmadığını (göl katmanı, nehir taşımıyor)
```
