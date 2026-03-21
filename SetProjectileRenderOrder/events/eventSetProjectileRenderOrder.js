export const id = "EVENT_SET_PROJECTILE_RENDER_ORDER";
export const name = "Set Projectile Render Order";
export const groups = ["EVENT_GROUP_ACTOR"];
export const subGroups = {
  EVENT_GROUP_ACTOR: "EVENT_GROUP_PROPERTIES",
};

export const fields = [

  {
    key: "order",
    label: "Order (⚠️ Warning! This event is deprecated. Please replace this event with the 'Engine Field Update' event provided by GB Studio, and modify the 'Render Order' variable to your needs. ⚠️)",
    type: "select",
    options: [
        [0, "Actors Above Projectiles (Default)"],
        [1, "Projectiles Above Actors"]
      ],
    defaultValue: 0,
  }

];

export const compile = (input, helpers) => {
  throw new Error(`The "Set Projectile Render Order" event is deprecated. Please replace these events with the 'Engine Field Update' event provided by GB Studio, and modify the 'Render Order' variable to your needs.`);
};
