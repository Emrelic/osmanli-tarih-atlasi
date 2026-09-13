# ÇEKİRDEK FETİH MADDELERİNDEN KAYNAKLI HALKA · HALKA-FETIH · 13 Eylül 2026

> Emre kararı (koordinatör önerisi kabul): çekirdek Osmanlı kronolojisinde (`data/olaylar*.js`, kuyruk
> `kronoloji*` DEĞİL) fetih devleti adıyla anmayan maddeler ("X'in fethi", "X alındı") OSMANLI sayılabilir —
> AYRI örneklem ve aynı ≥%95 kapısıyla. Önceki kural: `HALKA-KRONOLOJI-TURETME-0913.md` (a)–(e);
> burada yalnız (b) bu sınıf için değişiyor.

## ⓪ ÖNGÖRÜ (ölçümden önce yazıldı · D022)
Ölçümden önce görülen tek sayı: çekirdek 1355 madde, `k:fetih` ∨ `etiket:toprak-kazanc` 378 (sınıfın ham üst sınırı).
```
Ö1  (a)(c)(d)(e) + yeni (b) sonrası yazılabilir tanıklık: 378 ham adaydan %35-55 → ~130-210.
    Başlıca ret: yer adı cümlecikte yok · kaynak atlas/veri atfı · gün başka olaya bağlı · bölge noktası.
Ö2  kronoloji dosyasıyla aynı yer+gün+devlet mükerreri: 15-30 (o dosyanın osmanli 27 kaydının çoğu çekirdekten).
Ö3  ilk örneklem isabeti ~%85-90; %95 ilk turda TUTMAZ. Beklenen yanlış cinsleri:
    (i) örtülü yabancı özne (özne bir kişi adı: "Timur", "Uzun Hasan" …; "Osmanlı" hiç geçmiyor) ·
    (ii) geri alma/kalıcı olmayan ele geçirme (kısa süreli işgal, sonra kayıp aynı madde içinde) ·
    (iii) tâbi/vergi ilişkisinin doğrudan fetih gibi okunması · (iv) gün = sefer/kuşatma başlangıcı.
Ö4  en az iki sıkılaştırma turu; en sonunda kapı TUTAR (sınıf başlık kalıbı tekdüze: "X'in fethi").
Ö5  yüzyıl dağılımı 15.-16. yy ağırlıklı (toplamın ≥%55'i).
Ö6  mazeretli öngörü: Ö3 elle okuma ölçütüne bağlı — ölçüt sabit: "madde metni bu yerin bu tarihte (verilen
    hassasiyetle) OSMANLI eline geçtiğini AÇIKÇA ya da çekirdek fetih kalıbıyla yabancı özne OLMADAN söylüyor mu;
    kesinlik doğru mu". Sonradan gevşetilmez.
```

> ÖLÇÜM BÖLÜMLERİ — öngörüden SONRA yazıldı.

```
YAZILAN   data/kaynakli_halka_fetih.js (59 kayıt · 🤖 üretilmiş) · bu rapor ·
          denetim/ARAC-HALKA-FETIH-{TURET,HUKUM,KIYAS}-0913.js
OKUNAN    data/olaylar*.js (çekirdek; kuyruk kronoloji* YALNIZ TURET-0913 yükleyicisi okuduğu için belleğe girdi, sınıfa GİRMEDİ) ·
          devletler.js · yerleşim havuzu (ad çözümü + tur:bolge; dönemler YALNIZ ⑤ atlas kıyasında) ·
          data/kaynakli_halka_{kronoloji,ferhatpasa,tekil}.js (mükerrer + kıyas)
DOKUNULMAYAN  js/app.js (liste satırı "kaynakli_halka_fetih" koordinatör tarafından ZATEN eklenmiş) · olaylar/kronoloji/yerleşim/motor/künye
COMMIT    YOK
```

## ① ENVANTER — sınıf büyüklüğü
```
çekirdek madde 1355 → k:fetih ∨ etiket:toprak-kazanc 378
   k: fetih 272 · savas 28 · antlasma 23 · kurulus 13 · siyaset 9 · undefined 8 · idari 5 · kayip 4 · vassal 4 · diger 3 · …
   ⇒ FT1 sonrası sınıf = k:"fetih" 272 (etiket-yalnız 106 dışarıda)
```

