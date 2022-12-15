class User extends Account{
    constructor(id, name,document,email,password, userProfileImage){
        super(id, name, document,email,password);
        this.userProfileImage = userProfileImage;
    }
}