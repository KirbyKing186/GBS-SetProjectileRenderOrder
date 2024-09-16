const id = "EVENT_SET_PROJECTILE_RENDER_ORDER";
const name = "Set Projectile Render Order";
const groups = ["EVENT_GROUP_ACTOR"];
const subGroups = {
  EVENT_GROUP_ACTOR: "EVENT_GROUP_PROPERTIES",
};


const fields = [

  {
    key: "order",
    label: "Order",
    type: "select",
    options: [
        [0, "Actors Above Projectiles (Default)"],
        [1, "Projectiles Above Actors"]
      ],
    defaultValue: 0,
  }

];

const compile = (input, helpers) => {
  const { 
    engineFieldSetToValue,
  } = helpers;
  
  engineFieldSetToValue("render_order", input.order);

};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
};
