export const listMtProps = ['mt', 'mt-sm', 'mx', 'my', 'py', 'mb', 'align-items-center', 'justify-content', 'p', 'p-sm', 'm', 'mr', 'px', 'py'];

export const mapaIcones = new Map<string, string>([
    ['danger', 'fas fa-times-circle'],
    ['success', 'fas fa-check-circle'],
    ['warning', 'fas fa-exclamation-triangle'],
    ['info', 'fas fa-check-circle']
]);

/** Função que encontrei no stackoverflow em https://stackoverflow.com/questions/5999118/how-can-i-add-or-update-a-query-string-parameter */
export function updateQueryStringParameter(uri : string, key : string, value : string) {
    const re = new RegExp('([?&])' + key + '=.*?(&|#|$)', 'i');
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + '=' + value + '$2');
    } else {
        let hash =  '';
        if( uri.indexOf('#') !== -1 ){
            hash = uri.replace(/.*#/, '#');
            uri = uri.replace(/#.*/, '');
        }
        const separator = uri.indexOf('?') !== -1 ? '&' : '?';    
        return uri + separator + key + '=' + value + hash;
    }
}