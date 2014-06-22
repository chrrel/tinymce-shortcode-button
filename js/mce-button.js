(function() {
	tinymce.PluginManager.add('shortcode_mce_button', function( editor, url ) {
		editor.addButton( 'shortcode_mce_button', {
			text: 'Shortcodes',
			icon: false,
			type: 'menubutton',
			menu: [
				{
					text: 'Accordion',
					onclick: function() {
						editor.insertContent('[accordion]<br> [acc title="Title 1"]...[/acc]<br> [acc title="Title 2"]...[/acc]<br>[/accordion]');
					}
			
				},
				{
					text: 'Alerts',
					menu: [
						{
							text: 'Notice',
							onclick: function() {
								editor.insertContent('[alert type="notice"]...[/alert]');
							}
						},
						{
							text: 'Warning',
							onclick: function() {
								editor.insertContent('[alert type="warning"]...[/alert]');
							}
						},
						{
							text: 'Success',
							onclick: function() {
								editor.insertContent('[alert type="success"]...[/alert]');
							}
						},
						{
							text: 'Error',
							onclick: function() {
								editor.insertContent('[alert type="error"]...[/alert]');
							}
						},
						{
							text: 'Info',
							onclick: function() {
								editor.insertContent('[alert type="info"]...[/alert]');
							}
						}
					]
				},
				{
					text: 'Button',
					menu: [
						{
							text: 'Size: small, medium, large',
							onclick: function() {
								editor.insertContent('[button link="#" size="medium"]...[/button]');
							}
						},
						{
							text: 'Style: default, light, dark',
							onclick: function() {
								editor.insertContent('[button link="#" style="default"]...[/button]');
							}
						}
					]
				},
				{
					text: 'Columns',
					menu: [
						{
							text: '2',
							onclick: function() {
								editor.insertContent('[column size="one-half"]...[/column]<br>[column size="one-half" last="true"]...[/column]');
							}
						},
						{
							text: '3',
							onclick: function() {
								editor.insertContent('[column size="one-third"]...[/column]<br>[column size="one-third"]...[/column]<br>[column size="one-third" last="true"]...[/column]');
							}
						},
						{
							text: '2/3',
							onclick: function() {
								editor.insertContent('[column size="two-third"]...[/column]<br>[column size="one-third" last="true"]...[/column]');
							}
						},
						{
							text: '4',
							onclick: function() {
								editor.insertContent('[column size="one-fourth"]...[/column]<br>[column size="one-fourth"]...[/column]<br>[column size="one-fourth"]...[/column]<br>[column size="one-fourth" last="true"]...[/column]');
							}
						},
						{
							text: '3/4',
							onclick: function() {
								editor.insertContent('[column size="three-fourth"]...[/column]<br>[column size="one-fourth" last="true"]...[/column]');
							}
						},
						{
							text: '5',
							onclick: function() {
								editor.insertContent('[column size="one-fifth"]...[/column]<br>[column size="one-fifth"]...[/column]<br>[column size="one-fifth"]...[/column]<br>[column size="one-fifth"]...[/column]<br>[column size="one-fifth" last="true"]...[/column]');
							}
						},
					]
				},
				{
					text: 'Google Maps',
					onclick: function() {
						editor.insertContent('[googlemap address="Berlin, Germany" fullwidth="true" height="300" zoom="10"]');
					}
			
				},
				{
					text: 'Tabs',
					onclick: function() {
						editor.insertContent('[tabs] <br>[tab title="Tab 1"]...[/tab]<br>[tab title="Tab 2"]...[/tab]<br>[/tabs]');
					}
			
				},
				{
					text: 'Toggles',
					onclick: function() {
						editor.insertContent('[toggle title="Toggle 1"]...[/toggle]');
					}
			
				},
				{
					text: 'Lists',
					menu: [
						{
							text: 'Arrow',
							onclick: function() {
								editor.insertContent('[list type="arrow"]<br>[li]item[/li]<br>[/list]');
							}
						},
						{
							text: 'Check',
							onclick: function() {
								editor.insertContent('[list type="check"]<br>[li]item[/li]<br>[/list]');
							}
						},
						{
							text: 'Plus',
							onclick: function() {
								editor.insertContent('[list type="plus"]<br>[li]item[/li]<br>[/list]');
							}
						},
						{
							text: 'Minus',
							onclick: function() {
								editor.insertContent('[list type="minus"]<br>[li]item[/li]<br>[/list]');
							}
						},
						{
							text: 'Cross',
							onclick: function() {
								editor.insertContent('[list type="cross"]<br>[li]item[/li]<br>[/list]');
							}
						}
					]
				},
				{
					text: 'Typography',
					menu: [
						{
							text: 'Dropcap',
							onclick: function() {
								editor.insertContent('[dropcap][/dropcap]');
							}
						},
						{
							text: 'Pullquote',
							onclick: function() {
								editor.insertContent('[pullquote]...[/pullquote]');
							}
						},
						{
							text: 'Highlight',
							onclick: function() {
								editor.insertContent('[highlight]...[/highlight]');
							}
						},
						{
							text: 'Divider',
							onclick: function() {
								editor.insertContent('[hr]');
							}
						}
					]
				},
			]
		});
	});
})();
