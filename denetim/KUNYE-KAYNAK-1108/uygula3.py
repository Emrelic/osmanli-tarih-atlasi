import re, sys
sys.stdout.reconfigure(encoding="utf-8")
P = "data/devletler.js"
s = open(P, encoding="utf-8", newline="").read()
TARIH = "KUNYE-KAYNAK-1108 (11 Kasım 2026): "
ANAYASA = "Constitution of the Republic of South Africa Act 200 of 1993 (tam metin: justice.gov.za/trc/legal/sacon93.htm) — s.251(1) yürürlük 27 Nisan 1994; Schedule 7: «%s – The whole»; Schedule 1 Part 1: «%s districts, as they were on %s»"
FAZLA = " Status Act'in kendi metni açılamadı; Schedule 1 dipnotu bölge sınırının yasal referans günüdür, bağımsızlık ilanı günü olarak açık cümleyle okunmadı."
# id: (kaynak, ic_not_ek, ic_not_kip)  kip: "ekle" = mevcut ic_not'a ekle
YENI = {
 "bophuthatswana": (
  ANAYASA % ("Act 89 of 1977 Status of Bophuthatswana Act, 1977", "Bophuthatswana", "6 December 1977")
  + " ; Truth and Reconciliation Commission Report, c.1 böl.13 (sabctrc.saha.org.za/reports/volume1/chapter13/subsection30.htm): «1977 6 December: Bophuthatswana becomes an independent homeland»; SAHA (sahistory.org.za/dated-event/bophuthatswana-granted-independence-south-african-government)",
  TARIH + "f (1977-12-06) ve t (1994-04-27) birincil metinden teyit: ÇİFT TEYİT (Anayasa Act 200/1993 + TRC Raporu c.1; SAHA üçüncü ipucu). Önceki kaynak (worldstatesmen + Vikipedi ipucu) dayanak olamaz, değiştirildi; f/t değişmedi."),
 "venda-bantustan": (
  ANAYASA % ("Act 107 of 1979 Status of Venda Act, 1979", "Venda", "13 September 1979"),
  TARIH + "f (1979-09-13) Anayasa Schedule 1 dipnotunda yasal referans günü olarak, t (1994-04-27) s.251(1)'de teyit; TEK KAYNAK." + FAZLA + " Önceki kaynak (worldstatesmen) dayanak olamaz, değiştirildi; f/t değişmedi."),
 "ciskei": (
  ANAYASA % ("Act 110 of 1981 Status of Ciskei Act, 1981", "Ciskei", "4 December 1981"),
  TARIH + "f (1981-12-04) Anayasa Schedule 1 dipnotunda yasal referans günü olarak, t (1994-04-27) s.251(1)'de teyit; TEK KAYNAK." + FAZLA + " Önceki kaynak (worldstatesmen) dayanak olamaz, değiştirildi; f/t değişmedi."),
 "federe-olmayan-malay-devletleri": (
  "Treaty between Great Britain and Siam, Bangkok, 10 March 1909 (metin: FRUS 1909, Doc. 498, history.state.gov/historicaldocuments/frus1909/d498) — «Done at Bangkok in duplicate the tenth day of March in the year one thousand nine hundred and nine»; Art.1: Siam transfers suzerainty over Kelantan, Tringganu, Kedah, Perlis",
  TARIH + "BEYANLI YAKLAŞIKLIK: f (1909-03-10) antlaşmanın İMZA günüdür (FRUS metni); devir onaydan sonraki 30 gün içindedir (Art.2), fiilî devir günü birincil metinden okunamadı. JOHOR bu antlaşmada YOK (Art.1: yalnız Kelantan, Tringganu, Kedah, Perlis) — künyedeki Johor için ayrı kaynak gerek, bulunamadı. t (1946-04-01, Malayan Union) akademik/birincil metinden okunamadı. Önceki kaynak (worldstatesmen) dayanak olamaz, değiştirildi; f/t değişmedi."),
 "hollanda-guyanasi": (
  "UN Treaty Series, vol.1007, I-14784: «SURINAM – Declaration of acceptance of the obligations contained in the Charter of the United Nations, Paramaribo, 25 November 1975» (BM kabulü: Genel Kurul kararı 3413 (XXX), 4 Aralık 1975) — treaties.un.org/doc/Publication/UNTS/Volume 1007/volume-1007-I-14784-English.pdf",
  TARIH + "t (1975-11-25) KISMEN teyit: UNTS belgesi Surinam'ı 25 Kasım 1975 tarihli egemen bir bildirimle gösterir; belge bağımsızlığı açık cümleyle söylemez. f (1667-01-01) yıl düzeyidir: Breda Barışı 31 Temmuz 1667'de imzalandı ve Surinam Hollanda'da kaldı, ama Breda madde metni açılamadı ve akademik kaynak (Oostindie & Klinkers, Decolonising the Caribbean, 2003) okunamadı [yalnız yıl teyitli; gün teyitsiz]. Surinam 1667'de fiilen Hollanda'nın elindeydi; f'nin neyi tarihlediği (fetih/Breda) belirsiz. TEK KAYNAK. Önceki kaynak adsız beyandı; f/t değişmedi."),
 "fransiz-guyanasi": (
  "Rouard de Card, E., «Le différend franco-brésilien relatif à la délimitation des Guyanes» (beta-omk.manioc.org/files/original/16065/TLS17023.pdf) — «Convention signée à Paris, le 28 août 1817, entre la France et le Portugal pour la restitution de la Guyane» (de Clercq, Recueil des traités de la France, III, s.102); Viyana Nihai Senedi 9 Haziran 1815, md.106-107",
  TARIH + "f YILI (1817) okunarak teyit; gün yok: kaynak sözleşmeyi 28 Ağustos 1817 verir, devir 'üç ay içinde' yapılır (fiilî devir günü okunmadı). f=1817-01-01 yıl düzeyidir [yalnız yıl teyitli; gün teyitsiz]. TEK KAYNAK. Önceki kaynak adsız beyandı; f değişmedi."),
 "rupeniler": (
  "Der Nersessian, S., «The Kingdom of Cilician Armenia», K. M. Setton (ed.), A History of the Crusades, c.II (Univ. of Wisconsin Press, 1962) — «Leon II was crowned with great solemnity in the cathedral church of Tarsus, on January 6, 1198»; Constantine «by seizing, in 1091, the castle of Vahka… laid the foundations of Roupenid rule in Cilicia»",
  TARIH + "metin attalus.org/armenian/KCA1.htm ve KCA2.htm kopyasından OKUNDU. ÇELİŞKİ (değiştirilmedi): kaynak taç giymeyi 6 Ocak 1198 verir, atlas t=1199-01-06 (gün-ay aynı, YIL farkı); f=1092 teyitsiz, kaynak Rupenî hâkimiyetinin temelini 1091'e (Constantine, Vahka) bağlar, 1092 geçmez. TEK KAYNAK; ikinci kaynak (Boase 1978, TDV) okunamadı. Karar Emre'nin: t 1198-01-06'ya çekilirse ardıl kilikya-ermeni f'siyle birlikte karar verilmeli."),
 "asturias": (
  "bulunamadı — akademik kaynak okunamadı (Collins, Early Medieval Spain; Chronica Albeldense; DBE-RAH denenip açılamadı)",
  TARIH + "ÇELİŞKİLİ KAYNAK, DOĞRULANMADI: f=718 (Pelayo/Covadonga 718 mi 722 mi, ikincil kaynaklar tutarsız), t=910 (başkent León'a 910/914, Fruela II 925 — tutarsız). f/t değişmedi. Önceki kaynak (Foundation for Medieval Genealogy) dayanak olamaz, kaldırıldı."),
 "alman-isgali-karadag": (
  "bulunamadı — Tomasevich, War and Revolution in Yugoslavia 1941-1945 (Stanford UP, 2001), s.138-148 açılamadı",
  TARIH + "f (1943-09-12) ve t (1944-12-15) kitaptan OKUNAMADI; yalnız Vikipedi-türevi özetlerde, bunlar dayanak olamaz. f/t değişmedi. Önceki kaynak (Vikipedi bağlantısı) tek dayanak olamayacağı için kaldırıldı."),
}
ALAN = r'%s:"((?:[^"\\]|\\.)*)"'
for i, (k, n) in YENI.items():
    a = s.index('{ id:"%s",' % i)
    z = s.index("kronoloji:", a)
    st = s[a:z]
    k = k.replace('"', "'")
    n = n.replace('"', "'")
    mk = re.search(ALAN % "kaynak", st)
    assert mk, i
    mi = re.search(ALAN % "ic_not", st)
    if mi:
        # mevcut ic_not'u koru, önüne yeni notu ekle
        st = st[:mi.start()] + 'ic_not:"%s | ÖNCEKİ NOT: %s"' % (n, mi.group(1)) + st[mi.end():]
        mk = re.search(ALAN % "kaynak", st)
        st = st[:mk.start()] + 'kaynak:"%s"' % k + st[mk.end():]
    else:
        st = st[:mk.start()] + 'kaynak:"%s",\n  ic_not:"%s"' % (k, n) + st[mk.end():]
    s = s[:a] + st + s[z:]
    print("ok", i)
open(P, "w", encoding="utf-8", newline="").write(s)
