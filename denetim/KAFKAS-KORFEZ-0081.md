# KAFKAS-KORFEZ-0081 — parti-emrelic-0081'den 9 madde

Görev: M-5361 + düzeltme M-5368 (YILDIRIM BAYEZIT, 28 Eylül 2026). Kesin liste:
**H-0001 H-0023 H-0024 H-0033 H-0035 H-0038 H-0042 H-0043 H-0046** (H-0036 BALKAN-MACAR'a gitti;
görseline bakılmıştı, ölçüm/yazım YAPILMADI).

## 0. ÖNGÖRÜ — maddeler açılmadan yazıldı (görseller açılmadan önce)

Evren (yazıldığı an): 10 madde; H-0042 ek okuma ⇒ hata adayı 9. Tahmin: **9 adaydan 6'sı
gerçek atlas kusuru**, 3'ü "atlas doğru / bilinen iş".
H-0001 GERÇEK (noktasızlık) · H-0038 GERÇEK (aynı sınıf) · H-0024 BİLİNEN İŞ · H-0033 ATLAS
DOĞRU (Bahreyn değil, Katar kısmen) · H-0035 GERÇEK (tahmin: noktasızlık/emilme) · H-0046
GERÇEK · H-0023/H-0036/H-0043: biri gerçek, ikisi doğru.

## 1. Madde madde

### H-0001 — "üçe bölündü deniyor ama ikiye bölünmüş görünüyor" · 1490-01-01 · 🔴 GERÇEK
- **Ölçüldü:** kutu 40.8-44K × 40.5-47D, 29 nokta. 1490'dan sonra `imereti` yalnız
  **Kutaisi**; Kartli'nin (Tiflis) ve Kaheti'nin (Zagem) ikisi de `s:gurcistan` 1281→1801.
  Kartli/Kaheti iç bölgesinde toplam **2 tohum** (BOGAZ-OLCUM-0081'in 3'ü ile tutarlı).
- **Kök sebep NOKTASIZLIK DEĞİL, KİMLİKSİZLİK:** Kaheti'ye boyanan bir harita kimliği yok.
  `kaheti-kralligi` künyesi var (1578-08-09→1606-01-01) ama `renkler.py` BOYALAR'da **yok**.
  Nokta eklemek peteği küçültür, üçüncü rengi getirmez. ⇒ Öngörü "noktasızlık" YANLIŞ çıktı.
- **Kaynak:** TDV `gurcistan`: «Fakat daha sonra Gürcistan üç krallığa (Kartliya, Kahetya,
  İmeretiya) ve beş beyliğe ayrıldı» — **yıl YOK**. Madde ve künyedeki 1490 bir kaynak değil.
- **Çare:** `denetim/KAFKAS-KORFEZ-0081-nokta.md` §3 — künye genişletme (devletler.js) +
  BOYA (renkler.py = TUZ → tam inşa diff'i) + Zagem/Telavi `s:`. Ayrıca 3 nokta (Gori,
  Telavi, Duşeti; 3 km/15 km mükerrer taraması 0).

### H-0038 — 1563: "bazı yerler bağlı bazı yerler müstakil" · 🔴 GERÇEK (kısmen)
- TDV `gurcistan`: «Amasya Antlaşması'na göre (1555) İmeret, Dadyan (Megrel ve Svanet),
  Güryel, Daveli/Tao-eli Osmanlı Devleti'ne; Kartli, Kahet ve Mosuk ise Safevî Devleti'ne
  veriliyordu.»
