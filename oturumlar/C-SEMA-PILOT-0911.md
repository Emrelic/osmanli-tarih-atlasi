# C ŞEMASI + PİLOT HAT — hukukî sınırın veri karşılığı

```
AD      C ŞEMA PİLOT
MODEL   (ne isen onu yaz)
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
SENİN DOSYAN   denetim/SEMA-C-0911.md · denetim/PILOT-C-KARLOFCA-0911.json
               oturumlar/C-SEMA-PILOT-0911.md (bu dosya)
🔒 KOŞU 9 CANLI (~02:00'e kadar) — `data/*.js` ve `arac/*.py` DONUK.
   OKU, YAZMA. Şema önerisi ve pilot `denetim/`e gider.
```

## ⓪ EMRE'NİN TARİFİ — aynen, 10 Eylül 2026

> *"C bir hat. Belki biraz da alan. İki devlet arasında yapılan bir antlaşma
> ile belli şehirler belli bölgeler belli bir devlete bırakılır… sınırın
> nereden geçtiği net bir şekilde çizilmiştir. Dağ tepe nehir şehir köy hangi
> yer nerede kalacağı belirlenmiştir."*
>
> *"C bunlara ek ÜÇÜNCÜ BİR GÖSTERİM DEĞİLDİR — burası çok önemli. C görünümü
> gerek A gerek B tarzında başlamış ve devam eden haritanın, belli bir
> tarihten sonra net sınır çizilmesini sağlayan modern anlaşmalar devreye
> girince o bölgede o iki devletin sınırları arasında BÖLGESEL OLARAK C
> tarzına geçilmesidir. C tarzı tamamen belgeye, hukukî anlaşmaya dayanır.
> C tarzı B veya A tarzının ÜSTÜNE EKLENMİŞ bölgesel görünümlerdir."*

🔴 Bu paragrafın en kritik cümlesi: **C bir katman değil, bir YAMADIR.**
A ya da B çalışmaya devam eder; C yalnız **belirli bir bölgede, belirli bir
tarihten sonra** onun üstüne biner.

## ① EMRE'NİN VERDİĞİ KARAR — kaynak

> **C'nin kaynağı ANTLAŞMA METNİNİN KENDİSİDİR.** (11 Eylül, M-3329)

Yani `kaynak:` alanına antlaşmanın **ilgili maddesi** yazılır (madde no +
metin). Onu anlatan akademik çalışma **ikincil** dayanaktır. Gerekçe:
C tamamen hukukî belgeye dayanır; belgenin kendisi birincildir, onu anlatan
çalışma bir yorumdur. TDV kuralı bozulmaz — TDV o metni **aktarır**.

## ② KOORDİNATÖRÜN ÖNERİSİ — ve onu ÇÜRÜTMEKTE serbestsin

**Veri HAT olarak toplansın.** Antlaşmanın söylediği şey bir hattır
(*"sınır Prut nehrini takip eder"*); alana çevirmek sonradan her zaman
yapılabilir, tersi yapılamaz.
🔴 Bu bir **öneri**, ölçüm değil. Pilot bunu sınayacak: Karlofça'yı hat
olarak kodlamaya çalış ve **nerede tıkandığını** söyle.

## ③ İŞİN — iki parça

**A. ŞEMA ÖNERİSİ** (`denetim/SEMA-C-0911.md`)
```
· hattın geometrisi nasıl saklanacak (koordinat dizisi? adlandırılmış
  coğrafî çapa? "Prut nehrini takip eder" gibi bir İFADE?)
· geçerlilik aralığı: `f:`/`t:` — mevcut desenin aynısı
· TARAFLAR: hangi iki künye arasında
· `kaynak:` — antlaşma + madde no + alıntı
· 🔴 EN ZOR SORU: bu hat A/B'nin üstüne NASIL biner? Yani motor, "bu
  bölgede bu tarihten sonra Voronoi'yi değil BU HATTI kullan" emrini
  nereden alacak? Bir KAPSAMA ALANI mı gerekiyor (hattın etkili olduğu
  kutu/poligon), yoksa hat kendi başına yeter mi?
```

**B. PİLOT — KARLOFÇA (1699-01-26)**
Bir antlaşmayı **uçtan uca** kodla. Karlofça'yı öneriyorum (Osmanlı-Avusturya
-Venedik-Lehistan, sınırları ayrıntılı tarif eder, TDV'de maddesi var).
Başka bir antlaşma daha uygunsa **gerekçesiyle değiştir**.
```
· antlaşma metnini/maddelerini BUL ve OKU
· sınır tarifini çıkar — hangi nehir, hangi dağ, hangi şehir kimde
· önerdiğin şemaya göre kodla
· 🔴 NEREDE TIKANDIĞINI YAZ. Pilotun asıl değeri, şemanın NEYİ İFADE
  EDEMEDİĞİNİ göstermesidir.
```

## ④ KURALLAR
```
🔴 KAYNAK: antlaşma metni birincil. TDV ikinci. Dışarı çıkarsan akademik /
   güvenilir / bilimsel. Forum · blog · içerik çiftliği · YZ üretimi metin ·
   kaynaksız derleme KULLANILMAZ. Vikipedi TEK DAYANAK DEĞİL.
🔴 TDV TUZAĞI: ölü slug 302 döner; CANLI slug YANLIŞ MADDE açabilir.
   `<title>` testi bunu geçirir — İÇERİĞİ OKU.
   🟢 Ve ölçülmüş desen: ANTLAŞMA slug'larının %28'i ölü; anlatı çoğu zaman
   YER ya da KİŞİ maddesindedir (`kasr-i-sirin-antlasmasi` ölü, ama
   `murad-iv` gövdesi antlaşmayı GÜNÜYLE veriyor).
🔴 TARİH UYDURMA. Gün yoksa `YYYY-01-01`; yıl da yoksa `bulunamadı`.
🟢 `D107` bulunamadı / ölçülemedi / okumadım — ÜÇ AYRI DAMGA.
🟢 `D022` öngörünü ölçümden ÖNCE yaz ve commit'le.
```

## ⑤ TESLİM
Tahtaya `--kim "C ŞEMA PİLOT" --kime "1.MURAT"`. Şema önerisi + pilotun
tıkandığı yerler + Emre'ye sorulması gereken açık sorular (şıklarıyla ve
senin önerinle). Veri YAZMA.
