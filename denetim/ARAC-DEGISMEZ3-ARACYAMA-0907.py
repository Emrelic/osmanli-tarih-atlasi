# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑫ — `_sahiplik_uygula.py`ye `kd` DESTEĞİ: yama + C13 sınavı.

🔴 `arac/_sahiplik_uygula.py`ye DOKUNULMADI (koordinatörün kalemi).
   Bu betik yamayı TARİF EDER ve her parçasını AYRI AYRI SINAR.

═══ ÖLÇÜLDÜ, VARSAYILMADI (koordinatörün "ÖLÇ, varsayma" şartı) ═══
① `kd` DİZİ gibi mi davranmalı?  → EVET, ve sebebi ölçüldü:
   `:832`  yeni_satir[:m.end()-1] + yeni_js + yeni_satir[son+1:]
   ⇒ dizi alanları BİRLEŞTİRİLMİYOR, DEĞİŞTİRİLİYOR (replace).
   `kd` bir BÖLÜMLEMEDİR (dönemler örtüşmemeli, boşluk bırakmamalı);
   birleştirme geçersiz bölümleme üretirdi. Replace DOĞRU davranış.
② ÜZERİNE YAZMAMA sözleşmesi `kd` için geçerli mi? → EVET.
   `SKALER_KORUNAN`ın gerekçesi (`:520`): *"bir ARAŞTIRMACI BEYANI taşır …
   sessizce ezmek «kimse burayı araştırmadı» ile «biri araştırdı» farkını
   SİLER."* `kd:` gerçek zaman derinliği taşıyabilir (bugün 17 kayıt çok
   dönemli, 4'ünde `m:` gerçekten değişiyor) ⇒ AYNI SINIF.
   🔴 Ama `SKALER_KORUNAN` SKALER için; `kd` DİZİ ⇒ **yeni küme gerekiyor:**
   `DIZI_KORUNAN = ("kd",)`.

═══ 🔴🔴 VE ÜÇÜNCÜ BİR YER — NODE SÜZGECİ (bu olmadan yama ÖLÜ) ═══
`:88-92` süzgeci `r.kd`yi TANIMIYOR:
    if (r && r.ad !== undefined && (r.d || r.s || r.v || r.isg ||
        r.m !== undefined || r.kaynak !== undefined || r.bos !== undefined ||
        r.neden !== undefined || r.not !== undefined || r.kur !== undefined))
⇒ YALNIZ `kd:` taşıyan bir kayıt Python'a **HİÇ ULAŞMAZ** — ve
   `YAMA-DEGISMEZ3-KD-0907.json` tam olarak öyle (`ad` + `kd`).
📌 Betiğin KENDİ yorumu bunu İKİ KEZ anlatıyor (`kur` 5 Eylül · `bos/neden/
   not` 2 Eylül): *"yeni kod Python'a hiç ULAŞMIYORDU… bu betiğin önlemek
   için var olduğu kusur."* Bu ÜÇÜNCÜ tekrarı olurdu.
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEST = os.path.join(os.environ.get("TEMP", "/tmp"), "_kdtest_0907")
os.makedirs(TEST, exist_ok=True)

print("=" * 72)
print("`kd` DESTEĞİ — yama sınavı (C13 dört ayak)")
print("=" * 72)
hata = 0

# ═══════ ③ GİRDİ AYAĞI — GERÇEK bir dosyadan okunacak, enjekte DEĞİL ═══
yama_js = os.path.join(TEST, "yer_yama_kdtest.js")
with open(yama_js, "w", encoding="utf-8", newline="") as f:
    f.write('window.YER_YAMA_KDTEST = [\n')
    f.write(' {ad:"KD-YALNIZ-TEST", kd:[{f:"1281-01-01",t:"1500-01-01",k:3,m:null},'
            '{f:"1500-01-01",t:"1923-10-29",k:3,m:"Bursa"}]},\n')
    f.write(' {ad:"KD-VE-KAYNAK-TEST", kaynak:"x", kd:[{f:"1281-01-01",'
            't:"1923-10-29",k:3,m:null}]},\n')
    f.write(' {ad:"KD-BOZUK-ALAN-TEST", kd:[{f:"1281-01-01",t:"1923-10-29",'
            'k:3,m:null,ZZZBOZUK:"q"}]}\n')
    f.write('];\n')
print("\n③ GİRDİ AYAĞI — test yaması GERÇEK dosyaya yazıldı")
print("   %s (3 kayıt)" % yama_js)

# ═══════ ① GEÇME + ② ATEŞLEME — node süzgeci, yamasız vs yamalı ═══════
JS_SABLON = r"""
global.window = {};
const fs = require('fs');
for (const f of fs.readdirSync(DIZIN).filter(x => /^yer_yama.*\.js$/.test(x))) {
  try { eval(fs.readFileSync(DIZIN + '/' + f, 'utf8')); } catch (e) { continue; }
}
const cik = [];
for (const k of Object.keys(global.window)) {
  const v = global.window[k];
  if (!Array.isArray(v)) continue;
  for (const r of v) {
    if (r && r.ad !== undefined && (SUZGEC)) cik.push(r.ad);
  }
}
process.stdout.write(JSON.stringify(cik));
"""
ESKI = ("r.d || r.s || r.v || r.isg || r.m !== undefined || "
        "r.kaynak !== undefined || r.bos !== undefined || "
        "r.neden !== undefined || r.not !== undefined || r.kur !== undefined")
