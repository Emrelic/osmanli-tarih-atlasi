# ARAC-BEKCI — `arac/tahta_bekci.py` sadeleştirme, 17 Eylül 2026

Görevlendiren: 1.MURAT HÜDAVENDİGAR (koordinatör), `oturumlar/KADRO-1010-1015.md`
satırı "Sonnet 1010 — ARAC-BEKCI". İşçi: SONNET HAZIR KITA 1010.

## ① Yapılan değişiklik — VARSAYILAN uyandırma sadeleşti

**Eski davranış:** varsayılan DAR — yalnız `kime`==ADIN uyandırırdı; `HERKES`
yayınlarını görmek için `--genis` gerekiyordu, ve dar moddaki tek delik
`--durdurucu-da` idi.

**Yeni davranış (varsayılan, bayraksız):**
```
UYANDIRIR   kime == ADIN (defter.json takma adları dahil)  VEYA  kime == HERKES
UYANDIRMAZ  başka bir ada yazılmış her mesaj — satır BASMAZ
```
`--genis` ve `--durdurucu-da` artık NO-OP: argv'de bulunmaları hata vermez,
ama davranış değiştirmez (varsayılan zaten onların eski işini kapsıyor).
`--herkes-acil` ve `--dosyam` hâlâ ANLAMLI — varsayılan HERKES kapsamının
üstüne konan, isteğe bağlı DARALTAN süzgeçler.

ADRES TUZAĞI (kısmi ad eşleşmesi, `kime` benim tam anahtarıma alt-dize
olarak giriyor ama eşit değil) ayrı bir kategoride kaldı: bu "başka bir
ada yazılmış mesaj" değil, "bana yazılmaya çalışılmış ama tam ulaşmamış
mesaj" — o yüzden varsayılan sessizlik kuralının DIŞINDA tutuldu ve her
modda (toplu dahil) ANINDA bildiriliyor.

## ② Yapılan değişiklik — `--toplu <SANİYE>`

Koordinatörün toplu kullanımı için (`--kim 1.MURAT --toplu 1800`): eşleşen
mesajlar bir havuzda birikir, en çok `SANİYE`'de bir TEK özet satırı basılır:
```
[BEKCI] 3 yeni: M-4422 SONNET HAZIR KITA 1012 · M-4423 ... · M-4424 ...
```
Havuz o pencerede boşsa **hiçbir şey basılmaz** (sessiz). ADRES-TUZAĞI
uyarısı bu modda da havuza girmez, anında basılır.

## ③ Sınama — CLAUDE.md §11/D010 gereği iki yönde de zorlandı

