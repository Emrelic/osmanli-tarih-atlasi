# ORTAK KURALLAR — paket bitirme dalgası (27 Ağustos 2026)

> Bu dosya beş oturumun **hepsi** için geçerlidir. Kendi şartnamen bunu
> işaret ediyor; önce burayı oku.

## 0. 🔴 ZİNCİR — nerede durduğunu bil

```
① VERİ yazımları    data/*.js         ← KOŞUDAN ÖNCE BİTMELİ
② MOTOR üç kalem    uret_petek.py     ← KOŞUDAN ÖNCE BİTMELİ
③ KOŞU              ~4 saat           KOORDİNATÖR başlatır — sen başlatma
④ YAYIN             denetim → kapı → push → gözle doğrulama
```
Koşu başlayınca `arac/*.py` **kilitlenir**; `data/*.js`e yazmak güvenlidir
ama **o koşuya girmez**, bir tur bekler.

## 1. 🔴 RAPOR DEĞİL İŞ

*"Ölçtüm, sırada"* bir teslim değildir. Yapılabilecek olanı **YAP**.
Yapılamayanı **niçin** yapılamadığıyla yaz. Bir maddeyi kapatamıyorsan
sebebi üç şıktan biridir ve hangisi olduğunu yaz:
```
🔴 KAYNAK YOK      arandı, TDV'de ve akademik kaynakta yok  → "bulunamadı"
🔴 EMRE'NİN KARARI  zevk/tercih meselesi                    → "senin-kararin"
🔴 BAŞKA İŞE BAĞLI  şu oturumun şu işi bitmeden olmaz       → adını yaz
```

## 2. 🔴 HÜKÜM DOSYASI VER — `CEVAP.json`A DOKUNMA

Bitirdiğin her madde için `denetim/HUKUM-<SENİN-ADIN>.json` yaz:
```json
{
  "parti-emrelic-0035": {
    "H-0019": {"hukum": "cozuldu", "not": "Ne yaptığın, SAYIYLA."}
  }
}
```
Birleştirmeyi koordinatör yapıyor (`arac/_hukum_birlestir.py`). İki oturum
`CEVAP.json`a yazarsa biri ötekini **sessizce ezer.**

Hüküm sözlüğü — bu yedi kelime dışına çıkma:
`cozuldu · zaten-dogru · tekrar · sirada · olculecek · gerek-yok · senin-kararin`
⚠️ `gerek-yok` ve `senin-kararin` **gerekçesiz yazılamaz.**

## 3. 🔴 VAR OLAN DOSYAYA EKLE, YENİDEN YAZMA

Bugün `data/olaylar_ek8.js` böyle **8 madde kaybetti** ve `Değişmez 2`
kırıldı; yayın durduruldu, dosya elle onarıldı.
📌 **Bir dosyayı "yeni" diye tarif etmek bir İDDİADIR.** Yazmadan önce
`ls` ile bak; varsa **ekle.**

## 4. 🔴 ÖLÇMEDİĞİNİ "ÖLÇTÜM" DİYE YAZMA

Devraldığın hiçbir rakamı doğrulamadan aktarma. Bugün koordinatörün dört
sayısı çürüdü (`69→58` · `68→8` · `32→20` · `1363→45`) ve **dördünü de
işçi oturumlar yakaladı.** Şartnamende bir sayı varsa **önce onu ölç.**

Rapora *"ölçtüğüm şu"* ve *"bundan çıkardığım şu"* diye **iki ayrı satır**
yaz. Tek satırda birleşince çıkarım, ölçümün güvenilirliğini ödünç alır.

## 5. KAYNAK KURALI

TDV birincil (`islamansiklopedisi.org.tr`). Dışına çıkarsan **akademik ·
güvenilir · bilimsel** olacak; forum · blog · içerik çiftliği · kaynaksız
derleme **kullanılmaz.** Vikipedi tek dayanak değildir.
🔴 **Kaynağı `kaynak:` alanına AÇIKÇA yaz**; bulunamadıysa `bulunamadı`
yaz. Kaynağı yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez.

⚠️ TDV slug tuzağı: `curl -s -o /dev/null -w "%{http_code}"` → **302 = ölü.**
Ama **200 de yetmez**: `ordu` askerî ordu, `saray` mimarî saray, `cin`
fıkıh terimi açar. Şehir/ülke maddesi `--sehir` / `--ulke` sonekindedir.
**İçeriği OKU.**

## 6. HABERLEŞME — ekrana yazmak cevap değildir

```bash
py arac/tahta_bekci.py --kim "<SENİN ADIN>" --ara 60      # AÇILIŞTA KUR
py arac/tahta.py yaz --kim "<SENİN ADIN>" --kime "KOORDINATOR" --mesaj-dosya <yol>
```
🔴 **Bekçiyi kurmadan işe başlama** — yoksa koordinatörün sorusunu görmezsin.
🔴 Mesaj metnini `Write` ile dosyaya yaz, `--mesaj-dosya` ile ver. Türkçe
metni kabuktan geçirme (`CLAUDE.md §11` — altı kez ısırdı).

**Ne zaman mesaj:**
```
AÇILINCA     "açıldım, şu dosyalar bende"
KALEM KALEM  bir küme bitince HEMEN — gün sonuna biriktirme
SORU GELİNCE "iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"
AKSAKLIK     BEKLETME — kaynak çelişkisi, şartname hatası, beklenmedik sayı
BİTİNCE      SAYIYLA: "48 → 41, şu yedisi şu sebeple kaldı"
```
🟢 Yatay mesajlaşma **serbest** — başka bir oturumla doğrudan konuşabilirsin,
şartı tahtadan geçmesi.

## 7. DOSYA SAHİPLİĞİ — kesişme yok

| oturum | yalnız buraya yazar |
|---|---|
| VERİ SAHİPLİK | `data/yer_yama_sahiplik.js` · `data/yer_yama_emilme.js` |
| KRONOLOJİ İÇERİK | `data/olaylar_ek17.js` |
| TASNİF | `denetim/HUKUM-TASNIF.json` · `denetim/BULGU-TASNIF.md` |
| ÖLÇÜM | `arac/renkler.py` · `denetim/BULGU-OLCUM.md` |
| ARAYÜZ | `js/app.js` · `css/style.css` |
| MOTOR ÜÇ KALEM | `arac/uret_petek.py` |
| **KOORDİNATÖR** | `data/yerlesimler*.js` · `index.html` · kök `*.md` · üretilmiş `data/*.js` |

🔴 **`arac/girdi.py` ve `arac/renkler.py` motorun parmak izlediği üçlüde.**
Koşu sırasında değişirlerse **koşuyu öldürürler.** ÖLÇÜM oturumu
`renkler.py`ye yazmadan önce koordinatöre "koşu var mı" diye sorar.

## 8. Emre'nin sözü

> *"Tüm paketlerdeki maddeleri sırasıyla bitirelim, sonra koşu ve yayın
> yapalım."*

Yani hedef **rapor değil bitirme**, ve ölçüsü kalan açık madde sayısıdır.
