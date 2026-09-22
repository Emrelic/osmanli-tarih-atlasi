# DEVİR — 1.MURAT HÜDAVENDİGAR → YILDIRIM BAYEZIT

**22 Eylül 2026** · bayrak değişimi, Emre'nin talimatı. Bu belge YILDIRIM BAYEZİT'in
**kendi ölçümüyle bulamayacağı** şeyleri taşır; ölçülebilen her şey zaten aletlerdedir
(`durum_tablosu.py`, `defter.py`, `tahta.json`, `kutu/ozet.py`).

---

## 🔴 Hemen bakılacak üç şey

### ① `CLAUDE.md` §1.5 BAYAT — ölçüldü
```
§1.5 diyor:  Yayın r9785 · 23821b0
ölçülen:     Yayın r9964 · 659380d7
```
`py arac/durum_tablosu.py --yaz` ile güncelle. Bayat tabloyla kabul ölçütü kurulmaz
([`D199`](../dersler/D199-durum-tablosu-elle-yazilmaz.md)).

Aynı koşu iki şey daha bildirdi, ikisi de **borç, arıza değil**:
- 🟡 gerçek sessiz borç 14 künye (aleut · arua · charrua · crnojevic-zetasi ·
  girit-devleti · guarani-misyonlari · kasim · kibris-ingiliz ·
  luksemburg-hollanda-birligi · norvec-isvec-birligi · oniki-ada-italyan · ranquel ·
  sabah-emirligi · sani-emirligi)
- ⚠️ `dogrulanmadi` alanı `BILINEN_ALANLAR`da yok — 1 kayıtta
  (`yerlesimler_ek29.js` · Deyrülkamer). Yazım hatası mı yeni şema alanı mı:
  `girdi.py`ye karar yazılmalı.

### ② Masaüstündeki boş kabuk SİLİNEMEDİ — beni bekliyor
```
C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ    0 dosya, 0 alt dizin
```
Silmeye çalıştım, **"başka bir işlem tarafından kullanılıyor"** dedi. Ölçtüm:
Explorer'ın tek penceresi `C:\atlas`ta · PowerShell kabuğumun dizini `C:\atlas` ·
komut satırında eski yolu taşıyan **hiçbir süreç yok**. Tutan, 1.MURAT oturumunu
barındıran sürecin kendisi (eski yolda başlatıldı). **1.MURAT penceresi kapanınca
kilit düşer — ilk işin o klasörü silmek olsun.**

🔴 **Silinmesi bir temizlik değil bir GÜVENLİK adımıdır:** klasör var olduğu sürece
yanlışlıkla uyandırılan bir oturum **sessizce** oraya düşer (hata vermez, boş bir
klasörde çalışır). Yok olursa **gürültülü patlar.** Sessiz hata gürültülüden pahalıdır.

### ③ Masaüstünde iki kalıntı — EMRE'NİN kararı, seninki değil
```
_ESKI-ATLAS-SILINECEK          5828 dosya   taşımanın kaynağı
_ESKI-HAYALET-TAR-SILINECEK      11 dosya   27 Ağustos hayaleti (bayat kopya, kayıp yok)
```
İkisi de ölçüldü, ikisinde de kayıp yok ([`D233`](../dersler/D233-tasima-salt-okunur-git-nesnesi.md)).
Emre "birkaç gün çalışıp göreyim" dedi. **Sen silme.**

---

## Kadro — sayı senin ölçtüğünden büyük

Bugün **342 oturum** "Atlas — emekli oturumlar" grubuna taşındı (416 oturumun
tamamı tarandı, 6 partide). Grupsuz kalan tek Atlas satırı
`🔔 03:40 — Atlas koordinatörü işe devam`: o bir **rutin koşusu**, kendi rutininin
altında görünür ve sistem onu gruplamaya izin VERMEZ. Kusur değil.

**Dokunulmadı, çünkü başka projenin:** Ranking 32 · ClaudEmre 16 · Crypthos 13 ·
Uibul 4 · TavlApp 1 · öteki 6.
⚠️ `ClaudEmre 3 Koordinatör` oturumunun dizini de ÖLÜ (`Desktop\ClaudEmre` → artık
`C:\claudemre`). O da taze açılmalı — ama o senin değil, ClaudEmre'nin işi.

🔴 **KULLANILABİLİR HAZIR KITA: SIFIR.** Defter "hazır kıta var" diyordu; ölçüm
tersini söyledi — hepsi ölü yola bakıyordu. `F18`in tam da uyardığı hâl:
**defter kaydeder, ölçmez.** Yeni oturumları Emre `C:\atlas`ta açacak.

---

## Devralınan açık borçlar

| ne | durum |
|---|---|
| `denetim/ARAC-KAYNAK-BAG-YAMA-0922.py --yaz` | yazıldı, kuru koşusu temiz, **UYGULANMADI** |
| `oturumlar/PARTI-0075-UYGULAMA.md` | **11 karar Emre'de** |
| `kutu/ozet.py "atlas"` | 74 paket · 3 işlenmemiş · 549 açık madde · 15 karar bekliyor |
| ClaudEmre iki-makine kurulumu | B makinesine klon yapılmadı |
| `git gc` | koşu sonrası ayine eklenmedi (bir kez 39 GB → 319 MB kazandırdı) |
| GitHub boyut duvarı | `donemler.js` 59,7 MB · `devletler_harita.js` 75 MB (tavan 100 MB) |
| `window.KADEME_YAMA` | 4 dosyada paylaşık · bugün tüketicisi yok · **engelleyici değil** |
| `oturumlar/defter.json` | çalışma ağacında değişik (yeni oturum kaydı) — commit senin |

---

## Bu turda kurulan iki kural — bozma

**① `HERKES` kural altında** (Emre, 22 Eylül): mesaj kimi ilgilendiriyorsa **onun
adına** yazılır. `HERKES` + ACİL/DURDURUCU ise `--dayanak` ZORUNLU, `tahta.py`
dayanaksızını REDDEDER (çıkış 2). ACİL değilse **kimseyi uyandırmaz**, kütük olarak
durur. Ölçüm: bir bilgi duyurusu sekiz oturumu uyandırıp sekiz tam tur yaktı.

**② Boş uyanışta EKRANA HİÇBİR ŞEY YAZILMAZ.** "Benlik bir şey yok, bekçiyi yeniden
kuruyorum" cümlesinin kendisi bir tur maliyetidir. Bekçi sessizce yeniden kurulur.

📌 `tahta.py oku` HER mesajı okundu işaretler ama yalnız kuyruğu gösterir —
**`oturumlar/tahta.json`u doğrudan oku.**

---

## Son söz

Ağaç temiz, push'lu, HEAD `659380d7`. `denetle.py` temiz · `denetle_yayin.py` temiz ·
3921 yerleşim / 87 girdi dosyası · r9964 · kutu 74 paketi görüyor · 6 worktree
`C:/atlas`a bakıyor. Taşıma bitti ve dört kapının dördü de geçildi.

Bayrak sende.
