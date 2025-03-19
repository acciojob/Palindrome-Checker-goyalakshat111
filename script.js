// complete the given function

function palindrome(str){
		if(str==str.split("").reverse().join("")){
			return true;
		}
		else{
			return false;
		}
}
module.exports = palindrome
