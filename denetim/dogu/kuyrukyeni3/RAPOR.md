# kuyrukyeni3 RAPOR (afrika1 + amerika2 + amerika1/amerika3 ikinci tarama)

① Ölçülen
- Kapsam: 33 `kuyruk_gerekli` kaydı (afrika1 4, amerika2 13, amerika1 13, amerika3 3).
- Tam zincir 2 (Kartaca 12 dilim → 2000-12-31; Tilantongo 4 dilim, biri beyanlı boşluk) · `bit:` ile kesilen 10 (Kumbî Sâlih 1240 Mali + bit 1400; Huari 1000; Cerro Baúl 1000; Batán Grande 1075 orta nokta; Ciudad Perdida 1600; Xochicalco 900; Pueblo Bonito 1300; Dos Pilas 761; El Tajín 1100-1200 beyanlı boşluk + bit 1200; Huacas de Moche 0799-12-31) · `kuyruk_gerekli` kalan 21.
- Sınır maddesi: 17 (`kronoloji_sinir_dogu_kuyrukyeni3.js`). s_ek[0].f = kaydın mevcut son t'sine eşit: 33/33 (`_sina.js`).
- `node denetim/dogu/dogrula.js afrika1 amerika1 amerika2 amerika3 kuyrukyeni3`: bu kümenin ihlali 0; ortak çıktıda 16 ihlal başka kümelerden (kunye id mükerrer). Tek başına `dogrula kuyrukyeni3` yalnız `tilantongo-mixtek` (amerika2 künyesi) kimliğini bilmez.

② Bulunamayan / okunmayan (HEPSİ "atıf; açılmadı": bu oturumda hiçbir kaynak açılmadı, web aranmadı)
- Altava 578→, Evdeguşt 1087→: var olduğu/sahibi kaynaksız.
- Cobá 780→, Cacaxtla 950→, Uxmal 907→, Ek' Balam 840→: Terminal Klasik sonrası sahip/terk okunmadı.
- amerika1/3: Tikal, Calakmul, Dzibanché, Caracol, Copán, Palenque, Yaxchilán, Piedras Negras, Quiriguá, Naranjo, Ceibal, Tiwanaku, Tula, Brattahlíð, La Centinela: bu turda araştırılmadı.
- Tüm tarihler yıl/yüzyıl hassasiyetli; gün yalnız Tunus/Meksika bilinen devir günlerinde. Kartaca zinciri Tunus abi merkezidir (beyanlı); Hafsî dilimine İspanyol himayesi (1535-74) beyanla gömüldü.

③ Kararlar / istekler
- Künye düzeltme önerisi: wari t≥1000 · tairona t→1615 (ICANH 1580-1650) · el-tajin t→1200 · tilantongo-mixtek t ile yeni-ispanya-ilk-donem f arası 7,5 ay (Tilantongo'da beyanlı boşluk).
- Yeni künye / BOYALAR ihtiyacı: yok (kullanılan tüm kimlikler devletler.js ya da ms1 künyesinde). BOYALAR kontrolü yapılmadı (`arac/renkler.py` dışarıda bırakıldı): abbasi, aglebi, fatimi, ziriler, tunus-benihorasan, muvahhidler, hafsi, tunus-ocagi, tunus-beyligi-fransiz, tunus-krallik, tunus, mali-imparatorlugu, sican, yeni-ispanya-ilk-donem, yeni-ispanya, meksika için ayrıca ölç.
- `bit` değerlerinin çoğu "en geç üst sınır"dır (kalibre 14C aralığı okunmadı); yalnız Batán Grande orta nokta (1050-1100 → 1075).
- Üretici: `_uret.js` (zincir_kuyruk.js + sınır maddelerini üretir), `_sina.js`, `_oku.js`, `_ids.js` (yardımcı).
