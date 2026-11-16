# YERLESIMLER-JS-KUYRUK-1114-EK5 — post-it #190, Eski Zağra

16 Kasım 2026. Emre #190'da seçenek (a)'yı seçti: Eski Zağra'nın Osmanlı'ya geçişi atlastaki 1372-06-01'den TDV'nin 1371'ine çekilir.
`data/yerlesimler.js` YAYIN BAYAT kuralı gereği koşu inişine kadar yazılmaz; bu yüzden değişiklik burada beklemede. Koşu inişinden sonra tek commit'te uygulanır (kronoloji maddesi ve zincir birlikte, yoksa Değişmez 2 bozulur).

## Kaynak (hakemli karar, ic_not'a yazılacak)
- TDV *Eski Zağra* (İlhan Şahin, c.11, 1995, s.394-396): «Muhtemelen 1371 yılında Osmanlılar tarafından fethedilen şehre» (YIL; gün yok).
- Machiel Kiel, «Some Early Ottoman Monuments in Bulgarian Thrace: Stara Zagora, Jambol and Nova Zagora», *Belleten* XXXVIII/152 (1974) s.636: «early sixties of the 14th century» (yıl yok; TDV'den erken).
- Rıdvan Canım, *Hikmet* 14 (2021): Lala Şahin, 1364; «1371 diyen tarihçiler de vardır» (derleme, kaynaksız).
- Çelişki 1361-64 ↔ 1371; TDV'ye karşı aynı günü veren iki bağımsız kaynak yok ⇒ TDV yılı kalır (`YYYY-01-01`, «yalnız yıl teyitli; gün teyitsiz»). Atlasın 1372-06-01'i hiçbir kaynakla örtüşmüyordu.

## Değişiklikler
| Dosya | Yerleşim | Eski | Yeni |
|---|---|---|---|
| data/yerlesimler.js (satır ~420-425) | Eski Zağra (Stara Zagora) | `s:` `bulgar-carligi` `t:"1372-06-01"` | `t:"1371-01-01"` |
| aynı satır | Eski Zağra | `d:[{f:"1372-06-01",t:"1402-07-28"}` | `f:"1371-01-01"`, `kesinlik:"yil"`, kaynak: TDV eski-zagra + Kiel 1974 + Canım 2021 çelişki beyanı |
| data/yerlesimler_ek29.js (~1117-1121) | Haskoy (zincir: «Eski Zağra/Filibe zinciri») | `t:"1372-06-01"` / `d f:"1372-06-01"` | Eski Zağra ile aynı gün; zincir yalnız Eski Zağra'ya bağlıysa taşınır (Filibe ile bağı ölç) |
| data/olaylar_ek.js:25 | «Filibe ve Eski Zağra'nın fethi» (1372-06-01) | b: Filibe + Eski Zağra | Eski Zağra ayrı maddeye çıkarılır; bu madde yalnız Filibe (başlık/yer/yer_id güncellenir) |
| data/olaylar_*.js (yeni madde) | — | — | `t:"1371-01-01"`, `kesinlik:"yil"`, `b:"Eski Zağra'nın fethi"`, `yer_id:"Eski Zağra (Stara Zagora)"`, `kisiler:"Lala Şâhin Paşa"` (Türkçe hakemli anlatı; Canım/Halaçoğlu; Kiel), `kaynak:"eski-zagra"`. Çeviri eşitliği: Emre sonda toplu yaptırır. |

## Ölçülecek (uygulama sırasında)
- Değişmez 2: yeni madde (1371-01-01) ±30 günde `d:`/`s:` kırılmasını tutar; 1372-06-01 maddesinde Filibe kırılması kalır. Eski Zağra'nın eski 1372 kırılması taşınmış olacağı için sessiz toprak değişimi doğmaz.
- Öncül `t` = ardıl `f` (bulgar-carligi → osmanli), künye `f/t` içinde (`devletler.js`).
- Çirmen (1371-09-26) öncesine düşüyor: 1371-01-01 ↔ Çirmen günlük sırası çelişmez (TDV «muhtemelen 1371», savaşın öncesi/sonrası belirsiz; beyan yazılır).
