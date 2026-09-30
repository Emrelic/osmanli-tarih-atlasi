# YERLESIM-1281-ONCE — 1281 öncesi yerleşim ÖNERİSİ

*Oturum YERLESIM-1281-ONCE · 30 Eylül 2026 · ÖNERİ — `data/`, `arac/`, git'e dokunulmadı,
`denetle.py` koşturulmadı.* Makine okur: [`YERLESIM-1281-ONCE-ONERI.json`](YERLESIM-1281-ONCE-ONERI.json).
Araçlar: `denetim/ARAC-YERLESIM-1281-ONCE-A.py` (bugünkü ilk dönem + önbellek cümleleri) ·
`-B.py` (el değiştirme fiilli döküm) · `-C.py` (sınıflandırma + sınav) · `-D.py` (eksik + yoğunluk).
Başlangıç: [`ONCE1281-YERLESIM-0930`](ONCE1281-YERLESIM-0930.md) — ölçümü **tekrarlanmadı**, 162
`var-aday` üstüne kuruldu. Evren: `GIRDI_DOSYALARI` **93** · **4296** nokta · künye **878**
(`girdi.oku_devletler`) · 162 adayın 162'si atlasta adıyla bulundu.

## Özet
| Sınıf | Nokta | Ne demek |
|---|---|---|
| **A · dönem-ekle** | **23** (30 dönem) | TDV cümlesi el değiştirmeyi ADIYLA ve YILIYLA veriyor; sahip atlasın 1281 sahibiyle aynı polity; dönem 1281-01-01'e bitişik |
| **B1 · sahip çelişkisi** | 20 | TDV, atlasın **1281 dönemiyle** çelişiyor — sorun geriye uzatmada değil, 1281'in kendisinde |
| **B2 · epok / künye geçişi** | 26 | son el değiştirme belli ama sahibi ≠ atlasın 1281 sahibi (çoğu Selçuklu↔İlhanlı) ya da yıl kesin değil |
| **D · red** | 15 | 0930'un `var-aday` cümlesi o noktanın 1000-1280 varlığını KANITLAMIYOR |
| **C · yalnız varlık** | 78 | varlık cümlesi var; 1281 öncesi SAHİP önbellekte **bulunamadı** |

**③ Sınav — üç soru + künye penceresi + mevcutla çakışma:** 30 önerilen dönemde **ihlal 0**.
Sınav iki yönde koşuldu: `mentese {1261→1281}` → *pencere* (künye 1280) ✓ öttü · Tebriz tipi
`{1514-09-06→1514-09-06}` → *sıfır* ✓ öttü · `ceneviz` → *künye yok* ✓ öttü · `selcuklu {1233→1281}` → temiz ✓.

