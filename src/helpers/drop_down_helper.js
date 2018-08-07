const DropDownHelper = {

  createOptions: function(selectTagObject, options, displayAttribute, identifier=null) {
    if(identifier === null){

      console.dir(options);
      console.log('run');
      // console.dir(selectTagObject);
      // console.dir(displayAttribute);


      options.forEach((option, index) => {
        const selector = document.createElement(`option`);
        selector.textContent = option[displayAttribute];
        selector.value = index;
        selectTagObject.appendChild(selector);
      });
    }else {
      options.forEach(option => {
        const selector = document.createElement(`option`);
        selector.textContent = option[displayAttribute];
        selector.value = option[identifier];
        selectTagObject.appendChild(selector);
      });
    }
  }



};

module.exports = DropDownHelper;
