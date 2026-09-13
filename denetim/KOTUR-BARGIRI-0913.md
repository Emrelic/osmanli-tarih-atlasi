# KOTUR · BARGİRİ (MURADİYE) — Van 1548 paketi, ad düzeltmesi · KITA 13 · 13 Eylül 2026

```
DÜZELTME   Emre: "galiba yanlış yazmışım. kotur ve bargin = muradiye dir"
           ⇒ H-0012 listesindeki "margin" ve "bakur" = KOTUR ve BARGİRİ (Muradiye)
           ⇒ OLCUM-KITA13-VAN-0913.md §④'teki "⚪ kimlik belirlenemedi" CEVAPLANDI
KOŞU       koşu 10 → data/ DONUK · bu dosya yalnız ölçüm; yama değişikliği YOK (aşağıda)
```

## ① ATLASTA NOKTA VAR MI — EVET, İKİSİ DE (tek kayıt)

Arama: bütün `data/yerlesimler*.js`, kökler `kotur · bargir · berkri · muradiye ·
margin · bakur` (büyük/küçük harf duyarsız).
```
Bargiri (Muradiye)  data/yerlesimler_ek_ferhadpasa.js:83   38,9931 K · 43,7669 D  kale · m:"Van"
Kotur               data/yerlesimler_ek_ferhadpasa.js:94   38,4750 K · 44,3958 D  kale · m:"Van"
"Muradiye" başka kayıt YOK · "Berkri" YOK · "margin"/"bakur" yalnız bir Güney Amerika
kaynak metninde ("The Marginal Tribes") — ilgisiz
```
⚠️ Arama normalleştiricisiz yapıldı (kökler ASCII, adlarda İ/ı yok ⇒ `§4` `lower()`
tuzağı bu köklerde tetiklenmez). Mükerrer yok: 3 km sınavı dosya başlığında ölçülmüş
(Bargiri–Çaldıran 20,9 km · Kotur–Özalp 40,2 km).

## ② 1548'DE NE GÖSTERİYORLAR

```
Bargiri   s: ilhanli →1351 · karakoyunlu →1467 · akkoyunlu →1502 · safevi 1502-01-01 → 1548-08-25
          d: 1548-08-25 → 1920-04-23 · s: tbmm-turkiye 1920-04-23 → 1923-10-29
          ⇒ 1548-06: Safevî · 1548-10: OSMANLI (kesintisiz 1920'ye kadar)
Kotur     s: aynı zincir · safevi 1502-01-01 → 1548-08-25
          d: 1548-08-25 → 1639-05-17
          s: safevi 1639-05-17 → 1736 · afsar → 1747 · zend → 1794 · kacar → 1923
          ⇒ 1548-06: Safevî · 1548-10: OSMANLI · 1639'da İran'a geçiyor
```
İkisi de `YAMA-KITA13-VAN-0913.json` **B grubunun** `kapsam_bugun` listesinde ZATEN var
(1548-08-25 → 24 önerisi). A grubu (Başkale · Çaldıran · Şeyhrumi) ikisine dokunmuyor.

## ③ TDV NE DİYOR

| slug | HTTP | sonuç |
|---|---|---|
| `van` | 200 | gövde okundu (aşağıda) |
| `maku` | 200 | gövde okundu (Kotur için) |
| `muradiye` · `bargiri` · `berkri` · `kotur` | 302 ×4 | ÖLÜ — müstakil madde yok |
| `arama/?q=Bargiri` · `?q=Kotur` · `?q=Berkri` | 200 | sonuç listesi sayfa HTML'inde yok (istemci tarafında yükleniyor) ⇒ **ölçülemedi** |

**TDV `van`, birebir:**
- Fetih: *"onuncu gün kale fethedildi (24 Ağustos 1548)"* · *"Van Kalesi'nin fethinden
  sonra bölge beylerbeyilik haline getirildi"* · *"Bu sırada Vastan, Erciş, Adilcevaz ve
  Ahlat tekrar Osmanlılar'ın eline geçti."* — **Bargiri ve Kotur bu cümlede ADIYLA YOK.**
