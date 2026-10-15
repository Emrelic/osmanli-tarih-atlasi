# DEVİR — UMIT → HAVVA · 15 Ekim 2026

**Emre'nin kararı (15 Ekim):** UMIT artık kullanılmayacak. UMIT'te yapılmış her şey `main`dedir. Kalan
işler bu belgeyle HAVVA'daki TEK oturuma devredilir; o oturum işleri HAVVA'da dağıtır.
Hazırlayan: UMIT "Koşu hazırlıkları ve durum özeti" oturumu. Ölçümler UMIT'te, `origin/main` üzerinde.

## 0. Durum (ölçüldü)
- KOŞU 25 yayında: `89d1be03` · canlı `r12414` (ufuk 1000–2000, tam inşa, 4 sa 44 dk).
- UMIT'te `main`e inmemiş iş: YOK. Bütün worktree'ler `origin/main`in içinde ya da kaldırıldı.
- Bu belgeyle birlikte `main`e inenler: `denetim/devir-umit-1015/` (KUTU çalışma dosyaları + Devletler park
  dosyası, ~0,8 MB). Sürüm damgası v2 ayrı commit'te (bkz. §7).
- UMIT'te kalan ve devredilMEYEN: kaynak önbellekleri (TDV/Britannica/PDF, ~330 MB) — yeniden indirilebilir.

## 1. Paket maddeleri (kutu) — en büyük iş
- Tek kayıt **kutu** uygulamasıdır. Devir notu: `denetim/KUTU-COZUM-1014.md` (3bde559b7).
- 15 Ekim 06:07 durumu: 812 madde → çözüldü 434 · **koşu bekliyor 167** · tekrar 64 · çözülemedi 48 ·
  zaten doğru 40 · **sırada 58** · Emre kararı 1.
- **İlk iş:** "koşu bekliyor" 167 maddenin verisi KOŞU 25'e girdi. Haritada doğrula ve kutuda kapat
  (çoğu KUTU A–K, H1–H7, P1–P2 partileri).
- **Sırada 58:**
  - 47 motor maddesi: 14'ünün yaması HAZIR (HAVVA'da dar kutuda sınanmalı), 21'inin yaması yok, 12'si
    koşu çıktısının ölçülmesini istiyor. Liste: `denetim/devir-umit-1015/kutu/tur2-M.json` (+ tur3/tur4).
  - **Sınanmamış motor yamaları:** `denetim/devir-umit-1015/kutu/M-BC-SINANMAMIS-1014.diff`
    (B: kapama-dışı bölüştürme · C: çöl girintisi). KOŞU 25'e GİRMEDİ, sınanmadığı için. `uret_petek.py`
    tuzdur ⇒ önce dar kutu sınaması, sonra tam inşa ile.
  - 5 renk maddesi (§4).
  - 6 kaynak işi: İran sınırının güneyi (1914 komisyon tutanakları), Karadeniz'de günsüz işgaller,
    İsviçre kuzey hattı, ayrı makinede yeniden üretilecek bir hat dosyası.
- Çalışma dosyaları: `denetim/devir-umit-1015/kutu/` — `tur2-*.json`, `tur3-H*.json`, `tur4-P*.json`
  (parti başına hüküm/kalan), `hukum-01..08.json`, ajan görev tanımları (`*gorev*.md`, `*ortak*.md`).
