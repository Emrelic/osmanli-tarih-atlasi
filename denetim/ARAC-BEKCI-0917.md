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
