# BULGU — S128 KAYNAK KAPSAMI

**Oturum:** SONNET HAZIR KITA 128 · **Sevk:** M-2281 (1.MURAT, `oturumlar/ARASTIRMA-DUNYA-0902.md` §⑧)
**Görev:** `data/olaylar*.js` çekirdeğinde `kaynak:` alanı BOŞ / `bulunamadı` / `ölçülemedi`
sayımı ve boşların yüzyıl dağılımı. **ÖLÇÜM OTURUMU — düzeltme yapılmadı.**

## ① NE ÖLÇTÜM

İki BAĞIMSIZ ayrıştırıcıyla ölçtüm ve ikisi **birebir aynı sayıyı verdi**:
- Python: `arac/denetle.py`nin kendi `olaylari_yukle()` fonksiyonu (Değişmez 2'nin
  evreni — `glob("data/olaylar*.js")`, 33 dosya).
- Node: aynı 33 dosyayı `eval` ile gerçek JS yorumlayıcısından geçirdim
  (`§11`: *"veri zaten bir dilde yazılıysa, o dilin yorumlayıcısını çağır"*).

```
TOPLAM MADDE:        1303   (sevkteki taban 1303 ile BİREBİR uyuşuyor)
kaynak: BOŞ            13
kaynak: "bulunamadı"    53
kaynak: "ölçülemedi"     2
kaynak: DOLU (gerçek) 1235
─────────────────────────
kontrol toplamı: 13+53+2+1235 = 1303 ✓
```

Sınıflandırma kuralı: alan yoksa ya da boşluktan ibaretse **BOŞ**; değer
`bulunamadı` ile başlıyorsa (ekli gerekçe metni olsa da) **bulunamadı**; `ölçülemedi`
ile başlıyorsa **ölçülemedi**; bunların dışındaki her şey **DOLU** sayıldı (kısa
slug'lar da — `nis` · `fas` · `diu` · `van` gibi 3 harfli TDV slug'ları DOLU'ya
girdi, çünkü alan doludur; slug'ın CANLI/doğru olup olmadığı bu ölçümün konusu
değil, `§4`ün ayrı bir sorusu).

### BOŞ 13 kaydın tam listesi (tarih sırayla)

```
1362-03-01  Orhan Gazi'nin vefatı — beylikten devlete geçen kırk yılın sonu
1471-08-24  Arzila'nın Portekiz tarafından alınışı
1488-01-01  Safi'nin Portekiz nüfuzuna girmesi
1505-01-01  Santa Cruz do Cabo de Gué'nin kuruluşu (Agadir)
1513-09-01  Azemmûr'un alınışı
1514-01-01  Mazagan kalesinin kurulması
1539-01-01  Zebîd'in Osmanlı hâkimiyetine kesin girişi
1581-04-16  İberya Birliği — Portekiz tacı İspanya kralına geçti
1640-12-01  Restauração — Portekiz bağımsızlığını geri aldı
1662-01-30  Tanca İngiltere'ye devredildi
1747-06-20  Nâdir Şah'ın öldürülmesi
1769-03-11  Mazagan'ın boşaltılması
1796-01-01  Kaçar hânedanının İran'a hâkim oluşu
```

### Yüzyıl dağılımı — BOŞ (13)

```
14. yy (1301-1400): 1   — Orhan Gazi
15. yy (1401-1500): 2   — Fas kıyısı (Portekiz)
16. yy (1501-1600): 5   — Fas kıyısı (Portekiz) + Zebîd
17. yy (1601-1700): 2   — İberya/Restauração + Tanca
18. yy (1701-1800): 3   — Nâdir Şah + Mazagan + Kaçarlar
19-20. yy          : 0
```

📌 **Yoğunlaşma iki kümede:** (a) **15-16. yüzyıl Fas Atlantik kıyısı**
(Arzila · Safi · Agadir · Azemmûr · Mazagan) — 6/13'ü (%46) tek bir coğrafî
kolda, muhtemelen Portekiz'in Fas kıyısı genişlemesi tek bir kaynak taramasından
geçmemiş. (b) **kalan 7'si dağınık**, tek bir dönem/coğrafya deseni yok — her biri
ayrı hânedan/devlet dönüm noktası (Osmanlı kuruluş çekirdeği, İberya Birliği,
Nâdir Şah, Kaçarlar).
⚠️ 13 kaydın 13'ü de **1303 maddenin GERÇEKTEN BOŞ olanları** — yani `bulunamadı`
diye işaretlenmiş 53 kayıttan **AYRI**: onlar aranmış ve "yok" bulunmuş, bunlar
hiç aranmamış ya da arama sonucu hiç yazılmamış.

