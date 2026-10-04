# LAB-D8-OLCULEMEYEN-1004 — Değişmez 8'in "ölçülemeyen (hat, gün) 175" kovası: beyanlı mı, sessiz mi?

> Görev: YILDIRIM BAYEZIT, 4 Ekim 2026 (lead: `LAB-ARAC-DOGRULAMA-1004 §3.2`).
> Denetleyici: LAB IRTIBAT. **Yalnız ölçüm** — `denetle.py`ye dokunulmadı, kök neden
> aranmadı. Ortam: `main` = `0e22a060`, `kodla.py coz-c` ile üretilmiş
> `devletler_harita.js`/`donemler.js` (izlenmiyor), `denetle.degismez8(Y)` doğrudan
> çağrıldı (oturum karalama alanında `d8_175.py`).

## 0. Öngörü (ölçümden önce, koordinatörün çerçevesi)
Soru: 175 bilinçli/beyanlı bir kova mı (dokunulmaz) yoksa `konum` gibi basılıp hükme
girmeyen sessiz bir atlama mı (`olculemedi()`ye bağlanır)?

## 1. Kod — kova NEDİR ve NEREYE gider
- **Tanım** (`denetle.py:4293-4305`): her D kaydı için iki gün (`f` ve `t`'den bir gün önce)
  ölçülür; o gün hattın kutusunda **sol ya da sağ tarafın gövdesi bulunamazsa**
  `olculemeyen.append((hat, gün))` ve `continue` — o (hat, gün) için 8a hiç sorulmaz.
- **Basım** (`:4447-4449`): `i ayrı kovalar (ihlal DEĞİL, sayılır): … ölçülemeyen (hat, gün) N`.
- **Hüküm:** `ihlal = na > BEKLENEN_D8A or nb > BEKLENEN_D8B` (`:4442`) — `olculemeyen`
  hükme **girmiyor**. Tavanı **yok**, `olculemedi()`ye **bağlı değil**, adları **basılmıyor**
  (`--ayrinti` dalı da yalnız `R["a"]`yı döküyor, `:4466-4469`).
- **Beyan izi:** kod yorumunda iki tarihli ölçüm var — 27 Eyl "ölçülemeyen (hat, gün) 177"
  (`:3984`) · 1 Ekim "175" (`:4001`). Yani sayı **biliniyor ve izleniyor**, ama yalnız
  yorumda; artışı kapı görmez.

## 2. Ölçüm — 175'in içi
```
D kaydı (iki taraflı)  450 · ölçülen (hat, gün) 725 · ölçülen hat 372 · ölçülemeyen (hat, gün) 175
175 → 97 farklı hat
   🔴 TAM KÖR (hiçbir günü ölçülemeyen)   78 hat · 156 (hat, gün)
      yarım (bir günü ölçülmüş)            19 hat ·  19 (hat, gün)
175'in sınıfı:      E 98 · C 61 · D 16
tam körün sınıfı:   E 43 · C 28 · D 7       (D8_SINIF = D, E, F ⇒ 50 tam kör hat TAVAN SINIFINDA)
defter evreni 372 hat:
   tam kör & defterde DEĞİL      72  (bunların D/E/F olanı 46) ⇒ evrene HİÇ girmemiş
   tam kör & defterde OLAN        6  ⇒ evrendeydi, bugün ölçülmüyor:
      d1918-kenya-almanya-dogu-afrika · d1919-pl-ro-fiili · d1923-pl-ro ·
      d1923-si-ih-2 · g4-bna-us-bati-2 · gdasya-si-ih-pakchan-1868
```
**Taraf ölçümü (kök neden DEĞİL, yön göstergesi):** tam kör hatlarda geçen 9 taraf,
ölçülen 372 hattın **hiçbirinde** geçmiyor — gövdesi bu sorunun hiçbir kutusunda/gününde
bulunamamış adaylar:
`bogdan · guney-afrika-birligi · honduras-cumhuriyeti · ingiliz-hondurasi ·
kosta-rika-cumhuriyeti · kuba-cumhuriyeti · misir-kavalali · nikaragua-cumhuriyeti ·
tunus-beyligi-fransiz`. En sık kör taraflar: `ingiltere` 24 · `hollanda-dogu-hint` 24
(ikisi de ölçülen hatlarda da var ⇒ bunlarda sebep taraf değil, kutu/gün).

## 3. 🔴 İkinci sessiz sayaç — `iki_tarafsiz`
`:4227-4229` yorumu: *"🔴 SAYILIR, SESSİZCE ELENMEZ: iki taraflı olmayan kaydın karşı
yakası tanımsızdır"* — sayaç hesaplanıyor ve `R`'ye konuyor (`:4384`), ama
`degismez8_rapor` onu **hiçbir yerde basmıyor** (`grep iki_tarafsiz` → 4 satır, hiçbiri
`print`). Bugünkü değer **0** (450/450 iki taraflı) ⇒ bugün zararsız, ama yorumun vaadi
kodda tutulmuyor: ilk iki tarafsız D kaydı geldiğinde **sessizce** elenir.

## 4. Sonuç — ölçüm (hüküm koordinatörde)
| özellik | `konum` (sabah onarılan) | `ölçülemeyen (hat, gün)` | `iki_tarafsiz` |
|---|---|---|---|
| basılıyor mu | evet ("ATLANDI") | evet (sayı) | **hayır** |
| hükme giriyor mu | hayırdı → onarıldı | **hayır** | **hayır** |
| tavanı var mı | — | **yok** (yalnız yorumda 177→175) | yok |
| adları dökülüyor mu | — | **hayır** (`--ayrinti` de dökmüyor) | — |
| bugünkü etki | soru tamamen sorulmuyordu | tavan sınıfında **50 hat** hiç ölçülmüyor; 6'sı defter evrenindeydi | 0 kayıt |

⇒ 175 **yarı beyanlı**: sayısı basılıyor ve yorumda izleniyor (sessiz değil), ama
**kapıya bağlı değil** — 8a/8b ✓ derken tavan sınıfındaki 50 hattın (D 7 + E 43) hiçbir
günü sorulmamış; sayı 175'ten 500'e çıksa kapı yine ✓ der. `konum`dan farkı: o tamamen
sessizdi, bu görünür ama yaptırımsız. `iki_tarafsiz` ise yorumu ile kodu çelişen,
**tamamen sessiz** bir sayaç (bugün 0).

## 5. Bulunamayan
- 78 tam kör hattın kök nedeni (gövde eşleme mi, `harita:` anahtarı mı, kutu mu, boya
  borcu mu) — **ölçülmedi** (görev dışı; §2'deki 9 taraf yalnız yön göstergesi).

## 6. Ek ölçüm — 6 "defterde olup bugün kör" hattın defterdeki birimleri
```
defter (DEGISMEZ8_DEFTERI) `a` birimi: 1611   ← 27 Eyl ölçümü; bugünkü tavan 1517
  d1918-kenya-almanya-dogu-afrika  1 · d1919-pl-ro-fiili 2 · d1923-pl-ro 2
  d1923-si-ih-2 0 · g4-bna-us-bati-2 4 · gdasya-si-ih-pakchan-1868 0      toplam 9
```
⇒ Defterde **9 birim** taşıyan 6 hat bugün hiç ölçülmüyor; bu 9 birim bugünkü 1517'ye
girmiyor. `:4002-4005` yorumu 1611→1517 düşüşünü "iyileşme gerçek" diye kaydediyor —
o 94 puanın **en az 9'u** iyileşme değil, **körleşme** olabilir (ölçülmedi ≠ düzeldi).
⚠️ Ayrıca defterin `a` listesi (1611) bugünkü tavanla (1517) aynı ölçümden değil, `hatlar`
(372) ise bugünkü ölçülen hat sayısına eşit — defterin iki alanı farklı tarihli olabilir;
**ölçülmedi**, yalnız sayılar yan yana kondu.

---

## 🔴 ORTAM DÜZELTMESİ — 4 Ekim 2026, 13:04–13:12 (yeniden koşu)
**Bu raporun ilk sürümü YANLIŞ ORTAMI beyan ediyordu.** git reflog: 12:38:43'te commit
için `lab-odak-1003`e (65a887cc tabanlı, `main`in ~225 commit gerisinde) geçildi ve
ölçümler orada koştu. Gövde (`kodla.py coz-c`, gitignore'da) `0e22a060`ten üretilmişti,
ama `denetle.py` (449+/25− satır farklı), D hatlarını taşıyan 8 paket dosyası, 2 yerleşim
dosyası ve `devletler.js` ESKİ daldandı. Rapordaki "main 0e22a060" ibaresi o koşu için
doğru değildi.
**Yeniden koşu:** yerel `lab-1004` dalı = `0e22a060`; her betiğin çıktısının başına ve
sonuna `git rev-parse --short HEAD` basıldı (`HEAD=0e22a060 … HEAD_SONRA=0e22a060`).
**Sonuç: bu rapordaki bütün sayılar temiz ağaçta BİREBİR aynı çıktı.** Tek fark:
`d8_235b` yerleşim dizini "yeni 2" → "yeni 4", değişen/yeni koordinatlı 130 → 132;
uzaklık dağılımları değişmedi. Bağımsız doğrulama: UMIT kendi makinesinde `origin/main`e
rebase edilmiş ağaçta 78/19/175/50'yi aynı ölçtü (koordinatör bildirimi).
