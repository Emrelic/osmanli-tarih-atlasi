# İZ-YOK DENETİM C — DİLİM 3 bulgu raporu (37 madde)

Sevk: `oturumlar/IZ-YOK-DENETIM-C.md` · 10 Eylül 2026 · SONNET (İZ-YOK DENETİM C)

```
37 = 🟢 25  ·  🔴 8  ·  ⚪ 4  ·  ➖ 0
```

Yöntem: her madde için ① `PARTI.json`daki asıl istek okundu ② `CEVAP.json`daki
`not` alanının iddiası okundu ③ iddianın karşılığı BUGÜN `data/*.js` ·
`js/app.js` · `arac/*.py` içinde arandı (ad + tarih eşleşmesi, dosya bağlantısı
`arac/girdi.py`/`index.html` üzerinden doğrulandı) ④ sonuç yazıldı.

---

## parti-emrelic-0035 — 14 madde: 🟢13 · 🔴1

| no | kova | dayanak |
|---|---|---|
| H-0002 | 🟢 | `data/olaylar_ek17.js:206` — Anabolu (Nauplion) 1686-08-30 kaybı |
| H-0003 | 🟢 | `data/olaylar_ek17.js:107-111` — IV. Mehmed av sahnesi (mizahi rivayet yerine ciddi anlatım) |
| H-0005 | 🟢 | `data/yerlesimler.js:2089-2090` — Kragujevac/Çaçak `s:` dizisinde 1689-09-24→1690-09-09 Avusturya dönemi VAR, kayıt açıkça "(H-0005)" diye işaretli. **Not:** iddia edilen dosya (`data/yer_yama_p35.js`) hiç yok; düzeltme doğrudan `yerlesimler.js`'e inmiş. |
| H-0012 | 🟢 | `data/olaylar_ek17.js:115-125` — Baltacı-Katerina rivayeti (TDV "efsane" diyor) + "kaçırılan fırsat" tartışması |
| H-0016 | 🟢 (kayıtla) | `data/olaylar_ek17.js:136-140` — 32 kişilik tercüme heyeti (1725) yeni madde. **Not:** iddia "iki madde yazıldı" diyor ama sadrazamlık/1718 maddesi `olaylar_ek7.js`de ZATEN VARDI ve ek17'deki mükerrer kopyası "DENETİM AÇIK" ile SİLİNMİŞ (satır 127-134). Sonuç: konunun ikisi de veride var, ama biri yeni yazılmadı, önceden vardı. |
| H-0024 | 🟢 | `data/olaylar_ek17.js:142-147` — I. Mahmud'un Patrona Halil'i tuzağa düşürmesi |
| H-0025 | 🟢 | `data/olaylar_ek17.js:149-154` — Humbaracı Ahmed Paşa (Bonneval) |
| H-0028 | 🟢 | `data/olaylar_ek17.js:213-219` — Semendire'nin geri alınışı, t:"1738-08-01" |
| H-0040 | 🟢 | `data/olaylar_ek17.js:156-165` — I. Abdülhamid'in ölümü (1789-04-07). Mükerrer riski (`olaylar_ek7.js` "III. Selim tahta çıktı" aynı gün) not içinde AÇIKÇA flaglenmiş, gizlenmemiş. |
| H-0050 | 🟢 | `data/yerlesimler_ek24.js:133-138` — Ahtapolu/Rezve'nin Fetret (1402-1413) bölünmesi VAR. **Not:** iddia edilen dosya (`yer_yama_emilme2.js`) artık BOŞ (`window.YER_YAMA_EMILME2 = []`, 30 Ağustos'ta 3 kayıt çıkarıldı çünkü çakışan `yer_yama_p19.js` "daha tam" bulundu) — ama `yer_yama_p19.js` da hiç yok. Gerçek düzeltme üçüncü bir dosyada (`yerlesimler_ek24.js`) doğrudan iniyor. |
| H-0060 | 🔴 | **YAPILMAMIŞ.** `data/yerlesimler_ek27.js:51-53` — Mersin kaydı AYNI OBJE İÇİNDE MÜKERRER `s:`/`d:` anahtarı taşıyor; HER İKİ kopyada da önerilen `ramazanoglu` (1352→1516) dönemi YOK, `d:` hâlâ `f:"1352-01-01"` ile başlıyor (164 yıllık "hayalet Osmanlı" DURUYOR). Not alanının kendisi de bunu "HÜKÜM: cozuldu-**oneri**" diye yazmış — yani zaten bir öneri olarak yazılmış, ama hiç uygulanmamış. |
| H-0061 | 🟢 | H-0050 ile aynı kayıt/dayanak (`data/yerlesimler_ek24.js`) |
| H-0071 | 🟢 | `data/olaylar_ek17.js:229-234` — Munkács (Mukacheve) 1688-01-17 |
| H-0091 | 🟢 | `data/olaylar_ek19.js:12` — Bastille'in düşüşü 1789-07-14 |

