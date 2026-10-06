# GENCE-1386-KAYNAK-1006 — Gence'nin 1386 sahiplik adımı için kaynak avı

**Temel:** origin/makine/umit `b2d4c2ff` · worktree `C:\atlas-p84-gence` · ölçüm günü 6 Ekim 2026.

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı)
- **Sonuç ① kısmen tutacak — YIL doğrulanır ama GENCE ADIYLA değil.** Beklenen: TDV `timur`
  maddesi 1386 (H. 788) Azerbaycan/Tebriz seferini anlatır; Karabağ'da kışlama + Gürcistan
  seferi (1386-87) geçer, ama **Gence'yi adıyla tarihleyen cümle bulunmayacak.**
- **Mekanizma:** TDV yer-kişi ansiklopedisidir; `gence` maddesi Timur dönemini hiç anmıyor
  (W41b ölçtü), `timur` maddesi seferi bölge ölçeğinde (Azerbaycan, Karabağ, Gürcistan)
  anlatır. Gence Karabağ/Arran'ın şehri olduğu için kaynak ÖLÇEK uyuşmazlığı verir:
  "Karabağ'da kışladı" bir sahiplik tanıklığı değil, bir ordugâh kaydıdır (D208: bölgeden
  şehre taşınan hüküm halka almaz).
- Ek beklenti: 1386'da Celâyirli idaresinin Gence'de son bulduğuna dair açık cümle yok;
  Celâyirli Sultan Ahmed Tebriz'i bırakıp Bağdat'a çekildi ⇒ Arran'da fiilî Timurlu
  hâkimiyeti 1386-87 kışlamasından itibaren, ama kalıcı idare (Miranşah ulusu) **1393-96**
  ile kurumsallaşır. Sayı öngörüsü: Gence'yi 1386 ile adıyla bağlayan TDV cümlesi **0**.

