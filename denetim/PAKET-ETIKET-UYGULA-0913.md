# PAKET-ETIKET-UYGULA — 13 Eylül 2026

```
OTURUM   PAKET-ETIKET (1.MURAT sevki) · açılış M-3857
SEVK     etiket_yama.js konu26 + afet (PAKET-A5, 632a042) → VERİYE · Konu süzgecine 26 başlık + Afet
         + ekokuma_kadin.js kimdir-kosem-sultan tek düzeltme
İSTEKLER 0035/H-0066 (26 başlık) · 0035/H-0034 (afet etiketleri)
COMMIT   YOK (şartname gereği)
```

## 1 · Veri — etiketler uygulandı

**Yöntem:** `denetim/ARAC-ETK-UYGULA-0913.py` (kuru varsayılan, `--uygula` ile yazar).
- Kural ve desenler **`data/etiket_yama.js`ten okunur** (konu26.tablo `deger_kumesi` + `baslik_deseni` · afet `alt_etiketler` · `deger_eslemesi` · `haric_okunarak` · `govde_dahil_okunarak`); sınıflandırıcı kodu kopyalanmadı.
- Madde değerleri eval edilmiş gerçek veriden (`ARAC-A3-MADDE-TOPLA-0913.js`, 84 dosya · 6210 madde).
- Dosyalar **metin olarak** düzenlendi (yeniden biçimlenmedi): küçük bir JS sözcük çözücüsü her `etiket:[…]` dizisini sahibi olan nesneye bağladı, nesne (dosya · t · b · k · tur · vefat_id · etiket) anahtarıyla maddeye eşlendi. **Eşleşmeyen madde 0**, çözücü fazlası 0. BOM ve satır sonu (LF) korundu.
- Yalnız **ekleme**: t / b / d / k / tur / kisiler / vefat_id değişmedi; var olan etiket tekrar yazılmadı; eski dizi yeni dizinin öneki.

