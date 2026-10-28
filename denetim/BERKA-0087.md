# BERKA-0087 + GORUNTU-0087 devamı — koordinatör hükümlerinin uygulanması (9 Ekim 2026)

Oturum: GORUNTU-0087 (UMIT) · görevi veren UMIT İRTİBAT (koordinatör hükümleri) · ağaç `C:\atlas-berka` =
`origin/main` `0291c38d` · commit/push yok · iki diff de UYGULANMADI · bütün yollar mutlak.
Önceki rapor: `denetim/GORUNTU-0087.md`.

## 1. HÜKÜMLER VE UYGULAMA

| hüküm | yapılan | diff |
|---|---|---|
| (a) Kotor g:0 → g:1, Cetinje bedeli yazılsın | `g:1` + `not:` alanı: *"Kotor işareti açıldı; etiket çakışmasında Cetinje eleniyor (ölçüldü …)"* | `GORUNTU-0087-KOORD.diff` (güncellendi) |
| (b) Berka → B | Tulmeyse · Ayn el-Ğazâle (Bomba) · Derne: 1281-01-01 → 1551-08-15 `s:__BOSLUK__` + `kaynak:"BEYAN …"` (koordinatörün gerekçesiyle). Osmanlı günü üçünde de 1551-08-15 | `BERKA-0087-KOORD.diff` (başlıkta gün aralığı; yalnız 1281-1551, 1551 sonrası DOKUNULMADI) |

İki diff ayrı, temel aynı, birlikte uygulanabilir (`git apply --check` tek tek ✓ ve art arda ✓ · CR 0).
Sahibi koordinatör (yerleşim dosyaları). Uygulandıktan sonra `py arac/paketle.py yenile`.

## 2. BERKA — kayıt kayıt (D208 · D207 ölçütü)

