# PLAN — 1923 DÜNYA SINIRLARI: ölçüm, kusur sınıfları, oturum bölmesi

> **1.MURAT (Oturum 0) · 6 Eylül 2026.** Emre'nin isteği:
> *"teker teker tüm sınırları belirle, ülkeler ve aralarındaki sınırları,
> ve bu yöntemle düzelt. Gerekirse yeni oturum görevlendir."*
> Kesit: `1923-10-28`. **Hiçbir veri yazılmadı** (koşu 7b sürüyor).

---

## ① ÖLÇÜLEN KAPSAM

```
sahnedeki kimlik   106
noktalı yerleşim  3630
SINIR ÇİFTİ        233   (iki kimliğin en yakın noktaları ≤ 300 km)
   bölge İÇİ       216   (%93)
   bölge ARASI      17   (%7 — oturumlar arası protokol ister)
```
🟢 **%93 bölge içinde kalıyor ⇒ bölge bazlı bölme temiz.**
Alet: `denetim/ARAC-1923-KESIT-0906.js` · `ARAC-1923-TRIYAJ-0906.js`.

⚠️ *"Sınır çifti"* burada **kaba** ölçülüyor: iki kimliğin en yakın iki
noktası. Bu bir **Voronoi komşuluğu değildir** — gerçek komşuluk
`uret_petek`ten çıkar. Amaç öncelik sıralamak, geometri kurmak değil.

---

## ② KUSUR SINIFLARI — ölçüldü, gözle değil

### 🔴 A · HAYALET — künye 1923'ten ÖNCE bitiyor, veri kullanmaya devam
**7 kimlik · 20 nokta**
```
piombino     1 nokta   künye t: 1548-01-01   375,8 yıl FAZLA   [italya]
meysur       3         1799-05-04            124,5             [güney-asya]
maratha      5         1818-06-03            105,4             [güney-asya]
romanya      2         1881-03-26             42,6             [balkanlar]
adal         1         1887-01-06             36,8             [doğu-afrika]
rusya        6         1917-03-15              6,6             [doğu-avrupa]
karadag      2         1918-11-26              4,9             [balkanlar]
```
📌 `meysur` ve `maratha` `CLAUDE.md §3.5.0`da **ARDİL** sınıfı diye kayıtlı
ve orada *"ardıl künye var, o konvansiyona KATILMAMIŞ"* diye çözülmüş —
yani bu ikisi **araştırma değil uygulama** işi.
🔴 `piombino` 375 yıl: ölçek bir **öncel**dir, hüküm değil (`§3.5.0`) —
ölçülecek.

### 🔴 B · KÜNYESİZ — veride kullanılıyor, kendi `id` künyesi yok
**4 kimlik · 25 nokta** — ve **dördünün de hedef künyesi ZATEN VAR**
```
hicaz     13 nokta  →  hicaz-kralligi
yemen      9        →  yemen-zeydi
avusturya  2        →  habsburg
cimma      1        →  cimma-sultanligi
```
🟢 En ucuz sınıf: yeni künye de yeni renk de gerekmiyor, veri var olan
kimliğe çevriliyor. ⚠️ Ama `avusturya → habsburg` **şüpheli**: 1923'te
Habsburg yok, Avusturya **Cumhuriyeti** var (künyesi ölçülmedi).

### 🔴 C · OSMANLI 1923-10-28'de hâlâ sahnede
**12 doğrudan + 36 tâbi = 48 nokta.** Saltanat 1 Kasım 1922'de kaldırıldı.
⇒ Bekleyen TBMM yaması (18 çakışmanın içinde). **Araştırma işi değil.**

### 🟡 D · SÖMÜRGE METROPOL KİMLİĞİYLE BOYANIYOR
Bugün düzeltilen Suriye/Irak/Filistin vakasının sınıfı. En büyük kalem.
```
ingiltere          420 nokta   bölge dışı 383  (%91)
fransa-cumhuriyet  278         191             (%69)
italya             127          84             (%66)
belcika             59          50             (%85)
portekiz            60          50             (%83)
```
🔴 **AMA ALETİM FAZLA SAYIYOR ve bunu raporluyorum:** aynı ölçüt
`sovyet-rusya`yı (%50 dışı = **Sibirya**) ve `yunanistan`ı (%41 = **Ege
adaları**) da işaretledi — ikisi de sömürge değil. ⇒ D sınıfı bir
**aday listesidir, kusur listesi değil**; her kimlik **elle vetlenecek.**
📌 `§11`: *bir coğrafî kutu bir ÖN ELEMEDİR, bir SINIFLANDIRMA DEĞİL.*

---

## ③ YÖNTEM — Bulgaristan/Suriye'de işleyen yedi adım

