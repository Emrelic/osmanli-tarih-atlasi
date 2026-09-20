# EKO-YENICERI-0073 — BULGU (20 Eylül 2026)

Oturum: EKO-YENICERI-0073 (Opus 5) · koordinatör 1.MURAT
Şartname: `oturumlar/DALGA-0073.md` · maddeler **H-0012 · H-0013 · H-0014**
Parti metni: `ClaudEmre/kutu/giden/parti-emrelic-0073/PARTI.md` · görsel YOK
Öngörü (ölçümden önce yazıldı): `denetim/EKO-YENICERI-ONGORU-0920.md`

---

## 1. Ne yazıldı

`data/ekokuma_yeniceri.js` — yeni dosya, ad alanı `window.EKOKUMA_YENICERI`,
**4 kart**:

| id | tür | madde | konu |
|---|---|---|---|
| `yeniceri-vakai-hayriyye-gun-gun` | `sebep-sonuc` | H-0014 | olayın gün gün anlatısı: 26 Mayıs hüccet/fetva → 12 Haziran tâlim → 13 Haziran kazan → çatışma → 17 Haziran ilga fermanı; ölü sayısı tartışması |
| `yeniceri-mahmud-stratejisi` | `sebep-sonuc` | H-0014 | II. Mahmud'un on sekiz yıllık stratejisi: orta rütbe tasfiyesi · ulemâyı ayırma · esâme vaadiyle tabanı koparma · Rum isyanıyla ânı seçme · eşkinci tuzağı |
| `yeniceri-yozlasma-esame` | `sebep-sonuc` | H-0013 | esâme ticareti, sayılar, ıslah denemelerinin hepsinin başarısızlığı, esnaflaşma, isyan sicili + \"bozulma tek okuma değil\" paragrafı |
| `yeniceri-ilga-cozulme-tartismasi` | `tartisma` | H-0012 | üç bölüm: takvim ölçümü · \"ordu boşluğu\" tezi · \"zaten savaşamıyordu\" tezi · siyasî kayıp ekseni · karşı-olgusal soruya kaynak yok |

🔴 **BAĞLANMAYI BEKLİYOR.** `js/app.js` bu oturumun dosyası değil. Gereken tek satır
`_EKOKUMA_DOSYA_ADLARI` dizisine:

```
"ekokuma_yeniceri",   // window.EKOKUMA_YENICERI — EKO-YENICERI-0073
```

Satır eklenmeden kartlar HİÇ görünmez (D045 ailesi). `index.html`e de `data/`
satırı gerekiyorsa o da koordinatördedir.

---

## 2. Ne ölçüldü

### 2.1 Bağ doğrulaması — **36/36 tuttu, 0 kayıp**
Alet: `denetim/ARAC-EKO-YENICERI-BAG-0920.py` (bu oturumun yazdığı).
`js/app.js`in `_ekNorm` ve `_ekBagEslesir` fonksiyonlarını birebir taklit eder;
evren `data/olaylar*.js` + `data/kronoloji*.js` (126 dosya, **6654** madde).

```
kart: 4 · bağ: 36 · BULUNAMAYAN BAĞ: 0 · TANIMSIZ TÜR: 0
```

Alet **iki yönde sınandı** (`--sina`): gerçek bağı tutuyor, bilerek bozulmuş iki
bağı (yanlış gün, gövdede olmayan ayırt edici) yakalıyor, Türkçe büyük `İ`
normalleştirmesi doğru. SINAV: GEÇTİ.

### 2.2 🔴 EN ÖNEMLİ ÖLÇÜM — Vak'a-i Hayriyye maddesi GÜN HASSASİYETİNDE DEĞİL
`data/olaylar.js:135` → `t:"1826-06"` (AY), `gun:"15 Haziran 1826"` (metin).
`_ekBagEslesir` gün kısmında **tam eşitlik** arar; dolayısıyla `"1826-06-15|…"`
yazan bir bağ **sessizce tutmaz**. Ölçüldü (`--sina`): `1826-06|Hayriyye` → tutar,
`1826-06-15|Hayriyye` → tutmaz. Bütün bağlar `1826-06|…` yazıldı.
⚠️ Bu, `CLAUDE.md §8`in "kronoloji maddelerinde **gün yaz**" kuralının ihlal
edildiği bir maddedir ve ay hassasiyeti ayın 1'ine genişleyip gün hassasiyetli
yerleşim değişimlerinden önce sıralanır. **Kalem `olaylar.js` sahibinindir**, bu
oturum dokunmadı — öneri teslim mesajında.

### 2.3 Mükerrer taraması (`data/ekokuma*.js` + `data/merak*.js`, 542 kart)
`1826-06` gününe **bugün 5 kart** bağlı:

