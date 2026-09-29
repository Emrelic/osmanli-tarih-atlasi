# KRONO-AFRIKA-0929 — Sahra Altı Afrika kronolojisi (Dalga 3) · 29 Eylül 2026

Kapsam: `denetim/SENKRON-DEFTER-0929.json` → `PAKETSIZ:bati-afrika` (28) · `dogu-afrika` (13) ·
`guney-afrika` (7) · `orta-afrika` (6) = **54 net olay adayı (gün×künye grubu)**.
Veri: `data/kronoloji_cok_afrika.js` → `window.KRONOLOJI_COK_AFRIKA` · **9 madde** · `node --check` ✓.

## ① Ne ölçtüm

**54 adayın dökümü (her grup tek tek sınıflandırıldı):**

| Sınıf | Grup | Ne demek |
|---|---|---|
| **YAZILDI** (bu dosya) | **7** | gerçek değişim, künye içi kronolojide yok → madde yazıldı |
| **KÜNYE İÇİ KAPALI** | **35** | aynı künyenin `devletler.js` içindeki `kronoloji:[…]` bloğunda aynı yıl/gün, aynı olay için madde ZATEN VAR → mükerrer yazmadım |
| **ÖLÇÜLEMEDİ / YERLEŞİM ÖNERİSİ** | **12** | kaynak yok (`bulunamadı`) ya da yerleşim tarafının işi → `-YERLESIM-ONERI.md` |
| toplam | 54 | |

