# KRONO-ONCE1281-1010-C — Değişmez 2s, 1281 öncesi, C kolu (4 birim)

UMIT · 10 Ekim 2026 · görevlendiren UMIT İRTİBAT (koordinatör onaylı) · model: **opus**
Şartname: `oturumlar/KAMPANYA-SUMER-2000.md` + görev mesajı.

## Taban
- Ölçüm worktree'si `C:\atlas-umit-krC`, **origin/main `f0b6fd50`** (detached), mutlak yollar.
- İş sürerken origin/main **`60b7731c`**'ye ilerledi. Arada değişen dosyalar yalnız
  `denetim/ARAC-HARITA-DURUM-0074-KABARTMA-SINAV.py` · `denetim/ARAC-UYGULA4-ONSINAV-0918.py` ·
  `denetim/SINAV-DONEM-KAYNAK-0907.py` · `oturumlar/HUKUM-KASA-1010.md`.
  `data/` ve `arac/denetle.py` **aynı** (`git diff --stat` boş) ⇒ ölçüm 60b7731c için de geçerli.
  `data/olaylar_once1281_c.js` adı 60b7731c'de **yok** (çakışma yok).
- `C:\atlas`a yazılmadı · commit/push/stash/add yok · tuz dosyalarına dokunulmadı.

## Öngörü (ölçümden ÖNCE yazıldı)
4 birimin 4'ü kapanır · bu diff tek başına 2s AÇIK 193 → 189 · 2 / mükerrer / 2t değişmez.
**Sonuç: TUTTU** (aşağıda). Öngörmediğim tek şey: 2sk tavanı +6 aşılıyor (aşağıda §Yan etki).

## Birimler — kaynak (TDV, 10 Ekim'de GET 200, alıntılar AYNEN)

| birim | kırılma (veriden) | madde | kaynak |
|---|---|---|---|
| **1258-02-10 Bağdat** | `—` → `ilhanli` | "Halife Müsta'sım Moğollara teslim oldu; Bağdat İlhanlı Hülâgû'nun eline geçti" · yer_id Bağdat | `bagdat`: *"İki yıl sonra 10 Şubat 1258’de Moğollar Bağdat’a saldırdılar; Halife Müsta‘sım kayıtsız şartsız teslim oldu …"* · `mustasim-billah`: *"… 4 Safer 656 (10 Şubat 1258) tarihinde üç oğluyla beraber teslim oldu."* — GÜN |
| **1260-09-03 Ba'lebek · Halep · Rakka** | `ilhanli`/`—` → `memluk` | "Aynicâlût Savaşı: Memlük ordusu Moğolları bozdu, Suriye Memlük hâkimiyetine geçti" · yer_id Halep, gövdede üç ad | `memlukler`: *"… Aynicâlût Savaşı’nı kazandı (25 Ramazan 658 / 3 Eylül 1260) ve Suriye’nin büyük kısmı Memlükler’in eline geçti."* · `halep`: *"Aynicâlût Savaşı’nda mağlûp olan Moğollar Halep’i Memlükler’e bıraktılar (1260)."* · `balebek`: *"… Kutuz’un Aynicâlût’ta kazandığı zafer üzerine Memlükler’in idaresine girdi."* · `rakka`: *"Aynicâlût Savaşı’nın (658/1260) ardından Memlükler’in hâkimiyetine geçen Rakka …"* — savaş GÜN, şehirlerin geçişi YIL ("ardından"); madde bunu açıkça söylüyor |
| **1261-07-25 İznik→Bizans (9 yerleşim)** Dimetoka · Gelibolu · Kavala · Manisa · Vodina · İstanbul · İstanköy · İzmit · İznik | `iznik-imparatorlugu` (İstanbul: `latin-imparatorlugu`) → `bizans` | "İznik birlikleri İstanbul'u Latinlerden geri aldı; Bizans İmparatorluğu yeniden İstanbul merkezli oldu" · yer_id İstanbul | `bizans`: *"… İznik birlikleri 25 Temmuz 1261’de İstanbul’a girerek Latin Devleti’nin hâkimiyetine son verdiler. İstanbul Bizans İmparatorluğu’nun yeniden başşehri olurken …"* · `iznik`: *"… 1261 yılında İstanbul’un geri alınışına kadar devam eden Laskaris hânedanı döneminde Bizans’ın devlet ve kilise merkezi oldu …"* — GÜN |
| **1268-05-18 Antakya** | `antakya-prinkipsligi` → `memluk` | "Memlük Sultanı Baybars Antakya'yı aldı; Antakya Prinkepsliği sona erdi" · yer_id Antakya | `antakya`: *"… Memlük Sultanı Baybars Antakya’yı kuşatma altına aldı. 18 Mayıs 1268’de yapılan bir genel hücum sonunda surlardan içeri girildi …"* · `baybars-i`: *"Nihayet 1268 Nisan ayı başlarında Antakya’ya hücum etti …"* (başlangıç ayı; çelişki DEĞİL) — GÜN |

