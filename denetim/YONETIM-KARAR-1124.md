# Ziyaretçi günlüğü + yönetim paneli — KARAR (Emre, 23-24 Kasım 2026)

Kaynak: Emre ile bu oturumdaki konuşma. Konu: BORC-DEFTERI A21.

## Kararlar
1. **Kapsam: B + C birlikte.**
   - B: giriş yapmayanlar da izlenir; tarayıcıda üretilen rastgele takma numara (localStorage) ile.
     **IP, ad, e-posta, telefon, makine adı SAKLANMAZ.** Çerez silinirse ya da başka tarayıcıdan gelinirse yeni kişi sayılır.
   - C: giriş yapanlar (üyelik/forum hesabı) kullanıcı adıyla izlenir ve istatistiğe girer (giriş altyapısı
     `giris-altyapi` oturumundan; aynı Supabase projesi `kronoatlas`).
   - D (IP + cihaz parmak izi) YAPILMAYACAK (kişisel veri, doğruluğu düşük).
2. **Yönetim paneli:** yalnız Emre (yönetici rolü). Ayrı sayfa `yonetim/`; ana sitenin açılışına yük bindirmez.
   Rol `profiller.rol = 'yonetici'` (forum_f1.sql); Emre'nin hesabına elle atanır.
3. **Saklama: 12 ay.** Ayrıntılı olay kaydı 12 aydan sonra silinir (günlük toplu özet kalabilir; kişi numarası içermez).
4. **Bildirim:** ilk açılışta kısa çerez/istatistik bildirimi. Emre "kabul et bildirimi" dedi; hukuken sağlam olması için
   **Kabul / Reddet** iki düğmeli yapılacak: Reddedenin hiçbir şeyi (numara, olay) kaydedilmez. Gizlilik sayfasına link,
   silme/itiraz yolu (kendi numarasını "verilerimi sil" ile siler).
5. **Ölçülecek olaylar (öneri listesinin hepsi):** açılış, kronoloji/sayfa seçimi, kronolojide kalma süresi, oynatma,
   uçuş kipi, dil, cihaz türü, kaba ülke (şehir YOK). Ülke sunucu tarafında IP'den türetilir, ham IP yazılmaz.
6. **Hizmet:** mevcut Supabase ücretsiz katmanı (500 MB). Olaylar tarayıcıda biriktirilip toplu gönderilir
   (`sendBeacon`). Ölçülmedi: gerçek trafikte doluluk; gerekirse eski ayrıntı özetlenip silinir.
7. **Güvenlik:** tablolarda RLS: herkes yalnız EKLER, yalnız yönetici OKUR. `service_role` anahtarı repoya yazılmaz.

## Uygulama sırası
1. Tablo şeması + toplama istemcisi iskeleti + kurulum rehberi (karar-bağımsız hazırlık).
2. Çerez bildirimi + toplama istemcisi (geç yüklenir, 21 dil çevirisi).
3. `yonetim/` paneli.
4. Gizlilik metni eki (saklama, takma numara, silme yolu).

## Açık
- Meta/Google/Azure (Microsoft) girişi: `denetim/GIRIS-KURULUM-1124.md` (giris-altyapi dalı) — Emre'nin tıklamaları.
