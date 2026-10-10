# NOKTA-ONCE1281-UCUZ-1010 — dört ucuz kalem için inmeye hazır diff

**Oturum:** NOKTA-ONCE1281-UCUZ-1010 (EMRELIC, Opus) · **Taban:** `origin/main` `a42fd6f5`
(worktree `C:\atlas-ucuz1010`, dal `nokta-once1281-ucuz-1010`)
**Diff:** `denetim/NOKTA-ONCE1281-UCUZ-1010.diff` · 3 dosya, 4 satır · sha256 `f52c9c30beaeb082…` · `git apply --check` ✓ (bu tabanda)
🔴 **`data/`ye YAZILMADI** — ne ana checkout'ta ne bu worktree'de (`git status` temiz). Diff scratchpad kopyalarında
üretildi. "Sonra" ölçümü `denetle.py`nin kendisiyle ama **bellekte** yapıldı (§3).

## SONUÇ
| Nokta | Önce `s[0].f` | Sonra | Sahip | TDV cümlesi | Güven |
|---|---|---|---|---|---|
| **Multan** | 1281-01-01 | **1228-11-30** | delhi-sultanligi | «626 (1228) yılında Sultan İltutmış burayı eyalet merkezi yaptı.» | 🟢 TANIK; hicrî 626 ∩ 1228 kesişiminin ilk günü (§4) |
| **Kurtuba** | 1281-01-01 | **1236-01-01** | kastilya | «1236’da zayıf durumda olan şehir Kastilya-Léon Kralı III. Fernando tarafından kolayca zaptedildi.» | 🟢 EDİNİM, mîlâdî yıl |
| **Bîcâpur** | 1281-01-01 | **1190-01-01** | yadava | «1190 yılından itibaren bir asır süreyle Yadava Krallığı’nın yönetimi altında kalan **bölge**…» | 🟡 cümle BÖLGEYİ tarihliyor (şehir maddesinin kendi bölgesi) |
| **Silistre** | 1281-01-01 | **1279-01-01** ⚠️ (sevkte 1189 denmişti) | bulgaristan (= bulgar-carligi) | «1279’da … Bizans ordusu … krallığa kadar yükselen İvaylo’yu üç ay boyunca Silistre’de kuşattı, fakat ele geçiremedi.» | 🟢 TANIK 1279 |

🔴 **SİLİSTRE'DE SEVKTEN SAPTIM, gerekçesiyle:** önceki teslimimde «1189» yazmıştım. Cümleyi bu sefer `D211⑧`le okudum:
«II. Bulgar Krallığı boyunca **(1189-1393)** Drǎstǎr hakkında çok az şey bilinmektedir.» ⇒ parantezdeki 1189 **KRALLIĞI**
tarihliyor, Silistre'nin edinimini DEĞİL. Cümle Silistre'nin krallıkta olduğunu yalnız **örtülü** söylüyor; bayrak
kuralına göre örtülü hüküm halka almaz. Aynı maddedeki 1279 cümlesi ise **açık** bir tanıklık: Bulgar çarı İvaylo
şehirde ve Bizans alamıyor. ⇒ diff **1279** yazıyor.
Kazanç 92 yıl yerine 2 yıl. Koordinatör örtülü cümleyi yeterli sayarsa tek satır: `1279-01-01` → `1189-01-01` ve
`kaynak` metni değişir. **Hüküm sende; önceki teslimdeki 1189 hatam düzeltildi.**
🟡 **Bîcâpur'da aynı sınıfın hafifi:** cümle "bölge" diyor ama Bîcâpûr maddesinin içinde, şehrin kendi bölgesini
anlatıyor. Bayrak kuralı halka için; bu bir `s:` penceresi ve aynı maddenin şehir anlatısı. Yazdım, `kaynak` alanında **beyan**.
⚠️ **Bîcâpur yan bulgu (dokunulmadı):** aynı cümle «1294’te Alâeddin Halacî tarafından … fethedildi» diyor. Atlas
`yadava` penceresini **1318**'e kadar sürdürüyor. 1294 bir akın ve haraç da olabilir (Devagiri), kesin ilhak 1317-18;
**ayrıştırılmadı.** 1281 sonrası, bugünkü harita ⇒ **ayrı kalem.**

## 1. Diff (tam)
`data/yerlesimler_asya.js` (2 satır: Multan · Bîcâpur) · `data/yerlesimler_avrupa.js` (1: Kurtuba) · `data/yerlesimler.js` (1: Silistre).
Her satırda yalnız `s[0].f` değişiyor ve aynı pencereye `kaynak:` ekleniyor (TDV cümlesi AYNEN + hassasiyet + tanık/edinim
ayrımı). `t`, `d` ve öteki pencereler DOKUNULMADI. Silistre'de aynı `s:` dizgisi iki kayıtta geçtiği için yama kayıt başına
(`{ ad:"Silistre",`) çapalandı; ikinci kayıt değişmedi.

## 2. Künye pencereleri (4c/4d)
`yadava` f 1187 ≤ 1190 · `delhi-sultanligi` f 1206 ≤ 1228 · `kastilya` f 1035 ≤ 1236 · `bulgar-carligi` (harita `bulgaristan`)
f 1185 ≤ 1279 ⇒ hiçbiri künye doğumundan önce değil. **Ölçüm de doğruladı:** 4d 325 → 325.

