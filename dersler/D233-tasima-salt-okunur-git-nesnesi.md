# D233 — Taşımayı salt-okunur bir git nesnesi durdurdu; ve boşluklu yol bir ay görünmez çöp üretti

**22 Eylül 2026** · proje `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`
→ `C:\atlas` taşındı. Taşıma YARIDA KALDI, tamamlandı, ve üç ayrı ders bıraktı.

---

## ① Arıza: `WinError 5` — ve sebebi bir izin sorunu DEĞİLDİ

```
✗ TAŞINAMADI: [WinError 5] Erişim engellendi:
  '…\.git\objects\01\076831802382da2c4b2de66b6fd0d152f9e512'
```

**Git nesne dosyalarını SALT OKUNUR yazar.** `shutil.move` önce `os.rename`
dener; tutmazsa KOPYALA + SİL'e düşer, ve `shutil.rmtree` salt-okunur bir
dosyayı silemez. 51.852 nesneden **herhangi biri** bunu tetiklerdi — yani
arıza rastlantı değil, **kaçınılmazdı**.

🔴 **En tehlikeli sonuç veri kaybı değil, İKİ YARIM KLASÖRDÜ:**
kopya tamamlanmış (5906 dosya), silme yarılanmıştı (50 nesne silinmiş).
İkisi de "çalışıyor" görünür ve **bir alet hangisine yazdığını söylemez.**
Kayıp yoktu ama kayıp DOĞURACAK bir hâl vardı.

**Çare** (`denetim/ARAC-TASIMA-0922.py:_guvenli_tasi`):
① önce `os.rename` — aynı sürücüde ANLIK, hiçbir şey kopyalanmaz, risk sıfır
② tutmazsa 3 kez, aralarında bekleyerek — tutamaçlar saniyeler içinde serbest kalır
③ yine olmazsa kopyala + `onerror` ile salt-okunur bayrağını temizleyip sil

**Ve sıra önemliydi:** yarıda kalınca yapılacak ilk iş taşımayı sürdürmek
DEĞİL, **yol yenilemekti.** Çünkü tehlike beklemenin içindeydi: yeni yerdeki
131 alet hâlâ eski yolu gösteriyordu ve eski klasör de duruyordu.

---

## ② Alet kendini sayıyordu — ön sınav asla yeşile dönemezdi

Süreç tarayıcısı `CommandLine -like '*TAR*CO*RAFYA*'` diyordu. Ama bu deseni
**arayan** PowerShell'in kendi komut satırı da deseni içeriyordu: **alet
kendini yakalıyordu.** Kullanıcı ne yaparsa yapsın sayı 1'in altına inemezdi.

🟢 Şans eseri hata **gürültülü** tarafa düştü ("yapılamaz" dedi). Sessiz
tarafa düşseydi taşıma açık dosyaların üstünde koşardı.

**Çare iki katmanlı:** kendi soy ağacını dışla (PID + bütün atalar) **ve**
komut satırında `Win32_Process` geçen her şeyi dışla. Ölçüm artık ham
`PID⇥PPID⇥ad⇥komut` olarak gelir, süzgeç Python tarafında kurulur — desen,
ölçülen metnin İÇİNDE DEĞİLDİR.

**Kardeş ders:** kullanıcıya "şunu kapat" demeden önce o şeyin gerçekten
açık olup olmadığı ölçülür. Engel görünen iki `bash.exe`in **atası zaten
ölmüştü** — onlar açık Claude değil, kapatılmış bir oturumdan kalan
öksüzlerdi. Kapatılması istenen şey kapatılamıyordu, çünkü zaten kapalıydı.
**Yanlış talimat, talimatsızlıktan kötüdür.**

---

## ③ Boşluklu yol, bir ay görünmeyen bir hayalet ağaç üretmişti

Masaüstünde şu klasör duruyordu:

```
Desktop\TAR\İH CO\ĞRAFYA S\İTES\İ\denetim\kume\*.md      (11 dosya)
```

27 Ağustos 18:27'de, **tırnaklanmamış bir yol ilk boşlukta bölünmüş** ve
`_kume_uret.py` çıktısını oraya yazmıştı. **Bir ay boyunca kimse görmedi.**

