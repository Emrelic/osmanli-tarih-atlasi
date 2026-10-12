# D287 — EKSKLAV GÖRÜNÜMÜ: ÖNCE ÖLÇ, SONRA A/B KARAR AĞACI

**Slogan:** Bir devlet başka devletten bölge alıp harita ana toprağıyla arasında
KOPUK bir parça (eksklav) çiziyorsa, **kusur ya da gerçek olduğuna karar vermeden
önce arada kalan yerleşimlerin sahibi ÖLÇÜLÜR**; hüküm ölçümden sonra, aşağıdaki
ağaçla verilir.

**Tarih:** 12 Ekim 2026 (kural 17 Eylül 2026'da Emre'nin 0064/H-0010 maddesiyle
istendi, `denetim/ARAC-EKSKLAV-0917.py` ile ölçüldü; ders olarak ilk kez burada yazıldı)
· **Kaynak madde:** kutu `parti-emrelic-0064` H-0010 · **Rapor:** `denetim/D3-EKSKLAV-0917.md`

---

## Karar ağacı (Emre'nin metni, kısaltılmış)

```
ÖNCE   Eksklav ile ana toprak arasındaki yerleşimlerin o gün sahibi kim?  (alet, aşağıda)
A      Arada gerçekten alınmamış topraklar var, eksklav gerçek      → harita OLDUĞU GİBİ kalır
B      Hata var, eksklav yok:
  B1   aradaki toprakların da alındığına dair kaynak var            → o yerleşimlere dönem yazılır
  B2   aradaki yerler alınan eksklav şehre BAĞLI yerler             → ilgili devlete katılır
  B3   o tarihte aradaki yerleşimler HİÇ YOKTU                      → nokta yok sayılır, bölge eksklav şehrin
  B4   kaynaklar durumdan hiç söz etmiyor                           → kaynak yazılmaz, tarih UYDURULMAZ;
                                                                      seçenek + öneri Emre'ye (karar bekler)
```
B4 en tehlikeli kovadır: kaynaksız günü "mantıken" uydurmak CLAUDE.md §4 "tarih uydurma"
yasağının ihlalidir (CLAUDE.md "Kaynak kuralı"). Vaka: Semendire eksklavı 1738-08 → 1739-09 — arada yalnız Jagodina
kalıyor, günü bulunamadı; Şık A (Jagodina'yı Semendire günüyle katmak) KARAR bekliyor.

## Alet

`py denetim/ARAC-EKSKLAV-0917.py --gun G --devlet D --kutu … [--yama Y] [--donemler]`
- Sahiplik Değişmez 7 ile aynı okunur; komşuluk o gün var olan noktaların Delaunay
  üçgenlemesidir (kenar ≤ 400 km). Değişmez 7'nin 150 km "bağlı" eşiği bu soruyu SORMAZ:
  Bihaç–Banaluka 104 km'dir, eşik ikisini bağlı sayar, harita ise aradaki petek başkasınınsa
  kopuk çizer.
- İki yönde sınandı: Novi'nin eski kaydı (1699 sonrası avusturya) bellekte geri kurulunca
  1737-08-04'te `KOPUK: Bihaç · arada Bosna Novi'si sahip=avusturya` basar; bugünkü veride
  Balkan kutusunda 1690-1800, 15 kesitte kopuk parça 0.
- Yaklaşıklamadır: kara maskesi, nehir ve dağ yaslanması yok. Eksklav kararı alet çıktısıyla
  DEĞİL kaynakla verilir; alet yalnız "nereye bakılacağını" söyler.

## Vakalar (hepsi 17-18 Eylül 2026)

| vaka | ağaçtaki yeri | sonuç |
|---|---|---|
| Bihaç 1737-39 (kutu 0064/H-0003, H-0008; 0069/H-0002) | B1 | Arada Bosna Novi'si yanlış `s:avusturya` idi; 55a5b28 + 9b92117f ile düzeldi. 1804-06-01 kesitinde Bihaç→Banaluka hattında 17/17 örnek nokta Osmanlı gövdesinde (12 Ekim ölçümü). |
| Knin | A | Zaten doğru (1688'den Venedik). |
| Semendire–Jagodina | B4 | Karar bekliyor (Şık A). |

## Açık borç

Alet `denetle.py` / yayın kapısına BAĞLI DEĞİLDİR ("denetim var ≠ o soruyu soruyor":
eksklav sorusu kapıda sorulmuyor). Bağlama işi ayrıdır ve tavan disiplini gerektirir
(CLAUDE.md "Tavanlar"): bugünkü ölçüm tavan olarak yazılır, geleceğin değeri değil;
tavanı oturum önerir, Emre onaylar.
