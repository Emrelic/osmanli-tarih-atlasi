# 63 · Anadolu (Türkiye) Selçukluları — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer iki kez koşturuldu; ikinci koşu "otomatik dönem ucu" satırlı sürüm)

## Özet
- Künye 1 (selcuklu; Büyük/Kirman/Suriye/Irak Selçuklu ayrı künyeler, bu devletin parçası değil). 65 yerleşim, en geniş 1240: 41. Kırılma 73, açık 6, otomatik maddeyle kapanan 0. ⚠ satırı yok.
- En ağır bulgular: (1) f belirsiz: künye 1075-01-01, olaylar_ortacag_iran_turan.js:98 kuruluş maddesi 1078, Treccani 1077 — üç farklı yıl; iki kaynaklı çözüm yok. (2) 1086-1092 (Süleyman Şah ölümü → I. Kılıçarslan) ve 1259-1277 (iki sultan paylaşımı) arası harita/kronoloji sürekliliği gözden geçirilmeli; 1243 Kösedağ maddesi 1243-07-01 gün/ay-yıl çelişkisi (TDV: Muharrem 641 / Temmuz 1243, gün yok → "gun" kesinliği yanlış). (3) 1297-1303 beyliklere kopuş kırılmalarında alâkalı madde yok (Antalya/Elmalı/Finike 1300, Diyarbakır 1303) ve künye t 1308 ile harita sahipliği tutarsız (Diyarbakır 1303'te kayıp: Selçuklu'ya ait olması kaynaklanmalı).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| selcuklu | Anadolu (Türkiye) Selçuklu Devleti | 1075-01-01 | 1308-01-01 | Tek künye. Evre (İznik 1075-1097 / Konya 1097-1308 / Moğol tâbiliği 1243-) ayrılmamış. harita:"selcuklu" |
Eksik: Moğol tâbiliği evresi künyede kodlanmadı (1243 sonrası İlhanlı/Selçuklu paylaşımı s: ile mi gösteriliyor? ölçülmedi). 1086-1092 interregnum evresi yok.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f | 1075-01-01 | TDV selcuklular §III: Süleyman Şah İznik'i başşehir yapıp devleti kurdu; "1075-1080" aralığı (okundu) | Treccani selgiuchidi: "1077, Michele VII ... ceduto" (Bizans imparatoru anlaşması) ; olaylar_ortacag_iran_turan.js:98 (atlas): 1078 | Çelişki: TDV 1075-80 aralığı, Treccani 1077. 3. kaynak (TDV süleyman-şah maddesi; slug bulunamadı) ERİŞİLEMEYEN. Hüküm: 1075-01-01 TDV aralığının alt ucu; kanıt zayıf ⇒ f "yalnız yıl teyitli; gün teyitsiz" beyanı + 1078 maddesi ya 1075'e ya da "1077/78 İznik kesin" biçimine hizalanmalı |
| başkent İznik→Konya | 1097-06-19 | TDV: İznik Haçlılara teslim, Haziran 1097; Kılıçarslan Konya'yı merkez yaptı | Atlas kronolojisi (referans değil) | Tek akademik kaynak (TDV); 2. kaynak çekilemedi |
| Miryokefalon | 1176-09-17 | TDV selcuklular: "17 Eylül 1176" | atlas: aynı | TDV gün veriyor; 2. akademik kaynak çekilemedi (Cambridge History of the Byzantine Empire/Brand) |
| Kösedağ | 1243-07-01 "gun" | TDV selcuklular: "Muharrem 641 / Temmuz 1243", gün yok | (Cahen, Pre-Ottoman Turkey: 26 Haziran 1243 — hafızadan, DOĞRULANMADI) | madde kesinliği "gun" yanlış: "ay" olmalı; Muharrem 641 = 1243-07-?; ay hassasiyeti |
| t | 1308-01-01 | TDV selcuklular: II. Mesud ö. 708/1308, "son hükümdar" | Treccani: "sino circa al 1300" (yaklaşık) | TDV esas; Treccani 1300 farkı ic_not'a yaz. Hicrî 708 ∩ 1308 → kesişimin ilk günü 1308-01-01 civarı, hesap, doğrulanmadı |

