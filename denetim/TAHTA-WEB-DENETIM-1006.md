# TAHTA-WEB-DENETIM-1006 — `makine/tahta-web` indirilebilir mi

**Oturum:** TAHTA-WEB-DENETIM-1006 · **tarih:** 6 Ekim 2026 · **evren:** `origin/makine/tahta-web`
uç commit `20c5cea7` (8 commit) · **ölçüm yeri:** `C:/atlas-tahtaweb` (detached worktree;
yazarın `C:/atlas-tahta-web` worktree'sine ve `C:/atlas` ana ağacına DOKUNULMADI).
**Öngörü:** `denetim/TAHTA-WEB-DENETIM-1006-ONGORU.md`, commit `85c7e2dd` — ÖLÇÜMDEN ÖNCE
mühürlendi, sınav dosyalarının içi o an okunmamıştı.

## 🔴 HÜKÜM — **KUSURLU (tek durdurucu kusur, yaması hazır)**

| | |
|---|---|
| Yeniden yazılmalı mı | **HAYIR.** 3.536 satır alet + 76 iddia taşıyan 4 sınav çalışıyor; sıfırdan yazmak mükerrer iş olur. |
| Bugün olduğu gibi indirilebilir mi | **HAYIR.** `kes --uygula`, kesme yollarından biri commitlenmemişken depoyu **YARIM halde** bırakıyor ve `geri --uygula` o hali **kurtarmıyor.** Tahta haberleşme kanalının kendisi olduğu için bu sınıf bir kusur indirilemez. |
| Yama uygulanınca | **İNDİRİLEBİLİR** — tek şartla: aşağıdaki `K3` (makineler arası ulaşılabilirlik) **ÖLÇÜLEMEDİ**; onu ölçen biri olmadan kesme günü seçilmemeli. |

Yama: `denetim/TAHTA-WEB-DENETIM-1006-kesme-kirli-yol.diff` (39 satır,
`git apply --check` **temiz**, `arac/tahta_kesme.py` worktree'de GERİ ALINDI — kurala
uygun olarak alete düzeltme YAZILMADI, hüküm koordinatörde).

---

## 1. DÖRT SINAV — çıkış kodları (cümle değil)

| Sınav | Çıkış | İddia |
|---|---|---|
| `ARAC-TAHTA-SUNUCU-SINAV-1004.py` | **0** | 27 |
| `ARAC-TAHTA-SUNUCU-COKLU-SINAV-1004.py` | **0** | 16 |
| `ARAC-TAHTA-KESME-SINAV-1004.py` | **0** | 21 |
| `ARAC-TAHTA-MAKINELER-SINAV-1004.py` | **0** | 12 |
| | | **76 iddia, 76 OK, 0 ihlal, çıkış 2 (ölçülemedi) YOK** |

⇒ Öngörü **Ö1/Ö2 YANLIŞ ÇIKTI** (bir sınavın 0 dışı vermesini, ÇOKLU'nun kırılgan
olmasını beklemiştim). Dördü de temiz.

## 2. SINAVLAR İKİ YÖNDE Mİ — evet, ama bir eksen HİÇ sorulmuyor

Dördünde de arıza kurup öttüren kol var (adıyla):
`SUNUCU` 4''' (bayat yerel kopya aynı numarayı verir) · 6'' (sunucu açıkken uyarı
BASILMAZ) · 8 (başkasının mesajı bekçiyi uyandırmaz) · 8'''' (muaf ad 3 DEĞİL) ·
`ÇOKLU` Y1t (kayıt silinince "FARKLI TAHTA") · Y1t' ("NUMARA GERİLEDİ") · Y4 (ters yön:
uyarı YOK) · `KESME` K1/K2 (sunucu kapalı/geride → 1) · K4 (tuzak ①nin gerçek olduğu
ayrıca kanıtlanıyor) · K7/K10 (ikinci kes/geri → 1) · `MAKİNELER` M2' · M7 · M8''.
⇒ Öngörü **Ö3 YANLIŞ** ("en az 2 sınav tek yönlü" demiştim).

🔴 **AMA ÖLÇÜLEN BOŞLUK (`K2` kusuru):** `ARAC-TAHTA-KESME-SINAV-1004.py`
`oturumlar/tahta.json` ve `TAHTA.md`ye **yalnız kurulumda, ilk commit'ten önce** yazıyor
(satır 95-96). ⇒ `kes --uygula` sınavda **HER ZAMAN temiz ağaçta** koşuyor. Kirli ağaç
kolu **hiç kurulmamış** — ve kusur tam orada. *"Denetim var ≠ o soruyu soruyor."*