**Yazılan etiketler:**
```
konu-<id>            25 başlık (Emre'nin listesi, sırası ve adı korunarak)
afet                 26. başlık "Doğal afetler ve hastalıklar" = üst etiket
afet-deprem · afet-yangin · afet-sel · afet-salgin · afet-kitlik · afet-volkan-firtina
```
Ad alanı neden `konu-`: başlık id'lerinin çoğu (`askeri` · `darbe` · `islahat` · `imar` · `bilim` · `din` …) veride **başka anlamla** etiket olarak zaten var (ör. `darbe` 198 aday okunarak verilmiş etiket; başlık deseni `hal'i` ile 84 madde yakalıyor). Aynı değeri yazmak iki farklı iddiayı birleştirirdi. `normalizasyon` sözlüğünde yeni etiketlerin hiçbiri anahtar ya da değer değil (ölçüldü: **çakışma YOK**) — yani yeni etiket, normalleştirilince var olan bir etiketin tekrarı olmuyor.

**Sayılar — önce → sonra (veride, etiketi taşıyan madde):**

| etiket | önce | sonra | öneri (etiket_yama.js) |
|---|---|---|---|
| konu-askeri | 0 | 2730 | 2730 |
| konu-siyasi | 0 | 1815 | 1815 |
| konu-idari | 0 | 517 | 517 |
| konu-diplomasi | 0 | 1030 | 1030 |
| konu-kisiler | 0 | 541 | 541 |
| konu-isyan | 0 | 447 | 447 |
| konu-darbe | 0 | 84 | 84 |
| konu-burokrasi | 0 | 36 | 36 |
| konu-hanedan | 0 | 898 | 898 |
| konu-bilim | 0 | 353 | 353 |
| konu-ekonomi | 0 | 513 | 513 |
| konu-din | 0 | 493 | 493 |
| konu-sanat | 0 | 42 | 42 |
| konu-kultur | 0 | 561 | 561 |
| konu-spor | 0 | 9 | 9 |
| konu-imar | 0 | 365 | 365 |
| konu-egitim | 0 | 98 | 98 |
| konu-islahat | 0 | 429 | 429 |
| konu-sosyal | 0 | 274 | 274 |
| **afet** (26. başlık) | **1** | **94** | 94 |
| konu-demografi | 0 | 93 | 93 |
| konu-hukuk | 0 | 242 | 242 |
| konu-ulastirma | 0 | 59 | 59 |
| konu-sanayi | 0 | 25 | 25 |
| konu-kesif | 0 | 57 | 57 |
| konu-magazin | 0 | 6 | 6 |
| afet-salgin | 0 | 56 | 56 |
| afet-yangin | 0 | 16 | 16 |
| afet-kitlik | 0 | 15 | 15 |
| afet-deprem | 0 | 13 | 13 |
| afet-volkan-firtina | 0 | 4 | 4 |
| afet-sel | 0 | 3 | 3 |

```
en az bir başlık etiketi   6200 / 6210  (öneri 6200/6210)  · başlıksız 10 (hepsi k/tur/etiket "diger")
eklenen etiket             11917 · 6200 madde · 82 dosya
afet maddeleri             94 — öneri listesiyle MADDE MADDE birebir (fark 0) · çekirdek 15
FARK                       0 kalem
```
**Açıklanan tek sapma:** `afet` önce **1** — `kronoloji_memluk.js` 1303-08-08 "Doğu Akdeniz depremi" zaten `etiket:["afet","sosyal"]` taşıyordu. O madde afet kümesinin içinde (başlık deseni `deprem` + gövde listesi), yani tekrar yazılmadı ve sayı 94'te kaldı.
**3 madde etiket ALANI taşımıyordu** (`olaylar_ek15.js` 1337-09-09 Serbedârîler · 1359-01-01 Mar'aşî · 1371-01-01 Kârkiyâ): bunlara `etiket:[…]` alanı eklendi (yalnız konu etiketi; başka alan yok). Eklenmeseydi kapsama 6197/6210 olurdu.
`etiket_yama.js` "10 başlıksız" maddesine dokunulmadı (öneri de bir başlık vermiyor).

**Sınavlar (`denetim/ARAC-ETK-DOGRULA-0913.py` önce/sonra JSON):**
```
① madde sayısı/sırası ve t·b·k·tur·d·kisiler·vefat_id·dosya   BİREBİR (6210 → 6210)
② eski etiket dizisi yeni dizinin öneki                       ✓
③ eklenen her etiket izinli kümede                            ✓
④ yeni tekrar doğmadı (tekrarlı dizi önce 56 · sonra 56 — eskiler, bu işin değil)
node --check  data/olaylar*.js + kronoloji*.js + ekokuma_kadin.js + etiket_yama.js   85+1 dosya · 0 hata
idempotans    uygulayıcı yeni veride kuru koşu: eklenecek 0 · eşleşmeyen 0
A5 sınıflandırıcısı yeni veride  6200/6210 · afet 94 · alt sayılar AYNI
```

**Tuzaklar yazımdan ÖNCE yeniden sınandı:**
```
Selim ≠ sel        afet-sel alan 3 madde: Sarı Nehir'in Jia Lu'ya yönlendirilmesi (1351) · Liu Daxia'nın Sarı Nehir
                   ıslah projesi (1494) · Kaifeng sedleri (1642) — başlığında "Selim" geçip afet-sel alan: 0
Çekirge Stefan     başlığında "Çekirge" geçen madde: afet etiketi alan 0
kuşatma açlığı     hariç listesi (Siena 1554 · İsfahan 1722): ikisi de afet ALMADI
                   başlığında kuşatma geçip afet alan 2 madde: 1346 ve 1347 Kefe kuşatması / Kara Ölüm (afet-salgin)
                   — kuşatma açlığı değil veba, doğru
