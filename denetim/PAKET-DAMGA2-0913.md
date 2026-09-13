# PAKET-DAMGA2 — 70 paket maddesinin kanıtla yeniden damgalanması

**PAKET-DAMGA2 · 13 Eylül 2026** · 1.MURAT sevki · kaynak: `denetim/OLCUM-PAKET-SINIF-0913.md` A sınıfı (69) + `parti-emrelic-0048/H-0005`
ClaudEmre commit: **`7732216`** (18 CEVAP.json, adlarıyla hem `add` hem `commit` pathspec, push edildi). Bu rapor commit edilmedi.

## Sonuç

```
70 madde sınandı · 70 damgalandı · kanıtı tutmayan 0
eski   sirada 46 · olculecek 24
yeni   sirada 38 · cozuldu 28 · zaten-dogru 2 · senin-kararin 1 · gerek-yok 1
       sirada 38'in 21'i "ARASTIRMA BITTI" notlu (yama koşu 10 yayınından / motor koşu 11'den sonra)
ozet.py "atlas"   açık madde 192 → 160 · karar bekliyor 4 → 5
```

⚠️ 192 → 160 farkı 32: kapanan 31 (cozuldu 28 + zaten-dogru 2 + gerek-yok 1) + `senin-kararin`e geçen 1 (0035/H-0062), ozet onu açık yerine karar kovasında sayıyor.

🔴 **Kendi hatamın kaydı:** ClaudEmre `7732216` commit mesajı ve tahta M-3855 "sirada 38'in **25**'i ARASTIRMA BITTI" diyor. Ölçülen **21** (bu raporun üreticisi saydı). Commit yeniden yazılmadı; düzeltme tahtada ayrı mesajla bildirildi.

## Kanıt yöntemi

- Her madde için işçi raporunun ilgili bölümü okundu ve iddia edilen dosya `git show --stat <commit>` ile sınandı: fbbb2f9 (js/app.js · js/suzgec.js · css) · 1a0254c (ekokuma*.js · gorsel_madde.js · 9 görsel) · 632a042 (olaylar_ek5/ek8/ek16/ek20 · olaylar_p0049.js · etiket_yama.js · index.html) · e3b4255 ve 42c6b6d (savaslar.js) · 76f8f42 / fc3c030 / b7ab563 / b9f0707 (yalnız denetim/ raporu + YAMA JSON) · b6428e7 (app.js · suzgec.js) · 2b208da / d778798 (ekokuma) · 8f2e3f4 (61 kronoloji dosyası). 13188d0 (yerlesimler_ok101.js) ve 038e686 de sınandı; `e53c86a` `a00592d`nin atası (merge-base, çıkış 0).
- Damga betiği (scratchpad `damga2.py`) uygulamadan önce diskte içerik sınadı: `DEVIR_TARAMA_ACIK = false` · `sv-sade` · `toprakIndeksleri` · `_icNotAyikla` · `"ekokuma_celali"` (app.js) · 6 görsel kimliği · Otranto/Topkapı kart kimlikleri · p0049 günleri (1303 · 1578-08-09 · 1919-04-12) · ek5 1331-03-03 / 1787-08-16 · ek10 `odak_kimlik` ve `ic_not_d` · 9 SEFERLER kimliği · index.html `olaylar_p0049.js` · Fizan "1551'E BAĞLAR" yalnız `ic_not_d`de · `etiket_yama` index.html/app.js'te **yok**. **Kanıt hatası 0.**
- Yazım: yalnız hedef maddelerin `hukum`/`not` değerleri yerinde değiştirildi (ham metin üzerinde değer değiştirme; satır sonu CRLF/LF dosya başına korundu). Her dosya için sınandı: JSON geçerli · madde anahtarları ve sırası aynı · hedef dışı maddeler birebir aynı · hedef maddelerin öteki alanları aynı. `git diff --stat`: 17 izlenen dosya, 117/117 satır.
- Kelime dağarcığı: yalnız `cozuldu · zaten-dogru · sirada · olculecek · gerek-yok · senin-kararin · tekrar`; `gerek-yok` notu "GEREKCE" taşıyor.

## Madde madde (eski → yeni · kanıt · not başı)

### A1 — 13