## 3. İLERİ + GERİ + İLERİ — gerçekten koşturuldu, GERÇEK 5.845 mesajla

Harness: `C:/…/scratchpad/OLCUM-1006b.py` (geçici depo, geçici port, `C:/atlas`in
`tahta.json`ının KOPYASI).

```
başlangıç                                  5845 mesaj (en büyük M-5845)
İLERİ-1  kes --uygula --birlestir  → çıkış 0 · izlenmiyor · diskte 5845 · git'te YOK
yazım                              → çıkış 0 · diskte 5846
GERİ     geri --uygula             → çıkış 0 · yeniden izleniyor · diskte 5846 · GIT'TE 5846
yazım                              → çıkış 0 · diskte 5847
İLERİ-2  kes --uygula              → çıkış 1  🔴  (sebep: § 4 K1)
TUR BOYUNCA KAYIP                  → 0   (5845 → 5847, beklenen +2)
```

⇒ **Geri dönüşün KENDİSİ çalışıyor ve hiçbir mesaj kaybolmuyor** (Ö5 TUTTU): `geri`
diskteki GÜNCEL hâli (kesmeden sonra sunucunun yazdığı M-5846 dâhil) git'e geri alıyor.
⇒ Ama turun üçüncü ayağı 1 verdi; sebebi "ikinci koşu" DEĞİL — ilk hipotezim buydu ve
**yanlıştı** (taze depoda birleştirmesiz `kes --uygula` çıkış **0** verdi, `OLCUM-1006b`
A kolu).

## 4. KUSUR K1 — DURDURUCU: kirli kesme yolu depoyu yarım bırakıyor

### Ölçüm — dört kol, aynı kurulum, tek fark dosyanın hâli (`OLCUM-1006c.py`)
| Kol | Hâl | `kes --uygula` |
|---|---|---|
| C | `tahta.json` ve `TAHTA.md` **commitli, temiz** | **0** |
| D | `tahta.json` değişmiş, sahnelenmemiş | **1** |
| E | `tahta.json` değişmiş ve sahnelenmiş | **1** |
| F | `tahta.json` commitli ama `TAHTA.md` kirli | **1** |

### Kök sebep — ölçüldü, tahmin edilmedi (`OLCUM-1006d.py` + git düzeyinde sınav)
`arac/tahta_kesme.py:306`
```python
g("rm", "--cached", "-q", "--ignore-unmatch", "--", *YOLLAR)
```
① `-f` **yok**: index girdisi HEM dosyadan HEM HEAD'den farklıysa git reddeder —
*"has staged content different from both the file and the HEAD (use -f to force removal)"*.
Git düzeyinde iki yönde ölçüldü: `-f` yok → **çıkış 1, girdi index'te KALIR** · `-f` var →
**çıkış 0, girdi düşer, dosya diskte DURUR**.
② `git rm` **ATOMİKtir**: `G` kolu kanıtı — yalnız `TAHTA.md` kirliyken, temiz olan
`tahta.json` **da** index'ten düşmedi.
③ Dönüş kodu **atılıyor** (`g`, `tamam` değil) ⇒ başarısızlık **sessiz**; yalnız
doğrulayıcı yakalıyor — **ama o noktada commit kurulmuş ve dal ilerletilmiştir.**

### Niçin DURDURUCU — yarım hal kurtarılamıyor
```
ilk kes (kirli)          → çıkış 1 · HEAD dosyayı İÇERMİYOR · index İÇERİYOR  (AM/A)
geri --uygula            → çıkış 1 · "zaten İZLENİYOR — geri alınacak kesme yok"
kurtarma                 → yalnız betiğin EKRANA yazdığı `git reset --soft <eski>` (ELLE)
reset + commit + kes     → çıkış 0
```
⇒ Kesme yarıda kalırsa alet kendi kendini toparlamıyor; `main`de HEAD'i tahtayı silmiş
ama index'i tahtayı tutan bir depo kalıyor. Tahta haberleşme kanalının KENDİSİ olduğu
için, kesme gecesi bu hâle düşen bir makine hem tahtasız hem yarım depolu kalır.

