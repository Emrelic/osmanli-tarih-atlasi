# `denetle.py` — BÜTÜN `continue` DALLARI · `DEGISMEZ3-0907`

> Kabul ölçütü: *"72'nin tamamı okundu mu, ve kaçı hangi kovada."*
> **Tamamı okundu.** Hepsini düzeltmek ölçüt değildi ve düzeltilmedi.

## ⓪ ÖNCE SAYI DÜZELDİ: 72 → **70**
```
grep -c "continue"        72   ← kelimeyi YORUMDA ve METİNDE de sayıyor
ast.walk → ast.Continue   70   ← gerçek ifade
```
📌 Sayıyı **ben devretmiştim** (*"72 continue dalı"*), ve kendi damgam
onu *"desen taraması bir örneklemdir"* diye işaretliyordu. `ast` kullanınca
iki fazlalık düştü — `§11`in *"veri zaten bir dilde yazılıysa o dilin
yorumlayıcısını çağır"* kuralının bu turdaki uygulaması.

## ① KOVA DAĞILIMI — 70 dal
```
🟢 MEŞRU                        60
🟡 SESSİZ, bugün ETKİSİ 0        8
🔴 KUSUR (denetimi kör ediyor)   2
```

---

## 🔴 KUSUR — 2 dal (ikisi de zaten yamalandı)
```
:1491  degismez3    m = ix.get(y["m"]);  if not m: continue
:2380  degismez3z   aynı desen, merkez `kd_gun`dan geliyor
```
**Etkisi ölçüldü: 4 kayıt** ölçüme hiç girmiyor ve sayısı basılmıyor —
`Prizren m:"Üsküb"` · `Kovel`·`Rivne`·`Volodymyr m:"Lutsk"`, ikisi de
atlasta **var** (`Üsküp` · `Lutsk (Łuck)`), ad varyantı yüzünden bulunamıyor.
⇒ Yaması: `denetim/YAMA-DEGISMEZ3-DENETLE-0907.md` (Y1 · Y3), **kabul edildi**.

---

## 🟡 SESSİZ ama BUGÜN ETKİSİ 0 — 8 dal
Koordinatörün şartı: *"bir `continue` sessiz olabilir ve ZARARSIZ olabilir."*
Sekizinin **etkisi tek tek ölçüldü** ve hiçbiri bugün ateşlemiyor:

| dal | koşul | bugünkü etki |
|---|---|---|
| `:924` `olaylari_yukle` | `window.(OLAYLAR\w*)` eşleşmezse **DOSYA** atlanır | **0/35** dosya eleniyor |
| `:1358` `kapsam_disi` | `except: continue` — geçersiz tarih (30 Şubat vb.) | tarih aritmetiği, zararsız |
| `:1931` `degismez5` | `not donemler` | 151 kayıt — ama `Değişmez 1` **zaten** yakalıyor (çift kapı) |
| `:2833` `savas_senkronu` | `not r.get("t")` | **0/171** `SAVASLAR` kaydı |
| `:2837` `savas_senkronu` | `except: continue` — tarih ayrıştırılamazsa | **ölçülmedi** |
| `:3125`·`:3144`·`:3153` `donem_sagligi` | `not f or not t` → dönem **hiç** denetlenmez | **0** eksik dönem |

🔴 **`:924` bugün zararsız ama YARINKİ kusur:** yeni bir `data/olaylar*.js`
yanlış değişken adıyla yazılırsa **sessizce yüklenmez** ve `Değişmez 2` o
maddeleri hiç görmez ⇒ **sahte AÇIK kırılma** üretir. Ölçüm önerisi: dosya
sayısı ile yüklenen değişken sayısı **eşit mi** diye sorulsun, eşit değilse
adıyla bildirilsin.
📌 Ve `data/kronoloji*.js` (42 dosya) **hiçbiri** `OLAYLAR` değişkeni
taşımıyor — yani ikisi gerçekten ayrı kova (`CLAUDE.md §5`), bu dal onları
yanlışlıkla elemiyor.

