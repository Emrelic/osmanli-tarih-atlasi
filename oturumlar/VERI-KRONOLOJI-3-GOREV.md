# VERİ KRONOLOJİ 3 — `2t` borcu: madde toprak iddia ediyor, harita kıpırdamıyor

> Açılış brifingi · 7 Ağustos 2026 · **model: Sonnet** · rol: **YAPIMCI**
> ⚠️ `claudemre-basla` ÇALIŞTIRMA — o yalnız koordinatör oturumunda çalışır.

## AÇILIŞ — sırayla
```
1. bu dosyayı oku
2. CLAUDE.md baştan sona — özellikle §3 (üç değişmez), §4 (TDV, 302 testi),
   §7 (dosya sahipliği), §8 (veri biçimleri), §11 (heredoc YASAK)
3. arac/denetle.py — `kirilmasiz_madde()` fonksiyonunun BAŞINDAKİ yorumu oku;
   ölçütün NİÇİN böyle olduğu orada yazılı
4. py arac/denetle.py 2>&1 | tail -30      ← kendi tabanını KUR
   ⚠️ `grep` ile SÜZME. Dün süzerek baktım, denetim ÇÖKÜYORDU ve fark
      etmedim. Koşunun bittiğini ancak SON SATIR (SONUÇ) gösterir.
```

## ① NİÇİN VARSIN — ölçülmüş boşluk

```
Değişmez 2t  ✗  kırılmasız madde: 59 (tavan 49) — FAZLALIK 10
```
🔴 **Bugün tavanın üstünde duran TEK değişmez.** Öteki beşi temiz
(`1` ✓ · `1b` ✓ · `2` ✓ · `2s` ✓ · konum ✓).

## ② 🔴 İŞİN NE OLDUĞUNU YANLIŞ ANLAMA — bu "madde yazma" işi DEĞİL

`Değişmez 2`nin **aynadaki hâli**:
```
Değişmez 2   kırılma var → maddesi var mı?     (harita oynuyor, madde yok)
Değişmez 2t  madde var   → kırılması var mı?   (madde var, HARİTA OYNAMIYOR)
```
⇒ Yeni madde yazmıyorsun. Var olan **59 maddeyi tek tek yargılıyorsun** ve
her biri için **iki cevaptan biri** çıkıyor:

```
(A) ETİKET YANLIŞ    madde aslında toprak değişimi İDDİA ETMİYOR
                     ⇒ `etiket:` alanından `toprak-kazanc`/`toprak-kaybi` ÇIKAR
(B) HARİTA EKSİK     madde gerçekten toprak devrediyor ama veride karşılığı yok
                     ⇒ BANA BİLDİR — `yerlesimler*.js` BENİM dosyam, sen yazmazsın
```

📌 Ölçüt `etiket:`ten okunuyor (`denetle.py` `_toprak_iddiasi`), `k:`ten
değil — ve bu **kasıtlı**: bir ittifak antlaşması toprak devretmez, eski
ölçüt onu borç sayıyordu.

**En eski on iki tanesi — büyük ihtimalle (A):**
```
1362-03      I. Murad tahta çıktı                    ← CÜLÛS, toprak değil
1362-09-01   Rumeli Beylerbeyliği kuruldu            ← İDARÎ, toprak değil
1381-10-01   Eretna'nın sonu · Kadı Burhâneddin      ← devlet değişimi, ölç
1400-08-01   Timur Sivas'ı yerle bir etti            ← YIKIM, devir mi?
1402-12-14   Timur İzmir'i şövalyelerden aldı        ← gerçek devir, (B) olabilir
1402-12-20   Îsâ Çelebi Bursa'yı ele geçirdi         ← Fetret içi, dikkat
1405-01-01   Yenişehir Ovası savaşı                  ← savaş, devir yok olabilir
1415-03-01   Konya kuşatması ve antlaşma             ← antlaşma, statüko mu?
1422-01-01   Cüneyd Bey Aydın-ili'nin başına döndü   ← gerçek devir
1426-01-01   Cüneyd Bey ve ailesinin idamı           ← hânedan sonu
1488-01-01   Safi'nin Portekiz nüfuzuna girmesi      ← NÜFUZ ≠ toprak?
1513-09-01   Azemmûr'un alınışı                      ← gerçek devir
```
⚠️ **Bunlar benim ön tahminlerim, ölçüm değil.** Doğrula ya da çürüt.

