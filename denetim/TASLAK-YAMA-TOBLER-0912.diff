TASLAK YAMA — arac/uret_petek.py'ye İNECEK değişikliğin taslağı
(diff biçiminde, motor tek elden — 1.MURAT uygular)
=====================================================================

① Ⓐ1+Ⓐ2 — sürtünme yerine Tobler, hedef-hücre yerine KENAR (a->b) hesap:

--- a/arac/uret_petek.py
+++ b/arac/uret_petek.py
@@ (yaklaşık satır 2205 — "① EĞİM SÜRTÜNMESİ" bölümü)
-    surt = 1 + EGIM_CARPANI * |∇z|          |∇z| birimi: METRE / HÜCRE
+    # Tobler (1993) yürüme fonksiyonu, KENAR bazlı (yön duyarlı):
+    #   W(S) = 6 * exp(-3.5 * |S + 0.05|)   km/saat
+    #   S    = (z[b]-z[a]) / (dist_km(a,b)*1000)   işaretli eğim
+    # `_kvegim` (izotropik |grad|) artık YALNIZ raporlama için tutulur;
+    # asıl maliyet _kv_dijkstra içinde KENAR bazlı hesaplanır.

@@ (yaklaşık satır 2288-2298 — _kv_dijkstra içi iç döngü)
-            nd = d + math.hypot(dx * di, _KVDY * dj) * (surt[k] if surt else 1.0)
+            _dist_km = math.hypot(dx * di, _KVDY * dj)
+            if surt is not None:  # Tobler kipi
+                _S = (_kvz[k] - _kvz[h]) / (_dist_km * 1000.0)  # işaretli
+                _W = 6.0 * math.exp(-3.5 * abs(_S + 0.05))
+                nd = d + _dist_km / _W
+            else:
+                nd = d + _dist_km  # ağırlıksız (eski davranış korunur)

  ⚠️ GEREKTİRİR: ham `_kvz` (yükseklik ızgarası) Dijkstra'ya kadar
  silinmeden taşınmalı — bugün `_z` DEM okunduktan hemen sonra `del`
  ediliyor (satır ~2251), yalnız `_kvsurt` (izotropik) tutuluyor. Tobler
  için ham `_kvz` de saklanmalı (bellek maliyeti: aynı boyut, +25 MB
  mertebesinde — ölçülmedi, kaba tahmin).

② Ⓐ3 — hücre başına üç değer (z_min/z_max/z_ort) saklama:

@@ (satır ~2236 civarı, DEM okuma)
-    _z = _ds.read(1, window=_win, out_shape=(_kvny, _kvnx),
-                  resampling=_rio.enums.Resampling.average).astype("float32")
+    # HAM çözünürlükte oku (out_shape VERME), sonra kendi elimizle
+    # hücre başına indir — average YERİNE min/max/sınır-min:
+    _z_ham = _ds.read(1, window=_win).astype("float32")  # native ~30"
+    # (kaba taslak — gerçek indirgeme bloklama/reshape gerektirir,
+    #  burada YALNIZ YÖN gösteriliyor, çalışan kod DEĞİL)

  ⚠️ BU KISIM SINANMADI — yalnız Ⓐ3'ün TEK geçit örneğiyle (Gülek
  Boğazı) kavramsal olarak doğrulandı, tam bir hücre-indirgeme
  algoritması (sınır-piksel-minimumu) burada YAZILMADI, tasarlandı.

=====================================================================
NOT (D107): Bu bir TASLAKTIR, çalışır kod değil — motor oturumu (tek
elden) gerçek entegrasyonu kendi bağlamında (bellek/performans profili
dahil) yapmalı. Amaç: DEĞİŞİKLİĞİN YERİNİ ve BİÇİMİNİ göstermek.
