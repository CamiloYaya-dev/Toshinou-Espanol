class AutolockWindow {
  createWindow() {
    this.autolockWindow = WindowFactory.createWindow({
      width: 320,
      text: "AutoBloquear"
    });

    let options = [{
        name: 'BloquearNpcs',
        labelText: 'AutoBloquear NPCs (Tecla: x)',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.lockNpcs = this.checked;
        }
      },
      {
        name: 'lockPlayers',
        labelText: 'AutoBloquear Jugadores (Tecla: z)',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.lockPlayers = this.checked;
        }
      },
      {
        name: 'AutoAtacar',
        labelText: 'Atacar Objetivo Bloqueado',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.autoAttack = this.checked;
        }
      },
    ];

    options.forEach((option) => {
      this[option.name] = ControlFactory.checkbox(option);
    });

  }
}