import { Icon } from '@iconify/react';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Git repos',
    path: '/dashboard/repos',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Favorites',
    path: '/dashboard/favorites',
    icon: getIcon(shoppingBagFill)
  }
];

export default sidebarConfig;
