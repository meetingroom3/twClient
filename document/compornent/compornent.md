----------
#### **message**

##### **種別**
>compornent

##### **目的**
>エラーメッセージ等の画面表示メッセージを一元管理する

##### **概要**
>angular constantよりmessageを取得して、表示する

##### **イベント**
>なし

----------
#### **login**

##### **種別**
>compornent

##### **目的**
>ログインのための画面表示

##### **概要**
>ログインパーツを表示

##### **イベント**
> - click() ※sign with twitter
oauth.io認証を行う

----------
#### **oauthService**

##### **種別**
>factory

##### **目的**
>twitter oauth認証

##### **概要**
>外部サービスのoauth.ioのoauth認証をコールする

##### **Publicインターフェース**
 > - execute(oauthIoServiceId: string)
oauth認証を実施する

----------
#### **userService**

##### **種別**
> factory

##### **目的**
> ユーザ情報を管理する

##### **概要**
> ユーザ情報を管理する

##### **Publicインターフェース**
> - getUser():Userオブジェクト
ユーザ情報を取得
> - setUser(Userオブジェクト)
ユーザ情報を設定

----------

> Written with [StackEdit](https://stackedit.io/).
