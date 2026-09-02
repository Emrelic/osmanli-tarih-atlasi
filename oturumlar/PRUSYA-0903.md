# PRUSYA-0903 — `prusya` künyesi ve 1795-1807 boşluğu

## ⓪ KİMLİK — HADDİN
```
SEN         : İŞÇİ oturum · künye araştırma (Oturum 3 cinsi)
DEĞİLSİN    : koordinatör DEĞİLSİN. İş dağıtmazsın.
ÜSTÜN       : 1.MURAT HÜDAVENDİGAR
ALTIN       : kimse
YASAKLARIN  : iş dağıtmak · başkasının dosyası · `data/` altına YAZMAK
              (bu tur REÇETE turudur) · `girdi.py`ye bağlamak
```

## ① NİÇİN VARSIN — ölçülmüş boşluk

`lehistan`(…1795-10-24) ile `polonya`(1918-11-11…) arasında **123 yıllık
dizin deliği** vardı. İki parçası 2 Eylül'de kapandı:
```
🟢 varsova-dukaligi   1807-07-22 → 1815-06-09   (OK109)
🟢 kongre-polonyasi   1815-06-09 → 1917-03-15   (OK128)
🔴 1795-10-24 → 1807-07-22   AÇIK — 11 yıl 9 ay
```

🔴 **VE OK109 ÖLÇTÜ:** `prusya` kimliği **hiç yok**.
```
renkler.py'de `prusya`        YOK
veride `d:"…prus…"` dönemi     0 eşleşme
```
⇒ Lehistan'ı bölüşen **üç devletten biri** atlasta temsil edilmiyor.
Rusya var, Avusturya var, **Prusya yok.**

⚠️ Bu bir `DEVRALDIM — DOĞRULANMADI` öncülüdür: ölçen OK109, ben
doğrulamadım. **İlk işin onu ölçmek.**

## ② İŞİN — sırayla

```
① ÖNCÜLÜ ÖLÇ    `prusya` gerçekten yok mu? `devletler.js` ve
                 `renkler.py` tara. Ve `d:"…prus…"` yerine TÜRKÇE
                 yazımı da dene (`prusya` · `Prusya` · `brandenburg`)
                 🔴 Bugün bu tuzak altı kez ısırdı.
② ŞU AN NE YAZIYOR?  1795-1807 arası Varşova · Lublin · Chełm · Zamość
                 hangi kimliği taşıyor? Ve Poznan · Gdansk · Torun ·
                 Elbing · Königsberg — `lehistan` dönemleri
                 1793-01-23'te bitiyor, KARŞILIĞINDA ne yazılı?
                 (OK109 bunu ÖLÇMEDİ, açıkça yazdı)
③ KÜNYE GEREKİYOR MU?  🔴 KARAR SENİN DEĞİL, ÖLÇÜM SENİN.
                 `almanya` künyesi ("Kutsal Roma / Almanya", #78d028)
                 bu dönemi ZATEN kapsıyor olabilir — ölç, varsayma.
                 Emsal ara: atlas Brandenburg-Prusya'yı başka yerde
                 nasıl yazmış?
④ GEREKİYORSA REÇETE
   id · ad · f · t · bolge · harita · kaynak · kronoloji
   🔴 f/t GÜNLERİ KAYNAKLA. Adaylar ve hangisi niçin:
      1701-01-18 Prusya Krallığı ilanı · 1618 Brandenburg-Prusya birliği
      1871-01-18 Alman İmparatorluğu (Prusya sona ermez ama künye biter mi?)
      ⇒ Atlasın modeli TASARRUFU boyar; hangi tarihi niçin seçtiğini YAZ.
⑤ RENK ÖNERİSİ  🔴 `renkler.py`ye YAZMA — motor parmak izinde ve
   KOŞU CANLI. Öneri ver: sahnedeki komşular kim, hangi ΔE bandı.
   ⚠️ Dış kenarları ELLE SAYMA — `renk_olc.engel_kumesi()`e SOR.
      Bugün koordinatör elle saydı ve `--dogrula` onu çürüttü:
      dört eşik-altı komşu (eflak 4,9 · bogdan 9,4 · macaristan 9,4 ·
      parma 9,9) listesinde YOKTU.
```

