# YERLESIM-BIRLESTIR-0930 — şartname (🔴 KOŞU SENİ BEKLİYOR)

> 🔴 OKU: `CLAUDE.md` → bu dosya. Model Opus.
> **BU PAKET ZAMANA KARŞI:** ~5 saatlik petek koşusu senin çıktını bekliyor.
> Teslim edemezsen koşu senin maddelerin OLMADAN başlar ve 344 öneri
> BİR SONRAKİ koşuya, yani günler sonrasına kalır.

## Durum

29 Eylül'de 16 kronoloji paketi, haritada nokta olmadığı için yanlış boyanan
yerleri tarayıp **344 yerleşim önerisi** yazdı:
`denetim/*-0929-YERLESIM-ONERI.md` (16 dosya).

Bunlar **haritayı değiştirecek TEK yol**. Kronoloji maddesi haritayı
oynatmaz; harita `data/yerlesimler.js` + petek koşusundan gelir
(`CLAUDE.md §2`). 344 öneri diskte duruyor ve hiçbiri uygulanmadı.

## İşin: 344 ham öneriyi TEK DOĞRULANMIŞ LİSTEYE indirgemek

🔴 **`data/yerlesimler.js`e DOKUNMA** — o Oturum 0'ın dosyası ve koşu
sürerken donuk. Sen uygulanmaya HAZIR bir liste üretiyorsun, koordinatör
uyguluyor.

### Çıktın: `denetim/YERLESIM-BIRLESTIR-0930.json`
```json
{"kabul":[{"ad":"...","lat":0.0,"lon":0.0,"kaynak":"...","nereden":"KRONO-KAFKAS-0929",
           "s":[{"f":"YYYY-MM-DD","t":"YYYY-MM-DD","d":"<künye id>"}]}],
 "red":[{"ad":"...","niye":"..."}]}
```
Ayrıca insan okunur özet: `denetim/YERLESIM-BIRLESTIR-0930.md`

## 🔴 Beş süzgeç — sırayla, hepsi ZORUNLU

**① MÜKERRER** — yeni noktadan önce **ad (normalleştirilmiş) + 3 km** tara.
Türkçe küçültme tuzağı: `"İ".lower()` iki kod noktası verir, `casefold()`
de çözmez → `denetim/ARAC-NORMAL-0903.py` normalleştiricisini KULLAN.
Ayrı adlar (`Diyarbekir`↔`Diyarbakır`) eşanlam sözlüğü işidir.
⚠️ Ölçülmüş vaka: "Eski Zagra yerleşimi YOK" hükmü YANLIŞ çıktı — ad
`"Eski Zagra (Stara Zagora)"` biçiminde PARANTEZLİYDİ ve literal dizgi
araması kördü.

**② HAYALET DEVLET** — `s:[{d:"..."}]` içindeki künye id'si
`data/devletler.js`te VAR MI ve o TARİHTE YAŞIYOR MU (`f`/`t`)? Üç haneli
yıl karşılaştırmasında `pad()` şart. Yoksa öneri RED, sebebi yazılır.

**③ BOYA** — künye `arac/renkler.py` `BOYALAR`ında tanımlı mı? Değilse
bölge BOYANMAZ, nokta boşa gider. RED değil ama `"boya_yok":true` işaretle.

**④ KARA MASKESİ** — nokta denizde mi? `veri-kaynak/motor_kara.geojson`
motorun çizdiği karadır (GİRDİ DEĞİL ÇIKTI). Denize düşen nokta RED.

**⑤ KAYNAK** — koordinat nereden? `CLAUDE.md §4`: **atlas kendi kendinin
kaynağı olamaz.** "Komşu yerleşimden çıkardım" DAYANAK DEĞİLDİR.
🔴 **TDV KOORDİNAT VERMEZ.** TDV'nin dayanak olduğu şey hangi yerin nereye
bağlı olduğudur, noktanın YERİ değil. Enlem/boylam ayrı kaynak ister;
bulunamıyorsa öneri `"koordinat_kaynaksiz":true` ile AYRI kovaya girer —
ATILMAZ ama koordinatör onları ayrı değerlendirir.

## Sıra ve süre
```
① 16 dosyayı oku, önerileri tek listeye topla          (~20 dk)
② beş süzgeci koştur, her RED'in sebebini yaz          (~60 dk)
③ JSON + özet yaz, tahtaya teslim                      (~20 dk)
```
📌 **Hızlı ol ama eksiltme:** emin olamadığın öneriyi ATMA, `"suphe"`
kovasına koy. Atılan öneri bir daha bulunmaz; şüpheli öneri koordinatörde
30 saniyede karara bağlanır.

## Teslim
TEK tahta mesajı: kaç öneri geldi · kaç kabul · kaç red (sebep dağılımıyla)
· kaç şüpheli · kaç koordinat kaynaksız. Sonuna **"bekçiyi öldürdüm, duruyorum"**.
🔴 **Bittiğinde HEMEN yaz** — koordinatör koşuyu senin mesajınla başlatacak.
