# KORİDOR HALKA2B — ilerleme

**Oturum** KORIDOR HALKA2B (Emre'nin verdiği ad: *opus hazır kıta 22*)
**Görev** `oturumlar/KORIDOR-HALKA2B.md` · tahta **M-0233**
**Dosyam** `data/koridor_f5c9a5.js` · **16 Ağustos 2026**

---

## ① BİTİŞ ÖLÇÜTÜ — sayıyla

```
4 kol → 4 kol YAZILDI          (İran · Rusya · Lehistan · Venedik)
düğüm  37  = 31 YENİ + 6 bağlantı ucu
kenar  33  = 27 saati türetilmiş + 6 KOPUK
kaynaksız durak  31 tane ve 31'i de kesinlik:3 · kaynak:"bulunamadı"
yeni nokta yaratılan  0        — hepsi girdi.yukle()'den SEÇİLDİ
```

## ② KABUL KAPISI — altısı da koşuldu, altısı da yeşil

```
① node ile okundu            düğüm 37 · kenar 33 · mükerrer id 0
② KIRIK UÇ                   0
③ TEK PARÇA                  hiçbir eski düğüme değmeyen kolum: 0
                             ⚠️ birleşik ağ 2 parça — sebebi BENDE DEĞİL, aşağıda ⑤
④ ÇİFT BOYAMA                0   (öteki iki dosyada boyar:true olan 49 kimlik tarandı)
                             bağlantı ucu olup ötekinde tanımlı olmayan: 0
⑤ SAAT/KM                    saati türetilmiş 27 kenarın 3-28 saat bandı dışında: 0
                             km/saat tutarsızlığı 0 · saat:null ↔ saat_cinsi tutarsızlığı 0
⑥ kaynak alanı               düğüm 37/37 · kenar 33/33
```

🔴 **VE İKİ SAYI AYRI DURUR — tek satırda birleştirmiyorum:**
```
ÖLÇTÜĞÜM  : saati türetilmiş 27 kenarın 27'si de TDV'nin 3-28 saat bandının İÇİNDE
ÖLÇTÜĞÜM  : 6 kenarın saati TÜRETİLMEDİ (kopuk)
ÇIKARIMIM : bu 6, "bandı ihlal" DEĞİL "ölçülemedi"dir — ve "ölçülemedi" asla
            "temiz" diye raporlanmaz
```

## ③ ZAMAN ÇERÇEVESİ — devraldığım rakamı DOĞRULAMADAN aktarmadım (B10)

`islamansiklopedisi.org.tr/menzil--osmanli` **kendim çektim, gövdesi geldi:**
```
"Kanûnî Sultan Süleyman döneminde 946'da (1539) Vezîriâzam Lutfi Paşa
 menzil sistemini yeni baştan teşkilâtlandırdı"
"1839'da posta teşkilâtı kurularak menzil sistemi tamamen yürürlükten kaldırıldı"
"üç saatten yirmi sekiz saate kadar olan mesafelerde tesis edilmiştir"
```
⇒ Şartnamedeki üç sayının üçü de **doğrulandı.** Ana kolların ADLARI ve
DURAKLARI ise maddede **yok** — şartname bunu da doğru söylüyordu.

## ④ ŞARTNAMEDE ÇÜRÜYEN SAYI

```
ŞARTNAME  : "18 delik buldu"
ÖLÇTÜĞÜM  : py arac/koridor_olc.py → 65 düğüm · 39 yere oturmuş · 26'sı koordinatsız
ÇIKARIMIM : şartnamedeki 18 bayat. İşimi 26 üzerinden kurdum.
```

## ⑤ 🔴 ÜÇ BULGU — üçü de BENİM DOSYAMDA DEĞİL, bildiriyorum

### ⑤a — koridor.js'in "26 deliği"nin 19'u BUGÜN KAPATILABİLİR

`yerlesimler_ek29.js` (NOKTA MENZİL, dün) tam da bu durakları yazmış. Ölçüm:
```
🟢 adı BİREBİR eşleşti VE coğrafî sınavı geçti (koridor komşusuna ≤250 km)  19
   Üsküdar · İshaklı · Ilgın · Karapınar · Ulukışla · Tosya · Harput · Lâdik ·
   Karahisar-ı Şarkî · Kelkit · Aşkale · Vize · Prevadi · Babadağı · İshakçı ·
   Silivri · Yagodina · Pravişte · Lanzaka
🟡 adı eşleşti ama SINANAMADI (komşularının da koordinatı yok)               3
   Yenişehir → Yenişehir (Larissa) · İzdin → İzdin (Lamia) · İstefe → İstefe (Tebai)
   ⇒ üçü de rumeli/sol'un Teselya-Boiotia kuyruğunda; adlar tek anlamlı ama
     "sınandı" DEMİYORUM, "sınanamadı" diyorum.
🔴 veride adı HİÇ YOK                                                        4
   Hasan Çelebi · Hasankale · Karasu · Firecik
19 + 3 + 4 = 26 ✓
```
⚠️ **Ve bu ölçümün İLK SÜRÜMÜ İKİ YANLIŞ ÜRETTİ** — ad benzerliğiyle eşledi:
`Karasu → Karasubazar` (Kırım'da, oysa durak Dobruca'da) ve
`Yenişehir → Yenişehir (Bursa)` (oysa Yenişehir-i Fener = Larissa).
⇒ Eşleme **birebir ada** çevrildi ve **coğrafî sınav** eklendi. *Ölçüm doğruydu,
çıkarım yanlıştı* — `CLAUDE.md §11`'in o gün altı kez ölçülen sınıfı.

### ⑤b — 🔴 BİRLEŞİK KORİDOR AĞI TEK PARÇA DEĞİL: BOĞAZ GEÇİŞİ YOK

```
koridor.js + koridor_halka2.js + benimki = 106 düğüm · 107 kenar · 2 PARÇA
   62 düğüm  Rumeli kanadı (+ Avusturya kolu + benim 3 kolum)
   44 düğüm  Anadolu kanadı (+ benim İran kolum)
KESİK YERİ: koridor.js'te `istanbul` ile `uskudar` arasında KENAR YOK.
```
`uskudar` düğümü **var** (`anadolu/sag#1` · `anadolu/orta#1`) ama İstanbul'a
bağlanmıyor: `istanbul`un üç kenarı da Rumeli'ye gidiyor (vize · silivri ·
tekirdağ). ⇒ **Menzil ağının kalbi olan Boğaz geçişi ağda yok.**
📌 Ve şartnamenin kendi cümlesi bunu öngörüyordu: *"var olmayan bir kaydı hiçbir
Değişmez sorgulamıyor — koridor, yokluğu ölçebilen tek alet."* Bu, aletin
kendi kurucusunda bulduğu ilk yokluk.

