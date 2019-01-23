(function () {
    console.log('start permission request...');
    var result = window.safari.pushNotification.permission(
        'web.denyhf.github.io'
    );
})();