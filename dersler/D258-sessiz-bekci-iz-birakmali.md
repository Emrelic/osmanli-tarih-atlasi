# D258 — Sessiz olması gereken bir nöbetçi, İZ bırakmazsa ölümü görünmez olur

> 3 Ekim 2026 · ODAK-KAPAT vakası · ölçen ve düzelten YILDIRIM BAYEZIT

## Vaka

ODAK-KAPAT işini bitirdi, teslimini tahtaya yazdı (M-5737), commit etti
(`dace5c31`). Sonra bekçisi **çıkış 4** ile düştü. Oturum 9 saat uyanmadı.
Koordinatör (ben) sessizliği *"işçi takıldı"* diye okudu ve gereksiz bir
uyandırma turu yaktı — oysa teslim **oturumun açılışındaki `git log`da**
duruyordu ve ben ona bakmadım (`D224`ün koordinatör tarafı).

**Çıkış 4 ölçüldü ve betikten GELMİYOR:** `tahta_bekci.py` `main()` yalnız
`0` / `2` / `3` dönüyor, kodda `return 4` yok, döngü sonunda düşse `None` ⇒
0 verir. ⇒ Süreç **dışarıdan** düşürülmüş. Sebebi ne olursa olsun kök kusur
başkaydı.

## Kural

**Sessiz kalmak ZORUNDA olan bir süreç, canlılığını bir DOSYAYA yazmak
zorundadır.** Bekçi konuşamaz — §7.2 ④ bunu yasaklıyor ("boş uyanış, dolu
turdan ucuz değildir"). O hâlde çare *"konuşsun"* değil **"iz bıraksın"**:
damga kimseyi uyandırmaz, ama ÖLÇÜLEBİLİR.

```
ölü bekçi  ⇄  sessiz bekçi        → ayırt edilemiyorsa ikisi de SESSİZLİKtir
iz bırakan bekçi                  → sessizlik bir ÖLÇÜME dönüşür
```

⚠️ **Var olan `.bekci_son_<AD>.txt` bu soruyu CEVAPLAMIYORDU** — o yalnız
`--cik` ile **çıkışta** yazılıyor, yani *"son nabız"* değil *"son ölüm"*
damgası. Ters bilgi veren bir alan, alan olmamasından kötüdür.

## Eşik, ARALIĞIN KATI olmalı — sabit saniye yarısını yanlış etiketler

```
ara =   60 sn bekçi → 20 dakika sessizlik = 20 tur kaçırılmış = ÖLÜ
ara = 1800 sn bekçi → 20 dakika sessizlik = 1 turdan az      = CANLI
```
Sabit bir saniye eşiği yazılsaydı ikisi aynı hükmü alırdı ve yarısı yanlış
olurdu. `bekci_olc.py` bu yüzden `CANLI_KAT = 2.5` · `KUSKU_KAT = 5.0`
kullanıyor. Gerileme sınavı (③) tam bunu ölçüyor.

## Üç hâl, üçü ayrı — ikisini birleştirmek yanlış alarm üretir

| hâl | anlamı |
|---|---|
| `CANLI` | nabız ≤ 2,5 tur |
| `KUSKULU` | ≤ 5 tur |
| `OLU` | daha eski ⇒ **oturum tahtadan UYANMAZ**, görev `send_message` ile gider |
| `CIKTI` | **düzgün çıkış** (mesaj geldi / tur doldu) — ölüm DEĞİL |
| `OLCULEMEDI` | damga bozuk/okunamadı — "ölü" YAZILMAZ |

`CIKTI`yı `OLU`dan ayırmamak, her mesaj tesliminden sonra yanlış alarm
basardı. `OLCULEMEDI`yi `OLU` saymak ise `D202` ailesinin hatası:
*ölçülemedi ≠ yok ≠ temiz.*

## Damga PAYLAŞILMAZ

`oturumlar/bekci/` **gitignore'da.** İçinde PID ve makineye özel canlılık
var; commitlenirse EMRELIC, KASA'nın **bayat** damgasını okuyup *"bekçi
canlı"* sanar. `agy/` · `oturumlar/ag.json` ile aynı sınıf değil (gizlilik
değil **doğruluk**) ama sonucu aynı: paylaşılmaması gereken veri.
📌 `§7.3 ⑦`nin ölçüm yüzü: **yanlış alanla ölçmek, ölçmemekten daha
tehlikelidir — sayı verir ve güven telkin eder.**

## Sınav — dokuz soru, iki yönde

`py denetim/ARAC-BEKCI-NABIZ-SINAV-1003.py`
Taklit damgalar yetmez: **gerçek bekçi koşturulup** damgası okundu
(`--ara 2 --tur 1 --cik` → `durum:"cikti"`, `sebep:"tur-doldu"`, alet
`CIKTI` dedi). Bir aletin kendi sınavını geçmesi, sahada çalıştığını
söylemez.

## Türetilen koordinatör kuralı

Bir oturumu *"sessiz/takıldı"* ilan etmeden ÖNCE sırayla:
```
① git log / tahta  — teslim ZATEN gelmiş mi?        (`D224`)
② py arac/bekci_olc.py — bekçisi CANLI mı?
③ ancak ikisi de hayırsa uyandır
```
Ben ①'i atladım ve bir tur yaktım. Alet ②'yi artık mümkün kılıyor.
