# BUDAMA — 0907 · taban bağlamın ölçümü

| alan | değer |
|---|---|
| **AD** | BUDAMA-0907 |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **ClaudEmre** | çalıştırma |

---

## ① İŞİN ÖZÜ — Emre'nin bugün sorduğu soru

Emre bugün şunu sordu:
> *"Compact yapınca sanki %30 gibi gene şişkin seviyeye iniyor. Bunun
> sebebi nedir — yanlış zamanda mı compact yapıyoruz, yoksa taban
> bağlamımızı sadeleştirmek mi gerekiyor?"*

🟢 **ÖLÇTÜM (kaba, `wc -c` BAYT üzerinden — karakter değil):**
```
CLAUDE.md          7.352 satır   417.151 bayt   ~104.000 token
OGRENILENLER.md    4.227 satır   199.328 bayt   ~ 50.000
YAPILACAKLAR.md      966 satır    55.013 bayt   ~ 14.000
ONCELIK · YOL-HARITASI · MIMARI · VERI-YAPISI · DURUM   ~ 27.000
§11 tek başına: 2007. satırda başlıyor, 7352'de bitiyor
                = CLAUDE.md'nin %73'ü ≈ 76.000 token
```
🔴 **Bu bir ALT SINIR DEĞİL, KABA BİR TAHMİN** ve iki yönden de
yanılabilir: `wc -c` **bayt** sayar, Türkçe karakterler UTF-8'de 2
bayt, ve Türkçe İngilizceden **kötü tokenlaşır.** Senin ilk işin bu
sayıyı **düzeltmek.**

⇒ Sonuç: compact'ın **zamanlaması** değil, **tabanı** yüksek. Compact
değişkeni siler; taban her oturumda **yeniden yüklenir.**

---

## ② 🔴 ÇARENİN EMSALİ BU PROJEDE ZATEN VAR — ve ölçülmüş

`claudemre-basla` skill'inin kendi metninde duruyor. Aynı hastalık,
aynı teşhis, **uygulanmış çare**:
```
"Ölçüldü: eski liste ~123.000 token, yani bağlam penceresinin %61'iydi
 ve HİÇBİR OTURUM ONU OKUMUYORDU — kural yazılıydı, uygulanmıyordu ve
 UYGULANAMAZDI."
yasalar/gelen/ TAMAMI  ~86.000 →  yasalar/DIZIN.md    ~7.000
YASALAR.md tam metin   ~18.000 →  sloganlar           ~3.700
```
📌 **`CLAUDE.md §11` bugün tam olarak `YASALAR.md`nin o günkü
hâlinde.** Senin işin bunu **ölçmek ve bir öneri hazırlamak.**

---

## ③ NE ÖLÇECEKSİN — dört ölçüm

### Ⓐ GERÇEK TOKEN SAYISI
`wc -c` bayt sayar. Karakter say (`len()` ile, UTF-8 okuyarak) ve
mümkünse gerçek bir tokenlaştırıcıyla ölç. Yoksa **karakter/token
oranını Türkçe metin üzerinde ölç** ve damgala: `🟡 tahmin, yöntem: X`.

### Ⓑ BÖLÜM BÖLÜM DAĞILIM
`CLAUDE.md`yi başlıklarına ayır (`^## ` ve `^- 🔴`/`^- 🟢` ders
blokları). Her bloğun **satır · karakter · ~token** payı.
🔴 Ve `§11`in içindeki **ders bloklarını tek tek** çıkar — kaç ders var,
en uzunu kaç satır, ortancası kaç?

### Ⓒ 🔴 HANGİ DERS ATIF ALIYOR — asıl ölçüm bu
Bir ders **kullanılıyorsa** kalmalı, **kullanılmıyorsa** vakası ayrı
dosyaya inebilir. Ölç:
```
kaynak   oturumlar/tahta.json (3180+ mesaj) · denetim/*.md · oturumlar/*.md
ara      `§11` · `§3.5` · `§4` · `§7` gibi atıflar VE ders başlıklarının
         ayırt edici ifadeleri
çıkar    her ders için: kaç kez atıf aldı · en son ne zaman
```
🔴 **TAHMİN ETME, TARA.** Ve `§11`in kendi dersi: bir eşleştirici,
aradığı şeyin **nerede OLMAYACAĞINI** da bilmeli — atıf ararken
**dersin kendi metnini** sayma.