- **Atlas:** Kutaisi 1555-05-29 tâbi ✓. Ama **Güryel kıyısı** (Batum, Murvaneti) ve Acara
  (Hulo, Makhalak'auri) 1578-08-09'a kadar "müstakil `gurcistan`" ✗. Kartli/Kaheti 1555-1578
  Safevî payı olarak da gösterilmiyor (Safevî tâbiliğini gösteren alan yok — `v:` yalnız
  Osmanlı tâbiliğidir; ölçülmedi, şema sorusu).
- **Uygulayıcı C (`--guryel`):** Batum + Murvaneti `v:` 1555-05-29→1578-08-09 Güryel tâbi.
  ⚠️ Batum'un Güryel'e aidiyeti TDV'de yazmıyor (bölgeden şehre) → bayrakla, karar sende.
  Hulo/Makhalak'auri (yukarı Acara) ve Sohum (Abhaz — Amasya listesinde ADI YOK) YAZILMADI.
- **Ek bulgu (düzeltmedim):** TDV «1508'de Güryel ve İmeret (Açıkbaş) Krallığı'nı Osmanlılar'a
  itaat ettirip haraca bağlamıştı» — atlas İmereti tâbiliğini 1555'ten başlatıyor.
  Bitişi TDV'de yok ⇒ pencere kurulamaz, yalnız bildiriyorum.
- **Ek bulgu:** Tiflis `d:` ve Zagem `v:` **1606-01-01**'de bitiyor; TDV: «1603'te Şah I.
  Abbas Tiflis şehrini Osmanlılar'dan geri alıp…» Zagem künyesinin kendisi `t:` için
  "kaynaksız" diyor. ⇒ 1606 → 1603 düzeltmesi aday (Değişmez 2: 1603 maddesi var mı —
  ölçülmedi). UYGULAYICIYA KOYMADIM (Tiflis TDV `tiflis` ile karşılaştırılmalı).

### H-0023 — 1517 Tulmeyse eksklavı "doğru mu" · 🟡 KAYNAK KENDİYLE ÇELİŞİYOR
- **Ölçüldü:** Tulmeyse `s:memluk`→1517-05-19, `d:` 1517-05-19→1711; komşu **Merc**
  `devletsiz`, `d:` ancak 1551-08-15. ⇒ 1517-1551 arası Berka'da tek Osmanlı üçgeni.
- TDV `berka`: «Tarih boyunca Mısır'a bağımlı olduğu görülen Berka bölgesi, Mısır'ın
  Osmanlılar tarafından fethinden sonra bu idareye bağlandı» → 1517'de BÖLGECE Osmanlı.
- TDV `bingazi`: «1551 Trablusgarp seferi sırasında Berka bölgesinin Osmanlı hâkimiyetine
  girmesinden sonra…» → 1551.
- **Hüküm:** eksklav "yarım doğru": ya bütün Berka 1517 (Merc de) ya Tulmeyse de 1551.
  İki TDV maddesi çelişiyor (D211 ⑥) — taraf SEÇMEDİM. Öneri: `berka` cümlesi yıl
  vermiyor, `bingazi` veriyor ⇒ Tulmeyse `d:` başlangıcını 1551-08-15'e (Merc ile aynı
  gün, komşu günü kuralıyla) çekmek daha az kaynak zorlar. Karar sende.

### H-0024 — 1521 Katar "yarım" · ⚪ BİLİNEN İŞ (NOKTA-ORTADOGU-0077 H-0029 zinciri)
- **Ölçüldü:** Doha `s:` yalnız 1913-07-29'dan (`v:` 1871-1913), `bos:devletsiz`; iç
  dolgu `s:[]`, `v:` yalnız 1559-1670, `bos:devletsiz`. 1521'de ikisi de sahipsiz ⇒ doğu
  yarı beyaz, batı yarı körfezin karşısındaki **Ukayr**'ın (`cebri`) peteği.
- Durum: 0077'de "YAMA C + kuzeye Zübâre, 1871 öncesi zincir TDV'de kurulamıyor, karar
  koordinatörün" diye bekliyor. **Kapatmadım.** Yeni bilgi: TDV `katar` 1555 belgesi
  (Şeyh Muhammed b. Sultan b. Müsellem idaresi) ve **1559 Katar sancağı** — ikincisi iç
  dolgunun `v:`'sinde zaten var. 1521 için sahip `bulunamadi`.

### H-0033 — 1550 Lahsa ilhakında Manama ve Katar var mı · ✅ ATLAS DOĞRU (iki ek bulguyla)
- **Katar:** TDV `katar`: sancak **1559**'da kuruldu → iç dolgu `v:` 1559 ✓. 1550'de yok ✓.
- **Bahreyn (Manama):** `portekiz` 1521→1602 ✓ (TDV `bahreyn`: 1521 Portekiz, 1602 İran).
  ⚠️ TDV `bahreyn` «1559 yılında Bahreyn'i ele geçirip orada bir üs kurmuşlardır» der;
  TDV `katar` aynı seferde Lahsa beylerbeyinin **öldüğünü** ve sancakbeyinin orduyu
  devralmak zorunda kaldığını anlatır. Kaynak kendiyle çelişiyor → yazmadım.
