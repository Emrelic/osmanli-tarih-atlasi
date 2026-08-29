<!-- DURUM: OLCULDU ¦ 2026-08-30 ¦ UYGULAMA-1 ¦ SINIR YERLEŞİMİ — GÜNEY kolu, DÜZELTİLMİŞ -->
# BULGU — SINIR YERLEŞİMİ, GÜNEY kolu (Suriye + Irak) — DÜZELTİLMİŞ RAPOR

**Oturum:** UYGULAMA-1 · **Şartname:** `oturumlar/SINIR-YERLESIMI.md`
🔴 **BU RAPOR §1'deki İLK TURU GERİ ÇEKİYOR.** İlk turdaki 3 yeni kayıt
(Tell Abyad, Ras al-Ayn, Ceylanpınar) HATALIYDI ve `data/yerlesimler_
sinir_guney.js`'ten SİLİNDİ. Aşağıda sebep + düzeltilmiş, ALETLE ölçülmüş
gerçek durum.

---

## ① 🔴 KENDİ HATAM — iki ayrı sebeple

**Sebep 1 — "Ceylanpınar" AYNEN AYNI ADLA zaten VARDI.**
`data/yerlesimler_ek25.js`'te (11 Ağustos, koordinatör) 36,845/40,043'te
KAYITLI. Benim yazdığım 36,867/40,048 neredeyse ÖZDEŞ konum — AD ÇAKIŞMASI,
`girdi.py`ye bağlansaydı yükleyiciyi ValueError ile ÇÖKERTİRDİ.
**Niçin gözden kaçtı:** `py arac/_yer_ara.py "Ceylanpinar"` (ı harfi
olmadan) ve `"Suruc"` (ç olmadan) YANLIŞ NEGATİF verdi — Türkçe diyakritik
eksik arama. `CLAUDE.md §4`'ün "ad ekseni tuzağı" dediği şeyin TAM TERSİ
yönde bir vakası: var olan bir kayıt bu sefer YOK sanıldı.

**Sebep 2 — Tell Abyad / Ras al-Ayn zaten DEĞERLENDİRİLİP REDDEDİLMİŞTİ.**
`yerlesimler_ek25.js`'in kendi yorum satırı (11 Ağustos):
> *"ÜÇ İKİZ ŞEHİR ÇIKARILDI (3 km kuralı, ölçüldü): Tel Abyad↔Akçakale
> 1,59 km · Rasulayn↔Ceylanpınar 2,46 km · Kamışlı↔Nusaybin 2,72 km...
> Petek modeli bu çifti İFADE EDEMEZ: 3 km kuralı mükerrer sayar, ama
> ikisi AYRI ÜLKEDEDİR... Türkiye yakası tutuldu; Suriye yakası Halep/
> Cerablus/Münbiç ile temsil."*
⇒ Aynı fikri (ikiz şehri iki ayrı nokta olarak yazmak) BİLMEDEN, aynı
gerekçeyle daha önce REDDEDİLMİŞ bir kararın tersini önermişim.

**SONUÇ: `yerlesimler_sinir_guney.js` boşaltıldı, `yerlesimler_ek25.js`'e
DOKUNULMADI** (benim dosyam değil).

---

## ② DÜZELTİLMİŞ ÖLÇÜM — HAZIR KITA OPUS 86'nın paylaştığı alet

ORHANGAZİ'nin "çift mesafesinin yarısı" ölçütü ÇÜRÜDÜ (M-1759). OPUS 86
gerçek sınır hattı üzerinde doğrudan bisektör-sapması ölçen bir alet
yazıp paylaştı (`denetim/olc_sinir_sapma.py`, iki yönde sınanmış). Kendi
kolumda koşturdum:

