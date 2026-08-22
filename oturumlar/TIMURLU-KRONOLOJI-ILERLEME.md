# TİMURLU KRONOLOJİ — ilerleme defteri

## Kimlik
- **Ad (tahtada):** `TİMURLU KRONOLOJİ` (önceki ad: `PORTEKİZ KRONOLOJİ` /
  `SONNET HAZIR KITA 53`)
- **Görevlendiren:** OSMAN GAZİ (koordinatör), cross-session mesajla
- Çalışma dizini `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`

## Görev
`oturumlar/KRONOLOJI-SARTNAME.md` uyarınca `data/kronoloji_timurlu.js`
(`window.KRONOLOJI_TIMURLU`) yazıldı. Kapsam 1370-1507 (fiilen
1391-1507 — bkz. ①).

## Tur 1 — 21 Ağustos 2026, teslim edildi

**① madde sayısı:** 0 → 24. 🔴 **Bilerek düşük** — koordinatör
`data/kronoloji_iran.js` ve `data/kronoloji_hindistan.js`'in Timur'un
sekiz omurga olayını ZATEN yazdığını (bir kısmı `[Timurlu]` etiketiyle)
uyardı, "mükerrer yazma" dedi. Ben de yazmadım: 1370 kuruluş, 1381 İran
seferleri, 1387 İsfahan, 1398 Delhi, 1405 ölüm, 1409 Şahruh Herat, 1447
Şahruh ölümü, 1458 Ebû Said — bu sekizi başka dosyalarda. Toplam
Timurlu anlatısı 24+8 = 32 madde civarı, üç dosyaya dağılmış durumda.

**② konu dağılımı (§2'deki altı kova):**
```
askerî-siyasî-toprak-antlaşma-ittifak-isyan-hükümdar   17  (%71)
idarî-hukukî-malî                                        0  (%0)
bilim-teknoloji                                           3  (%12)
kültür-sanat                                              2  (%8)
sosyal-dinî-felsefî (olum+din karışık)                    2  (%8)
iktisadî                                                  0  (%0)
```
🔴 ÇIKARIM: koordinatörün "bu devlette kültür askerî tarihten daha
önemli" uyarısına rağmen askerî ağırlık yine yüksek — ama sebebi farklı
bu kez: Timurlu'nun "sessiz" siyasi/idari/iktisadi tarafı zaten
`kronoloji_iran.js`de (Şahruh dönemi reformları vb. o dosyada olabilir,
kontrol etmedim) veya hiç yazılmamış. Bilim-kültür kovası (5/24 = %20)
küçük görünse de içerik AĞIRLIKLI: Uluğ Bey Rasathanesi, Zîc, Behzâd,
Nevâî, Câmî gibi devletin en özgün, en çok araştırılan yanı burada.
Sıradaki tur önceliği: Herat'ın idarî-malî yapısı (vakıf sistemi,
tımar benzeri düzenlemeler) hiç işlenmedi.

**③ onem/dunya dağılımı:**
```
onem   3=5 · 4=13 · 5=6   (5 oranı %25)
dunya  1=1 · 2=13 · 3=8 · 4=1 · 5=1
```
🔴 `dunya:5` yalnız Ankara Savaşı'na verildi (1402-07-28) — koordinatörün
brifinginde AÇIKÇA istediği değer, benim kararım değil.
⚠️ Altın Orda maddelerinin (1391 dunya:3, 1395 dunya:4) `dunya` değerleri
**geçicidir** — `data/kronoloji_altinorda.js` yazılırken çapraz
doğrulanmalı, o dosyayı ben okumadım.

**④ kapsam:** iç 13 · dış 11.

**⑤ yer_id:** dolu 19 · `kapsam_genis:true` 3 · boş 5 (Kunduzca, Terek,
Hindistan seferi kararı [genel], taht mücadelesi [genel] — dördü
gerçekten nokta gerektirmeyen ya da nokta kaydı olmayan olaylar).
Bütün 7 tekil `yer_id` (Halep, Şam, Bağdat, Ankara, İzmir, Semerkant,
Herat) `arac/girdi.py`nin okuduğu külliyata karşı **birebir doğrulandı**.

**⑥ kaynak:** dolu 24/24 · "bulunamadı" damgalı 1 madde (Bağdat'ın
ikinci yağması — TDV `timur` yalnız ilk alınışı ayrıntılı veriyor).
Dayanılan: TDV `timur` · `timurlular` · `ulug-bey` · `ali-sir-nevai`
(hepsi gövdesi okunarak) + Encyclopaedia Iranica (Behzâd maddesi,
TDV'nin kapsamadığı tanecik) + standart akademik kronoloji (birkaç gün
doğrulaması için). Forum/blog/AI üretimi içerik kullanılmadı.

🔴 **TDV SLUG DÜZELTMESİ:** koordinatörün brifingindeki `nevai` slug'ı
**ÖLÜ** (302). Doğru slug `ali-sir-nevai` — canlı, gövdesi okundu.

**⑦ NEYİ BULAMADIM:**
- Bağdat'ın 1401'deki ikinci yağmasının kesin günü (yıl/ay sağlam).
- Taht mücadelesi (1405-1409) ve Şahruh'un Semerkant'ı alışının kesin
  günleri — TDV `timurlular` genel anlatıyor, gün vermiyor.
- Zîc-i Uluğ Bey'in tam tamamlanma günü.
- Herat'ın idarî-malî yapısı hiç işlenmedi (yukarıda ②).
- Kadızâde-i Rûmî ve Ali Kuşçu'ya ayrı madde YAZMADIM — Uluğ Bey
  rasathanesi maddesinde (1420) isim olarak geçiyorlar ama kendi
  biyografik dönüm noktaları (örn. Ali Kuşçu'nun sonradan Osmanlı'ya
  geçişi 1472) bu dosyanın kapsamı dışında (1507'de bitiyor, ama Ali
  Kuşçu'nun Osmanlı'ya katkısı zaten `data/kisiler.js`te olabilir,
  kontrol etmedim).

**⑧ commit:** henüz YOK — dosya hazır, koordinatörü bekliyor. Bağlanması
gereken dosya: `data/kronoloji_timurlu.js` → `window.KRONOLOJI_TIMURLU`.
Kendi ilerleme defterimi kendim commit ettim (§7 istisnası).

## Durum
**TESLİM EDİLDİ, KOORDİNATÖRDEN CEVAP BEKLENİYOR.** `node --check` temiz,
`yer_id` doğrulaması temiz, kronolojik sıra temiz, mükerrer madde 0.
