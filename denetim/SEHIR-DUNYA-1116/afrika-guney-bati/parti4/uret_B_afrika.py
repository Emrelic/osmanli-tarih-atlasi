import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
TAR = "tarayıcı sayfa okuma, 16 Kasım 2026"
BR = lambda slug, ad: f"Encyclopaedia Britannica, «{ad}» (Britannica editörleri), https://www.britannica.com/place/{slug} ({TAR})"
UN = "UNESCO World Heritage Centre, «Historic Centre of Agadez» (Brief synthesis), https://whc.unesco.org/en/list/1268 (" + TAR + ")"

def O(t, gun, k, b, kay, kes, tanik):
    return {"t": t, "gun": gun, "k": k, "b": b, "kesinlik": kes, "kaynak": kay, "tanik": tanik}

out = []

# ---------- AGADEZ ----------
kb = BR("Agadez", "Agadez")
out.append({
 "id": "agadez-ne", "ad": "Agadez", "atlas_ad": "Agadez", "lat": 16.973, "lon": 7.991, "kat1900": None,
 "adlar": ["Agadez (Agades)"],
 "ilk": {"t": "1500-01-01", "gun": "15. yüzyıl", "nicelik": "ilk_anilis", "kesinlik": "yuzyil",
         "kaynak": kb, "tanik": "Once the seat of a Tuareg sultanate (dating from the 15th century)"},
 "kur": None, "ark": None, "bit": None, "sahip": [],
 "olay": [
  O("1500-01-01", "15. yüzyıl", "diger", "Agadez Aïr (Tuareg) sultanlığının merkezi olarak anılır (15. yüzyıldan itibaren); UNESCO: Aïr Sultanlığı 15.-16. yüzyıllarda burada yerleşti", kb, "yuzyil",
    "Once the seat of a Tuareg sultanate (dating from the 15th century)"),
 ],
 "ic_not": "ÇİFT TEYİT: UNESCO WHC 1268 'Brief synthesis' aynı yüzyılı verir — «The historic centre of Agadez dates back to the 15th and 16th centuries, when the Sultanate of Aïr established itself there» (tarayıcı sayfa okuma, 16 Kasım 2026). İki kaynak da yalnız yüzyıl verir, gün/yıl yok; ilk anılış için aralığın SON ucu (15. yüzyıl sonu = 1500-01-01) alındı. Nicelik 'ilk_anilis': kaynaklar kuruluş günü vermez, 'sultanlık merkezi olduğu' 15. yüzyıldan itibaren tarihlenir. ATLAS: atlas Agadez'i 1405-01-01'de 'agadez-sultanligi' ile başlatır; bu kaynaklarla 1405 DOĞRULANAMAZ (yalnız '15. yüzyıl'); TDV Nijer md. (önceki parti) 1515'te Songay'a bağlanmayı verir — atlas başlangıcı için kaynaklı yıl bulunamadı, 1405 kaynaksız iddia olarak KASA'ya bildirilir. Zincir (sahip) YAZILMADI: bu kaynaklarda sahip değişimi tarihi yok."
})

# ---------- HARARE ----------
kh = BR("Harare", "Harare (Salisbury)")
out.append({
 "id": "harare-zw", "ad": "Harare (Salisbury)", "atlas_ad": "Salisbury (Harare)", "lat": -17.83, "lon": 31.05, "kat1900": None,
 "adlar": ["Salisbury", "Harare"],
 "ilk": {"t": "1890-01-01", "gun": "1890", "nicelik": "kurulus", "kesinlik": "yil",
         "kaynak": kh, "tanik": "The city was founded in 1890 at the spot"},
 "kur": None, "ark": None, "bit": None,
 "sahip": [{"f": "1890-01-01", "t": "1890-09-12", "d": "__BOSLUK__", "kesinlik": "yil", "kaynak": kh,
   "ic_not": "Britannica yalnız 1890 YILINI verir; atlas 'ingiliz-guney-rodezya' sahipliğini 1890-09-12'de başlatır (gün bu kaynakta yok). Yıl başı ile atlas günü arası kaynaklı sahip yazılamadı → beyanlı __BOSLUK__ (BSAC Pioneer Column yürüyüşü bağlamı çıkarımdır, sahip künyesi yazılmadı)."}],
 "olay": [
  O("1890-01-01", "1890", "diger", "Şehir British South Africa Company'nin Pioneer Column'unun yürüyüşünü durdurduğu noktada kuruldu; İngiltere Başbakanı Lord Salisbury'nin adını aldı", kh, "yil",
    "The city was founded in 1890 at the spot"),
  O("1897-01-01", "1897", "diger", "Salisbury belediye (municipality) statüsü aldı", kh, "yil",
    "The city was created a municipality in 1897"),
  O("1935-01-01", "1935", "diger", "Salisbury 'city' (şehir) statüsü aldı (charter)", kh, "yil",
    "It was chartered as a city in 1935"),
  O("1980-01-01", "1980", "diger", "Bağımsız Zimbabwe hükûmeti Salisbury'yi başkent olarak tuttu ve adını Harare yaptı", kh, "yil",
    "independent Zimbabwe (1980) and renamed Harare"),
 ],
 "ic_not": "TEK KAYNAK (Britannica); ikinci kaynak (UNESCO/Cambridge/Persée) bulunamadı. Britannica yalnız YIL verir. ATLAS: atlas 1890-09-12'de 'ingiliz-guney-rodezya' ile başlatır; gün Britannica'da YOK (Pioneer Column bayrak çekme günü başka kaynaktan doğrulanmalı) — ilk.t yıl hassasiyetiyle 1890-01-01 (atlas günü yıl içinde, çelişki yok). Zincir yazılmadı. 'Salisbury' adı Lord Salisbury'den (aynı sayfa). 1899 demiryolu geliş tarihi (Beira) kaynakta parantezle yıl olarak geçer ('after the arrival of the railway (1899)'), olay yazılmadı."
})

