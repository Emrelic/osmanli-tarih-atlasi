# TASLAK ŞARTNAME — PUAN KAPISI YÜRÜYÜŞ SÜRESİNE BAĞLANSIN · 17 Eylül 2026

> **Durum:** TASLAK. Yazan: MOTOR-YURUYUS (1.MURAT M-4332 sevki: *"puan kapısı 200 km
> halkası: ayrı kalem olarak şartname taslağı yaz, kodlama bekle"*). Kodlama YAPILMADI.
> 1.MURAT onaylarsa `oturumlar/` altına kendi şartnamesi olarak taşınır.
> Emre'ye gidecek iki soru §6'da.

```
AD        MOTOR-PUAN (öneri)
MODEL     Opus
DAYANAK   MOTOR-YURUYUS (dal motor-yuruyus 04a9e65) — bu iş onun ÜSTÜNE kurulur
BAĞLAYICI MENZIL-KARARLARI-0912 ② (40 saat) · BES-ALTYAPI ④ (puan kuralı) · M-0706 (c)
          · M-0738 (A yorumu: puan AYNI devletten) · örtme (Emre 20-21 Ağu)
          · çölde eşik 8 (0034/H-0028)
```

## 0. Neden

`MOTOR_YURUYUS=1` ile peteğin **kendi** menzili artık yürüyüş süresi. Ama motorda düz
kilometreyle çalışan **iki kapı** kaldı (`arac/uret_petek.py`, `PUAN_HALKA`):

| Kapı | Ne yapar | Ölçüt | Son koşunun (koşu 12) kendi bilançosu |
|---|---|---|---|
| **Kesici** `_puan_bolgesi` | devletin gövdesini ≥4 puanlı bölgeyle **keser** | hücre ↔ merkez **düz km**; 0–200 = 4p · 200–300 = 2p · 300–400 = 1p; puanlar aynı devletten | 90.841.671 km²·dönem kesildi · boşalan gövde-dönemi 0 |
| **Ekleyici** `_dolgu_kumesi` | **sahipsiz** peteği ≥4 (çölde ≥8) puanlı tek devlete **katar** | sahipsiz nokta ↔ sahipli nokta **düz km**, aynı halkalar, 12 dilimli örtme | 384.220 petek-gün katıldı · 32.793 çekişmeli · çölde 32.992 takıldı |

Emre'nin kuralı (17 Eylül) *"askerî yürüyüşle en yakın · 5 günü aşmaz"* diyor. İki kapı
bugün **dağı ve nehri görmüyor**; kesici kapı ayrıca 0,05° raster kenarı çiziyor
(MOTOR-0916 ③, Çamdo "basamaklı daire").

## 1. Ölçülmüş / koddan okunmuş durum

1. **Kesici kapı, yürüyüş altında büyük ölçüde işlevsiz kalıyor** (koddan çıkarım, **ölçülmedi**):
   - Yürüyüşle korunan her hücre, sahibine ≤ 40 × 5,04 = 201,6 km-eşdeğeri uzak.
   - Sürtünme ≥ 1 ve ızgara yolu ≥ düz hat, dolayısıyla düz mesafe de ≤ ~205 km (tohum kaydırma payı ~4 km dahil).
   - 0–200 km tek başına 4 puan verdiği için kapı yalnız **200–205 km** bandında kesebilir. O bant ancak neredeyse sürtünmesiz arazide oluşur (kara medyanı 1,204).
   - ⇒ Yürüyüş açıkken kesici kapı "sahipsizlik" kararına bir şey eklemiyor; yalnız o bantta **raster basamak** üretme riski taşıyor.
   - ⚠️ Kapının ikinci işlevi, "birden çok merkezin toplamıyla 200 km ötesini tutmak", yürüyüş altında zaten imkânsız: gövde 205 km'yi aşmıyor.
2. **Ekleyici kapı sahiplik atıyor ve düz km kullanıyor.**
   - Bir dağ sırtının öte yanındaki devlet, puanı düz mesafeyle alıp sahipsiz peteği kazanabilir.
   - Yürüyüş kuralıyla çelişki buradadır.
3. **Aday nokta sayısı** (canlı veri, 3.855 yerleşim):
   - `bos:"hata"` 7 · `tur:"bolge"` (boş/devletsiz) 100 · `kur:`/`bit:` taşıyan 1.347
   - Birleşim **1.448**. Bir günde aday olan küme bunun alt kümesi.

## 2. İş

### K1 — Kesici kapı (bayrak `MOTOR_YURUYUS_PUAN=1`, varsayılan kapalı)
- **Önce ölç:** `MOTOR_YURUYUS=1` gövdesinde, kendi tohumuna düz mesafesi > 200 km olan boyalı alan (km², dünya karoları).
  - Sıfıra yakınsa → yürüyüş açıkken kesici kapı **atlanır** ve atlandığı log'a **basılır** (sessiz kapı yok).
  - Değilse → kesilen bant adıyla raporlanır, karar koordinatöre gider.
- Raster basamak üretmeye devam edecekse (atlanmazsa) poligonlaştırma MOTOR-YURUYUS'taki gibi yapılmalı: düğümleme, sonra eşyükselti ya da sadeleştirme.

### K2 — Ekleyici kapı: düz km → yürüyüş saati
- **Mesafe:** her aday sahipsiz noktadan, üretim sürtünmesi + nehir kenarı + (açıksa) 16 komşu ile **yerel Dijkstra**, **80 saatte durur**.
  - Ulaşılan tohum hücrelerinin saati kaydedilir; nokta × nokta seyrek bir matris çıkar.
  - Bu matris **tarihten bağımsızdır**, bir kez kurulur. Günlük hesap bugünkü gibi yalnız sahip ve sahipsiz kümesini değiştirir.
- **Puan halkaları:** 0–40 s = 4p · 40–60 s = 2p · 60–80 s = 1p.
  - Bugünkü 200/300/400 km'nin, MENZIL ②'nin çevirimiyle (5,04 km/saat, 40 s ≈ 201 km) karşılığıdır.
  - ⚠️ **Bu bir KARAR sayısıdır, türetilmiş değil** → §6 soru 1.
- **Örtme:** 12 dilim korunur. Dilimdeki "en yakın", **yürüyüş saatiyle en yakın** olur; açı hâlâ düz yön. Bu bir yorumdur → §6 soru 2.
- **Eşikler** değişmez: 4, çölde 8. **Çekişme** hâlâ katılmama demek.
- **Maliyet tahmini** (ölçülmedi, kaba hesap):
  - Aday başına ~16 bin kara hücresi (80 s ≈ 400 km yarıçap).
  - 1.448 aday × 16 bin × 8 komşu ≈ 185 M gevşetme. Motorun dünya Dijkstra'sı 51 M gevşetmeyi ~98 sn'de yapıyor ⇒ **~6 dk**; 16 komşuyla **~12 dk**.
  - Koşu içinde bir kez yapılır. İş parçacığıyla bölünebilir.

### K3 — Öngörü (D022, koşudan ÖNCE)
`denetim/ONGORU-MOTOR-PUAN-*.json`, ölçüm aleti koşusuz. İstenen sayılar:
1. **Ekleyici kapı, dört kesitte** (1520 · 1683 · 1800 · 1900):
   - düz km ile yürüyüş saati arasında kazananı değişen petek sayısı;
   - çekişmeye düşen petek sayısı;
   - çölde takılan petek sayısı.
2. **K1'in bant ölçümü.**
3. **En çok etkilenen 20 sahipsiz nokta**, eski ve yeni kazananlarıyla.
4. **Mazeret olabilecek kalemler:** 16 komşu açık mı · nehir özne `idare` · örtme yorumu.

### K4 — Sınav
- `denetim/ARAC-MOTOR-YURUYUS-SINAV-0917.py`'nin deseni kullanılır: motor metni aynen alınır, kutu, kilit ve damga yamalanır. Ancak kesit bu sefer **dolgu kümesinden SONRA** kesilmeli (ekleyici kapı faz-1'de çalışıyor).
  - ⚠️ Faz-1 paralel koşuyor (`MOTOR_PARALEL_ISCI`); kutu sınavında `MOTOR_PARALEL_KAPALI=1` önerilir.
