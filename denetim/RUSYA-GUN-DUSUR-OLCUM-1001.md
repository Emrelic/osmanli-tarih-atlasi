# RUSYA 15 GÜN-DÜŞÜRME — Değişmez 2 ölçümü (1 Ekim 2026)

Emre'nin onayıyla, YAZICI-KASA'nın `YZ-KIRLENME-1001-RUSYA-ONERI.json`
dosyasındaki **15 `gun-dusur`** kalemi uygulanmadan ÖNCE ölçüldü.
🔴 **Hüküm: 15'in 6'sı DÜŞÜRÜLMEMELİ, 9'u düşürülebilir.**

---

## ① DENETİM EVRENİ — risk Değişmez 2'de DEĞİL

```
olaylari_yukle()                        2165 madde
15 maddeden denetim evreninde görülen      0
```
`data/kronoloji_cok_rusya.js` denetimin olay evreninde **değil** (`CLAUDE.md §5`:
*"`kronoloji*.js` kronoloji KUYRUĞU — Değişmez 2 evreninde DEĞİL"*). Ve
Değişmez **2s** de aynı `O` kümesini okuyor (`denetle.py`, `degismez2(Y, O, …)`).

⇒ **Gün düşürmek Değişmez 2 / 2s / 2i'yi AÇAMAZ.** Belgeyi okumakla
yetinmedim, araca sordum — ikisi uyuştu.

🔴 **Ama bu bir güvence değil, bir UYARIDIR:** denetim bu dosyayı görmediği
için, buradaki bir bozulmayı **hiçbir kapı yakalamaz.** Riskin yokluğu değil,
ölçümün yokluğu.

## ② ASIL RİSK — maddenin KENDİ yerleşimi

Projenin çekirdek amacı (`CLAUDE.md §1`): *"bir madde okunduğunda haritada TAM
O değişim görünmeli."* Madde `1636-01-01` derken harita `1636-04-17`de
değişirse, **kronoloji ile harita birbirini doğrulamaz** — ve yukarıdaki
sebeple hiçbir denetim ötmez.

### 🔴 DÜŞÜRÜLMEMELİ — 6 kalem

| # | madde tarihi | konu | atlastaki kırılma | fark |
|---|---|---|---|---|
| 31 | 1636-04-17 | Tambov kalesi kuruldu | `tambov` **1636-04-17** | **0 gün** |
| 80 | 1864-06-12 | Türkistan (Yesi) alındı | `türkistan` **1864-06-12** | **0 gün** |
| 81 | 1864-09-22 | Çimkent alındı | `çimkent` **1864-09-22** | **0 gün** |
| 16 | 1500-07-14 | Vedroşa: Bryansk/Seversk | `bryansk` 1500-08-01 | 18 gün |
| 41 | 1648-10-14 | Nijneudinsk kışlağı | `nijneudinsk` 1648-10-01 | 13 gün |
| 65 | 1736-09-13 | Çelyabinsk kalesi | `çelyabinsk` 1736-09-02 | 11 gün |

📌 Üçünde fark **SIFIR gün**. İki bağımsız kayıt (kronoloji maddesi ve
yerleşim dönemi) aynı günü söylüyor ⇒ o gün bir yerden gelmiş, uydurma değil.
`§4` gereği **atlas kaynak sayılamaz** — ama atlasın kendi verisiyle çelişen
bir düzeltme yapmak da ayrı bir kusurdur.

**Çare — gün düşürmek yerine BEYAN:** `t:` korunur, `ic_not_t`ye yazılır:
> *gün kaynakta doğrulanamadı (BRE/mil.ru 403); atlasın yerleşim kaydıyla
> senkron için KORUNUYOR — yeniden kaynaklanacak*

Böylece `§4`ün sahte-kesinlik yasağı ile `§1`in senkron şartı **beyan ederek**
uzlaşır, gün uydurarak değil.

### ✓ DÜŞÜRÜLEBİLİR — 9 kalem
```
#28 Yakutsk · #30 Olyokminsk · #39 Ohotsk · #61 Perm (Yegoşiha) ·
#62 Yekaterinburg · #72 Karkaralı/Kökçetav     → adı atlasta VAR, çakışan kırılma YOK
#60 Ağrahan · #78 Kazakeviçevo · #85 İli (Kulca) → atlasta adı geçen yerleşim YOK
```

## ③ 🔴 KENDİ İLK ÖLÇÜMÜM ÇOK GENİŞTİ — kayda geçiyor

İlk betik *"maddenin tarihinin ±30 gününde HERHANGİ bir kırılma var mı"* diye
sordu ve **12/15'i riskli** gösterdi. Yanlış soruydu: `#16` Vedroşa
(Litvanya) için `Modon` ve `Koron` (Yunanistan, 1500 Osmanlı-Venedik savaşı)
kırılmalarını saydı — aralarında **hiçbir ilişki yok** ve o kırılmaların
kendi tanık maddeleri var.

Doğru soru *"maddenin ANLATTIĞI yerleşim o tarihte mi kırılıyor"*dur ve cevap
**12 değil 6** çıktı.

📌 `D247`in bir başka yüzü: **geniş bir soru da makûl bir sayı üretir.** 12
sayısı yanlış değildi — yanlış olan, onun "risk" diye adlandırılmasıydı.
Ölçümün kendisi değil, **ölçülen şeyin tanımı** kusurluydu.

## ④ SIRADAKİ
```
9 kalem  → gün düşürülebilir, uygulanabilir
6 kalem  → gün KORUNUR + `ic_not_t` beyanı yazılır
         🔴 ve ayrıca YENİDEN KAYNAKLANMALI: BRE/mil.ru bu makineden 403
           veriyor. Başka bir makineden (UMIT) denenebilir.
42 not-ekle · 20 kaynak kalemi → ayrı kalem, bu ölçümün dışında
```
⚠️ Dosya `data/kronoloji_cok_rusya.js` — **sahibi bu oturum değil** ve
denetim evreninde olmadığı için bir hata sessizce yaşar. Uygulanacaksa
`node --check` ve uygulama sonrası `odak_olc.py` şarttır.
