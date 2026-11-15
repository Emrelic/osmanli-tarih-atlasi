# BOLGE hint — Adım 4: Yerleşim kronolojisi (15 Kasım 2026)

Ölçüm: origin/main 8fb10bdf1, kutu [5,5–37,2N; 60,8–93E], 244 yerleşim (`YERLESIMLER*` hepsi). Yazma yok (`yerlesimler.js` yasak; öteki `yerlesimler_*.js` de dokunulmadı, çünkü bu adım kaynaklı bağımsız kronoloji üretemedi).

## 1. Sayılar
| Ölçü | Değer |
|---|---|
| Kutu içi yerleşim | 244 |
| `s:`'siz (sahne penceresi yok) | **35** |
| `s:`'li | 209 |
| `kur:` (kuruluş/ilk anılma) dolu | 67 · boş **142** |
| İlk pencere tam **1281-01-01** (çekirdek çıtası) | **89 / 209 (%43)** |
| İlk pencere `kur:`'dan önce (hayalet) | 3 (Harappa, Dholavira, Rakhigarhi — `gec-harappa` penceresi MÖ 1899'da başlıyor, `kur` MÖ 3299/2999/2549; künye `erken-harappa/harappa`'ya bağlı olmalı) |
| `kur:` ilk pencereden önce olup ≥1281 | 0 |
| Resmî D5 (pencere `kur:`'dan önce) | 0 (denetle) |

## 2. Bulgular
**Y1 — 1281 çıtası.** 89 yerleşimin ilk penceresi tam 1281-01-01. Bu atlas çekirdeğinin başlangıcıdır, yerleşimin kuruluşu değil. Bunların çoğu için `kur:` da yok; yani sahneye çıkış tarihi bağımsız bir kaynağa dayanmıyor, çekirdek sınırına dayanıyor. Bağımsız kronoloji (yerleşim başına kuruluş/ilk anılış kaynağı) bu oturumda **üretilemedi** (akademik kaynak okunamadı); kaynak sırası: TDV (Dehli, Lahor, Agra, Haydarâbâd, Bengal… maddeleri), sonra bölgesel akademik yayınlar (okunmadı).
**Y2 — `s:`'siz 35 yerleşim.** Haritada hiç boyanmayabilirler (`d:` penceresi de yoksa, Değişmez 1 sahipsizlik de ölçmez). Tarihî başkent/merkez olanlar: **Gampola** (Sri Lanka başkenti, ~1341–1412; `seylan-sinhala` künye-içi kronolojisi anıyor ama pencere yok), **Halebidu, Belur** (Hoysala), **Mahoba** (Çandela), **Badami** (Calukya), **Şakambhari** (Çauhan), **Mansura/Brahmanabad** (Sind), **Karnasuvarna, Mainamati, Vikramapura (2 kayıt)** (Bengal), **Rohtasgarh, Jajpur, Kalinganagara, Sonepur, Denduluru, Pedavegi, Tummana, Banapur, Brahmapura, Koç Bihar, Agartala, Kâlincar, Kaveripattinam, Udabhandapura, Pattikera, Uç…** Bunların çoğu 1281 öncesi başkentlerdir (çekirdek dışı), ama **Koç Bihar (Koch Krallığı 1515–1949), Agartala (Tripura 1279–1949), Gampola, Kâlincar (Çandela–Sûr kalesi)** çekirdeğe değer. Bunların `s:` penceresi yoksa künye (`koch-bihar`, `tripura-manikya`) yerleşimsiz kalır — Adım 1'deki K1 ile aynı sorun. **Düzeltme `yerlesimler*.js`'e düşer → kuyruk dosyası:** `denetim/YERLESIMLER-JS-KUYRUK-1115-hint.md`.
**Y3 — Ülke yerleşimleri.** `Hindistan` ve `Pakistan` `s:`'siz yerleşim olarak duruyor (modern ülke çapaları); `Tibet` de `s:`'siz. Bunlar `kronoloji` `yer_id` hedefi olarak kullanılıyor olabilir; sahnede boyama beklenmez (not).
**Y4 — Çıta ve yüzyıl çukuru** (KAPSAM-OLCUM-1114 ile uyumlu): 1000s 39 / 1100s 42 / 1200s 137 → 1281 sonrası düzgün (136–183).

## 3. Yerleşim ↔ genel kronoloji örtüşmesi
Genel kronolojide (olaylar/kronoloji_sinir) kutuya düşen yer_id'li madde hedefi çözülemeyen: **0** (odak_olc). Kronolojide anılıp haritada **s:'siz** olan yerleşim sayısı bu oturumda ölçülmedi (araç hazırlanmadı). Hayalet: 3 (Harappa grubu, tarih öncesi, çekirdek dışı).

## 4. Hüküm
Yerleşim kronolojisi bağımsız kaynakla **karşılaştırılamadı** (ölçülmedi). Ölçülen yapı bulguları: çıta artefaktı (%43), `kur:` boşluğu (142/209), 35 `s:`'siz. Öneri: (a) 1281 çıtası yerleşimleri için ilk anılma yılı bölgesel akademik kaynaktan (TDV şehir maddeleri; hakemli Hint/Sri Lanka tarih yayınları — kaynak adı bu oturumda belirlenmedi) `kur:`'a yazılsın; (b) `s:`'siz Koç Bihar, Agartala, Gampola, Kâlincar'a pencere eklensin (kuyruk).
