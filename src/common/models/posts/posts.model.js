angular.module('xlite.models.posts', [])
  .factory('Post', function() {

    /**
     * @class Post
     * @param {object} dto - dto to transform into model
     */
    var Post = function(dto) {
      var vm = this;
      if (dto) {
        vm.fromDTO(dto);
      }
    };

    /**
     * @method fromDTO
     * @param {object} dto
     */
    Post.prototype.fromDTO = function(dto) {
      var vm = this;
      vm.setOrFail(dto.DiscussionID, '_id');
      vm.setOrFail(dto.InsertUserID, 'author');
      vm.setOrFail(dto.Name, 'title');
      vm.setOrFail(dto.DateInserted, 'date');
      vm.setOrFail(dto.Category.Name, 'description');
      vm.setOrFail(dto.User.Name, 'user');
      vm.setOrFail(dto.Body, 'content');
    };

    /**
     * @method toDTO
     * @returns {*}
     */
    Post.prototype.toDTO = function() {
      return vm; // No transformation required
    };

    Post.prototype.setOrFail = function(dtoVal, dtoVarName) {
      var vm = this;
      if(dtoVal === undefined || dtoVal === null || dtoVal === '') {
        throw 'dto value cannot be null or undefined. Value: ' + dtoVarName;
      }
      vm[dtoVarName] = dtoVal;
    };

    return Post;
  });
