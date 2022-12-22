
let postList=[];
function viewPostHeader(userId)
{
    getPostDataFromJsonPlaceholder('https://jsonplaceholder.typicode.com/users/' + userId + '/posts');
}

function getPostDataFromJsonPlaceholder(path)
{
    const classField = "output_user_record_block-user_data_field";
    const classHeader = "output_user_record_block-user_data_header";
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
    postHeaderDiv = document.createElement('div');
    let footer = document.getElementById('footer');
    document.body.insertBefore( postHeaderDiv, footer);
    postHeaderDiv.className = "post_content";
    postHeaderDiv.id = "post_content";

    let htmlText = '';
    let element = document.getElementById("post_content");
    for (const post of postHeaderList)
    {

       // console.log(post);
        htmlText +=
            '<div class="output_post_header_block">' +
            '<div class="output_post_title_block">' +
            post.id + '. ' + post.title +
            '</div>' +
            '<input type="button" class="button_detail">'+
            //'onclick="createUserDetailsHtml('+ post.id +')" value=&#10150> ' +
            '</div>';

    }
    element.innerHTML = htmlText;
}