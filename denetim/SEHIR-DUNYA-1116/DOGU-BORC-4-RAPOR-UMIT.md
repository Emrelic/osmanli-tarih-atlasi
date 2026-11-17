# DOĞU BORÇ 4 — Leşkergâh + Addis/Kismayu 2. kaynak + Mısır zincirsiz 5 (UMIT, 17 Kasım 2026)

Worktree `sehir-afrika-1116`, dal `sehir-afrika-kuzey-dogu-1116`. Commit/push yapılmadı.
Denetim (`py -I -X utf8 arac/sehir_tarihce.py denetle`): dogu_borc_1 **14 şehir · ihlal 0 · uyarı 13** · dogu_borc_2 **14 şehir · ihlal 0 ·
uyarı 11** · dogu_borc_3 **5 şehir · ihlal 0 · uyarı 3** (dokunulmadı) · dogu_borc_4 **1 şehir · 0 dönem · 3 olay · ihlal 0 · uyarı 1**.
Düzenleme yolu: JS → JSON → `sehir_tarihce.py yaz`; değişiklikten önce yeniden üretimin dosyayı bayt bayt aynı verdiği sınandı (borc_1, borc_2).

## ① Ne ölçtüm / yazdım

**Parça 1 — Leşkergâh (YENİ `leskergah-af`, `data/sehir_tarihce_dogu_borc_4.js`, `window.SEHIR_TARIHCE_DOGU_BORC_4`)**
- ilk = kur = **1946-01-01, kurulus, yil**. Tanık birebir TDV BÜST (T. Yazıcı): "Büst harabelerine yakın bir yerde 1946 yılında Leşkergâh
  adıyla yeni bir yerleşim merkezi kurulmuştur." (yıl + şehir aynı cümlede). Iranica BOST ii (X. de Planhol, 1989) aynı yıl, HAVA himayesi.
  **Çift teyit (yıl), bağımsızlık sınırlı**: TDV 1992 > Iranica 1989, aynı ayrıntılar (köy adı, 1979 nüfusu 21.600) → TDV Iranica'ya dayanıyor olabilir; beyanlı.
