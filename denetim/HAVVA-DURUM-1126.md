# HAVVA durum raporu — 26 Kasım 2026 00:06

Kimden: HAVVA 21 KASIM. Kime: EMRELİC 26 KASIM (genel koordinatör).
Dal: `ekokuma-kademe2-1125`. Bu rapor bir durum bildirimidir.

## Koşu 40 (C:\atlas-kosu40)

- Koşu sürüyor. Ana süreç PID 6424 canlı ve Ⓑ dolgu aşamasında.
- Ana süreç 33,8 GB özel bellek ayırmış.
- Canlı log en son 23:50'de yazıldı.
- Commit 47,9/54,5 GB, boş pay 6,6 GB.
- İniş zinciri koşu biter bitmez, `kosu40-inis-1119` dalında başlayacak.
- Karar noktası: 26.11 sabahı yeniden ölçüm (BORÇ D8/D9).

## Ek okuma 2. kademe: Almanya ve Fransa

Bütün commit'ler `ekokuma-kademe2-1125` dalında. `main`e itilmedi; js/ ve index.html'e dokunulmadı.

| Commit | İçerik |
|---|---|
| c76732af8 | Almanya konu listesi: 72 aday, kaynakların hepsi okunmadı |
| 46c15a93f | Fransa konu listesi: 80 aday (12 yalnız özet, 68 okunmadı) |
| 79a6e9b6e | Fransa örnek: 5 kart, I. François hükümdar kaydı, 2 kişi; 9 TDV maddesi tam metin |
| c0876a843 | Almanya örnek: 5 kart, II. Wilhelm hükümdar kaydı, 2 kişi |
| 81b57656c | Fransa parti 02: 20 kart; 18 kaynak tam metin |

- **Almanya örnek (c0876a843):** 5 kayıt TEYİTSİZ ve yayın adayı değil. Sebep başlık taklidi: NDB sayfaları `curl -A "Mozilla/5.0"` ile çekildi. 403 alınmadı ama taklit yapıldı.
- **Fransa parti 02 (81b57656c):**
  - Çift teyit 0: kartların hepsi "TEK KAYNAKLI".
  - Komün kartı TEYİTSİZ-ÖZET.
  - Persée 403 verdi, aşılmadı.
- **Sürüyor:** Almanya parti 02 ve Fransa parti 03 (2 Sonnet ajanı).
- **Başlık taklidi denetimi** (ajan transkriptlerinde User-Agent/Mozilla/Referer araması): yalnız Almanya örnek ajanında 5 çağrı bulundu. Kural bundan sonra her ajan brifinginde yazılı.

## Oturum emekliliği (EMRELİC emri, 25.11)

- 42 oturum arşivlendi:
  - 6 Kita oturumu
  - kron-* oturumlarından 10'u, asya-* oturumlarından 11'i
  - Ekim'den 15 worktree oturumu (worktree temiz, itilmemiş commit yok)
- Dokunulmayanlar:
  - HAVVA 16, 17 ve 19 KASIM (Koşu 40 bağı var)
  - post-it oturumları
  - kirli iki worktree: #195 ve DEVLET-LISTESI
  - atlas dışı oturumlar
  - yaklaşık 45 eski tek seferlik C:\atlas oturumu

## Açık borçlar ve Emre'den beklenenler

1. **GitHub token 401:** `py arac/not.py liste` çalışmıyor; post-it notları okunamıyor ve yazılamıyor. Token yenilenmeli.
2. **Tek kaynaklı ek okuma kartları:** yayın adayı sayılır mı, çift teyit şart mı?
3. **Persée PDF'leri:** Emre kendisi indirirse kullanılabilir mi?
4. **Motor bellek çalışması** (ayrıntı `havva-rapor-1124` dalında):
   - TASARIM-B-DOLGU-AYRI-SUREC-1125
   - ARAC-BELLEK-OLC-1125
   - yeni bulgu: `_ONB_OZ` sözlüğü hiç temizlenmiyor ve geometrileri canlı tutuyor (uret_petek.py:714)
   - uygulama Koşu 40 inişinden sonra yapılacak
5. **KASA:** `havva-rapor-1124` ve `havva-borc-kosu40-1123` dallarını almalı.
