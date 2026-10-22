# -*- coding: utf-8 -*-
# bozkir2 üretici: TDV önbelleğinden (bu oturumda indirilen _ham/*.txt) birebir alıntı çeker, JS dosyalarını yazar.
import sys, os, re, io, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from _hicri import h2j

HAM = os.path.join(HERE, '_ham')
_cache = {}
def _txt(slug):
    if slug not in _cache:
        t = open(os.path.join(HAM, slug + '.txt'), encoding='utf-8').read()
        t = re.sub(r'\s+', ' ', t)
        b = t.find('BİBLİYOGRAFYA')
        if b > 0: t = t[:b]
        _cache[slug] = t
    return _cache[slug]

def Q(slug, a, b=None):
    """slug metninden a..b (dahil) aralığını birebir döndürür; bulunamazsa hata verir."""
    t = _txt(slug)
    i = t.find(a)
    if i < 0: raise SystemExit('ALINTI YOK: %s | %s' % (slug, a))
    if b is None:
        return t[i:i + len(a)]
    j = t.find(b, i + len(a) - 1)
    if j < 0: raise SystemExit('ALINTI SONU YOK: %s | %s' % (slug, b))
    return t[i:j + len(b)]

TDV = {
 'samaniler': ('Aydın Usta', 2009, 'Sâmânîler'),
 'karahanlilar': ('Abdülkerim Özaydın', 2001, 'Karahanlılar'),
 'gazneliler': ('Erdoğan Merçil', 1996, 'Gazneliler'),
 'gurlular': ('Iqtidar Husain Siddiqui', 1996, 'Gurlular'),
 'harizmsahlar': ('Aydın Taneri', 1997, 'Hârizmşahlar'),
 'karahitaylar': ('Ahmet Taşağıl', 2001, 'Karahıtaylar'),
 'selcuklular': ('Faruk Sümer', 2009, 'Selçuklular'),
 'dandanakan-savasi': ('Ali Sevim', 1993, 'Dandanakan Savaşı'),
 'tugrul-bey': ('Faruk Sümer', 2012, 'Tuğrul Bey'),
 'bulgar': ('Nuri Yüce', 1992, 'Bulgar'),
 'karluklar': ('Hüseyin Salman', 2001, 'Karluklar'),
 'pecenekler': ('Faruk Sümer', 2007, 'Peçenekler'),
 'kipcaklar': ('Muallâ Uydu Yücel', 2022, 'Kıpçaklar'),
 'cengiz-han': ('Mustafa Kafalı', 1993, 'Cengiz Han'),
 'kirgizlar': ('İsmail Türkoğlu', 2019, 'Kırgızlar'),
 'uygurlar': ('Gülçin Çandarlıoğlu', 2012, 'Uygurlar'),
 'balasagun': ('Enver Konukçu', 1992, 'Balasagun'),
}
def T(slug, a, b=None):
    au, yl, bas = TDV[slug]
    return 'TDV İslâm Ansiklopedisi, %s, "%s" md., %d, https://islamansiklopedisi.org.tr/%s («%s») (bu oturumda okundu)' % (au, bas, yl, slug, Q(slug, a, b))

def J(*parts):
    return ' | '.join(parts)

def hj(y, m=1, d=1):
    a, b, c = h2j(y, m, d)
    return '%04d-%02d-%02d' % (a, b, c)

TAKVIM_NOT = ('Hicrî tarih tabloyla (aritmetik hicrî takvim, Jülyen) çevrildi; ±1 gün belirsizdir. Kaynak yalnız hicrî yıl/ay ve milâdî yıl/ay verdiği için '
              'hicrî aralık ∩ kaynağın milâdî ayı kesişiminin ilk günü alındı.')

# ---------------------------------------------------------------- yerleşim adları (mevcut dizinden AYNEN)
def _norm(s):
    import unicodedata
    H = {'ı': 'i', 'İ': 'i', 'ş': 's', 'Ş': 's', 'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u', 'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c'}
    s = ''.join(H.get(c, c) for c in s)
    s = unicodedata.normalize('NFKD', s.lower())
    return ''.join(c for c in s if c.isalnum())
_Y = json.load(open(os.path.join(HERE, '..', 'yer_indeks.json'), encoding='utf-8'))
def AD(norm_ad):
    for y in _Y:
        if _norm(y['ad']) == norm_ad: return y['ad']
    raise SystemExit('yerleşim adı bulunamadı: ' + norm_ad)

A = {k: AD(k) for k in ['buhara', 'semerkant', 'kasgar', 'balasagunakbesim', 'tarazevliyaata', 'gazne', 'kabil', 'bamiyan', 'belh', 'herat',
                         'nisabur', 'mervmari', 'serahs', 'bulgarbolgar']}

# ---------------------------------------------------------------- yama dilimleri
def S(f, t, d, kes, kaynak, ic=None):
    x = {'f': f, 't': t, 'd': d, 'kesinlik': kes, 'kaynak': kaynak}
    if ic: x['ic_not'] = ic
    return x

YAMA = []
SINIR = []   # (t, devlet, taraflar, yer_id, tur, baslik, d, kaynak, kesinlik, ic_not)
def sinir(t, devlet, taraflar, yer, tur, b, d, kaynak, kes, ic=None, takvim=None):
    SINIR.append(dict(t=t, devlet=devlet, taraflar=taraflar, yer=yer, tur=tur, b=b, d=d, kaynak=kaynak, kes=kes, ic=ic, takvim=takvim))

UFUK = 'onceki_gerekli'

