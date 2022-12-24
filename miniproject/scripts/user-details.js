
// let postList=[];
// let commentsList=[];
let postAuthor='';

function viewPostHeader(userId)
{
    //TO DO use global    usersList
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => (response.json()))
        .then ((data) => {

            for (const user of data) {
                if (user.id === userId)  postAuthor = user.name;
                console.log(userId + user.name);
            }
        });
   // console.log(usersList );
    getPostDataFromJsonPlaceholder('https://jsonplaceholder.typicode.com/users/' + userId + '/posts');
}

function getPostDataFromJsonPlaceholder(path)
{
    postList=[];
    fetch(path)
        .then((response) => (response.json()))
        .then ((data) => {
            for (const datum of data) {
                postList.push(datum);
            }
            printPostsHeaderHtml(postList);
        });
}


function printPostsHeaderHtml(postHeaderList)
{
    let postHeaderDiv = document.getElementById("post_content");
    if (postHeaderDiv)
        {
            postHeaderDiv.remove();
        }

    let footer = document.getElementById('footer');
        postHeaderDiv = document.createElement('div');
        postHeaderDiv.className = "post_content";
        postHeaderDiv.id = "post_content";
    document.body.insertBefore( postHeaderDiv, footer);

    let htmlText = '';

    for (const post of postHeaderList)
    {
        htmlText +=
                    '<div class="output_post_header_block">' +
                    '<div class="output_post_title_block">' +
                        post.id + '. ' + post.title +
                    '</div>' +
                    '<input type="button" class="button_detail"'+
                    ' onclick="createPostDetailsHtml(' + post.id + ')" value=&#10150> ' +
                    '</div>';
    }

    let element = document.getElementById("post_content");
    element.innerHTML = htmlText;
}

function createPostDetailsHtml(postId)
{
    const post = postList.filter((post) => post.id === postId)[0];
    const classField = "output_post_record_block-post_data_field";
    const classHeader = "output_post_record_block-post_data_header";
    const postDataFieldHtml = getStructToHtml(post, [], classField, classHeader);
    const scripts = '<script  src="scripts/global_var.js">        </script>' +
                    '<script src="scripts/post-details.js">        </script> ' +
                    '<script  src="scripts/lib.js" onload = "viewComments(' + post.id + ')">        </script> ';
    const detailsWindow = window.open('post-details.html');  //something wrong
    const htmlText = '<!doctype html>' +
                        headerHtmlText ('Post '+ postAuthor, scripts) + '<div class="main_post_content">' +
                        '<div class=' + classHeader + '>' +
                        '<span class="output_post_record_block-post_data_header_font"> Details of post '+ postAuthor + '</span></div>' +
                        postDataFieldHtml.join("") +
                        '</div>' +
                        footerHtmlText();
    detailsWindow.document.write(htmlText);
}
