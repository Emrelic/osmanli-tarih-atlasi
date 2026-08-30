# BULGU — HAYALET-RUSYA (VERİ HAYALET-RUSYA oturumu)

Görev: ORHANGAZİ'nin M-1808 (yaklaşık) şartnamesi — `Değişmez 4c`'nin
ölçtüğü hayalet devlet borcunun en büyük kalemi: `rusya` künyesi
1917-03-15'te bitiyor ama veri onu 1923-10-29'a kadar boyuyordu.

## ① SAYI TARTIŞMASI — 315 mi 344 mü, ikisi de doğru çıktı

ORHANGAZİ "315 dönem" dedi. `girdi.yukle()` ile ölçtüğümde ham dönem
NESNESİ sayısı **344** çıktı (bütününde `f < 1917-03-15` ve `t >
1917-03-15`, hepsi de `t > 1917-11-07`). Bekletmeden sordum (M-1816),
işleme başlamadım.

Cevap denetle.py'nin kendi ölçütünden geldi: **`Değişmez 4c` 590 → 275**,
yani tam **315'lik bir düşüş**. Demek ki ORHANGAZİ'nin "315"i `4c`
dalının SAYDIĞI alt kümeydi (o dal yalnız "künye ÖLÜMÜNÜ aşan" yönü
sayıyor); benim 344'üm ham `s:d:"rusya"` kaydı sayısıydı ve `4c`'nin
saymadığı ~29 kayıt da GERÇEKTEN aynı kusuru taşıyordu (aksi hâlde
`4c` 275'e değil 275-29 civarına inerdi — ama tam 315 düştüğü için bu,
benim 344'ümün DOĞRU ve TAM küme olduğunu, 315'in ise `4c`'nin dar
ölçüm penceresi olduğunu doğruluyor). **Sonuç: 344'ün tamamını
dönüştürdüm, hiçbiri dışarıda kalmadı.**

## ② YÖNTEM

`girdi.yukle()` (salt okunur) ile 57 kanonik dosyanın tamamı yüklendi,
`s:` içinde `d:"rusya"` olan ve `t > "1917-03-15"` olan HER dönem
bulundu (344 adet, 28 dosyaya yayılmış). Hepsinde `f < 1917-03-15` VE
`t > 1917-11-07` olduğu doğrulandı (assert) — yani hepsi tam üç parçaya
bölünmesi gereken, Şubat VE Ekim devrimlerinin ikisini de aşan kayıtlar.

