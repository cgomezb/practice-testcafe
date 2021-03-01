import { Selector } from 'testcafe';

export class RegisterCatPage {
  get catNameField() {
    return Selector('input[name="cat-name"]');
  }

  get raceSelectField() {
    return Selector('#demo-simple-select');
  }

  get raceOptionField() {
    return Selector('ul li[data-value="Criollo"]');
  }

  get genderField() {
    return Selector('input[type="radio"][value="Male"]');
  }

  get vaccineDistemperField() {
    return Selector('input[type="checkbox"][name="moquillo"]');
  }

  get vaccineNoneField() {
    return Selector('input[type="checkbox"][name="ninguna"]');
  }

  get termsAndConditionsField() {
    return Selector('input[type="checkbox"]:not([name])');
  }

  get registerAction() {
    return Selector('button[type="submit"]');
  }
}