| nokta | eski | kaynak okuması | yeni |
|---|---|---|---|
| **Tulmeyse** (`yerlesimler_h2_kuzeyafrika.js`) | `s:memluk` 1281→1517-05-19 · `d:` 1517-05-19'dan | Kayıtta **kaynak alanı YOK.** 1517-05-19 Mısır Deltası'nın günü. Bu, KITA 15'in 12 Eylül'de Bingazi ve Derne'de düzelttiği "Sirenayka hiç Memlûk olmadı" anakronizminin **bu dosyada kalmış ikizi.** Şehir düzeyinde kaynak yok ⇒ KALMAZ | `__BOSLUK__` 1281→1551-08-15 · `d:` 1551-08-15'ten |
| **Ayn el-Ğazâle (Bomba)** (aynı dosya) | aynısı | aynısı | aynısı (Tobruk 1556'da kalıyor; Bomba Derne'ye yakın, Derne ile aynı gün) |
| **Derne** (`yerlesimler.js`) | `hafsi` →1510-07-25 · `ispanya` 1510-07-25→1530-03-24 · `rodos-sovalyeleri` 1530-03-24→1551-08-15 · `d:` 1551-08-15 | Tek dayanak TDV `derne`nin *"Trablusgarp ile birlikte 1510'da İspanyollar tarafından zaptedildi. 1530'dan itibaren … şövalyelerine verildi"* cümlesi. Kaydın kendi notu: **üç kırılma günü külliyattan devralındı** (olaylar_ek20, Trablus'un günleri) ⇒ D207 zincirleme devralma. Şövalyeler dönemi için de kendi kaynağı/günü YOK. | `__BOSLUK__` 1281→1551-08-15 · Osmanlı 1551-08-15 KALIR (*"1551'de Osmanlı idaresine geçti"* Derne'nin kendi cümlesi) |
| Bingazi · Merc · Beyzâ · Ecdâbiye · Tobruk | 1551/1556'ya dek dönem yok, `bos:"devletsiz"` + `neden` | Zaten B ile uyumlu ("Osmanlı DEĞİL", beyanlı) | **DOKUNULMADI** (bkz. §5 ⚠️ biçim farkı) |
| Câlû (`kanem-bornu`, kaynak "fizan") | — | hüküm: dokunma, KASA'ya | DOKUNULMADI |

⚠️ **Hükmü aşan bir karar — açıkça bildiriyorum:** Derne'nin `hafsi` (1281→1510-07-25) dönemini de
`__BOSLUK__`'a kattım. Gerekçe: aynı cümlenin parçası ("Hafsî hânedanının idaresi sırasında Trablusgarp ile
birlikte…") ve bitiş günü yine Trablus'un 1510-07-25'i. Tutulsaydı İspanya kalkınca Derne 1281-1510 Berka'nın
ortasında tek noktalık bir Hafsî adası olarak kalırdı. Geri almak tek dönem: `{f:"1281-01-01",t:"1510-07-25",d:"hafsi"}`.

## 3. ÖLÇÜM — `denetle.py` önce/sonra (`PYTHONHASHSEED=0`, origin/main 0291c38d, iki diff birlikte)

Adıyla karşılaştırma `denetle.py`'nin KENDİ işlevleriyle (`degismez1`, `degismez2`, `kapsam_disi`, `yil_temsili_ayir`).
Yoklayıcı tabanda `denetle.py` ile birebir aynı sayıyı verdi (309 · 627/0 · 1727/184).

```
                                ÖNCE        SONRA       adıyla
Değişmez 1   sahipsiz           309         309         + yok · − yok   (__BOSLUK__ sahip sayılır; tavan OYNAMAZ)
Değişmez 2   kırılma / açık     627 / 0     627 / 0     değişmedi
Değişmez 2s  kırılma / AÇIK     1727 / 184  1727 / 184  Derne 1510-07-25 ve 1530-03-24 kırılmalarından DÜŞTÜ
                                                        (kırılmalar Trablus + Malta ile sürüyor, açık değil)
                                                        1551-08-15: Derne'nin eski sahibi rodos-sovalyeleri → __BOSLUK__
Değişmez 2i  işgal              171 / 1     171 / 1     değişmedi
Değişmez 2sk yalnız-taraf       2251        2249        🟢 İYİLEŞME — tavan 2251 → 2249 inebilir
Değişmez 7   sorgusuz enklav    737         734         🟢 (6 aşım → 3) · C-hakiki 10 → 9 · küçük-devlet muaf 304 → 303
Ek denetim   kaynaksız s:       1908        1906        🟢 (tavan 1930 zaten gevşek)
Kuyruk h2_kuzeyafrika kırılma   47          45          (Tulmeyse + Bomba'nın 1517-05-19 kırılmaları)
çıkış kodu                      2           2           ikisinde de yalnız D8 ÖLÇÜLEMEDİ (taze ağaçta devletler_harita.js yok)
```
🔴 **§3.4 tavan disiplini:** iyileşen tavanlar (2sk 2251→2249, kaynaksız 1930→1906) diff'le AYNI COMMIT'te
inmeli. Tavanı yazmak koordinatörün işi, ben öneriyorum.

📌 **Yan bulgu:** `yerlesimler_h2_kuzeyafrika.js` `KUYRUK_DOSYALARI`nda ⇒ Tulmeyse ve Bomba **Değişmez 2'nin
evreninde değil.** 1517 anakronizmi KITA 15'te Bingazi/Derne düzeltilirken muhtemelen bu yüzden görünmedi:
kapı onları hiç sormuyordu.

## 4. D206 — iki uç ve arayüz (headless Chrome, 1523-01-05 ve 1540-06-15, yamalı veri + `paketle.py yenile`)

```
nokta          ÖNCE                                         SONRA
Tulmeyse       serbest-hale · osmanli-dolgu                 AYNI
Bomba          osmanli-cizgi · osmanli-dolgu                AYNI
Derne          devlet-cizgi{ispanya} (1540: {sovalye})      AYNI
kama ucu       osmanli-dolgu + devlet-dolgu{kanem-bornu}    AYNI
işaretler      Tulmeyse/Bomba/Derne ekli · ötekiler değil   AYNI
```
⇒ **Arayüz katmanında DEĞİŞEN HİÇBİR ŞEY YOK (ölçüldü).** Bütün dolgu, çizgi, serbest hâle ve kama motorun
ürettiği gövdeden geliyor (`donemler.js` / `devletler_harita.js`). İşaretler `YERLESIMLER`den okunuyor ama üç
noktanın işaret penceresi `s:` dönemlerinden üretildiği için `__BOSLUK__` dönemi de pencere veriyor; görünürlük
değişmedi. H-0014 kaması ve H-0022 sivri yapısı **motor koşusu olmadan değişmez** — öngörüldüğü gibi.

**Koşudan sonra ne beklenir — ÖNGÖRÜ, ölçüm değil:**
- `__BOSLUK__` motorda adıyla anılmıyor (`uret_petek.py`de 0 geçiş) ⇒ renk sözlüğünde olmayan sıradan bir kimlik
  gibi işlenir, BOYANMAZ. 1281-1551 Bingazi/Merc/Beyzâ ile aynı görünür (açık zemin).
- 1517-1551 arası Berka'daki Osmanlı lekesi (Tulmeyse + Bomba) ve 1510-1551 İspanya/şövalye adası (Derne) kalkar.
  Bölgede Osmanlı yalnız Sellûm/Sîva (Mısır) petekleriyle kalır.
- D206 riski: `__BOSLUK__` kendi peteğini taşıdığı için komşu Mısır/Trablus peteklerine **emilmesi beklenmez**
  (Voronoi değişmez, yalnız sahip değişir). Ama Bomba'nın Osmanlı peteği H-0014 kamasının parçasıysa kama
  küçülür, Sellûm'ünkiyse kalır. Bunu yalnız koşu söyler.
- Koşudan sonra sorulacak pikseller: Tulmeyse (20,951/32,712), Bomba (23,120/32,495), Derne (22,639/32,766),
  kama ucu (22,005/29,866) — `denetim/ARAC-GORUNTU-0087.js` ile aynı sahne JSON'u.

## 5. KRONOLOJİ (D2 senkronu) ve AÇIK NOTLAR

- 1551 maddesi VAR: `olaylar_ek.js:64` "Trablusgarp'ın fethi" (1551-08-15, `yer:"Trablus, Derne"`). D2 tarih
  bakımından kapalı (açık 0). Ama madde **Berka'yı anmıyor.** ÖNERİ (KRONO diff yazılmadı, metin tek satır):
  `d:` sonuna TDV `bingazi`den birebir *"1551 Trablusgarp seferi sırasında Berka bölgesinin Osmanlı hâkimiyetine
  girmesinden sonra Bingazi de kesin olarak Osmanlı yönetimine katıldı (1578)."* eklensin ve `yer:` "Trablus,
  Derne, Berka" olsun. ⚠️ 1551-08-15 günü Berka'ya da Trablus'tan devralınmış bir gündür (TDV `bingazi` gün
  vermiyor). Beş kardeş nokta bunu KITA 15'ten beri böyle taşıyor; bu oturum ona dokunmadı ama D207 açısından
  aynı soru orada da geçerli.
