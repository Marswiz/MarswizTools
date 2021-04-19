// Debounce a Function.
//
import {defaultFunctionType} from "../../interfaces";

// debounce function.
export function _debounce(func : defaultFunctionType, delay : number) : defaultFunctionType{

    function _debouncedFunction(...args){
        if (_debouncedFunction['timeoutID']){
            clearTimeout(_debouncedFunction['timeoutID']);
        }
        let timeout = setTimeout(()=>{
            func(...args);
        }, delay);
        _debouncedFunction['timeoutID'] = timeout;
    }

    return _debouncedFunction;
}

// throttle function.
export function _throttle(func : defaultFunctionType, delay : number) : defaultFunctionType{
    function _throttledFunction(...args){
        if (_throttledFunction['timeoutID']){
            console.warn('Func canceled', func);
            return ;
        }
        func(...args);
        let timeout = setTimeout(()=>{
            _throttledFunction['timeoutID'] = null;
        } ,delay);
        _throttledFunction['timeoutID'] = timeout;
    }
    return _throttledFunction;
}