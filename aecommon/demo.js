/*
 * Namespace definition
*/
if ((typeof (EnterpriseForms) === 'undefined' || EnterpriseForms === null))
    var EnterpriseForms = {};

(function FormController(namespace, $) {

    this.FormController = {
        init: function () {
            this.appendTopNav();
            this.appendFooter();
            this.addFavIcon();
            this.grayOutCompletedFields();
            this.moveAsterisk();
            this.confirmEmail();
            // this.formatPhone();
            this.enableJQueryDatepicker();
        },

        appendTopNav: function () {
            const div = document.createElement("div");
            div.innerHTML = "<p><a href='https://www.pa.gov'>An Official <b>Pennsylvania</b> Government Website</a></p><div id='google_translate_element'></div>";
            div.className = "topnav";
            document.body.insertBefore(div, document.body.firstChild);
        },

        appendFooter: function () {
            const year = new Date().getFullYear();

            $('footer').first().replaceWith(
                '<footer><nav id="copyright" class="clearfix row container-fluid"><ul id="ctl00_ctl58_ulBottomStrip" class=" upper"><li><a target="_blank" href="http://www.pa.gov/accessibility-policy/">ACCESSIBILITY</a></li><li><a target="_blank" href="http://www.pa.gov/privacy-policy/">PRIVACY & DISCLAIMERS</a></li><li><a target="_blank" href="https://www.pa.gov/translation-disclaimer/">TRANSLATION DISCLAIMER</a></li><li><a target="_blank" href="http://www.pa.gov/security-policy/">SECURITY</a></li></ul><p class="small-12 medium-6 columns">Copyright ©' + year + ' Commonwealth of Pennsylvania. All rights reserved.</p></nav></footer>'
            );
        },

        addFavIcon: function () {
            $('head').append('<link href="../../img/favicon.png" rel="shortcut icon" type="image/png" />');
        },

        grayOutCompletedFields: function () {
            //text fields
            $('input').not(':button').on('blur', function () {
                if ($(this).val()) {
                    $(this).css('background-color', '#ebebeb');
                    $(this).css('border-color', '#dadada');
                }
                else {
                    $(this).css('background-color', '#fafafa');
                }
            });

            //dropwdowns
            $('select').on('blur', function () {
                if ($(this).val()) {
                    $(this).css('background-color', '#ebebeb');
                    $(this).css('border-color', '#dadada');
                }
                else {
                    $(this).css('background-color', '#fafafa');
                }
            });

            //text areas
            $('textarea').on('blur', function () {
                if ($(this).val()) {
                    $(this).css('background-color', '#ebebeb');
                    $(this).css('border-color', '#dadada');
                }
                else {
                    $(this).css('background-color', '#fafafa');
                }
            });
        },

        moveAsterisk: function () {
            //get all labels
            const $labels = $('label');

            //loop through labels to see if they are required and move the asterisk if they are
            $.each($labels, function () {
                if (this.textContent.substring(0, 1) == '*') {
                    this.innerHTML = this.textContent.substring(2) + this.textContent.substring(0, 1);
                }
            });
        },

        confirmEmail: function () {
            function showEmailError($divs) {
                var $emailSpans = $divs.find('span');
                $($emailSpans).first()
                    .children()
                    .first()
                    .text('Emails do not match');
                $($emailSpans).first()
                    .css({ 'display': 'block' });
            }

            function hideEmailError($divs) {
                var $emailSpans = $divs.find('span');
                $($emailSpans).first()
                    .css({ 'display': 'none' });
            }

            var $emailDivElement = $('label:contains("Email")').next();
            var $emailInputElements = $emailDivElement.children();
            var $emailInputElement = $emailInputElements.first();

            var $emailConfirmDivElement = $('label:contains("Confirm Email")').next();
            var $emailConfirmInputElements = $emailConfirmDivElement.children();
            var $emailConfirmInputElement = $emailConfirmInputElements.first();

            // first check to make sure there aren't email fields without confirm email fields, if so, return
            if (typeof ($emailConfirmInputElement.val()) === 'undefined') {
                return;
            }

            $($emailInputElement).on('keyup focusout mouseleave', function () {
                if ($emailInputElement.val() != $emailConfirmInputElement.val()) {
                    showEmailError($emailConfirmDivElement);
                    $('[type=button]').prop('disabled', true);
                } else {
                    hideEmailError($emailConfirmDivElement);
                    $('[type=button]').prop('disabled', false);
                }
            });

            $($emailConfirmInputElement).on('keyup focusout mouseleave', function () {
                if ($emailInputElement.val() != $emailConfirmInputElement.val()) {
                    showEmailError($emailConfirmDivElement);
                    $('[type=button]').prop('disabled', true);
                } else {
                    hideEmailError($emailConfirmDivElement);
                    $('[type=button]').prop('disabled', false);
                }
            });
        },

        formatPhone: function () {
            const $lblPhone = $("label:contains('Phone Number')");
            $lblPhone.append('<span class="phone-ex"> - XXX-XXX-XXXX</span>');
        },

        enableJQueryDatepicker: function () {
            $('.custom-datepicker input').datepicker();
        }

    } //end FormController

    namespace.FormController = this.FormController;

})(EnterpriseForms, jQuery);

$(function () {
    googleTranslateElementInit = function () {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
            'google_translate_element'
        );
    }
});