YENI = ESKI + " || r.kd !== undefined"


def suz(suzgec):
    js = (JS_SABLON.replace("DIZIN", json.dumps(TEST.replace("\\", "/")))
          .replace("SUZGEC", suzgec))
    p = subprocess.run(["node", "-e", js], capture_output=True)
    if p.returncode != 0:
        return None
    return json.loads(p.stdout.decode("utf-8"))


eski, yeni = suz(ESKI), suz(YENI)
print("\n① GEÇME / ② ATEŞLEME — node süzgeci")
if eski is None or yeni is None:
    print("   ⚠️ node yok — ÖLÇÜLEMEDİ (temiz DEĞİL)")
    hata += 1
else:
    print("   MEVCUT süzgeç geçen: %s" % eski)
    print("   YAMALI  süzgeç geçen: %s" % sorted(yeni))
    if "KD-YALNIZ-TEST" in eski:
        print("   🔴 mevcut süzgeç `kd`yi zaten geçiriyor — yama gereksiz?")
        hata += 1
    else:
        print("   ✓ ATEŞLEME: yalnız-`kd` kaydı MEVCUT süzgeçte ELENİYOR")
    if "KD-YALNIZ-TEST" not in yeni:
        print("   🔴 yamalı süzgeç de elemiş — YAMA ÇALIŞMIYOR")
        hata += 1
    else:
        print("   ✓ yamalı süzgeç onu GEÇİRİYOR")
    if "KD-VE-KAYNAK-TEST" not in eski:
        print("   🔴 `kaynak`lı kayıt mevcut süzgeçte de geçmeliydi")
        hata += 1
    else:
        print("   ✓ GEÇME: `kaynak`lı kayıt İKİ süzgeçte de geçiyor")
        print("     📌 ve BU, kusurun niçin SESSİZ olduğunu gösteriyor:")
        print("        `kd`+`kaynak` yama süzgeci GEÇER, sonra `kd` alanı")
        print("        Python'da HİÇ OKUNMAZ ve `atlanan`a KAYIT DÜŞMEZ.")

# ═══════ ④ ÇIKTI AYAĞI — Python satır dönüşümü ═══════
print("\n④ ÇIKTI AYAĞI — `ALAN_RX['kd']` ve satır dönüşümü")
ALAN_RX_KD = re.compile(r'(\bkd:\s*)\[')


def dizi_sonu(s, i):
    d = 0
    for j in range(i, len(s)):
        if s[j] == "[":
            d += 1
        elif s[j] == "]":
            d -= 1
            if d == 0:
                return j
    return -1


ornek_yok = ' {ad:"X", tur:"sehir", lat:1, lon:2, k:3, m:"Bursa"},'
ornek_var = ' {ad:"Y", kd:[{f:"1281-01-01",t:"1900-01-01",k:3,m:null}], k:3},'
yeni_js = '[{f:"1281-01-01",t:"1500-01-01",k:3,m:null}]'

m = ALAN_RX_KD.search(ornek_var)
if m:
    son = dizi_sonu(ornek_var, m.end() - 1)
    out = ornek_var[:m.end() - 1] + yeni_js + ornek_var[son + 1:]
    print("   VAR olan `kd:` DEĞİŞTİRİLDİ (birleştirilmedi) ✓")
    print("     %s" % out.strip()[:76])
else:
    print("   🔴 mevcut `kd:` yakalanamadı")
    hata += 1
if ALAN_RX_KD.search(ornek_yok):
    print("   🔴 `kd:` olmayan satırda eşleşme oldu")
    hata += 1
else:
    print("   ✓ `kd:` olmayan satırda eşleşme YOK (ad: çıpasına eklenecek)")

# ═══════ KORUMA SÖZLEŞMESİ ═══════
print("\n[KORUMA — `DIZI_KORUNAN = ('kd',)`]")
print("   mevcut `kd:` DOLU ise: ATLA, `kd-dolu` diye SAY, ÜZERİNE YAZMA")
print("   gerekçe: `SKALER_KORUNAN`ın (`:520`) birebir aynısı — `kd:` bir")
print("   ARAŞTIRMACI BEYANI taşıyabilir (bugün 17 kayıt çok dönemli,")
print("   4'ünde `m:` gerçekten değişiyor). Sessizce ezmek 'kimse burayı")
print("   araştırmadı' ile 'biri araştırdı' farkını siler.")
print("   🟢 Ve `YAMA-DEGISMEZ3-KD-0907.json` bunu ZATEN uyguluyor:")
print("      4 kayıt (Akkirman·Bender·Kili·Özi) `kd_zaten_var` diye atlandı.")
print("      Araç seviyesinde de olmalı — yamaya değil ARACA bağlı olsun.")

print("\n" + "=" * 72)
print("SONUÇ: %s" % ("✓ sınav geçti" if hata == 0 else "🔴 %d ayak DÜŞTÜ" % hata))
print("=" * 72)
sys.exit(1 if hata else 0)
