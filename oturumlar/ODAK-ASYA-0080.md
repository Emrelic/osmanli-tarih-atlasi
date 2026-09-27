# ODAK-ASYA-0080 — kronoloji maddelerinin HARİTA ODAĞI

**Paket ODAK-0080 · 27 Eylül 2026 · koordinatör YILDIRIM BAYEZIT**
**Konu: Asya — Çin · Japonya · Hindistan · Orta Asya**

Emre: *"tüm dünyadaki kronoloji maddelerinin harita odağını ayarlayalım,
konunun içeriğine göre odak noktalarını kronoloji maddesine ayarlayalım."*

## SENİN DOSYALARIN — tek sahibi sensin (`CLAUDE.md §7`)

| dosya | madde | ODAKSIZ | BEYANLI→yabancı | YÜK |
|---|---|---|---|---|
| `kronoloji_sinir_asya.js` | 95 | 0 | 94 | 94 |
| `kronoloji_cin.js` | 136 | 0 | 25 | 25 |
| `kronoloji_orta_asya.js` | 205 | 20 | 0 | 20 |
| `kronoloji_ozbek.js` | 73 | 18 | 0 | 18 |
| `kronoloji_hindistan.js` | 131 | 8 | 9 | 17 |
| `kronoloji_guney_asya.js` | 153 | 10 | 1 | 11 |
| `kronoloji_japonya.js` | 71 | 0 | 6 | 6 |
| `kronoloji_timurlu.js` | 24 | 3 | 2 | 5 |
| **TOPLAM** | **888** | **59** | **137** | **196** |

**Yükün: 196 madde** (59 odaksız + 137 yanlış beyanlı).

### 🔴 BU KOLA ÖZEL

🔴 Yükün 94'ü tek dosyada: `kronoloji_sinir_asya.js` 95 maddesinin 94'ü beyanlı — yani bu dosyanın TAMAMI bugün kamerayı Osmanlı'ya gönderiyor. 🔴 VE BU KOLDA `D215` TUZAĞI ÖLÇÜLDÜ: `japonya` ve `cin` kimliği atlasta YOKTUR (0 yerleşim). Gerçek künyeler `edo-bakufu` (32) · `meiji-japonya` (66) · `ming-hanedani` (98) · `qing-hanedani` (204). Kimlik yazmadan ÖNCE `data/devletler.js` TARANIR — tahmin edilen id aranmaz.

### İLK KOMUTUN

```bash
py arac/odak_olc.py --dosya kronoloji_sinir_asya.js --ayrinti
```
Sayılar yukarıdaki tabloyla uyuşmuyorsa **önce onu söyle** (`CLAUDE.md §1.5`
disiplini: bayat tabloyla kabul ölçütü kurulmaz).

## 🔴 ÖLÇÜLEN DURUM — bu senin öngörün değil, KOORDİNATÖRÜN ÖLÇÜMÜ

`py arac/odak_olc.py` (27 Eylül 2026, koordinatör yazdı) 7165 kronoloji
maddesini taradı:

```
KONUMLU   5969   noktası var, kamera oraya uçuyor              → iş yok
KUTULU      28   odak_kutu_kaynak / odak_yer / odak_kimlik      → iş yok
BEYANLI    683   kapsam_genis:true                              → 669'u KUSUR
ODAKSIZ    485   hiçbiri yok — kamera KIPIRDAMIYOR              → İŞ
⇒ TOPLAM İŞ 1154 madde (%16,1)
```

🔴 **BEYANLI'NIN TUZAĞI — bunu bilmeden çalışamazsın.** `js/app.js:11835`:

```js
var _odakB = _odakKG ? _odakKG.kutu : ((di >= 0 && donemler[di].b) ? donemler[di].b : null);
```