# ===== BUHARA ======================================================================================
f_nasr = hj(261, 1, 1)           # 874-10-16
t992a = hj(382, 3, 1)            # 992-05-07
t992b = hj(382, 6, 15)           # 992-08-18
t999 = hj(389, 11, 1)            # 999-10-14
assert (f_nasr, t992a, t992b, t999) == ('0874-10-16', '0992-05-07', '0992-08-18', '0999-10-14'), (f_nasr, t992a, t992b, t999)
YAMA.append(dict(ad=A['buhara'], mevcut_zincir_basi='karahanli 1000-01-01', onceki_gerekli='0500-01-01 → ' + f_nasr + ' (Tâhirîler/Abbâsîler dönemi; başka küme)',
  s_onek=[
   S(f_nasr, t992a, 'samani', 'yil',
     J(T('samaniler', '261 (874-75)', 'vali tayin etti.'), T('samaniler', 'Nasr’ın ölümüyle (279/892)', 'Buhara başşehir yapıldı.')),
     'f = hicrî 261 yılının ilk günü (Muharrem 261 ≈ ' + f_nasr + '); TDV «874-75» der, yıl hassasiyeti. Buhara 874-75\'te Nasr\'ın emriyle İsmâil b. Ahmed\'e verildi; 892\'den başşehir. Önceki sahip (Tâhirîler 819-873) başka kümenin işidir.'),
   S(t992a, t992b, 'karahanli', 'ay',
     J(T('samaniler', 'Hârun Buğra Han harekete geçip Buhara’yı ele geçirdi', 'Mayıs 992).'), T('karahanlilar', '992 başlarında Semerkant’ı aldıktan sonra', 'ele geçirdi.')),
     'Rebîülevvel 382 ∩ Mayıs 992 = ' + t992a + '. ' + TAKVIM_NOT),
   S(t992b, t999, 'samani', 'gun',
     J(T('samaniler', 'II. Nûh Selçuklu Türkmenleri’nin de yardımıyla tekrar Buhara’ya hâkim oldu', '18 Ağustos 992).')),
     'f gün: 15 Cemâziyelâhir 382 / 18 Ağustos 992 (TDV iki takvimi birlikte verir; tablo çevirisi de aynı günü verir). t = Zilkade 389 ∩ Ekim 999 (ay hassasiyeti).'),
   S(t999, '1000-01-01', 'karahanli', 'ay',
     J(T('samaniler', 'II. Abdülmelik’in Fâik el-Hâssa ve Begtüzün’ün denetimindeki kısa saltanatı Karahanlılar’ın Buhara’yı işgaliyle son buldu', 'Ekim 999).'),
       T('karahanlilar', 'iki yıl sonra hiçbir mukavemetle karşılaşmadan Sâmânî başşehri Buhara’yı zaptetti', '(389/999).')),
     'Zilkade 389 ∩ Ekim 999 = ' + t999 + '. ' + TAKVIM_NOT + ' t=1000-01-01 mevcut zincirin başıdır (karahanli). BEYAN: Sâmânîler md. İsmâil el-Müntasır\'ın «ertesi yıl» (1000) Buhara\'yı yeniden aldığını, Karahanlılar md. 1003\'te tahta çıktığını yazar (TDV içi çelişki); bu yamada Müntasır dönemi (≤1005) AYRI DİLİM YAZILMADI — mevcut zincir 1000-01-01\'den karahanli gösteriyor; düzeltme önerisi RAPOR.md\'de.'),
  ]))
sinir(t992a, 'karahanli', ['karahanli', 'samani'], A['buhara'], 'toprak-kazanc',
      'Hârun Buğra Han Sâmânî başşehri Buhara\'yı aldı; emîr şehri terk etti',
      'Karahanlı Hârun Buğra Han Mâverâünnehir\'e yürüyüp Buhara\'yı ele geçirdi (Rebîülevvel 382); Sâmânî emîri II. Nûh şehirden ayrıldı.',
      J(T('samaniler', 'Hârun Buğra Han harekete geçip Buhara’yı ele geçirdi', 'Mayıs 992).')), 'ay', None, takvim=TAKVIM_NOT)
sinir(t992b, 'samani', ['samani', 'karahanli'], A['buhara'], 'toprak-kazanc',
      'II. Nûh Selçuklu Türkmenlerinin yardımıyla Buhara\'ya yeniden hâkim oldu',
      'Hârun Buğra Han\'ın ölümünden sonra II. Nûh, Selçuklu Türkmenleri\'nin de yardımıyla Buhara\'yı geri aldı (15 Cemâziyelâhir 382 / 18 Ağustos 992).',
      J(T('samaniler', 'II. Nûh Selçuklu Türkmenleri’nin de yardımıyla tekrar Buhara’ya hâkim oldu', '18 Ağustos 992).')), 'gun', None)
sinir(t999, 'karahanli', ['karahanli', 'samani'], A['buhara'], 'toprak-kazanc',
      'İlig Han Nasr Buhara\'yı aldı; Sâmânî devleti fiilen sona erdi',
      'İlig Han Nasr hiçbir mukavemetle karşılaşmadan Sâmânî başşehri Buhara\'yı zaptetti (Zilkade 389 / Ekim 999); hânedan mensupları Özkent\'e sürüldü.',
      J(T('karahanlilar', 'iki yıl sonra hiçbir mukavemetle karşılaşmadan Sâmânî başşehri Buhara’yı zaptetti', '(389/999).'),
        T('samaniler', 'Karahanlılar’ın Buhara’yı işgaliyle son buldu', 'Ekim 999).')), 'ay', None, takvim=TAKVIM_NOT)