```
⚠️ Okurun şaşırabileceği bir madde: **1354-03-02 "Gelibolu'nun alınışı"** `afet-deprem` alıyor. Sebep önerinin **okunarak** seçilmiş gövde listesi (surları yıkan 1354 depremi alınışın sebebi). Kasıtlı; itiraz Emre'nin.
🟡 Sınır (öneriden devralındı): konu başlık desenleri tek tek OKUNMADI (`konu26.sinirlar`) — örneklemle yanlış pozitif oranı **ölçülemedi**.

## 2 · Arayüz — Konu süzgeci

| dosya:satır | ne |
|---|---|
| `js/suzgec.js:345` `KONU_BASLIKLARI` | 26 başlık (id · ad · etiket), Emre'nin sırası |
| `js/suzgec.js:374` `AFET_ALT_TURLER` | 6 alt tür |
| `js/suzgec.js:384/390/399` | `baslikEtiketleri` · `baslikGecer` (VEYA) · `baslikSayilari` (süzülmemiş küme) — DOM'suz, dışa aktarıldı |
| `js/app.js:5017` | `baslikSecim` (null = süzme yok) |
| `js/app.js:5036` | `suzgecUygula`: grup VE toprak VE başlık |
| `js/app.js:5074` | `baslikUrlOku` — `?baslik=afet-deprem,konu-askeri` (tanınmayan değer atılır) |
| `js/app.js:5117` | 🔧 grup kutuları `input.suzgec-grup:checked` ile toplanıyor |
| `js/app.js:5159` | başlık bölümü: "KONU BAŞLIKLARI" + **temizle**, 26 kutu, Afet altında girintili 6 alt tür, sayılar |
| `js/app.js:5236` | başlık seçiliyse süzgeç açık gelir |
| `css/style.css:1958` | gövde `max-height:70vh` + kaydırma, alt başlık, girinti, 0 sayılı başlık soluk |

**Semantik:** mevcut 7 grup (`k:`/`tur:` bölüntüsü) ve "Yalnız toprak değişimi" **aynen** duruyor. Başlıklar ayrı bir eksen: hiçbiri işaretli değilse süzmez; işaretlilerden **birini** taşıyan madde görünür; gruplar ve toprakla **VE**. Başlık sayıları toplanmaz (bir madde birden çok başlıkta).
🔧 **Yan düzeltme (ölçülen kusur):** grup kutusu değişince eskiden `govde.querySelectorAll("input:checked")` **toprak kutusunu da** ("on") topluyordu → toprak açıkken bütün grupları geri işaretlemek "süzme yok"a dönmüyor, URL'ye `konu=…,on` düşüyordu. Başlık kutuları da aynı gövdeye girdiği için sınıfla ayrıldı; tarayıcıda sınandı (aşağıda url4).

`node --check js/suzgec.js` ✓ · `node --check js/app.js` ✓ (her düzenlemeden sonra).
⚠️ **Yalnız Osmanlı zaman çizgisindeki Konu süzgecine** eklendi. Devlet seçilince açılan ODAK panelinin konu kutuları (`app.js` `odakKonuKur`) hâlâ 7 grup — kuyruk maddeleri (4838) başlıkların asıl yoğun olduğu yer; eklenmesi ayrı bir kalem.
⚠️ `index.html` sürüm damgası (`?v=r7487`) **yükseltilmedi** (dosya bende değil) — yayından önce `surum_damgala.py` şart, yoksa tarayıcı eski suzgec.js/app.js'i önbellekten verir.

## 3 · Tarayıcı doğrulaması (yerel sunucu `arac/sunucu.py`, :8777)

Çekirdek zaman çizgisi 1365 madde (sayfanın kendi sayacı). JS ile kutular tetiklendi, görünür `.olay` satırları sayıldı:
```
başlangıç                       1365
Deprem                              4   (Gelibolu 1354 · Küçük Kıyamet 1509 · 1766 · 1894)   url ?baslik=afet-deprem
Deprem ∨ Salgın                    11   (4 + 7)
  + Yalnız toprak değişimi          1   url ?baslik=afet-deprem,afet-salgin&toprak=1
  Askerî grubu kapat → url +&konu=siyasi,hanedan,icduzen,kultur,iktisat,diger
  Askerî grubu geri aç → url4 ?baslik=…&toprak=1   (konu= KALKTI — yan düzeltme çalışıyor)
