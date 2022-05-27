$().ready(() => {
    console.log("jQuery is Ready")
});

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
    usersvc.create(user)
        .done((res) => {
            console.log(res);
            location.href = "user-list.html"
        } )
        .fail ((err) => {
            console.error(err);
        })
}