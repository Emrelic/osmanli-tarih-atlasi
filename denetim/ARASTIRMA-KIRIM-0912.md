# ARAŞTIRMA — KIRIM HANLIĞI BOZKIRI STATÜSÜ (H-0003 · H-0009)

```
OTURUM   KITA 18  ·  local_51c63067-51c9-4ea3-aa3e-ec9e8fc4c566
GÖREV    M-3592 (1.MURAT) → İŞ⑦ / ARAŞTIRMA-1 · parti-emrelic-0043
PAKET    denetim/TRIYAJ-PAKET-0043-0912.md (KITA 13) — bu araştırmanın önculü
🔴 BU BİR ARAŞTIRMA RAPORUDUR, HÜKÜM DEĞİL. data/ ve arac/'a DOKUNULMADI.
   Yapılandırılmış veri: denetim/VERI-KIRIM-0912.json
```

## ⓪ ÖZET — TEK CÜMLE

Kırım Hanlığı'nın **çekirdeği** (Bahçesaray ve yarımada) ile **Kefe sancağı**
(Kefe/Kerç/Azak/Taman/Sudak…) veride zaten doğru ayırt edilmiş; asıl eksik
**kuzey bozkırının** (Nogay ulusları) statüsüydü ve TDV bunu açıkça
**"gevşek tâbiiyet"** diye tarif ediyor — ne hanlığın kendi toprağı, ne
bağımsız bir devlet, ne de bir "boşluk". Atlasın üç kovalı şeması
(doğrudan/tâbi/yabancı-devlet) bu **ikinci kademe tâbiliği** ifade edemiyor;
mevcut veri onu `s:{d:"kirim"}` ile yaklaşık olarak çözmüş — yanlış değil,
ama nüanssız. Ayrıca TDV taraması **Anapa'da veriye işlenmemiş bir 1791-92
Rus işgali** ortaya çıkardı (ayrı bulgu, aşağıda).

---

## ① EMRE'NİN SORUSU VE ALTI ALT SORU

> *"Kırım hanlığı bozkırı ne demek — bağlı bölge mi, vassal mi, boşluk mu,
> ayrı devlet mi?"* — ve Taman · Kerç · Anapa'yı adıyla anıyor.

KITA 13'ün triyajı (`denetim/TRIYAJ-PAKET-0043-0912.md §⑥`) bunu ikiye
ayırmıştı: **noktalar var** (Bahçesaray, Kefe, Azak, Taman, Kerç, Anapa —
hepsi atlasta, §2 noktasızlık vakası DEĞİL), **eksik olan STATÜ** —
bozkırın `bos:` kademesi ve `v:` tâbiiyet cinsi.

## ② MEVCUT VERİ — ÖLÇÜLDÜ, ÇOĞU ZATEN DOĞRU

```
Bahçesaray   v: Kırım Hanlığı'na tâbi (kid:"kirim"), 1475-1771 · Kırım yeniden 1774-1783
Kefe         d: DOĞRUDAN Osmanlı, 1475-1783 (ceneviz'den sonra)
Kerç         d: DOĞRUDAN Osmanlı, 1475-1774          ← Kefe sancağının kazası
Taman        d: DOĞRUDAN Osmanlı, 1482-1774          ← Kefe sancağının kazası
Azak         d: DOĞRUDAN Osmanlı (kısımlı), …-1739    ← Kefe sancağının kazası
Anapa        s:{kirim} 1441-1781 → d: DOĞRUDAN Osmanlı 1781-1829
```
`data/yerlesimler_kirim.js` zaten hanlığın beş kazası dışındaki bütün iç
şehirlerini (Gözleve, Or Kapı, Akmescid, Karasubazar, Eski Kırım…) `v:`
(tâbi, `m:"Bahçesaray"`) olarak doğru ayırmış. **Bu iş zaten yapılmış.**

