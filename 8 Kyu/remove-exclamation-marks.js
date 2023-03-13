// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

    //My solution

    function removeExclamationMarks(s) {
        let i = 0
        let noExclamationMarks = ''
        while (i < s.length){
         if (s[i] !== '!') {
           noExclamationMarks += s[i]
         }
          i++
        }
        return noExclamationMarks
      }      