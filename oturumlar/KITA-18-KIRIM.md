# KITA 18 — İlerleme / teslim notu

```
OTURUM      KITA 18 · local_51c63067-51c9-4ea3-aa3e-ec9e8fc4c566
GÖREV       M-3592 → İŞ⑦ (Kırım bozkırı statüsü, H-0003 · H-0009)
DURUM       TESLİM EDİLDİ (denetim/ARASTIRMA-KIRIM-0912.md + VERI-KIRIM-0912.json)
DATA/ARAC   DOKUNULMADI (araştırma oturumu, §7)
```

## Ne yapıldı

1. Mevcut veriyi ölçtüm: Bahçesaray/Kefe/Kerç/Taman/Azak/Anapa'nın hâlihazırdaki
   `d:`/`v:`/`s:` kayıtları çoğunlukla ZATEN DOĞRU çıktı (Kefe sancağı
   doğrudan Osmanlı, Bahçesaray tâbi Kırım).
2. `data/yerlesimler_ek_bozkir.js`i buldum (10 Eylül, iki gün önce canlı
   olmuş) — Yedisan/Kuban Nogay/Stavropol-Kuma bozkır dolgu kayıtlarını
   zaten eklemiş, ve kendi yorumunda bir tutarsızlığı (`v:` vs `s:` aynı
   siyasi yapı için) zaten itiraf etmiş.
3. TDV `kirim` ve `anapa` maddelerini okudum (yeni fetch) — "gevşek
   tâbiiyet" ifadesini doğrudan buldum, ve Anapa'da veriye işlenmemiş bir
   1791-92 Rus işgali keşfettim (yeni bulgu, öngörülmemişti).
4. `bos:` alanının arayüz borcunu ölçtüm: 348 kayıt (361 değil — canlılık
   farkı), `js/app.js` bunu hiç okumuyor, AMA Kırım bozkırı kayıtları zaten
   bu alanı kullanmıyor (yalnız `s:` kullanıyor) — yani bu borç Kırım
   bozkırını şu an doğrudan etkilemiyor.
5. Üç seçenekli bir model önerisi yazdım (A: statükoyu koru + kaynak notu
   ekle · B: ikinci kademe tâbilik şeması · C: bos:"kabile" — bu üçüncüsü
   ÇALIŞMAZ, gerekçesi raporda).

## Açık kalan / koordinatöre soru

🔴 **H-0007(a) (Gürcistan'ın 15. yy'da Karakoyunlu'ya tâbiliği) benim
görevimde mi?** M-3592'nin paket-düzeyi satırı ("İŞ⑦ KIRIM BOZKIRI + GURCU
TABIIYETI H-0003·0009·0007(a) -> KITA 18") bunu bana bağlıyor gibi
görünüyor, ama bana gelen DETAYLI görev metni (send_message ile) yalnız
Kırım'ı anlatıyordu, Gürcistan'dan hiç bahsetmiyordu. OKUMADIM/ARAMADIM —
tahmin yürütüp yanlış bir kayda bakmak yerine sordum. Eğer benim işimse,
hangi yerleşim kaydı/kırılma kastediliyor (H-0007'nin tam metni) lazım.

🔴 **Anapa'nın 1791-92 kırılması** — veriye YAZILMADI (yetkim yok). TDV
kaynağı ve önerilen biçim raporda (`ARASTIRMA-KIRIM-0912.md §④`). Hangi
oturuma/ne zaman verileceği koordinatörün kararı.

## Dosyalar

- `denetim/ARASTIRMA-KIRIM-0912.md` — tam rapor
- `denetim/VERI-KIRIM-0912.json` — yapılandırılmış bulgu
- Bu dosya
