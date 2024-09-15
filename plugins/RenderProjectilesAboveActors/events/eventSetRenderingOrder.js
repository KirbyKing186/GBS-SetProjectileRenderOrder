const id = "FO_EVENT_SET_RENDERING_ORDER";
const name = "Set Projectile Rendering Order";
const groups = ["Projectiles"];


const fields = [

  {
    key: "order",
    label: "Set Hookshot State",
    type: "select",
    options: [
        [0, "Sprites on top"],
        [1, "Projectiles on top"]
      ],
    defaultValue: 0,
  }

];

const compile = (input, helpers) => {
  const { 
    engineFieldSetToValue,
  } = helpers;
  
  engineFieldSetToValue("rendering_order", input.order);

};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
};
