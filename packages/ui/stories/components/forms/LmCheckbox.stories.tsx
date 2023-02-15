import { LmCheckbox, LmCheckboxRhf, LmSubmitButtonRhf } from '../../../src'
import { YStack } from 'tamagui'
import React from 'react'
import { LmFormRhfProvider } from 'tamagui-extras'
import { action } from '@storybook/addon-actions'

export default {
  title: 'ui/Forms/Checkbox',
  component: LmCheckbox,
}

const Template = (args) => <LmCheckbox {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Please check this out',
}

export const Blue = Template.bind({})
Blue.args = {
  label: 'Blue theme',
  theme: 'blue',
}

export const Sizes = () => (
  <YStack space>
    <LmCheckbox label={'size default'} />
    <LmCheckbox label={'size $4'} size={'$4'} />
    <LmCheckbox label={'size $6'} size={'$6'} />
  </YStack>
)

export const ReactHookForm = () => {
  return (
    <LmFormRhfProvider
      defaultValues={{
        pre: true,
      }}
    >
      <LmCheckboxRhf name={'check'} label={'Normal Checkbox'} />
      <LmCheckboxRhf name={'pre'} label={'Already Checked'} />
      <LmCheckboxRhf name={'required'} label={'Required Checkbox'} required={true} />
      <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
    </LmFormRhfProvider>
  )
}
