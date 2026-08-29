# BULGU — VERİ SAHİPLİK-2 · emilme kümesi (16 madde)

**Oturum:** VERİ SAHİPLİK-2 · **Tarih:** 28 Ağustos 2026
**Şartname:** ORHANGAZİ'nin tahta sevki (M-1395'e cevap) + `oturumlar/ORTAK-PAKET-KURALLARI.md` + `oturumlar/VERI-SAHIPLIK.md`
**Kaynak:** `ClaudEmre/kutu/giden/parti-emrelic-0035/PARTI.md` — bu depoda YOKTU, `kutu/giden` dizini
hiç commit edilmemiş bir çalışma klasörüydü; ClaudEmre ana dizininde bulundu ve kurtarıldı.

---

## 0. Sayılar

```
toplam madde        16
cozuldu              2   (H-0050, H-0061 — AYNI gerçek bug, tek düzeltme)
zaten-dogru           9   (ölçüldü, veri zaten doğru — değişiklik YOK)
sirada (MOTOR ÜÇ KALEM'e bağlı)   3   (H-0047, H-0064, H-0102)
baska-ise-bagli (ARAYÜZ'e bağlı)  1   (H-0052)
olculecek             1   (H-0021 — kaynak bulunamadı)
```

🔴 **16 maddenin 16'sı da tek tek ÖLÇÜLDÜ** — emilme.md'deki "18 ayrı iş DEĞİL,
TEK iş" küme-hükmü yerine, her madde `py arac/_yer_ara.py` ile nokta/dönem
sorgulanarak ve 9 madde için görsel açılarak ayrı ayrı incelendi.

---

## 1. 🟢 GERÇEK BUG — H-0050 + H-0061 (tek kök, tek düzeltme)

> *"fetret devrinden sonra bu parça osmanlı kırmızısı olarak kalmış bu parçayı
> emir süleyman topraklarına katman gerekir"* (H-0050)
> *"fetret devrinde bu bölümdeki topraklar osmanlı kırmızısında kalmış
> görünüyor"* (H-0061)

**İkisi de AYNI görsel, aynı tarih (1402-07-28), aynı bölge** — Kırklareli
kıyısı (Ahtapolu/Rezve/İğneada, Bulgaristan sınırına yakın Karadeniz kıyısı).

Ölçüm (`--kutu 41.3 27.1 42.7 28.3 --gun 1402-07-28`, 10 nokta):

| nokta | 1402-07-28'de | komşusu Kırklareli/Dereköy/Kofçaz/Vize/Lüleburgaz |
|---|---|---|
| Ahtapolu, Rezve, İğneada | **OSMANLI** (tek blok, split yok) | `suleyman-celebi` |

