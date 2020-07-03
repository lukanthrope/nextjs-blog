const initalState = {
  title: 'kek',
};

export type State = typeof initalState;

export function reducer(state = initalState, action: any): State {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}
