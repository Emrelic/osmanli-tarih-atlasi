# KARADENIZ-0082 — CEVAP (parti-emrelic-0082 · 36 madde)

> İşçi: KARADENIZ-0082 · 30 Eylül 2026 · **hiçbir şey uygulanmadı**, `data/`ya dokunulmadı.
> Ölçüm aleti: `denetim/ARAC-KARADENIZ-0082-OLC.py` (evren `girdi.GIRDI_DOSYALARI`,
> 4296 nokta · 93 dosya; `_yer_ara.py`nin görmediği `isg:` alanını da okur).
> Ekran görüntülerinin tarihi ve kutusu görsellerin altındaki künyeden okundu.
> Nokta önerileri: `denetim/KARADENIZ-0082-YERLESIM-ONERI.md`.

## 0 · Dağılım
```
✗ hatali         24   H-0014 15 16 17 18 19 20 27 29 31 32 33 34 35 36 37 39 40 41 42 44 76 77 97
▷ kosu-bekliyor   5   H-0021 22 24 26 72            (noktasızlık / bölge taşması)
◔ olculemedi      2   H-0023 25
? emre-karari     5   H-0038 43 63 64 70
✔ dogru           0
∅ kapsam-disi     0
```
**Yapısal bulgu (maddelerin üçte birinin kökü):** Karadeniz kuzeyinde nokta yok denecek kadar
az. 44,3–51,5K / 28,5–46D kutusunda **71 nokta** var, **11'i `k0` bozkır dolgu noktası**.
46,2–48,6K / 29,5–34D (Yedisan + Özi + Yeni Sırbistan) kutusunda **5 nokta** var.
Atlasta **YOK:** Kişinev · Belz (Bălți) · Leova · Dubasar · Balta · Kılburun · Arabat ·
Novomirgorod · Kule (Turnu Măgurele). "Burası neden X görünüyor" sorularının çoğu buradan
çıkıyor (`CLAUDE.md §2`).

**İkinci yapısal bulgu:** 1787-1792 savaşında **Boğdan'ın işgali veride hiç yok.** Hotin
(`isg:avusturya` 1788-09-01) dışındaki bütün Boğdan noktaları 1788-1792 arasında düz `tabi:bogdan`.
TDV *yas-antlasmasi*: "yine işgal altında tutulan Memleketeyn'in geri verilmesi" ve
"Bender, Akkirman, Hocabey gibi işgale uğrayan yerlerin iadesi". Eflak'ta da yalnız Bükreş
kolunda `isg:avusturya` var (1789-11-01); Küçük Eflak (Krayova · Tırgu Jiu · Rimnik · Slatina) yok.
⇒ H-0033/35/39/40/41/42'nin ortak kökü budur.

---

## H-0014 · ✗ hatali — Don-İdil bozkırında Kırım enklavı (1736-05-02)
**Ölçüm:** Görüntü kutusu 47,2–50,6K / 39,9–45,3D. Kutudaki tek Kırım noktası
`Bozkır (Deşt-i Kıpçak)` (48,50K 42,00D, `k0`): `tabi:kirim` 1502-03-01→1774-07-21, `s:kirim`
→1783-04-19. Çevresi: `Don bozkırı (Sal)` `s:don-kazak` 1570→`s:rusya` 1721 · Çerkask aynı ·
Tsaritsyn `s:rusya` 1589 · Kalmuk bozkırı `s:rusya` 1556 · Donets bozkırı `rusya` 1721.
⇒ Görülen kırmızı çokgen **tek bir dolgu noktasının peteğidir**; komşu dört nokta Rus/Don Kazak.
**Hüküm:** Emre'nin sezgisi doğru. 1736'da Don dirseği ile İdil arası (Ilovlya · Medveditsa)
Don Kazakları ile Kalmukların bölgesiydi, Kırım toprağı değildi. TDV *kirim* hanlığın
"Deşt-i Kıpçak" üzerindeki etkisinden söz eder ama sınır çizmez. Nokta 48,5K/42D'de, yani
Don'un doğusunda duruyor: orası Kuban-Manıç hattının (Nogay) kuzeyidir.
**Öneri:** Noktanın `tabi:kirim`/`s:kirim` dönemi en azından 1721'den (komşu `Don bozkırı`
kırılması) sonra `rusya` olmalı. Ancak gün kaynağı **bulunamadı**. Komşu günü atlastan
devralınamaz (`D207`). Ya iki komşuyla aynı kaynakla kaynaklanır ya da nokta Manıç'ın güneyine
(Kuban Nogay kuşağına) taşınır. Taşımak `? emre-karari`dır, çünkü 1502-1570'teki Kırım etkisi
için bu nokta anlamlı olabilir. Koşu ister.