# ===== SEMERKANT ===================================================================================
YAMA.append(dict(ad=A['semerkant'], mevcut_zincir_basi='karahanli 1000-01-01', onceki_gerekli='0750-01-01 → ' + f_nasr + ' (bozkir1 yaması 0500-0750 yazdı ve 0750\'de bitiyor; 0750-0874 Abbâsî/Tâhirî dönemi başka küme)',
  s_onek=[
   S(f_nasr, t999, 'samani', 'yil',
     J(T('samaniler', 'Ailenin reisi durumundaki Semerkant valisi Nûh', 'Mâverâünnehir’deki hâkimiyetini sağlamlaştırdı.'),
       T('karahanlilar', 'Fâik de Semerkant valisi oldu (996).')),
     'f = hicrî 261 ilk günü (Nasr\'a Mâverâünnehir fermanı «874-75»; Semerkant 819\'dan Sâmânî valisi Nûh\'un merkezi — 819-874 arası vali sıfatlı Sâmânî idaresi, Tâhirîler/Abbâsîler altında; bu kayıtta egemenlik Nasr fermanından başlatıldı). BEYAN: TDV Karahanlılar md. Hârun Buğra Han\'ın «992 başlarında Semerkant\'ı aldığını» yazar; şehrin Sâmânîlere dönüş günü kaynakta yok → dilim BÖLÜNMEDİ (beyanlı yaklaşıklık: 992-başı..992-08 Karahanlı olabilir). t = Buhara ile aynı gün (ABİ MERKEZ aşağıda).'),
   S(t999, '1000-01-01', 'karahanli', 'ay',
     J('ABİ MERKEZ: Buhara — Sâmânî başşehri; bağı gösteren kaynak:', T('karahanlilar', 'Hânedan mensuplarını Özkent’e sürdü, bölgeye kendi valilerini tayin edip Özkent’e döndü.'),
       T('samaniler', 'Karahanlılar’ın Buhara’yı işgaliyle son buldu', 'Ekim 999).')),
     'BEYANLI YAKLAŞIKLIK: Semerkant\'ın 999\'da el değiştirdiğini doğrudan bildiren cümle yok; Sâmânî başşehri Buhara\'nın Ekim 999 düşüşü ve «bölgeye kendi valilerini tayin etti» ifadesinden zincir Buhara\'dan devralındı. ' + TAKVIM_NOT),
  ]))
sinir(t999, 'karahanli', ['karahanli', 'samani'], A['semerkant'], 'toprak-kazanc',
      'Buhara\'nın düşmesiyle Semerkant (Sâmânî egemenlik alanı) Karahanlı idaresine geçti',
      'İlig Han Nasr Buhara\'yı alıp bölgeye kendi valilerini tayin etti; Sâmânî devleti fiilen sona erdi. Semerkant\'ın devri Buhara\'dan devralınmış (ABİ MERKEZ) beyanlı yaklaşıklıktır.',
      J(T('karahanlilar', 'Hânedan mensuplarını Özkent’e sürdü, bölgeye kendi valilerini tayin edip Özkent’e döndü.')), 'ay',
      'BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Buhara).', takvim=TAKVIM_NOT)

# ===== KAŞGAR ======================================================================================
YAMA.append(dict(ad=A['kasgar'], mevcut_zincir_basi='karahanli 1000-01-01', onceki_gerekli='0500-01-01 → 0840-01-01 (başka küme)',
  s_onek=[
   S('0840-01-01', '1000-01-01', 'karahanli', 'yil',
     J(T('karahanlilar', '840’ta Ötüken’deki Uygur Devleti’nin yıkılmasının ardından', 'bölgeye hâkim olmuşlar'),
       T('karahanlilar', 'Kadır Han Oğulçak bu gelişmeler üzerine başşehri Kâşgar’a nakletti.')),
     'BEYANLI YAKLAŞIKLIK: Karahanlı menşei tartışmalıdır (Pritsak: Karluk yabgusu 840\'ta Kara Han unvanı; Genç: 840\'ta Kâşgar\'a gelen Yağmalar). İki görüş de Kâşgar bölgesini 840 sonrası Karahanlı hânedanına bağlar; şehrin kendisinin 840\'ta alındığını söyleyen cümle yok (840 = Karahanlı künye yılı). Karluk Devleti (766-840) Kâşgar\'ı IX. yüzyılda ilhak etmişti (Karluklar md.) ama yıl verilmediği için yazılmadı. 893 sonrası Kâşgar başşehir.'),
  ]))

# ===== BALASAGUN ===================================================================================
YAMA.append(dict(ad=A['balasagunakbesim'], mevcut_zincir_basi='karahanli 1000-01-01', onceki_gerekli='0500-01-01 → 0766-01-01 (başka küme)',
  s_onek=[
   S('0766-01-01', '0840-01-01', 'karluk', 'yil',
     J(T('karluklar', 'Daha sonra da yıkılma sürecine giren Kara Türgiş Kağanlığı’nın', 'Arslan İl Tirgüg’ün kurduğu bu devlet başlangıçta Isık Göl’den Tarâz’a kadar uzanan bir sahayı kapsıyordu;')),
     'BEYANLI YAKLAŞIKLIK: TDV başşehrin Balasagun YAKINLARINDAKİ Kara-ordu olduğunu söyler; Balasagun şehrinin kendisinin Karluk elinde olduğu doğrudan yazılı değil (devletin Isık Göl-Tarâz sahası içinde). ABİ MERKEZ: Kara-ordu (Balasagun yakını).'),
   S('0840-01-01', '1000-01-01', 'karahanli', 'yil',
     J(T('karahanlilar', 'Yeni kurulan Karahanlılar Devleti için Balasagun (Kuzordu) merkez olarak seçilmiş', 'ikiye ayrılmıştır.'),
       T('karahanlilar', 'Balasagun’un 942 yıllarına kadar', 'şüpheyle karşılanmıştır'),
       T('karahanlilar', 'gayri müslim Türkler 942’de Balasagun’u ele geçirmişler, ancak Satuk Buğra Han daha sonra burayı geri almayı başarmıştır.')),
     'BEYANLI YAKLAŞIKLIK: Pritsak\'a göre 840\'ta Balasagun Karahanlı merkezi; Genç\'e göre Yağmalar Balasagun\'u ilk fetihlerden sonra aldı (yıl yok) ve 942\'ye kadar Karahanlı hâkimiyeti delili yok. 942 gayrimüslim Türk işgali ve Satuk Buğra Han\'ın geri alış yılı kaynakta yok → dilim BÖLÜNMEDİ. t=1000-01-01 mevcut zincirin başı.'),
  ]))
sinir('0840-01-01', 'karahanli', ['karahanli', 'karluk'], A['balasagunakbesim'], 'toprak-kazanc',
      'Karluk yabgusu Kara Han unvanını aldı: Karluk Devleti Karahanlı Devleti\'ne dönüştü (Balasagun merkez)',
      'Uygur Devleti\'nin 840\'ta Kırgızlarca yıkılması üzerine Karluk yabgusu Bilge Kül Kadır kendini Göktürklerin halefi ilan edip Kara Han unvanını aldı; Pritsak\'a göre merkez Balasagun (Kuzordu).',
      J(T('karluklar', 'Böylece Karluk Devleti değişiklik geçirerek', 'dönüştü.'), T('karahanlilar', 'Yeni kurulan Karahanlılar Devleti için Balasagun (Kuzordu) merkez olarak seçilmiş', 'ikiye ayrılmıştır.')),
      'yil', 'Genç\'e göre kurucu Yağmalar (Karluk değil) ve Balasagun\'un Karahanlı oluşu 942\'ye kadar belgesiz; iki görüş TDV Karahanlılar md.\'nde beyan edilmiştir.')

