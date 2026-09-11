# C ÇİZİM KATMANI — ekran tarafı, teslim

Sevk: 1.MURAT (koordinatör) · 11 Eylül 2026 · SONNET (C ÇİZİM KATMANI)
Şema: `denetim/SEMA-C-0911.md` §6/§8. `js/app.js` donuk değildi, uygulandı.

---

## ① NE YAPILDI

`js/app.js`e üç parça eklendi:

1. **Kaynak+katmanlar** (`osmanli-cizgi`den hemen sonra, ~satır 1263):
   `hukuki-sinir-dolgu` (fill) ve `hukuki-sinir-hat` (line, kesikli).
   devlet/vassal/osmanli dolgularının **üstüne** ekleniyor — SEMA'nın
   "C üçüncü katman DEĞİL" kuralına uyarak `KATMAN_KUMESI`'nin **"Siyasî"**
   kovasına dahil edildi (`/hukuki-sinir-/` eklendi), ayrı bir açma/kapama
   kutusu YOK.
2. **Geometri mantığı** (`_DEVLET_RENK`'ten hemen sonra, ~satır 4827):
   `_cKayitGeometrisi()` — `kapsama.kutu`yu `hat.nokta_dizisi`nin ilk/son
   noktasından geçen doğruya göre Sutherland–Hodgman ile ikiye keser,
   her yarıyı `taraflar[0]`/`taraflar[1]`'in rengiyle boyar (`osmanli` →
   `#8e0b22`, diğerleri `_DEVLET_RENK[id]`'den — DEVLET_HARITA'nın kendi
   renk tablosu, İKİNCİ bir renk kaynağı İCAT EDİLMEDİ).
3. **Güncelleme kancası** (`guncelle()` içinde, `zoomUygula(d)`'dan hemen
   sonra ama `di !== aktifDonem` kapısının **DIŞINDA** — gerekçe: bir
   C penceresi bir dönem sınırıyla çakışmayabilir). Kendi `_cAktifId`
   önbelleği gereksiz `setData`yı engelliyor.

---

## ② 🔴 ŞEMA İLE ÖLÇÜLEN VERİ ÇELİŞTİ — `yon_kurali` isim/işlev uyuşmazlığı

`SEMA-C-0911.md` §8.1 `yon_kurali: "yerel_cross_pozitif_taraf_a"` diyor —
isim POZİTİF cross'un `taraf_a`'ya gittiğini iddia ediyor. Ama AYNI
belgenin §4b'sindeki ÖLÇÜLMÜŞ örnek TERSİNİ gösteriyor:

```
İstanbul   cross = -2,08  → OSMANLI (taraflar[0], taraf_a)
Kırklareli cross = +0,99  → BULGARİSTAN (taraflar[1], taraf_b)
```

Kendi formülümle (§4b'nin BİREBİR aynısı) yeniden hesapladım — SEMA'nın
iki sayısı da (−2,08 / +0,99) doğrulandı. ⇒ **NEGATİF → taraf_a, POZİTİF
→ taraf_b — `yon_kurali` STRİNGİNİN ADI YANLIŞ**, ölçülen örnek doğru.
Kod ADI değil ÖLÇÜMÜ esas aldı (yorumda açıkça yazılı). Şema yazarına
bildiriliyor — gerçek veri gelmeden bu isim düzeltilmeli, yoksa bir
sonraki C kaydı yazan oturum isme güvenip tarafları TERS atar.

---

## ③ SINANDI — tarayıcıda, üç SINAV (D010, SEMA §8.5)

Sahte kayıt (SEMA §8.1'in Midye-Enez örneği, `taraflar` düzeltilmiş:
`["osmanli","bulgaristan"]` — gerçek `devletler_harita.js` id'si; §8.1'in
kendi taslağındaki `bulgaristan-kralligi` de YANLIŞTI, `_DEVLET_RENK`de
yok, denendi ve boş/gri döndüğü ÖLÇÜLEREK bulundu) yalnız tarayıcı
belleğine (`window.HUKUKI_SINIRLAR = [...]`) enjekte edildi —
**`data/` altına hiçbir şey YAZILMADI.**

```
SINAV 1 (pozitif)   1913-06-10: diyagonal YEŞİL/KIRMIZI kesim GÖRÜNÜYOR
                    (Enez→Midye doğrultusunda, ekran görüntüsüyle
                    doğrulandı) · dolgu renkleri programatik olarak da
                    doğrulandı: ["#8e0b22","#2d6c0c"] (osmanli/bulgaristan
                    — DEVLET_HARITA'nın GERÇEK renkleriyle birebir)
SINAV 2 (kapsama    Kutu dışındaki bölgeler (İstanbul, Bursa, Ankara
dışı)               yönü) ekran görüntülerinde HİÇ değişmedi
SINAV 3 (zaman)     1913-05-25 (f'den önce) ve 1913-07-05 (t'den sonra)
                    ikisinde de _cAktifId=null, diyagonal kesim YOK,
                    ekran NORMAL A/B'ye (gerçek tarihsel veri) döndü
KONSOL HATASI       0 (üç tarih değişiminde de, injection sırasında da)
```

⚠️ **Bir çalışma-ortamı notu, kusur DEĞİL:** bu makinede önizleme
sunucusunun `harita.loaded()`/`haritaHazir` bayrağı **~15-25 saniye**
sürüyor (donemler.js 32 MB + Esri raster gecikmesi) — erken bakan bir
ekran görüntüsü BOŞ harita gösterir. `try/catch` ile test edip C
kodumun BU gecikmeye sebep olmadığı doğrulandı (hatasız, ve gecikme
C kodu eklenmeden ÖNCEKİ oturumda da vardı).

---

## ④ BİLİNEN SINIRLAR — açıkça, D107

```
🟡 N>2 noktalı ("eğri", SEMA §8.2 ①b) hatlar için dolgu-bölme yalnız
   İLK ve SON nokta arasındaki DÜZ ÇİZGİYE göre yapılıyor — TAM polyline
   değil. Şemanın kendisi de N-noktalı bölmeyi "tasarlandı, sınanmadı"
   diye işaretliyor (§8.2) — bugün YALNIZ 2 noktalı (cetvel) örnek
   (Midye-Enez) test edildi, yaklaşıklık hiç DEVREYE GİRMEDİ. Hattın
   KENDİSİ (çizilen çizgi) her zaman TAM polyline'ı kullanıyor — yalnız
   dolgu rengi ayrımı yaklaşık.
🟡 `index.html`e YENİ dosya satırı EKLENMEDİ — SEMA §8.4 zaten bunun
   "bu görevde sınanmadı" olduğunu, gerçek veri dosyası geldiğinde
   eklenmesi gerektiğini söylüyor. Bugün `window.HUKUKI_SINIRLAR`
   TANIMSIZSA kod `|| []`e düşüyor, hiçbir şey KIRMIYOR.
🟡 Motor (`arac/uret_petek.py`) tarafına DOKUNULMADI (görev şartı) —
   petek geometrisinin kendisi hâlâ eski; bu C bir CLIENT-SIDE boyama
   düzeltmesi, gerçek petek kenarını DEĞİŞTİRMİYOR (yorumda açık).
```

---

## ⑤ COMMIT

`js/app.js` — tek commit, pathspec'le.
