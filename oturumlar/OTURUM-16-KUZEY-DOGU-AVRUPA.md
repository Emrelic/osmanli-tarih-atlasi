# Oturum 16 — Kuzey ve Doğu Avrupa yerleşimleri

**Model: Opus.** (Haiku bu projede kullanılmaz — §5'teki TDV tuzağını kaçırıyor.)
**Yazacağın tek dosya: `data/yerlesimler_kuzeydogu.js`.** Başka hiçbir dosyaya
dokunma, commit yapma; entegrasyon oturumunun işi.

## 0. İlk iş

`CLAUDE.md`'yi oku — özellikle §2 (petek motoru ve emilme davranışı), §3 (üç
değişmez), §4 (kaynak kuralı), §6 (kapsam sırası). Sonra `VERI-YAPISI.md`'deki
yerleşim şemasını ve `data/yerlesimler_avrupa.js`'in başındaki uyarı bloğunu
oku — senin çıktın onunla aynı biçimde olacak.

## 1. Bu oturum neden var — ölçülmüş bir seyreklik

Nokta yoğunluğu (bin km² / nokta; küçük = iyi), bugün:

```
Anadolu ....................  5     Irak-Mezopotamya .........  17
Balkanlar ..................  7     İran-Kafkas ötesi ........  19
İtalya-Orta Avrupa .........  21    Kırım-Kafkasya ...........  24
KUZEY-DOĞU AVRUPA ..........  99    ← bu oturum
```

