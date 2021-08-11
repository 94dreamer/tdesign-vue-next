import _Radio from './radio';
import _Group from './group';
import _RadioButton from './radio-button';
import mapProps from '../utils/map-props';
import { withInstall, WithInstallType } from '../utils/withInstall';
import { TdRadioProps, TdRadioGroupProps } from '../../types/radio/TdRadioProps';

const LocalRadio = mapProps([{ name: 'checked', event: 'change', alias: ['modelValue'] }])(_Radio);
const LocalRadioGroup = mapProps([{ name: 'value', event: 'change', alias: ['modelValue'] }])(_Group);

export const Radio: WithInstallType<typeof LocalRadio> = withInstall(LocalRadio);
export const RadioGroup: WithInstallType<typeof LocalRadioGroup> = withInstall(LocalRadioGroup);
export const RadioButton: WithInstallType<typeof _RadioButton> = withInstall(_RadioButton);

export * from '../../types/radio/TdRadioProps';

export type RadioProps = TdRadioProps;
export type RadioGroupProps = TdRadioGroupProps;

export default Radio;
