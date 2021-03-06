import React from 'react';
import { storiesOf } from '@storybook/react';
import FeatureWidget from '@mui-treasury/components/widget/FeatureWidget';
import { text, boolean } from '@storybook/addon-knobs';

import createContainer, { StylesProvider } from './helpers/containerDecorator';

storiesOf('Components|Widget', module)
  .addDecorator(createContainer({ maxWidth: 'xs' }))
  .add('default', () => (
    <FeatureWidget
      title={'Reduce UI Development time'}
      content={
        <>
          No one likes to write the same code twice, same as ui. I strongly
          believe that this project can reduce development time for any starter
          project based on <b>Material-UI</b>
        </>
      }
      renderIcon={({ className }) => (
        <i className={`fa fa-fighter-jet ${className}`} />
      )}
    />
  ));