# ===== TARAZ (TALAS) ===============================================================================
YAMA.append(dict(ad=A['tarazevliyaata'], mevcut_zincir_basi='cagatay 1281-01-01', onceki_gerekli='0500-01-01 → 0766-01-01 (başka küme)',
  devam_gerekli='1211-01-01 → 1281-01-01',
  s_onek=[
   S('0766-01-01', '0840-01-01', 'karluk', 'yil',
     J(T('karluklar', 'Daha sonra da yıkılma sürecine giren Kara Türgiş Kağanlığı’nın', 'burada başşehri Balasagun yakınlarındaki Kara-ordu olan bir devlet kurdular.')),
     'TDV: Karluklar Kara Türgiş\'in iki büyük idare merkezi Tokmok ve Talas\'ı zaptederek 766\'da devlet kurdu.'),
   S('0840-01-01', '1041-01-01', 'karahanli', 'yil',
     J(T('karahanlilar', 'Kadır Han’ın Oğulçak, yardımcı kağan sıfatıyla Talas’ta ve Kâşgar’da hüküm sürdüğü', 'kaydedilmektedir.'),
       T('karahanlilar', 'Muharrem 280’de (Mart-Nisan 893) Doğu Karahanlılar’ın merkezi Talas’ı zaptedince')),
     'BEYAN: Sâmânî İsmâil b. Ahmed Muharrem 280\'de (Mart-Nisan 893) Talas\'ı zaptetti (TDV Karahanlılar); şehri ne kadar elde tuttuğu yazılı değil (kronoloji maddesi: 893-03-23 İsmâil Talas\'ı alıp esir aldı, Karahanlılar başşehri Kâşgar\'a taşıdı) → dilim BÖLÜNMEDİ, akın sayıldı. Pritsak\'a göre Talas Karahanlı Buğra Han kolunun başşehri.'),
   S('1041-01-01', '1130-01-01', 'dogu-karahanli', 'yil',
     J(T('karahanlilar', 'Muhammed (muhtemelen Kâşgarlı Mahmud’un dedesidir) Buğra Han sıfatı ile Talas ve İsfîcâb’ı', 'idare edecekti.')),
     'BEYANLI YAKLAŞIKLIK: Karahanlı 1041\'de Doğu/Batı ikiye ayrıldı (TDV 433/1041-42); Talas Doğu Karahanlı Buğra Han Muhammed\'in payı (435/1044 paylaşım). 1041-1044 arası sahiplik ABİ MERKEZ: Balasagun/Kâşgar (Doğu Karahanlı) olarak alındı.'),
   S('1130-01-01', '1211-01-01', 'karahitay', 'yil',
     J(T('karahitaylar', 'Kâşgar, Beşbalık ve Hoten’i de kendine tâbi kılıp başşehri Balasagun olan Karahıtay Devleti’ni kurdu (1130).'),
       T('karahitaylar', 'batıda Ceyhun ırmağına', 'dayanıyordu')),
     'BEYANLI YAKLAŞIKLIK: Talas adı geçen Karahıtay cümlesinde yok; Karahıtay sınırları «batıda Ceyhun» ve başşehir Balasagun olduğundan Talas içeridedir (ABİ MERKEZ: Balasagun). 1211-1218 Küçlüğ dönemi ve sonrası devam_gerekli.'),
  ]))
sinir('0840-01-01', 'karahanli', ['karahanli', 'karluk'], A['tarazevliyaata'], 'toprak-kazanc',
      'Talas Karluk Devleti\'nden Karahanlı Devleti\'ne geçti (Uygur çöküşü, Kara Han unvanı)',
      'Karluk yabgusu 840\'ta Kara Han unvanını aldı; Karluk Devleti ilk Türk-İslâm devleti Karahanlılara dönüştü; Talas Karahanlı yardımcı kağanı Oğulçak\'ın merkezi oldu.',
      J(T('karluklar', 'Böylece Karluk Devleti değişiklik geçirerek', 'dönüştü.')), 'yil')
sinir('1041-01-01', 'dogu-karahanli', ['dogu-karahanli', 'karahanli'], A['tarazevliyaata'], 'toprak-kazanc',
      'Karahanlı ikiye ayrıldı: Talas Doğu Karahanlı payına düştü',
      'Aynüddevle Muhammed ve Böri Tegin İbrâhim Mâverâünnehir\'de bağımsız devlet kurunca Karahanlılar Doğu ve Batı diye ikiye ayrıldı; Talas ve İsfîcâb Doğu Karahanlı Buğra Han Muhammed\'in payı oldu.',
      J(T('karahanlilar', 'Mâverâünnehir’in tamamına hâkim olup burada bağımsız bir devlet kurdular (433/1041-42).'),
        T('karahanlilar', 'Muhammed (muhtemelen Kâşgarlı Mahmud’un dedesidir) Buğra Han sıfatı ile Talas ve İsfîcâb’ı', 'idare edecekti.')), 'yil',
      'BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Balasagun/Kâşgar).')
sinir('1130-01-01', 'karahitay', ['karahitay', 'dogu-karahanli'], A['tarazevliyaata'], 'toprak-kazanc',
      'Karahıtay Devleti kuruldu: Talas Karahıtay sınırları içinde',
      'Yeh-lü Ta-şi Balasagun\'a gelip Kâşgar, Beşbalık ve Hoten\'i tâbi kılarak Karahıtay Devleti\'ni kurdu; batı sınırı Ceyhun\'du.',
      J(T('karahitaylar', 'Kâşgar, Beşbalık ve Hoten’i de kendine tâbi kılıp başşehri Balasagun olan Karahıtay Devleti’ni kurdu (1130).')), 'yil',
      'BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Balasagun).')

