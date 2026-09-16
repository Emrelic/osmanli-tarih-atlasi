# D1-TURKIYE — 29 Ekim 1923 Türkiye kara sınırı, D kategorisi · 16 Eylül 2026

Şartname: `oturumlar/D-1923-0916.md` §D1 · tanım `GORUNUM-ABCD-0916.md` · kurallar `DALGA-0052.md` §0.
Taban: 14-15 Eylül TR-1923-SINIR işi (`denetim/TR1923-SINIR-0914.md`, 28 sınır köyü).
Çıktı: `data/d_sinirlar.js` (15 kayıt) · şema `denetim/SEMA-D-0916.md` ·
üretici `denetim/ARAC-D1-URET-0916.py` · kıyas `denetim/OLCUM-D1-KIYAS-0916.json`.

## ① KAYNAKLAR — beş IBS çalışması okundu (ABD Dışişleri, kamu malı; pypdf ile tam metin)

| IBS | kesim | 29 Ekim 1923 hâli | bugüne değişim |
|---|---|---|---|
| **49** Bulgaria–Turkey (1965) | Rezve → Meriç üçlü noktası | Lozan md.2/1 · **1921'de tahdit+işaret** (Neuilly komisyonu, 320 baba) | yok; yalnız Yunan üçlü noktası 1926'da sabitlendi |
| **41** Greece–Turkey (1964) | Meriç · Arda dirseği · Bosnaköy · Meriç | Lozan md.2/2 metni; **işaret 1925-26** (Atina Protokolü 3.11.1926) | "no parts … in dispute" |
| **29** Turkey–U.S.S.R. (1964) | Kanlı Dağ → Arpaçay → Aras → İran | Moskova + Kars 1921; **işaret 1925-26** | "Since 1921 the boundary has remained unchanged" |
| **28** Iran–Turkey (1964) | Aras-Karasu → Dalamper | 1913 İstanbul Protokolü; **Ekim 1914'te işaretli, Kotur ~40 mil HARİÇ** | **1932** üç takas (Küçük Ağrı → TR · Kotur → İR · Bacirge → İR) + **1937** güney düzeltmesi |
| **27** Iraq–Turkey (1964) | Habur → İran | Lozan md.3/2 **ERTELEDİ** — hukukî hat yok | 1924 Brüksel hattı ≈ Musul vilayeti kuzey sınırı; 1926 = Brüksel + Aluman/Aşuta düzeltmesi |
| **163** Syria–Turkey (1978) | Payas → Cizre | Ankara İtilafnamesi md.8 METNİ; tahdit **1926-05-30 / 1929-06-22 / 1930-05-03** | 1939 değişiklikleri YALNIZ Hatay kesiminde (baba 230, 419); Hatay 1939'da Türkiye |

İkincil: M. Budak, *Atatürk Araştırma Merkezi Dergisi* XIII/38 (1997) s.405-406 (md.8 Türkçe) ·
TDV `lozan-antlasmasi` · `agri` · `iskenderun` · `suriye` · Lozan TTK tam metni.

🔴 **14 Eylül kaydımı DÜZELTİYORUM:** Nahçıvan teması (8 km) için *"1932 takasına bağlı, ölçülmedi"*
demiştim. IBS 29 Aras kesimini *"Türk-İran sınırının katıldığı yere"* kadar veriyor ve 1921'den beri
değişmedi diyor; 1932 takası Küçük Ağrı'nın DOĞU YAMACINDA (IBS 28 s.6). ⇒ Temas 1921'den beri var, **D**.

## ② PARÇALAR — 15 kayıt

