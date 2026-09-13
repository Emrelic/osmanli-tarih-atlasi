# KITA 29 — ÖNGÖRÜ · Ferhat Paşa 1590 doğu sınırı · paket 0046

**Yazıldığı an:** 13 Eylül 2026 — `ARAC-KITA29-KESIT-0913.py` **hiç koşmadan**,
TDV/Iranica **gövdelerinden tek cümle okunmadan** (D022).
Damganın kanıtı: bu dosya kesit aletinin ilk çıktısından önce commit'lenecek.

## ZEMİN — öngörü DEĞİL, ölçülmüş girdi
```
EVREN (ARAC-KITA29-EVREN-0913.py · 3818 nokta)
  Emre'nin 12 adının 12'si atlasta VAR — Revan · Gümrü (Aleksandropol) ·
  Eçmiyadzin · Nahçıvan · Ordubad · Çaldıran · Başkale · Şerur (Sharur) ·
  Mâku · Hoy · Merend · Selmâs (Dilman)
  🔴 grep -i bunlardan Çaldıran/Başkale/Mâku/Şerur/Gümrü/Eçmiyadzin/Selmas'ı
     "yok" gösterdi (Git Bash Türkçe bayt) — hüküm yorumlayıcıdan alındı
TDV HTTP   200: revan erivan maku hoy nahcivan tebriz azerbaycan karabag gence
               sirvan gurcistan murad-iii ferhad-pasa luristan abbas-i safeviler
               kars osman-pasa-ozdemiroglu cigalazade-sinan-pasa nasuh-pasa
               amasya-antlasmasi urmiye
           302: gumru ecmiyadzin ucmiyazin uckilise cukursad serur merend selmas
               ordubad caldiran baskale culfa kotur istanbul-antlasmasi
IRANICA    200: abbas-i boundaries-i ganja azerbaijan-iii safavids
           301 (yönlendirme, ÇÖZÜLMEDİ): ottoman-persian-relations-i/ii erevan
               shirvan khoy maku georgia-iii
ÖNCEKİ     BULGU-FERHATPASA (28 Ağu): Merend/Selmas 1595'te safevi, kaynak yok ·
           Gümrü/Eçmiyadzin kaynak yok (Iranica) · TDV bu ikisi için ARANMAMIŞ
           KITA 13 (dün): Çaldıran/Başkale/Şeyhrumi 1548→1639 safevi (kusur,
           yama A inmedi) · Mâku atlasta hiç Osmanlı değil, TDV 1574-1640 der
```

## ÖNGÖRÜLER — dört alan (ne · mazeret · çıktı+birim · koşu+karşı)

