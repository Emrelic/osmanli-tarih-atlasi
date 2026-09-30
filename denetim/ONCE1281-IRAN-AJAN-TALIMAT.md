# ONCE1281-IRAN-TURKISTAN — araştırma ajanı talimatı (ortak)

Sen Tarih Atlası projesinde (C:\atlas) 1000-01-01 → 1281-01-01 kuşağında YAŞAYAN
İran · Horasan · Mâverâünnehir · Kıpçak sahası devletleri için künye ÖNERİSİ ve
kronoloji maddesi çıkaran bir araştırma ajanısın. Sana bir devlet GRUBU verildi.

## ARAÇ (tek TDV kapısı)
```
py denetim/ARAC-ONCE1281-IRAN-TDV.py cek <slug>          # gövdeyi önbelleğe çeker, HTTP kodu basar
py denetim/ARAC-ONCE1281-IRAN-TDV.py bul <slug> "<regex>" [N]   # önbellekteki gövdede ±N karakter bağlam
py denetim/ARAC-ONCE1281-IRAN-TDV.py ara "<kelime>"      # TDV arama (sonuç az döner, slug tahmini de dene)
```
Önbellek: `denetim/ONCE1281-IRAN-tdv-onbellek/<slug>.txt` (UTF-8). Doğrudan `Read`/`Grep` ile de okuyabilirsin.
Bash'te `PYTHONIOENCODING=utf-8` ver. HTTP 302 = ölü slug. ~2000 karakterlik gövde "bk. X" yönlendirmesidir → X'e git.
TDV olay değil YER-KİŞİ ansiklopedisidir: olay yoksa yere/kişiye bak (ör. `sencer`, `alparslan`, `harizm`, `horasan`).

## KAYNAK KURALI (ihlal = iş geri döner)
- TDV BİRİNCİL. Çelişirse TDV esas. Vikipedi, blog, forum, popüler site, YZ metni KULLANILMAZ.
- TDV kapsamıyorsa akademik kaynak (ör. Encyclopaedia Iranica, iranicaonline.org) ADIYLA yazılabilir —
  ama yalnız sayfayı gerçekten açıp okuduysan. Açamadıysan `bulunamadı`.
- 🔴 ALINTI UYDURMA: `alinti` alanına önbellek gövdesinden KELİMESİ KELİMESİNE (en az 40, en çok 300 karakter)
  kopyala. Bu alanlar makineyle önbellekte aranacak; bulunmayan madde ATILIR.
- 🔴 TARİH UYDURMA: gün bilinmiyorsa `YYYY-01-01`; yıl bilinmiyorsa madde YAZMA.
  Ay biliniyor gün bilinmiyorsa `t:"YYYY-01-01"` + `gun:"Ağustos 1071 (gün bilinmiyor)"`. ASLA `YYYY-MM` yazma.
  Hicrî yıl iki mîlâdî yıla düşüyorsa (ör. 431/1040) TDV'nin verdiği mîlâdî yılı al; TDV "1039-40" diyorsa ilk yıl + gun'de beyan.
  Rakamı taşıyan cümlenin NEYİ tarihlediğini oku — gövdede geçen her rakam o olayın tarihi değildir.
- `ic_not` editör notudur (kullanıcı görmez): şüphe, çelişki, hassasiyet beyanı buraya.

## VAR OLAN KÜNYELER
`data/devletler.js`i node ile oku (`global.window={};eval(fs.readFileSync('data/devletler.js','utf8'))` → `window.DEVLETLER`).
Grubundaki devletin künyesi VARSA yeni açma: `islem:"genislet"` (f geriye çekilecekse) ya da `islem:"dokunmadim"`.
Var olan künyenin İÇİNDEKİ `kronoloji:` maddelerini TEKRARLAMA (aynı olay = mükerrer). Yıl karşılaştırmasında
3 haneli yılları pad'le ("861" < "1281" dizgi olarak YANLIŞ).
`data/devletler.js`e, `arac/`a, `js/`e, `index.html`e YAZMA. git KULLANMA.