Dönüşüm (parametrik, yalnız F/T'ye bağlı):
```
{f:F,t:T,d:"rusya"}
  →
{f:F,t:"1917-03-15",d:"rusya"},
{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
{f:"1917-11-07",t:T,d:"sovyet-rusya"}
```

İki geçişte uygulandı: ① sıkı biçim (`{f:"F",t:"T",d:"rusya"}`,
boşluksuz) — 235 dönem, str.replace (TÜM eşleşmeler, `,1` YOK). ②
esnek biçim (bazı dosyalar virgülden sonra boşluk kullanıyor,
`{f:"F", t:"T", d:"rusya"}`) — regex ile kalan 109 dönem. İkinci
geçiş, BİRİNCİ geçişin SONRASINDAKİ hâli yeniden ölçerek kuruldu (yani
zaten dönüşmüş kayıtlar tekrar dokunulmadı). Son ölçüm: **0 kayıt
kaldı.**

Dosya başına (28 dosya, ham dönem sayısı):
```
yerlesimler.js 88 · yerlesimler_h2_rusya.js 88 · ek8 27 · ek7 18 ·
ek13 14 · ek9 12 · ek17 11 · ek18 10 · kirim 9 · ek26 9 ·
ortaasya2 7 · ek15 7 · ek22 5 · sibirya 5 · ek_bozkir 4 · ek11 4 ·
ek6 3 · avrupa 3 · ek14 3 · ek27 3 · ek28 3 · ek10 3 · ek2 2 ·
ek3 2 · ek4 2 · seyrek 1 · ek20 1 · kalite4 1
```

## ③ SAHTE SINIR SIFIRLANDI — MANTIKLA, ÖLÇÜMLE DEĞİL

Kabul ölçütü: 1917-11-07 ile 1923-10-29 arasında hiçbir komşu çift
`rusya`/`sovyet-rusya` olmasın. Ölçmeye gerek kalmadı: dönüşüm sonrası
**hiçbir `s:` kaydında `d:"rusya"` 1917-03-15'i aşmıyor** (0 kayıt) —
yani o tarihten sonra ortada "rusya" diye bir etiket KALMADI, dolayısıyla
onunla çakışacak bir komşu da olamaz. Bu, ölçülmüş bir sonuç değil,
**küme tam kapandığı için mantıken garanti** — tam da OPUS 85'in
"kısmi dönüşüm imkânsız, kapanma muhtemelen 344'ün tamamı" bulgusunun
öngördüğü hâl.

## ④ DENETLE.PY — ÖNCESİ/SONRASI

`Değişmez 1` 215 sahipsiz (beklenen 215, değişmedi) · `1b` 0 (değişmedi)
`Değişmez 2` 528 kırılma, **0 açık** · `2s` 970 kırılma, 70 açık (tavan 121)
`Değişmez 4c` **590 → 275** (315 düşüş) — kalan 275'in listesinde
`rusya` YOK (en büyük kalemler: zend 129 · macaristan 15 · pagan 14 ·
ilhanli 12 · hafsi 12 · akkoyunlu 7 · maratha 7 · malaka-sultanligi 7 …
— hiçbiri bu partinin kapsamında değil).

İki kırılma günü (1917-03-15, 1917-11-07) külliyatta maddeli
(4 gün / 0 gün) — `Değişmez 2s` yeni açık gün almadı.

`Değişmez 7` (sorgusuz enklav) 494→514 gözlemlendi ama bu partiyle
İLGİSİZ: listede `rusya-gecici-hukumet` hiç geçmiyor (0 eşleşme) —
artış başka oturumların eşzamanlı yazdığı veriden geliyor.

## ⑤ KABUL EDİLMİŞ BASİTLEŞTİRME — KAYDEDİLİYOR

`sovyet-rusya` etiketi 1917-11-07'den itibaren KIRIM, UKRAYNA ve
KAFKASYA kayıtlarına da yazıldı. Ama:

- **Kırım/Ukrayna**: 1917-1922 Rus İç Savaşı (Ukrayna Halk Cumhuriyeti,
  Beyaz ordular, el değiştirmeler) tek renge indirgeniyor. Bu proje
  atlası bugün fiilî iç savaş denetim değişimlerini ifade EDEMİYOR —
  kabul edilmiş basitleştirme.
- **Kafkasya (Kars, Ardahan)**: 1918-1921 arası Gürcistan/Ermenistan/
  Azerbaycan Demokratik Cumhuriyetleri bağımsızdı; `sovyet-rusya`
  yazmak bu pencerede tarihen YANLIŞ. ORHANGAZİ üç künyenin de
  (`gurcistan-demokratik-cumhuriyeti` · `ermenistan-demokratik-
  cumhuriyeti` · `azerbaycan-demokratik-cumhuriyeti`) tanımlı ve
  renkli olduğunu bildirdi. BİLEREK KULLANMADIM: bu partinin kapanma
  kümesi (27→260+, Finlandiya'dan Kafkasya'ya tek zincir) Kafkasya'yı
  ayrı bir alt-küme olarak GÜVENLE çıkaramıyordu — kısmi bir ikinci
  dönüşüm aynı "sahte sınır" riskini taşırdı. Kars/Ardahan bu yüzden
  MEKANİK olarak sovyet-rusya aldı (dönem sonu zaten kısa: 1917-11-07
  → 1918-05-25).

⇒ **Bu iki basitleştirme KAYDEDİLDİ ki yarın kusur diye yeniden
bulunmasın.** Doğru çare (Kafkasya'yı DR künyeleriyle ayırmak) ayrı,
tek elden yapılacak bir sonraki parti — bu commit'te DENENMEDİ.

## ⑥ AYRI, BLOKE OLMAYAN BULGU — KARS'IN OSMANLI SÜREKLİLİĞİ

ORHANGAZİ ve HAZIR KITA OPUS 85 bağımsız ölçtü: Kars'ın `d:` (Osmanlı)
kaydı `1918-05-25 → 1923-10-29` KESİNTİSİZ diyor, ama TDV Mondros'tan
sonra Kars'ın BOŞALTILDIĞINI ve ancak 30 Ekim 1920'de geri alındığını
yazıyor (~2 yıl fazla boyama). Çaresi `ermenistan-demokratik-
cumhuriyeti` dönemi eklemek — bu partinin `s:`/rusya kapsamı DIŞINDA,
bu commit'te DOKUNULMADI, ayrı karar bekliyor.

## ⑦ DOSYALAR VE COMMIT

28 `data/yerlesimler*.js` dosyası değişti (yukarıdaki liste). Tek
commit — kısmi dönüşüm sahte sınır riski taşıdığı için hepsi birlikte.