- **Ek bulgu:** TDV `lahsa`: bölge «Basra beylerbeyiliğine bağlandı (**1547**)»; TDV `katif`:
  Osmanlılar «**1550**'den itibaren ilgilenmeye başladılar», Lahsa eyaleti **1555**.
  Madde 1550 diyor; üç tarih üç ayrı olayı tarihliyor — madde düzeltilmedi, bildiriyorum.

### H-0035 — 1550'de Şehrizor/Halepçe elden çıkmış, madde yok · 🔴 GERÇEK (DEĞİŞMEZ 2 KÖR NOKTASI)
- **Ölçüldü:** Şehrizor `d:` 1535-01-01→**1550-01-01**, Halepçe `d:` 1534-12-04→**1550-01-01**,
  ikisi de `s:safevi`'ye döner, 1554-08-22'de yeniden `d:`.
- **Veri DOĞRU:** TDV `sehrizor`: «Osmanlı hâkimiyetini kabul eden Bige Bey'in 1550'de
  ölümünün ardından Zalm Kalesi'ni ele geçirip beyliğe hâkim olan kardeşi Sührâb,
  Safevîler'e meyledip Osmanlılar'a itaatten ayrıldı.»
- **Kusur MADDE yokluğu.** Değişmez 2 bunu görmedi çünkü aynı gün (1550-01-01) **Lahsa**
  maddesi var — ±30 gün penceresi başka bir olayın maddesiyle "senkron" sayıyor. Bu bir
  **yanlış temiz** sınıfıdır: yıl hassasiyetli (`-01-01`) kırılmalar aynı yılın herhangi
  bir `-01-01` maddesiyle eşleşir. Öngörüm (noktasızlık) YANLIŞ çıktı.
- **Uygulayıcı A:** `data/olaylar_ek5.js`'e Lahsa maddesinin ardına 1550 Şehrizor kaybı
  maddesi (kaynak `sehrizor`, gün yok → 1550-01-01, `k:"kayip"`, `yer_id:"Şehrizor"`).
- **Öneri (alet):** `denetle.py` Değişmez 2'ye "madde `yer_id`/`yer` kırılmanın yerini ya da
  devletini anıyor mu" sorusu — `-01-01` çakışmalarında. Bu oturum yazmadı (arac/ benim değil).

### H-0042 — Don / Zaporojye Kazakları · Ukraynalılar kimdir · 📖 EK OKUMA
- **Ölçüldü:** `tartisma-karadeniz-kazaklar` (ekokuma_karadeniz.js) ilk iki soruyu zaten
  cevaplıyor ve `olay:["1570-01-01|Don",…]` ile **tam bu maddeye bağlı**. Yeni kart YAZMADIM.
- Eksik olan "Ukraynalılar kimlerdir": `denetim/KAFKAS-KORFEZ-0081-ekokuma.js` — 1 kart,
  TDV `ukrayna` tek kaynak, node ile sözdizimi sınandı. Öneri: `ekokuma_karadeniz.js`
  dizisine ekle ⇒ `_EKOKUMA_DOSYA_ADLARI`'na yeni satır GEREKMEZ.
- ⚠️ TDV `kazaklar` = **Kazak Türkleri** (Kazakistan), Cossack değil — kaynak olarak kullanılmadı.
- ❓ Emre kartı neden görmedi? Bağ var; arayüzde gösterilip gösterilmediği ÖLÇÜLMEDİ.

### H-0043 — 1570 Kırım'ın Don kuzeyindeki adacığı · 🔴 GERÇEK
- **Ölçüldü:** adacık = **Bozkır (Deşt-i Kıpçak)** 48.50K 42.00D, `v:kirim gevşek` 1502→1774.
  Güneyindeki **Don bozkırı (Sal)** 1570'te `don-kazak`'a geçtiği için Kırım rengi kuzeyde
  kopuk kalıyor.
- Dayanak: Brehunenko, *Enciklopedija istoriji Ukrajiny* T.2 (2004) «Донські козаки»:
  topluluk 16. yy ortasında, Orta ve Aşağı Don'da; sınırları Razdory. Yıl 1570: mevcut
  maddenin kendi kaynağı.