- **Ders (UMIT'te ölçüldü):** 10 ajanın paralel `denetle`si makineyi dondurdu. Aynı anda TEK ağır ölçüm.

## 2. Yerleşim yerleri kronolojisi / şehir tarihçesi
- C grubu (eski şehirler: Eski Van, Eski Malatya, Eski Basra, Eski Kandehar) `main`de (eb8bf5ea), KOŞU 25'e
  girmedi (koşudan sonra indi) ⇒ sonraki koşuda haritada.
- Açık: **Şehrizor** (eski şehrin yeri — Gülanber Kalesi koordinatı), **Kuseyr el-Kadîm** (terk yılı, kazı
  raporları). Önerilen: tek Opus araştırma işi.
- Emre kararı: **Kandehar 1281 sahibi** — TDV Kert diyor, atlas Çağatay.
- Sonraki bölgeler (Rusya, Avrupa, Asya, Amerika, Afrika): Emre hangisini seçerse başlatılır.

## 3. Devletler indexi ve kronolojileri
- Bekleyen künye/nokta yok. Koşu sonrası denetimler (`oturumlar/KOSU-ISTEK-SUMER-2000.md` §3):
  Değişmez 8 1946–2000 evreni · 1950/1990 kesitlerinde göz kontrolü (DDR/BRD, Hindistan/Pakistan/Bangladeş,
  Sovyet ardılları) · yeni kimliklerin komşu renk ayrışması.
- Kalan borç: 857 künyede yalnız 1–3 kronoloji maddesi (derinleştirme) · kaynak bulunamayan ~100 nokta ·
  26 nokta-zinciri düzeltmesi PARKTA + 37 künye-hatası notu: `denetim/devir-umit-1015/devletler-nokta-birlesik-1013.json`.
  Taraz/Sayram 1923 kesintisi · Agadez AOF 1959/1960 · La Agüera 1975/76 · Labuan 1946-07-15.

## 4. Renkler (tuz — `renkler.py`; Emre'nin o değişikliğe özel "it"i şart)
- `argun`, `luwu`, `buton`: künye `main`de, RENK YOK; dönemleri (Kandehar 1507–1522, Palopo, Bau-Bau) renk
  gelince yazılacak. `renk_olc --oner argun,luwu,buton` ile, dönemlerle aynı turda.
- Beyansız ortak renk (KOŞU 25 logu): `#d24824` ovambo/suriye-lubnan-mandasi · `#5ad224` dobruca-despotlugu/
  kaheti-kralligi — kasıtlıysa PAYLASIM'a yaz, değilse ayır.
- `ferrara`: 1598 sonrası "Modena ve Reggio Dükalığı (Este)" adı — BOYALAR'da zamana bağlı ad yok, ayrı iş.
- Kartli tâbiliği gösterimi (kutu maddesi).

## 5. Motor / koşu
- HAVVA'da sürenler: 8a sayım kusuru (birim nokta yoğunluğuna bağlı olmasın) · `push_kapisi --kuru`nun
  rebase'i kalıcı bırakması.
- KOŞU 25 logunda "✗ BEKLENMEDİK — İNCELE" (varlık epok) 96 satır (KOŞU 23'te 50) — ölçülmedi.
- Uyarı/borç: yıl-temsilî borç 277 > 151 · 2sk yalnız-taraf kapanış tavan üstü · D7 sorgusuz enklav.
- **Ders (KOŞU 25):** koşu sürerken `main`e inen yerleşim verisi iniş kapısını 8a/8b'de düşürür (bayatlık).
  Ya koşu süresince yerleşim push'ları beklesin ya da bayatlık payı koşudan önce Emre'ye sorulsun.
- Milattan başlatma (Harita tamamlama oturumu): MS 1–999'da sahipli yerleşim yok denecek kadar az
  (MS 1000'de 21). Öneri: önce bu döneme `s:` yazan partiler (Roma, Bizans, Sasani, Abbasi, Çin), ufuk
  sonra. MÖ için `denetim/NEGATIF-YIL-1010-B-v2.diff` bugünkü koda UYMUYOR, yeniden yazılmalı.

## 6. Araçlar
- `uret_duygu`: 407 kayıtta duygu yok; 196'sında `k:` yok. Öneri: `k:` yoksa `tur:` okunsun (küçük eşleme
  tablosu: toprak-kayip→kayip, toprak-kazanc→fetih, hukumdar→taht …), sonra 407 kayıt tek seferde. Emre onayı.
- `denetle.py:1433` Cizre (Cibri) "BAYAT BEYAN": 1508–1515 artık boşluk değil ⇒ `BEYAN_EDILEN_BOSLUK`tan çıkar.
- Worktree/paket oturumunun açık soruları: `TUR_GRUP` · kaynak tavanı · Huşi/Moldova noktaları
  (Botoşani, Dorohoi, Huşi, Kişinev) · terim standardı (0070/H-0010).

## 7. Sürüm damgası v2 (dosya-başı damga)
- 13 Ekim prototipi bugünkü `main`e uyarlandı (DAMGA-V2-1015): etiket damgası içerikten, tek `window.SURUM`
  satırını yalnız push kapısı yazar. Rebase damga çatışması %87 → %3–8 (ölçüm: hafıza `project-damga-tek-satir-olcum`).
- İndiyse: ilk birkaç push'ta kapı çıktısında "damga:" satırını ve canlı sitede `window.SURUM`u geri okuyun.
  İnmediyse dal `worktree-damga-v2` (UMIT) — durumu bu belgenin altındaki EK'te.

## 8. Emre'nin kararını bekleyenler (tek liste)
1. Ceza tavanları (KUTU): 7e İşkodra 1393–96 (+2), Azak/Taganrog 1739 (+3), Lahsa 1547 + Katîf (+5).
2. TDV iç çelişkileri: III. Mehmed vefatı 20/22 Aralık (öneri 20) · Hidiv unvanı 1866/1867 (öneri 1867).
3. Masavva, Dahlak, Arkîko 1281–1517: Habeş mi, beyanlı boşluk mu?
4. Gösterim: `kur:` arayüzde "kuruluş" görünüyor · Maykop/Yekaterinodar şehir mi bölge vekili mi ·
   Karadeniz'de Gregoryen kalmış 5 tarih Jülyen'e dönsün mü.
5. 1830-02 mükerrer maddesi silinsin mi (öneri evet).
6. 0079/H-0005: düz sınırların sebebi (motor sorusu).
7. Kandehar 1281 sahibi (Kert/Çağatay).
8. `uret_duygu` `tur:` eşlemesi.
9. Milattan başlatma sırası (§5).

## 9. HAVVA'daki koordinatör oturuma başlangıç mesajı
> UMIT emekli oldu; devir belgesi `oturumlar/DEVIR-UMIT-HAVVA-1015.md`. Önce `git pull`, belgeyi oku.
> Sıra: ① kutuda "koşu bekliyor" 167 maddeyi KOŞU 25 haritasında doğrula ve kapat ② 14 hazır motor yamasını
> + M-BC-SINANMAMIS'i dar kutuda sına (tek ağır süreç kuralı) ③ §4 renkleri + argun/luwu/buton dönemlerini
> tek tuz paketinde hazırla (push Emre'nin "it"iyle) ④ §8 kararlarını Emre'ye tek listede sor ⑤ sonraki
> koşuyu (KOŞU 26) bunlar inince planla; koşu sürerken yerleşim push'larını beklet.