## ② KURAL (son hâli · `ARAC-HALKA-FETIH-TURET-0913.js`)
**(a)(c)(d)(e) DEĞİŞMEDİ** — `ARAC-HALKA-KRONOLOJI-TURET-0913.js`in ①-⑥ bölümü **kaynak metninden eval ediliyor** (kopya yok);
madde düzeyi S12-S21 sınavları ⑦ döngüsünden ifade ifade aktarıldı.
**(b) bu sınıf için şununla değişti:**
```
B1  dosya çekirdek (data/olaylar*)                FT1 k:"fetih" (etiket toprak-kazanc TEK BAŞINA yetmez)
B3  eski (b) aleti hiçbir b/d cümleciğinde Osmanlı dışı kazanan bulmuyor; birden çok kazanan / kazanan=kaybeden yok
B4  Osmanlı dışı aktör (sözlük kökleri + halklar + hükümdar/isyancı adları) ele geçirme fiili taşıyan cümlecikte ÖZNE değil
    (yalın/çoğul · genitif+eline/hâkimiyetine · FT6 genitif+ad-fiil "X'in … alması/işgali" · datif+geçti)
    ayrılma/nesne/bulunma hâli, "elindeki/karşı/üzerine" ⇒ özne SAYILMAZ
B5  başlık kayıp/sefer/akın/kuşatma/isyan/tahliye/iade değil · etiket toprak-kayıp yok · k kayıp/sefer/kuşatma/isyan değil
FT2 1805 sonrası metinde Kavalalı/Mehmed Ali/İbrâhim Paşa/Mısır kuvvetleri/"Kahire'dir" ⇒ ATLA (Osmanlı adına mı karşı mı ayırt edilemiyor)
FT3 tanıklık cümleciğinde yer adı, parantez atıldıktan sonra da polity kelimesine (Sultanlığı · banatlığı · voyvodalığı …) bitişik değil
FT4 cümlecik DAR fetih fiili taşıyor (fethi · ele geçir · zapt · teslim · alındı · düştü · ilhak · geri al · idaresine gir …)
    ve vazgeçme/düşünme/"yerinde bırakıldı"/tâbiiyet/haraca bağlama/bîat anlatmıyor
FT5 `gun` mevsim ("kışı") ⇒ ATLA
FT7 başlık "<yer>'e (ilk) girişi" ya da metin "tam kontrolü anlamına gelmiyordu" ⇒ ATLA
Tanıklık cümleciği: eski cumleSina (a)(e)'yi geçip (b)'de "kazanan devlet açık değil" ile duran YA DA osmanli'yi açık bulan cümlecik.
MÜKERRER: data/kaynakli_halka_kronoloji.js ile aynı yer + aynı tarih + osmanli ⇒ yazılmadı (sayıldı).
```

### Huni (son koşu)
```
378 → B5 başlık/k 219 → (a) yer_id tek 216 → (c) kaynak 210 → (d)(e) madde 156 → (a)(e) cümlecik + B3 89
→ B4 yabancı özne yok 66 → kronoloji mükerreri değil 59
```
Başlıca ret: FT1 k fetih değil 106 · yer adı cümlecikte yok 28 · B4 yabancı özne 23 · B5 başlık 22 · ad dizisi 20 ·
gun belirsizlik 18 · gun iki yıl 15 · FT2 Kavalalı 14 · fiil yok 11 · FT7 9 · gün başka olaya bağlı 8.
**Kronoloji dosyasıyla mükerrer: 7 atlandı** (aynı yer+gün+osmanli) · aynı yer+yıl ama farklı gün 1 yazıldı (Bağdat, aşağıda).

## ③ İSABET — elle okuma (`ARAC-HALKA-FETIH-HUKUM-0913.js`; mulberry32 tohum 20260913, AYRI havuz)
| tur | havuz | n | yanlış | isabet | ne öğretti |
|---|---|---|---|---|---|
| 1 | 78 | 50 | 10 | **%80,0** | k savas/siyaset/vassal (Napolyon İskenderiye · Mekke bîatı · Zeta tâbiiyeti) · Kavalalı (Şam 1832 TERS yön · Kordofan · Tripoliçe) · parantezli devlet adı (Sennâr Sultanlığı) · alıntı ele geçirme değil (Cetinje "yerinde bırakıldı") · genitif özne (Şerif Gālib) · "1390 kışı" |
| 2 | 62 | 50 | 2 | **%96,0** | "fetheden Kahire'dir" (Dongola) · "Srebrenik banatlığı" |
| 3 | 60 | **60 (SAYIM)** | 1 | **%98,3** | Kahire 1517 "ilk girişi … tam kontrolü anlamına gelmiyordu" |
| **4 (SON)** | **59** | **59 (SAYIM)** | 0 | **%100** | FT7 ilk yazımı Foça 1465'i (doğru) düşürdü ⇒ FT7b daraltıldı; son dosya = tur 3'ün 59 doğrusu, yeni kayıt 0, düşen 0 (aletle sınandı) |

