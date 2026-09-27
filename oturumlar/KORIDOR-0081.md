# KORIDOR-0081 — eksklav/enklav koridorlarının belgeyle teyidi

**27 Eylül 2026 · şartname: YILDIRIM BAYEZIT** · paket
`parti-emrelic-0080` Sınıf A (11 madde) · bölüşüm
[`oturumlar/PAKET-0080-BOLUSUM.md`](PAKET-0080-BOLUSUM.md)

Emre on bir ayrı maddede aynı cümleyi kurdu: *"bir şehir ele geçirilirken
ondan coğrafî olarak DAHA YAKIN olan aradaki şehirlerin durumu teyit
edilmeli."* Sen o cümleyi bir **ÖLÇÜTE** çevireceksin.

---

## 🔴 ① İLK TESLİMİN BİR TARAMA DEĞİL, BİR ÖLÇÜTTÜR

Sınıfın sayısı pakettekinden büyük ve bugün ölçülü — `py arac/denetle.py`,
Değişmez 7:

```
725 sorgusuz enklav (beklenen 731) — kopuk gövde, koridor SORULMADI
```

⇒ Emre'nin gördüğü 10 vaka, 725'lik bir kovanın görünen ucu. 725'i
madde madde çözmeye kalkmak `D234`ün tarif ettiği hatadır: kayıt düzelir,
sınıf açık kalır, aynı şikâyet katlanarak döner.

**Emre'nin kendi dört ihtimali yöntemin iskeletidir** (H-0011'de yazdı):

```
① koridor gerçekten PAS GEÇİLDİ       → eksklav DOĞRU; haritada belgeyle
                                        işaretlenmiş olarak DURMALI
② koridor da BİRLİKTE alındı          → kronoloji maddesi EKSİK; yazılır
③ koridor adı anılmayacak önemdeydi   → ötedeki fetih onu KAPSAR
④ koridor, fethedilene TÂBİ küçük yer → toprak olarak katılır
```

🔴 Dördü **çareleri ters** sınıflardır (`D205` deseni): ① hiçbir şey
yazılmaz, ② kronoloji yazılır, ③ `s:` dönemi genişletilir, ④ tâbilik
yazılır. **İlk iş düzeltme değil SINIFLANDIRMA.**

İlk teslimin: bu dördünü **karar verilebilir** hâle getiren ölçüt +
paketin 10 vakasının o ölçütle sınıflandırılması. 725'in tamamı ikinci
tesliminin konusudur ve ancak ölçüt kabul edildikten sonra başlar.

---

## ② PAKETİN 10 VAKASI — yöntemin sınavı

| madde | vaka | koridor şehirleri |
|---|---|---|
| `H-0007` | Ahtapolu · Rezve · İğneada alındı | Vize · Demirköy · Dereköy · Kofçaz · Kırklareli |
| `H-0013` | aynı vaka, Dimetoka maddesinden | (aynı) |
| `H-0008` | Edirne fethi sonrası enklav | Uzunköprü adacığı |
| `H-0011` | Gümülcine alındı | Örmen (Ferecik?) · Dedeağaç |
| `H-0018` | Sırp despotu Pirot'u aldı | Niş · Vidin (Vidin eksklav oldu) |
| `H-0024` | haçlı ordusu Şehirköy'ü zaptetti | Niş · Vidin · Kragujevac · Semendire · Alacahisar · Çaçak |
| `H-0025` | Semendire Sırbistan'a iade | Kragujevac · Niş · Vidin · Şehirköy · Alacahisar · Jagodina |
| `H-0028` | Alacahisar Osmanlı'ya girdi | Niş · Şehirköy · Priştine |
| `H-0029` | Eflak seferi 1462 | Braşov · Erdel Belgradı · Segesvar · Orsova — **Eflak'a mı ait?** |
| `H-0030` | *"buradaki boşluğun sebebi nedir"* | görsel `H-0030-1.png` — 🔴 yer METİNDE YAZILI DEĞİL, görseli açman şart |

📌 `H-0019` **11. maddedir ve dünya çapındadır** — onu ölçütten önce
açmayacaksın (§① ve §⑤).

---

## ③ DOSYA SAHİPLİĞİ — ne senin, ne değil