### Ⓓ MÜKERRERLİK
`§11` yığılarak büyüdü. Aynı ders ailesi (*"ölçüm doğru çıkarım
yanlış"* · *"aletin gösterdiği ≠ ölçtüğü"* · *"ölçülemedi ≠ temiz"*)
kaç ayrı blokta tekrar ediyor?
🟢 **Birleştirme, silmekten güvenlidir** — ve öneri o yönde olmalı.

---

## ④ 🔴 NE YAPMAYACAKSIN — ve niçin

```
🔴 CLAUDE.md'yi DEĞİŞTİRME. Tek satır bile.
🔴 Hiçbir ders SİLME, TAŞIMA, BİRLEŞTİRME.
🔴 Hüküm VERME — öneri yaz, karar Emre'nin.
```
Üç sebep, üçü de somut:
```
① CLAUDE.md EMRE'NİN belgesi
② ŞU AN ALTI KOL onu okuyarak çalışıyor (SINIR-*-0907) — okudukları
   belge altlarından değişirse ne okuduklarını kimse bilemez
③ `§11`in KENDİ dersi: "bir vakayı SİLMEK dersi de siler; DAMGALAMAK
   dersi korur." Yanlış budanan bir ders GERİ GELMEZ.
```

---

## ⑤ NE ÜRETECEKSİN

```
denetim/OLCUM-BUDAMA-0907.md      Ⓐ-Ⓓ ölçümleri, sayıyla
denetim/ONERI-BUDAMA-0907.md      önerilen yapı + ÖRNEK bir ders için
                                  "önce/sonra" gösterimi
denetim/ARAC-BUDAMA-*-0907.py     aletlerin
```
Önerinin cevaplaması gereken sorular:
```
① yeni yapı ne? (`dersler/DIZIN.md` + `dersler/<kimlik>.md` mi,
   başka bir şey mi — GEREKÇESİYLE)
② CLAUDE.md'de NE KALIR? (kural mı, slogan mı, ikisi mi)
③ tahmini kazanç KAÇ TOKEN — ve hangi ölçümden
④ RİSK: bir ders taşınınca ona atıf yapan ne bozulur?
⑤ GERİ ALINABİLİR Mİ? (git'te evet — ama bir oturum bayat bir DIZIN
   satırı okursa ne olur?)
```

---

## ⑥ DOSYALARIN
```
🟢 SENİN    denetim/OLCUM-BUDAMA-0907.md · ONERI-BUDAMA-0907.md
            denetim/ARAC-BUDAMA-*-0907.py|js
            oturumlar/BUDAMA-0907.md   (ilerleme notun)
🔴 DEĞİL    CLAUDE.md ve öteki kök *.md · data/* · arac/* ·
            js/app.js · index.html · başka bir kolun dosyası
```
**Ad alanı:** `window.<AD>` gerektirmiyor — çıktın `denetim/` altında.
🔒 `data/` ve `arac/uret_petek.py · renkler.py · girdi.py` koşu 8
sürerken DONUK; zaten dokunmuyorsun.

---

## ⑦ HABERLEŞME
```
py arac/tahta.py yaz --kim "BUDAMA-0907" --kime "1.MURAT" --mesaj "..."
```
Açılınca · kalem kalem · soru gelince **hemen** · bitince **sayıyla.**
🔴 Kritik mesajı `oturumlar/tahta.json`dan **geri oku** (`§7.1⑤b`).
🔴 **Aksaklık beklemez** (`§7.1⑥`).
🟢 Bir sevk senin **kendi ölçümünle** çelişiyorsa **uygulama** — ölç,
yaz, bildir. Şartı: **uymamak sessiz olamaz.**

---

## ⑧ ÖNCÜL DAMGALARI
```
🟡 DEVRALDIM, DOĞRULANMADI  yukarıdaki BÜTÜN token sayıları
                            (`wc -c` bayt üzerinden, kaba)
🟢 ÖLÇTÜM                   §11'in 2007. satırda başladığı
🟡 DEVRALDIM                ClaudEmre'nin ~123.000/86.000/18.000
                            sayıları — skill metninden, ben ölçmedim
```
📌 **Hiçbirini taban yapma.** Bu şartnamedeki her sayı yeniden
ölçülebilir ve ölçülmeli.

---

## ⑨ KABUL ÖLÇÜTÜ
```
① Ⓐ-Ⓓ dördü de SAYIYLA — ya da hangisi ölçülemediyse ADIYLA
② öneri, `⑤`teki beş soruyu da cevaplıyor
③ EN AZ BİR ders için "önce/sonra" ÖRNEĞİ — soyut bir yapı önerisi
   uygulanabilirliğini göstermez
④ CLAUDE.md'de DEĞİŞEN SATIR SAYISI: 0
```
⚠️ ④ bir ölçüt değil bir **şart.** İhlal edilirse iş reddedilir.

---

## ⑩ İLERLEME
Bu dosyanın altına yaz. Kendi dosyanı commit edebilirsin — **pathspec
ZORUNLU**, `git add -A` **ASLA**.
🔴 `§11` kabuk kuralı: kaçış/Türkçe/backtick bash'ten **geçmez**.
`Write` + `py <yol>` / `git commit -F <yol>`. `sed`/heredoc/`py -c`/
`git commit -m` YOK.

---

## İLERLEME NOTLARI

### 7 Eylül 2026 · TESLİM

**Üretilen:**
```
denetim/OLCUM-BUDAMA-0907.md            Ⓐ-Ⓓ + kazanç + risk, sayıyla
denetim/ONERI-BUDAMA-0907.md            beş sorunun beşi + önce/sonra örneği
denetim/ARAC-BUDAMA-TOKEN-0907.py       Ⓐ token (tiktoken o200k, 🟡 PROXY)
denetim/ARAC-BUDAMA-BOLUM-0907.py       Ⓑ bölüm + 178 ders bloğu
denetim/ARAC-BUDAMA-ATIF-0907.py        Ⓒ atıf (7-gram, Türkçe normalleştirme)
denetim/ARAC-BUDAMA-MUKERRER-0907.py    Ⓓ + Ⓒ'nin yön düzeltmesi
denetim/ARAC-BUDAMA-KAZANC-0907.py      önerinin kazancı
```

**ŞART ④ — CLAUDE.md'de değişen satır: 0.** Doğrulama:
`git status --porcelain -- CLAUDE.md` → boş.

**Manşet:** taban sanılandan **%40 büyük** (104.000 → **145.947** token);
sebep zamanlama değil **taban**; şartnamenin Ⓒ hipotezi (*kullanılmayanı
ayır*) **çürüdü** (kazanç %1,8); tek işleyen ölçüt **kural/vaka ayrımı**
(kazanç **73.900-85.600 token**, CLAUDE.md %41-49'una iner).

**Ölçülemeyenler adıyla:** bağlam penceresinin gerçek boyutu (türetildi) ·
Anthropic'in gerçek tokenlaştırıcısı (proxy) · compact'ın neyi sildiği ·
CLAUDE.md dışındaki tabanın yükü · bir dersin UYGULANMASI (yalnız atıf
ölçüldü).
