# KAYNAKSIZ-ORNEKLEM-1010 — `kaynaksız s:` = 1841: beyan borcu mu, yanlışlık tahmini mi?

Zemin `origin/main` = `ed1c200e` (HEAD..origin 0) · ayrı worktree · dal `kaynaksiz-orneklem-1010`.
`data/` donuk (KOŞU 22) ⇒ **hiçbir düzeltme yazılmadı**, tavan önerilmedi (`§3.4④`).
Öngörü ve hüküm kuralı **doğrulamadan önce** commitlendi: `ab1c59c6` →
`denetim/KAYNAKSIZ-ORNEKLEM-1010-ONGORU.md`. Tam liste: `KAYNAKSIZ-ORNEKLEM-1010.csv`.

## CEVAP — tek paragraf
**İkisi de değil, ama "beyan borcu" adı yanıltıcıdır.** Kaynaksız bir kaydın rastgele seçilmiş
bir pencere-içi `s:` iddiası **%21,7** oranında YANLIŞ (10/46 ölçülen; Wilson %95 **%12–36**)
⇒ 1841'e **≈400 kayıt (226–655)**, *tek iddia düzeyinde*. Ama yanlışlık **eşit dağılmıyor**:
penceresi **1281-01-01'de başlayan** iddiaların **%70'i** yanlış (7/10, %40–89), daha geç
başlayanların **%8'i** (3/36, %3–22). Ve 1841 kaydın **1419'unda (%77)** en az bir
1281-başlangıçlı `s:` dönemi var. ⇒ Sayaç, **erken (1281 varsayılanlı) halkalarda bir
yanlışlık tahmini, geç halkalarda bir beyan borcudur.** Yemen deseni (7/7 kaynaksız, 4/4
yanlış) genelleşiyor — ama yalnız ERKEN halkada.

## ① Evren — tanım okundu, uydurulmadı
`arac/denetle.py::kaynaksizlik_olc(Y)`, varsayılan ufuk = **`girdi.VERI_UFKU` = (1281-01-01,
1923-10-29)** — KAYNAK-PENCERE v2, **pencereli ölçüt**. Kova `hicbiri`: `s:` taşıyan, kayıt
düzeyinde `kaynak:` YOK ve kaynağı dolu hiçbir `s:` dönemi VERI_UFKU ile kesişmeyen kayıt.
Ölçüldü: s_tasiyan 4148 · kayit_kaynaksiz 2301 · donem_ici 460 · **hicbiri 1841** (§1.5 ile aynı).
⚠️ Birim **KAYIT**; sınanan şey kayıt başına **bir** `s:` dönemi (aşağıda ②).

## ② Örneklem — yöntem birebir
- Betik `KAYNAKSIZ-ORNEKLEM-1010-orneklem.py`, tohum **20261010**, **N = 48**, `random.Random`.
- Tabaka: yerleşim koordinatından 11 makro bölge (kutu kuralları betikte, sıra önemli).
  Pay: Hamilton (en büyük kalan) **orantılı**. Tabaka içi `rng.sample` (anahtar sıralı havuz).
- Her seçilen kayıttan AYNI rng ile pencere-içi `s:` dönemlerinden biri (f, d sıralı listeden
  `rng.choice`) ⇒ İDDİA: *"yer, [max(f,1281-01-01), min(t,1923-10-29)) boyunca d'nin"*.