```
SENİN     denetim/KORIDOR-0081*         (rapor · ölçüm · uygulayıcı betik)
          oturumlar/KORIDOR-0081.md     (bu dosya; kendi notların)
SENİN DEĞİL
  data/*                  yazma iznin YOK (izin katmanı) ⇒ düzeltmeyi
                          `denetim/KORIDOR-0081-uygula.py` olarak TESLİM ET,
                          koordinatör koşturur (§7)
  js/app.js               ARAYUZ ailesinde
  arac/uret_petek.py      yalnız Oturum 0
```

⚠️ Değişmez 7'yi (`arac/denetle.py`) **okuyacaksın ama değiştirmeyeceksin**;
ölçütü oraya bağlamak ayrı bir karardır ve teslimden sonra konuşulur.

---

## ④ KAYNAK KURALI — bu işin can damarı

Bu sınıfın tamamı bir KAYNAK işidir, bir geometri işi değil.

- **TDV İslâm Ansiklopedisi birincil** (§4). Çelişirse TDV esastır.
- 🔴 **`D217`: TDV olay değil YER-KİŞİ ansiklopedisidir.** "Şehirköy'ün
  zaptı" slug'ı ölüyse **şehre** ya da **komutana** bak. Arama:
  `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`
- 🔴 **`D207` — ATLAS REFERANS DEĞİL.** Koridor şehrinin bugünkü atlas
  kaydı, o şehrin o gün kimde olduğunun DAYANAĞI OLAMAZ. Atlas kaydını
  delil saymak, bu işin tam tersini yapmaktır: ölçmek istediğin şeyi
  varsayarsın.
- **`D210`:** gün bilinmiyorsa `YYYY-01-01`; yıl bilinmiyorsa yıl YAZILMAZ.
- Bulunamayan **`bulunamadı`** yazılır ve bu bir SONUÇTUR.

---

## ⑤ NE YAPMAYACAKSIN — açıkça

```
❌ 725 enklavı ölçüt kabul edilmeden taramak
❌ H-0019'u ("tüm dünyada tara") ilk teslimde açmak
❌ data/ altına yazmak — uygulayıcı betik TESLİM EDİLİR, koşulmaz
❌ Koridoru "muhtemelen alınmıştır" diye boyamak. Belgesiz koridor
   ① sınıfıdır: eksklav DOĞRU kabul edilir ve öyle BEYAN edilir.
❌ Bir eksklavı "çirkin göründüğü" için kapatmak. Eksklav gerçek olabilir
   (`D206`: bir sınır kaymasında İKİ UÇ da ölçülür).
```

---

## ⑥ HABERLEŞME — §7.1 aynen geçerlidir

- Kanal **yalnız tahta**: `py arac/tahta.py yaz --kim "KORIDOR-0081"
  --kime "YILDIRIM BAYEZIT" --mesaj "…"`. Koordinatörün ekranına
  `send_message` YAZILMAZ; bir teslim TEK mesajdır.
- **Üçlü kural:** ① ne ölçtüm (sayıyla) ② ne bulamadım (`bulunamadı` bir
  sonuçtur) ③ ne istiyorum.
- **Aksaklık beklemez** (§7.1 ⑥): şartname yanlışsa, sayı beklenenden
  çok farklıysa, kalemi aşıyorsa HEMEN yaz.
- Bekçi: Bash `run_in_background` + `py arac/tahta_bekci.py --kim
  "KORIDOR-0081" --cik`. Boş uyandıysan **ekrana hiçbir şey yazma**,
  sessizce yeniden kur.
- Teslim mesajının sonuna: **"bekçimi öldüreyim mi?"**

🔴 İlk işin oturumun adını `KORIDOR-0081` yapmak (`set_session_title`) ve
tahtaya TEK satır "aldım" yazmak.

---

## ⑦ ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILIR (`§11`)

Ölçmeye başlamadan önce raporunun başına şunu yaz ve sonra DEĞİŞTİRME:
paketin 10 vakasının dördüncü sınıf dağılımı ne olacak sanıyorsun
(①/②/③/④ kaç tane). Sonunda tutup tutmadığını bas. Tutmadıysa **yanlış
yöne mi tuttu** onu da yaz — çürüyen öngörü, yazılmamış öngörüden
kıymetlidir.
