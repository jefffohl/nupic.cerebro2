datGuiUtils = {
  blockEvent : function(event) {
    event.stopPropagation();
  }
};

// extend dat.gui controllers. because of this, make sure that this file is loaded AFTER dat.gui!

Object.defineProperty(dat.controllers.FunctionController.prototype, "disabled", {
  get: function() {
    return this.domElement.hasAttribute("disabled");
  },
  set: function(value) {
    if (value) {
      this.domElement.setAttribute("disabled", "disabled");
      this.domElement.addEventListener("click", datGuiUtils.blockEvent, true);
    }
    else {
      this.domElement.removeAttribute("disabled");
      this.domElement.removeEventListener("click", datGuiUtils.blockEvent, true);
    }
  },
  enumerable: true
});