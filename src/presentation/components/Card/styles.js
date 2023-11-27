import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS['zinc-500']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  border-bottom: 3px solid transparent;
  border-radius: 6px;
  padding: 2rem 0.8rem;
  gap: 1rem;
  width: 17.5rem;
  min-width: 16rem;
  height: 14rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1 1 16rem;

  transition:
    filter 0.3s ease,
    box-shadow 0.6s ease,
    border-bottom 1s ease-in-out;

  &:hover {
    filter: brightness(1.2);
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);
    border-bottom: 3px solid ${({ theme }) => theme.COLORS['blue-sky']};

    > blockquote,
    > cite {
      filter: brightness(1.1), contrast(1.1);
    }
  }

  > blockquote,
  > cite {
    transition: filter 0.3s ease;
  }

  > blockquote {
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    color: ${({ theme }) => theme.COLORS.white};
    font-style: italic;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.4;
  }

  > cite {
    font-family: ${({ theme }) => theme.FONTS.Primary};
    color: ${({ theme }) => theme.COLORS['blue-sky']};
    font-weight: bold;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 1;
    text-align: center;
  }

  @media (min-width: 410px) {
    flex: initial;
  }

  @media (min-width: 768px) {
    padding: 3.2rem 1.6rem;
    gap: 2.4rem;
    border-radius: 8px;
    width: 28rem;
    min-width: 22rem;
    height: 19rem;

    > blockquote {
      font-size: 1.6rem;
    }

    > cite {
      font-size: 1.6rem;
    }
  }
`
