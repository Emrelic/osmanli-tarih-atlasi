# BOŞLUK EĞRİSİ — bitiş ölçütünün ZAMAN körlüğü

*(3 Eylül 2026 · `DUNYA-AFRIKA-0903` buldu, koordinatör dünya çapında
ölçtü)*

## BULGU
`arac/_dunya_bosluk.py` — programın bitiş ölçütü — **`kur:` alanına
bakmaz.** Bir noktayı 1281'den 1923'e kadar var sayar.
**Ama motor bakar:** `petek_epok()` `kur:`dan önce peteği komşuya
devreder.

⇒ Sömürge dönemi kasabalarıyla dolan bir kutu, *"zamansız"* ölçütte
**bitmiş** görünür ve kullanıcı zaman çubuğunu 1400'e çektiğinde
**boş** olur.

## ÖLÇÜM — bugünkü canlı veri, dünya çapında
```
ızgara 2° · tavan 200 km · kara hücresi 3769
bağlı nokta 2731 · `kur:` yazılı 362 (%13,3) · `bit:` yazılı 13

KESİT       nokta    açık      %      fark
zamansız     2731    2005   53,2%       —    ← RESMÎ ÖLÇÜT
1300         2380    2257   59,9%    +252
1400         2408    2250   59,7%    +245
1500         2442    2236   59,3%    +231
1600         2532    2169   57,5%    +164
1700         2605    2095   55,6%     +90
1800         2670    2039   54,1%     +34
1900         2715    2009   53,3%      +4
```

## 🟡 BUGÜNKÜ MALİYET KÜÇÜK — AMA BU DALGADAN SONRA BÜYÜYOR
En erken kesitte fark **+252 hücre (%12,5 göreli)**. Ölçülebilir ama
küçük — çünkü canlı 2731 noktanın **%87'sinde `kur:` hiç yok** ve
onlar kadîm yerleşimler.

🔴 **`DUNYA-AFRIKA-0903`un Afrika ölçümü çok daha sert:**
```
Sahra altı Afrika · 1° ızgara · 438 aday UYGULANMIŞ varsayılarak
   zamansız    66 açık  (%3,4)
   1400'de    750 açık (%38,3)     ← +684 HÜCRE
Kuzey Afrika (adayları kadîm vahalar: Şinkît · Vâdân · Bilma)
   zamansız 87 · 1400'de 90        ← FARK YOK
```
⇒ Fark **adayların cinsinden** doğuyor, bölgenin kendisinden değil:
1400'de sahnede olan Sahra altı aday **130**, 1900'de **423**.
🟢 Ve Kuzey Afrika'nın fark üretmemesi teşhisi **doğruluyor.**

⚠️ **IZGARA UYUŞMAZLIĞI:** yukarıdaki iki blok farklı ızgaralarda (2°
dünya · 1° bölge). Projede ölçülmüş kural: *taban yüzdesi ızgaraya
dayanıklı, ARTIK değildir.* ⇒ Karşılaştırılabilir olan **eğrinin
BİÇİMİ**, mutlak sayılar değil.

## 🔴 VE BOŞLUK KUSUR DEĞİL OLABİLİR
Emre'nin duran hükmü: *"Eğer yerleşim var ise nokta konur. Yok ise
uyduracak hâlimiz yok. **Devasa boşluklar olacaksa olsun.**"*

1400'de Ngaoundéré **yoktu**; o hücrenin boş olması **doğrudur.**
🔴 **Bu ölçüm hangi boşluğun DOĞRU, hangisinin EKSİK olduğunu
SÖYLEMEZ** — onu ancak kaynak söyler. Sayıyı bir kusur listesi gibi
okumak, `§11`in *"ölçüm doğru, çıkarım yanlış"* tuzağıdır.

## HÜKÜM
```
① BULGU KABUL — ölçüt zaman körü, ve bu YAPISAL bir sınır.
② KOL AÇILMADI — bu dalga (modern ufukta kapsama) önce bitecek.
   `ONCELIK.md` çöl seyyahı.
③ ÖLÇÜT BİR EĞRİ OLACAK — sonraki dalganın bitiş ölçütü tek sayı
   değil, kesit dizisidir. Taban BU BELGEDEDİR.
④ `arac/_dunya_bosluk.py`ye `--kesit YYYY` eklenecek (koşu sonrası;
   dosya donuk ve motor parmak izinde DEĞİL ama `arac/` altında).
⑤ SONRAKİ DALGANIN GERÇEK HEDEFİ: erken kesitlerin boşluğu
   **kadîm yerleşim eksikliğidir** — sömürge kasabası eklemek onu
   KAPATMAZ. Ve hangi kısmının gerçek eksik olduğu **ölçülmedi.**
```

## ARAÇ
```bash
py <scratchpad>/_bosluk_egri.py 2.0 1300 1400 1500 1600 1700 1800 1900
```
Maskeyi **bir kez** yükler, bütün kesitleri tek koşuda tarar.
