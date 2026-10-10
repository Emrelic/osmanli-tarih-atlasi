# NEGATIF-YIL-OLCUM-1010 — Sümer noktaları NEGATİF-YIL-B olmadan FAZ 2'de inebilir mi?

Görev: YILDIRIM BAYEZIT (10 Ekim 2026, KUNYE-SUMER-7-1010 teslimine cevap ⑥) · işçi: EMRELIC, Opus ·
`data/` + `arac/` DONUK — yama YAZILMAZ, ölçülür. Ayrı worktree `C:\atlas-wt-negyil` (dal `makine/emrelic-kunye-2`).

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı; sonradan DOKUNULMADI)
Test girdisi: NOKTA-SUMER-1010'un yarım iş kopyası (`C:\atlas-nokta-sumer`, `yerlesimler_nokta_ortadogu_0917.js`):
`s:[] d:[]`, `kur:` negatif ya da yok, `bit:` negatif (`-1599`, `-0999`, `-0329`, `-2949`) ya da ÜÇ HANELİ pozitif
(`0750`, `0640`, `0499`, `0300` — dört haneli yazılmış).
- ② `denetle.pad("-0538-01-01")` dokunmadan döner; `gun_no("-0538-01-01")` **ValueError ile ÇÖKER** (%90).
- ④ Yıl 0: `gun_no("0000-01-01")` ÇÖKER (`date` MINYEAR=1) (%95) · `"-0001-01-01"` ÇÖKER (%95) · `"0001-01-01"` doğru.
  `gun.py` üçünü de doğru sayıya çevirir (%95).
- ③ Gerçek yollar, Sümer noktaları veriye girince:
  - `girdi.yukle` ÇÖKMEZ (%80) — tarih dizgisini yalnız taşır.
  - `denetle.py` bütünü ÇÖKMEZ (%60): noktalar `s:/d:` taşımıyor, `kur/bit` çoğu yerde POZİTİF tarihle dizgi
    kıyasına giriyor ve `"-"` (0x2D) < `"0"..."9"` ⇒ negatif↔pozitif dizgi sırası TESADÜFEN DOĞRU.
  - SESSİZ YANLIŞ en olası yer: negatif↔negatif dizgi kıyası (`kur:"-2699"` ↔ `bit:"-1599"`: dizgide
    `"-2" > "-1"` ⇒ kur > bit, TERS) — `kur ≥ bit` soran bir denetim varsa YANLIŞ ALARM ya da sessiz eleme (%40).
  - `odak_cozum.js` / `suzgec.js` (node): NEGATIF-YIL-A indiği için negatif yılı doğru ayrıştırır (%70).
- ⑤ `NEGATIF-YIL-1010-B-v2.diff` bugünkü `origin/main`e `apply --check` TEMİZ (%60); ②'nin çöken yollarını kapatır (%85).
- ⑥ HÜKÜM öngörüsü: **EVET, şartlı** (%55) — noktalar `s:`siz ve `bit:` ufuktan önce ⇒ çöken `gun_no` yollarına
  ULAŞMAZ; ama bu, NOKTA-SUMER'in ayrıca bildirdiği motor deliğinden (sahipsiz petek devri) bağımsızdır.
