class AttackWindow {
  createWindow() {
    this.attackWindow = WindowFactory.createWindow({
      width: 320,
      text: "Detalles del ataque"
    });

    this.targetNameTxt = jQuery("<h4>");
    this.targetNameTxt.text("Nombre: -");

    this.hpTxt = jQuery("<h4>");
    this.hpTxt.text("Vida: -");

    this.shdTxt = jQuery("<h4>");
    this.shdTxt.text("Escudo: -");

    this.targetNameTxt.appendTo(this.attackWindow);
    this.hpTxt.appendTo(this.attackWindow);
    this.shdTxt.appendTo(this.attackWindow);
  }

  removeTarget() {
    this.targetName.text("Target: -");
    this.hpTxt.text("HP: -");
    this.shdTxt.text("SHD: -");
  }

  targetName(value) {
    this.targetNameTxt.text("Target: " + value);
  }

  hp(value) {
    this.hpTxt.text("HP: " + value);
  }

  shd(value) {
    this.shdTxt.text("SHD: " + value);
  }
}