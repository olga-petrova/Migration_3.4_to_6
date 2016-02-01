
Ext.define("Migration.view.company.Grid",{
    extend: "Ext.grid.Panel",

    requires: [
        "Migration.view.company.GridController",
        "Migration.view.company.GridModel"
    ],

    xtype: 'companygrid',

    controller: "company-grid",
    viewModel: {
        type: "company-grid"
    },

    bind: {
        store: '{companies}'
    },

    columns: [
        {
            id       :'company',
            header   : 'Company',
            flex    : 1,
            sortable : true,
            dataIndex: 'company'
        },
        {
            header   : 'Price',
            width    : 75,
            sortable : true,
            renderer : Ext.util.Format.usMoney,
            dataIndex: 'price'
        },
        {
            header   : 'Change',
            width    : 75,
            sortable : true,
            renderer : 'columnRenderer',
            dataIndex: 'change'
        },
        {
            header   : '% Change',
            width    : 75,
            sortable : true,
            renderer : 'pctColumnRenderer',
            dataIndex: 'pctChange'
        },
        {
            header   : 'Last Updated',
            width    : 85,
            sortable : true,
            renderer : Ext.util.Format.dateRenderer('m/d/Y'),
            dataIndex: 'lastChange'
        },
        {
            xtype: 'actioncolumn',
            width: 50,
            items: [{
                iconCls: 'x-fa fa-minus',
                tooltip: 'Sell stock',
                handler: 'sellStock'
            }, {
                iconCls: 'x-fa fa-plus',
                handler: 'buyStock'
            }
            ]
        }
    ],

    stripeRows: true,
    height: 350,
    width: 600,
    title: 'Array Grid',
    stateful: true,
    stateId: 'grid'
});
