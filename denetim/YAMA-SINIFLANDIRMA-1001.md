# YAMA SINIFLANDIRMASI — 1 Ekim 2026, tam inşa koşusu öncesi

KOSU-UMIT `denetim/` altındaki 19 `.diff` dosyasını `git apply --check` ile
sınadı; 5'i ne uygulanabilir ne arşivlenebilir çıktı. Bu belge o beşini
**amaçlarını okuyarak** sınıflandırır.

🔴 Beşi EMRELIC'te de yeniden ölçüldü — UMIT'in ölçümü doğrulandı (`D251`:
başka makinenin ölçümü bu makinenin durumunu söylemez).

---

## 🔴 ÖNCE: ÜÇ SINIFLI TABLO EKSİKTİ, DÖRDÜNCÜ SINIF VAR

UMIT'le kurduğumuz tablo şöyleydi:
```
ileri 0           → uygulanabilir
ileri 1 · geri 0  → zaten uygulanmis (ters yon tutuyor)
ileri 1 · geri 1  → GERCEK CAKISMA
```
Ölçüm üçüncü satırı çürüttü. `ileri 1 · geri 1` **iki ayrı durumu** birden
gösteriyor:
```
ileri 1 · geri 1  ❓ BELIRSIZ
   (a) gercek cakisma — amac HENUZ kodda DEGIL
   (b) ZATEN UYGULANMIS ama BAGLAM O KADAR KAYMIS ki ters yon de tutmuyor
```
⇒ **Ayırt etmenin tek yolu yamanın AMACINI okuyup kodda ARAMAKTIR.**
Mekanik ölçüm burada yetmiyor. (`ACILIS-ANIM` tam (b) çıktı.)

---

## ① `ACILIS-ANIM-0081-yon.diff` → **ZATEN UYGULANMIŞ** · arşive

Amacı tek satır: açılış küresinin dönme yönü.
```
yama:        -@keyframes kureDon { to { background-position: -360px 50%, 0 0; } }
             +@keyframes kureDon { to { background-position:  360px 50%, 0 0; } }
olculen:     css/style.css:3082  →  background-position: 360px 50%, 0 0
```
⇒ Amaç **kodda VAR**. Yama 2925. satırı hedefliyor, orada artık yerleşim zaman
çubuğu var — dosya ~150 satır kaymış, o yüzden iki yön de tutmuyor.
**HÜKÜM: arşive** (`denetim/arsiv-yama/`), koşuya girmez.

## ② `ARAYUZ-MADDE-0930-kapi-dom-sozlesmesi.diff` → **BEKLİYOR** · yeniden üretilmeli

Amacı: `denetle_yayin.py`ye **DOM sözleşmesi denetimi** eklemek — `js/`nin
`getElementById` ile aldığı ve `.options` / `.value` / `.checked` okuduğu her
id, `index.html`de o özelliği TAŞIYAN bir etikette mi?
```
olculen:  arac/denetle_yayin.py'de `dom_sozlesmesi` → 0 gecis
                                   `_DOM_OZELLIK_ETIKET` → 0 gecis
```
⇒ **Amaç kodda YOK.** Gerçek çakışma; `denetle_yayin.py` o bölgede değişmiş.
📌 Ve bu YENİ BİR DENETİM SINIFI: bugün hiçbir kapı *"js bu id'den
`.options` okuyor, ama index.html'de o id bir `<div>`"* diye sormuyor. Sessiz
arayüz kusuru üretir.
**HÜKÜM: yeniden üretilecek** (hedef bölge okunup yeni diff çıkarılır).

## ③ `TASLAK-YAMA-TOBLER-0912.diff` → **YAMA DEĞİL** · `.diff` kümesinden çıkar

Dosyanın ilk satırı: *"TASLAK YAMA — arac/uret_petek.py'ye İNECEK
değişikliğin taslağı (diff biçiminde, motor tek elden — 1.MURAT uygular)"*.
İçinde düzyazı başlık, numaralı maddeler ve bir diff parçası var.
`git apply` → *"No valid patches in input"* ⇒ doğru teşhis: bu bir **tasarım
belgesi**, uygulanabilir bir yama değil.
**HÜKÜM: uzantısı `.diff` olduğu için her `--check` taramasına giriyor ve
gürültü üretiyor. `.md`ye çevrilecek** ya da `denetim/taslak/` altına alınacak.
⚠️ İÇERİĞİ DEĞERLİ (Tobler yürüyüş fonksiyonu, kenar temelli hesap) —
silinmez, yalnız yama kümesinden çıkar.

## ④ `YAMA-DENETLE-HARITA-0905.diff` → 🔴 **AMACI BU GECE ELLE ÇÖZÜLDÜ** · fikir ALINACAK

`git apply` → *"corrupt patch at line 54"*. Ama içeriği okununca:

