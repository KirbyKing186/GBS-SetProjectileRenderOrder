const id = "FO_EVENT_SET_RENDERING_ORDER";
const name = "Set Projectile Rendering Order";
const groups = ["Projectiles"];


const fields = [

  {
    key: "order",
    label: "Set Projectile Rendering Order",
    type: "select",
    options: [
        [0, "Actors on top"],
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
