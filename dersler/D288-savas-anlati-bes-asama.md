# D288 — SAVAŞ ANLATISI BEŞ AŞAMADA KURULUR

**Slogan:** Osmanlı–Rus, Osmanlı–Avusturya, Osmanlı–İran gibi her savaşın kronolojisi
(Emre, kutu `parti-emrelic-0068` H-0006) şu beş halkayla anlatılır; eksik halka
**ayrı bir kusurdur**, savaş maddesinin varlığı onu kapatmaz.

**Tarih:** 12 Ekim 2026 (şema 18 Eylül 2026'da 1787-92 savaşında uygulandı,
`data/olaylar_p0068b.js`, rapor `denetim/SAVAS-ANLATI-0918.md`; kural olarak ilk kez burada yazıldı)

---

## Şema

```
① savaşa giden süreç      (sebep, bahane, ittifaklar, ültimatom)
② savaşın başlaması       ("… Savaşı başladı" maddesi — savaş ilanı / ilk harekât)
③ savaş olayları          (muharebeler, kuşatmalar, sadrazam/serdar zinciri)
④ savaşın sonu            (ateşkes, son muharebe, sonuç — imzadan ÖNCEki halka)
⑤ barış antlaşması        (imza + hükümlerin toprağa yansıması)
```
Duruma göre ①+② ve ④+⑤ tek maddede birleşebilir. Her halka kendi gününe, kendi
kaynağına ve (varsa) kendi harita değişimine bağlıdır (Değişmez 2: kırılmanın ±30 günü).

## Ölçülmüş vaka

1787-92 savaşının 23 maddesi ① 1 · ② 2 · ③ 11 · ④ **0** · ⑤ 2 dağılıyordu; ④ boştu.
`olaylar_p0068b.js` 37 maddeyle ④ kovasını sıfırdan altıya çıkardı. Başlangıç (②) maddesi
HİÇ olmayan beş savaş açık kaldı (30 Eylül ölçümü): 1443-09-01 · 1603-09-01 · 1663-04-01 ·
1672-06-01 · 1683-07-14. Bunlardan 1683 (II. Viyana) 12 Ekim'de ölçüldü: `olaylar_ek3.js`
1683-01-01 "Viyana seferi kararı" (①) ve 1683-07-14 "II. Viyana Kuşatması başladı" (②) VAR —
liste bayattı, öteki dördü ayrıca ölçülmelidir.

## Teknik not

Şema bugün veri alanı DEĞİL kuraldır: `savas:`/`evre:` alanı yoktur (`VERI-YAPISI.md` ve
`data/*.js`de 0). Bir alan eklenirse denetim tavanı **bugünkü ölçümle** yazılır ve alan
`kronoloji` okuyucusuna (`js/app.js`) bağlanmadan "uygulandı" denmez.

## Açık borç

Şemanın öteki savaşlara dağıtımı (1736-39, 1768-74, 1877-78, Kutsal İttifak …) yapılmadı;
her biri kaynaklı araştırma ister (TDV yer-kişi ansiklopedisidir, olay slug'ı çoğu zaman 302).
