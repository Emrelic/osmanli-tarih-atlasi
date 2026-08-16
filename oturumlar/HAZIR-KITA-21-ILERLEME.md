# HAZIR KITA 21 — KRONOLOJİ KIRILMA · ilerleme

**Görev** `oturumlar/KRONOLOJI-KIRILMA.md` · **Dosyam** `data/olaylar_7a4170.js`
**Tarih** 16 Ağustos 2026 · **Nöbetçi** Monitor, üç ad dinliyor

---

## SONUÇ — TEK CÜMLE

`Değişmez 2` **4 açık → 0**, `denetle.py` çıkış kodu **0**, son satır
**"SONUÇ: temiz"**. Yayın kapısının kronoloji ayağı açıldı.

---

## ① NE ÖLÇTÜM

Dört kırılmanın dökümünü **üreteçten** aldım, tahtadan değil:

```
py arac/denetle.py --ayrinti        (16 Ağustos, kendi koşum)
  Değişmez 2  ✗  511 kırılma, 4 açık (beklenen 0)
    1856-01-01  kazanc  Cağbûb              en yakın madde 48 gün uzakta
    1859-04-25  kazanc  Portsaid            en yakın madde 37 gün uzakta
    1863-04-27  kazanc  İsmâiliye           en yakın madde 35 gün uzakta
    1869-01-01  kazanc  Nâsıriye, Ramâdi    en yakın madde 90 gün uzakta
```

**ÇIKARDIĞIM** — ölçümden ayrı satır (`B10`): dördü de aynı cinsten, bir
yerleşimin `kur:` günüyle başlayan `d:`/`v:` dönemi. Yani *"el değiştirdi"*
değil **"yoktu, DOĞDU ve boyandı"** kırılması. Süveyş berzahının iki şehri ile
Irak'ın iki iskân kasabası 19. yüzyılda sıfırdan kurulmuştur.

---

## ② KABUL KAPISI — altısının altısı, sayıyla

| # | ölçüt | ölçüm |
|---|---|---|
| ① | `denetle.py` Değişmez 2 AÇIK | **4 → 0** · çıkış kodu **0** · "SONUÇ: temiz" |
| ② | kendi dosyam kaç madde (node ile) | **4** |
| ③ | git | `oturumlar/HAZIR-KITA-21-ILERLEME.md` commit'li · `data/olaylar_7a4170.js` 🔴 KOORDİNATÖRDE |
| ④ | `kaynak:` dolu madde | **4/4** — iki yöntem de 4 dedi (node nesnesi + metin sayımı) |
| ⑤ | ay hassasiyetli `t:` | **0** — dördü de `YYYY-MM-DD` |
| ⑥ | Değişmez 1 / 5 artmadı mı | 1: **196 → 196** · 1b: **0 → 0** · 5: **0 → 0** |

**Ve tam ölçüm farkı — hiçbir satır kötüleşmedi:**
```
Değişmez 2    4 açık  →  0 açık        ✓ HEDEF
Değişmez 2s  73 açık  → 72 açık        ✓ yan kazanç
Kuyruk ortaasya2   3 →  2 MADDESİZ     ✓
Kuyruk asya      337 → 335 MADDESİZ    ✓
Kuyruk gdasya     71 →  70 MADDESİZ    ✓
Değişmez 2i · 2t · 3z · 4 · 5 · konum  DEĞİŞMEDİ
kronoloji      1219 → 1223 madde
```

Ek: dört maddenin dördünün de **başlığı, kırılmanın yerleşimini anıyor** —
`denetle.py:856 _madde_yeri_aniyor` ölçütünün kopyasıyla ayrı ayrı sınandı.
*"Yakınlık alâka değildir"* uyarısı bu dört maddede ötmez.

---

## ③ NEYİ BULAMADIM — açıkça

### 🔴 (a) İsmâiliye'nin GÜNÜ — ve bu yüzden madde 04-27'ye değil 04-03'e yazıldı

Verideki `kur:` **1863-04-27**. Aranan ve bulunamayan: o günün dayanağı.
```
TDV ismailiye   yılı (1863) ve kuruluş şartlarını verir · GÜNÜ VERMEZ
TDV port-said   "üç yıl önce kurulan ... İsmâiliye" (1866-3 = 1863) · gün YOK
akademik tarama 1862/1863 diyor (openedition · springer) · gün YOK
```
⇒ **Kaynaksız bir günü kronolojiye yazmadım.** Aynı ±30 penceresinde kalan,
TDV'nin **tam gününü verdiği** bir Osmanlı olayına yaslandım: Sultan
Abdülaziz'in **3 Nisan 1863** Mısır ziyareti (`abdulaziz`). Fark **24 gün** —
Değişmez 2 sağlanır, uydurma tarih girmez.

⚠️ Bu, `yerlesimler_afrika.js`teki `kur:"1863-04-27"` gününün **yanlış olduğunu
söylemez** — ben **doğrulayamadım.** O dosya benim değil; kaydediyorum ki
sahibi ya kaynağını yazsın ya yuvarlasın.

### 🔴 (b) Ramâdi ve Nâsıriye — TANECİKLİK boşluğu, `§4` gereği açıkça

