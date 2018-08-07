const InstrumentFamilies = require(`./models/instrument_families.js`);
const FamilySelect = require(`./views/family_select.js`);
const FamilyDetails = require(`./views/family_details.js`);

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const dropDown = document.querySelector(`select#instrument-families`)
  const familySelect = new FamilySelect(dropDown);
  familySelect.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

});
