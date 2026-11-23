/* ÜYELİK AYARI (GIRIS-1124) — Supabase projesinin ADRESİ ve ANON (herkese açık) anahtarı.
   Burada YALNIZ herkese açık değerler durur; "service_role" / gizli anahtar / OAuth client secret
   BURAYA ve DEPOYA ASLA YAZILMAZ (onlar Supabase panelinde durur).
   Proje forum ile AYNIDIR (forum/ayar.js): aynı kullanıcı tablosu, aynı oturum (aynı site = aynı
   tarayıcı deposu). url/anonAnahtar BOŞ bırakılırsa üyelik "henüz yapılandırılmadı" der, hiçbir
   ağ isteği atmaz ve hata fırlatmaz.
   Rehber: denetim/GIRIS-KURULUM-1124.md · tasarım: denetim/GIRIS-TASARIM-1124.md */
window.AUTH_AYAR = {
  // İLK YAYIN: BOŞ — panel (auth_f2.sql + e-posta ayarları) kurulana dek düğme yalnız bilgi verir, ağ isteği atmaz.
  // Panel kurulunca GERİ YAZILACAK değerler: denetim/GIRIS-KURULUM-1124.md → "PANEL KURULUNCA GERİ YAZ".
  url: "",
  anonAnahtar: "",

  // Sosyal giriş düğmeleri: Supabase panelinde o sağlayıcı AÇILIP anahtarları girildikten
  // sonra true yapılır (rehber §4-§6). Kapalıyken düğme hiç görünmez (ölü düğme yok).
  saglayicilar: { google: false, azure: false, facebook: false, apple: false, github: false },

  // CAPTCHA (Cloudflare Turnstile). Site anahtarı (herkese açık) buraya; gizli anahtar yalnız
  // Supabase panelinde (Authentication → Attack Protection). Boşsa CAPTCHA kutusu çıkmaz.
  turnstileSiteKey: "",

  // Kullanıcı ADI ile giriş: Edge Function "kullanici-girisi" yayınlandıysa true (rehber §7).
  // Kapalıyken giriş alanı yalnız e-posta kabul eder.
  kullaniciAdiGirisi: false,

  // E-posta bağlantılarının dönebileceği adresler (açık yönlendirme koruması). Yerel
  // geliştirme (localhost / 127.0.0.1) ayrıca kabul edilir. Supabase panelindeki
  // "Redirect URLs" listesiyle AYNI olmalıdır.
  izinliKokenler: ["https://kronoatlas.com", "https://www.kronoatlas.com"],

  // Aydınlatma / rıza metninin sürümü: metin değişince artırılır, kayda yazılır.
  rizaSurumu: "2026-11-24"
};
