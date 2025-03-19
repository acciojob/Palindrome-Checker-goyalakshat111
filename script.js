// complete the given function

function palindrome(str){
	for(let t of str){
		if(t==t.split("").reverse().join("")){
			return true;
		}
		else{
			return false;
		}
	}

}
module.exports = palindrome
