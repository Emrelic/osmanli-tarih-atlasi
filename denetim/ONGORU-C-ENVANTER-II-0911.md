# D022 ÖNGÖRÜ — C ENVANTER II, ölçümden ÖNCE yazıldı

Oturum: C ENVANTER II · 11 Eylül 2026, ölçüme başlamadan hemen önce.
Girdi: `denetim/ENVANTER-C-0911.json` (144 kayıt, 41 savaslar.js ANTLASMALAR
+ 103 olaylar*.js k:antlasma) + kardeş oturumların bulguları (`SEMA-C-0911.md`,
`BULGU-KRONOLOJI-KUNYE-0911.md`).

## ① TEKİLLEŞTİRME — gerçek sayı kaç?

Okurken (ilk envanter turunda) çoğu ANTLASMALAR kaydının aynı ad+tarihle
olaylar*.js'te de bir k:antlasma maddesi olduğunu FARK ETTİM (Amasya,
Zitvatorok, Kasr-ı Şirin, Bucaş, Karlofça, Prut, Belgrad, Küçük Kaynarca,
Berlin, Mondros, Lozan, Ferhad Paşa, Nasuh Paşa — en az 13 kesin örnek
zaten görüldü).

**TAHMİN: 144 kayıt normalize ad+tarih ile birleştirilince 105-115 ARASI
TEKİL antlaşmaya iner** (yani ~30-38 kayıt çift). Gerekçe: 41 ANTLASMALAR
kaydının büyük çoğunluğu (tahminen ~30-33'ü) olaylar*.js'te de bir madde
olarak duruyor; birkaçı (Amasya-Pasarofça arası bazı erken/geç dönem
antlaşmalar, özellikle "iç" antlaşmalar — Sened-i İttifak gibi) yalnız
olaylar*.js'te veya yalnız savaslar.js'te olabilir.

## ② DAR ÖLÇÜTLE YENİDEN DAMGALAMA

İlk turda GENİŞ ölçütle (bir isimli yer değişiyor) 116/144 (%81) NET_SINIR
çıkmıştı. DAR ölçüt ("nehir/dağ/hat kelimesi ya da açık bir çizgi tarifi
geçmeli") uygulanınca:

**TAHMİN: dar NET_SINIR oranı %55-65 bandına düşer** (geniş %81'den ~15-25
puan aşağı). Gerekçe: geniş ölçütte 🟢 saydığım kayıtların önemli bir kısmı
yalnız "X bölgesi/şehri Y'ye geçti" diyor, açık bir "nehri/dağı/hattı sınır
kabul edildi" ifadesi TAŞIMIYOR (protektora ilanları, valilik devirleri,
ada/liman transferleri) — bunlar dar ölçütte düşecek.

## ③ c_gerekli_mi — C ŞEMA PİLOT'un Karlofça bulgusunun genellemesi

Kardeş oturum Karlofça'nın 5 sınır maddesinden 4'ünün (Bosna kale listesi,
Banat'ın nokta kısmı, Lehistan, Venedik) C'ye hiç ihtiyaç duymadığını,
yalnız Sava/Bosna segmentinin gerçek C-adayı olduğunu ölçtü (%20 C gerekli,
%80 A/B yeter ya da nokta eksik).

**TAHMİN: bu envanterin DAR NET_SINIR kümesinde de C_GEREKLI oranı DÜŞÜK
kalır, %15-25 bandında.** Gerekçe: bu envanterdeki hat_ozeti metinlerinin
çoğu isimli ŞEHİR/KALE aktarımı (Belgrad, Azak, Kars-Ardahan-Batum gibi) —
bunlar muhtemelen zaten `yerlesimler.js`'te nokta olarak var (büyük,
bilinen yerler) ve A/B mekanizması yeter. Gerçek nehir/hat tarifi taşıyan
azınlık (Turla/Dinyester, Aras, Meriç, Şattülarap, Midye-Enez hattı gibi
~15-20 kayıt) C'nin asıl aday havuzu; bunların da bir kısmının uç
noktaları (Turla'nın döküldüğü yer gibi) nokta olarak MEVCUT olabilir.

## Mazeret olabilecek ihtimaller (önceden yazıyorum)

- Eğer tekilleştirme sayısı 115'in ÇOK ÜSTÜNDE çıkarsa (ör. 130+): normalize
  fonksiyonu "Antlaşması" ekini/farklı sıralamayı tam yakalayamıyor
  olabilir (D185 — ad araması iki yöne yanılır), gerçek çift sayısı daha
  yüksek olabilir ve BEN kaçırmış olurum.
- Eğer c_gerekli oranı beklenenden YÜKSEK çıkarsa: bu envanterdeki
  kayıtların çoğu BÜYÜK, iyi-noktalanmış şehirler (başkentler, kaleler)
  olduğu için Karlofça'nın "küçük taşra kalesi" örnekleminden FARKLI bir
  dağılım gösterebilir — büyük olaylar küçük olaylardan daha iyi
  noktalanmış OLABİLİR ama bu YÖNÜ ÖNCEDEN BELLİ DEĞİL.

Bu dosya `git commit` ile ölçümden ÖNCE kayda geçirildi; sonuç
`denetim/ENVANTER-C-II-0911.json`de ayrıca raporlanacak, bu üç tahminin
TUTUP TUTMADIĞI açıkça yazılacak.
