# KASA-VIKIPEDI-1004 — Vikipedi'yi anan 14 aday (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatörün talebi · taban `origin/main` `11bcae71` (temiz çalışma ağacında `girdi.yukle()`)
14 kaydın Vikipedi geçen **bütün alanları** (kayıt `kaynak`/`neden`/`not` ve dönem `kaynak`ları) tek tek okundu. Hrvatska enciklopedija ham sayfadan okundu. **Düzeltme YAZILMADI.**

## HÜKÜM (ölçtüm)
| hüküm | sayı | kayıtlar |
|---|--:|---|
| 🔴 **İHLAL** (tarih/sahiplik için Vikipedi tek dayanak) | **2** | Cres · Şefşâven |
| 🟡 **İKİNCİL** (yanında akademik/kurumsal kaynak var) | **3** | Bosna Dubiçası · Elba · Fortín Muñoz |
| ⚪ **ANMA** (kural uygulanmış: "yalnız Vikipedi'de, kullanılmadı / yıla indirildi") | **9** | Diyarbakır · Nuhayb · Nairobi · Avarua · Colcha K · Elorza · Putre · Tocopilla · San Pedro de Atacama |
- ⇒ Koordinatörün vekili (olumsuz kelime ±70 karakter) 14'ü "dayanak gibi" sınıflamıştı. Elle okununca **9'u kurala uymuş**. Olumsuz ibareler vekilin penceresinin dışında kalmış ("yalnız Vikipedi'de", "kabul edilmez", "TEK BAŞINA dayanak SAYILMADI", "dayanaksızdı").
- 📌 **Listeye girmemiş bir ek İHLAL adayı:** **Maroa** (`yerlesimler_a78_amerika.js`). `not:` "Koordinat en.wikipedia (Maroa, Amazonas)." Konumun tek dayanağı Vikipedi; yanında gazetter (GeoNames/TGN) yok. Konum kırmızı çizgisi tarih/sahiplikten ayrı ağırlıkta (koordinatörün ① notu).

## SATIR SATIR
| ad | dosya | Vikipedi neye dayanak? | yanındaki kaynak | öneri |
|---|---|---|---|---|
| **Cres (Cherso)** | yerlesimler.js | **SAHİPLİK**: Rapallo 1920 ile İtalya'ya geçiş. "WebFetch ile Wikipedia 'Cres' maddesi doğrulandı" | Yok. Rapallo adıyla anılıyor ama metni ya da kurumsal kaynağı yok. Napolyon dönemleri LZMK `krk-otok`'tan (bölgesel model) | 🔴 **İHLAL**. Ayrıca veri İtalya'yı **1918-11-11**'den başlatıyor; bu gün Vikipedi cümlesinde de yok (`neden` bunu "BASİTLEŞTİRME" diye beyan ediyor) |
| **Şefşâven** | h2_kuzeyafrika | **TARİH/SAHİPLİK**: `rif-cumhuriyeti` başı 1924-11-15 = "Wikipedia '1924 retreat from Chaoen' — İspanyol tahliyesi" | Yok ("islamansiklopedisi'de bu tanecik yok") | 🔴 **İHLAL**. Ek: kaynak "İspanyol **tahliyesi**" diyor; demek ki önce İspanyol idaresi var, ama veri `fas 1659 → 1924` kesintisiz. İspanyol dönemi eksik görünüyor (ölçülmedi) |
| **Bosna Dubiçası** | ek29 | **TARİH**: Osmanlı başı 1538 ("Fetih: Wikipedia 'Battle of Dubica' — 1538") | ✅ **Hrvatska enciklopedija** `kozarska-dubica`, kaydın kendi dönem kaynağında ve ham sayfada doğrulandı: "…a 1538. pala je pod osmansku vlast." | 🟡 **İKİNCİL**. 1538'in akademik dayanağı var. Kusur **beyan yerinde**: kayıt düzeyi `kaynak:` fethi Vikipedi'ye bağlıyor, HE'yi değil |
| **Elba** | yerlesimler.js | **TARİH/SAHİPLİK**: 1399-02-19 Piombino | Britannica 'Elba' ("çapraz doğrulandı … iki bağımsız kaynak") | 🟡 **İKİNCİL**. ⚠️ Britannica'nın **günü** (19 Şubat) verip vermediğini ölçmedim. Vermiyorsa gün yalnız Vikipedi'den gelir ve gün düzeyinde ihlal olur |
| **Fortín Muñoz (General Díaz)** | a78_amerika | **TARİH**: kuruluş 1923-08-15. Vikipedi yalnız **aracı** ("es.wikipedia … üzerinden"), alıntı ABC Color'dan | Folia Histórica del Nordeste 27 (UNNE 2016), kimlik için · ABC Color (gazete), gün için | 🟡 **İKİNCİL**. ⚠️ Günün dayanağı bir **gazete**; kaydın kendisi "Gün kaynağı gazete" diye beyan ediyor. Vikipedi ihlali değil, kaynak kalitesi sorusu |
| Diyarbakır | yerlesimler.js | Eski `1378` sınırının provenansı: "'Wikipedia kronoloji denetimi' commit'i … §4'e göre tek dayanak olamaz; TDV `diyarbakir` gövdesi 1401 veriyor" | TDV | ⚪ ANMA. Vikipedi değeri **kaldırılmış**; bir düzeltmenin kaydı |
| Nuhayb | ek4 | Şammar/Aneze tarafları: "TEK BAŞINA dayanak SAYILMADI" | UNESCO | ⚪ ANMA. Kayıtta `s:` dönemi **hiç yok**; Vikipedi hiçbir dönemi beslemiyor |
| Nairobi | afrika2 | "30 Mayıs yalnız Vikipedi" | nairobi.go.ke (YIL) | ⚪ ANMA. Gün yıla indirilmiş |
| Avarua | a78_okyanusya | "27 Eylül/27 Ekim 1888 adayları yalnız Vikipedi'de" | Britannica · NZ Legislation | ⚪ ANMA. Yıla indirilmiş |
| Colcha K | a78_amerika | "Merkez naklinin tarihi … yalnız Vikipedi/derlemeler: 2 Şubat 1917" | Bolivya Senatosu | ⚪ ANMA. 1917 veride yok (`kur` 1885) |
| Elorza | a78_amerika | "1774 … 1866 … (Vikipedi/Scribd, kabul edilmez)" | DHV | ⚪ ANMA |
| Putre | a78_amerika | "canje 1884-03-28 [yalnız Vikipedi]" | Revista de Indias | ⚪ ANMA. Veri 1884-10-31 kullanıyor |
| Tocopilla | a78_amerika | "es.wikipedia 22 Mart 1879" ↔ Memoria Chilena 27 Mart (seçildi) | Memoria Chilena | ⚪ ANMA |
| San Pedro de Atacama | a78_amerika | "İşgal: Wikipedia 'Batalla de Río Grande' / La Tercera 2022" | Revista de Indias (1888 kanunu) | ⚪ ANMA **şimdilik**: `isg:` veriye yazılmamış, dönem 1888 kanunundan. ⚠️ `not:`'taki `isg` önerisi uygulanırsa işgal günü Vikipedi + gazeteye dayanır ⇒ o an İHLAL adayı olur |

