# KRONO-MAGRIB-0929 — künye önerileri (M-5416 kural 3)

> `data/devletler.js`e DOKUNMADIM. Mağrib'in dört ülkesinde maddelerin **%99,6'sı** var olan
> künyelere bağlandı (231 maddeden 230'u): hafsi · tunus-ocagi · tunus-beyligi-fransiz ·
> cezayir-ocagi · abdulkadir · cezayir-fransiz · trablusgarp-ocagi · senusi · merini · sadi ·
> fas · (ikinci taraf olarak) ispanya · italya · ingiltere · fransa · fransa-cumhuriyet · abd ·
> rodos-sovalyeleri. Tek eksik aşağıda.

## K1 — `trablus-cumhuriyeti` (önerilen id)
| alan | değer |
|---|---|
| önerilen id | `trablus-cumhuriyeti` |
| ad | Trablus Cumhuriyeti (el-Cumhûriyye et-Tarâbulusiyye) |
| f: | `1919-01-01` — TDV yalnız YIL verir; gün **bulunamadı** |
| t: | **bulunamadı** — TDV *"kısa süre yaşayan"* der, bitiş yılı vermez |
| sınıf (D205) | ③ ardıl yapı — Trablusgarp vilâyeti (Uşi 1912) sonrası İtalyan işgali altında yerel cumhuriyet; ne `trablusgarp-ocagi`nin (t: 1911-10-09) genişletilmesi ne de `italya`nın parçası |
| kaynak | TDV `libya`: *"1919'da Mısrâte'de kısa süre yaşayan Trablus Cumhuriyeti'ne katkıda bulunanları oldu"* |
| bağladığı madde | 1 (`kronoloji_cok_libya.js` 1919-01-01 "Mısrâte'de kısa ömürlü Trablus Cumhuriyeti") |
| yer | Mısrâte — `yer_id:"Misrata"` (çözülüyor) |
⚠️ `t:` bulunamadığı için künyeyi açmadan önce TDV-dışı akademik kaynakla bitiş tarihi
ölçülmeli; bulunamazsa künye açılmasın, madde bugünkü hâliyle "künyesiz taraf" olarak konsola
basılır ve kaybolmaz (app.js cokTarafliKronolojiEkle). Uydurma `t:` yazılmamalı.

## Künye GÜNÜ düzeltmeleri (bilgi — künye paketinin işi)
TDV günlü olup künyede tutmayanlar `KRONO-MAGRIB-0929-DUZELTME.md` B3-B6 ve C'de:
`hafsi.t` 1574-09-13 → 1574-09-12 · `zeyyani.t` 1554 → 1553 · `rif-cumhuriyeti.f`
1921-09-18 → 1921-09-19 · `tunus-ocagi` 1705 maddesi → 1705-07-12 · `trablusgarp-ocagi`
1711/1835 maddeleri → 1711-07-29 / 1835-05-27.