| kart | dosya | konusu |
|---|---|---|
| `yeniceri-ocagi-kurulusu` | `ekokuma.js` | ocağın KURULUŞU (olayın kendisi değil) |
| `camitarz-nusretiye-camii` | `ekokuma_camitarz.js` | Nusretiye Camii |
| `teknik-osmanli-spor-gelenekleri` | `ekokuma_tamamla.js` | güreş tekkeleri (tür `teknik-bilimsel`) |
| `mehter-yeniceriyle-birlikte-lagvi` | `ekokuma_toplum.js` | mehter |
| `feshane-osmanli-sanayilesme-girisimi` | `ekokuma_toplum.js` | Feshâne |

⇒ **Emre'nin H-0016/H-0017 şikâyeti ölçümle doğrulandı**: olayın kendisini anlatan
tek kart yoktu. Son dört kartın ilgisi/kategorisi **EKO-ILGI-0073'ün kalemidir**;
bu oturum onlara DOKUNMADI. `1807-05-25` ve `1808-07-28` günlerindeki Kabakçı/
Alemdar kartları (`ekokuma_1806.js`, `ekokuma_alemdar.js`) tekrar edilmedi, atıf
verildi. `statu-garp-ocaklari-cezayir` kartı da tekrar edilmedi.

### 2.4 TDV slug ölçümü (§4 tuzağı ①)
| slug | sonuç |
|---|---|
| `yeniceri` | 🟢 93.098 kar. (Kemal Beydilli) |
| `vaka-i-hayriyye` | 🟢 29.637 kar. (Kemal Beydilli, 2012) |
| `esame` | 🟢 11.579 kar. (Abdülkadir Özcan, 1995) |
| `asakir-i-mansure-i-muhammediyye` | 🟢 14.112 kar. (Abdülkadir Özcan, 1991) |
| `mahmud-ii--osmanli` | 🟢 47.690 kar. |
| `sekban-i-cedid` | 🟢 13.385 kar. |
| `aga-huseyin-pasa` | 🟢 2.614 kar. |
| `tunus` | 🟢 120.994 kar. |
| `vakai-hayriyye` · `vakayi-hayriyye` · `mahmud-ii` · `sekbanicedid` · `bektasiyye` | 🔴 ARAMA SAYFASI (ölü) |

"TDV'de yok" DENMEDİ: madde başlığı arama sayfasında göründü (`arama/?q=hayriyye`
→ "VAK'A-i HAYRİYYE"), yalnız adresi farklıydı (D217). Doğru slug'lar aramadan
alındı.

### 2.5 🔴 KAYNAK ÇELİŞKİSİ — ilga günü için ÜÇ değer (§4 tuzağı ⑥)
| kaynak | gün |
|---|---|
| TDV `vaka-i-hayriyye` açılış cümlesi (Beydilli, 2012) | **17 Haziran 1826** |
| TDV `yeniceri` kapanış cümlesi (**aynı müellif**) | **14 Haziran 1826** |
| Atlas `data/olaylar.js` | **15 Haziran 1826** |

TDV `vaka-i-hayriyye`nin kendi anlatısı: kazan **13 Haziran akşamı** kaldırıldı,
ricâl **ertesi sabah** saraya ulaştı, çatışma o gün oldu, idamlar **"cuma ve
cumartesi günü (17 Haziran)"** öğleye kadar sürdü, ilga fermanı **17 Haziran**
sabahı Sultanahmet'te okundu. Yani ilga fermanının günü iki TDV maddesinde de
17 Haziran'a çıkıyor; ayrışan şey ÇATIŞMA günüdür.
Kartlar hiçbirini "doğru" ilan etmedi, üçünü de adıyla verdi, **yeni gün iddia
etmedi** (D210).

### 2.6 Ölü sayısı — tek rakam YAZILMADI
TDV'nin kendisi aralık verir ve rakamların propaganda amaçlı şişirildiğini söyler:
Esad Efendi ~6000 · Canning 22 Haziran 6000, 25 Haziran 8000 · Hâfız İlyas
"30.000'den ziyade" · halk arasında yayılması SAĞLANAN şâyia 33.000 · TDV'nin
"en gerçekçi varsayım"ı 2-3000 · olaydan yıllar sonraki bir değerlendirme
İstanbul 1800 + taşra 1200 · devlet güçlerinden ilk gün 87 ölü.
Kart hüküm vermedi, aralığı ve kaynağını verdi.

