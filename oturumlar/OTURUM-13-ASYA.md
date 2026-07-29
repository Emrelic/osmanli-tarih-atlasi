# Oturum 13 — Hindistan, Çin, Japonya ve Doğu Asya yerleşim katmanı

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-13-ASYA.md dosyasını oku ve içindeki görevi yap

---

## ⚠️ ÖNCE BUNU OKU: bu iş bugün HARİTADA GÖRÜNMEYECEK

`arac/uret_petek.py` haritayı `box(-12, 1.5, 62, 62)` kutusunda çiziyor.
**Doğu sınırı 62°D.** Senin çalışacağın coğrafya tamamen bunun dışında:

| Bölge | Boylam | Durum |
|---|---|---|
| Hindistan | 68-97°D | ❌ kutu dışı |
| Çin | 73-135°D | ❌ kutu dışı |
| Japonya | 129-146°D | ❌ kutu dışı |
| Güneydoğu Asya | 92-141°D | ❌ kutu dışı |

Yani yazacağın hiçbir nokta **şu an çizilmeyecek.** Bu bir hata değil, bilinçli
bir sıra: kutu ancak aradaki coğrafyada yeterli nokta yoğunluğu sağlandıktan
sonra doğuya açılabilir. Erken açılırsa mevcut peteklerin kenardakileri boş
coğrafyaya yayılır ve yanlış bilgi üretir (`MIMARI.md` §2).

**Bu görev bilinçli bir VERİ HAZIRLIĞIDIR.** Kutu doğuya açıldığında veri hazır
olsun diye yapılıyor. Eğer "hemen haritada görünen bir iş" isteniyorsa
`oturumlar/OTURUM-12-BATI-AVRUPA.md` doğru görevdir — orası kutunun içinde ve
bugün neredeyse boş (Britanya 3, Fransa 6, İskandinavya 7 nokta).

Bunu kabul ederek devam et; işini bitirdiğinde kullanıcıya da hatırlat.

---

## Önce oku
`CLAUDE.md` (kurallar, üç değişmez) · `VERI-YAPISI.md` (`yerlesimler.js`
şeması) · `MIMARI.md` §2 ve §6 · `data/devletler.js` (dünya devlet dizini,
212 kayıt — Çin hanedanları, Japonya, Hint sultanlıkları orada zaten var).

## Senin işin

**Hindistan, Çin, Japonya, Kore ve Güneydoğu Asya'nın yerleşim katmanını
kurmak.** Hedef **250-350 nokta**, bölge bölge:

| Bölge | Hedef | Örnek merkezler |
|---|---|---|
| Kuzey Hindistan | 50-70 | Delhi, Agra, Lahor, Multan, Benares, Patna, Kanpur |
| Dekken ve Güney Hindistan | 40-60 | Devagiri, Bîcâpur, Golkonda, Vijayanagara, Madras, Kalküta |
| Çin — kuzey ve orta | 60-80 | Pekin, Nankin, Xi'an, Luoyang, Kaifeng, Hangzhou, Suzhou |
| Çin — güney ve kıyı | 30-40 | Kanton, Quanzhou, Fuzhou, Ningbo, Makao |
| Japonya | 25-35 | Kyoto, Edo, Osaka, Nara, Kamakura, Nagasaki, Sakai |
| Kore | 12-18 | Kaesong, Seul (Hanyang), Pusan, Pyongyang |
| Güneydoğu Asya | 40-55 | Ayutthaya, Malakka, Majapahit, Thang Long, Pagan, Manila, Batavia |
| Tibet, Moğolistan | 10-15 | Lhasa, Karakurum, Urga |

**Kullanıcının notu doğru ve önemli:** Çin, Japonya ve Hindistan için 1288'de
bile **zengin ve güvenilir veri vardır** — bu coğrafya Amerika ya da Sahra altı
Afrika gibi değil. 1288'de Yuan hanedanı, Kamakura şogunluğu ve Delhi
Sultanlığı ayakta; şehirlerin çoğu bugün de duruyor.

## Yazabileceğin tek dosya

**`data/yerlesimler_asya.js`** — sen oluşturacaksın:

