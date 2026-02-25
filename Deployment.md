# Deploying to NameCheap Stellar Hosting

This project is a **Vite + React** single-page app (SPA). Stellar is shared hosting (Apache), so you deploy only the **built static files**—no Node.js runs on the server.

---

## 1. Build the site locally

```bash
npm ci
npm run build
```

Output goes to **`dist/`**. You will upload the **contents** of `dist/` to your hosting (not the `dist` folder itself).

---

## 2. Credentials and settings you need

You need three values: **FTP host**, **FTP username**, and **FTP password**. You do **not** need to enable FTP separately—it works as soon as you have Stellar hosting. Below is how to get each value and, if you use GitHub Actions, how to add them as secrets.

---

### How to get each credential (NameCheap / cPanel)

#### 1. FTP host (server hostname or IP)

- **From NameCheap:** Log in → **Domain List** → click **Manage** next to your domain → open the **Hosting** (or **Stellar**) section. The server hostname is shown there (e.g. `server123.namecheap.com`).
- **From cPanel:** After logging into cPanel, check **FTP Accounts** or the **General Information** / **Server Information** section for the hostname.
- **NameCheap help:** [What server is my account hosted on?](https://www.namecheap.com/support/knowledgebase/article.aspx/1425/50/what-server-is-my-account-hosted-on)

**For GitHub Actions:** Use **only** the hostname or IP (e.g. `server123.namecheap.com`). Do **not** include `ftpes://` or `sftp://` in the secret—the workflow uses plain FTP; the host should be just the server name.

#### 2. FTP username

- **Easiest:** Use your **cPanel username**. You set this when you first set up Stellar (or it was provided by NameCheap). It’s the same username you use to log into cPanel.
- **Optional:** You can create a separate FTP-only account in cPanel: **FTP Accounts** → **Add FTP Account**. Then use that account’s full username (often `ftpuser@yourdomain.com` or as shown in cPanel).  
  **Note:** If you use a separate FTP account, **SFTP** (e.g. in FileZilla) will **not** work with it—SFTP on NameCheap only works with the main cPanel username. For GitHub Actions (FTP), the separate account is fine.

#### 3. FTP password

- **If using cPanel username:** Use your **cPanel password** (the one you use to log into the hosting control panel).
- **If you created a separate FTP account:** Use the **password you set for that FTP account**.

No extra “activation” is required: once you have Stellar and can log into cPanel, FTP access is already on. You only need to know these three values.

---

### If you use GitHub Actions: adding the secrets

To make the deploy workflow work, add these as **repository secrets** (not environment variables, not in the code):

1. On GitHub, open your **repository**.
2. Go to **Settings** → **Secrets and variables** → **Actions**.
3. Click **New repository secret**.
4. Add each secret **one by one**:

   | Name            | Value to paste |
   |-----------------|----------------|
   | `FTP_SERVER`    | Your server hostname only, e.g. `server123.namecheap.com` (no `ftpes://` or `sftp://`) |
   | `FTP_USERNAME`  | Your cPanel username (or the full FTP account username if you use one) |
   | `FTP_PASSWORD`  | Your cPanel password (or the FTP account password) |

5. Save each secret. You won’t be able to see the value again—only that the secret exists.

After all three are added, the next push to `main` (or a manual run of the “Deploy to Stellar (FTP)” workflow) will use them to upload the built site. No other special steps are required for Step 2.

---

### Protocol and port (for manual FTP/SFTP clients)

- **FTPES (FTP over TLS):** port **21**
- **SFTP (SSH):** port **21098** (preferred when your client supports it; use cPanel username/password only)

Use SFTP in tools like FileZilla when possible. The GitHub workflow in this repo uses standard FTP (FTPES) and the three secrets above.

### Remote directory

- **Main domain:** upload into **`public_html`**
- **Subdomain or addon domain:** use the folder shown in cPanel for that domain (e.g. `public_html/subdomain` or the addon’s document root)

---

## 3. Other important details

### SPA routing (React Router)

The app uses client-side routing. So that URLs like `yoursite.com/some-page` and refreshes work on Apache, a **`.htaccess`** file is included in **`public/.htaccess`**. Vite copies it into `dist/` when you build, so it will be on the server after you upload. No extra step needed if you upload the full `dist/` contents.

### Base URL

- This project uses **relative asset paths** (`base: "./"`) in **`vite.config.ts`**, so CSS and JS load correctly on cPanel no matter how files are placed.
- If the site is served from a **subdirectory** (e.g. `https://yourdomain.com/myapp/`), set `base: '/myapp/'` in **`vite.config.ts`** and rebuild.

### What to upload

- Upload **everything inside `dist/`** (including `index.html`, `assets/`, and `.htaccess`) into **`public_html`** (or the correct document root for your domain).
- Do **not** upload the repo (e.g. `src/`, `node_modules/`) or the **`dist` folder itself**; only its **contents**. If `public_html` ends up with a `dist` folder (e.g. `public_html/dist/index.html`), the site can break; see the troubleshooting section below.

### Styles or scripts not loading on the domain (cPanel file structure)

If the site looks unstyled or broken on your domain but works locally:

1. **Check the folder structure in cPanel File Manager.** Open **File Manager → public_html**. It should look like this:
   - `public_html/index.html` (the main page)
   - `public_html/assets/` (folder containing `.css` and `.js` files with hashed names)
   - `public_html/.htaccess` (if present)

2. **If you see `public_html/dist/`** with `index.html` and `assets/` inside it, the browser is loading `public_html/index.html` but the built app expects assets next to it. Either:
   - **Move the contents of `dist` up:** In File Manager, open `public_html/dist/`, select **all** (index.html, assets folder, .htaccess), then **Move** them into `public_html` (so they sit next to any existing files, not inside a `dist` folder). Then delete the now-empty `dist` folder.  
   - Or **rebuild and re-upload** so that you upload only the **contents** of your local `dist/` folder into `public_html`, not the `dist` folder itself.

3. **Relative base:** The project is configured with `base: "./"` so asset paths are relative to `index.html`. That way CSS and JS load correctly as long as `index.html` and the `assets/` folder are in the same directory (e.g. both directly in `public_html`).

### HTTPS

Stellar provides free SSL. In cPanel you can use **SSL/TLS Status** or **Let’s Encrypt** to turn on HTTPS and force HTTPS if you want.

---

## 4. Ways to deploy

### A. Manual upload (FileZilla / cPanel File Manager)

1. Run `npm run build`.
2. In FileZilla (or another FTP/SFTP client), connect with:
   - **Host:** your Stellar server
   - **Port:** 21 (FTPES) or 21098 (SFTP)
   - **Username / Password:** as above
3. Go to **`public_html`** on the server.
4. Upload the **contents** of your local **`dist/`** folder into `public_html` (overwrite when prompted if you’re updating).

Or use **cPanel → File Manager → public_html → Upload** and upload the same files.

### B. Automated deploy with GitHub Actions (FTP)

If the repo is on GitHub, you can use a workflow that builds and uploads via FTP/SFTP using **secrets** so credentials are not in the code.

**Secrets to add in GitHub (Settings → Secrets and variables → Actions):**

| Secret name   | Value |
|---------------|--------|
| `FTP_SERVER`  | FTP host (e.g. `server123.namecheap.com`) |
| `FTP_USERNAME`| FTP username |
| `FTP_PASSWORD`| FTP password |

Optional:

| Secret name      | Value |
|------------------|--------|
| `FTP_REMOTE_DIR` | e.g. `public_html` (if your workflow doesn’t default to it) |

Then add a workflow (e.g. `.github/workflows/deploy.yml`) that:

1. Runs on `push` to `main` (or your chosen branch).
2. Runs `npm ci` and `npm run build`.
3. Uses a GitHub Action to upload the contents of `dist/` to the server via FTP or SFTP using these secrets.

If you want, a ready-made `deploy.yml` for this repo can be added in a follow-up step.

---

## 5. Quick checklist

- [ ] Build with `npm run build` and confirm `dist/` contains `index.html`, `assets/`, and `.htaccess`.
- [ ] Have FTP host, username, and password (and use SFTP port 21098 if possible).
- [ ] Upload **contents** of `dist/` to **`public_html`** (or the right document root).
- [ ] If the site lives in a subdirectory, set `base` in `vite.config.ts` and rebuild.
- [ ] Enable HTTPS in cPanel if desired.
- [ ] Test the live URL and a few client-side routes (and refresh on a route) to confirm SPA routing works.
