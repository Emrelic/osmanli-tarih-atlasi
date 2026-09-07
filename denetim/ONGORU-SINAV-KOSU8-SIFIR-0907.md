# ÖNGÖRÜ — «0 MADDE» BASAN 12 DOSYA

> Oturum **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7 Eylül 2026
> 🔴 **ÖLÇÜMDEN ÖNCE YAZILDI.** Hiçbir dosya açılmadı; yalnız adlar,
> `_kronoloji_uygula.py`nin **hedefi**, ve `KOSU-BITINCE-SIRA.md` ile
> `CLAUDE.md`nin bu dosyalar hakkında **zaten yazdıkları** okundu.
> Sahibi: bu oturum. Sınav anı: **hemen** (koşu 8'i beklemiyor).

---

## SORULAN İKİLİ — ve niçin YETMEYECEĞİNİ düşünüyorum

Sevk iki kova veriyor:
```
Ⓐ dosya kronoloji yaması DEĞİL  → glob yanlış sahiplenmiş
Ⓑ dosya kronoloji yaması AMA alet okuyamıyor → GERÇEK KAYIP
```

🔴 **Ö-S1 · ÜÇÜNCÜ BİR KOVA ÇIKACAK ve çoğunluk orada olacak.**
```
Ⓒ dosya GERÇEK bir kronoloji yaması, alet de DOĞRU çalışıyor —
  ama HEDEFLERİ AYRI:
     `_kronoloji_uygula` hedefi   data/devletler.js → künye içi `kronoloji:[]`
     bu dosyaların hedefi         data/olaylar*.js  → ÇEKİRDEK kronoloji
```
**Dayanağı ölçüm değil, projenin kendi kaydı** — `CLAUDE.md` şunu yazıyor:
> *«Kronoloji» bu projede **İKİ AYRI ŞEY**: künye kronolojisi
> (`devletler.js` içinde, aleti VAR) · ÇEKİRDEK kronoloji
> (`data/olaylar*.js`, **aleti YOK**). Ve aletin adı hangisi olduğunu
> söylemiyor.*
> *«SONUÇ: bu gecenin BÜTÜN çekirdek kronoloji önerileri ELLE
> uygulanacak»* — ve orada **adıyla** sayılanlar: `MANDA-0906` ·
> `BALKAN-0906` · `AFRIKA-0906` · `AVRUPA-0906` · `1917-TASIMA-0906`.

⇒ O beşi **Ⓐ olamaz** (gerçek kronoloji yaması) ve **Ⓑ de olmayabilir**
(alet onları okumakla yükümlü değil). Üçüncü kova.

---

## SAYILI ÖNGÖRÜ — dört alanla

```
Ö-S1  ÜÇÜNCÜ KOVA (Ⓒ, hedef ayrı) ÇIKACAK ve en az 5 dosya orada olacak
      ① beklenen: Ⓒ ≥ 5
      ② MAZERET YOK — beş dosya `CLAUDE.md`de ADIYLA sayılı
      ③ nereden: dosyanın kendi anahtarları + hedef alanı · birim DOSYA
      ④ neye karşı: 12 dosyanın elle açılması, ŞİMDİ

Ö-S2  Ⓑ (gerçek kayıp) SIFIR OLMAYACAK ama AZINLIKTA kalacak: 0 < Ⓑ ≤ 3
      ① beklenen: 1-3 dosya
      ② mazeret VAR: `YAMA-1923-0905`in `id_onerisi` vakası tek bir
         dosyada ölçülmüştü; benzer bir alan-adı sapması burada
         hiç olmayabilir. Ⓑ=0 çıkarsa öngörü çürür ama sınıf durur.
      ③ nereden: dosyanın anahtarları ↔ aletin beklediği anahtarlar
      ④ neye karşı: aynı ölçüm

Ö-S3  Ⓐ (hiç kronoloji yaması değil) EN AZ 1 çıkacak — `ZEND-1794-0905`
      ① beklenen: ≥1, ve ZEND onlardan biri
      ② MAZERET YOK — `CLAUDE.md` ZEND'i zaten Ⓐ diye kaydediyor
         («o sıfır «kayıt yok» değil «bu dosya o cinsten değil» demek»)
      ③ nereden: dosyanın anahtarları · birim DOSYA
      ④ neye karşı: aynı ölçüm

Ö-S4  «12» sayısı KENDİSİ eksik olabilir
      ① beklenen: glob'un tuttuğu ama 0 basan dosya sayısı, kuru koşunun
         bildirdiği 12'den FARKLI çıkabilir
      ② MAZERET YOK — kuru koşu koordinatörün, ben bağımsız sayacağım
      ③ nereden: `denetim/KRONOLOJI-*.json`un TAMAMI · birim DOSYA
      ④ neye karşı: aynı ölçüm
```

---

## 🔴 VE MAZERETİ OLMAYANLAR ÖNCEDEN İŞARETLENDİ

**Ö-S1 · Ö-S3 · Ö-S4 için mazeret YOK.** Tutmazlarsa öngörü çürür ve
*«dosyalar beklediğimden başka çıktı»* denmeyecek.
**Yalnız Ö-S2'nin mazereti var** ve yukarıda yazılı.

📌 `§11`: *«mazeretin de önceden yazılması gerekiyor — yoksa her yanlış
öngörü sonradan açıklanabilir hâle gelir ve hiçbiri çürümez.»*

## ⚠️ VE BİR ŞEYİ ŞİMDİDEN SÖYLÜYORUM: Ⓒ ÇIKARSA KUSUR KAYBOLMUYOR

Ⓒ *«alet doğru çalışıyor»* demektir ama ***«`0` doğru bir çıktı»*
demek DEĞİLDİR.** Bir alet, kendisine ait olmayan bir dosya için
`0 madde` basarsa okuyan onu *«yapacak iş yok»* diye okur — oysa
doğrusu ***«bu dosya BANA ait değil»***. Bugün ölçtüğüm sınıfın ta
kendisi: ***`0`, «yok» ile «bakmadım» arasında ayrım yapmaz.***
⇒ Ⓒ'nin çaresi alete bir kova daha eklemek: **«sahiplenmedim»**.
