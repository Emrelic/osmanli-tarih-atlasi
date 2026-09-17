# Dosyanın girişi ve «Proje nedir» — tam metin

> Kimlik `D232` · `CLAUDE.md giriş · §1` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

# Tarih Atlası — her oturumun önce okuyacağı dosya

Bu dosya Claude Code tarafından oturum açılışında otomatik okunur. Projenin ne
olduğunu, nasıl çalıştığını, hangi kuralların **ihlal edilemez** olduğunu ve senin
oturumunun hangi dosyalara dokunabileceğini anlatır.

## 1. Proje nedir

Zaman göstergesi ilerledikçe devlet sınırlarının harita üzerinde değiştiği, yanında
kronolojik olay akışının ve dönemin hükümdarının aktığı **eğitim amaçlı statik web
sitesi**. Sunucu yok, veritabanı yok, derleme adımı yok — tarayıcı `data/` altındaki
düz JS dosyalarını okur.

- **Yayın**: https://emrelic.github.io/osmanli-tarih-atlasi/
- **Depo**: github.com/Emrelic/osmanli-tarih-atlasi — `main`'e her push otomatik yayınlanır
- **Harita kütüphanesi**: MapLibre GL JS 4.7.1 (CDN'den)
- **Çekirdek katman**: Osmanlı İmparatorluğu 1281–1923, **gün hassasiyetinde**
- **Hedef kapsam**: bütün dünya, nihai ufuk MÖ 12000 – MS 2026 (kademeli; bkz. §6)

Zaman çizgisi gündür: İstanbul haritaya 29 Mayıs 1453'te eklenir, 1453 yılında değil.

### Kullanıcı ekranda ne görüyor
- **Ortada harita.** Etiketsiz fiziki altlık üzerine devlet gövdeleri boyanır:
  Osmanlı doğrudan toprağı koyu, tâbi toprağı açık tonda; her yabancı devlet kendi
  renginde. Toprak büyüdükçe otomatik uzaklaşan bir yakınlaştırma var; lejantta o
  anki ≈km² yüzölçümü yazar. Üstte bölge seçici (Anadolu, Rumeli, Ege…).
- **Sağda panel.** Üstte dönemin padişah kartı ve portresi; altında o tarihe kadar
  akmış kronoloji listesi. Bir maddeye tıklanınca detay kartı açılır: gün, yer,
  kişiler, 2-4 cümlelik anlatım ve TDV bağlantısı.
- **Altta zaman çubuğu.** Oynat/duraklat, hız seçimi, "zaman akışı" ya da "olay olay"
  modu, ileri/geri olay atlama.
- **Dizin penceresi.** Kişiler, savaşlar, antlaşmalar, savaş serileri, şehirler ve
  devletler sekmeleri.

### Neden var
Amaç bir "sınır animasyonu" değil, **kronoloji ile haritanın birbirini doğruladığı**
bir öğretim aracı. Bir madde okunduğunda haritada tam olarak o değişimin görünmesi
gerekir. Projenin bütün kalite kuralları (§3) bu tek cümleden türer.

---
