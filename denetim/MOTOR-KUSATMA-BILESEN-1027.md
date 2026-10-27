# MOTOR — KUŞATMA BİLEŞENİ (post-it #127, Tiraspol 1676) · 27 Ekim 2026

Emre yönü: post-it #127, 26 Ekim 2026 ("b" yolu — *"bu boşluk hiç olmamalı; toprak en yakın
yerleşimin bölgesine emilsin ya da etrafındaki yerleşimler arasında paylaşılsın"*).
Yama: `denetim/MOTOR-KUSATMA-BILESEN-1027.diff`. Bayrak: `MOTOR_KUSATMA_BILESEN=1`; bayrak yoksa
çıktı değişmez. **Emre onayı: post-it #127, 27 Ekim 2026 12:12 — "a seçeneğini seçelim"**
(= bir sonraki tam inşada `MOTOR-KUR-DEVIR-1027.diff` ile BİRLİKTE uygulanır; tuz dosyası,
7-8 saat). Henüz uygulanmadı. Temiz uygulanma sınandı: tek başına ve
`MOTOR-KUR-DEVIR-1027.diff` ile birlikte (`git apply --check`, taban c13430519).

## Kusur

1676-09-19, Dinyester'in sol yakası (Bender'in doğusu): temiz kenarlı boyasız kama.
Kamada dört yerleşim var: Tiraspol, Slobozia, Dubăsari, Rîbnița. Dördü de `kur:1990-09-02`
(Transdinyester) ve sahibi yazılı değil. `_kusatilmis` adayları **tek tek** sınar. Komşu aday
sahnede değil ve sahipsiz olduğu için ortak kenar paydada kalır, paya girmez. Dört aday
birbirini kilitler ve hiçbiri %90'a ulaşamaz:

| petek | tek başına sahipli komşu payı | km² |
|---|---|---|
| Tiraspol | %33,3 | 1.879 |
| Dubăsari | %54,9 | 2.755 |
| Slobozia | %71,9 | 2.927 |
| Rîbnița | %89,7 | 3.073 |
| **dördü birlikte** | **%100** | 10.634 |

Bileşenin bütün komşuları sahnede ve sahipli: Bender, Akkirman, Hacıbey (Osmanlı); Balta,
Yedisan bozkırı, Kişinev, Orhei, Soroka, Bălți, Braslav (tâbi / komşu devlet).

Not #127'deki ilk tanı ("iki farklı sahip var, tek-sahip eşiği tutmuyor") **yanlıştı**. Ölçüt
Eylül'den beri "SAHİPLİ ≥%90"dır, sahip ayrımı yapılmaz (`uret_petek.py` §KUŞATILMIŞLIK).
Aynı kilit 14 Eylül 2026'da Uman ↔ Yelisavetgrad için teşhis edilmişti
(`denetim/ARAC-P13B-KUSATMA-0914.py`), ama çare koda girmemişti.

## Çare

Bitişik adaylar (kur'u gelmemiş ya da bit'i geçmiş, o gün sahipsiz, `kasitli_bosluk:` değil)
bileşen olarak **birlikte** sınanır. Birleşimin kıyı-dışı dış sınırının ≥ `KUSATMA_ESIK`'i
(0,90) canlı ve sahipli peteğe değiyorsa bileşenin bütün üyeleri devredilir.

- "Kime" kuralı değişmez. `petek_epok`, bitişik ölü hücreleri zaten birlikte
  (`_olu_bilesenler`) çevredeki canlı komşulara paylaştırır (yürüyüş ya da Voronoi).
- Tek üyeli bileşende karar eskisiyle aynıdır (tanım gereği).
- Eşik ve `kasitli_bosluk:` istisnası aynen durur.
- Birleşim kurulamazsa (geçersiz geometri) bileşen atlanır, eski karar korunur.
- Koşu içi ezber: `(üyeler, sahipli komşular)` → karar. PETEK_D mühürlü olduğu için güvenli.

