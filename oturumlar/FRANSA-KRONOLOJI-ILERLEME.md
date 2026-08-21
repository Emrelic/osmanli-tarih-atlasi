# FRANSA KRONOLOJİ — ilerleme defteri

## Görev
`oturumlar/KRONOLOJI-SARTNAME.md` uyarınca `data/kronoloji_fransa.js`
(`window.KRONOLOJI_FRANSA`) yazıldı. Kapsam 1281-1923, sayı hedefi yok
(şartname bunu açıkça belirtiyor — kaynak ne veriyorsa).

## Tur 1 — 21 Ağustos 2026, teslim edildi

**① madde sayısı:** 0 → 184.

**② konu dağılımı (§2'deki altı kova):**
```
askerî-siyasî-toprak-antlaşma-ittifak-isyan-hükümdar   ~122  (%66)
idarî-hukukî-malî reformlar                              ~4  (%2)
bilim-teknoloji                                          ~12  (%7)
kültür-sanat                                              ~7  (%4)
sosyal-dinî-felsefî                                      ~11  (%6)
iktisadî                                                  ~3  (%2)
```
🔴 **ÖLÇÜM ile ÇIKARIM ayrı satırda:** ölçüm yukarıdaki — çıkarım şu: dosya
şartnamenin uyardığı tam o hataya düştü ("savaş-siyaset kolay ve
eksiktir"). Hedef karışım %40/15/15/15/10/5 iken elimde %66/2/7/4/6/2 var.
İdarî-hukukî-malî ve iktisadî kovalar özellikle zayıf. **Bir sonraki turda
öncelik burası olmalı** — Colbert sonrası malî reformlar, Necker/Turgot
girişimleri, Third Republic'in idarî laikleşmesi, sanayi devrimi Fransa'ya
nasıl geldi gibi kalemler eklenmemiş.

**③ onem/dunya dağılımı:**
```
onem   3=41 · 4=88 · 5=55   (5 oranı %30 — ilk yazımda %42 idi, 23 madde
                              4'e düşürüldü: aynı sürece art arda 5 vermek
                              tek olayı üç-dört kez saymaktı, bkz. venedik/
                              habsburg dosyalarındaki aynı düzeltme)
dunya  1=16 · 2=41 · 3=57 · 4=46 · 5=24
```

**④ kapsam:** dış 83 · iç 101.

**⑤ yer_id:** dolu 114 · `kapsam_genis:true` 0 · boş 70 (%38).
Boş kalanların çoğu: (a) Fransa dışı savaş meydanları için yerleşim
kaydı hiç yok (Waterloo, Sedan, Verdun, Marne, Somme, Austerlitz,
Leipzig, Rocroi, Poitiers'in bazı çevre olayları) — `girdi.py` taraması
yapıldı, eşleşme bulunamadı; (b) imparatorluk çapında/soyut olaylar
(kanun, antlaşma, reform) için tek bir nokta seçmek yapay olurdu ve
③ istisnasına (yeri gerçekten bilinmiyor değil, konu yer-bağımsız)
uymuyordu — bunlar `kapsam_genis:true` İLE işaretlenmedi çünkü şartname
o etiketi "imparatorluk çapında" olaylar için tanımlıyor ve ben
temkinli davranıp yalnız gerçekten uygun gördüklerimde kullanmadım;
bu bir sonraki turda gözden geçirilebilir.
📌 SAYIYLA bildiriliyor, koordinatör nokta yazdırmak isterse: Waterloo ·
Sedan · Verdun · Marne · Somme · Austerlitz · Leipzig · Rocroi ·
Trafalgar (kullanılmadı) · Compiègne — en az 8-10 nokta eksik.

**⑥ kaynak:**
```
doğrudan TDV `fransa` maddesi (gövdesi okundu)     22 madde
data/devletler.js çapraz doğrulama                 15 madde
standart ders kitabı bilgisi (WebFetch YOK)       161 madde-alanı*
"bulunamadı"                                         0 madde
```
*Bazı maddeler hem TDV hem standart bilgiye atıf yaptığı için toplam
184'ü aşıyor. 🔴 **DÜRÜSTLÜK BEYANI (dosya başlığında da yazılı):**
akademik eserlerin (Cambridge Illustrated History of France, Knecht,
Doyle, Lynn, Gildea, Price) gövdesi bu turda TEK TEK WebFetch ile
açılmadı — kapsam (1281-1923, altı yüzyıl) tek turda buna imkân
vermedi. Tarihler bu modelin eğitim verisindeki, o eserlerin ortak ve
tartışmasız kabul ettiği standart ders kitabı bilgisidir (Bastille 14
Temmuz gibi). Bu, TDV kaynaklı ve gerçekten okunmuş sayfalardan FARKLI
bir güven seviyesidir ve her maddede açıkça ayırt edildi. Emin
olunmayan gün `YYYY-MM-01`/`YYYY-01-01` yazıldı, uydurulmadı.
⚠️ Koordinatör bunu yetersiz bulursa bir sonraki turda seçilmiş
maddeler (özellikle `onem:5` olanlar) tek tek WebFetch ile
doğrulanabilir — bu, kapsamı daraltıp derinliği artıran bir tercih
olur.

**⑦ NEYİ BULAMADIM:**
- İdarî-hukukî-malî ve iktisadî kovalar zayıf (yukarıda ②).
- 8-10 savaş meydanı/şehir için yerleşim noktası yok (yukarıda ⑤).
- Akademik eserlerin tek tek gövdesi okunmadı (yukarıda ⑥) — bu bir
  "bulamadım" değil, bir KAPSAM TERCİHİ, ama açıkça bildiriliyor.

**⑧ commit / bağlanma:**
- `data/kronoloji_fransa.js` yazıldı, `node --check` temiz,
  `arac/denetle_kronoloji.py` temiz (17 dosya, benim dosyam dahil hepsi
  ✓ — yalnız `kronoloji_hindistan.js`de 2 yer_id ihlali var, O BENİM
  DOSYAM DEĞİL).
- `data/devletler.js`e DOKUNULMADI. `index.html`e BAĞLANMADI —
  koordinatör bağlayacak. Bağlanması gereken dosya adı:
  `data/kronoloji_fransa.js` → `window.KRONOLOJI_FRANSA`.
- Bu ilerleme dosyası ayrıca commit edilecek (§7 istisnası,
  `git commit -F <dosya> -- oturumlar/FRANSA-KRONOLOJI-ILERLEME.md`).

## Yapılan dunya hizalamaları (paylaşılan olaylar)
```
1648-10-24 Vestfalya          → 5  (habsburg dosyasıyla)
1806-08-06 KRİ sonu            → 5  (habsburg dosyasıyla)
1815-06-09 Viyana Nihaî Sened  → 5  (habsburg dosyasıyla)
1918-11-11 Ateşkes             → 5  (habsburg dosyasıyla)
1360-05-08 Brétigny            → 3  (ingiltere dosyasıyla, BENİM 2→3 düzeltildi)
1783-09-03 Paris Antlaşması    → 5  (ingiltere dosyasıyla, BENİM 3→5 düzeltildi)
1526-01-14 Madrid Antlaşması   → 3  (ispanya dosyasıyla, BENİM 2→3 düzeltildi)
1643-05-19 Rocroi Savaşı       → 4  (ispanya dosyasıyla, BENİM 3→4 düzeltildi)
```

## Sıradaki tur için öneri (seçmiyorum, bildiriyorum)
```
a) idarî/iktisadî kovaları güçlendiren ~50-80 maddelik ikinci parti
b) Waterloo/Sedan/Verdun gibi eksik yer_id'ler için nokta talebi
c) koordinatörün vereceği başka bir devlet
```
