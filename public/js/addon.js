/* App frontend script */

let Buffer = require('buffer/').Buffer;

console.log('addon.js --->');
AP.request({
    url: '/rest/api/latest/project',
    success: function(response) {
        // convert the string response to JSON
        response = JSON.parse(response);

        // dump out the response to the console
        console.log(response);
    },
    error: function() {
        console.log(arguments);
    }
});

console.log('get user --->');

AP.user.getUser(function(user){
    console.log("user", user);
    console.log("user id", user.id);
    console.log("user key", user.key);
    console.log("user name", user.fullName);
});

console.log('timezone --->');

AP.user.getTimeZone(function(timezone){
    alert(timezone);
});

console.log('get user rest api -->');


fetch('/rest/api/3/user?accountId=5eb203a3833be70b7ef87609', {
    method: 'GET',
    headers: {
        'Authorization': `Basic ${Buffer.from(
            'email@example.com:<api_token>'
        ).toString('base64')}`,
        'Accept': 'application/json'
    }

})
    .then(response => {
        console.log(
            `Response: ${response.status} ${response.statusText}`
        );
        return response.text();
    })
    .then(text => console.log(text))
    .catch(err => console.error(err));

console.log('current user -->');
AP.user.getCurrentUser(function(user) {
    console.log("The Atlassian Account ID is", user.atlassianAccountId);
});
