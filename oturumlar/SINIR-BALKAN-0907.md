# SINIR-BALKAN-0907 — ilerleme

> Şartname: `oturumlar/SINIR-HUKUKI-ORTAK-0907.md`
> Bölge: **Balkanlar + Orta ve Doğu Avrupa**
> Dosya: `denetim/SINIR-HUKUKI-BALKAN-0907.json`
> Ad alanı: `data/sinir_hukuki_balkan.js` → `window.SINIR_HUKUKI_BALKAN`
> Oturum kimliği: `local_4e8bd8d2-9f54-4e6f-86ea-b78db6da75ac` (ölçüldü, `get_session("self")`)

---

## ⓪ TESLİM — sayıyla

```
KENAR (bölgemde)          60      hükümsüz kalan: 0
  🟢 hal:"hukuki"         17      C'ye GİRER — NE çizgisi 1923 için kullanılabilir
  🔴 hal:"bulunamadi"     24      ARANDI, yok → A/B'de kalır
  ⚪ hal:"olculemedi"     19      kalem AÇIK
öncül damgası      ÖLÇTÜM 43 · DEVRALDIM-DOĞRULANMADI 4 · ÖLÇMEDİM 13
bölge dışı uçlu kenar     14      (kimin yazacağı koordinatöre soruldu)
```

**Değişim sınıfları** (şemaya ÖNERİLEN alan, `_YENI_ALAN_ONERISI`):
```
degismedi        17    çizgi 1923-10-29'dan bugüne aynı
ic-sinir-1923    15    o gün İKİ TARAF DA AYNI DEVLETTİ  ← EN BÜYÜK BULGU
cizgi-kaydi       9    toprak el değiştirdi, NE çizgisi 1923 için YANLIŞ
olculemedi       19
```

## ① ALETLER

| dosya | ne yapar |
|---|---|
| `denetim/ARAC-SINIR-BALKAN-KENAR-0907.py` | NE poligon → kenar; birebirlik sınavı |
| `denetim/ARAC-SINIR-BALKAN-TDV-0907.py` | TDV gövde çekici (§4 dört tuzağı) |
| `denetim/ARAC-SINIR-BALKAN-ARA-0907.py` | gövde içinde **cümle** arayıcı |
| `denetim/ARAC-SINIR-BALKAN-KIMLIK-0907.js` | `devletler.js` kimlik taraması (node) |
| `denetim/ARAC-SINIR-BALKAN-HUKUM-0907.py` | hüküm + geometri birleştirici |
| `denetim/ARAC-SINIR-BALKAN-SINAV-0907.py` | **kabul sınavı** — C13 dört ayak, `exit 0/1` |

Ölçüm çıktısı: `denetim/OLCUM-SINIR-BALKAN-KENAR-0907.json`
TDV gövdeleri: `denetim/_tdv_balkan_0907/` (22 madde, kesilmeden)

## ② GEOMETRİ — kendi bölgemde YENİDEN ölçüldü, devralınmadı

```
paylaşılan hat tepesi     9.269
iki tarafta da OLMAYAN        0     ⇒ tolerans YOK, eşik YOK
yalnız noktada değen çift     0
geçersiz geometri             0
3 ondalık + ardışık tekrarsız 9.269 → 9.202 (%99,3 korunuyor)
```
`KADEME-MODEL-0907`ün "kenar çıkarımı mekanik" hükmü bölgemde de **tutuyor**.

## ③ EN BÜYÜK BULGU — şartnamenin üç kovası bu bölgede YETMİYOR

`1923-10-29`da **15 kenarın iki ucu da aynı devletti**: SHS Krallığı (11) ·
Çekoslovakya (2) · Sovyet Rusya (1) · Romanya (1). O gün o çizgiler **devlet
sınırı değildi** ⇒ 1923 için hukukî metin *aranamaz, çünkü yoktur*.

`bulunamadi` bunlar için **doğru ama yetersiz**: "aradım, metin yok" ile
"o gün böyle bir sınır yoktu" aynı kovaya düşüyor ve bir sonraki oturum
**olmayan bir metni aramaya** çıkar. ⇒ `ic_sinir_1923` (bool) ve
`degisim_sinifi` alanları önerildi; ikisi de bir `if` ile sorulabiliyor.

## ④ `kimlik_bugun` BU ATLASTA DOLDURULAMAZ — ölçüm

`devletler.js` tarandı (627 künye). Atlasın penceresi `1923-10-29`da bittiği
için **bugünkü devletlerin künyesi yok**: `Kosovo` 0 · `North Macedonia` 0 ·
`Ukraine` 0 (beş ayrı kökle arandı). 60 kaydın 120 `kimlik_bugun_*` alanı
**null** — bu bir eksiklik değil bir **ölçüm**.

🟢 Buna karşılık `kimlik_1923` **tam dolu ve künyeden geliyor**:
`yugoslavya` (SHS) · `cekoslovakya` · `sovyet-rusya` · `romanya-kralligi` ·
`macaristan-naiplik` · `avusturya-cumhuriyet` · `bulgaristan-kralligi` ·
`arnavutluk-bagimsiz` · `polonya` · `estonya` · `letonya` · `litvanya` ·
`yunanistan` · `almanya` · `italya` · `isvicre` · `tbmm-turkiye`.