Asıl eksik: `data/yerlesimler_ek_bozkir.js` (10 Eylül 2026, KITA/oturum
öncesinden, HENÜZ İKİ GÜN ÖNCE canlı olmuş) — Yedisan bozkırı, Kuban Nogay
bozkırı, Stavropol-Kuma bozkırı için üç `tur:"bolge"` dolgu kaydı ekleyip
üçünü de `s:{d:"kirim"}` (1441-1783, sonra rusya) ile işaretlemiş. Bu
dosyanın **kendi yorumu** zaten şunu itiraf ediyor:
> *"Bir tutarsızlık NOTU: Kırım çekirdeği depoda `v:` (tâbi) ile, bozkır
> bölükleri `s:{d:"kirim"}` ile yazılmış — aynı siyasî yapı iki ayrı
> biçimde."*

Bu araştırma tam bu itirafı **TDV ile sınadı.**

## ③ TDV BULGUSU — "GEVŞEK TÂBİİYET"

**TDV `kirim`** (islamansiklopedisi.org.tr/kirim, 200, gövde okundu):
> *"Kırım hanları için başlangıçtan itibaren Kıpçak bozkırlarındaki
> Nogaylar'ı kontrol altına almak hayatî bir önem taşıyordu."*
> *"Nogaylar'ın hana tâbiiyeti **gevşek** olup bunlar hanlık iddiasında
> bulunanlarla yahut Ruslar ve Kazaklar'la birleşerek Kırım için çok
> tehlikeli olmuşlardır."*

Yani Nogay ulusları (Yedisan, Camboyluk, Bucak, Kuban Nogayları) hanın
**kendi toprağı değildi** — çoğu zaman hanın rakiplerine ya da düşmanlarına
(Ruslar, Kazaklar) kayabilen, **gevşek bağlı** kabile konfederasyonlarıydı.
Bu, repo içinde daha önce okunmuş iki alıntıyla da örtüşüyor:

**TDV `giray`** (önceden okunmuş, `yerlesimler_ek_bozkir.js` içinde alıntılı):
> *"'Serasker sultan' unvanıyla Giray sultanlara Osmanlılar tarafından
> Kuban, Bucak ve Yedisan'ın idaresi de bırakılmıştı."*

**TDV `nogaylar`** (önceden okunmuş):
> *"Yedisan, Camboyluk, Bucak ve Kuban Nogayları Kırım Hanlığı
> denetiminde"* (18. yy başı)

⇒ Üçü birlikte: Nogaylar **kendi mirzaları** tarafından yönetiliyordu; bu
mirzalar Osmanlı'nın "Serasker" unvanıyla yetkilendirdiği **Giray
sultanlara** (hanın kendisine değil, hanedan üyelerine) bağlıydı; ve bu
bağ TDV'nin kendi tabiriyle **"gevşek"**ti.

### 🔴 VE İKİNCİ, BEKLENMEDİK BULGU — OSMANLI-KIRIM TÂBİLİĞİ DE "VESİKASIZ"

Aynı TDV `kirim` maddesi, Osmanlı-Kırım ilişkisinin kendisi için de
şaşırtıcı bir cümle taşıyor:
> *"Umumiyetle iddia edildiği şekilde bir **tâbiiyet vesikası mevcut
> olmamakla** beraber"* — ve ilişkinin niteliği: *"han padişahın dostuna
> dost, düşmanına düşman olmayı ve onun **hâmiliğini** kabul etti."*

⚠️ Bu, CLAUDE.md §1'in "Osmanlı'nın en uzun süreli ve en yakın vasalı"
cümlesiyle **çelişmiyor** (o cümle doğru, ilişki gerçekti) ama TDV'nin
kendi diliyle ilişkiyi resmî bir vassallık **belgesinden** çok bir
**himaye/ittifak** olarak tarif ettiğini gösteriyor. Bu bir hüküm değil,
kaynağın kendi nüansı — kayda geçiyor çünkü modelleme tartışmasını
doğrudan etkiliyor (aşağı bkz §⑤).

