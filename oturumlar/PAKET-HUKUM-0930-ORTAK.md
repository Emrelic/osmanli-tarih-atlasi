# PAKET HÜKÜM — ORTAK ŞARTNAME (30 Eylül 2026)

*Koordinatör: YILDIRIM BAYEZIT. Bu dosya dört oturumun ORTAK kurallarıdır;
kendi partin ve kendi çıktı adın sana gelen tahta/`send_message` mesajındadır.*

---

## 0 · NİÇİN BU İŞ VAR — ölçüm

Emre 96 parti gönderdi. 87'sinin hükmü yazıldı, 9'unun yazılmadı. Bugün
`KUTU-GERI-0930` üçünü (0080 · 0081 · 0082) kutuya taşıdı; **geriye altı
parti ve 162 madde kaldı ve bunlara HİÇ HÜKÜM YAZILMAMIŞ:**

```
parti-emrelic-0072   15 madde
parti-emrelic-0073   20
parti-emrelic-0074   17
parti-emrelic-0077   88   ← en büyüğü
parti-emrelic-0078    6
parti-emrelic-0079   16
──────────────────────────
                    162
```

Emre'nin sözü: **"hiçbir paket maddesi kalmamalı… bazıları bitmiş olabilir."**
İkinci yarısı önemli: bu maddeler Eylül başından beri duruyor ve **bir kısmı
aradan geçen işlerle çözülmüş olabilir.** Çözülmüşe "yapılacak" demek bir
oturumu boşa yakar; çözülmemişe "çözüldü" demek kusuru gömer.

---

## 1 · HÜKÜM SÖZLÜĞÜ — on beş kelime, TEK otorite

Tek otorite `C:/claudemre/kutu/asama.py` içindeki `HUKUMLER` tablosudur.
Tabloda olmayan kelime YAZILMAZ.

```
İŞ BİTTİ
  cozuldu        YAPILDI — değişiklik İNDİ (delil: canlı dosya ya da commit)
  once-cozuldu   MÜKERRER — önceki bir pakette çözülmüş (künyesi not'ta)
  zaten-dogru    HATA DEĞİLDİ — doğrusu buymuş, iş iddia edilmedi
SÜRÜYOR / SIRADA
  sirada         kabul edildi, YAPILACAK — henüz yapılmadı
  kosu-bekliyor  hüküm YAZILDI, uygulama PETEK KOŞUSUNA bağlı
  olculecek      hüküm için ÖNCE ölçüm gerekiyor
TOP EMRE'DE
  senin-kararin  SEÇENEKLER sunuldu — hangisi olacağını Emre seçecek
  onay-bekliyor  yapıldı/önerildi — Emre'nin *tamam*ı bekleniyor
OLMADI
  cozulemedi     DENENDİ, olmadı — sebebi not'ta
  yapilamaz      YAPISAL olarak mümkün değil
  vazgecildi     soruldu, EMRE vazgeçti (koordinatörün kararı DEĞİL)
  gerek-yok      koordinatörün GEREKÇELİ hayırı
MADDENİN KENDİSİ
  tekrar         aynı şikâyet İKİNCİ kez (ikizin künyesi not'ta)
  bayat          şikâyet doğruydu ama ARADA çözüldü (D044)
  kapsam-disi    bu proje bunu yapmıyor — `ONCELIK.md` gerekçesi
```

🔴 **En sık karıştırılan dört çift — karıştırmanın bedeli yazılı:**
```
gerek-yok  ≠ vazgecildi   biri KOORDİNATÖRÜN, öteki EMRE'NİN kararı
yapilamaz  ≠ cozulemedi   biri HİÇ DENENMEZ, öteki DENENDİ ve olmadı
cozuldu    ≠ bayat        biri BU maddenin işi, öteki ARADA başka iş çözdü
sirada     ≠ kosu-bekliyor ikincisi bizi değil MAKİNEYİ bekliyor
```

⚠️ `gerek-yok` · `senin-kararin` · `vazgecildi` · `yapilamaz` · `cozulemedi`
· `kapsam-disi` **GEREKÇESİZ YAZILAMAZ.**

---

## 2 · 🔴 EN ÖNEMLİ KURAL: DELİLSİZ `cozuldu` YOK

Bugün ölçüldü ve iki kez canımızı yaktı:

- Bir rapor *"YAYINA ÇIKTI"* dedi; sürüm damgası eskide kalmıştı, önbellekli
  tarayıcı yeni HTML + eski JS görüyordu.
- `SIRADA-ENVANTER-0930` ölçtü: 496 `sirada` maddesinin **330'u** Eylül
  ortasında zaten dağıtılmış, 54'ünde akımın kendi raporu ✅ diyor — ama
  yalnız **32'sinde** kart kimliklerinin hepsi canlı `data/*.js`te var.
  ⇒ Raporun "✅"si **delil değildir.**

**Delil sayılan üç şey:**
```
① canlı dosyada VARLIK   ör. kimlik/kayıt data/*.js içinde bugün duruyor
                          (dosyayı OKU, grep'le doğrula, satırı yaz)
② commit karması          git log ile bulunmuş, dosyayı gerçekten değiştiren
③ tarayıcıda ölçüm        arayüz maddesi için: DOM/console ile ölçülmüş
```
Hiçbiri yoksa `cozuldu` YAZMA — `olculecek` yaz ve neyin ölçülemediğini söyle.

