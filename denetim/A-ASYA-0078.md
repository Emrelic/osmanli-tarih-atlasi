# A-ASYA-0078 — 1923 A katmanı: Yunnan GB · Pamir · Borneo · Timor · Sahalin

Şartname `oturumlar/BITIR-1923-0078.md` §3.2 · koordinatör YILDIRIM BAYEZIT · 24 Eylül 2026.
Dosyam: `data/yerlesimler_a78_asya.js` → `window.YERLESIMLER_A78_ASYA` (66 kayıt) — **BAĞLI DEĞİL**
(`arac/girdi.py GIRDI_DOSYALARI` + motor koşusu koordinatörün).

## 1. ÖNCE — ölçüldü (1923-09-01, son üretim `devletler_harita.js`)
Alet `denetim/A-ASYA-0078-olc.py` — 0,1° kara ızgarası, her hücrenin hangi yabancı gövdede olduğu
(`DEVLET_PARCALAR` + `DEVLET_PARCA_HALKA`, `js/app.js parcaCoz` ile aynı çözüm).
**Pozitif kontrol (B9):** Kunming → cin-cumhuriyeti · Kuçing → sarawak-brooke · Dili → portekiz ·
Taşkent → sovyet-rusya ✓ (ilk sürümde halka tablosu atlanmıştı, alet çöktü — sessiz yanlış değil).

| kutu | kara hücresi | GÖVDESİZ | nokta (önce) |
|---|---|---|---|
| Yunnan-GB 21–26,5K 97,5–104D | 3.575 | **%60,7** | 4 |
| Pamir 36,5–39,6K 71–75,6D | 1.426 | **%95,4** | 0 |
| Borneo | 6.099 | **%53,1** | 10 (Kuzey Borneo'da 0) |
| Timor | 274 | **%27,4** (+ Oecussi Hollanda boyalı) | 3 |
| Sahalin | 946 | **%42,0** | 2 |

## 2. SONRA — MOTOR KOŞMADI, yalnız VEKİL
Motor koşusu koordinatörün. Vekil (`A-ASYA-0078-uret.py --olc`): 200 km tavanlı en-yakın-nokta,
sürtünme/kıyı YOK — **motor değildir, yalnız yön**. Boş: Yunnan %14,7→%0,5 · Pamir %49,6→%0,0 ·
Borneo %36,1→%4,1 · Timor %0→%0 (vekil Timor kusurunu GÖRMÜYOR: kusur sahiplik, boşluk değil) ·
Sahalin %2,1→%0,0. Gerçek ÖNCE→SONRA koşudan sonra `A-ASYA-0078-olc.py` ile ölçülür.

## 3. Eklenenler (66)
Yunnan 16 (Tengyue · Yongchang · Shunning · Mianning · Jingdong · Chuxiong · Yuanjiang · Lin'an ·
Tonghai · Mengzi · Kaihua · Ning'er · Chiang Hung · Lijiang · Lashio · Namkham) · Pamir 12 (Horog ·
Kala-i Vamar · İşkâşim · Kala-i Pençe · Serhad · Kal'a-i Hum · Pamirski Post · Taşkurgan ·
Feyzâbâd · Gunt/Karakul/Alay dolgu) · Borneo 16 · Timor 10 · Sahalin 12 (4 dolgu).
`tur:"bolge"` = kuruluşu bulunamayan yerde dolgu/bağlayıcı nokta.

## 4. denetle.py (dosya bellekte bağlı: `A-ASYA-0078-denetle.py`)
| | bağsız | bağlı |
|---|---|---|
| Değişmez 1 sahipsiz | 299 | **299** (yeni sahipsiz 0) |
| 1b / 2 / 2i / 4 / 4c / 5 | ✓ | ✓ aynı |
| 2s KAPSAM DIŞI | 567 | 597 (+30, hepsi Osmanlı küresine >2014 km) |
| 2s YIL-TEMSİLÎ BORÇ | 152 (tavan 151 ZATEN aşık) | 153 (+1, hangi kaydım olduğu teşhis EDİLMEDİ) |
| **Değişmez 7** | 673 | **687 (+14)** ✗ |
| konum | 0 | 0 (6 nokta maske önerisiyle düzeltildi) |

**Değişmez 7 +14 kalem kalem** (`--ayrinti` diff): ilk yazımda +55'ti; Tonghai (Kunming↔Lin'an),
Gunt/Karakul/Alay (Horog↔Murgab↔Oş), Niah (Bintulu↔Baram), Sahalin 4 dolgu ve `enklav:true`
beyanları (Kuzey Yuan Yunnan'ı 1368–82 · Lifau · Atapupu 1818 · Labuan) ile indi. Kalan:
- **7 = BENİM KAYDIM DEĞİL, görünür oldu** (yeni komşu → `cografi-tecrit` muafiyeti düştü):
  Külâb/Hisar ×3 (1370 timurlu · 1500 buhara · 1920 sovyet) · Andican grubu 1500 buhara ·
  Kupang 1653 · Alor 1653 · Dili 1769.
- **5 benim:** Feyzâbâd 1584 buhara (293 km) · Feyzâbâd 1859 afganistan (315 km — Afgan
  noktaları seyrek) · Shunning 1873 `__BOSLUK__` · Shikuka 1869 / Maoka 1870 `__BOSLUK__`.
- **2 `__BOSLUK__` yan etkisi:** Dilem · Havta 1819 (ana `__BOSLUK__` gövdesi değişti).

## 5. Koordinatöre bulgular (başkasının dosyası — dokunmadım)
1. **Kunming + Dali `yuan-hanedani` 1368-09-14 → 1382'yi AŞIYOR** (künye 1368-09-14'te kapanıyor).
   Doğrusu `kuzey-yuan` (Liang prensi). Benim noktalarım `kuzey-yuan` — ikisi düzelmezse Yunnan
   1368–82'de iki renk. (4c'de zaten sayılıyor olmalı.)
