# Tavan disiplini ⓪–⑦ — tam metin ve vakalar (10 Ekim hâli)

> Kimlik `D275` · `CLAUDE.md §3.4` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

### 3.4 🆕 🔴 TAVAN DİSİPLİNİ — her `BEKLENEN_*` için, istisnasız
0. 🔴 **TAVAN, YAZILDIĞI ANDA ÖLÇÜLÜR** — "bugünkü ölçüm" yetmez. Ölçülen vaka (6 Ekim):
   kaynaksızlık sayıları **bir günde 5 kayıt** oynadı (öngörü 1968/333, ölçüm 1930/371;
   bir gün önceki 1935/366 de bayattı). ⇒ Saatler önce ölçülmüş bir tavanı yazmak, bayat
   bir sabit dondurur. Yazmadan hemen önce ölçüm **yeniden koşturulur** ve fark
   **ADIYLA** karşılaştırılır (geçiş dosyası: hangi kayıt hangi kovadan hangisine geçti).
1. **Tavan BUGÜNKÜ ÖLÇÜMDÜR.** Geleceğin değeri yazılmaz: ölçüm 6 iken 12 yazmak
   **tavanla susturulmuş borç** üretir ve kapı o borcu bir daha hiç göstermez.
   (5-6 Ekim gecesi vaka: iran künyesi borcu tavana yazılmış, kapı görüyordu,
   bir oturum "kapı bu sınıfı görmüyor" diye rapor etti — kör olan kapı değildi.)
2. 🔴 **TAVAN + SABİT AYNI COMMIT'TE.** Bir düzeltme tavanı oynatıyorsa, yeni sabit
   o düzeltmeyle **aynı commit'te** iner. Ayrılırsa arada kalan commit'te kapı
   **DOĞRU çıktıyı yanlışlıkla REDDEDER** (ya da tersi: gevşek tavan yeni borcu yutar).
   ⚠️ Bu kural 5-6 Ekim gecesine kadar YAZILI DEĞİLDİ ve koordinatör onu dört kez
   uyguladı (`BEKLENEN_MUKERRER` · `OLU_ISTISNA` · `2S_YALNIZ_TARAF` · `BAYAT_KOPYA`)
   — bir işçi onu arayıp **bulamadı**. `§9.1`in cümlesi: *kural yazılı olmayan kural
   değil, UNUTULAN kuraldır.*
3. **Yalnız GERİLEME bloke eder; İYİLEŞİNCE TAVAN İNER.** İyileşmiş bir ölçümde eski
   tavanı bırakmak, aradaki payı sessiz borç yapar.
4. **Tavanı İŞÇİ ÖNERİR, KOORDİNATÖR YAZAR** (`§7` dosya sahipliği). İşçi ölçer ve
   önerir; `--tavan-yaz` gibi yardımcılar **körü körüne kullanılmaz** — ölçülen vaka:
   `ODAK-TAVAN.json`da o bayrak evreni genişletip 3306 kalemi affediyordu.
5. **İSTİSNA LİSTESİ DE TAVAN AİLESİDİR** (`BILINEN_AYRI`, `bilinen_kusur`): sayı değil
   **LİSTE** tutar, ve bir girdinin "ölü" olup olmadığı **TÜKETİCİYE GÖRE** sorulur —
   aynı liste iki işlev tarafından okunuyorsa birinde ölü, ötekinde CANLI olabilir.
   📌 Ve ölü istisna zararsız değildir: bugün hiçbir şeyi susturmayan bir istisna,
   yarın gerçek bir ihlali susturur. **En iyi istisna, yazılmayan istisnadır.**