- **%95 kapısı:** tur 2 (%96,0), tur 3 sayımı (%98,3) ve son sayım (%100) üstünde. Dosya kapıdan sonra yazıldı.
- ⚠️ **AYAR SIZINTISI:** 59 kaydın 54'ü tur 1-2 örneklemlerinde okundu ve kural o turların hükümleriyle sıkılaştırıldı.
  Ayar sırasında hiç görülmeyip ilk kez tur 3 sayımında okunan kayıt **6** (Vidin 1396 · Antalya 1423 · Akçahisar 1478 ·
  Kemah 1515 · Çuha Adası 1715 · Kahire 1517): **5/6 doğru**, ve yanlış olan (Kahire) FT7'yi doğurdu. ⇒ Ayardan bağımsız
  ölçüm n=6 — küçük bir hata oranını ayırt edemez. Kural dondurulup yeni tohumla, veri büyüdükçe tekrar ölçülmeli.
- Ölçüt **madde metnine** karşıydı. Kaynak gövdesi OKUNMADI: isabet **"madde doğru okundu"** demektir, **"madde doğru"** değil.

Şüphe notu (yanlış SAYILMADI):
- `hf-ibrim-1555`: madde 1555; `CLAUDE.md §3.5.1` TDV sancak 1573 anıyor.
- `hf-dir-iye-1818`: ele geçiren İbrâhim Paşa (Kavalalı); metin adını anmadığı için FT2 yakalamadı.
- `hf-antalya-1423`: gövde "kuşatmasıyla son buldu"; ele geçirme başlıkta.
- `hf-mardin-1517`: şehir Ekim 1515'te alınmış; 1517 kalenin teslimi.
- `hf-cuha-adasi-1715`: 1718'de geri verildi (nokta tanıklık, sorun değil).
- `hf-yanikkale-1594` (27 Eylül) · `hf-cehrin-1678` (19 Temmuz): madde günü yaygın yazımdan farklı — kaynak okunmadı.

### Öngörü sınavı
```
Ö1 130-210 tanıklık            ÇÜRÜDÜ — 59. En büyük ret FT1 (106): etiket toprak-kazanc'ın fetih demediği öngörülmedi
Ö2 mükerrer 15-30              ÇÜRÜDÜ — 7 (son) / 12 (tur 1). Kronoloji dosyasının osmanli kayıtlarının çoğu KUYRUKTAN
Ö3 ilk tur %85-90, dört cins   YARISI TUTTU — %95 tutmadı ama %80, altında. (i) yabancı özne TUTTU (Napolyon, Şerif, Kavalalı) ·
                                (ii) kalıcı olmayan TUTMADI (hiç yanlış çıkmadı) · (iii) tâbiiyet TUTTU (Zeta, Hicaz) ·
                                (iv) sefer günü TUTMADI. Öngörülmeyen: Kavalalı TERS yön (Şam 1832), parantezli devlet adı, giriş≠fetih
Ö4 ≥2 sıkılaştırma, kapı tutar  TUTTU — 3 tur + 1 daraltma
Ö5 15.-16. yy ≥%55              ÇÜRÜDÜ — 30/59 = %50,8
```

## ④ ÜRETİLEN — `data/kaynakli_halka_fetih.js`
```
59 kayıt · hepsi NOKTA · devlet osmanli 59 · tur yazılmadı · kesinlik gün 35 · ay 9 · yıl 15 ·
başlık yolu 53 · gövde yolu 6 · kaynak TDV slug 59/59
kaynak.alinti = madde cümleciği · alinti_ozet:true · alinti_kaynagi:"kronoloji maddesi (b|d) — madde metni, kaynağın cümlesi değil" ·
rapor = dosya · t · b · not: "kazanan adıyla geçmiyor; Emre kararı gereği OSMANLI sayıldı"
```
**Yüzyıl:** 13. yy 1 · 14. 11 · 15. 10 · 16. 20 · 17. 5 · 18. 8 · 19. 2 · 20. 2

