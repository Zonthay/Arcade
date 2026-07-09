# Stage Scene Survival

Three.js browser survival prototype with the Gib player model, touch controls, PC controls, weapons, enemy waves, and a HUD enemy burst test button.

## Run locally

```powershell
npm start
```

Open:

```text
http://127.0.0.1:8765/index.html
```

If you do not want to use npm, this also works:

```powershell
node local-static-server.mjs
```

## Controls

- PC: WASD move, Shift/Space dash, C pickup, 1-4 select, E/left click attack, F special, right click aim.
- Phone/tablet: on-screen joystick and action buttons.
- HUD: `Add Enemy +50` immediately adds 50 enemies without clearing the current wave.

## Camera tuning

Camera tuning values live near the top of `index.html`:

```js
const CAMERA_ZOOM_LEVEL = 2;
const CAMERA_TARGET_FOV = 30;
```

The in-game measure chip shows the active values, for example:

```text
Zoom x2.0 | FOV 30.0 | 16.6m
```

## Smartphone optimization

The game automatically uses a lighter mobile profile on touch devices and small screens:

- lower render pixel ratio
- tighter blood, corpse, and spark effect budgets
- portrait and landscape touch-control layouts
- responsive HUD actions

## GitHub Pages

This project is static. To publish with GitHub Pages:

1. Push the whole folder to a GitHub repository.
2. In GitHub, open `Settings > Pages`.
3. Set source to the branch that contains `index.html`.
4. Open the Pages URL after GitHub finishes deploying.

The page imports Three.js from CDN and loads assets from `assets/`, so keep the asset folder next to `index.html`.
