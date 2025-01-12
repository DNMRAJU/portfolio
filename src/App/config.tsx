import { Email, GitHub, LinkedIn } from 'icons';
import { Config } from 'types';

export const config: Config = {
  name: {
    display: 'Raju Dantuluri',
  },
  title: {
    display: 'Software Engineer',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/DNMRAJU',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/dnmraju',
    },
 
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'mailto:nardantuluri@gmail.com',
    },
  ],
};
