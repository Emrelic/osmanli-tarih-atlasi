# BULGU — KORİDOR (B3) · ÖNCE VAR OLANI ÖLÇ

> Oturum **OPUS HAZIR KITA 106** · 2 Eylül 2026 · şartname tahta M-2040 ·
> koordinatör 1.MURAT · sıra `oturumlar/GECE-SIRASI-2EYLUL.md` B3
> 🔒 `arac/uret_petek.py · girdi.py · renkler.py` YASAK (koşu) — **okunmadı bile.**
> 🔒 `js/app.js` PAKET-0035-C'de — **dokunulmadı.** `index.html` koordinatörde.
> 🔴 **Hiçbir şey indirilmedi.** Itiner-e ölçüldü mü? HAYIR — `§4`teki sıra
> gereği ÖNCE var olan ölçüldü, ve ölçüm indirmeyi **gereksiz kılmadı ama
> ERTELEDİ**; gerekçesi §4'te.

---

## 0. ÜÇ CÜMLEDE

```
① AĞ İKİYE BÖLÜNMÜŞ ve sebebi TEK BİR BAĞLANMAMIŞ DOSYA.
   Rumeli kanadı 71 düğüm · Anadolu kanadı 55 düğüm · aralarında SIFIR kenar.
   `koridor_yama_e9353f.js` (BAĞLI DEĞİL) içinde tam da o tek kenar var:
   İstanbul—Üsküdar boğaz geçişi. Bağlanınca 2 bileşen → 1 bileşen (126 düğüm).
② KORİDOR KATMANI OSMANLI KUŞAĞINDA VAR, DÜNYADA YOK.
   286 konumlu düğümün 286'sı 21,4-49,8K / 12,3-48,1D kutusunda.
③ VE OSMANLI KUŞAĞINDAKİ ZAYIFLIK GEOMETRİ DEĞİL, SÜRE:
   127 kenarın YALNIZ 4'ünde ölçülmüş saat var (%3,1); 78'i türetilmiş.
```

---

## 1. ① NE VAR — envanter, dosya dosya

```
DOSYA                        AD ALANI                              BAĞLI?
koridor.js                   KORIDOR_DUGUM · KORIDOR_KENAR          🟢
koridor_f5c9a5.js            KORIDOR_H2B_DUGUM · KORIDOR_H2B_KENAR  🟢
koridor_halka2.js            KORIDOR_HALKA2_DUGUM · …_KENAR         🟢
koridor_owtrad.js            KORIDOR_OWTRAD                         🟢
koridor_yama_f5c9a5.js       KORIDOR_YAMA_F5C9A5                    🟢
koridor_yama_e9353f.js       KORIDOR_YAMA_E9353F                    🔴 BAĞLI DEĞİL
```
🟢 **Altı dosyanın altısı da `§7` ad alanı kuralına uyuyor** — dosya adındaki
ayırt edici parça değişken adında da var. Ölçüldü, ihlal yok.

### 1.1 Yerli menzil ağı (koridor.js + f5c9a5 + halka2)
```
düğüm 135   konumu VAR 132 · konumu YOK 3
            tip:  yerlesim 100 · menzil-eslesmedi 26 · baglanti-ucu 9
kenar 127   kalinlik: ana 113 · tali 8 · kopuk 6
            km DOLU 84/127 (%66) · saat DOLU 82/127 (%65)
            saat_cinsi: turetildi 78 · olculemedi 39 · olculdu 4 · turetilmedi 6
```
🔴 **`olculdu` = 4.** Yani "gerçek menzil süresi" taşıyan kenar **%3,1**.
Geri kalan 78 türetme, dosyanın kendi beyanıyla *"kuş uçuşu km / 4,25 km-sa"*.

### 1.2 OWTRAD (`tmcTRm1300`)
```
düğüm 154 · kenar 174   (kenar tür: cd 131 · sl 43)
kapsam  "Osmanli Imparatorlugu ve komsulari, 1300-1600" · çözünürlük 1:8M
ülke    TR 46 · GR 29 · RO 15 · UA 11 · BG 8 · AL/HR 6 · CS/HU 4 · …
atıf    ÜÇ kaynak dosya başında yazılı (Ciolek 2005 · İnalcık 2000 · İnalcık
        & Quartet 1997)
```

