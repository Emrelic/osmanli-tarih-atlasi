# Atlas başlangıcı ilk tanıktan önce olan şehirler — ölçüm ve karar (14 Ekim 2026)

Kaynak: `data/sehir_tarihce_osm.js` — zinciri boş ve atlas noktası olan **56** kayıt (raporun "57"si; Hürremâbâd
kitabe kararıyla çıktı). Ölçüm: `girdi.yukle()` + tarihçe, bu oturum.

## Motor gerçeği (ölçüldü)
- Yerleşimin VAR OLDUĞU dönemi belirleyen tek alan **`kur:`** (`girdi.BILINEN_ALANLAR`: "motor: petek_epok() bu
  tarihten önce peteği komşuya devreder"). `kur:` yoksa nokta UFUK başından beri vardır.
- Değişmez 1 (`denetle.py:1244`) `kur:` öncesini atlar, sonrasında s/d/v ister ⇒ ilk dönemi ileri alıp `kur:`
  yazmamak 1285–… kesitlerinde **sahipsiz delik** üretir.
- Değişmez 5a `kur:` öncesindeki dönemi affetmez ⇒ `kur:` yazılırsa öncesindeki s/d/v dönemleri KIRPILMALI.
- `girdi.py` motor dondurma listesinde ⇒ yeni bir alan (ör. "görünme başlangıcı") TAM YENİDEN İNŞA ister.

## Kural çatışması
- `VERI-YAPISI` §kesinlik / ŞIRNAK: `kur:"1891-01-01"` + `kesinlik:"belirsiz"` **MEŞRU** — "haritada görünme
  günü için ALT SINIR" olarak.
- `VERI-YAPISI` 10 Ekim 2026 (KASA): "İLK ANILIŞTAN `kur:` TÜRETİLMEZ … `f:` o tarihtir, `kur:` YAZILMAZ".
- İkisi aynı anda uygulanamaz: `kur:` yazılmadan `f:` ileri alınırsa Değişmez 1 kırılır.

## Dört grup

| Grup | Sayı | Şehirler | Çare |
|---|---|---|---|
| A — biçimsel | 4 | Hâil, Isparta, Kırşehir, Portsaid | ilk tanık = atlas günü; değişiklik YOK |
| B — kuruluş tanıklı, yer aynı | 13 | Dedeağaç 1869, Batna 1844, El-Fâşir 1792, El-Obeyd ~1800, Feyzâbâd 1680-01-23, Hartum ~1700, Mürzük ~1400, Nâsıriye 1872, Senendec 1636-05-26, Saraybosna 1462-02, Sidi Belabbas 1843, Sincâ ~1886, Çanakkale 1463 | `kur:` = kuruluş (kural UYGUN) + öncesi dönemleri kırp |
| C — atlas noktası ESKİ şehri taşıyor | 7 | Van (Tuşpa 1232→), Malatya (Melitene), Basra (eski Basra), Şehrizor/Süleymaniye, Kandehar (eski Kandehar), Kuseyr (el-Kadîm), Hums (Lebde) | ÖNCE eski yer için AYRI nokta (koordinat + zincir), SONRA modern noktaya `kur:` — yoksa eski şehir haritadan silinir |
| D — yalnız ilk anılış | 32 | Balıkesir, Banaluka, Bilecik, Burdur, Çorum, Deyrizor, Drama, Ed-Dâmer, Cirge, Ergiri, Çölemerik, Hudeyde, Kesela, Gümülcine, Görice, Ağvât, Lâr, Mostar, Tatarpazarcığı, Preveze, Priştine, Reşt, Sisam, Şârika, Şibînülkûm, Tîzî Vezzû, Travnik, Tuzla, Vâdî Halfâ, Yefren, Ammâre, Benî Süveyf | ÇATIŞMA — aşağıdaki karar |

(B'de üç şehirde `kesinlik` yüzyıl: El-Obeyd, Hartum, Mürzük — `kur:` + `kesinlik:"yuzyil"`.)

## D grubu için seçenekler
1. **Şırnak kalıbı (önerim):** `kur:` = ilk anılış + `kesinlik` + `kaynak:` ve `neden:` alanlarında
   "kuruluş DEĞİL, ilk anılış — haritada görünme için alt sınır" beyanı; 10 Ekim kuralına "atlas yerleşimlerinde
   motor ancak `kur:` okuduğu için görünme alt sınırı `kur:`a yazılır, beyanla" istisnası eklenir.
   Motor değişmez, tam inşa gerekmez; bir sonraki olağan koşuda haritaya yansır.
2. **Yeni alan** (ör. `gor:` — görünme başlangıcı; motor `kur:` gibi okur, anlamı "ilk tanık"): kavramsal olarak
   temiz, ama `girdi.py` + `uret_petek.py` değişir ⇒ TAM YENİDEN İNŞA (7–8 saat, HAVVA) ve motor işi.
3. **Dokunma:** D grubu atlasta 1281'den kalır, borç tarihçede beyanlı durur.

## Sıra önerisi
B (13) hemen → A (4) kapanış notu → C (7) eski-yer noktaları ayrı iş → D (32) karara göre.
Her değişiklik: Değişmez 1/5a ve 2s (yabancı senkron) ölçülür; `kur:` ile kırpılan dönemlerin kronoloji
maddeleri (`olaylar*`) gerekiyorsa tarihçedeki kaynaklı olaylardan aktarılır.

## UYGULAMA — 14 Ekim 2026 (Emre: seçenek 1, Şırnak kalıbı)
- **B grubu:** Dedeağaç 1869 · Sincâ 1886 · El-Fâşir 1792 · Sîdî Bel Abbès 1843 yazıldı. Batna (kaynak yalnız arama
  özeti) ve Mürzük (bölge noktası) UYGULANMADI. El-Obeyd/Hartum/Saraybosna: yerlesimler.js kilitliydi → sonraki parti.
  Çanakkale/Feyzâbâd/Nâsıriye/Senendec: atlasta kaynaklı kur: zaten var, dokunulmadı.
- **D grubu:** 28 şehir (kur: = ilk tanık + kesinlik + neden beyanı; öncesi s/d/v kırpıldı). Betik: her kayıt yeniden
  okunup beklenen nesneyle BİREBİR karşılaştırıldı (28/28, plan dışı değişen 0). Gümülcine'nin mevcut 
eden:i
  KORUNDU (sonuna eklendi). UYGULANMAYAN 4: Kesela (atlasın kaynaklı 1840 kur'u) · Şibînülkûm (ölçülemedi ≠ yok) ·
  Sisam (nokta adayı temsil ediyor) · Tîzî Vezzû/Kabiliye (nokta bölgeyi temsil ediyor).
- **Ölçülen yan etki ve çaresi:** GÜNÜ olan kur: bir "kazanç" kırılmasıdır (YYYY-01-01 yıl-temsilî kovaya düşer).
  7 şehir (Bilecik, Burdur, Çorum, Mostar, Tatarpazarcığı, Banaluka, Vâdî Halfâ) Değişmez 2'de 2, 2s'de 5 açık
  üretti ⇒ ölçüt gevşetilmedi; her biri için ŞEHRİN İLK ANILIŞI maddesi yazıldı (data/olaylar_sehir_ilk.js,
  paket_15) — Emre'nin istediği şehir kronolojisinin "ilk bahsediliş" maddesi. TDV slug'ları ham metin başlığıyla
  doğrulandı (osman-i, hamidogullari, eretnaogullari, mostar, tatarpazarcigi, banaluka GERÇEK; osman-gazi, vadi-halfa ÖLÜ).
- **denetle (çıkış 0):** D1 309 (tavan) · D1b 0 · D2 0 açık · **D2s 189 (tavan 191 — İYİLEŞTİ, tavanın 189'a
  indirilmesi önerilir, Emre onayı)** · D2i 1 (tavan) · D2t 11 (tavan 13) · D5 0 · D5a 2 (tavan).

## C grubu — UYGULANDI 14 Ekim 2026 akşamı (Emre: "önerilerine katılıyorum, devam et")

Eski yer AYRI nokta oldu, dönem zinciri modern kayıttan ham metinle TAŞINDI (kaynakları içinde);
modern kayda Şırnak kalıbıyla `kur:` yazıldı, öncesi kırpıldı. Betik doğrulaması: 5/5 modern + 4/4 eski
kayıt beklenenle birebir, plan dışı değişen kayıt 0 (girdi.yukle yeniden okuması, 4587 → 4591 kayıt).

| modern nokta | kur: (ilk tanık) | eski nokta (yeni) | koordinat | bit: |
|---|---|---|---|---|
| Van | 1918-04-02 (onyıl; kurtuluş = terminus post quem) | Eski Van (Tuşpa) | Pleiades 874771 | 1918-04-02 |
| Malatya | 1838-01-01 (yıl; 1838 yazı, Aspuzu) | Eski Malatya (Battalgazi) | GeoNames 7457829 | YOK — yaşıyor (1883: 4542 nüfus, TDV) |
| Basra | 1494-10-02 (yıl; hicrî 900 kesişimin ilk günü) | Eski Basra (Zübeyr) | GeoNames 98245 — YAKLAŞIK, beyanlı | 1494-10-02 |
| Kandehar | 1773-01-01 (belirsiz; Ahmedşâhî 1747-73) | Eski Kandehar (Şehr-i Köhne) | Pleiades 59669 | 1738-03-24 (gün: EIr, kronoloji_iran maddesi) |
| Hums (Lebde) | 1893-01-01 (onyıl; en geç) | — Lebde AÇILMADI: 1000 sonrası yerleşim tanığı yok | — | — |

TDV metinleri bu iş için ham çekimle yeniden okundu (van, basra, kandehar, malatya). Kronoloji: 4 madde
data/olaylar_sehir_ilk.js'e (Basra 1494-10-02, Eski Kandehar 1738-03-24, Malatya 1838, Van 1918-04-02).

**Kalan 2 (ayrı araştırma ister):**
- **Şehrizor:** ortaçağ Şehrizor'un yeri TDV'de "kesin olarak bilinemeyen" (Yasintepe / Kızkale / Gülanber) ⇒
  yeri kesin olmayan eşitleme kuralı: nokta açılamaz. Ayrıca atlasın 1630-1918 dönemi Gülanber Kalesi'ne
  dayanıyor — Gülanber'in koordinatı bulunursa eski nokta odur. Modern Süleymaniye'ye kur: 1784 yazmak
  bölgenin 1233-1784 tarihini haritadan siler; eski nokta olmadan yapılmadı.
- **Kuseyr:** Kuseyr el-Kadîm (Myos Hormos) 8 km kuzeyde; terk tarihi yalnız "XV. yüzyıl" (ARCE) —
  bit: için yıl yok, uydurulmadı. Kaynak (Le Quesne 2007 / ARCE kazı raporları) okunmalı.
- **Kandehar sahip düzeltmesi** (TDV 1281 Kert, atlas cagatay) yapılmadı — ayrı karar.
