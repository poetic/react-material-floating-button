getChildren = function getChildren(children){
  var buttons = {
    main: null,
    children: []
  };

  Children.forEach(children, function(child){
    if (child.type === MainButton) {
      buttons.main = child;
    } else if (child.type === ChildButton) {
      buttons.children.push(child);
    }
  });

  return buttons;
}
