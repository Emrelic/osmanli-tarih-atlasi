# TAKİPÇİ — ilerleme

Rol: **T** (Fable) — ölçüm ve sayım. Veri dosyasına yazmaz.
Yazdığı dosyalar: `KONTROL.md` · bu dosya.

---

## 2026-07-31 — KONTROL.md tamamlandı: 16 dosya, 239 madde

### Görev
Koordinatörün emri: 16 `hatalar N.docx` dosyasının bütün maddelerini çıkar,
her birinin durumunu üç kaynaktan (git log · KOORDINASYON/YAPILACAKLAR ·
oturum raporları) bul, `KONTROL.md`'yi tamamla.

### Sayım (komutlarıyla)

**Metin çıkarımı** — scratchpad betiği `docx_cikar.py`:
```python
x = zipfile.ZipFile(yol).read("word/document.xml").decode("utf-8")
x = re.sub(r"</w:p>", "\n", x); x = html.unescape(re.sub(r"<[^>]+>", "", x))
```
Dolu paragraf sayıları: 12·8·10·14·13·13·11·10·14·32·69·12·15·7·35·15 = 290.
Madde sayımı (boş numara satırları atılıp devam paragrafları birleştirilerek):
**1→10 · 2→6 · 3→10 · 4→11 · 5→9 · 6→11 · 7→7 · 8→9 · 9→14 · 10→29 · 11→61 ·
12→11 · 13→15 · 14→5 · 15→20 · 16→11 = 239.**
Not: koordinatör hatalar 11 için 62 saymıştı; fark tek birleştirme kararı
(Şam/Halep çıkıntı paragrafı — bende ayrı madde 11-14, `KOORDINASYON` da
Oturum 8'e "13 · 14" diye ayrı veriyor, yani sayımlar fiilen uyumlu).

### Koordinatörün istediği üç sayı

```
madde:  239
✅ bitti: 117
❓ belirsiz: 21        (ayrıca: ⚠️ 50 · ⏳ 42 · 🔬 6 · ❌ 3)
```

❓ ve ⏳ tam listeleri `KONTROL.md` sonunda ("ÖZET" bölümü).

### Durum kaynakları (mesaj beklenmedi, dosya okundu)

- `git log --oneline --since="4 days ago"` — 200 commit; erken turların
  (hatalar 1-9) madde-madde eşlemesi commit GÖVDELERİNDEN çıktı:
  `cbbc0b9` (h1, "on maddenin hepsi") · `9754515` (h2-3) · `35436fe` (h4-5-6)
  · `776ecb9`+`518d70e` (h7) · `dea8882`+`4e1f398` (h8) · `974c4ea` (h9)
- `KOORDINASYON.md` §1b·§4·§5·§9 — dağıtım numaraları ve kuyruk
- Oturum raporları: 11-BALKAN (§1-§19) · 13-ANADOLU/ILERLEME · 4-ILERLEME
  EK1-3 · 14-DUZELTMELER (§1-§19) · 10-ILERLEME EK3-6 · 2-ILERLEME ·
  7-ILERLEME · 5-ILERLEME §3 · 16-ILERLEME §7e · ARABISTAN-DUZELTMELER

### 🔴 Ölçülmüş bulgu — eski madde numaraları GÜVENİLMEZ, üstelik çakışıyor

Yalnız dosyaların kendi numarası kaymıyor; **raporlar arası da çakışma var**:
- `md.20` = KOORDINASYON §4'te *Kavalalı irsî valilik*, OTURUM-11-BALKAN'da
  *Söğüt 1800*.
- `md.34` = KOORDINASYON §4'te *Asîr*, §5'te (Oturum 10 listesi) *Abdülaziz
  seyahati*.
KONTROL.md artık tek tip TAKİPÇİ sayımını kullanıyor; eski↔yeni eşleme
tablosu dosyanın başında. **Bundan sonra madde atıfı numarayla değil
`KONTROL.md` numarası + kısa metinle yapılmalı.**

### Dikkat çeken tekil bulgular

1. **16-08 (Vehhâbî çifti) hükmü DEĞİŞTİ:** Oturum 4 "1806 kaydı silinmeli"
   demişti; ARABİSTAN organı TDV `mekke` ile çürüttü — Mekke gerçekten iki kez
   düştü (30.04.1803 + Ocak 1806). KONTROL'e yeni hüküm yazıldı.
2. **Eski KONTROL'deki "15-05 üçgen" ve "15-06 Karesi" yanlış dosyadaydı** —
   ölçüldü: üçgen hatalar 16'nın 5. maddesi, Karesi hatalar 12'nin 6'sı.
3. **11-48 / 11-49 (İtalya-Fransa Kızıldeniz ölçümü) eski Oturum 12'ye
   verilmişti ve hiç yapılmamış.** T olarak devraldım; koordinatör onaylarsa
   sıradaki işim bu.
4. hatalar 3-4-5-6'nın 9 maddesi ile hatalar 10'un 7 maddesi hiçbir belgede
   izlenemedi → ❓ (tam liste KONTROL sonunda). Dolu görünsün diye
   doldurulmadı.

### Sınırlar
- Hiçbir veri dosyasına yazılmadı; yalnız `KONTROL.md` ve bu dosya.
- Karar verilmedi; çelişen hükümler (16-08) kaynağıyla aktarıldı.
- Commit atılmadı (commit koordinatörün).

---

## 2026-07-31 (2. tur) — 11-48 / 11-49: İtalya ve Fransa Kızıldeniz'de NE görünüyor

Koordinatör onayıyla devralınan ölçüm (eski Oturum 12 görevi, hiç yapılmamıştı).

**Komut** : `node scratchpad/kizildeniz_olcum.js` (betik scratchpad'de; bütün
`yerlesimler*.js` + 984 kronoloji maddesini okur, her `italya`/`fransa`
döneminin sınırına ±en yakın maddeyi hesaplar)
**Girdi** : `data/yerlesimler.js` + `data/yerlesimler_afrika.js` (2026-07-31
hâli) — ikisi de HARİTA GİRDİSİ (`arac/girdi.py` `GIRDI_DOSYALARI`);
`index.html`'in `_afrika`'yı yüklememesi yalnız etiket/dizin tarafı.
Kronoloji: index.html'e bağlı 984 madde.

### 11-48 — İTALYA. Bulgu: 1885 maddesi TAM; üç kırılma dalgası MADDESİZ

Haritayı İtalya'ya boyayan kayıtlar ve kronoloji karşılıkları:

| Dalga | Kayıtlar | `s:"italya"` başı | En yakın madde | Hüküm için not |
|---|---|---|---|---|
| Kızıldeniz 1885 | Masavva · Dahlak · Arkîko | 1885-02-05 | **0 gün** — "Masavva'nın İtalyan işgali" (ek6) | ✔ SAĞLIKLI — kullanıcının şikâyet ettiği boşluk bu maddeyle zaten kapanmış |
| Assab 1882 | Aseb | 1882-03-10 | **68 gün, alâkasız** (Mîzâb vahaları) | maddesiz |
| Eritre içi 1889 | Asmara (çekirdek dosyada!) · Kerene | 1889-01-01 | **99 gün, alâkasız** (Haydarpaşa demiryolu) | maddesiz |
| Somali 1888-1905 | Obbiya·Galkayo (1888-12-01) · Garove·Ayl·Bosaso·Alula·Hafun (1889-04-07) · Mogadişu·Merka·Baydoa·Beledveyne (1905-01-01) | üç ayrı gün | **56 / 68 / 201 gün, hepsi alâkasız** | maddesiz — Kızıldeniz değil ama aynı sınıf; Mogadişu çekirdek dosyada |

**Karşılaştırma:** sağlıklı örnek ile bozuk örnek yan yana — Masavva 0 gün /
konulu madde; Asmara 99 gün / demiryolu imtiyazı. Kullanıcı 1889'da haritanın
İtalya'ya büyüdüğünü görürken listede demiryolu maddesi okuyor: `CLAUDE.md §10`
hatasının kendisi.

### 11-49 — FRANSA. Bulgu: haritada TEK nokta var, kronolojide SIFIR madde

- Kızıldeniz/Aden havzasında `s:"fransa"` taşıyan **tek kayıt: Tacûra**
  (11.788K, 42.882D, `yerlesimler_afrika.js`) — `adal → fransa, 1884-01-01`.
- 1884-01-01'e en yakın madde: **"Reji İdaresi kuruldu (tütün tekeli)"** —
  0 gün, tamamen alâkasız. Kullanıcının cümlesinin birebir mekanizması:
  *"fransa kızıldenizde toprak almış görünüyor ama kronolojide görünmüyor."*
- Anahtar kelime taraması (cibuti/obock/tacura): kronolojide Fransız Somalisi'ne
  dair **0 madde**. Aynı günkü "Zeyla ve Somali sahilinin İngiliz idaresine
  geçişi" (ek9) maddesi yalnız İngiliz tarafını anlatıyor, Fransa'yı anmıyor.
- Yan gözlem (sayı, karar değil): Fransız Somalisi tek noktayla temsil ediliyor;
  Obock ve Cibuti şehri (kuruluş 1888 — `kur:` ister) veride hiç yok. Tacûra'nın
  peteği bütün Cibuti körfezini tek başına boyuyor.

### Havale

Hüküm koordinatörde. Kronoloji yazımı A3'ün alanı (KOORDINASYON §5b: "Kronolojiyi
Oturum 14 yazar"); maddesiz kırılmalar Değişmez 2s / `denetle_statu.py` B
listesiyle kesişiyor — DENETÇİ'nin 81'lik listesinde bu dalgaların olup olmadığını
ben ölçmedim. Tarih önerisi YAZMADIM (araştırma işi, Fable yapmaz).

---

## 2026-07-31 (3. tur) — havale güncellemesi + bir çelişki bulgusu

Koordinatörün dört havalesi ve A5'in B-C-D-E-F teslimi `KONTROL.md`'ye işlendi
(kaynak: `ARABISTAN-DUZELTMELER.md` dosyadan okundu, mesaj değil):

- Hüküm alan satırlar: 2-05 (Zebîd → K) · 6-09 (⚠️) · 11-19 (⚠️, kullanıcıdan
  görüntü bekliyor) · 11-23 · 11-24 · 11-33 (⚠️) · 11-34 · 11-51 · 16-08
  (hepsi ⏳ K/U1) · 15-06 (→ M, Kuveyt `kur:` reçetesi) · 16-04 (A4'e ek
  havale) · 10-22/24 · 11-48/49 (→ A3).
- Yeni sayım: **✅ 116 · ⚠️ 51 · ⏳ 42 · 🔬 6 · ❌ 3 · ❓ 21 = 239.**
  (✅ 117→116: 3-10 düştü, aşağıda.)

### 🔴 Ölçülmüş çelişki — motor `kur:` okuyor mu?

| Kaynak | İddia |
|---|---|
| commit `b781c2c` (30 Tem) | "Motor kur:/bit: okuyor — 1,7 milyon km²lik hayalet toprak düzeltmesi" |
| `YAPILACAKLAR.md` | "Motor `kur:` ve `bit:` alanlarını okumuyor" (hâlâ açık kutu) |
| A5 §C.1 (31 Tem) | "motor `kur:` alanını HİÇ okumuyor" + Kuveyt 1600'de sahipsiz ölçümü |

Üçü aynı anda doğru olamaz. ⚠️ A5'in ölçümü (`korfez_olc.py`) sahipliği VERİDEN
okuyor, motorun petek bağışlama davranışını değil — yani çelişkiyi kendi başına
çözmüyor. **D/M'nin üretilmiş çıktıdan ölçmesi gerekiyor:** 1600 kesitinde
Kuveyt'in peteği var mı, varsa kim boyuyor? `KONTROL 3-10` ⚠️'ye çekildi.

### Not — A5 raporunda numara kayması sürüyor
§C.1 başlığı "hatalar 16 md.6" diyor; Lahsa-Katîf kopukluğu **hatalar 15**'in
maddesidir (KONTROL 15-06). Numara-çakışması bulgusunun taze örneği; KONTROL
numarası kullanılırsa biter.

---

## 2026-07-31 (4. tur) — ❓ triyajı: 21'in yalnız 4'ü görüntü istiyor

Koordinatörün görevi: ❓21'den ekran görüntüsü gerektirenleri ayır.
**Tahminle değil ölçümle ayrıldı** — `scratchpad/belirsiz_tarama.js`
(984 madde + 767 yerleşim + 170 savaş + 61 sefer + 280 kişi tarandı).

### Sonuç: 📷 4 madde (+1 ⚠️)

**3-04** Barbaros adaları · **12-03** kuzeyde boş toprak · **16-03** Hotin
üst bölümü · **16-05** üçgen — ve ⚠️ **11-19** (A5'in istediği Kavalalı
görüntüsü). Tek seferlik istek listesi `KONTROL.md` ÖZET'te tablo hâlinde.

### Ölçümün kendiliğinden kapattıkları (❓→✅, 5 madde)

| No | Ölçüm |
|---|---|
| 4-02 | rasathane: veride TEK kuruluş maddesi (1577-01-01) — mükerrer temizlenmiş |
| 4-06 | Sokullu: TEK suikast maddesi (1579-10-12) |
| 6-04 | Kâtip Çelebi: TEK madde (1657-10-06) |
| 6-05 | 1657 Yunanistan kutusu: sahipsiz nokta **0** |
| 4-03 | Vâdisseyl: madde + konumlu savaş kaydı VAR |

### Sahipli işe dönenler (❓→⏳/⚠️, 12 madde) — öne çıkan ölçümler

- **10-16**: İsmail/İzmail yerleşim kaydı veride HİÇ YOK → "uçakla mı gitti"
  görüntüsünün kökü; nokta A2'den.
- **10-19**: Preveze `venedik→fransa 1797-10-17` (Campo Formio) HARİTADA VAR,
  kronolojide 0 madde — kullanıcı haklı.
- **4-09**: mekanizma bulundu — Nahçıvan+Ordubad `1585-01-01` (yıl-başı
  yuvarlaması) tağşiş maddesine çarpıyor; Tebriz bloğu ayrı gün (09-25).
- **10-14**: ilhak kırılması VAR (Bahçesaray 1783-04-08). 🔴 Yeni şüphe:
  **Kefe 1774-83 arası `rusya`, komşusu Bahçesaray aynı arada `kirim`** — iki
  kayıt hanlık dönemini zıt modelliyor; A1 doğrulamalı (tarihî iddia yazmadım).
- **10-20**: SEFERLER'de Napolyon Suriye oku yok (1831 İbrâhim Paşa oku var —
  karıştırılmasın).
