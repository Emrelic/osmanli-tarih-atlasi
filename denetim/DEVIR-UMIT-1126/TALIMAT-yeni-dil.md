# YENİ DİL ÇEVİRİSİ (26 Kasım 2026)

Osmanlı Tarih Atlası (eğitim sitesi). Kaynak: Türkçe. Hedef dil görevinde yazar. Kodlar: sq Arnavutça (standart) ·
bs Boşnakça/Hırvatça/Sırpça için TEK metin: Latin alfabesi, ijekavica, Boşnakça standart, üç okura da doğal ·
hy Doğu Ermenicesi (standart, Ermeni alfabesi) · ka Gürcüce (Mkhedruli) · ku Kurmancî Kürtçesi (Latin, Hawar imlası).

Paketler `...\scratchpad\yeni\` kökünde (ortak): `arayuz_NN.txt` / `devlet_NNN.txt` satır: `N<TAB>"Türkçe"`;
`olay_NNN.txt` satır: `N<TAB>{"b":"başlık","d":"açıklama"}` (d olmayabilir). Dizgeler JSON kaçışlı.
Senin klasörün: `...\scratchpad\yeni\<kod>\`. Yalnız oraya yaz. Depo/git'e DOKUNMA; python/node koşturma (Read + Write; `date` serbest).

## Kurallar
- Anlam birebir; sayı, tarih, yüzyıl, özel ad eksiksiz; bilgi ekleme/çıkarma yok. Doğal, akıcı, tarih yazımına uygun dil.
- `#` yer tutucuları (sayısı ve işlevi), {…}, HTML etiketleri, simge/emoji, satır sonları aynen. Arayüzde kısa kalıp kısa kalır.
  Parçalı arayüz dizgeleri bir cümlenin parçası olabilir; sırayı bozma.
- Özel adlar hedef dilin yerleşik tarih yazımı biçimiyle; hedef alfabe Latin değilse adlar da o alfabeye çevrilir
  (kaynak atıflarındaki yazar/eser/site adları, kodlar Latin kalabilir). Osmanlı terimleri tutarlı (sancak, beylerbeyi, timar…).
  Hassas konularda (Ermeni, Kürt, Balkan tarihi, sürgün, katliam) Türkçedeki ifadeye sadık, yansız kal; terim değiştirme, ekleme yapma.
- AD SÖZLÜĞÜ: klasöründeki `sozluk*.md` dosyalarını işe başlamadan oku ve uy (varsa). Kendi eklediklerini
  yalnız `sozluk_<ETIKET>.md` dosyana yaz (aylar, hicrî aylar, sık devlet türleri, sık kişi/yer adları, terimler). İlk 1-2 paketten sonra
  sözlüğünü hemen kaydet ki paralel ajanlar kullanabilsin.
  **Sözlükler çelişirse `sozluk_a.md` ESASTIR**; orada yoksa en erken harfli sözlük. Esasa ayrı biçim yazma.

## Çıktı (her paket için AYRI dosya, paketi bitirir bitirmez yaz)
- arayüz: `c_arayuz_NN.jsonl` → `{"n":N,"m":"çeviri"}`
- devlet: `c_devlet_NNN.jsonl` → `{"n":N,"m":"ad"}`
- olay: `c_olay_NNN.jsonl` → `{"n":N,"b":"başlık","d":"açıklama"}` (kaynakta d yoksa d yazma)
Paketteki HER satır için bir çıktı satırı. Geçerli JSON (iç çift tırnak `\"`, satır sonu `\n`).
Aralığını sırayla yap. Bağlamın dolmaya yaklaşırsa son paketi kaydet ve dur; yapamadığın paketi açıkça yaz. Çıktısı
zaten var olan paketi atla. Alt ajan açma.
Son cevap en çok 4 satır: yazılan paket aralığı, yapılmayan, sorun.