## H-0015 · ✗ hatali — Azak 1736 düşüşü haritada yok
**Ölçüm:** `Azak`: `OSM` 1711-07-21→1739-09-18, sonra `s:rusya`. 1736'da kırılma YOK.
Madde `olaylar_p0063.js:41` (1736-07-13, `yer_id` yok) kırılmasız duruyor.
**Kaynak:** TDV *azak*: "1736'da tekrar Rus idaresine girdi" ve "Belgrad Antlaşması'na (1739)
göre istihkâmları yıkılmak şartıyla Rusya'ya terkedildi".
**Öneri:** `isg:rusya` 1736-07-13→1739-09-18 ve `yer_id:"Azak"`. ⚠️ Gün kronoloji maddesinden
geliyor, TDV yalnız yıl veriyor; maddenin kendi kaynağı sınanmalı.
**Ek bulgu (✗):** `kronoloji_kirim.js:385` "1739-09-18 Belgrad Antlaşması ile Azak Kalesi
**geri alındı**" diyor. TDV'ye göre Azak Rusya'ya **terk** edildi, veri de öyle diyor
(`s:rusya`). Madde başlığı düzeltilmeli: "yıkılmak şartıyla Rusya'da kaldı".

## H-0016 · ✗ hatali — Özi 1737: temsil biçimi ve bitiş tarihi
**Ölçüm:** `Özi`: `s:rusya` 1737-07-11→1738-08-01, sonra `OSM`. Kırılma var, madde var
(`olaylar_ek5.js:278`, `yer_id` yok). İki kusur var:
① Savaş içi zapt **`s:`** (egemenlik) olarak yazılmış. Aynı savaşın öteki zaptları (Niş,
Belgrad 1789, Bender) **`isg:`**. Tutarlılık için `isg:rusya` olmalı.
② Bitiş: TDV *ozu*: "1739 antlaşmasıyla bütün istihkâmlarını yıktıktan sonra burayı yeniden
Osmanlılar'a teslim etti". Veri 1738-08-01 diyor. Madde (`olaylar_ek5.js:280`) `gun:"1738"`
diyor, yani **ay (08) uydurma** (`CLAUDE.md §4`: yalnız yıl biliniyorsa `YYYY-01-01`).
**Öneri:** `isg:rusya` 1737-07-11→(TDV esas) 1739-09-18. Rus tahliyesinin 1738'de olduğu
akademik kayıtla gösterilirse `? emre-karari`ya döner. TDV esastır (`§4`); bu ayrım o zaman
Emre'ye sunulur. Görünürlük sorunu için ayrıca H-0032.

## H-0017 · ✗ hatali — kamera Viyana'ya dalıyor
**Ölçüm:** `olaylar_p0063.js:43` (1737-07-14): `odak_yer:["Viyana"]`. Olay bir savaş ilanı;
anlatılan yer Sırbistan-Bosna-Eflak cephesi (madde metni: "Seckendorf Temmuz'da Niş'i aldı").
**Öneri:** `odak_yer` kaldırılmalı, yerine `odak_kimlik:"avusturya"` ya da cepheyi kapsayan
kutu konmalı (Banaluka–Niş–Vidin, ~43–46K / 16–23D). Uygulama yalnız kronoloji dosyasında,
koşu istemez; `odak_olc.py` kapısından geçmeli.

## H-0018 · ✗ hatali — sıra: Niş'in düşüşünün ayrı maddesi yok
**Ölçüm:** Maddelerin sırası doğru: 1737-07-14 → 08-04 (Banaluka) → 10-16 (Niş geri). Veride
`Niş` `isg:avusturya` 1737-07-27→1737-10-16 var. Ama 07-27 kırılmasının kendi maddesi yok;
±30 gün şartını 07-14 "savaş ilanı" maddesi karşılıyor. Harita bu yüzden Niş'in düşüşünü
Banaluka'dan önce ayrı bir madde olarak göstermiyor. Emre'nin gördüğü "sıra bozukluğu" budur.
Ayrıca 1737-08-04 Banaluka'nın iki maddesi var (`olaylar_ek5.js:279` "Zaferi" ·
`kronoloji_habsburg.js:373` "bozgunu", Habsburg bakışı). İkisi aynı gün çıkıyorsa
mükerrer görünür.
**Öneri:** Ayrı madde: "Niş'in Avusturya'ya düşüşü". ⚠️ Gün 07-27 veride var ama kaynağı
okunamadı. TDV *nis* yalnız "Rebîülevvel 1150 (Temmuz 1737)" veriyor, gün **bulunamadı**.

