# EMPIRE COMPONENT PROTOCOL (ECP) v1.0

## FILING SYSTEM
- **atoms/**: Smallest units. Buttons, inputs, labels, icons. Pure UI. No logic.
  - Ex: `NeoButton.jsx`, `GlitchText.jsx`
- **molecules/**: Functional groups. Input + Label, Search Bar + Icon.
  - Ex: `LeverageSlider.jsx`, `TokenSelector.jsx`
- **organisms/**: The Full Tile. These are what users drag on the dashboard.
  - Ex: `OrderEntry.jsx`, `StrategyParameters.jsx`, `LivePnL.jsx`

## RULES
1. **Always use `empire-glass`** for tile containers.
2. **Never hardcode dimensions** on Organisms. They must fill `h-full w-full`.
3. **Register your Organism** in `src/master-config.jsx` immediately after creation.
4. ** Categorize responsibly**: use 'finance', 'social', 'game', 'control', or 'lab'.

## STYLE GUIDE (Tailwind)
- Glass: `empire-glass`
- Text: `text-white/90` for headers, `text-white/50` for subtext.
- Accents: Use the `theme` prop passed to your component (emerald, pink, etc).

GO FORTH AND BUILD.