---

## parti-emrelic-0036 — 7 madde: 🟢4 · 🔴3

| no | kova | dayanak |
|---|---|---|
| H-0001 | 🟢 | `arac/uret_petek.py:4307-4320,4444-4446` — `_osm_aktif` kademesi ayrılmış (27 Ağustos yorumuyla işaretli) + `data/bos_alanlar.js:166` Meşra er-Rek `cins:"kabile"` (istenen düzeltme) + `data/donemler.js` en son 8 Eylül'de üretilmiş (fix'ten SONRA bir koşu geçmiş) |
| H-0004 | 🟢 | Aynı paketteki H-0002'nin "TARALI ALAN" kök-sebep düzeltmesiyle (commit `e53c86a`, otomatik araçta zaten `dogrulandi`) aynı mekanizma; farklı semptom (Rusya/Ahıska bbox) |
| H-0007 | 🔴 | **YAPILMAMIŞ.** `data/yerlesimler_ek28.js:61-78` — Dörtyol/Erzin/Yumurtalık'ın `v:` alanı HÂLÂ `v:[]` (boş). İddia edilen "Adana'nın 1832-1841 döneminden mirror" hiç işlenmemiş. Kaynak dosya `data/yer_yama_uyg2.js` kendi üst yazısında "Bu dosya bir YAMA'DIR, `data/*.js`'ye hiçbir DOĞRUDAN yazma yapılmadı, koordinatör bul-değiştir yapabilir" diyor — yazıldı ama hiç UYGULANMADI. |
| H-0008 | 🔴 | **YAPILMAMIŞ.** `data/yerlesimler.js:245` — Urfa'nın `v:` alanı hâlâ ESKİ (`f:"1832-08-15"`), TDV'nin önerdiği 1839 başlangıcı hiç yazılmamış. Aynı `yer_yama_uyg2.js` önerisi. |
| H-0011 | 🔴 | **YAPILMAMIŞ.** `data/yerlesimler.js:248` — Maraş'ın `v:` alanı hâlâ ESKİ (`f:"1832-07-29"`), TDV'nin önerdiği 1833 başlangıcı hiç yazılmamış. Aynı `yer_yama_uyg2.js` önerisi. |
| H-0012 | 🟢 (açık kalemle) | `data/olaylar_sk105.js`, `index.html:1109` bağlı — Sammar (Reşîdî) Emirliği kuruluşu 1835. **Açık kalan:** notun kendisi `devletler.js` (sammar f:1835) ile `yerlesimler.js` (Hail s: 1836) arasında 1 yıllık senkron farkı bildiriyor, bu ayrı ve çözülmemiş. |
| H-0014 | 🟢 | H-0004 ile aynı mekanizma/commit (TARALI ALAN kök-sebep, `e53c86a`) — İbrail işgali |

**🔴 DESEN — 0036'nın 3 YAPILMAMIŞ maddesi de aynı kaynaktan:** `data/yer_yama_uyg2.js` bir ÖNERİ dosyası, hiç merge edilmemiş. Bu, tek tek düzeltmekten daha değerli bir bulgu — dosyanın TAMAMI (7 önerilen kayıt) muhtemelen aynı akıbeti paylaşıyor, ben yalnız kendi 3 maddemi ölçtüm.

---

## parti-emrelic-0037 — 8 madde: 🟢4 · 🔴4

