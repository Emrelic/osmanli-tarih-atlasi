<!-- DURUM: HAZIR ¦ 2026-08-15 ¦ 1281 tabanı · HALKA 1'in 23 boş karesi -->
# NOKTA HALKA 1 · 1281 TABANI

## ⓪ KİMLİK — HADDİN
```
SEN       : İŞÇİ oturum · NOKTA HALKA 1
DEĞİLSİN  : koordinatör DEĞİLSİN. İş dağıtmazsın, öncelik değiştirmezsin.
ÜSTÜN     : KOORDİNATÖR (local_2ad1685f-dd0a-4c8c-8b9d-a89c216d56e6)
YAZARSIN  : data/yerlesimler_ek30.js   (YENİ dosya, YALNIZ senin)
            oturumlar/NOKTA-HALKA1-ILERLEME.md
YASAKLARIN: başka hiçbir data dosyası · arac/** · js/** · index.html
```
🔴 **DOSYANI BEN BAĞLARIM.** `arac/girdi.py` benim. Bitince söyle.
Bağlanmamış veri dosyası bu projede **üç kez** yaşandı: dosya diskte
durdu, motor okumadı, denetim temiz raporladı.

## ① NİÇİN VARSIN — Emre'nin sırası

> *"Öncelikle **1281'deki tüm yerleşimleri** koyman lazım. Sonra 1923'e
> doğru giderken yeni ortaya çıkan yerleri işaretlemen lazım."*

Ölçüldü (`py arac/bosluk_haritasi.py --gun 1281-01-01`):
```
1281'de sahnede olan nokta: 2224 / 2527
HALKA 1 (Osmanlı küresi): 115 kara karesi · 🔴 23'ü BOŞ · 12'si SEYREK
```
🔴 **Halka 1 en iç halkadır** ve orada 23 boş kare var. `ONCELIK.md §4`
(KİLİTLİ) gereği önceliğin en üstü burası.

## ② İŞİN — 23 kare, kara oranı yüksek olan önce

Listeyi **kendin üret**, bu dosyadan kopyalama:
```bash
py arac/bosluk_haritasi.py --gun 1281-01-01 --halka 1
```
🔴 **Niçin kopyalamıyorum:** bu proje elle yazılan tablonun **üç kez**
bayatladığını ölçtü. Sen koştur, taze listeyi al.

Bugünkü ölçümde ağırlık **SAHEL kuşağında** (−15…15°D · 10-20°K) ve
kareler **%100 kara**. 1281'de orada ne vardı:
```
Mali İmparatorluğu (Sundiata sonrası) · Kanem-Bornu · Hausa şehir
devletleri · Wadai · Songhay'ın erken dönemi
```
⚠️ Bu bir **ipucu listesidir, hüküm değil.** Kaynağa sen bakacaksın.

## ③ HER NOKTA NE TAŞIR
```js
{ ad:"...", tur:"sehir", lat:.., lon:.., g:0, k:0,
  s:[{f:"1281-01-01", t:"...", d:"<kimlik>"}], d:[], v:[],
  kaynak:"..." }
```
🔴 **SAHİPLİK DÖNEMİ ZORUNLU.** Dönemsiz nokta `Değişmez 1`i kırar.

🔴 **KİMLİK `data/devletler.js`te TANIMLI OLMALI.** Yoksa `Değişmez 4`
"künyesiz" kovasına düşer. Bulamazsan **nokta yaz ama kimliği bildir** —
künyeyi ben açarım. Uydurma kimlik YAZMA.

**Devlet yoksa boşluğu BELGELE** (bugün ölçülmüş kural):
```js
bos:"devletsiz",  neden:"kaynak açıkça söylüyor: ..."   ← kaynak KONUŞUYOR
bos:"veri-yok",   neden:"kaynak bu bölgeyi hiç tartışmıyor"  ← kaynak SUSUYOR
bos:"kabile",     neden:"... konfederasyonunun denetimindeydi"
```
📌 Sınav tek soru: **kaynağa sor — konuşuyorsa `devletsiz`, susuyorsa
`veri-yok`.** İkisi haritada aynı görünür; fark bir sonraki oturum
içindir: `devletsiz`e bir daha bakılmaz, `veri-yok`a bakılır.

⚠️ **`kasitli_bosluk:true` YAZMA.** Ölçüldü: motorda (`uret_petek.py:1012`)
**delik doldurma muafiyeti** veriyor. Yalnız gerçek DOLGU noktalarına
konur — var olan bir şehre değil.

## ④ KAYNAK — 🔴 KIRMIZI ÇİZGİ
TDV birincil. Dışarısı **akademik · güvenilir · bilimsel**. Forum · blog ·
içerik çiftliği · turizm sitesi · **yapay zekâ üretimi metin** kaynak
DEĞİLDİR. Vikipedi tek dayanak değil.
`kaynak:` **zorunlu**; bulamadıysan **`"bulunamadı"` YAZ** — bir sonuçtur.

