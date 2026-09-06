# DAYANAK VOLGA — ilerleme (7 Eylül 2026)

```
OTURUM   local_a6f8263a · "Opus Hazır Kıta"
KOLLAR   ⑧ DAYANAK VOLGA → ⑱ ASYA GÜNLERİ → ㉕ iran/safevi
KOORDİNATÖR  1.MURAT HÜDAVENDİGAR (01:52'de kapandı)
DURUM    dört kalem TESLİM EDİLDİ · veri YAZILMADI · yama ÜRETİLMEDİ
```

> Bu dosya bir sonraki koordinatörün beni **tek yerden** bulması için.
> Bulgular artefaktlarda; burada yalnız **nerede ne var** ve **ne açık**.

---

## ARTEFAKTLAR — üçü de commit'li

| dosya | kapsam | sınav |
|---|---|---|
| `denetim/DAYANAK-VOLGA-0907.json` | 13 gün · 935 nokta | 7/7 |
| `denetim/DAYANAK-ASYA-0907.json` | 10 gün · 127 nokta | 13/13 |
| `denetim/ONERI-IRAN-SAFEVI-0907.json` | `iran` 8 dönem · 5 öneri | 24/24 |

Her üçünün `_OZET` bloğu **elle yazıldı ve kayıtlarına karşı çapraz sınandı.**
Sınav iki kez gerçek kusur yakaladı: bir özet çürüdü (3→4), bir JSON kaçırılmamış
tırnak yüzünden **geçersizdi** ve uygulayıcı onu `0 kayıt` diye sessizce geçerdi.

---

## AÇIK KALEMLER — ve hiçbiri `bulunamadı` değil

### 🔴 ① KASPİ ÜÇLÜSÜ — `okumadım`, ve sonraki adım ARTIK BİR KİTAP
`Tarki` · `Ağraham burnu` · `Derbend` → `iran 1281 → 1501/1509`.
```
TDV        5 gövde tüketildi (NEHİR SÜRTÜNME, 5 Eylül) — TEKRAR ETME
Iranica    3 madde okundu (DARBAND · DĀḠESTĀN · ŠERVĀNŠAHS) — TEKRAR ETME
kalan      V. Minorsky, «A History of Sharvān and Darband», Cambridge 1958
```
🔴 **Silinemez:** üçü de `s:` zincirinin **ilk** dönemi, `kur:` boş ⇒ 1281'den
sahipsizlik (`Değişmez 1`). **Çevrilemez:** Bosworth hâkimiyetin **aralıklı**
olduğunu söylüyor.

### 🔴 ② `1919-11-22` GÜNÜ — `okumadım`
Gün **1 ayakta** (Boorman/Columbia UP — sayfa iki kanaldan da açılmadı),
ay **3 ayakta** (Eric Her, *Mongolian Journal of International Affairs* 1997 —
`pypdf` ile okundu, `WebFetch` "corrupted" demişti).
Denenmemiş kanal: **Rusça/Moğolca kurumsal arşiv.**

### 🟡 ③ BELGE BORCU — kök `*.md` sahibinin kalemi
`CLAUDE.md §3.5`in *"70 kayıt `iran`"* satırı **9 kat bayat** (gerçek 8;
Tebriz/Hemedan/Bağdat'ta `iran` yok). `§3.5.1` emsali: **ders silinmez,
vaka damgalanır.**

---

## BEKLEYEN ÖNERİ — koşu sonrası künye turu

`denetim/ONERI-IRAN-SAFEVI-0907.json` · **5 kayıt, sınav 5/5**
```
Hürmüz Adası · Kişm · Kiş   iran → hurmuz-sultanligi   (künye 1281→1514)
Dihistan ovası · Kızılarvat iran → buhara              (19 komşu aynı üçlüyü taşıyor)
```
🔴 Kimlik değişiyor, **tarih değişmiyor** ⇒ boşluk/çakışma doğmaz.

---

## MERGE'İ BAĞLAYAN İKİ SAYI — ölçüldü, sahibine bildirildi

```
4c(asan) 138 / BEKLENEN_ASAN 138   TAM TAVANDA
4d(once) 409 / BEKLENEN_ONCE 409   TAM TAVANDA
```
🟢 1.MURAT bunu ölçtü ve **kapattı**: 23 yama bellekte uygulanınca
`138→124` · `409→355` — yamalar tavanı **indiriyor**. ⚠️ Sınırı: ölçüm
**künye yamalarını uygulamıyor**; künye önerileri inince **yeniden ölçülmeli**.

---

## BU OTURUMDAN ÇIKAN KURALLAR — tahtada M-3100

1. **«Kaynak tükendi» hükmü, `§4`ün 🟢 YEŞİL LİSTESİ denenmeden verilemez.**
   Sınav tek soru: *"listedeki hangi kapıları açtım?"* Cevap bir liste değilse
   `bulunamadı` değil **`okumadım`** yazılır.
2. **Iranica ve Britannica `WebFetch`e 403 verir, TARAYICI PANELİNDEN açılır.**
   Ölçüldü: Iranica 7/7 slug 403 → 7'si de tarayıcıda açıldı.
3. **Bir kusurun görünmezliği tek cinsten değil** — üçü ölçüldü, çareleri ters:
   soru hiç sorulmuyor · toleransta eleniyor (265 gün < 400) · dolu tavanda gömülü.
4. **v3 takvim kuralına (c) hâli:** ülke *hiçbirinde* değildiyse (Çin · Burma ·
   Siyam · İslâm dünyası) tarih zaten bir **çevrim**dir; sorulacak şey
   **çevirenin hedefi**, ve o çoğu zaman beyan edilmez ⇒ `ölçülemedi`.
5. **Bir kaynağın günü doğrulaması ile onu kendi gözünle görmek ayrı şeydir** —
   `DOGRULANDI_SAYFA_CEKILEMEDI` damgası bunun için.

---

## PROTOKOL

`data/` ve `arac/` **hiç değiştirilmedi** (koşu 7b boyunca). `denetle.py` ve
`renkler.py` **okundu ve çağrıldı**, yazılmadı. Kendi kovamın dışına
dokunulmadı; kova dışında görülenler (Tambov `s:kirim` · Saratov konumu ·
`yuan-hanedani` 4c · `zend` 131) **bildirildi, dokunulmadı.**