`kapsam_genis:true` + odak yok ⇒ kamera **`donemler[di].b`**ye gider ve o kutu
**O GÜNÜN OSMANLI SINIRIDIR** (ölçüldü: ilk dönem `[29.32,39.58,30.54,40.22]`
= Söğüt çevresi). Yani yabancı bir kronoloji maddesinde `kapsam_genis:true`
yazmak *"kamerayı Osmanlı'ya gönder"* demektir; 1300 tarihli bir maddede
kamera **Söğüt'ü** çerçeveler.

🔴 **Ve bu ODAKSIZLIKTAN KÖTÜDÜR.** Odaksız maddede kamera DURUR ve panel
*"📍 Bu olayın haritada nokta yeri işaretlenmemiş — harita yerinde kaldı"*
yazar; kullanıcı eksikliği OKUR. Beyanlı-yabancıda hiçbir sinyal yoktur:
yanlış yer KENDİNDEN EMİN biçimde gösterilir. (`dersler/D205` ailesi:
*eksikliği bir hükümmüş gibi çizmek.*)

---

## ODAK MEKANİZMASI — `app.js`in okuduğu ALTI alan, SIRASIYLA

Sıra kritiktir: üstteki alan varsa alttakiler HİÇ okunmaz.

| # | alan | ne yapar | ANLAMI |
|---|---|---|---|
| ① | `yer_kon: [lat, lon]` | `flyTo` nokta | **OLAY BURADA OLDU** |
| ② | `yer_id: "<yerleşim adı>"` | `flyTo` nokta | **OLAY BURADA OLDU** |
| ③ | `odak_kutu_kaynak: "<id>"` | `HUKUKI_SINIRLAR` kaydının `kapsama.odak_kutu`su | hukukî sınır kutusu |
| ④ | `odak_yer: ["<ad>", …]` | adların kutusu + 0,35° pay | **KAMERA BURAYA BAKACAK** |
| ⑤ | `odak_kimlik: ["<devlet id>", …]` | o GÜN o kimliklerin yerleşim kutusu | devlet(ler)in toprağı |
| ⑥ | `kapsam_genis: true` | **OSMANLI** kutusu | *"olay imparatorluk çapında"* BEYANI |

🔴 **`yer_id` ≠ `odak_yer` VE BU AYRIM KURALIN KENDİSİDİR** (`app.js:11697`).
`yer_id` *"olay BURADA oldu"* der ve **KARTA da öyle yazılır**; `odak_yer`
yalnız kameranın bakacağı yeri söyler. Ölçülmüş vaka: 1827 tımar tasfiyesi
Rumeli ve Anadolu'daki 53 sancakta oldu, İstanbul'da DEĞİL —
`yer_id:"İstanbul"` yazmak kameraya yarar ama **VERİYE YALAN** yazar.

⚠️ **`odak_yer` ve `yer_id` havuzda BİREBİR ad arar** — `sehirler` içinde tam
eşleşme ya da `" ("` öncesi. Bulanık eşleşme YOK (bu projede beş kez yanlış
çıktı). Havuzda olmayan bir ad SESSİZCE ELENİR gibi görünür ama konsola
sayılarak basılır.
⚠️ **`odak_kimlik` EN AZ 2 YERLEŞİM ister** ve kimlik `data/devletler.js`teki
GERÇEK `id:`tir. 🔴 Ölçüldü (`D215`): `japonya` · `cin` · `habsburg` · `osmanli`
kimlikleri atlasta **0 yerleşim** döndürür; gerçek künyeler `edo-bakufu`,
`ming-hanedani`, `qing-hanedani`, `avusturya`dır. **"Kimlik yok" demeden
`devletler.js` TARANIR — tahmin edilen id aranmaz.**

---

## SINIFLANDIRMA — ilk iş düzeltme değil SINIFLANDIRMA (`D205`)

Her madde için sırayla sor. **Sınıfı yazmadan alan yazma.**

