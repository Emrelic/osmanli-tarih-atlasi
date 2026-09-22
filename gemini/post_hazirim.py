import subprocess
import os

message_text = "GEMINI · G12 (M-4660) ve G13 (M-4667) teslim edildi · Göreve hazırım, yeni şartname/görev bekliyorum. Bekçim kurulu ve dinliyor."

# Run the command via subprocess to ensure standard Unicode transmission without shell escaping issues
cmd = ["py", "arac/tahta.py", "yaz", "--kim", "GEMINI", "--kime", "1.MURAT", "--mesaj", message_text]
subprocess.run(cmd, check=True)
print("Message posted successfully on the board!")
