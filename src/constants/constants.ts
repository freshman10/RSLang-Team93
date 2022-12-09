import rightSound from '../assets/sounds/right-answer-sound.mp3';
import wrongSound from '../assets/sounds/wrong-answer-sound.mp3';

export const WRONG_DATA = `Wrong data! I can't create element with this input params!`;
export const START_GAME_LABELS = {
    sprint: {
        header: 'Sprint',
        description: 'Sprint is a speed training. Try to guess as much words as you can in 30 seconds.',
        background: 'sprint__background',
    },

    audioCallGame: {
        header: 'Audio Call',
        description: 'The Audio Call training improves listening comprehension.',
        background: 'audio-call__background',
    },
};
export const SOUNDS_ANSWER = {
    right: rightSound,
    wrong: wrongSound,
};
export const KEY_ARROWS = {
    right: 'ArrowRight',
    left: 'ArrowLeft',
};
export const RESULT_TAB_LABELS = ['RESULT', 'WATCH WORDS'];
export const CHOOSE_LEVEL = 'Chooce level:';
export const START = 'Start';
export const SPRINT_START_TIME = 30;
export const MAX_PAGES = 30;
export const RANDOM_MIDDLE = 0.5;
export const MULTIPLY = 'multiply';
export const START_POINTS = '10';
export const POINTS = 'Total: ';
export const DELIMITOR = 'is';
export const GAME_BUTTONS = {
    YES: true,
    NO: false,
};
export const WORDS = 'https://eng-guru.herokuapp.com/words';
export const API_BASE_LINK = 'https://eng-guru.herokuapp.com';

export const BUTTON_NAMES = ['About Us', 'TextBook', 'Games', 'Statistic'];

export const VALID_COLOR_GREEN = 'rgb(211, 255, 233)';
export const INVALID_COLOR_RED = 'rgb(249, 211, 211)';
export const TEAM_INFO = [
    {
        name: 'Olga Simankova',
        descr: 'Developer. Made server deploy, authorization/registration, textbook',
        github: 'https://github.com/olgasimankova',
        linkedIn: '#',
    },

    {
        name: 'Alexander Marunich',
        descr: 'TeamLead/Developer. Made sprint game, statistics and textbook pages',
        github: 'https://github.com/freshman10',
        linkedIn: '#',
    },

    {
        name: 'Dmitry Nester',
        descr: 'Developer. Made main page design and layout, audio call game',
        github: 'https://github.com/nester-dev',
        linkedIn: 'https://www.linkedin.com/in/dmitriy-nester-a6aa55228',
    },

    {
        name: 'Aleh Harnizonau',
        descr: 'Mentor. Best mentor you can only dream. Constant communication with the team, inestimable support',
        github: 'https://github.com/alehharnizonau',
        linkedIn: 'https://www.linkedin.com/in/aleh-harnizonau-0163801b2/',
    },
];
export const LEARNING_STEPS = [
    {
        title: 'Watch online tutorial video',
        descr: 'In the video you will be presented with the main features of the project',
    },

    {
        title: 'Learn words',
        descr: 'You will be given 4000+ words with different difficulty levels from A1 to C2',
    },

    {
        title: 'Play games',
        descr: 'Consolidate the learned words in one of four games: Savannah, Oasis, Sprint and Audio call.',
    },

    {
        title: 'Check the results',
        descr: 'You can track your progress to stay motivated',
    },
];
export const GAMES = [
    {
        name: 'Sprint',
        descr: 'Determine the correct translation of the word as soon as possible',
        link: './sprint.html',
    },

    {
        name: 'Audio call',
        descr: 'Try to understand what word was spoken',
        link: './audio-call.html',
    },
];
export const FOOTER_LINKS_TEXT = ['About Us', 'TextBook', 'Games', 'Statistic', 'Contacts'];
export const SITEMAP_LINKS = ['#team', '#', '#', '#', '#footer'];
export const GAMES_LINKS = ['./sprint.html', './audio-call.html'];
export const ANSWER_OPTIONS_COUNT = 5;
export const GAME_LIMIT = 10;
export const TODAYS_STATISTIC_LABEL = 'Statistic of the Day';
export const STATISTIC_ICON = {
    'complete-icon.svg': 'New words trained:',
    'check-mark-line-icon.svg': 'Right answers:',
    'double-tick-icon.svg': 'The longest streak of right answers:',
};
export const HEADER_LINKS = ['./#team', './textbook.html', './#games', './statistics.html'];
export const PAGINATION_BTNS = 9;
export const LAST_PAGE = 30;
export const AUDIO_TYPES = ['audio', 'audioMeaning', 'audioExample'];

export const ALL_THE_TIME_LABEL = 'Statistics for all time';
export const ALL_THE_TIME_DESCRIPTION = 'Only registered users can see statistics';
export const LEARNT_WORDS_LABEL = 'Learned words';
export const PROGRESS_LABEL = 'Progress';
export const AUDIOCALL_KEYBOARD_KEYS = ['1', '2', '3', '4', '5'];

export const WORD_CATEGORIES = ['In Progress', 'Difficult', 'Deleted', 'Learnt'];

export const TOKEN_EXPIRATION_TIME = 14400000;
export const SUCCESSFUL_OPERATION_STATUS = 200;
export const USER_SAVED_FIELDS = ['userId', 'isAuthenticated', 'token', 'refreshToken', 'name'];

export const WORDS_PER_PAGE = 3600;

export const GAMES_RESULTS = {
    sprintGame: 'Sprint Game: 0 / 0',
    audioCallGame: 'AudioCall Game: 0 / 0',
};

export const CATEGORIES_BRIDGE = {
    'In Progress': 'weak',
    Difficult: 'hard',
    Deleted: 'deleted',
    Learnt: 'learned',
};
