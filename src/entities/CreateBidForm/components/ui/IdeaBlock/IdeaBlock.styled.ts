import { Button, Select } from 'shared/components/ui';
import { BreakPoint, EColors } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const IdeaSelect = styled(Select)`
  display: flex;
  width: 100%;
  border-radius: 4px;

  & > button {
    width: 100%;
    padding: 12px 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.28px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const AboveButton = styled(Button)<{ $active?: boolean }>`
  width: 100%;
  border-color: ${EColors.Black4};
  border-radius: 4px;
  text-transform: uppercase;
  color: ${EColors.Green1};

  ${({ $active }) =>
    $active &&
    css`
      border-color: ${EColors.Green1};
      background: ${EColors.Green5};
    `}

  & > svg {
    max-width: 10px;
  }

  @media (min-width: ${BreakPoint.MobileTop}) {

    &:hover {
      border-color: ${EColors.Green4};
    }

    &:active {
      border-color: ${EColors.Green1};
    }
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;

    & > svg {
      max-width: 8px;
    }
  }
`;
export const BelowButton = styled(Button)<{ $active?: boolean }>`
  width: 100%;
  border-color: ${EColors.Black4};
  border-radius: 4px;
  text-transform: uppercase;
  color: ${EColors.Red1};

  ${({ $active }) =>
    $active &&
    css`
      border-color: ${EColors.Red1};
      background: ${EColors.Red2};
    `}

  & > svg {
    max-width: 10px;
  }

  @media (min-width: ${BreakPoint.MobileTop}) {

    &:hover {
      border-color: ${EColors.Red4};
    }

    &:active {
      border-color: ${EColors.Red1};
    }
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;

    & > svg {
      max-width: 8px;
    }
  }
`;
