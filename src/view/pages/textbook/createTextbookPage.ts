import getWords from '../../../api/words';
import { API_BASE_LINK } from '../../../constants/constants';
import { Difficulty, Levels, Word } from '../../../constants/types';
import listenPagination from '../../../logic/textbook/pagination';
import { listenLevelCards, listenWordCards } from '../../../logic/textbook/textbookEvents';
import getPaginationBtns from '../../../logic/textbook/utils/createPagination';
import state from '../../../state/state';
import createElement from '../../../utils/createElement';

function getLevelsSection(parent: HTMLElement): void {
    const textbookHeading = createElement({
        type: 'section',
        parentElement: parent,
        classes: ['heading_section'],
    });

    createElement({
        type: 'div',
        parentElement: textbookHeading,
        classes: ['levels_section'],
    });

    createElement({
        type: 'h2',
        parentElement: textbookHeading,
        classes: ['textbook_title', 'title'],
        text: 'Textbook',
    });

    createElement({
        type: 'p',
        parentElement: textbookHeading,
        classes: ['textbook_text'],
        text: 'Choose the words difficulty level',
    });
    const levelsSection = createElement({
        type: 'div',
        parentElement: parent,
        classes: ['levels_wrapper'],
    });

    const levels: string[] = Object.keys(Levels).filter((value) => Number.isNaN(Number(value)));

    levels.forEach((item, index) => {
        const btn = createElement({
            type: 'button',
            parentElement: levelsSection,
            classes: ['level__button'],
        });
        btn.id = `${index}`;
        if (index === +state.textBook.currentLevel) {
            btn.classList.add('active');
        }
        const leftPart = createElement({
            type: 'div',
            parentElement: btn,
            classes: ['button__left_part'],
        });
        createElement({
            type: 'h2',
            parentElement: leftPart,
            text: `${Object.values(Difficulty)[index]}`,
        });
        createElement({
            type: 'p',
            parentElement: leftPart,
            text: `${Object.keys(Difficulty)[index]}`,
        });

        const rightPart = createElement({
            type: 'div',
            parentElement: btn,
            classes: ['button__right_part'],
        });
        createElement({
            type: 'h2',
            parentElement: rightPart,
            text: `${item}`,
        });
        createElement({
            type: 'div',
            parentElement: btn,
            classes: ['circle'],
        });
    });
    listenLevelCards();
}

export function getWordsCards(words: Word[], parent: HTMLElement) {
    words.forEach((value: Word, index) => {
        const wordCard = createElement({
            type: 'button',
            parentElement: parent,
            classes: ['words__card', `words__card_${Levels[state.textBook.currentLevel]}`],
            attributes: [['id', `${index}`]],
        });
        if (index === 0) wordCard.classList.add('active');

        createElement({
            type: 'h2',
            parentElement: wordCard,
            classes: ['word__title'],
            text: value.word,
        });
        createElement({
            type: 'p',
            parentElement: wordCard,
            classes: ['word__translate'],
            text: value.wordTranslate,
        });
    });
}

