# PAKET-KAPSAM2 · 14 Eylül 2026 — sınırdaki maddelere `kapsam:"dis"` + `onem`

> Sevk: 1.MURAT. Emre'nin kararı (14 Eylül):
> *"Kararsız kalan 45 madde dünya olayı sayılsın ama bölgesel bazda Osmanlı'yı ilgilendirdiği için önemli
> derecede 5. derece ya da 4. derece önem puanı alanlar, eğer 'dış olayların 4 ya da 5 puan olanlarını göster'
> seçeneği işaretliyse … kronolojide zikredilecektir."*
> **Commit YOK.** `js/` ve `index.html`e dokunulmadı.
> 🟢 **EK TESLİM (14 Eylül):** koordinatör "EK5 SERBEST" dedi (ARAS-CALDIRAN commit `eb2e435`); `olaylar_ek5.js`in
> 4 maddesi yazıldı — §3.2. Aşağıdaki "kilitli / bekliyor" ifadeleri ilk teslimin fotoğrafıdır.

Aletler (hepsi yeni, bu paketin):
- `denetim/ARAC-KPS2-LISTE-0914.js` — 47 maddelik hüküm listesi, gerekçeleriyle (tek otorite)
- `denetim/ARAC-KPS2-UYGULA-0914.js` — uygulayıcı (kuru koşu varsayılan · `--yaz` · `--ek5` · `--sinav` yalnız-alan sınavı)
- `denetim/ARAC-KPS2-KIRILMA-0914.js` — `ARAC-KPS-KIRILMA-0913`ün kurala bağlanmış hâli (gizli = `dis` ∧ `onem < eşik`)

---

## 0 · SAYILAR

