# 34 · Gupta İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (ölçer: `gupta sonraki-gupta`)

## Özet
- Künye: `gupta` (0320→0540) ve `sonraki-gupta` (0550→0750); ikisi de **0 yerleşim kaydına sahip — haritada görünmüyor**. Ölçer kırılma bulamadı (hiç s: dilimi yok), dolayısıyla açık kırılma 0.
- Evrende (kronoloji_sinir_asya3_1024.js ve kronoloji_sinir_asya_zincir_1024.js) 8 Gupta maddesi var (320-02-26, 376/380, 380, 398, 401, 413, 455, 467); **son madde 467 — imparatorluğun sonu ve 540-550 arası yok**. Eksik madde 3.
- En ağır 3 bulgu: (1) Gupta hiçbir şehre bağlı değil: Patna 29 Ö.Ö.→1281 `__BOSLUK__`, Ujjain 398→1281 `__BOSLUK__`, Mathura 1281'den başlıyor. (2) `gupta.t = 0540-01-01` kaynaklarla uyumsuz: Majumdar Gupta hükümdarının 543'te hâlâ üstün efendi sayıldığını verir; en erken "etkin yetki bitti" 550. (3) 540-550 arası 10 yıl iki künye arasında açık.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| gupta | Gupta İmparatorluğu | 0320-01-01 | 0540-01-01 | 0 yerleşim; t kaynakla çelişiyor |
| sonraki-gupta | Sonraki Gupta (Magadha) | 0550-01-01 | 0750-01-01 | 0 yerleşim; "yüzyıl hassasiyetli" |
| vakataka | Vakataka | 0255 | 0540 | komşu/müttefik; aynı t=540 |
Eksik evre: Vakataka ve Hun (Toramana/Mihirakula) işgali bölgeleri, Maukhari, Maitraka, Kâmarûpa; Gupta toprağında Ujjain/Malwa 410'dan sonra, Batı Satrap sonrası. Hun/Hephtalit künyesi ARANACAK (`--ara hefta` boş döndü).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| gupta.f | 0320-01-01 | Enc. Ital. 'Gupta' (okundu): «estese il suo dominio fino all'attuale Allahabad (320 d. C.; era Gupta)» | Majumdar, History and Culture of the Indian People III, 1954 (archive.org classicalage03bhar; atlasın kronoloji_sinir_asya3_1024.js:25'te "26 Şubat 320" Gupta çağı başı) | TEYİTLİ yıl 320 (çağ başlangıcı; hükümdarın tahta çıkışı ayrıca tartışmalı: çağ 319/320). Gün 26 Şubat 320 Jülyen çağ başlangıcı: kaynaktaki gün korunur, çeviri önerilmez. `0320-01-01` ile gün farkı 56: `gupta.f` 0320-02-26 olabilir (Majumdar, dönemin başı) — kesinlik yıl olduğundan 0320-01-01 de kabul. |
| gupta.t | 0540-01-01 | Majumdar III (archive.org classicalage03bhar djvu, okundu): «even in A.D. 543 a Gupta emperor is referred to as suzerain in an inscription in N. Bengal»; «by A.D. 550 the Guptas had ceased to exercise effective authority over the great part of Magadha» | Enc. Ital. 'Gupta' (okundu): «Yasodharman re di Mālava pose fine a questa dinastia» → **529** (Yasodharman Malwa'dan, Narasimha'yı yenip) | **ÇELİŞKİ (iki kaynak iki değer):** Majumdar ~550 (Gupta çizgisi 570'e kadar sürebilir: Kalinga yazıtı Gupta Çağı 250 = 569-70), Enc. Ital. 529. Künye t=540 hiçbirine uymuyor (540: Kids Britannica, dayanak olamaz). Öneri: **t=0550-01-01**, kesinlik onyıl, ic_not'ta 529 (EI) ve 543/569 (Majumdar) beyanı; sonraki-gupta f=0550 ile bitişik, 540-550 boşluğu kapanır. Alternatif: 0529 (daha kısa); kaynak yasası çelişkide ikisini beyan eder, tercihi Majumdar'a bağlıyorum çünkü yazıt-temelli (543, 551-2). |
| sonraki-gupta.f | 0550-01-01 | Majumdar III 'The Later Guptas' (künyede, "yüzyıl hassasiyetli"); III s. «Gaya 551-2 Nandana grant» ile gerçek etkin yetki boşluğu | Majumdar IV (künyede) | Yüzyıl hassasiyeti kaynakla uyumlu; tek yayın (Majumdar III-IV) iki cilt, ikinci bağımsız akademik kaynak ARANACAK (Goyal, *History of the Imperial Guptas* 1967; Cambridge History of India). |
| sonraki-gupta.t | 0750-01-01 | künyede Majumdar | — | tek kaynak, "sonu belirsiz"; hükümsüz ama beyanlı. |
Bonus: Gupta evreleri. Samudragupta 330-380 (Britannica; künye kronolojisi), II. Chandragupta 376/380-413/415 (Majumdar; evren maddeleri :27, :29), Skandagupta ~455-467 (:30, :31), 467 sonrası zayıflama; 500-570 arası "beş imparator" (Majumdar III). Evre bölünmesi künye düzeyinde gerekmez.

## c) Kronoloji (evren: kronoloji_sinir_asya3_1024.js, kronoloji_sinir_asya_zincir_1024.js)
Var olanlar:
- :25 0320-02-26 Gupta Çağı başladı · :26 0380 Samudragupta öldü (onyıl) · :27 0376 II. Chandragupta · :28 0401 Batı Satrapı III. Rudrasimha yenildi (401-410) · :29 0413 II. Chandragupta öldü · :30 0455 Kumaragupta öldü, Hunalar · :31 0467 Skandagupta öldü — hepsi kronoloji_sinir_asya3_1024.js; ayrıca kronoloji_sinir_asya_zincir_1024.js:64 0398 Batı Satrapları son tanıklı yıl.
- Tutarsızlık: Ujjain s: sakalar-bati-satraplar t=0398-01-01 (yerlesimler_asya.js:845) ↔ Chandragupta II fethi madde :28 = 401-410. 398 son tanıklı yıl, 401-410 fetih: kaynak çelişkisi beyan edilmeli ya da iki maddeyi tek günde birleştirmek yerine s: sınırını ayrı beyanla.
EVREN DIŞI: devletler.js gupta kronolojisi (:20639-20646): 0320 Chandragupta I, 0330 Samudragupta, 0380, 0388, 0415 (Kumaragupta I), 0455 Skandagupta, 0467, 0470 Hunlar.
Eksik madde önerileri:
```
{ t:"0510-01-01", kesinlik:"yil", b:"Eran yazıtı: Gupta hükümdarı Bhanugupta'nın Hunlara karşı savaşı (Goparaja öldü)", yer_id:"Eran", kaynak:"Majumdar, History and Culture of the Indian People III (okundu, s. ~33): «dated A.D. 510»" }
{ t:"0543-01-01", kesinlik:"yil", b:"Kuzey Bengal hibesinde son Gupta hükümdarı hâlâ üstün efendi olarak anılıyor", yer_id:"Patna (Azîmâbâd)", kaynak:"Majumdar III: «A.D. 543 ... a Gupta emperor is referred to as suzerain» (okundu)" }
{ t:"0550-01-01", kesinlik:"onyil", b:"Gupta Devleti sona erdi: Magadha'da Gupta yetkisi bitti; Sonraki Guptalar ve Maukhariler egemen (EI 529: Yasodharman Narasimha'yı devirdi; Majumdar: etkin yetki 550'ye kadar)", yer_id:"Patna (Azîmâbâd)", kaynak:"Majumdar III (okundu) · Enc. Ital. 'Gupta' (okundu)" }
```
(Hun Toramana 512 ve Mihirakula yenilgisi, Yasodharman 530 civarı Mandasor yazıtı: Majumdar III'te okundu, tarihler yaklaşık; ayrı madde adayı.)

## d) Harita uyumu
- Gupta için **0 yerleşim**, `sonraki-gupta` için 0, `vakataka` kontrol edilmedi. Haritada Gupta hiç boyanmıyor.
- Mevcut sahiplik tablosu (okundu): Patna `-0029-01-01 → 1281-01-01 __BOSLUK__` (beyanlı, kaynak sessiz); Ujjain `0398-01-01 → 1281-01-01 __BOSLUK__` (Saka sonrası); Vidisha yalnız Sunga (-0186→-0074), Mathura s: 1281'den; Varanasi, Ayodhya, Allahabad (Prayaga), Gaya, Kausambi, Eran, Kanauj kaydı YOK. 
- Ölçer 0 kırılma verdi; gereken s: dönemleri (kaynak: Majumdar III + Allahabad Sütunu yazıtı, ARANACAK):
| yerleşim | öneri dilim | kaynak notu |
|---|---|---|
| Patna (Pataliputra) | 0320-02-26 (ya da 0320-01-01) → 0550-01-01 gupta; ardından 0550→0750 sonraki-gupta (yüzyıl kesinlik) | Majumdar III: Pataliputra başkent; merdiven ①-②; ardıl Magadha Sonraki Gupta |
| Uccayn (Ujjain) | 0398/0401-01-01 → 0500 civarı gupta (BOŞLUK'u kısalt) | Majumdar III: Chandragupta II Ujjain'i ilhak etti (:28); 495-510 Hun Toramana işgali ve 530 civarı Yasodharman Malava'da: sonrası `__BOSLUK__` kalsın |
| Mathura | 0335 civarı → 0467/0500 gupta | Allahabad Sütunu yazıtı Mathura'yı sayar (ARANACAK) |
| Eran (yeni yerleşim) | 0500-0510 gupta vassalı; sonra Hun | Bhanugupta Eran yazıtı 510 |
| Vidisha | 0380 → 0500 gupta (Vidisha 410 yazıtları) | ARANACAK |
| Varanasi, Ayodhya, Prayaga, Kausambi, Gaya | gupta 0335-0467 | yeni yerleşim kaydı gerekir (mükerrer tarama 3 km) |
Kuralın merdiveni: sahibi kaynakta bulunamayan ama var olduğu bilinen yerler komşu büyük merkezi izler (Patna zincirine bağla, `kaynak:`a "zincir Patna'dan devralındı").
Hiçbir kırılma maddesiz kalmaz, çünkü s: dilimi henüz yok; dilimler eklendiğinde 0320 (:25 uygun), 0398 (:28/:64), 0550 (yukarıdaki yeni madde) kırılmaları karşılanır.

## Önerilen düzeltmeler (KASA için)
1. devletler.js `gupta.t` → "0550-01-01" (kesinlik onyıl, `ic_not_t`: Majumdar 543 üstün efendi; 550 etkin yetki yok; EI 529 çelişkisi beyanı; Britannica 540/550 dayanak olamaz). `sonraki-gupta.f` ile bitişik.
2. `gupta.kaynak` alanına Majumdar III + Enc. Ital. 'Gupta' yaz (şu an "encyclopedia.com 'Gupta Dynasty'", kısa; Kids Britannica dayanaksız).
3. Patna, Ujjain, Mathura, Vidisha, Eran ve Gangetik şehirler için `d:"gupta"` s: dilimleri (yukarıdaki tablo) ve `renkler.py BOYALAR`da gupta (#8076a2) VAR — harita boyası hazır.
4. Evrene 3 madde ekle (Eran 510, Bengal 543, Gupta sonu 550); Ujjain 398/401 tutarsızlığını beyan et.
5. Sonraki Gupta için ikinci akademik kaynak (Goyal 1967).

## Erişilemeyen kaynaklar
- S. R. Goyal, *A History of the Imperial Guptas* (Allahabad 1967): son Gupta hükümdarı (Vishnugupta) tarihi 543-570; hangi yıl Gupta suzeranlığı sona erdi?
- Cambridge History of India / Cambridge Illustrated History: 550 civarı etkin Gupta sonu için ikinci akademik kaynak.
- Fleet, *Corpus Inscriptionum Indicarum III*: Allahabad Sütunu yazıtı (Samudragupta'nın fethettiği yerler: Mathura, Ayodhya vb.) — yerleşim s: kaynakları için.
- Treccani 'Gupta' sayfası okundu ama ulaştığı tarih 529 (Yasodharman) kaynak metin belirsizliği: tam madde metni teyit.