## c) Kronoloji
Var (Değişmez 2): kuruluş 1078 (iran_turan:98); Antakya 1084-12-12 (:102); Aynüseylem 1086-06-04 (:103); İznik 1097-06-19 (:114); başkent Konya 1097-01-01 (:113, gün yıl düzeyi — 06-19'dan önce yazılmış, tutarsız); Kılıçarslan ö. 1107 (:121); Mesud tahtı 1116 (:123); II. Kılıçarslan 1155 (:140); Miryokefalon 1176-09-17 (:150); II. Kılıçarslan ö. 1192-08-26 (anadolu_kafkasya:81); Keyhusrev ö. 1211 (:93); Keykubad ö. 1237-05-31 (:105); Baba İshak 1240 (iran_turan:180); Kösedağ 1243-07-01 (:181); 1246 (anadolu_kafkasya:113); 1259 bölünme (:120); 1277 Karamanoğlu Konya (iran_turan:191); II. Mesud 1284 (:133). Büyük kopuş: Kronoloji_sinir 1097 Kütahya/Behisni kayıpları var.
Eksik/önerilen:
```
{ t:"1077-01-01", kesinlik:"yil", b:"Bizans imparatoru VII. Mikhail Anadolu'da fethedilen toprakları Süleyman Şah'a bıraktı (Treccani: 1077)", yer_id:"İznik", kaynak:"Treccani Selgiuchidi — alıntı: \"Michele VII ... ceduto\"; TDV ile çelişkisi ic_not'ta" }
{ t:"1092-01-01", kesinlik:"yil", b:"I. Kılıçarslan Melikşah'ın ölümünden sonra serbest kalıp Anadolu'ya döndü", yer_id:"İznik", kaynak:"TDV kilicarslan-i — OKUNMADI, yıl doğrulanmalı" }
{ t:"1302-01-01", kesinlik:"yil", b:"Selçuklu elinde kalan Güney Anadolu şehirleri beyliklere geçti", — kaynak bulunamadı, ERİŞİLEMEYEN }
```
Madde düzeltme: 1243-07-01 kesinlik "gun" → "ay"; 1097-01-01 başkent maddesi t'yi 1097-06-19'a çek.

## d) Harita uyumu
Açık 6 (+0 otomatik):
| gün | yerleşim | öneri |
|---|---|---|
| 1085-01-01 kayıp | İzmit | Bizans Nikomedia'yı geri aldı; kaynak: Anna Komnene/TIB — tanık bulunamadı; madde "1085-86 Alexios Komnenos İzmit'i geri aldı" ERİŞİLEMEYEN. Yoksa dönemi kırp |
| 1220-01-01 kazanç | Beyşehir | Keykubad dönemi (Beyşehir/Kubadabad); kaynak TDV beyşehir okunmadı. Madde "Keykubad Beyşehir'i aldı" önerilir |
| 1256-01-01 kayıp | Karaman | 1256 Aksaray savaşı / Moğol baskısı (TDV: Karamanoğulları ilk kez 1256'dan sonra ?) — kaynak bulunamadı; Karaman ilk Karamanoğlu elinde 1256? Doğrula |
| 1297-01-01 kayıp | İshaklı | Hamîdoğulları kuruluşu (aynı sene, Hamîdoğulları 1297?) — mevcut en yakın madde Karesi/Hamîd; tarih eşleşmesi doğrula |
| 1300-01-01 kayıp | Antalya, Elmalı, Emet, Finike | Teke/Hamîd paylaşımı: Antalya 1301?; kaynak: TDV antalya; madde yaz |
| 1303-01-01 kayıp | Diyarbakır | Diyarbakır Anadolu Selçukluları'na ait olmuş mu? 1240 Âmid alındı (olaylar_t5_1000a.js:84); 1303 İlhanlı'ya geçişi için madde yok; kaynak bulunamadı |
Sahiplik: en geniş 1240 41 yerleşim (Konya, Kayseri, Sivas, Antalya, Sinop, Âmid…) — yerleşim adları tek tek açılmadı, ölçülmedi. Sınır dışı sahiplik riski: Âmid/Diyarbakır, Ahlat (1232-1243 `selcuklu`, kronoloji_sinir:290) çok doğu.

## Önerilen düzeltmeler (KASA için)
1. data/devletler.js `selcuklu`: ic_not_f yaz — "f 1075 (TDV 1075-1080 aralığı; Treccani 1077; atlas 1078 maddesi) — yalnız yıl teyitli, gün teyitsiz".
2. data/olaylar_ortacag_iran_turan.js:98 (1078) ile künye f 1075 uyumlandır; :113 (1097-01-01 başkent) → 1097-06-19.
3. data/olaylar_ortacag_iran_turan.js:181 Kösedağ kesinlik "gun"→"ay".
4. Açıkların 6'sı için yukarıdaki maddeler; kaynağı çekilemeyenler "bulunamadı" ile yazılsın, Tahminle yazma.
5. Künye t 1308 + Treccani "yaklaşık 1300" farkı ic_not'a.

## Erişilemeyen kaynaklar
- TDV "Süleymanşah, Kutalmışoğlu" maddesi (slug bulunamadı; arama yalnız Sevim, Ali verdi) — soru: İznik'in alınış yılı/günü ve Bizans anlaşması 1075/1077/1078?
- TDV "Kılıcarslan I" ve "Kösedağ Savaşı" — soru: 1092'de dönüş yılı; Kösedağ günü (26 Haziran 1243?).
- Claude Cahen, Pre-Ottoman Turkey (1968) — soru: Kösedağ günü; Süleyman Şah'ın kuruluş yılı.
- Cambridge History of Turkey vol.1 (Fleet) — soru: 1308 sonu ve 1300 civarı kopuş.
- Anna Komnene, Alexiad VI.9 / TIB — soru: İzmit'in 1085/86'da Bizans'a dönüşü.
