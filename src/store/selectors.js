// characters selectors
export const showCharactersLoading = (state) => state.characters.isLoading;
export const showCharactersData = (state) => state.characters.charactersData;
export const showPrevPage = (state) => state.characters.previousUrl;
export const showNextPage = (state) => state.characters.nextUrl;
export const showCharactersError = (state) => state.characters.error;

//current character selectors
export const showCurrentCharacterLoading = (state) => state.currentCharacter.CurrentCharacterLoading;
export const showCurrentCharacterSuccess = (state) => state.currentCharacter.CurrentCharacterData;
export const showCurrentCharacterError = (state) => state.currentCharacter.CurrentCharacterError;