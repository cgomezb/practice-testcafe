import registerCatPage from './registerCat.page.js';

const urlPage = 'https://animal-shelter-ui.herokuapp.com/';
const catName = 'Soft Kitty';

fixture('Animal Shelter')
  .page(urlPage);

test('Register a cat', async () => {
  await registerCatPage.selectRegisterAnimal()
  await registerCatPage.typeCatName(catName);
  await registerCatPage.selectRace();
  await registerCatPage.selectGender();
  await registerCatPage.selectVaccineDistemper();
  await registerCatPage.selectTermsAndConditions();
  await registerCatPage.clickSubmit();
});
