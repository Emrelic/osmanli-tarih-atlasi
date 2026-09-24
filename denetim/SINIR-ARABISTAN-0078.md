# SINIR-ARABISTAN-0078 — Arabistan 1923 sınır hatları (Faz 1) · rapor

24 Eylül 2026 · şartname `oturumlar/BITIR-1923-0078.md` · dosyam `data/d_sinirlar_arabistan.js`
(değişken `window.D_SINIRLAR_ARABISTAN`, **bağlanmadı** — §4 ② ③ koordinatörün).

## 1. Açılış ölçümü — 1923-09-01'de kapsamda ne vardı

Alet: `denetim/SINIR-ARABISTAN-0078-olc.py` (kutu 34–60°D · 12–32,5°K, bütün `d_sinirlar*.js`).
- Okunan kayıt 718. Kutuda aktif, çizilen hat **13** (3.378 km). Arap yarımadasına ait olanlar: Irak–Necid (C, 3 kayıt,
  1.061 km) · Necid–Küveyt (E, 3 kayıt, 240 km) · Filistin/Ürdün kenarı (C/D).
- 🔴 **İlk taramam 3 kaydı KAÇIRDI**: `hat:null` yer tutucularını (sınıf YOK) kutu testine sokmuyordu —
  `d1923-iq-kw-DEGISTI` (komsu), `d1923-necid-kuveyt-tarafsiz-guney` ve `d1923-aden-yemen-FIILI` (ortadogu).
  `grep` ile bulundu. "Kapsamda yok" demek yanlış olurdu.

## 2. Ukayr 1922 — milimetrik mi kaba mı: İKİ KOL FARKLI

