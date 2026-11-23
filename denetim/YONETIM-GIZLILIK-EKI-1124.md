# Gizlilik metni eki — ziyaret istatistiği (24 Kasım 2026)

`gizlilik/index.html` sayfası `giris-altyapi-1124` dalındadır (üyelik oturumu). Bu ek, ziyaretçi günlüğünün
(`supabase/gunluk_g1.sql`, `js/ziyaret.js`) gizlilik metnidir; o sayfaya **§8 olarak** eklenmeli ve **§6 çerez
paragrafı** aşağıdaki gibi değişmelidir. Karar: `denetim/YONETIM-KARAR-1124.md`. Metin TASLAKTIR; yayından
önce Emre / bir hukukçu gözden geçirmeli (aynı uyarı, mevcut sayfanın üstündeki taslak notu).

## 1. §6 (Çerezler ve yerel depo) yerine

```html
<h2>6. Çerezler ve yerel depo</h2>
<p>Oturumunuzu sürdürmek için tarayıcı deponuza (localStorage) bir oturum jetonu yazılır. Reklam ya da izleme
çerezi kullanılmaz. <strong>İstatistik bildirimini kabul ederseniz</strong> ayrıca rastgele bir numara
saklanır (bkz. §8); reddederseniz hiçbir şey saklanmaz.</p>
```

## 2. §8 olarak eklenecek bölüm

```html
<h2 id="istatistik">8. Ziyaret istatistiği (üye olmayanlar dahil)</h2>
<p>Siteyi geliştirmek için, <strong>yalnızca ilk açılışta gösterilen bildirimde “Kabul” derseniz</strong>
sitenin nasıl kullanıldığını sayarız. “Reddet” derseniz ya da tarayıcınız “izlemeyi reddet” (Do Not Track)
diyorsa hiçbir şey kaydedilmez ve numara bile üretilmez.</p>
<table>
<tr><th>Ne saklanır?</th><th>Nasıl?</th></tr>
<tr><td>Tarayıcınızda üretilen <strong>rastgele takma numara</strong></td><td>Sizin tarayıcınızda (localStorage) durur; kimliğinizle ilgisi yoktur. Tarayıcı verisini silerseniz ya da başka tarayıcıdan gelirseniz yeni kişi sayılırsınız.</td></tr>
<tr><td>Hangi kronoloji maddesine bakıldı, oynat/uçuş kullanıldı mı, sayfa dili, sitede kalma süresi, cihaz türü (bilgisayar/telefon/tablet)</td><td>Olay olarak, takma numarayla birlikte.</td></tr>
<tr><td>Kaba ülke (iki harf, ör. TR)</td><td>Sunucunun bağlantıdan türettiği ülke kodu; <strong>IP adresiniz kaydedilmez</strong>, şehir kaydedilmez.</td></tr>
<tr><td>Giriş yaptıysanız</td><td>Aynı olaylar hesabınıza (kullanıcı adınıza) bağlanır; yalnız yönetici görür.</td></tr>
</table>
<p><strong>Saklanmayanlar:</strong> adınız, e-postanız, telefonunuz, IP adresiniz, makine adınız, parmak izi.
Reklam amaçlı kullanılmaz, kimseyle paylaşılmaz ya da satılmaz; veriyi yalnız site yöneticisi görür.</p>
<p><strong>Hukukî sebep:</strong> açık rızanız (bildirimde “Kabul”; KVKK m.5/1, GDPR m.6/1-a). Rızayı istediğiniz an
geri alabilirsiniz: <a href="../?cerez=sifirla">tercihimi sıfırla</a> (bildirim yeniden sorulur).</p>
<p><strong>Saklama:</strong> ayrıntılı olay kaydı <strong>12 ay</strong> tutulur; sonra silinir. Yalnız
“hangi gün kaç kişi” gibi kişi numarası içermeyen günlük özet kalabilir.</p>
<p><strong>Silme / itiraz:</strong> bu tarayıcıdaki numaranıza ait kayıtları şu bağlantıyla anında silersiniz:
<a href="../?verilerimi_sil=1">verilerimi sil</a>. Giriş yaptıysanız aynı bağlantı hesabınıza bağlı
kayıtları da siler. Başka yolla silme için: <a href="mailto:iletisim.kronoatlas@gmail.com">iletisim.kronoatlas@gmail.com</a>
(numaranızı <code>localStorage</code> içindeki <code>ka_kisi</code> değerinden öğrenebilirsiniz).</p>
<p><strong>Veri nerede?</strong> Supabase (AB / Frankfurt). Yetkisiz kişi okuyamaz: tabloya doğrudan okuma/yazma
kapalıdır, yalnız denetlenen işlevlerle kayıt atılır ve yalnız yönetici rolü okur.</p>
```

## 3. Not (oturumlar arası)
- `?cerez=sifirla` ve `?verilerimi_sil=1` bağlantıları `js/ziyaret.js` tarafından işlenir (ana sayfada çalışır).
- `gizlilik/` sayfası bu dosyayı kendisi içermez; üyelik oturumu §6 + §8'i kendi sayfasına katar.
- Çerez bildiriminin “Ayrıntı” bağlantısı `gizlilik/#istatistik` adresine gider (id yukarıdaki `<h2 id="istatistik">`).