# ---------- LÜDERITZ ----------
kl = BR("Luderitz", "Lüderitz")
out.append({
 "id": "luderitz-na", "ad": "Lüderitz", "atlas_ad": "Lüderitz", "lat": -26.65, "lon": 15.16, "kat1900": None,
 "adlar": ["Angra Pequena", "Lüderitz"],
 "ilk": {"t": "1883-01-01", "gun": "1883", "nicelik": "kurulus", "kesinlik": "yil",
         "kaynak": kl, "tanik": "Franz Adolf Lüderitz, began trading operations and persuaded the German government in 1883"},
 "kur": None, "ark": None, "bit": None,
 "sahip": [{"f": "1883-01-01", "t": "1883-05-01", "d": "__BOSLUK__", "kesinlik": "yil", "kaynak": kl,
   "ic_not": "Britannica yalnız 1883 YILINI verir; atlas 'almanya' sahipliğini 1883-05-01'de başlatır (gün bu kaynakta yok). Yıl başı ile atlas günü arası kaynaklı sahip yazılamadı → beyanlı __BOSLUK__."}],
 "olay": [
  O("1883-01-01", "1883", "diger", "Hamburglu tüccar Franz Adolf Lüderitz ticarete başladı ve Alman hükûmetini 1883'te bölgeyi Alman himayesine almaya ikna etti; Güneybatı Afrika'nın ilk Alman yerleşimi", kl, "yil",
    "Franz Adolf Lüderitz, began trading operations and persuaded the German government in 1883"),
 ],
 "ic_not": "TEK KAYNAK (Britannica). Kaynak 1487'de Bartolomeu Dias'ın koyda durup adını Angra Pequena koyduğunu da yazar ('Bartolomeu Dias stopped there in 1487') ama koy kıyısı ≠ şehir noktası (Dias Burnu ~ şehirden uzak olabilir; ölçülmedi) → İLK ANILIŞ olarak YAZILMADI. 'Kuruluş' nicelik: kaynak 'first German settlement' der; gün yok. ATLAS: atlas 1883-05-01'de 'almanya' ile başlatır (gün kaynaksız ama yıl içinde, çelişki yok). Almanya sahipliğinin başlangıç günü bu kaynakta YOK; zincir yazılmadı."
})

# ---------- MASERU ----------
km = BR("Maseru", "Maseru")
out.append({
 "id": "maseru-ls", "ad": "Maseru", "atlas_ad": "Maseru", "lat": -29.31, "lon": 27.48, "kat1900": None,
 "adlar": ["Maseru"],
 "ilk": {"t": "1869-01-01", "gun": "1869", "nicelik": "kurulus", "kesinlik": "yil",
         "kaynak": km, "tanik": "In 1869 the chief of the Sotho (Basotho) nation, Moshoeshoe, founded the town"},
 "kur": None, "ark": None, "bit": None, "sahip": [],
 "olay": [
  O("1869-01-01", "1869", "diger", "Sotho (Basotho) önderi Moşoeşoe şehri dağ kalesi Thaba Bosiu yakınında kurdu", km, "yil",
    "In 1869 the chief of the Sotho (Basotho) nation, Moshoeshoe, founded the town"),
 ],
 "ic_not": "TEK KAYNAK (Britannica). Gün yok, yıl hassasiyeti. ATLAS: atlas Maseru'yu 1822-01-01'de 'basuto' ile başlatır — şehir kaynağa göre 1869'da kurulduğundan 1822 başlangıcı ŞEHİR için yanlış/kaynaksız görünüyor (belki bölge iddiası): KASA'ya 'başlangıç 1869 olmalı' önerisi. 1868-03-12 atlas 'basuto' bitişi (İngiliz himayesi) ile 1869 kuruluş sırası da kontrol edilmeli."
})

# Harare ve Lüderitz YAZILAMADI: atlas günü (1890-09-12, 1883-05-01) için ±30 gün kaynaklı olay yok (Britannica yalnız yıl).
# Kayıtlar yukarıda belgeli kalır; B_BORC.tsv'ye taşındı.
out = [c for c in out if c["id"] not in ("harare-zw", "luderitz-na")]
json.dump(out, open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "B_afrika.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(out))