| # | NE BEKLİYORUM | MAZERET | ÇIKTI · BİRİM | KOŞU · NEYE KARŞI |
|---|---|---|---|---|
| **Ö1** | `1590-03-21` kesitinde Emre'nin 12 adı: **OSMANLI 4** (Revan · Nahçıvan · Ordubad · Hoy) · **safevi 8** (Gümrü · Eçmiyadzin · Çaldıran · Başkale · Şerur · Mâku · Merend · Selmâs) | 🟡 **Şerur hiç ölçülmedi** — onun için tahmin; Nahçıvan kalıbını izliyorsa OSMANLI çıkar ve sayı 5/7 olur. Öteki 11 önceki iki ölçümden türetildi. | KESİT aletinin `1590-03-21` sütunu · sahip dizgisi · sayım | ilk KESİT koşusu · bugünkü `girdi.yukle()` (koşu 10'un donuk girdisi) |
| **Ö2** | Kutuda (35,5-42,6°K · 41,5-50,5°D, 100 nokta) `1590-03-21`de **en yakın 8 komşusunun ≥6'sı farklı sahipte** olan nokta: **5-9**, içlerinde en az Gümrü · Eçmiyadzin · Çaldıran · Başkale · Mâku | 🟡 8-komşu ölçütü **geometri ölçmüyor** (KITA 13: *"petek bitişikliği değil"*). Kıyı/sınır çıkıntısı yanlış pozitif verebilir. | KESİT §C · nokta sayısı | aynı koşu · Ö1 ile birlikte |
| **Ö3** | TDV `revan` gövdesi 1583 fethini **yıl** düzeyinde verecek (gün yok) ve **Gümrü · Eçmiyadzin**'i 1583-1604 bağlamında **ADIYLA ANMAYACAK** ⇒ ikisi için `bulunamadı` (üçüncü kez) | 🟡 **Tarihî Türkçe adla** geçebilir: *Üçkilise · Eçmiyazin · Şüregel · Gümrü* — dördü de anahtar olarak aranacak. Geçerse öngörü çürür ve hüküm KESİN'e çıkar. | `ARAC-KITA13-TDVPASAJ` · `revan` · eşleşen cümle sayısı + cümlenin TARİHLEDİĞİ olay | ilk TDV turu · 28 Ağu `bulunamadı` hükmüne karşı |
| **Ö4** | TDV `maku`: Mâku **1590'da OSMANLI** (1574 ocaklık) ⇒ atlas kusurlu. **Ama 1603-1639 arası statü maddeden AYRIŞTIRILAMAYACAK** — bir kısmı `ölçülemedi` | 🟡 **Nasuh Paşa (1612) "1555 sınırına dönüş"** ile *"IV. Murad'ın ölümünden sonra İranlılar TEKRAR işgal etti"* **çatışıyor gibi görünecek.** `§4⑥` ön koşulu: önce ayrıştır, sonra çelişki ilan et. | TDVPASAJ `maku` · dönem başı/sonu için alıntı var/yok | ilk TDV turu · KITA 13'ün `[17]` `[22-24]` alıntılarına karşı |
| **Ö5** | H-0011 toprak listesi **tek bir TDV maddesinden ÇIKMAYACAK**; en az **3 kaynaktan** birleştirilecek. Liste **BÖLGE** adları taşıyacak (Azerbaycan/Tebriz · Şirvan · Karabağ/Gence · Gürcistan · Luristan · Kürdistan'ın bir kısmı), **ne çizgi ne yer listesi** ⇒ C kaydı `hassasiyet:"bolge"` | 🟡 Iranica `abbas-i` Erdebil gibi **ADLI istisnalar** verirse `"karma"` olur. | kaynak sayısı · liste öğelerinin cinsi (bölge/yer/çizgi) | TDV+Iranica turu · `SEMA-C §11` hassasiyet sözlüğüne karşı |
| **Ö6** | Atlasın 1590 Osmanlı gövdesi kaynaklı **bölgelerin çoğunu** kapsıyor (bölge bazında sapma **0-1**); sapma **yerleşim bazında** — Emre'nin 12'sinden **4-8** yama adayı | 🟡 Kürdistan altılısı (Ardalan) 28 Ağu'da `bulunamadı` — bölge sayımında belirsiz kalabilir | yerleşim bazında KESİN/ÇIKARIM/BULUNAMADI sayımı | teslim tablosu · Ö1'e karşı |
| **Ö7** | `1607-06-15` kesitinde kutudaki 1583-1590 kazançlarının **tamamı safevi'ye dönmüş**; `1612-11-21` (Nasuh Paşa) **yeni kırılma üretmiyor** (1607 ile aynı tablo) | 🟡 Kotur (atlas 1639) ve Mâku (TDV 1640) **istisna** olabilir | KESİT `1607-06-15` ↔ `1612-11-21` sütun farkı · sayım | ilk KESİT koşusu |
| **Ö8** | **Kaynaklı yazılabilir yama: 2-5 kayıt** · kaynaksız kalıp yazılmayan ÇIKARIM: **3-6** · Değişmez 2 için yeni kırılma günü **0-1** | 🟡 KITA 13 yaması (A grubu) Çaldıran/Başkale'yi zaten kapsıyor — onları sayarsam şişer; **saymayacağım**, yalnız "o yama 1590'ı da çözer" diye bağlayacağım | YAMA-KITA29 kayıt sayısı · yeni gün sayısı | teslim · bu öngörüye karşı |

## 🔴 ÖNCEDEN YAZILAN SINIRLAR
- `data/` DONUK — çıktı YAMA + ÖLÇÜM + C TASLAĞI. Hiçbir `data/` dosyasına yazılmaz.
- **Komşu kuşatması KAYNAK DEĞİLDİR** (28 Ağu kuralı): kaynaksız yere yama yazılmaz, `ÇIKARIM` damgası alır.
- "Zaten doğru" bir **sonuçtur** — dünkü paketin üçte biri öyle çıktı.
- 12 adı **H-0010 (Nahçıvan anı, 1585)** ve **H-0012 (antlaşma, 1590)** için AYRI soruyorum: bir yer 1585'te değil 1590'da Osmanlı olabilir.
