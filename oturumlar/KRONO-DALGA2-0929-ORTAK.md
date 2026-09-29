# KRONO DALGA 2 — ORTAK EK (beş paket bunu + `KRONO-DUNYA-0929-ORTAK.md`yi okur)

> Dalga 2, Dalga 1'den **farklı bir iştir.** Dalga 1 *yok olan* kronolojiyi
> yazdı; sen *var olanı* denetliyor ve eksiğini kapatıyorsun.
> Emre: *"özellikle Osmanlı ve etrafındaki önemli devletlerin kronolojilerini
> ayrı bir keskinlik ve kalitede kontrole delim."*

🔴 **ÖNCE `oturumlar/KRONO-DUNYA-0929-ORTAK.md`yi oku — özellikle §4.1 (adlandırma)
ve §1 (kronoloji maddesi haritayı oynatmaz).** Burada yalnız Dalga 2'ye özel olan var.

---

## 1. 🔴 İŞ LİSTEN HAZIR — `denetim/SENKRON-DEFTER-0929.json`

`SENKRON-DEFTER-0929` teslim etti. Kendi paket adınla aç:

```py
import json, io
d = json.load(io.open(r"denetim/SENKRON-DEFTER-0929.json", encoding="utf-8"))
print(d["paket"]["<SENİN-PAKET-ADIN>"])      # kayıt listesi + özet
```

Sütunların anlamı — **yanlış sütuna bakmak işi 5 kat büyütür:**

| Sütun | Ne demek |
|---|---|
| `toplam_kirilma` | ham kırılma sayısı — **iş yükü DEĞİL** |
| `ayri_gun` | kaç ayrı güne düşüyor (bir fetih dalgası 40 yerleşimi aynı gün çevirir) |
| `kuyruk_kunye_kapali_yer` | zaten bir maddeyle kapalı — **dokunma** |
| **`net_olay_adayi`** | 🔴 **SENİN GERÇEK İŞ SAYIN** — yazılacak madde adayı |
| `ikincil_kirilma` | başka bir kırılmanın yan etkisi |

📌 Ve `net_olay_adayi` bir **hedef değil, bir aday listesi**. Bir aday ölçtüğünde
"bu zaten şu maddede kapalı" ya da "bu kırılma veri hatası" çıkabilir — o da bir
sonuçtur, `denetim/<ADIN>-0929.md`ye yaz.

---

## 2. Dalga 2'nin üç işi — sırayla

### ① DENETLE (önce bu — Emre'nin "keskinlik ve kalite" dediği yer)
Kendi dosyalarını madde madde oku ve şunları ara:
```
· tarih uydurması        kaynak yıl derken gün yazılmış mı? (CLAUDE.md §4)
· sahte kesinlik         künyenin f:/t: günü kaynak diye kullanılmış mı?
· mükerrer               aynı olay iki dosyada iki günde mi? (ölçülmüş vaka:
                         Sırbistan özerklik fermanı ÜÇ ayrı günde duruyor)
· kaynaksız/zayıf kaynak `kaynak:` alanı boş, "Vikipedi", ya da kırmızı listede mi?
· eksik alan             zorunlu on alandan biri yok mu?
· anakronik künye        madde, künyenin f:/t: penceresinin dışına mı düşüyor?
```
🔴 **Bulduğunu SİLME.** `denetim/<ADIN>-DUZELTME.md`ye yaz: dosya · satır ·
mevcut · önerilen · kaynak · gerekçe. Silme/değiştirme hükmü koordinatörde.
⚠️ Mevcut dosyandaki düzeltmeyi kendin uygulayabilirsin (dosya senin), ama
**her düzeltme kaynak gösterir** ve DUZELTME.md'ye de kayıt düşer.

### ② DOLDUR
`net_olay_adayi` listesini kapat + ① 'de bulduğun kronolojik boşlukları.
🔴 **Yeni maddeler yeni dosyaya:** `data/kronoloji_cok_<kisaltma>.js` →
`window.KRONOLOJI_COK_<KISALTMA>`, her maddede `devlet:"<gerçek künye id>"`.
Mevcut `kronoloji_<ülke>.js` dosyalarına **madde EKLEME** — onlar
`KRONO-BAGLAMA-0929`'un elinde (`COK_` yoluna taşınıyorlar). Karışırsa
ikimiz de aynı satıra yazarız.

### ③ HARİTA
Tarihte değişim var ama haritada yok ⇒ `denetim/<ADIN>-YERLESIM-ONERI.md`.
`data/yerlesimler*.js`e **DOKUNMA** (Oturum 0'ın dosyası, `ORTAK §1`).

---

## 3. 🔴 Künye kuralı — M-5416'nın üç cümlesi, burada da geçerli

```
(1) Madde, olayın geçtiği gün VAR OLAN siyasi yapının künyesine bağlanır.
(2) Ardıl künyeye geriye dönük bağlama YASAK — hem tarihen yanlış, hem
    denetle.py 4c/4d "künye penceresini aşıyor mu" denetimini bozar.
(3) Künye yoksa: maddeyi YAZ, önerdiğin id'yi `devlet:`e yaz, künyeyi
    koordinatör açar. Bağlayıcı eşleşmeyen id'yi sayıp konsola basar —
    madde kaybolmaz, künye inince KENDİLİĞİNDEN bağlanır.
```
`denetim/KUNYE-DUNYA-0929.json` teslim edildi: 678 künye · şüpheli ömür 26 ·
eksik 46 · eşanlam 15 · tür-ad çelişkisi 10. **Kendi coğrafyan için ONU AÇ,
`devletler.js`i baştan tarama.** `data/devletler.js`e DOKUNMA.

---

## 4. Sömürge kırılması tuzağı — ATLANTİK kollarını özellikle ilgilendirir

Senkron defterinde `kapsam_disi` kovası büyükse yükün çoğu **metropolde değil
sömürgede**: Fransa'nın 1763 Kanada kaybı, Portekiz'in Goa'sı, Hollanda'nın Doğu
Hint Adaları. Bunlar haritada metropolün rengiyle çiziliyor ve kırılma
metropole atfediliyor.

🔴 İki soru, ikisi de ölçülür:
- Bu kırılmanın maddesi **metropol kronolojisine** mi ait, yoksa o coğrafyanın
  kendi kronolojisine mi? (İkincisi ise **yazma** — `denetim/<ADIN>-0929.md`ye
  "şu bölgeye ait" diye yaz; PAKETSİZ tier'ı için ayrılacak.)
- Kırılma **gerçek bir devir teslim** mi, yoksa noktasızlık artefaktı mı?
  (`CLAUDE.md §2`: noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN
  SAHİBİYLE boyanır.) Artefakt ise madde yazmak yanlışı KALICILAŞTIRIR —
  `-YERLESIM-ONERI.md`ye nokta önerisi yaz.

---

## 5. Denetim ve teslim

```bash
node --check data/kronoloji_cok_<kisaltma>.js
py arac/denetle.py        # SONUÇ temiz
py arac/odak_olc.py       # yeni kırık atıf 0 — `yer_id` uydurma, kapı 0 tolerans
```
Teslim: TEK tahta mesajı, üçlü kural + `denetim/<ADIN>-0929.md` yolu + commit.
Sonuna **"bekçimi öldüreyim mi?"**
⚠️ Ara mesaj serbest ve teşvik edilir: ①'de bulduğun her CİDDİ kusuru (tarih
uydurması, mükerrer) bitmeyi beklemeden yaz — kardeş paketler aynı kusuru
kendi dosyalarında arayabilsin.