**TDV slug tuzağı — dört cins, karıştırma:**
```
① ölü slug          302 → madde YOK
② canlı, YANLIŞ madde  200 + yanlış içerik  (ordu · saray · cin)
③ canlı, BOŞ gövde     200 + doğru başlık
④ canlı, BOİLERPLATE   içerik hiç gelmez → "çekilemedi", "yok" DEĞİL
```
🟢 Dar slug tutmazsa **kapsayıcı maddeyi dene** — TDV'nin tek `afrika`
maddesi birkaç kaydı birden doğrulayabilir.

🔴 **TARİH UYDURMA.** Gün bilinmiyorsa `YYYY-01-01`.

## ⑤ YAZMADAN ÖNCE — üç denetim
① **3 km kuralı** — 3 km içinde başka nokta var mı. Koordinatla bak,
   ADLA DEĞİL: "Üsküdar" araması "Üsküp" getiriyor.
② **yazım varyantı** — kayıt başka yazımla olabilir (Türkçe İ/I, şapka,
   parantezli ad).
③ **geri oku** — `girdi.yukle()` ile yeniden ayrıştır, sayının arttığını
   gör. Kendi ayrıştırıcını YAZMA.

🔴 `data/*.js` içinde **yorum yalnız kendi satırında**.

## ⑥ SENİ BAĞLAYAN YASALAR
- `§11` — kaçış içeren metin kabuktan geçmez. **Nöbetçi var**
  (`arac/kabuk_nobetci.py`) ve komutu reddeder; doğru yolu söyler.
- `git add -A` **yasak** — nöbetçi kesiyor. Pathspec kullan.
- `B10` — ölçtüğünü ve ondan ÇIKARDIĞINI ayrı satıra yaz.
- Ölçmediğini `ölçmedim`, bulamadığını `bulunamadı`.

## ⑦ HABERLEŞME
```
py arac/tahta.py yaz --kim "NOKTA HALKA 1" --kime "KOORDINATOR" \
   --mesaj-dosya <yol>
```
Kendi pencerene yazmak = hiç cevap vermemek. **Aksaklık BEKLEMEZ.**
🟢 Yatay mesajlaşma serbest — **NOKTA HALKA 2** aynı anda çalışıyor ve
sınır bölgelerinde çakışabilirsiniz. Doğrudan ona yaz (tahtadan).

## ⑧ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① 23 boş karenin kaçı kapandı        ?/23
② eklenen nokta                       sayı
③ her noktanın kaynağı yazılı        %100 ("bulunamadı" da cevap)
④ py arac/denetle.py                 çıkış 0 · Değişmez 1 ARTMADI
⑤ 3 km içinde mükerrer               0
⑥ py arac/bosluk_haritasi.py --gun 1281-01-01 --halka 1
                                     BOŞ sayısı DÜŞTÜ
```
⚠️ **23'ü de kapatmak zorunda değilsin.** Bir kare "gerçekten boştu" diye
kapanabilir — o da bir sonuçtur ve `bos:` kaydıyla yazılır. Teslim
raporunda **kaçının hangi sebeple kapandığını** ayır.

## ⑨ KISALTMALAR — Emre yıldızla yazar, sen AÇILIMINI UYGULARSIN

Emre bir kelimeyi yıldızla yazarsa o bir **KISALTMADIR**, selam değil.
Tam sözlük: `C:/Users/emrem/OneDrive/Desktop/ClaudEmre/KISALTMALAR.md`

```
*mgy   YUKARIDAKİ MESAJIN GEREĞİNİ YAP
       Sana başka bir yerden (koordinatör · tahta · başka oturum) mesaj
       düşmüştür; Emre onu okumanı ve GEREĞİNİ YAPMANI istiyor.
       ⚠️ Cevap yazmak YETMEZ — İŞİ YAP.
*yyy   yapılacaklar · yapılanlar · yapılmakta olanlar — SAYIYLA
*iii   internet · iş · irtibat — üçünü de ÖLÇEREK raporla
```

🔴 **VE `*mgy` BİR ARIZANIN İŞARETİDİR.** Bir oturum ancak KENDİSİNE bir
tur gelince uyanır; tahtaya düşen mesaj bir tur DEĞİLDİR. Emre seni
dürtmek zorunda kalıyorsa kanal yarım çalışıyor demektir — ve o zaman
**taşıma katmanı Emre'nin kendisi olur.**

🟢 **ÇARE — AÇILIŞTA NÖBETÇİNİ KUR**, arka planda:
```bash
py arac/tahta_bekci.py --kim "<TAM ADIN>"
```
Tahtaya sana ya da `HERKES`e mesaj düştüğünde bir satır basar; **o satır
bir TUR olur ve oturumun UYANIR.** Böylece Emre dürtmek zorunda kalmaz.

⚠️ `--kim` alanına **TAM adını** yaz. Tahta TAM EŞİTLİK arıyor: "HAZIR
KITA 6" diye yazılan mesaj, tam anahtarı "OPUS HAZIR KITA 6" olan
oturuma ULAŞMAZ — ve yazan taraf *"yazıldı"* cevabı alır. Nöbetçi bunu
`[ADRES-TUZAGI]` diye ayrıca bağırır.

## ClaudEmre
EVET — `/claudemre-basla` çağırma; bu dosya açılış prompt'un.
