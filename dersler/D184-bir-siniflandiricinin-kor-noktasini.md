# BİR SINIFLANDIRICININ KÖR NOKTASINI DÜZELTMEK, YENİ BİR KÖR NOKTA AÇAR — VE İKİSİ FARKLI YERDE OLUR.

> Kimlik `D184` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **BİR SINIFLANDIRICININ KÖR NOKTASINI DÜZELTMEK, YENİ BİR KÖR
  NOKTA AÇAR — VE İKİSİ FARKLI YERDE OLUR.**
  *(7 Eylül 2026 · `KIMLIK-1923-0907`, kendi aletinde ve kendi aleyhine)*

  `norm(ad)` ile kova kuran aletleri bulan bir desen düzeltildi ve
  düzeltme **kendi kusurunu üretti** — ters yönde:
```
ESKİ desen  `\w+\.setdefault\(\s*norm\(`
   kaçırdı  iki satıra yayılmış kova  (n = norm(x) / ix.setdefault(n, …))
            ve norm()in TÜREVİ olan anahtar (kok(norm(v).split()[0]))
   ⇒ YANLIŞ NEGATİF
YENİ desen  `if X in Y` kalıbını da alıyor
   yakaladı bir ALT-DİZGİ testini (na in norm(c)) — kova DEĞİL
   ⇒ YANLIŞ POZİTİF
```
  🟢 **Ve nihai sayı değişmedi (2), çünkü o sayı hiçbir zaman desenden
  gelmiyordu — OKUMADAN geliyordu.**
  ⇒ ***Bir tarama bir ADAY LİSTESİ üretir, bir hüküm değil.*** Ve
  listeyi genişletmek onu doğrulamaz: her genişletme yeni bir yanlış
  pozitif sınıfı davet eder.
  📌 `§11`in *"kendi yazdığın ayrıştırıcı her zaman kötüdür"* ailesinin
  **iterasyon** yüzü: aile bugüne kadar tek bir kusuru anlatıyordu; bu
  üye **kusurun DÜZELTİLMESİNİN** ikinci bir kusur ürettiğini ölçüyor.
  🟡 Ve bir yan ders: *"anahtar alanı"* sezgisi (dosya `girdi.yukle()`
  çağırıyorsa anahtar YERLEŞİMDİR) **yanlış** çıktı — alet külliyatı
  **başka bir şey için** okuyor olabilir. Otomatik 7, elle okuma 2.