| id | kategori | km | dayanak | not |
|---|---|---|---|---|
| d1923-tr-bg | **D** | 197 | Lozan 2/1 · IBS 49 | 1923'te zaten işaretliydi |
| d1923-tr-gr-1/-2 | **D** | 170 + 2 | Lozan 2/2 · IBS 41 · TDV | Karaağaç NE Türkiye poligonunda ✓ |
| d1923-tr-sscb-gurcistan/ermenistan/nahcivan | **D** | 235 · 243 · 12 | Moskova+Kars · IBS 29 · TDV agri | madde no'ları OKUNMADI |
| d1923-tr-ir-1/-2/-3 | **D** | 114 · 47 · 27 | 1913 Protokolü · IBS 28 | 1932/37 dışında kalan kesimler |
| d1923-tr-ir-DEGISTI-× 3 | **D-YOK** | kutu | IBS 28 s.5-6 | Küçük Ağrı · Kotur · Bacirge+1937 — 1923 koordinatı ELDE YOK |
| d1923-tr-iq-fiili | **fiili** | 277 | Lozan 3/2 · IBS 27 | şartname md.4: D OLAMAZ |
| d1923-tr-sy-dogu | **D** (sonraki tahdit) | 592 | Ankara md.8 · IBS 163 | 1923'te yalnız metin; koordinat 1926-30 tahdidinden |
| d1923-tr-sy-bati | **C** | 43 | Ankara md.8 "yaklaşık" | Payas güneyi → Meydan-ı Ekbez düz; Hatay Suriye'de |

**Geometri yolu:** "değişmedi" diyen kesimlerde NE 10m bugünkü sınır (şartname md.3). Konum hatası
ÖLÇÜLMEDİ — `kesinlik_km` 1,5-2 bir ÖLÇEK TAHMİNİ olarak işaretli. Daha ince açık veri denenmedi.

## ③ KIYAS — atlas çıktısı ile D hattı arası (2 km'de bir örnek)

🔴 **TABAN YAYINDAKİ KOŞU 11 — koşu 12 DEĞİL.** `C:/atlas-kosu12/data/donemler.js` o klasörün
git kopyası (mtime 15:52:14 = checkout 15:52:03); içindeki `URETIM_IZI`'nda `sinir_kuzey` YOK ve
`sinir_guney` 30 Ağustos'un BOŞ hâli (sha256 8c9f…). Koşu 12 (PID 6364, 15:53) henüz yazmadı.
⇒ Aşağıdaki sayılar **28 sınır köyünden ÖNCEKİ** atlası ölçüyor. Koşu 12 bitince aynı alet
yeniden koşturulmalı (alet tabanı izden kendisi söylüyor: `kiyas.taban`).

| parça | ortanca km | p90 | en kötü | ≤5 km |
|---|---|---|---|---|
| bg | 5,3 | 15,1 | 24,5 | %48 |
| gr-1 | 3,5 | 9,8 | 11,7 | %63 |
| sscb-gurcistan | 4,8 | 16,8 | 22,8 | %52 |
| sscb-ermenistan | 12,2 | 23,6 | 29,7 | %20 |
| sscb-nahcivan | 30,4 | 32,6 | 32,6 | %0 |
| ir-1 · ir-2 · ir-3 | 6,5 · 18,7 · 1,8 | 17,0 · 26,2 · 6,0 | 21,4 · 27,1 · 6,1 | %31 · %23 · %76 |
| iq-fiili | 9,6 | 18,0 | 19,9 | %30 |
| sy-dogu | 16,0 | 78,6 | 90,1 | %25 |
| sy-bati (C) | 10,4 | 16,1 | 17,2 | %26 |

⚠️ Bu ölçü "D hattının atlas TBMM gövdesinin sınırına uzaklığı"dır; 14 Eylül'deki
bisektör sapmasıyla (|d_TR−d_komşu|/2) AYNI ŞEY DEĞİL — o nokta tabanlı öngörüydü, bu çizilmiş
gövdeye ölçüm. Suriye doğusundaki 90 km, Ceylanpınar karşısında noktasızlığın ürettiği emilmedir
(14 Eylül tabanı en kötü 67,5 km bisektör).

## ④ YAPILMAYANLAR / BORÇ

- Arayüz katmanı YOK — UI'nın işi (şartname md.5). `index.html`e bağlanmadı.
- 1913 Türk-İran protokol haritası ve 1926 Ankara sözleşmesinin (LNTS 54) Payas-Meydan-ı Ekbez
  kesimi OKUNMADI ⇒ D-YOK kutuları ve sy-bati C olarak kaldı.
- Moskova/Kars madde numaraları OKUNMADI.
- Aluman/Aşuta 1926 düzeltmesinin yeri bulunamadı (fiili parçaya dahil).
- Kıyasın koşu 12 ile tekrarı — koşu bitince.
