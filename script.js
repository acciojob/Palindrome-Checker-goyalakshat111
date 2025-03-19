// complete the given function

function palindrome(str){
		if(str.toLowerCase()==str.toLowerCase().split("").reverse().join("")){
			return true;
		}
		else{
			return false;
		}
}
module.exports = palindrome
