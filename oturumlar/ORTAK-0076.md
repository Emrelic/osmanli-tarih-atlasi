# ORTAK-0076 — `parti-emrelic-0076` gece vardiyasının ORTAK KURALLARI

> Sekiz oturum bu dosyayı okur; **kendi maddelerini `SEVK-0076.md`de bulur.**
> Tek yerde yazıldı ki sekiz kez yazılıp sekiz kez ayrışmasın.

## 0. Kimlik
| alan | değer |
|---|---|
| **KOORDİNATÖR** | `YILDIRIM BAYEZIT` — tahta anahtarı, TAM böyle yaz |
| **DİZİN** | `C:\atlas` · 🔴 eski yol (`Desktop\TARİH COĞRAFYA SİTESİ`) **boş kabuktur** — oraya düşersen **hata almazsın**, sessizce boşlukta çalışırsın |
| **PAKET** | `C:\claudemre\kutu\giden\parti-emrelic-0076\PARTI.md` — 164 madde, gövdeler orada |
| **ClaudEmre** | HAYIR — işçisin, `/claudemre-basla` çağırma |
| **AÇILIŞ** | yalnız iki belge: `CLAUDE.md` + bu dosya + `SEVK-0076.md`deki kendi bölümün |

---

## 1. 🔴 BU GECE OLAĞAN DEĞİL — bütçe

```
haftalık limit  %94 DOLU    reset Perşembe 00:00 (~22 saat)
Emre'nin emri   "maksimum tasarruf yapmalıyız"
```
Bu sana **dört** şey söyler, dördü de bağlayıcı:
```
① EKRANA DURUM YAZMA      "bakıyorum" · "şimdi şuna geçiyorum" · ara rapor YOK
② TEK TESLİM              bitince TEK tahta mesajı. Satır satır mesaj YASAK
③ BOŞ UYANIŞTA SUS        sana ait bir şey yoksa ekrana HİÇBİR ŞEY yazma,
                          bekçiyi sessizce yeniden kur, dur
④ KÜMELE                  aynı kök sebebe düşen maddeleri BİRLİKTE kapat;
                          her maddeyi sıfırdan araştırma
```

## 2. 🔴 `arac/` DONMUŞTUR — tek satır bile

Bu bir nezaket değil **bütçe kuralı**. Artımlı motorun önbelleği bir TUZ ile
anahtarlanır; tuzun içinde `uret_petek.py` · `renkler.py` · `girdi.py` ·
`motor_onbellek.py` ve bütün `MOTOR_*` ortam değişkenleri var.
```
yalnız data/ değişti   → önbellek TUTAR → koşu ~23 dk   (22 Eylül ölçümü)
arac/ bir satır değişti → TUZ DEĞİŞTİ  → önbellek ÇÖP, tam inşa
```
Alet yazacaksan **`denetim/` altına** yaz. (`YASALAR M7`nin sıkı hâli: M7
koşu *sürerken* yasaklar; tuz koşudan **önce** de ısırır.)

## 3. Dosya sahipliği — bu gece TEK ELDEN

```
✅ SENİN   denetim/<ADIN>*.md · denetim/<ADIN>*.py · denetim/<ADIN>-YAMA-*.js
✅ SENİN   CEVAP.json → YALNIZ kendi maddelerinin hükmü
🔴 YASAK   arac/*  (yukarı bak)
🔴 YASAK   data/* · js/* · index.html · css/*
```
🔴 **Düzeltmeyi SEN UYGULAMIYORSUN.** Yamanı `denetim/` altına
uygulanmaya hazır hâlde bırak, koordinatör uygular. Sebep: sekiz oturum aynı
`data/` ağacına yazarsa çakışma çözmek bütçe yakar, ve `git index` paylaşık.
⚠️ İstisna yok. "Küçücük bir satır" da yasak.

## 4. Yöntem — sırası bağlayıcı

**① ÖNCE SINIFLANDIR, SONRA DÜZELT** (`CLAUDE.md §3.5`). Erken düzeltme
yanlış kovaya düşen maddeyi iki kez yaptırır.

