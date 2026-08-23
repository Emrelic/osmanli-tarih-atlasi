# -*- coding: utf-8 -*-
"""GELİŞTİRME SUNUCUSU — portu ORTAM DEĞİŞKENİNDEN alır.

🔴 NİÇİN VAR — 23 Ağustos 2026, ölçülmüş bir engel:
`.claude/launch.json` sabit `["-m", "http.server", "8777"]` çağırıyordu.
Aynı klasörde birden çok sohbet oturumu çalıştığında ikincisi o portu
açamıyor ve tarayıcı panosu HİÇ bağlanamıyor:

    "Port 8777 is in use by another chat's dev server"

Ve bu, bir gün boyunca ölçüm yapmayı engelledi: pano ya `0×0` geliyordu
(MapLibre sıfır tuvalde başlamıyor) ya da başka oturumun sunucusuna
düşüyordu.

⚠️ `py -m http.server` portu ARGÜMANDAN alır, `PORT` değişkeninden
   DEĞİL. Bu yüzden `autoPort: true` tek başına yetmiyordu — harness
   portu `PORT` olarak veriyor ama komut onu okumuyordu. Aradaki
   boşluğu bu sarmalayıcı kapatıyor.

📌 `CLAUDE.md`: *"doğru alete bozuk girdi vermek, yanlış alet
   kullanmakla aynı sonucu verir."* Burada tersi: alet doğruydu,
   GİRDİSİ yanlış yerden geliyordu.

    PORT=8791 py arac/sunucu.py     # ortamdan
    py arac/sunucu.py               # varsayılan 8777
"""
import functools
import http.server
import os
import socketserver
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = int(os.environ.get("PORT") or 8777)


class Sunucu(http.server.SimpleHTTPRequestHandler):
    """Önbelleksiz sunum — sürüm damgası (?v=rNN) zaten var ama
    geliştirme sırasında tarayıcının eski dosyayı tutması ölçümü
    yalancı yapar: kod değişir, ekran değişmez, sebep aranır."""

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def log_message(self, bicim, *args):
        # Sessiz: 129 script etiketi her yüklemede 129 satır basardı ve
        # gerçek hataları boğardı.
        pass


socketserver.TCPServer.allow_reuse_address = True
Islem = functools.partial(Sunucu, directory=KOK)

with socketserver.TCPServer(("127.0.0.1", PORT), Islem) as sunucu:
    print("atlas → http://127.0.0.1:%d/index.html" % PORT, flush=True)
    sunucu.serve_forever()
