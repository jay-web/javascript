var myUser = (url) => {
    return new Promise((resolve, reject) => {
        var Users = [
            {
                '/users': {
                    'numberOfUsers': 2,
                    'profession': 'Developer'
                },
                '/users/2' : {
                    'id': 3,
                    'age': 31,
                    'name': 'jay',
                    'area': 'palam'
                },
                '/users/3' : {
                    'id': 4,
                    'age': '24',
                    'name':'Akash',
                    'area': 'Raj nagar'
                },
            }
        ];
        var data = Users[0][url];
        if(data){
            resolve({ status: 200, data: data});
        }else{
            reject();
        }
    });
}


myUser('/users').then((res) => {
    console.log(res);
    return res['data'].numberOfUsers;
}).then((res) => {
    console.log(res);
    return myUser(`/users/${res}`)
}).then((res) => {
    console.log(res);
    return myUser(`/users/${res['data'].id}`)
}).then((res) => {
    console.log(res);
})
.catch(() => {
    console.log("Failed");
})