// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'tabler:smart-home'
    },
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'Companies',
      icon: 'mdi:company',
      children: [
        {
          title: 'Lists',
          path: '/apps/all-company/list'
        },
        {
          title: 'Posts Approval',
          path: '/apps/all-company/posts-approval'
        }
      ]
    },
    {
      title: 'Candidates',
      icon: 'mdi:users-outline',
      children: [
        {
          title: 'List',
          path: '/apps/user/list'
        }
      ]
    },
    {
      title: 'Details',
      icon: 'tabler:smart-home',
      children: [
        {
          title: 'Roles',
          path: '/details/role'
        },
        {
          title: 'Skills',
          path: '/details/skills'
        },
        {
          title: 'Education',
          path: '/details/education'
        },
        {
          title: 'Job Categories',
          path: '/details/job-category'
        }
      ]
    },
    {
      title: 'Token',
      path: '/token',
      icon: 'mdi:users-outline'
    },
    {
      title: 'FAQ',
      path: '/faq',
      icon: 'ph:question-bold'
    },
    {
      title: 'Privacy Policy',
      path: '/privacy-policy',
      icon: 'material-symbols:privacy-tip-outline'
    },
    {
      title: 'Terms Conditions',
      path: '/terms-conditions',
      icon: 'material-symbols:privacy-tip-outline'
    }
  ]
}

export default navigation