TDV Irak'ı kapsıyor (`bagdat` · `basra` · `midhat-pasa` üçü de canlı ve zengin)
ama iki kasabayı **adıyla anmıyor.** `ramadi` · `nasiriye` · `muntefik` ·
`dulaym` · `sadun` sluglarının **hepsi 302**. Bu coğrafî değil **taneciklik**
boşluğu; `kaynak:` alanına iskân siyasetini gerçekten anlatan en yakın canlı
madde (`midhat-pasa`) kondu ve maddenin metninde *"TDV bu iki kasabayı adıyla
anmaz"* **yazılı.**

---

## ④ İKİ TDV İÇİ ÇELİŞKİ — gizlemedim

```
① kanal kazısının başlangıcı
     suveys : "kanal inşaatı 25 Nisan 1859'da başladı"      ← GÜN
     misir  : "kanalın kazılmasına 1856 yılında başlandı"    ← yıl
   ⇒ müstakil madde esas alındı; misir'ın 1856'sı İMTİYAZ yılıdır
     (5 Ocak 1856 Bâbıâli onayı — yine suveys'in kendi cümlesi)

② Cağbûb zâviyesinin yapımı
     cagbub                : "1855'te bölgeye yerleşerek ... zâviye yaptıran"
     senusi-muhammed-b-ali : "1854'te Trablusgarp'a döndüğünde ... ardından"
   ⇒ ikisi de zâviyenin TAŞINI anlatıyor; kırılma OSMANLI TASARRUFUdur ve
     onun tarihi cagbub'un kendi cümlesinde: "1856'da Sultan Abdülmecid'in
     fermanıyla ... vergiden muaf tutulması"
```

---

## ⑤ SLUG DENETİMİ — HTTP kodu **ve** gövde, ikisi birden

```
🟢 CANLI  cagbub · senusi-muhammed-b-ali · suveys · port-said · ismailiye ·
          abdulaziz · midhat-pasa · bagdat · basra · misir · hidiv · said-pasa
🔴 ÖLÜ    portsaid · suveys-kanali · nasiriye · nasiriyye · ramadi · muntefik ·
          muntefikogullari · dulaym · sadun · ismail-pasa · irak · sais
```

**İki bulgu:**
- 🟢 `portsaid` **302**, `port-said` **200** — tek fark bir tire. `§4③`ün
  *"kaynak vardı, adres yanlıştı"* deseninin bir vakası daha.
- 🟢 `ismailiye` **`②` tuzağına düşmedi ve düşmeyişi ölçüldü.** Slug canlı,
  başlık "İSMÂİLİYE" — **ama başlık testi bu vakayı ayırt EDEMEZDİ**, çünkü
  İsmâiliyye *mezhebi* de aynı başlığı verirdi. Gövde okundu: madde
  *"Süveyş Kanalı'nın ortalarında bulunan ... şehir."* ⇒ doğru madde.
  📌 Ve TDV'de mezhep maddesi **ayrıca var** (`ismailiyye`, 200) — yani tuzak
  teorik değil, **gerçekten kurulu.**

---

## ⑥ 🔴 KOORDİNATÖRDE KALAN İKİ İŞ

```
① data/olaylar_7a4170.js  COMMIT EDİLMEDİ — CLAUDE.md §7: data/ Oturum 0'ın.
                          Dosya diskte, denetim onu OKUYOR (glob), ama git'te YOK.
② index.html              SATIR EKLENMEDİ — şartname §③: "dosyanı SEN BAĞLAMA".
                          🔴 Bağlanmazsa YAYINDA dört madde GÖRÜNMEZ.
                          denetle.py `data/olaylar*.js` glob'u kullanıyor,
                          index.html'i okumuyor ⇒ DENETİM TEMİZ, YAYIN EKSİK olur.
                          Bu tam olarak "çıktı girdinin bir tur gerisinde"
                          vakasıdır ve KAYITSIZ KALMASIN diye buraya yazıyorum.
```

---

## ⑦ ŞARTNAMEYE İKİ DÜZELTME — kayda geçsin

**(a)** `§①` *"dört kırılmanın dökümünü TAHTADAN AL, VERİ ZAMAN yazıyor"*
diyordu. Tahtadaki 16 VERİ ZAMAN mesajı tarandı: **döküm yoktu.** Talimat bir
varsayım üzerine yazılmış (*"yazıyor"* değil *"yazacak"*). Ve tartıştığı iki
yol da eksikti — doğru yol **üçüncüsüydü: üreteci çağırmak.** `§11`in kendi
kuralı bunu zaten söylüyor; şartname o satırı atlamış.

**(b)** `§②` *"her kırılma için ±30 gün içinde madde yaz"* — sağlandı, ama
kural tek başına **kaynaksız gün yazmaya davet ediyor.** Eksik olan cümle:
*"kırılmanın günü kaynaklanamıyorsa, maddeyi ±30 içindeki KAYNAKLI bir güne
yaz."* Bu partide üçüncü madde tam olarak öyle yazıldı.

---

## ⑧ BİR HATA — kendi aletimde, kaydediyorum

Kabul kapısı ② için yazdığım node betiği `process.argv[1]`i okudu — Node'da o
**betiğin kendisidir**, veri dosyası `argv[2]`dir. Betik kendini eval etti ve
`Maximum call stack size exceeded` ile patladı.

📌 Şanslıyım ki **gürültülü** patladı. Sessizce boş dizi dönseydi *"4 madde"*
yerine *"0 madde"* okurdum ya da daha kötüsü — kapıyı geçmiş sayardım.
`§11`in *"patlayan → sessizce bozan → başarılı görünen"* dizilimi: bu
birincisiydi, ve birincisi en ucuzudur.
