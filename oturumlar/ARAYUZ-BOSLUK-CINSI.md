<!-- DURUM: HAZIR ¦ 2026-08-15 ¦ boşluğun cinsini ekrana taşı -->
# ARAYÜZ — BOŞLUĞUN CİNSİ · `T-0113`in ilk somut adımı

## ⓪ KİMLİK — HADDİN
```
SEN       : İŞÇİ oturum · ARAYÜZ BOŞLUK CİNSİ
DEĞİLSİN  : koordinatör DEĞİLSİN. İş dağıtmazsın, veri değiştirmezsin.
ÜSTÜN     : KOORDİNATÖR (local_2ad1685f-dd0a-4c8c-8b9d-a89c216d56e6)
YAZARSIN  : js/app.js · css/style.css · oturumlar/ARAYUZ-BOSLUK-ILERLEME.md
YASAKLARIN: data/** · arac/** · index.html (satır BEN ekledim, hazır)
```

## ① NİÇİN VARSIN — ölçülmüş

Emre, 15 Ağustos:
> *"Câlû'nun çevresinde bir devletin ya da devletsiz aşiret yapılarının
> alanı var ise bunu **ayrı bir renk ve işaretleme tekniği** ile
> gösterelim. **Çöl ile aynı renkte durmasın.**"*

Veri bu ayrımı **zaten taşıyor** ve bugün ekrana çıkarıldı:

```
data/bos_alanlar.js   192 kayıt   (üreteç: arac/uret_bosluk.py)
   devletsiz  132   kaynak AÇIKÇA "devlet yoktu" diyor
   kabile      34   🔴 AŞİRET/KONFEDERASYON DENETİMİ — asıl mesele bu
   insansiz     9   yerleşim yoktu
   veri-yok     9   kaynak SUSUYOR — "boş" değil "BİLMİYORUZ"
   hata         8
```

`kabile` kayıtları adıyla ve gerekçesiyle yazılı:
`Hoggar` · `Tamanrasset` (Kel Ahaggar Tuareg, Amenokal liderliğinde) ·
`Tibesti` (Toubou konfederasyonları) · `Karakum` (Teke/Yomut Türkmen) ·
Yeni Gine yaylaları (Dani · Hagen · Sepik klanları) · `Yambio`/`Maridi`
(Azande) · `Şeşemene`/`Bedele` (Oromo krallıkları).

🔴 **Bugün hepsi ekranda AYNI BEYAZ.** Tuareg Amenokal'ının denetlediği
Hoggar ile insansız Rub'ul Hâlî ayırt edilemiyor.

## ② İŞİN

`index.html`de satır **hazır** (`data/bos_alanlar.js` yükleniyor).
İki küresel değişken var:
```js
window.BOS_ALANLAR   // [{ad, lat, lon, cins, yaricap_km, neden}]
window.BOS_CINSLER   // {cins: {ad, aciklama, gosterim}}
```

🔴 **CİNS SÖZLÜĞÜNÜ KENDİ KODUNA KOPYALAMA.** `BOS_CINSLER`i oku. Aynı
bilgi iki yerde durursa biri güncellenince öteki bayatlar — bu projede
ölçülmüş bir kusur.

```
gosterim:"benek"  → benek/doku bulutu · kenarı YOK · kabile
gosterim:"bos"    → çizim YOK (bugünkü davranış) · devletsiz·insansiz·hata
gosterim:"soru"   → soluk gri + soru işareti dokusu · veri-yok
```

**İŞ 1 · benek katmanı.** `kabile` kayıtları için yumuşak, kenarsız bir
benek/doku. MapLibre'de `circle` katmanı + düşük opaklık + `blur`, ya da
tekrarlayan bir doku.
**İŞ 2 · lejant satırı.** Kullanıcı beneğin ne demek olduğunu görebilmeli.
**İŞ 3 · tıklanınca `neden:` metni.** Gerekçe zaten kayıtta ve kaynaklı —
öğretim değeri asıl orada.
**İŞ 4 · `veri-yok` için ayrı gösterim.** *"Boş"* ile *"bilmiyoruz"* aynı
şey değil; `T-0113`ün özü bu.

## ③ 🔴 ÜÇ SINIR — tasarımı bunlar belirliyor

**① AŞİRET SAHASININ SINIRI YOKTUR.** Devlet sınırı çizgidir; aşiret
sahası mevsimlik, otlak-kuyu-güzergâh eksenli ve **geçirgendir.** Keskin
kenar çizersen **olmayan bir kesinlik uydurmuş olursun.** Benek bu yüzden
seçildi: kenarı olmayan, yoğunluğu değişebilen bir dil.

**② `yaricap_km` HEPSİNDE `null` — ve bu KASITLI.** Hoggar tek bir nokta;
Kel Ahaggar'ın sahası yüz binlerce km². Kaynaksız bir yarıçap
uydurulmadı.
⇒ **Yarıçapsız kayıt ALAN değil İŞARET olarak çizilir.** Sabit bir
yarıçap seçme; kaynaklı yarıçap geldikçe alan çizimine geçilecek.

**③ ZAMAN BOYUTU YOK.** `bos_alanlar.js` kayıtları zamansız. Kel Ahaggar
konfederasyonu ~1750'den itibaren teşkilatlı; 1281'de aynı yapı yoktu.
⇒ Katmanı **her tarihte aynı** çizmek bir anakronizmdir. Bugünlük kabul
edilebilir (bugünkü hâl de öyle), ama **ilerleme dosyana YAZ** ki bir
sonraki oturum bunu kusur diye yeniden keşfetmesin.

## ④ SENİ BAĞLAYAN YASALAR
- `§11` — kaçış içeren metin kabuktan geçmez. Bir **nöbetçi** var
  (`arac/kabuk_nobetci.py`) ve komutu reddeder; reddederse doğru yolu
  söylüyor: `Write` → `py <yol>`.
- `git add -A` yasak — nöbetçi kesiyor. Pathspec kullan.
- `B10` — ölçtüğünü ve ondan ÇIKARDIĞINI ayrı satıra yaz.
- Ölçmediğini `ölçmedim`, bulamadığını `bulunamadı`.

## ⑤ HABERLEŞME
```
py arac/tahta.py yaz --kim "ARAYUZ BOSLUK CINSI" --kime "KOORDINATOR" \
   --mesaj-dosya <yol>
```
Kendi pencerene yazmak = hiç cevap vermemek.

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① 34 `kabile` kaydı ekranda benekli görünüyor
② lejantta bir satır var
③ tıklanınca `neden:` okunuyor
④ `veri-yok` (9 kayıt) ayrı gösterimde
⑤ `devletsiz`/`insansiz` bugünkü gibi BOŞ kaldı (davranış DEĞİŞMEDİ)
⑥ ekran görüntüsü: Hoggar ile Rub'ul Hâlî AYIRT EDİLİYOR
```

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
