# Oturum 15 — 62-65°D köprü bölgesi: Horasan doğusu, Sîstan, Belûcistan, Mekran

**Model: Opus.** (Haiku bu projede kullanılmaz — §KAYNAK'taki TDV tuzağını kaçırıyor.)
**Yazacağın tek dosya: `data/yerlesimler_kopru.js`.** Başka hiçbir dosyaya dokunma.
Commit yapma; entegrasyon oturumunun işi.

## 0. İlk iş

`CLAUDE.md`'yi oku. Özellikle §2 (petek motoru ve emilme davranışı), §3 (üç
değişmez), §4 (kaynak kuralı), §6 (kapsam genişlemesinin zorunlu sırası).
Sonra `VERI-YAPISI.md`'deki yerleşim şemasını ve `data/yerlesimler_iran.js`
dosyasının başındaki uyarı bloğunu oku — senin çıktın onunla aynı biçimde olacak.

## 1. Bu oturum neden var

`arac/uret_petek.py` içindeki harita penceresi bugün `box(-12, 1.5, 62, 62)`.
Doğu sınırı **62°D**. Oturum 13 Hindistan-Çin-Japonya-Güneydoğu Asya için 344
nokta yazdı (`data/yerlesimler_asya.js`) ama **hepsi 62°D'nin doğusunda** — en
batıdaki nokta Kandehar 65.71°D. Yani kutu açılmadan hiçbiri çizilmez.

Kutu açılırsa **62°D ile 65.7°D arası tamamen noktasızdır.** MIMARI.md §2'deki
kural burada devreye girer: *noktası olmayan bölge en yakın peteğe emilir ve o
peteğin sahibinin rengiyle boyanır.* Sonuç: Meşhed'in ya da Kandehar'ın peteği
aradaki 400 km'lik şeridi yutar ve Sîstan-Belûcistan yanlış devlete boyanır.

**Bu oturum o köprüyü kuruyor.** Oturum 13 bu boşluğu kendi ilerleme notunda
açıkça başka bir oturuma devretti (`oturumlar/OTURUM-13-ILERLEME.md`).

## 2. Kapsam — coğrafî sınırlar

