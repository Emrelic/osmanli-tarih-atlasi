<!-- DURUM: HAZIR ¦ 2026-08-15 ¦ 1281 tabanı · HALKA 2'nin 24 boş karesi -->
# NOKTA HALKA 2 · 1281 TABANI

## ⓪ KİMLİK — HADDİN
```
SEN       : İŞÇİ oturum · NOKTA HALKA 2
DEĞİLSİN  : koordinatör DEĞİLSİN. İş dağıtmazsın, öncelik değiştirmezsin.
ÜSTÜN     : KOORDİNATÖR (local_2ad1685f-dd0a-4c8c-8b9d-a89c216d56e6)
YAZARSIN  : data/yerlesimler_ek31.js   (YENİ dosya, YALNIZ senin)
            oturumlar/NOKTA-HALKA2-ILERLEME.md
YASAKLARIN: başka hiçbir data dosyası · arac/** · js/** · index.html
```
🔴 **DOSYANI BEN BAĞLARIM.** `arac/girdi.py` benim. Bitince söyle.

⚠️ **NOKTA HALKA 1 AYNI ANDA ÇALIŞIYOR** ve `_ek30.js`e yazıyor. Dosyalar
ayrı, çakışma yok — **ama sınır bölgelerinde aynı noktayı iki kez
yazabilirsiniz.** Yatay mesajlaşma serbest: ona doğrudan yaz (tahtadan).

## ① NİÇİN VARSIN

Emre'nin sırası: *"öncelikle 1281'deki tüm yerleşimleri koyman lazım."*

Ölçüldü (`py arac/bosluk_haritasi.py --gun 1281-01-01`):
```
1281'de sahnede olan nokta: 2224 / 2527
HALKA 2 (birinci komşular): 106 kara karesi · 🔴 24'ü BOŞ · 27'si SEYREK
                            toplam 455 nokta
```
📌 **Ve seyreklik boşluktan büyük bir sorun olabilir:** 27 karede 1-2
nokta var, yani bir nokta yüzlerce km'yi tek başına temsil ediyor.
`CLAUDE.md §2`: *noktası olmayan bölge en yakın peteğe emilir.*

## ② İŞİN — 24 boş kare + 27 seyrek kare

Listeyi **kendin üret**:
```bash
py arac/bosluk_haritasi.py --gun 1281-01-01 --halka 2
```
🔴 Elle yazılan tablo bu projede üç kez bayatladı — kopyalama, koştur.

**HALKA 2 kimdir** (`ONCELIK.md §4`, KİLİTLİ): Avusturya · Macaristan ·
Lehistan · Rusya · İran · Fas · Venedik · Ceneviz · Umman · Gürcistan ·
Habeşistan · Sudan · Eritre · Somali.

1281'de o coğrafyada ne vardı — **ipucu, hüküm değil**:
```
İlhanlılar · Altın Orda · Bizans ardılları · Sırp Krallığı · Bulgar
Çarlığı · Macar Krallığı (Árpád sonu) · Kiev Rus prenslikleri ·
Gürcü Krallığı · Zagwe/Solomon Habeşistanı · Kilwa · Mogadişu
```

⚠️ **HALKA 2'nin künye tarafı BUGÜN ÇALIŞILIYOR:** `KÜNYE MACARİSTAN`
oturumu `kraliyet-macaristani` · `thokoly` künyelerini açıyor. Macaristan
bölgesinde nokta yazarken kimlik seçimini **ona sor** (yatay, tahtadan).

## ③ HER NOKTA NE TAŞIR
```js
{ ad:"...", tur:"sehir", lat:.., lon:.., g:0, k:0,
  s:[{f:"1281-01-01", t:"...", d:"<kimlik>"}], d:[], v:[],
  kaynak:"..." }
```
🔴 **SAHİPLİK DÖNEMİ ZORUNLU** — dönemsiz nokta `Değişmez 1`i kırar.
🔴 **KİMLİK `devletler.js`te TANIMLI OLMALI.** Yoksa `Değişmez 4`ün
"künyesiz" kovasına düşer (bugün 966 dönem orada). Bulamazsan noktayı yaz,
**kimliği BİLDİR** — künyeyi ben açarım. Uydurma kimlik YAZMA.