## ④ TAMAN · KERÇ · ANAPA — TEK TEK

**Taman ve Kerç**: TDV `kefe` maddesi (önceden okunmuş, `ek_bozkir.js`
içinde alıntılı) Kefe sancağının beş kazasını sayıyor: *"Mangub · Suğdak ·
Kerç · Azak · Taman"*. Yani ikisi de **hanlığın değil, doğrudan Osmanlı
Kefe sancağının** parçasıydı — veri (`d:` 1475/1482-1774) **zaten doğru.**

**Anapa** — TDV `anapa` (bugün okundu, 200):
> *"Osmanlılar, 1781'de Anapa burnuna kale inşasına karar verdiler"*
> (Ferah Ali Paşa yönetiminde, malzeme Soğucak'tan gönderildi)
> *"Kırım Hanlığı Osmanlı himayesi altına girdikten sonra, Kuzey Kafkasya
> kesimi Kırım hanlarının **nüfuz alanı** oldu."*

⇒ 1441-1781 arası Anapa'da **fiziksel bir Osmanlı/Kırım kalesi yoktu** —
bölge Kırım'ın "nüfuz alanı"ydı (bozkırla aynı gevşek kademe). 1781'de
Osmanlı doğrudan bir kale kurdu. Veri (`s:{kirim}` 1441-1781 → `d:`
1781-1829) **bu yönü doğru yakalamış.**

### 🔴 AMA YENİ BİR BOŞLUK BULUNDU: 1791-92 RUS İŞGALİ VERİDE YOK

TDV `anapa` devam ediyor:
> *"Savaş süresince Ruslar tarafından üç defa kuşatılan Anapa üçüncü
> kuşatma sonunda **26 Temmuz 1791**'de işgal edildi."*
> *"[1792] Yaş Antlaşması ile ... Kafkasya'da eski sınırlar kabul
> edildiğinden Osmanlı Devleti'ne **geri verildi.**"*
> *"Osman Paşa **24 Haziran 1828**'de Ruslar'a teslim oldu."*
> *"**1829** Edirne Antlaşması ile de Anapa ve Kafkasya Osmanlı
> hâkimiyetinden çıktı."*

`data/yerlesimler.js:532` Anapa'nın `d:` dizisi şu an **kesintisiz**
1781-01-01 → 1829-09-14. Gerçekte ~5,5 aylık bir Rus işgali (1791-07-26 →
Yaş Antlaşması'nın atlastaki günü 1792-01-09) araya giriyor. Ayrıca
1828-06-24 (fiilî teslim) ile 1829-09-14 (Edirne, hukukî devir) arasında
~15 aylık bir fiilî/hukukî fark var — **aynı desen Kefe'nin `isg:` alanında
zaten var** (1771 fiilî işgal, 1774/1783 hukukî devir), Anapa'da bu ayrım
şu an yok. Bu bir **veri yazımı değil, ölçülmüş bir bulgudur** — IS-7
araştırma statüsünde veri yazma yetkim yok; koordinatöre teslim ediyorum.

**Kabartay/Çerkes** — `devletler.js:7229-7233`'teki mevcut `kabartay`
kaydı zaten TDV kaynaklı ve ayrıntılı (kuruluş tarihi yok/uydurulmadı,
1739 Belgrad'da tarafsız ilan, 1774 Küçük Kaynarca md.21 ile Rusya'ya
bırakılış). **Bu araştırmanın ekleyecek yeni bir şeyi yok.**

## ⑤ VERİ MODELİ — ÜÇ SEÇENEK, KARAR DEĞİL

Emre'nin dört seçeneği (bağlı bölge · vassal · boşluk · ayrı devlet) **tek
bir kutuya sığmıyor** çünkü coğrafyanın alt-kümeleri farklı kademelerde:

```
Kırım çekirdeği (Bahçesaray)     → VASSAL, v: kid:"kirim"        [doğru, mevcut]
Kefe sancağı (Kefe/Kerç/Taman…)  → DOĞRUDAN OSMANLI, d:          [doğru, mevcut]
Kuzey bozkırı (Nogay ulusları)   → TÂBİNİN TÂBİSİ — ne v: ne s:  [MODEL BOŞLUĞU]
Anapa/Kuban 1441-1781            → aynı gevşek kademe             [MODEL BOŞLUĞU]
Kabartay/Çerkes                  → bağımsız, gevşek etki altında  [doğru, mevcut]
```

"Tâbinin tâbisi" (Nogay → Giray/Kırım → Osmanlı) atlasın üç kovalı
şemasında (`d:`/`v:`/`s:`) **ifade edilemiyor** — bu D089'un tarif ettiği
sınıf: var olan bir ilişkiyi ifade edebilen bir ilişkiye çevirmek bir
yaklaşıklamadır, iddiası aynı değildir.

**A) Statükoyu koru** — `s:{d:"kirim"}` kalsın (bugün zaten çiziliyor).
   Kayıp: "gevşek tâbi" nüansı; bozkır Kırım'ın kendi rengiyle boyanıyor.

**B) İkinci kademe tâbilik şeması** — `v:` zincirlensin (bir kaydın
   `kid`si tâbi olduğu devletin KENDİSİ de başka birine tâbiyse bunu miras
   alsın). Gerçek çözüm ama bir **şema/motor** değişikliği — araştırma
   oturumunun yetkisi dışında.