| madde | eski → yeni | kanıt | notun ilk cümlesi |
|---|---|---|---|
| `0042/H-0040` | sirada → **cozuldu** | fbbb2f9 | YANLIS PORTRE DUZELDI |
| `0042/H-0041` | sirada → **cozuldu** | fbbb2f9 | KANUNI PORTRESI EMIR SULEYMAN MADDELERINDEN KALKTI |
| `0042/H-0023` | sirada → **cozuldu** | fbbb2f9 | UZAK ZOOMDA SAVAS ISARETI ARTIK SILINMIYOR |
| `0042/H-0024` | sirada → **cozuldu** | fbbb2f9 | H-0023 ILE TEK IS |
| `0042/H-0026` | sirada → **cozuldu** | fbbb2f9 | H-0023 ILE TEK IS |
| `0031/H-0005` | sirada → **cozuldu** | fbbb2f9 | KOYU KIRMIZI DUZELDI VE M-2104'UN ISTEDIGI KAYIT YAZILDI. |
| `0030/H-0001` | sirada → **cozuldu** | fbbb2f9 | EVET, SEBEP BIZANS MAVISI USTUNE YARI SAYDAM OSMANLI KIRMIZISIYDI |
| `0042/H-0035` | sirada → **cozuldu** | fbbb2f9 · 038e686 | TIMUR OKLARI VERIDE VE KRONOLOJIYLE GORUNUR PENCEREDE |
| `0042/H-0036` | sirada → **cozuldu** | fbbb2f9 | CEKILIS OKU KAYITLI VE GORUNUR PENCEREDE |
| `0021/H-0030` | sirada → **sirada** | e3b4255 · 632a042 | YARISINDAN FAZLASI INDI, KALUGERAN ISARETI VE ERDEL ACIK. |
| `0042/H-0003` | sirada → **cozuldu** | fbbb2f9 | KOD INDI |
| `0027/H-0006` | sirada → **sirada** | fbbb2f9 | PLAN YAZILDI, KOD YOK |
| `0023/H-0003` | sirada → **sirada** | fbbb2f9 | 0027/H-0006 ILE TEK IS |

### A2 — 11

| madde | eski → yeni | kanıt | notun ilk cümlesi |
|---|---|---|---|
| `0045/H-0007` | sirada → **sirada** | 1a0254c · d778798 | UCUNCU DALGA INDI, IS SURUYOR. 1a0254c |
| `0045/H-0009` | sirada → **sirada** | 1a0254c · d778798 | IKI DALGA DAHA INDI, IS SURUYOR. 1a0254c |
| `0045/H-0010` | sirada → **sirada** | 1a0254c | UCUNCU DALGA INDI, IS SURUYOR |
| `0045/H-0011` | sirada → **sirada** | 1a0254c · 7e2cc6d | IKINCI DALGA INDI, IS SURUYOR |
| `0044/H-0020` | sirada → **cozuldu** | 1a0254c · d5a0618 | KAPANDI |
| `0034/H-0044` | sirada → **cozuldu** | 1a0254c | KAPANDI |
| `0032/H-0009` | sirada → **cozuldu** | 1a0254c | KAPANDI |
| `0032/H-0010` | olculecek → **sirada** | 1a0254c | ARANDI, BULUNAMADI |
| `0032/H-0013` | sirada → **sirada** | 1a0254c · 2b208da · d778798 | IS SURUYOR |
| `0032/H-0014` | olculecek → **cozuldu** | 1a0254c · 8f2e3f4 | KAPANDI |
| `0027/H-0005` | sirada → **cozuldu** | 1a0254c | KAPANDI |

### A3 — 11

| madde | eski → yeni | kanıt | notun ilk cümlesi |
|---|---|---|---|
| `0046/H-0001` | sirada → **cozuldu** | 632a042 | KAPANDI |
| `0045/H-0008` | sirada → **cozuldu** | 632a042 | KASIM HANLIGI ODAGI INDI |
| `0042/H-0004` | sirada → **sirada** | 632a042 | MADDE INDI, OK ICIN KOD KARARI ACIK. Sefer oku veride zaten var |
| `0042/H-0010` | sirada → **cozuldu** | 632a042 | KAPANDI |
| `0039/H-0004` | sirada → **sirada** | 632a042 | ILK PARTI INDI |
| `0035/H-0059` | sirada → **sirada** | 632a042 | METIN KISMI INDI, GERMIYAN KISMI ACIK. 632a042 |
| `0035/H-0062` | sirada → **senin-kararin** | 632a042 | SORU SENIN: Demak 1527 gibi Osmanli'yi ilgilendirmeyen dunya maddeleri kapsam:'dis' diye isaretlenip dunya esi |
| `0035/H-0065` | sirada → **sirada** | 632a042 | SEBEP BULUNDU VE METIN DUZELDI, IBRIM'IN BASLANGIC GUNU ACIK. Harita kipirdamiyor cunku atlas Ibrim'i 1517-04- |
| `0035/H-0090` | sirada → **sirada** | 632a042 · 42c6b6d | ILK PARTI INDI, SINIF IS SURUYOR |
| `0032/H-0003` | olculecek → **sirada** | 632a042 | ARASTIRMA BITTI |
| `0020/H-0013` | sirada → **sirada** | 632a042 | MADDE INDI, YERLESIM GUNU KOSU SONRASI. 632a042 |