### Yüzyıl dağılımı — bulunamadı (53, karşılaştırma için)

```
14. yy: 1   15. yy: 6   16. yy: 7   17. yy: 10   18. yy: 14   19. yy: 13   20. yy: 2
```
📌 `bulunamadı` 18-19. yüzyılda yoğunlaşıyor (27/53, %51) — `§4`ün ölçtüğü
"OLAY/SAVAŞ/ANTLAŞMA maddesi TDV'de daha çok ölü çıkıyor" deseniyle tutarlı
yönde (bu yüzyıllar savaş/antlaşma yoğun dönemler).

### ölçülemedi — tam liste (2)

```
1684-03-05  Kutsal İttifak kuruldu
  kaynak: "ölçülemedi — TDV gövdesi ALINAMADI (§4④ boilerplate): lehistan
  2.305 kar.; karlofca-antlasmasi ÖLÜ; viyana · mehmed-iv · avusturya ·
  venedik okundu, yok. «arandı, yok» DEĞİL — tekrar denenecek"

1691-08-19  Salankamen bozgunu — Fâzıl Mustafa Paşa şehit
  kaynak: "ölçülemedi — TDV gövdesi ALINAMADI (§4④ boilerplate): fazil-
  mustafa-pasa 2.369 kar.; koprulu-ailesi · petrovaradin · salankamen ÖLÜ."
```
Bu iki kayıt zaten önceki bir oturum tarafından doğru damgalanmış ve gerekçesi
yazılı — **TEMİZ diye raporlanmadı, ÇÜRÜDÜ diye de raporlanmadı**, olduğu gibi
"tekrar denenecek" damgasıyla bırakıldı; bu turda dokunmadım.

## ② NEYİ BULAMADIM

- 13 BOŞ kaydın **niçin** boş kaldığına dair bir gerekçe/not aramadım — bu
  ölçümün kapsamı değildi (yalnız SAYIM ve yüzyıl istendi). `bulunamadı`dan
  farklı olarak bu 13'ünün hiçbirinde "arandı, yok" beyanı YOK; hiç aranmamış
  olabilir de, aranıp yazılması unutulmuş da olabilir — **ayırt etmedim,
  ölçmedim.**
- `data/kronoloji*.js` (39 dosya, KUYRUK) bu ölçümün **dışında bırakıldı** —
  `CLAUDE.md §5`: kuyruk `Değişmez 2`nin evreninde değil, sevk de "çekirdek"
  dedi. Kuyruğun kendi kaynak kapsaması **ayrı bir sorudur, ölçmedim** (bu zaten
  SONNET HAZIR KITA 125'e ayrı sevk edilmiş görünüyor: `BULGU-S125-KUYRUK.md`).
- DOLU sayılan 1235 kaydın kaynak alanlarının **TDV'de canlı/doğru madde**
  olup olmadığını (`§4②③④` tuzakları) ölçmedim — bu ayrı ve çok daha pahalı bir
  iş (2 Eylül'de 553 benzersiz slug taraması başlatıldığı CLAUDE.md'de yazılı,
  onun bir devamı/tekrarı olabilir, karıştırmadım).

## ③ NE İSTİYORUM

Bu bir ölçüm raporu — düzeltme önermiyorum, çünkü sevk "düzeltme YAPMAYIN" dedi.
Karar/iş ataması istersen iki aday kalem var:
- 13 BOŞ kaydı tek tek TDV'de aratıp `kaynak:` doldurmak/`bulunamadı` ile
  damgalamak (küçük iş, 13 kayıt).
- 53 `bulunamadı`nın 18-19. yy yoğunluğu, akademik-kaynak (TDV dışı) taramasının
  önceliği için bir işaret olabilir — karar sende.

**Rapor durumu:** ✅ boştayım, bir sonraki sevki bekliyorum.

— SONNET HAZIR KITA 128