6. 🆕 🔴 **BİR TOLERANS, YUTTUĞUNU SÖYLEMELİ.** Yutulanı ADIYLA basmayan bir
   tolerans bir eşik değil, **BİR PERDEDİR.** Ölçülen vaka (UMIT, 10 Ekim):
   `Değişmez 5`in **400 günlük** toleransı `Berezov`u (`kur` 1593 / `rusya`
   1592, ikisi de yıl hassasiyetli — **olası gerçek bir çelişki**) sessizce
   yutuyordu. ⚠️ Ve eşiği **0'a çekmek çare DEĞİL**: Yakutsk · Selenginsk ·
   Olyokminsk hassasiyet artefaktıdır, 0 onları İHLAL yapar ⇒ yanlış pozitif
   makinesi. ⇒ **ÜÇÜNCÜ YOL: tolerans KALIR + yuttuğu her kalem adıyla bir
   BİLGİ kovasında** (*"tolerans yuttu: N kalem"* + `--ayrinti` listesi).
   📌 Aynı hastalığın kardeşi **adsız büyük kova**: `Değişmez 5`in `5c`si
   **2449** kalem (4300'ün **%57**'si) ve bir ADI yoktu — ölçen oturumun
   hükmü: *"perde: adlı kova değil."* Ve başlığı (*"1281'de zaten sahipli"*)
   **80 kayıt için düpedüz YANLIŞTI.** 🔴 **Yanlış bir ad, adsız bir kovadan
   KÖTÜDÜR: adsız kova soru sordurur, YANLIŞ AD soruyu KAPATIR.**
   🔴 **VE BİR TERS ETKİ — eşik/desen düzeltirken beklenir:**
   **bir körlüğü kapatmak, o körlüğün TESADÜFEN sağladığı korumayı da
   kaldırır.** Ölçülen vaka: `ARALIK_RX` iki yönde yanılıyordu (ATLANAN-63'te
   yanlış ATLADI, `Mergen`de yanlış KORUDU); doğru taraf düzeltilince
   **yanlış koruma da gitti** ve Mergen artık *tesadüfen bile* korunmuyor
   (`{d,f,t}` sırasında yazmıyordu — **sırf anahtar sırası yüzünden**).
   ⇒ Bir körlüğü kapatan yama inerken, o körlüğün **neyi yanlışlıkla
   koruduğu** da aranır; yoksa bir kusuru kapatıp bir başkasını AÇARSIN.
7. 🆕 🔴 **②'NİN KARDEŞİ — DÜZELTME İLE GÖRÜNÜRLÜĞÜ AYRILAMAZ.** ② *tavan +
   sabit* için yazılmıştı; aynı mekanizma **veri + boya** için de geçerli:
   > bir düzeltme ile onun **GÖRÜNÜR OLMASINI** sağlayan şey ayrı inerse,
   > araya kalan commit'te durum **düzeltmeden ÖNCEKİNDEN KÖTÜ** olabilir.
   Ölçülen vaka (KASA, 10 Ekim): Königsberg `almanya 1281-1525` YANLIŞ;
   doğrusu `teuton-devleti`, **ama o kimlik `BOYALAR`da YOK** ⇒ düzeltme tek
   başına inerse boyalı bir yanlış, **boyasız bir delikle** değişir. Boyayı
   eklemek `renkler.py`ye dokunur = MOTOR TUZU = 7-8 saatlik tam inşa (`§9.1`).
   ⇒ **ÇARE: ikisini birleştir, olmuyorsa ARADAKİ HÂLİ BEYAN ET.** Atlasta
   bunun kovası KURULU: `boya_gerekli:true` (`§1.5` — *"tam inşa koşusunu
   bekliyor, sessiz DEĞİL"*); kalem oraya **ADIYLA** yazılır, sayı olarak değil.
   📌 Ve takma ad (`harita:` ile mevcut bir boyayı paylaşmak) çare DEĞİLDİR:
   iki devleti aynı renkte çizmek, **gürültülü bir hatayı SESSİZ bir hatayla**
   değiştirir.
   🔴 Seçim ölçütü: **yanlış renk bir YALANDIR, beyanlı delik bir İTİRAFTIR.**
   Delik masum değildir (`§3.5`), ama yalandan kötü de değildir.