## 3. `denetle.py` ÖNCE / SONRA — ÖLÇÜLDÜ
**Yöntem:** ÖNCE = temiz worktree'de `py arac/denetle.py` (+ `--ayrinti`). SONRA = aynı ağaçta `denetle.main()`,
`girdi.yukle()` **bellekte** sarılarak: dört kaydın `s[0].f`si değiştirildi. Sarmalayıcı 1 kez çağrıldı, dört değişikliğin
dördü de uygulandı (uygulanamazsa durdururdu). Dosyaya yazılmadı. Betik: scratchpad `denetle_sonra.py`.
```
                                   ÖNCE                      SONRA
çıkış kodu                         2 (D8 ölçülemedi)         2 (aynı — devletler_harita.js taze ağaçta yok)
Değişmez 1   sahipsiz              309 (beklenen 309)        309  ✓
Değişmez 1b  beyansız boşluk       0                         0    ✓
Değişmez 2   Osmanlı               628 · 0 açık              628 · 0 açık ✓
Değişmez 2s  YABANCI kırılma       1805                      1806 (+1)
             AÇIK                  193 (tavan 193)           193  ✓ değişmedi
             YIL-TEMSİLÎ BORÇ      228                       229 (+1)
Değişmez 2i/2t                     1 / 13                    1 / 13 ✓
Değişmez 4/4c/4d/4s                0/118/325/2               0/118/325/2 ✓
dönem sağlığı                      0/0/0                     0/0/0 ✓
kaynaksız s: kaydı                 1841                      1839 (−2)
ZAMAN-GENİŞ geri KAPSAM DIŞI       2595                      2591 (−4: dört nokta "verisi YOK" kovasından çıktı)
ZAMAN-GENİŞ VERİLİ DEVİR DELİĞİ    79                        83 (+4)  ← aşağıya bak
Kuyruk  yerlesimler_avrupa.js      122 kırılma · 51 MADDESİZ 123 · 52
        yerlesimler_asya.js        496 · 257                 498 · 259
```
**Okuma:**
- 🟢 **`2s AÇIK` 193 → 193.** Tavan oynamıyor. Yeni kırılmalar AÇIK kovaya değil, YIL-TEMSİLÎ ve kuyruk kovalarına düştü.
  Tavan + sabit commit'i (`§3.4②`) GEREKMİYOR.
- 🟡 **YIL-TEMSİLÎ +1:** yeni `YYYY-01-01` kırılması. Adayları Kurtuba 1236-01-01 ve Bîcâpur 1190-01-01 (Multan 1228-11-30,
  Silistre 1279). `--ayrinti` bu kovayı satır satır basmıyor ⇒ hangisi olduğu **ölçülemedi.** "İhlal DEĞİL" satırı (tavan 151,
  zaten aşılmış) değişmeden basılıyor.
- 🟡 **VERİLİ DEVİR DELİĞİ 79 → 83:** dört nokta artık 1000-1281'de veri taşıyor ama 1000-01-01 örnek gününde **hâlâ sahipsiz**,
  çünkü pencereleri 1190/1228/1236/1279'da başlıyor. ⇒ Kova değiştirdiler: "hiç verisi yok" → "verisi var, başı boş".
  Araç bunu "GERÇEK borç, kovaya girmez" diye `ⓘ` olarak basıyor; **kapıyı kırmıyor.** TANIK ilkesinin dürüst bedeli:
  öncesi bilinmiyor, YAZILMADI.
- 🟡 **Kuyruk +3 kırılma / +3 MADDESİZ:** Kurtuba 1236 · Multan 1228 · Bîcâpur 1190 için kronoloji maddesi yok. Değişmez 2
  evreninde değil, "iş kuyruğu, borç değil".
- **`kaynaksız s:` −2 (−4 değil):** bellekteki sarmalayıcı yer tutucu bir `kaynak` yazdı. Sayımın kapsamı dört pencerenin
  ikisini zaten saymıyor olabilir. Gerçek diff dört pencereye de TDV cümlesi yazıyor. Fark **ölçülmedi.**
- **Değişmez 8:** iki koşuda da ÖLÇÜLEMEDİ (taze ağaçta üretilmiş harita yok). Bu değişiklik `uret_petek` çıktısını ancak
  koşudan sonra etkiler.

## 4. İzin olayı — kayda geçiriyorum
İlk planım diff'i worktree'nin `data/` dosyalarında üretip `git diff` almaktı. Otomatik izin sınıflandırıcısı bir adımı
"paylaşılan kaynağı değiştirme" diye **reddetti.** Önceki yama denemesi eşleşme hatasıyla yazmadan durmuştu, yani dosya
değişmedi (`git status` temiz, ölçüldü). Reddi aşmaya çalışmadım. Diff scratchpad kopyalarında üretildi, "sonra" ölçümü
bellekte yapıldı. Sonuç aynı ölçümü veriyor ve depoya hiç dokunmuyor. **Koşu donuğuyla da uyumlu.**

## Ne ölçemedim
YIL-TEMSİLÎ +1'in hangi nokta olduğu · `kaynaksız s:` farkının −2 olmasının sebebi · Bîcâpur 1294 ↔ 1318 ayrıştırması ·
Silistre'nin 1189-1279 arası kaynaklı sahibi.
