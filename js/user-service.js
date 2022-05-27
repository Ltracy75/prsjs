class UserService{
    constructor() {
        this.baseurl = "http://localhost:5220/api/users";
    }

    list(){
        return $.getJSON(`${this.baseurl}`);
        //function to use jquery to return users. these will all be async calls
        //when call is satisfied, the done method is called. We want the service to make the async call,
        //but we want our own js to be alerted when the data comes back. We don't care about date in the server
    }
    get(id)
    {
        return $.getJSON(`${this.baseurl}/${id}`)
    }
    create(user) {
        return $.ajax({
            method: "POST",
            url: `${this.baseurl}`,
            data: JSON.stringify(user),
            contentType: "application/json"
        })
    }
    change(user) {
    return $.ajax({
        method: "PUT",
        url: `${this.baseurl}/${user.id}`,
        data: JSON.stringify(user),
        contentType: "application/json"
        })
    }
    remove(id) {
        return $.ajax({
            method: "DELETE",
            url: `${this.baseurl}/${user.id}`,
            })
        }

}