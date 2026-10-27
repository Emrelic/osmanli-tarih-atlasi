# BATIAV raporu — tur 2 (web doğrulama)

## ① Sayılar (diskteki dosyalardan sayıldı)
| Dilim | Kayıt | okundu | kismen-okundu | taslak |
|---|---|---|---|---|
| A | 0 | 0 | 0 | 0 |
| B | 3 | 0 | 3 | 0 |
| C | 17 | 10 | 1 | 6 |
| D | 55 (2'si yeni) | 4 | 29 | 22 |
| E | 29 | 5 | 5 | 19 |

Eklenenler: `nevers-kontlugu` (EB11), `maine-kontlugu` (CMH III/V, kısmen). Elenen: yok. B ve C dosyaları bu oturumun alt ajanı limit hatasıyla kesilmeden önce kısmen güncellenmiş; ben doğrulamadım, yalnız `soissons-devleti` ve `salian-frank-tournai` kayıtlarını yazdım. B/C'nin kalan taslakları yeniden gözden geçirilmeli.

Doğrulanan başlıca düzeltmeler:
- Taifalar (TDV): Eftasîler 1022-1095; Denia 1014-1076; Malaga Hammûdîleri t=1057; Valensiya Âmirîleri t=10 Kasım 1065 (gün); Albarracín (Rezîn) 1013-1104; Niebla (Yahsubîler) 1023-1054 (t=1262 KISALTILDI); Balear 1076-1115; Almeria f=1009, t=1091. Carmona (Birzâlîler) f/t TDV'de yok, null yapıldı.
- Bobastro/Beni Kasi (TDV, İbn Hafsûn md.) bu turda dosyaya işlenmedi (f 880, t 19 Ocak 928 okundu; Beni Kasi t 929 uyumlu).
- orta-francia: 843-08 / 29 Eylül 855 (EB11 Lothair I) okundu. karolenj-imparatorlugu t=887-11 (Şişman Charles'ın tahttan indirilmesi).
- bretanya-nominoe f=846 (CMH III, EB11). soissons: f=461 (Treccani Egidio), t=486; Syagrius künyesi atlasta YOK.
- bernicia/deira t=605 (EB11); mercia t=918, wessex, northumbria t=954 EB11 ile uyumlu (mevcut künyeler `var`).

## Öncelikli künye sorularına yanıt
- `frank` 481-843: EB11 Clovis 481 doğru. 843-887 Frank şehir zincirleri için karolenj-imparatorlugu (887'ye) + dogu/bati/orta-francia gerekir; `orta-francia` (843-855) atlasta eksik, `orta-francia-lotharingia` 855'ten başlar (EB11: Lorraine'in Henry I'e geçişi 925 uyumlu).
- `bretanya` künyesi 939'da başlar; Nominoë dönemi 846'dan: öne çekilmeli. `bati-francia` 843-987: Hugh Capet 987 (EB11) uyumlu.
- Okunamayanlar: parisii (Treccani çok büyük sayfa; ayrıca Pleiades okunmadı), kastilya/aragon/man-ve-adalar öncül f/t, dogu-francia.
- Capet beylikleri: Nevers ve Maine eklendi. Poitou, Bar, Zeeland, Cerdanya, Galloway, Moray kaynaklı tarih bulunamadı (EB11 maddeleri yok/yetersiz) — EKLENMEDİ.
- Yazım karışıklığı: mevcut tsv'de `taife-emirligi` (granada-ziriler) ve `taifa-emirligi` (sevilla-abbadiler, toledo-zunnunler, zaragoza-hudiler) birlikte kullanılıyor; tek yazıma indirilmeli.

## ② Ulaşılamayan / zayıf
TDV, Treccani, EB11 Wikisource, archive.org (CMH III, V; OCR gürültülü) çalıştı. İrlanda/Galler birimleri, Katalan kontlukları, Baltık, İskandinav kayıtları, Capet kontlukları büyük ölçüde taslak kaldı. Hicrî→Jülyen günler tablo hesabıdır (±2 gün).

## ③ İstekler
1. D'deki 40 taslak için ayrı bir tur (Dictionary of the Middle Ages, Oxford Companion to Irish History, Gran Enciclopèdia Catalana).
2. `orta-francia` künyesi ve `bretanya` künyesinin f'sinin öne çekilmesi kararı.
3. Niebla ve Tortosa-Lleida kayıtları için karar (kısaltma uygulandı; Tortosa/Lleida ayrı iki kayıt olmalı).

## Ek (tur 2b)
- Bobastro (f hicrî 267/880, t 19 Ocak 928) ve Beni Kasi (t 929) TDV'den işlendi.
- D'de 16 kayıt Cambridge Medieval History c. III ile kismen-okundu yapıldı (Katalan kontlukları, Sobrarbe-Ribagorza, Kastilya/Aragon kontlukları 1035, Galicia, Norse Waterford/Limerick, Galler aşiret krallıkları, Adalar, Orkney). Varlık ve bağlam doğrulandı; f/t çoğunlukla okunmadı, taslak değerler korundu. Katalan alt kontluklar (Besalú, Urgel, Empúries, Pallars) kaynakta Barselona kontlarının elindeki Marka kontlukları olarak geçer: bağımsız künye mi alt birim mi kararı bekler.
- Kalan taslaklar: İrlanda eyalet krallıkları, Gwent/Lindsey/Hwicce/Elmet/Rheged/Gododdin, Alba, Portucale, Akitanya kolları, Frank-Burgundia, İsveç/Gotar/Lade/Faroe. dogu-francia mevcut künyedir (BATIAV kaydı değil).
