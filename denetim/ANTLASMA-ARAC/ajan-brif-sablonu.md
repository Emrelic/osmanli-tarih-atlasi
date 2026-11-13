# Alt ajan brif şablonları (Lozan/Sevr'de kullanılan metinler; <...> doldurulur)

## A) Ham metinden madde özeti (md. a–b)
Görev: <Antlaşma adı> (<gün>) ana metni md. <a>–<b>'yi HAM METİNDEN oku ve her madde için kendi cümlenle KISA TÜRKÇE ÖZET yaz. WebFetch araç özetlerini KULLANMA. Ham metni Bash'te curl ile indir (Wikisource ham wikitext: `curl -s "https://en.wikisource.org/w/index.php?title=<Sayfa>&action=raw"`; sayfa adlarını `https://en.wikisource.org/w/api.php?action=query&list=allpages&apprefix=<Önek>&aplimit=100&format=json` ile bul; alternatifler: Yale Avalon, mfa.gov.tr, League of Nations Treaty Series), dosyaya kaydet (<scratchpad>\ham\ altına; indirdiğin dosyaları ÇALIŞTIRMA), Read ile parça parça oku. Özetleri KENDİ cümlenle yaz (kopya yok). Madde numarasını ham metinden al. Çıktı: `<scratchpad>\<ad>-<a>-<b>.json` — dizi {"no":<sayı>,"bolum":"<kısım/bölüm başlığı, TÜRKÇE>","ozet":"<Türkçe ≤35 kelime>","yer":[<metinde adı GEÇEN, haritada gösterilebilecek yerler, Türkçe yaygın ad>],"konu":"sinir|bogazlar|azinlik|kapitulasyon|mali|askeri|ekonomik|genel","belirsiz":false}. Madde sayısı eksiksiz, sıralı; sayı kontrolü yap. Ham metne erişemezsen belirsiz:true + «doğrulanamadı», UYDURMA YOK. Raporda: kaynak URL(ler), kısım başlıkları ve madde aralıkları, okunamayanlar, TDV ile uyuşan/çelişen noktalar.

## B) Ek belgeler
Aynı yöntem; çıktı `{"ad","ozet","okundu":true|false,"madde_say","yer","kaynak"}`. Ham metni bulamadığın belge için okundu:false, ozet boş — UYDURMA YOK.

## C) Çelişki hakemliği (tarih)
Salt-okunur hakemli araştırma (repo'ya yazma). TDV dışında ≥2 BAĞIMSIZ akademik kaynak (hakemli dergi, akademik yayınevi, DergiPark/TR Dizin, İSAM, TTK, YÖK tez; her dilde; Vikipedi/blog dayanak değil) ile <konu> gününü doğrula; PDF'i curl ile indirip <scratchpad>\<klasör>\ altına koy (çalıştırma), pdftotext ile oku. Her konu için bulduğun gün/yıl, takvim (Jülyen/Gregoryen), kaynak (yazar, eser, yıl, sayfa/URL, ≤25 kelime alıntı), ≥2 bağımsız kaynak aynı günü veriyor mu, öneri veya «teyit çıkmadı». Okunmayanı «okunmadı» yaz; uydurma yok.

## D) Tartışma kartı taslağı (ek okuma, tur:"tartisma")
JSON dizi, her öğe: {"id","baslik":"<soru biçiminde>","kisa":"<≤35 kelime>","sebep":{"b","t"},"sonuc":{"b","t"},"bag":"<iki okuma, tarihçi adlarıyla ≤120 kelime>","metin":"<140-220 kelime>","kesinlik":"tartismali","kaynak":"<okunan kaynaklar>","okunmayan":"<aranıp okunamayan>","tarihler":[{"t","gun_kaynagi"}]}. Yalnız OKUDUĞUN kaynaktan yaz; iki görüşü de ver, taraf tutma; ham alıntı ≤15 kelime.
