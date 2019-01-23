(function () {
    console.log('start information permission...');
    var result = window.safari.pushNotification.permission(
        'web.denyhf.github.io'
    );
    console.log('current information',result);
    console.log('request push permission');
    Notification.requestPermission(function (e) {
       console.log(e);
    });
})();