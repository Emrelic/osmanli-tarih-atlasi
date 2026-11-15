# BOLGE-cin / ADIM 5 — Renk (15 Kasım 2026)

`renkler.py`'a DOKUNULMADI (tuz). Ölçüm: `py arac/renk_olc.py` (bu ağaç, tam çıktı scratchpad `renk.txt`, 638 satır) + `cin6.py` (BOYALAR üyeliği).

## Ölçüm
- Çin kümesi 205 künye (Kore/Japonya dahil): `harita:` yoksa `id` anahtarı → **BOYALAR'da 205/205 var; renksiz künye 0**. (`BOYALAR` 2248 anahtar.)
- `renk_olc` çıktısında Çin bölgesine ait **ihlal**:
  1. **DENİZLE KARIŞAN (ΔE<18 / |ΔL*|<4∧ΔE<51)**, Çin künyelerinden: `hong-kong-ingiliz` **#8ec2ff, ΔE 3,67** (deniz #c4dcea — ≈ görünmez; kıyı enklavı, adaya ait küçük petek denizle karışır); `daxi-zhang` #8ec2ff aynı hex ΔE 3,67 (iç Sichuan, deniz yok → pratik sorun yok; aynı hex iki künyede, eşzamanlı/600 km'de değiller: «AYNI HEX... EŞZAMANLI 0 çift»); `guney-ming` #d8d060 ΔL* 0,60 / ΔE 41,3 (DAL2 sınırında; Güney Ming kıyı Zhejiang-Fujian-Guangdong'da — deniz-karışma riski sınırda); `tibet` #e1aed2 ΔE 19,4 / ΔL* 2,99 (DAL2; iç bölge, deniz yok → pratik sorun yok).
  2. **ACIKLIK_TABANI_L=59'a çekilen** koyu renk: `san-fan` #4e1218→#55191d (L* 58,1) — koyu bordo; Qing/Güney Ming komşuluğunda ayırt edilebilir (komşu ΔE<12 çift raporunda yok).
  3. **Beyansız paylaşım** (aynı hex, farklı künye; kasıtlıysa PAYLASIM'a yazılmalı): `#b0a503` — bati-wei, cheng-han, chengjia-gongsun-shu, hengshan-krallik, hubaekje, kuzey-wei, ran-wei, sui, sun-wu, tibet-imparatorlugu, zhao-devleti (hepsi **1281 öncesi**; eşzamanlı ve 600 km yakın **0 çift**, yani haritada çakışma yok). `#7579ab` — tuyuhun, wei-devleti-zhou (1281 öncesi).
  4. «KOMŞUSUYLA ÇAKIŞAN (ΔE<12)» 3 çift: **Çin'de yok** (amalfi-napoli vb.). «AYNI ANAHTARI PAYLAŞIP TARİHİ ÖRTÜŞEN» 0 çift.
- Çin çekirdeği (1281-1923) komşu ayırt edilebilirliği: Yuan/Ming/Qing/Kuzey Yuan/Güney Ming/Dashun/San Fan/Taiping/Pingnan/Hoşut/Tungning/ÇC künyelerinin hiçbiri ΔE<12 komşu çiftinde yok.

## Öneri (renkler.py'a yazılmaz; KASA kararı)
1. `hong-kong-ingiliz`'e deniz ΔE ≥ 18 olan bir hex (ör. İngiliz kolonileri ailesinden koyu kırmızı-pembe; `ingiltere` anahtarıyla uyumlu) — ya da `harita:"ingiltere"` bağla (Makao örneği: `makao-portekiz` → `harita:"portekiz"`).
2. `guney-ming` sınır (ΔE 41 DAL2): deniz mavisine yakın yeşil-sarı; denizle karışma sınırında, harita ölçümü olmadan değişiklik önerilmez.
3. `#b0a503` paylaşımı 11 Çin/Kore künyesi: kasıtlıysa `PAYLASIM`'a yazılmalı; kasıtsızsa ayrılmalı (hepsi 1281 öncesi; sıfır çakışma → düşük öncelik).
4. Eksik künyeler (adım 1) açılırsa renk kararı gerekir: Weihaiwei, Guangzhouwan, Kwantung, Şanghay yerleşimi (enklav; ana devlet rengi + eksklav desenine bağlanabilir).