## H-0019 · ✗ hatali — Özi'nin işgali ve geri alınışı görünmüyor
H-0016 ile aynı kayıt. Ek olarak **görünmezliğin sebebi noktasızlık:** 1737'de Özi'nin
peteği yalnız kaleyi kapsıyor. Kılburun (karşı yaka) ve Yedisan'da nokta yok; `Yedisan bozkırı`
tek `k0` nokta. Kırılma var, ama boyanan alan birkaç km². Kılburun önerisi ONERI dosyasında.

## H-0020 · ✗ hatali — 1739-12-12 aynı enklav
H-0014 ile aynı nokta (`Bozkır (Deşt-i Kıpçak)`), aynı hüküm.

## H-0021 · ▷ kosu-bekliyor — Yelisavetgrad (1754)
**Ölçüm:** `Yelisavetgrad` `s:rusya` 1754-01-01→. Görüntüdeki kırmızı yarı saydam şerit Rus
gövdesinin üstüne biniyor. Bu, Osmanlı `BOLGELER` çokgeninin (Özi/Yedisan bölgesi) yabancı
gövdeye taşmasıdır, yani **Değişmez 8b sınıfı**. Veriyle değil koşuyla görünür/düzelir.
**Enklav görünümü:** Kale, Rus ana toprağından Lehistan (Çehrin) ve Zaporojye (mavi) ile
ayrılmış görünüyor. Sebep, Yeni Sırbistan (1752, merkezi Novomirgorod) yerleşimlerinin
**hiçbirinin atlasta olmaması**. Kale bu hattın ucunda kurulmuştu; Dinyeper'in sağ kıyısı
boyunca Kremençuk karşısına kadar Rus toprağı bitişikti. Öneri: Novomirgorod noktası
(ONERI §1).
**Çehrin (Lehistan):** Aşağıda H-0022.
**Kaynak:** Yeni Sırbistan'ın kuruluşu ve sınırı için TDV'de madde **bulunamadı**.
Akademik kaynak (ESBE «Новая Сербия») **çekilmedi**; öneri uygulanmadan önce çekilmeli.

## H-0022 · ▷ kosu-bekliyor — Çehrin Rus toprağı ile kale arasına girmiş (1769-09-19)
**Ölçüm:** `Çehrin` `s:lehistan` 1699-01-26→1793-01-23 (sağ kıyı Ukrayna; 2. Taksim ile
Rusya). Bunun kendisi makul. TDV *cehrin-seferi* 1678'i anlatır; 1699 sonrası statü için
TDV'de satır **bulunamadı**. "Araya girme" görüntüsü H-0021'deki noktasızlıktan geliyor:
Novomirgorod ve Kremençuk karşı yakası noktasız olduğu için Çehrin peteği güneye uzanıyor.
**Öneri:** Novomirgorod noktası (ONERI §1). Koşu sonrası yeniden bakılmalı.

## H-0023 · ◔ olculemedi — Rus donanmasının Ege'deki zikzak rotası (1770-07-06)
**Ölçüm:** `seferler_ok103.js` kaydı "Rus donanmasının takibi ve Çeşme baskını". Rotası,
Osmanlı çekiliş kaydının **birebir kopyası** (aynı 14 nokta + Çeşme). Kaynağı TDV *ÇEŞME
VAK'ASI*: Osmanlı donanmasının çekilişi "Sisam Boğazı'ndan Termiye, Şira ve Paros adaları
üzerinden". Yani zikzak **Osmanlı çekilişi için kaynaklı**. Rus filosunun aynı yolu izlediği
ise kaynakta yazmıyor, varsayım. Psara'nın kuzeyindeki kıvrım (25,78K 38,60D) kaynaktan
değil, `rota`nın karadan kaçınma yamasından (SEFER-OK-0075) geliyor; kaynaklı çizgi `yol`dur.
**Hüküm:** Rus rotası için ayrı kaynak **bulunamadı**. Öneri: Rus okunun `rota`sı yalnız
Anabolu → Çeşme (Sakız Boğazı) olarak sadeleştirilsin, ya da kaynak bulunana kadar "takip,
güzergâh kaynaksız" notu düşülsün.

