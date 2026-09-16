# HARITA-VERI · DALGA 0052 · 16 Eylül 2026

Oturum: HARITA-VERI (Opus) · koordinatör 1.MURAT · şartname `oturumlar/DALGA-0052.md`.
Veriye YAZILMADI. Öneriler 5 dosyada, uygulayıcı UYGULA. Araştırma beş paralel kolda yapıldı; alıntılar kolların okuduğu gövdelerden.

| dosya | kalem | veri yaması |
|---|---|---|
| `denetim/YAMA-0052-IRAK.json` | 5 | Erbil (seçenekli) |
| `denetim/YAMA-0052-KAFKAS.json` | 4 | 2 renk (renkler.py) |
| `denetim/YAMA-0052-EGELEVANT.json` | 6 | Limni |
| `denetim/YAMA-0052-UKRAYNA.json` | 12 | Bar koordinatı · Çehrin · Uman · Colmar · 5 yeni nokta |
| `denetim/YAMA-0052-TENHA.json` | 4 | 2 yeni nokta (künye+renk ister) |

## Madde madde

| madde | sonuç | çare |
|---|---|---|
| H-0010 | Harita DOĞRU: Gence/Karabağ doğrudan Safevî (TDV gence, karabag · Iranica GANJA 1606); Kartli/Kaheti kendi krallarıyla Safevî tâbisi (TDV gurculer, tiflis · Iranica KARTLI). Model tâbiliği yalnız Osmanlı'ya karşı çiziyor. Tiflis kayıp günü TDV'de çelişik (1603 / 1590-1614), maddenin kaynağı `sirvan` Tiflis'i anmıyor | cevap · şema kararı Emre'de (Safevî tâbilik şeridi) |
| H-0011 | Kabartay #d058e8 ↔ Gürcistan #e020b0: ΔE ana 13,7 / ikinci 8,5 | renk #0c5a84 (yedek #8a00f6) — renkler.py:3059 |
| H-0013 | Venedik #deed93 ↔ Avusturya #bdab3f ΔE 12,17; Venedik = İmereti (ΔE 0,63) | renk #fcfc06 — renkler.py:896 · borç: İmereti↔Ryazan ΔE 3,0 |
| H-0014 | Gün farkı yok. Görseldeki bölge Tarki (Kumuk) peteği; komşu kuralı tâbi→Safevî ile Osmanlı→Safevî'yi ayrı sayıyor | UI: komşu aramada Osmanlı ≡ tâbi (+6 yerleşim toplam) |
| H-0015 · 51/H-0007 | Özerk görünüm kaynaklı: `v:harfusogullari` 1521-1850 (TDV balebek, harfus) · `v:lubnan-emirligi` 1516-1842 (TDV lubnan) | cevap · borç: Fahreddin dönemi Beyrut/Sayda (gün yok) |
| H-0019 | 19 yerin 19'u madde gününde geçiyor; madde yalnız Bağdat'a bağlı, komşu eşiği 150 km. Emre'nin iki listesi eşikle BİREBİR | UI: zincirleme komşu (bu madde 9→19; bütün veride 85 madde / +1115 yerleşim — karar ister) |
| H-0021 · H-0043 | Erbil Safevî dönemi 1623-11-28→1638-12-25 Bağdat'tan kopya, kaynaksız; Musul/Kerkük 1624-1625 ⇒ 13 yıllık adacık. Erbil'i adıyla anan kaynak YOK (TDV erbil, musul--irak, kerkuk, husrev-pasa okundu) | yama A: Musul/Kerkük'e hizala 1624→1625 (3 dosya) — M-3946 itirazı açık · yama B: yalnız 12-25→12-24 |
| H-0043 | koyu/doğrudan ikiliği H-0019 ile aynı sebep (9/17) | UI |
| H-0077 · H-0081 | Limni Venedik başı 1656-08-21 kaynaksız, madde 07-13 ⇒ 39 gün gecikme. Geri alış Kasım 1657 doğru (madde cümlesi ileriye dönük). Semadirek geri alış günü BULUNAMADI | yama: Limni 1656-07-13 (gün komşudan Bozcaada · TDV bozcaada) |
| H-0092 · 51/H-0008 | Bahreyn 1602 Safevî ✓ (TDV bahreyn); Katar Safevî DEĞİL (TDV katar). Harita doğu Katar'ı 1610-1710 Safevî boyuyor: Doha `kur:1825` + `kasitli_bosluk`, `_kusatilmis` bayrağa uyuyor ama puan dolgusu `_dordurcu` uymuyor → Manama puanı. Düz çizgiler benihalid 257 km / safevi 262 km kenarlar | motor → GEOMETRI/MOTOR |
| H-0095 | Petekler 200 km tavanı aşmıyor (Meciboj ~180, Bar ~195); kuzeyde 200 km nokta yok (§2). Bar koordinatı 43 km doğuda. TDV kamanice: sancaklar Kamaniçe · Bar · Mejibuji · Yazlofça ✓ | yama: Bar 27.674 · yeni nokta Vinnitsa · Braslav (v 1672-10-18→1699-01-26) · Kostantinov · Jitomir · Berdiçev (lehistan) — IEU+GeoNames. `kazak-hetmanligi` künyesi YOK |
| H-0098 | Colmar: fransa #c0d028 ↔ almanya #78d028 aynı aile (ΔE76 28,2) + tarih yanlış (1648 değil 1673-08-28 işgal) | yama Colmar 1673-08-28 ⚠️ kaynak ZAYIF (belediye kronolojisi, akademik teyit yok) · renk borcu |
| H-0111 | Amur/Mançurya 1672: 14 noktanın 5'i sonra kurulmuş, 3'ü beyanlı boşluk; daireler 200 km tavanı. Kaynaklı yeni nokta BULUNAMADI | motor (Emre'nin "boşluk olsun" kararıyla uyumlu) |
| H-0113 | Sulawesi orta/doğu noktasız | yama: Palopo (Luwu, Bulbeck & Caldwell 2000) · Bau-Bau (Buton, Schoorl) — `luwu`/`buton` künye+renk ÖNKOŞUL · D1 314→316 |
| H-0114 | Yeşil = `cungar` #3fb4a2. "Devletsiz" yazısı `bos_alanlar.js` zamansız halka işaretinden | UI: işaret yalnız sahipsiz tarihlerde · borç: kentlerin `kur:` alanı yok (1709-1736 Rus kaleleri) |
| H-0123 | Uman Ağustos 1674 Kara Mustafa'ya teslim (TDV merzifonlu-kara-mustafa-pasa) ⇒ 1678 enklavı YANLIŞ. Çehrin: 1672 sonrası Doroşenko (Osmanlı himayesi), 1676-09-19 Rus'a, 1678-08-21 Osmanlı. Yedisan'da o devir kalıcı yerleşim yok (IEU) | yama Uman d 1674-01-01→1699 + Çehrin + madde istekleri (1674 Uman · 1676-09-19 · ek5:249 gün 08-21) · açık: TDV "sekiz yıl" ↔ veri 1699 |
| H-0125 | 1679'da Kabartay beylikleri vardı (TDV kabartaylar); Nalçik şehri YOKTU (1818 Rus kalesi, tek kaynak Britannica) | cevap · "Kabartay (Nalçik)" etiketi TK Kırım oturumunun alanında |

## Uygulayıcıya şartlar
- Satır numaraları kayıyor — `eski` metniyle ara (UKRAYNA).
- Erbil yaması 3 dosyaya birden iner (`yerlesimler.js` · `yer_yama_manda_0906.js` · `yer_yama_ok109_fetret.js`).
- H-0113 künye ve renk açılmadan uygulanmaz; `denetle.py` D1 beklenen değeri koordinatörde.
- Renk değişiminden sonra `py arac/renk_olc.py` tam denetim.
- Kaynağı zayıf: Colmar (akademik teyit yok) — uygulamadan önce karar.

## Bulunamayanlar
Semadirek 1657 geri alış günü · Luwu'nun Hollanda'ya geçiş günü · Mandar/Bolaang-Mongondow/Banggai sahiplik günleri · Erbil 1623-1638 adıyla kaynak · Tiflis 1603/1606 çelişkisinin gün düzeyinde çözümü · Kołodziejczyk Podolya defteri (okunamadı) · Bila Tserkva 1672-99 (TDV↔IEU çelişik).

---

# İKİNCİ TUR · KUTU-AYIKLA HV 1–65 + RENK 1–5 (16 Eylül akşam)

Veriye YAZILMADI. 70 kalem dört dosyada:

| dosya | kayıt | öneri | devir | cevap | motor-AB | diğer |
|---|---|---|---|---|---|---|
| `YAMA-0052B-SINIF.json` | 15 | — | 5 | — | 6 | başka oturum 3 · UI 1 |
| `YAMA-0052B-DEVIR.json` | 24 | 5 | 12 | 5 | 2 | — |
| `YAMA-0052B-NOKTA.json` | 16 | 4 | 5 | — | 5 | bulunamadı 1 · yapılmadı 1 |
| `YAMA-0052B-RENK.json` | 40 | 34 | 4 | 1 | — | UI 1 |

## A/B görünümüyle çözülür (araştırma yapılmadı)
HV-1 · 4 (göl kıyıları, Emre ⑦ "seçici ince") · 6 (Çimpe, körfez aşımı) · 8 · 9 · 30 · 35 (boğaz aşımı) · 12 (Malta) · 16 üst boşluk · 28 · 29 · 33 (kıyı/Kuzey Afrika) · 40 (1493 Yedisan) · 41 · 42 · 43 · 45 · 46 (pergel daireleri) · 51 · 53 · 58 (çöl dolgusu, Emre ㉔ "(b) beklesin") · HV-5 boğaz kısmı.

## Kapanmış (bugünkü girdide ölçüldü)
HV-22 Basra/Abâdân · HV-49 Bayburt/Kiğı (Tercan/İspir bulunamadı) · HV-54 Taganrog · HV-64 Denizli (⚠️ 1429-01-01 indi, madde 1429-02-01 → 31 gün, D2 denetlensin) · HV-65 Herseknovi · Zamantı/Darende/Mesudiye/Gölköy (HV-3/7/31) · Kutsal Roma rengi (HV-2) · Novgorod/İlhanlı/Bosna (RENK-3/4) · Eğri/Kanije Habsburg (RENK-2).

## Uygulanmamış yama bekleyen (devir)
Trakya TR-001…050 (HV-26/32) · A3 kalem 1 Uzun Hasan 1468 (HV-37) ve kalem 2 Ahıska (HV-14) · A6A-Y8 Levant 1516 (HV-10) · A6A-Y7 Yergöğü (HV-59) · A6B/RUS Hotin (HV-57) · A6C C-0020 Şamahı (HV-55) · KARTLI-KAHETI (HV-24; taslak kimlik "kaheti" ↔ künye "kaheti-kralligi") · KUZEY Y1/Y2 Baltık (HV-25) · KUZEY 1703 İngriya (HV-23) · ARAP El-Arîş/Salihiyye (HV-60) · UZAK Y1 Hârizm (HV-44) · Ferhat Paşa BİRLEŞİK+EMRE5 (HV-13/15/18/19/56/63) · 0052-IRAK Erbil (HV-17) · 0052-KAFKAS (HV-48/50) · PAKET-SINIF2 renk (HV-36).

## Yeni öneriler
- **Kilitbahir** (HV-5): kur/d.f + p0036 maddesi 1452 → 1463-01-01 (TDV kilitbahir-kalesi "fetihten sonra" · Kritovulos 867/1463); ek.js:103-104 anakronik anış çıkar.
- **Van havzası 19 kayıt** (HV-36 veri): Karakoyunlu→Akkoyunlu 1467-01-01 → 1467-11-10 (Cihan Şah'ın ölümü, TDV uzun-hasan) + ek20 maddesi; ek5 çöküş maddesiyle mükerrer riski — koordinatör. Bitlis 1473, ara sahip bulunamadı.
- **Tartu** (HV-25 ek): Rus 1558→1582 (Britannica, §4 ara bölge, tek kaynak).
- **Göksun · Gürün** (HV-7), **Reşadiye** (HV-31) → yerlesimler_anadolu_0914.js; D1/D2 açık 0.
- **Elbistan**: 1281-1337 memluk → ilhanli, 1381-1384 memluk (TDV elbistan); 1384-01-01 yeni yabancı kırılma → 2s ölç. Maraş aynı sınıf, ölçülmedi.
- **Aşkale · Sarıkamış** (RENK-1): eski Erzurum/Kars zinciri kopyası → güncel TDV zincirine.
- **Kars/Ardahan 9 kayıt** (RENK-5): 1340-1469 aralığı Revan'ın düzeltilmiş zincirine (önce ek26, sinir_kuzey üretilmiş dosya → üreteç sonra). 1467-1469 ikinci kopukluk açık (HV-37'ye bağlı).
- **Zigetvar** (RENK-2): 1526-1566 macaristan → avusturya (TDV sigetvar). 28 benzer kayıt Szapolyai/Ferdinand kimlik işi.
- **Renk**: karakoyunlu #e018e0 → #8a84ea (gürcistan ΔE94 5,8 → 16,7) · denize karışan 21 kimliğe koyu ton (DAL1 21 → 0; komşu çakışması 2→2 değişmedi). Sırbistan mor önerisi Emre'ye ("çok dert değil" demişti). Kabartay/Venedik (783f473) engel olarak hesaba katıldı. Yama dışı: gürcistan ↔ kaçar ΔE94 4,7.

## Bulunamadı / yapılmadı
Sarız · Koyulhisar · Tercan · İspir · Sibir şehirleri (Karaçin/Taşatkan/Tarhankale) koordinatı · Doğu Polesya 1281 künyeleri (HV-2) · Kanem-Bornu Mao/Bulala künyesi (HV-47) · Narva İsveç geçiş yılı · Gyula TDV sluğu.

## Uygulayıcıya
renkler.py koşu sürerken yazılmaz; renkler ancak sonraki koşuyla iner → sonra renk_olc.py + renk_cikti.py. KUTU-ACIK-LISTE NOT'ları 200 karakterde kesik; tam metin parti-emrelic-00NN/CEVAP.json'da.
