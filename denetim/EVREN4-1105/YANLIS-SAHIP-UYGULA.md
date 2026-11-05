# Yanlış sahip hızlı kalemi — uygulama talimatı (KASA PAZAR; EMRELİC gece-126/127)

Öneri dosyası: `YANLIS-SAHIP-ONERI.json`, 56 kayıt (Tanganika 28 · Güney Rodezya 9 · Togo 9 · Kıbrıs 10). KASA SALI veriye yazmaz.

## Dilim hükümleri

| grup | KAYNAKLI | ONERI | ONERI-KARAR | BEYANLI | BULUNAMADI |
|---|---|---|---|---|---|
| Tanganika | 0 | 12 | 79 | 0 | 0 |
| Güney Rodezya | 8 | 10 | 0 | 4 | 0 |
| Togo | 0 | 11 | 11 | 7 | 1 |
| Kıbrıs | 10 | 0 | 1 | 8 | 0 |

## KASA kontrolü (`yanlis_kontrol.py`)

27 işaret çıktı; hepsi açıklanabiliyor:

- **13 × "t > künye t"**: hepsi bekleyen künye değişikliklerine bağlı ve künyelerle **AYNI commit'te** girmeli:
  - `alman-togo` t 1914-08-26 → **1919-06-28** (zaten LAB UYGULA'da). Togo'nun 9 kaydı + Yendi.
  - `torva` t 1683 → 1684-01-01 ve `rozvi` t 1834 → 1840-01-01 (LAB 89dc439b1). Khami ve Danangombe.
  - `dagbon` t 1899-01-01 → 1899-11-14 (yeni öneri, LAB'a; BEYANLI). Yendi.
- **10 × "s bitişik değil" (Kıbrıs):** beklenen durum. 1570–1878 boşluğunu `d:` Osmanlı katmanı dolduruyor; Lefkoşa'da da böyle.
- 🔴 **4 × "künye yok: osmanli"** (Akrotiri, Episkopi, Dikelya, Güzelyurt): BİÇİM HATASI. Ajan `d:` katmanına `d:"osmanli"` yazmış. Atlasta Osmanlı `d:` katmanı id taşımaz. Lefkoşa (yerlesimler.js:678): `d:[{f:"1570-09-09",t:"1878-06-04",y:"kusatma"}]`, yani `y:` edinim yolu. KASA PAZAR bu dört kaydın `d:` dilimini Lefkoşa biçimiyle yazmalı (id yok; `y:` Limasol/Larnaka/Lefkoşa'nınkini izler).
- "kaynaksız" geçen dilim: 2 (ONERI içinde; uygulamadan önce bakılmalı).

## Gruplar

- **Tanganika:** sistemik model uygulandı.
  - DOA t 1919-06-28 (künye zaten öyle); altında `isg ingiltere` 1916-09-01 → 1919-06-28; ardından `s: ingiltere` → 1922-07-20; ardından manda.
  - 21 kayıt sistemik düzeltmede. Njombe, Songea, Masasi, Tunduru ve Bveranyange yerel sahip → DOA zincirine bağlandı. Kilwa Kisiwani ve Kilindoni'ye manda dilimi eklendi.
  - Yere özgü İngiliz giriş günü hiçbir yer için bulunamadı; ülke düzeyi 1916-09-01 kullanıldı (ONERI-KARAR).
  - ⚠️ **Kilindoni (Mafia):** TDV «Tanzanya» Mafia'nın Kasım 1914'te alındığını söylüyor; atlas 1916-09-19 diyor. EMRELİC kararı. Önerim: TDV esas, `isg ingiltere` f 1914-11 (ay hassasiyeti, 1914-11-01 + beyan).
- **Güney Rodezya:** 8 kayıtta `ingiltere` → `ingiliz-guney-rodezya`. 1979-12-12 → 1980-04-18 `ingiltere` dilimi kalır (t KAYNAKLI: TDV «Zimbabve» 18 Nisan 1980).
  - Khami: `torva` → 1684 `rozvi` → 1840 `matabele` → 1893-11-04 `ingiliz-guney-rodezya`. Terk edilip edilmediği kaynakta bulunamadı (merdiven ④).
  - Danangombe: `rozvi` → 1840 `matabele` → 1893-11-04 `ingiliz-guney-rodezya`.
- **Togo:** bölge modeli, İngiliz Togoland raporundan (1920, archive.org, ham metin).
  - İngiliz sektörü: Lomé, Misahöhe (Ho, Kpando, Hohoe), Kete-Kratchi, Yendi. Fransız sektörü: Anecho, Atakpamé, Sokodé, Sansanne-Mangu (Kara, Notse coğrafî çıkarım).
  - Zincir: `alman-togo` → `isg ingiltere|fransa-cumhuriyet` 1914-08-26 (Lomé 1914-08-07 KAYNAKLI) → 1919-06-28 `s:` idareci → 1922-07-20 manda.
  - BULUNAMADI: 1914-12-27 bölüşüm günü ve Lomé'nin Fransızlara geçişi (~1920-10-01).
  - ⚠️ **Lomé 1919-06-28 → 1922-07-20 sahibi açık:** İngiliz mi Fransız mı (1920 devri)? EMRELİC kararı.
  - Yendi: `ingiltere` 1899–1957 yanlıştı. Doğrusu 1899 `alman-togo` → İngiliz sektörü.
- **Kıbrıs:** 6 kayıt zaten Lefkoşa modelinde; bunların hiçbirinde 1914 kırılması YOK. 4 kayıt (Akrotiri, Episkopi, Dikelya, Güzelyurt) aynı modele çekildi (abi merkez BEYANLI).
  - Güzelyurt'taki `kibris-ingiliz-kolonisi` 1914 dilimi kaldırıldı; TDV'nin 5 Kasım 1914 ilhakı (KAYNAKLI) `ic_not`a yazılır.
  - Üç üs kaydı 1960 sonrası `akrotiri-dekelya` (LAB kararı).
  - Not: bütün Kıbrıs'a 1914 kırılmasını uygulama seçeneği EMRELİC'e açık; bugünkü karar "hepsi Lefkoşa gibi = 1914 yok".

## EMRELİC kararları (gece-127)

- **Kilindoni (Mafia):** TDV esas: `isg ingiltere` f 1914-11-01 + ay beyanı; atlasın 1916-09-19'u kalkar.
  - Şart: TDV cümlesinin Mafia'yı özgül olarak tarihlediği doğrulanmalı; bazı kaynaklar Ocak 1915 verir. Doğrulanmazsa ONERI ve iki tarih `ic_not`a. Doğrulama ajanı (KUYRUK2) başladı.
- **Lomé 1919–1922:** önerilen model onaylandı (`s: ingiltere` BEYANLI → 1922-07-20 manda). Devir günü aranır (Milner–Simon 1919-07-10; fiilî devir 1920 sonbaharı; 1920–22 İngiliz Togoland raporları ve Fransız yıllıkları).
  - Bulunursa: `s: ingiltere` → devir günü `s: fransa-cumhuriyet` → 1922-07-20 `fransiz-togo`.
  - Bulunmazsa: "devir ~1920, gün bulunamadı" `ic_not`a.
- **Kıbrıs:** Lefkoşa modeli; 1914 ilhakı `ic_not`ta.
- **6 madde:** kuyruğa alındı (`MADDE-TASLAK-KUYRUK2-1105.json`, Sonnet).

## D2

Yeni kırılmalar için madde taslakları JSON'da (Türkçe b): Lomé 1914-08-07, Togo teslimi 1914-08-26, Yendi 1899-11-14, Khami/Danangombe 1684 ve 1840, Versay 1919-06-28. D2 evreninde var mı ölçülmedi; madde kuyruğuna alınır (7 dil).
