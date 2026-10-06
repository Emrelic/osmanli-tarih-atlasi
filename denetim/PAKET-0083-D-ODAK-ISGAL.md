# PAKET-0083-D-ODAK-ISGAL — 1877-04-24 "93 Harbi" maddesi: odak · Eflak-Boğdan işgali · sefer okları

Görev: YILDIRIM BAYEZIT, 5 Ekim 2026 (`oturumlar/PAKET-0083.md` §0 + §D). Emre: H-0001 · H-0011 · H-0012.
Görsel `H-0012-1.png` açıldı: 1877 civarı haritada Birleşik Prenslikler (Romanya) **Osmanlı tâbii
tonunda** (kırmızı tarama), "RUSYA" etiketi yalnız Plevne yakınında küçük bir alanda; Eflak-Boğdan'da
Rus varlığına dair hiçbir işaret yok.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı
- **Madde:** 1877-04-24 tarihli birden çok madde var (13 dosyada `t:"1877-04-24"` geçiyor —
  savaslar.js, kronoloji_rusya, kronoloji_balkan, olaylar_ek10, devletler.js künye-içi…). Emre'nin
  tıkladığı büyük ihtimalle Osmanlı/Rusya kronolojisinde "Rusya savaş ilan etti" maddesi.
- **H-0001 + H-0011 = TEK kusur:** madde `kapsam_genis:true` taşıyor ve `yer_id`/`odak_*` YOK
  ⇒ `odak_olc.py` onu ODAKSIZ sayar ⇒ kamera o günün Osmanlı sınırına uçar. Olasılık ~%75.
  Alternatif (~%25): `yer_id` var ama ÇÖZÜLMÜYOR (kırık atıf).
- **Eflak-Boğdan `isg:` 1877: YOK** (~%85). Ve tarih açısından dikkat: Rus ordusu Romanya'ya
  **4/16 Nisan 1877 Rus-Romen Sözleşmesi** ile GEÇİŞ izniyle girdi; Romanya 9/21 Mayıs'ta bağımsızlık
  ilan edip müttefik oldu. Yani bu, düşmanca bir "işgal" değil **izinli geçiş + ittifak** olabilir —
  `isg:` mi yoksa `v:` (tâbiiyet) bitişi mi sorusu KAYNAKLA karar verilmeli. (Ön bilgi; TDV ile sınanacak.)
- **Sefer okları:** `savaslar.js`te `SEFERLER` dizisi var (61 kayıt) ⇒ bir sefer katmanı muhtemelen
  VAR; ama 1877 Rus seferi kaydı olup olmadığı ve OK çizilip çizilmediği belirsiz (~%50).

## 1. HÜKÜM — üç madde, üç cevap

