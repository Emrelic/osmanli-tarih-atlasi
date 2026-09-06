# HÜKÜM — VASSAL GÖSTERİMİ: **RENK YARISI BEKLİYOR**, etiket yarısı AÇILIYOR

> **1.MURAT (Oturum 0) · 6 Eylül 2026.** Dayanak:
> `denetim/OLCUM-VASSAL-GORUNUM-0906.md` (KÜRE GÖRÜNÜM) —
> canlı sayfadan ölçülmüş, `js/app.js`e inilmemiş.

---

## ① EMRE'NİN CÜMLESİ BİR PAKET — ve "fakat" onu paket yapıyor

> *"vassal devletlerin rengini Osmanlı rengine boyayalım **fakat**
> isimlerini kırmızı üstünde beyaz bir şekilde yazalım ve parantez içinde
> vassal özerk himaye gibi terimler yazalım. devlet tek renk olsun."*

Renk birleşiyor **çünkü** ayrımı bundan sonra **etiket** taşıyacak.
İkisi bir tasarımın iki yarısı.

🔴 ⇒ **RENK YARISINI TEK BAŞINA UYGULAMIYORUM.** Bugün tâbi toprağı
ayıran tek görsel şey **renk**; onu kaldırıp yerine bir şey koymamak,
çalışan bir ayrımı kaldırıp karşılığında hiçbir şey vermemektir.
Geriye yalnız 1,8 px'lik `osmanli-cizgi` kalır.
🟢 Ve bu, işçinin ölçtüğü şeyle uyumlu: hat **gerçekten çiziliyor**
(canlı sayfa, 1683-07-14: vassal gövdesi çevresinde 11.449 nokta
yoklandı, `osmanli-cizgi` 260'ında render ediliyor) — ama bir hat, bir
dolgunun yerini tutmaz.

---

## ② 🔴 VE BİR ÇELİŞKİ BİLDİRİYORUM — sessizce seçmiyorum

`js/app.js:1380-1383` **Emre'nin daha eski bir kararını** alıntılıyor:
> *"himaye falan detaya girersek karmaşa yaratabilir."*
> ⇒ *"veri şemasında hukukî statü ayrıntısı (sâlyâneli eyalet, ocaklık,
> voyvodalık, himaye…) AÇILMIYOR — `d:` ve `v:` ikilisi korunuyor,
> ayrım GÖRSEL katmanda yapılıyor."*

Bu gecenin isteği o kararın **tam tersini** gerektiriyor: terim yazmak,
statü ayrıntısını açmaktır. Ve ayrım artık görsel katmandan **çıkıp**
etikete taşınıyor.

⇒ **Yeni istek daha yeni ve açıktır; geçerli olan odur.** Ama karar
Emre'nindir ve çelişki **kayda geçiyor**, çünkü eski karar kodda bir
gerekçe olarak duruyor ve onu okuyan bir sonraki oturum bugünkü işi
"kuralı çiğniyor" sanabilir.

---

## ③ 🟢 ETİKET YARISI BLOKE DEĞİL — ÖN KOŞULU ZATEN YOLDA

İşçi doğru teşhis etti: terim **metinden çıkarılamaz**.
```
`v:` `k` alanı: 41 ayrı değer · 29'u terim taşımıyor · 56 dönem BOŞ
parantez slotu ZATEN dolu:  Mısır (Kavalalı) · (İbrâhim Paşa) ·
                            (Karamanlılar) · (dayı idaresi)
```
Ve `VERI-YAPISI.md:399` bu yolu adıyla yasaklıyor: *"serbest metinden
dersi geri kazanmaya çalışmak — bu proje onu ÜÇ KEZ denedi."*

🟢 **AMA ÇARE HAZIR VE ZATEN YAPILIYOR.** Emre bu gece 🅑'yi onayladı:
`v:` dönemlerine **`kid:` (künye kimliği)** eklenecek (279 dönem ölçüldü,
yama hazır). **Aynı işlemle bir kardeş alan daha eklenir:**

```
v: [{ f, t, k:"Mısır (Kavalalı)", kid:"misir-kavalali", statu:"vassal" }]
                                  └─ 🅑, ölçüldü ─┘  └─ YENİ, bu hüküm ─┘
```

**`statu:` niçin metinden çıkarmaktan güvenli:**
```
🟢 VARSAYILAN ÜCRETSİZ  `v:` katmanının TANIMI zaten tâbiiyet ⇒ her
                        dönem en azından `statu:"vassal"`dır. 429/429
                        kapsama, ilk günden, ARAŞTIRMASIZ.
🟢 İNCELTME AYRI İŞ     `özerk` · `himaye` · `haraçgüzâr` · `ocaklık`
                        kaynaklı olarak, tek tek, sonra.
🔴 AYRIŞTIRMA YOK       `k` metnine DOKUNULMAZ; görünen ad olarak kalır.
```
⇒ Etiket şöyle kurulur ve **iki parçası da yapılandırılmış alandan** gelir:
`{künye adı veya k}` + ` (` + `{statu}` + `)`

---

## ④ SIRA — ve ikisi AYNI TURDA iner
```
1. arac/girdi.py  → BILINEN_DONEM_ALANLARI'na "kid" VE "statu"
2. yama           → 279 dönem `kid:` + 429 dönem `statu:"vassal"`
3. js/app.js      → (a) `vassal-dolgu` #b2384a → #8e0b22
                    (b) himaye-dolgu YEDEĞİ de aynı  (satır 1031)
                    (c) LEJANT düzeltilir (satır 1385) — bugün
                        "Bağlı / tâbi topraklar" AYRI BİR SWATCH ile
                        duruyor; renk birleşince o swatch YALAN SÖYLER
                    (d) tâbi gövde etiketi: kırmızı zemin + beyaz yazı
                        + `(statu)`
4. denetle.py + renk_olc.py
```
🔴 **3(c) atlanırsa lejant iki özdeş swatch gösterir** — işçinin yaması
yalnız 1013'ü değiştiriyor ve bunu bilmiyordu; ben ölçtüm, `#b2384a`
dosyada **dört yerde** geçiyor (188 yorum · 1013 dolgu · 1031 himaye
yedeği · 1385 lejant).

## ⑤ ÖLÇÜLMEDİ
- `statu:` değerlerinin sözlüğü: `vassal · özerk · himaye · haraçgüzâr ·
  ocaklık · voyvodalık` — hangileri? Emre'nin cümlesi üçünü sayıyor
  ("vassal özerk himaye") ama veri altı tane biliyor.
- Etiketin okunurluğu: kırmızı zemin + beyaz yazı, küçük gövdelerde
  sığar mı? (Küre bandı ölçümünde halo sorunu çıkmıştı — aynı risk.)
