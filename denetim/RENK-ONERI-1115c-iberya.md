# RENK ÖNERİSİ — IBERYA 1115c (renkler.py'a DOKUNULMADI; öneri)

Yeni künyeler `harita:` ile mevcut anahtarı kullanır (BOYALAR'da tanımlı; yeni anahtar yok):
- `ispanya-cumhuriyet-1` → `harita:"ispanya"` (#ea0cea)
- `ispanya-cumhuriyet-2` → `harita:"ispanya"` (aynı soy hattı; haritada Milliyetçi İspanya `ispanya-milliyetci` #6d8d2d ile zaten ayrışır — iç savaşta Cumhuriyetçi bölge ispanya rengi, Milliyetçi bölge yeşil)
- `portekiz-cumhuriyet` → `harita:"portekiz"`

Öneri (KASA/Emre kararı, tuz dosyası): II. Cumhuriyet'i iç savaşta ayırmak için `ispanya-cumhuriyet-2` kendi BOYALAR anahtarını alabilir (ör. `ispanya`dan 20°+ sapan bir ton; komşu `fransa`/`portekiz`/`ispanya-milliyetci` ile ΔE ≥ 15 `renk_olc.py` ile ölçülmeli). İki Cumhuriyet'i `ispanya`dan ayırmak gerekmez (I. Cumhuriyet'te tek devlet). Ölçülmedi: `py arac/renk_olc.py` koşturulmadı.
Çeviri notu: üç yeni künye için `ceviri_*_devlet.js` kaydı yok (arayüz çeviri eksiği +3 devlet, her dil): tavan KASA'nın.