**Devlet yoksa boşluğu BELGELE:**
```js
bos:"devletsiz" · bos:"veri-yok" · bos:"kabile"   + neden:"..."
```
📌 Sınav: **kaynağa sor — konuşuyorsa `devletsiz`, susuyorsa `veri-yok`.**
⚠️ `kasitli_bosluk:true` YAZMA — motorda delik doldurma muafiyeti veriyor,
yalnız gerçek dolgu noktalarına konur.

## ④ KAYNAK — 🔴 KIRMIZI ÇİZGİ
TDV birincil. Dışarısı **akademik · güvenilir · bilimsel**. Forum · blog ·
içerik çiftliği · turizm sitesi · **YZ üretimi metin** kaynak DEĞİLDİR.
Vikipedi tek dayanak değil. `kaynak:` zorunlu; yoksa **`"bulunamadı"` YAZ.**

🔴 **VE HALKA 2'DE TDV KAPSAMI DEĞİŞKEN — ölçülmüş:**
```
Kafkasya · İran · Balkanlar · Mısır-Sudan   %100
Sibirya %75 · Güney Asya %57 · BATI AVRUPA %0
```
Batı Avrupa'da TDV **gerçekten yok** — orada standart akademik kaynak
meşrudur ve `kaynak:` alanına AÇIKÇA yazılır.

🔴 **TARİH UYDURMA.** Gün bilinmiyorsa `YYYY-01-01`. Ve yuvarlak tarih
yalnız yanlış değil, **çelişkiyi de saklar** (ölçülmüş vaka: yuvarlak yıl
21 aylık bir sahipsizliği iki aya indirip gözden kaçırıyordu).

## ⑤ YAZMADAN ÖNCE — üç denetim
① **3 km kuralı** · ② **yazım varyantı** · ③ **geri oku** (`girdi.yukle()`)
🔴 `data/*.js` içinde **yorum yalnız kendi satırında**.

## ⑥ SENİ BAĞLAYAN YASALAR
- `§11` — kaçış içeren metin kabuktan geçmez; **nöbetçi reddeder**.
- `git add -A` yasak. Pathspec kullan.
- `B10` — ölçtüğünü ve ÇIKARDIĞINI ayrı satıra yaz.
- Ölçmediğini `ölçmedim`, bulamadığını `bulunamadı`.

## ⑦ HABERLEŞME
```
py arac/tahta.py yaz --kim "NOKTA HALKA 2" --kime "KOORDINATOR" \
   --mesaj-dosya <yol>
```
**Aksaklık BEKLEMEZ.** Yatay mesajlaşma serbest (tahtadan): NOKTA HALKA 1
ve KÜNYE MACARİSTAN aynı anda çalışıyor.

## ⑧ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① 24 boş karenin kaçı kapandı        ?/24
② 27 seyrek karenin kaçı güçlendi    ?/27
③ eklenen nokta                       sayı
④ kaynağı yazılı                     %100
⑤ py arac/denetle.py                 çıkış 0
⑥ 3 km mükerrer                      0
⑦ künyesi olmayan kimlik             LİSTE hâlinde bildirildi
```
⚠️ Hepsini kapatmak zorunda değilsin. *"Gerçekten boştu"* da bir sonuçtur
ve `bos:` kaydıyla yazılır — **kaçının hangi sebeple kapandığını AYIR.**

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
*kii   KOORDİNATÖRDEN İŞ İSTE
       İşin bittiyse boş DURMA ve kendi iş SEÇME — İSTE:
         ① durumunu SAYIYLA bildir ("24 → 7", "şu dosya bende")
         ② neyi bulamadığını yaz ("bulunamadı" bir SONUÇtur)
         ③ iş iste — ve varsa ÖNERİNİ yaz, gerekçesiyle
       🔴 "İş istemek" ile "kendi iş seçmek" AYNI ŞEY DEĞİLDİR ve fark
       ölçüldü: bir oturum 25 saat boşta bekledi, kimse "bekle" demediği
       için kendi iş seçti, seçtiği iş MÜKERRER çıktı ve raporunu kendi
       çöpe attı.
       ⚠️ Koordinatörün cevabı ÜÇ ŞIKTAN biri olmak ZORUNDA — yeni iş ·
       emeklilik · BEKLE (ne kadar, neyi beklediğin yazılı). Cevap
       gelmezse tekrar sor: SESSİZLİK BİR ŞIK DEĞİLDİR.
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
