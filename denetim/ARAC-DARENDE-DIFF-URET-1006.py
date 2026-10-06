# -*- coding: utf-8 -*-
"""DARENDE-SILIFKE-1006 — öneri diff'lerini ÜRETMEK için çalışma ağacında geçici düzenleme.
Yalnız KENDİ worktree'mde koşturulur; diff alındıktan sonra `git checkout --` ile geri alınır.
Kökünü __file__den bulur. Her değişiklik YALNIZ adı verilen kaydın bloğunda (kayıt başı satırı →
bir sonraki `{ ad:` / `//` satırı) yapılır; eşleşme sayısı beklenenden farklıysa HİÇBİR ŞEY yazmaz."""
import os, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Dosya:
    def __init__(self, yol):
        self.yol = yol
        self.p = os.path.join(KOK, yol)
        self.t = open(self.p, encoding="utf-8", newline="").read()

    def blok(self, bas):
        s = self.t.split("\n")
        idx = [i for i, x in enumerate(s) if x.startswith(bas)]
        if len(idx) != 1:
            sys.exit(f"HATA {self.yol}: kayıt başı «{bas}» {len(idx)} kez — yazılmadı")
        j = idx[0] + 1
        while j < len(s) and not (s[j].startswith("{ ad:") or s[j].startswith("//")):
            j += 1
        return s, idx[0], j

    def degistir(self, bas, eski, yeni):
        s, i, j = self.blok(bas)
        b = "\n".join(s[i:j])
        if b.count(eski) != 1:
            sys.exit(f"HATA {self.yol} «{bas}»: «{eski[:60]}» {b.count(eski)} kez — yazılmadı")
        s[i:j] = b.replace(eski, yeni).split("\n")
        self.t = "\n".join(s)
        print(f"{self.yol}: satır {i+1} bloğu — 1 değişiklik")

    def ekle_sonra(self, capa, satir):
        if self.t.count(capa) != 1:
            sys.exit(f"HATA {self.yol}: çapa {self.t.count(capa)} kez — yazılmadı")
        i = self.t.index(capa)
        son = self.t.index("\n", i) + 1
        self.t = self.t[:son] + satir + "\r\n" + self.t[son:]
        print(f"{self.yol}: 1 madde eklendi")

    def yaz(self):
        open(self.p, "w", encoding="utf-8", newline="").write(self.t)


def koord():
    y = Dosya("data/yerlesimler.js")
    # SİLİFKE — karaman 1473 → 1474
    S = '{ ad:"Silifke", kd:'
    y.degistir(S, '{f:"1281-01-01",t:"1473-01-01",k:0,m:null},{f:"1473-01-01",t:"1923-10-29",k:4,m:"Konya"}',
                  '{f:"1281-01-01",t:"1474-01-01",k:0,m:null},{f:"1474-01-01",t:"1923-10-29",k:4,m:"Konya"}')
    y.degistir(S, '{f:"1281-01-01",t:"1473-01-01",d:"karaman"}',
                  '{f:"1281-01-01",t:"1474-01-01",d:"karaman",kaynak:"TDV `mehmed-ii` (6 Ekim 2026 govde): '
                  '\\"… İç-il sahillerinde, Niğde ve Develi yöresinde 877’den (1472) beri tekrar hâkim olan Kasım '
                  'Bey’i bertaraf etmek için 879’da (1474) Gedik Ahmed Paşa’nın yeni bir sefer yapması '
                  'gerekmiştir.\\" · \\"Gedik Ahmed Taş-ili, Ermenâk, Meynan ve Silifke’ye inerek buraları tekrar '
                  'ele geçirdi.\\" — YIL (879 = Mayıs 1474-Nisan 1475; 01-01 yalnız yıl işareti). 1472 kısa Osmanlı '
                  'teslimi (TDV silifke/icel: aynı yıl Kasım geri aldı; mehmed-ii: 877/1473 baharı) aynı yıl '
                  'içinde kaldığı için KODLANMADI (DARENDE-SILIFKE-1006)"}')
    y.degistir(S, 'd:[{f:"1473-01-01",t:"1920-04-23"}]', 'd:[{f:"1474-01-01",t:"1920-04-23"}]')
    # ERMENEK — Osmanlı 1468 değil 1471 (875); 1472-1474 Kasım geri aldı
    E = '{ ad:"Ermenek", kd:'
    y.degistir(E, '{f:"1402-09-15",t:"1468-01-01",d:"karaman"}',
                  '{f:"1402-09-15",t:"1471-01-01",d:"karaman",kaynak:"TDV `icel` (6 Ekim 2026 govde): '
                  '\\"875 (1470-71) yılında sefere çıkıp Lârende’den İçel topraklarına giren İshak Paşa, Mut '
                  'yakınlarında Kasım Bey’i yenerek Mut’u ele geçirdi. İshak Paşa kaleyi tamir ettirip Ermenek’i '
                  'de Osmanlı hâkimiyetine aldı.\\" — 1468 seferinin «İçel’in … kesimleri Osmanlı hâkimiyetine '
                  'girdi» hükmü BÖLGE hükmüdür, kasabaya taşınmadı (D208); `karamanogullari`: 1468 sonrası '
                  'Pîr Ahmed «Karaman-ili’nin Toroslar bölgesini idaresi altında tuttu». YIL: 875 = Haziran 1470-'
                  'Haziran 1471, 01-01 yalnız yıl işareti"},'
                  '{f:"1472-01-01",t:"1474-01-01",d:"karaman",kaynak:"TDV `mehmed-ii`: \\"Karaman-ili’nde dağlık '
                  'bölgede ve İç-il sahillerinde … 877’den (1472) beri tekrar hâkim olan Kasım Bey’i bertaraf '
                  'etmek için 879’da (1474) Gedik Ahmed Paşa’nın yeni bir sefer yapması gerekmiştir.\\" · '
                  '\\"Gedik Ahmed Taş-ili, Ermenâk, Meynan ve Silifke’ye inerek buraları tekrar ele geçirdi.\\" · '
                  '`icel`: \\"… daha önce elden çıkmış olan Ermenek ve Manyan kalelerini alıp …\\" — YIL"}')
    y.degistir(E, 'd:[{f:"1397-07-01",t:"1402-07-28"},{f:"1468-01-01",t:"1920-04-23"}]',
                  'd:[{f:"1397-07-01",t:"1402-07-28"},{f:"1471-01-01",t:"1472-01-01"},{f:"1474-01-01",t:"1920-04-23"}]')
    y.yaz()
    o = Dosya("data/yerlesimler_ok110.js")
    D = '{ ad:"Darende", kd:'
    o.degistir(D, '{f:"1338-01-01",t:"1522-01-01",d:"dulkadir"}',
                  '{f:"1338-01-01",t:"1414-01-01",d:"dulkadir"},'
                  '{f:"1414-01-01",t:"1418-01-01",d:"memluk",kaynak:"TDV `dulkadirogullari` (6 Ekim 2026 govde): '
                  '\\"Sultan Şeyh 1414 yılında sefere çıkarak daha önce kendi rızası ile verdiği Antep şehriyle '
                  'Dârende’yi Dulkadırlılar’dan geri aldı.\\" · \\"Fakat Mehmed Bey 1418’de Dârende’yi tekrar '
                  'aldığı gibi Besni’yi de ülkesine kattı.\\" — YIL (DARENDE-SILIFKE-1006)"},'
                  '{f:"1418-01-01",t:"1522-01-01",d:"dulkadir"}')
    o.yaz()


