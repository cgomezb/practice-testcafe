import {t, Selector } from 'testcafe';

export class HomePage {
  constructor() {
    this.registerAnimalOption = Selector('main a');
    this.listAnimalOption     = Selector('main a:last-child');  
  }

  async selectRegisterAnimalOption() {
    await t.click(this.registerAnimalOption);
  }

  async selectRegisterAnimalOption() {
    await t.click(this.listAnimalOption);
  }
}
