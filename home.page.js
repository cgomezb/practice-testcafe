import { Selector } from 'testcafe';

export class HomePage {
  get registerAnimalOption() {
    return Selector('main a');
  }

  get listAnimalOption() {
    return Selector('main a:last-child');
  }
}