### A5 — 2

| madde | eski → yeni | kanıt | notun ilk cümlesi |
|---|---|---|---|
| `0035/H-0034` | sirada → **sirada** | 632a042 | SINIFLANDIRMA URETILDI, ARAYUZE BAGLANMADI. 632a042 |
| `0035/H-0066` | sirada → **sirada** | 632a042 | SINIFLANDIRMA URETILDI, ARAYUZE BAGLANMADI. 632a042 |

### A4 — 6

| madde | eski → yeni | kanıt | notun ilk cümlesi |
|---|---|---|---|
| `0035/H-0081` | sirada → **cozuldu** | e3b4255 | KAPANDI |
| `0035/H-0093` | sirada → **cozuldu** | e3b4255 | KAPANDI |
| `0035/H-0094` | sirada → **cozuldu** | e3b4255 | KAPANDI |
| `0035/H-0095` | sirada → **cozuldu** | e3b4255 | KAPANDI |
| `0035/H-0098` | sirada → **cozuldu** | e3b4255 | KAPANDI |
| `0033/H-0018` | sirada → **sirada** | e3b4255 | GUZERGAH INDI, KALELER KOSU SONRASI. e3b4255 |

### A6a — 12

| madde | eski → yeni | kanıt | notun ilk cümlesi |
|---|---|---|---|
| `0042/H-0011` | olculecek → **sirada** | 76f8f42 | ARASTIRMA BITTI |
| `0042/H-0025` | olculecek → **sirada** | 76f8f42 | ARASTIRMA BITTI |
| `0042/H-0027` | olculecek → **sirada** | 76f8f42 | ARASTIRMA BITTI |
| `0042/H-0028` | olculecek → **sirada** | 76f8f42 | ARASTIRMA BITTI |
| `0042/H-0029` | olculecek → **sirada** | 76f8f42 | ARASTIRMA BITTI |
| `0042/H-0031` | olculecek → **zaten-dogru** | 76f8f42 | VERI DOGRU |
| `0042/H-0043` | olculecek → **sirada** | 76f8f42 | ARASTIRMA BITTI |
| `0035/H-0052` | olculecek → **sirada** | 76f8f42 | ARASTIRMA BITTI |
| `0035/H-0070` | olculecek → **cozuldu** | 76f8f42 · e53c86a · a00592d · b6428e7 | NORMAL DEGILDI, KOKU COZULDU VE O TARAMA ARTIK HIC YOK. Solnok verisi temiz: d 1552-09-04 -> 1685-10-19, sonra |
| `0034/H-0036` | olculecek → **sirada** | 76f8f42 | ARASTIRMA BITTI |
| `0021/H-0005` | sirada → **sirada** | 76f8f42 | ARASTIRMA BITTI |
| `0019/H-0050` | sirada → **sirada** | 76f8f42 | ARASTIRMA BITTI |

### A6b — 6

| madde | eski → yeni | kanıt | notun ilk cümlesi |
|---|---|---|---|
| `0042/H-0007` | olculecek → **sirada** | fc3c030 | ARASTIRMA BITTI |
| `0042/H-0006` | olculecek → **sirada** | fc3c030 | ARASTIRMA BITTI |
| `0040/H-0009` | olculecek → **sirada** | fc3c030 · 42c6b6d | ARASTIRMA BITTI |
| `0035/H-0035` | olculecek → **sirada** | fc3c030 · 42c6b6d | ARASTIRMA BITTI |
| `0035/H-0077` | olculecek → **sirada** | fc3c030 · 42c6b6d | ARASTIRMA BITTI |
| `0035/H-0080` | sirada → **cozuldu** | fc3c030 · 42c6b6d | KAPANDI |