Kırklareli ve Dereköy'ün `s:` dizisinde Fetret'in dört alt-dönemi
(suleyman-celebi → musa-celebi → suleyman-celebi → musa-celebi, 1402-07-28'den
1413-07-05'e) zaten kayıtlı. Üç kıyı noktası **aynı yamayı almamış** — bariz
bir "tutarsız komşu" vakası, yeni TDV araştırması gerekmedi, mevcut verinin
kendi içindeki tutarlılığı fix'i verdi.

**Düzeltme** `data/yer_yama_emilme2.js`'e yazıldı: üç noktanın `d:` tek bloğu
ikiye bölünüyor, aradaki 1402-07-28→1413-07-05 aralığına komşularıyla
BİREBİR aynı dört `s:` alt-dönemi ekleniyor.

---

## 2. 🟢 ÖLÇÜLEREK KAPANAN 9 MADDE — zaten doğru, değişiklik gerekmedi

**Ortak desen:** hepsinde Emre'nin gördüğü "boş toprak" ya (a) gerçekten
doludur ve ölçüm bunu gösterdi, ya (b) görüntülenen tarihte henüz
fethedilmemiş bir bölgedir ve boş görünmesi doğrudur, ya da (c) komşu bir
devletin kendi rengiyle gösterildiği doğru bir sınırdır.

- **H-0019** (Şirvan) — 65 nokta, dolu.
- **H-0022** (Tebriz-Azerbaycan koridoru) — `yer_yama_iran.js` (27 Ağustos)
  zaten güçlendirmiş, görsel dolu gösteriyor.
- **H-0026** (Özi-Çehrin bozkırı) — Yedisan/Yedişkul bozkırı, Zaporojye Seçi,
  Or Kapı gerçek dönemleriyle var; 1775 Seçi dağıtımı ve 1793 Çehrin/Lehistan
  ilhakı doğru yansıtılıyor.
- **H-0029** (Semendire) — **TDV `semendire` ile doğrulandı**: kale (1738-08)
  ile çevre kazalar (1739-09, Belgrad'la birlikte) arasındaki 13 aylık fark
  kaynağın kendi ifadesiyle ("Avusturyalılar bu bölgede Ağustos 1738'e kadar
  kaldılar") uyumlu.
- **H-0031** (Hâil) — `data/bos_alanlar.js:98`'de zaten `devletsiz-yerlesim`
  olarak, CLAUDE.md §3 referansıyla kayıtlı.
- **H-0036** (Bender/Kırım bozkırı) — aynı kutu, 1770: Kırım bozkırı "tabi",
  Zaporojye ayrı, Çehrin Lehistan — tutarlı.
- **H-0049** (Niş) — görsel çevresinin "SIRBİSTAN" diye ayrı renkte
  etiketlendiğini gösteriyor, emilme YOK.
- **H-0073** (Tiflis-Şirvan 8 nokta) — sayılan 8 yerin 8'i de veride var;
  görsel seferin en başını (1723-08) gösteriyor, henüz fetih öncesi olması
  TDV'nin İstanbul Antlaşması tarihiyle (Temmuz 1724) tutarlı.
- **H-0075** (Ferhad Paşa/Hemedan koridoru) — 5 şehrin 5'i de iki ayrı savaşın
  (1585-1603, 1724-1730) izini taşıyan gerçek `d:` kayıtlarına sahip.

---

## 3. 🟡 BAŞKA İŞE BAĞLI — 4 madde

### H-0047, H-0064, H-0102 → MOTOR ÜÇ KALEM

Üçü de aynı genel şikâyetin varyasyonu: *"boş arazilerin Osmanlı kırmızısında
boyanmasını engelle."* H-0047'nin kendi önerisi (*"emilmeyi tamamen iptal
etmek yerine, 200 km tavanlı yerleşimlerin çöl girintilerini kaide ile
yumuşat"*) bugünkü tahtada (28 Ağustos, KİM-NE-YAPIYOR tablosu) MOTOR ÜÇ
KALEM'in **tam da o an üzerinde çalıştığı iş** (`TAVAN_KM · B1/B2/B3 ·
PUAN_ESIK`) ile birebir örtüşüyor. H-0064 somut bir örnek (Irak-Arabistan
çölü, 1554, 6 nokta / ~400 km boşluk) — aynı köke bağlı, tek tek nokta
eklemek yerine sistemik çareyi bekliyor.

### H-0052 → ARAYÜZ

Görsel "II. Kosova Savaşı" (1448) maddesine tıklanmış ama haritanın gösterdiği
kutu Kosova Ovası'nın (42.6K/21.2D) yüzlerce km doğusunda, Bulgaristan/Dobruca
sınırında (42.4-44.7K/23.3-28.0D). Bir kronoloji maddesine tıklayınca harita
o konuma kaymıyor — veri/emilme sorunu değil, `js/app.js`'in kalemi.

---

## 4. 🔴 ÖLÇÜLEMEDİ — 1 madde

### H-0021 — Nahçıvan çevresi (Mâku/Şerur/Kotur/Hoy/Culfa)

Görsel (1725-01-01) Nahçıvan'ı gerçek bir **kıymık/enklav** şeklinde
gösteriyor: iki loblu, komşuları Mâku/Şerur/Culfa/Hoy'un hepsi hâlâ
`safevi` — bu emilme (sahipsizlik) değil, **kasıtlı bir hüküm** (bu dört
nokta boş değil, açıkça Safevi olarak işaretli). Soru: bu hüküm doğru mu?

TDV `nahcivan` denendi: 1724 İstanbul Antlaşması'nın *"Tiflis, Revan,
Gence-Karabağ, Tebriz, Erdebil eyaletleri"*ni Osmanlı'ya verdiğini yazıyor,
ama Mâku/Şerur/Hoy/Culfa'nın hangi eyalete bağlı sayıldığını **açıkça
belirtmiyor.**

**Sebep: KAYNAK YOK** (aranan yerde bulunamadı, TDV bu dört küçük yerin
1724-1730 statüsünü tartışmıyor). **Öneri:** bir sonraki oturum TDV `revan`
veya `tebriz` maddelerinin 1724-1730 idari taksimat bölümlerini densin; ya
da mevcut safevi hükmü (emilme değil, düşünülmüş bir karar olduğu için)
korunup madde kapatılmadan bırakılsın.

---

## 5. Ölçmediklerim / sınırlarım — açıkça

- **9 zaten-doğru maddenin hiçbirinde** derinlemesine TDV taraması
  yapılmadı (H-0029 hariç) — ölçüt `py arac/_yer_ara.py` çıktısının kendi
  içindeki tutarlılığıydı (gerçek dönemler var mı, boş mu). Bu, "veri var"
  sorusuna cevap verir, "veri en doğru tarihi mi taşıyor" sorusuna vermez.
- **H-0073/H-0075'in listelediği şehirlerin TAM `d:` tarihleri** tek tek
  TDV'yle çapraz kontrol edilmedi — yalnız "nokta var mı, boş mu" ölçüldü.
- **H-0052'nin arayüz kusuru** yalnız BU görselle doğrulandı; kaç kronoloji
  maddesinin aynı "harita kaymıyor" sorununu taşıdığı sayılmadı.
- **Görseller:** 25 görselin **9'u açıldı** (H-0019, H-0021, H-0022, H-0029,
  H-0031, H-0049, H-0050/H-0061 aynı görsel, H-0052, H-0073). Kalan 16'sı
  (çoğu H-0047'nin 8 örneği ve H-0102'nin 2'si) metin + genel bulgu yeterli
  görüldüğü için açılmadı.

---

## 6. Teslim

```
data/yer_yama_emilme2.js          window.YER_YAMA_EMILME2 — DİZİ, 3 kayıt (ad:/d:/s:/kaynak:/neden:)
denetim/HUKUM-VERI-EMILME.json    16/16 madde hükümlü
denetim/HUKUM-VERI-EMILME2.json   aynı içerik (ORHANGAZİ'nin istediği ikinci ad)
denetim/BULGU-VERI-EMILME.md      bu dosya — ölçüm/gerekçe burada, KAYIT dosyasında değil
```

🔴 **DÜZELTME (28 Ağustos, ikinci tur):** `yer_yama_emilme2.js`'in ilk sürümü
NESNE'ydi (`olcum`/`zaten_dogru`/`baska_ise_bagli`/`olculemedi` anahtarlarıyla)
— motor bunu okuyamıyordu. ORHANGAZİ'nin uyarısıyla düzeltildi: artık **DİZİ**,
yalnız 3 gerçek kayıt taşıyor (`ad:` alanı `py arac/_yer_ara.py` ile doğrulandı).
Ölçüm/gerekçe içeriği bu dosyaya (yukarıdaki §1-5) taşındı, kayıp olmadı.

🟢 **BAĞIMSIZ DOĞRULAMA:** aynı üç nokta (Ahtapolu/Rezve/İğneada) ve aynı fix,
başka bir oturum tarafından `data/yer_yama_veri31.js`de de tespit edilmiş
("GERÇEK VERİ EKSİĞİ, 3 nokta ile SINIRLI ve KESİN"). İki bağımsız ölçüm aynı
sonuca vardı; kaynak dosya (`data/yerlesimler_ek24.js`) bugün itibarıyla HÂLÂ
düzeltilmemiş — ikisi de henüz uygulanmamış açık bir yama.

**48 → 16 → 2 gerçek düzeltme (3 nokta, tek desen), 9 zaten-doğru, 4 başka işe
bağlı, 1 kaynaksız.** Rapor değil iş: 16 maddenin 16'sı ölçüldü, kalan tek açık
madde (H-0021) için sebep ve öneri yazılı.

— VERİ SAHİPLİK-2
