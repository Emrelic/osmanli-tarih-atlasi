# Oturum 8 — Devam görevi ölçümleri (2026-07-30)

Merkez oturumun denetim+devam görevine cevap. Motora DOKUNULMADI (kilit
Oturum 16'da); bütün ölçümler scratchpad kopyası üzerinde, girdiler yalnız
okunarak yapıldı. Zemin: HEAD `2d391a0`, 917 yerleşim.

## 5) MIMARI §3.2 — çıktı boyutu mimarisi: ölçüm ve öneri

### Bugünkü dosyanın anatomisi (r83 çıktısı ölçüldü)

| Bileşen | Boyut | Pay |
|---|---|---|
| `window.PARCALAR` (eşsiz gövde parçası havuzu) | 23 790 KB | **%98,8** |
| `window.DONEMLER` (442 dönem: tarih + petek deltaları + havuz referansları) | 258 KB | %1,1 |
| `window.PETEKLER` (917 kayıt, yalnız `a:` alan) | 18 KB | %0,1 |
| **donemler.js toplam** | **24 067 KB** | |

Kritik bulgu: **sahiplik bilgisi zaten küçük** (258 KB, delta yapısı `e:`/`c:`
alanlarıyla mevcut). Dosyanın ~%99'u, sahibi değişen gövdelerin YENİDEN yazılan
geometrisi. Yani §3.2'nin öngördüğü "yerleşim × dönem → sahip" tablosu için ek
bir şey icat etmeye gerek yok — motorun delta yapısı O TABLODUR. Eksik olan tek
şey: tarayıcının gövdeyi kendisinin boyaması, geometrinin dönem başına değil
**bir kez** yazılması.

### Önerilen hedef yapı (arc havuzu / TopoJSON deseni)

1. **Kenar (arc) havuzu**: örtünün ortak kenar ağı zaten motorda çıkarılıyor
   (`_kenarlar`). Her kenar dosyaya BİR kez yazılır (bugün: iki komşu gövdede
   ve onlarca dönemde tekrar).
2. **Hücre = arc referans listesi**: 917 hücre, her biri ~5-10 tam sayı.
   Tarayıcı açılışta arc'ları çözüp hücre poligonlarını bir kez kurar
   (parça havuzu deref'inin bire bir genellemesi — `parcaCoz` deneyimi var).
3. **Sahiplik = mevcut delta tablosu** (`e:`/`c:` + yabancı için `s:` zinciri).
   Tarih değişince yalnız değişen hücrelerin rengi güncellenir
   (`setFeatureState` — MapLibre bunu poligon yeniden yüklemeden yapar).
4. Kaba boyut hesabı: iç kenar ağı (~2 500 kenar × ~40-80 nokta) + kıyı
   (0.002'de 48 300 nokta) ≈ 200-300 bin nokta ≈ **3-5 MB**; sahiplik zaten
   0,3 MB. Bugünkü 24,1 + 11,8 = 35,9 MB'lık iki dosya **~5 MB'a** iner (~7-10×)
   ve — asıl önemlisi — **büyüme terimi değişir**: bugün maliyet
   `Σ(dönem × gövde çevresi)`, hedefte `Σ(hücre kenarı) + Σ(sahip değişimi)`.
   Pencere Asya'ya açılıp nokta 4 000'e çıkınca fark "yüzlerce MB" ile
   "~15-20 MB" farkıdır.

### §3.1 (epok) ile etkileşim — Oturum 16'ya koordinasyon notu

`kur:`/`bit:` motor desteği epok başına AYRI Voronoi demek. Arc havuzu epoklar
ARASINDA da paylaşılmalı (yeni nokta yalnız komşu hücrelerin kenarlarını
değiştirir; öteki arc'lar aynı kalır ve havuzda tekilleşir). Epok sayısı E,
epok başına değişen kenar sayısı k ise maliyet `O(toplam_kenar + E×k)` kalır —
epok başına tam kopya yazılırsa (`E × 3-5 MB`) kazanç geri yanar. **Bu yüzden
§3.1 ve §3.2 tek pakette tasarlanmalı; Oturum 16 epok çıktı biçimini arc
havuzunu düşünerek seçmeli.**

Kabaca iş sırası önerisi: (1) motor arc+sahiplik çıktısı üretsin (mevcut
gövde çıktısıyla YAN YANA, eski format düşene kadar), (2) app.js hücre-boyama
moduna geçsin, (3) A/B görsel doğrulama, (4) eski format kaldırılsın.
`js/app.js` "yeniden yazılır" korkusu abartılı: değişen yer `tekVeri`/`setData`
çağrılarının beslendiği katman; dizinler, zaman çubuğu, paneller dokunulmaz.

## 1) Yaslama yarıçapı taraması — SONUÇ: 0.30 kalsın, KORUMA_PAYI GEREKLİ

917 noktalı güncel veriyle 8 konfigürasyon (nehir yarıçapı × koruma):

| nehir_mes | koruma | nehre yaslanan köşe | iptal | <%10 petek (bileşen ölçütü) |
|---|---|---|---|---|
| 0.10 | yok | 359 | — | 2 (Riyad %1, Ankober %7) |
| 0.20 | yok | 718 | — | 2 (aynı) |
| 0.30 | yok | 1 032 | — | 2 (aynı) |
| 0.40 | yok | 1 342 | — | 2 (aynı) + Mihaliç %32'ye düşüyor |
| 0.10 | 0.06 | 340 | 28 | 1 (Ankober %7) |
| 0.20 | 0.06 | 673 | 54 | 1 (Ankober %7) |
| 0.30 | 0.06 | 949 | 92 | 1 (Ankober %7) |
| 0.40 | 0.06 | 1 231 | 120 | 1 (Ankober %7) + Mihaliç %32 |

Bulgular:
- **Yarıçap, çökme sayısını DEĞİŞTİRMİYOR** (0.10'da da 0.40'ta da aynı 2 vaka).
  Nehre yaslanan köşe sayısı yarıçapla doğrusal artıyor (359→1342) — yani sınırın
  nehri takip etme davranışı gerçekten yarıçapa bağlı; ama çökme, yarıçapın değil
  sınırın hangi tarafa çekildiğinin sonucu (merkez oturumun teşhisiyle uyumlu).
- **KORUMA_PAYI'nın ölçülen faydası gerçek**: Riyad'ı HER yarıçapta kurtarıyor
  (korumasız %1'e düşüyor — Vâdi Hanîfe/sırt çekmesi). Yarıçap küçültmek korumanın
  yerini TUTMUYOR. Bedava da değil ama ucuz: 0.30'da 949 yaslamaya karşı 92 iptal.
- **0.40 zararlı**: Mihaliç (Karacabey) %32'ye düşüyor. Büyütme yönü kapalı.
- Estergon/Solnok güncel 917'lik veride korumasız koşuda BİLE çökmüyor — çökme,
  o günkü nokta kümesinin yerel kenar geometrisine bağlıymış. Bu, korumanın
  gereksiz olduğu anlamına gelmez: aynı sınıf hata veri değiştikçe her an geri
  gelebilir (Riyad bugünkü kanıtı). **Öneri: nehir_mes=0.30 ve KORUMA_PAYI=0.06
  aynen kalsın**; sırt yarıçapı (0.35) hiç taranmadı ve sırta yaslanan köşe nehrin
  2 katı (2 114) — Ankober muhtemelen sırt vakası, ayrı taranabilir (düşük öncelik).

## 2) Yedinci denetim: ada kuralı ayrımı — SONUÇ: yanlış alarm 18'den 1'e iniyor

Ham hücre `PETEK[i] ∩ KARA` yerine `PETEK[i] ∩ (yerleşimin KENDİ kara bileşeni)`
alınırsa (mevcut motor koduna tek satırlık dokunuş):

- ESKİ ölçüt: 18 vaka (<%10) — Venedik %0, Abu Dabi %1, Masira %1, Kemeran %2,
  Kiş %3, Brakya %5, Bozcaada %6, Pag %6…
- **YENİ ölçüt: 1 vaka — Ankober %7** (2 887 / 41 777 km², Habeş yaylası, iç kara).

17 vakanın 17'si ada kuralının DOĞRU çalışmasıymış; oran tabanı düzelince denetim
yalnız gerçek kaybı gösteriyor. Ankober gerçek bir sinyal (sırt yaslaması hücresinin
%93'ünü yutuyor) ama görünmez değil (2 887 km² kalıyor) — izlemeye değer, acil değil.
**Öneri: `_oranlar` döngüsündeki `PETEK[i].intersection(KARA)` ifadesi, noktayı
içeren kara bileşeniyle kesişime çevrilsin** (bileşen listesi `_komp` zaten ada
kuralı bloğunda var; STRtree ile nokta→bileşen tek sorgu).

## 3) Venedik / Veneto — SONUÇ: Veneto boyanıyor ama FLORANSA renginde

```
Venedik noktası (12.3188, 45.4409) → kendi kara bileşeni (lagün adası): 9 km²
nihai petek: 22 km²  ·  ham hücre ∩ tüm KARA: 36 825 km²
ham hücrenin ANAKARA payı 36 803 km² → bugün 36 719 km²'si FLORANSA'da
```

Korkulan "Veneto hiç boyanmıyor" değil, daha kötüsü: **Veneto, Floransa
kimliğiyle boyanıyor.** Ada kuralı Venedik'in anakara payını kesiyor (doğru),
"boşta kalan parçayı içerideki en yakın yerleşime ver" adımı da anakarayı
anakaradaki en yakın noktaya — Floransa'ya — veriyor. Kullanıcı 15-18. yüzyıl
İtalya'sına baktığında Terraferma'yı (Padova, Verona, Brescia, Treviso) yanlış
devletin renginde görecek.

**Bu bir motor hatası değil, §2 sınıfı nokta eksiği**: Veneto'da hiç yerleşim
noktası yok. Çözüm veri tarafında — Terraferma'ya 4-6 nokta (Padova, Verona,
Brescia, Treviso, Udine, Vicenza) `venedik` kimliğiyle eklenmelî (Oturum 4/14
işi; devlet kimliği `renkler.py`'de zaten var). Motor tarafında yapılacak bir şey
yok; yedinci denetimin yeni ölçütü bu sınıfı zaten yakalamaz (Venedik'in kendi
bileşeni 9 km² ve tamamı elinde) — bu yüzden **"noktasız büyük kara bileşeni"
ayrı bir denetim adayı**: bileşende nokta yoksa ve bileşen komşu hücrelerden
X km²'den fazla pay alıyorsa uyar.

## 4) 32 ULP bozuk kenar — SONUÇ: kaynak ADA KURALI, kesin

Aşama aşama sayım (8 konfigürasyonun HEPSINDE aynı desen):

```
ham 0 → coverage_simplify 0 → KIYI KESİMİ 0 → ada kuralı SONRASI 32
```

Kıyı kesiminin kendisi (hücre hücre `intersection(KARA)`) bugünkü veride hiç
bozuk kenar üretmiyor; 32'nin TAMAMI ada kuralı bloğundan (uret_petek.py
519-556) çıkıyor — hücre hücre `difference(_k)` ve `unary_union` yeniden
düğümleme yapıp ortak köşeleri ULP kaydırıyor, yani satır 427'deki kuralın
bilinen ihlali. Baraj gölü kuralı ve KORUMA_PAYI'nın etkisi SIFIR (koruma
açık/kapalı, yarıçap 0.1-0.4: hep 32; tek sapma 0.1'de 30 — yaslama deseni
değişince etkilenen hücre sayısı oynuyor).

Kalıcı çözüm (tasarım hazır, motor kilidi açılınca uygulanabilir): kıyı
çizgisini de ÖRTÜ DÜĞÜMLEMESİNE sokmak — `polygonize(_puruzsuz + KARA.boundary
çizgileri)`. Yüzler kıyıyla bölünmüş çıkar; deniz yüzleri atılır, kara yüzleri
sahibine `coverage_union_all` ile verilir. **Ada kuralı da yüz SEVİYESİNDE
sahiplik değişimine döner** (yüzün sahibi başka kara parçasındaysa yüz, kendi
parçasındaki en yakın yerleşime atanır) — geometri hiç değişmediği için ULP
riski yapısal olarak sıfırlanır ve `intersection`/`difference`/`unary_union`
üçlüsü kıyı sonrası boru hattından tamamen çıkar. Bedeli: polygonize girdisine
~48 bin noktalık kıyı çizgisi eklenir (tek seferlik üretim maliyeti, çıktı
boyutuna etkisi yok). Yan kazanç: bu yüz yapısı, §3.2'deki arc havuzunun da
doğal ara ürünüdür — iki iş aynı yeniden düzenlemede birleşir.

Not: mevcut 32 bozuk kenarın görünür etkisi merkez oturumca ölçülmüştü (yok
denecek kadar az); bu yüzden düzeltme ACİL değil, ama ada kuralı hücre hücre
mutasyon yaptıkça sayı veriyle birlikte büyüyecek — arc/§3.2 paketiyle birlikte
ele alınması en ucuz yol.

## Özet — merkez oturuma öneriler

1. `nehir_mes=0.30` ve `KORUMA_PAYI=0.06` **kalsın** (yarıçap çökme sayısını
   etkilemiyor, koruma Riyad'ı her yarıçapta kurtarıyor; 0.40 zararlı).
2. Yedinci denetimin oran tabanı **kendi kara bileşenine** çevrilsin
   (18 → 1 yanlış alarm; tek satırlık motor değişikliği, kilit açılınca).
3. **Veneto vakası veri işi**: Terraferma'ya `venedik` kimlikli 4-6 nokta
   (Padova, Verona, Brescia, Treviso, Vicenza, Udine). Ek denetim adayı:
   "noktasız büyük kara bileşeni komşudan pay alıyor" uyarısı.
4. 32 ULP'nin kaynağı **ada kuralı** (kesin ölçüm); kalıcı çözüm kıyıyı örtü
   düğümlemesine sokmak — §3.2 arc havuzuyla aynı pakette yapılmalı.
5. §3.1 (epok) + §3.2 (arc havuzu) birlikte tasarlanmalı; Oturum 16'nın epok
   çıktı biçimi arc paylaşımını gözetmeli, yoksa epok başına tam kopya boyut
   kazancını geri yakar.
