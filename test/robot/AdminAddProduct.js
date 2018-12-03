import { Selector } from 'testcafe';

fixture `Admin-Add-Product`
    .page `https://alesso.herokuapp.com/admin/add-product`;

test('addProduct-test', async t => {
    await t
        .typeText(Selector('.form-control[name="email"]'), 'ps@gmail.com')
        .pressKey('tab')
        .typeText(Selector('.form-control[name="password"]'), '12345')
        .click(Selector('.clearfix').find('p').nth(2).find('input'))
        .typeText(Selector('#title'), 'Velour dress')
        .typeText(Selector('#detail'), '999')
        .typeText(Selector('[name="detail"]'), 'test')
        .typeText(Selector('[name="description"]'), 'test')

        .typeText(Selector('[name="pics"].form-control').nth(0), 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_9c7d3057ebcb6a0f35a875ee4ae9e489e458b7c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D')
        
        .typeText(Selector('[name="pics"].form-control').nth(1), 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_43604d340cf482e0916a801c4a00d21aed50b5a7.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D')
        
        .typeText(Selector('[name="pics"].form-control').nth(2), 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_15718858f725d0a2d8464bfc198ee75aa9cc4f05.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D')
        
        .typeText(Selector('[name="pics"].form-control').nth(3), 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4b8f8abd57da3de81d5e6220ea0d4e5b2ef41a51.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D')
        
        .typeText(Selector('[name="pics"].form-control').nth(4), 'https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200702938%20003%2099%2006eb9c27f172d8a3242f1200b3c7d1310760c413.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D')
       
        .typeText(Selector('[name="size"].form-control').nth(0), 'XS')
        .typeText(Selector('[name="size"].form-control').nth(1), 'S')
        .typeText(Selector('[name="size"].form-control').nth(2), 'M')
        .typeText(Selector('[name="size"].form-control').nth(3), 'L')
        .typeText(Selector('[name="size"].form-control').nth(4), 'XL')
        .typeText(Selector('[name="color"].form-control').nth(0), 'Black')
        .typeText(Selector('[name="color"].form-control').nth(1), 'White')
        .typeText(Selector('[name="color"].form-control').nth(2), 'Red')
        .typeText(Selector('[name="color"].form-control').nth(3), 'Blue')
        .typeText(Selector('[name="color"].form-control').nth(4), 'Yellow')
        .click(Selector('#submitBth'));
});