## ③ ⚠️ VE FETRET'E DİKKAT — ölçülmüş bir tuzak
Atlasta **1402-1413 arası HİÇ Osmanlı gövdesi yok** (bugün ölçüldü, `d:`/`v:`
dönemleri o aralıkta boşalıyor). Listedeki dört madde tam orada. Bir Fetret
maddesinin "kırılması yok" görünmesi **veri kusuru olmayabilir** — atlasın
o dönemi nasıl modellediğiyle ilgili. Karar vermeden **bana sor.**

## ④ YAZMA YETKİSİ
```
🟢 SENİN      data/olaylar*.js — YALNIZ `etiket:` alanı
              oturumlar/VERI-KRONOLOJI-3-ILERLEME.md
🔴 DEĞİL      data/yerlesimler*.js (harita düzeltmesi BENDE)
              arac/ · js/ · index.html · kök *.md
              maddenin `t:` `b:` `d:` alanları — metin DEĞİŞTİRME
```
🔴 **`etiket:` dışında hiçbir alana dokunma.** Bir maddenin tarihini ya da
metnini değiştirmek `Değişmez 2`yi kırabilir ve o **sıfır açık** durumda.

## ⑤ SENİ BAĞLAYAN YASALAR
```
CLAUDE.md §3   üç değişmez — DEĞİŞTİRDİĞİN HER ŞEYDEN SONRA denetle.py koş
CLAUDE.md §4   TDV birincil. 🔴 ÖLÜ SLUG TESTİ: HTTP 302 = ÖLÜ · 200 = VAR
               ⚠️ `ordu` tuzağı: 200 + doğru başlık ama YANLIŞ MADDE
CLAUDE.md §8   gün yaz; ay hassasiyeti (`t:"1362-03"`) senkronu bozar
CLAUDE.md §11  🔴 heredoc/`sed` ile Türkçe düzenleme YAPMA — dün DÖRT kez
               ısırdı, biri dosyaya görünmez 0x08 baytı yazdı
B10            devraldığın hiçbir rakamı doğrulamadan aktarma —
               yukarıdaki 59 ve 12 satırlık liste DAHİL, KENDİN SAY
```
📌 Ve **ölçütü gevşetme** (`§11`): *"aynı yıl"* değil, ±30 gün.

## ⑥ HABERLEŞME
```
🔴 AÇILINCA HEMEN HABER VER: "VERİ KRONOLOJİ 3 açıldı, brifingi okudum,
   data/olaylar*.js'in `etiket:` alanı bende"
   Protokol — dosya sahipliğini bilmezsem aynı dosyayı ikinci oturuma veririm.
· KALEM KALEM bildir, biriktirme
· commit YALNIZ oturumlar/VERI-KRONOLOJI-3-ILERLEME.md, pathspec'li
· (B) çıkan her madde için BANA BİLDİR — veriyi ben yazarım
· bulamadığını `bulunamadı` diye yaz
```

## ⑦ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① `2t` 59 → 49 ya da altına indi          (fazlalık 10'du)
② her düzeltme için (A) mı (B) mi YAZILI — ve (A) ise NİÇİN toprak
   iddia etmediği tek cümleyle
③ (B) çıkanların listesi bana teslim edildi
④ denetle.py TAM koşuyor: Değişmez 1 · 1b · 2 · 2s · konum HÂLÂ TEMİZ
   ⚠️ `2` sıfır açıkta kalmalı — bir etiket düzeltmesi onu kırarsa GERİ AL
```
⚠️ **Onunu da bitirmen şart değil.** Beşini KESİN gerekçeyle kapatmak,
onunu tahminle kapatmaktan iyidir.