---

## 2. 🔴 ① İLK BULGU — AĞ İKİYE BÖLÜNMÜŞ, ve çaresi TEK SATIR

Bileşen analizi (birleşim-bul, yerli ağın 135 düğümü üzerinde):
```
BUGÜN (e9353f BAĞLI DEĞİL)      bileşen 2   →  71  +  55
   [71] istanbul · tekirdag · malkara · firecik · dimetoka · gumulcine …
   [55] uskudar · gebze · iznik · bolu · tosya · merzifon · ladik · niksar …
e9353f BAĞLANIRSA               bileşen 1   →  126
```
⇒ **Rumeli kanadı ile Anadolu kanadı bugün BİRBİRİNE HİÇ BAĞLI DEĞİL.**
Ve bağlanmamış dosyanın içinde **tam olarak o tek kenar** var:
```js
{u1:"istanbul", u2:"uskudar", kanat:"bogaz", kol:"gecis", kalinlik:"ana",
 km:3.2, saat:null, saat_cinsi:"olculemedi",
 saat_kaynak:"bulunamadı — boğaz geçişi kayıkla yapılırdı, süre rüzgâra bağlı"}
```
📌 Bu, `CLAUDE.md §7`nin *"yama UYGULANDI mı diye sorar, OKUNDU mu diye
sormaz"* dersinin koridor tarafı: dosya **yazılmış**, **doğru**, **ad alanı
kuralına uygun** — ve **hiç okunmuyor.**
🔴 **Bağlama koordinatörde** (`index.html`). Tek satır:
`<script src="data/koridor_yama_e9353f.js?v=rNNNN"></script>`
⚠️ Ve `koridor_yama_f5c9a5.js`ten SONRA gelmeli — o dosya 23 düğümün
koordinatını yamıyor; sıra bozulursa boğaz kenarının uçları konumsuz kalabilir.
**Bunu ÖLÇMEDİM** (yükleme sırası `js/app.js`in işi, o dosya bende değil) —
uyarı olarak bırakıyorum.

---

## 3. ② KARMA YOLUN İKİ AYAĞI — ayrı ayrı ölçüldü

Emre'nin kararı (a): *Osmanlı kuşağında OWTRAD (gerçek menziller), dünyada
DEM'den türet.*

### 3.1 OSMANLI AYAĞI — geometri VAR, SÜRE YOK
```
konumlu düğüm 286 · kutu 21,42-49,84K / 12,33-48,05D
kuşak dağılımı  Rumeli 104 · Anadolu 96 · Arap/Levant 27 · K.Afrika 3 · öteki 56
```
🟢 Osmanlı çekirdeği **kapsanmış**: iki kanat, İran ve Avusturya kolları,
OWTRAD'ın ticaret ağı.
🔴 **Ama (a)'nın "gerçek menziller" vaadi VERİDE KARŞILANMIYOR:** ölçülmüş
saat taşıyan kenar **4**. Geri kalan 78 kenar zaten *türetilmiş* — yani
"gerçek menzil" ile "türetme" arasındaki ayrım bugünkü veride **%3'e karşı %61**.
⇒ (a)'nın Osmanlı ayağı için asıl iş **yeni geometri değil, SÜRE KAYNAĞI**:
menzilhane defterlerinden saat cinsinden mesafeler.
📌 Ve `BULGU-YOL-VERISI.md` bunu zaten bulmuştu: *"Ottoman menzil/postane ağı
(c. 1830) — İNDİRİLEBİLİR bir GIS dosyası bulunamadı … academia.edu 403."*

### 3.2 DÜNYA AYAĞI — SIFIR
```
kutu dışında (Amerika · Doğu Asya · Sahra altı · Hindistan · Kuzey Avrupa):
   düğüm 0 · kenar 0
```
⇒ Dünya ayağı için elde **hiçbir şey yok**; (a)'nın "DEM'den türet" kolu
tamamen yapılacak iş. Aracı `arac/maliyet.py` ve o **şu an kilitli**
(`arac/` yasak). Ölçüm ve tasarım serbest, üretim değil.

---

## 4. 🔴 ITINER-E — İNDİRMEDİM, VE NİÇİN ERTELEDİĞİMİ YAZIYORUM

