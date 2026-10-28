# D261 — `yer_id` olayın YERİdir, el değiştiren TOPRAK değil

**Slogan:** *"Madde var mı?" sorusu nokta düzeyinde CEVAPLANAMAZ — kronoloji maddesinin
`yer_id`si olayın geçtiği yeri gösterir, el değiştiren toprağı değil.*

## Vaka (4 Ekim 2026, SONRA1923-D204-1004)

1923-1945 arası 3.605 "1945'te yaşayan devlete ait" dönem için şu soru soruldu: bu
noktaların kaçı arada el değiştirdi? İşçi, ölçümden önce öngörüsünü yazdı — aralarında
şu madde vardı:

> "nokta düzeyinde kanıt ~50"

Yani: "el değişen noktaların ~50'si için kronolojide o noktayı gösteren bir madde
bulacağım." Ölçüm bu öngörüyü doğrulamadı ve **sebebi sayı değil, sorunun kendisiydi:**

> 🔴 **YANLIŞ SORU:** madde `yer_id`si olayın YERİdir (antlaşma başkenti), değişen
> toprak değil. **Klaipeda → Paris.**

Klaipeda (Memel) 1939'da Almanya'ya geçti. Bu değişimi anlatan maddenin `yer_id`si,
antlaşmanın imzalandığı/kararın alındığı yeri gösteriyor — **Klaipeda'yı değil.** Yani
"Klaipeda'nın maddesi var mı?" diye `yer_id` üzerinden sorulduğunda cevap *yok* çıkar,
oysa madde VARDIR; yalnız başka bir yere bağlıdır.

İşçi bu yüzden yöntemini değiştirdi: nokta düzeyinden **bölge vekiline** geçti ve
1.233 sayısını oradan kurdu — vekil olduğunu da açıkça beyan etti.

## Niçin bu ders ağır

**Değişmez 2'nin ölçütü tam bu varsayıma yaslanıyor:** "her `d:`/`v:` kırılmasının ±30
gün içinde kronoloji maddesi olmalı." Ölçüt *maddenin varlığını* arıyor, maddenin o
noktaya **bağlı** olmasını değil. İki ayrı soru:

```
① Bu kırılmanın ±30 gün içinde BİR madde var mı?        ← Değişmez 2 bunu sorar
② O madde BU TOPRAĞIN el değiştirmesini mi anlatıyor?   ← SORULMUYOR
```

②'yi sormadığı için Değişmez 2, "Fuzûlî'nin Leylâ vü Mecnûn'u tamamlaması" maddesiyle
Annaba/Şehrizor'un el değiştirmesini kapatabiliyor (bu vaka ayrıca ölçüldü: 621
kırılmanın 115'i **yer körü** — madde var ama yer eşleşmesi yok).

⇒ `yer_id` üzerinden nokta-madde eşlemesi kurmaya çalışan her ölçüm, iki yönde de
yanılır:
- **yanlış NEGATİF:** madde var, `yer_id` başka yeri gösteriyor → "madde yok" denir
- **yanlış POZİTİF:** `yer_id` doğru yeri gösteriyor ama madde başka bir şeyi anlatıyor
  → "madde var" denir ve kırılma kapatılmış sayılır

## Kural

1. **`yer_id` bir KONUM alanıdır, bir ATIF alanı DEĞİL.** "Bu madde şu toprağın el
   değiştirmesini anlatıyor" demek istiyorsan ayrı bir alan gerekir; `yer_id` o işi
   yapmaz ve yapması da beklenmemeli (kamera odağı için tasarlandı).
2. **Nokta düzeyinde "maddesi var mı" ölçümü kurulmaz.** Bölge/künye vekiline geçilir ve
   **vekil olduğu BEYAN EDİLİR.** Vekil sayı planlama ölçümüdür; veriye yazılmaz.
3. **Anahtar kelime eşleşmesi iyimserdir.** Aynı ölçümde "madde VAR" hükmü kelime
   eşleşmesiyle kuruldu ve işçi kendi uyardı: *"Barbarossa'nın kendi maddesi yok."*
   Eşleşen kelime, anlatılan olay değildir.

## 🔴 Ek (aynı gün, SONRA1923-KAPI-EVREN-1004) — yer körlüğü TEK KAPININ KAZASI DEĞİL

Bu ders yazıldıktan bir saat sonra aynı kusur **başka bir kapıda** ölçüldü:

> `kirilmasiz_madde`'nin (2t) `d`/`v`/`s` havuzu **YERSİZ** (`denetle.py:1936`): ±30 günde
> **dünyanın herhangi bir yerindeki** kırılma bir maddeyi kapatıyor. 2s'de var olan
> yer/taraf şartı (`:1377`) 2t'de **YOK.**

Yani aynı yapısal boşluk iki ayrı kapıda, birbirinden bağımsız kodlanmış. Bugün 2t'nin 67
maddesinin hepsi doğru ötüyor — ama bu *tesadüf*: 1923-45 aralığında henüz kırılma
yazılmadığı için kapatacak ilgisiz kırılma yok. Kampanya kırılma yazdıkça ilgisiz
kırılmalar 1923-45 maddelerini **sessizce** kapatmaya başlayacak.

Aynı teslimde ikinci bir aynı-sınıf boşluk da bulundu: **işgalin aynası yok** —
`kirilmasiz_madde` yalnız `_toprak_iddiasi`yi (etiket `toprak-*`, `:1764`) okuyor ve 45
işgal maddesinin **38'i** toprak etiketi taşımıyor ⇒ *"işgal maddesi VAR, `isg:` kırılması
YOK"* diye soran denetim **hiç yok** (`_isg_yeri_mi` işlevi `:1902`de ZATEN duruyor,
çağrılmıyor — `D257`nin "bir işlevin VAR olması ÇAĞRILDIĞI anlamına gelmez" maddesi).

**Bir günde üç kapıda sayıldı:**
```
Değişmez 2   621 kırılmanın 115'i YER KÖRÜ (madde var, yer eşleşmesi yok)
4c / 4d      SAYI tavanı ÜYE hareketini gömüyor (net −29 ↔ 69 birim hareket)
2t           havuz YERSİZ + işgal kolu HİÇ YOK
```
⇒ Ders tek bir kapının kusuru olarak okunmamalı: **"madde var mı" sorusunu yere
bağlamayan her ölçüt aynı yanılgıyı üretir.** Yeni bir denetim yazılırken ilk soru
*"bu ölçüt YERİ soruyor mu"* olmalı.

## Bağlı dersler
- [[D204]] devlet var, yeri yanlış — "oraya hiç ait miydi" sorulmuyor
- [[D207]] atlas referans değil — vekil sayı dayanak olamaz
- [[D210]] hassasiyet kaynağı aşamaz — pencere uçları sınır işaretidir, ölçüm değil
- [[D260]] atlas kendini kaynak gösteriyor — türetilmiş ve DOĞRU olan en sinsisidir
- [[D257]] bir işlevin VAR olması ÇAĞRILDIĞI anlamına gelmez (`_isg_yeri_mi` tam bu)