# ===== GAZNE =======================================================================================
f_gazne = hj(351, 12, 1)     # 962-12-31 ; Ocak 963 ile kesişim ilk günü = 963-01-01
assert f_gazne == '0962-12-31'
GAZNE_ICNOT = ('f = Zilhicce 351 (0962-12-31..0963-01-29) ∩ «Ocak 963» kesişiminin ilk günü 0963-01-01 (aynı gün Gazneli künye f). ' + TAKVIM_NOT)
def gazne_zinciri(ad_kind):
    s = [
     S('0963-01-01', '1157-01-01', 'gazneli', 'ay',
       J(T('gazneliler', 'burayı ele geçirdi (Zilhicce 351 / Ocak 963).'),
         T('gazneliler', 'Behram Şah yeniden Gazne’ye hâkim olduysa da (547/1152)', 'çöküş sürecine girmişti.')),
       GAZNE_ICNOT + ' BEYAN: Gurlular Gazne\'yi 1148\'de (Gurlular md.: Seyfeddin Sûrî Gazne tahtını ele geçirdi) / 1150-51\'de (Gazneliler md.: Gazne şehrini yaktılar) aldı-yaktı, Behram Şah 1152\'de geri döndü; iki TDV maddesi yılları ayrıştırıyor, süre kısa → dilim BÖLÜNMEDİ. t=1157-01-01: Behram Şah\'ın ölümü ve Hüsrev Şah\'ın tahta çıkışı (552/1157); Hüsrev Şah\'ın Gazne\'yi terk günü TDV\'de yıl olarak yok («1160\'ta ölümünden önce»), 1157 alt sınırdır (BEYANLI YAKLAŞIKLIK).'),
     S('1157-01-01', '1173-01-01', '__BOSLUK__', 'yil',
       J(T('gurlular', 'Gazne bölgesindeki Oğuz Türkleri’ne saldırıp şehri yağmalamaları için', 'bıraktı.'),
         T('gazneliler', 'Sonuçta Hüsrev Şah Gazne’yi terkederek Lahor şehrine yerleşti.')),
       'BOŞLUK BEYANI: arandı, bulunamadı: Gazne 1157-1173 arasında Oğuz (Ghuzz) boylarının elindeydi (TDV Gurlular md.: 1173\'te Gazne\'yi Oğuz Türkleri\'nden aldılar) ancak Oğuz için atlas devlet kimliği yok (oguz-yabgu künyesi bozkir1 girdisinde yıl-null olarak bekliyor); bölgeye atlas kimliği olmadan sahip yazılmadı. Çözüm: oguz kimliği açılırsa bu dilim ona bağlanır. Merkezi Lahor\'a taşıyan Gazneli (gazneli-lahor 1157-1186) Gazne\'yi elinde tutmadı.' if ad_kind == 'gazne' else
       'BOŞLUK BEYANI (ABİ MERKEZ: Gazne): Kâbil\'e özgü kaynak yok; zincir Gazne\'den devralındı. Gazne 1157-1173 Oğuz elinde (TDV Gurlular md.), Oğuz atlas kimliği yok → boşluk. ' + 'Merkezin kendisi __BOSLUK__ olduğu için yer de boşluk kalır.'),
     S('1173-01-01', '1215-01-01', 'gurlu', 'yil',
       J(T('gurlular', 'Daha sonra Gur’un ve Horasan’ın çeşitli bölgelerinden gelen orduları topladı ve 1173’te Gazne’yi aldıktan sonra', 'bıraktı.'),
         T('gurlular', 'Sultan Muizzüddin’in öldürülmesi Şensebânî hânedanının tarihinde bir dönüm noktası teşkil etti.', 'çalıştı.')),
       '1173\'te Gıyâseddin Muhammed Gazne\'yi aldı ve idareyi kardeşi Muizzüddin\'e bıraktı; 1206\'da Muizzüddin\'in ölümüyle Gazne\'de Gurlu idarecileri Hârizmşah baskısı altına girdi (1215\'e kadar).'),
     S('1215-01-01', '1221-11-26', 'harizmsah', 'gun',
       J(T('harizmsahlar', 'Aynı yıl Gazne’yi aldı ve oğlu Celâleddin’e verdi', 'itaatlerini sağladı.'),
         T('harizmsahlar', 'Celâleddin, daha sonra Moğollar’ı üst üste mağlûp etmesine rağmen 9 Şevval 618’de (26 Kasım 1221) Hindistan’a sığınmak zorunda kaldı.')),
       'f yıl (1215); t = 9 Şevval 618 / 26 Kasım 1221 Celâleddin\'in Hindistan\'a geçişi (TDV iki takvimi birlikte verir, tablo çevirisi aynı günü verir). BEYAN: Gazne\'nin Moğol eline geçiş günü TDV Hârizmşahlar/Cengiz Han md.\'lerinde yok («Celâleddin Gazne ve Sind bölgelerinde bozguna uğrayarak kaçtı»); 1221-11-26 sonrası devam_gerekli.'),
    ]
    return s
sg = gazne_zinciri('gazne')
YAMA.append(dict(ad=A['gazne'], mevcut_zincir_basi='cagatay 1281-01-01', onceki_gerekli='0500-01-01 → 0963-01-01 (Levikler vb.; başka küme)', devam_gerekli='1221-11-26 → 1281-01-01', s_onek=sg))
sinir('1157-01-01', 'gazneli-lahor', ['gazneli', 'gazneli-lahor'], A['gazne'], 'toprak-kayip',
      'Hüsrev Şah Gazne\'yi terk edip Lahor\'a yerleşti; Gazne Oğuzların eline düştü',
      'Gazneli Behram Şah\'ın ölümü (552/1157) ve Sultan Sencer\'in Oğuzlarca esir alınmasının yarattığı kargaşada Hüsrev Şah Gazne\'yi terk edip Lahor\'a çekildi; Gazneliler bundan sonra Hindistan topraklarında hüküm sürdü. (1157 alt sınır; kesin yıl TDV\'de yok.)',
      J(T('gazneliler', 'Sonuçta Hüsrev Şah Gazne’yi terkederek Lahor şehrine yerleşti.')), 'yil',
      'BEYANLI YAKLAŞIKLIK: 1157 Behram Şah\'ın ölüm yılı (alt sınır); Hüsrev Şah\'ın Gazne\'yi terk yılı kaynakta yok.')
