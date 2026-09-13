# PAKET-UI3 · arayüz teslim raporu

> PAKET-UI3 · 14 Eylül 2026 · 1.MURAT sevki · kaynak: kutu `parti-emrelic-0043/H-0019` (Emre "B" kararı) + Emre'nin 14 Eylül dış olay önem cümlesi · ölçüm tabanı `PAKET-UI2-0913.md`, `PAKET-KAPSAM2-0914.md`
> Yazılan dosyalar: `js/app.js` · `js/suzgec.js` · `css/style.css` · `index.html` (tek kontrol satırı) · alet `denetim/ARAC-UI3-OLCUM-0914.js` · bu rapor.
> **Commit YOK.** `data/`, `arac/` dosyalarına dokunulmadı. İşe başlarken dört dosya `git status`ta temizdi.
> `node --check js/app.js js/suzgec.js`: temiz. Sürüm damgası basılmadı (koşu zinciri basar).
> "p0051 bagla" komutu tahtada gelmedi, `index.html`e `olaylar_p0051` satırı EKLENMEDİ.

## Özet

| iş | durum |
|---|---|
| İŞ 1 · aynı gün maddesi → yalnız o maddenin değişimi yanıp söner | 🟢 KOD + ölçüm (68 çok maddeli gün, 115 madde) + tarayıcıda gerçek tıklamayla sınandı (1521-01-01 üç madde + 4 gün) |
| İŞ 2 · dış olay önem süzgeci (Osmanlı listesi) | 🟢 KOD + dört eşikte liste sayımı (node ile tarayıcı birebir) + kırılma istisnası |

---

## 1 · İŞ 1 — Aynı gün olayları, "B"

### Kural (ölçerek sabitlendi) — `js/suzgec.js` `maddeDegisimleri`
```
aday     madde GÜNÜNDE (±0) sahibi değişen yerleşimler (gün−1 → gün, d > v > s — UI2 sahipAnahtari)
①yer_id  yerleşim adı birebir ya da parantez öncesi çekirdeği
②yer     `yer:` metninin parçalarından biri, adın çekirdeği ya da parantez içi adı ("Bahreyn (Evâl adaları)" ↔ "Manama (Bahreyn)")
③başlık  yerleşim çekirdek adı (≥4 harf) başlıkta TAM KELİME (UI2 _sgGeciyor)
④komşu   ①-③ ile bağlanan yerleşimle AYNI el değiştirme (önce→sonra) ve ≤150 km; aynı günün başka maddesine
         ①-③ ile bağlı yerleşim alınmaz; zincir yok
⑤konu    aynı yerleşimi iki madde ①-③ ile bağlıyorsa kültür/iktisat konulu madde (maddeGrubu) onu bırakır
atlanan  antlaşma maddesi (UI2 kutusu zaten çiziyor) · BASLANGIC günü 1281-01-01 (D180 pencere ucu: gün−1'de
         her yer sahipsiz, 2366 sahte "değişim")
metin    `d` alanı TARANMAZ — anlatı çevredeki yerleri anar; uydurma atıf atıfsızlıktan kötü
```
**Ölçülerek değişen iki karar:**
- **1281-01-01 dışarıda.** İlk koşuda o gün "2366 değişim" verdi (Ertuğrul maddesi 5/2366). Pencere ucu, kırılma değil.
- **⑤ konu önceliği ölçümden doğdu.** 1534-12-04'te "Fuzûlî'nin kasidesi" (k:kultur, yer_id Bağdat), Bağdat fethinin 10 yerleşimini ikinci kez alıyordu. Kural öncesi 150 km'de 10 çift atıf vardı, sonrası 1 (1534-06-01 Kars, iki fetih maddesi — meşru).

**Komşu yarıçapı (`--km`, çok maddeli günler, 1281 hariç 557 değişim):**
```
km     atfedilen   iki maddeye birden
0         161            2
60        181            3
150       223            1   ← seçilen (⑤ ile)
250       273           17
```
150 km: İstanbul fethi Silivri/Çatalca/Marmara Adası'nı, Nikarya fethi Fornoz'u alıyor; 250'de çift atıf patlıyor.

