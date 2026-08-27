# BULGU — PAKET parti-emrelic-0036 (17 madde, taze paket)

> Kaynak: `C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0036\`
> (Emre, 27 Ağustos 2026 01:13). İlk kez işleniyor — BAYAT taraması değil.
> Hükümler: `denetim/HUKUM-0036.json`. `CEVAP.json` yok (paket taze),
> hiçbir veri/kod dosyasına yazılmadı.

## Özet

```
zaten-dogru:  4   (H-0010, H-0013, H-0016, H-0017)
cozuldu:      1   (H-0001)
sirada:      10   (H-0002,03,04,05→ olculecek,07,08,09,11,12,14,15)
olculecek:    1   (H-0005)
tekrar:       1   (H-0006 — H-0007 ile aynı sahne)
```

Not: sayı satırında H-0005 iki kez göründü — sınıfı `olculecek`, sayaçta
doğru (10 `sirada` + 1 `olculecek` = 11, + 4 zaten-dogru + 1 cozuldu + 1
tekrar = 17).

## Cross-cutting bulgu — TARALI ALAN KÖK fix'in kapsamı

H-0002, H-0003, H-0004, H-0014 **aynı kök nedene** bağlanıyor: bu gece
(27 Ağu 02:49, commit `e53c86a`) `arac/uret_devirler.py`'nin `coz()`
fonksiyonu `PARCA_HALKA` katmanını atlayan bir sözleşme kaymasıyla
düzeltildi. Doğrudan ölçüm (`denetim/BULGU-DEVIR-TARALI.md` §E3): Edirne
Antlaşması (1829-09-14) günü eski okuma 50 eksik+97 fazla veriyordu,
düzeltilmiş okuma yalnız 1 eksik+1 fazla. `data/devirler.js` yeniden
üretilip commit içinde push edildi (HEAD'in atası).

🔴 **AMA yayın adımı eksik ve bunu ben doğrudan doğruladım:** `index.html`
içindeki `?v=r3410` sürüm damgası bu düzeltmeden GELMİYOR — 2 gün önceki bir
commit'ten (`670e649`, 25 Ağustos) kalma. `git show e53c86a --stat --
index.html` **boş** — düzeltme commit'i `index.html`'e hiç dokunmamış.
Yani veri dosyası düzeldi ve depoya girdi ama tarayıcı önbelleği hâlâ eski
`devirler.js`'i tutuyor olabilir (CLAUDE.md §9: "sürüm damgasını yükselt,
yoksa tarayıcı önbelleğinden eski dosyaları görür"). **Dört madde de bu
yüzden `cozuldu` değil `sirada`** — tek eksik adım `arac/surum_damgala.py`
çalıştırıp commit+push etmek, bir koşu GEREKMİYOR.

⚠️ Bir alt-oturum H-0014'ü ilk turda "cozuldu" olarak bildirmişti; yukarıdaki
doğrulamayla "sirada"ya çevirdim — tutarlılık için not düşülüyor.

## Gerçek yeni bulgular — koordinatörün dikkatine

**H-0007/H-0008/H-0011 (Kütahya dönemi, 1832-33 Mısır işgali) — üç madde
birbirine bağlı, gerçek veri hataları:**
- **Urfa** (`data/yerlesimler.js:242-243`) `v:1832-08-15→1841-02-25`
  taşıyor ama **TDV `sanliurfa` maddesi işgali 1839'da diyor** (1832 değil,
  1839 ikinci Mısır buhranı) — Kütahya Sözleşmesi'nin resmî vilayet
  listesi de Urfa'yı hiç saymıyor. Kayıt muhtemelen **yanlış**.
- **Maraş** (`data/yerlesimler.js` civarı) `v:1832-07-29→1841-02-25`
  taşıyor ama **TDV `kahramanmaras` maddesi işgalin 1833'te başlayıp
  ~19 ay sürdüğünü** söylüyor (≈1834-35 biter) — kayıt **~7 yıl fazla**
  ve başlangıcı da yanlış.
- **Dörtyol/Erzin/Yumurtalık** (`data/yerlesimler_ek28.js:61-83`) ve
  **Antep/Elbistan/Behisni** (`data/yerlesimler.js:1236-1237,2101`) —
  Mısır dönemi `v:` alanı TAMAMEN BOŞ, oysa yorum satırları TÜBA kaynağının
  zaten araştırıldığını gösteriyor; tarih hiç yazılmamış. **Bu, Emre'nin
  "parçalı parçalı görünüyor" şikâyetinin tam mekanizması.**
- Adana ve Konya kısımları zaten doğru (tarihsel olarak tutarlı).

⇒ Öneri: bu üç maddeyi tek bir "1832-33 Mısır işgali veri düzeltmesi"
kalemi olarak Yerleşim araştırma oturumuna devret — Urfa/Maraş tarihini
düzelt, altı yerleşime eksik `v:` dönemini ekle.

**H-0012 — Şammar (Reşîdî) Emirliği'nin kronoloji maddesi eksik:**
Künye var (`devletler.js:1500-1508`, TDV kaynaklı) ama kuruluş için hiç
kronoloji maddesi yok — Hail'in kendi kırılması (1836-01-01) Değişmez 2
açığı. Küçük not: devletler.js `f:1835`, yerleşim `f:1836` — netleştirilmeli.

**H-0015 — Polesya/Pinsk bölgesinde §2 sınıfı boşluk:** genişletilmiş
taramada bile sıfır nokta, 1854'te fiilen Rus toprağı ama ifade eden kayıt
yok. Yeni nokta gerekiyor.

**H-0016 — veri doğru, kronoloji BAŞLIĞI abartılı:** Kabiliye'nin 1857'ye
kadar özerk kalması veride doğru modellenmiş ama "Cezayir'in TAMAMININ
elden çıkışı" başlığı bunu yansıtmıyor — küçük bir metin düzeltmesi.

**H-0005 — veri doğru, geometri ölçülmedi:** Ahıska/Ahılkelek TDV ile
doğrulandı ama aralarındaki görsel boşluğun Voronoi artefaktı mı yoksa
opaklık karışması mı olduğu ölçülmedi — harita-hata-avı (Oturum 2) gerekiyor.

## Zaten doğru çıkanlar (dört madde, kusur yok)

- **H-0010** — Rus donanmasının Büyükdere'ye gelişi zaten `tur:"deniz"` +
  kesikli ⚓ glifiyle gösteriliyor, ek iş yok.
- **H-0013** — Cezayir'de ortadaki enklav (Tîzî Vezzû/Akbû, Kabiliye
  özerkliği), tâbi renk ve kademeli fetih üçü de TDV ile doğrulandı, doğru.
- **H-0016** — (bkz. yukarı, veri doğru — yalnız başlık metni ayrı sorun.)
- **H-0017** — Cağbûb'un `kur:"1856-01-01"` kaydı TDV ile birebir uyumlu,
  1281'den beri var gösterilmiyor.

## Tekrar

- **H-0006** — H-0007'nin aynı sahnesi (1832-11-21 Konya), metin taşımıyor,
  ayrı hüküm gerektirmiyor.
