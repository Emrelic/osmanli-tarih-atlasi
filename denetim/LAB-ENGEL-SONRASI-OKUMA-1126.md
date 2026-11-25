# LAB 21 KASIM: engel sonrası başka yolla okumaya dayanan veri yazımları

Salt denetim. Hiçbir veri kaydı değiştirilmedi ya da geri alınmadı.
Ölçüm: LAB makinesi, `.claude/worktrees/lab-engel`; canlılık = `git merge-base --is-ancestor <commit> origin/main`
(origin/main `831f6dc8f`, 25.11 23:06). Kaynak: oturum kaydı `67042d50-...jsonl` + alt ajan kayıtları.
Aşağıdaki saatler kayıttaki gibi **UTC**'dir (commit saati = UTC+3).

**Kural (EMRELİC):** engel görüldükten sonra başka araçla (WebFetch alt ajanı dahil) yapılan okuma "engel dolanılarak" sayılır.

**Yorum sınırı:** bu liste okumanın YOLUNU tarar; tarihî sonucun doğru ya da yanlış olduğunu söylemez.

## 0. Engel olayları

| Zaman | Site | Engel | Sonraki okuma |
|---|---|---|---|
| 22.11 15:49:29 | islamansiklopedisi.org.tr (TDV) | Cloudflare "Attention Required" (curl, `-A "Mozilla/5.0"`; 4 sayfa, her biri 5202 bayt) | 15:49:43'ten itibaren üç WebFetch alt ajanı; ajan istemine "curl takılır, WebFetch ile açılır" yazıldı |
| 22.11 15:50-15:52 | iranicaonline.org (3), britannica.com (2) | 403 | Aynı sayfanın başka kopyası okunmadı; arama özeti ve başka eserler kullanıldı (bkz. Kanbâyet) |
| 23.11 18:32 | academia.edu, enauka.gov.rs (Krstić) | 403 | `booksofjeremiah.com` yansıma sayfası, WebFetch |
| 23.11 18:32 | halshs (Anubis), referenceworks.brill.com | erişim reddi / 403 | Masavva: veri yazılmadı |
| 23.11 18:50:10 | dais.sanu.ac.rs (Kalić) | "Human Verification Required" | 18:50:17 `balkaninstitut.com` PDF'i (başka sunucu), WebFetch + pypdf |

Ayrıca: 22.11 15:50 gutenberg.org 503 (Retry-After) verdi, 15:53'te curl komutunda gutenberg adresi yeniden denendi; yazılan Campbell metni archive.org'dan alındı. 503 yukarıdaki engel türlerinden sayılmadı.

İlk TDV engeli **curl'e tarayıcı başlığı verilmiş** denemede görüldü (yeni kurala göre bu da yasak yoldur).
Kayıtta 22.11 15:49:29'dan önce TDV engeli yok; 21.11 10:47 ve 22.11 11:10 TDV WebFetch okumaları "engel sonrası" sayılmadı.

## 1. Etkilenen, CANLIDA olan yazımlar (6 kayıt)

Altısının da commit'i `origin/main` atasıdır. Aynı metnin paket kopyaları (`data/paket_*.js`) ayrıca sayılmadı.