```
A  Olayın TEK ve BELLİ bir yeri var  (muharebe, kuşatma, fetih, ölüm, imza)
   → havuzda ad VAR ise   yer_id:"<ad>"
   → havuzda ad YOK ise   yer_kon:[lat,lon]        ← muharebe meydanı tam bu
B  Olay birkaç BELLİ yerde, ya da iki taraf arasında
   → odak_yer:["<ad>","<ad>"]        havuzdaki adlar
   → odak_kimlik:["<id>","<id>"]     taraf devletler (≥2 yerleşim şart)
C  Olay gerçekten BİR DEVLETİN TAMAMINDA (ferman, reform, ilan)
   → odak_kimlik:["<o devletin id'si>"]
D  Olay gerçekten OSMANLI ÇAPINDA
   → kapsam_genis:true KALIR — ve YALNIZ bu durumda kalır
E  Yeri kaynaktan BELİRLENEMEDİ
   → HİÇBİR ŞEY YAZMA. `bulunamadı` olarak raporla.
     Kamera durur, panel söyler. 🔴 BU MEŞRU BİR SONUÇTUR, kusur değil.
     (`CLAUDE.md §4`: kaynak gizlenmez, bulunamadıysa `bulunamadı` yazılır.)
```

📌 **Beyanlı bir maddeyi A/B/C'ye çevirirken `kapsam_genis:true` KALDIRILIR** —
yoksa veride *"olay imparatorluk çapındaydı"* yalanı durur. Ama D sınıfıysa
KALIR ve gerekçesi raporlanır.

---

## 🔴 YASAKLAR — her biri ölçülmüş bir vakadan

```
🔴 `yer_id`ye "kameraya yarasın diye" yer YAZMA. yer_id KARTA yazılır =
   veriye yalan (app.js:11697, 1827 tımar vakası). Kamera tercihiyse odak_yer.
🔴 KOORDİNAT UYDURMA. `yer_kon` bir ölçümdür. Muharebe meydanının koordinatı
   kaynaktan ya da yerin bilinen konumundan gelir; yaklaşık ise AÇIKÇA söyle.
   (`D210` hassasiyet kaynağı aşamaz.)
🔴 `kapsam_genis:true`yu yabancı maddede GEREKÇESİZ BIRAKMA — kamerayı
   Osmanlı'ya gönderir. Bırakacaksan niçin meşru olduğunu YAZ.
🔴 ATLAS KENDİNE KAYNAK OLAMAZ (`D207`). Başka bir atlas maddesinin günü ya
   da koordinatı senin dayanağın değildir.
🔴 `data/` DOSYALARINA YAZMA. İzin katmanı engelliyor ve `§7` sahipliği
   koordinatörde. UYGULAYICI BETİK ver (aşağıda).
🔴 YENİ YERLEŞİM NOKTASI EKLEME. `data/yerlesimler*.js` senin değil. Havuzda
   yer yoksa `yer_kon` kullan ya da E sınıfı yaz. Nokta gerekiyorsa RAPORLA.
🔴 TARİH/BAŞLIK/KAYNAK ALANLARINA DOKUNMA. Senin işin YALNIZ odak alanları.
   Başka bir kusur görürsen düzeltme — tahtaya YAZ.
```

⚠️ **`§11` alet kuralları (kanca zorlar):** bash backtick YASAK · heredoc
YASAK · Türkçe `git commit -m` YASAK → `git commit -F <dosya>` · Türkçe
`py -c` YASAK → `Write` + `py <yol>` · `python` değil **`py`** ·
`sys.stdout.reconfigure(encoding="utf-8", errors="replace")` · `git add -A`
YASAK, pathspec commit'te de tekrarlanır.

---

## TESLİM — `denetim/<ADIN>-uygula.py`

Kendin uygulamıyorsun; betiği koordinatör koşturur. Betik ŞUNLARI yapar:

```
· varsayılan KURU KOŞU, yazmak için --uygula          (ISGAL-BATI kalıbı)
· her maddeyi (dosya, t, b) ile BULUR ve ESKİ değeri doğrular
  → bulamazsa SESSİZCE ATLAMAZ: sayar ve basar
  → eski değer beklediğinden farklıysa DOKUNMAZ ve basar
· her öneride SINIF (A/B/C/D/E) + GEREKÇE + KAYNAK basar
· --grup A,B,C   ile kısmî uygulama (bir sınıf tartışmalıysa ayrı inebilsin)
· sayaçlar: değişen · zaten böyle · kayıt yok · eski tutmuyor · şartı sağlamadı
```

