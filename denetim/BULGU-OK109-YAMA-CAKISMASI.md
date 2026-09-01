# BULGU — YAMA ÇAKIŞMASI KAYIT DÜZEYİNDE KURULUYOR, OYSA ÇATIŞMA ALAN DÜZEYİNDE

**Oturum:** OPUS HAZIR KITA 109 · **2 Eylül 2026** · koordinatör 1.MURAT (M-1903)
**Vesile:** `parti-emrelic-0039/H-0006` — "Romanya haritada iki parça çiziliyor"
**Hüküm:** kusur veride DEĞİL, **uygulayıcı aletin çakışma tanımında.**
**Bedeli:** iki doğru yama, iki doğru düzeltme, **dört ay boyunca inmemiş** —
ve ikisi de Romanya'nın **başkentini** ilgilendiriyor.

---

## ① ÖLÇÜM — ne ölçtüm

`parti-emrelic-0039` maddelerinin dokuzuna da `M-1903 §⑥` uygulandı
(*"bu iş zaten yapılmış mı?"*). H-0006 için cevap **evet, 30 Ağustos'ta**:

```
175d90b  PAKET 0039/H-0006: yer_yama_romanya.js — 42 yillik hayalet kimlik duzeltildi
```

Ama yamanın **canlı veriye indiği** ayrıca ölçüldü
(`arac/_yama_indi_mi.py`nin yolu dışarıdan alan hâli; `arac/` koşuyla kilitli
olduğu için betik scratchpad'de kaldı, alete dokunulmadı):

```
yer_yama_macar_avusturya.js    3/3  İNDİ    🟢
yer_yama_romanya.js           18/20 İNDİ    🔴  Bükreş ve Yaş İNMEDİ
```

Sebebi `arac/_sahiplik_uygula.py`nin kuru koşusu **kendi ağzıyla** söyledi:

```
Bükreş   ÇAKIŞMA: yer_yama_gece_v3.js vs yer_yama_romanya.js — içerik farklı, KARAR GEREK
Yaş      ÇAKIŞMA: yer_yama_gece_v3.js vs yer_yama_romanya.js — içerik farklı, KARAR GEREK
```

**İki dosyanın içeriği yan yana kondu ve çatışmadıkları görüldü:**

```
yer_yama_gece_v3.js  →  Bükreş:  isg: [1806-11-30→1812-05-28 rusya,
                                       1828-05-01→1834-01-01 rusya]
yer_yama_romanya.js  →  Bükreş:  s:   [... 1878-07-13→1881-03-26 romanya,
                                           1881-03-26→1923-10-29 romanya-kralligi]
```

Biri **yalnız `isg:`**e, öteki **yalnız `s:`**e dokunuyor. **Ortak alanları yok.**
Yaş için birebir aynı desen.

## ② KÖK — aletin bir satırı

`arac/_sahiplik_uygula.py:210` çakışma imzasını **kaydın tamamından** kuruyor:

```python
imza = {json.dumps({k: v for k, v in x["r"].items()
                    if k in ("d", "s", "v", "isg")},
                   sort_keys=True, ensure_ascii=False) for x in liste}
if len(imza) > 1:                            # içerik FARKLI ⇒ çakışma
```

`{"isg": …}` ile `{"s": …}` farklı iki imzadır ⇒ **çakışma ilan edilir.**
Oysa çakışma *"aynı ADI iki dosya yazıyor"* değil, ***"aynı ALANI iki dosya
FARKLI yazıyor"*** demektir. Alet **kaydı** tek bölünmez birim sayıyor;
gerçek birim **alan.**

📌 Ve alet yanlış değil, **kapsamı dar** — `CLAUDE.md`nin
*"denetim var ≠ o soruyu soruyor"* ailesi. Koruma ② gerçek bir zararı
önlemek için yazıldı (İğneada · Rezve · Ahtapolu vakası, alfabetik sıranın
daha EKSİK yamayı seçmesi) ve o vakada **haklıydı**: orada iki dosya **aynı
alanı** farklı yazıyordu. Kural doğru doğdu, **taneciği** ölçülmedi.

## ③ BUGÜNKÜ TABAN — 8 çakışmanın 2'si sahte

`_sahiplik_uygula.py` kuru koşusu (2 Eylül 00:0x) 8 ad için ÇAKIŞMA dedi.
Her biri alan alan tasnif edildi:

| ad | dosyalar | çatışan alan | cins |
|---|---|---|---|
| **Bükreş** | gece_v3 · romanya | **YOK** | 🟢 sahte — birleştirilebilir |
| **Yaş** | gece_v3 · romanya | **YOK** | 🟢 sahte — birleştirilebilir |
| Ardahan | kafkas · uyg1 | `d`,`s` | 🔴 gerçek |
| Kars | kafkas · uyg1 | `d`,`s` | 🔴 gerçek |
| Kutaisi | ferhatpasa · kafkas | `v` | 🔴 gerçek |
| Eçmiyadzin | kafkas · **ok103** | `d` | 🔴 gerçek |
| Gümrü (Aleksandropol) | kafkas · **ok103** | `d` | 🔴 gerçek |
| Kasr-ı Şîrîn | kafkas · **ok103** | `d` | 🔴 gerçek |

⇒ **2/8 sahte, 6/8 gerçek.** Sahte olan ikisi de benim paketimin maddesi.
⚠️ Son üçü **bugün doğdu**: `yer_yama_ok103.js` 23:48'de yazıldı ve
`yer_yama_kafkas.js` ile aynı üç kaydı farklı yazıyor. OPUS HAZIR KITA 103'e
tahtadan bildirildi — **gerçek** çakışma, karar gerektiriyor.

## ④ ÇARE — iki yol, biri veriye HİÇ DOKUNMUYOR

**(A) ALETİ DÜZELT — önerilen.** İmza kayıttan değil **alandan** kurulur;
çakışma yalnız *aynı alan, farklı içerik* olduğunda ilan edilir. Kalan
alanlar birleştirilerek uygulanır.

```python
# ÖNERİ — uygulanmadı, arac/ koşuyla KİLİTLİ ve benim dosyam değil
catisan = set()
for a in ("d", "s", "v", "isg"):
    degerler = {json.dumps(x["r"][a], sort_keys=True, ensure_ascii=False)
                for x in liste if a in x["r"]}
    if len(degerler) > 1:
        catisan.add(a)
if catisan:                    # yalnız GERÇEK çatışmada atla
    ...
```

🟢 Bu yol **hiçbir veri dosyasına dokunmadan** Bükreş ve Yaş'ı açar: doğru
içerik `yer_yama_romanya.js` ve `yer_yama_gece_v3.js`te **zaten yazılı.**
🔴 `CLAUDE.md §11`: yeni/değişmiş bir denetim **iki yönde de** sınanmadan
çalışıyor sayılmaz. Bu değişiklik için ateşleme yolu gerçek veride **VAR**
(Ardahan · Kars · Kutaisi · üç ok103 kaydı = 6 gerçek çatışma hâlâ ötmeli),
geçme yolu da **VAR** (Bükreş · Yaş artık inmeli). ⇒ İkisi de **zorlama
gerektirmiyor**, bugünkü veri her iki dalı da koşturuyor. Sınav ucuz.

**(B) ELLE BİRLEŞTİR.** Bükreş ve Yaş için `s:` ve `isg:`i tek kayıtta
toplayan üçüncü bir dosya yazmak. 🔴 **YAPILMADI ve YAPILMAMALI:** üçüncü
dosya **üçüncü bir imza** demektir, yani çakışma çözülmez **büyür**; ancak
öteki iki dosyadaki kayıtlar aynı anda emekli edilirse işe yarar ve o iki
dosya benim değil. (A) hem daha ucuz hem geri alınabilir.

📌 Bu yüzden `data/yer_yama_ok109.js` **Bükreş ve Yaş'ı İÇERMİYOR.** Bir
oturumun yapabileceği en pahalı şey, çözdüğünü sanarak çakışmayı üçe
çıkarmaktı.

## ⑤ DERS

> **Bir süzgecin DOĞRU olması yetmiyor, TANECİĞİNİN de doğru olması
> gerekiyor. Yanlış tanecikte kurulan bir koruma, koruduğu şeyi de
> birlikte bloke eder — ve bunu "KARAR GEREK" diye, dürüstçe,
> gürültüsüzce yapar.**

Sessiz atlama değil bu: alet **her koşuda** ekrana yazdı. Ama *"karar
gerek"* diyen bir satır, kimse kararı vermediği sürece **bir raftır.**
`CLAUDE.md`nin *"kabul edilmiş borç kayıtsız kalırsa yarın kusur diye
yeniden bulunur"* dersinin üçüncü hâli: **kaydı OLAN ama sahibi olmayan
borç.** Alet soruyu sordu, sorunun bir muhatabı yoktu.

---

### ÖLÇTÜĞÜM ve ÇIKARDIĞIM — ayrı satırlar (`§11`)
- **Ölçtüm:** 20 kaydın 18'i indi, 2'si inmedi; inmeyen ikisi alan olarak çatışmıyor.
- **Ölçtüm:** aletin imzası kaydın tamamından kuruluyor (`_sahiplik_uygula.py:210`).
- **Çıkardım:** kusur veride değil aletin taneciğinde; çare aleti düzeltmek.
- **ÖLÇMEDİM:** aynı taneciğin `arac/yama_uygula.js` (kronoloji) ve
  `arac/_kademe_uygula.py` (kademe) ailelerinde de bulunup bulunmadığını —
  yalnız sahiplik ailesine baktım. Muhtemel ama **ölçmedim.**