| # | Kayıt / dosya | Commit | Engel sonrası okunan, yol | Yazımdaki rolü | Engele bağlı olmayan dayanak |
|---|---|---|---|---|---|
| 1 | `Biskra`, `data/yerlesimler.js` (zeyyani -> hafsi 1281-1552) | `9ac0c007a` | TDV `hafsiler`, `zeyyaniler`, `abdulvadiler`, arama `biskre`; WebFetch ajanı (ajanın kendi notu: "aracılı okuma", ham metin gelmedi) | Olumsuz tanıklık: "TDV Biskre/Zâb'ı anmıyor"; zeyyani kaydını kaldırma gerekçesinin parçası | Ibn Khaldun / de Slane c.III, archive.org curl (bu sitede engel görülmedi). Sahip değeri buna dayanıyor |
| 2 | `Kanbâyet (Khambhat)`, `data/yerlesimler_asya.js` (iki pencere, kırılma 1304 -> 1297) | `9ac0c007a` | TDV `gucerat`, `alaeddin-halci`; WebFetch ajanı. "Britannica 1299": Britannica 403 verdi, ajan raporuna göre rakam yalnız web arama özetinden | Beyan edilen çelişki cümlesi (TDV 1296-1316 / 1299-1305; Britannica/Wikipedia 1299) | Cambridge History of India III + Campbell 1896, archive.org curl. 1297 bunlara dayanıyor |
| 3 | 1297 maddesi "Delhi Sultanlığı Gucerât'ı fethetti...", `data/kronoloji_hindistan.js` | `9ac0c007a` | 2 ile aynı TDV okuması | `kaynak:` içindeki TDV aralığı | 2 ile aynı |
| 4 | `Belgrad`, `data/yerlesimler.js` | `9354905f9`, `a5a0535ac` | (a) Krstić: academia/enauka 403 -> **yansıma sayfası** (WebFetch, işlenmiş çıktı); (b) TDV `srem`, `sirbistan`, arama `dragutin` (23.11 18:30) ve TDV `belgrad` yeniden (18:49), WebFetch; (c) Kalić s.78-79: DAIS doğrulama kapısı -> `balkaninstitut.com` PDF (**sınırda**, aşağıda) | (a) "second half of 1284"; (b) "TDV Srem 1282'yi Belgrad'a uygulatmaz" ve TDV'ye karşı hakem metni; (c) 1319-1403 Macar penceresi | 1281-1284: Jireček (UMIT okuması). 1319-1403: Hrvatska enc. (23.11 18:50-18:52 WebFetch, o sitede engel yok) |
| 5 | `Belgrad Kalesi (Kalemegdan)`, `data/yerlesimler.js` (ikiz) | `9354905f9`, `a5a0535ac` | 4 ile aynı (metin kopyası) | 4 ile aynı | 4 ile aynı |
| 6 | 1284 Belgrad ve Mačva maddesinin `ic_not_d`'si, `data/olaylar_2s_0918.js` | `9354905f9` | 4(a) yansıma + 4(b) TDV Srem | Yalnız iç not | Maddenin eski `kaynak:` alanı (Kalić s.71-, "okundu 15.11.2026") bu turdan önce vardı |

**4(a) için durum:** `af9faafe9` (bu daldaki üst commit) yansıma cümlesini üç yerden çıkarıp "Krstić: okunmadı (403)" yazıyor.
Bu commit **canlıda değil**; `origin/main`de "yansıma sayfasının" ifadesi hâlâ `yerlesimler.js` (2 satır) ve `olaylar_2s_0918.js` (1 satır) içinde.
`af9faafe9` TDV Srem ve Kalić cümlelerine dokunmuyor.

**4(c) neden sınırda:** `www.balcanica.rs` sertifika hatası, `balcanica.rs` 404, DAIS "Human Verification Required" verdi.
medievalists.net sayfası Balkan Araştırmaları Enstitüsü'nün (derginin yayıncısı) PDF bağlantısını gösterdi; metin oradan alındı. Doğrulama kapısı geçilmedi,
ama okuma engelden sonra başka sunucudan yapıldı. Kuralın "ayna" sayıp saymayacağı EMRELİC kararıdır. Listeye ihtiyaten dahil edildi.

## 2. Etkilenen, CANLIDA OLMAYAN yazımlar

Dal `origin/ekokuma-lehistan-1125` (ölçümde uç `5e69fd006`, `main`de değil; dal ölçüm sırasında hâlâ ilerliyordu).
Aşama 2 kartları (`f049e544d`, 8 kayıt) 25.11 19:48-19:51'de WebFetch ile okundu; TDV için bu, 22.11 engelinden sonradır.
25.11'de WebFetch öncesinde yeni bir engel görülmedi.