Bu sıra bugün **iki vakada** sınandı ve ikisinde de kusur buldu.
```
① KESİT       bölgenin 1923-10-28 sahiplik listesini çıkar (ARAC-1923-KESIT)
② KAYNAK      TDV önce (§4); dar slug tutmazsa KAPSAYICI maddeyi dene;
              gövdeyi KESMEDEN oku; cümlenin NEYİ tarihlediğini oku (§4⑧)
③ GÜN         kaynağın desteklediği EN KABA güvenli düzey.
              Komşusunun kullandığı gün, kendi seçtiğinden DAYANAKLIDIR.
④ ÖN KOŞUL    künye VAR MI · penceresi TUTUYOR MU · RENGİ VAR MI
              (`py denetim/ARAC-KIMLIK-BOYA-0906.py`)
⑤ 2s KAPISI   seçilen günün ÇEKİRDEKTE (`data/olaylar*.js`) maddesi var mı
              ve KONUSU İLGİLİ Mİ? Kuyrukta olması YETMEZ.
              İlgili değilse çekirdek maddesi de yazılacak (§10).
⑥ YAMA        ELLE YAZMA — canlı veriden ÜRET. Kaydın `s:` dizisinin
              TAMAMI okunur (Silistre'de elle yazım 5 dönem siliyordu).
⑦ SINAV       `d:+v:+s:` BİRLİKTE: zincir kesintisiz mi, künye penceresi
              tutuyor mu, beklenen sayı çıktı mı. C13: geçme + ateşleme.
```
🔴 **VE SEKİZİNCİ BİR KAPI VAR — bugün ölçüldü:** yeni bir kimlik sahneye
çıkınca **yeni renk çiftleri doğar** ve bunlar bugün görünmez.
`OLCUM-MANDA-RENK-CAKISMA-0906.md`: üç manda kimliği sahneye çıkınca
**ΔE 1,09'luk bir çift** doğuyor (`irak-kralligi` ↔ `misir-kralligi`).
⇒ **Her bölge yaması, uygulanmadan önce renk ölçümünden geçer.**

---

## ④ OTURUM BÖLMESİ — ölçülmüş yüke göre

Bölme kriteri `§7` gereği **dosyadır**: her oturum yalnız
`denetim/yer_yama_<bolge>_1923.js` ve `denetim/<BOLGE>-*.md` yazar.

| # | oturum | bölgeler | nokta | kimlik | öncelik |
|---|---|---|---|---|---|
| 1 | **ORTADOĞU** | Ortadoğu-İran 450 · Kuzey Afrika 182 | **632** | 26 | 🔴 1 |
| 2 | **BALKAN-DOĞU AVRUPA** | Balkanlar 389 · Doğu Avrupa 206 | **595** | 26 | 🔴 2 |
| 3 | **ASYA** | Doğu-GD Asya 332 · Güney-Orta Asya 250 | **582** | 42 | 🔴 3 |
| 4 | **AFRİKA** | Sahra altı 501 | **501** | 12 | 🟡 4 |
| 5 | **AVRUPA** | Batı-Orta 132 · Kuzey 159 · İberya 103 · İtalya 63 | **457** | 35 | 🟡 5 |
| 6 | **AMERİKA-OKYANUSYA** | K.Amerika 463 · G-O Amerika 152 · Okyanusya 115 | **730** | 30 | ⚪ 6 |

⚪ **Volga-Ural-Sibirya (133 nokta) HİÇBİR OTURUMA VERİLMİYOR:** tek
kimlik (`sovyet-rusya`), yani **sıfır sınır çifti.** İş yok.

**Öncelik gerekçesi (ölçüm, sezgi değil):** ①-③ hem kusur yoğunluğu hem
kaynak zenginliği en yüksek olan bölgeler — A sınıfının 7 kimliğinin
**6'sı**, B sınıfının 4'ünün **3'ü**, C sınıfının 48 noktasının **tamamı**
oralarda. ④-⑥ ağırlıklı olarak D sınıfı (sömürge) ve sınırları durağan.

🟢 **① yarı yarıya BİTMİŞ durumda teslim edilir:** manda paketi
(`yer_yama_manda_0906.js` 58 nokta + `yer_yama_silistre_0906.js` +
`KRONOLOJI-MANDA-0906.json`) hazır ve sınavdan geçti.

### 🔴 BÖLGE-ARASI 17 ÇİFT — protokol
Bir sınırın **iki ucu iki ayrı oturumda** ise, `§3.5.1` gereği
*"bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür"*. Kural:
```
· çift, EN YAKIN NOKTASI hangi bölgedeyse ORAYA ait
· öteki oturum tahtadan HABERDAR EDİLİR (§7.1③ yatay mesaj SERBEST)
· iki oturum ANLAŞAMAZSA hüküm koordinatörde
```
En kritik dördü: `fransa ↔ almanya` (37 km) · `macaristan ↔ avusturya`
(60) · `romanya ↔ cekoslovakya` (73) · `italya ↔ misir` (128).

