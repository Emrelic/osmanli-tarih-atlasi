# PARALEL — ADIM 1 · BAĞIMLILIK HARİTASI

```
OTURUM   PARALEL TASARIM  ·  10 Eylül 2026
ALET     denetim/ARAC-PARALEL-BAGIMLILIK-0910.py   (AST, salt okur)
VERİ     denetim/PARALEL-BAGIMLILIK-0910.json
EVREN    arac/uret_petek.py satır 4501–4582  (asama "Yabancı devlet gövdeleri")
         + oradan TRANSİTİF çağrılan 28 modül-içi fonksiyon
🔴 arac/** ve data/** DEĞİŞTİRİLMEDİ — tek karakter yazılmadı.
```

## ⓪ KABUL ÖLÇÜTÜ — `a + b + c = N`

```
N  ad          123
   SALT-OKUNUR  89
   GERİ-OKUNAN  21
   DÖNGÜ-YEREL  13
   BİRİKTİRİCİ   0     ← "yalnız yazılan, hiç okunmayan" ad YOK
                        (her biriktirici en az bir kez kendi değerini okuyor)
   89 + 21 + 13 + 0 = 123 ✓
```

## ① 🔴 ŞARTNAMENİN ÖNCÜLÜ ÇÜRÜDÜ — `havuza()` TEK DEĞİL, **21**'DEN BİRİ

Şartname *"`havuza()` DIŞINDA geri okunan var mı"* diye sordu ve `§⑤`
bunu **bekleyemez** saydı. Cevap: **VAR, 17 tane.** Ama sayı tek başına
yanıltıcı — hepsi aynı cins değil, ve **hiçbiri havuz gibi ÇIKTIYA
BAĞLANMIYOR.** Dördü kova, ve çareleri farklı:

```
🔴 A · HAVUZ (4)          ÇIKTIYI BELİRLER — tasarımın konusu
     DEV_HALKA · DEV_HALKA_IX · DEV_PARCA · DEV_PARCA_IX
     N'inci devletin halka indeksi 1..N-1'e bağlı.

🟢 B · ÇIKTI BİRİKTİRİCİSİ (1)   sıra korunursa birebir
     DEVLET_KAYIT  (yalnız .append · devlet sırası = döngü sırası)

🟡 C · SAF ÖNBELLEK (7)   DEĞERİ DEĞİL, MALİYETİ ETKİLER
     _VARLIK_ONBELLEK · _PUAN_ONBELLEK · _DOLGU_ONBELLEK ·
     _KUS_ONBELLEK · _IC_ONBELLEK · _CEP_ONBELLEK · _COL_NOKTA_ONBELLEK
     Yedisinin de anahtarı DEĞERİ TAM BELİRLİYOR (elle doğrulandı:
     3489 · 4127 · 4295 · 3237 · 3214 · 3222 · 4278) ve değer yalnız
     DEĞİŞMEZ girdilerden (PETEK_D · YERLER · KARA · COL · noktalar)
     türüyor. ⇒ Paralel işçide yeniden hesaplanır, AYNI çıkar.
     🔴 AMA BEDAVA DEĞİL — bkz. §③, tasarımın asıl riski burada.

⚪ D · SAYAÇ / TANI (9)    ÇIKTIYA HİÇ GİTMEZ — ölçüldü
     _SAYAC · _PUAN_KESILEN · _PUAN_TAMAMEN · _B1_SAYAC · _B23_SAYAC ·
     _DOLGU_SAYAC · _KB_MUAF · _VARLIK_DEVIR · _VARLIK_PAY
     Dokuzunun da yazım aşamasından (satır 5013) SONRA hiç referansı yok
     (grep ile sayıldı: 0/0/0/0/0/0/0/0/0). Hiçbiri bir KARARDA
     okunmuyor — `_B1_SAYAC` tek tek incelendi: `+= 1` ve `.add()`,
     dallanma yok.
```

⇒ **Tasarımın temeli DEĞİŞMEDİ, ama gerekçesi değişti:** şartname
*"tek engel havuz"* diyordu; ölçüm *"havuz tek ÇIKTI-ENGELİ, ama yedi
önbellek tek MALİYET-ENGELİ"* diyor.

🔴 **Ve çıktıya gerçekten yalnız üç ad gidiyor** (grep, satır ≥ 4980):
`DEV_HALKA` · `DEV_PARCA` · `DEVLET_KAYIT` → `devletler_harita.js`.
Üçü de `seyrelt()`ten geçiyor (4988), o da halka indekslerini kullanıyor
— yani havuz sırası kaydığında **çıktı sessizce değil GÜRÜLTÜLÜ** değişir.

## ② ALETİN KENDİ SINAVI — ve İKİ KEZ ÇÜRÜDÜ

`D010`: *"yeni yazılan denetim, iki yönde de sınanmadan çalışıyor
sayılmaz."* Alet iki kez bilinen-pozitifi kaçırdı ve **ikisini de
kendi sınavı yakaladı**:

