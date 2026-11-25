# Borç — Fransa ek okuma, parti 05 (26 Kasım 2026, HAVVA, salt-okur)

## Kapsam eksiği
- İstenen en çok 12 karttan **4'ü** yazıldı (nitelik partisi; kaynak bulma ve tam okuma bütçesi bitti). Eksik 8 kart teyitsiz doldurulmadı.

## Tam okunan kaynaklar (6 kaynak; 4 kart)
1. Şişman, Osmanlı Öğrencilerinin Paris'te Tahsil Yaptıkları Mısır ve Ermeni Mektepleri (AKÜ Sosyal Bilimler Dergisi, DergiPark 4805886) — tam. Cilt/sayı/yıl indirilen metinde yok (yazılmadı).
2. TDV, Rifâa et-Tahtâvî (Görgün, c.35 s.95-97) — tam madde + bibliyografya
3. Tekdemir 2013, Trakya Üniv. Edebiyat Fak. Dergisi 3/6 s.1-19 (DergiPark 594485) — tam
4. Ercivan 2024, Akademik Tarih ve Düşünce Dergisi 11/5 s.3293-3310 (DergiPark 4027267) — tam
5. Yamaç, Fransız Diplomatik Belgelerinde Türkiye-Suriye Sınır Sorunu 1918-1940 (Belleten) — tam (cilt/sayı/yıl metinde yok)
6. Pommier 2000, Revue germanique internationale 13, s.67-86 (OpenEdition rgi/770) — tam

## Etiketler
- Çift teyit: 2 kart (Paris öğrencileri; Abdülaziz 1867). Her ikisinde bağımsızlık sınırı ic_not_teyit'te açık: Ercivan Tekdemir'e atıf yapar ve ikisi ortak ikincil literatüre yaslanır.
- Tek kaynak, tam metin: 2 kart (Ankara 1921; Louvre 1793).
- Teyitsiz: 0.

## Okunamadı / okunmadı
- DergiPark 594485 ilk indirmede 429 verdi; 45 sn sonra bir kez yeniden denendi, indi (başlık taklidi yok).
- İndirilip TAM OKUNMAYAN (kart dayanağı yapılmadı): Sawaie 2005 (Uludağ İlahiyat, DergiPark 143841), Gür 2022 (Kilis 7 Aralık, DergiPark 2591743), Kanca 1863 Sergi-i Umumi (DergiPark 319924), Tekdemir 1851 Londra (464787), Yurtsever 2022 (2426652; yalnız Ankara 1921 geçen satırları arandı, tam okunmadı), Aksoy 2015 Fransız okulları, Coşkun 2022 Saint-Benoit, Smakaj 1902 Paris Kongresi, Özkan Kırıkhan Ruhban Okulu, Yiğitpaşa 2022 Fransız mimarisi, Pasteur PMC9027159, Yardeni 2014 (Huguenot, diasporas/309): okunmadı.
- fransa-kaynak4'teki «TDV» .txt dosyalarının çoğu (ankara-antlasmasi-1921, meysalun, meysalun-savasi, osmanli-borclari vb.) gerçek madde değil TDV ARAMA SAYFASIDIR (ölü slug); kaynak sayılmadı.
- TDV'de Ankara 1921 ve Meysalun maddesinin gerçek slug'ı bulunamadı ("bulunamadı", "yok" değil). Meysalun için akademik DergiPark makalesi aramada çıkmadı.
- Asıl eserler hep ikincil aktarımdan: Louca 1970, Chambers 1968, Soysal 2000, Güçlü 2006, Bige Yavuz 1994, McClellan 1994, Guiffrey-Tuetey 1909, Meijers, Karaer, Danişmend: OKUNMADI.

## Kronoloji boşlukları / tarih farkları (kronoloji işine)
- Bağ maddesi yok: 1857 Mekteb-i Osmânî (Paris), 1855 Paris Dünya Sergisi'nin Osmanlı katılımı (kronoloji_fransa.js'te yalnız Fransız yanı var), 1902 Jön Türk Kongresi, Saint-Benoit/Fransız okulları, 1930 Türk-Fransız antlaşması, 1925 sınır komisyonu, 1928 Ernst kararı, 1939 Hatay ilhakı, Meysalun dışı Suriye maddeleri.
- Louvre atlas maddesi «halkın ücretsiz girebildiği»: Pommier Louvre için "serbestçe kabul" der, ücretsizliği Viyana için yazar. Atlas metni kaynakla doğrulanmadı (maddenin kendi kaynak satırı da «WebFetch ile doğrulanmadı»).
- Abdülaziz: Paris'ten ayrılış Tekdemir 12 Temmuz / Danişmend 10 Temmuz; Ercivan 11 Temmuz'da İngiltere'ye varış; atlas maddesinin gun alanı yalnız 21 Haziran - 7 Ağustos.
- Ankara 1921: Yamaç 20 Ekim (metin) / 21 Ekim (bir başlık); Londra anlaşması 10/11 Mart.
- Mehmed Ali öğrenci heyeti 1826: 44 (Şişman/Louca) / kırk (TDV).

## Adaylar (okunursa kart olur)
Fransız okulları (Aksoy + Coşkun çift teyit kurar; bağ maddesi gerek) · Saint-Benoit · Paris'te Jön Türkler 1902 (Smakaj; bağ maddesi gerek) · Fransız mimarisi / Vallaury (Yiğitpaşa 2022 + ikinci kaynak) · Pasteur 1885 (PMC; ikinci kaynak) · 1855 Paris Sergisi (ikinci/üçüncü kaynak bulunamadı) · Meysalun 1920 · Fas 1912.

## Yöntem beyanı
İndirmeler düz `curl` (başlıksız); WebSearch yalnız aday bulmak için kullanıldı, olgu arama özetinden alınmadı. PDF metni pypdf ile. Başlık taklidi, ayna, önbellek, archive.org, Persée kullanılmadı. Alt ajan açılmadı. Süreç öldürülmedi, ağır betik/derleme/node çalıştırılmadı, repo ve git'e yazılmadı. JSON sınaması geçti (json.loads).
