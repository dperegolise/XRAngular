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
      vm.setOrFail(dto._id, '_id');
      vm.setOrFail(dto.author, 'author');
      vm.setOrFail(dto.title, 'title');
      vm.setOrFail(dto.date, 'date');
      vm.setOrFail(dto.description, 'description');
      vm.setOrFail(dto.content, 'content');
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
