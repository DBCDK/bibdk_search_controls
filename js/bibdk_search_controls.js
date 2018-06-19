(function($) {

  var BibdkSearchControls = {};

  BibdkSearchControls.setCheckboxes = function() {
    $('.bibdk-search-controls-form').change(function() {
      var value = "";
      var idHidden = $(this).attr('data-control-name');

      if (selectValue = $(this).find(".form-type-select select").val()) {
        value = selectValue;
      }

      if (radiosValue = $(this).find(".form-type-radios input:checked").val()) {
        value = radiosValue;
      }

      $(this).find(".form-type-checkboxes .form-item input:checked").each(function(i) {
        if($(this).val()) {
          if(value) {
            value += "|";
          }
          value += $(this).val();
        }
      });
      $("#" + idHidden).val(value);
    });
  };

  BibdkSearchControls.hideSearchControls = function(context) {
    if (Drupal.settings.ting_openformat == undefined) {
      $('.works-controls', context).css({
        display: 'none'
      });

      $('.panel-left', context).css({
        display: 'none'
      })
    }
  };

  BibdkSearchControls.toggleDropdown = function(context) {
    // Toggle dropdown menus
    $('.bibdk-search-controls-form .dropdown-toggle').once().click(function(e) {
      e.preventDefault();
      e.stopPropagation();

      $('.dropdown-toggle', context).not($(this)).removeClass('toggled');
      $('.dropdown-toggle', context).not($(this)).next().addClass('hidden');

      if (!$(this, context).hasClass('disabled')) {
        $(this, context).toggleClass('toggled');
        $(this, context).next().toggleClass('hidden');
      }
    });
  }

  Drupal.behaviors.bibdkSearchControlsValues = {
    attach: function(context, settings) {
      BibdkSearchControls.setCheckboxes();
      BibdkSearchControls.hideSearchControls(context);
      BibdkSearchControls.toggleDropdown(context);
    }
  };

}(jQuery));
