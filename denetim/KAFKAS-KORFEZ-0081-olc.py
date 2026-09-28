# KAFKAS-KORFEZ-0081 — ölçüm: düzeltilecek noktaların tam zincirleri (salt okur)
import sys, json
sys.stdout.reconfigure(encoding="utf-8")
sys.path.insert(0, "arac")
import girdi

ADLAR = sys.argv[1:] or ["Batum", "Murvaneti", "Hulo (Acara)", "Makhalak’auri", "Sohum",
                         "Şehrizor", "Halepçe", "Zagem (Kaheti)", "Tiflis",
                         "Bozkır (Deşt-i Kıpçak)", "Sakkız", "Bâne", "Merîvan",
                         "Serdeşt (Sardasht)", "Kasr-ı Şîrîn"]
Y = girdi.yukle(sessiz=True)
for y in Y:
    if y["ad"] in ADLAR:
        print(y["ad"], "|", y["_kaynak"])
        print("   S", json.dumps(y["s"], ensure_ascii=False))
        print("   D", json.dumps(y["d"], ensure_ascii=False))
        print("   V", json.dumps([{k: v for k, v in p.items() if k != "kaynak"} for p in y.get("v") or []], ensure_ascii=False))
