if ('safari' in window && 'pushNotification' in window.safari) {
    var permissionData = window.safari.pushNotification.permission('web.com.example.domain');
    $scope.checkRemotePermission(permissionData);
}else {
//FIREBASE HERE
}

$scope.checkRemotePermission = function (permissionData) {
    if (permissionData.permission === 'default') {
        // This is a new web service URL and its validity is unknown.
        window.safari.pushNotification.requestPermission(
            'https://awery.workreports.pro', // The web service URL.
            'web.pro.workreports.awery',     // The Website Push ID.
            {}, // Data that you choose to send to your server to help you identify the user.
            $scope.checkRemotePermission         // The callback function.
        );
    }
    else if (permissionData.permission === 'denied') {
        if($rootScope.log)
            console.war('User not allowed notifications');
    }
    else if (permissionData.permission === 'granted') {
        // The web service URL is a valid push provider, and the user said yes.
        // permissionData.deviceToken is now available to use.
        console.log(permissionData.deviceToken, 'YEAH!');
        $rootScope.sendTokenToServer(permissionData.deviceToken, 'safari');
    }
};