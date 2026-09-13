# KAYNAKLI SAHİPLİK HALKASI — ALTYAPI · C-HALKA-ALTYAPI · 13 Eylül 2026

```
GÖREV    oturumlar/KAYNAKLI-HALKA-0913.md (Emre kararı) · iş sırası ① + ② (tohum)
YAZILAN  js/app.js · css/style.css · VERI-YAPISI.md (yeni bölüm, dosya sonu) ·
         arac/denetle_yayin.py (dinamik yükleyici muafiyeti: ikinci liste) ·
         data/kaynakli_halka_ferhatpasa.js · data/kaynakli_halka_tekil.js ·
         denetim/ARAC-HALKA-SINA-0913.js · denetim/ARAC-HALKA-ADARA-0913.js · bu rapor
DOKUNULMAYAN  index.html (bağlama GEREKMEDİ — dinamik yükleme) · yerleşim/motor/künye · hukuki_sinirlar.js
COMMIT   YOK
```

## ① ŞEMA — özet (tam hâli VERI-YAPISI.md "Kaynaklı sahiplik halkası")
```
{ id, yer (TAM ad, TEK eşleşme) | yer_kon:[lat,lon], devlet (künye id | "osmanli"),
  tur? dogrudan|tabi|isgal, f+t (ARALIK) | tarih (NOKTA), kesinlik (skaler | {f,t}),
  kaynak:{ ad, sayfa|slug|paragraf|url, alinti, alinti_ozet?, gelenek }, rapor, not }
```
- Yalnız kaynaklı. Örtülü, çıkarım ve belirsiz hüküm halka almaz. Bölge adından şehre eşleme de çıkarımdır. "…hariç" gibi bir istisna cümlesi, karşı devletin sahipliğini söylemez.
- **Aralık** yalnız tek kaynak iki ucu birden veriyorsa ya da sürekliliği açıkça yazıyorsa. Öteki durumlar **nokta**dır.
- İki ayrı kaynağın uçları birleştirilmez. İkinci bir kaynak aralığı yalnız **daraltabilir**.
- **Kesin pencere:** `f` biriminin sonuna yuvarlanır, `t` biriminin başına. Nokta kendi birimi (gün, ay ya da yıl) boyunca görünür. `belirsiz` çizilmez.
- **Renk:** `_cTarafRengi` sonucu HSL'de dönüştürülür: L×0,62 (0,16–0,40 arası), S×1,25+0,10.
- **Kalınlık:** doğrudan 3 px · işgal 2,2 px · tâbi 1,6 px.
- **Çelişki:** her devlet ayrı halka alır, yarıçap 9 + 5×sıra.
- **Ayar:** "⑧ Kaynakla kesinleşmiş sahiplik halkaları", varsayılan KAPALI. `localStorage.halkaAc` try/catch içinde.
  - KAPALI hâl kaynağı boşaltır.
  - Katman `halka-` önekiyle ④ Siyasî kovasındadır.

## ② DOSYALAR VE SAYILAR
```
data/kaynakli_halka_ferhatpasa.js → window.KAYNAKLI_HALKA_FERHATPASA   50
data/kaynakli_halka_tekil.js      → window.KAYNAKLI_HALKA_TEKIL         3
toplam 53 · osmanli 36 · safevi 16 · portekiz 1
renk   osmanli #8e0b22→#5f0011 · safevi #a56cab→#75307d · portekiz #34fcfc→#00bcbc
```
Tohuma **alınmayanlar** (dosya başlığında da yazılı):
- örtülü, çıkarım ve belirsiz hükümler: Sarâb, Miyâne, Kirmanşah, Halepçe, Amâre
- "bkz. KITA 13" satırları: Van kuşağı; kaynak bu raporlarda yok
- arama özetleri ve BULGU-FERHATPASA üzerinden gelen ikinci el hükümler
- tarihsiz tanıklıklar: Kuba, Şâbüran, Merîvan
- nokta bağı çıkarım olanlar: Mahabad, Eçmiyadzin
- atlas noktası olmayan Kalhor/Zencir
- antlaşmanın bölge listesi
- GE "Erdebil ve Talış hariç" cümlesi

Koordinatör güncellemeleri işlendi:
- **M-3792 · Ahar:**
  - Osmanlı tâbi, dört kayıt: Eskandar s.582 + s.619-620 aralığı (1588→1592), Kütükoğlu s.168 noktası (1588), Petrushevsky s.168 noktası (1588).
  - Safevî: Eskandar s.619-620 noktası (1592).
  - Kütükoğlu s.195 çelişkisi `not`ta. Osmanlı 1590-1603 halkası yok.
- **M-3793:**
  - **Nihâvend:** TDV aralığı 1588→1603, Iranica aralığı 1589→1602, Monshi 1590 noktası.
  - **Luristan:** Kütükoğlu s.183 tâbi 1589 noktası; Safevî 1591 ve 1593 noktaları. TDV 1603 çelişkisi `not`ta; TDV'nin Osmanlı aralığı **silindi**.
  - **Burûcird:** Safevî. **Kût el-Amâre:** TDV aralığı.
  - 🟡 **Sapma:** Luristan "tâbi 1589–1592" tek bir aralık olarak yazılmadı. Başlangıç Kütükoğlu'dan, bitiş Monshi'den geliyor; şema ③ iki kaynağın uçlarını birleştirmeye izin vermiyor. İstenirse aralığa çevrilir.

