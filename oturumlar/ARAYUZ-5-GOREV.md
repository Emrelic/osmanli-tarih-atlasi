# ARAYÜZ 5 — Emre'nin dört görsel şikâyeti, hepsi kutuda bekliyor

> Açılış brifingi · 6 Ağustos 2026 · **model: Sonnet**
> ⚠️ `claudemre-basla` ÇALIŞTIRMA — o yalnız koordinatör oturumunda çalışır.

## AÇILIŞ — sırayla
```
1. bu dosyayı oku
2. CLAUDE.md baştan sona (özellikle §7 dosya sahipliği, §9 komutlar)
3. oturumlar/ARAYUZ-4-SARTNAME.md — uçuş kipi, senden önceki turun tamamı
4. oturumlar/DUYGU-VE-SEKME-SARTNAME.md — duygu katmanı ve sekmeler
```

## ① NİÇİN VARSIN — dördü de EMRE'NİN KENDİ SÖZÜ, hepsi `sirada`

`kutu/` paketlerinde **işlenmiş ama uygulanmamış** dört madde:

```
parti-0004 H-0011  "BAŞKENT OLAN ŞEHİRLERİN YANINDA YILDIZ ÇIKIYOR AMA
                    HEPSİNE YILDIZ KOYMUŞ — HANGİSİ BAŞKENT belli değil"
parti-0004 H-0013  "SİNJ KALESİNİN FETHİ MADDESİNDE YERİ HARİTADA
                    İŞARETLENMİYOR — HEM DEMİŞTİK"      ← "hem demiştik" = TEKRAR
parti-0004 H-0015  "PADİŞAHIN RESMİNİ ZATEN YUKARIDA GÖSTERİYORUZ, Pîrî Reis'in
                    dünya haritası maddesinde tekrar çıkıyor"
parti-0005 H-0003  "HARİTAYA YAY BUTONU — basınca mouse'la bir yay çizilsin"
```

🔴 **H-0013'teki *"hem demiştik"* en pahalı sinyal.** `kutu/SICIL.md`nin var
oluş sebebi tam bu: *"bunların bazılarını daha önce söylemiştim sanki."*
Bir madde ikinci kez geliyorsa **ilk seferinde çözülmemiş** demektir.
⇒ H-0013'ü **önce** al ve niçin çözülmediğini ölç, sonra çöz.

## ② İŞİN — sırayla

**1. H-0013 · Sinj işaretlenmiyor** — ve niçin tekrar geldiğini ölç
`Sin (Sinj)` veride VAR (ÇAPRAZ AKDENİZ ölçtü, 6 Ağustos). Yani nokta var
ama madde ↔ nokta bağı kurulmuyor.
📌 İpucu: `yer_id` çapası 1.141 maddenin **418**'inde var. Sinj maddesinde
var mı? Yoksa sebep bu ve çözüm bir satır.

**2. H-0011 · başkent yıldızı** — hangisinin başkent olduğu belirsiz
Ölç: yıldız hangi alandan geliyor, `data/devletler.js`in `baskent` alanı mı,
yoksa herkese mi konuyor. Sonra ayır.

**3. H-0015 · padişah portresi tekrarı**
Portre üstte padişah kartında zaten var; olay kartında ikinci kez çıkıyor.
⚠️ Silmeden önce ölç: hangi maddelerde çıkıyor, `gorsel` alanı mı yoksa
`kisiler` eşleşmesi mi tetikliyor.

**4. H-0003 · haritaya yay çizme butonu** — YENİ özellik, en sona
Emre'nin tarifi: butona basılır, mouse'la haritada bir yay çizilir.
⚠️ Bu bir **şartname gerektirir**: yay ne işe yarayacak (sefer güzergâhı mı,
ölçüm mü, işaretleme mi), kalıcı mı geçici mi, veriye yazılacak mı.
**Yazmadan önce bana sor** — kapsamı belirsiz bir özellik en pahalı iştir.

## ③ YAZMA YETKİSİ
```
🟢 SENİN      index.html · js/app.js · css/style.css
              oturumlar/ARAYUZ-5-ILERLEME.md
🔴 DEĞİL      data/ altındaki HİÇBİR ŞEY · arac/ altındaki hiçbir şey
              kök dizindeki *.md belgeleri
```
⚠️ `?v=rNN` damgasına **DOKUNMA** — `arac/surum_damgala.py` ile ben
yükseltiyorum, elle yazarsan çakışır.

## ④ SENİ BAĞLAYAN YASALAR
```
CLAUDE.md §7       dosya sahipliği · commit yalnız kendi oturumlar/ dosyan
YASALAR A          değersiz uyarı okunmaz olur — boş sekme/boş alan AÇMA
"boş alan yok,     bir şey gösterilemiyorsa NİÇİN gösterilemediği yazılır
 niçin boş var"    (ARAYUZ-4 §④ deseni: "bu olayın haritada yeri yok")
B3                 dünkü tablodan okunan sayı ölçüm değildir
```
📌 Ve dünkü dersin: bir ayar, **ayarladığı şeyin yanında durmuyorsa yok
sayılır.** Emre uçuş ayarlarını göremediği için "ayar yok" sanmıştı.

## ⑤ HABERLEŞME
```
· dört maddeyi biriktirme — biri bitince haber ver
· commit YALNIZ oturumlar/ARAYUZ-5-ILERLEME.md, pathspec'li
  index.html · js/app.js · css/style.css → BEN commit'lerim
· ⚠️ H-0003 (yay) için ÖNCE ŞARTNAME SOR, kod yazma
· bulamadığını `bulunamadı` diye yaz
```

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
H-0013  Sinj maddesi tıklanınca harita SİNJ'e gidiyor          (gözle + kodla)
H-0011  yıldız yalnız gerçek başkentlerde — kaç şehirde çıktığı SAYILDI
H-0015  Pîrî Reis maddesinde portre YOK, padişah kartında VAR
H-0003  şartname onaylandıysa yazıldı; onaylanmadıysa "beklemede"
node --check js/app.js temiz · div ve CSS denge sayıları eşit
```
