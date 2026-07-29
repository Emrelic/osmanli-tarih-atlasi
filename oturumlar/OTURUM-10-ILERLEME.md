# Oturum 10 — Savaşlar ve antlaşmalar: ilerleme raporu

Tarih: 2026-07-29. Yazılan tek dosya: `data/savaslar.js`. Model: Sonnet.

## Özet sayılar

```
savas: 122  (eskiden 108, +14 yeni)
antlasma: 33  (eskiden 30, +3 yeni)
taraf alanı olan kayıt: 139 / 155
devletler.js'te karşılığı olmayan id: 0
```

Doğrulama komutu (CLAUDE.md/OTURUM-10'daki) çalıştırıldı, **0 kötü id** döndü.

## ⚠️ Şema değişikliği — Oturum 1'in (js/app.js) haberi olmalı

Görev tanımındaki örnek `taraf:[...]` alanını **doğrudan eski `taraf` alanının
üstüne yazacak şekilde** tarif ediyordu, ama eski `taraf` zaten serbest metin
olarak dolu ve **js/app.js bunu ekranda gösteriyor**
(`js/app.js:597,602,869,876` — "ad — taraf" ve "karşı taraf: taraf" gibi).

Veri kaybetmemek ve ekranı sessizce bozmamak için:
- Eski serbest metin alan **`taraf_metin`** adına taşındı (içerik aynı).
- Yeni **`taraf`** alanı artık her zaman `devletler.js` id dizisi.
- **`js/app.js` hâlâ `s.taraf`/`a.taraf` okuyor** — dizi olduğu için hata
  vermez ama ekranda "Mohaç — osmanli,macaristan" gibi virgüllü id listesi
  görünür (önceden "Mohaç — Macaristan" idi). **Oturum 1'in `js/app.js`'i
  `taraf_metin`'e geçirmesi veya `taraf` id'lerini `devletler.js`'ten ada
  çözümlemesi gerekiyor.** Dosyanın başına bunu açıklayan bir yorum blok'u
  eklendi.

Bunu ben düzeltemedim çünkü `js/app.js` benim dosya sahipliğimin dışında.

## devletler.js'te bulunan gerçek boşluklar (Oturum 3'e / entegrasyona bildirim)

Taraf bağlarken sistematik bir örüntü çıktı: **bazı devletler yalnız "tâbi/özerk"
evrelerinde bir id'ye sahip, tam bağımsızlık kazandıkları andan itibaren id'leri
kapanıyor ve devamı hiç modellenmemiş:**

- **Sırbistan**: `sirbistan-prensligi` 1804–1882'de bitiyor. 1882 Krallık ilanından
  1918'e kadarki tam bağımsız Sırbistan Krallığı'nın id'si yok. Balkan Savaşları
  (1912-13) ve Berlin (1878) gibi olaylarda bu id'yi (aralığının dışında olsa da)
  **kullanmak zorunda kaldım** — id'nin kendisi doğru varlığı gösteriyor, sadece
  tarih aralığı 1882'de duruyor.
- **Bulgaristan**: `bulgaristan-prensligi` 1878–1908'de bitiyor. 1908 tam
  bağımsızlık sonrası Bulgar Krallığı'nın id'si yok. II. Balkan Savaşı (1913) ve
  Londra Antlaşması (1913) için aynı şekilde aralık-dışı kullanıldı.
- **Romanya**: `romanya` 1859–1881'de bitiyor. 1881 Krallık ilanı sonrası id yok.
  Lozan'da (1923) Romanya de facto taraftı ama id'si olmadığı için **eklenmedi**.
- **Fransa**: `fransa` 987–1792'de bitiyor (Cumhuriyet ilanıyla kapanmış). 1792
  sonrası (Devrim, Napolyon, Restorasyon, III. Cumhuriyet) için **hiç id yok**.
  Bu yüzden Navarin (1827), Londra Protokolü (1830), Çanakkale (1915), Mondros,
  Sevr, Mudanya, Lozan gibi Fransa'nın açıkça taraf olduğu kayıtlarda **Fransa
  taraf listesine eklenemedi** — uydurmadım, boş bırakıldı.
- **Lehistan öncesi (Polonya Krallığı, ör. 1444 Varna, 1396 Niğbolu döneminde)**:
  `lehistan` (Lehistan-Litvanya Birliği) 1569'da başlıyor; ortaçağ Polonya
  Krallığı'nın ayrı id'si yok. Varna/Niğbolu'da yalnız Macaristan bağlandı.
- **Sovyet Rusya / Kafkas Sovyet cumhuriyetleri**: 1921 Kars Antlaşması'nın asıl
  muhatapları (Sovyet Rusya, Ermenistan SSC, Azerbaycan SSC) — **hiçbiri
  devletler.js'te yok**. `gurcistan` id'si de 1801'de bitiyor, 1921'i kapsamıyor.
  Kars Antlaşması taraf listesine bu yüzden yalnız `tbmm-turkiye` yazıldı.
- **Ermenistan / Azerbaycan** genel olarak (1918-1921 bağımsızlık dönemi dahil)
  hiç id olarak yok.

Bu altı boşluk, ileride devlet-merkezli yükleme (MIMARI.md §6.5) kurulurken
Sırbistan/Bulgaristan/Romanya/Fransa/Rusya'ya tıklandığında 1880-1920 arası
hiçbir "ilgi bağı" bulunamayacağı anlamına geliyor. Oturum 3'ün (devletler.js
sahibi) bilmesi gereken en somut bulgu bu.