- **Bayrak kapalı:** `MOTOR_YURUYUS=1` + `MOTOR_YURUYUS_16=1` tabanıyla **bit bit aynı** olmalı.
- **Bayrak açık:** öngörüyle karşılaştırılır.
- **Önerilen kutular:**
  - Hicaz–Necid (40–52°D · 18–30°K): çöl, eşik 8, `tur:"bolge"` dolguları.
  - Kafkasya (38–50°D · 38–45°K): dağ; düz km ile yürüyüş en çok burada ayrışmalı.

## 3. Sınırlar
- Çalışma MOTOR-YURUYUS dalı birleştikten sonra **ana motorda** ya da o dalın üstünde **ayrı bir worktree**'de yapılır. Tam koşuyu yalnız 1.MURAT açar.
- `data/` yazılmaz. Heredoc yok. Commit adıyla, `add`'de ve `commit`'te pathspec ile.
- **Tek değişken kuralı (D017):** K1 ve K2 aynı bayrakta olabilir, ama öngörü ikisini **ayrı** saymalı.

## 4. Dokunulmayanlar
Çöl tavanı (`COL_TAVAN_KM`) · `bos:` sınıfları (`DOLDURULABILIR_BOS`) · `kasitli_bosluk` ·
enklav kuralları · varlık epokları (`petek_epok`, M-4332: v1'de değişmiyor).

## 5. Teslim
`denetim/MOTOR-PUAN-*.md`: ne değişti · bayrak · öngörü ↔ sınav · dal ve commit.
Tahtaya: ① ölçtüğüm ② bulamadığım ③ istediğim.

## 6. Emre'ye sorular (kodlamadan ÖNCE)
1. **Halkalar:** 200/300/400 km, yürüyüşte **40/60/80 saat** olsun mu?
   - Aynı oran korunuyor, 40 saat kararı zaten var.
   - 60 ve 80 saat yeni sayılar: 7,5 ve 10 günlük yol.
2. **Örtme:** "Aynı yöndeki uzak köy katılmaz" kuralında "yakın" **yürüyüş saatiyle** mi ölçülsün, düz mesafeyle mi?
   - Önerim yürüyüş saati: dağın arkasındaki köy, düz mesafede yakın olsa da yürüyüşte uzaktır.
