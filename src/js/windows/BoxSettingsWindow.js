class BoxSettingsWindow {
  createWindow() {
    this.boxSettingsWindow = WindowFactory.createWindow({
      width: 320,
      text: "Configuracion de cajas"
    });

    let controls = [{
        name: 'bonusBox',
        labelText: 'Cajas de bono',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.bonusBox = this.checked;
        }
      },
      {
        name: 'materials',
        labelText: 'Materiales',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.materials = this.checked;
        }
      },
      {
        name: 'cargoBox',
        labelText: 'Cajas de carga',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.cargoBox = this.checked;
        }
      },
      {
        name: 'greenOrGoldBooty',
        labelText: 'Verde | Dorado Cofres',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.greenOrGoldBooty = this.checked;
        }
      },
      {
        name: 'redBooty',
        labelText: 'Cofres rojos',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.redBooty = this.checked;
        }
      },
      {
        name: 'blueBooty',
        labelText: 'Cofres azules',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.blueBooty = this.checked;
        }
      },
      {
        name: 'masqueBooty',
        labelText: 'Cofres apocalipsis',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.masqueBooty = this.checked;
        }
      }
    ]

    controls.forEach((control) => {
      this[control.name] = ControlFactory.createControl(control);
    });
  }
}