# Üyelik altyapısı — tasarım, güvenlik ve bilinenler (24 Kasım 2026)

Kod: `js/auth.js` (arayüz+mantık) · `css/auth.css` · `data/auth_ayar.js` (ayar) · `gizlilik/index.html`
· `supabase/auth_f2.sql` · `supabase/functions/kullanici-girisi/index.ts` · `arac/auth_sahte_sb.js` (sınama).
Kurulum (Emre'nin tıklamaları): `denetim/GIRIS-KURULUM-1124.md`.

## 1. İlk ölçüm: sitede zaten ne vardı?
`forum/forum.js` **zaten** Supabase Auth kullanıyor (proje `avwiwpzglhkxgabhwcuh`, Frankfurt;
e-posta+şifre, doğrulama postası, şifre sıfırlama, `profiller` tablosu, tetikleyiciyle profil açma, PKCE).
Ana sitede (`js/`) oturum kodu **yoktu**. Karar: **çoğaltma yok, aynı projeyi ve aynı oturumu paylaş.**
Aynı köken (kronoatlas.com) + aynı supabase-js varsayılan depo anahtarı (`sb-<proje>-auth-token`) ⇒ ana
sitede giriş yapan forumda da girişli. Forum koduna **dokunulmadı**; ondan farklar: ana sitedeki pencere
parolasız giriş, sosyal giriş, kullanıcı adı girişi, CAPTCHA, sızmış-şifre denetimi, hesap silme/veri indirme ekler.
(Forumun kendi giriş sayfası eskisi gibi çalışır; ilerde ana pencereye yönlendirilebilir.)

## 2. Mimari kararı: Supabase Auth (Firebase değil)
- Zaten kurulu ve çalışan proje + kullanıcı tablosu + forum RLS'i buna bağlı; Firebase'e geçmek iki kimlik demek.
- Postgres satır güvenliği (RLS) hesap verisi ile doğrudan konuşur; Firebase'de ayrı güvenlik kuralı dili.
- Hepsi hazır: e-posta/şifre, magic link, e-posta OTP, Google/Azure(Microsoft)/Facebook/Apple/GitHub, PKCE, CAPTCHA
  (Turnstile/hCaptcha), hız sınırı, sızmış-şifre (Pro). Ücretsiz katman bu ölçek için yeter.
- **Özel kimlik protokolü yazılmadı.** Şifre saklama, OAuth, jeton yenileme tamamen barındırılan hizmetin işi.
  Tek özel parça: kullanıcı adı girişi (§4), o da hizmetin `signInWithPassword`ünü sunucuda çağıran ince bir sarmalayıcı.
- Kütüphane: `@supabase/supabase-js@2.45.4` (tam sürüm, SRI'li — forumla aynı, yaklaşık 15 aylık), jsDelivr.
  **Tembel yüklenir:** açılışta inmez; düğmeye basılınca, adreste e-posta/OAuth dönüşü (`?code=`) varsa ya da
  kayıtlı oturum varsa inene dek hiç ağ isteği yok (ölçüldü: açılışta `window.supabase` yok).
  Açılışta yalnız ~30 KB'lık `auth.js` + küçük css/ayar.

## 3. Arayüz
- **Masaüstü:** üst çubukta (dil seçicinin yanında) `👤 Giriş` düğmesi + ☰ Butonlar menüsünde yeni ilk grup **Hesap**.
- **Telefon (pointer: coarse):** üst çubuk dar olduğundan yalnız ☰ Butonlar → Hesap grubu. Pencere dikey ve yatay
  telefonda denendi (kendi içinde kayar, `max-height: 100dvh`).
- Girişliyken düğme `👤 @kullanıcıadı`. Pencere: sekmeler **Giriş / Üye ol**; sosyal düğmeler; şifresiz giriş;
  şifremi unuttum; doğrulama ekranı (yeniden gönder + 60 sn bekleme); kod girişi; yeni şifre (e-posta bağlantısından
  dönünce kendiliğinden açılır); Hesabım (çıkış, verilerimi indir, hesabı sil).
- Erişilebilirlik: `role=dialog aria-modal`, odak tuzağı, Esc ile kapanma ve odağı geri verme, `role=tablist` +
  ok tuşları, etiketli alanlar, `aria-live` durum satırları, `autocomplete` (parola yöneticisi, tek kullanımlık kod),
  ≥40 px dokunma hedefi, görünür odak halkası, `prefers-reduced-motion`.
- Yapılandırılmamışken (`auth_ayar.js` boş): düğme açılır, "Giriş henüz yapılandırılmadı." der; **hiç ağ isteği yok,
  hata yok** (ayrı sayfada sınandı).
- Metinler Türkçe sabit dizgi; mevcut DOM-sözlük çevirisiyle 21 dile gider (`js/ceviri.js`). Kullanıcı adı/e-posta
  `data-ceviri-yok` ile çeviriden korunur.

## 4. Kullanıcı adıyla giriş (güvenli çözüm)
İstemcide "ad → e-posta" RPC'si **yapılmadı** (herkes e-posta listesi çekerdi). Bunun yerine Edge Function
`kullanici-girisi`: ad+şifre alır, **sunucuda** adı e-postaya çevirir ve `signInWithPassword` dener; yalnız oturum
jetonu döner. Özellikler: hiç bulunamayan adla da aynı yolu yürür ve aynı tek tip "yanlış" yanıtı verir (hesap
var/yok sızmaz); hız sınırı (15 dk'da IP başına 15, ad başına 8; yalnız SHA-256 özeti saklanır); Origin
izinli-liste (CSRF) + JSON zorunlu; CAPTCHA jetonu iletilir; e-posta hiçbir yanıtta yok. Küçük zamanlama farkı
(var olmayan ad için tek DB okuması eksik) kabul edilen bilinen sınır. Kayıtta ad benzersizliği:
`kullanici_adi_musait` RPC'si (yalnız doğru/yanlış; büyük/küçük harf duyarsız benzersiz indeks).
Kullanıcı adları zaten herkese açıktır (forum).

## 5. Instagram bulgusu (Emre'ye)
Meta'nın kendi duyurusuna göre **Instagram Basic Display API 4 Aralık 2024'te kapandı**; tüketici (kişisel hesap)
uygulamaları için Instagram API'si **kalmadı** (yerine yalnız işletme/içerik üreticisi hesaplar için "Instagram API"
geldi). Yani "Instagram ile giriş" düğmesi bağımsız olarak **yapılamaz**; ayrıca Supabase'te Instagram sağlayıcısı
yok. Karşılığı: **Facebook (Meta) girişi** — Instagram'ı Meta hesabıyla bağlı olanlar onunla girer. Kaynaklar:
developers.facebook.com blog "Update on Instagram Basic Display API" (4 Eyl 2024), TechCrunch 6 Ara 2024.
(Kişisel hesapların son durumu kaynaklarda çelişkili; bu yüzden Facebook yoluna güvenildi, doğrudan Instagram
yolu denenmedi.)

## 6. Güvenlik / mevzuat kontrol listesi
| Madde | Durum |
|---|---|
| E-posta doğrulaması, doğrulanmadan giriş yok | Kodda: "Email not confirmed" → doğrulama ekranı + yeniden gönder. **Panelde "Confirm email" AÇIK olmalı** (rehber §3) |
| Şifre kuralı | ≥10 karakter, 3 sınıf ya da ≥14; yaygın/ardışık/kullanıcı adı-e-posta içeren reddedilir; canlı ölçer. Supabase min. uzunluk paneli 10'a |
| Sızmış-şifre | HIBP k-anonimlik (SHA-1'in ilk 5 karakteri, `Add-Padding`); ağ yoksa engellemez (fail-open) |
| Parolasız giriş | Magic link + 6 haneli kod, tek şablonda |
| OAuth PKCE | supabase-js `flowType: "pkce"`; Google/Microsoft/Facebook (+Apple/GitHub bayrağı) |
| CAPTCHA | Turnstile, tembel yüklenir, her denemede sıfırlanır; sunucu doğrulaması Supabase'te |
| Hız sınırı | Supabase Auth yerleşik sınırları + kullanıcı-adı fonksiyonunda ayrı sınır; "yeniden gönder" 60 sn bekleme |
| RLS | `profiller` herkes okur/yalnız kendini düzenler (forum_f1); `giris_deneme` RLS açık, politika yok; `verilerimi_indir` invoker (RLS'e tabi); `hesabi_sil` yalnız `authenticated`; hepsi `search_path` sabit |
| XSS | Kullanıcı verisi hiçbir yerde `innerHTML`e yazılmaz (yalnız `textContent`/`setAttribute`); statik SVG yok |
| Token hijyeni | Jeton URL'de kalmaz (`adresTemizle`), konsola/loga yazılmaz; oturum Supabase'in deposunda |
| Yönlendirme allowlist | `geriAdres()` yalnız izinli kökenler + localhost; Supabase tarafında Redirect URLs listesi |
| CSRF | PKCE state + Edge Function Origin kontrolü; oturum çerezsiz (localStorage), form-POST yok |
| KVKK/GDPR | `gizlilik/` aydınlatma+gizlilik (taslak); kayıtta zorunlu açık rıza kutusu (16+ beyanı), rıza zamanı+sürümü `profiller`e yazılır; saklama süresi; silme (anında, cascade) + veri indirme |
| Erişilebilirlik | §3 |
| Sosyal giriş rızası | Kayıt sekmesinde sosyal düğmeler rıza kutusu işaretlenmeden çalışmaz; **Giriş** sekmesinde yalnız bilgilendirme cümlesi var (ilk kez sosyal girişle gelen yeni hesapta rıza "ima" — bilinen sınır, §7) |

## 7. Bilinenler / yapılamayanlar
1. **Gerçek uçtan uca sınama yapılamadı:** gerçek hesap/dış servis kullanılmadı (yasak). Akışlar sahte `supabase-js`
   ile (`arac/auth_sahte_sb.js`) yerelde sınandı: kayıt, kullanıcı adı çakışması, giriş (yanlış/doğru), kullanıcı adı
   fonksiyonu yolu, kod ile giriş, çıkış, OAuth çağrısı, rıza zorunluluğu, yapılandırılmamış durum; dikey/yatay telefon.
   E-posta gönderimi, gerçek OAuth, Edge Function, SQL **Emre'nin kurulumundan sonra** kronoatlas.com'da sınanmalı
   (kontrol listesi rehber §10).
2. SQL (`auth_f2.sql`) ve Edge Function gerçek veritabanında **koşturulmadı**; yazım Supabase belgelerine göre.
3. OAuth ile ilk kez gelen yeni hesapta (Giriş sekmesinden) rıza kaydı yok: Supabase bunu ayırt etmez. Önerilen düzeltme:
   ilk girişte "profil rızası yok" ise rıza penceresi çıkaran küçük ek (F3).
4. "Şifre değiştir" ve "kullanıcı adı değiştir" Hesabım'da yok (şifre için "şifremi unuttum" yolu var).
5. Edge Function'da var-olmayan ad için süre farkı çok küçük; tam zamanlama eşitliği yok.
6. HIBP aracı `api.pwnedpasswords.com`ı tarayıcıdan çağırır (kullanıcı IP'si o servise görünür; şifre/e-posta görünmez);
   aydınlatma metninde yazılı.
7. Aydınlatma metni **taslak**; veri sorumlusu adı/adresi boş ([DOLDURULACAK]); hukuki gözden geçirme gerekir.
8. Ziyaretçi günlüğü (BORÇ A21) yapılmadı; `profiller.id` ile ayrı bir `ziyaret` tablosu rahatça bağlanabilir
   (hesap tablosu ona engel değil: kimlik `auth.users.id`, ek kolon/tablo gerekmez).
9. `data/auth_ayar.js` anon anahtarı + adresi forumla aynı (zaten herkese açık); sosyal bayraklar ve
   `kullaniciAdiGirisi` **kapalı** gönderilir ⇒ Emre dış hesapları açana dek o düğmeler görünmez. Giriş + e-posta/şifre
   + şifresiz yollar **hemen** canlıdır (proje zaten kurulu), ama §2 yönlendirme adresleri ve §3 şablonlar yapılmazsa
   doğrulama bağlantısı yanlış yere dönebilir ⇒ **main'e inmeden önce rehber §1-§3 yapılmalı** (KASA'ya not).
10. Çeviri: 97 yeni arayüz dizgisi 21 dilde (Sonnet çevirmenler); makine çevirisi, ana dil denetimi yapılmadı.
