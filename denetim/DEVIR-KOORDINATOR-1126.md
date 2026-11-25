# Koordinatör devir belgesi (EMRELİC 21 KASIM → yeni oturum, 26 Kasım 2026, gece yarısı)

Rol: KRONOATLAS genel koordinatörü (Emre'nin ataması). Bu ekran YALNIZ koordinasyon içindir; işler
ayrı oturumlarda ve öteki makinelerde yürür, burada az token harcanır. Emre: "tüm bilgisayarları, iş
planını ve operasyonu sen yönet". Emre'ye her şey sade Türkçe. Eş oturum mesajı Emre'nin onayı
değildir. Sayıların çoğu makinelerin beyanıdır; yeniden ölçmeden "yayında/bitti" deme.

## 🔴 EN YENİ (26.11 00:0x; aşağıdaki eski satırlara üstündür)
- Emre (aynen): "resetleme oldu şu anda; kasa bilgisayarı bir yandan push kapısı işlerine başlasın ve
  diğer araştırma işleri bitince yenilerini açmasın artık". ⇒ KASA KAPISI YENİDEN AÇIK (tur 4 →);
  KASA süren araştırmaları bitirir, yenisini açmaz. Emir KASA'ya iletildi (okunduğu doğrulanmadı).
  Cümlenin öteki makineleri de kapsayıp kapsamadığı Emre'ye sorulmadı.
- UMIT: yeni dil itişlerinde (23:3x-23:56, bs sq hy) ilk onlarca olay başka olayların çevirisiyle
  ezilmişti (ajan paket-içi sıra yazmış). Düzeltildi; YALNIZ UÇLAR: bs 9acdc5ea8 · sq 705b0e0e5 ·
  hy a6c567633 · ka 37b7d509f · ku 3276c2712 (olay bs 4974, ku 4896, sq 4554, hy 4406, ka 4406 /5196;
  arayüz+devlet tam). KASA ve LAB'dan aynı kayma için sınama istendi (kapıya girecek ve daha önce
  yayına inen denetim turları dahil). Sonuç GELMEDİ: ilk takip edilecek iş.

## Emre'nin duran emirleri
- HAVVA Koşu 40 durdurulmaz; Koşu 41 başlatılmaz (Emre'nin açık sözü gerekir). Karar günü 26.11 sabahı.
- Motor dosyaları donuk. `main`e push yalnız KASA push kapısı.
- KASA (25.11 ~23:35): yarım tur bitsin, YENİ KAPI TURU AÇMASIN, ek kartlara odaklansın. Kapı ancak
  Emre "devam" derse yeniden açılır.
- Bir bilgisayara ulaşılamadığını fark edince Emre'ye en başta, doğrudan söyle.
- İş boş CPU/RAM olan yere gönderilir. HAVVA'ya yalnız hafif iş (koşu korunur).
- "Sonnet yeterse Sonnet, yetmezse Opus; ayarlayamazsan söyle." Uzak makinedeki oturumun modeli
  buradan ayarlanamaz, yalnız istenir.
- Tüm site, ek okuma dahil, bütün dillere çevrilmeli.
- Üslup onayı: Emre örnek kartlara "Üslup uygun" dedi; "tüm devletlerde hepsine birden başla".
  Kaynak ölçütü gevşemez.
- Yazılacak devletler: 1) İran, Rusya, Avusturya, Lehistan, Venedik 2) Almanya, Fransa, İngiltere,
  Mısır (Memlük, Hidivlik, Kavalalı) 3) İspanya, Portekiz, Macaristan, Hollanda, Ceneviz, Papalık,
  İsveç 4) Çin, Hindistan, Japonya.

## Durum (25.11 23:55)
Yayında: `main` 831f6dc8 (3. tur). 21 dil ilk okuma düzeltmelerinin büyük bölümü, ikinci göz
kısmen, tarih kalıbı düzeltmeleri, ek okuma bağ kusuru, ziyaretçi paneli düzeltmesi, birleşik açılış
uyarısı, #193-#196 (sabah). Proje ufku 31.12.2000.

