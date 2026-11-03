# 64 · Endülüs Emevîleri — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer iki kez koşturuldu; ikinci koşu "otomatik dönem ucu" satırlı sürüm)

## Özet
- Künye 1 (endulus-emevi, f 756-05-15, t 1031-01-01) + ardıl endulus-tavaif (1009-1110, bu dosyanın dışında). 11 yerleşim, en geniş 1003: 10. Kırılma 9, açık 3, otomatik maddeyle kapanan 0. ⚠ yok.
- En ağır 3 bulgu: (1) 929 hilâfet ilanı Değişmez 2 evreninde YOK (künyede evre ayrımı da yok; tur "hilafet" ama 756-929 emirlik evresi belirtilmemiş). (2) 756 kuruluş günü için kronoloji maddesi YOK (ölçer en yakın 56 g uzakta, Çin olayı): 756-05-15 Musâre. (3) 1031 kaybı için şehir-ad alâkalı madde yok (Cádiz, Jaén, Lizbon, Toledo), 1000-01-01 Jaén kazancı da; ayrıca 1009-1031 arası künye örtüşmesi bilinçli ve ic_not'ta beyanlı ama harita sahipliği yerleşim s: ile ayrılmalı.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| endulus-emevi | Endülüs Emevîleri (Kurtuba Emirliği / Hilâfeti) | 0756-05-15 | 1031-01-01 | Tek künye; evre (emirlik 756-929 / hilâfet 929-1031) kodlanmamış |
| endulus-tavaif | Mülûkü't-tavâif | 1009-01-01 | 1110-01-01 | Ardıl, ayrı denetim; TDV 1031-1090 verir (künye 1009'dan başlar, ic_not_f gerekçeli) |
Eksik: Hammûdî Şiî dönemi 1016-1027 künyesiz (ic_not'ta beyan). Murâbıtlar/Muvahhidler başka devletler.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f | 756-05-15 | TDV abdurrahman-i (okundu): "15 Mayıs 756" Musâre, Kurtuba'ya giriş; 14 Ağustos 755'te Münekkeb'e çıkış | Treccani omayyadi: "giunse nel 755 in Spagna, dove fondò un emirato" (755 = çıkış yılı) | TDV esas, gün teyitli; Treccani 755/756 farkı çıkış–ilan farkıdır (çelişki değil, ic_not'a yaz) |
| hilâfet | künyede yok | TDV abdurrahman-iii: halife unvanı 929 (gün yok); Treccani: 929 | — | iki kaynak 929 yıl; gün: ay/gün ERİŞİLEMEYEN. Kesişim kuralı: 316-317 H ∩ 929 → 929-01-01 (hesap, doğrulanmadı) |
| t | 1031-01-01 | TDV endulus: "Endülüs Emevî Devleti yıkılmış oldu (422/1031)" | Treccani: "fino al 1031" | iki kaynak yıl uyuşuyor. Künye ic_not: 422 H = Aralık 1030–Aralık 1031 (hesap); gün/ay kaynakta yok, 1031-01-01 yıl-düzeyi, kal |
| Hişâm II 1009 | madde var | TDV endulus: 1009 isyan, Hişam'ın saltanatı sona erdi | atlas ic_not 1009 | iyi |

## c) Kronoloji
Var: Emir III. Abdurrahman 912-10-16 (olaylar_ortacag_iberya_magrib.js:33); Hafsûn isyanı sonu 928-01-17 (:35); Medînetüzzehrâ 936-11-19 (:36); Simancas 939-08-01 (:?); III. Abdurrahman ö. 961-10-15 (:40); II. Hişâm 976-10-02 (:42); Mansûr ö. 1002 (:44); Mehdî darbesi 1009-01-17 (:45); Süleyman el-Müstaîn 1009-11-08; Hişâm ikinci kez 1010-07-23; 1013, 1016 Hammûdîler; Âmirîler 1021; Abbâdîler 1023-03-26; 1031-01-01 (:53) ve kronoloji_sinir_akdeniz3_1024.js:12.
Eksik:
```
{ t:"0756-05-15", b:"I. Abdurrahman Musâre'de Yûsuf el-Fihrî'yi yendi, Kurtuba'ya girip Endülüs Emevî Emirliği'ni kurdu", yer_id:"Kurtuba (Córdoba)", kaynak:"TDV abdurrahman-i: \"15 Mayıs 756\" (okundu); Treccani omayyadi: emirato indipendente (755 çıkış)" }
{ t:"0788-10-02", b:"I. Abdurrahman Kurtuba'da öldü (25 Rebîülâhir 172)", yer_id:"Kurtuba (Córdoba)", kaynak:"TDV abdurrahman-i: \"25 Rebîülâhir 172 (2 Ekim 788)\"" }
{ t:"0929-01-01", kesinlik:"yil", b:"III. Abdurrahman halife ve emîrü'l-mü'minîn unvanını aldı; Kurtuba hilâfeti kuruldu", yer_id:"Kurtuba (Córdoba)", kaynak:"TDV abdurrahman-iii (okundu): 929; Treccani omayyadi: 929; gün/ay ERİŞİLEMEYEN (Zilhicce 316 / 929 Ocak?) — tahminî gün YAZILMADI" }
{ t:"1031-01-01", kesinlik:"yil", b:"Kurtuba hilâfeti kaldırıldı; Cádiz, Jaén, Lizbon, Toledo tâife emirliklerine kaldı", yer_id:"Toledo", kaynak:"TDV endulus: (422/1031) — alâkalı yer adları için ayrı madde ya da odak_yer listesi" }
```
Not: 1031-01-01 mevcut madde (:53) yalnız Kurtuba'ya bağlı; odak_yer'e Cádiz, Jaén, Lizbon, Toledo eklenirse ölçer kapanır (madde sayısını artırmadan).

## d) Harita uyumu
Açık 3 (+0 otomatik):
| gün | yerleşim | öneri |
|---|---|---|
| 0756-05-15 kazanç | Cádiz, Granada, Kurtuba, Lizbon | 756 Musâre maddesi (yukarıda); 4 yerleşimin hepsi 756'da Emevî sayılıyor — Lizbon (Müslüman 714'ten beri) ve Granada için ayrı tanık madde yok; Abdurrahman'ın fiilî denetimi 756'da yalnız Kurtuba çevresiydi, Toledo/Zaragoza 25 yıl sonra (TDV: kampanyalar 25 yıl) — Cádiz/Granada/Lizbon 756 sahipliği için kaynak aranmalı |
| 1000-01-01 kazanç | Jaén | Mansûr dönemi (ö. 1002) genişleme; Jaén'in 1000'de Emevî sayılması için kaynak yok; ya kırp ya kaynak: ERİŞİLEMEYEN |
| 1031-01-01 kayıp | Cádiz, Jaén, Lizbon, Toledo | odak_yer ekle (c) |
Sahiplik: en geniş 1003 → 10 yerleşim, 756-1000 arası sabit 9; Endülüs'ün kuzey sınırı (Zaragoza, Toledo Marka) harita haritası dışında ölçülmedi. 1009-1031 arası tâife şehirleri (Belensiye 1010, İşbîliye 1023) endulus-tavaif'e geçmeli — yerleşim s: kontrolü ölçülmedi.

## Önerilen düzeltmeler (KASA için)
1. data/olaylar_ortacag_iberya_magrib.js: 756-05-15, 788-10-02, 929-01-01 maddeleri ekle (yukarıdaki satırlar).
2. :53 maddesinin odak_yer listesine Cádiz, Jaén, Lizbon, Toledo.
3. Künye ic_not_f'e "Treccani 755 = çıkış yılı" notu; evre: künye açıklamasına "756-929 emirlik, 929-1031 hilâfet" beyanı.
4. Jaén 1000 ve Cádiz/Granada/Lizbon 756 sahipliğine kaynak yaz ya da dönemi kırp.

## Erişilemeyen kaynaklar
- Hugh Kennedy, Muslim Spain and Portugal (Longman 1996) s.37-60 — soru: 929 halife ilanının tam tarihi; 756'da fiilî egemenlik alanı.
- Encyclopaedia of Islam², "Umayyads, Spain" / "Ḳurṭuba" — soru: 929 gün; 1031 Hişâm III'ün azli günü (Zilhicce 422).
- TDV "Mülûkü't-tavâif" maddesi tam metin (slug mulukut-tavaif) — soru: Jaén, Cádiz, Lizbon 1031 sonrası ilk sahipleri.
- Cambridge Medieval History vol.3 (Spain) — soru: Toledo'nun 797-932 arası bağımsızlık evreleri (Toledo 756-1031 sürekli sayılabilir mi).