## Görev 1 — Taraf bağlama

108+30 = 138 mevcut kayıt tek tek incelendi; 122+33=155 kayıttan **139'una**
`taraf` (id dizisi) eklendi. 16 kayda eklenmedi:
- **Çirmen (1371)**: "Sırp beyleri" — Sırp İmparatorluğu'nun dağılma döneminde
  tek bir devletler.js id'si yok.
- **14 iç isyan** (Şeyh Bedreddin, Börklüce Mustafa, Torlak Kemal, Şahkulu×2,
  Bozoklu Şeyh Celâl, Hain Ahmed Paşa, Kalender Çelebi, Karayazıcı, Deli Hasan,
  Canbolatoğlu, Kalenderoğlu, Abaza Mehmed Paşa, Abaza Hasan Paşa, Pazvandoğlu
  Osman): bunlar devlet-i aliyye içi hareketler, karşılarında bir "taraf devlet"
  yok. Bilerek boş bırakıldı (Birinci Sırp İsyanı ve Mora İsyanı farklı — bunlar
  doğrudan bir devletler.js kaydının kuruluş anına denk geldiği için bağlandı).

`galip` alanı yalnız meydan muharebeleri ve deniz muharebelerinde, açık galibi
olanlara eklendi (kuşatma ve "belirsiz" sonuçlarda bilerek boş bırakıldı — görev
tanımındaki kural). Kırım Savaşı, 93 Harbi, Trablusgarp gibi "savaş" başlıklı
tekil kayıtlarda `galip` o savaşın genel Osmanlı-açısından sonucuna göre yazıldı.

Birkaç özel karar:
- **Sakarya, Büyük Taarruz, Birinci/İkinci İnönü, Kars, Mudanya, Lozan**: taraf
  `"osmanli"` değil **`"tbmm-turkiye"`** — bu savaşları/antlaşmaları fiilen
  yürüten TBMM hükûmeti, zaten devletler.js'te ayrı bir id olarak modellenmiş.
  Mondros ve Sevr'de hâlâ `"osmanli"` kullanıldı (o tarihte TBMM ya yok ya da
  imzacı değil).
- **Diu (Portekiz, 1509)**: taraf'a `"osmanli"` **eklenmedi** — bu tarihte
  Osmanlı sahada yok, savaşı Memlük (+Gucerat/Kalikut) donanması yaptı. Mevcut
  veri `seri:"memluk"` ile zaten doğru gruplamıştı, taraf da buna göre düzeltildi.
- **Karlofça**'da görev tanımının örneği `"avusturya"` id'sini kullanıyordu;
  devletler.js'te bu id **`"habsburg"`** — örnek muhtemelen taslak aşamasından
  kalmış, gerçek id kullanıldı.

## Görev 2 — Eksik savaş/antlaşma ekleme