### ⑤c — `koridor_olc.py` yalnız `koridor.js` OKUYOR

`arac/koridor_olc.py:31` tek dosyaya bakıyor: `koridor_halka2.js` ve benim
dosyam **ölçümüne hiç girmiyor.** Yani araç bugün *"65 düğüm"* diyor, birleşik
gerçek **106**. ⚠️ Araç yanlış DEĞİL, **evreni dar** — ve `arac/` benim değil.

## ⑥ İKİ GÜZERGÂH KARARI — gerekçesi ÖLÇÜM, tercih değil

**① İran kolu Van'dan sonra GÜNEY hattından geçiyor.**
```
KUZEY (klasik Van-Hoy-Merend)      Van→Hoy 135,7 km / 31,9 sa   🔴 bant dışı
GÜNEY (Van-Başkale-Selmâs-Merend)  17,4 · 16,1 · 21,6 saat       🟢 tamamen içinde
```
Hoy düşürülmedi: Selmâs'tan **tâli kol** olarak asıldı (42,4 km / 10,0 sa).
⚠️ İkisi de kaynaksız; seçimi yapan **TDV'nin kendi bandı** oldu.

**② Venedik kolu Draç/Avlonya'da bitiyor, Venedik şehri YAZILMADI.**
Adriyatik'i geçen ayak **başka bir kurumdur** (Venedik posta sistemi) ve onu
ölçmedim. `koridor_halka2.js`'in *"1839'u başka bir kuruma taşımam"* kararının
aynısı.

## ⑦ ALTI KOPUK KENAR — hepsi `eksik_durak:true` ALANIYLA, serbest metinle değil

```
diyarbakir → h2b-bitlis    172,4 km   Silvan · Tatvan · Ahlat · Adilcevaz veride YOK
ozi        → h2b-orkapi    172,6 km   Kilburun · Yediçkul durakları veride YOK
h2b-taman  → h2b-azak      297,5 km   Azak Denizi doğu kıyısı boş; bağ DENİZ aşırıydı
h2b-yazlofca → h2b-lvov    141,8 km   Haliç (Halicz) · Rohatin veride YOK
lanzaka    → h2b-selanik   ölçülemedi uç düğümün koordinatı koridor.js'te YOK (⑤a)
h2b-selanik → h2b-manastir 142,2 km   Vodina (Edessa) · Ostrovo veride YOK
```
📌 Boşluk `neden:` gibi bir **serbest metne** değil `eksik_durak:true` **alanına**
yazıldı: *bir `if` ile sorulamayan ders, ders değildir* (`CLAUDE.md §11`, ⑪. sınıf).
⇒ Bir sonraki nokta oturumu **tek sorguyla** kendi iş listesini çıkarabilir.

## ⑧ KAYNAK — ne buldum, ne bulamadım

```
🟢 TDV menzil--osmanli   HTTP 200 · gövde okundu · üç sayı da doğrulandı
🔴 TDV kamanice          HTTP 200 · gövde okundu · YOL/GÜZERGÂH ANLATMIYOR
                         Hotin · Yaş · Suçava · Çernovitz · Lvov adları GEÇMİYOR
                         ⇒ "aradım, YOK" — "aramadım" değil
```
Bütün duraklar `kaynak:"bulunamadı"` · `kesinlik:3`. **Seçilmiş durak ile
uydurulmuş durak ayrı şeydir**: 31 durağın 31'i de veride zaten vardı.

## ⑨ NE YAPMADIM — açıkça

- `koridor.js` · `koridor_halka2.js` · `yerlesimler*` · `arac/*` — **dokunmadım.**
- ⑤a'nın 19 deliğini **kapatmadım** (koridor.js benim değil) — ölçtüm, bildirdim.
- ⑤b'nin Boğaz kenarını **eklemedim** — aynı sebep.
- Dosyamı `index.html`e / `girdi.py`ye **bağlamadım** — koordinatörün işi.
- Venedik şehri ve Adriyatik geçişi **yazılmadı** (⑥②).
