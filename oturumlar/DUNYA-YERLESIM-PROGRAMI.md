# DÜNYA YERLEŞİM PROGRAMI — 1281-1923, bütün dünya

> **Emre'nin kararı, 3 Eylül 2026:** *"Tüm dünyanın yerleşimlerini
> bitirelim artık. 1281 yılından itibaren başlayarak 1923 yılına kadar
> gelecek şekilde, bütün dünyada bu yıllarda nerede hangi yerleşim var
> ise hepsini yerleştir."*

---

## 🔴 ÖNCE ÖLÇÜT — yoksa "hepsi" bitmeyen bir listedir

O çağda dünyada **yüz binlerce köy** vardı ve atlas onları çizmiyor.
Atlasın ihtiyacı **tamlık değil KAPSAMA**dır, ve sebebi `CLAUDE.md §2`:

> *Noktası olmayan bölge, en yakın peteğe emilir ve **O PETEĞİN
> SAHİBİYLE** boyanır.*

⇒ Ölçüt **motorun kendi parametresinden** gelir:
```
TAVAN_KM = 200 (bütün kademeler)  ⇒  bir nokta en çok ~200 km'ye uzanır
BOŞLUK   = en yakın noktası 200 km'den UZAK kara hücresi
           ⇒ hiçbir peteğe girmez ⇒ HARİTADA BOYANMAZ
```
Bu ölçüt **bitirilebilir**: sayısı var, ve her yeni nokta onu düşürür.

**Alet:** `py arac/_dunya_bosluk.py 2.0`
🔴 `ne_10m_land.geojson` kullanır, `motor_kara.geojson` **DEĞİL** —
ikincisi motorun ÇIKTISIDIR ve zaten tavanla biçimlenmiştir; onunla
boşluk aramak *boşlukları eleyen maskeyle boşluk aramaktır.*
(OPUS HAZIR KITA 120 ölçtü: 5.456 ↔ 10.857 hücre.)

---

## 🔴 BUGÜNKÜ TABAN — 3 Eylül 2026 · 2731 nokta · ızgara 2°

```
BÖLGE                        kara     AÇIK        %   en uzak
Avrupa                        250        0     0,0%     167 km  🟢 BİTTİ
Anadolu+Levant+İran           146        3     2,1%     246 km  🟢 BİTTİ
Orta Asya                     136       17    12,5%     368 km  🟡
Güneydoğu Asya                107       14    13,1%     563 km  🟡
Arabistan                      96       18    18,8%     414 km  🟡
Güney Asya                    126       26    20,6%     526 km  🟡
Doğu Asya                     317       87    27,4%     579 km  🔴
Moğolistan+Tibet              298       93    31,2%     562 km  🔴
Orta Amerika+Karayip           54       17    31,5%     645 km  🔴
Kuzey Afrika                  160       54    33,8%    1125 km  🔴
Sibirya+Ural                  515      275    53,4%     553 km  🔴
Sahra altı Afrika             468      275    58,8%    1368 km  🔴
Uzak Doğu Sibirya              97       63    64,9%     435 km  🔴
Güney Amerika                 385      281    73,0%    1941 km  🔴
Yeni Gine+Okyanusya            75       56    74,7%    1241 km  🔴
Kuzey Amerika                 692      575    83,1%    2431 km  🔴
Avustralya                    177      151    85,3%    1071 km  🔴
─────────────────────────────────────────────────────────────
TOPLAM                       4099     2005    48,9%
```

**Dünya karasının yarısı boyanmıyor.** Ve Avrupa'nın %0'ı bunun
bitirilebilir olduğunu gösteriyor — orası da bir zamanlar %100'dü.

---

## 🔴🔴 EMRE'NİN BAĞLAYICI HÜKMÜ — bu programın ana kuralı

> **"EĞER YERLEŞİM VAR İSE NOKTA KONUR. YOK İSE UYDURACAK HALİMİZ YOK.
> DEVASA BOŞLUKLAR OLACAKSA OLSUN."**

⇒ Hedef **%0 değildir.** Bazı hücreler kapanmayacak ve **kapanmaması
doğru olacak**: Sahra'nın içi, Rub'ul Hâlî, Avustralya çölü, Grönland,
Sibirya tundrası, Amazon'un derinliği.

**Her açık hücre iki yoldan biriyle kapanır:**
```
① KAYNAKLI NOKTA   o hücrede 1281-1923 arası bir yerleşim VARDI
② BEYAN            yoktu — ve CİNSİ yazılır:
     neden:"devletsiz"  kaynak AÇIKÇA konuşuyor ("burada devlet yoktu")
     neden:"veri-yok"   kaynak SUSUYOR (hiç tartışmıyor)
```
⚠️ İkisi haritada aynı görünür; fark **bir sonraki oturum içindir** —
`devletsiz`e bir daha bakılmaz, `veri-yok`a bakılır.
🔴 **Cinsi yazılmamış boşluk kabul edilmez.** Bugün 97 noktanın cinsi
yazılı değil; o borcu büyütmeyin.

---

## DALGALAR — sıra tesadüf değil

Sıra **en boş** olana göre değil, **en çok YALAN ÜRETENE** göre:
`§2` gereği bir boşluk, kalabalık bir komşusu varsa onun sahibiyle
boyanır. Issız boşluk yalnız boş kalır; **komşulu boşluk yanlış boyanır.**

