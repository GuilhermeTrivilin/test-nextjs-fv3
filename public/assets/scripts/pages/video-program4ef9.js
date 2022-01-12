(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const gAnalytics = require('./modules/gAnalytics');

(function(gAnalytics){

	$('.share-buttons-card-button').click(function (event) {
		$(event.target).closest('.share-buttons-card').toggleClass('open')
	});

	$('a.save-article-button').click(function (event) {
		$(event.target).closest(this).toggleClass('saved')
	});

	$(document).on('click', '.button-more-click', function (event) {
		let $cardThemeEl = $(event.target).closest('.card-theme');
		if ( $cardThemeEl.hasClass('open-more') ) {
            $cardThemeEl.removeClass('open-more');
            gAnalytics.sendEvent('card-actions', 'click', 'close-card');
		} else {
            $cardThemeEl.addClass('open-more');
            gAnalytics.sendEvent('card-actions', 'click', 'open-card');
		}
	});

	$('.itens-more-card > a').on('click', function () {
		let dataShare = $(this).data('share');
        gAnalytics.sendEvent('card-share', 'click', dataShare);
    });

	$('.button-select-editory').click(function () {
		$('.indicators').toggleClass('open');
	});
})(gAnalytics);
},{"./modules/gAnalytics":6}],2:[function(require,module,exports){
require('./modules/r7Bar');
require('./modules/facebook');
require('../partners/_pagefair');

},{"../partners/_pagefair":15,"./modules/facebook":5,"./modules/r7Bar":8}],3:[function(require,module,exports){
require('./modules/searchBox');
require('./modules/autoHideStickyHeader');

const screenSizeHelper = require('./modules/screenSizeHelper');
const gAnalytics = require('./modules/gAnalytics');
const menuHover = require('./modules/menuHover');

(function (screenSizeHelper, gAnalytics) {

    const $body = $('body');
    const $header = $('header');

    gAnalytics.watch($('.fv-header-top'));
    gAnalytics.watch($('.fv-header-nav'));
    gAnalytics.watch($('.sticky-menu'));
    gAnalytics.watch($('.menu-hover'));

    // Lazyloading das imagens
    $('img.lazy').lazyload({
        threshold : 200
    });

    /**
     * Menu Principal
     */
     $('.menu-button-top').click(function () {
         const $reference = $('.fv-header-top');
         menuHover.toggle($reference);
     });

     $('.close-hover-menu').on('click', function () {
         menuHover.close();
     });

     $('.menu-button-sticky').click(function () {
         const $reference = $('.sticky-menu');
         menuHover.toggle($reference);
     });


    /**
     * Sticky Menu
     */
     if ( !screenSizeHelper.isMobile ) {
         updateStickyMenu($header);
         $(document).on('scroll', () => updateStickyMenu($header));
     }

     function updateStickyMenu($header) {
         const distance = $header.offset().top + $header.outerHeight();

         if( $(document).scrollTop() > distance )  {
             $header.find('.sticky-menu').addClass("fixed");
         } else {
             $header.find('.sticky-menu').removeClass("fixed");
         }
     }

    /**
     * Header Nav
     */
     const $fvHeaderNav = $('.fv-header-nav');

     if ( screenSizeHelper.isSmallerThanOrEqualTo('tablet-landscape') ) {

         $fvHeaderNav.find('.toggle-submenu').on('click', function () {
             const submenuId = $(this).data('submenu-id');

             $fvHeaderNav.find('.submenu-nav').not('#' + submenuId).removeClass('active');
             $fvHeaderNav.find('.toggle-submenu').not(this).removeClass('active');
             $(this).toggleClass('active');
             $('#' + submenuId).toggleClass('active');
         });

        // Closes submenu-nav on outside click
        $body.on('click', function(event){
            const $target = $(event.target);
            const $toggleSubmenuButton = $fvHeaderNav.find('.toggle-submenu');
            const $submenuNav = $fvHeaderNav.find('.submenu-nav');

            if(!$toggleSubmenuButton.is($target) && !$.contains($toggleSubmenuButton, $target)){
                $submenuNav.removeClass('active');
                $toggleSubmenuButton.removeClass('active');
            }
        });

        $('.toggle-submenu-blogs').click(function(event) {
            $('#blogs-menu-box, .toggle-submenu-blogs').toggleClass('active');
            $('body').toggleClass('noscroll');
        });

        $('#blogs-menu-box .close-hover-menu, .toggle-submenu').click(function(event) {
            $('.toggle-submenu-blogs, #blogs-menu-box').removeClass('active');
            $('body').removeClass('noscroll');
        });

    }

    else {

        $('.line-menu__submenu > li').hover(function() {
            if ($(this).hasClass('geral')) {
                $(this).addClass('ativo');
                console.log('tem classe geral')
            }
            else {
                $('.line-menu__submenu > li').removeClass('ativo');
                console.log('removeu classe geral')
            }
        });
    }


}(screenSizeHelper, gAnalytics));
},{"./modules/autoHideStickyHeader":4,"./modules/gAnalytics":6,"./modules/menuHover":7,"./modules/screenSizeHelper":9,"./modules/searchBox":10}],4:[function(require,module,exports){
const screenSizeHelper = require('./screenSizeHelper');
/**
 * Módulo de implementação da funcionalidade de ocultação do menu (mobile) no scroll down, e exibição no scroll up
 *
 * Baseado em https://osvaldas.info/auto-hide-sticky-header
 */
module.exports = (function (screenSizeHelper) {

    const $element = $('header .fv-header-top');
    const $window = $(window);
    const $header = $('header.topo');

    if( !screenSizeHelper.isMobile ) return;
    if( !$element.length ) return;

    const classes = {
        fixed: 'auto-hide-sticky-header--fixed',
        visible: 'auto-hide-sticky-header--visible',
        animating: 'auto-hide-sticky-header--animating'
    };

    const offsetTop = $header.offset().top;
    const headerSize = $header.outerHeight() + offsetTop;

    let wScrollCurrent	= 0;
    let wScrollBefore	= 0;
    let wScrollDiff		= 0;
    let deadZone        = 50;
    let scrollDirectionBefore = null;
    let changeDirDelta  = 0;
    let wScrollOnChangeDir = null;

    $window.on( 'scroll', function() {
        wScrollCurrent	= $window.scrollTop();
        wScrollDiff		= wScrollBefore - wScrollCurrent;
        changeDirDelta  = Math.abs(wScrollOnChangeDir - wScrollCurrent);

        if( wScrollDiff > 0 ) { // scrolled up; element slides in
            const scrollDirection = 'up';

            if (wScrollCurrent < headerSize) {
                stopAnimation();
            }

            if (wScrollCurrent < offsetTop) {
                unsetFixed();
                unsetVisible();
            } else if (wScrollCurrent > headerSize) {
                setFixed();
            }

            if (scrollDirectionBefore !== scrollDirection) {
                wScrollOnChangeDir = wScrollCurrent;
            } else if (changeDirDelta > deadZone && wScrollCurrent > headerSize && isFixed() && !isVisible()) {
                setVisible(true);
            }
            scrollDirectionBefore = scrollDirection;

        } else if( wScrollDiff < 0 ) { // scrolled down
            const scrollDirection = 'down';

            if (scrollDirectionBefore !== scrollDirection) {
                wScrollOnChangeDir = wScrollCurrent;
            } else if (changeDirDelta > deadZone && isFixed() && isVisible()) {
                unsetVisible(true);
            }
            scrollDirectionBefore = scrollDirection;

        }

        wScrollBefore = wScrollCurrent;
    });

    function setFixed(animate = false) {
        $element.addClass(classes.fixed);
        if (animate) animateTransition();
    }

    function unsetFixed(animate = false) {
        $element.removeClass(classes.fixed);
        if (animate) animateTransition();
    }

    function setVisible(animate = false) {
        $element.addClass(classes.visible);
        if (animate) animateTransition();
    }

    function unsetVisible(animate = false) {
        $element.removeClass(classes.visible);
        if (animate) animateTransition();
    }

    function animateTransition(duration = 300) {
        $element.addClass(classes.animating);
        setTimeout(function () {
            stopAnimation();
        }, duration);
    }

    function stopAnimation() {
        $element.removeClass(classes.animating);
    }

    function isFixed() {
        return $element.hasClass(classes.fixed);
    }

    function isVisible() {
        return $element.hasClass(classes.visible);
    }

}(screenSizeHelper));
},{"./screenSizeHelper":9}],5:[function(require,module,exports){
module.exports = (function () {

    window.fbAsyncInit = function() {
        FB.init({
            appId            : '838344326229439',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v2.9'
        });
        FB.AppEvents.logPageView();
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    return {
        share: function(url) {
            if((!FB) || (!url)) return;
            FB.ui({ method: 'share', display: 'popup', href: url }, function(response) {});
        }
    }

}());
},{}],6:[function(require,module,exports){
module.exports = (function () {

    return {
        watch: watch,
        sendEvent: sendEvent,
        sendPageview: sendPageview,
    };

    function watch($el) {
        const category = $el.data('ga-event-category');
        const $trackedItems = $el.find('.ga-event-track');

        if ( !_isSet(category) ) { console.error( 'Missing data-ga-event-category attribute for $el'); return; }

        $trackedItems.on('click', function () {
            const label = $(this).data('ga-event-label');
            if ( !_isSet(label) ) { console.error( 'Missing data-ga-event-label attribute on tracked item'); return; }
            sendEvent(category, 'click', label);
        })
    }

    function sendEvent(category, action, label, value = null) {
        if ( typeof ga === 'function' ) {
            ga('send', 'event', category, action, label, value, { nonInteraction: true });
        }
    }

    function sendPageview() {
        if ( typeof ga === 'function' ) {
            ga('send', 'pageview');
        }
    }

    function _isSet(value) {
        return typeof value !== 'undefined' && value.length > 0;
    }

}());
},{}],7:[function(require,module,exports){
const screenSizeHelper = require('./screenSizeHelper');
const viewportHelper = require('./viewportHelper');
/**
 * Módulo para controle do menu principal do site (menu-hover)
 */
module.exports = (function (viewportHelper) {

    const $el = $('#menu-hover');
    const $body = $('body');
    const $hamburger = $('.hamburger');
    const openClass = 'open-menu';

    let $submenuScroll;

    return {
        open: open,
        close: close,
        toggle: toggle,
    };

    function open($reference) {
        $el.addClass(openClass);
        $hamburger.addClass(openClass);
        $body.addClass('no-scroll');
        if (screenSizeHelper.isMobile) viewportHelper.disableScroll();

        _adjustMenuHeight($reference);
        _registerListeners();
    }

    function close() {
        $el.removeClass(openClass);
        $hamburger.removeClass(openClass);
        $body.removeClass('no-scroll');
        if (screenSizeHelper.isMobile) viewportHelper.enableScroll();

        _resetSubmenus();
    }

    function toggle($reference) {
        if ($el.hasClass(openClass)){
            close($reference);
        } else {
            open($reference);
        }
    }

    /**
     * Ativa o submenu corresponte a $row (atributo data-menu-slug)
     * @param row (A row de ativação do submenu)
     * @private
     */
    function _activateSubmenu(row) {
        const $row = $(row);
        $row.addClass('current');
        $el.addClass($row.data('background-color'));
        _changeSecondaryMenuColor($row);
    }

    /**
     * Desativa o submenu corresponte a $row (atributo data-menu-slug)
     * @param row (A row de ativação do submenu)
     * @private
     */
    function _deactivateSubmenu(row) {
        const $row = $(row);
        $row.removeClass('current');
        $el.removeClass($row.data('background-color'));
        _resetSubmenus();
    }

    /**
     * Atualiza o bg-color do secondary-menu correspondente a $row (atributo data-menu-slug)
     * @param $row (A row de ativação do submenu)
     * @private
     */
    function _changeSecondaryMenuColor($row) {
        const menuSlug = $row.data('menu-slug');
        $('#secondary-menu-' + menuSlug).addClass('active');
    }

    /**
     * Reseta a abertura dos submenus e destroi as instâncias do IScroll
     * @private
     */
    function _resetSubmenus() {
        $el.find('.menu-hover-item').removeClass('current');
        $el.find('.secondary-menu').removeClass('active');
        if ( $submenuScroll !== null && typeof $submenuScroll !== 'undefined' ) {
            $submenuScroll.destroy();
            $submenuScroll = null;
        }
    }

    /**
     * Corrige o tamanho (height) do menu-hover de acordo com o local que disparou a ação de abertura.
     *
     * Esta ação é necessária pois ao abrir o menu-hover a partir do topo principal a área util da tela (que será ocupada
     * pelo menu-hover) é menor que ao abrir-lo pelo menu sticky.
     *
     * @param $reference
     * @private
     */
    function _adjustMenuHeight($reference) {
        const scrollTop = $(window).scrollTop();
        const distance = ($reference.offset().top + $reference.height() - scrollTop);
        if ( screenSizeHelper.isGreaterThan('mobile') ){
            $el.find('.menu-hover-wrapper').css({ 'padding-top': distance + 'px' });
        }
    }

    function _registerListeners() {

        // No menu-hover desktop a abertura dos submenus é realizada pelo plugin jquery-menu-aim
        if( screenSizeHelper.isGreaterThan('mobile') ) {
            $el.find('.menu-hover-list').menuAim({
                activate: _activateSubmenu,
                deactivate: _deactivateSubmenu
            });
        }

        if ( screenSizeHelper.isMobile ) {
            $el.find('.menu-hover-item').on('click tap', function () {
                if ( !($(this).hasClass('menu-hover-entrevistas')) ) {
                    const menuSlug = $(this).data('menu-slug');
                    _resetSubmenus();
                    _changeSecondaryMenuColor($(this));
                    $submenuScroll = new IScroll('#secondary-menu-scroll-' + menuSlug, { mouseWheel: true, tap: true, click: true });
                }
            });
        }

        $el.find('.menu-mobile-return').on('click', function () {
            _resetSubmenus();
        });
    }

}(viewportHelper));
},{"./screenSizeHelper":9,"./viewportHelper":13}],8:[function(require,module,exports){
const gAnalytics = require('./gAnalytics');

module.exports = (function (gAnalytics) {

    const $r7 = $('#r7-header');

    $r7.find('.menu-R7 li.main-menu.mais-extra-small').on('click', function () {
        if ( $(this).closest('#r7-main-navigation').hasClass('active') ) {
            gAnalytics.sendEvent('r7', 'click', 'toggle-nav-menu');
        }
    });

    $r7.find('.sub_menu_responsible_extra_small').find('a').on('click', function () {
        gAnalytics.sendEvent('r7', 'click', $(this).html());
    });

    $r7.find('.r7-logo').on('click', function () {
        gAnalytics.sendEvent('r7', 'click', 'logo');
    });

}(gAnalytics));
},{"./gAnalytics":6}],9:[function(require,module,exports){
module.exports = (function () {

    const screenSizeTypes = [
        {
            rank: 1, slug: 'mobile', min: 0, max: 767
        }, {
            rank: 2, slug: 'tablet-portrait', min: 767, max: 991
        }, {
            rank: 3, slug: 'tablet-landscape', min: 991, max: 1199
        }, {
            rank: 4, slug: 'desktop', min: 1199, max: 10000
        }
    ];

    let screenWidth = $(window).width();

    function getSizeType() {
        return screenSizeTypes.find(t => screenWidth > t.min && screenWidth <= t.max);
    }

    function isSmallerThan(slug) {
        return getSizeType().rank < screenSizeTypes.find(t => t.slug === slug).rank;
    }

    function isSmallerThanOrEqualTo(slug) {
        return getSizeType().rank <= screenSizeTypes.find(t => t.slug === slug).rank;
    }

    function isGreaterThan(slug) {
        return getSizeType().rank > screenSizeTypes.find(t => t.slug === slug).rank;
    }

    function isGreaterThanOrEqualTo(slug) {
        return getSizeType().rank >= screenSizeTypes.find(t => t.slug === slug).rank;
    }

    function isMobile() {
        return isSmallerThanOrEqualTo('mobile');
    }

    return {
        isSmallerThan: isSmallerThan,
        isGreaterThan: isGreaterThan,
        isSmallerThanOrEqualTo: isSmallerThanOrEqualTo,
        isGreaterThanOrEqualTo: isGreaterThanOrEqualTo,
        sizeType: getSizeType(),
        isMobile: isMobile()
    }
}());
},{}],10:[function(require,module,exports){
const gAnalytics = require('./gAnalytics');

/**
 * Módulo para controle da barra de busca no topo do site
 */
module.exports = (function (gAnalytics) {

    const $body = $('body');
    const $searchBox = $('#search-box');

    if (!$searchBox.length) console.error('element #searchBox not found in DOM');

    $searchBox.find('.search-button-open').on('click', function () {
        if ( $searchBox.hasClass('open') ) {
            $(this).siblings('button').trigger('click');
        } else {
            $searchBox.addClass('open');
            $(this).siblings('input').focus();
        }
    });

    $searchBox.find('.search-button-close').on('click', function () {
        $searchBox.removeClass('open');
    });

    $searchBox.find('.form-search').submit(function(e) {
        gAnalytics.sendEvent('topo-fixo', 'submit', 'busca');
        _submit(e, $(this));
    });

    /**
     * Fecha a busca quando clicar fora
     */
    $body.on('click', function(event){
        if(!$.contains($searchBox[0], event.target)){
            $searchBox.removeClass('open');
        }
    });

    const cx = '012454540318874455602:0xx2cfdh8li';
    const gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);

    function _submit(e, $form) {
        e.preventDefault();
        const textoBusca = $form.find('.input-search').val();
        $('.google-search-bundle #gsc-i-id1').val(textoBusca);
        $('.google-search-bundle td.gsc-search-button').find('button').trigger('click');
    }

}(gAnalytics));
},{"./gAnalytics":6}],11:[function(require,module,exports){
module.exports = ($anchor) => {
    $(document).on("click", "a.page-scroll", function(e) {
        var o = $anchor,
            s = $(this);
        $("html, body").stop().animate({
            scrollTop: $(s.attr("href")).offset().top - ("sticky" == o.css("position") ? o.height() : 60)
        }, 1500, "easeInOutExpo"), e.preventDefault()
    })
};

},{}],12:[function(require,module,exports){
module.exports = (function () {
    return {
        share: function(url) {
            if(!url) return;
            const _url = "https://twitter.com/intent/tweet?url=" + url;

            const _width = '500';
            const _height = '400';
            // strResize = (blnResize ? 'yes' : 'no');
            const _resizable = 'yes';

            // Set title and open popup with focus on it
            const _title = 'Publicar no Twiiter';
            const strParam = 'width=' + _width + ',height=' + _height + ',resizable=' + _resizable;
            window.open(_url, _title, strParam).focus();
        }
    }
}());
},{}],13:[function(require,module,exports){
/**
 * Modulo para habilitar e desabilitar scroll no mobile (bloqueia auto-hide do chrome e safari)
 */
module.exports = (function () {

    let freezeViewport = function(e) {
        e.preventDefault();
    };

    let isPassive = function() {
        let supportsPassiveOption = false;
        try {
            addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassiveOption = true;
                }
            }));
        } catch(e) {}
        return supportsPassiveOption;
    };

    return {
        disableScroll: function () {
            document.addEventListener('touchmove', freezeViewport, isPassive() ? {
                capture: false,
                passive: false
            } : false);
        },
        enableScroll: function () {
            document.removeEventListener('touchmove', freezeViewport, isPassive() ? {
                capture: false,
                passive: false
            } : false);
        }
    }

}());
},{}],14:[function(require,module,exports){
require('../common/_global');
require('../common/_topo');
require('../common/_cards');

const smoothScrolling = require('../common/modules/smooth-scrolling');
const screenSizeHelper = require('../common/modules/screenSizeHelper');
const gAnalytics = require('../common/modules/gAnalytics');
const twitter = require('../common/modules/twitter');
const facebook = require('../common/modules/facebook');

$('[data-toggle="datepicker"]').each((index, item) => {
    let defaultDate = $(item).attr('data-default-date');
    let datepikerProps = {
        language: 'pt-BR',
        format: 'dd/mm/yyyy',
    };

    if(defaultDate){
        datepikerProps['date'] = Date.parse(defaultDate);
        datepikerProps['autoPick'] = true;
    }

    $(item).datepicker(datepikerProps).on('pick.datepicker', function (e) {
        $(".date-selected").val(formatDate(e.date));
        $(".date-selected").change();
        $('.date-box').addClass('filtered');
    });
});

var formatDate = (date) => {
    let day = date.getDate();
    let month = (date.getMonth() + 1);
    let year = date.getFullYear();

    day = (day < 10) ? `0${day}` : day;
    month = (month < 10) ? `0${month}` : month;
    return `${year}-${month}-${day}`;
};

// TODO: Refatorar este bloco para garantir que não tenha código repetido.
angular.module('FV', ['angularLazyImg'])
.filter('elapsedTime', function() {
    return function(input) {
        let days = (new Date(new Date() - new Date(input)).getDate()) - 1;
        if(days < 1) return 'Hoje';
        if(days > 1 && days < 2) return 'Ontem';
        return `${days} dias atrás`;
    };
})
.filter('duration', function() {
    return function(input) {
        let seconds = parseInt(input) || 0;
        let time = new Date(null);
        time.setSeconds(seconds);

        let hours_formatted = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
        let minutes_formatted = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
        let seconds_formatted = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();

        return seconds < 3600 ?
        `${minutes_formatted}:${seconds_formatted}` :
        `${hours_formatted}:${minutes_formatted}:${seconds_formatted}`;
    };
})
.config(['$compileProvider', function($compileProvider){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|whatsapp):/);
}])
.controller('body-controller', ['$scope', '$http', function($scope, $http){
    let locals = { loadLock: false, page: 1, platformSlug: null, programSlug: null, episodeId: null, itemCount: null, term: null, dateFilter: null},
    elements = { newsList: $('.more-news-list') };
    $scope.term = "";
    $scope.dateFilter = "";
    $scope.dateBox = "date-box";
    $scope.dateFiltered = "";

    $scope.searchEpisodeByDate = function () {
        locals.dateFilter = $scope.dateFilter;
        loadVideosFound();
    }

    $scope.searchEpisode = function (event) {
        if(!event || event.keyCode === 13) {
            locals.term = $scope.term;
            loadVideosFound();
        }
    };

    $scope.resetDate = function () {
      if($scope.dateFiltered == "") {
          $scope.dateFiltered = "filtered";
      } else {
          $('[data-toggle="datepicker"]').datepicker('reset');

          $(".date-selected").val("");
          $(".date-selected").change();

          $scope.dateFiltered = "";
      }
    }

    const loadVideosFound = () => {
        $scope.cardList = [];
        locals.page = 1;
        locals.loadLock = false;
        locals.itemCount = null;
        loadMoreVideos();
    };

    const loadMoreVideos = function() {
        if(!loadMoreAvailable()) return;
        locals.loadLock = true;
        const url = `/videos/${locals.platformSlug}/${locals.programSlug}/more-episodes.json`;

        let _filter = { page: locals.page, per_page: 8, term: locals.term, data: locals.dateFilter };

        $http.post(url, _filter).then(function(response){
            $scope.cardList = $scope.cardList.concat(response.data.items.map(episodeToCard));
            locals.page = locals.page + 1;
            locals.itemCount = parseInt(response.data.item_count);
            locals.loadLock = false;
            elements.newsList.show();
        }, function(error){
            locals.loadLock = false;
        });
    };

    const episodeToCard = (episode) => {
        let episodeDate = convertDate(episode.display_date);
        
        return {
            hat: episode.program.title,
            title: episode.title,
            link: `/videos/${locals.platformSlug}/${locals.programSlug}/${episode.suid}`,
            duration: episode.duration,
            displayed_at: episodeDate,
            thumbnail: episode.thumbnail,
        }
    };

    const convertDate = (date) => {
        let formattedDate = date.split("T").shift();
        let splitDate = formattedDate.split("-");
        return splitDate.reverse().join("/");
    }

    const loadMoreAvailable = () => {
        return !(locals.itemCount != null && $scope.cardList.length >= locals.itemCount);
    };

    $scope.cardList = [];

    $scope.init = function(initParams){
        locals.platformSlug = initParams.platformSlug;
        locals.programSlug = initParams.programSlug;
        loadMoreVideos();

        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() > $(document).height() - ($('footer').height() + 100)) {
                if (!locals.loadLock) {
                    loadMoreVideos();
                }
            }
        });
    };

}]);