| Emre | Ölçülen | Çare |
|---|---|---|
| **H-0011** "neden odak noktası yok" | İki devlet-kronolojisi maddesi `yer_id:""` + `kapsam_genis:true`, hiçbir `odak_*` alanı yok: `kronoloji_rusya.js:627` · `kronoloji_balkan.js:491`. Osmanlı listesindeki eşi (`olaylar_ek10.js:344`) ise `yer_kon:[47.0105,28.8638]` (Kişinev) taşıyor — o ODAKLI (odak_olc: ek10'da ODAKSIZ 0 · BEYANLI 0). | diff (§4) + bir karar (§2) |
| **H-0001** "imparatorluk görünümüne geçiyor" | Aynı kusur, **iki ayrı kod yolu** (§2): devlet sekmesinde kamera **devletin TÜM gövdesine** (`devletiYay`) — Rusya kronolojisinde bütün Rus İmparatorluğu; ortak akışta Osmanlı kutusuna. | §2 |
| **H-0001** "sefer okları kullanılmalı" | **OK KATMANI VAR ve KAYIT VAR.** `index.html:139` "④ Harekât okları" varsayılan AÇIK; `savaslar.js` `SEFERLER[67]` = "Rus ordusunun Kişinev'den Zimniça'ya ilerleyişi (1877)", f 1877-04-24 → t 1877-06-27, yol Kişinev→Zimniça. 1877-04-24'te Osmanlı listesinde madde olduğu için ok o gün belirir (`app.js:5823`: "Başında madde varsa kırpma gerekçesiz ⇒ ok kendi gününde belirir"). | yapılacak yok — kamera oku kadrajlarsa görünür |
| **H-0001 / H-0012** "işgal taraması · Eflak-Boğdan işgal edildiyse" | **Veride 1877 Rus `isg:`i YOK** (Eflak-Boğdan kutusundaki 17 Romanya noktasının hiçbirinde). Romanya noktaları 1877-04-24'te `v:romanya` (Osmanlı tâbii), **1877-05-09'da `s:romanya`** (bağımsızlık). TDV'ye göre bu bir İŞGAL DEĞİL: Ruslar prensliği **"kendi tarafına çeken"** (§3). Ve bunun için **Emre'nin önceki kararı var** (§3). | işgal YAZILMAMALI — ama karar Emre'de (§3) |

## 2. 🔴 Kamera — İKİ KOD YOLU, ve `odak_yer` yalnız BİRİNDE çalışıyor
`CLAUDE.md §9`'daki `app.js:11835` atfı **BAYAT** — o satır bugün ek okuma kartı çiziyor. Gerçek yerler:
```
(a) DEVLET KRONOLOJİSİ sekmesi — maddeAc()  app.js:15017-15054
    hedefYer = m.yer_id ? olayKonumu(m) : null
    yer_id VAR            → haritayiOlayaGotur (nokta)
    yok + !kapsam_genis   → kamera yerinde, "📍 nokta yeri işaretlenmemiş" yazar
    yok + kapsam_genis    → devletiYay(d.harita || d.id)   ← DEVLETİN TÜM GÖVDESİ
    ⚠️ maddeOdakKutusu() (odak_yer · odak_kimlik · odak_kutu_kaynak) BU YOLDA HİÇ ÇAĞRILMIYOR;
       yer_kon da okunmuyor (yalnız yer_id).
(b) Osmanlı / ortak akış — haritayiOlayaGotur()  app.js:12684-12760
    olayKonumu: yer_kon VEYA yer_id → nokta
    yoksa: !kapsam_genis && !odak → kamera yerinde
           aksi hâlde maddeOdakKutusu(o) VARSA onun kutusu, YOKSA donemler[di].b  ← OSMANLI kutusu
```
⇒ Kronoloji_rusya maddesi devlet sekmesinden açılınca kamera **bütün Rus İmparatorluğu'nu**
çerçeveliyor — "tepeden geniş bakıyor" şikâyetine en uygun hâl. Bu yolda `odak_yer` yazmak **işe
YARAMAZ**; çalışan tek veri çaresi **`yer_id`** ve onun için atlasta **Kişinev noktası YOK** (ölçüldü;
Bender, Soroka, Akkirman var).
🔴 **Yan bulgu (araç):** `odak_olc.py` bu iki maddeyi "BEYANLI→yabancı — kamera OSMANLI kutusuna uçar"
sayıyor; bu (b) yolunun hükmü. Devlet sekmesinden tıklanınca (a) yolu işler ve kamera devlet gövdesine
gider. Yani odak kapısı **devlet sekmesindeki davranışı ölçmüyor** — `odak_yer` yazılınca kapı
"KUTULU" diyecek, ama sekmede kamera hâlâ imparatorluğa uçacak.

**Üç seçenek (karar koordinatör/Emre):**
```
A  odak_yer ekle (diff hazır, §4)        (b) yolunu düzeltir · (a) yolunda ETKİSİZ · kapıda BEYANLI→yabancı −2
B  Kişinev noktası + yer_id:"Kişinev"    İKİ yolu da düzeltir · yerleşim ekleme işi (koordinatör, kaynak gerekir):
                                         47.0105, 28.8638 · s:rusya 1812-05-28→ (Bükreş Antl., Bender ile aynı)
                                         dayanak: SEFERLER[67] kaynağı ЭСБЕ "12 апреля в Кишиневе … манифест"
C  app.js maddeAc() maddeOdakKutusu'na baksın   (a) yolunu genel olarak düzeltir — js işi, Emre'nin
                                                 "imparatorluk görünümü beyandır" kuralına (app.js:12724) uyar
```
📌 Önerim **B** (veri doğru yere bağlanır, iki yol da düzelir) — B gelene kadar A zararsız ama yarım.

## 3. Eflak-Boğdan "işgali" — kaynak ne diyor
**TDV (birincil):**
- `doksanuc-harbi[25]`: *"Savaşın başlaması ile birlikte Romanya topraklarına giren ve bu prensliği
  kendi tarafına çeken Ruslar, biri Dobruca, diğeri Bükreş istikametinde olmak üzere iki koldan…"*
- `bogdan[127]`: *"…Rusya'nın ısrarlı talepleri üzerine savaşa giren Romanya bunu fırsat bilerek
  bağımsızlığını ilân etti"*
- `romanya[178-179]`: *"…9 Mayıs 1877 tarihinde bağımsızlığını ilân etti"* · *"1877-1878 Osmanlı-Rus
  Savaşı'na katılan ve özellikle Plevne'de … çok önemli katkıda bulunan Romanya"*
- `doksanuc-harbi[38]`: *"Rus-Rumen kuvvetlerinin Plevne'ye karşı ortaklaşa giriştikleri saldırılar"*

⇒ TDV'de Romanya **müttefik**, "işgal" kelimesi yok. Emre'nin H-0012'si şartlı ("işgal edildiyse") —
şart kaynakta TUTMUYOR.
📌 **Ve bunun için Emre'nin ÖNCEKİ bir kararı veride yazılı:** `SEFERLER[67].kaynak` sonu: *"Romanya
MÜTTEFİK: bu ok bir geçiştir, işgal DEĞİL (Emre kararı: taralı desen yalnız işgal)"*. H-0001'in "işgal
taraması" isteği bu kararla ÇELİŞİYOR ⇒ hüküm Emre'ye geri gitmeli: *"Romanya 1877'de müttefikti (TDV);
daha önce 'taralı desen yalnız işgal' demiştiniz — tarama istiyor musunuz, yoksa ok yeterli mi?"*
⚠️ Ayrıca 1806-12 ve 1828-34 Rus işgalleri veride `isg:` olarak VAR (Bükreş, Yaş, İbrail…) — yani
atlasın sözlüğünde "Rus ordusu Prensliklerde" = işgal tarihleri de tutarlı; 1877'yi farklı kılan ittifak.

### 🔴 ASIL EKSİK İŞGAL — DOBRUCA (Emre sormadı, TDV aynı cümlede veriyor)
Rusların "Dobruca istikametinde" ilerlediği kol **Osmanlı toprağıdır** (Romanya değil). Atlasta:
```
Köstence · Babadağı · İshakçı   d:OSMANLI kesintisiz 1878-07-13'e kadar → sonra s:romanya
Silistre                         d:OSMANLI 1878-07-13'e kadar
```
⇒ 1877 yazından Berlin'e kadar Kuzey Dobruca Rus askerî denetimindeydi ama haritada Osmanlı. Gün TDV'de
YOK (yalnız "istikametinde") ⇒ **bulunamadı**; `SEFERLER[67]`in ЭСБЕ kaynağı aynı esere dayanıyor ve
Dobruca geçişinin gününü verebilir — ayrı kaynak işi.

## 4. Diff — `denetim/PAKET-0083-D-ODAK-ISGAL.diff` (seçenek A, UYGULANMADI)
`data/kronoloji_rusya.js:629` ve `data/kronoloji_balkan.js:493`'ten sonra:
`odak_yer:["Bender","Bükreş","Rusçuk"]` — üçü de atlasta nokta (Bender = Kişinev'e en yakın Rus noktası,
ok başlangıcı kadraja girsin diye; Bükreş + Rusçuk = Tuna cephesi). `kapsam_genis:true` YERİNDE KALIR
(`app.js:12633`: "iki alan çelişmiyor"). `git apply --check` → 0.
⚠️ `index.html` bu dosyaları DEĞİL paketlerini yüklüyor (`paket_06.js` ← kronoloji_rusya,
`paket_12.js` ← kronoloji_balkan; `arac/paketle.py`) ⇒ diff uygulandıktan sonra **yeniden paketleme**
şart, yoksa yayına inmez. Kapıda BEYANLI→yabancı 2 azalır (tavan `--tavan-yaz` ile).

## 5. Yan bulgular (düzeltme önerisi değil)
1. **İbrail ve Yergöğü** `v:romanya` **1878-07-13'e** kadar; öteki 15 Romanya noktası `s:romanya`
   **1877-05-09**'dan. İki şehir de Eflak'ta ⇒ bağımsızlık iki farklı günde başlıyor. Muhtemelen
   H-0012 görselindeki "Birleşik Prenslikler (Romanya) · tâbi" etiketi bu iki noktadan geliyor — **görsel
   ile ölçülmedi** (tarayıcı açılmadı).
2. **Kahul** `v:` dönemi **kid'siz** (1856-1878, Güney Besarabya) — `SONRA1923-HAYALET`teki 78 kid'siz
   `v:` sınıfından; görseldeki "Boğdan Voyvodalığı (Cenûbî Besarabya…)" etiketi bu kayıt.
3. 1877 Rus kazanımları iki ayrı biçimde yazılmış: Niğbolu (1877-07-16) ve Plevne (1877-12-10) `s:rusya`;
   Kuzey Dobruca hiç yazılmamış; 1806/1828 Prenslikler `isg:rusya`. Aynı savaşta üç konvansiyon.
4. `CLAUDE.md §9` ve şartnamedeki `app.js:11835` atfı bayat (gerçek: 12735 ve 15017-15054).

## 6. Öngörü değerlendirmesi
- "H-0001+H-0011 TEK kusur: `kapsam_genis` + odak yok" → **SAYI TUTTU, MEKANİZMA EKSİKTİ**: kusur iki
  madde × iki kod yolu; Osmanlı listesindeki eş `yer_kon` sayesinde ODAKLI. "Kırık atıf" alternatifi ✗.
- "Eflak-Boğdan `isg:` 1877 YOK" → ✓. "İzinli geçiş/ittifak, `isg:` değil" → ✓ (TDV + Emre'nin önceki kararı).
- "Sefer katmanı var, 1877 kaydı belirsiz (%50)" → **ikisi de VAR** ✓.

## 7. Ortam
```
HEAD 3db5d54b (madde taraması) · d2110094 (odak_olc) · 0e74593a (Dobruca/Romanya sahiplik)
Okunan: 12 data dosyası (node vm) · odak_olc.py --json/--dosya · js/app.js (salt okunur) · index.html ·
        TDV doksanuc-harbi · romanya · eflak · bogdan (gövdeler scratchpad'de, depoda değil)
Yazılan: denetim/PAKET-0083-D-ODAK-ISGAL.md · .diff — VERİYE/odak_* alanlarına/ODAK-TAVAN.json'a dokunulmadı
```
