# Üyelik (giriş / üye ol) — Emre'nin kurulum rehberi

Kod hazır ve yayına alınabilir; ama **dış hesapları ve anahtarları yalnız sen açabilirsin**. Aşağıdaki
adımları sırayla yaparsan sitedeki "Giriş / Üye ol" düğmesi tam çalışır. Her adım bağımsızdır: yaptığın
kadarı çalışır, yapmadığın düğme sitede hiç görünmez (ölü düğme yok).

> **Önemli bilgi:** Forum için açtığın Supabase projesi (`kronoatlas`, Frankfurt) zaten var ve ana site
> **aynı projeyi** kullanıyor. Yani yeni proje açmana gerek yok; kullanıcı tablosu, e-posta/şifre girişi ve
> forum oturumu ortak. Sitede kimse "iki ayrı hesap" görmez.

## 🔁 PANEL KURULUNCA GERİ YAZ (url ve anonAnahtar şu an BOŞ)
KASA kararı (24 Kasım): Supabase'te `auth_f2.sql` şeması ve e-posta ayarları kurulu olmadığından ilk yayında
`data/auth_ayar.js` içindeki `url` ve `anonAnahtar` **boş** gönderilir: "Giriş" düğmesi açılır, "henüz
yapılandırılmadı" bilgisi gösterir, hiçbir ağ isteği atmaz. Aşağıdaki ⭐ adımları (özellikle 1–3) bitince
`data/auth_ayar.js` içine şu iki satırı geri yaz (ikisi de herkese açık değerdir, gizli değil; forum ile aynı proje):
```
  url: "https://avwiwpzglhkxgabhwcuh.supabase.co",
  anonAnahtar: "sb_publishable_a9MGXvwnbphMoN0cvYL50A_w8MHLmDx",
```
Sonra `py arac/surum_damgala.py` ve normal kapı yolu. (Değerler `forum/ayar.js` ile aynıdır; oradan da kopyalanabilir.)

## ⭐ İLK YAYIN: yalnız e-posta + şifre (+ kullanıcı adı) — Emre'nin kararı, 24 Kasım
Sitede Google/Microsoft/Facebook düğmeleri **gizli** (`data/auth_ayar.js` → `saglayicilar` hepsi `false`; kod silinmedi,
bayrağı `true` yapınca açılır). İlk yayın için yalnız şunları yap (hepsi ücretsiz, dış hesap yok):
1. **§1** SQL: Supabase → SQL Editor → `supabase/auth_f2.sql` dosyasının tamamını yapıştır → Run.
2. **§2** Authentication → URL Configuration: Site URL `https://kronoatlas.com`; Redirect URLs'e
   `https://kronoatlas.com/**` ve `https://www.kronoatlas.com/**` ekle.
3. **§3** Authentication → Sign In / Providers → Email: **Confirm email AÇIK**, minimum şifre uzunluğu **10**.
4. **§3** Authentication → Email Templates: "Confirm signup", "Magic Link", "Reset Password" şablonlarını bu rehberdeki
   Türkçe metinlerle değiştir.
5. (Gerçek kullanıcı gelmeden) §3 sonundaki SMTP ayarı: kendi posta servisini bağla (Supabase'in yerleşik postası saatte
   çok az mektup yollar).
6. Kayıtta kullanıcı adı **hemen çalışır** (adım 1 yeterli). Kullanıcı adıyla **GİRİŞ** ise ayrı bir sunucu parçası ister
   (§7); yapana dek giriş kutusu yalnız e-posta kabul eder, hiçbir şey bozulmaz.
7. `gizlilik/index.html` içindeki **[DOLDURULACAK]** veri sorumlusu bilgisini yaz.
Şifresiz giriş (e-postaya bağlantı + kod) da dış hesap istemez ve açıktır; istemezsen söyle, düğmeyi gizlerim.
§4-§6 (Google/Microsoft/Facebook), §8 (robot koruması) ve §9 sonraya kalabilir.

Sıra: **§1 SQL → §2 Adresler → §3 E-posta şablonları → §4-§6 Google/Microsoft/Facebook → §7 Kullanıcı adı
ile giriş → §8 Robot koruması → §9 Temizlik → §10 Sitede açma**

