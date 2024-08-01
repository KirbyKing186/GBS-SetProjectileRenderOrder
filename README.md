# GBS-RenderProjectilesAboveActors
**Plugin for GB Studio to show projectiles above actors.**

This plugin edits core.c and swaps the positions of "actors_update()" and "projectiles_update()", so that projectiles can be rendered above actors.

## Updating
To update this plugin to future versions, eject the engine of a project loaded in an updated build of GB Studio, go into assets\engine\src\core of that project's directory, and copy the file `core.c`. Next, go into `plugins\RenderProjectilesAboveActors\engine\src\core`, delete the old `core.c` file, and paste the new one. Open the new `core.c` file, and search for `projectiles_update();`, which should be placed under `actors_update();`. Copy the line that has `projectiles_update();` and make it switch places with `actors_update();`. The final product should look like this:

                projectiles_update();                                   // update and render projectiles
                actors_update();

Save the `core.c` file, then open the file `engine.json`, present in `plugins\RenderProjectilesAboveActors\engine`, and update the version text. Delete the directory `assets\engine` if there is no more need for engine edits.

## Credits

Programmed by Mico27.

Plugin created and uploaded by KirbyKing186.
