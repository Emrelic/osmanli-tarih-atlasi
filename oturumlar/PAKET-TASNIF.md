# PAKET TASNİFİ — ortak şartname

> Bu dosyayı **birkaç oturum paylaşır**; herkesin KAPSAMI kendi
> görevlendirme mesajında yazılı. Dosya sahipliği ayrı, kapsam ayrı.

```
MODEL     görevlendirme mesajında
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

## 🔴 GECE NÖBETİ — Emre uyuyor

Emre yattı ve şunu istedi: *"tüm bu bekleyen paketlerdeki sıkıntılı
hataları oku, tasnif et, dağıt, ne gerekiyor ise yap… sabahleyin yeni bir
şekilde uyanayım, haritaya bakayım."* Gece boyunca koordinasyon bende.
**İşler bitince koşu koşulacak ve yayın yapılacak** — yani geciken her
kalem, sabahki haritanın dışında kalır.

## ① ÖLÇÜLEN DURUM — 602 madde

```
KAPALI      212   çözülmüş
OKUNMAMIŞ   223   6 yeni paket (0031-0036) — hiç hüküm yazılmamış
YARIM       156   hüküm var ama AÇIK (`sirada` · `olculecek`)
EMRE'DE      11   `senin-kararin` — DOKUNMA, onun kararı
```

## ② İLK İŞ: BAYAT MI, GEÇERLİ Mİ — atlanamaz

Emre'nin şartı: *"onlar **bayatlamamış ise ve geçerliliğini yitirmemiş
ise**"*. Bu projenin yazılı dersi:

> **Bir şikâyet, şikâyet edilen şeyden daha hızlı bayatlar** — ve ekran
> görüntüsü kendi tarihini taşır.

⇒ Her madde için **ilk soru** *"bu kusur var mı"* DEĞİL,
***"bu şikâyet hâlâ geçerli mi"***. İki ucuz sınav:

```
① EKRAN GÖRÜNTÜSÜ TARİHİ  kronoloji panelindeki "N / TOPLAM başlık" sayısı
                          görüntünün hangi yayından olduğunu birebir söyler
                          (bugün 6064 madde · görüntüde 951 diyorsa ÇOK ESKİ)
② git log                 bu iş zaten yapılmış mı? Şikâyetin TARİHİ ile
                          düzeltmenin TARİHİ karşılaştırılır
```
🔴 Bedeli ölçülmüş: 10 Ağustos'ta **bir günde BEŞ kalem** *"zaten vardı"*
çıktı — biri commit'ten **22 dakika önce** yazılmış bir şikâyetti.
⚠️ Ve bayat bir şikâyeti düzeltmeye kalkmak, **düzelmiş bir şeyi bozmaktır.**

## ③ HÜKÜM SÖZLÜĞÜ — yedi kelime, başkası yok

```
cozuldu        düzeltildi · dayanağıyla
zaten-dogru    kusur yok, veri/harita doğru
tekrar         aynı şikâyet daha önce kapanmış  → hangi maddede, YAZ
gerek-yok      🔴 GEREKÇESİZ YAZILAMAZ
sirada         gerçek iş, ama bu turda yetişmiyor → NİÇİN, yaz
olculecek      ölçüm gerekiyor, henüz ölçülmedi  → NE ölçülecek, yaz
senin-kararin  🔴 GEREKÇESİZ YAZILAMAZ · Emre'nin zevkine/tercihine bağlı
```
⚠️ **`sirada` ve `olculecek` bir KAÇIŞ DEĞİL.** Bugün ölçüldü: 156 madde bu
iki kovada birikmiş, en eskisi `parti-0002`den. Bir maddeyi oraya koyarken
**niçin** olduğunu yaz — yoksa bir daha kimse dokunmaz.

## ④ GÖRSEL OKUMA SIRASI — Emre'nin talimatı

> *"Öncelikle fotoğrafların metinlerini okumalısın, mecbur kalırsan açıp
> içine bakmalısın. Fotoğraflarla beraber verilen **koordinat, madde
> numarası** ve zaten madde içeriği metinler var."*

```
① PARTI.md metnini oku
② maddede KOORDİNAT / madde no / yer adı varsa ONUNLA ölç — görsel açmadan
③ yetmezse görseli aç (H-NNNN-N.png, paketin kendi klasöründe)
```
Bir görsel metnine göre ~30 kat pahalı. Ama koordinat metnin parçasıdır.

🟢 **Emre tarayıcıda atlası AÇIK bıraktı** — `mcp__Claude_Browser__*` ile
canlı haritaya bakabilirsin. Bir görseli açmadan önce **haritanın
kendisine** bakmak çoğu zaman daha ucuz ve daha günceldir.

## ⑤ DOSYA SAHİPLİĞİ — çakışma olursa sessiz veri kaybı

```
🟢 SENİN      denetim/BULGU-<sana verilen ad>.md
🔴 ASLA       kutu/giden/*/CEVAP.json   ← hükümleri KOORDİNATÖR yazar
              data/*.js · arac/*.py · js/* · kök *.md
```
📌 Sen **bulguyu** yazarsın, hükmü ben işlerim. İki oturum aynı
`CEVAP.json`a yazarsa biri ötekini sessizce ezer.

## ⑥ TESLİM — sayıyla

```
① kaç madde okundu · kaç görsel açıldı
② her madde için ÖNERİLEN HÜKÜM + tek cümle gerekçe
③ BAYAT çıkanlar ayrı liste — hangi commit/tarih çürüttü
④ gerçek kusur çıkanlar ayrı liste — ve DÜZELTME ÖNERİSİ
⑤ ölçmediklerin — açıkça
```

## ⑦ HABERLEŞME

```bash
py arac/tahta_bekci.py --kim "<SENİN ADIN>" --ara 60      ← ÖNCE BUNU KUR
py arac/tahta.py yaz --kim "<SENİN ADIN>" --kime "KOORDINATOR" --mesaj-dosya <yol>
```
⚠️ Mesaj metnini `Write` ile dosyaya yaz, bash ona **hiç dokunmasın**.
⚠️ Bekçiyi kurduktan sonra **çıktı dalında sına**: 25 Ağustos'ta bir bekçi
`UnicodeEncodeError` ile (cp1254 konsol, emoji) **sessizce** öldü.

Kalem kalem bildir, biriktirme. **Ölçmediğini `ölçmedim` diye yaz.**