Şartname *"indirme yapma, önce ölç"* diyordu; ölçtüm ve **erteleme gerekçem
ölçümden çıktı**:
```
Itiner-e'nin katacağı şey     GEOMETRİ + EĞİM  (14.769 kenar, MS ~150)
bugünkü eksiğimiz             Osmanlı ayağında SÜRE · dünya ayağında HER ŞEY
```
⇒ Itiner-e Osmanlı ayağının **eksik olmayan** yarısını (geometri) zenginleştirir;
**eksik olan yarısını (saat) doldurmaz.** Dünya ayağı içinse coğrafî kapsamı
yetmiyor: Roma İmparatorluğu azami sınırı, yani Amerika/Doğu Asya/Sahra altı/
Hindistan **yok**.
🟢 **Asıl değeri başka yerde ve o değer duruyor:** `BULGU-YOL-VERISI.md`nin
ikinci çıkarımı — **SINAV TAKIMI**. `maliyet.py` DEM'den güzergâh türettiğinde,
Itiner-e'nin gerçek Roma yollarıyla örtüşme ölçülebilir. Ama o sınav
`maliyet.py` koşabildiğinde anlamlı; bugün `arac/` kilitli.
⇒ **Sıra: önce maliyet.py çalışır hâle gelsin, sonra Itiner-e sınav takımı
olarak indirilsin.** Şimdi indirmek 78 MB'ı kullanılmayacak bir ana taşımak olur.
⚠️ Ve raporun kendi uyarısı duruyor: kesit **MS ~150**, kullanılabilirliği
*"Roma güzergâhları Osmanlı'da da aynı geçitlerden geçti"* varsayımına bağlı ve
onu yazan **doğrulamadığını açıkça söylemiş.** Ben de doğrulamadım.

---

## 5. 🟡 YAN BULGU — OWTRAD'ın LİSANS ÇELİŞKİSİ KAYITLI, ÇÖZÜLMEMİŞ, VE DOSYA YAYINDA

`data/koridor_owtrad.js` başlığı (kendi beyanı):
```
HTML sayfası (dc.rights) : Creative Commons Attribution-NONCOMMERCIAL 2.5
indirilebilir ZIP        : Open Publication License v1.0 or later
⇒ AYNI VERİ KÜMESİ, İKİ FARKLI LİSANS … çelişki ÇÖZÜLMEDİ
```
Ve künye alanı *"TEMKİN gereği en kısıtlayıcısı"* diyerek **CC BY-NC**
varsaymış. Dosya **`index.html`de BAĞLI**, yani **yayında.**
🔴 **Ben karar vermiyorum** — bu bir lisans/hukuk sorusu ve atlas kamuya açık
bir yayın. Yalnız şunu ölçüp bildiriyorum: **çelişki kayıtlı, çözülmemiş,
ve veri canlı.** Kararı Emre'nin vermesi gerekir; koordinatöre ve kullanıcıya
bildirdim.
🟢 Atıf tarafı temiz: üç kaynağın üçü de dosya başında yazılı.

---

## 6. TESLİM — ne ölçtüm, ne çıkardım (ayrı satırlar)

```
ÖLÇTÜĞÜM
  6 koridor dosyası · 289 düğüm · 301 kenar (yerli 135/127 + OWTRAD 154/174)
  yerli ağ 2 bileşene bölünmüş: 71 + 55 · birleştiren tek kenar BAĞLI DEĞİL
  ölçülmüş saat: 4/127 kenar (%3,1) · türetilmiş 78 · ölçülemez 39
  coğrafî kutu 21,4-49,8K / 12,3-48,1D · kutu dışında 0 düğüm
  ad alanı kuralı: 6/6 UYUYOR

ÇIKARDIĞIM
  ① koridor katmanı "büyük motor işi" DEĞİL — kurulu ve canlı; eksiği
    tek satırlık bir bağlama ve bir SÜRE kaynağı
  ② (a) karma yolun Osmanlı ayağında asıl boşluk GEOMETRİ değil SAAT
  ③ dünya ayağı sıfırdan yapılacak ve aracı (`maliyet.py`) bugün kilitli
  ④ Itiner-e bugün indirilmemeli — sınav takımı olarak değeri `maliyet.py`
    koşabildiğinde doğar
```
