# UMIT-W16-KAMPANYA-03-1006 — kişi kaynak kampanyası, dilim 03 (② 111 + bulunamadı 29 + koordinatör kararları)

Yama: `denetim/KISI-KAYNAK-03-1006.diff` (sha256 `541b40ccfdd2d879…`, 609 satır, CR 0) · yalnız `data/kisiler.js`.
Zincir: `origin/main` `311296b7` → `EDIGU-1006` → `KISI-KAYNAK-01` → `KISI-KAYNAK-02` (**commitli hâli, 61d0a2ff**) → **03**. Commit yok.

## 0. 🔴 Önce: 02'nin içeriği ve commit yarışı
`61d0a2ff`'deki `KISI-KAYNAK-02-1006.diff`, **yalnız ① sürümüdür** (82 kayıt, 426 satır, sha `2705c946…`): "yalnız ① yaz" mesajı
üzerine 23:33:20'de yeniden üretildi, commit 23:34:13'te bu dosyayı aldı. Commit mesajı ve `UMIT-W16-KAMPANYA-02` raporu ise
190 kayıtlık eski sürümü (706 satır, `26b5b039…`) anlatıyor. ⇒ **② 111 kayıt 02'de YOK; bu yamaya (03) alındı.** (Aksaklık ayrıca
SendMessage ile bildirildi.) Commitlenmiş 02'nin ① dışındaki içeriği: nevsehirli (W12) + hüküm (b) "öteki aday" `ic_not_*` notları.

## 1. Kapsam ve sayım
| | kayıt |
|---|---|
| ② kapsayıcı maddede (W22: sınıf değişmedi) | **111** |
| ③ 18 + D 11 — `kaynak:"bulunamadı — …"` | **29** |
| K3 mimar-sinan · bedreddin tartisma | 2 |
| **toplam değişen** | **142** |
- 03'ten sonra `kaynak` alanı dolu: **288/288**; bunun **259**'u TDV kaynağı, **29**'u "bulunamadı" beyanı. Sayımda ikisi AYRI basılmalı (§1.5 tablosu kaynak alanının doluluğunu sayıyorsa 29 beyanı kaynak sanır).
- Alan değişikliği: kaynak 141 · tartisma 4 · ic_not_t 4 · not 3 · ic_not_not 3 · t 3 · donem 2 · f 1 · ic_not_f 1. İzinsiz anahtar 0; sıra/`id`/`devlet` değişmedi.

## 2. ② 111 — 02'nin ilk sürümüyle aynı kurallar
`kaynak:"TDV: <kapsayıcı> (müstakil madde yok; … kaynakta yok)"`. ② içindeki düzeltmeler (02 raporunda anlatılmıştı, şimdi BURADA):
mengli-giray1 t 1515→1514 (+donem, eski `ic_not_t`) · kara-yuluk, ahmed-bin-said, agung `tartisma` · sundiata-keita t 1255 ve yakub-bey t 1490 dolduruldu ·
not düzeltmeleri kara-yusuf, yakub-bey, ahmed-bin-said (eski `ic_not_not`). Saltanat parantezi kuralı: louis14, mihail-fyodorovic,
nikolay1, rancit-singh, tsevang-rabtan "ölüm yılı kaynakta yok".
⚠️ 02 raporundaki `abbas2`/`kayitbay` not düzeltmeleri ve tür düzeltmeleri ① kayıtlarıdır — onlar commitli 02'de var.

## 3. ③/D 29 — `bulunamadı` (§4)
Biçim: `bulunamadı — TDV İslâm Ansiklopedisi, 5 Ekim 2026; arama: islamansiklopedisi.org.tr/arama (başlık + içerik, ad varyantlarıyla); <aranan adlar · okunan maddeler · neden yok>; W22 tam gövde çıkarıcısıyla (ARAC-TDV-CIKARICI-1006) yeniden denetlendi, sonuç değişmedi`.
D 11'de ayrıca "TDV kapsamı dışı: <ülke> maddesi yok" yazılı. Metinler TABLO-02/05/06'nın `not` sütunlarından; slug'lar tabloda okunduğu gibi.
③: hasan-tahsin · kerey-han · erdeni-batur · harihara1 · krisnadevaraya · zhao-kuangyin · wanyan-aguda · sejong · raden-wijaya · hayam-wuruk ·
thibaw · oba-ewuare · joao1 · shaka · kamehameha1 · liliuokalani · andrianampoinimerina · sho-hashi (18) ·
D: le-loi · nguyen-anh · nzinga · moctezuma2 · cuauhtemoc · pachacuti · atahualpa · simon-bolivar · george-tupou1 · dom-pedro2 · jean-jacques-dessalines (11).
f/t değerlerine dokunulmadı (kaynaksız kalıyorlar; beyan bunu söylüyor).

## 4. Koordinatör kararları — uygulama ve ÖLÇÜM
- **K2** (patrona-halil, kabakci-mustafa, alaeddin-hasan-behmen-sah): "ölüm yılı kaynakta yok" kaldı; dolaylı bulgu **`ic_not_t`**'ye
  "dolaylı dayanak: <cümle> — … (koordinatör K2)" olarak yazıldı. (`not` görünür alan; editoryal not `ic_not_<alan>` şemasına gider.)