**Sınav** (`ARAC-HALKA-SINA-0913.js`, dosya app.js listesinde): havuz 189 (ferhatpasa 50 · tekil 3 · kronoloji 77 · **fetih 59**) ·
**0 hata · 0 uyarı** · iki yönlü 6/6 · pencere birim 5/5 · kesit 1595-06-15: 15 aktif · 13 halka · çelişki 0 (önceki 13 halka
DEĞİŞMEDİ: 1595'te fetih kaydı yok) · 1465-06-15: Foça 1 halka.

## ⑤ ÇELİŞKİ ve ATLAS ADAYI (`ARAC-HALKA-FETIH-KIYAS-0913.js`; düzeltme YAPILMADI)
### Mevcut halkalarla (ferhatpasa · tekil · kronoloji)
- Aynı yer, örtüşen pencere, **farklı devlet: 0**.
- Aynı yer, aynı devlet, örtüşen: **Tebriz 1585** (fp-tebriz-tdv 25 Eylül 1585→ ile tutarlı) · **Bakü 1583** (fp-baku-iranica 1579-1607 ile tutarlı).
- 🟡 **Bakü:** madde "1583 alındı"; tohum `fp-baku-tdv` 1584'ten başlıyor — aynı devlet, başlangıç 1 yıl farklı (örtüşmüyor).
- 🟡 **Bağdat 1638:** `hf-bagdat-1638` 24 Aralık (olaylar_ek5 "Bağdat'ın geri fethi", kaynak murad-iv) ile
  `kr-bagdat-osmanli-1638` 25 Aralık — **aynı olay, iki çekirdek madde, bir gün farklı.** Mükerrer kuralı (aynı gün) yakalamadı; iki halka yan yana
  çizilir (aynı devlet ⇒ tek halka). Kronoloji maddesi adayı.
- Kalan 32 aynı-yer ilişkisi sıralı el değiştirme (örtüşme yok): Selanik 1423 Venedik→1430 Osmanlı · Sakız 1694 Venedik→1695 Osmanlı ·
  Anabolu/Modon 1686 Venedik→1715 Osmanlı · Edirne 1913-03 Bulgar→1913-07 Osmanlı · Gelibolu 1354 Osmanlı→1366 Bizans · Bağdat 1623 Safevî→1638 …

### Atlas dolgusuyla — tanıklık penceresinin son günü (atlas referans değildir; liste yalnız aday)
**1 / 59:** `Dir'iye (Necid)` 1818-09-09 — atlas **tâbi** (`v:`) boyuyor, tanıklık `tur` yazmadığı için doğrudan halka (3 px) çiziliyor.
Aday tür farkı; ele geçiren Kavalalı ordusu (şüphe notu).
⚠️ 58/59 uyuşma **döngüsel beklentidir**: çekirdek madde ile atlas dönemi `Değişmez 2` senkronuyla aynı günlere bağlı. Bu kıyas
atlasın bu maddelerle **tutarlı** olduğunu gösterir, **doğru** olduğunu değil.

## ⑥ YAPILMAYANLAR
- Kaynak gövdeleri okunmadı; alıntılar madde metni (D104 · D107 "okumadım").
- Etiket toprak-kazanc'lı ama `k` fetih olmayan 106 madde alınmadı (FT1). İçlerinde gerçek fetih olanlar var; ayrı sınıf ister.
- Kavalalı dönemi (1805+) 14 madde alınmadı (FT2): Osmanlı adına mı karşı mı metinden ayırt edilemiyor (Şam 1832 TERS çıktı).
- B4 yabancı özne süzgeci geniş: 23 ret; Trabzon 1461 · Niş 1386 · Midilli 1462 gibi muhtemel doğrular yalnız metinde
  kaybeden adı yalın hâlde geçtiği için düştü. Daraltılırsa ayrı örneklem ister.
- Aralık yazılmadı; `tur` yazılmadı. Dir'iye tâbi/doğrudan ayrımı açık.
- Ayardan bağımsız isabet n=6. Görsel sınav yapılmadı. `denetle_yayin.py` koşulmadı (üretim aktif).