- Sancak listesi: *"Klasik Osmanlı sancakları ve ocaklık diye nitelendirilen sancaklar
  Adilcevaz, Bitlis, Erciş, Muş, **Bargiri**, Hizan, Hakkâri, Müküs, Kârkâr, Şırvi, Kisan,
  Espayrid, Ağakis, Mahmudi ve **Kotur**, Van eyaleti bünyesinde devamlılığı olan
  sancaklardır."* — bağlam: *"beylerbeyiliğe bağlı sancak sayısı **1558-1740** yılları
  arasında 13-34 arasında değişmiştir"* ve *"XVI-XVIII. yüzyıllarda Van eyaletine elli üç
  ayrı sancak bağlanmıştır"*.
- 1552: *"Ramazan 959'da (Ağustos-Eylül 1552) Ahlat'ı muhasara edip şehri ve kaleyi tamamen
  tahrip ettirdi, Erciş'i de ele geçirdi."* — Bargiri/Kotur ANILMIYOR.
- 1555: *"Amasya Antlaşması'yla Van ve çevresinin Osmanlılar'a ait olduğu kabul edildi (1555)."*

**TDV `maku`, birebir (Kotur):** *"1639 yılında IV. Murad ... Kasrışîrin Antlaşması
çerçevesinde Safevîler'den bölgede bulunan Kotur Kalesi'yle birlikte Mâkû Kalesi'nin de
yıkılmasını istedi. Her ne kadar kaleler yıkıldıysa da Kotur ve Mâkû, IV. Murad'ın
ölümünden sonra İranlılar tarafından tekrar işgal edildi."*

## ④ HÜKÜM

```
Bargiri 1548   🟢 TUTARLI — ama gün TÜRETİLMİŞ. TDV Bargiri'yi Van eyaletinin devamlı
               sancağı sayıyor (1558-1740 bağlamında); 1548'deki ediniminin GÜNÜNÜ ya
               da biçimini vermiyor. Atlas Van'ın gününü devralmış (dosya başlığı beyanlı).
               1548-1555 arası ayrı bir Safevî geri alışı TDV'de anılmıyor (1552'de
               yalnız Ahlat/Erciş) ⇒ yazılacak bir şey YOK.
Kotur 1548     🟢 TUTARLI — aynı dayanak, aynı sınır (gün Van'dan devralma).
Kotur 1639     ⚪ ölçülemedi — OLCUM-KITA13-VAN-0913.md §② ile aynı; yeni bilgi yok.
"margin"/"bakur"  ✓ kimlik çözüldü: Bargiri + Kotur. İkisi de Emre'nin ekran
               görüntüsündeki etiketler; atlas 1548 sonrası ikisini de Osmanlı gösteriyor.
```
📌 Not: Emre'nin 11 adlık listesinde "Kotur" zaten ayrıca geçiyordu; düzeltmeyle "bakur"
da Kotur çıkıyor ⇒ liste fiilen **10 ayrı yer**. Bu, `OLCUM §④`ün "bakur büyük olasılıkla
Kotur değil" çıkarımını çürütüyor (çıkarım listedeki tekrar varsayımına dayanıyordu).
Sayım güncellenirse (OLCUM §①: 🟢 6 · 🔴 2 · 🟡 1 · ⚪ 2, 11 ad): "margin" → Bargiri 🟢
(yeni ayrı yer), "bakur" → Kotur (zaten 🟢 sayılmış, tekrar) ⇒ **10 ayrı yer: 🟢 7 · 🔴 2 ·
🟡 1 · ⚪ 0.**

## ⑤ YAMA DOSYASI

`denetim/YAMA-KITA13-VAN-0913.json` **"margin" ya da "bakur" kelimesini HİÇ İÇERMİYOR**
(tarandı) — ad düzeltmesi gerektiren satır yok, dosyaya DOKUNULMADI. İki ad yalnız
`OLCUM-KITA13-VAN-0913.md` (§⓪ · §① tablosu · §④ · §⑥ özet) ile
`ARAC-KITA13-VANBOLGE-0913.py` / `ONGORU-KITA13-VANBITLIS-0913.md` içinde geçiyor;
bunlar bu görevin dosya listesinde değil ⇒ koordinatöre bildirildi.
Bargiri için yama ÖNERİSİ gerekmiyor: veri zaten 1548-08-25'te Osmanlı ve B grubunda.
