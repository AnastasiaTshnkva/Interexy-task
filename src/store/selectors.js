// characters selectors
export const showCharactersLoading = (state) => state.characters.CharactersLoading;
export const showCharactersData = (state) => state.characters.CharactersData;
export const showCharactersError = (state) => state.characters.CharactersError;

//current character selectors
export const showCurrentCharacterLoading = (state) => state.currentCharacter.CurrentCharacterLoading;
export const showCurrentCharacterSuccess = (state) => state.currentCharacter.CurrentCharacterData;
export const showCurrentCharacterError = (state) => state.currentCharacter.CurrentCharacterError;