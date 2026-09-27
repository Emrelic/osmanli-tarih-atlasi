# ARAYUZ-0077-B — 7 madde hükmü

**Oturum:** `ARAYUZ-0077-B` (Opus 5.5, ARAYUZ-0077'nin devamı) · **Koordinatör:** `YILDIRIM BAYEZIT`
**Tarih:** 27 Eylül 2026 · **Şartname:** `oturumlar/ARAYUZ-0077-B.md`
**Değişen dosyalar:** `js/app.js` · `css/style.css` · bu rapor. Veri dosyasına DOKUNULMADI.
Ölçümler canlı sayfada (`py arac/sunucu.py`, önizleme) yapıldı.

---

## 0. Hipotez — DOĞRULANDI (üç maddede), ama tek düzeltme DÖRDÜNÜ kapattı

Şartnamenin hipotezi: *"odak devleti kavramı yalnız Osmanlı için çalışıyor."*

**Ölçüm (düzeltmeden önce, canlı):** odak = Moskova, ilk maddeye tık →
panel "Moskova Büyük Knezliği — kurulus" (doğru). Ardından ⏭ → panel
**"Şeyh Edebâli — ahîlik ile Osmanlı hânedanı…" (Osmanlı, 1326)**. Liste
Moskova'da kaldı, panel ve harita Osmanlı'ya atladı — H-79:15'in birebir hâli.

**Kök:** odak durumu (`ODAK`, `EK_SECILI`) `odakKur()` kapanışının İÇİNDE
yaşıyor; onu okuyabilen tek şey o kapanışın kendisi. Dışarıdaki bütün gezinti
`olaylar`ı (Osmanlı) SABİT okuyor:

| işlev | eski kaynak | madde |
|---|---|---|
| `geriAdim` / `ileriAdim` (⏮ ⏭) | `olaylar[suankiOlayI ± 1]` | H-79:15 |
| `tariheGitKur → calistir` (tarih kutusu) | `enYakinOlayBul` → `olaylar` | H-79:8 |
| `oynatDurdur` olay-olay kipi | `olaylar[i]` | H-79:16 ("sıra ile oynatılabilecek") |
| `listeCiz` / `birlesikCiz` satırları | `contextmenu` HİÇ bağlı değil | H-79:14 |

H-79:14 aynı sınıftan ama AYRI bir eksik: menü altyapısı (`kopyaMenusuAc`)
yalnız Osmanlı satırlarına bağlanmıştı. Ölçüldü: Moskova satırında sağ tık →
**menü YOK**.

**Çare — tek kapı:** üst düzeyde `ODAK_GEZINTI` (null = eski Osmanlı yolu).
`odakKur()` onu doldurur; gezilen liste EKRANDAKİ listedir (ek varsa birleşik
havuz, yoksa odak devletin süzülmüş listesi). ⏮ ⏭ · tarih kutusu · olay-olay
oynatma önce `odakGezintiAktif()` sorar. **Yalnız Osmanlı seçiliyken davranış
bit bit eskisi** (aşağıda sınandı).

---

## 1. Hükümler

### H-79:8 — tarih kutusu odak ülkenin kronolojisine gitmeli · `cozuldu`
**İki yönde sınandı (C13):**
- Moskova odak, `1470` + Enter → `✓ 1480-01-01 — Altın Orda hâkimiyetinden fiilen
  çıktı … (Moskova Büyük Knezliği)`, panel Moskova maddesi.
- Osmanlı (sıfırla sonrası), `1453-05-29` → `✓ 29 Mayıs 1453 — İstanbul'un Fethi` (eski davranış).
- Havuz (Rusya+Osmanlı+Venedik), `1570` → havuzdaki en yakın madde; durum
  satırı hangi devletin maddesi olduğunu parantezle yazar.

### H-79:9 — 3 sn hareketsiz bekleyince ipucu balonu · `cozuldu` (mekanizma) + `senin-kararin` (kapsam)
**Sayıldı (şartname "önce say" dedi):** 142 denetim öğesi (düğme · seçici ·
kutu · bağ; kronoloji satırları ve devlet listesi hariç).
- Ana ekranda görünen **25** · 20'sinde `title` VAR, 5'inde YOK.
- Gizli panellerde **117** · 24'ünde var, **93'ünde YOK** — konu süzgeci 40 ·
  ayarlar 22 · butonlar (☰) 10 · devlet paneli 10 · dizin 9 · detay 2.

**Yapılan:** genel mekanizma (`ipucuKur`, `#ipucu-balon`). Metin kaynağı
öğenin kendi `title`ı; balon çıkarken tarayıcının ~1 sn'lik kendi ipucu çift
çıkmasın diye `title` → `data-ipucu`ya taşınır. `title`ı olmayanlar için
`IPUCU_EK` listesi (index.html bu oturumun dosyası değil): görünür 5'in tamamı
+ ☰ Butonlar'ın 10 katman kutusu + devlet panelinin 3 öğesi = **19 öğe**.
⇒ Bugün balon gösteren öğe: 44 (`title`lı) + 19 = **~63 / 142**.

**İki yönde sınandı:** `btn-ileri` üzerinde 1,5 sn → balon YOK · 3,3 sn →
`acik | Sonraki olaya git` · fare >3 px kıpırdayınca kapanıp sayaç sıfırlandı
(2,0 sn'de kapalı, 3,3 sn'de yeniden açık) · `title`sız ⑦ kutusu → ek metin çıktı.

**senin-kararin:** kalan ~79 öğe (konu süzgecinin 40 kutusu kendi etiketini
yazıyor — "Askerî", "Siyasî" — balonun ekleyeceği bilgi az; ayarlar 22 ve
dizin 9 asıl eksik). İki yol: ① metinleri `index.html`e `title` olarak
yazmak (dosya koordinatörde; mekanizma kendiliğinden okur) ② `IPUCU_EK`e
eklemek (bende). Öneri ①: metin öğenin yanında durur, iki yerde tutulmaz.

### H-79:14 — Rusya kronolojisinde sağ tık kopyala çıkmıyor · `cozuldu`
`listeCiz` ve `birlesikCiz` satırlarına Osmanlı'nın AYNI menüsü bağlandı
(`kopyaMenusuAc`). Devlet maddesi `kopyaMaddesi()` sarmalayıcısıyla verilir
(`gi` veriye yazılmaz). Kaynak satırı: devlet kronolojisinin `kaynak`ı TDV
slug'ı değil tam künyedir (ör. `VLE — Ugros taika …`) — eskiden başına "TDV"
yapıştırılırdı, artık yapıştırılmaz.
**Sınandı:** Moskova satırı → `Başlığı kopyala / Maddenin tamamını kopyala` ·
Osmanlı satırı → aynı menü (değişmedi) · havuz satırı → menü var.

### H-79:15 — Moskova'da sonraki maddeye geçince Osmanlı'ya dönüyor · `cozuldu`
Kök §0. **Sınandı:** Moskova ilk madde (1325) → ⏭ 1408 Ugra barışı → ⏭ 1480 →
⏮ 1408. Listede "şimdiki" satır gezilen maddede (eskiden odak listesinde
`simdiki` hiç konmuyordu; ⏭ ile gezilen madde listede görünmezdi).
**Yan bulgu, düzeltildi:** odak listesinin "geçmiş" vurgusu SÜZÜLMEMİŞ
kronolojiyi DOM ile indeks indeks eşliyordu ⇒ süzgeç açıkken vurgu yanlış
satırlara kayıyordu. Artık çizilen listenin kendisi (`odakSirali`) okunur.
**Osmanlı yönü:** yalnız Osmanlı, 1453-05-29'dan ⏭ → `Çandarlı Halil Paşa'nın
azli ve idamı` (`suankiOlayI` 230) — eski yol.

### H-79:16 — birden fazla devlet, kronolojiler tek havuzda, sırayla oynat · `cozuldu`
**Ölçüm:** çoklu seçim ZATEN vardı (`EK_SECILI`, 0026/H-0001), iki eksikle:
① **Osmanlı havuza giremiyordu** — Osmanlı satırı odağı sıfırlıyordu;
② havuz ⏭/oynat ile GEZİLEMİYORDU (§0).
**Çare:** Osmanlı satırı artık öteki satırlar gibi aç/kapa (başka devlet
odaktaysa EK olur). Eski "Osmanlı'ya dön" işi ayrı bir **"↺ Yalnız Osmanlı
(seçimi sıfırla)"** satırına taşındı (seçim varken listenin başında).
⚠️ Osmanlı EK iken ek eşiği (`dunya ≥`) UYGULANAMAZ — Osmanlı maddelerinde
`dunya`/`kapsam` alanı yok (selefin ölçümü 0/821); uydurma puan yerine
Osmanlı'nın KENDİ süzgeci (`suzulduMu`: ⚙ konu/toprak) uygulanır.
**Sınandı:** Rusya (odak) + Osmanlı (EK) + Venedik (EK) → düğme `Rusya Çarlığı /
İmparatorluğu + 2 ek` · 1672 madde (Rusya 224 · Osmanlı 1440 · Venedik 8 —
Venedik'in 86 maddesinin 8'i varsayılan dünya eşiği 4'ü geçiyor) · 1570'ten
⏭×4: `Rusya 1570-01-02 Novgorod katliamı → Osmanlı 1570-07-23 Kıbrıs çıkarması
→ Osmanlı Lefkoşa → Osmanlı Girne` · ▶ (olay olay, 5 sn) → `Venedik 1571-10-07
İnebahtı`. Konsolda hata: 0.

### H-77:20 — kronoloji içi derin pencere + zoom + mini kronoloji · `sirada` (veri kararı bekliyor)
Başlanmadı; şartnamenin sırası (kusurlar önce) tutuldu. Ölçülen engel:
mini kronolojinin **20-50 maddelik kaynaklı verisi yok** (Çanakkale / İstanbul'un
Fethi pilotu). Veri olmadan kurulacak pencere boş kabuk olur. İstediğim:
① şema kararı — önerim ana maddede `alt_kronoloji: [{t, b, d, yer_kon|yer_id, kaynak}]`
ve pencere zoom'u için `alt_kutu: [batı, güney, doğu, kuzey]` (VERI-YAPISI koordinatörde)
② pilot iki olayın verisini bir kronoloji koluna vermek. Veri inince pencere
(tam ekran katman + zoom + kendi ⏮⏭ listesi) `ODAK_GEZINTI` kapısının aynısıyla
kurulur — gezinti altyapısı bu oturumda hazırlandı.

### H-77:49 — Avusturya-Macaristan'ın bölünmesi, madde içi aşama aşama oynatma · `sirada`
İki ayrı iş: ① **toprakların teyidi** (İtalya · Polonya · Romanya ·
Çekoslovakya · Sırbistan · Macaristan · Avusturya) veri + kaynak işidir —
`yerlesimler.js`/gövde, Oturum 0 ve bir sınır kolu; ben ölçmedim (görsel
`parti-emrelic-0077/H-0049-1.png`). ② **aşama aşama oynatma** H-77:20 ile AYNI
mekanizmadır (madde içinde sıralı, tarihli alt adımlar + ⏮⏭). Önerim: ikisini
tek altyapıyla (`alt_kronoloji`) yapmak; Avusturya-Macaristan'ın alt adımları
= Saint-Germain / Trianon / sınır kararlarının günleri, her biri kaynaklı.

---

## 2. İstediklerim
1. **H-79:9 kapsamı:** kalan ~79 öğenin metni `index.html` `title`ına mı
   (öneri) `IPUCU_EK`e mi?
2. **H-77:20 / H-77:49:** `alt_kronoloji` şeması onayı + pilot verisi için kol.
3. **Sürüm damgası:** `app.js` + `style.css` değişti — `surum_damgala.py` koordinatörün.
