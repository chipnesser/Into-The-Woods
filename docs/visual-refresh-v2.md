# Version 2.0 — pastoral field guide

This is a visual refresh of the existing app. The two-card layout, region selector, mood buttons, trail content, driving evidence, weather, wisdom and map actions retain their existing order and behavior. `script.js` and `trail-access.js` are unchanged.

## Visual systems

- **World:** a single painted countryside replaces the CSS sun, pill-shaped clouds, circular pastures, rainbow borders, polygonal dragon/unicorn details and simple animal silhouettes. Soft wooded hills, atmospheric sky, winding paths, flowers and tiny deer provide depth and a quiet playful character.
- **Surfaces:** warm paper gradients and a very faint tiled grain replace glossy white/blue panels. Fine sage borders, slightly irregular corner radii and restrained shadows keep information clear against the richer scenery. Result surfaces remain opaque.
- **Color:** moss, sage, dusty sky and straw ochre replace bright lime and saturated candy colors. Selected regions have a dark moss fill and pale text; primary choices retain their warm/cool distinction.
- **Type:** native Georgia headings and italic trail wisdom suggest an almanac. Nunito remains the readable interface/body font. Removing Baloo reduces the external font request from two families to one; system fallbacks remain available.
- **Controls:** clear borders, generous touch areas, visible selected states and a 3px keyboard-focus outline. The existing mobile single-column layout and intermediate two-column grids remain.
- **Motion:** two faint sky veils drift by only a few pixels over 95–125 seconds. Rerolls fade briefly without moving the card; hover states change shadow/border rather than lifting controls. The loading spinner slows to 850ms. Reduced-motion preferences disable animations and transitions.

## Assets and performance

Generated with the **built-in imagegen tool**, then encoded as WebP and embedded in self-contained SVG files. The scene remains a raster painting; these wrappers contain no vector redraw or external image dependencies. This permits the artwork to be saved through GitHub's text editor when binary upload is unavailable.

- `assets/pastoral-landscape-v2.svg`: 1536×1024, embeds a 255,522-byte WebP (about 250 KiB). The text wrapper adds base64 overhead; compression substantially recovers it.
- `assets/pastoral-landscape-v2-small.svg`: 900×600, embeds an 89,666-byte WebP (about 88 KiB), used at widths up to 900px.
- `assets/paper-grain.svg`: a small repeatable, static texture tile. Its filter is confined to the tile, not applied as a live filter to the cards or full-screen landscape.

The original generated PNG is preserved in the imagegen output directory. Production uses the workspace assets above. No new JavaScript dependencies, canvas drawing loop, backdrop blur or animated full-screen image filters are introduced. A plain background color and paper gradients remain when decorative assets cannot load.

The painting intentionally remains static and shared across regions. On narrow phones its side details are cropped so the controls and reading surface take priority. Direct WebP files could replace the wrappers when a normal binary publishing path is available. Region-specific scenery or a custom hand-lettered title could be future polish; neither is needed for the current refresh.

## Generation prompt

> Use case: illustration-story. Asset type: a single wide landscape background painting for the existing Into the Woods hiking picker website, not a UI mockup. Primary request: a charming pastoral countryside scene inspired by Bruegel's rustic landscapes and a lightly illustrated hiking field guide, warm and welcoming, softer and more painterly than flat vector graphics. Composition: wide landscape 3:2 aspect ratio, generous airy pale blue sky in the upper half with loose soft ivory cloud brushwork and a gentle sun glow at upper right. Rolling sage and olive meadows recede into hazy blue-green wooded hills. Woodland edges, little wildflowers, soft hedgerows, and a winding earth path frame the left and right margins; the middle stays quiet and open, since two interface cards will cover the central 65 percent. A couple of tiny softly painted grazing deer near the outer lower corners offer a playful discovery, not large mascots. Style/medium: hand-painted gouache and thin oil washes on warm finely textured paper, visible restrained dry-brush touches, softened irregular edges, natural organic silhouettes, atmospheric depth, subtle old-master influence translated into fresh storybook illustration. Palette: dusty sky blue, warm cream, moss green, muted sage, straw ochre, small russet accents. Lighting/mood: calm luminous late morning, gentle golden light, never gloomy or sepia-heavy. Constraints: image only, no text, lettering, logos, interface, frames or watermark. No polygons, flat vector shapes, neon green, photorealism, ornate historical costumes, or crowded scene. Keep contrast moderate so it serves as scenery around a readable practical interface.

## Verification

Existing 13 regression checks pass. Browser verification covers desktop and narrow phone layouts, rerolling, region changes, keyboard focus, live weather and no horizontal overflow. Reduced-motion support is implemented in CSS. The preview server now serves binary artwork without decoding it as text.
