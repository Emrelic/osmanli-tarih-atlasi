# KRONO-YER-0075 — noktası işaretlenmemiş kronoloji maddeleri (H-0020 · H-0021)

**Oturum:** KRONO-YER-0075 · **Tarih:** 21 Eylül 2026 · **Veriye yazıldı mı:** HAYIR (data/ ve arac/ kilitli)
**Tam çıktı:** `denetim/KRONO-YER-0075.json` (madde madde: bugünkü hâl · önerilen alan · gerekçe · güven)
**Aletler:** `denetim/ARAC-KRONO-YER-0075.py` (sayım) → `denetim/ARAC-KRONO-YER-0075-RAPOR.py` (JSON). Ara ürün `_krono0075_ham.json` commitlenmez.

## 1 · Ölçüt (js/app.js ile aynı, yeniden yorumlanmadı)
Nokta çözülür = `yer_kon` (2 eleman) **ya da** `yer_id` atlas adıyla BİREBİR (` (` öncesi dâhil) — `olayKonumu`.
Noktasız = ikisi de çözülmüyor. Odak beyanı (`odak_yer` · `odak_kimlik` · `odak_kutu_kaynak` · `kapsam_genis`) nokta DEĞİL, kamera tercihidir.

## 2 · Önce SAYI
| evren | madde | noktasız | oran |
|---|---|---|---|
| **A · Osmanlı listesi** (`olaylar*.js`) | 1736 | **94** | %5,4 |
| **B · devlet kronolojileri** (`kronoloji_*.js`, 50 dosya) | 5429 | **1136** | %20,9 |

