# D263 — `YYYY-01-01` kuralı İMKÂNSIZ BİR TARİH üretebilir, ve hiçbir kapı sormaz

**5 Ekim 2026 · KRONO-DOBRUCA-1877-1005 (hazır kıta işçisi) · hüküm YILDIRIM BAYEZIT**

## SLOGAN
`D210`un *"gün bilinmiyorsa `YYYY-01-01`"* kuralı, olayın yılı içinde bir **ALT SINIR**
varsa (savaş ilanı · künye doğumu · antlaşma günü) onunla ÇELİŞEBİLİR. Kural körü
körüne uygulanınca veri **olması imkânsız bir gün** taşır — ve bugün hiçbir denetim
"bu tarih mümkün mü" diye sormaz.

## VAKA — ölçülerek bulundu
Emre'nin paketinde (`parti-emrelic-0083`) 93 Harbi maddeleri vardı. Kuzey Dobruca'nın
dört şehri (Köstence · Babadağı · İshakçı · Silistre) için Rus işgal günü arandı.
İşçi 9 TDV maddesi + 3 akademik makale taradı ve **dördü için de YER DÜZEYİNDE gün
bulamadı** (`bulunamadı` — bir sonuçtur).

🔴 Ve çareyi uygularken tuzağı KENDİ gördü:
```
D210 :  gün bilinmiyorsa  YYYY-01-01
olay :  1877 Rus işgali
kural :  1877-01-01
GERÇEK:  Rusya savaşı 24 NİSAN 1877'de ilan etti
      ⇒ 1877-01-01'de böyle bir işgal OLAMAZDI
```
Kural, kendi şartı (gün bilinmiyor) sağlandığı hâlde **olgusal olarak imkânsız** bir
tarih üretti.

## NİÇİN SİNSİ
- `D210`un amacı **uydurmayı önlemek**tir ve bu amaçta doğrudur. Ama `YYYY-01-01`
  bir "bilinmiyor" işareti DEĞİL, geçerli bir TARİHtir: sıralanır, kırılma açar,
  Değişmez 2'nin ±30 gün penceresine girer, haritada o gün renk değiştirir.
- Hiçbir değişmez *"bu tarih, olayın kendi alt sınırından önce mi"* diye sormuyor.
  Künye penceresi (`4c`/`4d`) sorar ama o **devletin** ömrünü sorar, **olayın**
  alt sınırını değil.
- ⇒ Sahte kesinliği önlemek için konmuş bir kural, başka bir sahte kesinlik üretiyor.

## KURAL
1. `YYYY-01-01` yazmadan önce **o yıl içinde bir ALT SINIR var mı** diye bak:
   savaş ilanı · antlaşma imzası · künyenin doğumu · önceki kaynaklı olay.
2. Alt sınır varsa `YYYY-01-01` **YAZILMAZ**. Üç yol, sırayla:
   - kaynak AY veriyorsa ay düzeyinde yaz ve hassasiyeti `kaynak:`ta BEYAN ET
     (`D213`) — ⚠️ ay hassasiyeti ayın 1'ine genişler ve gün hassasiyetli
     kırılmaların ÖNÜNE sıralanır (`§8`), bedeli bilerek ödenir
   - kaynak yalnız YIL veriyorsa **veriye yazma**, kronoloji maddesine yıl
     düzeyinde yaz ve yerleşim kırılması AÇMA
   - hiçbiri olmuyorsa `bulunamadı`
3. 🔴 **Bir `kaynak:` notu, verinin KENDİSİNİN söylediğini geri almaz.** Haritaya
   bakan notu okumaz, **rengi görür**. "Gün yer düzeyinde değil" diye beyan edilmiş
   bir `isg:` yine de "o gün bu şehir düştü" der.

## HÜKÜM — bu vakada ne yapıldı
Dördüne de `isg:` **YAZILMADI** (işçinin İshakçı/Babadağı önerisi dâhil — bölgeden
şehre taşıma, `D208`in mantığı). Bunun yerine kaynaklı olan yazılacak: Tuna'nın
Galatz'da geçilmesi **1877-06-22** (Uyar 2021 · Akçakaya 2023), bir **kronoloji
maddesi** olarak, yerleşim `isg:`i olmadan. Ayrıntı:
[`denetim/KRONO-DOBRUCA-1877-1005-HUKUM.md`](../denetim/KRONO-DOBRUCA-1877-1005-HUKUM.md)

## AÇIK — bu ders bir KAPI ÖNERİR ama kapı YOK
*"Bir tarih, olayın alt sınırından önce olamaz"* mekanikleşebilir mi? Kısmen:
savaş/antlaşma maddelerinin kendi günleri veride duruyor. Ama "olayın alt sınırı"
genel hâlde metinden çıkar ve bu bir YZ işi, bir `if` değil. ⇒ Şimdilik KURAL,
kapı değil. Yazılırsa iki yönde sınanmalı (`§11`).

## BAĞLI
[`D210`](D210-hassasiyet-kaynagi-asamaz.md) (kuralın kendisi) ·
[`D213`](D213-ay-ayin-birine-kodlanmis.md) (hassasiyet açıklayan alandan okunur) ·
[`D208`](D208-bayrak-kurali.md) (bölgeden şehre taşınan hüküm)

📌 Ve bu dersin DOĞUŞU da kayda değer: işçi kuralı uygularken *"burada 1877-01-01
çıkar, o da savaş ilanından önce"* diye **kendi kendine** fark etti ve raporunda
🔴 TUZAK diye işaretledi. Bir kuralın kendi şartı dışında saçma sonuç verdiğini
görmek, kuralı ezberlemekten zordur.
