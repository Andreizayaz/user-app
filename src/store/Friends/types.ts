export type userType = {
  id: number;
  name: string;
  email: string;
  address: addressType;
  phone: string;
  website: string;
  company: companyType;
};

type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geoType;
};

type geoType = {
  lat: string;
  lng: string;
};

type companyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};