## Ölçüm

Makine: HAVVA (`hostname`), worktree `postit-127`, taban `origin/main` c13430519.
Geometri: `data/petek_govde.js` (son koşunun petekleri, 5378/5378 ada göre eşlendi;
sadeleştirmeden kalan 323 geçersiz poligon `make_valid` ile onarıldı). KARA yaklaşığı: ham
`ne_10m_land`. Alet: `denetim/ARAC-KUSATMA-BILESEN-1027.py`.
Günler: 1281–1923 arası 15 yılda bir (06-15), artı 1676-09-19; toplam 44 gün.

- **Sadakat:** 5 günde (1500, 1594, 1676, 1700, 1800) yamanın kendi kodu (`_kusatma_bilesen`,
  bayrak açık) bağımsız bileşen hesabıyla **birebir** aynı kümeyi verdi.
- **Kapsam:** her tarihte devir kümesi yaklaşık 155-177'den 509-613'e çıkıyor. Ek: 345-454
  yerleşim, ≈1,9-2,6 milyon km² (tekil petek alanları toplamı).
- 44 günde ayrı yerleşim: **584**.
  - **kur-tarafı 230** (≈2,35 M km²): `kur`u gelmemiş noktalar. #51'in
    `MOTOR_KUR_DEVIR` yaması bunları eşiksiz zaten devrediyor. İkisi birlikte açılırsa bu
    kısım çakışır, zararı yok.
  - **bit-tarafı 354** (≈2,33 M km²): `bit`i geçmiş, sonrasında sahipsiz noktalar. Yalnız bu
    yama kapatır. Çoğu `bit:1281-01-01` taşıyan antik/öncü noktalar ve bunların kümeleri.
- 10°'lik karelere göre yoğunluk: İtalya-Balkan (40K,10D) 57 · Anadolu-Doğu Akdeniz (30K,30D)
  44 · Mezopotamya-İran (30K,40D) 42 · Balkan (40K,20D) 35 · Karadeniz kuzeyi (40K,30D) 32 ·
  Yunanistan (30K,20D) 29 · Britanya 28 · Hindistan 22+14 · Çin 14 · Maya 14+14 · Japonya 13 ·
  Batı Afrika 13.
- En büyük bit-tarafı petekler: Kumbî Sâlih ≈53.000 km² · Harappa ≈47.000 · Dholavira
  ≈38.000 · Rohtasgarh ≈35.000 · Tummana ≈35.000 · Ranthambore ≈35.000 · Jiahu ≈32.000.

**Ölçülemedi:** son koşu haritasında bu ≈2 M km²'nin bugün gerçekten boyasız göründüğü
(site katmanları tek tek sınanmadı). Hesap koşunun kendi devir mantığından çıkıyor.
Bileşen kuralının bu toprakları **kime** verdiği de ölçülemedi: o iş `petek_epok` ve yürüyüş
ızgarasının işi ve tam koşu ister.

## Kabul (tam inşadan sonra)

1. 1676-09-19'da Dinyester sol yakası kaması boyasız kalmamalı (Bender/Yedisan arasında
   paylaşılmalı).
2. Logdaki `_KUS_BIL_SAYAC` (bileşen, üye) sayıları sıfırdan büyük olmalı.
3. `denetle` değişmezleri gerilememeli, özellikle 1, 3, 8.
4. Kuveyt, Doha ve Abu Dabi gibi kasıtlı boşluklar boyanmamalı (eşik aynı; bileşenleri
   %90 altında olmalı).
5. Büyük bit-tarafı peteklerin (Harappa, Kumbî Sâlih, Jiahu…) alıcıları gözle kontrol
   edilmeli. Antik noktanın toprağı o tarihte çevrede yaşayan yerleşimlere geçmeli,
   denizaşırı ya da uzak bir yere gitmemeli.