sinir('1173-01-01', 'gurlu', ['gurlu'], A['gazne'], 'toprak-kazanc',
      'Gıyâseddin Muhammed Gazne\'yi Oğuzlardan aldı, idaresini kardeşi Muizzüddin\'e verdi',
      'Gurlu Sultanı Gıyâseddin Muhammed 1173\'te Gazne\'yi aldı ve sultan unvanı verdiği kardeşi Muizzüddin Muhammed\'e bıraktı.',
      J(T('gurlular', 'Daha sonra Gur’un ve Horasan’ın çeşitli bölgelerinden gelen orduları topladı ve 1173’te Gazne’yi aldıktan sonra', 'bıraktı.')), 'yil')
sinir('1215-01-01', 'harizmsah', ['harizmsah', 'gurlu'], A['gazne'], 'toprak-kazanc',
      'Hârizmşah Alâeddin Muhammed Gazne\'yi aldı, oğlu Celâleddin\'e verdi',
      'Hârizmşah Muhammed 1215\'te Sığnak\'ı Kıpçaklardan aldıktan sonra Gazne\'yi aldı ve oğlu Celâleddin\'e verdi; Gurlu varlığı sona erdi.',
      J(T('harizmsahlar', 'Aynı yıl Gazne’yi aldı ve oğlu Celâleddin’e verdi', 'itaatlerini sağladı.')), 'yil')

# ===== KÂBİL =======================================================================================
f_kabil = hj(376, 1, 1)
sk = gazne_zinciri('kabil')
sk[0] = S(f_kabil, '1157-01-01', 'gazneli', 'yil',
          J(T('gazneliler', 'Neticede çetin savaşlardan sonra Hindûşâhî racası mağlûp edildi ve Sebük Tegin Kâbil nehri boyunca Peşâver’e kadar ilerlemeye', '(376/986-87).'),
            T('gurlular', 'Gur ve Garcistan, Bâmiyân, Belh, Büst, Horasan, Gazne, Kâbil, Kirman, Lahor')),
          'f = hicrî 376 yılının ilk günü (TDV «376/986-87» yıl hassasiyeti; ' + TAKVIM_NOT + ') BEYANLI YAKLAŞIKLIK: TDV Kâbil ŞEHRİNİN alındığını yazmaz; Sebük Tegin\'in Hindûşâhî racasını yenip Kâbil nehri boyunca Peşâver\'e ilerlediğini yazar → Kâbil bölgesi Gazneli hâkimiyetine girdi (ABİ MERKEZ: Gazne). Gurlular md. Gurlu imparatorluğunu on idarî bölgeye ayırır (Gazne, Kâbil ayrı bölge). t=1157: Gazne ile aynı (Gazneli merkezi Lahor\'a taşındı).')
YAMA.append(dict(ad=A['kabil'], mevcut_zincir_basi='cagatay 1281-01-01', onceki_gerekli='0869-01-01 → ' + f_kabil + ' (hint1 yaması 0500-0869 yazdı ve 0869\'da bitiyor; 0869-0986 Saffârî/Hindûşâhî/Sâmânî dönemi başka küme)', devam_gerekli='1221-11-26 → 1281-01-01', s_onek=sk))
for (t, devlet, tarf, tur, b, d_, kes) in [
   ('1157-01-01', 'gazneli-lahor', ['gazneli', 'gazneli-lahor'], 'toprak-kayip', 'Gazneliler merkezi Lahor\'a taşıdı; Kâbil bölgesi Gazne ile birlikte Gazneli elinden çıktı (ABİ MERKEZ: Gazne)', 'Hüsrev Şah Gazne\'yi terk edip Lahor\'a yerleşti; Gazne\'ye bağlı Kâbil bölgesinin akıbeti Gazne\'ye bağlandı (beyanlı yaklaşıklık).', 'yil'),
   ('1173-01-01', 'gurlu', ['gurlu'], 'toprak-kazanc', 'Gurlular Gazne\'yi alınca Kâbil bölgesi de Gurlu idaresine girdi (ABİ MERKEZ: Gazne)', 'Gıyâseddin Muhammed Gazne\'yi aldı, kardeşi Muizzüddin\'e bıraktı; Kâbil Gurlu imparatorluğunun ayrı idarî bölgesidir.', 'yil'),
   ('1215-01-01', 'harizmsah', ['harizmsah', 'gurlu'], 'toprak-kazanc', 'Hârizmşah Muhammed Gazne\'yi alınca Kâbil bölgesi de Hârizmşah idaresine geçti (ABİ MERKEZ: Gazne)', 'Hârizmşah Muhammed Gazne\'yi aldı ve oğlu Celâleddin\'e verdi (Gurlu varlığı sona erdi).', 'yil')]:
    sinir(t, devlet, tarf, A['kabil'], tur, b, d_,
          J(T('gazneliler', 'Sonuçta Hüsrev Şah Gazne’yi terkederek Lahor şehrine yerleşti.') if t == '1157-01-01' else
            (T('gurlular', 'Daha sonra Gur’un ve Horasan’ın çeşitli bölgelerinden gelen orduları topladı ve 1173’te Gazne’yi aldıktan sonra', 'bıraktı.') if t == '1173-01-01' else
             T('harizmsahlar', 'Aynı yıl Gazne’yi aldı ve oğlu Celâleddin’e verdi', 'itaatlerini sağladı.'))), kes,
          'BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Gazne): Kâbil\'e özgü devir cümlesi TDV\'de yok.')

