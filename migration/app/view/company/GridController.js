Ext.define('Migration.view.company.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.company-grid',

    columnRenderer : function(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    },

    pctColumnRenderer : function (val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    },

    sellStock: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        alert("Sell " + rec.get('company'));
    },

    buyStock: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        alert("Buy " + rec.get('company'));
    }
    
});
