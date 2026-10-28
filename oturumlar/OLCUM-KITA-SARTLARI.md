# ÖLÇÜM KITASI ŞARTLARI — ortak metin, her ölçüm görevinde geçerli

**6 Ekim 2026, YILDIRIM BAYEZIT.** Niçin ayrı dosya: bu şartlar dokuz görevde aynıydı ve
dokuz kopya yazılsa **dokuz ayrı metin gibi bayatlardı**. Tek otorite burada; görev mesajı
yalnız İŞİ ve TESLİMİ söyler, şartları buradan okutur.

Görev mesajın *"şartlar: `oturumlar/OLCUM-KITA-SARTLARI.md`"* diyorsa bu dosyanın tamamı
senin için bağlayıcıdır.

---

## 1. YETKİ — ÖLÇÜM VE ÖNERİ, UYGULAMA YOK
🔴 **Hiçbir veri dosyasına YAZMA.** `data/` altındaki her şey başka birinin kilidinde:
`data/yerlesimler*.js` · üretilmiş `data/*.js` (`donemler` · `bolgeler` ·
`devletler_harita` · `petek_govde` · `devirler` · `paket_*`) **koordinatörde**; kronoloji,
olaylar, devletler, `app.js` ise UMIT'in parti sırasında.
- Ürettiğin şey **ÖLÇÜM + ÖNERİ**: bir `.md` raporu, gerekirse yanında `.tsv`, gerekirse
  `denetim/*.diff` (uygulanmamış).
- Betik yazarsan `denetim/` altına koy ve **SALT OKUR** olsun. Bir aracın salt okunur
  olduğunu **VARSAYMA** — ölçülmüş vaka: `tahta.py oku` 513 mesajı "okundu" işaretledi,
  yani kontrol için koşturulan komut kontrol edileni BOZDU.
- Mutlak yol yazma (`C:\atlas` gibi): betiğin kendi kökünü `__file__`den bulsun. Ölçülmüş
  vaka: 16 sınavın 15'i başka makinede YANLIŞ DEPOYU ölçüyordu.

## 2. KAYNAK (`CLAUDE.md §4`)
- **İslâm dünyası, Osmanlı ve komşuları: TDV İslâm Ansiklopedisi birincil**, çelişirse TDV
  esastır. TDV'nin kapsamadığı coğrafya/tanecikte akademik kaynak meşrudur ve `kaynak:`
  alanına **AÇIKÇA** yazılır.
- 🔴 **KIRMIZI LİSTE — kullanılmaz:** forum · blog · içerik çiftliği · kaynaksız derleme ·
  YZ üretimi metin · popüler tarih sitesi. Listeye **girmeyen kurumsal kaynak ADIYLA kabul
  edilir** (devlet arşivi · müze · belediye · üniversite deposu · ulusal ansiklopediler
  — Hrvatska enciklopedija, Britannica, Office of the Historian gibi).
- Arama: `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`. **"TDV'de yok" demeden ARA.**
  Dar slug tutmazsa **kapsayıcı** maddeyi dene — **TDV olay değil YER-KİŞİ
  ansiklopedisidir**; olay slug'ı ölüyse olayın geçtiği YERE ya da başındaki KİŞİye bak.
- TDV tuzakları: ölü slug (**302**) · canlı slug yanlış madde (`ordu` → `ordu--sehir`) ·
  boş gövde · boilerplate gövde (çekilemedi ≠ yok) · `000` taşıma arızasıdır, ölü değil ·
  **kaynak kendiyle çelişebilir** (bildir, taraf seçme).

## 3. 🔴 ATLAS KAYNAK DEĞİLDİR (`D207`)
Yerleşim dönemi · künye günü · **komşu kaydın günü** · atlas koordinatı **DAYANAK OLAMAZ**.
Çelişkide **ATLAS düzelir**.
- Komşu zinciri kaynaksızsa (çoğu `YYYY-01-01`) dayanak **değildir**. Ölçülmüş vaka: Gence
  için komşularda 1386 adımı var ama o zincir de kaynaksız ⇒ dayanak sayılmadı.
- Zincirleme devralma **yasak**: A'nın günü B'den, B'nin günü C'den alınamaz.

## 4. 🔴 RAKAMI TAŞIYAN CÜMLENİN NEYİ TARİHLEDİĞİ OKUNUR
Gövdede bir yılın geçmesi, o yılın **senin aradığın olayı** tarihlediği anlamına **GELMEZ**.
- Ölçülmüş vaka: `funj#3` — TDV 1649-1680, madde 1770. 90 yıllık fark çelişki değil **İKİ
  AYRI OLAYdı**; "çelişki" hükmü geri alındı.
