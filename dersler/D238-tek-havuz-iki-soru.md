# D238 — Tek havuz iki soruya hizmet ediyordu: süzgeç DOĞRU, yeniden kullanımı YANLIŞ

**27 Eylül 2026 · ODAK-0080 · YILDIRIM BAYEZIT**

## Ne oldu

Yeni bağlanan odak nöbetçisi (`arac/odak_olc.py` → `denetle_yayin.py`) ilk
koşusunda tek bir kayıt yakaladı:

```
kronoloji_dogu_afrika.js · 1897-01-01
"Somali-Habeşistan sınırını çizme teşebbüsü" · yer_id:"Ogaden"
→ sehirler havuzunda yok ⇒ kamera oraya GİTMİYOR
```

Ogaden atlasta **var**, koordinatı **var** (`lat 7.20 · lon 44.00`, kaynağı
kendi kaydında yazılı), ama `d:[]` — *"kasten sahipsiz bir bölge dolgusu."*
`js/app.js:3101` şu süzgeci uyguluyor:

```js
window.YERLESIMLER.filter(function (y) {
  return (y.d && y.d.length) || (y.v && y.v.length) || (y.s && y.s.length);
})
```

150 yerleşim bu süzgeçten düşüyor (119'u `tur:"bolge"`, 99'u `bos:"kabile"`)
ve **150'sinin de koordinatı var.**

## Kök sebep — ve dersin kendisi

Süzgeç **yanlış değil.** Sahiplik dönemi olmayan bir noktanın ediniliş
simgesi, etiketi, dizin satırı olmaz; süzgeç **İŞARET (marker)** havuzu için
tam doğrudur.

Kusur, o süzgecin çıktısının **ikinci bir soruya** yeniden kullanılmasında:

| havuz | sorusu | gerçek şartı |
|---|---|---|
| İŞARET | "burada işaretlenecek bir OLAY var mı?" | `d`/`v`/`s` ŞART |
| KAMERA | "bu adın KOORDİNATI ne?" | yalnız `lat`/`lon` |

`olayKonumu` (`app.js:11506`) ve `maddeOdakKutusu`nun `odak_yer` dalı
(`app.js:11720`) yalnız `ad`/`lat`/`lon` okur — sahiplik verisine **hiç
dokunmaz.** Yani süzgeç onlara **saf yan hasardır**: bir sorunun doğru
cevabı, ikinci soruya yanlış cevap olarak devralınmış.

📌 **Genel kural: bir havuzu ikinci bir soruya devralırken, o havuzun
süzgecinin BİRİNCİ sorunun süzgeci olduğunu hatırla.** Süzgeci okuyup
*"demek ki doğru havuz bu"* diye geçmek, süzgecin GEREKÇESİNİ okumamaktır.
Sorulacak soru *"bu havuz dolu mu"* değil, **"bu havuz benim soruma göre mi
süzülmüş"**.

## Çare — havuzu GENİŞLETMEK değil, AYIRMAK

İlk akla gelen çare `sehirler`i genişletmekti. Ölçüldü ve reddedildi:
`sehirler` **27 yerde** kullanılıyor ve çoğu işaret DOM'u (`.ekli`, `.ic`,
`getBoundingClientRect`), etiket öncelik/çakışma sıralaması, dizin
penceresinin `"sehirler"` sekmesi. Genişletmek 150 yeni işaret, 150 yeni
dizin satırı ve yeni etiket çakışması demekti — **bir KAMERA kusurunu
düzeltmek için ARAYÜZÜ bozmak.**

⇒ Doğru çare **ayrı bir ad→koordinat havuzu**: kamera ona bakar, `sehirler`
tek satırı bile değişmez. Şartname: `oturumlar/ODAK-MEKANIZMA-0080.md`.

## 🔴 Ve iki dürüstlük kaydı

**① Bu çare bugün 1 maddeyi düzeltiyor, 0 madde açıyor.** Ölçüldü: düşen bir
ada atıf yapan madde 1; ODAKSIZ maddelerin başlığında düşen ad geçen 0.
Gerekçe hacim DEĞİL: yedi kol şu anda dünya çapında ~1154 odak alanı yazıyor
ve düşen 150'nin 99'u çöl/bozkır `kabile` bölgesi — tam o kolların
coğrafyası. Çare inmezse tek çıkış `yer_kon` ile **koordinat kopyalamak**,
ve proje bunu tam bu alan için açıkça reddetmiş (`app.js:11940`: *"Koordinat
KOPYALANMADI — sınır verisi tek yerde durur"*). 150 yerde kopyalanmış
koordinat bakımı imkânsız bir borçtur. Yani bu bir hacim işi değil, `D234`ün
anlamında bir **sınıf kapatma** işidir.

**② Ölçümü GERÇEĞİN ÖNÜNDE düzeltmek denetimi kör eder.** Nöbetçinin
(`arac/odak_cozum.js`) havuzu bugün app.js'in süzgecini BİREBİR taklit
ediyor — kasten. Kapı, app.js'in **gerçeğini** ölçmelidir. Nöbetçiyi
`js/app.js`ten ÖNCE genişletmek kapıyı *"temiz"* dedirtir ama kamerayı
bozuk bırakır: **yanlış temiz.** Sıra pazarlığa açık değildir.

## Aynı aile

`D234` (çare sınıfa uygulanır, kayda değil) · `D219` (dosya listesi yalnız
`GIRDI_DOSYALARI`dan okunur — liste devralmak üç kez bayatladı) ·
`D235` (bir dizinin VAR OLMASI içinin dolu olması değildir) ·
`B9` (`0 bulundu` aletin ateşlendiğinin kanıtı değildir).
