# KASA-CENEVRE-1010 — Cenevre `isvicre 1536-01-01 → 1923` adayı

Görev: YILDIRIM BAYEZIT (UCSUZ-ISGAL ③c, "ayrı tur") · Araştırmacı: KASA · `data/` DONUK · salt okuma.
Aday (KASA-UCSUZ-ISGAL-1010 A): atlas Cenevre'yi `almanya 1281-1536 · isvicre 1536-01-01 → 1923` yazıyor. Cenevre
Konfederasyona 1815'te kanton olarak girdi; 1798-1813 Fransız ilhakı (Léman departmanının merkezi) yazılı değil.
Sınıf (koordinatör): 1798-1813 Léman = **doğrudan ilhak** ⇒ `d:fransa-cumhuriyet` (Barselona/Lleida/Girona emsali).

## 0. ÖNGÖRÜ (ölçümden ÖNCE — ayrı commit)
Kaynak türü: **Historisches Lexikon der Schweiz (HLS) "Genf/Genève"** — imzalı, şehir adlı, tarihli; birincil.
- **1798-1813 Fransız ilhakı** (Léman departmanı merkezi) HLS'te şehir adıyla ve gün/ay düzeyinde bulunur: **%85**.
  Beklenen uçlar: ilhak **Nisan 1798** (15 Nisan?), çekiliş **31 Aralık 1813**; ⇒ `d:fransa-cumhuriyet` YAZILABİLİR.
- **1536-1815 statüsü:** Cenevre Konfederasyonun ÜYESİ değil, müttefik ("zugewandter Ort" / Bern-Fribourg ile
  combourgeoisie) bağımsız cumhuriyet: **%80**. ⇒ `isvicre` 1536-1798 YANLIŞ; doğrusu bağımsız Cenevre Cumhuriyeti —
  atlasta künyesi YOK (%85) ⇒ künye kalemi ya da `__BOSLUK__`/beyan (hüküm koordinatörün).
- **1536 başı:** 1536 Reform/Savoya piskoposundan bağımsızlık — atlas "almanya 1281-1536" (Kutsal Roma; Cenevre
  piskopos-prensliği Savoya etkisinde): bu turda yalnız not, ölçülmez.
- **1813-1815:** Avusturya işgali / geçici hükümet, Konfederasyona giriş **19 Mayıs 1815** (Diet kararı) ya da 1814:
  gün düzeyinde bulunur: %60.
- Lozan emsali (Vaud = Bern tâbi toprağı ⇒ `isvicre`) Cenevre'ye TAŞINMAZ: Cenevre tâbi toprak değil, müttefik cumhuriyet.

## 1. ÖLÇÜM
Kaynak: HLS (imzalı) + EB1911 + Acte d'union 1815 (birincil metin); okuyucu raporu `scratchpad/okuma_cenevre.md`.
**HLS "Genève (canton)" (Martine Piguet vd., 2005, rev. 30.05.2017; hls-dhs-dss.ch/fr/articles/007398/) dört alıntısını
KENDİM doğruladım — birebir.**
| dönem | atlas | hüküm | tanık (birebir) |
|---|---|---|---|
| 1281 → 1536 | `almanya` | **TEYİT** | HLS "Genève (commune)" (002903): *"Par un diplôme de 1162 … reconnus comme princes immédiats de l'Empire"* · Savoya yalnız vidomnat (1290) |
| 1526-1536 | — | TEYİT (1536 kesimi sağlam) | HLS-V: *"traité de combourgeoisie conclu en 1526 entre G., Berne et Fribourg"* · *"La Réforme est adoptée en Conseil général le 21 mai 1536"* |
| **1536 → 1798-04-26** | `isvicre` | **YANLIŞ** — Konfederasyon ÜYESİ DEĞİL, bağımsız müttefik cumhuriyet | HLS-C (doğrulandı): *"Canton suisse depuis 1815 … qui succéda à la Seigneurie et République de Genève (1534-1798)"* · *"en signant le 7 août 1536 un traité dit perpétuel et en renouvelant la combourgeoisie de 1526"* · *"plusieurs tentatives des Genevois d'entrer comme canton dans la Confédération échouent, Berne se réservant longtemps d'être la seule protectrice de son alliée"* · EB1911: *"its own mistress within, while allied externally with the Swiss confederation"* |
| **1798-04-26 → 1813-12-31** | `isvicre` | **YANLIŞ** — Fransa (doğrudan ilhak) | HLS-C (doğrulandı): *"l'annexion française est entérinée par le traité de réunion du 26 avril 1798"* · *"En août 1798, Genève devient pour 15 ans le chef-lieu du département du Léman"* · HLS "Léman (département)" (Guichonnet): *"la restauration de leur République, le 31 décembre 1813"* |
| **1813-12-31 → 1815** | `isvicre` | **YANLIŞ** — restore edilmiş bağımsız cumhuriyet (Avusturya işgali altında) | HLS-C: Bubna *"avait occupé la ville en décembre 1813"*; *"Gouvernement provisoire autoproclamé"* · Konfederasyona kabul: Diet kararı **12 Eylül 1814** (HLS "Pacte fédéral") ↔ Acte d'union **19 Mayıs 1815** (silgeneve.ch, birincil) |
| 1815 → 1923 | `isvicre` | **TEYİT** | HLS-C: *"Canton suisse depuis 1815"* |
### 1.1 Düzeltme önerisi
- `almanya` 1281 → 1536 (aynen; gün 1536-05-21 Reform kararı ya da 1536-08-07 Bern antlaşması — atlasın `1536-01-01`'i YIL)
- **`cenevre-cumhuriyeti` 1536 → 1798-04-26** (künye YOK — öneri; ya da `__BOSLUK__` (N) + beyan)
- **`fransa-cumhuriyet` 1798-04-26 → 1813-12-31** (doğrudan ilhak; künye 1792-1945 kapsıyor) — Barselona/Lleida/Girona sınıfı
- **`cenevre-cumhuriyeti` 1813-12-31 → 1814-09-12 / 1815-05-19** ⑥ (Diet kararı ↔ resmî akit; hüküm senin) · Avusturya
  işgali `isg:` adayı ama gün yok (HLS "décembre 1813")
- `isvicre` → 1923
### 1.2 Öngörü ↔ ölçüm
```
Léman ilhakı bulunur %85, Nisan 1798 / 31 Aralık 1813      ✓ 26.04.1798 · 31.12.1813 (gün)
1536-1798 isvicre YANLIŞ (müttefik bağımsız) %80            ✓
künyesi yok %85                                             ✓ (`cenevre-cumhuriyeti` / benzeri YOK — grep)
1813-1815 gün düzeyinde %60                                 ✓ ama ⑥ (1814-09-12 ↔ 1815-05-19)
Lozan emsali Cenevre'ye taşınmaz                            ✓ (HLS: "son alliée", tâbi değil)
```
⚠️ Kaynakların desteklemediği: atlasın `1281` başı pencere kapısı (D210) — sorun değil.
