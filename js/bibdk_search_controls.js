(function($) {

  Drupal.behaviors.bibdkSearchControlsValues = {
    attach: function(context, settings) {
      $('.bibdk-search-controls-form').change(function() {
        var value = "";
        var idHidden = $(this).attr('data');

        if ( selectValue = $(this).find(".form-type-select select").val() )  {
          value = selectValue;
        }

        if ( radiosValue = $(this).find(".form-type-radios input:checked").val() )  {
          value = radiosValue;
        }

        $(this).find(".form-type-checkboxes .form-item input:checked").each(function (i) {
          if ( $(this).val() ) {
            if ( value ) {
              value += "|";
            }
            value += $(this).val();
          }
        })

        $("#" + idHidden).val(value);

      });
    }
  };

} (jQuery));

