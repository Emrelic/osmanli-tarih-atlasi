# KASA-ABD-1010 — 11 ABD kaydı: "ingiliz-kuzey-amerika → kanada 1923" ÖDÜNÇ SAHİP düzeltmesi

Görev: YILDIRIM BAYEZIT (ODUNC-SAHIP hükmü: "(c) ONAY — 11 ABD kaydını şimdi yaz"; şartlar ⓐ abd künyesi ⓑ kayıt başına kaynak ⓒ 1818-46 ORTAK
İDARE tartışmalı ⓓ 2s ÖNCE) · KASA · `data/` DONUK ⇒ diff. Okuyucu: `scratchpad/okuma_abd11.md`.

## 1. Kaynak (KENDİM birebir: Avalon Project)
- **Oregon Antlaşması** (br-1846): md. I 49. paralel; *"Done at Washington, the fifteenth day of June, in the year of our Lord one thousand eight hundred and forty-six"*. Yürürlük/teati 17.07.1846, Senato 18.06.1846 (okuyucu, Bevans 12 · history.state.gov). Gün = İMZA (atlas antlaşma-günü emsali, F8).
- **1818 Konvansiyonu** (conv1818): md. II 49. paralel *"shall form the Northern Boundary of the said Territories of the United States … from the Lake of the Woods to the Stony Mountains"* · md. III *"any Country that may be claimed by either Party on the North West Coast of America, Westward of the Stony Mountains … be free and open, for the term of ten Years"* · *"Done at London this Twentieth day of October … 1818"*.
- Diğer uçlar okuyucudan (alıntı + URL dosyada): DCB McDougall (Astoria satışı 16.10.1813) · Franchère 12.12.1813 (⑥ 1.12) · teslim akti *"this 6th day of October. 1818"* · NPS FOVA/LARO · HistoryLink 5178/9235/20296 · MNopedia (Vérendrye 22.08.1731) · Carlstedt, Minnesota History 1939 · La Pointe 4.10.1842 (7 Stat. 591) · Forrester (Manitoba Hist. Soc.).

## 2. Zincirler (11 KAYIT, `yerlesimler_kamerika.js`)
| kayıt | yeni `s:` | not |
|---|---|---|
| Fort Astoria | `__BOSLUK__` 1811-04-12 → 1813-12-12 · `ingiliz-kuzey-amerika` → 1818-10-06 · `__BOSLUK__` → 1846-06-15 · `abd` → 1923 | Amerikan ÖZEL şirket kuruluşu (devlet değil) · İngiliz zilyetliği · Gent iadesi + 1818 ortak idare (14 gün ABD ayrıca yazılmadı, beyan) |
| Fort Vancouver · Fort Nez Percés · Fort Colvile · Spokane House · Boise · Fort Hall | `__BOSLUK__` kuruluş → 1846-06-15 · `abd` → 1923 | ŞART ⓒ: 1818-46 ORTAK İDARE (1818 öncesi antlaşmasız çakışık iddia) ⇒ `__BOSLUK__` beyanlı, "kimsenin değil" DEĞİL; HBC mülkiyeti egemenlik değil |
| Duluth (Fond du Lac) | `abd` 1793 → 1923 | 1783 Paris sınırı ⇒ de jure ABD; NWC denetimi "without legal sanction" (ŞİRKET, devlet işgali değil ⇒ `isg` yok) |
| Grand Portage | `fransa` 1731 → 1763-02-10 · `ingiltere` → 1783-09-03 · `abd` → 1923 | eski "ingiltere 1731" YANLIŞTI (Vérendrye, Fransız) · Michilimackinac emsali 1783-09-03; Detroit emsali Jay 1796-07-11 ⑥ — iki emsal atlasta tutarsız (beyan) |
| Keweenaw | `ojibwe` 1281 → 1842-10-04 · `abd` → 1923 | yerli toprağı = devir antlaşmasına dek (Wayám/Klamath emsali); eski 1850-09-07 `ojibwe` KÜNYE SONU — ödünç uçtu |
| Pembina | `ingiliz-kuzey-amerika` 1797 → 1818-10-20 · `abd` → 1923 | 1797-1818 çekişmeli, İngiliz iddiası güçlü (Red River Hudson'a akar, Louisiana dışı) — beyan |
Her dilimin `kaynak:`ı birebir alıntı + "KASA-ABD-1010". `abd` künyesi 1776-1945, BOYALAR `#a828d8` ⇒ boyasız delik yok.

## 3. ŞART ⓓ — 2s ÖNCE ölçüldü (@ `main` 55011738, taban aynı ağaçta ayrı koşu; DELTA)
```
Değişmez 2s   AÇIK 193 → 193 SABİT · yabancı kırılma 1805 → 1810 (+5) · kapsam dışı 792 → 798 (+6)
Değişmez 2sk  2258 → 2246 İYİLEŞME (12) — tavan satırı DİFF'TE YOK (iniş anında ölçülüp yazılır)
başka satır yok · çıkış 2 → 2 (aynı sebep, Değişmez 8) · paket_22 yenile
```
⇒ diff TEK BAŞINA İNER. `girdi` 11 kaydı yeni zincirlerle okuyor; çıplak LF 0.
⚠️ İlk derlemede tek tırnaklı Python dizelerinde `("+T+")` olduğu gibi kaldı → JS'e çift tırnak sızdı, `girdi` JSON'a çeviremedi; yakalandı, değiştirme + "hiç kalmadı" iddiası (assert) eklendi.
