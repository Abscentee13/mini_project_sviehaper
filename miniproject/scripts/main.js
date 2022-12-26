getUserDataFromJsonPlaceholder(USERS_URL());

function getUserDataFromJsonPlaceholder(path)
{
//// TO DO catch exception, when offline
     fetch(path)
        .then((response) => ((response.ok?response.json(): document.write('sorry, online data is not available'))))//that is not work catch exception
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
    htmlText += footerHtmlText();
    document.write(htmlText);

    for (const user of usersHeadersList)
    {
        let userHeaderBlock = document.createElement('div');
        userHeaderBlock.className = 'output_user_header_block';
        userHeaderBlock.innerText = user.id + '. ' + user.name;

        let inputButton = document.createElement('input');
        inputButton.className = 'button_detail';
        inputButton.type = 'button';
        inputButton.addEventListener('click', (event) => createUserDetailsHtml(user.id - 1));
        inputButton.value = '➦';

        userHeaderBlock.append(inputButton);
        document.body.insertBefore(userHeaderBlock, document.getElementById('footer'));
    }
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
    detailsWindow.location.hash = 'user-details.html';
}








