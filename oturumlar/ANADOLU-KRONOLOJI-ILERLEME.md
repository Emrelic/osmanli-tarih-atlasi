# ANADOLU BEYLİKLERİ KRONOLOJİ — İlerleme

Oturum: ANADOLU BEYLİKLERİ KRONOLOJİ · Koordinatör: OSMANGAZİ · 22 Ağustos 2026

## TESLİM — sayıyla

① **madde sayısı**: 0 → **281** madde, `data/kronoloji_anadolu.js` (yeni dosya).
Künye başına: karaman 51 · selcuklu 87 · artuklu 45 · dulkadir 36 · aydin 30 ·
kilikya-ermeni 32. Ömür/madde oranı künyeye göre 0,10-1,15 arasında (kaynağın
verdiği kadar — zorlama yok).

② **konu dağılımı** (şartname §2'nin altı kovası):
```
askerî-siyasî    205  (%73,0)   hedef ~40  — kaynak agirlikli boyle
idarî-hukukî      14  ( %5,0)   hedef ~15
bilim-teknoloji    8  ( %2,8)   hedef ~15
kültür-sanat      35  (%12,5)   hedef ~15
sosyal-dinî       10  ( %3,6)   hedef ~10
iktisadî           9  ( %3,2)   hedef  ~5
```
Askerî-siyasî ağırlık hedefi aştı — TDV'nin altı künye için de "A) Tarih"
bölümü uzun/ayrıntılı, "B) Sosyoekonomik-Kültürel" bölümü kısa. Kotaya
ulaşmak için madde UYDURULMADI (şartname §1, §2 açıkça yasaklıyor);
Dulkadir ve Kilikya-Ermeni'de bilim/teknoloji kovası neredeyse boş kaldı
çünkü kaynak öyle diyordu.

③ **onem/dunya dağılımı**: onem {1:3, 2:68, 3:111, 4:57, 5:42} ·
dunya {1:138, 2:110, 3:21, 4:9, 5:3}.

④ **kapsam**: ic 162 · dis 119.

⑤ **yer_id**: dolu 182 · kapsam_genis 36 · **boş 99**. Boşluğun sebebi
ikiye ayrılıyor:
   - **Bölgesel/muğlak olay** (İç İl, Kahire, "batı toprakları" gibi) — yer_id
     zaten olamaz, bu normal.
   - **Nokta gerçekten yok** — atlas verisinde kaydı bulunmayan yerler:
     **Hasankeyf** (Artuklu'nun kuruluş merkezi, 9 madde) · **Sis** (Kilikya
     Ermeni başkenti, 13 madde) · Ayas · Mut · Silvan (Meyyâfârikīn) ·
     Kızıltepe (Dunaysır) · Suğdak (Kırım) · Kefersud (Babaîler İsyanı çıkış
     yeri) · Malazgirt · Myriokephalon · Kösedağ · Turnadağ — savaş/olay
     yerleri. **Hasankeyf ve Sis en ağır basanlar**, ikisi de bir devletin
     kuruluş/başkent merkezi.

⑥ **kaynak**: dolu 281 (hiç boş yok) · açıkça `bulunamadı` işaretli 4
(Malabadi köprüsü, Nâsırüddin Mahmud'un imarı, Devegeçidi Köprüsü — Artuklu;
bir ekonomi genellemesi). Kilikya-Ermeni'nin TÜM 32 maddesi akademik kaynağa
dayanıyor (TDV'nin müstakil maddesi yok, `CLAUDE.md §4` gereği meşru):
Bournoutian (2006) · Stewart (2001) · Ghazarian (2000) · Der Nersessian ·
Edwards (1987) · Bedoukian (1962) · Orient dergisi hakemli makalesi.
En sık kullanılan TDV maddeleri: `karamanogullari` (51) · `selcuklular` (43)
· `dulkadirogullari` (25) · `artuklular` (21) · `aydinogullari` (15).

⑦ **NEYİ BULAMADIM**:
   - Yukarıdaki 12 yer için atlas noktası yok (§⑤).
   - Kilikya-Ermeni'nin akademik kaynaklarının hiçbirinin TAM METNİNE bu
     turda doğrudan erişilemedi (Bournoutian PDF'i OCR hatası verdi,
     ötekiler WebSearch özetinden) — her `kaynak:` alanında bu AÇIKÇA
     yazılı, bir sonraki oturum birincil metinle teyit etmeli.
   - Dulkadir ve Kilikya-Ermeni'de bilim/teknoloji kovası neredeyse boş.
   - 7 ek beylik künyesi (candar, germiyan, mentese, saruhan, hamid, teke,
     ramazanoglu) TARANDI, devletler.js'te doğru id ile mevcut olduğu
     doğrulandı, ama bu turda YAZILMADI — kapsam dışı bırakıldı.
   - 15+ küçük beylik (eretna, burhaneddin, karesi, cobanogullari, pervane,
     esrefogullari, inancogullari, sahibata, taceddin, alaiye, haciemir,
     mutahharten…) hiç dokunulmadı, yalnız kayda geçti.

⑧ **commit/entegrasyon**: commit hash aşağıda eklenecek (bu dosyayla
birlikte, `git commit -F <mesaj> -- data/kronoloji_anadolu.js
oturumlar/ANADOLU-KRONOLOJI-ILERLEME.md`). `index.html`e
`<script src="data/kronoloji_anadolu.js">` satırının eklenmesi
**KOORDİNATÖRÜN işi** (şartname §5) — bildirildi.

## AKSAKLIK — koordinatöre bekletilmeden bildirildi (tahta M-1035)

Ankara Savaşı (1402-07-28) için `kronoloji_timurlu.js` (dunya:5) ile
`kronoloji_akkoyunlu.js` (dunya:4) arasında ÇAPRAZ DOSYA ÇELİŞKİSİ var;
`denetle_kronoloji.py` farklı `b:` başlıkları yüzünden bunu YAKALAMIYOR.
Bu dosyada savaşın kendisi AYRI madde olarak tekrarlanmadı; Karaman ve
Aydınoğulları'nın kendi restorasyon maddeleri `dunya:1`, `kapsam:"ic"`
taşıyor (savaş değil, kendi diriliş kararları) — bu yüzden yeni bir
çelişki DOĞMADI. Cevap bekleniyor.

## METODOLOJİ NOTU

Altı künyenin araştırması 5 paralel ajanla (Selçuklu, Artuklu, Dulkadir,
Aydın, Kilikya-Ermeni) + Karaman'ın doğrudan koordinatör oturumu tarafından
yazılmasıyla yapıldı. Ajan çıktıları ham JSON olarak toplandı, sonra:
1. `yer_hint` alanları `arac/girdi.py`nin 2603 noktasına KODLA (elle değil)
   doğrulandı, eşleşmeyenler boşaltıldı.
2. `dunya:"ORTAK"` işaretli 55 madde tek tek var olan 40 kronoloji dosyasıyla
   (tarih+başlık eşleştirmesiyle) karşılaştırıldı; 5 gerçek eşleşme bulunup
   var olan değerle hizalandı, kalan 50'si `CLAUDE.md` dunya skalasıyla
   bağımsız değerlendirildi (rubrik yorumu bana ait, koordinatör isterse
   gözden geçirir).
3. Ajanların atladığı ama tabanda olan kritik maddeler (kuruluş/son
   tarihleri, Malazgirt, Myriokephalon, Kösedağ, Turnadağ savaşları, Kilikya
   kuruluş/son) geri eklendi — "üstüne inşa et, tekrar etme" talimatı bazı
   ajanlarda baseline'ı hiç yeniden yazmama sonucunu doğurmuştu.
4. `node --check` + `arac/denetle_kronoloji.py` ile doğrulandı: **temiz**,
   0 şema ihlali, 0 dunya-tutarlılık çelişkisi (korpusun geri kalanıyla).
   ⚠️ Denetim betiği bu turda BAŞKA bir oturumun eşzamanlı yazdığı
   `kronoloji_eslesme_yama.js` dosyasında geçici bir ayrıştırma hatasına
   çarpıp çöktü — BENİM dosyamla ilgisi yok, kendi doğrulamamı o dosyayı
   atlayan ayrı bir betikle tamamladım.