| kalem | sayı |
|---|---|
| listedeki madde | **47** (PAKET-KAPSAM §3.1: 22 · §3.3: 24 · PAKET-KRON3 §2.1: 1) |
| yazılan (`kapsam`+`onem` ya da yalnız `onem`) | **47** · 10 dosya (43 ilk teslim + 4 ek5, §3.2) |
| bekleyen | **0** |
| `dis` + **onem 5** | **1** (Safevî Devleti'nin kuruluşu 1501) |
| `dis` + **onem 4** | **26** (24 yazıldı + 2 ek5'te bekliyor) |
| `dis` + **onem 3** | **19** (17 + 2 ek5) |
| `dis` + **onem 2** | **1** (Bahreyn Cebrîler 1417) |
| `ic` yapılan | **0** — okunan 47 maddenin hiçbirinde aktör Osmanlı değil |
| var olan `onem` — DEĞİŞTİRİLMEDİ | **8** (KRON3 §2.1: ek20 ×7 · ek22 ×1) — §2.3'te öneriyle |
| yeni maddesiz Osmanlı kırılması (eşik 4) | **1** d:/v: (Şırnak 1891, tesadüfi eşleşme — §4) · Osmanlı-hiç yerleşimli yabancı kırılma **+7** |

Çekirdek (1378 madde), önce → sonra (ek5 hariç):
```
kapsam   dis 121 → 163 · ic 45 · konu 1 · kapsamsız 1211 → 1169
onem     60 → 103 madde   {1:2, 2:21→22, 3:27→44, 4:6→30, 5:4→5}
dis maddelerin puanlısı   → 63 (dis+puansız 100 — PAKET-KAPSAM'ın 90'ı bunun çoğu)
```

---

## 1 · ÖLÇÜM — `onem` veride ve kodda

### 1.1 Veride
```
ÇEKİRDEK data/olaylar*.js (1378)   onem 60 madde (%4) · hepsi SAYI · aralık 1-5
                                   {1:2, 2:21, 3:27, 4:6, 5:4}
                                   yalnız 8 dosyada: ek15 (2) · ek17 (18) · ek18 · ek19 · ek20 (17) · ek21 (3) ·
                                   ek22 · ek8 (7) · p0043a · p0043b · p0044 (5) · serhat (3)
                                   dunya 71 madde · bolge 2 madde (ikisi de 3)
KUYRUK data/kronoloji*.js (4838)   onem %100 · {1:8, 2:430, 3:1371, 4:1686, 5:1343} — anlamı SAHİBİ DEVLETE göre
```
⚠️ `VERI-YAPISI.md`de kronoloji maddesi için `kapsam` / `onem` / `dunya` / `bolge` alanları **tanımlı değil**
(dosyada `kapsam:` ve `onem` geçmiyor — ölçüldü). Alanın tek tarifi `js/suzgec.js:143-209` yorumu. Belge borcu, Oturum 0'a.

### 1.2 Kodda — Emre'nin tarif ettiği mantık VAR, Osmanlı zaman çizgisine BAĞLI DEĞİL

**Mantık hazır (`js/suzgec.js`):**
```
:169  var ONEM_VARSAYILAN = { ic: 1, bolge: 4, dunya: 4, puansiz: true };
:175  function kapsamOf(m) { return (m && m.kapsam === "dis") ? "dis" : "ic"; }
:191  if (ayar.dunya && dunya !== null && dunya >= ayar.dunya) return true;       ← DÜNYA dalı (dunya alanı)
:194  if (kapsam === "ic" && ayar.ic) { if (onem === null) return !!ayar.puansiz; … }
:203  if (kapsam === "dis" && ayar.bolge) {
:204    var b = (bolge !== null) ? bolge : onem;                                  ← BÖLGE dalı: bolge yoksa ONEM
:205    if (b === null) return !!ayar.puansiz;
:206    if (b >= ayar.bolge) return true;
```
⇒ *"dış olayların 4-5 puanlılarını göster"* = **bölge dalı, eşik 4** (ya da 5). Bu paketin yazdığı `onem`
tam bu satırın (`:204`) okuduğu değerdir. `dunya` alanı yazılmadı (sevk yalnız `kapsam`+`onem`).

**Arayüz kontrolü VAR ama yalnız SEÇİLEN DEVLET için:**
```
index.html:349   <select id="odak-bolge-esik">  1 (varsayılan) · 2 · 3 · 4 · 5 · 0 kapalı
index.html:338   odak-ic-esik · :370 odak-dunya-esik (varsayılan 0 kapalı) · :384 odak-puansiz (checked)
                 → hepsi #devlet-secici-panel içinde, "Bu devletin kronolojisinde ne göreyim?" başlığı altında
app.js:10928-10935   odakAyar() bu dört kontrolü okur
app.js:10940-10948   odakSuz() → SUZGEC.onemSuz(maddeler, odakAyar())
app.js:10950-10954   birlesikTopla(): odakKaynak = ODAK ? ODAK.kronoloji : olaylar; odakSuz(odakKaynak)
                     → Osmanlı maddeleri YALNIZ "ODAK yok + EK devlet seçili" hâlinde süzülüyor
app.js:11068         listeCiz(d): yalnız ODAK kronolojisi
```

**Osmanlı varsayılan görünümü SÜZÜLMÜYOR:**
```
app.js:11198-11209   render(): EK yok + ODAK yok  →  osmanliListesineDon()
app.js:11188-11193   osmanliListesineDon(): olayDom[]'un TAMAMI geri takılır — onemSuz çağrısı YOK
app.js:11064-11067   yorum: "`osmanliListesineDon()` KASTEN dışarıda"
app.js:10904-10910   özet satırı: "Osmanlı zaman çizgisine UYGULANMIYOR … Bir devlet seç."
app.js:4914-4924     olaylar dizisi kurulurken YALNIZ kapsam:"konu" süzülüyor (dunyaAc, index.html:532-533)
```

### 1.3 EKSİK — Emre'nin seçeneğinin Osmanlı listesinde çalışması için (ayrı sevk, app.js sahibine)
1. **Bağlama yok.** Varsayılan Osmanlı listesi (`osmanliListesineDon` :11188), olay-olay oynatma ve
   `olaylarGuncelle` hattı `olaylar`/`olayDom`un tamamını kullanıyor; `onemGecer` hiç çağrılmıyor.
2. **Kontrol yok.** Osmanlı görünümünde *"dış olayların ≥4 / ≥5 puanlılarını göster"* diye bir kutu/eşik yok.
   Var olan `#odak-bolge-esik` seçilen devlete ait panelin içinde ve varsayılanı 1 (hepsi).
   Doğal yer: `#dunya-ac` kutusunun yanı (index.html:532), `localStorage` ile kalıcı — `dunyaAc` emsali
   (app.js:4914 — dizi yükleme anında bir kez kuruluyor, ayar değişince sayfa yenileniyor).
3. **Puansız düğümü.** `puansiz` bayrağı İKİ dalı birden yönetiyor (:195 iç · :205 dış). Osmanlı listesinde
   `dis` + puansız **100** madde var (PAKET-KAPSAM'ın 90'ı dahil). `puansiz:true` ⇒ bu 100'ü eşik ne olursa
   olsun gösterir; `puansiz:false` ⇒ **1175** puansız iç maddeyi de gizler. ⇒ Osmanlı görünümü için
   `puansizIc` / `puansizDis` ayrı bayrak gerekiyor (sayaç zaten ayrı: `onemSay` :220-235), ya da o 100 maddeye
   de `onem` yazılması (ayrı veri sevki).
4. **Kırılma eşleşmesi.** `toprakIndeksleri` (suzgec.js:307) ve harita kırılma→madde vurgusu tam listeye
   bakıyor. Gizlenen bir madde bir kırılmanın tek maddesiyse o kırılma ekranda maddesiz kalır (§4).
   Hüküm gerekiyor: süzgeç yalnız LİSTEYİ mi etkiler, kırılma eşleşmesini de mi?
5. Küçük tutarsızlık: `ONEM_VARSAYILAN.dunya = 4` (suzgec.js:169) ama arayüz varsayılanı `0 kapalı`
   (index.html:370-371). Arayüz yokken (node sınavı) dünya dalı açık davranıyor.

---

## 2 · LİSTE — 47 madde, okundu, hüküm

Tam gerekçe metni: `ARAC-KPS2-LISTE-0914.js`. Hepsi `kapsam:"dis"`. **K** = kilitli (ek5).

### 2.1 PAKET-KAPSAM §3.1 (22)
| dosya#sıra | t | madde | onem | gerekçe |
|---|---|---|---|---|
| olaylar.js#52 | 1798-06-12 | Malta şövalyelerinin tasfiyesi | **4** | Mısır seferinin yolu, Osmanlı Mısırı'na çıkışın durağı |
| ek11#7 | 1510-12-02 | Merv Savaşı | **4** | Safevî Ceyhun'a ulaştı; Osmanlı doğusunda denk rakip tamamlandı |
| ek11#12 | 1747-06-20 | Nâdir Şah'ın öldürülmesi | **4** | Osmanlı ile üç savaş yapan rakibin sonu |
| ek11#13 | 1796-01-01 | Kaçar hânedanının İran'a hâkim oluşu | **4** | 1923'e kadar doğu komşusu |
| ek13#12 | 1521-01-01 | Portekiz'in Bahreyn'i alışı | **4** | Körfezde Osmanlı-Portekiz çekişmesinin hedefi |
| ek13#18 | 1861-05-31 | Bahreyn-İngiltere antlaşması | 3 | Körfezde İngiliz himayesi; Osmanlı'ya bağı dolaylı |
| ek15#2 | 1564-01-01 | İspanya Bâdis'i geri aldı | 3 | Küçük Fas mevzii |
| ek15#11 | 1792-09-22 | Fransa'da Birinci Cumhuriyet | **4** | Başlıca Avrupa muhatabının rejim değişikliği; 1798'in ön şartı |
| ek15#12 | 1659-01-01 | Sa'dî hânedanının sonu | 3 | Gövde: "Osmanlı'ya hiçbir dönemde bağlanmayan" |
| ek16#10 | 1452-01-01 | Cihan Şah Timurlu İran'ını aldı | 3 | Güney-orta İran; sınırdan uzak |
| ek5#0 **K** | 1381-04-01 | Timur Herat'ı aldı | 3 | Horasan; Anadolu'dan uzak, 20 yıl önce |
| ek5#54 **K** | 1467-11-10 | Karakoyunlu Devleti'nin çöküşü | **4** | Doğu Anadolu Akkoyunlu'ya; Otlukbeli'nin önü |
| ek7#118 | 1335-12-01 | İlhanlı Devleti'nin dağılması | **4** | Anadolu beyliklerini İlhanlı üst hâkimiyetinden çözdü |
| ek7#119 | 1387-11-01 | Timur İran'ın büyük bölümünü aldı | **4** | Timur doğu sınırına yaklaştı; Anadolu seferinin önü |
| ek7#125 | 1736-03-08 | Nâdir Şah Mugan'da tahta | **4** | Osmanlı ile savaşan İran'da yeni hânedan |
| ek9#10 | 1884-06-03 | Hewett (Adua) Antlaşması | 3 | Hidivlik garnizonları; Osmanlı'ya bağı itibari |
| ok106#2 | 1571-01-01 | Kremençuk | 3 | Leh uç kasabası; bağ tâbi Kırım üzerinden, zayıf |
| ok106#3 | 1616-01-01 | Uman | 3 | aynı |
| ok106#4 | 1638-01-01 | Çuguyev | 3 | Moskova savunma hattı; dolaylı |
| ok106#5 | 1652-01-01 | Slobodskaya Ukrayna | 3 | aynı |
| ok109#1 | 1918-10-30 | Avusturya Cumhuriyeti | **4** | Müttefik imparatorluğun sonu, Mondros ile aynı gün |
| ok109#9 | 1919-06-28 | Versailles | **4** | Sevr'i de doğuran Paris barış düzeni |

### 2.2 PAKET-KAPSAM §3.3 (24) + KRON3 §2.1'in puansız tek maddesi (1)
| dosya#sıra | t | madde | onem | gerekçe |
|---|---|---|---|---|
| ek16#12 | 1797-10-17 | Campo Formio | **4** | Preveze, Parga, İyon Adaları Fransa'ya; Rumeli komşusu değişti |
| ek16#19 | 1772-08-05 | Polonya 1. paylaşım | **4** | 1768-74 savaşı sürerken Rusya-Avusturya sınır boyunca büyüdü |
| ek16#20 | 1793-01-23 | Polonya 2. paylaşım | **4** | Kamaniçe-Bar Rusya'ya; Hotin sınırına dayandı |
| ek16#34 | 1509-05-17 | Oran'ın İspanya'ya düşüşü | **4** | Osmanlı Cezayiri'nin doğuş ortamı |
| ek16#6 | 1340-01-01 | Celâyirli kuruluşu | 3 | Tebriz; erken Osmanlı'dan uzak |
| ek16#7 | 1411-01-01 | Bağdat Karakoyunlu'ya | 3 | Osmanlı henüz bölgede değil |
| ek16#9 | 1441-01-01 | Kırım Hanlığı'nın kuruluşu | **4** | 1475'ten sonra en önemli tâbi |
| ek16#44 | 1891-01-01 | Müleydâ Savaşı | 3 | Necid iç çekişmesi; bağ itibari |
| ek16#57 | 1891-02-06 | Tokar geri alındı | 3 | Mehdî Savaşı; bağ itibari Mısır üzerinden |
| ek16#55 | 1916-11-03 | İngiliz-Katar Antlaşması | **4** | Savaş içinde Osmanlı kazası Katar'ın himayeye hukuken geçişi |
| ek13#11 | 1417-01-01 | Bahreyn Cebrîler | 2 | Yerel hânedan değişimi; ilişki yok |
| ek15#1 | 1695-01-01 | Dârfûr Sultanlığı | 3 | Uzak; Bâbıâli yazışması sonraki yüzyıllarda |
| ek15#7 | 1857-07-11 | Büyük Kabiliye'nin düşüşü | **4** ⚙️ | İçerik 3 derdi; **§4 gereği 4'e çekildi** |
| ek5#1 **K** | 1386-01-01 | Timur'un üç yıllık seferi | **4** | Tebriz-Azerbaycan Timur'a; Anadolu seferinin önü |
| ek5#2 **K** | 1393-01-01 | Muzafferî sonu | 3 | Fars; uzak |
| ek7#120 | 1406-10-21 | Kara Yusuf Tebriz | 3 | Fetret'teki sınıra dokunmuyor |
| ek7#121 | 1468-04-01 | Uzun Hasan Karakoyunlu'ya son verdi | **4** | Otlukbeli'nin önü |
| ek7#122 | 1501-07-01 | Şah İsmail Tebriz — Safevî kuruluşu | **5** | İki asırlık Osmanlı-Safevî çekişmesinin başı |
| ek7#126 | 1828-02-22 | Türkmençay | **4** | Rusya Revan-Nahcıvan'da; 1828-29 savaşının eşiği |
| ek7#127 | 1902-01-15 | İbn Suûd Riyad'ı aldı | **4** | 1913'te Lahsa'yı Osmanlı'dan alacak gücün başı |
| ok109#0 | 1918-10-28 | Çekoslovakya | 3 | Osmanlı ile bağı yok denecek kadar az |
| ok109#4 | 1918-11-11 | Ardıl devletlere toplu geçiş | **4** | Budin, Erdel, Belgrad — eski Osmanlı Rumelisi |
| ok109#6 | 1918-12-01 | SHS + Büyük Romanya | **4** | Bosna, Sırbistan, Erdel |
| ok109#10 | 1919-11-27 | Neuilly | **4** | Batı Trakya Bulgaristan'dan çıktı |
| ek16#15 | 1861-02-13 | Gaeta (KRON3 §2.1) | 3 | Kapsam zaten `dis`; yalnız `onem:3` eklendi |

### 2.3 KRON3 §2.1 — var olan `onem` DEĞİŞTİRİLMEDİ (8) · öneri Emre'ye
Bu maddeler zaten `dis`; `onem` başka bir oturumca yazılmış ve **Emre'nin yeni ölçeğinden düşük**. Eşik 4
bağlanırsa sekizi de gizlenir ve sekizi de Osmanlı-hiç yerleşimli bir kırılmanın **tek** maddesi (§4 taban 8).
| dosya#sıra | t | madde | mevcut | öneri |
|---|---|---|---|---|
| ek20#5 | 1315-04-28 | Memlük Malatya'ya girdi | 2 | 3 |
| ek20#6 | 1338-01-01 | Malatya yeniden Memlük | 1 | 3 |
| ek20#1 | 1344-10-28 | İzmir Haçlılara kaybedildi (Aydınoğulları) | 3 | **4** |
| ek20#3 | 1467-01-01 | Uzun Hasan Karakoyunlu'ya son verdi (Van) | 3 | **4** |
| ek20#4 | 1490-01-01 | Gürcistan üçe bölündü | 2 | **4** (1555 Amasya paylaşımının zemini, gövdede) |
| ek20#7 | 1510-07-25 | Trablusgarp İspanyol işgali | 2 | **4** (1551 Osmanlı fethi) |
| ek20#8 | 1530-03-24 | Malta-Trablus şövalyelere | 2 | **4** (1565 Malta Kuşatması'nın hasmı) |
| ek22#0 | 1794-01-01 | Zend sonu | 2 | 3 |

KRON3 §2.1'in öteki kalemleri (dokunulmadı): `dis`+onem var — p0044#2 Astarhan 3 · ek8#1 Diu 4 · ek8#13 Hâil 2 ·
ek20#9 Harar 2. `ic` ama Osmanlı değil — ek20#0 Eşrefoğulları 1326 (2) · ek20#2 Karamanoğlu Konya 1366 (2):
Emre'nin kuralıyla ikisi `dis` olur; `kapsam` değeri değiştirmek sevkin dışında, **öneri** olarak kayıtta.

📌 Yan bulgu — **aynı olay üç madde:** Karakoyunlu'nun sonu ek20#3 `1467-01-01` · ek5#54 `1467-11-10` ·
ek7#121 `1468-04-01`. `denetle.py` mükerrer ölçütü ayrı gün oldukları için yakalamıyor. Sahibine.

---

## 3 · UYGULAMA

```
node denetim/ARAC-KPS2-UYGULA-0914.js         kuru koşu: yeni 43 · zaten 0 · kilitli 4 · 10 dosya
node denetim/ARAC-KPS2-UYGULA-0914.js --yaz   YAZILDI 43
node denetim/ARAC-KPS2-UYGULA-0914.js         ikinci koşu: yeni 0 · zaten 43 (idempotent)
```
| dosya | yazılan |
|---|---|
| olaylar.js | 1 |
| olaylar_ek7.js | 8 |
| olaylar_ek9.js | 1 |
| olaylar_ek11.js | 3 |
| olaylar_ek13.js | 3 |
| olaylar_ek15.js | 5 |
| olaylar_ek16.js | 12 (Gaeta yalnız `onem:3, `) |
| olaylar_ok106.js | 4 |
| olaylar_ok109.js | 6 |
| **olaylar_ek5.js** | **0 — KİLİTLİ, 4 bekliyor** |

Yazımdan önce 9 dosyanın 9'u git HEAD ile birebirdi (alet sınıyor, değilse çöker).
`git diff --stat`: 9 dosya · **43 satır +43 −43** · her satırda yalnız `b:` önüne `kapsam:"dis", onem:N, `
(Gaeta'da `onem:3, `).

**EK5 SERBEST gelince:** `node denetim/ARAC-KPS2-UYGULA-0914.js --ek5` (kuru) → `--ek5 --yaz` → `--sinav --ek5`.
Alet `t`+`b` başını sınadığı için ARAS-CALDIRAN'ın ek5 düzeltmesi dizi sırasını kaydırırsa **çöker, yanlış
maddeye yazmaz.** (Van 1548 maddesi ek5'in 4 hedefinden biri değil.)

### 3.2 🟢 EK TESLİM — `olaylar_ek5.js` (EK5 SERBEST sonrası)
```
git log -1 -- data/olaylar_ek5.js     eb2e435 (ARAS-CALDIRAN) · git status: temiz (disk == HEAD)
--ek5 kuru koşu                       yeni 4 · zaten 43 · t+b sınavı 4/4 tuttu
--ek5 --yaz                           YAZILDI 4 · diff 1 dosya +4 −4
   ek5#0  1381-04-01 Timur Herat'ı aldı                 kapsam:"dis", onem:3
   ek5#1  1386-01-01 Timur'un üç yıllık seferi          kapsam:"dis", onem:4
   ek5#2  1393-01-01 Muzafferî hânedanının sonu         kapsam:"dis", onem:3
   ek5#54 1467-11-10 Karakoyunlu Devleti'nin çöküşü     kapsam:"dis", onem:4
--ek5 ikinci koşu                     yeni 0 · zaten 47 (idempotent)
```
📌 **Van maddesi (t artık `1548-08-24`) eşleştirmeyi etkilemedi:** 4 hedefin hiçbiri Van maddesi değil; alet
her hedefin KENDİ `t`+`b` başını sınıyor ve ARAS-CALDIRAN'ın düzeltmesi ek5'in dizi sırasını kaydırmadı
(4/4 tuttu). Alette değişiklik gerekmedi.

Sınavlar (ek5 sonrası):
```
node --check data/olaylar_ek5.js          temiz
ARAC-KPS2-UYGULA --sinav --ek5            10 dosya · 785 madde · (a) alan-dışı fark 0 · (b) HEAD+47 ek = disk BAYT BAYT ✓
                                          ek5: 417 madde · HEAD+4 = disk BİREBİR
ARAC-A2-BAG-0913 --hepsi                  551/551 · HATA 0 · UYARI 141 · ilk çıktıyla diff BOŞ
ARAC-KPS2-KIRILMA --esik 4                39 · Osmanlı-hiç 15 · d:/v: 1  — §4'teki "+ek5 SANAL" öngörüsüyle BİREBİR
py arac/denetle.py                        SONUÇ: temiz · EXIT 0 · bir önceki koşuyla (ek5'ten önce) diff: YALNIZ 4s listesinde
                                          eşit sayılı iki satırın (adal/katalan) yer takası — PAKET-KAPSAM §5'in bilinen
                                          kararsız sırası; hiçbir sayı değişmedi
```

### 3.1 🔴 İlk sınav sürümü SAHTE FARK verdi — düzeltildi
İlk `--sinav` (b) sorusunu *"diskten eklenen dizgileri regex'le sil → HEAD'e eşit mi"* diye soruyordu ve
`ek16` için **FARKLI** dedi. Madde alanlarında fark 0'dı. Sebep aletteydi: Gaeta'da `kapsam:"dis", ` HEAD'de
**zaten vardı**, biz yalnız `onem:3, ` ekledik; regex `kapsam:"dis", onem:3, ` dizgisinin tamamını sildi.
Soru ters çevrildi: **aynı uygulama çekirdeği HEAD metnine yapılınca disk metni bayt bayt çıkıyor mu.**
Bu yön o belirsizliği taşımaz. (D117 ailesi: tekrarlayan/tutarsız sayı önce aletten şüphelendirir.)

İlk uygulayıcı sürümünde iki kusur daha çıktı, ikisi de çökerek (yazmadan) göründü:
`b:` regex'i bir dosyada yanlış tırnak çifti yakaladı → sabit ayrıştırılamayınca `null` (hiçbir `b` ile
eşleşmez, tek-aday şartı yine bağlar) · HEAD sınavı idempotent ikinci koşuyu çökertiyordu → yalnız yazılacak
bir şey varken soruluyor.

---

## 4 · ETKİ — eşik 4'te maddesiz kalacak kırılmalar

`ARAC-KPS2-KIRILMA-0914.js`, kırılma evreni `ARAC-KPS-KIRILMA-0913` ile aynı (girdi.py dosyaları · d:/v:/s:/isg:
uçları · ±30 gün). **Denklik sınavı:** önceki veride `--esik 99 --puansiz-gizli` (= bütün `dis` gizli) →
**113 kırılma · Osmanlı-hiç 9** — PAKET-KRON3 §1.1'in `kir_dis.js` sayısıyla **birebir.**

Emre'nin modeli = eşik 4, puansız `dis` görünür (`puansiz:true`, bugünkü varsayılan):
```
                                         yalnız-gizli kapanan   Osmanlı-hiç yerleşimli   d:/v: (Osmanlı) kırılması
önce (bu paketten önce)                           21                     8                         0
liste ilk hâliyle (Kabiliye 3) — SANAL            41                    17                         2
UYGULANAN (Kabiliye 4)                            38                    15                         1
+ ek5'in 4'ü SANAL                                39                    15                         1
```
🔴 **Liste ilk hâliyle 2 yeni d:/v: kırılması doğuruyordu:**
1. **1857-07-11 Tîzî Vezzû + Akbû** — v: (Osmanlı tâbi, "Kabiliye'nin fiilî özerkliği") dönemi Kabiliye
   maddesinin kendi gününde bitiyor; ±30 günde tek madde o. ⇒ **ek15#7 onem 3 → 4 yapıldı** (sevkin ④ kuralı).
   ⚠️ Atlasın 1830-57 arası Kabiliye'yi Osmanlı tâbisi göstermesi ayrı bir soru — atlas referans değil;
   burada yalnız görünürlük gerekçesi kullanıldı.
2. **1891-01-01 Şırnak** — `d:` başı = `kur:"1891-01-01"`, `kesinlik:"belirsiz"` (yerlesimler_ok109.js:167).
   Müleydâ (Necid) ile **hiçbir ilgisi yok**; Değişmez 2 bugün yalnız ±30 gün tesadüfüyle kapalı (D147).
   ⇒ **Müleydâ 4'e ÇEKİLMEDİ** — çekmek sahte bir kapanışı meşrulaştırırdı. **Borç:** Şırnak'ın kuruluş/idarî
   geçişine kendi maddesi (ya da `kur` gününün kaynağı). Süzgeç bağlanırsa bu kırılma ekranda maddesiz kalır —
   ve bu **doğru görünürlüktür.**

**+7 Osmanlı-hiç yerleşimli yabancı kırılma** (hepsi onem 3, içerik gerekçesiyle 3 bırakıldı):
```
1340-01-01  Kars, Ardahan, Tebriz, Nahçıvan, Revan    ek16#6   Celâyirli kuruluşu
1406-10-21  Kars, Ardahan, Tebriz, Nahçıvan, Revan    ek7#120  Kara Yusuf Tebriz
1411-01-01  Şehrizor, Musul, Kerkük, Bağdat, Kerbelâ  ek16#7   Bağdat Karakoyunlu
1861-02-13  Otranto                                   ek16#15  Gaeta
1891-01-01  Dir'iye, Riyad, Buraydâ, Uneyze (yab)     ek16#44  Müleydâ
1891-01-01  Şırnak (osm — yukarıda)                   ek16#44  Müleydâ
1891-02-06  Tokar                                     ek16#57  Tokar
```
Bunlar **yabancı→yabancı** geçişler; toprak o gün Osmanlı değildi. Osmanlı listesinde gizlenmeleri Emre'nin
kuralının doğrudan sonucu. **Soru Emre'ye:** eşik 4'te bu yedi kırılmanın haritada maddesiz değişmesi kabul mü?
Kabul değilse çare üç maddeyi (1340 · 1406 · 1411 — gelecekteki Osmanlı doğusu) 4'e çekmek; önerim **3 kalsın**,
çünkü süzgeç bağlandığında kırılma-madde eşleşmesinin nasıl davranacağı (§1.3 ④) henüz karar değil.

`--esik 99 --puansiz-gizli` sonrası 156 / 31 — bu artık anlamlı bir ölçü değil: 42 yeni `dis` madde
eşikten bağımsız gizli sayılıyor. Kıyas yalnız eşik 4 satırlarındadır.

---

## 5 · DENETİM — ÖNCE / SONRA

```
node --check                              9 dosyanın 9'u temiz
ARAC-KPS2-UYGULA --sinav                  9 dosya · 368 madde · (a) kapsam+onem silinince HEAD ile alan farkı 0
                                          (b) HEAD + aynı 43 ek = disk BAYT BAYT · metin farkı 0  ✓
node denetim/ARAC-A2-BAG-0913.js --hepsi  önce 551/551 · HATA 0 · UYARI 141   sonra AYNI (çıktı diff'i BOŞ)
py arac/denetle.py                        → §5.1
```

### 5.1 denetle.py
```
önce   SONUÇ: temiz · 2 ✓ 529/0 · 2s ✓ 1332 · 101 AÇIK · 357 KAPSAM DIŞI · EXIT 0
sonra  SONUÇ: temiz · 2 ✓ 528/0 · 2s ✓ 1331 · 101 AÇIK · 357 KAPSAM DIŞI · EXIT 0 · 1378 madde
diff   ① 529→528 ve 1332→1331  ② 4s listesinde adal/katalan satır takası (PAKET-KAPSAM §5'in bilinen kararsız sırası)
       ③ ilk satır BOM, son satır "exit 0" — yönlendirme artefaktı
```
🔴 **① bu paketten DEĞİL — ölçüldü.** `arac/denetle.py` `kapsam` / `onem` / `dunya` alanını **hiç okumuyor**
(`grep "['\"](kapsam|onem|dunya)['\"]"` → 0 satır). İki koşu arasında ARAS-CALDIRAN (M-3876 devri) yerleşim
dosyalarında Van fethi gününü `1548-08-25` → `1548-08-24` çekti:
```
                          HEAD 25 · HEAD 24   →   DİSK 25 · DİSK 24
yerlesimler.js                4 · 0          →        0 · 4
yerlesimler_ek26.js           7 · 0          →        2 · 11
yerlesimler_ek_ferhadpasa.js  9 · 0          →        0 · 9
yerlesimler_sinir_dogu.js     7 · 0          →        0 · 7
```
İki gün tek güne indiği için Osmanlı ve yabancı kırılma anahtarı birer azaldı; AÇIK sayıları değişmedi.
⇒ "denetle çıktısı değişmez" kabul ölçütü **bu paket için tuttu**; değişen kısım komşu paketin.
⚠️ Aynı sebeple §4'ün "önce" satırı (21 · 8 · 0) ile "sonra" satırları arasında da Van günü kaymış olabilir;
Van kırılmaları o tabloda görünmüyor (hiçbiri yalnız-gizli maddeyle kapanmıyor), sayıları etkilemedi.

---

## 6 · BULAMADIM / YAPMADIM
- ~~`olaylar_ek5.js` 4 madde — kilit kalkmadı.~~ → EK5 SERBEST geldi, yazıldı (§3.2).
- `dunya` alanı yazılmadı (sevk dışı); `bolge` alanı yazılmadı.
- KRON3 §2.1'in 8 var olan `onem`i ve 2 `ic` değeri — değiştirilmedi, §2.3 öneri.
- Hüküm gerekçeleri TDV gövdesi yeniden okunarak değil, **maddelerin kendi gövdesi okunarak** verildi;
  önem bir değerlendirmedir, tarih/sahiplik iddiası eklenmedi.
- Karakoyunlu'nun sonu üç madde (§2.3 yan bulgu) — sahibine.
