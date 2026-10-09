# DIVRIGI-MEMLUK-1008 — 0085 H-0005 · H-0009 · H-0010: Divriği "Memlük kaması" (1400-1402)

Görev UMIT İRTİBAT · 9 Ekim 2026 · ağaç `C:\atlas-divrigi` (`origin/makine/umit` 8b2f5415) ·
commit yok, push yok · **iki diff UYGULANMADI**.

## 0. Öngörü — ölçümden ÖNCE
1. Divriği büyük olasılıkla 1400-1401'de `memluk`e geçiyor ve bu TDV `divrigi` ile uyumlu.
2. Sınıf: **harita kaynağa uygun**. Asıl kusur adayları ya petek emilmesi ya da çevredeki
   Osmanlı toprağının dayanağı.
3. Malatya'da gerçek bir uyumsuzluk var (Dulkadir).
4. `denetle.py` 0 ya da 2 döner.

**Sonuç:** ① ✓ · ② ✓ (kusur çevrede çıktı; ama emilme değil, **bayat zincir kopyası**) ·
③ kısmen (aşağıda) · ④ çıkış 2.

## 1. Hüküm
**Divriği'nin 1401'den sonra Memlük görünmesi DOĞRU.** TDV `divrigi` (gövde okundu, birebir):
- "Yıldırım Bayezid 1398'de Sivas, Malatya, Besni (Behisni), Darende ve Divriği'yi … iki ay
  muhasaradan sonra Osmanlı topraklarına kattı."
- "Ancak Divriği yaklaşan Timur tehlikesinden dolayı 1401'de tekrar Memlükler'e verildi."
- "Divriği'nin kesin olarak Osmanlı idaresine girişi, Yavuz Sultan Selim'in 24 Ağustos 1516
  Mercidâbık Zaferi'nden sonradır."

Emre'nin üç sorusuna cevap:
- **H-0005** ("o devirde Osmanlı'da olabilir mi?"): **1398-1401 arasında evet** (veride de öyle:
  Osmanlı `d:` 1398-01-01 → 1401-01-01). **1401-1516 arasında hayır**, Memlük.
- **H-0009** ("Timur Sivas'ı yıktıktan sonra neden Memlük?"): Sivas'ın yıkılışı
  (`olaylar_ek5.js` 1400-08-01) ile Divriği'nin Memlük'e verilişi (1401) TDV'de birbirine
  bağlı: Timur tehlikesi. **Ama haritada bu devri anlatan bir madde YOKTU** (§2-②).
- **H-0010** ("Erzincan-Kemah alındı ama Divriği arada Memlük?"): **evet, doğru**. Erzincan/Kemah
  1401-02-01'de alındı (`olaylar_ek5.js`, kaynak `ankara-savasi`), Divriği aynı yıl Memlük'e
  verildi. Memlük toprağı Osmanlı Sivas (batı) ile Osmanlı Kemah (kuzeydoğu) arasında kaldı.

**AMA kamanın "Osmanlı'yı ikiye bölen" görüntüsü kısmen bir veri kusurundan geliyor.**
Güneydoğu köşedeki Osmanlı (Arapkir · Hısn-ı Mansûr · Behisni · Kâhta) 1400-1402'de
**kaynaksız** ve kendi zincirinin kaynağıyla **çelişiyor** (§2-①).

## 2. Ne ölçtüm
`girdi.yukle()` (4.300 nokta). Olay günleri `data/olaylar*.js`ten okundu, varsayılmadı:
Sivas 1400-08-01 · Malatya 1400-01-01 (YIL) · Erzincan/Kemah 1401-02-01 · Ankara 1402-07-28.

Divriği çevresi (130 km), beş gün kesiti:
```
           1398-03   1400-09   1401-03   1402-01   1402-08-15
Divriği    OSM       OSM       memluk    memluk    memluk      ← TDV divrigi ✓
Arapkir    memluk    OSM       OSM       OSM       memluk      ← 🔴 bayat kopya
Kemah      mutahh.   mutahh.   OSM       OSM       mutahharten
Sivas      burhan.   OSM       OSM       OSM       timurlu
Darende    dulkadir  dulkadir  dulkadir  dulkadir  dulkadir    ← ⚠️ TDV divrigi 1398 Osmanlı der
Malatya    memluk    dulkadir  dulkadir  dulkadir  memluk
Gürün      dulkadir ×5 · Çemişgezek/Harput artuklu ×5 (DOKUNULMADI)
```

