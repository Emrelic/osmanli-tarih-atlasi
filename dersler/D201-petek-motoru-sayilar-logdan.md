# Petek motoru — tek zayıf nokta ve logdan gelen sayılar

> Kimlik `D201` · `CLAUDE.md §2` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 2. Petek motoru — ve tek zayıf noktası

Sınırlar elle çizilmez, hazır atlas kesitlerinden de gelmez. Her yerleşim
çevresindeki toprağı temsil eden bir **petek** (Voronoi hücresi) sahibidir. Petek
sınırı komşuların tam ortasından geçer, sonra gerçek kıyı çizgisine, nehir yataklarına
ve dağ sırtlarına yaslanır, Chaikin ile yumuşatılır, Natural Earth kara maskesiyle
kesilir, **705** göl çıkarılır (28 modern baraj gölü KASTEN bırakılır — anakronik delik açıyorlardı). Bir yerleşim el değiştirince peteği bütün olarak değişir.

> ⚠️ **BU PARAGRAFTAKİ SAYILAR KOŞUNUN LOGUNDAN GELİR, ELLE YAZILMAZ.**
> 2 Eylül 2026'da **beşi birden** bayat çıktı ve hepsini bir işçi oturum
> (OPUS HAZIR KITA 107) koşan üretimin **kendi logundan** ölçtü:
> ```
> göl              89 →  705      nehir parçası   187 →  293  (211 adlı akarsu)
> dağ sırası      127 →  275      idarî bölge      61 →   77
> çöl tavanı  "yapısal olarak hiçbir şey kesemez" → 60 petek · 1.297.338 km²
> ```
> 📌 Beşi de **dünya penceresi açıldıktan** (`box(-180,-60,180,85)`) sonra
> bayatladı. Kusur ölçümde değil **anlatıda**: sayılar kodda dinamik, yalnız
> yorumlar eski. Ve `uret_petek.py:888`inki ayrı bir sınıf — orada *"bu
> mekanizma hiçbir şey yapmıyor"* yazıyordu ve **1,3 milyon km² kesiyordu**;
> bir koordinatör o yoruma dayanıp Emre'ye *"çöl tavanı âtıl"* dedi ve
> koşunun kendi logu onu çürüttü.
> ⇒ **Bir sayı okumadan önce koşunun logunu aç.** `§1.5`in "elle yazma,
> ÜRET" dersinin motor tarafı; orada çare bir betikti, burada henüz yok —
> bu satır o borcun kaydıdır.

Bütün geometri `data/yerlesimler.js`'ten **her gün için yeniden** üretilir.

> ### ⚠️ Bu projedeki hataların çoğunun tek sebebi
> **Noktası olmayan bölge, en yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.**
>
> Gerçekleşmiş örnekler: Sardinya 1533'te Osmanlı göründü (Annaba'nın peteğine
> düşüyordu). Kefalonya 1684'e kadar Osmanlı kaldı (Ayamavra'dan). Brač, Hvar,
> Korčula 1483'ten itibaren Osmanlı oldu (Mostar'dan). Ordu-Ünye kıyısında hiç nokta
> olmadığı için Hacıemîroğulları haritada hiç görünmedi.
>
> **Bir "harita yanlış" raporu geldiğinde ilk sorulacak soru budur: o bölgede
> yerleşim noktası var mı?** Cevap hayırsa hata orada, kodda değil.

---