### 2.7 H-0012'nin çekirdek ölçümü — çözülme belirtilerinin takvimi
| olay | tarih | 1826'ya göre |
|---|---|---|
| Birinci Sırp İsyanı | 1804 | **ÖNCE** |
| Mısır'ın Avrupa usulü ordusu | 1805 sonrası | **ÖNCE** |
| İkinci Sırp İsyanı / Miloš'un başknezliği | 1815 | **ÖNCE** |
| Dir'iye'nin düşüşü — İlk Suûdî Devleti'nin sonu | 1818 | **ÖNCE** (üstelik çözen Kavalalı'nın ordusuydu) |
| Yunan (Mora) İsyanı | 25 Mart 1821 | **ÖNCE — beş yıl** |
| Missolonghi'nin düşüşü | Nisan 1826 | **ÖNCE (ocak ayaktayken, Mısır kuvvetlerince)** |
| Navarin | 20 Ekim 1827 | sonra |
| Edirne Antlaşması | 1829 | sonra |
| Fransa'nın Cezayir'i işgali | 1830 | sonra |
| İbrâhim Paşa Suriye'ye girdi | 31 Ekim 1831 | sonra |
| Konya Meydan Muharebesi (sadrazam esir) | 21 Aralık 1832 | sonra |
| Nizip | 24 Haziran 1839 | sonra |
| Tunus — Bardo / Mersâ | 12 Mayıs 1881 / 8 Haziran 1883 | **55-57 yıl sonra** |

⇒ Emre'nin saydığı belirtilerin **üçü** (Yunan isyanı, Vehhâbîler, Kavalalı'nın
yükselişi) 1826'dan ÖNCE başlamıştır; Tunus ise ocakla aynı kuşakta bile değildir.

---

## 3. Ne bulunamadı
- **Karşı-olgusal soruya kaynak cevap YOK.** "Yeniçeriler kaldırılmasaydı bu
  dağılma böyle olur muydu" sorusuna okunan hiçbir kaynak (TDV, Kafadar 2007,
  Masson 2019) cevap vermiyor. Kart bunu **açıkça yazdı** ve kendi hükmünü
  koymadı — şartnamenin 🔴 şartı.
- **1826 sonrası ordu performansı için hakemli açık erişim makale BULUNAMADI.**
  Arama yalnız Vikipedi ve ders sitesi döndürdü; §4 gereği kullanılmadı. Tezin
  dayanağı TDV `asakir-i-mansure-i-muhammediyye` maddesinin kendi hükmü yapıldı
  ("yeni ve biraz aceleye getirilmiş bir kuruluş olduğundan … kendisinden umulanı
  tam olarak verememiştir") — bu, tezin en güçlü ve en tarafsız dayanağıdır,
  çünkü yeni ordunun KENDİ ansiklopedi maddesinden gelir.
- Namık Kemal'in yeniçerilere dair metni doğrudan okunmadı (Kafadar'dan
  aktarıldı); kasaplar loncasının 1826 sonrası dağılması için Philliou doğrudan
  okunmadı (Masson'dan aktarıldı). İkisi de `ic_not` alanında beyanlı (D073).

---

## 4. Ne öneriyorum (karar 1.MURAT / Emre'de)
1. **`js/app.js` bağlama satırı** — `"ekokuma_yeniceri",` eklenmezse dört kart da
   görünmez.
2. **`data/olaylar.js:135` gün hassasiyeti** — Vak'a-i Hayriyye maddesinin `t`
   değeri `"1826-06"`; `CLAUDE.md §8` gün ister. Gün seçimi bir KAYNAK KARARIDIR
   (TDV kendi içinde 14 ile 17 arasında çelişiyor, atlas 15 diyor) ve
   `olaylar.js` bu oturumun dosyası değil. Öneri: gün `"1826-06-15"`e çekilirse
   **mevcut 5 kartın bağı da kırılır** (hepsi `1826-06` yazıyor) — yani bu
   değişiklik tek başına yapılamaz, bağ güncellemesiyle BİRLİKTE yapılmalıdır.
   Bu bir maliyet uyarısıdır, düzeltme değil.
3. **EKO-ILGI-0073'e devir** — `1826-06`ya bağlı dört alâkasız kart (Nusretiye,
   güreş tekkeleri, mehter, Feshâne) ve `teknik-osmanli-spor-gelenekleri`nin
   yanlış kategorisi ölçüldü ve dosyaya yazıldı; kalem onundur.
4. Bağ doğrulayıcı (`ARAC-EKO-YENICERI-BAG-0920.py`) **genel bir alettir** — her
   `data/ekokuma*.js` dosyası için koşar. Yeni ek okuma yazan her oturuma
   verilmesi önerilir; sessiz kaybolan kart sınıfını (D045) yakalayan tek ölçüm
   budur.

---

## 5. Değişen dosyalar
| dosya | sahip | commit |
|---|---|---|
| `data/ekokuma_yeniceri.js` | **paylaşılan** — yazıldı, commitlenmedi | 1.MURAT |
| `denetim/ARAC-EKO-YENICERI-BAG-0920.py` | EKO-YENICERI-0073 | bu oturum |
| `denetim/EKO-YENICERI-ONGORU-0920.md` | EKO-YENICERI-0073 | bu oturum |
| `denetim/EKO-YENICERI-0920.md` | EKO-YENICERI-0073 | bu oturum |

`js/app.js` ve `index.html`e **DOKUNULMADI**.
