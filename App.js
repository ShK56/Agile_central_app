Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here
			this.iterationCombobox = this.add({
        xtype: 'rallyiterationcombobox'
    });
        //API Docs: https://help.rallydev.com/apps/2.1/doc/
    }
});
