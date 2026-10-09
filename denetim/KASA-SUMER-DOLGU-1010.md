# KASA-SUMER-DOLGU-1010 — Sümer kutusu için `tur:"bolge"` dolgu noktası önerisi

Görev: YILDIRIM BAYEZIT (HUKUM-KASA §9.x — Sümer kutusu hükmü: ① çekirdeğe daraltma (D220)
② kenara `tur:"bolge"` dolgu, `bos:` etiketli, SAHİPSİZ; eşik 150 km GEVŞETİLMEZ).
Hedef: **çekirdek kutuda p95 ≤ 150 km VE azamî ≤ 300 km** (MIMARI §5 AÇ kovası).
Girdi: `denetim/KASA-SUMER-NOKTA-1010.md` (2aa04ae1) — 26 nokta (10 mevcut + 15 yeni + Susa).
Okuma ağacı: `C:\atlas-kasa-wt` @ origin/main `6ff24cb9`. `data/` DONUK — öneri yazılır.
🔴 Dolgu gerçek şehir DEĞİL ⇒ kaynak aranmaz; sahipsiz kalır ve Değişmez 1'de sayılır (beyan).
⚠️ Dolgu `BEKLENEN_SAHIPSIZ`ı oynatır ⇒ dolgu ve tavan AYNI COMMIT'TE (§3.4②) — bu öneri
kaç noktanın sayaca dokunacağını ayrıca yazar.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)

**Kara maskesi** (depodaki `veri-kaynak/ne_10m_land.geojson`): maskesiz ölçüm (KASA-SUMER-NOKTA
§1.3) güneydoğuda Körfez su hücrelerini sayıyordu. Maskeyle:
- **ÇEKİRDEK (30,5-33,5K · 44-47D):** çekirdekte su hücresi neredeyse YOK (Hor el-Hammar
  bataklığı Natural Earth'te `land` sayılıyor olabilir) ⇒ p95 **151 → 145-150** arası düşer,
  yani **maskeyle çekirdek AÇ'a düşer ya da 1-3 km üstünde kalır**; azamî ~196 kalır.
  ⇒ Gereken dolgu: **0-1.**
- **TÜM KUTU (29,5-33,5K · 44-48,5D):** su hücreleri çıkınca p95 **186 → 170-180**; AÇ için
  **3 ± 1 dolgu** (güneybatı çöl · kuzeydoğu Zagros/İlam · Huzistan-Basra arası).

**Tasarım:** dolgu açgözlü (greedy) yerleştirilecek — her adımda EN UZAK kara hücresine bir
nokta; durma ölçütü p95 ≤ 150 VE azamî ≤ 300. Açgözlü yöntem en az sayıyı garanti etmez ama
"niçin orada" sorusunu her nokta için hücreyle cevaplar.

**Kenar etkisi:** kutu dışındaki noktalar (Susa 48,25D çekirdeğin dışında) çekirdekte de
uzaklığa katkı verir — dahil edilecek ve beyan edilecek.

## 1. ÖLÇÜM

(ölçüm sonrası)