## H-0024 · ▷ kosu-bekliyor — Yedisan'da ince kırmızı şerit (1770-08-12)
**Ölçüm:** 46,2–48,6K / 29,5–34D kutusunda 1770-08-12'de **5 nokta** var: Yelisavetgrad
(`rusya`) · `Yedisan bozkırı` (`tabi:kirim`+`isg:rusya`) · Kızıkermen · Özi · Hacıbey (üçü
`OSM`). Taralı Yedisan ile Rus gövdesi arasındaki ince kırmızı, `OSM` Özi/Kızıkermen
peteklerinin ya da Özi `BOLGELER` çokgeninin kuzeye uzanan dilidir (8a/8b sınıfı). Yedisan'ın
bütün doğu yarısını tek `k0` noktası taşıyor.
**Öneri:** Yedisan'a nokta (Balta · Dubasar · Kılburun, ONERI §2). Koşudan sonra 8b ile
ölçülmeli.

## H-0025 · ◔ olculemedi — Kızıkermen 1771'de Ruslarda mıydı?
**Ölçüm:** `Kızıkermen` `OSM` 1526-01-01→1774-07-21, 1768-74 savaşında `isg:` YOK.
Orkapı `isg:rusya` 1771-06-26.
**Kaynak:** TDV *kirim* Kaynarca'da Kılburun, Kerç ve Yenikale'nin Rusya'ya geçtiğini sayar;
Kızıkermen için 1771 işgal kaydı **bulunamadı**. ⚠️ Ayrıca şu da ölçülmedi: kalenin 1700
İstanbul Antlaşması'ndan sonra ayakta olup olmadığı (Dinyeper kalelerinin yıkımı). Nokta
1700-1774 arasında `OSM` olarak anakronik olabilir. TDV'de *kazikerman/kizikerman* maddesi
aranmalı (bu oturumda aranmadı).

## H-0026 · ▷ kosu-bekliyor — Arabat · Kerç · Yenikale · Taman temsili (1771)
**Ölçüm:** Madde 1771-06-29 (`olaylar_p0065.js:21`). Kerç, Yenikale ve Taman'da `isg:rusya`
1771-07-12'den başlıyor (13 gün, ±30 içinde). **Arabat'ın noktası yok**, yani maddenin baş
öznesi haritada boyanamıyor. ⚠️ Madde "Kerç, Yenikale, Taman: Temmuz 1771, gün bilinmiyor"
diyor ama kırılmalar 1771-07-12 günlü. Bu günün kaynağı okunamadı: ya sahte kesinlik ya da
kaynağı kayda yazılmamış.
**Öneri:** Arabat noktası (ONERI §3). 07-12 gününün kaynağı sınanmalı.

## H-0027 · ✗ hatali — 1771-07-01 çoklu teyit
| alt soru | hüküm |
|---|---|
| Deşt-i Kıpçak bozkırı Kırım'ın mı | **✗** H-0014: Don doğusundaki `Bozkır (Deşt-i Kıpçak)` noktası |
| Zaporojye Seçi statüsü | **? emre-karari** · veri `s:zaporojye` 1552→1775-06-16, bağımsız renk (`#2048c8`). 1734'ten sonra Yeni Seç Rus himayesindeydi; TDV'de Kazak maddesi **bulunamadı** (*kazaklar* = Kazaklar/Kazakistan). Seçenekler: (a) bugünkü gibi kendi rengi (tâbi mekanizması yalnız Osmanlı için var) · (b) 1734'ten itibaren `rusya`. (b) Yelisavetgrad "eksklavını" kendiliğinden kapatır |
| Çehrin kimin | ◔ `lehistan` (1699→1793) makul, TDV satırı bulunamadı (H-0022) |
| Yelisavetgrad eksklav | ▷ H-0021, Yeni Sırbistan noktasızlığı |
| Hotin'e Lehistan üzerinden mi | **✔** Hotin Dinyester'in güney kıyısında. Kuzeyi Podolya (Kamaniçe) 1699→1793 Lehistan'dı. TDV *hotin*: Golitsın 1769'da, Leh yenilgisinin ardından kaleyi zaptetti. Rus ordusu Leh toprağından geçti; atlas doğru |
| Kızıkermen · Camboyluk · Yediçkul | Kızıkermen ◔ (H-0025). Camboyluk ve Yediçkul `tabi:kirim`, 1770-74'te `isg:` yok. Yedisan ve Bucak'ın 1770 Rus himayesine geçişi veride var (`isg` 1770-08-12), Camboyluk ile Yediçkul'unki **yok**. TDV *kirim* dört Nogay kolunu sayar ama geçiş tarihini vermez: **bulunamadı**, TDV *nogaylar* aranmalı |