---

## 1. Veritabanı eki (5 dakika) — ZORUNLU
1. https://supabase.com/dashboard → proje **kronoatlas** → sol menü **SQL Editor** → **New query**.
2. Depodaki `supabase/forum_f1.sql` zaten koşmuştu. Şimdi `supabase/auth_f2.sql` dosyasının **tamamını**
   yapıştır → **Run**. (Tekrar çalıştırmak zararsızdır.)
3. Ne yapar: rıza kaydı sütunları, "kullanıcı adı müsait mi" sorgusu, "hesabımı sil", "verilerimi indir",
   hız sınırı tablosu.

## 2. Yönlendirme adresleri (e-posta bağlantıları ve sosyal girişin geri dönüşü için)
Supabase → **Authentication → URL Configuration**:
- **Site URL:** `https://kronoatlas.com`
- **Redirect URLs** (hepsini ekle): `https://kronoatlas.com/**`, `https://www.kronoatlas.com/**`,
  `http://localhost:8765/**` (yerel deneme için; istersen sonra sil)

Sitedeki izinli adres listesi `data/auth_ayar.js` → `izinliKokenler`dedir; ikisi aynı olmalı.

## 3. E-posta ayarları ve Türkçe şablonlar
Supabase → **Authentication → Sign In / Providers → Email**:
- **Confirm email: AÇIK** (doğrulanmadan giriş yok — kod buna göre yazıldı)
- **Secure password change: açık** · **Minimum password length: 10**
- (Pro planda) **Prevent use of leaked passwords: açık.** Ücretsiz planda site bunu kendisi yapar
  (HIBP k-anonimlik kontrolü), yani zorunlu değil.

Supabase → **Authentication → Email Templates**. Beş şablonu şunlarla değiştir (Konu + gövde):

**Confirm signup**
- Konu: `KRONOATLAS — e-postanızı doğrulayın`
- Gövde:
```
<h2>KRONOATLAS'a hoş geldiniz</h2>
<p>Hesabınızı etkinleştirmek için aşağıdaki bağlantıya tıklayın:</p>
<p><a href="{{ .ConfirmationURL }}">E-postamı doğrula</a></p>
<p>Bu işlemi siz yapmadıysanız bu e-postayı yok sayabilirsiniz.</p>
```

**Magic Link** (şifresiz giriş — hem bağlantı hem kod gider)
- Konu: `KRONOATLAS — giriş bağlantınız`
- Gövde:
```
<h2>KRONOATLAS giriş</h2>
<p>Giriş yapmak için tıklayın: <a href="{{ .ConfirmationURL }}">Giriş yap</a></p>
<p>Ya da bu kodu giriş penceresine yazın: <strong>{{ .Token }}</strong></p>
<p>Bağlantı ve kod kısa süre geçerlidir. Siz istemediyseniz yok sayın.</p>
```

**Reset Password**
- Konu: `KRONOATLAS — şifre sıfırlama`
- Gövde: `<p>Şifrenizi sıfırlamak için: <a href="{{ .ConfirmationURL }}">Yeni şifre belirle</a></p><p>Siz istemediyseniz yok sayın; şifreniz değişmez.</p>`

**Change Email Address** ve **Invite**: aynı mantıkla Türkçeleştir (`{{ .ConfirmationURL }}` kalsın).

Supabase'in kendi e-posta servisi **saatte az sayıda** postayla sınırlıdır (ücretsiz). Gerçek kullanıcı
gelmeden **Authentication → SMTP Settings**'ten kendi posta servisini bağla (ör. Resend, Brevo, Gmail
uygulama şifresi) ve gönderen adını `KRONOATLAS <iletisim.kronoatlas@gmail.com>` yap.

