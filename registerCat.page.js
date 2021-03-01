import { t, Selector } from 'testcafe';

class RegisterCatPage {
  constructor() {
    this.registerAnimalOption    = Selector('main a');
    this.catNameField            = Selector('input[name="cat-name"]');
    this.raceSelectField         = Selector('#demo-simple-select');
    this.raceOptionField         = Selector('ul li[data-value="Criollo"]');
    this.genderField             = Selector('input[type="radio"][value="Male"]');
    this.vaccineDistemperField   = Selector('input[type="checkbox"][name="moquillo"]');
    this.vaccineNoneField        = Selector('input[type="checkbox"][name="ninguna"]');
    this.termsAndConditionsField = Selector('input[type="checkbox"]:not([name])');
    this.registerAction          = Selector('button[type="submit"]');
  }

  async selectRegisterAnimal() {
    await t
      .wait(3000)
      .click(this.registerAnimalOption);
  }

  async typeCatName(name) {
    await t.typeText(this.catNameField, name);
  }

  async selectRace() {
    await t
      .click(this.raceSelectField)
      .click(this.raceOptionField);
  }

  async selectGender() {
    await t.click(this.genderField);
  }

  async selectVaccineDistemper() {
    await t
      .click(this.vaccineDistemperField)
      .click(this.vaccineNoneField);
  }

  async selectTermsAndConditions() {
    await t.click(this.termsAndConditionsField);
  }

  async clickSubmit() {
    await t.click(this.registerAction);
  }
}

export default new RegisterCatPage();