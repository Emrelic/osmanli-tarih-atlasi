# KRONO-YER-0072 — YENİ NOKTA ÖNERİLERİ (M-4798), 20 Eylül 2026

🔴 **BU BİR ÖNERİ DOSYASIDIR. `data/yerlesimler.js`e HİÇBİR ŞEY YAZILMADI** — o dosya
Oturum 0 kalemi ve şu anda üç oturum birden üzerinde çalışıyor (DALGA-0072).

Sevk: M-4798 (1.MURAT) — ISGAL-1806'nın ölçtüğü noktasız yerler + Karadeniz kıyısındaki
iki ölçülmüş boşluk. Her nokta için **koordinat + sahiplik pencereleri + kaynak**.

---

## 0 · ZORUNLU MÜKERRER TARAMASI — sekizinin sekizi de TEMİZ

`CLAUDE.md §11`: *"yeni noktadan önce ad (normalleştirilmiş) + 3 km tara."*
Ad tarafı `arac/ad_esanlam.py` (tek otorite), mesafe tarafı `girdi.km`.
Evren: `girdi.GIRDI_DOSYALARI`nın okuduğu **3921** yerleşim.

| aday | 3 km içinde | 25 km içinde | en yakın atlas noktası |
|---|---|---|---|
| Kişinev | yok ✓ | yok | Orhei **41,6 km** |
| Ploeşti | yok ✓ | yok | Tırgovişte **45,7 km** |
| Fokşani | yok ✓ | yok | Rimnik-i Sârat **36,3 km** |
| Bakav (Bacău) | yok ✓ | yok | Roman **39,9 km** |
| Botoşani | yok ✓ | yok | Suçava **33,4 km** |
| Poti (Faş) | yok ✓ | yok | Batum **56,4 km** |
| Gelincik | yok ✓ | yok | Anapa **71,1 km** |
| Soğucak | yok ✓ | yok | Anapa **41,9 km** |

🔴 **AD TUZAĞI:** atlasta `Yakutat (Novorossiysk)` var — **Alaska'daki** Novorossiysk.
"Novorossiysk aradım, buldum" diyen bir tarama yanlış kıtayı bulur. Soğucak önerisinin
adı bu yüzden ayrıştırıcı olmalı (aşağıda §7).

---

## 1 · Kişinev — **en sağlam öneri, emsali 41 km ötede duruyor**

```
{ ad:"Kişinev", tur:"sehir", lat:47.0105, lon:28.8638, g:0, k:4, m:"Yaş",
  s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},
     {f:"1812-05-28",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1918-01-01",d:"sovyet-rusya"},
     {f:"1918-01-01",t:"1923-10-29",d:"romanya-kralligi"}],
  v:[{f:"1456-06-01",t:"1812-05-28",k:"Boğdan Voyvodalığı",statu:"vassal",kid:"bogdan"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",
        kaynak:"bogdan · gün komşudan: Akkirman · TDV akkirman (30 Kasım 1806); ESBE «Турецкие войны России»: Mihelson'a Memleketeyn'i işgal emri, 11 Kasım J'de Dinyester geçişi"}] }
```

**Gerekçe ve kaynak durumu.** Pencereler `Orhei` (47.383, 28.823 — Kişinev'e **41,6 km**,
aynı Besarabya, aynı sancak çevresi) kaydının BİREBİR aynısıdır; Orhei'nin kaynağı zaten
veride yazılı. TDV `bogdan`, 1812 için şunu diyor:
> "Boğdan'ın doğu kısmı ve en önemli yerleri olan Akkirman, Kili ve Bender Türk halklarıyla
> birlikte Rusya'ya bırakıldı."

⚠️ **Kişinev'in ADI TDV'de geçmiyor** — 1812'de küçük bir kasabaydı, Besarabya merkezi
Rus idaresinde (1818) oldu. Yani kaynak BÖLGE düzeyinde kesin, ŞEHİR düzeyinde ismen
değil. Bu `D207`nin "komşu günü şartlı serbest" kapısıdır ve şartları tutuyor: komşunun
günü kendi kaynağına dayanıyor · hedefte kaynak gün yok · aynı olay/süreç · yakın konum ·
kayda "gün komşudan" yazıldı. **Zincirleme devralma yok:** Orhei'nin kendisi Akkirman'dan
devralmış, ben Akkirman'ın gününü doğrudan yazıyorum (Orhei'den değil).

`k:4` da Orhei'den; Kişinev'in Rus dönemi vilâyet merkezliği `k:3`ü hak edebilir —
**bu bir gösterim kararıdır, Oturum 0'ın.**

---

## 2 · Bakav (Bacău) — Boğdan içi

