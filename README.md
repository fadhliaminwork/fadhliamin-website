# Fadhli Amin: personal website

Live address: https://fadhliamin.my
A static website built with plain HTML, CSS and JavaScript. No frameworks, no backend, no database.

## Project structure

```
fadhliamin-website/
├── index.html      all the content (text, sections, links)
├── css/style.css   design (colours and sizes at the top of the file)
├── js/script.js    mobile menu, scroll effects, active menu link
├── assets/         future images, favicon, CV
└── README.md       this file
```

Keep this folder structure. `index.html` loads `css/style.css` and `js/script.js` using these exact paths.

## 1. Run it on your computer
- **Quick way:** double-click `index.html`. It opens in your browser. Refresh after each change.
- **With VS Code:** open the folder (File > Open Folder), install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**. The page refreshes when you save.

## 2. Upload to GitHub

**Option A: Browser upload (no extra software)**
1. Create a free account at github.com.
2. Click **+** (top right) > **New repository**. Name: `fadhliamin-website`. Choose **Public**. Leave all boxes unticked. Click **Create repository**.
3. On the repository page click **Add file** > **Upload files**.
4. Drag in everything *inside* the folder: `index.html`, `css`, `js`, `assets`, `README.md`.
5. Click **Commit changes**.

**Option B: Git commands (install Git from git-scm.com first)**
Open the folder in VS Code, then **Terminal > New Terminal**, and run one line at a time (use your own repository address):

```
git init
git add .
git commit -m "First version"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fadhliamin-website.git
git push -u origin main
```

To update the site later: change a file, save, then run
```
git add .
git commit -m "Describe the change"
git push
```

## 3. Publish with Cloudflare Pages (free)
1. Log in to the Cloudflare dashboard > **Workers & Pages** > **Create** > **Pages** > **Connect to Git**.
2. Authorise GitHub and choose the `fadhliamin-website` repository.
3. Framework preset: **None**. Build command: leave empty. Build output directory: leave empty (or `/`).
4. Click **Save and Deploy**. You will get a free `something.pages.dev` address.

## 4. Connect fadhliamin.my
1. In your Pages project open **Custom domains** > **Set up a custom domain** and enter `fadhliamin.my`.
2. If the domain is already on Cloudflare, accept the DNS record it suggests. If not, add the domain to Cloudflare and change the nameservers at your domain registrar to the two Cloudflare gives you.
3. Wait a few minutes (sometimes a few hours). HTTPS is set up automatically.
4. Every time you push a change to GitHub, the live site updates by itself.

## Editing guide
- **Change text:** open `index.html`, search for the sentence (Ctrl+F), edit it and save.
- **Change colours:** `css/style.css`, the `:root` block at the top. `--bg` is navy, `--ink` is text, `--accent` is orange. The `.light` rule further down sets the colours for the white sections.
- **Change font sizes:** in `css/style.css`, edit `font-size` in the `body`, `h1`, `h2` and `h3` rules.
- **Update email:** search `fadhliamin@phitomas.com` in `index.html` and change both the link and the visible text.
- **Add LinkedIn:** search `YOUR-LINKEDIN-USERNAME` in `index.html` and replace it with your profile name (two places).
- **Add a section:** copy a whole `<section> ... </section>` block, give it a new `id`, edit the content, and add a link to it in the menu: `<li><a href="#newid">Name</a></li>`. Use `class="sec"` (navy) or `class="sec light"` (white).
- **Add a profile photo later:** save it as `assets/profile.jpg`, then add `<img src="assets/profile.jpg" alt="Fadhli Amin" width="320" height="400">` in the About section.
- **Add a new topic or article:** copy one `<details> ... </details>` block in the Projects & Knowledge section and edit the title and text.
- **Edit the How I Work steps:** find `class="steps"` in `index.html`.
- **Favicon:** put `favicon.png` in `assets/` and replace the `<link rel="icon" ...>` line with `<link rel="icon" href="assets/favicon.png">`.
- **Social preview image:** once you have an image, add `<meta property="og:image" content="https://fadhliamin.my/assets/og.png">` in the `<head>`.

## Tips
- After changing CSS or JS, refresh with Ctrl+F5 (Mac: Cmd+Shift+R) so the browser loads the new version.
- Edit one thing at a time and check it in the browser before moving on.
- If something breaks, undo with Ctrl+Z in VS Code.
