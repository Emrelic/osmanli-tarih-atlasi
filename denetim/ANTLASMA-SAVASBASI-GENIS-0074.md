# `savas_basi` — KALAN 26 KAYIT · ÖLÇÜM

**Oturum:** ANTLASMA-KADEME-0074 · 21 Eylül 2026 · görev 1.MURAT M-4922 §3
**Öngörü (ölçümden önce):** `denetim/ANTLASMA-SAVASBASI-GENIS-0074-ONGORU.md`
**İlk tur:** `denetim/ANTLASMA-SAVASBASI-KAYNAK-0074.md` (11 kayıt, %64 doğrulama)
**Kaynak:** yalnız TDV (bu turda TDV dışına çıkılmadı — 1.MURAT hükmü).

## 0. Sınıflandırma ölçütü (bu turda önceden sabitlendi)
| sınıf | ölçüt |
|---|---|
| ✅ **DOĞRULANDI** | TDV **aynı olayı** tarihliyor ve gün tutuyor |
| 🔴 **ÇELİŞKİ** | TDV **aynı olayı** tarihliyor ama **başka gün/ay** veriyor |
| ⚪ **BULUNAMADI** | TDV o olayı tarihlemiyor (başka bir olayı tarihliyorsa "alternatif" diye not düşüldü) |

---

## 1. SONUÇ — 26 kayıt
| sınıf | kayıt | oran |
|---|---|---|
| ✅ doğrulandı | **5** | **%19** |
| 🔴 çelişki | 3 | %12 |
| ⚪ bulunamadı | 18 | %69 |

**İlk tur %64 doğrulamaydı. Bu tur %19.** Sebep §4'te — ve sebep bende.

### ✅ Doğrulananlar (5 kayıt, 3 tanıklık)
| antlaşma | `savas_basi` | TDV |
|---|---|---|
| Londra 1913 · İstanbul 1913 · Atina 1913 | 1912-10-08 | `balkan-savasi` — "8 Ekim 1912'de Karadağ'ın … savaş ilân etmesiyle Balkan savaşlarının birinci safhası başlamış oldu" |
| Ziştovi 1791 | 1788-02-09 | `zistovi-antlasmasi` — "Avusturya'nın da katılmasıyla (9 Şubat 1788)" |
| Mudanya 1922 | 1919-05-15 | `izmir` — "15 Mayıs 1919'da başlayıp …" (Lozan ile aynı tanıklık) |

### 🔴 Çelişkiler (3 kayıt) — GÜN DEĞİŞTİRİLMEDİ, hüküm bekliyor
| antlaşma | atlas | TDV | not |
|---|---|---|---|
| **Yaş 1792** | 1787-08-17 | `yas-antlasmasi` — "2 Zilkade 1201'de (**16 Ağustos 1787**) ilân edilen bu savaşa" | aynı olay, **bir gün** fark; hicrî/milâdî çevrim farkı olabilir |
| **Mondros 1918** | 1914-11-05 | `birinci-dunya-savasi` — "Rusya'nın **2 Kasım 1914**'te … savaş ilân etmesi" | çok ilânlı savaş: 5 Kasım İngiltere-Fransa'nın ilânı |
| **Sevr 1920** | 1914-11-05 | aynı | aynı |

### ⚪ Bulunamadı (18 kayıt)
**TDV yalnız YIL veriyor (6):** Ferhad Paşa 1590 (`cildir-savasi` "1578") · Zitvatorok 1606
(`zitvatorok-antlasmasi` "1593'te başlayan savaş") · Bükreş 1812 ("1806") · Londra
Protokolü 1830 (`yunanistan` "1821'de … Yunan isyanı başladı") · Sırbistan fermanı 1830
(`sirbistan` "1804'te … Sırp isyanı patlak verdi") · Paris 1856 (`kirim-harbi` "1853'te başlayan")

**TDV hiç tarihlemiyor (8):** Edirne-Segedin 1444 · Nasuh Paşa 1612 · Serav 1618 ·
Pasarofça 1718 · Kerden 1746 · Kütahya 1833 · Londra (Mısır) 1840 · İskenderiye 1840
(son ikisinde TDV `nizip` yalnız muharebeyi veriyor: "24 Haziran")