```
{ ad:"Bakav (Bacău)", tur:"sehir", lat:46.5670, lon:26.9146, g:0, k:4, m:"Yaş",
  s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},
     {f:"1878-07-13",t:"1881-03-26",d:"romanya"},
     {f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  v:[{f:"1456-06-01",t:"1878-07-13",k:"Boğdan Voyvodalığı",statu:"vassal",kid:"bogdan"}],
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"bogdan · gün komşudan: Akkirman · TDV akkirman (30 Kasım 1806); ESBE «Турецкие войны России»"},
       {f:"1828-05-07",t:"1834-01-01",d:"rusya",kaynak:"ESBE (25 Nisan J) · edirne-antlasmasi · bogdan"}] }
```

Emsal: **Roman** (46.925, 26.93 — Bakav'a 39,9 km), aynı dosyada, aynı iki işgal penceresi.
TDV `bogdan` Bakav'ı **ismen anmıyor** (arandı, yok) — yine `D207` şartlı devralma.

## 3 · Botoşani — Boğdan içi, kuzey

```
{ ad:"Botoşani", tur:"sehir", lat:47.7406, lon:26.6658, g:0, k:4, m:"Yaş",
  s / v / isg  →  Bakav ile BİREBİR AYNI (yukarıdaki blok)
}
```

⚠️ **Sınanması gereken tek nokta:** Botoşani, 1775'te Avusturya'ya geçen **Bukovina'nın
GÜNEYİNDE** kalır (Suçava 33,4 km kuzeyde ve `avusturya 1775-05-07→1918` taşıyor).
Botoşani Boğdan'da KALDI — ama bu sınır çizgisi bağımsız bir kaynakla doğrulanmalı;
ben **ölçmedim**, atlasın Suçava kaydına bakarak söylüyorum ve atlas dayanak değildir.

## 4 · Ploeşti — 🔴 ANAKRONİZM RİSKİ, olduğu gibi yazılmamalı

```
{ ad:"Ploeşti (Ploieşti)", tur:"sehir", lat:44.9469, lon:26.0366, g:0, k:4, m:"Bükreş",
  v:[{f:"<KUR>",t:"1878-07-13",k:"Eflak Voyvodalığı",statu:"vassal",kid:"eflak"}],
  s:[{f:"1878-07-13",t:"1881-03-26",d:"romanya"},
     {f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  isg:[{f:"1806-12-25",t:"1812-05-28",d:"rusya",kaynak:"gün komşudan: Bükreş · ESBE «Турецкие войны России» (13 Aralık J, Miloradoviç)"},
       {f:"1828-05-07",t:"1834-01-01",d:"rusya",kaynak:"ESBE (25 Nisan J) · edirne-antlasmasi · eflak"}] }
```

Emsal: **Tırgovişte** (44.925, 25.457 — 45,7 km) ve **Rimnik-i Sârat**, ikisi de aynı iki
işgal penceresini taşıyor ve kaynakları veride yazılı.

🔴 **AMA `s:eflak 1281-01-01` YAZILAMAZ.** Ploeşti geç kurulmuş bir kasabadır (yaygın
kayıt: Mihai Viteazul, 16. yüzyıl sonu). **TDV'de Ploeşti maddesi YOK ve adı Osmanlı
bağlamında hiç geçmiyor:** `?q=Ploieşti` araması TEK isabet verdi ve o da alâkasız —
`iorga-nicolae` maddesindeki "Ploieşti Lisesi'nde Latince" cümlesi. ⇒ `kur:` için kaynak **bulunamadı**;
1281'den başlayan bir pencere `Değişmez 5` anlamında sahte kesinlik olur. **Önerim:**
`kur:` kaynaklanana kadar Ploeşti'yi ASKIYA AL, ya da kaynak bulunursa `<KUR>` yerine
o günü yaz. Kurucusu/kuruluş yılı bir Romen tarih kaynağından okunmalı (benim kaynak
setimde yok).

## 5 · Fokşani — 🔴 SINIR KASABASI, hangi voyvodalık olduğu ÖLÇÜLEMEDİ

```
{ ad:"Fokşani (Focşani)", tur:"sehir", lat:45.6961, lon:27.1864, g:0, k:4, m:"Bükreş"? / "Yaş"? }
```

Fokşani **Milcov ırmağının üstündedir** ve ırmak Eflak ile Boğdan'ın sınırıdır — kasaba
tarihte iki yarımdı (Eflak yakası ve Boğdan yakası, ayrı idareler). Atlas şeması bir
noktaya TEK sahiplik zinciri verir; hangi yakanın temsil edileceği bir KARARDIR.

- **A seçeneği — Eflak yakası:** `kid:"eflak"`, `m:"Bükreş"`, işgal günleri Bükreş'ten
  (1806-12-25). En yakın atlas noktası Rimnik-i Sârat (36,3 km) zaten Eflak.
- **B seçeneği — Boğdan yakası:** `kid:"bogdan"`, `m:"Yaş"`, işgal günleri Akkirman'dan
  (1806-11-30).

**Ben seçmiyorum** — hangi yakanın esas alınacağı bir kapsam hükmüdür (1.MURAT/Emre).
Kaynak durumu ÖLÇÜLDÜ: TDV'de Fokşani maddesi **yok**; `?q=Fokşani` araması bütün
ansiklopedide **TEK isabet** verdi (`vasif-ahmed-efendi`) ve o madde de barış
müzakereleri bağlamında anıyor, **hangi voyvodalıkta olduğunu söylemiyor** (gövdesi
açılıp okundu). TDV `eflak` ve `bogdan` maddelerinin ikisinde de Fokşani geçmiyor.
Not: Fokşani iki ayrı olayın adresi — 1772 Fokşani kongresi ve 1789 Fokşani bozgunu;
ikincisi benim H-0009/H-0012 evrenimde `yer:"Fokşani (Focşani), Eflak"` diye YAZILI ve
noktası olmadığı için kamera sessiz kalıyor (C kovası, `KRONO-YER-0072-0920.md §3`).
Veride madde **Eflak** diyor — bu A seçeneğini destekleyen bir işarettir ama atlas
dayanak değildir, hükmü kurmaz.

---

## 6 · Poti (Faş) — 🟢 KAYNAĞI EN SAĞLAM ÖNERİ, günü güne TDV'den

TDV `fas--gurcistan`, birebir alıntılar:
> "26 Temmuz 1579'da Faş Kalesi'ni inşa etti" (Kaptanıderyâ Kılıç Ali Paşa)
> "27 Kasım 1809'da" kumandan Memiş Ağa kaleyi teslim etti
> "1812 Bükreş Antlaşması gereğince Faş Kalesi silâh ve topları ile birlikte Osmanlı
> Devleti'ne verildi (19 Aralık 1812)."
> "26 Haziran 1828'de Ruslar'a teslim edildi"

```
{ ad:"Poti (Faş)", tur:"liman", lat:42.1500, lon:41.6667, g:1, k:4, m:"Trabzon",
  d:[{f:"1579-07-26",t:"1828-06-26",y:"savas"}],
  isg:[{f:"1809-11-27",t:"1812-12-19",d:"rusya",
        kaynak:"TDV `fas--gurcistan` — AYNEN: '27 Kasım 1809'da' teslim · '1812 Bükreş Antlaşması gereğince Faş Kalesi silâh ve topları ile birlikte Osmanlı Devleti'ne verildi (19 Aralık 1812)'. hassasiyet: GÜN"}],
  s:[{f:"1281-01-01",t:"1579-07-26",d:"gurcistan"},
     {f:"1828-06-26",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1918-12-01",d:"sovyet-rusya"},
     {f:"1918-12-01",t:"1921-03-16",d:"gurcistan-demokratik-cumhuriyeti"},
     {f:"1921-03-16",t:"1923-10-29",d:"sovyet-rusya"}] }
```

- `d:` (doğrudan Osmanlı) başlangıcı **1579-07-26** ve bitişi **1828-06-26** TDV'nin
  kendi günleridir — komşudan devralma YOK.
- `isg:` penceresi Anapa emsalindeki desenin aynısı (d: dokunulmuyor, isg: üstüne biniyor).
- ⚠️ **1579 ÖNCESİ ve 1918 SONRASI zinciri TDV'den DEĞİL:** `Batum` (56,4 km, aynı kıyı,
  aynı ardıl devlet dizisi) kaydının desenidir. Batum'un `s:gurcistan 1281→1578` ve
  1917-1921 Rus/Gürcü/Sovyet zinciri veride yazılı. Bu satırlar **"emsalden"** diye
  işaretlenmeli, TDV'ye mal edilmemeli.
