// KRONOATLAS — "kullanıcı adı ile giriş" Edge Function (GIRIS-1124)
// Neden sunucuda: kullanıcı adından e-postayı çözmek istemciye bırakılırsa herkes "ad → e-posta"
// listesi çekebilir. Burada çözüm de şifre denemesi de SUNUCUDA yapılır; istemciye yalnız
// oturum jetonları (ya da tek tip hata) döner. E-posta hiç sızmaz; hesap var/yok bilgisi vermez.
// Şifre doğrulamasını BEN yazmıyorum: Supabase Auth'un signInWithPassword'ü kullanılır.
// Dağıtım: supabase functions deploy kullanici-girisi   (rehber: denetim/GIRIS-KURULUM-1124.md §7)
// Ortam: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY Supabase'in kendisinden
// gelir (panel → Edge Functions). Hiçbiri depoya yazılmaz.
import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const IZINLI_KOKENLER = ["https://kronoatlas.com", "https://www.kronoatlas.com"];
const YEREL = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;
const IP_LIMIT = 15;     // 15 dakikada IP başına en çok deneme
const KIM_LIMIT = 8;     // 15 dakikada aynı kullanıcı adına en çok deneme
const PENCERE_DK = 15;

function cors(origin: string | null) {
  const ok = origin && (IZINLI_KOKENLER.includes(origin) || YEREL.test(origin));
  return {
    "Access-Control-Allow-Origin": ok ? origin! : IZINLI_KOKENLER[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}
function yanit(govde: unknown, durum: number, origin: string | null) {
  return new Response(JSON.stringify(govde), { status: durum, headers: { ...cors(origin), "Content-Type": "application/json", "Cache-Control": "no-store" } });
}
async function ozet(s: string) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (istek) => {
  const origin = istek.headers.get("origin");
  if (istek.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
  if (istek.method !== "POST") return yanit({ hata: "yontem" }, 405, origin);
  // CSRF: yalnız izinli köken (tarayıcıdan gelen istekte Origin her zaman vardır) ve JSON
  if (!origin || !(IZINLI_KOKENLER.includes(origin) || YEREL.test(origin))) return yanit({ hata: "koken" }, 403, origin);
  if (!(istek.headers.get("content-type") || "").includes("application/json")) return yanit({ hata: "tur" }, 415, origin);

  let g: { kimlik?: string; sifre?: string; captcha?: string | null };
  try { g = await istek.json(); } catch { return yanit({ hata: "gecersiz" }, 400, origin); }
  const kimlik = String(g.kimlik || "").trim().toLowerCase();
  const sifre = String(g.sifre || "");
  if (!/^[a-z0-9_.]{3,30}$/.test(kimlik) || sifre.length < 1 || sifre.length > 200) return yanit({ hata: "gecersiz" }, 401, origin);

  const url = Deno.env.get("SUPABASE_URL")!;
  const yonetici = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });

  // ① hız sınırı (ham IP / ham ad saklanmaz; yalnız özet)
  const ip = (istek.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "yok";
  const ipAnahtar = "ip:" + (await ozet(ip)).slice(0, 32);
  const kimAnahtar = "kim:" + (await ozet(kimlik)).slice(0, 32);
  const sinir = new Date(Date.now() - PENCERE_DK * 60_000).toISOString();
  const say = async (a: string) => (await yonetici.from("giris_deneme").select("id", { count: "exact", head: true }).eq("anahtar", a).gte("zaman", sinir)).count ?? 0;
  if ((await say(ipAnahtar)) >= IP_LIMIT || (await say(kimAnahtar)) >= KIM_LIMIT) return yanit({ hata: "cok_deneme" }, 429, origin);
  await yonetici.from("giris_deneme").insert([{ anahtar: ipAnahtar }, { anahtar: kimAnahtar }]);

  // ② kullanıcı adı → e-posta (yalnız sunucuda). Bulunamazsa SAHTE bir adresle aynı yolu yürürüz:
  //    yanıt ve süre "yanlış şifre" ile aynıdır, hesap var/yok anlaşılmaz.
  let eposta = "yok-" + kimAnahtar.slice(4, 20) + "@kullanici-yok.invalid";
  const { data: p } = await yonetici.from("profiller").select("id").ilike("kullanici_adi", kimlik).maybeSingle();
  if (p?.id) {
    const { data: u } = await yonetici.auth.admin.getUserById(p.id);
    if (u?.user?.email) eposta = u.user.email;
  }

  // ③ şifre denemesi — Supabase Auth (CAPTCHA jetonu varsa ona iletilir)
  const anon = createClient(url, Deno.env.get("SUPABASE_ANON_KEY")!, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await anon.auth.signInWithPassword({
    email: eposta, password: sifre,
    options: g.captcha ? { captchaToken: g.captcha } : undefined,
  });
  if (error || !data?.session) {
    // Şifre DOĞRU ama e-posta doğrulanmamışsa Supabase bunu ayrı söyler; şifreyi bilen kişiye
    // bu bilgiyi vermek güvenlidir.
    if ((error as { code?: string })?.code === "email_not_confirmed") return yanit({ hata: "dogrulanmamis" }, 401, origin);
    return yanit({ hata: "gecersiz" }, 401, origin);
  }
  return yanit({ oturum: { access_token: data.session.access_token, refresh_token: data.session.refresh_token } }, 200, origin);
});
