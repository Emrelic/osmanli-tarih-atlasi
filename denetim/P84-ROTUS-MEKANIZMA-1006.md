# P84-ROTUS-MEKANIZMA-1006 · Harita rötuşu mekanizması kuruldu (UMIT tarafı, motor tuzu YOK)

Oturum: P84-ROTUS-TASARIM-1006 (devam) · 6 Ekim 2026 · görevi veren: UMIT İRTİBAT
Tasarım: `denetim/P84-ROTUS-TASARIM-1006b.md` (koordinatör onayı + dört cevap)
Dal: `umit-rotus` (temel `origin/makine/umit` @ `07cb6062`) · push YOK
**Motor tuzu dört dosyaya dokunulmadı.** `data/rotus.js` bu dalda YOK: koordinatör
eklesin diye ayrı diff (`denetim/ROTUS-ISKELET-1006-KOORD.diff`).

---

## 1. NE KURULDU
| dosya | ne | not |
|---|---|---|
| `js/rotus.js` (yeni) | **TEK uygulama**: kayıt şeması (R1) · hüküm/onay (R2) · `etkin(liste, gün)` · `uygula(fc, gün, kimlik, polygonClipping)` · `konturlar` | tarayıcıda `window.ROTUS_COZ`; node'da `module.exports` |
| `arac/rotus_coz.js` (yeni) | node CLI: `data/rotus.js`i `js/rotus.js`in KENDİ işleviyle okur → JSON | `odak_cozum.js` kalıbı: kopya YOK. Dosya yoksa `{dosya_var:false}` çıkış 0 · bozuksa `{hata}` çıkış 2 |
| `js/app.js` | ① `devletGuncelle` (yabancı) ve `guncelle` (Osmanlı `OSMANLI`/`OSM-TABI`) gövdelerine rötuş · ② `rotus-kontur` kesikli beyaz kontur · ③ ⑤b anahtarı (`rotusAnahtar`) · ④ ✏️ teklif çizim kipi → `rotus-teklif-<gün>-<ssdd>.json` · ⑤ `KATMAN_KUMESI`: `rotus` + kutusuz `rotuscizim` kovası | rötuş yokken imzalar `"0"`, `rotusUygula` girdiyi AYNEN döndürür ⇒ bugünkü çizim bit-bit aynı |
| `index.html` | ⑤b "Rötuşlar" kutusu (varsayılan AÇIK) + "✏️ Rötuş teklif et" düğmesi + `js/rotus.js` betiği | `?v=` damgasına dokunulmadı (yeni satır mevcut `r11872` ile) |
| `arac/denetle.py` | **Değişmez R** (`degismez_r` · `degismez_r_rapor`), Değişmez 8'den sonra | boş listede gövde YÜKLENMEZ |
| `denetim/ARAC-ROTUS-SINAV-1006.py` (yeni) | sınav: 13 vaka, iki yön, biri GERÇEK geometri | |

**A ve B görünümü (karar ②):** B (`dolgu-b-*`) A gövdelerinin ÜSTÜNE çizilen bir
katman. Rötuş A gövde kaynaklarına (`devlet` · `osmanli` · `vassal`) uygulandığı
için **iki görünümde de** görünür; ayrı kod gerekmedi.

## 2. DEĞİŞMEZ R — ne soruyor
R1 şema + mükerrer id · R2 yalnız `hukum:"uygun"`; `aykiri`/`veri`/`olculemedi`
geçemez, K6-K8 `uyari` yalnız `kontrol.onay.uyarilar`da adıyla geçer (karar ④) ·
**R3** canlılık: rötuşsuz gövdede `kime`nin ≥2 BİLEŞENİNE değiyor mu (değmiyorsa
ÖLÜ ⇒ ihlal) · **R4** poligonda `[f,t)` boyunca `kime` olmayan sahipli yerleşim ·
**R5** ters yön: `kimden` bileşeni bölünüyor/siliniyor mu + kayıtta adı geçmeyen
gövdeye >1 km² taşma · **R6** poligondaki kaynaklı halka `kimden` lehine mi · **R7**
f/t `kime`/`kimden` gövde dönem sınırına oturuyor mu · **R8** iki rötuş çakışıyor mu ·
**R9** node/shapely/gövde yoksa ÖLÇÜLEMEDİ (çıkış 2, yalnız ölçülecek kayıt varsa) ·
**R0** `index.html` dosyayı yüklüyor ama dosya yok (404) ya da kayıt var ama site
yüklemiyor. Liste ADIYLA basılır, sayı tavanı YOK (`§3.4(5)`).
⚠️ **C (hukukî hat) SORULMUYOR** — satırda yazılı; kontrolde K7 sorar. Açık borç.

