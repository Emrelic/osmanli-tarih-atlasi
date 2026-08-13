<!-- DURUM: CALISIYORUM | 2026-08-14 02:42 | gece nöbeti · yayın kapısı kör noktası kapandı · Erdel renksizliği bulundu -->

# KOORDİNATÖR — ClaudEmre · 13 Ağustos 2026

🔴 **Bu dosya aynı zamanda `DURUM` damgasının ÖRNEĞİDİR.** Yukarıdaki ilk
satırı kendi dosyana kopyala, üç alanı doldur.

```
<!-- DURUM: <HAL> | YYYY-AA-GG SS:DD | tek satır özet -->
```

**Altı hâl — Emre'nin tarifi (13 Ağustos 2026), birebir:**
```
① HAZIR         "ben oturum olarak buradayım, emir ve görüşlerinize hazırım"
② IS-ISTIYORUM  "iş istiyorum"
③ ALDIM         "iş promptu ulaştı, çalışmaya başlıyorum"
④ CALISIYORUM   "iş üstündeyim, çalışıyorum"
⑤ BITTI         "iş bitti, çıktılar raporlar şunlardır"
⑥ BOSTA         "iş bitti ve bir süredir boşum — yeni iş mi, hazırda mı,
                 yoksa emekli mi edileceğim?"
```

⚠️ **Damga DEĞİŞTİKÇE güncellenir.** Bir kez yazılıp unutulan damga, damga
değil **yalandır** — `py arac/durum_tahtasi.py --bayat 4` tam bunu ölçer.

## Niçin mesaj değil damga

Emre bu altı hâli **mesaj** olarak önerdi. Fikir doğru, ama aynı gün ölçüldü:
```
send_message   "sent" diyor ve HEDEFE VARMIYOR — altı oturum bağımsız doğruladı
git / dosya    tek KANITLI kanal
```
⇒ Altı hâl mesajla taşınamaz. Damga olarak taşınınca **daha da iyi** oluyor:
bir mesaj okunur ve unutulur, bir damga **sorgulanır** — ve `CLAUDE.md §11`in
on birinci dersi tam bunu söylüyor: *"bir `if` ile sorulamıyorsa kayıt vardır,
veri yoktur."*

## Bugün (13 Ağustos) — koordinatörün kendi hesabı

**Yapılanlar:** r1288 yayınlandı (86,2 dk koşu, iki kapı temiz) · Amerika
0→134 nokta · koridor ağı haritaya indi (⑤ altyapı maddesi) · `Değişmez 1c`
doğdu · 81 maddelik paket triyajı · `bos:` cinsi 97→0 · dört yeni sevk.

**Kendi hatalarım — kaydedilmiştir:**
```
① BEŞ KEZ ölü/yanlış adres yazdım. Sebebi yapısal (list_sessions mevcut
   oturumu gizler ⇒ kendi kimliğimi göremem ⇒ her adres bir TAHMİN) ama
   ölçmeden yazmak benim tercihimdi.
   ⇒ arac/adres_nobetci.py (C13 2/2, zincire bağlı)
② send_message'ın "sent"ine BEŞ KEZ güvendim ve "gönderildi" diye rapor
   ettim. "Sent" bir TESLİM değil bir GİRİŞİM kaydıdır — ve §11 bunu zaten
   yazıyordu: "araç kendi eyleminin SONUCUNU değil DENEMESİNİ raporluyor."
   ⇒ oturumlar/POSTA.md — kimliksiz, iki yönlü, git üzerinden
③ BEKLEYENLER kutusu boştu ve ilk teşhisim ("yazmayı unuttum") YANLIŞTI.
   Kalemler saatlerdir oradaydı; üreteç TABLO okuyor, ben DÜZ METİN yazmıştım.
   ⇒ tablo yazıldı, karar 0 → 7
④ Koridoru index.html'e bağlamayı unuttum — üstelik o kuralı KENDİ ELİMLE
   KORİDOR ŞEMA'nın şartnamesine yazmıştım. Yayın kapısı yakaladı.
⑤ Koşuyu oturuma bağlı bir yoldan başlattım, 51 dakika boşa gitti.
   ⇒ arac/zincir_baslat.bat — ayrık süreç
```
📌 Beşinin beşi de aynı sınıftan: **bir aracın raporuna, ölçmeden inanmak.**

## Yarına devir
```
🔴 posta panosu ÇALIŞIYOR MU — tek sınavı: bir oturum POSTA.md'yi okuyup
   damgasını yazacak mı? Pano bir oturumu UYANDIRMAZ; tetik hâlâ Emre'de.
🔵 ① topografya (B1, tek değişkenli koşu) · ③④ m:/kd: · ② Afrika+Okyanusya
🔵 81 maddenin 17'si koşudan sonra YENİDEN ölçülecek (enklav kümesi)
🟡 Emre'de 7 karar — BEKLEYENLER.md, ROZET 7
```
