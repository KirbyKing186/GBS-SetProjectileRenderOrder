# GBS-RenderProjectilesAboveActors
**Plugin for GB Studio to show projectiles above actors.**

In GB Studio, projectiles are normally rendered behind actors. *RenderProjectilesAboveActors* edits `core.c` and swaps the positions of the `actors_update()` and `projectiles_update()` lines, so that projectiles can be rendered above actors. This engine plugin was built for GB Studio `4.0.2-e0`, and can be updated using the instructions below.

<img src="https://github.com/user-attachments/assets/50e5d69a-c32d-448c-b725-741c8e04b33f" alt="An animated GIF of Chili from Hightail throwing arrow-shaped projectiles at a passive mushroom-shaped enemy. The projectiles appear in front of Chili and the enemy." />

## Updating

Open the file `engine.json`, present in `plugins\RenderProjectilesAboveActors\engine`, and update the version text. If this does not fix any issues caused by being on a version higher than `4.0.2-e0`, continue with the following steps:

To update the `core.c` file of this plugin to a newer version, eject the engine of a project loaded in an updated build of GB Studio, go into `assets\engine\src\core` of that project's directory, and copy the file `core.c`. Next, go into `plugins\RenderProjectilesAboveActors\engine\src\core`, delete the old `core.c` file, and paste the new one. Open the new `core.c` file, and search for `projectiles_update();`, which should be placed under `actors_update();`. Copy the line that has `projectiles_update();` and make it switch places with `actors_update();`, so that the final product looks similar to this:

                projectiles_update();                                   // update and render projectiles
                actors_update();

Save the `core.c` file. If GB Studio was open during the updating process, save your data, restart the program, and verify that the updated plugin works. Delete the directory `assets\engine` if there is no more need for engine edits. 

If you find a version that this plugin stops working on and you have followed these steps to update it manually, a [pull request](https://github.com/KirbyKing186/GBS-RenderProjectilesAboveActors/pulls) would be highly appreciated! You can also make an [issue](https://github.com/KirbyKing186/GBS-RenderProjectilesAboveActors/issues) and I will try and update it myself as soon as possiboe.

## Credits

Programmed by [Mico27](https://github.com/Mico27)

Plugin created and uploaded by [KirbyKing186](https://github.com/KirbyKing186).
