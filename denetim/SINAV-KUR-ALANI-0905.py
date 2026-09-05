# -*- coding: utf-8 -*-
"""
SINAV — kur: alanının _sahiplik_uygula.py'ye eklenmesi (C13'ün üç ayağı)
1923 SINIRLARI · M-2896

Bu betik `arac/_sahiplik_uygula.py`nin SKALER ALAN mekanizmasını (AD_RX,
SKALER_RX, js_metin, korunan-alan kontrolü) BİREBİR KOPYALAYARAK, "kur"
eklenmiş HÂLİYLE üç ayrı sınav koşturur. `arac/` dosyasının KENDİSİNE
DOKUNULMADI (koşu 5b sırasında donuk) — bu yalnız bir SANDBOX kopyasıdır.
"""
import re

def js_metin(s):
    return '"%s"' % s.replace("\\", "\\\\").replace('"', '\\"')

AD_RX = re.compile(r'\bad:\s*"((?:[^"\\]|\\.)*)"')

# 🔴 ÖNERİLEN DEĞİŞİKLİK — üç tuple'a "kur" eklendi (aşağıda test edilen budur)
SKALER_ALANLAR = ("m", "kaynak", "bos", "neden", "not", "kur")
SKALER_KORUNAN = ("kaynak", "bos", "neden", "not", "kur")
SKALER_RX = {a: re.compile(r'(\b%s:\s*)"((?:[^"\\]|\\.)*)"' % a) for a in SKALER_ALANLAR}
SKALER_NULL_RX = {a: re.compile(r'\b%s:\s*null\b' % a) for a in SKALER_ALANLAR}

def uygula_alan(satir, alan, deger):
    """_sahiplik_uygula.py:598-627'nin SKALER dalının bire bir kopyası."""
    yeni_satir = satir
    m = SKALER_RX[alan].search(yeni_satir)
    mn = SKALER_NULL_RX[alan].search(yeni_satir)
    if m:
        if alan in SKALER_KORUNAN and m.group(2).strip():
            return satir, "ATLANDI: %s ZATEN DOLU, ezilmedi" % alan
        yeni_satir = yeni_satir[:m.start()] + m.group(1) + js_metin(deger) + yeni_satir[m.end():]
    elif mn:
        yeni_satir = yeni_satir[:mn.start()] + "%s:%s" % (alan, js_metin(deger)) + yeni_satir[mn.end():]
    else:
        ma = AD_RX.search(yeni_satir)
        if not ma:
            return satir, "HATA: ad çıpası yok"
        yeni_satir = yeni_satir[:ma.end()] + ",%s:%s" % (alan, js_metin(deger)) + yeni_satir[ma.end():]
    return yeni_satir, "UYGULANDI"


print("=" * 70)
print("① GEÇME YOLU — kur: hiç kullanılmayan normal bir yama, davranış AYNI mı?")
print("=" * 70)
satir_normal = '{ ad:"Preveze", tur:"liman", lat:38.958, lon:20.751, k:4 },'
# kur: hiç dokunulmuyor — yalnız `kaynak` alanı işleniyor, mevcut davranış korunmalı
yeni, sonuc = uygula_alan(satir_normal, "kaynak", "TDV, madde: preveze")
print("  girdi :", satir_normal)
print("  çıktı :", yeni)
print("  sonuç :", sonuc, "-> BEKLENEN: UYGULANDI, kur: alanına HİÇ dokunulmadı ✓" if "kur" not in yeni else "  🔴 HATA")

print()
print("=" * 70)
print("② ATEŞLEME — VAR OLAN bir kur: değeri EZİLİYOR mu (EZİLMEMELİ)")
print("=" * 70)
satir_dolu = '{ ad:"SahteYer", kur:"1500-01-01", tur:"sehir" },'
yeni, sonuc = uygula_alan(satir_dolu, "kur", "1900-01-01")
print("  girdi :", satir_dolu)
print("  çıktı :", yeni)
print("  sonuç :", sonuc)
assert yeni == satir_dolu, "🔴 HATA — dolu kur: EZİLDİ!"
assert sonuc.startswith("ATLANDI"), "🔴 HATA — atlanma raporlanmadı!"
print("  ✓ DOĞRU — var olan kur: KORUNDU, ezilmedi")

print()
print("=" * 70)
print("③ GİRDİ — GERÇEK Ndjamena satırı (data/yerlesimler.js:863), dosyadan okunarak")
print("=" * 70)
GERCEK_SATIR = '{ ad:"Ndjamena", tur:"sehir", lat:12.107, lon:15.045, g:0, k:3, d:[] },'
import tempfile, os
with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
    f.write("// sahte veri dosyası\n" + GERCEK_SATIR + "\n")
    tmp_path = f.name
with open(tmp_path, encoding="utf-8") as f:
    dosya_icerigi = f.read()
satir_bulundu = [s for s in dosya_icerigi.splitlines() if 'ad:"Ndjamena"' in s][0]
print("  dosyadan okunan satır:", satir_bulundu)
yeni, sonuc = uygula_alan(satir_bulundu, "kur", "1900-01-01")
print("  yeni satır           :", yeni)
print("  sonuç                :", sonuc)
assert sonuc == "UYGULANDI"
assert 'kur:"1900-01-01"' in yeni
assert 'd:[]' in yeni, "🔴 HATA — d: alanı bozuldu!"
print("  ✓ DOĞRU — kur: eklendi, d:[] BOZULMADI, GERÇEK dosyadan okunan metinle çalıştı")
os.unlink(tmp_path)

print()
print("=" * 70)
print("④ 🔴🔴 EK BULGU — NODE SÜZGECİ (satır 88-91) 'kur'U TANIMIYOR")
print("=" * 70)
print("""
  _sahiplik_uygula.py:88-91 şu filtreyi taşıyor:

      if (r && r.ad !== undefined &&
          (r.d || r.s || r.v || r.isg || r.m !== undefined ||
           r.kaynak !== undefined || r.bos !== undefined ||
           r.neden !== undefined || r.not !== undefined)) {
        cik.push(...);
      }

  Bu satır İKİ KEZ genişletilmiş (1 Eylül: m/kaynak · 2 Eylül: bos/neden/not)
  ve HER İKİSİNDE DE aynı sebep: yeni skaler alan bu listeye eklenmezse,
  o alanı TEK BAŞINA taşıyan bir kayıt (d/s/v/isg/m/kaynak/bos/neden/not
  YOKSA) Node tarafında SESSİZCE elenir, Python'a HİÇ ULAŞMAZ.

  BU GECE yazılan 3 örnek (Ndjamena·Şibâm·Şihr) hepsi de AYRICA s:/bos:
  taşıdığı için bu süzgeçten geçerdi — ama gelecekte SADECE `kur:` ekleyen
  bir yama (örn. sahibi zaten doğru bir kayda yalnız kuruluş tarihi ekleme)
  YAZILDIĞINI SANIP hiçbir şey yapmaz, SESSİZCE.

  ⇒ BU, SÜZGEÇ 1'İN ÜÇÜNCÜ TEKRARIDIR (`§11`: 'ölçemediğini eleyen bir
  süzgeç onu TEMİZ sayar'). `kur` bu satıra da eklenmezse ①②③ sınavları
  GEÇSE BİLE gerçek koşuda bir sınıf yama sessizce düşer.
""")

print("=" * 70)
print("TÜMÜ TAMAM — üç ayak + 1 ek bulgu")
print("=" * 70)