| no | kova | dayanak |
|---|---|---|
| H-0001 | 🟢 | `data/yerlesimler_p0037.js:47-58` — Kahul, Bolgrad; dosya `arac/girdi.py:720` + `index.html:1062` üzerinden BAĞLI |
| H-0002 | 🟢 | `js/app.js:862` — `var SU_RENGI = "#c4dcea"` (istenen değer). **Bilgi notu (ayrı, çözülmemiş konu):** `denetim/ONERI-RENK-0904.json` bu rengin ekranda Esri raster altlığı tarafından örtüldüğünü, dolayısıyla görsel etkisinin şu an sıfır olduğunu söylüyor — ama bu H-0002'nin kendi talebinin (sabiti değiştirmek) dışında, önceden bilinen ayrı bir mimari borç. |
| H-0003 | 🔴 | **ÇOĞUNLUKLA YAPILMAMIŞ (karışık).** İddia 3 parçalıydı: (a) Antep/Kilis/Payas/Humus → v: eklendi: ÖLÇÜLDÜ, yalnız **Antep** (`yerlesimler.js:1229`) ve **Humus** (`yerlesimler.js`) `v:` taşıyor; **Kilis** (`yerlesimler_ek25.js`) ve **Payas** (`yerlesimler_ek28.js`) `v:` YOK. (b) Urfa/Maraş/Yumurtalık/Mersin → `data/yama_p0037_bekleyen.js`'e yazıldı: bu dosya `index.html`/`girdi.py`de HİÇ bağlı değil (adının "bekleyen" olması da bunu doğruluyor). (c) Konya-Kütahya koridoru: notun kendisi "yazılmadı" diyor. |
| H-0004 | 🔴 | **YAPILMAMIŞ.** "Deyrülkamer" adı `data/` altında HİÇ geçmiyor (arandı, yok). Not "kuru koşu ... 1 'yazilacak'" diyor — yani tespit edildi ama hiç yazılmadı. |
| H-0005 | 🟢 | `data/yerlesimler_p0037.js:60-68` — Lovozero, Varzuga; bağlı |
| H-0006 | 🔴 | **YAPILMAMIŞ (görünürlük).** `data/seferler_p0037.js` dosyası `index.html:1126`'da yüklü AMA `js/app.js` hiçbir yerde `window.SEFERLER_P0037`'yi okumuyor (arandı, 0 eşleşme) — veri var, motora hiç girmiyor. Notun kendisi de "UYGULAMA koordinatörde" diyerek bunu zaten bekleyen iş olarak işaretlemiş. |
| H-0007 | 🟢 | `data/yerlesimler_p0037.js:70-112` — Lublin, Chełm, Zamość vb.; bağlı |
| H-0008 | 🔴 | **YAPILMAMIŞ.** Notun kendisi de tamamının `data/yama_p0037_bekleyen.js`'e yazıldığını söylüyor — bu dosya bağlı değil (H-0003(b) ile aynı kanıt). |

---

## parti-emrelic-0038 — 1 madde: 🟢1

| no | kova | dayanak |
|---|---|---|
| H-0002 | 🟢 | `data/yerlesimler_ek4.js:71-86` — Widyân, Nuhayb; `tur:"bolge"` + `kasitli_bosluk:true` + `bos:"kabile"` (notun önerdiği tam desen); dosya "0038/H-0002" diye açıkça etiketli; `arac/girdi.py:165` + `index.html:921` üzerinden bağlı. **Not:** orijinal CEVAP notu "koordinatöre devredildi" diyordu (kendi dosyası değildi) — iş BAŞKA bir oturum tarafından sonradan tamamlanmış. |

---

## parti-emrelic-0039 — 2 madde: 🟢2

| no | kova | dayanak |
|---|---|---|
| H-0006 | 🟢 | `data/yerlesimler.js` — Bükreş ve Yaş `s:` dizileri: eflak/boğdan sonu ile `romanya` başlangıcı (1878-07-13) tam örtüşüyor, 42 yıllık boşluk yok |
| H-0009 | 🟢 (dar iddia) | `arac/girdi.py:580,584` + `index.html:1018-1019` — `yerlesimler_sinir_dogu.js`/`_guney.js` bağlı; `data/yerlesimler_sinir_dogu.js` 6 nokta `sinir:true` taşıyor (iddia edilen sayı). **Not:** maddenin kendi kapsamı dar — yalnız "yöntem kararlaştırıldı ve altyapı bağlandı" iddiası, TAM sınır çizimi AYRI maddelerde (TRAKYA H-0001, DOĞU/GÜNEY H-0002) açık bırakılmış, bunlar benim dilimimde değil. |

---

## parti-kasa-0009 — 4 madde: ⚪4 (KAPSAM DIŞI)

🔴 **ŞARTNAME UYARISI — bu paket Tarih Atlası'na ait DEĞİL.** H-0001/H-0002/H-0004/H-0005
maddelerinin hepsi SUT (Sağlık Uygulama Tebliği) ek listeleri — "Hasta Katılım
Payından Muaf İlaçlar", "Sistemik Antimikrobik İlaçlar", vb. İddia edilen kanıt
dosyaları (`docs/sut/EK4D_2026-08-08_EMRE.txt` vb.) bu depoda (Tarih Atlası)
yok ve muhtemelen `eczasist`/`ilactarif` gibi başka bir projeye ait — bu
oturumun oturum-başlangıcı ClaudEmre raporu bu iki deponun **"bu makinede
bulunamadı"** dediğini gösteriyor. Atlas git'ine soran otomatik araç
(`ARAC-PAKET-DENETIM-0910.py`) bu paketleri de taradığı için "iz-yok" çıkmış
olabilir — ama doğru soru sorulmamış: iz ATLAS'ta değil, o projenin kendi
deposunda aranmalı, ve o depo bu görev kapsamında (ve muhtemelen bu makinede)
yok. ⚪ ÖLÇÜLEMEDİ olarak işaretliyorum, 🔴 değil — "yapılmadı" hükmü
veremem, yalnız "buradan doğrulanamaz" diyebilirim.