- **10-28**: valide maddeleri KISMEN var (Hürrem 1534, Kösem 1651, Turhan
  kişisi); Nurbanu/Safiye yok.
- **7-06**: 1695-97'de kırılan tek kayıt Azak'ın kendisi — "büyük toprak"
  görüntüsü petek genişliği; tarihî kapsam A1'e.

### Aynı turda işlenen koordinatör kararları

- 3-10 + 15-06: `kur:` çelişkisi hakem ölçümüyle kapandı (motor OKUYOR; bayat
  olan YAPILACAKLAR'dı) → ikisi de **K·COĞRAFYA gösterim kararına** çevrildi.
- A5 §E-F-G hükümleri + `y:"vassal"` iptali + Taiz kapanışı satırlara işlendi.

### Yeni sayım

```
✅ 121 · ⏳ 53 · ⚠️ 52 · 🔬 6 · ❌ 3 · ❓📷 4  = 239
```
(önceki tur: 116/42/51/6/3/21 — ❓'nun 17'si eridi: 5 ✅, 12 sahipli iş)

---

## 2026-07-31 (5. tur) — 12-03 kapandı; 📷 protokolü "önce yıl+yön" oldu

Kullanıcının tek cümlesi ("1288, Boğaz kuzeyi") 12-03'ü görüntüsüz kapattı —
K ölçtü: sahiplik boşluğu yok, boşluk hisarların `kur:` devri (Rumeli 1452,
Anadolu 1395); çözüm ölçütü MOTOR'da. 📌 Süreç dersi KONTROL'e işlendi:
📷 tablosu artık "önce YIL + YÖN sor, görüntü ikinci basamak" — her satıra
sorulacak TEK soru yazıldı. Sayım: **✅121 · ⏳54 · ⚠️52 · 🔬6 · ❌3 · ❓3 = 239.**

---

## 2026-07-31 (6. tur) — HATALAR 17 işlendi: 19 madde, toplam 258

Dosya 20:02'de kaydedildi, `BadZipFile` geçince çıkarıldı (31 dolu paragraf →
**19 madde**; "20)" boş etiket). KONTROL'e `17-01…17-19` olarak girdi.

