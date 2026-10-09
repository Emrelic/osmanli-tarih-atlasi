# UMIT-W52-1422-KATALAN-1006 — iki "bulunamadı" gün sorusu

Ağaç: `C:\atlas-w52` (detached, `origin/main` 0f08fcae). Diff: `denetim/KRONO-1422-KATALAN-1006.diff`
(UYGULANMADI · `git apply --check` hem 0f08fcae'de hem atlas-umit 037f5509'da temiz · CR 0, index LF).
Ölü yollar yeniden yürünmedi (Britannica, fhw.gr, Setton metni, Vikipedi).

## ③a — 1422 Konstantinopolis kuşatması → **1422-06-10 BULUNDU (akademik)**

| kaynak | tür | birebir | neyi tarihliyor (§4 ⑧) |
|---|---|---|---|
| T. V. Kushch, "Турецкая осада и штурм Константинополя 1422 г.: военно-политический аспект", *Vestnik VolGU* Ser. 4, 22/5 (2017) 261-270, DOI 10.15688/jvolsu4.2017.5.24 (PDF dergi sitesinden okundu) | A, hakemli | "Осада длилась три месяца – с 10 июня по 6 сентября 1422 года." | Kuşatmanın tamamı: 10 Haziran → 6 Eylül |
| aynı makale, kaynak tartışması | A | Sphrantzes "8 июня … послал Михалбея … в 15-й день … прибыл и сам Мурад"; "Согласно другим источникам, вызывающим больше доверия, турецкие отряды под командованием визиря Михалбея 10 июня подошли к городу, 20 июня к ним присоединился султан Мурад" [Schreiner, Chr. 13/1–4, 22/34] | 8 ve 15 Haziran = Sphrantzes'in günleri; yazar Sphrantzes'i "tarihlerde pek kesin değil" sayıyor. 10 Haziran öncünün gelişi, 20 Haziran sultanın gelişi (kısa kronikler + Kananos). Ayrıca Doukas'a göre 8 Haziran'da Bizans elçileri sultana gönderildi |
| TDV `bizans` | birincil | "Kuşatma 8 Haziran 1422'de başladı." | Başlangıç — Sphrantzes'in günüyle aynı |
| TDV `istanbul` | birincil | "II. Murad'ın 15 Haziran 1422'deki muhasara teşebbüsü" | Sphrantzes'in sultan-varış günüyle aynı |
| TDV `murad-ii` | birincil | "Bizans üzerine yürüdü (Receb 825 / Haziran 1422)" | Ay. 1 Receb 825 ≈ 21 Haziran 1422 (yön göstergesi, çeviri değil) — 20 Haziran sultan varışına yakın |

**Hüküm:** TDV tek bir gün vermiyor, **kendi içinde üç değer** veriyor (8 · 15 Haziran · Receb) ⇒ §4'ün
"çelişirse TDV esastır" kuralı tek değer gösteremiyor. Hakemli kaynak TDV'nin iki gününün de Sphrantzes'ten
geldiğini gösterip kısa kroniklerin 10 Haziran'ını tercih ediyor. Destek (türetilmiş, alıntıya YAZILMADI):
10 Haziran 1422 (Jülyen) Çarşamba'dır; kısa kroniğin "Wednesday" ifadesiyle uyumlu.
**Diff:** `kronoloji_bizans.js` 06-08 → **06-10** + kaynak Kushch + `ic_not_gun` (TDV'nin üç değeri);
`olaylar_ek.js:117` gün zaten 06-10, ama dayanağı `istanbul`'du ve o madde **15 Haziran** diyor ⇒ kaynak
düzeltildi, `gun:` "10 Haziran - 6 Eylül 1422". `devletler.js:95` zaten 06-10 — değişiklik gerekmiyor.
⚠️ **Koordinatör hükmü:** TDV'yi lafzen uygulamak istersen alternatif `bizans` 06-08'dir; o zaman
`olaylar_ek.js` ve künye değişir (Değişmez 2 evreni) ve madde hakemli kaynakla çelişir. Önerim 06-10.

## ③b — Katalan 1303 → **gün BULUNAMADI · AY kaynaklı: Eylül 1303**

| kaynak | tür | birebir | neyi tarihliyor |
|---|---|---|---|
| Gran Enciclopèdia Catalana, "expedició dels almogàvers a Orient" | K | "Trenta-sis vaixells partiren del port de Messina a l'estiu del 1303, i arribaren a Constantinoble pel setembre." | İstanbul'a VARIŞ, ay |
| Yunus Doğan, *The Transformation of an Itinerant Army…* (yüksek lisans tezi, Bilkent, 2019, danışman L. Zavagno) | A (tez) | "The Catalan Company arrived at Constantinople in September 1303." | Varış, ay |
| *Catalan Historical Review* 13 (IEC, 2020) 135-147 | A, hakemli | "…a Constantinoble, on arribà la tardor de 1303." | Varış, mevsim (Eylül'le çelişmiyor) |
| TDV `bizans` | birincil | "Bizans'ın yardımına koştu (1303)" | Yıl |

**Hüküm:** Gün yok; uydurulmadı. İki dosya **1303-09-01 + `kesinlik:"ay"`** (D213: hassasiyet alandan okunur).
`kronoloji_katalan.js:13`: tarih aynı, `kesinlik:"ay"` eklendi; kaynak alanındaki **Setton OKUNMADIĞI için
çıkarıldı** (doğrulanmamış dayanaktı; "gün yaklaşıktır" notu da). `olaylar_p0049.js:30`: 01-01 → 09-01 +
`kesinlik:"ay"` + `gun:"Eylül 1303"`, eski `ic_not_gun` korunarak güncellendi.
⚠️ §4 ⑧: cümleler **varışı** tarihliyor; sözleşme daha önce (Ağustos 1302 Caltabellotta sonrası). Başlık
"hizmetine girdi" — değiştirmedim, istersen "İstanbul'a geldi" olarak daraltılabilir.
⚠️ `devletler.js:998` künye satırı hâlâ 1303-01-01 — **kilidim dışında, dokunulmadı**; aynı güne
(1303-09-01) çekilmesi önerilir.

## Denetim (`py arac/denetle.py`, `C:\atlas-w52`)
| | önce | sonra |
|---|---|---|
| çıkış kodu | **2** | **2** |
| sebep | Değişmez 8 ÖLÇÜLEMEDİ — `devletler_harita.js` yok (taze ağaç) | aynı |
| Değişmez 2 | 623 kırılma · 0 açık | aynı |
| 2s | 1720 · 187 açık (tavan 189) | aynı |
| tek fark | `yerlesimler_asya.js` 250 MADDESİZ | **249** (iyileşme, kuyruk bilgisi) |

## Bulunamadı / denenen yollar
- 1422 için Schreiner'in kendisi (*Die byzantinischen Kleinchroniken*) çevrimiçi okunmadı; yalnız Kushch'un
  atfıyla. ResearchGate 403 (aynı makale dergi sitesinden okundu).
- Katalan için gün: GEC, Bilkent tezi, IEC/CHR 2020 — üçü de ay/mevsim. Pachymeres/Muntaner birincil metin bu
  turda okunmadı. Setton 1975 hâlâ okunamadı.