## 3b. Dış hesabın yoksa nasıl açılır (Google · Microsoft · Meta)
Sıra önerisi: önce §1-§3 (dış hesap gerektirmez: e-posta+şifre, doğrulama, kullanıcı adı, şifresiz bağlantı/kod),
sonra Google, Microsoft, Facebook.
- **Google:** bir Gmail hesabın varsa https://console.cloud.google.com adresine o hesapla gir; ek hesap/ücret yok.
- **Microsoft (Azure/Entra):** hesabın yoksa https://signup.live.com ile ücretsiz Microsoft hesabı aç (Hotmail/Outlook
  adresi olur). Sonra https://portal.azure.com'a o hesapla gir; ilk girişte "ücretsiz Azure hesabı" kurulumu kredi kartı
  doğrulaması isteyebilir (para çekmez; uygulama kaydı ücretsizdir). Kart istemezse atlanabilir mi diye ekranda bak;
  isterse **sen** gir, ben giremem. Ardından Microsoft Entra ID → App registrations (§5).
- **Meta (Facebook):** kişisel Facebook hesabın olmalı; https://developers.facebook.com → **Get Started** → telefon/e-posta
  doğrulaması → geliştirici hesabı. **İş (business) doğrulaması gerekmez:** yalnız `email` ve `public_profile` izniyle
  (standart erişim) uygulama Live olabilir; iş doğrulaması yalnız ileri düzey izinler içindir. Live için gerekenler:
  uygulama simgesi, gizlilik politikası adresi (`https://kronoatlas.com/gizlilik/`), kategori, veri silme adresi.
  Bu hesabı kişisel Facebook'unla açman gerekir (sahte hesap açılmaz, Meta kuralı).

## 4. Google ile giriş
1. https://console.cloud.google.com → yeni proje "KRONOATLAS".
2. **APIs & Services → OAuth consent screen**: Uygulama adı KRONOATLAS, destek e-postası, alan adı
   `kronoatlas.com`, gizlilik bağlantısı `https://kronoatlas.com/gizlilik/` → kaydet → **Publish app**.
3. **Credentials → Create credentials → OAuth client ID → Web application.**
   - Authorized JavaScript origins: `https://kronoatlas.com`
   - Authorized redirect URIs: Supabase'in **Authentication → Providers → Google** sayfasında yazan
     **Callback URL** (`https://avwiwpzglhkxgabhwcuh.supabase.co/auth/v1/callback`) — aynen kopyala.
