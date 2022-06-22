export type currentUserType = {
  id: number;
  name: string;
  email: string;
  address: addressType;
  phone: string;
  website: string;
  company: companyType;
  userPosts: postsType[];
};

type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

type companyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type postsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ActionType<T = number> = {
  type: string;
  payload: T;
};
