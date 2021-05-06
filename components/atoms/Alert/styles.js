import styled from '@emotion/styled';
import { Alert } from 'antd';

export const StyledAlert = styled(Alert)`
  &.ant-alert {
    background-color: #000;
    border: none;
    border-radius: 2px;
    &.ant-alert-closable {
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    }
    &.ant-alert-info {
      background: #000;
      .anticon {
        &.anticon-info-circle {
        }
      }
    }
    &.ant-alert-error {
      background: #000;
      .anticon {
        &.anticon-close-circle {
        }
      }
    }
    &.ant-alert-warning {
      .anticon {
        &.anticon-exclamation-circle {
        }
      }
    }
    &.ant-alert-success {
      background: #000;
      .anticon {
        &.anticon-check-circle {
        }
      }
    }
    .ant-alert-message {
      background: #000;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: 600;
    }
    .ant-alert-description {
      font-style: normal;
    }
    .anticon {
      &.anticon-close {
      }
    }
  }
`;

export default StyledAlert;
