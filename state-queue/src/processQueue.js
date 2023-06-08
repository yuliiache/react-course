export function getFinalState(baseState, queue) {
    let finalState = baseState;

    queue.forEach((queueItem) => {
        if (typeof queueItem === 'number'){
            finalState = queueItem
        } else if (typeof queueItem === 'function'){
            finalState = queueItem(finalState)
        }
    })

    return finalState;
}