**🔴 TDV BAŞKA BİR OLAYI tarihliyor — "alternatif" var (4):**
| antlaşma | atlas | TDV'nin verdiği | TDV neyi tarihliyor |
|---|---|---|---|
| Vasvar 1664 | 1663-04-01 | 8 Haziran 1663 | ordunun **Belgrad'a girişi** |
| Bucaş 1672 | 1672-06-01 | 27 Ağustos 1672 | **Kamaniçe'nin fethi** |
| Prut 1711 | 1711-05-01 | 20 Kasım 1710 | **savaş kararının alınması** |
| Kars 1921 | 1920-09-24 | 30 Ekim 1920 | **Kars'a girilmesi** |
Bunlar savaşın başı DEĞİLDİR; künyeye YAZILMADI, §5'te öneri olarak duruyor.

---

## 2. Veriye yazılan (`data/savaslar.js` — paylaşılan, COMMİTLENMEDİ)
- `savas_basi_kaynak` **8 yeni kayda** yazıldı: 5 doğrulama + 3 çelişki beyanı.
- 🔴 Çelişen üç kaydın **günü değiştirilmedi** (1.MURAT hükmü M-4922 §3b); kaynak alanı
  çelişkiyi AÇIKÇA söylüyor, `⚠️` ile başlıyor.
- "Bulunamadı" 18 kayda alan **eklenmedi** — boş dizgi yazılmadı (§3c).
- Toplam durum: 41 künye · `savas_basi` dolu 37 · `savas_basi_kaynak` dolu **17**
  (önceki turdan 9 + bu turdan 8) · boş dizgi 0 · çelişki beyanı 4.
- `node --check` temiz. `denetle.py` ayrıştırıcısı bozulmadı: SAVASLAR 174 ·
  ANTLASMALAR 31(+10 push) · SERILER 16 · SEFERLER 85 — dört sayı da önceki ölçümle aynı.

---

## 3. Bütün evrenin bugünkü durumu (37 `savas_basi` kaydı)
| sınıf | kayıt | oran |
|---|---|---|
| ✅ TDV'de doğrulandı | **12** | %32 |
| 🔴 çelişki beyan edildi (gün değişmedi) | 4 | %11 |
| 🟡 düzeltildi (onaylı) | 1 — Amasya | %3 |
| ⚪ arandı, bulunamadı | 20 | %54 |
| **kaynaksız kalan** | **20** | **%54** |

---

## 4. 🔴 ÖNGÖRÜ KARNESİ — ve niçin bu kadar kaçırdım
| öngörü | tahmin | ölçüm | sonuç |
|---|---|---|---|
| Ö1 doğrulama sayısı | ~17 (bant 13–20) | **5** | ✗ **AĞIR KAÇIRDIM** |
| Ö1 çelişki sayısı | ~5 (bant 3–8) | **3** | ✅ bant içinde |
| Ö2 çelişkinin yeri (kavram kayması) | Sırbistan · Londra Prot. · Kerden · Pasarofça · Bükreş · Nizip | bu altısının **hepsi** "bulunamadı" çıktı; çelişkiler Yaş ve I. Dünya Savaşı'nda | ✗ yer yanlış, **mekanizma doğru** (§4.2) |
| Ö3 ortak savaş | ~21 ayrı araştırma | doğru — 1912-10-08 üçe, 1914-11-05 ikiye, 1919-05-15 Lozan'a bağlandı | ✅ |
| Ö4 XVI–XVIII < %50 | < %50 | **%0** (10 kayıt, 0 doğrulama) | ✅ yön doğru, seviye daha kötü |
| Ö4 XIX–XX > %80 | > %80 | **%29** (14 kayıt, 4 doğrulama) | ✗ **kaçırdım** |

