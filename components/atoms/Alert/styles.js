import styled from '@emotion/styled';
import { Alert } from 'antd';

export const StyledAlert = styled(Alert)`
  &.ant-alert {
    .ant-alert-message {
      font-style: normal;
      font-weight: 600;
    }
  }
`;

export default StyledAlert;
