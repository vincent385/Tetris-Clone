export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export function createStage () {
    return (
        Array.from(Array(BOARD_HEIGHT), () =>
            new Array(BOARD_WIDTH).fill([0, 'clear'])
        )
    );
}
