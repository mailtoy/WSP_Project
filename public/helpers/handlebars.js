var handlebars = require('handlebars');
var importHelper = require('handlebars-helper-import')(handlebars);
var paginate = require('handlebars-paginate');

handlebars.registerHelper('paginate', paginate);

handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
});

handlebars.registerHelper('toUpperCase', function(str) {
    return str.toUpperCase();
});

// handlebars.registerHelper('assign', function (varName, varValue, options) {
//     if (!options.data.root) {
//         options.data.root = {};
//     }
//     options.data.root[varName] = varValue;
// });