# OPUS HAZIR KITA 128 — DÖRT KIRMIZI SATIRIN KÖKENİ (salt okuma)

> Sevk: 1.MURAT HÜDAVENDİGAR · 2 Eylül 2026
> ⚠️ Adın `-GGAA` damgası taşımıyor (yeni standart `ClaudEmre/SARTNAME.md`).
> **Değiştirmiyorum** — bir oturumu iş sırasında yeniden adlandırmak, tam da
> standardın önlemek için yazıldığı karışıklığı üretir (tahtadaki ad ile
> `list_sessions`taki ad ayrışır). Adın böyle kalsın.

## ⓪ KİMLİK — HADDİN

```
SEN         : İŞÇİ oturum · ÖLÇÜM (Oturum 2 cinsi — rapor yazar, DÜZELTMEZ)
DEĞİLSİN    : koordinatör DEĞİLSİN. İş dağıtmazsın, öncelik değiştirmezsin.
ÜSTÜN       : 1.MURAT HÜDAVENDİGAR
ALTIN       : kimse
YASAKLARIN  : 🔴 HİÇBİR VERİ DOSYASINA YAZMAZSIN. Ne `data/` ne `arac/`
              ne kök `*.md`. Yalnız kendi `oturumlar/` ve `denetim/`
              dosyanı yazarsın.
```

