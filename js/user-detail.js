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
    .fail((err) =>{
        console.error(err)
    })
})                              // we could've done let x = $.getJSON (".....")
                                //x. done()
                                                // but if we did this, we wouldn't know when the data came back, so we did it the other way to store the data
const render = (user) => {
    $("#xId").text(user.id);
    $("#xUsername").text(user.username);
    $("#xFirstname").text(user.firstname);
    $("#xLastname").text(user.lastname);
    $("#xPhone").text(user.phone ?? "(null)");
    $("#xEmail").text(user.email);
    $("#xReviewer").text(user.isReviewer ? "Yes" : "No");
    $("#xAdmin").text(user.isAdmin ? "Yes" : "No");
}