# GBS-SetSpriteRenderOrder
**Plugin for GB Studio to change positioning of projectiles and actors.**

In GB Studio, projectiles are normally rendered behind actors. *SetSpriteRenderOrder* allows the position of projectiles and actors to be changed, from both an event within GB Studio, and an engine field. Additionally, *RenderProjectilesAboveActors* forces projectiles being displayed above actors. As these plugins cannot be used together, choose the one that best suits your needs.

<img src="https://github.com/user-attachments/assets/50e5d69a-c32d-448c-b725-741c8e04b33f" alt="An animated GIF of Chili from Hightail throwing arrow-shaped projectiles at a passive mushroom-shaped enemy. The projectiles appear in front of Chili and the enemy." />

## Updating

Although this engine plugin was built for GB Studio `4.0.2-e0`, it works on `4.1.2-e1` and should function with future GB Studio versions until [core.c](https://github.com/chrismaltby/gb-studio/blob/develop/appData/src/gb/src/core/core.c) or [core.h](https://github.com/chrismaltby/gb-studio/blob/develop/appData/src/gb/include/core.h) recieve an update. If either plugin is installed on a version that is not `4.0.2-e0`, the GB Studio compiler will return a warning. If you have verified the plugin works, update the version text within `engine/engine.json` to resolve the warning.

At the time of publishing both plugins (September 15th, 2024), `core.c` was last updated with `ada640b`, and ``core.h` was last updated with `6388ebe`. If the hash do not match the most recent version of the file, then the plugin will most likely require an update. To manually update, try seeing what was modified in the file, and adapting those changes to the plugin's file. A [pull request](https://github.com/KirbyKing186/GBS-SetSpriteRenderOrder/pulls) would be highly appreciated if you are able to update it yourself. Otherwise, you can also make an [issue](https://github.com/KirbyKing186/GBS-SetSpriteRenderOrder/issues) and I will try and update it myself as soon as possible.

To update the plugin sourced from an older release, simply merge the contents of the updated plugin with the old plugin. If you have *RenderProjectilesAboveActors*, make sure that no other engine plugin modifies `src/core/core.c`. Furthermore, if you have *SetSpriteRenderOrder*, make sure that no other engine plugins modifies `src/core/core.c` or `include/core.h`.

## Credits

Programmed by [Mico27](https://github.com/Mico27)

Engine field added by [Fredrik Ofstad](https://github.com/fredrikofstad)

Plugin created and uploaded by [KirbyKing186](https://github.com/KirbyKing186).