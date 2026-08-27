# BULGU — BAYAT TARAMA (BAYAT AVCISI)

> Görev: `oturumlar/PAKET-TASNIF.md` şartnamesi, ORHANGAZİ'nin gece nöbeti sevkiyle.
> Kapsam: `kutu/giden/parti-*/CEVAP.json` içinde `hukum: "sirada"` veya `"olculecek"`
> olan tüm maddeler — yani daha önce hüküm yazılmış ama AÇIK kalmış kalemler.
> Ölçüm tarihi: 2026-08-27. `CEVAP.json` dosyalarına DOKUNULMADI (salt okunur).

## ① Kaç madde okundu

**156/156 madde okundu** (27 paket klasörüne dağılmış: parti-0002…0007,
parti-emrelic-0008…0030, parti-kasa-0010/0012). 11 paralel alt-oturuma
bölündü (parti sınırları korunarak, yalnız en büyük paket — parti-emrelic-0019,
34 madde — ikiye bölündü). Bir madde (parti-0004/H-0013) ilk turda bir
alt-oturum tarafından atlanmıştı; bu oturum tarafından ayrıca ölçülüp
listeye eklendi — bkz. §④ "Bookkeeping notu".

## ② Özet sayılar

```
🟢 BAYAT (zaten çözülmüş/geçersiz):        40
🔴 HÂLÂ GEÇERLİ (gerçek kusur duruyor):    108
⚪ ÖLÇEMEDİM:                                8
TOPLAM:                                    156
```

Yani 156 maddenin **dörtte biri (40) zaten kapanmış** — kayıtsız kalsaydı
hepsi bir gün yeniden "kusur" diye bulunacaktı. Kalan 108 gerçek ve 8'i bu
turda ölçülemedi.

## ③ ÖNCELİKLİ — cross-cutting bulgular (koordinatörün önce bakması gerekenler)

**A. "Yazıldı ama BAĞLANMADI" dosyalar — en ucuz kazanç, birkaç saat sürer:**
Aşağıdaki düzeltmeler ARAŞTIRILMIŞ, VERİ DOSYASI OLARAK YAZILMIŞ ama
`arac/girdi.py`'nin `GIRDI_DOSYALARI` listesine hiç eklenmemiş — yani
haritaya hiç girmiyor:
- `data/yerlesimler_kafkas_duzeltme.js` (34 şehir: Kars/Ardahan/Derbend/
  Kutaisi/Gence/Revan/Hemedan/Kırmanşah/Van hattı — H-0001/parti-emrelic-0024,
  H-0001/parti-emrelic-0025)
- `data/yerlesimler_ek_korfez.js` (Manama/Bahreyn ekleyici-kapı düzeltmesi —
  H-0007 ve H-0021/parti-emrelic-0021, aşağıda B)
Tek başlarına bu iki dosyayı `GIRDI_DOSYALARI`ya eklemek + bir koşu, en az
**6 maddeyi** (H-0001×2, H-0007, H-0021, ve dolaylı olarak Kutaisi/imereti
sorusunu) tek hamlede kapatır.

**B. Manama/Bahreyn "ekleyici kapı" motor kusuru — YÜKSEK, tekrarlıyor:**
`data/yerlesimler.js:993` Manama hâlâ `bos:"devletsiz"` + 1281-1861 sahipsiz,
ama motorun ekleyici (yetim-yüz) kapısı onu Osmanlı'ya katıyor. Aynı kusur
İKİ ayrı pakette bağımsız bildirilmiş (H-0007 ve H-0021, ikisi de
parti-emrelic-0021) — düzeltme taslağı hazır (A maddesindeki dosya) ama
bağlanmamış.

**C. Niş/Vidin enklavı — bu SABAH (27 Ağu 02:49) yeniden doğrulandı:**
parti-emrelic-0023/H-0011: bugün canlı olan "Değişmez 7 enklav" denetimi
(commit `e53c86a`) Niş+Vidin'i hâlâ "C-hakiki" (gerçek, sorgu gerektiren)
enklav olarak işaretliyor — yani bu kusur şu an itibarıyla GÜNCEL veride
ölçülmüş durumda, spekülasyon değil.

