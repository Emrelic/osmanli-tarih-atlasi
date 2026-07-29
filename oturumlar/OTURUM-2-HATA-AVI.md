# Oturum 2 — Harita hata avı

Bu dosya, ayrı bir Claude Code oturumuna verilecek görev tanımıdır.
Yeni oturumu proje dizininde aç ve ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-2-HATA-AVI.md dosyasını oku ve içindeki görevi yap

Model: **Opus**. Bu iş çıkarım işidir; küçük model bulguyu üretemez.

---

## Senin işin

**Haritada yanlış olan şeyleri bulmak. Hiçbir şeyi düzeltmemek.**

Bulgularını `denetim/BULGULAR-<YYYY-AA-GG>.md` dosyasına yazarsın; düzeltmeyi
entegrasyon oturumu uygular. Sen düzeltmeye kalkarsan iki oturum aynı satırı ters
yönlerde değiştirir ve kayıp sessiz olur.

## Önce oku
`CLAUDE.md` (kurallar ve üç değişmez) · `MIMARI.md` (motor ve bilinen borç) ·
`VERI-YAPISI.md` (alan sözlüğü). Bunlar okunmadan üretilen bulgu, çoğu zaman
zaten bilinen ve kasten öyle bırakılmış bir şeyi "hata" diye rapor eder.

