# BULGU-S125-KUYRUK — `data/kronoloji*.js` KUYRUK dosyalarının ilk kapsam ölçümü

Oturum: SONNET HAZIR KITA 125 · Koordinatör: 1.MURAT · 2 Eylül 2026
Sevk: M-2281 (§ SONNET HAZIR KITA 125 satırı), teyit M-2291
Rol: ÖLÇÜM OTURUMU — düzeltme YAPILMADI, yalnız rapor.

## YÖNTEM — ve niçin ikinci kez yazıldı

İlk geçiş `arac/girdi.py`'nin `_cevir()` (regex tabanlı JS→JSON) aracını
kullandı. İki kusur çıktı, ikisi de ölçülüp düzeltildi, ikisi de rapora
alınıyor çünkü kendileri birer bulgu:

1. **`kronoloji_italya_sehir.js` PATLADI.** `_cevir()` yalnız `//` satır
   yorumlarını temizliyor; bu dosya `/* ... */` blok yorumu kullanıyor
   (bölüm başlıkları için). Blok yorum satırı ham hâliyle JSON gövdesine
   sızdı, `json.loads` "line 3 column 1" hatasıyla çöktü.
   ⇒ **Çare regex'i yamalamak değil, Node'un KENDİ JS yorumlayıcısını
   çağırmak oldu** (`CLAUDE.md §11`: "veri zaten bir dilde yazılıysa, o
   dilin yorumlayıcısını çağır"). İkinci geçiş `new Function('window', js)`
   ile her dosyayı gerçek JS olarak çalıştırdı — blok yorum, satır yorumu,
   dize birleştirme, hepsi doğru işlendi, 42/42 dosya sıfır hata ile okundu.
   🔴 **RİSK NOTU (bu turun kapsamı dışında, kayda düşülüyor):** kuyruk
   şu an `Değişmez 2`nin evreninde olmadığı için hiçbir üretim aracı bu
   dosyayı `_cevir` ile okumuyor. Ama gelecekte biri kuyruğu `_cevir`
   tabanlı bir araca bağlarsa `kronoloji_italya_sehir.js` **sessizce
   patlar** (ya da "bulunamadı" gibi görünür) — regex'in blok yorumu
   bilmediği unutulmasın.
2. **"kaynak: DOLU" sayısı ilk geçişte YANLIŞTI (4652/4652, %100).**
   Kendi kontrolüm `kaynak.lower() in ("bulunamadı",)` tam eşleşme
   arıyordu; gerçek değerler `"bulunamadı — <gerekçe>"` biçiminde uzun
   cümleler ve tam eşleşmiyor, dolayısıyla YANLIŞLIKLA "dolu" sayıldılar.
   İkinci geçiş `startsWith('bulunamad')` kullandı. **Ölçmeden önce
   kendi ölçüm kodumu da yanlış soru sorarken yakaladım** — düzeltilmiş
   sayılar aşağıdadır, yalnız onlar geçerlidir.

Bağlı evren (`yer_id` karşılaştırması için) `arac/girdi.py`'nin
`yukle()` fonksiyonuyla — yani `GIRDI_DOSYALARI`nın TEK DOĞRU KAYNAK
olduğu kural gereği — üretildi (salt okuma, dosyalara dokunulmadı, motor
koşusu etkilenmedi).

---

## ① NE ÖLÇTÜM — sayıyla

```
KUYRUK DOSYA SAYISI        : 42   (glob data/kronoloji_*.js, 0 patlayan)
  ⇒ index.html'de KAÇI CANLI : 42/42 — hepsi <script src> ile bağlı,
    "unutulmuş dosya" YOK (satır 725-783 arası tarandı)

TOPLAM MADDE                : 4838

kaynak: DOLU (gerçek kaynak) : 4193   (%86,7)
kaynak: BOŞ                  :  645   (%13,3)
  bunun "bulunamadı — <gerekçe>" diye AÇIKÇA yazılanı : 645 / 645 (%100)
  ⇒ 645'in 645'i BELGELİ boşluk. Sessizce boş bırakılmış TEK kayıt YOK.

yer_id VAR                   : 3631  (%75,0)
yer_id BOŞ ("")               : 1207  (%25,0)

yer_id BAĞLI EVRENDE KARŞILIĞI VAR : 3631 / 3631  (%100)
yer_id BAĞLI EVRENDE KARŞILIĞI YOK :    0 / 3631  (%0)
  ⇒ bağlı evren: girdi.GIRDI_DOSYALARI (69 dosya) · 2663 benzersiz `ad`
```

Doğrulama: `4193+645=4838` ✓ · `3631+1207=4838` ✓ · `_S125_olcum_node.json`
içindeki `bagliDegilOrnekTam` dizisi **boş** (0 öğe) — yani tek bir
`yer_id` bile bağlı evrende karşılıksız kalmadı, örnek listelenemedi
çünkü örneklenecek ihlal yok.

### Dosya dosya döküm

| dosya | madde | kaynak dolu | kaynak boş | yer_id var | yer_id boş | yer_id bağlı |
|---|---:|---:|---:|---:|---:|---:|
| kronoloji_akkoyunlu.js | 77 | 77 | 0 | 55 | 22 | 55 |
| kronoloji_almanya.js | 132 | 109 | 23 | 79 | 53 | 79 |
| kronoloji_altinorda.js | 44 | 42 | 2 | 31 | 13 | 31 |
| kronoloji_anadolu.js | 281 | 277 | 4 | 190 | 91 | 190 |
| kronoloji_arabistan.js | 60 | 60 | 0 | 34 | 26 | 34 |
| kronoloji_atina_dukaligi.js | 25 | 25 | 0 | 24 | 1 | 24 |
| kronoloji_balkan.js | 177 | 130 | 47 | 81 | 96 | 81 |
| kronoloji_bizans.js | 97 | 97 | 0 | 80 | 17 | 80 |
| kronoloji_cin.js | 136 | 135 | 1 | 95 | 41 | 95 |
| kronoloji_dogu_afrika.js | 218 | 217 | 1 | 188 | 30 | 188 |
| kronoloji_fransa.js | 184 | 184 | 0 | 136 | 48 | 136 |
| kronoloji_guney_asya.js | 153 | 52 | 101 | 142 | 11 | 142 |
| kronoloji_gurcistan.js | 45 | 40 | 5 | 35 | 10 | 35 |
| kronoloji_habsburg.js | 117 | 82 | 35 | 82 | 35 | 82 |
| kronoloji_hindistan.js | 131 | 59 | 72 | 114 | 17 | 114 |
| kronoloji_hollanda.js | 42 | 33 | 9 | 23 | 19 | 23 |
| kronoloji_ingiltere.js | 270 | 270 | 0 | 182 | 88 | 182 |
| kronoloji_iran.js | 107 | 107 | 0 | 76 | 31 | 76 |
| kronoloji_iran_ardillari.js | 155 | 154 | 1 | 138 | 17 | 138 |
| kronoloji_ispanya.js | 158 | 156 | 2 | 102 | 56 | 102 |
| kronoloji_isvec.js | 101 | 101 | 0 | 39 | 62 | 39 |
| kronoloji_italya.js | 192 | 65 | 127 | 158 | 34 | 158 |
| kronoloji_italya_sehir.js | 186 | 92 | 94 | 185 | 1 | 185 |
| kronoloji_japonya.js | 71 | 16 | 55 | 50 | 21 | 50 |
| kronoloji_karakoyunlu.js | 70 | 70 | 0 | 45 | 25 | 45 |
| kronoloji_katalan.js | 9 | 9 | 0 | 9 | 0 | 9 |
| kronoloji_kirim.js | 91 | 91 | 0 | 65 | 26 | 65 |
| kronoloji_kuzeyafrika.js | 83 | 83 | 0 | 63 | 20 | 63 |
| kronoloji_lehistan.js | 140 | 140 | 0 | 82 | 58 | 82 |
| kronoloji_macaristan.js | 127 | 127 | 0 | 88 | 39 | 88 |
| kronoloji_memluk.js | 155 | 149 | 6 | 130 | 25 | 130 |
| kronoloji_misir.js | 120 | 110 | 10 | 111 | 9 | 111 |
| kronoloji_naksa_dukaligi.js | 25 | 25 | 0 | 25 | 0 | 25 |
| kronoloji_orta_asya.js | 205 | 204 | 1 | 185 | 20 | 185 |
| kronoloji_ozbek.js | 73 | 73 | 0 | 55 | 18 | 55 |
| kronoloji_portekiz.js | 86 | 75 | 11 | 56 | 30 | 56 |
| kronoloji_rodos_sovalyeleri.js | 96 | 96 | 0 | 87 | 9 | 87 |
| kronoloji_rusya.js | 173 | 173 | 0 | 148 | 25 | 148 |
| kronoloji_safevi.js | 81 | 81 | 0 | 63 | 18 | 63 |
| kronoloji_sirbistan.js | 35 | 34 | 1 | 13 | 22 | 13 |
| kronoloji_timurlu.js | 24 | 23 | 1 | 19 | 5 | 19 |
| kronoloji_venedik.js | 86 | 50 | 36 | 68 | 18 | 68 |
| **TOPLAM (42)** | **4838** | **4193** | **645** | **3631** | **1207** | **3631** |

### Bilgi amaçlı — en düşük oranlar (istenmedi ama karar için faydalı olabilir)

```
EN DÜŞÜK kaynak-dolu ORANI:
  kronoloji_japonya.js        %23  (16/71)
  kronoloji_italya.js         %34  (65/192)
  kronoloji_guney_asya.js     %34  (52/153)
  kronoloji_hindistan.js      %45  (59/131)
  kronoloji_italya_sehir.js   %49  (92/186)

EN DÜŞÜK yer_id-bağlı ORANI (yer_id boş olanlar dahil, paydası TÜM madde):
  kronoloji_sirbistan.js      %37  (13/35)
  kronoloji_isvec.js          %39  (39/101)
  kronoloji_balkan.js         %46  (81/177)
  kronoloji_hollanda.js       %55  (23/42)
  kronoloji_arabistan.js      %57  (34/60)
```
⚠️ Bu oranlarda düşüklüğün sebebi ÖLÇÜLMEDİ — çoğu muhtemelen `yer_id`si
olmayan devlet-dışı/genel-tarih maddeleri (bilim, kültür olayları gibi,
`§11`in "kültür/bilim maddesinin toprak kırılması OLMAZ" ayrımı) ama bu
YORUM, ÖLÇÜM değil. Karar isteniyorsa ayrı bir kalem gerekir.

---

## ② NEYİ BULAMADIM

- `yer_id` alanı BAĞLI EVRENDE karşılıksız kalan **hiçbir** kayıt
  bulamadım (0/3631) — aranmadığı için değil, ölçülüp sıfır çıktığı
  için. Örnek listelenemedi çünkü liste boş.
- Sessizce boş bırakılmış (`kaynak:""` ya da alan hiç yok) **hiçbir**
  kayıt bulamadım — 645 "boş" kaydın 645'i açıkça `bulunamadı — <gerekçe>`
  yazıyor.
- `data/kronoloji*.js` deseni dışında (`kronoloji_ek*.js`, farklı bir
  önek vb.) başka bir kuyruk dosyası ARAMADIM — sevk yalnız
  `data/kronoloji*.js`i işaret ediyordu, `data/olaylar*.js` (çekirdek,
  SONNET HAZIR KITA 128'in kalemi) ve `data/kronoloji.js` (tekil, yoksa)
  gibi komşu adlar bu turun kapsamı dışında bırakıldı — ÖLÇÜLMEDİ.
- Bu 4838 maddenin **kaçının fiilen ekranda göründüğünü** (yani
  `js/app.js`in kuyruğu gerçekten okuyup okumadığını) ÖLÇMEDİM — sevk
  yalnız dosya/madde/alan sayımı istedi, çalışma zamanı davranışı değil.

---

## ③ NE İSTİYORUM

1. **Karar bekleyen bir şey yok** — bu tur salt ölçüm, sonucu yukarıda.
2. `_S125_olcum_node.json` ve `_S125_bagli_adlar.json` (`denetim/`
   altında, salt-okunur ham veri) bu raporun dayanağıdır; bir sonraki
   oturum tekrar ölçmeden bu dosyalardan okuyabilir.
3. `kronoloji_italya_sehir.js`nin blok-yorum riskini (yukarıdaki YÖNTEM
   §1) kayda düştüm — bir karar istemiyorum, yalnız gelecekte biri
   kuyruğu `_cevir` ile bağlarsa şaşırmasın diye.
4. İstersen (ayrı bir kalem olarak) düşük kaynak/yer_id oranlı beş
   dosyayı (japonya · italya · italya_sehir · guney_asya · hindistan /
   sirbistan · isvec · balkan · hollanda · arabistan) daha derin bir
   turda inceleyebilirim — ama bu YENİ bir iş, bu sevkin kapsamı değil.

## DAMGA

```
TUTTU       : sevk edilen dört sayı da ölçüldü, tutarlılık çift yoldan
              doğrulandı (Python girdi.yukle() bağlı evren + Node JS-eval
              kuyruk okuma), toplamlar birbirini karşılıyor.
ÇÜRÜDÜ      : kendi ilk geçişimin "kaynak %100 dolu" sayısı — yanlış
              string-eşitliği testi yüzünden. İkinci geçişte düzeltildi,
              yalnız düzeltilmiş sayı raporlanıyor.
ÖLÇÜLEMEDİ  : düşük oran dosyalarının SEBEBİ (yorum, karar değil) ·
              kuyruğun js/app.js tarafından fiilen okunup okunmadığı ·
              data/kronoloji*.js dışındaki komşu adlar.
```

Ham veri: `denetim/_S125_olcum_node.json` · `denetim/_S125_bagli_adlar.json`
Ölçüm betikleri (scratchpad, depoya YAZILMADI): `olc_kuyruk.py` (ilk/hatalı
geçiş, kayıt için tutuluyor) · `olc_kuyruk.js` (ikinci/doğru geçiş, Node).