**① Sınıflandırma (D205) — bayat kopya.** `yerlesimler.js`deki FIRAT KAVSİ notu, bu dört
noktanın zincirinin *"MALATYA'nın zinciri"* olduğunu ve uydurulmadığını, komşudan alındığını
söylüyor. Malatya 6 Ekim'de (MALATYA-1400-TIMUR-1006) TDV ile düzeltildi: Osmanlı 1400'de
bitiyor, 1400-1402 arası `dulkadir`. TDV `malatya`: *"Timur’un Malatya’dan ayrılmasının ardından
Dulkadıroğulları buraya tekrar hâkim oldu."* **Kopyalar güncellenmedi**: dördü hâlâ eski zinciri
taşıyor (Osmanlı → 1402-07-28). Divriği de 1401'de ayrıldığı için 1401-1402'de bu dört nokta,
Osmanlı'ya ait hiçbir komşusu olmayan bir ada oluşturuyor. Görseldeki "güneydoğu köşede Arapkir"
budur.

**② Değişmez 2 — sessiz kırılma.** Divriği'nin 1401-01-01 Osmanlı kaybı için bu yeri anan bir
madde **yok**. Divriği'yi anan tek madde 1398 fethidir; 1401 devri yalnız o maddenin metninde
geçiyor. `degismez2()` varsayılan olarak `yer_sarti=False` ile çalışıyor, bu yüzden ±30 gün
içindeki ilgisiz bir madde (Diyarbekir 1401-01-01) kırılmayı kapatıyor ve kapı ✓ basıyor.
`§10`: *"ayrı madde ile gösterilmeli" = Değişmez 2 ihlali.* H-0009'un sorusu tam olarak budur.

**③ Malatya.** Veri TDV ile uyumlu: 1400 Dulkadir. ARTUKLU'nun gördüğü uyumsuzluk 1402
sonrasındaki `memluk`. TDV `malatya` 1395-1420 arasında Memlük'ün geri dönüşünü **anlatmıyor**;
yalnız *"Dulkadır topraklarının bir kısmını teşkil etmesi sebebiyle Osmanlı-Memlük çıkar
çatışmalarının odak noktası"* diyor. Veride `dulkadir → memluk 1402-07-28` geçişi zaten
**KAYNAKSIZ** olarak beyanlı. ⇒ Bu bir kusur adayı, ama gün ya da sahip **bulunamadı**;
dokunmadım.

**④ D206 — iki uç.**
- Yama sonrası 1400-01-01 → 1402-07-28 arasında Malatya kümesi (Malatya + 4 nokta) `dulkadir`.
- Memlük'ün kuzey sınırı **değişmez**: Divriği 1401'den sonra yine Memlük; bu TDV gerçeği.
- 1400-1401 arasında Divriği Osmanlı kalır; batısında Osmanlı Sivas var, kuzeydoğusundaki Kemah
  Mutahharten'de. Osmanlı ile bağı Sivas üzerinden sürer.
- **Divriği Osmanlı yapılsaydı** (yapılmadı): TDV'ye aykırı olurdu ve 1401-1402'de Memlük'ün
  kuzey ucu Divriği'den Malatya güneyine çekilirdi.
- Ters yön: bu dört noktanın `dulkadir` olduğu da kaynaksız. Ama kendi zincir kaynağıyla
  (Malatya) tutarlı. Bugünkü Osmanlı ise hem kaynaksız hem tutarsız.

**⑤ `denetle.py`** — iki koşu, ikisi de **çıkış 2**: Değişmez 8 ÖLÇÜLEMEDİ, çünkü
`devletler_harita.js` taze ağaçta yok. Bu beklenen bir eksik ölçüm. Fark (KRONO-SENKRON
uygulanmış hâl → + bu yama):
```
Değişmez 1/1b/2/2s/2i/2t/4c/4d   AYNI  (2: 624/0 · 2s: 1720/184 · 1: 309)
2sk YER anılarak kapanan          2073 → 2078   (+5)
3z zamansız m: / zamanlı kd:      491/60 → 487/56  (−4/−4)
kaynaksız s: kaydı                1912 → 1909
```
⚠️ **KRONO-SENKRON'un kendi bulgusu (benim değil):** KRONO-SENKRON tek başına uygulanınca
**2sk ⚠️ 2251 > tavan 2250**. Yalnız-taraf kapanış 1 arttı; `makine/umit` 8b2f5415'te 2250
(tavan içinde). Bu yama onu ne bozuyor ne düzeltiyor.