- ⚠️ **Biçim farkı:** koordinatör `__BOSLUK__` dedi, öyle yapıldı. Ama beş kardeş nokta `bos:"devletsiz"`
  taşıyor; Berka'da iki beyan biçimi yan yana duruyor. Haritada ikisi de boyanmıyor. Farkları: `bos:devletsiz`
  D1'de "belgeli sahipsiz" sayılır, `__BOSLUK__` sahip sayılır. Ayrıca `denetle.py:1414`ün sınavına göre
  *"susuyorsa veri-yok"* — kardeşlerin gerekçesi "kaynak SUSUYOR" iken etiketi `devletsiz`. Bu etiket
  tutarsızlığı KITA 15'ten kalma; bu oturumda değiştirilmedi. Tek biçim istenirse 5 kayıtta tek alan değişir.
- Derne İspanya dönemi için ikinci akademik kaynak araştırması ve Câlû'nun Kanem-Bornu kaydı → KASA (hüküm gereği).

## 6. DOSYALAR

- `denetim/BERKA-0087-KOORD.diff` — Derne · Tulmeyse · Bomba (1281-1551).
- `denetim/GORUNTU-0087-KOORD.diff` — Kotor g:1 + not: (güncellendi; önceki sürümün yerine).
- `denetim/BERKA-0087.md` (bu rapor) · `denetim/ARAC-GORUNTU-0087.js` (değişmedi).
- Görüntüler: `SINAV-BERKA-0087-1523-01-05-ONCE.png` · `SINAV-BERKA-0087-1523-01-05-SONRA.png` (aynı — arayüz değişmiyor).
