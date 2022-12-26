//it is function, which used in many scripts




///summary
/// create HTML text for complex structure arrayOfDataField
/// with classes classHeader for property name
/// and classField for property value
///
function getStructToHtml(obj, arrayOfDataField, classField, classHeader) {
    let divCode="";
    for (const prop of Object.getOwnPropertyNames(obj))
    {
        if (typeof (obj[prop]) !== "object")
        {
            divCode = '<div class=' + classField + '>' + '<span class="output_user_record_block-user_data_header_font">' + (ukrainePropertyName.get(prop) ? ukrainePropertyName.get(prop): prop) + ': </span> ' + obj[prop] + '</div>';
            arrayOfDataField.push(divCode);
        }
        else
        {
            arrayOfDataField.push('<div class=' + classHeader + '> ' + '<span class="output_user_record_block-user_data_header_font">' + (ukrainePropertyName.get(prop) ? ukrainePropertyName.get(prop): prop) + ':</span> ');
            getStructToHtml(obj[prop], arrayOfDataField, classField, classHeader);
            arrayOfDataField.push('</div>');
        }
    }
    return arrayOfDataField;
}


function headerHtmlText(title, script) {
    return '<html lang="eu">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <meta name="viewport"\n' +
        '          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
        '    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
        '    <title>' + title + '</title>\n' +
        '    <link rel="stylesheet" href="styles/main.css">\n' +
        '</head>\n' +
        '<body class="page">' +
        script +
        '<div id="header">jsonplaceholder.typicode.com</div>';
}

function footerHtmlText() {
    return  '<div id="footer"> miniProject of JS by Sviehaper (c) </div></body> </html>';
    //I don't know haw return object, so return html text
}




const ukrainePropertyName = new Map([
    ['name', 'Назва'],
    ['address', 'Адреса'],
    ['geo', 'Геолокація'],
    ['id', 'Номер'],
    ['body', 'Вміст'],
    ['email', 'Електронна адреса'],
    ['website', 'Вебсайт'],
    ['postId', 'Номер посту'],
    ['length', 'Кількість'],
    ['company', 'Компанія'],
    ['street', 'Вулиця'],
    ['suite', 'Будинок'],
    ['city', 'Місто'],
    ['zipcode', 'Індекс'],
    ['phone', 'Телефон'],
    ['username', 'Імя користувача'],
    ['catchPhrase', 'Гасло'],
    ['bs', 'Сфера'],
    ['lat', 'Широта'],
    ['lng', 'Довгота'],
    ['body', 'Вміст'],
    ['userId', 'Номер'],
    ['title', 'Заголовок']

]);