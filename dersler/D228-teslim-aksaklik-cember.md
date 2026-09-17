# Üçlü kural, commit≠teslim, tahta mesaj kaybı, aksaklık, altı durak

> Kimlik `D228` · `CLAUDE.md §7.1 ④–⑦` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

### ④ NE YAZILIR — üçlü kural (`E7`)

Koordinatöre ya da kullanıcıya giden **her madde** üç şey taşır:
```
① NE ÖLÇTÜM           sayıyla
② NEYİ BULAMADIM      açıkça — "bulunamadı" diye yaz, boş bırakma
③ NE İSTİYORUM        tek cümle; seçenekliyse şıklarıyla ve ÖNERİNLE
```
**Bulamadığını `bulunamadı` diye yazmak bir sonuçtur ve uydurmaktan kat
kat değerlidir.**

### ⑤ COMMIT TESLİM DEĞİLDİR

Kendi `oturumlar/` dosyanı commit etmen işi teslim etmez. **Teslim
mesajdır.** Dosyaya yazıp susan oturum, hiç çalışmamış oturumla aynı
görünür.

### ⑤b 🔴🔴 «YAZILDI» CEVABI TESLİM KANITI DEĞİLDİR — TAHTA MESAJ KAYBEDER
*(2 Eylül 2026 — iki oturum bağımsız ölçtü, koordinatör doğruladı)*

`.git/index.lock` 27 dakika sahipsiz kaldı ve o pencerede `tahta.py`
**mesaj kaybetti.** Kayıp, aracın *"M-xxxx yazıldı"* cevabına rağmen oldu.

```
OK127'nin 19:48 raporu   "M-2299 yazıldı" cevabı ALDI · tahtada YOK
M-2299'un gerçek sahibi  1.MURAT → OPUS HAZIR KITA 128 (SONRAKİ yazar)
OK125'in AÇILIŞ mesajı   hiç var olmamış — 13 kaydının arasında yok
```

🔴 **VE DOSYA İÇERİDEN TUTARLI: 2305 kayıt · 0 mükerrer no · 0 boşluk.**
Bu bir sağlık işareti **değil** — tam tersinin kanıtı:

> ***Kayıp iz bırakmıyor, çünkü sayaç bir sonraki yazarın `max+1`iyle
> doluyor. Mükerrer bir numara ya da bir boşluk GÖRÜNÜRDÜ; ezilen yazım
> görünmüyor.***

**Mekanizma:** kayıp güncelleme yarışı (read-modify-write). İki oturum
tahtayı aynı anda okur, ikisi de `max+1` numarasını alır, ikincisinin
yazımı birincisininkini **üstüne yazar.**

⇒ **KURAL:**
```
🔴 Kritik bir mesaj yazdıysan — aksaklık raporu, teslim, karar isteği —
   `tahta.json`dan GERİ OKU ve kendi kaydını ARA. "Yazıldı" cevabı
   YETMEZ.
🔴 Aracın "mesaj tahta.json'da VAR, TEKRAR YAZMA" talimatı bu arızada
   YANILTICIDIR — bir rapor tam o talimata uyulduğu için kaybolacaktı.
🟢 Tahta çalışmıyorken kritik raporu ÖZEL KANALDAN yaz. `§7.1③` yatay
   mesajın tahtadan geçmesini şart koşar ÇÜNKÜ TAHTA GÖRÜNÜRDÜR;
   tahta çalışmıyorsa o şartın gerekçesi düşer. Görünmez bir kanaldan
   göndermek, hiç göndermemekten iyidir.
```
📌 Ve `§11`in *"sessiz atlama, yanlış sonuçtan pahalıdır"* dersinin
haberleşme yüzü: yanlış bir numara bir gün fark edilir, **kayıp asla.**

