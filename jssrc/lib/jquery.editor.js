(function($) {
    jQuery.fn.editor = function () {
        var sSelector = this.selector;
        jQuery("body").on("click", sSelector, function onEditableClick() {
            var oEditable = jQuery(this);
            var sId = this.id;
            var sOld = jQuery(this).html();

            // adding new buttons to wikified html
            jQuery(this).html('<textarea id="editText">' + toMarkdown(sOld) +
                '</textarea><input id="updatebuttonid" type="button" value="Update" /><input id="cancelbuttonid" type="button" value="Cancel" />');
            jQuery("#editText").autoGrow();
            jQuery("#editText").focus();

            // turn editing of other fields off
            jQuery("body").off("click", sSelector, onEditableClick);
            jQuery(sSelector).unbind("click");
            jQuery("#updatebuttonid").click(function () {
                var oButton = jQuery(this);

                // get text out of text area
                var sText = jQuery("#editText").val();

                // saving string
                jQuery("#" + sId).html("<img src=\"images/turningArrow.gif\" />");
                var oData = {
                    sValue: sText
                };
                jQuery.ajax({
                    data: oData,
                    url: 'ToMd/' + sId,
                    type: 'POST'
                }).done(function(sHtml){
                    jQuery("#" + sId).html(sHtml);
                }).fail(function(xhr){
                    oEditable.html(sOld);
                    jQuery("body").on("click", sSelector, onEditableClick);
                    alert("updating failed return code: " + xhr.status + " response: " +xhr.responseText);
                    console.log(xhr.status, xhr.responseText);
                });

                // turn editing back on
                jQuery("body").on("click", sSelector, onEditableClick);
                return false;
            });
            jQuery("#cancelbuttonid").click(function () {
                // restoring contents of div and turn editing back on
                oEditable.html(sOld);
                jQuery("body").on("click", sSelector, onEditableClick);
                return false;
            });
        });
    }
}(jQuery));
