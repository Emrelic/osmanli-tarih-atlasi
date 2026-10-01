# ODAK-KAPAT-BIZANS-1001 — `kronoloji_bizans.js` odaksız maddeleri

Koordinatör görevi (M-5724 sırası). `data/`ya YAZILMADI; öneri listesidir.

## 0. Ölçüm
- `odak_olc.py --dosya kronoloji_bizans.js`: 97 madde · KONUMLU 80 · BEYANLI 2 · **ODAKSIZ 15**.
- Maddelerin `kaynak:` alanı 13/15'te yalnız `el-kitabi` ya da `bizans` — kimliği belirsiz etiket;
  2'si Nicol (basılı). Kaynak cümlesi TDV'den arandı.
- TDV: `bizans` 200 · `mora` 200 · `sirbistan` · `kosova-savaslari` (önceki işten). 302: `koyunhisar` ·
  `koyunhisar-savasi` · `palekanon` · `palekanon-savasi` · `mistra` · `misistre` · `hexamilion` ·
  `osman-gazi` · `orhan-gazi` (ikisi de 302 — ⚠️ kişi slug'ları da ölü, D211 ①).

## 1. 🔴 İki bulgu
1. **Pelekanon — TDV ile atlas ÇELİŞİYOR.** TDV `bizans`: *"…ordu 1329’da Pelekanon’da (Maltepe)
   yenildi…"*. Atlasın noktası `"Pelekanon (Eskihisar)"` 40.762/29.386 = Gebze-Eskihisar, Maltepe'nin
   ~30 km doğusu. `§4`: çelişkide ATLAS düzelir ⇒ `yer_id` YAZILMAZ, nokta sahibine bildirilir.
2. **"Mora" adı TUZAK.** Havuzda `"Mora (Tripoliçe)"` var; app.js'in " (" esnekliği yüzünden
   `yer_id:"Mora"` ÇÖZÜLÜR ve kamerayı **Tripoliçe şehrine** götürür. Mora maddeleri (despotluk,
   yarımada) bir BÖLGEDİR; "Mora" yazmak sessizce yanlış nokta verir — denetim temiz der.
   (Aynı aile: Freiburg/Fribourg · Junín · "Isparta" ⊃ "Sparta" alt dizgi.)

## 2. Tablo — 15 madde

| # | t | başlık (kısa) | kova | öneri | kaynak cümlesi (birebir, TDV) |
|---|---|---|---|---|---|
| 7 | 1302-07-27 | Koyunhisar (Bapheus) | **B** | atlasta yok: **Koyunhisar/Bapheus** | `bizans`: "…27 Temmuz 1302’de … Yalova yakınında yapılan Bapheus (Koyunhisar) Savaşı’nda kazandı." — Yalova'ya İTİLMEDİ |
| 15 | 1329-06-10 | Pelekanon bozgunu | **C** | — | `bizans`: "…ordu 1329’da Pelekanon’da (Maltepe) yenildi…" — atlas noktası Eskihisar; ÇELİŞKİ (bulgu 1) |
| 30 | 1355-12-20 | Dušan öldü | D | — | `sirbistan`: "Stefan Duşan’ın 1355’te âni ölümünün ardından…" — yer yok |
| 37 | 1371-09-26 | Çirmen Savaşı | **A** | `yer_id:"Çirmen"` | `sirbistan`: "1371 Çirmen ve 1389 Kosova savaşları ile … yenilgiye uğrayan Sırplar…" (SIRBISTAN #5 ile aynı hüküm) |
| 44 | 1389-06-15 | I. Kosova | **B** | atlasta yok: **Kosova Ovası** | `kosova-savaslari`: "…ilki 791 (1389), diğeri 852’de (1448) yapılan iki savaş." |
| 55 | 1408-01-01 | Mora Despotluğu güçlendi | D | — | süreç; yer değil dönem |
| 57 | 1413-07-05 | Çelebi Mehmed birliği | D | — | birliğin sağlandığı muharebe yeri kaynakta yok |
| 58 | 1415-01-01 | Hexamilion inşası | **B** | atlasta yok: **Hexamilion (Korint berzahı)** | `mora` maddesinde ölçülecek; madde kaynağı `el-kitabi` |
| 65 | 1428-01-01 | Mora'da son Latin toprakları | **B** | atlasta yok: **Mora** (yarımada) | `bizans`: "…Mora, komşu Latin devletçiklerine karşı başarı sağlayarak … Peloponez yarımadasına hâkimdiler." — 🔴 "Mora" yazılırsa Tripoliçe'ye çözülür |
| 71 | 1446-12-10 | Hexamilion yıkıldı | **B** | atlasta yok: **Hexamilion** | (madde kaynağı `el-kitabi`) |
| 72 | 1448-10-17 | II. Kosova | **B** | atlasta yok: **Kosova Ovası** | `kosova-savaslari` (yukarıdaki cümle) |
| 73 | 1449-01-06 | Taç Mistra'da giyildi | **B** | 🔴 atlasta yok: **Mistra** | `el-kitabi`; TDV `mistra` 302 |
| 82 | 1460-05-31 | Mora Despotluğu ilhakı | **B** | atlasta yok: **Mora** (despotluk) | 🔴 "Mora" tuzağı |
| 93 | 1410-01-01 | Plethon Mistra'da | **B** | 🔴 atlasta yok: **Mistra** | Nicol (basılı) |
| 97 | 1428-05-01 | Mistra Mora'nın merkezi | **B** | 🔴 atlasta yok: **Mistra** | Nicol (basılı) |

## 3. TOPLAM — 15
```
A   1   Çirmen
B  10   Mistra ×3 · Kosova Ovası ×2 · Hexamilion ×2 · Mora ×2 · Koyunhisar
C   1   Pelekanon (TDV Maltepe ↔ atlas Eskihisar)
D   3   ölüm · süreç · birlik
```
⇒ Uygulanırsa ODAKSIZ 15 → **14**.
🔴 **Mistra** (Mora Despotluğu başkenti) atlasta yok — bu dosyada 3 madde, nokta açma listesine.
