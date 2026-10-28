# LAB-KAYNAK-GECIS-1006 — kaynaksızlık tavanı 1930 → ? : hangi kayıt, hangi kovadan, hangi commit'le

**Ölçüm gövdesi:** `origin/main` **2fe8ada77** (koordinatörün gövdesi). Makine `Emre`. Scratchpad'deki `--shared` klonda okundu; `data/` ve `arac/`a hiçbir şey yazılmadı. Liste: `denetim/LAB-KAYNAK-GECIS-1006.tsv` (18 satır).
**Ölçüt:** `denetle.py@2fe8ada7` `kaynaksizlik_olc` birebir: kayıt `s:` taşıyor; kayıt düzeyinde `kaynak:` yok ⇒ en az bir `s:` döneminde `kaynak:` varsa **dönem-içi (D)**, yoksa **hiçbiri (H)**; kayıt düzeyinde varsa **tam (T)**. Her commit, kendi `arac/girdi.py`siyle yüklendi.
**Yöntem:** `58527beb..2fe8ada7` arasında `data/` ya da `girdi.py`ye dokunan 53 commit, her birinin ebeveyni ve merge'lerin iki ebeveyni + merge-base'i: **93 gövde ölçüldü**. Kayıt başına durum (`dosya|ad` → H/D/T/N/yok). Her merge'ün sonucu "iki dalın birleşimi mi, yoksa merge'ün KENDİ değişikliği mi" diye ayrıca sınandı. Anahtar çakışması: her gövdede 0.

## ① NE ÖLÇTÜM

### 1. Geçiş listesi: 18 ÇIKAN · 0 GİREN

| | H (hiçbiri) | D (dönem-içi) | H+D (kayıt-kaynaksız) |
|---|---|---|---|
| `58527beb` (tavanın yazıldığı commit) | 1930 | 371 | 2301 |
| `2fe8ada7` | **1912** | **389** | **2301** |

- **18 kaydın 18'i H → D.** Hiçbiri T'ye çıkmadı, hiçbiri silinmedi ya da adı değişmedi, **yeni H/D üyesi 0**. Defterle üyelik karşılaştırması: `2fe8ada7` H ⊆ defter, D ⊆ H-defteri ∪ D-defteri.
- **Kaynak commit'leri — ikisi:**
  - **`e634fdad4` (TEKLESTIRME, 17:59) — 17 kayıt.** Bu bir **merge**, ve geçişler merge'ün **kendi** değişikliği (iki ebeveynin hiçbirinde yok). Commit mesajına göre TEBRIZ-1388 KOORD-40 yarısı merge sırasında elle uygulandı. ⇒ `git log` dosya başına bakan biri bu 17 geçişi hiçbir tekil commit'te bulamaz. Diğer 8 merge'ün kendi değişikliği 0.
  - **`63c78baa0` (MEMEL W54b, 14:03) — 1 kayıt:** Klaipėda (Memel).
- **"kayıt-kaynaksız 2301 oynamıyor" sorusunun cevabı:** geçişlerin hepsi H → D, yani H+D sabit kalıyor. **İlk tavandan (`48e16a8b`, 4 Ekim) bu yana: 57 kayıt H → D, kayıt düzeyinde kaynak alan (→ T) 0, yeni üye 0.** 2,5 günlük kaynak işinin tamamı dönem düzeyinde.

### 2. Bu 18 iyileşme NE KADAR DERİN? (ölçütün göremediği)

| Grup | Kayıt | Kaynak alan dönem | Kaynaklı / toplam `s:` dönemi | Kaynağın kendi beyanı |
|---|---|---|---|---|
| Azerbaycan / KB İran / Nahçıvan | **16** (Astara · Berde · Erdebil · Halhâl · Lenkeran · Merend · Merâga · Merîvan · Mâku · Mîyandoab · Nahçıvan · Ordubad · Sakkız · Selmâs · Sultâniye · Şerur) | karakoyunlu 1408-04-13..1468-04-01 | **1/9 … 1/14** | **"BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL (D208)"**, TDV `karakoyunlular` Serdrûd |
| Tebriz | 1 | aynı dönem | 1/9 | şehir tanıklığı (Serdrûd "Tebriz yakınları") |
| Klaipėda (Memel) | 1 | itilaf-emaneti 1920-01-10.. · litvanya 1923-02-16.. | 2/5 | şehir (Versay md. 99 · FRUS) |

⇒ **18 puanın 16'sı, verinin kendi metninde "şehir tanıklığı DEĞİL" diye beyan edilmiş tek bir bölge cümlesi.** O cümle 16 kaydın birer dönemine yazıldı. Ölçüt "herhangi bir dönemde kaynak var mı" diye sorduğu için bu 16 kayıt dönem-içi sayılıyor; kalan 8-13 dönemleri hâlâ kaynaksız. Ölçüt yanlış çalışmıyor, sorusu **kaba**. Bu ayrımı yapamıyor.

### 3. Tavanın doğduğu an