## 3. KAPILAR — ölçüldü
| kapı | önce | sonra |
|---|---|---|
| `node --check` `js/app.js` · `js/rotus.js` · `arac/rotus_coz.js` | — | ✓ |
| `py arac/denetle_arayuz.py` | çıkış 0 · 34 denetim · ölü yok | çıkış 0 · 34 denetim · ölü yok |
| `py arac/denetle.py` | çıkış **2** · ölçülemeyen 1 (Değişmez 8: `devletler_harita.js` yok) | çıkış **2** · aynı tek ölçülemeyen · yeni satır `Değişmez R ✓ 0 kayıt (data/rotus.js yok ⇒ site de 0 uygular)` · R satırı dışında çıktı **birebir** aynı (`diff` boş) |
| sınav | — | **13/13**, çıkış 0 (aşağıda) |

**Sınav** `py denetim/ARAC-ROTUS-SINAV-1006.py --cozulmus <coz-c dizini>`:
⓪ boş liste ⇒ ✓ ve gövde fabrikası ÇAĞRILMADI · ① geçerli ⇒ temiz · ② zaten bağlı ⇒ R3 ·
③ poligonda B'nin yerleşimi ⇒ R4 / ikizi (nokta kime'nin) temiz · ⑤ `askida` ⇒ R2 ·
⑤b K8 uyarısı onaysız ⇒ R2 / onaylı ⇒ temiz · ⑤c K4 AYKIRI onaylı bile ⇒ R2 ·
kayıt dışı sahip ⇒ R5 · ⑥ gövde yok ⇒ ÖLÇÜLEMEDİ ·
**④ GERÇEK (yayın gövdesi, İbrail 1359-1420):** en dar noktadaki 26,7 km² şerit ⇒
**R5: "`bogdan` bileşeni 2'ye bölünüyor — kopan 509 km² @27,80/44,66 (YENİ ENKLAV)"** ·
ikizi (güney ucu da içinde, 516 km²) ⇒ temiz. (Tasarım belgesinde öngörülen 480 km²;
fark: o ölçüm 0,02° şerit + farklı birleşim.)

**Tarayıcı** (yerel sunucu, Claude_Browser; iş bitince kapatıldı):
- Açılış: konsolda hata 0 · `rotus-kontur` görünür, `rotus-cizim-*` 3 katman doğru
  kovalarda · sınıflanmamış listede rötuş katmanı YOK.
- Bellek içi sentetik İbrail kaydıyla (`window.ROTUS`, dosyaya yazılmadı) 1400-06-01:
  şerit ve güney uç **Eflak'ta**, **Boğdan'dan kesik** · sayaç birleşti 1 / kesildi 1 /
  hata 0 · kontur 1 · ⑤b KAPALI ⇒ ham gövde (şerit Boğdan'da), kontur gizli · yeniden
  AÇIK ⇒ rötuş geri · pencere dışı (1430) ⇒ uygulanmıyor.
- Çizim kipi (gerçek DOM fare olaylarıyla): imleç crosshair, çift tık yakınlaştırması
  kapalı · 4 px'ten fazla sürüklenen tık nokta EKLEMİYOR · Backspace geri alıyor ·
  Esc iptal ediyor · çift tık bitiriyor · teklif JSON'u doğru (gün, gün_yazı, görünüm
  A/B, geo kapalı halka, kime/kimden adayları, not, sayfa sürümü) · açılan panel 0 ·
  imleç/yakınlaştırma geri yükleniyor. İndirme ve `prompt` sınavda sayfa içinde
  yakalandı; gerçek dosya inmedi.

