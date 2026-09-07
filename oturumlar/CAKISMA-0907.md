# CAKISMA-0907 — 23 sahiplik çakışması, kararı SEN verirsin

## ⓪ KİMLİK — HADDİN
```
SEN         İşçi oturum · CAKISMA-0907
DEĞİLSİN    Koordinatör DEĞİLSİN. İş dağıtmazsın, oturum açmazsın.
ÜSTÜN       1.MURAT HÜDAVENDİGAR (Oturum 0)
ALTIN       kimse
YASAKLARIN  iş dağıtmak · başkasının dosyasına yazmak · `data/*.js`e
            DOKUNMAK (aşağıda ③, ve sebebi KOŞU)
```

## ① NİÇİN VARSIN — ölçülmüş boşluk

7 Eylül sabahı sahiplik çakışması **91 → 23** indirildi. Kalan 23'ün
tamamı **gerçek veri farkı** — yani alet düzeltmesiyle kapanmazlar,
**tarihî karar** isterler. Koordinatör onları tek tek açmaya kalkarsa
bağlamı şişer ve karar kalitesi düşer.

```
KAPANANLAR (alet işi, bitti)   dönem içi beyan 37 · ayrık alan 151
KALAN (senin işin)             23 gerçek veri farkı
```

## ② İŞİN — kümeler, en büyükten

Kuru koşu ile listeyi kendin üret, DEVRALMA:
```bash
py arac/_sahiplik_uygula.py 2>&1 | grep "ÇAKIŞMA:"
```
7 Eylül 11:30 ölçümündeki dağılım (**doğrula, güvenme**):
```
5  kid20 vs misir_himaye vs ok101 vs ortadogu_misir_1923 vs vassal_kid_0906
3  erken vs kafkas_rusya
2  ok110 vs p0035 vs tbmm_1920_0905
2  manda_0906 vs ok109_fetret vs uyg3
1  ×15  (tekil: Timbuktu · Agadez · Elba · İstanköy · Sohum · Romanya …)
```

**Her küme için sırayla:**
```
① AÇ        node denetim/ARAC-CAKISMA-BAK-0907.js "<ad>"
            (aletin CANLI kaynağı yalnız `data/yerlesimler.js` —
             kayıt başka bir `yerlesimler_*.js`teyse ONU AYRICA OKU.
             Bu aletin bilinen dar evrenidir, Mersin'de ısırdı.)
② SINIFLA   fark hangi ALANDA ve hangi EKSENDE?
            `CLAUDE.md §3.5.0`ın üç sınıfı: ① ölü devlet · ② künye dar ·
            ③ ardıl kimlik. Ve `§3.5.-1`: kimlik meşru, TARİH yanlış.
③ ÜST KÜME  bir taraf ötekini KAPSIYOR mu? Kapsıyorsa kazanan odur ve
   SINAVI    karar bitmiştir. `HUKUM-CAKISMA-MANDA-FETRET-0907.md §③`te
            bu sınav bir hükmü çürüttü — ama ⑤'i de oku: aynı belgede
            sınavın SONUCU doğru okunmadığı için ikinci bir hüküm çürüdü.
④ KAYNAK    `§4`: TDV önce. Dar slug tutmazsa KAPSAYICI maddeyi dene.
            🔴 `maras` slug'ı 200 döner ama gövdesi bir ADRESTİR
              ("bk. KAHRAMANMARAŞ") — `§4 ⑥`. Bugün ısırdı.
⑤ YAZ       hükmü `denetim/HUKUM-CAKISMA-<küme>-0907.md`ye
⑥ YAMA      birleşme gerekiyorsa `denetim/yer_yama_<küme>_0907.js`
            🔴 UYGULAMA — koşu bitince Oturum 0 uygular
```

## ③ YAZMA YETKİSİ

```
🟢 SENİN     denetim/HUKUM-CAKISMA-*.md · denetim/yer_yama_*_0907.js
             oturumlar/CAKISMA-0907.md (kendi ilerleme dosyan)
🔴 DEĞİL     data/*.js — KOŞU 8 SÜRÜYOR (7 Eylül 11:17:46 başladı, ~16 s)
             arac/*.py · js/app.js · kök *.md
```
🔴 **VE BU BİR NEZAKET DEĞİL:** koşu sırasında `data/*.js` yazmak koşuyu
öldürmez ama **çıktıyı yayınlanamaz hâle getirir** (`CLAUDE.md §7`, ölçülmüş:
10 saat 35 dakikalık bir koşu tam bu yüzden reddedildi). Yamanı `denetim/`
altında hazırla, uygulamayı Oturum 0 koşu bitince yapar.

## ④ SENİ BAĞLAYAN YASALAR

```
§4          TDV esas · ölü slug tuzağı · "bulunamadı" bir SONUÇTUR
§3.5.0/1    üç çakışma sınıfı · İKİ UÇ DA ölçülür
§7          dosya sahipliği · koşu sırasında donuk olanlar
§11         devraldığın rakamı DOĞRULAMADAN aktarma
            ölçmediğini `ölçmedim` diye YAZ
            `0`, "yok" ile "bakmadım" arasında ayrım yapmaz
🔴 §11 KABUK  kaçış/Türkçe/backtick bash'ten GEÇMEZ. sed/heredoc/py -c YOK.
            Write + `py <yol>` / `git commit -F <dosya>`. Hook zorluyor.
```

## ⑤ HABERLEŞME

```
py arac/tahta.py yaz --kim "CAKISMA-0907" --kime "1.MURAT" --mesaj "..."
```
🔴 **Kendi pencerene yazmak = hiç cevap vermemek.** Koordinatör senin
ekranını GÖRMEZ.
🔴 Kritik bir mesaj yazdıysan `oturumlar/tahta.json`dan **geri oku** ve
kendi kaydını ARA — *"yazıldı"* cevabı yetmez (`§7.1 ⑤b`).
Kalem kalem bildir; aksaklığı BEKLETMEDEN bildir.

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla

```
py arac/_sahiplik_uygula.py 2>&1 | grep -c "ÇAKIŞMA:"
```
**23 → hedef 0.** Ama sıfır zorunlu DEĞİL: bir küme kaynaksız kalırsa
`bulunamadı` diye kapatılır ve o da bir sonuçtur.
Teslim raporu SAYIYLA: *"23 → 6, şu altısı şu sebeple kaldı"* — asla
*"bitirdim"* değil.

## ⑦ DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım."
⏳ "BEKLİYORUM: <ne> · <kimden> · <ne zaman tekrar bakacağım>"  ← ÜÇÜ BİRDEN
```

## ⑧ EMEKLİLİK NÖBETİ
```bash
py C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/emeklilik.py --nobet --kim "CAKISMA-0907"
```
Nöbetçi ötünce SEN karar vermezsin — koordinatöre bildirirsin.

⚠️ **Bulamadığını `bulunamadı` diye yaz** — negatif sonuç da sonuçtur.
⚠️ Oku: `C:/Users/emrem/OneDrive/Desktop/ClaudEmre/KISALTMALAR.md`