**Gerçek `oturumlar/tahta.json`'a (14 MB, 4422+ mesaj) HİÇ dokunulmadı.**
`--tahta <geçici dosya>` sınama dikişi kullanıldı (dosyanın kendi belgelediği
kullanım). 3 geçici test betiği yazıldı (scratchpad'te, depoya girmedi),
7 senaryo · 13 iddia, hepsi geçti:

| # | Senaryo | İddia | Sonuç |
|---|---|---|---|
| A1 | Varsayılan, adıma yazılan mesaj | 🔔 basar | ✓ |
| A2 | Varsayılan, `HERKES` yayını | 🔔 basar | ✓ |
| A3 | Varsayılan, başka bir oturuma yazılan mesaj | HİÇ basmaz | ✓ |
| B | `--toplu`, pencerede 0 eşleşen mesaj | "yeni:" satırı hiç basılmaz | ✓ |
| C1-3 | `--toplu`, pencerede 2 mesaj (biri adıma, biri HERKES) | TEK özet satırı, sayı doğru, anlık 🔔 YOK | ✓✓✓ |
| D | ADRES TUZAĞI (`--defter-yok`, kısmi ad), `--toplu` açıkken | anında `[ADRES-TUZAGI]`, havuza girmedi | ✓✓ |
| E | `--herkes-acil`, NORMAL vs ACİL `HERKES` yayını | NORMAL süzülür, ACİL geçer | ✓✓ |
| F | Eski `--genis --durdurucu-da` birlikte verilince | çökmeden normal biter (no-op) | ✓ |
| G | `--tur` ile pencere kapanmadan süreç biterken havuzda mesaj varsa | çıkıştan önce boşaltılır, KAYBOLMAZ | ✓✓ |

## 🔴 Sınama sırasında bulunan ve düzeltilen gerçek kusur — HAVUZ KAÇAĞI

Senaryo G'yi yazarken ölçüldü: `--toplu` penceresi kendiliğinden kapanmadan
süreç `--tur` (ya da `--cik`) ile çıkarsa, o ana kadar havuzda biriken
EŞLEŞMİŞ mesajlar hiç basılmadan giderdi. Daha kötüsü: yeniden kurulan bir
bekçi o mesajları dosyadan `gorulen`e tekrar dolduracağı için **bir daha
hiç bildirmezdi** — sessiz kayıp, kendini asla göstermeyen türden.

Koordinatörün gerçek kullanımı (`Monitor` + `--toplu 1800`, `--tur`/`--cik`
vermeden sürekli koşan) bu yolu normalde tetiklemez, ama süreç herhangi bir
sebeple (yeniden kurulum, kesinti) biterken havuz dolu olabilir. Çare: her
çıkış yolundan önce havuz boşaltılıyor (boşsa yine hiçbir şey basmıyor).
Bu, `CLAUDE.md D010` — *"yeni yazılan denetim iki yönde de sınanmadan
çalışıyor sayılmaz"* — kuralının doğrudan uygulaması: sınamak olmasa bu
kusur teslim edilmiş olacaktı.

## Değişen dosyalar

- `arac/tahta_bekci.py` — mantık + dosya başı KULLANIM notu güncellendi.
- `denetim/ARAC-BEKCI-0917.md` — bu rapor.

Gerçek `oturumlar/tahta.json`/`defter.json` OKUNDU (defter aliasları için)
ama YAZILMADI. Geçici test dosyaları sistem temp dizinindeydi, depoya
girmedi.

## Teslim

İki dosya da yalnız bu oturumun (SONNET HAZIR KITA 1010) ürettiği dosyalar;
`§7` gereği ADIYLA commit edildi. Teslim mesajı tahtaya (`--kime "1.MURAT"`)
tek mesaj olarak yazıldı.

---

## EK — 18 Eylül 2026: STDOUT/STDERR ayrımı (1.MURAT'ın ek işi)

**Ölçülen kök sebep (1.MURAT'ın mesajı):** Monitor yalnız stdout'u bildirim
yapıyor; bekçinin açılış banner'ı (`[BEKCI] nöbette…`) da stdout'a
basıyordu. Sonuç: her kurulumda, hiçbir gerçek mesaj gelmeden, banner tek
başına bir bildirim üretiyor, oturum uyanıp "bekliyorum" yazıyor, Monitor
30 dakikada zaman aşımına uğrayıp sessizce yenileniyor ve döngü — banner →
uyan → "bekliyorum" → 30 dk → banner — sürekli tekrarlıyordu. Bekçinin tek
görevi gerçek mesaj gelince uyandırmaktı; kendi başlangıç sesi bunu ihlal
ediyordu.

**Yapılan değişiklik:**
1. Yeni `_diag()` fonksiyonu — `_bas()`'ın stderr ikizi (aynı çift savunma,
   aynı encoding güvenliği). `sys.stderr` de UTF-8'e çevriliyor.
2. **STDOUT'a artık YALNIZ gerçek mesaj içeriği gider:** anlık uyandırma
   satırı, `--toplu` özet satırı, çıkış-öncesi havuz boşaltma satırı.
3. **STDERR'e taşınanlar** (hepsi bilgi/teşhis, gerçek mesaj değil): açılış
   banner'ı, "defter okunamadı" uyarısı, ADRES-TUZAĞI uyarısı, "çıkıyorum"/
   "tur bitti" durum satırları, kullanım hatası satırları. Monitor'ün kendi
   belgesi: *"Stderr goes to the output file (readable via Read) but does
   not trigger notifications"* — hiçbir şey kaybolmuyor, sadece uyandırmıyor.
4. Anlık uyandırma satırı biçimi sadeleşti: eski iki satırlı
   `🔔 [TAHTA] no · kimden → kime · cins\n   gövde[:400]` yerine **tek satır,
   kısa**: `no kimden → kime: gövde[:120]`.
5. Dosya başı KULLANIM notuna eklendi: Monitor `timeout_ms` tavanı 30 dk ve
   süre dolunca sessizce yenilenir; **işsiz bir oturum bekçi KURMAZ, durur**
   — koordinatörün mesajı zaten (cross-session ya da görevlendirmeyle) ulaşır.

**Sınama** (`--tahta` ile geçici dosya, gerçek tahtaya dokunulmadı;
`stdout`/`stderr` AYRI pipe'larla okundu, birleştirilmeden):

| # | Senaryo | İddia | Sonuç |
|---|---|---|---|
| a | Başkasına yazılmış mesaj | STDOUT tamamen boş (`''`) | ✓ |
| b | Adıma yazılmış mesaj | STDOUT'ta TEK satır, `no kimden → kime: govde` biçimi | ✓✓ |
| c | `HERKES` yayını | STDOUT'ta TEK satır | ✓ |
| d | Herhangi bir koşu (mesajlı/mesajsız) | banner STDOUT'ta hiç yok, STDERR'de var | ✓✓ |

6 iddia, hepsi geçti. Önceki turun 13 iddiası (varsayılan uyandırma,
`--toplu`, ADRES-TUZAĞI, `--herkes-acil`, eski bayrakların no-op'luğu,
havuz-kaçağı düzeltmesi) stderr birleştirilmiş modda TEKRAR koşuldu ve
hepsi hâlâ geçiyor — biçim değişse de davranış korunmuş. Toplam: **7
senaryo grubu, 19 iddia, hepsi geçti.**

**Değişen dosya:** yalnız `arac/tahta_bekci.py` (bu rapor da güncellendi).
Koordinatörün talimatı üzerine **commit edilMEDİ** — "ben commitlerim"
dendi; teslim tek tahta mesajıyla yapıldı.
