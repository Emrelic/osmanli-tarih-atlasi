# ETİKETLEME — her şeyi her şeye bağlamak

Kullanıcının tanımı (2026-07-30), buradaki her kararın kaynağı:

> "her olay her devlet her bölge belli etiketler ile birbirine bağlanmalı.
> mesela karlofça anlaşmasına venedik osmanlı lehistan avusturya rusya ülkeleri
> 1680-1700 tarihleri avrupa etiketi avusturya macaristan mora podolya kırım
> balkanlar etiketleri 4.mehmet ve diğer devletlerin başkanları komutanlar filan
> etiketlenmeli. bu etiketlemeler olayları hem coğrafya hem olay hem kişi hem
> tarih bazında birbirine ilintilendirmek için kullanılacak"

---

## 1. Bugün ne var, ne yok

Ölçüldü (`DURUM.md §f`): 938 kronoloji maddesinin 938'i etiket taşıyor ama
**toplam 17 etiket var ve hepsi konu etiketi** — `savas`, `toprak-kazanc`,
`siyaset`, `diplomasi`… Coğrafya, devlet, kişi ve devir ekseni **yok.**

Yarım malzeme:

| Alan | Nerede | Durum |
|---|---|---|
| `ANTLASMALAR.taraf` | 33/33 | ✓ **kimlik dizisi** — doğru yapılmış tek örnek |
| `OLAYLAR.kisiler` | 924/938 | ✗ serbest metin ("Nâdir Han, III. Ahmed") |
| `OLAYLAR.yer` | 938/938 | ✗ serbest metin ("Hemedan, Kirmanşah") |
| `OLAYLAR.etiket` | 938/938 | ✗ yalnız konu ekseni |
| `SAVASLAR.lat/lon` | 169/169 | ✓ koordinat |
| `DEVLETLER.id` | 213/213 | ✓ kimlik |

**Yani sistem yoktan kurulmuyor — dört eksenden ikisinin hammaddesi var ama
serbest metin hâlinde.** Asıl iş metni kimliğe çevirmek.

---

## 2. Beş eksen

Bir olay beş ayrı eksende etiketlenir. Her eksenin **kendi kimlik uzayı** var;
karıştırmamak kritik, yoksa "Kırım" hem bölge hem devlet olur ve arama bozulur.

```
1  KONU        savas · antlasma · imar · bilim …            (bugün var, 17 değer)
2  DEVLET      osmanli · venedik · lehistan · avusturya …   (DEVLETLER.id ile aynı uzay)
3  COĞRAFYA    avrupa > balkanlar > mora                    (HİYERARŞİK)
4  KİŞİ        mehmed4 · sokullu-mehmed-pasa …              (KISILER.id — henüz id YOK)
5  DEVİR       1680-1700 · 17-yy · duraklama                (türetilir, elle yazılmaz)
```

### Karlofça örneği — kullanıcının verdiği hedef

```js
{ t:"1699-01-26", ad:"Karlofça Antlaşması",
  konu:    ["antlasma","toprak-kaybi","diplomasi"],
  devlet:  ["osmanli","avusturya","lehistan","venedik","rusya"],
  cografya:["avrupa","balkanlar","orta-avrupa","macaristan","erdel","mora",
            "dalmacya","podolya","kirim-bozkiri"],
  kisi:    ["mehmed4","mustafa2","koprulu-amcazade-huseyin-pasa",
            "eugene-of-savoy","jan-sobieski","petro1"],
  // devir ELLE YAZILMAZ: t alanından türetilir → ["17-yy","1680-1700","duraklama"]
}
```

---

## 3. Coğrafya ekseni HİYERARŞİK olmalı

Bu, tasarımın en kritik kararı. "Mora" etiketi arandığında Karlofça çıkmalı;
"Avrupa" arandığında da çıkmalı — ama Karlofça'ya elle hem `mora` hem `balkanlar`
hem `avrupa` yazmak hem yorucu hem tutarsızlığa açık.

**Çözüm: tek bir ağaç tanımla, en dar etiketi yaz, üstleri türet.**