**C) `bos:"kabile"` yaz** — teknik olarak MÜMKÜN, emsali var (Tibesti,
   Hoggar, Karakum aynı `bos:"kabile"` + `tur:"bolge"` kalıbını kullanıyor)
   AMA **iki sebepten ÇALIŞMAZ**:
   1. `js/app.js` bu alanı hiç okumuyor (§⑥, arayüz borcu) — harita
      GÖRÜNMEZ kalır.
   2. Anlamı yanlış: `bos:"kabile"`nin mevcut kullanımı "hiçbir devlet hiç
      ulaşmadı" demek (Somali iç çölü kaydının kendi `neden:`i: *"merkezi
      devlet hiç kurulmadı"*). Nogay bozkırı bu değildi — gerçek, sürekli
      bir siyasi bağ (gevşek de olsa) vardı. `bos:"kabile"` yazmak D020'nin
      sınavını YANLIŞ yanıtlar: kaynak SUSMUYOR, "gevşek tâbi" diyor.

**KITA 18 önerisi: A + `neden:` alanına TDV alıntısı eklenmesi.** En ucuz,
şema değiştirmeyen, ve mevcut doğruluğu koruyan seçenek. B gerçek çözüm
ama koordinatör kararı ister.

## ⑥ ARAYÜZ BORCU — ÖLÇÜLDÜ, SAYIYLA

M-3592'nin uyardığı *"`bos:` alanı 361 yerde DOLU ama `js/app.js` onu HİÇ
OKUMUYOR"* iddiası **doğrulandı**, ama bir düzeltmeyle:

