# -*- coding: utf-8 -*-
"""GLM-I EPOK-SAHI P 1016 — ① kovasındaki 33 kalem için düzeltme ÖNERİLERİ.
Çıktı: denetim/GLM1-EPOK-SAHIP-1016-oneri.diff (sözde-diff; data/'ya YAZILMAZ).
Öneri satırları insan hükmü olarak elle yazıldı (aşağıdaki ONERI sözlüğü);
dayanak cümleler karar kayıtlarından otomatik taşınır."""
import io, json, os, sys
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def yukle(p):
    d = {}
    for l in io.open(os.path.join(KOK, "glm", p), encoding="utf-8"):
        if l.strip():
            k = json.loads(l)
            d[k["ad"]] = k
    return d


evren = {e["ad"]: e for e in json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"), encoding="utf-8"))}
k16 = yukle("epok_karar1016.jsonl")
ke = yukle("epok_karar.jsonl")
tarama = yukle("epok_asama1.jsonl")

# ad → (önerilen 1281 sahibi / işlem, kısa gerekçe)
ONERI = {
    "Ahıska": ("ilhanli", "Moğol hâkimiyeti 1267-68'den beri; Gürcistan dönemi 1267'de biter (KISALT)"),
    "Bartın": ("bizans", "1204 Trabzon Rum→1214 İznik→1261 Bizans; Selçuklu geri alınmış sayılır (KISALT)"),
    "Behisni (Besni)": ("ermeni-kilikya", "TDV: Baybars Besni'nin Ermeniler'in elinde kalmasına razı oldu (1268); Memlûk 1293 (KISALT-ardıl)"),
    "Karapınar": ("__BOSLUK__", "yerleşim 1514'te (Yavuz) kuruldu; 1281'de nokta olmamalı — Karamanoğlu yazılmaz"),
    "Maraş": ("ermeni-kilikya", "Memlük alışı 1293 ve Ermeniler'İN elinden; 1281'de Ermeni (slug kahramanmaras)"),
    "Midilli": ("bizans", "Ceneviz (Gattilusio) 1354'te imparator tarafından alındı → 1354'e dek Bizans"),
    "Nusaybin": ("ilhanli", "1230 ilk Moğol istilâsı, yüzyıl ortasında Hülâgû işgali; Artuklu biter (~1250'ler)"),
    "Safranbolu": ("bizans", "Bizans idaresi -1304; Candaroğlu 1304'te alır — Selçuklu değil"),
    "Semadirek": ("venedik", "1204 Venedik (Dandolo) → 1335 Gattilusio; Ceneviz pencere-sonrası"),
    "Silifke": ("saint-jean/kiibris", "Saint Jean şövalyeleri Kıbrıs bağı 1210-1359; Karaman 1359 sonrası"),
    "Sisam": ("__BOSLUK__", "Latin 1205-1225; Ceneviz (Maona) 1304'ten — 1225-1304 sahibi TDV'de açık değil (beyansız yaklaşıklık yazma)"),
    "Sivrihisar": ("ilhanli", "TDV dönem etiketi 'Moğol/İlhanlı idaresi' 1243-1330'lar (1274 Selçuklu nâibi notuyla sınır örneği)"),
    "Tiflis": ("ilhanli", "TDV açık: 1231'de Moğol idaresi kuruldu; Gürcü krallık değil"),
    "Tire": ("selcuklu", "1186 Selçuklu fethi – 1390 Osmanlı; 1281'de Bizans olamaz"),
    "Tosya": ("selcuklu", "Candaroğulları bölgeye 1291'de hâkim (Yaman Candar); 1281'de beylik yok"),
    "Azak": ("altin-orda", "Özbek Han hâkim; gövdede Ceneviz adı geçmiyor (Venedik mahalle izni 1332)"),
    "Kerç": ("altin-orda", "Ceneviz 1318'den, Altın Orda'ya vergi şartıyla — pencere-sonrası edinme"),
    "Akçahisar (Kruja)": ("anjou-napoli", "Charles d'Anjou alışı 1271-72, Bizans geri alışı 1284 → 1281 Anjou"),
    "Alacahisar (Kruševac)": ("__BOSLUK__", "kuruluş 1371; 1281'de yerleşim yok (Sırbistan yazılmaz)"),
    "Anabolu (Nauplion)": ("ahaya/frank", "Venedik idaresine GİRİŞ 1389; öncesinde Frank Ahaya bağlamı"),
    "Aydonat (Paramythia)": ("epir/bizans (tartışmalı)", "Frank hâkimiyeti 1294'ten anılıyor; 1281 için Epir ihtimali — kesinleşmezse __BOSLUK__"),
    "Belgrad": ("macaristan", "Sırp alışı 1354 (Duşan), sonra tekrar Macar; 1281 Macar"),
    "Debre (Dibra)": ("bizans", "Sırp Kralı Milutin 1283'te aldı; 1281'de Bizans"),
    "Livno (İhlevne)": ("hirvatistan-macar", "Bosna'ya ilhak 1326 (Kotromanić); 1281'de Hırvat-Macar"),
    "Plevne": ("__BOSLUK__", "tek Ortaçağ kaydı 1266 Macar alımı, güven 2 — dayanmaz"),
    "Taşoz": ("venedik", "1204'te doj Dandolo idaresine verildi; Bizans geri alışı 1327 — Venedik pencereyi çevreler"),
    "Trebinye": ("sirp/zeta", "Bosna'ya Tvrtko döneminde (1353-91) dahil; 1281'de Sırp/Zeta"),
    "Uyvar": ("__BOSLUK__", "çekirdek 1545'te inşa edildi; 1281'de yerleşim yok"),
    "Yanya": ("epir", "1318'de TEKRAR Bizans'a katıldı → öncesinde Epir Despotluğu (1204-1318)"),
    "İzdin (Lamia)": ("atina-latin", "Katalan Dukalığı 1318-1388; 1281'de Latin markizliği/Bizans — Katalan değil"),
    "Lâhîcan": ("__BOSLUK__/yerel emirlik", "Şah Nev Olcaytu'ya 705/1305'te boyun eğdi; 1281'de İlhanlı değil, yerel Gîlân emirliği"),
    "Tenes": ("hafsi", "Zeyyânî (Abdâlvâdî) egemenliğine GİRİŞ 688/1289; 1281'de Hafsî"),
    "Harar": ("__BOSLUK__", "bölgenin ilk müslüman devleti Evfât 1285'te; 1281'de müslüman devlet kaydı yok — Adal 1415 sonrası"),
}

CİKTI = os.path.join(KOK, "denetim", "GLM1-EPOK-SAHIP-1016-oneri.diff")
out = [
    "# GLM1-EPOK-SAHIP-1016-oneri.diff — ① ÇELİŞİYOR kovasındaki 33 kalem için düzeltme ÖNERİLERİ",
    "# Ölçüm: GLM-I, 16-17 Ekim 2026, worktree glm-epok-1016 (HEAD 8ecbd56e).",
    "# Bu dosya ÖNERİDİR: data/ dosyalarına yazılmadı; uygulama Emre'nin onayıyla.",
    "# Kural (CLAUDE.md, künye aşımı): devlet öldüyse dönemi KISALT · aynı polity sürüyorsa künyeyi GENİŞLET ·",
    "# ardıl yapı geçtiyse ardıl künye. Aşağıdaki -/+ satırları bu üçlüye göre etiketlendi.",
    "# Sözde-diff formatı: - mevcut atlas 1281 sahibi / + öneri · dayanak: TDV cümlesi (slug).",
    "",
]
for ad, (oneri, gerekce) in ONERI.items():
    e = evren.get(ad)
    k = k16.get(ad) or ke.get(ad)
    if not e or not k:
        out.append(f"# !! {ad}: kayıt bulunamadı (evren={bool(e)} karar={bool(k)})")
        continue
    cumle = (k.get("alinti_prefix") or "").strip() or (k.get("not") or "")[:120]
    slug = k.get("slug") or tarama.get(ad, {}).get("slug") or ""
    kaynak = f"https://islamansiklopedisi.org.tr/{slug}/"
    out.append(f"--- {ad}  (sahip_id {e['sahip_id']} · {e['dosya']} · {e['lat']:.3f},{e['lon']:.3f} · {e['bolge']})")
    out.append(f"- 1281 sahibi (atlas): {e['sahip_ad']}  [TDV: {k.get('tdv_sahip')} · {k.get('tdv_tarihi')}]")
    out.append(f"+ öneri: {oneri}")
    out.append(f"  gerekçe: {gerekce}")
    out.append(f"  dayanak: {cumle[:200]}")
    out.append(f"  kaynak : {kaynak}")
    out.append("")
io.open(CİKTI, "w", encoding="utf-8", newline="\n").write("\n".join(out))
print(f"yazıldı: {CİKTI} · {len(ONERI)} kalem")
