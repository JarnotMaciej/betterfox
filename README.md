# Betterfox Fork

![GitHub](https://img.shields.io/github/license/JarnotMaciej/betterfox?style=flat-square) ![GitHub](https://img.shields.io/github/languages/top/JarnotMaciej/betterfox?style=flat-square) ![GitHub](https://img.shields.io/github/languages/code-size/JarnotMaciej/betterfox?style=flat-square) 

### SHORT DESCRIPTION
This fork of Betterfox introduces additional tweaks and a workflow to keep the `user.js` file updated with the latest enhancements from the original Betterfox repository.

### INSTALLATION

- **Prerequisites:**
  - Ensure you have Mozilla Firefox installed on your system.
  - Familiarity with navigating through system directories is helpful.

- **Steps for Windows and Linux:**

  1. **Backup Firefox Profile:**
     - Before making any changes, it's crucial to create a backup of your Firefox profile. This can be done by following the instructions [here](https://github.com/yokoffing/Betterfox/wiki/Backup).

  2. **Clone the fork repository.**

  3. **Apply `user.js`:**
     - Open Firefox and type `about:profiles` in the URL bar, then press Enter.
     - Identify the profile you wish to modify (or use the default profile) and click on **Open Folder** under **Root Directory**.
     - Move the downloaded `user.js` file into this directory.

  4. **Apply `policies.json`:**
     - For Windows:
       - Navigate to your Firefox installation directory (usually `C:\Program Files\Mozilla Firefox\` or `C:\Program Files (x86)\Mozilla Firefox\`).
       - Create a folder named `distribution` if it doesn't already exist.
       - Place the downloaded `policies.json` file inside the `distribution` folder.
     - For Linux:
       - The location to place `policies.json` may vary depending on your distribution. A common location is `/usr/lib/firefox/distribution/`. If this directory does not exist, create it.
       - Move or copy the `policies.json` file into the `distribution` folder using terminal commands. For example:
         ```
         sudo cp policies.json /usr/lib/firefox/distribution/
         ```

  5. **Restart Firefox:**
     - Close all running instances of Firefox and reopen it for the changes to take effect.

### USAGE INSTRUCTION

- **Using the Customized Firefox:**
  - After following the installation steps, Firefox will automatically apply the settings from modified `user.js`
  - You can review and adjust these settings by typing `about:config` in the Firefox URL bar.

- **Updating Settings:**
  - The included GitHub workflow (`update-user-js.yml`) automatically updates `user.js` from the original Betterfox repository daily.
  - To manually trigger an update or include modifications, navigate to the `.github/workflows` directory in your fork and adjust the workflow file as needed.

- **Applying Additional Tweaks:**
  - For further customization, refer to the [Common Overrides](https://github.com/yokoffing/Betterfox/wiki/Common-Overrides) section of the original Betterfox repository.
  - Consider using an ad blocker like uBlock Origin with recommended filters for an enhanced browsing experience.
