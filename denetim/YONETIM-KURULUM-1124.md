# Ziyaretçi günlüğü + yönetim paneli — kurulum ve devir (24 Kasım 2026)

Karar belgesi: `YONETIM-KARAR-1124.md`. Gizlilik eki (başka dalda yayınlanacak): `YONETIM-GIZLILIK-EKI-1124.md`.

## Ne yapıldı, nerede
| Parça | Dosya | Durum |
|---|---|---|
| Şema (tablo, RLS, kaydet/sil/özet/temizle işlevleri) | `supabase/gunluk_g1.sql` | **Supabase'e yüklendi** (Emre, 24.11), anon ile sınandı |
| Toplama istemcisi + Kabul/Reddet bildirimi | `js/ziyaret.js` (index.html'de `forum/ayar.js`ten sonra) | yerelde sınandı (masaüstü + telefon) |
| Yönetim paneli | `yonetim/` (index.html, yonetim.css, yonetim.js) | yerelde sınandı, Emre girdi |
| Yönetici rolü | `profiller.rol = 'yonetici'` → **Emreli_c** | verildi |
| Bildirim/hata metinleri 21 dilde | `data/ceviri_<dil>_arayuz.js` (6 metin) | çevirildi, `ceviri.py` ile denetlendi |

## Ne toplanır (kısa)
Rastgele takma numara (localStorage `ka_kisi`), olay: açılış, bakılan madde, oynat, uçuş kipi, dil, kalma süresi,
cihaz türü, kaba ülke. **IP, ad, e-posta, telefon, makine adı, şehir, parmak izi YOK.** Reddeden ya da tarayıcısı
DNT diyen için hiçbir şey kaydedilmez. Giriş yapmış üyenin olayları `uye_id` ile bağlanır (panel kullanıcı adını gösterir).

## Ölçülen (24.11, yerel sunucu + gerçek Supabase)
- Kaydet işlevi 4 olaydan 3 geçerliyi yazdı, "bozuk" olayı attı; `ziyaret_sil` 3 satır sildi.
- Anon anahtarla tablo okuma, `ziyaret_ozet`, `ziyaret_temizle` → **401 reddedildi**.
- **Ülke:** sunucunun `cf-ipcountry` başlığından geliyor (istemcinin sahte "ZZ" ipucu yok sayıldı); başlık yoksa
  tarayıcının saat-dilimi tahmini yedektir.
- Panel: giriş, kartlar, ülke/cihaz/dil/madde listeleri geldi; hostile başlık (`<img onerror>`) **düz yazı** göründü.
- Bildirim: Reddet → numara üretilmedi, istek gitmedi. Kabul → numara üretildi, olaylar toplu gitti (204).
- Oynatma sırasında kartın kendiliğinden değişmesi ve açılıştaki otomatik madde SAYILMIYOR (ilk 8 sn + ⏸ durumu).

## Ölçülmedi / sınırlar (borç defterine de yazıldı)
1. **Kronoloji başına kalma süresi yok:** hangi kronolojinin açık olduğu `app.js`in iç durumu; panel toplam kalma +
   bakılan madde sırasını verir. Gerekirse `app.js`e küçük bir `CustomEvent` eklenir (karar gerekir).
2. **Üye olayları (`uye_id`) canlı sınanmadı:** istemci Supabase oturum anahtarını (`sb-*-auth-token`) okur; üyelik
   kodu (`js/auth.js`, giris-altyapi dalı) ana siteye inmeden üyelik girişi yok. Panelin "Giriş yapan üyeler" listesi
   o zamana kadar boş kalır.
3. **12 ay temizliği:** zamanlayıcı KURULU (ölçüldü 24.11: Supabase → Integrations → Cron → `ziyaret_temizle`,
   `15 3 * * *`, ilk çalışma 24.11 06:15 TSİ). Ama temizleme işlevi **gerçek 12 aylık veriyle çalıştırılmadı** (veri
   12 ayı daha doldurmadı); ilk gerçek silme 12 ay sonra olur. Önceden denemek için eski tarihli bir sahte satırla sınanabilir.
4. **Gerçek trafikte doluluk (500 MB) ölçülmedi:** `ziyaret_kaydet` ~3 milyon satırda yeni kayıt almayı keser
   (taşma koruması). Panelden satır sayısı izlenmeli.
5. **Kötüye kullanım:** herkes `ziyaret_kaydet`i çağırabilir (anon). Satır başına sınır ve toplu sınır var, hız sınırı
   yok. Sahte kayıt basılırsa panel sayıları şişer; gerekirse Cloudflare/Turnstile ya da IP hız sınırı eklenir.
6. Gizlilik metninin §6/§8 eki yayında DEĞİL (sayfa giris-altyapi dalında). Bildirimin "Ayrıntı" bağlantısı
   `gizlilik/#istatistik` şimdilik 404 verir; sayfa inince çalışır. **Gizlilik metni hukukçu gözünden geçmeli.**

## Siteyi açınca (KASA push kapısından sonra) Emre'nin sınaması
1. https://kronoatlas.com/ → alt ortada bildirim çıkar. **Reddet** → sayfa yenile → bildirim bir daha çıkmaz.
2. https://kronoatlas.com/?cerez=sifirla → bildirim yeniden çıkar → **Kabul**.
3. Birkaç madde seç, Oynat'a bas, 1 dk kal, sekmeyi kapat.
4. https://kronoatlas.com/yonetim/ → e-posta + şifre → kartlarda kendini gör.
5. https://kronoatlas.com/?verilerimi_sil=1 → "Kayıtlarınız silindi." → panelde sayı düşer.

## Geri alma
`supabase/gunluk_g1.sql` içindeki nesneleri silmek yeterli: `drop table public.ziyaret_olaylari, public.ziyaret_gunluk
cascade; drop function public.ziyaret_kaydet(text,text,jsonb,text,text,text), public.ziyaret_sil(text),
public.ziyaret_temizle(), public.ziyaret_ozet(integer);` ve `index.html`deki iki `<script>` satırını kaldırmak.
Rol korumasını açıp kapatan komut (yönetici atamak için) `forum_rol_koru` tetikleyicisini SQL editöründe bir an
kapatır; **mutlaka geri açın** (`alter table public.profiller enable trigger forum_rol_koru;`).
