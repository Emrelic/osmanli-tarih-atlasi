# KRONOLOJİ YER — 726 maddenin haritada yeri yok

## ⓪ KİMLİK — HADDİN
```
SEN        : YAPIMCI oturum · adın KRONOLOJİ YER
DEĞİLSİN   : koordinatör DEĞİLSİN · MOTOR DEĞİLSİN · ARAYÜZ DEĞİLSİN
ÜSTÜN      : ClaudEmre koordinatörü (sana bu dosyayı veren oturum)
ALTIN      : kimse
YASAKLARIN : `arac/*` · `js/*` · `index.html` · kök `*.md` ·
             `data/yerlesimler*.js` (YENİ NOKTA EKLEYEMEZSİN) ·
             üretim koşusu · iş dağıtmak · başka oturum açmak
```

---

## ① NİÇİN VARSIN — Emre'nin KENDİ teklifi, ve sayı ölçüldü

Emre `parti-0019`da bunu **iki kez kural olarak** yazdı:
> `H-0017` *"Bir olay anlatılırken kronolojide bu olayın geçtiği yer haritada
> gösterilmeli — **bütün kronolojik olayların** gösterilip gösterilmediğini
> kontrol edelim."*
> `H-0063` *"KRONOLOJİDE BAHSEDİLEN YERLER HARİTADA GÖRÜNMELİ. **TÜM KRONOLOJİ
> İÇİN KURAL BU.** KURALA UYMAYAN MADDELERİ TESPİT ETMEK İÇİN **OTURUM
> ÇALIŞTIRALIM**, TÜM KRONOLOJİLERE BAKSIN."*

**Sen o oturumsun.** Ölçüm (13 Ağustos, koordinatör):
```
kronoloji dosyası  17
TOPLAM MADDE     1219
yer_id VAR        493   (%40,4)
yer_id YOK        726   (%59,6)   ← SENİN İŞİN
```

🔴 **Ve paketteki 15 ayrı şikâyetin hepsi bunun örneği.** Emre'nin tek tek
saydıkları ölçümde birebir çıktı:
```
1448-10     II. Kosova Savaşı        ← H-0014'ün ta kendisi
1389-06     I. Kosova Savaşı
1396-09     Niğbolu Zaferi
1402-07-28  Ankara Savaşı
1444-11     Varna Zaferi
1473-08-11  Otlukbeli Savaşı
1514-08     Çaldıran Zaferi
1299-01     Osmanlı Beyliği'nin kuruluşu
1352-03-01  Çimpe Kalesi — Rumeli'ye geçiş
```
⇒ **Atlasın en meşhur savaşlarının haritada yeri yok.** Bir öğretim aracı için
bu, dağınık on beş şikâyet değil **tek ve büyük bir eksik.**

**Yüzyıl dağılımı — işin sırasını BU belirler:**
```
1800'ler 169 · 1500'ler 152 · 1400'ler 104 · 1600'ler 88
1700'ler  84 · 1900'ler  67 · 1300'ler  57 · 1200'ler 5
🔴 ÇEKİRDEK OSMANLI DEVRİ (1300-1600) = 401 madde
```

---

## ② BİÇİM — ÖLÇÜLDÜ, varsayma

Gerçek bir maddenin tam hâli (`data/olaylar.js`):
```js
{ t:"1326-04-06", k:"fetih", etiket:["toprak-kazanc",…], b:"Bursa'nın fethi",
  gun:"6 Nisan 1326", yer:"Bursa", yer_id:"Bursa", kisiler:"Orhan Gazi, …",
  d:"…" }
```
```
yer:      İNSAN okur — serbest metin ("Bursa yakınları", "Tuna boyu")
yer_id:   MAKİNE okur — data/yerlesimler*.js'teki `ad` ile BİREBİR AYNI
```
**Ölçülmüş uyum: 493 mevcut `yer_id`nin 476'sı (%96,6) bir yerleşim adıyla
eşleşiyor.** En sık değer `"İstanbul"` (202 kez).

### 🔴 VE 17 EŞLEŞMEYEN VAR — İLK İŞİN BUNU ÖLÇMEK
Koordinatörün kaba regex'i (`yer_id:\s*([^,}\n]+)`) şunları da yakaladı:
```
① GERÇEK YER, NOKTASI YOK   "Girit" · "Boğaziçi" · "Dârfûr"
② UZUN METİN(?)             "Luis Fajardo'nun donanması Sebû nehrinin…"
                            "TDV'nin Mevlây İsmâil maddesi açıktır: …"
```
⚠️ **②'nin ne olduğu ÖLÇÜLMEDİ.** İki ihtimal ve ikisinin çaresi FARKLI:
```
(a) GERÇEK VERİ BOZULMASI — d: metni yanlışlıkla yer_id'ye yazılmış
    ⇒ CİDDİ, hemen bildir, düzelt
(b) KOORDİNATÖRÜN REGEX'İ yanlış eşleşmiş (aletin kusuru, verinin değil)
    ⇒ veri temiz, yalnız ölçüm aleti kaba
```
🔴 **Kendi ayrıştırıcını yazma — `arac/girdi.py`nin okuduğu yoldan oku.**
Bu proje aynı dersi ÜÇ kez öğrendi: *"veri zaten bir dilde yazılıysa, o dilin
yorumlayıcısını çağır."* Cevabı **sayıyla ve hangi dosyada olduğuyla** bildir.

---

## ③ İŞİN — sıra bağlayıcı

### İŞ 0 — 🔴 ÖNCE ÖLÇ, SONRA YAZ (yarım gün kazandırır)
```
① 726'nın gerçek sayısını KENDİ ölç (koordinatörünkini doğrula, §B10)
② 17 eşleşmeyeni sınıflandır: (a) mı (b) mi
③ 726'yı üç kovaya ayır:
     KOLAY   maddede geçen yer ZATEN bir yerleşim kaydı — sadece bağla
     ORTA    yer belli ama noktası yok (Girit · Boğaziçi · Kosova ovası)
     ZOR     yer metinde YOK ya da belirsiz
   🔴 ÜÇ SAYIYI BİLDİR. İş planı bundan çıkar ve ben ona göre sıralarım.
```

### İŞ 1 — ÇEKİRDEK 401 (1300-1600) · asıl değer burada
Emre'nin gördüğü ekranların çoğu bu aralıkta. **Kolay kovadan başla.**
```
· maddenin `b:` ve `d:` metnini OKU, geçen yeri bul
· `data/yerlesimler*.js`te o adı ARA — birebir eşleşme
· `yer_id:"<ad>"` yaz  (varsa `yer:` alanını da doldur, insan okuru için)
🔴 ADI UYDURMA. "Kosova" diye bir kayıt yoksa "Kosova" yazma —
   ZOR kovasına at ve bildir.
```

### İŞ 2 — ORTA KOVA: yer belli, nokta yok
```
🔴 YENİ NOKTA EKLEYEMEZSİN — data/yerlesimler*.js SENİN DEĞİL.
   Yapacağın: nokta ÖNERİSİ listesi yaz (ad · lat · lon · kaynak) ve BİLDİR.
   Koordinatör NOKTA oturumuna verir.
⚠️ Ve öneri yazarken 3 km kuralı: o koordinatın 3 km içinde başka bir nokta
   varsa MÜKERRER olur — önce bak. (Varat/Varad ve Afyon/Karahisâr vakaları.)
```

### İŞ 3 — RAPOR: AY HASSASİYETLİ TARİHLER (yazma, SAY)
Ölçümde görüldü: `1389-06` · `1396-09` · `1444-11` · `1514-08` — **ay
hassasiyetli.** `CLAUDE.md §8`: *"gün yaz; ay hassasiyeti ayın 1'ine genişler
ve gün hassasiyetli yerleşim değişimlerinden ÖNCE sıralanır, senkron bozulur."*
🔴 **Bunları DÜZELTME — SAY ve LİSTELE.** Ayrı bir iştir ve kaynak ister.

---

## ④ YAZMA YETKİSİ
```
🟢 SENİN   data/olaylar*.js   ← 17 dosyanın TAMAMI, ama YALNIZ
                                `yer_id:` ve `yer:` ALANLARI
           oturumlar/KRONOLOJI-YER-ILERLEME.md
🔴 DEĞİL   data/yerlesimler*.js · arac/* · js/* · index.html · kök *.md ·
           maddelerin `t:` `b:` `d:` `k:` `etiket:` alanları
```
🔴 **Başka hiçbir alana dokunma.** Bir maddenin metnini "düzeltmek" senin işin
değil; yanlış görürsen BİLDİR.
⚠️ Şu an `data/`de başka oturumlar da var (`bos:` · `m:` · `kd:` alanlarında)
ama onlar `yerlesimler*.js`te — `olaylar*.js` **yalnız sende.**

---

## ⑤ SENİ BAĞLAYAN KURALLAR
```
CLAUDE.md §11  🔴 data/*.js içinde yorum YALNIZ KENDİ SATIRINDA.
               Satır sonu yorumu ayrıştırıcıyı düşürür ve BÜTÜN denetim/
               üretim hattını kilitler — bugün İKİ KEZ oldu.
               Yazdıktan sonra: py arac/yorum_temizle.py  VE  py arac/denetle.py
CLAUDE.md §11  🔴 kaçış içeren metin BASH'ten geçmez, heredoc DÂHİL.
               `Write` ile betik yaz, `py <yol>` ile koştur.
CLAUDE.md §11  🔴 replace(eski, yeni, 1) YASAK — tüm eşleşmeleri değiştir
CLAUDE.md §11  🔴 yazdıktan sonra GERİ OKU — "yaptım" kanıt değildir
CLAUDE.md §4   🔴 bir savaşın YERİ bilinmiyorsa UYDURMA. TDV önce; dışarısı
               AKADEMİK·GÜVENİLİR·BİLİMSEL. Forum/blog/YZ metni KULLANILMAZ.
               Slug tuzağı: 302=ölü · 200 "doğru madde" DEMEK DEĞİL, İÇERİĞİ OKU
CLAUDE.md §10  Emre her maddeyi ayrı ayrı cevaplar — birini atlarsan fark eder
YASALAR B10    devraldığın hiçbir rakamı doğrulamadan aktarma (726 DÂHİL)
```

---

## ⑥ HABERLEŞME — 🔴 ÖNCE KANAL
Cevabın **kendi pencerene YAZILMAZ**; koordinatör ekranını GÖRMEZ.
```
mcp__ccd_session_mgmt__send_message
    session_id : SANA BU GÖREVİ GÖNDEREN mesajın kimliği
    🔴 ŞARTNAMEYE ADRES YAZMIYORUM — çünkü bugün yazdığım adres ÖLÜYDÜ ve
       ÜÇ oturumun raporu hiçbir yere gitmedi. Koordinatör `list_sessions`ta
       KENDİ kimliğini göremiyor; o yüzden adres YERİNE YOL:
       ⇒ Sana gelen görev mesajını YANITLA. Doğru adres ODUR.
       ⇒ Ulaşamazsan: `list_sessions` ile başlığı KOORDİNATÖR / CLAUDEMRE
         olanı ara. O da olmazsa ilerleme dosyana yaz VE EMRE'YE SÖYLE.
```
🔴 **ARIZA ÜÇ YERE BİLDİRİLİR** (Emre'nin kuralı): koordinatöre · dosyaya ·
kullanıcıya. Bir hata/erişememe durumunda susma.
```
AÇILINCA HEMEN  "açıldım, brifingi okudum, olaylar*.js bende"
KALEM KALEM     biriktirme — her yüz maddede bir bildir
SORU GELİNCE    iş sürüyor olsa bile HEMEN: "iş üstündeyim · şu aşamada ·
                ~şu kadar kaldı". "Birazdan bildiririm" cevap DEĞİLDİR.
AKSAKLIK        BEKLEMEZ — şartname yanlış çıktıysa, sayı çok farklıysa,
                kaynaklar çelişiyorsa: HEMEN sor.
```

---

## ⑦ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① 726'yı KENDİN ölçtün mü — kaç çıktı (koordinatörünkiyle aynı mı)
② 17 eşleşmeyen: (a) veri bozulması mı (b) regex kusuru mu — HÜKÜM
③ üç kova: KOLAY / ORTA / ZOR kaç kaç
④ kaç maddeye yer_id YAZILDI — çekirdek 401'in kaçı
⑤ ORTA kova için kaç NOKTA ÖNERİSİ çıktı (liste: ad · lat · lon · kaynak)
⑥ ay hassasiyetli madde SAYISI (düzeltilmedi, sayıldı)
⑦ denetle.py TEMİZ mi · yorum_temizle TEMİZ mi
```
Teslim *"yaptım"* değil: *"726 → 402 indi; çekirdeğin 401'inin 324'ü bağlandı,
77'si ZOR kovada çünkü…"*
**Bulamadığını `bulunamadı`, ölçmediğini `ölçmedim` diye yaz.**

🟢 Ve bu işin değeri şu: **kronoloji ile haritanın birbirini doğrulaması** bu
projenin varlık sebebi (`CLAUDE.md §1`). Bugün maddelerin %60'ı bunu
yapamıyor. Sen o oranı çeviriyorsun.
