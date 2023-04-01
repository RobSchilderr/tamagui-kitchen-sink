import { LmAlert } from '../../../src'

export default {
  title: 'ui/Content/Alert',
  component: LmAlert,
}

export const Basic = {
  args: {
    text: 'Some basic alert text.',
  },
}

export const Error = {
  args: {
    text: 'Some basic alert text.',
    severity: 'error',
  },
}

export const Info = {
  args: {
    text: 'Some basic alert text.',
    severity: 'info',
  },
}

export const Warning = {
  args: {
    text: 'Some basic alert text.',
    severity: 'warning',
  },
}

export const Success = {
  args: {
    text: 'Some basic alert text.',
    severity: 'success',
  },
}

export const WarningOutlined = {
  args: {
    text: 'Some basic alert text.',
    severity: 'warning',
    outlined: true,
  },
}