def olay():
    o = Dosya("data/olaylar.js")
    eski = ('{ t:"1473-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Silifke\'nin kesin fethi — '
            'Karamanoğulları\'nın son direnişinin kırılması", gun:"1473, Otlukbeli sonrası", '
            'ic_not_gun:"(TDV ay/gün vermiyor)"')
    yeni = ('{ t:"1474-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Silifke\'nin kesin fethi — '
            'Karamanoğulları\'nın son direnişinin kırılması", gun:"879 (1474) — TDV `mehmed-ii` «879’da (1474) '
            'Gedik Ahmed Paşa’nın yeni bir sefer…»; TDV `silifke`deki 1473 Otlukbeli\'ni (11 Ağustos 1473) ve '
            'görevlendirmeyi tarihler, kalenin düşüşünü DEĞİL (DARENDE-SILIFKE-1006)", '
            'ic_not_gun:"(TDV ay/gün vermiyor; 879 = Mayıs 1474-Nisan 1475, 01-01 yalnız yıl işareti)"')
    if o.t.count(eski) != 1:
        sys.exit("HATA olaylar.js Silifke maddesi bulunamadı")
    o.t = o.t.replace(eski, yeni)
    print("data/olaylar.js: Silifke maddesi 1473 → 1474")
    o.yaz()
    e = Dosya("data/olaylar_ek.js")
    capa = 'b:"Alanya, Anamur ve Silifke\'nin (İçel) ilhakı"'
    e.ekle_sonra(capa,
        '{ t:"1471-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"İshak Paşa Mut ve Ermenek\'i aldı", '
        'gun:"875 (1470-71) — YIL hassasiyeti, TDV ay/gün vermiyor", yer:"Mut, Ermenek", yer_id:"Ermenek", '
        'kisiler:"İshak Paşa, Karamanoğlu Kasım Bey", d:"Rum Mehmed Paşa\'nın Varsaklar\'a yenilmesi üzerine Karaman '
        'seferiyle görevlendirilen Vezîriâzam İshak Paşa, Lârende\'den İçel\'e girdi; Mut yakınlarında Kasım Bey\'i '
        'yenerek Mut\'u aldı, kaleyi tamir ettirip Ermenek\'i de Osmanlı hâkimiyetine kattı.", '
        'kaynak:"icel (TDV — 6 Ekim 2026 gövde okundu; DARENDE-SILIFKE-1006)", duygu:["🎉"] },\r\n'
        '{ t:"1472-01-01", k:"kayip", etiket:["savas","toprak-kayip","konu-askeri"], '
        'b:"Karamanoğlu Kasım Bey dağlık Karaman-ili\'ni ve Ermenek\'i geri aldı", '
        'gun:"877 (1472) — YIL hassasiyeti, TDV ay/gün vermiyor", yer:"Ermenek, Taşeli", yer_id:"Ermenek", '
        'kisiler:"Karamanoğlu Kasım Bey", d:"Akdeniz\'deki Haçlı donanması ve Uzun Hasan\'ın desteğini alan '
        'Karamanoğlu Kasım Bey, 877\'den (1472) itibaren Karaman-ili\'nin dağlık bölgesine ve İç-il sahillerine '
        'yeniden hâkim oldu; Ermenek ve Manyan kaleleri Osmanlı\'nın elinden çıktı. Bölge ancak 1474\'te Gedik '
        'Ahmed Paşa\'nın seferiyle geri alınacaktı.", kaynak:"mehmed-ii + icel (TDV — 6 Ekim 2026 gövde okundu; '
        'DARENDE-SILIFKE-1006)", duygu:["😔"] },')
    e.yaz()


if __name__ == "__main__":
    {"koord": koord, "olay": olay}.get((sys.argv[1:] or [""])[0], lambda: sys.exit("kullanım: koord | olay"))()
