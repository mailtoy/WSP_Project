import { Selector } from 'testcafe';

fixture `Heroku`
    .page `https://alesso.herokuapp.com`;

test('buyProduct-test', async t => {
    await t
        .click(Selector('a').withText('Log In'))
        .typeText(Selector('.form-control[name="email"]'), 'ps@gmail.com')
        .pressKey('tab')
        .typeText(Selector('.form-control[name="password"]'), '12345')
        .click(Selector('.clearfix').find('p').nth(2).find('input'))
        .click(Selector('a').withText('LADIES'))
        .click(Selector('.overlay').nth(1).find('.image2'))
        .click(Selector('.action').find('input'))
        .click(Selector('a').withText('My D'))
        .click(Selector('.checkout'))
        .typeText(Selector('#cname'), 'pun')
        .pressKey('tab')
        .typeText(Selector('#ccnum'), '424242424242424242')
        .typeText(Selector('#expmonth'), '6')
        .typeText(Selector('#expmonth'), '62')
        .pressKey('2')
        .typeText(Selector('#expyear'), '2020')
        .typeText(Selector('#expyear'), '23')
        .click(Selector('button').withText('Buy now'));
});