Boylam **60°D - 70°D**, enlem **23°K - 40°K**. (60'tan başlıyoruz ki mevcut
İran noktalarıyla üst üste binme değil, dikiş olsun; 70'e kadar gidiyoruz ki
Oturum 13'ün Kandehar/Kâbil noktalarıyla örtüşme sağlanabilsin.)

Kapsanacak tarihî bölgeler:

| Bölge | Beklenen nokta | Not |
|---|---|---|
| Horasan doğusu | Meşhed, Nîşâbur, Tûs, Serahs, Herat, Bâdgîs, Obeh, Sebzevâr | Herat kilit nokta — Timurlu payitahtı |
| Kûhistan / Kāin | Kāin, Bîrcend, Tabes, Gunâbâd | Seyrek ama boş değil |
| Sîstan | Zerenc, Bost (Kal'a-i Bist), Lâşcüveyn, Nâd-i Ali, Câlk | Sîstan çölü — dolgu noktası gerekir |
| Belûcistan (batı) | Zâhidân, Hâş, Sarâvân, Bempûr, Îrânşehr (Fehric) | |
| Mekrân sahili | Çâbahâr, Gavâdır, Pesnî, Cîvenî, Turbet | Gavâdır 1783'ten sonra Maskat'ın |
| Kirmân doğusu | Bem, Nermâşîr, Cirûft | İran'a bağlanır, dikişi kontrol et |
| Kandehâr çevresi | Kandehâr, Kalât-ı Gilcâî, Gaznî, Tarnak | Oturum 13'te VARSA yeniden yazma — kontrol et |

**Hedef: 55-80 nokta.** Az olursa köprü tutmaz, çok olursa çölde yapay yoğunluk
olur. Çöle nokta konur ama **seyrek** — amaç çölün yanlış devlete emilmesini
önlemek, çölü şehirlendirmek değil (Oturum 14'ün Sahra kararıyla aynı mantık).

## 3. En kritik kısıt — Değişmez 2

Her `d:` ve `v:` dönem sınırı haritada bir **kırılma**dır ve ±30 gün içinde bir
kronoloji maddesi ister. **Sen `data/olaylar*.js`'e yazamazsın.** Bu yüzden:

**Yeni noktaların bütün `d:`/`v:` sınırları, MEVCUT verideki kırılma tarihlerine
oturtulacak.** Oturum 14 tam olarak bunu yaptı; `data/yerlesimler_afrika.js`
dosyasının başındaki bloğu örnek al.

Kullanılabilir tarihleri şöyle bulacaksın:

```bash
node -e "global.window={};const fs=require('fs');for(const f of fs.readdirSync('data').filter(x=>/^yerlesimler(_|\.)/.test(x)))eval(fs.readFileSync('data/'+f,'utf8'));const t=new Set();for(const k of Object.keys(window))if(/^YERLESIMLER/.test(k))for(const y of window[k])for(const kat of ['d','s','v'])(y[kat]||[]).forEach(p=>{t.add(p.f);t.add(p.t);});console.log([...t].sort().join('\n'));"
```

`s:` → `s:` geçişleri (yabancıdan yabancıya) kırılma SAYILMAZ. Bu bölgenin
tamamı Osmanlı dışı olduğu için kayıtlarının **büyük çoğunluğu `s:` olacak** —
yani tarih seçmekte neredeyse serbestsin. Bu oturumun işini kolaylaştıran asıl
nokta budur. Yalnız Osmanlı'nın kısa süreli tuttuğu yerlerde (yok denecek kadar
az; 1585-1603 Şirvan-Tebriz işgali bu kutuya girmez) dikkat et.

Yuvarlamak zorunda kaldığın tarihi **kaydın kendi yorumunda** yaz, sonra
ilerleme notunda topla — Oturum 14 yedi nokta için böyle yaptı.

## 4. Devlet kimlikleri

Bu coğrafyanın 1281-1923 arası sahipleri, kabaca:

```
1281-1335  ilhanli                    Kirmân'da Karahıtay (Kutluğ-Hanlılar) ayrı
1335-1381  kart (Herat) · muzafferi (Kirmân) · sarbedar (Sebzevâr) · ilhanli-sonrasi
1381-1507  timurlu                    Herat 1405-1507 Şâhruh'un payitahtı
1507-1510  ozbek (Şeybânî)
1510-1722  safevi                     Kandehâr 1622-1638 ve 1649-1709 Safevî/Bâbür arası el değiştirir
1709-1738  hotaki (Gilcâî Afgan)      Kandehâr merkezli
1738-1747  afsar (Nâdir Şah)
1747-1823  durrani (Afgan)            Herat/Kandehâr
1796-1925  kacar                      İran tarafı
1823-1863  herat-hanligi              Kâmrân Mîrzâ; 1863'te Afganistan'a katılır
1863-1923  afganistan · iran          1872 ve 1905 Goldsmid/McMahon hakemlik sınırları
1783-1923  maskat                     yalnız Gavâdır limanı
1839-1923  ingiltere                  Belûcistan'ın Britanya nüfuzu, 1876 Kalât antlaşması
```

**`arac/renkler.py`'ye DOKUNMA.** Kullandığın kimliklerin hangileri orada var,
hangileri yok — ölçüp ilerleme notuna yaz. Renk ataması entegrasyon oturumunun
işi; renkler DSATUR ile komşuluk çizgesine göre dağıtılıyor, rastgele eklenen
renk dengeyi bozar. `iran`, `safevi`, `timurlu`, `cagatay`, `ingiltere`
renkler.py'de VAR; ötekilerin çoğu yok.

Kimlik granülerliği kuralı: **bir kimlik = haritada ayrı boyanması anlamlı olan
bir siyasî gövde.** Aynı gövdenin hanedan değişimi ayrı kimlik değildir.
`data/devletler.js`'te (213 kayıt) karşılığı olan id'leri **birebir** kullan;
böylece dizin ile harita baştan aynı kimliği taşır.

## 5. Kaynak kuralı — buradaki tuzağa dikkat

**TDV İslâm Ansiklopedisi birincil kaynaktır.** Bu bölge için doğrudan maddesi
olanlar: HORASAN · MEŞHED · NÎŞÂBUR · HERAT · SÎSTAN · BELÛCİSTAN · MEKRAN ·
KANDEHAR · GAZNE · KİRMAN · KÂİN · TABES · ZERENC · KARTLAR · MUZAFFERÎLER ·
SERBEDÂRÎLER · HOTAKÎLER · DURRÂNÎLER · AFGANİSTAN · İRAN.

> ⚠️ **`islamansiklopedisi.org.tr/<slug>` var olmayan slug için de HTTP 200
> döner** ve sessizce arama sayfasına yönlendirir. Linkin ölü olduğunu **yalnız
> `<title>` gösterir**: "Arama - TDV İslâm Ansiklopedisi". Her slug'ı böyle
> doğrula. Doğrulanmamış slug yazma.

Vikipedi **asla tek kaynak olmaz.** Koordinatlar için GeoNames/NGA GNS
kullanılabilir; tarihî yer ile modern yerin farklı olduğu durumda (Merv gibi)
gerçek tarihî mevkii yaz ve yorumda belirt.

## 6. Çıktı biçimi

`data/yerlesimler.js` şemasıyla **birebir aynı**. Dosya `window.YERLESIMLER_KOPRU`
dizisini yazar. Dosyanın başına şu blokları koy (Oturum 13/14 dosyalarını örnek al):

1. Bu dosya bugün haritada görünür mü, görünmezse neden (60-62°D arası görünür,
   62°D doğusu görünmez — bunu **ölç**, tahmin etme)
2. Hangi devlet kimlikleri renkler.py'de var / devletler.js'te var / hiç yok
3. Yuvarlanmış tarihlerin tam listesi
4. Çöle konan dolgu noktalarının listesi ve gerekçesi
5. Kimlik granülerliği kararları ve gerekçeleri

## 7. Bitirince

`oturumlar/OTURUM-15-ILERLEME.md` yaz. İçinde **ölçülmüş** sayılar olsun, tahmin
değil: nokta sayısı, boylam aralığı (min/max), kimlik dağılımı, yuvarlanan tarih
sayısı. Entegrasyon oturumuna devrettiğin işleri madde madde yaz.

**Commit ETME.** `git status` bırakıp çık.
