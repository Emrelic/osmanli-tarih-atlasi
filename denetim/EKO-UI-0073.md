# EKO-UI-0073 — TESLİM (20 Eylül 2026)

Maddeler: **0073/H-0002** (kart satırında kategori etiketi) · **0073/H-0020** (sağ tık kopyala).
Öngörü ölçümden ÖNCE yazıldı: [`EKO-UI-0073-ONGORU.md`](EKO-UI-0073-ONGORU.md).
Sınav: `denetim/EKO-UI-0073-SINAV.js` (headless Chrome + CDP, kendi statik sunucusunu açar,
**paylaşılan `index.html`e dokunmaz**). Ham çıktı: `denetim/SINAV-EKO-UI-0073.json`.
Kare: `SINAV-EKO-UI-0073-etiketler.png` · `-yakin.png` (3×) · `-sagtik.png`.

---

## 1. H-0002 — kategori etiketi · YAPILDI, satır HİÇ BÜYÜMEDİ

Emre'nin üç kısıtı ve ölçülen karşılıkları (sınav maddesi Vak'a-i Hayriyye, 15 Haziran 1826,
**8 ek okuma satırı**):

| Emre'nin kısıtı | ölçüm |
|---|---|
| "satır yüksekliğini fazla büyütmek zorunda kalmayalım" | **büyüme 0 px.** Önce: 8 satırın hepsi 26,00 px. Sonra: en az 25, **en çok 26**. Kutu 257 → **256 px** (1 px KÜÇÜLDÜ) |
| "ikinci bir satır şeklinde görünmesin" | madde başlığı simgeyle **AYNI** satırda (merkez farkı < 6 px); etiket simgenin ÜSTÜNDE (etiket üst 736 px · simge üst 744 px) |
| "küçük puntolarla ama BÜYÜK CAPS harfler" | punto **7 px** (uzun etiketlerde 6 px) · 8 satırın 8'inde `metin === metin.toLocaleUpperCase("tr")` **doğru** |
| "okunabilsin" | 3× yakın karede okunuyor (`-yakin.png`). 7 px küçüktür — §4'te iki seçenek ve maliyeti var |

Yapılan: satır başındaki simge iki katlı bir **kolona** alındı (üstte kategori, altta simge).
Büyümenin karşılığı düşey iç boşluktan (4 → 2 px) ve simge puntosundan (14 → 12 px) alındı;
kolon **sabit 60 px**, böylece satırlar arasında madde başlıkları hizalı kalıyor.
Ölçülen taşma: 8 satırın **0'ında** yazı kolonu aşıyor (en geniş: TEKNİK BİLİMSEL 52,0 px).

🔴 **İKİNCİ KAYNAK AÇILMADI (D045).** Etiket metni `EKOKUMA_TUR` / `AKORDEON_EK_TUR`
etiketinin ad yarısından türetiliyor — yeni bir tür eklenince kendiliğinden çıkar.
`_EK_UST_KISA` yalnız kolona sığmayan **üç** etiketin satırdaki kısaltması
(`antlasma` · `savas-hikayesi` · `teknik-bilimsel`), kategori adı değil.

🔴 **Türkçe büyük harf (CLAUDE.md D215).** `"Nasıl bilirdiniz".toUpperCase()` "NASIL
BILIRDINIZ" verir; kod `toLocaleUpperCase("tr")` kullanıyor → "NASIL BİLİRDİNİZ". CSS
`text-transform: uppercase` bu ayrımı yapmaz, o yüzden dönüşüm JS'te.

---

## 2. H-0020 — sağ tık menüsü · ZATEN YAZILMIŞTI (öngörü tuttu)

`js/app.js` `ekAkordeonKur` içindeki `contextmenu` dinleyicisi + `ekKopyaMenusuAc`
**DALGA-0063 madde ③ ile yazılmış**. Sınav birebir Emre'nin istediğini ölçtü:

| sınav | sonuç |
|---|---|
| ek okuma satırına sağ tık | menü **açıldı**, düğmeler tam olarak **["Başlığı kopyala", "Maddeyi kopyala"]** |
| "Başlığı kopyala" içeriği | yalnız başlık ("Orhan Gazi'den itibaren Rumeli'ye geçiş…") |
| "Maddeyi kopyala" içeriği | **973 karakter**, başlıktan farklı (`baslik_madde_farkli: true`) |
| `#harita` üzerinde sağ tık | `defaultPrevented: false` → **tarayıcı menüsü çalışıyor** |
| `body` üzerinde sağ tık | `defaultPrevented: false` → **tarayıcı menüsü çalışıyor** |
| SHIFT + sağ tık (kart üstünde) | `defaultPrevented: false`, bizim menü çıkmıyor → kaçış yolu var |
| `#olay-bilgi` panelinin boşluğu | kesiliyor — bu H-0020 değil, **DALGA-0063'ün kendi** madde-kopyalama özelliği |

### 🔴 Ama sınav bir KUSUR buldu ve düzeltildi
İlk koşuda "Maddeyi kopyala" şunu veriyordu:
`"tartışmalıOrhan Gazi'den itibaren Rumeli'ye geçiş…"` — **kelimeler birbirine yapışmış**.
Sebep: `_ekIcerikMetni` `textContent` kullanıyordu, o da blok sınırlarını yutuyor.
Çare: geçici kutu ekran dışına EKLENİP `innerText` okunuyor (bağlı olmayan düğümde
`innerText` `textContent`e düşer — `display:none`/`visibility:hidden` de aynı kusuru verir).
İkinci koşu: `"TARTIŞMALI\nOrhan Gazi'den itibaren…"` · 966 → **973 karakter**. ✓