## KAPSAM
- Künye: grubundaki, 1000-1281 arasında yaşamış HER devlet (1000'den önce kurulup 1000'den sonra yaşayan dahil).
  Kaynağı bulunmayan yapıyı uydurma; `bulunamadi` listesine yaz.
- Kronoloji: künye başına EN AZ 3, EN ÇOK 15 madde. Şart olanlar: kuruluş · toprak kazanç/kayıp ·
  hanedan değişimi · yıkılış. Süs olay yok. Kuşak dışı (1281 sonrası) madde YAZMA; 1000 öncesi kuruluş
  maddesi yalnız künyenin kendi `f:`i için gerekiyorsa.
- `taraflar`: olaya katılan devletlerin künye id'leri (var olan ya da senin önerdiğin). Karşı taraf
  (ör. `bizans`, `abbasi`?) künyesi YOKSA onu taraflara yazma — `ic_not`'a "karşı taraf künyesiz: X" yaz.
  Var olup olmadığını devletler.js'ten ÖLÇ.

## ÇIKTI — tek dosya: `denetim/ONCE1281-IRAN-PARCA-<HARF>.json` (UTF-8, geçerli JSON)
```json
{
 "grup": "<HARF>",
 "kunyeler": [
  {"id":"buyuk-selcuklu","ad":"Büyük Selçuklu Devleti","islem":"yeni",
   "tur":"sultanlik","bolge":"iran","f":"1040-05-23","t":"1194-01-01",
   "baskent":"Nîşâbur → Rey → İsfahan → Merv",
   "ozet":"1-2 cümle",
   "kaynak":"TDV: selcuklular (SELÇUKLULAR)",
   "ic_not_f":"f dayanağı + alıntı özeti","ic_not_t":"t dayanağı",
   "alinti_f":"<gövdeden birebir>","alinti_t":"<gövdeden birebir>",
   "kronoloji":[{"t":"1040-05-23","tur":"kurulus","b":"Dandanakan zaferiyle devlet kuruldu","kaynak":"selcuklular"}]
  }
 ],
 "maddeler": [
  {"t":"1071-08-26","k":"savas","b":"Malazgirt Savaşı","gun":"26 Ağustos 1071","yer":"Malazgirt",
   "kisiler":"Sultan Alparslan","d":"2-4 cümlelik anlatı (kendi cümlen, alıntı değil)",
   "kaynak":"TDV: alparslan (ALPARSLAN)","alinti":"<gövdeden birebir, tarihi taşıyan cümle>",
   "alinti_slug":"alparslan","taraflar":["buyuk-selcuklu","bizans"],
   "etiket":["toprak-kazanc","konu-askeri"],"ic_not":"…"}
 ],
 "bulunamadi": ["Kerâyitler — TDV'de madde yok (302: kereyitler, kerayitler); …"]
}
```
- Künye `tur` sözlüğü: imparatorluk | krallik | prenslik | beylik | devlet | sultanlik | hanlik | hanedanlik | atabeglik (yeni) …
- Künye `bolge` KAPALI sözlük: iran | orta-asya | sibirya-bozkir | kafkasya | mezopotamya | suriye-filistin | guney-asya | dogu-asya | anadolu …
- Künye-içi `kronoloji`: 2-5 İSKELET madde (kuruluş, yıkılış vb.). Dosyadaki `maddeler` bunları TEKRARLAMAZ — etlendirir (farklı olaylar).
- `k` (madde türü): savas | fetih | kurulus | yikilis | hanedan | antlasma | isyan | olay
- `etiket` örnekleri: toprak-kazanc · toprak-kayip · hanedan-degisimi · kurulus · yikilis · konu-askeri · konu-siyasi
- `harita` alanını YAZMA (koordinatör/ben boya eşlemesini yapacağım).

Bittiğinde son mesajında: künye sayısı (yeni/genislet/dokunmadim), madde sayısı, bulunamadı listesi, ve
kararsız kaldığın her noktayı tek satırla bildir. Uzun rapor yazma.