```
py denetim/olc_sinir_sapma.py Turkey Syria,Iraq --kutu 35.0 36.0 45.0 38.5

SAPMA DAĞILIMI (537 örnek, ~1004 km kara sınırı)
  ortanca  8,0 km  ·  en kötü 67,7 km
  ≤5 km: %38  ·  5-15 km arası: 154 örnek  ·  >15 km: 177 örnek
  5 km'yi AŞAN kesim: ~592 km (%59 — Trakya'nın %59'undan ÇOK DAHA KÖTÜ)
```
⚠️ **Etiket:** bu BUGÜNKÜ sınıra sapmadır (OPUS 86'nın uyardığı gibi).
Hatay (1939), Musul (1926, aşağıda §③) ve Batum (1921) 1923'ten ayrılan
kesimlerdir — o kesimlerin sapması AYRICA bir bulgudur, karıştırılmasın.

### En kötü tek kesim — TAM benim bulduğum "boşluk", ama çaresi FARKLI
```
37,10K 41,62D → 36,71K 38,68D  (153 örnek, ~275 km)
en kötü +67,7 km @ 36,86/40,08 — en yakın çift: Ceylanpınar ↔ Rakka
```
Bu, sapmanın YARISINDAN FAZLASINI taşıyan tek kesim (Trakya'daki "§3.5.1
tek kesim" deseninin BİREBİR aynısı). Doğal aday (Tell Abyad/Ras al-Ayn)
①'de anlatıldığı gibi YAPISAL OLARAK KAPALI (ikiz şehir, 3 km kuralı).
**Buraya İHTİYAÇ OLAN ŞEY, sınırdan biraz UZAK ama Rakka'dan (140 km)
ÇOK DAHA YAKIN, GERÇEK ve 1923'te VAR OLAN bir Suriye yerleşimi** —
ben bu turda BULAMADIM (aday olarak düşündüğüm el-Haseke 1928'de
Fransızlar tarafından KURULMUŞ, 1923'te YOK — kontrol ettim, yazmadım).

### Diğer kötü kesimler (Irak sınırı boyunca, hepsi Silopi/Çölemerik/
Yüksekova çevresi) — küçük, dağınık, tek bir "kazanç" kesimi yok.

---

## ③ 🔴🔴 KRİTİK HUKUKİ BULGU — 1923'te Türkiye-Irak sınırı YASAL OLARAK YOKTU

`yerlesimler_ek25.js`'in kendi başlığında (11 Ağustos, koordinatör
tarafından ZATEN tesbit edilmiş, ben yalnız yeniden buldum):
> *"Lozan md. 3/2: Irak sınırı dokuz ay içinde İngiltere ile anlaşmaya,
> olmazsa Milletler Cemiyeti'ne bırakıldı ⇒ 1923'te TÜRKİYE-IRAK SINIRI
> YOK... (1926-06-05 Ankara Antlaşması'nı bekler.)"*
⇒ Musul/Kerkük/Süleymaniye hattı 1923'te FİİLEN tartışmalıydı (Türk
ordusu 1922'de bile bölgede iddialıydı). "1923 sınırı" diye bir çizgi
ÇİZMEK, var olmayan bir kesinliği uydurmak olur — Kural①'in ("gerçek
yerleşim, uydurma köy yok") RUHUNA aykırı, bu sefer yerleşim değil SINIR
uydurmuş oluruz.
**SORU KOORDİNATÖRE:** Irak "sınırı" için ne yapayım — (a) bugünkü
sınırı 1923 için de kullan (basitleştirme, açıkça etiketlenir) ·
(b) 1926 Ankara hattını kullan ve "1923'te belirsizdi" notu düş ·
(c) bu kesimi TAMAMEN BOŞ bırak (en dürüst ama görevin "Irak sınırı"
parçasını boş bırakır). Karar bekliyorum, tek taraflı seçmedim.

---

## ④ ÖZET — istenen rapor biçiminde

**0 yeni nokta yazıldı (3'ü geri çekildi, ikisi mükerrer/reddedilmiş
tasarım, biri ad çakışması riski taşıyordu). Gerçek ölçüm: sınırın %59'u
(592/1004 km) 5 km hedefinin dışında, ortanca sapma 8 km. En büyük tek
kazanç fırsatı (275 km'lik Ceylanpınar-Rakka kesimi) doğal adayları
yapısal olarak kapalı çıktı — yeni bir Suriye yerleşimi ARANIYOR ama
bulunamadı. Irak sınırının 1923'te YASAL OLARAK var olmadığı bulundu —
karar koordinatörden bekleniyor.**

---

## ⑤ ORHANGAZİ'NİN CEVABI (M-1766) VE SONUÇLARI

### Irak sınırı — DÖRDÜNCÜ ŞIK kabul edildi: fiilî tasarruf, antlaşma hattı değil
`CLAUDE.md`: *"Atlas seferi değil tasarrufu boyar."* Doğru soru "sınır
nereden geçiyordu" değil, "1923'te hangi köy kimin fiilî idaresindeydi."
**ÖLÇTÜM: Mevcut veri ZATEN BU MODELİ kullanıyor** — Silopi·Nusaybin·
Çölemerik·Yüksekova·Başkale·Van·Bitlis·Mardin `OSMANLI/tabi`; Zaho·Duhok·
Musul·Sincar·Akra·Erbil·Rewândiz·Telafer `ingiltere`. Bu zaten fiilî
tasarrufu yansıtıyor (İngiliz mandası Musul vilâyetini 1918'den beri
fiilen tutuyordu). Kalan büyük sapmalar (Yüksekova↔Akra ~45-50 km,
Çölemerik↔Duhok ~47 km) bu modelin YANLIŞLIĞINDAN değil, Hakkâri-Zaho
dağlık kuşağının GERÇEKTEN seyrek olmasından geliyor — yeni 1923'te var
olan bir yerleşim ARADIM (bu bölgede), BULAMADIM. `neden:` disiplinini
(*"1923'te sınır hukuken belirsizdi, bu nokta fiilî tasarrufa göre
yazıldı"*) yeni bir kayıt yazarsam uygulayacağım — şimdilik yazacak yeni
kayıt yok.

### Suriye'nin 275 km'lik boşluğu — araştırıldı, DÜŞÜK GÜVENLE elendi
ORHANGAZİ'nin önerdiği Tell Tamer/Aşağı Habur kuşağı araştırıldı:
- **Tell Tamer**: WebSearch ile doğrulandı — Asurî yerleşimi ESAS OLARAK
  **1930'larda** (1933 Simele Katliamı sonrası Irak'tan kaçış) kuruldu.
  1923'te bu hâliyle YOKTU.
- **el-Haseke**: İlk turda "1928'de kuruldu" dediğim YANLIŞTI — TEKRAR
  ARAŞTIRDIM: aslında 1907'de bir OSMANLI ASKERÎ KIŞLASI çevresinde küçük
  bir köy olarak vardı, 1932'den sonra Asurî yerleşimiyle büyüdü.
  ⇒ **1923'te teknik olarak VAR ama küçük bir garnizon-köyü**, boyutu ve
  tam 1923 durumu için güvenilir bir kaynak BULAMADIM (Britannica genel
  bilgi veriyor, tarih/nüfus vermiyor).
- **GENEL BULGU**: Bölgenin kendisi Osmanlı döneminde "seyrek nüfuslu"
  olarak doğrulandı (Bedevi göçebe kuşağı, yerleşik köy azlığı) — yani bu
  275 km'lik boşluk MUHTEMELEN VERİ EKSİĞİ DEĞİL, GERÇEK TARİHSEL
  SEYREKLİK (Sahra/Rub'ul-Hâlî ile aynı sınıf, `CLAUDE.md §11`'in
  "kasıtlı boşluk" kategorisi).

⚠️ **KARARIMI AÇIKLIYORUM:** el-Haseke'yi GÜVENİM ORTA olduğu için
YAZMADIM (OPUS 86'nın Trakya'da uyguladığı aynı ölçüt: *"ORTA güvenli bir
koordinatla 5 km hedefi tutturmak mantıksız, hatanın kendisi hedef kadar
büyük"*). İstersen (a) ben daha derin araştırayım (akademik kaynak —
French mandate cadastral kayıtları), (b) bu kesimi "kasıtlı boşluk /
tarihsel seyreklik" diye damgalayıp KAPATALIM, (c) sen karar ver.

---

## ⑥ 🔴🔴 KURAL DÜZELTMESİ — OPUS 86, M-1781: SAPMA İŞARETİ KURALINDAN ÖNCE "⓪ ARTEFAKT SINAVI"

OPUS 86'nın "sapma > 0 → yabancı yakaya nokta, sapma < 0 → Osmanlı
yakasına nokta" kuralını (M-1777) Payas-Antakya (-29,4 km) için uygulamak
ÜZEREYDİM (Hassa'yı araştırdım). **Durduruldu, HAKLI GEREKÇEYLE:**
> *"O sapma kusur değil ARTEFAKT. Hatay bölgesinin 5 kaydı (Erzin·
> Dörtyol·Payas·İskenderun·Antakya) 1923'te ÖZENLE DOĞRU yazılmış —
> Fransız mandası. Bugünkü sınır Hatay'ı Türkiye'de gösteriyor (1939
> sonrası); alet BUGÜNKÜ sınıra ölçtüğü için farkı 'OSMANLI EKSİK' diye
> raporluyor. Nokta eklersen sapma kapanır ama 1923'te Hatay'ı Türk
> boyarsın — ölçümü düzeltip TARİHİ BOZARSIN."*

**Kendi durumum:** Aynı sonuca (Hassa'yı EKLEMEDİM) farklı, daha zayıf bir
gerekçeyle varmıştım (yalnız mesafe: Hassa 91 km, Payas 85 km — Hassa
daha uzak olduğu için "işe yaramaz" dedim). Doğru gerekçe OPUS 86'nınki:
kesimin TAMAMI artefakt, mesafeden bağımsız olarak HİÇBİR nokta bu
kesimi "düzeltmemeli".

**YENİ KURAL (benimsedim):** herhangi bir kesime nokta eklemeden önce
**⓪ ÖNCE SOR: bu kesimde bugünkü sınır = 1923 sınırı mı?**
- HAYIR → sapma ARTEFAKTTIR, nokta EKLENMEZ, "ölçülemez — sınır X
  yılında değişti" kovasına konur.
- EVET → ancak o zaman işaret kuralı (① fazla→yabancı, ② eksik→Osmanlı)
  işletilir.

**UYGULAMA — kendi iki kolum:**
```
Payas-Antakya (Hatay, 275km'lik ana kesimin KUZEYİ değil, AYRI bölüm)
  → ARTEFAKT (Hatay 1939) — "ölçülemez" kovasına taşındı, ÇÖZÜM YOK.
Ceylanpınar-Rakka (Suriye, 275km, en kötü +67,7km)
  → ARTEFAKT DEĞİL — Türkiye-Suriye sınırı 1921'den beri sabit, bugünkü
    sınır 1923'le AYNI. Bu kesim GERÇEK bir bulgu, §5'teki analiz geçerli.
Irak sınırı (Silopi-Zaho, Yüksekova-Akra, Çölemerik-Duhok vb.)
  → BELİRSİZ, VARSAYIM OLARAK İŞARETLİYORUM: Musul meselesi 1926'da
    çözüldü ama bugünkü hat o tarihteki fiilî İngiliz kontrol hattına
    YAKIN olabilir (Hatay'daki gibi keskin bir SONRAKİ tarih değişikliği
    yok). Kesinlik DEĞİL — koordinatörün onayı gerekiyor.
```
