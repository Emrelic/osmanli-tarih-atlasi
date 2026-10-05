# ONCE1281-2I-MADDE-1005 — 2i madde borcu 10: yakın-alakasız kapanışlara gerçek madde

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (M-5830 ②)
Önceki: [`ONCE1281-AVUSTURYA-UYGULA-1005.md`](ONCE1281-AVUSTURYA-UYGULA-1005.md) §3 (22 yeni 2i gününün 10'u yakın-alakasız
maddeyle kapanıyor). **Veriye yazılmadı** — madde önerileri aşağıda şemaya uygun; hangi dosyaya gireceği koordinatörde.

## 1. On gün ve kaynağı (kaynak `avus109_sonuc.json`'daki ALINTI; her biri cümlesiyle)
| # | gün | olay | yer_id | kaynak · nitelik | hüküm |
|---|---|---|---|---|---|
| 1 | 1918-11-14 | Sırp ordusu Pécs'i işgal etti | Peçuy | MNL Baranya Vármegyei Levéltára: *"Pécs november 14-én került szerb megszállás alá"* · devlet arşivi | ✅ yaz |
| 2 | 1918-11-22 | Lviv Polonya denetimine geçti (ZUNR birlikleri çekildi) | Lvov | Internet Encyclopedia of Ukraine (CIUS): *"most of the detachments left town at night. The next day Lviv was in Polish hands"* · akademik ansiklopedi | ✅ yaz (Cisleithania yarısıyla) |
| 3 | 1918-12-19 | İtalyan ordusu Knin'i işgal etti | Knin | Grad Knin resmî tarihi (Paić 1998 · Kninski zbornik 1993'e dipnotlu): *"talijanska vojska je okupirala Knin 19. prosinca 1918"* · kurumsal + akademik dipnot | ✅ yaz (Cisleithania) |
| 4 | 1919-04-19 | Romen ordusu Satu Mare'ye girdi | Szatmár (Satu Mare) | Muzeul Județean Satu Mare: *"La 19 aprilie 1919 … a întâmpinat Armata Română"* · il müzesi (kurumsal) | ✅ yaz |
| 5 | 1919-04-20 | Romen ordusu Oradea'ya girdi | Varad (Oradea) | Primăria Municipiului Oradea: *"intrarea trupelor române în Oradea, la 20 aprilie 1919"* · belediye (kurumsal, akademik değil) | ✅ yaz, nitelik notuyla |
| 6 | 1919-08-03 | Timișoara'da Romen idaresi kuruldu | Temeşvar | Ziua de Vest (yerel GAZETE, 2024; belediye kararı HCL 217/1999'a atıf) | ❌ **bulunamadı** — akademik/kurumsal birincil okunmadı |
| 7 | 1919-08-12 | SHS birlikleri Prekmurje'ye girdi | Murska Sobota | atlas kaydının kendi atfı: Kosi, *Hungarian Historical Review* 2020/1 · Zawistowska — **bu oturumda OKUNMADI** | ⚠️ yaz ama kaynak devralma beyanıyla (`D207`) — okununca kesinleşir |
| 8 | 1921-04-04 | İtalyan ordusu Knin'den çekildi | Knin | Grad Knin: *"Tek se Rapalskim ugovorom Talijanska vojska povlači iz Knina 4. travnja 1921"* | ✅ yaz (Cisleithania) |
| 9 | 1921-06-12 | Šibenik SHS'e teslim edildi | Şibenik (Sebenico) | B. Renje, lisans/yüksek lisans tezi, FFZG Zagreb (Grubišić, Tambača'ya dayanır): *"Ceremonija … obavljena je 12. lipnja 1921"* · ⚠️ öğrenci tezi | ⚠️ yaz, nitelik notuyla |
| 10 | 1921-08-22 | Macar Millî Ordusu Pécs'e girdi; Baranya'nın Sırp işgali bitti | Peçuy | MNL Baranya: *"22-én pedig bevonultak a magyar Nemzeti Hadsereg egységei"* | ✅ yaz |

## 2. ÖNGÖRÜ — ölçümden ÖNCE
- 9 madde (6 hariç) Değişmez 2 evrenine bellekte eklenirse: **2i açık 1 → 1** (zaten kapalıydı — 2i yer şartı sormaz) ama o
  günlerin **en yakın maddesi olayın kendisi** olur: 10 alakasız kapanıştan **9'u alakalı** olur, 1919-08-03 kalır.
- Yan etki: maddeler `yer_id` taşıdığı için **2s/2sk'da yer kolu artabilir** (ör. Lvov 1918-11-22 maddesi 1918-11-11 kovasına
  ±30 gün içinde düşer — ama o kova Gdańsk yüzünden AÇIK, sayılmaz) ⇒ öngörü: 2s AÇIK 188 → 188, 2sk YER +0..+2.
- D2 623/0 değişmez (Osmanlı kırılması yok).

