# -*- coding: utf-8 -*-
"""K759-K858 hükümleri → hukumler9.json. İçinde yerleşim noktası olmayan parçalar (ölçüm: yerlesimler boş) kural gereği YAPAY-m (OLCUM);
noktalı adaylar elle (EL), kaynak hükümle birlikte (TDV / Hrvatska enciklopedija / Treccani; yoksa KAYNAK-GEREK)."""
import os, json

BURA = os.path.dirname(os.path.abspath(__file__))
A = json.load(open(os.path.join(BURA, "aday9.json"), encoding="utf-8"))
TDV = "TDV, https://islamansiklopedisi.org.tr/"
EL = {
    "K760": ("BIRLESMELI", "BIRLESMELI", "OLCUM", "Annemasse 1859-11-10 → 1860-03-24 'sardinya', çevre 'sardinya-piyemonte': aynı Sardinya Krallığı'nın iki kimliği; 1860-03-24 Torino antlaşmasıyla Savoya Fransa'ya.", "Savoya noktaları tek tutucu; 1860-03-24 → fransa-cumhuriyet.", "veri ölçümü"),
    "K763": ("GERCEK", "GERCEK", "KAYNAK-GEREK", "Zadar 1920-11-12 (Rapallo) → 1947-09-15 (Paris barışı yürürlüğü) İtalyan eksklavı, Yugoslavya ortasında: bilinen gerçek eksklav. Nin sahipsiz.", "Yok (1943-1944 Alman işgali ayrı kova).", "bulunamadı (model bilgisi)"),
    "K765": ("GERCEK", "GERCEK", "KAYNAK-GEREK", "Zadar 1540 → 1699 Venedik Dalmaçyası, Osmanlı ortasında: gerçek (1409'dan Venedik; 1540 başlangıcı topoloji kırılması).", "Yok.", "bulunamadı (model bilgisi)"),
    "K766": ("BIRLESMELI", "BIRLESMELI", "OLCUM", "Nador 1912-11-27 'fas' / iç 'fas-ispanyol-himayesi', komşu İspanyol himayesi %40: İspanyol Fas himayesi iki kimlikte.", "Rif noktaları 1912-11-27 → fas-ispanyol-himayesi tek tutucu.", "veri ölçümü"),
    "K770": ("GERCEK", "GERCEK", "KAYNAKLI", "Sudak 1475 Osmanlı (Gedik Ahmed: Kefe'nin ardından Sudak) → 1774, Kırım Hanlığı (TABI) ortasında: Kefe eyaleti kıyısı, gerçek.", "Yok.", TDV + "arama/sudak («Gedik Ahmed Paşa») — '1475'te Kefe, ardından Sudak ve Azak'ı zaptedip'"),
    "K771": ("GERCEK", "GERCEK", "KAYNAKLI", "Sudak 1365 Ceneviz → 1475 Osmanlı, Altınorda/Kırım ortasında: gerçek Ceneviz Gazaria'sı.", "Yok.", TDV + "arama/sudak («Gedik Ahmed Paşa», 1475) · TDV «Kefe» (Ceneviz kolonizasyonu)"),
    "K772": ("YAPAY", "YAPAY-d", "KAYNAKLI", "Beyrut 1918-10-07 → 10-08 Fransız, çevre Osmanlı %59: Fransız işgal günü TDV ile birebir; tek günlük parça çevre Suriye noktalarının Ekim 1918'de hâlâ Osmanlı kalmasından.", "Suriye-Lübnan kıyısı noktaları Ekim 1918 işgal günleri (kaynakla).", TDV + "beyrut — '7 Ekim 1918'de Fransız kuvvetlerinin bölgeyi işgal etmelerine kadar'"),
    "K778": ("GERCEK", "GERCEK", "KAYNAKLI", "Kefe Ceneviz (1266 civarı Altınorda izniyle) → Haziran 1475 Osmanlı: gerçek koloni.", "Yok.", TDV + "kefe — 'Altın Orda'dan yerleşme izni almak suretiyle Kefe'ye gelen Cenevizliler (1266 yılı civarı)' · 'Kefe ile beraber bütün sahil şeridi fethedildi (Safer 880 / Haziran 1475)'"),
    "K784": ("GERCEK", "GERCEK", "KAYNAKLI", "Kefe 1475 Osmanlı eyalet merkezi → 1774, Kırım (TABI) ortasında: gerçek.", "Yok.", TDV + "kefe — Haziran 1475 fethi; 'Kırım Hanlığı himaye altına alındı'"),
    "K785": ("YAPAY", "YAPAY-c", "KAYNAK-GEREK", "Balaklava (Cembalo) 1349-1357 'altinorda' doğrudan, çevre Theodoro: Cembalo 1345'ten Ceneviz kalesiydi; Altınorda doğrudan yazımı şüpheli. Akyar sahipsiz.", "Cembalo 1345-1475 ceneviz (kaynakla).", "TDV'de Balaklava maddesi yok — bulunamadı"),
    "K786": ("GERCEK", "GERCEK", "KAYNAK-GEREK", "Balaklava 1357 → 1475 Ceneviz, Theodoro ortasında: gerçek.", "Yok.", "bulunamadı (model bilgisi)"),
    "K787": ("GERCEK", "GERCEK", "KAYNAK-GEREK", "Balaklava 1475-06 Osmanlı → 1475-12 (Mangup/Theodoro'nun düşüşü): kısa gerçek parça.", "Yok.", "TDV «Gedik Ahmed Paşa»: Mangub (1475) — gün yok"),
    "K790": ("YAPAY", "YAPAY-c", "KAYNAK-GEREK", "Şârika 1820 → 1971 'ingiltere' doğrudan, çevre Trucial States %66: Şârika İngiliz himayesindeki şeyhliklerdendi (doğrudan İngiliz toprağı değil); 1932 hava üssü.", "Şârika 1820-1971 d: trucial-states, v: ingiltere.", TDV + "sarika — '1932'de burada İngiliz hava kuvvetleri üssünün kurulması' (himaye statüsü tarihi yok)"),
    "K791": ("GERCEK", "GERCEK", "KAYNAK-GEREK", "Enez Gattilusio 1355 → 1456-01-24 Osmanlı fethi, Osmanlı Trakyası ortasında: gerçek.", "Yok.", "TDV'de Enez maddesi açılmadı — bulunamadı"),
    "K803": ("GERCEK", "GERCEK", "KAYNAK-GEREK", "Naha ve güney Okinawa 1945-04-01 ABD → 1972-05-15 iade: Ryukyu ABD idaresi, Japonya'dan denizle ayrı — gerçek.", "Yok.", "bulunamadı (model bilgisi)"),
    "K814": ("GERCEK", "GERCEK", "KAYNAKLI", "Kulluk (Salamis) 1456 Osmanlı (Atina ile) → 1821 isyanı, Venedik Mora'sına karşı: gerçek ada parçası. 1687-1688 Venedik arası veride yok.", "Salamis 1687-09 → 1688-04 venedik (Atina ile; TDV Atina).", TDV + "atina — 'Atina 1687'de kısa bir müddet için Venedik hâkimiyetine girdi' (Salamis için ABİ MERKEZ: Atina — beyan)"),
    "K827": ("BIRLESMELI", "BIRLESMELI", "OLCUM", "Kartaca 1912-10-18 'tunus-beyligi-fransiz', çevre TABI %36: Fransız himayesindeki Tunus beyliği iki kimlikte.", "Tunus noktaları tek tutucu.", "veri ölçümü"),
}
H = {"_aciklama": "ENKLAV-1104 hükümleri (K759-K858, son parti; liste 858'de kapanır). İçinde nokta olmayan parçalar kuralla YAPAY-m (OLCUM); "
                  "noktalılar elle, kaynak hükümle birlikte (hukum9_yaz.py)."}
for a in A:
    no = a["no"]
    if no in EL:
        h, k, g, ger, d, kay = EL[no]
    elif not a["yerlesimler"]:
        h, k, g = "YAPAY", "YAPAY-m", "OLCUM"
        ger = "%s parçası %s → %s, içinde hiç yerleşim noktası yok (komşu: %s): noktasız motor ataması." % (
            a["devlet"], a["f"][:10], a["t"][:10], ", ".join(sorted(a["komsular"], key=lambda x: -a["komsular"][x])[:2]) or "—")
        d, kay = "Motor sorusu (HAVVA): parçayı üreten emilme bölgesi ölçülsün.", "veri ölçümü"
    else:
        h, k, g, ger, d, kay = "—", "—", "KAYNAK-GEREK", "elle hüküm yazılmadı", "—", "—"
    H[no] = dict(hukum=h, kova=k, guven=g, gerekce=ger, duzeltme=d, kaynak=kay)
json.dump(H, open(os.path.join(BURA, "hukumler9.json"), "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=0)
eksik = [a["no"] for a in A if a["yerlesimler"] and a["no"] not in EL]
print("hüküm", len(A), "elle", len(EL), "noktasız", sum(1 for a in A if not a["yerlesimler"]), "eksik elle", eksik)