**İki tema hâkim:** (a) kuruluş devri görsel artefaktları — iki kırmızı ton,
soluk oklar, "yuvarlak hüzme", koyu yapı (17-10…13, hepsi 🔬); (b) **"cetvel
sınırlardan ne zaman kurtulacağız"** genel talebi (17-09, örnekleri 16/17) —
cevabın kendisi COĞRAFYA'da fiilen sürüyor (HydroSHEDS, çöl tavanı r280) ama
kullanıcıya görünür değil.

**Dikkat çekenler:**
- 17-02/05 büyük olasılıkla 12-03'ün (hisar `kur:` boşluğu) aynısı — ölçüt
  kurulduğu için kapanmaya aday; doğrulama M'de.
- ⚠️ **17-18 = kapatılmış 12-04 hükmünün kullanıcı tarafından YENİDEN
  açılması** (Katalan oku). "Hata değil" hükmü kullanıcıyı ikna etmemiş;
  ayrıca yeni gözlem var (Mekece-Akhisar ötesi boşluk). Hüküm K'da.
- 17-14/15 Karesi/Saros taşmaları = 12-06 kökü; kara-kısıtlı Voronoi r217
  BUGÜN çıktı — kullanıcının hangi sürüme baktığı belirsiz, r217 sonrası
  kesitle doğrulanmalı.

