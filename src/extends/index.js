/**
 * Created by Administrator on 2017/1/9.
 */

const MyPlugins = {
  install(_Vue, options){
    if(!_Vue){return false;}

    _Vue && (this.__Vue = _Vue);

    this.addDirectives()
  },
  addDirectives(){
    this.addDirectiveTitle();
  },
  addDirectiveTitle(){
    this.__Vue.directive('title', {
      inserted:function(el, binding){
        document.title = binding.value;
      }
    });
  },
};


export default MyPlugins;


