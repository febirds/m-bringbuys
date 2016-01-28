;(function($) {
    'use strict';

    var initEditor = function(id, tid, sid, bid) {
        var editor = new wysihtml5.Editor(document.querySelector("#"+tid), {
            name: id,
            style: false,
            toolbar: bid,
            parserRules:  wysihtml5ParserRules,
            stylesheets: ['/public/wysihtml/css/main.css']
        });

        $("#"+bid).find('[data-behavior="showstyles"]').on('click', function(event) {
            event.stopPropagation();
            $("#"+bid+' [data-behavior="showstyles"] + .edy-tb-stylemenu').toggle();
            $("#"+bid).on('click', styleToolSideClick);
        });

        $("#"+bid).find('[data-behavior="showfontsizes"]').on('click', function(event) {
            event.stopPropagation();
            $("#"+bid+' [data-behavior="showfontsizes"] + .edy-tb-stylemenu').toggle();
            $("#"+bid).on('click', fontSizeToolSideClick);
        });

        $("#"+bid).find('[data-behavior="foreColor"]').on('click', function(event) {
            event.stopPropagation();
            $("#"+bid).find('[data-behavior="foreColor"] + .edy-tb-color-modal').toggle();
            $("#"+bid).on('click', colorToolSideClick);
        });

        $("#"+bid).find('[data-wysihtml5-command="foreColor"]').on('click', function(event) {
            event.stopPropagation();
            var colorValue = $(event.target).data('value');
            if (colorValue) {
                editor.composer.commands.exec("foreColorStyle", colorValue);
                setTimeout(function() {
                    setColorToolBackground();
                    setColorToolForeground();
                }, 0);
            }
        });

        var dialog = new wysihtml5.toolbar.Dialog(
            $("#"+bid+" [data-wysihtml5-command='createLink']"),
            $("#"+bid+" [data-wysihtml5-dialog='createLink']")
        );
        dialog.observe("cancel", function(attributes) {
            console.log("!", attributes);
        });

        $("#"+bid).find('[data-behavior="createLink"]').on('click', function(event) {
            $("#"+bid).on('click', linkToolSideClick);
        });

        $("#"+bid).find('[data-behavior="showSource"]').on('click', function(event) {
            var HTML = $.trim(editor.getValue());
            $("#"+sid + ' textarea').val(HTML);
            $("#"+id+', #'+sid).toggle();
        });

        $("#"+sid+' .editor-source-btns .cancel').on('click', function(event) {
            event.preventDefault();
            $("#"+id+', #'+sid).toggle();
        });

        $(sid+' .editor-source-btns .update').on('click', function(event) {
            event.preventDefault();
            var HTML = $(sid + ' textarea').val();
            editor.setValue(HTML);
            $("#"+id+', #'+sid).toggle();
        });

        var styleToolSideClick = function(event) {
            event.stopPropagation();
            var $target = $(event.target);
            if (!($("#"+bid).find('[data-behavior="showstyles"] + .edy-tb-stylemenu')[0].contains(event.target))) {
                $("#"+bid).find('[data-behavior="showstyles"] + .edy-tb-stylemenu').hide();
                $("#"+bid).off('click', styleToolSideClick);
            }
        };

        var fontSizeToolSideClick = function(event) {
            event.stopPropagation();
            var $target = $(event.target);
            if (!($("#"+bid).find('[data-behavior="showfontsizes"] + .edy-tb-stylemenu')[0].contains(event.target))) {
                $("#"+bid).find('[data-behavior="showfontsizes"] + .edy-tb-stylemenu').hide();
                $("#"+bid).off('click', fontSizeToolSideClick);
            }
        };

        var linkToolSideClick = function(event) {
            event.stopPropagation();
            var $target = $(event.target);
            if (!($("#"+bid).find('[data-wysihtml5-command="createLink"] + .edy-popover')[0].contains(event.target))) {
                $("#"+bid).find('[data-wysihtml5-command="createLink"] + .edy-popover').hide();
                $("#"+bid).off('click', linkToolSideClick);
            }
        };

        var colorToolSideClick = function(event) {
            event.stopPropagation();
            var $target = $(event.target);
            if (!($("#"+bid).find('[data-behavior="foreColor"] + .edy-tb-color-modal')[0].contains(event.target))) {
                $("#"+bid).find('[data-behavior="foreColor"] + .edy-tb-color-modal').hide();
                $("#"+bid).off('click', colorToolSideClick);
            }
        };

        var getSelectionFontSize = function() {
            var size = editor.composer.commands.stateValue('fontSizeStyle');

            if (!size) {
                var selectionNode = getSelectionNode();
                size = (selectionNode) ? $(selectionNode).css('font-size') : null;
            }

            if (size) {
                return parseFloat(size);
            }

            return null;
        };

        var getSelectionNode = function() {
            var selectionAncestorNode = editor.composer.selection.getSelectedNode();
            if (selectionAncestorNode && selectionAncestorNode.nodeType !== 1) {
                selectionAncestorNode = selectionAncestorNode.parentNode;
            }
            return selectionAncestorNode;
        };

        var restoreSelection = function(event) {
            if (editor.selBookmark) {
                editor.composer.selection.setBookmark(editor.selBookmark);
                return true;
            }
            return false;
        };

        var calculateColorLightness = function(rgbString) {
            if (rgbString) {
                var rgb = rgbString.match(/rgb\((\d+,\d+,\d+)\)/)[1].split(',');
                return Math.round(((+rgb[0]) * 0.2126 + (+rgb[1]) * 0.7152 + (+rgb[2]) * 0.0722) / 2.55) / 100;
            } else {
                return 1;
            }
        };

        var setColorToolBackground = function() {
            var foreColorStyle = editor.composer.commands.stateValue('foreColorStyle');
            $("#"+bid).find('[data-behavior="foreColor"] svg circle').css('fill', foreColorStyle || 'transparent');
        };

        var setColorToolForeground = function() {
            var foreColorStyle = editor.composer.commands.stateValue('foreColorStyle'),
                lightness = calculateColorLightness(foreColorStyle),
                color = (lightness < 0.6) ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.9)';

            $("#"+bid).find('[data-behavior="foreColor"] svg path').eq(0).css('color', color);
        };

        $("#"+tid).on('mouseup blur', function(event) {
            editor.selBookmark = editor.composer.selection.getBookmark();
            setTimeout(function() {
                setColorToolBackground();
                setColorToolForeground();
            }, 0);
        });
    };

    var initFrontPage = function() {
        // Add front page layout specific functions here.
        var getCurrentBox = function() {
            if (document.querySelector('.content-top').getBoundingClientRect().bottom - window.innerHeight > -20) {
                return 'top';
            } else if (document.querySelector('.content-middle').getBoundingClientRect().bottom - window.innerHeight > -20) {
                return 'middle';
            } else {
                return 'bottom';
            }
        };

        $('.scroller-arrow').on('click', function(event) {
            event.preventDefault();
            var $parent = $('.content-' + getCurrentBox()),
                $target = $parent.next('.content-box');

            $('body,html').animate({scrollTop: $target.offset().top + 'px'});
        });

        var latestKnownScrollY,
            startScroll,
            endScroll,
            scrolled,
            ticking = false;

        var getArrowState = function(scrollBottom) {
            return !(
                (document.querySelector('.content-top').getBoundingClientRect().bottom - window.innerHeight > -5 &&
                document.querySelector('.content-top #editor').getBoundingClientRect().bottom - window.innerHeight + 30 < 5) ||
                (document.querySelector('.content-middle').getBoundingClientRect().bottom - window.innerHeight > -5 &&
                document.querySelector('.content-middle .content-formatted').getBoundingClientRect().bottom - window.innerHeight + 30 < 5)
            );
        };

        var getHeaderClass = function() {
            if (document.querySelector('.content-bottom').getBoundingClientRect().top - $('.header').height()/2 > 0) {
                if (document.querySelector('.content-middle').getBoundingClientRect().top - $('.header').height()/2 > 0) {
                    return 'top';
                } else {
                    return 'middle';
                }
            } else {
                return 'bottom';
            }
        }

        var handler = function() {
            if (!startScroll) {
                startScroll = window.scrollY;
            } else {
                endScroll = window.scrollY;
                scrolled = endScroll - startScroll;

                var scrollBottom = endScroll + $(window).innerHeight();

                if (getArrowState(scrollBottom)) {
                    $('.scroller-arrow').fadeOut(300);
                } else {
                    $('.scroller-arrow').fadeIn(300);
                }

                $('.header').removeClass('top middle bottom').addClass(getHeaderClass());
                startScroll = 0;
            }
        };

        var update = function() {
            ticking = false;
            handler();
        };

        var requestTick = function() {
            if (!ticking) { requestAnimationFrame(update); }
            ticking = true;
        };

        var onScroll = function() {
            latestKnownScrollY = window.scrollY;
            requestTick();
        };

        $(window).on('scroll', onScroll);

        $("#"+bid).on('load', setTimeout(function() {
            $('.header').removeClass('top middle bottom').addClass(getHeaderClass());
        }, 0));
    };

    var initCommonPage = function() {
        // Add common page specific functions here.
    };

    // Enables the usage of the initiations outside this file.
    window.site = $.extend(window.site || {}, {
        initFrontPage: initFrontPage,
        initEditor: initEditor,
        initCommonPage: initCommonPage
    });
})(jQuery);
