export class Collges {
  public collegId:number;
  public engName:string;
  public hebName:string;
  public headline:string;
  public logo:string;
  public address:string;
  public tuitionFee:string;
  public dorms:string;
  public tel:string;
  public openday:string;
  public description:string;
  public requirements:string;
  public specialization:string;
  public reqUrl:string;

  constructor(collegId: number,engName:string,hebName:string,headline:string,logo:string,address:string,tuitionFee:string,dorms:string,tel:string,openday:string,
      description:string,requirements:string,specialization:string,reqUrl:string){
    this.collegId = collegId;
    this.engName=engName;
    this.hebName=hebName;
    this.headline=headline;
    this.logo=logo;
    this.address=address;
    this.tuitionFee=tuitionFee;
    this.dorms=dorms;
    this.tel=tel;
    this.openday=openday;
    this.description=description;
    this.requirements=requirements;
    this.specialization=specialization;
    this.reqUrl=reqUrl;
  }
}
