# Sonradan tabakalama: evrende "rastgele pencere-içi iddia 1281-01-01'de başlıyor" beklenen payı
import sys, io, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
E = json.load(open(sys.argv[1], encoding="utf-8")); U0, U1 = E["veri_ufku"]
pay1281 = 0.0; herhangi = 0
for k in E["kayit"]:
    ic = [p for p in k["s"] if p.get("f") and p["f"] < U1 and (p.get("t") or U1) > U0]
    n1 = sum(1 for p in ic if max(p["f"], U0) == U0)
    pay1281 += n1 / len(ic)
    herhangi += n1 > 0
N = len(E["kayit"])
print(f"evren {N} · beklenen 1281-başlangıçlı iddia ağırlığı {pay1281:.0f} (%{100*pay1281/N:.1f}) · "
      f"en az bir 1281-başlangıçlı s: dönemi olan kayıt {herhangi} (%{100*herhangi/N:.1f})")
# örneklem oranları (geniş görüş, k_analiz çıktısından): 1281: 7/10 ölçülen · geç: 3/36
p1, p2 = 7 / 10, 3 / 36
print(f"sonradan tabakalı tahmin (iddia düzeyi): {pay1281*p1 + (N-pay1281)*p2:.0f} kayıt")