## H-0029 · ✗ hatali — Kaynarca'dan sonra Kırım'ın güney kıyısı hâlâ "Rus işgalinde" (1775-04-29)
**Ölçüm:** Güney kıyısı noktaları (Kefe · Sudak · Aluşta · Yalta · Balaklava · Mankup ·
İnkirman): `OSM` →1783-04-19 **ve** `isg:rusya` 1771-07-01→1783-04-19. Buna karşılık iç
kısım (Bahçesaray, Akmescid…) 1774-07-21'de `s:kirim` oluyor ve `isg`i bitiyor.
**Kaynak:** TDV *kirim*: Kaynarca m.3, "Kırım, Bucak, Kuban… tam mânasıyla müstakil"; Rusya'ya
yalnız Kerç, Yenikale ve Kılburun. TDV *kefe*: "İkinci Rus saldırısı ve işgali 1777'de
gerçekleşti". Demek ki birinci işgal arada bitmişti.
**İki kusur:** ① 1774-07-21 sonrası güney kıyısı `OSM` kalamaz, `s:kirim` olmalı (Kaynarca).
② `isg:rusya` 1771→1783 kesintisiz, TDV ise 1777'de *ikinci* işgalden söz ediyor.
**Öneri:** 7 nokta: `OSM` 1774-07-21'de biter → `s:kirim` 1774-07-21→1783-04-19. `isg:rusya`
1774-07-21'de biter. 1777 yeniden işgali gün kaynağı bulununca eklenir (TDV yalnız yıl veriyor).
⚠️ Ek: TDV *kirim* ilhakı "8 Nisan 1783" veriyor, veri 1783-04-19 kullanıyor. Bu, 8 Nisan
Jülyen'in Gregoryen karşılığı, yani tutarlı; ama kayıtta "Jülyen 8 Nisan" notu yoksa eklenmeli.

## H-0031 · ✗ hatali — Rumyantsev'in Mogilev geçişi (1788-07-01) okla gösterilmiyor
**Ölçüm:** `savaslar.js` 1788 için yalnız Potemkin → Özi okunu içeriyor (f 1788-06-04).
Rumyantsev'in Ukrayna ordusunun seferi **yok**.
**Öneri:** Yeni sefer kaydı Mogilev (48,45K 27,80D; maddenin `yer_kon`u) → Hotin yönü / Boğdan
içi. Uç noktalar ve günler kaynaktan: madde "1 Temmuz 1788 (Jülyen 20 Haziran)" diyor, kaynağı
maddede. Varış noktası için kaynak **bulunamadı**, uydurulmamalı. Kaynak yoksa ok yalnız geçiş
noktasında kısa tutulur.

## H-0032 · ✗ hatali — Özi 1788'in düşüşü haritada görünmüyor
**Ölçüm:** `Özi` `s:rusya` 1788-12-17→ (kırılma var, madde var, `yer_id:"Özi"` var). Görünmemesinin
iki sebebi var: ① Petek yalnız kaleyi kapsıyor, Yedisan'ın geri kalanı `Yedisan bozkırı` (`OSM`
1783→1792) ve Hacıbey'de kalıyor (noktasızlık). ② Özi Yaş'a (1792-01-09) kadar hukuken Osmanlı'ydı
(TDV *ozu*: "1792 Yaş Antlaşması'yla resmen Rusya'ya bırakılan Özü"). 1788-12-17→1792-01-09 bu
yüzden `isg:rusya` olmalı (taralı), `s:` değil.
**Öneri:** `isg:rusya` 1788-12-17→1792-01-09, sonra `s:rusya`. Kılburun noktası (ONERI §2).
Koşu ister.

## H-0033 · ✗ hatali — Fokşani (1789-08-01): Boğdan'ın işgali yok · ok Rus toprağından başlamıyor
**Ölçüm:** 1789-08-01'de Boğdan'da (15 nokta) `isg` yalnız Hotin'de (`avusturya`). Yaş · Roman ·
Birlad · Kahul · Kalas · Soroka düz `tabi:bogdan`. TDV *yas-antlasmasi*: Memleketeyn işgal altında
tutuldu (yukarı §0). Ok (`savaslar.js:992`, Fokşani→Rimnik) Fokşani'de başlıyor.
**Öneri:** Boğdan'a 1788-1792 `isg` (rusya/avusturya). Hangi noktanın hangi gün, kimin işgaline
geçtiği için gün kaynağı **bulunamadı** (TDV *bogdan* ve *yas-antlasmasi* gün vermiyor). Bu,
tek oturumluk bir kaynak işidir, önerim ayrı paket. Ok için Suvorov'un Fokşani'ye hareket
noktası (Birlad bölgesi) kaynaklanırsa `yol` başa uzatılır; kaynaklanmazsa bugünkü hâli
dürüsttür.