📌 Görev mesajı 1261 birimini "4 nokta" diye verdi; rapor satırı `gosterilecek[:4]` ile **ilk 4'ü** basıyor.
Kovada gerçekte **9 yerleşim** var (yukarıda). Tarih ancak dokuzu da açıklanınca kapanıyor.

Atlas kaydı dayanak yapılmadı (D207): "1098'den beri" gibi künye günleri gövdeye yazılmadı.
TDV tuzağı: `latin-imparatorlugu` slug'ı **302 (ölü)**; kullanılmadı.
TDV iç tutarsızlık (bildirim, düzeltmedim): `mustasim-billah` halifenin öldürülüşünü
"20 Muharrem 656 / 27 Ocak 1258" diye veriyor, yani teslimden (10 Şubat) ÖNCE. Bu maddede kullanılmadı.

## Kuyruktaki karşılıklar (Yol 1'den önce ölçüldü)
D2 evreninde (`olaylar*.js` + `kronoloji_sinir*.js`, 86 dosya) 1257-1269 arasında **0 madde** var.
Dört birimin en yakın maddesi "Ahî Evran" (4611-8361 gün uzakta). Kuyrukta karşılığı olanlar:
- Bağdat: `kronoloji_cok_once1281_ortadogu.js:177` (1258-01-22 kuşatma, yer_id Bağdat) · `kronoloji_iran_ardillari.js:206` (1258-02-10 "Bağdat'ın zaptı")
- 1260: `kronoloji_cok_once1281_ortadogu.js:180` · `kronoloji_iran_ardillari.js:218` (Aynicâlût, ikisi de 1260-09-03)
- 1261: `kronoloji_cok_once1281_anadolu.js:2507` (1261-08-15 taç giyme; `ic_not` İstanbul'un geri alınışını AYRI olay sayıyor) · İstanbul 1261-07-25 maddesi kuyrukta **yok** (yalnız `devletler.js` künye kronolojisinde)
- 1268 Antakya: kuyrukta **bulunamadı** (yalnız `devletler.js:9898` künye kronolojisi)

## YOL 1 — teslim edilen (diff)
**Yazılan dosya: `data/olaylar_once1281_c.js` (YENİ, `window.OLAYLAR_ONCE1281_C`, 4 madde).**
A ve B kollarıyla aynı dosyaya yazmamak için ayrı dosya seçildi.
⚠️ **index.html'e ve paketlere BAĞLANMADI** (bağlamak koordinatörde). `denetle.py` dosyayı `olaylar*.js` globuyla okuyor;
ekrana düşmesi için bağ gerekiyor. Bağlanmazsa `odak_olc` *"diskte var, tarayıcı YÜKLEMİYOR"* uyarısı basar (ölçüldü).
app.js süzgeci `OLAYLAR_ONCE1281_C`yi kabul ediyor (`/^OLAYLAR(_[A-Za-z0-9_]+)?$/`).

`PYTHONHASHSEED=0 py arac/denetle.py --ayrinti`, önce ve sonra (özet satırlarının tam farkı):
```
2s   önce 193 AÇIK (tavan 193) · 793 KAPSAM DIŞI · 228 YIL-TEMSİLÎ
     sonra 189 AÇIK (tavan 193) · 793 KAPSAM DIŞI · 228 YIL-TEMSİLÎ
2sk  önce 4237 = YER 2122 + TARAF 2115 · görünür+maskeli 2265 (tavan 2265) 🧊
     sonra 4251 = YER 2130 + TARAF 2121 · görünür+maskeli 2271 (tavan 2265) ⚠️
Değişmez 1/1b/1c/2/2i/2t · mükerrer · öteki satırlar: BİREBİR AYNI
çıkış kodu: önce 2 · sonra 2. İkisinde de sebep D8 ÖLÇÜLEMEDİ (`devletler_harita.js` taze worktree'de yok); benimle ilgisi yok
```
① **Kapananlar (adıyla):** 1258-02-10 Bağdat ✓ · 1260-09-03 Ba'lebek/Halep/Rakka ✓ · 1261-07-25 (9 yerleşim) ✓ · 1268-05-18 Antakya ✓
② **Açılan:** 2s'de 0 yeni açık (AÇIK listesi önce/sonra karşılaştırıldı; 4 tarih düştü, eklenen yok) · 2: 0 · mükerrer: 95 → 95 · 2t: aynı ·
   **odak** (index.html'e GEÇİCİ bağla ölçüldü, sonra geri alındı): 4/4 KONUMLU · ODAKSIZ 0 · kırık atıf 0 · TOPLAM ✓.

### Yan etki: 2sk +6 (ihlal değil, sınıfı istenir)
Kapanışın kolu birim birim:
```
YER   Bağdat · Ba'lebek · Halep · Rakka · İstanbul (yer_id) · İznik (başlık) · İzmit (merkez İstanbul) · Antakya   = 8
TARAF Dimetoka · Gelibolu · Kavala · Manisa · Vodina · İstanköy                                               = 6
```
**SINIF:** bu 6 yerleşimde 1261-07-25'te **yer olayı yok, künye ardıllığı var.** Veri iki ayrı künye kullanıyor
(`iznik-imparatorlugu` → `bizans`); TDV `iznik` ise bunu **aynı Bizans devletinin** merkezinin İznik'te olduğu dönem diye anlatıyor.
`D205` sınıfı ② "aynı polity sürüyor" gibi görünüyor. Altı yerin adını maddeye yazmak (`D261` çaresi) kaynakta karşılığı
olmayan bir iddia olurdu, bu yüzden yazmadım. Taraf kolu bu kırılmanın GERÇEK sınıfını doğru söylüyor.
⇒ 2sk tavanı (2265) bu diff ile 2271'e çıkar, ya da künye modeli (iki künye mi, tek künye mi) koordinatör hükmüyle değişir.

🔴 **Bu sayaca (2s AÇIK) 3 diff dokunuyor (A/B/C), tek başına ölçüm yapmadım.** Yukarıdaki 193 → 189 YALNIZ benim diff'imin
izole etkisidir, toplam/tavan önerisi DEĞİLDİR. 2sk'ye de muhtemelen birden çok kol dokunuyor; +6 da izoledir.

## YOL 2 — kuyruğu D2 evrenine katmak (ÖNERİ değil, ÖLÇÜM; uygulanmadı)
Bellekte, `olaylari_yukle()` + 8 kuyruk dosyası (`kronoloji_cok_once1281_{afrika,anadolu,avrupa,dogu_asya,hint_amerika,iran,ortadogu}.js`
+ `kronoloji_iran_ardillari.js`), diskte değişiklik yok. Araç: `degismez2(s, yer_sarti)` + `kapsam_disi` + `yil_temsili_ayir`
+ `mukerrer_maddeler` (denetle.py'nin kendi işlevleri). Bu kısmi ölçümdür: 2t, odak ve D2 d/v ÖLÇÜLMEDİ.
```
                     O     2s AÇIK  KAPSAM DIŞI  YIL-TEMSİLÎ  mükerrer
taban              2223      193        793         228         95
YOL 2 (yalnız)     3342      191        794         216        148   ← +53 mükerrer
YOL 1 (yalnız)     2227      189        793         228         95
YOL 1 + YOL 2      3346      188        794         216        150   ← benim 2 maddem kuyrukla ÇİFT olur
```
Yol 2 benim 4 birimimden **yalnız Bağdat'ı** kapatıyor:
- 1260: `eksik=['Rakka']`. Kuyruk maddesi Rakka'yı anmıyor, başlıktaki "Memlükler" ise `memluk` adayıyla kelime sınırında eşleşmiyor.
- 1261: 7 yerleşim eksik kalıyor.
- 1268: açık kalıyor (kuyrukta madde yok).

Yol 2 genelde (2s): kapanan 1097-06-19 İznik · 1204-04-13 (4 yer) · 1258 Bağdat · 1260 (3 yer) · açılan 1204-04-13 (3 yer) · 1260 Rakka
(kovalar kısmen kapanıp eksikle yeniden açılıyor) ⇒ net −2.
Mükerrer +53 ve +2 çift (Yol 1+2 birlikteyken): `1260-09-03 Aynicâlût (benim)` ↔ ortadogu `Aynicâlût: Memlükler Moğolları yendi` ve ↔ iran_ardillari `Aynicâlût — Moğol ilerleyişi …`.
⇒ **Önerim: Yol 2 ŞİMDİLİK HAYIR.** Ölçülen kazanç küçük (−2), ölçülen bedel büyük (+53 mükerrer). Yol 2 bir gün kabul edilirse
benim 1260 maddem kuyruktaki iki Aynicâlût maddesiyle çift olur ve tek maddeye indirilmesi gerekir.

## ölçtüm · bulamadım · istiyorum
- **ölçtüm:** 4/4 birim kapandı (14 yerleşim: 8 YER + 6 TARAF), izole 2s 193 → 189 · 2, mükerrer, 2t, odak temiz · Yol 2 izole −2 AÇIK / +53 mükerrer.
- **bulamadım:** 1268 Antakya için kuyrukta madde (`devletler.js` dışında hiçbir yerde yok) · 1261 için TDV'de Dimetoka/Gelibolu/Kavala/Manisa/Vodina/İstanköy'ün
  1261'de el değiştirdiğini söyleyen cümle (`gelibolu`, `dimetoka`, `kavala` gövdelerinde "1261" geçmiyor; ölçüldü).
- **istiyorum:** ① diff'in inmesi ve dosyanın index.html'e/pakete bağlanması (koordinatör) ② 2sk +6 için hüküm: tavan 2271 mi, yoksa
  `iznik-imparatorlugu`/`bizans` künye modeli `D205` ② olarak mı ele alınacak ③ Yol 2'nin şimdilik reddi.

## YENİ DOSYALAR:
- `data/olaylar_once1281_c.js` (diff içinde · git'te YOK, iniş koordinatörde)
- `denetim/KRONO-ONCE1281-1010-C.diff` (C:\atlas-umit, izlenmiyor) · LF, BOM yok, CR 0 · temiz ağaçta `git apply --check` ✓;
  uygulanan dosya, CR'ler çıkarılınca yazılan dosyayla birebir (worktree'de `core.autocrlf=true` LF'yi CRLF'ye çeviriyor, fark yalnız bu)
- `denetim/KRONO-ONCE1281-1010-C.md` (bu dosya)
