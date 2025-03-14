import { Button } from 'shared/components/ui';
import { BreakPoint } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const CreateBidForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const FormBlocksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 74px;

  @media (max-width: ${BreakPoint.TabletTop}) {
    gap: 24px;
  }
`;

export const CreateBidButton = styled(Button)`
  width: 100%;
  padding: 18px;
  text-transform: uppercase;
`;
