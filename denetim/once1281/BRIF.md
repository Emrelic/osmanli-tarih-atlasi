# 1281 ÖNCESİ DEVLET LİSTESİ — ARAŞTIRMA BRİFİ (alt ajanlar için)

Repo (worktree, yalnız bu klasöre YAZ): `C:\atlas\.claude\worktrees\cool-visvesvaraya-5a3306`
Çıktı klasörü: `denetim/once1281/dilimler/` — ayrı dosya, yalnız KENDİ dosyaların. Başka dosyaya, `data/`ya, `arac/`ya dokunma; commit atma, push yok.
Ağır komut yok (denetle, paketle, renk_olc vb. YASAK; makine koşu yapıyor). Hafif Python/Node serbest.

## Amaç
Emre'nin hedefi: harita MÖ 12000 → MS 2000 çizilebilsin. Önce **1281 öncesi dünyada var olmuş her devletin (siyasî birim) tastamam ana listesi**:
kültür-devlet geçişi olan şehir devletleri, krallıklar, imparatorluklar, hanedanlar, konfederasyonlar, hanlıklar, halifelikler, emirlikler, beylikler, kontluklar, dukalıklar, cumhuriyetler, kilise devletleri, kabile krallıkları… Senden istenen: **senin bölgendeki bütün bu birimleri bölge × devir ızgarasıyla taramak**.