### 4.1 Ö1'i niçin kaçırdım — ÖRNEKLEM YANLILIĞI, ve onu ben soktum
İlk turda %64 çıkmıştı ve o oranı bu tura taşıdım. **Taşınamazdı.** İlk 11'i
"üç kademenin GERÇEKTEN göründüğü 23 madde" arasından seçmiştim — yani Lozan,
Karlofça, Edirne, Ayastefanos gibi **atlasın en çok işlenmiş, en ünlü** antlaşmalarından.
Kalan 26 ise tam tersi: Serav, Nasuh Paşa, Kerden, Bucaş, İskenderiye Konvansiyonu.
İlk örneklem **rastgele değildi ve ben onu rastgele gibi kullandım.**
⇒ Ders: bir örneklemin oranı, o örneklemin SEÇİM ÖLÇÜTÜYLE birlikte taşınır.
İlk raporda "%64 örneklemin oranıdır, evrenin değil" diye yazmıştım — doğru cümleydi,
ama sonra tahmini yine o orandan kurdum. **Uyarıyı yazmak, ona uymak değildir.**

### 4.2 Ö2'nin yeri yanlış ama mekanizması doğru
"Kavram kayması" eksenini doğru seçmişim: Vasvar, Bucaş, Prut, Kars'ın dördünde de TDV
**başka bir olayı** tarihliyor (Belgrad'a giriş, Kamaniçe'nin fethi, savaş kararı, Kars'a
giriş). Yani kavram kayması GERÇEKTEN evrenin ana kusuru. Ama bu kayıtlarda TDV atlasın
gününü çürütmediği için sınıf "çelişki" değil "bulunamadı + alternatif" oldu.
⇒ Öngörüyü YANLIŞ KOVAYA yazmışım: doğru mekanizma, yanlış sınıf.

### 4.3 İki turun birleşik dersi
İlk tur: sahte kesinlik `-01` biçiminde değil, **tam gün görünümlü** kayıtlardaydı.
Bu tur: asıl kusur yanlış gün değil, **yanlış olay**. İkisi birleşince:
> `savas_basi`nın tehlikesi gününün yanlışlığı değil, **neyi tarihlediğinin belirsizliği**.
> 37 kaydın 20'si hâlâ kaynaksız ve bunların çoğunda "savaşın başı"nın hangi olay olduğu
> künyede YAZMIYOR. Alan bir GÜN tutuyor ama bir TANIM tutmuyor.

---

## 5. HÜKÜM BEKLEYEN — dört öneri (hiçbiri uygulanmadı)
1. **Yaş 1792:** `1787-08-17` → `1787-08-16` (TDV `yas-antlasmasi`, hicrî karşılığıyla).
   Tek günlük fark, aynı olay, TDV açık. **Önerim: düzeltilsin.**
2. **Mondros + Sevr:** bu bir SINIFLANDIRMA sorusudur, kaynak sorusu değil. Seçenekler:
   (a) `1914-11-02` — TDV'nin verdiği (Rusya'nın ilânı) · (b) `1914-11-05` kalsın —
   antlaşmaların karşı tarafı İngiltere-Fransa'dır, onların ilânı tutarlı ·
   (c) `1914-10-29` — Karadeniz baskını, fiilî başlangıç. **Önerim (b) — DEĞİŞMESİN**,
   ama künyedeki çelişki beyanı kalsın. Gerekçe: alanın tanımı "antlaşmaya götüren savaş"
   ve Mondros/Sevr'in muhatabı İtilaf devletleridir.
3. **Dört "alternatif" kayıt (Vasvar, Bucaş, Prut, Kars):** TDV'nin verdiği günler savaşın
   başı değil. **Önerim: DEĞİŞMESİN**, ama künyeye "TDV şu olayı şu günle veriyor, savaşın
   başını vermiyor" notu `savas_basi_kaynak`a yazılsın. Bu turda YAZMADIM çünkü doğrulama
   değil; izin verirsen tek işlemde yazarım.
4. **Yapısal öneri (§4.3'ten doğuyor):** `savas_basi`nın yanına **`savas_basi_olay`**
   (serbest metin: "savaş ilânı" / "sefere çıkış" / "isyanın başlaması" / "ilk muharebe")
   açılsın. Bugün 37 kaydın günü var, tanımı yok; kavram kayması ölçülemiyor çünkü künye
   neyi tarihlediğini söylemiyor. Bu bir ŞEMA kararıdır, bende değil.
