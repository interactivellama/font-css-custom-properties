document.getElementById('toggle-cdn-font-url').addEventListener('click', function() {
  function getFontName(variableName) {
    return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${variableName}`);
  }

  function setFontName(variableName) {
    document.documentElement.style
    .setProperty('--fontName', getFontName(variableName));
  }

  console.log('Toggle font');
  console.log('current value', getFontName('fontName'));
  console.log('current value', getFontName('fontName2'));
  console.log('current value', getFontName('fontName2'));

  getFontName('fontName') === getFontName('fontName1')
    ? setFontName('fontName2')
    : setFontName('fontName1');
})
