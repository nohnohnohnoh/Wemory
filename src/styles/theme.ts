import media from './media'

const color = {
  white: 'white',
  black: 'black',
  blue: 'blue',
  red: 'red',
}

const text = {
  center: 'center',
}

export const theme = {
  color,
  text,
  media,
  flexMixIn: (justify: string, align: string) => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
  postionMixin: (postion: string, top: number, left: number) => `
    position: ${postion};
    top: ${top}%;
    left:${left}%;
    transform: translate(-${top}%, -${left}%);
  `,
}

export type Theme = typeof theme