### Gerçek riskin ölçümü — bu hâl teorik değil
Bu oturumun KENDİSİ bugün o hâle düştü: `tahta.py yaz` (M-5839) **commit kod=128 ·
push kod=1** verdi ve `oturumlar/tahta.json` + `TAHTA.md` sahnelenmiş-commitlenmemiş
kaldı (başka bir oturum sonradan commitledi; şu an `git status` o iki yolda **temiz**).
⇒ 17+ oturumun aynı index'i paylaştığı bir makinede "kesme anında iki yol da commitli"
GARANTİ DEĞİLDİR; `kes` bunu ön şart olarak **sormuyor**.

### Yama ve yamadan sonraki ölçüm
`denetim/TAHTA-WEB-DENETIM-1006-kesme-kirli-yol.diff` iki şey yapıyor:
**(a)** ön şart ekliyor — kesme yolları commitli değilse `engel`, yani **commit
kurulmadan ÖNCE** çıkış 1 · **(b)** `git rm --cached`e `-f` ekliyor ve dönüş kodunu
BASIYOR (sessiz başarısızlık bitiyor).

Yamalı ölçüm (aynı harness, iki yönde):
```
G (TAHTA.md kirli)  → çıkış 1 · durum DEĞİŞMEDİ ('M TAHTA.md'; AM/A YOK) · commit kurulmadı
I (ikisi kirli)     → çıkış 1 · HEAD dosyayı HÂLÂ İÇERİYOR (yarım hal DOĞMADI)
H (ikisi commitli)  → çıkış 0 · gerileme YOK
```

## 5. TEK ARIZA NOKTASI — düşüş var ve **BEYANLI** (Ö6 yanlış çıktı)

EMRELIC kapalı senaryosu ölçüldü (`OLCUM-1006.py` [4]):
```
sunucu kapalı yazım        → çıkış 0 · yerel tahtaya yazıldı · kuyruğa alındı
ekrana basılan beyan       ⚠️ SUNUCUYA ULAŞILAMADI — YEREL yazıldı, çatışma riski GERİ DÖNDÜ
                           ⚠️ tahta.json git'te İZLENMİYOR — mesaj yalnız BU MAKİNEDE ve kuyrukta
sunucunun kaydı            → KAPALIYKEN DEĞİŞMEDİ
sunucu geri gelince        → kuyruk TESLİM edildi, kuyruk dosyası boşaldı, sunucu 5849
sunucu açıkken sahte alarm → yok (sınav 6'': 20 yazımın 0'ında uyarı)
503 SUNUCU ÇATIŞMASI       → istemci çıkış 4, yerele DÜŞMEZ (sınav M8'')
```
⇒ Düşüş **sessiz değil**, beyanlı; kuyruk teslimi çalışıyor; bölünmeyi derinleştirecek
yerde (kilit başkasında) düşüş bilerek **reddediliyor**. Bu tasarım sağlam.

## 6. 5.845 MESAJIN GÖÇÜ — göç YOK, çünkü GEREKMİYOR (Ö7/Ö8 tuttu)

Kesme `oturumlar/tahta.json`u **diskten silmiyor**, yalnız git'in izlemesinden çıkarıyor;
aynı dosya sunucunun OTORİTE kaydı oluyor. Ölçüldü:
```
sunucunun okuduğu           5845 / diskteki 5845  (eşit)
ilk yazımın numarası        M-5846   ⇒ sayaç max(numara)+1, 1'den BAŞLAMIYOR
tur sonunda                 5847 · kayıp 0
```
⇒ Ayrı bir göç betiği aranmamalı; "göç" sorusunun cevabı **dosya yerinde kalıyor**.
Sunucu numarayı bellekten değil KAYITTAN türetiyor, bu yüzden süreç ölüp kalkınca
numara kaldığı yerden sürüyor (ÇOKLU sınavı Y1'': M-0007).

## 7. BULAMADIKLARIM — `ölçülemedi`, "temiz" değil

- **K3 · MAKİNELER ARASI ULAŞILABİLİRLİK ÖLÇÜLMEDİ.** Bütün ölçümlerim `127.0.0.1`
  üzerinden. EMRELIC'in LAN adresi, güvenlik duvarı, `ag.json`un öteki dört makinede
  (HAVVA · UMIT · KASA · LAB) doğru `tahta_sunucu` taşıyıp taşımadığı **ölçülmedi** —
  bu oturumun elinde o makineler yok. Kesme gününden önce ölçülmesi gereken kalem budur:
  sunucuya ulaşamayan makine, kesmeden sonra tahtayı HİÇ göremez (bugün hiç değilse
  bayat bir kopyasını görüyor).