📌 **Bu kalıp bugün iki kez işe yaradı** (DUNYA-0079 · NOKTA-ORTADOGU-0077):
betiğin kendi süzgeci, şartı sağlamayan önerileri KENDİ eledi ve bir `D207`
ihlalini koordinatör görmeden yakaladı.

🔴 **ÖNGÖRÜYÜ ÖLÇÜMDEN ÖNCE YAZ** (`§11`). Betiği teslim etmeden önce:
```bash
py arac/odak_olc.py --dosya <senin dosyan> --ayrinti
```
ile TABANI bas, ve *"uygulanınca ODAKSIZ N → M, beyanlı-yabancı P → R olacak"*
diye YAZ. Koordinatör uyguladıktan sonra aynı komutu koşar; tutmazsa sebebi
aranır.

Teslim mesajı `§7.1 ④` üçlüsüyle: ① ne ölçtüm (sayıyla) ② ne bulamadım
(`bulunamadı` bir sonuçtur — E sınıfı kaç madde) ③ ne istiyorum.
Ve mesajın SONUNA tek satır: **"bekçimi öldüreyim mi?"** (`§7.2 ⑧`).

---

## HABERLEŞME — `CLAUDE.md §7.1` + `§7.2`, aynen

```
🔴 TEK KANAL TAHTA:
   py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj "…"
   Koordinatörün ekranına send_message YAZILMAZ. Bir teslim TEK mesajdır.
   Çok satırlı mesaj için --mesaj-dosya <yol> (PowerShell --mesaj'ı keser).
🔴 BEKÇİ — Bash run_in_background (Monitor DEĞİL):
   py arac/tahta_bekci.py --kim "<ADIN>" --cik
   Çıkınca mesajı işle, aynı komutla SESSİZCE yeniden kur. "Bekliyorum" YAZILMAZ.
   🔴 Boş uyandıysan EKRANA HİÇBİR ŞEY YAZMA — o cümle bir tur maliyetidir.
🔴 HERKES'e mesaj YAZMA. Mesaj kimi ilgilendiriyorsa ONUN adına yazılır.
   ACİL/DURDURUCU değilse HERKES kimseyi uyandırmaz ama gereksizdir.
🔴 AKSAKLIK BEKLEMEZ: başka oturumun dosyası gerekiyor · kaynaklar çelişiyor ·
   şartname yanlış · sayı beklenenden çok farklı · iş çok uzayacak → HEMEN yaz.
🔴 Yatay mesaj serbest (--kime "<ÖTEKİ KOL>"); atama/öncelik/kaynak hükmü
   koordinatöre.
📌 Koordinatör tahtayı 30 dakikada bir toplu okur — cevabı o gecikmeyle bekle.
```

⚠️ **KOŞU 16 UYARISI:** koordinatör bugün bir TAM İNŞA koşusu başlatacak.
Koşu sürerken `data/` ve `arac/` DONAR. Senin işin `denetim/` altına betik
yazmaktır — koşu seni ENGELLEMEZ, ama betiğin UYGULANMASI koşunun bitmesini
bekleyebilir. Buna göre planla, koşuyu beklemek için DURMA.

---

## COMMIT

Kendi ürettiğini **adıyla** commit et — `denetim/<ADIN>*` ve
`oturumlar/<ADIN>.md`. Dizin pathspec'i ve `git add -A` YASAK:
```bash
git add -- denetim/<ADIN>-uygula.py denetim/<ADIN>.md
git commit -F <mesaj-dosyasi> -- denetim/<ADIN>-uygula.py denetim/<ADIN>.md
```
`data/` dosyalarını KOORDİNATÖR commitler. **Commit teslim değildir; teslim
mesajdır.**