# ===== BÂMİYÂN =====================================================================================
f_bam = hj(540, 1, 1)
YAMA.append(dict(ad=A['bamiyan'], mevcut_zincir_basi='__BOSLUK__ 1281-01-01', onceki_gerekli='0500-01-01 → ' + f_bam + ' (başka küme)', devam_gerekli='1215-01-01 → 1281-01-01',
  s_onek=[S(f_bam, '1215-01-01', 'gurlu', 'yil',
     J(T('gurlular', 'Bâmiyân ve Tohâristan Kolu Fahreddin Mesud 540 (1145)', 'Celâleddin Ali 602-612 (1206-1215)'),
       T('gurlular', 'Bunun üzerine onların aleyhine amcaları Bâmiyân hâkimi Fahreddin Mesud ile iş birliğine girdi.')),
     'f = hicrî 540 ilk günü ∩ 1145 (TDV hükümdar tablosu «Fahreddin Mesud 540 (1145)»); Bâmiyân kolu Gur hânedanının ayrı kolu (Bâmiyân ve Tohâristan Kolu) olup TDV tablosuna göre 1215\'te biter. BEYANLI YAKLAŞIKLIK: kol hükümdarı ≈ Gurlu devleti sahibi (yan kol, ana kola tâbi sultan unvanlı: Gıyâseddin Şemseddin\'e sultan unvanı verdi). t=1215: tablodaki son hükümdarın (Celâleddin Ali) yılı; Bâmiyân\'ın bu yıl kime geçtiği TDV Gurlular/Hârizmşahlar md.\'lerinde yok → devam_gerekli. ' + TAKVIM_NOT)]))

# ===== HORASAN ŞEHİRLERİ ===========================================================================
f_hor = hj(287, 1, 1)   # 900-01-07
t_s999 = hj(389, 1, 1)  # 998-12-23 -> yıl kesişimi 999-01-01
def horasan(key, nid_sel_f, sel_kind, ahi_notu):
    pass
SAMANI_HOR_KAYNAK = J(T('samaniler', 'Saffârî Emîri Amr b. Leys’i Belh savaşında yenerek esir aldı', 'hâkimiyet menşurları verildi.'))
SAMANI_HOR_IC = ('f = hicrî 287 ilk günü ∩ 900 (TDV «287/900» yıl hassasiyeti; ' + TAKVIM_NOT + ') BEYANLI YAKLAŞIKLIK: halife İsmâil b. Ahmed\'e Horasan\'ın bütününün hâkimiyet menşurunu verdi; bu şehrin kendisinin Sâmânîlere geçiş günü TDV\'de yok (şehir-düzeyi devir cümlesi aranıp bulunamadı: Sâmânîler md.). ABİ MERKEZ: Belh (Amr b. Leys\'in yenildiği yer).')
GAZ999_KAYNAK = J(T('samaniler', 'Gazne ordusuyla yapılan savaş Sâmânîler’in yenilgisiyle sonuçlandı (389/999).', 'Horasan topraklarını kaybettiler.'),
                  T('gazneliler', 'Mahmud, Horasan’da iktidarını sağlamlaştırdıktan sonra', 'kendi kontrolü altına aldı.'))
GAZ999_IC = ('BEYANLI YAKLAŞIKLIK: TDV «389/999\'da Sâmânîler Horasan topraklarını kaybetti» der; şehir-düzeyi gün yok. 389 H (0998-12-23..) ∩ 999 kesişiminin ilk günü 0999-01-01. Yıl hassasiyeti. Not: Mahmud 995\'ten beri Sâmânî adına Horasan orduları kumandanıydı (Gazneliler md.); egemenlik devri 999\'da alındı.')
def sel_kaynak(kind):
    if kind == 'tal':
        return J(T('selcuklular', 'Çağrı Bey Merv’e, Tuğrul Bey Nîşâbur’a, Mûsâ Yabgu Serahs’a girdi.'), T('tugrul-bey', 'galip gelince (Şâban 429 / Mayıs 1038)', 'Nîşâbur’a'))
    return J(T('selcuklular', 'Serahs ve Belh’in dahil olduğu Ceyhun ile Gazne arasındaki bölge, merkezi Merv olmak üzere Çağrı Bey’e,', 'Mûsâ Yabgu’ya verildi.'),
             T('dandanakan-savasi', 'üç gün devam eden ve 8 Ramazan 431 (23 Mayıs 1040) günü sona eren savaşta'))
t1038 = hj(429, 8, 1)   # 1038-05-09
assert t1038 == '1038-05-09', t1038
t1040 = '1040-05-23'
assert hj(431, 9, 8) == t1040
HOR = [
  ('belh', 'Belh', 'dev', t1040, '1040-05-23 → 1198-01-01', 'Belh', 'Çağrı Bey merkezli Merv payına (Serahs ve Belh dahil) Dandanakan zaferinden sonra verildi; Belh\'in fiilî giriş günü yok: BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Merv).'),
  ('herat', 'Herat', 'dev', t1040, '1040-05-23 → 1175-01-01', 'Herat', 'Herat merkezli bölge Mûsâ Yabgu\'ya verildi; Dandanakan sonrası Mûsâ Yabgu Herat\'ı almak için yola çıktı (Dandanakan Savaşı md.): fiilî giriş günü yok, BEYANLI YAKLAŞIKLIK.'),
  ('nisabur', 'Nîşâbur', 'tal', t1038, '1038-05-09 → 1202-01-01', 'Nîşâbur', 'Talhâb zaferi (Şâban 429 / Mayıs 1038) sonrası Tuğrul Bey Nîşâbur\'a girdi; ay hassasiyeti.'),
  ('mervmari', 'Merv (Mari)', 'tal', t1038, '1038-05-09 → 1221-01-01', 'Merv (Mari)', 'Talhâb zaferi (Şâban 429 / Mayıs 1038) sonrası Çağrı Bey Merv\'e girdi; ay hassasiyeti.'),
  ('serahs', 'Serahs', 'tal', t1038, '1038-05-09 → 1193-01-01', 'Serahs', 'Talhâb zaferi (Şâban 429 / Mayıs 1038) sonrası Mûsâ Yabgu Serahs\'a girdi (Talhâb Serahs yakınındadır); ay hassasiyeti.'),
]
for key, ad0, kind, tsel, devam, adlbl, aciklama in HOR:
    ad = A[key]
    YAMA.append(dict(ad=ad, mevcut_zincir_basi='(bkz. devam_gerekli)', onceki_gerekli=('0750-01-01 → ' + f_hor + ' (bozkir1 yaması 0500-0750 yazdı; 0750-0900 Abbâsî/Tâhirî/Saffârî dönemi başka küme)') if key == 'belh' else ('0500-01-01 → ' + f_hor + ' (Tâhirîler/Saffârîler; başka küme)'), devam_gerekli=devam,
      s_onek=[
       S(f_hor, '0999-01-01', 'samani', 'yil', SAMANI_HOR_KAYNAK, SAMANI_HOR_IC),
       S('0999-01-01', tsel, 'gazneli', 'yil' if kind == 'dev' else 'ay', GAZ999_KAYNAK, GAZ999_IC + ' t = Selçuklu devri (aşağıdaki sınır maddesi); sonrası (Büyük Selçuklu → ... → mevcut zincir) başka kümenin işi: devam_gerekli.'),
      ]))
    sinir('0999-01-01', 'gazneli', ['gazneli', 'samani'], ad, 'toprak-kazanc', adlbl + ': Horasan Sâmânîlerden Gaznelilere geçti',
          'Sâmânîler Gazneli ordusuna yenilince (389/999) Horasan topraklarını kaybetti; Mahmud Horasan\'da iktidarını sağlamlaştırdı.', GAZ999_KAYNAK, 'yil', GAZ999_IC)
    sinir(tsel, 'buyuk-selcuklu', ['buyuk-selcuklu', 'gazneli'], ad, 'toprak-kazanc', adlbl + ': Gazneli hâkimiyeti sona erdi, Selçuklu hâkimiyeti başladı',
          aciklama, sel_kaynak(kind), 'ay' if kind == 'tal' else 'gun', ('Şâban 429 ∩ Mayıs 1038 = ' + t1038 + '. ' + TAKVIM_NOT) if kind == 'tal' else '8 Ramazan 431 Cuma / 23 Mayıs 1040 TDV\'de iki takvimle verilir (tablo çevirisi aynı gün). Selçuklu hâkimiyeti şehir düzeyinde Dandanakan sonrası taksimle başladı.')

