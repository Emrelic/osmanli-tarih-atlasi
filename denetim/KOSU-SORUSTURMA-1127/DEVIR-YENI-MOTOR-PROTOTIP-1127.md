# DEVİR — yeni motor PROTOTİPİ (Emre onayı 27.11.2026: "Evet, prototip")

Yazan: HAVVA'daki koşu soruşturması oturumu. Bu belge prototipi yapacak YENİ oturumun tek başına okuyup
işe başlayabilmesi içindir. Önce şunları oku (hepsi `origin/motor-b-dolgu-yerel-1127` dalında):

1. `denetim/KOSU-SORUSTURMA-1127/YENI-MOTOR-KURALLARI-TASLAK-1127.md` — uygulanacak 13 kural (K1–K13).
2. `denetim/KOSU-SORUSTURMA-1127/MOTOR-ENVANTER-1127.md` — eski motorun kuralları, Emre'nin kararları
   (§4b, §4c kendi sözleriyle), çelişkiler.
3. `CLAUDE.md` (çalışma düzeni, makine rolleri, git kuralları).

## Amaç

13 kuralın haritada ne çizdiğini, **eski haritayla yan yana** göstermek. Emre gözle bakıp "evet bu" ya da
"şurası yanlış" diyecek. Prototip üretim kodu DEĞİLDİR: hız, önbellek, çıktı şeması, bütün dünya, bütün
tarihler kapsam dışı. Soru tek: kural seti doğru haritayı veriyor mu?

## Kapsam

- **İki kutu:** ① Anadolu–Balkanlar (boylam 15…45, enlem 33…48) — yoğun yerleşim, nehir, boğaz;
  ② Mısır–Arabistan (boylam 25…60, enlem 10…35) — çöl, yalnız şehirler, Emre'nin "çölde iki devlet" örneği.
  Kutu kenarı yanıltmasın diye hesap kutudan her yöne ~25 gün (≈8°) geniş alınır, resim kutuya kırpılır.
- **Üç gün:** 1300-06-15 · 1550-06-15 · 1760-03-11.
- **Girdi:** depodaki veri (`arac/girdi.py` `GIRDI_DOSYALARI`: `data/yerlesimler*.js`, `data/devletler.js`),
  `veri-kaynak/` (Natural Earth kara, göl, nehir), antlaşma hatları (`index.html`in yüklediği
  `data/d_sinirlar*.js`; eski motor `node` ile okur, `_SK_HAM`, `uret_petek.py:487-556`), geçitler
  `data/gecitler.js`.
- **Karşılaştırma tabanı:** yayındaki harita (`main`deki paketler; `py arac/kodla.py coz-c data
  data/devletler_harita.js` ve `… data/donemler.js donem` ile açılır). Bu, Koşu 39'un 5 günlük bandıdır;
  eski Ⓑ dolgusunun bitmiş çıktısı HİÇ yok (Koşu 40 bitmedi), yani "eski A" ile "yeni tek yapı"
  karşılaştırılır — resmin altına yaz.

## Eski koddan alınabilecek parçalar (kopyala, içe aktarma: `uret_petek.py` içe aktarılamaz, :18-45)

| İş | Eski yer (`arac/uret_petek.py`, etiket `motor-eski-kosu40-1127`) |
|---|---|
| Kara maskesi, göller (baraj kuralı) | 804–903 |
| Nehir sınıfları, geçiş bedeli (kenar bazlı), geçitler | 904–1056, 1524–1721 |
| Yerleşim yükleme, boya anahtarı | 1094–1158 |
| Izgara (0,05°), tohum yerleştirme | 1300–1425 |
| Eğim sürtünmesi (DEM) | 728–802, 1427–1522 |
| Boğaz yasağı, kıstak köprüsü, tohum yakası | 1735–1951 |
| Çok kaynaklı Dijkstra (adım bedeli) | 1988–2033 |
| Sahne kuralı (`_mo_sahne_disi`), o günün sahipleri (`_gun_sahipleri`) | ≈5700, 8406–8429 |
| Antlaşma hattı yakaları | 7834–8219; dolgu duvarı 10199–10280 |

Yükseklik verisi (`veri-kaynak/yukseklik/etopo2022_30s_dunya.tif` ya da `…_atlas.tif`, eski motor
:774-797) depoda yoktur; HAVVA'daki koşu klasörlerinde durur. Makinede yoksa prototip
**eğimsiz** koşar ve bunu her resmin altına yazar; "eğim yok" ile "eğim etkisiz" aynı şey değildir.