- `oturumlar/ag.json` bu worktree'de **yok** (gitignore) — sunucunun gerçek ayarı
  okunamadı; ölçümler sınavın kendi geçici jetonuyla yapıldı.
- Kesmeden sonra `main`e push + öteki makinelerin pull düzeni ölçülmedi (koordinatörün
  kalemi; `TOPOLOJI.md` birleştirme düzeni).

## 8. ÖNGÖRÜ KARNESİ (mühür `85c7e2dd`)

| | Öngörü | Sonuç |
|---|---|---|
| Ö1 | 3 sınav 0, biri 0 dışı | ❌ dördü de 0 |
| Ö2 | kırılan ÇOKLU olur | ❌ kırılan yok |
| Ö3 | en az 2 sınav tek yönlü | ❌ dördü de iki yönlü (ama bir eksen hiç sorulmuyor → K2) |
| Ö4 | geri dönüş kodu var, üç ayaklı tur ölçülmemiş | ✅ sınavda ileri+geri var, kirli ağaç kolu yok |
| Ö5 | geri dönüşte mesaj kaybı 0 | ✅ 5845→5847, kayıp 0 |
| Ö6 | düşüş var ama BEYANSIZ | ❌ düşüş BEYANLI, üç satır uyarı |
| Ö7 | ayrı göç betiği yok | ✅ göç gerekmiyor, dosya yerinde kalıyor |
| Ö8 | sayaç max+1'den sürer | ✅ M-5846 |
| Ö9 | kusur 3–5 | ❌ **1 durdurucu + 1 sınav boşluğu + 1 ölçülemedi** |
| Ö10 | hüküm KUSURLU (liste) | ✅ |

📌 Dersim: *"yazarın kendi sınavı geçiyorsa alet kırılgan olmalı"* diye kurulmuş dört
öngörünün dördü de yanlış çıktı; kusur sınavların KALİTESİNDE değil, **sorulmayan tek
soruda** çıktı. Sınavı küçümseyen öngörü, sınavın boşluğunu bulmakta yardımcı olmadı.

## 10. K2 DEVAM GÖREVİ — sınava kirli-ağaç kolu eklendi (6 Ekim, aynı oturum)

