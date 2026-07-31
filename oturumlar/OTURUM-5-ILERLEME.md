# Oturum 5 — İlerleme (Dünya Hükümdarları + Kişi Ekseni + 5. Boyut)

Görev tanımları: `oturumlar/OTURUM-5-HUKUMDARLAR.md` (1. faz) ve merkez
oturumun gönderdiği denetim + devam görevi (2. faz). Yazılan dosyalar:
`data/kisiler.js` (yalnız ekleme/zenginleştirme) ve iki `oturumlar/OTURUM-5-*.md`
belgesi. `data/devletler.js`, `data/olaylar*.js`, `arac/` yalnız okundu.

---

## 1. FAZ — Dünya hükümdarları (önceki turda tamamlandı)

90 → 247 kişi (157 yeni yabancı hükümdar kaydı). Ayrıntı: bu dosyanın önceki
sürümünde vardı, aşağıdaki 2. faz özetinde de tekrarlanıyor. 8 parti +
1 ek parti halinde `data/devletler.js`'in 212 kaydının kronolojisinden
çıkarıldı.

---

## 2. FAZ — Denetim bulgusu + devam görevi

### 2.1 Şema genişletildi, 247 kayıt göç ettirildi

`KISILER` şeması `tur, ad, donem, not` (+ Oturum 5/1. fazda eklenen `devlet`)
idi. Eklenenler: **`id` · `f` · `t` · `dogum_yer` · `dogum_lat` · `dogum_lon`
· `olum_yer` · `eser`**. Hepsi mevcut 247 kaydın üzerinden **script ile**
göçürüldü (247 kayıt elle tek tek düzenlenemeyecek kadar çoktu — bkz.
`oturumlar/OTURUM-5-KIMLIK-KURALI.md`'deki gerekçe).

**`id`** — 247/247 kayda eklendi, 0 çakışma. Kural belgesi:
`oturumlar/OTURUM-5-KIMLIK-KURALI.md`. Kural, `data/padisahlar.js`'teki
mevcut `id` örneğinden (`osman1` vb.) genellendi — icat edilmedi, zaten
var olan bir emsalle hizalandı.

**`f`/`t` (doğum-ölüm)** — ⚠️ **ölçülmüş bir tuzak burada bulundu ve
düzeltildi.** İlk mekanik geçiş, `donem` alanı tek başına `"YYYY–YYYY"`
biçimindeyse bunu doğum-ölüm sandı. Bu, **9 sadrazam kaydında YANLIŞ
çıktı** — çünkü o kayıtlarda `donem` GÖREV SÜRESİ'ydi, yaşam aralığı değil
(ör. Sokullu Mehmed Paşa `"1565–1579"` sadrazamlık süresi; gerçek yaşamı
1505-1579). Aralık uzunluğuyla (eşik 25 yıl — vezirlik süreleri hep altında,
gerçek yaşamlar hep üstünde çıktı, ölçülerek seçildi) ayrıştırıp bu 9 kaydı
geri aldım, sonra kendi bilgimle gerçek doğum/ölüm yıllarını yazdım (bazılarında
yalnız ölüm yılı — doğum yılı kaynaklarda tartışmalıysa uydurmadım, boş
bıraktım). **Sonuç: 224/276 kayıtta f ve/veya t var; 52 kayıtta yok** (çoğu
`donem`'i "14. yy" gibi yüzyıl metni olan ya da görev süresi olup ayrı
araştırma gerektiren eski dönem figürleri — bilinçli olarak boş bırakıldı).

**`dogum_yer`/`dogum_lat`/`dogum_lon`/`olum_yer`** — yalnız **19 kayıtta**
dolduruldu (hepsi 5. boyut eklerinde, aşağıya bkz.) çünkü koordinat + yer
bilgisini 276 kişi için tek tek araştırmak bu turun kapsamını aşıyordu.
**Kasten eksik bırakıldı, uydurulmadı.**

**`eser`** — 15 kayıtta (bilim/mimarlık/edebiyat figürlerinde).

### 2.2 PADİŞAHLAR ↔ KİŞİLER mükerrer denetimi

Ölçüldü: `PADISAHLAR` (41 kayıt) ile `KISILER` (276 kayıt) arasında **tam ad
eşleşmesiyle 0 mükerrer.** `KISILER` gerçekten "padişah dışı kadro" olarak
kalmış. Tek mevcut mükerrer, iki oturum öncesinden kalma "Mustafa Reşid Paşa"
(satır ~27 ve ~91, `KISILER` içinde kendi kendine tekrar) — bu benim eklediğim
bir şey değil, dosya sahipliği kuralı gereği dokunmadım.

### 2.3 `devlet:` alanı — kapsam genişletildi + tutarlılık ölçüldü

Oturum 5/1. fazda yalnız yeni 157 kayıt `devlet:` taşıyordu. Bu turda **13
eski (`OTURUM-5-HUKUMDARLAR.md`'den önce var olan) `yabanci-hukumdar` kaydına
da eklendi**: XI. Konstantinos→bizans, Timur→timurlu, Uzun Hasan→akkoyunlu,
Şah İsmail→safevi, Kansu Gavri→memluk, Şah Tahmasb→safevi, Kral II. Layoş→
macaristan, Jan Sobieski→lehistan, Çar I. Petro→rusya, II. Katerina→rusya,
Şerif Hüseyin→hicaz-kralligi. **166 `yabanci-hukumdar` kaydının 164'ünde artık
`devlet` var** (2 kasıtlı boşluk aşağıda).

**Ölçülmüş tutarlılık:** `devlet:` alanındaki her değer `data/devletler.js`
`id` alanıyla **1:1 eşleşiyor — 168/168, 0 uyumsuz.**

**Ölçülmüş 2 kapsam boşluğu (`devletler.js`'in kendi eksiği, benim hatam
değil, rapor ediliyor):**
- **János Zápolya** (1526-1540 Osmanlı destekli Macar kral) — `devletler.js`
  `macaristan` kaydı Mohaç'ta (1526-08-29) BİTİYOR, `erdel` kaydı ise
  1570'te BAŞLIYOR. Aradaki 44 yıllık Zápolya saltanatını kapsayan hiçbir
  `id` yok.
- **Napolyon Bonapart** (Fransa hükümdarı olarak, 1804-1814/15) — `devletler.js`
  `fransa` kaydı 1792'de (krallığın ilgası) BİTİYOR, sonrası (Cumhuriyet/
  Konsüllük/İmparatorluk) için ayrı bir kayıt yok.

Bu iki kayıt `devlet:` alanı **boş bırakılarak** işaretlendi; yanlış bir id
zorlanmadı.

**`habsburg` / `avusturya` çakışması — ölçüldü, KASITLI olarak `habsburg`
kullanıldı:** `DURUM.md §d` ve `ETIKETLEME.md §5`'in işaret ettiği vaka
doğrulandı: `data/devletler.js`'te kayıt `id:"habsburg"` ama `harita:"avusturya"`
taşıyor (iki ayrı ad alanı, İKİ AYRI amaç için — `id` devlet dizini kimliği,
`harita` yalnız `arac/renkler.py`'nin BOYALAR sözlüğü karşılığı). `ANTLASMALAR.taraf`
da (33/33 kayıt) tutarlı biçimde `"habsburg"` kullanıyor. Bu yüzden
`KISILER.devlet` alanı da **`"habsburg"`** yazıldı — hem `DEVLETLER.id` hem
`ANTLASMALAR.taraf` ile hizalı. `arac/renkler.py`'deki `"avusturya"` anahtarı
ayrı bir isim uzayı (harita boyası) ve bu turda dokunulmadı. **Nihai
tekilleştirme kararı (`avusturya` mı `habsburg` mı kanonik olacak) `ETIKETLEME.md
§5`'teki `data/kimlikler.js` işi — o iş yapılmadan hiçbir dosyada zorla
"düzeltme" yapmadım.**

### 2.4 5. BOYUT — bilim, mimarlık, edebiyat (fiilen başlatıldı)

**Yöntem — ölçümle başladı, hayalden değil:** `data/olaylar*.js`'teki 924
maddenin `etiket` alanı `bilim` ya da `kultur-sanat` içeren ya da `k` alanı
`bilim`/`kultur` olan **89 maddenin `kisiler` alanı** tek tek okundu. Yalnız
**gerçekten bu maddelerde adı geçen** isimler eklendi — hiçbir isim
"muhtemelen ilgilenir" diye eklenmedi (`CLAUDE.md §1.6`'daki 8. boyut/konu
başlıkları sınırı aşılmadı: yalnız KİŞİ kaydı eklendi, "Osmanlı mimarlığının
gelişimi" gibi konu maddesi yazılmadı).

**29 yeni kayıt eklendi:**
- **Mimarlık (4, yeni `tur:"mimar"`):** Mimar Sinan, Sedefkâr Mehmed Ağa,
  Garabet Balyan, Nikoğos Balyan.
- **Bilim (13):** Ali Kuşçu, Pîrî Reis, Takıyyüddin er-Râsıd, Seydi Ali Reis,
  Hezârfen Ahmed Çelebi, Kâtib Çelebi, Evliya Çelebi, İbrahim Müteferrika,
  Said Efendi, Hüseyin Rıfkı Tamânî, Mustafa Behçet Efendi, Ahmed Cevdet Paşa,
  Hoca Tahsin Efendi.
- **Tasavvuf/fikir (2):** Ebüssuûd Efendi, Vânî Mehmed Efendi.
- **Edebiyat/basın (4, yeni `tur:"edebiyatci"`):** Agâh Efendi, İbrâhim Şinâsi,
  Ziya Paşa, Nâmık Kemal.
- **Askerî teknoloji (4):** Humbaracı Ahmed Paşa (Comte de Bonneval), Baron de
  Tott, Mehmed Nâmık Paşa, Gerçek Dâvud (Tulumbacı Ocağı).
- **Diplomasi/siyaset (2):** Yirmisekiz Çelebi Mehmed Efendi, Ali Suâvi.

**Ölçülmüş sonuç:** `alim` kategorisi **7 → 23** (+16), yeni `mimar` (4) ve
`edebiyatci` (4) kategorileri açıldı. Bilim/sanat/felsefe adına toplam kayıt
**~7 → 33**.

**19 kayıtta `dogum_yer`+koordinat, olum_yer eklendi** (yalnız yüksek güvenle
bilinenler — ör. Mimar Sinan'ın Ağırnas/Kayseri doğumu, Ali Kuşçu'nun Semerkant
doğumu, Nâmık Kemal'in Tekirdağ doğumu/Sakız'da ölümü gibi standart, tartışmasız
biyografik gerçekler).

**Hâlâ eksik olan (dürüstçe raporlanıyor):** Kullanıcının önerdiği listeden
kronolojide **hiç adı geçmeyenler** eklenmedi — Fuzûlî, Bâkî, Nef'î, Nedîm (bir
madde bulundu ama kişi olarak değil eser adı geçiyordu, kontrol edilmeli),
Şeyh Galib, Itrî, Matrakçı Nasuh, Hoca İshak Efendi, Davud Ağa, Neşrî, Naîmâ,
Levnî, Nakkaş Osman, Şeyh Hamdullah, Hâfız Osman, İbn Kemal/Kemalpaşazâde,
Birgivî, İbrahim Hakkı. **Bunlar kronolojide adı geçmediği için EKLENMEDİ**
(yöntem kuralına uyuldu — "kronolojiden başla, hayalden değil"); bu isimler
gerçekten önemliyse önce `data/olaylar_ek9.js`'e (Oturum 7'nin dosyası, bu
oturumun DEĞİL) bir kronoloji maddesi yazılmalı, sonra kişi kaydı açılmalı.

### 2.5 Kalan boşluk — ölçülmüş sayı

`data/olaylar*.js`'in 924 maddesindeki `kisiler` alanından çıkarılan **790
benzersiz isim ibaresinden 673'ü hâlâ `KISILER`'de tam/normalize eşleşmiyor.**
Bunun büyük kısmı **gürültü**, gerçek eksik biyografi değil:
- Çoğu zaten `PADISAHLAR`'da olan padişah adının farklı yazımı (ör. "Yavuz
  Sultan Selim" vs `PADISAHLAR`'daki "I. Selim (Yavuz)").
- Bir kısmı kişi değil kurum/ülke adı ("İngiltere", "TBMM", "Deutsche Bank",
  "Balkan devletleri temsilcileri").
- Bir kısmı zaten eklediğim yabancı hükümdarların `olaylar*.js`'teki farklı
  yazım biçimi (ör. "Nâdir Şah" / "I. Şah Abbas" / "Şah Abbas" — ben
  `donem`'e göre "Şah I. Abbas" yazdım, `olaylar*.js` "I. Şah Abbas" yazmış;
  aynı kişi, normalize karşılaştırma kelime sırasını yakalamadı).
- **Gerçek, yeni kişi olan kalan** (Osmanlı komutan/vezir/yabancı figürü,
  isim varyantları elendikten sonra) kabaca **150-250 arası** — tam ölçüm
  için isim varyant temizliği (`olaylar*.js`'teki yazımı `kisiler.js`'teki
  yazımla eşleştiren bir sözlük) gerekiyor; bu, `ETIKETLEME.md §6` adım
  6'nın ("OLAYLAR.kisiler'i kisi kimliğine çevir") kendisi ve bu oturumun
  kapsamı dışında — sıradaki iş listesine bırakılıyor.

Ham liste (isim + geçiş sayısı) `oturumlar/OTURUM-5-ILERLEME.md`'yi yazan
oturumun scratchpad'inde kaldı, kalıcı değil; isterse entegrasyon oturumu
aynı ölçümü şu komutla tekrar üretebilir:
```bash
node -e "global.window={};const fs=require('fs');for(const f of fs.readdirSync('data').filter(f=>/^olaylar.*\.js$/.test(f)))eval(fs.readFileSync('data/'+f,'utf8'));const O=Object.keys(window).filter(k=>k.startsWith('OLAYLAR')).flatMap(k=>window[k]);const c=new Map();for(const o of O){if(!o.kisiler)continue;for(const p of o.kisiler.split(/[,;]/).map(s=>s.trim()).filter(Boolean))c.set(p,(c.get(p)||0)+1);}global.window={};eval(fs.readFileSync('data/kisiler.js','utf8'));const K=window.KISILER;const norm=s=>s.toLowerCase().replace(/[^a-zçğıöşüâîû0-9]/gi,'');const kSet=new Set(K.map(k=>norm(k.ad)));const missing=[...c.entries()].filter(([n])=>!kSet.has(norm(n))).sort((a,b)=>b[1]-a[1]);console.log('eslesmeyen ibare:',missing.length);missing.slice(0,30).forEach(([n,c])=>console.log(c,n));"
```

---

## Ölçülmüş sonuç özeti

| | Önce (bu oturum başlarken) | Şimdi |
|---|---|---|
| `KISILER` kayıt sayısı | 90 | **276** |
| `id` alanı | yok | **276/276** |
| `devlet` alanı (yabancı hükümdar) | 0/13 | **164/166** (2 kasıtlı boşluk, `devletler.js` eksiği) |
| `f`/`t` (doğum-ölüm) | yok | **224/276** |
| `dogum_yer`/koordinat | yok | **19/276** |
| `eser` | yok | **15/276** |
| `alim` (bilim/fikir) | 5 (bu oturumdan önce) → 7 (1. faz sonu) | **23** |
| `mimar` | — | **4** (yeni kategori) |
| `edebiyatci` | — | **4** (yeni kategori) |
| PADİŞAHLAR ↔ KİŞİLER mükerrer | ölçülmemişti | **0** |
| `devlet` ↔ `DEVLETLER.id` tutarlılık | ölçülmemişti | **168/168 tutarlı** |

## Entegrasyon oturumuna bırakılanlar
1. **`habsburg`/`avusturya` tekilleştirmesi** — `ETIKETLEME.md §5`'teki
   `data/kimlikler.js` işi; bu oturum zorla düzeltmedi, yalnız ölçtü.
2. **János Zápolya ve Napolyon dönemi Fransası için `devletler.js`'te eksik
   id** — yeni devlet kaydı açmak bu oturumun dosya yetkisi dışında.
3. **`OLAYLAR.kisiler` serbest metnini `kisi` kimliğine çevirme** —
   `ETIKETLEME.md §6` adım 6; isim varyant sözlüğü gerektiriyor.
4. Kullanıcının önerdiği ama kronolojide adı geçmeyen edebiyat/musiki/hat
   figürleri (Fuzûlî, Bâkî, Itrî, Levnî…) — önce `data/olaylar_ek9.js`'e
   (Oturum 7) madde yazılmalı.
5. 52 kayıtta `f`/`t` hâlâ boş (çoğu erken dönem figürü, `donem` yalnız
   yüzyıl metni) — ayrı araştırma gerektiriyor.

## Commit atılmadı, `arac/uret_petek.py` çalıştırılmadı — görev tanımına uygun (2. faz sonu).

---

## 3. FAZ — MERKEZ denetimi: "hatalar 11" md.36/37 (1876 hanedan krizi)

Görev: `KOORDINASYON.md §5 / Oturum 5` + cross-session mesajı. Doküman
`hatalar 11 .docx` içindeki kendi numaralandırmasıyla **madde 37** (Âli
Paşa'nın 1871 vefatının iki madde görünmesi) ve **madde 38** (V. Murad'ın
cülûsu/hal'i, Abdülaziz'in hal'i, Çerkes Hasan olayı, Beşiktaş muhafızlığı,
darbe hareketleri) — MERKEZ'in mesajındaki "md.36/md.37" bir kayma ile aynı
içeriğe karşılık geliyor, numara değil metin eşleştirildi.

### 3.1 Âli Paşa — `kisiler.js` tarafında mükerrer YOK, ama ilk taramada kayıt tamamen kaçırılmıştı

Sonuç: **`data/kisiler.js`'te "Âli Paşa" için TEK kayıt var** (`id:"ali-pasa"`,
satır ~43), mükerrer değil. 2. fazın "0 mükerrer" ölçümü doğruydu ama nedeni
yanlış anlaşılabilir: o ölçüm PADİŞAHLAR↔KİŞİLER karşılaştırmasıydı, bu
kaydın kendisi hiç sorgulanmamıştı. Ayrıca ilk hızlı `grep` taramam ("ali
paşa" / "âli paşa" iki kez aynı string ile, yanlışlıkla) ve sonra
`.toLowerCase()` ile yapılan Node taraması **"Âlî Paşa" (â/î ile) dizesini
"ali paşa" (a/i ile) dizesiyle eşleştirmedi** — Türkçe aksanlı harfler
JS'in `toLowerCase()`'inde katlanmıyor. Bu yüzden "kayıt yok" gibi göründü;
gerçekte kayıt vardı, sadece arama kör noktasındaydı. Düzeltme:
`islamansiklopedisi.org.tr/ali-pasa-mehmed-emin` (canlı, `<title>` doğrulandı)
ile mevcut kayda `f:"1814"`, `t:"1871"`, `dogum_yer`, `olum_yer` eklendi;
kayıt zaten vardı, yalnız doğum-ölüm hassasiyeti eksikti.

**Kronoloji tarafındaki (`data/olaylar*.js`) iki maddeli mükerrer benim
dosyamda değil** — Oturum 7 (`OTURUM-4...` değil, KOORDINASYON.md §5
Oturum 7 satırı) silecek, Oturum 2 mükerrer denetiminin eşiğini ölçecek.
Bu oturum yalnız kendi dosyasını doğruladı, kronolojiye dokunmadı.

**Ayrıca bulundu (görev dışı ama aynı sınıf hata — kendi dosyamda, düzeltme
yetkim var):** `mustafa-resid-pasa` / `mustafa-resid-pasa-2` — bunlar
GERÇEKTEN mükerrerdi (2. fazın raporunda "dokunulmadı" denmişti, bu turda
birleştirildi). Tek kayıtta toplandı: `f:"1800"`, `t:"1858"`,
`donem:"1800–1858 (sadrazamlık: 1846–1858 arası 6 kez)"`. 280 kayıtta artık
0 mükerrer `id` VE 0 mükerrer `ad`+aynı-kişi (elle doğrulandı).

### 3.2 `kisiler.js`'e eklenen 5 yeni kayıt — hepsi TDV `<title>` ile doğrulandı

| id | ad | TDV slug | Not |
|---|---|---|---|
| `huseyin-avni-pasa` | Hüseyin Avni Paşa | `huseyin-avni-pasa` ✓ canlı | 1820–1876, 30 Mayıs 1876 darbesinin seraskeri, 16 Haziran 1876'da öldürüldü |
| `mutercim-rusdu-pasa` | Mütercim Rüşdü Paşa | `mutercim-rusdu-pasa` ✓ canlı | 1811–1882, 30 Mayıs 1876 kadrosunun sadrazamı |
| `hayrullah-efendi` | Hayrullah Efendi (İmâm-ı Sultânî) | `hayrullah-efendi-imam-i-sultani` ✓ canlı | 1834–1898, hal' fetvasını hazırlayan şeyhülislâm |
| `cerkes-hasan-bey` | Çerkes Hasan Bey | **müstakil madde YOK** — `cerkes-hasan-bey` slug'ı denendi, `<title>` "Arama - TDV İslâm Ansiklopedisi" döndü (ölü slug). Kaynak: `huseyin-avni-pasa` maddesindeki geçiş | Doğum yılı VE idam tarihi TDV'de doğrulanamadı — **kaynak yok, uydurulmadı**, yalnız yıl (`t:"1876"`) verildi |
| `yedisekiz-hasan-pasa` | Hasan Paşa (Yedi Sekiz) | **müstakil madde YOK** — genel aramada 0 başlık eşleşmesi. Kaynak: `ciragan-vakasi` maddesindeki geçiş ("Hasan Ağa") | Doğum-ölüm yılları TDV'de doğrulanamadı — **kaynak yok, uydurulmadı**, `donem:"19. yy"` bırakıldı |

**Not düşülmesi gereken önemli ayrım:** görev tanımındaki "Beşiktaş muhafızı
7 8 hasan paşa olayı" ifadesi **Çerkes Hasan Bey'den FARKLI bir kişiye**
işaret ediyor — Çerkes Hasan (1876, Hüseyin Avni Paşa'yı öldüren kolağası)
ile Yedi Sekiz Hasan Paşa (1878 Çırağan Vak'ası'nda Beşiktaş muhafızı
olarak Ali Suâvi'yi öldüren kişi) **iki ayrı olay, iki ayrı Hasan.** Görev
metni bu ikisini tek cümlede yan yana yazdığı için karıştırılabilir; ikisi
de eklendi, ayrımı burada netleştiriyorum.

`ali-suavi` (id, f:1839, t:1878) zaten mevcuttu (Oturum 5/2. faz eklemişti) —
TDV değerleri birebir uyuştu, değişiklik gerekmedi.

### 3.3 Kronoloji ihtiyacı — Oturum 11'e (MERKEZ üzerinden) devrediliyor

🔴 Bu oturum `data/olaylar_ek10.js`'e YAZMADI (dosya sahibi değil). Aşağıdaki
maddeler TDV `abdulaziz`, `huseyin-avni-pasa`, `ciragan-vakasi` maddelerinden
doğrulanmış tarihlerle — Oturum 11 doğrudan işleyebilir:

1. **V. Murad'ın cülûsu** — 30 Mayıs 1876 (şu an muhtemelen Abdülaziz'in
   hal'iyle aynı maddede birleşik; ayrı madde olmalı).
2. **Abdülaziz'in hal'i** — 30 Mayıs 1876. Organizatörler TDV'de isimleriyle
   geçiyor: Hüseyin Avni Paşa (serasker), Midhat Paşa, Mütercim Rüşdü Paşa
   (sadrazam), Şeyhülislâm Hayrullah Efendi (fetva). TDV alıntısı: Midhat
   Paşa'nın sorusu — *"Padişah mülk ve milleti tahrip etti... tahttan
   indirilmesi düşünülüyor. Buna şer'an cevaz var mıdır?"* — ve olumlu fetva.
3. **Abdülaziz'in nakli ve ölümü** — 30 Mayıs: Topkapı'ya nakil → 1 Haziran:
   Fer'iye Sarayı'na nakil → **4 Haziran 1876: odasında bilek damarları
   kesilmiş halde bulundu** (TDV `abdulaziz` maddesi). Şu an muhtemelen hiç
   ayrı madde yok; en az 2-3 maddeye bölünmeli (nakil / ölüm).
4. **V. Muradın hal'i** — 31 Ağustos 1876 (93 günlük saltanat — bu sayı
   vurgulanmalı, kullanıcının "cülûs ve hal' tek maddede birleşik" şikâyeti
   tam bu boşluktan geliyor).
5. **Çerkes Hasan Olayı (Bakanlar Kurulu'nun basılması)** — **16 Haziran
   1876**, Midhat Paşa'nın konağındaki toplantı, Çerkes Hasan Bey (kolağası,
   iddiaya göre Abdülaziz'in kayınbiraderi) tarafından basıldı, **Hüseyin
   Avni Paşa öldürüldü** (Süleymaniye'ye defnedildi). ⚠️ TDV `huseyin-avni-pasa`
   maddesi yalnız onun ölümünü doğruluyor; olayda başka bakanların da
   öldürüldüğü yaygın bilgi (Hariciye Nazırı Raşid Paşa) — **Oturum 11 bunu
   ayrıca TDV'den teyit etsin, ben ikinci bir kaynağı `<title>` ile
   doğrulayamadım.**
6. **Çırağan Vak'ası** — **20 Mayıs 1878**, Ali Suâvi ile ~250-500 Rumeli
   muhaciri V. Murad'ı Çırağan Sarayı'ndan kaçırmaya kalkıştı; Beşiktaş
   muhafızı Hasan Ağa bastırdı, Ali Suâvi öldürüldü, **23 kişi öldü**, V.
   Murad Yıldız'daki Malta Köşkü'ne nakledildi (TDV `ciragan-vakasi` maddesi,
   canlı slug). Bu olay hâlâ kronolojide yoksa eklenmeli — "darbe
   hareketleri" talebinin bir parçası.

Kaynak zinciri: `islamansiklopedisi.org.tr/abdulaziz`,
`/huseyin-avni-pasa`, `/ciragan-vakasi`, `/mutercim-rusdu-pasa`,
`/hayrullah-efendi-imam-i-sultani` — hepsi bu oturumda `<title>` ile
canlı doğrulandı.

### 3.4 Ölçülmüş sonuç (3. faz)

| | 2. faz sonu | 3. faz sonu |
|---|---|---|
| `KISILER` kayıt sayısı | 276 | **280** |
| Mükerrer `id`/`ad` | 1 bilinen (Mustafa Reşid Paşa, dokunulmamıştı) | **0** |
| `Âli Paşa` kaydı | vardı ama f/t yok, ilk taramada gözden kaçmıştı | f/t/dogum/olum tam |
| 1876-78 krizi kişi kadrosu | 0 (yalnız Midhat Paşa, Ali Suâvi vardı) | **7 kişi** (Midhat, Ali Suâvi + 5 yeni) |
| Kaynağı TDV'de doğrulanamayan, işaretlenmiş kayıt | — | **2** (Çerkes Hasan Bey, Yedi Sekiz Hasan Paşa — müstakil TDV maddesi yok, dolaylı kaynakla eklendi) |

Commit: `git add data/kisiler.js` ile yalnız bu dosya eklenecek, `git diff
--cached --stat` ile doğrulanacak, sonra commit. `arac/uret_petek.py`
çalıştırılmadı.

---

## 4. FAZ — KOORDİNATÖR vakası: eşleşme motoru kapsam ölçümü

### 4.1 Vaka — Çandarlı Halil Paşa eksikti, "en yakın ad" onun yerine yanlış kişi gösterdi

`data/kisiler.js`'te **Çandarlı Halil Paşa hiç yoktu**. `js/app.js`'teki
`kisiBul()` fonksiyonu tam eşleşme bulamayınca **öz-ad örtüşmesine göre en
yakın kaydı** döndürüyor (`ozAdlar()` unvanları/sıra sayılarını atıp geri
kalan ≥4 harfli kelimeleri karşılaştırıyor). "Çandarlı Halil Paşa" için
tek ortak öz-ad "halil" kelimesiydi ve bu, dizindeki **tek** "Halil"
kaydına — 1882-1957 arası yaşamış, Kûtülamâre kahramanı **"Halil Paşa
(Kut)"**a — bağlanıyordu. 1446-05-05 (Buçuktepe Vak'ası) ve 1453-06-01
(Halil Paşa'nın azli/idamı) maddelerinde kullanıcı ekranda 1916 Irak
cephesi bilgisi görüyordu.

**Eklendi** (TDV `<title>` ile canlı doğrulandı —
`islamansiklopedisi.org.tr/candarli-halil-pasa`, başlık "ÇANDARLI HALİL
PAŞA - TDV İslâm Ansiklopedisi"):
```js
{ id:"candarli-halil-pasa", tur:"sadrazam", ad:"Çandarlı Halil Paşa", t:"1453",
  donem:"II. Murad'ın sonu – II. Mehmed'in ikinci cülûsu",
  not:"İstanbul kuşatmasına şüpheyle yaklaştığı için II. Mehmed tarafından
  fetihten hemen sonra, 30 Mayıs 1453'te azledildi, kırk gün sonra idam edildi" }
```

⚠️ **Bu ekleme kendi başına yeni bir çakışma açtı, ve onu da bu turda
buldum/düzelttim:** dizindeki mevcut `candarli-hayreddin-pasa` kaydının
(1364-1387, ailenin kurucusu) asıl adı **"Kara Halil"**dir. Kronolojide
`Çandarlı Kara Halil` diye geçen iki madde var (1331 İznik medresesi,
1361 Pençik Kanunu) — bunlar kurucu Hayreddin Paşa'ya ait, benim yeni
eklediğim torun/torun-oğlu Halil Paşa'ya değil. Yeni kayıt eklenmeden
ÖNCE "Çandarlı Kara Halil" hiçbir kayda eşleşmiyordu (öz-ad çakışma oranı
eşiğin altındaydı); eklendikten SONRA yanlışlıkla benim yeni kaydıma
kaymaya başladı. **Düzeltme:** `candarli-hayreddin-pasa`'nın `ad` alanına
`(Kara Halil)` eklendi, `not` alanına iki farklı Halil'le
karıştırılmaması için açık uyarı yazıldı. Ölçüm scriptiyle doğrulandı:
"Çandarlı Kara Halil" artık doğru kayda (skor 3) dönüyor.

🔴 **Çözemediğim, veri tarafından çözülemeyen artık bir çakışma var:**
kronolojide çıplak **"Halil Paşa"** (tek başına, soyadsız) iki farklı
maddede geçiyor — 1916-04-29 Kûtülamâre Zaferi (= Halil Paşa Kut, doğru)
ve 1770-08-01 Kartal (Kagul) Ovası Bozgunu (= **üçüncü, kimliği bu
oturumda araştırılmamış bir Halil Paşa** — 1768-74 Osmanlı-Rus Savaşı
döneminde bir başka kişi, muhtemelen bir serdar/kaptan; TDV'de
doğrulamadım, uydurmadım). Benim eklediğim kayıt bu iki maddeyi de
üçüncü bir yanlış kişiye (1453'te ölen Çandarlı Halil Paşa) kaydırdı,
çünkü sıra numarası eşit skorlu (skor 1) iki aday arasında dosyadaki
konuma göre çözülüyor. Aynı şey "Halil Bey" (1913 İstanbul Antlaşması —
muhtemelen Halil Menteşe, doğrulanmadı) için de geçerli. **Bunu dosya
içi sıralamayla "düzeltmedim"** — konuma bağlı bir hile gelecekte
sessizce tekrar bozulur. Gerçek çözüm ya (a) eşleştirme kuralının tarih
yakınlığına bakması (ARAYÜZ'ün üzerinde çalıştığı asıl düzeltme budur),
ya da (b) kronoloji tarafının çıplak "Halil Paşa" yerine tam ad
yazmasıdır (`olaylar*.js`, benim dosyam değil). Üç ayrı Halil Paşa'nın
künyesi: Çandarlı Halil Paşa (ö. 1453), 1770 Kartal'daki (kimliği
belirsiz), Halil Paşa Kut (1882-1957).

### 4.2 Kapsam ölçümü — 994 maddenin `kisiler:` alanı, tek tek `kisiler.js` ile karşılaştırıldı

Ölçüm scripti `kisiBul()`/`ozAdlar()`/`padisahEslesmesi()`'nin **birebir
kopyasını** çalıştırıyor (app.js'ten kopya-yapıştır), 12 `olaylar*.js`
dosyasının tamamını okuyor (index.html'de gerçekten yüklenen sırayla).

```
Toplam madde: 997 | kisiler: alanı olan: 983 | toplam ad geçişi: 1901 | benzersiz ad: 874

Padişah eşleşmesi (portre zaten gösteriliyor, kutu gerekmiyor):  77
Tam eşleşen (doğru):                                            118
BULANIK eşleşen (yanlış kişi RİSKİ):                            153
HİÇ eşleşmeyen (kutu hiç görünmüyor):                           526
```

**BULANIK 153'ün elle sınıflaması** (hedef kayda göre gruplandı, ~85
farklı hedef): bunların önemli bir kısmı **zararsız** — aynı kişinin
yazım/başlık farkı ("Fâzıl Ahmed Paşa" / "Köprülüzâde Fâzıl Ahmed Paşa",
"Mustafa Kemal" / "Mustafa Kemal Paşa", "b." / "bin" farkı gibi). Ama en
az **~50 kaydı gerçekten farklı, gerçek bir kişiyi yanlış kişiye
bağlıyor**. En büyük ve en açık kümeler:

| Ekranda yanlışlıkla görünen kayıt | Gerçekte kaç FARKLI kişiyi yutuyor | Örnekler |
|---|---|---|
| **Şah Sultan Hüseyin** (Safevî, ö. 1726) | **15** (hepsi yanlış) | Mezomorto Hüseyin Paşa, Ahîzâde Hüseyin Efendi, Hüseyin Hilmi Paşa, Hüseyin Rauf Bey, Hüseyin Kâmil (1630'lardan 1919'a kadar 15 farklı gerçek kişi) |
| **I. Nikolay** (Rus çarı) | 6 (2 zaten doğru varyant) | Grandük Nikolay (kardeşi), I. Nikola (Karadağ kralı), Çar II. Nikolay (torunu), Nikola Jurišić (16.yy Hırvat komutanı — alakasız) |
| **Gazi Osman Paşa** (Plevne kahramanı) | 4 (hepsi yanlış) | Özdemiroğlu Osman Paşa (16.yy), Çerkes Osman Paşa, Pazvandoğlu Osman, Osman Digna (Sudan Mehdî komutanı) |
| **I. Aleksandr** (Rus çarı) | 4 (hepsi yanlış) | Aleksandros İpsilantis, Aleksandr Mavrokordato (Yunan isyancılar), Çar II. Aleksandr (torunu) |
| **Şah I. Abbas** | 3 | Abbas Hilmi Paşa (Mısır hidivi), III. Abbas (başka bir Safevî şahı), Abbas Mirza (İran veliahdı) |
| **Said bin Sultan** (Umman/Zengibar) | 3 (hepsi yanlış) | Said Efendi (1727, ilk matbaa), Said Halim Paşa (I. Dünya Savaşı sadrazamı), Ebû Said Bahadır Han (İlhanlı) |
| **XI. Konstantinos** (son Bizans imp.) | 2 (hepsi yanlış) | Prens Konstantin, Veliaht Konstantin (1913 Yunan veliahdı — 460 yıl sonra, alakasız) |
| **Turahanoğlu Ömer Bey** | 2 (hepsi yanlış) | Ömer Paşa (1853 Kırım Savaşı'nda Ömer Lütfi Paşa), Turahan Bey (kendi BABASI, ayrı kişi) |
| **Turhan Hatice Sultan** (17.yy vâlide sultan) | 1 | Turhan Paşa (1910 Arnavutluk İsyanı — 250 yıl sonra) |
| **Halil Paşa (Kut)** | 2 | Şehzade Halil (1357, Orhan Gazi'nin oğlu), Halil Hamid Paşa (1779 sadrazamı) |
| **İsmâil Kâmil Paşa** | 2 | İsmâil Paşa (1867 Mısır hidivi), Kâmil Paşa (ayrı bir sadrazam) |

Tam liste (153 satır, hedef + kaynak + madde örnekleri) betikte üretildi;
istenirse tekrar koşturup JSON/metin olarak paylaşabilirim.

**HİÇ eşleşmeyen 526** (kutu hiç görünmüyor — yanlış bilgi değil ama
eksik bilgi): 414'ü tek maddede geçiyor, geri kalan 112'si 2+ maddede.
En sık geçenler: Kanûnî Sultan Süleyman (11× — **bu aslında `kisiler.js`
eksikliği değil**, `data/padisahlar.js`'te "Kanunî" yazılmış [aksansız
u], kronolojide "Kanûnî" [şapkalı û] — tek harflik yazım farkı yüzünden
padişah-eşleşmesi de düşüyor; görsel etkisi düşük çünkü tarihe göre
düşen yedek eşleşme zaten doğru padişahı buluyor), Fuad Paşa (7×), Talat
Bey/Paşa (6+3), Mahmud Şevket Paşa (5×), Musa Çelebi (5×), Piyâle Paşa
(5×), Nâdir Şah (5×), Özdemir Paşa (5×).

### 4.3 Sıradaki adım — birlikte karar

679 sorunlu ad-geçişi (153 bulanık + 526 boş), 80 eşiğinin çok üzerinde
— tek başıma eklemeye başlamadım, mesajındaki kurala uydum. Önerim:
önce **BULANIK 153**'ü (yanlış bilgi gösteren, ~50 gerçek vaka)
önceliklendirelim, çünkü kullanıcıya aktif olarak yanlış kişi gösteriyor;
HİÇ ESLEŞMEYEN 526 daha düşük öncelikli (eksik ama yanlış değil). Nasıl
ilerlemek istersin — kümeler hâlinde mi (önce "Şah Sultan Hüseyin"
kümesindeki 15 kişiyi ekleyeyim), yoksa madde sıklığına göre mi?
