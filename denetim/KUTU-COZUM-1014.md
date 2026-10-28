# KUTU-COZUM-1014 — kutudaki bütün açık atlas maddeleri (14 Ekim 2026, UMIT)

Evren: `C:\claudemre\ClaudEmre\kutu\giden`, atlas paketleri 0008–0088. Açık madde **812**
(`sirada`/`olculecek`/`kosu-bekliyor`/`senin-kararin`/`cozulemedi`/`onay-bekliyor`/hükümsüz).
Hükümler kutuya yazıldı (`CEVAP.json`, önceki sürüm `CEVAP.json.yedek-KUTU-COZUM-1014`) ve
eşitlendi. Not: kutu eşitlemesi 9 Ekim'den beri takılıydı (0085–0087 cevapları yerelde
izlenmeyen dosya olarak duruyordu, içerik uzaktakiyle aynıydı) — açıldı, 0088 geldi.

## Sonuç (812)

| hüküm | sayı | anlamı |
|---|---|---|
| cozuldu | 381 | 367'si bayat (güncel main'de yeniden ölçüldü, kanıt notta) + 14 bu tur main'e inen |
| tekrar | 64 | |
| kosu-bekliyor | 73 | veri main'de, harita tam inşadan sonra |
| zaten-dogru | 31 | |
| sirada | 161 | ~78'i HAZIR düzeltme, aşağıdaki yerel commit'lerde · 48 motor/TUZ · gerisi büyük programlar |
| senin-kararin | 56 | |
| cozulemedi | 46 | kaynakta gün/varlık bulunamadı — notlarda neye bakıldığı yazılı |

## main'e inenler
- `795afdf7e`, `8f271c176` — KUTU-E: 432 kronoloji `gun` alanından geliştirici notu `ic_not_gun`a,
  okur metni temizliği, yeni kronoloji maddeleri (Erdel 1551-07-26, Tuz Hurmatu 1918, Gümrü/Iğdır 1920),
  yeni ek okumalar, 12 kişi kartı genişletildi.
- `3ac150005` (+`b12600453`) — KUTU-B parti 1: Tuna Romen kıyısı ve Dobruca'da 8 nokta.

## 🔴 YEREL BEKLEYEN COMMIT'LER — koşu yayını inince itilecek
Push kapısı `denetle_yayin` "YAYIN BAYAT" (yaş > 2 gün) ile durdurdu; sonra SÜMER-2000 START
(taban 95a9ccad9). Koşu yayını inince her biri kendi worktree'sinin İÇİNDEN:

| grup | worktree | commit'ler | push |
|---|---|---|---|
| A doğu | `.claude/worktrees/agent-a82dc69661da4b245` | b50429976 · 4246b9919 · 7aef71e13 | `py arac/push_kapisi.py --kim "KUTU-A-1014"` |
| B Balkan | `.claude/worktrees/agent-a0f6d3cb811473391` | 4cf64efec · 41eed203c · 48d1f7b72 (+36fed0cf5, 44f1b21d7 damga) | `--kim "KUTU-B-1014"` |
| C Avrupa/Afrika | `.claude/worktrees/agent-a7a939d4924e6def3` | 3bf74a8db · 8afede9c5 | `--kim "KUTU-C-1014"` |
| D arayüz/ok | `.claude/worktrees/agent-a2620490ae97b9726` | 44177ec67 · 9cf0ee4d9 | `--kim "KUTU-D-1014"` |

Bu worktree'ler commit'ler inmeden SİLİNMEZ. İnince ilgili kutu maddelerinin hükmü
`sirada` → `kosu-bekliyor` (yerleşim) / `cozuldu` (arayüz, kronoloji) yapılır (notlarda "yerel commit <sha>").

## TUZ bekleyenler (renkler.py — Emre onayı)
Koşu koordinatörü 7 rengi hazırladı: commit `8aa704835`, dal `worktree-renk-kutu`
(kartli-kralligi, cizre-botan, musasa, lucca-dukaligi, lucca-cumhuriyeti, visconti, samos-prensligi).
Renk gelince yazılacak dönemler: Tiflis/Gori/Duşeti 1484-1762 Kartli · Cizre 1508→1515-09-19 ·
Havîza 1442-01-16→1508 · Lucca · Milano Visconti · Sisam `kid`.
Künyesi olmayan (renkten önce künye): argun (Kandehar 1507-1522, şimdilik beyanlı `__BOSLUK__`),
luwu, buton, modena; Teuton/Livonya boyasız (Klaipėda, Riga).

## Emre'nin kararı (seçilmiş örnekler; tam liste kutuda `senin-kararin`, 56 madde)
- Değişmez 8a tavanı 1505 → 1508: Tulça/Mangalya/Balçık noktaları eski Köstence taşmasını görünür kılıyor
  (gerileme değil körlüğün kapanması). Kayıtlar: KUTU-B scratch `bekleyen_d8_noktalar.js`.
- Pasinler noktası (1918-03-12 maddesi yok → 2s tavanını aşar).
- Ferhad Paşa Kürt beylikleri 1590-1603 (Bâne sonu kaynaksız) · Hoy sonu (TDV 1739) · Mohaç/Budin himaye mi tâbi mi.
- Simge çakışma elemesi · D yaslama kalıcı çaresi (gövde ön hesabı) · Kafkas sırtı beyan katmanı.
- Jülyen→Gregoryen çevrilmiş Or Kapı/Kerç günleri (kural: çevrilmez).
- Karadağ bakış kartı (kaynak zayıf).

## Yan bulgular
- `data/yerlesimler_afrika.js`: ~15 Mısır noktası Osmanlı'ya 1517-05-19'da (İskenderiye günü) geçiyor.
- Limasol maddesi 23 Temmuz, TDV kibris 2 Temmuz 1570.
- "II. Osman'ın katli" / "Genç Osman'ın … katledilmesi" mükerrer adayı.
- `kimdir-kuyucu-murad-pasa` iki dosyada (`ekokuma_vezir.js:165`, `ekokuma_celali.js:64`).
- Kilit kancası aynı oturumdaki alt ajanlara tek ad veriyor (`oturum-81b306`) — `birak-hepsi` kardeşlerin kilidini de bırakır.

Tasnif ve çözüm dökümleri (madde başına kanıt/kaynak) kutudaki CEVAP.json notlarındadır.
