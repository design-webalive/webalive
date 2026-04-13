# Wireframes

A shared place to host wireframes as live preview links that anyone can open in a browser.

**All live wireframes start with:** `https://design-webalive.github.io/webalive/`

---

## Current Wireframes

| Project | Link |
|---|---|
| Melbourne Pest Control | [design-webalive.github.io/webalive/mpc/](https://design-webalive.github.io/webalive/mpc/) |

---

## How to Add a New Wireframe

### What you need

- Access to this repository (ask your team lead if you cannot see the **"Add file"** button)
- Your wireframe as a single HTML file

### Step by step

1. Open this repository page on GitHub
2. Click the **"Add file"** button (near the top right) and choose **"Create new file"**
3. You will see a text box at the top for the filename. This is where you choose what the link will look like. Type a short name for the project, then type `/index.html`

   **Example:** To create a link like `design-webalive.github.io/webalive/acme-corp/`, type:
   ```
   acme-corp/index.html
   ```
   When you type the `/` character, you will see the folder name separate out -- that is normal.

4. In the large text area below, paste your **entire** HTML code
5. Scroll down and click the green **"Commit changes"** button
6. A small popup will appear -- click **"Commit changes"** again to confirm
7. Wait 1-2 minutes. Your wireframe is now live at:
   ```
   https://design-webalive.github.io/webalive/<the-folder-name-you-typed>/
   ```

### How the folder name becomes the link

The folder name you type in step 3 is exactly what the client will see in the URL. Pick something clean and short. Use hyphens instead of spaces.

| What you type as the filename | Link you share with the client |
|---|---|
| `acme-corp/index.html` | `design-webalive.github.io/webalive/acme-corp/` |
| `greenfield-homepage/index.html` | `design-webalive.github.io/webalive/greenfield-homepage/` |
| `smith-dental-v2/index.html` | `design-webalive.github.io/webalive/smith-dental-v2/` |

**The folder name is the link name.** If you want to change what the client sees, use a different folder name.

---

## How to Update an Existing Wireframe

1. On this page, click on the project folder (e.g. `mpc`)
2. Click on the file called **index.html**
3. Click the **pencil icon** (top right of the file) to edit
4. Select all the old content (Ctrl+A on Windows, Cmd+A on Mac) and delete it
5. Paste your new HTML code
6. Click **"Commit changes"** and confirm

The same link will now show the updated version. You do not need to send a new link.

---

## Important Rules

- **The file must be called `index.html`** -- If it has any other name, the link will not work
- **Use lowercase folder names with hyphens** -- Good: `my-project` / Bad: `My Project v2 Final`
- **One folder per wireframe** -- Each wireframe lives in its own folder
- **Keep everything in one file** -- All CSS and JavaScript should be inside the HTML file, not in separate files

---

## Something Not Working?

| What is happening | What to do |
|---|---|
| Link shows "404 - not found" | Make sure your file is called exactly `index.html` (all lowercase). Wait 1-2 minutes after saving. |
| Page looks broken or has no styling | Images or fonts from external sites may be blocked. Check that your CSS is inside the HTML file. |
| Old version still showing | Do a hard refresh in your browser: hold Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac). |
| Cannot see the "Add file" button | You may not have access yet. Ask your team lead to add you as a collaborator. |
