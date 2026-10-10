# KAYNAKSIZ-1281-KONTROL-1010 — ilk halkası kaynaklılarda f kaç kez TAM 1281-01-01?

Zemin `origin/main` = `5ba57827`. Sayım, kaynak okuma yok. **Ham `f`** okunur (pencereyle kırpılmaz).
"İlk halka" = kaydın en erken `f`li `s:` dönemi. Betikler: `-kontrol.py` · `-kesik.py`.

## Tek sayı
1281'de VAR olan kayıtlar (ilk `f ≤ 1281-01-01`) içinde ilk halkası **TAM 1281-01-01** olanlar:
| grup | n | f<1281 | f=1281-01-01 | f>1281 | **1281'de var olanlarda TAM 1281** |
|---|---:|---:|---:|---:|---:|
| hicbiri (kaynaksız) | 1841 | 7 | 1412 | 422 | **1412/1419 = %99,5** |
| kayıt-düzeyi kaynaklı | 1847 | 23 | 664 | 1160 | 664/687 = %96,7 |
| donem_ici (bir dönemi kaynaklı) | 460 | 51 | 366 | 43 | 366/417 = %87,8 |
| **ilk halkasının KENDİSİ dönem-kaynaklı** | 258 | 80 | 134 | 44 | **134/214 = %62,6** |
Bütün veride `s:` dönemi 14.599 · `f < 1281` olan **143**.

## Okuma — koordinatörün iki şıkkına göre
- **Kayıt düzeyinde kaynaklı gruplarda da yığılma ~%88-97** ⇒ 1281-01-01 yığılması büyük ölçüde
  **veri yapısıdır (ufuk tabanı)**, kaynaksızlığa özgü bir anomali DEĞİL. → birinci şık.
- **Ama** yalnız ilk halkanın kendisine kaynak yazılmış kayıtlarda oran **%62,6**'ya düşüyor:
  kaynak eldeyken yazarların %37'si 1281'den önceki gerçek bir başlangıç yazmış. ⇒ 1281-01-01,
  ilk halkanın başlangıcı **bilinmediğinde** yazılan değerdir. Bu, "ufuk ucu varsayılan olarak
  yazılmış" hipotezini **başlangıç TARİHİ için** destekler — ama bu bir sınır işaretinin meşru
  kullanımıdır (`D210`) ve **SAHİBİN yanlışlığı hakkında bir şey söylemez.** Ölçülen iki tur
  hatası SAHİP hatasıydı (Aydın↔Menteşe, Muhâ↔Resûlî …), başlangıç günü hatası değil.
- ⇒ Sonuç: **ayrıştırılamazlık sürüyor.** Karşılaştırma grubu (ilk halkası kaynaklı) 214 kayıt
  ama kaynaklı halkanın sahip-doğruluğunu ölçmek döngüseldir (kaynaklı olduğu için seçilmiş).
  Bu sayı örneklemi **gerektirmiyor**: örneklem "kaynaksız ilk halka daha mı yanlış" sorusunu
  ancak kaynaklı ilk halkaların da yanlışlık oranı ölçülürse ayırır — o da ayrı, pahalı bir iş.

## 🔴 Kendi önceki cümlemin düzeltmesi
`KAYNAKSIZ-ORNEKLEM-1281-1010.md`de *"veride hiçbir `s:` dönemi 1281'den önce başlamıyor"* yazdım.
**YANLIŞ:** 143 dönem 1281'den önce başlıyor. Doğru olan dar cümle: *"1419 kaydın pencere-içi
1281 halkalarının hepsinde f TAM 1281-01-01"* — çünkü 1281'den önce başlayan ilk halkalar
**tam 1281-01-01'de BİTİYOR** ve yeni dönem o gün başlıyor (kırpılmış değil, KESİLMİŞ).
Koordinatörün "pencere artefaktı" açıklaması da tam isabet değil: ölçüm ham `f` okudu; sıfırın
sebebi pencere değil, dönemlerin 1281-01-01'de kesilmesi.

## Yan bulgu — ufuk kenarı bir EGEMENLİK DEĞİŞİMİ gibi yazılmış: 14 kayıt
1281-01-01'de biten ve aynı gün **BAŞKA sahiple** devam eden dönem: hicbiri 7 · donem_ici 3 ·
kayıt-kaynaklı 4. Hepsi Anadolu, 13'ü **Selçuklu → İlhanlı** (Kayseri, Tokat, Sivas, Van, Kırşehir,
Erzincan, Erzurum, Bitlis, Elbistan, Kemah, Bayburt), Sinop Selçuklu→Pervâne, Çankırı
Selçuklu→Çobanoğulları, Ankara Selçuklu→Ahiler. 1 Ocak 1281'de böyle bir devir olmadı ⇒ bu,
sınır işaretinin **bir olay gibi** yazıldığı somut vakadır (koordinatörün hipotezinin en güçlü,
ama küçük — 14 kayıt — kanıtı). Veri kuyruğu adayı; düzeltme yazılmadı.
