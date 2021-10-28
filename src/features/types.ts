export interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
  }
  /*authSlice.ts*/
  export interface PROPS_AUTHEN {
    email: string;
    password: string;
  }
  
  export interface PROPS_PROFILE {
    id: number;
    nickName: string;
    img: File | null;
  }
  
  export interface PROPS_NICKNAME {
    nickName: string;
  }
  
  /*postSlice.ts*/
  export interface PROPS_NEWPOST {
    title: string;
    img: File | null;
  }
  //いいねボタンを押した際に更新する
  export interface PROPS_LIKED {
    id: number;
    title: string;
    current: number[];
    new: number;
  }
  //コメントを新規で作るときのデータ型
  //コメントの内容をテキストで保有しpostのIDをnumberで受ける。→どの投稿のコメントなのかを明確にする
  export interface PROPS_COMMENT {
    text: string;
    post: number;
  }
  //Post.tsx
  export interface PROPS_POST {
    postId: number;
    loginId: number;
    userPost: number;
    title: string;
    imageUrl: string;
    liked: number[];
  }