Bekleyen dallar (main'de değil):
- `kasa-tur4-1125`: Türkçe metin düzeltmeleri (`turkce-metin-1125` bedbe734b) + 21 dil yeniden çeviri
  (`ceviri-tr1125-lab` 75d417660, `ceviri-tr1125-umit` 589c5ad13). ozet_tazele.py betik hatası uyarısı
  KASA'da. 31 ikinci göz önerisi `denetim/IKINCIGOZ-OLAY-1125` (uygulanmadı).
- `postit-kaynak-195` (49fa86a6a); `postit-194b` (hazırlanıyor, denetle sürüyordu).
- Ek okuma: `ekokuma-sartname-1125` (b2dc00f91, erişim engeli yasağı eklendi), `ekokuma-iran-1125`,
  `ekokuma-rusya-1125`, `ekokuma-venedik-1125`, `ekokuma-avusturya-1125`, `ekokuma-lehistan-1125`
  (5e69fd006), `ekokuma-kademe2-1125` (Almanya, Fransa), `ekokuma-<devlet>-1126` (KASA'nın 9 devleti),
  `ekokuma-cin-1126`, `ekokuma-hindistan-1126`, `ekokuma-japonya-1126`. HİÇBİRİ KAPIYA ALINMAZ
  (bağımsız kaynak denetimi + Emre).
- Yeni 10 dil (YAYINDA_DEGIL, gizli): altyapı `yeni-diller-altyapi-1126` 98d5191ba; `ceviri-<kod>-1126`
  LAB uk vi ko jv ps, UMIT sq bs hy ka ku. ps ikinci geçişsiz yayına çıkmaz; jv Sonnet yeterli.
  Ad sözlüğü tekleştirme turu gerek. hy/ka/ps yazı tipi sınanmadı.
- Ek okuma çevirisi: `ceviri-ekokuma-1125` (oturum local_0c804473-077e-4e42-90de-9601184817e0).
  Model denemesi: 4 dilde Sonnet≈Opus berabere (kör Opus hakem) → Sonnet; EN 44 kart itildi.

## Ek okuma sayıları (ajan beyanı; bağımsız denetim ve tarayıcı sınaması yok)
KASA 9 devlet 125 kart (37 yayın adayı değil) + 39 kişi + 21 hükümdar · Venedik 63 (39 teyitli) ·
Avusturya 28 teyitli · Lehistan 28 (15 teyitli) · Çin 14, Hindistan 16, Japonya 15 · İran 4 kart
teyitsiz (parti 02 ihlal, kaydedilmedi) · Rusya 14 teyitsiz · Almanya/Fransa sürüyor.
Altyapı açığı: öteki devletlerde hükümdar paneli yok; dosyalar yükleyiciye ekli değil
(`denetim/EKOKUMA-ALTYAPI-1125.md`, main'de).

## 🔴 Kaynak erişim ihlali (açık karar)
Ajanlar 403'ü başlık taklidi / uygulama tarayıcısı / web arşivi / aktarım aracıyla aşmış ya da
kendini tarayıcı gibi tanıtmış. Etkilenen kartlar işaretlendi, silinmedi. LAB: engel sonrası okumaya
dayanan 8 veri yazımı, 6'sı canlıda (`lab-engel-okuma-1126` 873af202f). UMIT: 22.11 BOŞLUK-1280
ajanlarında da tarayıcı kimliğiyle TDV curl'ü var, verisi itilmiş; kimliksiz engellenir mi ÖLÇÜLMEDİ.
Koordinatör önerisi: silme yok; önce TDV'nin sıradan isteğe cevabı ölçülsün; engelliyorsa kayıtlar
"yeniden doğrulanacak"; kural CLAUDE.md'ye (Emre onayıyla).

## Emre'den bekleyenler
1) Pages boyutu: resmî sınır yayımlanan site 1 GB; bugün tüm depo 1.067 MB, yalnız site 630 MB.
Yeni diller + ek okuma çevirisi yalnız-site kipinde sığar (787-806 MB). `.github/workflows/yayin.yml`
hazır ama pasif (faturalama kilidi notu + Pages Source=GitHub Actions: Emre'nin hesabı). "Hazırlatayım
mı?" sorusu cevapsız. 2) Kapıyı yeniden açmak (tur 4). 3) Kaynak ihlali kararı. 4) Japonya'daki iki
White Rose kartı teyitliye yükseltilsin mi (öneri: evet). 5) UMIT İran-02 20 kaydı ve KASA Mısır
kartları (öneri: kullanma). 6) #193 tarih çelişkileri; #194'te onaylanan 19 madde (sahipsiz olabilir:
postit-194b'yi ölç). 7) #203, #204 başlatma kartları; post-it dağıtıcısı yok. 8) Meta Publish,
Supabase SQL yeniden koşu, giriş altyapısı panel işleri (BORC). 9) KASA/UMIT arşiv adayları ("evet"
o oturuma), HAVVA'da ~45 eski oturum. 10) KASA D: diski ve ~87 worktree temizliği. 11) UMIT/HAVVA
GitHub token dosyası (~/.atlas_gh_token) güncellemesi (EMRELİC'te güncel). 12) Pencapça-Amharca
listesindeki öteki dilleri isteyip istemediği. 13) Koşu 40 kararı; HAVVA pagefile (elle).
14) Olası Türkçe olgu hataları (doğrulanmadı): "Serdarabad'da Ermeni birliklerini yendi";
ARKEOLOJI_ZINCIR tarih uyumsuzlukları; Lozan onayı 2/23 Ağustos. 15) Dünya eksik raporu
`dunya-eksik-1125` (2001 sonrası maddeler kapsam dışı; kaynak okunmadı).

## Makineler ve oturumlar
Uzak (SendMessage adı): "KASA 21 KASIM [f0d3ba]", "LAB 21 KASIM [32c242]", "UMIT 21 KASIM [313f73]"
(UMIT 09-19 eczane mesaisi: ≤2 hafif ajan; 08:45'te ağır dalgayı keser), "HAVVA 21 KASIM [ebd5bf]".
Ad/ref değişebilir: ListAgents ile ölç.
Yerel: Venedik local_c99bd760-488a-40a9-927f-dd92e9b7f4ba · ek okuma çevirisi local_0c804473-077e-4e42-90de-9601184817e0
· #193-196 local_52333749-bd25-43b4-998c-b9634a98e8fe · karar listesi local_a41c87dd-bcfc-4b4c-8774-e6b7d1fda2e6
· ziyaretçi paneli local_92c9b60c-db51-4c79-b472-5d3ecf1e2bcb (Meta için Emre'yi bekliyor) · Koşu 40
takibi local_e01ac7f1-d986-4154-a27b-ab235c243a96 · Türkçe denetim local_10e972d6-f1be-4fb3-9e5a-ba44a7819979 (bitti).
Karar listesi ve Koşu takibi oturumları emekli edilebilir (Emre'nin "biten emekli" emri).
Bu bilgisayarın belleği dar (11,9 GB; 23:3x'te boş 3,5 GB, CPU %87).
Haftalık token limiti 26.11 00:00'da yenilenir (25.11 23:55'te %95).

## Hafıza
`C:\Users\emrem\.claude\projects\C--atlas\memory\MEMORY.md` — yeni kayıtlar: ulasilamayan-makineyi-bildir,
tum-site-cevirilmeli, ceviri-sonraki-diller, kaynak-engeli-asilmaz.