- 🔴 **`d:` ile `Değişmez 2`:** 1579-07-26 ve 1828-06-26 birer KIRILMADIR; ±30 gün içinde
  kronoloji maddesi ŞART. 1828-06-26 için atlasta Edirne/1828-29 savaşı maddeleri var ama
  **Faş'ın teslimi için ayrı madde YOK**; 1579 Faş inşası için de madde yok. ⇒ Nokta
  yazılırken **iki kronoloji maddesi de yazılmalı**, yoksa Değişmez 2 açılır.

**Koordinatörün gerekçesi doğrulandı:** Batum ile Sohum arasında bugün TEK kıyı noktası
yok; Poti girince o aralıkta 56,4 km'lik bir çapa doğar.

## 7 · Soğucak (Sucuk-kale / Novorossiysk) — Tuapse–Anapa boşluğu için ÖNERİM BU

```
{ ad:"Soğucak (Novorossiysk)", tur:"kale", lat:44.7167, lon:37.7833, g:0, k:4, m:"Kefe",
  d:[{f:"<KUR ~1781>",t:"1829-09-14",y:"insa"}],
  isg:[{f:"1828-06-24",t:"1829-09-14",d:"rusya",kaynak:"gün komşudan: Anapa (41,9 km) · TDV `anapa`: Osman Paşa 24 Haziran 1828'de Ruslar'a teslim oldu; 1829 Edirne ile Osmanlı hâkimiyetinden çıktı"}],
  s:[{f:"1829-09-14",t:"1917-03-15",d:"rusya"}, … Anapa'nın ardıl zinciri] }
```