**Aynı turda:** 12-03 → ✅ (KARAR-DAYANAK #4'ün sorusu kapandı — satır
silinebilir mi, K'ya soruldu); 11-16 çöl tavanı "yayında, GÖZLE onay bekliyor"
notu aldı (K'nın "15-17" numarası ada göre 11-16'ya işlendi — numara+ad
kuralının bir örneği daha).

**Yeni sayım: ✅122 · ⏳63 · ⚠️53 · 🔬14 · ❌3 · ❓📷3 = 258.**

---

## 2026-07-31 (7. tur) — hatalar 17'nin son hâli: 20 madde, K kümeleri işlendi

- **19 ↔ 20 farkı çözüldü (ölçümle):** dosya 20:02'den beri değişmemiş (diff
  boş); "20)" etiketi metinsiz → **20. madde yalnız gömülü görselden ibaret.**
  17-20 açıldı: ❓📷 ("20. madde neydi" tek cümlelik soru ya da K görseli açar).
- K'nın A-G kümeleri satırlara işlendi; **A kümesi (6 madde) koşan DEM
  paketine bağlandı, yeni iş açılmadı** (K talimatı).
- **B kümesi ölçümü (T):** `1326-06-15` ve `1331-06-15` kesitlerinde `v:`
  kaydı **SIFIR** (d: 36 ve 43) → "doğrudan/tâbi ton farkı" hipotezi ÇÜRÜDÜ.
  Komut: node tek satırlık kesit sayımı (ILERLEME'de). Alternatif hipotez
  kayda geçti: **serbest kenar katmanı** dün gece eklendi (8d9b51b · 9c9f5c6 ·
  44d26e4) ve kullanıcı 20:02'de ilk kez görüyor olabilir — "iki kırmızı",
  "soluk oklar", "yuvarlak hüzme" üçü de bu katmanın görünümü olabilir.
  Hüküm ARAYÜZ'ün; ben yalnız v:=0'ı ölçtüm, katmanı hipotez olarak verdim.
- 📷 listesine 17-20 (kesin) ve 17-11 (şartlı) eklendi.

**Sayım: ✅122 · ⏳65 · ⚠️53 · 🔬12 · ❌3 · ❓📷4 = 259.**

---

## 2026-07-31 (8. tur) — bayatlık taraması + kapanma-kontrolü fizibilite SAYISI

### Bayatlık taraması (K'nın 8'i + grep'in bulduğu 10 = 18 kapanış)

K'nın bildirdiği 8 satır **YAMACI'nın sözüyle değil grep'le** doğrulanıp
kapatıldı; aynı tarama 10 kapanış daha buldu: 2-05 Zebîd · 6-09 Lahsa ·
10-16 İsmail (tam zincirle eklenmiş!) · 11-23 Sevâkin/Masavva `v:` ·
11-27/28 Eflak · 11-34 Lahsa tarihleri · 11-40 Mısır isg · 13-14 İyon ·
13-15 Podgorica. Kara-kısıtlı r217 yayında → 8-02/12-06/15-19/10-17
"koşu bekliyor"dan "gözle doğrulama"ya (⚠️) indi.

🔴 **İtiraf — bayat-satır sınıfının bendeki iki örneği:** 6-09 ve 11-34'ü
bugün 15:2x'te ⏳ yazdım; oysa 54346f2 (14:21) ikisini de çoktan uygulamıştı —
hatta kendi 15:21 grep'im Lahsa 1818 bloğunu GÖSTERMİŞTİ ve ben yine ⏳ yazdım.
K'nın teşhisi bana da uyuyor: durum ölçülmüş ama HÜKÜMLE BİRLEŞTİRİLMEMİŞ.

**Yeni sayım: ✅140 · ⚠️57 · ⏳47 · 🔬8 · ❌3 · ❓📷4 = 259.**

### K'nın istediği fizibilite SAYISI (araç yazılmadan önce)

Açık 112 satır (⏳47+⚠️57+🔬8) tek tek sınıflandı (listeler satırlarda,
yöntem: satırdaki kapanma ölçütünün türü):

```
OTOMATİK  (tek grep'le sınanır: tarih/kayıt/madde/renk/nokta iddiası) : 49
YARI      (kesit-sahiplik ya da üretilmiş-geometri betiği ister)      : 36
ELLE      (karar · araştırma hükmü · gözle onay · kullanıcı cevabı)   : 25
                                                    sınıflanan: 110/112
```
(2 satır iki sınıfın sınırında; kesin liste kontrol yazılırsa netleşir.)

**Hüküm için sayı:** kontrol YAZMAYA DEĞER — 49 satır tek koşuda sınanır ve
bugünkü 18 kapanışın 15'i tam bu sınıftaydı. YARI'nın 36'sı da mevcut kesit
testi kalıbıyla (delik-farkındalıklı nokta testi, O11 §17 deseni) büyük ölçüde
otomatikleşir ama ayrı emek ister. Önerim: önce yalnız OTOMATİK katman —
`denetle_kontrol.py` girdisi KONTROL.md satırları değil, satırlara eklenecek
makine-okur bir `[kanıt: <dosya> <desen> <beklenen>]` alanı olmalı; yoksa araç
benim serbest metnimi ayrıştırmaya çalışır ve kırılgan olur. Biçim kararı D+K'nın.

---

## 2026-07-31 (9. tur) — kanıt alanları + `arac/kontrol_dogrula.py` + İLK KOŞU: 8 kapanış

K biçimi onayladı (`[kanıt: dosya · desen · beklenen]`, düz metin, ` · ` ayraç).

**Alan ekleme — dürüst daraltma:** 49 "otomatik" satırın **33'üne** alan
eklenebildi; 16'sı tek düz desene sığmadı (çoğu "mevcut tek-satır kayda alan
ekleme" sınıfı — Urmiye/Niğde gibi, kayıt-içi kapsam ister; onlar alansız
kaldı = elle muamelesi, K kuralına uygun).

