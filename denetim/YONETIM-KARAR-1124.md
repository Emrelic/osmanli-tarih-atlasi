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
- **Giriş sağlayıcıları ilerleme (24 Kasım):** Supabase: SQL (auth_f2) çalıştı, Site URL + 4 yönlendirme adresi, şifre ≥10,
  Google = ENABLED. Google Cloud hesabı `iletisim.kronoatlas@gmail.com`, proje KRONOATLAS (`tribal-bay-515611-g2`),
  OAuth istemcisi oluşturuldu (secret yalnız Supabase'de). **Google "Publish app" BEKLİYOR:** Branding sayfasında gizlilik
  politikası adresi (`https://kronoatlas.com/gizlilik/`, giris-altyapi dalında, main'de YOK) + yetkili alan adı gerekiyor;
  test kipinde yalnız eklenen test kullanıcıları girer. Sıra: gizlilik sayfası yayına inince Branding'i doldur, Publish.
  Microsoft (Azure): Entra uygulaması KRONOATLAS (Client ID 34bed9dd-6a45-4a9b-85eb-ea7bb1d7fff3), secret 730 gün,
  **BİTİŞ 22.11.2028 — takvime yaz**, dolunca Microsoft girişi durur; Supabase Azure = ENABLED. Meta henüz yapılmadı. SMTP + e-posta şablonları yapılmadı (şablon düzenleme SMTP ister).
- **Alan adı e-postası (Emre, 24 Kasım):** `iletisim@kronoatlas.com` açılacak; gelen posta Gmail'e yönlenecek
  (Cloudflare Email Routing ya da benzeri), giden için SMTP (Resend/Brevo, SPF+DKIM). Sıra: önce giriş sağlayıcıları
  (Google/Microsoft/Meta), SONRA bu. Ölçülmedi: `kronoatlas.com` alan adının alındığı firma ve DNS'in yönetildiği yer.
  Geçici adres: `iletisim.kronoatlas@gmail.com` (Google destek e-postası, gizlilik sayfası). Geçişte Google destek adresi,
  Supabase SMTP gönderen adı ve gizlilik sayfası değişir.
- Meta/Google/Azure (Microsoft) girişi: `denetim/GIRIS-KURULUM-1124.md` (giris-altyapi dalı) — Emre'nin tıklamaları.
