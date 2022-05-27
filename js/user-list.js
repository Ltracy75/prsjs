$().ready(() => {
    console.log("jQuery is Ready")
    
    let usersvc = new UserService(); //created an istance of our user service

    usersvc.list()              //calling list function we just created
    .done((res) => {            //inside parens of done, we put an anonymous function (like the jquery ready function)
        console.debug(res);
        render(res);             // but this one has a param (where the system puts the data that returns from our call)
                                // once we are done rendering the list of users, this res variable will disappear
    })

})                              // we could've done let x = $.getJSON (".....")
                                //x. done()
                                                // but if we did this, we wouldn't know when the data came back, so we did it the other way to store the data
const render = (users) => {
    let tbody = $("#tbody");
    for(let user of users){
        let tr = $("<tr></tr>");
        tr.append($(`<td>${user.id}</td>`));
        tr.append($(`<td>${user.username}</td>`));
        tr.append($(`<td>${user.firstname}</td>`));
        tr.append($(`<td>${user.lastname}</td>`));
        tr.append($(`<td>${(user.isReviewer ? "Yes" : "No")}</td>`));
        tr.append($(`<td>${(user.isAdmin ? "Yes" : "No")}</td>`));
        
        let actions = $("<td></td>")
        let anchor1 = $(`<a href="user-detail.html?id=${user.id}">Detail</a>`)
        let anchor2 = $(`<a href="user-edit.html?id=${user.id}">Edit</a>`)
        actions.append(anchor1);
        actions.append($("<span> | <span>"));
        actions.append(anchor2)
        tr.append(actions);
        tbody.append(tr);
    }
}