### A6c — 8

| madde | eski → yeni | kanıt | notun ilk cümlesi |
|---|---|---|---|
| `0035/H-0020` | olculecek → **sirada** | b7ab563 | ARASTIRMA BITTI |
| `0035/H-0037` | olculecek → **gerek-yok** | b7ab563 | VERI DEGISTIRILMEZ |
| `0035/H-0039` | olculecek → **cozuldu** | b7ab563 | O GUN HAKLIYDIN, BUGUN COZULMUS |
| `0035/H-0058` | olculecek → **zaten-dogru** | b7ab563 | VERI DOGRU |
| `0035/H-0063` | olculecek → **sirada** | b7ab563 | ARASTIRMA BITTI |
| `0035/H-0076` | sirada → **sirada** | b7ab563 · e53c86a · b6428e7 | TARAMA KISMI COZULDU, ARASTIRMA YENI BIR VERI KUSURU BULDU |
| `0035/H-0088` | olculecek → **sirada** | b7ab563 | ARASTIRMA BITTI |
| `0033/H-0019` | sirada → **cozuldu** | b7ab563 · 13188d0 | O GUN NOKTASIZDI, BUGUN KAPANMIS |

### KRON2 — 1

| madde | eski → yeni | kanıt | notun ilk cümlesi |
|---|---|---|---|
| `0048/H-0005` | sirada → **cozuldu** | 8f2e3f4 · b6428e7 | KAPANDI |

## Damgalanmayanlar

Sevkteki kapsamın **hiçbir maddesi** kanıt sınavında düşmedi; damgalanmayan madde yok. Ama şu kısmî sonuçlar `cozuldu` VERİLMEDİ ve niçin:

- **A5 (0035/H-0034 · H-0066):** `data/etiket_yama.js` bir öneri dosyası; index.html ve js/ içinde yüklenmiyor (ölçüldü) ⇒ `sirada`.
- **0027/H-0006 · 0023/H-0003:** A1 yalnız plan yazdı, kod yok; engel kaynaklı `data/ittifaklar.js` ⇒ `sirada`.
- **0021/H-0030:** sefer oku ve 2/3 isyan işareti indi; Kalûgerân işareti (gün yok) ve Erdel açık ⇒ `sirada`.
- **0042/H-0004:** madde indi ama A3 ölçtü — madde oku öne çekmiyor, app.js kırpma çapası kararı açık ⇒ `sirada`.
- **0035/H-0059 · H-0065:** metin düzeldi; Denizli 1425 kaynağı taranmadı / İbrim 1517 başlangıcı kaynaklar ayrışıyor ⇒ `sirada`.
- **0032/H-0010:** Sultânî görseli arandı, CC0/PD bulunamadı; lisans kırmızı çizgisi gevşetilmedi ⇒ `olculecek` → `sirada`.
- **0035/H-0037 Fâv:** `zaten-dogru` VERİLMEDİ — A6c'nin kendi cümlesi "bu bir doğrulama değil, kaynağın sessizliği"; `gerek-yok` + gerekçe.

## Ölçülmeyenler / sınırlar

- Canlı harita ve tarayıcı açılmadı; js/css değişen maddelerin notuna "Gorsel dogrulama yapilmadi; yayinda kosu 10 zinciri surum damgasini basinca gorunur" yazıldı.
- İşçilerin iç ölçüm sayıları (ör. portre 534→525, toprak 525/1350, bağ 551/551) yeniden koşturulmadı; rapor + commit dosya kümesi + diskteki içerik imleri sınandı.
- 0035/H-0039 Bahreyn zincirini veriye indiren commit tek olarak bulunamadı (git log -S birden çok aday verdi); not A6c ölçümüne (b7ab563) dayanıyor.
- 0048/H-0002 (`senin-kararin`) ve F paketinin 13 maddesi bu işin dışında; dokunulmadı.
- `ozet.py` `KUTU.md` ve `BEKLEYENLER-ATLAS.md`yi yeniden yazdı; commit'e alınmadı. Index'te başka bir oturumun sahnelediği `BEKLEYENLER.md` duruyordu, commit pathspec'i onu dışarıda bıraktı (`git show --name-only 7732216`: yalnız 18 CEVAP.json).
