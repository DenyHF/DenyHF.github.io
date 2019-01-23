(function () {
    console.log('start information permission...');
    var result = window.safari.pushNotification.permission(
        'web.denyhf.github.io'
    );
    console.log('current information',result);
    console.log('request push permission');
    window.safari.pushNotification.requestPermission(
        'https://denyhf.github.io',
        'web.denyhf.github.io',
        [],
        function(e){
            console.log(e)
        })
    console.log(window.safari.pushNotification.permission(
        'web.denyhf.github.io'
    ));
})();