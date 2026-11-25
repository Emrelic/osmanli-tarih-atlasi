# CEVIRI-DENETIM-1125 — özet (UMIT 21 KASIM, 25 Kasım 2026, 21:15–21:55)

Dallar: `ceviri-denetim-<dil>-1125` (13 dal, hepsi origin'de, main'e İTİLMEDİ). ko çeviri dosyası yok, atlandı.
Türkçe kaynağa dokunulmadı. paketle / damga / push_kapisi / tam denetle koşulmadı (KASA'nın işi).

## Kapsam
Her dilde arayüz (2033) ve devlet (2315) kayıtları ile olay (5196) paketlerinin tamamı bir Sonnet alt ajanına
atandı ve okundu diye bildirildi (13 dilde toplam 2706 olay paketi). "Okundu" ajanların kendi beyanıdır,
bağımsız olarak ölçülmedi. Her kayıt tek bir göz gördü; ikinci okuma ve hakemlik yapılmadı.

## Sayılar (ölçüm: her dal ↔ origin/main, farklı olan alan sayısı)
| dil | değişen alan | arayüz | devlet | olay | uç |
|---|---|---|---|---|---|
| ar | 646 | 17 | 46 | 583 | d2484c0c3 |
| ru | 2022 | 26 | 50 | 1946 | 4c2b06597 |
| zh | 428 | 53 | 41 | 334 | 6c7b840ef |
| hi | 586 | 29 | 9 | 548 | fded2f820 |
| ja | 1866 | 183 | 72 | 1611 | 643cbd754 |
| fa | 1001 | 61 | 47 | 893 | 294b6251a |
| pl | 805 | 33 | 34 | 738 | 78b539861 |
| el | 1304 | 25 | 40 | 1239 | 0fdfd5fc0 |
| id | 423 | 77 | 6 | 340 | c40801048 |
| bn | 599 | 10 | 20 | 569 | 125ab6ffd |
| ur | 1245 | 26 | 48 | 1171 | cac6c3e07 |
| sw | 930 | 40 | 3 | 887 | 566a76fbf |
| az | 779 | 49 | 33 | 697 | cea63cd05 |
| **toplam** | **12634** | | | | |

Commit mesajlarındaki ve ara raporlardaki sayılar bundan büyük toplanır (aynı alan yinelenen uygulamada tekrar sayıldı).

## Doğrulama
- Her uygulamada `ceviri.py denetim --dil X` temiz (eksik 0, bayat 0).
- 13 dalda kayıt kümesi ve kaynak özetleri origin/main ile aynı (yapısal fark 0).
- Otomatik şüphe taraması (kaybolan yıl, %20'den fazla kısalma, %45'ten fazla uzama, yeni sayı, satır sayısı): 16 alan.
  16'sı tek tek okundu: bozuk ya da kesik metin yok. Bunun ötesinde çevirilerin DOĞRULUĞU bağımsız denetlenmedi;
  yeni yazılan Kiril/katakana/Arap harfli adların bir kısmı sözlükle teyit edilmedi (dil notlarında yazılı).
- Dikkat: ru (ve yer yer başka diller) ajanları bazı kayıtlarda Türkçede duran iç notu çeviriden çıkardı.
  Diller arasında bu bakımdan tutarsızlık var; Türkçe düzeltilince o maddeler zaten yeniden çevrilecek.

## Uygulanmayan satırlar (elle bakılacak)
ru duzeltme_d_013:23 ve ja duzeltme_001:62 (yer tutucu/etiket değişiyordu) · hi duzeltme_b_004:5, az duzeltme_001:15,
ar duzeltme_f_001:1-2 (kayıt kimliği bulunamadı). bn duzeltme_g_004:2 ajanın kendi atlama satırı.

## AÇIK: toplu ikinci geçiş isteyenler (ajan bildirimi; yaygınlık ölçülmedi)
Latin harfli kalan özel adlar: bn, ur (200-211. paketler), ja (güzergâhlar), ru (GEZGINLER 225-228),
el (146-177 ve 098-102, 117-118), fa (085-097, 151-163, 205-208), hi/id/sw (yazım birliği).
Ortak ad sözlüğü olmadan yapılmamalı. Dil dil ayrıntı: `<dil>-notlar.md`.

## TÜRKÇE KAYNAK — kullanıcıya görünen metin (öncelikli; veride doğrulandı)
1. `OLAYLAR_ORTACAG_ITALYA_DOGU_AVRUPA:1115-07-24:0` — ham veri `(kesinlik: {"f": "yuzyil", "t": "gun"})` ve URL.
2. `OLAYLAR_T5_1000A:1231-01-01:1`, `:1256-01-01:0` ve `OLAYLAR_T5_1000B:1171-09-13:0` — "Emre" geçiyor
   (ilk ikisi "Emre kararı", metni okundu; üçüncüsünün cümlesi ayrıca okunmadı).
3. `OLAYLAR_2S0920:1942-01-01:0` — "(bkz. ic_not)".
4. "bu oturumda": 4 madde (EK3:1689-08-01, EK3:1689-10-25, ARKEOLOJI_D3_ITALYA_AVRUPA:-0751, ARKEOLOJI_ZINCIR:-1209).
5. "Brif": 1 madde (ARKEOLOJI_D2_IRAN_ORTA_ASYA:-3199) · "künye": 21 madde (bir kısmı meşru olabilir, bakılmalı).
6. `OLAYLAR_EK22:1923-07-24:0` — Lozan'ın TBMM onayı gövdede 23 Ağustos, tabloda 2 Ağustos 1923 (çelişki doğrulandı;
   hangisinin doğru olduğuna kaynaktan BAKILMADI).
Sayımlar basit desen aramasıdır, alt sınırdır. Tam listeler: her dil dalında `denetim/CEVIRI-DENETIM-1125/<dil>-tr-hatalari.md`
(içindeki olgu şüpheleri, ör. 1498 Kalküta/Calicut, 1088 Guiscard, kaynaktan doğrulanmadı).

## KASA için
- 13 dalın hepsi `data/ceviri_dizin.js`'i değiştiriyor: çatışırsa elle birleştirme, `py arac/ceviri.py yaz` ile yeniden üret.
- `ceviri.py yaz_tur` parçaları yeniden böldüğü için olay dosyalarında kayıtlar parça değiştirmiş olabilir; birleştirmede kayıt düzeyinde doğrula.
- UMIT'te iki kez `ceviri.py` dosya silerken WinError 32 aldı (dosyayı kimin tuttuğu ölçülmedi; A1 Defender dışlaması bekliyor);
  yarım kalan silme `git restore` ile geri alındı, sonrasında yeniden uygulandı.

## Post-it
UMIT'te `not.py` GitHub 401 "Bad credentials": not okunamıyor/cevaplanamıyor. Gece dağıtıcısı durduruldu.