## Yazabileceğin tek yer
- `denetim/` altındaki kendi rapor dosyaların
- geçici denetim betiklerin (proje dizinine değil, scratchpad'e)

**Hiçbir veri dosyasına, `arac/uret_petek.py`'ye, `index.html`'e, `js/app.js`'e
dokunma. Commit atma. `arac/uret_petek.py`'yi ÇALIŞTIRMA** — 15 dakika sürer ve
entegrasyon oturumu koşturuyor olabilir; aynı anda iki üretim çıktıyı bozar.

---

## ⚠️ En önemli kural: kaynağa değil ÇIKTIYA bak

Bu projede üç denetim var (`CLAUDE.md` §3) ve üçü de `yerlesimler.js` ile
`olaylar*.js` üzerinde çalışır — yani **kaynak veriye**. Üçü de temiz çıkarken
haritanın yanlış olması mümkündür ve **bir kez oldu**:

> `uret_petek.py` içindeki `mp_koord` fonksiyonu, ~79 km²'den küçük her gövde
> parçasını çıktıdan atıyordu. Emilmeyi önlemek için eklenen ada noktalarının
> peteği üretiliyor ama **yazılmıyordu**: Patmos 34 km², Herke 28, Folegandros 32,
> Kimolos 36, İpsara 40, Sömbeki 58, Kaşot 66… Yaklaşık yirmi ada haritada hiç
> çizilmiyordu. Veri doğruydu; kayıp üretim aşamasındaydı.

Bu yüzden asıl av sahan **üretilmiş dosyalardır**: `data/donemler.js`,
`data/devletler_harita.js`, `data/bolgeler.js`. Sorulacak soru şudur:

**"Kaynakta yazan şey çıktıda gerçekten var mı?"**

### Çalışan yöntem: nokta sorgusu
Üretilmiş geometriyi noktadan sorgula — *"şu tarihte şu koordinat kimin rengiyle
boyalı?"* — ve beklenenle karşılaştır. Bu yöntem yukarıdaki hatayı buldu.

```js
// data/donemler.js  → window.DONEMLER: her dönemde f, t, o (Osmanlı MultiPolygon),
//                     v (tâbi MultiPolygon), b (bbox), ao (alan)
// data/devletler_harita.js → window.DEVLET_HARITA: [{id, ad, renk, dnm:[{f,t,g}]}]
// data/yerlesimler.js      → window.YERLESIMLER
// Nokta-poligon testi yaz, tarih+koordinat listesini gez, beklenenle karşılaştır.
```

Kendi test listeni kur: her devlet için en az bir başkent, her adanın kendisi, her
sınır bölgesi, el değiştirme tarihlerinin bir gün öncesi ve bir gün sonrası.

---

## Aranacak hata sınıfları

Aşağıdakiler **gerçekleşmiş** hatalardır. Her biri bir sınıftır; sınıfın başka
örneklerini ara.

1. **Emilme / sahte sahiplenme** — noktası olmayan bölge en yakın peteğe emilir ve
   o peteğin sahibiyle boyanır. *Sardinya 1533'te Osmanlı göründü (Annaba'dan);
   Kefalonya 1684'e kadar Osmanlı kaldı (Ayamavra'dan); Brač-Hvar-Korčula 1483'ten
   itibaren Osmanlı oldu (Mostar'dan).* **Nokta yoğunluğunun seyrek olduğu her yer
   şüphelidir.**
2. **Üretim aşamasında kayıp** — kaynakta var, çıktıda yok. Yukarıdaki ada olayı.
   Filtreler, eşikler, `simplify` çağrıları ve `continue` satırları şüphelidir.
3. **Koordinat kara maskesinin dışında** — nokta denizde ya da gölde duruyor.
   *Ölçüldü: 19 kıyı yerleşimi ve Ohri (göl içinde).* Bölge doğru boyanıyor,
   yalnız işaret suda. Listesi genişletilebilir.
4. **Anakronik idari bağ** — `m` alanı zamansız. *Ölçüldü: 311 yerleşim-tarih
   çiftinde yerleşim ile bağlı olduğu merkez farklı devletlerin elinde; 1300'de
   Söğüt Osmanlı ama `m:"Bursa"` ve Bursa Bizans.* Bilinen borç (`MIMARI.md` §3.4)
   ama **hangi örneklerin görsel sonuç doğurduğu bilinmiyor** — onu bul.
5. **Zaman dilimsiz Voronoi** — Voronoi bütün tarih için bir kez hesaplanıyor;
   sonradan kurulan şehrin hücresi erken haritada da yer kaplıyor. *`kur:` alanı
   olan yerleşimleri bul, kuruluşundan önceki bir tarihte peteğinin bölgeyi
   bölüp bölmediğine bak.* Bilinen borç (`MIMARI.md` §3.1); **görsel etkisini ölç.**
6. **Sıfır uzunluklu ya da ters dönem** — *Tebriz `{f:"1514-09-06",t:"1514-09-06"}`
   yüzünden Çaldıran'dan sonra hiç Osmanlı görünmedi.*
7. **Yakın mükerrer yerleşim** — *Varat/Varad 1 km arayla iki kayıt; Afyon ve
   Karahisâr-ı Sâhib 100 m arayla çelişen zaman çizgileriyle.* 3 km eşiğiyle tara.
8. **Renk çakışması** — aynı sahnede yan yana duran iki devletin rengi birbirine
   çok yakın olmamalı. Son turda **13 yeni devlet rengi** birden eklendi ve gözle
   bakılmadı. Yöntem: bir tarih için sahnedeki devletleri çıkar, sınırdaş olanların
   renk mesafesini ölç, eşiğin altındakileri raporla. Kırmızı tonları Osmanlı
   ailesine ayrılmıştır; yabancı devlette kırmızı çıkarsa bu da bulgudur.
9. **Enklav ve koridor** — bir yer alınmış ama ona giden yol alınmamış görünüyor.
   *Kullanıcının şikâyeti: "Amasya'nın 1393'te alınması uçakla mı yapıldı".*
   Osmanlı gövdesinin bağlantılı bileşen sayısını dönem dönem ölç; ani artışlar
   şüphelidir.
10. **Yıl başına yaslanmış tarihler** — `f:"1693-01-01"` gibi. Bir kısmı kasten
    (kaynakta gün yok), bir kısmı ihmal. Ayırt edilebilenleri raporla.

---

## Rapor biçimi

`denetim/BULGULAR-<YYYY-AA-GG>.md`, en ağır bulgu en üstte:

```markdown
## B-1 · [ağırlık: yüksek] Kıbrıs 1489-1571 arasında Venedik yerine Osmanlı boyalı

**Kanıt:** 1520-06-15 tarihinde (33.36, 35.17) noktası `OSMANLI` dönüyor;
`yerlesimler.js`'te Lefkoşa aynı tarihte `venedik`.
**Nasıl tekrarlanır:** `node scratchpad/nokta.js 1520-06-15 33.36 35.17`
**Muhtemel sebep:** Girne'nin `d:` dönemi 1489'da başlıyor, `s:` ile çakışıyor.
**Önerilen düzeltme:** Girne `d:` başlangıcı 1570-09-17 olmalı.
**Etkilenen alan:** ~9 500 km², 82 yıl.
```

Kurallar:
- **Her bulgu tekrarlanabilir olmalı** — komut ya da tam koordinat+tarih ver.
- **Ağırlık ver:** yüksek (yanlış bilgi gösteriyor) · orta (eksik gösteriyor) ·
  düşük (kozmetik).
- **Emin olmadığını "şüpheli" diye ayır.** Yanlış alarm, bulunmamış hatadan pahalıdır:
  entegrasyon oturumu her bulguyu doğrulamak zorunda.
- **Zaten bilinen borçları hata diye raporlama** — `MIMARI.md` §3'teki dört sorun,
  §7'deki kabul edilmiş sapmalar ve kasten sahipsiz bırakılmış 29 nokta biliniyor.
  Ama bunların **ölçülmemiş görsel sonuçlarını** raporlamak değerlidir.

## Bitirdiğinde
Kullanıcıya kaç bulgu bulduğunu, ağırlıklarına göre dağılımını ve en ağır üçünü
tek cümleyle söyle. **Commit etme.**
