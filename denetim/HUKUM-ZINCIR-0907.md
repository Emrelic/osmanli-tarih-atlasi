# HÜKÜM — MERGE GECESİ HANGİ ZİNCİR ÇAĞRILIR?

> **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7 Eylül 2026
> Tablo `denetim/SINAV-KOSU8-ZINCIR-0907.py` ile **kaynaktan üretildi**,
> elle yazılmadı. Ateşleme 8/8. Bir zincire adım eklenirse tablo
> kendiliğinden değişir — bu belge bayatlarsa **aleti koştur.**

---

## ⇒ TEK SATIRLIK HÜKÜM

> ### `py arac/kos_ve_yayinla.py`
> **Ötekiler çağrılmaz:** `_yayin_zinciri.py` **yayın yapmıyor** (git
> adımı yok, üretim yok, kapı yok — bir RAPOR aracı);
> `kosu_yayin.py` **`uret_altlik` adımını taşımıyor VE kapıyı uyarıya
> düşürüyor** ⇒ bayat bir `altlik.js` ile yayın yapar, ve kapının reddi
> ekrana basılıp geçilir.

⚠️ **Ve bir ön koşul:** `kos_ve_yayinla.py` damga adımını kapıdan
**sonraya** koymuş (aşağıda ②). ⇒ Zinciri başlatmadan önce `js/`+`css/`
çalışma ağacı **temiz** olmalı, yoksa kapı `damga_ihlali`ne takılır ve
onu çözecek adıma sıra gelmez.

---

## ① ADIM SIRASI ve ÖLÜMCÜLLÜK — ölçüldü

```
ADIM (çağrılan betik)    kos_ve_yayinla.py   _yayin_zinciri.py   kosu_yayin.py
------------------------------------------------------------------------------
uret_petek.py            1. ÖLÜMCÜL          —                   1. ÖLÜMCÜL
uret_devirler.py         2. ÖLÜMCÜL          1. gevşek           2. gevşek
uret_altlik.py           3. gevşek           —                   —
uret_bekleyenler.py      4. gevşek           —                   —
renk_olc.py              5. gevşek           3. gevşek           4. gevşek
denetle.py               6. ÖLÜMCÜL          2. gevşek           3. ÖLÜMCÜL
denetle_yayin.py         7. ÖLÜMCÜL          —                   6. UYARI
denetle_kronoloji.py     —                   —                   7. UYARI
denetle_arayuz.py        —                   —                   8. UYARI
adres_nobetci.py         8. gevşek           —                   —
surum_damgala.py         9. ÖLÜMCÜL          —                   5. gevşek
git add                  10. gevşek          —                   —
git commit               11. ÖLÜMCÜL         —                   —
git push                 13. ÖLÜMCÜL         —                   —
```
```
YAYIN YAPAR MI   kos_ve_yayinla  EVET · _yayin_zinciri  HAYIR (rapor) ·
                 kosu_yayin      EVET
```

## ② 🔴 `kos_ve_yayinla.py`DE SIRA KUSURU — kapı 7., damga 9.

Kapının **kendi reçetesi** `→ COMMIT ETMEDEN ÖNCE: py arac/surum_damgala.py`
diyor; zincir o adımı kapıdan **sonraya** koymuş.
```
6. denetle.py       ÖLÜMCÜL
7. denetle_yayin.py ÖLÜMCÜL   ← `damga_ihlali` BURADA öter
9. surum_damgala.py ÖLÜMCÜL   ← onu ÇÖZECEK adım — SIRA GELMEZ
```
🟢 Emsal aynı depoda: `kosu_yayin.py` damgayı (5.) kapıdan (6.) **önce**
koşturuyor.
🟢 Ve yan etkisi ölçüldü: `surum_damgala.py` `re.subn` ile **179
damganın 179'unu** tek değere yazıyor, yalnız `src=`/`href=`
niteliklerine dokunuyor ⇒ kapının 11 şartından **hiçbirinde** yeni ötüş
üretmiyor. (`damgalar>1` kümesi 1 kalır · `_sz` gövdeye dokunulmadığı
için etkilenmez.)
⇒ **Çare bir kod değişikliği değil, iki satırın yer değiştirmesi** —
ve `arac/*` `1.MURAT`ın kalemi.

## ③ HER ZİNCİRİN NİÇİN ELENDİĞİ / SEÇİLDİĞİ

### 🟢 `kos_ve_yayinla.py` — SEÇİLEN
```
tek başına taşıdığı adımlar: uret_altlik · uret_bekleyenler · adres_nobetci
kapıyı ÖLÜMCÜL tutuyor  ⇒ bayat yayın YAPAMAZ
git add/commit/push VAR ⇒ gerçekten yayınlar
```
`uret_altlik` kritik: kapının `iz_bayat` şartı bugün `data/altlik.js`i
**bayat** sayıyor ve onu tazeleyen tek adım burada.

