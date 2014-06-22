<?php
// Hooks your functions into the correct filters
function shortcode_add_mce_button()
{
	// check user permissions
	if ( !current_user_can( 'edit_posts' ) && !current_user_can( 'edit_pages' ) )
	{
		return;
	}
	// check if WYSIWYG is enabled
	if ( 'true' == get_user_option( 'rich_editing' ) )
	{
		add_filter( 'mce_external_plugins', 'shortcode_add_tinymce_plugin' );
		add_filter( 'mce_buttons', 'shortcode_register_mce_button' );
	}
}

add_action('admin_head', 'shortcode_add_mce_button');

// Declare script for new button
function shortcode_add_tinymce_plugin( $plugin_array )
{
	$plugin_array['shortcode_mce_button'] =  get_stylesheet_directory_uri() .'/js/mce-button.js';
	return $plugin_array;
}

// Register new button in the editor
function shortcode_register_mce_button( $buttons )
{
	array_push( $buttons, 'shortcode_mce_button' );
	return $buttons;
}

/* Functions taken from AJ Clarke: http://www.wpexplorer.com/wordpress-tinymce-tweaks/ */
?>
