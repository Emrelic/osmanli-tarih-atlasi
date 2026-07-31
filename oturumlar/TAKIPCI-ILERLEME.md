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
