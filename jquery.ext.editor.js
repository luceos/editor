/**
 *	Hyn CMS
 * 
 * 		@copyright	Hyn
 * 		@license	CC-BY-NC 3
 * 
 */

// start open extension
(function( $ ){	
	// function to make generic paragraph fields editable
	// P, div, article perhaps
	
	var elementType		= null;
	var editorMenu		= null;
	var settings		= {};
	
	var editorMethods	= {
		construct:		function( options )
		{
			// default settings
			settings	= $.extend({
				'minlength':			false,		// minimum length
				'maxlength':			false,		// maximum length
				'required':			false,		// is required
				'modify':			true,		// can be modified - instead of only inserting?! [TODO: prove use]
				'insert':			false,		// must be inserted - instead of modifying
				'autoresize':			false,		// resize element automatically when content exceeds element height
				'entityClass':			null,		// entityClass must be set, won't work otherwise; if this is a child editable element, look up the parent
				'parentElement':		null,		// either parentElement or entityClass must be set for the entity to be saved, inserted
				'menuID':			"#HYN-editor-menu",	// the unique identifier for the menu
			} , options );
			// overruled by global settings
			// [TODO combine arrays]
			// overruled by data-* attributes
			// [TODO loop over settings array and check each data-?]
			
			editorMenu				= $(settings.menuID);
			
			// register click listener?!
			$(this).on( "click" );
		},
		clickListener:		function()
		{
			
		},
		editableParagraph:	function()
		{
		},
		showMenu:		function()
		{
			if( editorMenu.length && editorMenu.is(":hidden") )
			{
				editorMenu.show();
			}
		},
		hideMenu:		function()
		{
			if( editorMenu.length && editorMenu.is(":visible") )
			{
				editorMenu.hide();
			}
			
		}
	}
	$.fn.editor = function( method ) {
		if( editorMethods[ method ] ) {
			return timelineMethods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else {
			$.error( "Method for editor does not exist: " + method );
		}
	};
// start close extension
})( jQuery );