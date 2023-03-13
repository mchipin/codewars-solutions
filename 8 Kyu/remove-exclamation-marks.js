// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

    //My solution

    function removeExclamationMarks(s) {
        let noExclamationMarks = ''
        for (let i = 0; i < s.length && s[i] !== '!'; i++) {
          noExclamationMarks += s[i]
        }
        return noExclamationMarks
      }

