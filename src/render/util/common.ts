/**
 * 防抖函数,要等触发事件后,delay时间内不再触发事件,事件才执行.
 * 执行事件永远比触发晚delay时间.执行事件使用的参数是最后一次触发传入的参数
 */
export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    return function debounced(...args: Parameters<T>) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func(...args)
            timeoutId = void 0
        }, delay)
    }
}


/**
 * 节流函数,在 delay 时间内,如果多次触发事件,只执行一次. 
 * 
 * immediate表示是否立即执行.
 * 为true时,时间段内第一次触发事件会立即执行,之后的触发会被忽略(Leading edge throttle),
 * 为false时,时间段内第一次触发事件不会立即执行,而是在会在时间段结束后执行(Trailing edge throttle).
 * 
 * 注意: 不管触发事件多少次,不论immediate为true还是false,执行事件使用的参数都是第一次触发传入的参数.
 * 
 * @param func 要节流的函数
 * @param delay 延迟时间
 * @param immediate 是否立即执行,默认false.
 */
export function throttle<T extends (...args: any[]) => any>(func: T, delay: number, immediate: boolean = false): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    return function throttled(...args: Parameters<T>) {
        if (!timeoutId) {
            if (immediate) {
                func(...args)
            }
            timeoutId = setTimeout(() => {
                if (!immediate) {
                    func(...args)
                }
                clearTimeout(timeoutId)
                timeoutId = void 0
            }, delay)
        }
    }
}


/**
 * 判断两个对象类型是否相同, 通过递归，深度检查key和value的类型是否相同
 */
export function isSameType(a: any, b: any) {
    if (typeof a !== typeof b) return false

    if (typeof a === "object") {
        const aKeys = Object.keys(a)
        const bKeys = Object.keys(b)
        if (aKeys.length !== bKeys.length) return false

        for (let key of aKeys) {
            if (!bKeys.includes(key)) return false
            if (!isSameType(a[key], b[key])) return false
        }
    }
    return true
}


export default {
    debounce,
    throttle,
    isSameType,
}