# F1 KUZEY AMERİKA LİSTESİ — RAPOR (16 Kasım 2026)

Çıktı: `LISTE.tsv` (642 satır) · üretici: `uret.py` (girdi `veri_abd.txt`, `veri_kanada.txt`, `veri_meksika.txt`; yeniden koşulabilir).

## Sayılar (ölçüm: bu worktree, origin/main d05cedbe7 tabanı)
- Satır: **642** — ABD 299 · Kanada 192 · Meksika 151.
- Kat: **kat1 38 · kat2 138 · kat3 466.**
  - ABD 12/82/205 · Kanada 1/20/171 · Meksika 25/36/90.
- `kat_dayanak`: 1900-liste 100 (LISTE.tsv'deki ABD/Kanada/Meksika satırlarının tamamı) · kronolojide adı geçen merkez 310 · tarihî/idarî merkez (yalnız bilgiyle, F2'de kaynaklanacak) 232.
- `atlas_aday`: **dolu 387 · boş 255** (≤3 km; yerlesimler*.js'teki 4.9 bin noktanın Kuzey Amerika kutusuna karşı ölçüldü; `atlas_aday_km` en yakının uzaklığı). Boş 255'in çoğu 1900 büyük şehirleri ve tarihî merkezler (atlasta yok = F3'te yeni nokta adayı).
- `kron_say`: kronoloji/olaylar dosyalarında ad (ya da ≥5 harfli takma ad) geçme sayısı, ham alt-dizgi eşleşmesi (homonim gürültüsü olabilir: Columbia, Jackson, Lincoln…); >0 olan 259 satır.

## Şema (LISTE.tsv)
id · ad_modern · adlar (" > " ile tarih/dil sırası) · ulke · bolge · kat · enlem · boylam · atlas_aday · atlas_aday_km · kron_say · kat_dayanak · kaynak

## Kaynak durumu — DÜRÜST BEYAN
- **Kat (1-2) için dayanak:** 1900 listesindeki 100 satır (SYB1899 vb.) aynen alındı; ABD 1900'de kat3 boyunda ikinci kademe birim tanımlı değildi (listede ABD/Kanada/Meksika kat3 yok).
  Bu blokta **kat 3 = tanım gereği genişletildi:** (a) 1900 nüfus sayımında ≳100 bin olan ABD şehirleri, (b) kronolojide adı geçen bölge merkezi (kale, ticaret karakolu, misyon/presidio, pueblo, yerli başkent, HBC karakolu), (c) sömürge/dönem idarî merkezleri. Bu tanımı Emre onaylamadı; F2'den önce karar verilmeli.
- **Koordinat:** kamusal gazetteer sınıfı (GNIS / CGNDB / INEGI / GeoNames) değerleri **elle, ±0,02° düzeyinde girildi; hiçbir gazetteer çekilmedi/indirilmedi.** Atlas kaydı dayanak alınmadı, yalnız çapraz sağlama için kullanıldı. F2'de GeoNames/GNIS ile doğrulanmalı.
- **Adlar (`adlar`):** F1'de kaynaksızdır (akademik tanık yok); F2'de DCB / Handbook of Texas / HNAI / Gibson (Aztecs under Spanish Rule) / Tozzer vb. ile kaynaklanacak. Vikipedi dayanak yapılmadı.
- Tarih yazılmadı (F1 yalnız liste).

## Belirsizlik / sağlama bulguları
- Koordinat sağlaması (adı atlasla aynı, >3 km fark): **Los Adaes 28 km** (benim 31.74,-93.36; atlas 31.95,-93.53 — benimki Robeline yakınına uyuyor ama ±0,1° belirsiz), **Lapwai 59 km** (benim 46.40,-116.80 doğru; atlas -116.03 yanlış görünüyor → atlas düzeltme adayı), Nemaska/Nemiscau 30 km, Cahokia (atlas Cahokia Mounds'a değil, kasabaya yakın değil 14,7 km; ben ikisini ayrı yazdım: Cahokia Mounds + Cahokia/Holy Family), Michilimackinac 7,9 km, Fort Qu'Appelle 10,7 km, Sainte-Marie 8,2 km, Fort Atkinson 6,7 km, Port-la-Joye 6,1 km, Acapulco 6,4 km, Onondaga 6,3 km. Hepsi F2'de gazetteer ile ölçülmeli.
- Kesin olmayan yer (±0,1° ve üstü): Los Adaes, Ossossané/Huronia (Sainte-Marie yazıldı), Coweta, Tuskahoma, Isleta del Sur, Fort Boise, Snaketown, Celilo, Nemaska, Tlaxiaco.
- Atlasta olup bu listede **olmayanlar** (koordinat/ad teyidi gerekir, F1'e alınmadı): Büyük Ovalar/Comanchería/Kanada Arktiği gibi bölge noktaları (şehir değil), Mohawk-Seneca-Cayuga-Oneida konfederasyon köyleri, Chota, Kituwa, Etowah, Moundville, Ocmulgee, Poverty Point, Nanih Waiya, Coweta (Güneydoğu yerli merkezleri; kat1 adayı), Kaktovik/Nuiqsut/Point Hope/Tikiğaq vb. Kuzey Alaska köyleri, Cumberland House dışı bazı iç HBC karakolları, Hawaii adalarını bölgeler olarak tutan kayıt. Bunlar F2 ilk dalgasına eklenmeli (çoğu atlasta zaten var, kimlik eşlemesi yapılacak).
- Kuzey Amerika'da ama bu bloğun dışında: Grönland (Nuuk/Sandnes), Bermuda, Karayipler — diğer blok/ülkeye bırakıldı.
- Satır sayısı hedefin altında olabilir: ABD ilçe (county) merkezleri bilerek alınmadı (kat3 tanımı yukarıda).

## İndirme gerekiyor (ben indirmedim)
- GeoNames `US.zip` / `CA.zip` / `MX.zip` (ya da USGS GNIS, NRCan CGNDB, INEGI gazetteer) — koordinat toplu doğrulaması için.
- Statesman's Year-Book 1899'da ABD/Meksika/Kanada kat dayanağı zaten LISTE.tsv'de; ek indirme gerekmiyor.

## F2 için öneri (öncelik)
1. Kat 1-2 olup atlas_aday dolu olanlar (Washington, Ciudad de México, eyalet/vilayet başkentleri) — sahiplik zinciri zaten atlas içinde kurulur.
2. Kronolojide en çok geçenler (`kron_say` büyükten): New Orleans, Santa Fe, Montréal, Québec, St. Louis, Detroit, Monterey, Cincinnati, Louisbourg, Philadelphia, Boston, Charleston, Savannah.
3. Yerli başkentler (kat1): Cahokia Mounds, Onondaga, Werowocomoco, Natchez Grand Village, Tzintzuntzan, Texcoco, Tlacopan, Tlaxcala, Mayapán, Chichén Itzá, Calakmul, Teotihuacan, Monte Albán — arkeolojik başlangıç + yazılı ilk anılış kuralı (VERI-YAPISI §sehir_tarihce) gerektirir.
4. HBC/Yeni Fransa karakolları (York Factory, Moose Factory, Fort Albany, Grand Portage, Michilimackinac, Fort Chipewyan) — kuruluş günleri DCB'de net.
