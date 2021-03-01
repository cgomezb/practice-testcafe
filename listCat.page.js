import { Selector } from 'testcafe';

export class ListCatPage {
  get catNameField() {
    return Selector('input[name="cat-name"]');
  }
}