---

## ⑤ SIRA VE KAPILAR

```
ŞİMDİ (koşu sürerken)   oturumlar ÖLÇER ve denetim/ altına YAMA TASLAĞI yazar
                        — data/ DONUK, hiçbir şey uygulanmaz
KOŞU BİTİNCE ①          denetle_yayin → yayın → ikinci geçiş ölçümü
KOŞU BİTİNCE ②          renk çözümü (manda çakışması + bölge yamaları)
KOŞU BİTİNCE ③          yamalar SIRAYLA uygulanır, her birinden sonra
                        denetle.py + renk_olc.py
```
🔴 Sıra ters çevrilirse `denetle.py` renk çakışmasını **görmez** —
veri denetimleri renge bakmaz.

---

## ⑥ 🔴 EMRE'DEN İSTENEN — oturumu ben AÇAMAM

Sistem oturum açamaz, model seçemez (`F18`). Açılması gereken:
```
ÖNCE ÜÇÜ (cephane elverirse ikisi):
   ORTADOĞU              Opus    dizin: proje kökü
   BALKAN-DOĞU AVRUPA    Opus
   ASYA                  Opus
SONRAKİ DALGA:
   AFRİKA · AVRUPA · AMERİKA-OKYANUSYA
```
⚠️ `CLAUDE.md §7`: aynı anda **en çok 3 eşzamanlı** (koordinatör + bir
güçlü + bir orta). Altısını birden açmak ölçümü de bozar (`§7` kaynak
sahipliği: iki ağır koşu birbirini yavaşlatır).
🟡 **Cephane ölçülmedi** — haftalık limitin ne kadarı dolu, bilmiyorum.
Üçten fazlası isteniyorsa önce o sorulmalı (`G12`).

Şartnameler açılışta yazılacak (`oturumlar/<AD>.md`, `F9` beş alan +
yedi başlık + haberleşme bloğu).


---

## GÖREVLENDİRME — 6 Eylül 2026, hazır kıta ÖLÇÜLDÜ

🔴 **Bu planın ilk hâli "OTURUMLAR hepsi ÖLÜ" varsayımıyla yazıldı — ve o
varsayım TAŞINMIŞTI, ölçülmemişti.** Emre sordu (*"hiç yok mu hazırda 3
oturum"*), `list_sessions` koşuldu ve atlas dizininde **20'den fazla
oturum** çıktı — dördü Opus.

📌 `§7.1`in kendi dersi: *"duran bir oturum ÖLÜ DEĞİLDİR, cevabı sıkışmış
olabilir"* ve *"ölü ilan etmeden ÖNCE gerçekten çalışıp çalışmadığına
KENDİN BAK."* Aynı hata, bu sefer koordinatörde — ve `list_sessions` on
saniyelik bir işti.

```
NEHİR SÜRTÜNME       Opus · 6 Eyl 01:06  ->  ORTADOĞU              ✅ atandı
KÜRE GÖRÜNÜM         Opus · 6 Eyl 01:23  ->  ASYA                  ✅ atandı
KRONOLOJİ BOŞ KÜNYE  Opus · 5 Eyl 11:10  ->  BALKAN-DOĞU AVRUPA    ✅ atandı
Dünya-Afrika-0903    Opus · 6 Eyl 15:09  ->  AFRİKA           ⚪ SIRADA
```

**Atama ölçütü ALAN UYUMU, kıdem değil:**
```
NEHİR SÜRTÜNME       Barka · Fizan · Hafsî · Harput ölçtü
                     ⇒ Ortadoğu-K.Afrika coğrafyasının TA KENDİSİ
KÜRE GÖRÜNÜM         himaye ve ardıl künye modelini ölçtü
                     ⇒ Hindistan prenslikleri AYNI SINIF
KRONOLOJİ BOŞ KÜNYE  künye işi yaptı
                     ⇒ Balkan listesi künye ağırlıklı (rusya · romanya ·
                       karadag hayaletleri · iki âtıl künye)
```

⚠️ **`§7` GERİLİMİ, AÇIKÇA:** üç işçi + koordinatör = **4 eşzamanlı**, ve
kural *"en çok 3"* diyor. Emre açıkça üç istedi; kural bir tavsiye, istek
bir karar. Ama **cephane ÖLÇÜLMEDİ** — haftalık limitin ne kadarı dolu
bilinmiyor (`G12`).
⇒ Limit sıkışırsa ya da bir oturum yavaşlarsa ilk durdurulacak olan
**ASYA** (öncelik 3).

⚠️ Ve ikinci bir bilinmez: bu üç oturumun **bağlamı dolu.** Dolu bağlama
atılan her mesaj bağlamın tamamını yeniden taşır — canlandırma taze
kıtadan **pahalı olabilir.** Ölçülmedi; ilk cevaplarının hızı gösterecek.