`data/olaylar*.js`'te `etiket` alanında "savas" geçen **285 madde** tarandı;
`data/devletler.js` kronolojisinde `tur:"savas"/"antlasma"` olan **217 madde**
tarandı. Bunların çoğu ya zaten tabloda var, ya da dünyanın Osmanlı'yla hiç
ilgisi olmayan olaylar (Zulu, Maratha, Meiji Japonya, ABD İç Savaşı gibi — §1.6
"atlas Osmanlı merkezli" kuralı gereği **eklenmedi**).

Gerçek boşluk olan ve **eklenen 14 yeni SAVASLAR kaydı**:
Turnadağ (1515, Dulkadir ilhakı), Cecora/Ţuţora (1620) ve Hotin kuşatması (1621)
— **Osmanlı-Lehistan savaş serisinin (1620-1699) tabloda tek bir savaş kaydı bile
yoktu**, bu en belirgin boşluktu — Sen Gotar/St. Gotthard (1664), Zenta bozgunu
(1697), Varadin/Petrovaradin bozgunu (1716), Musul savunması (1743, Nadir Şah),
Kartal/Kagul bozgunu (1770), Kozluca bozgunu (1774), İsmail kuşatması (1790),
Slobozia bozgunu (1811), Oltenitsa zaferi (1853), Birinci İnönü (1921),
İkinci İnönü (1921) — **İstiklal Savaşı'nın iki kilit muharebesi tabloda hiç
yoktu**, ikinci en belirgin boşluktu.

**3 yeni ANTLASMALAR kaydı**: Mudanya Mütarekesi (1922 — tabloda hiç yoktu,
Millî Mücadele'nin resmî bitiş antlaşmalarından biri eksikti), Kerden Antlaşması
(1746, Afşar/Nadir Şah ile), Sırbistan özerklik fermanı (1830).

**Not — tükenmedi, seçildi:** 285+217 madde arasında hâlâ tabloya eklenebilecek
onlarca alt-olay var (örn. Sen Gotar sonrası Habsburg cephesindeki daha küçük
çarpışmalar, 1877-78'in Şıpka/Kars gibi diğer cepheleri). Zaman bütçesi
içinde en büyük yapısal boşlukları (bütün bir savaş serisinin boş olması,
İstiklal Savaşı'nın iki muharebesinin eksik olması, bir antlaşmanın hiç
olmaması) kapatmayı önceledim; kalanı gelecek bir tur için bırakıyorum.

## Görev 3 — Antlaşma maddelerini netleştirme

33 antlaşmanın **tamamına** yeni `topraklar` alanı eklendi — kısa, açık "hangi
yer kimden kime" cümlesi. `data/yerlesimler.js` ile örneklem olarak çapraz
kontrol edildi (Mora, Kamaniçe/Podolya, Belgrad, Kars/Ardahan): dört örnekte de
`topraklar` metnindeki geçiş tarihleri yerlesimler.js'teki gerçek `s`/`d`
dönüm noktalarıyla **birebir örtüştü** (ör. Kars/Ardahan'ın Rusya'ya geçişi
tam 1878-07-13 Berlin tarihinde, Kamaniçe'nin Lehistan'a dönüşü tam 1699-01-26
Karlofça tarihinde). Bu, mevcut haritanın kırılma tarihleriyle antlaşma
tarihlerinin zaten tutarlı olduğunu doğruluyor.

## Dokunulmayanlar

`data/devletler.js`, `data/kisiler.js`, `data/yerlesimler.js`, `data/olaylar*.js`
yalnız okundu. `arac/`, `index.html`, `js/app.js`, kök `*.md` dosyaları
dokunulmadı. `SEFERLER` dizisine hiç dokunulmadı. `SERILER` dizisine de yeni
seri eklenmedi (Musul/Kerden gibi Afşar-dönemi kayıtlar için `seri:""` bırakıldı
— yeni bir "Osmanlı-Afşar" serisi tanımlamak devletler.js/SERILER kapsamını
genişletir, bu oturumun sınırları içinde görmedim).

Commit atılmadı, `arac/uret_petek.py` çalıştırılmadı.