- **Uygulayıcı B (`--don`):** `v:` 1570-01-01'de biter; `s:` 1570→1721 `don-kazak`, 1721→
  `rusya` (Sal ile aynı). ⚠️ Emre kararı D'nin (13 Eyl) 1570 sonrasını değiştirir → bayrakla.
  Nokta Don'un 50-80 km batısında (Bıstraya havzası); "Orta Don" tanımına girip girmediği
  kaynağın tanecik sınırındadır.

### H-0046 — Ferhad Paşa 1590 çizgisinin batısı · 🟡 BÖLGE DÜZEYİNDE KAYNAKLI, ŞEHİR DÜZEYİNDE `bulunamadi`
- **Ölçüldü:** Sakkız, Bâne, Merîvan, Serdeşt, Kasr-ı Şîrîn: 1590-1603 arası `s:safevi`,
  Osmanlı penceresi YOK. Komşuları Kirmanşah `d:` 1590-03-21, Şehrizor/Halepçe/Hânekîn `d:`.
- Kesik çizgi = `data/hukuki_sinirlar.js` `ferhad-pasa-istanbul-1590` — kaydın kendisi
  «ANTLAŞMA bir ÇİZGİ çizmiyor ve bir YER LİSTESİ vermiyor» ve açık sorularda
  «Erdebil · Kürdistan altılısı — olculmedi» diyor.
- TDV `safeviler`: «…Luristan, **Kürdistan**, Tebriz, Karacadağ, Nihâvend, Şehrizor bölgeleri
  Osmanlı hâkimiyetine girdi.» Sakkız/Bâne/Merîvan Erdelân (Safevî Kürdistanı) toprağıdır —
  ama bu **bölgeden şehre** taşımadır (D208).
- Şehir düzeyi: TDV `erdelan`/`kasr-i-sirin`/`merivan`/`bane`/`senendec`/`zuhab` → **302
  (ölü slug)**; TDV arama JS ile doluyor, okunamadı; Iranica **403**. ⇒ `bulunamadi`.
- **UYGULAYICIYA KOYMADIM.** İki yol: ① Emre kararıyla bölge cümlesi yeterli sayılır →
  beş noktaya `d:` 1590-03-21→1603-10-21 (Kirmanşah/Tebriz ile aynı uçlar); ② Iranica
  ARDALAN / Kütükoğlu 1962 okunur (tarayıcı gerekir). **Önerim ②** — Kasr-ı Şîrîn Kirmanşah
  ile Hânekîn arasında olduğu için ① orada zayıf değil, ama Serdeşt/Sakkız Mukri
  bölgesidir ve Erdelân'a ait olduğu da ayrıca kaynak ister.

## SON — öngörü tuttu mu
| | öngörü | sonuç |
|---|---|---|
| gerçek kusur sayısı (9 aday; H-0036 düşünce 8) | 6 | **5** (H-0001 · H-0038 · H-0035 · H-0043 · H-0046) + H-0023 kaynak çelişkisi |
| H-0001 sebebi | noktasızlık | ✗ **kimliksizlik** (Kaheti boyası yok) |
| H-0035 sebebi | noktasızlık/emilme | ✗ **madde yokluğu + Değişmez 2 yanlış temizi** |
| H-0024 | bilinen iş | ✓ |
| H-0033 | atlas doğru | ✓ (ek iki tarih bulgusu) |
| H-0046 | gerçek | ~ kaynak bölge düzeyinde; şehir düzeyinde `bulunamadi` |
⇒ Sayı yakın, **iki sebep teşhisi yanlıştı** — ikisinde de "harita yanlış = nokta yok"
refleksi tuttu ama ölçüm başka kök gösterdi.

## Dosyalar (hepsi yeni, hepsi benim)
- `denetim/KAFKAS-KORFEZ-0081.md` (bu rapor)
- `denetim/KAFKAS-KORFEZ-0081-uygula.py` (A varsayılan · B `--don` · C `--guryel`; kuru koşu 5/5 çapa)
- `denetim/KAFKAS-KORFEZ-0081-nokta.md` (3 nokta + Kaheti künye/boya planı)
- `denetim/KAFKAS-KORFEZ-0081-ekokuma.js` (1 kart önerisi)
- `denetim/KAFKAS-KORFEZ-0081-olc.py` · `denetim/KAFKAS-KORFEZ-0081-tdv.py` (ölçüm/çekim aletleri)
- `denetim/KAFKAS-KORFEZ-0081-tdv-onbellek/` (TDV önbelleği — commit'lenmedi, yerel)
