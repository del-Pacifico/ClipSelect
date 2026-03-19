# 📝 ClipSelect

![Chromium 93+](https://img.shields.io/badge/Chromium-93%2B-4285F4?logo=google-chrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-FF9800)
![Brave](https://img.shields.io/badge/Brave-Tested-FB542B?logo=brave&logoColor=white)

![Version](https://img.shields.io/github/v/release/del-Pacifico/ClipSelect?style=flat-square)
![License](https://img.shields.io/badge/license-MPL--2.0-green?style=flat-square)
![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)

![GitHub stars](https://img.shields.io/github/stars/del-Pacifico/ClipSelect?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/del-Pacifico/ClipSelect?style=flat-square)

![Made with ❤️ by del-Pacifico](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F%20by%20del--Pacifico-orange?style=flat-square)

---

## 📌 Overview

**ClipSelect** is a browser extension designed to make **text copying precise, intentional, and reliable**.

Modern browsers copy selected text instantly. While convenient, this behavior can lead to **unintentional clipboard overwrites**, loss of external content, or incomplete selections.

ClipSelect introduces a **controlled copy mechanism**, ensuring that text is copied **only when explicitly triggered by the user**.

> Make copying text **predictable, intentional, and safe**.

---

## 📑 Table of Contents

- [📝 ClipSelect](#-clipselect)
  - [📌 Overview](#-overview)
  - [📑 Table of Contents](#-table-of-contents)
  - [🚀 Why This Project Exists](#-why-this-project-exists)
  - [🎯 Use Cases](#-use-cases)
    - [💻 Developers](#-developers)
    - [📚 Researchers](#-researchers)
    - [✍️ Writers](#️-writers)
    - [🧠 Knowledge Workers](#-knowledge-workers)
  - [⚠️ Edge Cases \& Warnings](#️-edge-cases--warnings)
  - [🔐 Privacy](#-privacy)
  - [📜 Usage Policy](#-usage-policy)
  - [📚 Documentation](#-documentation)
  - [🏗 Repository Structure](#-repository-structure)
  - [🔢 Versioning](#-versioning)
  - [🔗 Related Projects](#-related-projects)
  - [💖 Support the Project](#-support-the-project)
  - [📜 License](#-license)
  - [🤝 Contributing](#-contributing)
  - [🧭 Project Vision](#-project-vision)

---

## 🚀 Why This Project Exists

Default browser behavior:

- Copies immediately from current selection
- Can overwrite clipboard unintentionally
- Can result in partial or incorrect copies

ClipSelect separates:

👉 **Selection ≠ Copy**

Only explicit user action triggers copy.

---

## 🎯 Use Cases

### 💻 Developers

Copy code safely without losing clipboard content.

### 📚 Researchers

Extract precise text from complex pages.

### ✍️ Writers

Collect notes without accidental overwrites.

### 🧠 Knowledge Workers

Maintain clipboard integrity across workflows.

---

## ⚠️ Edge Cases & Warnings

- Some sites restrict DOM access
- Dynamic pages may alter selections
- Inputs/textareas may behave differently

ClipSelect handles these cases gracefully, but browser limitations apply.

---

## 🔐 Privacy

ClipSelect is **privacy-first**:

- No tracking
- No telemetry
- No external communication

All operations are **local to the browser**.

---

## 📜 Usage Policy

ClipSelect must be used responsibly:

- Respect website terms
- Respect copyright
- Do not extract protected content

---

## 📚 Documentation

| Document | Description |
|--------|--------|
| `MVP_SCOPE_v1.0.0.md` | MVP definition |
| `ARCHITECTURE.md` | Technical design |
| `SECURITY_MODEL.md` | Security approach |
| `ENGINEERING_RULES.md` | Development standards |

---

## 🏗 Repository Structure

```text
repo-root
├─ README.md
├─ LICENSE
├─ VERSION
├─ CHANGELOG.md
├─ docs
├─ extension
└─ .github
```

---

## 🔢 Versioning

ClipSelect follows **Semantic Versioning (SemVer)**.

```text
1.0.0
```

Version information is tracked in:

- `VERSION`
- `extension/manifest.json`
- `CHANGELOG.md`

---

## 🔗 Related Projects

Other projects from **del-Pacifico**:

- 🧙‍♂️ **Unicode to PNG**  
  <https://github.com/del-Pacifico/unicode-to-png>

- 🏔️ **Mass Image Downloader**  
  <https://github.com/del-Pacifico/Mass-Image-Downloader>

---

## 💖 Support the Project

If you find this project useful:

- ⭐ Star the repository  
- 🧠 Share feedback  
- 🐛 Report issues  
- 🤝 Contribute improvements  

Community contributions help the project evolve.

---

## 📜 License

This project is licensed under the **Mozilla Public License 2.0 (MPL-2.0)**.

See the `LICENSE` file for full details.

---

## 🤝 Contributing

Contribution guidelines and development workflows will be introduced as the project evolves.

Future development may include:

- Advanced copy triggers
- Smart selection validation
- Accessibility improvements

---

## 🧭 Project Vision

ClipSelect aims to provide a **simple but powerful improvement to everyday browsing workflows**.

By making copy actions **intentional and reliable**, the extension helps users avoid accidental clipboard overwrites and maintain better control over copied information.

---

![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow?style=flat-square&logo=javascript)
![No Tracking](https://img.shields.io/badge/Privacy-No%20tracking-blueviolet?style=flat-square&logo=shield)
![Lightweight](https://img.shields.io/badge/Built-lightweight-lightgrey?style=flat-square)
![Modular Architecture](https://img.shields.io/badge/Architecture-Modular-informational?style=flat-square)
![ES Modules](https://img.shields.io/badge/ESM-Enabled-success?style=flat-square&logo=javascript)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen?style=flat-square&logo=github)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen?style=flat-square)
![Clean Code](https://img.shields.io/badge/Code-Clean-blue?style=flat-square)