🔴 **`:3125` ailesi de yarınki kusur:** `f`/`t` eksik bir dönem **zaten bir
kusurdur**, ve `donem_sagligi` (sıfır uzunluk · ters · çakışma arayan
denetim) onu **hiç sınamıyor**. Bugün 0; bir gün 1 olduğunda **sessizce**
denetimden kaçacak. Ölçüm önerisi: eksik dönem **ayrı kovada sayılsın**.

---

## 🟢 MEŞRU — 60 dal
```
15  AYRIŞTIRICI KARAKTER DÖNGÜSÜ — bir KAYDI değil bir KARAKTERİ atlıyor
    `_yorumsuz` 5 · `oku_pencere` 6 · `_anahtar_tirnakla` 4
    (JS yorum/dizge ayrıştırma; `continue` döngü mantığının kendisi)

~30 EVREN FİLTRESİ — "bu kayıt bu denetimin konusu değil", TANIM GEREĞİ
    degismez1 `kur > g` (henüz kurulmamış) · `bit <= g` (yok olmuş)
    degismez2 ufuk dışı tarih · degismez3/3z `not y.get("m")` (m: yoksa
    merkez çelişkisi olamaz) · `a == b` (çelişki yok) · {OSMANLI,tabi}
    muafiyeti · degismez7 ufuk dışı · onek_olcutu/mukerrer BILINEN_AYRI …

~15 KOVALI — atlıyor AMA raporluyor  ⇒ SESSİZ DEĞİL
    :1833 degismez4  `kim not in K` → `kunyesiz` kovası     ← EMSAL
    :1841 :1848 degismez4 → `ihlal` listesi
    :2301-2318 degismez7 → `muaf` sayaçları (5 ayrı kova)
    :3097 konum_denetimi → `pencere_disi` kovası
    :898 :904 :913 ikiz_ayikla · :1366 :1370 kapsam_disi
```
📌 **`degismez4:1833` emsali kritik:** aynı desen (*aranan şey bulunamadı*)
ama sonuç **sessiz değil** — `kunyesiz` kovasına konup raporlanıyor. Y1/Y3
yamamın kabul gerekçesi buydu: **yenilik değil, aynı dosyadaki emsale
hizalama.**

---

## ⚠️ YAN BULGU — `continue` dalı DEĞİL, ama aynı aile
`savas_senkronu` yalnız **`SAVASLAR`** dizisini ölçüyor
(`:3745` `oku_pencere(..., "SAVASLAR")`). Aynı dosyadaki
**`ANTLASMALAR` (41) · `SEFERLER` (61) · `SERILER` (16)** hiç denetlenmiyor.
Bu bir sessiz atlama değil bir **kapsam** meselesi — *"denetim var ≠ o
soruyu soruyor"* ailesinden. Benim kalemim değil, **bildiriyorum**.
⚠️ Ve `SERILER`in 16 kaydının 16'sı `t` taşımıyor — ama seriler tarih
taşımaz (tanım gereği), yani `:2833`ün konusu değiller.

---

## ÖLÇMEDİKLERİM — açıkça
- `:2837` (`except: continue`) — kaç savaş kaydının tarihi
  **ayrıştırılamıyor** ölçmedim. `SAVASLAR`ın 171'i `t` taşıyor ama
  `gun_no(tam(...))` hepsinde başarılı mı **bakmadım**.
- 60 🟢 dalın **her birini** ayrı ayrı ölçmedim: 15'i karakter döngüsü
  (yapısal olarak kayıt atlamaz), kalanını **koşul metninden** sınıfladım.
  Yani 🟢 kovası **okumaya** dayanıyor, ölçüme değil — ve bunu
  `kovali_gorunuyor` ipucusuyla çapraz kontrol ettim, hüküm yerine geçmez.
- `:1358`in geçersiz tarih üretip üretmediğini ölçmedim.
