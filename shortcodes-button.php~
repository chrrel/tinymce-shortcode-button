<?php

function shortcode_add_mce_button()
{
	if ( !current_user_can( 'edit_posts' ) && !current_user_can( 'edit_pages' ) )	// check user permissions
	{
		return;
	}

	if ( 'true' == get_user_option( 'rich_editing' ) ) 	// WYSIWYG enabled?
	{
		add_filter( 'mce_external_plugins', 'shortcode_add_tinymce_plugin' );
		add_filter( 'mce_buttons', 'shortcode_register_mce_button' );
	}
}
add_action('admin_head', 'shortcode_add_mce_button');

function shortcode_add_tinymce_plugin( $plugin_array ) // script for the new button
{
	$plugin_array['shortcode_mce_button'] =  get_stylesheet_directory_uri() .'/js/mce-button.js';
	return $plugin_array;
}

function shortcode_register_mce_button( $buttons ) // register the new button
{
	array_push( $buttons, 'shortcode_mce_button' );
	return $buttons;
}

/* Functions taken from AJ Clarke: http://www.wpexplorer.com/wordpress-tinymce-tweaks/ */
?>
