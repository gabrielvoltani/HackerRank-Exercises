// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  const type = s[8]
  if (type === 'P') {
      if (parseInt(s) >= 12) {
          return s.slice(0, 8);
      }
      const newS = s.slice(0,8)
      const newValue = parseInt(s)+12;
      
      if (parseInt(newS) < 10) {
      return newS.replace(`0${parseInt(newS)}`, newValue);
      } else {
      return newS.replace(parseInt(newS), newValue);
      }
  }
  if (parseInt(s) >= 12){
      const newS = s.slice(0,8);
      return newS.replace(parseInt(s), `0${(parseInt(s))-12}` )
  };
  const newS = s.slice(0,8)
  return newS;
}

// My comments:
// With this exercise i was able to remember how to use parseInt, string.slice, string.replace and template literals.