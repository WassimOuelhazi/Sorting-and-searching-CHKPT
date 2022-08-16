
// This program works the way we sort playing cards in our hands. 
// Each time we take a new card we put it in the right place in our hand. 

let hand = [1, 2, 5, 5, 6, 8, 10]


let Take_new_card = (arr, num) =>
  [...(arr.filter(n => n <= num)), num, ...(arr.filter(n => n > num))]



//TEST
console.log(Take_new_card(hand, 4))
console.log(Take_new_card(hand, 9))