## 1. MÜKERRER KAPISI
`grep -ril gence denetim/` → 90+ dosya (vekil ölçüm, aday). Hükme bakıldı (`OLCUM-KITA §9`):
`UMIT-W41b-P3-5-OCAK1-1006.md` (1406 sınıflandırması, 1386'yı AÇIK bıraktı: "kaynak aranmalı") ·
`KRONO-DOGU-ISLAM-0929-YERLESIM-ONERI.md:15` ve `YERLESIM-BIRLESTIR-0930.md:105` (DOI-5: "atlas
komşusu dayanak değil") · `P84-TIMUR-SAHIPLIK-1006.md:21` ("Gence … ÖLÇÜLMEDİ").
⇒ 1386 için **kaynaklı hüküm yok** ⇒ mükerrer DEĞİL, iş yapıldı.

## 2. ÖLÇÜM (6 Ekim 2026; gövdeler `denetim/GENCE-1386-KAYNAK-1006-tdv/`)
| Kaynak | HTTP | Gence/Arrân/Karabağ × 1380-1410 için ne diyor |
|---|---|---|
| TDV `gence` | 200 | "XIV. yüzyıl ortalarında Gence ve Karabağ'a Celâyirliler hâkim oldular. XV. yüzyılın başlarında bu bölge Karakoyunlular'ın eline geçti." — **Timur dönemi HİÇ yok** (W41b'nin okuması doğrulandı). |
| TDV `timur` (P84 önbelleği) | — | "Horasan'a seferleri sırasında İran'ın vaziyetini daha yakından gören Timur 788'de (1386) buraya yürüdü." · "… Gürcistan üzerinden Azerbaycan'a giderek Karabağ'a ulaştı." · "Onun Kuzey İran ve Azerbaycan'ı ele geçirmesi, …" — **Gence adı geçmiyor**; Karabağ = ordunun VARIŞ yeri, sahiplik cümlesi değil. |
| TDV `karabag` | 200 | "… sırasıyla İldenizliler, İlhanlılar, Timurlu ve Akkoyunlular'ın idaresi altına girdikten sonra Safevîler'in eline geçti." — Timurlu idaresi VAR ama **TARİHSİZ**. |
| TDV `arran` | 200 | "Timur Arrân'ı istilâ edince … bölgenin idaresini de Mirza Ömer'e verdi." — **TARİHSİZ**; cümle 1386'yı tarihlemiyor. |
| TDV `karakoyunlular` | 200 | "… Batı İran'ı zaptetmiş olan Timur (788/1386) …" · Kara Mehmed "onun Mâverâünnehir'e dönmesinden sonra bir fâtih olarak Tebriz'e girdi (790/1388)." — Gence yok; **komşu zincirin 1386→1406 kesintisiz `timurlu` çizgisine Tebriz için KARŞI tanık.** |
| TDV `azerbaycan` · `sirvansahlar` | 200 · 200 | Gence × Timur cümlesi yok. |
| TDV `miransah` · `berdea` · `miran-sah` · `miransah-mirza` · `berda` · `bardaa` | **302** ×6 | ölü slug (tuzak ①). |
| TDV arama `?q=gence` · `gence+timur` · `karabag` · `miransah` (`p=m`, `p=t` dahil) | 200 | sunucu HTML'inde **aday bağlantısı yok** (sonuçlar istemci tarafında yükleniyor) ⇒ **ölçülemedi**, "sonuç yok" değil. |
| Encyclopaedia Iranica **"GANJA"** (C. E. Bosworth, 2000) | curl/WebFetch 403 · tarayıcı ile okundu | İlhanlı'dan sonra doğrudan "Toward the end of the 9th/15th century … Āq Qoyunlu" — **1350-1480 arası SESSİZ.** |
| Encyclopaedia Iranica **"JALAYERIDS"** (Peter Jackson, 2008) | tarayıcı | "In the spring of 1386 his forces entered Tabriz and installed ʿĀdel Āqā there" · "The dynasty now suffered the almost permanent loss of Azarbaijan, since when Timur withdrew to Khorasan in 1387, he left his son Mirānšāh as viceroy of the province." — **Azerbaycan EYALETİ** için 1386 (Tebriz) / 1387 (Mîrânşah valiliği). Arrân/Gence 1380-1410 için cümle yok; Arrân yalnız 1382'de Sultan Ahmed'in payında anılıyor. |

## 3. HÜKÜM — SONUÇ ③ BULUNAMADI (Gence ölçeğinde), bölge ölçeğinde kısmi
- **Gence'yi 1386 ile ADIYLA bağlayan cümle: 0** (TDV 6 madde + Iranica 2 madde okundu).
- Bölge ölçeğinde var: Iranica/Jackson — Azerbaycan 1386 baharı Tebriz, 1387 Mîrânşah valiliği;
  TDV `timur` — 1386 seferi Karabağ'a ulaştı. Ama **D208:** bölgeden şehre taşınan hüküm şehir
  tanıklığı değildir; Azerbaycan eyaleti ≠ Arrân (Gence Arrân'ın merkezidir, TDV `arran`).
- **Karşı işaret (çelişki DEĞİL, tek kaynak — §4):** TDV `gence` Celâyirli → Karakoyunlu der,
  Timurlu ara adımı yok; TDV `karabag` ise Timurlu idaresini sayar (tarihsiz). TDV kendi içinde
  iki maddede farklı ayrıntı veriyor; ikisi de 1386'yı tarihlemiyor. Taraf seçilmedi.
- **Yan bulgu (görevin dışında, ölçüldü):** TDV `karakoyunlular` Kara Mehmed'in 1388'de Tebriz'e
  "fâtih olarak" girdiğini söylüyor ⇒ komşu zincirlerin (Tebriz dahil) `timurlu 1386→1406`
  kesintisiz penceresi Tebriz için kaynakla uyuşmuyor. Tebriz'in kaydı bu görevde ÖLÇÜLMEDİ.

## 4. ÖNGÖRÜ ↔ ÖLÇÜM
- Sayı (Gence×1386 adlı cümle = 0): **TUTTU.**
- Mekanizma (ölçek uyuşmazlığı: kaynak bölge/eyalet ölçeğinde anlatır): **TUTTU.**
- Ek beklenti "kalıcı idare 1393-96'da kurumsallaşır": **ÇÜRÜDÜ** — Iranica Mîrânşah'ın
  valiliğini **1387**'ye koyuyor (Azerbaycan için).

## 5. ÖNERİ (UYGULANMADI, diff yok)
1. **Gence'ye `1386-01-01 timurlu` adımı bu kaynaklarla EKLENMESİN.** Elde yalnız eyalet
   ölçeği var; eklemek D207/D208'i (komşu + bölge devri) ihlal eder.
2. Gence 1386-1406 **"bulunamadı" beyanıyla AÇIK** kalsın; W41b'nin (a) seçeneği bekletilsin.
3. Kaynak için sıradaki yollar (denenmedi): Şerefeddin Ali Yezdî *Zafernâme* / Nizâmeddin Şâmî
   (birincil vakayinameler — Gence/Karabağ kışlağı 1386-87 adıyla geçebilir); EI² "Gandja"
   (Barthold–Boyle; Brill, ücretli); İA "Gence" (Mirza Bala, IV, 762-66).
4. Komşu zincirin (Tebriz · Berde · Revan · Şerur · Nahçıvan) 1386→1406 kesintisizliği, TDV
   `karakoyunlular` 1388 cümlesi nedeniyle ayrı bir kalem olarak sınıflandırılmalı.