Ne dahil, ne hariç:
- DAHİL: kendi hükümdarı/idaresi/toprağı olan her siyasî birim; önemli şehir devletleri (polis, Sümer şehri, Maya merkezi); sürekli hanedanlar (aynı polity'nin hanedan değişimi AYRI kayıt değil — hanedan ayrı bir devlet gibi yönetildiyse ayrı kayıt, bir arada bir devletse tek kayıt + `ic_not`).
- Büyük devletlerin eyalet/valilikleri yalnız fiilen bağımsızlaştıysa; geçici işgal/isyan yalnız adı olan ve devletleşmiş ise.
- HARİÇ: MÖ ~3000 öncesi arkeolojik kültürler (47 tanesi zaten künyeli: `mevcut_once1281.tsv`'de `tur=kultur`) — tekrar yazma. MÖ 3000 öncesinde yalnız belgeli bir siyasî birim varsa yaz (ör. Naqada krallıkları, Uruk şehir devleti).
- HARİÇ: sadece bir kabile/etnik ad (siyasî birim değilse), şahıs, savaş.

## Kapsam ızgarası
Bölgeni 5 devir diliminde tara; her dilim için AYRI dosya yaz (dilim bitince hemen Write — hepsini sona bırakma):
- A: MÖ 12000 – MÖ 3001  (nadir; yalnız devlet benzeri)
- B: MÖ 3000 – MÖ 501
- C: MÖ 500 – MS 499
- D: MS 500 – MS 999
- E: MS 1000 – MS 1280
Dosya adı: `dilimler/<BOLGE-KODU>_<A|B|C|D|E>.json`. Bir devlet birden çok dilime yayılıyorsa BAŞLADIĞI dilime yaz (f'ye göre). 1281'de ya da sonra başlayan devlet bu işin dışındadır (zaten atlas çekirdeğinde); ama 1281'den önce başlayıp sonra süren devlet dahildir.

## Mevcut atlas listesi (eşleme için)
`denetim/once1281/mevcut_once1281.tsv` — 758 künye (id, ad, tur, bolge, f, t, baskent). Her yeni kayıt için bu listeyi ara (ad, çeviri, alternatif yazım, başkent). Bulduğunu `esleme`ye yaz:
- `durum`: `var` (aynı polity, f/t uyumlu ≤ 25 yıl) · `var-f-t-farkli` (aynı polity, f/t kaynaktan farklı) · `var-kisa` (künye polity'nin bir bölümünü kapsıyor — genişlet) · `ardil-var` (aynı polity ardıl adla var) · `eksik` (yok)
- `mevcut_id`: bulunduysa id (listede GERÇEKTEN olan id; uydurma id yazma).
Atlas kuralı: **aynı polity sürüyorsa künyeyi genişlet; ardıl yapı geçtiyse ardıl künye; devlet öldüyse dönemi kısalt.**

## Kayıt şeması (JSON dizisi, her dilim dosyası bir dizi)
```json
{
 "id": "kebab-case-ascii (Türkçe harfsiz: ı→i ş→s ğ→g ü→u ö→o ç→c)",
 "ad": "Türkçe yerleşik ad (varsa); yoksa yaygın uluslararası ad",
 "ad_yerel": "özgün ad (isteğe bağlı)",
 "tur": "krallik|imparatorluk|sehir-devleti|hanedanlik|konfederasyon|hanlik|kaganlik|hilafet|emirlik|beylik|kontluk|dukalik|prenslik|cumhuriyet|... (mevcut tur sözlüğünden seç; yetmezse yeni tür öner ve `tur_yeni` alanına gerekçe yaz)",
 "bolge": "KAPALI SÖZLÜK: anadolu|balkanlar|orta-avrupa|bati-avrupa|kuzey-avrupa|dogu-avrupa|italya|iberya|kafkasya|iran|mezopotamya|suriye-filistin|arabistan|kuzey-afrika|misir-sudan|dogu-afrika|bati-afrika|orta-afrika|guney-afrika|orta-asya|guney-asya|dogu-asya|guneydogu-asya|sibirya-bozkir|kuzey-amerika|orta-amerika|guney-amerika|okyanusya",
 "f": "YYYY-MM-DD  (bkz. tarih kuralı)", "t": "YYYY-MM-DD",
 "kesinlik": {"f": "gun|ay|yil|onyil|yuzyil|belirsiz", "t": "..."},
 "baskent": "başkent(ler) ' → ' ile",
 "etkin_bolge": "kısa coğrafî tarif",
 "sehirler": ["en önemli 2-6 yerleşim"],
 "ozet": "1-2 cümle: kuruluş ve çöküş",
 "oncul": ["id veya ad"], "ardil": ["id veya ad"],
 "oncelik": "cekirdek|orta|kucuk",
 "kaynak": ["tam künye: yazar/yayın/yıl/sayfa veya URL"],
 "dogrulama": "okundu | kismen-okundu | taslak",
 "ic_not": "çelişkili tarihler (iki kaynakla), kronoloji okulu, belirsizlikler",
 "esleme": {"durum": "var|var-f-t-farkli|var-kisa|ardil-var|eksik", "mevcut_id": null, "not": ""}
}
```

## Tarih kuralları (CLAUDE.md "Kaynak kuralı")
- **MÖ yıllar astronomik:** MÖ N = −(N−1). MÖ 753 → `-0752-01-01`. MÖ 1 → `0000-01-01`. Format `±YYYY-MM-DD`, 4 hane (`-0752-01-01`). MS 800 → `0800-01-01`.
- **Tarih uydurma YOK.** Gün yoksa `YYYY-01-01` ve `kesinlik` yil/onyil/yuzyil; **yıl bilinmiyorsa alanı `null` yaz** + `ic_not`'a «yıl bilinmiyor». Kaynak yıl diyorsa yıl yaz. Ay biliniyorsa ay (gün yoksa ayın 1'i ama `kesinlik: ay`).
- Hicrî yıl: mîlâdî karşılıkla çevir, hicrî aralığı `ic_not`'a yaz.
- Yazılı Yakın Doğu için **orta kronoloji** (Mezopotamya), farklı okul ic_not'ta.
- Kaynaklar çelişirse ortasını alma: tek kaynak seç, gerekçeni ve öbür kaynağı `ic_not`'a yaz.
- Bir devletin başlangıcı için «kuruluş» (hanedan başlangıcı / ilk hükümdar / bağımsızlık) hangisiyse `ic_not`'ta söyle.

## Kaynak kuralı (ZORUNLU)
- **Hafızadan değer yazma sayılır sadece `dogrulama:"taslak"` olarak;** taslak kayıtlar Emre'ye «doğrulanmamış» görünür ve dönem oturumları yeniden doğrular. Önce web'de (WebSearch/WebFetch) gerçekten açıp okuduğun sayfadan tarih al: `dogrulama:"okundu"` ancak sayfayı bu oturumda açıp okuduysan. Hiç okuyamadıysan «taslak» yaz, uydurma kaynak künyesi YAZMA.
- **Öncelik (sen kendi alanına göre sırala):** Encyclopaedia Iranica · Der Neue Pauly / Brill's New Pauly · Pleiades · TDV İslâm Ansiklopedisi (islamansiklopedisi.org.tr; İslâm dünyası, Osmanlı, komşuları için ilk başvuru) · Encyclopaedia of Islam · Oxford/Cambridge/Brill/de Gruyter/Princeton/Harvard üniversite yayınları (Cambridge Ancient History, Cambridge History of ..., Oxford Classical Dictionary, Oxford Dictionary of Byzantium, Dictionary of the Middle Ages) · hakemli dergiler (JSTOR, DergiPark/TR Dizin) · ulusal akademi / müze (British Museum, Met, Louvre, Çin/Hint/Japon ulusal akademileri) · UNESCO WHC.
- **Vikipedi TEK DAYANAK OLAMAZ.** Aday bulmak için serbest, ama her kayıt için en az bir akademik kaynak yaz; yoksa `dogrulama:"taslak"`. Forum, blog, içerik çiftliği, YZ metni, popüler tarih sitesi, YouTube KULLANMA. Çok dilli kaynak serbest (Çince 国史, Japonca, Almanca RE vb.).
- Küçük model kullanılmaz (sen Sonnet+ olarak çalışıyorsun); hafızadan «kesin» gibi görünen bir sayı yazma.

## Tamlık ölçütü
Sonunda her dilim dosyasının başına koymak için değil, dosya adlarının yanında ayrıca `dilimler/<BOLGE-KODU>_RAPOR.md` yaz: ① kaç kayıt (dilim başı; okundu/taslak sayısı; eksik/var/f-t-farkli/var-kisa sayısı) ② neyi bulamadın (hangi devirde hangi bölgede liste sığ olabilir, hangi kaynağa ulaşılamadı) ③ Emre'den/ana oturumdan ne istiyorsun. «Tamlık» iddia etmeden önce kendi kendine sor: bu bölgenin yazılı tarihçisi/ansiklopedisi başka hangi devletleri sayar? (ör. Pleiades/Pauly/Iranica indeksi, TDV «hanedanlar» maddeleri, Cambridge History'nin içindekiler tablosu.) Kaynak olarak bu indeksleri tara, listene karşılaştır.
Kayıt sayısı hedefi yok: tam olan sayı hangisiyse o. Büyük bölgelerde (Çin, Hint, Avrupa, İslâm dünyası) yüzlerce kayıt çıkabilir — kısaltma.
