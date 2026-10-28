import time
import json
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def run_test():
    options = Options()
    options.add_argument('--headless=new')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-gpu')
    options.add_argument('--window-size=1920,1080')
    
    # Use a temporary user profile so it's clean
    user_data_dir = os.path.abspath('agy/chrome_profile_test')
    options.add_argument(f'--user-data-dir={user_data_dir}')
    
    driver = webdriver.Chrome(options=options)
    try:
        # Enable CDP domains
        driver.execute_cdp_cmd('Page.enable', {})
        driver.execute_cdp_cmd('Profiler.enable', {})
        driver.execute_cdp_cmd('Profiler.setSamplingInterval', {'interval': 100}) # 100 us
        
        # Inject script on new document
        init_script = """
        window.__dp_measurements = {
            longtasks: [],
            paints: [],
            start_ts: performance.now()
        };
        try {
            performance.setResourceTimingBufferSize(5000);
        } catch(e) {}
        try {
            const po = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    window.__dp_measurements.longtasks.push({
                        name: entry.name,
                        startTime: entry.startTime,
                        duration: entry.duration
                    });
                }
            });
            po.observe({ entryTypes: ['longtask'] });
        } catch(e) {}
        try {
            const po2 = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    window.__dp_measurements.paints.push({
                        name: entry.name,
                        startTime: entry.startTime
                    });
                }
            });
            po2.observe({ entryTypes: ['paint'] });
        } catch(e) {}
        """
        driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument', {'source': init_script})
        
        print("Starting Profiler...")
        driver.execute_cdp_cmd('Profiler.start', {})
        
        t0 = time.time()
        print("Navigating to https://emrelic.github.io/osmanli-tarih-atlasi/ ...")
        driver.get('https://emrelic.github.io/osmanli-tarih-atlasi/')
        
        # Wait until readyState complete
        for _ in range(60):
            state = driver.execute_script("return document.readyState;")
            if state == 'complete':
                break
            time.sleep(0.5)
        
        # Wait an extra 3 seconds for initial map / scripts to settle
        time.sleep(3)
        load_time = (time.time() - t0) * 1000
        print(f"Page loaded in approx {load_time:.1f} ms")
        
        profile = driver.execute_cdp_cmd('Profiler.stop', {})
        print(f"Profiler captured {len(profile.get('profile', {}).get('nodes', []))} nodes, {len(profile.get('profile', {}).get('samples', []))} samples")
        
        # Query metrics from page
        nav = driver.execute_script("return performance.getEntriesByType('navigation')[0];")
        resources = driver.execute_script("return performance.getEntriesByType('resource').length;")
        meas = driver.execute_script("return window.__dp_measurements;")
        dp_cozum = driver.execute_script("return window.__DP_COZUM_MS;")
        
        print("Navigation timing:", nav)
        print("Resource count:", resources)
        print("Long tasks count:", len(meas.get('longtasks', [])))
        print("Paints:", meas.get('paints', []))
        print("__DP_COZUM_MS:", dp_cozum)
        
    finally:
        driver.quit()

if __name__ == '__main__':
    run_test()
