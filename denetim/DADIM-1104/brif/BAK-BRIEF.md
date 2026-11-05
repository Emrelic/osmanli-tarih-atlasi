# BAKILMADI yeniden araştırma turu (UMIT, 4 Kasım 2026 gece)

Önceki partilerde bütçe, erişim ya da zaman yüzünden **hiç aranmamış** (BAKILMADI) 600-1923 dönemlerini şimdi ara.
Bütün atlas kuralları `DA-BRIEF.md`dedir; önce onu baştan sona oku, harfiyen uygula.

## Girdi
`db_b_NN.json` → `kayitlar[]`:
- `ad`, `lat`, `lon`.
- `baglam`: yerleşimin bütün dönemleri ve önceki hükümleri. Yalnız bağlam içindir, bunları yeniden yazma.
- `donemler`: bu turda araştırılacak BAKILMADI satırları (`dosya_satir`, `alan`, `d`, `f`, `t`, eski `not`).

## Çıktı
`db_rb_NN.json` = `{ "<ad>": [ satır, ... ] }`
- **Yalnız `donemler`deki satırlar** yazılır.
- Her satırda `dosya_satir`, `alan`, `d` ve `f` girdiden **aynen** kopyalanır; eşleşme bu dört alanla yapılır.
- Yeni alanlar:
  - `hukum`: KAYNAKLI, ONERI, BULUNAMADI ya da BAKILMADI.
  - `kaynak`.
  - `alinti`: en çok 2 cümle.
  - `oneri`: her zaman sözlük, boşsa `{}`.
  - `not`.
- Bu turda da aranamayan satır `BAKILMADI` kalır; `not` alanına nedenini yaz (örneğin "Iranica 404, Britannica 403").
- Arayıp bulamadığın satır `BULUNAMADI` olur; `not` alanına baktığın yerleri yaz.

## Yöntem
- Eski `not` neden bakılmadığını söyler (erişim hatası, bütçe). **Aynı kapıya tekrar çarpma**; başka basamağa geç:
  - TDV'nin abi merkez maddesi.
  - DergiPark / TR Dizin.
  - YÖK Tez.
  - archive.org'daki akademik kitaplar: Cambridge History of India / Iran / Islam, Hall *History of South-East Asia*, Coedès.
  - LoC Country Studies, Treccani, Hrvatska enciklopedija, Encyclopedia of Ukraine, Banglapedia.
- Bir yerleşime en çok 6 araç çağrısı harca. Her yerleşimden sonra diske yaz.
- Sayfaları `C:/Users/user/AppData/Local/Temp/claude/C--Users-user--claude-spares-spare-8Zbs26/25fde957-3448-462a-8c9b-d06de99d88cf/scratchpad/arac/sayfa.py` ile çek (`oku <url> <anahtarlar> 400` · `tdv-ara <kelime>`).
- Depo salt okunur. Arama özeti teyit değildir. Vikipedi tek dayanak olamaz. Tarih uydurma.
