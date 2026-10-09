# P84-DEGISMEZ2-ADAY-1006 — H-0012 · H-0014 (PAKET 0084 §C, iki Değişmez 2 adayı)

Oturum: P84-DEGISMEZ2-ADAY-1006 (hazır kıta 0610 1230, Opus 5.5) · görev UMIT İRTİBAT'tan ·
ağaç `C:\atlas-p84-d2aday` @ `origin/makine/umit` `cdc1ccea`.

## 0. Mükerrer kapısı
`denetim/` (umit ağacı + `C:\atlas-umit\denetim`) içerik taraması: "PAKET-0084", "DEGISMEZ2-ADAY",
"Bursa"+"Çelebi Mehmed" → bu iki kalem için yazılmış HÜKÜM yok. (`KRONO-BOSLUK-0930` `fetret-isa`yı
yalnız kronoloji sayısı tablosunda anıyor; `KAPAT-0035-42-68` H-0008 başka paketin H-0008'i, 1323.)
⇒ mükerrer DEĞİL, işe girildi.

Görseller açıldı (ikisi de; metin "bu maddede … bu bölüm" — yer/tarih görselde):
- H-0012-1: Marmara; Bursa–İzmit–Gelibolu karşısı kırmızı, etiket "ÇELEBİ MEHMED (AMASYA)"; tarih görselde YOK.
- H-0014-1: çok küçük kırpıntı; Rumeli/Edirne doğusunda Karadeniz kıyısı boyunca ince şerit.

## 1. ÖNGÖRÜ (ölçümden ÖNCE yazıldı — metin değiştirilmedi)
- **Sayı:** 2 adayın **2'si** de "Değişmez 2 evreninde ±30 gün içinde maddesi yok" çıkacak.
- **Mekanizma (H-0012):** kırılma bir `s:` geçişi (fetret şehzadeleri arası: `isa-celebi`→`mehmed-celebi`
  1403-09-01 ya da `suleyman-celebi`→`mehmed-celebi` 1411-02-17). İki taraf da OSMANLI değil ⇒
  Değişmez 2 (yalnız `d:`/`v:` = OSMANLI senkronu) bu kırılmayı hiç SORMAZ; 2s'te ise ya
  "KAPSAM DIŞI" ya "YIL-TEMSİLÎ BORÇ" kovasına düşüp tavanı oynatmıyor. Ayrıca künye içi çelişki
  bekliyorum: `fetret-mehmed` kronolojisi Bursa'yı 1403-01-01'de Mehmed'e verirken yerleşim `s:`
  zinciri 1403-09-01'e kadar İsa'da tutuyor.
- **Mekanizma (H-0014):** 1403 Gelibolu Antlaşması (Süleyman Çelebi ↔ Bizans) ile Karadeniz
  Trakya kıyısı Bizans'a geçiyor; geçiş `s:` (ya da `d:` bitişi + `s:bizans`) ile yazılmış, tarihi
  antlaşma maddesinden ≥30 gün uzak ya da antlaşma maddesi yalnız künye kronolojisinde
  (`devletler.js`, Değişmez 2 evreni DIŞI).
- Tutmazsa: tutmadığı yazılacak.

---

## 2. ÖLÇÜM
Araç: `denetim/ARAC-P84-DEGISMEZ2-ADAY-1006.py` (SALT OKUR; `denetle.py`nin kendi `degismez2` ·
`kapsam_disi` · `yil_temsili_ayir` işlevlerini çağırır; kutu lon 26-31 / lat 39.6-43.4, 1402-06 → 1414-01;
§4'teki ayrıntı listesi diff'ler uygulanmış hâldeki tarihlere ayarlı).
Evren: 4299 yerleşim (3193 çekirdek) · 2200 madde (`olaylar*` + `kronoloji_sinir*`).

### 2.1 Görselin tarihi — renkten ölçüldü (görselde tarih yok)
`renkler.py:1935-1938`: `suleyman-celebi` #8dd5a2 (YEŞİL) · `musa-celebi` #1e24e4 (MAVİ) ·
`mehmed-celebi` #f90c15 (KIRMIZI) · `isa-celebi` #2424e4 · `bizans` #0f0f5d.
- H-0012-1: Anadolu yakası KIRMIZI + Rumeli MAVİ-MOR ⇒ Rumeli Musa'da ⇒ pencere **1411-02-17 → 1413-07-05**.
  (1403-09 → 1404-03 aralığında Rumeli YEŞİL olurdu.)
- H-0014-1: zemin YEŞİL (Süleyman Rumeli'si) + kıyıda koyu lacivert şerit (Bizans) ⇒ 1403 başı.

### 2.2 H-0012 — kırılma
```
1411-02-17  s:  suleyman-celebi → mehmed-celebi   60 yerleşim (Anadolu yakası + Ankara)
            data/yerlesimler.js 55 kayıt (ör. :70 Bursa, :71 İnegöl, :1541 Gebze; :164 Ankara ayrı biçimde)
            yerlesimler_ek23.js 2 · yerlesimler_ek29.js 1 · yerlesimler_seyrek.js 1
            (aynı gün 82 Rumeli yerleşimi suleyman → musa)
±30 gün maddeleri: yalnız "Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim" (olaylar_ek3.js:16, yer_id Edirne)
denetle.py kovası: 2s AÇIK — açıklanmayan 60/142 yerleşim (Bursa dahil); madde Rumeli'yi anlatıyor
```
Bursa'yı Çelebi Mehmed'e veren öteki kırılma (1403-09-01 isa → mehmed, 55 yerleşim) **KAPALI**:
"Ulubat çarpışması — İsa Çelebi'nin yenilgisi" (olaylar_ek3.js:12, aynı gün, taraf adı başlıkta).
⇒ Görselin rengi ve kapının hükmü aynı kırılmayı gösteriyor: **1411-02-17**.

Kırılmanın tarihi KAYNAKSIZ (yerleşimlerin `kaynak:` alanı yok; Ankara kaydı bunu kendisi yazıyor:
Ankara'nın Çelebi Mehmed'e geçişi için TDV'de yalnız 813 tarihli para var, "YIL 1410-11").
1411-02-17 Süleyman'ın ölüm günüdür, Bursa'nın el değiştirdiği gün değil. TDV:
- `ankara` (bugün GET 200, gövde okundu): "Süleyman Çelebi kardeşi Mûsâ’nın faaliyetlerini haber alıp
  Rumeli’ye geçince Çelebi Mehmed Ankara dahil olmak üzere Bursa yöresini tekrar ele geçirdi"
- `mehmed-i` (önbellek KORIDOR-0081): "Süleyman’ın Anadolu’dan ayrılmasının ardından Mehmed Bursa’yı yeniden ele geçirdi"
- `suleyman-celebi-emir` (önbellek): "Çelebi Mehmed, Ankara ve Bursa’yı alıp burada tahta geçtiğinin işareti olarak 813 tarihli para bastırdı"
- `musa-celebi` (önbellek): Yanbolu'dan (13 Şubat 1410) sonra "O sırada Anadolu’da bulunan Emîr Süleyman hemen Rumeli’ye hareket etti"; Kosmidion 15 Haziran 1410.

⇒ Alt sınır: Süleyman'ın Rumeli'ye geçişi, 13 Şubat 1410 sonrası (musa-celebi). Üst sınır: hicrî 813 sikkesi
(6 Mayıs 1410 – 24 Nisan 1411). **GÜN de AY da hiçbir TDV maddesinde YOK.** 1411-02-17 bu aralığın içinde,
yani kaynakla ÇELİŞMİYOR ama kaynağa da dayanmıyor (Süleyman'ın Rumeli'ye geçişinden ≥8 ay sonra).
⚠️ TDV iç sırası: `suleyman-celebi-emir` Süleyman'ın Edirne'ye gelişini Yanbolu cümlesinden ÖNCE anlatıyor,
`ankara` geçişi Çandarlı Ali Paşa'nın ölümünden (Aralık 1406) "sonra" diyor. İkisi de yıl vermiyor; tarih
veren tek madde `musa-celebi` (Şubat 1410 sonrası). Bildirildi, taraf seçilmedi; yıl hükmü §6'da.

### 2.3 H-0014 — kırılma
```
1403-02-01  s:  suleyman-celebi → bizans   3 yerleşim: İğneada · Ahtapolu · Rezve
            data/yerlesimler_ek24.js:88-89 · :133-134 · :137-138
            kaynak (kayıtta): TDV fetret-devri Gelibolu Antlaşması (Şubat 1403 — AY), Misivri'ye kadar Karadeniz sahilleri
±30 gün maddeleri: YOK. En yakın: "Yıldırım Bayezid'in esarette ölümü" 1403-03-09 (36 gün)
denetle.py kovası: 2s AÇIK
```
Antlaşma maddesi EVRENDE VAR ama yanlış tarihte: `olaylar_ek.js:114`
`t:"1403-06-01"`, `gun:"1403 başı"`, ama gövdesi kendisi "TDV fetret-devri: Gelibolu Antlaşması, Şubat 1403"
ve "haritada İğneada, Rezve ve Ahtapolu Bizans'a geçer" diyor. Madde ile kırılma arası **120 gün**.
⇒ Emre'nin gördüğü: önceki madde 1402-12-20, sonraki 1403-03-09 — kıyı şeridi aradaki 1403-02-01'de
Bizans'a geçiyor, ekranda "Bayezid'in ölümü" maddesinde beliriyor. Görselle birebir.
TDV `fetret-devri` (önbellek): "Gelibolu Antlaşması’nı imzaladı (Şubat 1403)". TDV `suleyman-celebi-emir`
(önbellek): "Bizans’la barış antlaşması Ocak ya da Şubat 1403’te ortak Bizans İmparatoru VIII. Ioannes
Palaiologos tarafından imzalandı. Bu antlaşma 9 Haziran 1403’te Batı seyahatinden dönen imparator II. Manuel
tarafından da onaylandı." ⇒ Haziran tarihi ONAY/Selanik teslimidir (Selanik kırılması 1403-06-01;
`olaylar_ek3.js:11` 1403-06-15 "Gelibolu Antlaşması — Bizans'a tavizler", yer_id Selanik, onu kapatıyor).

### 2.4 denetle.py "Değişmez 2: 0 açık" — NİÇİN görmüyor (ayrı bulgu)
1. **Evren:** Değişmez 2 yalnız `d:`/`v:` (OSMANLI) kırılmasını sorar. Kutudaki 98 yerleşimin hepsinde `d:`
   1402-07-28'de kapanıp 1413-07-05'te açılıyor; aradaki fetret payları `s:` (yabancı kimlik) ile yazılı.
   ⇒ 1402-07-28 → 1413-07-05 arasında Marmara'da **sıfır** `d:` kırılması var; iki aday Değişmez 2'nin
   sorusuna HİÇ girmiyor. Ölçüldü: pencere içi Değişmez 2 açık = YOK.
2. **Kova:** ikisi de `2s` (yer_sarti=True) evreninde ve **AÇIK** kovasında — kör DEĞİL, sayılıyor; ama 2s
   tavanı 189, bugünkü ölçüm 186 ⇒ iki açık **tavanın altında sessiz**. (Öngörümün "KAPSAM DIŞI / YIL-TEMSİLÎ"
   kısmı TUTMADI: ikisi de gün-hassas AÇIK.)
   📌 Tavan bugün GEVŞEK: ölçüm 186, tavan 189 (`§3.4` ③ — iyileşince tavan iner). Ayrı borç.
3. **Ek mekanizma — taraf adayları:** `s:` kimlikleri HARİTA anahtarı (`suleyman-celebi`), künye id'si
   `fetret-suleyman` (`devletler.js:1960`, `harita:"suleyman-celebi"`). `_2s_taraf_adaylari` künyeyi YALNIZ `id`
   ile arıyor ⇒ dört fetret kimliği künyede bulunamıyor, aday düz "suleyman celebi" kalıyor (künye adı
   "Emîr Süleyman Çelebi Saltanatı" ve onun ilk-kelime adayı HİÇ üretilmiyor). Ölçülen sonuç:
   1404-03-01 "Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun eline geçti" başlığı "suleyman celebi"
   içermediği için 14 yerleşim AÇIK kalıyor (Akyazı, Anadolu Hisarı, Bergama, Beykoz, Eskişehir, Gebze, Hereke,
   Kandıra, Karabiga, Karacahisar, Pelekanon, Samandıra, Üsküdar, İzmit). ⇒ Öneri (UYGULANMADI, ayrı kalem):
   `_2s_kunye_adlari` künyeyi `harita:` anahtarıyla da indekslesin; iki yönde sınav + 2s/2sk tavanı aynı commit'te.

## 3. HÜKÜM
| Aday | Gerçek ihlal mi | Sınıf | Çare |
|---|---|---|---|
| H-0012 | **EVET** (2s AÇIK, 1411-02-17) | madde YOK + kırılma tarihi kaynaksız vekil (Süleyman'ın ölüm günü) | yeni madde (UMIT) + kırılma 1410'a (KOORD) |
| H-0014 | **EVET** (2s AÇIK, 1403-02-01) | madde VAR ama 120 gün KAYMIŞ; kırılma kaynaklı ve doğru | maddenin tarihi düzelir (UMIT); yerleşim verisi DOĞRU |

Öngörü değerlendirmesi: sayı TUTTU (2/2). Mekanizma: "Değişmez 2 sormuyor, `s:` geçişi" TUTTU; "kapsam dışı /
yıl-temsilî kovası" TUTMADI (AÇIK kovası, tavan altında); H-0014 "madde ≥30 gün uzak" TUTTU.
Künye içi çelişki tahmini TUTTU: `devletler.js:1995` `fetret-mehmed` kronolojisi
`{ t:"1403-01-01", tur:"savas", b:"Ulubat'ta İsa Çelebi'yi yenip Bursa'ya hâkim oldu" }` — olaylar ve yerleşimler
Ulubat'ı 1403-09-01'e koyuyor; aynı dosyada `fetret-isa` 1403-01-01'de KURULUYOR. (DÜZELTİLMEDİ — künye
kronolojisi Değişmez 2 evreninde değil; ayrı kalem.)

## 4. DİFF'LER (UYGULANMADI · temel `origin/makine/umit` `cdc1ccea` · `git apply --check` temiz · CR 0)
**`denetim/P84-DEGISMEZ2-ADAY-1006.diff`** (UMIT — kronoloji, 3 dosya)
- `olaylar_ek.js:114` t `1403-06-01`→`1403-02-01`; başlık "Süleyman Çelebi – Bizans antlaşması: Karadeniz kıyısı ve
  Selanik Bizans'a"; `gun` "Şubat 1403 (TDV fetret-devri; TDV suleyman-celebi-emir: Ocak ya da Şubat 1403) — GÜN
  bilinmiyor, ay temsilî"; gövdedeki "haritada Selanik bu tarihte Osmanlı'dan çıkar" → Selanik'in teslimi
  II. Manuel'in onayından (9 Haziran 1403) sonra, haritada Haziran 1403, ayrı madde.
- `olaylar_ek3.js` YENİ madde (Kosmidion'un önüne), `t:"1410-01-01"`: "Mehmed Çelebi Bursa ve Ankara'yı yeniden aldı —
  Anadolu payı Süleyman Çelebi'den çıktı"; `gun` GÜN/AY bilinmiyor + hicrî 813 aralığı; kaynak
  `ankara · mehmed-i · musa-celebi · suleyman-celebi-emir`; gövde tırnaksız özet (tırnak yok).
  Tarih kuralı: `VERI-YAPISI.md` ⑤ "Hicrî/Türk yılı iki Milâdî yıla taşıyorsa … ⇒ Y1" — 813'ün ~8 ayı 1410'da;
  musa-celebi'nin alt sınırı (Şubat 1410 sonrası) da 1410'u gösteriyor. `YYYY-01-01` = gün bilinmiyor damgası.
- `olaylar_ek5.js:54` harita cümlesi "bu tarihten 1411'e kadar" → "bu tarihten Çelebi Mehmed'in Bursa'yı yeniden
  almasına (1410) kadar".

**`denetim/P84-DEGISMEZ2-ADAY-1006-KOORD.diff`** (KOORDİNATÖR — yerleşim, 4 dosya)
- 59 kayıtta `t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}` →
  `1410-01-01` + mehmed dönemine `kesinlik:{f:"yil"}` (yerlesimler.js 55 · ek23 2 · ek29 1 · seyrek 1).
  Güvenlik: her eşleşmede Süleyman döneminin başı < 1410-01-01 olduğu üretim betiğinde doğrulandı.
- Ankara (`yerlesimler.js:164`, ayrı biçim): aynı kayma + `kesinlik:{f:"ay",t:"yil"}` / `{f:"yil"}` + `kaynak:`
  (TDV ankara alıntısı BİREBİR — `ankara` gövdesinde `in` ile sınandı: True).
- Rumeli'nin `suleyman → musa` 1411-02-17 kırılmaları DOKUNULMADI (o tarih kaynaklı: TDV 22 Şevval 813 / 17 Şubat 1411).
- ⚠️ İki diff BİRLİKTE iner: yalnız UMIT diff'i inerse yeni madde 1410'da, kırılma 1411'de kalır ⇒ H-0012 AÇIK kalır
  (ölçüldü, aşağıda "yalnız UMIT" sütunu: 185).

### 4.1 Diff'lerin kapıdaki etkisi — ÖLÇÜLDÜ (kendi ağacımda `git apply` + `denetle.py`, sonra `git checkout -- data/`)
```
                     ÖNCE    yalnız UMIT   UMIT+KOORD
madde sayısı         2200       2201         2201
Değişmez 1           309        309          309
Değişmez 2           623/0      623/0        623/0
2s AÇIK (tavan 189)  186        185          184        ← H-0014 ve H-0012 kapandı
2s YIL-TEMSİLÎ       165        165          165        (1410-01-01 kırılması AYNI GÜN maddeyle kapanıyor)
2sk yalnız-taraf     2247       2247         2261  ⚠️ tavan 2247 AŞILDI (+14) — araç: "ihlal değil, SINIFI istenir"
2sk MASKE birimi     1551       —            1469       (−82)
2t kırılmasız        13         13           13
4 / 4c / 4d / 5      0/127/324/0  aynı       aynı
çıkış kodu           2          2            2          (üçünde de aynı sebep: D8 ÖLÇÜLEMEDİ — taze ağaçta
                                                         devletler_harita.js yok; D7 733/731 ÖNCE'de de var)
odak_olc             yeni çözülmeyen atıf YOK (tek kayıt: önceden var olan Ogaden 1897)
```
2sk +14'ün SINIFI: yeni madde "Bursa yöresi" diyor (TDV de kasaba adı vermiyor); Bursa merkezli yerleşimler
YER koluyla, İzmit/Üsküdar/Gebze gibi başka merkezliler TARAF koluyla kapanıyor ⇒ kapanış kaynak taneciği
kadar, uydurma kasaba adı yazılmadı. ⇒ 2sk tavanı 2247→2261 ve 2s tavanı 189→184 **diff'lerle AYNI commit'te**
(`§3.4` ② · ⓪ yazmadan önce yeniden ölç), yazan koordinatör.

## 5. BULUNAMADI / ÖLÇÜLEMEDİ (6 Ekim 2026)
- Çelebi Mehmed'in Bursa'yı aldığı GÜN ve AY: TDV `ankara` · `bursa` (ikisi bugün GET 200) · `mehmed-i` ·
  `musa-celebi` · `suleyman-celebi-emir` · `fetret-devri` (KORIDOR-0081 önbelleği) → **bulunamadı**.
  `bursa` maddesi fetret için yalnız genel cümle veriyor.
- Akademik deneme: Uludağ Üni. açık erişim (acikerisim.uludag.edu.tr, bitstream 104e8daa-8469-44ff-9013-2ed43c3d23fb)
  → **HTTP 403**. Kastritsis, *The Sons of Bayezid* (Brill 2007) — tam metin erişilemedi (yalnız scribd kopyası
  çıktı; kullanılmadı).
- Değişmez 8 bu ağaçta ÖLÇÜLEMEDİ (devletler_harita.js üretilmiş çıktı, ağaçta yok); diff'ler motor kodu ya da
  tuza dokunmuyor, ama 8a/8b hükmü veri koşusundan sonra verilir.
- TDV fetret-devri antlaşmada "Kartal, Pendik ve Gebze ile bazı adaları" da sayıyor; veride Gebze o tarihte
  İsa'da, Kartal/Pendik yerleşim noktası değil — **ölçülmedi, bu kalemin dışında** (ters yön adayı).
- Selanik kırılması 1403-06-01; TDV suleyman-celebi-emir şehrin "gerçek kurtuluş tarihi"ni 17 Haziran (1403)
  veriyor — ölçülmedi, ayrı kalem adayı.

## 6. İSTENEN
1. İki diff'in BİRLİKTE inmesi + 2s tavanı 189→184 (bugün zaten 186, gevşek) + 2sk tavanı 2247→2261 AYNI commit'te.
2. Kaynak hükmü (koordinatör/Emre): Bursa geçişi için "1410 (hicrî 813, VERI-YAPISI ⑤ Y1)" kabul mü?
   Seçenek B: kırılmayı 1411-02-17'de bırakıp maddeyi oraya yazmak ⇒ madde tarihi kaynaksız atlas gününe
   bağlanır (`D207`) — ÖNERMİYORUM.
3. Ayrı kalemler: ① `_2s_kunye_adlari` → `harita:` anahtarıyla indeks (fetret kimlikleri taraf adı alamıyor)
   ② `devletler.js:1995` fetret-mehmed kronolojisi 1403-01-01 Ulubat ↔ 1403-09-01 ③ Gelibolu Antlaşması
   Kartal/Pendik/Gebze ④ Selanik 1403-06-01 ↔ 17 Haziran ⑤ 2s tavanı gevşek (186/189).

## Dosyalar
- `denetim/P84-DEGISMEZ2-ADAY-1006.md` (bu rapor)
- `denetim/P84-DEGISMEZ2-ADAY-1006.diff` (UMIT, kronoloji)
- `denetim/P84-DEGISMEZ2-ADAY-1006-KOORD.diff` (KOORDİNATÖR, yerleşim)
- `denetim/ARAC-P84-DEGISMEZ2-ADAY-1006.py` (salt okur ölçüm)
