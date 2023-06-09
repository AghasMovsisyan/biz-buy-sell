var router = (function () {
    var $container;

    /**
     * @param  {string} route
     */
    function loadPage(route) {
        switch (route) {
            case '/':
                $container.load('../templates/index.html');
                break;
            case '#/buy':
                $container.load('../templates/buy.html');
                break;
            case '#/login':
                $container.load('../templates/auth/login.html');
                break;
            case '#/sign-up':
                $container.load('../templates/auth/sign-up.html');
                break;
            case '#/view':
                $container.load('../templates/view.html');
                break;
                
        }
    }
    
    /**
     * @param  {string} container
     */
    function init(container) {
        $container = $(container);

        if (window.location.hash) {
            loadPage(window.location.hash);
        } else {
            loadPage('#/');
        }

        $(window).on('hashchange', function () {
            loadPage(window.location.hash);
        });
    }

    return {
        init: init
    }
})();