## 4. ÖLÇÜMÜN DÜZELTTİĞİ ÜÇ KUSUR (yazım sırasında)
1. **Parça ≠ bileşen.** `_D8Govde.kesit` gövdeyi motor PARÇALARI olarak verir (kenar
   paylaşan çokgenler). İlk R3/R5 parça saydı ve gerçek İbrail'de **YANLIŞ TEMİZ**
   verdi. Şimdi o günün gövdesi poligon kutusu ± 3° içinde birleştirilip bileşen
   sayılıyor.
2. **Kıl payı boyun.** Uçları komşu sınırına TAM değen şerit, koordinat yuvarlamasıyla
   0,1 m'lik bir boyun bırakıyordu; 509 km²'lik kopuk parça "bağlı" sayıldı. R5 kesimi
   ~10 m tolere ediyor (`ROTUS_BOYUN_DER`).
3. **Esc yutuluyordu.** Çizim tıkları haritanın öteki işleyicilerine de gidip panel
   açıyordu, panelin Esc'i `stopPropagation` yapıyordu. Şimdi fare olayları harita
   kabında yakalama evresinde alınıp durduruluyor, tuşlar `window` yakalamasında.
Ayrıca: R7 ilk yazımda yalnız `kime` sınırına bakıyordu. İbrail'de kopukluğu açan
`kimden` (Boğdan 1359'da belirir) ⇒ R7 ve ölçüm günleri `kime ∪ kimden`. ⑤b rozeti
genel döngünün katman sayısıyla çakışıyordu ⇒ kayıt sayısı kutunun ipucunda.
Sınav beklentimde bir hata da vardı ("R5,R7" yazmıştım, doğrusu "R5"); kod değil
öngörü düzeldi, sınavda not var.

## 5. BİLİNEN SINIRLAR (saklanmıyor)
- **C hukukî hat** R'de sorulmuyor (K7 kontrolde sorar).
- R3/R5 bileşenleri poligon ± 3° penceresinde kurulur. Pencerenin DIŞINDAN dolanıp
  birleşen halka biçimli bir gövde burada kopuk görünür. Ölçülmedi.
- Teklifin `kime/kimden_adaylari` ekrandan okunur. Rötuş açıkken çizilirse mevcut
  rötuşlu hâli okur (`rotus_acikti` alanı bunu kaydeder). Kesin değerleri K1-K3 ölçer.
- Polygon-clipping kıl payı kenarda patlarsa gövde OLDUĞU GİBİ kalır, konsola
  `[rötuş] … uygulanamadı` düşer (sessiz değil).
- MÖ tarihleri: `rotusGun` işaretli yıl üretir, ama dizgi karşılaştırması MÖ için
  doğru sıralamaz. MÖ rötuşu bu sürümde desteklenmiyor.
- Etiket yerleşimi, devir/işgal/bölge katmanları HAM gövdeyi kullanır (karar ①:
  rötuş sahiplik değildir).

## 6. KOORDİNATÖRE — `denetim/ROTUS-ISKELET-1006-KOORD.diff`
`data/rotus.js` (BOŞ `window.ROTUS = []` + şema yorumu) ve `index.html`e onu
yükleyen TEK satır. İkisi aynı diff'te, çünkü biri olmadan öteki R0 ihlalidir (404 ya
da "kayıt var, site okumuyor"). `git apply --check` bu dalın ucunda temiz, CR 0.
Ölçüldü, iki yönde: diff uygulanmış hâlde `Değişmez R ✓ 0 kayıt` · satır var ama dosya
silinmiş hâlde `✗ R0 index.html data/rotus.js'i yüklüyor ama dosya YOK (404)`. Yeni rötuş = bu diziye bir kayıt; koşu
GEREKMEZ, yalnız yayın + sürüm damgası.
