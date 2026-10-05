# ONCE1281-OK109-SUPURGE-1004 — `olaylar_ok109.js`'in kaç maddesi atlastan türetilmiş?

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Önceki: [`ONCE1281-AVUSTURYA109-1004.md`](ONCE1281-AVUSTURYA109-1004.md) §6 — `OLAYLAR_OK109[4]` TÜRETİLMİŞ.
**Veriye yazılmadı.**

## 0. Yöntem — ölçümden ÖNCE sabitlendi

- Evren: `data/olaylar_ok109.js`'in TAMAMI (node `vm` ile yüklenir; örneklem YOK).
- İmza üçlüsü, ayrı ayrı: ① `ic_not_*` alanlarında "atlas" / "harita" / "eski ifade" · ② `d`/`b`
  metninde haritayı anlatan dil ("harita … gösterir", "haritaya giriyor", "tek güne toplar",
  "atlas …") · ③ `kaynak:` açılır, `t` gününü taşıyan cümle okunur — o günü BU olay için mi
  söylüyor (D211 ⑧). Hüküm: üçünden biri kesinse TÜRETİLMİŞ; ③ açılamazsa ⚪.
- **Kör nokta ölçüsü (asıl sayı):** her madde için `denetle.degismez2` (d/v) ve 2s zinciri
  (`yer_sarti=True` → `kapsam_disi` → `yil_temsili_ayir`) madde evrenden ÇIKARILARAK yeniden
  koşturulur (bellekte, `denetle`'nin gerçek işlevleri). Çıkarınca AÇIK düşen kırılma sayısı =
  o maddenin "senkron ✓" verdiği kırılma sayısı. Ayrıca türetilmişlerin HEPSİ birlikte çıkarılır.
- Karl'ın çekilişi (koordinatör hükmü: 11 Kasım kalır, TDV farkı beyan) için beyan notu taslağı yazılır.

## 1. ÖNGÖRÜ — dosyayı taramadan ÖNCE

- Dosyada **9 madde** (ilk commit "dokuz madde"); türetilmiş **3–5**. [4] kesin; [5] (Karl 18 Kasım)
  türetilmiş DEĞİL (TDV'ye sadık, gün kaynaklı) ama metninde "haritada görünen" dili var — ② imzasını
  taşıyabilir, ③'ten geçer.
- Kör nokta: [4] çıkarılınca **~109 kırılma** açılır (hepsi `avusturya → halef` 1918-11-11); öteki
  türetilmişler birkaç ila birkaç düzine. Toplam **~120-150 kırılma**.
- Mekanizma: parti maddeleri haritadaki toplu kırılma günlerini "olay" olarak yazmış — her biri bir
  künye ucunun ya da toplu bir `s:` kırılmasının gününe oturtulmuş.
- ⚠️ Kapsam dışı etkisi: Orta Avrupa noktaları Osmanlı küresine yakınsa açılan kırılmalar KAPSAM
  İÇİ düşer (gerçek açık); uzaksa kapsam dışı kovasına gider ve 2s AÇIK sayısı daha az artar.
