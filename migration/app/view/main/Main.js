
Ext.define("Migration.view.main.Main",{
    extend: "Ext.panel.Panel",

    requires: [
        "Migration.view.main.MainController",
        "Migration.view.main.MainModel",
        "Migration.view.company.Grid"
    ],

    controller: "main-main",
    viewModel: {
        type: "main-main"
    },

    items: [{
        xtype: 'companygrid'
    }]
});
