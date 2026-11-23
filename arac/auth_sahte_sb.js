// ÜYELİK SINAMA YARDIMCISI (GIRIS-1124) — SAHTE supabase-js. Siteye BAĞLANMAZ.
// Yerel geliştirme sunucusunda, sayfa açıldıktan sonra tarayıcı konsolundan:
//   fetch('/arac/auth_sahte_sb.js').then(r=>r.text()).then(eval)
// Sonra Auth.ac('kayit') vb. Gerçek Supabase'e hiçbir istek gitmez; çağrılar window.__log'a yazılır.
// Giriş şifresi "DogruSifre!2026x" ise başarılı sayılır; kullanıcı adı "alinmis" ise müsait değil.
(function () {
  window.__log = [];
  var L = function (n, a) { window.__log.push([n, JSON.stringify(a)]); };
  var cb = null, ses = null;
  var giris = function (id, eposta) { ses = { user: { id: id, email: eposta } }; if (cb) cb("SIGNED_IN", ses); return { data: { session: ses } }; };
  window.supabase = { createClient: function (u, k, o) {
    L("createClient", { u: u, flow: o.auth.flowType });
    return {
      auth: {
        onAuthStateChange: function (f) { cb = f; return { data: { subscription: {} } }; },
        getSession: async function () { return { data: { session: ses } }; },
        signInWithPassword: async function (a) { L("pw", { e: a.email, o: a.options }); return a.password === "DogruSifre!2026x" ? giris("u1", a.email) : { error: { code: "invalid_credentials", message: "Invalid login credentials" } }; },
        signUp: async function (a) { L("signUp", { e: a.email, o: a.options }); return { data: {} }; },
        signInWithOtp: async function (a) { L("otp", { e: a.email, o: a.options }); return { data: {} }; },
        verifyOtp: async function (a) { L("verify", a); return giris("u2", a.email); },
        resend: async function (a) { L("resend", { e: a.email }); return { data: {} }; },
        resetPasswordForEmail: async function (e, o) { L("reset", { e: e, o: o }); return { data: {} }; },
        signOut: async function () { ses = null; if (cb) cb("SIGNED_OUT", null); return {}; },
        setSession: async function (t) { L("setSession", {}); return giris("u3", "x@y.z"); },
        updateUser: async function () { L("updateUser", {}); return { data: {} }; },
        signInWithOAuth: async function (a) { L("oauth", a); return { data: {} }; }
      },
      rpc: async function (n, a) { L("rpc", { n: n, a: a }); return n === "kullanici_adi_musait" ? { data: a.ad !== "alinmis" } : { data: { profil: {} } }; },
      functions: { invoke: async function (n, o) { L("fn", { n: n, k: o.body.kimlik }); return { data: { oturum: { access_token: "a", refresh_token: "r" } } }; } },
      from: function () {
        var zincir = { select: function () { return zincir; }, eq: function () { return zincir; },
          maybeSingle: async function () { return { data: { kullanici_adi: "denemeci" } }; } };
        return zincir;
      }
    };
  } };
})();
