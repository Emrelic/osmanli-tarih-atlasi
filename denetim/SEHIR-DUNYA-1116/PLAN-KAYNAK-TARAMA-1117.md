# Şehir kronolojisi: ülke bazlı akademik kaynak taraması planı (17 Kasım 2026, EMRELİC)

Emre'nin emri: tüm devletlerin, tüm dillerdeki akademik/bilimsel/itibarlı kaynakları (site, arşiv, dergi) şehir bazında taranarak şehir kronolojileri bitirilecek.

## Aşama 0 — Kaynak haritası (ülke × dil × kaynak)
Her bölge sahibi makine, kendi bölgesindeki her ülke için `denetim/SEHIR-DUNYA-1116/KAYNAK-HARITASI-<bolge>.tsv` yazar:
ülke | dil | kaynak adı | tür (ansiklopedi/dergi/arşiv/tez/yerel tarih) | URL | tam gövde okunabiliyor mu (E/H) | şehir bazlı sorgulanabilir mi | örnek sorgu.
Ölçüt: akademik, hakemli ya da kurumsal; Vikipedi/blog/forum yok. Erişilemeyen kaynak "okunamadı" yazılır, sayılmaz.

## Aşama 1 — Şehir × kaynak taraması
Her şehir için sırayla: ulusal ansiklopedi (TDV, Treccani, Britannica, Iranica, Hrčak, Persée, IBGE, Diccionario Biográfico vb.) → ülkenin akademik dergileri → arşiv/katalog neşirleri → tezler. Her şehir en az 2 bağımsız kaynakla; çelişkide 3./4. kaynak (hakemli karar kuralı).
Çıktı: `data/sehir_tarihce_<blok>.js` (ilk anılış, kuruluş, sahiplik, olay, çok dilli adlar).

## Aşama 2 — Ad eşdeğer tablosu
Her şehir için dil × dönem adları (İstanbul: Byzantion, Konstantinoupolis, Constantinopolis, Konstantiniyye, Dersaadet, Âsitâne, Çargrad, Nova Roma, Payitaht…) `adlar` alanına; kaynaklı.

## Aşama 3 — Örtüşme
Şehir olayları devlet kronolojileriyle Değişmez 2 ölçümünden geçer.

## Bölge dağılımı (mevcut sorumluluk)
HAVVA: Yakın Doğu, Balkanlar, Doğu Avrupa, Sibirya · UMIT: Mağrip/Mısır, Kuzey Avrupa, Karayip/Orta Amerika, İran/Kafkasya · LAB: Hint, Orta Asya, Afrika · KASA: Kuzey Amerika (+ kapı) · EMRELİC: Doğu Asya, Okyanusya/GD Asya, Güney Amerika.

## Engeller (Emre'nin kararı gerek)
- İndirme izni yalnız EMRELİC oturumunda; diğer oturumlara Emre'nin kendi sohbetlerine yazması gerek.
- Engelli kaynaklar: DergiPark arama (CAPTCHA), JSTOR, Academia, CEEOL. CAPTCHA aşılmaz; açık erişimli alternatif aranır.
- Tüm makinelerin çevrimdışı olması: oturumlar açılmadan dağıtım yapılamaz.
