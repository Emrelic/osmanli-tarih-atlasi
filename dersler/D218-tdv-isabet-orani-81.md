# TDV slug isabet oranı %81 — çürüyen %19 hep canlı-yanlış-madde

> Kimlik `D218` · `CLAUDE.md §4` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

### 🔴 Ölçülmüş isabet oranı: **%81** — ve çürüyen %19'un tamamı `②` tuzağı

8 Ağustos'ta 36 aday slug `§4` yöntemiyle (HTTP kodu **ve** içerik okuması)
tek tek sınandı. **29'u doğrulandı, 7'si çürüdü** — ve yedisinin **yedisi de**
HTTP **200** döndürüyordu. Yani ①'in (ölü slug) hiçbiri yakalanmadı; **hepsi
②'ydi: canlı slug, yanlış madde.**

| aday | HTTP | açtığı madde | aranan |
|---|---|---|---|
| `nis` | 200 | **Niş şehri** | İskender Bey |
| `kili` | 200 | **Tuna'da bir kale** | Kilikya Ermeni Krallığı |
| `suleyman-i` | 200 | **Kanûnî Süleyman** | Süleyman Çelebi (Fetret) |
| `bursa` | 200 | Fetret bölümü **1481 Şehzade Cem**'i anlatıyor | 1403 İsa Çelebi |
| `saltanat` | 200 | genel **hukukî kavram** | bir devlet |
| `ahiler` | 200 | Ankara maddesi **yönetim iddiasını desteklemiyor** | Ahî idaresi |
| `sarki-rumeli` | 302 | ölü; sonra bulunan genel Rumeli maddesi **1878-85'i kapsamıyor** | Şarkî Rumeli |

⚠️ **Dördüncü satır en sinsisi:** `bursa` maddesi canlı, doğru şehir, hatta
**Fetret devri bölümü bile var** — ama o bölüm 1403'ü değil **1481'i**
anlatıyor. Yani doğru slug + doğru şehir + doğru konu başlığı, **yanlış olay.**
📌 Ve üçüncü satır TDV'nin kendi metniyle uyarıyor: `suleyman-i` maddesi
okuyucuyu Süleyman Çelebi'yle karıştırmaması için **açıkça ikaz ediyor.**
⇒ **Kaynağı okumak, kaynağın kendi uyarısını da okumaktır.**

**Yedisinin dördü kurtarıldı** — doğru slug bulunup içeriği doğrulanarak:
`iskender-bey` · `emir-suleyman` · `isa-celebi` · `musa-celebi`.
**Üçü kalıcı `bulunamadı`:** `kilikya-ermeni` · `sarki-rumeli` · `ahiler`.
📌 *"Bulunamadı"* üç kez yazıldı ve **üçü de bir sonuçtur** — o üç künye artık
"araştırılmadı" değil, **"arandı, yok"** diye biliniyor.

Zaten doğrulanmış slug kümesi `data/olaylar*.js` içindeki `kaynak:` alanlarından
çıkarılabilir; o küme güvenlidir:
```bash
grep -oh 'kaynak:"[^"]*"' data/olaylar*.js | sed 's/kaynak:"//;s/"//' | sort -u
```

**Küçük model (Haiku) bu projede kullanılmaz** — slug tuzağını düzenli olarak atlıyor
ve uydurma kaynak üretiyor.

---
