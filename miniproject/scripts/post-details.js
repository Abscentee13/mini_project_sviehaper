
commentsList=[];


function viewComments(postId) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
        .then((response) => (response.json()))
        .then((data) => {
            for (const datum of data) {
                commentsList.push(datum);
                console.log(datum);
            }
            printCommentsHtml(commentsList);
        });
}


function printCommentsHtml(commentsList){

    const classField = "output_comment_block_field";
    const classHeader = "output_comment_block_field_header";
    const commentsDataFieldHtml = getStructToHtml(commentsList, [], classField, classHeader);

    let footer = document.getElementById('footer');
    let commentContentDiv = document.createElement('div');
    commentContentDiv.className = "comment_content";
    commentContentDiv.id = "comment_content";
    document.body.insertBefore( commentContentDiv, footer);

    let htmlText = '';

        htmlText +=
            '<div class="output_post_header_block">' +
          //  '<div class="output_post_title_block">' +
            commentsDataFieldHtml.join('') +
       // '</div>' +
        '</div>';
    console.log(htmlText);
    let element = document.getElementById("comment_content");
    element.innerHTML = htmlText;
}