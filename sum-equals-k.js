// Given a list of numbers and a number k, return whether any two numbers from the list add up to k. For
// example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

let sumEqualsK = (arr, k) => {
    let comparables = {}
    for (let i = 0; i < arr.length; i++){
        let num = arr[i]
        console.log(num)
        if ((k - num) in comparables) {
            console.log(true)
            return true
        }
        comparables[num] = true
    }
    console.log(false)
    return false
}

sumEqualsK([10, 15, 3, 7], 22)