const PubSub = require(`../helpers/pub_sub.js`)
const DropDownHelper = require(`../helpers/drop_down_helper.js`)

class FamilySelect {

  constructor(displayContainer) {
    this.displayContainer = displayContainer;
  };

  bindEvents(){
    PubSub.subscribe(`InstrumentFamilies:families-ready`, (evt) => {
      const families = evt.detail;
      DropDownHelper.createOptions(this.displayContainer, families, `name`);
    });

    this.displayContainer.addEventListener(`change`, (evt) => {
      const chosenFamilyIndex = evt.target.value;
      PubSub.publish(`FamilySelect:family-chosen`, chosenFamilyIndex);
    });

  };


};

module.exports = FamilySelect;