**Araç:** `arac/kontrol_dogrula.py` (sahibi T) — yalnız köşeli parantezi okur,
serbest metne bakmaz; üç uçlu çıktı (✓/🔴/⚠️ bozuk); `var·yok·=N·>=N·<=N`;
✅/❌ satırların kanıtı tarihçe sayılır, yeniden sınanmaz; çıkış kodu 🔴/⚠️'de 1.

**İlk koşu: 33 kanıttan 8'i KAPANMIŞ çıktı** — dördü bağlam grep'iyle teyit
edilip sekizi de kapatıldı: 10-21 (Nelson/Ebûkır metni gelmiş) · 10-22/24
(Mekke-Tâif 1803-04-30 uygulanmış + savaslar'da Vehhâbî ×3) · 11-22/26
(Biskra/Tuggurt dönem bölmeleri uygulanmış) · 11-24 (1849-01-01 Yemen maddesi
yazılmış) · 11-36 (Abdülaziz ölümü 1876-06-04 ayrı madde) · 16-08 (hutbe
cümlesi çıkarılmış). İkinci koşu TEMİZ: **25 ✓ · 0 🔴 · 0 ⚠️**, çıkış 0.

**Günün kapanış toplamı: elle tarama 18 + araç 8 = 26.** K'nın "araç elle
taramadan fazlasını bulmalı" beklentisi ilk koşuda kısmen doğrulandı (elle
taramanın HEMEN ARDINDAN koşulduğu hâlde 8 buldu — akşam commitleri arada
işlemişti; kalıcı değeri sonraki koşularda görünecek).

**Sayım: ✅148 · ⚠️53 · ⏳43 · 🔬8 · ❌3 · ❓📷4 = 259.**