## Önerilen hesap (bağlayıcı değil; daha iyisini bulursan gerekçesiyle değiştir)

1. O gün için kaynak listesi (K1–K3): sahnedeki yerleşimler; tür = boyar / boyamaz / kaynak değil.
2. Izgarada, yalnız kara hücrelerinde, bütün kaynaklardan çok kaynaklı Dijkstra (K4, K10: hat kenarı
   geçilmez) → her hücre için en yakın kaynak `s(c)` ve süre `t(c)` (saat; 1 gün = 8 saat).
3. K6: `t ≤ 40 saat` boyanır.
4. K7: etiketleri komşu olan kaynak çiftleri (A, B) için aradaki en kısa yol süresi `D` sınır
   hücrelerinden bulunur (`t(c1)+t(c2)+adım`, en küçüğü); `D ≤ 160 saat` ise yol hücreleri öncül
   işaretçilerinden çıkarılır; yol hücrelerinden 40 saatlik sınırlı Dijkstra ile şerit bulunur; şeritte
   yalnız `s(c) ∈ {A, B}` olan hücreler boyanır.
5. K8: denize ≤ 80 saat uzaklıktaki kaynaklardan, aynı koşulu sağlayan bir komşusu olanlar için deniz
   yolu çevresinde aynı şerit.
6. K9: boyanmamış kara bileşenleri etiketlenir; tek devletle çevrili ve içinde boyamayan kaynak olmayan
   bileşen doldurulur.
7. K11 ve geçit listesi: liste henüz yok; prototipte eski boğaz yasağı + kıstak köprüsü kullanılır,
   yerleşimsiz ada boyanmaz; bu sapma resimlerin altına yazılır.
8. Resim: hücre → devlet rengi (`arac/renkler.py` `BOYALAR`), kıyı çizgisi, yerleşim noktaları.

## Bitti sayılması için

- Her kutu × her gün için tek PNG: solda eski harita, sağda yeni; altında bir satır beyan (eğim var/yok,
  hangi kural prototipte eksik).
- Aynı kutu ve günler için yeni haritanın üç katmanı ayrı renkte bir PNG daha: çekirdek (K6) · şerit
  (K7/K8) · delik (K9) — Emre hangi toprağın hangi kuraldan geldiğini görsün.
- Sayılar: kutu başına boyalı alan eski/yeni (km²), en çok değişen 10 devlet, hesap süresi ve tepe bellek.
- Açık konuların cevabı, resimden: (a) şeritlerin birleşimi ortada boşluk ya da dar dil bırakıyor mu;
  (b) sınır nehre/sırta eski "yaslama" olmadan ne kadar oturuyor; (c) tek şehirden denize dil çıkıyor mu;
  (d) çöl kutusunda görünüm.
- Teslim: `denetim/YENI-MOTOR-PROTOTIP-1128/` (betik + PNG'ler + kısa `SONUC.md`), kendi dalında
  (`yeni-motor-prototip-1128`), `git push origin HEAD:refs/heads/yeni-motor-prototip-1128`; `main`e
  itilmez. Motor dosyalarına (`uret_petek.py`, `dolgu.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`)
  DOKUNULMAZ.
- Rapor biçimi: ① ne ölçtüm ② ne bulamadım ③ ne istiyorum.

## Makine

**HAVVA'da yapılmaz:** 28.11 02:05'ten itibaren HAVVA'da koşu var, makine dolu (CLAUDE.md iş dağıtımı).
Önerilen makine EMRELİC (araştırma + yazma ana hattı, kısıtsız). Bulut da olur (`claude/<ad>` dalı; DEM
yok ⇒ eğimsiz).

## Bilinen tuzaklar

- Ortamda `python` değil `py`. Bash'te Türkçe metinli `py -c` ve heredoc kanca tarafından engellenir:
  betiği `Write` ile dosyaya yaz, `py <yol>` ile çalıştır.
- Tarih kıyası dizgiyle yapılmaz: `arac/gun.py`.
- Izgarada satır 0 GÜNEY'dir; rasterio satır 0 KUZEY (`np.flipud`).
- `d:` kimliği `BOYALAR`da yoksa `devletler.js`teki `harita:` anahtarına düşülür (eski kod 1094–1158).