**D. Boğaz/ızgara çözünürlüğü ailesi — TEŞHİS ORTAK, ÇÖZÜM HENÜZ YOK:**
`denetim/BULGU-MOTOR-SU.md` (24 Ağu) en az **6 farklı maddenin** (grup-A
H-0014, grup-E H-0004/H-0005, grup-F1 H-0018/H-0019, grup-J H-0002)
paylaştığı kök nedeni ortaya çıkardı: eski "kara maskesi Boğazı kesmiyor"
teşhisi ÇÜRÜDÜ, gerçek sebep 0,05°'lik (~5,5 km) ızgaranın 0,7 km'lik
İstanbul Boğazı'nı göremeyişi. Saroz/Gelibolu kısmı (grup-J H-0007) ise bu
teoriyle de AÇIKLANAMIYOR — ayrı, çözülmemiş bir alt-sorun. Dört çare adayı
yazılı, hiçbiri motora uygulanmadı.

**E. "Diğer devletlerin başkenti" borcu — üç ayrı pakette aynı kalem:**
grup-A/H-0011, grup-B/H-0011, grup-D/H-0006: Osmanlı başkent yıldızı
çözüldü (`osmanliBaskentMi()`, commit 88f5eab) ama `data/devletler.js`'deki
`baskent:` alanı hâlâ tek string, zaman penceresi yok — üç paket bağımsız
aynı boşluğu bildirmiş.

**F. Kutsal İttifak rozeti — iki pakette aynı kalem, tasarım hazır:**
grup-H (0023/H-0003, 0027/H-0006), grup-J (0030/H-0003): tasarım belgesi
teslim edildi (`denetim/ITTIFAK-TASARIM.md`, commit d9b255e, 24 Ağu,
"KOD YAZILMADI") — sıradaki iş onu uygulamak, araştırma bitti.

**G. ⚠️ RİSK — 0030/H-0018 ile 3a36b65'i KARIŞTIRMA:**
parti-emrelic-0030/H-0018 (Teke/Antalya üçgen) görsel olarak katı bir petek
gövdesi spike'ı gösteriyor; commit `3a36b65` (20 Ağu) FARKLI bir kusuru
(hat genişliği/halo) düzeltti. Bir sonraki oturum bu maddeyi yanlışlıkla
"zaten çözüldü" sayabilir — görsel (`H-0018-1.png`) mutlaka açılmalı.

## ④ Bookkeeping notu — bir madde ilk turda atlanmıştı

grup-B alt-oturumu 12 maddelik kapsamından `parti-0004/H-0013`'ü atlamış
(11/12 raporladı). Bu oturum ayrıca ölçtü:

`parti-0004 | H-0013 | sirada | **BAYAT** | Sin (Sinj) Kalesi'nin fethi
maddesinde yer_id eksikti (commit bfe254f, 6 Ağu: "tanı tam, veri eksik").
Commit `08a6f869` (15 Ağustos 2026) `data/olaylar_ek5.js:474`'e
`yer_id:"Sin (Sinj)"` ekledi — nokta da (`data/yerlesimler_ek.js:207`)
zaten 1281'den beri veride, `kur:` kısıtı yok, yani madde tarihinden çok
önce haritada görünür durumda. Somut şikâyet giderilmiş.`

Bu, listeye eklenince toplam **156/156** tamamlanıyor.

## ⑤ BAYAT liste — 40 madde (çürüten commit/tarihle)

