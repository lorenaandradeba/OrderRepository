import Address from "./address";

export default class Customer{
//DTO - Data Transfer Object -> entidade anemica e náo tem regras de negócio
// Entity - Dominio - Complexidade de negócio
// -Customer.ts (regra de negócio)
// Infra - Mundo externo/ Armazenamento de dados
// -Entity/Model
// -customer.ts (get set)
    // _id: string;
    // _name: string;
    // _address: string;

    // constructor(id: string, name: string, address: string){
    //     this._id = id;
    //     this._name = name;
    //     this._address = address;
    // }
    // get id(): string {
    //     return this._id;
    // }
    // get name(): string {
    //     return this._name;
    // }
    // get address(): string {
    //     return this._address;
    // }
    
    // set name(name: string) {
    //      this._name=name;
    // }
    // set address(address: string) {
    //     this._address=address;
    // }
   private _id: string;
   private _name: string;
   private  _address!: Address;
   private  _active: boolean = false;
   private _rewardPoints: number = 0;

    constructor(id: string, name: string){
        this._id = id;
        this._name = name;
        this.validate();
    }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  addRewardPoints(points: number){
    this._rewardPoints += points
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  get Address(): Address {
    return this._address;
  }
  
  changeAddress(address: Address) {
    this._address = address;
  }

  isActive(): boolean {
    return this._active;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }
}