| kol | metin neyle tarif ediyor | hüküm | veride |
|---|---|---|---|
| Irak–Necid | adlı kuyu/tepe zinciri (Vukube, Ensab, Cümeyme, Ukbe, Anaze dağı) | **kaba = C** | C ✓ |
| Necid–Küveyt | düz hat + 1913 sözleşmesinin **yarım dairesi** (geometrik tarif) | milimetriğe yakın; E savunulabilir | E |
| Necid–Tarafsız Bölge güneyi | adlı yerler (eş-Şak → Ayn el-Abd → Ras el-Mişab'ın kuzeyi) | **kaba = C** | YOK → **C (yeni)** |

Dayanak: IBS 111 s.11 — *"actual demarcation on the ground … has not been accomplished"*; IBS 103 s.4 (Küveyt kolu metni).
Not: Necid–Küveyt E kayıtlarının kendi notu "1922'de yerinde işaret YOK" diyor ve yayın yarıçapı sayıyla değil adlı
iki uçla (Hor Zübeyr, Kureyn) veriliyor. E'de bırakmak bir yorumdur; hüküm ortadogu dosyasının sahibinde/koordinatörde.
**Dörtlü nokta üç kayıtta üç ayrı koordinat taşıyor:** komsu 46.5525/29.0897 · ortadogu 46.5509/29.1139 · IBS 111
46.5553/29.1014 (benim kaydım bunu kullanıyor). Aralarındaki en büyük fark ~2,7 km.

## 3. Yazdıklarım — 2 kayıt, ikisi de C

| id | çift | f | km | dayanak |
|---|---|---|---|---|
| `d1923-iq-kw-1923` | Irak–Küveyt | 1923-04-19 | 199,2 | CRS 91-34F (gün) · IOR/L/PS/12/3737 f.232r (tarif metni) · TDV kuveyt |
| `d1923-necid-kuveyt-tarafsiz-guney-C` | Necid–Tarafsız Bölge | 1922-12-02 | 106,9 | Ukayr metni (IBS 103 s.4) · GeoNames çıpaları |

- Irak–Küveyt: geometri NE bugünkü hat; tarifin 4 çıpası hatta karşı ÖLÇÜLDÜ (Safvan 2,7 km · Cebel Senâm 3,1 km ·
  Ümmükasr 2,9 km hattın kuzeyinde = "Irak'a bırakılır" ✓). 1921-08-23 → 1923-04-19 arası belge YOK ⇒ A/B.
- Tarafsız güney: önceki yer tutucu "Ayn el-Abd'in koordinatı BULUNAMADI (GeoNames'te yok)" diyordu. **GeoNames SA
  dökümünde VAR:** 110711 ‘Ayn al ‘Abd, kuyu, 28.2344K/48.2715D. Arama çevriyazıma takılmış olmalı.

Denetim: `denetle.py` SONUÇ temiz — ⚠️ ama `denetle.py` `d_sinirlar*` okumuyor (grep 0), yani benim dosyam için
hiçbir şey söylemiyor. Asıl sınav: `ARAC-MILIMETRIK-0923.js` kopyası + benim ailem (araca DOKUNMADIM) →
① anakronizm 0 · pencere bozuk 0 · hayalet taraf 0 · iki kaydım "f dayanaksız" ve "② aday" listelerinde YOK.

## 4. Şerit ölçümü (§5.4, 5 km, 1923-09-01)

Alet: `SINIR-ARABISTAN-0078-govde.js` + `-serit.py`. B9 sınavı: Riyad→suud, Küveyt→kuveyt, Basra→Irak, Körfez→su ✓.
Ters çevirme sınavı: iq-kw'de %52,5 → %47,5 (bütün örnekler DOĞRU/KARŞI arasında el değiştirdi = alet ateşliyor).

| kayıt | ÖNCE | SONRA | yanlışın cinsi |
|---|---|---|---|
| d1923-iq-kw-1923 (C) | %52,5 | %52,5 | KARŞI 19 — Küveyt gövdesi Bâtın'ın batısına, Irak gövdesi kuzey Küveyt'e (29.95/47.3) taşıyor |
| tarafsiz-guney-C (C) | %0 | %0 | 11/11 Necid yakası **Küveyt** boyalı |
| kutudaki 13 hat toplam | %32,5 | %49,8 (E yaslama benzetimi, üst sınır) | BOŞ %27,8 · KARŞI %8,8 · ÜÇÜNCÜ %13,7 |

C renk oranını artırmaz (§1.3) — beklenen ve gerçekleşen: ÖNCE = SONRA.

## 5. Faz 1 şart ① — kara komşusu her çift: kayıt ya da beyan

Komşuluk gövdelerden ÖLÇÜLDÜ (`-komsuluk.py`, 1923-09-01, 22 gövde, 31 temas; kapsam dışı olanlar çıkarıldı):

| çift (harita) | kayıt | beyan |
|---|---|---|
| Irak × Küveyt | **C yeni** | — |
| Küveyt × Necid | E ×3 + **C yeni** | — |
| Irak × Necid | C ×3 (komsu) | 🔴 haritada TEMAS YOK: hat boyunca 134/134 örnek BOŞ (§6-a) |
| Hicaz × Necid (~977 km) | — | **belge bulunamadı ⇒ A/B.** Anlaşma metni bulunamadı; IBS 111 s.10 yalnız 1919 Turabe yenilgisini ve 1924-25 fethini anlatıyor, hat anmıyor |
| Hicaz × Ürdün | — | **A/B.** IBS 60: Hicaz–Ürdün batı kesimi hiç anlaşılmadı; İngiltere sonradan tek taraflı çizdi (1927 Cidde notaları), Hicaz reddetti |
| Hicaz × Filistin (Akabe) | — | **A/B.** Aynı sebep (IBS 60) |
| Necid × Ürdün | — (haritada temas yok) | **A/B.** İlk belge Hadda 1925-11-02 (IBS 60) — ⚠️ TDV çelişkisi §7 |
| Necid × Katar | — | **A/B.** Belge bulunamadı (TDV katar 1919-26: 0 cümle) |
| Necid × Yemen | — | **A/B.** 1923 için belge bulunamadı (TDV suudi-arabistan yalnız 1926 Türk aracılık girişimini anıyor; sonraki antlaşmayı bu oturumda açmadım) |
| İngiltere (Aden) × Yemen | YOK (ortadogu) | **A/B kalır.** 1902-05 İngiliz-Osmanlı işaretlemesinin sütun koordinatları BULUNAMADI; İmam 1934'e kadar tanımadı ⇒ C'nin "iki taraf" satırına da girmiyor |
| İngiltere (Sahil/Aden) × Umman | — | **A/B.** Belge bulunamadı |
| İngiltere × Kesîrî · × Kuaytî · Kesîrî × Kuaytî | — | **A/B.** Himaye içi; devletlerarası hat belgesi bulunamadı |
| Bahreyn | — | kara sınırı yok (ada) |

## 6. A katmanı bulguları — benim dosyam değil, sahibine/koordinatöre

- **a) Irak–Necid hattı boşlukta.** 1923-09-01'de hattın iki yanında hiçbir gövde yok (134/134 BOŞ; Hafar el-Bâtın,
  30.5/42, 29.8/44 noktalarında gövde yok). Vâdî Sirhân, Widyân, Nuhayb sahipsiz noktalar (kasıtlı çöl dolgusu mu, ölçmedim).