temizle                          1365   url boş
Doğal afetler ve hastalıklar       15   (= öneri "çekirdek 15") · sayaç "… · 1350 gizli"
```
Panelde görünen sayılar (çekirdek): Askerî 800 · Siyasî 374 · Diplomasi 259 · İç ayaklanma 105 · Ekonomi 108 · Hânedan 88 · Kişiler 92 · Kültür 84 · İmar 72 · İdarî 66 · Bilim 61 · Din 48 · Yenileşme 46 · Darbeler 27 · Bürokrasi 24 · Hukuk 23 · Sosyal 19 · Ulaştırma 17 · Afet 15 (Deprem 4 · Yangın 4 · Salgın 7 · Sel 0 · Kıtlık 0 · Volkan 0) · Eğitim 11 · Demografi 9 · Keşif 8 · Spor 6 · Magazin 6 · Sanat 2 · Sanayi 0. Konsolda 404 yok. Mevcut 7 grup + toprak kutusu (527) yerinde.
Ekran görüntüsü alındı (liste yalnız afet maddeleriyle, "2 / 1365 başlık · 1350 gizli"). Açık panelin ekran görüntüsü **alınamadı** (tarayıcı paneli çizmedi, zaman aşımı) — panel içeriği yukarıdaki DOM okumasıyla doğrulandı, **göz ile değil**.

## 4 · Kösem Sultan kartı (`data/ekokuma_kadin.js` `kimdir-kosem-sultan`)
TDV `kosem-sultan` (HTTP 200, gövde okundu): *"Süleyman Ağa ve adamları Kösem Sultan'ı Harem'deki odaların birinde dolap üzerinde bulup **öldürdüler** (16-17 Ramazan 1061 / 2-3 Eylül 1651)"*. Gövdede "boğ-" iki kez geçiyor: biri "Boğaz", öteki **Sultan İbrâhim'in** "boğdurulması" — Kösem'in ölüm biçimi değil.
Düzeltme: "Kösem'i harem içinde ~~boğdurarak~~ öldürmesiyle". Başka bir şeye dokunulmadı.
🟡 Not (yazılmadı): kart "2 Eylül 1651" diyor, TDV "2-3 Eylül 1651" (16-17 Ramazan) — gece; karar sahibine.

## 5 · Denetim önce → sonra

| ölçüt | önce | sonra |
|---|---|---|
| Değişmez 1 | 3818 · 324 sahipsiz | aynı |
| Değişmez 2 | 528 · 0 açık | **528 · 0 açık** |
| Değişmez 2s | 1331 · 101 AÇIK · 357 KAPSAM DIŞI | **1331 · 101 · 357** |
| Değişmez 2i | 62 · 3 açık | **62 · 3** |
| Değişmez 2t | 15 (tavan 42) | **15** |
| mükerrer madde | 0 şüpheli · 52 ZAYIF | **0 · 52** |
| savaş senkronu | 165/173 | **165/173** |
| SONUÇ | temiz | **temiz** |

`py arac/denetle.py` önce ve sonra çıktıları **bayt bayt aynı** (`diff` boş) — beklenen: yalnız etiket eklendi ve `2t`nin okuduğu `toprak-*` etiketlerine dokunulmadı.

`node denetim/ARAC-A2-BAG-0913.js --hepsi`: önce **551/551 · HATA 0 · UYARI 141** → sonra **551/551 · HATA 0 · UYARI 141** (çıktı satır satır aynı).

## 6 · Emre ne tıklamalı
1. Sağ panel başlığındaki **⛭ Konu süzgeci**.
2. Üstte eski 7 grup ve "Yalnız toprak değişimi" — değişmedi.
3. Altında **KONU BAŞLIKLARI**: örn. **Doğal afetler ve hastalıklar** → 15 madde; altındaki **Deprem** → 4. Birden çok başlık işaretlenirse biri yetiyor.
4. **temizle** başlık seçimini kaldırır. Seçim adres çubuğunda (`?baslik=…`) — bağlantı paylaşılabilir.
5. Soluk (0) başlıklar: Sanayi · Sel · Kıtlık · Volkan — Osmanlı çekirdek kronolojisinde o konuda madde yok (sel için öneri notu: içerik boşluğu, etiket boşluğu değil).

## 7 · Aletler
```
denetim/ARAC-ETK-UYGULA-0913.py   etiket_yama.js konu26+afet → veri (kuru / --uygula) · tuzak sınavı · önce/sonra sayım
denetim/ARAC-ETK-DOGRULA-0913.py  önce/sonra madde JSON'u: alan değişmezliği · önek · izinli küme · tekrar · sayım
```
