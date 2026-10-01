# D254 — KÖR bir YAZMA başarılı görünür; tek kanıt DENETİMİN SAYISIDIR

**Tarih:** 1 Ekim 2026 gecesi · **Üreten ve yakalayan:** koordinatör
**Bağlı:** `D250` (kör ölçümün kaydı) · `D240` (üç kayıt biçimi) · `D246`

## SLOGAN

Bir yazma işleminin **başarılı görünmesi** için gereken her şey sağlanabilir —
dosya değişir, sözdizim denetimi geçer, araç `✓` basar — ve işlem **yine de
hiçbir şey yapmamış** olabilir. Yazmanın tuttuğunun tek kanıtı, o yazmanın
**DEĞİŞTİRMESİ GEREKEN SAYININ DEĞİŞMESİDİR.**

## VAKA — mükerrer anahtar

ODAK-KAPAT'ın araştırdığı 9 odak kalemi uygulanacaktı. Uygulayıcı **satır
temelliydi**: `t` değerini taşıyan satırı kayıt sanıyordu. Ama bazı dosyalar
**çok satırlı** kayıt kullanıyor:

```
{ t:"1371-09-26", b:"Çirmen (Meriç) Savaşı — ağır yenilgi", "yer_id": "Çirmen", tur:"savas",
  onem:4, dunya:3, kapsam:"dis", etiket:["savas","konu-askeri"],
  yer_id:"",          ← KAYDIN ALT SATIRINDA ZATEN VARDI
  d:"…", kaynak:"…" },
```

Araç `b`den sonra `"yer_id"` **EKLEDİ**, çünkü baktığı satırda `yer_id` yoktu.
Sonuç: **mükerrer anahtar.** Ve JavaScript nesne sabitinde **son anahtar
kazanır** ⇒ `o.yer_id === ""` ⇒ alan boş kaldı, kamera kıpırdamadı.

### 🔴 Ve her kontrol GEÇTİ
```
node --check      ✓ GEÇTİ    — mükerrer anahtar JS'te YASALDIR
dosya değişti     ✓          — git status modified gösterdi
araç "✓ yazıldı"  ✓          — kendi ölçütüne göre doğruydu
🔴 ODAKSIZ 455 → 455          ← TEK YAKALAYAN
```

9 kalem uygulandı ve denetimin sayısı **kıpırdamadı.** Onu fark etmeseydim
bozulma yayına inecek, dosyalar mükerrer anahtarla kalacak ve bir sonraki
oturum "bu kalemler neden hâlâ odaksız" diye **aynı araştırmayı yeniden**
yapacaktı.

## NİÇİN `node --check` YETMEZ — ve bu genel bir ders

`node --check` **sözdizimi** denetler, **anlam** denetlemez. Mükerrer anahtar,
ulaşılamaz kod, gölgelenen değişken, yanlış alana yazılmış doğru değer —
hepsi sözdizimi olarak kusursuzdur. ⇒ Bir veri yazmasının kapısı asla
sözdizimi denetimi olamaz; kapı **o verinin ÖLÇÜLDÜĞÜ sayıdır.**

## KURAL

1. **Her yazma işleminin bir BEKLENEN SAYI DEĞİŞİMİ olmalı** ve işlemden
   sonra o sayı ölçülmeli. Beklenen değişim yoksa işlem gereksizdir;
   ölçülmezse işlem doğrulanmamıştır.
2. **Araç kendi başarısına tanık olamaz.** `✓ yazıldı` bir iddiadır, kanıt
   değildir. Kanıt dışarıdan gelir.
3. **Kayıt sınırları PARANTEZ SAYILARAK bulunur** — "kayıt tek satırdır" ve
   "kayıt `{` ile başlar" varsayımlarının İKİSİ de bu projede yanlıştır
   (`D240`): `1dunya_A` tek satır ve `t` ilk alan · `sirbistan` tek satır ama
   `t` ilk alan DEĞİL · `avrupa_bati` ÇOK SATIRLI.
4. **Bir alan EKLENMEDEN önce, kaydın TAMAMINDA o alanın yok olduğu
   doğrulanır.** Varsa DOLDURULUR, eklenmez.

## AYNI GECE ÜÇÜNCÜ KUSUR — ve bu dersin ikinci yüzü

Aynı araçta bir süzgeç de kusurluydu: rapor kova hücresini `**A** (imza) ⏳`
diye yazıyor ve `⏳` **yıldızların dışında**. Süzgeç yalnız `**…**` arasına
bakıyordu ⇒ üç `A⏳` kalemi (Basel · Nantes · Lozan) uygulanacak listeye
girdi — `Hüküm 3` ihlali.

🔴 **Yazılmadılar — ama BAŞKA BİR SEBEPLE:** çok satırlı kayıtta `b` alanı
bulunamadı ve araç onları atladı. Yani ihlal **kazaen** önlendi.

> **Bir sigortanın TESADÜFEN tutması, TUTTUĞU anlamına gelmez.**

İki kusur birbirini maskeledi: biri yanlış kalemleri listeye soktu, öteki
onları yazmayı engelledi. İkisi de düzeltildikten sonra sayı **doğru
sebepten** doğru çıktı (5 kalem, işçinin bağımsız sayımıyla birebir).

## BAĞLI

`D250` (kör ölçümün kaydı kayıtsızlıktan kötüdür) — bu onun YAZMA yüzü ·
`D240` (üç kayıt biçimi) · `D246` (araçlar satır sonu konusunda yanıltır) ·
`D253` (düzeltme ve tavan aynı commit'te) ·
`denetim/ARAC-ODAK-KAPAT-UYGULA-1001.py` (parantez sayan sürüm)