## H-0034 · ✗ hatali — Avusturya Bükreş'e nereden geldi; Küçük Eflak işgali eksik (1789-11-01)
**Ölçüm:** `isg:avusturya` 1789-11-01'den itibaren yalnız Bükreş kolunda. Krayova · Tırgu Jiu ·
Rimnik (Vâlcea) · Slatina `tabi:eflak`, işgalsiz. TDV *zistovi-antlasmasi* barış görüşmeleri
sırasında Avusturya'nın Bükreş'i ve Krayova'yı tuttuğunu anlatıyor.
**Güzergâh sorusu:** TDV Coburg'un Bükreş'e hangi yoldan geldiğini **vermiyor** (◔). Fokşani ve
Rimnik muharebelerine Coburg Boğdan tarafından katıldı (`savaslar.js:992`). Bükreş'e Braşov
geçidinden değil kuzeydoğudan inmiş olması beklenir; bu bir çıkarımdır, hüküm değildir.
**Öneri:** Küçük Eflak'a `isg:avusturya` (gün **bulunamadı**).

## H-0035 · ✗ hatali — Bender (1789-11-14): öteki işgaller görünmüyor
**Ölçüm:** Bender `isg:rusya` 1789-11-14 ✓ var. Eksikler: Akkirman (1789, H-0038) · Hacıbey
(TDV *yas-antlasmasi* "Hocabey… işgale uğrayan yerler"; veride `OSM` →1792-01-09 düz) ·
Boğdan (H-0033) · Özi `s:` (H-0032).
**Öneri:** Hacıbey'e `isg:rusya` 1789→1792-01-09 (gün **bulunamadı**). Geri kalanı ilgili
maddelerde.

## H-0036 · ✗ hatali — Eski Orsova doğrudan Avusturya rengine geçiyor (1790-04-16)
**Ölçüm:** `Orsova (Eski Orsova)`: `OSM` →1790-04-16, sonra `s:avusturya` →1918. Aynı savaşın
öteki zaptları (Belgrad, Semendire, Bükreş) `isg:avusturya` →1791-08-04.
**Kaynak:** TDV *zistovi-antlasmasi*: Eski Hırsova 16 Nisan 1790'da düştü. Barışta "Çerna ve
Eski Hırsova bölgesinin tahkim edilmemek kaydıyla terki". ⇒ Orsova Avusturya'da **kaldı**
(sonuç doğru) ama 1790-04-16→1791-08-04 arasında durumu işgaldi.
**Öneri:** `isg:avusturya` 1790-04-16→1791-08-04, sonra `s:avusturya`.
**Emre'nin "işgal ile ele geçirme farkı" sorusu:** Atlasta `isg:` savaş içinde fiilen tutulan
ama hukuken devredilmemiş toprak demek (taralı). `s:` antlaşma ya da kalıcı ilhakla gelen
egemenlik (düz renk). Bu yerde de aynı ayrım: savaşta işgal, Ziştovi'den sonra egemenlik.

## H-0037 · ✗ hatali — Özi'nin düşüşü (1788-12-17)
H-0032 ile **aynı madde, ikinci bildirim** (kronolojide yalnız `olaylar_ek.js:70`; `paket_01.js`
paket kopyası). Hüküm ve öneri H-0032.

## H-0038 · ? emre-karari — Akkirman 1789 (TDV yalnız yıl)
**Ölçüm:** `Akkirman` `isg:rusya` yalnız 1770-10-09→1774 ve 1806→1812. **1789 işgali YOK.**
Madde (`olaylar_p0068b.js:71`) `t:"1789-01-01"`.
**Kaynak:** TDV *akkirman*: "1770 ve 1789 yıllarında iki defa Ruslar tarafından kuşatılarak ele
geçirildi". Gün **bulunamadı** (ESBE «Аккерман» denendi, çekilemedi, HTTP 404).
**Seçenekler:** (a) `isg:rusya` 1789-01-01→1792-01-09. §4'e uygun ama kırılma gerçek zapttan
~9 ay önce düşer ve Kalas/Fokşani/Rimnik'ten önce taralı görünür. (b) Gün kaynağı
bulunana kadar kırılma yazılmaz, madde kırılmasız kalır (2t borcu). Öneri: (b) + kaynak ara.
Rus kaynağında gün aranmalı; beklentim Ekim 1789, ama bu ölçülmedi.

## H-0039 · ✗ hatali — Kalas bozgunu (1789-05-01): önceki topraklar işgalde mi?
**Ölçüm:** `Kalas` 1789'da `tabi:bogdan`, `isg` yok. Yaş · Roman · Birlad da işgalsiz.
**Hüküm:** Evet. Tuna'nın ağzındaki Kalas'ta yapılan bir muharebe, kuzeyindeki Boğdan'ın
müttefik (Rus/Avusturya) denetiminde olduğunu gösterir. TDV *yas-antlasmasi* Memleketeyn'in
işgalde tutulduğunu söyler. Veride işgal yok (H-0033 kökü). Gün kaynağı **bulunamadı**.

