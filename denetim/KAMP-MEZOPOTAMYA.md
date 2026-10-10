# KAMP-MEZOPOTAMYA — K1, birinci tur (MÖ 3500 – MÖ 539)

Görev: YILDIRIM BAYEZIT (M-5914 · `oturumlar/KAMPANYA-DUNYA-1010.md` §2 K1) · KASA · yalnız `denetim/` — **hiçbir `data/*.js`
dosyasına dokunulmadı.** Dosyalar:
- `denetim/KAMP-MEZOPOTAMYA-POLITY.csv` · `-KRONOLOJI.csv` · `-SEHIR.csv`
- bu `.md`

## 1. Sayılar (§5 birinci tur teslimi)
```
POLITY     36 polity (f/t kaynaklı; f bulunamadı 2 · t bulunamadı 4) + 5 "listeye alınmadı" satırı
           (Nippur — polity DEĞİL · Dēr bulunamadı · Kaldu tek polity değil · Suḫu bulunamadı · Hitit 1595 = olay)
KRONOLOJİ  83 madde = 36 × (doğuş + yıkılış) = 72 + 11 büyük olay; harita_degisimi EVET 81 · HAYIR/— 2
ŞEHİR      35 şehir · ilk YAZILI kayıt tarihli 32 · bulunamadı 3 (Borsippa · Nuzi/Gasur · Vaşukanni)
           · koordinat Pleiades 32 · NOKTA YAZILAMAZ 3 (Akkad · Ekallatum · Vaşukanni — konum bilinmiyor/öneri)
```
§5 eşikleri: aile TAM (şartnamedeki 18 adın hepsi + 18 ek: Uruk dönemleri, Gut, Deniz Ülkesi I/II, İsin II, Ḫana,
Ḫanigalbat, Laqê, Elam'ın 5 evresi, Şamşi-Adad krallığı, Mari şakkanakku) ✓ · her polity doğuş + yıkılış ✓ · ≥25 şehir ✓ (35).

## 2. Kronoloji sistemi (§4 kural 4 — HER satırda beyan)
- **Varsayılan: ORTA KRONOLOJİ (OK)** — Hammurabi 1792-1750, Babil'in düşüşü 1595. Kaynaklar açıkça OK diyorsa "OK".
  Demiyorsa ama sayılar OK'ye uyuyorsa "OK (çıkarım)" yazıldı.
- **MÖ 911 sonrası: MUTLAK** (Asur eponim listesi ve Babil kronikleri). Yeni Babil'in başı Jülyen günüyle:
  VIII-26-626 = **23 Kasım 626** (Brinkman).
- **Orta Asur:** Frahm 2017 / ORACC RIAo değerleri (Aššur-uballiṭ I 1353). Met'in eski değerleri (1365) her satırda yanında
  ⑥. İki sistem ±10-12 yıl.
- **Düşük kronoloji** yalnız bir kaynakta paralel: RlA Edzard, Sumu-la-El 1816-1781. Not edildi, kullanılmadı.
- **Sümer Kral Listesi hiçbir yerde dayanak DEĞİL** (§4 kural 5). Hallo: Gut bölümünün değeri "negligible". Kiş I
  hanedanı mitolojik.

## 3. Kaynak seti
- **Reallexikon der Assyriologie (RlA):** BAdW sayfa taramaları, `publikationen.badw.de/de/rla/a/<cilt>.<görüntü>.jpg`;
  her satırda cilt/sayfa.
- **ORACC:** AMGG (Brisch), RIAo (Novotny & Morello), ETCSRI.
- **CDLI** (cdli.earth) eser sayfaları ve transliterasyonları.
- **Encyclopaedia Iranica:** Vallat ELAM i · Hansman ANSHAN · MALIAN · SUSA ii.
- **Met Heilbrunn** (imzalı denemeler) · **Britannica** (yalnız imzalı: Dalley, Renger, Saggs, Frye/von Soden/Edzard, Woolley).
- **Pleiades:** koordinat + sınırlı metin.
- **Akademik:** Ziegler & Otto 2023 (BBVO 30) · Blömer 2023 (Electrum 30) · LMU i3.MesopOil · FU Berlin Fekheriye · T.C.
  Kültür Bakanlığı.
- **Kırmızı çizgi:** blog, World History Encyclopedia, içerik çiftliği KULLANILMADI. Vikipedi yalnız ipucu. Yalnız
  Vikipedi'ye dayanan satırlar `bulunamadı` + "aday" notu (Nuzi, Borsippa, Vaşukanni).
- **Okuma beyanı:** RlA ve CDLI çoğunlukla okuyucular tarafından tam metinden okundu. Met, Britannica ve Iranica canlı
  site 403/429 verdi ⇒ Wayback anlık görüntüleri.
- ⚠️ KASA bu turda tanıkları **örnekleyerek** doğrulamadı (önceki turlarda yaptığım birebir sınama bu teslimde YOK) —
  beyan; ikinci turda ya da yazım öncesi örneklem sınaması önerilir.

## 4. Şehir kuralı — nasıl uygulandı (§3 SEHIR, Emre kuralı)
- `ILK_KAYIT_TARIHI` = **en erken YAZILI kayıt**. Arkeolojik katman (Ubeyd, C14, Pleiades minDate) ayrı sütunda, tarihe
  HİÇ girmedi.
- Kaynak çoğunlukla bir **DÖNEM** veriyor (Uruk IV, Uruk III, ED IIIa…), yıl değil. Tarih alanına dönemin **GEÇ ucu**
  yazıldı (ÜST SINIR: "en geç bu tarihte kayıtta"). Dönem aralığı `not:`ta. Dönem içinden yıl seçmek uydurma olurdu
  (§4 kural 1).
- **RlA, CDLI tarama sonucunu ezer:** Eridu, Adab ED I-II; Umma ED I-II; İsin ED IIIa. CDLI ile bulunan daha geç ilk
  görünümler notta.
- Babil: **1894 HANEDAN başıdır, şehrin ilk kaydı DEĞİL** ⇒ Şar-kali-şarri yıl adı (≤2193). Pleiades'in ifadesi yanlış,
  kullanılmadı.

## 5. `bulunamadı` listesi (§4 kural 6)
- **Polity:**
  - f: Eşnunna (Ur III sonrası, yıl YOK) · Mari şakkanakku.
  - t: Ur I · Mari şakkanakku · Ḫana · Ḫanigalbat.
  - Bütün polity: Dēr · Suḫu.
  - Başkent: Şubat-Enlil (doğrulanmadı) · Deniz Ülkesi I/II · İsin II.
- **Şehir:** Borsippa · Nuzi/Gasur · Vaşukanni (tarih); Akkad · Ekallatum · Vaşukanni (konum). Arkeolojik katman:
  Umma · İsin · Sippar · Babil · Kutha · Terqa · Arrapha.
- **Kaynakta olmayan / doğrulanmamış:** Akkad'ın sonu **2154** (hiçbir kaynakta YOK ⇒ 2193 Şar-kali-şarri). Elam
  1600-1500 arası. Bazi hanedanı ve 1004 sonrası Babil hanedanları.

## 6. Bulgular (kronoloji yazımını etkileyenler)
- **Şartnamenin dört tarihi kaynakla tutmadı:**
  - Akkad sonu 2154 → 2193;
  - Eşnunna sonu 1762 → **1757-1755** (son yıkım);
  - İsin sonu 1794 ↔ c. 1792 ⑥;
  - Babil I başı 1894 ⑥ (Goddeeris: Sumu-abum, Sumu-la-El ile çağdaş).
- **Nippur hiçbir zaman polity değil** (Klein): din merkezi olarak işaretlenmeli, boyanmamalı.
- **Yeni Elam 646'da BİTMEDİ** (Vallat: Neo-Elamite III 646-539?) ⇒ 646 bir olay (HAYIR değil EVET), polity sonu 539?.
- **Gut hegemonyası** kanıtlı başkent yok ⇒ boya değil örtü (isg benzeri).
- **Çok aralıklı polity** (şema boşluğu, önceki vakalara ek): Eski Asur (Şamşi-Adad arası) · Mari Lim (Yasmah-Addu arası)
  · Kiş (tekrar tekrar bağımsız).
- İsin II (1157) ↔ Kassit sonu (1155): ~2 yıl örtüşme ⑥.

## 7. Yarım bırakılan yer (§5 — sınırın ADI)
- **İKİNCİ TUR için:**
  - (i) 1004-626 Babil hanedanları (Bazi, Elam, "Dynasty E");
  - (ii) Arami devletleri (Bit-Adini, Guzana) ve Suḫu;
  - (iii) ikinci-düzey olaylar (başkent değişimleri: Asur → Kalhu → Dur-Şarrukin → Ninova; Tukulti-Ninurta I'in Babil
    işgali 1225);
  - (iv) KASA birebir örneklem sınaması (§3 uyarısı);
  - (v) Vikipedi'ye kalan 3 şehrin birincil tanığı (Ebla ARET numaraları, CTH 51 Beckman HDT 6A, RlA 'Barsip').
- `kimlik_onerisi` sütunu yalnız ÖNERİ: `devletler.js`'te bu kimliklerin hiçbiri yok (MÖ künye 0). Yazım sırası ve kimlik
  hükmü koordinatörün (§6).