### Ölçüm — `node denetim/ARAC-UI3-OLCUM-0914.js --is1 [--hepsi] [--gun G] [--km N]`
```
bütün tam günlü maddeler, gününde değişim olan (antlaşma hariç)   663
   bağ bulunan 535 · "belirlenemedi" notu 128 (çok maddeli günde 53) · antlaşma (UI2) 63
   yol (yerleşim): yer_id 518 · yer 458 · komşu 1062 · başlık 34
çok maddeli gün 68 · değişimli 52 · madde 115 · bağ bulunan 59 · bulunamayan 56 · ~1 sn (node, hepsi)
```

| gün | madde | yanıp sönen | not |
|---|---|---|---|
| **1521-01-01** (10 değişim) | ① Nikarya | **2**: Nikarya [yer_id] + Fornoz [komşu] · Cenova → Osmanlı | ✓ |
| | ② Portekiz'in Bahreyn'i alışı | **1**: Manama [yer_id] · Cebrî → Portekiz | ✓ |
| | ③ Pîrî Reis Kitâb-ı Bahriye | **0** → "belirlenemedi … ① ② maddesine bağlı" | ✓ doğru (k:bilim) |
| | kalan 7 (Tula, Ryazan, Çaul, Samudra Pasai, Ba'lebek, Caparra, San Juan) | hiçbir maddeye bağlı değil | Değişmez 2 gereği o gün yalnız 3 çekirdek madde var; öteki kırılmalar kuyruk kronolojilerinde |
| **1534-12-04** (19) | Bağdat'ın fethi | 9 (Bağdat + 8 komşu, Safevî → Osmanlı) | ✓ |
| | Fuzûlî kasidesi | 0 → not, "① maddesine bağlı" | ✓ (⑤) |
| **1557-01-01** (15) | Habeş Eyaleti | 13 (yer alanı) | ✓ |
| | Seydi Ali Reis Mir'âtü'l-Memâlik | 0 → not | ✓ |
| **1577-01-01** (40) | Fizan sancağı | 12 (Kanem-Bornu → Osmanlı) | ✓ |
| | Rasathane · Drina Köprüsü · Azapkapı Camii | 0 → not ×3 | ✓ |
| **1417-01-01** (10) | Avlonya · Berat · Kanina | 4 (Berat/Kanina [başlık], Hımara [komşu]) | ✓ |
| | Bahreyn Cebrîler | 5 (Lahsa, Katîf [yer] …) | ✓ |

### Kod
- `js/suzgec.js:599-705` (DOM'suz, dışa aktarıldı): `MADDE_DEGISIM_AYAR` · `gunDegisimleri` · `_ydAdlar` · `_ydKm` · `_ydDogrudan` · `_ydIkincil` · `maddeDegisimleri`.
- `js/app.js:8035-8090` `maddeFarkiGoster(o, ozelEl)`. `obGoster` antlaşma kutusundan hemen sonra çağırır (`:7760`).
- **UI2 mekanizması YENİDEN KULLANILDI, yeni desen yok, tarama yok:** `antlasmaFarkiGoster`in çizim + düğme + yanıp sönme gövdesi `_farkKutusuCiz` (`:7960-8033`) ve `_farkOzeti` olarak dışarı alındı. İki kutu aynı `antlasma-fark` katmanını, aynı 7 hâlli `antlasmaFarkiKirp`i, aynı ◀ Öncesi · Sonrası ▶ · ↻ · ⌖ düğmelerini kullanıyor. Antlaşma davranışı birebir (taşınan satırlar yalnız `r.f.*` → parametre).
- Ortak `_farkIndeksiKur` (`:7861`): sınır indeksi + petek adı sözlüğü, bir kez.
- İki küçük UI2 düzeltmesi: `antlasmaFarkiTemizle` artık `ANT_FARK.fs`i de sıfırlıyor (tarayıcı sınamasında önceki maddenin özellikleri bayat kalıyordu, ekrana yansımıyordu). `_sahipAdi("s:__BOSLUK__")` ham kimlik yerine "kimsenin değil (boşluk beyanı)" basıyor (1417 Hımara'da görüldü).
- Bağ yoksa sessiz değil: `.ob-madde-fark-yok` kutusu, düğmesiz. O gün haritada değişim yoksa kutu hiç çıkmaz.
- `css/style.css:1648-1650`.
- "Bu günde N olay var" şeridi (`ayniGunGruplaKur` / `ayniGunSeridiGuncelle`) değişmedi. Tarayıcıda ①②③ pilleri çalışıyor, ② pili gerçek tıklamayla sınandı.

### Tarayıcı sınaması (yerel sunucu, gerçek app.js)
- Bölme gizliydi, stil yüklenmedi (D118). MOTOR-HIMAYE emsali: sayfada `requestAnimationFrame` → `setTimeout`, satır içi stil `harita.style._load` ile yüklendi → `haritaHazir: true`, `antlasma-fark-dolgu` var.
- **Test ortamı `prefers-reduced-motion: reduce` bildiriyor.** İlk tıklamada UI2'nin kendi kuralı sabit "sonrası" hâli verdi (3 boya çağrısı). Yanıp sönmeyi ölçmek için yalnız sayfada matchMedia ezildi ve ↻ tıklandı.
- **1521-01-01, gerçek tıklama (computer left_click):**
```
① Nikarya satırı   kutu: "bu maddeye bağlı 2 … Cenova Cumhuriyeti → Osmanlı 2 · o günün öteki 8 değişimi bu maddeye ait değil"
                   kaynak 2 özellik · queryRenderedFeatures(antlasma-fark-cizgi) = [Fornoz (Fourni), Nikarya (İkarya)]
   ↻ örneklemi (ms)  142 önce · 620 sonra · 1145 önce · 1671 sonra · 2193 önce · 2690 sonra · 3214 kapalı  ✓ 6 hâl + söndü
② pil (şerit)     Manama (Bahreyn) #d1601f → #34fcfc · "öteki 9 değişimi … yanıp sönmez"
③ Pîrî Reis satırı "1 Ocak 1521 günü haritada 10 yerleşim el değiştiriyor; hiçbiri bu maddeye bağlanamadı … belirlenemedi.
                   Değişimlerin bir kısmı aynı günün ① ② maddesine bağlı." · çizilen özellik 0
```
- Ekran görüntüsü (z7, Doğu Ege, ↻ sonrası 0,3 sn): yalnız Nikarya ile Fornoz petekleri dolgulu, çevredeki Osmanlı gövdesi dokunulmamış.
- 1534-12-04 · 1557-01-01 · 1577-01-01 · 1417-01-01 kutu metinleri (JS tıklaması) yukarıdaki tabloyla birebir.

### Açık kalemler (bilgi)
- 🟡 **128 "belirlenemedi" notu.** 53'ü çok maddeli günde (çoğu kültür/imar maddesi, doğru). 75'i tek maddeli günde: o gün harita değişiyor ama madde yer beyanıyla eşleşmiyor (ör. 1517-01-22 Ridaniye, 1537-01-01 "Kars'ın kesin katılışı" 0/26). Bunlar veri kalemi olabilir: yer_id eksik ya da kırılma o maddeye ait değil. Listesi: `node denetim/ARAC-UI3-OLCUM-0914.js --is1 --hepsi`.
- ⚠️ Komşu yarıçapı 150 km bir ölçüm seçimi, sınır iddiası değil. `SUZGEC.MADDE_DEGISIM_AYAR.komsuKm` tek sabit.
- ⚠️ ±0 gün kuralı. Değişmez 2'nin ±30 penceresindeki kırılmalar (madde günü ≠ kırılma günü) bu kutuda YOK. Onlar zaten tek maddeli gün kırpmasında görünüyor. İstenirse ikinci kip: pencere, UI2 antlaşma penceresi gibi.
- ⚠️ Yalnız Osmanlı kronolojisi paneli (`obGoster`). Devlet kronolojisi sekmesinde yok (UI2 ile aynı kapsam).

---

## 2 · İŞ 2 — Dış olay önem süzgeci

### Karar ve kural — `js/suzgec.js` `disOnemGizliMi` / `disOnemGizli`
```
kapsam yok / "ic" / "konu"   HİÇ gizlenmez (iç puansız 1165 bugünkü gibi görünür)
kapsam:"dis" + puanlı        onemGecer'in BÖLGE dalı (bolge yoksa onem) ≥ eşik ise görünür — ikinci kural yazılmadı
kapsam:"dis" + PUANSIZ (100) yalnız "hepsi"de görünür         ← c) puansiz bayrağı iki dala ayrıldı
eşik değerleri               "0" gösterme · "5" yalnız 5 · "4" 4 ve üstü · "hepsi"
İSTİSNA (d)                  gizli dış madde bir OSMANLI kırılmasını (donemler fi, ±30 gün) GÖRÜNÜR maddesiz
                             bırakıyorsa, en yakın günün gizli maddeleri görünür kalır · `.dis-istisna` (⚑) + title
```
**Varsayılan: "4 ve üstü".**
1. Emre'nin cümlesi doğrudan bu: *"4 üstü seçilirse 4 ve 5 puan olanlar kronolojide zikredilecektir"*.
2. PAKET-KAPSAM2 bugün 26 maddeye bilerek 4 verdi ("Osmanlı'yı ilgilendirir" ölçeği). "Yalnız 5" bunların hepsini ve Safevî kuruluşu dışında her şeyi gizler (5 puanlı dış madde 1).
3. "Hepsi" bugünkü davranış. Ancak 100 puansız dış madde süzgeci anlamsızlaştırır.
Tahtaya çatal olarak yazıldı (M-3896).

### Ölçüm — node (`ARAC-UI3-OLCUM --is2`) ve tarayıcı (gerçek `#dis-esik` change olayı) BİREBİR
```
evren 1371 (konu hariç) · ic 1204 · dis 167 · puansız dis 100 · puansız ic 1165
eşik      gizli   görünen   gizli puansız   istisna   gizlenen iç madde   görünür dış puansız
0          165     1206        100            2              0                  0
5          164     1207        100            2              0                  0
4 ★        138     1233        100            1              0                  0
hepsi        0     1371          0            0              0                100
```
Tarayıcıda aynı zamanda: sayaç `"… / 1371 başlık · 138 gizli"` · sayaç ipucu `"Dış olaylar (⚙ Ayarlar): 4 ve üstü · 138 dış madde gizli · 1 istisna görünür"` · ayar satırı `"— şu an 138 dış madde gizli (100'i puansız) · 1 istisna görünür"` · adres `?dis=0 / ?dis=5 / ?dis=hepsi`, 4'te parametre silinir · localStorage `disEsik` yazılıyor.

### d) Kırılma–madde eşleşmesi — ölçüldü
Harita kırılmasının altında görünen madde `suzulduMu` ile seçiliyor: olay olay oynatma (`:8630`), ⏮/⏭ (`:10418`), panel tazeleme (`obTazele`), başlık damgası. Yani **süzgeç yalnız listeyi değil kırılma eşleşmesini de etkiliyor** (konu süzgeciyle aynı yol). Bu yüzden istisna uygulandı.
```
Osmanlı kırılması (donemler fi) 528 · tam listede maddesiz 0
                    görünür maddesiz kırılma
eşik    istisnalı   istisnasız
0          0           2
5          0           2
4          0           1        ← istisna: 1891-01-01 Müleydâ Savaşı (onem 3) — Şırnak kırılması
hepsi      0           0
```
- Eşik 5/0'da ikinci istisna 1857-07-11 Büyük Kabiliye (onem 4).
- ⚠️ **Şırnak vakası.** PAKET-KAPSAM2 §4 bunu *"tesadüfi eşleşme — Müleydâ ile ilgisi yok, maddesiz kalması doğru görünürlüktür"* diye işaretledi. İstisna onu yine de görünür bırakıyor, çünkü kural içeriğe değil Değişmez 2 penceresine bakıyor. Madde ⚑ ve açıklamalı title taşıyor. Emre "Şırnak maddesiz görünsün" derse `DIS_ISTISNA_ACIK = false` tek bayrak. Asıl çare veri: Şırnak'ın 1891 geçişine kendi maddesi (KAPSAM2 borcu).
- **Yabancı kırılmalar istisnaya girmez** (Emre'nin kuralının sonucu). `ARAC-KPS2-KIRILMA` bugünkü veride yalnız gizli maddelerle kapanan kırılma: eşik 4 → 39 (15'i Osmanlı-hiç yerleşimli) · eşik 5 → 65 (31) · hepsi-gizli (99) → 69 (32). Bu alet puansız dış maddeyi görünür sayıyor; bizim eşik 4 = `--puansiz-gizli` → 128 kırılma (Osmanlı-hiç 15, d:/v: 1).

### Kod
- `js/suzgec.js:706-760`: `disOnemGizliMi` · `disOnemGizli` (istisna dahil).
- `js/app.js`:
  - `:5196-5233` durum: `DIS_ESIK_DEGERLER` · `DIS_ESIK_VARSAYILAN="4"` · `DIS_ISTISNA_ACIK` · `disEsikOku` (adres > localStorage try/catch > varsayılan) · `disSonuc` (eşik başına önbellek).
  - `:5250-5280` `suzgecUygula`: konu/toprak/başlık süzgeciyle **VE**, `.suzuldu` + `.dis-istisna`, sayaç ipucu. `olaylar` dizisi ve indeksler DEĞİŞMEDİ, sayfa yenilenmiyor.
  - `:5303-5305` `suzgecUrlYaz` `?dis=` · `:5338` `suzgecKur` eşiği okur.
  - `:9167-9193` `#dis-esik` dinleyicisi + `disEsikAdi` · `disEsikBilgiYaz`.
  - `:11085-11087` devlet paneli özet metni artık Osmanlı listesindeki "Dış olaylar" eşiğini anıyor (eski metin "orada yalnız konu süzgeci" diyordu).
- `index.html:535-547` ⚙ Ayarlar, `#dunya-ac`ın altında: `<select id="dis-esik">` gösterme · yalnız 5 · 4 ve üstü (selected) · hepsi + `#dis-esik-bilgi`.
- `css/style.css:1650` `.olay.dis-istisna .o-tarih::after` ⚑.
- Devlet seçili görünümler (`odakSuz` / `birlesikTopla`) DOKUNULMADI; kendi `#odak-bolge-esik`leri çalışıyor.

### Açık kalemler
- 🟡 PAKET-KAPSAM2 §1.3 ⑤ (`ONEM_VARSAYILAN.dunya=4` ↔ arayüz 0) bu pakette ele alınmadı. Osmanlı süzgeci `dunya` dalını kapatıyor (`dunya:0`).
- 🟡 Aynı gün şeridindeki kardeş piller gizli dış maddeyi de gösteriyor (konu süzgeciyle aynı eski davranış, şerit bozulmasın diye değiştirilmedi). Pile tıklanınca gizli madde açılıyor.

---

## Denetim
```
node --check js/app.js js/suzgec.js       temiz
konsol (tarayıcı, bütün sınama boyunca)   JS hatası 0 · 2 kaynak 404 (hangi dosya: ÖLÇÜLEMEDİ — sunucu logu ve Resource Timing boş döndü;
                                          ilk yüklemede, hiçbir sınamadan önce vardı; bu paket yeni dosya yüklemiyor) · uyarılar önceden var
                                          (SINIFLANMAMIŞ guven-* 6 katman · KRONOLOJİ EZİLDİ · VERI_SINIRI)
py arac/denetle.py                        SONUÇ: İHLAL VAR (exit 1) · 3818 yerleşim · 1381 madde
                                          Değişmez 2 ✗ 531 kırılma, 1 açık · Değişmez 7 ✗ 658 sorgusuz enklav (beklenen 650)
                                          2s ✓ 1329 / 101 AÇIK · 2i ✓ 65 / 3 · 1 ✓ 324 sahipsiz
```
🔴 **"denetle çıktısı değişmez" ölçütü bu pakette SINANAMADI — önce-tabanı almadım** (D150 ailesi). Bildiğim:
- `arac/denetle.py` `js/` ve `index.html` okumuyor (grep `index.html|js/` → 0 satır). Bu paketin dört dosyası denetimin girdisi değil.
- Koşu sırasında başka işçiler `data/`ya yazıyordu: `yerlesimler_sinir_dogu.js` 00:49:45 · `olaylar_ek20/ek22.js` 00:48:57 · commitsiz yeni `olaylar_p0051.js` / `p0052.js` · 12 commitsiz `data/` dosyası. İhlal büyük olasılıkla oradan, ama hangi kırılma olduğu çıktıda listelenmiyor, **ölçmedim.**
- ⚠️ Aynı sebeple İŞ 2 sayıları (138 · 164 · 165) koşu anındaki verinin fotoğrafıdır. `olaylar_ek20/ek22` KAPSAM2 §2.3'ün `onem` önerileri olabilir, sayılar kayabilir. `ARAC-UI3-OLCUM --is2` yeniden koşulur.
```
```

## Aletler
```
node denetim/ARAC-UI3-OLCUM-0914.js [--is1|--is2] [--hepsi] [--gun YYYY-MM-DD] [--km N]
     app.js'in çağırdığı AYNI SUZGEC fonksiyonları, index.html yükleme sırasıyla
```
