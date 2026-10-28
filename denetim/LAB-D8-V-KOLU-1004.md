# LAB-D8-V-KOLU-1004 — Değişmez 8 `v:` (tâbi) kolunu görüyor mu?

> Görev: YILDIRIM BAYEZIT, 4 Ekim 2026 (tetik: KASA'nın `LAB-D8-KOR-KOK` ① itirazı).
> Denetleyici: LAB IRTIBAT. **Yalnız ölçüm.** Ortam: yerel `lab-1004` = `main 0e22a060`;
> her betik çıktısı `HEAD = 0e22a060 … HEAD_SONRA = 0e22a060` basıyor (`d8_v.py`, `d8_v2.py`,
> oturum karalama alanı). Gövde: koşu öncesi (`kodla.py coz-c`, 0e22a060).

## ① KODDAN — D8 hangi alanları okuyor
| yer | okunan | kimlik |
|---|---|---|
| gövde (`_D8Govde`, `denetle.py:4298-4304`) | `devletler_harita.js` `DEVLET_HARITA[].dnm` · `donemler.js` `DONEMLER[].o` / `.v` | `.o` → **`OSMANLI`** · `.v` → **`OSM-TABI`** (sabit) |
| yerleşim sahipliği (`_d8_sahip`, `:4373-4383`) | `s:` → `d` · `v:` → **`"OSM-TABI"`** · `d:` → `"OSMANLI"` · `isg:` **okunmaz** | |
| atıf dizini (`:4430-4440`) | `("s", None)` · `("d","OSMANLI")` · `("v","OSM-TABI")` | |
| taraf eşleme (`anahtar`, `:4422-4425`) | `osmanli`→`OSMANLI`, öteki → `harita:` ya da id | `v:`'nin `kid` alanı **hiçbir yerde okunmuyor** |

⇒ **D8 `v:` kolunu OKUYOR, ama tâbi devletin kimliğiyle değil: bütün `v:` toprağı tek bir
`OSM-TABI` gövdesidir.** D hattının tarafı tâbi devletin kendi kimliğiyse (`misir-kavalali`,
`tunus-beyligi-fransiz`, `bogdan` …) `anahtar(taraf)` hiçbir zaman `OSM-TABI` olmaz ⇒ o
yaka **yapısal olarak** boş kalır. D kayıtlarında taraf olarak `OSM-TABI` yazan kayıt: **0**.

## ② VERİ — `v:` kolu
```
v: dönemi 556 · v:'si olan yerleşim 416 · kid'li 478 · kidsiz 78 · farklı kid 29
en sık kid: misir-kavalali 171 · cezayir-ocagi 41 · trablusgarp-ocagi 39 · tunus-ocagi 35 ·
            tunus-beyligi-fransiz 35 · kirim 25 · eflak 19 · romanya 17 · konstantin-beyligi 16 · bogdan 14
```
🔴 **KASA haklı, benim `LAB-D8-KOR-KOK §2 ①` sayım YANLIŞTI:** "7 kimliğin `s:`/`isg:`
yerleşimi 0" doğruydu ama soru yanlış kurulmuştu — `v:` kolu sayılmamıştı.
`tunus-beyligi-fransiz` **35** `v:` dönemi (Tunus, Kayrevan, Gabes, Sfaks, Cerbe, Kerkene,
Benzert … 1881-05-12→1923-10-29) · `misir-kavalali` **171** (Kahire/İskenderiye 1805→1914,
Hartum 1821→1885, Halep/Şam/Adana 1832→1841, Mora 1825→1828 …). İkisi de haritada
**boyanıyor** (OSM-TABI, açık renk) ama D8 onları göremiyor.

## ③ 78 kör hattın YENİ sınıflaması
Her eksik (hat, gün, taraf) satırı için o gün tarafın noktaları sayıldı (`s:` ile kaç,
`v:` `kid` ile kaç — `harita:` eşlemesi uygulanarak):
```
eksik taraf satırı 189:  S (s: ile boyalı) 130 · 0 (o gün hiç nokta) 40 ·
                         V (YALNIZ v: ile boyalı) 13 · SV (karışık) 6
V satırlarının tarafı:   bogdan 4 · misir-kavalali 4 · tunus-beyligi-fransiz 4 · romanya 1
eski sebep × yeni:       ① 40 satır → 32 gerçekten noktasız + 8 V
                         ④a 11 → 6 noktasız + 5 V        ④c 140 → 130 S + 6 SV + 2 noktasız
```
**Hat düzeyinde (tek kök):**
```
                                         eski   YENİ    D/E/F   C
④c gövde var, KUTUDA yok (nokta uzak)     52     52       28    24
①  gövde hiç yok (o gün nokta yok)        16     12        9     3
⑥  v:-BOYALI TARAF — D8 yapısal kör        —      6        5     1    🆕
④a o gün gövde yok                         7      5        5     0
⑤  iki taraf aynı anahtar                  3      3        3     0
                                          78     78       50    28
```
⑥ hatları: `d1812-ru-bg-prut` · `d1856-ru-bg-prut-kuzey` (bogdan) · `d1899-sudan-misir-kavalali`
· `d1906-filistin-misir-hidivlik` (misir-kavalali) · `d1910-libya-tunus-osmanli` ·
`d1923-libya-tunus` (tunus-beyligi-fransiz).
📌 `bogdan`ın ④a'sı (gövdesi yalnız 1448→1456) da çözüldü: 1456 sonrası Boğdan `v:` ile
boyanıyor ⇒ gövdesi `OSM-TABI`de, `bogdan` adıyla yok.

## ④ Genel soru — "v: ile boyanan kaç nokta var, D8 kaçını görüyor"
- **Taraf olarak:** D8'in `v:` toprağını bir D hattının yakasına eşlediği durum **0**
  (556 dönemin hepsi `OSM-TABI`ye gider, hiçbir hat tarafı `OSM-TABI` değil).
- **Ölçülen hatlarda:** ölçülen 1462 (hat, gün, taraf) satırının **6**'sında tarafın
  o gün `v:` noktası da var ve `s:` noktası da var — hepsi `bulgaristan-prensligi`
  (`g3-bg-ro-tuna-p1/p2/p3`, 1878–1908; `s:` 3–6 nokta · `v:` 7 nokta). Bunlarda D8
  yalnız `s:` gövdesini ölçüyor; `v:` payı (7 nokta) **görünmüyor** ⇒ ölçüm KISMÎ.
- ⇒ Etki bugünkü D hatları evreninde **sınırlı**: ⑥ 6 tam kör + 6 karışık-kör satır + 6
  kısmî ölçülen satır. Sebep: D hatları çoğunlukla `s:` devletleri arasında çizilmiş;
  tâbi devletin kendi sınırı için D hattı az. Bu, "`v:` katmanının sınır aşımı ölçülüyor"
  demek **değildir** — tâbi sınırları için D hattı **yazılmamış**, D8 o yüzden sormuyor
  (yazılmamış hat sayısı **ölçülemedi**: D hattı olmayan sınır sayılamaz).

## Bulunamayan
- Tâbi devletlerin sınırları için kaç D hattı yazılması gerektiği — **ölçülemedi**.
- `v:` kidsiz 78 dönemin hangi tâbiye ait olduğu — ölçülmedi.
- D8'in `OSM-TABI`yi `kid` ile ayırması gerekip gerekmediği (motor `v:kid`'i gövdede ayrı
  çiziyor mu?) — `donemler.js` `.v` parçaları kimliksiz geliyor; motorun kendi ayrımı
  **ölçülmedi**.