```js
window.YERLESIMLER_ASYA = [
{ ad:"Delhi", tur:"sehir", lat:28.644, lon:77.216, g:0, k:0,
    s:[{f:"1281-01-01",t:"1290-01-01",d:"delhi-memluk"}, …], d:[] },
];
```

**Dokunma:** `data/yerlesimler.js` ve diğer `yerlesimler_*.js` dosyaları
(başka oturumların) · `arac/` altındaki her şey · `data/devletler.js`,
`kisiler.js`, `savaslar.js`, `olaylar*.js` · `index.html`, `js/app.js` ·
kök `*.md`.

**Commit atma. `arac/uret_petek.py`'yi çalıştırma** — üretim ~2,5 saat sürüyor
ve senin noktaların zaten çizilmeyecek.

## ⚠️ Devlet kimlikleri — bu coğrafya için HİÇBİRİ YOK

`arac/renkler.py`'de tanımlı olmayan kimlik yazarsan bölge boyanmaz. Bu
coğrafyanın devletlerinin **hiçbiri** tanımlı değil: Yuan, Ming, Qing, Song,
Kamakura, Muromachi, Tokugawa, Goryeo, Joseon, Delhi sultanlıkları, Vijayanagara,
Babür, Maratha, Majapahit, Ayutthaya, Đại Việt, Pagan…

**EKLEME — LİSTELE.** `oturumlar/OTURUM-13-ILERLEME.md` dosyasına her devlet
için şunu yaz: kimlik önerisi (küçük harf + tire), tam ad, varlık aralığı,
merkez, kaynak. Entegrasyon oturumu renk tablosuna ekleyecek.

⚠️ Renkler komşuluk çizgesine göre dağıtılıyor (91 devlet ölçüldü, DSATUR ile
7 renk yetiyor; 10-12 kullanılıyor). Rastgele eklenen renk o dengeyi bozar.

**Kolaylık:** `data/devletler.js` bu devletlerin çoğunu **zaten taşıyor**
(212 kayıt, dünya kapsamı). Oradaki `id` alanlarını kimlik önerisi olarak
kullan — böylece dizin ile harita baştan aynı kimliği taşır.

## Sahneye çıkan ve silinen yerleşimler

Bu coğrafyada `kur:` ve `bit:` çok işleyecek: Edo 1603'te şogunluk merkezi
oldu, Kalküta 1690'da kuruldu, Batavia 1619'da, Vijayanagara 1565'te yıkıldı,
Karakurum terk edildi.

> ⚠️ Motor bugün `kur:` alanını **okumuyor** (bilinen borç, `MIMARI.md` §3.1).
> Yine de **yaz** — kutu açıldığında ve zaman dilimli Voronoi yapıldığında veri
> hazır olacak.

## Kaynak kuralı
Bu coğrafya TDV'nin kapsamadığı alan (Hint-İslam devletleri hariç: Delhi
sultanlıkları, Babür, Bahmenî, Gucerat için TDV birincil). Diğerleri için
**standart akademik referans yeterli.**

**Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01`.
**Ad yazımı:** Türkçe tarih yazımında yerleşik karşılık varsa onu kullan
(Pekin, Nankin, Kanton, Delhi, Lahor, Multan, Bombay). Yoksa yaygın Latin
yazımını al, parantezle özgün adı verebilirsin.

## Kendi kendini denetle
Kapsama aracı senin bölgende çalışmaz (kutu dışı). Kendi betiğinle:
- nokta karada mı — `veri-kaynak/ne_10m_land.geojson` kutu dışını kapsamıyor
  olabilir; kapsamıyorsa bunu raporla, koordinatları kaynaktan doğrula
- 3 km içinde mükerrer var mı
- her yerleşim, var olduğu her tarihte bir sahibe sahip mi (`kur:` sonrası)

```bash
py arac/denetle.py     # ana dosyayı bozmadığını gör (senin dosyan ayrı)
```

## Bitirdiğinde
Kaç nokta eklediğini, bölge dağılımını ve **eklenmesini istediğin devlet
kimliklerinin tam listesini** entegrasyon oturumuna bildir. Kutu sınırını da
hatırlat: bu veri, kutu doğuya açılana kadar haritada görünmeyecek.
**Commit etme.**
