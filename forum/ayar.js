/* FORUM AYARI — Supabase projesinin ADRESİ ve ANON (herkese açık) anahtarı.
   Anon anahtar tarayıcıda durmak İÇİN yapılmıştır; ne yapabileceği RLS kurallarıyla
   sınırlıdır (supabase/forum_f1.sql). "service_role" anahtarı BURAYA ASLA YAZILMAZ.
   Boşken forum "henüz bağlanmadı" der ve hiçbir istek atmaz. */
window.FORUM_AYAR = {
  // Proje: kronoatlas (Supabase org "Kronoatlas", Free, Frankfurt) — 17 Kasım 2026
  url: "https://avwiwpzglhkxgabhwcuh.supabase.co",
  // Settings → API Keys → Publishable key (tarayıcıda durmak için yapılmıştır)
  anonAnahtar: "sb_publishable_a9MGXvwnbphMoN0cvYL50A_w8MHLmDx"
};