- TDV adresini kaynak gösteren **2 kart** (`data/ekokuma_dev_lehistan_01.js`): `devlehistan-hotin-1621-kim-kazandi`, `devlehistan-hotin-1673`.
- Metninde "TDV" geçen ama TDV adresi vermeyen 3 kayıt: `devlehistan-hotin-tahta-1673`, `jan-iii-sobieski` (`hukumdar_lehistan.js`), `chodkiewicz-jan-karol` (`kisi_lehistan.js`). TDV'ye bağımlılıkları **belirlenemedi** (sayıya katılmadı).
- Oturum içi denetim ajanının raporuna göre 8 kaydın hepsi zaten `teyitsiz` + `yayin_adayi:false` yapıldı (özet okuma gerekçesiyle).
- Parti 02: ajan 14 kaynağı curl ile indirdi; ilk istekte tarayıcı User-Agent'i verdiğini, varsayılan başlıkla yeniden çekimde 14/14 HTTP 200 ve aynı metin aldığını bildiriyor. O turda engel görülmedi; listeye alınmadı. Ben yeniden çekmedim.

## 3. Yolu belirlenemedi

- **Belgrad, Hrvatska enciklopedija "Beograd: 1284"** (`9354905f9`, 23.11 18:48 UTC): bu oturumda o sayfanın ilk getirilişi commit'ten SONRA (18:50). Commit anındaki okumayı kimin hangi yolla yaptığı bu kayıttan belirlenemedi.
- **Jireček s.331-333** (UMIT okuması) ve **CMH IV 1282-84** (HAVVA okuması; LAB ayrıca 22.11 11:11'de archive.org curl ile kendisi indirdi): öteki makinelerin erişim yolu bu kayıtta yok.
- **Kalić s.71** (`9354905f9`): alıntı veride önceden vardı ("okundu 15.11.2026, PDF metni"); 15.11 okumasının yolu bu oturumda yok.
- **21.11 yazımları** (kaynak borcu turları, Argos/Sudan commit'leri): bu oturum kaydında okumalarından önce Cloudflare/403/doğrulama kapısı eşleşmesi bulunmadı. Argos/Sudan kaynaklarının okunması bu kayıtta izlenemedi. Başka oturum ya da makinelerde görülmüş engel (ör. BORC B1, qdl.qa, 19.11 LAB 19) kapsam dışı.
- Tarama araç sonuçlarında anahtar sözcük eşleştirmesiyle yapıldı; WebFetch'in engel sayfasını sözcüksüz özetlediği bir durum kaçmış olabilir.

## 4. Engel görülen ama veri yazılmayan / etkilenmeyen

- **Calais, Sofala, Yarkent/Kopal** (BORC C62): veri yazılmadı. C62'deki TDV `kilve` / `hoten` tespitleri engel sonrası WebFetch okumasıdır (borç metni, veri değil).
- **Masavva** (C65): veri değişmedi.
- **Tinos/Mikonos** `d1607b9c8`, **Pag** `75267445b`, **bosna kimlik düzeltmesi** `19fd7970f`: engelden önce ya da o kaynaklarda engel görülmeden yazıldı; üçü de canlıda; listede değil.
- **KASA iniş denetimi** `3807fd886`: veri yazılmadı.
- **Avusturya ek okuma** (`origin/ekokuma-avusturya-1125`, uç `c259230df`, canlıda değil): deutsche-biographie.de'de engel görülmedi. Parti 02'nin ilk isteklerinde tarayıcıya benzeyen User-Agent kullanıldığını ajan kendisi bildirdi (engel aşma değil).

## 5. Sayım

- Etkilenen yazım: **8** = canlıda **6** (bölüm 1) + canlıda olmayan **2** (bölüm 2).
- Kayıt 4 ve 5'te Kalić yolu "sınırda"dır; 4-6 ayrıca yansıma/TDV okumasına dayandığı için sayı bu karardan etkilenmez.
- Biskra ve Kanbâyet/1297'de yazılan sahip ve yıl, engel görülmeyen archive.org metinlerine dayanıyor; engel sonrası TDV okuması yardımcı/çelişki cümlesidir. Belgrad 1319-1403'te karar iki kaynaklıdır ve biri (Kalić) 4(c)'ye bağlıdır.
