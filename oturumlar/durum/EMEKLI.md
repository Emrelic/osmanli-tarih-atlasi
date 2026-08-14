# ⚰️ BU KLASÖR EMEKLİ — 15 Ağustos 2026

Buradaki 13 `*.json`, oturumların kendi hâllerini yazdığı **ikinci
defterdi**. Kutu GUI'sinin EKİP sekmesi ve bildirim çanı artık buraya
**bakmıyor**; tek kaynak `oturumlar/defter.json`.

## Niçin emekli edildi

Emre, 14 Ağustos 2026:
> *"Personel defteri ile o ekip sekmesini birleştirelim… faydalı kısmı
> alalım gerisini çöpe atalım ama bunu yaparken **eklemeli yamalı
> bohçaya döndürmeyelim**. Tek koldan yeterli bir defter."*

Ölçüm onu doğruladı — aynı soruya cevap veren **dört** defter vardı:
```
kutu/ordu.json                 41 → 76 oturum · kova + geçmiş  → EMEKLİ (fikirleri göçtü)
oturumlar/durum/*.json         13 kayıt · en yeni damga 6 Ağu  → EMEKLİ (bu klasör)
oturumlar/*-ILERLEME.md damgası               altı hâl          → durum_tahtasi.py okur
oturumlar/defter.json          83 kayıt · dokuz hâl · KİMLİK    → TEK KAYNAK
```

🔴 **Ve bu klasörün bedeli ölçülmüştü:** en yeni damgası **6 Ağustos**tu,
yani dokuz gün boyunca üç oturum için *"çalışıyor"* / *"emir bekliyor"*
dedi. Emre şikâyet etti: *"iki gündür sürekli bildirim geliyor ama
yapmam gereken bir şey bulamıyorum."*

## Neyi taşıdık, neyi attık

```
🟢 ALINDI   oturum KENDİ hâlini damgalar     → defterin `hal` alanı
            hâlin kaç yaşında olduğu yazılır → `son_gorulme` + `_damga`
🔴 ATILDI   ikinci bir otorite olması
            ad ile anahtarlanması (ad ne tekildir ne kararlı)
```

## Dosyalar niçin silinmedi

Silinen kayıt *"hiç olmadı"* der. Bunlar bir dönemin ölçümüdür ve
`git log`da izi vardır. Duruyorlar, **okunmuyorlar.**

⚠️ Yeni bir alet yazan buraya bakmasın: `py arac/defter.py tablo`.
