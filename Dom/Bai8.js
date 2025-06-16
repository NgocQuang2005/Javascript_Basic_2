function removecolor() {
  let colorSelect = document.getElementById("colorSelect");
  let indexSelected = colorSelect.options.selectedIndex;
  if (indexSelected !== -1) {
    colorSelect.remove(indexSelected);
  }
}