2. **Yunnan Cumhuriyet'e geçişi 1911-10-30** (Kunming Chongjiu ayaklanması), atlas 1912-02-12
   kullanıyor (Kunming emsali — ben de uydum, fark bildirilir).
3. **Bhamo 1885-11-28 → Gazetteer 'occupied by us on the 28th December 1885'**; Myitkyina'da
   düzenli İngiliz idaresi ~1891 (Scott & Hardiman I.1 s.347). `yerlesimler_gdasya.js`.
4. **Kuzey Sahalin 1920-07-03 → 1925-05-15 Japon işgali** (FRUS 1921 II 656 · FRUS 1925 II 563):
   Aleksandrovsk'ta `isg` yok; benim Kuzey Sahalin noktalarıma da YAZMADIM (2i evrenine kırılma
   sokmamak için) — karar koordinatörün.
5. **Kuzey Borneo künyesi YOK** (M-5141): 5 kayıtta geçici `ingiltere`. Künye açılırsa
   (`harita:"ingiltere"`) id değişir, geometri değişmez. Sandakan 1878-01-22'den başlıyor.
6. **`timor-beylikleri` künyesi 1769-10-10'da kapanıyor** — iç liurai'ler 1860'a (hatta 1906–12
   pasifikasyonuna) dek sürüyor; iç noktalarda 1769–1860 `__BOSLUK__`. Sınıf ② (künyeyi genişlet)
   adayı.
7. **Pingnan künyesi 1873-01-15'te kapanıyor**, Tengyue 1873-08-02'ye, Shunning 1873-04-25'e dek
   Pingnan kalıntısında (清史稿 卷22) — arada `__BOSLUK__`.
8. **Lashio/Namkham `san-devletleri`** (Kengtung emsali); sınır hattı tarafı `ingiliz-hindistani`.
   Seçenek B (1888 → ingiliz-hindistani) hükmü koordinatörün.

## 6. Bulunamadı
Tawau · Keningau · Beaufort · Lahad Datu · Tanjung Selor · Long Iram · Puruk Cahu kuruluşu
(akademik) · Hunza/Baltit günleri (yalnız Vikipedi) · Kefamenanu/Soe (1920'ler yol kasabası) ·
Longling/Simao (yakın, konmadı) · Esutoru kuruluşu · orta Kalimantan (0..-1K 112–115D) noktası ·
Pamir 1918–20 fiilî denetim · Buhara'nın sağ yakayı fiilen devraldığı gün · 1659 Qing günü
(Yunnan doğusu için Kunming günü "gün komşudan" yazıldı).

## 7. Kaynak disiplini
Araştırma 4 paralel alt ajanla yapıldı (Opus). Her dönemde `kaynak:` dolu; 清史稿/明史 günleri KAYIT
günü ve ay takviminden ÇEVRİLDİ (kaynak alanında yazılı); 1582 öncesi Jülyen. Yalnız ipucu olan
günler (Vikipedi/haber) yazılmadı, YIL yazıldı ve `kesinlik:"yil"` konuldu.
Dosyalar: `A-ASYA-0078-noktalar.json` (girdi) · `-uret.py` (üretici+sınav) · `-olc.py` · `-denetle.py`.
