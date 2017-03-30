export class User {
  id: number;
  username: string;

  static parse(data){
    let user = new User();
    user.id = data._id;
    user.username = data.username;
    return user;
  }

}