Tekil:
- **Malaka:** Portekiz, 1511-08-10 → Ocak 1641.
  - Bitiş cümlesini TDV `malaka` gövdesinden bu oturum okudu: "130 yıl Portekiz işgali altında kaldıktan sonra Ocak 1641'de Hollandalılar'ın eline geçti".
- **Bargiri:** 1558→1740, TDV `van`.
- **Kotur:** 1558→1639. TDV `maku` 1639 cümlesiyle daraltıldı; gerekçesi `not`ta.

## ③ SINAVLAR
| sınav | sonuç |
|---|---|
| `node --check` (app.js · iki veri dosyası · alet) | ✓ |
| `ARAC-HALKA-SINA-0913.js` şema | 53 kayıt · **0 hata · 0 uyarı**. `yer` 53/53 tek yerleşime çözülüyor; `devlet` künyede ya da `osmanli`; günler gerçek; renk gri değil; künye penceresi aşımı yok |
| aynı alet · iki yönlü (D010) | bozuk 6 kaydın 6'sı yakalandı · pencere birim sınavı 5/5 |
| aynı alet · kesit | 1595-06-15: **13 halka / 13 yer** · 1591-06-15: 14 · 1590-06-15: 18 · çelişki 0 |
| `py arac/denetle_yayin.py` | **✓ yetim veri dosyası 0/323** · "12 dosya … ÇALIŞMA ANINDA yükleniyor" satırında iki halka dosyası da var |
| tarayıcı (arac/sunucu.py, gerçek sayfa kodu) | yükleyici 2/2 dosya · havuz 53 · konumu çözülemeyen 0 · 1595-06-15 AÇIK **13 özellik** · test çelişki kaydıyla Tebriz'de 2 özellik (sıra 0/1, `celiski:1`) · KAPALI **0 özellik** |

⚠️ **Kapı exit 1 veriyor ama sebep bu iş değil.** Önceden var olan "YAYIN BAYAT" durumu (koşu aktif) kapıyı kırmızı yapıyor. Ek olarak §40 uyarısı iki halka dosyasını "index.html YÜKLEMİYOR" diye listeliyor. 10 ek okuma dosyası da aynı sebeple o listede. Engelleyici değil; istenirse `CIZILMEYEN_MUAF`a gerekçesiyle eklenir (koordinatör kararı).

## ④ ÖLÇEMEDİKLERİM (D107)
```
ÖLÇÜLEMEDİ  GL ÇİZİMİ ve AÇILIR PENCERE — Browser paneli gizli (document.hidden, viewport 0×0;
            1280×800 emülasyonunda da harita 'load' olmadı, D118) · Claude in Chrome bağlı değil.
            ⇒ Tarayıcı sınavı özellik (feature) üretimine kadar GERÇEK kodla yapıldı; harita.getSource
              yalnız o çağrı için yakalandı. Halkanın ekrana basıldığı, tıklama penceresinin açıldığı
              ve ⑧ ayar kutusunun menüde göründüğü GÖZLE DOĞRULANMADI.
            ⇒ Görsel sınav için: haritayı görünür bir sekmede aç → ☰ → ⑧ işaretle → 1595-06-15 →
              `KHALKA.cizilen` 13 olmalı · Tebriz halkasına tıkla → TDV «Tebriz» alıntısı.
OKUMADIM    raporların kaynaklarını yeniden (D104) — yalnız TDV malaka gövdesi okundu
```

## ⑤ AÇIK KALEMLER
1. **Eski C nokta işaretleri → halka verisine göç.** `hukuki_sinirlar.js` › `ferhad-pasa-istanbul-1590` › `hat.nokta_atamalari` alanında 15 koordinatlı nokta var: kırmızı `hukuki-sinir-nokta` daireleri. Aynı kavramı çiziyorlar ve koordinatları atlas noktalarıyla aynı (C-FERHATPASA-HAT §6).
   - Önerilen yol: her atama bir halka kaydına dönüşür. `yer` atlas `ad`ı olur, `lat/lon` atılır. `kaynak` metni `kaynak.ad`, `paragraf` ve `alinti` alanlarına ayrıştırılır.
   - Tarih kaydın `f`/`t`'si ile **değil**, atamanın kendi kaynağının tarihiyle yazılır: TD 633 → Kasım 1590, TDV tebriz → 1585→1603.
   - `guven:"cikarim-guclu"` (Eçmiyadzin) ile `not`u "bölge→nokta eşlemesi ÇIKARIMDIR" diyen Şamahı **alınmaz**.
   - Göçten sonra `nokta_atamalari` silinmez, çizimi kapatılır. Bu `hukuki_sinirlar.js` sahibinin ve Oturum 1'in kararıdır.
   - Bu tohum Tebriz, Revan, Nahçıvan, Ordubad, Şerur, Hoy, Merâga, Mîyandoab, Tiflis, Mâku, Nihâvend ve Luristan'ı zaten kaynaklı kayıt olarak taşıyor. Kırmızı dairelerle aynı yere ikinci bir işaret düşüyor; halka ayarı açıkken ikisi birlikte görünür.
2. Kuba, Şâbüran ve Merîvan için tarihli cümle bulunursa halka kaydı yazılır.
3. Luristan 1589–1592 aralık/nokta seçimi (yukarıdaki sapma).
4. Görsel sınav — ④.
5. İş sırasının ③-⑤ adımları (kronolojiden türetme, CLAUDE.md §4 kuralı, dünya dalgası) bu işin dışında.
