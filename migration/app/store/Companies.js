Ext.define('Migration.store.Companies', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.companies',
    requires: ['Migration.model.Company'],
    model: 'Migration.model.Company'
});