**Niçin Gelincik değil Soğucak:** Soğucak'ın Osmanlı belgelerinde bir **muhafızlığı**
vardır ve TDV iki ayrı maddede anıyor. TDV `anapa`, birebir:
> "Soğucak Kalesi'ne yakın mesafede Karadeniz sahilindeki Anapa burnuna tıpkı Soğucak
> Kalesi gibi bir kale yapılmasına karar verdiler."
TDV `cerkezler`, birebir:
> "Soğucak muhafızı Ferah Ali Paşa da Anapa Kalesi'ni inşa ettirdi"

⇒ Soğucak, Anapa'dan (1781) **ÖNCE** vardı ve bir muhafızlık merkeziydi. Gelincik
(Gelendzhik, 44.5622/38.0848) için elimde **hiçbir kaynak yok** — önermiyorum.

⚠️ **bulunamadı (üç kalem):**
1. Soğucak'ın **kuruluş günü/yılı** — TDV'nin dört maddesinde de yok (`anapa`, `cerkezler`,
   `abdulhamid-i`, `canikli-haci-ali-pasa-ailesi` arama isabetleri). "~1781" yazmak sahte
   kesinlik olur; `kur:` kaynaksız yazılmamalı.
2. Soğucak'ın **Ruslara geçiş günü** — TDV ismen vermiyor. Anapa'dan devraldım
   (D207 şartları: aynı olay/süreç, 41,9 km, hedefte gün yok, kayda "gün komşudan" yazıldı).
3. Edirne'nin (1829-09-14) Sucuk-kale'yi ismen kapsayıp kapsamadığı — TDV
   `edirne-antlasmasi` maddesini bu iş için AÇMADIM (token); açılması gereken tek adres odur.

🔴 **BONUS — kendi C kovamı kapatıyor:** `1914-10-29 Karadeniz Baskını` maddesi
`yer:"Odessa, Sivastopol, Novorossiysk…"` diyor ve noktası olmadığı için kamera sessiz.
Nokta adı **"Soğucak (Novorossiysk)"** yazılırsa `olayKonumu`nun `ad.split(" (")[0]`
esnekliği "Soğucak"ı çözer, ama "Novorossiysk" ÇÖZMEZ (o dal yalnız parantez ÖNCESİNE
bakar). ⇒ O madde için `yer_id:"Soğucak"` yazılmalı; ya da nokta adı tersine
**"Novorossiysk (Soğucak)"** kurulmalı. **Ad sırası bir kamera kararıdır, ölçtüm, hükmü
Oturum 0 versin.** (Ve `Yakutat (Novorossiysk)` Alaska'da duruyor — ad çakışması gerçek.)

---

## 8 · Kapanış — ne yapılmalı

| nokta | durum | engel |
|---|---|---|
| Kişinev | **hazır** | yok (emsal + TDV bölge kaynağı) |
| Bakav · Botoşani | **hazır** | Botoşani'nin Bukovina sınırı bağımsız doğrulanmalı |
| Poti (Faş) | **hazır, günü güne TDV** | 2 kronoloji maddesi de yazılmalı (Değişmez 2) |
| Soğucak | **hazır ama `kur:` yok** | `kur:` kaynaksız; Edirne kapsaması açılmalı |
| Ploeşti | **BEKLEMELİ** | `kur:` kaynağı yok → 1281 penceresi anakronik olur |
| Fokşani | **KARAR BEKLER** | Eflak yakası mı Boğdan yakası mı (sınır kasabası) |
| Gelincik | **ÖNERMİYORUM** | hiçbir kaynak bulunamadı; Soğucak onun yerine geçer |

🔴 **Yedi nokta da `data/yerlesimler.js`e YAZILMADI.** Koşuya binecekse yazımı Oturum 0
yapar; bu dosyadaki bloklar kopyalanabilir hâldedir ama `kur:` boşlukları ve Fokşani
kararı önce çözülmelidir.