---

## 3 · YÖNTEM — her madde için, sırayla

```
① MADDEYİ OKU   giden/<parti>/ altındaki .md dosyası + ekli .png görselleri
                (görsel VARSA ona BAK — çoğu madde bir ekran görüntüsüne
                 dayanıyor ve metin tek başına eksik)
② SINIFLANDIR  şikâyet neyin hakkında: harita görünümü · veri (yerleşim/
                künye/kronoloji) · arayüz · motor · kaynak · kapsam
③ BUGÜNKÜ HÂLİ ÖLÇ  🔴 asıl iş bu. Şikâyet BUGÜN hâlâ geçerli mi?
                     - veri maddesi → ilgili data/*.js'i OKU
                     - arayüz maddesi → js/app.js · css/style.css · index.html
                     - harita görünümü → veriyi ve motorun kuralını oku
                     Ölçemiyorsan `olculemedi` de, TAHMİN ETME.
④ HÜKÜM YAZ    sözlükten tek kelime + `not` (ne ölçtüm, delil ne)
```

📌 **Ölçüm doğru, çıkarım yanlış** ailesine dikkat: bir şikâyetin sebebi
çoğu zaman sandığın yerde değil. Bugün iki işçi benim teşhisimi çürüttü ve
ikisi de haklıydı. Şikâyetin SEBEBİNİ ölçmeden hüküm yazma.

📌 **CLAUDE.md §2 — en sık sebep:** *"Noktası olmayan bölge en yakın peteğe
emilir ve O PETEĞİN SAHİBİYLE boyanır."* "Harita yanlış" diyen bir maddede
İLK SORU: **o bölgede yerleşim noktası var mı?**

---

## 4 · SINIRLAR — kesin

- **HİÇBİR MADDEYİ UYGULAMA.** Sen hüküm yazıyorsun, iş yapmıyorsun.
  Uygulama ayrı bir sevkle, ayrı oturuma gider.
- Yazabileceğin tek yer: `denetim/<KENDİ ADIN>.md` ve `.json`.
  `C:/claudemre/kutu` YALNIZ OKU (CEVAP.json'u ben yazarım).
- `data/` · `arac/` · `js/` · `index.html` · `css/` · `oturumlar/` **YALNIZ OKU.**
- `git add` / `commit` / `push` **YASAK.**
- 🔴 **KOŞU SÜRÜYOR** (`C:/atlas-kosu18`). `data/` ve `arac/` DONMUŞ —
  okumak serbest. **`C:/atlas-kosu18` klasörüne HİÇ GİRME.**
- 🔴 **`py arac/denetle.py` ÇALIŞTIRMA** — ölçülen tepesi 2,4 GB ve boş RAM
  1,5 GB; koşuyu öldürür. Tarayıcı ölçümü de koşu bitene kadar YOK;
  gerekiyorsa maddeyi `olculecek` bırak, ben sonra ölçtürürüm.
- 🔴 Tarih uydurma, koordinat uydurma, kaynak alıntısı uydurma. Gün
  bilinmiyorsa `YYYY-01-01`; yıl bilinmiyorsa YIL YAZMA. Bulamadıysan
  `bulunamadı` yaz — **bu bir SONUÇTUR.**
- Türkçe karşılaştırmada `lower()` KULLANMA (`"İ".lower()` iki kod noktası
  verir) → `denetim/ARAC-NORMAL-0903.py` normalleştiricisi.

---

## 5 · ÇIKTI

```
denetim/<ADIN>.json   {parti, madde: {"H-0001": {hukum, not, delil, sinif}}}
denetim/<ADIN>.md     insan için: madde başına tek satır + hüküm dağılımı
```
`delil` alanı: `cozuldu`/`bayat`/`once-cozuldu` yazdığın her maddede ZORUNLU
(dosya+satır ya da commit karması). Boş bırakamazsın.

---

## 6 · HABERLEŞME — CLAUDE.md §7.1

Tek kanal tahta. Koordinatörün ekranına YAZMA.

```bash
py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj "..."
```
Uzun ya da Türkçe metin komut satırına GÖMÜLMEZ — `Write` ile dosyaya yaz,
sonra `--mesaj-dosya <dosya>` ile ver, ve `tahta.json`dan **geri oku**.
"Yazdım" teslim kanıtı değildir.

**TESLİM — üçlü kural, eksiksiz:**
```
① ne ölçtüm     sayıyla (kaç madde, hüküm dağılımı)
② ne bulamadım  açıkça — `bulunamadı` bir sonuçtur
③ ne istiyorum  tek cümle; seçenekliyse şıklarıyla
```
\+ ürettiğin dosyalar. Sonuna tek satır: **"bekçimi öldüreyim mi?"**

⚠️ **AKSAKLIK BEKLEMEZ** (§7.1 ⑥): bir madde başka oturumun dosyasını
istiyorsa · kaynaklar çelişiyorsa · sayı beklenenden çok farklıysa · madde
yetkini aşıyorsa → **hemen yaz**, işin sonunu bekleme.

**BEKÇİ:** kaynak kapısı yürürlükte (`kod KOSU`) ve muaf değilsin —
`tahta_bekci.py` çıkış 3 verir. **KURMA.** Teslim et ve DUR; devam görevi
`send_message` ile gelir.
