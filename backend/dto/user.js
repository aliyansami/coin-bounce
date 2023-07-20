//DTOs are used to filter the information that is to be returened by the databse(right now thru insomnia)
class UserDTO{
    constructor(user){
        this._id=user.id;
        this.username=user.username;
        this.name=user.name;
    }
}

module.exports=UserDTO;