(Yazılan 9 madde = 7 aday grubunu kapatan 7 madde + 2 ek: 1674 Tin Yifdad, 1884 Samori 'almami'.
Bir aday grubu iki adayın yerine bir maddeyle kapandı: 1841 Yola ve 1465 Birni N'gazargamu ayrı gruplar.)

**🔴 Bu dalganın en değerli bulgusu (ana soru):** 54 adayın **35'i (%65)** "kırılma açıklanmıyor" değil,
"açıklaması künyenin KENDİ içinde duruyor" sınıfındadır. Defter (`SENKRON-DEFTER-0929`)
`kuyruk_kunye_kapali_yer` sütununda bunları kapalı SAYMIYOR; oysa sitede `derinKronolojiBindir` künyenin
kendi maddelerini gösterir. Örnek: Segu/Bambara 1650 → `bambara` künyesinde `1650-01-01 Biton Kulibali Segu
krallığını kurdu`; Danki/Kayor 1549 → `kayor:1549-01-01 Danki'de Colof'tan ayrılarak bağımsız oldu`;
Ndewura Jakpa/Gonja 1550; Aro 1690; Futa Callon 1747; Futa Toro 1776; Zulu/Rozvi/Matabele/Zende/Adamava/
Mangbetu/Darul-Kuti kuruluşları… (tam liste `denetim/ARAC-KRONO-AFRIKA-0929-KAPALI.py` çıktısında).
⇒ Defterin ölçütü künye içi kronolojiyi hesaba katarsa bu paketin gerçek yükü **54 değil ~19**'dur.
Bu bir tavsiye/soru olarak koordinatöre gidiyor: defter ölçütü **doğru mu, yoksa Değişmez 2 evreni
künye içi kronolojiyi bilerek dışarıda mı bırakıyor?** (Ben `denetle.py`yi değiştirmedim.)

**Artefakt mı gerçek mi?** (`CLAUDE.md §2` sorusu)
- Gerçek siyasi değişim: 1430 (Tevârik→Tinbüktü/Velâte) · 1465 (Bornu merkezi) · 1807 (Kano) · 1812 (Sokoto
  yönetimi) · 1841 (Yola) · 1829 (Mgungundlovu) — TDV/SAHO ile doğrulandı.
- **Noktasızlık/kur-yılı artefaktı (sayıyla):** 12 grup. En belirgin küme: Umman-Zengibar iç bölge üsleri
  (Kilva Kivince 1800 · Ujiji 1830 · Nkhotakota 1840 · Kasongo+Nyangwe 1860 · Karonga 1880 · Mankhamba
  Maravi→Zengibar 1800 = **6 grup / 7 yerleşim**; Nkhotakota TDV `malavi` ile kaynaklandı ve YAZILDI,
  Mankhamba künye-içi kapalı sayıldı ama Zengibar'a bağlanışı dayanaksız, kalan 4 grup ölçülemedi): yerleşimin `kur:` yılı, Zengibar egemenliğinin başlangıcı
  gibi yazılmış; TDV `malavi` bu bölgede **Zengibarlı tüccar idaresi** anlatır (Sâlim b. Abdullah, 1840,
  'jumbe'), sultanlığın *toprak* egemenliğini değil. Kaynak `bulunamadı` (Ujiji/Kasongo/Karonga için).
- **Ölçülemedi:** İlorin 1817 (TDV yıl vermiyor; yalnız «Bello 1817-1837 döneminde İlorin ve Nupe emirliklerini
  hâkimiyeti altına aldı») · Bida 1859 · Kukava 1814 · Antsirabe 1872 · Büyük Zimbabve 1700 (kasıtlı beyanlı
  boşluk) · Oranj/Transvaal 1830 (Büyük Göç yılı; cumhuriyet künyeleri 1852/1854).

## ② Ne bulamadım (`bulunamadı` bir sonuçtur)
- TDV `songay` slug'ı 2.495 karakter (boş gövde-benzeri), Songay için `mali` gövdesi kullanıldı.
- TDV'de yok: Kayor/Waalo/Sine-Saloum kuruluş yılları (senegal maddesi yalnız Lat Dior 1871'i verir) → bu gruplar
  künye içi kapalı olduğu için madde yazılmadı; ancak o künye maddelerinin **kaynağı yok** (bkz. DUZELTME §7).
- Kukava'nın kuruluş yılı, Bida'nın başkentleşme yılı, İlorin'in Sokoto'ya geçiş yılı, Ujiji/Kasongo/Karonga/
  Kilva Kivince'nin Zengibar'a bağlanış tarihi: TDV ve erişilebilir akademik kaynakta **bulunamadı**.
- Britannica/World History Encyclopedia bu ortamdan 403 verdi; Vikipedi tek dayanak olamayacağı için
  hiçbir maddeye Vikipedi yazılmadı.

## ③ Kaynak kullanımı
TDV `mali` · `bornu` · `kano` · `sokoto` · `adamava` · `moritanya` · `samori-ture` · `malavi` · `fulaniler`
(gövdeler okundu, önbellek `denetim/KRONO-AFRIKA-0929-tdv-onbellek/`). Güney Afrika için SAHO
(sahistory.org.za, kurumsal). Hiçbir maddede gün uydurulmadı; yıl-hassasiyetli olanlar `gun:` alanında açık.

## ④ İstiyorum / öneriyorum
1. **Karar ver:** defter künye içi kronolojiyi sayacak mı (yukarıdaki %65 bulgusu)?
2. `denetim/KRONO-AFRIKA-0929-DUZELTME.md` — 8 kayıt (Sokoto 1809↔1812, Mali künye sonu, Hamdullahi 1815↔1818,
   Kankan 1879↔1881, Zengibar başkent 1832↔1837↔1840, Oranj/Transvaal künye günleri…).
3. `denetim/KRONO-AFRIKA-0929-YERLESIM-ONERI.md` — koşuya alınacak/alınmayacak 9 kayıt, uygulanabilir biçimde.
4. `denetim/KRONO-AFRIKA-0929-KUNYE.md` — eksik künye önerileri (`ilorin-emirligi` zaten listede; `nkhotakota-jumbelik` yeni).
5. `index.html` satırı + `arac/paketle.py` kaydı **koordinatörde** (`data/kronoloji_cok_afrika.js`).

## ⑤ Denetim
- `node --check data/kronoloji_cok_afrika.js` ✓ · zorunlu on alan 9/9 dolu.
- `py arac/odak_olc.py`: dosyam 9 madde · **kırık atıf 0** (yer_id çözülüyor: 8/8; 1 boş beyan: Tin Yifdad).
  (Toplamdaki 2 kırık atıf başkasının: `kronoloji_cok_kuzey_amerika.js` Tucson, `kronoloji_dogu_afrika.js` Ogaden.)
- `py arac/denetle.py`: **SONUÇ: temiz.**
- Araçlar: `denetim/ARAC-KRONO-AFRIKA-0929-{TDV,CEK,ARA,MUKERRER,KAPALI}.py`.
