# KRONO-DOBRUCA-1877-1005 — KOORDİNATÖR HÜKMÜ (5 Ekim 2026)

İşçi ölçtü (`KRONO-DOBRUCA-1877-1005.md`), hüküm YILDIRIM BAYEZIT'in.
⚠️ İşçi oturumu teslimden sonra kapandı; hüküm ona ulaştırılamadı, buraya yazıldı.
**Uygulama henüz YAPILMADI** — aşağıdaki madde bir sonraki uygun oturuma verilecek.

## HÜKÜM: DÖRT YERİN DÖRDÜNE DE `isg:` YAZILMAYACAK

Köstence · Babadağı · İshakçı · Silistre. İşçi Silistre ve Köstence için zaten
"yazılmasın" diyordu; **İshakçı ve Babadağı için de HAYIR** — işçinin önerisine
karşı çıkıyorum.

Önerisi: `isg:{f:"1877-06-22", t:"1878-07-13", d:"rusya"}` + `kaynak:`ta
*"gün yer düzeyinde DEĞİL, istilanın başladığı gün"* beyanı.

🔴 **NİÇİN REDDEDİLDİ — beyan dürüst ama veri yine yanlış şeyi söyler:**
```
1877-06-22  Galatz'da TUNA GEÇİLDİ            ← kaynaklı, GERÇEK
            İshakçı/Babadağı O GÜN DÜŞTÜ      ← kaynakta YOK, bizim ÇIKARIMIMIZ
```
`isg:`e o günü yazmak haritaya *"22 Haziran'da bu şehirler Rus"* dedirtir.
`D210`: **sahte kesinlik de yasaktır** — ve bir `kaynak:` notu, verinin KENDİSİNİN
söylediğini geri almaz. Haritaya bakan kişi notu okumaz, **rengi görür.**
📌 İşçinin kendi uyarısı da bu yöndeydi: *"bu bölgeden şehre taşımadır."* `D208` bunu
halka için yasaklıyor; aynı mantık `isg:` için de geçerli — `isg:` bir ÖLÇÜM alanıdır,
tahmin alanı değil.
⚠️ Kamil-Alpay 2021'in sancak düzeyi AY'ı (Haziran 1877 → Temmuz 1878, Tulça sancağı)
gerçek, ama AY hassasiyetli bir `isg:` `§8` gereği ayın 1'ine genişler ve gün
hassasiyetli kırılmaların ÖNÜNE sıralanır ⇒ senkronu bozar.

## BUNUN YERİNE — KAYNAKLI OLANI YAZ (AÇIK İŞ)
`1877-06-22` gerçek ve kaynaklı bir OLAY: Tuna'nın Galatz'da geçilmesi ve Dobruca
istilasının başlaması (Uyar 2021, Harp Tarihi Dergisi 4, s.8 · Akçakaya 2023,
Vakanüvis 8/1, s.12).
⇒ **Kronoloji maddesi** yazılacak, yerleşim `isg:`i OLMADAN:
```
t: 1877-06-22
b: "Rus ordusu Galatz'da Tuna'yı geçti — Dobruca istilası başladı"
kaynak: iki makalenin AYNEN alıntısı + sayfa numarası
yer_id: veride VARSA uygun olan; yoksa `bulunamadı`
```
🔴 Köstence için gövdeye ayrıca: TDV'nin *"Doksanüç Harbi'nde Ruslar tarafından işgal
edildi (1877)"* cümlesi YIL düzeyidir; Akçakaya'nın *"retreated to the Constanta line"*
bulgusuyla birlikte **Köstence 22 Haziran'da DÜŞMEDİ** diyebiliyoruz. Bu bir NEGATİF
bilgidir ve değerlidir.

## 🟢 İŞÇİNİN ÜÇ İYİ İŞİ — üçü de "YAPMAMAK"la ilgili
① Öngörüsü (4 yerden en çok 1'i için gün) TUTTU **ve** ikinci öngörüsünün
   ("Silistre düşmedi, antlaşmayla geçti") ÇÜRÜDÜĞÜNÜ kendi yazdı.
② *"10 Şubat 1878"* gününü yalnız kaynağı belirsiz bir web özetinde bulup
   **KULLANMADI** (`§4` kırmızı çizgi).
③ 🔴 **YENİ DERS ADAYI — `D210`un kendi tuzağı:** "gün bilinmiyorsa `YYYY-01-01`"
   kuralı burada **1877-01-01** üretir; o gün savaş ilanından (24 Nisan 1877) **ÖNCE**,
   yani İMKÂNSIZ bir tarih. ⇒ `YYYY-01-01` kuralı, olayın yılı içinde bir ALT SINIR
   varsa (savaş ilanı, künye doğumu) o sınırla ÇELİŞEBİLİR. Kural körü körüne
   uygulanırsa veri imkânsız bir gün taşır ve hiçbir kapı bunu sormaz.
   📌 Bir kuralın kendi şartı dışında saçma sonuç verdiğini görmek, kuralı
      ezberlemekten zordur. Ders dosyası yazılacak.

## AÇIK
- Dört yerin hiçbiri için YER düzeyinde gün **bulunamadı** (işçinin ölçümü, 9 TDV
  maddesi + 3 akademik makale tarandı).
- TDV'de `macin` · `hirsova` · `tuna-vilayeti` · `edirne-mutarekesi` slug'ları **302**
  (ölü) — başka slug denenmedi.
- İşçinin TDV önbelleği (`denetim/KRONO-DOBRUCA-1877-1005-tdv-onbellek/`)
  commitlenmedi; ölçüldü ki depoda 34 ayrı önbellek dizini ve 2.779 dosyada 450
  mükerrer çekim var (%16 boşa) ⇒ bu gövdeler paylaşılmalı.