🔴 **VE BUGÜN ÖZEL BİR YASAK VAR — `arac/*.py`ye DOKUNMA.**
`uret_petek.py` **PID 27596** canlı (11:01'den beri). `girdi.py · renkler.py ·
uret_petek.py` motor parmak izindedir; koşarken biri değişirse **koşu ölür**
(bir koşu 83 dakika çalışıp tam böyle öldü). `data/*.js` güvenlidir (koşu
başında anlık görüntü alınır) ama **senin işin zaten salt okuma.**

---

## ① NİÇİN VARSIN — ölçülmemiş dört satır, ve YAYINI BLOKLUYORLAR

`py arac/denetle.py` bugün dört satırda kırmızı veriyor:

```
1b ✗  BEYANSIZ pencere arası boşluk: 1     (beklenen 0) · beyanlı 3/3
2i ✗  26 İŞGAL kırılması, 4 açık            (tavan 3)   · kırılma 24 → 26
4  ✗  12 hayalet dönem                      (beklenen 8)
4c ✗  286 dönem devletin ölümünü aşıyor     (beklenen 280)
```

🔴 **VE KOORDİNATÖR OLARAK BEN BUNLAR İÇİN BİR VARSAYIM KURDUM AMA
ÖLÇMEDİM.** Emre'ye aynen şunu yazdım:

> *"Benim değişikliklerimden gelemez — bir madde silmek kırılma eklemez,
> `2i`nin 24→26 artışı yeni bağlanan yerleşim verisinden. **Ama bunu
> varsayıyorum, ölçmedim.**"*

⇒ **Senin işin o varsayımı çürütmek ya da doğrulamak.**

### 🔴 SEVKİN TAŞIDIĞI ÖNCÜLLER — istediğin damgalarla

```
ÖLÇTÜM        `denetle.py` çıktısındaki dört satır (yukarıdaki blok)
ÖLÇTÜM        uret_petek.py PID 27596 canlı, başlangıç 11:01:53
ÖLÇTÜM        1b'nin beyanlı 3'ünden ikisi: Gao (1700→1898) · Cenne (1700→1818)
ÖLÇTÜM        2i'nin 4 açığı: 1737-10-01 Niş · 1789-10-13 Semendire ·
              1834-01-01 Bükreş+Yaş · 1878-09-18 Bihaç
DEVRALDIM     "§1.5 tablosu bayat: 2663/69 dosya vs tabloda 2624/63"
— DOĞRULANMADI   kaynak: PAKET-0035-0902, M-2162. BEN ÖLÇMEDİM.
DEVRALDIM     "zemin PAKET-0035 yamasından ÖNCE de kırmızıydı"
— DOĞRULANMADI   aynı kaynak. BEN ÖLÇMEDİM.
VARSAYIM      "dördü de bugün bağlanan altı yerleşim dosyasından geliyor,
— ÖLÇÜLMEDİ      koordinatörün madde silmesinden DEĞİL"  ← ÇÜRÜTÜLECEK ŞEY BU
```

---

## ② İŞİN — dört satır, her biri için ÜÇ soru

Her kırmızı satır için **aynı üç soru**, sırayla:

```
① NE     tam olarak hangi kayıt/gün/kimlik ötüyor? (adıyla, sayıyla)
② KİM    hangi commit / hangi dosya bağlanınca doğdu?
         🔴 `git log --oneline -30` VE `git log -S"<kimlik>" -- data/` kullan
③ CİNS   ihlal mi, BEYAN mı, yoksa BİLİNEN BORÇ mu?
         — beyanlıysa beyanı KİM yazmış ve hâlâ geçerli mi?
```

### KALEM KALEM
```
① 1b · BEYANSIZ pencere arası boşluk 1
   `denetle.py` beyanlı 3'ü basıyor ama BEYANSIZ 1'i basmıyor.
   ONU BUL. `py arac/denetle.py --ayrinti` dene; yoksa denetimin
   `Değişmez 1b` bölümünü OKU ve hangi kaydı kastettiğini çıkar.

② 2i · 4 açık (tavan 3) — kırılma 24 → 26
   Dördü de yukarıda adıyla yazılı. Sorulacak: bu dördü BUGÜN mü doğdu?
   Kırılma sayısı 24'ten 26'ya çıkmış ⇒ İKİ YENİ işgal kırılması var.
   HANGİLERİ ve hangi dosyadan geldi?
   ⚠️ Tavan 3'tü ve 4 oldu. Tavanı YÜKSELTME ÖNERME — bu benim kararım.
   Sen yalnız KÖKENİ ölç.

③ 4 · 12 hayalet dönem (beklenen 8)
   🟡 Bende bir aday var ama DOĞRULANMADI: `Varşova Dükalığı` künyesi
   OK109'a sevk edilmişti ve "dört kayıt etkiliyor" diye ölçülmüştü.
   8 + 4 = 12 TUTUYOR — ama bu bir ARİTMETİK TESADÜF olabilir.
   ⇒ Hayaletlerin ADINI çıkar. Varşova'ysa doğrulanmış olur; değilse
   benim çıkarımım çürür ve bunu BİLDİR.

④ 4c · 286 (beklenen 280)
   Altı fazla. Aynı üç soru.
```

### 🔴 VE BEŞİNCİ BİR KALEM — `§1.5` TABLOSU
```
py arac/durum_tablosu.py        # ekrana bas — SAKIN --yaz KULLANMA
```
Çıktıyı `CLAUDE.md §1.5`teki tabloyla karşılaştır ve **farkı satır satır**
yaz. `--yaz` bayrağı `CLAUDE.md`yi değiştirir; **kök `*.md` benim dosyam**,
güncellemeyi ben yaparım.
📌 Bu tablo bu projede **iki kez** bayatladı ve ikisinde de oturumları
yanlış zeminden başlattı — o yüzden ayrı bir kalem.

---

## ③ YAZMA YETKİSİ

```
🟢 SENİN   denetim/BULGU-OK128-KIRMIZI.md    ← raporun
           oturumlar/OPUS-HAZIR-KITA-128.md  ← ilerleme notların
🔴 DEĞİL   HER ŞEY. data/ · arac/ · js/ · kök *.md · başka oturumların dosyaları
```
Commit yalnız kendi iki dosyan, **pathspec'li**:
```bash
git commit -F <mesaj-dosyası> -- denetim/BULGU-OK128-KIRMIZI.md
```
⚠️ Mesajı `Write` aracıyla dosyaya yaz; `printf`/`py -c`/heredoc ile ÜRETME
(`§11` — bu kural bugün altı kez ısırdı, bir commit'in öznesi silindi).

## KUTUN
**YOK — nokta işi değilsin.** Kimseyle çakışmazsın. Canlı kutular bilgi
olsun diye: ORTAASYA-0902 `33-56K/46-96D` · AMERİKA-0902 `56G-72K/170B-34B` ·
OK109 Trakya · PAKET-0035 Hicaz.

---

## ④ SENİ BAĞLAYAN YASALAR

```
CLAUDE.md §11   "ölçüm doğru, ÇIKARIM yanlış" — bu ailenin en sık hatası.
                Rapora İKİ AYRI SATIR yaz: "ölçtüğüm şu" · "çıkardığım şu".
                Tek satırda birleşince çıkarım, ölçümün güvenilirliğini
                ÖDÜNÇ ALIYOR.
CLAUDE.md §11   "ölçmediğini `ölçmedim` diye yaz." Ölçülmüş ile hatırlanmış
                yan yana durursa okuyan İKİSİNİ DE ölçülmüş sanır.
CLAUDE.md §11   "ölçülemedi asla TEMİZ diye raporlanmaz — ama ÇÜRÜDÜ diye
                de raporlanmaz." Üç damga: TUTTU · ÇÜRÜDÜ · ÖLÇÜLEMEDİ.
CLAUDE.md §11   Bir kusur hükmü vermeden önce `git log`da DÜZELTİLMİŞ olup
                olmadığına bak. Bugün iki kalem tam bu yüzden boşa açıldı.
CLAUDE.md §5    Hangi dosya CANLI: tek otorite `arac/girdi.py GIRDI_DOSYALARI`.
                Bu bölümün dosya listesi ÜÇ KEZ bayatladı; listeye değil
                sabite sor.
```

---

## ⑤ HABERLEŞME

```bash
py arac/tahta.py yaz --kim "OPUS HAZIR KITA 128" --kime "1.MURAT" --mesaj "..."
```
Yatay mesaj serbest (şartı tahtadan geçmesi). Kendi pencerene yazmak
**cevap vermemekle aynıdır** — koordinatör onu görmez.

**AKSAKLIK BEKLEMEZ:** beklenenden çok farklı bir sayı ölçtüysen ·
şartname yanlış çıktıysa · bir kalem yetkin dışına taşıyorsa → **hemen** yaz.

**Her maddede üç şey:** ① ne ölçtüm (sayıyla) ② neyi bulamadım (`bulunamadı`
diye açıkça) ③ ne istiyorum (öneriyle).

---

## ⑥ BİTİŞ ÖLÇÜTÜ

```
① dört kırmızı satırın DÖRDÜ için de: NE · KİM · CİNS üçlüsü yazılı
② her satır için "ihlal / beyan / bilinen borç" damgası konmuş
③ ③. kalemde benim Varşova çıkarımım DOĞRULANMIŞ ya da ÇÜRÜTÜLMÜŞ
④ §1.5 tablo farkı satır satır çıkarılmış (yazılmamış — çıkarılmış)
⑤ ölçemediğin her kalem `ÖLÇÜLEMEDİ` diye AYRI kovada
```
**Teslim SAYIYLA:** *"dördünün üçü şu commit'ten, biri ölçülemedi"* —
*"baktım"* değil.

---

## ⑦ DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım, yeni iş bekliyorum."
⏳ "BEKLİYORUM: <ne> · <kimden> · <ne zaman tekrar bakacağım>"  ← ÜÇÜ BİRDEN
```
⚠️ Sessizlik bir durum değildir; sustuğunda seni "çalışıyor" sayarım.