> *"Veri `d:` alanına künye `id`si yerine BOYA ANAHTARINI (`harita:`)
> yazabiliyor ve bu MEŞRU… ⇒ Ama `Değişmez 4` o dönemleri `kunyesiz` kovasına
> atıp `continue` ediyordu: **12.438 dönemin 915'i (%7,4) HİÇ SINANMIYORDU.**"*

🔴 **BU, BU GECE KASA'NIN YENİDEN KEŞFETTİĞİ KÖRLÜĞÜN AYNISI.** 5 Eylül'de
ölçülmüş, çaresi yazılmış, yama **bozuk** olduğu için 26 gün `denetim/`
altında beklemiş; bu gece KASA onu yeniden ölçtü (1131 dönem / 23 kimlik) ve
koordinatör çareyi **sıfırdan** yazdı (`f8c522a7`).
⇒ **Bedel: bir ölçüm + bir uygulama, iki kez.** Ve sebebi tek bir bozuk
  dosyaydı — hiçbir kapı "bu `.diff` ayrıştırılabiliyor mu" diye sormuyordu.

### 🔴 VE İÇİNDE BENİM YAPMADIĞIM BİR FİKİR VAR — `_HARITA_UZAYI`
Benim çözümüm: çok künyeli bir `harita:` anahtarında tarihe göre seç;
seçilemezse `cok_harita` kovasına yaz (ölçülemedi).
Eylül yamasının çözümü: **o anahtarı paylaşan künyelerin pencerelerinin
BİRLEŞİMİYLE sına.** Kendi uyarısı: *"Birleşim KASTEN geniştir — amaç ihlal
ÜRETMEK değil, bugün hiç sınanmayan dönemleri EN AZ bir sınavdan geçirmek."*

⇒ İkisi **çelişmiyor, tamamlıyor:**
```
birlesim sinavi   → kaba ama SIFIR yerine BIR sinav verir
cok_harita kovasi → kesin sinavin YAPILAMADIGINI kayda gecirir
IKISI BIRLIKTE    → birlesimin DISINA dusen ihlal OTER,
                    icinde kalan "kesin olculemedi" diye BEYANLI kalir
```
**HÜKÜM: yama arşive** (biçimi bozuk, hedefi kaymış), **fikri AYRI bir kalem
olarak uygulanacak** — `sirbistan`ın bugün sınanmayan 10 dönemi bunu bekliyor.

## ⑤ `YAMA-DENETLE-ISG-0905.diff` → **BEKLİYOR** · yeniden üretilmeli

`git apply` → *"corrupt patch at line 19"*. Amacı: `degismez4`ün taramasına
`isg:` (işgal) dönemlerini katmak —
```
+ [("isg", _p) for _p in (y.get("isg") or [])]
```
```
olculen:  degismez4 govdesinde `isg` → 0 gecis
```
⇒ **Amaç kodda YOK.** Bugün `Değişmez 4` işgal dönemlerini **hiç sınamıyor**:
bir işgal dönemi ölmüş bir devletin rengini boyuyor olsa hiçbir denetim
sormaz. (`Değişmez 2i` işgal SENKRONUNU sorar, hayalet devleti sormaz.)
📌 Aynı ailenin üçüncü üyesi: `isg:` kategorisi **önce Değişmez 2'ye** de
girmiyordu (7 Ağustos 2026 vakası, `denetle.py` yorumunda yazılı).
**HÜKÜM: yeniden üretilecek.**

---

## ÖZET VE SIRA

| yama | hüküm | koşuya girer mi |
|---|---|---|
| `ACILIS-ANIM-0081-yon` | zaten uygulanmış → arşiv | hayır |
| `ARAYUZ-MADDE-0930-kapi-dom-sozlesmesi` | **yeniden üret** | evet (sonra) |
| `TASLAK-YAMA-TOBLER-0912` | yama değil → `.diff` kümesinden çıkar | hayır |
| `YAMA-DENETLE-HARITA-0905` | arşiv + **fikri uygula** (`_HARITA_UZAYI`) | hayır |
| `YAMA-DENETLE-ISG-0905` | **yeniden üret** | evet (sonra) |

## 🔴 YAPISAL ÇARE — tekrar 26 gün kaybedilmesin

Bir `.diff` dosyası **bozuk olabilir ve bunu kimse sormuyor.** `git apply
--check` yalnız elle koşturulduğunda görülüyor; bu gece de UMIT koşturduğu
için görüldü.
⇒ ÖNERİ (ayrı kalem): yayın kapısına ya da bir sınav betiğine tek satır —
`denetim/*.diff` dosyalarının her biri `git apply --check` ile sınanır ve
**"corrupt" / "No valid patches"** çıkan her dosya ADIYLA basılır. Uygulanıp
uygulanmaması ayrı mesele; **ayrıştırılabilir olması** bir biçim şartıdır ve
ölçülebilir.
📌 `D248`in kardeşi: koşturulmamış komut şartnameye yazılmaz —
**ayrıştırılamayan yama da yama kümesinde tutulmaz.**
