const isValid = (given_string) => {
	const stack = [];

	for (let i = 0; i < given_string.length; i++) {
		let current_char = given_string.charAt(i);
		switch (current_char) {
			case "(":
				stack.push(")");
				break;
			case "[":
				stack.push("]");
				break;
			case "{":
				stack.push("}");
				break;
			default:
				if (current_char !== stack.pop()) {
					return false;
				}
		}
	}

	if (stack.length === 0) {
		return true;
	} else {
		return false;
	}
};

console.log(isValid("()[]{}"));
