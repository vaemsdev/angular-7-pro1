export class Post {
    name : String;
    email  : String;
    avatar  : String;
    followers : String;
    following : String;

    setPost(data){
        this.name = data.first_name + ' ' + data.last_name;
        this.email = data.email;
        this.avatar = 'assets/img/' + data.avatar;
        this.followers = data.followers;
        this.following = data.following;
    }
}