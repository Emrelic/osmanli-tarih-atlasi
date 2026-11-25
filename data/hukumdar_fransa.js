// ============================================================================
// HÜKÜMDAR KAYITLARI — FRANSA (PADISAHLAR şeması) · AŞAMA 2 örnek: 1 kayıt
// ============================================================================
// 25 Kasım 2026 · HAVVA, salt-okur. window.HUKUMDAR_FRANSA (şartname).
// `devlet` = devletler.js künye id'si (`fransa`). HUKUMDAR_* arayüzde okunmuyor.
// Kaynak: TDV «Fransa» maddesi (Azmi Özcan'ın Tarih bölümü + İsmail Soysal'ın Türk-Fransız
//   İlişkileri bölümü) ve TDV «İmtiyâzât» TAM METİN okundu. TDV'de «I. François» başlıklı
//   ayrı bir madde YOK (arama: sonuç yok); bu yüzden doğum, ölüm, eşler, çocuklar gibi alanlar
//   BOŞ bırakıldı ve ic_not_* ile beyan edildi. Atlasın KISILER'indeki `francois1` kaydı
//   (1494-1547) kaynak SAYILMADI (atlas referans değildir).
// ============================================================================
// 26 Kasım 2026 · TEYİT YÜKSELTME 2. TUR (HAVVA, salt-okur): ic_not_teyit etiketleri standartlaştırıldı
//   (TEYİTLİ (çift teyit) / TEYİTLİ (tek kaynak, tam metin) / TEYİTSİZ (...)); dayanılan kaynaklar baştan sona okunarak
//   metinler düzeltildi. Ayrıntı: denetim/BORC-FRANSA-EKOKUMA-YUKSELT2.md.
window.HUKUMDAR_FRANSA = [
 {
  "id": "fransa-francois1",
  "devlet": "fransa",
  "ad": "I. François",
  "from": "1515-01-01",
  "ic_not_from": "TDV Fransa (Özcan, Tarih bölümü): «I. François (1515-1547)» — yalnız yıl; gün/ay kaynakta yok → YYYY-01-01. UYARI: TDV Fransa (Soysal, Türk-Fransız İlişkileri bölümü) cümlesi «1519'da… I. François başa geçer geçmez üç yıl içinde Türkler'i… kovacağını ilân etmesine rağmen» der; 1519 burada başa geçişle değil imparatorluk adaylığıyla ilişkili okunuyor olabilir, ama bu bir yorumdur — iki bölüm arasındaki fark ÇÖZÜLMEDİ, beyan edildi. Atlas: kronoloji_fransa 1515-01-01 (uyumlu, onun kaynağı Larousse; okunmadı).",
  "to": "1547-01-01",
  "ic_not_to": "TDV Fransa (Özcan): «I. François (1515-1547)» — yalnız yıl; ölüm günü/ayı okunan TDV metinlerinde yok → YYYY-01-01. Atlasta 1547-03-31 «II. Henri'nin tahta çıkışı» maddesi var (kaynağı Persée, okunmadı); bu gün karta alınmadı.",
  "dogum": "",
  "ic_not_dogum": "bulunamadı — okunan TDV metinlerinde doğum yılı/yeri yok. Başka akademik kaynak (Robert J. Knecht, Renaissance Warrior and Patron, 1994) OKUNMADI (denenmedi).",
  "dogum_yer": "",
  "olum": "",
  "ic_not_olum": "bulunamadı — TDV metinlerinde ölüm tarihi/yeri/sebebi yok (yalnız saltanatın 1547'de bittiği). Knecht OKUNMADI.",
  "olum_yer": "",
  "olum_sebep": "",
  "baba": "",
  "anne": "",
  "ic_not_aile": "bulunamadı — okunan TDV metinlerinde baba, anne, eş, çocuk bilgisi yok. TDV Fransa (Soysal) Frangipani'yi «Fransa kralının elçisi» olarak anar; kralın annesinin adı (Louise de Savoie) TDV'de geçmediği için yazılmadı.",
  "tahta": "1515 (TDV: «I. François (1515-1547)»; tahta çıkış biçimi ve günü okunan TDV metinlerinde yok)",
  "saltanat_yil": 32,
  "lakap": [],
  "ic_not_lakap": "bulunamadı — okunan TDV metinlerinde lakap geçmiyor.",
  "esler": [],
  "cocuk": {
   "oglan": "",
   "kiz": ""
  },
  "ic_not_cocuk": "bulunamadı — TDV'de çocuk bilgisi yok.",
  "halef": "",
  "ic_not_halef": "bulunamadı — okunan TDV metinlerinde halef adı yok (yalnız saltanat bitişi 1547).",
  "skandal": "",
  "ic_not_skandal": "okunan kaynaklarda skandal olarak nitelenebilecek bir olay yok. Yenilgi ve esaret TDV Fransa'da (Soysal) «V. Karl ile (Charles Quint) giriştiği mücadelede yenilip esir düşünce» diye geçer; Pavia adı ve yılı metinde yoktur; bu `yergi`ye alındı.",
  "ovgu": "Habsburg baskısı altında kalan Fransa'yı Osmanlı Devleti'yle resmî bir siyasî ve ticarî iş birliğine soktu: zor durumda kalınca Osmanlı Devleti'nden yardım istedi, Kanunî Süleyman da Fransa'yı Almanya ve İspanya'ya karşı himaye etti (Özcan); 1535'te Fransa Osmanlı Devleti'ne ilk dâimî elçisini gönderdi; 1536'da elçi Jean de la Forest aracılığıyla Fransa'ya ticarî imtiyaz tanıyan bir anlaşmanın yapıldığı (Soysal) ya da bir kapitülasyon taslağının kaleme alındığı (İnalcık) yazılır, İnalcık ayrıca 1536'da Fransa kralının Osmanlı padişahlarından yararlanma yoluna baktığını belirtir; 1543'te Nice'ye karşı ortak bir deniz harekâtı yapıldı (Soysal). Özcan'a göre bu himaye gelişmesi Fransız-Osmanlı münasebetlerinin başlangıcını oluşturur; Soysal ise ilk siyasî ilişkiyi 1396 Niğbolu esirlerinin fidyesine bağlar ve 1536'yı siyasî ilişkilerin «resmen kurulması» olarak anar.",
  "yergi": "Önce Türkler'i İstanbul'dan ve Avrupa'dan kovacağını ilân edip (TDV Soysal: 1519) sonra yenilip esir düşünce aynı Türklerden yardım isteyen bir kral olarak anılır. TDV, bu ittifakın Türkler'e Avrupa siyasetine müdahale kapısı açtığını ve bu yolla verilen imtiyazların sonradan Osmanlı aleyhine işlediğini vurgular.",
  "ic_not_yergi": "«Yenilip esir düşünce yardım istedi» TDV Fransa (Soysal) cümlesinin içeriği; «Haçlı kral–Müslüman sultan» çerçevesi ve Hıristiyan dünyasının tepkisi okunan metinde YOK → yazılmadı. İtalyan Savaşları, Marignano ve Pavia ayrıntıları TDV'de yok → yazılmadı. Yergi sınıflaması bizim çerçevemizdir.",
  "tartisma": "Okunan TDV bölümleri I. François–Süleyman yakınlaşmasını ahlâkî değil siyasî-ticarî bir ilişki olarak anlatır; «ahlaksız ittifak» yorumu bu kaynaklarda yer almaz. 1536 anlaşmasının imzalı bir antlaşma mı yoksa onaylanmamış bir taslak mı olduğu ise TDV'nin iki maddesinde farklı anlatılır (bkz. kart «1536 kapitülasyonları»).",
  "tarihciler": "Azmi Özcan Fransa'nın tarihinde I. François'yı Habsburglar'la imparatorluk mücadelesi içinde zor duruma düşüp Osmanlı'dan yardım isteyen kral olarak gösterir. İsmail Soysal yardım isteğini Frangipani elçiliği (6 Aralık 1525) ve sonrasındaki diplomasi zinciri içinde anlatır. Halil İnalcık ise 1536'daki metni imzalanmamış bir taslak sayar.",
  "kaynak": "Azmi Özcan, «Fransa» (Tarih bölümü), TDV İslâm Ansiklopedisi, XIII (İstanbul 1996), s. 177-178, https://islamansiklopedisi.org.tr/fransa#2-tarih (erişim 25.11.2026); Ismail Soysal, «Fransa» (Türk-Fransız İlişkileri bölümü), TDV İslâm Ansiklopedisi, XIII (İstanbul 1996), s. 178-181, https://islamansiklopedisi.org.tr/fransa#3-turk-fransiz-iliskileri (erişim 25.11.2026); Halil İnalcık, «İmtiyâzât» (Osmanlı Dönemi bölümü), TDV İslâm Ansiklopedisi, XXII (İstanbul 2000), s. 245-252, https://islamansiklopedisi.org.tr/imtiyazat (erişim 25.11.2026)",
  "olay": [
   "1515-01-01|I. François'nın tahta çıkışı",
   "1525-12-06|Frangipani"
  ],
  "ic_not_teyit": "TEYİTLİ (tek kaynak, tam metin) — YALNIZ kartta DOLU olan alanlar (ad, from/to yıl hassasiyeti, tahta, saltanat_yil [türetilmiş], ovgu, yergi, tartisma, tarihciler, olay, ic_not alanları) için; kapsam: Azmi Özcan, «Fransa» Tarih bölümü, TDV İslâm Ansiklopedisi XIII (İstanbul 1996), s. 177-178 (satır 136-148) + İsmail Soysal, III. Türk-Fransız İlişkileri bölümü, s. 178-181 (satır 176-193) + Halil İnalcık, «İmtiyâzât» Osmanlı Dönemi bölümü, XXII (İstanbul 2000), s. 245-252 baştan sona sırayla okundu (26 Kasım 2026, HAVVA). Aynı yayının üç bölümü; bağımsız ikinci akademik kaynak okunmadı (aday: Knecht, Renaissance Warrior and Patron, 1994). Doğum, ölüm, yer, sebep, baba/anne/eş/çocuk, lakap, halef alanları BOŞ ve TDV'de karşılığı yok; bu alanlar için teyit iddia edilmez → kayıt hâlâ YARIM KAYIT: biyografik alanlar ikinci kaynakla doldurulmadan yayına aday değildir. Düzeltmeler: 'ilk siyasî ve ticarî bağ' (Soysal ilk siyasî ilişkiyi 1396 Niğbolu fidyelerine bağlar) ve 'bu ittifak başlangıçtır' (Özcan: himaye gelişmesi) düzeltildi; «Türk'ü Avrupa'dan kovacağız» alıntı biçimi kaynak cümlesine uyduruldu (Soysal: 1519); 'Pavia' ibaresi TDV'de olmadığı için beyan edildi; 'yaygın tartışma' kaynaksız cümlesi çıkarıldı; 'esaretteki kralın elçisi' alıntısı düzeltildi; cilt/sayfa künyesi eklendi.",
  "ic_not": "PADISAHLAR şemasına ek alanlar: devlet, halef, olay (bağ önerisi), ic_not_aile. `saltanat_yil` türetilmiş alan: 1547-1515 = 32 (kaynakta yıl sayısı verilmiyor; yalnız yıl hassasiyetli). BAĞ SINAMASI (origin/main): 1515-01-01 → kronoloji_fransa «I. François'nın tahta çıkışı» (bu parça tutar; aynı günde başka madde Grep'te çıkmadı ama gün çok kalabalık: Tersâne-i Âmire, Agadez vb. — parça yalnız Fransa maddesine uyar); 1525-12-06 → kronoloji_fransa «Kanûnî Sultan Süleyman'ın Fransız elçisi Frangipani'yi kabulü» (bu parça tutar). Kayıt kendisi bir kronoloji maddesi değil; atlas KISILER'inde `francois1` mükerrer kayıt olarak durur → birleştirme/ayrım kararı altyapı işine BORÇ. SIRALI OKUMA (26 Kasım 2026, HAVVA): fransa.txt satır 136-148 (Özcan) ve 176-193 (Soysal), imtiyazat.txt satır 156-207 (İnalcık) baştan sona okundu; I. François'nın doğum/ölüm/aile/lakap/halef bilgisi bu bölümlerin hiçbirinde YOK (Özcan: 'I. François (1515-1547)' ve Habsburg mücadelesi; Soysal: 1519 ilânı, esaret, Frangipani 6 Aralık 1525, 1535 daimî elçi, 1536, 1543 Nice; İnalcık: 1536'da Fransa kralı 'yakın ilişki kurduğu Osmanlı padişahlarından yararlanma yoluna baktı'). Çelişki (beyan): Özcan 1515 tahta geçişi, Soysal 'başa geçer geçmez' cümlesini 1519'a bağlar; aralarındaki fark çözülmedi. Soysal, Kanûnî'nin himayesi kararının Frangipani kabulünden (6 Aralık 1525) SONRA geldiğini yazar. Atlas kronolojisiyle çelişki bulunmadı. 1547 ölüm yılı/günü ve 1515 gün/ay TDV'de yok; atlasın 1547-03-31 maddesi bu karttan alınmadı."
 }
];
