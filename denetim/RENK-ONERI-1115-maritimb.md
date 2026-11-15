# RENK ÖNERİSİ — maritim 2. dalga (15 Kasım 2026)

`arac/renkler.py`'ye DOKUNULMADI. KASA/Emre kararı:

1. **jayakatwang-kadiri** (yeni künye): BOYALAR'da kimlik yok → `harita:"kediri"` (#24d842) ile ata Kadiri rengine bağlı, harita deliği yok (Değişmez 4 «künyesiz kimlik 0» kontrolü denetle ile). Öneri: ayrı bir renk (Singhasari #e78a7b ve Kediri #24d842'den ayrışan, Majapahit'ten de ayrışan), 15 Cava noktasında 1 yıl 4 ay görünür. Ayrı renk eklenirse `harita:` kaldırılır.
2. **portekiz-malaka**, **hollanda-malaka**, **ispanyol-filipinler**: BOYALAR'da KENDİ renkleri vardı (#03a6ff, #cb7d04, #1596ba) → pencereler bu kimliklere bağlanınca Malaka/Manila/Cebu vb. haritada renk değiştirir (ana güç renginden ayrışır). Eski görünümü korumak için KASA künyelere `harita:"portekiz"` / `"hollanda-dogu-hint"` / `"ispanya"` ekleyemez: motor önce `id`'yi BOYALAR'da arar, bulursa `harita:`'ya düşmez (uret_petek.py 460-485, 1111-1152) — görünümü korumak için renkler.py'de bu üç kimliğin hex'ini ata renkle eşitlemek gerekir. Seçim KASA/Emre'nin.
