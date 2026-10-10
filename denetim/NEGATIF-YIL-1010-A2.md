# NEGATIF-YIL-1010-A2: `js/suzgec.js` tarih kıyası SAYISAL (A'nın eksiği)

Oturum: NEGATIF-YIL-1010-A2 (UMIT, yazıcı) · 10 Ekim 2026 · model **Opus**
Ağaç: `C:\atlas-nega2` @ `origin/main` `6cec6a9b`. Ayrı worktree, detached; iş bitince kaldırıldı.
Teslim anında `origin/main` = `a24a4838`. Aradaki commit'lerde `js/` · `index.html` · `arac/odak_cozum.js` farkı **0**.
🔴 Tuz dosyalarına (`uret_petek` · `renkler` · `girdi` · `motor_onbellek`) **dokunulmadı**. `uret_petek` koşturulmadı.
Commit, push ve stash yapılmadı. `C:\atlas`'a yazılmadı.

## Yıl 0 politikası: A'dan okundu
`js/gun.js` başlığına göre takvim proleptik Gregoryen ve **ASTRONOMİK** yıl kullanır: MÖ 1 = `0000`, MÖ 3000 = `-2999`, MS 1 = `0001`.
A2 bu sözleşmeye uyar ve kendi takvim kodu yazmaz. Her kıyas `GUN.gun`, her dizgiye dönüş `GUN.dizgi` üzerinden geçer.
⇒ `gunKaydir("0001-01-01", -1) = "0000-12-31"` olur. `-0004` artık yıldır: `gunKaydir("-0004-03-01", -1) = "-0004-02-29"`.

## NE DEĞİŞTİ (yalnız `js/suzgec.js`)
Eklenenler:
- `_sgGunMod()`: GUN'u **çağrı anında** arar. Sıra: global `GUN` → `window.GUN` → node'da `require("./gun.js")`. Hiçbiri yoksa ATAR: "js/gun.js yüklenmedi".
  Arama neden çağrı anında: `index.html` suzgec.js'i gun.js'ten ÖNCE yüklüyor (:1969 < :1983). İşlevler ise app.js koşarken çağrılıyor.
  `odak_cozum.js` aynı sırayı izler, `require` eden eski aletler de `./gun.js`'i bulur.
- `_sgG(s)`: dizgiyi gün sayısına çevirir. Önbelleği kapanış içinde tutar (200.000 kayıtta sıfırlanır). Geçersiz girdide ATAR ve önbelleğe yazmaz.
- `_sgIcinde(p, g)`: `_sgG(p.f) <= g < _sgG(p.t)` (f dahil, t hariç).

### DIZGI json'undaki `suzgec.js` satırlarının HEPSİ
| site (taban satırı) | DIZGI sınıfı | A2 |
|---|---|---|
| `sahipAnahtari` :422 (kıyas :424-426, d/v/s) | AÇIK-SESSIZ | **KAPANDI**, sayısal |
| `isgalAnahtari` :553 (:555) | AÇIK-SESSIZ | **KAPANDI** |
| `aktifVAdi` :614 (:615) | AÇIK-SESSIZ | **KAPANDI** |
| `gunKaydir` :431 | AÇIK-SESSIZ (çöp) | **KAPANDI**: `GUN.dizgi(GUN.gun(s)+fark)`. Eski `_sgPad` yalnız burada kullanılıyordu, silindi (grep: başka tüketici 0) |
| `kademeKumesi` :582 (`L.t >= basGun`) | AÇIK-SESSIZ | **KAPANDI** |
| `isyanAktif` :628 · `_isyanKimliksizMi` :637 | ZARARSIZ (bugün) | **yine de KAPANDI**. Zararsızlık veriye bağlıydı (isyan pencereleri pozitif); sorgu günü MÖ olunca iki taraf negatif olabilir. Çevirmek ucuzdu |
| **`sinirIndeksi` :452 `Object.keys(by).sort()`** | **json'da YOK** (taramanın kaçırdığı) | **KAPANDI**: sayısal sıra, eşit günde dizgiyle kırılır. MÖ'de dizgi sırası TERSTİR, sınav eski kolun `-0311 … -0549 … -2999 … 0001` sırasını gösteriyor |
| **`antlasmaFarki` :521-522** (`G[md] < basGun` ikili arama, `G[k] <= sonGun`) | **json'da YOK** | **KAPANDI**, sayısal |
| `disOnemGizli` · `onemSay` vb. (`M[md] < k`, `Math.abs(G[t]-kg)`) | json'da yok | **ZARARSIZ**: tamsayı gün indeksi, dizgi değil |
| `istisna.sort(a.i - b.i)` | json'da yok | **ZARARSIZ**: madde indeksi |
⇒ `suzgec.js`'te dizgi tarih kıyası **0** kaldı (grep: `.f/.t/gs/basGun/sonGun` ile `< <= > >=`, `.sort()`, `split("-")`, `Date`).

