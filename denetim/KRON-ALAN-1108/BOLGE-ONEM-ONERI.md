# `bolge_onem` — ÖNERİ (veriye yazılmadı) · KRON-ALAN-1108, 8 Kasım 2026

## Durum (ölçüm)
- `bolge_onem` alanı hiçbir maddede yok. Yakın alanlar: `onem` (1-5, 15.171 madde), `dunya` (1-5, 15.093),
  `bolge` (1-5, 3.109 madde; **yalnız `kapsam:"dis"`te ve "Osmanlı'yı ne kadar ilgilendiriyor" anlamında**).
- `bolge` adı ile `bolge_onem` karışmasın: `bolge` Osmanlı'ya yakınlıktır, olayın kendi coğrafyasındaki ağırlığı değildir.

## Önerilen tanım
`bolge_onem` (1-5, tamsayı, isteğe bağlı): olayın **kendi coğrafî bölgesi** (kıta altı kültür-siyaset alanı:
Balkanlar, Anadolu, Mısır-Levant, İran-Turan, Hint, Çin-Doğu Asya, Batı Avrupa, Sahra-altı vb.) için ağırlığı.
Üçlü ölçek: `onem` = kendi devleti/bağlamı · `bolge_onem` = kendi bölgesi · `dunya` = bütün dünya.
- 5 bölgenin tarihini yeniden çizer (bölgesel imparatorluğun kuruluşu/yıkılışı, bölge çapında savaşın sonucu)
- 4 bölgede birden çok devleti etkiler
- 3 bir alt bölgede bilinen, komşuları etkiler
- 2 tek devlet içinde kalır, bölgede duyulmaz
- 1 yerel
Tutarlılık beklentisi: `onem ≤ bolge_onem ≤ dunya` DEĞİL (bir iç olay yerel kalıp devleti için büyük olabilir); yalnız
`dunya ≥ 4` ⇒ `bolge_onem ≥ 4` (dünyayı etkileyen olay bölgesinde de ağır basar) sınanır.

## Türetme kuralı (mekanik taslak)
1. Bölge anahtarı: `yer_id`/`odak_yer`in düştüğü bölge (`data/bolgeler.js`) ya da `kapsam:"ic"` ise Osmanlı çekirdeği.
2. Başlangıç değeri: `bolge_onem = round((onem + dunya) / 2)`; `onem`/`dunya` yoksa **yazma**.
3. Yükselt: `dunya ≥ 4` ⇒ en az 4. `tur` ana türü `toprak-degisimi`/`siyasi` (devlet kuruluş/yıkılış) ve `onem=5` ⇒ en az 4.
4. Düşür: `hanedan-kisi`/`kultur-sanat` ana türü ve `dunya ≤ 1` ⇒ en çok 2.
5. Yalnız **onem ve dunya ikisi de dolu** maddelere uygula; belirsiz kalanlar `BELIRSIZ.md`de.
Önkoşul: `onem`/`dunya` boşlukları kapanmadan (şu an 2.833 / 2.911 boş) türetme maddelerin yaklaşık %16'sını
kapsamaz. Pilot sınama önerisi: 100 maddeyi iki bağımsız puanlayıcıya ver, uyum ≥%90 değilse alan açılmasın.

## Uygulama için gerekenler
`VERI-YAPISI.md` alan tablosu + `arac/denetle_kronoloji.py` şema denetimi (1-5) + `suzgec.js` kullanımı Emre onayından
sonra. Bu oturum hiçbirine dokunmadı.
