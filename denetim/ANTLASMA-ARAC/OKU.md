# ANTLAŞMA ÜRETİM ARAÇLARI (UMIT, 13 Kasım 2026) — Lozan/Sevr'de kullanılan hat

Amaç: bir antlaşmanın HAM METNİNDEN madde madde özet çıkarıp oynatıcıya (`js/antlasma_oynatici.js`) veri üretmek. Lozan (md. 1-143 + 16 ek) ve Sevr (md. 1-433) bu hatla yapıldı; çıktılar `data/antlasma_madde_lozan.js` ve `data/antlasma_madde_sevr.js`.

## Dosyalar
- `uret_antlasma.js` — GENEL üretici (config → `data/antlasma_madde_<ad>.js`).
- `syntax_kontrol.js` — çıktıyı yükler; sözdizimi + şema + «adımdaki yer, yerler tablosunda var mı» denetler. Çıkış 0/1.
- `yerler-ortak.json` — 119 yerin [boylam, enlem] YAKLAŞIK odak tablosu (Lozan+Sevr'den birleşik). Yeni antlaşma için eksik yerleri config'teki `yerler_ek`e ekle (kalıcı olsun istersen bu dosyaya da).
- `ornek/` — Lozan girdileri ve çalışan örnek config (`lozan.config.json`; `cikti` yolu senin makinene göre değiştir). Test: `node denetim/ANTLASMA-ARAC/uret_antlasma.js denetim/ANTLASMA-ARAC/ornek/lozan.config.json` → «159 adım».
- `eski/` — ilk tek-amaçlı betikler (Lozan/Sevr'e özel; gruplama mantığı `uret-sevr.js`te, bölüm başlığı Türkçeleştirme `bolum-turkcelestir-lozan.js`te, `chk.js` = sözdizimi kontrolcüsü).
- `ajan-brif-sablonu.md` — alt ajanlara verilen brif metinleri (ham metin okuma ve çelişki hakemliği).

## Akış (her antlaşma için)
1. **Ham metni bul ve İNDİR** (özet DEĞİL): `curl -s "https://en.wikisource.org/w/index.php?title=<Sayfa>&action=raw"` (Wikisource çoğu zaman BYU/UKTS metnini barındırır), mfa.gov.tr, Yale Avalon, League of Nations Treaty Series (LNTS), Düstur/Meray/Hurewitz/Noradounghian. İndirmeleri scratchpad'e koy, ÇALIŞTIRMA, `Read` ile oku. WebFetch'in verdiği «sayfa özeti» ham metin değildir — Lozan'ın ilk turu bu yüzden reddedildi.
2. **Madde madde özet** (KENDİ cümlen, ≤35 kelime, kopya yok; madde no ham metinden). Girdi şeması aşağıda. Okuyamadığın/emin olmadığın maddeye `belirsiz:true` + `ozet`te «doğrulanamadı»; UYDURMA YOK.
3. **TDV karşılaştırması**: `islamansiklopedisi.org.tr/<slug>` — `curl` Cloudflare'a takılır (HTML 5 KB «blocked»); WebFetch ya da tarayıcı (LAB gözle okur) kullan. «TDV'de yok» demeden slug ara; ölü slug arama sayfasına düşer (302/arama); doğru madde gövdesi mi, boş gövde mi kontrol et.
4. `config.json` yaz, `node denetim/ANTLASMA-ARAC/uret_antlasma.js config.json` → `data/antlasma_madde_<ad>.js`.
5. `node denetim/ANTLASMA-ARAC/syntax_kontrol.js data/antlasma_madde_<ad>.js`.
6. `index.html`'e `<script src="data/antlasma_madde_<ad>.js"></script>` (oynatıcıdan önce/sonra fark etmez, oynatıcı veriyi tembel okur; `?v=` damgasını push kapısı ekler). `js/antlasma_oynatici.js` zaten bağlı (`antlasma_harita.js`ten SONRA yüklenir; app.js'e dokunmaz).
7. **Tarayıcıda dene** (yerel sunucu: `.claude/launch.json` → `py -m http.server 8765 --bind 127.0.0.1`; `preview_start`). Konsolda: `obGoster(Object.assign({}, OLAYLAR_EK8.find(x=>x.t==='1920-08-10'), {gi: gunIdx('1920-08-10')}))` gibi ana kronoloji maddesini aç; `▶ Maddeleri tek tek oynat` düğmesi çıkmalı; ileri/geri/oynat çalışmalı. Ana maddeyi bulmak için `OLAYLAR*` dizilerinde `t` ve `b` ile ara (ilk dizi `OLAYLAR` yetmeyebilir).
8. İsteğe bağlı: **fark maddesi** (`data/olaylar_ek22.js` sonuna, başlıkta antlaşma adı GEÇMEMELİ yoksa oynatıcı düğmesi ikinci maddeye de bağlanır) ve **tartışma kartları** (`data/ekokuma_<ad>.js`, `window.EKOKUMA_<AD>`; `js/app.js` `_EKOKUMA_DOSYA_ADLARI` listesine TEK satır — ayrı commit).

## config.json (özet; ayrıntı `uret_antlasma.js` başlığında)
`id` (kebab+yıl) · `ad` (kronoloji maddesinin `b`sinde GEÇEN dize, eşleşme bununla: `b.indexOf(ad)>=0` ve `t` ±60 gün) · `t` (gün) · `kadraj` [batı,güney,doğu,kuzey] · `kaynak` (okunan/okunmayan beyanı) · `cikti` · `girdiler` (JSON dosyaları) · `yerler_ek` · `gruplama` {`tekTek`:[[a,b]], `azamiGrup`:6} (büyük antlaşmada toprak maddeleri tek tek, gerisi aralık adımı «md. a-b») · `madde_sayisi` (eksik denetimi).

## ÇOK TARAFLI antlaşma (Karlofça: Habsburg/Venedik/Lehistan/Rusya)
- Madde nesnesine `taraf:"Venedik"` yaz; **numaralandırma TARAF BAŞINA** (Habsburg md.1-20, Venedik md.1-16…). Tekrar `no` yalnız `(taraf, no)` çiftinde reddedilir; farklı tarafların aynı `no`'su serbesttir.
- Adım başlığı **«Venedik md. 3»**; metin `no` («giriş», «onay», «ateşkes») «Venedik giriş» olur ve `sira` (sayı) ile ya da dosya sırasıyla yerleşir. `taraf` alanı adıma da yazılır.
- Sıra: config `taraflar:[...]` (yoksa ilk görülme) → `sira` → sayısal `no` → dosya sırası. Gruplama (`gruplama`) taraf sınırını AŞMAZ.
- `madde_sayisi` nesne olabilir: `{"Habsburg":20,"Venedik":16}` (taraf başına 1..N; yalnız sayısal `no` sayılır).
- Oynatıcı eşleşmesi için `anahtarlar:["Karlofça Antlaşması","Karlofça"]` (verilmezse `ad`); `onceki_t` bilgi alanıdır.
- `syntax_kontrol.js` adım başlığı tekrarını ve taraf ön eki eksikliğini yakalar. Örnek: `ornek/cok-tarafli.config.json`.
- `js/antlasma_oynatici.js`: «md. » öneki yalnız düz sayısal başlıkta (27, 27-35); «Venedik md. 3», «Ek 1» olduğu gibi gösterilir; `anahtarlar` varsa eşleşme onlarla yapılır.

## Girdi JSON şeması
Dizi ya da `{maddeler:[...], ekler:[...]}`. Madde: `{no, bolum, ozet, yer:[...], konu, belirsiz}`. Ek belge: `{ad, ozet, okundu, yer, madde_say}`; `okundu:false` ⇒ adımda sarı «⚠ İÇERİK DOĞRULANMADI».

## TUZAKLAR (hepsi yaşandı)
- **Araç özeti ≠ ham metin.** İlk Lozan turu WebFetch özetinden yazıldı, KASA reddetti; curl ile ham metin okunarak yeniden yazıldı.
- **Bölüm başlıkları Türkçe olmalı.** Wikisource başlıkları İngilizce gelir («Part I. Political Clauses», «Section I. I. Territorial Clauses»); `eski/bolum-turkcelestir-lozan.js` örnek eşleme. Sevr'de ajana «Türkçe karşılığıyla» denince doğrudan Türkçe geldi.
- **Yer adı yalnız metinde GEÇİYORSA yazılır.** «Hatay» Lozan'da yok — konmadı. Ülke adları (Almanya, Rusya) ve konferans şehirleri (Paris, Lahey, Bern) haritada odak sayılmaz; `yerler` tablosunda olmayan adlar üretici tarafından sessizce atılır ve UYARI basılır (normal).
- **`yerler` YAKLAŞIK nokta, sınır çizgisi değil.** Özet adımında «bölge/sınır» anlatılıyorsa nokta yalnız odaktır.
- **Madde numarası/bölüm sınırı kaynaklar arası farklı** (TDV Lozan azınlık md. 37-44, ham metin 37-45; TDV Sevr md. 101-122 vazgeçme). Ham metin numarası esastır; fark `kaynak`/kartta beyan edilir.
- **Ortak metinler:** Sevr Kısım I Milletler Cemiyeti Misakı Versay Part 1 ile ortak; Sevr Kısım XII Çalışma (md. 374-414) Wikisource'ta Sevr sayfası yok, Versay'dan eşlendi ⇒ `belirsiz:true` (sarı etiket, çıkarılmaz).
- **OCR bozuk maddeler** (Sevr md. 221, 'Biyuk Dere', '2I5'): özet yalnız okunabilen kısma dayanır; beyan et.
- **Tarih/takvim:** antlaşma günü 1582 öncesi kaynak günüdür (Jülyen); 1582 sonrası Gregoryen; geç geçen yerlerin kaynak günü çevrilir ve ic_not'ta iki günüyle yazılır (CLAUDE.md «Takvim»).
- **Oynatıcı düğmesi birden fazla maddede çıkabilir** (devlet kronolojilerinin maddeleri de `b`de adı taşır) — zararsız, aynı veri.
- **Bash'te heredoc/backtick YASAK** (`kabuk_nobetci`): metni `Write` ile dosyaya yaz, `node <dosya>`/`git commit -F <dosya>` ile çalıştır. Çalışma dizinini alt klasöre alma — hook yolu bozulur (`Set-Location <worktree-kökü>`).
- **Git:** worktree içinden; `git add -- <ad>`; push kapısı/`denetle` ayrı (`denetle` koşmadan «ölçülmedi» yaz).
- **Mesai:** ajan sayısı ve RAM/CPU sınırı makineye bağlı (UMIT'te boş RAM ≥4 GB ve en çok 1 ajan); LAB/HAVVA'da çok daha rahat.

## Kaynak sırası (CLAUDE.md)
TDV → İSAM/TTK/DergiPark hakemli → akademik monografi (Hurewitz, Meray, Noradounghian…) → birincil metin neşri (Düstur, LNTS, mfa.gov.tr). Vikipedi/forum/blog dayanak değil (Wikisource yalnız metin BARINDIRICISI). Çelişkide ≥2 bağımsız akademik kaynak TDV'ye karşı aynı günü veriyorsa o gün; yoksa TDV günü kalır, `ic_not`'ta beyan. Okunmayan kaynak «okunmadı» yazılır, sayılmaz.