- **K3 — ölçüldü:**
  - `mimar-sinan f:1488`: kaydın kendisinde dayanak YOK (`not` "1491'den önce" ve "1538'de kırk sekiz yaşında" der — ikincisi 1490 verir, 1488 değil);
    commit geçmişi: değer `9d89241a` (30 Tem 2026, "KISILER: 90->280", kaynaksız toplu göç) ile girdi, sonra hiç değişmedi; `data/paket_12.js`
    yalnız bunun ÜRETİLMİŞ kopyası; TDV `sinan` (tek bölüm, W22 çıkarıcısıyla tam gövde 21,7 bin kar.) yalnız "896 (1491) yılından önce doğduğu
    kabul edilir" + "Mimarbaşılık görevini kırk sekiz yaşında üstlenen" der. ⇒ **D210: f boşaltıldı**, donem "1491'den önce – 1588",
    `kaynak` parantezi "TDV yalnız … 1491'den önce …", eski değer ve ölçüm `ic_not_f`'te.
  - `ali-kuscu f:1403`: aynı soru — dayanak yok (aynı `9d89241a`; TDV tam gövde "Doğum yeri ve tarihi tam olarak bilinmemekle beraber XV. yüzyıl
    başlarında … dünyaya geldiği tahmin edilmektedir"). 02'deki boşaltma **doğrulandı**, değişiklik yok.
- **K4 edigu**: EDIGU-1006 kaydında `tartisma` alanı ZATEN var (nogaylar 1420 · mangitlar 1419 · altin-orda 1419 = idarenin sonu). Dokunulmadı.
- **bedreddin**: görünür `tartisma`ya tek cümle eklendi: "Ölüm yılı için iki tarih anılır: TDV'ye göre 1416 Bedreddin'in İznik'ten kaçtığı,
  823 (1420) ise Serez'de idam edildiği yıldır." (Mevcut doğum cümlesi korundu.)
- **gercek-davud — ölçüldü, DEĞİŞTİRİLMEDİ:** `js/app.js:9125` `TUR_ADI` sözlüğü; Kişiler sekmesi (`dizinDoldur`, `:9149-9154`) YALNIZ
  `Object.keys(TUR_ADI)`yi gezer ⇒ sözlükte olmayan bir `tur` ("mühendis") kişiyi listeden **SESSİZCE DÜŞÜRÜR** (kodun kendi yorumu bunu
  p2/H-0010 "sessiz kayıp" vakası olarak anlatıyor: mimar/edebiyatçı bir dönem böyle kaybolmuştu). Öteki yerler zarif düşer: kart etiketi
  `_KH_TUR_ADI[k.tur] || k.tur` (`:8868`, ham değeri basar), rozet `KARTVIZIT_ROZET[...] || "☾"` (`:10327`). ⇒ "mühendis" yazmak kişiyi
  dizinden gizlerdi; `alim` kaldı. Yeni tür istenirse `TUR_ADI` + `KARTVIZIT_ROZET` + `_KH_TUR_ADI` birlikte genişlemeli (app.js sahibinin işi).

## 5. W22 yan bulguları — §4 ⑧ okuması (hiçbiri f/t'ye yazılmadı)
- `jan-sobieski` "Hotin yakınlarında Türk ordusunu … yenilgiye uğrattı ve kaleyi zaptetti (17 Ekim 1673)" (`polonya` _2): savaşı tarihler, doğum/ölümü değil.
- `katerina2` "II. Katerina (1762-1796)" (`rusya` _2): saltanat parantezi — t desteği SAYILMAZ (kural).
- `ismail-kamil-pasa` "1826 yılına kadar Sudan'a giren Mısır birliklerinin başında bulunan kumandanlardan … İsmâil Kâmil Paşa, … Osman Bey ve
  Mehhû Bey … burayı yönetti" (`sudan` _3): 1826 dört kişilik grubun yönetim döneminin SONU; İsmâil'in ölümünü tarihlemez → kaydın t 1822'si
  ile çelişki DEĞİL, destek de değil ("ölüm yılı kaynakta yok" kalıyor).

## 6. 🔴 Yeni bulgu — paket tazeliği (uygulayıcıya)
Uygulama `data/kisiler.js`i değil `data/paket_12.js`i yükler (`index.html:1277-1309`, `arac/paketle.py` üretir, "ELLE DÜZENLENMEZ").
`py arac/paketle.py sina`: temiz main'de ✓ TAZE (30 paket/289 kaynak) · EDIGU+01+02 uygulanınca ✗ BAYAT (kisiler.js) · +03 sonrası ✗ BAYAT.
⇒ **EDIGU → 01 → 02 → 03 uygulandıktan sonra `py arac/paketle.py yenile` ŞART**; yoksa ① yayında hiçbir değişiklik görünmez,
② tazelik kapısı kırmızı kalır. `paket_12.js` üretilmiş paylaşılan dosya — benim değil, yenilemedim.

## 7. Sınav (ÖNCE = main+EDIGU+01+02 · SONRA = +03)
| | ÖNCE | SONRA |
|---|---|---|
| `denetle.py` | 2 | 2 — sıralı içerik birebir (çıkış 2: Değişmez 8 ÖLÇÜLEMEDİ, `devletler_harita.js` taze ağaçta yok) |
| `odak_olc.py` | 0 | 0 — birebir |
| `durum_tablosu.py` | 0 | 0 — birebir |
| UYARI | 1 | 1 — yeni 0 |
| `paketle.py sina` | 1 (bayat) | 1 (bayat) — §6 |
- Kişi atfı 61/61, kırık 0 · CR 0 · zincir üstüne ileri ✓ / -R ✗.

## 8. Git
- `C:\atlas-w16`: temiz (0 satır, indeks sıfır).
- `C:\atlas-umit`: `?? denetim/KISI-KAYNAK-03-1006.diff` · `?? denetim/UMIT-W16-KAMPANYA-03-1006.md`.
