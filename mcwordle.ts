import {Item, Feedback, Recipe, recipes } from './recipes';

function gradeGuess(guess: Recipe, answer: Recipe): Feedback[] {
    if(!recipes.has(guess)) {
        return null;
    }

    let grade: Feedback[] = guess.data.map(() => Feedback.Red)
    let count_in_answer: Map<string, number> = new Map;
    for(let item in guess) {
        count_in_answer.set(item, count_in_answer.get(item) + 1);
    }

    for(let i = 0; i < guess.data.length; i++) {
        let item: Item = guess.data[i];
        if(item == answer.data[i]) {
            grade[i] = Feedback.Green;
        } else if(count_in_answer.get(item) > 0 && answer.data.includes(item)) {
            count_in_answer.set(item, count_in_answer.get(item) - 1);
            grade[i] = Feedback.Yellow;
        }
    }

    return grade;
}