---

## ⑤ ÖN ÖLÇÜM — KOŞU ÖNCESİ `donemler.js` `.v` kimlik taşıyor mu? (HEAD `0e22a060`)
Koşu sonrası karşılaştırmanın TABANI (koordinatörün ④ sorusu, taze çıktı gelmeden önce):
```
DONEMLER 617 · v alanı dolu 561 · v öğeleri 10 258 — hepsi int (parça indeksi)  ⇒ v'de KİMLİK YOK
yanında `vl` var (561 dönemde): 5 608 öğe, her biri {k: etiket metni, s: statü, p: [lon,lat]}
   farklı k: 55 · k → yerleşim v:k → kid TEKİL: 4 181/5 608 (%75) · k yerleşimde yok 744 · kidsiz 683 · çok kid 0
   len(v) == len(vl): yalnız 79/561 dönem ⇒ vl parça başına DEĞİL
örneklem 60 dönem (seed 1004), 1 104 v parçası:
   içinde vl noktası YOK 754 (%68) · tek etiket 350 (%32) · çok etiket 0
   vl.p → yerleşim koordinatı eşleşmesi: 0/569 ⇒ p bir ETİKET konumu, yerleşim değil
```
⇒ **Koşu öncesi çıktıda tâbi kimliği PARÇA düzeyinde yok.** Etiket metninden `kid` %75
oranında geri kurulabilir, ama parçaların %68'i hiçbir etikete bağlanamıyor ⇒ D8'e `v:`
kolu bu çıktıyla **güvenilir yazılamaz** (koordinatörün ⑥ "MOTOR ÇIKTISINDA BİLGİ YOK"
hükmü koşu öncesi çıktı için ölçümle doğrulandı). Koşu sonrası aynı ölçüm tekrarlanacak.
