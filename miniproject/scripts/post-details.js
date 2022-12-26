
commentsList=[];


function viewComments(postId) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
        .then((response) => (response.json()))
        .then((data) => {
            for (const datum of data) {
                commentsList.push(datum);
            }
            printCommentsHtml(commentsList);
        });
}


function printCommentsHtml(commentsList){

    const classField = "output_comment_block_field";
    const classHeader = "output_comment_block_header";
    const commentsDataFieldHtml = getStructToHtml(commentsList, [], classField, classHeader);

    let footer = document.getElementById('footer');
    let commentContentDiv = document.createElement('div');
    commentContentDiv.className = "comment_content";
    commentContentDiv.id = "comment_content";
    document.body.insertBefore( commentContentDiv, footer);

    let htmlText = '';
        htmlText +=
                    commentsDataFieldHtml.join('');
    let element = document.getElementById("comment_content");
    element.innerHTML = htmlText;
}