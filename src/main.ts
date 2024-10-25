function highlightForbiddenWords(text: string, forbiddenWords: string[]): string {
    return forbiddenWords.reduce((updatedText, word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        return updatedText.replace(regex, `<del>${word}</del>`);
    }, text);
}

document.getElementById('highlightButton')?.addEventListener('click', function() {
    const text = (document.getElementById('textInput') as HTMLTextAreaElement).value;
    const forbiddenWordsInput = (document.getElementById('forbiddenWordsInput') as HTMLInputElement).value;
    const forbiddenWords = forbiddenWordsInput.split(',').map(word => word.trim());

    document.getElementById('result')!.innerHTML = highlightForbiddenWords(text, forbiddenWords);
});
