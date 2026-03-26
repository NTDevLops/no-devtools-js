# No DevTools JS 🚫

A lightweight JavaScript library that attempts to prevent users from inspecting or interacting with your website using browser developer tools and common shortcuts.

---

## ⚠️ Important Disclaimer

This library **does NOT guarantee security**.

It only deters casual users. Anyone with technical knowledge can bypass these protections.

Do NOT rely on this for protecting sensitive data.

---

## 🚀 Features

* Disable right-click context menu
* Block DevTools shortcuts:

  * `F12`
  * `Ctrl + Shift + I`
  * `Ctrl + Shift + J`
  * `Ctrl + Shift + C`
  * `Ctrl + U`
  * `Ctrl + S`
* Disable:

  * Text selection
  * Dragging
* Detect DevTools using:

  * `debugger` execution delay
  * Window size differences
* Clears the page if DevTools is detected

---

## 📦 Installation

### Option 1: Direct Use

Download `no-devtools.js` and include it:

```html
<script src="no-devtools.js"></script>
```

---

### Option 2: CDN (after GitHub upload)

```html
<script src="https://cdn.jsdelivr.net/gh/NTDevLops/no-devtools-js@main/no-devtools.js"></script>
```

---

## 🛠 Usage

Simply include the script in your HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Protected Page</title>
</head>
<body>

<h1>Protected Content</h1>

<script src="no-devtools.js"></script>
</body>
</html>
```

No setup required.

---

## 📁 Project Structure

```
no-devtools-js/
│── no-devtools.js
│── README.md
│── LICENSE
```

---

## ⚡ Behavior

Once loaded, the script:

* Blocks user interactions like right-click and key shortcuts
* Monitors for DevTools activity
* If detected, it:

  * Clears the DOM
  * Stops page execution

---

## 📜 License

MIT License

---

## 🤝 Contributing

Pull requests are welcome. Feel free to improve detection techniques or optimize performance.

---

## ⭐ Support

If you find this useful, consider giving the repo a star ⭐