### 🔴 `_yayin_zinciri.py` — ELENDİ
```
git commit/push YOK · uret_petek YOK · uret_altlik YOK · KAPI YOK
döngü `break` içermiyor ⇒ hiçbir adım zinciri DURDURMUYOR
son satırı: "ZINCIR BITTI — SONRAKI ADIMLAR ELDE, OTOMATIK DEGIL"
```
⇒ Bu bir **rapor aracı**, yayın zinciri değil. Adının yanıltıcı olması
`§11`in *"bu dosya işin KENDİSİ mi, yoksa iş HAKKINDA bir rapor mu"*
dersinin üçüncü vakası (`YAMA-KUNYE-T-0905` · `ALASKA-DEVIR` · bu).

### 🔴 `kosu_yayin.py` — ELENDİ, ve EN TEHLİKELİ SEÇENEK
```
uret_altlik ADIMI YOK            ⇒ `altlik.js` BAYAT KALIR
denetle_yayin.py  uyari_kodu=True ⇒ kapının reddi BASILIR ve GEÇİLİR
git commit/push VAR               ⇒ ve YAYINLAR
```
🔴 İkisi birleşince: **bayat bir `altlik.js` ile yayın yapar ve kapı
buna itiraz eder ama durduramaz.** Kodun kendi yorumu bunu açıkça
söylüyor: `# ⑥ yayın kapısı — bugün SARI, uyarı sayılıyor`.
🟡 **Ama tamamen değersiz değil:** `denetle_kronoloji` ve
`denetle_arayuz` adımlarını **yalnız o** taşıyor — ikisi
`kos_ve_yayinla.py`de **yok.** ⇒ Seçilen zincirin **iki denetimi
eksik**; bu bir borç, bir engel değil.

## ④ BİR ZİNCİRDE VAR, ÖTEKİNDE YOK — tam liste
```
uret_altlik.py        VAR: kos_ve_yayinla            YOK: öteki ikisi
uret_bekleyenler.py   VAR: kos_ve_yayinla            YOK: öteki ikisi
adres_nobetci.py      VAR: kos_ve_yayinla            YOK: öteki ikisi
denetle_kronoloji.py  VAR: kosu_yayin                YOK: öteki ikisi
denetle_arayuz.py     VAR: kosu_yayin                YOK: öteki ikisi
uret_petek.py         VAR: kos_ve_yayinla, kosu_yayin  YOK: _yayin_zinciri
denetle_yayin.py      VAR: kos_ve_yayinla, kosu_yayin  YOK: _yayin_zinciri
surum_damgala.py      VAR: kos_ve_yayinla, kosu_yayin  YOK: _yayin_zinciri
```

## ⑤ 🟢 ÖLÇÜLDÜ VE TEMİZ ÇIKTI: «MESAJ VAR, KAPI YOK» VAKASI

`1.MURAT`ın uyarısı — *"bir ret şartının VAR OLMASI, hükmü VERİYOR
olması demek değil"* — zincirlerde de arandı:
```
`kos()` ölümcül düşüşte "🔴 ZİNCİR DURDU" basar ve None döner.
Çağıran o dönüşü OKUMUYORSA zincir DEVAM EDER: mesaj var, kapı yok.
ÖLÇÜM: ölümcül davranan ama karara bağlanmamış adım — 0
```
🟢 Üç zincirde de her ölümcül adım `if … return`e bağlı. Bu bir
varsayım değil, ateşleme sınavından geçmiş bir ölçüm.

---

## ⚠️ ÖLÇÜLMEDİ — `bulunamadı` DEĞİL
```
· `denetle.py` 40 dk sınırının (kos_ve_yayinla) ve kosu_yayin'in kendi
  sınırının altında mı — ÖLÇMEDİM. Aşarsa ZAMAN AŞIMI da ölümcüldür ve
  sonuç aynı: zincir durur, kapı koşmaz. İKİNCİ bir kilitlenme yolu.
· `kos_ve_yayinla.py`nin 12. adımı (tabloda 11 ile 13 arası boşluk):
  git pull --rebase, `olumcul=False`. Sayıldı, listeye girmedi çünkü
  `ILGI` kümesinde yok — kusur değil, KAPSAM.
· Bu tablo adımların VARLIĞINI ve BAYRAĞINI ölçer; adımların
  DOĞRU ÇALIŞTIĞINI ölçmez.
```

## 🔴 VE BU BELGE ÜRETİLİRKEN ALET BİR KEZ YALAN SÖYLEDİ
İlk koşuda tablo `uret_petek.py`yi **12. adım**, `renk_olc.py`yi
**1. adım** gösterdi. Sebep: `ast.walk` **kaynak sırasını korumaz**,
genişlik öncelikli dolaşır. Sayılar makul görünüyordu ve **tamamen
uydurmaydı** — bir merge gecesi o tabloya bakıp yanlış sırayı
varsayabilirdi.
⇒ Çare `lineno` ile sıralamak. `§11`: *"alet hata vermez, temiz bir sayı
üretir"* — burada temiz bir **SIRA** üretti, ve yakalayan şey bir
denetim değil, **elle okuduğumla çelişmesi** oldu.