```
① TAKMA AD (aliasing)  havuza(..., DEV_HALKA_IX, ...) — mutasyon
   PARAMETRE üzerinden oluyor, çağrı yerinde ad OKUNUYOR gibi görünüyor.
   ⇒ DEV_HALKA_IX "SALT-OKUNUR" çıktı. Şartnamenin MERKEZİNDEKİ ad.
   ÇARE: her fonksiyonun parametre etkisi çıkarılıp çağrı yerine taşındı.

② YENİDEN BAĞLAMA ≠ MUTASYON   `g = ...` gelen değeri ÖLDÜRÜR,
   `DEV_PARCA.append(...)` onu KORUR. İlk sürüm ikisini bir saydı ve
   DEV_PARCA'yı "döngü-yerel" ilan etti — oysa havuzun ta kendisi.
```
📌 İkisi de aynı aileden: ***bir adın sınıfı, ona NASIL dokunulduğuna
bağlı; nerede yazıldığına değil.***

**Alet artık kendi sınavını taşıyor** (4 pozitif + 4 negatif çapa) ve
başarısızlıkta `exit(1)` veriyor — sessizce temiz rapor vermiyor.

### Aletin ÖLÇÜLMÜŞ sınırları (hüküm bunlara rağmen veriliyor)
```
· STATİKTİR. Dolaylı erişim tarandı: 1 tane — `getattr(_vd,"geoms",[])`
  (satır 3532). OKUNDU: bir nesne özniteliği, küresel ad erişimi DEĞİL.
  ⇒ dinamik ad erişimi 0 · hüküm ZAYIFLAMIYOR.
· C tarafındaki (GEOS/NumPy) gizli durumu GÖREMEZ.
⇒ Bu yüzden ADIM 3 bu aletin YERİNE GEÇMEZ; onu SINAR.
```

## ③ 🔴 ÖLÇÜMÜN ÜRETTİĞİ YENİ RİSK — ŞARTNAMEDE YOKTU

Yedi saf önbellek **doğruluğu** bozmuyor; **kazancı** bozabilir.
Paralel işçilerin ortak bir önbelleği yoktur (Windows `spawn`, ayrı
adres alanı). Aynı `devir` kümesi ya da aynı `(did, aktif)` çifti iki
işçide birden düşerse **iki kez hesaplanır.**

```
en pahalısı  petek_epok()  → sayac("varlık devri (petek_epok)")
             anahtar: devir kümesi (TARİHE DEĞİL, VARLIK EPOĞUNA bağlı)
             ⇒ ÇOK devlet AYNI anahtarı paylaşıyor ⇒ isabet oranı YÜKSEK
             ⇒ paralelde tam o isabet KAYBOLUR
```
⚠️ **Bu, hızlanmanın üst sınırını Amdahl'dan BAĞIMSIZ olarak düşürür**
ve ölçülmeden bir kazanç sayısı verilemez. ADIM 2'de ölçülecek kalem
budur; koşu logundaki `sayac` dökümü bu payı doğrudan veriyor.

---

# 🟢 ADIM 3 ÖNGÖRÜSÜ — **ÖLÇÜMDEN ÖNCE YAZILDI** (`D022`)

```
YAZILDIĞI AN  10 Eylül 2026 · ADIM 3 sınavı HENÜZ KURULMADI,
              tek bir karşılaştırma koşmadı
```

**ÖNGÖRÜ: `sha256(sıralı) == sha256(paralel)` — DENK ÇIKACAK.**

Gerekçe (ve her biri ayrı ayrı çürütülebilir):
1. Devlet başına geometri, **değişmez** girdilerin saf fonksiyonu.
2. Havuzlama özgün sırayla tekrar oynatılırsa `havuza()` **aynı çağrı
   dizisini aynı sırada** görür ⇒ aynı indeksler.
3. Yedi önbellek saf ⇒ yeniden hesap aynı değeri verir.
4. Dokuz sayaç çıktıya hiç gitmiyor (ölçüldü) ⇒ toplama sırası önemsiz.
5. Kenar köşeleri `don_kose_kur` ile **1e-6 ızgaraya oturtuluyor** (R1,
   satır 1869 civarı) ⇒ kıl payı float farkları zaten yutuluyor.

**AYRIŞIRSA en olası sebep — sırasıyla:**
```
① frozenset YİNELEME SIRASI  `unary_union([petek_epok(a)[j] for j in aktif])`
   `aktif` bir frozenset; GEOS'a giden LİSTE SIRASINI o belirliyor.
   Sıra değişirse birleşim sonucu kıl payı farklı float verebilir.
   (int hash'i PYTHONHASHSEED'den etkilenmez ⇒ beklentim: sıra AYNI)
② NumPy İŞ PARÇACIĞI SAYISI  işçide farklıysa indirgeme sırası değişir
③ GEOS sürüm/derleme farkı — aynı makinede aynı ⇒ risk yok
```

**MAZERETİ OLMAYAN YÖN** (`D019`): öngörü *"denk"* diyor. Ayrışırsa
mazeret aramayacağım — ayrışan ilk baytı ve sebebini yazacağım.
🔴 Ve tersi de bağlayıcı: **denk çıkarsa da bu, ölçülen KÜÇÜK girdi
için denktir**; tam koşu için bir ÜST SINIR değil bir KANIT PARÇASIDIR.