## KAYNAK
TDV Batı Avrupa'yı **%0** kapsıyor (ölçülmüş) — `prusya` slug'ı büyük
ihtimalle ölü. `§4`: o boşlukta **akademik kaynak MEŞRU**, şartı
`kaynak:` alanına AÇIKÇA yazmak.
```
🟢 KABUL   Cambridge History · üniversite yayını · hakemli makale ·
           alanın standart el kitabı
🔴 ASLA    forum · blog · içerik çiftliği · kaynaksız derleme · YZ metni
🟡 Vikipedi TEK DAYANAK DEĞİL
```
🔴 **Ve slug'ı ölü ilan etmeden önce:** `curl -s -o /dev/null -w "%{http_code}"`
(302 = ölü · 200 = var ama DOĞRU MADDE demek değil), ve **dar slug
tutmazsa KAPSAYICI maddeyi dene** — kapsayıcı genellikle YER ya da KİŞİ
maddesidir.

## ③ YAZMA YETKİSİ
```
🟢 SENİN   denetim/UYGULA-PRUSYA-0903.json   ← reçeten
           oturumlar/PRUSYA-0903.md          ← ilerleme notların
🔴 DEĞİL   data/ · arac/ · başka her şey
```
🔴 **KOŞU CANLI** (PID 16848, 3 Eylül 01:25). `arac/uret_petek.py` ·
`girdi.py` · `renkler.py` MOTOR PARMAK İZİ — biri değişirse koşu ÖLÜR.
Ve `data/` de DONMUŞTUR: yazmak koşuyu öldürmez ama **çıktıyı
yayınlanamaz hâle getirir** (dün 10,5 saatlik koşu bu yüzden yayınlanamadı).

## ④ SENİ BAĞLAYAN
```
CLAUDE.md §3.5   HAYALET DEVLET — `s:` yazarken devletin ÖMRÜNÜ kontrol et
CLAUDE.md §4     kaynak kuralı + altı arama ekseni
CLAUDE.md §8     BOYALAR'da olmayan kimlik BOYANMAZ ⇒ harita deliği
CLAUDE.md §11    ölçüm doğru / çıkarım yanlış · ölçmediğini `ölçmedim` yaz
```

## ⑤ HABERLEŞME
```bash
py arac/tahta.py yaz --kim "PRUSYA-0903" --kime "1.MURAT" --mesaj "..."
```
Tam anahtar **1.MURAT**. ⚠️ Tahta mesaj kaybedebiliyor — kritik bir şey
yazdıysan `tahta.json`dan geri okuyup kendi kaydını ara.
Yatay serbest: **OPUS HAZIR KITA 128** deliğin öteki iki parçasını yazdı,
ona danış.

## ⑥ BİTİŞ ÖLÇÜTÜ
```
① `prusya` yokluğu DOĞRULANDI ya da ÇÜRÜTÜLDÜ (sayıyla)
② 1795-1807'de dört kaydın ne taşıdığı ÖLÇÜLDÜ
③ Poznan · Gdansk · Torun · Elbing · Königsberg'in 1793 sonrası ÖLÇÜLDÜ
④ künye gerekiyorsa: f/t KAYNAKLI, ve hangi kaynak AÇIKÇA yazılı
⑤ renk önerisi `engel_kumesi()`den, elle sayımdan DEĞİL
```
**Teslim SAYIYLA.** Bulamadığını `bulunamadı`, ölçmediğini `ölçmedim` yaz.

## ⑦ DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım, yeni iş bekliyorum."
⏳ "BEKLİYORUM: <ne> · <kimden> · <ne zaman tekrar bakacağım>"
```
