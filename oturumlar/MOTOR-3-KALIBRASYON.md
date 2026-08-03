# MOTOR 3 — koşu 4,7 saat: nerede yanıyor, kısaltılabilir mi

**Model: Opus.** Ölçüm ve mimarî karar işi

📌 *MOTOR 2 (Fable) kapatıldı. Bu onun devamı değil, ve kasten değil:*
*① bu iş Fable'ın değil Opus'un işi ② MOTOR 2'nin kendi hipotezi*
*("petek aşaması >6×") burada TEST EDİLECEK — bir hipotezi onu kuran*
*oturuma doğrulatmak en zayıf denetimdir (`YASALAR F6`).*; "hızlandır" demek kolay,
**neyi bozmadan** hızlandırılacağını bulmak zor.

## 🔴 AÇILIŞ — yalnız bunlar

```
① bu dosya (baştan sona)
② CLAUDE.md  §7 dosya sahipliği · üretim protokolü
③ ONCELIK.md §1 nerede yanıyor
④ arac/uret_petek.py  — senin dosyan, ama ÖNCE OKU sonra dokun
```
⚠️ **`/claudemre-basla` ÇALIŞTIRMA** (`ORGANIZASYON §17`).

## 🔴 DURUM DAMGASI
```
BAŞLARKEN   py <ClaudEmre>/kutu/ekip.py "<proje>" "MOTOR 3" calisiyor "not"
SORU VARSA  ...aynı komut... soru "…"        🔴 kutuda KIRMIZI
BİTİNCE     ...aynı komut... hazir "…"
```

## 🔴 YAZMA YETKİN
```
arac/uret_petek.py   ← yalnız bu
oturumlar/MOTOR-3-KALIBRASYON-ILERLEME.md
```
🔴 **`arac/uret_petek.py`yi ÇALIŞTIRMA.** Koşuyu yalnız Oturum 0
tetikler. Sen **ölçersin ve yamayı yazarsın**; koşuyu o dener.
⚠️ Bu kural pazarlığa kapalı: iki koşu aynı anda 12 MB'lık çıktılara
yazarsa ikisi de bozulur.

---

## ÖLÇÜLDÜ — ve önceki hipotez YANLIŞ ÇIKMIŞ OLABİLİR

Daha önce *"petek aşaması >6×, maske/bölge 1,8-2,1×"* denmişti. Bugünkü
koşunun dosya damgaları başka bir yer gösteriyor:

```
01:18:39  koşu başladı
01:56     data/bolgeler.js yazıldı        ← 38 dk: maske+göl+petek+bölge
05:38     data/devletler_harita.js        ← 3 SAAT 42 DK  🔴
05:59     data/donemler.js + petek_govde  ← 21 dk
05:59:25  bitti                             TOPLAM 4s41dk
```
```
38 dk      %13
3s42dk     %79   ← "Yabancı devlet gövdeleri" (uret_petek.py:1566)
21 dk       %8
```

🔴 **Koşunun beşte dördü TEK aşamada geçiyor** ve o aşama petek üretimi
değil, `devletler_harita.js` (35,9 MB). Log da bunu doğruluyor: 01:56'dan
sonra **3 saat 42 dakika hiçbir satır basılmadı** — o blok içeride
ilerleme yazmıyor.

⚠️ **Ama bu bir kanıt değil, bir işarettir.** Dosya damgası "yazma anı"nı
verir, "hesabın başladığı an"ı değil. İlk işin bunu **kesinleştirmek.**

---

## GÖREV ① — ÖNCE GÖRÜNÜRLÜK, sonra hız

```
Ölçemediğin şeyi hızlandıramazsın; hızlandırdığını sandığın şeyi
bozmuş olabilirsin.
```

