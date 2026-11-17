/* FORUM AYARI — Supabase projesinin ADRESİ ve ANON (herkese açık) anahtarı.
   Anon anahtar tarayıcıda durmak İÇİN yapılmıştır; ne yapabileceği RLS kurallarıyla
   sınırlıdır (supabase/forum_f1.sql). "service_role" anahtarı BURAYA ASLA YAZILMAZ.
   Boşken forum "henüz bağlanmadı" der ve hiçbir istek atmaz. */
window.FORUM_AYAR = {
  url: "",        // ör. https://abcdefgh.supabase.co
  anonAnahtar: "" // Project Settings → API → anon public
};
