# Oturum 12 — DÜZELTME LİSTESİ: data/yerlesimler.js için tam kayıtlar

`yerlesimler.js` **çok sahipli**dir; bu oturum DOKUNMADI. Aşağıdaki kayıtlar,
`yerlesimler_avrupa.js` aktifleşince yeni noktaların yanında **görsel çelişki**
üretecek mevcut kayıtlardır. Entegrasyon kilit sırasına göre uygulanacak.

Satır numaraları 2026-07-30 günü canlı `data/yerlesimler.js`'ten (917 kayıt,
r83 sonrası) ölçüldü; dosya değişirse `ad:` ile aranmalı.

⚠️ **Sıra önemli:** 1-9 numaralı düzeltmeler `iskocya · irlanda · kastilya ·
aragon · norvec` kimliklerine dayanıyor. `iskocya/irlanda/kastilya/aragon`
renkler.py'ye eklenmeden uygulanırlarsa o pencereler **boyasız** kalır
(norvec zaten tanımlı). Önce renkler.py (OTURUM-12-KIMLIK.md), sonra bunlar.

✅ Hepsi `s:`→`s:` geçişidir — Değişmez 2 yalnız `d:`/`v:` kırılmalarını
saydığından **kronoloji borcu doğmaz.**

## A. Kesin öneriler

### 1. Edinburg — satır 712
- **Eski:** `s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}]`
- **Yeni:** `s:[{f:"1281-01-01",t:"1707-05-01",d:"iskocya"},{f:"1707-05-01",t:"1923-10-29",d:"ingiltere"}]`
- **Gerekçe:** İskoçya 1707 Birlik Yasaları'na (yürürlük 1 Mayıs 1707) kadar
  ayrı krallık. Yeni dosyada 9 İskoç noktası bu zinciri kullanıyor; Edinburg
  düzeltilmezse İskoçya'nın ortasında tek İngiliz petek kalır.

### 2. Dublin — satır 711
- **Eski:** `s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}]`
- **Yeni:** `s:[{f:"1281-01-01",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda"}]`
- **Gerekçe:** İrlanda Serbest Devleti 6 Aralık 1922'de kuruldu; Dublin başkenti.
  (1281'de Dublin İngiliz Pale'inin merkezi — 1603 öncesi `irlanda` penceresi
  Dublin için YANLIŞ olur, öneri bilerek yalnız 1922 sonrası.)

### 3. Bordo — satır 716
- **Eski:** `s:[{f:"1281-01-01",t:"1923-10-29",d:"fransa"}]`
- **Yeni:** `s:[{f:"1281-01-01",t:"1453-10-19",d:"ingiltere"},{f:"1453-10-19",t:"1923-10-29",d:"fransa"}]`
- **Gerekçe:** Bordeaux, Plantagenet Gaskonyası'nın merkezi; Castillon'dan
  sonra 19 Ekim 1453'te teslim oldu. Yeni Bayonne kaydı (1451-08-20'ye kadar
  ingiltere) ile tutarlılık şart — bugünkü hâliyle Gaskonya'nın ortası Fransız,
  kıyısı İngiliz görünür.

### 4. Madrid — satır 720 · 5. Sevilla — satır 721
- **Eski:** `s:[{f:"1281-01-01",t:"1923-10-29",d:"ispanya"}]`
- **Yeni:** `s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}]`
- **Gerekçe:** İspanya birliği II. Fernando'nun Aragon tahtına çıkışıyla
  (20 Ocak 1479) başlar. Yeni dosyanın 20 Kastilya noktası bu zinciri kullanıyor.

### 6. Barselona — satır 723 · 7. Valensiya — satır 724 · 8. Mayorka (Palma) — satır 1117 · İbiza — satır 1119
- **Eski:** `s:[{f:"1281-01-01",t:"1923-10-29",d:"ispanya"}]`
- **Yeni:** `s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}]`
- **Gerekçe:** Dördü Aragon Tacı toprağı. (Menorka (Mahon) kaydının da ilk
  penceresi aynı şekilde bölünmeli: 1281–1479 `aragon`, kalan zinciri —
  1708-1802 İngiliz penceresi — DOĞRU ve dokunulmamalı.)

### 9. Oslo — satır 740
- **Eski:** `s:[{f:"1281-01-01",t:"1814-01-14",d:"danimarka"}, …]`
- **Yeni:** `s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"}, …]` (1814 sonrası aynen)
- **Gerekçe:** Norveç 1537'ye kadar (Kalmar içinde bile) ayrı krallık; 1537'de
  Danimarka'nın miras eyaletine dönüştü. Yeni Bergen/Stavanger/Tønsberg/
  Trondheim/Uddevalla noktaları bu zinciri kullanıyor. `norvec` renkler.py'de
  ZATEN tanımlı — bu düzeltme kimlik beklemez.

## B. İber Birliği penceresi (1580-1640) — KARAR VERİLDİ, YARISI İŞLENDİ

Merkez oturum kararı: pencere uygulanacak; arşiv tarafını Oturum 12, canlı
tarafını entegrasyon işler.

- ✅ **İŞLENDİ (2026-07-30):** yeni dosyanın 8 Portekiz noktasına
  (Coimbra, Braga, Évora, Faro, Bragança, Lagos, Setúbal, Aveiro)
  `{f:"1580-08-25",t:"1640-12-01",d:"ispanya"}` penceresi eklendi
  (Alcântara zaferi 25 Ağustos 1580 → restorasyon 1 Aralık 1640).
- ⏳ **ENTEGRASYONA KALAN:** Lizbon (satır 718) ve Porto (satır 719):
  - **Eski:** `s:[{f:"1281-01-01",t:"1923-10-29",d:"portekiz"}]`
  - **Yeni:** `s:[{f:"1281-01-01",t:"1580-08-25",d:"portekiz"},{f:"1580-08-25",t:"1640-12-01",d:"ispanya"},{f:"1640-12-01",t:"1923-10-29",d:"portekiz"}]`
  - ⚠️ İki dosya **aynı üretimde** girmeli; yoksa 1580-1640 arası iki farklı
    Portekiz görünür.

## C. İsteğe bağlı (mevcut sadelik korunabilir)

- **Marsilya** (`fransa` tüm aralık): Provence 1481'e kadar Anjou kontluğu.
  Yeni Aix/Toulon/Avignon(1348 öncesi) noktaları da AYNI sadeleştirmeyle
  yazıldı — ya hep ya hiç; ayrı `provans` kimliği açmaya değmez görünüyor.
- **Paris** (`fransa` tüm aralık): 1420-1436 İngiliz-Burgonya idaresi. Yeni
  Rouen/Caen/Reims/Troyes kayıtları bu dönemi işliyor; Paris'in de
  `{f:"1420-05-21",t:"1436-04-13",d:"ingiltere"}` penceresi eklenebilir
  (13 Nisan 1436: Richemont'un şehre girişi). Eklenmezse büyük görsel çelişki
  yok — Paris hinterlandı zaten karışık dönem.

## D. Bu dosyayla İLGİSİZ ama ölçümde görünen mevcut yakın çiftler

`dogrula` koşusunda mevcut veride 3 km altı iki çift çıktı (bilgi, dokunmadım):
Anadolu Hisarı ↔ Rumeli Hisarı 1.54 km (Boğaz'ın iki yakası — muhtemelen
kasıtlı), Budin ↔ Peşte 1.57 km (Tuna'nın iki yakası — muhtemelen kasıtlı).