```
DALGA 1 (şimdi)   Kuzey Amerika · Güney Amerika · Sahra altı Afrika ·
                  Sibirya+Ural · Avustralya+Okyanusya · Moğolistan+Tibet
DALGA 2           Doğu Asya · Kuzey Afrika · Uzak Doğu Sibirya ·
                  Orta Amerika+Karayip
DALGA 3           Güney Asya · Arabistan · Güneydoğu Asya · Orta Asya
                  (dördü de 🟡 — tamamlama işi)
```

---

## HER OTURUMUN İŞİ — beş adım, sırayla

```
① KUTUNU İLAN ET      py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT"
                      --mesaj "KUTU: <bölge> · <G>-<K>K / <B>-<D>D"
   🔴 KUTUSU YAZILMAMIŞ NOKTA KOLU AÇILMAZ. Bugün üç mükerrer koşu
      öldürücüsü çıktı (`el-Ulâ` üç ayrı çift).

② BOŞLUĞU ÖLÇ        py arac/_dunya_bosluk.py 2.0   → kendi bölgen
   Sonra 1° ızgarayla daralt: hangi hücreler, nerede?

③ HER AÇIK HÜCRE İÇİN — kaynağa sor
   🟢 KABUL   Cambridge History · üniversite yayını · hakemli makale ·
              alanın standart el kitabı · birincil kaynak neşri
   🔴 ASLA    forum · blog · içerik çiftliği · kaynaksız derleme ·
              yapay zekâ üretimi metin · popüler "tarih sayfası"
   🟡 Vikipedi TEK DAYANAK DEĞİL — yalnız "hangi maddeye bakayım"
   TDV kapsıyorsa ÖNCE TDV (`§4`). Kapsamıyorsa ya da o TANECİKTE
   susuyorsa akademik kaynak MEŞRU — şartı `kaynak:`a AÇIKÇA yazmak.

④ ARARKEN ALTI EKSEN — altısı da bugün gerçek kayıp üretti
   ① YIL BİÇİMİ   düz `1395`, kaynağın "1394-95"inde YOKTUR
   ② TAKVİM       kaynak hicrî verebilir (797 · 982 · 998)
   ③ SLUG YAZIMI  `anadolu-hisari` boilerplate; canlısı TİRESİZ
   ④ CÜMLE KALIBI "İstanbul antlaşması" ≠ "İstanbul'DA YAPILAN antlaşma"
   ⑤ NOKTALAMA    TDV tipografik kesme (U+2019 ’) kullanır
   ⑥ OLMAYAN ALAN  aradığın alan yoksa sonuç `0` çıkar ve SESSİZDİR
   + TÜRKÇE YAZIM  `usku` ≠ `Üsküp` · `Buda` ≠ `Budin`

⑤ YAZMADAN ÖNCE ÜÇ SINAV
   py arac/_baglama_onsinav.py <dosyan.js>
   ① 3 KM  bağlı evrende VE kuyrukta bekleyenlerde
   ② AD    🔴 `girdi.yukle` ValueError ATAR — MOTOR HİÇ BAŞLAMAZ
   ③ KUTU  senin kutun başkasınınkiyle örtüşüyor mu
```

## YAZMA YETKİSİ
```
🟢 SENİN   data/<sana verilen dosya>.js   ← ad alanı da SENİN:
           window.<AD_ALANI>  (dosya adındaki ayırt edici parça
           değişken adında da olacak — "ayrı dosya vermek ayrı ad
           alanı vermek DEĞİLDİR", beş dosya tek ad kullanıp %74
           kayıp riski üretmişti)
           denetim/<kendi raporun>.md
🔴 DEĞİL   başka her şey. `girdi.py`ye BAĞLAMA — koordinatör bağlar.
```
🔴 **KOŞU SÜRERKEN `data/` VE `arac/` İKİSİ DE DONMUŞTUR.** Motor
*"girdi dosyaları SERBEST"* diye bir satır basar; o **yarım doğrudur** —
yazmak koşuyu öldürmez ama **çıktıyı yayınlanamaz hâle getirir.** Dünkü
10,5 saatlik koşu tam bu yüzden yayınlanamadı. Koşu durumunu bana sor.

## BİTİŞ ÖLÇÜTÜ
```
① bölgenin AÇIK hücre sayısı ölçüldü (önce/sonra)
② her açık hücre için: KAYNAKLI NOKTA ya da CİNSİ YAZILI BEYAN
③ her kaydın `kaynak:` alanı DOLU (ya da açıkça `bulunamadı`)
④ her `s:` kimliği `devletler.js`te VAR ve ömrü TUTUYOR (hayalet yok)
⑤ `_baglama_onsinav.py` KIRMIZI 0
```
**Teslim SAYIYLA:** *"575 → 210, kalan 365'in 300'ü `devletsiz` diye
kapandı, 65'i için kaynak bulunamadı"* — *"bitirdim"* değil.

## HABERLEŞME
```bash
py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT" --mesaj "..."
```
Tam anahtar **1.MURAT** (uzun ad ötmüyor). Yatay mesaj serbest, şartı
tahtadan geçmesi. ⚠️ Tahta mesaj kaybedebiliyor — kritik bir şey
yazdıysan `tahta.json`dan **geri okuyup kendi kaydını ara.**

**AKSAKLIK BEKLEMEZ:** kaynaklar çelişiyorsa · şartname yanlış çıktıysa ·
beklenenden çok farklı bir sayı ölçtüysen → **bekletmeden** yaz.
**Ölçmediğini `ölçmedim`, bulamadığını `bulunamadı` diye YAZ.**

## DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım, yeni iş bekliyorum."
⏳ "BEKLİYORUM: <ne> · <kimden> · <ne zaman tekrar bakacağım>"
```