**② Her hüküm bir SAYI taşır.** *"Bozuk görünüyor"* · *"doğru sanırım"*
ölçüm değildir. Piksel · km² · nokta sayısı · kayıt sayısı · tarih — biri.

**③ `bulunamadı` bir SONUÇTUR.** Aranıp bulunamayan ile hiç aranmayan aynı
görünür; farkı yalnız kayıt yaratır. `ölçülemedi` ≠ `yok` ≠ `temiz`.

**④ Kaynak kuralı** (`CLAUDE.md §4`): İslâm dünyası ve komşuları için **TDV
birincil**; çelişirse TDV esas. Vikipedi tek dayanak değildir. Forum · blog ·
içerik çiftliği · YZ metni · popüler tarih sitesi **KULLANILMAZ**.
🔴 **Atlas referans değildir**: atlasın kendi günü/sınırı/koordinatı DAYANAK
OLAMAZ; çelişkide atlas düzelir.
🔴 **Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01`; **yıl bilinmiyorsa yıl
yazılmaz.** Künyenin `f:`/`t:` günü bir kaynak DEĞİLDİR.

**⑤ Öngörü ölçümden ÖNCE yazılır** (`§11`). Sınav anını ve evrenini de yaz.

**⑥ Ters yön sınavı** (`D206`): bir sınır kayması önerirsen **iki ucu da** ölç.

## 5. Teslim biçimi

```
denetim/<ADIN>.md            rapor: madde → hüküm → SAYI → dayanak
denetim/<ADIN>-YAMA-*.js     uygulanmaya hazır yama (koordinatör uygular)
CEVAP.json                   her maddeye hüküm
```
**Hüküm sözlüğü** `C:\claudemre\kutu\asama.py` `HUKUMLER` tablosundadır —
on beş kelime. En çok karıştırılan dördü:
```
gerek-yok  ≠ vazgecildi    biri KOORDİNATÖRÜN, öteki EMRE'NİN kararı
yapilamaz  ≠ cozulemedi    biri HİÇ DENENMEZ, öteki DENENDİ ve olmadı
tekrar     ≠ once-cozuldu  tam TERSİ
sirada     ≠ kosu-bekliyor ikincisi bizi değil MAKİNEYİ bekliyor
```
🔴 `gerek-yok` · `senin-kararin` · `vazgecildi` · `yapilamaz` · `cozulemedi` ·
`kapsam-disi` **gerekçesiz yazılamaz** — gerekçesizini reddederim.

## 6. Haberleşme protokolü

- **① Kanal = TAHTA.**
  `py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj "…"`
  Koordinatörün ekranına `send_message` YAZILMAZ; ekrana yazılan rapor bana ulaşmaz.
  🔴 Mesajda backtick/Türkçe/kaçış varsa: metni **`Write` ile dosyaya yaz**, bash
  o dosyaya HİÇ dokunmasın, `--mesaj-dosya <yol>` ile ver. (Bash backtick'i
  komut sanar, kelimeyi SİLER ve araç yine *"yazıldı"* der.)
- **② Ne zaman:** soru gelince HEMEN · **aksaklık BEKLEMEZ** · bitince teslim.
- **③ Yatay mesaj serbest**, tahtadan (`--kime "<ÖTEKİ ADI>"`); atama · öncelik ·
  kaynak hükmü ve yetki gerektiren her şey **bana**.
- **④ Üçlü kural:** ① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum.
- **⑤ Commit teslim DEĞİLDİR; teslim MESAJDIR.** Kritik mesajı
  `oturumlar/tahta.json`dan geri oku.
- **⑥ Aksaklık beklemez:** başka oturumun dosyası gerekiyor · kaynaklar çelişiyor ·
  şartname yanlış · sayı beklenenden çok farklı · yetkini aşıyor · iş çok uzayacak
  → **hemen yaz.**
- **⑦ Bekçi — 🔴 AŞAĞIDAKİ §6b'yi OKUMADAN KURMA.**
- **⑧ Commit:** kendi ürettiklerini **pathspec ile**
  (`git add -- <adlar>` · `git commit -F <mesaj-dosyası> -- <aynı adlar>`);
  `git add -A` ve dizin pathspec'i **YASAK**. Push bende.
- **⑨ Bitince** teslim mesajını yaz, **bekçini kendin öldür** (TaskStop), dur.

## 6b. 🔴🔴 BEKÇİ VE UYANMA — Emre'nin 23 Eylül 2026 emri

> Emre'nin kendi cümlesi:
> *"İşçilerin bekçileri 'sessiz' diyerek ekrana yazı düşürüp uyandırıyorlar;
> hâlbuki **ekrana sessiz yazmak sessiz demek değildir.** Bekçiler kendilerine
> mesaj atılmadan asla kendi oturumlarını uyandırmayacaklar, token harcayacak
> hiçbir şey yapmayacaklar. Sadece kendilerine atılan mesajı tahtadan tespit
> edip oturumlarını uyandıracaklar."*

**ÖLÇTÜM — kusur aletin değil, OTURUMUN.** `arac/tahta_bekci.py` taranarak
ölçüldü: literal *"sessiz"* basımı **yok**; teşhis satırları (`nöbette` ·
`ADRES-TUZAGI` · `ÇIKIYORUM`) zaten `stderr`e gidiyor ve adres tuzağı
22 Eylül'de çıkış sebebi olmaktan **çıkarıldı**. Alet doğru davranıyor.
⇒ Ekrana düşen *"bekçim sessiz"* / *"benlik bir şey yok"* satırlarını
**oturumların kendisi** yazıyor. Kural insanda kaldı, uygulanmadı.

### Bağlayıcı üç madde
```
① BEKÇİYİ ŞÖYLE KUR — başka türlü DEĞİL
   Bash aracı · run_in_background: true · şu komut, AYNEN:
       py arac/tahta_bekci.py --kim "<TAM ADIN>" --cik
   🔴 `2>&1` EKLEME        — teşhisi stdout'a taşır, gürültü olur
   🔴 `--tur` VERME        — tur dolunca MESAJSIZ çıkar ve seni boşuna uyandırır
   🔴 Monitor KULLANMA     — 30 dk'da dolup boşuna uyandırır
   🔴 ScheduleWakeup · /loop · sleep ile tahtayı YOKLAMA — tek yol bekçidir

