describe("CommentsList", function(){
  var commentList;

  // Example of setup
  beforeEach(function(){
    commentList = new CommentList();
  });

  describe("creation", function(){
    it("should contain no comments when created", function(){
      expect(commentList.comments.length).toEqual(0);
    });

    // toBeEmpty is a custom matcher
    it("should contain no comments when created", function(){
      expect(commentList.comments).toBeEmpty();
    });

    // A pending example
    xit("should do something which is not yet implemented");
  });

  describe("addComment", function(){
    var comment;

    beforeEach(function(){
      comment = new Comment("I'm not a crook!");
    });

    // A negative expectation
    it("should not be empty after adding a comment", function(){
      commentList.addComment(comment);
      expect(commentList).not.toBeEmpty();
    });

    it("should contain the added comment", function(){
      commentList.addComment(comment);
      expect(commentList.comments).toContain(comment);
    });

    // Spying on an object's instance method. Note the andCallThrough() which is not in RSpec
    it("should check that the comment has clean language", function(){
      spyOn(comment, "hasCleanLanguage").andCallThrough();
      commentList.addComment(comment);
      expect(comment.hasCleanLanguage).toHaveBeenCalled();
    });

    // callCount: returns number of times spy was called
    // mostRecentCall.args: returns argument array from last call to spy.
    // argsForCall[i]

    it("should not add the comment if it has dirty language", function(){
      spyOn(comment, "hasCleanLanguage").andReturn(false);
      commentList.addComment(comment);
      expect(commentList.comments).toBeEmpty();
    });

    describe("callback notification", function(){
      var commentAddedCallback;

      // Creating a pure spy object
      beforeEach(function(){
        commentAddedCallback = jasmine.createSpy();
        commentList = new CommentList(commentAddedCallback);
      });

      it("should call the commentAddedCallback", function(){
        commentList.addComment(comment);
        expect(commentAddedCallback).toHaveBeenCalled();
      });

      // Check params in call expectation
      it("should call the commentAddedCallback with the new comment as a parameter", function(){
        commentList.addComment(comment);
        expect(commentAddedCallback).toHaveBeenCalledWith(comment);
      });
    });
  });
});
