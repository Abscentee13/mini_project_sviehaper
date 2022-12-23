
//let usersList = [];

getUserDataFromJsonPlaceholder(USERS_URL);


function getUserDataFromJsonPlaceholder(path)
{
    fetch(path)
        .then((response) => (response.json()))
        .then ((data) => {
            for (const datum of data) {
                usersList.push(datum);
            }
            printUsersHeaderHtml(usersList);
        });
}

function printUsersHeaderHtml(usersHeadersList)
{
    let htmlText = headerHtmlText('', '');

    for (const user of usersHeadersList)
    {
        htmlText +=
            '<div class="output_user_header_block">' + user.id + '. ' + user.name +
            '<input type="button" class="button_detail" '+
            'onclick="createUserDetailsHtml('+ user.id +')" value=&#10150> ' +
            '</div>';
    }
    htmlText += footerHtmlText();
    document.write(htmlText);
}


function createUserDetailsHtml(userId)
{
    const user = usersList[userId];
    const classField = "output_user_record_block-user_data_field";
    const classHeader = "output_user_record_block-user_data_header";
    const userDataFieldHtml = getStructToHtml(usersList[userId], [], classField, classHeader);
    const scripts = '<script  src="scripts/global_var.js">        </script>' +
                    '<script src="scripts/user-details.js">        </script> ' +
                    '<script  src="scripts/lib.js">        </script> ';
    const detailsWindow = window.open('user-details.html');  //something wrong
    const htmlText = '<!doctype html>' +
        headerHtmlText (user.name, scripts) + '<div class="main_content">' +
        '<div class=' + classHeader + '> ' +
        '<span class="output_user_record_block-user_data_header_font"> Details of ' + user.name + '</span></div>' +
        userDataFieldHtml.join("") +
        '<div class="main_content"> <input type="button" class="button_detail" ' +
        'onclick="viewPostHeader(' + user.id + ')" value="view posts header">' + '</div>' +
        '</div>' +
        footerHtmlText();
    detailsWindow.document.write(htmlText);
}








