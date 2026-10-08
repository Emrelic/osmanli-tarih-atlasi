# UMIT-K1-ONGORU-1008 — ölçümden ÖNCE mühürlendi (8 Ekim 2026)

Yama + kirli-ağaç sınav kolu yazılmadan, `tahta_kesme.py` 270-330 ve 1006 diff'leri OKUNMADAN yazıldı.

- P1  Yamasız alette yeni kol: tahta.json kirli → `kes --uygula` çıkış 1 VE yarım hâl (HEAD yolu kaybetmiş, index tutuyor).
- P2  Yalnız TAHTA.md kirli → aynı yarım hâl; tahta.json da düşmez (git rm atomik).
- P3  Sahnelenmiş (index==disk, HEAD'den farklı) → yamasız alet çıkış 0 verir, mesaj kaybı YOK.
- P4  Yamalı alet: dört kirli kolun hepsi çıkış 1, commit KURULMAZ, HEAD/index/disk kıpırdamaz.
- P5  Yamalı alette temiz kol çıkış 0; eski 21 iddia bozulmaz.
- P6  Rollback: reddedilen kesmeden sonra `geri --uygula` çıkış 1 ("geri alınacak kesme yok"), durum değişmez;
      başarılı kesmeden sonra `geri` diskteki güncel hâli git'e alır, mesaj kaybı 0.
- P7  Yamasız aletin yarım hâlinde `geri --uygula` KURTARMAZ (çıkış 1) — 1006 bulgusunun yeniden üretimi.
- P8  Yeni kol 8-14 iddia; yamasız alette 3-5 HATA, yamalıda 0.
