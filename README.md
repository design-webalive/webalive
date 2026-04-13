# Wireframes

Shared repository for hosting interactive HTML wireframes via GitHub Pages. Each project gets its own folder and a live preview link.

**Live base URL:** `https://design-webalive.github.io/webalive/`

---

## How to Add Your Wireframe

### Step 1: Create a project folder with your file

1. From this repository page, click **"Add file"** > **"Create new file"**
2. In the filename field, type your project folder name followed by `/index.html`
   - Example: `acme-corp/index.html`
   - Typing the `/` automatically creates the folder
3. Paste your full HTML content into the editor
4. Click **"Commit changes"** and confirm

### Step 2: Get your live link

Wait 1-2 minutes after committing. Your wireframe will be live at:

```
https://design-webalive.github.io/webalive/<your-folder-name>/
```

The folder name you choose is exactly what appears in the URL. Choose something clean and professional.

| Folder name you type | Live link |
|---|---|
| `acme-corp/index.html` | `design-webalive.github.io/webalive/acme-corp/` |
| `greenfield-v2/index.html` | `design-webalive.github.io/webalive/greenfield-v2/` |
| `smith-dental/index.html` | `design-webalive.github.io/webalive/smith-dental/` |

---

## Updating a Wireframe

1. Navigate into the project folder and click on `index.html`
2. Click the pencil icon (edit) in the top right
3. Replace the content with your updated HTML
4. Click **"Commit changes"** and confirm

The same link updates automatically within 1-2 minutes.

---

## Rules

1. **Always name your file `index.html`** -- Required for the clean folder URL to work
2. **Use short, lowercase folder names with hyphens** -- Good: `my-project`. Bad: `My Project_v2 Final`
3. **One folder per project** -- Keep each wireframe self-contained in its own folder
4. **Keep wireframes self-contained** -- CSS in `<style>`, JS in `<script>`, all in one HTML file. External fonts and CDN links are fine

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Page shows a 404 | Check file is named exactly `index.html`. Wait 1-2 minutes after committing |
| Page looks broken | Check browser console for failed resource loads. External images may block hotlinking |
| Changes not appearing | Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac). Wait 1-2 minutes |