- **"ÇELİŞKİ" demek İKİ KAYNAK gerektirir.** Kaynaksız bir alanı çelişki ilan etmek onu
  **düzeltmeye karşı KORUR** (ölçülmüş vaka: İsfahan).

## 5. 🔴 TIRNAK BİR İDDİADIR
Tırnak **yalnız** gövdeden **BİREBİR** kesilmiş metne konur. Okuma varyantı · özet · çıkarım
**tırnaksız** yazılır, kaynak işareti yanında kalır.
- Doğrulanamayan tırnak **KALDIRILIR** ve kaldırıldığı beyan edilir. Yanındaki "doğrulanmadı"
  şerhi onu kurtarmaz: insan tırnağı görür, **araç tırnağı sayar**.
- 🔴 **Alıntıyı gövdeye uyduracak şekilde YENİDEN YAZMAK YASAK** — o, sahte alıntının
  üretimidir.

## 6. HASSASİYET VE UYDURMA
- Gün bilinmiyorsa `YYYY-01-01`; **yıl bilinmiyorsa yıl YAZILMAZ.** "Temsilî" damgası
  uydurmayı meşrulaştırmaz.
- Künyenin `f:`/`t:` günü bir **KAYNAK DEĞİLDİR**. Kaynak yıl diyorsa yıl yazılır ve fark
  bildirilir.
- Tarih alanı kaynağın desteklediği **en kaba güvenli** düzeyi taşır; ay/gün metinde durur.

## 7. `bulunamadı` VE `ölçülemedi` BİRER SONUÇTUR
- İkisi de **yazılır**, gizlenmez. `ölçülemedi ≠ yok ≠ temiz`.
- 🔴 **Denediğin yolları ADIYLA yaz** (slug · arama terimi · URL · hangi sayfa 403/404).
  Sebep: bir sonraki oturum **ölü yolları yeniden yürümesin**. Ölçülmüş kazanç: W28 tükenen
  yollarını yazdı, W52 onları atlayıp Schreiner'a gitti ve kaynağı buldu.
- Bir aracın **kaçırma oranını** ölçmeden "yok" deme. Ölçülmüş vaka: TDV tam metin araması
  doğru maddeyi 42/50 döndürüyor (~%16 kaçırma) ⇒ "aday tükendi" **yokluk kanıtı değildir**.
- 🆕 🔴 **VE O ORAN SABİT DEĞİL, KAYIYOR** (GLM1 ölçtü, 6 Ekim 2026): Eylül'de arama
  sonucu dönen 137 slugdan **71'i bugün hiçbir sorguda dönmüyor — hepsi CANLI.** Bugün
  dönen 29 yeni aday var; 19 slugun aday SAYISI değişti. ⇒ **"Eylül'de arandı, bulunamadı"
  bugün için GEÇERLİ DEĞİLDİR.** Bir yokluk hükmü bir TARİHE bağlıdır: ölçümün gününü
  yaz, ve eski bir "bulunamadı"yı yeniden aramak mükerrer DEĞİLDİR.
  📌 Bu, üstteki 42/50'yi çürütmez, **sertleştirir**: oran bilinmiyorsa da, bilinen oran
  bayatlamışsa da sonuç aynı — yokluk kanıtı yok.
- 🆕 🔴 **VE ORANDAN DAHA SERTİ: ARAMA "SONUÇ YOK" ⇒ "MADDE YOK" DEMEK DEĞİLDİR.**
  Ölçülmüş vaka (GLM1, 6 Ekim 2026): `sarikamis-harekati` **GET 200**, gövdesi
  *"SARIKAMIŞ HAREKÂTI"*, tamamen **CANLI** — ama TDV aramasında **HİÇ ÇIKMIYOR.**
  ⇒ Üstteki madde bir ORAN veriyordu ("%16 kaçırma, o yüzden emin olma"); bu madde
  **kesin bir VAKA** veriyor: canlı bir maddenin aramada hiç görünmemesi.
  🔴 **Bir köprü ARAMADAN TEK BAŞINA kurulamaz: arama ADAY üretir, `GET` DOĞRULAR.**
  Arama listesi ilk ~10 sonucu gösteriyor ve sayfa sayısı basmıyor — bu sınır da
  raporda **ADIYLA** yazılır, yoksa sonraki tur "liste tükendi" sanır.