② UYANDIĞINDA ÖNCE BAK, SONRA KONUŞ
   Gelen kutunda SANA AİT bir şey var mı?
     VARSA  → işle, sonra bekçiyi aynı komutla SESSİZCE yeniden kur
     YOKSA  → 🔴 EKRANA HİÇBİR ŞEY YAZMA. Tek kelime bile.
              Bekçiyi sessizce yeniden kur ve DUR.

③ ŞU CÜMLELER YASAK — her biri bir TAM TUR maliyetidir
   ✗ "bekçim sessiz, bir şey yok"        ✗ "tahtayı kontrol ediyorum"
   ✗ "benlik bir şey yok, yeniden kuruyorum"   ✗ "bekliyorum"
   ✗ "hazırım, iş bekliyorum" (ALINDI dışında)  ✗ ara durum raporu
```
🔴 **Niçin bu kadar sert:** boş bir uyanış, dolu bir turdan **ucuz değildir** —
oturum uyanınca `CLAUDE.md`yi, şartnameyi, bağlamının tamamını yeniden okur.
Ölçüldü: tek bir bilgi duyurusu sekiz oturumu uyandırıp **sekiz tam turluk
bağlam** yaktı. Bu gece haftalık limit **%94 dolu**; bir boş uyanış doğrudan
Emre'nin bütçesinden çıkar.

📌 Daha fazlası: `oturumlar/BEKCI-KURULUMU.md` ·
`C:\claudemre\OTURUM-HABERLESME-PROTOKOLU.md` · `CLAUDE.md §7.1` ve `§7.2 ③④`.
Bekçiyle ilgili bir şey yapmadan önce **bunları oku**; tereddüt edersen sus.

## 7. İlk iş — görevden ÖNCE
```bash
py arac/tahta_bekci.py --kim "<ADIN>" --cik      # run_in_background
py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj "ALINDI · saat <ss:dd> · bekci ACIK · madde sayim <N>"
```
Madde sayını **kendin say** ve yaz — benim listem yanlışsa orada yakalanır.
