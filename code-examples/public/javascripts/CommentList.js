function CommentList(commentAddedCallback) {
  this.comments = [];

  if (commentAddedCallback) {
    this.commentAddedCallback = commentAddedCallback;
  }
}

CommentList.prototype.comments = function(){
  return this.comments;
};

CommentList.prototype.addComment = function(comment){
  if (comment.hasCleanLanguage()) {
    this.comments.push(comment);

    if (this.commentAddedCallback) {
      this.commentAddedCallback.call(this, comment);
    }
  }
};
