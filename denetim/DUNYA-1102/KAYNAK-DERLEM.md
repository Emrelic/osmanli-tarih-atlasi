# Yerel kaynak derlemi (GÖREV-DÜNYA-1102) — KASA, 2 Kasım 2026

Emre'nin isteği: otomatik erişimi engelleyen sitelerde **engeli aşmadan** meşru yoldan kaynağa ulaşmak.
Bot engeli aşma, kimlik taklidi, CAPTCHA çözme YAPILMAZ.

## Kurulu (KASA, `D:/kaynak-derlem/`, depo DIŞI, ~325 MB)
| Klasör | İçerik | Lisans | Kaynak |
|---|---|---|---|
| `perseus-greek` | Herodotos, Thukydides, Arrianos, Diodoros, Polybios, Strabon, Plutarkhos, Pausanias, Ksenophon, Josephus, Appianos, Dion Kassios, Lukianos — Yunanca + İngilizce TEI | CC BY-SA 4.0 | github.com/PerseusDL/canonical-greekLit (sparse) |
| `perseus-latin` | Livius, Justinus, Tacitus, Caesar, Velleius, Suetonius, Ammianus, Curtius… | CC BY-SA 4.0 | github.com/PerseusDL/canonical-latinLit (sparse) |
| `cin-takvim` | Yuk Tung Liu Çin takvimi: MÖ 104 sonrası her Çin yılının ay başları | MIT | github.com/ytliu0/ChineseCalendar |

Kurulum (başka makinede tekrar için):
```
git clone --depth 1 --filter=blob:none --sparse https://github.com/PerseusDL/canonical-greekLit.git perseus-greek
git -C perseus-greek sparse-checkout set data/tlg0016 data/tlg0003 data/tlg0074 data/tlg0060 data/tlg0543 data/tlg0099 data/tlg0007 data/tlg0525 data/tlg0032 data/tlg0526 data/tlg0551 data/tlg0385 data/tlg0062
git clone --depth 1 https://github.com/ytliu0/ChineseCalendar.git cin-takvim
```

## Araçlar (`arac/`)
- `py -I arac/perseus_ara.py <yazar> <regex> [--dil eng|grc|lat] [--en N]` · `--yer 1.163` bölüm metni.
  Atıf biçimi: "Herodotos 1.163.2 (Perseus, CC BY-SA)".
- `py -I arac/cin_gun.py <yıl> <ay> <ganzhi> [artik]` → (Jülyen/Gregoryen gün, takvim, ayın kaçıncı günü).
  `--sina`: bilinen tarihlerle sınar. Sınandı: Tang 618 五月甲子 = 618-06-18 · Cao Wei 220 十月庚午 = 220-12-10 ·
  Jin 265 十二月丙寅 = 266-02-08 · Sui 581 二月甲子 = 581-03-04 · 1644 三月丁未 = 1644-04-25 (G) · 2000-01-01 = 戊午.
  ⚠️ Tablo güney/merkez takvimi izler; Kuzey hanedanlarında (Kuzey Wei/Zhou/Qi) ay sınırı ±1 gün sapabilir —
  ayın 1-2. ya da 28-30. gününe düşen sonuç beyanla yazılır. MÖ 104 öncesi kapsanmaz.
  Japonya/Kore için ayrı tablo değil; sonuç atlasla çelişirse uygulanmaz.

## İlk kullanım (bu commit)
- 9 künyenin başlangıç günü (Xin, Liu Song, Sui, Kuzey Zhou, Doğu Wei, Kuzey Qi, Sonraki Tang, Wu Zhou, Kuzey Han)
  — 8'inde yerleşim dönemleri zaten bu günde başlıyordu (künyede yalnız `YYYY-01-01` yer tutucu vardı).
- Xin: Hanshu 十二月朔癸酉 = **15 Ocak 9** (yaygın "10 Ocak 9" bu ganzhi ile uyuşmuyor; 10 Ocak = 戊辰).

## Hâlâ kapalı (meşru yol bekliyor)
- Encyclopaedia Iranica (403) → uygulama içi tarayıcıyla insan hızında okuma ya da Emre'nin kurumsal erişimi.
- ctext.org → resmî API anahtarı (Emre alırsa).
- Academia Sinica sinocal (401) → cin_gun.py yerine geçti.