🔴 Ve iki uçta kimlik **kenara göre** değişiyor, ülkeye göre değil:
`Poland↔Russia` ve `Lithuania↔Russia` kenarlarında 1923 komşusu **Rusya değil
`almanya`** (Doğu Prusya); `Hungary↔Ukraine` ve `Slovakia↔Ukraine`
kenarlarında **`sovyet-rusya` değil `cekoslovakya`** (Podkarpatská Rus).
⇒ Eşleme tablosu ülke başına **tek satır olamaz.**

## ⑤ KENDİ HATALARIM — dördü de ölçülerek yakalandı

1. **Oturum kimliğimi yanlış bildirdim.** `list_sessions` çıktısının ilk
   başlıksız satırını kendim sandım — oysa aracın kendi belgesi *"current
   session is excluded"* diyor, yani o satır **tanım gereği ben olamazdım.**
   `get_session("self")` ile ölçüldü, koordinatör haklıydı.
2. **NE'de `Serbia` diye bir `ADMIN` yok** — gerçek ad `Republic of Serbia`
   (`NAME` alanı ise `Serbia`). İlk koşum **sekiz Sırp kenarını** kaçırdı
   (52 → 60). Alet "eksik ülke" listesi bastığı için yakalandı.
3. **`polonya` künyesini "yok" ilan edecektim** — ilk taramam `leh` köküyle
   aradı. `polon` köküyle arayınca çıktı: `polonya` 1918-11-11 → pencere.
   §4 Türkçe yazım ekseni, `ingiliz-hindistani` tuzağı.
4. **Hüküm anahtarını alfabetik normalleştirmemiştim** —
   `("Hungary","Croatia")` kaydı `("Croatia","Hungary")` kenarıyla eşleşmedi,
   bir kenar hükümsüz kaldı. Alet **"hüküm YAZILMAYAN"** diye bastı.
5. **Kabul sınavımın bir dalı YANLIŞ SEBEPLE öttü.** *"kaynaksız hukuki"*
   dalını zorladım, ama kayıt `olculemedi` sınıfındaydı ve önce **tutarlılık**
   kuralı öttü ⇒ dal hiç koşulmadı, *"OTTU"* göründü. Düzeltildi; şimdi
   sekiz dalın sekizi **kendi sebebiyle** ötüyor.

📌 5'in dersi: *bir dalın ötmesi, O DALIN öttüğü anlamına gelmiyor.* `C13`ün
ATEŞLEME ayağı "ötüyor mu" diye soruyor; **"hangi kural ötüyor" diye
sormuyor.**

## ⑥ ÖLÇÜM DÜZELTMESİ — açılış mesajımdaki bir sayı yanlıştı

Açılışta *"12 kenarın bir ucu bölge dışı"* yazdım; **doğrusu 14**
(`Austria↔Germany/Italy/Switzerland` · `Belarus↔Russia` · `Bulgaria↔Turkey` ·
`Czechia↔Germany` · `Estonia↔Russia` · `Germany↔Poland` · `Greece↔Turkey` ·
`Italy↔Slovenia` · `Latvia↔Russia` · `Lithuania↔Russia` · `Poland↔Russia` ·
`Russia↔Ukraine`). Sebep: sayıyı **basılan listeden gözle** saydım, ölçmedim
— ve o liste `head` ile kırpılmıştı. Şimdi `bolge_disi_uc` bir **alan** ve
sınav onu sayıyor.

## ⑦ AÇIK KALEMLER

```
⚪ 19 kenar `olculemedi` — adlarıyla dosyada, her birinin NİÇİN'i yazılı
🟡 4 kayıt `oncul_damgasi:"D"` — Vilnius/Kaliningrad; adreslenebilir kaynak
   yazılı (AJIL «The Vilna Dispute», JSTOR 2189032) ve OKUNMADI
🔴 Austria↔Hungary'nin `f:` günü — Sopron plebisiti (Ara. 1921) ve sınır
   komisyonunun 1922-23 çalışması çipa gününe ÇOK yakın; TDV `avusturya`
   gövdesinde `plebisit` yalnız 1938 için geçiyor ⇒ gün ARANMADI
🔴 Moldova↔Ukraine PARÇALI: Dinyester'in sağı 1923'te Romanya (uluslararası
   sınır, ama BAŞKA yerde), solu iç sınır ⇒ tek `sinif` bu kenarı anlatmıyor
⚠️ Russia↔Ukraine bugünkü hâli TARTIŞMALI; NE'nin çizdiği hat bir SİYASÎ
   SEÇİMDİR. Bölge dışı uçlu; koordinatörün kararı
```

## ⑧ KOORDİNATÖRE SORULAN İKİ SORU (cevap beklenirken durulmadı)

Ⓐ Bölge dışı uçlu **14** kenarı kim yazar? (Önerim: en az bir ucu bendeyse
ben yazayım, `bolge_disi_uc:true` damgalı; birleştirmede `(a,b)` alfabetik
anahtarıyla tekilleştirilsin.)
Ⓑ Avusturya bende mi? 7 kenarının 3'ü Almanya/İtalya/İsviçre'ye bakıyor.

## ⑨ KADEME-MODEL-0907'YE YATAY BULGU

Eşleme tablosunun NE anahtarı **`ADMIN` mi `NAME` mi?** Sırbistan'da ikisi
**ayrışıyor** (`ADMIN`="Republic of Serbia", `NAME`="Serbia"). Tablo tek
anahtar seçmezse bir kimlik iki kez ya da hiç eşleşir.
