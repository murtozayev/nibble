export function useMap(arr, callback) {
    let result = []
    for (let x = 0; x < arr.length; x++) {
        result.push(callback(arr[x], x, arr))
    }
    return result
}