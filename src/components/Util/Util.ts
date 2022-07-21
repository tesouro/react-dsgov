export const listMtProps = ['mt', 'mt-sm', 'mx', 'my', 'py', 'mb', 'align-items-center'];

export const mapaIcones = new Map<string, string>([
    ["danger", "fas fa-times-circle"],
    ["success", "fas fa-check-circle"],
    ["warning", "fas fa-exclamation-triangle"],
    ["info", "fas fa-check-circle"]
]);

/** Função que encontrei no stackoverflow em https://stackoverflow.com/questions/5999118/how-can-i-add-or-update-a-query-string-parameter */
export function updateQueryStringParameter(uri : string, key : string, value : string) {
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)", "i");
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
      var hash =  '';
      if( uri.indexOf('#') !== -1 ){
          hash = uri.replace(/.*#/, '#');
          uri = uri.replace(/#.*/, '');
      }
      var separator = uri.indexOf('?') !== -1 ? "&" : "?";    
      return uri + separator + key + "=" + value + hash;
    }
  }