# ===== BULGAR ======================================================================================
YAMA.append(dict(ad=A['bulgarbolgar'], mevcut_zincir_basi='altinorda 1281-01-01', onceki_gerekli='0500-01-01 → 0920-01-01 (başka küme)',
  s_onek=[
   S('0920-01-01', '1236-01-01', 'idil-bulgar', 'yil',
     J(T('bulgar', 'Bulgar Hanı Yaltavar oğlu Almış Han müslüman oldu ve 920’de', 'mimarlar istedi.'),
       T('bulgar', 'Bulgar, Biler, Suvar, Oşal, Tetiş gibi önemli kültür ve ticaret merkezleri kuruldu.')),
     'f=920: İdil Bulgar Hanı Almış\'ın halifeye elçi gönderdiği yıl (devletin ilk yazılı/kaynaklı yılı; İbn Fâdlân heyeti 922-05-12\'de hanın karargâhına ulaştı). BEYANLI YAKLAŞIKLIK: TDV Bulgar md. Bulgar\'ı merkezlerden biri sayar, şehrin kuruluş/ilk anılış günü yok; kur: yazılmadı. Han ordugâhı ≠ şehir olabilir.'),
   S('1236-01-01', '1242-01-01', 'mogol-imparatorlugu', 'yil',
     J(T('bulgar', 'Nitekim Batu Han’ın emriyle Moğollar uzun bir hazırlıktan sonra 1236’da Bulgarlar’a saldırdılar ve bütün şehirlerini yakıp yıktılar', 'kılıçtan geçirdiler.')),
     'Moğollar 1236\'da Bulgar şehirlerini yaktı. t=1242-01-01: atlas künyesi altinorda f=1242; TDV Kıpçaklar md. Altın Orda\'nın kuruluşunu «1241» verir (künye f 1241\'e çekilirse bu devir 1241-01-01 olur — düzeltme önerisi). Aradaki dilimde Batu Han\'ın (Cengiz ulusu) idaresi mogol-imparatorlugu olarak yazıldı.'),
   S('1242-01-01', '1281-01-01', 'altinorda', 'yil',
     J(T('bulgar', 'Bulgarlar Altın Orda devrinde (1283-1452) biraz toparlanıp', 'varlıklarını sürdürdüler'),
       T('kipcaklar', 'Moğol istilâsına uğrayıp bölgede Altın Orda Devleti’nin kurulmasından sonra (1241)')),
     't=1281-01-01 mevcut zincirin başıdır (altinorda).'),
  ]))
sinir('1236-01-01', 'mogol-imparatorlugu', ['mogol-imparatorlugu', 'idil-bulgar'], A['bulgarbolgar'], 'toprak-kazanc',
      'Batu Han İdil Bulgar ülkesini yakıp yıktı: Bulgar Moğol idaresine geçti',
      'Batu Han\'ın emriyle Moğollar uzun hazırlıktan sonra 1236\'da Bulgarlar\'a saldırdı, bütün şehirlerini yakıp yıktı; Bulgarlar Altın Orda\'ya tâbi toparlandı.',
      J(T('bulgar', 'Nitekim Batu Han’ın emriyle Moğollar uzun bir hazırlıktan sonra 1236’da Bulgarlar’a saldırdılar ve bütün şehirlerini yakıp yıktılar', 'kılıçtan geçirdiler.')), 'yil')
sinir('1242-01-01', 'altinorda', ['altinorda', 'mogol-imparatorlugu'], A['bulgarbolgar'], 'toprak-kazanc',
      'Altın Orda Hanlığı kuruldu: Bulgar Altın Orda\'ya bağlandı',
      'Batu Han\'ın Deşt-i Kıpçak\'ta kurduğu Altın Orda (TDV: 1241; atlas künyesi 1242) Bulgar ülkesini içine aldı.',
      J(T('kipcaklar', 'Moğol istilâsına uğrayıp bölgede Altın Orda Devleti’nin kurulmasından sonra (1241)')), 'yil',
      'TDV Kıpçaklar md. 1241; atlas künyesi altinorda f=1242-01-01 (künye f ile çakıştırmak için 1242 alındı; künye düzeltme önerisi RAPOR.md).')