### `app.js` siteleri (bu işin DIŞINDA, dokunulmadı)
`sahip` :9521 · :9524 · :9532 · `isyanMaddeKutusu` :5436 · `_yaSahip` :10120 · `_yerlesimSerit` :9515 (`Object.keys(uc).sort()`) · dizin ilk/son :9759/:9760 · yer kartı dönem listesi :9806 · `derinAdimlari` :16587 · `tarihMetniAyristir` :15186 (yıl 0-99 için Date.UTC).
`app.js:13648` · `:9224` · `:10113` suzgec'i çağırır ve A2 ile **kendiliğinden** düzelir.

## SINAV: `denetim/ARAC-NEGATIF-YIL-A2-SINAV-1010.js` (diff içinde, ayrıca `C:\atlas-umit\denetim\`'de)
`node denetim/ARAC-NEGATIF-YIL-A2-SINAV-1010.js [--eski <ref>]`. Eski kol varsayılan olarak `6cec6a9b:js/suzgec.js`'ten okunur.
Eski kolda A2 damgası varsa çıkış 2 (ÖLÇÜLEMEDİ). Çıkış kodları: 0 temiz · 1 ihlal · 2 ölçülemedi.
Öngörü (koşudan önce yazıldı): yamalıda hepsi geçer; yamasızda A-B-C'nin yeni yönü ve E düşer; D iki kolda da 0 fark verir.

| | yamalı | yamasız (`suzgec.js` = taban) |
|---|---|---|
| sonuç | **60/60, çıkış 0** | **27/60, çıkış 1**. 33 soru düştü: A ve B'nin MÖ soruları, C'nin 7 MÖ/yıl-0 vektörü, E'nin 4 ATAR sorusu |
| A: MÖ dönem içi | `PERS -0400-06-15` → `s:ahameni` · `SUS -2500` → `osmanli` | eski kol: **`s:selevkos`** (yanlış sahip, yalnız `""` değil) · `""` |
| B: sınır | `-0329-09-30` ahameni · `-0329-10-01` makedonya · `0000-12-31`/`0001-01-01` geçişi | eski kolda düştü |
| B: karışık işaret | `[-0026, 0395)`: sorgu `0050`/`0000` olduğunda eski kol da doğru; sorgu `-0001` olduğunda eski kol `""` döner | **ölçülen kural doğrulandı**: tek taraf negatifse doğru, iki taraf negatifse ters |
| B: fark ailesi | `sinirIndeksi` sırası · `antlasmaFarki` (`-0329-10-01` bulunur) · `kademeKumesi` (MÖ işgali) · `gunDegisimleri` · `isyanAktif` | eski kol: ters sıra · `null` · `[]` · `[]` · 0 |
| C: gunKaydir | 15 vektör ✓ | `-0330-10-18 −1` → **`0000-06-09`** · `0000-01-01 −1` → **`00-1-12-31`** |
| C: pozitif alan | eski == yeni, **20.004 örnek, fark 0** (yıl 1-9999, fark ±400, yıl/ay hassasiyetli girdi dahil) | aynı |
| D: GERİLEME | gerçek veri: index.html'in app.js'ten önceki 67 betiği · **4.300 yerleşim · 33.562 dönem ucu · MÖ uç 0**. **278.354 (yerleşim, gün) çifti**: her yerleşimin kendi uçları ±1 gün ve 51 küresel gün. `sahipAnahtari` / `isgalAnahtari` / `aktifVAdi` **fark 0** · `sinirIndeksi` 2.225 gün **aynı sıra** · `gunDegisimleri` 2.225 gün **fark 0** · `antlasmaFarki` + `kademeKumesi` 194 pencere (271 işgalli yerleşim) **fark 0** · `isyanAktif` + `isyanSecim` 99 gün **fark 0** | aynı |
| E: ATAR | `1453-13-01`, bozuk dönem ucu, `gunKaydir("")` ve GUN yokken ATAR. Dönemsiz yerleşimde GUN'suz da `""` döner (gün çözülmez) | eski kol sessiz kalır (`gunKaydir("")` → `"00-1-12-31"`) |
Veri geçerliliği ayrıca ölçüldü: suzgec'in kıyasladığı **33.562 + 14 isyan + 37 `savas_basi`** ucunun hepsi `GUN.gun`'dan geçiyor. Atan 0, gün hassasiyeti dışında olan 0.
⇒ ATAR sözleşmesi bugünkü veride hiçbir şeyi kırmıyor.