4. Çıkan **Client ID** ve **Client secret**'ı Supabase'te Google sağlayıcısına yapıştır → **Enable → Save**.
   (Client secret **yalnız Supabase'e** girer; depoya ASLA yazılmaz.)
5. `data/auth_ayar.js` → `saglayicilar.google: true`.

## 5. Microsoft ile giriş (Windows, Outlook, Hotmail hesapları)
1. https://portal.azure.com → **Microsoft Entra ID → App registrations → New registration.**
2. Ad: KRONOATLAS · **Supported account types: "Accounts in any organizational directory and personal
   Microsoft accounts"** (Hotmail/Outlook için şart) · Redirect URI (Web): Supabase'in Azure sağlayıcı
   sayfasındaki Callback URL.
3. **Certificates & secrets → New client secret** (süresi 24 ay; **bitiş tarihini takvime yaz**, dolunca
   giriş durur). Secret'ın **Value** kısmını kopyala (bir kez görünür).
4. Supabase → Providers → **Azure**: Application (client) ID, secret value, ve **Azure Tenant URL** =
   `https://login.microsoftonline.com/common/v2.0` → Enable → Save.
5. `saglayicilar.azure: true`.

## 6. Facebook ile giriş (Instagram'ı da bunun üzerinden karşılıyoruz — bkz. Tasarım belgesi §5)
1. https://developers.facebook.com → **My Apps → Create App** → "Authenticate and request data from users
   with Facebook Login" → ad KRONOATLAS.
2. **Settings → Basic**: App domains `kronoatlas.com`, gizlilik politikası `https://kronoatlas.com/gizlilik/`,
   **Data deletion**: "Data deletion instructions URL" olarak yine gizlilik sayfası (hesap silme orada).
3. **Facebook Login → Settings → Valid OAuth Redirect URIs**: Supabase'in Facebook Callback URL'si.
4. App ID ve App Secret'ı Supabase → Providers → **Facebook**'a gir → Enable → Save.
5. Uygulamayı **Live** yap (Development kipinde yalnız rol verdiğin kişiler girebilir). Yalnız "email" ve
   "public_profile" izni gerekir; onlar için Meta incelemesi gerekmez.
6. `saglayicilar.facebook: true`.

İsteğe bağlı **Apple** (yıllık 99 $ geliştirici üyeliği ister) ve **GitHub** (ücretsiz; Settings →
Developer settings → OAuth Apps) aynı mantıkla eklenir; sonra `saglayicilar.apple/github: true`.

## 7. Kullanıcı adı ile giriş (Edge Function)
Neden ayrı bir sunucu parçası? Kullanıcı adından e-postayı tarayıcıda çözersek herkes "ad → e-posta"
listesi çekebilir. Bu yüzden çözüm ve şifre denemesi sunucuda yapılır, tarayıcıya yalnız oturum döner.
1. Bilgisayarında bir kez: `npm i -g supabase` (ya da https://supabase.com/docs/guides/cli).
2. Depo klasöründe: `supabase login` → `supabase link --project-ref avwiwpzglhkxgabhwcuh`
3. `supabase functions deploy kullanici-girisi`
4. (Önerilen) Panelde Edge Functions → kullanici-girisi → **"Verify JWT" açık kalsın** (varsayılan).
5. `data/auth_ayar.js` → `kullaniciAdiGirisi: true`.
Kapalıyken giriş kutusu yalnız e-posta ister (düzgün çalışmaya devam eder).

## 8. Robot koruması (Cloudflare Turnstile — ücretsiz)
1. https://dash.cloudflare.com → **Turnstile → Add site** → alan adı `kronoatlas.com` (yerel deneme için
   `localhost`) → Widget: Managed.
2. **Site key** (herkese açık) → `data/auth_ayar.js` → `turnstileSiteKey`.
3. **Secret key** → Supabase → **Authentication → Attack Protection → Enable Captcha → Cloudflare
   Turnstile** → secret'ı yapıştır → Save. (Secret yalnız burada durur.)
Aynı sayfada **Rate limits** değerlerine bak (varsayılanlar iyi; e-posta gönderimi saatlik sınırı SMTP
bağlayınca artırılabilir).

## 9. Temizlik görevi (isteğe bağlı ama aydınlatma metni buna dayanıyor)
Aydınlatma metni "doğrulanmamış hesaplar en geç 30 gün içinde silinir" diyor. Supabase → Database →
Extensions → **pg_cron** aç; sonra SQL Editor'da `supabase/auth_f2.sql` içindeki **yorumlu** `cron.schedule`
satırını (§6) yorumdan çıkarıp çalıştır. Yapmazsan metindeki cümleyi 30 günlük temizlik yok diye değiştir.

## 10. Siteye açma
1. `data/auth_ayar.js` değerleri (sağlayıcı bayrakları, site key, `kullaniciAdiGirisi`) güncellendikten
   sonra bu dosya `main`e iner (KASA kapıdan geçirir).
2. Sınama listesi (kronoatlas.com'da, gerçek hesabınla):
   - [ ] Üye ol → doğrulama e-postası geldi mi, bağlantı seni içeri aldı mı
   - [ ] Çıkış → e-posta + şifre ile giriş
   - [ ] "Şifremi unuttum" → yeni şifre
   - [ ] "Şifresiz giriş" → bağlantı ve kod ikisi de çalışıyor mu
   - [ ] Google / Microsoft / Facebook düğmeleri
   - [ ] Kullanıcı adıyla giriş
   - [ ] Forum'a gidince oturum açık mı (ortak oturum)
   - [ ] Hesabım → Verilerimi indir · Hesabımı sil (sınama hesabıyla)
3. `gizlilik/index.html` içindeki **[DOLDURULACAK]** veri sorumlusu bilgisini yaz; metni bir hukukçuya
   (ya da en azından kendin) oku. Metin taslaktır.

## Elle yapman gereken özet liste
Supabase SQL (1 dosya) · yönlendirme adresleri · 5 e-posta şablonu · (önerilen) SMTP · Google Cloud
OAuth · Azure uygulaması · Meta uygulaması · Cloudflare Turnstile · Edge Function dağıtımı · pg_cron.
Hepsi ücretsiz katmanda yapılabilir (Apple hariç).
