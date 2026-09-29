# KRONO-KAFKAS-0929 — YERLEŞİM ÖNERİLERİ (`s:`/`d:`/`isg:`)

> 29 Eylül 2026 · ORTAK §1 (b): *tarihte değişim var, haritada YOK* → öneri.
> 🔴 `data/yerlesimler*.js`e DOKUNULMADI (Oturum 0'ın dosyası). Uygulama ve
> öncelik kararı koordinatörün; öneriler petek koşusunda toplu uygulanmak içindir.
> Her satır: dosya · yerleşim · MEVCUT (koşu öncesi ham veri, 29 Eylül) · ÖNERİ · kaynak · gerekçe.
> "gün yok" yazan uçlar kaynakta gün taşımaz; uygulanırsa `kaynak:` alanına
> aynen o not yazılmalı (CLAUDE.md §4 hassasiyet kuralı).

## Öncelik sırası (etki × kesinlik)

| # | Yerleşim | Dönem | Sorun | Kesinlik |
|---|---|---|---|---|
| Ö1 | Tiflis + Zagem (Kaheti) | 1918-04-22 → 1921-02-25 | Gürcistan Cumhuriyeti'nin BAŞŞEHRİ haritada **sovyet-rusya** | yüksek (TDV tiflis, acara — günlü) |
| Ö2 | Kars | 1919-04-12 → 1920-10-30 | İngiliz işgali + Ermeni idaresi yok; harita Osmanlı/TBMM | yüksek (TDV kars — uçlar günlü) |
| Ö3 | Batum (+ Murvaneti) | 1918-12-01 → 1921-03-28 | İngiliz işgali yok, GDC 1918-12'de başlıyor; Mart 1921 Türk varlığı yok | yüksek (TDV batum/acara) |
| Ö4 | Ahıska (+ Ahılkelek) | 1918 → 1921 | 1918 Osmanlı ve 1919-21 Gürcü pencereleri yok; kesintisiz sovyet-rusya | orta (bir uç ay) |
| Ö5 | Tiflis | 1603 / 1606 | Safevî'ye geçiş: harita 1606, TDV iki maddede 1603 | orta (yıl) |
| Ö6 | Tiflis (+ Zagem v:) | 1735-06-19 → 1735-08-12 | Osmanlı çıkışı Baghavard'a bağlanmış; TDV teslimi 12 Ağustos'a koyar | yüksek (günlü) |
| Ö7 | Revan | 1827-10-13 → 1828-02-22 | fiilî Rus işgali (isg:) yok | yüksek (günlü) |
| Ö8 | Sohum | 1854-05 → 1856-07-10 · 1877-05 → 1877-08-12 | iki Osmanlı işgali yok | orta (başlangıçlar ay) |
| Ö9 | Batum / Hulo (Acara) | 1479 / 1535 / 1578 | Osmanlı'ya geçiş yılı üç ayrı değerde | düşük — önce kaynak hükmü |
| Ö10 | Kutaisi (İmereti) v: | 1508 → 1555 | 1508 haraç bağı haritada yok | düşük |

---

### Ö1 — Tiflis ve Zagem (Kaheti): 1918-1921 Gürcistan
`data/yerlesimler.js` · `Tiflis` (satır ~651) ve `Zagem (Kaheti)` (satır ~661)
```
MEVCUT  s: …{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}]
ÖNERİ   s: …{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
            {f:"1917-11-07",t:"1918-05-26",d:"transkafkasya"},
            {f:"1918-05-26",t:"1921-02-25",d:"gurcistan-demokratik-cumhuriyeti"},
            {f:"1921-02-25",t:"1923-10-29",d:"sovyet-rusya"}]
```
- Kaynak: TDV `tiflis` — *"22 Nisan 1918'de bağımsızlığını ilân eden Kafkas Federal Devleti'nin merkezi oldu … 26 Mayıs'ta … bağımsız Gürcistan Devleti'ni kurdular ve Tiflis'i başşehir yaptılar … Şubat 1921'de Kızılordu tarafından işgal edildi"*; gün: TDV `acara` — *"Gürcistan 25 Şubat 1921'de Bolşevikler tarafından işgal edilerek"*.
- Gerekçe: Kutaisi zaten `transkafkasya → gurcistan-demokratik-cumhuriyeti` taşıyor; başşehrin taşımaması doğu Gürcistan'ı 1918-1921 boyunca Sovyet boyuyor — kronoloji (`olaylar_2s_0920` 1918-05-26, `kronoloji_gurcistan` 1918-05-26/1921-02-25) haritayla ÇELİŞİYOR.
- `transkafkasya` başlangıcı Kutaisi ile aynı (1917-11-07) tutuldu; künye 1917-11-07→1918-05-28 ile uyumlu, 1918-05-26 ucu künye içinde.
- ⚠️ `Transkafkasya` 22 Nisan 1918'de bağımsızlık ilan etti; 1917-11-07→1918-04-22 arası Komiserlik/Seym dönemidir — künye bunu kapsıyor, ayrı pencere önermiyorum.

### Ö2 — Kars: 1919-1920 İngiliz işgali ve Ermeni idaresi
`data/yerlesimler.js` · `Kars` (satır ~244)
```
MEVCUT  d:[…,{f:"1918-05-25",t:"1920-04-23",y:"antlasma"}]   s:[…,{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}]
ÖNERİ   d:[…,{f:"1918-05-25",t:"1919-04-12",y:"antlasma"}]
        isg:[{f:"1919-04-12",t:"<devir günü — BULUNAMADI>",d:"ingiltere"},
             {f:"<devir günü>",t:"1920-10-30",d:"ermenistan-demokratik-cumhuriyeti"}]
        s:[…,{f:"1920-10-30",t:"1923-10-29",d:"tbmm-turkiye"}]
```
- Kaynak: TDV `kars` — *"12 Nisan 1919'da Kars İngiliz işgaline uğradı … İngilizler Kars'ın denetimini Ermeniler'e bıraktılar … Kâzım Karabekir Paşa 30 Ekim 1920'de Kars'a girdi"*; TDV `kazim-karabekir` — *"İngilizler tarafından Ermenistan'a ve Gürcistan'a verilen (Nisan 1919) elviye-i selâse"*.
- İngiliz→Ermeni devir günü TDV'de **yok** (`bulunamadı`). Tek pencere (`isg: ermenistan-demokratik-cumhuriyeti` 1919-04-12→1920-10-30, "İngiliz işgaliyle başlayan") daha sade bir seçenek; seçim koordinatörün.
- `isg:` mi `s:` mi: Ermeni idaresi hukuken Sevr'e dayanıyordu ve Sevr yürürlüğe girmedi ⇒ `isg:` öneriyorum.
- Mevcut `olaylar_p0049` 1919-04-12 ve 1920-10-30 maddeleri iki kırılmayı zaten karşılar (Değişmez 2 evreninde).
- Aynı durum Kars'a bağlı Sarıkamış, Kağızman, Arpaçay, Digor, Iğdır için de ölçülmeli — bu turda ölçmedim (`ölçülemedi`: TDV `kars` yalnız şehri anar).

### Ö3 — Batum: 1918 Aralık - 1921 Mart
`data/yerlesimler.js` · `Batum` (satır ~963); aynı desen `data/yerlesimler_sinir_kuzey.js` · `Murvaneti`
```
MEVCUT  d:[…,{f:"1918-04-14",t:"1918-12-01",y:"antlasma"}]
        s:[…,{f:"1918-12-01",t:"1921-03-16",d:"gurcistan-demokratik-cumhuriyeti"},{f:"1921-03-16",t:"1923-10-29",d:"sovyet-rusya"}]
ÖNERİ   d:[…,{f:"1918-04-14",t:"1918-12-24",y:"antlasma"},{f:"1921-03-11",t:"1921-03-28"}]
        isg:[{f:"1918-12-24",t:"1920-07-01",d:"ingiltere"}]
        s:[…,{f:"1920-07-01",t:"1921-03-11",d:"gurcistan-demokratik-cumhuriyeti"},{f:"1921-03-28",t:"1923-10-29",d:"sovyet-rusya"}]
```
- Kaynak: TDV `batum` — *"Mondros … çekilmek zorunda kalınca şehir İngilizler tarafından işgal edildi (24 Aralık 1918) … Temmuz 1920'de … Batum'u da boşalttılar ve buraya Gürcistan hükümeti el koydu … Türk kuvvetlerinin şehri boşaltmasından sonra (28 Mart 1921)"*; TDV `acara` — *"İngilizler 1 Temmuz 1920'de Batum'u Gürcü işgaline terkedip 17 Temmuz 1920'de buradan tamamen çekildi … 11 Mart 1921'de Artvin, Ardahan ve Batum'un Türkiye'ye bırakılması sağlandı"*.
- ⚠️ 1918-12-01 → 1918-12-24 arası: TDV Osmanlı çekilişinin gününü vermiyor; öneri Osmanlı'yı İngiliz işgaline kadar uzatır. Alternatif: `bulunamadı` yazıp mevcut 12-01'i korumak.
- 1921-03-11→28 Türk varlığı `d:` (Osmanlı rengi) değil `tbmm-turkiye` olmalıysa `s:` ile yazılmalı — 1921'de TBMM hükümeti var; koordinatör hükmü.

### Ö4 — Ahıska ve Ahılkelek: 1918-1921
`data/yerlesimler.js` · `Ahıska` (satır ~965); `data/yerlesimler_ek28.js` · `Ahılkelek (Akhalkalaki)`
```
MEVCUT  s:[…,{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}]
ÖNERİ   s:[…,{f:"1917-11-07",t:"1918-06-04",d:"transkafkasya"}]   (yalnız Tiflis/Kutaisi ile tutarlılık için)
        d:[…,{f:"1918-06-04",t:"1919-04-13"}]                     (Batum Antlaşması → Gürcü işgali)
        s:[…,{f:"1919-04-13",t:"1921-03-16",d:"gurcistan-demokratik-cumhuriyeti"},{f:"1921-03-16",t:"1923-10-29",d:"sovyet-rusya"}]
```
- Kaynak: TDV `ahiska` — *"1918 Mondros Mütarekesi'ne göre Ahıska ve Ahılkelek sancakları, merkezi Kars olan yerli geçici hükümete (Millî Şûra Teşkilâtı) katıldılar. Millî Gürcistan hükümeti Haziran 1918'de Trabzon Antlaşması'yla bu iki sancağı resmen Türkiye'ye bıraktı. Fakat 13 Nisan 1919'da … Ahıska Gürcistan tarafından işgal edildi ve 16 Mart 1921 Moskova Antlaşması'yla Gürcistan SSC'nin Tiflis vilâyetine bağlandı."*
- ⚠️ TDV "Trabzon Antlaşması" diyor; Haziran 1918'de Osmanlı-Gürcistan antlaşması Batum Antlaşması'dır (4 Haziran 1918, `kronoloji_cok_1dunya_B`). Ay kaynaktan, gün komşudan — şartlı; DUZELTME K5.
- ⚠️ Kasım 1918-Nisan 1919 Cenûb-ı Garbî Kafkas hükümeti için künye YOK; bu aralığı `d:` (Osmanlı) göstermek tartışmalı (Mondros sonrası). `bulunamadı` olarak bırakmak da seçenek.
- Sovyet geçişini 1921-03-16'ya (Moskova, TDV) koydum; Tiflis için önerdiğim 1921-02-25 ile fark bilinçli: Ahıska'nın statüsünü TDV Moskova Antlaşması'na bağlıyor.

### Ö5 — Tiflis: Safevî'ye geçiş 1603 mü 1606 mı?
`data/yerlesimler.js` · `Tiflis`
```
MEVCUT  d:[{f:"1578-08-24",t:"1606-01-01",y:"savas",…}, …]
ÖNERİ   d:[{f:"1578-08-24",t:"1603-01-01",…, kaynak:"… bitiş: TDV tiflis '1603'te Tiflis Şah Abbas'ın eline geçti' + TDV gurcistan '1603'te Şah I. Abbas Tiflis şehrini Osmanlılar'dan geri alıp' — YIL, gün yok"}, …]
```
- İki TDV maddesi de 1603 diyor; 1606 yalnız `olaylar_ek6` "Tiflis ve Gence'nin kaybı" maddesinden geliyor (TDV gurcistan 1606'yı **Lori ve Tumanıs** için veriyor). ⚠️ Zagem'in `v: kaheti-kralligi` penceresi ve künyenin kendisi de 1606'ya bağlı — birlikte düşünülmeli.
- Dikkat: `1603-01-01` Tebriz'in düşüşünden (1603-10-21) önce kalır — yıl hassasiyetinin bedeli. Uygulanmazsa en azından `kaynak:` notu eklenmeli.

### Ö6 — Tiflis: Osmanlı'nın çıkışı 12 Ağustos 1735
`data/yerlesimler.js` · `Tiflis` (ve Zagem'in v: penceresi yok, etkilenmez)
```
MEVCUT  d:[…,{f:"1723-06-15",t:"1735-06-19",y:"kusatma"}]
ÖNERİ   d:[…,{f:"1723-06-15",t:"1735-08-12",y:"kusatma",kaynak:"bitiş: TDV tiflis '12 Ağustos 1735'te Tiflis'i yeniden ele geçiren İran birlikleri'"}]
```
- 1735-06-19 Baghavard bozgunudur (Revan yakını), Tiflis'in teslimi değildir. Madde: `kronoloji_cok_gurcistan.js` 1735-08-12.

### Ö7 — Revan: Rus işgali 13 Ekim 1827
`data/yerlesimler.js` · `Revan` (satır ~662)
```
MEVCUT  s:[…,{f:"1794-01-01",t:"1828-02-22",d:"kacar"},{f:"1828-02-22",t:"1917-03-15",d:"rusya"},…]
ÖNERİ   isg:[{f:"1827-10-13",t:"1828-02-22",d:"rusya",kaynak:"TDV revan: 'ikinci saldırıda kaleyi ele geçirdiler (13 Ekim 1827)'"}]   (s: aynen kalır)
```
- Madde: `kronoloji_cok_ermeni.js` 1827-10-13. Aynı ölçüt Eçmiyadzin, Norapat, Şerur için geçerli olabilir — ölçülemedi (TDV yalnız kaleyi anar).

### Ö8 — Sohum: iki Osmanlı işgali
`data/yerlesimler.js` · `Sohum` (satır ~596)
```
MEVCUT  s:[…,{f:"1810-07-11",t:"1923-10-29",d:"rusya"}]
ÖNERİ   d:[…,{f:"1854-05-01",t:"1856-07-10",kaynak:"TDV sohum: 'Osmanlı birlikleri Mayıs 1854'te Sohum'a girdi' (AY, gün yok) · '10 Temmuz 1856'da Ruslar, Sohum'u tekrar işgal etti'"},
           {f:"1877-05-02",t:"1877-08-12",kaynak:"TDV sohum: 2 Mayıs 1877 bombardıman (çıkarma günü YOK — EN ERKEN sınır) · '12 Ağustos 1877'de Sohum boşaltıldı'"}]
        (s:'teki rusya penceresi bu iki aralıkta bölünür)
```
- 1877 başlangıcı en zayıf uç: TDV bombardıman gününü veriyor, çıkarma/şehre giriş gününü vermiyor. Uygulanmazsa `bulunamadı`.

### Ö9 — Batum / Hulo (Acara): Osmanlı'ya geçiş yılı
`data/yerlesimler.js` · `Batum`; `data/yerlesimler_ek26.js` · `Hulo (Acara)`
- Harita: 1578-08-09 (Çıldır). TDV `gurcistan`: *"Acaristan (Batum) ve çevresi 1479'da fethedildi"*. TDV `acara`: *"Acara'nın fethi 1535'te gerçekleşti"*, *"1568-1574 … Erzurum beylerbeyiliği sancak listesinde yer alan Acara"*. TDV `batum`: *"1568-1574 yılları arasında Erzurum'un bir sancağı"*.
- ⇒ En az 1568-1574'te Batum/Acara Osmanlı sancağıdır; harita bunu 1578'e kadar `gurcistan` boyuyor. **Öneri değil hüküm sorusu:** 1479 mu 1535 mi? İkisi de TDV; `acara` maddesi daha dar ve daha yeni. Karar verilmeden uygulanmamalı. DUZELTME K2.

### Ö10 — Kutaisi: İmereti'nin Osmanlı'ya tâbiliği 1508
`data/yerlesimler.js` · `Kutaisi`
```
MEVCUT  v:[{f:"1555-05-29",t:"1810-02-20",k:"İmereti krallığı (tâbi)"}]
```
- TDV `gurcistan`: 1508'de İmeret (Açıkbaş) haraca bağlandı; ama 1514-1555 arası süreklilik kaynakta yok (1536'da İmereti Safevî ile ittifak yapıyor — TDV `cildir-eyaleti`). ⇒ Tek bir `v:` penceresi önermiyorum; gözlem olarak kayıtta.

## Gözlem — öneri değil
- **Revan'ın Gürcülere bağımlılığı (1751-?)**: TDV `revan` 1751'de Revan hanlarının Gürcülere bağımlı hâle geldiğini söylüyor; bitiş tarihi kaynakta yok ⇒ `v:` önerilmedi.
- **Revan 1747-06-20→1751-01-01 `zend`**: künye 1751'de başlıyor (denetle.py künye aşımı −3,5 yıl, Revan/Nahçıvan/Ordubad/Gümrü/Eçmiyadzin/Şerur/Norapat/Kliçatak). TDV `revan` 1747'de müstakil Revan Hanlığı diyor ⇒ künye sınıfı ③ (ardıl yapı, künye yok). Künye listesine bildirildi.
- **1578-08-01 (Ahıska, Zazalo, Ts'q'altbila)**: Değişmez 2s AÇIK listesinde. Ahıska atabekliği Çıldır zaferinin (9 Ağustos 1578) ARDINDAN Osmanlı'ya geçti (TDV `ahiska`, `cildir-eyaleti`) ⇒ 1578-08-01 zaferden önce kalıyor; 1578-08-09 olmalı (ya da `kaynak:` notu). DUZELTME K8.