## ODAK KAPISI (yamalı ve yamasız, aynı ağaç)
| | yamasız | yamalı |
|---|---|---|
| `py arac/odak_olc.py` | çıkış 0 · 236 satır | çıkış 0 · **birebir** (`cmp`) · ODAKSIZ 3735 · BEYANLI→yabancı 312 · çözülmeyen atıf 0 |
| `py denetim/ODAK-KAPI-SINAV.py` | **çıkış 1** · geçen 2 / BAŞARISIZ 3 | **çıkış 1 · birebir** (`cmp`) |
🔴 **ODAK-KAPI-SINAV tabanda zaten kırık, A2 ile ilgisi yok.** Yamasız `6cec6a9b`'de ⓿ TABAN "hiçbir şey değiştirilmedi" bölümü ihlal veriyor. İki satırı var:
- `SEKME SESSİZ GERİLEDİ: 1 YENİ (madde × künye) çifti`
- `SEKME OKUNMAYAN GERİLEDİ: 1 YENİ çift`

① bölümünde ayrıca `tavan TUTARSIZ: odaksiz = 373 ama odaksiz_kimlik 374` satırı var. Çıktıda çiftin adı basılmıyor (satır `:` ile bitiyor). Bulmak koordinatör/kapı sahibinin işi.

Ek olarak suzgec'i kullanan 9 eski alet iki kolda koşturuldu:
- 6'sı **birebir** çıktı: A1-TOPRAK, ANTLASMA-KADEME-SINAV, ARAYUZ-MADDE-0930, SINAV-ONEM-SUZGEC, ODAK-BALKAN-sina, ELE-GECIRME.
- 3'ünde (ISY-OLCUM, UI2-FARK, UI3-OLCUM) yalnız **ms süre satırları** farklı. Sayıların hepsi aynı.
- Çıkış kodları iki kolda aynı.

Tarayıcı: A'nın `ARAC-NEGATIF-YIL-A-SINAV-1010.js tarayici` sınavı yamalı ağaçta **10/10** verdi. Tabanda olmayan yeni istisna 0, yeni konsol hatası 0.
⚠️ Ancak o gezinti suzgec'in tarih yollarını büyük olasılıkla çalıştırmıyor: GUN.gun'a giren ayrık girdi sayısı A'nın ölçümüyle aynı, 3.345. Bu sınav "sayfa kırılmadı" kanıtıdır, "A2 tarayıcıda sınandı" kanıtı değildir.
Hız (node, `require`, 4.300 yerleşim × 200 gün): `sahipAnahtari` eski ~1,0 ms/gün, yeni ~1,1-1,3 ms/gün.
⚠️ `vm` bağlamında yeni kol ~9 ms/gün ölçüldü. Sebep vm'in global erişim maliyeti; önbellek bu yüzden kapanışa alındı. Tarayıcıda ölçülmedi.

