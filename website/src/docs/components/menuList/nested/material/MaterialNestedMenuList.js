/* eslint-disable no-use-before-define */
import React from 'react';
import pick from 'lodash/pick';
import Box from '@material-ui/core/Box';
import NestedMenuList from '@mui-treasury/components/menuList/nested';
import { useMaterialNestedMenuStyles } from '@mui-treasury/styles/menuList/nested/material';
import { useMaterialActionToggleItemStyles } from '@mui-treasury/styles/menuItem/actionToggle/material';
import { useMaterialInfoMenuItemStyles } from '@mui-treasury/styles/menuItem/info/material';

const MaterialNestedMenuList = () => {
  const nestedStyles = useMaterialNestedMenuStyles();
  const actionToggleStyles = useMaterialActionToggleItemStyles();
  const infoStyles = useMaterialInfoMenuItemStyles();
  return (
    <Box minWidth={256}>
      <NestedMenuList
        // you can set initial state with these props
        // selectedKey={'awsS3'}
        // initialOpenKeys={['refGuides', 'deployHosting']}
        // ------------------------------------------------
        classes={nestedStyles}
        menus={getMenus()}
        getParentProps={({ data }) => ({
          children: data.label,
          classes: actionToggleStyles,
          listItemProps: {
            className: nestedStyles.menuItem,
            classes: pick(infoStyles, ['root', 'focusVisible']),
          },
        })}
        getChildProps={({ data }) => ({
          children: data.label,
          classes: infoStyles,
          infoClassName: infoStyles.info,
        })}
      />
    </Box>
  );
};

const getMenus = () => [
  {
    key: 'intro',
    label: 'Introduction',
  },
  {
    key: 'quick start',
    label: 'Quick Start',
  },
  {
    key: 'recipes',
    label: 'Recipes',
  },
  {
    key: 'refGuides',
    label: 'Reference Guides',
    subMenus: [
      {
        key: 'preparingEnv',
        label: 'Preparing Your Environment',
        subMenus: [
          {
            key: 'browserSupport',
            label: 'Browser Support',
          },
          {
            key: 'gatsbyWindow',
            label: 'Gatsby on Windows',
          },
          {
            key: 'gatsbyLinux',
            label: 'Gatsby on Linux',
          },
        ],
      },
      {
        key: 'deployHosting',
        label: 'Deploying & Hosting',
        subMenus: [
          {
            key: 'preparing',
            label: 'Preparing a Site for Deployment',
          },
          {
            key: 'awsAmplify',
            label: 'Deploying to AWS Amplify',
          },
          {
            key: 'awsS3',
            label: 'Deploying to S3 and CloudFront',
          },
        ],
      },
      {
        key: 'customConfig',
        label: 'Custom Configuration',
        subMenus: [
          {
            key: 'babeljs',
            label: 'Customizing Babel.js Config',
          },
          {
            key: 'babelPluginMacro',
            label: 'Using Babel Plugin Macros',
          },
          {
            key: 'customWebpack',
            label: 'Adding a Custom Webpack Config',
          },
        ],
      },
    ],
  },
  {
    key: 'api',
    label: 'Gatsby API',
    subMenus: [
      {
        key: 'themes',
        label: 'Gatsby Themes',
      },
      {
        key: 'link',
        label: 'Gatsby Link',
      },
      {
        key: 'image',
        label: 'Gatsby Image',
      },
      {
        key: 'config',
        label: 'Gatsby Config',
      },
    ],
  },
  {
    key: 'migration',
    label: 'Releases & Migration',
    subMenus: [
      {
        key: 'v2',
        label: 'v2 Release Notes',
      },
      {
        key: 'v1',
        label: 'v1 Release Notes',
      },
      {
        key: 'v1Tov2',
        label: 'Migration from v1 to v2',
      },
      {
        key: 'v0Tov1',
        label: 'Migration from v0 to v1',
      },
    ],
  },
];

// hide-start
MaterialNestedMenuList.metadata = {
  title: 'Material Nested',
  path: 'menuList/nested/material',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-components', path: 'menuList/nested/NestedMenuList.js' },
    {
      pkg: 'mui-styles',
      path: 'menuList/nested/material/materialNestedMenu.styles.js',
    },
    {
      pkg: 'mui-styles',
      path: 'menuItem/toggle/material/materialToggleMenuItem.styles.js',
    },
    {
      pkg: 'mui-styles',
      path: 'menuItem/info/material/materialInfoMenuItem.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default MaterialNestedMenuList;
