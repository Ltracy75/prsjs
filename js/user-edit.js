$().ready(() => {

    let urlParms = parseUrl(document.URL)
    let userId = +urlParms.id;
        console.log("jQuery is Ready")
        
        let usersvc = new UserService(); //created an istance of our user service
    
        usersvc.get(userId)              //calling list function we just created
        .done((res) => {            //inside parens of done, we put an anonymous function (like the jquery ready function)
            console.debug(res);
            render(res);             // but this one has a param (where the system puts the data that returns from our call)
                                    // once we are done rendering the list of users, this res variable will disappear
        })

    })                              // we could've done let x = $.getJSON (".....")
                                    //x. done()
                                                    // but if we did this, we wouldn't know when the data came back, so we did it the other way to store the data
    const render = (user) => {
        $("#xId").val(user.id);
        $("#xUsername").val(user.username);
        $("#xFirstname").val(user.firstname);
        $("#xLastname").val(user.lastname);
        $("#xPhone").val(user.phone ?? "(null)");
        $("#xEmail").val(user.email);
        $("#xReviewer").prop('checked',user.isReviewer);
        $("#xAdmin").prop('checked', user.isAdmin);
    }

    const save = () => {
        let user = {
            id: +$("#xId").val(),
            username: $("#xUsername").val(),
            password: $("#xPassword").val(),
            firstname: $("#xFirstname").val(),
            lastname: $("#xLastname").val(),
            phone: $("#xPhone").val(),
            email: $("#xEmail").val(),
            isReviewer: $("#xReviewer").prop('checked'),
            isAdmin: $("#xAdmin").prop('checked')
        }
        console.debug(user);
        let usersvc = new UserService();
        usersvc.change(user)
            .done((res) => {
                console.log(res);
                location.href = "user-list.html"
            } )
            .fail ((err) => {
                console.error(err);
            })
    }