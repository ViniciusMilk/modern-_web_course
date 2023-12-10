const nums = [1,2,3,4]

console.log(nums.reduce(function(ac,at){
    console.log(ac,at)
    if (ac<at) {
        return ac
    } else {
        return at
    }
}))