```
dunya
├── avrupa
│   ├── balkanlar        (mora · epir · tesalya · makedonya · trakya · bosna …)
│   ├── orta-avrupa      (macaristan · erdel · banat · slovakya · avusturya-ici)
│   ├── dogu-avrupa      (podolya · ukrayna · lehistan-ici · litvanya · kirim-bozkiri)
│   ├── bati-avrupa      (fransa · iberya · britanya · alcak-ulkeler)
│   ├── italya           (venedik-ici · napoli · sicilya · papalik · toskana)
│   └── kuzey-avrupa     (iskandinavya · baltik · finlandiya)
├── anadolu              (bati · ic · dogu · karadeniz · akdeniz · guneydogu)
├── kafkasya             (gurcistan · sirvan · dagistan · azerbaycan · ermenistan)
├── iran-turan           (azerbaycan-iran · horasan · gilan-mazenderan · fars · luristan)
├── orta-asya            (mavera · harezm · yedisu · kasgar)
├── mezopotamya          (irak-arab · irak-acem · el-cezire · sehrizor)
├── levant               (suriye · filistin · lubnan · antakya)
├── arabistan            (hicaz · yemen · necid · basra-korfezi · umman · hadramut)
├── afrika
│   ├── misir · nube-sudan · habesistan · somali
│   └── kuzey-afrika     (trablus · tunus · cezayir · fas · fizan)
├── hint-cin             (hindistan · dekken · bengal · birmanya · siyam · malaya · endonezya)
├── dogu-asya            (cin · japonya · kore · mancurya · tibet)
└── amerika              (mezoamerika · and · kuzey-amerika · karayipler)   ← henüz veri yok
```

Kural: **yaprak etiket yazılır, ata etiketler `arac/uret_etiket.py` tarafından
eklenir.** `mora` yazan bir maddeyi `balkanlar` ve `avrupa` aramaları da bulur.

⚠️ **`kirim` tuzağı:** Kırım hem devlet (`kirim` = Kırım Hanlığı) hem coğrafya
(`kirim-yarimadasi`, `kirim-bozkiri`). İki eksende **ayrı kimlik** kullanılacak,
yoksa "Kırım Hanlığı'nın kuruluşu" ile "Kırım'ın Rus ilhakı" aynı kovaya düşer.
Aynı tuzak: Venedik (devlet `venedik` / bölge `venedik-ici`), Avusturya,
Macaristan, Mısır, Yemen.

---

## 4. Devir ekseni TÜRETİLİR

Elle yazılmaz, `t` alanından çıkar. Üç kademe:

```
yüzyıl        13-yy … 20-yy
yirmi yıl     1280-1300 · 1300-1320 … 1900-1920
devir adı     kurulus(1281-1453) · yukselis(1453-1566) · duraklama(1566-1699)
              gerileme(1699-1792) · dagilma(1792-1908) · son(1908-1923)
```

Kullanıcının "1680-1700 tarihleri" dediği şey bu eksenin ikinci kademesi.
Türetildiği için tutarsızlık imkânsız ve yeni devir tanımı eklemek tek satır.

⚠️ Devir adları **Osmanlı merkezli.** Kapsam dünyaya açıldıkça bunlar
"osmanli-duraklama" gibi ön ekli olmalı, yoksa Ming hanedanı "duraklama"
etiketiyle işaretlenir ki anlamsızdır.

---

## 5. Kimlik sözlüğü — İLK yapılacak iş

Etiketleme kurulmadan önce **kimlikler tekilleştirilmeli.** Ölçülmüş vaka:
`ANTLASMALAR` Karlofça'nın tarafını `habsburg` yazıyor, `renkler.py` ve harita
`avusturya` kullanıyor. İki ayrı kimlikle aynı devlet iki kovaya düşer.

Yapılacak: `data/kimlikler.js` — tek doğruluk kaynağı.