Öngörü: `denetim/TAHTA-WEB-DENETIM-1006-ONGORU-K2.md`, commit `56ab4bcc` — kol
yazılmadan önce mühürlendi. Yama: `denetim/TAHTA-WEB-DENETIM-1006-sinav-kirli-kol.diff`
(179 satır; `apply --check` **temiz**, kesme yamasıyla **birlikte de temiz**; sınav
dosyası worktree'de `git checkout` ile geri alındı).

### Kol — dört kol, her biri KENDİ geçici deposu ve portu (K1–K10'un deposuna dokunmaz)
| İddia | Soru |
|---|---|
| K11 · K11' | temiz (ikisi de commitli) → çıkış 0 · iki yol izlenmiyor |
| K12 · K12' | `tahta.json` yalnız çalışma ağacında kirli → çıkış 1 · **yarım hâl doğmadı** |
| K13 · K13' | `tahta.json` sahnelenmiş (index == disk) → çıkış 1 · yarım hâl doğmadı |
| K14 · K14' | yalnız `TAHTA.md` kirli → çıkış 1 · yarım hâl doğmadı (`git rm` ATOMİK) |

**Değişmez (tasarımdan bağımsız):** yarım hâl = *HEAD yolu kaybetmiş **ve** paylaşılan
index onu hâlâ tutuyor.* Kesme ya tamamen olur ya hiç olmaz; arası `geri --uygula` ile
kurtarılamayan hâldir. Asıl kusuru yakalayan iddia budur.

### İKİ YÖNLÜ ÖLÇÜM — aynı sınav, iki alet
```
YAMASIZ alette  → çıkış 1 · 29 iddia · 3 HATA
                  K12' (yarım hâl doğdu: HEAD tutuyor False · index tutuyor True)
                  K14' (aynısı — TAHTA.md kirliyken tahta.json DA düşmedi)
                  K13  (çıkış 0 beklenirken 1 istendi — aşağıdaki nota bak)
YAMALI alette   → çıkış 0 · 29 iddia · 0 HATA   (gerileme yok)
eski K1–K10     → iki koşuda da 21 iddianın 21'i OK
```

### 🔴 DÜRÜSTLÜK NOTU — K13 bir kusur YAKALAMIYOR, bir TASARIM KARARINI sınıyor
Öngörümde (P6) "sahnelenmiş tahta değişikliği kesmede **sessizce kaybolur**" demiştim.
**Çıkış kodu tahminim tuttu (yamasız alet 0 veriyor), çıkarımım YANLIŞTI.** Ölçtüm
(`OLCUM-1006e.py`, yamasız alet, sahnelenmiş kol):
```
kesmeden önce          disk 4 · index 4 · git 3
kes --uygula           çıkış 0
kesmeden sonra         disk 4 · index YOK · git YOK
sunucuya yazım         çıkış 0
yazımdan sonra         disk 5 · index YOK · git YOK
geri --uygula          çıkış 0
geri alındıktan sonra  disk 5 · index 5 · git 5
```
⇒ **Mesaj kaybı YOK.** Kesmeden sonra otorite diskteki dosyadır; git'e girmemiş bir
sahne zaten anlamsızlaşır ve `geri` diskteki güncel hâli geri alır.
⇒ Dolayısıyla yamanın ön şartı **git'in kendi reddetme şartından DAHA GENİŞ**: git
yalnız "içerik hem dosyadan hem HEAD'den farklı" olduğunda reddeder; yama *her türlü*
commitlenmemişlikte reddediyor. Bu **muhafazakâr bir karar**, ölçülmüş bir zarar değil.
Bedeli: canlı makinede sahnelenmiş bir tahta değişikliği kesmeyi gereksiz yere bloke
edebilir (çare tek satır: `git add` + `git commit`, ve `tahta.py` bunu zaten yapıyor —
şu an canlı depoda iki yol **temiz**). Kazancı: yarım hâlin doğabileceği tek yol
kapanıyor ve kural "ölçmesi kolay" oluyor. **Hüküm koordinatörde**; daha dar şart
isteniyorsa yamanın ön şartı git'in şartına indirilebilir, ama o zaman `-f` maddesi
TEK BAŞINA taşıyıcı olur.

### K2 öngörü karnesi (mühür `56ab4bcc`)
| | Öngörü | Sonuç |
|---|---|---|
| P1 | kol 8–12 iddia | ✅ 8 |
| P2 | yamasız alette sınav öter (çıkış 1) | ✅ |
| P3 | yamasız alette 3–5 HATA | ✅ 3 |
| P4 | çalışma ağacı kirli → yarım hâl doğar | ✅ |
| P5 | yalnız `TAHTA.md` kirli → yarım hâl doğar (atomik) | ✅ |
| P6 | sahnelenmiş kol 0 verir **ve sessiz kayıp olur** | 🟡 **YARISI**: 0 verdi (✅), kayıp YOK (❌) |
| P7 | yamalı alette dördü de geçer, çıkış 0 | ✅ 29/29 |
| P8 | eski 21 iddia bozulmaz | ✅ |

## 9. DEĞİŞEN/ÜRETİLEN DOSYALAR
- `denetim/TAHTA-WEB-DENETIM-1006-ONGORU.md` (commit `85c7e2dd`, ölçümden önce)
- `denetim/TAHTA-WEB-DENETIM-1006.md` (bu rapor)
- `denetim/TAHTA-WEB-DENETIM-1006-kesme-kirli-yol.diff` (39 satır, `apply --check` temiz)
- `denetim/TAHTA-WEB-DENETIM-1006-ONGORU-K2.md` (commit `56ab4bcc`, kol yazılmadan önce)
- `denetim/TAHTA-WEB-DENETIM-1006-sinav-kirli-kol.diff` (179 satır; tek başına ve kesme
  yamasıyla **birlikte** `apply --check` temiz)
- `arac/*` ve `denetim/ARAC-TAHTA-KESME-SINAV-1004.py`: **DOKUNULMADI** (ikisi de
  worktree'de denendi, `git checkout` ile geri alındı — dalın hâli bozulmadı)
- `C:/atlas-tahtaweb` detached worktree — **kaldırıldı** (koordinatörün hükmü)

— TAHTA-WEB-DENETIM-1006
