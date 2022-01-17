interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const l: IKorean = {
  name: 'Jo',
  city: 'Gwangju',
};