## MÖ VERİLİ SINAMA: NOKTA-SUMER + KUNYE-SUMER-7-v2
- Kaynaklar `origin/makine/emrelic-nokta:denetim/NOKTA-SUMER-1010.diff` (`7100bd5f`) ve `origin/makine/emrelic-kunye-2:denetim/KUNYE-SUMER-7-1010-v2.diff` (`cd5828f8`). İkisi `C:\atlas-umit\denetim\`'de yoktu.
- Dokundukları dosyalar yalnız `data/yerlesimler_nokta_ortadogu_0917.js` ve `data/devletler.js`. **Tuz dosyası 0** ⇒ `--check` ✓, kendi worktree'mde uygulandı, sonra geri alındı.
- 🔴 **Bulgu: NOKTA-SUMER noktalarında sahiplik dönemi YOK.** Hepsi `s:[] d:[]`, yalnız `kur:`/`bit:` taşıyor. Aynı durum `-K2`, `-K2-B` ve `-B10`'da da var (eklenen `s:[{` satırı 0).
  ⇒ Gerçek veriyle `sahipAnahtari` önce de sonra da `""` döner (Girsu, Bad-tibira, Zabalam, Marad × `-0400-06-15`). A2'nin bu diff'lerle gözle görülür etkisi **yok**.
- O yüzden **SENTETİK** bir deneme yapıldı. Gerçek 11 Sümer noktasına (MÖ kur/bit taşıyanlar) KUNYE-v2'deki `ahameni` künyesinin penceresi s: dönemi olarak eklendi: `-0538-01-01 → -0330-10-22`. Ardına bir sentetik makedonya dönemi kondu.
  | nokta | gün | eski | yeni |
  |---|---|---|---|
  | Isin · Marad · Girsu | `-0400-06-15` | `""` | `s:ahameni` |
  | aynı | `-0539-06-01` (künyeden önce) | `""` | `""` ✓ |
  | aynı | `-0330-10-21` | `""` | `s:ahameni` |
  | aynı | `-0330-10-22` | `""` | `s:makedonya-sentetik` |
  Odak nöbetçisinin deseniyle (`odak_cozum.js:239`) `ahameni` kimliğindeki yerleşim sayısı `-0400-06-15`'te **eski 0 · yeni 11 / 11**.
- SUMER uygulanmış ağaçta `odak_olc.py` iki kolda da **birebir**, çıkış 0. Evren: yerleşim 4300→4312, künye 897→902, SEKME 10809→10825.
  Künyeye giren 16 MÖ madde iki kolda da ODAKSIZ, çünkü hiçbir nokta ahameni'ye ait değil.
  ⇒ s: dönemleri yazılınca bu maddeler A2'li ağaçta kutulanır, A2'siz ağaçta ODAKSIZ kalır.
- Yan gözlem (veri, benim alanım değil): KUNYE-v2'de `makedon.f = -0330-10-18`, `ahameni.t = -0330-10-22`. İki künye **4 gün örtüşüyor**.

## ① ÖLÇTÜM
- Sınav: yamalı **60/60** · yamasız **27/60** (MÖ kolları ve ATAR soruları düşüyor) · gerçek veride **278.354 çift + 2.225 sınır günü + 194 pencere + 99 isyan günü, fark 0**.
- Odak kapısı: yamalı = yamasız birebir (`odak_olc` çıkış 0 · `ODAK-KAPI-SINAV` çıkış 1, bu tabanda da öyle).
- DIZGI listesindeki 6 suzgec sitesinin hepsi kapandı. Taramanın kaçırdığı 2 site daha kapandı: `sinirIndeksi` sırası ve `antlasmaFarki` ikili araması.
## ② BULAMADIM / ÖLÇMEDİM
- ODAK-KAPI-SINAV taban kırığındaki (madde × künye) çiftinin adı çıktıda yok.
- Tarayıcıda suzgec tarih yollarının MÖ davranışı ölçülmedi, çünkü ufuk 1000-1945 ve veride MÖ s: dönemi yok. Node'da gerçek kaynakla ölçüldü.
- NOKTA-SUMER'de s: dönemi olmadığı için gerçek MÖ sahiplik verisiyle önce/sonra ölçümü yapılamadı. Yalnız sentetik ölçüldü.
## ③ İSTİYORUM / ÖNERİYORUM
1. A2 **KUNYE-SUMER yayınından ÖNCE** inmeli (koordinatör kararıyla uyumlu). Tuz dosyası içermiyor, motor partisini beklemesine gerek yok.
   İndiği commit'te `surum_damgala.py` koşmalı (`suzgec.js?v=`).
2. ODAK-KAPI-SINAV taban kırığı (`SEKME SESSİZ/OKUNMAYAN GERİLEDİ 1 çift`, `odaksiz 373 ≠ 374`) A2'den bağımsız. Kapının sahibine ayrı kalem olarak verilmeli.
3. NOKTA-SUMER'e s: dönemleri yazılacaksa A2 ön koşuldur. A2'siz yayında bu noktalar ve 16 MÖ madde haritada/odakta sahipsiz görünür.
4. `app.js` siteleri (yukarıdaki liste) ayrı bir kalem olmalı: A'nın ② maddesi ve DIZGI'nin app.js satırları.

YENİ DOSYALAR: `C:\atlas-umit\denetim\NEGATIF-YIL-1010-A2.diff` (değişen `js/suzgec.js` + yeni `denetim/ARAC-NEGATIF-YIL-A2-SINAV-1010.js`) · `C:\atlas-umit\denetim\NEGATIF-YIL-1010-A2.md` · `C:\atlas-umit\denetim\ARAC-NEGATIF-YIL-A2-SINAV-1010.js`
Taban: `6cec6a9b`. `git apply --check` (geçici index ile, çalışma ağacına dokunmadan):
- `6cec6a9b` üstünde ✓
- `a24a4838` (teslimdeki `origin/main`) üstünde ✓
- bekleyen `KRONO-GORUNURLUK-1008-SUZGEC.diff` ve `ARAYUZ-MADDE-0930-komsu-aile.diff` ile **iki sırada da** ✓
diff sha256 `4ab33816c568a0272c5737499c9f70d3eae049fcdc73774ba6294221dadf14ed`
