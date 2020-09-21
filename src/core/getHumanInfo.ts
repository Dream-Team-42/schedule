interface Contacts {
  email?: string;
  phone: string;
  telegram?: string;
}
interface Human {
  name: string;
  age: number;
  man: boolean;
  contacts: Contacts;
  [propName: string]: any;
}

interface Information {
  id: string;
  phone: string;
}

export default function getHumanInfo(config: Human): Information {
  return {
    id: config.name + config.age,
    phone: config.contacts.phone,
  };
}
