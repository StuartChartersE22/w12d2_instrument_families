const PubSub = require(`../helpers/pub_sub.js`)

class FamilyDetails {

  constructor(displayContainer) {
    this.displayContainer = displayContainer;
  };

  bindEvents(){
    PubSub.subscribe(`InstrumentFamilies:selected-family`, (evt) => {
      const family = evt.detail;
      this.render(family);
    });
  };

  render(family) {
    this.emptyDetails();
    addFamilyName(family, this.displayContainer);
    addFamilyDescription(family, this.displayContainer);
    addInstrumentList(family, this.displayContainer);
  };

  emptyDetails(){
    this.displayContainer.innerHTML = ` `;
  };

};

module.exports = FamilyDetails;

function addFamilyName(family, container) {
  const name = document.createElement(`h2`);
  name.id = `family-name`;
  name.textContent = family.name;
  container.appendChild(name);
};

function addFamilyDescription(family, container) {
  const description = document.createElement(`p`);
  description.id = `family-description`;
  description.textContent = family.description;
  container.appendChild(description);
};

function addInstrumentList(family, container) {
  const instruments = document.createElement(`ul`);
  instruments.id = `insturment-list`;
  for (let instrument of family.instruments){
    const listItem = document.createElement(`li`);
    listItem.classList.add(`instrument`);
    listItem.textContent = instrument;
    instruments.appendChild(listItem);
  }
  container.appendChild(instruments);
};
