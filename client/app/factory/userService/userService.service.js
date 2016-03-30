namespace twClientApp {

  'use strict';

  export class UserService {
    constructor() {
    }

    getUser() {
    // ローカルストレージから取得
    // ローカルストレージに存在しない場合は
    // Userをnewし、ローカルストレージに格納
    // ローカルストレージのUserを返却
    };

    setUser(User user) {
    //  ローカルストレージにUserオブジェクトの内容をセットする
    };
  }

  angular.module('twClientApp')
    .factory('userService', [
      ()=>{ return new UserController() }] );
}