## A — 23 temiz öneri (JSON `donem_ekle`)
Selçuklu: Kütahya 1233 · Isparta 1204 · Antalya **1216-01-22** · Uşak 1182 (*türetildi: 1180+2, ic_not'ta*).
Karaman 1256. İznik devleti → Bizans (iki dönem, geçiş `1261-07-25`): İznik · Manisa (1204 → künye günü
1204-04-13 devralındı, §4) · İzmit 1228 · Gelibolu 1235 · Dimetoka 1246 · İstanköy 1258.
Tekirdağ bizans 1275. İstanbul latin **1204-04-13** → bizans **1261-07-25** (iki gün de TDV'de).
Trabzon-Rum 1204: Trabzon · Giresun · Rize. Memlük: Antakya **1268-05-18** · İskenderun 1268 · Rakka 1260 ·
Baalbek 1260. İlhanlı 1258: Şehrizor · Vâsıt · Bağdat.

⚠️ **"Bizans" ≠ `bizans`:** TDV 1204-1261 arası İznik devletine de "Bizans" diyor (İzmit 1228, Dimetoka
1246, İstanköy 1258). Doğru kimlik `iznik-imparatorlugu` — `bizans` yazılsaydı künye kapısı ÖTMEZDİ
(bizans künyesi 330-1461 sürekli) ve hata sessiz kalırdı.
⚠️ `1261-07-25` iznik→bizans geçişi künye günüdür, kaynak değil; aynı polity sürüyor (§3.5 sınıf ②).
Koordinatör isterse tek `bizans` dönemine birleştirebilir.

## B1 — 20 nokta: atlasın 1281 dönemi TDV ile çelişiyor 🔴
En sert dördü — Haçlı kıyısı 1281'de **Memlük değil**:
| Nokta | atlas @1281 | TDV | künye |
|---|---|---|---|
| **Akkâ** | memluk | 1191 teslim, Henri de Champagne | `kudus-kralligi` → 1291-05-18 |
| **Beyrut** | memluk | 1197 Haçlılar yeniden zaptetti, Kudüs Kr. | aynı |
| **Sayda** | memluk | 1261 Templier'lere teslim | aynı |
| **Trablusşam** | memluk | "Haçlılar'ın elinde iken … 1201" | `trablus-kontlugu` → 1289-04-26 |
Ötekiler: Kirman (`kutlughanli` künyesi VAR, TDV Kutluğ Terken 1257-1283) · Harput (artuklu; TDV 1234
Selçuklu) · Diyarbakır (artuklu; TDV 1259 Selçuklu'ya geri verildi) · Ahıska (gurcistan; TDV 1268
atabegler, `samtshe-atabegligi` VAR) · **Ankara (`ahiler` künyesi 1290'da başlıyor — 1281'de künye
aşımı)** · Alanya/Silifke (karaman) · Herat (kert?) · Hama (eyyubi-hama?) · Yezd · Tire · Eskişehir ·
Alaşehir · Besni · Sisam/Midilli (**`ceneviz` devletler.js'te künye olarak YOK**).
⇒ Bunlar geriye uzatma değil **1281 düzeltmesi** — `§3.5 ters yön`: iki uç da ölçülmeli. Değişmez 2s
senkronunu etkiler; işçiye değil sınır oturumuna.

## B2 — 26 nokta: epok ve künye geçişi
**Selçuklu → İlhanlı çatlağı:** atlas Anadolu'da 60 noktayı 1281'de `ilhanli` başlatıyor; TDV'nin son el
değiştirmesi ise Selçuklu'ya (Erzincan 1228 · Erzurum 1202 · Van 1232 · Bitlis 1232 · Malatya
**1201-06-23** · Kemah 1228 · Samsun 1194 · Bayburt 1202). `{→1281 selcuklu}` önerilirse **1281-01-01'de
kronolojisiz sahte kırılma** doğar (Değişmez 2). Bayburt'ta TDV açıkça "1243'ten sonra Selçuklu
idaresinde kaldı" diyor → atlasın 1281 `ilhanli`si ile doğrudan çelişki.
🔴 **Koordinatör kararı gerekiyor:** Kösedağ sonrası Anadolu = `selcuklu` + `v:ilhanli` mı, `ilhanli` mı?
Karar verilmeden bu 8 + 60 noktaya dönem yazılmamalı.
**Moğol İmp. → Hanlık geçişi:** Kaşgar 1218 · Semerkant 1220-03 · Taşkent 1220 · Hucend 1219 ·
Serahs/Nahçıvan 1221 · Merâga 1231 · Amasya 1243 → `mogol-imparatorlugu` (1206-1260) sonra
`cagatay`/`ilhanli`; geçiş günü yalnız künyeden gelir.
**Yıl kesin değil (yazılmadı, §4):** İsfahan 1235/36 · Hasankeyf h.629 · Erbil "1258'den sonra" · Balat
"1273'e doğru" · Nusaybin "yüzyıl ortası". **Bölge hükmü:** Muğla (Karya 1261) şehre taşınmadı.

## D — 15 red (0930 `var-aday` tuzakları)
Yenişehir (Bursa) + Köprühisar: cümle **Tesalya Yenişehri** (Larissa, Bohemund 1082) — §4 ② ·
Çanakkale, Bartın, Şırnak: yöre · Tokat: **MÖ** 1200 elenmemiş · Revan h.1025 · Rodos h.1178 ·
Osmancık h.1117 · Basra, Tûs: sayı · Ladik: Amasya maddesi · **Ahar: `karadag` = Karadağ (Montenegro)** ·
Kilise: Kudüs kilisesi · Türkistan: cümle devleti tarihliyor.
⇒ 0930'un 15'lik örneklemi 13/15 isabet demişti; tam okumada 162'nin **15'i (%9)** yanlış.

## ② Eksik noktalar — 9 (JSON `eksik_nokta`)
🔴 **Koordinatların hepsi YAKLAŞIK, kaynak değil** — akademik gazeteer bu oturumda da **bulunamadı**.
| Ad | Kaynak | Dönem önerisi | Yakın mükerrer |
|---|---|---|---|
| Fîrûzkûh | TDV `gurlular` (firuzkuh 302): "Seyfeddin Sûrî zamanında (1146-1149) … kuruldu" | `gurlu` · kur yılı belirsiz → yazılmaz | Herat 213 km |
| Ani | TDV `kars` (ani 302): 962 Bagratlı merkezi · "Ani emîrleri olan Şeddâdîler" | `seddadiler-ani` 1064-1175 | Kliçatak 14,7 km |
| Otrar | **bulunamadı** (otrar, otrar--sehir, farab 302; arama boş) | — | Türkistan 50 km |
| Rey | TDV `rey` | ayrı nokta → Tahran peteği bölünür, karar | Tahran 12 km |
| Fustat | TDV `fustat` | **ayrı nokta önerilmez** — Kahire'yi uzat | Kahire 5,4 km |
| Polonnaruva · Kumbi Salih · Tula · Chaco | TDV kapsamı dışı, akademik kaynak **aranmadı** | seylan-sinhala · gane/susu · toltek · ata-pueblo | 69–124 km |
Ad taraması: `data/ad_esanlam.js`te dokuzunun hiçbiri yok. 3 km'de: 0 (0930 ölçümü; Fustat 5,4 en yakın).

## ④ Yoğunluk hükmü
0930'un `§5` tablosu (1281 kesiti A = 2673 nokta, iyimser) geçerli; kanıtlı küme **163 → 148** (15 red)
küçüldüğü için çekirdekteki B-yoğunluğu **yalnız kötüleşir** (yeniden koşulmadı). Temiz dönem önerisi
kova başına: Anadolu 16/87 · Irak 4/13 · Suriye 3/15 · **İran 0/17 · Mısır 0/5 · Mâverâünnehir 0/10.**
**Sıra (Emre için):**
1. **Açılabilir:** Balkan · Batı/Orta Avrupa · Britanya · İskandinav · Kafkas · İber (A eşik üstü < %3).
   İş yoğunluk değil, 1281 dönemini gerçek sahiplerle bölmek.
2. **Önce Selçuklu/İlhanlı kararı + B1 düzeltmesi, sonra:** Anadolu · Levant · Irak.
3. **Yetersiz:** İran · Mısır · Mâverâünnehir+Horasan (kaynaklı sahip önerisi **0**) · Hindistan · Çin ·
   Kore/Japonya · Ada GD Asya · Sahra-altı · Amerika · Sibirya · Avustralya. Pencere buralarda açılırsa
   kenar petekleri yayılır (§6).

## M-5694 gözden geçirmesi (TDV slug bulgusu)
Başlık araması (`ajax_search_auto.php`) ile yeniden denendi: **otrar** 0 başlık · **firuzkuh** 1 başlık
(`emiri-firuzkuhi` = şair, yanlış madde) · **ani** 150 başlık, `ani` ile başlayan yer maddesi yok.
Nitelikli slug: `ani--sehir`, `ani--kars`, `otrar--kazakistan` → 302. ⇒ Üçü için hüküm değişmedi;
Fîrûzkûh `gurlular`, Ani `kars` kapsayıcı maddesinden kaynaklı kalır, Otrar `bulunamadı`.

## Bulunamayanlar
78 noktanın 1281 öncesi sahibi (önbellekte 1180-1280 el değiştirme cümlesi yok; canlı TDV'de
okunmadı) · akademik koordinat kaynağı · Otrar TDV maddesi · TDV dışındaki 4 eksik nokta için
akademik kaynak · B-yoğunluğunun yeniden ölçümü.