**A · 94'ün sınıfı** (elle okundu — her `yer:` ve `d:`):
| sınıf | sayı | çare |
|---|---|---|
| **K1 yeri belli, bağlanmamış** | 49 | **33 → `yer_id`** (atlasta VAR, doğrulandı) · **16 → atlasta yok**, `yer_kon` |
| **K2 bölgesel** | 29 | 19 `odak_yer` · 2 `odak_kimlik` · 7 kaynak taraması · 1 `yer_kon` |
| **K3 devletin bütünü** | 8 | 4 merkezî karar → `odak_yer:İstanbul` · 4 süreç/göç → `kapsam_genis` KALIR |
| **K4 yersiz / gezici** | 2 | kaynak taraması (Nâdir'in karargâhı · "Ordugâh") |
| zaten odaklı (0072/0074) | 6 | dokunulmaz |

**"Hepsine İstanbul" yanlış olurdu — sayı:** A'nın noktasızlarından merkezî karar olan yalnız **4** (%4,3):
Redif (H-0020) · Tehcir Kanunu · Avusturya'nın savaş ilânı · I. Dünya Savaşı'na giriş. İstanbul zaten
324/1736 maddede (%18,7) `yer_id`. B'de 144/3747. 33 K1 `yer_id` önerisinin 11'i İstanbul'a düşüyor — çünkü `yer:` alanı öyle diyor, biz seçmedik.

**B · 1136'nın sınıfı** (`yer:` alanı YOK; başlıktan MAKİNE ADAYI — yazmaz, gösterir):
| sınıf | sayı |
|---|---|
| başlıkta TEK atlas adı (`kapsam_genis`siz 108 · `kapsam_genis`li 164) | 272 |
| başlıkta ≥2 atlas adı | 49 |
| tek aday ama **eşdeğer ad** (aday yanlış yer olabilir) | 14 |
| aday yok · `kapsam_genis` var (beyanlı geniş) | 471 |
| aday yok · beyan da yok | 330 |
Görünürlük: 984 noktasız görünür dosyalarda; **152'si `kronoloji_cok_1dunya_A/B.js`de — `index.html` bu iki dosyayı YÜKLEMİYOR**, yani ekranda hiç yok.
Kapsam: `dis` 749 · `ic` 387.

## 3 · İki seçeneğin ölçüm sonucu (H-0021 "İstanbul mı, tüm ekran mı")
- **Tüm ekran zaten var**: `kapsam_genis:true` → `donemler[di].b`. Ama Emre'nin hükmü ("bir yakın bir uzak … koca imparatorluğu gösteren tarzda olmamalı") ve 1305'te Osmanlı kutusunun *Batı Anadolu*'yu göstermeyip Söğüt'ü göstermesi bu yolu **yalnız süreç/göç (4 madde) için** bırakıyor.
- **İstanbul**: `odak_yer` (0074) tam bu iş için var ve olayın yeri diye YALAN yazmıyor. Kaynak yeri söylemiyorsa `yer_id` değil `odak_yer` — bu ayrım korunmalı.
- ⇒ **Öneri: ikisi de, sınıfa göre** (§1'deki tablo). Kural cümlesi 0074'teki ODAK KURALI'nın aynısı; yeni kural gerekmiyor, **kapsamı A→B'ye genişlemesi** gerekiyor.

## 4 · Mekanizma bulguları (uygulamayı bağlar)
1. 🔴 **B'de `odak_yer`/`odak_kimlik` ETKİSİZ.** `js/app.js` devlet-kronolojisi tıklama dalı (~13595–13633) yalnız `yer_id` çözer; `kapsam_genis` yoksa "yer işaretlenmemiş"; varsa `devletiYay`. `maddeOdakKutusu` orada ÇAĞRILMIYOR. B'ye odak yazılırsa hiçbir şey olmaz — önce app.js.
2. **Eşdeğer ad tuzakları (üçü ölçüldü):** atlastaki `Yakutat (Novorossiysk)` = **Alaska** (59,5°K −139,7°B), Karadeniz limanı değil · `Rimnik (Râmnicu Vâlcea)` (45,1°K 24,4°D) ≠ Rimnik (Boze) savaş alanı (bilgim: Râmnicu Sărat çevresi — **kaynakla ölçülmeli**, bulunamadı) · `Tûr (Sînâ)` ≠ Refah. Üçü de KULLANILMADI.
3. **Çözülmeyen `yer_id`:** tek kayıt — `kronoloji_dogu_afrika.js` 1897-01-01 "Somali-Habeşistan sınırını çizme teşebbüsü" → `yer_id:"Ogaden"`, atlasta yok (nokta işaretlenmiyor, sessizce).
4. `olaylar_0073_iran_yanya.js` (5 madde) `index.html`de yüklü değil (denetle.py glob'la okuduğu için sayıma giriyor).
5. **Sayı çelişkisi:** CLAUDE.md §1.5 "1713 madde"; bu ölçümde `denetle.olaylari_yukle()` **1736**. Fark 23 — §1.5 bayat olabilir (ya da bugünkü ekler).

## 5 · Atlasta OLMAYAN 13 yer (16 K1 + 1 K2 madde) — nokta ya da `yer_kon`
Adakale · Eski Hırsova · Fokşani · Kailua-Kona · Kalafat · Maçin · Rarotonga · Refah · Rimnik(Sărat) · Saint-Germain-en-Laye · Trianon · Yılan Adası · Ziştovi.
Ziştovi tek başına **5 maddede** (barış konferansı); Yaş zaten 6'sında çözülüyor. `yer_kon` koordinatının KAYNAĞI gerekir — atlas dayanak DEĞİL, TDV koordinat vermez ⇒ bu 13 için **kaynak bulunamadı**, ben uydurmadım. Emsal: `data/yer_yama.js` Sevr'i "en yakın anlamlı yerleşim" Paris'e `not:` ile bağladı (Saint-Germain, Trianon için aynı yol seçilebilir — hüküm sende).

## 6 · Kilit kalkınca dokunulacak dosyalar (yalnız A · `yer_id` 33 + `odak_yer` 23)
`olaylar_p0068b.js` 36 · `olaylar_ok109.js` 9 · `olaylar_ek5.js` 7 · `olaylar_p0057b.js` 6 · `olaylar_ek8.js` 3 · `olaylar_p0063.js` 3 · `olaylar_ek7.js` 2 · öteki 8 dosya 1'er.
Uygulama: alanı satıra ekle (`yer_id:"…"` / `odak_yer:["…"]`), `denetle.py`, sonra `js/app.js` B dalı kararı.

## 7 · Bulunamadı
- Kafkas cephesi çapası (93 Harbi) · Katalan seferi güzergâhı · Düzmece Mustafa'nın ayaklandığı şehir · Cebel-i Lübnan Nizamnâmesi'nin yeri · Arvanid Sancağı merkezi · Tunus–Trablusgarp sınır uçları · Nâdir'in karargâhı · Koca Yûsuf'un azil yeri — **9 madde `kaynak_taramasi`**; TDV gövdesi bu ayrıntıyı vermiyor ya da taranmadı (taranmadı ≠ yok).
- B için madde madde `yer_id` ÖNERİSİ verilmedi (başlıktan makine adayı var, okunmadı).