`uret_petek.py`ye **aşama zamanlayıcısı** koy:
```python
· her ana aşamanın başında ve sonunda  saat + geçen süre
· uzun döngülerde ilerleme satırı (her N adımda bir)
· sonda ÖZET TABLO: aşama · süre · toplam içindeki payı
```
⚠️ `-u` ile çalıştırıldığında satırlar **anında** aksın; tamponlanırsa
ölçüm yine körleşir. (Bir kez yaşandı: koşu `-u`suz başlatıldı, 4s39dk
boyunca kör kalındı.)
📌 Bu tek başına bir teslimat: bir sonraki koşu **kendi bilançosunu**
yazacak ve bu tartışma bir daha tahmine düşmeyecek.

## GÖREV ② — 3s42dk'lık bloğu ölç ve anla

`uret_petek.py:1566` "Yabancı devlet gövdeleri". Cevaplanacak sorular:

```
· kaç devlet × kaç epok × kaç geometri birleşimi yapılıyor
· karmaşıklık nokta sayısıyla mı, KİMLİK sayısıyla mı büyüyor
· aynı birleşim tekrar tekrar mı hesaplanıyor (önbelleğe alınabilir mi)
· çıktı 35,9 MB — geometri tekrarı var mı (parça havuzu gibi
  paylaşılabilir mi)
```
🔴 **Bu sorunun cevabı yakında daha da yakıcı olacak:** VERİ KİMLİK 3
oturumu **98 yeni Asya kimliği** ekliyor. Karmaşıklık kimlik sayısıyla
büyüyorsa koşu 4,7 saatten çok daha uzayacak. **Ölç ve söyle.**

## GÖREV ③ — ASIL SORU: koşu bölünebilir mi

Hız ikinci meseledir. Birincisi şu: **4,7 saat her şeyi kilitliyor.**
Bugün üç oturum "koşu bitsin" diye bekledi.

```
Yalnız yerlesimler.js değiştiyse, kara maskesi niçin baştan hesaplanıyor?
```

Araştır ve **karar öner**:
```
· hangi aşamalar girdinin hangi kısmına bağlı (bağımlılık haritası)
· ara ürünler diske alınıp tekrar kullanılabilir mi (maske · petek örtüsü)
· `URETIM_IZI` zaten sha256 tutuyor — "bu aşamanın girdisi değişmedi,
  atla" kararı bununla verilebilir mi
· ⚠️ RİSK: yanlış atlanan aşama SESSİZ BAYAT çıktı üretir. Beş üretim
  buna benzer bir sebeple kaybedildi. Öneri **nasıl doğrulanacağını**
  da içermeli, yoksa öneri değil kumardır.
```

📌 Kazanç şuradan ölçülür: *"yalnız `yerlesimler.js` değiştiğinde koşu
kaç dakika sürerdi?"* Bugün 281 dakika. Hedef koymuyorum — **sen ölç,
sonra hedef konuşuruz.**

---

## TESLİMAT — `MOTOR-3-KALIBRASYON-ILERLEME.md`

```
① aşama zamanlayıcısı yaması (yazıldı, denenmedi — Oturum 0 deneyecek)
② 3s42dk'lık bloğun ne yaptığı: ölçülmüş bilanço
③ kimlik sayısına bağlılık: 98 kimlik eklenince ne olur — TAHMİN DEĞİL,
   ölçüme dayalı bir ilişki
④ bölünebilirlik: bağımlılık haritası + öneri + doğrulama yolu
⑤ yapılamayanlar ve niçin
```

## BİTİŞ ÖLÇÜTÜ

```
BİTTİ sayılır ⟺ bir sonraki koşu kendi aşama bilançosunu YAZIYOR
             ⟺ 3s42dk'lık bloğun içi artık isimlendirilmiş
             ⟺ "bölünebilir mi" sorusunun EVET/HAYIR cevabı gerekçeli
```

⚠️ **Hiçbir çıktı değişmemeli.** Bu iş bir hızlandırma işidir, bir
davranış değiştirme işi değil. Yamadan sonraki koşunun `denetle.py`
sonucu bugünküyle **birebir aynı** olmalı:
```
1 ✓ 1579/50 · 1b ✓ 0 · 2 ✓ 493/0 · 2s 119 · 2t 52 · konum ✓ 0
```
Bir sayı bile oynarsa yama geri alınır ve sebebi aranır.
