# HALKA-SARI-0072 — ÖNGÖRÜ (tarayıcı sınavından ÖNCE yazıldı)

20 Eylül 2026 · parti 0072 / H-0003. Bu dosya ölçümden **önce** yazıldı;
sınav `denetim/ARAC-HALKA-SARI-0072-SINAV.js`, çıktı `denetim/OLCUM-HALKA-SARI-0072.json`.
Sınav anı: **1813-10-05** (Emre'nin görselindeki gün), ⑧ ayarı **KAPALI**
(`localStorage.halkaAc` silinmiş = varsayılan kapalı).

Öngörüler yalnız kaynak okumasına dayanıyor (`js/app.js` · `data/hukuki_sinirlar.js`
· `data/yerlesimler_ek29.js` · `data/kaynakli_halka_*.js`), tarayıcı HENÜZ koşmadı.

| # | öngörü | evren |
|---|---|---|
| Ö1 | ⑧ KAPALIYKEN `KHALKA.acik === false`, `KHALKA.cizilen === 0`, `halka-kaynakli` kaynağı 0 feature | tek sayfa, 1813-10-05 |
| Ö2 | Aynı anda `hukuki-sinir-nokta` kaynağında **2** feature var; ikisi de `kayit_id = "karlofca-bosna-kaleler-1699"` | aynı |
| Ö3 | O iki feature'ın `renk`i **`#bdab3f`** (`_cTarafRengi("habsburg")` → künye `harita:"avusturya"` → `DEVLET_HARITA` `avusturya.renk`) — ekrandaki SARI budur | aynı |
| Ö4 | Feature adları: `Kostayniça (Kostajnica)` ve `Bosna Novi'si (Bosanski Novi)` | aynı |
| Ö5 | ⑧ AÇILINCA bu iki sarı işaret **kaybolmaz** (`_KH_GOCMUS_C_KAYITLARI` yalnız `ferhad-pasa-istanbul-1590` içeriyor) ve bu iki şehir için **halka da gelmez** (havuzda kaydı yok) ⇒ ayar ile ekrandaki işaret arasında bağ YOK | aynı |
| Ö6 | C noktasının konumu ile şehrin kendi noktası Kostajnica'da **ayrışıyor**: C `45.183/16.683`, yerleşim `45.232/16.539` (~13 km) ⇒ sarı benek şehrin yanında ayrı durur. Bosanski Novi'de ikisi AYNI (`45.048/16.377`) ⇒ orada şehir noktasının çevresinde halka görünür | veri okuması + ekran |

## Zaman sınırı (Emre'nin 3. isteği) — ölçümden önceki hüküm
- Ö7: **Kaynaklı halka şemasında zaman alanı ZATEN VAR** (`f`/`t` ya da tekil
  `tarih` + `kesinlik`), motoru `kaynakliHalkaPencere()` / `_khPencereKirpik()`.
  Yani "her zaman geçerli sayılıyor" kusuru halka sisteminde DEĞİLDİR.
- Ö8: Sınırsızlık **C kaydındadır**: `karlofca-bosna-kaleler-1699` `f:"1699-01-26"`,
  `t:"1918-11-11"` ve `t`nin gerekçesi kaynağın söylediği bir şey değil,
  yorumdaki *"habsburg'un kendi sonu"* — yani **219 yıl**. Kaynak (Karlofça
  antlaşma metni) yalnız 1699'daki tahliye/kalma hükmünü söylüyor.

## Çürütülürse ne demektir
- Ö1 çürürse: ⑧ kapalıyken halka katmanı gerçekten çiziyor demektir → kusur
  halka motorundadır, teşhis baştan yazılır.
- Ö2/Ö3 çürürse: sarı üçüncü bir katmandandır; katman evreni yeniden taranır.
- Ö7 çürürse: şema önerisi A/B yazılır (teslimde).
