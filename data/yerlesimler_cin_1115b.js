// data/yerlesimler_cin_1115b.js — BÖLGE ÇİN, İKİNCİ DALGA (UMIT, 15 Kasım 2026): yeni yerleşim dosyası.
// İçerik: Weihaiwei (İngiliz kira bölgesi 1898-07-01 → 1930-10-01). Mükerrer taraması: ad + 3 km temiz (yerlesimler*.js; en yakın
// kayıt Yantai/Penglai tarafında 50 km'den uzak). Künye: devletler.js `weihaiwei-ingiliz` (harita: ingiltere).
// Bu dosya GIRDI_DOSYALARI'na arac/girdi_listesi.py üzerinden bağlanır (liste VERİDİR; girdi.py/uret_petek.py tuz dosyalarına dokunulmadı).
window.YERLESIMLER_CIN_1115B = [
{ ad:"Weihaiwei", tur:"liman", lat:37.5130, lon:122.1204, g:0, k:3, kur:"1898-07-01",
 s:[{f:"1898-07-01", t:"1930-10-01", d:"weihaiwei-ingiliz", enklav:true, kesinlik:{f:"gun",t:"gun"},
     kaynak:"Başlangıç: Weihaiwei Kira Sözleşmesi (訂租威海衛專條), imza Pekin 1 Temmuz 1898 (光緒二十四年五月十三日) — zh.wikisource.org/wiki/訂租威海衛專條, açıldı ve okundu: «租期應按照俄國駐守旅順之期相同»; kapsam: «所租之地系劉公島並在威海灣之群島及威海全灣沿岸以內之十英里地方». Bitiş: İngiliz Avam Kamarası Hansard 5 Mayıs 1930 (api.parliament.uk/historic-hansard/commons/1930/may/05/wei-hai-wei-rendition, açıldı ve okundu): iki belge «signed at Nanking on 18th April last»; «the territory shall be restored in full sovereignty to China on the 1st October next» → 1930-10-01. | BEYANLI: başlangıç olarak sözleşmenin İMZA günü alındı; İngiliz fiilî devralma günü (1898 Mayıs sonu) bu turda okunmadı. Kira alanı (≈ 10 mil kıyı şeridi) Çin karasının içinde olduğu için enklav:true yazıldı (kara tarafı Çin'dedir). İkinci akademik kaynak (Atwell, Johnston) OKUNMADI."},
    {f:"1930-10-01", t:"1949-10-01", d:"cin-cumhuriyeti", kesinlik:{f:"gun",t:"yil"},
     kaynak:"Başlangıç: Hansard 5 Mayıs 1930 (okundu): «restored in full sovereignty to China» (1 Ekim 1930). | BEYANLI YAKLAŞIKLIK: bitiş 1949-10-01 atlastaki cin-cumhuriyeti künye ucudur (Lüşun ve Hong Kong kayıtlarındaki zincirle aynı basitleştirme); 1938-45 Japon işgali ve 1948 sonu Kızıl Ordu'nun Weihai'yi alışı bu zincirde izlenmedi; bu iki olayın günü OKUNMADI."},
    {f:"1949-10-01", t:"2000-12-31", d:"cin-halk-cumhuriyeti", kesinlik:{f:"gun",t:"yil"},
     kaynak:"ÇHC ilanı 1949-10-01 (atlas künyesi cin-halk-cumhuriyeti f ucu; Lüşun/Hong Kong zinciriyle aynı); yerleşim tanıklığı değil, künye ucudur. BEYANLI: Weihai'nin ÇHC'ye fiilî geçiş günü okunmadı."}],
 kaynak:"Koordinat: Weihai şehri (37,513 K / 122,120 D, standart coğrafî değer; Liugong Adası ≈ 37,50 K / 122,20 D). Tek akademik/birincil katman: antlaşma metni + Hansard (yukarıda). Kuruluş değil kira başlangıcıdır: kur: = kira sözleşmesinin imza günü (ALT SINIR değil, bu noktanın 'İngiliz kira bölgesi' olarak var olduğu gündür); Weihai şehri/garnizonu daha eskidir (Ming dönemi) ve bu kaydın konusu değildir.",
 not:"UMIT bölge-Çin ikinci dalga (15 Kasım 2026). Yerleşim yalnız kira bölgesini temsil eder; 1898 öncesi Weihai çevresi komşu Yantai/Wendeng petekleri tarafından örtülür." },
];