Kutu: **boylam 15-45°D, enlem 48-62°K.** İçinde şu an **30 nokta** var. Bekleyen
merge partilerinden (Oturum 12'nin 228 noktası) bu kutuya yalnız **10'u** düşüyor
— yani birleştirme yapıldıktan sonra bile 74'te kalıyor ve **pencere içindeki en
zayıf bölge olarak öne çıkıyor.**

Neden önemli: bu kutu Osmanlı'nın **kuzey sınırının tam karşı yakası**. Kamaniçe,
Hotin, Azak, Özi, Bender bu hattın üstünde ve haritada "LEHİSTAN", "BOĞDAN
VOYVODALIĞI" etiketlerinin oturduğu yer burası. Nokta olmadığı için Lehistan'ın
peteği Baltık'a, Moskova'nınki Urallar'a doğru şişiyor (MIMARI.md §2 — "noktası
olmayan bölge en yakın peteğe emilir"). Kullanıcı sınır bölgelerindeki bu tür
şişmeleri ekran görüntüsüyle tek tek yakalıyor.

## 2. Kapsam

Boylam **15-45°D**, enlem **48-62°K**. (Alt sınır 48 çünkü altı Balkanlar ve
Kırım-Kafkasya kutularında zaten doygun; üst sınır 62 çünkü motorun penceresi
`box(-12, 1.5, 62, 62)` orada bitiyor — daha kuzeye nokta koymak boşa gider.)

| Bölge | Beklenen nokta | Not |
|---|---|---|
| Lehistan-Litvanya Birliği | Krakov, Varşova, Poznan, Lublin, Lvov (Lemberg), Vilnius, Kaunas, Grodno, Brest, Kiev, Podolya kaleleri | En kalabalık küme. Kamaniçe ve Hotin ZATEN VAR — tekrar yazma |
| Prusya / Töton | Königsberg (Krolewiec), Danzig (Gdansk), Marienburg, Thorn, Elbing | 1525'te Dukalık, 1701'de Krallık |
| Livonya / Baltık | Riga, Reval (Tallinn), Dorpat (Tartu), Narva, Pernau, Mitau | 1561 Livonya'nın bölünmesi kilit kırılma |
| Moskova Knezliği → Rusya | Moskova, Novgorod, Pskov, Tver, Smolensk, Kazan, Astarhan, Nijni Novgorod, Voronej, Tula, Ryazan | Kazan 1552, Astarhan 1556 — Osmanlı-Rus teması buradan başlar |
| Ukrayna / Kazak bozkırı | Çigirin, Poltava, Harkov, Zaporijya (Sıç), Perevolok | Hetmanlık 1648-1764; Osmanlı tâbiiyeti 1669-1676 (Doroşenko) |
| İsveç | Stokholm, Uppsala, Göteborg, Kalmar, Vyborg | |
| Danimarka-Norveç | Kopenhag, Aarhus, Oslo (Christiania), Bergen | Oturum 12'de VARSA yeniden yazma — kontrol et |
| Finlandiya / Karelya | Turku (Åbo), Helsinki, Viipuri | 1809'a kadar İsveç, sonra Rusya |
| Beyaz Rusya / Smolensk hattı | Minsk, Polotsk, Vitebsk, Mogilev | Lehistan ↔ Rusya arasında çok el değiştirir |

**Hedef: 90-120 nokta.** Bu kutuyu 74'ten ~20'ye indirir, yani Balkanlar-İtalya
kademesine yaklaştırır.

⚠️ **Önce mevcudu oku.** `data/yerlesimler.js` ve `data/yerlesimler_avrupa.js`
içinde bu kutuya düşen 40 nokta var; hangileri olduğunu ÖLÇ ve tekrar yazma:

```bash
node -e "global.window={};const fs=require('fs');for(const f of ['yerlesimler.js','yerlesimler_avrupa.js'])eval(fs.readFileSync('data/'+f,'utf8'));for(const k of Object.keys(window))if(/^YERLESIMLER/.test(k))window[k].filter(y=>y.lon>=15&&y.lon<45&&y.lat>=48&&y.lat<62).forEach(y=>console.log(k,y.ad,y.lat,y.lon));"
```

## 3. En kritik kısıt — Değişmez 2

Her `d:` ve `v:` dönem sınırı haritada bir **kırılma**dır ve ±30 gün içinde bir
kronoloji maddesi ister. **Sen `data/olaylar*.js`'e yazamazsın.**

Bu kutunun tamamı Osmanlı dışıdır, yani kayıtların **neredeyse hepsi `s:`
olacak** — ve `s:` → `s:` geçişleri kırılma SAYILMAZ. Yani tarih seçmekte
serbestsin ve bu oturumun işi tam bu yüzden kolaydır: Lehistan'ın Rusya'ya,
Livonya'nın İsveç'e geçişi gibi yüzlerce el değiştirmeyi gerçek tarihleriyle
yazabilirsin.

**Tek istisna: Osmanlı tâbiiyeti taşıyan yerler.** Ukrayna sağ yakası
1669-1676 arası Osmanlı himayesindeydi (Doroşenko) ve Podolya 1672-1699 arası
doğrudan Osmanlı eyaletiydi (Kamaniçe). Bunlar `d:`/`v:` gerektirir → kırılma
gerektirir → **mevcut kırılma tarihlerine oturtmak zorundasın.** Kullanılabilir
tarihleri şöyle bul:

```bash
node -e "global.window={};const fs=require('fs');for(const f of fs.readdirSync('data').filter(x=>/^yerlesimler/.test(x)))eval(fs.readFileSync('data/'+f,'utf8'));const t=new Set();for(const k of Object.keys(window))if(/^YERLESIMLER/.test(k))for(const y of window[k])for(const kat of ['d','s','v'])(y[kat]||[]).forEach(p=>{t.add(p.f);t.add(p.t);});console.log([...t].filter(x=>x>'1660'&&x<'1710').sort().join('\n'));"
```

## 4. `kur:` alanı — bu kutuda gerçekten gerekli

Atlas ufku 1281'de başlıyor ve bu bölgede **1281'de var olmayan yerleşim çok**:
Petersburg (1703), Odessa (1794), Helsinki (1550), Göteborg (1621), Harkov
(1654), Zaporijya Sıçı (1552). Bunlara mutlaka `kur:"YYYY-MM-DD"` yaz — yoksa
Değişmez 1 denetimi onları "1300'de sahipsiz" diye delik sayar ve sahipsiz
sayısı 34'ün üstüne çıkar.

Aynı şekilde ortadan kalkanlar `bit:` alır (ör. Zaporijya Sıçı 1775'te yıkıldı).

## 5. Kaynak kuralı — buradaki tuzak

**TDV İslâm Ansiklopedisi birincildir** ve bu bölgede sanılandan çok maddesi
var: LEHİSTAN · LİTVANYA · RUSYA · MOSKOVA · KAZAN HANLIĞI · ASTARHAN HANLIĞI ·
KIRIM HANLIĞI · UKRAYNA · KAZAKLAR · KAMANİÇE · İSVEÇ · DANİMARKA · FİNLANDİYA ·
ESTONYA · LETONYA · LİTVANYA · BALTIK ÜLKELERİ · PRUSYA.

> ⚠️ **`islamansiklopedisi.org.tr/<slug>` var olmayan slug için de HTTP 200
> döner** ve sessizce arama sayfasına yönlendirir. Ölü linki **yalnız `<title>`
> gösterir**: "Arama - TDV İslâm Ansiklopedisi". Her slug'ı böyle doğrula.
> Doğrulanmamış slug yazma.

TDV maddesi olmayan yerler (Stokholm, Riga, Novgorod gibi) için akademik
referans kullan; **Vikipedi asla tek kaynak olmaz.** Koordinatlar GeoNames'ten
alınabilir; tarihî ad ile modern ad farklıysa ikisini birlikte yaz
(`ad:"Königsberg (Kaliningrad)"` kalıbı dosyada zaten var).

## 6. Devlet kimlikleri

`arac/renkler.py`'ye **DOKUNMA.** Kullandığın kimliklerden hangileri orada var,
hangileri `data/devletler.js`'te (213 kayıt) var, hangileri hiç yok — **ölç** ve
ilerleme notuna yaz. Renk ataması entegrasyon oturumunun işidir; renkler DSATUR
ile komşuluk çizgesine göre dağıtılıyor ve rastgele eklenen renk dengeyi bozar.

`renkler.py`'de VAR olanlar: `rusya`, `lehistan`, `isvec`, `danimarka`,
`avusturya`, `prusya`(kontrol et), `kirim`, `bogdan`, `macaristan`.
Muhtemelen YOK: `litvanya`, `novgorod`, `moskova`, `kazan`, `astarhan`,
`teuton`, `livonya`, `kurlandiya`, `kazak-hetmanligi`, `norvec`, `finlandiya`.

Kimlik granülerliği: **bir kimlik = haritada ayrı boyanması anlamlı olan bir
siyasî gövde.** Lehistan-Litvanya Birliği (1569-1795) tek kimlik olmalı; ama
1569 ÖNCESİ `lehistan` ve `litvanya` ayrı, çünkü ikisi aynı anda sahnede ve
birbirine sınırdaş. Moskova Knezliği → Rus Çarlığı → İmparatorluk aynı gövdedir,
tek kimlik (`rusya`); Novgorod ve Kazan ayrıdır çünkü Moskova'yla eş zamanlı ve
bağımsızdır.

## 7. Çıktı biçimi

`data/yerlesimler.js` şemasıyla **birebir aynı**; dosya `window.YERLESIMLER_KUZEYDOGU`
dizisini yazar. Başına şu blokları koy (`yerlesimler_afrika.js`'i örnek al):

1. Kaç noktanın harita penceresi içinde olduğu — **ölç**, tahmin etme
2. Kimlik dökümü: renkler.py'de var / devletler.js'te var / hiç yok
3. `kur:` ve `bit:` verilen noktaların listesi ve gerekçesi
4. Osmanlı tâbiiyeti/eyaleti taşıyan kayıtlar ve kullandıkları kırılma tarihleri
5. Kimlik granülerliği kararları

## 8. Bitirince

`oturumlar/OTURUM-16-ILERLEME.md` yaz. **Ölçülmüş** sayılar olsun: nokta sayısı,
kutu içi/dışı dağılım, yeni yoğunluk (bin km²/nokta), kimlik dağılımı, `kur:`
verilen nokta sayısı. Entegrasyona devrettiğin işleri madde madde yaz.

**Commit ETME.** `git status` bırakıp çık.
