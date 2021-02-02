import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const AppsIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M4.5 17C3.7203 17 3.07955 16.4051 3.00687 15.6445L3 15.5V4.5C3 3.7203 3.59489 3.07955 4.35554 3.00687L4.5 3H9C9.7797 3 10.4204 3.59489 10.4931 4.35554L10.5 4.5V4.75443L12.6886 2.48518C13.2276 1.92599 14.0959 1.87568 14.6956 2.34707L14.8118 2.4483L17.5694 5.17295C18.1219 5.71884 18.1614 6.58769 17.68 7.18413L17.5767 7.29961L15.266 9.49943L15.5 9.5C16.2797 9.5 16.9204 10.0949 16.9931 10.8555L17 11V15.5C17 16.2797 16.4051 16.9204 15.6445 16.9931L15.5 17H4.5ZM9.5 10.5H4V15.5C4 15.7148 4.13542 15.8979 4.32553 15.9687L4.41012 15.9919L4.5 16H9.5V10.5ZM15.5 10.5H10.5V16H15.5C15.7455 16 15.9496 15.8231 15.9919 15.5899L16 15.5V11C16 10.7545 15.8231 10.5504 15.5899 10.5081L15.5 10.5ZM10.5 7.70943V9.49943H12.29L10.5 7.70943ZM9 4H4.5C4.25454 4 4.05039 4.17688 4.00806 4.41012L4 4.5V9.5H9.5V4.5C9.5 4.28522 9.36458 4.10207 9.17447 4.03128L9.08988 4.00806L9 4ZM14.1222 3.17265C13.9396 2.99652 13.6692 2.98155 13.4768 3.12004L13.4086 3.17915L10.7926 5.89329C10.6271 6.065 10.6086 6.32501 10.7356 6.51644L10.799 6.59383L13.4147 9.20955C13.5826 9.37746 13.8409 9.40135 14.0345 9.27931L14.1131 9.21806L16.8708 6.59139C17.0433 6.41679 17.061 6.14725 16.9248 5.95319L16.8665 5.88429L14.1222 3.17265Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M4.5 17C3.7203 17 3.07955 16.4051 3.00687 15.6445L3 15.5V4.5C3 3.7203 3.59489 3.07955 4.35554 3.00687L4.5 3H9C9.7797 3 10.4204 3.59489 10.4931 4.35554L10.5 4.5V4.75443L12.6886 2.48518C13.2276 1.92599 14.0959 1.87568 14.6956 2.34707L14.8118 2.4483L17.5694 5.17295C18.1219 5.71884 18.1614 6.58769 17.68 7.18413L17.5767 7.29961L15.266 9.49943L15.5 9.5C16.2797 9.5 16.9204 10.0949 16.9931 10.8555L17 11V15.5C17 16.2797 16.4051 16.9204 15.6445 16.9931L15.5 17H4.5ZM9.5 10.5H4V15.5C4 15.7148 4.13542 15.8979 4.32553 15.9687L4.41012 15.9919L4.5 16H9.5V10.5ZM15.5 10.5H10.5V16H15.5C15.7455 16 15.9496 15.8231 15.9919 15.5899L16 15.5V11C16 10.7545 15.8231 10.5504 15.5899 10.5081L15.5 10.5ZM10.5 7.70943V9.49943H12.29L10.5 7.70943ZM9 4H4.5C4.25454 4 4.05039 4.17688 4.00806 4.41012L4 4.5V9.5H9.5V4.5C9.5 4.28522 9.36458 4.10207 9.17447 4.03128L9.08988 4.00806L9 4Z"
      />
    </svg>
  ),
  displayName: 'AppsIcon',
});