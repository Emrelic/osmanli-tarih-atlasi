<!-- DURUM: IS 1 BITTI ¦ 2026-08-16 ¦ kosu temiz · ongoru 7 TUTTU 2 CURUDU · IS 2 bekliyor -->

# 🟢 İŞ 1 BİTTİ — KOŞU DOĞRULANDI

**Koşu** 16 Ağustos 02:37:41 → 04:20:52 · **1s 43dk 11sn** · `kosu_egim_16agu.log`
**Öngörü** `denetim/EGIM-ONGORU.md` (koşudan ÖNCE, commit `3240a48`) — **9 kalem: 7 TUTTU · 2 ÇÜRÜDÜ**

```
① DEM satırı                  basar              etopo2022_30s_dunya.tif  ✓
② ızgara kara hücresi         3.359.608          3.359.608                ✓ BİREBİR
③ sürtünme medyan · maks      1,119 · 11,03      1.119 · 11.03            ✓ BİREBİR
④ erişilebilirlik             AYNI               3.336.475 = 3.336.475    ✓
⑤ ızgarada değişen hücre      150–185 bin        166.069 (%4,98)          ✓
⑥ haritaya inen parça         0–8                13 · 37.129 km²          🔴 ÇÜRÜDÜ
⑦ boşalan petek · bileşen     0 · 20–30          0 · 24                   ✓
⑧ Değişmez 1 (eğim ekseni)    değişmez           196 → 196                ✓
⑨ ek süre                     +2–3 dk            +58 sn                   🔴 ÇÜRÜDÜ
```

**Kapılar:**
```
denetle.py    SONUÇ: temiz  (Değişmez 2: 4→0 · Değişmez 5: 4→0 · sahipsiz 196→196)
Doğrulama     tüm yerleşimlerin peteği geçerli ✓
renk_olc.py   0 çakışma · 0 görünmez · çıkış 0
renk_fark.py  0 doğan kusur · 0 düşen çift · 0 yakın-çift regresyonu
```

🔴 **⑥ çürüdü ve KENDİ HÜKMÜMÜ DÜZELTTİ.** M-0143'te *"eğimin haritaya inen
etkisi küçük olacak"* demiştim. Mutlak olarak doğru (37.129 km²), **ama
ızgaranın kendi alanı içinde etki %18,3** (13/71 parça · 37.129/210.198 km²).
*"Menzil dar"* doğru, *"etki küçük"* **yanlış** — ikisini karıştırmışım.

🔴 **⑨ çürüdü ve mazeretimi KULLANMIYORUM.** *"Uyku/rekabet"* yazmıştım;
uygulanmıyor — duvar ≈ işlemci (6/6 · 52/52), tahminim fazlaydı. A/B ölçümü
koşunun **%0,8'ine** mal oldu.

---


# MOTOR EPOK — ilerleme

**Oturum** Opus hazır kıta 4 (Emre'nin verdiği ad — `M-0129`: adı koordinatör
değiştirmez) · **Görev** `oturumlar/MOTOR-EPOK.md` · **Dosyam**
`arac/uret_petek.py`
**Yazdığım tahta numaraları** M-0124 · M-0136 · M-0139 · M-0143 · M-0154
(tebliğ `M-0161` bu numaralarla bu görevi bana verdi)

---

## İŞ 1 — EĞİM ÇARPANI · **KOD BİTTİ, KOŞU BEKLİYOR**

### Ne yapıldı
`uret_petek.py`nin KARA-KISITLI SAHİPLİK Dijkstra'sı ağırlıksızdı. Artık adım
bedeli hedef hücrenin sürtünmesiyle çarpılıyor: `surt = 1 + 0,005 × |∇z|`,
DEM'den, **motorun kendi 0,05° ızgarasında.**

Dört ekleme, hepsi `arac/uret_petek.py` (+240/−21):
```
:294  EĞİM ÇARPANI + DEM'in ERKEN sınavı — DEM yoksa koşu ÖLÜR
:1589 eğim yüzeyi (DEM → ızgara → gradyan → array('f'), 25,4 MB)
:1633 Dijkstra İŞLEVE çevrildi (_kv_dijkstra) + sürtünme çarpanı
:1694 A/B — eğimsiz ikinci Dijkstra, ÖLÇÜM, üretime karışmaz
:1801 parça düzeyinde A/B — eğimin HARİTAYA İNEN etkisi
```

