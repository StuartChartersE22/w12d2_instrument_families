const ListHelper = {
  create: function (options, listTagObject, itemFormatting) {
    for(let option of options){
      const listItem = document.createElement(`li`);
      listItem.appendChild(itemFormatting(option));
      listTagObject.appendChild(listItem);
    };
  }
};
