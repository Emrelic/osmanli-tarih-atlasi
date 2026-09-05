# ÖLÇÜM — "30 belgesiz sahipsiz nokta" yeniden ölçüldü (M-2830)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`
**Tarih kesiti:** 1923-10-29 (atlas ufkunun son günü)

## SONUÇ: 30 → 7

```
30  (ilk ölçüm, yalnız kasitli_bosluk kontrol edilmişti)
 ↓
161 gerçek sahipsiz nokta (bit: filtresi eklendi — denetle.py:960/1109 ile
    BİREBİR aynı kural: yerleşim `bit:` tarihinden sonra yok olduysa
    sahipsizlik SORULMAZ. Bu adım tek başına 173→161'e indirdi, 12 nokta
    Mayapán/Zaculeu/Cahokia gibi `bit:`li kayıtlardı.)
 ↓
154 en az BİR beyan taşıyor (kasitli_bosluk VEYA bos VEYA neden — DÖRTLÜNÜN
    biri yeter, alan adları girdi.py `BILINEN_ALANLAR`dan DOKÜLDÜ,
    varsayılmadı)
 ↓
  7 HİÇBİR beyan taşımıyor — GERÇEK belgesiz
```

## YÖNTEM — önce ARAÇ okundu, kendi aracım YAZILMADAN

M-2830 ③'ün talimatı uygulandı: `denetle.py`nin Değişmez 1 dalı ZATEN
`bit:` alanını soruyor (`arac/denetle.py:957-959`, `girdi.py:798`'de
tanımlı) — kendi 1923-10-29 kesitim için AYNI kuralı tekrar yazdım (mevcut
`denetle.py` yalnız örneklenmiş yıllarda (1285/1290/1295 + 20 yıl arayla)
çalışıyor, 1923-10-29'u örneklemiyordu — bu yüzden onu ÇAĞIRAMADIM, ama
MANTIĞINI birebir kopyaladım).

Alan adları `girdi.py:772` `BILINEN_ALANLAR` sözlüğünden BİREBİR alındı:
`kasitli_bosluk` (bayrak) · `bos` (cins: devletsiz|veri-yok|kabile|
insansiz|hata) · `neden` (serbest metin gerekçe) · `bit` (yok oluş
tarihi). Hiçbiri varsayılmadı, hepsi sözlükten okundu.

## 7 GERÇEK BELGESİZ — adıyla

```
Ndjamena · Agadez · Timbuktu · Hadramut · Darfur · Somali çölü · Ogaden
```

Hepsi Sahra/Sahel/Arabistan çölü bölgesinde — `§3` Değişmez 1'in zaten
tanıdığı "kasten sahipsiz" kümeye (Sahra, Rub'ul Hâlî, Necid öncesi)
coğrafi ve tematik olarak ÇOK yakın. Muhtemelen **doğru** ama henüz
**etiketlenmemiş** — Timbuktu zaten CLAUDE.md'nin kendi örnek vakası
(`§11`: "araştırılmış doğru veriyi silmek yeniden araştırmaktan pahalıdır").

## VE HONOLULU — kendi ilk raporumun İKİNCİ hatası

İlk turda (`BULGU-1923-0905.md`) Honolulu'yu "bos: işareti de yok" diyerek
belgesiz saymıştım. Şimdi doğrudan okudum: Honolulu'nun **`neden:` alanı
DOLU** (Kamehameha I birleşmesi, ABD ilhakı, `pencere_disi:true` — tam
gerekçeli). Ben yalnız `bos:`e bakmışım, `neden:`i atlamışım — DÖRTLÜNÜN
aynı eksik yüzü, ikinci kez.

## DAMGA

| kalem | damga |
|---|---|
| "30" sayısı | **ÇÜRÜDÜ** — yöntem eksikti (yalnız `kasitli_bosluk`), gerçek sayı 7 |
| 7 gerçek belgesiz | **BULGU** — muhtemelen doğru, henüz beyansız |
| Honolulu | **ÇÜRÜDÜ** (ikinci kez) — `neden:` doluymuş, belgeli çıktı |
| `denetle.py`nin kendi Değişmez 1'i bunu zaten sorup sormadığı | Kısmen — MANTIK aynı ama 1923-10-29'u ÖRNEKLEMİYOR, bu yüzden doğrudan çağrılamadı |

**Hüküm verilmedi, yalnız sayı ve liste teslim edildi** (M-2830'un açık
talimatı): 7 noktanın `bos:`/`kasitli_bosluk` ile işaretlenmesi ayrı bir
karar/iş, ben burada dokunmadım.

`⏳ BEKLİYORUM: 7 nokta için beyan yazma işi açılsın mı · yeni iş`