- 🔴 **Beyan:** bölge kutuları ölçümden ÖNCE dört kez düzeltildi (Milos→K.Afrika · Kûs→Arabistan
  · Körfez'in İran yakası→Arabistan/DİĞER · Volga→Ortadoğu sızıntısı). Her düzeltme örneklemi
  değiştirdi; düzeltme ölçütü yalnız bölge doğruluğuydu (`goz` kipi, ayrı tohum), hiçbir sürümde
  kaynak okunmadı. Bağlayıcı olan son sürüm; öngörü commit'i onun üstüne atıldı.
- Hüküm kuralı (öngörü dosyasında sabit): YANLIŞ = penceresinin **≥%25'i ya da ≥25 yılı**
  (küçüğü) X'in elinde değil · DOĞRU = eşik altı uç kaymaları "uç notu" · tâbi → DOĞRU, notla.

## ③ Kanıt gücü — her hüküm kendi etiketini taşır
| güç | n | anlamı |
|---|---:|---|
| DOĞRUDAN | 11 | GET 200, kaynak cümlesi yeri ADIYLA anıyor |
| DOLAYLI | 13 | GET 200, cümle yeri kapsayan şehir/bölge/kaleyle anıyor (ör. Kanina ← Avlonya) |
| ARAMA | 3 | yalnız arama özeti (GET başarısız: 10 MB sınırı / 400) |
| GENEL | 19 | kaynak okunmadı — egemenliği değişmemiş modern/çekirdek iddia (Caen 1792+, Vetluga 1547+ …) |
| ÖLÇÜLEMEDİ | 2 | Siverek (iki dolaylı tanık ZIT yön) · Miliana (yalnız Vikipedi; yönü YANLIŞ) |

TDV önce; sonra kurumsal/akademik (LoC Country Study · BiblioAsia/NLB · UNL Encyclopaedia of
Portuguese Expansion · TÜBA · Boisier doktora tezi · Mendoza Yargı Gücü). Vikipedi hiçbir hükmün
dayanağı değil. Tarama **SIRALI**; 429/503 görülmedi. Britannica 403, Iranica 403 (taşıma arızası,
"yok" sayılmadı). PDF'ler `pypdf` ile çözülüp cümle düzenli ifadeyle bulundu (kanal kırpması yok).

## ④ Sonuç — üç görüş, ve hangisine güvenilir
| görüş | Y | D | Ö | ölçülende YANLIŞ | Wilson %95 | 1841'e |
|---|---:|---:|---:|---:|---|---|
| **geniş** (GENEL dahil) | **10** | **36** | **2** | **%21,7** | **%12,3–35,6** | **≈400 (226–655)** |
| kanıtlı (GENEL→Ö) | 10 | 17 | 21 | %37,0 | %21,5–55,8 | 682 (396–1027) |
| sıkı (yalnız GET) | 9 | 15 | 24 | %37,5 | %21,2–57,3 | 690 (390–1055) |

⚠️ **Kanıtlı/sıkı görüş YUKARI YANLIDIR:** GENEL kovası seçici değil, *kolay* kayıtlardan oluşuyor
(19'u da egemenliği değişmemiş geç iddia) — onları atmak paydadan doğruları atmaktır. Merkez tahmin
**geniş görüştür**; öteki ikisi "GENEL hükümlere hiç güvenmesek" duyarlılığıdır.
Ölçülemeyen uçları (geniş): hepsi doğru %20,8 · hepsi yanlış %25,0 ⇒ **384–460**.

**Sonradan tabakalama (1281 başlangıcı):** evrende rastgele iddianın 1281'de başlama ağırlığı
467/1841 (%25,4) ⇒ 467×0,70 + 1374×0,083 ≈ **441** — merkez tahminle uyumlu.

**Kayıt düzeyi (kaba, n küçük):** 1419 kaydın en az bir 1281-başlangıçlı halkası var; o halkaların
%70'i (%40–89) yanlışsa **≈990 kayıt (570–1260) zincirinde en az bir yanlış halka** taşır. Bu, tek
iddia tahmininin (≈400) **üstündedir** ve öngörü dosyasındaki "alt sınır" beyanını sayıyla doğrular.
Ayrıca sınanmayan halkalarda **5 kayıtta** yanlış/çelişki tesadüfen görüldü (Vize 1413-53 Osmanlı ↔
TDV Bizans · Ermenek 1397-1402 · Santorini venedik ↔ Naksos/1537 · Purwokerto 1743-1811 · Maan ↔ TDV 1916).

## ⑤ Bölge dağılımı — beyan
| bölge | n | Y | D | Ö | evren |
|---|---:|---:|---:|---:|---:|
| Avrupa | 11 | 1 | 10 | 0 | 405 |
| Anadolu-Kafkas | 5 | 1 | 3 | 1 | 168 |
| GD Asya-Okyanusya | 5 | 2 | 3 | 0 | 203 |
| **Sahra-altı Afrika** | 5 | **4** | 1 | 0 | 174 |
| Amerika | 4 | 0 | 4 | 0 | 163 |
| Doğu Asya | 4 | 0 | 4 | 0 | 154 |
| Kuzey Afrika | 4 | 1 | 2 | 1 | 159 |
| Orta Asya-Sibirya-Rusya | 4 | 0 | 4 | 0 | 156 |
| Güney Asya | 3 | 1 | 2 | 0 | 126 |
| Ortadoğu-İran | 2 | 0 | 2 | 0 | 89 |
| Arabistan | 1 | 0 | 1 | 0 | 44 |
Yemen örneklemde **yok** (Arabistan payı 1: Tâif). ⇒ Tahmin Yemen'den YUKARI çekilmedi.
Yanlışlar Afrika Boynuzu + Kızıldeniz (Dahlak · Cîcîga · Avaş · Ali Sabîh), Malabar/Sulawesi/Riau,
Arnavutluk kıyısı (Kanina) ve Çanakkale'de; Avrupa/Amerika/Rusya/Doğu Asya'nın geç iddiaları temiz.
Bölge başına n 1-11 ⇒ bölge oranları **tahmin değil, gösterge**.

## ⑥ Öngörü ↔ ölçüm (öngörü `ab1c59c6`)
| öngörü | ölçüm | |
|---|---|---|
| ölçülemedi 8/48 | geniş 2 · sıkı 24 | ❌ iki yönde de tutmadı — "ölçülemedi" sayısı KANIT EŞİĞİNE bağlı çıktı |
| YANLIŞ ≈%25 (%15–40) | %21,7 | ✅ aralıkta |
| 1281-başlangıçlı ≈%45 | **%70** | ❌ **ÇÜRÜDÜ — desen öngördüğümden GÜÇLÜ** |
| geç başlayan ≈%15 | %8 | ❌ öngörüden temiz |
| 1841'e ≈460 | ≈400 (226–655) | ✅ aralıkta |
En değerli satır üçüncüsü: "1281 varsayılanı" sinyalini öngörmüştüm ama **gücünü küçümsemiştim.**

## ⑦ Ne bulamadım
- Kilitbahir'i ADIYLA anan 1920-23 kaynağı (YANLIŞ hükmü dolaylı: TDV Gelibolu Yunan işgali +
  İtilaf Boğazlar mıntıkası; kayıtta `isg:` yok).
- Siverek'in 1507-14 sahibi (Diyarbekir Safevî ↔ Urfa Akkoyunlu, ZIT yön) — ÖLÇÜLEMEDİ.
- Miliana için kabul edilebilir kaynak (TDV'de madde yok) — ÖLÇÜLEMEDİ, Vikipedi yönü YANLIŞ.
- Bantaeng için GET (Bougas PDF 10 MB sınırını aştı) — ARAMA.

## ⑧ Öneri (hüküm koordinatörde; veri yazılmadı)
1. Sayacın adı "beyan borcu" olarak kalırsa **yanıltır**: alt kova önerisi — kaynaksız ∧ penceresi
   1281-01-01'de başlayan `s:` halkası (bugün **1419 kayıt**). Bu bir **yanlışlık şüphesi
   kovasıdır**; geri kalanı (422) gerçek beyan borcuna yakın.
2. Sıradaki ölçüm: 1281-başlangıçlı halkalardan ikinci, daha büyük örneklem (n≈40, aynı yöntem) —
   %70'in aralığı (%40–89) bugün tek başına politika kurmaya yetmez.
3. Öncelik bölgesi: Afrika Boynuzu/Kızıldeniz (4/5 yanlış), GD Asya kıyı sultanlıkları.

## Dosyalar
`KAYNAKSIZ-ORNEKLEM-1010.md` (bu) · `.csv` (kayıt · bölge · hüküm · güç · kaynak · HTTP · cümle)
· `-ONGORU.md` · `-evren.py` · `-orneklem.py` · `-orneklem.json` · `-analiz.py` · `-hukum.py`
· `-tabaka1281.py`. Yeniden üretmek: `py -evren.py <wt> evren.json` → `py -orneklem.py evren.json
orneklem.json` → `py -analiz.py orneklem.json -hukum.py -hukum.py <csv>` (hükümler iki listede: H, H2).