- **b) Küveyt gövdesi Necid'e taşıyor:** kuveyt sınır kutusu 46.05–48.62°D · **27.67**–29.80°K; 28.0/47.5 ve 28.1/48.0
  (Necid) Küveyt boyalı. Tarafsız Bölge'nin tamamı ve güneyi Küveyt.
- **c) Hicaz gövdesi Negev'e giriyor:** Hicaz × Mısır teması 30.03K/34.56D'de — Filistin mandasının güneyi Hicaz boyalı
  (filistin-misir 18, filistin-urdun 27 örnek ÜÇÜNCÜ:hicaz).
- **d) Hicaz içinde İngiltere parçası:** 20.14K/40.41D'de bir `ingiltere` gövdesi Hicaz'a değiyor (iç bölge; ölçmedim neden).
- **e) Kesîrî × Kuaytî gövdeleri ÜST ÜSTE:** örtüşme ~2,98 derece² (~35.000 km²) — gövde çakışması (CLAUDE §3).
- **f) Hudeyde 1923'te İdrîsî'nin, haritada Yemen:** TDV hudeyde: *"1921'de Asîr Emîri … İdrîsî'nin, onun 1923'te
  ölümünden iki yıl sonra da İmam Yahyâ'nın kontrolüne geçen Hudeyde"*. `devletler.js`te İdrîsî Asîr künyesi YOK
  (id taraması: `idris` 0). Bahreyn (Manama) `ingiltere` boyalı, oysa `bahreyn` künyesi var.

## 7. Kaynak çelişkisi — TDV × IBS 60

TDV suudi-arabistan: *"1922'de İngilizler'in gözetiminde yaptığı anlaşmalarla Irak, Doğu Ürdün ve Küveyt sınırları
belirlendi."* IBS 60 (1965): Necid–Ürdün doğu ve orta kesimleri **1925**'te (Hadda, 2 Kasım 1925) anlaşıldı. Cümle üç
sınırı tek yıla topluyor; Irak ve Küveyt için doğru (Ukayr), Ürdün için belge yok. 1923'e hat ÇİZMEDİM (TDV hat
vermiyor; çizilecek metin yok). Hüküm koordinatörün.

## 8. Önerilen kronoloji maddesi (dosyası benim değil)

`1923-04-19` · taraflar irak-kralligi, kuveyt · tur antlasma · b: *"Irak–Küveyt sınırı tarif edildi — Yüksek Komiser
Cox, Küveyt şeyhinin sorusuna 1913 İngiliz-Osmanlı hattını teyit eden notayla cevap verdi"* · kaynak CRS 91-34F +
IOR/L/PS/12/3737 · `olaylar*` ve `kronoloji*`de 1923-04-1x Irak/Küveyt maddesi YOK (grep, 24 Eyl).