| no | kova | not |
|---|---|---|
| H-0001 | ⚪ | SUT EK-4/D — bu depoda değil |
| H-0002 | ⚪ | SUT EK-4/E — bu depoda değil |
| H-0004 | ⚪ | SUT EK-4/G — bu depoda değil |
| H-0005 | ⚪ | SUT EK-4/Ç — bu depoda değil |

---

## parti-kasa-0010 — 1 madde: 🟢1 (KAPSAM DIŞI ama doğrulanabildi)

🔴 **Bu madde de Tarih Atlası değil — ClaudEmre'nin `kutu` (mesaj kutusu)
arayüzü hakkında.** Ama `C:\Users\emrem\OneDrive\Desktop\ClaudEmre` dizinine
dosya-okuma erişimim olduğu için doğrudan doğrulayabildim:

| no | kova | dayanak |
|---|---|---|
| H-0001 | 🟢 | `ClaudEmre/kutu/kutu.py` — "✍ Yeni mesajın:" giriş kutusu (satır 5736), `_emre_kapat()` fonksiyonu (5538, 2 yerden çağrılıyor) ve "⏳ koordinatörün cevabı bekleniyor" etiketi (5523) ÜÇÜ DE koda inmiş. Notun kendi "BAYAT TARAMASI" ek kaydı da (23 Ağustos) aynı üç maddeyi eski satır numaralarıyla zaten doğrulamıştı. |

---

## ② ŞARTNAME BELİRSİZLİĞİ — nasıl çözdüm

`oturumlar/IZ-YOK-DENETIM-C.md`, "parti-0009(4) parti-0010(1)" diyordu.
Diskte `parti-kasa-0009` (tek aday, `parti-emrelic-0009` hiç yok) VE hem
`parti-kasa-0010` hem `parti-emrelic-0010` (ikisi de iz-yok=1) var — rakam
tek başına ayırt etmiyordu. 0009 ile aynı satırda/aynı ailede olduğu için
KASA ailesini seçtim; içerik incelemesi bunu DOĞRULADI (kasa paketleri
tutarlı biçimde SUT/ClaudEmre-kutu konularını taşıyor, Tarih Atlası
konularıyla hiç örtüşmüyor — yani "emrelic" ailesinden AYRI bir iş akışı
olduğu netleşti). Koordinatöre ayrıca bildirildi (bekleniyor).

---

## Genel desen özeti — koordinatöre

```
🔴 GERÇEK YAPILMAMIŞ (8)        — çoğu "yama dosyası yazıldı ama HİÇ
                                   uygulanmadı/bağlanmadı" sınıfı:
   yer_yama_uyg2.js  (3: H-0007/H-0008/H-0011, 0036)
   yama_p0037_bekleyen.js (3: H-0003b, H-0008, 0037 — H-0003 kısmen bu sınıfta)
   seferler_p0037.js bağlı ama app.js okumuyor (1: H-0006, 0037)
   yerlesimler_ek27.js mükerrer s:/d: anahtarı (1: H-0060, 0035)
⚪ KAPSAM DIŞI (4)               — "kasa" ailesi, Tarih Atlası değil
🟢 GERÇEKTEN YAPILMIŞ (25)      — çoğu doğru ama BAŞKA bir dosyada/isimle
                                   indi (H-0005, H-0050/H-0061, H-0002/0038)
```

📌 En değerli bulgu tekil madde değil: **"yama dosyası" ile "uygulanmış
düzeltme" arasında bu depoda sistemik bir boşluk var** — bir oturum
`data/yer_yama_*.js` yazıp `not` alanına "yazıldı" dediğinde, bu dosyanın
GERÇEKTEN `data/yerlesimler*.js`'e bul-değiştirle işlenip işlenmediği ayrı
bir adım ve bu adım bazen hiç olmuyor. `§7`nin "yama dosyaları koordinatör
uygular" kuralı doğru ama UYGULANDI/UYGULANMADI durumu hiçbir yerde
izlenmiyor — CEVAP.json "cozuldu" yazınca "yapıldı" görünüyor.
