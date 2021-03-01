import { Selector } from 'testcafe';
import { HomePage } from './home.page.js';
import { RegisterCatPage } from './registerCat.page.js';
import { ListCatPage } from './listCat.page.js';

const urlPage = 'https://animal-shelter-ui.herokuapp.com/';
const catName = 'Soft Kitty';
const waitTimeLoadPage = 2000;

const homePage = new HomePage();
const { registerAnimalOption, listAnimalOption } = homePage;

const registerCatPage = new RegisterCatPage();
const {
  catNameField,
  raceSelectField,
  raceOptionField,
  genderField,
  vaccineDistemperField,
  vaccineNoneField,
  termsAndConditionsField,
  registerAction
} = registerCatPage;

const listCatPage = new ListCatPage();

fixture('Animal Shelter')
  .page(urlPage);

test('Register a cat', async t => {
  await t
    .wait(waitTimeLoadPage)  
    .click(registerAnimalOption)
    .typeText(catNameField, catName)
    .click(raceSelectField)
    .click(raceOptionField)
    .click(genderField)
    .click(vaccineDistemperField)
    .click(vaccineNoneField)
    .click(termsAndConditionsField)
    .click(registerAction)
    .wait(2000);
});

const lastRegisteredCat = Selector('.MuiTypography-root.MuiTypography-h4.MuiTypography-gutterBottom');

test('List a cat', async t => {
  await t
    .wait(waitTimeLoadPage)  
    .click(listAnimalOption)
    .wait(waitTimeLoadPage)
    .expect(lastRegisteredCat.textContent).eql('Bigotes');
});
