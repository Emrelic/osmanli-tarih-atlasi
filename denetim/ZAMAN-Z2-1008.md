# ZAMAN-Z2-1008 — arayüzün 1000–1945'i oynatması (js/app.js · index.html · css/style.css)

Oturum: ZAMAN-Z2-ARAYUZ-ZAMAN-1008 (UMIT) · 8 Ekim 2026 · ağaç `C:\atlas-z2` @ `origin/makine/umit` `e28edfdc`
Teslim: `ZAMAN-Z2-1008-APPJS.diff` (üç dosya tek diff, UYGULANMADI). **SÜRÜM 2** — koordinatör düzeltmesinden sonra
(aşağıda §R2), temel `c69b890f`. Diff başlığı: dokunduğu GÜN ARALIĞI — arayüz kodu, veri değil; davranış yalnız
`VERI_UFKU` DIŞINDA (1281-01-01 öncesi · 1923-10-29 sonrası) değişir, 1281–1923 arası çizim aynı (ölçek hariç).

## §R5-EK — Sitenin adı "Tarih Atlası" (Emre, 9 Ekim: "tarih atlası daha doğru")
Yalnız AD değişti; "Osmanlı" çekirdek katmanı anlatan metinlerde (lejant "Osmanlı doğrudan/tâbi", padişah kartı, kronoloji) KALDI.
**Değişen yerler (adıyla):**
1. `index.html` `<title>` — "Osmanlı Tarih Atlası" → **"Tarih Atlası"**
2. `js/app.js` pencere başlığı damgası (`parcalar[0]`, `document.title`) → "Tarih Atlası · <gün> · …" (tarayıcıda ölçüldü:
   "Tarih Atlası · 1500-01-01 · 40.00N 30.00E …")
3. `js/app.js:2` dosya başlığı yorumu · damga açıklamasındaki örnek satır (yorum)

**Taranıp DEĞİŞMEYENLER:** `<meta name="description">`, `og:`/`twitter:` paylaşım etiketleri ve görünen `<h1>` YOK (h1 Ağustos'ta
silinmişti). `css/style.css`teki üç geçiş Emre'nin geçmiş sözlerinin alıntısı olan yorumlardır, tarih kaydı olarak bırakıldı.
`arac/` (etiket.py · kutu_serit.py örnek yorumu · uret_donemler.py) benim dosyam değil; ekranda görünmüyor ve hiçbiri damgayı
ayrıştırmıyor (tarandı). Yayın adresi/depo adı `osmanli-tarih-atlasi` bu diff'in konusu değil (GitHub ayarı, Emre).
**Kapılar:** `node --check` ✓ · `denetle_arayuz` temiz · odak: SESSİZ 20 / OKUNMAYAN 1, sürüm 5 ile birebir · ufuk 5/5 ·
tarayıcı hata 0.

## §R5 — Sürüm 5 (Emre'nin kararları, 9 Ekim) · temel `67e9ec9d` (SEFER-OKU-0087'nin 3 satırı dahil) · apply-check ✓ `dcd98f95`
Diff başlığı GÜN ARALIĞI: ① 1923-11-01 sonrası (padişah kartı) · ② her tarih (statik metin) · ③ 1281–1923 içinde, madde
sahnesi ve kırpma (veri değişmez) · ④ VERI_UFKU dışı.

**① Padişah kartı → 1923 sonrası CUMHURBAŞKANI (Emre).**
Ölçüm: veride cumhurbaşkanı dizisi YOK. `kisiler.js`te tek ilgili kayıt `mustafa-kemal-pasa` (`tur:"komutan"`, f/t yalnız yıl,
makam tarihi yok). `devletler.js`teki "cumhurbaşkanı" geçişleri yabancı künyelerde metin. ⇒ Kaynak dosyası yok.
**Öneri:** `data/cumhurbaskanlari.js` → `window.CUMHURBASKANLARI`, `PADISAHLAR` ile AYNI şema (`id · ad · from · to · kaynak`;
isteğe bağlı `kisi_id` → `KISILER` bağı). Ayrı dosya, çünkü künye içi kronoloji makam aralığı taşımıyor ve kart aralık arıyor.
Dosya inince index.html'e tek `<script>` satırı eklenir. **İsim yazılmadı** (araştırma KASA'nın işi).
**İskelet (`cumhurbaskaniGoster`):** son padişah kaydının bitişinden (hilâfet, 1923-11) sonra devreye giriyor. Durumlar:
- veri yokken "Cumhurbaşkanı · veri bekliyor" ve ☆
- kayıt varken ad + "Cumhurbaşkanı · YYYY – YYYY" + `assets/portreler/<id>.jpg` (yoksa baş harf)
- kayıt dışı günde "bu tarih için kayıt yok"

Albüm bağı yok (`_aktifPadisah` null). Sınandı: bellekte geçici bir sınav kaydıyla üç durum da doğru, kayıt sonra silindi.
1923-10-29'da kart eskisi gibi Halife Abdülmecid; 1281 öncesi "Osmanlı hanedanından önce".

**② "1281–1923" kalktı.** `<title>` → **"Osmanlı Tarih Atlası"** · açılış perdesi (`css/style.css` `html::before`) →
"Atlas yükleniyor… / Gün gün değişen sınırlar hazırlanıyor — lütfen bekleyin".
Öneri gerekçesi: ikisi de JS'ten ÖNCE okunan statik metin; ufuktan türetilemez (ufuk app.js'te). Ufuklu bir ifade ufuk
her değiştiğinde ikinci kez elle düzeltilmek zorunda kalır, yani bayatlardı. Ufuksuz başlık hiç bayatlamaz. Pencere başlığı
damgası zaten "Osmanlı Tarih Atlası · <gün> · …" yazıyor, gün bilgisi orada. "Osmanlı" sözcüğünün de kalkıp kalkmayacağı
(ör. "Tarih Atlası") **Emre'nin kararı** — dokunmadım.

