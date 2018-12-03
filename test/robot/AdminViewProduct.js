import { Selector } from 'testcafe';

fixture `adminProduct`
    .page `https://alesso.herokuapp.com/admin/product/1`;

test('productAdmin-test', async t => {
    await t
        .typeText(Selector('.form-control[name="email"]'), 'ps@gmail.com')
        .pressKey('tab')
        .typeText(Selector('.form-control[name="password"]'), '12345')
        .click(Selector('.clearfix').find('p').nth(2).find('input'))
        .click(Selector('td').withText('Edit').find('.btn.btn-info.btn-block'))
        .click(Selector('#price'))
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#price'), '1099')
        .click(Selector('#submitBth'))
        .click(Selector('td').withText('Edit').find('.btn.btn-success.btn-block'));
});