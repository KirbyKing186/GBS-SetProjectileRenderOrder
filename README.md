# GBS-SetProjectileRenderOrder
**GB Studio plugin that modifies the rendering order of projectiles and actors.**

In GB Studio, projectiles are normally rendered behind actors. *SetProjectileRenderOrder* allows the position of projectiles and actors to be changed, from both an event within GB Studio, and an engine field. Additionally, *RenderProjectilesAboveActors* forces projectiles being displayed above actors. As these plugins cannot be used together, choose the one that best suits your needs.

<img src="https://github.com/user-attachments/assets/50e5d69a-c32d-448c-b725-741c8e04b33f" alt="An animated GIF of Chili from Hightail throwing arrow-shaped projectiles at a passive mushroom-shaped enemy. The projectiles appear in front of Chili and the enemy." />

## Usage

To use *SetProjectileRenderOrder*, add the plugin to the `plugins` folder. By default, the rendering order will place actors over projectiles. To change this, either modify the Render Order value pressnt in the Settings menu of the GB Studio project, or use a "Set Projectile Render Order" event.

To use *RenderProjectilesAboveActors*, simply add the plugin to the `plugins` folder.

If you have *RenderProjectilesAboveActors*, make sure that no other engine plugin modifies `src/core/core.`, and if you have *SetProjectileRenderOrder*, make sure that no other engine plugins modifies `src/core/core.c` or `include/core.h`.

To update this plugin to a newer release, simply merge the contents of the updated plugin with the old plugin. See the [Plugins](https://www.gbstudio.dev/docs/extending-gbstudio/plugins/) page in the GB Studio documentation for further information on using plugins.

## Documentation

By switching the placement of `projectiles_update();` and `actors_update();` in `core.c`, projectiles will render over actors. This is the basis for both plugins, with *RenderProjectilesAboveActors* doing this and nothing more in order to provide a more minimal setup. On the other hand, *SetProjectileRenderOrder* uses a more complex setup in order to allow dynamic changes to the rendering order of sprites. A custom engine field named `render_order` is defined in `core.h`, in which it is then used in `core.c` to determine the sprite order based on its value. When `render_order` is 0, actors are rendered above projectiles, and when `render_order` is 1, projectiles are rendered above actors. The default value for `render_order` is 0. The engine field `render_order` can be modified in the settings menu of the GB Studio project, or with the "Set Projectile Render Order" event. 

Although this engine plugin was built for GB Studio `4.0.2-e0`, it works on `4.1.2-e1` and should function with future GB Studio versions until [core.c](https://github.com/chrismaltby/gb-studio/blob/develop/appData/src/gb/src/core/core.c) or [core.h](https://github.com/chrismaltby/gb-studio/blob/develop/appData/src/gb/include/core.h) recieve an update. If either plugin is installed on a version that is not `4.0.2-e0`, the GB Studio compiler will return a warning. If you have verified the plugin works, update the version text within `engine/engine.json` to resolve the warning.

At the time of publishing both plugins (GB Studio 4.1.2, September 15th, 2024), `core.c` was last updated with `ada640b`, and `core.h` was last updated with `6388ebe`. If the hash do not match the most recent version of the file, then the plugin will most likely require an update. To manually update, try seeing what was modified in the file, and adapting those changes to the plugin's file. A [pull request](https://github.com/KirbyKing186/GBS-SetProjectileRenderOrder/pulls) would be highly appreciated if you are able to update it yourself. Otherwise, you can also make an [issue](https://github.com/KirbyKing186/GBS-SetProjectileRenderOrder/issues) and I will try and update it myself as soon as possible.

## Credits

Programmed by [Mico27](https://github.com/Mico27)

Engine field added by [Fredrik Ofstad](https://github.com/fredrikofstad)

Plugin created and uploaded by [KirbyKing186](https://github.com/KirbyKing186).