**③ Madde sahnesi KIRILMANIN KENDİSİNE bağlandı (tek kalem).** Yeni `maddeKirilmasi(o)`:
- Pencere: ±`KIRILMA_PENCERE_GUN` (= 30, Değişmez 2'nin ölçeği), en yakın günden başlayarak; eşitlikte ileri.
- Kendine bağlı: `SUZGEC.maddeDegisimleri` (yer_id · yer · başlıkta ad · aynı el değiştirme çifti).
- Başkasınınkini almaz: o güne DAHA YAKIN bir madde değişimi DOĞRUDAN sahipleniyorsa (komşu yolu sayılmaz) alınmaz.
- Komşu eşleşme, dayanağı olan doğrudan eşleşme maddede kaldıysa tutulur. Sınavda ölçülen bir kusur düzeltildi: dayanağı
  bırakılan dört madde komşuyu yine alıyordu.

Bağlandığı üç yer: madde kutusu ve sahnesi (`maddeFarkiGoster`) · dar kırpma (`maddeyeDarKirp`) · antlaşma penceresi
(`antlasmaFarkiHesapla`: eski `[gün, min(+365, sonraki−1)]` kalktı → ileri 30 gün, yoksa geri 30 gün, taraf süzgeci aynen,
daha yakın maddenin doğrudan sahiplendiği değişim düşer). Kutu metni kırılma başka gündeyse "Haritadaki kırılma N gün
sonra/önce (gün)" diyor.
**Sınavlar (tarayıcı, gerçek işlevler):**
```
1533-01-01 İstanbul Antlaşması → kırılma YOK (±30'da taraf değişimi yok; 1534-01-01'i ALMAZ)
1534-01-01 Bitlis maddesi       → aynı gün [Bitlis, Arpaçay, Digor, Iğdır, Beri, Küçükperveli] · nikâh/Matrakçı → boş (doğru)
1517-01-22 Süveyş maddesi       → kırılma 1517-02-15 (+24) [Süveyş, Sina güneyi, Tûr] — eskiden BOŞTU; dar kırpma da bunu oynatıyor
1517-01-24 Kahire'ye ilk giriş  → BOŞ: Kahire'nin kırılması 02-15'te ve o günün maddesi (Selim'in girişi) onu DOĞRUDAN alıyor
1517-02-15 Selim'in girişi      → aynı gün [Kahire, Süveyş, Sina güneyi, Tûr]
1460-01-01 Amasra / İzvornik    → [Amasra] · [İzvornik, Tuzla] — sürüm 3 davranışı KORUNDU
```
📌 MISIR-SENKRON-0087'nin veri diff'leri (Kahire + bağlı 3 nokta → 01-24, Süveyş maddesi → 01-24) inince ne olur:
tarayıcı veriyi üretilmiş `data/paket_13.js`ten okuduğu için diff'i paket üretilmeden göremez; aynı değişiklik BELLEKTE
taklit edildi (benzetim, veri dosyasına yazılmadı). Sonuç: Süveyş 01-24 → aynı gün [Süveyş, Sina, Tûr] · Kahire 01-24 →
aynı gün [Kahire, …] · 02-15 maddesi → boş (MISIR'ın `toprak-kazanc` kaldırmasıyla uyumlu). ⇒ Kahire'nin 01-24 sahnesi
**veri düzeltmesiyle dolar**, kural bunu zorlamaz (ve zorlamamalı: 02-15 maddesi bugün o değişimi doğrudan anıyor).
⚠️ DOGU-1533 notu: mevcut veride ESKİ pencere de 1534'ü almıyordu (sonraki madde 1534-01-01 olduğu için pencere 1533-12-31'de
bitiyordu); salt `+365` alırdı. Yeni kural bunu yapısal olarak dışlıyor (365 > 30 ve Bitlis'i kendi maddesi sahipleniyor).
**Bütün akışta önce/sonra (ana akış, veri penceresi içi):**
```
madde kutusu  aynı gün 770 (eskisiyle birebir) · BAŞKA GÜN 32 (eskiden 32'si de BOŞTU; Δ≤7: 10 · 8-14: 10 · 15-30: 12)
              kırılma yok, günde değişim var 154 · hiç değişim yok 685
antlaşma      aynı 67 · değişti 1 · kayboldu 2 · yeni bulundu 10 · ikisi de yok 59
              kaybolan: 1612-07-06 Hollanda ahidnâmesi (Δ57) · 1838-08-16 Balta Limanı (Δ46) — 30 günün dışında
              yeni: 8'i GERİYE (Niş 1739 → 09-28, Edirne Mütarekesi 1878 → 01-11 …) — antlaşmadan önceki taraf değişimi
dar kırpma    tam gün 453 · dar 349 · yok 154 · değişimsiz 685
```
⚠️ "Geri" bulunan antlaşma kırılmaları (antlaşmadan ≤30 gün ÖNCE) yeni bir davranış. Kuralın ±30'unun doğal sonucu, ama tek
tek okunmadı.

**④ Şerit metni (Sümer kararı):** "Bu çağda yalnız kaynaklı şehirler boyanır — boş görünen yer kaynağı olmayan yerdir,
devletsiz değil." Tepe etiketi "Bu çağda yalnız kaynaklı şehirler boyanır", alan yazısı "📐 yalnız kaynaklı şehirler".

**Kapılar (sürüm 5):**
- `node --check` ✓ · `denetle_arayuz` temiz
- odak kapısı: SESSİZ 20 (taban `dcd98f95`: 1) = aynı 19 · OKUNMAYAN 1 (tabanda da 1) · ÖLÇEMEDİ yok
- ufuk sınavı 5/5 · tarayıcı `window.onerror` 0 · diff 67.620 bayt, CR 0

## §R4 — Sürüm 4 (UMIT İRTİBAT, 9 Ekim) · temel `7f63bcd9` · apply-check ✓ `82680a17`
Diff başlığı GÜN ARALIĞI: ① gösterim (her tarih, veri değişmez) · ② derin anlatı doğrulayıcı · ③ EK görünümü (her tarih) ·
② sürüm 3'ün dar kırpması: antlaşma maddeleri eski davranışa döndü (1281–1923).

**① "0330" SIZINTISI — kapandı.** Kaynak: MOTOR-TARIH-TARAMA-1008 ⑥a (sürüm 2 üzerinde ölçülmüş; sürüm 3 `kesinlikliYazi`
ve `kisaTarihYazi`yi zaten düzeltmişti). Yeni `isoDizgi(s)`: ham ISO'nun yalnız yıl dolgusunu düşürür. Uygulandığı yerler:
`_isyanTarihYazi` (3 kip, `yilDizgi`) · sefer vuruş title · yerleşim çubuğu dilim title · yerleşim dönem satırı ·
Devletler sekmesi `f → t` · derin anlatı adım başlığı · `kisaTarihYazi` ISO dalı.
**Sınav (gerçek sayfa, gerçek işlevler, 4 girdi × 9 biçimleyici):** `330-05-11` · `0330-05-11` · `330-01-01` · `0330-01-01` →
`kesinlikliYazi` · `olayTarihYazi` (alan yok + `kesinlik:"yil"`) · `kisaTarihYazi` · `_isyanTarihYazi` yil/ay/gün · `isoDizgi` ·
`yilDizgi`. **"0330" içeren çıktı: 0/36.** Dolgulu ve dolgusuz girdi BİREBİR aynı çıktıyı veriyor (ör. "11 Mayıs 330",
"Ocak 330", "330-05-11", "330").
⚠️ `ARAC-MOTOR-TARIH-TARAMA-1008-GOSTERIM.js` sürüm 4'te `kisaTarihYazi` için "ÇÖKER ReferenceError" basıyor. Sebebi alet:
biçimleyicileri tek tek ayrıştırıyor ve yeni `isoDizgi`yi vm'e yüklemiyor. Sayfada çökme yok (`window.onerror` 0). Aletin
`:103 (m.t).slice(0,10)` satırı `kisaTarihYazi`nin İÇ hesabıdır, ekran basımı değil.

**② Derin anlatı gün doğrulayıcısı:** `/^\d{4}-…/` → `/^\d{3,4}-\d{2}-\d{2}$/`. Sınandı (`derinAdimlari`): `330-05-11` KABUL
(eskiden eleniyordu) · `0330-05-11` kabul · `1453-05-29` kabul · `330-05` (ay) ELENİR (doğru).

**③ EK görünümünde puansız madde.** Eski: `dunya ?? onem ?? 3` ve eşik 4 ⇒ puansız madde hep gizli. Yeni: puansız (ikisi de yok)
madde "puansız" sayılıyor ve mevcut `#odak-puansiz` kutusuna bağlandı (varsayılan İŞARETLİ ⇒ görünür). Puanlı maddeye eşik aynen.
Ölçüm (çalışma anı evreni = KRONOLOJI_* bağlandıktan sonra `DEVLETLER[].kronoloji`, **13.025** madde, 3.723'ü puansız):
```
EK4 görünen   önce 1.090  →  sonra 4.813 (kutu işaretli) · 1.090 (kutu kapalı = eski davranış)
arayüz: Bizans "+ ek" → 22 satır (11 puanlı + 11 puansız); kutu kapalı → 11
```
⚠️ Koordinatörün "656 / 7.232"si başka bir evren (büyük olasılıkla bağlamadan önceki künye içi). Ben onu **yeniden üretemedim**;
yukarıdaki sayılar benim evrenim ve önce/sonra aynı evrende ölçüldü.
⚠️ Yan bilgi (önceden var olan, değiştirmedim): `#odak-puansiz` birleşik listede ODAK (Osmanlı) satırlarını da süzüyor; kutu
kapatılınca Osmanlı maddeleri de gizleniyor (1.806 → 279 satır).

**④ "Kırpma yok" listesi:** `denetim/ZAMAN-Z2-KIRPMA-YOK-1008.tsv` — **160 satır** (194 değil). Sürüm 4'te ölçülen bir
düzeltme: 194'ün **34'ü antlaşma maddesiydi**. Antlaşma maddeleri UI3 eşleştirmesinin bilerek dışında (kendi kutuları UI2'de),
`maddeDegisimleri` onlara hep "bağlı değişim yok" diyor ⇒ "yok" hükmü yanlıştı. `maddeyeDarKirp` artık antlaşma maddesinde
`null` dönüyor ve eski davranış korunuyor (sınandı: "Bizans'ın haraca bağlanması" → null).
Güncel kova (ana akış 1.784): **tam gün 453 · dar 318 · yok 160** · değişimsiz 711 · antlaşma (eski davranış) 139 · pencere
dışı 3 (toplam tutuyor). İzvornik vakası değişmedi: Amasra → [Amasra] · İzvornik → [İzvornik, Tuzla].
TSV sütunları: `t · baslik · yer_id · k · gun_degisim_sayisi · degisen_yerlesimler (ilk 8, once→sonra) · ayni_gun_kardes_maddeler`.
📌 Okuma ipucu: listenin bir kısmı Değişmez 2'nin konusu olabilir. Ör. 1324-01-01 "Osman Gazi'nin vefatı" günü Akyazı ve
İmralı `bizans→osmanli` el değiştiriyor ve o gün bu değişime bağlanan bir madde YOK. Eskiden tam gün kırpması bu değişimi
vefat maddesinde gösteriyordu. **Sınıflandırmadım.**

**Kapılar (sürüm 4):** `node --check` ✓ · `denetle_arayuz` temiz · odak kapısı: SESSİZ 20 (taban `82680a17`: 1) = aynı 19 ·
OKUNMAYAN +3 (tabanda da 3) · ÖLÇEMEDİ yok · ufuk sınavı 5/5 senaryo ✓ · tarayıcı `window.onerror` 0 · diff 55.061 bayt, CR 0.

## §R3 — Sürüm 3 (koordinatör ek işleri, 9 Ekim) · temel `8b2f5415`
Diff başlığı GÜN ARALIĞI: ①③ yalnız `VERI_UFKU`/UFUK DIŞI günlerde davranış değiştirir · ② 1281–1923 içinde, YALNIZ
aynı gününde maddeye bağlanmayan başka el değiştirme olan maddelerde (kırpma görüntüsü; veri değişmez).

**① 1000–1281 / 1923 sonrası akış (karar A — ana akışa madde EKLENMEDİ).** `osmanliAkisiBos()` = gün VERI_UFKU dışında.
Odak varsa ⏮/⏭/▶ zaten odak devletin listesinde ilerliyor (`ODAK_GEZINTI`, birleşik havuz varsa o). Odak yoksa
yerinde kalıp "ℹ️ Bu çağda Osmanlı kronolojisi yok — ☪ seçicisinden bir devlet seçin." yazıyor. Tarayıcıda ölçüldü:
1100'de ⏭ → gün değişmedi, uyarı çıktı · ▶ (olay kipi) → başlamadı, düğme ▶.
⚠️ Sınamada YAKALANAN hata: ilk yazımda ▶ "Maximum call stack size exceeded" verdi. `oynatDurdur` bir geçiş anahtarı ve
ilk adım `setInterval`den önce SENKRON koşuyor, yani "durdur" oynatmayı yeniden başlatıyordu. Ön kontrol oynatma
başlamadan önce yapılıyor, adımdaki durdurma yalnız oynuyorsa durduruyor. Düzeltmeden sonra hata 0.

**② Aynı gün kırpması maddenin PETEKLERİNE daraldı (KRONO-SENKRON / H-0023).** Yeni `maddeyeDarKirp(o)` ve ortak kapı
`maddeKirp(o)` (üç çağrı yeri). Kural, panel kutusunun kullandığı AYNI `SUZGEC.maddeDegisimleri`; katman mevcut
`antlasma-fark` örtüsü (`antlasmaFarkiKirp`), yeni mekanizma yok:
```
o günün değişimi yok ya da HEPSİ bu maddenin  → eski TAM GÜN kırpması (değişmedi)
bir KISMI bu maddenin                          → DAR: yalnız maddenin petekleri önce↔sonra, harita "sonra"da sabit
HİÇBİRİ bu maddenin                            → kırpma YOK (eskiden başka maddenin değişimini yakıyordu); panel sinyali eskisi gibi
```
Ölçüldü (tarayıcı, gerçek ⏭ akışı, 30 ms aralıkla tam-gün kırpması yoklanarak): 1460-01-01 Amasra maddesi → dar
**[Amasra]** · İzvornik maddesi → dar **[İzvornik, Tuzla]** · tam gün kırpması **0 kez** görüldü. KRONO-SENKRON'un
öngörüsüyle birebir (Amasra ~690 km² · İzvornik+Tuzla ~6.540 km²).
Kapsam (ana akış 1.784 madde): **tam gün 488 · dar 331 · yok 194** · değişimsiz 768 · pencere dışı 3 (139'u antlaşma,
onların kutusu ayrı ve önceliği korunuyor).
⚠️ Risk: "yok" kovası (194) eşleştirme kuralına (`yer_id` · `yer` · başlıkta ad · ≤150 km) bağlı. Kural bir fetih
maddesini kendi değişimine bağlayamıyorsa o madde artık YANIP SÖNMEZ. Emre'nin 14 Eylül "B" kararıyla uyumlu ("yalnız
o maddenin değiştirdiği yerleşimler yanıp sönsün"), ama 194'ü tek tek gözden GEÇİRİLMEDİ.

**③ UFUK DIŞI madde kırpılmıyor, İŞARETLENİYOR (UFUK-DISI-1008 bulguları).**
- `maddeAc`: gün UFUK dışındaysa `tarihAyarla` ve kamera uçuşu YOK, zaman ve harita yerinde. Panel maddeyi kendi
  tarihiyle açıyor (`kisaTarihYazi`, ham `m.t` değil) ve şunu yazıyor: "⏳ Bu madde atlasın zaman ufkunun (1000–1945)
  dışında — zaman çubuğu ve harita bu tarihe gidemez, harita değiştirilmedi." Sahte "1 Ocak 1000" artık yok.
  Ölçüldü: Bizans 637 → gün DEĞİŞMEDİ (15 Haziran 1100), panel "16 H. / 637 …", not görünür · ⏭ → 831 (aynı davranış) ·
  ufuk içi 1001 maddesi → 1 Ocak 1001'e gidiyor, not temizleniyor.
- Listede (`odak` ve birleşik) ufuk dışı satır soluk + kesik kenar + ⏳ ipucu (`ufukDisiIsaretle`). Bizans'ta 3/148.
- ⏮/⏭ ile ufuk dışı maddeler arasında gezinmek haritayı oynatmıyor, ama artık her adım bunu AÇIKÇA söylüyor.
- Şerit metninden "kronoloji geçerlidir" çıkarıldı: "Kapsam dışı — harita verisi 1281–1923 arasını kapsıyor; bu
  tarihte çizili olan EKSİKTİR."
- Yıl başındaki sıfır: `kesinlikliYazi` yılı `yilDizgi`den alıyor ("0226-01-01" → "226"); `kisaTarihYazi` ISO'da
  "0831-09-12" → "831-09-12". 0YYY dolgusu ekrana sızmıyor.

**④ Bilgi:** "VERİ PENCERESİ DIŞI" kovası koordinatörün kararı (Z1 yazıyor). 0900 ve 0981 o kovaya girmiyor (ufkun da
dışında), 1026 giriyor. Bu diff'in odak kapısındaki izi sürüm 2'yle aynı: SESSİZ +19, hepsi 1281 öncesi.

**Kapılar (sürüm 3):** `node --check` ✓ · `denetle_arayuz` temiz · odak kapısı sürüm 2 ile birebir (SESSİZ 20 =
19 + tabandaki 1 · OKUNMAYAN +3 tabanda da var · ÖLÇÜLEMEDİ yok) · ufuk sınavı 20/20 ✓ · tarayıcı `window.onerror` 0 ·
`git apply --check` ✓ `6fb477a9` (güncel uç) · 49.285 bayt · CR 0.
**Dokunulmadı (Emre kararı bekliyor):** padişah kartı · `<title>` ve açılış perdesindeki "1281–1923".

## §R2 — Koordinatör düzeltmesi (8 Ekim): "ufuk ÖNERİDİR, tek yerde ve adlandırılmış olsun"
- **Ufkun tek yeri:** `app.js` `BASLANGIC = gunIdx("1000-01-01")` · `BITIS = gunIdx("1945-09-02")` — iki satır, yorumda
  `= arac/girdi.py UFUK[0]/[1] · ÖNERİ`. Emre başka uç seçerse YALNIZ bu iki dizgi değişir.
- **Türeyen her şey:** çağ bölmeleri (`ZAMAN_CAGLARI` UFUK + `VERI_UFKU`dan kurulur, elle tarih YOK) · çağ adları ·
  eksen yazıları (çağ sınırları + çekirdek çağda 200'ün katları) · oynatma çarpanı · bütün kırpmalar. Kodda (yorum dışı)
  ufuk/veri tarihi geçen satır: yalnız bu iki satır + `VERI_UFKU` + tarihî `EPOK_DAMGASI`.
- **Pay kuralı (sürüm 1'deki elle %15/%73/%12 KALDIRILDI):** her dış çağ `0,29 × √(dış süre ÷ çekirdek süre)`, en az %8;
  çekirdek kalanı alır. Dış çağın payı YALNIZ kendi süresine bağlı. Sınandı (node, app.js'ten aynı dilim kesilerek,
  YALNIZ iki ufuk dizgisi değiştirilerek; gidiş-dönüş 4 gün × 5 senaryo = 20/20 ✓):
  ```
  1000–1945 → 1000–1281 %19,2 ×1,66 | 1281–1923 %72,8 | 1923–1945 %8,0 ×0,31
  1288–1945 → 1288–1923 %92,0       | 1923–1945 %8,0 ×0,40
  1000–1923 → 1000–1281 %19,2 ×1,84 | 1281–1923 %80,8
  1281–1923 → 1281–1923 %100   (bugünkü çubuk)      1288–1923 → %100
  ```
  ⚠️ Sürüm 1'deki ilk türetme (kalan %27'yi dış çağlara bölmek) tek dış çağda 1923–1945'e %27 veriyordu (×0,09, çok
  yavaş). Ölçülüp atıldı.
- **Neden ayrı bir `UFUK` dizisi YOK (ölçülmüş zarar):** ilk denemede `var UFUK = [...]` BASLANGIC'in üstüne yazıldı ⇒
  `arac/odak_cozum.js` app.js'i `var BASLANGIC = gunIdx(` satırından keser, üstteki ad orada yok ⇒
  **`odak nöbetçisi ÖLÇEMEDİ: UFUK is not defined`** (yayın kapısı kör). İkinci tuzak: o işaret dizgisini YORUMA
  yazınca `indexOf` dilimi yorumdan başlatır. İkisi de düzeltildi, uyarı yorumu yerinde; sınav dilimi aynı yöntemle kesiyor.
- **Z1 hizası ÖLÇÜLDÜ** (Z1 iki mesajla doğruladı): `girdi.UFUK = ("1000-01-01","1945-09-02")` = BASLANGIC/BITIS ·
  `girdi.VERI_UFKU = ("1281-01-01","1923-10-29")` = `VERI_UFKU` (aynı ad). Motor `KESIT_SON = UFUK[1]+3 gün`, ilk kesit
  `UFUK[0]` olabilir ⇒ veri penceresi `donemler`den TÜRETİLMEZ (Z1'in uyarısı birebir; sürüm 1'in ara hâli öyleydi, geri alındı).
- **Z7 bulgularından arayüze düşenler bu diff'te:** ② künye kartı `(d.f).slice(0,4)` → `yilDizgi()` (5 yer; Bizans
  "330- – 1461" → **"330 – 1461"** ölçüldü) · ③ odak listesi dizgi sırası → gün indeksi sırası. ① kırpma 1000–1945'e
  açıldı (1000 öncesi künye/madde hâlâ 1000-01-01'e kırpılır — sayılmadı). ④⑤⑥ arayüz dışı/veri: Z7'de.

## §0 Önceki ölçümler ne diyordu (mükerrer kapısı)
- `YOL-HARITASI` Boyut 1: çubuk doğrusal olamaz, **çağ bölmeli** olmalı · `kesinlik` alanı ve "~MÖ 550 / 1427 civarı" gösterimi.
- `KAPSAM-1945-OLC-0930`: `app.js:90 BITIS` + `:9092` zaman çubuğu etiketi; "1923" geçen 16 satır. Hangisinin tavan olduğu **ölçülmemişti**.
- `OLCUM-1923-2026-KAPSAM-0905` §3: `aktifAralik` son-gün kuralı bir **görüntü kararı**; `BITIS` güncellenmezse çubuk 1923'te durur.
- `BULGU-1923-2026-ACILIS-0905`: `js/app.js` 3 yerde, `denetle_gorunur.py` çubuğu `[1281,1923]` tanımlıyor.
- `SONRA1923-SAYIM-1004`: "yüklü ≠ görünür" — 500 madde yüklü, çubuk UC'de duruyor.
- ⇒ **Envanter ve sınıflandırma yapılmamıştı, çağ ölçeği/kesinlik gösterimi yazılmamıştı.** Mükerrer yok.
  O günden bugüne değişen: 1923-1945 kronolojisi (505 madde) ve `once1281` dosyaları (1.202 madde) YÜKLÜ.

## ① Öngörü
⚠️ **Dürüstlük notu:** Öngörüleri ölçümden önce DOSYAYA yazmadım. Aşağıdakiler kod okunurken yaptığım
beklentilerdir, ölçümle karşılaştırması yanlarında. Kural ihlalidir, bildiriyorum.
| beklenti (kod okurken) | ölçüm |
|---|---|
| `donemBul`un "iki uçta kırpma"sı çubuk açılınca AKTİF yanlış çizer (1100'de 1281 beyliği) | ✓ doğrulandı: `-3` dalı eklenmeden önce 1100 → dönem 0 |
| 1923-10-29 karesi `aktifAralik` BITIS'e bağlı kalırsa yeniden boşalır | ✓ (kural VERI_SONU'ya taşındı; 1923-10-29 → dönem 619, dolu) |
| padişah kartı uçlarda KIRILMAZ, yalnız "—" der | ✓ kırılmadı; "—" + sebep eklendi |
| çağ çarpanı 1000-1281 ≈ ×2, 1923-1945 ≈ ×0,2 | ✓ sürüm 1: 2,127 / 1 / 0,207 · sürüm 2 (türetilmiş pay): 1,66 / 1 / 0,31 |
| odak kapısı ETKİLENMEZ | ✗ **YANLIŞ** — SEKME SESSİZ +19 (aşağıda ②-6) |

## ② Ne ölçtüm

### ②-1 Envanter ve SINIF (app.js, ufuk mu tarihî mi)
| yer | eski | sınıf | yeni |
|---|---|---|---|
| `:89 BASLANGIC` | 1281-01-01 | **UFUK** | `1000-01-01` |
| `:90 BITIS` | 1923-10-29 | **UFUK** | `1945-09-02` |
| (yeni) `VERI_UFKU` | — | **VERİ** (= `girdi.py VERI_UFKU`, Z1) | `["1281-01-01","1923-10-29"]` → `VERI_BASI/VERI_SONU` |
| `:112 aktifAralik` son-gün kuralı | `t===BITIS` | **VERİ** (verinin son günü) | `VERI_SONU` |
| `:1682 donemBul` iki uçta kırpma | ilk/son dönem | **hata olurdu** | `-3` (veri dışı: Osmanlı gövdesi çizilmez) |
| `:3666 EPOK_DAMGASI` | 1281-01-01 | **TARİHÎ/veri epoku** (883 kaydın ilk dönemi) | DEĞİŞMEDİ |
| `:9322` yerleşim çubuğu | doğrusal `[1281,BITIS]` + sabit 4 yazı | UFUK | çağ ölçeği (`gunKonum`) + ortak eksen |
| `:9987` kaydırıcı min/max/value | gün indeksi | UFUK | KONUM 0…1.000.000 |
| açılış günü (`suanki = BASLANGIC`) | 1281 | **TARİHÎ** (veri başı) | `ACILIS_GUNU = VERI_BASI` — 1000'de boş haritayla açılmasın |
| `:11487-11498` madde farkı uç atlaması | BASLANGIC/BITIS | **VERİ** (D180 gerekçesi veri ucuna) | `VERI_BASI/VERI_SONU` |
| `:14169 oncesiSonrasiKirp` | `once<BASLANGIC` | **VERİ** | `VERI_BASI`/`VERI_SONU` |
| `:12540/12607` oynatma başı/sonu | BASLANGIC/BITIS | UFUK | aynen (değer değişti) |
| `:14548/14562` ⏮⏭ uçlar | BASLANGIC/BITIS | UFUK | aynen |
| `:14665-14680` tarihe git kırpma | BASLANGIC/BITIS | UFUK | aynen + uzak madde eşiği (②-5) |
| `:15376 gezSuanki` (devlet odağı) | BASLANGIC/BITIS | UFUK | aynen ⇒ 1281 öncesi devlet maddelerine ARTIK gidiliyor |
| `:8733` hukuki sınır açık uç | BITIS | UFUK | aynen (açık uç 1945'e kadar) |
| `js/d_katman.js:415 _D_PENCERE_SONU` | 1923-10-29 | **TARİHÎ/veri** (D hattı geriye sarma noktası) | DEĞİŞMEDİ (metin doğru) |
| `index.html:6 <title>` · açılış perdesi "1281'den 1923'e" | — | marka metni | DEĞİŞMEDİ — **karar Emre'nin** (④-4) |

### ②-2 Çağ bölmeli çubuk
- `ZAMAN_CAGLARI`: sürüm 1 elle %15/%73/%12 idi; **sürüm 2 UFUK + VERI_UFKU'dan türer → %19,2 · %72,8 · %8,0** (§R2).
- Gün↔konum gidiş-dönüş: 1100-06-15 · 1281-01-01 · 1923-10-29 · 1930-06-15 · 1945-09-02 — **5/5 birebir** (ilk sürümde
  100.000 konumla 1 gün kayıyordu → 1.000.000'e çıkarıldı; en seyrek çağda konum başına 0,7 gün).
- Ok tuşları ESKİ sözleşmede: ±1 gün (Shift ±365) — kaydırıcı odaktayken de (ölçüldü: 1945-09-02 → ← → 1 Eylül 1945).
- Eksen yazıları `left:%` ile GERÇEK konumda; dar çubukta çakışan düşük öncelikli yazı gizleniyor
  (800 px pencerede ölçüldü: "19231945" çakışması → 1923 gizli, 1000·1281·1500·1700·1945 görünür). Yerleşim çubuğu aynı eksen.
- Oynatma çarpanı (sürüm 2): 1,66 / 1 / 0,31 (normal 180 gün/sn ⇒ ~299 / 180 / ~56 gün/sn). **Ölçülen yan kusur ve düzeltmesi:**
  eski `Math.max(1, round(…))` her kareye ≥1 gün veriyordu ⇒ 60 kare/sn'de **60 gün/sn taban** yavaş çağı ezerdi
  (ilk ölçüm 1930'da 122 gün/sn). Kesir artık birikiyor; düzeltmeden sonra tek zincirle 1930: 57 gün/2 sn.
  ⚠️ Gizli bölmede kare 1 sn'ye kırpıldığı için mutlak hız ölçümü güvenilir değil. 1500'de 222 (beklenen 180) ölçüldü;
  sebebi testin durdur-başlat'ı aynı karede çağırıp iki rAF zinciri doğurması (önceden var olan yarış, `zamanlayici` bayrağı).
  Kullanıcı tıklamasıyla oluşması pek olası değil, düzeltmedim.

### ②-3 Kesinlik gösterimi (`kesinlik` alanı, VERI-YAPISI.md — skaler ve {f,t} İKİSİ de)
`kesinlikliYazi(ham, gi, kesinlik)` + yeni `kisaTarihYazi(m)` (devlet listeleri ham ISO basıyordu, ör. "1100-01-01"):
```
gun "29 Mayıs 1453" · ay "Mayıs 1453" · yil "1427" · onyil "~1090" · yuzyil "XV. yüzyıl" · belirsiz "~1891 (belirsiz)"
alan yok + YYYY-01-01 → "1100" (eski davranış) · {f:"ay",t:"gun"} → "Ekim 1689" · gün biliniyorsa ISO aynen
```
Veride: OLAYLAR'da `kesinlik` taşıyan **91** madde (değerler yalnız gun/ay/yil), KRONOLOJI_* içinde **2**.

### ②-4 Uçlarda kırılma (tarayıcı, yerel http.server, 4 Ekim sonrası veri)
```
gün          dönem  Osmanlı gövdesi     padişah kartı                         konsol hatası
1100-06-15   -3     çizilmez + şerit    "— · Osmanlı hanedanından önce"       0
1281-01-01    0     dolu                "— · Osmanlı hanedanından önce" (1299 öncesi; eskiden boş "—")  0
1402-09-01   -2     Fetret (değişmedi)  Fetret                                0
1923-10-29  619     dolu (son gün kuralı korundu)  Halife Abdülmecid          0
1930-06-15   -3     çizilmez + şerit    "— · Osmanlı hanedanından sonra"      0
1945-09-02   -3     çizilmez + şerit    aynı                                  0
```
`KAPSAM DIŞI` şeridi (harita üstü, `#kapsam-disi-serit`) VERI_UFKU dışında görünür: 1923-10-29 gizli, 1923-10-30 görünür.
Z1'in ④-2 isteği bu: motor UFUK'u açıp yarım yabancı gövde çizse bile şerit "çizili olan EKSİKTİR" der.
Devlet odağı (Bizans): ilk maddeye tık → 1000-01-01 (637 tarihli madde UFUK başına kırpıldı), dönem -3, hata 0.

### ②-5 Ana kronoloji uçlarda neredeyse BOŞ — ölçüldü
```
                    <1281   1281–1923   1923-10-29…1945-09-02   >1945
OLAYLAR (ana akış)      0       1.782                       2       0
KRONOLOJI_* (110 dosya) 1.202   6.551                     505       4
```
⇒ "olay olay" oynatma 1000–1281'de hiçbir şey göstermez; 1281 öncesinin ve 1923 sonrasının maddeleri yalnız devlet
seçicisinden ulaşılabilir. "Tarihe git 1100" eskiden 1281'e (180 yıl öteye) gidiyordu. Artık en yakın madde 5 yıldan
uzaksa tarihin KENDİSİNE gidip sebebini yazıyor (ölçüldü: 1100 → 1 Ocak 1100 · 1939 → 1 Ocak 1939 · 1453 eskisi gibi
maddeye gidiyor). Ana akışa ne girer sorusu **Z7'nin kalemi** (④-3).

### ②-6 🔴 ODAK KAPISI (yayın kapısına bağlı) — bu diff tavanı aşıyor
**Sürüm 2'de yeniden ölçüldü, taban `c69b890f`:** SESSİZ taban 1 yeni çift → Z2 **20** (aynı 19 + 1381 Timur). Ayrıca
**SEKME OKUNMAYAN +3** (0900 Mapungubwe · 0981 Bạch Đằng · 1026 Somnat) — **TABANDA DA AYNI 3**, Z2'den değil (Z7 madde/PAD).
`arac/odak_cozum.js` app.js'ten `var BASLANGIC = gunIdx(` → `// ═══` dilimini kesip koşuyor. Dilim kendi içinde
çalışıyor (OLCULEMEDI 0). Ama kırpma 1000–1945'e açıldı:
```
                       taban e28edfdc   bu diff
SEKME_GOVDE                 254           235
SEKME_SESSIZ                 46            65   (tavan sekme_sessiz = 53)
kapı: SESSİZ GERİLEDİ    1 yeni çift     20 yeni çift   (1 = 1381 Timur/iran, TABANDA ZATEN VAR)
```
Yeni 19 çiftin **19'u da 1281 öncesi**: selcuklu 7 · kilikya-ermeni 9 · gurcistan 1 · memluk 1 · bulgar-carligi 1 · karaman 1
(tam liste aşağıda). Hüküm: eskiden 1281-01-01'e kırpılıp **1281'in gövdesine** uçuyorlardı (1080 olayına 1281 sınırı).
Yeni ölçüm doğru, eski "GÖVDE" yanlış pozitifti. **Kusur değil, KAPSAM** — ama kapı bunu ayırt etmiyor.
```
1080-01-01 Fetih sonrası nüfus ve iskân politikası · selcuklu     1243-01-01 Baycu ile ön anlaşma · kilikya-ermeni
1140-01-01 İlk Selçuklu parasının basılması · selcuklu           1251-01-01 Korikos kalesi genişletildi · kilikya-ermeni
1202-01-01 II. Süleyman Şah'ın Gürcistan seferi · selcuklu       1256-01-01 Toros Roslin İncil'i · kilikya-ermeni
1216-06-01 Çukurova Ermeni Krallığı tâbiiyeti · selcuklu         1260-06-01 Sempat, Antakya kodeksi · kilikya-ermeni
1219-01-01 I. Levon öldü · kilikya-ermeni                         1266-08-24 Mari Bozgunu · kilikya-ermeni
1223-01-01 Venedik/Kıbrıs ticarî antlaşma · selcuklu             1270-10-28 Hetum I öldü · kilikya-ermeni
1226-01-01 Hetum I kral oldu · kilikya-ermeni                     1271-01-01 Baybars'ın Kıbrıs seferi · memluk
1226-06-01 Sis ve Tarsus darphaneleri · kilikya-ermeni           1277-01-01 İvaylo Ayaklanması · bulgar-carligi
1231-01-01 Moğol istilası başladı · gurcistan                     1277-11-01 Mehmed Bey, İç İl · karaman
1240-01-01 Babaîler İsyanı · selcuklu
```

### ②-7 Kapılar
- `node --check js/app.js` ✓ (her adımda)
- `py arac/denetle_arayuz.py` önce **temiz** (çıkış 0) · sonra **temiz** (çıkış 0) — fark yok
- tarayıcı: 1100 · 1281 · 1923-10-29 · 1930 · 1945 · 1402 (Fetret) · 1500 — `window.onerror` **0**, konsol hatası **0**
- `git apply --check` ✓ `e28edfdc` · ✓ `d8e4e07b` · sürüm 2: ✓ `88cc2f3c` (güncel uç) · 36.982 bayt · CR 0

## ③ Ne bulamadım / ölçmedim
- **Z1 hizası:** ÖLÇÜLDÜ ve doğrulandı (§R2). Z1, `odak_olc` için "VERİ PENCERESİ DIŞI" kovasına katılıyor — ④-1 artık Z1+Z2 ortak önerisi.
- `kodla.py:592/634/974` açılış günü `1281-01-01` (Z1 bildirdi): app.js `ACILIS_GUNU = VERI_BASI` = 1281-01-01 ⇒ **bugün hizalı**.
  Okumadım; arac/ Z1'in.
- `denetle_gorunur.py:259/294` zaman çubuğu tanımı: Z1'in ARAC.diff'i `girdi.UFUK`a bağlıyor; app.js ile eşitliği **koşmadım**.
- `denetle_yayin.py`nin tamamını koşmadım; yalnız odak bölümünü (`odak_olc.kapi_olcumu`) iki ağaçta koşturdum.
- Mobil (375 px) görünümü ölçmedim. CSS'te `#zaman` → `#zaman-sarmal` taşındı, mantık aynı.
- 1000'den önceki maddeler (Bizans 637, 831…) UFUK başına (1000-01-01) kırpılıyor; kaç madde **saymadım**.

## ④ Ne istiyorum / öneriyorum
1. 🔴 **TAVAN + SABİT AYNI COMMIT'TE (§3.4-②):** bu diff tek başına inerse yayın kapısı **SESSİZ GERİLEDİ** der.
   - **(a) ÖNERİM:** `odak_olc`a ayrı kova: madde günü `VERI_UFKU` dışındaysa SESSİZ değil **"VERİ PENCERESİ DIŞI"** (bilgi,
     bloke etmez, adıyla basılır). 2s'nin `KAPSAM DIŞI` deseni, Z1 ④-2 ile aynı. Dosya arac/ (Z1/koordinatör).
   - (b) Geçici: 19 çift `sekme_sessiz_kimlik`e adıyla eklenir (koordinatör yazar). Kötü seçenek: kapsam borcunu kusur tavanına
     gömer ve Z6 veriyi doldurdukça çifti kapatmak elle iş olur.
2. **Yayın kapısı sorusu (Z1 ④-3'e katılıyorum, genişleterek):** `app.js BASLANGIC/BITIS == girdi.UFUK` **ve**
   `app.js VERI_UFKU == girdi.VERI_UFKU`. İkisi de app.js'te tek satırlık dizi/dizgi, regex ile okunur.
3. **Z7'ye:** ana akış (OLAYLAR) 1281 öncesinde 0, 1923 sonrasında 2 madde. "Olay olay" kipinin 1000–1281'de ne oynatacağı karar ister:
   OLAYLAR'a taşımak Değişmez 2 evrenini büyütür; arayüzde "Osmanlı yokken birleşik havuz" göstermek ayrı bir iş.
4. **Emre'nin kararı — padişah kartı Osmanlı yokken:** bugün yalnız durum yazılıyor ("Osmanlı hanedanından önce/sonra"), kişi
   UYDURULMADI. Seçenekler: ① 1923-10-29 sonrası **Cumhurbaşkanı** (M. Kemal 1923–1938, İnönü 1938–1950; kartvizit şeması aynı,
   yeni `CUMHURBASKANLARI` dizisi + TDV kaynağı) ② 1281 öncesi **Anadolu Selçuklu sultanı** ③ kart o yıllarda gizlenir.
   Önerim ①: Cumhuriyet atlasın konusunun doğrudan devamı. ② ancak 1281 öncesi Osmanlı odağı netleşince.
   Aynı karar: `<title>` "(1281–1923)" ve açılış perdesindeki "1281'den 1923'e" — ufuk mu veri mi yazsın?
5. `kesinlik:"yil"`: VERI-YAPISI.md örneği "1427 civarı" diyor, ben **"1427"** yazdım. Yıl hassasiyeti "yıl BİLİNİYOR" demek,
   "civarı" ancak onyıl ve daha kaba birimde doğru. Şema metni de düzeltilmeli; kök *.md olduğu için koordinatörün.
6. Uygulama sırası: bu diff **Z1'in üç diff'iyle aynı commit'e ve tam inşaya bağlı DEĞİL**. app.js motor tuzunda değil, koşu
   istemez, bugünkü veriyle de doğru çalışıyor (veri 1281–1923, şerit dışarıyı örtüyor). Tek şart ④-1.

## Dosyalar (`C:\atlas-umit\denetim\`e kopyalandı, izlenmeyen)
- `ZAMAN-Z2-1008.md` — bu rapor
- `ZAMAN-Z2-1008-APPJS.diff` (sürüm 5) — `js/app.js` (+634/−67) · `index.html` (+10/−1) · `css/style.css` (+32/−7)
- `ZAMAN-Z2-KIRPMA-YOK-1008.tsv` — dar kırpmada "yok" kovasındaki 160 madde (UTF-8, sekme ayraçlı, LF)
