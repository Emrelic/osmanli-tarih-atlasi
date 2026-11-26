# DEVLET-500-1000 — birkaç slug × regex, kısa pencereli cümle çıkarımı
import io, re, sys, os
sys.stdout.reconfigure(encoding="utf-8")
DIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "DEVLET-500-1000-tdv-onbellek")
Q = [
 ("emeviler", r"Kerbelâ.{0,120}\(\d|\(92/711\)|Endülüs.{0,60}fethedil|Târiķ|Târık"),
 ("hulefa-yi-rasidin", r"Kādisiye.{0,80}\(|Yermük.{0,80}\(|Cemel Vak.{0,60}\(|Sıffîn.{0,80}\("),
 ("aglebiler", r"Sicilya.{0,120}\((2\d\d|8\d\d)|Palermo.{0,80}\(|Rakkāde"),
 ("tolunogullari", r"Dımaşk.{0,80}\(|Suriye.{0,60}\((264|265|878)|Katâi"),
 ("saffariler", r"Amr b\. Leys.{0,120}(esir|yakala|mağlûp).{0,60}\(|Şîrâz.{0,60}\("),
 ("idrisiler", r"\(192/808\)|Fas şehr.{0,80}\(|II\. İdrîs.{0,80}\("),
 ("hazarlar", r"Mervân.{0,120}\(|737|Derbend.{0,80}\("),
 ("uygurlar", r"Bögü.{0,120}(762|763)|Maniheizm.{0,60}(762|763)|Ordu-?Balık"),
 ("ihsidiler", r"Kâfûr.{0,80}\(|Dımaşk.{0,60}\(|Halep.{0,60}\("),
 ("hamdaniler", r"Nâsırüddevle.{0,120}\(3\d\d|Büveyh.{0,80}\(3\d\d"),
 ("rustemiler", r"Tâhert.{0,40}(tesis|kur).{0,80}|\(171/787\)"),
 ("midrariler", r"Fâtımî.{0,100}\(\d{3}/\d{3}\)|\(352/963\)"),
 ("ziyadiler", r"Zebîd.{0,100}\(\d{3}/\d{3}\)"),
 ("sacogullari", r"Yûsuf.{0,120}\(3\d\d/9\d\d\)|Ebü’l-Kāsım.{0,80}\(|\(31\d/92\d\)"),
 ("tahiriler--horasan", r"\(205/821\)|\(207/822\)|Abdullah b\. Tâhir.{0,80}\(2\d\d/8\d\d\)"),
]
for s, rx in Q:
    g = io.open(os.path.join(DIZ, s + ".txt"), encoding="utf-8").read()
    k = g.find("Kopyalama"); g = g[k:]; b = g.find("BİBLİYOGRAFYA"); g = g[:b] if b > 0 else g
    print("==", s)
    seen = 0
    for m in re.finditer(rx, g):
        if seen > 3: break
        seen += 1
        print("   ", g[max(0, m.start() - 170): m.end() + 110])
