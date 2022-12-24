




function getStructToHtml(obj, arrayOfDataField, classField, classHeader) {
    let divCode="";
    for (const prop of Object.getOwnPropertyNames(obj))
    {
        if (typeof (obj[prop]) === "string" || typeof (obj[prop]) === "number")
        {
            divCode = '<div class=' + classField + '>' + '<span class="output_user_record_block-user_data_header_font">' + prop + ': </span> ' + obj[prop] + '</div>';
            arrayOfDataField.push(divCode);
        }
        else
        {
            arrayOfDataField.push('<div class=' + classHeader + '> ' + '<span class="output_user_record_block-user_data_header_font">' + prop + ':</span> ');
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
    return '<div id="footer"> miniProject of JS by Sviehaper (c) </div></body> </html>';
}