$('.bar-link__button').on('click', () => {
    $('.bar-link__url').select();
    document.execCommand('copy');
});

$('.list-shared__item--facebook').click(function () {
    facebook.share($(this).data('permalink'));
});
$('.list-shared__item--twitter').click(function () {
    twitter.share($(this).data('permalink'));
});

$(function() {

    const $body = $('body');
    const $searchBox = $('#search-box-videos');

    $searchBox.find('.form-search').on('click', function () {
        if ( $searchBox.hasClass('open') ) {
            $(this).siblings('button').trigger('click');
        } else {
            $searchBox.addClass('open');
            $(this).siblings('input').focus();
        }
    });

    $searchBox.find('.search-button-close').on('click', function () {
        $searchBox.removeClass('open');
    });


    /**
     * Fecha a busca quando clicar fora
     */
     $body.on('click', function(event){
         if(!$.contains($searchBox[0], event.target)){
             $searchBox.removeClass('open');
         }
     });

 });



},{"../common/_cards":1,"../common/_global":2,"../common/_topo":3,"../common/modules/facebook":5,"../common/modules/gAnalytics":6,"../common/modules/screenSizeHelper":9,"../common/modules/smooth-scrolling":11,"../common/modules/twitter":12}],15:[function(require,module,exports){
(function() {
    function async_load(script_url){
        var protocol = ('https:' == document.location.protocol ? 'https://' : 'http://');
        var s = document.createElement('script'); s.src = protocol + script_url;
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    }
    bm_website_code = '2F621ABEEC444185';
    jQuery(document).ready(function(){async_load('asset.pagefair.com/measure.min.js')});
})();
},{}]},{},[14]);
