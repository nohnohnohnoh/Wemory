import media from './media'

const color = {
  white: 'white',
  black: 'black',
}

export const theme = {
  color,
  media,
  flexMixIn: (justify: string, align: string) => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
}

export type Theme = typeof theme
