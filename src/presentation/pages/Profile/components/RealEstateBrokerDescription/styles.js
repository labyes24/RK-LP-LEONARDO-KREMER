import styled from 'styled-components'

export const Container = styled.div`
  padding: 7.6rem 3.5rem 4.5rem 3.5rem;

  display: flex;
  flex-direction: column;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS['zinc-500']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2.4rem 4.8rem 2.4rem 3.5rem;
    border-radius: 3.5rem 1.6rem 1.6rem 1.6rem;

    article {
      margin: 0 0 0 0;
      max-width: 64rem;
    }
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  > div {
    position: absolute;
    top: -10rem;
    left: 50%;
    transform: translate(-50%, -50%);

    .Images {
      img:nth-child(1),
      img:nth-child(2) {
        width: 16.7rem;
      }

      img:nth-child(1) {
        z-index: 2;
      }

      img:nth-child(2) {
        z-index: 1;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 40rem;

    > div {
      top: 30%;
      left: 40%;
      transform: translate(-50%, -50%);
    }

    .Images {
      img:nth-child(1),
      img:nth-child(2) {
        width: 42.7rem !important;
      }

      img:nth-child(1) {
        left: 5%;
      }
    }
  }
`

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2.4rem;

  h4 {
    font-weight: 700;
  }

  span {
    font-weight: 300;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 1.6rem;
    gap: 8.4rem;

    h4 {
      font-size: 3.6rem;
    }

    span {
      font-size: 1.6rem;
    }
  }
`

export const CopyGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.4rem;

  strong,
  p {
    line-height: 140%;
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.FONTS.Secondary};
  }

  strong {
    font-weight: 700;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;

    strong,
    p {
      font-size: 1.6rem;
    }

    .paragraphs {
      max-height: 18rem;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 3px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #d9d9d980;
      }

      &::-webkit-scrollbar-thumb {
        background: #d9d9d9;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.COLORS['blue-sky-50']};
      }

      &::-webkit-scrollbar-thumb:active {
        background-color: ${({ theme }) => theme.COLORS['blue-sky-50']};
      }
    }

    strong {
      margin-bottom: 2.2rem;
    }

    p + p {
      margin-top: 1.6rem;
    }
  }
`

export const LinksCard = styled.div`
  padding: 1rem 0 1rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS['zinc-500']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.white};
    word-break: break-all;

    transition: 0.3s opacity;

    &:hover {
      opacity: 0.75;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 0.8rem 1.6rem;
    gap: 1.6rem;
    margin-left: 0.8rem;
    height: fit-content;
    align-self: end;

    a {
      word-break: normal;
    }
  }
`