## 3. ÖLÇÜM (öngörü `0fb16dcb`'den SONRA · bellekte · `madde_2i.py`, `madde_2i_b.py`; madde metinleri `madde_2i.json`)
**En yakın madde — ÖNCE → SONRA (9 madde eklenince):**
| gün | ÖNCE (yakın-alakasız) | SONRA |
|---|---|---|
| 1918-11-14 | Brest-Litovsk iptali (1 g) | **Sırp ordusu Pécs'i işgal etti** (0 g) |
| 1918-11-22 | Karadağ Sırbistan'la birleşti (4 g) | **Lviv Polonya denetimine geçti** (0 g) |
| 1918-12-19 | Çekoslovakya Alman Bohemyası (13 g) | **İtalyan ordusu Knin'i işgal etti** (0 g) |
| 1919-04-19 | Kars'ın İngiliz işgali (7 g) | **Romen ordusu Satu Mare'ye girdi** (0 g) |
| 1919-04-20 | Kars'ın İngiliz işgali (8 g) | **Romen ordusu Oradea'ya girdi** (0 g) |
| 1919-08-03 | Ravalpindi (5 g) | Ravalpindi (5 g) — **bulunamadı**, madde yazılmadı |
| 1919-08-12 | Ravalpindi (4 g) | **SHS birlikleri Prekmurje'ye girdi** (0 g) |
| 1921-04-04 | İkinci İnönü (3 g) | **İtalyan ordusu Knin'den çekildi** (0 g) |
| 1921-06-12 | Antalya'nın boşaltılması (11 g) | **Šibenik SHS'e teslim edildi** (0 g) |
| 1921-08-22 | Irak Krallığı (1 g) | **Macar Millî Ordusu Pécs'e girdi** (0 g) |
⇒ **10'un 9'u alakalı** (öngörü ✅). 2i açık 1 → 1 (öngörü ✅).

**Kapılar (B = bugünkü veri, taç indi):**
| | 2s AÇIK | 2sk YER / TARAF | 2i | D1 · D2 · 4c · 4d · D7 |
|---|---|---|---|---|
| madde YOK | 188 | 1561 / 1635 | 154/1 | 309 · 623/0 · 127 · 324 · 727 |
| **9 madde** | **187** | **1588 / 1731** | 154/1 | aynı |
| 8 madde (Lviv HARİÇ) | 188 | 1561 / 1635 | 154/1 | aynı |

### 🔴 ÖNGÖRÜ ÇÖKTÜ — ve yine 2sk sınıfı: Lviv maddesi Gdańsk'ı SAHTE kapatıyor
Öngörüm "2s 188 → 188, 2sk YER +0..+2" idi. Ölçüm: 2s −1, YER +27, TARAF +96. Sebep TEK madde:
```
1918-11-11 kovası (123 yer) AÇIK idi — eksik YALNIZ 'Gdansk' (almanya → polonya)
"Lviv Polonya denetimine geçti" (1918-11-22, ±30 gün içinde) başlığında "Polonya" geçiyor
⇒ 2s TARAF kolu ① (taraf başlıkta) Gdańsk birimini "açıklanmış" sayıyor ⇒ kova KAPANIYOR
⇒ maskenin arkasındaki 122 birim bir anda sayılıyor (+27 yer, +96 taraf)
```
Lviv maddesi Gdańsk hakkında HİÇBİR ŞEY söylemiyor. Yani bu madde yazılırsa **2s bir sahte temiz kazanır** ve 2sk maskesi
YANLIŞ bir sebeple kalkar. Öteki 8 madde 2s/2sk'ya **sıfır** etki ediyor.
📌 Ve maskenin kökü de burada görünüyor: atlasta **Gdańsk 1918-11-11'de `almanya` → `polonya`** — künye günü (`D207`).
Danzig Versay (yürürlük 1920-01-10) ile Almanya'dan ayrıldı ve **Polonya'ya değil Serbest Şehir'e** geçti. Kova bu yüzden
açık; düzeltmesi kendi kalemi (kaynak + "Danzig Serbest Şehri" künyesi taranmalı — bu oturumda ölçmedim).

## 4. İSTENEN
1. **8 madde yazılabilir** (2s/2sk etkisi 0, 2i'de 8 sahte kapanışı gerçeğine çevirir): Pécs ×2, Knin ×2, Satu Mare, Oradea,
   Prekmurje, Šibenik. Nitelik notları madde `kaynak:`ında (Oradea belediye · Šibenik öğrenci tezi · Prekmurje atfı okunmadı).
   Knin ×2, Šibenik, Lviv Cisleithania yarısının `isg:`leriyle birlikte anlam kazanır — o yarı inmeden yazılırsa 2i'de yeni
   kırılma yok, yalnız madde durur.
2. **Lviv maddesi BEKLESİN** — Gdańsk kırılması düzelmeden yazılırsa 2s'ye sahte temiz verir. Ya da 2s taraf kolunun ①'i
   (başlıkta taraf) kova-içi her yere değil yalnız aynı bölgeye uygulanmalı — tasarım sorusu, sende.
3. 1919-08-03 Temeşvar: **bulunamadı** (yalnız gazete). Akademik/kurumsal birincil kaynak aranmalı.
4. Gdańsk 1918-11-11 `almanya → polonya` — `D207` künye günü, yanlış halef (Serbest Şehir). Ayrı kalem.