## H-0040 · ✗ hatali — Fokşani (1789-08-01): kuzeyi işgalde mi?
H-0039 ve H-0033 ile aynı kök. Fokşani Boğdan-Eflak sınırında; kuzeyi (güney Boğdan) veride
işgalsiz.

## H-0041 · ✗ hatali — Boğdan kırmızı görünüyor (1789-08-01)
H-0033 kökü: Boğdan'ın 1788-92 işgali veride yok.

## H-0042 · ✗ hatali — Rimnik (1789-09-22): kuzey kırmızı
H-0033 kökü. Görüntüde yalnız Hotin taralı; Bender'in taralısı 1789-11-14'te başlıyor.

## H-0043 · ? emre-karari — İsmail iki maddede: 1789-10-11 "teslim" ve 1790-12-22 "düşüş"
**Ölçüm:** `olaylar_p0068b.js` 1789-10-11 "İsmâil Kalesi'nin teslimi (1789)" (kaynak TDV
*yusuf-pasa-koca*) ile `olaylar_ek5.js:300` 1790-12-22 düşüş. Veride İsmail'in `isg`i yalnız
1790-12-22'de başlıyor, yani 1789 maddesi **kırılmasız**.
**Kaynak çelişkisi (TDV tuzağı ⑥):** TDV *ismail--ukrayna* 1789'da bir zapt **kaydetmiyor**.
1789 için Gazi Hasan Paşa'nın Rusları püskürttüğünü, 1790-12-22'de de kalenin düştüğünü yazıyor.
TDV *yusuf-pasa-koca* ise "11 Ekim'de İsmâil ve 14 Kasım'da Bender". Maddenin kendi `ic_not`u
da "kalenin arada nasıl geri alındığı TDV'de açıklanmıyor" diyor.
**Seçenekler:** (a) 1789 maddesi kalır, kırılma yazılmaz; çelişki madde metnine yazılır.
(b) Madde kaldırılır, çünkü İsmail maddesi zaptı reddediyor. (c) 11 Ekim 1789'un aslında
Akkirman'ın teslimi olduğu (H-0038) bir kaynakla gösterilirse madde Akkirman'a aktarılır.
Bu bir **hipotezdir, ölçülmedi.** Öneri: (a), (c) araştırılsın.
**Kili:** Veride `isg:rusya` 1790-10-24 ayrı bir kayıt; mükerrer değil.

## H-0044 · ✗ hatali — Potemkin'in ölümünde kamera fazla iniyor (1791-10-16)
**Ölçüm:** `olaylar_p0068b.js:90` `odak_yer:["Yaş"]`. Madde yer olarak "Boğdan" diyor; olay
Yaş'a giderken yolda (Nikolaşet yolu) oluyor ve anlamı diplomatik.
**Öneri:** `odak_kimlik:"bogdan"` ya da Yaş–Kalas–Bender'i kapsayan kutu. Koşu istemez; `odak_olc` kapısı.