## DUBİÇA — 1536 mı 1538 mi? (koordinatörün özel sorusu)
Hrvatska enciklopedija, ham sayfadan harf harf:
- `kozarska-dubica`: "Kratko vrijeme, 1398–1402., u vlasti je vojvode Hrvoja Vukčića Hrvatinića, **a 1538. pala je pod osmansku vlast**."
- `jasenovac`: "Bosanski sandžak-beg Husrev-beg **osvojio ga je 1536.**"
- `bosanski-brod`: "**Osmanlije su ga zauzeli 1536.**"
- (`dubica`, karşı yakadaki Hrvatska Dubica: "Od 1538. … pod osmanskom vlašću.")

⇒ **İkisi de fetih yılı ve ikisi de doğru, ama FARKLI YERLER için.** HE Dubica'nın 1538'de, Jasenovaç ile Brod'un 1536'da düştüğünü söylüyor. "1538 muharebe, 1536 fetih" ayrımı kaynakta yok: Dubica için de HE "osmanlı idaresine düştü" diyor, yani fetih.
⇒ Kusur Dubiça'da değil, **Jasenovaç ve Bosna Brod'unda**. İkisi kendi HE kaynaklarının 1536'sını not edip Dubiça'nın 1538'ini devralmış. Koordinatörün 1538'i değiştirmeme ihtiyatı Dubiça için doğruydu; Jasenovaç ve Brod için 1536'yı destekleyen kendi akademik kaynakları kayıtlarında zaten var.
⇒ **Benim önceki raporlarımda bir düzeltme:** `KASA-ZINCIR-1004`'te "Dubiça'nın 1538'inin tek dayanağı Vikipedi" demiştim. Bu **kayıt düzeyi `kaynak:` alanı için** doğru, **kayıt için** yanlış: aynı kaydın dönem kaynağı HE'yi anıyor ve HE 1538'i veriyor. Uç 🔴 değil 🟡.

### Yan bulgu (ölçülmedi, yalnız okunan maddede): HE Dubica'da üç Avusturya dönemi veriyor
"Za austrijsko-turskih ratova više puta dolazila pod vlast Austrije (**1687–1701.**, 1716–41. i 1788–96/97). Svištovskim mirom 1791. vraćena je Osmanlijama…"
- **1687–1701:** atlasta **yok** (`d:` Osmanlı 1538→1718 kesintisiz). Karlofça metninin "Dubica'dan çekilecek" demesiyle uyumlu bir dönem.
- 1716–41: atlas `avusturya 1718-07-21 → 1739-09-28`. Uçlar farklı; kaydın kendisi "fiilî uçlar farklı" diye beyan ediyor.
- 1788–96/97: atlas `isg:` 1788-08-26 → 1791-08-04. HE aynı cümlede hem "96/97" hem "1791'de Svištov ile iade" diyor; kaynak kendi içinde tutarsız (`D211 ⑥`).

## BULAMADIM / beyan
- Elba: Britannica'nın 1399-02-19 gününü verip vermediği ölçülmedi.
- Cres: Rapallo için kurumsal bir kaynak aranmadı (talimat: düzeltme yok). Külliyatta bir Rapallo olay maddesi olup olmadığına bakılmadı.
- Şefşâven: İspanyol işgal döneminin başlangıcı aranmadı.
- Vekil dışı kalanlar (Deyrülkamer, Qitai, Şelon, Kavieng, Garapan, Funafuti, Rivadavia) da okundu; hepsi olumsuz beyan, kurala uymuş. Wikisource geçen 7 kayıt (ESBE, Yuan Shi vb.) Vikipedi değil, birincil metin barındırıcısı; dışarıda tutuldu.
