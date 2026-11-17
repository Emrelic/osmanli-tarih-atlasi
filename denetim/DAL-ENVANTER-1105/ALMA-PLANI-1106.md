# Dal eşleştirme ve alma planı (6 Kasım 2026, KASA)

Ölçüm: `git for-each-ref refs/remotes/origin --no-merged origin/main`, main 2a820aa50.
Satır satır liste: `ORIGIN-170-ESLESME.tsv`. Hiçbir dal birleştirilmedi, silinmedi.

## 169 dal (origin/HEAD hariç)

| sınıf | dal | anlamı |
|---|---:|---|
| GOZ-GEREK (çakışık) | 103 | yama main'e temiz oturmuyor, gözle bakılmadı |
| yalnız denetim/belge | 25 | veri farkı yok, belgeler main'de değil |
| ICERIK-ICINDE | 17 | içerik main'de (patch-id ya da dosya aynı) |
| ENVANTERDE YOK | 17 | 5 Kasım envanterinden sonra açıldı (`emrelic-yedek-1105/*` 11, `umit-yedek-1105/*` 4, `emrelic-1104-ceviri-zh`, `emrelic-1105-rapor`) |
| EKSIK-IS | 5 | denetim/araç dosyaları main'de yok |
| ICINDE (yama) | 2 | yama main'de |

Yalnız 19 dalın (ICERIK-ICINDE + ICINDE) içeriği ölçümle main'de. 103 çakışık dalın ne kadarının gerçek iş taşıdığı bilinmiyor.

## mo-data-hold (`origin/emrelic-yedek-1105/mo-data-hold`)

- Taban b8e3233ed (28 Ekim), 1 commit (da0b7b380), main ondan 1641 commit ileride; 24 dosya, +4845/−50.
- Rapor kısmı (`denetim/MO-DENETIM-1028/`) main'de (47f94023d).
- Veri kısmı main'de yok: Maurya −0320, Sunga, Kanva, Nanda, İkinci Atina. Sirakuza t hücre 1'de ayrıca düzeltildi.
- **Plan:** dal birleştirilmez (`index.html` ve paketler 1641 commit eski). Veri değerleri elle, MÖ kayması maddesi (İkinci geçiş planı 4) ile tek committe yeniden yazılır; antik kronoloji konvansiyonu ve TDV kaynağı kayıt kayıt kontrol edilir.

## emrelic-1104-ceviri-zh (`origin/emrelic-1104-ceviri-zh`)

- Taban f258fee07 (4 Kasım), 1 commit (f466cb11c), main 1053 commit ileride; 4 dosya, +4038/−8: `ceviri_zh_arayuz.js`, `ceviri_zh_devlet.js`, `ceviri_dizin.js`, `CEVIRMEN.md`.
- Emre kararı: olay maddeleri çevrilmeden alınmaz.
- **Plan:** zh olay maddeleri bitince `ceviri_zh_*` dosyaları dal yerine dosya olarak alınır, `ceviri_dizin.js` çatışmasız yeniden üretilir, `index.html`e script satırları elle eklenir, `ceviri.py denetim` temiz olmadan kapıya gidilmez. Devlet dosyası 4 Kasım künyelerine göredir; o günden sonraki künye farkları tamamlanır.

## Birleştirme kararı isteyenler

1. 103 çakışık dal için gözden geçirme yapılsın mı, yoksa yalnız son 30 gün mü?
2. 25 yalnız-belge dalın denetim dosyaları main'e alınsın mı?
3. 5 EKSIK-IS dalındaki araçlar (`capraz/DEFTER-*`, tahta araçları) gerekli mi?
