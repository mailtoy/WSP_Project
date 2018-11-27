var Product = require('../models/product')

var mongoose = require('mongoose');
const CONNECTION_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/shopping"

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });

var products = [
    // ladies - dresses - short dresses
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Short Dresses",
        title: "Fitted dress",
        description: "Short, sleeveless dress in glittery jersey with a V-neck and narrow shoulder straps. Unlined.",
        detail: "88% polyamide, 7% elastane, 5% metallicised fibre. Machine wash at 30˚",
        price: "499",
        color: {
            "Red": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_0df9d6464a563c7527ad0d6baf1b181243770be3.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_3ae55126de760d70663f5644e316275191963540.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_22b0d07a8d01223fa27014e326d61940238eb417.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200673930%20003%2099%205a6eaab853682452b4f67a05d29b0e3bd88d32f7.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
            ],
            "Beige": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_fca7114bec8e5482c98bdda49559d4aae21a1ea7.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_3a5696b55451444bf4672009a265c8d3aa84e2b9.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_2dd6167151a14cb9d94fedaa478a713b314d07d7.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200673930%20007%2099%2021d065c4d4e6d8619ce1d72b3ad579ca40105db0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Short Dresses",
        title: "Dress with smocking",
        description: "Knee-length dress in an airy, patterned weave with a smocked stand-up collar and opening with covered buttons at the back of the neck. Long sleeves with smocking at the cuffs. Partly lined.",
        detail: "100% polyester. Machine wash at 30˚",
        price: "1399",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_948a4e6c319a3d047478f77274437b8efc44edfc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_146fea53997894879f009f28244093622ab923d0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_9bec1151352ff18c3e72fdb0bf3239c0fba1ff43.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200702650%20002%2099%20f2b456ce8ee2d882e716175965568992cd3cc967.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Short Dresses",
        title: "Crêpe dress",
        description: "Knee-length dress in a patterned crêpe weave with a wide, elasticated neckline and short, elasticated sleeves. Detachable tie belt at the waist and a seam with wide flounces at the hem. Unlined.",
        detail: "100% polyester. Machine wash at 30˚",
        price: "999",
        color: {
            "Yellow": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_1942afe679ea16f88752d41dd261d80b90852924.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_8f5a7b96def15a6b2988d7616f693a995353cdc8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a88275f60d90ed388b199c46fc367a8ae57fbc59.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200670943%20001%2099%20061b3e28b2d53dd802e6482c316bbd0906b50d4d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Beige": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_08595bf7348a4ca234ec2f30e9172c382d5cb02f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_7be4ba6aeee189c1d5dfa894b63ecd03e3714736.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_cda0894ba5479972266c6bdc5d934c609fd5d9eb.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200670943%20002%2099%20b5cfe18a7ce6f8055b6abec60db9586f286cdcef.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Short Dresses",
        title: "Slip dress",
        description: "Short, sleeveless dress in glittery jersey with a V-neck and narrow shoulder straps. Unlined.",
        detail: "88% polyamide, 7% elastane, 5% metallicised fibre. Machine wash at 30˚",
        price: "999",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_8b5c15509975c6fbda47e5c717b5adb063995935.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_ecd9c6bc35eab4b910e00d335fc9d7c004558b29.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_ff625af6167526f7b822fd403485adc8c7a77565.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200639046%20001%2099%208f28e80e1188e750af27978342329a560df20e6b.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Short Dresses",
        title: "Velour dress",
        description: "Short, fitted dress in velour with a small stand-up collar, concealed zip at the back and long sleeves.",
        detail: "91% polyester, 9% elastane. Machine wash at 30˚",
        price: "499",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_6b557ffb3d4a0dd3585676dcd087a26cae9bd073.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_b6c48765b34c78d4ff59def6455d1de335fad030.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_e60319632adeffadd156473a6c0179c1fb0fac37.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200663986%20003%2099%207b118edd73be8fa09782d06ef2e9d2c48821e700.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Short Dresses",
        title: "Short dress",
        description: "Long-sleeved dress in a crêpe weave with a round neckline, an opening and button at the back of the neck and a smocked seam at the waist. Unlined.",
        detail: "100% viscose. Machine wash at 30˚",
        price: "999",
        color: {
            "Yellow": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_c1b708652b29626fff960f3f349b07134d5b6bda.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_6f7ea58cfba2baf1bd3ec66bd79f3ad201015610.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_2650c6db9c1aa7cd06c4a5afbb4f36ed8b2b7173.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200663965%20006%2099%2075957921a8801deaefa6a820330327f0ac18aee4.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_8d4edb3a90015a983c06dc05106e7c2c5354e1d8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_0ede7235c88b6c71cb012c2d63727aef57abe4f7.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_26da3d614bcc0568fd48790b17db38ffa5581eb7.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200663965%20001%2099%20627134e77a8904dec9437abeb7e02658326c9423.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Short Dresses",
        title: "V-neck dress",
        description: "Short dress in a lustrous weave with a V-neck and wrapover at the top with a concealed press-stud. Opening at the back with a concealed button at the back of the neck, long cuffed sleeves with a slit running down, and a seam at the waist. Unlined.",
        detail: "100% polyester. Machine wash at 40˚",
        price: "1099",
        color: {
            "Petrol": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_9a2f9937cbee9ffedf75d149fecf1916b11c5cb9.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_352aa41a35668390029ad612d65650e8df4bfb9b.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_ab445ae08740e59c0cd120d316c0157df7da96aa.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200639511%20002%2099%205d3c3bdaaaba67f21182e7ca7d4fc6c610c2f0c2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_70a74c85a90ee6fa7338a7ea32d68adade8f978f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_f13a3958cc32a1a5531122a2428268faea323618.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_7db055caa37afcf412825f1c9aae6808e728bd8e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200639511%20001%2099%2042a130a7d7df7f0ab1055863b876af15b5656b35.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Short Dresses",
        title: "Wrap dress",
        description: "Short, V-neck dress in stretch jersey with a wrapover front with ties at one side, and long sleeves.",
        detail: "93% polyester, 7% elastane. Machine wash at 30˚",
        price: "999",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_0df443c8e0fec0c628956a0b0fe08dd4d18b17fd.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_58538d51e0d228c2e204f6bd4b479cf9ebe78109.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_f9d6e51f436551825063a8a797061c5824872965.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200633977%20001%2099%2001a38c3820dc6d42393ba999ef1bf255c713a328.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Silver": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_4825ab19f6f1bd665e1269b75eab12907f799b7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_0f5eaed1e2ce3673e13e58f10a06ec0d26d6374f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_7418ac8b42d7649d1366fda56d04d4bddc99de96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200633977%20002%2099%206663bfde0772b5bb70c7adeec047a066b4ba4b4f.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Short Dresses",
        title: "Short jersey dress",
        description: "Short jersey dress with a slightly wider neckline, 3/4-length sleeves, seam at the waist and bell-shaped skirt. Unlined.",
        detail: "65% viscose, 30% polyester, 5% elastane. Machine wash at 40˚",
        price: "1099",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_2c1246c22545326fe67134aff5e78a216f7a92c4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_1ba9e86353aa28f2265d371d302528a8c6d081df.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_ac40b90ec8f77cb45858516a710a335f0b2f35d4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200685468%20001%2099%202822af738d32a3b6e9c31da8c42e5f20e8d5c888.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Red": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_b7edaa92b73110f16819f72c28175790259e8a80.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_7a5dba724e6c12d3542645a15e68cbac82929e4a.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_3f55374580facbe10d677a180dcca795fb86634f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200685468%20002%2099%208842fb2600c598c970f07ce5f86141221b63dc5a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Short Dresses",
        title: "Jacket dress",
        description: "Double-breasted dress in woven fabric with notch lapels, a V-neck, wrapover front, long sleeves and a concealed zip in one side. Unlined.",
        detail: "100% viscose. Machine wash at 30˚",
        price: "1399",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a048015de64127a09de032313a93d30af9092de1.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_d101a31f615822fea919869b6cd3c389e4ee7286.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_c680a1bbb80bb03a2d6e97968006840a91e4548d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200700115%20001%2099%20e4b5935855ad9cec9b6ade2a86b57e8d85b87524.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    // ladies - dresses - midi dresses
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Midi Dresses",
        title: "Smocked dress",
        description: "Calf-length dress in an airy, patterned weave with a round neck and an opening with a concealed button at the back of the neck. Long sleeves with smocking at the cuffs, and a smocked seam at the waist. Lined skirt.",
        detail: "100% polyester. Machine wash at 30˚",
        price: "1399",
        color: {
            "Brown": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_08b1e713dc0482ca36a83630b9ea9633f05c1a63.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_30888d396812df32e285128553984d1d627363c3.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_30473c2a2fbf2a0724676548ca48ecc114d1f03e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200663937%20002%2099%20af586342b5e428a5b3a2c8a4c46a31c3c8aa419f.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Midi Dresses",
        title: "Calf-length shirt dress",
        description: "WILLIAM MORRIS & CO. x H&M. Calf-length dress in a patterned viscose weave with a collar, buttons down the front and long sleeves with buttoned cuffs. Unlined.",
        detail: "100% viscose. Machine wash at 30˚",
        price: "1399",
        color: {
            "Blue": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_d6f4b816ed71a8f1304d440336185799ea90f3b1.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_df4404cdbe55868b9fd9bbf77af1c305c8f032e5.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_90d5e3716effee1847bc466020d93f371fad26eb.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200708286%20001%2099%2039331e863b59b88422363ec911829eb7b1b185a6.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Midi Dresses",
        title: "Off-the-shoulder dress",
        description: "Calf-length, fitted, off-the-shoulder dress in a rib knit with cap sleeves.",
        detail: "81% viscose, 18% polyamide, 1% elastane. Machine wash at 30˚",
        price: "1399",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_5dd29ef081b42ae0db0f5c664092e3f502a5fe20.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_298cad07c814ae9fbc9abeece1728d1a527708a6.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_ce479a952799d9110aa45416c9a5734fc62f136b.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200714190%20001%2099%20d1b8d84c87d8ea1d5d45457bc7e189a85e51ae59.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Midi Dresses",
        title: "V-neck dress",
        description: "Long jersey dress with a deep V-neck, long sleeves, seam at the waist with a decorative tie detail and a flared skirt. Unlined.",
        detail: "100% polyester. Machine wash at 30˚",
        price: "1399",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_f02db8143963ee9f4802c4ad2ba5411091d2243e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_94541f83495458f1fe636f021d80ae171cc227fb.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_701a979c2b31123b9ab7da7769710e76c09bfd43.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200727832%20004%2099%207fa7dc4884e86294e812806424e3f5be2aae6857.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Midi Dresses",
        title: "Pleated dress",
        description: "Calf-length, A-line dress in jersey crêpe with pleats front and back. Round neck with an opening at the top that fastens with a concealed hook-and-eye fastener, long raglan sleeves and concealed pockets in the side seams.",
        detail: "Calf-length, A-line dress in jersey crêpe with pleats front and back. Round neck with an opening at the top that fastens with a concealed hook-and-eye fastener, long raglan sleeves and concealed pockets in the side seams.",
        price: "1799",
        color: {
            "Brown": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_d0957350beceac316f75fea11e047a2a1e0e25bc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_8af028613d03a9e2e9d1ed8af87d61093086b75b.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_16b381acb02c0265709b5042f0bc70e8ad11dc16.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200700822%20001%2099%2099f7072109383530fa4af8a0a02d4a8c68309e61.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_347ccc57986a11e6d485cc03ea1950a6ed2b30e4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a44e22f922eb5205eebe79aa0ddcf0d7d476f096.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_7fca93961e6dc67ca0d809ef2ffe492f842ccc35.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200700822%20003%2099%20783ae7d910744a4ff358369f6b5c02bd5feea3d6.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Midi Dresses",
        title: "V-neck dress",
        description: "V-neck dress in woven fabric with dropped shoulders and short, wide sleeves. Seam at the waist with a tapered bodice, and a rounded hem. Longer at the back. Unlined.",
        detail: "100% polyester. Machine wash at 30˚",
        price: "1399",
        color: {
            "Blue": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_9379561a3b515b8a16729b3e2d47636ffaf1e7c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_3a20282d0824586c0ceb27f9ce4c373fc37bd768.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_f652947ea92834d4079e79565675cfbdc9092f09.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200670949%20001%2099%20c3e3ddb2bd442d63ba877805a0fb23a903f53c31.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Red": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_8897aecabab06ff74eeafcbcb281edddb765767f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_8e55683b667c3c28f4e3d327a9fe5da6d459b269.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_9208333945db7b56c433ac2c3fa5724192b85e12.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200670949%20002%2099%205855983ccdd8570d7410652f96229bcd537c0f7d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Midi Dresses",
        title: "Calf-length lace dress",
        description: "Calf-length lace dress with an opening and concealed button at the back of the neck. Long sleeves with elasticated cuffs, an elasticated seam at the waist and a gently flared skirt with a scalloped edge. Partly lined.",
        detail: "100% polyamide. Machine wash at 30˚",
        price: "1399",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_c224b964a461c9d47302489184c62d3e8e43ddab.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_fae28325640e4bc6297937d710ee160b879ff44f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_0be7821d14e4aad43d6bb895ac1e2b7cfad0e147.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200699493%20001%2099%20edff2b8b9ef1ac3e276a408ed08dc3256f8eda98.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Midi Dresses",
        title: "Shirt dress",
        description: "Calf-length dress in woven fabric made from a Tencel® lyocell blend with a collar and concealed buttons down the front. Long sleeves with buttoned cuffs, chest pockets and side pockets with a flap. Detachable tie belt at the waist. Unlined.",
        detail: "90% lyocell, 10% polyester. Machine wash at 30˚",
        price: "1399",
        color: {
            "Green": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_8ad57eece7940ee7092fbb755d9cceacff334269.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_5a6799a255b3f857027ae012c08338e94f86b434.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a1404ec46b0eda0305d0e9bae76a6ea7ad05d203.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200671641%20001%2099%2073106dd60d5f2f6eef08fbf38fb148769fdfe672.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Midi Dresses",
        title: "Dress with appliqués",
        description: "Sleeveless, calf-length dress in lace with chiffon appliqués, a V-neck and narrow, adjustable shoulder straps. Gathered seam at the waist, zip at the back and a gently flared skirt. Jersey lining.",
        detail: "100% polyester. Machine wash at 30˚",
        price: "3999",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_bb681d10356ff0b0d22205b0fe7b23dab77bbef9.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_7ce5c077550164ded2222cae991ebff9832fe329.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_f3cd0e8d515ef4dc7e05aa2ea436980ea31ff720.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200707075%20001%2099%20701799ec640fae31943166bc699e8feaf61c9096.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Red": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_f1a8a5d897cafdb171ddb4c0646e396948411c22.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_6f751c2de32b33a7692fde68cce498e43b755b79.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_110a64d4bf5022eacff443028b1ec0865fb648d4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_fc8c5d2b4915f41c569b989bc9da5e52dfc06e02.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    // ladies - dresses - bodycon
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Bodycon",
        title: "Fitted lace dress",
        description: "Fitted, long-sleeved dress in lace with a scalloped, stand-up collar, buttons at the back of the neck and scalloped edges at the cuffs and hem. Partly lined.",
        detail: "96% polyester, 4% elastane. Machine wash at 30˚",
        price: "999",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a5485da5167f80d27c94f7e82d6573029b5d0628.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_3569810d0548cf802b086e502d4b4a4c3ef4e4ad.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_4c30ec272e356d1285bbb714e92f005a8543d79a.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200663988%20001%2099%208bc6ea9c09b53b03443b66e7fe98811424700146.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Bodycon",
        title: "Fitted dress",
        description: "Short, fitted jersey dress with a wide V-neck front and back and long sleeves.",
        detail: "67% polyester, 25% polyamide, 8% elastane. Machine wash at 30˚",
        price: "999",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_2ce0b5cd5afda4800f7fa630a48e48ef2324d055.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_0b00d870c2643a59fb79a3c123f25e844171f5c2.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a7ef43b1751583bd49a39ebdf46416f0f4aeaccc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200702043%20002%2099%201b275bdc323920836e8d6162d2210be99fe97b75.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Bodycon",
        title: "Ribbed dress",
        description: "Fitted dress in a soft rib knit with a V-neck front and back and long raglan sleeves.",
        detail: "100% acrylic. Machine wash at 30˚",
        price: "1099",
        color: {
            "Red": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_290d7fdf5ad277998a5aeb2353ac56df12f5acbc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_56d59671cd99f5626dd04cac8f918fddfe284c87.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_b2b8fa11d2821d3efc01f88b84dc331dfba24141.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200688474%20003%2099%208229cbb32d36b498b56a14731a8ddcf1ca1db6b0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Pink": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a3119c63597c9a3c7d8da17d4e19c3fe06808b82.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_8ac74a73d092f19599d439166f6405a65c65f4aa.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_ef67609a77f074bd26abd6df8c0fc9b6bd3fdfa5.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200688474%20004%2099%209c8d649861156bc7b9f676c5433fe735fc919543.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Bodycon",
        title: "V-neck dress",
        description: "Short, fitted dress in stretch jersey with a V-neck, narrow, adjustable shoulder straps and a wrapover front with ties at one side. Unlined.",
        detail: "97% polyester, 3% elastane. Machine wash at 40˚",
        price: "699",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_6d72a5a3f84b4bf8fa72730db530af3605ea3790.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_2247bde104a4f757bd7a436b08dac19a4fa6d165.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_380b9cb414d0da2ade23f37a520fd0985c80e944.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200685273%20004%2099%20aad9c5e700772b7f43852d1e5189ffcdc0f97abb.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Red": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_314c7411c737d58e34eead28a89a079fa88c1997.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_46dbd673fc520c606119f5c7c8d5cd3d1d177601.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_817c04e7c1f047eadf27a96ceb1a8b9335b48232.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_30b02489fed402daafb2a840f039b722b1fe2516.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    new Product({
        department: "ladies",
        category: "dresses",
        subcategory: "Bodycon",
        title: "Fitted dress",
        description: "Long-sleeved dress in a short, fitted style.",
        detail: "65% viscose, 30% polyester, 5% elastane. Machine wash at 30˚",
        price: "699",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_400915e8b338502e7fa76ec3d82316b53a41e7b5.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_74a560fd517c593215bd58bf290181c96cfd9a66.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_eecdcf12279c4e1b4662883560360aab3a9603ae.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200662257%20001%2099%20252f056cacfa7332624c3f5716fdcb553704821c.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }),
    new Product({
        department: "men",
        category: "tanktops",
        subcategory: "Short Sleeves",
        title: "Printed T-shirt",
        description: "T-shirt in soft, printed cotton jersey.",
        detail: "90% cotton, 10% viscose.",
        price: "499",
        color: {
            "Grey": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_f1f93522dfe29c59198b6478f8ae30117a75eff8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_b54f4f1ef5218e38f41446ca255e7251df90915b.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_38043692fd2dd122b69353b99f5524a04ab9d4de.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200621522%20022%2099%209ced5e80a35eb42912ef35c6608fbdb270e08870.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"    
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "men",
        category: "tanktops",
        subcategory: "Short Sleeves",
        title: "T-shirt",
        description: "Jersey T-shirt.",
        detail: "60% cotton, 40% polyester. Machine wash at 40˚",
        price: "199",
        color: {
            "Blue": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_fe2229ff341d16425e1dd398127f5af2e32dcf5d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a67850b21e2023560dd38cb37f8dbdcce9295f26.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_261130365fdd2aba2d1488056c08f50f12e8db03.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200636587%20007%2099%2005c0a3d4ace903703786b0b849fc40dc19e6c903.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"    
            ],
            "Green": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a0e8d0d25d15dfeba3da23c1ddafa02be7424d70.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_ade3d199da48cdd8a66d06b54d3800ddb228dc8f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a01a1ceba5747c1918c96256cdee86a94cafbd99.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200636587%20008%2099%20a737b75401ac218f70953a610822a080356b88b2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"    
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "men",
        category: "tanktops",
        subcategory: "Short Sleeves",
        title: "Cotton jersey T-shirt",
        description: "Straight-cut T-shirt in soft cotton jersey with a rounded hem. Slightly longer at the back.",
        detail: "100% cotton. Machine wash at 30˚",
        price: "399",
        color: {
            "Black": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_2614c6f34183294dbc5f8c15b0e88ba101192a18.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_78041f526a51354ee90e78c7a46fc730a5df7eaf.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_835bca294723d74bf4b74e8ece8f65dcf81fa126.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200598755%20001%2099%2083e1bf22cd2015bc509296ef1e2d5a4d29b70b7a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"    
            ],
            "White": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_b8b70baffae5191bfada6c419e06c0d31b347f5f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_dc0a24d60f7f2153c855058bde324ebc3c30305e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_efd33fb854ac34764f10504e3fe3a8963d94403e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200598755%20002%2099%20a61ba3408c2446996c2a52225efa9f10d21b9dc4.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"    
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),
    new Product({
        department: "men",
        category: "tanktops",
        subcategory: "Short Sleeves",
        title: "Cotton piqué.T-shirt",
        description: "Round-necked T-shirt in sturdy cotton piqué.",
        detail: "100% cotton. Machine wash at 30˚",
        price: "599",
        color: {
            "White": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_29857c8dd22730d42295fef527cbccf65494f8f0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_b16e922b3e08c3aa8805c469391b7372f5810a18.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a3a6c71602453332d5906d7fccf2c550ecc8cd1a.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200567418%20019%2099%20da7f9cfdece1bcd0d0e79a18a6d0d2962dbc64b0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"    
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    }),new Product({
        department: "men",
        category: "tanktops",
        subcategory: "Short Sleeves",
        title: "T-shirt with a motif",
        description: "T-shirt in cotton jersey with a print motif.",
        detail: "90% cotton, 10% viscose. Machine wash at 30˚",
        price: "699",
        color: {
            "White": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_459bb9b485a393c5a671f669cdbb3df59a3b5c37.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_26a8287c2f7129820e3ae2e4a011aeaa5e52cfeb.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_806c8cf2f29380ccad6c38825d830975e5948e5b.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200615038%20033%2099%20a82ccb9c86f29bf6d4d4cc496f732af85efb8b32.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"    
            ]
        },
        size: {
            "S": "100",
            "M": "100",
            "L": "100",
            "XL": "100"
        }
    })
    // new Product({
    //     department: "ladies",
    //     category: "dresses",
    //     subcategory: "Cropped dresses",
    //     title: "Ribbed top",
    //     description: "Short, fitted top in ribbed cotton jersey with short sleeves.",
    //     detail: "95% cotton, 5% elastane. Machine wash at 30˚",
    //     price: "399",
    //     color: {
    //         "Dark Yellow": [
    //             "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_951d46e2aab072a22e4bf088faf9e4fe1f9b154f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
    //             "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_85b95f7288735aa5825493f547e68c8eea5748ca.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
    //             "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_995761a7f9a5b2d3dd7aaa72ab47b9f9bdd1f585.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
    //             "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_6ba618200bc257ab828025033ee79e513daaed51.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
    //             "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200624486%20009%2099%20ea8abe8783b4e6ec6130f2f7c1d9865ee578d2e3.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
    //         ],
    //         "Rasberry Red": [
    //             "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_4ab5e171340c19083a74617f6b705b970d2d02c1.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
    //             "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_4488ea6ee93492ab988876daea86f252b41aa75f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
    //             "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_ce4ceff9bcb680edee8798e3c944b287c39ee0d7.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
    //             "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200624486%20008%2099%20661d72a87d709107ec838c3546cf309f6880056f.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
    //         ]
    //     },
    //     size: {
    //         "S": "50",
    //         "M": "100",
    //         "L": "100",
    //         "XL": "50"
    //     }
    // })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        console.log(err)
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}