# ÖNGÖRÜ — KITA 20 · SAVAŞ HİKÂYELERİ · paket 0045 H-0007

**Yazıldı:** 13 Eylül 2026, HİÇBİR ölçümden ÖNCE (D022). Yalnız şartname,
iki ortak belge ve `CLAUDE.md` okundu. `data/` altındaki savaş maddelerine,
`savaslar.js`e ve TDV'ye henüz BAKILMADI.
Bu dosya `denetim/`e taşınıp commit'lenince zaman damgası git'te durur.

## ① TÜR KARARI
- **Ö1:** Mevcut 11 türün hiçbiri "savaş hikâyesi"ni temiz taşımaz.
  `kahramanlik` şartnamenin "kahramanlık dili değil, tarih dili" şartıyla
  ADI düzeyinde çelişir. `menkibeler` kaynaksız/rivayet çağrıştırır.
  ⇒ Önerim **yeni tür** olacak.
- **Ö1-mazeret (D019):** app.js türü `EKOKUMA_TUR` sözlüğünden okuyorsa, yeni tür
  ~6 satır ister. Ama `kaynak:` fonksiyonu yalnız `window.EKOKUMA` döndürüyorsa
  **yeni DOSYAYI da görmez** (D099). Bu durumda asıl engel tür değil YÜKLEYİCİ
  olur ve istek iki parçalı çıkar.

## ② 11 SAVAŞIN KRONOLOJİ BAĞI
- **Ö2:** 11 savaşın 11'inin de çekirdek ya da kuyruk kronolojide bir maddesi var.
- **Ö3:** En az 2 savaşta birden fazla aday madde çıkar ve doğru olanın seçilmesi
  gerekir: Kosova (1389 / 1448) ve Ankara (şehir adı savaş dışı maddelerde de geçer).
- **Ö4:** En az 1 savaşta madde günü ile TDV günü ayrışır (takvim ya da kaynak):
  en olası adaylar Kosova 1389 ve Niğbolu 1396.

## ③ TDV SLUGLARI
- **Ö5:** `CLAUDE.md §4` savaş sluglarının %48'inin ölü olduğunu ölçmüş.
  Doğrudan savaş slugu denemesinde 11'in **4 ile 7 arası** 302 ÖLÜ çıkar.
- **Ö6:** Ölü çıkanların hepsi için YER ya da KİŞİ maddesinde anlatı bulunur
  (11/11 kaynaklı kart yazılabilir). Çürürse: en az birinde gün ya da taraf
  bilgisi KİŞİ maddesinde de yoktur.

## ④ SAYIM (1288 savaş maddesi)
- **Ö7:** "Osmanlı taraf" çekirdeği 1288'in **%35-55'i** (≈450-700).
- **Ö7-mazeret:** maddelerde yapılandırılmış `taraf:` alanı yoksa bu oran ancak
  metin temelli bir sınıflandırıcıyla ölçülür. O zaman sonuç `ölçüldü` değil
  `tahmin (sınıflandırıcı)` diye damgalanır ve iki yönde örneklemle sınanır (D010).
- **Ö8:** Osmanlı-taraf çekirdeğin **%60-80'i** için TDV'de (savaş/yer/kişi
  maddesi yoluyla) anlatı bulunabilir. Bu sayı pilotta ÖRNEKLEMDEN gelir,
  tam taramadan değil ve öyle damgalanır.
