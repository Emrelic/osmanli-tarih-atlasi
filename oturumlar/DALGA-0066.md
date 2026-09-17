# DALGA-0066 — paket 0066 (23 madde) · 17 Eylül 2026 19:10 · 1.MURAT

Görseller: `ClaudEmre/kutu/giden/parti-emrelic-0066/H-00NN-*.png` · metin: aynı klasör `PARTI.json`.
Ortak kurallar: TDV birincil · yalnız akademik kaynak · Vikipedi tek dayanak olamaz · tarih uydurma · görsel yalnız PD/CC0 ·
okuyucu metninde geliştirici notu yok · atlas referans değildir. **Rapor YALNIZ TAHTAYA, tek teslim mesajı;
koordinatör ekranına yazma; tahta YOKLAMA YOK (Monitor + `arac/tahta_bekci.py --kim <ADIN>`).**
Yerleşim dosyalarına yazılmaz — yerleşim değişikliği `denetim/YAMA-<AD>-0917.json` olarak önerilir.

Oturum seçimi (CLAUDE.md §7.1 TOKEN KURALI): varsayılan TAZE; mevcut oturum yalnız dosya sahibi ve işin doğrudan devamıysa.

| Oturum | Seçim gerekçesi | Maddeler | Çıktı |
|---|---|---|---|
| **HARITA-KARADENIZ** (Opus, TAZE) — ⚠️ BÖLÜNDÜ: H-0001/H-0002 → SEFER-1768, H-0012/H-0022 → KARADENIZ-KAFKAS (`KADRO-1010-1015.md`) | yeni iş | H-0001 Rusların Bender'e güzergâhı (Yedisan? Lehistan toprağı? müttefiklik) · H-0002 Kırım istilası güzergâhı + Zaporojye Kazaklarının rolü + Kızıkermen/Canboyluk/Yedisan bozkırlarının düşüşü · H-0012 Kabartay/Nalçik baştan sona kime bağlı · H-0022 Anapa'nın etki alanı | `data/seferler_p0066.js` (window.SEFERLER_P0066) + `denetim/YAMA-KARADENIZ-0917.json` + rapor |
| **BASRA-KORFEZ** (Opus, TAZE) | yeni iş | H-0020 Basra·Abadan·Fav kronolojik sahiplik · H-0017 1776 İran'ın Basra'yı alması (ilansız işgal nasıl olur) ek okuma · H-0021 Kuveyt'in yükselişi, Osmanlı-İran-İngiliz ilişkileri ek okuma | `denetim/YAMA-BASRA-0917.json` · `data/ekokuma_korfez.js` (window.EKOKUMA_KORFEZ) |
| **EKO-TARTISMA** (Opus, TAZE) | tartışmalı tarih yazımı → güçlü model | H-0006 Lehistan niçin üç kez paylaşıldı · H-0018 1683'te Kırım hanı ihanet etti mi · H-0019 Şahin Giray hain/Rus ajanı mıydı | `data/ekokuma_tartisma.js` (window.EKOKUMA_TARTISMA) |
| **EKO-KARSI** (Opus, TAZE) | yeni tür | H-0023 KARŞI TARİH ANLATISI: önemli olayların karşı tarafın tarih yazımında nasıl anlatıldığı (İstanbul'un fethi, Mohaç, Viyana 1683, Karlofça, Kaynarca, Kırım'ın ilhakı… en önemliden başla). Tür adı `karsi-anlati` — VERI-YAPISI'na 1.MURAT ekler. Her iki tarafın kaynağı adıyla. | `data/ekokuma_karsi.js` (window.EKOKUMA_KARSI) |
| **EKO-KURUM2** (Sonnet 1009, TAZE sayılır) | boştaki kıta | H-0014 Mühendishâne-i Bahrî-i Hümâyun (1775) · H-0016 Osmanlı vergi sistemi (reayadan nasıl toplanır, hangi vergiler, ülke geneline eşit miydi; esham 1775 bağlı) | `data/ekokuma_kurum2.js` (window.EKOKUMA_KURUM2) |
| **KISI-KART** (Sonnet, TAZE) | yeni iş | H-0007 zayıf kişi kartları (ör. Baron de Tott) → 2-3 paragraflık kaynaklı anlatı; önce zayıf kartları say (kısa metinli), en önemliden başla | `denetim/YAMA-KISI-KART-0917.json` (kisiler.js'e 1.MURAT indirir) |
| EKO-ANTLASMA (mevcut) | antlaşma ek okumalarının sahibi | H-0009 Küçük Kaynarca bir diplomatik skandal mıydı · H-0015 1775 Bukovina'nın Avusturya'ya terki (tartışma: niçin karşılıksız verildi) | kendi `ekokuma_antlasma*.js` |
| EKO-RIVAYET (mevcut) | 0065/H-0003 ile AYNI konu (III. Mustafa borç senedi) | H-0008 borç senedi hikâyesi kaynakla doğrulanırsa III. Mustafa kartının magazin kısmına öneri | kendi dosyası + `denetim/YAMA-0066-PADISAH.json` |
| EKO-TEMIZ (mevcut) | editör turu ve bağ düzeltmesi zaten onda | H-0010 "Devlet vergi toplama hakkını üç kez…" maddesi Kaynarca ek okumasına yanlış bağlanmış → bağı düzelt | `denetim/YAMA-0065-EDITOR.json`e ek |
| UI-HARITA (mevcut) | app.js sahibi | H-0003 taralı işgal gösterimi tutarsız (Rus işgali taralı, Kırım düz) — kural: işgal/tâbi taraması bütün gövdelerde aynı · H-0011 Gürcistan'da yarı saydam bölge ne · H-0013 kronoloji listesinde "🛩 Pasif kip…" gibi arayüz ipuçları maddelerin içinde görünüyor → kaldır | `js/app.js` · `css/style.css` |
| D-KATMAN (mevcut) | d_katman.js + antlaşma haritası sahibi | H-0004 Rus yeşili üstünde pembe Lehistan rengi ve çizgileri (teşhis; app.js'teyse UI-HARITA'ya tahtadan devret) · H-0005 Lehistan'ın 1. paylaşımı haritasında Avusturya ve Rus payları da Prusya gibi ayrı vurgulu görünsün | `js/d_katman.js` · `js/antlasma_harita.js` · `data/antlasma_haritalari.js` |
