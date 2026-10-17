import time
import json
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def test_profiler_parsing():
    options = Options()
    options.add_argument('--headless=new')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-gpu')
    user_data_dir = os.path.abspath('agy/chrome_profile_warm')
    options.add_argument(f'--user-data-dir={user_data_dir}')
    
    driver = webdriver.Chrome(options=options)
    try:
        driver.execute_cdp_cmd('Page.enable', {})
        driver.execute_cdp_cmd('Profiler.enable', {})
        driver.execute_cdp_cmd('Profiler.setSamplingInterval', {'interval': 100})
        
        # In warm cache test:
        print("Warm load test...")
        driver.execute_cdp_cmd('Profiler.start', {})
        t0 = time.time()
        driver.get('https://emrelic.github.io/osmanli-tarih-atlasi/')
        
        for _ in range(60):
            if driver.execute_script("return document.readyState;") == 'complete':
                break
            time.sleep(0.2)
        time.sleep(2)
        
        raw_prof = driver.execute_cdp_cmd('Profiler.stop', {})
        prof = raw_prof.get('profile', {})
        
        nodes = {n['id']: n for n in prof.get('nodes', [])}
        samples = prof.get('samples', [])
        time_deltas = prof.get('timeDeltas', [])
        
        # Calculate self time per node
        node_self_us = {}
        for s, dt in zip(samples, time_deltas):
            node_self_us[s] = node_self_us.get(s, 0) + dt
            
        print(f"Total profile samples: {len(samples)}, duration: {sum(time_deltas)/1000:.1f} ms")
        
        # Aggregate by function + url + line
        fn_times = {}
        for node_id, self_us in node_self_us.items():
            node = nodes.get(node_id, {})
            call_frame = node.get('callFrame', {})
            fn = call_frame.get('functionName') or '(anonymous)'
            url = call_frame.get('url') or ''
            line = call_frame.get('lineNumber', -1)
            key = (fn, url, line)
            if key not in fn_times:
                fn_times[key] = {'self_ms': 0.0, 'hits': 0}
            fn_times[key]['self_ms'] += self_us / 1000.0
            fn_times[key]['hits'] += node.get('hitCount', 0)
            
        sorted_fns = sorted(fn_times.items(), key=lambda x: x[1]['self_ms'], reverse=True)
        print("\nTOP 20 FUNCTIONS BY SELF TIME:")
        for (fn, url, line), stat in sorted_fns[:20]:
            short_url = url.split('/')[-1] if url else ''
            print(f"  {stat['self_ms']:8.2f} ms | hits: {stat['hits']:5d} | {fn} ({short_url}:{line})")
            
        print("\nTOP 15 FUNCTIONS IN app.js:")
        app_fns = [(k, v) for k, v in sorted_fns if 'app.js' in k[1]]
        for (fn, url, line), stat in app_fns[:15]:
            print(f"  {stat['self_ms']:8.2f} ms | hits: {stat['hits']:5d} | {fn} (line {line})")
            
    finally:
        driver.quit()

if __name__ == '__main__':
    test_profiler_parsing()
