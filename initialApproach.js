import { Selector } from 'testcafe';

const urlPage = 'https://animal-shelter-ui.herokuapp.com/';
const catName = 'Soft Kitty';
const waitTimeLoadPage = 2000;

const registerAnimalOption = Selector('main a');
const catNameField = Selector('input[name="cat-name"]');
const raceSelectField = Selector('#demo-simple-select');
const raceOptionField = Selector('ul li[data-value="Criollo"]');
const genderField = Selector('input[type="radio"][value="Male"]');
const vaccineDistemperField = Selector('input[type="checkbox"][name="moquillo"]');
const vaccineNoneField = Selector('input[type="checkbox"][name="ninguna"]');
const termsAndConditionsField = Selector('input[type="checkbox"]:not([name])');
const registerAction = Selector('button[type="submit"]');

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
    //.click(registerAction())
    // .wait(50000);
});