### parti-0002 / parti-0003 (grup-A)
- H-0010 (0003) — commit 9983823 (24 Ağu): Aydınoğulları kırılması 1422-01-01'e taşındı, 25 Ağustos koşusuyla haritaya indi.
- H-0015 (0003) — "Kırım'da 3 nokta" ölçümü yanlıştı; yerlesimler_kirim.js + ek2.js ile ~13 nokta zaten var (10 Ağustos KUTU DENETİM'de de doğrulanmıştı).

### parti-0004 / parti-0005 (grup-B)
- H-0004, H-0007(a), H-0008, H-0012, H-0015 (0004) — commit e8c4515 (10 Ağu) + 88f5eab (3 Ağu): kişiBul() düzeltmesi, ⚔ savaş simgesi, isyanYayilmaUret(), padişah portre kuralı.
- H-0005 (0004) — İran çekirdeği bölündü (afsar/zend/kacar ayrı, kendi renkleriyle).
- H-0007(b) (0004) — Altın Orda parçalanması (kazan/nogay/astarhan/sibir-hanligi) 8 Ağustos'ta tamamlandı.
- H-0013 (0004) — bkz. §④, commit 08a6f869 (15 Ağu).
- H-0003 (0005) — "haritaya yay" özelliği, commit 88f5eab.
- H-0006 (0005) — ⏮/⏭ sıra numarası mantığı, commit 88f5eab + 6b0e3be.

### parti-0006 / parti-0007 (grup-C)
- H-0001…H-0006 (0007) — 6 "merak kartı" (Haçlılar, Çanakkale zinciri, Galata, Hristiyan tebaa, Timur şehzadeleri, Timur'un misyonu) hepsi commit 8e8fd8d (10 Ağu) ile eklendi.

### parti-emrelic-0008/0010/0011/0013 (grup-D)
- H-0002 (0011) — commit a550bcd (11 Ağu): tam istenen 4 nokta (Behramkale/Beykoz/Şarköy/Saroz) eklendi + kök kur: tarihi düzeltildi.

### parti-emrelic-0014/0016/0017/0018/0020/0022 (grup-E)
- H-0003 (0018) — Kırcaali kur: tarihi commit f1c76a3'te (13 Ağu) TDV ile kaynaklı doğrulandı, bilinçli karar.

### parti-emrelic-0019 (grup-F1/F2)
- H-0002 — Ankara savaş günü sahipliği (timurlu) doğru ölçüldü.
- H-0015 — commit d2d35ab (24 Ağu): olay mahalline uçuşta kenar giriş yönü uygulandı.
- H-0032 — commit 3a63fd8 (22 Ağu): "öncesi/sonrası kırpma" vurgusu.
- H-0039 — Mardin teslimi için ayrı 1517-05-01 maddesi eklendi (olaylar_ek13.js).
- H-0052 — commit f226aa2 (18 Ağu): süzgeç butonu kronoloji başlığına taşındı (tasnif "ölçmedim" demişti, kod zaten değişmişti).
- H-0080 — commit (24 Ağu): "SU YAKINLIĞI NÖBETÇİSİ" (arac/renkler.py) eklendi.

### parti-emrelic-0021/0025 (grup-G)
- H-0004 (0021) — Nitra'nın 1593 avusturya olması TDV ile doğrulandı (commit 073df09, 20 Ağu).

### parti-emrelic-0023/0027 (grup-H)
- H-0001, H-0002 (0023) — Tökeli İmre/Orta Macar araştırması + Parkan/Estergon tarih ayrımı (commit 073df09, 20 Ağu).
- H-0006 (0023) — Emoji ayarı zaten vardı (commit 9a02e24, 4 Ağu — şikâyetten önce).
- H-0007 (0023) — Göz kırpma animasyonu düzeltildi (commit 5bbaebc, 23 Ağu).
- H-0009 (0023) — Uçuş modu harita-götürme animasyonu zaten 4 Ağustos'tan beri canlıydı.
- H-0018 (0023) — commit e53c86a (bu sabah, 27 Ağu): Karlofça artık 4 ayrı alıcı gösteriyor.

### parti-emrelic-0024/0029/kasa-0010/0012 (grup-I)
- H-0006, H-0009 (0024) — commit fcae60b (20 Ağu): çok sekmeli arayüz düzeltmeleri.

### parti-emrelic-0028/0030 (grup-J)
- H-0002 (0028) — SONNET HAZIR KITA 77 ölçtü: görünüm veri eksikliği değil, aynı-renk komşu birleşmesi.
- H-0005 (0028) — SAFEVÎ KRONOLOJİ Ferhad Paşa hattının 20+ noktasını sınadı: "HARİTA DOĞRU".
- H-0006 (0028) — NOKTA EPIR (22 Ağu) 10 nokta ekledi; ekran görüntüsü ondan ÖNCEki koşuya aitti.
- H-0011 (0030) — Gümülcine "leapfrog fetih" zaten bilinçli/araştırılmış karar.
- H-0012 (0030) — Isparta satın alınması TDV ile birebir doğrulandı.

## ⑥ HÂLÂ GEÇERLİ liste — 108 madde (önem sırasına yakın, tam detay grup dosyalarında)

Tam gerekçeli liste her grubun ayrı bulgu bloğunda korunuyor (bu oturumun
scratchpad'inde, istenirse aktarılır); en önemlileri:

**YÜKSEK:**
- parti-emrelic-0021 H-0007, H-0021 — Manama/Bahreyn ekleyici kapı (bkz. §③B)
- parti-emrelic-0023 H-0011 — Niş/Vidin enklavı, bugün doğrulandı (bkz. §③C)
- parti-emrelic-0019 H-0041, H-0043, H-0069, H-0076 — hareket tipolojisi hâl ekseni yok, Musul/Rewândiz/… 646 km fazlalık, Halepçe tarih hizalaması, Yemen dağları 5 nokta eksik
- parti-emrelic-0030 H-0001 — Bizans/Osmanlı sınır çakışması (motor kusuru, "okundu ama uygulanmadı")

**ORTA:**
- parti-0006 H-0007/H-0008/H-0010 — Uyvar/Nitra 1526 bölünmesi uygulanmamış
- parti-0007 H-0008 — Soçi/Tuapse/Maykop hâlâ 46,4 yıl fazla Kırım
- parti-emrelic-0008 H-0001, H-0003 — Germiyan/Divriği/Malatya TDV ile teşhis edildi, veriye işlenmedi
- parti-emrelic-0016/0017 H-0002/H-0004/H-0005/H-0001 — Kayseri-Elbistan-Sivas seyrekliği + Boğaz ızgara ailesi (bkz. §③D)
- parti-emrelic-0020 H-0012/H-0014 — Tebriz/Nahçıvan koridoru + Hemedan hattı kaynak taraması eksik
- parti-emrelic-0022 H-0001/H-0005 — Parga/Korfu kısmen ilerledi, Kabartay/Kuban/Tuapse hâlâ kaba
- parti-emrelic-0024 H-0001, H-0002 — İran hayaleti 50→7'ye indi ama 34 şehir düzeltmesi bağlanmadı (bkz §③A); m: alanları tutarsız
- parti-emrelic-0025 H-0001, H-0004, H-0005, H-0009 — Kutaisi/imereti bağlanmadı, prusya/kurlandiya/livonya yok, Uyvar/Nitra anakronizmi, Trakya toplu tarih
- parti-emrelic-0029 H-0002, H-0003, H-0007 — Sivrihisar germiyan kök nedeni bulundu ama uygulanmadı; Söğüt-Domaniç koordinatör kararı bekliyor
- parti-emrelic-0030 H-0002, H-0003, H-0004, H-0007, H-0009, H-0010, H-0013, H-0014, H-0017, H-0018 — Boğaz ailesi, ittifak rozeti, Ordu sivri sınır, Rumeli/Pençik anakronizmi, Selanik seyrek tohum, yabancı haber sızma kuralı, Niş/Sırbistan, Teke üçgen (bkz §③G)

**DÜŞÜK / kozmetik / içerik zenginliği:** kalan ~50 madde — kronoloji
başlık zenginleştirme (Rakka/Deyrizor/Hama/Beyrut), "tur:görüşme" glifi,
Malta kıyı sabitleri (kabul edilmiş borç), Fuzûlî anakronizmi, İngriya
kaleleri, Böğürdelen savaş işareti, Cem Sultan rehin diplomasisi detayı vb.
— hiçbiri haritayı bozmuyor, tam liste grup dosyalarında.

## ⑦ ÖLÇEMEDİM — 8 madde

- parti-0003/H-0009 — Fetret devri Timurlu valiliği + Anadolu beylikleri sınır teyidi: çok-sınırlı, ucuz yöntemle doğrulanamaz.
- parti-emrelic-0010/H-0001 — ClaudEmre/kutu tespih arayüzü özelliği (bu depoda değil, ayrı araç).
- parti-emrelic-0019/H-0077, H-0078 — Van yanı pembe toprak: tahtadaki M-0001 sorusu hâlâ cevapsız, bu ölçülmeden kapanamaz.
- parti-emrelic-0028/H-0001, H-0003, H-0007 — GORSEL ARAŞTIRMA ve OPUS HAZIR KITA 52'ye sevk edilmiş, hiç yanıt gelmemiş; veri kendi içinde tutarlı ama görsel/motor teyidi yapılamadı.
- parti-emrelic-0030/H-0016 — Tuna nehri yaslaması: nehir listede var ama bu spesifik vaka hiç ölçülmedi.

## ⑧ Genel gözlem (11 alt-oturumun ortak bulgusu)

En sık BAYAT sebebi: **"araştırma bitti, sonuç yazıldı, ama koordinatör
tarafından `CEVAP.json`da hüküm güncellenmedi"** — yani gerçek kusur değil,
kayıt bakımı eksikliği. İkinci en sık HÂLÂ GEÇERLİ sebebi: **"düzeltme
dosyası yazıldı ama `girdi.py`ye bağlanmadı"** (§③A). Üçüncüsü: aynı kök
neden birden çok pakette bağımsız keşfedilmiş (Boğaz ızgarası, Manama kapı
hatası, diğer-devlet-başkenti, Kutsal İttifak) — bunlar TEK bir düzeltmeyle
birden çok maddeyi kapatacak.
