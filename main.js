const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

function createWindow() {
  const mainScreen = screen.getPrimaryDisplay();
  const maxWindowBounds = mainScreen.workAreaSize;

  const win = new BrowserWindow({
    width: 300,
    height: 200,
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,

    x: maxWindowBounds.width - 300,
    y: maxWindowBounds.height - 200 + 50,

    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");

  win.removeMenu();
}

app.whenReady().then(createWindow);
