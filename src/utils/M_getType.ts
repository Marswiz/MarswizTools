export function M_getType(variable : any){
    return Object.prototype.toString.call(variable).slice(8 ,-1);
}
