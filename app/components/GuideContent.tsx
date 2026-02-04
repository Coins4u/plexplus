/* eslint-disable @next/next/no-img-element */

interface GuideContentProps {
  title: string;
  subtitle: string;
}

export function GuideContent({ title, subtitle }: GuideContentProps) {
  return (
    <main className="guide-section">
      <div className="container">
        <h1 className="section-title">{title}</h1>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-gray)",
            maxWidth: 800,
            margin: "0 auto 60px",
            fontSize: "1.1rem",
          }}
        >
          {subtitle}
        </p>

        <div className="platform-nav">
          <a href="#firestick" className="platform-btn">
            <i className="fab fa-amazon" /> Firestick
          </a>
          <a href="#android" className="platform-btn">
            <i className="fab fa-android" /> Android
          </a>
          <a href="#ios" className="platform-btn">
            <i className="fab fa-apple" /> iOS/Apple
          </a>
          <a href="#smart-tv" className="platform-btn">
            <i className="fas fa-tv" /> Smart TV
          </a>
          <a href="#windows" className="platform-btn">
            <i className="fab fa-windows" /> Windows
          </a>
          <a href="#kodi" className="platform-btn">
            <i className="fas fa-play-circle" /> Kodi
          </a>
          <a href="#mag" className="platform-btn">
            <i className="fas fa-box" /> MAG Box
          </a>
        </div>

        <div id="firestick" className="guide-card">
          <div className="guide-card-header">
            <i className="fab fa-amazon" />
            <h3>Fire TV Stick / Amazon Firestick</h3>
          </div>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Install Downloader App</h4>
                <p>
                  Go to your device&apos;s home screen, select <strong>Search</strong>, and type{" "}
                  <strong>&quot;Downloader&quot;</strong>. Select the app and click <strong>Download/Get</strong>.
                </p>
                <img src="/guide/img/FireTVStick5.png" alt="Downloader App" className="step-img" />
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Enable Unknown Sources</h4>
                <p>
                  Go to <strong>Settings &gt; My Fire TV &gt; Developer Options</strong>. Enable{" "}
                  <strong>&quot;Install unknown apps&quot;</strong> and set it to <strong>ON</strong> for the Downloader
                  app.
                </p>
                <div className="important-box">
                  <i className="fas fa-info-circle" /> If you don&apos;t see Developer Options, go to <b>About</b> and
                  click your device name 7 times.
                </div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Download IPTV Smarters</h4>
                <p>
                  Launch Downloader and type the following URL: <b>https://www.iptvsmarters.com/smarters.apk</b>. Click{" "}
                  <strong>Go</strong> and then click <strong>Install</strong> when prompted.
                </p>
                <img src="/guide/img/FireTVStick16.png" alt="Download URL" className="step-img" />
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Log In &amp; Start Streaming</h4>
                <p>
                  Open <b>IPTV Smarters Pro</b>, select{" "}
                  <strong>&quot;Login with Xtream Codes API&quot;</strong> and enter the Username, Password, and URL
                  sent to your email.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="android" className="guide-card">
          <div className="guide-card-header">
            <i className="fab fa-android" />
            <h3>Android &amp; iOS (Mobile/Tablet)</h3>
          </div>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Download the App</h4>
                <p>
                  Search for <strong>&quot;IPTV Smarters Pro&quot;</strong> (Android) or{" "}
                  <strong>&quot;Smarters Player Lite&quot;</strong> (iOS) on the Google Play Store or App Store.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Select Xtream API</h4>
                <p>
                  Open the app and choose the <strong>&quot;Login with Xtream Codes API&quot;</strong> option.
                </p>
                <img src="/guide/img/android.png" alt="Login Selection" className="step-img" />
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Enter Your Details</h4>
                <p>
                  Input your subscription credentials. After clicking <strong>&quot;Add User&quot;</strong>, wait a
                  moment for the content to sync.
                </p>
                <img src="/guide/img/androide2.png" alt="Channel Load" className="step-img" />
              </div>
            </div>
          </div>
        </div>

        <div id="smart-tv" className="guide-card">
          <div className="guide-card-header">
            <i className="fas fa-tv" />
            <h3>Smart TV (Samsung &amp; LG)</h3>
          </div>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Open Content Store</h4>
                <p>
                  Go to the <b>Samsung Smart Hub</b> or <b>LG Content Store</b> and search for{" "}
                  <strong>&quot;IPTV Smarters Pro&quot;</strong>.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Install &amp; Run</h4>
                <p>
                  Once installed, open the application and select{" "}
                  <strong>&quot;Login with Xtream Codes API&quot;</strong>.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Login</h4>
                <p>Enter the credentials provided after your purchase to enjoy live TV in 4K.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="windows" className="guide-card">
          <div className="guide-card-header">
            <i className="fab fa-windows" />
            <h3>Windows PC / Laptop</h3>
          </div>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Download Windows App</h4>
                <p>
                  Download the official <strong>IPTV Smarters Pro</strong> executable for Windows from our resource
                  center.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Installation</h4>
                <p>
                  Run the installer and launch the app from your desktop. Select <strong>Xtream Codes API</strong> login.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Add Subscription</h4>
                <p>
                  Enter your unique Username and Password. Click <b>&quot;Add User&quot;</b> to start watching
                  immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="kodi" className="guide-card">
          <div className="guide-card-header">
            <i className="fas fa-play-circle" />
            <h3>KODI Setup (PVR IPTV Simple Client)</h3>
          </div>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Navigate to TV Options</h4>
                <p>Launch Kodi and select &quot;TV&quot; from the left-hand side menu.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Install PVR Client</h4>
                <p>
                  Select <strong>&quot;Enter Add-on Browser&quot;</strong> and find{" "}
                  <strong>&quot;PVR IPTV Simple Client&quot;</strong> in the list.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Configure M3U URL</h4>
                <p>
                  Click <strong>&quot;Configure&quot;</strong>, go to the <b>General</b> tab, and paste the{" "}
                  <b>M3U URL</b> we sent to your email.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Load &amp; Play</h4>
                <p>
                  Wait for the channels to load. You can now access all premium content directly from the Kodi main
                  menu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="mag" className="guide-card">
          <div className="guide-card-header">
            <i className="fas fa-box" />
            <h3>MAG Box (250, 254, 256 etc.)</h3>
          </div>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Enter System Settings</h4>
                <p>Go to <strong>Settings &gt; System Settings &gt; Servers &gt; Portals</strong>.</p>
                <img src="/guide/img/MAG Device.png" alt="MAG Box Portal" className="step-img" />
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Set Portal Details</h4>
                <p>
                  Enter <b>&quot;Plex Plus&quot;</b> as the Portal Name and paste the <b>Portal URL</b> provided in your
                  email.
                </p>
                <img src="/guide/img/MAG Device5.jpg" alt="Portal Settings" className="step-img" />
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Restart &amp; Connect</h4>
                <p>
                  Click <strong>OK</strong> to save, then restart your device. Your MAC address must be provided to us
                  for activation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