- Olay 3: 1946 kuruluş · 1962-63 çarşı · 1979 nüfus. Zincir boş (şehir 1900'den sonra; denetimin tek uyarısı "atlas başlangıcı düzeltilmeli"
  beklenen: atlasta nokta yok, 1900'de şehir yok). kat1900 null.
- atlas_ad null: LISTE koordinatı (31.59382, 64.37161) 3 km içinde atlas noktası yok; en yakın atlas 'Büst' 9,6 km. Büst (`bust-af`,
  dogu_borc_3) tekrarlanmadı. Leşker-i Bâzâr harabesi (BORC 31.59566, 64.41610) 4,2 km doğuda, ayrı antik yer — katılmadı.
- Hilmend merkezliği yıllı kaynakta yok (Britannica'da Lashkar Gah maddesi yok) → olay yazılmadı, ic_not'ta beyan.

**Parça 2 — 2. kaynak**
- `addis-ababa-et` (dogu_borc_1) — yalnız **ilk.ic_not'a ek**, değer değişmedi (ilk.t 1887 kaldı). 2. KAYNAK: Garretson, *A History of
  Addis Abäba from its Foundation in 1886 to 1910* (Harrassowitz 2000, Äthiopistische Forschungen 49) — başlık birebir, **1886**.
  Hakemli karar UYGULANMADI: 1886 için ikinci bağımsız akademik kaynak okunamadı (SOAS deposu = Garretson'un kendi tezi; Bairu Tafla
  eleştirisi Aethiopica 5 yalnız PDF; ResearchGate 403; Pankhurst JAH 1961 özeti yıl vermiyor). Çelişki 1886↔1887 açık, beyanlı.
- `kismayo-so` (dogu_borc_2) — **ilk.ic_not ek + kayıt ic_not** ('Tek kaynak (Britannica).' → iki genel ansiklopedi, akademik yok).
  Columbia Encyclopedia 6th ed. (encyclopedia.com): "Kismayo was founded in 1872 by the sultan of Zanzibar" — 1872 aynı, çelişki yok.
  Yan bulgu: İtalya'ya devir Columbia **1924**, Britannica **1927** (olay[2]) — değiştirilmedi, borç. TDV BERGAŞ b. SAÎD: 7 Ekim 1870'ten
  itibaren Kismâyû'da Zengibar hâkimiyeti (yılsız, kuruluşu tarihlemez).

**Parça 3 — Mısır "zincirsiz 5"**
- `afrika_misir.js` (Aswan, Fustat) zincirleri dolu; EKLER-BEKLEYEN ve DOGRULAMA-TDV'de 'zincirsiz' yok. Mısır'ın 22 LISTE şehri
  ölçüldü: **boş zincirli 5 kayıt `sehir_tarihce_osm.js`'te**: port-said, shibin-el-kom, beni-suef, girga, quseir. Beşinde de zincir
  kural gereği boş (ilk.t ≥ atlas başlangıcı 1281) — `__BOSLUK__` yazmak ihlal olurdu.
  - port-said (1859): ilk.t = atlas başlangıcı, sorun yok. girga (TDV HEVVÂRE 1380/1396), quseir (ARCE 1571): kaynaklı geç kuruluş →
    **atlas başlangıcı** (1281) düzeltilmeli, tarihçede yazılacak zincir yok.
  - beni-suef: Ramzî I ('Bûfîsiyâ' md., ar.wikisource) Tuhfe s.172 'Manfaswaih'i teyit eder (Peust'la aynı zincir), 'Bufisia'
    eşitlemesi Ramzî'nin tarihsiz çıkarımı → 1281 öncesi tarihli tanık YİNE yok.
  - shibin-el-kom: yeni arama yapılmadı (önceki turun İbn Memmâtî/Ramzî taraması yeterince geniş; Ramzî II/2 yalnız PDF).
- **Yazılan/değişen: 0.** `sehir_tarihce_osm.js` `yaz` ile yeniden üretilemiyor (dosyada önceden **111 ihlal**; yaz reddeder) — elle
  düzenleme yasak olduğundan Benî Süveyf notu dosyaya değil buraya yazıldı.

**Açılan siteler** (≥5 sn aralık, 429 yok, indirme yok, kendi sekmem tab-14): islamansiklopedisi.org.tr — BÜST, LEŞKER-i BÂZÂR, BERGAŞ b.
SAÎD, arama 'leşkergâh', 'kismâyû' · iranicaonline.org — BOST (başlık), BOST ii (bir 404 yanlış slug) · britannica.com — /place/Lashkar-Gah
(404), /place/Helmand (404), arama 'Lashkar Gah' (0), 'Helmand' · books.google.com — Garretson 2000 künye · cambridge.org — Pankhurst
JAH 1961 özet sayfası · journals.sub.uni-hamburg.de/aethiopica — Tafla 2002 künye · researchgate.net (403) · encyclopedia.com — Kismayo ·
ar.wikisource.org — arama 'منفسويه', Ramzî I 'حرف الباء' · html.duckduckgo.com — 5 arama.

## ② Ne bulamadım
- Addis Ababa 1886 için ikinci bağımsız akademik kaynak (Encyclopaedia Aethiopica kapalı, Tafla PDF).
- Kismayu 1872 için akademik (hakemli/monografi) kaynak; İtalyan devri 1924/1925/1927 çelişkisi çözülmedi.
- Leşkergâh'ın Hilmend vilayet merkezi oluş yılı.
- Benî Süveyf ve Şibînülkûm için 1281 öncesi tarihli tanık.

## ③ Ne istiyorum (önerim)
1. LISTE (iran-kafkasya-afganistan) 'Bust' satırı → ad 'Leşkergâh', tarihce_var = `leskergah-af` (dogu_borc_4).
2. Addis: Garretson kitabı ya da Encyclopaedia Aethiopica okununca hakemli karar (1886 lehine 2. bağımsız kaynak çıkarsa ilk.t 1886-01-01).
3. Kismayu: İtalyan devri günü için Haziran 1925 Cubaland devri antlaşma neşri (birincil belge) aranmalı; olay[2] 1927 şüpheli.
4. `sehir_tarihce_osm.js`'in 111 ihlali giderilmeden hiçbir kayıt `yaz` ile düzeltilemiyor — ayrı iş olarak açılmalı.
5. Atlas: Girga (en geç 1396) ve Kuseyr (1571) noktalarının 1281 başlangıcı düzeltilmeli (kaynaklar kayıtlarda). Port Said'in atlas
   başlangıcı zaten 1859-04-25 (ilk.t ile aynı) — düzeltme gerekmez.