## H-0063 · ? emre-karari — 1806-12 Rus işgallerini tek tek mi, tek maddede mi?
**Ölçüm:** 1806-1812 `isg:rusya` başlangıç günleri: 1806-11-30 (Boğdan, 11 nokta) ·
1806-12-25 (Eflak, 11 nokta) · 1809-09-26 İsmail · 1809-12-02 İbrail · 1810-06-10 Silistre ·
1810-09-26 Rusçuk · 1810-09-27 Yergöğü · 1810-10-01 Niğbolu. Bu 8 kırılma günü Değişmez 2
gereği ±30 gün içinde maddeli.
**Seçenekler:** (a) Bugünkü gibi her kırılmaya ayrı madde. Değişmez 2 bunu zaten zorunlu
kılıyor, harita ile kronoloji birebir doğrulanıyor. (b) Tek özet madde. Değişmez 2'yi yalnız
özetin günüyle karşılar, öteki 7 kırılma "sessiz" kalır ve kapı ihlal verir.
Öneri: (a), ayrıca savaş başlangıç maddesine adım adım özet cümle (H-0064'teki fikir).

## H-0064 · ? emre-karari — Eflak-Boğdan'daki ilerlemenin adım adım tarihi tek maddede
H-0063 ile aynı karar. Ölçüm: Boğdan 1806-11-30 (Mihelson Yaş'a, `savaslar.js:996` f 1806-11-24),
Eflak 1806-12-25. İki adım zaten ayrı maddeli. Emre'nin önerisi (b)-benzeri **ek** bir özet
madde olarak eklenebilir, ayrı maddeleri silmeden.

## H-0070 · ? emre-karari — Karadeniz kuzeyi 1281-1923 baştan sona denetimi (kapsam)
Bu bir madde değil bir **program**: Volga batısı–Karpat doğusu–Kiev hizası, 642 yıl, çok
dilli kaynak çaprazlaması. Ölçüm: kutuda 71 nokta, 11'i `k0` bozkır dolgusu. Bu paketteki
36 maddenin ~12'si doğrudan bu seyreklikten doğdu.
**Seçenekler:** (a) Ayrı bir paket açılsın ("KARADENIZ-KUZEY-DERİN"): önce yüzyıl yüzyıl
nokta envanteri (şehrin kaynakta ilk anılışı), sonra `k0` noktalarının statü denetimi.
(b) Bu paketin ONERI'siyle yetinilsin. Öneri: (a). `ONCELIK.md` sırası koordinatörde.

## H-0072 · ▷ kosu-bekliyor — Prut çizgisi ile boya örtüşmüyor (1814-01-28)
**Ölçüm:** Yeşil çizgi Prut; 1812 Bükreş sınırı (TDV *bogdan*: "Boğdan'ın doğu kısmı… Rusya'ya
bırakıldı"; TDV *hotin*: "Dinyester ve Prut arasında kalan araziyle"). Çizginin doğusundaki
kırmızı dil, Prut'un doğusunda yerleşim olmamasından geliyor. **Kişinev · Belz (Bălți) · Leova ·
Ungheni atlasta YOK**; Orhei (28,82D) ile Prut (~28,1D) arası boş, o yüzden Yaş peteği Prut'u
aşıyor. Emre'nin tahmini doğru: çizgi doğru, boyama yanlış.
**Öneri:** Kişinev · Belz · Leova (ONERI §4). Bu, çizginin değil boyanın düzelmesidir. Koşu ister.

## H-0076 · ✗ hatali — 1828-05-07 Prut geçişi okla gösterilmiyor
**Ölçüm:** `savaslar.js` ve `seferler*.js`de 1828 ilkbahar Memleketeyn seferi **yok**
(yalnız `seferler_sefer_ok_0075.js` 1828-10, başka harekât). Veride işgal var: Yaş/Kalas/Bükreş
`isg:rusya` 1828-05-07.
**Öneri:** Sefer kaydı Prut geçişi → Yaş → Bükreş. Uç noktaların günü kaynaktan; kaynağı
bulunamayan ara durak yazılmaz.

## H-0077 · ✗ hatali — Eflak'ın içinde iki "Rus yeşili" alan (1829-09-14)
**Ölçüm:** İki alan **İbrail** ve **Yergöğü (Giurgiu)** petekleri. Bu iki nokta 1829-09-14'te
`s:eflak` oluyor (`renkler.py:1942` `#4db34d` yeşil; Rusya `#4f7d4f`, göz ayırt edemiyor).
Eflak'ın **bütün öteki noktaları** `tabi:eflak` (açık Osmanlı) ve 1834-01-01'e kadar
`isg:rusya`. Evrende 1700 sonrası `s:eflak`/`s:bogdan` yazılmış **yalnız bu iki nokta** var.
Yani Rusya değil, Eflak'ın bağımsız renginde boyanıyorlar ve tâbi Eflak'tan kopuklar.
**Kaynak:** Edirne 1829 ile İbrail, Yergöğü ve Kule kazaları Eflak'a iade edildi, Eflak Osmanlı
tâbiiyetinde kaldı. TDV *bogdan*: Ruslar Memleketeyn'i tazminat ödenene kadar işgalde tuttu.
**Öneri:** İbrail ve Yergöğü 1829-09-14→1878-07-13 `v` `kid:"eflak"` (Bükreş gibi) + `isg:rusya`
1829-09-14→1834-01-01 (Kalas/Bükreş ile aynı uç). Ayrıca 1859-01-24'teki `s:romanya` da
tâbi olmalı (Kalas 1878'e kadar `tabi:bogdan`). Ek olarak **Kule (Turnu Măgurele)** noktası
yok (ONERI §5); ilk alanın büyüklüğü bundan. Koşu ister.

## H-0097 · ✗ hatali — Yergöğü ve İbrail neden Rus toprağı (1836-06-01)
H-0077 ile aynı iki nokta, aynı hüküm. 1836'da işgal de bitmişti; iki nokta düz `s:eflak`
yeşiliyle Rusya gibi görünüyor.
