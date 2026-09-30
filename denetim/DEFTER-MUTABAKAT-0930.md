# DEFTER-MUTABAKAT-0930 — KAPAT hükümleri CEVAP.json defterlerine geçirildi

*30 Eylül 2026 · koordinatör YILDIRIM BAYEZIT · makine okunur: `denetim/DEFTER-MUTABAKAT-0930.json`*

## Defter ÖNCE / SONRA

`py C:/claudemre/kutu/ozet.py atlas`:
```
ÖNCE   81 paket · 0 işlenmemiş · 1 yarım · 839 açık madde · 🔴 56 karar bekliyor
SONRA  81 paket · 0 işlenmemiş · 1 yarım · 496 açık madde · 🔴 60 karar bekliyor
```
Ağaç gezici ile hüküm dağılımı (81 atlas defteri, 1566 madde; KAPALI = `asama.KAPALI`):
```
ÖNCE   KAPALI  776 · AÇIK 790 · sirada 555 · cozuldu 542 · zaten-dogru 184 · kosu-bekliyor 121
       senin-kararin 56 · olculecek 55 · tekrar 17 · cozulemedi 15 · gerek-yok 9 · bayat 5
       onay-bekliyor 3 · kapsam-disi 2 · once-cozuldu 2
SONRA  KAPALI 1116 · AÇIK 450 · cozuldu 853 · sirada 305 · zaten-dogru 193 · olculecek 78
       senin-kararin 60 · bayat 21 · tekrar 17 · cozulemedi 16 · gerek-yok 9 · once-cozuldu 5
       kosu-bekliyor 5 · kapsam-disi 2 · onay-bekliyor 2
```
ozet.py'nin "açık" sayısı benimkinden 49 (önce) / 46 (sonra) fazla. ozet kendi ölçütüyle
sayıyor; bu fark bu işten önce de vardı, ben açmadım.

## Evren — altı rapor, 733 madde (489 değil)
```
KAPAT-KUYRUK-0930      244   ⚠️ ayrı şema: parti → LİSTE, hüküm `yeni_hukum` alanında
KAPAT-0052-0930        128   kökte `madde`
KAPAT-0081-82-0930     114   partiler → liste → madde
KAPAT-0035-42-68-0930   88   partiler → parti → madde
KAPAT-ORTA-0930         87
KAPAT-0075-76-0930      72   partiler → parti → H-xxxx (madde katmanı yok)
```
Görevdeki 489, KUYRUK dışındaki beş dosyanın toplamı. `ACIK-BIRLESIK-0930.json` da
KUYRUK'u saymıyor ve her maddede `parti:"?"`, `madde:"?"` yazıyor, yani eşlemede
kullanılamaz. Bu yüzden altı raporu doğrudan gezdim: parti ve madde yoldan ya da alandan
çözüldü, çözülemeyen 0, mükerrer anahtar 0.

## Eşleme
| kova | madde |
|---|---|
| eşlendi ve yazıldı (parti-emrelic-*) | **724** |
|   hüküm değişti | 509 |
|   hüküm aynı, yalnız damgalı not eklendi | 210 |
|   delilsiz `cozuldu`, hüküm DEĞİŞMEDİ, not eklendi | 5 |
| eşlenemedi, defterde yok | **0** |
| yetki dışı, yazılmadı (`parti-000N`) | **9** |
| `parti-kasa-*` | 0, klasörler açılmadı |

61 defter dosyası yazıldı. Yedekler oturumun scratchpad'inde `yedek/` altında, 74 dosya.
Biçim korundu: indent 1, `ensure_ascii=False`, sonda satır sonu yok. Her dosya
yazılmadan önce `json.loads` ile sınandı.

**Yazım kuralı:** Var olan `not` silinmedi. Sonuna
`[30 Eyl 2026 KAPAT-xxx] hüküm eski → yeni. <rapor notu> delil: <dosya:satır> (denetim/KAPAT-xxx.json)`
eklendi. Hüküm değişince `onceki_hukum` = eski hüküm oldu; alan önceden doluysa eski
değeri nota damgalandı. `delil` alanı yalnız boşsa dolduruldu. Yazılan her kelime
`asama.HUKUMLER` içinde. `kapandi` hiçbir yere yazılmadı; Emre'nin damgaları
`durum.json`da durduğu için ona hiç dokunulmadı.

**Delil ölçütü:** `dosya.uzantı:satır`. `:~346` ve `app.js ~13466` biçimleri de kabul
edildi, çünkü KUYRUK raporu satırların ~30 kayabileceğini yazıyor ve delilde işlev ya da
id adı da var.

## Delilsiz olduğu için `cozuldu` YAZILMAYAN 5 madde (adıyla)
| madde | rapor | defterde kaldı | eksik |
|---|---|---|---|
| parti-emrelic-0068/H-0012 | cozuldu | sirada | dosya + commit var, satır yok |
| parti-emrelic-0052/H-0077 | cozuldu | sirada | `girdi.yukle()` ölçümü, satır yok |
| parti-emrelic-0052/H-0081 | cozuldu | sirada | aynı |
| parti-emrelic-0052/H-0095 | cozuldu | sirada | dosya adı var, satır yok |
| parti-emrelic-0080/H-0010 | cozuldu | kosu-bekliyor | koşu 18 ölçümü, satır yok |

## Dikkat
- **Kapalıdan açığa 3 madde (`tekrar` → `sirada`):** 0035/H-0068, 0019/H-0047,
  0037/H-0010. Bugünkü rapor hükmü uygulandı. `tekrar` KAPALI sayıldığı için bu üçü
  "açık" sayacını 3 artırdı.
- **Rapor–defter eski hükmü uyuşmayan 1 madde:** 0081/H-0044. Rapor
  `kosu-bekliyor` dedi, defterde `senin-kararin` yazıyordu. Yeni hüküm zaten
  `senin-kararin`, değişen bir şey yok.
- **Delil rozeti:** `cozuldu` olan maddelerin bir kısmında eski `delil_atlas` alanı
  (`iz-yok` / `acik`) duruyor. `asama.delil_of` rozeti oradan okuyor. Bu alan
  `ARAC-PAKET-DENETIM-0910` ölçümünün çıktısı; elle yazmadım, yeniden koşulması gerekir.
- **Yetki dışı 9 madde:** parti-0002/H-0005, H-0011, H-0014 · parti-0003/H-0008,
  H-0022 · parti-0004/H-0011 · parti-0006/H-0001, H-0008, H-0010. KUYRUK bunlara hüküm
  yazdı, ama şartname yalnız `parti-emrelic-*` dediği için yazmadım. Hükümleri
  `DEFTER-MUTABAKAT-0930.json` → `yetki_disi` altında.