---

## 3. Emre'nin saydığı adlar ↔ kodun adları (ÖLÇÜLDÜ)

Kodda satır türü **18**: `EKOKUMA_TUR` **14** + `AKORDEON_EK_TUR` **4**.
Emre 8 ad saydı. Ölçüm:

| Emre'nin yazdığı | kodda | ekranda çıkacak etiket |
|---|---|---|
| sebeb sonuç | `sebep-sonuc` ✓ | SEBEP-SONUÇ |
| kişi kartları | `kisi` ✓ (+ `kv-kunye`) | KİŞİ · KÜNYE |
| nasıl bilirdiniz | `kv-nasil` ✓ | NASIL BİLİRDİNİZ |
| magazin | `magazin` + `kv-magazin` ✓ | MAGAZİN |
| tartışma | `tartisma` ✓ | TARTIŞMA |
| teknik bilimsel | `teknik-bilimsel` ✓ | TEKNİK BİLİMSEL *(Emre'nin yazdığı ad kullanıldı; kodun etiketi "Teknik / Bilimsel")* |
| **ek okuma** | ⚪ tür DEĞİL — ailenin adı | (akordeonun ilk satırı "📄 Açıklama") |
| **kültür sanat** | 🔴 **KARŞILIĞI YOK** | en yakını `edebiyat` = EDEBİYAT |

Emre'nin saymadığı ama kodda olan **10 tür** de etiketleniyor ("ne varsa" talimatı):
MERAK · ANTLAŞMA · KİMDİR? · DIŞ YANKILAR · KAHRAMANLIK · MENKIBE · ŞOK HABER · EDEBİYAT ·
SAVAŞ HİKÂYESİ · KARŞI ANLATI.

**Veri tarafı doluluk** (`denetim/_eko0073_say.py`, `data/ekokuma*.js`, yorum satırları hariç,
536 kayıt): sebep-sonuc 151 · tartisma 137 · teknik-bilimsel 63 · kimdir 46 · savas-hikayesi 36 ·
karsi-anlati 33 · magazin 32 · antlasma 19 · dis-yankilar 9 · **edebiyat 7** · menkibeler 2 ·
kahramanlik 1 · **merak 0** (ayrı havuzdan gelir) · **sok-haberler 0**.

### ÖNERİM (karar Emre'nin) — "kültür sanat"
`edebiyat` türünde **7 kart** var ve hepsi edebiyat (mersiye · kaside · mesnevi · divan şiiri ·
hiciv mecmuası · cülûsiye — bunlar kartın İÇİNDEKİ alt tür, ayrı kategori değil).
İki yol:
- **(a) ucuz:** `edebiyat` etiketi "🖋️ Kültür / Sanat" olur, ekranda **KÜLTÜR SANAT** yazar.
  Maliyet: tek satır. Ama mimari/musikî kartı gelirse aynı kovaya girer.
- **(b) doğru ama pahalı:** yeni `kultur-sanat` türü açılır, `edebiyat` onun altında kalır.
  Maliyet: 1 kod satırı + 7 kartın gözden geçirilmesi + içerik oturumu.

⚠️ `sok-haberler` (0 kart) ve `merak` (0 kart, ayrı havuz) — **kusur değil**, yalnız boş;
ölçüldüğü için yazıldı.

---

## 4. Emre'nin gözüne sunulan tek ayar

Etiket 7 px. Daha büyük istenirse tek satır:
`css/style.css` → `.ek-ak-ustyazi { font-size: 8px }` + `.ek-ak-kol { width: 68px }`.
**Maliyeti ölçüldü:** satır yüksekliği yine büyümez (0 px), ama madde başlığına kalan yer
**8 px azalır** (SEBEP-SONUÇ 7 px'te 52,9 px, 8 px'te ~60,4 px — 60 px'lik kolonu aşar).
Bugünkü hâl (7 px / 60 px) başlığa en çok yeri bırakan seçenek.

---

## 5. Değişen dosyalar

| dosya | ne | commit |
|---|---|---|
| `js/app.js` | `_EK_UST_KISA` + `_ekKategoriUstYazi` · `ekAkordeonKur`'da `.ek-ak-kol` kolonu · `_ekIcerikMetni` `innerText` düzeltmesi | **1.MURAT** (paylaşılan) |
| `css/style.css` | `.ek-ak-baslik` (hizalama · iç boşluk · `min-height`) · `.ek-ak-kol` · `.ek-ak-ustyazi` (+`.uzun`) · `.ek-ak-simge` 14→12 px | **1.MURAT** (paylaşılan) |
| `denetim/EKO-UI-0073*.md` · `-SINAV.js` · `SINAV-EKO-UI-0073*.{json,png}` · `_eko0073_*.py` | sınav · ölçüm · kare | EKO-UI-0073 (adıyla) |

`node --check js/app.js` temiz · tarayıcı konsolunda hata **yok** (`konsol_hata: null`).
**Veri değişmedi → `denetle.py` koşturulmadı** (CLAUDE.md: değişmediyse koşturma).
`index.html` sürüm damgası (`?v=rNN`) **yükseltilmedi** — paylaşılan dosya, 1.MURAT'ın işi.