- **Canlı dosyalarda (arac/girdi.py'nin okuduğu 78 dosya) tam sayı: 348**,
  361 değil (fark muhtemelen ölü/orphan dosyaların da sayılmış olması —
  §5/D005 canlılık dersi). Değerler: `devletsiz` 157 · `kabile` 154 ·
  `veri-yok` 53 · `insansiz` 10 · `hata` 7.
- `js/app.js` içinde `.bos` property erişimi **SIFIR** (grep doğrulandı).
- 🔴 **AMA "boş" kelimesi İKİ AYRI ŞEYİ anlatıyor (D124 sınıfı):**
  1. Yerleşim kaydının gömülü `bos:` alanı — yazılı, **hiç render
     edilmiyor.**
  2. `data/bos_alanlar.js` (`window.BOS_ALANLAR` + `window.BOS_CINSLER`,
     232 kayıt) — **ayrı, elle tutulan bir dosya**, ve `js/app.js`'in
     gerçekten okuyup çizdiği (benek/soru/halka glifleri) budur. Tibesti/
     Hoggar/Karakum gibi kayıtlar HER İKİ dosyada da **ayrı ayrı elle**
     girilmiş — otomatik senkron yok (app.js'in kendi yorumu bunu zaten
     itiraf ediyor: *"CİNS SÖZLÜĞÜ KOPYALANMADI"*).
- **Kırım bozkırına özel sonuç:** `yerlesimler_ek_bozkir.js`'in üç kaydı
  (Yedisan/Kuban Nogay/Stavropol-Kuma) `bos:` alanını **hiç kullanmıyor**
  — yalnız `s:` kullanıyorlar, yani zaten **petek üzerinden çiziliyorlar.**
  Bu arayüz borcu bu üç kaydı **doğrudan etkilemiyor.** Ama eğer bir gün
  `bos:"kabile"` yazılırsa (seçenek C), hem embedded `bos:` okunmadığı HEM
  DE bu kayıtlar zaten birer petek-sahibi nokta olduğu (bos_alanlar.js'in
  beklediği "petek dışı glif" değil) için **harita hiçbir şey
  göstermeyecektir** — tam M-3592'nin uyardığı senaryo.

## ⑦ ÖNGÖRÜ KARNESİ (D022)

Yerel veri taraması bittikten, TDV doğrulamasından ÖNCE üç tahmin
yazıldı (tam metin: `denetim/VERI-KIRIM-0912.json:ongoru_karnesi`):
```
① Nogay tâbiliği "gevşek" çıkacak          → TUTTU
② Anapa kalesi 1781 Osmanlı (Kırım değil)  → TUTTU
③ Kırım-Osmanlı bağı da "vesikasız" olacak → TUTTU (beklenenden güçlü)
```
Üçü de tuttu — ama en değerli bulgu (1791-92 Anapa boşluğu) **hiçbir
öngörüde yoktu**, TDV metnini okurken tesadüfen çıktı. D022'nin kendi
dersi: öngörü çürümese bile taramanın kendisi yeni bir şey bulabilir.

## ⑧ ⚠️ ÖLÇEMEDİKLERİM / SINIRLAR (D107)

```
⚪ H-0007(a) "Gürcistan 15. yy'da Karakoyunlu'ya bağlı mıydı" — OKUNMADI.
   M-3592'nin bana gelen DETAYLI görev metni yalnız Kırım'ı anlatıyordu;
   Gürcistan yalnız paket-düzeyi triyajda (İŞ⑦ başlığı) görünüyor. Kapsam
   belirsizliği tahtaya BİLDİRİLDİ (aşağı bkz), tahmin yürütülmedi.
⚪ uret_petek.py/renk_olc.py'nin `s:` ile `v:` dönemlerini haritada TAM
   OLARAK nasıl farklı renklendirdiği (koyu/açık ton mekaniği) — arac/
   bana kapalı, motor koşusu gerekir, KORELASYONU bile ölçmedim.
⚪ Anapa'nın önerilen düzeltmesinin (1791-92 kırılması) petek/komşuluk
   üzerindeki etkisi — motor koşusu gerektirir, ölçülmedi.
```

## ⑨ KAYNAKÇA

```
TDV kirim         https://islamansiklopedisi.org.tr/kirim              (200, bugün okundu)
TDV anapa         https://islamansiklopedisi.org.tr/anapa              (200, bugün okundu)
TDV giray         (önceden repo içinde okunmuş, yerlesimler_ek_bozkir.js:38-40'ta alıntılı)
TDV nogaylar      (önceden repo içinde okunmuş, yerlesimler_ek_bozkir.js:41-44'te alıntılı)
TDV kefe          (önceden repo içinde okunmuş, yerlesimler_ek_bozkir.js:49-50'de alıntılı)
TDV kirim-hanligi  ÖLÜ (302/arama) — doğru slug `kirim`dir, §4① tuzağı tekrar doğrulandı
```