```js
window.KIMLIKLER = {
  devlet: {
    "avusturya": { ad:"Avusturya (Habsburg)", esad:["habsburg","kutsal-roma"],
                   renk:"#...", f:"1282-01-01", t:"1918-11-11" },
    …
  },
  cografya: { "mora": { ad:"Mora", ust:"balkanlar" }, … },
  kisi:     { "mehmed4": { ad:"IV. Mehmed", tur:"padisah", f:"1642-01-02", t:"1693-01-06" }, … },
  devir:    { "duraklama": { ad:"Duraklama", f:"1566-09-06", t:"1699-01-26" }, … },
};
```

`esad` (eş ad) alanı geçişi acısız yapar: eski `habsburg` yazımı çalışmaya devam
eder, denetim onu `avusturya`ya eşler ve uyarır.

---

## 6. Uygulama sırası

| # | İş | Neden bu sırada |
|---|---|---|
| 1 | `data/kimlikler.js` — devlet kimliklerini tekilleştir | Diğer her adım buna dayanıyor |
| 2 | Coğrafya ağacını yaz (yukarıdaki taslak) | Yaprak/ata türetimi buna bağlı |
| 3 | `KISILER`e **`id` alanı ekle** (şu an yok!) | Kişi ekseni olmadan kurulamaz |
| 4 | `arac/uret_etiket.py` — türetme ve denetim betiği | Elle yazılanı doğrular, atayı ekler |
| 5 | `OLAYLAR.yer` serbest metnini `cografya` kimliğine çevir | 938 madde; yarı otomatik, elle gözden geçirilir |
| 6 | `OLAYLAR.kisiler` serbest metnini `kisi` kimliğine çevir | 924 madde; aynı yöntem |
| 7 | `OLAYLAR.devlet` alanını doldur | `ANTLASMALAR.taraf` örnek alınır |
| 8 | Arayüz: etikete tıklanınca çapraz liste | Veri bitmeden yapılmaz |

⚠️ **5 ve 6 otomatik yapılamaz, yarı otomatik yapılır.** "Hemedan" tek anlamlı
ama "Trablus" iki yer (Trablusgarp / Trablusşam), "Antakya" hem şehir hem sancak.
Betik önerir, insan onaylar; onaylanmayanlar listede kalır.

---

## 7. Denetim — sekizinci kontrol

Etiketleme kurulduğunda `denetle.py`'ye eklenecek:

1. **Tanımsız kimlik yok** — her etiket `kimlikler.js`'te tanımlı olmalı
2. **Anakronizm yok** — bir olay, o tarihte var olmayan devleti etiketlemesin
   (Karlofça'ya `almanya` yazılamaz, 1871'de kuruldu)
3. **Coğrafya ağacı tutarlı** — her yaprağın atası tanımlı, döngü yok
4. **Eksen karışması yok** — `venedik` coğrafya eksenine, `mora` devlet eksenine
   yazılamaz
5. **Yalnızlık yok** — bir olayın en az bir coğrafya ve bir devlet etiketi olsun

⚠️ 2. kural bu projede en çok işe yarayacak olan: hayalet devlet hatası
(1453'te bitmiş Bizans'ın 1537'ye kadar sürmesi) tam olarak bu sınıftandı ve
üç değişmezin hiçbiri onu göremiyordu.

---

## 8. Ne İÇİN yapılıyor

Etiketleme kozmetik değil, `YOL-HARITASI.md`'deki **beş index** ve `MIMARI.md
§6.5`'teki **devlet merkezli yükleme** bu altyapıya dayanıyor:

- **Devlet merkezli açılış** — "Osmanlı'yı aç" dendiğinde yalnız Osmanlı'nın
  ilgi alanı yüklenecek. O ilgi alanı elle yazılmaz, **etiket örtüşmesinden
  türetilir**: Osmanlı ile en çok ortak olay etiketi paylaşan devletler.
- **Beş index** (tarih · coğrafya · devlet · olay · yerleşim) aslında bu beş
  eksenin görünümleridir. Etiket olmadan index'ler birbirine bağlanamaz.
- Kullanıcının "karlofça denildiğinde tarafları etiketlenmiş olmalı" cümlesi
  tek bir ekran için değil, **bütün gezinme modeli** için.