### 🔴 Üç karar ve gerekçeleri

**① Kara/deniz kararı maskede kaldı (A yolu).** Koordinatör kararı, M-0126.
B yolu (kara tanımını da DEM'e taşımak) **ertelendi** — sebebi ölçüm değil
*tek değişken kuralı*. Ayrışma ölçüldü: **74.796 hücre.** Borç
`denetim/EGIM-ONGORU.md §⓪`da kayıtlı; kayıtsız kalsaydı yarın kusur diye
yeniden bulunurdu.

**② DEM yoksa koşu ÖLÜYOR, sessizce eğimsiz koşmuyor.** `§11`: *"ölçemediğini
eleyen bir süzgeç, onu temiz sayar."* Eğimsiz koşan motor kusursuz görünen bir
harita üretir ve **hiçbir denetim bunu göremez.** Açık vazgeçiş
`MOTOR_EGIMSIZ=1` ile mümkün — kaza değil KARAR olsun diye.
Ve sınav koşunun **başında**, 30. dakikasında değil (`motor_izi` dersi:
*"geç öten alarm, ötmeyen alarmdan yalnız biraz iyidir"*).

**③ Koşu KENDİ İÇİNDE A/B.** Eğimin etkisini ölçmenin normal yolu iki tam
koşudur (160 dk). Bunun yerine ikinci bir eğimsiz Dijkstra koşuyor
(+1dk 40sn, koşunun %2'si) ve fark basılıyor. ⇒ **Öngörünün mazereti ortadan
kalktı:** ölçemediğim tek şey *"ızgaradaki değişimin kaçı haritaya iniyor"*du,
artık koşunun kendisi cevaplıyor.

### Doğrulama — teslimden ÖNCE (`M-0169` kabul kapısı)
```
sözdizimi                            OK
görünmez bayt (0x00/08/0b/0c)        0        (§11: "alet yalan söyler")
C13 · dört dal ZORLANARAK            5/5      DEM var · açık vazgeçiş ·
                                              DEM yok · DEM yarım · eğim yüzeyi
REGRESYON · refactor vs git HEAD     BİREBİR  sahip farkı 0 · uzaklık farkı 0
REGRESYON · çarpan gerçekten ısırıyor 301 hücre · erişilen DEĞİŞMEDİ
```
🔴 Regresyon sınavı **kopyayı değil dosyanın kendisini** koşturuyor: yeni işlev
dosyadan, eski döngü `git show HEAD:` ile git'ten çıkarılıp aynı sahte ızgarada
karşılaştırıldı. Kopyayı sınamak, sınanmamış kodu "sınandı" saymaktır.

---

## ÖLÇÜMLER — hepsi koşusuz, hepsi doğrulanabilir

### Şartname sayıları (`§⑦` — devraldığın rakamı doğrulamadan aktarma)
```
2527 nokta          ✓ tuttu
289 kur:            ✓ tuttu
239 gün / 213 yıl   → bende 240 / 214.  KUSUR DEĞİL: kur:"1281-01-01"
                      taşıyanlar var; onu düşünce 239/213. Aynı veri, farklı soru.
DEM tam mı          ✓ tuttu (626 MB · tam_mi True · 8/8 şerit)
uret_petek.py:1486  🔴 ÇÜRÜDÜ — gerçek satır :1515'ti (koordinatör düzeltti, M-0126)
86 petek / 1.862.994 km²  🔴 ÇÜRÜDÜ — en yeni tam koşu (kosu_zincir.log,
                      14 Ağu 19:04, TARİHİNE baktım adına değil): 85 / 1.615.378
                      ⇒ İŞ 2'nin bitiş ölçütü bu sayıya bağlı; tabanı koşudan
                        sonra YENİDEN ölçüp öyle kullanacağım.
```

### Eğim yüzeyi (motorun kendi ızgarası, 3420×1860 = 6.361.200 hücre)
```
sürtünme medyanı 1,119 · p90 1,864 · p99 3,516 · maks 11,03
kara hücrelerinin %54'ü >1,10 · %19'u >1,50 · %2'si >3,00
```
🟢 **flipud ölçerek ispatlandı, varsayılmadı:** en pahalı hücreler
84,12°D/28,48°K **(Annapurna, 11,03)** ve 74,68°D/36,38°K **(Karakurum, 9,10)**.
Ters olsaydı Hint Okyanusu'na düşerlerdi. *Coğrafya, dizinin yönünün tanığıdır.*

🟢 **Kendi endişemi ölçüp çürüttüm:** gradyan ham `z` üzerinde alınıyor
(batimetri dâhil), kıyıda şişme yapabilirdi. Ölçüm: kıyı medyanı 1,204 · iç
bölge 1,117 · maske-kara/DEM-deniz hücreleri 1,013 (**en düşük**). Şişme var,
marjinal. Gradyanı ham z'de BIRAKTIM — değiştirseydim 0,005 başka bir yüzeyde
ölçülmüş bir sayı olurdu.

### 🔴 ÖZ-DÜZELTME — kendi ölçümüm yanlış tabandaydı
İlk ölçümümde maskeyi `ne_10m_land ∩ BOLGE, simplify(0.002)` diye kurdum:
**3.382.866 kara hücresi.** Sonra `uret_petek.py:437`i okudum — motor
**gölleri de** çıkarıyor. Maskeyi motorun kuralıyla yeniden kurdum ve
`DOGAL_GOL` beyaz listesini **elle yazmadım, motordan okudum** (iki liste
ayrışırsa ölçüm sessizce başkalaşır):
```
3.382.866 → 3.359.608     fark 23.258 hücre
```
📌 Küçük bir düzeltme ama **öngörünün tabanı**: yanlış tabandan yazılan bir
öngörü çürütülemez, yalnız yanılır.

---

## 🔴🔴 ASIL BULGU — İŞ 1'İN MENZİLİ SANILANDAN ÇOK DAR

Motorun Dijkstra'sını birebir kopyalayıp iki kez koşturdum (0,000 / 0,005):
```
SAHİPLİĞİ DEĞİŞEN IZGARA HÜCRESİ  166.966  (%4,97) · ≈4.048.075 km²
6.289 ayrı (eski→yeni) çifti · 2.061 kazanan · 2.021 kaybeden nokta
en çok:  Katmandu→Şigatse 1865 (Himalaya) · Turfan→Kuça 1746 (Tien Şan)
         Gulca→Çöçek 891 (Cungarya) · Tibesti→Ma'tan es-Sarra 846
```
⇒ Eğim **doğru şeyi yapıyor**: sıradağın ardındaki toprak, dağı aşan uzak
tohumdan alınıp aynı yakadaki tohuma veriliyor.

**AMA `uret_petek.py:1790`:**
```python
if _kvkp.contains(LineString([_ptl[_i], _rp])):
    continue                      # kesin geometri geçerli — dokunma
```
Izgaraya **yalnız** düz hattı DENİZ KESEN parçalar soruluyor. Hattı karada
olan her parçada Voronoi kalıyor.

```
ÖLÇTÜĞÜM   eğim ızgara sahipliğini 166.966 hücrede değiştiriyor
ÇIKARDIĞIM haritaya inen kısmın TAVANI, son koşuda 68 parça / 202.444 km²
           — maske karasının binde 1,5'i
ÖLÇMEDİĞİM 68'in kaçının alıcısı değişiyor → koşu artık bunu KENDİ basacak
```
⚠️ `denetim/EGIM-CARPANI-OLCUM.md` bunu bilmiyor: *"çarpan eklemek sahiplik
ızgarasını değiştirir"* diyor — **cümle doğru ama ölçek ima ediyor ve o ölçek
yanlış.** `T-0112` eğimi SERBEST ızgarada ölçtü; motorda `:1790`un ardında.
📌 `§11` *"doğru aleti yanlış evrenle koşturmak"* — ve çürüyen şey işin kendisi
değil **beklenen getirisi.**

---

## SIRADAKİ
```
1  ✅ İŞ 1 kodu yazıldı, C13 5/5, regresyon birebir
2  ✅ denetim/EGIM-ONGORU.md — koşudan ÖNCE, dokuz kalem, MAZERETLERİYLE
3  ▶  koordinatöre "HAZIR" — koşuyu O tetikler, ben DEĞİL
4  ⏳ koşu sonrası öngörüyü doğrula: kaç kalem tuttu, kaç kalem ÇÜRÜDÜ
5  ⏳ ANCAK ONDAN SONRA İŞ 2 (varlık epoku paylaştırması) — ayrı koşu
```
🔴 **İŞ 2'ye başlamıyorum.** Şartname `§②`: iki değişken aynı koşuya binmez.