⚠️ Ve "gördüm, sildim" demeden ÖNCE ölçüldü — 11 dosyanın hiçbiri gerçek
kopyalarıyla AYNI değildi, bazıları 7 kat BÜYÜKTÜ (`icerik-talebi.md`
7966 B ↔ 1064 B). Kayıp gibi görünüyordu. Açılınca hüküm çıktı:
ikisi de ÜRETİLMİŞ dosya (`_kume_uret.py` · kaynak `kutu/giden/*/CEVAP.json`),
hayalet 27 Ağustos'un çıktısı (38 açık madde), gerçek 28 Ağustos'un
çıktısı (3 açık madde). **Kayıp yok — bayat bir kopya.**
📌 Ama bu, bakmadan bilinemezdi. *Boyut farkı bir delil değil bir sorudur.*

🟢 **Ve `C:\atlas` bu sınıfı YAPISAL OLARAK bitirir:** boşluk yok, Türkçe
karakter yok. Aynı vakanın bir başka yüzü `arac/zincir_baslat.bat`in kendi
notunda yazılı — bir zamanlanmış görev, boşluklu yol yüzünden **bir ay
sessizce koşmamıştı**.

---

## Taşımanın bıraktığı ölçülü liste

| ne | sayı | not |
|---|---|---|
| yenilenen mutlak yol | 144 | 132 `.py`/`.bat` + 2 alet `.js` |
| ClaudEmre kod + BAĞ | 165 yol / 142 dosya | `_proje.txt` · `PARTI.json` · `ayar.json` |
| `~/.claude` skill + ayar | 51 yol / 6 dosya | 4 SKILL.md + `settings.json` 2 hook |
| Windows zamanlanmış görev | 3 | planda HİÇ YOKTU; kalıntı taraması buldu |
| worktree | 6 | plan "4" diyordu; `repair` beşini onardı |
| transkript | 626 | `C--atlas` |
| kalıntı taraması | 277 kapsandı / 275 gerekçeli dışta / **0 açıkta** | |

**Dokunulmayanlar ve gerekçeleri:** proje `.md`leri, `denetim/*.json`,
`oturumlar/tahta.json` — bunlardaki eski yol bir AYAR değil bir KAYITtır.
`proje_takma.json`da eski yazım SİLİNMEDİ, yenisi EKLENDİ: o bir sözlüktür,
bir yazımı silmek geçmiş kayıtları "bilinmiyor" yapar.

**Sonuç:** `denetle.py` temiz · `denetle_yayin.py` temiz · motor 3921
yerleşim / 87 girdi dosyası · kutu 74 paketi görüyor · 6 worktree yeni köke
bakıyor.

---

## ④ Ek — ②'nin inceltilmesi: cwd komut satırında GÖRÜNMEZ

Taşımadan sonra geriye kalan **boş kabuk** klasör (`…\TARİH COĞRAFYA SİTESİ`,
0 dosya, 0 alt dizin) silinemedi: *"başka bir işlem tarafından kullanılıyor."*

②'nin öğrettiği şeyi uygulayıp **kullanıcıya "şunu kapat" demeden önce ölçtüm** —
ve ölçüm üç adayı da eledi:

```
Explorer'ın tek penceresi        → C:\atlas          (tutmuyor)
PowerShell kabuğunun dizini      → C:\atlas          (tutmuyor)
komut satırında eski yolu taşıyan süreç → HİÇBİRİ    (tutmuyor)
```

🔴 **Ve tam burada ②'nin sınırı çıktı:** komut satırı taraması "kimse tutmuyor"
dedi, ama klasör gerçekten tutuluyordu. Çünkü **bir sürecin çalışma dizini (cwd)
komut satırının parçası değildir.** Bir süreç bir klasörü, adını hiçbir yerde
yazmadan, sadece orada *durarak* tutar.

Tutan, oturumu barındıran sürecin kendisiydi: eski yolda başlatılmıştı.
`change_directory` **mantıksal** proje dizinini taşır; işletim sistemi
seviyesindeki cwd süreç ömrü boyunca **değişmez**. Kilit ancak pencere kapanınca
düşer.

📌 **Ders:** *Komut satırı taramasının boş dönmesi, "kimse tutmuyor"un kanıtı
değildir — yalnız "adını yazan kimse yok"un kanıtıdır.* Ölçümün kapsamını,
sonucunu okumadan önce söyle.

🟢 **Ve boş kabuğu silmek bir temizlik değil bir GÜVENLİK adımıdır:** klasör var
olduğu sürece yanlışlıkla uyandırılan bir oturum hata vermez — **boş bir klasörde
sessizce çalışır.** Klasör yoksa gürültülü patlar. Bu, ①'in "iki yarım klasör"
tehlikesinin küçültülmüş hâlidir ve aynı kuralla kapanır:
**sessiz hata, gürültülü hatadan pahalıdır.**