| Commit | Ne yazıldı | O commit'teki ölçüm | Hizalı mı |
|---|---|---|---|
| `48e16a8b` (4 Eki 05:08, ilk tavan) | hiçbiri 1969 · kayıt-kaynaksız 2301 | H 1969 · H+D 2301 | ✓ birebir |
| `1ed681b24` (4 Eki 06:30, KUTUP HATASI düzeltmesi) | hiçbiri **1968**, Akçakale defterden çıkarıldı | H **1969**: Akçakale hâlâ H | ✗ **o gövdede defter ölçümün 1 ALTINDA** |
| `58527beb` (6 Eki 12:41, TAVAN-3) | hiçbiri **1930** · dönem-içi 371 · birleşim 2301 | H **1930** · D 371 · H+D 2301, **üyelik birebir** (küme eşitliği, yalnız sayı değil) | ✓ birebir |

⇒ **1930 gevşek DOĞMADI.** Yazıldığı commit'te ölçümle üye üye aynıydı. 18 puan, **yazılmasından SONRA** iki commit'le kazanıldı: aynı gün 14:03 ve 17:59.
📌 Yan bulgu (`1ed681b24`): Akçakale'yi H'den çıkaran düzeltme (`11bcae716`, 06:19) `1ed681b24`ün **atası değil**. Defter, kendi commit'inde bulunmayan bir veriden yazılmış. O commit tek başına koşulsaydı kapı Akçakale'yi "KAYNAKSIZ YENİ" diye öterdi. Merge'den sonra kapandı (bugün zararı yok). Ama §3.4(0)'ın tam vakası: tavan, YAZILDIĞI gövdede ölçülmemiş.

### 4. Bayrak sınavı (kopyada, asıl depoya değil)

`py arac/denetle.py --kaynak-tavan-indir`, scratchpad klonunda `2fe8ada7` üzerinde koşuldu → çıkış 0, **"✓ kaynaksızlık tavanı İNDİ: hiçbiri 1930 → 1912 · dönem-içi 371 → 389"**, takas reddi YOK. Yazdığı JSON: hiçbiri 1912 · dönem-içi 389 · birleşim 2301. Dosya `git checkout` ile geri alındı, klon temiz.
⚠️ Bayrak JSON'u LF ile yazıyor, depo kopyası CRLF; git uyardı. İndirme commit'inde satır sonu gürültüsü olabilir.

## ② NE BULAMADIM

- **e634fdad4'ün içinde 17 geçişin hangi alt yamadan geldiğini satır düzeyinde ayırmadım.** Commit mesajı TEBRIZ-1388 KOORD-40'ı, diff de yalnız karakoyunlu 1408 dönemine eklenen kaynağı gösteriyor. Ama merge'ün yarılarının ayrı bir kaydı (patch dosyası) depoda yok. "KOORD mu UMIT mi" ayrımı yalnız mesajdan.
- Bölge cümlesinin 16 kayda **doğru** kopyalanıp kopyalanmadığını (her şehir 1408'de gerçekten Karakoyunlu'ya mı geçti) kaynağa karşı sınamadım. Ölçtüğüm şey geçiş, tarihin doğruluğu değil.
- `kaynaksizlik_olc` dışında bu 18 kaydı tutan başka bir kapı olup olmadığına bakmadım (ör. `zincir_kaynagi:` bayat kopya kapısı bölge cümlesini "kopya" sayar mı).

## ③ NE İSTİYORUM — öneri (YAZMADIM, §3.4(4))

1. **Yeni değer: hiçbiri 1930 → 1912 · dönem-içi 371 → 389 · birleşim 2301 (değişmez).** Bayrakla (`--kaynak-tavan-indir`); kopyada sınandı, reddetmiyor.
   - **Niçin bölge cümlesine rağmen indirilmeli:** indirmek o 16 dönem kaynağını **korumaya alır**. Biri o cümleyi silerse kayıt H'ye döner ve defterde olmadığı için kapı öter. İndirilmezse 18 puanlık sessiz pay, o 16 kaynağın sessizce silinebileceği alan demektir. Gevşek tavan iyileşmeyi değil **geri alınmayı** gizler.
2. **§3.4(2) "aynı commit" şartı:** iki düzeltme zaten indi (`63c78baa0`, `e634fdad4`), artık aynı commit'te inemez. Ölçülebilir ikinci en iyi seçenek: indirme commit'inin mesajı **iki sha'yı ve 18 adı** taşısın (bu TSV'ye referansla). 17'si bir merge'ün kendi değişikliği olduğu için bu bağ yazılmazsa sonradan hiçbir `git log -S` ile bulunamaz.
3. **Ayrı karar (Emre/koordinatör): D208 bölge cümlesi "dönem-içi kaynaklı" sayılmalı mı?** Bugün sayılıyor ve 18 puanın 16'sı bu. Seçenekler:
   - (a) olduğu gibi kalsın (ölçüt kaba ama dürüst: "en az bir dönemde yazılı dayanak var");
   - (b) `kaynaksizlik_olc`a **BİLGİ** satırı eklensin: "D kovasının X'i yalnız D208 bölge cümlesiyle orada". Tavan değişmez, ama "iyileşme"nin derinliği görünür.
   - (b)'yi öneriyorum. (c) "bölge cümlesini saymamak" tavanı 1928'e iter ve aynı veriyi iki ölçütle sayan ikinci bir tanım doğurur.
4. **İzleme notu:** 4 Ekim'den bu yana kayıt düzeyinde kaynak (→ T) **0**. Kayıt-kaynaksız 2301'in hiç oynamaması "TAM hizada" demek değil: o tarafta hiç iş yapılmadı.