export function getWordData(word: Word, parent: HTMLElement) {
    createElement({
        type: 'div',
        parentElement: parent,
        classes: ['word__img'],
        attributes: [['style', `background-image: url(${API_BASE_LINK}/${word.image})`]],
    });
    const wordAndTranslation = createElement({
        type: 'div',
        parentElement: parent,
    });
    createElement({
        type: 'h2',
        parentElement: wordAndTranslation,
        classes: ['word__word'],
        text: `${word.word}`,
    });
    createElement({
        type: 'h3',
        parentElement: wordAndTranslation,
        classes: ['word__translation'],
        text: `${word.wordTranslate}`,
    });
    createElement({
        type: 'span',
        parentElement: wordAndTranslation,
        classes: ['word__transcription'],
        text: `${word.transcription}`,
    });
    const audioBtn = createElement({
        type: 'button',
        parentElement: wordAndTranslation,
        classes: ['audio__wrapper'],
    });
    createElement({
        type: 'span',
        parentElement: audioBtn,
        classes: ['audio'],
    });
    const wordActions = createElement({
        type: 'div',
        parentElement: parent,
        classes: ['word__actions'],
    });
    createElement({
        type: 'button',
        parentElement: wordActions,
        classes: ['word__actions_btn', `words__actions_btn_${Levels[state.textBook.currentLevel]}`],
        text: 'difficult word',
    });
    createElement({
        type: 'button',
        parentElement: wordActions,
        classes: ['word__actions_btn', `words__actions_btn_${Levels[state.textBook.currentLevel]}`],
        text: 'delete word',
    });
    if (!state.user.isAuthenticated) wordActions.classList.add('hidden');

    const wordDescription = createElement({
        type: 'div',
        parentElement: parent,
        classes: ['word__description'],
    });
    createElement({
        type: 'h3',
        parentElement: wordDescription,
        classes: ['word__subheading'],
        text: 'Meaning',
    });
    const description = createElement({
        type: 'p',
        parentElement: wordDescription,
    });
    description.innerHTML = word.textMeaning;
    createElement({
        type: 'p',
        parentElement: wordDescription,
        text: `${word.textMeaningTranslate}`,
    });
    createElement({
        type: 'h3',
        parentElement: wordDescription,
        classes: ['word__subheading'],
        text: 'Example',
    });
    const example = createElement({
        type: 'p',
        parentElement: wordDescription,
    });
    example.innerHTML = word.textExample;
    createElement({
        type: 'p',
        parentElement: wordDescription,
        text: `${word.textExampleTranslate}`,
    });

    const answersInGames = createElement({
        type: 'div',
        parentElement: wordDescription,
        classes: ['answers_in_games'],
    });

    createElement({
        type: 'h3',
        parentElement: answersInGames,
        classes: ['word__subheading'],
        text: 'Answers in games',
    });
    const answersContainer = createElement({
        type: 'div',
        parentElement: answersInGames,
        classes: ['answers__games_container'],
    });
    createElement({
        type: 'span',
        parentElement: answersContainer,
        classes: ['sprint_answers'],
        text: 'sprint: 0 / 0', // !!!!!!!!!!!!!!!!!!!! Implement later
    });
    createElement({
        type: 'span',
        parentElement: answersContainer,
        classes: ['audio_call_answers'],
        text: 'audio-call: 0 / 0', // !!!!!!!!!!!!!!!!!!!! Implement later
    });
    if (!state.user.isAuthenticated) answersInGames.classList.add('hidden');
}

async function getWordsSection(parent: HTMLElement): Promise<void> {
    createElement({
        type: 'h1',
        parentElement: parent,
        classes: ['title', 'words_title'],
        text: `Words`,
    });
    const wordsSection = createElement({
        type: 'section',
        parentElement: parent,
        classes: ['words__section'],
    });
    state.textBook.wordsOnPage = await getWords(state.textBook.currentLevel, state.textBook.currentPage - 1);
    const wordsContainer = createElement({
        type: 'div',
        parentElement: wordsSection,
        classes: ['words__contaiter'],
    });
    getWordsCards(state.textBook.wordsOnPage, wordsContainer);

    const wordInfo = createElement({
        type: 'div',
        parentElement: wordsSection,
        classes: ['word__detail'],
    });
    getWordData(state.textBook.wordsOnPage[0], wordInfo);
    listenWordCards();
}

function getPaginationSection(parent: HTMLElement) {
    const paginationWrapper = createElement({
        type: 'div',
        parentElement: parent,
        classes: ['pagination_wrapper'],
    });
    const ul = createElement({
        type: 'ul',
        parentElement: paginationWrapper,
        classes: ['pagination'],
    });
    getPaginationBtns(ul);
    listenPagination();
}

export async function getTextbookPage() {
    const wrapper = createElement({
        type: 'div',
        parentElement: document.body,
        classes: ['wrapper'],
    });
    getLevelsSection(wrapper);
    await getWordsSection(wrapper);
    getPaginationSection(wrapper);
}