- **NEGATİFİ DE YAZ:** "atlas DOĞRU" bir bulgudur.

## 8. ÖNGÖRÜ (`§11`)
🔴 **Ölçümden ÖNCE yaz:** kaç kalem çıkacak **(SAYI)** ve **NİÇİN (MEKANİZMA)**. İkisi
**ayrı** değerlendirilir — sayı tutup mekanizma çürüyebilir, ve o da bir sonuçtur.
Tutmayan öngörü, yazılmayan öngörüden kıymetlidir.

## 9. VEKİL ÖLÇÜM
Bir metin işareti / desen eşleşmesi **ÖLÇÜM DEĞİL, ADAY ÜRETİCİSİDİR.**
- Ölçülmüş vaka: "havuz noktalarına" ifadesi 41 aday verdi, 196 kararın tek tek okunması
  **5** verdi.
- Ölçülmüş vaka: 74 "slug kayması" adayının yalnız **3'ü** gerçekti.
- ⇒ Aday sayısını bulgu diye raporlama. Örneklem **elle** okunur ve oranı yazılır.
- 🔴 Deseni **VERİYE doğrula**: veri `t:"..."` biçimini kullanıyorsa `"t":` deseni **sıfır**
  döndürür ve bu **güvenilir görünen bir yanlış sıfırdır.**
- 🆕 🔴 **AD ÜZERİNDEN ÖLÇMEK DE VEKİL ÖLÇÜMDÜR — adlandırma kuralını bilmeden yapılmaz.**
  Ölçülmüş vaka (koordinatör, 6 Ekim, bu dosyayı commitledikten 20 dakika sonra):
  `ls denetim/ | grep "W37"` koşturdum, 0 çıktı, "rapor burada yok" hükmü verdim ve bir
  işçiyi gereksiz işe yönlendirdim. Oysa raporlar **W numarasıyla değil KONUYLA**
  adlandırılıyor (`KRONOLOJI-COK-PAKET-1006.md`); W numarası dosyanın **İÇİNDE**. Dosya
  baştan beri ordaydı.
  ⇒ Bir şeyin "yok" olduğunu ADINDAN hükmetmeden önce **adlandırma kuralını ölç**: iki üç
  dosyanın adına bak, kuralı gör, sonra ara. Ve ad tutmazsa **İÇERİĞİ** tara (`grep -l`).
- 🆕 📌 **Ve ters yönde de doğrudur:** bir adın `denetim/` altında GEÇMESİ, o kalemin
  kapandığını söylemez — kalemi AÇAN rapor da o adı anar. "Mükerrer mi" sorusu ada değil
  **HÜKME** bakar: o kalem için yazılmış bir hüküm var mı?

## 10. COMMIT
```bash
git add -- <açık adlar>
git commit -F <mesaj-dosyası> -- <aynı adlar>
git show --name-only       # doğrula
```
🔴 **Toplu ekleme ve dizin pathspec'i YASAK.** Index **PAYLAŞILIYOR**: başka oturumun yarım
işi senin commit'ine girer (yaşandı) ve takipsiz her dosya süpürülür.
🔴 **`git stash` KULLANMA** — worktree'ler `refs/stash`i PAYLAŞIR; bir worktree'de yapılan
stash ötekinde görünür ve pop'lanabilir. Yerine ayrı worktree ya da `denetim/*.diff`.
- Türkçe metin: `sed` kullanma, heredoc kullanma. Mesajı `Write` ile dosyaya yaz, `-F` ile ver.

## 11. TESLİM
Bitince **TEK mesaj**, üç başlık:
```
① ne ÖLÇTÜM (sayıyla)   ② ne BULAMADIM (açıkça)   ③ ne İSTİYORUM (seçenekliyse önerinle)
+ değişen/eklenen dosya listesi
+ "bekçimi öldüreyim mi?"
```
- **Ekrana rapor yazma** — koordinatöre ulaşmaz. Kanal: tahta (`py arac/tahta.py yaz
  --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj "…"`).
- Satır satır mesaj atma; bir teslim **TEK** mesajdır.
- **Aksaklık BEKLEMEZ:** başka oturumun dosyası gerekiyor · kaynaklar çelişiyor · şartname
  yanlış · sayı beklenenden çok farklı · kalem yetkini aşıyor → **hemen** yaz.
- Görev verildiği an **adını görev adına çevir** (`set_session_title`).