🟢 Bir de doğru davranışın kaydı: kilidi **üç işçi oturum da ölçtü ve
üçü de SİLMEDİ** — *"`.git` paylaşılan altyapı, 17 oturum aynı index'i
kullanıyor, `§7`ye göre paylaşılan şeylerde karar Oturum 0'ın."*
Koordinatörün kendi denemesini de izin katmanı durdurdu. Kilit
kendiliğinden kalktı; **kimse zorlamadı.**

### ⑥ 🔴 AKSAKLIK RAPORU BEKLEMEZ — iş bitmeden bildirilir

**Bir engel, çelişki ya da koordinatörün bilmesi gereken bir şey
çıktığında, işin bitmesini BEKLEME.** Hemen bildir ya da sor.

```
BEKLEYEBİLİR      normal bulgular · ölçüm sonuçları · tamamlanan kalemler
                  → gün içinde kalem kalem, biriktirmeden

BEKLEYEMEZ        · başka bir oturumun dosyasına ihtiyacın varsa
                  · kaynaklar ÇELİŞİYORSA (hangisini seçeceğine sen karar verme)
                  · şartname yanlış/eksik çıktıysa
                  · beklenenden ÇOK farklı bir sayı ölçtüysen
                  · bir kalem senin yetkin dışına taşıyorsa
                  · iş tahmininden ÇOK uzun sürecekse
                  → BEKLETMEDEN mesaj at
```

**Niçin:** koordinatör başka oturumları senin bitişine göre sıraya diziyor.
Bir engeli sonuna saklarsan, o süre boyunca **yanlış plan üzerine iş
dağıtılır.** Yaşanmış: bir oturum şartnamesindeki yanlış sayıyla çalıştı,
koordinatör düzeltmeyi sonra gönderdi ve üç bölüm iptal oldu — daha erken
sorulsaydı hiç yazılmayacaktı.

⚠️ **"Sormak" zayıflık değil, protokoldür.** Karar veremediğin bir yerde
tahmin etmek, sormaktan **kat kat** pahalıdır: yanlış tahmin veriye girer
ve sonra kimse onun tahmin olduğunu bilmez.

### ⑦ İŞ AKIŞININ TAM ÇEMBERİ — altı durak

```
① GÖREV        koordinatör `oturumlar/<AD>.md` yazar; şartname AÇILIŞ
               PROMPT'udur. Beş alan: AD · MODEL · DİZİN · ŞARTNAME · ClaudEmre
② AÇILIŞ       işçi: "açıldım, brifingi okudum, şu dosyalar bende"
               (bu mesaj olmadan koordinatör dosyayı ikinci oturuma verebilir)
③ GİDİŞAT      kalem kalem bildir · aksaklığı BEKLETMEDEN bildir (§⑥)
④ SORULMA      "ne oldu bizim iş?" gelince HEMEN:
               "iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"
⑤ TESLİM       iş bitince RAPOR — sayıyla. "Bitirdim" değil,
               "24 → 7, şu yedisi şu sebeple kaldı"
⑥ KAPANIŞ      tek kullanımlık oturumsan: raporu gönderdikten SONRA kapan.
               Sende kalan hiçbir bilgi kurtarılamaz — "sonra yazarım" YOK
```

⚠️ **Koordinatörün tarafı da bağlıdır:** iş verdiği her oturumu bekleyen
olarak kaydeder · her tur bekleyenlere tek tek bakar · ses yoksa **sorar** ·
ölü ilan etmeden **önce gerçekten çalışıp çalışmadığına bakar** · ve bir
oturumun sorusuna karşılık bir şey yaptıysa **ona haber verir.**

📌 Ve şu ayrım koordinatör için hayatidir: **duran bir oturum ölü değildir,
cevabı sıkışmış olabilir.** `list_sessions` *"çalışmıyor"* diyorsa bu doğru
olabilir ama sebebi *"öldü"* değil *"işini bitirdi ve raporu iletemedi"*
olabilir. **Ölçüm doğru, çıkarım yanlış** — bu projede yaşandı.

---