## 3. Ne bulamadım
- Darende: TDV `divrigi` *"1398'de … Darende … Osmanlı topraklarına kattı"* diyor, veri ise
  Darende'yi 1338-1522 boyunca `dulkadir` gösteriyor. TDV `darende` slug'ı bir arama sayfasına
  düşüyor, madde gövdesi okunamadı. **Ölçülmedi, dokunulmadı.** Ayrı kalem önerisi.
- Malatya'da Dulkadir'den Memlük'e geçişin yılı (TDV'de yok).
- Arapkir · Hısn-ı Mansûr · Behisni · Kâhta'nın 1400-1402 sahibine dair doğrudan kaynak. Yama
  komşu zincirini (Malatya) izliyor ve bunu `kaynak:` alanında açıkça söylüyor.
- 0085 görseli H-0005-1.png ağaçta da paket klasöründe de yok. Paketteki aynı adlı dosya
  **0084**'e ait (Trakya). Görsel açıklaması UMIT İRTİBAT'ın tarifine dayanıyor.
- Ankara sonrasındaki 1402-07-28 sahipliği (memluk) dört noktada da kaynaksız. Bu yama ona
  dokunmuyor.

## 4. Ne istiyorum
1. **`denetim/DIVRIGI-MEMLUK-1008-KOORD.diff`** (`yerlesimler.js`): Arapkir · Hısn-ı Mansûr ·
   Behisni · Kâhta → Osmanlı `d:` 1399-09-01 → **1400-01-01**, ardından `s:dulkadir` 1400-01-01 →
   1402-07-28 (kaynak alanı: "zincir KOMŞUDAN: Malatya"). FIRAT KAVSİ notuna bir düzeltme satırı
   eklenir. **Divriği'ye, Harput'a, Çemişgezek'e ve Palu'ya dokunmaz.**
2. **`denetim/DIVRIGI-MEMLUK-1008.diff`** (`olaylar_senkron_0930.js`): 1401-01-01 "Divriği, Timur
   tehlikesi yüzünden yeniden Memlükler'e verildi" maddesi. `yer_id: Divriği`, kaynak TDV
   `divrigi` birebir, gün YIL. Node ile eval edildi, dosyada 3 madde var.
3. **İniş sırası:** ① KRONO-SENKRON (**henüz İNMEDİ**, temel olarak yerelde uygulandı) ② Z3
   (yalnız künye JSON, dosya çakışması yok) ③ bu yama.
   🔴 **ARTUKLU-IKI-PARCA-1008-KOORD.diff ile bağlam çakışması var:** ARTUKLU'nun 2288-2295
   hunk'ı benim değiştirdiğim üç satırı bağlam olarak kullanıyor. İki sürüm var:
   - ARTUKLU inmeden: `-KOORD.diff`
   - ARTUKLU indikten sonra: **`-KOORD-ARTUKLU-SONRASI.diff`**
   Üç zincir de `git apply --check` ile temiz: KRONO → madde → KOORD ✓ ·
   KRONO → madde → ARTUKLU → KOORD-ARTUKLU-SONRASI ✓.
4. **Kapı önerisi** (`denetle.py` benim değil): Değişmez 2 yer şartsız; bu vakada ilgisiz bir
   madde, bir yerin kırılmasını sessizce kapattı. `2sk` sınıfı bunu "YALNIZ TARAF" kovasında
   sayıyor ama Osmanlı `d:` kırılması için bir yer kolu yok.
5. **Darende** ayrı kalem olsun (TDV `divrigi` ile veri çelişiyor).

## Dosyalar
- `denetim/DIVRIGI-MEMLUK-1008.md` (bu rapor)
- `denetim/DIVRIGI-MEMLUK-1008-KOORD.diff` (LF, CR 0)
- `denetim/DIVRIGI-MEMLUK-1008-KOORD-ARTUKLU-SONRASI.diff` (LF, CR 0)
- `denetim/DIVRIGI-MEMLUK-1008.diff` (LF, CR 0)
